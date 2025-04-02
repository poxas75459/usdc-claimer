/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "56CwpY14wqGdmTzVdLjUGUZt9ZD314YLsLwHYzaBN6hvzNiaPmgGLkWRajHRBGoB6AmF1vz7eUG1TKrEm5FWTc5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jE7nRN75ZzjvqE16M67UZRMQHambQNxBbtXVtPT2SbwaE2k5UdrycqMAVc4bFLxt71sP8roA8qbjUMBhydb1Nhv",
  "key1": "2shFGmZPKeJrZ7EExab2enQVkcV4d4dQiTSB2CrTgmYGANNmZjieRhVwytLvQPGnnBbT3vmau3PHPPpydQrBTZTQ",
  "key2": "4s9KhYvfmpytRsqEtUfTscK4DkKAZo2B7TrzrcZyDrE3NE6tmryakPbJzxFWckq9ZbvXPFxnFWEXc9t37kWVi8aW",
  "key3": "5aVQff8iQ1WvVcJPWid9hK7eMGyfFSHmDM7kPw8frxf1kosjnuGVcfAdnwBzNrPGPG99jjkJHrouMncmK7zMA6U2",
  "key4": "5Xw8wKt6Bv59HdHK9eZTY6g1kJmWqKmtJAbPsWDZMLPkjgAWKyYWP2spRa6MmCHEjAeaKFeBxChpKXHJoHEVo7fi",
  "key5": "3xXs9x22jCX1VTFGaAV2bAUJCnaR4Lz2N3Uny2aGfET211GeE7biSfiFmfN5hGfKEfJZf4ahLJpgsp48AgcLePcS",
  "key6": "5ryaC4Nehr5qVzy3PVgakXwkAWVMzvaX2jhWxvHn6zSQFjwzh3TA1Uji5nwjxxyqygnVjURq3hnnqBfsdt2PP1t9",
  "key7": "2nPtKAYWt2oni8p5pD3WGemPV2koRNaRRY6ebcvG756CX47oJZAWHDYgRsDLz3MLbEvJr3ZNvx6d5VDTfYtBjokZ",
  "key8": "3VdMmUw1UYuwxkqrfNFo9TA9sqJyLrNo5QTcq5oip2k1QNYUxU7WuBCppQkafPsjZ58u3NsmSgtfATJXTq3E3UMS",
  "key9": "2toxvXGacVgVC6voFFvooAP4v6qkPH2bLknyppLi2VAjrs66MFrfh4v1F2i6cz75doqV3EWWoZPFWYqUyEdYcz21",
  "key10": "3y1ejWcKW198TX1veXWHVddNhMGVji7AFLpk5KSMqgDhQjqqrK5aagZHPCcQU2nWmuix7XKt4jiqu1RffLAovo1Y",
  "key11": "42C1TumAbgxPSwE6gVp7M6UeR7cjdtL7tWxaV8yfAVnV1BAEqavxtN9JEFcm5TosW5rtyNXu9e99LMNRpkQteW7f",
  "key12": "67pxGXcApKW4crrfcpg1WDWnUTZZgg2EG8LAWX4rqV2mSr6AKGH2QxbFFV54csNj2tvafUWEyFB2QCDU26uMrX83",
  "key13": "44cHWDn4GZVN8PDfADkez4pDLuULJN2Pyn1NVnfqBWYqasnLDNW6CSK8Yh9VWX9yVyP3KXYfFzvHh5X7n2qSUSTo",
  "key14": "4sigXNwxwYmJTN6oifZTddx3EVrzh3y7DE8DM7z6wY2MUrGdJuBi5aY5K8dJkhvATWvA7uhMqZ3q9vibwuXKxN48",
  "key15": "2fdc7f6zErViPGKG9Q3vSmRT2aGqGqsU72wMumrWdSgPLZ3M31Qoq6MY1G5Q7gA8Z7aGUbxdqH1YFhP6csSgZJp7",
  "key16": "3fTetcjU5zK5QHu2Ui26zwXTGKb3MZ31ws17jpbNBrnkHQgGD4M5XmMiw7ABfds7ivYrykdJcgipmRZ7G7fghw4P",
  "key17": "9ezYihvyiwrKrb3CKPzHniSNaE3jCDBf2yM6jxdwNGm7uG7E4HdEAr7PJDe1YXRMyYGWkrfFWwXdLZMYmdPk9er",
  "key18": "w5CJJrmFXqVDgoYLqrU1wufM3nGdXH3F5MDe9Vgv7ymxcgKzdfeYyAJxjcfL91htLUzUbbwo2PwnNndwjJMm85r",
  "key19": "2LY2BgjXrG8tZfWLkG38U3nyfvsWkGFZJnbR3Btu1B1TABepPMG5ZCwsQSCfH5RxkyUQafeffDKXmAvjFDmdVxt2",
  "key20": "37MWNvep5qusxZpmzXQQwqtBC74AjqDUcfxk7ow8ewmbjJaGvP3m2P5ijtc8VUQHf6jvEjesypiKEZ18k8sRGhx5",
  "key21": "4hfmd8aaESrST4Ems9S41VNFQqXx4LbPqHy9U24eBkp2keDdvpuRUuMpiHRqRTYamUmVtDuDqvwEsvrTzf2De6dx",
  "key22": "5Mindk4ubs4cum3GU64xCdAgRjGr8X8nbrTyM2VLKSutUGf9fEW6o6LyNnyHjs2xGm9GhfhE7hdJ5tnRvzy7pb4Q",
  "key23": "s5UR4zGnAjBKfsBFRBw9tRqKaMKzmsqmnWG1ejjTP1jY44LFan16dcjXYigAoPsX6nqtM71hSY4y3mMAMNGghCH",
  "key24": "5L2ZnYcD4DQSxXZSdU8NBgPbhpcCouMhpqwNLhCmE7uDrC7L6WpfoDFuWwyBXidcbgWtUXLV4gi2DoEjszcjPXLv",
  "key25": "4rGigtr3ZZ7UgzUSgdySvUV2MVHuLaFSu1PyvFj1dpusUTEmBhX7ivxcAXhXPZzgjnhm8TPYVz25mUbrBzHFpNpd",
  "key26": "mca9X9cKNsQivQtFDhN4DGXUif8iQyzEVPxBDwzsYyQu8r74zbttDWkt4nAYWsFk6vGqQYYUF8osDSstsfap8Ua",
  "key27": "d9ga96Q8HqT6Yhn8UzZy7iGxqRiVd4DDQH4pRkiMcjR14jv2J8wQgeamSVJyH1Ack69T4qAtGkg7xMTx1bFpyG7",
  "key28": "4BAK7qqA8EDKpNvdPJuBZBzZGEo2JqKycD1BuwCzHfsPgGLu7NHupFtpJ3piuqQvrR5S5xtxKrumRUEzY8xGKLmU",
  "key29": "28GrNaUBiuvsPhpZ34vJ7CBAwAPpu9jiPtEWUhbUMPa5XiTgYDfJ1TiKsyDndTtsEs8ZjBsNZBBi77TdiL1Amsgb",
  "key30": "3bUn5Fa6QMZhCL45zuRKiLYFhwAnTtVDdF8DVDPGSpBdMLT3tKxaGVV1yYgHXQMTWj1RZmkX1uBCyeTfhi9y9qfS",
  "key31": "5tLD2VawQeeda6nKrUkxU5HTNEfgbNYhrAYMTUp8DpL9FQEup6id4ahpxd6a7qdz789V1MJD5WUBxHu9sAaVTRND",
  "key32": "dYcpJm5Ha1JssU3FmTrvPLt1UPCfFtBnxjLuMbA6k8bEukeSiPMdHv5YS3qQyUB8jy7xQHRpXgBWsc3ZGorvjDT",
  "key33": "4ry6a3QixHe7wUFUWC7R1mw1wB3DdE1Wmeg53wUgHz13vbAti5LGzML8tDWr3zuZKHfNJMh8coqgG9uf2Bk9unu8",
  "key34": "FpS8i9M1sLzkEaqiN6tNZkTqjec4tjat5hVziugy7zRNN3wepdY18x42KTSeK61MWtNUhF6VtEH4shZgo8nUne1",
  "key35": "YDciTMJXEs9GC2YzrfQ9TnSGGEeXL4WsSV8EC5nMz1orDmYLN7xSRNVvZ1trAQK6o4zcHpfEMrEmqpN8hC9oCY6",
  "key36": "67EHtprcy5K12PucEffaEhe4eqstEL9hiApxArYJbw8CSMRZxBEgTEPzYpsrUpQvUUmCiBnRhBk7QdvQgdmWByRv",
  "key37": "4miUqPPJrnsZ2jmLpWvTLKNQN8yPMNLWMP9ek6AgGY3WEbW2oNPJbeHT5pxfZbMjPLiZzbgvB74B2sMznmfthB1T",
  "key38": "3ZMvd8WwRQNkYNXYxoGeDYjqo4Rw9iXBPJ5Fu7eRxSqvuxZnUr3dfgtuDKG7Wz68sUHdzPEMwwzzHfKimvrkESue",
  "key39": "4pZM33BEBZpzDHWTDURY2gVuyi8ixicBgTDdbkmuMxy4w8D9qD5BoAVE7RoeeQpVSZZAetugp96LcSEs1M1Nrq3c",
  "key40": "XzRKTKgichhwqg7E8LmgoCgYNFoVvyURGqw4ME1NddyyjFP5YEskPMnXGx3N7fvaaFbMRo1c5gryaA41SH9QMR2",
  "key41": "1nKeoY4i7z64xqZohhgZsJ88Xu4PYz5Mb43ra4jiAYXquCZUjTzy21Y23uvaqFQiexdRPDTDEMii65p2JcMdihy"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

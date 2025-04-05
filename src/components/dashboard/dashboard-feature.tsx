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
    "4a8LUs11xoEnHm1B7aLvDmNe2fjUq5hpZDJkTYCwjQvnPtYTKfoDfB52146XfjAAU6d3cEfqNYoa8ELFwtpo5KNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39XqCLewc1raYfv5WsaC5Zvdh3EWy65AiTwHcZfoqHpsdi8uzsohvivmLFgN3nqREQGM6256tUxCpgfN8bu24iZA",
  "key1": "5QtQ4tCYNF8QMCTPgGdiTknHLAQpQZdNWwLTF2yj1XS3J2LFbMXvH2eBipa5JYnBVagtBMYZpqCAZUU2TkVag33T",
  "key2": "5ubmdhaNE2exmNES9TvxZeuGJXRyZXrbnBg9U6AJCceW4bD3nLYRpYt92Wf7kSqw3ynJ1u7j9gVcPYjXLKE2h4Ai",
  "key3": "5J1rT3uvvYFTdXiwWJY8jsXGXu7nbWcuj2FFDNfDie1CbYaU6oAZWuUAgbgXS9w1A9JfnUuiWjNgqAyVaoL95gYB",
  "key4": "35j4drtQkQogEYHh7oJe2uJ1hSD1bNd49JsPPxLwXUREt3PqYEjKGEo7bPGzHVKiJpdQg8fangWMtf4U19KNd52B",
  "key5": "2iEhe2u4uKdY9j7G9DNTb7KNg4XzFiQxeqdVhCSN3qjucuAGjrtYvSrjy5ZLWbyguQ2a6QQquUVnTJp1hfBDuK6F",
  "key6": "282WQuE1e8SYzQCpRJjvFrtt2xfMBdrq4zdcpuwCK96xu4wQAza45oh3EhSohcUnsPdzgPDN7JgkEKe3VDWcH8up",
  "key7": "4RKHZrPuWK1vemfShRUrFN2i7RHzXSn6iSe2uSvmKvoZD1t4MFJNtxgWr568e2eGSH5x5fgHmJe3NQqaYypq1Vzr",
  "key8": "2gtAaYQopdJx1fV12YRufD3DR7JtNBrxWyUPuP9TdAqYEQ1W1kd5cSnRLkWYwXDDaGUPB7KrAAHJuccYohYRcoXJ",
  "key9": "3skxUb9PoBKfAx6sDihELhZuFAb8RPQ7MzMJz6Y7x5VBXEZE8XbsEdfAcq9S3pnHBHoBG2mdRagcx49E8feK19jR",
  "key10": "3S9A1M6Bzt83kRKUWyDMkHaHd6YXiS1kVGMcHeWgYSJRjYRjnAkydzi1Lt6zuNewde9qopMdDnmVTmTP1g5S1xsw",
  "key11": "FEpwU4FakW5X86wT8w58ejGmLNF8RXNWHHp1wFdPqGada2zK46FYzdU8jp5xH7bG9vHwvBcaFu3c2c7nC152Kv3",
  "key12": "5862eDs4H8ZTNRpHuskFZzX3Nd2jgEq31gtytpbh1iUAa6DQfs7Q1Pn2oXtJ5k9ZGoqkYosGR4h2hY6JTeP1dDFQ",
  "key13": "59jzMPFWX78tpxvgf97N524Ervs1p1wy6W2mX1JpEJTMyQEae7oH7cq5eQjkqSb4tu44M7A3u3q7WN1kQgj5fYRu",
  "key14": "4mRa71jcFqabfnuSwXSf3Wqa4mpqKdrE3CuGn6p7mftFXZ4aW9AcRtqiHNgyNvnpq3aBd7Cf7c2oERsBAQfizWXJ",
  "key15": "371wzHzkdF6iRwcEdEmfmqLmZA6xCSn3QJUiqWeLhLnRSUeg7offguJ4eDodsHYyGT3Fm3c26Lu7sgyUXz33NC4j",
  "key16": "i3C7Jnfeb8Pxqr71nSANYfPdwehLoajJydSFE6kBU66ejyvG5D19dzBPL2kTWH2G2gcWA6D84uJgeBHDU32GVw9",
  "key17": "2gBdKwBTyfgpRhZudmRUvN2hynr8ovpC1f5EyHspkHmNVn3VBcTMGdmxYjpAH39k7B85JAkN53bcPA8xJVUGqbZ5",
  "key18": "4ReP9MN2betgmz7KUC3zeFenH55uzMebuq9LC16xRfGZHH9AokiTUYCQPCaGLDCuoQjPJYxesqd3gbThVzKttWe9",
  "key19": "5b4mdug9kSaMhTWt1vceC6EJpYhLwyqU76aJwpRJS45zoDE8BF9vDxMb1p3tsrN1kU3Qmjzg5XeHi18JrxHB6J8G",
  "key20": "5m9dVTBWdBmFSBLgUD1mhqaG68UhyKWZifEPSHiVRUHWrZFcsaCgpz3VscYoqVAM6ifiYBJ5q3382FByL4uCy99J",
  "key21": "3t7dBjbEM1DETc7Np3rzeSczLY8mdMec16kQyNe7gAPxFXvoZePniVpyy5noMuE1vTwntQFQ1YQR9hVi5CuSeuQM",
  "key22": "3sivRLQZrFZxj7UMXqhVUcdXHLgCKqsSzfMYZdUr5BugT3MtBhALFhj65okSiFWZaTF7thqKVKDnCS68nTvC8x7X",
  "key23": "5thYCj5p82U7orS2KBpcfSoLFKLP4V2npnYfHpJQ4qKFwRyiT3m7BDviRfXCB8pn3mMBd1Eorjkmr4AeC76LfTNV",
  "key24": "5EGdCQJhUgXLyvav3u3S1CkvZENGP8u1orqFfjJDu2gH9HAdBgryY89dZEXccvWyhAFdPBNt4o3NUpxCPMZpFDYN",
  "key25": "4gShkB7XEWYHDaRBWq7X8LsouzGdWKkmGa3V5j6HyURVU5bvJKBdrQ98nvY6C9tD4UQNVXepapc5zLKp5KBEu1A5",
  "key26": "LcsZaveadTQt5SJyg13v1FCj3p3TVcjhmFr4fUqH2Bvz3qjhroFDGVJQS15esTQojWhZX4XMcj2BFZx6q7AvroG",
  "key27": "2gDfuTRRYrSepExzmKfyi99MGPeNWgr98Q7JfPRQALMHct8TeenkCcqynpLrTyqW5Dj5Sn37MtHbhzB2yi1BkAoP",
  "key28": "4zYk4LKAd4x6H6AEr4KTwYnwQeKppziBgjMSc4mw5WDybbaetNhNYd23jrDJjM2JeBUjiuQotzEnSHakLaUr5DQw",
  "key29": "3kFeE4JeVjSj3ETNHcmtz8puQMnajzVFCf4EY9mEd3zbdhz3XD3z4WNx7cRGWmz8haBLvpQYtLVuHwcZNn58F9gx",
  "key30": "49nCrRKJoACPRNGy79QhMaJJ5jffkZVKk4mvD2mtVN25KXHkpg1aUPKrpXvbzYNdm2SfKeTgijcgYD862EwmBAcK",
  "key31": "4XnCvLDgpDxJxUeecjdQa5ixhJAiYiTPJ7cbSkJUgqVAriAgZbSjAPUvr2W9aJuMAfet8nt1o5jmYZwZs4vG2S5g",
  "key32": "2xzjcpUEMFdS4MYnFGERybfA3m8fDSmkFjkD2TXWi4TeurFJ2oarq9wk6mzvqLRGa291erGhhWdo4QNFkYENgMT8",
  "key33": "3Fh9CxjXndEpFG8CAvB52T8XEjD1C14YEwMtXUnKoZoKXj64Pn3TJ59cKG6TYyq6WiyA1ixbY6vqyNeygZ9uva8s",
  "key34": "2Qtfhdwxfnj4vuq6d18KUfJj2gkYUUTF6pD2Z62EQSmUPg3H1guszxRBgKvHzTPGnTcEd38RwTAb52PpLecY5fDT",
  "key35": "2HKP7t26dWV11kxE5MHwJHPC2TUHF3GJ3ViuWwfFVHPupuFUdCkYR5NVVEa7NR1WPsTTJyhvJz2XFqNgohrmSLga",
  "key36": "4nPJxoDUvhqtpKnQmrAyqa183pp979DMdmvNXttAJMS2i4fJbj3xoxWZvBXAsn4peqpqwz8iyUfmtsVSGwVmEHtU",
  "key37": "4Uuhwjf5LnBJQmbs76k16HTDj8jnMEEERE4jhW9HrUG1ewXgjH17NXaMz8yE2yqYcSfkMG9CDeHgzZWUuoeT5rwp",
  "key38": "2Lw3m5BYdoEns1xazjLAm9j1p8r6WyuFr1meB72yQ9FqrzWSPEKQsyLUNUXc5oEEcSpiVwYDVPm8Mms632pzqW3S"
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

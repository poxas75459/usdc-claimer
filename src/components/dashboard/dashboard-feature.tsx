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
    "2hQdr1VrGDUGjVgnL8VEfsFv9wo1SSYZqrmNYKVgH5jS85eDYBkNw5RooCAsqnRrKRmtq96911Rf2ZhxHhnydYRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "547wwgR9TVmdnUTqK7RndmLiQ8HnaERK2Kd9yQsgBsY58NdjVS8L6HW9Ups7hKn4sPzmro4LRpuJokDGxYtdSBqU",
  "key1": "4wUTJRAiWcKnXmWyiNLyB8un2gFeMax4mhrb78oqCNZtzeBsfNHeQr2X2LseNqcrFqf84i1HCvPT1ZDMhMKRaSvb",
  "key2": "5h9MwfCHaPLn36GGL9v8CnNyjR6FNhWo8b4Rq91pCnW9N5bV3zskwzk7gfNUAJfqs71cMESp3hySDSe6Ecd4HgbV",
  "key3": "38AGYoPbx71D3PKnvGvmCU8DPfhiVBgHgC4HU43cYvBjyGEWv4oQpqhzA6m8gtzD1vR6USZGzTntweUeSe7aR6fy",
  "key4": "27RxxU7gs5zMJYcJ6bunZpnuGUsfBaih4HQ5HBV4QJCmPXPxNpQLxwZhgTCVbaPQh6Gk5yNpd1coLq1jv198GRTv",
  "key5": "NEo7qLb9LEdULHR6QcoFMNS5vbog1ejxGSBB1VWYZKPdEAiDkKzjVfnAm8iuvNFMr9LAdC3S8wQRU6ttyQwh923",
  "key6": "2S1nqkJtYCUX9KonoohHXjbuGPMPenzsy4jegpEyRwjQqnhsxEXDsiaKzita3Lq4r7fcPT94EzcKCRgrjVFysLPn",
  "key7": "5HiMNARjhpDmUzFPAyj3SwDDtSZypZACMnNAVQ5if8EZ1F3MUZHnsLsm8Cro6HyLqZ3ufnCVAhv2MHw1RNVQtY8s",
  "key8": "jYu7LQpY5yL9h9UWvFgRiC4qDJPPu6bwGQZzxANTj7AK1QdrZdn6mokxNHos27hEg6L4NnR3ao63N42gJjWf5Dd",
  "key9": "2mv1VABpbgqsHobvq7J6FrjYyjTUaGsQJ9zz1WXLwDbMLNbJ3Efy1xmUmpNrgiTc8HF1EtDAuzCxkV8AuDb9jkmi",
  "key10": "4QxPdtwmSWgNEnxwPXr3r4aTqaEUkuNPcmmogCEhbXxHGPmNhFjMnPwhk8UWsKBMWJG944TmJxW8AR3hv6Ez3j4E",
  "key11": "MrWH4Uia5APPoMppvFCMBZGrnKkyEz2XqZ5xWDxNj8Zc9cjyfaX42RaxveGsqaZQGq2s6M555xcvxJBh4tfnWaQ",
  "key12": "3u7h9dkYBnbiMHMLBvdy61xiJcAPFovekp5iQyptYCdyj7KW5ahiT9KeCNgM1kejh7uaAawGgCgKA9Tw8zC33Cc2",
  "key13": "444F6nLWoUY51dzhMZvybFSgzMS13uA7h7Up9jmJQw9gv7DmMGWHfm8r9Pe6C1FXQX9vRAeLbXxeZsJ2KHa1dvre",
  "key14": "43gduCWSZshpfvDEdiyKqkTP72AYnp2LJuaVNdT7UR98xrwJzovD6fNHYKSEL56goovqLDki8KA9rq7sHNYF7vh3",
  "key15": "4A47gJArdJ1zUYhDy25R3vubxAnnKJSn1rGmWHdnNYMH7pFTqzHrnkSqWJxqY5uM1zDUdC5SypqwTWmJfkPdD11X",
  "key16": "5crjDYTKiJQmshuNRvn6f4nef6YKiiuRh45RDNkw7CjUxNWK7sLu6ABDZBE6LheHVAGgJLWcbtUvt6mX4vBRpLEr",
  "key17": "3gbzGDVQ7UBCD8HhrTyKLegMrjsURapRqJKzrQbfFVYQN6gxrEy86BM4z1pUFwuncRGFVcXQkdG2YTeZPf5XBB85",
  "key18": "5ukcdQV9SVP1U5mVexcuukn6QTzBiBPvauoKKfCpBZARd2BT5DFvTocLobA8Uxadx7SPwYC7vqU3LVFMC21gpU31",
  "key19": "4Z9iJ6Wpjwdj8uP4NPt42hrBbUjrRJydAxpM6zgQEL1hxy5udrtWThUtgMrb6k8qmeCFrdq1Sz8gSRvJWTZyc81s",
  "key20": "3ro6cV4urec671d2nGVhyZzmuhJMJNQ8Bz1D7zdEYrhw46kaKkN6ReJeZCiCdXL3w3skkHgefZzGk4RjuJ7HLCR8",
  "key21": "62UjTysmAhHAmYXUTV3iGb82gkAuFQXroipSTmWTZSJJTLoU3bx2qV4pD2MGJXrrFFyF3v4rf9dusVQfeEnzagX",
  "key22": "2EnWqZggTWnWDq6LWfNZMxq1UZxaxGtyTJxhe9yTXVASgpUNnwVoyWRbADfiaiYz4gKGVsjWKwZqEpArLCgu9F9",
  "key23": "2gE3DkEcxBYonwx4DKDwLEUbaKJyEKaUAqYBbpktMLwo2PuqkAMxte6wMH1njzVcBxuiy11TSuj7KQcXBWwM6yGX",
  "key24": "3XjQ3BEWfuxFyQkaAHUBuMhxFogVqACXBRyB458bYmcJjLprJcHYtYaqdiBdpFxPYZ7wegfbCae8kZ7Jd5VW72oQ",
  "key25": "2fcBFcCFCLMDnqD1xdUGWxnwK7ZeSJXt51tAJKL5T1jKCrctbb59sexURaCmwdh3JZzsa6aqqFzhCkNigdSejQNR",
  "key26": "2mjkBnX7kWcTy7wbEU7t1EPTjF7QkaRCCkMfvvMU34vkEN14uLrPzVF6sNuZtY1aMr6JmfJSMeZwh44L8THRxh98",
  "key27": "4kBUS6jEg66VPufNwVGZKSCGrQ3n26eQkZxhHhMEXgPRmwoeTeoCQxTN4zxz1WQsHtJs5invFgZUW73EU35gKLB3",
  "key28": "38ju2iA2UC4KLZsjZ9pfKMFjgz5b5pKCg7CSLm3NiBnQZVEMzCkAPWhMDWYvXGBbBKknVoZbEubvc2VKopBXqSbg",
  "key29": "3m6sdN9ALKQGFPyjHjmi7468Ujmhe2N1PvgjUwDsTMBC8d6h14oV2dFZvSDKMaAcbUCut6inwhhXV57VPaoZMKZe",
  "key30": "2whcBUtZ7z9bQ9R89SGgkgZkdzAq5TukzJWUejH7qRdd618dyaAMNYmX4fJHDubLzv6rHbAaKoZcUYESVx4WpX9v",
  "key31": "3pFcpovCjpeTYX8ENoMEpiacwq8RZhCcUB6JKaNNshJcuVDrM7SUPVt1Z21eGqnNBhhgYeRiH516RRQwdxU2VH9e",
  "key32": "2ZvKB1M6zxjvAfvadFJVPMxYhtJJWYVgVJ3UWs7jtNQixnmcDCmXxhPZt95vH5ZPmxYPs5kBJzkd8R6DrERo5WeP",
  "key33": "5wkhAw3pd99f4vu9LLQf6NwnujTihaKMq6h12qpjurFkqkY2oiABXbM57EGrNq7mWeJaXDWw6bkCaVThvGHv7FNy",
  "key34": "2qMcohQMFWZVSJiKncdGiNr2DaeBwsbJ8CYS61yw39ZiDX9c3Y69orBoTn4EqoKyhK2butSp76YV6x2iexqEPfHb",
  "key35": "VQTDLKqYtYEb4jjveQZSQWGF8Jzrziht2tcw6DDf9MSp1Nw1RArK9nz2Ykj2tc7e7k5iiWtgU3nJDWRqnkbWm7f",
  "key36": "3aS9iSLskV2uyPEaX5j45VWwSUKwPBLXDY7H6iodR8KTA1LQdtsCgMFr78RwW1HbKTMjseYTVA1EcCJYWyvRPFBA",
  "key37": "2c9XrvZKvKo3gUh4xQv5YVXNg9noWZjsuiTRBLnMtdwfUaaZQBcUZ3znk2LeXhdqVxj27ReVA4sbgH7soM4iUVQ6",
  "key38": "sZE87wxo7car82ujoBDTSErwcchJct4RGxvccEXogBVNmtCP1Api3EkTFNu8tiU1sPXz3KKK5zAJjZvWANtt32a",
  "key39": "3iZMhoDAscHEDYNXSBFTv9TXTcKvgKYPn4txxg1g1NRZkPUSFoUQEdyW683zRkDW7ZsRe1Wp4KisWpVTrcUZ9AvB",
  "key40": "2rwNY3VqFsGj15DorvCMWzCxDdKLn7AAfgbRGYtDaEoTin2CZRfC9Z1cjdtXiC6qdFefnJzADbprXtxyPb9qtWbp",
  "key41": "soV4oAQ92xySAyESR57xEEj1L9EdjLHCD5VPMzhFGL5LGsom7BzKD4t8H2ETyiVY3KshYp5ChtmLxpvszYudW3M",
  "key42": "sigBxbzuxzX5jHsrig2bwdeZi6FZvKpufBmjtym49THM4T5sWdZ2FRKv8cLZQrDEj88ZXayhL9AzGZtWT6eHEZ5",
  "key43": "3Qo2eCpYCFAYzoepGff8zqwbwWegcxGrHboS4wBTn5nLXaWrANDNreDUnAenwuZ3uKfSA15JCGheAaap5w3EqHRc",
  "key44": "2K1DBSdDj1WnZezKmhYfg5ZFTJQdEhiPsTcGS5nKvoVfWbBTKbt2bpNBp76tAC1DkzynrX2GX622Pjs7eStFr4Cm",
  "key45": "4rfUTCwESWFoy4Zsd5FWK1V3anwyEAvjCb8eKaZFkYLhq48TLgwGRUnxx5DnLVHymc6NuqR41uKSteZY5EEx8bZC",
  "key46": "4Z53ecWDm8rZ5nzy9V6iuMe5fVdNu5QsWgmpoTtNq9yqoh7a5tHFvXHeA2CrPuinPb3wVHSmd3qPLzy6GawYFhwf"
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

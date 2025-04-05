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
    "394Niq7RmRDUoyUzC1qV3k6MtNFa8qSQN26EHwjrboBB5hT9D6VYiHYVkFjjm6hZM7Wq4cL5bkf9QoX6hGfKjnRd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SLLQGH4q3qxMYPPS9zmi8KTmzSm2cfSmgiFAdmyMndvKNaywurpqAGCJgBNJiSC1vGdtUEbc1v1xBBfcB69d67y",
  "key1": "26GQaCxLtDyNXJak3uBwtmsR2C6cbAmQZJgCeQRVEM4b7cEScuYNne9iXU7iBM9BrbNRWefRicKps8jk5xjgcDd3",
  "key2": "2knd5Ho7gWp74vBvKVZtEUuMvDC8LZjvhm1zUCgQ73fuHfQkQezh9N3DqXyM15REDDPnjAcoje8cARRZpECucxPc",
  "key3": "5hGZBCpYq43hrJ2nBbP3sM8KFTDdevfU6otCUAi4Ne7c7r3kvwb6WeTGLA8U7mjpXxTeyroCdVYViZAty8Tk4XQC",
  "key4": "53r2NZ9RXysR1QPvTqGmehiTDT4vJWkdNrsYpP2Qo5SwVeCEgjwNfvGW7Esdd2dF1VdhCe8P5u5Vc7YbkK7CsKoZ",
  "key5": "8kgBBF9yF1zSj9Hjcsc8DY84GvhrWzPy87m8MV7dyVGJaA5kxqk5GrbcWsGQZrF4RYi7XpnyqBFSdZRGqtA3UZu",
  "key6": "3StNpwZTS16Etj918muDMwduSXkxJ7pPhW2sXPNPnsjBa4sLYr5N4QRAU4ugg4NP3YZz6h6LPXreJDBRUchijtZq",
  "key7": "aUDiZxEcTSj8P86mxKFLns8rtozH5x7LRnSDJWfvBJd4TkbGpLjS6a1nmkXWMPE39JG3XKShgFictZ1a6b2m3Ao",
  "key8": "3he7Pd4WRaecrJQZRzfNCba4Hp1NewUymjn8ge9AEvA25tVJHSdGTJMgVJjMSdHVWonzwBhkmTn5Kq84TFTwTRgW",
  "key9": "54oPQSKb8tPsh8rgS7v88M6rotH8rWNUqMnfpr9G2sdHz4q61FPn9U65A7UtzUx9WMEsSCSwNHKEzzCJ88EQKyCu",
  "key10": "2kb3fa2nGbq7Y3JeMnRSH3PqXKk6bwZk78L1jV8i7rqSzzaXvzr3hLMyePVudV7U8Ak7stzgaAasDqZrcvgik5zv",
  "key11": "5dwFmn5hRiGyCLyPYYxWHn9L7jZMT1Q5EYn6WiXi2Dush22Jh3ZyHq4c6x4Q6mSHWJdvE2hJV5dbtXmjTgmWYrdu",
  "key12": "64yEZTikWn8n2LEgm8VsdJFUXCQn6KnpNTpMQbARzFFWZDhnqAtwj3QeMeAEgaLzJNdveH3npfYs2KKr1EsW2mai",
  "key13": "32CQyxF25VFtUY4ywpACcZedNo7ipP6VJVh4UhA4QZYv4t8uqZ4fxQxo665fC1sevjXgjXErv5L5NRno97vsvpJe",
  "key14": "23HfGwNyZmdPVGhWYHhZppe4U62Ag96Q1baMkZbnPhwBdkt3s2crn4nc5LqP5boLHjHG4LBmrnkC2RSx9RcztaFv",
  "key15": "LUxsE6TC9EBppVnYfgyqNznW4kZ9oNcZuWBF7CYQim17gaL9eTQpLqchQ2dVmW6GDJgy9vHfzAptgofHhYgJGsT",
  "key16": "2gWCesrDW4TiBUz9Eiqvx4uC5rBogSJC5NFtdyxw16w9rLFPytGN48rtiuHpW9BDKoLZv8uvmH5myrUhBnhFw6Xq",
  "key17": "58RGP1JQhinpx3vJFhMhsRhELddfLCgX7A8Fn8LTLRRVvDvdYqQtZtbxDvq4R5XGAmxKmdLzME1E57U6W4u4J9ct",
  "key18": "4uWqrDQUWXnUNwhPrdvjHoVnrd8CNR1sNQRY6wfvPqFK5L8cBQqDTTF7NnPqxqvPVMXQ1jLrsftjwMt5rnToYE6m",
  "key19": "4tRUfq4io8RhxDGM3Vy3utDsVppFszwPqPTSt8KKid5Af4DEQ7PC7tnpFdzRZuJNGSgqYE49y6Zssw1T7nfNKqpC",
  "key20": "yj2bLMbmEfCWEL3bC4LrisBucyhsULPXyZDuuJ78Jbc7HCzTuGA6UKDcgiWg4Q71cbqWsn2LLSqEuZvc5W4xpLq",
  "key21": "R8wmRvumeqXqV5Q5fjVUVwCWazPAFhyQii6CPUvydrokt7UsViwDqVfeqS68AfG4PRekgFHGeK5QeXcQSMGsgbm",
  "key22": "4TKaQPHkjZUWUH94TsztbHG3HSYekdyn2uJ3AfkP1JdcrXnVdF8gcVZqg4YXV81jqtM9fKRsdzD386we4vY5Sszq",
  "key23": "QnyzmKR4snCJDUngv4wha9GyAYdLQBgtBRMhLsBJJCgG3KQASos4Xq8b33ujdTfqKgw5RBZXrrzVBLykNCGpyDi",
  "key24": "5AFDfA5cR3SMgnBkXm5QjAzzkhdBN8fxRjV6pMsnhdFF5PHi86eH7A5vWiomxrsV9XyY3GZ3QNM6MwYFU1FU3hzx",
  "key25": "3sgfQtzh9qfhLg8gABvusk7exsU1NLVaZyCpr57h21FNjhnAr4KQivJmxf9bdAsTamGMoqFU9K9WfhxPYmqkwJPc",
  "key26": "2v9yBzjdjMHwVD5CaKd1oN7pvCj6oU7H1Q83tcqsFJBbByzYTqBW5oY7JX7b7s3LW2uLGwDxSXsYSMgk4zeRnuro",
  "key27": "2KajpfGsuD1u2q3RNpck6ZF4xRbbNzpL4f6TZwiEouvtVhxWUDzn7Yox216jBaKyYsh45xCuNSCcJLb3qUJbL677",
  "key28": "269yCNc9jSDJTUx5G74VSDLjfWetLMsiRzG63bAiio3pbeRhRSPrC2FAgQkoVbHu34h1Wm9MSqtNJP1EAPrAHTsU",
  "key29": "5D2SXV8o27zhdw1JEHEhNxyq9CGZKoFzHJpaBfqT472CPHXAfNoscmTJT8cz6hNp8uwuRQHJHvbLoxgVeKYMrHCp",
  "key30": "2rntcxdxPVMU7ViXLsaChbNHQjGnNypY9oC52Wx66aPJ3XQFQAzmztz125L76CUc7GyDf5CZ1Ya38jzHepQkUhmg",
  "key31": "3yxWYpxTkTebLHtA1xdKRUe8dHkfuUirHr9dYCDWosr7HMUMADF3vDG9b5RMJU9fFePz1KCeP8zPMbEhroRT1LGN",
  "key32": "3HcySeZaJBc1JNuLFdnadxDwE4wvQuHpDKbqhU7oA18i8R9Jd4caZJ1vo5m7WpmB3vCJCD7bpt7VZwLp3wn4FNdq",
  "key33": "2qSZ5mtfpp1nEHM2DrN9YrzXvigBwqRP2WCfviCPbcgJes4hiiWkK21bcnXzjgD1fKWw3FRiptsJ9DaFc5xgG7dZ",
  "key34": "4cwa2FqzAgxbBibdM1QLMvtrqduP7oAzZ8VHwBgCtNWXEDZGgDweW4wPyXD6Exqwv7xQLBJqcM4BCAXBTEnTz1yz",
  "key35": "3LyhAeSpwat1ViNFGxvSCojTFDSCRsFzAYAXyixtrNfL2hbXNZgCchNj6uo1hzJLaERX8fc6teBe2xHvrVx4bdpi",
  "key36": "3qS5iL9nba2D35r6ssmCv3wxe84aNb7jxj1hv9kXtYB1ffSKEi4wVFjVUkg9K4yNG5ZqnTfVWecLcnti7cVf4bDC",
  "key37": "2KPn8EeE3D2PcTwM8DWT28twoLAgGPErnWeVGMqc7GHCVf1DRE2TtdWZNDvxGMZjYUmSkFvgynnMYAy6CvDhcC4e"
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

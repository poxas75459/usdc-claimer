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
    "67hMw3eKpdh44PQLNgBd6oxTYN2hiMgenUL8vFq61AVqFxDhsNvJC3Qs88jE8MBVsDJbL1ngv3QpW9V1w3otumNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26dNkwxea1Fks6yNsVTXSbKuYmBe9JoJZX6toFHrCJ9p5xKkPvcNiAnW4545y62azzMSpxzt2qe3j8wgBcErizsQ",
  "key1": "XsXXNCGhEEyiV11mMXkpV7n3bzhURdwip865BcabL3YYquyWYFNptP3z6oadeMHhVjc36zJ7CqqY1YBj3Z1drvB",
  "key2": "3i9xYAB4AUcHdiXocbsw56qcN29FhyB1vcBtzARpW8groRFeWY7S69i62ciCVaWX4TjvRQ6yYzzbKoTSTc8Ez7WV",
  "key3": "32VNJuENNa1mL6jhTqgeS4Ai7QvMJU7RiJdgLc5tGTQANrzurMZ7eGWq1dTcgxd7QuF6Js2N6pWt5Hg8mi2rYBSh",
  "key4": "2V7EgsXnFGJsjSfrCRnnrv6XBXFigfck4NLqTrUteT4QSmopnmQFSmN5J5p8BWFhu7iJkmFoPPvM8ib56Xfo8eB3",
  "key5": "5vYRZyvjSFssLokzQvwmGP5pj3TX1KbQCUB66FAdFn3Ku56uQ5rjkNP5VuAJMwWk2TFK8pbrfB7UEPHoxdeuorPA",
  "key6": "2tzEnCCs3GEsxrFRbFdP4BkczW1ksQWK6BbN6qq1LkRG6vBjXHLHMsBSF12sZk53opae4wEXJLkQvpAm5re6zqVo",
  "key7": "29yM8RygcuKFx6ZHZGbuVdXaQXKZCiEXiuVpqGqoSTZPiRBnvP4q7Y2LoBmszdtnN6nTprK6vJe66ge2PDbKfBq6",
  "key8": "RuXwziBRta9iAQcAs7ni1dW152em2ZfAGXMYW4NKw8QiprAL7ofRHqfX1WLf3Z6fN38pjCdrh4L1SsUTGeMo5jK",
  "key9": "WXUYA1oHxD8Yuz7x9DYh8aNvGRm5kBj17DaxYWWu6PpTYcyqird8he5s7TbvcJ7F79NXdb6HHX2GtLp8i2unmED",
  "key10": "256wtbw1PJvGaZGkn5GMKDYv8gtBY3oxxaVTvFCKrvbD2H13YiVTPnmFEW6hjL5V12juetSz1dX9E48zHM5CbLVZ",
  "key11": "oDq2hKK9yu4Swc7pMbbrdxLFipa5digsa1Tmb5naF7SzTYSXZbxf8gEr1vqPgqVA3TNGn9GQeGGTAYivMUFxsvk",
  "key12": "3eYgEEvQaKgXBrCb2sPi2huYQpjZLX8fB3o3QtgYbtnWseKxtQnDfMHaH3oRLBUhe4NkfUJyTzKHQD4Q8bQ6cwsW",
  "key13": "5kEdnEnd11BoverkAK34kvnM2MQBSwRxMzfCaaxnpQxMEAWqpTk83Pj8cmwviyTkk8sPA7bc95vTkvatf2tUeyE",
  "key14": "4wi4uNHyc8RQmSvVgfKZzqMn1zfLUKpDyFFm8seGtrRqiPdpsiN4awaNtZQMJhWT5U1kSKc7tJZLDoFDffk4hLuJ",
  "key15": "2CApgkmMPGNerbVf2xWagauJ2FqhbkbYQPA9x5j2XdmnBDLWQyzRVFsW4cxGFMcvrwcngie9SkMt392Ym4ic9dKq",
  "key16": "467z7b42uoSXRhyVgXXRHqNCoiDEJWG3nBJuXn4G27U3spvUG8m37pQ9bLcLzuwSxgvcbrbhHiufzNfNY1XBqQvp",
  "key17": "4Nboydhb4KJG9QRcGu38khTStLo4YPYmefpjk1SUQZAdBF9KtFwazXDdtZhCguJ1Z44eXPp21MKCNpwWx1twdHW5",
  "key18": "32DqGVorx8uYe3nfVcwJKns7b49riR3AcR3VyUkjwzZD7rjUuuXUHSKdraxjmbydEuoFnhfcTE2pVZRbqqnWK8rv",
  "key19": "xirFCJ4CuhFreVJ4BpyGw67XroKbme2mbsyvJ85j7LMm3wfrBKynuosKjn2minTUuBsPJaYkbLE2ySsXXRSJeAQ",
  "key20": "3C656TKpnEkdMiVZ1NMBRKNgWWQxPfraXcTaMbmqfBBA2bSfdH4RaxuWsaFB61bK5Yu6YofNiFHujo9goiVAbCbD",
  "key21": "Y4UvZvCXfAqfq3ReGxQLXmhstaScTrbLfmaGzW4H5tiUPgASThbdgvkuEzsfvAHHQeu2HUQM5V5TpmJKix4Ra3u",
  "key22": "4qfs4dpfPnrfsJ7PaZ2hrEwqv8f5fsN7bggzA48aYigiconDZQbgSxStYyH8ckDNR2Xi2UF6yDPJ83GjxopbTzAR",
  "key23": "4u6xLyZkbyaGchSw3ZxrDtFhs2iRgvrPDagMtFMxQahwia6a43d3SqZnpoVhR8gXbw8S4SVkoa1ESqmimvwEzCjG",
  "key24": "5ukT9C5FHHFnw5PzyG3sEuRevAm6HmyDGA61ya52VvvmDvBAW8qxGHxkhRaQ45tcFjbjvJ6L4wGAai4cbwcaToK4",
  "key25": "31eMsncjytMzenqqhBt32hRnrb5ahuWtaZpue61fvP2EbBd89YpP2yv97DNVCdwvC4X69XxjVHufbJgQn3k4EXte",
  "key26": "5S3aiWjDM7Ke6AwYHvpCGrjrsKgNFreUSsyAB1hAtV89ZoA982X3UnDh5cURiRm9vukqXJrSkwh3MyN2GzKfyFEu",
  "key27": "4S5HCMdncG13YvDQsPBAdfvJACZuxQZtJpTNfQ19M35YgALJpDNT8obqJLEFGNrZtpp642mTBDmR1py8LPfFV7Vr",
  "key28": "2heGdWtK3k4GwL31ozjjbMjHPJaL691cCJ9K2jTfj7AUPN4bvtPRKyqcyhzwVpQHb5qpg16R6pQVxR75STgE1J52",
  "key29": "54kUsmmTTAyTwG5JPYfZsSrUXn7fKy9CLKAM2fdEFi3NDD8FcBbPmZxBsByW3PUdmELvwsqg4dPpFCKDqC5gdhqm",
  "key30": "5vmowbp7GQJRBWmcGMuvPXASJtdXk6uLQBpn2vva7graeXVuFpCduVeLFooKZMybNRXmzEooeVTaqDe2MqTyUunF",
  "key31": "3hRwADDW5nMhtrLpPqd9sB59u3gebhRib7oiaTuLZGaDJa8xnyr2LZaEhkdkxKMyGnbwscUAawJruYAB6dVLMY4f",
  "key32": "4i7xSfX8sjfdBvvBbuEWtL3RJkWi2DkSHpRjcraCNyN8Wep9CLJCvMomLAWGvgDaGKLNdLv7z2Y1MsG5UAVCUAT1"
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

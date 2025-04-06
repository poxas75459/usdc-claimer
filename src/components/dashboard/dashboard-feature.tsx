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
    "BEgWcP6FM45Q5MDY5GgARuyDewjfg2AX987SZX8HSZMLA2x1cbD5xyc2gvj1dYiBmhmTrGYyKqc6RJrez7jghBw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i8mwMwHA6XgQsXmXmDmLzMtnQDjFmT42KeMNcZoCNYD4GqBbSWACDGToveDDERtkihAVXcFaHzt627cpJPiWHFk",
  "key1": "4CG7ydbEgbCwbQ6mt6JZ9mPRdyDex7sjBe9DuStVrCzyvZ1h1N6rTGbAE6cXocqsEXe4JZHCSFR4r7wSiYcWCaLG",
  "key2": "3XF4Dmz993UnruLzyK3ATQHTa2ryGY7jrobmsK8TEVmwX2tz36jCTA1tbrP1FtaUhMgAuFVEFu3BpAQoDt3VWU4r",
  "key3": "32QW7wtTsMeLnuy2CqgNHa1QDxtRoMZe76vjhAcPFjFmLnpAfF1kuARKGrL6WjUnXnDFKxeRGxHYVE5YKQxyD3cg",
  "key4": "fJbnJB7yu7fcWRa177izLoEKnwho8989BoyDJWfyAuDJgo4aWzChpEtZbb2v2feV3jJ5oyGzH9dvpd4wyfgmZMP",
  "key5": "5ZUEEz2ZvfbXyWmWEDDUJEkbJF1is2Cr1eop9kgMCLhkYiAWessfZbYxGN8SPqukBLkw4gXhfwNuMFwo2nZyE8tZ",
  "key6": "66Q6uFyi4joPs5G4R5EAKYDprq8QrdsaKF9G5vMfv98FpSbLbSV2FtxPfGcaViSSUxSJEuBRzU3j2AHQRUM8XrD6",
  "key7": "39YzvEKsMdRKv4tbC4egiQhE3pBPfLN3nirx7pNGLifL8RXm4c5NGMKxgHNR6KeDCFiQkynbthUpfGibqU3hFwp3",
  "key8": "4aEVSy19aBXKtYj5LLMqqip9zTqG71Lf9F2FGefyxar3qR7diZeZS6PACGhzcoDi8used2fgNTrK545vX72VB8aL",
  "key9": "KxpD1vkGyoETCBL1pXUoCRbLKEixyoTEjNLytPMTWiFhP2AQCZE8iQCggAbvtxQJ3Spr8brGrjZpfmeaoTUpAgW",
  "key10": "asCjd3zfKZ85334rdQ2yeqsCWsW2diBykeQRAyMh2Cyz7dtyV8CMf7yhDAuD8BeX4ZWZgZwVnitbHhpb5oyW3P1",
  "key11": "rpiZ9t2k9DE91nLsD5JhXhnLYvRmquu1uopN69UHDkhgkpjp8xkyWy7bdqAfh7W7fs8YaH6nUshSYcS8RcNQ6aw",
  "key12": "bh6cKkgKpSVSm8FTcpotfH2hRxZ32QCzrSf9h52AUcMk7peXgTbj6BXu3utNUy3ibk94JY1oCGtPpQGbFRmHede",
  "key13": "3b6PTeyeTYoTNzR2HDKffgJuApMhoX26Z5FfNhi417sRYZY2wjc4b82kcpDECtx7evNTJ1dB87NSPjo69QuWQ4wg",
  "key14": "4nGtLDi1GLHZQnnmAPC4jAsde6WWsvL1rgtHRYD6dTbCPBa3QMtyyvtcYhwA754gCZqwq6m2bqvWKcpbDcbdFUdD",
  "key15": "3aXJtN6V3wPBzXLjmjsYwi1s38ZU6X8XzbWaKfJeXX1GBTEgn8CJffBdxP896wxXVgB7LqqrGue16EXY3vyKn9rY",
  "key16": "5YyXR7PUb7J5FYxwy5S7yDLBFWVpPK2iKRiqT3XvpHissgSr9PCqNER3sRgGAA6HG1F4E8Utnd2BA1ERGdvcSqqy",
  "key17": "3JA9Ae99Jey5jXSQjJVxsy72sfawNKV6fqSPu6atDwGxuGfXGsqpXi5Hjrg5bC8J8wtSVxgfBcwvcUZDD4jJ3yTT",
  "key18": "4dbT5CzUkm13EkdbaFDfiK8mEkNeryCzFn39R1RZoWmtQ9Xey2ZUydreUPpKGGAGhit17KaRksPPK5JEgTxiPi5o",
  "key19": "2Adnyfr262kVc3WVkLwM9DK8KNCQQk7gxhdomQ1AhudaBkg6ULLuxcMmxCmcQWCEBjRB7XY9yP6KnVPdAn1DwbuB",
  "key20": "5bV1W7usXH49GLUL5KmW2iPdiGgBPe9eetVhk6oFp21YfN3CgrAo9dL7NYKgNKhWxgbTtYFcUyA2q9LfQUdeyMcu",
  "key21": "eZ67jh5P8e1WyAWw8BTWDhv722eUZeG637Qb6GP7XqBE7hjj1Nx4zexhSBUUiY2Z8hhfup1wAHNfkqtEhcrpt6x",
  "key22": "3krxuDHpRvRNAbNrKi6q7TWMcdtMLyQvMCXNBLb8mb7vUEJhuMwpMqjVY8P2wromAVH16qqqgESf8umh3XC79HTV",
  "key23": "4pmxWv3Smm931ooPNomv1XkFo7B7za3Cwr7hsngCHGbyJwvgCvMZYv2rQkZ8ZaLuQJTUjsaRAzrtLrFe5s8LJDWJ",
  "key24": "2t7igTaGUU45n7tUMbC3E9H27VSWp4FTjAnRm8JTenqt7btpYV5EXWJx78bnTP2hAmnQ26JATSfSNc9tRhvZmTDU",
  "key25": "5ojUAgyjH3MPAnmmqcn2tjvoB4yygZ56eJx19mXHqnrunsUSAbVLDsaF2z4ZunRacXiSsm4nAgn24ksFCFPGLmqs",
  "key26": "3iZaZwu9E9Rhm5waQvkVLCFuwJRN2qYeXZUyQTRWZJzwYRK2MFhAEGRm36afYy3jEvNgbeFSu9xocRtxFj6pHocQ",
  "key27": "FSAXcF9MSr1quWYPEvJe3Z4RxPXE6U163LAqYYKwUEAS1G3C7dESaDy6cdxpJaGyE1aMNyvEMwaaGjtRZKbMdF8",
  "key28": "2wHVLxUSGnGQFLqfW7RJ2bPmTUxuoH6A8esdMFZHimCLnA9rDF3mW8wywQREt9wsLaJ5bedtFTzATTJtz3sNB27f",
  "key29": "2fUTBaR3Ew7SZdCwK35ohoHP6giVJm45f9873XRP62KckoMJkMsau9pWt8mtD3aTrqtZGM3Jjj7WQx3W2PRBbHUC",
  "key30": "27JQL17F7nQufkkTLfhA5Aoydkm6YRXqykjFaxj5iXddNAE9xtE7H8QqSy996n4Tt5hyD4SZtz1Hz9FtHcwERh59",
  "key31": "2MEogeMcHj1jbDnuRHSQmseUr5gRaAqhYBgMe8r9gYd4Lxhzbo7CAvoMdwSxB4b1sPoUoM5D2sJwAbLfEipkmwN2",
  "key32": "5VY3eyEkoVn1HK1MgASdXPdnZz5UvVaGxho6K3CJi3ettV9hR8J8Lxx3K1XT7PWrgERqGHfndoCRZNRhaYRRVwoz",
  "key33": "5EXY5AJdPtuBzANV9LDQs2HejRtrXrDTJEynTTfeWxbzg9zvbnQfhZfdEAVUbaNFn9xv3FxVcToyJKEta5rzXWXi",
  "key34": "9yKpLbeHgUkBKVJmkCNK4XnLggRExnN96i79DZ7YGEP2iEXvLPiw4LoySGpdFonJe1GQfXG8z8ASuVejLANxE4K",
  "key35": "4c6pomPABKgmiRyfmasifzGnejKXUWbZ5PpiFwGvGThPdpxdbsQQcW7xw1PSGemPgrQLgbtedkJyaBF74Kb8Wrh7",
  "key36": "5GXW4aEN1vepudVcRLehr8CoCQsNb9eWcZjjhW9x7HGs7SS9JfCi5bbo7QmEwfNp6nqBGJwK6B4jqj9cXmnFkkSd",
  "key37": "2zEZCFoBnqECGChh7ytzcMyFx7esNW6h7iHmiXWEAQi56GeT5v9FPY9uyfoyTM5WWtrw6YmUEqcFDWHTbd3ro2Wt",
  "key38": "2ExyCFHKtYu3kdqxPgtMw5BABE3esjA9g4Tyn5oBHk1LW7zw7SGVUd2ZsacybZZceoshzQKSAB4r5xfJaWKVCpgc",
  "key39": "53T8qPn2ASf1Bn3Qre5hnczqw6vmCpfTfNkW9a9Ls95GFWj7AvZ1YFFyLYYh2pkJqkRuiMQKxK8F2tadR4ywxMs1",
  "key40": "2h2cMkmre6b96qy6oppTc6fRmhZcWD3JjEQbozGLdhYr2wGt8jBkNFjm6bb2n9gL3g3qASV96Jjejdx8an1RbvCm"
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

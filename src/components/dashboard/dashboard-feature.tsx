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
    "5S2D6YdFtckanx2PECzunKkszt59rLX66AWbJt2brYiDnvv8wi6duuxNpj4kPCgHSvoAYvCoD47zSLY5evNp1e9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EQgTWgR4YE6PZvMrgSAbf7rtsXUvNcst6VuPADLVK17QNvffnjNb4SVvvTtYiok19YNZUJ8guSecsCsU62MqDyD",
  "key1": "41HkerhXC7pG7WFQf9gJ9xVMQGUSWQaAu3RWeXWArvvhYc89MMoXEhSzQsKotKeYvSxLZCHhXywsq6pvgmiYZJcP",
  "key2": "4mZ5bFQN6AER4hxtTWaU9SdNBfnw55WRjf3eechfv9W3jcp1XzSmwFTkHHqcpS3fMUqGwwWLSMiT9BAYBvbxr5jU",
  "key3": "2fmufQ7U1fgBtymUomwoZnH9Ua8g76y1DmziNEr6aPHCjVZ8TQLW8jt6uL4HV5XvjQ9UtQbPbbDLCpVYuimU1Dvh",
  "key4": "RKauEQcM2jqRxpG9d9YCbw55dsDdJ7Q2kwwPEHDpeB1KaDDnXFKGHixHemcYphaAEXitDvoM8HpD6ZZFFhyHJbd",
  "key5": "4ucPWvR61e2VRBLWknFqNG1eHCU5gXYvhofnaPyjwUpscH2pzcWLgsJJM9y7LxG12skXvzL6i17JsHLU4vzaPQs5",
  "key6": "DYc1NHXbXRp7XNsS4J8X17DBdzcmEAcwntdQfBqAQjiRPnxD683FHLddMdsawmxNwP8iv13xBif1AC9QK8tVcdB",
  "key7": "3KPxWsqYKkoMcU4cTZ7JHFd3g1jpCmqyDGJvC9U2xUCZ28FCjq3tvPuF6UqEuLeoH9SB1nhEJBBnex3TVCYpRxMp",
  "key8": "5dRUncermDn9n3CMSHEZjcmUUJ5VE7uFm2ScyP7WSBq1wS6pjeySfTajreffPYz8FaRjcJDoaV8qKuK6Q28N224U",
  "key9": "3ZYJXxMmG66U7sEFTBWUQDNvvJ3RdSknP6Ja1aQwAJxxB1bKc6tmq7h6H9MUKVmPUBRLH97cTMhrH1emLMkxsQbQ",
  "key10": "2eWp4fcQHhYdwM3aDyJjce5uyAg9xd3bJJDcvp4soF4wJ7DDFgC1v4c7HMopsNP4dUTE3NSLdgrKqpX9RyEVNHfF",
  "key11": "H9nPaZLtndLcHg33ggZJopCxLLXQQFMBZzuFXF1GCGQUnWVWa4R5RTsa2eecx37HuUbWCVhYrhZRuoav5nXmoeX",
  "key12": "4fFoaYQfu7r2h8HsUmxtYiUPr98vgnPwsUQER6FJd99Gr9zPcZ7cSU9w3bMe91om8WJTZKDoue9Wm5SCaQxmUKhz",
  "key13": "5s86LaiAEED8DB9uYXmTdMuzqjqm79CRpu3XGXbQwptsdx8ucxsdQf9ZbKkyFXnY93F1xFA8qrkHoVPTbipqnyPo",
  "key14": "2CGV77p7cMDKgTvRPpVsiGMzQAHzDwaGWn5f1qvYUBhJBAcTMkeZsCkPvtezAW2cSBxyA1LEjx57xd9HP5fFjWGT",
  "key15": "5kgHTUjDdgwGGj7nNoJjsEzVQFuUYHnWASewKZb7mfV5yE8VcT9bVoZ29odQLkGhHUkaGsLJvWik2dTauuzpyL5h",
  "key16": "1Jki17oP8ueK3oeZAHeq3duvMJKjnFB7b3ZkoWa3p674vLtMVZK7gS5HdH8Efvz61j9smYtQBsqGUf36FmyzwRi",
  "key17": "3XDros2NWrHdVwKVKzQRbhimnBfLo4J9zYH6tqG7WPkQiSerqc5zgQhDZtPonrcNmzGXvWmNwEZAzz1nw1aXPpnj",
  "key18": "5GkbDvXtSThgKbWrypUcf93PyF1VeNGjfciosJd33bfe2tim2NM9J9YAzXfUwQVrdMqorFw1vrppM2fUSGijjzmZ",
  "key19": "3N1ugvmPwymxEZYDXyaiHU35M2bUgnakoW7NHKJhcjmLjsWeheAVmxqX57ndgiTaV6A61gaRdm3dcvCJnQYtcaBH",
  "key20": "2XAv1is94LZwbZbNcKG1WUB4eXDBUoCBgbaXfKvr8MokSXF6GZZzJEnnvo6BakyBuzwp4WXUEr6KBQKs2KKJjq1S",
  "key21": "6nh67eexiZBcgppqYD1gMn62ExKScksNq3gpqo726CX2NsoZFNoKPiXgAT1KqF74fZ2KUdqSxnCh98XsFAx1nV4",
  "key22": "2KVkJC1grCLUauDrs84CKrrdBD6e9FG4fY65YMEzaYjgC3e4zNLY8H1wVRyNca1m3WhZMECVmmWZthsf3CVNrtDG",
  "key23": "Re72oPhTKfZTXSBXxX1syNAnTqixV7xLw6Y7EUiXmJvfeQkhxhFepuosYH46zUZNKBNuY4qQqFyEAMawnToMrMu",
  "key24": "3nEGWpC2DXXLn3kqx9vpDmZk2HVepcaBxF2qD7BVag1qFmZfF9TMnY9AqxgZv52ApB4BpMUxtLjfjsUo62hDS21",
  "key25": "PVcJ2Tdd2UueT3PePuDhaNZfw2CmCkXhsVoEvDDZRkvJtU4W4HaFkYkYhhu2QNJrfCMd54PAUzEjWdWXq5HhENp",
  "key26": "3gPPYBGyRUWENH5V8CHsWaiokpG58FAQbPbNZSrT7rysGAiWBBY5BYHJGc2GNC1dqk3Gu9s13L8D2MQkxJqgEzVc",
  "key27": "3dsGbjsD755pZmz1jSWEQE65QFXYukXtrbARzmcTfXeNSo37KDoHn3MsGcN1rMSFVWJsJTCV5PPcD5W1mhZFxPNz",
  "key28": "2XmCwQJ8681Qun6wXZv7k8qTfSspchT8JxtWBmyyZDr7jDniHAE3scqbUP356uVjkWSCpnNhM8jVVDtrGQjxaPWE",
  "key29": "gv5c83EzbyStRcXec3UZyaeihq9xUxJbMQvJTYSPeGS1pqW8DYenwHGXgZHhbq4BsrYS6JGL4RbN8mkLrZp5jdi",
  "key30": "w8sdQWDTFe55Brz57pRrawAf9mu9SPrjpphMq3pEjzzPaCGuHcVyjR4BvekrSV2iKTFc3XDP1fm3LFxQpkZ5ZpD",
  "key31": "2AsFY8Cn1fRZLMRRaTwU51D3BjpfvftEjHihFNnob9wCvae2vzVvbj9kucB6Tbczx5CNoabTRRWswSi46PJPULXN",
  "key32": "5mu1Pjfo2SXdEXAjQLg6woJhDpyFwtAqotrG8RFfaXZmpMtCtw56hMnFhJiicXmdPWgc4VZvQMo3DMxH1sPviuvv",
  "key33": "4nC4Ujd4q7QWnUrQymvTUKa1Ssh7FmmVcXKDwXw6Q6Yh3tAb7RfN6DiwUPY1K38och8cQGADL12MMWUNrHPQp5Ds",
  "key34": "2qNEeNt8LqhiVF3jBbY68ziAGuqL5J4KKMUEgQuzcvUWoPJ132LQy3hftoeW6gtCdfAvCtwjTRNBuShAntWwXoNt",
  "key35": "2PyGWqobfBKbuPCDfrrRRxWR4qjk28QorxDciEfGJ62fhp3dkiqXmBMHDeYVgpG9yc6FbiFyMXcGJB1dxdmWWBPH",
  "key36": "5nStXePAWxp1LMuLVa6cjUzDzw7CuMEPzMwyZDSENcxjd5GB3MWwnW2bCtux4T5m12jwHn3uzJwSFMHJjFuXeLjm",
  "key37": "3UPyL68JjLcBqSgzGdga2YvCCCFkLNoRgnSWbyLfApxXc3QGyRpuahcQCGeM4Jkjvr3QsBNLtGTXgyJihZjkMUcM"
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

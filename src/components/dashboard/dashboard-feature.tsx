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
    "3sWxKjGukDVcGT1ZoQEpFimSqraUmskov8YEs7F6Q4xGGdMwiw9NnA8du9iQVC3oGduDiuRtaGR7kkBCMbJH3nbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32FbUFzFEQhAcr3Sk7giX53cVwiNicHEi1towxCMcf8X4sH1NFxrQn4ZLBFoR7VowbSemxQ6RfRMr63uKhsdrXqG",
  "key1": "CFjLqyZh4Y2cvP8es4GseLzZabFEsJAe4F4bmrpVcMbPm6bxDmqPKrUFf84Uukfm1f1bt6XQQ9Pg4987fvf9MQy",
  "key2": "3wD2dJJ6ct8kpUxrszpXbCgWFsb11M651CTeExtNreRD6bc37ATNwYwiQyas9Y7QnJACrABMuVnu5Qxzpsivr8LN",
  "key3": "52nas3ryGMbr7rAFgsUnT69TVKmjzib1spPp7qpaU1qA2bws9pTRJQvLQ3oVMfVvG5fGHtg6xrvucmxbdKGbbzyH",
  "key4": "64z2HTTis4Dc7BBzvZgyJCoab5atDhJDVcdgr3qo7Q6m81vxN29Lzi56SCb5ivRgxx11s4p6fG9cobw5DzAAxEdV",
  "key5": "31paFwNvZL8Hp2gbjEVZQ9b9HahcqpNSsWi1wNQfiuTWFKNneKEnmVnUjnJSX2UCFSZA46D5dZzLTRZ8Dyc1UGBR",
  "key6": "32DfM8Ezy9LRxmvMQ39337eBYs6EoSpYhX3ZCcdGtv4eHJVDAUsmELqwRiPJUi5fy9uXRVPNYjNEjLaQuSQg9Kra",
  "key7": "4XLBUH4D5jENUmXJiEjjN51pTR7joVsdEc9muVdYWFsrSodjELUYMVXwseTP7a8TPanaByyxhVxmMonR1WDPPv8A",
  "key8": "2BUKryuXFTrLFU9HP9vFNdJdnHDggqm3wJuZshLG3Db5T54eUcbmhFBisM4vczFPKNUVg7yNQMq52m4erKZWGe3x",
  "key9": "23Mdw6y7etJCd1DCD5RZShY14aNtPvRT1UtBfudrr117o8NLwZ8dNtCmdPSvtGCkN9ZkYpG8hNf9BzZuR32LLjsG",
  "key10": "4gbdAGgRdoT6EqWJBbfg9FZg2nVbQuKksp8xif6SGUU44jGjsWkd9abVWvu7YJpCVBQwpy9WrsCzpXBdZLNSRHSs",
  "key11": "KKdh9pDkzZY942tFHWQZShxMQFxbn9s2FEXujfTAATMBfQp8R6qLgUJLiPY7XTrenfQSd1E6NgfuWsvaLjiHCVU",
  "key12": "4GumQmaK7RrjmcCKVwDtDwwTKVaRykDP6dYa45ekFv9iRaTrhHhZaUmgMJLLUKrmVmBoadka4F1GMPocfWMEjdeV",
  "key13": "2ViVaC612eG5mXTDMAhWg7WLR12kFVzeke3jfUqrwrsytMkPNA7yTEeHprkMuvcn8uuNpjMQ9QdosYbQN8Br8J5S",
  "key14": "fGbDM7EnsHhsMKiaxPU2awhYJmjCAZu1CF9C73PT7H8X76mCa2xTa4spm13ogmK4NUBN5Ev1nzjvwsMaVMLYyiN",
  "key15": "3nCTsy3djgr69UbuBs2sWm8RqHfEiULJAmouJQPL8W5kN1pFTSn7VNKoAiBAb87ynVdcuYeXrQMQaDwNutiSHD2L",
  "key16": "dNKeuEZAkNj1vCVduDa44pgLc7zzWEBx7vYExjNHzpwGxttTPPAvsTpzQ4NVYe14t4RwjVbibCEvQxTe7sE6ukf",
  "key17": "5sxzNW8mFzsxj2ctNc6ZALikhEbJtkCTCruFdeZeokkbPHLn5fhqVm8p7Q1LnDdLRzCjwC1v9sTVfMuusG4pfZZE",
  "key18": "35ZvVfNAGD9Wg9dLXvKXhaSjkg5DwNeHp9EUJULQ3VGWtXPLLyQp5JW28tTe5aD7yi1MQYaWywewcDwy7kERCUEo",
  "key19": "21Z3iKgNqJxeZQQC4f247yeLjKprchTn3p78sNjhzCeRXK7tTCZ4Tgxin7dJ6Y5EtrZ4PkyUgcASV94vnhA5qTdS",
  "key20": "3rHMShtY3RCjQX9BRdRNtWS4g3UqLjrvzQjVV9ijPucdi7TXXFw4ipfusV26zgvqMo3S2KMPxpqdgRaXH6BWcFJQ",
  "key21": "36whonMiuFkpfSEmffgryCkdjvpKKovU7ofmxw5ijTV6oe3jpQ4Rw7JSDFJc2KVX6L1bz9eEX5Db6E8kMLBt7kZa",
  "key22": "48V4BCFwW4kP8bExced6EwE85bWizaZwZuiEWagvQoCfiDvrUHhm4kazWhH1gNoouh5bBDE7LdTe2cqAY1tsu8dC",
  "key23": "4NNJw2bheV2DZa5qEm3F8YMKPjvR4M2di2UatDVpaosHkxD2jLVfDVE1nf1pngnyyxwyc3snwG43YW5G6Rfj3UBs",
  "key24": "32cJ9rMh5s9dZHYGaLzgcJUPRL8VBznp1aKUgYBwxy3VqT5Z3MF9XAcFFbP1qj3iXj4fcBdpv9nPt2NSgjJC3M2m",
  "key25": "agpA1aLCJweKA2XxEuJUDnhXcegmkWJfeiAxdwboNFbeBDL4PkXESd7uQbH31ze9VmVuuQyA1GBQfnVzM4Ua75j",
  "key26": "4fmoUCuqM7vyHQtip1Z6HWvjUov26JHucPU5GKTpZuiem1saPnbEkcZ88V9Eg8SJiZntDYR931csJCsarryPrY4J",
  "key27": "2nUKnLC9XkAtBhAQHU5XhgWnLEuL2uuL7u2JKd2REJm2HtcbfrQ8G5HR82GGpnVCQrMKEBRYJPaCbhhasrdxSXfP",
  "key28": "5eKiDJkUXYhLhtBLaZZfbta4jtJ5NwGWjGqX1DPxbjFYfSjEjWG3gHnrTyicq3V38ALNPH4PMPwguFhA293ZJp16",
  "key29": "RNiZBvK261QLf3bDzQiXq5YQERicjWnHTBU2Ci6768MFxgq7PAW7GpVg9MMHCZnwZQhzGARPKfucfmWYFYcXoGA",
  "key30": "2JTCHDt1ogCBpNF7vFdJykEBiMLkdt9JsZwCMiq5uTscdaLswdYnRUcWyW2TF4usEtHdK19jrwdUHUhUi9F7pUA6",
  "key31": "3bfx5YMgs36KCd6QeXxQQiJBGor8FksuaTaRd5Juq3c44aSEJNcz1dPnGuHYjtVkFLbSkAH9BPyCZMUs4kZK4HkV"
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

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
    "5XEQmFm8fEo9zKh626XhfMDJt5WPcCiRAyHApvTwHZp5cg6mNYHDGZwS4WQWG1T5j2zw9BMc5NGY6V8cnyoWtwg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L7J3mnCyWWKLaz12jX2Ck7ZZqtLNX7dXSgf3tX8VEEBGvUdvFowfqtqaKDrPiZDupG2m8b9nkWHeusS3vPdmmEk",
  "key1": "2drXLchtNSVHd8ag3AUM2edshgzawVZnM2wBcktCjomGit1KFsxf74WiwyM3AQzaaQt7kkbnzKG639EdqHsTP16P",
  "key2": "3Ukncve27v3Rn4fLf191UeDUWGLR9KmSVsgvdYxffG4mp3gLH8F8obXG6T8GyZLnEEAdeDj1VWoZ1BSHAiHEv2gn",
  "key3": "4nC8BGFjWZ6j9fmzVVNtd2SemZnQbFjnhHrnFSu8A8ZvmuCy7BcX1CY4mi5bt6tn64sfPVQA7eF5ycz4Qh5mY1oD",
  "key4": "4o5a98Y3JXkryXyoGuse9WNyg9iRKWpZFX3b8xBE2wxxzPCCvCa37NdEnap8XtB5jnQ8wL8KDGjvjBUS27KbDRwr",
  "key5": "5RHdS7ygSxq6QzVM5sWPhA3WBKYJjqAPhEBxKWKtv493KSJnhcL2oe23HNrFi9Arrztx6fqjPgBuXpf9dkJ45qV4",
  "key6": "2pyeNVBQH9PNWJzHRvU8xmtp3wfoaC336dCZUmbTa1nD32kBAnpT4nBgjsmCVYETXW9dtQJYk74WT3v6aR6yN7GA",
  "key7": "4tFKZqJ45bQA2QUmYW7LktAk3Vj2h4zE2yyE1djQpyegkrYgvQn3iTCEvgaP1YCtM7x4R8CRfAaBbqVG3BpPCUnD",
  "key8": "53DCeYszzXA56Lx5YcFTVmBLdoY6Ckai2cikFSgPnfaHAjUFFQFLowjHTzjt6E38kPMdn9Qmn2owApSAewBk7B6G",
  "key9": "5jTtvdSPRfQTRNmoBF64Mc49jrufczQ7H9ephE2iW4g41gsFZgkrz9vmQP8KwCF11NU1z18ZhFrUSHbBc9REt6yU",
  "key10": "4XJVdQetPHZnQWBSWNGb1U6eP5E6SihVhuFtEcUH1qT99jpgdfW2rpSuuQY9uKeroiTUPCftFdhLg9s9bBXL7qcU",
  "key11": "3bZu4tt6SsTspDxt3TgTZ8oSpe7qGmkcvvP3N5uGFwbu3eqQQH5qjSiQteLiDkVDDxojGunyuyHw8RfLZStuKTJA",
  "key12": "5hKKwH5heRU7daMTxhZmPhW8o4o9FmpsMCxcbK1HrfprHaXJc899EKwpUBZSnyCUaGgUhezFQojnkGdsaTQxfWhp",
  "key13": "aHhcYGsog4uJszbYwEVqcRoo9Lgu6V3GPQKSEdoujNRSpayuc8zWUADauWUcxg2XjzZPtgGrETwzPbtxX8hGNj9",
  "key14": "c6AXaHB3RsFt4Rs8WZCHs3r1QmAS6gvmtqpMtfNc4N8phPAqjJDkEPkJBH7J32PWSHBYGu5g9LGrvh8scZSjqEz",
  "key15": "2jwWembkkQLCyGubadzeaPqvMbHQCc1vcvNS3EzTnxTXvR6pR3RruWiTfiB4HAZoq3xyKBrAU5jP78ifSZMzCRbh",
  "key16": "2fsGJnVSFhBna4uZQCgejDzg2Jh26s6dSr9muqrddiEu3CogBXVS4JaS6qfixrwCtuaUQbXrU3VxBGdBy2JoZiEg",
  "key17": "22iTNjpQbchEnfR9EMLYEK4KcoWJyxFMVP6YqijVWUx5jWng521rDP2GyhGBoP8qQQnd6sgERmQoLzTAdAE63526",
  "key18": "4CprLqRcomnZKxwgrSnvYH4u9PMCXHRSfvfchw65vM4YGzvHBBei8bJnBbeksa33vsMvByxrHLxifXJ68LjQ6XM8",
  "key19": "2fW8VaAbLLsHneuKLMneRH2hvrnF2kpH4Q3URUBySbhCBEFxmcQQextEV43A934uTUZQ5jDmMhFoeXqMhVtBWoWy",
  "key20": "2wERToMJZSYWjshCxfnZyLRbR1Fq2zxnKPLuLGhtB1b8CN73ZQnruAB2th8nsoNoec3mhJEQm8xPtMa2kDTGKFhn",
  "key21": "nShiivxEXPLd1hFMN69v967xFVFUxEpsyg97TsocnRAtWdaJZuWiN5VmoMkkuev6jiC76Viv1jfiSPm2J3XzVHP",
  "key22": "36vvRT1MX9YWVNU91MSDRi7f8LaeKqNEgruNPs9yvEjVAwmRZZSV7tZXCQUqzX8kthY9XpgkHGqEoHJxGejWMgS3",
  "key23": "2zfyXQUBFcV65GERgrGKPJkf5xuQZ1yCsTHd4ufb21B4fkz6jwpM2m4FtECUPm2fLKYiHntyMqBwTQ8qfzyr8Nh2",
  "key24": "5YfMn1xj9fG1YTkXJRZGD9SbYN63o2HFJaiHJEy95QhV88WdTbyVksgfuNLLuTu1WGCRjFVwrN6S6cK4NxZLSqka",
  "key25": "36c4sQQMUwfnrmijXXFjjiCXspvznKe6nqG61bsCNobmwEbxUxLyRRtAgFc7Zv2c5EmjpdmyD3vY2fdatKvedLLi",
  "key26": "GS8tc9KYhHM6gVxUgZPZErJFAx3D8XudYeriP9hAz9PwFT7datCKv95xR2XEMp61XcXFbgDVQAmVe2sDg2aosdo",
  "key27": "2xVdQc3SW2jqDRR5TMqwa15C3umPHXnMWpLJJhcAGaMtJDJGDPAeEG5bps8EbChGuWKd6bQUA5LRHqVFyRzFmw21",
  "key28": "3dEraN2TXCax9rqukvyhez7DXr5C7ApWmB6hhYe3uig5Gt4Euk4doL15S65H4EajpNuByU4eG1uXw5zjoQsmXCU",
  "key29": "5eLPv3LUjoKq5pf5hcVd1KmiBso323hBvPRhBZP8UvkiY1zw7e4376mHLMFUX3szv63xUQ89daddSnMT4yM5Btt1",
  "key30": "Ewg14FQcR7Y3Yjf6MqmyytqVXJCbWo2apP3mQcu842QTQ9xNtBThgNqa4mk7MR8AHj1MgWFdYjVR2noEghe4toL",
  "key31": "31JyzCaFmp2EW5gyjRond9K4vtmephFdkdgkgVQ52D3uPvmJVDdgb7GJtdkaAKYtjyjawK6qBRReh38bXuPCh7vZ",
  "key32": "5qwgDQhyxpckU3ZtrR4SfJKsvcqaEv3gjWLErt7f8n4ceoynjevQyH6MvFN31CqCh8fmy4TFqhhreVjTfUgp7hcy",
  "key33": "66B58EYhLD1TagUFAPcGAnRPWApxrbuvC6sYMM7of7gHmXk2vaa9Aj4yk8n62XZazwseQih5rVsLs46W67bUDAQL",
  "key34": "2mds9NBzb9xqojKfkSkTdhuq4SaLg24mUfZJMt65BnJndWoFrB9NJ123pVn3uHGZeY2wiA6i75W7T3wRXJwEKTgV",
  "key35": "2ZbyWC1X6sc8gkkSHmDJsgYFVwor8d71NqLSUZKzoa6i2Y7zbeEwKdE9DLcXhatosBn8W56zB6Syq48ncDuMALxf",
  "key36": "5Y8bQs4FNKbh2Bdix28bsnZsLruWB5jsbpvKhLbtWPycVC5AESWGtRZrTBsg5fht8bRgSnva7mw5tVTDmhtackAb"
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

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
    "2rspaFGfjXoXw3C5T9HPgTdvvKu1XXFvojHua9wmZCPqtHLstAFZy89UnZKyzxwhrh4pr1hQsGKQst9uzfSgnwg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SCTasJUmu8AQSkELSxCkRjwvx52aaDZ2nZn6wN87J4zhRkK8d48i1DCQP5dA71YMN5CZe1G7D4cxMsBjiDpkcat",
  "key1": "5USh9akH3KSNwo15fLuSTckKb7erRMzERdWfjg6CNJcnr3FUxYuP2E4qbZehogYSf3yuheXrK5he1UUH85bWyBVL",
  "key2": "54paYt5EvN5eawJRopszmbnuY2wrc1Qtdcan5AvFVZ2WvbRfTpAcAwLeUQ8CHuzx7ULZf6PwRkmqbPYKSNBoKDCK",
  "key3": "2UrcCHkqeyjZQbRzrFd4wxYsawMLevU3uku6vn3G8Ep67LwiZZtW1nkQt7RCpdyzTN5W3HHBxfvLiyKHUD6kJjJK",
  "key4": "4LUpxG2zQcqMmEPSNw7JZ8onAcG9EEQ6iia72ecEyJvdJHmpZosJKUhuQKmD8S6G6oekbbF83H64hL9u7uG9Mpez",
  "key5": "3BPerwZiaab5GdQukKVsfi8kAthkpyiey8LLi5GcaNqeCB65MTDgbaMkGPF7G37kSQ85YPJqiap8wCDtx5rZeANQ",
  "key6": "c2sDGwuemRopv35ajfSKqRdo8Ku2oTBEkYtXckG6SBDoXq2TawZoemvbiCM8jKPs7MPuLFhDm7qrqC7yFTZDR4w",
  "key7": "41qy1LTVeAsXk9RmZ6bdhXX6g527yFjvQv9SsouJw4mwei4VDZaRmDTbRmp9noaL3jGMTdo1s8uVPf7nQdxNmLTY",
  "key8": "WJBsnBpwPWN2t86R8XMsfZoB3XPJNB6MjXR7cJN4TYpCSd7HphosrTSvQLzHR7oEZPqA6PRPXRRYdqb36bghPBC",
  "key9": "5txbfHPR71oBmSPhq2vKHRPCpm27FgX4dVqRHjgsdJtjz3sYBG8uAxuoqH3i7wFu9x8u44sbLVyx1FmfBsdMJKtJ",
  "key10": "5PDUVg2DJ88XEhzN2xmU85QodGn3yRm9cpKWUUniNnfAXkXs2dMbuZdv9ZAKuGfiyA56u2LvYtCVKcrhpjXzscNZ",
  "key11": "298dWNwtzxh4wh3g68mnjyQt9D8xGzEjGWLQJ8A1Ggb1TuzMaVNF2Q3hFyRNsqKLBoknzzxRM1s8vLV3WXc6H96H",
  "key12": "5qcAzcSbYrrzCSrdDNs8QG63zmZkF24m1aBcaLocauwtGK6TGPiQWfJqA13fYbn7EqNN6qr3zcZ3p68XQht2seLW",
  "key13": "5PGQ6ff9b7UhBApnjb9NVKnLmYT6nz5QTybMEVybm3bFbXEZxGUEwEKCLMWTAXsWJWLPtFXSb27p3k5yws2XFnAG",
  "key14": "2mKP6MDyGYmMAqAQQKBrFzx6P7sdb98HSqKN934W19sVKTcunYbKV1Cd75fYQnGrhwvX4QTD9mbDJAHkmzJ1TDjw",
  "key15": "49XBt61RzTpEVoS8h248mda16fr5bSqitg16jcvoVjADf3F4u6MH8JN4Mm5aNJUGofwPqthxZiVvirMXasSn11nR",
  "key16": "2yvFp6kDTXsvompmKsrysuKVw3PCSGgkhc3Stm6umiU6cH1UbKzXcswQFa9fWetNLcfisYXEmcTmYSVhHAEhfhoJ",
  "key17": "63gXpXXXcR5MDYfQcBZohztABYHLDSLmArxPUetacYTdazNhZzcVcpeg8v2BHFFRqSD92mAbxfXwUGbq5YTBiRXn",
  "key18": "2LFadmE2chsoTry8gLUs9oFsPV6vQW7MX9Vn887yPtnvDJAWNrJkT9FA8JMbkXEefhU4KxLDf1eeBexQ3ovou82Z",
  "key19": "67AAJGmQM1EsdtLpa9zASX1ez7kZAF9iCUKtQtffaNyw3v9LDR6YzeuiVbcKPE1B2hCAp8nmTQtbT2XNUXfsYgED",
  "key20": "4cLqBL9chbJQnJSzCLic56sTyG1xBNkcPsUCSg6o8CzPbQ9PtpUvXbs6FNqkgJd9mnra5G5B4c1qXvEagqW11RSP",
  "key21": "29q1xeWpwLPsZJ6W17dTqRfTSeZd1yJGj9ffYiY9Z2VK9PTaandiUe7XyNThSHAjbn5LbqNKWa5H2Qmtadbn8i7a",
  "key22": "4bucE1AmhTikH8Uzs4XDTxf8dZVJihC9MduQWFReBdLDkMyG3ciuUkBbRhDYo5kM2VYNUaa8K6Xt4NADZbSBnmCb",
  "key23": "Eo5GxvxC1ENcN2x3SGnjE8oLkxzhuZyGPAShK8U2HnWiPV5LRoYbGGwgJ8DPTeJuAHWU84Yh9BEY4qbTwX9epYh",
  "key24": "3mE8jTGCMcmnn5Si8nvMZuHgs5jnjuSQEUH1wK7ifshgkgkFVFkB6mDB2hhAihmZWWW4QSK2o18QFqPFCDr8xt3S",
  "key25": "5HFTfafLKkqd2DHKjRdV9ZRobKT3Rjc7EwSynaCRs7KMxVmmQsNDNJjLjfhDmRhb2d6y8sQvCbjZNgAnL5Cfz7b9",
  "key26": "2gZiZDuQfAJ5CKuLzqg1sGH8Sp1xJokYaR3y3nV2aiuJH7FPhWSDR93zyR9pSYs5wDBdfQa7Hi2aoprmwJ7p3fDv",
  "key27": "UGFQWEa63ybxrVNPNJagTTEZ3UxC9V9TJZtqEiJ9hTjrFT1ZS9QZgJMMYLqW7e9zmGGMS2BfWUBCW1M4wKW4HFk",
  "key28": "DNFjgcf1EgRQPBnjSaTLkLnhZe13otpEgro4Wnk4MVTaofNjVRqLW9ZUP5hPgL2QvvKeVRtB3FRNTGMp434HcFy",
  "key29": "3nr5hPhhBoHxjfjzYN97qRTkBGXWnKCKMd1sad8AcMwVX6PSNgpEe7AKYei6WuHW5MSSFZmWRbaDFP5odTsknDHh",
  "key30": "4tnmEzjB3wAQxAjcLFMhEd7c7ceD5U2DJ4uY1FYQrCCMiqHwUzigA9kCxY3DUJBsv67g3TgiT5qijyxch6CHJHa6",
  "key31": "4g81b39WsyqNVYQNoLfybJ2G4W7worQDrzXL85NrqWJSwYG6Vc6fJHdNQFQX1Rwj4zqjfNoVSm57fRqi1Vpg5aUb",
  "key32": "2W6zmk4szYYSigF7DerhvdHzFq3E8wAfxh6Ff9jgA12JuCkzmRW5VCs5giSf4C7LXPAXDecwpPceFHoWXyVAfwoc",
  "key33": "4PXHiPzSAbkZrbfMu77KjeexApX2mRr6NGf28Rs2CVFagyUHzezZqH4vCfQK82ggsobuvkkMgRQrLdQYxsbR2BV4",
  "key34": "5ep2HWfDS813UDt8CcLUQisF94e4pbmPrHPk2NVUst1dsixPX8kSUvhijztWrKWi1V69ioBnYBqH1yxCvhsDN76U",
  "key35": "59EWiKcyULFJs48pZcFWCdRuRTpvoPkDWezFok4VJvsn5p6Q9DMvVHib9zgbw8zjT8iQNbEYjiRm2wNp2adAuQ5L",
  "key36": "2EoaiPyTw1xsCrbpf1nXL8MTrgEYfkekSZHgb2eVLnG1oA8revG5c1HpYdjxdYNqjUUy6E5dqgxpSa5KNsuw4Nd3",
  "key37": "5wVLUxEWnbtYvpEt9g6oZzDfwH5uR7A8NVjnQPPzAG4A1rqrKho3tbKHrcD1uvc7hqszLW1KrNjh7wg3KKFZEKnK",
  "key38": "54Fx2jtWoj6kdQX1SCDATB9EVVF8wz3VbT1f6bh5gBYgpRr8ZZAP1CJ15VhvJcgLN3xUCp9iToWRDPEyzkYyhYRK",
  "key39": "4RneQ75qL5U8xtQZh4XSRx8QRAGBrWWNQB15sq5hUViUzjLoCc5sW2MrHh4iG7KbvymJLMufpARx8T25TXRRhB6e",
  "key40": "2eASb1TyjAfN8jnf89jZwTxq6CqRoFxkbuKaG9y2Fk4Q8CrXKtA4DweaiuKVYouAMxdjrz3acf2drZccksL9iqA1",
  "key41": "4AXLoDqfodjPS5yzc9SGqeUjVcxp7VaP9QZoBqGxCkso8uhnmcKgYgJbXHRHfE32BdPSUkbw8Lge5QXFV37czUoH",
  "key42": "2GNUuoUPEc6s8aajyAkZSnqNuVRQBfUTWydP1994ukGC5LC2eRGGrGA9Af3wdPMyuHMNaRrwo71xtpHkAYZPXbTW",
  "key43": "5PAcw6FxSoCCvQ8RpVQdDtJdxfMwxh4BeMvEyf1ywwDT2Kh1YHuheb27qjhoGqZ3SrB7hhLBLqG6KjMi3JUYALLE",
  "key44": "5uRsSuu7U4D9jNCCSurtmF4xshE68KTzRdqPFxFqBMJqsC3qYnpVWgEnaogF9n1rczNXgDTVrFeGDyzzpXhWSfSg",
  "key45": "4TMmZWZytrgg5vBPktg4xf9zcF7udjHPfarDTXuDw2k7sT5GKnA3r4vSgsW2v7N4SXQwFesFHzW3GpCyLEGLPX2v",
  "key46": "VGcd6L8T7jhG6Thq7GTYV3p6M6Aeb3DfAtvRG8xTTSrNv2touXdpKSkZbniz2xAVEx1gDndoDmLaCiSgDvNPZER"
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

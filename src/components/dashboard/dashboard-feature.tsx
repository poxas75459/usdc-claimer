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
    "5xX1mJVQoSmTbGbzXre6dUPomTxzqT4m1zr3HpxDbNBHCeCF9G1ZjpeQhybhPR71BLSX57rcebE96ZhgsgSWF8gr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uydKhyu24oDAwGrXdpXz9gmFT7aHgcYPPQhqUZZzLKyQQFPN6r9uBQKt8emzXF1EidNymvBPPviQSUp2iaLaijj",
  "key1": "2JEvHQAUFEs6Y3Evs7et8f8JySLtWnXgy4U4UK5raHfercFXyDtyTY438dfGin5NaxbkJNpJhZsoaXSWJW7b67HP",
  "key2": "K7kEZox5A72r5mPP8C1NGgUvBf13kogSqP3XoNyfM2ZRU9WFBbFqURQDxLXx7i1FPVUQrUpesiyNf88xxbCMoUM",
  "key3": "wJ2A2KXPUo3Cg1FjEVyJwvbRHwQmKBEEhtWjdhUZQCdRChJNNbn2g5cvo5FVWwaxGhwSshTTsDWWvWC3XWqg9Bg",
  "key4": "2aiRfw29st4TKCoMtvaxv1WdM5ysY1vG7droWjAabgcy48w4keCs5cjXw97B4P2zH6xYmsMgVdStoratBFmnXBRj",
  "key5": "BJA3LRCnhEumGNy5c8e48qbAGCGiS11SFHY7QkYJ6gMgFvRMHu6yLMvQw9kzpnRTqhHQVWvhupyvfycQnQgFmVY",
  "key6": "5wTe3SoDMDqk13oFaWi3dtuW653pLVn3edgocyW2TqtKhHMh2HnrFJVHrLmd1wEcmsT7bzRENAE18dxA9PCLfMEf",
  "key7": "5vLYmZ7QGyYEBDorzQn1Xfsd1VBmk5f3NfimCq5L1qy1tCW7sTUQ9xuHDf1YvYW3s4mPsQCXnsVPBPE6UKYmVvcY",
  "key8": "4Q3pXsxzHd8sfy3HUQyRsWnT1mFRNhCWyv4YuP31SmbU1jKppf3ckvdyMZh1LcTip7tUesKUPwReWKFf7ivi6MCL",
  "key9": "2TPRfU9D3yZYNCHMCEesV8qWpimgeUHyrbxgB8CiGsBP53p1P7fTgUTj52HGT4J5M5hLamFqUUMRzD2jyLXoEv8r",
  "key10": "4eF651Rtg4aeCFZFDiNNfMsmkubQQUU9PhyoryZwhPXgVM41MR5TE2t3VvTWFVmktkT3EoGmjdR7aj6TtHjKHFin",
  "key11": "39UXt1x9SMU5wK2D7rtfiiTY8xrFgzXszS7PcaDctrpSZaaFYfmujiYNRuLMUM6cFj9Af9hvNNwV4iz5SnfPsm2G",
  "key12": "3jeqYsuKSuGAND4XLEAXa3QxPsosh58yMkdVSNxRbnxcngUHgHyp93rxKG9S3wtvNmoxLMG6zKtAbpKbGdMZLb7t",
  "key13": "2ewBjMNi7VkGbVdoPun5QL1gqv9PYW3bSciaqhy4XhYoDLXR2BKP4QAdjfUftC63jv2jctmmSAp8wGyF1Yd5q5Po",
  "key14": "8jxSoBGFGns1RcfFt1PM4FAfwmtgtXGZPz8eXEudpBnCJGsD45haNgBw5wvduauwZPvEeBgqAYkJh21mQAt4H9A",
  "key15": "N1dQNPbBCHyWbkY3dtPGGmm8SdFGTkW9WCcr7jHoSjFY2RLn3jACDNnSJ6soBZsdj1MJCri93pEXC5CBmNwGijR",
  "key16": "bqejVuUUTH9tA2KesNkt2LcTmSj7qRvyjDRD8vkCNjnSQ8fLtBxRr6kK2S4MVmn32RYuvWp8fcrtoy9P3kgbERc",
  "key17": "3nxGtdTYMDxwSfNVmk9pxXsnxPdiWxjLd2rzgMeJJqEtAanfUmqXV7MV3ESPdWerePgjibTKfuhVscXyP2vKGaWH",
  "key18": "3nSa19v6MDJ5qxb4Q8Xmt2K1JWJxQP1uefysttFnk8zcxaXtLo8xWmDc9X5idFPdxQ4ZUzUS9YGHjCeiiX1v3665",
  "key19": "3BqJwfQ8NjBM5tChnngKWhNJkKgJGuhSdVGJkMNGd9VLsZxF8qmqUyEk9xtv3LPmuit7qYHFwKLHuxBPM1fdFWHL",
  "key20": "5ipqdbxKxsgBqrGcVcGVNr8xHBHHMkFVckpe2eprKpPvUZPruUzeahVmwZAMZ15uBwger3ao98Wndd9cFdGVhoTV",
  "key21": "5KcsjUpz9VTVLoYMGGZqL4uTV9wJxD7PEUUJpQNRMrWHxvfz2JDPYQGRJ4Cw1nEg85u1U4xMhFiqX8NanXNq2JKx",
  "key22": "5TtAQAceGxPDEvnm1MPk9DNpWoHvrAo47XXtpCd4ZCZk8dJ5c8bchoVMVg8gijzSKRc732PKgQ3QNuQPv26cEgiB",
  "key23": "353QGwoYwsNiauxpWEjX2a73PiwUrKbh41dE7Faw4pqh2agWHEcvYs7t6HCxmUY6VWM3wQVLhPaGafUjeC7SGCB",
  "key24": "31X8Yst5joARFPZftkJtPPVq5jVd1SRsB5hENc1dLaqNiPG28fdRmoHpVovdRZW1PjR8fbSMM9i7k1Ym1QNizBMJ"
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

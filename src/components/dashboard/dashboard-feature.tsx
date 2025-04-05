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
    "582QkEDvvr23j4RayAtkrQr5wcJP5WXeDHDhajTLNmtRHnz7NoYaGakZhJVSPNypUDLWzZVeFg1vQ1cY6pCSt82k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZcHDLf6fbBtLuCCGMNstskuoq9Eb6ezmoa3vFpEF2Rm2iqycWygsdR8hFo8fXGbgHKD6xRZkX9o4C8rRQqtaWdy",
  "key1": "5SuWdtnN4BzqMhQWN784fFJvQJtwKfgR6ktEwNtGWLJB49fBY6YjmBA2vn9oJ779EwedwinvQR9DVjSdq2QVsXY2",
  "key2": "2DdyteDhwfjDLuSvKQ7Frdb67bh425B4nXBsUbvRAkvtqK3dqmEhr2TinFbGPg4UTnzzANuBaaN5FcvHpSH7ZNur",
  "key3": "3LxfiCTMSCg1szKMCy4x1xAvwGxm8suuy67BH1jjZJUB7pHDY6na5F3H69ZWiUFNW5WJBnu5eSnFM2gz1jtmAdQV",
  "key4": "4VFsdqqC2bdeXy5xt2dMwTK8WURqUzCBQmhLnwfmevwau7gnA7V8L36TFZGNihVAM7E5mxYkxN94G8an9GxWXYZ",
  "key5": "KRw3yuqYpM9jp9mx2HTeeWkuy9t28J4uPzo7VWQC8C7p1FZR6Q2ySgTPAVeskrtUuK4wwKUTBE4661WEVKbRmjb",
  "key6": "2vRaEt5zyndsY7KJxVVQt1WgtV3KtnLKSNFmsyCMmjwHhZnpDHewjnz2DQCVwqS2tSrgX3cqsizDqCpQn5xc9gAt",
  "key7": "5Gy8YrmsM8RjCS6BLtSMh3ATi5Pe6vRvdrGwavMTvjRQEVWEm6QyvLCvLzSdVws6UvTM9swt5KtL99AaDzZat38",
  "key8": "2tHN3auFturNPBzgJE3b7ZQ6SkHQyEPRp36G6mabN9vVCeycKSHQLhiUXzXqwyWPWiMsc5jBWq9mXuxC4QYJmoe6",
  "key9": "4UGaGS8vaa1CKjPabt7DCL1vuHduS1TCrcPTi85RGAjnN4AMHJnQKXoksbzLLsG7R3FCR43UgHYDjL13YYUJaTFN",
  "key10": "2uLTB2wSrjSrnkBHPjTn1Rc3JF5fTZiaFB5vNmJYH5f69HxS1cRzS3sY9SKBoVPYNaMRCaJHpCFD7LbKKwfBPVcd",
  "key11": "3wNkeAL4PvFA59cyNwcPaDURDfXBYwE1xm6enSPe9x3PsuhXUHCKNUz3SabCZfGrmKnEpSso3dmXwqr2AVPjy2f6",
  "key12": "aoJ2PUkBQvmAtfNQHqEaxdEZmLcW3BwyM36K7QL8mCMSxpHkTMhWY5AZWa3ANB291QaCqtcr2Re2nDLjFaHCQXx",
  "key13": "chBPfPm1RK9dY2qzkaV3o6sDXB5kDBXEF71HDv3xnTP7SprXzkagN1HNVWwmJ6zVvA9D2EjQK1kpPug4pDHr982",
  "key14": "5Tk1eCJx398uEu2MsrLzQSULpFJyLXZncQgPZjiXdVhMzeebZXtuaUXRY2ySDhB2KRP6DLC1MH3Pc51wDAuxR7k4",
  "key15": "q8sJMbvsrUCiKqKTn5C5bfmDcjMag5m4eyzsvqdbUdh7Q56ERivbCCRYSQEUmHsnCkSkih3rjQJTNrhZoBGWFnW",
  "key16": "426GL3Dm7Qj4tcSvpYqKLHPeropasAhcKLfkAaQMtk1ZCTi95C7AcuCcRsvv41BaY2DwSUvLzzyd894bumr2G2bQ",
  "key17": "5ceLxNKEdtptuwoE7kXZTCqn7xRW3tcbygYFzFbeCHMqs5qQDuNQ5DSyB2PLi2HxjqubS63sV3UszRYKn2VXxSgN",
  "key18": "2uNmJUyMmhxBLfYnMxFges2BCuooF9MWkKsXuqZB3xMG8mAHG5JXDJ4scHYUZvrXp45rjNLE9G3PCSXGnjAgkDc7",
  "key19": "MAKyMavv3mh6HQiRjmGNMP6WWKUZ63BaJvXGTsUWpCqmexKuE6LSpVVDyFJDktMYtV2oG4pfob24EcDaPBRWadC",
  "key20": "3dQwwLyjnQjBNnNeUrGRYYnxwcc3GSmqCY2DuiDnYrqTUeqK3AAXSAj41LZVjogytD2UHebWRoqPFGRNCoVNmAWD",
  "key21": "37wDtptR8pZvf1m5aN4YnYr9j3WyJt193myRdrQPQGDW5cTZHf2RJpQyXm3JTPdJVkBx6Qi5a2kRTMzXBSQTi71W",
  "key22": "5CHJ5nSJvwV8Sq8bjRcHGF1N2amoCr68Yb9X6QwRs2c9eK5i33qjPFf2DvTNyG5pfmuAnZziG6xFzxLaoVpgjLEL",
  "key23": "3RE63jMJKrf4syb3p5WxxL5K8aBMsmuvYam94kuChUcvmARA3posCHpETgFvAPWE5JScRTjddVYz5nYQfXau6ohK",
  "key24": "5i5rWFHvjieG7U8QFmgkXNmn7Whu5y4WBV8Ca6yzGJCYkVrfsQE1d4dEgW3kr7cWhhzRAvsNHcEbFAcj8oQ92Khp",
  "key25": "2a7RjfEdHj69WkcVLN4pvduB1RdC9GvfPAwLSJLsWMYpzPpXxuoPRYwCPEXxQBJnNZJA6EhUjNm9EqaoLim3XW4s"
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

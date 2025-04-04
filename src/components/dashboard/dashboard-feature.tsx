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
    "3UJJ4jp1YTg9sRBvUB1RtC8a4vpcS5v3yx1LozUnRLj1yFRq3aAR8NLMJSD9JDyr7mpEkM9CN3RHdowKtwcNKe1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKNdhXdLLmrVSHSTh7EN9HJRgtP5Zyw1M6swkJ48bmviTvQ7iGdYoh4EY1JahCmrZqfYDxpQ5XCxBhRhJqBZSso",
  "key1": "51TXC3QZbqc7aRHjTE1JL7oqTCXeF2B8pqYJyrwSePCipesbfKbs3ebgiE69nxkwsaS7K6ofQt9CC7LK3K72ji7w",
  "key2": "5qxD53g91uaJDcwSjUJCCakCpZ6uEgQTJk9Mhsj2nSeeRqgww4r2qP4KXa1LjpW7FAYFZWUcnVWXrv9m5dcWtZdw",
  "key3": "2J8yNzLSUyyVThK1NBLKKEsmzWVDzbkfg4HrdRbkTHcqjaKxYFwJLpgvttm9B5DoR2c2TKrrGwUz5EDHGLmKcog3",
  "key4": "5sw5wgMqaZvpiZdT5NorWJJVej8JA88EV1Z8ExHs1xb6GwTxiTGJaopRy4kgDWjtFPovh6FbiAeQXajuLBm3ZR7D",
  "key5": "27VwNQhASG4Z2MjYN4rjXTktysesTM3W26EaAUJMTVv47MYwAtch333P9JCVFwM7PpHJ9dAb6r3QTDaABfrBubDe",
  "key6": "2KgCtiFqmuUXhdJvtAjPVCTcxpmLJeXyr6pYAYtoVNa7rjw3hjQmtxPhjDFLWX2vKVjtECcmtkF71PcCvoKNK1sd",
  "key7": "5L6DNVTFB1vBEnYmAvu2aFtb4ATrHXy8wx1uw1ArXUNjZbc5m9D5yg8AMbusUDUjzA5XzhJexjSSeoSYEnJ1ZgKN",
  "key8": "ghhC6YWczCBMj5kvxgDoWRfesQtUD5jq4Hthd7STWGwJAS8ytTvg9eoPnWo5EmPywxFPktiGf4hP9NMUmorbh6A",
  "key9": "2CxTtFnpSFzibTE9KJTzSszMQoXyGQ8rGMfCg66xoT5HnVdV8D9EiXZza3rLvwh8Q69DerLy8HqaJLod72aozVCi",
  "key10": "4PZydxRvhGjRpeWvS56yNLRZaZgbWRjyVicKCFyRKFj3ajyTzfjwqLpmFLnHNQEJa3XR9Xq45jHiXtvPBzaN6Snz",
  "key11": "gcwtVX95wG2QzTz4Pnc7aV8tyJdk4zsBvUYdSnUVhr8qfYYQ9JSzD7pyfvwCKqLFdoV8YQ6aRpR8MV2ejAMJG6R",
  "key12": "GnUmmbnQCNyProV354qerxKxMDDPGZjRsHPKWxuRfJp97aiowuYu5bR4dXY2vqfZQLsV44TAxJkL2dFL3QUBjn9",
  "key13": "5ExFgfbvr4t33pbifk1GVfWWjjWgnZZJTUcdvULPhjLytukd2yRMXw7foeXJfynADLnJKGigoVHUrjTauf19GP9z",
  "key14": "2PDXTBgjPrcQog2v9HvxnUjgo5ZZRNuuGHMUbtN4C3tk98SPY4UED9GahWCLr6WmhwBMrNBB3t7sbnCB759reHBk",
  "key15": "3ttbmbCkEbGGYRPp1SWBQtAahuuxkZPu1jGutdEiAfna1Vbi5oZELsKZsGWuJXxfHA7THU2oBszacJ9fkqCXJCww",
  "key16": "62ETkeJW9QGo9LvgbdYN7gdMnrYrtr2oY6AZNEvan3gCpGX2RZN7RvsS41Z3mv1RCahrqfkpKJ6L9HRNe3K6vdh4",
  "key17": "QjZzwncXQY9e9ViwpxQ6nQbsEKhG8mFwBYAmoVZurheWmdoSV5rU2iDXPh5iXiVxMEs6Kz88Ui4bmS5bwwv5Te1",
  "key18": "rJaDxoroXNi52JwhcuFonsmazHH8sL1EhLAX45Lun8xabwtmcAacrU8Uuz4QFWxLZJ6CbN2G5ETHpUuXwwJriPV",
  "key19": "43u4osksJUJpHHX431tra6kKwzgDZcLcW1yZAiiLDFDK2k2hP2gx6B7qTNbAb7yFgcRVcqeGJ4BXSJ9SpKMqCB5J",
  "key20": "5vWwCPfDuHbpwP3ZkoH6u9QqHcpsxeun7tiy1syJMpEKisVbCqGUZuYAzwMB5vHVm3u5TvWYKU7QtSuVhcZsdAYw",
  "key21": "5WpxoLNWaXJ7vBVw9ZPxo3ryW7Vb1huTnG6kjiugmgpauDeXtgM8X8S67AKm6wdGC1yummpm2XjWCfQJqGtDiqa9",
  "key22": "3uNJbUuDGyfw2uiuDZ6nknS3STukQrEVB9mqSy8rKUZUEDXG8GeKcC2DoVfBWUFmJUs223n8vocVdfonV5JoxZA",
  "key23": "2PSeVENSENi5B8ziqKbRUVGD67Q2Ro8JugQve7BxnpFAXP3YKEa8wZFuQZ6pYtSQ1ubASEV5QmRxPiz5JdnoRuBZ",
  "key24": "66acmMoh3iEkEudgNHfBmpKysThQYTGbyYwPCzGWdg1jjqj3rq6t5tuaA2zoWm4Kp4WD8kUX5xaCv3PPRqdT7Cx7"
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

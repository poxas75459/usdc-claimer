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
    "3b1jEK8gw5b5y3r2UJMdxzJZMsC9GqZfYTA5JuwfbSXTPdc1RuUvVxmZP2CfqLukfhzR7EsZHZGQaaX2QS5iM4VW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r815Ur2n8MRF3A9HhFLfGq7azQcLjKKakyRWsssyU3gkJoq6SB7CTQge6JHMaYE2BDVpoZHdFGiezbgtFK2wVvD",
  "key1": "2oaZFkf3zjiGzixRdg39WLY29PFCzgn3Mzh9GjAB5CYavU7PTU6mcMGfKFG8NV3b7PeXWTNbWcWxJnNSxPwaLVci",
  "key2": "4t4zfLM41mmZydTM4UL8sDxjMjxA99TrpCGaYuQwpafnaZ1ZN1J518hpsPzdrPqfJNsScLdvPZqtEBji4Hj4ftCG",
  "key3": "26MEnR4ZU7m7At69oMGEHD271pfUvf55SWNmU6CTRNBX9PrYFzgdsgMgmk2joNzjqTLeTWGmeXnNeoovB6bcHLUo",
  "key4": "ietBUddTrnhzjFDL5X9yCKtHYfNfB2K3dmbMhHLcysmwR1dumnP3P91qBE3VwvkhRxcoZoCHSiyVeScDcupZ9Kk",
  "key5": "Bzs46fffcqhGNRU7QrjV8H8T7gDUL4o5XawwkLNChh7MCPryAGTf4JSvi9BsCn67QzDZkHSXfuMwLBW2wkWUTa4",
  "key6": "5xCXaLEuzgaPpWygK2p1JLQ5k2J3aw7LGBZtTaNuyt1B37z4Sz2S3z9bwpRafbx2THhkLLJaBAidDEzTiANviGgN",
  "key7": "48n2eKg8E6hxaJPTBbDD7updq4Ycx9LcGq3mybr8xX12FEgtYKpusyJKvNb7viL3PYEQZZLTjGARJsKze5QsMR2p",
  "key8": "bcT5MEb6GS2qxLw1tcr3tBL7zBEwNiGAAUQw16yZmhPYwhKeRSUkikTePxvENoYg17n8K5urmnUew5PGG8Km2Bm",
  "key9": "4KiRD9ND3PK3cYT2h2eaNU5zHqEGtnDRy5aG77REAbaC1K4X4NyWDgZhmsCmRkHc3qFktzhi5mmSK96fcyKH4bS4",
  "key10": "hGYrh2tiLkq3yrCLmRxeFLQLMqHMUbatMrwLsJwnFdPMcfvFbXb9hpRpZFYStrgzzhZJ5SDxcMt1za3gMBowRoe",
  "key11": "5obZRRyKxf65RN34jvo3q2jFmg6ybutvJvmbWy73akJDyMepADW43xXmtJnKJhwCStYPYhuetHrtz76B7rHGmAQx",
  "key12": "JHY2ZC6w9A3RfzwB7ci2XwqPu4c9tDfbUNND6LYE9ZxtwUpUdojVDxhvHkABBrRnCgvEn83RUwVpDQRaMSNqMWJ",
  "key13": "4MqE3oiHp1d32p9mhpbmJpnizeAMtsRHoDSx3Zc748UCu2U2FFWt7zn97F6tuo1SB6XdqB99LMJKFKFjByZ5xpM5",
  "key14": "36ZAhhjVcCyCooenEfMKre8VJSFaCYvc4YhHgutaSa1rXqCBLsByZXjj5i27gH5szhKZp4G84oJtfG7RaMDuRGvh",
  "key15": "32ZsTgdgodyUVqNpiyiTWR4YfzGVKJNWW3e5wjQAR7gUzdRCPBZMCRgAjQtaJnoNrvD4zLLcG8FDf2XM73yKfUu6",
  "key16": "45JRjX3JBPwXqXvN375XgcHppdw4cAkLRuK41hqQbRmPkZixw6TKxndkgDRP8pNbUpKAALjKgNDXiLQiSALMPGx5",
  "key17": "4iGFhtqPHjkwycykxN1R7bdohRjebQadbsSKuJysYPdeYxZF7uzVCSaau2F8qqpKtDjAM7igW1kxETZJajnHABkW",
  "key18": "429KJbcfMwM321mrEFZdhtQh3zXpwWJwNHsgtSCJVN7ZHCBAbtxBcaBHzXd7WS24vP8PTVYayLqonr4d8wHW4WUg",
  "key19": "cDdKSgpQrbEcCfiwJq9GtVvnDJgnuMhV6pBeQks3pAT1ECVMMjaQw7RWTbsX2xy6Nv3VueNNw2RNMTocSoL29tJ",
  "key20": "1eCgYB9qGCEBgQpCX39q2tw6o7XbfgNWH67T7jwRcJuvui4UeqyCsa81aQKgRyc8kFd6zfW4rE42GNKg2Rj33A1",
  "key21": "2xq5TjTki3iGDeUzMgVNETRmHRYv8biS8bBSNsrjd1yFKKsdGAth8jGqaJjMoZ44yws2q1TWD2vbjKkuNEPyvzgc",
  "key22": "3GpJCtWDpA3DKBrgHiqEqhxYZJq6ohTKcB4JwJAgf1DjyxbZCnR6zbyveoiSbQUC4fo3LFk9VxdQ3V5T9PYTokFC",
  "key23": "2J82uu9JaLnoEEo1YpgVJWZrNSsV9SDxMRTxymQJUCa5nVzsxYLNoYuTkSHzbuQDUc1Z44gvwN4Cmc46NzJi4cwo",
  "key24": "4BEubXsRZivDLssUvDbWkBP4E3ftRriD8mxx84M1WxmxLfsHDrDAWhZNmuFRvGNj6RHsiVayrYnMhLCH9HMEFH4N",
  "key25": "2Y6SLXm1D3gGPbvzpyRtmaXe1HiYajoTvN2kKGmkZhj8w4yzcr8wdgU4VDATQJkvmLLj1W58HDdhLT3kCwVxPtzY",
  "key26": "5xQeU4TceqvkMw41mb996uS9W6oCnYH4xBAAPmV4xzo9HAsABGkPS7oCVd6sLyfgBVpVGfq7ZKnsFHbQ7SZnusXs"
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

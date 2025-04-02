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
    "5XWENvroU4g6x1utyGXYDEHF5bCjQBdxwqGQ6JGYAypraFSigfioJyU1Cyc3XGSyi4bS5aHDQdHk7EK7jmmgNUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kGCp52SVV9pGSSiTgatxHU8E97PcNSTXoHDrjDhv4KFJURvhTPm4Xu8jakN8sVdRW9d8bvFXRUDqzJpWvH6ibQz",
  "key1": "5w6qPkZxr1vwhY4W9QEdtYhdipRurTP4M5VBPyDUeg9EeDXnh2caJssL4ipE8fUx8fWE54JkY4QuLyGHfi6DJ8vi",
  "key2": "cSGVgyQS7oDC8wKyEXqA3N5y9i6hHYsCRJAPMsvQJMMa8gFAa6Bsb7sArCrdXTU7VGW4bwYRxSas4G9PXkU4y1E",
  "key3": "2iU83Uan2KHRvu5fXBFMmzZCv3Zyw3n5NQytpUnkvXMooqHbsiatzFEfXU9qBSXALcMcqMwb2q6YSgYZXvgtoWj9",
  "key4": "4ZmggzzUGhfQGUZR6MHrxsJFuAHv6mpZBkB7svDz1tvgkzMh9DmHfcFrLeMpSS49VZK3nbJMRyu27APc2JdN4Wyu",
  "key5": "3NzZCLTDprc2PtTtrHrnhBgaLVbi4iLKQFZ5ePri7AAfs3tquwKgJvQ7meon6oQosVkqUdLWvK8LTFbx4taJ3G9y",
  "key6": "4jvhFrQ27YM6p8kLGqZtRWPe6QqYowbxA38PguE4Q4hu2PhGjpt1z8Mmz2sXN5uutYxfsxnrkE6MBnAvrzCYsTLD",
  "key7": "axTfxaXfZ8b7ppD2GuYFFSzqzyfE5mUonhasxzipJvYAY61q7LqVJ4VQViCDojzWTQBNoRXY8x3pEHy1Xkz2goi",
  "key8": "oGAzbyHp5R78pr2aYZR3ExdyPzW3eyYjLNMnzBbwaQMpQYq66BkRr7umEuhgYpj2iqoZNfjA9gwS36QdTtJqUov",
  "key9": "5Hr9qgJYVJSj9PNPtcZwyZ3ajGwaUokke67Mx9t9d5ENGxSsxrsJSXKGxcx8WBXMLJ4wbUZXJnVfJobteDdLT1hc",
  "key10": "4zweHSdXPVQeShGiNcehfVAaVA2tXDRp1i5Vj9fcLviua9LeGgSj7vBpCqCAiFvepKMBrEycUVqofqyGTYVrDvax",
  "key11": "2AQWdNBpA8urnfNA44kvwG4U2fcFKhcRiPPzkfqWc7YWpdnL18EDEKr4Cf6TAW7gftrhdDuaWtXvxpjLyhUakLNv",
  "key12": "66Q42VeaDwSjo2PPuUPcHsHLR37kvT4zARdAr1CQpSGkoTVL8A9wr8EyuF2wwS4RxczFfUEUcxSitruP85s6xGvi",
  "key13": "34Ju2XYTyFdQozLkjvVGHDCupw8rEB8otEBu55R4Xq2BWi5rEgx5DVvcV34vp8xpaZwKwaF99J1GwWuRuyxkyk4U",
  "key14": "2Vs1qeBcWfupkeLFftSy5iLLcw7xdaHSuMvqc6oQUDPyNMCPDLuBQ7LUELrUJmPkzcd1mMbvaJRsi15PcrjSBWmi",
  "key15": "44YU5ejJ8dYrb8gdBm3StSVgBwuk1rYyBwdeSEgSonGiJdEUumrckuj1Qb5ovh6pNzGXquC7qZkPRLHVU3ZsgtBA",
  "key16": "5BgJagCqe3eKSTDVwjCqn9CnGAoR1s6ZDqWeHb8gGkfzoE1aCRTPBZE3F3GhbqwajWkLMx4BhS8XT7Zm8Ms8RUY6",
  "key17": "4ANC1kcEM9fpczzGNYJxajJQ9hndh1QgdUGd5G6PM1tujrjWX5VkKYfcuNssj6ELqbvhqs7KHSCkujYMjBLoUTQ5",
  "key18": "MxsaPuaqMaGVnG17zEEc3Qy3BZwvXE7CJ6Mt9WdJ5FHpvQNEuj1bwgrdDY9rpHKyAkdCU6cPcW9UuzdFdquiZS7",
  "key19": "9TnRg1tFYQF9qLL97LScUHzLBXv4wgk4A23Q1WHWspAv69cf1FGPfGR5k6suwH3K2u4RSsjjD9FYmw2QtVdJJ5J",
  "key20": "4XPqzbTGCB3ujt9FGKSd3CWB9ohmfx5zSE7mZu4U3at5AAUib8ykNkwsydPjqCBfhi2cNd9rLSdExusRmX7yJdjc",
  "key21": "5Ky6kzj2PHM7qzGhHg3AZXQQDtzsUN7pXsBcXQhqdV4c3UT2K27SbvJsCq6w9L7Z3qJGyuejgGmrB1nRFKBQZVn3",
  "key22": "2tmTpXXCCBbAYACSz7yetoP1jqAxozfRLayJ1ZJ977rFZmGxAppMVADSz2NrUPPkdWsxy2y4eW548fDGkZghHMTB",
  "key23": "5ZdiBevQv1NKM6vsohno8fBxk1nWLDLU9j2dF1WvUC2qC5WbYxZNRZGbPW1QnnCHBLCucaTFbGibd9EracNpNpeS",
  "key24": "3UFUPHgkjPt9DSKLjJHfrnRyEMsVUCCMW4rjX1T6SiEqKRaBu2684Ww54NeHBnTjG7AqPADc9A9k528xeiKE3Euj"
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

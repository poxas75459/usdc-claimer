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
    "5QXu36p8D3jjiUJhoWyac5LPn5ZjpK3dNRSvLkn9XkrWfLCJ7b9biNDoiVSJDveprsG9RRmSqc7rbH9CxWwyN1mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62tgeZUKB5gmryN8345he6BnsirgJyCiq92sbmHALFCyDqwtygsDdUQUYuTJKLAeBem2AXATbWsb9oKDsvZGT4RL",
  "key1": "5b5kzC64iaM2pq9nmuTKDotrE1fCRvpuwB59jCavkei4dgpuerKPbZDNFDDir5Qx1UXYhRHtNWmnudpxonvsLG7Y",
  "key2": "5Kf5oH6BFENNhhpubPE5r9LFTFrKdZsKNtdsxCpynq9TvVzxdhPKVQNcYNhcH324RQSUn9cXGjKhvKd96bJA85kv",
  "key3": "43ZL43Q7ScAGf7pj4h3X4eS2BVupm1KG531L42hZHGGeTp2FDAAb8HqZes4QZbRoBGzBQTNmn34xFaHbDC3JG1vu",
  "key4": "65y1aj1EPzwohuX63seJy9LAYEeQTKpBAc4YSk1EP7QaE3Lz48oSpLvP4DZZ6GTrh276M67L1PLrjNeAAfHoBGLy",
  "key5": "37VGH2sGhN4V9amWgAGhFwX1NXdKTeLDhJYFk7RebYwwai6zHiP9nM4qrQYz1VN2gMX4UQapZnfAgJr2ANLDAQKL",
  "key6": "3dF7nvXiaFt9yY2Y2oV84YpB6LL7a7fQsVng1sLnRwFi8gcfnovuQrz4i36Q6Qa2cejMeuempDMACBwBDsWykBxc",
  "key7": "LjN4yxsCzmmBwqzLYLrZvnitAquc49UMr75PjznPMpMQLJtdRNLFfrb3ppziv2p2o7Je3MXLPksJrnu2p7Msd4c",
  "key8": "4y7pmRJQfQ9FtqWuQobjwfy444icrU7jJ6Y3cN1BhNiNt9cmZJWPju5ZVNnSvTc4kTFctfaF4P5K72WcFoJFBydo",
  "key9": "65dSHk1tvT1W35ju5uhx1xCWZ6G6D94VUpkQXpChbhodo254q9JW9qHh36zcwYwf3MrCymtpXn1wF6dKGkSaEQto",
  "key10": "VjzzU42N2qmBdTkD3DwNBtSTWZcv4EtXZ7xCTFyZUUCKG2YJNdzntb9fthTBNDsRbT74tZGsCbXE2gSbuGuJ4C1",
  "key11": "CeLdzePWzQYZiNiDZLhKBM2UYnJzV1nWTtv8f93t34XH1QJjxPtBcP3RysdD42wq1hEzmyfY2Gpe11gvZit6z8s",
  "key12": "4Y28suYPxJV3Q61E5jXr4nEkMdNCh596T2FcPHSvhCFANmtXA8qtm3cm1uGGjgeye2L1c6xn1RKf18Rxcr75fnqC",
  "key13": "62PZmRHSzujn41XjMQWAhYHn8Ts3H31ThArnCcaVB5qEjRNNsno3AwVyB4TpvB2usAQUaKR1hbQr2XyAsRr293p9",
  "key14": "4dDbs382uBNvZJKnafL9PXntFoostS7bthuDyJ5rB7R6oqxXu1eUJf2WaLAYMPebuFzGiU1RvFdEapXHgZHLtgMg",
  "key15": "3m6kkZRLBNYd8pcTes7kXpBpTbK9cUaeLHUdCHdr7wzW6JRAAGqwQa9FbjSF89C3hZ5Sahq7ggEPHycsLwihnWHi",
  "key16": "36DKD8SomN3GBnNyFCkez9bueRrzZA1hEk4NFW9DtfUt14bW3M3xugJsHdFnr64vs5daVCaFABwEzTtDpKGPK1DR",
  "key17": "2qCgChrBNPrTeHx1GE7g6kLADMNkL7qc7wmYWm8EwjPU6N1UUumDb9ZPNgp91uJkMkspj3znYx18J5go1DNR7Rvk",
  "key18": "26RmqUoMVYzoZQmvN4NLkuHMeBVio1wJkpxzHAQ3ADX96GnAgJApjzabT5zfutiTphQZjrokFfDuAse1ofhKhmia",
  "key19": "2dByN9WS9fnYB3W4a8DsoJRW3r667RLf2CbnvoqqsC2ggHmyPLHwq9DgYVA1zF4wcPNJE4NfKwf1YQBjCYSgV8fx",
  "key20": "2D9AQHoY58xidMpbptCp6D5au6SBeZEQj92cXFvHn47sPxXNdTRs6uESYSvx7EwFSQryhCZxLjp6CxGhnhpM2STc",
  "key21": "67W7eETYoCDQvSMqRH8TkUm5ZK2f1Ua2sTdoYW3hHmBKMimfveTDzz132tQxqBaSB6Z7m9WW7LduciJdYgZA1QS4",
  "key22": "5EMmSG3w9x7r1u4yG319Henk89kugsWDgFLoXzPEs7rNi7K9MEMUrVkvtFDH9B6ZJGUcLSrmU4ayGt3ZW8GhrUH2",
  "key23": "3zuM83fZAvBnh9bikBnFJD1PukCGahjASm8WxYWiT4k5os4Snwg21cMfnVqxgJTdKrhWcM5Mnhh16tJKQJ4MvGzu",
  "key24": "5STHTvKTiBVJ8DnTWRsmxz5uonrNDq31z6cAbHfyxtATQoJXSznze7LEd3KLPkxx5uZz5PcFqzhAsn8M54aNeozj"
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

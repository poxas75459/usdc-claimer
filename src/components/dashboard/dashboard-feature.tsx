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
    "2Kci3Uzu2E1uxtiqKRneDbdwiPioqeVv9pCVj3dL222Kf4CfXXG593cwwbKw4VYUaeS9Hrfmfo9JqPgpS92q58L4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fncPiJYqkWNrtHi58QoX1bTWZiWdY1LeDvTvBdLqdkgAJsmYEBnSxPwJgAsqniPmCNbmrdrLnDyse581SpsK5cS",
  "key1": "4M1P5MwTUu3v8MiBrbUF98X7msuDPWjD4ZEana8Lx9Y78oXZm6y7CQwXBLYDSHrukiDAQ9c2xbhPiH1beNFB7Ke3",
  "key2": "5tAsnZEeamF9pZx5crzdEWz4RPJeKk6rzFWxX8YbDhQUFXha5Fuf4KKimLG47y3FdR3AGebX7NjRkoTk9proxvRB",
  "key3": "5ahx6stkB6uAQ9k1LmB4p8zFktroCyfi3getDCifsqzujpAmN9cSYUXn94v8p4a1yG9q9MEkgP9k4dqy8kMHkLRK",
  "key4": "HbezyY6yyqbjaFv9FN1iszmLoq4u52ZXZmXGypbxin7v17uHPgaG1jWerG6wEwB9VrEZMyK6Ms5y4w7Xfcrp2j7",
  "key5": "m4STTBvozqDvuWsVZCx2J6XLK4zvaVLFmLa5hkKP2HN481N1RnYwcby6ESc1goCndRq2kGFRESCpQwWeT5cwPgB",
  "key6": "4mz7gDtLi3JhR2JJpTftbnb6rMQPqrYgFpKHiSSLWzxpyC7PgYyMPy3mA2evYfYn6h11k112GFakGetjybh7hgzd",
  "key7": "2QV6mtzrjJASQxrY1co4Ab2TErYc4uqVhnJKsMEMM1o9J5M6WrhSNAqRTpM78bdUsPoY5jifhihgnASXWTcL5yA2",
  "key8": "mwSQAVMTorSHZd3rSdfEhYqBB8LEhSdYir3d8ScE5Y4KU2UWWfEtzZVDy9G89onXVtYZPKraJs14bDMEmAVrsjK",
  "key9": "5pdk82RvRRgDPeJtxHLedTos2TffYJ2pFkdxMkWXjC8vxjYCwe64wvCXoEwjHUdHypLa5oZQxwyJmD5ERft4cTcT",
  "key10": "4VMMWDAaBphzmV8SQ4j2d3dhYm8VBr7MCtMRwJWZcugmcQV8pD5MsdoKda56vtTkh1mXBNByeNFEsXQdnzbbbjc9",
  "key11": "3juncaRJByGnjJEqLSCEiduAchR16jcsQ1WuP1mmXDxzuT8dxEdFZqL1i17EEyPFo8ALXL5TtU293y5iBcyE3gB5",
  "key12": "5jajMnjHUWzPKLrB6bNxyzBZHADZQn8a1onmkUUQe8jXQfeyPoNeoxkTtQvGS1GLVS5LBryncvvyhpZmLA4YiJsW",
  "key13": "2YpKU4vKLriDek6CS8Z6mqt85p3iga4zYV2sskQkr9Jf2pnu9Lxo9SwTo2nk7WBSxW54ahsQdVCq3XvtLSLurScX",
  "key14": "5Pm7r7hSU1yEiEMdCuhgb59AXoSPwUsca9CaJCmSHs9V9T63mn2Vqdi2zrDWqbRCcTNiW1q8sZv9nUw2Gk32EYwq",
  "key15": "514WVjTDBoPa1XtuMQxKKRBM6ZBFHUts5eo4kk2E1YrAJxT2bC5PXSTmNkgfo5T5GxTQYy2GTGEHUahQX7otnjHY",
  "key16": "44Puc4P9FmcJ2NvmfxzWDor5WxNERdNFaMovtgidkunsBsYcfm8nvXdpummunLrRupfvCDA8GxgpmK6FbTWH1dnW",
  "key17": "5CoEdkvY3aia3Z6aWpaUKsEvskK9vtocGUyc3L6PqeEU9SJ4nxrUJ2zvmPXkYAsfHYoyNwkCT9r5n7YaiBxGj8Ug",
  "key18": "4F6QL8qVzemx5cgqTAuUhsQxpqHFQpKb1wwnpnTgLnGdTYy9ut7J6eMbMgoCGtvcHD78pu5YpZ2uFMMwoTENk2Rj",
  "key19": "jJs13B8ufnjFgBJB6MwwX6JgZVRKACzZWmJEAKNQ1EnhQMuARmd5Eyrj6My8tC9UPkd1bPiCDqj8qmMzFevY5qT",
  "key20": "4hg3DRcbN9ZcybrwHU6PjhB9iphyvE2USdMrGyXNXHZNNA2tszeDXV5cCi9yDDpxicFQPiYvVfPGNnBNm8d3eDpF",
  "key21": "2syEdGgVi6dmzLXjTiGHFzGDNf8iXF1huH6o5NU4STTFWVHoA55ebx4UWwjjuogUuJkatPfQJA9ZDoCtHJnQ7i87",
  "key22": "4e1RAXWmrpLiJjFoisUYvW88UdjoJrMA6eEbAX8pyGeJQxKaQiqtwzfqpZTSLghuPvDCA3riVz5jxo7fgVt8D4W5",
  "key23": "397pAeQV33e3ncVDME6ZEApoEwSSL5i83VgfqkBK36PMyBT3mpmr7ByzHUYYPU2vGczyjKhRbrYuG8k1V6w3Hc9B",
  "key24": "62YZ9kkkVCCFAGg8RoT9kbDbACApeQ6TKXSTy4vZzEGWSJyyifkaTpaqXpAsdmqPMwJsXYtAqFsw9amSWiqwao9Y",
  "key25": "3jsjAw6gFx9SvfCfLviXExPRX8xvw3sRKXMqjnPujxCJHGTcLiCHniYQLqZEP9owLxcNzuDkR58zUZfQ7a5ZrzR8",
  "key26": "4VTFoRQydr3w5LULHMvLEApn2bBwJFuVZyoLtWn8jDtDXxZftMByn1jGuApgAKpTjmcyrFPRf4mRnMuJ7DDuk6CG",
  "key27": "4WbUnMA7WBrn9oSvFMbLY14SUWHh77ZNHfRhTU6UNbUj4hCxKFYTf8FvHfHCtoNyenisddgr4YJsMLQBkf4Y12sX",
  "key28": "3uMiDLH3dcznmQHWsHKbptdmqj8LFhhU83XEDqsrtdefrPGJa7xakK7hvbEbqsYxDGdptZb3Su4u4u9VbDg65Puh",
  "key29": "65bkkhWfK7Ad21T87Jb1TGe3RdJxVxMggjrDRpKCAYejqkV5Wdc2pZrnH1sfiTx14NVwNYNa7sK6odpykL94Dqv8",
  "key30": "5rmXwwoMWHJ7poKMerW2gGhSEkWoA3STgAuwRUghDk7GpYiEnVthA3dvR8NiaCDzFDejyaWV9KgBLPwwM3FthKTG",
  "key31": "5VMuREbR6AUjBfcMkS9Cedstd5Mzqgpt6tBdLikKVsvrZsMKPbejvLmiNF3Xz8cgpnXmMKrTuwEMVX92xuXjdTUt"
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

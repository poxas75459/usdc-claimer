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
    "2oWDtmeER38oA7rDCEADN4F2AdESEg9t5kLmaUVeXNetVoGn7NBsmk76iirmeSDdRh4ZMLtjgwYCevbN2uzmz6Nr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SeCZLaoLgJVo54nXtVVAXwQFR1FPSE6Q3jeCvtDmm5DPa8wx7TFtnFreVWfgzW1vW2bUBugUf9zKxoDnVe82vD7",
  "key1": "6685qCXQk3d1AR4Q2pHvEZfBX5VMz2xmgJ6jqEx2zQbSDfLsaYiJJT2nr4pTN3yRh6s44h6i2WdeZGzbf7tRmWDm",
  "key2": "4eQQWztZ3oZyJvkyRQXVbx69gy76rjZYsDaYDQhQidZkFU53EmnGfTiKgtq6J4z7JrvsBs5DTsmY5iFG7igfEeAF",
  "key3": "4sSY4krhEi8YiLDAHhyBwMV93nMbWtHoQK2Neb3RmsBxCaffYkT6FHZPwh4SptkbaWyhMm5s2VGSQjvftb6Xup73",
  "key4": "4zcr6jdxr32tzjni9TiUQD5tKAo3Y3zUcLCmDuqoDPcUqgqFW96w5H8BCHoBA3Rc4MJn2bzAssWAsxm9pjj2yS5C",
  "key5": "4xjsavPL1M38m9NoB4aGiBwLQf57pN7toWLxWoWtHKhMDjAEVBDd4i4YesrBwcvFzToRsjH3c5rWTTbQBL2TMath",
  "key6": "UR62vNBznUwBYsA6NKbfQbgzSwuCVaCzYcCxeRgxh9H9J9KLZZzAELFokddzUAWpJeSZ8cy6aC8kKky4qbiGHP8",
  "key7": "35NMq6MRrF5kvRHUc3vgB2gWrpjkuCeByGJbFrn36b82GZKvaK4ydjyCzZQsvRR6yuTtmHQpBx5UyFGa7WsR9NTW",
  "key8": "4JRbKhuBFn5LEeYUaHiDCjRas498eNRaNL5oLQqB2ZRuxpBy7W88zUqGH1fZCcqfhmWJYvGH1S5nGnDRCNTUKwSV",
  "key9": "2EafrUEH3FUob3baDdsfM3Qaawuh3447sHazw6VSDSX4AXpfyA9TZBvPh3LZgZyDE8bR6cdmfTnXrRX8jJR5oJJx",
  "key10": "Qs6Lc4qZbNEHKEwgCNFsgsoV78GdP8wgFXj6SVXe1RNqHxiTUQ8HX6ppfVfXBF7jjdyySRR6iBwX3oBpFUzcNQD",
  "key11": "23L6NJ7sMjxVBvD45Qx51xVHuKezzsXCH6inZJzBmLA3vxaNo8xgKyKZQGZdHBFXBYPYmMGdpRqwZLsJA8vSeM9u",
  "key12": "55qbmoJ9vHWu1JgEh84v769u3qyjNc7f4RiEeuPbnqqcraWb1k3psZwzKNiWhBu6CP5VD8mHWnzRtmerVrHe9QPM",
  "key13": "5CgdqqdznXnLwPs6V1oKautMbaDCXp3E56AfpCbaexnmba6U7ZxJd4h7aKkdYJRN1J7GXLLVE5tdHekoDb7Lgb3J",
  "key14": "4KqshUY3cKedTMJ6ahiCWyng6hkvqPamFwMfG1H4ZfJRDGmSEzMyfhrkRAt4iBkaBjgHwfmeEqqCuVNSjkfnnhtN",
  "key15": "5xiYPt5EWWmP2HxE8iEmXJDkQeDeRzqhXZuz8AuJQrwiZtpgoXiJuSUxVFqwX2qi9QvprfYSFdeuftYytRJrT6wa",
  "key16": "4hL4VWrbDoSj2HGaH5r97W4UuByACH8jPNYybR1cpNuYAqUNMpuoEmcuBQDSCzHCTLAnmJv2L6sT8z4tZmaZ45is",
  "key17": "4pvAansSzPD5JHUbwwMUWFEM2DVMxT7XPUGt6bQLan334W2fBRooA254ebMmmmNiMqHfuudx4Jf762ahnfGoikss",
  "key18": "5gUZqh45Zjc1QE4qDfGR6qnPExNH1ZLQ83MNUfLRNFg1FBJirAnmV9P18DiCXGQz7yLWeN4LLHgVehiCiEkg2Pya",
  "key19": "66KDq4yt5Z2n8oceync7VPm8RSH1x4kdE2dMjFimRCnSCKqhPfNHbgJRtuNNbHBrHj2SNF6krD7bLwHxzth3uYu6",
  "key20": "54c1nfmdw6rD8zE31Exze5h3GJwVaW1Y9QAnaNdDMjru62r7QnF67bFJxXHtYik2bxMgHgLiS6xVfzmeMsrXR1nh",
  "key21": "5hhyd3i2suWRKABT3DXZJyyhEoay5h8uncuwPFocQXo6tsnXinMZGwGkPZC3zryxeBLSNj2zokTj8GasF6DYmSwW",
  "key22": "3Wp1GWk1wWKf11ZcXtpaAPXcg1djcGMW6srhsFm4WGRUMZNYvd9gRLtxKfeTaTbdazy2BAKzFx9xGpMEsq5YkNqb",
  "key23": "4WXwbqwmAv8fqRSvH48P1YDU9Ra4g3BvhKqXASndydFsz34vc84jrUogEojQ8SZVbkRSmXjuYwpBFukp4TK5Sdyc",
  "key24": "gxUXVxJq43cC9AQWFZPpmxcard2phD4EbwHR2XoiJYWxediwbAcbkbpaNCDZAzeBHPGa1S78r4rowu1xQ2px6D3",
  "key25": "3DLCNHeg3V2d13W5Tt5UbfDy88tinjT4QUW5eoh4m1pBGfDesvu8Bm2J4N94o5YynyD1C7zqNVHbvv9av1PENQHK",
  "key26": "5jvvAanLibBKxcwBaqXnVXGiZWrwzrfyG2ji5pEMz54LWD2U1Sry8AZJH9nD2cT1oZyVttGjnCrswUfHmijgWjYb",
  "key27": "HYjK8TToREdLFsngXpF3JetCE19t5aWG1o5VPUWVJDjagE9EusyNym1ESgEbR2R1rKxiEqrPnK1S2Gw4CBuN8TZ"
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

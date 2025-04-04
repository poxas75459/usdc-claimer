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
    "4Vxcu8prK1WncHDSs8ptubNUoWKejKgBkVukNHTsfMSjzG4sbS8Fj2nmCv1AReNVRwoEYUHoDFRTed4opJ5n7M3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2P3s8qyKNvD1eGvCtc6uBMdEg7u6mJNWrnsoMZnvPrG5ei38bhm1JvRb5bUrJJLyYCdn1VXrNMKTo3pbSAqFzcV5",
  "key1": "4CGBkjZWvbm3uiZTAtMMk2e4s7jj32CbbjB3kpEwR8SS1qWxfLHQRhMrh3wR4nfYXybojzec26zgriUiFerFCew5",
  "key2": "3kp9zTT6nqQNKcdejkB7JV3ooMdBBbeXxhtKoYHhyy7wsvDQjDwZ4ggsJp1coYN32FujVgi6zYTcDRSUURwrP2ZB",
  "key3": "2UbMFiBdhNwd4LgDt2dJFTdBCXZ4tzk63RfYRZvaNLYVD1sG8GcxvvRqMAW5bA897J8zp9mhW9bTunt8ZmTBVGBM",
  "key4": "4dEoU9pFcTkhgx6Fu3zoNn54foKZdeUssiyBZKCyF7QdfWjkBNycKArWVXLNa4SVAuSnG6UkKtpx9qdM883Qbjad",
  "key5": "3RT3wrywcT6rZELievm4s3CYfQ1MNsTALg1VAvobx6a9XkYSzFP3wmnmJofVrStirHT2QnxBaEYQnRgSWiScRrmM",
  "key6": "37SgXchDWhQKiTvDZPAnytdBCoAAYbPVdGzVLqBgXKGLVUsaYjR7tovsFRwX9hpUKSqXNRSmuEMo1WHCKETJ39iH",
  "key7": "49PezQdHRhzbveBH1VGPNv86Fxn7Yg4bDbbdgdqvsj3KKhCgvMUdWatGVg512Jarn7YCMr6zC1WrcrpBwKGb4NBW",
  "key8": "52ynLitRN2DdPevMKiqmgZ6HdVQh1RzkSb8eqd5y97LkR4WBrMD3QC8S19ZU4HN5iHuWBSc36ZKHPxCaDeLRTXdu",
  "key9": "X7maKPsf3x2izXCX1ZFF1Qh8Gs6FQYYevBdLGi9GJiWvNAi3KA3RiBFQz9a35Y2kxqn5i4JtUP7zH8GTa1Cb9Pj",
  "key10": "CNXDaHwbDWez4vegWdPQwAxAQGHyMg2ahVQdFEnfL3tDokES8w3784sZrfjYHQnhaYeA3RunxWnaZhN1LchB2wn",
  "key11": "54fyBWXzjwceJHrtxmDzPX7QFtSSeJV515bocjhmcwvoQJRMeaDhZNgY5zYovJ4Htw8cyPNp7FYQMrsgMDnWF7Kj",
  "key12": "55Q3mUkakQbkutYeF7Q8nJSjQnFzJ9w4BHzP9MMuTNWHa4pruBni1qcDYBB39DMKDmPVrFVSYtaBnuHmGBpiVhdw",
  "key13": "47UKD5dWiWcur2rDhzvh9bnPVhpwG3b7Pe4RHSYQZFL3cc7FezfB6bbqrhg5PHuSCzTj2VvdygZcG8hPvTWUYTsm",
  "key14": "5PosuSgQ2yq3GRuAk8yJrawdv4vGR2Aw7dGhkaxZxGmDTEDtRD2h3p9LPe5qwf8eYg713AXPhybvHHjgPixKqatB",
  "key15": "2FBdej4XUTExwLAa8svkazMUR2xK8dygMsRMZnEipDFYme5jac46GpBdLygSUiCfc8TsKcERu3XHZt6aUJTEo11B",
  "key16": "iCiiVenKCj5VZJEZXeq2ktXFduTsBpJ7R7rtkksAowNYAazRtxMMiETFbh2m6kQYRcNvCDXGbGbQeAr79TspztY",
  "key17": "3wW4XABQkBmb3NDe671PLCkUAXVAjJYEsQhvpyKRejsjCcx2kGSRLxyTVXTtGKqASMAp9ys9XPuYhMzn524uywGA",
  "key18": "3cdMNsKCer5PmrKeNRCjdhRVzJBk44NM8uv3VpHNnY9bHNJhV23sabm1k9MFgsckWvv4fWA5t8y9uFDaZo3hHmfC",
  "key19": "SdGZZoPePb9GHeCyY9hQ3FrMrUNQKgcd9mAgoYANkwQCo4V4amiY2PmjdbFETdNuUSPezFSWChdW2jD8hWLv95U",
  "key20": "4cmScTttoZ2bdDkTrK8dfcu7wEjhJng8GBCpSUA8ZWVkx8o2YZfQGLpR3zCtj6UsTZThRjnjdn3ESYk3EAFe18x3",
  "key21": "479hLmqAp2g33J2eTumXPQPcE5AQzoxCPUjWCoLhQqKHuk9sQgVAEQqeHEo19dtmV3gQ5wEqkFc4ezmykXDZ1iSP",
  "key22": "4QhFq8KWGVGJs6361QzfyRgpekimsorkjz31NB4QcMJmUtAfQ4JmcAVoWwv1EQpsoaZxYfVRrWvMxCpcevbgZWGd",
  "key23": "4wJ3Yk3BGBPP3fpVJczuzbn42fKnRL3N3tMdFjEqpJSrxKJzp9WGhLunWBGQaVCq2ShmsFL6qmgqu77pn3mS3A2D",
  "key24": "4khMR1AvCdfcCx8Db7ghXN1C5g6dN8sVy6rxZuC5qi2XCfhSVbF3dfK59kyUwNqgtpzaCxm7Z5FVLjAuwZcbnLjK",
  "key25": "ffh5fd9J53cEFw2JV68ujqmp5WrZqb4JA8mBmT8GjvK22pQq2sL1KPfnnRj8aGgqGdfpzUNFsX6cBAZnjyYcstQ"
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

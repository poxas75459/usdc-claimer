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
    "53dr8GQAbTfu8QjZ4qQSkWH2iSTUNfeB4DYwF7opB9xSxvzghV99QctqFfuymx2PPmaVR5zva79jnHcPRCCprwsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mk44M6K9s6eppzHGC97jvS29JYkevQ7f3nxsSUmCzsvmy9g83wozQgWBT99hLcWBeut8LCuzDYVPXk3QD9rdnpy",
  "key1": "4vNh7GogzKoiVgNLxChckPieQ9KjRLLDsPY65RYm9RPoSwtHQrmhzx9rvrkfHR37Uo8v8X9X3M4VpwJVKPBTQ8US",
  "key2": "3JHGj75Nx8FbFp2gP7gp2yoUKe5Fqjod6ZR5GmPvmFNPmLZ3dwyAcwC3cVfTV92FDNpWyn9481i4rf3vdud9mWei",
  "key3": "2T9qeguiQv7bjwttnUggXvamyuMSahbXh2dLGpJ8NMWM5MyJb6dh9gpxEMLSGPyJhmLz6CuFVLjMjXbgAWFBjL6B",
  "key4": "288Ge8VsCCDtWsQzaZ9umudc3QkvYJfGfZjVgwshnEGtzSPLDJX1UDGUc4ZdoCw6aNzW6eX5zvms7nMgs77sbZDv",
  "key5": "2m4fKDtoPB4EzSBF6BxHwv7zmXdsKdzxBneZqXfqFc6ckt8GSSrsfyzjFReWEvTjG1Q9HnjwVDsgAcfiVSmZaFEZ",
  "key6": "64sDcR1LwtakHbErtwc2cTtpvQCuVJsu6g3GBnKGcS9BNuyQKc5uVRw9vHgyn69HfWaxVMoKkoVCZJU3sQhmbyQz",
  "key7": "Gy8FfwU97sRAiaeKqdGDqHkgz4jkA9tkmc3qdZ7kVEm5cHE7ZuYicjuUmwtBnDakBXtjueXJ5AyTwPgegMKUjzg",
  "key8": "2yaPW8146J4Yt34KfCgiz77gmwdZWhUxjoZwhqFxnWP8cQTzAJXKKVsKGTeGZhbHYrPBhwkCsyysv9nbdUDP4ogb",
  "key9": "5HqtbYpYCDFBTfSa56BZr1GSycZswk1EJNQAPN7wTiM6ZcNK32SoqvCCZgX8v1P18zVjBLFd3nLgLGDFuRDZjduL",
  "key10": "67k8UWwnLWoYhp2ckdyNsghhR3eytHMPMVA8CqcAZ2rA34Zy7GTG5P9uwgH8WztQC7mwfdazJKKXtXvCfDgR3M9k",
  "key11": "udHWasp6CTP9FBciC8UFqBQkmF8xhhSqoxyEAgtvBEUQoHAFNiZsU3u2nHBsXyNEAomAL7t87KwapFPXBhuF8mu",
  "key12": "NjXniDaAVUSvaVBA4mjUfc84mz6pJS7QQLokLb2eGmqUYNGAqSnDkRGGmrdGeUD9xKYjRbut41zWPEZNDUMHFvc",
  "key13": "5Bw8dGNw9eMFGQzCHJw7iiDJDoBH7g2qh5EWtX3bZ66qRYhDhrMZVMkq7p29F1dsKjxn8YfQy3TjB2d5BS346dgp",
  "key14": "7egDagcKK8siQjhjX6znAjj31Ce4YSsF3vdySsVsYN1DRLuG8FFybVJc5d358F1B99wPBs95p2Ewg5ixoX9BLfT",
  "key15": "451oS9T7V2WKTmPsKre62UvtjfMjBV61gJkgGgwCQ1AKsnTkc441mHtGrdF5RRtTSaZuNj9VTVpAaVwHzkdeiPcj",
  "key16": "4pkTsNLhQyjGj8obnH92Z9Ehsta5zuYezQgVJF4h7H7Zo2Yeu6dUC7tUwpojHkXx5raazf96ax3yZQdwEavcr9gT",
  "key17": "2eYcaG26s3nmEQ55tXmRU62o4Legyc8xgDsVgRreg9W87aFTTPafN68hCgkrtqmVbHbC6kDSUGiydPcbHcm6oMU6",
  "key18": "VV8wN5JAYBE6WDEQ9sveum9FpGKXWwgd1rnurUqXv5KXF2V5BcKpJJ6FyrjtsKNiS6XCE59Gh1B8AR5EsvtuxF4",
  "key19": "5SCRJAYfKEKgK8yoGFgFKZtme9EAqMB7QjuywYtmLtb6utHsiXPZmsSJRenVbor72xo49UNNMGYBe6eeEEd1tKfr",
  "key20": "3ZTiX5pqqkHDnvG3YsNZd2cdHJ43oo2Sd6ptP8VygStbMyRfSBWfBaFcTrnFPtBSJ9bP7kcsbhLaiuP14hqhWNPG",
  "key21": "3T1kVVdP89DQ3fUF8cJspJYwhmQKcYArK9chEEsmmGSZzeRMpRiS8hVDmAqgvoqVxefTecsDwQtKo9by4KWJM2v8",
  "key22": "3oSToJ69iyLir1Na4fvvW9AegJgmzEgqfdjLaHRhzDWKamguuNgSqV4BDJxSn5wjk2HuxJWVgrtsgqXMtoDBbqcM",
  "key23": "xWcbszXwTVtVix3DFP9x3AmKMUbNrGzHipYMorqgLyq8pYtxZVWHaCWqS5bCPNHp856cRuwY41owBQRAKkKWA9z",
  "key24": "4ENqy4t3h1RkkHQMWt1bfqFEoMDhw8NA9utV3dibdd7xyQHG5aHj7v7e2c2nqs5avYqYoixwBA6w6FdBYfGC836b",
  "key25": "5fPADx7n3yudB6bxTdvjggiYDFT7wU89zLffYfXRbstcVPdaW5cqUVN9AAoApwgXMQ2wnCwEUD29XJvQ1ngP7DiR"
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

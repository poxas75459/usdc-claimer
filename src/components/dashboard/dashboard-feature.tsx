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
    "5yefxTBrzgjMq8jx61DiVJD6B81VLgjnUPPWL8Q7m4wCMjk1qZXwNR7zLd3JyjrtiG2ukY64i2WjjQTuxh9Sik1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ki9j1RA4q6rneAzpVu1NUQboD89Y5bprvFkvfpYYiicKn7EShnoHjWHW2nMLAPqB7oHQs4T8syyGiohsery5Du",
  "key1": "3Sa8qnpUMj7vdViiYPmhgFKUibtQMzFEeybHP1PYv82nCdpVixwpqt8G5uKB2Vqgu2qAP98ZEZj3t2o4DWSt1vwg",
  "key2": "4X1xwsuhvQt9V7Z5gxywE9p22aFEVtKk4hMSxrdMb4CTU9VrpHSVwEkx8PXYtT5td6cP3QxfQHHXPDArhTJuX8Q5",
  "key3": "SozfcjkEzvBSoDBvdLHcgbuThN9RE7DiLb7x5vt9657UGsGwkNirH6WmF94azK5vogLDYHisGhZizgrRKm9ayGj",
  "key4": "3fRhjSWX1KYXDK5zkqxan1d2VNHJVHtqrzbuA9CTRrMDkDHCbJHiWH7uDRC9URtK3sViwLcbEWi6CfuS6cPxrtvY",
  "key5": "4dcCrM3SiNzMRboCbab7CSSK8a6a8DNJLByYqPn4YvqXnyAfp3utxyGFMRQuSRPPDBCWfoCm2hwy4UP76gFHpMER",
  "key6": "eYkQ3sHDUxLPoU7fKxX5Q2rhEKGrZ6wkbZyzT9QdUcisK34rZitDiMRzSsMyE7vmhMKVKDLw2b99YxazcVuUTdd",
  "key7": "5TcLBa2nuuHcSSievXtu3R2Aaer23DRzRuby5zauJkGhPRsbKkqCuXRH32H1kCc2sJTdCVh2d6wWMVuqTWAeNtq7",
  "key8": "5koVE7hmvdefEScxAPckuqNb3i2CqDFThVg5ZcH3iS3FC7BZGxcVY2KtjMyt1CTeDxZnAMiLki2io5VQdDQBx8hc",
  "key9": "5MYfktqfSACY6gJK731YjDKAoPKmpcW3DYekb7FNYR51yzMWzAY2GjggQwNkhSpu3YNEy2JTs4j9zkpoJdab384j",
  "key10": "ijgQ2x1DoYvigKjWtS4XEsM243ChWq6JFf2vM9vy5dxcHdMYa93HKVjqCd3X2H5kD9fKEC8BXAFS7GrL3AsuYg1",
  "key11": "4i9tZ7XZbe6sUF322fWo686iTb1ZKtbsoC96AMSM43gf5V9kWL3uRgfuewdYpP4Dmj1CX4fhxZcZcfUjmGX42QYK",
  "key12": "uiSHAVzhFiCjVjoJb5AnkZGJP1MB4qsBAJvKzCrJKjVftkcEEQ21MLuzHqbrhrEtDoFCf9awnEvnFD6zqGZzFSQ",
  "key13": "23ucFU7CVrW6aW8sgYJT4Ak83WsKfeoDe1WVRukPn9NNzmgBVr8QgfhNtY3rs8Qn1R7SNkkAaDANcYbpzEL21BAc",
  "key14": "4jKLJzfakqPmLQN8yHWxHCfwmD1WdFoAsELDQw2vvrPuQgfHrAPqp7ums2dWPozW2vAeTYvs3XjoVG1EJ62uFERw",
  "key15": "4oQQHdWH233CNinJU8AzmLurSVWQdhubDEnPmsGYUACQ3kLHf3pQATDjTcLjJrE7DLmf7UtxVZA61a2RxQEkFA8L",
  "key16": "3r2HNuAX93oYt7DMsKb1F8pwXYruXHnVs2exNivLAxYpGYQKJhvWq7KqcTQ7g36fNAZtKpG3ei6NKAtYZGCypQux",
  "key17": "ersUTutuu3kBrVL644FYsx3QCxEbLccc8uGLYkrMAJy1JBq96gAujkxqwpw8uKCgP4c2PoYWH6dd26hCVRtFmzP",
  "key18": "3v5eTTku3WpVhfnPvLBi5vw3GU9Be5uFtotLBpnAmk3gr4WKryYz7xU2yM9dA3wghzmqZF1yismzKKuEgcVseeAz",
  "key19": "3TPCuvDdKHQTuUy9xsbsbmo6g6ed9EDU399oMRbpZaGGoQphQsejZQCeWnezcQTbxoUwJpQwgW2tPdanWuTuq9XC",
  "key20": "5f4DqskbLPM2R4jdvrL9DVtyEcMsk6FvKQdJ2DdXd1aCzAAa3AFGh69yrbsAH1hHDW4iVJ8zzUA6c5wmqqxGea9D",
  "key21": "RSrVhqcViZSZbt29VDn1Tk1Xz32ckTKXnpNK7RxaRMeTrJrSJJqibbkS76WvWgbctqSmX1u1iVL6FvLwCvr5LR6",
  "key22": "yy5i9B1LXeX2Gqs6UzE2a4ZVDdASREWtDrpTZLDSDq7QCXaQedaBe4gX8F4k1SGJhuT8RJfLw1CVBF1Hg7du4yc",
  "key23": "3NZgf2XXTT1iEcEQBejGfP3SobwsXf87CpkH8MH374XhyfGCuMBh2pTK6SHvQz17VjNsRTtsVYcdVrSKWPVRJEG1",
  "key24": "5GMryKJgY2NHKfYvhTbnytV1NWKzaDAihNspD7kcN9tQXJ5C7ZY9nuPHSqpogpqZUypZGpdxDbtGJ7V3btvPYe6r",
  "key25": "2nvhKh85UdKvbqxbvjTkYh4VkmBA62TfbGAycAnELiJnosa6MwtNJKTQ7Sg479SApj5sW6RKAKoYTUznWhVk7nBL"
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

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
    "3hcFQMCcD4eHMWmBZ9AVjAUUDdyoZG9GxQavUT79wHGM6B95GhSFQZRqFk3cLx2YVzvtFSxZpp5MqjjUsxcdrfH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBXySwRaKF7XwLCH18Bnn8xwXVbCaByXqHv5M4k5qRAUYA8qXMvZQgzcyupBpASYcX5hrfzXnkt4VEysyezbxwN",
  "key1": "FPHDsDgA9kSZaooqRDff5CGHJa5KQ7jY8zu45MeW6ede7RgXMWnAEeQfnnfSEwgoNkBQp6Fu7u85S3YnZBDJNji",
  "key2": "5ab8hDGRFWw5E5EUe7ugajMkR4unLRYy5ekr2dhxJ4oD5Z2hkCJj6ufiSZf7tUchHWUxVXWsdaTaDViRyyYoAPX2",
  "key3": "qR8iihPZz5QYv9AYmb2io3yX844HWhRQsQvSU6sPMAqD9fnnqDSvRTPHMzWXQy3MTuumWHbZTcojeRsHcVBkjii",
  "key4": "4HX67R1h34bdZxT4L2rXUcfkbJGWXHssFdD4LzyKuDdh7SzBZgPjwTYGVb191XkYsGEAf5JwEnL98N3QkTZuWSJx",
  "key5": "2G1hYiyo3PywRPcP5GujiaYx3aLBuoBYgDYoPMtSF9EJRQ9uSZDxExiadNHkQnseMqcM5pzTC6VRCnpiQrMV8HTL",
  "key6": "2x6LGswrQipMTqW82piYZ2vTeP7BJ7XgFHVq1E9u7rFh95hAbB7sGnpRq4JKjexE7mJ9rhHfESaBWhVEaEE5aAU4",
  "key7": "2Tzopc2tCZ8upnJfUrxcAmczRK1iLx4ynhK97vZqQHrB9bsYSMq9iUzzaiQBgJzz1V48wWyXrfvzVZmJiiQckvQG",
  "key8": "29oAMcASarqhAY9VBdChSjjR9b9kTVnZbYnpBrZS4bvViEj8c7DPn7FjaSgNGHaGDXf2CxmJHH8mmBQHH4fJUMKw",
  "key9": "3KesCzCzWe56FoWWDCxFWppJaGQ35nfCgvMb6yrWQF2sMgyu6AYRT2j9swXCit7SR3Jw4PXZac5SB45ZESuBvbVf",
  "key10": "NBvf7oHz7WPGacfhx7daGCa6DNX1sadgRsbRssZKJW4HvJngEc7jfnCTdq8XyStyFrc24okyzpVMi7NVqdTVq4p",
  "key11": "FYTW7rdnUnxZtiDm6bejQxfEmfxdqp1QQQ3EdYT1dPrW8pFF3pE16upU6WjCM2uhpgPckuxCN2riWwi2Fz8CR3p",
  "key12": "5xMgnbragatdkbgQAqn4G71rhof7Lr4KkSHjSh1NQvdNvv54tWedzMEAoWpyf3MNVE8NpsDa8iVYmB7oZYUh2taL",
  "key13": "344URwLizibczQ9ppr3RqMydR6XxpGLhTgC6BhWRBh63ECkg5KXvR2gj4wtDyADQdJ1HQoTjmx8YoP83eWn7ccjD",
  "key14": "2eYUZefYDGwGEdxjzhENe64KnupZR5VAVq7e9WJTj1rAV6rssMKZsMMTebYn58NznYoFH3VPGYzhpp37Vy4XTt5Z",
  "key15": "4p3TZ1zD36GSvanhV5iGf7azwUHKg22deeUVEsJfQHj3K67YGwN9HLzLvbVCo1Bo5z2d9F2cC8wNN64NKFSQc8uZ",
  "key16": "3bwqPoULoRrqqUxw3MHVE9Qx4eiDmMS6s4G8JZR4wrcL82HW6pmwfDWzH1rbfukPzL7bJQQJraCuG8FvvTc4xm3s",
  "key17": "3mKRHik5kpUrEMxo67NzsbWNGP6Pa4RNwVkBZhLuQRonzqDuqTSmmnUFasXGcDzgMkmEmwSGs1Yf36sYBdBFpdKg",
  "key18": "4LToxPcUkxjPcUGMd6Qid6nKniVyAJzW9temXzveDrEcz6uhSfSx6anytkfNWkqEPST8LBpyvWXJxxdasn7c3Arj",
  "key19": "2sGfzmKdjjAgcL8shb5vC61gD6zAxng5ueWs4Hiu5z67uL7L6RiAquzjpwdyNWFHELXoqUwyFJQHrt2KXgK2eQLD",
  "key20": "2Tc9ypF8Z2EHXgL6HTxtZC6F656TaFn8Au98yiL1MLkoRcUmeTv3MX6xfMSAwkrA5KS31994keSovdLCbvugCDPU",
  "key21": "5zq4EGJjD4KY9gGhjo1PeYbwRkmpQNDk9aq5uVdxGEEy7kb5HxzZ8LWW6AkWxvh4Yof4KDNVk8YWA8JsdChMsBY",
  "key22": "4WKJ5u9LLJupKxtcUk7cx8mrcFdE9CJpvXLWrNVnM6xo6vY5ZaLfsf1D5k6Ndh5hMsRmbLpVo5yFLE2eKG3tHXa9",
  "key23": "YNo379eNJe6T5GR2Gj7z5VMR8tYfD643RGgWKyyBA6eBqEqkDe9qwp6WmhFxT4VQrtqTmS51gC1Awkk7MC3EWsx",
  "key24": "5RstufcyrEw6VHTPuCdtUzzKBhmM9mJYeGs5iQgWJaja5MSfyVQL3oAqo4ezPw9fHnL1MZYZzbYYoRZJ3rS8NuHW",
  "key25": "5xMaJUJi2VpbRu9i1zkgAkUoL9PRbu4mZpQF95yWEtLcJi7b65N2uKa5KyWNyQqZGLapWdeGWyWFjomt6fsPbcYe",
  "key26": "52Uu8aacTfstu4UvkoGqDam1CubWW13A3TZJXM27feYNd5PJ1VNE4eMUab6VKi73SAJUiy3Hd51CvC1rXJTmzbNh",
  "key27": "2AqUusogR1qvRkW8irgpaLjczUidESXrnh7fQQTguMkrnJTcDExTPLbRcray4LnB93TQCKSPf2mZn97e9HJ3WfYY",
  "key28": "9BgPavXLR25RE7NJ4Tvj5sJMFBMSBpu9utKCyejwBrZYfCB8fbmVjDEsU196mJcKGraApeTdztNqpjL7thcK42p",
  "key29": "4MHubyH32zGT3SUk339CLWLQfCSY5D6AW9zm3CX3KUPBXDb6PHZAnQ1jbKgfXXN57yw6EZMXMbPLNTXXQiMSZJ6Y",
  "key30": "5Ji5p3iMkkrVbqwFN8dDDLrTrmTWiaX5MLFF2ojKtQu884qNYrzcnNEiVz1D9C3eEJHwAHyoKYY3HWdGdBWnXjtf"
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

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
    "4jvNqsYTp16u58xiXUuFABT9W2g75PqC1mZFEWb8orZ2HFs1rAHbqnadZeefcrNEJSVpjm4YS6gZSzSUdt1BMxth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ERRr2ra2wtFDHbq5JeTaDi22RKwYySYwqyz7prWNVJwT58BFeG9hWk4DMdBGeiPhYam81G5gzXwStdD8GzoNbf",
  "key1": "227FssYvpeuv62KrKhNAEZ4j3z1gtB69yCT465u4Fx59TAE5wzoKSh6gfhFYVDrgt7L5fzKfS2gLgxRt8xCmy2Ho",
  "key2": "3Kt4LJy8wnkujcfZTsbFXP7SsvMgGpV9eW8vLKB6UnyD86NyXEBv3N6XmyQJv4DdjYdn7wAhc516ekFWbXHYgjcY",
  "key3": "5FujYLNAH3feAtLL6x6ZjFdCTWk5YZcW6dP6sMDtE2UZsWpLbc7Ay8ZWQRT1NvSRnZPMpqYJGGTQunueftgF1xyG",
  "key4": "2xYgNAMcY3u8ZCbrQNaKe8C6kFJMxH2j91Sd3ZnjZz9wESuk2ZtUi1TMmDQAkWVmGh8zx4gDB9VFgNMJwskaJWrK",
  "key5": "2J3we46aFxP2AVNBScEFaAqQiwN95koFBd5g4ESns3oxVJSeiq7kb4H41SzCfizTGjtkdNxp8gsCEzXMgDL7XTuw",
  "key6": "4k3F54mfi4yKVRH6XyF2LHUi5CzpesD9f6HdQpDwcwDMJecAbyWtECTxAaXE5YKZ1GYCxa6WWhoxnscS3tnJyRmx",
  "key7": "3LAnv9UiHqCwLe2gK7bDDii1BZkgDPTj9y3hzVEDNL9g2Hwr5mDRW965MzAo393hkP8g7b9n9RizeBVjWj5T7TsD",
  "key8": "23wxggLw5rQ2AxhyRSABdS4Yn5uMF1K49YsURuk5wN4DyvpTGT7THvA3mRgpW1N7C3bgi7gPdx1pbSfwyBUoSeRD",
  "key9": "4ho8vRecRSmdgPjBY11sGs4v7JTmSo6kiYx776Qj7KZHgZxMyDEKP6hM4JoLFTGQmJSbuV96FnQ3Q7FjSVU9ZzpS",
  "key10": "WXai6yr9B7CYwwCiSWkSUTcBSqdcc6on7FQVZsaE6PvvUM3a3v62tHhryuKjqdsNwg1RagaPj9ws3wQqi72pWX8",
  "key11": "3bwshCcaCHswpxSPnQuX5dUr9DzqcMg1i9zFxL9RGc61nQCwac9dD1BmcEmxW5Epi53UpHck2EzEK6Q8SWWssovX",
  "key12": "2ojZi1Ht12zdkWNrUjo5pi1b6uq7H8PHNAuR2gf5NXrgvPdWnDabHXkU2nLP7XxXDG3F5jBDQifEJ8anZvGmsK7V",
  "key13": "41yvhCWnxk99tjDHHhHnuckjuVbxTyqgq85ZvZkoTxgZCBvktpAmPjKm5CgeaZcFszmZ4sjxNum7ATgALjCJZgDy",
  "key14": "5aC9b2n7dp26piT1SDoRkfbGmftvjK7ZouRinnDDk9shP61PP7qbALJ9bQGbwG2bhbPF7Bf8Gq9ttW2Y2tesFM5F",
  "key15": "w531ze5s8JquHJYxNqQwXbshwwfxXaEFb6qrfLaERt52p6keMVtzQiUKCpmwZcfCfE2sA6Uia58HBHSrW6xKKs7",
  "key16": "4XFoGEfk66xbJAA7SDYmsXsPrpqrExtH7HaiJuWsxudu2ibWQPenRrKuYCGFc2piuvgidrn7AMxwEkbdfnLLydFx",
  "key17": "5QmG71yXhbnP3BcKp1RdUGJL9YbsFwAsdVsh7C3UrwVmj56MCH1tjZSGt9QTYf49sH9ZzMT3F32tPuJ2BGrGLbdV",
  "key18": "58CKNWF5ZtR66BNj7vcmu1Q7mDgUTeCiyUCDJofbx7Vko7Wv6BGVLDEjoED2QRwjq1AdxqHKYZ2nt6BeUV4GT5bq",
  "key19": "54T3BontTRiL8Bou58BxjknZ8sQg4sp5iAszQNwuNcnWsHJzDt2P1tXNCeKwT958S5rsVX9jszfkPRFxuoYHizz8",
  "key20": "xbQsozHBmsfnKEDVKpUrECJ3MG1qnP9BEiJV9A4eTjnXimhduW1kp3PWeNZu6a8jwweN8bpMDoxCt4KbiF4cXbE",
  "key21": "4q17zGRhRCTsW3rNRBYvjEtYXJXCQC8KgP7GuWddB9znviX4aZYBngjwSqNFGxmjr733NdQFfHh192DZWpPL76Bf",
  "key22": "5UzGoc9DqUoHiZVsWRHbb2TRYKKdZA6SSsHHvbpHZBL5P5E5xDEQfuuSWhR45HmH7823nLZhjyb1efpZWhNi9Bgh",
  "key23": "5PYbDJ5niunmtF9f3bHBZKtvxr3EASCmuGiMydvNg2QvEbNarK451wijjgRvQ47GwnqYqreztpBhKSfGxZ5D1dbQ",
  "key24": "3YLKs14BNP5YThAkBrteVx26qv3Dku8VPcCgrH2FpUNJfY36CURATx7xgQWqm6DnnGvjuta6PqR2QVDBHucdRcc6",
  "key25": "4NexDMEpQktP83LP1orWdff9udc9W3NDsTkYrXqfVpHfFyDmB6PTW9FNxn2D59EqPQYfAJFrfMAcGJVHVt3BbADc",
  "key26": "5n5LM9W8RF8mEZRnhNdj9Wdhcn8WaYWrS18DiK5UF8j33aQxaC5J3zyrR6zm37qgLokmyAsVAEFdGtDVB5iSqbYG",
  "key27": "2R4Tf7o1rVdMnv8QVAeMxMhNnbdM56LfbvXFFEV41Ahhqp33TdnDvxzFEVqCnhedfoDT5CpQP1ywCtd193ezyper",
  "key28": "4yA1MAE9KcT5UGnWFmKyskpi6tkDVwmhEzPxN2e9FyVf5xsem8Z7eHC2P8FpMiM75bie5z8tie6p31xKX2vK4Dze",
  "key29": "3bCBfhbBoS3iEqUqgG7BSNSCBJrFf2xWw495kQzDKuNDVNxWsppfBi13dYGqnuXDYo1m4s4AoTiT3Pxsqe8e69px",
  "key30": "gE7RkXQyptQVtXaTE8H5UaFS1gubY6pgSdGNU9YpGqwto4nZJi7Z8GcDXmySrhXaGA79ZKmihpSnruFhiJs87tc",
  "key31": "2UPHzGzWVvb45YKBM3LaeMqrYZ8j6RRY1AKuKACKKUwgPkCjRSThSrj7MsdrhGPBxuGBN8iihtgpujzTEjdxc1N8",
  "key32": "3Y7pBzai5sCe6VeEAc9AogzixjNmJen8CHzHFremFiXURgDaUsSDkLdeX36az8oUXnzuqR2XGv1XafLaNwxJaEBA",
  "key33": "2jt79wmKp4xFGk6teNMjTkvWxrUHciHGK81ZQG671sWcspkmccRSAhJs44ARKo25PF5WivBHM62HmNhuSP4x5KNm",
  "key34": "5zGwcYoGwCoebEyMFe8g85bBp6dCdz5Hiu1u1xDj9XtGFniThk7eT3ANU79UmMrUuBait2p74JJfbcsnJG4haWoi",
  "key35": "4QYykUiHtKcaU231LFYd9pcmaf9DW3DdrKjwN9QS4nxSBv6iMURK95jeVms6jQPopRATF7tb7K3avECRGEP9UWiz",
  "key36": "m4NvAMAUwhwcmY6NhPoaoFrQKz99KN6DK2hJrXLQWx1xQRgGFYdtvqvZBfgruyCfGWKn3g4KTJ67xNBc1cvLpSA",
  "key37": "qv6V1cryGiS6BAq4XtW7Lvmnc6LmoqhzWPyPBkLwNqLpuYkKHm5S33JbFGUhv4bvJRG6dzsUuZWvdWoba3e9nhP",
  "key38": "5x774d4paWmnUrfPUXTMMDVTSQvXeiGaafzmQeWLyWUqPbAp6iZ2Zg31C1ha1A9zZmrrn4URrqNjgW8Lvz9Wxhta",
  "key39": "5oTEEbpNxT1mpAck9hqDpCjxVkJx2inSYBj5JBsT8WvHJsQP5CLXHqnxHSyMgLG4jV5c2jXdxWgMu8ieLZ2rur9n",
  "key40": "4V5BTYeVvob1otTgkaJ2YuLUsHcYbJdqjqSXNk8xaKT7aGtcjH6p8X8J6ZjX5kBaU2mPFitRBEoCfdFfASjv9WXn",
  "key41": "naMybusPPAHc8eVoBmGE5rpvyk2HQrrM1CnRVYXZvCEHcBMvSwHujxQXSHnvM3pXHBztNKzaKK54yU2xctrUms7",
  "key42": "HCYvJXrdXu4MZQ6JZYWYq4cTBwCfnn1bDjc6r18L2SRgUH5BCVX51ZGKMzjfB8kDfksG7d9T24THhctwdLQwmkH",
  "key43": "5tQvUDDoyJnSdmevS2RxXyHVoyHMGHaVExJFYvAv94AuNXugbJEypFQ4hkUgm5yAiG8gAxh6Qkzyyxqk7huhYtHM",
  "key44": "48r5knpPadWwptcpzRHy6NXRR6MVMVS1BCrUyR9wQPeLGVuutHCjmoDa6ekJuyA3r28aBDJQiVBFFTtTQGxgCPhj",
  "key45": "1AwB12URH8JRXpgFbFwNvsjaCWEca6r2eiLP7bogEaajSKibJoL9WVnV1a5TGo3tXVdiMXz6pFm5CXDUiBQWGWm",
  "key46": "51RdJB9dgn3Wn374rzEa6SoRFkjtfdriXsPPX93s8c8Hh84gZCPRLFmuGxh4cRjpdstUZuR6xEQks5vD1aZasvwr",
  "key47": "yiG2hZk36xNustFS9WW6g1kBkDbKfG4T5UnZfaAW7qA1Zk8WG69QsVWFNUdFq8jjA2CgDupBdFsANHanoDay4gX"
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

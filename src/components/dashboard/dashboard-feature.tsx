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
    "A9G4RnH7dHkSD3CStxB6TQ8dyWDomRGthBbqcWVBj8MwCu44ejnGZpdHHhLkVLPZXKwo6iueusN88ErJjbBjNt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppVL4sRYgqiACoDB8ya83GpUQEvPwugs9ib8zQqU7kWE8B6Zf6316a1Yc9SqVgd6jSuJw1pNu4tfFucB1rsba96",
  "key1": "4jRkbzxxPbiwb6VRmB5Vk5UURRTK2JAnph1C28DWsH3qMywgAfUy4n3yWpEFTGeCknz55uVzk7rdkGwtHRar4PHB",
  "key2": "4X5dL833zst7GsgXJZeoEYjRrLa8h1kSymsiMpWosLCK8mvgBFcFSKo6WVGCLukEWWNwYGJhZiieibiGsVfu5Y2N",
  "key3": "5JwvnpQhC1F7RLXLCdtkiXxgXUPkZLAMjVdje4PwvGMYCVYvNxPAjPE4ufrbh1FDjeuxTpQHAMeUJJb5FV7YuDY8",
  "key4": "4SzLzLDqccZwL2dLifehhrU7edH51cvr3B2EA7TcxCb5nSoMFVqMDuEA3gs46yBpMZAxBf8vcwhqpf72TgdcbepW",
  "key5": "5boaj7dWmcj4Haock7j3kQY6rbeUWvUW15zTssvkDHRdN2CL6bHJEdV6jdm9ij2AYcibtY5Ufszbr3VcC4TrVEUF",
  "key6": "3fy79g3weLGUP7poNx2NX1KMExG5b4tJygkEcT1yJSMK1HKZRbCmgqudhZwjrt8mVRC7LVXEAuTY5phE1E7Ps19F",
  "key7": "2JAHZifpZB4wcyvgq8SCpkVrEPbEKFBf264U3U2ANUFGHkQZhEEYus7FBSWh9AC6c1AaAPbkTefnmRsjLLzQj9ja",
  "key8": "5vnUvWuLaMCdtjJUYE3ZZZw8vWNBic9jgsdTUYvWTtARCy1f1sGPWXzS2wJyhs8cG4sct2n1e5CKRUxzNCwYpHt7",
  "key9": "3ZG564r5MTdUnVkVJX2mScZtz2Ntwwbpmo2sVyrGri9cmpfdbfN6JYQpNkN9gGqW7yMDk52DLfAgP8NuDHgREdyw",
  "key10": "5qz7rg223BY73sNm6tJz2mJ41gyj2uDeyCZiPgyuJ4ktH8Kky4hgWoaAdCpjn2FR22YABtp7gXZKRsbrmNCCrjb8",
  "key11": "5Y39am4bvat5Q5PxpPDmCAVVwrrqrvMCW9PKkXj3nhC1KFwdkS7KdJkd7eSdCbPDtCv8f143CcVc7D94xDp7AmL8",
  "key12": "5ywpDrWe85h8R1qsr3oyTFUF68eKSKrNbvF8gxw5aUkiQJwjJhsqGEBWSXeGaFEyd1rAk3wCERkA14hWh8SCdfh3",
  "key13": "H867Xm78jSoEPxjPMZ2qYyWtXonCAw2GKWwM5Fp3hDbVc7c95id5bMCrgpzS9DqVE7yiykWPPUj9TiKBoPmk6Q5",
  "key14": "XwbBzhnNZbAQt5NF7rA3Qfra6xLtwb3gy9pHTMVieXpuwsZS8rtXjS27dpRRCc2ZS2oS5bpQ4FenfGLLKWGRi3D",
  "key15": "4EZXVQk9orcKEZA9JkWtL7arpxPRGsoQHutL3uccEgXVtcEtonn4hMGoV3kDJSUDDoU96dLSZZBttT1CfByna1HX",
  "key16": "4dpSgM8M35TRQvQePs6mi9oTqsWgCvVNqRLpH5x6LsCT2mmNZP5VyfJsJrFXZu8vfikR79NDJY8yz9L8gMVPpcJ8",
  "key17": "5Fo7fGkiYLueJJUuQyieqZZBP3f7Thsj4tdxfkDQn3iGYkLMBsZRxsMXdca2bLQoCYG59n86bXJ8xoeQjddahU3P",
  "key18": "2Brkm9NX9gvrARNwAG6E2Z1qcSHMqUreRD45cJYKVcAGrXXesT6qQFy48zT3pKtphwbNqjzTyZWt3xMDE3jfJ5st",
  "key19": "4VmRdKpVAMY1Y7qydx4HtHwCrKsWmnHp2BQytRbZfdPxiEP5D2AqVJ2mjXFLuCdPAUzzqQMgAFwC9eZDGepx4dsT",
  "key20": "52RzzmQAs74VVgVGVCnaXDobAqKNvtYzoA2W94Wc8Nx9sQTsQqYKmXGBdAoKqQ3G9CgT8zaTtpRG6g1jF1TArpCZ",
  "key21": "4Tk7ocDWHFuG6hiBE6FnFiziJXYgCktUeKgkJXVXGNXt3vA5oEGtHSnhNC68w9i6teiiPZC8VSvX3K65YoEJscku",
  "key22": "2vycgd4TVaSw5GBQYzgwLSEjzxzWnJUHGFKnSG6QgyznpY5YjcP5b8e4RGNAgH4yY7TU96VxsML4aQ9knWBGKEKe",
  "key23": "E4ctmECUoCsjGDUnJ29YNrf4k3wHkHY5zjZnPsVi8xFGqGogbcm4NgZxL3R1LdE8dZkDoc6xNR5p1QrbKgGa1Wp",
  "key24": "43s3NopZHeZnuKLKwhT9Kqh43XUMbvjvmMwS7RCJVQRVy7LJV6z5VXVKTGoSTw4AL2j8y6FBdwN9jbDhgpSj9aiA",
  "key25": "3DYGu3swnbVMfKCuwqHbjFRKxDmUcR1cyUu3m7ypn34XZ5mwskCdhU9L3q1ZboFAmfxxMHX62CkFvqiwkPya5TQd",
  "key26": "59UdinRE9tynW6cmXm55S7b4Z36cirxbNQ3rdN5ftcBXmhrseqQbzpGX6DvjVV5bosHDHTwV5dEahvtmkBeEzc71",
  "key27": "332sQkADQSx5UEnVdZVCfodvmChgfskyAwmyFJYkGDZFCRuEm5woaUgnKeHm1c5MUMEdz9Q4uvSeznyNf7MWqPWv",
  "key28": "4vawSijX3dWDNLgqmQzHgJrsSAHqvedGrEgD715NTyRucSRj3E4Y9AQmWSgSQtSVVHmcqqzbwUKNSK6SdacE448L",
  "key29": "2uMYnd5bm6nxpTdXQbsPGXsL6aztRUATiz45fqr1SpFPLuaDqfNSgTPLuU8UX5B9JJxsyRk1k4aRN5gew62GZgCD",
  "key30": "2NbZ7HWU4bXKmPccCkt9fKzVoPvg7TQtUt9ms2ydbR5NHz2jGaqKcx3Fj46THdYWvgMqoH3xHLREDZ3BncxSPNWu",
  "key31": "ArMFC5sZTBwKpiTKjfteVrXn9tZWvYNeGDFvDq4jTfLyx9DYNLUtc2ZLaHk6XWaUfYLscKbu6dSfz8Ctb55ufEk",
  "key32": "4hYjwiMRZiYyEmApXQ5PXFwnsdmiCxWSMnKV7UpvZqzgzwHNs5NtBFuDG4zmgyxxnoGvZ2m1sidzKStnNTHVRbBX",
  "key33": "2kXFi6bEmFu9BQLmyUBk4dT4aDsW1Nh4AwZjtu49Cf5xBrZR7QpQYQFAXCQCFXXHGKTVpYsr4UXVDxRpQossqPFF",
  "key34": "2SjAkur9SNBNygH8jqbFRZyVR674cx4VDdQUrQULxBqwccEUrCsAyLFGhnKMEKn25Ju5T568rFxgs4a8JV7W9kKd",
  "key35": "2qwdYcuMMRJq1fzFBn2zUiD22a3mtKYYie3PrADJnPdKE7HWhUivWmD61ZwP4bBfMCePbtVe5suoq1uwg2JnjPD3",
  "key36": "58da4kX8HJH6oMEJr2KtTscifGL1VxhdMtATYHUgBnSHcSpVMuU7TKhHqLAkzNx1UR2s3YxLJmFsCFPGpiLiinR7",
  "key37": "5wj5LcFHVC8hYf5xECFgmJJPNb8SeMVU3JMHjKgjSjBdeDv1cbR2Kuqc7NjqmjsaQycpNYWWgKtJxp8eKQny5NGh",
  "key38": "5aJfYNRPaY9akRZX1GbDS7c8edr6uzShazGUMDWT4mVAo1EAZNJAvSYSuPt6L5VtSsE1zLpM5rkySvhWMb9NYJjb",
  "key39": "5PeHFziME1vZ7eHovHoypuhHN4XPa53vLpRqR4qJA9WZ7K9SrEswG6A6he7bvrWuQsUw4u2BTYE6WNi7oUkE17dj",
  "key40": "2BDnJCUX8rXgJs9xBLBVhjhYhDh7zGtfgCLzKGBaksY6NVYx45AWtSyWHegYyUkj92gbM6N2ZSqJjvCJwwvvTWD7",
  "key41": "ab7gAGx6p2Q2GwnD5SDLPZ2mqc5ca8bnqPJi3cn8ofnbC2NCYBeBd87DU8gKHtZAdAHm893g5AiDTst1JzY6JvP",
  "key42": "QpALY69G2HpGqYiu2JsTA877N6amjvWgbVb9V5W7K2aUdsmvLJ8nmsAPSUnGYzGMNUMQMEmoVnbavyprZc1BTmd",
  "key43": "WLkZJdTRadqFndUbugVmrXEBGXwW92pNThFq8Ej3Hkbvk72PNeZprK7ceKdQFQzvrVPZNrfzrXPmLbBRz1kkSGU",
  "key44": "2m9dpaxD4S5P4yVNPEP89jpkMFy17dUbau1aQuGZwceyjiAwACPcKzBQwtCWXect35N66jFQgR95CE6UsXAddfua",
  "key45": "5W9S1UojUGHo265bRAsYMryyUhcGue1V4Ln51JTf91Dq4RmkzL2v24i6FcjBbU81mvMZ7gYitfV7YZz9XYEkvvdU",
  "key46": "4WMLqxiar1YurxjmJoPgXqXmn3cPReYsAjC9RayeVizWdPCwahSYnYJbkZuUGJiZBbDtxNEmz3xT95TXedqpngAj",
  "key47": "5aWUqvhGykNrXSNQq14Ep6KgcPX6MVzNw8kDFy8AQjTUKxrry42WipyLCaM3ioMXfjj9gg1Ze3KT7Z4Y4ns9uJPK",
  "key48": "3bFnHSkErL6hni1U37PtmDh87uZjpGSxymfr7FVvSqAUvVErTcCE7Q61t9H2joyyTnzTfzTkboowuw3Y7xJN8Dpj"
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

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
    "5SkJj6GpECp5MzroPV1qyM73vqAezFo9uA8dddSbMgM9FLmNTCDo1fvZiDX1kHACBVzQLZDQE16JyYTBjEBaYvQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rTXnvegSngEkeAZfMkyT2rHDHvLckLds7Nyui7w3DNXTzCKkHQoCKF4o3Wy26ar9cKpbydrFUQULuxwi94WyDCh",
  "key1": "4erorP5tZMYa4cWxaPASSNzctbEJvMoVbF8HGZZuNBpQC1MQ9hGKMWwLzSmNqpabuWFDmtGA6M5zitUuiUnFfcvj",
  "key2": "2hW3dEFBDZeZ3qYp1d4ShwscahdqHQDBRnwLAQjfMtKKd9tREazG1dm1HMsn1fB3XmkRTCJ152QmJLYXogerpbvX",
  "key3": "46ZQyvtsfoJs1gFGiWPKnx7QkPYyqn2JK3EZLdsTrgacYEYuQwCZprC369cQKBee8xHSuAxVqdRrUHaNNXrEAA4z",
  "key4": "3D6ufNVrVZ3iSENuTgjefddubSmSdUZArBEYS2mhW7TGKPdLqyacKzGJuAjYQEuYpx9ddQBZy5cQP6qaCdDbrRda",
  "key5": "34JyGY5U2uRtZM2kytLsTRDrDjmLFp8QEqWe7auHkqoP1YoxMPvsBrbLhQsPv5kCV1pYewf3oUcAfMSj9JKxXyU8",
  "key6": "5UH6CoUqxezGu8kC4odWxmm3uQUs1txDMm93WPn27Bx6suaqfo2Hgq5RNcV4PGXGXqnCL18do8CbRYHLY95ZS4F9",
  "key7": "mr8YRi2m3CMqHV4XXa9rxAFx9qQhh8KsGG54mErSy6VDjfZiYpvEr8zda6o1tcZ5NrwvDtBji3FBpF91kYKJ9nU",
  "key8": "28FGLi3QBUTs38ytXmxJidSiQD6icRhwsE4CCDEBPGnZRzNv8egYAyMYNbpu2KgLfxPmQeFr7yUYxjXCabYpQsaJ",
  "key9": "3HFzMjxy2sLHNPVanWGBgsSkSVn9kEvji512o2rk75gg8iGTcGZz6SBFiUtRTWyZatpQJ1TgnoAJLheZ8t6Yb9Gg",
  "key10": "3cpg7FXCFEKFdq95kHumnrjRcnj1oSvEUbD64NmTrgD9GdFX25sQrZUCLb4QmpgVepniJ6eM66EX9gB79VhpMd3P",
  "key11": "4RDcwmYciGCazM2LHue9Esj2Q88J9xEvmPvuvL5RLtWLyGMXB74ouPPvjjBT7nWWDwYAVzuWvttYXphZEFqC2Qmt",
  "key12": "3oPRdxfDfuwhFgE5H4hPPm1ESQG8ev1sQkaF7SVYtgcdGNNbhzhbYvAkhM8zZZb3adu18hxkj4JdoJj7szeGJ8vv",
  "key13": "3niihWLJbBb7WwNchsBzTvqjNW1qUGYrZSAi3fyd2KzN7WL4DbczVwxoKhcEEcTcEKkoe9jJ1tfZarcbwGFmTtRz",
  "key14": "5kDLAwMnF8WpTH1QpMYJXegPWyP3fJgV9fDQ6CQ5WGZDZrNQ3PeuQYT6Vbz6xMZfkBMC9HVBAu67Ccr1u6GmduFS",
  "key15": "2b2JNdR4w7c61C4djRhhwiS9cTgFMQJCwCELAEqz4VvCjZKiB7rT2ZYgtYsTCQPnQ327vjsRHHMvkt1JUriwjL3B",
  "key16": "2SHR5L2s6Cbhh6V325jJg88PK9nA5ujDqAaE46EwWahHCndF94DNrQtnhpNUQmLKBopnzCt9s4ikhCYDQKZWZde2",
  "key17": "471hXfadzNVoTbb24DnEf32FWAtyjUmdPLx3zJTsxUT46a2PuZMeGTxhBY39onXYE9pxS1q79oGhihNEjd4b3r28",
  "key18": "6ijB7oat5z2268iQfbSFAbmsZ546rwAv1jUcF6FvV35GP6fHXcYqEwvKL44j49ToEdU81vvDJByVA7Yws5V7PkZ",
  "key19": "4kuLkZPbRbkT7jUhY9D3cSzW9AUtxTdCjbYgEmPMyoDDycDCPc2GnKhQEpV8oLJTHXZwfWe6ZuhFoVn8QXUQhQhK",
  "key20": "vAb43iRPUHdAatEUQSk1MSgvLDkrZYmt4R81a1kJJraBEmGyvMe7CSmj9ggBLS76KonwPTfnQbAMSF9ArtjEqFa",
  "key21": "4Ss4GT4ooT5YAQQvJ2C2KY719VkJD5JfjNUzAuZsUtVKnZ4xCw6sWHMinC4WNy7ibhpUDyB3Pf3j2gZD1WvG9oEa",
  "key22": "BFWdtzp6sUahZRAaypUjnembj6nKjZorSNiA3JwSZsFPGoVzVTKAuPgu7Fvf6cLLgCgRc9k5RZkcQZg3x3QtfLS",
  "key23": "4xUq1TurEw9R4LCVq8c96MfwoKtUDcFYULBkex1wNtYALSTDryDcYRtah3vCuDGtkNsFkMa6kCG7pdcjEtNq7vfM",
  "key24": "2PD62Ke1WHyfs9xUjU8Q68aSmG7k8prHVtH46McBt7PXfp3g8RSNuXdiaGTCUKsrBynCcaBHySHBDpTumoDVVHAE",
  "key25": "3gkimRwdNJP9pSBhTH48bN3pBesLQ27ESd6kPh5Ytc6zg3yXPkC3B3ZvpZpd8RLF7ZFCSTXMoxFshAqwyNekeUL6",
  "key26": "3fY9KytvVRY1V5Tstez7at9aw8q6aECQeEcp18wz4s7HyvGUC7Lemvs72yXQ1nrzNV4A8yATiGrW3rZmi8HGxUf5",
  "key27": "ZzNqFwuapj8WWMW5Fe866ghVtSxLbTAtevEPZLMxB3B9naPEHhkTJHcfeeFLAKN79hEN7R4APjEfN22uhCSyqJg",
  "key28": "4skChWvNYkvd3wb4sF5C7Kh49mLxN5ZPsi3skvUMFbgdZk9QNLyGHgcMo2PFKSfdafu2j9upqK4b8KnNHrRqkgAC",
  "key29": "3LYx4TbaCMWMrSjTs9cXKegou3xxyQzVg7e1Fsk6upq8Pd3P3P5o3zLR9orWtkmcBN1XmG2NJsBawidAwhoaipQU",
  "key30": "3RQS2KvMgfHo865zM3ZEsoAxdr5imfLZgjmwm6uyLWfT967sPZYyg47HArXuJVcGRd9W3TKZZm8Seoo5G7HT3ff8",
  "key31": "42V25rnS5mXgQRmqwAQKptvufF3moqX9p2mSYGd38Zn6wE7empk4v7HW8S6rmDwtnu2rzK6dERTZcdE147LKgzXT",
  "key32": "5rKnZbUQV4AatXGySRT49o1f3v24R5fxHYdFxEEWZVmmhUhL9tBpsyg6TheeZG1w4gZ9XnjypDaobyk7XQXa53zu",
  "key33": "2XXeQ17gupVMFPnQXm6X25P3Eukw6sT7uoBY1djhgbFfEEp1s3wLCEjjbCXKuqcg7x88Yaw6uWM1SXvrqeWcgpQE",
  "key34": "53fftsYbbgtZ6WyXfLg9s1AeQ1UN13VzFkGBF8oQ8xKSy1rZmvHZo3H4GfuRyWw2n3GD49dutzYNDSUXpAZ3aen5",
  "key35": "2vcJigCGpqzCJpYR7YoWFpukkiJV282tHfFky2cv2KeVtu7nnVnWSQMatoNhWQVcqwtHd8F9Gk4kSAgD64Kbn8UV",
  "key36": "4dBq2sqK1nUeaRoT48V32vHZAgSrHfrwGQu71NP94gtR4tCD4gnGVCJU2p8HezGoHnixeyGaZJNygcnd7Amipfib",
  "key37": "2rzrst9JAapz88mctKs4sqHzTNrsQ1akKY6JU9j7WxhPwu6EzRD4VbkHezWpwTRtcYJZXJauTxj6Qh9p8BqmoDaZ",
  "key38": "KiqjGYbrZT6MhBUwoUDqB3j3UBRXuTjnH3osSbykWxv2b42Mu81jdCLvBcxsmNWnXmqwvN1BcwdWddGQwaAvirq",
  "key39": "5ht1VLmJQxvdkcpd1X4cRhKTikgEASHvS5RAPXQXmnJXfQHUyK8gkXnzjnL39oBECNvoDcCzUgv45DDVTK3Cmojh",
  "key40": "42zU5Nf5tfqymkCWd983Pn5MP8cLRaVUMKehAstEytUUg4qfkQkkCTd8Afazds9tAd6AH4e2sCPoYrysFxEpAeZ8",
  "key41": "4WBUdY7PXsYs3TeDhuyppYnEWyXWiibAYRoMopt2RgoQWDwuwbyM2SFh3WskKAzYeWWSfVqrRS2qha5WxtPdqkwX",
  "key42": "2TnKY3zx6LfMs3hSGkhS8HcX54iQ2NYTL5sGvqPwF1ihDnVMTuAmBdJZZ2dXAKCVqdZRLCcSrSVDGktwuCP25nzg",
  "key43": "3uJu38wZwR2WhcQcRbvUeKSyoeijbRFbgnYoLvHU14jfuEHZMdJah4uiARiGNPETZMdCTi1cANTiFoode248eJ46",
  "key44": "9o5EoeUqS4Jg4dJEAUwqexdCU4dhMk7b3gUfucxp7aZKv3nLef8JWLECR86a3c3Xdb85Lam4nPQVPopduXQnprJ",
  "key45": "5Uhsn1H9hZV8zCfvDSqS9RG7hDUtESJb8DpAV7cDDQYuSotrPoZGBYzc1bodGZpDPRw6JdN1ryWDwiHC2dnwQa7p",
  "key46": "67eKpK3Sb6VTgLSjSeFumBBvqfad7qejnP8sWNrQBvMf47GL5SU4WoXXvxMj59GGannrAfk45MVDT66aUUUZf6Em",
  "key47": "RC2XkLXEoH4ZEqyf23jVeNR9Gob7ohTveCEyFi5QCPRE1mvYewPgHjkJUksbKz1Rxgt9vbhoqXVhVs5mAf2tcqf",
  "key48": "ynJhCNJq7mhvXEMYpGR5SRJjTRiwb2uCDYV9ZVhj1yt3misNj5cgv5Tht4ycAuDoLiNgrA1eHBBVsdLeu6xqQ2B"
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

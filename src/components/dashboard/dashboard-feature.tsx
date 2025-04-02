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
    "3Qc31NHntCPw9LzKG8d31zmcid5ZfhmXNA169HfHGchoemx8fKy4HXMeD4D4yRVdBfTPGogWPSGbFJVJZfBDbxLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r65BmUtS7WUnKKv4m2D6yWQNrGByuKWpVyqERAyfBZtrFPmhnsMLMLZg6jQrQrNNDMbz6gzVLJtG8p4emNXXCfd",
  "key1": "3W3SvdJJXvUDb85D5rr5v3ziGJ4wKGQt7fPRqkhbB1v9fzMrhbafqKZxcUuYshpHWQZFZwu1Nao8vSYQ3nqwpzhy",
  "key2": "8A2zn2bgReVJvwNEFEdd28jxfcEaEo6AWK8LVy4qbsFHnAYSGs3Qcejp4Qq1VDuUJZe4mayCJqpvJPuAYmbCfgc",
  "key3": "6HxuDc586S8Foa4TFcdy8pcJCXCegWDTkskPTopn7AbzDrW3EMvQo9JdUiEJBES99brMJEm34cZs3gnSKhcwu1M",
  "key4": "4d7D3PD3n3PNDJQqHwSbYLAqoEsyGTZZnQvvexBJjMAJHASjwaaSotpG1Dd2yPTBrdfDAphdq2UXMf8WnakGBsYv",
  "key5": "BE8jNugcA8rLNPZbAvGPSv3KEQRz2xKsUkqH5bNUnBVr52jL2wXWVoU6zDqrYwuqFrUHJ76i8EinFSnbY4dJ42k",
  "key6": "4BPRmJgbtS6KYBPnuXAYEuyHhqzPMzakh1rWVHb4FiwJvi695Pa5y5vd1QK1NAsos9CNX8KBbDmSJEx4yCeDvsWr",
  "key7": "4iKmvLFJ2tPgDAa5BfGfUpnrW8QvDzemWVRsJ2ZnYAfQXHFvwyfGSRYFQ1Yoan2vNUAiwPQ55zoJosDh5zEmMQC5",
  "key8": "2W4mQomj8Tzk58y3JZCCr8uKFFPvJUsjXS9nrwhWLcYRnWc2CY6234u7kTHwaZmfth2i7YZ5rirxaix4wmGAr2N1",
  "key9": "vpLvc9EKfcrDxyqmMagq1jDFQyYMNctrCbz5xqbY3MRMTqJVpiKvY9fYan6yKMPuU6eMVNvmemP8AKovasV6vE4",
  "key10": "8hRuKD1NYWMgiiogWhwyGzrQvzzezKM2NdwiRJybRnr5Wy5xKMCbZcA8PXebpr4xyb3QmLirhurbGqwWPrEdTvE",
  "key11": "63B2tT1QWVTMFeGxut9xRjHiiijvc3bW7iNCyvj5tj4pyBDaLj9LK7ahrrJ3pupLBA9EHtR7fHjTYnzkSShy4tzf",
  "key12": "6UjhBi2fLnuQKdjMNxaozZ6vvJkZPdjwb7frpzf7FDV3QxufUMTNkgtwuYn2chaknGgetc8CWfLvJCdNA5dLtzw",
  "key13": "45EFiWyh9Ny8GqRXRUvMdvAvwmFYBHBxctJGLHW9RDHbZvvE9Z8mPBXK5hSiUVWCRZattoveXFt4X6R6BKLNESDD",
  "key14": "4sX6BYMLKrtsciKpND83rsJ8aZQg63j2Z4KPwB93a8PXGsgsgpVuZJH6JMNiZSLsQ4ebX97KxtG718Pbm7VHBWn2",
  "key15": "2qqxzovkxW2TT1mvxqbmY486AQmfcL6cjJakC6wy9LGuYeMeNuDbSJCQsky7MM3nU3NiKMMVMqrPthPsAL448fzN",
  "key16": "4Z2awLVnqaq5qiaS2qZRd2aRZTE6z6kqNXq4zVkWzwzs5Rcp4ajrf4SrAsbrZ2p3VZrBdFqNZPApCF2r9n6WyVRN",
  "key17": "3UcRCrDLmbdrQLs5eVvxp6bGxjGzG2Hz6V6A8ddBWQoJHjRXRoTHNWbg8TiApHGhD8ZS7nvsD7SWXjSTBBcJKEPs",
  "key18": "5TVjHvKdqEaTcbTxjXMoggUxUSjhgDWrsgXj3azBPom1VkUHnyWQrNdNp1JBymXxjLHCdSM7LdgnHvhg5mir7dV1",
  "key19": "DPDp1nbQnbgHuJuayECAe8B84igMaZSfnzC9ejQrnEpprFdF8LfBw2nFoLf3VG7AF2BmS5Wrr7FuuTi5JavF49e",
  "key20": "5ufoN9sWmPJvARsq8xEsW6JhZh1GP2T3KsyosQ5Aq3USiuh9YbifKxeb8JaVgqXUMTwZkpcfrWqz8LUVARiRjsQC",
  "key21": "3STTSnyWfhS6pAsizxwMAtkZnb23hfm3Wn78YQAKsyZ3hQZ4SUY9KgsoHX4HUm1PvAHefXviyP6Z3TLjkjpegsNy",
  "key22": "5oy9WRTtuwjP98hPFV7Yu2kc7npjXiWDdZvFn54FNiVPpkWTndgHdZP3Ve2u31LdwS1uUjxiVt1VTUJa9itegbH",
  "key23": "JbCmWgMEAaLGo5grvBRMX97okiw7p9gqzYEWsJeta3RWn9WGFwC4rjgPsdGoEVNRTba2R8WFQMaotMQUprW2gSg",
  "key24": "4TvX4wWSvXVK1LhxtGvAh8bJe7kiMAmkTKPmi1gr1XfuWr29vKk2dDqDm1nVe77eLN5ZEHgcDzENFTx2szYZ9NZR",
  "key25": "5ugRrfmhiEGJfztR8qZLTW1Tv6m1F3N1362mTHVLBuMd1EmYbCmZKtsFCVoofe7KyKVjt4iW1wh8TCS4hhqFkrNL",
  "key26": "3UWqXLQzXLYQMABL1fhkXHVALoR6XXpJLLT5LrpsZfehW1NJTgfJVXghWhFMff48DoPWidYEFiYHqjM6nx6wHiyD",
  "key27": "2RTZyz8WQGQB7uejiKfB6D4WhHgALhLJrmgexR7irBBDHWF5iYvcvSfxTvCjoSsjgc4fheKm6fGkwatk8wPiPF1v",
  "key28": "21eVhyBCjP1du4BvAbXjBNczaZzfMBPkW8yD9XfdEzgMqNNs58Ucy8JEKPrTxqr8JJr6DxY9miouVgA9aQXyJXHm",
  "key29": "2LdXvGfXmaXdtxhtuxtyFuEtfLoZK8rHq9TVZtgkJw8Y6UXgGxMtF8C7V7UTev9k8hK85tJziDZbjTNwXMi36HcB",
  "key30": "5HPMofVQNhNGWQzjtxPeC5SE5VeiiRTaRe9DqBBPg8yyKbzb7JwQ5Qu4YTMa72D4qUZET6dUdgEuRGvGc39PM3Gk",
  "key31": "vy6bTT24RuEFVt8L9FDv5aaYGjNUxHvSocwbCto5BYPTXj3hHmYQUoa9ezbb8FibcYMQAAyZnu3V9jqNe9rYw2i",
  "key32": "2FWdaKS6R7SVRem4MxFEY4MPRUbf9Tmaa45ESUE5S9t3zybdT8gSHB1wkpTuvAATcWeUBCtcigHv3Y2H89SA5a3t",
  "key33": "5qqAqozBi96y8tJuN7Tco2T7V4GzvDtGQdMjMw9xrZxzmCopngWN1cJY17H2nwbhSXz6j5PJcRVMCzt27nC7xBLH",
  "key34": "2ETUrkLh8NsNk5Vxk9tUitNcWLXQQ7Xtcn9gAFetVwq1F3c7r3RN4CK91GxQnmq2Djx5V8VKndpNiP4RjWcfHzrW",
  "key35": "4N3UfRejLQE2vmgxWTHkMRkp5L4wm2nHjPswP6QoyknZGJZRzsSyoJxrPEsswLGmWdqYF4hFMVyzWpeMqfNg27Pf",
  "key36": "28B7PuS3287ijXDEH9cKbHG2KdKBitwQkKRq8aRd5E3ZNN4oun8ADFVyjPqvcNKJkCqWAhUbaryJo13oKQVJpYD2"
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

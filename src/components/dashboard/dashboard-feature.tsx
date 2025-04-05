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
    "5WF412CdNZUSJBJskQiUdTvNtuW4pqYAPRW5dAdBBjQkCzjaxq9ZioKtrjTVpQuSvJmErPBpXLqaUnnWFfSowyuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SzdcQVXXq2bbq7F8AGbKC6kJ5mVNgv218ZLxgueTxHA6t7o12Hys77ikNuxKdaUi82QXSc2pB3umJyumw8yXg8C",
  "key1": "G6dgKGxTRTRfrcZbavNzxP442HYdh9dBFvWXVsCufBqneVr46JSn2HY9Jg9QWFdDecFZ4QRYSH7BpQMnWeGbuRz",
  "key2": "waemGc29SN64N5Bye7XbChegzzHHwfWo7x7USWc6NixJuEyoMRhbSNn9yucV1uKhM3jRqaJE5Lsb94JWspCbMp2",
  "key3": "3ipZNwQpYMC8uXc6RHCKkwBiUzKsos4wGQpRHv2ENvAVX1p3SByzDKpcQzSK7aB4f8fCqpEYfoicqHrYVF8vNkgf",
  "key4": "3912V472M1F7wtF49kzS888yk7agwQmVk4L7jMxZxZKq5MZrhzuZigjt6CLueevhW1MPE5DtqmyXwa6SRRzoWVa8",
  "key5": "2qK5UuJFtbYQAeEN1jRUdHq4V2ro36yvTRP5LdmWA3YYmef84ZrKZDeYFdqH4isRRH3WapvzVtoHNAR5AheaPANe",
  "key6": "29yLC4N1PHMmHC8qzQajZ1MJEDdE8iuBzExvLqRXCct37TyFsiGborvTFQkjM7YEv4Xb4dsdUBB6q5S5tmtqiCsE",
  "key7": "4UwBahsZ9B6BHmhugL8ZviiXixNxiHsTcXkFtMsQFPtrTASMMsxvDqCREq6hUm7GktyzST4GQNX9LcJSjnGo5PTe",
  "key8": "MrvHQQUXLZNzQbeKVAg2NSbEXZDmvuGHg1fyssGM2wgXErfTXkL1H7XA4dBRGPiKFudAA4PDuzKSdx4n53vtmy6",
  "key9": "5krc7jVRDgkregLDrVaNqiegTmTFNfuD7eV5m6cRtG8Ug5zws2BRungS3JwC1L1WPseafrtuW9ahKDNjL7yGjfao",
  "key10": "5jNcAQQWHjiB2midt272sHGZyQk49o1qgby1tFEC2PAXasUhuW5AuwtJimMMQnSAky6VNqBZ2EeESjdiYDenC1SF",
  "key11": "23LqHSQqBSKj7Tro2NNJa92oAzLGYQNpdHiij3ekZyYKZM5EstcXUtnA5E4XvkUioEa54MpBknjR9n8qgSizfQGX",
  "key12": "5UFa5QVGSnp5na4WPomPbjX6PvFbDiz9zUoVFg7x9eFHGdzokjCcjaAzhTA7PDjiBe99KT3g4bwfpJX9Zi1DkGUY",
  "key13": "5C2C727276Jf6ZLvqpRe49Uq6yQUyzudmJqrq2QXd59vfVvTQgtpwS6zVfJ9s1upacv3iYJVWJMf5L94UYLPgb1g",
  "key14": "2Nt7KJGM1K5UvvEsk3WN3ZHXkRNmtVdxHUn5hMomW4KFEkVbNXeQBVieBsUGwH44VjgTB45bhMGg2EhvwBrchgxD",
  "key15": "4BL6LM4YmrCHkphkNjD8ZwHAu4CgPSfkj2TnS1ZX4znvyxRhY6iUSVeU9BekyRHfjTELxrx2Rj24fdp5rUFng6Ys",
  "key16": "5DxiTMwX9Q7s4a3Th3ersySHkqjyPokh9fNorRReSN6GnQUEErARTQMjnFJEYCi6Kb27Z3fwNAwaqGpY3HC4hfTm",
  "key17": "2VKQP8eCkuMqFvYnGdjNbxj8YB34RgKWNqGUib4TR79Z4vyqC9T5JySnjqbYrz2hQZpdpSxLndB6yyx9RvpgybEZ",
  "key18": "6fH2KtnF8a93dATAubQeos8XPmD4RobQJaALT2Y4VVtJhnqaxmff4eQtRFcQ2myYxuAVsy6DaQHZmbvayNZTnEe",
  "key19": "sYhpr63cRu2wbHdFhqnZfP5hfzcpnEXbYxkFrK2srrvNXz61AfYZ2HNHKQNoJ4GFrFLwiBJZ5QZqeV7aJSofZia",
  "key20": "4nWVS8iV6MdDcHQA12JvhDW8PYccvoG9y4AdotWkmXfzWxrQbBu2aQKD7QAdMFpGy1bzB6b7Uko1xgEVrot315tH",
  "key21": "2wou7BM94SQWfQBcCr3dX27KEviGsBJi3fZ3auvZ1t29aGaBFtDdFGHFrGYqxAEsnSFgBYXLjJBWGMxrz6SdP3ua",
  "key22": "pjCRtPt5fqm8wHinVdGmCsViY5z2GowshhD593axMfh2wxg23M18QNcjWeRa78yabqMhfrKPi2HPvDj5VAvUAQ9",
  "key23": "mKRjEfv4SKgD813Cq66vyxTr66ULPoqk6Aeunkv1W7jetJJn3hMFwyuoXUZzpoNxSeKZVFiMtRnWo6yJcLk1Azy",
  "key24": "3PuqcrfsCw4gmPHixSqU7JsAm2HxaZHkznuQ4c8vW2brdMbeFjMbUxy3UG4aSAULvQ59LJevce6yDYHY1hSNGJJQ",
  "key25": "4XHtBZfKjt37b5JPYz9sDV9UN5nAPyEcvL1GSjs78AWvDocdHxN1FN5rq4cfmVVSHnGkMKXHRhHUKEENcpSWS1LV",
  "key26": "3iUb4Mx7eCsfXjAu3Ecry7HxLDRR6PnJyoQttzBGXvBaWGnxauWSoaaqwQjQ8DsxFzGvtFH3XyJcHHhXo29J2uvC",
  "key27": "3X88KC5cH3rDNuuUwuevqUDuVD5uJFAj2CddSuPvJnzF4g2vT6PhAZ4DGhNfCgfaJvTg5mj4YCAHZGpeNYW7UZWp",
  "key28": "u7v3FGoEQMLKh2nCKQDMBKo6gBQmioRY4HVuhu2Ja3mNY2Yt1aUQ4Y2gYsVvcMzDhSTaiUHdfdATuciwPwebuUZ",
  "key29": "4h8t32wAUXUTjgnEVawUtMvCQ4oEeqyxS7bVEDyVwpvLVFyVtcQf75DZU1DNzLZraz3RkZWFw2BQXRxh1Hx1wDgS",
  "key30": "3eDQEvHeCTEcwpStyk4TLAvbcMihxGhTs4GWAJ1vtujAeNkn7xwud9ANjKkLMPeVsVB9Gwdrogx72xLw48V3Vo1d",
  "key31": "CuaRukWuekZnPeHknsy8aJEQJfLnwaEK7m53e9sdn3tjGqvC3ATm9KggsZNVGXt3cAVzQYqVF4dXnftxXT9UtTr",
  "key32": "5AzNN27eB5FNYREMJNFP2XoLdFS9vCWww6RmcMQCANVJWMLdAtcQDwXk7NK5gVGscxEEzmtpBTuricrsqQSSpWAZ",
  "key33": "4mW3zpDkuBbx73BVFKmwMe9VWYiNbBxyD7JVNyczqx5uhYJoZ2HceMggYTKKqRmzJUAsSqnUx5acHkAx9bK7cKjt",
  "key34": "xNXTUfznHFdKyBRYvrJeVab3jzHdYdivB6FPUhNwBWirRY1Fv87TtUrU2FRYnoHi8efgJU6JgpEqWLS9hxquLcf",
  "key35": "5j4zkek4CJARMddKfZzoTe9vcnaNEctUNppYtF6Y3L3FgFFf3CCe2AJ3po2nP4EPFMhQMR65XoeKkFu39fJHQeK5",
  "key36": "2v2rRF3pcZF5nXdz4qUPnSYAdmAvq9VaxNC8pyoYS9rRxL4cHnJNMeVJRni7wsc9MshH9vtjuiybXayHUWjbegYE",
  "key37": "64aRxkQPj6XBG3D63UQqtyUWXfYfAvR1keuAgWybK1Zs2rUdvp88UaMCSexVm64T2aPorXLREB1GyV2HhczSzgLS",
  "key38": "5QupXz22QyiLdGrZFmtDWexmmTWJsynZDr5ktUusKRQVAuNmUi8eg4EhhCXfm7i77gcJcAEPY3E5kBnzMAcmqqJ4",
  "key39": "5VnfsGYnUFuqQiKJV3AnbDbbn4cH3oK6TPg5iWrU7suEfRuzjA2hbjPXgkoWZZAjeYLn2EF9UgfRb1vXDKdj7kQS",
  "key40": "8m5fViMg5r6CxmY2g1gnsqtCesuN7fbKJYhq6uAu8qcDejYPUuWUKhW6NTpWb6XBM4Lp3RtbMYXsuQaSxB1qPSK",
  "key41": "2E83PrskuedgS55AySbGW7CTWmTVq2YEZpnDjJF3rbZRcsMLpRsQ1aN1QUbqzpAMZKSvmSA9PQWtuauYfrDpPXSG",
  "key42": "48V4y6zF45LSr8QpvFeBEcui4CGwZrJu2ZGRovEcfXM7ZFVvm7mSNohSWkky1K7JMukTBmhybqn26baJRZAhG7D9",
  "key43": "mujP6CR7cg84vrEqA2QfLReH1xWp2E7V8qjWYeFSQgCAcnj1gSjbsjLs7E1ZT2eMppkLKtdG9aftYnZ6zsa85xv",
  "key44": "2apWr5qSqjWkotoR41mn8Tzd5MW7mRJZ1yzopPyDbqy9BnoeukttALAFwyweDat1DnP5PAMB21ePhw7mWy7iEVRq",
  "key45": "6tW6dajKT6mLKHB5BD1Mp3VhE6vjvPFJGqtAYpZnZEKmqtbJnatMVr2kdStuYHsBHUoYSwidrqiS3mcu476z6WZ",
  "key46": "5ikKEb2zWdeMma7re7ntZ1PYYr6FUQ2TrLPBRHpVzYAyAb2jqjUpNr2ynnPv3a5QvXerRy7ivJydvSVKxSYuhcd3"
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

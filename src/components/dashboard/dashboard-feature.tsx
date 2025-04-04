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
    "5CRZsSjAPnmeXR5uvJJzeoPMJVtdJ8m88nr9q3uYS9h9Fpaa8QGB8MHAW91B32RY4TZcPwFfTT8KnGfMemwo7bXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22ioCfcpsW2TezMPNYMHkRqwRjfP7LRjZEzHxSF6xpzbuigZTLsjS2fw5TfSDZHTBaPPiiKyLJvHGoFLf5kz3U6v",
  "key1": "brWCQJix7Pz1wep6oyLEmNREKFKSZqFH6GvK3dDCriGQpPjQYfGPjtvRLx5y4JXDbYyGGtHLwVZsk9Frda912wQ",
  "key2": "guE7Ctr7QXzZ4qnEfG2WAmz4k4GvFSJS5W1PPxDHR6CkBRL4MzyCam1cP6fSzMqFgHK5ecMXsxAywX7BQQWqo1M",
  "key3": "4Cf9DSz1kRBWemxVv271CFV5FzDmgS8y6FZ3amifQnyuGHGyFNdahvAYdbK5RxtbDqKF82MRSGDByQK3FgBQAvaB",
  "key4": "2wf7Yy2TW75aNZExx8RdyPNqPNFCCTp3ZJqKbWY3W6LFKLij7GXSQjPLvLoHyYtUfHEDBp97CKTbsK73YGchkb94",
  "key5": "3HYK1irnPJUqwoHX6YcyEj9QMWAwx6eUSnBYQY1umKwSfoqND5UDuRLio9VzWppjfGEzBUZpduqwd2TobyHbhYzP",
  "key6": "3DJ6K5fTJsSrkca1yWzVkvuVVKmL3Akhg7drEjHqyjAU5sTBqZYbFnyUrYgSkPiQQbApBk8T5sXvEZckJHHKXQsc",
  "key7": "5qFmD74bS5bzWpKr1CcuE4FMsoQnwXHK4Jr5zAW3A3cksRMiPTgESS8B2ZneMRbxDz2shTrES4j4hr1CRXjneWpy",
  "key8": "3p7CoDqRcL96esZYW1V5QBaDGHgB26AXkYdC3ZEjfxBZXAmUi2zWXqSG6jLFPDRk44818k1B2i74Jx2qV55pmmSz",
  "key9": "4Ntqk3PCBaVrCXDVpUxdHQpGLFQWttyYyWoR5r84GtTmJ4iy8KU5gaMkgsNarU84zVfWJcRrsdYUcF2bxbt86RKn",
  "key10": "35zLo7r5ydwMRVy6t2tFkxmuHZ6GdFLHeEG1dofn67fLW6xkBryN587RcokV6zUQev2pgF9LBsMfPRGrNNynTJuD",
  "key11": "fiYCZmbn5NN9agWKPs6xFM9wM9x1pzP1s9GYorP49LeVdzPNjSuMm6aGYTwyhefaqHoywHc4uUDGYRe28Yznhax",
  "key12": "5vdqCPsRydJt7aEN5BFNDnNHWDtkqJGtKtEupq4ymbtqTMJRqkJaaaDK8RDfGZfJp5BXs8McZRjKAGb2xybXo2cn",
  "key13": "474dunVForCkf8TZBANypA6gTguM9GpsAobZ8vbE5hcanNMbHMfuNhNGbJacfjEyCnJswjExF1SzpGPWbkcRx6Nv",
  "key14": "3W4vSLWavMEakpXuyaJZ2hY81We5WmqV6JwGPFMvbmAjnhGhzFxTcPgRarjUcLaK8NWrJrsmRgMLKxsnYroZXtT",
  "key15": "573SQ8BLPGiN5zJbLiermYqcYbTmG2XPYdTPjDR6kX3BmacS8RybP6iSxU7NAp223g65AxtCE1yfQuxwiyAh27xj",
  "key16": "3ibMFgZeDyZrwUCD4EyXs63xWpuEQPV2BRZ7F171vMpcrEZ827wkStbs541MLacRzAnzjWqJgjo2VUABAsiHUWAS",
  "key17": "4nefgCCoQZvKX763G6tVY2XC7DJrdkohYVF5YNsge3j5MKKtkuWptAfX82pCFG6BdWd3Zff9Kj6zZhwZAqNX5SHn",
  "key18": "57SHr8AZ5oYrFnHv3N1HXkBAab74voHMgejYueeoGfuBD4TJTiCNHTH1Htn5hD1pTVWqqCT86EnAUbSVujswkFHy",
  "key19": "5xQYkJEPhG5xw6enkxBJUJ96EL5u64RPaCh6UBLGdRQGymmu22Y3eTLUp9MLGpAKZ8X3nHUSG2FkM9QQnyDT28qT",
  "key20": "4QdE38xBmj9aJRfWzuZitKWibvHBKnErESnmXhREBne1LHv1UsQiQw2mqmgbz1zUaepKPnQghvcpBCAkL2PudK4G",
  "key21": "NSkdF3csFn4HKPuXjwnsWJGBkRN1UBvQ94E4sadaVgv31yZndP5ZeUew3vMoEAiBD2ybc1WeCh9n3hFABX6u1sg",
  "key22": "2EscPienKtEzqzkA9XzxnJJkBQq2VQ4iKH77xKk7esrehZSbphw2T1Cy5FZyLZTTFwufhThx8tR7ySwoWBFAwi52",
  "key23": "2wEXPb3Muzp3UDmBjDvPgcDekpBZ4o31zKEy4Dxf9tQMTaQwAvRA6xYdtcj9CaeodEWrPBwXq5fGwZtsyr5fwsi3",
  "key24": "LtVQLmAvciHTkdnc8mm33qn8N5akSNhUT4Q5HXRynm1ocpyvHuv9rdBSNmfpfBtGEZ4nrEssw7J6www8uJKV8Br",
  "key25": "4pJGvGtgECK3zsaGZQdzsfE5MRFF22ndNKtzXuAnCFJG12nF8mAvRw9pu3o27hsoAVVZmp79ParMs75k8jKh2G8p",
  "key26": "3Cq6Mdd7jAoHiSegLKYva2WdZthzHF1EjJk9Bw126Z6Mf4wqEocLG47vin4FaHvmvsZeSbSwQRwKcBFS33ikmg6r",
  "key27": "4KWx6Cz7heRQQFeGULgFyB93E9BhX8qgeB73y2Mq9XoaZ5ycfWTtRkZ6HrXTbsSYXLEjdUs4eUksxcJD3onf94ue",
  "key28": "28ELjB6L6BchSy7ZnwhPmKGc2rSipidcWkMapvi7wHpcMGzMjK18j82Nke6c9B3KRv9F86TQnWE2W1EBzYSj7ipU",
  "key29": "3NmDt7vqKTy61RGZU2o7bjaU3toUNTQ9KtJ9ePgBzKRkRcy79TH6b4tM5BWzZ35PzibM8DfhNGRd4mS7mehSJ6m5",
  "key30": "3Zh6atH6NH8D3hrBFxDi3jiM6WckGmWCoUxjKfM1BiL1fk1o8V9va2QmGzPoKNLaYLaxu8jddFj73cew61LTrTni",
  "key31": "5QWq54p3PkrL5i7ozDAAWrdHKFh2BTWa8LdBjvSh1FmPGtnQVRKp389G64h63dE9MqAGCGpLB9FmBg87BxEoTaWn",
  "key32": "3nQPkdZAD9jJqcrwrBH7UZHcQ2N2Fr2wikqkbx9qy2YRWzoY6SxJVpcdaMYZZAyUnzrKRAEKGxJimwi5dGgjkujo",
  "key33": "2DZfotL1aUZsD1LaU71VbUQCRLYTAQ9Z2jGEkUQiq32Q3iS7yZAzNG2GDYSatzdT2fFr69tde7oeeKtPoonRTZnp",
  "key34": "zDaGCHomKKpocYop74WSkwesEYZbbTkmu68R2tXw3tNwbbcYrTxaDHBqZtR4yKZuhntaFQkzmbCfrtf1rgv4nRK",
  "key35": "4hPdARzLGqqGZ1iSjLaLhGJFAeg8EQyVf5nCPn81DcfxkZz4kNPZbCuUL9ousoWX8Cf5JgW28MuTJhdkNmLJLqjk",
  "key36": "2GGW8LcANDZFmm4x99nuytpCCoXMJ8DnosNph9uSmDRxTaCZTK3LkP8wHHq2bgu5afAniuFAVnEpdC1gorFBf1Zd",
  "key37": "4U1q5whJ7noVdEpgzzHMQuiYWnhrV5y7HMCDw6ArPNc14rUSRNejdxaZ2ovhu1468Bv7sSbj4wj5GhHvppLo8DR1",
  "key38": "2UwScPY8rpYweDEqxEbhZciheAx7LrhxRDKMxWADuDYWNgAA1BsVhUFhemudbHVBjnEdwbQsWNye78FP38MhBacC",
  "key39": "2xc77RXVjS6dFUWbEXrJXYk6WZoxYqSgipWj686yr2JF9LQ1RfUHb5W6ScJuERfZmCSga4zCSubD35yHe8zqxU8a",
  "key40": "2Be8knDJRQ4oLvuuVGVACHwWMbv4CiASAthuAmGc58gfwyiNFEhmAfrVZWazPEcfmtGGDUgkrZyHipGaqDWNXLUw",
  "key41": "376JG9pRevT5kKjPKGGUqxTp7Y6ME2egP2mWqRXB2DUg8kirDxKcFmS3SPJu9gRyQNZVFPhZMc93gyyENSHCJsNG",
  "key42": "3JdJ5bMz2F6zPmSwKk9iBPHFLCWCZp9RDp4AneCS4VbNFJp5Nkx4uY8pupYN685yZpfyunRXCe8cZkQnwxEz9LeB",
  "key43": "3szWMTjNqxqgPVFep2Dm1wiegejsDNPdupU8jMwHEP3fhKymrhj6g269zPw7iziMq2txYi88XH1p3k1oNw1qDefv",
  "key44": "2ZQwu3d3sXgZhTMiBoa3fiVTp7HVcB76jxnpcWGTsWMQ2tvip9TLroAYo5V4c5KRfgjPX7ZhigyaYghFNkTc2Wbq"
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

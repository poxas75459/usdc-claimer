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
    "5XRFpEw9CTYpdoo67GEreAv1x78Xeipn4GR9STTJehPC7JAwM2CVgpGYHHuZvVZDKxEJBa2FtkYG4a1RBmu5fa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ejsRS41PUF8BbVKwC7WtPqiSWgFrUhUwiF96PZYzN1c7b35yNZyHqs9rmdDHqEFF8PPHsRizzxe9HcLRGVKGop",
  "key1": "emW5aqaxtoKaCL8cxx25MECbcaKsq194HM7CuYLQbnFc8A19q9gX3dBaZKpjy2YLPX2GHRpLcyz7PUeAsiNJiWX",
  "key2": "59YXdpXJcB5nevWDw6bL1EQZQqqJ843xmKJMNUy8GMF6rJMcLUZMra5PzAF72pW6Vg4fBfoSv6i9zjbkV4UpXLfo",
  "key3": "4f1yjecFFfQTWmQN1vhH9tEpnZANg9fjoRMzacqUFxgrk9xou8JAKUQrPUkKgHgXi5yoKbszhE1EwrrJ4nzpXC8q",
  "key4": "4H2VDUFcvoUZ5UU2yht8ebbTgPYMwTZhnyWAgKNA5WsYsaXi7Qotz7w17uEWpfsJxUUvUjacv8vZYDCcCufiMMnV",
  "key5": "5X4ouvanoS3MCzmRvM8pbSBxUnzfuqduc9xsLnDiAhkvbzWZzu1y7jW9CsgwpiRbMYe2p27kGY7oPoycACJSV3Gu",
  "key6": "2AiQvf4tDzzmZ3YQvNPNLgfigr2Ca5JXdZydqEWtsGgBBuUwWerdTDJ87p7Si4v91edtnssYBG8eF6xdxZYbywpm",
  "key7": "5FCJiCkWrH1hKxHmiuZb8TRqzPNndYegErnwJvSfSGRebV9kuB7oydo38Uh8azyrsK47RLQyyDzAs4oP48mkyLAA",
  "key8": "9FKEUv1TBVktVQxtwbNAwnVxZsaJJY1wtijrjk3efefMqtcgjdcXppU2w9Q4vJbvCpn2sWpBkL5BmdSCAJ92M6v",
  "key9": "ERcbSwtwwf75pFEbahTpaYbAjM2Ei2nZn9NfaEjcVNGcxhyigjVTjVZtXohDGhsghRjoVrJAkw7yPZSne4VunBm",
  "key10": "2bCXzi6cvqzvo5uTqAGSvbx4YE7c6NVxkiFrNa1LAcfKTyzU9GiyMLwotCATudYzpVcGR5JZJGBscmuAHWHV3xkB",
  "key11": "26PBSBnNSUqreARSaqtpVH4TkKMUMNkm8h6uu49WZyqJxXB6LDuEPYqtg1uhQcbJxiPTtmDRRjKGcAW7jbYNAMLi",
  "key12": "5r9GEbqNvSMBp7o7VU17s1UVmy1LPba9yaHFXYzVS9wCa1JqG4Fb3Vg7nvsNUY4WrVfdH9RRSw3QCVBScsEYLEZ2",
  "key13": "5eFbdF72ry8Pns2QpBpoePn1N8CWJUksANLLrjnXvHoKSQudDNcSnnqyoAgAjk7ypULFK3CbrxLDtXr6aPQKsxJs",
  "key14": "42TytLnfV59mfRiDpK1UWmq5hwUVg9DruDhhxCDbGzJj5FnqGVQNhFzPXSoss4mBi19tzkW7Diz5J9ZqwM7wacD4",
  "key15": "uaBKBvN19WQKf3aCydRCBHwoRVLUbnhNi121152PtPgsHcjKY9UgNCCBPfAa65DL431qQ622qwZb58PsiDWeS2L",
  "key16": "2NZRDMYXxdjksSLo62nKhcEdh6V1Ft15rFUhzwXnTzKJWi4rAuDgdRG3SrK6K1Y4drAAWtZBApHUmZm4ZYVs6m3s",
  "key17": "35PJwYNaFCJnVRJoi1iXnqxYYn91Jsd4WuknHb2XP9LRXE7ThQy95QeJaUXLuWha3Fmf3XVuoeC8ess9uyqo2o7i",
  "key18": "3oVkM65Prw2PSk6EFXKhoFZ5gPPsUnRoEkgTNkQzTAtukG2QeBm8tBXej4QAzCvyNfu9HoAjNxKY1UKWaBKKTeUN",
  "key19": "6zcDRh7eRWsaXdqu5UjyT7phM7Hxtz8A5aWFr9cevpmXtgVWVCq9sH9mdj9xeZhbBS6b8hdsJ5hD3hznHNJLPcK",
  "key20": "5jTHRoMzdbocLDqo7cYHas2YtcfvHiizFoRQbXVbcNh9jBbboceLKYmNvL6ZLcSkkN2tjtYwSX7NZddxMYhtrKwH",
  "key21": "3zWPpPLZyzcens5iFEKPzp7U8UF562BauK3S3D7Rz4kAUcRmSrqUpnPwv5vqMzQWwJckiemKcSgyh51D2HCXA8zk",
  "key22": "4aVtJ1R2qtTqd3QB8xmsWRmQwBJvT1g85pX9veoLTfQPhBdVME4wfWqnQrMfx6eErWFKvqgQKianzjifTZa4kNSS",
  "key23": "2mAQYbhX2BbPxmbvY2waXY59RgH2jP7ViXcEDNYQZqyk4rFTzFWwYWU1hseYHnjfse17xXLNhxAtC2o6AQsRH8Ji",
  "key24": "2neoihGBAyvn72Urs5ttnnCmX7EvUamx4Lw1gv2fzSnjoHL2c6e6wsV9VhhqVjgGqXjeirRJFqkvHe9JMJt2Fs8N",
  "key25": "5DT8KZbue7LEugqkgjAs8qWuvt3QYkiGv1ZeZV5Qj6NtDeoHHuhiG8p9J5uRXS2Yi4DCY77wvZsSYKA5RaRHZiHm",
  "key26": "35juPPW5VaS1d3zJRLat7tSNpuzE9KefvodDx66VA3KdDssUTeiyWM96uMv8rVBBgeeA2p5yZhhHXNATArJpLiFm",
  "key27": "2ivFRg5F952qcuGgfdS3cAJUhK3NZAfEe6YZi1HYwZMjMgCMs8K2quYyY38CQXSptuYtgcmycZmkccXAwnJY34g5",
  "key28": "F4sDze4XdoLstsUBxMU4iCDjoqMz3kTyovsNgVVycTNfJxs7MLvhGMhLLkTTFKRSeAnHnovbdq9X2PcUsQQjH21",
  "key29": "4tAvAfbuJtukKVcDgeJNfsMedetMnGpRFr3j8134rQZ8CVuVP2njpgw43gbD9Lf6pvDdWmoFmhWzi1tWgFxfsac",
  "key30": "5xZo4gVd4FKR8PAsvAvtpZmj4S4iP2UTVLzjJuwHQ6m5rsrg2VkozfxqaRZy6bHcDxoeF7xgTqcU4YfQFNTtS6Ae",
  "key31": "4dxougKX32ydaDjfAbha8WU2bVS7agGTS19MjNE7gVWXuib5SuZzWAy7D9yiHjWBD8Nrxcq5Y7XuZVnSuGyaGufX",
  "key32": "4HoJWe1K8usnX79E7EA2FqcjBTmMdLBX6io5GMhBBTP15Yy1zzFgKhtFATSfSTts5yPqM3B6c1Z6hA3uxMUudmg8",
  "key33": "2cE4xqGF7SJTPUWzMS4KBLwavTrHhSQxx99DFqW8EHi5NXKR8Kk8sgGdHZ5kdVwt1td4MtyiMn5MkMncdnnzSETs",
  "key34": "2MDkGHzLhz5qjUTwgRtapcSDRfTcvmBCVKvvXdrtdp7NEANkjJ49vJ8mL4fLqtCraexYENE5xHPLqhss1LvyJ6SQ",
  "key35": "58Ufm8EA9V9p4GNdTd6c5E5Kr3vFEnnGubq2fza588EQVoocorUTq4CigG4iYriMud2Hf4XmEe9f8g56cuHkpiXg"
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

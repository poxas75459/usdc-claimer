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
    "5ZMMt6jZs3eH42CRSEJQ6CSWae2kzVGjMtW9PbFHF663WabQJEaaS8cySpTfGZF2UCLfzFRcodNH736TzTV2EwEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XCb7qyWYDef6FthNXW8hbpVN6b86XVRpP3rsuRD82n7LA7uGvHofTUjNH7ay8YzuFbWFgxuyJgZkQdBxVcyq2th",
  "key1": "66MDYcPcJ5EDCMuP3TKodjrm6tQWw6LT9sFcYJCBNiTijDcH9ShJf88MUuyA5dMLp1bnjKNNo9Fba5vFue1p2CXW",
  "key2": "3BCLkqxaXRWoA1ZUzGUNRUeF5SAchnLZCrr9Gcgi6gZtZD2BoenJRUebCt2EV6sd7gdrm9jY4jge4vAAMBZafD5m",
  "key3": "3WHnfXgkfXc1oghmkHWVgTowXFtGMXvV42abNv4Gi59a2PFNrhqFD6TH9TG2seJwuBXddX5ThG3CxgcHp2mCgVH",
  "key4": "3QpLoxDnnBXMoareDhEP6PuaN1GMKbXHGTU8a8sFuUkD4CTdNvyNGHBZr8nfeEjdQsRFhTWZGJAR9H92F8eBgXVK",
  "key5": "2uPZSRyRxDM7eAmq8mPwCAT4z5MuZeFJz2ZpxrMHDak7iAftByeyAEEbgBHx933rBRWDUUKFEAxPtp5A596JeVBu",
  "key6": "QG4jAjezWG56sfLKArpyavzgmXM4MytvCkturgreoGCkJVa9ve65hVgqdH6ArP41aNCC6NveofazMycST1vzZZP",
  "key7": "47FDbvQDYTK2EUhfGKk6KBDDjt2jcNF4yPb4iobVa3Tnz1rDc6vVALdqe4bJ3AhzHi6FYsPA8dYd2YHqST68Da5T",
  "key8": "3CK6iM6JntQuhHTxiquhgRJ7AxZLdqpKEbaoQ47GZF5c3jB3C17JChDQDm636tG2uWcRFXXG5Snc5VKFxdXCAm2t",
  "key9": "324B44wcG36VEwAKfuQ7ZnBFDaL3FZx28SSJYGakotVxSRGkF32v2qT3c1r7QMnrzzhcxBaXVCWNoqdZPDPhvWJc",
  "key10": "2AsmW1L5dSHQ9FaMQ8iyqWVvVJKDEkdGQzhX4XwwRT8hefLzVq9eLhLiGqQBDHHBoFskyyos34QC5ziurKohg9uh",
  "key11": "3HZFnznQ1k8sWrFyQV6zMqh5x4NbWH4yaHUgzpvwiefJRdpZ1XCpvS29tT7SAD77GssbQUHHos7injLZbrbcj93J",
  "key12": "pQScJcWsZcauRwv6LuU4Zw8e5WcSNEFmpjWgqGxQxdRhwzy7yB1sd7kaf28MSVoyA42bGcafJAf3jVpoFYh9VGk",
  "key13": "4Wnv2u5NCbtpbSSHEVCb1xjqgzicMLevbaHduJz3bu5F1BsP6Y6CY7Ja55PyToLahL8757uFfg3Mn8rwZDeAbijK",
  "key14": "49fLB2bnZU2sFgPmumBDP8sTCT81Asm9McBkZfVazCXq2Cj2MJqEGGEkpKqCsQKEiuLXASoWmSPf1LByR62RfgnQ",
  "key15": "46AyST12bCwSTbZ69iZQQzXKZJSTyyk5uyCfYseFN6zfxTvArSz7buE8eAXdXyxzmcSfqZjns4PgfYSfCrD7hoVH",
  "key16": "5yMDLH3762xR6WzYRKvEnx7uJWjVZLLwqFVwEZbNDuB56ib1974MCVGVxrKQCRF5eL7bQaZnoByvFhvxmqaCF7zq",
  "key17": "471yfTpGEGpCCp28r78fAHXwNjB6Vg4pGx8kLeQuCFfsce6zzB98vd2HrtC7HmYJ4dYzHwNMTqQ3G9iwJj5w1E61",
  "key18": "28CuHt5BkGuFiGMfpzjt7rCBzRhHpbxtNzoRBSYwrSs1ALQ9GdNFxbCazQ4EPYN19e3hEcfv9p7iE1KvpVyph4Vk",
  "key19": "2aEkdjTVN2Ufpq7hKvCJanLXZDnsPwxZSLAoouohVdVPaPoEGPjYUgVK2Yt99Q4Ajg6DCn2yKqVjfXdGvPCN6bXQ",
  "key20": "5ZazEGTsacF58C5iyGPisk78HgUZ244pqFTUN4d3uNSKaCmMW873jaqMLoytnK7K3o37PyoPk9KFamfJXhqhdBqc",
  "key21": "2RP5LXdUaVH76izEnbbP2Zfyp859DmrcmRGGNcB2RgoMn8pCyy8jYqLGDRAhKBYotFH3vsn5w7CspNuTWHXXu71T",
  "key22": "4Tx7rP2y8wQLKhbMgXUeT7ZG4jALsKvT1MRCyeCx7ePSA69kANXG6HQhuh8NA2B92WFZmKwxFMaM9LYjNenST691",
  "key23": "5Q3fmQTWRMCbSpKVBbyKxznP6e1mQjcyPDk8yt7cLPFk2TmrQkDDY3goSSzStVt4PLFCbSVcbbS1VJCLxQgBpCbL",
  "key24": "5TmHxbCjRu7DPzSKwsPiwj3b5P2h6QFyVaCq8EBJJdZkj9qr1u4Bes8gQx7M6C2GacM4JY9mHx3rWEUyk435dSFV",
  "key25": "4mso6wjuTJPYpC3Rw8Ysu3BABrn3md6zWL5Kx1tn6VVv1iAtKK4bpfwAosvbCm5ZukYhJPtU1RNpeb37vqHzyNwz",
  "key26": "572PzsXjPScUKsGJuJ5FxwDZ5iw5N5UGf8YCbh4vDpMKsaS9vBHaZ1Wmgd7BvaBwX2wTvMhZJbrbGPyFZB8E9KYb",
  "key27": "m9DDGouHpddCXgXdJket2ZvGSfnyVk7hz7zxze3Dg8q4ena9PmfuaACp2wq9hFJ1AcxA8uksXpJYKMBDxA1t8pJ",
  "key28": "hCpn5jAtJVCxpSDUHy2gDhWFdzh6TgEfcKwDArKJCucqi14uwXUod6jc1Zo4WiybU6XgqFPVenkqTbdRigW8RYu",
  "key29": "DkPqqhhtP7PJLK7gJHe2UQ3wjri7tKf9KU7KLou7J2pLNJKndr8HwjnbG5U8t9FEvnsAYBxEZ5GjRWrMuQQYdC9",
  "key30": "2fwrScMByJRzUNCCk4iLiJysVQ2QzSPKiFyQk2n5xYxtiA3sy3Uyoh87LwNVXjwsri8kPECCs7Yyq6wHFvqbu3kN",
  "key31": "4u79nydMjGW5QUdnbAXnQLiJZUkMmPX6iAxZn2RrsEhHSCbwhzPUK9KpeRMNkyNBDFdt48j1STDebxeQUjLCqbd1",
  "key32": "65MDDeGbkfYpv3P3SLLECnScNJ3UktUA2gfbLHEfwd6eN9hJR4f9MZs1oLCy9BBmB3K8ZZXPwVRMy3gGCaeJPxXs",
  "key33": "3ohhe4MfAy3ChFRAJ1YeFAuNKjTwRD6uXWVKHrPvZ9TZRCit5PXBFVYDxM9DoFCvvZevKL73jCUoRe7xdfA5SjY5",
  "key34": "4QkMPxHKfHGk9rNHWg5XHmNZCF1Y9GzHfqEi7XEq7DamxjuzGiSNjQJCxMDgg9C1tpntsrg8ntfd2MxhqPwirkNR",
  "key35": "1Hvptt5y4DdA9c6J4ihyG59u2xGSc4BYi3i3LMi9Vq9vD2i4Zz72U8qGe2F6x5TFufoyRRY1JF6Cc3oukpesFcZ",
  "key36": "3a7vg82SuEZStD15XkVP1NAyC4fuc8PMoPpmtEQ6CQbWZ4BAikHi76xcZAX6Cwr2rfbrSBG5bbG1fqCMJaT6pLw3",
  "key37": "5hdSpbXCtj76HF4PDbY413to7dPXNoCrX6hvWctevBui1KEunUyd8MMVHiyVr99eDyNZSfqeYD3G8Y1TTEACNKeH",
  "key38": "5S7ggqAfhVS6c7XvhuhjwkJnt1SvtXWWzC7bXWk4KV1fFNiPDGQuNeera9jYSAFoiyqJeV82g4nQYxd1kvtGHUpC",
  "key39": "2txCqvN71csbA6oXEkCmiWMBrghWsBLgkH5wK7BTURjC1UiYtJQCxZxkfPffL5NPp3QDaN8SVxP9ofxaBPSJTGVp",
  "key40": "5wxqDCecMpswqKbudS8rQ8H6rh5LUDsuAc5FRU38p9CkkdnXfFAd8LaixhnHzuga8DZUuib7871sz9A1SBvrHnYc",
  "key41": "4nKZLpYVvYgDxujCbAyCDv18baEx5YyB1y6kpGVeAYXAJ1jRKvrtC2rHtKMHtn58JjwvYvgqfkVaHTDNUPNBv69V",
  "key42": "3BGVeLDnzmqKYeRCzbiqGLUGFGutuaDRiwdeUAdCfcpJhh9bcttR2G3u8EtdPSPKtFBaDBrCfbsanC1sZfDRfvkv",
  "key43": "3an6Njwj9NUBDG5YQuwr4u2aUwDr5nF2knJ1HpWYueFeBS9oVnj7RvBc8QPPhvWLYFTx7kDa2LZpRTtxGJhrndJD"
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

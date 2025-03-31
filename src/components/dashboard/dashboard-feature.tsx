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
    "2pTMF2W5rVrmfE4dBQQosq3kTcZoqtGGrPJYFs5QAP2szjTkeryXAWLfJUVNGQ8AQ8c4RVmsgmYdNtCZLbseJbuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PX9hShFnGsUrcz1jemeq26RzUnAetr9FTPCtMGnkfDfZ3cXmcYx24HnoqHbVA8p4rbZhFhRGvj3ZgxNuNPRpUHK",
  "key1": "2wEXezcxGqQRNzKQUwg1cmgqTNxAtx7dkUHKxpQokN4R7T76sUQRMvknyN2oBiH4BkzYG1F1G45FgY1X8t2kZmzi",
  "key2": "4gYUmwW8Fke6qdb4YM73cBTDWbPxQt8cryeBcYTgnJbk2GswzHkpjWtJZx1KgVH1W4hmX8r6kVv7TVtERS6Y5ESU",
  "key3": "47kVYq9ax8wr3ZAcY7PwpZw4ZKA8kWrXgkw5MQHp77XgHiE8TuNG3FJyBYijuyuZ2HMW4eko4vtzVStQLHVy8cFg",
  "key4": "3BKVykhpyyt53qUFbJthfxhEdEBQ2HiHfezxN26G7DUShk17wVMuxz7o2tf1ueJEtczUrdbtkzhYk7udZ1ap96a3",
  "key5": "vb72UswsbPWoNSSh2gQQVbZ6seqYEYa87DND9SguoPpi1w1LtPZcG2azFd3CSt7JcRNdqnwBMnJTSnAkGwQ7fT2",
  "key6": "JyGRwH2aS1e15NybAbjdLDqZoHnTspJ6xFxviDdptTyWtXXKTNHyiMVNWhbEx3dwvM7WJpTnyzKo9D1TukqmwNM",
  "key7": "kVXwAkQgee525FmAv67N8KBX2BWKg9fqNj6y4yLfiMs8LZnHe2og9KGWBoMbUoGiwdzYfRNDZauZJ5LMSN8bzbf",
  "key8": "5HGPrtqaJnFD3YLWpbgYSbiesRnG7wnpeWarszSC1y8vgQcoMToHnoXgiDyUyLsiAMA8e9JWsXMjwmk2SdMTR6So",
  "key9": "2XNG9e9aX4GBGcZeda8aG9PBgSL6hf4WLmdh5jBACe58ijWXvFZTDQSdxgoBg31bDvSvEL9kNpQXwmxzWZsUr7wW",
  "key10": "41YCpBGL4x6mDyLyHjodnAHgqc1fM8qkLzPFZjobPVkGhQ7bftTuDWmtARMy5CU1DTua7eN8hSNq7wUAgcvvFabL",
  "key11": "H3U2X2H6rhiHowtyrfn7x5y3sRtFkMVT6bX6e1pgc9auTRP71rTDLHiA8H1psXQFafZ8aXguNenSv8P7SKvXbHC",
  "key12": "2jTq7UXT1yw6nk1ZK1sXkGDpNVSfLiZQ75Fwgkj5AN8DognNuCZFohwJQCPuVQxhJ3ru4FwTHgmSvBETn2Z2U1id",
  "key13": "4wveFZ3qEihdkvxspz9UX8ofe61pT7rdZRdt3o5Vbot4YGmhcpLvC2iEkJ6bMjcxMPk71C16USUVuEJf1ia1c7Fq",
  "key14": "2GDFwvvdD8K8ZmM6A2quFRybvFJUVchqjPmv5aigw4mnQLpHiuLDTxz1F6foNy4TmcxBFy5mWUoU7Sz2KR4d4u6W",
  "key15": "3AfhFbn8ETvnJe38Srp23yAze8FFop7eH3qVjactEjtfJoXGJEaGMEPMyXs7RMNyyBuu6u9qhHPLQikiN4NVskcG",
  "key16": "2TvuQRPPeCRU5CPj24g4HrRYUHd3QeyVVnp6ThUwboYLycYWqZ1FvQXkdg62rWmMBhFb8jZKP9uRcFCXVXkrkUmW",
  "key17": "37K1dSoMnE1DmfoREarUc5ftq93dyU7U7rRh92tsgrP3r2cVHRCibPGzrHoU1kxUNa94dzkzwTmGELMPkEoLjF9A",
  "key18": "33GzkksA9msEouVFmMWR9Mzj8wKPYUXJMjhVVtXnbLzKPp7vPSmYfttN3jo3zaxWCsipdf6XVzJpfjwGN3Ni4yBa",
  "key19": "3s3hNCcjh9Q92oi4fDmJUDtL24HLtY7DyWWzQ2i62Wi9bDGfBtXmdjCQczQXsXoapaKmiQ1uJH4b9KFiyPFmrB4N",
  "key20": "4QJuUrcY2tKQDxzfDQJa9TTXmWz48dp2uBZJkpiqbGchTRgrHtYTawKg4duCYKpYFhXG7Tzj4JyJGiWxVN7kyRnd",
  "key21": "2tepjLYfJNv7pDDpciNbPRk7X8fKgS3ogwYoiutwnA72684HS3x4c6ksWNW6axvDnCknfuohbTiABxegrPCFEoNX",
  "key22": "y4VXHZknAeZjfcfgEGUdB7pWJopfnTRVviL3DH7YbxzcbR5w7WQ5JZW4kJCdQ8tKJnoYY9ywHXmY7Fo97dxQix5",
  "key23": "4ygVF6ovGU4xmas14Egm2tGmz93s7Rideh2yPraFG9GbSs4F1EAWJNwaPsz3sRusqBS4dnBfGFpTYLqJnptBYbRH",
  "key24": "4bapLuxsHwTu1vZ6rnNyhvCvQJ5D5bp8tgbspZtXDG3hd4rRSRo1AbsUdE4wSKNCdMkUStCsASDeozWnMccAdcZM",
  "key25": "3fqohpExNyvJQmrN1YiXM5KL5WUi6kDq7W5x8PXvMN9Y1EiE5zi6qpMgRJ66H1vqPfx8p1mFmFJovxFZTbmcDWCD",
  "key26": "4XB5YbgUQY8u1d4m2dqnW6pLUDFd6CbaTJ7qmSbmeotvJqpaZNK4hFvcXeKxxYDkWYgAcKvcHvhQYusFAZQ9bNz2",
  "key27": "2je9991PV2GW7m49cs2rraomZuRu5h5uPn2mSv5rPd1B1Rapu3PJBc9iKzH3gvZA2gd3mMwmK3vAFNjYPS1VTxg7",
  "key28": "tgNHdaFRCSwVt3yv4H7AL8zeCKCRdNqyQ79BpdydiZ29yb4D8SfMXEwoqE9vDn1Gtpq9Bop4HkZ1SP9z8SprUQe",
  "key29": "4A5HTzyjjVqDFLn1PvZJ6vrxGaGVT9beo3vVWxG5tThqzqDuwPF32zuEzTSGkkzgg147KkX1JSPvtPbkAX3P1qfu",
  "key30": "4cKw3fGBPJHnoyFLnQ83nFjL9LdzW5APuccFsKSYsUuM8BwHyqqa6ZFEz2qeD8ib4YX21rME4NgnUPSjemsebj5A",
  "key31": "2A73A92pGHjuPg8gYcdU3dWgk49159DadDrmVNFDxds283qYw14nnuWc6EMKmJVsu9gge399Qhfq2aPW9sRvUnCG",
  "key32": "4QXBgUG2xx1UVgNd8F23r5Mhn9t1XsebMH9M6GyShujtDAdUy6o6SEgVUncx2BmboGZz86mKxMX54owFWJKVvJBb",
  "key33": "2fsk5V3evZjhBZPNuZnJtLTzFFFGctJs4L5c9tdNCPaJ8pYCom7qTig7i6a2xY8BEVpTvVAh2UfjLgXUgdF2tTMP",
  "key34": "52BiAKChUPrmc4tM4AyLeCf5n8MKsb6ELLduAK5Tn4vhqk6ZxirbhFrkfYh98SMQnmCZ5pmQjNxBwJZx77BoiaVm",
  "key35": "37hMpZ7JhFUFxtz1bGGaCipu4gVusvpm8JicwjuHJMZDEANC4pZnnNdaTPEHhDd8LwBKbFdC3PZJ1vdiCYNsaUxJ",
  "key36": "4ywHmTrMxkYDv8JkxS5wXg2pnFMSBsRpxnmdegASnBKoj1nyyAwFCvRTf3GNVbTf7xq29YkUBiNJYNDZgfp75uvq",
  "key37": "4qHSvEdevyQH92gJgY2DouKBjvitxGVx3wAjw81kPKeSUhRTaQyzYaApc59rZ3G3phun4BUpPzVbtw1Vjs47y1hL",
  "key38": "3R4oDkx3zeV6qcnuYpzZLEfG6vq5HiL6MQUvzSPTHXjVfgiNDyvmLYi2k1yAxSxdjtEnGzwEufSo9i9H9m8Ehw1M",
  "key39": "2tRDQMxoCiynb1wLqb2jbj6jhApwWQ7nuQPs4dfJvV5PyD3DoLgHQi3QmoUxp57UrPXFu11UShrCMNny1CVrPL21",
  "key40": "4MYJHyYrFJEPhdkHL7WpkMWTzDMaNe3ZK1GqFCA17WzMsmTNiKfy1kmbngFzh1db91PxQSM2ePVxqfshA8AXCAiU"
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

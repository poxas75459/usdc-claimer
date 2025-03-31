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
    "2jwtt4mUMVQJjCp6enAD8hQNKTbRs1dnvwM8KwLTjoDMvQoPhG3TKNPwGDGAtx8vyNzgfkcjBZKb5Pk2KdCGpfgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PZLFUtQuWELFWayL5zkfGDbfKQTUzdoLxayqQYmYW1xaxSXky3LYBapQxfzF9vGwPbGQmWXu15cGCkuvADry1Cz",
  "key1": "4DrWphb5RqBKGKbHTBCDvKz8NpmiPocUaUrfFVH5Ec1WvEc8RRFGF4RUxmCU1hzrmHWwLNQBXfSSkdywtGYhYi3Y",
  "key2": "32rCM5uYVdNV2QeL9ZUWMvQATH4sdo2CHRtAzeNiE8r9RjZPFD3zmQRPYo3HRxW145N5hVNBwQdUefm77JMS7fai",
  "key3": "zn7mPUuweJpfuCqjpAymT5gPazeeSc2AXhrHtRti5bN1SkzmjU2EuvWKtChVRpLjjKGyKJY3Jn35vxLexLBYoKY",
  "key4": "4QGJe9bHdjBrWLTw3WZU9M5NuAUaS2B1YLbU67hQvh9qLSknWaUGFcCpy7vLpViZbEr386mcWFv6eZN4qJd6RDTj",
  "key5": "3bxpwCCGBti1eUL6WowmdLqBFQXvPZTcUkqCgGibFoQW2h7ojXAJCMgiUnaLtNMPvZ5ngUu9EycqoPZR3jJNxKnt",
  "key6": "5UYiCa9ph611AEK9Vm8LGtUiVR4CW3Zh3LFyvYVXLZb2CETxA61yh8MuAkPJdZsu3ccrrUHQu3Mp3zckFsqyrraj",
  "key7": "4dJDTLXwJYaUPXsvQ8mxM2Nw2mtkn333UWnCWFqMEnLqPedn9xC8VEihWr5TWRM3PobdeUan5jCfm5WmHqtUzZ4T",
  "key8": "3TrPmWNuKtnRnKg2TRSjypqt7Aa1z8JJBcqStMkxv2txbjVPBFNNDmbZbHcsVn4KTnrK4N8V2tuoUNsoVQ2QF71F",
  "key9": "2i7F1CgwQCbt5t6BqDekR9b8nsXCQEX4nGaYL4fGWxjfDddYrmkZvFmJisttRxuS4j65Qi4GtrpMDFCcScR8Mrd3",
  "key10": "5KBG4yHZVJ3GmXH6uSxLdE2NMf89fPetUD7RkvSL945Ly23P5PAQsifQUfif9ibqZK5F168z762oYWjY7g2TvByu",
  "key11": "48hEF4yocwWYKFyAftVH1pMRRu9GD9AZBpxYEWXnyH9MY8FbeSubtVxmUBYkd8fGP9ddoZY6SfsxervPapf16mNi",
  "key12": "3dqEHWwqTp4L9dRQpuKZGjLWqr5pHwrsfF6B172vPG4deD4XT4oXE82oM7WfX27vPtu95sZb5hZJwKWtgRDAwXgy",
  "key13": "WJf4aMp7AduD4azpUXWEN9W8NSyN4QKMUuqU6fayGtJbrXtfsBq53zJbdMxTne7VnBt3QDLaXfWe93vDrwPUnMK",
  "key14": "26eArr7rt89fq9PE3BRMYTQmbbD6NHoR5jyBBBwvcr8bMXYCfxt6SYud72L8HFC6hUnGUipuktqZaPkUwVyUadr7",
  "key15": "3E66Pq7w74ZYdys3PAh42zzUCRiAoz69jJwcsVR7Zq4Mxb7cJNvi3B4Z1NdWfTB7M8YnJNdorGS1NJpx38xmEuth",
  "key16": "3NmuQP3hQCRwphhYfAVfbcKXUWED4hhGku49L7GkPikqtcm4zwWBiAfGGsYXQKGQD4Dad52w3Sy4jBypMTowp91F",
  "key17": "ysHQ5Gui1Lh5GQZqa8RvFGgsfJFYSezMiZK2xRSYMwr42ZyCGujFtsLwfAJrVcgSRKThT2GpJMHfgzb6JsmkGP3",
  "key18": "4hTTsFa211zxJGk52M7V4LbGExSaH8xq6WQxkNkbYEtbfJeVXxeoeWosmxWdXrFtXWn2r6EpCvQq6ij97Doi9Ld6",
  "key19": "3Re6A8ft8vf3ZCzagDFaGnv7VDLa3V6GHr3EK1WqTnKioEQx7xs2WujzF7aJEdGaWQD4GhzxDwEAVu5by8h6BnvZ",
  "key20": "3mPikACuo5XYLiX5GRdXEgjaURa8D9Ymi6m4ydQc7XdFTrRi76YNGBVbAu2RmGsy1akYMuZd5oMT43d7VYYFbVnr",
  "key21": "5b7dGAEYx5F4fu32QaRnzDnKnZfSRi6ANY8J3f4w5qn4u1bP5MTE8HiUjoEBS5E5KAkZ7TVTv1jsCmwAv5DUiWNr",
  "key22": "5jFzNWVrQ6NFYMwZw2rNW5sjBy9JtWtbx8Tx9DmyKZcaUfYdGXFnxBySAzQbeAkfMuyhvD4NySbTUQQukDnjptPd",
  "key23": "4B47hYBLJGiCvSS2jLornUHR4Jo2dmUBcianvw1rhKu2ewBvotV31suqo77XYjhMXAB9z78z68ZAUYuR333mMgp5",
  "key24": "3a7a3ULfoBeMBGgcj9BPCKrkY1SyRBnQsJD67GYYepXGvHgr3Bj86biniZTd6UCMRkk7Am4asRSegkFinQuLiQdE",
  "key25": "dYjrqid6uV9wyFViJQ2EZNSZrt9KwrhLiE2eKAYNEC5AKo2B6zRmbXKvKivfmJdq3VssyF5TqJ7KdnEaCYwVhiH",
  "key26": "3xdhLsW2Czt51kSe1cZW9SJdDaycKwHGzh8zf2gLemNQKZeHGELzA8UbEH8KsYBGxY8rbs2W6qM8ecktFEzNuPJU",
  "key27": "56T7X4vN763g78rTofCWPQiPzYvGfQLXCFnEWQPL4opKbAB3pvSb7UYkaakSSTmUhwbXkYd337TMTFuMd8nVVswg",
  "key28": "zb9FCrs1E2xGCpGCkwvsXD3hcYGyaUFN5VuqHtqWXsspzFZGvrGyKmvJfAUox3RokyMrFbV5TW3ghCV6WJDQuxe",
  "key29": "2uy7SGFHbctavcRdnuqrJAJ233qT3gWZRnpLcWuEyVvPb6xJ9BNxBGYL4QLPRVW9K89QJ2XxSQ9PF4kjAzUhNkap",
  "key30": "5yGBoReBqDSMV7QMM2NhovtahJveSwxUtKoQj4Bs9W1hHc7pPZP9F9UvAwCvEuwK3y33oWyKQzBZzFcJJnF9kJgv",
  "key31": "eVXqgQ6XJ5oj7yKX2H5ECkKAsDxZZ6eHZFoe6aGyD6UyzboAyLAzPdL437EybwNtRCr29R5gfq1Fmq3eff77DW2",
  "key32": "5VinAcLoGLq2UhXBkBQ8fAYbjUyekFQxFBU1eaAtEiL7UgSjuMA8CYgafTjejAwEMWxTEDPt6zZaN9RpSJrFBhyw",
  "key33": "5HX2GDfm7PjwrhSYPr1uwVhH8ikNQ9TydQhELVp9aAD3b4XhXbJb4k7eRrcQZxBwuNqG87o1QnjaH8jzNZEGje7y",
  "key34": "5dDc3UgvjhWuUecMfEgwsSVFZu9aSfvP81ATkpJW2Hi3q1VH5PZrqFaoCCVZNJ3te3pdwE74rK5adnTE2HeSmdtf",
  "key35": "ru2vYBfr3nvZ3n6cAoiz2RkJfwVGgPCGhNiW9fzFsv6j2BBwXr1oy7EVx2MqFyMHo8YZyxucKgiVSx4ocFNJBNy",
  "key36": "62yDkN6sEhR1YMXF1NjPY5RPePKZBfTByDh8RL25F7fU8djMDcgguHsZAy5xeGQDBSXCu3SmJfNmdvYkPszSFAFc",
  "key37": "5bzoLopqyXq8pqqUwtvUvLGvM1aeqpTugGWbRTNTihsHWSdELmUhRhg8MQafNZr5Sn7h6Hyc44hb15kr97CQK4Zw",
  "key38": "3cNpwyuXGonR9by6ja8H1BQp9oZGca7uQ31Jq5eigpiQQEo29gA1ZDrF2qnUgcS85YKuoMypgwjquFfkGvFUpPnv",
  "key39": "65jPi5yo4fnpbfCz2oDqc5PX7bGdzJgNdmsxiVDhtZryQv3eWfP1th3zpB7RU3XhhzgvPprh3WXfgGtopcRgRADx",
  "key40": "2jkqViEr7jq5BGwpYYoCdRbJAk3CSPnGMZvM1gxk4XQ3EEJQhH6gxRM2S4m7MsrxtBfT2yNRx916snU8DLh9KEbc",
  "key41": "eitmaii79y9jSyCCZBQqU7DvzDWPiQkRxcor6EBuVnE4vBYJ5upekWeHjXwWfLsPDnTJTr74dBqHTgGtXT4d4km",
  "key42": "gojmGkdfYdKnuaFWjeYhHHKoora1v63Zh3DjphxVd6JUoJnbHN1ejvpkacz2Ky5cjhkMZfNLv765UJ3zo8LcNHs",
  "key43": "2LAUXUZV2gSWb6pHm5E4q8JdwmUmdnCHPRd9toHkUZwdAWuGtyeX8myUSt3ZQjJaqrbuGwqJXhL7Yscw3eqNL2GM",
  "key44": "3vy4uQvxeSsqPUhctj2gJxKM8skpzu5sxGtDe1wveehjcvFxqVAsZ1vdEmPkW44UuEQekQAcm6UfwPwt9KnZFrCn",
  "key45": "21iJ1a4mpA4wAzezU7VQDD32VFPqTUuHUt3g8K3KDQhygmEgt8UAAFCCaNKDX7upUt8DNKsA7nypMeVeTDTid62v",
  "key46": "4hrvi63mXPg4qH6vbh9TSeLbAuYUifCiU6wTUrapBC3whSk3756gxs2LxoP858n6ctmcMFLCHqNi9kKRhjrN7HXv",
  "key47": "zvq5uECAdQk8SVhrLorJtnQJZ9JnLnx39aq8JyNajdfE1H9mEYmspLRiGycf5ybEZnGVdo6vGZwQRBvywK3KiJp",
  "key48": "54vhcRKanayKUvQw6De9pWtjP1b9mfHhAGhUUaQvWNVDNBd3hTLx5W6f69FCRqpkx3duzdYCbsJcr3rfzxGiEeen"
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

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
    "5MDgrCc2eRt7srs9KoxHYEBXjF1hdrq2kc32EUQhh5qZhBD4LNTercLupjM3eU54sQbkgh9xBRUeeYNrFQRiEow6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxpWVotagQCKqgwvvgqZhCxkrEdJHRebyBszi5WZzLfomU78umsZ6xzh9vj2YKqdNpcZyUUWPSVJvnBbFNkLKXi",
  "key1": "3JF3Ynj2kqzKww2P2rfKichygG1tfsFGHHdZ34kimnc3srKb8GSUaxQAVjNdrFJbT5qHGUc6XksPDKj7fsQb8JvA",
  "key2": "34yB6FZyUW96P73uqv7xKEjciK4mwJ8P3w2Yt1TRoW9A2XKumPRgQVB2bFZQHXD2gwYHRXqssNSqNwYjA8Be3nbZ",
  "key3": "4qZzgTuLrore5pMVVEeby82HoHCgn6hQgYV42BMJ155FfW3ndYD83a3Q5U3148wB95vVsgYFaVr5ttHKhYHdU5NB",
  "key4": "CSaGiqYLVhvWayz2cQP8kQvUSWdu84hEcbKhQHa4VCgVUCh2MUtNbSFKoXzLVW83t77r4VX6bACCr1DBwhHqNmV",
  "key5": "3eYBoXd8TxGZTf3YY6jyr9EpAXW7TdA4TSqJ8DVnMKVyzJXVzUwbDaWw5aKxYg16peQCNXJpFUqRtf1mBKDseeAG",
  "key6": "23e1qQwmDaMnhgCvUeEZuvTgmaSwzWiYjxq1sF3srdQvxjXtVg3RBRDroDLDoPgZRcfj2J2gAAQrFJtRLR5Moynk",
  "key7": "2FghoP7PgDgKMQJFBiHarqJT2ubeQ5utvZ3dqd2sS78J5PP5ac6y67RnyN4FSqZPEUECFpXMuUQSSWkPEtCYJs8P",
  "key8": "3xQY1L7UF39J8eRCQeXmaCDEQbKUF75BSydFXsJrjsNWWgi4Ymcp1smDZq7AZfUuHa4awyTbzHgddUtCQgVvRyEh",
  "key9": "2fxLc4BvkVsabFV1WSkFmYKMHkQscrR5S1brWUvQ2ENax3vLyfTnbMUUnsVWPAGHAfxvFUZxLNye9LUu8VzfoMPB",
  "key10": "DLz3XvqAAWxqEEhU8HhKBVNXtnoB7GMzTydPiDVonRatCQ9czPTBA8Qj27k53fhEWMtXy41ncfW3bekCEE3hYHS",
  "key11": "5rUEpkPDSW96pJ4iuk47soK75HN4beeBqjNHHgJmhqoxLHkJi1ko9yyFKvsfC3uPkXWRwXLkV6mxyhhug5QhuNp5",
  "key12": "5jrwwG5udQfgwHsqE8ayHQT4X854soFH1Cj4USC1eK8JZNwvWN9xGfpAmz5bqbELnV45v6Ec5rNcWc4J6se5oeKy",
  "key13": "2BVfscZz8aGGRjXpPusWzy6ghkXJ15rL7SBvEUTKh2SV7ZMidGCAKG3747kMx5mp6kNJs2QdLknr2Yd14VAKRzNu",
  "key14": "2afsimb7PjCqm57C3ybtZdasvxNFa2RpiugWYRTU8n1XMrRYyzqpSShT5T3uEUsr28gciSMQs1eJaEV2yaJscu9h",
  "key15": "26Jg7jVSEkjJJpzTikbcgZ87T58mmLEnJYK6nBCseCueA3iSYdLfUJJNj8i8Mcx9shojMk8Agh8nYcDGnHzbSGSB",
  "key16": "4FpvW4P1m9Nj4Qqw3XWHkdWmNqQLt12sG7odaws6d6HEycKRMy3cijJRh97KejXA1Sr2ZqfLC5upWBZB8vac7Zbt",
  "key17": "5JoDCMoSWE896FmdGutWPhPtrYjQanmoaG9YXipPJqBLUhJvxU8Reqg5pgvRXPRshQs6NH74DSEjZXdTBxsSh61A",
  "key18": "33cbcySjXj7dwZmY1PHbpCCnbYVW5hqnNMdKaDUNhS7Jf7ohir9syhsgSbvhzpUR766YoJYcLXrTWePSkjpX4Ffw",
  "key19": "2XDaEoKxBQMQhEWAosNxWCmiaB8qZSZNGPmks1y5bpZRVZZRnCJL33tiEEp3tJTYyKLcDP1qFR8gw55qWMAq9igz",
  "key20": "4dugMvRezHtha9s7VEo6NBG55LEBKiTdcRRXokAJGhRvzRd9CSEwn9GX7nCRy9emv8GRJnWh3g9azrETUXdvoRzD",
  "key21": "U2eZ6Ta6GfEbgfX2h1G3W6A672aZ7M7zwkJr3LVBH4XdqzNpCS9kVsnActCbAtMdkG8SXHabvbPkqBgvhRaRuL9",
  "key22": "3RzFrAL4fReujj5VVVrvHtQEJ97qtcWtisLLYCeunbQvVcGyz3xxansppm68BqJA8KDCTqe7ufHUacAuX1UPzYTR",
  "key23": "5gz26kNcpMynkdHQE5kTZVvCgKMF9g7hFmAi8HaDA4D7MzpJNek1CuoDdqfWf8nBs1CjYCX5e7fJGwwWJEzDTyCE",
  "key24": "2VpbF5A1DCASBoiTeQrRwVzzzaKV9ZXaSKdgWSAyo4wmmb9qJ92QXvBaF2Pu9eCSMgYnsQUkvA19hZ1omHFWa9kG",
  "key25": "5XwwJNMxLrA8zs5fjVQwbvKkziVEm5MjCYGsbXojw7DT8yA632MtGfGC4SZUL3jyNXAmaXFaGxPdXtcFh2DUov8Z",
  "key26": "4pzyzYDvfjzGtSMSyGnj7JfUPCjp31NHKp2VnUZNctZfqfKG3x2xNspuTndZQdbgf6Xsa8grSJiub3aeFu3ANuf8",
  "key27": "4VuYdgBX8zRvdboaPMX3pWGnnTpzztYGTYdeaT2SMN3nq2STXS36cUp2FASep633GBrCXiiJfuisjx9vmy6vPAb6",
  "key28": "24mRkFFLeqXfGsN6XZvT8HHuteaycRKvcw7d2PLZNhNDoyN6VFnefYvJG4GfTGSwiEWAWXzYEdykvjbR2ERsirpe",
  "key29": "UCZyeLDxpVWqnUxKh16QEzYPUUcsWLmvkf7odcefwnRAn1GM3zG2oju39LwSMcAG5Gk47m6MkcUp49TXfgRSPDv",
  "key30": "3A2YDWa3fumRwZhSwofvkg6uK5kky4UBp6hjpEtCuHHnMFaa1R31k6r2bCrFunhWEyX9HxVVswEkdjnaNgZ5Aux5",
  "key31": "4DYCMmAfVC19wUM94BLyjeuHi82im7DpXzXoK1v1ehK3bnUk7qxgjpocD6BbFdGswdJGCFfYeM1c1vVQDTRcmQ85",
  "key32": "4M1KEY8nMdWjR5hVi44g3wEN3xxgjG2o3vv5vpTqj699WGtyK3Jr1RDbaKQTesPsmyCLnsM3D9A1Xw4NKsN6ZhZ4",
  "key33": "5NZ5digLxeupLDYKdqtjPCoEEwJkeyBr3wy5QXqWfXh7aVGB1zHoFoC1VaH2CeiTWLCpvdQ5vqrpwj5nsuF6Vx7x",
  "key34": "RfJAuH9KqTkwChP8X1BZX2eo52tXzvo4ZqPVArgCLh1N53sgsTFQLK7mRKXsWZFh9ygirPYdCUiaFspUJX4eZyZ",
  "key35": "4JFRw6kAANGdppkbm98S5gsCkPFuMsNvRHL8MZbgSKjPDrFUQx8zKSZQMHCspgKDfkaajY5zHa3DRuNxCNo8AqwP",
  "key36": "3bKZe6bRPMeQZJ463SujFA7vntYwwwaRVXVpuukFxNtZyg1mcQwV5ZxSSYvzzF61i7Guhmh5QYLdRLrwzHrf1ytX",
  "key37": "2pkYk8LiW2QDcNhHFjmRqtHTUC1NDWsFQX8FytpxQt6pv8vxWSHT4NbgFwHJKMoYFNSM6r6TxCNqjkmnGj3wWNCa",
  "key38": "3ZUT2RSeuZEoPcQWqj7F4rooHVSF77JdgQmozT4qYibTfpt2mWiXuLh9MjAetjHVBBu8jjQRcHEiAbCfsNXgXnfW",
  "key39": "3YDNWEK7udQijiNKiqe1FAbHGsNWKQp8C1KmbghhA5MHd24Mqi3aEiVmtPzoei8kzAVeBfS7Keyc1g5SM87hqiVe",
  "key40": "3qF71ira3JWJARugBZ2BkPJLbzr99RFx1tCuiiWKa2mzrpZsZHowcMvrENvuDGgGDRNVH8LprBhNBZ8Zbtmznp7k"
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

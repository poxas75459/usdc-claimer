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
    "4JTQr9Gc6w9xMEdHZpfkLFQdc2V6N3CD7CiQwQPNgJbpkLQWER8vUp5n6vsL8YXjvUPcKvvCR4yMauoBRHTm3w58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Zsu1w5Yf9iNMya6kMeuEzpQmG2FxBJ5pdkeWEhdLWkkHau947tVQsroKEFAtMk62s6sx57b2kvSKXq6mEjGogS",
  "key1": "sgwfSkA8j2BZDHgCuFFjFgPbgJyiZVcZwDqZ4sZ6BZrAioZ56WdLiMJQVJKRmoodniACnbz2euwDEkCWXgspv3D",
  "key2": "27rppLpnBCGrza6TzPkw9fbxmoa8EpzWd1zDSQ19cv8x1Dx54gs5jPBnPhWQCs1ER5P7Xz3yFW87FHPzWVq7N2QY",
  "key3": "22SXtqGLd9aMAx1vc9TTWYr8WGvs9xhHn6xKxt2zMQk4hapwdQpdbDewBPgowwVynXnSahESpGnBDNgNTzdR2bie",
  "key4": "5ZNX5dM7rpz8QcQNCmUUB548PSi1pG4phg4EVdqLznc6dEDxX2ckfPfSrrboNXXnH1jE8mnfNmHd5FH9WDDNKPWG",
  "key5": "f1r3Fo1T2pkvwCB6oXq2KW5yCQuBFp61oyCzSsVrf8TGXSKJBjARD9Bmvh3XeL52k27c2116nRySMwXqTNW9EQG",
  "key6": "3PTcGpUSNQCqf9TonVH2Mamj1o92hhfWzxETz7KamQ2uUiQKCi4xuzMHvzKr7QsA4kG3roYC1dYpFkvHVx6LQ9ti",
  "key7": "5nBsPhpiBTbDZTbUNsy2cUESomhHwdiqMmkEAby4YESzTADathZKPjtMN5vmNK91gyW97PuT5DfzYgrCuownJCUv",
  "key8": "3ypBUCXKJYkm7RdN5cXSnRsP7kjnJUrJZd8W9gobga6B9TGnRL117AbkbPpibgUff6591ysjA3F2NhK8KZ6hqDaQ",
  "key9": "2EJ99pRNBMKQqE5jrXUG6FXpMSXRkDtYKJE5Dn2wG8PK52PHkZzfoNWtE2jPv59C7rw4fPV52G3LMRD6v59XDgq1",
  "key10": "47kvHAGxPRX8bhG4y19LEDAsjr7D1kjeuMYzgdyqwhgLSP8nfn9PNKqEpRtKY64sx1dMpKn6f8wv1mKzzoYqdtuY",
  "key11": "eKNp6xS5B4djg9zmmDSREwze3atHZersjTPTFirMWf4B4368Utj55w1a3Htgrrog8sNWTHmiv731fWVzMCzsA2s",
  "key12": "2nJGV9MrnATDA1fPRvog3Ss2rKVZHcc471tkoVUcqf2QpRwM9u9VU3rjbiNnMr9v4KJkKcRH4MR4PGTiqDrHeBW2",
  "key13": "5uRBAeGYYFvrHJ27ALmzJVsXVz9EQGZhMSiZ3mA8vAnXU3bKvbHqQXVguT6p6zStjhpVwic6yHbi5mBzYAVQRK3R",
  "key14": "3S6FrkyzbEghUFwNGizMY6ibYbzrTPnbj3RBsQUQncjvr7zydDehcojNvgfvrPPk1oJAfxqY1fbw9E74gzMC1G32",
  "key15": "57iQwvG4xRvJEW1MWvK1VedfeZ7ecFDqDHybKEZ7XyCd5pAbjUuTcRBvCVM8G1CReVV1fuNct7Z9K1fCcYuNLzL5",
  "key16": "2xfaxeQLNtSBXamh1bsrBZzNouqjJsy4cX2kStU4spKfECDdZvt1mGh1UaAENH7XuYMuKhdr27xNMzqUwxifLc6v",
  "key17": "5spQn3tLDsYntkm71VPcYfeBrWB7MgqJftJw8KX98sgDdtFpMPycnQqaC4eKn9acSZ4cw8SPZkT7s8zv4QMksmrK",
  "key18": "3uajAsJ8uzQte5ReiuhaxM3Yg6XpicLrGzehZNgijPFhMFpgtJyKBYaY7st7JCHi6BdKtdVBHPMRFcHNWDp9XXzC",
  "key19": "4Dc1vKiwvAewYXTynDUATfUfm9DBsqC5cpFioAwV2B8bQYca1vMrjdUkFdmuBcuozVF5mbTvdeXdKVV9dKV1vHJC",
  "key20": "3M2vPqf8Bcvg8SHUAtfdQf2cmD6bJbANLbTy9tU2T87bobuKLeaFXwkH3ETfNPa86GsTxgTaEQXAWdWkT4NpVsS7",
  "key21": "24snzSbH83vWiiCgAe6itgPUBwmq3V2LPYyhusbUQHBjm6sdhcrVFLdRSMEuAeYBf19eRq1WSKzyRiRWt6QMj23U",
  "key22": "4Xx8WKtETCi9sWKvxM8zb8AYKKeUUQzxpNM5asaXLcRXWDJrn42JNXeSwiYTDhQVmb5CTsmBUcxbxZom16n5uVaB",
  "key23": "47SRFLDwY9V9wd69zq7rPcm5NYaQY7rqSDFZSqqjmmNrTvU8p19GDkhnD7aiwd76ZbcBhpUDwT5n4xKXSjFFZoFQ",
  "key24": "5rdX8F4pV14HXZupnVLxUdqZj2LS8xx4nyu1eRrz1W1fSKFcSkibXxdmCcPD3ShUjfR3s5CRJNx4CptTs6JV1xev",
  "key25": "5xknLNm1LRkLh3fqRzSh7AJxZMM2aB6njS7RKT7enjoqevaY3v3xHTXu6aAfv8rZ3gPvXwD1KNhNYuZ3sHkMWfHB",
  "key26": "2Ba6EvJUR8T31t9gPYd9oZwjy8v5riYFnRCAcspacVhPwojv3xtxJrRGaPGpaxCPewskFdnkGLgb1Ee9ewNyFs1E",
  "key27": "5Vfi3dTTTHKcKz3zTH68iMy9REVvPz1cTLKBx9pmd4zMNip7rSC6kWCs57U1B8zW6Uww9jSx6oRWCLAgkB6KVf3E",
  "key28": "2CKn6yrJcmixhDnvsKmmAob7szJ4whkkyyXdh3rhKU9qey5iVBYgt2MpHkvXujm232ELmvo7XRpBrCk1HF3bw1fJ",
  "key29": "27Ny75qY6NoVS4DWSKTN1a3J63DhuVHMtNs8jgpqPxoYfrvePT17YJg9XaK1khQuTkk6obHvw84yvnqDabHRByLz",
  "key30": "4baMA8ibtzpQw1dsQMpTFH9ZxifF5Kw8p97PxLud7HNVwvdrk9as3gETL3hhLPHGfC4iWKSL2FhxQaP1SGN1MpzW",
  "key31": "3vHJj8h1cp2sm9ZMgKAe2vmXyeqbRP7Dvc7sE1P8pWoaPaVmoDwM5HYtZ6tQTFvgc4TPn66BqqgcbyxnDWfoZxYt",
  "key32": "24fEgiVJ1CHxJ7cT4xqazoPc8k3c3k4NtTkqNyeqy7TAWvuFSV2n5WktVgi3y6eYWs4ofsxRYStwLkxSyoJcHosL",
  "key33": "Jg5SsELumBLAMemUk1Fo3Hx2mog1TFGgViPoGXmnmLNz5C71xb74QYgphgm7855wvyS7pHNjSeEsJ3jiUzsSsKE",
  "key34": "3yjoGX1CvKdCNMiG718zUsCXAyHHJkSKpPJSee7YEi9iVHs6JgRWrEkMKLkvjy2VJXwChW7TR9jWNp7fsLvnL3fe"
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

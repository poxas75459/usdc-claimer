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
    "3zy9A3rFKFRTjB9Zk7cZdEnmKnnQmLbcAYnEqhT486bxQHXhoVe54SobKjMUN3Yn3T525Wmo87qHtktfeZK3arML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TCtatW8Gsx5ved5RsQAYe3eB9AT1xcWPBX6vaqCw3TqBB6nPxU2EKf9LR5qcBA3RCXucnEdCiZnMCqfVEFTZtyz",
  "key1": "5rhJoBxawfRgUj67buYpvUVWgHVUQL1CpyakTbnmUKGrSmPBpkL1u4mrkoz52NVvXFVGjHMzpJ1juUMRjUiKfVBd",
  "key2": "5TPdLP2Z9aiYttQMGs2g862myFTvCvsXVTpApeKyhQ1NQWUqQmpevtCGGigVAyH3ibPbtGkV6nfbjJMqrQHKj483",
  "key3": "28qZgMMG697JGzyQ5T4ym2SdcAzdm7Kg92DrVSxzZBcckH4QzoofkYm3R2oaKQi86LU9wxNyZGNEWZXt2SJFJ6YL",
  "key4": "4UH7TVVETLyCdoBpMhFjQ6F9oB42YRVmKe4vDXF6Yhyoz88ALKf4pfnJbxgp9YjBWkRZPF7efwD6PBwPEzXoSLYE",
  "key5": "4wc4DQV9eGb1uRWgT6MfFJMkQ62sihEZNGsN1N7Mn6UWGH1EnJRUCtFSe1zF53RMmdRs7s1Uc6oqVL6qBR6ssEJd",
  "key6": "4Ergw3HDBe2hN9oEMRGRuk9sbNQNYG7h9addoGhets9kRLv2Fy8Xeffec1MZpisicqVd79uMtLKSyjgTChQEZjtx",
  "key7": "TF5uTD9ZD8i8jzffkk48xuAQqiFbmtMukvNPfWeqvLMxKJECUykphpUEoKb1MZfBSX4MPX3HQjhz8EPcYZ5Ao6n",
  "key8": "4K7nokPfHDDcmF7rwSVvfUfKUQsrHDxsBTvHgVYn4ARpGwQ1tBMWHdzPEEUxkx5mef5YZ6gnv91jpPF4MHMiJc6j",
  "key9": "23AYR6uWz7mPxxaZNaL4Sc5xzdgR6gPmwpYeMzcuHb8JUCZznGqd7HCy6nVUJNmoeVaLw4krdN7G9fcPycvNXMq9",
  "key10": "3ntS19WjZYDp855zYtYmVV23nNDScaqrGguMg7nzYy9Ka2Lqsmyy1RCJWm8fV8ziFGrz6uJdQz1aETDuTQu6RGR5",
  "key11": "5tsuadS2HxUQtyZsGfPScWksRETiCtyYUK8ADCyMw1iym6knEnT2e2BsKjVeMN2BCp3LLTYeb59Tv5XhWxPndqUa",
  "key12": "4ojGdh6RiTeJ2snERuysmatmLFYrqbgjFMY4ek3EsR6w4VGCqiexFEJmkfA4tRB2aufi2v1o22xqbpZygUu1TeL3",
  "key13": "5HWaMzPu92TujWpqm2UfCcv3kvqyNJ4Ct3EGsmFZCUMpN9FQvbZfFY7TEcbkg4emLyXzogmAMBa9vk81yhGVi6HV",
  "key14": "5KKdg95RntnRTYSbRNDqBN6rQMEmpvKC2a6cjTyief57wPZ3EQGUahtm3TNkD6wLHcL152sK3ieQcM15AJKvAMZp",
  "key15": "5XtAeTYjNt9KvcdML3yWCZaP2nWcFDLHf3VKw5YUF9ZVBSZs1FkwV2F6MmbxvBSG9Re7yHpkbzEzskXra6jXGKQ8",
  "key16": "5ik3PcPoSDNqAHyJGZqsfei6yxMJSXtPkq7yFysb9ttqW1Bg2P11d7qWMjMkLXUuv611W6QC4ctPnfZCMy4vZjm7",
  "key17": "3cvWtntGKhgwMrSNcVpMoi1bC1cR6pJFqHe5obdtW3k4eetshViP6oZUU7FD82T6jzo61mukvkYWGKdKRXveWdRA",
  "key18": "2BTecEB5ozzMA8sdaetS2RMF2rM4m9bMBFf8UUBDoT5BFcsuT6fzMySUKRan4g8snjohavpFsadTHdGqGmCsdvkw",
  "key19": "5xETMFPGuhdCe12mytNrwa9SZNWq7tdvgbM3fBrjMcZEKPDt3HoLDZcxBefoabxTF1VNG66rnEnWk7smJHKmjeaU",
  "key20": "D5tWEmoJUi5Uw3uK99Ph1b7h8fechknXfK3rzYjLYb88P8bNBzKiGgCwcuLWv3Tav6CX3RBngpVsrKogPPtHppg",
  "key21": "mzvzZR2vWJnfP4TnD8fq4u1EtAKFdHVHLGqooDTRxXgy6k419obdFQQDPADD2QpJnoN8MwYZUK4ETZiUVw7HXb8",
  "key22": "w9uFVerYYBRE9ar2nSr82n3qqz3NowbWA27Wt4STF2Q8yPfuXAqZ32rnW3TffiGaGMmrVzkhGG3DhKe8DfcDdZF",
  "key23": "5MmU2ju3hTstP9Bi3YprdVnsnbswa3iaotxptMqEKcdTr66kH49NVYf4tqgX5zY4FWyDqy7Y94ZCqgCdJfeQfPUg",
  "key24": "5SqYedA27S28bDM3QAGhbi8vtp63pZuTQackuVX4yQgQ7LEhyczF8zW9RiponGwNRLFHUq2c2RdX5V8o6JxyNeEP",
  "key25": "4YqrBA83SsXazTUjgMCyV3AuLSsujdqQSUCDk2Xir6iZ1MsoC4uYBetG5Af8bw2mNRMoa41xbngxpvNAeVHtjgh"
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

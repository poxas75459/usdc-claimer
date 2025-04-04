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
    "42C3ns4mYposkMHB65MyT1AwciqkpELtuhdN7eQMyYmng1yLHLY5gige9zsCrwpPFsvYXzYbZMoKvs8QBSvAanLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUPKtkH5ki5LVCCFK4nF95Z4ZjZPDPdSJaLd3oNg8K4WCaHtmQqvbwWxES1hW12PuVYT2nUC8WpvKVukZCrFSdM",
  "key1": "8mJgWsNvw6ME2UnndVuPphLJZzzRdD9UaGqQh7ijn1H9Q9C3rnYEQuL3jHsKapbbNhFYVUqDvrcU8YAPzHnKkKG",
  "key2": "4eoRDrUgfx41XyxNiLjMRFJxD63qNRPuW42GwLbPPLSKGFijurTcfemBKFsVHcAfVQm7PBZLENMJYDVPXY5TzDZd",
  "key3": "2kSgnUqviUt8RvxZmBySJ9LWfjNL16ndUfStYQLBonYaaACbmvieVMuu8kQxfTEL6TNvw7WJnwy93pcv2EwWNtR2",
  "key4": "5AhxDWpcwXcrnVRmsAYEryfmboEXPRNmqDHgR6wZwXWkkD7SGTZCBAd19vqwHLmYLGtdPihtokTjHaVSHESyEipa",
  "key5": "2etPL6EKREJozRdKyCSHYWVefCduPXJzSX1j1hhCXSF1bm3S4SY1SB5jy7ewayrUSv2xCD6TxpniYUkad8jeq2HF",
  "key6": "3gNeFQfkRRW16m4xnvmXNDzpr3GwX2XcWfWTg4rXiyFDuK7niXvaRG3eXpCSp7YD3A6hZeWVDLWsbUhqZNg8wyim",
  "key7": "36oCfi3SJEi6u2hi7wfnshxh9vnGKvYZ1okTLLmKK2gHdhhq66gPPzHtc767mLMnASC3Vf7dHpfegx8BDUYSD7J4",
  "key8": "5tnLoGmm8Z8sFBLwFR3g6tAXywPuUCRKLr382UWXoDMfs8eL8LuGXa7ex7KKNrUr71wvyH6PuCGfhBQr5Uh5nFQk",
  "key9": "UNzgQhrdyU9bbBQLaLT7Xpz1iAjCNyyxwTUuP2hJTosFEkMu7YcHbpZcXeCuoKEHSCgPHLN31HkKjMFkVaRV682",
  "key10": "3pCNnLd6i36K8Vty8zA1VKxteSoipvC2dmLXzX1BSjofWiaG4xFfjvNxhMDZTEnzBLD9gmELn5QiQ9vyBkJNkd8X",
  "key11": "SrufoENJf9YNHZ7hrxXv93FDDuYNpZQcJjf2LZBwCoikimWthMwHW2GRYtmYcGLKx39DhC1Esz89fgqpkR7dUQu",
  "key12": "JKqvfty6cjUXg4Ja1PExdSwv6QkuWJyc2oiMfyVVRYNzJ3Ehbipv5GYqH84kS7EUMFL6TwcdCzGZaJaEyj4UtsE",
  "key13": "64tUiF6vPHwnVwhJccoc8cpsPdZfaUvhgWz9QMgUzbWsk87j96CYtcSRC8yXmkMinziTS9H5ZBb1mPXEuEBpBXxW",
  "key14": "5dXKTw5JMFBos1rdf13TeTyDcZoRg4V2DVwaAgymkfnrTt8Hvx5EYDryj3J77QcqLS4umNq2QRWNAw8q8suGdxPR",
  "key15": "4nySH93a4pWdWD8P3x7ANBsqxCkZmjDrS5Bb3Uv8mQBs5WFkuAFmU4SRsgdrKZrhcsiu4yiz6B8UaMxc6ohuvxio",
  "key16": "4GHGTt1544Y6Ck41aQgL7ooxazKQQogM7jawWGhZFfXLivpsmXSPtXBQEEdp9D2PzzEx3JGHRLfTk1FZuyKEHVWv",
  "key17": "3p1FP2UJUh9mJZavbuXdzH1VN92nsi1LJ6zvKCML633kmaXqr8tWWaV1yyqkYrTWytBLcNGqjxQEoxFV8PFdQewX",
  "key18": "3VVMukMuDuDmQnVu5RtZ1ibctDvBKfFJjttGwwn8dPpdaijpAZ356GZqSyT3kKQxiZVgyPbiWsEdDfZ4DFCsYJFF",
  "key19": "QvxpeYdYuiLx69MWJADuMXvH62J2itokXM2LAmxC2sj7TbeKYL5Hv1SZTMko1NZf4Zs68mZjeJXofVywo6wYVu7",
  "key20": "64owLnKM2Bu6Nqt4q8TmcXuGR7PL5HbFUJcKbTyMdh87xHWYzzNv8Kz8Wjk22sM7GaoTZmUxieejgpCpt8zx7fTd",
  "key21": "4ZnrQu62GFwoXttfRbKbh3hrXv3zx8iJCTYu1zL82AZDmxGHvA1A5ZoFVrh261hhYdKLVWf8xJrX3jLJ7b8sdTsv",
  "key22": "oKyLA3rx8Bg5V1Rsq1BP6qY9xZwT2i3wBdXMxoTDuKPuZgKeHjeead55AMD3jkyFTqG36ozbhTwSCjJD8kF8KQm",
  "key23": "3YaiFnmjUxESemvpYYRQoPfUinSD9gXTpeWvSc59Vq5nGp8Mgt1D4d71nQ8Gu9vz7fDFkZ3FuxfzJWiJdKDKiRaS",
  "key24": "5DrmRmQXMiovPtyUvhuwRTALrwDFPYY1k9rr4spfPZAqEGexDUQb5J6CuwmqLSP1mwkrLmiC9Fz3Gsf9wT4G2HPL",
  "key25": "5gYQxES1CkWAkh7fBxSDeakxdcoVnbNPFS698yk8B8s8bVtZ3YfHAEpB3aAsoHb55Pjw5V7mWm3VUcWieamvCcwZ",
  "key26": "3Gtep4sQZVwTrqGcQZA7tPAHj7iRsoXSiBoFXGp99chwxLyg3SBgWhWZXxPJXvjAEMYi4Hgwk1QE1cJNZSBQBYCN",
  "key27": "47Wu54E5CZQNRA8VuDTVLu1TaKhedDfsaXR4siCyWVLhiVsGT1B6j6nvGcBVf72Uo9WUYJsz9ixfvSnYnsiarB1V",
  "key28": "4FEnfvjkNQybBcBLwvLdUZHqXegSrCYdR9BEvq4SNTdVBuHqXdhSEo1ZUSe7HuUKNBTSHVzLZSju4t4buwZYUpiq",
  "key29": "5pSpB5Rken3FK7tAb59g6r9rnwyTH6t1BhyDpL8ZZbeNATV5LFmnXCzAddCNHypnNDUAMhpHFYtuTRvAbSFjqhED",
  "key30": "27RV315xTU6ad5tw2yEuRHevAmxAQfWCohNMqKZJEF9bGSafJFobahmNHkJDAmetgwh9NisMUhMPNhUkVnX5brxX",
  "key31": "48kPguYBi4vufh7EegtwpsrnLtPUBc5mTspFoNzWkLaAR8LBNzRr2YD7Q2zerXNz9DiBu65GwrGnSPmxCj5St2Ai",
  "key32": "3Rhd2EAxzQFDe8dKfo5py82nD1Yy76cKWfWmHshz5htqywRNxS1ZxVSTf1ajvDynnJZzKGKnyz6j1AfuxhngpBpf",
  "key33": "4dYkRvG31pftQvjhh2p1WNF59pjzMK2JF69S18ywzjqQGgdFy49ZEtJwZgztD4h2WCk8LzZ858pST8a2fGAW4NXp",
  "key34": "2chSmuUim42aPR4NsAX1EyyRLBLxYwfCvkme4dPHmuvQKYuT94Yr6jXt6kyiJB3f2d2t5S1yp7bLBex5KmbxNhgp",
  "key35": "3VWaKZMckyV4SeMiDmTvDZQwhRd43NQYmXpokaihxo7WFCaF9rCceswxQPYJmFD1YvFBQiRaBBhKRGbho3ZmT5Jw",
  "key36": "2jD2a6rwcF7bHDQ5uS5Vc7pPE2baCT6mzmLtyBDk4FFXetyZNEVSw4evFPxhnYxuDqLVLU8Y2uYHc55bubWBQuXJ",
  "key37": "2N8ahvFoKMZpaofHovzEBQYQ4jiPQi8NSrgnXVwVAPszK7usLwuxvsFpTQUM463bMkueYB65xkrg4jXhR1nnCYTh",
  "key38": "3Hqh3Xkg2DaydRmK3nVvYLGhtuXW4f6EGRYSLm9KVX7jGECVTsMhRbBU59DmadVqhgTN9bK7bDW9T7nagnxXYjGY",
  "key39": "5b7pdVHwW6VKr2pPXPv8LfyUfnCyKMQgW81R2KBtYyo8bEe7UvaoKMcAWAqA4bYyT98ARb9W5fDUxq6FbTyFcPtk",
  "key40": "ht4khEtRRnKb51GxM7a5R4ZZdNbtnbTXvzQqYMr2hJ42MspjQxqnQeBno6nCsJbh7r7NhXiBzeguLmCfasCCez1",
  "key41": "2DGa1WyaALhEoc2Bos4x6FBiaEre3aYK4BDMbEUoHcyXAiQgo4NuhosWC4gPWPsTU1CpS1Xo6a8gsiFnxVMPhtQt",
  "key42": "5wxTk5YewzZHBjgxW2cF6WKcV2QbhBT7qrZCx6pC7nexxhyyuN5racDVepCZQi5xUuULts9xWouMRrXm1AkX5FA",
  "key43": "2h4AoiGD4wCdT7t6qMBTcdtn4KvLZkPi9ARmV4oazo3QrLFQZrY5Vhowddc6CXBwK6i71xxdRKtYktwzcDpFRMh7",
  "key44": "4fsnjxC6w944g7FM8mz61FUysgsh1Ymb1JTENd8eYzQNM3kT5f2hJRGsy1SPXAyC6xpkg6P6jFU111C5jezS2A9M"
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

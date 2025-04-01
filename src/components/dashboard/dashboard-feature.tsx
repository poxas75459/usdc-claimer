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
    "3yKTTSKadqNF9iPuhQSsxGCkSxi7UT7krjPngGT7JVnnZubMKkd5eXQaNU2frBvTfs5Ea2TQei8cxEktXTtNgnSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cZ9eSvBakPuWN1zb7uGVNNHA8qVeCdk7AX6T5c8LktKibB49cYpRMdQWAkpEBSBCncCHe1vX6azarEbYQGj2WTL",
  "key1": "4zCJMY7FzwPabXF76LnWic2Unk1JyJ8WiwddaEw5S5SAPscGtXWcL9r3RHsUCNZKxDFZzSqvUS6GgWbUXvb3JiSE",
  "key2": "4HRGHPZzSDQCsjq9kiaJRgf4qsqEH8KuVP5Ah8TrKcrtJEAqpZ9LhMANQbDcEVkfiiJCjAS5cJfYZ3BtpTnrK1de",
  "key3": "2ZYjejyahBGfbxebhMT756Yz24dmvBiWP5kjiwWwat4vjZudaNu9AeGjaveSk31uDvSLuYptetM52F7Z4TrsZSeC",
  "key4": "2KvzF93tLJE5pBYGwUC5APEt66WzASmHW4BFzZiZGx8DGQvRWxgyi9odeL563DewpVF4Cxm2LjW5ZRG1kiPhD8ux",
  "key5": "3iQFa1omCNG8Ngs7QsRQskEdtDRGfsnvfEhqJzccj1KFNA596ajAFr1dewHQR99dacnT2Yo83dtyjS2jAqT4LisY",
  "key6": "cW3BWF95U97Gf9j9T3tGQXx1LSMjFa8qAUTqPHe1afgAdKSLsi5TpsrYtpidX9rYg4M4myRP912usCtjZiUFWV5",
  "key7": "3izmFokBxvBqE33h6z3YRVud4wpAust85g2391CNrBnuEp4vX5kuGX5WG9FbQKqFKpZcHbrHZxWATYXA7P7ht8ue",
  "key8": "3sqFpVw9JfSK7MhZdwMxhMj7mh6wQEJe3ECyzYA9YEn6QnYeru3jx39GuQd7e5bf15JdXEFJbD1VCHngnAPXEYA",
  "key9": "2GtCCVuXaBPTjEXGAozMNMXEGiiSRgtF2NbYNp4mW7NLGwzcGitWx31kQHBJ5yeSvnNDfZ2BxJXkPFiVu7eWNyM5",
  "key10": "4kbi1sSbRee3yDxuZXCzVT5ZpYhWyUT3B1hFAzzv5KENEQ1vQeMa4fo7dTyp3SReApRK1YSfdBvszTL3nGidnZhh",
  "key11": "3EEX4BQQ2uGK7CUu9d4btQFg8qmvL3ZtSLVVo6T8Rhn3KzUcMjDMYarz7TwbUj3kWeKwxcVuQNN91W7cp3ifhyp6",
  "key12": "2dge9TAvo1ytoNK1fNQqU5nJ1aaYkEUj2RTS3wnJorFyCoVtwBHTRmVtix5Ajnaa17A1UQpwjcS8xT4Pzjm52VXb",
  "key13": "2FBku8ecQdJnzJC4tTsPPAxSc8f1kebSBDQJvNu1s6W6biDjAC42NkXDaYy4sMQzcBjb5BmW4qKnuZQ43CYhenLG",
  "key14": "2wMakwbc94WxbLjMAFjHNqkZu9Nb9nUuP21jDuq7UjnorCXtnQReYwVTv24iJnUcdvB3jr8J96YqgbA58qNcZJ6a",
  "key15": "4ja8iJwmatyjKfCuZysx96Ch5UETioKCNBvvrosycausjrvtqHzL9Fa83rwjYViNWj2DCNNmP4rVrnifzuWBhQC5",
  "key16": "2iVYF1Q7V841AXdLr3hVJYG1Z21eufXGbebUNAfbvuuDzzxmBPNSqSfFbGFqXQ3VgdJAvtb1hiSBZMC8aKRAvkqy",
  "key17": "2vXnAY94u2NqK2uVib9oQcccaUtwazeDH2P74FEKFwmTfBYx9UasunMu2JSWiigdJFaSgemSx7BNDAipe94v7tuS",
  "key18": "4ruEw1VNg2X2DkunYEPfGetKAXojS5exqo2qKNvb1bEqBjkaQzX2t4PxsN1CDBePyTAcF6NQ1iurmq69pJmjsPww",
  "key19": "8DiLYx6mppqRMdqR17AqERn4Dx1jHP3YFw3uRzJnHzYftWDFH9noBYawA5houNV2mUSMM5TzmWGBe6C9KaHNtaa",
  "key20": "zFDNy77yoCK249cHFn3Z5J84Q6ZRm3cfY49GKDNSj1i35Q86ykH6Rv4oiud2rWo2V88podPiVQ8rvMfaTTGraAF",
  "key21": "3vxH3tyxLorCHDaP5r6ENKc3CcHem5e7YnevxacLBqvRtNGDzQqPvc8VnCSZYuVgeg2x1GXUuvbXdKQLsTx4Jgfd",
  "key22": "1GEjRWidFaa8ADGjvvRyqiq4Z3Z5NJtRdZ6ngwXs7jWUMw95YBYiiSaxAvHUGN6LECrY2GsWSrjpD6jUv9G719a",
  "key23": "2oG71e6zq5dzHqrtgkdoZywWb1xrDaRKHZkndK7gCNMXk9DKHEQLEUzwBx4WcnDS8dLEXvigHgHv9ojZmp5u769a",
  "key24": "REFrJ7ecm4CCJ71E4NrLNXTWiUoAvK1agC4E31GtrBcRi1vZmGDECrYSQS3YJ9BYMgdYAgUrzVJFyiB5P41XDXR",
  "key25": "5VKX4ZnxiUgQLt2j4QzZxv3B1ZaPo73bPDYY57b7GZEdhQFL5egc2XRAS9W2GE1dsEjFqn5E9xnJ6edwCRNscsyr",
  "key26": "3kXGWZBn9GGEyWsWkZL5dY6oBSFQB9vsUgBAvee9782A9E1ZSKr5YtYkQt4ivU2fh6v9Bz1oboGPKVpfiz5ZEmuj",
  "key27": "PGZrAgHcbx8avBHo13Uv7TLb8BAoZu2advdC4bHpjHGKVvghztJ9avzsNfkg4uTLEwTVe4PzDxNrG7e7KbJuTfY",
  "key28": "3dbGqiqn4qAaSMB7jiSjMot44dqnvvhgaoDm6xWcMUauhXAvSspgdN3kKvghGHYJr7E9aitGoLSVvoUeMhjFLCpM",
  "key29": "3BKacAKAW6sLNKiH3k5SmYZtAHeXSCohVrJaPz8Rcc7KJy3sg5smdZi5SAKqqrn2H46fTuT15LGgMnBGNYPuhkJN",
  "key30": "4xMR1VydB8WGzN1Gw8BzK3V5npTJksyGMvUELZXqgayK3ihbQ9juNjsWX4YccAJtenTzmxin8Sjefu5EjpV8Vop4",
  "key31": "2LDg5UCzMYSq4cnPr8a1xwuzuqTxRJ6vyLyN9XYzuWrT6XkVhAkTSTvKrnhMq8ceu7f6jJPKZF5kANVAvNF62azS",
  "key32": "iCcJGo7uDTap5y2JyBqgYHjhhMQMfMXVHFsuRJF3UnwJv6oHQbjj4xiVepXX3NtTmfnr2ReArW8oDrn9X3fdNn3",
  "key33": "4HzXxe66fg7xdQn8Z9sZcyrQk5E8VFHko6yh7WtMhziyXHcqdNEXCovkBYemKzmaD1Ciq6W7uY4ZMmtC4isffPqE",
  "key34": "5DZwqH7orKQw4pVJcdyaSkcBrfWUnRBAk9ZxzNUodpKoTbs86k7tXc1VDkajiKdFwSJjvXowj4YrACkPnf7tfAvu",
  "key35": "2fPAAomU7itRTWCkpDphEdRTk49igGzcdabAqmBKhXVNXBh7otdi7ZuSCEV7J9ZUqZxA1A9Ek1cZiyK2Z4kPWy6g",
  "key36": "2bAffbbh6wCdWXkvz7uLPRXFQ8rR4VCesw2eY9QNjMU4WzS98co6nU96tNgBVcvdtJqXqbeCaqjXq4oMCcrV3UEy",
  "key37": "sCkfvLZLHVK4JVjwwsPLKmFFhmDXUVWT7kxq6iXZr7opURQ84gZLi5FtExh5NNgYmoL4q2pEmdtbWH4as4u2s1e",
  "key38": "RNYCrbSn61HFoevaiPp1CiHwy6JxgNXwrJrc5uRTATW89CTysAstFMMBDGopy7zrrtP4SpurfLeYDzh5FZN4UAK",
  "key39": "XMm3bzdPi5LEChaciN4VmCBmyPggXomjJN6fWFKWAvqQdGXKDF2YXBKxQuvJYfAWjCY6pzAJcJGKice7AUAe5g6",
  "key40": "4rshn2k1SwqYxhVo3RFFqiWPFzYcasAqMeQ9BnF2jYFmPS2wz1ZDnTqdBVk8a7QmCC3KJC22NQiBE6RDvCuF4Bqj",
  "key41": "JhvudywUV3ChwJQdPuYyUAg4ku2d2y8gwCm2o5CthHRTTM3si9Xx79846LNpt2QESbNoMtJUSrPXacxVKWDeVpD",
  "key42": "3jeetbb9g7m2q1ATTRCSAGoSGyK4moAqZUHJfqG7V94SyMaWE6Pzk94anmhHeYjppExqEQBLpey1eZ5iVVDYi9TP",
  "key43": "KjosifFEdADAyrKre8r49DbD8hHULsG9Ata6MM2oU14L6ZPJJvBrzXWysDB2NZHQ1gJmFn5cRiRyGT2eLEeDp6B"
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

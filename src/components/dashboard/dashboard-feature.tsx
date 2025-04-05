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
    "3Ys5WrGACUZpULeRzG74cmwY8ZcyKYamB5qjjAzFRvq93nXgPsLuzNy9ZWZVz2MwrSwQebf6baWDqhgszoqxCV7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yJzGwXjzbnHDh9HnuT442hZoR8Y4ru1vio7GobXmT4GCCjLBoTvm5gonUwixm7aAn4vgWpJekNeMQaMPtKP2dUP",
  "key1": "4GufBRtWDq33VCXwAKnrFT2htdUPo7BNR97g98SY9JFAR8VNLpceR7M8akxBPdEUaXyzVengf6Db3z5rQ73wNXgS",
  "key2": "47bruRRUcAvT9zhEMu9WxxLC82tM8LpGEcKNi9XH1eZKr8V49GDcD5PzB1WhWSBrP7auyWasGwuVJG2E4hg5hBhM",
  "key3": "rXc8q4qP1mM585a6f1nJRigjqUjTv7biWewJux1HDSE5zhEEMMu4Wv5AcuMdFh7jnzL8NhunF5x1iXBvfnHZ9B4",
  "key4": "62TNgaJ33tAk7Vknr8NaDkzVpRYZHXmi18xRRCjH4z2m7R7huE9uSANkt4g3Awo5S4eq5E6p3sxYdnQAYXnouNrV",
  "key5": "9JABs12MqymdYpdJskvcGEzGnpFF9wEq5wgsKXv9QKwKeNvf2mH25Hsbk98kH29JKGqzbrXEy5hnxNr1L6voajx",
  "key6": "4tJTbEUPzNVDAk2PiirNe1Dbnbg26wQhoZ87vXcvsMRojbazLMERbirq4nyPRFmYQnhuPPLwUNcvodNdAtDvPqnw",
  "key7": "49fj9PXBmnSGeBQW1qFWjoWaiL4fMBuqyxJf81RWFnmpsniXQQuMDknAS7eDA31kv31Xc5PTVu6327sSzDFEYxaE",
  "key8": "3k31zjzPQ5SL4FrggF4DHdceoCyUb9hHW9mVd6mKVZaEYMmB8aZumn5kEFS227dxgFUzPKCY71zf2xtYDvvaGVGi",
  "key9": "3mAsrUjx3LmGzSPdYWAC2cp4ihYT7RcSs2QQvwJ69En46Rt6kYWYfcCWkm9Fk6vHXmWMtcCqp3DcHwv5eS79iG7e",
  "key10": "34cVTQHE4ZR7Ve4CJH1YoUjoJkpmHnhK4GeZxd6P8pjJCEsP6DrCQwGhJ43HRY4XFTYYLEY91gQuqUKuEhJpQbq7",
  "key11": "2mCjhm5EPws7vwpZH3LBHPpaoXR3NtDzme5V7cCfS64npxYcZPUtaTD3JCsHEfCKz8rdGPb4ofcAgFsbmj98f5Eo",
  "key12": "4L7zc58fMr5LXDgyroRDE2gE2qMvZy8Eu8TKpoJbsBC19b6pwyxc9PMB71zA16RQKrvFDGQcdeVjUMF7ZUzNux6R",
  "key13": "ZSoNcdmYV8HiZucQpkwXvtEz1ZeMQ2Fk3Atyt3EXyCA63BjmyMFnsELQ9udagbwVcW91hrHbqH2yN3tJWGVNCBN",
  "key14": "bjRyVs7SP8VVJTm3ovGZkCKW7BTWgEXg362ZewsGbi2XuNs2se3W6RNHZh5RqhFZYLMn1y2wdqZW2jQP2PiC6Ad",
  "key15": "3bfRegjH2wc5uZLrzi2KaDEaHAafN7rtjMfc3LRSYfWYQ8buCGrgW72nUjNnaHtgJq6yH1c925pw7GYWW6W2NWnv",
  "key16": "2qrqcXRbVpR2KtNyMNzkSQ11Jwd8C94T7v1F22vQSXimx1aFAbUbeG9ABRs8foRZwVggbC1XoAmZppUFUszEutu",
  "key17": "7XtLxnJM3MtkDuojCGRpfxxQHohQx8BNKQvyJUfVadY1Ja68HwXfUaEeEUigunbb7n7aMaTYCxLi9UaTebvvgGv",
  "key18": "z6rmhLrYxv5UFTECzKDEdg9qd7qGxbrcjeVcod2k7PsVRcA5b9nwqCojZHL56XztRg1j7925iEg4bf5RVxC5ujp",
  "key19": "2JxvuC2N91MKV3Rtd3nCKWKygnPTZ3xhmvqDqn4Y12Z7tQ3G2uQAU5fP23o5qhAEvX6zuYk5wDtDLTBfszgpHnvd",
  "key20": "4ZUvnXuHDS4u9McaH5TB4GvsjW6y1dP1jH1big7TE1qGTuMqKqtUwLbzPLBJJHPrghaCdbiM4h2angttjzHTmVnY",
  "key21": "3bBDUS9SiY1JvbjjpfUS4oWLTDz99FnpvakwcktntAUPSBw5nKQm5Ah69X1y9Vvze8YTvDkh4CBzVrk1trDR3nuG",
  "key22": "2pfnfA4Dbh2sySGoiR8N1dpb6h6hqf5x9oA62e8wMcqbhefQ1NRqLKwAWeWbc8Rcv7RLM9Z6iVkDpghCcgDwR1Nr",
  "key23": "5Csm5HpSsWTxTpdsiqDbUvTAndFkpaJt7dVBn6jSJYigX78mDfpGk6gSHUfza3T7hxa2k2CUNMt3wPAAarWoFdSF",
  "key24": "sUw3Gdj3MR3PtrnuFfy8GYsdijChNx1XSWj6m5C4NHPt2d9uBY4v3fgDsgzJrFohDfZ91Ehj7PvZFavzMQV53qs",
  "key25": "5JcjKhtCjoR2PYLkGpf13wDBtUdy65BbmuBre3YvkGRpoyXNpTJpeNHaCpF5365q96VBCE8EGvzo5546EwjofbZg",
  "key26": "qCkWreyCu3ts8sfWWhUx4AqPG2zzVgfdA8c9Cy6oYnavhtW8vkiXgkbzLxYKM9vPfH1UqYPsV2VDmeDZNZXDb46",
  "key27": "2rE8E9vH6sJVFPG7rJyHypbGNRm3zLB9k7VS796jNMksGJX8dDL2wtbiEsa2kTwtYUNveDUaHTwbcMTicdfxDCus",
  "key28": "jqSK1eszoN9o7B8b2kZaVEDUFQ4feWizWasondtEsqwgpZbnxq6UnA3SPCQ3K9XtsCguVYVuMHVtx7eU6cdDWvt",
  "key29": "5T4n4BZHikEAXxgEUp5kEwMSLwvKmJzUZLUe2qPgyuWJUr9F6STnZpHJRsWQpZ5aG5XNGACZ38wyJ7bE2ZRBwdD8",
  "key30": "2NNH8uwwAvNMNzsBAZVzze7x4VcPWzfyfKUgBCXzbR8j7LXt5wWmmaxboz681auNKo6QbCG7FemosKc9a72posTC"
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

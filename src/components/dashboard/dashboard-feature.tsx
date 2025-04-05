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
    "4uYzrzyaQSTfGAqYMGveN1EyiArsPDC8PqPtn1xD7KUwputtchLd5iU7okQANPgWa3RcSWc3RxkpVwhypz7gm916"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XcigfeNwW8TPckivoy1fwUBkAoQM6vfHo1G6qwgXRFr68JL15Nz3dUPXTM9Jq4KVYQoLxoKUAH26rd622cFCMAh",
  "key1": "5c1AYneF9BTAKNbK6FA8djNgBMMxeZeTRg4YBDu9ffj9JWvDrBCybkqQUS1avzGjjLu41Lx8Uj8fPn1ViZtK4qLk",
  "key2": "2SXwnbF3pa1nGFvmfe492jfz7abXKB3gC1vV5ys8Hrt8phEQxAi2A9YuhxZ5oPnGcTQsoLwBNUSxyYSbmacYbyPo",
  "key3": "2mdZKawyNa62mgs9VKFXcj28V7PurGHap6cwijyw7Es42iFLqjD1anhN6yp1Nk7k1ZgXG7pBA6PLL1KYcTuSsgRz",
  "key4": "2DcUZxzgjaF3fwUnCQGedqPPUxoM451wzRZvFdfkQ5p6Ky64KZ8XNL5EDQQ6CnfweSMjPBgjFKvWQ15a22LMrDnS",
  "key5": "4EE6DYZfFDxWoi9KXV4T7LAXeWUzBv9Lx975CkDCYu9Qf6Eifrq51rMjBSs4vhw1sh2dFybK4T9QbHoyqcDcynhu",
  "key6": "4NtoqqGgCHjLtWqYzYXgrT8jWJj8hxCwLSzrt1ck1mh8pL7DvyZBjm1heq2NFNZoLi2oYXkDmLLX6AknmHaKqrRN",
  "key7": "5YRwNA1ZBJBTLyDezyc9hHMnPZkKPbAQy5gyi79uTvKhvswhj8EX1J2pSGwbiRuFxzGT8etDnGCmXAYBrtMkRavy",
  "key8": "4bYZ81ofKozjBBdDiVfv9b3UN7rVyvfpcZ6WvbNkRdBLJ9xeW8tBCaPkwjiTPv1XnR9qeueJBCYvnpN7EDDocw6T",
  "key9": "37DpuxwqZJQZnNDrQWkvcMhddG99cQnFa37b4TyibyB95pkjLyvboqkuvZSBDXNHETZbxURzzpfpKSy7tetiSP4e",
  "key10": "4Um7e2UxMktAY3S3Z7XdC1HD2FcYk5Rd1Xmfoa1MDBwsWG2UMrMF2wMLkFc7H5UmRZ5uyWDggsNoRzRteSZaqSPQ",
  "key11": "5W1HtJuvxiWJJ9WjEG7Jo1sMmovd76dtbP6hLT4scbzPLTFxkc1w5ieeExXkYxdaVrD7vrkVBMEDxtLw8uCYC1Sa",
  "key12": "QCjdRJLtbckVH7iwfGDiqTZTaFgZZXA1JoyLDLNb36NT32BmYTmWzCtgT5qFiVxiUVM6N39Uiq6TPxxbFFVVX7D",
  "key13": "4Wc2g7evuVEVa2Cz4M3oFXg9eKgQHecyhBAZS5xa4mRZdbpurpd9tNNDpzkMx9nZ6jHH8k4ETFdUN3pKNkoaV8vg",
  "key14": "2xt3U7Vs6qveh15ruY6SheQTmhWeheSbp1JdTPFctaTSoizGUCFeckthbzFwV628bN9UoQWSkVf8pXLoHYAKhzKh",
  "key15": "w2AaV4zz3sbRXmCBvzeLrsPFxQa3oJiLirbrnRr9nyJky3XF9zj4oxHHCtnXVpdPi2ymeUeir9qK5wk7iL7iDQL",
  "key16": "4ewFwZaRzdPodnv1rXzagmyvw2nSPehQHdckn3FWfaeHPS7YNosch8xTGLcwtcofd6DH64KqvMUNjjnejytYxx8m",
  "key17": "KqXb9HXcD115oxYmEaFF75XhrtsQENt2ziowN8ZhBeaNDRqBVAQeGeRsxwKTGjktZa4mt6J57XP5FrfYJywFGx2",
  "key18": "5JcwB29ZD7cZF1hoUtPCz8fVsBGJtF1g9VirjPKHdnQghymADgp432dwQKV7etM4nas91a6tLtAf8aknC4JbDYPP",
  "key19": "26kNUD3dZf62eYeh9a8a4gSPdRA3JWNMXWrYBJ6pGMaCqUqjxyBHiwGHtftV8y8U8w9HqsDsphvgauUfegRm8iLb",
  "key20": "2k4rhnUJrZyQuy7MiVUT7JtGMZZ5ZVHFGYfy39ejqqC7HB9M2s8JT78vP9ySwRai9nFi62PT88N6ZZiVEJPWdJhb",
  "key21": "5QGMvvFDQ98ws9aRn4BYCchqTyLH4gJUzLmbZ1f733FtSUNLjE7oMDEjUG4rq9R2fkohGVUuMHrBH6pRbv1NrntS",
  "key22": "4ZM73RgXpZJwxVKbQzu2tQpDwNx7URzUcC7moVVvYXunz7waiywLexmGyFxhpKQWzeSHGXaPbRyRZQt4QYVGCx6H",
  "key23": "5zFmCCG2gqj3j7bTUia6vG4q1eE8YT4EANjsbb8XeHoqfSHaaQusmznvFBPqcMnjtjrZRXC4YJErLWSMWdq1swAd",
  "key24": "2tHhm1R4rb83RvE7brgBag72fR2i3xwZ1GWJyQxvMER5koBgWVtijLG9iwmtzAN4j136vWv1mCT5SNM81hGMcxXt",
  "key25": "3o3JcB7KyAgHEyyXNr7L1wnB4wdFT5YLgUeYHM2cwEuU93WQ8NfVhkooXDHjjm1XisqL9SzPtfWsTChkKbHZZUkR",
  "key26": "4ns58jm78NEmn7YGH5sZ2V8qe6pAgtvTw2JY1zorKUFqeH14JEcPPgGy5wzNbj7kJwZsKL9QawJUJ3eZkfLTyh9q"
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

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
    "3Dn2yVdTA4FqaMDiFF2wtTfQpDFwrsBHUfVtj614YHd61u5U2JDYqvPzviE9AdFegrTmxcSuKdCTRyebLQ2V5zn2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PtVxHjsfjH94XjQE64xw8NWKzipG5aVzvs3BtfnHJ7tJFno12Fn5rLd9Ru1pGMyvwe4nHMG6ZkavpQArGVCrnXW",
  "key1": "4pPrnyh1GugCrxPZJBDjLAru5XQxjmywuX7Hidxbbn6uFSpHtiGwerZ5QQA8ez1VPYMHeQjhCmELkntrJE4ffyb",
  "key2": "3NTqFj6UF4CBu8Fs3c9r3gEVrSNgtkigHhqshMLpVTwEjozmvv2tpf8ZWarC894fnsNZiDv5NWjiGhQmn6a4CKSD",
  "key3": "s6He3tpLev2hsKZRsVAyPZUoKwQwFnZQjgTA33jf5ou7NwYeB1KA78iLUZW1RsPiYBZ7UGgwRPCWrhdpw8vofv2",
  "key4": "3jo7NDDU4mJASwy7etGk22B9xdvH6NgD4rw1oVCNnoftQy1hf6ZTdiF9XoUTnU6Ehivj64AnHfUzXFdtWRY948Jx",
  "key5": "4AWC7LTxdSGo1aRWH4s8HwVWHk4jGAgY8uxb9bAwJwpkSjkhSehRBnd9Aun7ZypJGzR6721x1NGCnaunJ7fojGXJ",
  "key6": "4HumXMuA9KcCw4hVQojuoCeDetozJE6p1sm7yvcTASijHCu9V4zkmJdsP1xj8AGfgE41Y7WtkMAGLgpqW7Dx9cUy",
  "key7": "4yZiz1T6jj21e6CA5LDfEyF9V6PHTpWMqjL2NFjpL6F5VYggpCyjcdzA4pZYXwxoWLxad2YaR8RQEJDenxMeLpco",
  "key8": "ZaFnNmJmnwiLfPeP63UroQ6sPyN9pxgcg9zbFe48j2PqCWNRwPWQZ3h7pRYqfdnJqmLJZDcCZifBH1XWWqzZ4Sq",
  "key9": "3a9FTLHznEr1Ss4tKzpXExMR4NdaWtFFNroBrvk7QxMjpzMLvaEthc3YmvG3HduVGPcWe39c2VGkrULXzgqcJvqz",
  "key10": "2zdpRVAdu6PcXdfv6H4wFPfZohfgHPH5myxxRLDuMqaNeeLQCyjnJiMzaEi4pTjU7DvvxRSayCeRXDEkrdm1nrNr",
  "key11": "YqHTa7YKuEHW7ZHdQE6LqjeAnnBMzRhqpVobTc7fe2bH8ASBsyWUbF8sCAM9z12NeW64tZfKXXETiaS9UuJoJM7",
  "key12": "5kLqdsZx4LFHHKAuvdRL8H7ENWxWCoS4hGp6fppYqUftWhxGAi8R6wMVXDYZEh6W7vvSjzu8ZcEuzBGfHQo7b6Dw",
  "key13": "3c3BfZBLu5y4mgrieHZwG1LyN3b8tAgTzYBwgSLbmH6fva74ebhx6b9TtCGxVnvipswqQSMvChyn55Cy7QEmEz3H",
  "key14": "5wdQudiAa1BjC95Ahe4hnh7fqPGCwZeDjKUY8PwaZ9QDGMtk1A3N1kcDJixMF1dfkAV15soef7zCmg5uNmteGooN",
  "key15": "3B481em4niqJc15BogoBSyHyJQN2Woogdt29Zndnh7LecXi33cSAig9sgNumRBE66mU8rnRLahKx35y8iZUJBx6d",
  "key16": "3D4v9QHCjxDQXx9H5rCkKAAfFCs1QmXrJ2ox9jxnxWT3d7KPzGk41iEdUbGpBpKRCEJVRm99TRZY9nbNZUL8YSyy",
  "key17": "3yZWQVtk16KEUePfmn3UDE9pC8jEq7DWYcjDV9FCy7mKhReUxZcXtS5GoEUYMWt2v5EwUfa3XZdR9NAwUUAtKcRA",
  "key18": "4h75QMcNgKLScMDi9nNU7m7KhbERnhLN53efavNRuiRdwiiYzJBox9HoLhApwpPsbu1tfNauF3GXVsg4cJFcQsoo",
  "key19": "3BgEFufeJNnMXjk862V2vFRyoppw9aTaYQoBkSU5nxWz8yFWZPP1V5tuBUAYc7ssjknMWVSN3GhtTVDYJc4sPCt5",
  "key20": "5a5oUdmX95dNPkhgLdCjansjjqPCcyLv1RcMes4c7WuccSJbtJKUtd4DNLsbzJpYaH7iDDFFa8qFw6PdC84XM2Nz",
  "key21": "42FqxX2i9xegh5zs8qC3VdBaD5UX4VrrwzcPVAuBJ6MhfSm5XQijD793WCULCGLNHs8vo3h9EX5QofQ5byvqSvG8",
  "key22": "368od7aNvMvsreEwWTuDVwB4isRe6prA5RZBoQuMdjHnNZA5rVsxSoTRtiAD1M4cJS1M2YkDvxQ3tazXrDpcekGV",
  "key23": "536wT7KH3v6Zndtf11hBhNnDVJyWdjW7uqVZf5LUHiMBWDNQw3bvTxbcPKfbv8Hohjj48x8zux1XcFEn6tLwRZaz",
  "key24": "3ZK5Zf5kuPdLjhY84j6gXCf4hhLpk2xuG7rqhVHATMqrNwarC19mAqLsrHY3CWWYupkUkrBVnKSf8kKEPpZmyqb2",
  "key25": "2qebqWG1Ui7hfnxBxUTQ18GeoyNWgwbXdD5vUcnWo1L8HVFZtDMHUnYWq1SHwWH7nqruVwkUpDnvjzEd42moYMXV",
  "key26": "4cu62gvCkJpShZjkoXNpqeQzfEcFWgJckRs1yzXPwyKfAN1dLjno19DFatMZ7Es7oBp6JBFJgWB4K3u2vKBgY7FF",
  "key27": "4cTT6WtbfnwbjvZ5ygbTc3AXPxSXPXdGc5NXxcQ3C5gZnCTpcVjeMLcaoeR94iHUSG4W2o7WkoVnquLWjPMyms71",
  "key28": "45Mzhm1MTzta6mtFdduGrQaPksnrT6D22XBnYjgaJjAjiGedGoQuTaPk5jVPxBcFEdMtt51qX96AEeN7zJyq3YSE",
  "key29": "4mqao3JWQHUQ7vv81U6mkHq2B7UNgEXKZ83KnXzuWXutWvRHnhWB8TT22qZHLgXwctXqibEF8MLY4Yikeo4CkYis",
  "key30": "3XNyB5WnjmbTvf3JjvnkxRqkrEsPBLfnBCKRmugZ3kWREacnHf2y2WW5aDYbasUfq7CMVYMHoNWybvHhnaJezybJ",
  "key31": "54X7E32FTHmzNPXCgZpMXWMDniKq19kZ2y2nEk81nfDM315RAeRAUUjdzQzN9BNiY7AnB37j1jXAEjUuDnGzzKCh",
  "key32": "dKsxDa64jxe4maZdBqps8BQVWfsCW7yXhKvEjLPybSKESMrn3imfbB3UFY2QvcKp6gyubpLzrtkx58iNuUsLuDa",
  "key33": "3tzxHowDWfyRj7o5ddjMYq8FdCYawrZDMvkeyfUDKaxnAbcknEbJRKBJngFKt6Py7onfWV4v8Lga5QmV1k28TB4L",
  "key34": "tzwMHvLWcimKRU2BfVbH8TLP5H5qMngC5tSwv9kXkNBGdGx3otu2KzT22gnm1mCU1WqWtMNNkximqU9VLsn4sTy",
  "key35": "Rx2JXYmu41TCpVDgmKqjnUyMYHYzvuqUk2Ls9Vu1rzFDAbP2mASokEcrtP7HryyWQ5tNo75K8xyoRsxKXJf1rA7",
  "key36": "122ofCWwH1VFSD9fp8APfpGRmrHLf1FosDU4YY3tyRHwFUvVXYxxsE946StrbxS3dT1Cu2K5LUMRRZoeUnLk1yjw"
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

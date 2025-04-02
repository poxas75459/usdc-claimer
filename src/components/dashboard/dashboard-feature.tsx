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
    "44JUAXUEBVzMgzgBNqRbWVHeD5hUwYwbVuPiUNaHNu7uR1ZQvQPDEmkpP8mKogY4DKbTV8umBXC586Sd3XSQL8oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j4mEAeVGpHQdhcWqbWXsZiJdXAB21G1nfPf9ir66paH9QsX5ArvX8gtbwCha8K4KLkMnKnBY1ddDtAwLyQi46ve",
  "key1": "3VoM2ntTgytBVcAceYvKY5z4PBbnDqikumyNiXAWZrS9BcWjKKizQKbvMZrUuPf3AfCtCw9oD1XB7nqztXg4XgPd",
  "key2": "5uyxYMqFx2mL6suHE9BC8reAFJQiwg1UfPeT7jX3DwSJc3YUgUBD5U2N1Z4eR7SmQDytxcdXACQcotZ8Eyv5fiH8",
  "key3": "PrxuCGhLrUGmHiLSsF3UpwfPHnvP3J4bmUvXyMTVN9nNbgWQJjZbYCJCWe6Bf6m1CRPxmi9cJ26QF3pN3ah3Byu",
  "key4": "4GRDvMjUwdQZRXgYsxbqbWZioA9d5y9tdaMFYFjs5Kx4TKCAWocDJiNDvkMYp8JgNtuFGV13Vn5CApvC9YndJEEe",
  "key5": "3U34EJDQc1BJZftBaSSG3L3i8iMGaEytwz36xJjPFsNTZzXTSrzBkapgsrzz4YTPaLHKc7MuxnJsLMmRqArMLpKQ",
  "key6": "4PtiCL8Snu16pPfeng7exfGrBqte5zn6q9N1gJHQ3sKEGfdMWN7LbufFAL95LKezuNJQ3omPeriSmD8EsxUo668u",
  "key7": "3VrVMx7cqriE6hd8Yhvuz2kDwvnfaPQxuG1MoqrMDomvTuGA4fMHHB9QsCdRM7dAJLLQ1MVFP9qGmEgK6Nsebwhq",
  "key8": "4opqLRiqVumvG2XaSUsgnb4v7L2y8rM2vdNGgkLK5pSeiXuJtwbVsbySq4JqPNYAzg5ixAcHD3Rcz2yB1bPm1cyr",
  "key9": "21AeFm8X9mHHh9GL6F9TtUczdPH1GvSZ4rDKUUHAAr63xLTJqZtX2FBiAezECpSHwoirYFD5nkfvmwb3Jd7xY5NG",
  "key10": "6134tT5HymRmufBzRZzvFDCvfvPorFwVsWLBANJBp9kYBZ5K3t4uVkHMzn4LzR7okMdCo7EhRbs6n9JCizApZaQD",
  "key11": "5KqFq6eBfsKmeJTmoBWysSzEWqJmvArrqBtZy8neXuwz4kZYVfKXhH1rzQKsApP4N3JgmnnFbanNg5dEPXUCjMt4",
  "key12": "3M6HnhdSDKY4ogrTGFwssF9ikBmfzXAzBgoKRv9W9PSH5qMSStfC86TdBNZsLtvC9X6od72rSCMKfovFebWnc7ij",
  "key13": "4h184HcimJzhn6kkZsAvdAzCJRXfUHywgKjsS9FLPFuEoGQvhDTAP15VstgfvHmq9mKLtFHgwazxXHegNhwMGb5W",
  "key14": "3oPgErYw7Lui5gdvZNQpjXLK7U6Zpfbdcn2gXoYvb1aS2MoNhTeMUGLV5S8yWobwsQ3q8yYC2skBTLiLxxfHvAkP",
  "key15": "5J1NzBXABQ1mvjn3tbCSJwA4hQBuTFfqv3v3MBkqkGoLssXdxUThwvmYZ4t5R6DG59t4TxnrkydQQQLGEdB1fLWg",
  "key16": "46TfMGwfWPCadXVChkdQNS57KQ4XZkMTQLyNAGYERM5HFuLW9HbpswSKghG3vw1KppdyXHehaBwz7vX9KwADqkpA",
  "key17": "3qzPU4dcdQgXobcRjCJbH1BPytxETeYetLNQafKzbZMsF26L3mnHWe4w4gMa59YGdQK6PxHbPuCej1ntHCzn5hGz",
  "key18": "3q6ejCKdoEu3kiMyyQ4jaQoTUrZP8zQgRPfzsze22g7RkxPgRHB83mF8NW2g9RuLroYn43JWNrRqVdiMiTD2FXii",
  "key19": "5pLZ8SxEccuTAzu3osxQ1J3FqJWi7wLpKUDhVX7v4mfJbfK8RZbKBVqQJHXstz7xorKLjgf2X7Kuk4Th42h1NdGh",
  "key20": "64yBBqftP3zTDj8jZ3PA3gVNpnCLqk6dEq4bn5AWJuM7NK4muvE6gwWtppNUbizNw7hNXX58kstGH7aQtVSsae5d",
  "key21": "fbLT2bBPj6f6eZMuMGwiGcpLMnqoUebWCyKenNqDzqkrBWjYgAfdX73KsmoEjvXUKVSdjpYKnE4XNrJ871VyQqZ",
  "key22": "5GkLUMXJJ1JT4LNc9efJ57iMD3EgNy6GVcEPPUyhYRSuxSxzrd4StJvivx8W3K485MWnFZBLwcDk8FF5hBUjsmWR",
  "key23": "4orVTzsM6wXHEH4Atg6jJffDYN9gv9HNcW1trfbDT51x7VpQz2Sxrq4AC21FsG31miBnwtWzyp9uJUiXMJj1RWWn",
  "key24": "4woD6K9nEJxvy3FcwpS5LYU1DnRWwDWfKcrSJK8S2oSBnzB6XNELgx79LTeVENAV5Zsp7fDmQvw6Ui13gHHssUBB",
  "key25": "JzPWvrjDDWXqKgvnHUAcrvsntvsWeLmPxUk6RAFN6tc8mBvPGUSvqMqJrfKcU2sxuZYuxPmuzzgUQb9TC3ubCAE",
  "key26": "4k2v8pUES3CjtoM4rbUKqAnaSzQz2KRfwCKMwfMSm5MebTFMC7NcHYw1sEAKN5wLrfZd5srSja3cDCoU7sxQgaua",
  "key27": "3vs5ZWfm1xSPJx3Lmmryt6o4aFJT97hXsiuZKNwzSEKBL5XHVi4kfQgs2uBThLf62zL3gzPENwxAsQA2ogste1nh",
  "key28": "CizDFP7azJDf4tLKc2xin3ojXDk8BWhdJKWQg4pR1V8AojSvnBpXNyobAbfdSX3mdtv8nST7x5M7vXkSdgejVfk",
  "key29": "2WTJNuMS98rxYTy2SPy5Dx17EWiqVAe7Eyze4cM1JU8mT5aKxzngHhcMsEWHvFi9WRJKJWVvqHDtuwgfR4udH4Xj",
  "key30": "5k5QZN8hGqd9QZWpbX1GdCXcBuNwCqmEBB8rwzTBYEi262QWPLArgFMCWenrdDEjZv5L6C7LrEAuUkJgCnWj25Hj",
  "key31": "3hYTxEoVDTnj2AR7QDmtJUMozhRmn6jgZKXo3HEoSVnbjF2We6a5W1XSohSJegzaKWQaswD8EHmvs4TEVenvvMy8",
  "key32": "59H6kDZnvMchahNoHiS3u2aCVDLWtB5j3aEFKMDzEVPWRvfJEZPMcsuCermDhgTRFSAQDksYdRid13W4oWyDUtGP",
  "key33": "RQ18QHzHYUCpobXrm5AmLRiFZsknPwMmXumJS4uSH6WAKBCweCkybzQLoUBZfd25hjzmSxsWRVstt1aXBSR7cLx",
  "key34": "bEJ1ubJMqP2WumvC4vZ2Q8LFGNqcUndsdSRVK9jN8nsg23yjQPjYbpc1x73TwdZL7GJjXpeU7ERaaBtYbrFcq7j",
  "key35": "5VMjZXr74LFZQKwzVHNSYBnmyGpQj6kmQWZM36fRFFhWB5ZjnudrW9QMStC2E8BY8RF4EsqTx1i6JRsK9Dc7sTCv",
  "key36": "4pvS8CFhewhumjxsokAsNiD1krD7Qcc3z4obs3Y4zp8Ju9FTBCHbG8VrDh5YXxeTcgv82Hn3V4kaujvs5Lj5Qqud",
  "key37": "bfaNiq4uD3AQ4JGCedeSpsnEfuT87Q9HiKH78SNS6XHi2qhwro19939naE8eZddbTe8sxqAHbycaz9fVQYh7b3y",
  "key38": "4d5k2P1bMDirpEDvtx1U7F9P5WWDKtG9Np1bni2gJSvQasLyRJpsYXagzGN1GH4TzXVDzGHv9S37NUEwGAecixta",
  "key39": "ipkoMkpv92wVbm9888ntT5zgvPFSd42a5S5J7GzPMAP2hY9QJFhzRp3Gaw8aY3SHjhDFt41Jy848UWKecBGfUX7"
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

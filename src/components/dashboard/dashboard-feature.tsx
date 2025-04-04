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
    "5uVMQja5DfwhZy5SBUranYcyUzh6EE7N7GxxwCMdBUGt2LfEfPymRnYWfhh9txw4RJw3M8Gvkdo8tMGA3wfk3A5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nS7J1NtNcnANuYQuFRRhCzHCeaqfymwb6uHX9KicPvqKSeQT6Nz9SFLaY6uMZMFgSq5vq9ErYmf1xZDu731aDp1",
  "key1": "36HujiTJBaRayfgABUmC6zCguRKVtcWT8gXY8FnqJoDLtvjJ5QiebAiDFJCnAxSLcmjzEyxXTKnhuYVFbBxwu44t",
  "key2": "5BjrnHF7udFUcFaqACFoZLQwTeZA5ohzD4TSHkwxST9d2yXbv9L52yC9R9ZPedbNSZCJSD3E5DEz612VNwkHfrTX",
  "key3": "54j6pq16iXpNp1WczEgG2jnmQRTpDax5esPz6RPfjSBRD9zDDEqDfeoueEz5uBKkJUzqsPNkSfjQVgxSA53V7WnK",
  "key4": "2aVvZHu1S4VuvavrHRoVFEwfqXYWRd64LcBFMXegTBNzwns2R28nCMBqniXi9MnMYL6iKE37rDE4BWKGY3ftHNfv",
  "key5": "2ArN4TPsGZs5JeYgnweMgN1Ero89XzYF3mJYFw36WFVA6ZhsHBXNedHc5QoU1mLEBCvrMDhrordM6z4p5ZkTq93m",
  "key6": "3PmesPmduPuuqz3WaUBh14jdduDaek4iNcFExY9jQDS4V6AErtJVY9FtxscXd5e6Lmr8vDn5CQABVNMhYcJsge2D",
  "key7": "4yaQSht3NuUZ9tTmckzvYCf4bafwN4gUsTrxDZELSxe58ni2rEG6U6shho6Yyxtrn5tJjxHtgWMzPBs1FnuxaDst",
  "key8": "2z7Ch5ai6dKtJmurX3eEwh87trwhDLLa3NETCSNDoZ7LnU5YG8XnoVEdHA96Aj8T93e3MdLBst78JuZKykiU1w5G",
  "key9": "gwwpMXjXzbXfuahjYtk8T1LorGaUfAK3moLQcfEMBWdTbvmxfY5qMDa2VxVBR12jrw1XdfD8NhAcfwNpxQZ2Tot",
  "key10": "3Qr6vBxtnA9FLfoKP5qcufCAtBdhu8KMhhwAHFM31J8FzoVg7baNCmdms195TaX5drnNemykixmkt2E2BE53JxKC",
  "key11": "pvNx7n9f1Ey6US94EoM5C9kVfWWqXhW5Z1z53PuYxfi83DBk51ahZhNjkb2Ft6nFWvfw8qmfwmhXQsqoALek5km",
  "key12": "2Jtx9tUUCf1prYtN85LKKPtSKGctGaxzX4FYfDJvPzXfWWspsi4DP8PeFnvnRQVjxmetiAHju5DH5UFHbKRqd4qY",
  "key13": "2EkUyYbNojKYCZaQvULti29y5CZrjyiNceYh2PsRBtZLSuPShpfTABB3FBs4WGbwnx6ysaiV5wLis16inrpTZkT6",
  "key14": "59usDQb4HL2ZNBq8f36RkPqoNZpZkyFpAWeUh7AH1q9VTV5CcxjTFNR5sZ74t5saPwD9WoAq5GhDhAioWEuxWYxc",
  "key15": "UEkbyUagz3ZnMBvp16JsGpAyjeth4bZj5iExH4JVWnxTPETjK1sj4Z3ojhjgvwDJa7tSUGAttsfn6ShTvLP3ccL",
  "key16": "3fRi2nAb4QzLxemMW3vArJ6VeVSfAzjpPMXZTMPJsWhTmbChY9J2jwt7doNHPdnYDs42uwvVi3mUFdVgeDYbq6iV",
  "key17": "5rkoHnhynspc6fiNFXccGvZuTLQhEB1f7c3Lsm2swQkkp3hQZ79thi6YkkCiWw4FqqqUKmPzkQmM5WAckMrhaqfE",
  "key18": "3AeJTQkh58775CZzwRt7MTS8A2gjxGKMjVgNWnF8Njwh4Z6CxA2umrqL4L3LpkyGRehhZUALSSsAULKBeuH8Un8d",
  "key19": "4EC6m6igr7WA4htt3AKkJEDZDyCT5XqN4es3ZsWdm6YdQmGjXDoi5YPnSVeN3D4DF1sNd1iPrCFxNkzQVrnsSVUs",
  "key20": "36wF7254qoHK2EoubWBc7zseCnNzFznQKASvPwdX4nPdhaTLrke5KZcMpRXwDcw68pTGo3PTMLJUyW8f3LKFEKS1",
  "key21": "2zwENKjw45x3JwZWMSWsXDised2XjaLxF14vawFnD4Z4RGFENbiVC4tQubk5MXhADN1oKjFv59hahaAbfnWNRbw5",
  "key22": "3YzE6GC9ZV2oLgSziqhTJJS7LdAuHGAu5Sim6geTbd9XfxkXvZ8TvhtiuQruqkGA2RvRvWH3Rro9qpwTAY5tjdCv",
  "key23": "2FXrGZv7BJKbeJvSt3tBohzkRAHvZ8pQr5461j7Wc26DySpZbd8TpLRFUbaeekEPFbeak5GBxYb2AKBBRz8Bpr5h",
  "key24": "5aR9R1TiZ8FiVWbKjRRjNFtzW3vv6cxMt92pyVtbyR8XS3dtVRJxx9BNgJxVsTmchzDxECib9tnPj2Ur4Y1TAGBr",
  "key25": "3kPtJCUtiiG6Z7dD9Wqd6vfq58HTTYvfyDZHHYxV7G2kHQmZuPaK4ubEHj35fR1G5p6B2AYrNvViSTf3fGaJnQ9Y",
  "key26": "2eRLNXu5SWeSmH7P9Vq8XciPVbERn5UNUGDJqkvVJGV9X7NzCizMBvnKxtQLM7uQAik8eHGdF6xwFdRmCbuAnvfD",
  "key27": "3tJVKGZhNZTTGjCQNr5oudGPnKtdwVU7zrwBBhDKc5iF25gjMj2SKcGy8aiuccaF8qcFSAXp6788JnAFWKDxoqTt",
  "key28": "4gjjcff4VFpTDa9sTrPRSnStB7yG7KPDF3An8hgAzHZdq1xXeY4YcHtRncKdCLJipnbYMzP6sKGiGFVvyCx7DEnP"
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

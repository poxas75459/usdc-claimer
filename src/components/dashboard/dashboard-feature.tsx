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
    "rk2sKKHyXuCz6HUvYnjUBzuQyWNDBmrPpLh1VnWZmJ9BEPnnmDSx7i5LC8ojrpVpMaK8VoFeDaGJYi5yLhgvpNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KV4gxpR3MzLuHmdFQ71Tsm5WvWgGv6VwEHxRzGCnF5K3bhFrxZmicZLNr2YbtXqR4sNeE6Lt8adssu86AJFSDCo",
  "key1": "5kPNngo3HcjoamAommckk6mZuPfdrWU53hp2RM4UUmnEG8vTAxd6qc6rtdqWMxBhwzZdo6SUuhkomL2N4Rm6pcWN",
  "key2": "5GmeWVVeigS4HF8BLYpx1oLhwPhUGRVm5JAAvMPmSWqz4GhSFk1vh5JDEqxSWw9BbrGdQ2FYnEgxUs9VajqTshQR",
  "key3": "5pN8eJC2TM1EA3cgD9KH7ePejwRdJowLSP3feJAdguqhQQvsVKQNs3mxb6b8nW5jSCe5xd4v8GRwFDMjPoQpYMEM",
  "key4": "5EqHQejo52DqwR14kLsnBD8bsVLuWCFqPt6MJiqYupmzPs82Sy53s5s8x4FA7bhpWkTHyzvpgLKNbDJQ6vuFvp2S",
  "key5": "2Lwb8E8No77WMzUusjYrc6TxVF1JU48QqcwwBjXs8AryPDs4ZAtBBBXoNom5fZgsBPpZyMiP9saDGxow1m6N2tYL",
  "key6": "4qx8Rq5NHhVQrZLZz258hCwHCYfPpneh6YAnK67nGKX1e2PDcyFtQu6jrtD46tn9hHPapu6rk5UjXyrQGdaYztdT",
  "key7": "3HakaTskwtfLYMP3PAYsBhmvpCQC1MYvsmxjNaP9VgY2qtKfx5tRrMRmgBk969pTDkbexRg9PNejdi2wQKk3m924",
  "key8": "3PfZsB3YcQ6QrkgFCRxbcT2K2HTbGpGf69RPyomGtgQt1Y76Ht9UhVNzPeEAU84qytJqnFZNfwBPHKMpgcDsC2XC",
  "key9": "678rKJVM492QV1dqVNQuZxCbBWs5muSaKuogCKbGD7qXtbjFzJsPrJ8PYKV2XLPZHiBC5SRdEb8uBTgPGjca7o4T",
  "key10": "GcTQUEs88vpWst7iNi6vFZ2BnVLUV5YwBzD1H7BkVzuppuGVqMAM48igm2VAjQcLddVvJRt4oeErfpMZCvLnJKt",
  "key11": "UL8PW8Dx8xTNWrg652Hi93i3DjLePAgVYiRaMp3N5yaxXngCXo6MGpMUWSTNNqe4c8RADhGzzCEYwNCx93zNojd",
  "key12": "2FWCuvjyzBtW7em8Ppbm6FagfEVnSd9FRv4z8xhtgfYnzkadfQN8TyMNLunD1PFMCTNdNhR5iH6qWg3umJ2apH3x",
  "key13": "5vPFJAYZoNTbDzm5SkSQ1AbDZNA9wuYJsetNFhsB6RfAaT6vz5EEvukZgff8Zy6orXxszSDHcx7KPi4B6ZnZ27zu",
  "key14": "b4sxZYVdPfqPrBJgcn9AEceue7d1bXfiWyEWkZ3WPiTHEuvaZMAgjMFAHKnFJk3ZK628yhVw82EySzt1R9SwFj5",
  "key15": "2tf1s3Wotfi3CtWapRBuA53A7ZVnDzBixqLmovHjgXq1g36R9r814gPtNKVZsSECKPBJg45JzEtmk68tJx92kLvC",
  "key16": "25AhkFf4TDQX2KbjNyUnAzQjRJ2XyMT7hj5TBzqtCez3wvxSjjCvV1e8bfAchmcQkTKJaH6D7B93wMWckkF6vopx",
  "key17": "5qS2rKb8ycJihUeiF1Y3QPi2DzCzUDnVgYuS5n5cYLBNjezZKVb9MskKMA3EmDzeMx4SHmLAdo1E5jwzrn7BphcG",
  "key18": "3xxWHMyKeY3v8h2TrwZ7ZfvVXYAWpxrkpuoQmp8JCQbLHXdjzHmJk3WqXayqPQL9ZnrvYx574FgfVpYNj6XtgEtf",
  "key19": "3sCEZiocYSQ7sWqQjby2Rv6W5PFhmqkx5FyuT8JdGSXb4G4mH6dKzpNULHdwQAmKs8KkY25oMtBHmQ5aDHDtBhgP",
  "key20": "4YNZjsoGmjBpVHBxy9B6e9n2wjMPvEF1QjPsjQ1d1pMz89Y3EfKybSjEvozcFvGZjmJ96MRSVnPHWqZzjkafSjFP",
  "key21": "2S7khRjakztM8MjGYXSr267gYVb2Y3z2yHJrC38R5ykoWjYk5F7niYPSfGRNZza5h9DK1mKRJnAD9NyKUqx5rZcd",
  "key22": "iTxR8vJXLeW8ws6boVPPavqmRGKVwEpdy9rk1RcebaG6SdNPP5HA6h9s33x6fMH19JH7wiRBUnZoKzY6Wqxu2kk",
  "key23": "4aa4guZvnDBEp4j8R1Hm1DCLU4UXu1XgAbGTEGR8hgJNpLxwVsyPPYBCb1Ta6ibBEQpuAyJtaZf1rakzyUHFciJh",
  "key24": "8jnQmrcM8fiNDYbJ139nNcrPQ1JxciaQra2RnbKZqHXbH8r2KtUqW22tyyUyUiZGqotmoEka61FDgFb29qHxcCQ",
  "key25": "4d1hjfma1WVymoTvJMFN2nc6JDwTVLW4yvWy9S3VPB7AXS2MUXsBVfVjNqWfjZDTRaiyac23fTBZDYS244ph57wh",
  "key26": "4PZMdjqPTSLLeMwgRFSbrrxgtDZqbYAGitwdNimyNgU6qXH2X2Bypvaqcexh47WinDu8KrThKPPKAtyJnhDVKHiV",
  "key27": "46aypYbXUt5PhiYY7Xdm7PcFs9oNwFFUvZ4XBDgHYkvKQGbnPpo55fpqxRmxEhduTkZmqHmt9ymNQMLadSTBox5"
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

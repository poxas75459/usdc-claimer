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
    "MkxWW7aGTPW4SyiZ1uEyPhdgbSk2DXejzpoppBzcqMTKg9DmbH5wfsa2FZYJkhCSa4ZYQoPhfBC797yruFj4mCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22o7sohoG71DA3nkc59wKGPvUNUeTACh44H1NgbapQctku32Paq9MBzeyVmzVh9A6H8tYAhoew2ofcCAmwafH9CN",
  "key1": "42dz2XoWagn5rKJ8GBxYiKcRWhpjjF6uAD7NJ92LK9oG8kzY4XqkjqwLYbNQLZZi2ppEnzXXRQwGpis824LwFC8N",
  "key2": "4sw5PWZ7p5Wqedh6qLGe8UbydNs5wQFUMMtk2kEY1KscL4J6RVtQ4tkZGYcojE1PFqeW6EDxFbairNHkuNE8YnfG",
  "key3": "5YmKfayfQvNou99nb6MFa1YedK9QEb4MyfbwWPqfurAySbr6hQ3AyrRBEgB4HEcoer7CHKmEDD3LPwxmamz1H2id",
  "key4": "2Hh7xtTKTXykvd5ma9fLhif47A5oxGoEjijsFgVGtQsvjUnuMRbkXasA7rtq8DtbX839zNunMHUWGiAqj1r1h9fk",
  "key5": "Drba8JRmKxouJgBed4YPZq3CaNFnFgfpiSCFmsg5XWmQubHAs1uhR6FNz8Ehsu3C7LrA8qXuRXvkpwhKD5NySpJ",
  "key6": "32GuELeDGM2s1rLGygtY32sXyhtjZFVFDHNDARJthFABeY4kyFYXnn95JnstapXf2JGcxtULj5zuRV5PKGWrvCRt",
  "key7": "2JdpKixNVNhPoQkTW6aKGFVCmbG6cJFQjugvp5RCZpjTudwq9L9wRcKTzAgJ2QLnTuVeJEFDV598QGchhDb1o55",
  "key8": "4VyqJ6r6PL4A4PWbyHNHTBWGmxV8GZcUL7JESgg1MbAthjTqTdHauDkksgGA9fKMTyarvn9ghy8mD5DvafKg2sQQ",
  "key9": "5Qny9UgGsp3CeNiF6rJUcLNHa6qK28nVMf4duC1EPweQ7WdpGffWJWUV5qp3RCqFFonU7Szws5DqfzsgCBJDxgo6",
  "key10": "5avACvVpkrZH8PuaipoCz4APVfQkxTPLbrRzi1D3YFZvRVH8eVFGzNEVioshGnEJBZRNgA3Ufcv2ir9PqfKa2T1L",
  "key11": "CMHQuZUHnxsjNSu4tjqPjK6Vfa8Z9uFuiuT2U4DWkEgaYBFQfncMrutjmmTtuHiB2j1S6ibVDU9y1BLhTvy48ho",
  "key12": "48ihPDKFfKPBi2pxhBcqu1pwSAz96F3qecsyahE82iGRfMpTp7kLGmNMxFbvRXb1qM4PCnwH96Q7Tqtu2TjdMMTV",
  "key13": "3rXEMwoSAg7txCbByiZNYvn8BfBfEp2pqBdn8ERqbdBBioyh4z4r7UduL75QEmcET9iJnsk9xk2SiQt7zQdh6uhg",
  "key14": "4ewzsfdJbMvs9jWD9XjFN215m1Wv4NRmj6jUigQViURhJB5gWr9QEJPLbHiuDLtnqVqiu55NT5Nym9zyBQwm9YQA",
  "key15": "4R88FZzAAE5h6Amed6wA146TQCd4HzzV4AiUyUCDwLjhKd37cuHpsRCuXz1PBeyEFQRVapr1vmuv9jVFXzpfJSWS",
  "key16": "2oGvoEy3WMkoZ75uWKL2cdDXJXsTmAN6rq4DVYiippnGzBKkfuLegPuLk6ovDrEqb5o9rpKUmkchYJckHE328JMd",
  "key17": "5QvFsyZDkrRCcgDk5DsSdriQo7LuZPaRvarNLqPfvhgrF4H1JS6U5y1wQoKXbmoqeEEoZhwDL6oC1Fqc5Gs13iL5",
  "key18": "mq2JutCyq6NG3TGzBc2jgNhZCvY1PzhLCFJb7YFpRjLxAFHPPRErhcgP98Mxj8k3V2nMgs6HXgurBbbkFBm6taB",
  "key19": "4RjzxnzCsALKdXcoXLC38gEUzpefE7F6ra3cZ9AmL1mv6VXLCjfMmYEhf9ARx7VYr1UMWa4uFPN2zSyN5eGrcfyR",
  "key20": "5e1xs8iJ3sstMtT5HYSALv7YoPc2W6P2wshxM7QfKgxrUa4YuA1Nyzi97CHSwc3EC1eYFesYQi7wzPVCT1YP4CL5",
  "key21": "2BRYtMM7Dq87TDNnrUL4fmdN3m2k54rNM7YM9Xmmvky4yhKdCLrHjuTHte7hfELA2SwE5egUisc3qqwV8jpTHPWt",
  "key22": "47LviXnod6y45V2tcgT3Up6ufkDqXTRV1w6mcBYpiyaxtRBGYnwLvX1Hnf3sAp9osc1bMnkb5YYQfyFu2BF1hAzj",
  "key23": "2xZHP2mvWqi1AcABnkQvpXJZErbJBprkaEgG8NyhRSHVGcNNfAT2sHEiFhvBYdqZPFgGgLJyZuBdBi2hXFQ9B61R",
  "key24": "5UfiRQwQHNFJiHuFQ5G657FBhT6oSRLZAHtLFB1c8NMEEkpLTJKmtJHAhEzo7DkpVeqnHaAEzu1yipXM4kJtMgpC",
  "key25": "39LbBrURf3rS2AFEp8FU1yktGvcJRMFDVeqaTLJzxbuia4NLHiAvJBcEcDKZhQVDh5DJ19t5ofT8yaZswHpcvTxa",
  "key26": "38eTaUj5KGMTN7hyRtWse4iYsZUyPbktronxn8VfLtcPMVj6KSsKyqEH58nixZ5AHu1oKtZ579wrbAWZpa2ZXmp3"
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

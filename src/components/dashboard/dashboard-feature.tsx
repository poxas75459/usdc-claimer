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
    "YRmzfYfAjXXDBWqA9FG9HSrwqvwuCbBjYmMeMwhZJiQ9YRSTCjnW9SRfMw2HC9izpwcv73V4UP7F4xPq66h5y9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ShdzjybXY9LkbAZKhHf4RBft2vFLQ8dpTT75oW8KNpXaQm4vgDAX5q9NkZwgag14x51DEG4qsdxTZz8gcXKMdF6",
  "key1": "pbw7nVNBXGLj2AsXqFDWcVosWZb3ZdRZb9LnYpcHijGaA9coNRs2pTS4B1wH4edZGsPbEp4gLQhpmGmnWzdSCtn",
  "key2": "3cWA8jeibwPHfyMUBNW2tsxToJsnEBbb3VbFef1Zx2CMGGMGHeGkJch2JfVhCRfudeknWYo3EqZYr3cYpwwZAuNp",
  "key3": "iZZDY9t1EBAxDQvRbZeWaiainfqyqkFt4bucT2h6yU1a3kZnLrrsFKdgJ1XFwWBL9kzb8na9zXyRurnxGGUVt8v",
  "key4": "2uUP7LN1V6G2dksDJUHfM24hf6kAXyyAfycKtruVkGnq1f9Ze29K925DzSSDaiKcMvF9tTD9kE2pshbcB3Dspx2e",
  "key5": "2pKwALBSj4s4asmSVJox5baQCgqvNVCT3GZKjGeZfC1yhStzRx3td12t4nkv2gx5tuD1UjTY5fuNcpwngG3h881m",
  "key6": "2eQo1Ty6WwLfAHa5Va8rtH62Rd5obBfoCEtjXcuwF5jJnhomgeCdXrYvBDyaN9YkbfQKwQsqSWNdESB4NaPbLixZ",
  "key7": "3bZskAXbAUczVBUh3HVShpgSB1Nqa94L5nHtbrRTm2fM3dG9jGyanArH8potnYzfBQs71ot7nPTGsWVSuveCJpuy",
  "key8": "nuotK6DqnJfXHoMVdW6EVy6eHa1R9aujDGQ2Fp2kvZVkbNH8LgdvtR4hmrxuNuxN4PHBinPKPaPmpx6U33pNx5b",
  "key9": "2B4F5CtBTZ3ye1nbvamrnSnREs3XqxzUrYyoV4sXqW9aLu6VHSZ2B5AgkxVB4dpGVCMc5ZKnNggBBSHY6Jc5kzFm",
  "key10": "2RSJb1m6Bjv7TgpS2MPeD1sUQZrKRv3h6dpDdrpr1iX53xexQcdUYsyVLr23RPXrks71gjCfnkJ4EkSB5Ga4uukE",
  "key11": "5jPgrQGdcv4aZgEihF73r7A459mz4cFmtL8gkYBtxhQni7Lw9Asd3eMgM2KzRtgF44Y2NwDUnBnRgStPGHvT5xWF",
  "key12": "SpL5b9aFNkNqaTwjXfBZdmJmUxpR1h44aag1QA5hqvbKyb2SEgUHoN7hivkBLvWYWHNk8Rzb86gto32GjdWxEyf",
  "key13": "5cAd3C9tv7EfUmN5jcMcN3YNnqPcN5ojxtP5rTbpgygt3xtpGZvpKPde4y2MEsZ3ZixkZGBrLZ3CUH6dfRf889jo",
  "key14": "3taQoV4YUi9EkyfTy5qgSaKtfVFcpdgttYbW2ENLSQUXQgiBbPHDL6WayZGyFdL1igxW46At8GCM6cTgpmcURwyg",
  "key15": "4CA1s4LSmaybEmWQ8J13rhRN4B48xkL8FEWytgHStQ4SjinxvL1PnTLpmyjED5yQDbb44TdfgZYY9FDDhmhGzgs8",
  "key16": "4UyjZGgGHd1wKxkmzi7oh7a1Y8tcpp6CQTHg2dU9Buub65BVMMLEyfLQPVhKSAtYDMyKmRCiq7imXwwDYcdNUffS",
  "key17": "2uZjjB9qKd4nJDxPwYjx9eLJ5NUt9utCv952iWzkGLfWWAaRPhKx9kJgVux1WahGaVxnNgvzsB2T1GC8dKNsdSxs",
  "key18": "3rJi7RQt6EFmFmdd1W441azyy1aWFXDznKu4nhgLDZbjYkvHJGTXd9NCDkpWbhbyyfrjNgLTVCa2wK9upR4Lzusr",
  "key19": "4zo3sMc49nwLTahgpzDjtKYffJZgjeCnNQNSEf1vcyHF8DT5HLDQUAwVXefzB6vUKp9RuXFwsi2KN2c4f3pCrkxf",
  "key20": "4sAqW38MR25CKRjSwGfpw5RRHQp6v747oVL7vhbVjQ4TMjqoRpBxXVkXRxxYZbEmPLkGyM8NuH5VkFCjBfBH5wRs",
  "key21": "3ss9NeQdYfNrYSm7e6cSo5HquZniDjjAKpYqGTq4YPsE1sCRopd6LDmGZmzgpLJ7z8vs2c7p5iBaxgZPfRFQui7m",
  "key22": "fQagS6T1HSNQyFeoTaLgVYikA89JaKvvEMSyhM1kPyLcnJAwNK6he6rabHuZSnK47TUkmrK6WjykBc65LBxhD5P",
  "key23": "3xLAQcQK1AabG68p2ifDSymPtbcMEkNtwGA7zZiQsDq4doU8aS7oXYRqvGG1kK4U6ZAEsMYApSuEviGEdLMFKNk",
  "key24": "4ga9WbR1sKXaQFDVBKKxu1yghbp9DBGaGdy58Funp1RGNXZmGiok1ERmpxAngiDLhGSdKiLTDYrSL9buRKSyBXFb",
  "key25": "3hefkenM4HCfVZN6ch1cAZxaVeG7k2XXDKhDk5GPVQ5cpJxzyNAu2Bk9aXwAT74oHp8vob6U97TYj5q66xD6ss2s",
  "key26": "2WPcZGHtmH7q5bvxWtRWPHPw7rQ2MnfJaDwLGadNj8BLxAPpZsKVHvJKoQL4xcHSsB5DptrQ6zdoyMNMyg3G59pj",
  "key27": "5jff2sN9MuoChSKkmmW4z8w7e6F6WQCHx9YQXLxpD1tHoKa7xqe1JM7oKQJYNYsqJzJNCfw1u9oiLxeTudP27prP",
  "key28": "5g43jxvveNtnXSj4rCPDFg5h1ita4n87HgJXtUnsHovaHUZ8rMFxyAEr9Sowrp6UhDpErdWQR3brAwqWufKALBSi"
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

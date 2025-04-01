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
    "q4H9THT2rA9vX1FRZvWCQ3oEAbcn41syKnM4571PuN8EHqjQSpfW9TtadaHUeFSLvgcoDEkpV4oY4VrwezV9e4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKv7FNFTEWofPFxpgtRm5UqwcuGSogdfqBGupXtA4Q4squRVFg2PR5q6jddYWTi6fw2RuUcX4hw4ac2ERZVYWFW",
  "key1": "3kPbkNtWPz2YjF9m8Pujq3vYWbfTsyRQBZddqcvXr5ZTTqkbfuJ9fxHfExFQdQZRqWPEQFmjQa7ZPp5tQcQYVcsE",
  "key2": "3K4VASuFSLVCKYtVw4Pgy6NYS9EvVY2HxS43aZXKMneWcCa2qNR3CmEs4mQnzBnKXukJyMBj19qiNrvaTzBHqGuQ",
  "key3": "66Pr7GWKKzsQompLXZRcCtLqXbmH2eXEija6AhXuWZPF5yVCjWvivNLRHn1CFVUQ9obm8V46iBivLn5R6Cp2ZH3r",
  "key4": "4WPsr28odFZPCyEJEGGqCtJ7YRgTbkL4mWSvkPqhHZMUYXoEQfBLPjJXbTwN1PEqv3iyxtVVi2mrvEQU8VrXZQrT",
  "key5": "fQbBYhDARiRSx1pnphx23kq8ET5cDj43tPNYVMiop7EudGQFZ7MoZzdNcEvp795Bjs1mP7CVpW9Pk7VqoYyxn9g",
  "key6": "5rY2hmwaSop6gH32JrdXWeU5s6huQ495oH7CCvCFJgvqnYeKAivjniGviuQvxMmjDWtBHQWu6J6m5cyfwShtSj6z",
  "key7": "674a72ocgAfJFutax9auHTrQ1iftBgBSf3gaheFCUhHm2bXqLiGybuGt6Gv5MTS2g9koNQz1r1wpCuaGTyhzTppi",
  "key8": "3ATxzPhhZH4JqSaNyR5waKG7JAUz5tQSshpxDJi2m7aa1nWB8czd43SP3FveFbE18PNic8px1au6esYbRLTX2eya",
  "key9": "4qdbfZFuSoEmbrj3DeuNW5xh8PNaE5vf2qmMi3wb8RbB1xjerd8joMgz8NymRUZztAYgtHUYmjDRCHV8tMW39cAb",
  "key10": "56WPPWWGnRiVg3kke19fMP1ovsk2bytt4qrBjseJAfzjEFKCCJgpJ5GeHJP64BBiDS3Hn6MfXrhmq2cKqH1eMaU8",
  "key11": "3svEX6uwo3dcZ28eW578HKejxRySrdyNVbNmXdqQ1x4dZCEfuXUp9WWrNEPd1crKDYN3GpQhhj9xBDjrn1KFZRcL",
  "key12": "3cqvdSA3WdtD895bMFsa4VvAHYZv6FfewWSv9C4WxLzPdxkmF8MwtJAYMTH94yWbQAFXsP5UQULrYHoaWts29d2W",
  "key13": "2JV5EQ9i2cH8fCrLXFC1ESwJiGkYCY3QNUhau5vGYGCBjPTiynTiGU9nXiBWCfj8vq2ZWUUhSJ8j6KSix7rHHBuA",
  "key14": "wGyH5RgpPjwFiB5d5ppuUNzJMd31F6Mr4UccTDWkoa35d9pVuDoUtgSDpgo3jFh4aTeekg1buCb3qJez3em3mGt",
  "key15": "4VGFWHtdbc27FRe6bNJUtxasR6Npa21ozQUGWQ7wj7oubHqPKy7h8sNBwdwZhGC5HkbaTrJjqt8EVCEhT8xewmMC",
  "key16": "3zV6KUV1ZcBa98dAXrnDr4VGiog1YtdCuVeXzRX4zVx4cXkHXcyYjxoBNHZd4uYhqP3SD7KNGARNoGHKvwpADKhn",
  "key17": "2wmhZgco8P9SRnf4a6CwvWTmYXDBnHR1ZDkwb1gfdPkrsP6BUr9cJSYkXMr9itguMiDaqCutWicAHQ8JNeKWah6V",
  "key18": "2JgWrKqAauF8i8tUZcBT54FBMYdRhX9ncEUjMJgCbFoLzecLSSSdr3vw2sRLx6LP4v47tFsSJV3aGUXEcYwscn23",
  "key19": "5LXuoRBqqxuKiamj9d6ToY85QkPQZmVE4UJKxiMTQVYHWWP3MwqoUML1yktLammbeG21D2KAwmnqoVK85bgTbB2M",
  "key20": "Gwe6cptxHXV8m9SySuxhDkJd4VngdgjLJpcpbBJJ85hvRTcWK4KnR5XuyXDkurSEUZ4A9wiH96CUuYHeircznYx",
  "key21": "4P2bXKpKdHAYbPPoYRqsgqVTfcEH9qS5c2bMwvaDV9HiooDqP7WrvkktZVweSrYFX6jnJnMSDn6SXBknzwvPREqv",
  "key22": "552t4KYL95LP1uLHYy28wSS57WEsieB4G9yrt2MoR5jRaNedG2V1M5CDwkHiZ7GDx23xJ5WN1xeMuSSnd9tDQC9n",
  "key23": "53jigRjnT6ggyEbTjXKs6EpGeZm9YgrHjGVrDJR1AxLC9Kcn2ULrCKCBreTP7xGjdMZUGftbQGyku1kjb9jbyo8m",
  "key24": "286pVztPaTRPj8hninoFRAoTHp6JrKne6ZCwgiFt7Y1VZFQZ4JvmtK7Vwt1K6n6gCaSybFMv1xHvKSPqJ5HP2k5q",
  "key25": "jt9qSNngJoXMunU53hMHoYUHxtDwszt5rN1NZfAw2ZdpXCn7Gf7M5eJuoLiDLEUii58A297Fj49tre5UUToPa9u",
  "key26": "4Wm2VUcT2UFRM6znfZq3doHBxpXaRk9SFYVqPhUAKL2QE6xKy5TUQjBjXnm1cDYC6jgj7q2oHPWT18EA7RtiLdpq",
  "key27": "2hm8hMrf6sd7vmpRXnUqAhXcwNBDVWSx1wth979R1tWk1TijFACUEGKtCWo6DMsMbneQ4ZVJ2MVu3U2A1M8HC3ra"
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

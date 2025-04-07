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
    "4BZyCA9SYphE1M4wrJh14KrjHHT1sYPRYxaDWeT4HeEFVwAkTiCsp9i5Bcm32WKSskjKULAqD67kXyLBAiaGN8PH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3doqiqRH3kKmRxcKcWjSAPvqVtgAzCAkiRH8VhDJgYv2u4Q2FPuce1AXpaD8kyTeTTceWiAkgiTw8KYfy2BJn1PT",
  "key1": "5ucQc3zUsS1YYHA4UuKDLLs4PHMbk46wsdBXoKieT43ZK8xws7x2WiH4KwUQepMf85BEvTEsQ79aEmfZM7PDRXPk",
  "key2": "2RhukYeSYQdbEqgLSXJAxjvB93mE4JqaatkkjDzpnMo5weTnTVUs8Z5F4sc6K7FswFAUDSpi49Ld1YWwbJ61WsAS",
  "key3": "8WVhaqWdNCHZLJCV6SvwEYYLqyFZM4nFwGFxkK1znof8zpXGWvot2KGJA8tzxXSnH8F1U7yFe5VUtnjDJz1NLFV",
  "key4": "Z27Yc4rPvBu1TpYBAo55wzvoAestimizVUcUAunEze6Svnad7dio7ScjML2Z2yjLBLpNT7NDxuzSZPum3Dkr1oS",
  "key5": "AeofkUzeNfis3S8kqaPwVoyRCX6YQfmgDvqifyW3RmbSAB9Rq84C8boozY5PRYT3zgMaSgjbB2eU4iwhaf7r6Rx",
  "key6": "pG4bCLVzaUscH9LEKsiDAfEW2V3M6KPjwT4vcWLQodPu2St3oHmzxUNkjEgPtE6HokCeBfSEZYvkWE6qYWjz15W",
  "key7": "5hwNN2DAWdUz9qrwCGrbGkPDjNXBKGhgd4NCFfADsSTpwTZArdhAyYvzh5tMPGiuqh4sZWWj5s3bzjg8kvFkK7SH",
  "key8": "2Z2Q61iXooHsfeMbsupiCcM5kzHBgWMU4YWkiWqkKz8zLdHnECLywWCnxN79CaPMm2FHUVr8bmmCKp8U3n3ZmtUr",
  "key9": "ANiK7DMtRwsQ2LmoGFKQ5cRZYwMzrUyJVHfdeGgdPaSEXWLdxQBm9XXtzQevNNgiGKmYMEA1FH6UUN6tUpjzbs4",
  "key10": "4oGUYm3yTzaodhcC82J4eHe6Zmch36ZP6JoYKiPiT7czWUqEr8iuFdaCFXrtNRxRrSu64xWv36aEs7FZnpLLbAmx",
  "key11": "4wFiUfbnM2SwvgRzagTkBtcZSf6a41Yyy6G4ECaos6KGQEJ8djshri9fgWLQ6MEgUjvXpmtpt4dykStRBoTWLd9c",
  "key12": "2f3yE7qHTtt1zepqNRFPkZPdXHjvt9vbQ7RmXPdSLwEYsLWLWDtLSFjmG59FbS1f5z1XjZNoLRzzaw8JbExi9Eyx",
  "key13": "5mycJSXMNi5bnFVWZg9WfHg69HdFA6sfgJ99RXgni5MfWJJ1MncR3oe4zXMUpnDTywS1k1ChvPfXZvYMUWaDhaFJ",
  "key14": "3QmCdiPgRtuhTBYxeeXRB8R967BDoyWiGG7jdTUhdvCg9VcE36jbDduG73f6t7L7ie2qVtng6tay91LnToZEUjPc",
  "key15": "2AkGdZdr8VckzK8zrE17gp3ErGieSaLQcSvRGrRYQmxoNd1woDDYkthcNJ8h15tmvPY3vaNK6i8vUggDyD9Q5mW7",
  "key16": "4ctvfGRt4rTJmK1FCgPgXgktnYPhYcEUTi1NoPUprDCF9JKiqSnzpekG3gTVWGQBnYS6zJ9hq2mq2inHEG1jRstY",
  "key17": "4nXrRMGXvS4UaSvo86mu9RCeGtfdJhSz7cno41U3kX37DPr9vb1ZgGxYJNijyEzTfYbVNd8VPYEFo7serLi4fwhm",
  "key18": "He9aSSZKZQsQWy3oW9w2g8ym4WwrENPYBSVnRBsB35WPCJrtAcrR83Xi6mhTfY7wkqDhWfNhEQyTZfwZub8ieUJ",
  "key19": "2RzmSutZtLjMoVZgfQXJPzuw8PV7xBYcHpzRW7eLM8z6gSnDHw5Wh8cMyMZivyMAf87GrMRDnA6SHeywm7agVse3",
  "key20": "3m8EkJHKa2joAtTb8Wk69rw9oxRF9MVrPogubxJbetEuYFu1evABcd6RpAdAVPpmRnvQAoUJ8ti6D1ZrsjeFo38s",
  "key21": "Hu892CNCDeQy8yQk7nVXYDESMA9kAYzc5Y7XJfQfSwTEPpYxGKdiD6gKsBvTQMRcNntu9FKoRW2Dc34GkMdB5Ap",
  "key22": "2cWpLcs5E4gtHGjPaTsFsscRwWfgmxUBtoaUAQzbTJ7dHjCg8Fmu3fZ2xvTST4R45QcYoz6snc9sAdLMYX2pC9C3",
  "key23": "3cuE19ABDaYkUD1wTKXHEvXAVi6QYmXTAZ79R9HGqsh5nMe9Bd1M4jonFZLh2TgFHj9pYkjuoQJ8tsEWHzYxWzPh",
  "key24": "2PhKEmTicR9YmM9Fb9hhfjsRDCTuqLMzTjkWJ65u64oZk85Es5xG5areFHrRYmYcFqzmM5jHiEHrzQziuCAbimPJ",
  "key25": "3zPrgfvKaKpHoTe61F7goE4a1PhvHA1AqTYZYfGBnhvEiCfD8NeGtp8DLbiWCUEGRZCt1sACgUbhVLsNxvp2oHKx"
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

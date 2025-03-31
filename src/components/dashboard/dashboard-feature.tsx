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
    "e854eamANQJj2oCQzaLwEepb7aiDZFv8zqnqKuN2rzRnjTPaNrxNNg6iAbsZ5gNfkQmmVVzMiiNdnNu3St7wwkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x7r6sd7T7qhD3K2gSMBxhFRLLyiK2pdBHCthEXWr18RYUPmJpxQQZLSqBQSi19JZmt2YdD6JZQDCS54eumFtRoL",
  "key1": "3BjLnsRpvduiUzAtE98LCKX9JpSVzcTfZiYweKikCemQX9RVsubXsiMYgSqk8uVmkidCZPrfuksutyMaPK1YVnpU",
  "key2": "qTXWBV1UCccMzWz4rRKoHgzb9ZJhTyp4gDsexH95vMEf9Cf4CtsABv8eb2XssWzcFWYnseMXLA8TZYXYr4WsKWh",
  "key3": "4T2REbQTTNz92ThKRNPE8BxrB95kreB26hyPM3NoafbcFKmmdnQih1YwNfU9GBrnFFViSCmv4Y26inXixwjs6HLV",
  "key4": "3MUi5Qe19G5akdDnv25MtAHZRhuqJZpYZ1Q9DvNGGgYxcATT3224jJrWuNJUCXLdMp8puuEovzyW6SxQSosYQe11",
  "key5": "65pYPWUUxmEL9V8kFBKrvcCLhuddxmGgAVupN6dF2jmFk2VdwTwv9KPsAAiWXJAPD5vsA6UGZk8SSNwEHyi1jWph",
  "key6": "2C5Tn8qUisMorygnn1NmB3cHNWi6tpMqizvuzwmx541nHLsYyAB1sDaecgbqNbR4SiXCUSDkJaCjBBWLYq1kEHiJ",
  "key7": "5PMWUj7dx9hde1o2vD93vvqUrs31yWJGTQ5FR78kJVjs7ELN3in3GoSdkzNtdxQG3vTmVG1bFU7rQGmLWUyzAgwQ",
  "key8": "4Gaj9UYMX2dd6n8LQNJbdX28YpyhS8mNYgMymFvs36DQq29ZyKGsY3gLntATuUQy2a9fXKDM2fwtWC4XoJWAqsGf",
  "key9": "5xzqUjMPmwV3CxFaG9UjEB3fk7Qr695YCX44wUf5wPXJ8nkVvMcfJius6tamqtxwFx8NHCdVpE8aJEo2sCqP8a2K",
  "key10": "2uW827ZXUZDgvnaivoWQiud2HUp6mbKFFA39QShFVCYNVBMw9yK71NKCAMdfxicRHwgNkXPRUu8QTdQddwqaHMLj",
  "key11": "3W9jZA7ECCcMpm3VW3gz9qDtpTafBXJ3oiGgxg77M6RDv9ePsnapCdi9KxbZJ19hf5eBncENci9v9S33AexQJZBD",
  "key12": "k7fVqRZzrq4rpK4qvqKXLQfSsE8vvcgGJYrWtmf2hbJDd4NfcQP46CumFGkhC6jPMVjx39CMC9pHNjFnomu8bB6",
  "key13": "62w77Z2JDiqzuQKTQk3o1Q59ykSXus1nfnVyA3b12duNv6r3TQkWaZwFfsNd8YbKkjMJz9UkgWS1vxrZXQZr1duq",
  "key14": "3sJDeoKPhNtyhTU4hazqbhtSo3diebFbeGnyEUv3KaV6oSGYEFiaCnwZH4uo5PL3EF1BaoayKYpiKfSDK64gSNFx",
  "key15": "5Vjqm68opXEx7b6C2QTz6acQSWzRJucWYVRsPQQE1vnUG4qNZGJpxaAnVY9JoaSRrAwYhHia4vjop18BGANDLcki",
  "key16": "2AcTFe8sySiSCjzs7YgmW86jjScjPCzUmquf5vwnrtJLQiRHcbVWe5GqAqrEx4W1GJZPHKL1LfQwVrEYsRzvBLKc",
  "key17": "3CFtG2CkVXnb7S4NSdh2uyxtNVFEd1wrtVxaJtx6YzaFtrFAhMaTRo8s8w1VCjNfvgax81m5wQoHSmipj6rrYa4W",
  "key18": "4EtTVn662z8fCTpFL9PERWT3q41ciaq1X9rXywpdzSG23mePyt19R8GQ3g3hdHgN7jnT7PnZ41REgCSkoMr4VjHt",
  "key19": "48gNnegYvJ8rWv91mMNbmU5vvtm4hbAoNmBUkikw588KfLeCKaL6BrsuBNhP664NfztmRQdCNWN4WGkHrS9U7j7w",
  "key20": "3YtGoWgpEZDFNbHsD3NhNyKhqXLoNBvYuKgfNo3HrNyejhfhawMK7Ag4bbBShK9e5Q1wSFQYWodKpUTcCJyUrtuB",
  "key21": "5iAHue7z3NHZnFejDzmAX6G2u2Gk6dBp9jJXsGkz4VBs1cAtbvHjyp1fFvBBWMCNqGVFsbGDNfAfyGCKHrW1YYah",
  "key22": "4fiN4HikFTFjitJVMVtMQCthTXFtG35as7rtRNWaH3PMf7unRqiwarmuHk41ZYqGzXBDRSkwPpBdV5dC5xU6iQDD",
  "key23": "4iHpnG8hbds3RXhgPdE4Trg6TtFHGvsy485dEeRR4DG23UDdZKQGDaheBoM3QUFiZS66p1XLDoo9PY7FrExciiXW",
  "key24": "2QHf7hLY779zk6EUn2uuTZoW8nm6McNTMPzBio1Uoj6SzyKpYpbT9rbYEstrRmPj1infnfRkWjQMeQaXDtj7Myrh",
  "key25": "3QxaNmaQB1cE2AKqVGBnf3DX1bZ7PcdqhzPWsReUtqZgtp4WL6E7SFH1KRvy324RyFDHEfnQwrdEfB7pGXFoaSDA",
  "key26": "29c4h5n6SwerDfxwjiTPkQn5Qzi4n1eLgAgf7jBFZKVGg4M6uGmx8M8zt5mtjAPK85LfwX1ACji9ts89L5WiPMj9",
  "key27": "386Av6PgFF6F51oVU6415FQXMZHtnvU1GB4Va3xBu4By1VxQ3auudnY7SUPbkyfYghyhKizBzFD98UcRPG3TdP1B",
  "key28": "4fYYyv9zxqCUzYqVfTwUxHa659eQQVdLKtdfAmryiRDaUoMXyGi1BshGQcd6MR4RyaeMznhaNxgBcjrL21EjYcx",
  "key29": "48Dm5jXHLC5VD9gSfRXRMBMfB2ENtBBV95U6CZTxWKNw2bJ2AyQzjnoKhR8FnqSzEERZ6E7rWAhnWQEqBxcVTxs",
  "key30": "2Q3oRn5SSzG68zZ5GL4nJUnKsr9jreXPUZFy8NoXdwMhxbHYkbns132uWt1dbR2F3Evd3xrjXkHypQrGE75PoY8X",
  "key31": "5Mz7bCLifx4Tp82m8djC98TsJLGNANWY7Vwd3knHCTZGVhHqY1Jc675jK8tFx9Ga3r5eNhJ7WrEr6gbPib8SAcAW",
  "key32": "2dzhsTWLxA5JE2yACuj2jVcptagdErE1CJBvwWjiV8no77UU1sEcH5XumzFwdMN3KyEYfRp1EU7S4NujfVbmx4vi",
  "key33": "adXaNbjsJMEUxm9UbAW5GQ8koxs5tvrLvGGmVDDeg4fTCJJupaHEr2rnoZuzR7JuQkqwZ1Xjzqx5zkudDfjSBnU",
  "key34": "KSuSi8ZmrtqUo7Hc24xxtNLq1rKn8gbpnrVWFLgpusWtNk2uiBU18jCMghZgGA59F235DKRZfZpSHmVETfhXmjQ",
  "key35": "45cucXFrM3MWsVbR2YVCUSyY6vj9JoGYx1abw1r4hohHDMqAFWBib88T8ZZe3HHh4GxistLP5XYkZStoEbvA2YKZ",
  "key36": "3sEmrHPUkW5r97dspGGjqWsx3CfiabAdrbEUZzNKwaXoAn48qyh4kHiSTk6eZv5svuKomYyDUBoYg1o95gNDiAN4",
  "key37": "66QvrQ4Ly2MVBGnFQLGNBN3c1xjJVQ4LuqSjh5dZSyvBwCsQ79WwhQgGk5cAGdQPYM3vJYhDhYszQCc9TFHjMGnq",
  "key38": "2d374HebPAsoJyJJSwZrDkcy4ripjFgBYKzun2yuJ828kEY6C2wLMXus8gQCidwhE54ei45omjQckCEKZEd2PRse",
  "key39": "5ktpZM8zkg91MLGfhGQQJUvcgieTpmPH146MutHXukoZCuxWT2BbEsQrYkMamGc7kQEr8iTU3baq2W8eoLKzpWg9"
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

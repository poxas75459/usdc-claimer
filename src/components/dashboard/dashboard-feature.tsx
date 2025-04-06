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
    "65gqZGSDCrdw1D71j9kKttrvVa7rztb2PQ9Mo5AUoLdL7tuaYhQfLn6Xw77URmsdMogfV66tijc3eqbTrrefWHfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pvkncsgetNWr29A1NDwELsAKyAsKsVBMTJG6fnMcyvt1CZdHMNeiehXkyBScLcw2U21NagjozkBwATfGCxxfu32",
  "key1": "mK3h4rxi3e86enrNv3iFS1bHwpmkjoSpTx1mXmYXPdLqpDuLKAcE1LHhfEYnuWBdLLJ28Vu1MMNnpywF7RGCBrj",
  "key2": "4DYPt3h2w4Ua4sqFEY4Zm4EfAmXHiu7kTGGgm2PA62UJptCFJN3Gzud2io98jBuLew6KtY4waBKv2ptcMCyH8cjn",
  "key3": "32CtUEj3EnW7pxJmpnjbAbzWGjEfLbhCk5RXnXwKHiTvAVH3L4WF3qyBPvjU5sD5WchGn49HJiFgpH7oFH8kSpB1",
  "key4": "8ywmUpGxteF5NiTfvxkFcNoTWFbDvLratnY3sA7PnCkSuGpVZ64AQFwKEv7sWNp52SiFYYCtH1Qvrb8QwHKkQwi",
  "key5": "HfC2pE2nUQ2KJsn3RgnPnAw6pVXqdWePZYBwuJ8fEf2px41qhuMiGryP4EMqJF8zEmD2BPyqnbEpG62h4ogkisb",
  "key6": "46wPo7rpmbKRYwGCx3twRjADh2gj1NBjmstYnTgKEGXNdJvw5PdbVKQ7dGUwxNfZxPoPdMAwViWgvcRcc8zHPty9",
  "key7": "o51bsoBT2yKw8t3Mujj3qpUrqEa7WPsdojnQXpaJCFWW3JTdG8ejU3YMwpm7jtyhAPrp1vHrH8Shcj4dB7DbfHb",
  "key8": "4SvwUjnaTyzBL9ytv1Xigz1wXy3MWBwpu5KrMDk8GQNSmk1NncjrNPNkX3fDhL2GhUN98kgir5iWwzpcinCmRxW2",
  "key9": "3AP43Kr9U7X9PTpUHgCApjCfhZJN1pzNpPn7imRh7S38VcCq9osSEjFHGwpffr6M3AUus9Uu2rAtCeXwpb1xP7tp",
  "key10": "4UujerdjZqJ4x3CAAVGhF3QUTMAP6LN5XTreTmRnkfDSUBPC4UBUSTiQVjXF5VC8pQMsHbqYFzemrhVi3S2x9S4b",
  "key11": "47iUxZnAUujvpM8TzrGdU2kyNXXDLyRm3qBM7WHjnKtKTrtBbV3Qt2jSJrEBonM8X1ikv3QEUr4i5KmVBhosyj6v",
  "key12": "2h4GeNHAAMmGbRzH9cauTvqJzz9RQMowT6rkvFzbctv1cgg1J2rzBEH3jpWgmxKemx5tFx7YzeKyTBquwMQdoJrV",
  "key13": "4E7v5XsexMAKfUTUFAyifBffXFe5K4UJJwzD4WmXQsyht9Lmx5LyrkfsiXv5xYKKmDJh3sEZ29Xu7Jjtnc4vYurN",
  "key14": "qwrivDhqY6L989NumkKwj5gBWHsJ1WA1djCBCvKA3tt2AADD1VwWtxZbaFVokFVbBoARraJTEqc66CeuzhzWwgq",
  "key15": "4PLtMDgUwvUQjUbMMAo6BrLMHaWTLY5gZxYwZw8HqV2VVUwnTLSJY6GjCmCirXxFvocd958dkC3hGxNcCLfjamus",
  "key16": "215BnW3ewmA5yyKpo4chLfHgghfSgnKy2cSWTMh57vBGLMBaojugJZqnr1fDvPoUbTiiFXUgiracBwXTVEchuDud",
  "key17": "37TKZmeEiEZYrefZWmdhw2B8SNemL4PhzkkJsWwGvsZ6no7LmxwEHEmnPiGfTs2xqZ2tPTd5GiLxkj9DDja96v4r",
  "key18": "2rKc3KqckyA7TAREvksTGEkkjJy9wGwd7Hje8qUGj3vguLECGmoGvbJoe5dxNLvo8itkMxyDfdb8bT72DFAtV6P9",
  "key19": "nRNRvBFUuoNvVnsHNKfLziDomQogYXiu4J3bwZfM7qdbGGTjANaBn1x511U29YJBtGtymFou2P3SvG33AuXwjwG",
  "key20": "3cTcwJgNhBrPt7X6KKCTPNhMNXVrVWAqNVMUK2ewHgUcA2xEgTox79U7bbBMyM8iqikYRWFPt4dEBGjuWS7igbEH",
  "key21": "5aUiuqsS4zWtN72PGarvJDFZM9bUEnP2Qy9PT7DzBPeqfA27HsBYCuU8dYMEysB7drKVcgEzSkdeMdYAXP7szv8Y",
  "key22": "3WhVzAXvAQZ2xnYhv89bCYC5iwQacMQBwFxYFGguL6FVgSXoMWWxLnpMJEz6mGYSQsPsrEJh7YeCJop2vyYUvHvX",
  "key23": "42J1TZzDSCiH4XyoZYnpPZfeXmJgCCG4sGYTsEr19be25UpVB8QUYBp2VCLJkvWimJdHows5NSNJo4c34W1QhLx6",
  "key24": "4SnqGqjPgNdeqBEK12ETN6A8ckCQo7RTJkyBV82r3nqHbf9m7Vc3EdDWs92pDLESFV4GmPgucDBdwanRyPa3cKMg",
  "key25": "58vtuQQDvyb2wgNdSkTN7wF7njW73xndpJDG2A2CL8EGmrp9cFKp8d2Fe5gF6RVampyeMH1HYT987jboch4PNaJw",
  "key26": "21eWEgBpNhXVhYfyoQpTjspm6oSaouGm7LgHAMR4irEFMSX8GCgDbmLhbmA7og16kwyfpifpbVmQFAgioJ4sqhZZ",
  "key27": "64d22cixAo56Zkz8ytDhD72pMKo7xshQieXEnzFdFAB98UYzYbyLMAgAKbaSqtjVizKvb6Q7zeezaRPRPrKQu1Zg",
  "key28": "3gZx5ne5c9srUMaVcTEWokqUi2wBVJFce4nLgjLibHfPxd2cDX2ds31WnvEP8y8kRwMkxSnoxLQz5SAED7tuvXEx",
  "key29": "2M2pPBwzDkXwyHhnbmZTnBBtJU7rEfvJfhSNH84EFEsTEvAuF7QXesvdgtDHwbPG4xCHeRcsWmbqDhTFfDWFa1JM",
  "key30": "8baMVDiZ2tG7fM6cTRRmiw5XZbCUguLVNBqRmYB86e9gTtTN8veXpvxzJeqFzmciZ2FfPAG2WisoZdp55qrMY9J",
  "key31": "3EuVk5tRzxwokQGboPdnRvv49KyMEAiwgEdupQLSGpeNxbY2itL5YaKWGdR316dPSNoJoqL5LLDb3bTMJMuE458p",
  "key32": "51vQwfXgy9z1TCAfYMZEkNjvCNpJxohqmqxuaSFLJTLpzLNAfwh3oN7DadSgR3p5KeiW8Faz7Z6DFskQntHwKYvS",
  "key33": "GsmDp5rsFnFmoph1YAgsfdLjnSWYs7a4S37mg8ctiQLUaH1EGRVfv6NnC4ZD7V1SwQP72sJSYLXKWFZib4BseEx"
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

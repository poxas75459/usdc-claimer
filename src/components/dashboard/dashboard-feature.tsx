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
    "2Gwz9UXUXxbvAgVXuFu9yKGzwrFtMK3g6UaKttJWuzZJ8BKJ7FzRjJvre5KqFcCcHdvbBLDYfZ5RzmAHodj5eaUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "653CBZDQSvBWAuPhvHjqqz4YQoENXmaeD7dXc2K1kLTtcJ6tQhJXrJxhoZR4kKeKd2ALg6RKPuSPGqs3CVSs3nFC",
  "key1": "CC4ozYykZWGPF8ABcHvXcp11EAu52rEFYTrFEwnUuugdiqgZV4EcVzpJKJWizq9nr5dvWbB11tPwmTHCxbu1AqC",
  "key2": "4vegL8PM6TPJWxrVGybfnf3hoGHYrGcS47GQcRMs7biehm1KVXzWpWH6yriePn5sw5x1jeT4fy1xj31YyGSVrdD7",
  "key3": "2EZphWWwZMWMVFtE5FwtRAfqLUNsnba2WGRB1P8Ddb7wfw18Pb4gL24gjmEXRZRafQoynbXSQ4Ei36DNM3HyEEcF",
  "key4": "4ExSqfkNdDZXTgWA6aFZBnxxLWPtGRbsQdA7WuV4dH6JzVM4dsu4ddtuVUsQAT5ZUtKGT1fRadUAMWbNyFpaXjCP",
  "key5": "3E5iTHncCsbgo2WHY6GNfTnQfLvnsY1zo1zizCUQdfLaf5hi1Fbp8ryBeYNuYCXuwEtNFmDs28fAkJeRJE3MRjez",
  "key6": "5LJQSRNGerJ6hA3yNXNMvFo6G3zBP6tFPJPgTqwsyZ9vh29paWqkF5gSbdzbNEkr9QxpyJKud2iQdToUHDNbWpbo",
  "key7": "3R3ZryVP2FcgvVoCra4voeJ56TbgmgJBr3A4niWkGf3H4qjDPhiuTtqD37RDMXDcSvNeKToZ85VRWC1xAxfSEKPb",
  "key8": "23yWgZwd7WUjhQbDCk2v7PBTWLDgqHvcNtuxvmaC2bVdrXwYuUW3fpNxRqLepkEBpy26YnEtSiimpUg4ZKFn3od1",
  "key9": "4kpRtGDWStJWY5gcMMBqCAXpa2XjyoWUUqpNLa1287mfDdxmotcBbeDCX3V698W2Pi8rypCwsK69ewf6NQ2e6XCx",
  "key10": "54cA5zwrM4FCgWpXyQVg9yh8vSdGej6KetyUNq7Kop4cr4x73zz4uvDR1s66gYdGp1M9moHkR7BYD7HVjhZnkyHD",
  "key11": "5PpXSE7mnCfLN3CupRD4rWp2T7GirCJxTNya9E18LQodSv2aVjoVkDy1W18b5XM6TkuxfuwcVpnuqekdLSmdBgF8",
  "key12": "GNSQGmQBNhmaNXSxLXyrwDwPeRnzro1RqJjd35b8aedrZdMwsn74ojddtpuWyb8Uc3jpZEEmrRFZgMagwZ1vvkQ",
  "key13": "31dWDnhmPsmrcGzJAHze2MGeLEeGcaEPmkJx9mXTHiHuxbPwECZ62vqf66tnYpyoyRYzK3y2RYZkJZssREyUWBbr",
  "key14": "4W2JZSaLRXSq3HfHYBW37ULMf3XhCZZKo76nvA6jz7bAgwffQCYVh1u8L35oYSJym7642NcPKW85Ed9oJ21JnfFo",
  "key15": "2vmb9N9vkVDJBsnc52qRobz9c8AJrrPwUtsgyhRJn31nzsyzUCg2QzqnjeAJ7a64Cfqj4MkHCySr2vwxWA3dTfqN",
  "key16": "2ocvRqaxbhvqYwJVmBZ1BKmue17184yPTrJzmrS1pTdWqryuGHurxK9h9jahgsxqs7bFYPsRUz5sQsw8ADggwMoX",
  "key17": "42eyLN5YHkD9XikuGBxRwZ7TewbvPwUihTEifBxkTLujAhjWZkMBNv6JGu66ns9E6y9ZjsqASDQZUGXtdKZbrhz5",
  "key18": "3z3VWosLSSEbEw2jfBcCyz1kDznEyvXNdUxGtpf7beKQXVf14s5RtadxVLCnfvcY5DHbFpsFoQgjWACfYVL3NBdv",
  "key19": "56EDrG8ZcUBw6idHA5UH7Frqgu7Soa9d28CxFqgza5cU1rjeXtQ9xwUugSQ5Ze2g27j4qDNFJ6w1brmvAiuCpnuu",
  "key20": "T18EYuWTJeppGFhmdsUoTGRdNSUdCB49SuromP555mnxUGFC34HHb9qZ3HVww9Cq9eDoUFyUibwwzYcpftcTiBY",
  "key21": "5zHqMAfNZwYA27AVvxKUBzQ3sdqWVmTW2EdgezeUjhkErA3eESdiUB1s4iAPJjfuvKZmqRBP8wnWhVbkrKcwz2S1",
  "key22": "4BPQ1W5abAS6Tt8nadMrjm9fg7JNGv53nffpwuEEDE4Sd6PSgiZ9HQ43hg1mhWu7G4cBdwTm12Luc4pX8g5XiJAb",
  "key23": "5gXzDJEAU8edaZx9j2GAW62JngXD7p38udyjeyt5GLTBNbwPd7jFtKoNjxZanwbmD2JBz7dqpbQyBosoJpHt6xoo",
  "key24": "oihCMCXtRRowL8ZjZ87u99bTUdL4nPNW41SpsKAcnJnpvEXc4WS4uYQQ6cqjoM9rob9SscWxJryohvVyzz5mbDD",
  "key25": "5p1zsKtXwUByVB9grbShZ4F32LGRwoCw5N3f13jgmYJzNXR6suhbksbnHpGQnmQobFPuAaApK7rGa5gkW5FxTuEk",
  "key26": "66H7jb4wZQ7Uwsr6eBEPiePzJoNQ8dS7Lo4ocgwfisbpfa5owqxDSJ2RVtV8kqz7MKJbVvKBD8rLtrEuc5s42UL2",
  "key27": "26ak4aeXaFTwhLZDuBAnG88zVGKqjQ8TF5PaDVhnjD7Fp5pQ4TQEL4UQNDZ1terfZQJBTRXFGGR3ehmuyzCUJdVB",
  "key28": "nSzsoe8JUhZiHZr5Zekdj4M6tnetWjTWUuHi94TiL5U4euUWb8MzK8mxLY7kezToYU8x7CY27fGXY23DNhtTirF",
  "key29": "5soPX7SXcTahtDyGP4erinE5uN3MYspLnRbQh35pkyj3YXYQjDNtEhKFRSwiatFfK2p8QTwuvmdDeTEtR7fJM6Lk",
  "key30": "2TbARnoNaYT5MS3GEoki8h6NE17GjF3RVwHUJsr15eBRWM76qHSXPAXBqvv7GKsaAMUGZpdh4yVGWuyfXX8BvJQ5",
  "key31": "Rc1UG2hgbHAv47rVrApW2cjEVTGcEXuj9juHsMEgxxcD6wZxsL97HcTtDFdgVArQ2eoxgEdRpogFzhgDS8uDLn8",
  "key32": "3JGVcNpsiduQMTRrrt67f7spvk3WZdUP46hiwdcog344jHW2q1npb4EUnkhaCtHQDwzX8rksZ2edZns8bc4RgDkf",
  "key33": "2Yaj5oeAP71vBEudKkjXKy52xrVRacj7ywbkWMhmdDy14kycpuUJn1KP7Cwn4KMms738kjYzxRNzPkFWm16HSQkV"
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

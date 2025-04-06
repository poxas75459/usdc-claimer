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
    "bYFHtD2oHhHwVykTEwJPsYgjtiLZNnLrcgURGyJVDUPZnEeJayb86BugzyVTNHpi2amLhvFJvrcR4zVjK1pZVAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LsBQonXhRP5KMMFYW8zHdhEd6AqS1YVvjn2x7jsWy9W4siwSyPgrnpDMoVn6sYKYsdQm2EvC5TCprnWGhjakQMN",
  "key1": "3p9FrQBs7bbREBfStEhFYjs53uySY862iEVApsk3TtSEgsj3TfPWfiFPD8TMzuxn6M7fpQyMoFnXKqBTzaAWX7Rh",
  "key2": "5m3E159SV1r9cH9G9Ue4r8ucuehxpvctt5jSPQeQwtVP8L9y4nysx537puwdkJ9gYBiYhZAFHb9YcXo7kDVfWoHs",
  "key3": "39Nm95nKW9jsuVAiH4oz3QFX3F7KFQv59xyP2e4XMRUsdQ6HYNPJm8fhdyT1wUhLPht3CXgYdQtSmirefJTbZeZt",
  "key4": "3ar1bLJCiMu1GD9CN9ZGDuAcy4hiPTasRCe9zgaCx75gk5FJnHVKmqDaqGigyKNjpUfshNKabsYT5UoLTxC2Px5b",
  "key5": "62fZW2Ji65MWuK6GBTiBQgmcZti2hiAAuKbjHvibydNgY5CqpmFVLM95rKXPkRGbBKSKnz8NvkunMfFD2Xq86dcq",
  "key6": "47BdZifH7Qe5EYhG1aUZpUzWRJamnK1sZtoHy3JkjgZ4aYqwPj51YW6v4gYwwDWV9bkJvMvsvkr8GJLumfCCDegH",
  "key7": "5c7Jgw8zSe5aQWRUXC6LvUsz5URYy2K4Nm1MHtnmX3ekhCd8KLgLYiCj9X2py4DbfCxbjiuzQFevsTHjc5r7bYYP",
  "key8": "5gHBF15HAtvzhRM8sRtQsszF5Fz9X8Y6M51axDvCeRmAdvvfFfjSuRnxt3CmNRufncrB4h4Kx5scHE5eqFGM8wuh",
  "key9": "44ELyMjf75KRoBkKSPJ3Qpsi9DTGLNbXVUzrEVFm8H6LEatzSp8HvLqB33fec2SgpuADVMUXBgZfHayabeZpZZTc",
  "key10": "3EQVXJH6wTVMqgpqUzMzgxzuvYnWGTuvwLVLSSaPNUNYB1Mc39TWaeodrAEmWXEwv4gzctyM7TwDTnpwFRqi7mmh",
  "key11": "2r5thmaaGVXtwmepQa7hrwhUr9HVJs6q2HuoNMvUkyY4sobCNrWLVem3TWyzWuxY5LAd1wEQxezNVuEkjUGmuQ2R",
  "key12": "5w1grZFf2ccSaouKEBQAwCSm1BYoAdXyPP6fDLLtgTrHZXFsEgpCLRUirDHeBnqhYde2xAqxXU4PvLZ2ygpNwCAb",
  "key13": "4Q5FVSjYe7nhMPGVhnmXk63ZBkRR5DDpXKpsEabkVo3swTXM31j6ExULM98n1HENR7ipBB7zxfJYjkHpvMmZicyT",
  "key14": "6qh4Zd9mWj7NFjL463M63GKddh9dK6DQM7DkoRMNVYUtWkqYYvd3Zju3Kxi8amFzTK2tsFuZx7XdpUPxDjpLbAG",
  "key15": "sgfDKAG9mk1aVefWT75zDVpfVyT9w1oKepnA7mrt39zPC6Ydv43QWhpGuJoPMg45iLMTdnxnAGMBFbncErguXRx",
  "key16": "RBhMuvcSTFCaAwa1j28SbfM4scpQwP7EtPCpeRdy9CxhzAykcRabwQYjdVuAitx9AFVTsMwMNvgx5ziGYCSyJN2",
  "key17": "5yCQeCR6vfhekRPuoFewkUKkNxq6Pr5YCiSNhnwPj534ESKMieGV7zLt8yPC9hfeNiNhtHuPP2A8R6FVb1pbJqnJ",
  "key18": "YR1KMvgofJ5pBDfnhiUBsFkh7vmqYqf4ogYhUMWXPWapA5aycdNkx6FKfbHWKw84qEKcMopuDEBRqBUr4HMPG1U",
  "key19": "C8QqwpYDZGQaJkfopYsfBzkaX75farrb9GCNk5cT5tYB96BWxMSVRu7kUpF2N9NVEFFfGiUEensWgiA7ampoT22",
  "key20": "57gR4cJJSorFncQMRUvDauQB1tMktE1W8wy66H5NL78ua615dFvaiVMaUU3Ps6hFDs8aRTk9WKaPhk25Ae2Gr2YD",
  "key21": "RVbrH6YRDZ5NYw1mLFuEWKs5H8X6XbkXYD92JoLhqPKSXqtzG8kHxDLiZVJwMf4t4R9do48cg8ifbwqyG2Nfdof",
  "key22": "5YA2yvT8y3PWbfFMfZyqFhVFKJKnM66y1fDWc44Xh6nN2wq7MEsKFZcavKSAhQTJTqk17YAG5XustdAPjCw6zDqg",
  "key23": "5LfF521NPDYDR5iDP5Gfjc3X7mWEArTfoGZVQUJnKQJx6iUwvffQxUkKymUyu12MX7S4AieEhnEyMiybZs56pCwW",
  "key24": "3nNUKu5thQk9s2Jps3sgrwjgEHT583qc9yyDhMXs6dMbuixbwnsrYSW8npu86BrUNCpQDxUFaXPMRh9txduTF7Z5",
  "key25": "4grpwcaDFmbSsL32vv1VwrgvXxD57mcmqqzNYBsx21MJttJHUpySLGc2hSuUPy4aa6Qi4zcDw6C78kd3Ca615QJQ",
  "key26": "4Bv2Vp4iPdsrfzuQiMpeUbtUygdp8DtHwhGvCF7uNDivcvmUbShnztcTCtepVX3Bs2bQA7QwmUDNijR1aN5nvuYx",
  "key27": "Zmf2jLgQQY8TsdFUTtvFS4qX1zrRrMTobpnPHQsoGE5D5kk5ox4hCrL4PiP4zqYUczceHEWDL9MXNLGmNye1t41",
  "key28": "5UdhXgxk7RBU34h9owGd5AfkfTrnczUaKxCrDF5HUT3KWndRYPLzEojmkw1Dusvb9sEcHyUjXSH3xKvLxaFKuA1",
  "key29": "bu8DSNfMRTX5RpqfYENCM6p5GHX3USU3uY5a8Z7Kgz3jBuBEr4nPVRcKikD5NBue43NLy4Vch2iyK9AeU5ntYhs",
  "key30": "4RL7fCeCM9XPQkhFeqavaeh2qZ2haejDEiFtcxTF7vMG7ovbtJuSiGiqx5NF82xcWNVwE1SZ6WNEHZLrxbx6kbeB",
  "key31": "4boFih41hLNDU8N6j7Ca8iX8g5j5xSxq6Hvn9gmFmJLngQixd6ZuWwYnNfsr4s4mCPcRujbb3USatQH2vejgm9Cg",
  "key32": "2aHYGAmASWnJHgFrvwmZP65gmgGDAYDzDn3UHef56rfL1XFjd73Mm6yXd36tcP2sayE4UHLLV858jVsMYaNa7JEq"
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

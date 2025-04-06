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
    "2drbf7YhNc3DTGkhNSDEb2kjCYTePRYPERjgYQfH1SXxmXupv1B2wtzAsMfzxT2wQkZcs3pAmMtTeEfDbZeKQVzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rF9YcZSKFC4WzVfY2y5UkwdZztfaDi7rLk3QZfdT3CVbtETiL6H8YTHMB9souB9t3TiXpUYxuErvSxHhNENw7pF",
  "key1": "3yCd85nuEwtdCu8fB4efDH4pR6TXxoppVvuazuo2nK3Me7TRqzg3S8vKmqhdoTHUFiyHNQyxiqnd9PZcijAGvT91",
  "key2": "3UVn4cX9VRn6nFBt9SCTuMqUDcrCDHQTod4DNtSU3KEq1epMeSR6bCktrqFSH1gP8SmpSrAKMyxdjsaw7Fewwwd2",
  "key3": "cJaqjeFhRtPVCMFKH6d7HqXPhCKDspDrzZpJ9dFh5CoDwDjvjrHbUqjSi4Rf61RcmCgfd5D93jEDezRm1iksYHj",
  "key4": "4SmiW8LGyJBiEGKfnerZw7Cu3y7SxkpaX4BUpp2fH6kiimEPvWVHJApRFw5U2i9ptsuodt1WCWPbs5znaJUqbQAi",
  "key5": "42MinkoM2LLtYvGQ7LT9ejMz3JD27U9eaHaK4jaTHJuJ999qLnyjREVKBmv7vdCwYmAmG8p3RNZ76qE4y5mg5uMM",
  "key6": "5GySM8A265xsDzdDtfmGSKLLHcb2G7geyAEG3zYZS4fuHVCkE6JbcHEkopLYZakZNy44agcHuq8HASwuevcw9UB5",
  "key7": "3n6RwLAuMiYGr7FXKf61LEA4zx2LcXn9Lv8iUH9Cx1EgAXnRhR2wPXyxigp8DMmV6eDmbRTzvLwLUrCSUsf3d93s",
  "key8": "46tiu8nmGTpKAaVKkKPFvbsDE48YkDkAbAj5h1KU4dBec6a4SSHaxjCBV8KCTnbr9yJ7f1Vtj4rTymbHtZntHuHK",
  "key9": "5fVWmKUDDZCfDvwRX2e7G3ZYiuqhWgSy5jLReud7j3C6WTa4sXkFha8yMWZ8U5L1R5t18wnmAiXrreadT6sLZhnt",
  "key10": "8SAJ3p3s6qKRT2SWLwGfwVRZE71RcBA58JeTH6N4FT9wAs7gn238gcLrUeJ8DCu37mCmPaYoCq9jhHHpw7xD5SV",
  "key11": "45Y5iFPZnXVkKUhmSP73uPeo9WFBrksXSWwdhUAqCoNeLPGBMoccnBQULZpwSPSsLK8PPwtnE3hakKaTCyo6Jkiw",
  "key12": "3ALgh7yoPRgs2dqPRz7ogyqA9H6x9uESiFyUGZXbqH2jTUQP8ySNMYjA7sS4jz9A5AK1K7w1oeudotftCvdx93Pg",
  "key13": "3t23U1PHoUKeSbNroZTcPjkaoVf1CL7qMXULz3jHGKnpsfknnbbQPFMx5nv1eb7eqCD3yvo7zcVbjmQKcPHtBCvV",
  "key14": "4GwJ9khhuksHePfJ5Drb3Vyn95LwFwAoumxmN6cpZBpPiBoiyoEytJSwxLLMjd6dgMus4r6sd774hKUKZei5h2cX",
  "key15": "GU7qo3RUCAsJa8ncNLnRRaRxoy9aiDE7uwPJtxhMkcdrU971EaJcqym8yYjPivgV8CTRwoHR9fgnFvLmzWWYAPL",
  "key16": "ACJc5kR15txTz8HZvsXSn9GpMf9N6s8He1DnM9MpD7cyBmGLsHkwATA1EBNHzDowkFmPzPGN3HvDVzM1p8C2b84",
  "key17": "m1UF73NpEr8NP177bJA6cZBLjv2xpi2JgEN4Rjd8Jb2FP3ZiSkiJGuhULJEv7fJqf66Do9J7iSqijifU1tUuMox",
  "key18": "bjqAG4jJz9UhbduC4isSqm923C2WPqJ5DaJehnD1QQgjTQtSqUajT4cidGAsEF1E1agJHpe2tQ1gE1m8Pnwo8bk",
  "key19": "5S9iXeHYRamUunk1ZY9Yz8avMk2rDh6g1ZTZ4WPBC582vbEM3qhgfdY6aSZGhrgwut1HTJ4wG7PujXVHHs42feVu",
  "key20": "hxWk376uCdiSM7DTtVU7JaafbfNR82zuCVwsX3cUZs2VUejF3jwWy6wx8ZdN8F21TZcTM7VX7VQUrG8pN25ynYM",
  "key21": "2wdUSgFUHoUF1hRsCoDgfAC6Cx7ofSRVasm189eA4XxDwSaQDc7VbCYYtU9Ak4GwBzZfbzXAqjduRkUfW7skDDjt",
  "key22": "5ZTaatbC8JpNz3wqF2ZDPz2ej9wuAorpKVmXqS51XtGZHKuCFHCzLVi4eyQvK6FoZSQCqRJ8rNdYqj9mLc8ETZNX",
  "key23": "VLDzryX5sUtJLcpwhR79eFKGxE8w3j4y7VVFi2eLmCDiG7KduM8rp4b7taMj7nsLNT28w5DGw1cXKp65U7WdRtg",
  "key24": "vketDJbzuBZgGbiKvkTYP6Ex3FER3PXvu6qTVNdb9f5oB6VK4zpQ4E9G1gQzX9TwDrHz6HJjMqA3HEJn97ojbjX",
  "key25": "55B8EdxNAvz8BQePm5UjvhXC39PsGHJbitrwR3h6kCrAdgDHBeaAff7ztC6DmdZDQnPtBKZvPywtwYtKakUDDhWY",
  "key26": "3bGudAcFJZCEASyHYeuxP79B2rMZqe2tQst5xw6tc2x9bMTXLixm267iLheMS1G4LJF6tbo3TYt4hoGLPefi43aY",
  "key27": "4rC5kJNdLvb66SF3co7vdbGco8S4iGXSMxSugXN5hS2FnRMHQL84s5H3XSWSfKWyTr1orsM3Md1T746RqwAGk7w5",
  "key28": "57SH7Y2Y9qoTgi933R1TvLdEhmFXczf57F4U1mqVoJ9pnZKCFgHU1MeUi2cLKXhJ3svW3WHuDfbY3ktSTttwrkMp",
  "key29": "rKoib2QiB4H1rJiM1ga7WKppHiZFW8W1TkMVLXsfkhWfoaxHWLCF67uLDTUz6osDzWSv8PYgUxuBWprfVEUGSEs",
  "key30": "4pwN2f8A2rpnvFKrzoYBi7hM9z3J5D9cJ29fWDpFFS3F7YFfMXK6wLbUrea88x1zYmAo8axt2AF62qgNc7Vfpmfa",
  "key31": "3kHAGZNBJYY4MH988MYFZMuSgHJ4HwjqyU4XjuqSd6EJoWcADnbkpjJAqKQQSvtaAeuxv7tu6PMzwaL21gSCroo8",
  "key32": "xWAobu6w6dQNuq25SzttA1Hmh3Mvy5z3K8MsNSo8oUxDBb61LJyfs9maEseRkXkwbE13UyauakyqerrY9Zr7629"
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

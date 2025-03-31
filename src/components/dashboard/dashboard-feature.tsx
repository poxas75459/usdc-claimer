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
    "4TiUW2YAZJeAQbf86JZtnz4om3SBHafz9YHFDxpJR4ftV1TuL4Rj1uEZHTGYj6caTSwTBnmR4QJBASKNXnJx1WD6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "faw9LdiqouhBdoM2tQkQNr5ne9KvqxNfAHMcf65NdEmtaWL9iwTSMkJfWneoPE6f4c4cDYLakU3Xm5kaKRndXey",
  "key1": "3RM7RLj5m7Z1gJPKDE1R9KAqfGWVaXjzA3gMUWDQHEJmSi1EygDax7Zrzb5fh1xDRtuJmDi3hg6xzHj9Uxs4qFge",
  "key2": "5jDXKcFCu4LEwbWMeice3m7bGEyCoscgEupXy2Vrndp7xsJiMCeeFBkxS3XhYp5CfGjamq1Mjivafz1c4uYZmAZv",
  "key3": "5HC37SWiuTt9iaWTBdr4iZ5mExJQjunNGL1eSzVHXxNTWAxCME6hZ9cy5djnKAy915oZr9NSX72LYrNoe5JeKW5K",
  "key4": "3weviWvRyHHgtNE7WKaUaRh6wYGNXCyHhz6Vcv1s7n2PjbTVWFP3uibvGM5GBUrmP3CnTerb2Mrss6snKA5sE9JT",
  "key5": "2piERH2WnLup6kpg2VwcTk5Dw3btaz2CTBP68w1Jc6Zmd8Y5C4zB256PptLH9pBYY5Kd2RaTpw3GLb69wfsuRgm6",
  "key6": "GWpTajMSNoEQrG1L4q76JkSnv9QaDDp5k3yUP2SFc5SWg9rNbs583Aszf6nwGj2RN7T5vY4VrkLUmuFsqa4jd47",
  "key7": "fKdfdH16iCLWMZJ2EjaKaDfubob1cXDqujc7NWtvioin5WTKz2nvcpRuuAjYEaWrqXcLf6CRJnZWWgM3WEScVdr",
  "key8": "maJRdEWvwNnENLohSAMPEgLgeYgD7riJSkfHdK91pg3xbJJoUkDuF9YCxWC8pDGx7vjcYiqAmN6hUg1pj3vnMQa",
  "key9": "2TkdkcXSSBKHqba9WUeFr1Uoem6zMT29xTnGfRRPiNcT4XgFeowbu1sWmYGHmjQCCzkoiKWhb9fsyFJmuyukRBwg",
  "key10": "3J66nKqVGwrVXdkdBDqUhxnsaPg9SDxXiAHGSPKLox7By8wJ8tDjnkxnKq2ETJGd9WCKbabAfMaBR2tYJR6Wx2oJ",
  "key11": "4qmVbBxFbM2SSoCHqKPaeni4gfmBhv7taqa4PKyZaj78h9jjEqb89yWPLRxVifrWh6gBGADE8PGqbvvDNPGq3S9H",
  "key12": "2XePS5MkMUnjvcLx1xgfjjAWdfKthjiwqzfUDGTui5QntDH5FcebscVZJ8AwDp7WyHD6fGLfSGA1ZkXsYkz2AbMV",
  "key13": "44MsBTPYyQfjFvuTzcm5naC4RTFLhrWYNXKnrBK44yXhC7wWHQpfKwRMWhFikJ2vRTZFWkLbgJWRbbqWCBoDo9ho",
  "key14": "3weqpV2khxiik6krYUhe4a153x8BieXs2VPaTH3cTBQdvWBRLWaaGfDDDWzhpkzG3vRfsaRcDyg8mzW7LF5krNHC",
  "key15": "v1xDKxjSaUTesmQnYbJH8QVUMtSEnD1BvxUtibVsto4FYCWNZ6z7fToTbEuiXDv9M3TqENWRBmu1xq7jzkDbdZ1",
  "key16": "2h1VwqSkVjoobDHBRNzTWk6YbWmQ91Es1cHRJaeaxzS37FdYA5z585LYndbE7Y7LSvHdeY4AiUTa4D556HSWoURy",
  "key17": "66RhSMGKvUeWenBGLuaRdfh9PVGcKzLtQnsSKRdzDT2A5DvwfVA2oNC64iWmz5zqJUYah9EWmmDcNroPe8odzmDb",
  "key18": "3fJ2hpvFp9xwVFMk8EVxsQVkZTvTcebonGQshnF1d2Jmmr8LK2vAVCN3jySgvR7ytaLBABMDSspNbYP3FAyM6VJ",
  "key19": "47KocwKGVfNcMvpY9Kz6uTnZpuyvbictwSETvFF8xtGEdNwwW3tfGe3Gu4g79AL6StYhbypumSfLUPVbdLnoqMd5",
  "key20": "3xcPRn26vGp5uD4nnR7FbpeKbVTbXTNebYk9EusvTs7oEg2tJaenqHg666vxtUaG96S9W16es5R7PSfmBNUra4yb",
  "key21": "39ieN9Shu3qKjvVwcWy4cQDir23V8pMzkE8zZjUdjTj3kzjKvyNPWoTmcJ3FKV9xjDT3jCirqWME9CHZumnouJfw",
  "key22": "51BhMcDosrZA31fjqEhcmotGoRCcsJDGhYPeZqvq9qduoDobsmD72zArsrQn7QYnfvyHbHPHyuwYnW38xLiSELV2",
  "key23": "xz9LmvHj4GzGW53bTXpxMJQAm5G9H8wwj9DGcMWLmDxkQwa419Ka3RiyJCZNAmpsTkCTXuCFhUctuapopYAeara",
  "key24": "3S8rXoJLWxF7JuW5NY14xBhYPKkTETQcQJrMAgEUdDxeFhzTRFyDfqutGhedKCzxC4GK81KN6acspuKdLZbVmcdR",
  "key25": "5Wjb8YZPXNYVuFwXzKasx7G21goQ6ZymEScDBMsjrPoiGSdWz3vfXxBZMoJ6PC4efc28y1Vf4tw2GBiWdVy3NB5J",
  "key26": "3B5QoXuVYbpkcU8iB9DdDjj4stYmXKyfxA8GxoVn91GuAaQSV11dyzc356btABDHLMw3MLC1iSnD4yx1uVWsrWoS",
  "key27": "3hQx9tAZZPnvpr9WnLwhFsjKz5N5kkCwgfA6Qham2SKy83AtxtkhkXyfAQPh5mbBPWFxB1KXPAutd4SRCc1VCWpN",
  "key28": "2GfWdvuF6yLUigHQ6u1oD3hafqRu5oFC9dRv8eqkazJteAWFfKaLqf6ZR4YW6qLX9z1Z8ixjMxXQcbeUivEqbyGL",
  "key29": "4NhHmXMr1yxgYv65QwrzWNsd8YSUB56VArqpTttow4SR3uM4LCGyN78EUdLYW54VuM7XKPtN85WFmzKZQ5CyDuqg",
  "key30": "2rygvxnPiiPVSfWqRCE4J7ncbDCvSACsFSzUAkM9RqqQQBFDao9KXFLC2Cuk9dEgG71NR2c9kZAv65mPi6xzoxLb"
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

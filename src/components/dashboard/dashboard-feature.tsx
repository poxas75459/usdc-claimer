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
    "26NsUhXvsdioifK6rWbBkvG2wqMGz2w8sas2QefBSHKHvWnJvZ7xzqhRZFDmYjFA2DeWZck7V6K7qmWHCzf7mquT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fnCjzsg6uxiu33ERRBy3HJKxhSNjDf1HWMX6AN2gCWrv594xnF2Vxm25zdk2QqBS3SzusBDPxnNgfcnKXafQpvn",
  "key1": "2HmNuCzCK4d8RMAa8gmkonbuCjMbYXioMptQNngtk8ZumzpPRWvLa9myrrvejdaKHRk7a8kTYBqSMVZrQp2oGDqw",
  "key2": "3sxnGV7LYW9SVjfiwpcubZcxDcozEBGs6BNijR7cTpv7CXx6kyciMhporUwJMmQVFrqZRgUmRyhgkWu9hEK4jkog",
  "key3": "4Pjwj3jUSTMgoWL8YxjgrmCgBoopfFCxV6zMeb2vxGb7LNdkM6uygWqLUhGrU8Rs5id8gTkGhrntaZ8KD5oBFwA",
  "key4": "3JFwrJm7kYxkmBabFo1SmDE4Ng2Uyxr2q41u9Q3MJsaUFpM6nX4Sd8Ffd1mQKzJ8GZHQg1Cb9jBzrPHrzr7cfyJs",
  "key5": "4duCPawjPbv8MDj1rgEaodomo2DDBYnco1vioVNGefLReGKo9Tiezw6zVdvRq1oruhMjWQJAD54tNGfjTuFFdwdD",
  "key6": "3B6jY4BN435chH6vcG2PemddSmFZqMorSptn63ZTsuND1oLRJ8ps8mXigeq2GQbT127KRHnNDZYBnkJATqaqM7Jb",
  "key7": "Ei4qt5iGDpWQDXHTwMSDd8tT6EbXohPVgNidX354H5HQPqpV8S3Jdui1G9FbX1gLskHr8N6H5984uv5hbC8ghWi",
  "key8": "sK9k4V7ediEjh5hW7SNyTZjMZFrXATSBAdQCSxA7C6Dg4xGYkvRfgsv7qTVFsmvmJMoXuS1qGmTXkYgAN4jZ39n",
  "key9": "5mS2r4VQw4q8uRf42rLFmqyAGMpkTuvnQG1VTgVm4WUNC4Y2ZtyfkFPuQPPeyoCA4f1LbpzTnrVVTmLQSfrW23h3",
  "key10": "5iTbBTJexJrJ9zdPtgvAdNub5BYe4gRy8A2LptoArRKS7CnVj5JRkJkbAGZMxFSeTLc6qK4oUxodmGkB8S8X3Pvh",
  "key11": "5g8yQXK6kf6fq5N7k8RFPhfRe4Jw3UeU7z4VU2kR9eRGwNjZY98U8E8XD9XCVowpVkAcbjV1gTQfy15BRhxqZ5pW",
  "key12": "5c5w3Jbiekdy955aFqr5JCL2icicya4Xq1F7ufeMYeqY3z9ekwpyUXNGucKcNm3wu89ve3Yvp3Z9vf8xLfqTkqtL",
  "key13": "2TYcD3UVAZ3UejCoAbLJJfwMMUeFGNANtyoog7w1hXTLxkqxD7NoFnxKS5uMH6Z3oTrCeAAZQckFSwuh4wzif95Y",
  "key14": "3skiWWfVj7xNhdSjCji6SJDEpTd5ckqr6SuHWsk4SC6SVRhxNotrSiLtq1wvkkP9CJaEh9eBQEAjsvkLxc3iovGa",
  "key15": "4HATx1K8nxnpGcFoSZ1y72oibvdiuTP5sroAza8k9jmkX7R4VUkYJJaoDawqruJd6cH5LpZm1VvxKjc8eevoEeaa",
  "key16": "2xNsp5B5LM8TZ2GZS9RLwKxKmueKi7GSwnDkk7WWYjbTYGae446N1p7CG7PeDKD88ddnQqstLjzFPx67mzGDGbdm",
  "key17": "3YvDpc8m8vo6ELvyzVpFBvZsanPWEujU63FUYPvTM3JfdVeAhyABBT9N4Eb7gDh2CVvbYPwj5isfikn683SrCfE6",
  "key18": "3kQE9Wena8aSmzrPubcRrPg8CGeC9wBa7S8iykayAghfukH9dpLApgYdgoyXWNA8ADP1BKL8Pmj8FYv1HCC1TNyu",
  "key19": "2uGSw4XH8KHMP5byUGR7csubhTAhMEJR8Hw5qmTPCJAeotzW6qRvnoECf7S4Weh3atjTnp6JPTNmrdid8a6gjMjU",
  "key20": "5aqcLH9GeZu6XCbshUR8xbZkwvDzU2C6SgxG4urDs7bDDiMNQ9XYCEZTvLw3ZrtkQHhKTdArEZ5A2obWqEWAS8Nq",
  "key21": "4e2HwCLz6FGmEnhg1ymdyF6yp7c9KXUX7SADJwaZWAcJxUc3wnTNLa4hq5hri3rSqktYui36moqScxFigZYeZPRL",
  "key22": "3W9SQvqCPyNuvZco3Ls8GvkT9zHfKcNVSxDBpUd4PnKit8iNzVbWYPjPfud33NiS3ZmKB6y2EzsvrXT4ehkPq4GZ",
  "key23": "5BiZC8nF1uDfx4H9jZAVQJ39ihGebMJmENE2wRhYr5GXrMQ4h1KwA5mf6hPfARtZTLKFf3ksDJU9GTosfVAD9Xsu",
  "key24": "52vikwTx3bCavYGF92Bt7sgefkmWE75SA4Nb6YoLuMAJ8pgvjAtNUDCLmwLa6L16HrvKSzEf19XTRndC1c8Az7xW",
  "key25": "21ZrHy2RkcuXSUKPcz8KR5bkEfCtt5VFQWCcTFCE3jaGMYcpMrtUP9S4sTQZQSNdm1r3DiGmpDnM9z9GErP1JoaX",
  "key26": "4RsSbxJqSqY5jJGDMhpQ2JPHa9i3MrxrbzECY8V5WrBowD1mu6EAnH8bGgdM5Dh4WsJrFTaJ7jqddqkfBDTjSRAo"
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

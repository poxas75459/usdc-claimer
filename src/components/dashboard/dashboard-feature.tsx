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
    "4JWmemz2uULamD6dL6ir1FsLe4zo82HdoXzd3zwcDrQqtGLWFERETpHL5UsTarQXtJMXi5HspWF8xNP71aCmhaXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyNtxECdrFQvAzhd5S4xJomQzYGHsKj5zoztqpuqC38mUmQFDweoAxiuwp2RXQnNGb9sM8Qt5Ld7RTYs9H6wDDe",
  "key1": "2cVsZHp6pb2yed6xbfS5A8PEswSnAJn4dKybFZHw8r93FZ8T3edu9yVeMCyXLGgozZNiCMiAJRDKYpr9q3NE3Rxp",
  "key2": "4Nc5CrkxMj1356gEqh9vSzeudLPT48VX42HiDYheXqiEqiyRktsKk7At86aFS3U8eApdcLf14NLhdNByz4WDTF9a",
  "key3": "28ye7tAwVaAM5T48T3Hp4j1Q15zbEnBgyW4mjTJhpXD2TQyFxo3Jwc5BuWPT1DdT6qppd1wZ9egp5vH73RM5dHrr",
  "key4": "5c6WMcCWnQfFHFMTsbAWjpE2vCw1nByguQWdcHaBir6KfUoj3XDY3j4uwECquxNt1nBrM5TvEpokYsmbttbk2dyY",
  "key5": "2tLqbrvP7TPYcoqmRNqgGYNSoMRBC9uCDfCxowNhhXCNH6iEpp5AYxrTq4q255Q9wo8gtRtjc98sW5xonF8McF2Y",
  "key6": "2MWQkEZuJi66r8HgeeGVD2pkpDiNfKWMoUTh1xQ5cKftT6q43xnUvwY5EQrDTnMGTwNu71ecSWkcZF8wCR3TGgvF",
  "key7": "51zW4RuDLxjdtG7qTKrt86hQtqRVQU2AwQRrvjm8fzoFLKboHapFJx6LLSmYRdre3pyZcLyyr2r6Xdn61BSB558a",
  "key8": "5pE6Grbo1eMZ4oeV1HjUmW6dwe2TWW13aSt8CYMGa7VfhCjCFt4ERPFFzNLgML8yBHvtztR9MTd1n9VYkb3pG3zH",
  "key9": "oM2gJhnCg9mByiT684ZRQnFnoA6xDYkk6ZZ7WvTgnf5k3dWfuhoiTttoxZy6AKGfnbWyU5ca4AuXpN3cXRxsq3J",
  "key10": "25hWCVeeJ8Ek75Mtq7Cdg1Raj4K7PretqUKJ6b5cx2mxLDXJYnQLqc19iKCv6LLg2pNiV9DynZqNGf1fVwrakgSz",
  "key11": "4Y3RvgPhdTXqLHabj7ku1776bw5tcY3rxRUTSSfw59sGHZ39KFrGH3UABzbYihoggYAFYFefUVRPFoF3wY9U33bH",
  "key12": "5WxyYvyGUjGTMTTXtMnpecJDYfskMpjNGEp6YkaX5Jk8EpKZPNtwzraM1mSNNM2KjURwGDwkwX71z5ECXjHXbqcs",
  "key13": "hueuJYN2jPJWECBZy8Dbp1FRsVKV788mcPuBaP8VL4tSCvq1HTQGyRE54D3yNJ5USXAiax8L74piLYTE8Z4YgK3",
  "key14": "51m41K7TJDWBqHyEYxPiXDJRnEwgDJWyQ75qcBv9iNiZsMMeZkcf8HBuqRNBxcGuLPPUh8zvTweTRjpArjZiZpnr",
  "key15": "3b3kjBqq1AJgfucJV4hRkzp919H56KWuWjuU2BZqXQyxZXJETcrd9q39UAdnQukLuDXCXs8PhFkVifWSX4UJTamS",
  "key16": "3z8AtuqTZWfVbGpxJerem19jBz2gv8iDfkikUMxvWbytMCpyZyVraaW2pvvQVQ63ydMnwFUhkGDa4i8qSynu9MWx",
  "key17": "5XSJPonJWrsEDYGG7D5SBS9VkDawysCCUC93396PdTb27gKSkdYZf5JGE1RTiNiuBGKepsDGT8SyxLBeTTWWiFir",
  "key18": "7ppketocGazh2i6NKePLHruSE28Y9df2yh4io6xf9f2VHrtHiLR55rntT8Ri8JVgGQgH51N6DVcXWqTHHTDukYY",
  "key19": "4RVqjzZSYzVxUeGe56nwa6SU2NM6TG7rQBqN3Xd8pa6kboPnb5cfNRUQ2kPsMw7F69jkyUYFSuW8yudQRjbDPMtK",
  "key20": "2KgxdWEQU3PhyJoiJ46hEZ2qTXWJVxSXmuqV4FdtRKqntb8e3Gm5Tn6JNMP4pyP37aKF3ygbq9GAZYaccXpkQ3W1",
  "key21": "66vLiz7EMZxRs4ctBwWs2UvYNoQPTqS1RP1NH9kZCV4KZums4e6xTJ8sFZmNcymaid7WHkq4hnAoBP89zXLjfjy5",
  "key22": "2DB1mLAtPT7mwWkUZmf6nCjecsoK2g57Y8rejSHZUgmFMNT89qXZijKBZFxQXkTHpReUXEKdBaBQau5hfYiF4ZQ1",
  "key23": "BZQZmKrf1mtdp9tEzxJRiJQsaoiPHwHUgXUxngsnrWDfABVrYTDJaEwUGWXap7Y75XB1isT2n8Jz7Bf6DSdoMGx",
  "key24": "YNfNSBxfFHTdzhXEkN6w4ZonyJmbGPJ8rtSt4ideAusm1DDWW5XDx9hoygZirvCpkJX7QP5cQaFuj6AUMyhAqyp",
  "key25": "26dp9nN4jrCsCtSd6YTDwvqnSw1iK9bPMB5Uv87bmPkhML3Mh1wU2L4PeYuLac18RmtRVg2dbFTqxQ7CQUa3mTVv"
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

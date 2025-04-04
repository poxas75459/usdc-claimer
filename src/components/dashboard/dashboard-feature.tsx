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
    "9pacyA6gswUbkbTQVTXXouHsSS69b3XXyrWEgt7tgqGK5hhX2inaGxpEarKSrLEj9jUJr7QnkQWVY1xUj9vXdbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C3PBkxzsCYJzsi7MgS94urviKAwCrnbxDUacyMMV6CgmnTahJrRzsH3HvLNTDK3ETjrjvSLgngXTp8UcjWkUbgB",
  "key1": "5gb4RsopRqwNmZdqmZZeLBS64GrDTzQcR8WxjD3izKuHozFTijeiZbsrWoyaWzcqpzpmT28AzU6aj9ATGHNCEtVG",
  "key2": "4dBCHHyDvgmkdLHnSdopBW6TKmDtkXPPZpHmfQAmKCzj5bu8y8skVZbGdFCRFM2GTX7x8qqXWKdfsvF6vFMSFFVs",
  "key3": "feHWXpNfcaD4gKrdTRxM6eUDS9s4Gyw7ctKA1kKhtj6bWRTbTzm6xTbm5ndJfnvELvQfZ3CHbry3su3QrpyMtNF",
  "key4": "2mjxykvFXUT9YqBA9ZvHB8AtVYc9ioxonH16r1BafwpUyYynyodbWWcRz4XuBnYGAo86tYouYSZVxN4Y6oYSbFXW",
  "key5": "VSFpYino7wax6imEpJzDyiYqDUTMahtKHzLyuXyj5A6uRvDLS9Nt2q9Dhp2HJ5tsui7Kd4Hzmu8vvn6UhGHsdfq",
  "key6": "5eM9csHMvF4bjVux6es45HrJxqEa2L2N9kMyFhDFE1NMjWyXkLH4u35wunxhRWJD6otkd6weugmH3KPETo5oTKqM",
  "key7": "4cxKiXPccN1nhRZBNZDPerUcsQi4jqDHsGQSEFyPVLHhm39aUnw4pV2HFZLbVkeFz8StD3MgpPsSxwWLUXwDiTqM",
  "key8": "3QRpzBgaUBpLimc3w6K9cyXL2bCMaRqdSzvsGHGu88pvYktEJVS77fyLB8p83E9exm8sAvruZLjANqpz1DaBUes3",
  "key9": "3W4gkqTxcGsVmX4PEzzbRDMSnBuUkaJz2VXCgjwyiqNEJ7qRmsjHFXLka7fgndSM2KqRRzhZUj8mQ6GoEHCbMhu5",
  "key10": "3faPgjmnfo3gi6ioFrFdPC3hWcCFgSPcKUSTZgo8KkfAfFAtG1qz18qhakaT4ms4WdWtFhGLAkojWTop36Qctisd",
  "key11": "SmkLyJ1NvgdQhJaGG4qyV1tbuAHKp52tsxwuJhjVQmaQKoqfTSi5NfCx4ZxtoSth9UdvrkwBk3BdpaeKxLzC5K8",
  "key12": "4GEYxvfGusPAKXcFxgSMdZ51MVB12xqVibLwS5q6BVbDjqkPAzKJFnEgeGint7LNaydJo5GLZEEfXpqhVfqVakAL",
  "key13": "5siGxya5fPoozjrTf7i9DbHuq9ERocDcqsdevkBjRCg8pqZvSb6NuitY2JrjWomgBFCpriYk8BYFxBEUhmA25tmK",
  "key14": "opG2LpVv5FqHJTMQLvhbhDKeM2JtP4zjkmmWWUqw7zhMzN39PYCREAnPFzQmmgTKJPnJo81788oLx8nLfCgKZ5o",
  "key15": "4eCPSwgzRqGfsqLPAYj1HxeWdfKGcGuJBaRtm3S7eSQjenK615A3Nj8NUQZ4UqhtjDPghSiWTkDoFofM3poVJKn",
  "key16": "5DkGAazqbsU21R4aBZJXawnBhriD1ohvtaXwMds8B3GCaVYBXMesVNXzBHoy8PzenGDtBatHigbdYSaW8CeCSHXe",
  "key17": "2WBCGqCL8jtjTXH1JoDFG3eNoTSpHy8Y4x2CtomFmiN7fjYr28tt4CnFtCC9dff8tyMvdQEBNL7331D8qBS8mv2F",
  "key18": "5KMnoU5RwfVSN4UTSjDZpGKvrBqXq7JJFdGgPFdSrkcX1tdnmYWuSD344UmnHYNGNnJMDF5EGmQS4QDrgHNac8V9",
  "key19": "2aPT7WPvHvzLkZNNwQ9GtbW64v1jGYTSiS3whvTmrH1pZoYZEASBhNou7pMC1PZTh52mDHnJno8U3mf1GqCZ9m2Q",
  "key20": "2X35qkW2aQ6yJ5iXyHfZX4j4Wt4KZEskR8VMcnp7epNQhRb6gfkiKYDeNa11PTJ7sMwwyNYnGR5a7oQ3MHrMtnsE",
  "key21": "2XvVok5obbwJYUKT4eTrrS4GE6hfHha5momDxF8Xv3juzGSwsHtZPw7VV1Xun23hnmJW2zUsdqjEALNNS8sX66tD",
  "key22": "ioeTj5K6S5i1WZH1gtghJ7dmBmUm8Q4kprYVxXp5DKf99sdjdxn1CRa1hGjEWYvDdsS4BPTvQw25zgbvyWsY34b",
  "key23": "CWyGYW1qZUbLP8juvw9nH3HwHfVpEA5a8PF3VuSkkuLDdoTME7tRZPz4rbJZr84cnULJhe9psyEcD5QeBkdpnW9",
  "key24": "22C6A8uAGpLZn6H3sMNCeUJm3yeUgeqWwBYw5oNqrzUmX2XuvNU2iFTAb9kRCdAJ8zaCr4ojSBPPXF1MVH72nZ8L",
  "key25": "5yBHh9zG466DJ3MRnFu6KMFiCuopsMsYs6PPPB5j1xbHA3wqEKE2pqcrpd7sgKt2Y78DQq9ZBS4Z7bndgdnJ1b4G",
  "key26": "5rYmY85T4aq6ybRyn74bLamTajGVRjWnipDknrGSmVTvhtEcDFW7HjAF7DkWwZgEHgFC7Q5L2C81h4kBAt2cJGxW",
  "key27": "2huYzz8QpSjB8mvf67r2dmGCbzQjS789TrfWCjXxfeGUcLeZXc8X5cY99YDK1Xz4bgCV6EqASTpGnQmQyMiJpinD"
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

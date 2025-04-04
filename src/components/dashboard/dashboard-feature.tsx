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
    "5gu4diV2wVKf7BruaYyUJk5YxSivP5ntCjriviYWjAxjb9Qg3pewBp39wM2L59iGvkjD4313XJA8iuJMmTR3hsuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ELHzS3cGsgd8ghfmcbW8JUTEU9sKvpNrDJhc3L7BzdDrea3yXEj2aRxKGZipyxhYDBYS9ZnzdZxAWHfnutzB6Y3",
  "key1": "2cTWoL4hSE4ZRkTG7fqjTf27efmt22zDcAaxuMFdvdeFF7R1CR6VxTWfXHtWhKfHDo8Wj17dfqXi6DgW16KP1zP3",
  "key2": "5WPDj6xB2PCfYWLh6m6isJXTH2DnTwupFQjLWgnYbuA51mYnSUZowhKLawjpEkCBhJ148yC5CdPxKecjJFE28YSG",
  "key3": "3DigVTgU3K6CFmSXC4nENMkZjGp8tF4W4GMkp3ovsA7wh3c9QzyZ7ZxJJKNbzDhYdoJwgYBigX5yF3QZW6TUqiHo",
  "key4": "3kEWVAHgPvFEAa23qkS4iZZDVRDxX1YVkNyUYatfEUXUaPhtj2mwvepLAVSFR5xgQnr3NnfHrKK9tx3w4wpPGgXk",
  "key5": "2MNQ4BjrNNbf9Wy73wX9PpFQqh18swVKTNiqgvknjztEQ6PZEw27x3wFreLt9nPtsWCt37FGpQmMoHP58B729ZN3",
  "key6": "3TCExhH5kXs5X63dGxGFzPFqbXSPfDzitVjpetYgj8jikiTJgDfixGatq6g8iPRLntpcXBEASTtjNXg8SmoK4j5e",
  "key7": "5DZzbhSuVcPz3jcgKBB2pQ2bucK8EMNHNopcsYszDBGPR9SMDxNaVcDa2EHPVW5Kq7DhBNpjvARvLkUrP29sB8wD",
  "key8": "64SJs9p11ssN443zP2XhKPTXjY11ibFKTNcTfErLqFKXrAvhtGYhC152NjcjcFwLCFYTHhU8orhaGMNA4S82Lung",
  "key9": "2aM1jTBUjSNBdY7hmJahkBh7V81weK13Zi5epFv3ZVRrJWhCHj7NoMXbKywm8MY3HScahv4xMVnzf1Fu8eNuKWXk",
  "key10": "3EbiYZAFXmpT3NPGxAhvtYMfjCsWuUuKS5MrNaNxEExReombnBWK7VdLGNqC1vNnviwCRBpKcLtNeE5e6YvbGVD4",
  "key11": "5Eaw5oCVUjtQa12YUbg2vSUMD2VB5opbbS8HFTiRvV5SXVTYESp83eTXr1XwK49o7xEXGXHjYAVbsXXnvnG58DbQ",
  "key12": "5xXWhDHujrtz3kN8xXpxLcAPe35YWu8bLqHamcywNfnwAjVzKtp7Sys5DPoqMCNFn7WAtehNzmWhJapz7ym8fYsq",
  "key13": "a58TjyAyQXv1jVYfwTeV7mEbWmwRevfpAu893zuP6EvzUfn8vHRkUS6WCDPdCfZq1hFQXotSTq6DCUUazTAvCiM",
  "key14": "4qQvLUduzeGL1fsy3kqNbHVoWHDMGwfc1JbVVuMTgCKPNggyKhExuTfrtKsHzb39rXTPoxktEZsA4BFP3iDBVUPN",
  "key15": "2sZK9EmEm7zHh9LNzzXxXJn9BiU7Ba1FDpyyxB4zr4sXMTuA8ySxJYEgVzbcjihCMbRJXPouCtsFmn6u1Jyz2xEo",
  "key16": "2hn7CR1uWjJYwNdwGvGQUNXv3xfZPyRBSHLHQw5Y54N8PpSEAL4hdXka7GDRcJBrnv2574ir2unyVrjsngpJfG3a",
  "key17": "5b2FFzJHCja1ty9CEH5bSMoepEYQuZatRyjKzrUPHqWTJJQkkw7qwVWSubd7HgcwqE9SfHJ3Z9PV88a9xg3MZiko",
  "key18": "2Zv9jfzXsbQYA5nVqNBq57w7ZiGhqjBwft7u9r12WCJ4DMkfDkZ8BzavoDWJRxdWzhwLyw4Ad5E9iMgWJj2yDbEW",
  "key19": "eE9mZc4Rfw97qjSqAr5NVZ43MVWVwLsvUWEgyU6Li75y4hGppnWQ5y8nMn6WDL5btocwfDToLUpY3kSQehkpaUK",
  "key20": "2r4nnBE9d4NiN21yhQiB4oczenpVnkYVPuvsj6LT3y1aDBoxrpBTG662D7AcanQYEFJxAdfPifPXd3b13BKwgqm6",
  "key21": "4kFvCATfTCrN3taXoPbtbgXBYkB4Aw5xuRViYuZCS2Ty1HUSXj8pMAdhNK7jAyaRztnrPGaiJw9So3Ttas9CFJ4v",
  "key22": "5S4grwqsqfRVuMbXDXXpioNaRA7WEM3F1KG6Lx6grZFCpYXS3Bd986bzWCRd5MWvgGABMCVdnMveoEPTM4ZF3irz",
  "key23": "5rj6xacr5AjCGLUYZzFvvjKWG25VwgCo1cjZgdywcwiWs8t19AMh35vF8oDacXxYmfWGDpubNxchGfbLrYuoLoTE",
  "key24": "57yY3NvUGCSnHJZDG1o6xix588kneraeJpiWz92nAwkHc6yxjhNa7DRsHaSshiGsruQwC1zW2nsC599xGEC7rnnH",
  "key25": "4kjQEjxLaG6CdDNpR1pBwDdrTFgorKmKZ89GtsJ1ALa6VyLgRT9K3ZXirvVpNcweSQj5LFyQhaL9vqK2RtwSsTwA",
  "key26": "42aCcUjjSrts9erWDhMAZKnMQPNSsBjvpiL3BTHmRLeRK1K3d1G7kBsurPoCz4HnrinVWjBeC6ECJ7ULA7FfP412",
  "key27": "3NLPT3QJ8XFgq3KZR18onr2AYN81M9LD16QQc1wHR8vRUgjRJMUtFho3sfxKYQTKcUFchgoyRm6T5hSmNJQMnGc2",
  "key28": "36AVYZrgFSBYMrGRQGLWpLXtpnV4o8QXvUm2mikzPUHQ6CGM4rZut8C18DPratdjhaWrY5dnBBo8AvStKJ123NRL",
  "key29": "4W78U9HogHcM5hzKuGq9ZBQ2bi5QuSQhp11cPiNUqU9iV96Xo22cwyzDiqVMg2maUjj6ooQUHzCFAMxvu5ShZGYS",
  "key30": "5yCsEfBZHNCH9hu1Ki5zZwhtrYvnLNrHV8u8YvLExcizwDkdVwff9XQ8FaAjwCahDe4xQhvLr5Sx16UpGB5Tt3WG"
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

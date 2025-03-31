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
    "2iG9DUhbfNH23tVRGRFHMCYZox7vJMYS2meaPLrAdvkDoNcL3cJ1k3fWUKcuPP9nLjjctNpvEMW7fa3fGvxaynE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qMktBzNJ8mFRoYik1eeaDzTbWRBr7Mbde2t6HntyrQPnQjmFyfGtvFEVxZcgaUcFXWF5vgcQWyRGcNiwRCXBco1",
  "key1": "AU1hqrcHtB8m4aYsn9hsNbjJXuhCchz5eZTMoMQoJ8HEnEcUDmymBKLD79T1Re9ZmLPtSorHj9CFn4QV6YptNRk",
  "key2": "56War9PvFfB7JsJoonzCzLu1dw22PRygRMwtWMEVeGX4cShhonCMN8mUU1yGABYjuquHVr5rPdt7Gdh52sTCoj7j",
  "key3": "5FEPhj1Ni5XgZpUDqLDH34RoU2F5bVs2bC8msaPdShT5T5wwUkUccyivVaPdweAyUANn7m7ME7yCUW9yju3uERUu",
  "key4": "2D4ghuouxdU1LDCJNXzThUcBrcSEmvhn5zzceHRGTWm5J3uyec7bhCqzAKrKkj2M9dsyYRk9UwSGNT41YCpMmegv",
  "key5": "252dt6LrdRzMTMrc7qvJqqGHvQ4mp41DYXYv6ebBdZ22x1kjtBuQqWtPAAk3kXoqH9QXSAX1AxH5K11iSETTotZf",
  "key6": "5CHDwa3Y13QpLTXDRrmAXgFbBVvCTZxnueYj5tPJ7jxU9nskG4zbkvYDXXb3wUVwtnaGukuRCToLNKpEuLZgJE6X",
  "key7": "4jVP2BPF4ttzpQg8e3uuJ9SqYKejceMNh7xf7k4VWH6RmGTDfXHx6YUMFYFdq3yq1RN8G4Syvz8tbP5wyXy8BNTV",
  "key8": "4QCJSARFvYXmLH7Y9fcgZkV4U1CBG5VxqmAVtwLkbBoAKuKK8K6FJPktcb9QuoCnMwJRBesZjRWfiQdTCaWYTMbX",
  "key9": "Ggrv6Tm2qfFf9S9UFZHoS8J6TKdFYrutcSCqZAkYuzasS3oyAhwmuVcv92iDeZZKi9vkPDzQdZnAUPAwEX4T7JH",
  "key10": "4nJFxDhsPumJB3udtDY2YnfF97mphg6bhMCSDQftLtjZ9WuhMjdUuJHyyLXm1qn5VN38oett8uGmtrYErWTBVs41",
  "key11": "xNa5ai21xhY7WvFyhm9u6uP25P4g769sFAx2dMbmnU9FKdXK5eQBtaTW5D986Vbn5tqLDj9ssjLTEGwwg8MKiYC",
  "key12": "NUCF9C6xmq8wGr5JzYQJo87eV6cu6HaXbpQoKT4ahiH2uoDddp6muYgeKix1iETMUDyQ5FX6WLpoHa2MQAczwMk",
  "key13": "2dG2e3HacxLXFrGLPoH6dYqDCH1fFcWztbWLGEFELyqrePNz5XB2pkbNovaTaVba6fL7K6Pvpv75nuxCikMhSoWi",
  "key14": "62f8L51Gs1SpvoESBkwuBcqnG1di6KgMzEC2qyUFHDZSgiUqZq2ST66wjM1NtmzXZNXoV4LH7kKm78wtdioitHDd",
  "key15": "4q4nhGwTGWctsVjjFs7tmizjYFhygZE1F3vr85Tt7YkuNMp6LvDz8BuL4iQBu9eTx5RUifPuWzdzVHy1GsFkgcmA",
  "key16": "5zyWCvHxXGn8tq5Mo368BmmgbsSGRiMfcZokdWdf7XnsGQEXUNyhtk9c3W3XstHGGw2u5eu5jco8fyVgxnuyzNQc",
  "key17": "Ns7K3Jq8tpom6zLNMauKsaF5kQDNRykj54FkeCHpP9wu1nWTCquuXX9MtqmCYEhEMQsub299Tq4qV1CwBtbu46s",
  "key18": "4ZgzuqAJ1mvbKCwLRxMs4yUQh8KmCQbAQsUYsGJuCGoZiYrqHkLbrN9cGn3CiJXu59uxztM34LjdEH7EANs5jaM3",
  "key19": "27snaRhyD6biEeLAvYW2QAFzaMYa3oxKJtxCk8AtfzDeRPwmfQEegrJbjawJt4p9X9nAZat4CMSSCvjpurTFD8hQ",
  "key20": "5QxJk3eKYeuh9C17RtVBohLMyHUQk1KhVxMqVSfM6TKQ1x7YuEd8knQa5u6bkZGB558xYGdq9i4VrACxQhC6wgnc",
  "key21": "cEL8iyF42QF8DBQQqPUKtfDV95qNEsBpJcoi91r7w2GFNw25o8cgze3wF81FHrxKoy1zivoEvPHqKS8cP3Ktfw8",
  "key22": "34vEE9EnLWe2xCQVFp2mkFaYAAt2v4Wc3yvTdUkr1wJT51USC6xeqQ2jSGoWSaMsFXifAKeCm1rK7cGn7qC3eFMA",
  "key23": "e7q6fXfUP8ppjuozJfpJpBJpR36jU3pFybSk12MPMo2TkSBxGk6inWMQUZ3jhNiqhrjDdQaKw6X3uZw4uS2EnEa",
  "key24": "2BmU1mNSSKG5XGUbtkiNUYrMvAeNmUjuVa3EoRzsiFoyNxd1hqBvhnV54zZDaWoiyv4XoVGisKmwftAey4PRi3BA",
  "key25": "3krnQg1nmxhpcnt3TfqAC9wpWhU6ZfNo8UR8ajkrccYDNugkqPHihhpvdciPbGbP3ECgGrEDeh2kcuGXmDU8VP6n",
  "key26": "5PP1CqnnELuk2jrizHZGBiKXRFzSyBjE5wKaJzKFkuUheJC5gPZKpQ2xA3YwEQuZjLvXFr4YpGgfrMtRHsvMFwRd",
  "key27": "5oouzFXGHG5fRqUkFiqGa6ci6agh6AXmSjbVjm47bCG71mC3EwdRpc4XB2xbNE1cu2YLXP4Wq1mwHig1uiyF7xPu",
  "key28": "5yaLpdJw9aTKNujTajbh4AjZRG1nfegmFETZmfrhynjwEMoDRQ2TpjLzmx7DLSXgoMsaXvZYR52fMa4eqajtbZzz",
  "key29": "xqduAQaAvfw1TdUoX5MeBhZtjVnki661aHNX5eDMSc92orwYtmkDtKCWDNcWxRbM7G1K1tGHEaesRuBZrF9ZmAm",
  "key30": "64tpmEMFqKEsoSvcAvkKdnhJKHHuz3Y5wRaEHTNPCc9jSbftqS9XWsNNHXEGEQJ1uCBoYfjbZPxPcbxsUB8m1MWL",
  "key31": "3avmqKtvdTVncR7qoBoyFd6c1MYzBsjXBiF3UGpkDfRoXgMQNfRofnHj8LCZxvYtWqoH5uTpkfgihjuodXdyrR5A",
  "key32": "3xTRmyN8WRuoLz5AkXZfZQXv6mufdnS4tViinaVB5MDmAUywZYvkBRzgkaA7CZ37N8s5VYcdM9VNnkgzSSKthyGN",
  "key33": "2eSoRrGoarTc2P5QijjRf2NibQNQBvtbJoRM9A85UjjNf8TpanV3jLpme4M6iZeFVvLTRjkoEt6poGaXAeCJUknn",
  "key34": "r7sKxjDyqZ9DQMksewQQ2Bm4aMXByXr3Bn9DuKRVixJmWpBGCj21xdToFsKH8mFKJDQMC2xYm3SvBsCXW7FXb6H"
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

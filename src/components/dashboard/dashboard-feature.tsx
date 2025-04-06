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
    "3mezBSWmxz3jqQvwCzGeW9NBwnr6S6N7tAaRgjugeCkbpuLaLcLstEN9AEsRLGPT2FteEs2ZQrnmtigSyz9NjSZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbjBt4oEnernCcqjzZuEygevwGoR4HS2Btb2H3MZxmS38HoymA5maSmjpmnBtNbAqLUq9v3S4j8AAooXnydet7M",
  "key1": "66PT9wL7bohwEEasWfM7ib6PuAjN33ftWtiCXgPYnL8Z97xFEtZz8WN1sVUo25t4deAcY4yCkpAgmiqJLy488gzi",
  "key2": "4o6KGre6LKwMph5iPHx8X3jwc37d9bFpcxfwWmQ8vBUFmT61VT2AZqaUh89pxKUi4CxyPSDGApZEUxXeFBpjxibg",
  "key3": "dxuPvoA6CYhwvfENJPqhsffLbvAzSnvrZUEbDhrNsc2pqhkm83eJYhHg9bQYAGSHgxkfdrrd6rAbjNVhsphhjAW",
  "key4": "2HPweXwkBfrqp95cQCvUadDoS4NLHFSvQ67ezU7eYJc75xk5tPEhgabiRrUpz2VRejjfv3UNUZmatG5PQWXZgqEa",
  "key5": "44ZngWQcYyrHtXUXw3NrBQtuH4AWgQ1bQQ7BbZNQHZyP4U1F3SG7edwGePCuwUJFWEB3bW5sJpQjQDqbzWjrPYaU",
  "key6": "tQ2LXbTDKgeq6KDQCXz73NE5Rm9tiP2SNyn9rwkLskhS7PMgQCMkc7MPHJijBX9QxA6o6Y2SpWwfHoddwM7vmeh",
  "key7": "61PUDuvPoCJuSUoUBzGmFB2UfJxbuqJmSkVPw1PwjDAsDo9Rfc2XNx3kmCE4KMwJ2P3pWzfFxfnewJr7pkMK8EG9",
  "key8": "JXx4Dgz4aSeytLxdXoaiUeFf9neu5DRMc9cBSWEShfyrQk1qA3vdzDbabopteRabwZAq8WBVNsdtgyNRgRs99mu",
  "key9": "zZhPGDbyLVGrmAQLNu17VQU98Jgo8sy7JcuD9GQ6BgPr4fmuHrMBLqCVgDmNQZt8G51a12ZbTtTisDnmMQsEobr",
  "key10": "5j6CsTGsbdfLnoEUBMkESWgtVk5YPHxeeenjYJRt7VGwA749ShJ6NfJwSWNg4Gmf8niWmNYBS1RCgXGYx9AHWdCF",
  "key11": "26ThtjAdsuFoMDgMonTBqhcWaCHSL1v2U6S1PcfDNz6GSX8nnELaU9ms9vvEUVXLEJtTgxUDfZ7bVnEFK81veQf5",
  "key12": "kTdNwh5uWTrYdqND1YfYjq7aQrJSohDK7gnoTn8mfK7HwijDbRMDHMf5uTAGuGYa1rjpcHYHZM9RRJHAeNoQxRL",
  "key13": "4UKz47jNuakkJ9DnN5uLi3kmUQAGcNJeTg9imBSkig3su8fcxK4weBXjRtjrERWF3RH8mJQAnAw8LcGM2VqFGMex",
  "key14": "wMjaCWrjdrw42hHw1kgT2UreTuQPTpEr4ckWf7Qhoy9p5VCvZ2AWX5LMLnWikym6QU7SQEfbdEvrmP9GHVzqsPM",
  "key15": "2XciT1LWzSFfhEoMDQDyrF14gen1j997CdYveXMdN3qoBSVuNXihVSzkyqNndHGtMW4xRb6jTNPvzpY8p1WywsxW",
  "key16": "3GBqjCdMb3de74tB6ur8FqCsHEcyCNWcYvRfYm9fifadJENDEyYs9GqWizTfqPRTGa2UpvdU5Na5saF2fxZKDpUJ",
  "key17": "2Mx4RQphFkFD8wN4ChxNWwXrnjZ2skZ3KURjcMRoQ9GLtrevQ6xmaQbQPg95v4UtrTzQqN8Bb1w2tVCSGPeSdp2B",
  "key18": "4hs68mBPN7LC2TsQzm1UTbtd5sp7n57cjPXwUrEDcZznUvcKmqcdAxboqK55sfkVUecE7vFwoq3tKzhmSEy2J5ML",
  "key19": "4ZBZNgeKsSBeqpuPzkyeqSzqAkz4C2krKEJ36XoXqgdAoTeQpobzZeNmS9xFZy68utRWBcEz9kzCNMmEkLus4Dqt",
  "key20": "5nYH9wkj979NjpdJwjBKofWDxt7rbmy2iAzaTCdHso45eJe3eHE25Ym5eazjs4HxjNPiU5bJw6WcTLCqh7cwnkNr",
  "key21": "2pEJvmKZJTW5LpsJUc5f7AYzWHtVyhe5x3CCaGKCmhGiN7W9zArAmrV5Ewpf2aHgV8B6i4L6zM1MxCqRAzauNPAK",
  "key22": "4ZK6ofv1d6dA1m59XdvQip2eH5Chp88h5tWGnWxDEum3XLtjPDsTtyKskccyMqwCpKDenV1hHL1vUsaLaerSPvT9",
  "key23": "3HA9VgtWsN6nMBUGxdqfCHgju5cQw1uPNqwWHqhzLzrAtSPVHEQS4v4yaKwKKjE2zQL3KFEJ4emXBaLXc9mWxSZZ",
  "key24": "3bGKxr7wKcNg5KSSqDoHXzWkhS67cHL8m1ssztgwfdGASvXKBqaemgmQtPYRq9kYPfpPh82ZmaiVTRrWizNWi5a2",
  "key25": "3XGyErJaEbmpNktXM7pe2ACM9udxkiyV6X8bqhRvWYoVfsyXbTc25uSmM8PKx8Z8ZUBAqYD4aPXkPVvuztpKeNEV",
  "key26": "5sPvsZwjSc399kP2tWVVMoYUyVsEqWqXpQDB14noQA265K81wHGhwnZvYLaZqS4pSNc4d19JW9khqxGXLX342bT3"
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

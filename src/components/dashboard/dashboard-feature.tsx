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
    "4xFDQw33e7rx2wmPDUh9Lpnw4NxEDxVPvfTjTe1RhyKSkvNkviJUseKZYPsuAMqEGjimBindogNXCyok9WqJ7rnT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ELKffoSVBZyBh4abUyTYtZJqmT2moQwnuMpDxoED1Do6dLuwCEKnmRT1b8dgo6kLRtyw5JumHG17cmH4bSZGiUC",
  "key1": "UieP4DAPrPZ6qUGC2Pwk1DbyMTLzHsHXf5DUii8JBJaf2Z3ZF8RKShhGkS6KaF84yviZAwTPDqd61LaouJHDJEg",
  "key2": "5futD4cz2FBGYpwxTTNok6kxJoqy8FUJzZ3Uo5yDWFabVnoFbjv8n8gBoAvv2UQCZq1HHa7N86ay4am7pXAoNfr1",
  "key3": "5J5gprnoXaXg12qoyvyTUhmbpY441H6iUWRPAr2hz8ai3ao1Qw2f3ccMCCa6TiiD6ZqLL3oEBMa6QR9kEKoL5DkZ",
  "key4": "46evJNxeFDvEYmheC91z7fPJ7mSFPrsnDxcHwoRAEU8rcJ8KzabNF4qa7n8mG57vy1NMLMZgHybFiWVjpXjgC1Vc",
  "key5": "3fs13DChvum6ugAuzVhTJC4os9LAxzGYXQQJ492GEdrvz398gfB3TSSj68AmFPmcRCq2x4zxdHdyceVwJUNvauQ1",
  "key6": "AFDVDxwVVvs41RctvYnXApSL6Vy3Ya3npttwRn4cZsU2FTcjFMnFcC3ytHZbs7qGgLgu6xthq7RR1LC5cyvJSFo",
  "key7": "31uosP3HJsJgigcsn9kdUdajbiBBhu1E8nGFPFY4KDA5Ee4yBBLt7a2MkDLmoGgPErWvYz9rJKiYJ41ToeGsbsTA",
  "key8": "5nFLyRbopBRf6mH19r3gBbDijfmw4jWPR28YaXaHx1CtY46w2661i62jiWLxxju3f2GfpkMfiyG1FtWdQMDYAUjY",
  "key9": "2hZYjvCMxPNdcVoWhs9TDfAwhCtJbEH8Dh1eg3nt1FUPH5eWQQLtxwHD7b71RWZdua5D1kSWDBGQLm5YiyeGD1J3",
  "key10": "4HFuTb9acb82Sab2MQTH6wYJq9rWaSNHnBGpe9mpDSmUiXRFtgkUjm4EHdeZobDX53j7owDkjo9sTyYQTaF7ssxj",
  "key11": "3TBqeciszYcLeZ5yNbkrC5oURNnNiaKnrzYaNC4x2Q8Yd5xRf85pWxMVpzoWc8xdeVs5B9qWa6qE6kEX5KjTb53u",
  "key12": "4mWHTXJm46jcRDRqoiZk3iDeF4VXPES8NQZA6DsFrKdmRrJRmFUznZdDaWS2Rx6qnPzUrAw4aXLvhC4prsWsbuwE",
  "key13": "4FQCakuMYVxbJ18KAfzC4AAnMv8ZyN6hdpcbexisnFXWRk6UbSXo9kogYa9RyQnRAZd2KmFKh7cNd4kiWSdwUM8v",
  "key14": "62jmC13CYsVPLq13cZCspiHg65rAMhe9rZpHy21dvYfDyY3vWwnHp5R3APzu3K4g4dVMeArDgStuuArA5BPeFuSE",
  "key15": "4CrJFxR8pjFeq7oxePJaJ1XBsxibzyQcMJKzPVwvNwtGujwGW8J9UwPiH8MKrn3sgGE3cTB6xzLiZZJtwexWV7yA",
  "key16": "3e7Nf4rNhLQ3Kyqjp5qSqNgeBZxYP37wdRjn3thL3EmagwsHWtsQDammFgqUVcqYxM9sYQgkd2uxCpEx1YvQSc3W",
  "key17": "5WNZ6xWZqYpsx7CUmHdBfupSxbwKs9zDaZhj1fhkTAp4osKpYbqnHjdQ1V5xJ5x1oiaTWNDCzXvvwXwFY5XrBXfq",
  "key18": "2SbSnnvFo7a3zwyiv2E6UwTcCyCN4W2zYodXLVBaxS3CTx7v2U4HSe2AHwVTuYbzd9ruE4eBYYJhfhVFt5eaeV7G",
  "key19": "3hG2Hh3dZERoMmfPQwamotVV2FikzeVCiJw6ndRzrqMFkenvDJWZhwNJLodyMbmg6vkze9fTkhH4iF1Bn3hMw7eH",
  "key20": "rwi9SogCbuvMhuBVWXWbvrrrPMJequDDg7XKqeAkkYyKSvuNuowZFYHtzdDk5YytNhHgFfQNE1C8T7WbQGQtByP",
  "key21": "NoEFAV2gVBeYkwnmYGSBnetq9roFqaq3DFYkb4FtwngL1MXWh6U3YMxxfBjguuUMfBBCw52unJuhrc8N1HU2D59",
  "key22": "3QGcjwssjDbzmkZmaYPCbgzTqMrCPR2dSKB2uGPF7WKCVPaBZK7BZxD64fSzkit6prcmkcHzupeaacyfZJwibJJ2",
  "key23": "5TDdLPwubTYK5pwLCUZzKyuwFVwm1GPex7pa4qhbpU3sT2E4qBftWnK8vUexvy1bqNkLokzVcGcVpieUxq3MZNwD",
  "key24": "3YfN1vrM1gq6u5ZEpmNfiSs51ytcGJDDno5LnbDhksKUehdFBN3xZ6AbGvo95X3CvDjqQeVR4pfMD2rHTVktnhcf",
  "key25": "62jk9qbfFQze9kbAUmf6iQvh4rXgSYDzhMAagoK6bqoWSCtJwBHU5PkF4M2EnnRyYTdgJe7fzyhHYzhs1fEnAiJr"
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

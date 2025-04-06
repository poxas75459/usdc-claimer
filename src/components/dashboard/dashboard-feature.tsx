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
    "4dRTQ41tCGeDKgrvmbfE6rw2iQHPrN6Nbgum3kUf9g1L2F3vHKUNmXpYyx6GSR32cPPSUppGCcjrTZ7UULyD7Nb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NbTR3h5BjLiRF4KANwYVTQ1jB4svJerkHdrhphxUHsVivGD3t8jf2ALsZSPcqEEUCvskwRYkFLDeZcgqQVHd8oh",
  "key1": "2f5atix7czTdgAPDbW72Pptpm1fWom6HfGZQjD3b3x2zxRxs9pmcoknwEP1c71ojzeHKpSbNmod9uygNECcmNDAN",
  "key2": "3tNeEVqchmeAocdipR2JHzX6WsYJN4R6rqSnjgVJgLyukHYKFnJXjpKkZrpZhthiNucf7cYyvugeqynpaR2Z9vtq",
  "key3": "4E9WrXm1b8un8kB1BmDPgppyW7H36i9wDYCjnrzBJDdHpJRwhDAyNSQ2LFBqu6cKjJq6DvXmCVYApjVnqTjJ2Ev6",
  "key4": "2gWx9gkk4n6xVDY37zDfwNTVqm54XAzBEkSifCSc4VBZ7L3v3LBmK3bnGWh8k4UHF98H8m4SCSvnXv9hjtMVSUAU",
  "key5": "LH23mmJBU4uktbyFNCArGPDxV7rdvry6pARfDWuq3KvqvrqhgYvcmUaec1braZv9ATVQYVNSk3CFaX6SQvTASLJ",
  "key6": "5DoSGLyQyWiXgjsZkirks3kjyZ9DtVjkBjRrLVCMQjbrGeWaGsRgjLeq8h69ddkX1eskFhX7Pke6nxayb1iS7kG",
  "key7": "5PExoXLgN5V8HQ6YTyrTc69coT1741yJu8vhdy2TTgE32erXQ1ACxeTVcaA5HqMsZAFgTwVY7fbXXQWM71bKXidZ",
  "key8": "3h35DN5Wght8BgtHBaejVX84jFSgsGkA9dhsEoQFDk1RMvBYvUSWsq5e3FhXMJz4PmxFrie13JNNSQeQbrVD3Q39",
  "key9": "3kcyXqgS8jTfMBBMWLMYibEHhYPGPShrqDFGUrth7ppm8uJb34RLJhB8sNWg9ZCjsHeRx17xp1bozKN6gNzWCURg",
  "key10": "MVDSxpxmYgGzuXC8c8rjwywdXHz5jsCj4ZhSjavQKLJ5DNNYN4SxEJKtEDjG2KXn6Nwz7WmgRS6HYQxG9RWoU26",
  "key11": "4Pz1gRkAb6W1h4ag8tF83qXNd9uGqmbnu4cQaQmPMSdPTrNiqiYB2w4SRa6paJEszA2PR1XXy35164HGMrd2nYYo",
  "key12": "223tD8nddMhYQo58RkDKiucHK4dfhd2HsoRBv93U3a5FwvSZ8Xa4Zrk6zgsbTtGPeWB3hXeA5Zw79CmLrS5brQEe",
  "key13": "65dxEZKANMNyjY2Lurx3JZiU6JHDQnsZfc9xg83dKrkGDL2UMcbawC6b2au1SNoz8iG6iHDXuxBXJ3vEEbJupvB9",
  "key14": "fx4q5RChajNBHSFwajE83mpZkCcFVoAbHa38bEg7GTtSKv8VY16hLRvUMo5dQxHELX66rGCWcQfE5dPYEjZ8SfR",
  "key15": "2rbDcNbkQWhUuAwqaFDZNyL2hWu3pou7Vktim3oegGkCTcyBEHMt3b47nkdbt9PvrCVd1BP5vTpUcpGiYDAREHMz",
  "key16": "5WEZ1YdMCqWbQfSfNUZfVKxhM4gVn6ayhpQThLTEDoKuMVXAr8E6ZCBh5ueWf5bwNmRGRVXhfDKt2A4s68NrnsYM",
  "key17": "QJ6q2RFtHf22CTRShXUt21Vuze7ppjRs2rBERCYiFhdhMbu79a8oaiYBCs6S71uGfDpZmh5U5ibcGrjeupjj5zm",
  "key18": "dTeXiN1C9mdNLKEbp6qdQFVUPwyN9vpfPR5oRdXQFyWtqfrwEkzgaUA7PWnoPHs8MDicYiDDBrZEPjpUvw3gQea",
  "key19": "nZZrrR5mmQXZLnEMMhQd7LghpAZak2C3CMSFFcANkHz7rKzHojqEF8rkGVATnN8RT1sqxHAo62ivqB9B8ffQtJU",
  "key20": "3KqsruZdHsTLj5Ny6FHLeCcyrVk7sgzSQCdZC5bg6yMDbGSx8kBxL5ctuzE9xypRy53xPbExuy3rxb8ddH4FCu8f",
  "key21": "5SQUq5d8zrcWZnfL4EJmeAZ68WKmRtFAeDXdbV6DsJw8XMGeGwNKYGbXtgUhs1xKDnjRPVas4du1voWVUZgBiEFY",
  "key22": "4fmBh6uLK2KTnZzMznasmGaBpL7Ct4nXXSrbcugLA5Qtiwa1zEeVhMKLwASYJeKfZP2dHNEUJ1y43JZXeW2zERu7",
  "key23": "4YBhR7a5ewb3PZBU4LVMAAbdVd8bagYNZ8cpY2Gx72BQNxVg63nK6kMgj5zKajdYeKYuRWBFzABVepKKD4WVzavr",
  "key24": "Cyn6QDzqENGCfvH5KJHcmUJhUDzgBrcy1xdXtw6BgDYbHeSKXt2qwEuMzHDFGLrRwSo2uM9Ae6TYTP5eG19qszv",
  "key25": "39e7MxNpjvMkHi9rXufTzwPYjjJuHjykNvXfYFdT7kB5iRfmm5Cyzr72NRUAJaRpsQ6MPnP86Pv9hTvHMwgXkRhS"
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

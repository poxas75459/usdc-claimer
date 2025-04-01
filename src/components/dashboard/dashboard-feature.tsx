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
    "2uqGkctRQWKwNW5z6eXMPT1Bghc2LL8eMWXuso9dYr4QiUrDwfNK1D5ZqxzwEQwaXjpnZknLvWa9ugGMMfiroVuP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bhGLfcpg6a8jRZTSPNYTio7oHpKGyowLMQXShK6nmSBvFLH3NuBhP27fSpbWvx7C13vxaw8ttfPf3HMNVtnpXWA",
  "key1": "2Tu6WQpTf3RjBrj82cFvPDHjYFfyXmZnunha6gZX55Zooq4bpde7XB5QYYSuDDxPhDEzFhMJMc4VTegX64NdGyeE",
  "key2": "53ctNKH8CVWAJ92CRzeZFFzCSchSS1suiD1f9e3XuDqSvX3aDoayjQbMFBKMvgQ2rpvVsbtQyGYQUxLt16MdMDy1",
  "key3": "35SFN9SGr2PG6WtSXnw3NRBk1j2PsLimyvMjb81YvcPHEJVViESGTcyru2mQepj4bLaMBdDwfQxQwQVnV3E8ug8F",
  "key4": "4NZ7QfVM4Mhaiw8R5MQFSwFkS82qHtm9TqFQWhHvU1mpxSXjfqU3RTiv7psbqUBAwrXn8u3JWtZxcoMHgg6qS2jX",
  "key5": "5NxU5j7ZPUE6xYxPXzobW94WTXkiMuFD3EQu7hf5a2JNCkLMfsf4HJteAEJJH6p25guLspvo2NVAizYHuWjGkmuU",
  "key6": "5MxYpSR9Nnma4kRHLCSec4fVGboc8BXaUtZ6LraEFhgMNbivqvJ86L6sGuAsjj9QbZDqjjqYoYFBrdoKPNP7aWYg",
  "key7": "M26PH8ELKFwaLDueZhzpwQ2eN9KjNkVwxXRDu2apwNgHNQhLiELEBZKPadJ5PeowqsSroctnEPLhf6aH46HFjAq",
  "key8": "4AgoGBTE4vk6VBjNmdA29QudcuPQicDyyJzRgiGCPs1qL6zoviVCzAm6pnxySQPJTdjxaeLGySJNwVy1tpaLMknV",
  "key9": "3vUMQofLNb8cmRbh2My9Xe2KbLynsxfCzeGJ9zU28zmEq9CSeJCPzvvNeqb2iPdKKejJdWQxTaqvzVFmig8J6Xva",
  "key10": "58tXk2WyvtbviTSCJPoTjAxrECGLjviwEhssAv7PYVgmye85z38ZvYuLvnF1cdM2DdrxLPtjHTVwCLP4LjfPnkEy",
  "key11": "2GN7KrRH6xGgyni2fzaWNfAg2RoacdLv8dr6uW3Ri7ozqbTngy52AP22YfWqSiLubiopvX23p7mt5ywgU9TPWDt5",
  "key12": "5cjdXCL6Z91THuFHZeUuK93uhFWWLRCQtjnH5Prn4ZZQR1ZoXRC28f2o6x74LNyGeith4pZvoTK2hTSogLsm5DB4",
  "key13": "MTNPxhrpBpq9Mb3CnmmCHutGqSPUtQZk5ochJ1pn6VR4Jx6U1wGg21yiA12qW99m9kkLhC83omFULzUgR72Jm7W",
  "key14": "4XxcsEA6Ke9WmgVSMBXpREbetcwY6DFCeG4DLFZmkc87QWDEDV5KgcVXNtmdv8tfvCcHjkqqsD4fw9LM7rkqJngW",
  "key15": "5EzU6wo1HUeed1zCfLs2VcZRLSoEwT8BKMKo6wVU2kVNcZcPsg3DbyAM2hHqvgT79JZVUK78RTG25qkXvY1Qsmzt",
  "key16": "5zzEdLA29RzMHNAGoMAQVk62hyqBCLgT5C9nJaAih9ewVZuXCpFNDmioYzZy4jb9aVcN9Qgvos3WfHwxBhLMWeyG",
  "key17": "2n3Uc97BHBWxuidxGKfmHqufv2v6sGhyFhDLfYE13RFGQXZLK5rFHR8HjypAdVS7SWyTybS26H8K4iuyAR75DzoZ",
  "key18": "2zkT8V8QKnrVv3QVgg1LGW95KQPRQmY7uXaf4366kCSM53fe4puTovinJM5AMrQhhcjgfHoqBcKaDKVCV3q7ew7K",
  "key19": "3rhY8k53i9AffJtn5siPswEXA284DqhUc5tHGmY1W7xXPWpSf3uww4msz2hGPm5pNTQn6anX8HJp2atjqQw1MZoJ",
  "key20": "5MJXVVTvj5VJgvJhMkuot2j1XYFPfZ1zkMBwdvWFL2TNne9t49zpGhpbqPrw1crfqyNrVLi1QH45zJsJTyzyGMTo",
  "key21": "2kLBBxZMqRvNeEhWPz7z5RVnCR1MLv1csHBSoRSnUAptqjwn4sGW9wvYpGH744kexNjjsFH24rbaJubefPDsqMcN",
  "key22": "5WhDnnMmXhB3WnHpHQyafZdFccUZ1Ueqg7BMKYEmegiNHhp9Eubx67DKcBj64byJ7LZ3uAM8nN5jtBz61rvgPbuQ",
  "key23": "NWBHXA56Zg2Hcu6rDG54mo2yY1UQwDM51TB8UxxPiJbZwbZX3nxbkhU3U8jTR22jbuW4huyRJtDERTuvJFtBMuo",
  "key24": "pCKgWGdYpkPjjUEHq6CvkiidavBkk6a63mYwT7JPEVVGJj1pcWN5EYkmDbxT3MnjJ3DK2kfTUFMRwPw4oBSias6"
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

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
    "3gyuzxk2vt7GFRjUCTQ5NKCUj2QKGCtvgcxaKTXECiZWBrTEvjDDwPwPN1SYysk5A5uY1Rz9hewkaYLLeeTKWgak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HC9uXtDg24Xt7e1XHo9AEPnc7kUDg5EVHqATM1gE3sf7zV5UkBLNNjEqSiWXJDaH3s98acJw1s834WTYqyKw1Z",
  "key1": "CmGP4edHowqyKfMkPVe8V11B8LWzDnanqkaq6nTtEGsVm3TmAnUfFrEEUfbRrESCmyifb4F6x3DW2tMWhQHv9F4",
  "key2": "2h31YDsNzZ6VyUsxJbm6kR5MAWo1nJ1NCyhgfuNL8jJ4j2RnCvfXvjRV1AaKkpM9KUvTioG9wSh5WYBXwhb9hMy6",
  "key3": "972hapiAwz7HvAnkEQ5xFoRuN6timmpux168HgVckB6DT4m28ArM5CLL1vCgcGjs7Q7dd1cAhu54Z7gG8i4An5e",
  "key4": "c8QuGnkBDvam8yaDCQB7cnspyr2u3JzpTmsE4sRTXCys6nipu1e8AaNBPygvkeNa9ny2rEBgmVrLnuY8L34Su5Z",
  "key5": "SQfHe1fczTRJHGZP3nQGgevbThpDHzQ1C2McuMreWmXoXk2gjJV6prtYQa3RFndLci2k1wPpukYzo8LswPNHVCj",
  "key6": "5CbfNLnSycuCk6toYbWYrw63nutiqDtXr7SJqcwk2G9GnMA5CRkdfUPHmKgtsE1qtYTyge6eEasBLPanyxr1b7VX",
  "key7": "53DdMvi5qinK7uGF5DLW29hRd14DutYF8aHqSTGEMHyEiBHH2tuCvenRF6KY14tsMy84uFXA4wUA8zubPLNH2W9V",
  "key8": "2ryEmtVBYypVTJbztURiEvHahgXEUwYbCuzJ3iRzEpk2LDbpRUEm648A5eygvNrZ4bnhfLm2iBREGkU57JCGwzH9",
  "key9": "32Fh86q3LwW161mg99UkY4FcVmG9h6VBYcFTG4H4jo1yFp8tNWrCaTayNGEC87u8gRzLXyz6govMCUggUyuZ2CT3",
  "key10": "39Bm6FdqBtSToyYkERn7sY8v5ycTpMZvuk9wLxHTNahprTNA88XVHcXpYubig4XkbWcRAfbxGf7whk3Y9g3KpD54",
  "key11": "W3uM3gAq7K88azJqV94v8xqiFgyjsJVtrKqSgLCeUVqwc82nynygB9y9HbgBtAFTKTcZqgMDc8TmVv8KJPG74SB",
  "key12": "5pdarenAzdk4q8tuRxkAZKd79BHYTN4pV7WSSNpwuZE7tkeDx232LpdNLpsRn295HWdf8dcj1DodkHc5F6DXk1B6",
  "key13": "p3n7E6NJ5o8G26zybYhshLxakySrdYL8fyaW1VtA9GxWWcgreihc4PD2hfyqLNNGrzm4mPXgEVrKyBLH18B6QhW",
  "key14": "5vWg5iBZQyCM9LEawywqrzGX9QquoYLQUgGA94Ak3KZTSWpqPND4tZqBE82psUpqJpyw3vqL5MGACY9kas8StjDg",
  "key15": "2N27ZFvdZiexH3cPuyiT6Gn6FjJXpoa1erEBBFxZ1QAe9WmhsyudfHJWgco4vCLHhuZyQLQEMXqyLgJVCKKrAZoU",
  "key16": "41UDtxe3yaYjPDkaBgPgKXF2P5kj4z13qDojuBAp1yGv2ticDutrzZfR9UiSn9aQ595QRSUtNn7av5SS1xP3vxR3",
  "key17": "2FiBP8ES8o8Cuyi6GeqKThwcB7onQcigy3NSJZEcWHNfiT3zaNgBxQGZ7Sroi1VNyEHM8fPfoVjZTnf5PkmdGqxY",
  "key18": "5bRaXtdUnJr2RhvtB8LZdRFFQY8sxFsswKHxsz9kta7mWJiXrCYvMa7VFTXMR5v2Dyb88LLustvTzwF2ei6R8VaR",
  "key19": "hyMAX7vZMGaQ4ddkcQSV6QA47YeYocx2dvwk18RySXZRzxACSqyYGoQzk4jj7m8AYZMVNCRQne8hpimWEmfPQEz",
  "key20": "3xaRTVXKj3LMm1rLoJ8CVvKHDNMAGUZqyym3SQktyD1tqyZwHjDJDWxfxma88Ckz1vsZX8WpHc1X2aTMP4wUWdav",
  "key21": "1hpA5ueZUhgUHRiRxtYVzqY6XsZjQdzxmXgXyTYEkh8eXUFHcH2yL6VxTnQtGSZvPhZ19SPGq2VoSKyzH8c94mw",
  "key22": "4SvxXLd7ZcfxRX2mz13p5HE97xtZdQ8dY887z9YFar8HtQ8vf1YJ8H7sDRbURmiHCytiqsU24MWqypUU3eAkPnzB",
  "key23": "j4chQ57VCSzgqTwFo4J9wm8EBpKEYxHCTHXwtdWUr9WQ7gdwpEWuADNHhiNbkX7RWrVfuw4UNsQutYm6yTxRKrT",
  "key24": "49BYXyxBCY4yWnLm2VBmpu3FhyfrNLPJu5TMonrHcqCNFpD3XmnPdTxaegZqT3ZBv9H6C8xETqGDkCB19VLVsZQt",
  "key25": "37BYfbFoHJxVycJh49tCEEu5CV354bLuzF9SALNq9dH1DvEKCNyNQu2uigRKBcumZjZknhfqpn5YYDoS4UuMAdPC",
  "key26": "48aQE5z9R2x52Y36bXN53xk82hWTYCMBd4MKz7rujgatAkyyWgdS4VUC5n75HVXSSxoFiKGSdDXNEcsA3gRyex4Q",
  "key27": "2541iKz3p5wxkGFrG92tEbwjseoUq363BfJ57zzoFepZt7Svub1TP765QwNj5Gc64F65y1eCiqdsLv678s7CrzVj",
  "key28": "4x8xvk39yM3Juo6Y6qbWWg7PRpWtTW5U4ZvXB8KQrC2QkHViGZZU887AvQPSaek5GZYoYR7yaYhTBUpFiR24mawV",
  "key29": "59eunN1BaPvLNtrejR1L4S89ZxCDMG6PmMpBjVxja1CftA3H2uiLoJcvgyociwF8SnKcZQux47T79iTtRQ6PqDNn",
  "key30": "47xymXtseVQ3rymPc1jPLSoHHEFURamC6XZnhDkky9GmnQod21j7RnX9Xa5Tixg7PBRSYFok34DZqNzZcEdDAruz"
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

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
    "5NB1aA9tN2b96K4m594rt2nFTq2jdXrn894vJUowA5GrzcwjoRcxb3rfmzB4QzUK6skxnoSJdKsXRVFH1bGLwruk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62MPS2Jr7acurZEUFhbedPcupqCUShV14nnJZbovkJdgswq4QpjkGJMWG5WSqhmBZhm7Zr5cxD44Gjat2nzuVN7f",
  "key1": "4c2K9FYeAU4m924R5qhEFc19bGkHWddgRbNF6BEhSFNghNdAs4VStwys7pA6RiWmaXSRERuoopZsBGe6eha5Rj2p",
  "key2": "2KUZDV5sNJHRz9vnvX3Pv1zLFJiEFZynhFqJQkXMXRwkzjDzo9sWtdRvdLECN59S2LR4esg9phFs2WzZkxCtuVyQ",
  "key3": "9Y7aBPDAHG8SffPGgWVvUh2JhhgmLZYUcpDjmSgVeVLxMKALhCf4qWukGTboNe7SNfumBDJoC6ZCe1KKresjbiT",
  "key4": "3ne91Mq74vVndakF9wpaZZLCsRfdpQM3256ydYuyF8LoioBsp6AHxkmqFAEAHyD3BcypxWDxR5yC4mPmfmMGT5oA",
  "key5": "5Lts55rhYriwRRr5ktJ5Exu5cc1KsRXYXQ1KuENH71n9Yk7RUe9oSCKDAp9kNsWcsu3bbiRwd88XD5ZZDKcKkj6u",
  "key6": "aZeoF5sbmTUJw9opTbAH2hLdUF9apqZYLpUqW8aGdkP76b7Jwv4j3q61tvEsenVtPztNxTcBvNLebGqnHBLnCRt",
  "key7": "4tLWoAir77GM4KPF2DhemsEpZhv8ubyFp1VYeewA7nAvP7sSVa8szKfgq822AFyfakhJ9ZdD8vRoUExniWnCp6BR",
  "key8": "2nimLWtmcwp3RXrN6h5XQzdpHw8Hi9A9Q5M5zvgqqgRzq8RVQSchsw93PhedNQzD6EewgpAyg1hi3yo4bySmJpYs",
  "key9": "3c7KL8LcC8Ka8HBqJCnYsCpppqn1ugxm7KNpjtSrzVhvs9SrHXTRHtSKthHgiNqjEqFdSZ4AQ4Ztuq5HYiR65Xmc",
  "key10": "foeDA6mfcestNELPqGFyFi23LMfudLtFHeSPa5NuRwXtAdzzMgrtyZ8DNiWQvGf2JAUWCqep7X71XgKkg4osmVB",
  "key11": "YbEjJ1phoUEWSmC3ozz5jVA15GEBopyck9rQtGeuRDUbWdDwnY4LYB8CvL3yQeUtkniQzbiTsJ94gUVXjBZFLjD",
  "key12": "3EdT6J2tbAeNn1uw8JS2iNDPA2Yk7ces6PvKYSoQkC6TYG6HmbFbDYGxES7SYzjd7uCpsu98tpxh9JzNVYohvTuS",
  "key13": "cc38fwV9QyDVvxqqDRg7WzTb9G4MqqxRv1XoQqKtiGbTNLFNZRdveAvaZDXMtufgeg1CYijms8mXE5gXz6Boqz3",
  "key14": "5MC8DCoavdtEcAhoBgRsE22eJqz9v25Jmi8HUdVZ6pbrLo8roSvhDiYvww1W4KN7cbsi5DkgnB1ykyVTsmybpjqw",
  "key15": "33qC17vs74KMCHPsXLLPReecL3meWi9t3VS55FgX7dU19GfP8i81M8bF4JYsZbr9qnY9jRJ2bkzRC3k4HBQDwUux",
  "key16": "4HKtVQujtbvn3NKHRosMuTR3yafPbc9BFbWEMAxB7diaCtqKoTbHsEykcsHR9wgbBrzbD3LvKR8NMCxJC3sEisZF",
  "key17": "993iA311QX5tSZ15yAsALKqBmfm5k97DHw96cjG9tmc9Md5WZqCGHD7p4in7VbhwPsYqw3c1LJkysZJEKdWeFne",
  "key18": "4auKzJt2psgkjiqpTnn7E7rpCDwDmS9wUoNR6zZCbd9F8ycdK5sHjFRKdMEAcpaAkMFB4dJdSoth1hjUkPdeqexk",
  "key19": "ftYF3xdpyg9uc9yJQ6k8YLz53e8netToZJV3B3fYHJ5FFhzGXGQF16fhPgtuGFThNH3Jb437vqMSjaw3hBz4JhA",
  "key20": "4b9q8UM8oyXwwjG4kVYFy3xZvspUZYMUJjQKRLNCVbRMJdUgCW2GrFe47Xwc5rof5gUQ7kfo4skmjrR6JnueRjpU",
  "key21": "3MuTNKDKrtrwsjybZRoDfxKviPcdCTxGviBWuLdoY1rC8TqwkhF1AcWQoHNbWGGmmsyeCv77e9QqGhT7YjuwbHuZ",
  "key22": "RiMUbkBnu7BstHvDHJi1mv3N3nY8eJG656mBXzUF4s5E2a5ARhyoow7SLvxjKXj32uUJzC3wTWD8DokQEb7dwBa",
  "key23": "5P59K69ow3FP6t69thKrRQqLA7dhYr7AXxVrfjCpEgBCdPYm1MSgbvNWzMwsTmW4tMXqqFy6xEJhWfYSgKvNZYWF",
  "key24": "2CDQrbr3vEMF8Us5meeKTMANGG5z2Wv8vVNnoEVMXrqxmB1qKdFanAZfnt6hkaY1tTPtFpFiMtP1zBXQQSbNXgso",
  "key25": "2NfpyzSCdSkZZcv1ALthZVSVFdTWHxE4bBfrGi3XArNDkGPytEKuPFDu19W2CFYZ4rASG26UAwEVRwb8ddxJg2u1",
  "key26": "214uWgDEMNsiHDwo5ytbKRPuTrEAecRkYHsuhc7VbQeDHFspid79wVgqPv9cGro4wg3bbYSrgBnHY4HX1nJhxEPu",
  "key27": "2bxVGEmVqbZF48HGuRozVuSuu6XzJAETK6H17ibkrut5vydphuz1fQTYhFkfGeS2Ae3iKNVDT5E1BdAqSsUATHJm",
  "key28": "62RaoarobPiHZ7EXnPj8VZSQeQSddF54VAF25PaD8HBb5wvb1RED2iNzPJBHcL25i8Hgr7kA2eWHdBbVW7UkyZy1",
  "key29": "e5r4wTSbsu5xaV3ynimteaQhFNacfKdXmqkR4yUVyecZha5aC11H8YwtpxTHgDwJTYKKRzqE9ewCLAxwbifFD92"
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

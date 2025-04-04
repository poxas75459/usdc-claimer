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
    "5sj3fnRndSR3kxeuBx3qzaKDwpBqk149DzqBxuexiZKD2NeiZvPi3tRC5qTZZC168sHTK4sj4sDBa5uqHDJkJBn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dZ9DMddmWfFtUcWJCPFoybwc4D67ZZJTQggPx95ZvQ2A9gM4JvDXp2URv6SaseTVSW8HFJVqEFqxp54dEc78Mwi",
  "key1": "5Mz7QTzn5TFdw3nX4RmgwuTUW8uXeDvPX6mspUEz2fyHZLLX8pyiFoTYrR44898GzZUFnSp34yM1BpkEgqSd2Xqf",
  "key2": "wopTUu5gQt8vicpxC2RNkshq7FV82kxcE4x8ZwwwgGuhi4EpHDGGieU2YwK9G3yL8Y4v6SWcAGyhDRXcpNah7N7",
  "key3": "3v3NF4bGnP66jrUdGC6SwVcd3ehugEYEZUG3H5FqCjRucE7KhrCgEoogEZHRfMRn4EKJAipw7r7WAZ3WQ5t72NpC",
  "key4": "2tk7daP4tyS4xqXLw9Q6psXdzKUYUv6tQQdSEvGk7DERWkNP5GZ9Lcq5xJ8HkqeWKThrfmZTMpRQBgZFBbuxRPLf",
  "key5": "37vdgqjYtGMSpvAv2C9ec6eeifk8KBfwCc3htPqu4LBVJh5LGapebvzm91Xc8xxy4mg9ZikdYzpc7xrJjpAo5RX2",
  "key6": "wezRfGSdb8dx439DNpyqkCDmFbGNUVMkNyAjxFvux4AvPLcH6sqAHEymQBemhRBJyksYaDsgzkceqPUWbTF1oTN",
  "key7": "3qMXpcwx7WSeUdtGbG7xBCuhU52F2e8jvrF5A9WhuqzCPsu6RdGTsFd73KbK9X6n5Amirjj3PiTe9KASniaYXaE7",
  "key8": "4cQYZrBuWbqP48Rq45UUAmG2zM3PTmjbQpYBnRdSMqWhbuBNzPRSDG3EDEthoXfy875R9qFaXafv3TcHJXKiWcoS",
  "key9": "26VdDAgHjtWoqRxCzVqL9csykbK8gjEcmNMWQF9HzrdAcRMngRXysamg8wN5E26G1VUAmcT4ywadP5Fkha5hh9u9",
  "key10": "5LB9sTdCKS88Ey4P7DKDBELVU8GDuxbN4i9b1iYSeqnaFgDMadPdHXxiwb2noqKx2aQNQvKNYXBzEiykUp2MqPEi",
  "key11": "5hEhUdZum8T5RbRrpgtXQd7QKD6tnyekN38QErAgqM9PCeWyvZ38q2AwfiDnGZ3QU6v27ddL2YhtmeDZ9srPk1WM",
  "key12": "2kVH41b74n3rewHRpTJv3teAq74PzdKY1Y8d7d58ETuFzKqk7TDAfTRjM83uVb7F4AmsxqTKffiFeaLvqLE1S1h4",
  "key13": "66aPAPCNnmXkMazb5Tzo58AbqHy6fPr5aLmuSkR8LuPFBt36eQJQwqeF8hrG5rcrgkueHBJe9uDUayuWGNS26kjj",
  "key14": "3jyVRbNUV5iwibuUBQRKsdKhtgZqrmX7ujinpoL2X7TjPmzu4kiHDUBvJzDwjPyqTbSP3P8ULFmfcZ7isf5gFnF1",
  "key15": "2yxShtGwmJVNY5jm7xaM2cbjZThzpBMRfTdt167xw8sTMjiGTZZyWgyABM7GThJhF4PxGuCbP5rxPsKWYockhfve",
  "key16": "UAd319bSDwXetxANJPDj9CZx3reEQ7TnAyT11gigwtcngAYggrSaZSwTPFrgFaetfG7181QzGzYFCTLYkc2pLkv",
  "key17": "3uS4caP3gQsaT6TQ8wGEdwtWPzzaJH1Y9CHoB8KipwWSEB3DYc6VAzfjf9MvraohFQLugZ2QxDDxzW9kM9CfH2Nz",
  "key18": "37Kff2ooyrA25J9B1jch8NZrBpYs7ec5g69X42K3zJAM1aVy5LwH1SA5WyGAd6pcXTRky6CgySY5STGCjdVZgvbw",
  "key19": "3kbwejmZEpnF35VBzKu35pDfrufCbTPr7hRSo4EDtfCTdesZfuwazDPEpLH3ADyPbK6qW6vjwch5P4mBcq11ZuKx",
  "key20": "4piWjCbSz9PHiAxCAWmKnF9voJbQfdRGxxvUvhcEPAJzgS1YQKbZ1mHqYwJxMJ1juJ14djw6yGbm9UpqmugKgk4V",
  "key21": "Kz15XMPKFTKuyVopRJhA9YHXuXmTwCdnWhUvSmyyMqvyw7RXwF1Y9CCyNy4HhSAMUhzus2XkE9MExYditqZ2e3T",
  "key22": "64EjZ7YaYdom4x8WUEZFgGxiisR8GSJnbk7K4wWfcuputdLhcUrBHC3oHUsF3KXMMpChWR4FLm3DMGySKzC11WJV",
  "key23": "SqJY1nyCPUFk1BnfwNMJ8z41ihhjpPn2HvxAB2q1AbMS6DTbtMZaeQ7mDZUS78VZ46z1eYz8hP4n4YDvFJ9SJCd",
  "key24": "5esxoJ3U9iZfRZZuFv8Evm3PmhUoQL84nRsZetxMC86RVZoiLhfrv6q1wxf8u2s9RCqWBuPnev24BfxefFQtSNa8",
  "key25": "4W7wXmXPVSSZUrEBBSHWN4t7qvmmGDBjBVHf3tCgo2zD2iVX2Fc7ro78qDpabJ12qKeRHpiBKv5Tc8LPrKq2DTgV",
  "key26": "21AA6fnkXrU4247efiA27n39MopRVcFFp3rF4oc7STzjapePxo4MPa9HoE5iSyigmmQHhjnJNSnPuyocr2ibeJv6",
  "key27": "NVmMb1c9LFecqs54Zsf6uXkMatf2R6n3iWmtfzq6wfAymc2TwrbcTojrboFVeKbFXNAMKBBnm1q4WCh6b5aDd7G",
  "key28": "2Wzgpozv7ScYCuYKZpefcWusAvyoasV66xeHcWGSwcNBNy5EBExQzaPBhfVqfqSppbuFFveBnZMcEc44dYVw9SbW",
  "key29": "e5NMwt859BiVhTtJDAMffwZayFWG1YPbwB9qshZ94ppwAYP5EKjQwPKGg2aUQAVs2x1HvEnDPpsfnVp9CyA8PzQ",
  "key30": "3i7ZUNWw62G4neKc5oRg7WBfh779M3wA6KQp8FVqK12AAtekxBu7bi1h2DP24YpPyKgGfyYDUCzNgWSezpoh7vD8",
  "key31": "48ncaovPE3AeZqJXaLHED6vguJJLKsmhUDpj5mSMd7fAcTcBo9ktdippvphZhLoMBB1hYLktP1tcddGd1UkpT6B3",
  "key32": "4aUM3Ar9G8oLS8mmciuoxJprhR1dqPTfh2UKXpJe9jt57oG5nQr5PZanTeRptgsWZ1ko1dSD41chkj8PbzuFTMbi",
  "key33": "3M17TAyVZymbC4jzaxNuhHgSk4xJd8YF9UP2AjYf6Mene8GXn9nC4xiZzuaiFQvCTGT2ESPx17mZi2yGBsRVyKD5",
  "key34": "23CKrG89xhDCYHsKFNRvUKrWdKvfmJ5vhtKmngy7VnnVyt26MP3pFt3BGVwTiBYaxcdsyn4rCuMQcfkYvp432HVL",
  "key35": "2jzxkvWMiYXABHCCbAW6c1cUoSxSxHYbPwotn3aD9pPShhAKAkLTtvQNQKNNzWqpVRh57Tv2Nde9o6Tb4dBjLcT5",
  "key36": "4odAoxyf1t38afjmBGgE149neLqVaCDWi9aTjwAeeJ28sk5bFwiZehMozb9UcdLE78icqJzhwAyh7gMGS4gKMHrZ",
  "key37": "2QFcjk2GoRrpbwDFU3RSaNavChm67foSEroBaeaNH27tYHCXrNrM2EnjN1WjC4VA276LWbnJLZRinnF8agai63b6",
  "key38": "3x9f5YhZ5i5tMKHXAXYJRRLwdSt9DveT88mZV3FcnKLQvx8LCtuDn2ZU7zUjayoQRoQ97AzhaErfgSEBFr1g6q5z",
  "key39": "3zA6GagUHAZ3FWZVRvtCQPH65tCcms9aqxt4fERk9TA3xT1oLgMGxXqDdv4gD2jXLoXEs2M21swttwEQEQvnNXjh"
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

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
    "3y8AemvrqLXPRCQBsppcbD12Z7qNHRqeV9xcqG2rJ9RwiogsxCkvi7bwLabDGW3vgKRbWDQJCg1NX8x16i4ToarM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49mwqsacSLPduURvU9jbjkooF2PqUKdyQQUyUCUCCbS51pBF63e3bFPEuc7RWaHLpvRxi9TWbr9EjoD2pixXNMoC",
  "key1": "2GwVAKrCCJMT9YnR277NXPj3itsFuAp1cCazc1y5cQd86XptBfsQ2vKQVU4UPhiDyEZRBwXcRsMVrCa3i4PtaF78",
  "key2": "5BjwescXSXepj2oWUhC3bjFkAG9oKAMcUR2mZrJ1zAH7hNwpZR9HSiiFWcbxvNdjFKoQvWada585NyyEEAL5fA8D",
  "key3": "3iKecLP5Eyi7NofdcvXYcYKHLchW9Kmi4aF3Pmo7sqzBu9CJDkrH4TFiyvZwzX7bXR8Acj3CR9koG6aPmQ5GUjVp",
  "key4": "m6HS8MQmbmjUh5Ci36MwvY9pDNjcprbkN46kngRqBw1A1XCWENbsUp6edY8JPAzZoChvHuSHeMZAuD3b6Dd2xUT",
  "key5": "2RtG3Btdmptbgni4e1pEfUHQriRkaqFXW1sDynqv32eQChgNSQR98WzUj681foXDiHT4r8mnDsuJJEjssNmVcLYT",
  "key6": "c2UGkMcLJa5gSWrzxHm1ceT37H1XvfETdyRomQf1PRYFK6qTFgkkf8JP1a9yaQQcFbf18JCKGTENQciSsQoirus",
  "key7": "51ZXKh5cXTp6qBmUGPBW99hMU3MxUcUJbyFGiN9CHcSBAwRHjiLN8bd9gWVhtB7iiv3dBrZ75fQ6q9VT62k7Vqxr",
  "key8": "PYeHTLLbH3BXaEfCTLDHMBvojLjjf62cGM1oN5nXEUNJyPJtT6pkRqNySdnfftVyH7kjtZcq8mTuwAy1By9e1PJ",
  "key9": "4GAtr2DUv5ryEtXf8mzDP8j9vujK329ontvMgaYAreThnH8qfRKJTdjpnUYiQnFyvN3wiwft7wxVL4pT7Cks4s4D",
  "key10": "5bLfm9akL6CGxQbwaHjMTK6kZHTSBRRbEktXYXkSgvteX5K9fAo1rNwptMvzj586DPKKDZbWzRchaHLr3AjFYr8H",
  "key11": "3Jq344Eab5m6Esph2tmNALkUbcaLGCmqZSSUtKpTp8cb3C1P178kE9v6iZkctRkCShaqAeVSCMyUmj5u6xWtBvQ8",
  "key12": "E3UNLsHj97BFPFR1p3wqWNS5qoPfC4afUU31WeYtwGjjWAMWFJWowdNW6zzerTP5DrHtHFHRLEVwH4Pno6zYYgk",
  "key13": "3L9PxqJQmMQks8Z8u8xrmd8Gw1UVAiweTDT6pPJ1jeFEBZscju61iu32rYwrAfnJwxaChXZaZN69Ne4mjrkCWUEA",
  "key14": "3NWPuBE1skVQiWoUWZADrvmWnXuu6Ytjyhv7MJu1CkJawn1jMmrWXcGdEoQYtbiCRULhhb1Xfez2NJtqcUi5EwGq",
  "key15": "4GTMFGmPuGTfNofgoyPwj2zT9cgCNAzbELCMeDakru9aYhPCvUmXb789dj1ebMavA8KKymEKy97RPrjhxK4UnVbA",
  "key16": "33PEH3txjZ5oEfs8qPK8PHCTXfkSjdr2P4g79c9q5QRJdeaZxaZP7zufH6F3AHeyqQbUHHgGTovmK2JiX9u3Knu8",
  "key17": "4RjN1tS8CWYiHLDpxEwBdpc4RGQumXtmStiTnX6jepfRCCKYyuptvLESS9piMVJhS6z7jr4K6BjGLBqVu7k6E4Ve",
  "key18": "4YiSeTSSuGjazpkdqSLUfoYFAAH648CgRyoYQZzueq6VbHJcAcCvEwSHd45DCWSnm22k78m2mEFvRjpKTNcsAxCy",
  "key19": "3eoEXdsBk3CKzVyUmMzY8benwoFWVXGYKeCG2jeWsYDpQiTcfP3nwc4DcgBHgbbHuaEajbNhiYXWxVbFX7HyJurM",
  "key20": "4XDi22eds6pPBofJUmFzf27dA4HBZxKLo1VyBW6NhXUMobtnhCq7saVWmvxXCj6afjnzC49dVQ82xy1MyFWcmvFp",
  "key21": "dqznbNtYpcHaFtvaV7STYUUJbE2jv8kswaf9teDmBDQD2vsqa9ovA5tt7cFgM47yyzr8HnMFgSwvvVhsuTBWWgS",
  "key22": "TLhbKVS7mU5eVp3itFqdm4zyGQVwrw68hRkiUbvrHBwdkXcLcK5NQ2dcJrSeVypytZzw4bdusqEk6D3sF6XHqjm",
  "key23": "32ihLq3xcTdU4zVcgzZSyASYocu8dmQ2GDHbvzvhhCFg34s5Ggp2pqQRijGDYnsdAn8gTAmuJiP6NmDucvcjfqBs",
  "key24": "66AhdhnY22B6PnKYKzKWdsZegqeSbgmDU8jX9CmPFikUthjHsScZRKjGFLfnUYj3XXp2Jq8KjSkWtebww7Ya2Nyd",
  "key25": "4PVKoJrjxarXqxE7g8i3zWsZSUhEDLpTkPrkdyJz3Zcvg65cCnCAKFrSSvEtWLnCG89y83qkHeJdE4wGqtAKVt2w",
  "key26": "3rT9ow4bPtMzaQSenaJ7TuhXxcAMyxDT8uMNUyHewyQvNZPB79tvkW818fz642RL3yKyAwkjs8otCTQjP3fttSUS",
  "key27": "4KqsskP1P8rXGdJ8CWbPLwQnURZWoGAefJqsrBuuKrydx18yjtkp71f8hgTEsyvDCf2h9SHsVXGPgmvTvWc48nPz",
  "key28": "64yTzyJkTyukdFJpbsxCoJyTfRMuFKdbXwi7icsPqbz1LDctiYFEwA6AnrYKrRNgjNbvXKzymLr6X8hnCrMpK4pN",
  "key29": "56ME3yMxdcUmrNFGNAwKDCCuMtT8UJdgdYWsD5UaTG8wXYwKL51SQw3qrhLvhTqBaGufhpyvEYGFABuNSXkpbymF",
  "key30": "46ATnGPcGvucsBU5Fcdeo5YcZQQdjPyjx2dXpgAgBfsYzz2TdWSqtoejG6bY2VY5dEvRUYb2PdNgbutMDUmBWCEj",
  "key31": "4xHfgeDN4eirbdHZ9UPoAEFGywuBqUVGqBABXzV5SQjr1Ebc6zxRsTn9jLvZtaBN6yr9MWonxzzffM48pd2DkeK4",
  "key32": "4wESjW6bCWFxz2WH9XuQHUCRAEN4zh5j9hGzji7hbxnZfQxaQpwWkeRi4AdAZtGb7P2Gxih4xB8v8iqke5jXQfkY",
  "key33": "5FoTnrWYUXzyTNZinYByact9YCeykeyuSqZ3r8XnM3WyeJ2qgPNyxB9qvUx8f7TvYdvJcsSGHXtGRD8UxjgzGz5A",
  "key34": "2ccmK57MmzjQ3iD4Kp2VDN8tjMCeKkafpSz5AkbhV948XSE6fTfBzySLMxcb5RCsAAWojjnHiuCjmVL98LK2R7Gd",
  "key35": "5yQ7xefZW9b7QXBkBxEVrDBq3pDf4wV5J6cSkP3eGkrCBp4reJjtgsLEjpaMMmgG24wGVVNE7x3yMLTM82eFEx9g",
  "key36": "5aGJtE9ZBbpBbBr3Rm15LptC5B59hbqrXdGrS3ztG3Tr1uxun4wZqQZQop4taabNR3jhukpJeaoXWtyvY5fiuzpz",
  "key37": "KwJjwkr7oKBcQ1KpSstCajMzzjmuiQSg5uSogFDodvHd2vZvBRBSvmmRdMyD5bANzg8Jz9KUMbTo7cxNoGe1wBz",
  "key38": "3K57HRf3oYU8zsREcr3aNCx4rZmmfNjnR5X5fMHjBKTXnhNgZUPVcndtkydxrufP7V1PSKAh6jR3125DgZ7VtZR5",
  "key39": "52oixFAuBtQY1L1ah7RQbCuWN1DEkQLXur8WusJsBnEQQGmLc4ubmDCvCKUTTzrdZoBEikdCHLukTu3fnzCphK2f",
  "key40": "3zKMCbNtb535WRiwb7bhaW6x9WzWhmRriE4rXZmUmVFvfvAkkbZbTxbzRK4vP4Wy7uKvXtYUj776k9CYF9MEn2pq",
  "key41": "4pThREigSxk8qDn42jZwwBfNpshyopLA31d7BJxZZmNcZnrUg7b8G93csgKi4fHKnnGtd76QDT6CGYDvhqVZV8MM",
  "key42": "Zw9TcJfsfLgWsEjKnBw53aswXD5ZVMEmMukdNgJJwTkwaa1Y3TCTp5urGozf9KKAGqz8ptA1pTHXTeuzx9Y3BJ2"
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

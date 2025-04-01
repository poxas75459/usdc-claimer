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
    "HFtEPGqc68fFBYxzoGCpS4kVYYZ996pFu8KBsF2JJ4FGE66qomq33TZC55Moqcjau5Ks5Pos99uyZkkvSMW3ZL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M515JbjBioRqFDZtwCThcLuicwjcccHPvBnsggFRiX3D4bBYg8WNxRzcek8UMp1tpCTtXkhDx1Cm5MHQy6MP8tr",
  "key1": "2uoczd1iVZGaesaEixeBCj7dshoQN5EaduT91dZsn72D9nSMSgSvVCkEDpcepDx9CA56reLX2vcisbDoUUTQ3vDB",
  "key2": "2kLWTTsYPB7BBmHf1bgE8SRMmhBssAsQ6yxqtp6KagHL7X18jieQ7bgZHg1YQFCLdzR19bWZpEXtdg3sMohBdSWX",
  "key3": "2CTW6zwEGGuBaQfDU5NpgAGdvckL6Psu4AhRrTxM7XFpF4hgYeWiM8Eyf1V5fqqn8cfFTVR2oGBNWMhqpBUoxidK",
  "key4": "47mMwvAAHSFstFtw3zxzqaVxqkd7dt7yEgiqG7enjsPKSeg2tXFHTjuD2u2kSkpaR2HHksCmzU9BGruQoxa8wmjy",
  "key5": "5z2n9HCpae3bFmpJVfSR2apkqzhj47tTLFuSPZ2pGJQPoefiahW76S4a65zLzLG6zzxZP1RsY8kKNmcu9Qm5zMzW",
  "key6": "5DpmcaVHQ8KtyJb12Q9qDUxezK7iDBykWYWCgNArfZFqjvnqPALRbFXbYtBCmgu2yYpQgC8HqhYyBnx4UUjSkp3R",
  "key7": "LvmnFsARf3cUk5TFtn6qgFerYirMYaykDPWqrq8JxB1xjm2MxRFTVn9NkRNi8axzbubUsNhkqNLyoXcX5KoxsYR",
  "key8": "6DYYSb4aUNneYe1eqshb1b7KNA4jdu4BYmwUz3naMmRC27K2Rx2tv1JJAVrskcA1c4uy2jLYsBgG8PJcubL6fzp",
  "key9": "3DaJZyoX6RH8FfLuBfyuwCXPZojDgmpCHSxhmeYR7eW68kiQqj4or1NXuheuf7CkvwxjKf3rHcZwSuwgfuSmy8Ln",
  "key10": "4mDNzz5W2cwFkCW2JainNjsfeoth467u2jFt2YBXF2RuV2EGC7wBMs8cZaSG3JVq4YqdnSSyjB2GCYDJBjRhVjfy",
  "key11": "HPV8gLZqBUZzGHqp4BCevEUK2oM2LqeE8g6H8KWbTeE7PTsEuQege8XvJ6Wc3buLjgzP5n9MmfmbaGbf2xyPvjJ",
  "key12": "tQxQgLMHgPHoqkDyFGWCp28gkmNbog8FML4C2LPAeBN4tH3LxTfqdbvRqFftzo5y4skaVYtHsCidC9haJ4SZxPd",
  "key13": "1Xcbj3aNNRLHzuw2ErUC9ZZ9PWEfWYDAMEkwRtB7RpJxPYbUCbu3UuHsN212LwV6EWVFSJLYcCWbfqiQtCcYwNS",
  "key14": "2mgBV7TCa856ZPvsvoYFt9KR3fzLaJSmjjNpV6qgP9nriosTy9D6oU5aEDfe7fcjPWHMEF5rzTqvaBKLsneUZs9P",
  "key15": "5TqTHutZ2EujQTn9gZo7XoUHej7MaYZ9cG7s8tWS9fAKSF7VZSY11gF5btDVNgtgCsC5vrZmU7Bdv2MmCkgoU57S",
  "key16": "5gPXUa21WwZHdLzAYzWWES1f4hmV7pgeDFQTd3x6onu9BLyERHtmJ3sS76Ugk84sBv4vg87kYPxrXZv3re7VgJCP",
  "key17": "4osGg28iEsnVr2eJagPLGu2cyYf7vdhZCTkBJjLG78K1TW5w1nYVtesoJAGBTpii69aepTtU1LZUXeFGUBzo35Gr",
  "key18": "swqa3wG17tsJySJfNzwUe32mMdtC7A4JmytviK7tedRQuBMYKbGUqb4VR5qd6LubhTkSgwWPeKLdiW1Pkayuwzm",
  "key19": "4RBopFHJsSEPrxGpoqQDQ8uZj5w4FHkunxf3juoDC9HXSMvGW4dXjSXLypjvbJgk5YVz9MsLRWn3EgjPaKwMHBTC",
  "key20": "34UzbqUHPcLEV1PHnPBFhhzKFm2xFuLny5r1GXqj9U6oG4mBqxipQ456ocJeRGVFXcQaX74XVxZhuhX1w7sDBR5p",
  "key21": "KMj3BQuYGdvGhFqdg1fZzYmnH2tp9pRQNqMVDJC5QdJL35F8wgG9D4o3rtjUeydm5oE6XHxqsYHvpwPJTfTNUkF",
  "key22": "5vQ3Ytd9DTrcZyJgrRcYF4xx1zr5EiW7D7iJFCY2BFmypR7j5PEEWi4Macb2gpixxcUhugtcMf2xRKqJruNiKiWp",
  "key23": "RqWn9X7xyMGM3dytmS9s7nnHNyD8SpzKXpgiDUnQcqzmm2jBgvr2kbUVyPSaafc8vFCx8uZZR7ARRbxQAqfDH6Y",
  "key24": "2Ah8AuHT4XpEXn3nHNrtGEyXLKoFYSfQHCx6PkxbMgyEbv9t89ptNSjY2CFZyuxu2912JbhzdpXmgNv9ifdYm7gU",
  "key25": "2cZ9433JoHXpvNNW5uLqED6YK7UpybhRnYrpdf6rQoyLMzN2CUWs6qEwWCggEPP1R3vVcrn1EgMPQJnaVjz7Ro8d",
  "key26": "2jHqPAZKtagG5aUErnAux9jh9Bs8mocchkWnTUQxoHYU91L1UM1N6SdBbPDS58Rn7nZW9UEKXHaoeCnxYtLmLR3k"
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

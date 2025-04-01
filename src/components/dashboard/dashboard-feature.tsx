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
    "61LZK6fuJLZsTpH3Kkwta8B8W4hfne7XGEdVNUsBY4eycU8WgY8ft5GsjYdrGP6HrzXUvZ6K4qyEoaBHBpe36NQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vgcreCBbgtXuTAjkwy1qPiJnbF5opncsbsBiwwSLoQtyVSj8VBknA52TMDj8hkjmSQ1UjxrAvR5uwLhuN2dWUoN",
  "key1": "3VShKKmbXdpgG3sSP13M3KT8aJYkuYYzQ1exoHHnZGf5SgiJD9cwtdch6SqoJ9ZEVJY265Kud9pNSFvyyJ5ENpCF",
  "key2": "2R78ShKzCpCr3MSmCrFazRSNpwFTVmyevTVYC7NKw9qmUrRoncinnkAnJozGyFFfq6YBXc6ZHGu6qYqTEePmuS5U",
  "key3": "3X7jHVMSYM1tKmLV114LTtfPEyNNeNrUTmEpTus53f5SdsosjNisRKq7Br3cTEb49zseXh3mMGsCg2RJgiArNa9T",
  "key4": "21VnDrEHyPU8b3u2Rp9jPdnfpKjdG8dCadM6tLzbKBrtmBoP9ynfDCy9YAxgoiLb8dU2AmrJ2s6hETYHTUXhFiCT",
  "key5": "J7BtYTkmwBh8hLDwake69f4rkD7CYSZJgtYVAAviJnxkgdKQmD99Peu9eYP66T48FjcRQHaSvJoHEdUtXRuFVyS",
  "key6": "4BEDygDbfxsQUHMNui89YvVpAqsYMLQzf6g4ymECF7DoRyE79ZtzTQauYJVnzUcpa2dDG91oq5JH6uvGqv6S94tz",
  "key7": "VYf8UVT2USkdARVNvXAF95F7ANva8wmigH7RMgwkPfk7bB2A5V516NC8RqwcBRzLFUJ11epjENNfHyirVHokvCr",
  "key8": "2VNUYGngxoJNdrdWShBR5WCB78raFXR8evvoGyobQmhhBQSHCjLA8HmzdsirFxYbVpbbGmM59AcsEMa1PD6Hi2z5",
  "key9": "41atgHe8keWad2dYpoeH3cuHM8pzwoXG6oGTLEjUKXPU2HYU1FxRktGxQP35X8HhjxRsZ4GrYWFSQ1w5LqLTmJRY",
  "key10": "TYHJKvmWcMX9uorCGQDmhzHAFE48iYP6W2sG9DN4yaagyGdksxPiwZRwbgZPZ8ciXQCwD1cPPWdWbkGHL2DfgHt",
  "key11": "2NhzwKuQyrkbk4bDDV1tsAU9az2GJboFsTUVyKoLoa3a7wDraLgq1ntQycMAcbqamxoQ2uNAbxnZvqBM8kJHAQjR",
  "key12": "25NbL2iM5budWscdypWyB1xXsUXrrbBQjMjGQvjYDJeTMdevgwpDz7SA7NSeScHKDUtReHExTk6hcJGp2SH3FdAv",
  "key13": "4YH3znpK6mvrFK9ijCQ8ci8jhmY6qJu2WTrRdkmTK1CKvi9HnRUUQgDGyzk6iWaMpmkkNxyGrUcPvKsSN7sMDgoD",
  "key14": "5BGaX8MF4uUn9cnbbWTSaoN8DSEVHw9GK4naZTsmTBuhoWzozo53xWbSUzP2jVUc3i7cC5TNA4RBSXZ3Tsum1Ma4",
  "key15": "2SjUkUqEEvBxLZsnTdy2vZ4rJgdqwaDHBpn5gXwZMntQ29GKPj6CwihgjC7JCRvMUmWpPyNEPq8C2EvJCJ9wmquN",
  "key16": "dwWnnADvUdVsmSndZVQmCgpzmt6hvb4mfa6uzEMhm5JS5rqbQEpcvVY5wzLGMFV3zugujki7HRw9SczsQXpFrxy",
  "key17": "A8qLXrvFwMM7V1y7HQB8gjcFpCYKm3cSv5apmQcJQNsmQ1Aqo5p3yMVdDRWiQkz8Rkb9qxigokzoF25FS3XRUgx",
  "key18": "3mHS6XHrny5eeBFLpfM2fiqHVKyYHwjTM6FqLyXHpufRv6zS7QN6VwRPMWP1THf8xsi4r51v1pdsdc4u7HhruBdS",
  "key19": "4v1i3vLgUHC8vGDv2mztuF4VQ9tE4tWQLxv3TBo2v4H9wLv7xt9MEGizpitNJxaY2k5k12W3XUNAEHRAKRdg2M8d",
  "key20": "4RYXnHSJrY8MQAAMGdvqTGh2GdQms2vMqm9YGrxpFHKLdoaetAC3ErN2XNERKAmmwDQ67rMKNJHz1Pzy7E4T4jr2",
  "key21": "5ti69jQt4xEgGW3CZzh4x7W9Dj4XV4D12JEdpCghnAfAcgRtAUZqQf6WcqEBGUhoPUg3x1V7hkvSgSiNbz3oZANZ",
  "key22": "2edLDsYEbLRUhaAcuKHDq9SCVxuG3ND1ZjmFuMB3cfabbyv9rVoFUiZoB6fPNudwGbidAtKbTgwDEnBFv4d3PRP3",
  "key23": "4A9kZesRdCNWBUipsWsQwMvrwRLPPWLtGdczYtmoNMgpvL2CUHHcKdBdvhWf5p2DoPzGnX19p7AJYvDMrSuMhrTq",
  "key24": "658ytSmB7sgz7KuKgm4kHqgc52yXxGdzU3s2PEvX6JW5WfzYLVHXLtCxENiTmB5owejBW3bZuKj5RXchyqtR6M1K",
  "key25": "5iMacfsbfWqchsLvUUnHTmCDfP3zYWpabr8z6YnmDtEwwhordzx8TyNYK36meG72dSZS7anv1wHHkaVwi4aqgffp",
  "key26": "4zgiHCaXTBwzWtwooBfbAMRUoWy1vPj9siZTgUymACVhsNeh54YdPNmk8eF6numTEHxUjgPgVj9ho4iuryPL5ozE",
  "key27": "41K5io7r455EbH9hevcc6Aw7dAjSieUugLr6D3LXQk3BxromvjsuL2HgiSeCfqZb2F7zjYfPv6rhHUrakdDrAy9z",
  "key28": "5YMAjFNXBwDkp73hYK8Vwsav2nY6jbxvG3sZZaKYreBrVkAzhFny3MzAKWbB6VGRRnnxWAthmP6FAQXrr1ym28KZ",
  "key29": "2DUunCJ1d25z7DcgsupnVxFCY3mgDMUK1Cc9pjzQxBRhU1UbQogNzzGKfgWB3LwonfNMePb99tmNnYucxFdJw17B",
  "key30": "2T5QgkgmU3xwLPiJWBVCYFZkfVHNE3EBqabq9XsPP2vQ11srpJT5txyC5weTfwjveyVgJuthJTSHEVnDGTEGhGN1",
  "key31": "4uEjdCHC8Nen5VfDpuo2cXuCvW1ZcjXZuKW864Gu85Nd5kaGSCNHD928VrwqThzhujbx6KBdeF5CDFxz2FmUShut",
  "key32": "2mKvpnXRZBne3ThxwxhTbfK9Nq3Ti1ttzX8GXJnDJSic6UVbwncoergWiuvDXMqTVUvFPTDZCCSbRoNHKJKdCW28",
  "key33": "23TXoacmK8xc1hCuHdLBM9EEGxZTHgmnzfQXcSDN9AfBUciyb5H7D1fWrahMUcjZLRmcoWA5GihiR246MsPevUGK",
  "key34": "uteCs2p5Ffbob4TC547ykUoFPDWHUyMTF4YV92vf4BwHBPeyXMGDN4EicbeoWW2nsfXWG2g99nxDUbe31AyrE2t",
  "key35": "3HNNPZhSQAnRd1VupvRRESotZ7zftnyQqtvFG8VJMRQ4uKjA2C9rX53ZJk8dbCe8RtzReiM91XwKCCjgSCy7dchA",
  "key36": "vYDSiTYbuHhUsB5qqgkzZLErtDp4MtENnQT1JZrYNb4F4nveNAo4nfVX1MB9M7rp8ToWhgGZWoDoLcN4gaYyn82",
  "key37": "3yssJkzgUfpL5w96Zx4nsWbw3oLvgLhgFxhCy9sUu5bwSAAqGS2EHucRkiRs6WskqHaG8xddxM4RuuEbeQ9NKMWK",
  "key38": "3gH2APiCSfzjZ1MbJQdtFivzCmeR9WGESaW4X2dfK3ww3hnmRWeYaeycRpUx7juVp6h9u8BpipYiMbdqYC1jzgUy",
  "key39": "3a3wCLWdhyQtteKqejs7PQAVuQ6wk6WYCJkm3dJv695zgvsB5XgYzPbojsTTehTjyEkLkjvV7RfNrp34MYz7SMzZ",
  "key40": "jkUmT7Vzcr4viUrMagARd2nNnGnZVQGuQbSmP7EUneqhctsSEY4qRVNtrQQw76hW7r6L21AbAgtuAP11BqLqxuD",
  "key41": "2MM7CBcvMZyu4y6ZczQZcbXmkL8Uv7V4fZPZaBnmcVvr6yKdJ5LTJapHJLCma3XPd4NFdjYW9wEZWGVEej67nGc1",
  "key42": "5vKvZq7vdUVh3uXNEWFGtEHqhgCV9kdU5fWVcpyAVAjpkgizuE1SArSot4VNa3L48KqzbiSd2RpTiwmFwmeQVkb2",
  "key43": "2aNP9pG5axe5QvScSCvGY2qorkMQuTf3ryt4PTX4qAbKzcoHWaE3xjvUZYr9oJ4AVSRces6KjzDbAJRzDBPYKi89",
  "key44": "26qREXoHVUryEMmxGrECXWnZC9jjuurWDLm3CK5Y1sR9sR5eTnB6136tH2Lb2xPKkjXbVhQnpGsmg1o1z6g63Nzu"
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

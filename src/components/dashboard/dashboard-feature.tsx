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
    "kVSzDiAifz5Y78ySkwfUXnwEq9sgscWF4Pw4KZWFeYks4qLjgbv7n8eorV46bCQB34gqUnFvaY5Mtcv3F4tMiGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2ijKXRYKoitqmHpTb9NjapX2wK3L9PTLmP14wDXUEbsuGNbEj4GgH9u9t6K7fc8iDAmhLbTaaZffSs1MjiBUos",
  "key1": "3nu1zkGTpBVttkEmHUj6fMeLP3gsskZCLEz5xHVafPNRyozgyUj9BM7XXdFw9VjsHpsQvjuMWTdCBAwLc9uX7CX6",
  "key2": "2oxjU9PXTovMjE7yhCChad1gXfAiiKLf3GENYnG5Mp7fMS1YLzjkaJSzpgMHskXaVXgoGu4FWcx9m6AfQSw6iHMn",
  "key3": "226BgtbxS5BzpFNb17fGKrXoQV4zV9LaaRc8XdFgaAZFNabXsNePrm9ytfcFCRVvVEr6qK5z6wJy3JExa2eBbw6J",
  "key4": "5eQU3QrKxy8sNdsNixXkZUDWQDGGdKtPcJeaUR9Ypso4FgpQAYCigNkGRttxjk16C1ESRJ1hECZDPmESg3SEh53z",
  "key5": "3jvDDZEPx7x3tSkNbuqJMnxbSx5daivWq39mP6HKruQHD7eVgHsfYT2nsFHFGfK9j955mhMCXboL3Lqz4P3TTEQg",
  "key6": "642XXxTyGJjC6PwNw92janw15J9qYbXpBuEkcG73p9xnQp7zqBCBvwfVy6pqg7TXJA1GzhQVYn4ZKDcEsdmVTyz2",
  "key7": "5en3YGeZ8vcYQ4TP5HG2o27FEbNhAEGZpY4BWjZU3Pv2Mqy1z6KQv3YVpKYNYbY9Zrv4bphPrVtY93jDnHyjiA5E",
  "key8": "2wLbLcQ7miRpHBnqs18SSfHV1y4PPLC3VnqBj7F8Xd3BEuLRijWN5pqtVkFNMNVNZEusjLQLiKiQHfcuN6CXkPqA",
  "key9": "5TJrR6VaEBP1xTh6Kqtc1fRnimpF4dwgPfkxKYG3LRHXDkLUfYBnwoxZ1gVy6DQjfN5HzwsukySrEKAPmP1eN6Vx",
  "key10": "3mpqyHDqJ3J5WhfWYELjBwgzSsp2KBWWMHXKRtqp8cmTkGtcyvLjx9AdfzfGEUanCW9Wio1AFjEb7z68aqSAiojK",
  "key11": "JgakSDUSM7hs55MpywHs9LP8rwtdUPjYzASEGFSSroAJ8Gh8vwM6mmhh3E4RUDQiaH95fQVUXZmoYrbzEExwsYo",
  "key12": "8HT8uEj2dGBMDrub4reZgyHNYXqEYBqEP7NqU1r4RpgBbXLxtDQLLTwi14MXuWXqqvoaYauUocZKeeyWw6d7ZKX",
  "key13": "4hCie8jQenGcqNdeVcBqCigkujf6KmsgkN1nifPB9coTNvZ5yj48GJ69ivRq4sgEi1kWtqA6L7AL2PRGLvCEKGBA",
  "key14": "2sjhNWcUuiXVrhqCGrE8MNUaseuQ2vNyfXY6gYT1LWGMJPAyHFfuoBmAaAo2cwTHfhJwA27w2PtCyegMfTR2BJk4",
  "key15": "4QqX6RrseLTrw4fkSarbPFYXoS9YwEEbz6QjitAJWusNQbCVFYyWjue2ivjXFphiMFj3z9EQaHWtKn5HkXKGs1cB",
  "key16": "67Fuh1mX7EKa6v4t23saYaDvtDWkhU6xEE5bzZuFXoeJaz1o6L8LWMSjRJQnkSuHSs32PD1CR3eJyL4rGw7UgJW3",
  "key17": "56GdaB3sCE1PmhtRQBXzyrjdduyggvQU31rFTeXsNMorUBrrVu7gK1YgH83ZPoB351LwLxh5rPVMyep4yyHTXtEj",
  "key18": "5sHccdFF6Hkhbx5Z9YjH5WwJza3Lcuw3ywZVbhYMJHaZA2sRtS4jiwfat8BXced2h9HajLZnAg8WmkGS7FArxR1r",
  "key19": "2c37dE6gxB8VJG9ytgfXbBsUreLRzEZB2p9rgZLxnMT3GjopjBaidSXh163SVYXxXWXfnDPTAgAAer1Ymyi5smda",
  "key20": "2DhzMsMpFfA6cbFSKb45fjDWbn7P5s2JAYQK8MppJcG3Dzn1WLGR9VDe37NLDrCo75dJm4JZxpd6DF51BU2mBFUA",
  "key21": "XYCotd6PZ6LsbZrR4GmfdBbv14wq7UXoqqRrsf9Biaf34auVFtzU5JYPAySLZQkwQ57SF3icrHjjUYHCW96R2Q2",
  "key22": "37NLxU9d4aJpnBpAGrYNXXRpVEjVmXtQAbZtGWMk6SRFoTBYMzvPeetP3zhcPiwNSywsBnu445rSvhkU6uLyrdzN",
  "key23": "5rofWhQf7MA1bNYh6CCcUxpbVBCRyDADFeUq4xCgcxnQgDdrenjepuHuA1sNx47b7Hrj16AseU43JxaiNLVsNdd7",
  "key24": "3Jv5du8oDiQCkoqMCFvwR4uCHUWsKSTshBSVkESD4dLdDy8BawJQ519Z6828BAHPPqZfPUsyDALa4U7tr8agDKQK",
  "key25": "59FuPejDrEVkfXaUuqvuYtSdB4VFRJ4Sj245F3FVRyXggoWPtUSg15H8KtJeeyHF834hzQvv4FtUGaPjnQp25Dkd",
  "key26": "4pp9xxtQ16tbKmr5UZ2m1fykhYvtkKnPhMG1MpKbCLXFBXbEFHAfiNjA3s53rAi3TmGWnQ4dyt5V6Yg2vNd74Lgq"
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

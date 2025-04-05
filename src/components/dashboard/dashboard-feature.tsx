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
    "4yZSS2WpFUCu9nG6ZhtYS2XXKuhqY9gKRDQQg1auHebZUDkmmpYztM3tx7BWhSSeLywke9ofj1d9fdtaWfdBQvgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tz9eHWUdzVPRGxL7N2pRZbN6M6ZRxnpe8KrWDbARDo6B2G1YyCqAgrY5kG6X9NycgcmFkgYpAJZvgpCJwPPLiwN",
  "key1": "3oJYCE8eW8gnhkNB28dBEFJLF1pUSkEq4xMS39imm9gC2NmwAVZBMbAcd7R7z2Y1oN66hNo6eVSeAvo67wx1VXZN",
  "key2": "5eiyxybhXDTxB77giyteXLbwM2MS3HaxeJGTSC6RYFHuQ7eyBWZB5zizXUE4sUZV3pvWWhA61wG3VMSLfZfxNP6H",
  "key3": "wUyrUdK7YNmkKGCLgMCKPZRMkuyrRzM8a3nq79wSzy8PLkvPrhTbzff5xQHeRXpPDzZ7ooK38UAWUZNjdaJMJGc",
  "key4": "2dYKgNVmLxegfLVWru6KzECBoBysetZAfD29BWLyoMYHwYcMTXe3wnEWZYKLvgSWqdJ7tE7MyL2gAMraPe9nxYj7",
  "key5": "4buLXDN5s33N5qAj1q4oBGmop8SKwEcHykKNupKsqBXWG6SyuJdXfTo2yYoX6YGyzvFszR2bJVTJ24eRtatAth1T",
  "key6": "5spb1cogh6HGnknWCUpzMFeEAxbgVZo23Mg1dzQ69TBJLVSxxCnyPm9BjCVcvwG84uBPewpsH88XsbrkmUQzqybx",
  "key7": "4C6U4JpD4ASDiiTomdTbL9X79XsWf9VzVe4srVETFZpZ95hFNeiVUEz6xqzK2n9vn6nZ8Rh67vWyVnVsthaN9zaN",
  "key8": "5aBUfc4oWFtzsFRLosWesakwkVB3bEgHG6ipxR3LojkGVMVnAU62hQvGeZPSFpQYUYhzCJiG8GDroKiYiiQhiEJU",
  "key9": "2KiAwhNUyxTxrD4xAkh6urwfWSBboPc5xtEJBe4NKfdZsQujkoQtdqwaMYkFk64DTNMZoBMJ4fsbQrzTxRnEdVaQ",
  "key10": "3fMemUt6CNppWVL3C4d3e7f5BVj86pSb1v9Sixs2uJ1xn5eTbNA79zxs7aZFWhWo7rLtkh2kr9PcXVCZaxiCgfK7",
  "key11": "5zvzBEsgHHFQWqQS8BrE5BA4bTcJ5y9pma3BZVCCfcNF6b3ck7LUWfWCDArADPg4SgEBeRJLRQ5ZAjqtwRE2K7EY",
  "key12": "55KRRYCzVzJYqiZ8BSgQAZcMReiZHtSDE1s5uUBALfi47DepHE9Rn24o57THMjbYobf5ePcDc1iZQqUZqACBbh7r",
  "key13": "61LeytyKeXrcnHFxnYyxRm9TtS5bo7onbQZFwpu2qn1gmotpcjipr9Ghi3tGzfT6zZBEaeS8sBLoY12CJDmu53Va",
  "key14": "nUB412kf2FQscK51AP6YPE6iJPhqXNuh1cCZxFbni5Sp3yFiTwfvhb4kgRBeXLBMpoDY2icCTYyHjrUNA3WKDvB",
  "key15": "5YQBqRLWRtE23S7mX6BV95zMAzdoNciKCqNL6rQTTj7ftp7GkYt7eYPxJuQZsH7rBHn1SzFK9cG6j4RVNVUTSVkg",
  "key16": "3APAu5BLDRBwPzevc3z6Zduy13VPCPtZKexbbBrt9w6qdvhQ7q3VKVTGJ4gXEryDY5cKAV6ggJbdxETCm8Lt5oti",
  "key17": "45Tgn85XU56E6WKnq9f6ni2nt9b6ZdKrhBGUSTTtuWKCRRQeJyWe3gaRmQNWWyygoeKm3oraDFSbroM53gL1UmMg",
  "key18": "4wa9UXvCWa4sGCHkTuEcDs2ALyg2pXHqfvjHP8qPhh2xmxbfiJzjHY5q34bVndghRJ9ovaBAjgZ8hx5tc9TkpdLg",
  "key19": "4wGEZsqk9sHcGoiW9272Fm97XPKSic9WtmaQ2XZuLXi6XDbCAzFtZDggth24SFTo1p7UVezGNegYzf7a7G1Sp4HR",
  "key20": "43Zga19vVBBbcdnLoNZ3McdVuv86JseQQAUBvwF67rriHCzY2Xf61BhzqVYcFapmY1JP6oXQBN6kgEX29EGg1PR6",
  "key21": "58mB1HpHvj7qoQxsqNKJFmCGAdYUEy7tu61BHzqoDKrGc6g2HJb53RhGCEoju4RzBgc9eNGVxSkMNXUuCqn9LXqJ",
  "key22": "DHMWxXcYKM4zYpSRbnHUXWx7C3WQZyfS1fXPHyWqQisMfsHw7gFcvyKW45H7mTMSGp27ga9vZArzSsVCBEaRoix",
  "key23": "32pjrKDQRaMUbDGhMubx3h9LsfE2Z19yrxG6XhLuLR5vCZMWQ5BKhdFkBBWoPZfFNAK6RCjcbxoqdgY4ouSZKbia",
  "key24": "5zTzrWDEwKiq5LmC2FZ5KLch8Q8fw4GfP5AiBvWuyUTtx18JwTYLLXfTu57rDjbcNtSRB2zpKeovkh35d44EwCuz",
  "key25": "F41irPz1nfCdYJFhaxXbkmqg6zz6PwtVZrYsv5YwrUQ6fGdoGQvfgJkGBKorT1D2LyZgKxGDqYGra5e16VzEtTM",
  "key26": "3EPPV26PbsmKCtpM26EBLE4CMaQoa6D6Ddq3ZehqqxJKuyMFpgMeK6vxcoWpJcBNDK8uRrZAHfAHcFGRT35iAxBP",
  "key27": "3ZhqLumTam14ZZ8oQCSdt5qzasU4aveRHjNxF9ZwRgwercXfyhn24KqiAN69Dp9qsu9ho2CtkcgU3KwqUtfsuNYF"
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

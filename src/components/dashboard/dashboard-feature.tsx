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
    "65eKJGnNkkZsN4jvcDkHUf4m5AoXLaLpqznccUjJDdWPHZE54UUUXPmvQkqn2broWiWwWJqCWx4o6gSW7SN9dq4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e7YNZydF5Hnfo1HrzhdpsjGc4jX1uU89sSDjJHqv5gLvsHMnF2YCp35gurLdxMMyYJNRGo2mXH52fGJChyPCZ3M",
  "key1": "4vxkNFCGeTUz7h5tcm9C8XnTzh9BnRr2xf7kfmTpAs9dtKjanHGKJ99Wpjf6PdNopwG6sF4Ex3BEqESb1v24Rq7L",
  "key2": "3szSWcYYeEHZdHTAq7pvMVWn4KtwwBFNbpMj4anjqKtDxQEg6ZpbDV2GCXf7FRVeAPGR6XhSGLprJweZZm21zWf7",
  "key3": "3Tho4fc7cQ4W86zYyb3fLXpNYzUm3WXEAvtcbDpwGi5RaQ6Gkj7SRr7bLjYx6xKahqeGPvGNXjUC8Vt2dToATYfm",
  "key4": "38eikZkqBUEHoCQxbCskTPy5RSuHyCHeh5aYgWvcAF1PtQCpPzvVXgGpJQipD7ZjvqUdYd56McqpiCMVjahgT5Kz",
  "key5": "3RBTnjLNY6BDKsZy9ymcv4CQkPq3uJRXbBADrVpF4fQCdXMbcvFyhxMNcY9F8byGDr8xbDRHCewBgTGC32RMEJB",
  "key6": "2AANip1vdEjmupyxF9WF3EY2ERWYTindh2QHiEx5VZDdbv6EPRqYBKUZdzomfz4yngkjZN4fsM3SF5LLXnT9TDpS",
  "key7": "68usUdRn23jEqkzY1D5pfR4VcwdFncqa6aA6gwacNvV2sBNeJfXhngZt8eBFXnuUANkS8yjtWVRhjDWmakYV2MY",
  "key8": "244DBuu23XAwNT21jWYCoZpbyGxV84YkKkgGapJQHQ94GQftSb7da9wW2Qhsufm8jMUKJY4sT5zN8RAYEQnHeqra",
  "key9": "ddAiwxjPxCu4nG992ZrzRYoBYJJz4Gs2pZi6HWX3npmUG51hbrMG5tqpi1BzHKCRVjqhMneaU71TVEaHUDLUCHS",
  "key10": "28rTZi5ipdHUAHpbKRGCbTEDFCcgXvbbSEv79hzFtG37K3RbmwMujgA51SZRJj3SicL7NJy2PkffgQ8XUHa1oGJ6",
  "key11": "2cWpraeNvXxBfwhitL4pr9nLwRmfaHSaJwZ3KMzRttYAYJEWBp17pHJm3VbDLxVoXGsyUUiggMixakZQorWfzVzZ",
  "key12": "4dYzUpGayjmaSS9kr5Ue4nvdaTcHKFh9NPEmX1aTCDG21L83ktWxPHH7upxdJs8nTmZYeecteVSFpnwzrS2HChz6",
  "key13": "VSWdgZDG2TBhQejrfr3KmJAYEdKCkBuxt1s9NaUmK6JR1hW1KafEsLGqVE3ymWuhMTiqV4NYR1x8FaYFRpLcxU5",
  "key14": "64xdXKFgXg7LbCJaq9iAACwt1uXqoWJAFGWxLFgWfFAiW2H42QYBCUxyhB75JMyFP3QUEXiTpAeJCj61e2xNAxZj",
  "key15": "epoTqcEG4qLscAyhCpKMMfAvoHuSx6KwCsymhXB9X8W5S4xud1Cnv8g7tG5QZxDLhwupcUiNJvppf4M3CdeFGoa",
  "key16": "2mR7J4cqzpizhy7wb9Wo6rNfByfKJmqAk2mCRXMTPWuKToZDQHLVpU1d1yvKs7BMYhG7YfJ7wgjENnWELCmykYkW",
  "key17": "H9xjKKsn3dGWCLDjkC9P4Wu7QpKoZKRxzVLskfTzPVsabnbBV93Nc5b2rrzdLCJh94Vftqht5PgenbdRUxSoP9e",
  "key18": "2b8Mo8wSyHXBE9SpWBguJthVPqjFAM1bKjvQov9Sj87pncL23PTAgkyy7SsakBH2Tr9cQqqvhhPTLtYxQG6iBeGd",
  "key19": "iK1KKVL7sCUv3Z1weSWRSvHGUzonvzk9PuxSZW5LZ1nPTV8C5CzeP3RaeYiKto9hRDU1VHGB4rjGs67fcytxaSz",
  "key20": "5xkoSJCg1zjY8jjbmmxry7wmYPFrinjkf6KoHo1bsTSKkNJ7iqRwDE5pwNPB9274xuE6PJqN2tECRjXUgmVvYzD7",
  "key21": "3XTTN49gAFAAmf68mUTaCevtc6x8G93vSJ1Y67Vp2ojpX9X51esrnxbvXTRT16BQeSUQEZvpQ43NirKzd6ADTwya",
  "key22": "2LSh3LZhG4LuMUYsgWRjV4n1zdu2183KUNqdbZkKVVjkJbShWqEoXe7xuqrZ3UxzUEU1zUqGEVWP1v3j2aapHrN5",
  "key23": "3q6SVK1GAerpU6XxrG7tVaoc3hhyVnWb7kQoUU6UCAorki8Bu3ZUk8k5iH2R5QxfF4Uc1pwfZADam2PuZkCJnAbv",
  "key24": "2wLMqeio9Gnxf7CdQfyY8T14M4H59nb3KjF52MCST2hnVbdUDiiwU2RQAC77KHpppekc3yhFiz8daGHFwKmqx5XT",
  "key25": "3F6nWWWiHKYAUkoemXnDoFhdANACcAJDnXzz9DeX3CttGbiL3gaetb4DcHN8eVqLrWwUpabcqKXKPikMKfimyqx6",
  "key26": "4LKnmm6Y5Z5mNa3sNofitRF99HZjLKTgrmrsvr8CVd3P7VJSqsdCUjLE6bB1Zfdos3FogbrSi9mwM57moBqbUgvw",
  "key27": "5tYdW6kQkBYsPRWwJmiYZe3ahVVtVyi7ooyrugb4QHPb8iTJLPgsFmVHDYrHCFh84QCbv3ZKJwVgormFwoUoSujn"
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

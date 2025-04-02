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
    "5mNGz1M1Bbg6qGuSkDUo1q9jfZgHPGbjbhBZwdD1oJbiVaqcqgjHHVGEbaGcPSYfas5p47R4Ht9q1qWPJdtGGSnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcdctDkx9jbdN44v7sUF5rJkwHZ2VrDmpK2TY5GTHNU7RrExRJtScSv394A6qDy2CribV8Xgva4vwneyfaMMaiK",
  "key1": "2GgE7Js1A1oNeDAcEcoPBxTwU1cGzM8WecNRKqEY1f9HF2WWeVSK6eRZZL6aBT2xZpUxA6xBhSVFH4dSS5mGhv1M",
  "key2": "2trYzwai9GEfmfT7yPteuWwdfD2CxvQ4FZDthgxQj6jQynEoUJ7hmNxhkTRTCK2GGRK446Ydg1SLYvxgyysbo5Ja",
  "key3": "3DQrbQySNdiudd7UN7WfnZjyVmXYRrqm7ckW7AFj921PrMcXNWxnC6o5ifTK37bExgk72WtAzGsDbSNBUzsAA9rh",
  "key4": "soALTQVJcFtrKRb5DCyUR4tpwdGnSNDayP16NivJyr9RzR7gWPppsWnarMJeByPZ93gbqGmJSfgFmcCSLBwZAEL",
  "key5": "39M5i38ySRTxqPBHVhWzGaTuRrmPLWYDUdszRgScVe4U4si6YQgmcHQtE2HiuV7yo3eZZhgG4FA7Nn8U6XrPFZV",
  "key6": "3GGaN1qkQXgCoGcKMQo371CteKQ76yw4o8UiuSxCu8yRy3YjSh4NoWXSqasxcntvmuwEfkdbfSMoUxy8pW49YJNT",
  "key7": "2iWWKxr4BGKUFRgetg1buezM1dbeb29JGx5PDCfTR56p8py4DoJxMUg3XPDf6NVfSC5gAfcsEYXQMWnqKGGi2MkM",
  "key8": "5W2gPcvJZLNahZQGzKgg9axVNSYyTRV6FWuEYuumAkZMWrHh5n9Aqo5y2EP1prR1mSKW7Ja9FbHkwE4tukcmiSo6",
  "key9": "3tfJn6z2CDMbK1Zic46DGrEStBLWMBkaNmEGX3yJaEmNLkregNXuWeP5t5QgXpLxYLMD9w7EPGiqGbijCim5ZMt8",
  "key10": "3HakZMtT9Z7Z2ca6oqZkYFHz5zEtJj8WVp7z2M5LRQuWtaxyizXELGrRQ14XcdFNTqZArLWXFmWzGXfWqQUEUFGs",
  "key11": "4aC1HoF7CwvLZqRxazx5YK5ydb7p69Ef69zMr51jzYJC8LytNsgPEqbJxKBAD9SQSFQmAPWRWFopUaezMaKFCMoF",
  "key12": "3HgjHV3YVCxR6jH3tH7Hi8N3yjEDYaFapW2XU1kTmjXNeGoPfUwrghqmRKGFE7LQJU3fUDTNuMwkuaQxcFxVub7f",
  "key13": "3K1aM1e713i9qLTZybmS92sHXZpNN7Zb6hCEF8vqxJtUpS6o4L66AN5YSKdyv4aviRQshkD3C3VrBcar4THj94ww",
  "key14": "65uCFgiryTXwEf1u2Na41zCFRPxEULF3nXXXgG4b71N7kJM5FSyZG9ss223guGGNPEvj378KJBytDBqxuF56EQj4",
  "key15": "2ijXfNHtiR89EAgXZx6bxvWAFs2HAnsdS9M9DRPWKF5ofVJG3RpHyMfH3gvj7kiQJ1h8mX3sT2ERmFJm6LQPaRmd",
  "key16": "3Gp3DDmmvSyc3vYmb4DiC45na8djGpGDpS7UrCgFpWnu2sMTWrTTrHS9dEYWJpyB3wsrbzDH5gWXtkE9JobzS13b",
  "key17": "6611pPWWa9T8EFj9dYGNihyrirA1gZvBNXKYLCu5PK14aZWFysADiWcNDKhZy96YF5V7WU4iixG3P9RuLfdyRMHx",
  "key18": "55ntU82hsh8QmC8Buh3ZdwshNMjHdp9r3dRiZ9Tq4sBW4arJiSHB7AXRVCnu9jpENfcGY3aoTjC7T31bN3nmkgVj",
  "key19": "2Di2P8JxKRPESPVbS63eB58YunAXaeJbosDzuEQ7B8XMm7DQaup3tWXRU7MRKntospV93EAcXe5sq1SfaUuiyhAA",
  "key20": "ZyWT472yrLriY3Hn58V7Z4Eoz7dVtL6pun5Pe3Sf38gTPHyU3z6UkyvzMD8CzatioA4CwovwrC8kvQQF9QfLBRg",
  "key21": "5Svs7HYXp2rJ8GvPjmUUhg9uo5MjujLrUfXuCCb5qd7YDDM2psawER5LtNKF4LhedXq3AyjBS3gaSYiBcg2X5KLM",
  "key22": "4UBWuEZa3VafScCvs5qRsFyWK2oRURooF9MfPkRFhr3Wjw8C32Ee4RiuQxyGeV3HojRKGkYTXCY6zk3yzgn7iJiX",
  "key23": "322FQ5s7n8PL1xGjDFMBZc1mWVPkrHWJHqjF4pHVm92e4K1SCkhW3V6Mv1AppXS7sXnzusZPssjLocgDWxVDjgb1",
  "key24": "3LkiztZjTcfYCHQYYqcBnFgueDQqs8Yi1R8AiY3RigrrNwZdeYZExarhoZaoMz7wKG63CgjsZQrxxR1WpHKLTsJF",
  "key25": "653baVaozEJ7seSyTxSJNGJAkfC9UJ2LXyebB7ZPjj6B7F5P8wb8qMjLR98xSzh3jR7zqHKGUYTPVv96nXukRPYM"
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

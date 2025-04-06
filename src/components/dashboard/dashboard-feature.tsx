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
    "EqEjPgbMsLTSo5Y53ff3bLq3Ro6wWp46FXwb2RoBpMDJeN5pwaQtaR2a3dYV3mYyV9wNwXJAfYDha1JA523mKFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sYo9yuFA833RXgKB9NcebzS4NdAJUKkFPHzcgHoQE8MQPJgw1SvnCe647PqscNGBo2m2rtDAZ5pokJqQF469gaq",
  "key1": "5HMiW6JRUYF8p3mjSJisfKsf6nnrJuk1MzKUffUEpBxgiRxNhBY5dvPZyj5dmhY4N84YskkKYoB8ragW3LL5MGtk",
  "key2": "W1c8PRowmvoU2xCan5cEmDndS3UwRG8vj2KbovbsKvNs5BPxFtPRaAGXAFmhbueZfv2PBBbNGv7bheDFB7z48i5",
  "key3": "4eagCoB19dk9VrKCsGsXExccsT7y739xECsUW5ZNRr4tWThxpV8FsA3j6kxLxRJuP7evwr7RsfDBRYykPLVG54Zh",
  "key4": "5nG76qEi9pNDQCAwC9Yg6MPohtd3BeGPH4HkCiBsGe4yxyKo7pMVNBdhq3PZaaXSQPBYDWiSa4gEwSxZDdXG9tuV",
  "key5": "4efXx7U4JLWA6cRwHW6NZaS6yvoMD6DSWa8pptvjfaMJLgj6mXau2WrzhkXNm1x65rLNKgQKUsVebT6vTmNQDNpM",
  "key6": "2KhbZy7RubynyhP4CkUHCvx7APjTQ9uwiULZ4or1NPauGuSpJLhWCQ7NRtqgDRxbtWuKnQ7kCh4YwKcn4gxhJnGT",
  "key7": "qvBhKsTcwyZ6ZzjfFqVycG86UY7AqMFs5tHqLCbFc9tXTQuw2hts7r3GdC6pthTzBFyWSauoEJm2fPUu2VwN1WH",
  "key8": "3JWcL7kg5vBLTQxt771qJTD8y2o6Qsqe4AjquXxBzrGoW48SDmp1EANj4PiarQvj1JteXR4UGN5VTPTciDfEezLV",
  "key9": "QmGYY1nP7Pw833bMunHqaepXNFP5KEZgVMviSx8ogA6qrpbLnRW9EaSe3hzYXnh3ApSsMbMnwvQMGBF3t6zoHdM",
  "key10": "54AhgDU1AX8PbRkMrSBFT8QQUAGgGrLqeCZBqo4XTvUykmoRJ182pVacS6JhUBbL4kLAyT1wavaoi35nHdPnpGKs",
  "key11": "3WDjiaF8kBJy5MbsnzFU6cPx9yPNB288khByG1iUufkbuSfEmUmVnNFdudgHTsKS4SEuZ1CPYSWv4hK2Ym4q64CF",
  "key12": "3nncbCjYPfK8HxCJqGSGYpZ46zRss6P28qCJMc1UVE8Gtn32hw1UJRPo4BdN2cYKsEKZJLyqzZNC4Z2T5gUQVVbH",
  "key13": "pUhcWKgr6s3wMrjfNs1CA6nTnyHXZHWBkchfSSGA2SazJQpEbUraVheZxW1uUkJw9Ghsk1eW6N5zyHs9BWHviDB",
  "key14": "4adJxYaFGY1fd4u89ymRdMoS2iZDhPkRWKStxL5jBFxRUcTQE3FQ79cqibxa37DdKg97a3NN6KFkd5D6ZjHwhh5E",
  "key15": "2266s1g3RkWeUYyFdVv1LvDh7ZVXpAuZ1RNt5YmEkir31456Z7vGejiQK8FTSHNRz755JzU4xjQdBszViVFhdvUs",
  "key16": "4fzzmZhVrimrz7uBDB6EQLQR9NZkvttSYfpAVsoKU4FKGmDSURGsGYEzm2skbpfswQUzZa4rXcFncGmuazQcAW6e",
  "key17": "iboBkMzL5CzpMvz6mhCcMhGxgvdkRWfM5mb2TptsedAqmHB8MeTatDHfnZReM267LTzp5T49muKN1h2ocFjcmdt",
  "key18": "UStfMypY7tK6dB5GAzuP6vG6fmdAXrDM57DsBd37TBzxnrs3auSXRm9c1bQRiEsynLvuRCTeXKq18uBvYoPz3ex",
  "key19": "2gnnMBrcaqZmrFNj9aXMYDgkKQiTBbuAGyZMgnRUcB6pZtTx4cXg4QoGh2pF9KUYZ7H358kKdZaESPzGS8b7iTPu",
  "key20": "4gJdbhjvMcU2jAmTD6633TChSzTUWeu9Lf9VVjpknm9bMpMju4zjDsXoA6VqNiRVaryjhkswNissjmUVBDtWo8Qk",
  "key21": "2AZ5mChVV8DvCzHqveAYgx3HhH8rNf4fngzaZzTwS5ozmkaDMi7g5QJDovWxjwmCPZ3KMWV1MGFN6QKSTiv2DuwS",
  "key22": "5BoMPA2U1vPkNFMX25HjwC8pbj19KFQdeYZBvLqmhKMDN7h6GrkeFXxJ4xAGEXJctMZQBD2jQFSctgVqMB9CPXBL",
  "key23": "57xbgZsG1CCFSsTbesU7dRe9PxLMoW1qfVBGLhEVxKcFQDwNuFCdjixt8VP71JmZaY3F71cwGNK3rE6Z9cMryMM9",
  "key24": "332UL8UBNP6r9GMf4F8eQFBhDMbj9rzXpVeiWvNonxnwdaL7JsLroCncNRBXKrXFpbqi4DbE8zTXAjBhHimrvQVT",
  "key25": "5bPW5FcNLTDoqqmVHMoPvthp8dCWq9hx3EngwBbJ4uit33bdiyYux9tt4544GufDgTbPx2DGPEhNDhhuekkzJjqW"
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

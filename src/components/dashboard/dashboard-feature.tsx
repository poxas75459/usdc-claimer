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
    "52YxeAAF4PJFdUCo1dW4gCzKTGvpeHobspVeZw8YxS3QaDbaFhVatVUYBpC6QDFJ2JUtjHR5LKpJosmrhw59ZZqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p4xqbswaFLq5B2ar8zmCMMaL8Xc1kdtJPBuAdWgvecN19XNXRAq78n9xkxoDkts837tnF7dRFM8FZmCn9z81JDw",
  "key1": "4tYjHBdADKpwUCLcweAR3w2k7qSCk34pwzPyPN7uny4cSwkWf9pzdX5T2hi9vBH3gqNVALzSXmAyk4GXMdjCkTVV",
  "key2": "YLKEE4x8DNvWg1PycTvfK6wLBM5NY5tcFcS9A889wjoqwwbnjF8NhDiubitCQc6kTVm76KK7fyKTiBopb8xhkTg",
  "key3": "5FaW3HduXKBG274Fwp6SCFt48yS8mkubyUegNxU56PBpHCjsYvRJzf5UrxPZ1r6CLEfx7XowCZ3RNuRMLTaC6Cox",
  "key4": "3mhtkiLRftUf21wwuZzthpnfqNhkc21AHTdLcpZdgxYGqLMwUEzxncFNCBcTXwYAfhGfcgjNSd23ZgipSfHncfeA",
  "key5": "eAg59irLEfBu4tyy3wpYt5ZUDU5A1WdA21W9cXh2AYcnBxb6cNf3smNN28gLfqHv1SiJ4ZAprZcy8aRrhWM9esk",
  "key6": "5V6UASFxqQR9CqDisJCLU4H465kmHXwjgyDcKtUwXZDTE7r5wzmhtKdx9TowHP6V5p7GMGFV2CZH3GmsSQVUt6T9",
  "key7": "5zCpMjFvTYLJYNsw4P8urNz2ZXLw7AWegbecKBXXmPi52EpDXE1kS3eUvWAYFz9icEbnkpn7agegNGed8aPVPjU1",
  "key8": "22P39okhRmGga3N5ksNhzqg3HEy1oGZWuA5pn9sZsqXQU2Hfff1NaXT6oKeXzEsoA2CeQCgSKFa4PkT83BrGJnQw",
  "key9": "5aMrgNTes6uyEQJXtL1YtBiYUummn6xWuyCgar4b3Lv1SWFAniCKagCxTv8LRxcfkRpysxxqEk9tspTUdzgwiGo8",
  "key10": "4GsuKBRXwsrBVGvwgzvvuCn8V9MkwS9uSz8VDNkyPjc2G1bYBU1m8z9J51habbRxioXxhMqLvwNMhpt8ZTnTFaCH",
  "key11": "3LjSoiveBk7QNWQ2f2HxmwHznMKbxFK1nUUgNHSkHHXv9tz6RqfnHpcriJu6XGd7keS8wQtdCzDB5BrTBXrtZJj",
  "key12": "tQzVRJyPD53SPjzY9KRaWTcGXqrzPdwVoFeQ9dQXg6f55NTNMThV4jTyuSDxEPDxnCMrNH6G6aF7USz3g3s3Ghe",
  "key13": "fCzx55E6nXSDCPNEXhmPogFq4vuQmoj7iqbHJojdRV2xghMY4TQKDS364sJBL1g6aBHzv1nRkpipvRFKBnTzkEH",
  "key14": "4zopPWNzgfY8Y7Jbjy93cjyhWkChsoGdki9NwsJJmwWWcTqnwFjShdgabgbp3WoAiynwLtJrhHXoACtZgxcT9Vey",
  "key15": "wG1NdTH84wYBHRnQ62Leioqmv6LXL6hYgXdPcULAt974Nb5okYtGX1kjRviTaUCCy7gU6P67V1ec3TF7batRNVW",
  "key16": "5XwBvxYtEUFEVBMQPpX8rhSBkb4DTcwYnw3CkcrwEXQnS9ryRAWHazeJ9buxdwDE53V8nKq2rHLFFSSVpG4zavvW",
  "key17": "3kWXzVvSs8CxHXmocYmQY26fKrF3udfXBwBQgP6uF1BawegNnPKsAEhJKMVbYKDmJsigjM9eogns85YAhgDucKan",
  "key18": "5HhV9Xm5gBP4Y7oqBfgvTyMKw3rHJDp7NXP7W2owQnff4kAFWnN2sxahGdZ3nUuXVgg75MHg2puUgie5pzJjCFC3",
  "key19": "2RitVTFLQj16Xsf8jDxWK7PXkuevSzCtaxWRcazgGs7DgyVocpKWxPsyp3TfPX8Y51r8V5RDP5R88XBKezw8BAk8",
  "key20": "521LREfQTks7uiha33WWG5RmhDPTy6AaVyufTzt4VUNWJJrpFLrQQuGP4EWUwCnxMdU6K9nUgYJmTUvN4FKvuZnR",
  "key21": "39QsMyj3oyN2ZLE19amn2mVRyP74ahVm4tLBy6CU6LR5ANRGkcC5ggQoquFRwuRxp69AUciBuw1yJavJSBD6A4Dy",
  "key22": "2kDBCNKQijWhPizF7HCgtEPbki39YBLTX6X4TK91z55yAsFAtt91gksR3vCKt5MXVZN9oobHSAVhk1PjEL6ag2z7",
  "key23": "5edZHfTzF3g3k29QCq2pT6nkKherNYoaph9RJnRz9ggY3F4QWXycHzN9JVetzpPy4CXAYhgLKtdUboQwT8V7Epyz",
  "key24": "5JD4TGaeD3oXqx6657ngT2Tp1AF282F77BwdY3qruzw4NLsN2VcmRVWMYa9sVyncEW9SZLpR9M5Gy6xzzMzGyqyd",
  "key25": "3ReKbxF3QUj75HWwbDTp14guBmQCMvWz6311oySyp5QC4WMxtoLqK61NSc12vDSQwxPpnXLhfZwBezWp9nWCaRUr",
  "key26": "SqtppuGjcZZpUqq4J2Lu1mSMSrFuNGE9z5BUnrhSTA4opdJD6LbDhbgmkNy6n8kspAitHC3nipt3FcPyVmqejiZ",
  "key27": "4jDAuotqrnYug3YcAGsguXEU3kYuCM5sDfSMnTMJ16rw49M5k4X7p9VyFwtRknHbqT92F7ZacB9mofmWxMKs1Wz2",
  "key28": "oVKNnFYyPHKZKQgbGmT3nVPAWfwZLCvHAYiV999ZeuFJv67recJznQfnAWpYrKtfBWaZe6K8J4epb5pXMaX6ix6",
  "key29": "2VjjvtcNnddUS1ECTfKqoggns4k5sKcjEfmuN3uwr9gLAy7MN7hgPt642SU9aDs2xBK1uUKG7F3cyGzVpALY2DUu",
  "key30": "2EFTo89Sa2fc3ADTprXKUFHPL55yFNjZ8qh3ZFZmASBpyr1hVhss1ru6ntaBKyRb1r5xVjAk8tsnwDaH6Goey6Uo",
  "key31": "4jxxyTv5cdJfhC53NyGFdWHxyYkxvUg1ukU2ASBa9EUnNbPBTzBZWdHpSNoEKBqHj4tE2PVT2jwCuhWvzomsdCrn",
  "key32": "5rbtXEkaTtfecDbVcn9MK1iLykAqjekQkF7o2F9N4MGTDfRuMyZnuVGQPV5zuU63LY8zFxdVwWcwnBgoMS5cmYKG",
  "key33": "RXUVcFSAYx2T9oKN32QZX2gxTm99KeuKfMfKmTwPTLz8eBzrCpcLHuB48pKMfKQkqw82DDFrFdETCzfkpdACqBP",
  "key34": "z1pP7ZxPVG7y9B1kyMCyD4MDR68sjKeX12Q2enENAXW1g9dxvTcQMpch87hva14Ps6QJvJ97NRsw4WTytWreLih",
  "key35": "56YFK8yJ97gfZLVj9bNT3BaARWvjwNRq6o3VpL7oJVKAJ4DMw1K9XNZ9i3iWnfx58XAzbxp4TT2NHVZNKs7trW2L",
  "key36": "3r7MTAWWWF1BCLPLJm9v1YcsXLoaXjhbMd3TGZK8P4QSGwytv3m3fxgrrNvKXxxHawpUKj2Em8qNnC5HowC8mcfK",
  "key37": "388jjvR58ERLT22NkTRTxSujedoFX5rUvA9Z5sqj14zFaeoBGCdhdYAoumJp65NtyHa33A8AQeXW9TmTFngW2mAp"
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

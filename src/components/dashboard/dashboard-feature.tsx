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
    "5P4TRSeKWzurGrTDmfrrcKTDESE4zASGz4VZLAgEYWXwLFRbj79nDo8oUkzZypxFipVGJNkUXG7ggULWVtg6oYpe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34qFyEyBC8txM5nxugdsTeoKdBM9aSCB25inZiY5E8i4sWxUnjogWix5ggQBQ58kjFbKH449rEsmTqktSNgjp8an",
  "key1": "YDDX6h36YVciCKzjeKYVFhBbCzMPkyNLuRV4WdsE17u4BioTNc6uFuDjDC7rmuB8AbcAnLVdMSYPZzAeXkcU4yP",
  "key2": "CZvfFBxG66vTZoga6QVhQiqtgohXyf3ve69o8RdbqazTCyACdbTimmbAbFY8W5z1VJY8yr1WykBV7ts7XbpEMdK",
  "key3": "44vv2XYFZyuVPoXNoVANbwgKnXWt1JxyuznEEbNDtHDzG3RErCwHteAAC4uRTRgdzt9yrWNGzMnooBTpNvQMK9TS",
  "key4": "2o5Wphw6dtjguRABrXcVitahCTd6MecvcCPHNqEcEDKjc4A5HE8oAebH6QvT2hBSUbPZPju1SEYLutFt9KzEAnku",
  "key5": "5GaYFi43S9KeHUt1mv2t8wDDtCEfbXrUNyKDT2xW6iZAGRrmNWHXXVCukH3yc5S96thx1meQ7abpTev4juAVwUUQ",
  "key6": "PrRrjSHEfJXWCcPn42trqiZnP8Vs5hWbgGGePQBoZhCqeE6SzbKFFgXGyiXaLqeTFn6Vm85ujRhgdVSzCpvfMeh",
  "key7": "3rGNXjD3okgizx4WYWhsJK6mF5LiDwES5Qu2MKjWXdBYGyHwBV18YgN5Dj5G41KY1h2edyjjTi4PNZKq2uAXpgub",
  "key8": "3iKxJnWTzJuEZTDhzBomRyTYFWsir7rqDAPMuKZyy5u8PY4zUysWT9NKa1coLaYX2phQiVGPu1EqckKqWhJnLiZZ",
  "key9": "4WvEXUqkER58RriwX2e4QvR5XGgSHsNha8iNuLZFHe5rN7bZ5YUEuadAbQASdXgKc5qwZ2EA3x8bTxZGyGdW86hd",
  "key10": "VAdjVvG3iYWirAE74LXpAwnu9eNP3RW4QFaPyShApYNmXNEVpbbouF6TAqg6LCiJzo7aLLKryNd3ogYKmMqWdNp",
  "key11": "3fKH2z3fY6AE3uKLqeE5BV9B2uYi6vFnnNwucMgECBH8Z8k1LuVQNHFMJtJUsB6fUbALJfW4MComD8r9UVgnmLth",
  "key12": "3zyzczcZRojpbAKdjezYgeuqV6ZPgHzS7aeVXzbo9zfzvKtpyKGcpJv5GvKFyif5Zfi7FQJdnTx9eNopLDbVD4PE",
  "key13": "47MQ92EoLm6RUgeFxwikAFL8cojKStkHMbTsWYjBjckGEmUdYmr4A3Dtf2eW9nYwWcZAc6d6RkQLQuerHRZSiUiW",
  "key14": "2CkmsujiYd3CfRBr51iChXSWg6es1VpDhhFV8v4g8XU1592EuB92vt4ABWkaRXbuqcfY85Dhz4Qj5WcN6QkthJeh",
  "key15": "5BrV7dDRi2mdPzY3Q1mpfkD9qTYM8YKHUQWMRQnrvz8BbVGUk4WNvrroesKSrwNMNqQStrapFmXApHEToQvdPa29",
  "key16": "64ZLis2ZanvxVEsSkvKDE5HP6aGqS7VRGeyc71y6XjYGBUZxKomZdbnW24Umm1Z4XYUWLD5QUmNHaJwUt4FTopwE",
  "key17": "2TTEbx4dB8xdnNjkqgkoTgzeH1MFH4ZcwfaPaQ3G4DjFhzKnLp3tzevAoSTruY4PCSJJqJRk88bkqvgiNTSC8FTk",
  "key18": "31m7L3u7ST1mrNLLsnQLxx1R5vBHNq2WgbScFwX92Bmn4uJHbAzGjCYwNL7nFQpHT12dvBTVvnt3AsGkBcmW5hcb",
  "key19": "jAuAkbxcpVzrTCwUnFm18Vs3ZxTwLyWLYBV6Hu51Q8mEPXQ4o2FY12A4JDXKKFgpKwTP2EL7AZVZd5J6FDoW5d5",
  "key20": "3uSJ3r2saNo4PuKSsmyjJWrMuFo1GEAiNxhKVqgfszV5xZK9ARi8zRgSHHmYH57AjpQ1gnAQ7dXWdumEMw3EUWjg",
  "key21": "3Uksb2aDQMa9agWPcGXTN85FHZoXa5ikb3qBXM3oRVQt2koQ4JJg5JjzPLpGJM8ZWjJdVnW87c7keMRV6Nv1XCvh",
  "key22": "318qUatJ7KVXGwTxV9u1gqrf1iBe5VZVMu6HBHAtygoDfa5N5GRtzWDDsz7YsEEtWHaKFMHBbuxfY63i63zQ18Zu",
  "key23": "5eKZw2MrAnY8gCcNccjLeV29DWQqTjFAZj9uS4bgQagFPk6oznWsyspZ7Qe2riSnuoEcEnzA1VT77AoMc6CNHdKv",
  "key24": "4LmVhRJe3DWzxu4FFZXoXjUNm8kjWMvaR5DMcvUQZUJgW2QmdzbxvmjN17bTUmRTWrBTZZ2EU1JesXrq4ytVrye3",
  "key25": "3jpmQzcSaVgVUYBUn2pXnu2PmD2UdLVxGiyKaFdZ1mCpFLeZunoac7KkxfWK2y1e7iEsZUgW7mBdDuPrJMHwCCPY",
  "key26": "2J78nJ8XGthsLecc7fUty8fwBQyjbhxhTTYjh8FcENnXTtqfyyBFcqkLoBb2SYuJaGFE1UeiHo8hbXvu6oRX7seR",
  "key27": "2H6uk7FpnzvcEf2m9EBmUdMRQYtigZDP3A8c4NV1rmwmeDUydNKATYs37H9aHeq7F6CPvcsXCcFw8yTXsJNfp364",
  "key28": "XBo4xkcuJypcsYWi2w4fBBykuryssrr7u3sJ2tvoy4TRUajrbgNxWPbradKbgRtpLu7yow8L7K3ebWsvHDy6tfz",
  "key29": "pZZJ3eKuukmR6ccb2MCNaCXPK3A3uUXXnEaxDowzRpwmTHLZH2gfRVrj73M6BUHKzBGPqNAYYWcfcsaYbaAjhxS",
  "key30": "2dxzE1CeL196QQTGvfsDpvxbySEaVdxSgXfPVubmyxvAs3aCCzRfKwHo5u2RwjGUHBjTC6NUUanGxzKPeFWLYhhc",
  "key31": "5MLTZpdgEmtHUPbBH6t26zwbujVwRtUD4MDZDQHxPtBGh4a7qjpEDunbNZZSYysBToyhpreY7hLCQFVKyzX2Y48W"
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

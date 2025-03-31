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
    "4GuEXmkpDAMPo7A2Dc5vWZJrLg3eDn3KVzhaDWesX9jecFxYa62PzamGU6wfr9TX9yQtTTXjSKQzEWEVg45gnCYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37oHzxb9AF2kuPGwMA14pGLE74QQJoGa1ReQgZCNcLizkTY9QZgurmtRTBF4dCt9Qs73e1i3sqickdbc9dzeRJmV",
  "key1": "52oksnqqcFMAowSS93Lew6bnL4mDRUqtftFS2zKqrkUact9MVw4eGEgwi6oEc3paAKFfuZmd1xbE3kfcvjbUwtJk",
  "key2": "46K5xAEFX3XavWQ4feVE6uPi6CYhdcriRChXFwr9HPW8SX23K2cyouysMfX7N5qmdApfGMcgdPjD5idRZt1bZgqn",
  "key3": "3P5XjSiYd84feWBejYxfVzfZeDdduL5H3DTEGyfktNErMhptUvt58TGdpdhQX7Zsrsxsv8oBJSEjiyowKb7uqZda",
  "key4": "3Qj8DDxmLXPwzj4bNvaw9NFyiaF8LWZAd2XahUtTH5orwnA8JrHr5WkYVwqYSFSsgvKeytEUmHhk7gbaY92y77e3",
  "key5": "581sRsD9FJeoinqsbM5pkYZGnFjxF73ufbrc6zDWxWSL8NGSt8uErEK6jnvLFfRvRcMq8zfG5m4nxQAKM1i5szSk",
  "key6": "4s7cjRybNiHJ9qsC4WaCNFbR9ccSV2vYwxvwRJt2z13aEdx8NxwAXktU1Gh3Hj2YL44KBogBNE6caSDLJZm4t8hU",
  "key7": "2kesmp6GMag2UNaSBUhXxHUyBHZtQaNSSJ5GWcWLTL6UE2JQLvYhypyBJCeuShV4hFiPQ5qgY1sSWVmEcykEeM4h",
  "key8": "4zwxaxRvbmWp7uEUHjpaMDksUF4qzwcfh81C89xjeWXaV2Kp1tsCCgdSfsAVWN9VmG2NibMyGMKz4a2WzK48RonS",
  "key9": "bciQLEAyiqMjUVVenS7uFA7oEcUkDQFwCemLSF58JoVmHZT3zdQGjSZr6dvKFpWYjeELH4iDEYZpVqySeLovabX",
  "key10": "5be8hqYcrTH1PH648zY1iypidH7RA8izcq259gNEDBTrX3dy6E2ndypFdJNeeYn9t7Ft8Zkc6RE5Uju5XZyqiwTg",
  "key11": "61qRsGmKp57XHyabHpF3jiTue2SwyNMV4rC5CjCxU1jXZm1EiuCstRFPTFmS1NA3JdViuzSRGskJ6y73A9ofCKCJ",
  "key12": "2kG17DUKxt5yAoCVPPiVBZVu5c7v8ywd5shfyMFZHQNMfGYxKnwiehEqwuhLv1AwKEm8ecFXjHysWEjPcMN2LpJj",
  "key13": "2LmkByrCDiV2tpGZiQMgeEDygT6Kt4n8ss6XZTV4eDPG4BqRwQp5UA69ybJNxtRTsea6SnUwDSfLN2ZdHT6oZqaz",
  "key14": "2YqSKkSUefRZ2MurYZqKLciGwrVm2D1APNF4LRKsKr75ZiTVKxopX1ipW28mRDjgKeRQRUnpMnbARjx9tDYmGsEc",
  "key15": "4SDCknQ7HkXj9Q5JwbMTk9gArryuR3T5nWvrtnT43bQE1eicEbRfiUy5eXRMgHu7pamP9Lnpmjmavz2WwscXob5Z",
  "key16": "5EESxtzmkmsGFUtyaZNYAUP9cDkbGPG2XX2Pz8Fbo5UAkUuMqAUVSzP5h9JDRjEr6yjGnDHi2tBCk1cCf24JNb2f",
  "key17": "3bd94cBxT5GB3NXEqhZFoTxUHDY484egQJggV4wkj3RaHX9xec3ntcoqx5b9LhRwH24yncRQ8gkuvLWgnFUrZdyT",
  "key18": "pr8etEWaD58LUsewEsTk2FDmEgCfHvB5dTKgDKjKt72yd3Vceitbj8yMTvjfNhHAy6aRHRniSpiDkaZs9tsc5gV",
  "key19": "4saADyvNtXUWUqMUssMDv9rKty4A6vJ56xpYyRgC9KSJBh5QffcAiGE4Fvx8pn6A8aq8Rpu2ZezJtxSDwPijFhCA",
  "key20": "3YQgq2e7F8pEviD4yg3uam64HgrByw1SoZu8ZFzajrWETap1tJQutRj6QGnrpWRx5LxSBjxML6HL6YhcTdzYeUqy",
  "key21": "QCvmY8F1K3qurdMAdCLWx8B38Q7ni8D8wkndzDV5jH46LRMGVWQp33fLgeYrnMFHyf1xum2JRenowPqRRtVF2k1",
  "key22": "5mjM2pq62ResMJyphg6p3KjMf8XrNgmuiqNa85GkSkqoq16d7tmtFpGSRPj12AXivtznqCEqBcSDuHfw6FYvGNyi",
  "key23": "57WPzZV6iuY2ErWNvoVK3VSsVvPkLesPrMJbWf4B4qrCPwnR2FtpER8ZgxNkfMzRgmHQSrFo913yek2ghXuiVkUp",
  "key24": "eU8rCJz4g6hoMate94BstVPye8TRY2HoHVMm98hmyERgrvfer4KXBKaa1fts6Vq6f72MpwU3ubdsikVUex6YQy2",
  "key25": "zJXg9YT7nXyXgk331CsjcrC36JmEcifruLtCBRFuaASaZvW7FqkZoAHKX82F9cQ4P3FaSpkL11Cg8u7VeDc5bvx",
  "key26": "63fV9GiV5gTeYpidFpGu3w6bBqNSNSfMtKe54Gm7ZiYrkgavC95gLwFWTLbjqgN5qKGrVPa1V1LhnNVCjKbQ8nhx",
  "key27": "5WNpyKapUgzDbcdtHswTAjKjC7yqhBy65H1btBV9Zp73eTSsZBeAE1wrjwCfjnbcWRPDtNudqXJqrEwxiJge2BAK",
  "key28": "5nU9vrzHWJ19D4exLZKReyufREhhEYJHskZmJP5pGvoXByMxeaYb7Dkmdn8qYTS1cVKThPGVMAfXB5yAKCCru3zw",
  "key29": "5Z81UW3wkbbqEjQr7MSgvUEmd43FhukLKQ1oztsnzBUMfWWceZ8udTPTNqnQR3DouM96GWq895sJSzHHg9rSPVPf",
  "key30": "2zDJmVarbK26qbG4h8Xm7C5KLVb51jZhvcQkztGu3bcD8bGr2kDzUBjPpPufp2emBR2uJgZyEGGjkaZvpZEVzr2i",
  "key31": "7opgkXjmVMTzbWhD5eq1wf9URDTifutYVwdkEUaTZSkSYS7FxWHBD8eYfTBrFDcVTMEfFFQ1mK9AJ5ersmwaJ7V",
  "key32": "4AsRMp3qbnChNWPmknHLN1BBKxQHjAZKCJsvLckLzwByW6TKtP9vvnexPWTLRFqxiF8bs6zJS2mMrygrLXjEwwNd",
  "key33": "5YLjhD1MAZ8aUUetuqQ1E5gUq5QTywdTJeYpnrMGMKSJk7GSwYGcrWDtoKVwgmjx4YrCgs5DV4RG19yTFdLq7iWe",
  "key34": "2FNuqebhCJCbkonZz5KtiiRsf2PbcGpuzhz4tuFymV8jzU3PUEtvh9PcTnjD1Kaa2ktHGoJRzVwn5tErXmA476S2",
  "key35": "3f5sVua74MEkE5cPkbhTWKpzcE1htJEmBxn5e8i8EfYngiQv4F1UqzFyMaxBMSQSxZnDGepxVEtG1r3cF3AGrxcf",
  "key36": "3RTQC9uwdH4fkXFdczcPf6w7cnXVf3QCHf7dSdmcwbAcdBRmJVdWZWTG3V9xCKCCpM1JTYgZeqNiuf9ZMfamrT39",
  "key37": "3bMj3fEZb5jMj9UT948XCe6iiWyBW85mBodF6C5522fRvt5UGN5MNsJkUim4pBBNGx4TSYkf2mHxsRcKEQjvyBNM",
  "key38": "62A7PuQperNCoQSTV8QnUPsh2CvYcQYLoHA5ZGcnBAoUjkXFBjZwWxGnzmHrC6uK3sdbF5RRPe7dCD43XgwhMZVo"
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

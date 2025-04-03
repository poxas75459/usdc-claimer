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
    "3KPftf9gK455zj9cFTQXv42jB1L5Qr1No7XKd5RTEN3eoD71xcTucoXUF8wY2MB6pjnY4wBM7uDbP1M6BFXXvAo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TeBt39itUJYX7vGQ797SYSvhZqUE4z9ioWgQieKT1sQDNvXnnXtEmEAwSY4yQMSeZNFXrSD1BMhZJ4xQzHCXG6V",
  "key1": "2GiSoMp48dgwRu19QhFNMi5sa6cZYhdvsFPVLmcqqhdUZDEp8iododiTyN9gMFm2QKyQMancxqYa9MozLSkBMSku",
  "key2": "4wFez7kspfUByUcJaT1yLvd9k2HUna1zRyy9b7YnCCzmTrVPdcgzwGYjUMnytue6hcd4EN3TJsh9qerBHFyArkRp",
  "key3": "2J2KdAsdrSpi9UDk1md9ixs78dK2Xgb6VPX4h1sUvgRuQvgP12M25z2d56xpNTMTkBWK9Ss4mo5BzDjw499ufhk5",
  "key4": "5jDSwbH61yKM6LF7ziA9bVvg3fbtWAAED3rwPwzq82rH8dasZ2bmA7wMxrGvSueFwVFcfZwXajDDRfe9QXAKf6Z1",
  "key5": "2eorZYyto4KLdBYHXE9xTjXKnRvT5mKcumJTkLfeLEjqVbgoj7NKFSW9t5f3LfdR2XhyTM9hGwoVyTP2xsBxMWNn",
  "key6": "36snuBL3sSnKyY4NMt5w29NNrPxLspeF4oKzCM9zbyVgVHvfSyckygES5mMrk18K4REEoscULrH4wqNmg6Zi4auF",
  "key7": "3dRbFKw3mbdBbydnQtdJ8vvZA2GbbosM6FahAgNDSgSWwJyPHhcqaB8esoB6VU38tz2mCPQ8PHLWVzWio2jocVPY",
  "key8": "3ZsAfy2vD5gSijdYXsFyHNbimt7K4b9xeSnYBJuXzT7i36T75AzR25K9hJ6XmAqKb8SmvhR6pd3d13rv3Tjno7xQ",
  "key9": "36vDAdyWUNEPR9n4Hy79VWKgkJjG6C12WjsA29i8NHv6xtzDAsZqUNow7D3yZsG8hRDNvHMBgijzG5Vpv8ZWUtDV",
  "key10": "2npHU6ScJXjaytq2Emadzf5b21KV4N5qUpDcJ4K6jLXVwR25iKb3SaYyCSwkQbW7fXn9Hhtg7MdF6Cxtjyu7rMRr",
  "key11": "2cDKuFKrqvURbXuNAkJGWpLCXtR2Nz7Le5PmUcLHSntobM4Mz7hA6cffrR7J6nRJ7QYkJqhjeQjd1aSAdmgbH5Yr",
  "key12": "5C3xSJZxWMSTqbMjoYK9VCExSM99yqVVQ1P12xJgcfCYmxtpdRxVBYHaQSqjLrERcpr6UEGvgzV7KpQmXpWMnT3n",
  "key13": "qKaj27Y8XCSvukH5Zr4MYwBT1AgnnuxLM2RVPZG3FRtvfPA3nR6Y1BvYEHcfa12TgFoUpiByuaK1aKUx4nMf3MY",
  "key14": "36ZG4VbvUqX1kifqfKRexXr4aeSCaiJx8zHNnnwhnpWA2SLtsEydZHAV2tNnEVauGJw8Z2QCbED5fGyd7XUTL7NM",
  "key15": "41MS7B7Nfii6TjQRtMYsUJoAZDw1mtSqxypFBNynxGVQhdhiab2Vw3kAATcaXygKvCmmNbumSeU2a4wmswxD765t",
  "key16": "2JK4b2ZE2oodbs1ouxeqYwYkkmg6P9trc2EirFgwreBXdQCG4TKy9dHeAFKaiNggYoivT2TJFxw4g1LmBtUcNR8n",
  "key17": "619fps5sgGphftX6hb34ZM55DaxrqgTUQCUeTxnPG9Kmkd4SB2XcuhygnjQTVVqSJQA5CD55AkpJaYt7TX7cLESi",
  "key18": "TAaE84xnp17yK8JAP2EHmLWRdHMBT8cE9TYmm3QiRqyPtGKxP4Ckh9MKLTQ665Q77jt28UfTHmFMPFD1GFbF28R",
  "key19": "5CHhTes8z4Sh6JRcNfVmkC5RmgaYnYm6NGGx84mAYExZCaC2Z7eRmb8KhawuXoTiyKYgh4VYCpvPwyocDFzKQHiS",
  "key20": "2K3vs2EZBCEjHpLmCQqXA97F6y6p2XgPeHv3siXu8CuBuRoCFmi8nNpJ3MqwCEDSoNFE2tCyJUVC4bAGs172drt7",
  "key21": "2GYP9mGeyizqw3YUo61ukt8JhyDs1wxix5qhPRknW4YtKBTLLgf7YzGsLPeMrwSSBw8NKTVPmZQ35hfz5PLTjgey",
  "key22": "3mVbNonqSUYNxpUXxbTfFu9Z5Uagp7Jcs1eqHCZA3XYJRiiYY4g8bWGRt3TMDAh3wA83W8B8eNwmrTquUjXJ4W7G",
  "key23": "3vK4EfqjKTn6pGhKHEAyURBDEwEQtj2XyNyJhfmkY7Va9e9e5HSU6LdNuvM13ccJbuQv4Z2gvzg8YQpcMEEKYyeY",
  "key24": "49QhpoQwqhs1XHJpmj2jL8CYvZyHvB9ZEw4mtu1Wp2GEvXDQ7gMUgY3RCkAAwmUmHn1Mqa77rGauB4F7sJX2MeiN",
  "key25": "55NtsMWjhms2rpV26x1KwqfijGjXqk9Bm5uPoj9hhSU1PurDy6bmYCGToCtV8uBhfRSvRJd4fFaohBDLYjZ34mq",
  "key26": "5UWNEndgGsT8D7MHzKVT3BVxh7xh1VznQJ1wjfQp5YkmXDowsC7zbKrC2Xfx4TE6o56YFfRysGpiZXpgNVXDYPHg",
  "key27": "4vDDx38HEGVekAZRF7KErYUr7WtHWwRjE7HbYKvdF4ipuuVTxE6NiNf1aXXVev7uAgrCnPdL731aqMtppLfeCpAg",
  "key28": "4juejofbMh7LhzugpoPhr7ugQX3Fu9ig7EnShVy2yFfdJv2k1Qx65wJaF4JhqexWhPWtYknkKajVXbzfmvcHnQit",
  "key29": "H8KNjA3a5atdYbP9HZYD8DM6kMHkQr9dtBLnQieGJNk35QgcKJ6rJrXmiv8bYQNN7YuaxiSoTxm8Akge6uNzgFp",
  "key30": "5MpU9ZSSXB5W82Y7wkKuMe5Z2D8z4sBzyzJaa3CkPhFJ6Rm7sdLYevfj9SqcYzyS37XP6K5MBe38fKfZLekSQR6z"
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

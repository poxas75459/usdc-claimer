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
    "3ccQ4WPWRLNjq4qf66ebaAt3jNKLT6d6VXS6ru6t3QGXBCVCZywEeM2ZTFiw2YYBFJVsRmJYsDrTvDq7wcj9fvDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43L4CthDHFP6RYv7QpXsepxRqsqDkEzFbnD5pB8KDGUmpzvNLgyF5rTCmmtg4Kx2ZAUrsMLeqUGvQLmc5sYDSWvi",
  "key1": "3ZTZm32u6jnVzKCUCaniPWxn9KWyqCj7bhYLhEWe4YYHeUtjh94R5QfU8eY21a2ooZWArb8mWZM6z8Mf1AHadgEW",
  "key2": "3phkZw3MhPmtMPUCFG4AswRnPhK1sEFyR114y5GdPXPJGakr1V8Dgctc3nsPZ4HSVpD2YfqZQPeBTPiiDcaXBcww",
  "key3": "Fm5bJHDyPaYaXpcbMDhkdheLo9BAzEB3pzUPnSrEVnooEubdvr62q9jG3baFBciB3uMMiymZAW5dCo8CL5T2mwL",
  "key4": "44TNV64CnPm1eHCg35WahL4dRLhq69RwL4kvkE8PxxA7SDMrteNVxRZfP5ixW7hmorhTyYV6wefTzjUMYoVfE6o4",
  "key5": "3dewyhZq4tmv6axWEf8SRPu7z4ikTfCrBubgQB17RzLbLHXJnNAKzXdZX9gbbUWu8agZbSLk8wZgDtytZ2MFiJSq",
  "key6": "4w4yE7Uh4PvTZVPvp9rLS371rXrNf1CEJSXqXrqGdqGHM1D3LUbT6NXHNod73DDi7KEvqApEWGwzNaGVBbV4YopA",
  "key7": "4AVFgnZP3SnR36z3BEYBCFvZfwCdMcaVcThHjU5WRnoEGGYMgHXf3RJLfkDaJioaBTqj4UF54upUW8Xa8jhZVZB1",
  "key8": "2jNToqQpqTsHSfAntCnkgXKwVj4rc963tx4AGhjWXDXmZZaXAHWiJntGdHeVZ8izmN9oix6eMjUkVM3sKMKPn6KA",
  "key9": "5JwJwrw4HjgUjti4uytuabiVnLfnMSGgqiFNKmRNrQHUctw5Rj9MtNxcrtNqh5wsDYVB4sNGrEG3tuErWbqG64mv",
  "key10": "2GbuxFbfFECaN7Xy1Xnq1B4uudsCnjKAb1nU3G6p4A92SGCDvbTmPxoKYCa2rvevwFiv3d5aBnkhAnHc2E3biAvV",
  "key11": "2j5a6CUZPBtptzqr31LiXCgzbQ4ad5E5snZFK4UDcG2qiVjYDwvMTM5y3dhGc12JWB4iR6ixZYhsWYkZgiaMj2ri",
  "key12": "5kqKmkvwUkKtBjHLZef1bPB6aiM7FBfw4jcpQwzRstrSgSF3BuJ4KoySj35jUE6ofvCKrBmynunPA1Jc3K87GXsh",
  "key13": "2rEbdAXUcsiytwhPASUmU4Apq3BXeTZ7sYrP2vQdBFcP9gQoEjqtoEqhEAzEXubptkdc5neDsookUuqV4xvMM6vS",
  "key14": "3Y2sxAV8pGsjmX9NSHvbhvgTyEj1YRfjAw6bgCCUiQxz3N4QrMCJMfTsTixkafHcMa7QJHdz3T2hcq2yy6QBDot2",
  "key15": "4utSNdYw8ynxK1qn5ZMUjjytHbjC4qi3f5QqyhdNULQWPW3WncAMjPXi497v2EfbQatNT9MJaqmPErYd9zyPTrFQ",
  "key16": "3YVZjLFtJuqJ1qgCaRf1gq9oqukUooQtAe8BvF1UfioLeG6t5PWy1cWua4mrGXct31F8YabT61KA3ijtKjkknYwP",
  "key17": "3qeTFS558wfp7Twaam8ayjTNbZRaAo9okD974nC6vAgZawrLG2EvqwkzcuCdCwy31hy3c5d8bgFy4gYj7S359WBw",
  "key18": "2H821cCaw9d92zYxrrkVL9Q4Uh76PERzxenQFb7fjqDjSgg9DZBfdhUpf9Jomdk3j8WpxtfcqZyN7XepXjBb28ui",
  "key19": "5ucJdxLnyBkddgqUJU5JSbdMeB4MQ1PhvnjvGoQhhcvmRf17XJ1pG5uheZvBioJs7y6F73io34f4TJ8iNPHUe1qJ",
  "key20": "sZKo6d6sXwJsDdirGEZ51MYCzkmtfHH4Yrn2cocQe6SbNjS2SJAwJquGbbpVHvnJzam2g1cPDeUoCoBbLAXJmT5",
  "key21": "4waJiFxSyNWnuJ5Q7LyXczbCxZ9VCm7ccSW5PE2VMXZEjLcVtBb9hGmTvy8DQYG9is4RrxArjfmCG8aMqqBwxYVJ",
  "key22": "5K98U7CfzbXhgEUhMJuKckFYV4N2Zob3snGLUnboLtadfm3MAqPjEeKKG5m3TZHUiDNchr5zvz47bzk2mkvW5t3P",
  "key23": "483W2tQikxTViFDjgrycsyMc1jUS4vpEjt8xtsGoeUyWs2Sj7TKkAeV9GCaibqxdWgbjAzDbEQ2bFxHcGkMApJYA",
  "key24": "5m6Ny1tikMs2skDgkTPikHPiAUpsma9TDEx922mo34f26xf4FNLi5gTZ8uZ3kDEz2sQUVXKDTrDLRw83cpiZxQR6",
  "key25": "4iiWcf3cGBjdwruJZnSxJu5PoRqhvqY65JtxnJN232YshztUAL39DBNdP4sQEkmnvpedxzyXqFirJSPLyQr8Ahqk",
  "key26": "3jFHP7CayuGXqJjo67asM4Z1uRNHmnbCjgZgfzKNEDSge4rVasvgjnBDJS3kaVoY6apf4TcaPhTvW45oUkLzEjUA",
  "key27": "52Zhzft2RjEV1b3T7BzVQ9aA9cahBq4NE8BY5mEKozcZYj3MiGymVd45QxtauHq8wtgbjaSyNjT9t2SZmKS1QJCP",
  "key28": "2yyaDCxAuANhMruWDjDcY3Qt3Up1NckKkr7yFFhVsAB5VR2Nkr7WKTkFHZvNxde5LeXgNwGDwWj2Y9EcXVothcCE",
  "key29": "5YCGYXLgBhkzYFNEei7XrZqwkvJiPJE27BXcXLrewzvyNHVr8pPiRMUCCYZSkwwVc5kDHfLavT5krSDkJccCwNDx"
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

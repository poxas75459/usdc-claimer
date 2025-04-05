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
    "33oGftzhrMYJRG2TfEoaJAM3bPmQnKByRwTJQg7Lhk4tt6iUKSXFXnBXW4e93SnJ59Uxm3tENA5yrJFZ1rUkZmni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gFTVYsCQowuQEefifE9V5B96gr7tVfmeHBFMjdCy5eSzkkJdPGmRJ4a6feXd5qgSwjvWJxTrrcXMLBULRsRXVjU",
  "key1": "5CkhtGo7Wf528R2UooAFHZA6gB86CVApXQ4FKhbPwb8i6ZTnnZ4yuLeirwmkgzJ4ee7puhRubPgjfBgvg2LAVuPi",
  "key2": "5tLg1A7Rf4eSiVr6kWkhjrRRjzYLCr3wxzrPSnYEfaY51DwYzPaKGtXkteGdBJbPPkkNDwQBWVTALjuiUmHTY5D9",
  "key3": "DJXeQvbfbwYV1VWgzhTC7erFDp6BnUPV9Gmrs69dzzUaZb4U8cLixfEqQo8hJ5Vhg8ELdwd6ed57s5gRN2ccf8D",
  "key4": "2DmP5Vy48kUdd4YLL9bjg7ZHg1CLz9GTPqz2hneH8bfkLDc92NLm6uu9bYCqFcioEexkTpq54KSTnNzhdXV8Rxa4",
  "key5": "2AUABYLC9Q8FAJMVohUmMxvAjjSDA7VaaKM9HZ7QEGaGwDezdTLBsi7m6phbnRtTHFhbE6bwzZ7s46v1Fbo6RwzT",
  "key6": "HW5tqZRTF5tf3WKi7TWKwY1LYCh2zBcCEme9H71Y4EVMCaNTmPUZkWW9ShHTkuRHtgBV3khbiCUsEAcJNXfwgqi",
  "key7": "5rpnqxUjYkk6k2Dat73zRBBTMt73Rbkhxv9VPtUeJf8AvcKBxZpdobUECnPjuED5R4chjJ4zaSsE48BpxXUKwuta",
  "key8": "2R3215DPFhVAMAJCc9kh7UqREwgfMpHHVfQxmasu1U3DDuBNDm4wJN7EWgkiVprPRHvRQskckx1xYLXQFytftqSk",
  "key9": "2ydBMNTcimEgeNLaqvbr7dv9EX1x8VUHcNCKbXMhLEDgesKU9ve5koW27we8a2x2i8JV75scg1ZRi9nuqqzpRNJn",
  "key10": "5ooPjwxq3QSjsVmsVEDoDmbVqGwmc2K5sudmxB6tZ1D9bfhNmfxaqTSFfUss2vacKjAykX5qWrDTKHmKx2HfCCcT",
  "key11": "FUPuu9UUGKFrkCeVP4qHP6t3ScmPkDTcRPPeeo81HzxS4zfgEAN4twdBjeuAw7NaT5i23KyvKHUbU6hXdmW4Epf",
  "key12": "2FSGwTzD3mzt9wVP3aG2bjVJkmWWWvGcFk8DMoNXnGiiwa4HV9dkVwQASyStVkv6qzmx9iphaNWUCaXszpREdXaR",
  "key13": "2J1qJtMsCt2wC5tqv5EQUKf7M2b1ceCisHdXbGV8jTWrs6MyRcJHcAnMhaHJscp7exjAw91tW9LqcKoEBvhUwqoB",
  "key14": "2bRED6qCempegqrE7pENUe8dHAKWGAxaUJ2XSKvv3cPeBVyWoG7JUFsxi5eYe2ekFsbZiUSiYTYhvJwDo36VxLX",
  "key15": "5cRmBdUQiEdbRbypnY8j6us6Joyj2PQQyrc4Br44AguFzZbRXyqvWJFnnB3TRMTsChLnmmYes5LsBTpGD9P99AJo",
  "key16": "43PjrFEwfzzYhiNmPWMvHz59nruUW2YiZVXY759rQo8syTJ3ZLDxhhCkPisbQo68TdoKDjwhyGSaDsjCGJh8WFex",
  "key17": "59P3CQdxd3BGXsWY58hioMibAqF3jteaw8BePzjMLTaS2BFXHrcMMDL4nt67vcUFcsFgJ3DftsNKDGhhpRNzQZdE",
  "key18": "62wgUN4BgNoAGg2ka2UVva4yYyFd9wU6mED482tiq8YEh5m88y54bL83Ksx1oPzQDM53Rdd2fmCVVxNtDcy4Hz4P",
  "key19": "4Ag1AXwtd2tR2NdhD2oXQxNPUWJNExXeEttzakRAauC5uffHotPXdqcoyxRt9gmTyRBMebRVqrea6iLTuBCbqFZS",
  "key20": "3h19sJ4YUfFZJQ9Ym3HYCX9tZahKCC4y9CRymg2MRMguQV2LWVM7eZ163kE8EfBBoxKSEKmnPzwLMAyexPRkPcS6",
  "key21": "5smwanuCLLeFiRKaRJCEnrEzj23wrAFdNQxb4rgFsrZHjKJdafgZvZynp4krY5M3q694CRL4REccZZ63u43RTqB",
  "key22": "4XeWD5E9sLZGYMn9vRjDAjVy5Bh2F8cmSZfPBTX3Rg35jShcETMeRQn4gZvTKYDJuJY3QX7v5vV7CaxpdMPqq2VD",
  "key23": "3zKFLHhm1pfXicZYv4NDpsQBjLXYahJUqU1qhsEdTsxQx2SRK2e2nSS5pztDGBnqxSvCdm24Wvfu9v2QXKXi1BBB",
  "key24": "4A8NojrUxp9EggU9erLzALuUNB63pdaRcmyatm8Qyc1onrhK68NtyV9abH1TAHN8gqmWJYtBhWmtmi1bFcsUqM4n",
  "key25": "3dBJrUPKiqvrgK2VnQgqzkh7NFKoRpv6A9yhicER8aZyowWqftk26qzwstbuDthrSeofiuvxsbGxeSG9p6dojjyK",
  "key26": "49SLB5xHTeBXsxorRg1a5XDZXVSetqqWYwwqjAJkH4kFpvDznGYUgM3nBjbBVUQUadPZNS4j7PGaG74qBq79VWc9",
  "key27": "2Yat83nGkuiM7ERaDRFdRus9JwE2PXVc2atKq87KYMGfw6AFKpuv7S3mPW5tHjP7Rz24UryPzG7ybqQQZteZH6nQ",
  "key28": "4ee8iCsq35K29frxAVgKQEkDshLPUiw1tdDyWe4VToQFBdSfd4AqEKSP6K14oXjNwk56sLYrvQKd635p7AqwLD49",
  "key29": "3aMyJe3XPVWpY55MtCqVjmK74BfRTdfGRuahwv3H1jsiiZdnCAjE1N4jQ7RbGu4PfXVQHimKP2E29kTsBoKAWwaN",
  "key30": "4vwjRbox2raN274bfKQK7XntZBec4cvCkVhXcsKMUaZfb4nrobzkToFcqDqCeGXf6s3nR7dj6Nhwuv88xWHRGVLM",
  "key31": "ALKmmQ5PbEYHiCUvThPSQt5if9N6GjPGWYdQAs9QzoYcLKryc4qnvGBzaoxfV4cub69TTCzUuncokaUmqL4F6b7"
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

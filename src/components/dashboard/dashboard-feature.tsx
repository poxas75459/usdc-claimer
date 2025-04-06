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
    "L5HTgvT3NCQ2enS8KMAudjNDX7cEQHd7qknsuB2XLjaAJLJVAXnDocANQA2X9mCtb7HSJ6NdWQG52obocMEHVwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31dvvqovxXWtdN2Zz3PXiu5S8sBvgEJmCioHDu6vB73gGfWGWumjU8NUxaKrRaeAmGYRFKLeZpJCdd5Z5wyPRtCu",
  "key1": "36iA5puF8DXnx1BBC6iKKUAFMZPnmcRhX3dtcjTHu5fMbPvudop1stGXVS4dvvPL8BKtgAhYyH2eVCfF5jJmwgpG",
  "key2": "56JTuEyXsLtzjmRkUTRbZDirJSaZxqdNqQsPjDerViwnenKqKsJzNaGLbLZFPNqjEUnrA55LZvKmhCemqD2fpsK1",
  "key3": "4kGJG9HehBz6LLnYNDKraHvD1v2gQMBM9snQj1BwkcrBSQN8NoEfPxcznPFX251c6PPAEzwLGSqTHne4GUMYjSJD",
  "key4": "3DkJYwuoBFW7tbK32UmW3SBDMvVezm2ovDaAdokwJw6iDu8BKEuQDNNqRR36ropqZNwXfHYgNHo6iRh4DUkYVpqM",
  "key5": "2Yc67eMZyhwnfRNvdCj2v2egjvSxJ9zqev9LpueuuCHstUhHxj2eXk9JGJW68MLiuWtd3EhJxm1ozSwsG6Pwgknq",
  "key6": "2o6XvAU4mPCUwoqn8rjEAxbUVy9WcquYLuLVfGnmi7aoEZiHHDXbLp3JNkgaCqsGJCdhQ71Rgd5YgFXkjNcTzszw",
  "key7": "dPmEaH3otg6k8MzEUrn2yAZ8cpXyFa73hxqmFK2aoeRqcEuMhamup5FfwRTQHhEQzPevSMGmWT7NzWqTsYRJJgo",
  "key8": "29Zf4P8GvLkUYMsq1AToTvQ9c6UVibxBxUo7NafUirEYWb5H2R37YW7aJNfzZidppQv8t5j12ZgnjP1xBLHY8JzH",
  "key9": "AMinDFRGeKDVv3Pkua8kHtTvjpZJdxoKzpcpnEZdMSs3Mfp6bYC4KxtzN4eLMGSqZsGKT5ZhaUFpauLJLEb4S7F",
  "key10": "5EBJELwoH2yZigfPWs1kukE7djzfZ3yqyuXhFvMyutrAjAmhuSgTZa5fqiTRWwx4nZKvUJhW35ddMzc8DKEXQfCh",
  "key11": "XDHvAPRTiCXahkLpKyaRnGFcfCFwQe2p8LMFqeYs5xjt3oU2aRaZBPrvUXWJULtpDSFeGotScH4xDPko1XM63TW",
  "key12": "t9S7ZhaZsBtVZb7V8WPoNGhU84hMT7jdNjt9SFk69NB9F11yEu8YCHZZvMKXBZbdSeCR9LBtEDfPvhA4URsbjeo",
  "key13": "4KSuHR25LYcu4GLQC377EryFcK4qiHUy2y8kiJY7KjTckAZNWBVDBsC9LYM397TzsCWAsa4yZTkQKgJNCNoJ2GPN",
  "key14": "633jJ65BMWRGxbDrNUDNrfJk1UhR1VeqXwqwvmrhV19wxAux8QdT8zSMNaVPkkbfeWrCo8F7Zyfg9opxMEJrxSfd",
  "key15": "4B7bMs9KapDXv6RYf8LRKcNFgTo5BY6p1sMeHwoKpKU2BpPKK61yTQmDGdmqvhTPAAEZ5vo4Mfoh3iyLwUUsFRh5",
  "key16": "5oYikBsdo1e9v62NCPct5ikVzko2Kh3HMRU2g2QtQELSALhVWKhrqbvSJ1fF9RTNVmcrCTQnDiiRpxS4QwyLoYmG",
  "key17": "aS48SYfdWx1wd1EBTncsAR43qV1i6GBbLiRv88DFDaQXQJmSMgfA7pM4DRgThgL6FembZRU18ZjmnmcDY3JNK4w",
  "key18": "4ahFNSGqVcZtr5uey3DB86xoZCfkf7dBDupsMhX6RhWrtDj2mZnt6fG8HxwmMBWD6EgPngEWBwFc4gtsHdPqmP1f",
  "key19": "2A2hSj49xhW7vBkAoHouT9bmibEy5mcUXehFz2zeGJgHSH5UZrErHq1uiVhEnQCnKo63vuBLZ6fjTmijCpLkVk4W",
  "key20": "3XVVYw8twfirH25UXt9fKLfUvAY6LgU4LfFwnrSqAv5oMyyueq8D9Zg2VPWiWBYhcTGeBp7wdGeH72hCY4aZkecA",
  "key21": "534uwbyBeYKHMqCwiaipCVn9ZqEjM2e8EfL6WPpMTgh48SfzmCyZYv2uiFiAsL8S5osnyWjZWmkaQDFznn8Xwtco",
  "key22": "2rY4NENemsCNxjMqVRzGrBg3pxD6R8MJSkytmPZL3H83g9TSwRY9LAFeWLqjUsDicqFz88S2dNKsjLdfWmbhFgPg",
  "key23": "2pjoppHrMNkFaCwLAXnGtgi8kqn9Kh3GzDtWR4jzBB4g2A5QfyfHnJJQCg2EWuTbgKQrPE53nTv3dkYJN5ipz37a",
  "key24": "41RQ6dBuzfvG33VDT2DnUtGoMsbKHgDXAJJMsjFVWx6pvXq26MDm4U6Zh6SUKRrQ9z5zqbjtVoccBZ34ZCKuV6zZ",
  "key25": "4YQR5PqTbJNULrZA3A2zX95wrZ8WPX8ToVUCjEYUsiscMr8C622yZFBtuAia9tH1GZXZton4xyAYTDjHcahrPGR6",
  "key26": "2xqbcfbc17YDwBvxq3E7E5bhufPBwJtrEWEwrP5yXKPMhWySsRTu6hovKfzqeC6UJNkqeU3YrNogY3UKxt8MupLk",
  "key27": "4Z3bq33STYb4J5Nbwomy6S4E2xWoWLNWsujpsmDNidJFLAKtJrXhvjVt9ASW8c9r8PrtPGyLPETnYTqAqibfSKeQ",
  "key28": "4gtJ115bTRJm3empMMRYksjLDT3RLET7Z8x49gE547zzhf2jDgkKSwuQLqT644oTNzKoMdwLUcNJzoAj5TzCyyoz",
  "key29": "2Qi8CU1JmFN65c9JcrU9g19v11dFCBzNSU94S2t93zbdE8QXyZNgxS4uW5h4rm4h5jdH9ckWgcEpYVUy3pmoonpd",
  "key30": "5NPC27X3rYZB5ctgQrpGDA8Vc5VghNtv4m9HmsTZkCEH8vimjsVEZeDGjE6dsHUt9bTARt9UFGYHqSZCqQ8UmJsA",
  "key31": "3Bsu2CGh4jdvdAJWkedZonYNsTTxAtr1Y7Utnz1KHiWvwFb8HBrvjpoJC9cyg1UXLBm4bni2rQbbq3Kzdzphrdts",
  "key32": "vkpCm8kmpjhhz8Hqjp88zGv1J66nQNg8eZcYKZmRWc142jhjeB9bv3SUjQjTjEedFhswqaGmWVxA4AY1TsW85bi",
  "key33": "26PEwxwQqppQegbPyG2yWLbCWnJvaoXYmLAcrsGkJZRYoxnFU6Z8aqbnNr5B9REjud27SGXtmgs1AmjUnSP1NE3i",
  "key34": "2XqDERs14J7ba7tho8H1VS9QvC5jp8enwGT7Rrpy2eYsypNjdA1axu47KyTQz7fk6dPrEASiFq6pcPbUEY19h8aB"
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

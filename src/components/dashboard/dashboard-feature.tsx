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
    "5ZyR65c5kmKVDftCzqfN3tozQyp6sYorzj28zmRoYCqVa9AZzpDNe6P9K7NtQ6kpAngeY3egz9PF3pnrFz1og3fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a7XPdS8PCmLAFST1LVzRanQykQDez2enRYpyWLHq5LyAPRi5cbAWjEvbB2pdcRnmugDqL1ZyVEgGaGS3H6bw6GJ",
  "key1": "tEQi8tPrJ1KzQxX2oz5Qk7J7q5u9RDA915xaMuaqnLEEoWVhDKWhnRkDReSLyMexzL7bXRcv9GwW1izqbXyGX8t",
  "key2": "5bCSwPgGitdG2gwULEFY1Hx4c714Q1NdQrpdYUT8owEfc8hwsKDfwzpReKyNk2kCZe6hsbc8aJ7Knjy8Tcmi7APY",
  "key3": "3RE9aK9eBqJJw4cJJbTmzVWdD7kY82c6VpT3GjqvN3uH3EPwLW2FsCu6NV9dZ2wEnVHvATFFdnPsqCukAuwRfiSW",
  "key4": "4Ec7hVgRLLkNmDG65W5hG8aRSXqdh528HDxQjbdZHuDP6sKWktbaPv21peLagdBC6mAgSZEov1UN42j5gcXoAvXb",
  "key5": "2328ePmCwZiP3Pg3ESujRtsLNk5u4grAHTA31dQiEPmgm77y3NYrBJmgowRNb5r3A3U3N5YtSsBEAVegWY3rDQSR",
  "key6": "2qKGUWXbu1CWEfGMkbCw1t2Vdkd52QTBMAhLbLJR4UFBSC3eUDDtCxuiQgXy9PsrMPACnDjSWbihegrziH4ssWj7",
  "key7": "2ppgjpoxnkYZCjajvC8CXtWfmT8uCcBLQEv4w2DYHLFabHugrZwaWDqHHQ5EzKmRYCEQBefL4MEqYdsBeTci2P3q",
  "key8": "4fFfkt8wtWQMMuePKF8BcDe3YxZ2ukdTeN2tTZXAa3tV7rpuGRUpzPGAoVFFwgbhLs1Ty4kZfgPAKX26zUrZGeCz",
  "key9": "2M8doFBFHULgNkK5tJtbJ5wb9NRwAe21cumHkNPqecnwjFBxCPMuJQgtbtF2jQwUbBFTRF18AWJL3t3yxBq6btGX",
  "key10": "3FUyPBRavFtkSeSPNyfzppi8LqZeQJQSf6sgK2dpF2pjNCAaMrLRmvphpjHFYmUE9Po6EP6ATsoBgPGy9t8t28C2",
  "key11": "hrFo9V1fdg2z1A8xGKf4WwjRCn21oM1UMqvp3f6het4JX9kdyHew5nUYigxJFp7d8Vbd8rEuNQ1skBua2o97L1W",
  "key12": "h8mMptvMiMw3YwLGvxK7iUPusaaaUXVT32y5UfE4gMbhboJQeQTxbVDDtNTkVU3yTXUmwF9HsJiQNjguiJekb5c",
  "key13": "iqERzSdEeDQGdDN5KACt8TLRMxrwesbDj56ANbSUwAXxbn51cQTYmT6B8hUYSBFGsviZhWZp8riVpdVLaiVdB9Q",
  "key14": "2yeTaZcNYefn1GFSQX5MKRLpPacV8VBNHXTiqV6oTERKFeBuZPFJqi9PLz12uav8jeKMq3Z1UdcLxU5Y1aNfGdY1",
  "key15": "25J3sZpSbSBew83fdw8WqU9hYcpBCBdADkb1x1FP14NWPa9zq5VZYZQ1aqxh2QUM2pgmtQUExVZebfez4h4rpE1q",
  "key16": "4f5wN2rnUm2xvBLsFwQALAPKkVXdthG47f2yDtCCufjpRMnGPXNJsqQGSgod5SYdfDKRmNXA6qbjdvexcPKyzdmZ",
  "key17": "xsWKjcKUizqq2aKxZ6kYGvj9ffdDaNFBiArMW9kNuggCoJ8ejR78yTBQkF5u81NCiTvoyto6MQ1NwoHcnazZd3J",
  "key18": "38AuQU1ecarrY7QYZZpuJ5wFFUMtR9F8xGc2aGXvnNxefckjizJSsKrEaHQm3pYEwoQGGTxHX5Y6U76RVJMtDMTq",
  "key19": "2tePwGa1jn78HZjt9kNmEAierHN8rodw2DtoJU3cDjY5QCdfEgxG2o6uKCFnGS2yP2NP7vKK2261ostR2xCxDfK",
  "key20": "2KgciPZfLMFR1P1UDupikZcY4kJcVaM1tfDDftqeRirqyNVHgUWd6cDrcay6Q9jkbs62aCMCgSXMvUzouRdeG1cD",
  "key21": "rx3ErXvxkTVGwZaifB9cyzLJnD3Uk8mktybhtq7Tj58eSYRkGRE3n5jEYrKvn1XEyRgx825WgpD3SuEESX4PsY3",
  "key22": "3FqkDTn5nXeqtXzURnY2DskDwxwdKLf69mduNNvS4VaxDwoGSJmGDFAAqjh1CcYBGGjbcjChmMBjshVqhewJnGW9",
  "key23": "3ZMQqd776HdMLcyLSqyN3NJhkNxZp4JnfFUvnVF598uV8Gqo5et428UANgV25MLpAvz26M3cvpijvRjvdFYpJUKb",
  "key24": "45kCQAzgxmgbYvDg3LdekCVuRBxJ7DTPZPnurrqJrnsYZaGbzsPknBBsgeyY2tSoQ3bxWSPyt4kfA5gpxwQvMirL",
  "key25": "3SXq6fj3VcUGE5YqmjGUEdShRjioe4o1jGuSxXvFZstLuYtg2yXqvAJLg8Mw1Z18Q4jR1GXKkMdaJn125CMJ6f91",
  "key26": "3yBPL325tmTSWmPTwP1uZP9DHnRRgea6N6f3Z7puWiQPZLh6oyMYCB7ktFaVuQh32Tb2aQRUDvh5rSpzroUAJUDW",
  "key27": "4Z2GYEYK73aZuxFL7pYQcbbgQeV3ahAfTCdqpZxB699Uwk6QtcpXneGKZdM4t6KsSTGJW15MNoKTbJoB41eWeTnm",
  "key28": "4ZQXo8CHPPoknzcniPM2ti2yzyFGJn8K4yXNJF4xrvLpHVfcD2HGU41PK9dnJqhFNYsQHji55HEEEg3GzPWsVvzm",
  "key29": "MGpjZNJWWZzUt4SAzR4vFUFc3FhrDy8yxKFuDUbayfZFaFRK2pFyBZjJEciKueuMDZhCwvP4XDDg6PR7q3NGH74",
  "key30": "Wnp3YnN1AaR9hsF4jWCC9ynXmYDRY84hDtdsvjQf91dFx38ZAVqYDWehLz6pJhrRLG2uYm4Dip9vipvAUgyVwrk",
  "key31": "5t8A2SGzfoJgygk4U68C5Z2j6nKsthWzWt2YejDFQJc32xiJqmayVCxo6UG7vmtJxuD4xPvEfGZu3ZumVE6RigGW",
  "key32": "2sLbFwuyfoJsWrgzybjSWw1B6f4npTrr6Tn5GXp1xpaTq6VPLK2ZKirTizQWzhsFH9pQFTZSDGqDs1q4CMV6jRDU",
  "key33": "4tHVcMRa8eiGNKLpczCTBRgG92zrLxdpCsHd18bqbxfHsicd2VnDBM4VGp86BoAbXPRBvxnm4Wu8aLw2uB8ysK3V",
  "key34": "2fnQ4YFSnKumehuoakQJuVwS783gf9rnmu8YjCLPQeiiFAjHkeZzCW8xMprPDxBREiRWKXm8VYVttZwu1bUBUjor",
  "key35": "5yKKdxxiLVpunHRc6mCkXEUcM5mLbb9kscXxa8BXxfASNXQRdoySswGTUMEbvgc2gxBcjk145DhCfB2eBiPeqWA8",
  "key36": "3dPUQ1qEdcSBAzqBf78g41dJ7V5vrCBVzpsh5YhxUgcss4EjEox8mUFLbLY1PKENX3y3LPVx4bCD8wC3zhdetN7V",
  "key37": "3Mac3VNgdxFtDqFez1CrQ2GeBJyJcDXv8imWGhaooj16cW1UYSw6mawZjDBnxs8WESpVt8i1spdw8jcE7GY3Cyii",
  "key38": "5svg6F9ehzEmPLmLpy2VjgtTe9bCjoeDN98suFymHKrVe93HLD1iMsuYKpcAJAyUMb6AQviuZePgyRXVUiLHDSL7",
  "key39": "2TrDq2SFWUe8PjPxYTCjbKwB8BprV5UJ5Pe85NeVhB47GsbKNBQvzJ3xomAxgrpngLTriz7WisBDfygy9BvXcJpz",
  "key40": "oZZYhRPqrpfU8WWo9ah5vqpf1pKUqWwECLLVSQapTeJ8piYwNFUM8xpUxoavgCnSXrNsu2FTLRuzcp3uvacoHQm",
  "key41": "5GiYhchXDvh1LJVqSd82jeBBpvQa2ydVKV1ujqQaaKxsube6rfD6KD5XiG1A6hG99WDu6g1N7iforpz6u1tNB9b5",
  "key42": "5Rjon3r3yVPTPM5RrcX7VkHSLyJV536LSEyYD7KLhUf8hrgdUxRTgXeC6aNacUC4Udd6jAHck3YW2DzuyQWNDPyN",
  "key43": "4HA7nCYRxeg2eLZrXQELy4pQ39kNXdwc7WgWjkob5t7qkqMT6e6repy8J3QmQV3uXPKZWC3N2xNkBZKRwX393iZZ"
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

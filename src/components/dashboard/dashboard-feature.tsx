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
    "4hdvaJVZuszmvje4ygvqwPCPuwW54DjoNkLt4C1CPyZtWmWKhTvqrkyqzzU4PNWk2tZEn4wsmm3GkSuhtQfAh4Mx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZADjb6XRMKUy9um6YsZ8nkBQ1GVbHgDQpqwAUZxUKXBvTqamcTFzthzEDc1jUWNaNBRd13ZXmM6Euc5AvBtE9Bu",
  "key1": "47uGFyEZFEyXWkRxnw3uXHWzzRCtLdUrpZ8YJacd9YZtdEyKqXVADST1QgnvX9ay2ZEhBwAXH5TsnoRs7aVPwFX7",
  "key2": "4iyot5DkGEodzC3XqiQLhjn1HUvn5iuZ2ZAMz2C1CyxFhSd9y6H1i6RbgnJWvXP58VZpZo2tqgciNFUbFXLoLdzy",
  "key3": "2WuQbJiVSHRZWrtMb2G3CT9tmuETYaorPydsYNXprEQerqmrxNtJKqmBmUdudjNwtQFvWxXhuzmVgSgG7hQitqif",
  "key4": "3ouFefz7CeUFBxDLLL7jiHYbTUdXDKgDPPThYq1ipWDmxViFLZkCeRjyizwSgipR3SXKjQGqiBvGr1ofva5QTU8d",
  "key5": "5nAS7m1Hfo6JbnvLjLuCuz3Fvp4u1GhLrnUDxx5Swivd5zScZtvsFizdq26d9SArERd2LeTd9TYzcru5UVsqovWB",
  "key6": "4auZE9ojGV1JK2x4mBPLDobt1j8rQWQPfz2D8TPjAzBFU7TQkuN8m5M8HeYbAQwkhrievZfyt9Xb5FKTHJ56tLta",
  "key7": "53XtyVVyESRXBYh51SJYdX2pDrKPMQAEvzwDUTNRHDQUCFZr32FzcqJGutkak3EK57DnS3aEwJ6fe97qNGn45VDJ",
  "key8": "56KKSe3Hrr4Afq513yGGowb1nk9J3Hs8bqJxpsAqK1q1XaapmBxuo7ppByL8YMQ9nUXC3aHMFeGGDaVntPfUVNvW",
  "key9": "V4pMeqa87U6JcXFMsCGoJgtdgtAVpXuk2uPQgAaaYmG5coDu2rSja3CHRo6Xn9QBPnFgkrQUaVeXVCTVEfL5iSi",
  "key10": "3CHF6LUvwj85owWAvB5vKtzYUM13iHfgCntT52bWZARAUTy1RLQuY5wXkJYYmL6Wao1BwTVsykacJoeH3weGggRD",
  "key11": "3xHwpZeewTiviZEnqwSPWa4omFTN8jnpsYascqKcGxd42DmCGSsEJw57vVRW8cBBRDqoRLsEgp7G6xbSY4AqFLr3",
  "key12": "5f6hdX3LrgsNkDur8ogPu8W7PTSrZe1BwTLwKeHVerPd1E8zh8zFP3vGi3b6mgnCGnL6oRQnStoafgFAYF9RmiFK",
  "key13": "5kAWBv4HDhKnB8a9gwbt6LbYp3ghVzANmBJ7TLzdji4CyvPJUCqJLFrcXMm55ruh3sV2X9innoeSfSjRKuzKAg3C",
  "key14": "4JuW7Bv3ZHuoCZvHxjJq7sew5AV3fRAgGgDnMb4Y1aL7s6J8Do31jr54VSLFB6T64uszRUU6CTkx6Ay6JEDGkjPX",
  "key15": "5NRze1ekUpfnuNVbkC2TJCHqd4A8n3sFMUkgd3c4cJFYrQjNxuqnKR94rAK1oPw4maEGA6YnAqDmmtmkdPAdQGKF",
  "key16": "2FQsETYdq4nP69237nKufBaB7s29VBdE6yu9i3HeTKxbKmbJHYBAJP96PF342g1wT8y7rFdKRHueWzyMrheDVxRa",
  "key17": "3yhzxWbxn6gMjGdxhrSca6muLme3uzQFvU1eUAeyA5rmMpzSZJwjVJi317u1rDEaJrn59smdizFPQKjX7ncZg24E",
  "key18": "3jCZHBaSH5m8aymtJY9zRMKGzrcuhbQJ2DpDGnsHVKFtbsTuy9UrnvCkAo2eyQEjZn4Ef25x2tHTYnW8hFMkvx3s",
  "key19": "5Dd1Kf88xM7mTyGRWUdehubJ9MMh2FX2XXABUc7XCeiS1ckqSAQiTipGxQnoJcyVLgrHrVaLApxGVDBhZW3YcFgp",
  "key20": "5gYVypXAcazMZ8WHG6uAjGMccvYcjGkDraMb8TSj1ybhgQppu4HSXspSoX5MvV5UAUe65LPj3jCfGytY8y5spgxM",
  "key21": "45wp7Sy6QvesZjy7uJLV2hJd98L28yg4gEhEEamEqyig1qbykhCep3dnDQRzsQwKRahx23ZTHsoUvQ8L3KofjHhr",
  "key22": "F3w5obPwJL6zDWtuL6xLAWbnwDNjf7Je2bpMwxhcfExCi5LAoDopA8fykiUj1HdHWNokEJWPwCfU2yXabmUMTDG",
  "key23": "39q7WjcnECtTqewNfexWEgH5JnCVRuNQWpSTVWt3RxzWGGQuodxwBSuCTqFSt5C2qEB9KJDjiPXqweoWm9mhRULV",
  "key24": "4gd27RxPv8Ps6ih8AohuLJLrZHEDqAmvKufctTShoi7FHjZWx6R8mdmeuVrLrqaf8uQo1KDAxUrtVUnAYomrDXzX",
  "key25": "5jiDNwR7JwejNJr9gHZk5M95c3KYxs3zNsMhAX78f5hSNxW3D7pnGtbDvkuupEgd9Y6LjsXH4k15UNtEx5iKZRAf",
  "key26": "2j5Kn3751Ly53WyAT8CADwhDqbxzPygaXsvJTS3RkZqsSoqcw7uKn5qQjvANuYjZtNukyN1ahjUeFYSXRNjTdq1a",
  "key27": "2CqTaGRyMNZ73ixHiABbxiQWiPEENagK8XkkihhQmkcPRB7ERRJbqHdJTm32usav3Qe6tKgpGG9DqGGAQ2J4LSSy",
  "key28": "3XP2nyvfTkudNjRpV9KNT8aMrCyRniVupSYpcxMy1oHcyrSHhRtnJcDhtbzaPJx2F1NA2eJwtRPoRgj1vZUHwepb",
  "key29": "YWzPxgybaspEtUQCnv3369yk1xV5PwqhQDHpXGzZBqsfPDi2ai9qnMwa9Xoy4qXd3KkVUnYWNQqATumP98bQGx4"
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

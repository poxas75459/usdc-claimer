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
    "2Ai6XbWGBGd4ekrsMLqPXFEZENnn41b4vwzxnbBe92bQJPgVGeFwaAMf67h811yTYgd3Csh6uanjx6ktfZnTmgrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zdMAtFW7toVvXmw1hrvQmu55MHxfKX2XJNnsRL4pzj4usCtscz8FWz8AcbJd9QdStPwbgck5sPeemdQmUbvYs4M",
  "key1": "59cmt18eX2y94Z2iG2mUqbsUB7VodCv6s4FjTPbna8uxKvk7NA9Kx358YNwMKhyNaWihDcNfKmMVD99sSJxkeqXm",
  "key2": "4xsbisCAFxpdwnSjcWfyaS3K2hfFssG8HwRCK6jaGWqLthVt5fDZ5YE1UQJG3Y8zT4rhsbeRmVAGSjnzt4h547XS",
  "key3": "2tw7Mwe6HffEcn2gq8cnPTgdcdHuLSV52piewmLCqpwGiGNVLokp3NgEwdG9TpPFDb6mej1JuZkKVUVy2VtSEViX",
  "key4": "2EYJVeiJEdVr3nRPbrpFvzHEg9nBfemiCPHwX5ya9BSL4M6xiSADAZRPLwb35UdZAtnxSjznspZxSePmgVskFXFt",
  "key5": "v2yJrF19NeiKxoh9syQevwCz68Y5zLnjTRxJevQc9pY5D1STyLKfNs1C2WvwUyGmoPuZH9e4Ki5qLu3MpKsGLZn",
  "key6": "5ma9s9DFo9o1CBZh57ksNar8zh5pVsDjPNhFochPiW5ou8QTame8FiUiyG663g3tMrLuav4v4W7QJvWuberQTmDD",
  "key7": "45UD1sE4LYzDbqVWzrwmbjWerq1oqiZLVFumskiAkzSEY4cpDEbTUmx3FzTZqjfbikDNnvorZcwZ6n7Lb35iBCqS",
  "key8": "5CMrQd5zbWbmbmx8dKWReW3p7isJ1oLm1tWmhQjfmkEg2axXNgvocn3RAG1WVG82zDFDS8cTEtQJLfcTtUP6HnAQ",
  "key9": "5iva4vHBA8p3vbvuzmF3yZsuQbWx8ReJ3qwR555SZ2vs28RnHpFdQCNe9xtDv6cuQui6ugwkS1nVYykyzZf2tfWC",
  "key10": "4hKkbiVpZcf9xnbFY7QcjLZyxevMrJoNVdywYGpht122fTW4pMUYgxaLoaP8WujUcbbNvH9kMY19tUXj4dPRBkkG",
  "key11": "4NEYjcv6gPuttXb7oiLQB1J8ZFeX9tKHRm2QQQXkHv5u6HB6azeHVkgkCJfjoZan86XX8Z574ew2HhHpovh8Qz9p",
  "key12": "3k2iJYqE9FfUa39pawF2mrWrzipEpeGtAzVPzKMCwDNqrfX9NPQehAJjaLn9HvhM36mjvNFXpx9JH5YUgXUTHHjH",
  "key13": "22CUp7XSV3EiygHALgxo8kJ1kQTNnmSKU3hH3nfXmb1zh1Td7yuxk8GfUjj92ixJ9Z3MEnorpK1w9QwTsXaYavvL",
  "key14": "2nLTfqTBTv3nrugy5a6KxymPW5nfH1VVQM2cc8JbopSwQJ4NK2PHNoM5gxW5zr8aUSYsqCp1LG39GxDYQ56uXHCp",
  "key15": "25R3eAd1ScqpxTqWLS5bNmkWEZQfyVzet4NUVjUJvPnCtK9mUVG74raoAuhWxnhgLDJ3RLfxdE2TmsCsgT89h2fK",
  "key16": "4r5H8iZcCvfwhgpd84HhvaN7aGb3rMY4sG1HcWcwU8AhT3PHGi6SyfS9itLjT4NmS83Np5BhzcEgGBxPDM9yXWQ2",
  "key17": "7XyX8cKsyWCCcLbBUBfM7R5UJn6JGpiz25BYnyjcxaP6TnbVF9ev3HMsZVBQP42wQjzEqT5P26fu3wCGukh3Mkk",
  "key18": "5kRpq7Kt6ykquJCbpQDdwd32LNPJwJfCZRgEgrADLDPqW7YNGMDL4reMXGvuoMGgMsKi8a7fqQ2es57Hmzfin2Jg",
  "key19": "3NoxfDwZiY6Ng4Uw6swsFpTnY1zKT6U2yQzBRLuhAUfrMwHpvxHKqHrVXh39mK6tvNaz1WQxkGLNQFBxJqvMhqVH",
  "key20": "2NdY81BsQ7LQMxzzZSYdVNMuBEWpxdyRqjyi8G9nAppKZDuMrUAQdQD3xSzM4R9V59Qbd5xqKTWXaSLgPAdu2si3",
  "key21": "2XvZqnaxzs4zZNwkhpCYsSuLMcthrahGTk6kYCEakJYA2U6S6fDkr9RGPAyUhyFQ2wFtJY6KmRRx7fNk9pjKGoRF",
  "key22": "55RorpixDDovCExg6hmmyjbL1QyMwLLLgTcHy8uybQBKySBgfURvq43Ts7bXwhXXmu71YAKHYu5cYNiXE4mPxJzH",
  "key23": "5teW7naCjYoJT4buVp275TLZx1u8cm1R5Kvw3RobSMLMpMWuRBvfN7WA3zDZYY3J41sBW26wGHWStFqHwf2ZSXfL",
  "key24": "Pw57tccr7BWCtdaRQmG5JNASUcjYXsUwFogSMYJz1VnVsL7zuAgcqwfmpWyPf7wxnvoP3FTxLbAa9NCH6vhtPwP",
  "key25": "4hHV5NVuvdoEsV4GbCWuGCuUNQFUkfoKm1JqHP9Nm6oSpjbShnssNabusgUDMgoRGcWQpW1BQDDobGUbEFoh87CE",
  "key26": "2BBti11oETtyLR5Wd7QvqPWpoPXbfqiqgsGa7dehyMsvykac7LDnzXZ4zX9FTcesSbJZZebg929VHW9M9y48Wz5k",
  "key27": "5voTMkCk9yWVikTFY4b91GgPRnAxwtVkwaVykfkx4z1LxAfNyCQQYSV6fxYS7jMbUvxDVeDoe7WhMzDFByrQ2Y7T",
  "key28": "5JpRTPuyTddo7GWMCsuXjKLJqiLtKEKVc23XjeojNq7zgj7wXZ6tCAzaa1xJhLua8rA8n7tZg7AZKudzv5xJbNgj",
  "key29": "ntZzPiPMDFwadbCMxDBFFwGRJDgrBEvxVFEhTdcFfKKdCNcPpKvFWtmX7mThCQ7RAMhKNfZ2EDF66LMbogmNP9a",
  "key30": "4psYobDju7GHVfxCjd8D3PujSSX8Pvw7BJ1YmjBxSay39CnoeE3KZ8oZ7UzrLqtopMxsm2CZKFdpAMtbrDFeFVap",
  "key31": "66F8GQXN9c55WAov9ofBdZzSpFg1HAzGXuoLnHkoGxvc8EwKDZajeDmDWsYVTFkKU1jXRzFziSqsCWheYy5bWKUB",
  "key32": "2jsMKu2hxpDtG3L3wkuxWJRUiGDREeYcge9x7V3Zmr5actS4dgtMvNTv58s7KN5CU7yS1198weEo2WpgC64wrX84",
  "key33": "2AEH6MQ1KVR37zCQrf47gT3VNcXiipXbacei5rtLTf2G2tDR8mzdDtz5mhzP9CZDaqDjSoYsDCPk3q22GNfd1iJx"
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

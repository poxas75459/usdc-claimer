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
    "2DrVh6qeCnJxnT4XXKF9dFx3qgFYXu65fVFTXmkfbrsQwr9pgxwijDxRFXjM5W5fyk35dEKu49ggt4eMqSUFyWvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JqUKpcbHMajchaBAeAxrRW9So3oGCuyVXHfqXgAw21UutGtpZK5AN2MaGsr1dbUyaaDFDRNthavBzBpW4utPee8",
  "key1": "3LhMZw1Jks3gvV6nJx1zDmgn1F22K5uRiqyuPomfJZrHa57H9zTata1cKyQqq3DZNc2YT8XuSvGsFouvbFNbPnSP",
  "key2": "33czuLoJG6PF6eCRAqrrRGuxpWAUcL5PC4s1PZjSar4VQ7h6Esv5zpgsXUjx1w2SKAGeCC7PS2uVS2Da6MNzj4yD",
  "key3": "4fj4ZvjtmZEoxmsyir6UKd9gfrWojHLbZ4NMZctzMqdLH975f1QAY7BbBf4angah5K6LZJQbZJ6PXg88DM8ARM9x",
  "key4": "4ruyPBGszF3rdwBKxnEC1T4fTPd5nGHp13PgE8iXv9o3abaDQiQQqWsVxahtkh4pEh3cxrWZQwvyXvGmgXhZxiNg",
  "key5": "5cdFEqzFSX7qvtVHZNGGoMN7deJWY6Cr3XMVcajVwNwa8do4ciJgAjYGiRmDYV2p75YtQ3T1e4WwTgMgFLnbSeN6",
  "key6": "2nUHugNMih8F6Rsfd6RdgpHaB3BmQsfx9d2MbqfZGhGCJnwxrL1Tg1peqxSBmVZi3dhbyFQhj7GoqCnrqqU7yNJJ",
  "key7": "4mb48modDvs1pVbhc8Mzu49ddU6Qwdxia5L11dzW7FN5u3YXV3q7E2FJ2icdnr4miatuLT7NRFzqZ6zQqty85gkD",
  "key8": "2CibJ797bhSi1X67e5HSu1H5XmsEiffxMmyUuiXo7xF3ofUFF69Y39f3mBH6D9CgySfj7pti4y6QAVMfEWdHF8Zr",
  "key9": "4oCAnfVhx6fLdDMucKce9rbCrvk27EcJbg47GxB1oQNb3TdBHLaWUrGwv2D1pNi8jsZGZjjBYZHHjyviDgahkQJP",
  "key10": "33N5ZDvFfyotrREQtNFc4Mg79SMAuim6ya74YqvLfoCDaBvrthmJWn27dSA5tyEakaN2xrCtGni82Akr5Y5oqUK9",
  "key11": "63mndhxBQdhfbLPtMXqToELkDxo5qenbAfJwPgPrV3GatmFgnWsgPan2mUbfsNXBa9MJbkUVgb9MtDggs8LvQMq",
  "key12": "5RqUePE2C7xSxJc6Std7FQire8kv2SXKjx1wJnuj37PjPPuiwkrZFxJP2ePy4GMDFHnEvtvJdU2uNhY35UL3QTaN",
  "key13": "3XkSUo3xVs9tAqfvChBoBzzdUYzMYDYnB9M181MEBzGe8Cv1658TZcpVptGaxajr8jicKEM1HHHKDnkVHEHq1uYo",
  "key14": "3Nh44yT3m1qKDLM2FmiXz9ARSTpiiiaJXm7HaYaiqHUBb4hvi1wHPRickrTVgso4WhZjvGRF8CjKnMrE3mF2rdYw",
  "key15": "37FrDPjvSAmp9LRpRjpGK13spdyMjoMe1pQsaQfsiTA6jcw4cjUcJDbBYeYCJCiTFroZXoYzrRCHo5sTrWvEYU8U",
  "key16": "3pG3haYWFF3VzLmMc8DRNvceHmSikij8qxPGmAnL63PoJ7GRBwJ8GhtbSytUQ5eoyJkc1o3y7ZFoY2NZmPqQjYfU",
  "key17": "5v47JKCaYQKZ6ASoF18nEVcpycKodgwbah7ujUZJHur4GU47iHLx45txZ4qiCkBG9773QcDZUg9HQFwsWKpure6H",
  "key18": "3FbjfCVsBpdG4oV7tkTsrKTKSEeJZKS6a9vUdCzP211eUGuAEyYBfZTyujQNiu1zgPdkYZoBidJv6mxFJc73ZYAd",
  "key19": "22vdCd7aVAiRryLNkQ1s1kUa3sDsjAunMQf8SNdiT9fogZMmeP9jdxjAbJTRPCrndayaqkkaEVfynyydgHZARL4M",
  "key20": "3W5FWCJeEfdnUV3iaByLCPYCsEeodPQAYxqGyMJDLTarh2rjRJ5vYh3yDPR1TH1J2AhhasynQNCq2FWzyzSiK6py",
  "key21": "RDjP9vTN1NAjd11YdChsJk2WMzRyk8yApx4EW5GjJkWS5FxJxe5wSg8xyp1nWvLdzGm3obsgedrxRbcrmBWYhGx",
  "key22": "2ZnuKvSxgbanGQ9nMnoPC6AdUzC3RDnp9kteCRyocDNLUBhsKpKHGQVtxpAbnokD2MEabvCr347rNzdacEauZGNA",
  "key23": "65j4XCesGaFsLA9NL3DcdGN4NEWeo2Z9BfXpHkEYsrQXobSE6xcaYpE47dSSeUwEidxUuZck8Ym91WjmtKdPLNYM",
  "key24": "3nLjRfA96o2j4JTF66y79eKcuBpbGPRYqMACPwsb8jyBLVn37nxSHMaEGKFb38CXEFD1eWZ77nWR7hLFo4iqfTqC"
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

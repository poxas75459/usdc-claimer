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
    "J2VobA4HiufeDsrnyUdvxyHM38KdhWuyEgbBJJX9nQ5RS8LMegTej8xXRcAN1cDQLSf8ABXsdLh2xP39SCHjzjh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DyaRfP9WDrtamTPYCDs1KwV8pLWjnBhebXvNCup2GbcS115B1ZS5LWZsyFrXA7XZFv4ovsHLK4Tp1oGGXQRk8h",
  "key1": "2SdZa7Gmbpbrevro1Uc27xv6kVtS2MvrYiUqcwmn5XixLPcUnC73kUVd3F5gVDEPCb15VrWvvwxcLDpTj5nXD31h",
  "key2": "5ciGM3JC6d62Bpi2YLQUMzM3PJX3LKLupPgAaypqfZ7GfyyTQtW6NUo1CzfPRinjExQnWsEafCy8xBfZFQfm1W8c",
  "key3": "4QYvLzGNFrzfP3zuJcpoBinGtcX7FLgSqRqaWJmL8VCHwtdnLTdx2yByqskQXucWkCSqzRF3Hr8RhE2QacH3NGo1",
  "key4": "3t5S8KiEj8BmWtNapnoK7ZTuMAJfZvud6Qn8Hb2PYe5ArJScqoyGw8LecfYL1cS69MojPRC3YJT8gKMi39YKeTTW",
  "key5": "7NVhkV9vMupe7PqjevdxetZ78xfF3ErK6ZCSAfo81J8XLTFbLW4cnFdfLQGF22LAzF4mHGypfYSd1w7nFrEWsyz",
  "key6": "665Us159yZTFGyQSxwcPVhvR61NoaBaUX8hApoZKHZ8K5L248CHoYh3aPCusnWSEaQeJKVruTU72CxRbSG24amhH",
  "key7": "2yjTxq35tApHagR3guiEqmmgssxDzoMs9fSojdvVvi5QhqeoY8Sj1TfDqX6JJN5RRd5g481LBNvnshFUD12PUmZT",
  "key8": "2cP3L6Lp2yDCkzp85AWUJbaHSh7ua5quHY1okhhL9LLkimvSVwqywYThHCAAtk3nizZhnPX7sfTLfkYo2qJPGxQF",
  "key9": "2whGM2SjsS5ywbR4SCsvL6f8rarFwZt3q2UZ98yYSTRCzUE6uUdFL4HAVLffwK55tPVB5fZVsYvew8kKzwGcaisS",
  "key10": "5zuGEAcLYGJwiygCyVbhjK6omvyeJ8i2MHNBYUnzNHFwp2dAUiQn1euHWG4XWHRr8BSFXVNvrEhDBDN6VnPQWdz8",
  "key11": "637exsutiPMFFqbSfA2NzCGVetwrmj4HWX9Ejc4Kc9UsnYfkrtS2zCrxQUVgEu8L4gKxRKKXJDioJ5Pdg2APDuKu",
  "key12": "4qcWH6hVV27keibuNJAepSiq2YrLY1GKkrmXRv1kmsPd1fuU1TzcwZEWKQVeXJ25DpB4ScjyZZgUBQp2NmGU3k5o",
  "key13": "3HHdQQg6cCXkGpoHzHFa7t8VQAYXcsHphjsR6LmMkxqKyhnvohW5VLsxSSyVM55nRDVs8pbveQetKFYdfDMY8BZj",
  "key14": "huGBdRABK1ThkoArszkMvMbNZZ9cKizJ3MQPHwAhjYj8ybwy9nwXULKUbUEkuZD9g92b4BXz9XMD9kPDPCRGFwv",
  "key15": "5LS625ayujj8GmkGf1ej6sHtsk6m9k44p83R6mvYZo5BQieYfQhtQnAPK3vgo558eqt8rPZcSpQ9NJdTphjf5qXs",
  "key16": "5P4ub3TRaSLoX8JUPFDvDDuWXXeToyRey4R3dNUTkDLhT2GbRGKrtVghApUn5wKqjBzkFTzHthMgG2NybfLoX2Up",
  "key17": "55miyivUaXfeUhLDm5Q59aNkc44uRgJDSU8SpTU7bW2mb6V7a4qwUCEe1c3cy45WgyQZXog5Frw4mhS7oDSH1jHS",
  "key18": "27FDp6VppPkL7FQsyHLiGA8kRzmS8y8J8H6qbsUXXCfduoUrhHMjS12MdrufYcfDfawDM79Jgb5SVndpcZ1MQAqa",
  "key19": "y2oG4t2TEeDb172Z1c6RUzGvoSHCauJi9ZKs4bDSShQtH9YDbNReojXTmhAFaWUvBQyRixvVcLyuajTohU5a15i",
  "key20": "4HMs5z3Q8WBkkoJMescbbyWHa551rey3KL6SiYgYdLyb9kscRUPHqCAxhsH2WaSqUmNKTfcmoBCmmPDn7M1njAUz",
  "key21": "4z29VbhE3nHS67CGDzq69j1aNZffRVoz2frH5AEqbV2GE6dZ5bHFtcnUhFuj2BAXwCpEKcCqgaD3oWQrjBJQfYG7",
  "key22": "4hhskfQPYRhQrCDi8ZzsVAkzs1NheCh58cRGJRqkXfvvKVDXfZLP6FCq9HTAAekVoQ21bnaxgSHN21134pCNY11M",
  "key23": "336JDmgDmeyR8wRp9ZZywtQZvQwHzdgSsaQuZDF2i1jUcvRK8FyfKYDxSEygNYzthBUUJNV8xjtUp3v2TV3KDHkh",
  "key24": "56iinDuZTB6MxHaxQ1XSHR9f7V27XTxDLpRfWsJDsZ31Rna4SQXjibL9p8PW8me9FNoZ4W44mMUrr1hHVUBsXNb5",
  "key25": "2LHFUT5Bcwni5c7atGFsd2aaifbiC3rb71DodnTx2gEUJ9B5Yuk97VSZxLCCgR35g8ym59reaAccWGR5FJNxu5KF",
  "key26": "6GQGXhAUKCDM6Xe6wcT3JS2kQFbNNueu8XL6NwKTE5ULMCFntDAUA3zQfbXPrMhSXt3tYw1jsMJWKvwBbHR8UpT",
  "key27": "4iFXEvfT1nARxLPnBZz3QyxWB1kyz4ycYXfP4tKY5wpUmH69gEY1ca7EowyyM4YxCw2kb2RafqJbU7BBtTm76qLA",
  "key28": "25gQL12e2MdaLg6J2u1PUXibF5WxcBYbVDPqcx4CgGKqzy3X8zXeUW9BK8ZpTVYMKRFt8qgib4Zr3LZD9oPjiR53",
  "key29": "3dfQiX3qzHBpob5NoC64akLYrzCAz3sSZquiRGVdxXH8KMV35LeCLDMbvYrUwtcn7sJ1DPTyGvKTCDwPrnn3B5u",
  "key30": "4YwchSdaqmZayq4zAgcyEA1NiQDNqFXpGe6Q5fXmhUigyRV85ew39YwLj2SArnsKkJbcmEBhGuoLNnqHgPWTH6M2",
  "key31": "4xtvTbVBANu2WDJjmdRkZnK6YJWmHxDscxpJCud1VxcqQgRWGoFBgpNw3Ke8S6QeeAuheTZD5mg19bwjqWZ6E7Hu",
  "key32": "5PxsXer1JoUjrMUaVJPBGa4e7sVw6cTjGwxz8bo5f47fo4mjupMw9nJZVybyRkacATovqMao6PhjEY3CZ4FKBSer",
  "key33": "3Be4wuwZK4gRZ4ued4yamCg2nKMV3bwDtm7RUCYHBFwux4Jm6RJLWWFEJRpGUPHCJSGaJo7L6duZULJYCh9oGRMq"
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

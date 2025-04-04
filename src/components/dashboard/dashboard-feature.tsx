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
    "58mBFVCiHtQCkGz6Af7iwcTevCek5QZ3VsLHjUSREky3MV9i2LbngbvfsEwAHMnGm7bcWcFukhPY9ZKP5tKrZGv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56wV3RggR4og8fu8Zcpr4aC23sbdNCeSV1BZoi9qk6PxH3qgDVE1ByBhbjNPPjce89bwgbSRWxKBx9jbXR4huWic",
  "key1": "5J68riPBYkFBQABYXoonMaPUtfmvH1gf9iJyi3LrpEZAucWzsmmdPZRjDVU24StMa4gXgnP26N3es3k6khaLaXWQ",
  "key2": "3YwimYznj3FfDmSAxcv7taE78LTbNdqxrEcF8b982pGvQoczXSB5jicbkiEsk4sn5ZzHZQzDFaKHLA61FczsHou",
  "key3": "3GdRAYAmh54QQHNt4rKERMpE2dZHxXiEvD9QGA7syVo4ktt8PJCGzptt3f9awDoXs8CTD7fQzY4AJPi6Uav54Hwm",
  "key4": "4LAv6DGeoo4gwVQDZhEJK1FPAQyvSoEmKK36yBR887PUafWL6RMHYsYMV76YvGBioZqwcpHNSYRB73hTFMbTTXKi",
  "key5": "42Hrrft3jGtjPHRfjX7w8XC7rduXHfqQVjwqjctjnzV74zVPhKEy2paigw7Uvn2GN9KEEDu3a7r4843C4zYJgcM",
  "key6": "5vJWBNcVa2ejjfabhZfpmzME1vuN8cfCbs1LwWxeH584BQWEYqbkh19hgEeHXNLFMMntPmuZ8xFf8yJr3oLQbCZD",
  "key7": "4woVcc8kvFBDvhWHWxphFMFEPzyKi6PxXLmYf6WJDCvypoMrYY5AbKxT8qEG5g5tyUh7SeWyTgHeaQAnsdwPVM3Y",
  "key8": "4VE9GGkAirCaWizTVq3maxffiB3TEyqGNd9moy39L6UQxRfEXjrwTnHp1PpFUmpw3nVyJk3KxeA556EAhgzzYJ5L",
  "key9": "2u5j5JikbcA9gWAG1DFtB8uegHgYghjvTih8GkqsE9BJvjG6ufPxU2Vrkm793kbr2d7eMByYa6ZMxdebt9T7DrXQ",
  "key10": "4dTTogsmFBSEYwM6mMPG4aSu4QHMqcVrdkTxV3h67NfYqWpFJ5Xjj5CvBzJjkxcn5YMQN8HsmyHQwcSii2mnBL8b",
  "key11": "3ZJAHRYiV5vW5CfseYo4Mene2YT94KG8ZJvHD9N1v3tXaCwJKCVtGT42y342JgwWRSEyG68ZJN4qJLBnVNdg2P29",
  "key12": "2qzSzK7vpjMzVeUmgYLwKZ38DbBBE9XUQjfJiMdm6UFbXFBscDTNNiAiFMeo5UmcaBdoQhNDe5BFkP3Tmrt8WDpX",
  "key13": "kczNSYXpWRcHJBGUzsJ2256FRPvrdNCUpdH4uxbg4poNCAtRKjYwhmHe4Yq3gMJuxxVmJi71vSE3DQCXdnvdEdU",
  "key14": "uXU7roHhqQnCapmNXbv14znwGgRHpLvchePjcepJ2277gfjxnFNJgAd4AMLTJ4J1xpsTqwdNMMJeQV76KjyD1F6",
  "key15": "4Fvkm1PLVxbB9xpLEnJBRE31oSiqo58wb7EABREoyc6qNfkJC6tZignwmP6gkaEr2NomWjHEp67EwVwUVj6C6QY8",
  "key16": "2T47MMiFp5pvgfBfJfwJ6HV1wYm7gSJa1W3cyoJe5AQSijQPGxHX4JKw9JVx7QXKQp6bcS9HmfbLN6f7GBZvKhg4",
  "key17": "4pt4P41ZjNCpFnyFpxd2UY4ev5b2Jct2CMrwjg4a7djj5jitYEyD13nST1wDETP2BqSNPAfw98KApqh96nxXZhSc",
  "key18": "3DEiZD3iUtJgUDN9rqpuDsc4JQUC8ypfHSecSCyYiuhFRoAbYrkqijNhprvYXpuSuxBKLfXF1dJtCbYbdjbrg1tz",
  "key19": "aixMG1bqHr2pVPYeYfdeJrsUMBKyuT8GeR3GgSFMWJQywfzRFXgCiYP34szMQq8TZjkcJDoewZ23Z6FjTn1p3Wd",
  "key20": "64LWG3mqNArbSkJcfSws1dyjLaR6Vjb1f1Rjv5SNfoTrSUCh4g6muB1nbjErjP6QocJnTmLWqJmdqXjUBxhiqWFV",
  "key21": "F648dKK5BySQF7L1qwF2GLTKVfMkW4LqopMjDVmWFti7yWKyWYEZpxDLFFHMn5PZFd3QGqEd7bqoUQ8VWyWBtAu",
  "key22": "2i1ipYGXashPXenqZLopyRZ54g9GUp2RcJZDqegzPx67xNkbP2iooUHjwroLFAWyFWvq8unGWwEkhrG13uTGpXww",
  "key23": "4xtjBEKrpqxvuARk82FXsZX1mm1ZD5TQWNqmqbewZUzgPAi9EE7TKbrZEUFXarcTLtwqP5Jkdv6odUM2Yrw56CAb",
  "key24": "ST1smiDj3zBMCNtpuih9wxqSfAYMZZ2kx6vFzXUEbC6bjFEXXGPEJxS2bJMXyz5EpgxcLhULP9iyJD1KVofvsc4",
  "key25": "36sRhBpyKWPsUWwytD3csikWzVPCXDuTV2zaoj5ahduxWD5p9RRei2c6nQ2g4oNzgo58BcoEUreFtPhVWrbmcv1j",
  "key26": "4zu86ee1Nr7eEA1KLPrEWh94ccvuhnxn7t9yaBhe16LvWESk7R3judUJWEsviNoytWFExzp9awky4TyZczVNSH7p",
  "key27": "4Gnzf9M1fMFMYtTLdY3WphfNV1nK3F822YDwXR6m3SwzuVNRFDzGztxewb3UUjE3tD9NCW1ZGdVLKBhV8wGDuXZ5",
  "key28": "5HFdfGW7fDPgKKbYjKSKkrJhm7WJsyyB1JhFJidU3vn1aSzpyugDfK3BeLNXhD9wUjx36PLkdBRDgsXriweNkvLj",
  "key29": "4EWoqBnGRu5Apzgr2mtuoqPmLw4mSbAwgMjhUGRRNWFpbZUKpv47CxV2V49yRAGovWnsMZsTR2erU9f1XucRkGiY",
  "key30": "3VPdN51ubDKiP5EALtBbwFxcdtK9XhaoKA6YtzpDwYnoKmmAUTPv7emT9Xy7o71EQ586cHf7e62ohUvyABAaZUHK",
  "key31": "2bwpwwF67KfEH2twP4WY6Troa5eYdaE7Xq36Gs22SEws5d8ZUwK7DqeWAbVoErVoNoqEyZxwLNd8WXfG2AKWPZTY",
  "key32": "3fduRvAnrwsvkUCF6P7oHdrNbQjMhpYMRh9cPiBNQ8P8M265GPHeQonKW6XeqUsnqGEToRad4YJtGzM7XFnvfhfZ",
  "key33": "647zyn82gxU6JDF2nDe3GrugketNsf1Kb5C6wWQQS2JmChr5hMs6jheHp5PcGjMNa8UToDFAFD79QqTrKmBfDddn",
  "key34": "TCtrzdUKjrWPSGoFSTvmU2poK5iHWMHB9obuEqnWizmQKvzETeY5vVmqmSUtwqF5Ea93AHsut7C9Pyb8JFKgX4r",
  "key35": "4YB16x5GRsrCnaQMfw3SQAqaLiEAbnmTba78n5vghMSbhNEDzjY5e1iM2gkvgYz3casT6GfBuZzEWQqhV7dVG1aE",
  "key36": "2QRJ9xCwDVr3PQ1zQkK1Cnu5iZ3iLD8GHx4Vpx85R7nRfZUzKZJJDP738dkcjXa2nVQp8QxnmQ376Ni2HbcXXLNR",
  "key37": "2NzUGJCvakMgRgkVR6pFPCLRBxb7fNXud9Mu97Tou7eJ77yX2X4ALftgzW8uEiEjUfCJqBeKB4MYRLQHGrT8N5dZ",
  "key38": "4S33Ziofkx2nNwKrX7taM8qWSLu2yp6o7vBjwmvBncKYhk2Eh3ErvNXmnxXmjaefCiFUZsxt8mWwzmTVvTx6PwPQ"
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

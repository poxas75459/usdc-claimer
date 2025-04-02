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
    "5x3xjGqsXcp5467kM4P2iB2aMdxj9K3r56a3F1e3fp5ojWJhRYTQrsVzyirdo6C5c4yk1XtCjvZizozs9aTsE9JV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UzapHquMM2AD7urNLNm9XZTgByqmEnrfzTEPNXDYu8XXhv5ZDK8bktYzsnjPGAkPTkUc45mGc9dpBocUs7aPro5",
  "key1": "3ht3LjkorPS7Ki1WiYRoUEkDS16QrQRHKVFCjiur3Cdy9ukeEQuDgDGYKVkRvHG9aVX1R75GeL7xkoJwhCJ59tyX",
  "key2": "kFe6gr5s6ZufSUc3ZpBy9zJ2JVHkTo6SgxRUtZcy4TbxsxGHJE1q44m6BWs2ug5ooj6vApKs3n3wRgQNfPHmvvK",
  "key3": "44SBcB4X4s8jQajbUYjwRgveKKNen4R3jZcMfq8dv74aKWL3mzdNAtdfnMRoB6YZve9FC7xn21kousgHUAgzXSmW",
  "key4": "ubv3MY6ctZTVMCDQ5JjsyyWTwyvH1D1Pa3MtSZS9qPAt9ojfGBJRZCJ28XnT2f2r1wErEp4G3oSZYZTpAtZSvzg",
  "key5": "5jHRAdzww77BQBfD9q16qNTMhQnZCeq3CuQ5J1s8U9zxGWtjNYMTdZ8knyyoqG9gNQkByok4Cj79N27nhdrZMUjj",
  "key6": "2uwmicbyCVbRgupTchzA4ZKUZHLHEJHRGDohNo7KyDLow1HfigJzjVoRGh99uCuNhdP3PudfHuAoqkgHY2FAe3Rw",
  "key7": "3eDfQB7cLJvTQpqZdU8FMKHfigK4n6ezvjoQgivbkv6krGuRCXNtb3TURiChvFKdH7WtSpP5k7CuAK1hQhGZpdKC",
  "key8": "5DFRmZnD5o52jMbBW9umW6ssiQmJVLXFx4poHNaxLhLULgKn9oKAWkxTZc5orAdjBHU7aGQtHqbtf7i4TaWCQzmN",
  "key9": "2vSgwf3P4FPuP9z9KdB3mDbbwZdRvBcgZq1WLU8DCcUXvghBYQeKNUJXeGYECQMshi1CfviWcQpcJTdL6koJr5BC",
  "key10": "4e8h6seb3NpGcqgNYnhdzAX2982b3dgM3TKthftPaKK6tU9iXnyRGVrkJzYkRukKfJRyRJNhKFuCG29sNynttvHC",
  "key11": "z4XrcDfEUtGCMsS1AKD31yc7KDKcoZp65W2Uo8nUp9eVHCwuF2qWTLd5BW32oPEkb8XDBG8Z5MRSEpt4VRhwvwR",
  "key12": "38SEEW9fuAg2TeQAWrKgRdfoEAb2t9PWRbTZchyLxQdEL37CjnCUCcAMoTSYv2Fghc3frrd5La151P4okNQsHSZi",
  "key13": "xr8uGfZc8QCkvxcHBwupjvjL8TjzkmBWNCHxzjwkzGKMZqPCanExzZnMe1n9HqxaPNaByARgc3SJRsr2JcriYhk",
  "key14": "2xJ5XyRHPgVgqDn6g54U1Zfe5BUiXgx3b1B6mWKwX1PPNPYLbPYUUpphkCTmZfG6BdYvPvQmwFJ2rC41khtwqCR5",
  "key15": "HhBQugjLxTcwTqg4cxMfFNMkS2tFZ4xP5gZtZBsQCGRZdRCAV4RHUFhGAk7ow7x1jJL6AJnTGWaHfNdXcJiXiF6",
  "key16": "4CT2jbroodX2tmX4oJmv3jagU55gbPeFbJR8FcthELqLXdJmAqKBng5wMot8Wx9BYEyqGtaFATYxi55G91ejw8DA",
  "key17": "51Y9ztjzbPTPLHx56wNm9gUTYUvhmZj2YUD2963FJ7tbSp4nXHynubaCUy9xqUkuixNRbAokHQi6Sh5MwohidG6p",
  "key18": "5eVQTm8V4Vjd8YhrwiMMvwj5xRDDsimrnGbWwwsi9LUq66ymPGaFk1NjaBknb9sjZZZEcwqi83t6eWxCVWJVJRXw",
  "key19": "5c4jV5eyZpE2QPFusen4oEcRXHWHB2Rs4AQxhiu1KaN6x5dVEin2bVA37g46Bz4u7cDCBfV231CadwXxWy2xNRdp",
  "key20": "67UmibgPHhbrHztKpaRasJoww3wMDrkqUZXdDCCf5VJjWsX6ZRbjQtispL7ZTWtSbw75Ad7EvTNno1mmkS3ZhwW",
  "key21": "29qTVkKc5wTvoC8JjdzTvAAmz1B4fZwXvmkr1zCkMtHb98L1owvqHu1CAYwyf2YdMKS9UzRpCjtzvmv3CRRXef98",
  "key22": "4cDmg85wpmqbZ9nrycvdQvefqJVG8xZXACdv4fmDaCuQ19xcwe5JxKCRbYQWDpzss5EquDZyoesp91qgzwBBmU8",
  "key23": "QrPSczcmyeyHocwP5z5ATRR9UtbvX7eXwcfbGKP6JXWgUBDhnjuGrBvCp8F1pXU39FcYfjaXz5Ex4aj3nFXQzo4",
  "key24": "5Wx1KH9EWSBmP4w6Dmg3cp8nNnak8Jg9rRWd5fhJJNAejdMEasSfJELS6dDT5zGuQs7k8Xtugeq9CMNx3gRbtRme",
  "key25": "536WZUbQSGw67YEN9A4L4hkGG2dn96jWmMfYvxygAPRVv9oecR2GP1c3B399NvuQydismvDhkzA9pnnL5ThxMtqV",
  "key26": "mDQvx9UybwjiCS6PK35AdThsWfDC6S9wSLNbK7SpHfsGsu57CMd5Uu2pQ3QakAknCc42ghyLgtssaQ11wP6Ct7A",
  "key27": "3i2DNZKVcBF2PQQ3k2mHamVJGwJsK8n8CXKwN1A5iUJBSnGBALVuPkd5JUxPi3qdQ1HxSxCUf89VZtPxGijM5CSA",
  "key28": "A8pepa3uNpDKgcFpTECqH3hmEiygcZcvjoaer84DBSPUMNZYcyK4nFSCfqP3i83irK85NBAuxzxnZSecUTdBjfd",
  "key29": "fLUeQqyRSQzLvGb1whDy3F6NGDd5JV5LsZJwrSYy2GUi4ZN4rG6e2UnD6QuhchsgZwj97DQ1JC6top3SffWY2H6",
  "key30": "2V2WpDDJC1PQN8ypT1WhKLn9BkQWbuk5kEqBPydnmV8SvZ2kgzyr8zoxFCgW6V8MSa5YgrbiarjN9LSCaeJ9cxv1",
  "key31": "35tAQHBsBmYtFRGk57srqbXdZd4MbXRdU9vnzip2CuAchiyCpsf3MFCbrq68kFWw5NdhtaZ6M9aBS94SKHLKzo9p"
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

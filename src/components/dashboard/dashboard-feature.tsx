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
    "4kwxGKTUxHuG31uEM6iNEyk4mfnMYaJHsARjF1PPm2qHFgvNEE9e249ENtReKFreNttp85T6t1a5N8PmBgpyGznc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yum4MsdiTD7Z5g7uUtrKncYJ48wbKGUPkZcjFNKKHGpiWTk8LbUeusC6UjjfYbhxS54DjCzyz4jTTkZTJQyQiL9",
  "key1": "4EBAxnEz98hntkGPHRFPw558p8VrsxtMEPgGPE3APyt3vwZmesSdRUHVeX77kJ8HGLBkedFq7b6HcATu3Rkknbm3",
  "key2": "4tDreUWGvXFNWz7qaqWijvhxWvhY2gd3J3tG7nHD5j53c4tiHhAu29hA9UT1XvnbS9F3iNooUfm39DDzQhqrGVKN",
  "key3": "3xKd3uMjrE4uiKpQfEgMTyBLjEqDp63cPoQ63Gs3bSMeFiQjadFdWWsxxBGV1yG5erdhUumqhemtCaBDqC379yYW",
  "key4": "4bCJaPuzcvfTJ9ZmpSFuh2LE11f3TX3os7AmFufZf9DzUB6T6i2mBVTKtGJCVT2pFAPAtmogLdiv8Cyx9hW1chqz",
  "key5": "2Fr9x56zTpveJeWv1eQa99SNYmoC4caJxxRXbJdJr14xsSvACphvuobYKzY8CX7nLZhXGgBP4xoXJmQQpwQHyi9i",
  "key6": "3H96jFwWmKRP8RLnen2EEnq5SLK8iRkQ9BvU3xYqShsege2hs6TRgEDMeZgRGkJreticTrCesnCuTt9cA4mqaS22",
  "key7": "Wk3UQmDsXBDdibthdptqf8VuaR7Usa4TbKgm2TLAcepRJKee92b3dsD9KA3DQSq7uoJG93Mat9i7L2xat938ViM",
  "key8": "2gwtFGu9wnUghdzFF5shmECkywfSu9QCBZGZkFL227a9gxoPnWco9zBSHxQyitrzHAR1Dc5w9dVLz5o8eB3tbzS1",
  "key9": "2RNBxf3V7w4gbuiER7bWSk3Ed6w7UfMBrz4S6QA9MhNQPPg9cV3SXoJ1Cc1zkeHy98Dmp3adggb4LbUrpStNVpzF",
  "key10": "5zMckKvonewbJGNve3Fqc9FMtcpyTGNp1wyJPkgTHC9WPHiCWJmEeDVAjLdWiPe5vCs1Hn9TDVRDVEUwM2Q1qspc",
  "key11": "LCa8hAZNKG3BEE8batzX3KV4dP713ztUibwAFFG8M55rZ3SuPujF4U9nP9smFZs2yYkJRqA77UdAfRvsDKxy5b7",
  "key12": "6Xc8zRmzcWuUZW7Rfq7UNtuaZq7aVkZX7UXRuB7owLBMdYatMxet6Dqvz3EmdkZGVDjtervuzERuAdjVFppqpbE",
  "key13": "3NqGWcLJkUdwPcyaFgZHjX3uve9HRVeiTkjsfKTZU3VAy2GDWBCTczBJtHfmXsNt3Z18ADiKm8h1NkaH529Ffh34",
  "key14": "4XKyEVHr3uC5y57JzoiZCDFuD18YGvWXhioekraCbS6baAVi9u9R4fg6NrP2CWBvqoBhT8c9kjHgwJ6XPLQYU8Hc",
  "key15": "3bfYQKbzDABYqzoFKfdUrtYUqBCWo9c2JTZuf46dntU5BhJ1CXefvYp12jpoy6uv6xxLmVLU286V4gfUzhE314yE",
  "key16": "5HjV9DjU55YeoDFqTQhsGcuef4ogD3nQQGjAJX2uixKkggAXk49HuHFpbiEFwMZeTDwWCpoTiaYU6SsUGVjpTbPM",
  "key17": "3zGBYwKCyNrra3RPiHU9sFoYvxTWaS4gTARnYJf4pS2jnu3UVDp5vYiZMjMLGGJYPVcEK5d9bXYwphxTUq2R1szY",
  "key18": "MXQb4Bg5eTKbyjmbQgobPh8HmQBKG411nPwHw2b45WyMq78JMEgsf6VLbbgtexFYhwHPUh6owiNgPjaXAtp6Xbw",
  "key19": "5dJPDgWWyhu7iyvLMYpunvH6GM3fCxCoH6ca4A1Zkbgid5km3Q7zpPU3gRMvnEkTjTUgVQYMwyhKenZNnTATWZR4",
  "key20": "3gvPuD11wzmGpQSzpWNav8nQyZJqC4nnydaRsn1AmeQ43YUCfqajbAB7fnsTKNTdRFxhk7Uet7U5KZVJ2iQYvrp7",
  "key21": "gyRS7w76zC9GKyTRhZSPsrrcr9vy2wDuZnivcA2BRiB4Gca7tBQsYT4aurBpxMjw2v2yywDM6SiSxq3FtJTrr16",
  "key22": "5zzC5YcEJPJ4LYuHm2EA6BwZW8ikK6zQviDQmyK4RmRSZ6VQmvU2DNWgsr9PvuVQ2KcvRiV4YysXQ7U3tPnkQBHT",
  "key23": "2WeGLDP5D75SaHxPYtzsiGQcu4rc7T9rQsB5gUjac5Fg6fEuxeVqEHJjVGEo9nvyy1QVZKvFsKNhDSewkRkbMLGi",
  "key24": "QSp4xqb93GDRxxaKtXKH7u3kSWQtHkb8sTudNoyxdtmhm7n1xxD2HBkh7ct9q75NQ88xpdwGfMn3aRQSwDY8X49",
  "key25": "4aKuj5Fgr1mFMqLQtC7Ryu1ZkXqoZirxwRvqQwCkG184r5y9T9w8Z7U8AkcPyziucjhc356CWh75KVEpJWQu8XHw"
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

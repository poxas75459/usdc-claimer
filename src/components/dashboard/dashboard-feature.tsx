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
    "51TGWTZujfgskYM2qTipeNkdQp4Y8q73unv8ZfLkA5xmENsjiufov4YMyix9ktZAtEc4k4i6ucg4vCezksiTQR2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omzyaovxPrUVGrmSiGx9mcJSTTbjAz8SSk9peQuoYhywJm76qXMtGafkpEXYT3uvGtUUdedKynpkup4W34ut2GV",
  "key1": "5259gno4pgZrNtJh42cSDsDVW94CiXwxXJSmyR2YdyLtD9fANMFmHQESH3j7fm9ZY3zdLzzKWLSJP6c55PqTU8ft",
  "key2": "4SNDPgZHXQcZEJdWwMbLLnNezUxMwYKAPhc4ow7pjTqXTTnVeFNQd6x1sXPEPdeV26TU2XeEFvF3gtYTYcsUgUNn",
  "key3": "33beDeV8pQEYNjTAW7Ny5mNMXai46SZgbD6E6fF2sEcodcMMtZ2tsWMMVvgFzrnKwUuF7gujZSCd6PGVx7eiTd3H",
  "key4": "4FbKByn44M5c5wD3BN1xBzbYrYkxaHEyNraeBzhDmoWefUaeADUYao39Ab9aXa5kGXw8S4RQjXNhjtGA4owsHAwx",
  "key5": "2EfCEV3eDBptVWaVYDPyTuje6Ct6BFCcVDuxeiheYjA6yZmVRSYdirbgPDoB46bG7ynG7hK36dSoHdqZUxoy1BT2",
  "key6": "5Nyri3J8Jk9HbwVSTadiMhoe8Mgcc1ScBUCaf6fib4su1nrY3vQYfHQXeCKuNjj5AEqDDC3GFRhNK1nzQCCxuvGs",
  "key7": "2rZo8yduXXKqjZ3hS1wjrG7K8uohiojjDk9e2S8u4ieHpmiBPxtXhKVpbZt9kagVxAXbhNZWS2pH6ifChAyqHTHE",
  "key8": "3D3AvKLsNghmdSuBs8rpQEUzJMKS2EF97UbSFW8xVuENYVJ8J43C2GdzdRQ8Qr61vCfdGNrkCcyoZmqjWDHMboE",
  "key9": "2ovwRmbQ6cQLjqDkXQRc3wbX2S1Amxdkc2wL9haxARFdvDkhdkE2u8rLioA4MoPPGESFCPMFnvi6BrKYsUFnhGnM",
  "key10": "f5DVvjKJVtLfNjrL5L2cemYcdU3pAnHyDbEXuGJ5gXtvuQvCUSjqQs1FYkersQhEUJsKnuXDAMWQLwdqDy6XiUn",
  "key11": "4T3S5v8vFzomoFQ1sNNnFRc26aj6nH4PhYBcYLTiLSdymridLQ5EFssW2dyXYWWui6J9FPbS92E7tWhPVxCNajYy",
  "key12": "3pPQme2V8T2DWWo1trpLB78XpNwWBquWqXAvys72q3u8mWK6anx4HjBVHRoKZ5XPL68NTyAh5qSTDcag5YC8LD6H",
  "key13": "53noGusn7yo4iGWpeaz2Kx6TqRdWT7YAPczFYa8dauYWCF8bYCAYtWn8qo8YeyaGkG5NPpJ2nEi6F8i8aNcaqmr3",
  "key14": "5hBz2ELg63Vuci7RXNi9gQFumuen5qyVE3qJkjNRN3F2WJriDQ1pVdr1qzUqnCPAFMieFNrYpFj9EcYbx83VEqaM",
  "key15": "2XjMguLcCGwRLduPkdRe2SccE58v9mLPZKqcjEyfr899Qad3JLB8MF6MjNxQ2vHktYVz17T9djTAJRAMDGv4Zec9",
  "key16": "A7W4ybFXK8eUGaBwfXBTRBf3QWRqvFT6P2VstMCPAZzXk7BaWQTsL4Meznm4d3q8JkdWy8YyEU58kCehtbjWd5T",
  "key17": "3Jym6PjvZQbBbSPnzHyzYoehFSt3tEZfrjjzEaCShyKDryaNg18BnT42XVT6rMHdRuy1q98DmMzonAqx1oxmPWwF",
  "key18": "415WWNf6DMLxQNATtKdUeXtSzZijW7RNiqSxzDugS77zCPfR3vXJyfA7UQ9Dg3dF33Ph4wkNed54HDJEy6VQdHag",
  "key19": "4EnFmeMJzUVVWm1jYkcAjUwF7P8tcKBrTPArZYnZRksYASJdTj3DSuwD8Xf2DJqzVaSbnPQwxsZ6KhqZWqGEnEeJ",
  "key20": "mPDLHhtLnK3RrcPqjMN4BsQZg6oycnvMvTRQMucrQ3gxgvcQcs2STa9mHuAXdVATQEXggKN38vuFd1ZFBS5qe3m",
  "key21": "5EyoC11CfJnNnk4ofd3xmB9UNrmYwHLdVdX6HdyGUxihrJz2keD5Bt5Jacgq5bR33Xax8VJ1vrgVp6zAUBjMeXpp",
  "key22": "EHTBB1DNZ9FhqpX7jjE295Nr8YxatA17WJr8yj3dqoGzDE4nKkyVT8wGYrXLt8PHXH3QCxm3pAv1dkRrG7f9DGK",
  "key23": "5kQAdVeDESUMriDRFtWs8Hro7PX8R6LSnzpuDGSuqxZUdwYD2krv2U8uq4Mecwn1GPYtbuTMYMQexpQedYM6MDjC",
  "key24": "2WYZ67XwJMSWKE5vBvd1Ezms2KKA5yHtQx5Snz6NQPjbHn8ALEZyZu7BiLgtoSeZxoudeArmCqJm8QawujxxanHD",
  "key25": "2XHSQ8oy5idrzMygb1WiB3ysBc8iz7wN66ZyUtkmUwmm7afYPzBzi7dX58d1MqkeyaT51zrdgoPB6cb1VabZ8JGW",
  "key26": "46G1zksdFPaMm9dqxPt7LH7JfCCR2NMbB3vheD9M5bsGUvebf2zrWt5a2NYBokpwwEx3uxeCP4EFoRxXLZWED3ik",
  "key27": "4dH95G5m1CfgPNbgfaiiUnv2m4qUHQSoEksFFiPTyRcXDx5MSmtZBfLrkzN8ubbswCdWocUufdNqxinPHisof6mN",
  "key28": "5C5dZJofUtanxnZmVHTpcPFyHNA7VcSvQhh4J5hLwRxeTT2qZYVBw31pampM2sXDFZ7jgPsMfTaw6hdFdhbKMDa8",
  "key29": "4sKzQKPANU7N8CaJtpyceYhjzZgL78DvatXDGNz457EhsmRWsM1Lwn5qm7npw6x9JNMrnWfF7DDzt2QYKRikCEJH",
  "key30": "4LyyTKx2iMcoVhGHWDJR8n7MC3F9t23Ak7qTQeyL7thpix8qAdRnedqvdfyKVKc4r94KWkZPx7GYtjxcYuCJNTai",
  "key31": "4bc7cHVqUGNUHGqxRrumNxj9KXZfnm4tEQKuMXkyCSNkacdFVXBN5PdaRCAhHLdAXFr4Jkzhz3aGLEw6NXtXo9Br",
  "key32": "45H7URHtUnjPeLn5eSXqsEdEMS1YecHoVpmKTep7JhNsZTGBqWDjSQjVBaBQQTuNPbofNK7yNns93AZhk9K8aP9e",
  "key33": "33zZu2pSjsrmj4NpKzEgkCsC1ndp3PakCGRaMANtzdtspdHJGw3L3XPecwNqqycsfvnGZyLatT9dhmDwHnMtf21H",
  "key34": "LAcCwprivFARjJgyj8qe6zj2RWuMkXECxVyjN1Kar13VDLy2f69dovGP5Jfv5VkgxaLGsWCUKSMLyGqJgfsNDnE",
  "key35": "5JuKJYghoyeSUEa4kj9hpp2LBTmya23PEBEM9m1dttoPdBgKG5EeVHF5tVd2yJUHWCPF8AKMRQZiDymMzuoixM4t",
  "key36": "2gKTME5VahpSfwrnrH6ANnWHUdZtNDiCmhJCAgQmLLoX5oqsxA25q1PhmNTHrBmgJsqPqgBp1iYru8D9LzmAyK9K",
  "key37": "3KZWPMapMDqsd5UVCK57WVCUTyTjBgjiy43g42mf4QS1To6fA8v5vPqTEViao1uEH5GL58V91f1Qq6nkPEsj26U8",
  "key38": "5fJn4U7NQyWjkNnd57P6DMJcQrdqStrN7FM2vAxbpgtGxhdkgghoHVhkTtM6oXih3ex6jtQqoaHEzjQCm6EZYRaZ",
  "key39": "nYxxPq1GzTkAK6eGNUynFZ7Hjck5conpBb3ehXz2BDKdcqJwQEcETQ7QZyit7w3aNULhGQeF25pxCjt7pT4V8mV"
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

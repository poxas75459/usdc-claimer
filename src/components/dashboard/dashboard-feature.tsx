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
    "4djhCyDrxqRzuGhMs7vwB7ismJ6dULtXmPfR19RUh7JqtEGDxRPL9tNHu43aKeAuRWYRjWyKGLhfkdDhMvGL8iox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3W1dBKNdwAkju1qafm1ew5JbmcSkE5eDp4AtpQPxhE7TJSXyzkJ7ougg2UDf535y4J24QPSyqpBus7of8RuzKd",
  "key1": "3VarbnWNQZDcLHJYzGWnvoYLdaDYWhT3ynqRwDjdZZ6aRzkVnphszFU16spzugUL9395QweqXTzwQzjLvNPxRKW5",
  "key2": "5nMGGMn5gFsBPsQLrXUiTUWxR54Bd3dvzeJbAZn5Q4CNjxp4NH4ZXgXKYmyKowL4r4LQJ9eRrbZfW4g4hw6zARgu",
  "key3": "66Y6KZHff9aY6i5LjXpLrndbwnBc2vLqazc2xUmM7Bm3mHvNnj3tnVCbCrRAq12pC6WYXgeFUquFnSt2d8TzS3QM",
  "key4": "4wk1Jf4LB9sWAvCoNfyc5HD7wPVAVhQub8w44i1oyJveBK7uGZw5wAxK8u1AAVtjVSC8m3LC7Zs84FMSbq4KrUKX",
  "key5": "Ems7xVBP7J5DAG2YsiqNLds78MLrxKEkE1r7domSWpEXoYdFuBHcAaDd5YBeWFTJzSRntrLYSWtnASmsioMu9dK",
  "key6": "2VbXTDqehpyo1XaqanPzjLkJnd2Z8Q4pvEN2sriNLzxuduL7Hnm89jvtVsczoJdNvkzKbwqSfZNmgGqqgmdXGqNr",
  "key7": "mEfU2XUdqh6VgUetsuhWvirFGunQZLLXNZQMeDyxkt5wnbd1iBP547FCRVZNW97uV9jhGyfffQaJ4VKW514qwYS",
  "key8": "TKJjXSkpNkj9fAAGrPNME1vXoYvt5WoMa5vMNrBGrYkwjbgMojS1qQ8rNjJcwnzDWb7PrnwteFbKZersJGFGfhA",
  "key9": "zXsxcntmbhfEehs6oVFxRq4XXJJuMFB68fTVLRbDWgRrSi2H7ZdB4MR9VEQeYzwFqRs1BMENW24jZWtufEkkqeX",
  "key10": "4wjGBhfvKU9gre4aV797zwrczMA7KFr55r8UV8CS33FihYdPHPMjrxv2WGk8gcEu6NATCdhBbRtyMEuZ8bm7MCNB",
  "key11": "29X5SNrdfPf9hNgNJkWYjWbYZeYcYExcwdi8xiBekL2dAomec3FPPZVxcbASKpqhBtRjeh6PSG57GkbsF7prkBe4",
  "key12": "5nHYZ6LzTnK2un6eg1t1f9yXbttV6yrk58AdHZxu6DmBq7EvHjoe1LfhxqEL8eEGvWeSE8ZuWqdq8CQdrDb3tSsZ",
  "key13": "4LgUhiUFtqYRcEMbmPL9PYSDnpWx5hF97hrK7sF9r8KcT4ExVv65SM7M9SNN9CAkQ615JLfUEXaveFgyjGZdnGnC",
  "key14": "3Ts32oTiJAg3ndME13Mfevkgm57ngiqT9xwszvY7tCEipYH9muGUTJhZRRnGgY9CebLvSG4BpNCoU9fXZnRWqQ66",
  "key15": "3wW56hwhP7YAeCRHjCA6aFWjBx6cU9vJG2ZBs1LwLcxdqMUGN88j1z7xjf6mWQ4RkZ57pCiNTUAenThSPCYWwKRx",
  "key16": "dSXZk4BhLfmaeXWmKuxSPNpFsJK95DaBjbGZqpdSoA4f2YaoLFAq1N96gCY4p1bj7fMXjuDuH3HzPqBH1YAs1Ae",
  "key17": "pdbecbzqSMPpocZPdYBv29DaVuKuYjexcbF8Ext4iw1QiQrWsqBfa9ecEsSVPtxriLxFUzty36eHWZXoDRoGjYR",
  "key18": "3YhSd7KUmdCdCnfGP8CYUSuqJPUE4qY6XRfEYYHS7tPQowQ5s84V9x6S5knQBWApkeKtatBGVJmmUZKfYCc3avpc",
  "key19": "wdktSRy5gvgNS4QkVBoRis4P232RMP58z1t8ArsG2LDWHckuhJBRRBqdcRR6L1DnDRJFVW3xYJcDcURa5NqUnYT",
  "key20": "5q5NJBn4RnSz2Rnj9c17f1VFsBDzFLeW3V4Z5sbgBrNacae9gK5uYKj4PHSycjPv6TWYA9mv3NcVefpsJEYTJMR1",
  "key21": "5p8X8JWXVsTEjbQRbiFz2xX7zWBSmXZM6zFQz8hBNEnYQ6LFcY18Dfmsy9Duy7E7vMcu1DR7wHvtcF4moUfCoA1d",
  "key22": "5PR19XfHf7G1UknFDhrP1Z31ExkbQPH59V5WkHjLK2id6VRPs95j3Xnrf54cUk2pZFHbUWpwbjQJouUrEJ8osRBS",
  "key23": "w7naXLkdXaEdWsPxH1fkZsnJVeZZMS7pwtbhgNGSX5DWukNCUDUMzM9t1y27KLPfsxj6YMQKJniavxZWeySyD8h",
  "key24": "kDsVqacr487YDVsmSG6NSFSNmzMy1Wv2aSnxSwRE8ckjhu6HqHgitghSE21FHY4aGEyNSanXNEwrJtEpne1AmFH",
  "key25": "H535Eyq7roMAEsLHZciceLpo9kWDyx7wy1hJpvvt8PVRt8vvKbQwRHKFaQPuCjF1XutG9gxof4tMywWfvY23V6r",
  "key26": "4raJSEFKn3ca2T9vaTXn4spHniVoVrpfpQ2vykd2eMcA8K37pPwjfkdute3BYBUurMz6fJbGM8Mu7Ed9G8rwwhh2",
  "key27": "3HsiSZ5F3GivMwHgYLH7mpCsGAiKTD3uuvx5MSw8mv1G9BiuWSXixPb9E8mz9zNEGeCanPMW3gdnWTcfKc4skTpS",
  "key28": "YLer7aWLQ3ZXHjbc8wtztRfQEG35Hh4qMeFcj8V3QrrKw3RRTwTRyHDAJTJsXA2XXRuFqYRy4WCTjeoJM1SPoiY",
  "key29": "4sP2a2G6HVWPwtrUPntiGbNdQPioAL2gPCPumoFrhgFHdXvxTKvodZM8aRU7paWqK2ajhGTuv3qpLaPrzthgoiep",
  "key30": "5LsSEa76BZfgnFqsGjwhKagcPoLCjApeGihoegb5LGg7UyuAECkSLCifsZc8sdQvA5MJgtGJUQpGyqRcYFnSK8c4"
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

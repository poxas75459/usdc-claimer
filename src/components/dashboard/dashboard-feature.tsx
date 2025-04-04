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
    "3kms2VtitYPCptLVbC96ZmJSqBARjWrNjRGXkuujzLcb9zaZzRZBdzyARK1Rf43QVTZGoBmRCU83CvcKpk3taXS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wAq6EpvkdmqPyTmt5LsEQijjoYUR6xYC9m1yogKCuk1akP4Q1niJbvVQ9qXtf8wfemXt1v1XpqT6MVsH1W2kJgH",
  "key1": "2K3q8a9puGfibndVh73oCLjHq8NwfncS2FzwpEMyKDBdHNeBmzbw1QgzuEftfDFdj5vDEwGwsLHftHu4EakSR1qw",
  "key2": "HE1cwW5Wi961URX3FmspQhJY5fferkgRW7fpBwqwzEEUohffPbg44daNTDW3mTmfZ1yDg4wHENm7zvrV8N5CKTr",
  "key3": "5VJvjDzmCGNGoqWx1SRmciq9vMsxNuGzVRMSHeLvaVYrC8xKLieLFGwMW8iadZF7zPnmdPVzScE6hxrAxACUEr8U",
  "key4": "35SKTPWVzfS5EYEFZ7ZX1HbAhpAHDgQe2q67WvD3teiXMLBeyfHCrBV4ExiyQY42HoSH9FLfRaHkbeG7rvJyorFB",
  "key5": "4EUNktT6MZhXmLv11RnonYVC2Gfs485c5NBe8pVtsFSEYyvVZf4xvG6fDTNGP4PLtViCVfTMW9CxyvXnhS3fbawW",
  "key6": "3zW6suS11mbVhENP25h2R5uTbQ7rCNHfpvwWQuU8AyxhRxGtywRYSfJiiMKTzR4nBZinEaXhxEXZfXsqwQ8qfZhw",
  "key7": "4r41NrDAAuPc9y5uwqRwtyforPCEszDpVfdjJ5DLzjfNdjAZLAYN9EdzRU4t42jBp7f5pPSVHNaAXjH94dEJ7vZi",
  "key8": "3WFQfbB2JznDDDKjJkAK9sQEqPxMN6stNoodf7Zaske99PbiUu2o2t8gTmPdqLBzYxmdfPHUia7uvbSubj9ZsBi7",
  "key9": "3FCMd287yVtYCff7sBnNQwGVd8Unri3w5mNz6xacQCCpxexg3dR78Tdibe5T9wod8ennMiA9Ui4foXYudGmxFG6P",
  "key10": "WbGCq12utdkknb9h8M8crjqRJ68oLvjRjF4i4xCXTKYQnzsWkq8iucmX9Dam787a8GZuEvV1XyaGPoikcqGBJT8",
  "key11": "4j7Wxzs3P56UZenBwBfiAn58ik79zNooM3vvFGSBpTiSWxepdxHBF6bzV31p5322ZrGTYuLwCFUBpZVJ52n2PcE9",
  "key12": "3UUk15fY4N2Z6qh4Zsr6ZjYFgakjXpaW63i5yusNmXRV6dQZeYKK8hfxta7xwQMUXatHgNbDYnyko9XxGBuykkTV",
  "key13": "2HB6CHaPKNRkgF2hsyQ4hcRh4j95BX7JPMomMWVXkzvmn5JEVA2jgYBD9hMT3155vQTBiRUwsUzSdkbXCyfUJZ9y",
  "key14": "4ma99ws73ba9hzu5KDQN728f9EHFe3EBvZTYpgxhFSbVwc6JGX9yZJYHhZvh3tHbkutArNZKTcmumKP611wjryZv",
  "key15": "4kpUhbauk6A8EmxjwLtccH9g3VDeWxjiaFj6SryaEWtLxD9XyYwBYHV6gwuijUCP9HGQpTCyZwFZZR943GXTue3U",
  "key16": "2uNTcMaea2ZpLkFfenQM67kWnpai3wbMycN87HT3nuqUnKCGjaEUbSjh7LhnG9rrsYZc6bEemNquGMwkARYFcDmB",
  "key17": "34PnVTJ3xPHHEZUXNoXhk4o1kZSzM4QmY8RHrNUVWyS3gNxQKiemshcUZmRhoMQwhNyZSwYgvGPRWWnFDWPT6afj",
  "key18": "2sQ2Qkt1oDZvcW9ZwsmMiiJenbrRycEfKKs5d6pmdVxbJPqToFX1byasbARg1MHRDGjgNREjJ2rKDzTKQoDeD7fX",
  "key19": "4M2VksZejVujrrJSZRaHjjgaNfxPTtmpyai7yLiYiSjNbYpU8Y25AXF4yJtqxi3JJ5JXByw8RPFAhsds7zYFVUB6",
  "key20": "43ef9Aozk2h8VC6V7JvRxD3K3R9G6k1jyxnzCAUJi2Wry9AJG12LcCdXWJ6fUTEF4UpYdUnLF9fuyVZrWT1uuJNd",
  "key21": "fj1WoxjJ5hUcKxP7esLGpciKbSndq1waFq8BhWAyZUFzFrm1gnhnQSNpwxepZWQmHgRwuPudzHj2a7FrsxuYzW5",
  "key22": "3dEvY46MLGsiuMSnjYFXu8DNDPNgoXRzJ95JwkyGZWK8ngDfXhChDKNgfLFH87M3JBi6PYcHcPvp286teUdBGuZV",
  "key23": "Jvi3hLeWUuj4UCstZoT4TwBzC7jztAYK4r2fvTMm38M1D8AsF3qHPTRfmxCFdcdE6sutVpiuJuCGNu7cLVSFSB4",
  "key24": "4hGRxLnUrgoZNuRsRmtoQYPV8tSFNvr7N94hMwZZkoBx6vAZB3Pfc9iVLQFT15NgmEAqgXZbYfXuNTMLUNXqJeyb",
  "key25": "4JvdSnaJ5TEknFZXyoaRWyi6MQ277jK9UVmDZvtCH2TWnV4N6oFAxiwC4LACkUPkkeP9Mw4iuXQY2SPbGZR24JE8",
  "key26": "3xwkNsRVC5EDG7N9Qv3r5NjZCcV1M8evHzgCBVoArKfBuGUv1TGKHMVetMUNL8LJsrz4rXiCeKepfEWKydLACbdp",
  "key27": "395Z89C8DKni15PTRLWnWWafBLR3HNWDa3YMa7QcsPSnnbHJ1Sop9SioJKFVG3dZt8nzKz4PYvVzFtEMkATkSd1z",
  "key28": "wPVeBr6TtayrYK1ASNbRxqqY9J2Unb8KzRH77zEsLDSCYZP8zfy4JX8RC2ZRi1Pzt3qufrB1LB1JCv5xN3EvbCQ",
  "key29": "4GxfZ5uL2s4rooNBQ8BjPDJTFTbJKaHE69zbfcx46QKUviKC89XmCywATEJzPM7WAoYnjpWJggxDJCmY6Z5ZQyPd",
  "key30": "4oMZu2HWMFeomiJfkgsgsof1ZYXyNQiST5fKyukbLMXUv5F8nWhR3aRHLR5KZrJBHFfxgicfZYtMh82pmgASn7kG",
  "key31": "3Ym92kbjUHp2cn8WLtLPY1LwvrtNv8Ui4Wm1TiCiENQDbVqtqJo2kdkeh4pJjSnSDqj89aSiPkqMsyxiwxxyEP9q",
  "key32": "3M2b2A8CRytPRSm882svtzhbSYnZyJz3oUbC3PCJhs5HCatwWRNYDv5dWmChVvAaMgbqk3QJY1UuuLnv5tmkiqEc",
  "key33": "3oC4zhhDk7tUZ5PrWrwTDhzFmUAgbJkobnM8mFtkT8sp6p18h5GfPMU6Vrv1hiCX6ZssjUFvhAVquXcWucKLEvcj",
  "key34": "2Mj7jM99v7vEMwmyDTBsECSMtHh5hnxtoeNhSbWMFLMWRMguFsrH5JUsMUsyeLfBdayiwU7YiJj2nHVevgaXMAzx",
  "key35": "4oXRmB4sinXrTWRmsdmUfXrnx4qDvX3bKo5LFQKGQyQHk1PW4wcSVHVhwvGu2buxSkjSLwHUMw6gZQv4oj2thJ9p",
  "key36": "42dhn8ZVtUTgPvJx2zHtf2U6hneWwFRQMP33GxquUtiSxrMGpi18vtj6K8GKEm2YSE5azqiTTc6eon9yu5pxS4j2",
  "key37": "3vdrQZARJFhZeT3xhJ1DU3ZCdrKTaVa6vtN141NubqCbTuhFaPf8hLPVtjRrdo6SB1GDEvQ4aFjqc6p2ikeMCVWz",
  "key38": "2fFAwwGQUYLYzPEivmW5S6LBw29ZSK98wyB5TgmX5ny8bM4dJBj4Zm9wc3W3UDffjVXtW9GhiwJAg4EweS84AZLL",
  "key39": "q8g4Gs22TCbabcQCnFdnV19UcoBhuwHxNz6woZKaHPqFf4beLYWhr68RWJQewdXYprN1ZVPUD75838AU3npYQWT",
  "key40": "5oBvPyPSjiR9p6aSm7y54R6bsfQ2SaSw9oyutA1qgV5njejDQg427X6n4ytdjSzz85UaZcven8BnTckJbQuqzrm7",
  "key41": "3Uact1qHY7RAeC78ncVBbGH6YgN8msTvypKGAgrFoym1KJKSxTMCrNFVWVxQmMPKVC3fchDTpCEuhMss7ZXJQU5x"
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

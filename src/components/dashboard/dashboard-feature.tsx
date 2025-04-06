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
    "a37VQq4QN1uHLVpKgvWWAiUV1mHdb9ZQNiFQxM3wsqNRtRTnDHnnvgF97NybT8yHu1GuGgQxNNh3MbEdHXsvuwB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WveKdmiY5UK3EcpZ3A7SqfBgDXr9f3u3A2jzQSMDkMBNNRCHbVruJjv6M81DSby3gWaLmSG96jhBfyXug7ri8pu",
  "key1": "2kzc4wXy7xAqRMyiron6ykr8pt31UoPaFr7ZYHkhsbsvJZkSRiScHMvswVRBdwAQ77wz8fN859aYoE5jRyc24M7Q",
  "key2": "Vo1sPcPPrqKBC5esqB72QvoqQhNK2YoU8jMNwktLp6p8wjEdj1ouxWwjTbHSsJa389DHcYt2ToCmqa1hK7YRx61",
  "key3": "2RSEPXY5MXaNMSCTQzWNb2GaWXzpLgavQucuC5JEtt3XC2S1xNCzqGuaJVzMMDRsQUqihjZaxebC3hmcEDM4Ne4o",
  "key4": "3yCcykGEkDY8GddxDdG25Bq7bgj4gi8mxtU7ow1sUc3T2poy3jCRP5xn3gvh5dUgqaetzV1rvcRznxg8F3ScycLr",
  "key5": "4bH3TZQbkeM4X4hgK8gELHofANbwPTDKDxXWodf4FwokAhaJMmsbUcNY9A3YWNbCn4rfrm8FdSb1mdeqU8QHsZCB",
  "key6": "4TBRKYKNq6iLFj2paefqYsErPCmFugphBxTVa3S5EZMHswTgu5pB97fpTSHJtZvZpnMi5MJZtWn1N3vfXJk5MDp9",
  "key7": "4Hsnt2fiVsNRNKagQDtYiRCs1etn1HQn6VAbjC5tfyS8fxQaxXMcthzoSacdteQuPVrt1VRpzxZovRfAiqTWSZfM",
  "key8": "4L72HuCndhRBB7WrnetZ2Udgog1fmkt7DzDBaxkLyCRAYjGCLX6whsRGTD5Q2Gx4JyUcSSzyzzeYBu3jd3byfB1s",
  "key9": "4NNw9aUuKT2Bo5Dwcs4Wxc9FudywT8rGFtnEYkr2nSHwS9E6f1ujZMbteUFBGs7Mri11JXX4Kprh2oaq17webBS2",
  "key10": "3mtcuDrXeeBvvZTggS1PK8T6zLRsV2nGEyVR5RdhmMmpV5pUQB44kX2KkZvHSbtsvrt7mw5K7hmmc8avSBpxgu7X",
  "key11": "4cNhUqCt1pqycBNc47sP1nxbaCaHp44Pn3p91qhNj3mm9N55HsE4UMe6X9rDKZ7LBfQ6T2LkHHH3gAdpNnVU4VRi",
  "key12": "YfZm3izKdnqm3A4cvgWzK5fB4VFoGkWZh9gNUbCbVJkyt97bBJtvhMnDRYAY6wJyNhPgh3p6vx2dgWsA3Aur1fC",
  "key13": "2rLVS79MKSDY9xgJFBQFKVDHJnVC6ve3pRAF37LvuhpABubDE6DqFKfb1bhRa7XDNBPmi7HD8UfxzVeJ5SaEFS7b",
  "key14": "4qMKKCmFHV4nmJXX7tef2wzt91LAMrMepahN3VGfLScM9NWBJ8GVn5X7LfjLnqPXZoDYHixm4ubYzE9JUk9UDSdJ",
  "key15": "4RFAAduZ2MWEvEUGhuvMBYzhsNSE7zFrk8VZfFbov1aBeb3iSupvXocBpKDu48o3vEJKHegfZSuyAfcW9yX6jjiu",
  "key16": "3YjdzrZgmn5QnSUbzD4796TLm4YHVRZHLQnCR8yavrSx3ARTFxYHFpzjNwG27SPtwJtPGgMDzCCLgKUgzMuNFvPb",
  "key17": "5aPizWLh4HrpGgS1gjbwp82mcq1pLk1XD3t4TJNKiSfqgPtpx3E5yCu9aCagpXthS8ia2bAqo5wsHPhw61PGQRyx",
  "key18": "4cs2tuySEzvLdQPjPudaN1BqqVhJxiFN9AJVmysznWDFJ8RBz1t3MRwAyGDV534eQAQFXBsBpFPF2piu7AVKKDgt",
  "key19": "3xc9dLW3jjw1Ra7rowZDnUUs2YNrCQazbCrrHBKXSgWqJzuvWewLRpJ77r7CqWTRUtDXMLFog4J2wzz4BqbzkHe4",
  "key20": "2FVaXqsGBY8Kv13asyKmRXLjCJ2GmM5TFu8qLbHeuywtV5BkjswsVS83x5gTpxeoGy6yHcokTM7Yw5EpPD7XzzPR",
  "key21": "35BMuyyuc2V3cU3qruzavXn79fYPbF2znKmTCjPfuXnfsGaBRyiEDVoEB5eW4zg2KcX2KKpH38X5ydSrmzFuEs6z",
  "key22": "5B9nX2y9sLuc14JGxhSJ7b3oDiodFEMSfN6p4M11gYDcPkJS118NKeNTcfBc7obpYKTpvVUNsokbsjdeWxcYmfmh",
  "key23": "61Vi7NZjsu3ZHo6qkgdMMaxvLtwHjaz9z8nx76t1gQymPR8u5Peczd1bnU4oL92QAC2ezq7htyBEx6fA7MuA5QSg",
  "key24": "2ErAzQQpc5BZmFGjS1Wo3GrtScenWgxiofjcU3sJZ6mwTmW56syxtQgAa2ZRh4Z1hFQVrG6oHAsmu8jzWpJBeNn3",
  "key25": "5xPvJPZTMXiJZCUvm8La3aQtbgcmQnJs1EJKdDDEy3aFgQZjrH6KnjFiVgkTEvdSB2uo4M1hozP7RgsTbPT8VShf",
  "key26": "H7knT9w2FyHNFrq3T4aXmss6QUtpnRVpLYM4NUYd3SzxmK1txNJdoRhuqVjcEp6FC4XCH83p8VSgVSpwuznNKjt",
  "key27": "jhYr6tdfDcqVKwf9utCQgRUmxvgyCU6iMTPvQTjDL4mLnwJaBdaFs9S5UzZTn1nSJiNLnwoPUVUSvQ8bXpjYyDK",
  "key28": "4L3gQp4kgL1eAfiduLxiq2iQ5AcNTdLNhmTMzHZpNZzETkn9PPWhpSGW45hr2bGLhMVR85PDsgU3QeUmX64T7BKj",
  "key29": "45eg7v7V2z3GyVeFhGJgHtzr84kjRyx1bVxbMS1crbYCH2awtJZFoVYstZhw4UBu9ZLVRHUzq5QY6VNmcqVWZdXy",
  "key30": "29B4NYuWBoiuvsVU5EdGq1NL1mx9NcJdKKbGubASsNigQ2Ak3wwzoMK9DGYvxKvySzNcNc1AmBcPZtXC5JQxE93q",
  "key31": "3fa4YvYRPNvuAdKpr7fv7imtrpWvgDm18ChAm1N6RqNGWVCxCQxT7cNoJhQg6pvEu1pi4L7dZdV7K1BCdbMbZ6Yd"
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

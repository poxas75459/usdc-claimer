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
    "2LE67VLy1RAEmkbPHYAMrGn2hE44MgGYggTe9hYgpEN8XTrGDHSmcaGZUwNfkieRxrMrcryMFtH2bSdDzsBCW7o2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5irwRqqZJx6iNymCUxReBE7Mf6m4MgCMhbkHE9582nGCuoffsZxM1PVNmrWfkVSD9EvdtnnbXYCNTENwnNbxRiud",
  "key1": "4QyEnrgxZTT6R2k7rJU9z27hgzgepFngvVZDZ9JjYD5zH87eznPEu3cZT1evnp9zHfg28CjWh45Gavbr1ZQtfpXw",
  "key2": "22zWc9YMLTJrDdyBVSEsYWN4g7G4Dq2aiqsEchxbUrpU3m6HHdrvcLos5mT3zdAZYgQaMFa94dPjCNrPFfo4FxsW",
  "key3": "3pqnohF7RzsM9YoYEbFhjGdks9U91Y5hDt3pZyQeTTfa5R65wwmvSXh6Kz2xDNtpa7LXHiR7CEg33VMiycZ7FH5c",
  "key4": "qMmS84JhpaAc82oB2GWuXuvBWtfJFscqqc47vUxm6S6XRukTxLitYGF276rELsbbTTTMnxD9nhviWTGbAyMgvKL",
  "key5": "4v5iwFjEJNMRxcDf72hEqV9MNWC1mtg5gVpbZXWr7e9CERd5gFV3GpLRhsToa3fezUCt13jkk2d4U4ydzjtw4e6b",
  "key6": "4tCuVtSAE1qtwMBPD1YXRBmJJX5oRHRwQD8nLLRVeAanmp4jdCp39NRByP7heH7W1RkYat91Ce9NWmfCdDWDNZnh",
  "key7": "4Rr7vHujunXfVJ8VpvakaUUXD8RftQxE79ZokfZ76HMK3JbyxxvibT4366abvCAvBhyL5xycF4qmkXSG7zanegZG",
  "key8": "JXXkcTj3mvCEW4LyXfpNb5RG7faJF5gvUW4rXyQKoe3Z25LfBtkt5GEA89ref7kWXJ1JoXXCGSFfBanqGzzNvY7",
  "key9": "23hNKhR7CdEWX8gHaDwKUFU3SciHpCbiYDadsboYgcVRaDRbNYFFSmXzJJPcQBQYUGrYcQtWor6LUv1bebSMt6N8",
  "key10": "BegH8vQxvJTFkXJh3Fxq3Yixn2gjo1kZaCDg5nbzkhj8fGTTxDPWzSvtA2x7tLGoMac98rkgvcKgorqyrEtH6Ne",
  "key11": "4XV4ueRRHQ2tUSVEcK9RQgvPocMDMmu4NZ1xbzsVhqiBjV6fWvGoH9mRyU5YoqLLRJNUTgM47CV9vVJ5HoHhe1gj",
  "key12": "4X7xGrBLxaAHb7pMk1bw8LkWLgNnUj9fL2vJiLWnmkJe8XyCYntFczDWZDMt1F4khYVFLLTQZBm6kDwMY3j2Xqy6",
  "key13": "24wTPCvXup9q99MKCSdtmSkGBE9orb1gjXfGowwwXeZurU98DvWMzXuXP6QPF3rY732bvfjm4Mbty2ZMJHdVLh6s",
  "key14": "5Fip8G5HK4emHZ8r9NHbepb7rV8qpfvVouGMzDTUgbjpqQfS8eruH7JYQXgAymYGLMQkoc1QefXhM76qEbfEEAtw",
  "key15": "4f1d3mMcdX4h42vjMgCggUGtcFRcVXKZaqWqKs4svPmUrfhBJPvYJKLJdAgTbTSsec9oTPkqsA3YB9EeHZbHiYWD",
  "key16": "2fB85vYC4Km4PiMMC44Uvxs9jT1eAfYo9f8eRVEa21zSGxDDgCJvm1DpMqYBVSSYf1TRSdUtYXae9P9nVQiPP3e",
  "key17": "2GUTDtezDWxemeUP8hWQRzjUhj2ERgwgQehUrEXzRRi4KagoDHYvr2f5kGyKKRa8zWPYz6Sz6bUJquQuT7BsjWAN",
  "key18": "5GY8KDcdWNbVso8Cw6Ua9cLRJjBiZdnx9ctrhUfUA5h3jkuuwNxWhxLE8Efn6j8Dz5X5nrvWajaavhjEM5zkkN74",
  "key19": "bKhTpTKnj8r4YHYLaPCLGyBYAZrAkAKDSpSsAe6mDJhocLkEPUgwLS8J42kehKRaW3V71SBHuJWYfHtr8Nvbvqa",
  "key20": "4P3W6y2LXLN334FskxHej5ddcgG7brM2KvVLJ9yQM293A2F1PUGoJviuBXDs75NurrkjtttZMeNJGFkLYt9xSLvx",
  "key21": "z1nR6hkf6wCni1AkR1oGD4RZX3LwtYnPm46dHEZ6jU4py3gdhcrYxfEmFEAGqhtf9jJcU5BSp5sLQA8JTXyBib1",
  "key22": "xLyfsTtA3VPLCyrUUByd7wntKZP6KPjYbdWAS4WwoBK6gg8Ui1NBum9ovwQJ8pQAu1wGiTeBj3ShzjpCprPKVfH",
  "key23": "4Ce7dNXzPS7ZmmthG1MBSzoZCQo9Noup2XyQSU3Fiwy2JdXb6QHTAqmzFXKWJzNWTojKVyBQ1Zj5xM3xtjvcax1U",
  "key24": "3W7JaRVxUZRAwSboTucCSferqYkipTHygBH8mptPcJUW6a6TUwaKaM5f2NyWhxTf3qaeb9NYRvoB9sCQjy9WpdxP",
  "key25": "2sxo1fCtdK4bLs4iosWf1xZCYe5cM6wc8j4Zn6gandQ4kiwoe7xSRimBQx8GvMCocDLSFac4ckytpfpnCapVkPQS",
  "key26": "2JUnWeFQ3yePbtht7zzTamZ9ZdndVMi6KDvkSzGicpznJCLkq2iDN4cFr9xjMNL7C4t4b7WwAMqYSUPvTuaC8TQ5",
  "key27": "4PyNJ4bmvhNRYRPx7qS6YLanH6B2u8wS8vx5nSpRnuT3C6peKmLtfmvgT5CEbChRrL48d1b5d45XtFyxVxPrmnUR",
  "key28": "3jEHqhfgdMT2k8X7bMaPoeYr1xyUGGpuw4xccHSfNdXJnwXNPWxwc1nocmkoN4NwEBhPyZcsN3cq1JxF7ATjrZjH",
  "key29": "5BqhjaZMAhDvyDy8eMym4rVuR1Q8jUiAf2SroMNyc3PTyud28pUFCMZunasTyFqZNuohrnJupnV2y8qCHPJDT7q9",
  "key30": "25ir6XJppaAm5padhgJWtLCVVjtYZHcNzjvAPL9CnFSE54gL6nNbuCiesLGV4WDq1HzsJKP1ySG15gwYXhRdoG5s",
  "key31": "3vU7iGcAumHeh4NH2B85sqG41N97pZyAC3PoMVYytuKJ7Bjg6o6RNJrjuzaRFChZbYKytk3723b5qiFVgE2TGR9m",
  "key32": "3rZm5byrYFAiPrGdyXGFpByn9X5tXj6Ps1xwBisWSShZR4vZ54FkCkRuCAxtPeKWd1io9h4Hr8A5jWCiNyY7g5A4"
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

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
    "4gA9NP4XyVD9pGUQC9UixMAg6eRXGqv9r3zHkDw6sZgcf7q57PvKd1SyJmbPNMJwEQhTkchsVrNYxghD4CjiPUCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b4FDvqpdFf2G1xb8t2EDXQsW5rpR96XoY4hHondCvEh9FGYbAywrF5K4z15hGZncqQvotyHVg8K9trzJ7ctrQxj",
  "key1": "3asA4UwTiWCycUECi4NbnwYQhycRw5bQ9UU9ZWPWjBgggi7o7hFhZXqoqP4php5Frg8xF24A9GKH5HoLwRYvnsre",
  "key2": "o58UjE8yBgMuT7CE4pW25GjtugGTSCkS4nGQNL2U3F4bchkK52uKLZiqcwryvLX2Us7r3fRVwKwYmULcfTu3gnm",
  "key3": "5J1VuWWNzC92g9DaUgWxgA2aAg1HzzB9qYVrstFfzgu2zfHtAYY6ZexscATE3r38EEkfvE88m9PnpqYtmz6nUSR6",
  "key4": "4hKP1u9sWb4eAmm4mQg6NDJXizbtECTDzK6K6TX1eC2SNZw2VioQZBJXYwv2U8qfpZzWtWphucMvoeXmicJTCjDb",
  "key5": "64NtFEbE729XMtidheAsJEkNdxNi7PCKthokLS5yTs5z8NbkwRHPE7cu9Qb3M4VgSyRCeeee2Mbhm14Ru173A84Y",
  "key6": "dgLBVZhBVZbkvwAr1PPUN5aojb32pMWwA8wCvSAsanj9AkYUp29ecGTKN9M9ERDtabNkj1fqHz9FqJwWaHNeZpF",
  "key7": "2M7nkRDwiDkFRHvVrorcZfRiHWjkzNkL8tm8de13YocJxwWzxfwjsE1Sau9cqswodzv8N9po157ok9BrTAuRCXKS",
  "key8": "2E9JTiKxuteiXSpabmhVVJMqLGfUPpJERA4YYPu9T73EEioiV4zmUeRKXbgMbRMXcgJkpDfTS49s7u3qXeksM9t8",
  "key9": "4Pbpi2JmELLAk3PgD7UJHqTP5mY4VPMaZSNBAwNjK97rqCJ5TDCRX2N5A89DKEg1bmeW6fjmc9CSSHC4FYGoC72N",
  "key10": "62QdmHJywrS4TvXvexwGkwnvzdKteFqxCFhfBGeCQonJ232CieiYYzxWAgFcwyKhNHvNPeFi2P66ny9MdrifKVy2",
  "key11": "5mRgUxvBWjAQ2qbxa3gHPpEr9BBMPrMAy7xd4cguUtnAuGvgeCMEQ5iLo5J9tY4mR6nSBxhCwfmcyqMfqqnJpM5e",
  "key12": "QFjY86NqLke169XHat92LwNKAA69zybH3L9mxjFLVVMYyDi4jQgWhPMpoeqAVuzwNxiRUCdGqE9NwiVs9oUMUM4",
  "key13": "4Ni8Bdn5PHvArprezLhZoh9xB9XeyGGmTsHALnQXqQ7qb7jZA8QdNCxHaPo6ik2oe8rnHx6tRUVShitXEiCmE7gF",
  "key14": "3UHwuBArbRKcc4jYM6ieatrsmmE2A8TrwawtxxLTWqfxYMwKQoVXBAnboVpEK3QeFNt8PcJdxnHHzmhbx9qXoPxq",
  "key15": "5LDq27cdBS91P9AD415AhyvEBzApbFSHB7BbKvz9dWnZPQ8BFsEbiJApWFi5UcWG8g3Mz9cutCP2gWcrkavbe2C1",
  "key16": "4u9Tg8t4XnKhHQKBXZsH16DpJyTXh4VKZ5jYCLcTSRA71eK6A2WfXFnv2pVov9LqHAqqSjnJ1GwGr7SUydXCGHBE",
  "key17": "3hXQ9r3D7rb1YpM5jkC8kxcMWLyQbLBJvPHHe3CyZys5W4KJrPUqse9xbwWj9cp8WVoTVE2Fcz6RaBg67R1AP9eR",
  "key18": "27VtCuqt7HJ7xEZL6K1eMYSMq3QAzZFhCBzZeaYXREUqkQdwh3gM594eonGPfbZWGpVZm18N2tqur3USNURojuTQ",
  "key19": "3c2mjyj4fvMVJoKyez21cmeungSqeqp8mnr8XHd8SiiD7NR75sPCmbw35hC9g6zcQoAWp5zUH78jBX6L9G9UN51X",
  "key20": "5UGV3WDNLpmCV85U7T87b2AGfNkDqJxbWddJo1Hz8f1oR6mJUsu4cBnQEYKmEdmYuKfEWxt9JhRSYvzqp7rrRoMh",
  "key21": "EoMm6UZYiGRu2epTWvXMTAmnJGKwavBjWzbZ7TPUU3Kw8QbMAQtGCQ6tsxxndNabyAAzxn4k3mggc3DaeVEm37e",
  "key22": "247TFzLdRmyqDr5YJskLWBH2MpdvQdJA1VsMtvi1gK69Eee5b1SGhmrTVZfnh5USdTzhqmnMMDfS3i444yKA4AuM",
  "key23": "5hXoB8ropZv3d2eYkiWYkYnLHPJimdSdTmfWU7mp6TjMADdqyhNJSgLVir82i6WLp6b9KANTPSY2mBZbTBfZzMHq",
  "key24": "nbDo7RzX9YjLddEV67Cbwi4unroANSr4KqNeWVJGCudJU4ZKFXMoUsm8GWjhYcZRRm3XjGNx5aWE7vo5VieQj78",
  "key25": "2qa6HzWwcZd9tBh7FMeMKFeYisW8qKsAiVjNDLxCDyx9hESgngtJTTzCS52mfw3FvqcPvxDovBb3NZLcns87Ghyd",
  "key26": "2huevhpbHiT84y21T2GcHvq44HhhnJm6wTwkiToEJjxzhxXnhjNvMR58v5K1ijE4FZPniMu15TANTwqZ23QbnRPf",
  "key27": "hfhRsSsi6FhAY5nHJiviePQT6RWs6e2w5oM4g2Qk214Zq2nU1QiB3B5jzKE9xprG2cJgYrsBzaipH3MTGoR9BkC",
  "key28": "3FSujTjeDFuSGxDXLQhw6Xx5j5HVcr7hnq66rCusNwV72DGn7WUMnwDA4Jw1BJEcwhvcsRa36YVC9ZcyQtq2p7pt",
  "key29": "5SxnSRXN422X2BHmMGFVQgnimvEMzg4eqw5v2kyDKQBbJbFWmJXGtXC99tBN6W4rSgwFokWNj84vR7uqebR4nRQG",
  "key30": "4EDVKtvUrDgFtWNxkuKcjcTCEmaxo6f4qXz2ox7QWcU4XASFLJANKVQxgvB8bi7HtXsXKbeDVEjsAZBbu3EndYdz",
  "key31": "3i4CeEF2W9QwZgM56uzuLdPGu2teX767xnE6jqvkkhxYaEv54oayN8y9PNAF17HNDis6HrepENBCsX8mj2MFiwvN",
  "key32": "MJn4stB495LZ9XWYmh3kvaGDeSCYC423FfmkBq5zEUgdXPkzouxJiGe14dkg6QTRA82Aw4KNsjKndo2XNCxC3PQ",
  "key33": "3uF2s3stFjBB1fj8ZRo8EUoKuwdqD2xY4gYGAPf4ocq83gnNsbkaAvVLSk7XgtDYn6HB8yKcpzoMbWobcneXW3A3",
  "key34": "jdbQsebRwSvQSezDdp8GVuzgyhHWb9MjgWnZ9hGSmL4x27F3xSbBokj4r5Dev4hD5jVDuXRZgHVSFM8oaBLsbx9",
  "key35": "2VrwmTWnc3CaFz8JrRb4KFAPfb3JxQfSvTWWysXzpSnkDFiwrnXvfLU87urxjESxryAK6UdgTxABdt2oBydkKD5Q",
  "key36": "xj7gx4AseYEynKd6Dy5yYt6z7ufaqXUgzudSvK8m43avDJrmTGRNo1xsDU9bxLgaDKvpj6BXDcmtTiP3XPQcUbz",
  "key37": "51No7ap99WhaRGPFdnTDBcMDoTfuL34d1Hvq6TJfwzuCmG8ccnBAAWxas915jv5ehVfxxDMidBBBTvpGsFyKSJVF",
  "key38": "2VmDe38JhKor85Xm5BenKh8TYqgmWjrrPZMJwAbzZCtkXAqb9rpabrF1E6AeH1cFVE7xkHsVdosHmrVRWBMuFZFr",
  "key39": "31DTQmaguaS5LkgYKdWtKteYDFsNQeJo7Y3MDkgB4HfQpg99seJ5FJr7MLyeZVbb23oj8Dht6nM9ebCMH7cgr3ci",
  "key40": "4K7WMbqwntdB1qTNA982FcTFc6mFXnBwp4oWwbK6RuxcnafBgfuek6WsdcsbCvtJvmBrMMPLon26mi3JpXLQRR5z",
  "key41": "rbyET9Zev1mkshL3dWkfdxb5rHGr7eFsQskQtqm4Ht7dwEuJ55NsegFi9osm8LPLME6fovkiCxff9qh3FNgpbjc",
  "key42": "3KZrjbRxZxFKiggkodTaUq2bVZsh2tdda9L9sXieHC541ME7ss1PHqHYgpXMChZenU9jJwf1babbJjkq3pwJCBie",
  "key43": "2wbuTebngfQgSzBQYRbx34874kwNugnmU6hWiqGW7V6ditjGEjmWw3eFhmxceY1PySPRWJXk1uZ7MfpTGLGLgxxw",
  "key44": "4zudEDcinjAwcwGgXYNYpMcgRspJ5i6Bng7mJnyH3hHeaxVRFLq2YwKbBER6vmCXsh8KovqBUjKMQFeJj4WEK3RH",
  "key45": "4bR97BNVm3tne4WVBTEFRPVsHnq5UUYLB7oUKUzJbkjpUSAwe2C3i6CZQBxi3aE6rCq8psoWhjG1cjBxJGFCUDHg",
  "key46": "5bZCnuR7KFuFNix2g2yqTSc6C5efrF5uYoypVLd3a1duymwekULRuehKChQZ3xoHExmAb564GUb3q39HPdsk6ZLV"
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

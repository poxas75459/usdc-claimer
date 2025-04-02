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
    "2tartS7XeTKTBa4Y5pUZ2HAGMikpmSsKUKKwcDtRuHaMhvVCAPgdcS7gbwDVpcUf9qSEEdJTL6h53hJVa2nWtY42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9rkX1mChRGyBstasXGtxBjBPrR6v1GCMYraXqzN2eqNHQJMX71GfPnP2BzWzWEWoMsKJBLucGzfcfDkRuFm6eSM",
  "key1": "1Te8QBm7QUMX2LzmdkqkiZfAskQ8jtepUsBFeNA2aaDg1Yj3WFMF2aqtj4E1qY9hZXyjCCpxHQUQyf69aNvNByG",
  "key2": "4g73juA9MoXRwXfN2hFxMC2xQhbj8joaYp6htCwwxSWer1GHU6rA8QwKuQp9P5scFXjHyrZGXojRC9bypHP2Rofs",
  "key3": "5ubmgVG5AFuQM8B9RzfARwF7H99EC1Y5sqHBJGfgc8V4zauRx5nj7aC12qbFF4GWrDhmFnfF9Fy517AAHq9hCdZE",
  "key4": "4X5Bm7gAQHbba3pzchCSHwyhfM2qZB3eyXmsTVB991t4ckaHz6oNoXm4FYrYWxpeafzjNCicdGoXitGP8uU8TNph",
  "key5": "4WpahywbYTEQsxrWNj88onbrRmvwFrPYeDjLEs7hBqoH42fXbqfv724wyVUTinD8H5u4URvn948ugoGvazggQUQg",
  "key6": "3tdLKZx6JPTJbDQ7xM6Dy9VVgnURNptXdNwBXpU35Knr1askDQ4Rsz9fbxJfLzPFRvZ1qwT7KddZNvmPxxrLkn5s",
  "key7": "5ayq68qkoJeTzw9VhtmmJhguGzmSLNLuB2SxttGwJbuiEGf16HQMKxf3dg9xWgzqYpcMn2mFRLY2Zekcicdz7uh1",
  "key8": "5kkajaEvjidVYowLRGYCXu126e1gYy4CbBuB3SFTCnRDn9PK6EinwdWy7FmBXt7YZU9RSvrvkA7fw6yJw5dTjyc7",
  "key9": "2khza8sehNgWGRAugy2qQaqcehQhEedBysGD2yXrqYuTjWsB21667Js5HmSShCn4gvwHToGJobRApa9NfjvGYueh",
  "key10": "2NVGTDpGV8sreTkrRA48hWRstZDYaYdihr663QFoRZZuAaM1bzpscosuYzbqkQFvNhd2mhkfKzWiptU711rTNVpW",
  "key11": "4PKAkfDiYPftrvuD4foXD4esgUeuHuyfzdLnT5frbWvYP5sKYQXZkJpiYRyT68mEyUJxbs96YtgPDCQ6aoBgDPeh",
  "key12": "3BuCc8x22ZDsfLGQjDuuvrdENzHyVwfSxcema21dkXKQSdAoyPSSC68AiwXwsQpvhry2389XaM7uKuhfYRnrieM5",
  "key13": "2ZKC2vGHpjUF2KMHcevZHANJgJfNPDAagTTdmSDBPgSuRYYhhmM77mNvjH3Vf5nzzDE9wzudKFAW6aTBvRvJyGoa",
  "key14": "UgSchPJAcsG4WhjnWWmuhgsbp85BifYaFNLiNdgjmh3w61UpSfMQh2e9Q1oLtMZmQyQNv2P5vQxdR7owKyURpVF",
  "key15": "VMe6uX847pMCAvz1hx63mgSnB5VhmtvHrSSWGUAECbYQvqZGGm91489tqdX9W3XtDpbbYZMFiaMZr49rQ4Vs13e",
  "key16": "aeWEyVD89d5ZHxhS9XyVQz6oCnncAAq2U2DsQFFYKHgZVLDPx7jWK7Vf8qLbt6kEzMyHhfYwHAXrUDZ9NkUAyzg",
  "key17": "5azcNyYfxvJvXy7dLCKPFAbSmB3C9XAsygCjqcN2yssianW2vtqKmAEhmPCuParFy2hVQTaF1WGXnxwuu11ZywcN",
  "key18": "2gW41APjt4gquNyhX56ssDH9ufyyh9TuGWYTy356WHWF9nbaTbvkcNXLmaXUysUnGSBs9jkJ2X97Sh7wawJH3ccQ",
  "key19": "k2imqLZ3vj1JCFqGL9G2e1Yyr3DCnD6zvidAkkzLUu4E3f3cbdVPwHmu42Rssu2oSGJboJ52v2R1ZksqMU1J5ZR",
  "key20": "E4u4bNSzMFkVYAVwdTZWboabQvw9XypAqLZiQZXvK55QdrrGD2oKhBtLnPR6UyoeXkJShtHXXqjRYVBa3VSyAgE",
  "key21": "tWGSwifwKYJQPibXSJ8Py1En6MrdEd2XqBe55S1CJa5eSRcTpke9kihkJziQVXTgRKJJqzBXzRpFaWPCpr1csgN",
  "key22": "57rFT9YbdE9rcyfhdGf7bgBb5Kwx8mZQ2Y1S57JmXPLhyct969kfBqd8ihmFfn3Kna2qdGogPco25CKRbasJCS3b",
  "key23": "38cZumPo5n2wyzurqJSpqq5yP4DZqjUPxnr3pZVY8cU1PCTJVNb4rE55uf6Rj9iW3K92PiYgebJ6GFeeifvx2HMq",
  "key24": "4eDsTmQb6ZMep4UpUDiVKUA6ELVVNNGGRLX9KwLpkuYqd2iqgCcer3zLkRUT5ndruETtLpe5Lgj4jVPJMboB1h5E",
  "key25": "4o6HCtVufa6iZntpYJebbipQkvD1RNwBc7FuWP9VbknwpVetVYZWuqfFCWnWK4PxiHPJZw3vkx96kJo4ho8JHXYc",
  "key26": "5bwASYwFmkHCtYsm7MmHxeZrbYBDx5m21jCv2DsdXMQ5sbupc8tLS8kWktz9WsKaP64gUMAmh19jk43MamvBx9gS",
  "key27": "GXZbBzQ4rMjjoW74XQ8hPssjTHEsiHTZgf8RySuiNhe2g4anSEbvzm7WkSVP6EyqvRSZbPZELDpctYbVEBEMUAE",
  "key28": "5N9YiYYmFPnsHsyhmvTkPGvMwA9jEfknBKAxpJi2NmwD92BDxDpQXST5iJrzdSw56hMEBRbHA3ibmhA7FS4fGVVd",
  "key29": "UdgtKzoMnnFAjh9tViSStU1DhAXw5CNVxLcc3uPSXUa4swDTFqGMKqyEM5HA6VwPrjAkBnYw17fdg2SAGAk2HuH",
  "key30": "3EVmR9PWgxFPxGr9ui6Z527Ujz9a2KgK7CHPg56oufXDB5eh9X3doGZJNp8kc65mHx4aLQgCFneALW8VjWtG6q6Y",
  "key31": "512q82Rfz2wpjgZCs27xgPDdUaZe4HXCyzZ47WRLQjxJ7qLhRtkMqQmBFRkWtWSiQ57dGpG128Af138PMhfViQRf",
  "key32": "2hzxmh8rkADdyvWex4rwdAffx59uHZ5ByvjReD85FYxVHesiwVSJvmKZxLi8t5newm8uhELwR3JTsmKvHmGtEfda",
  "key33": "4R6HcJRtoRAWezqcHhcfATdwbJG3szSsbCtpbsa3KCoDtmXNFBxdMDEAmdJZezJtN4E2jgeiZACVctkAvp13C4sT",
  "key34": "3NTb6Xs9z6s42XftXNXUgEHa3cPn6HcD5iiRZdRdGViK98uSD8LW891SPTynB92JZxrapWCPfDoYjUTXfiPsiFG6",
  "key35": "4T7MDSnXBd6FjZvo7nA9E3ndX2TgsEn6c81KeD6D3wQzTCfTRZRvscav6evJxRrhvGXihaURUNX7qf9yxyWeUk5T",
  "key36": "5oegxqdt8efUkQ9SAjrdXTa4Eb6gtLxaNZ9pgChjJc2tFHUqH5EWwNCcJQUoxdrGYRfGYXswrkzvsrhxTjDrebib",
  "key37": "5KkN1EZcm5JGbj1Fv1H4BrTy52UTg4WkAnGArZr3MkRbbhY3N6FM5QXhnPCCJPC9TtwJ5RM45PjnsV91mJc9C4M8",
  "key38": "2eg2WSQsmKNLyxMmnDWP6hRgHzMi5eZPn5dq4RjaqKpuYG9YLP8YkvZck3wCQ5MgKuVjY75MdTmWXXhKfXNXyzT8",
  "key39": "2naQMX1dGynPXVsvnQcA929XxBu9GH2APMzK2iHr4hqGfKj69kFrtYv7hKHVefhzWV5wSKYEEgTkoKKeHPnSduja",
  "key40": "3DhA6DpM8jFreT4Sz2BY3UdEBsm9Ft8XXZnYjgkyCT1izSZeSdjSaLbfZ861Gk9aUcXEQi17Zf3ewjbDoYRcMvKR",
  "key41": "5fqEYxTxQ8vgTyQNvoKYbWjbjCvkGdQu7dUMidm32EiUUSXELjXn3wK7djcXDTjvZFCN3W4iWLXPVMhESmMVRhs6",
  "key42": "3yE24KLD2JnSGcbuEpFopVgFM8LPPWzXyVPvRVWb2QXepcVk5pQ9k9H6HFh3FXqDvCQ9odbqmDXvptPkYo3fEzVC",
  "key43": "3J1MMWC6Z6HXmdbgtRFQpmzDMRkAri1xAcSNSDyvn8uHF6mzkxtjHB69KRJVLdiwz1DuVGhzjq2ktUBa6HcDpPVk",
  "key44": "xGnpuhNVSZzZyj7XzUgVVDqUQEPARHoEWck6wUmgqupoidbbzwi3y6QZQmid14zyu7zb7WbHH3VhJCoWMjBQzfn",
  "key45": "Ybd8Ph5qBdhN9LdG2yzZbrSorgXLedyS3DvmBMdGHWMJyEdh3rNN2MVJUN9nufgq76c4sDHXHR5XXdAR3MULhEG"
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

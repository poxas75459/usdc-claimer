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
    "41KiAhf31oCgDKvSsFAMFnrw5SWaYex5GXyAni9AEUrCs2GqsY3xJ7DrT2ubVa6UifYixEArZ4yVczjDFQ3CJG1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3apXzmeLXai2oSbmuGHFzSqumyxut39UJb9m4pBHxUnjekBVniJ9V2BGDFXcJbKmZEMuKrKCtKk5h8fvKyDjgnTz",
  "key1": "ab6ZQW6NULgz5oeT7cxGnKnwvf8bA5uXzBjpdF9HYNBQ31kFSJnW3gbFkJFqqbpTkagBgY3qBuW1RCzjgTNErwb",
  "key2": "3RKnsh2XthjiRpCaahoMYojk9NyECEhWkJ66Q3UG7jSMYNjBqoD8UCWiRfxSatUzwiqDW8F9Pe7gThPKVzcrM3Cm",
  "key3": "4zh8MiymVCQdJcDFzzZbXEb2H5o7YzRMJbi8uUFt9cs37XUsHj5E1wJmfUPJ58xQxFMXi5bZBPp5oFVDN6aJZ1JB",
  "key4": "EW9xtSBR2ZKU5QkXJjXe8c7XmyrXHfpzgnxPF7pw4bYqZnnUAqSu9HkPTYBUoputt4VyKwXGESGYYd5XFwNx9C7",
  "key5": "5Mie18F9fKqVcdR2Dyc1kNzT3JXzpYgFJ3Ej3YRrLrjSi9NZKHkEiAohuMStMwe8jhswaq4H3XMHEtPY3NrJvghB",
  "key6": "3uDhAwYNtNorLWwYi28GL6qm3BpfBnfpsJpsc9nkY6VwM3Rmj3SSa4TaiUMZpnavNdpSwgWb6RyqmS4QQ346zjME",
  "key7": "2JcrsuJzDHWL2HHBUWSvkbdujaVTUwc2fh4JyPfdBRQabmKYrEN9He4pdk4UsgjmxbpDQogJPd6qrd8ZZnBWYWk",
  "key8": "5gWpLA4AWtAsYt4tTUeU8omGy7o8utSrPTvZrAEWPERptJ855Hvk6eXnis3FiKJ3WWvDPqGEXjeJxsweetZoxbTY",
  "key9": "59f5MxuJwfuPDA1Rt68BnV74FTeHdeUztbc1ZwM2mJZ431ktbx91nw7BRmgs2Bq7WfQdznq41WEUSUVtEere9hTG",
  "key10": "3gbVdMSVGuj4cmnazgejZH8WVpSaVVpFMujuunf6orgRwEtjK4Zaxd6HWMc9Wc9w7qkxESyNtLa51E2S7HHPhHws",
  "key11": "2HcSxwS2kJrZNxbm5ypZ2gtmmmUt2YcxTcDG6rQ4x7sopue1SPMch3SrdZ6BnYtHzVaJE2cFdA1RpWtMXZdzfhMY",
  "key12": "3sBLQg3EvHbbw43byUR65mU6YX5Eonyksk1QPRu2YZZ4BZ93k6CC5aRT4zUtKfTE5eYMdWHL748RbfYvrpWC6cGP",
  "key13": "4hYiVHrbcCksWwNGj3vmVcbCzYzN5yFVPyGRMSAkjtvKtTH7CCrRR4e56AxoPpTVJSXzQoyYnuJCsrHrKdeUgRWt",
  "key14": "3zzX47dn7hWVUDt8ZvLH9rSTUQJRLg7gEWtsiauMJrPX4JkoHFD7p1JajU3aAeRmqS2afm8FHwUdTge3MmwWsUHx",
  "key15": "27Nf7wPyG3zSY81qos4yD14jcD6xbRPs73M56XkAxAP9e6jobmHvpSKmoqVngnuZhCVyifkQrFrWJTDCkUn1Y6WZ",
  "key16": "K6EjSMmtfa5CQRJpUn73VHxaS4pTo4KiyXqiWee4Cv1SkRCfjghPhXhcbuC82ysM2BJzu1gneY1eGWWKvEq45x3",
  "key17": "fPe1gQAzpdf6CgGQ5Z7gpL2868s1HRqSpPappsMQyW8LvEdB9qU6NSrsw1gn2cnqXinVarMw9xXbB3mLXCYRBzj",
  "key18": "Es1r5uyqp4k4QQCq1NgnbApME2pKR5f9CAacqXzBGpZBNtc71nAuYqZhUaKUW9S5wZ3PCqtGh9t6YTB24w2aV6M",
  "key19": "2L2LkmD7VxEscYpvHSjvWDt65ND8ENxLUR4ZyutvjWsjaRyn6YYzyuMSNUqyv2ho43H4L6CxrS1NqiJPbZh22sDm",
  "key20": "4rjmPzQjzLknUC4qnjkZz1V89vj7cHKMCZySsFnQDPevpPf2eCZpxuGko4teQGNq5foPvhMHLWHoh2HRy5NtmEXd",
  "key21": "3xWFBiLqDxSU7upKmLzinTbbh3x34DYh96LjhXGiAUFxK1ooCVUfMZhCnxADz2XfZ38FbT1BWJnGn8S6tzpB1Pn7",
  "key22": "kcK3e6GdQokuHhRR5p9KUeszWjJmwQRoWyVT1FuHoe1Gm3YccAXUJVUg7TFEvtm7dKP2T52vT9gFfgQv6X99Pph",
  "key23": "2CbpnChuFVFKxn8yyWotieMaHR9bqmbkniMK4qrBPy5YZyAVJFbVejPVzMmtFJ9GJbg31cS6zkFB8Nm7maWGoJgw",
  "key24": "xYUsoJbBfDhmWiHntg11rECBqzTtYsxYbuxnNLdNSyRKhsyEsYYgdx2Fz3HpcJaW6qWQst7rFm79J2QhFmHZfvP",
  "key25": "4QncqgKAB78vYamZLh2zsZJWdg1DrvmU78d2ppfgDN4EG9tXQxfM4qxBtK97fQGCTVyM9AoeTYQwMthJqUitpqrF",
  "key26": "3XcnmvrMyb1UStmwjAy9RdJ3ez8kaExsXzc8cHm4S5yywg7b1ALWAdzqj5SyYZPdYoos3FXWb33HBgiGhB3zdqP6",
  "key27": "332DDPq3ftNVVmmuajJnJyDBsMcpL8tWXcENUNhSE6iRhfTuu9niAWTkUQG5q39QKtGDWA9vrJ2aWEvCu4jRYPbj",
  "key28": "VfFZrZBpzjQgFGiGbJuX9KpsCbdUtJZefCFrQqxpUaxJZAtk6SSKZ9Vv3zanUDo2dzniK7Hi9FcqEgzJUi7DhCz",
  "key29": "bVL4CP5eZok4zXMhf92oTFvVy8hWvudgt1FNnsgesJehuo2MPFLJyV7UoytNanwUfmhLYAwQ4kRm5m9YXk7T64u",
  "key30": "253tyqwvFDDpiJanCarrhonim2rHZGtk6JbpkorX87yazhf812A31PULhetBFHeKoMRVmYhkqzMY8SMfCjpgxEDj",
  "key31": "289JfUZ5D5Fmj9eVF5sp1vV2JhdxV8xta4kCYzXymsLXGejG9U92ikvvZ93mj7qrzuekY9dDJf85994gG6JajCLw",
  "key32": "2JRtW3nTsUWN2eZTt3f8CCW5qJ27AhZC6mp9KTpTQpuckFU4nzogTWXqqaFTGeGVcrGGXTC2f34Yn54UnYymGchG",
  "key33": "2ddyeyzzJnWXFiEqnnsHyf38rVLWfEFrxvmZAjM7t9gsqhDxXidnS8N8cGrbWRotCXZwq2Q9piNyeV7LFGEzxzHd",
  "key34": "ZDXPVD7MktTXkoaTbA1ajbES7Ph6Lp934w3GFMe6xQgQp2xs3uCmHjjZQtB41tj3NJKrBgJPL192ov9ZLryhAso",
  "key35": "2hEGnGpfeRD9XkAb7KjRKASrkCZW5ez1AJPukH8E74zhonPUvH6rRDv7zEGtRVQuD4Nzk59vYQM3JE76cg7yutjP",
  "key36": "d2k56qrtG1QwfLCkr4AFVb8e7anMiVFtJaPAiAi36R3s2nfEKZrkAbvhKWaCaVhpQdgZtPozzDbzLUyv7WK1fax",
  "key37": "uKrtyeVTRYQfEvhzE13YXAiZKB4sRUZEfwQMXh7eyJZAiKnVpUCzg44ZMysvJm98BMFLTs85wmNMbf58duEtsQL",
  "key38": "3BVXWruVpVQze622wrpWZfzpTjALctQDydEjVPbRA9j8be96iTzuY3AMxEb1nQLJZwWbjM5xjUgWqUsKRrTHu5Ee",
  "key39": "3iEdNvQsorvkosH16brD7cn6bKP3rVVv4b2itA9hEw21DSfKNpKME2pjZ5ynKPvATPKxHMLa1FW8Mux63iyEvB9C",
  "key40": "3VCB2PQWjRqLP6jEMnDfx8cnPFoT8a1SsBnPNz1kgwTnbD1Fvi7DWQnPEX4WwciLRWaQYK3ejBNbPtpJxsXmobvB",
  "key41": "2XDrc1hxqXHF4aR5ZTjFNbVs18gDwtcKxCXrAF92nGX1TNwcU5kEJAMQaGjeLtm8JF6pmD1p7NCETTwjksP4ppap",
  "key42": "2sXWLYwjxr8dqmf3vgpoSUJDtKDmMkwkgZRKRNBMbhrXcfotq4G16YCrnjeWaM5wYPrjtpGSh1cW1Wo53aXgfQKx",
  "key43": "tUsd7YqAuQKTLzwp4AFr91yCkxPuM1F3vZwYN2ym9SFxMaU4xKnE1aGbX8pxL2o45riwPfGHFv78jvU5PBbQams",
  "key44": "2ht1MiT1WfpofZe1gEuQvXKTPsQLorDV5wGiTbyXm6EwHfYYpX8v5R7eZrCRpfxWz8DDDxVJk8Z1kT4dT9fvyYVw",
  "key45": "27qGQE6cSbSMSKK66ga6cgWpzrhcBcmMP9KyU5ETMiDa4D99JMqRr2Mu9UZ1gCKkmRSr6ZX8DLsU4bo8TXsTvTZa",
  "key46": "22X65ckf4Skr7HwJgwXaievTNKv2dbzYAfcbvLZTiitYUmGan662CXdRfifckn3WettEsAKfGFpbtJUAp3nxnDjV",
  "key47": "3Pvnj7ydbnNuE5pH82bYywr7tnyFwUardBd8Zay6EFVge7JhE69XsoPH8CBtmWTNLppwRmA3geTz4N2iovVdcqtK",
  "key48": "21vUVKvViKjADhHBshfrFhwzQDwAUx5c8sqUqgTKsbCKmMhELWofc7M4GwZWRMbT1K3As9MAG3ZTaq5Eyk563QZp",
  "key49": "9v7ySrzDdSA9i4BWPsBxtpmfUXmHyEk55LgKM6GoVrXYn6rE1Q9sBEZU5WhR4unfenZHbq3bqpyTzXnKSk3jo4D"
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

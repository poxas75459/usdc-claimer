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
    "5aCZgQKaAPHUmHyY3Fm7JQyQSNfsrQMdPSa1aA4frAvNkbtFYMb45mWjc9a4aE5zh2Wx5GLqswmWXTjiNsAU1vaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q3iBkkErjzEgsWkFBUzWdKwtGS2nDL7kv4obbehshT8BcF3ibqBu7G45wge9w2eGPTxmRibBVn3BkuianDDeFXg",
  "key1": "4cwYZ25CwE4LDtFc6PdykiQvaECxzjC7Yv3wMra73P31gJyY5fFY9SJXpxT6gPGpFmi1U1YgXfksU9Hqk8PQpEJA",
  "key2": "4s9kTokuy7yR9qppgr3oerPVDwTsHkV1mSRkfw69ZqQnT2WNtRPxsN36TEZmLMjaVp4oGoAgLPi821crDGUxUVys",
  "key3": "4rTzxDpXNtGgZpW5Cpwb86fsipt4duUb4bsVnp9AtAigarDQwER7ZZXkC8R4j38FipxUw6uJYppx8s3z39pd7gNm",
  "key4": "64kDNdYB52qrcicCGfK454o7A8izf5v6wMKnaU8PWw6bSQ3Ktud1GvkfgC3ryXjEnLUp55ffU4AcvarXe6SocfAP",
  "key5": "516zvgcSxxPpMChGGYrhLth9uN8ZxNdNVNNJTs5G6hFFtVJCBmie24hhcuoiki1FR6J3YEnMbpEz4UL77hxZESRc",
  "key6": "5YL8xx27XjsUeXBG5Qriw7LrBh9ebghS2zFZ8vgASK36LAWGdMhGu5gvM1oVw62PdbSP5XMEr3dy1K1rE7p9Yr7z",
  "key7": "62BvRqPThVAkBmGyAqWNyn5bEoniyuPJobkC5NpjV9gwwPkjQVzUXgEJt89sLZMQNQt96CgopxF2BJPCiJXCPvqu",
  "key8": "YPLJrzKpDoCeez6uhoDFkCsU9S86w7qvAe3r5RhZgepwrY3g8b7UsEgwszzY8mtzA6uBbYNd62VMa1xyGRoGQmG",
  "key9": "wTwUK5e41jti9ZzBZGx9SvEf6Bt6Kn7M1PrZsMgSDm41HSLLGCjufNYcaGgQkE6GqPNK82ccqKg4dHeU9e8uFEH",
  "key10": "3J9ysKXh5FNYUKBtiwfcsDEKtXht3HmUwRrAdYzzS9BEaRYpPcRMn9QAYvF1yCy18BxsubUtiKmPEH5pin5z2BiR",
  "key11": "4HBZRbgaakkFQWfHTcUSbXvZeR25Vwp5UGrbVM6pXfW5b6zE7FfbiVn2aYTtTebKPeNn3c5GN7iaW8pCjbmQcNG6",
  "key12": "2gdEKsLLyaAK7TaiombZxpMpTLhKwTuzGPg7P833VigpGJgAdPCsyfGTqvNhb59LvFWiggDiuT1PjcX8qY5p9G8z",
  "key13": "5eLhxFUMHBx4CHvVYPsaWD7CPDroarLdXAGTVgE9Cig1YRMsqAbin2futCLBhQrdCAuTwTc6RMdLGNWReoEDjP63",
  "key14": "3Nw3tHuofo3MsuywGyJM6CeXD8XNMqEraya4jbinkiQBUsvEPUnMnvWKziVrLmz2wCEqsEGkUEJvAHBvc4w1V17v",
  "key15": "46sh2f711EQ2eW1atYaBFCcN1HVnxiJT6PmzwrHQsD7ji5EbD6bbTNiP8E7pPLreFziHcUH2fhH6TVaPK395jvQD",
  "key16": "5AjFpVYj4MMML9YEhkMPM4kKohVDZE79carVgdhP8hbWJzJSQHLz3cy3iFqBA9pwsHZymPHFpDkPSAMdR7enP4qY",
  "key17": "4C5WJnkrpdybDVzR2LwQ8dBQXyrEByrdvQNvQs3SAu9AdqLSh5pCHR5mPo3CzeXGcdaiZwZ2ohYuvWTdCexVdrca",
  "key18": "S4xGuRyNvobZuUyC4ypZAe11tPiDWU97zTSWRkDMWZjPpHiwAa99otEzGy8vWddcKDgRQhDpUxNUe3MdFtMoHKr",
  "key19": "4LaHbEkrupwtCMbiE4muVXqVQbAenRtgAtFW3oqD9sanhgm9KKG8MatcipwNRGPfjzksGCnSEc1RoUrtH7PAyAiW",
  "key20": "5AYZ4Penf2ipwzztZLSVu1exJY2ScQF7H3H246CEMFGJjpjugV6srRmEF4GCfkT84b3Dy9GGQLwS8HfYa1L4dXST",
  "key21": "DnX3TU5EUcE3iAfxDSa4Cbm5dxJPz5aJECcTdG1xjcQqrbAcA6tMxwva92r7hMdKpXt5fd6gcYWV9NwjPSU3cJg",
  "key22": "4qY4QrWEV5RyPsjziZDKL3s24rGh977kxK2RweNgCYUraSmSSyJvwvrQynaos6vgUYdL1gkywZbS7Wb2Ce52qxdK",
  "key23": "5vTFt9zjFvDY4EarTHy97hkded5sfdAYMRGMDUXML2wdeGgaBTvoYtWzRZjFAdUEbJt8myvCPA4rbSc2HAiimMVU",
  "key24": "2sLok42CwCkHzaLtq6C6iEeHSh3VQWZK4rb6FADmZHwBASs4ixhfggNsNx7iUkXxvz6gG9uXsFyoUqwSCCRMr7tS",
  "key25": "56MwXhc9KBfsyWUQnGKch51Aww26h64m2e76wKv7aoHRysVEuGcYrTX1pTjjRRnxMqLbPV3zNDJY7KMhbSgcCMHA",
  "key26": "2vQwxYYGgA5ayPFN7XBaa2KfzjTzpuxPRXF5sWwEXo4499q8kezfUr1QJft5esJyouysExkynvLbMfYhNnJsi3Z5",
  "key27": "3xUii6diojWjKV2fStcdPbZuYoZcnwqApwdX9NLUkt2PaFQLo83cQ59LRZZrsA3LjovZPvM8FL8DrWUerz6YkcMY",
  "key28": "5VRQWTsh1q4oh64yzuQjk1shJfh6WduoQkrsCdYjEakqXhBZf7EvjUcA9P9L2CGgdBU54xMjvr4yUjHhnmpBVRLW",
  "key29": "5fUgg8cXFssXhN3iM8T63Ayuan6rs9jdwfdrrqK4xYCMBd2mktFmRwXEKdCgtC5nqgVN8Q3KT9aYU1zHk25XtafW",
  "key30": "4WCcepZptpi7kku5fbDx7ni8kP4xHm2M2yEnwdUkUsB46Lt3E7CRepfGzATcZgmaK4e2oAwkQyorcfZLiAgca8u6",
  "key31": "4unKEHeF4eFdsNPugcMisJypfobvyASoQCaT3uVNNU7yjSEiWikCmqj1sWeSLwuLFGBUUiG1LFSuUW41nSdc1joi",
  "key32": "5nfamEsR7AqB4rQvRXMdkhmLqbu23H7pfVsWgPHvbuj4di9QDcvGJ7xdWcYYWkebqDEKNPEk1VVnEen3v7agRZ78",
  "key33": "2gatsqiPx3WRjmbEbDopCPDH81afezPibVfnt31ZBpDuT8fPcPxojcQLQ4JmVPbYdMnDcpqB3wEc4m4EiQzUzzy7",
  "key34": "5VwbyXtzwSo5zTg6hmdR37MWjrfVHtByaGJGxh1to5TxrTVAQkd4e7VKfmmhpobPgG8sTL8A1RKpjLLkSd8Sjm2B",
  "key35": "2X4eqKNzzh8vK7g19uMK4P9B25AVWx94JwmaBqrikgV7sfpnWkDkjVEHuJDWAiyVnvPzkKLWPcBmeaSaquksPop6",
  "key36": "4Pc71LgdjAjutEJg1dBjicPNpjm8GsYdRcd18mtJr7TkGh54tNDXucXtxBofj8Jjg23jfeFhc9Jg4WfofpnRFFrE",
  "key37": "5uh7NnY7DWzSsSDmx4qAagA828bKr2SLZ2bR2ke6w1dmU5JgQuxK1B7SakHiC5eddK7vy7v7naF4o6T8SahjNJX4",
  "key38": "DpEund8TeTd8Z3L9ebzyTkHZVPFDaSYxo5KUEZq5MguBEzAHqvxaaGjmJZpTqd7X22wXTHnv7BDZgy2U2TYQ59k",
  "key39": "aHmGsRCbxAnUU4fPx4MUVFwkLgUAM3he8oAkDnfmcyTrh9r79MDrqyHb3gCgeYTdEJX5PkeYtLuazY48mLtbzgE",
  "key40": "5dyrLLoL7GRrYSpKD3UrFPGtJUYziXf9ZzD54vnFiy2sCLJgww7YwSRFKznj1YeT97eVNNBLCRRHsoH6vZpUvm4n"
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

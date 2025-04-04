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
    "4ty8BUGcViWrVDCptn3qJB8cGJcAAtB8GSx1L2Uk1iZ81bfZ1YLxUyH1urYuG7TpK63y49ymwndTiF5jgQp7F3sT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "373ifiLboXZFV9ndMPUj2eDr2Kf5rYYbYDrGxhpTmZUvoyFquNCXNM4mtf3Rbj3JXkifuhUnYzts9CJ2qYY92uTW",
  "key1": "4BdhHVyLy7gBfcKd6vAhS16YABuZwupxKQoQ9SgDbYTVY4dvhUsVC8svUWLzjuoyY7H7BKh2SfmVpxWsAG7yYfpE",
  "key2": "3y2arkNitKpDY2koJHNfQxu3KhJkc1fvensdRJcYA8sP2XL2pUeDoZ5EtYXPZTHMyvkGz7XTLTik9fLXpjdHHyJg",
  "key3": "3geJkZP2GWT6kNrGaGybwbifudvLzM1x5q1Be1UJiozuEiHsFam9f5rt8edmhqgsrsCL1oKmjjRS55skXKvVgjC3",
  "key4": "4NSjXpPr9nUfVWgqz35VcJ6ysdvCSGjLKAtJD2hMxQ7fQWKRDpTypAmovTsh3pPNYVsxxQaqsJaFKV3hUncpq3mv",
  "key5": "2mwALoiykYMw6mYvUi6cbWPLXRytj2UkMbuD2BMZvoQ775nsYf9gmXfVrZBQ9VV79cg2iqVaWDMuj167b7fwETJQ",
  "key6": "4myeMxNYtiYJHB55UL4hn57PXrzNwds4RU6SLaCfrQZCbLUk1pzLqpVC4BGyQCWLdbNce5J8ja3JTqhufcSpyCSr",
  "key7": "3oXmxeLMgQcGevqLjFgqDovQbC5LNd7v88GJgJW81KTsJvqRL85ZqmUfZgXuzbM1KyWwyHPMsQAbMdwWceSWJuM5",
  "key8": "2XkvD2x14Ev2kq3pFYkuvFBztPHx33YLRKpdYCGc2xUQTyNGWwNtSRt1nt8v4boLPLPsE31Yk5zLEYUsBuee7NNh",
  "key9": "3nkZfFPFxqp7qt1MHgdVdmMuWQWcqZU98V8fxESEmREjv1hko5CosEuETTBwwQqcfUZ7Vd9NmxseheM7ZmtrfDZZ",
  "key10": "4s9bkjsNLius2XcNPkMsASjjVRo2eiGattzdbktnbQhWNg6p8JnxydYJurG582MU69qWvsXZ6eUP8U6EETMujJ6g",
  "key11": "5nps5yXqTqAQJN1dWjJoRfK2yVvbMfJ8PxoC1kUZUQrfDAD1eEyHFCEnxsadJUMaCHn5DGS5AiVG89UNuWYJfhvQ",
  "key12": "3BFFw92ose9i56Sed9Ho1LPnJeyJvCawecv9i6NuiVXsf2RfLWGiTtxAh5cvN9PSjHzFLMALmsxKmYwm7nnL9mQj",
  "key13": "54fepu9MNPs1K3SQD112EAph5SCy4pLF85nB3RCwPh3KyuB5uY9BKPzxtFHGvZ4yMxVxrFB4rZ4kXSjxvVb199oG",
  "key14": "3Zb39S8n5K1kdUiM867925KhwA5JTbwUaQH6UtxrLETW1ViKM5iViFAgSah2ZnkGGBXr9F3bEHEVaZ7FPdKJbEP9",
  "key15": "PnpjAkG6wC3yXTFcMc4UC6s3FzMAiNu7uMpHGdTxXv9zev93cGsqq1vt4aEdpMCHvA47ywj3fvK3G5fM9FPAUyZ",
  "key16": "3DHnXVNEV25gqZu3q5whhQwtc4S7dnKwrSkhkpTr5pnQepkKwYMyTqihhjn45ReMeXvXFXd4wY8mReEkzRXbuAzU",
  "key17": "5ViwgkKBsyBPK3kCU9yY8DVBf74EkC1EsGosMQnePbKpkxtZPemHefvhusPmf8vk782bEZ8sDDhizHq2jPLQqTUM",
  "key18": "3ZijUVVkXqCk9ig5AEqdSs77XFHCwJZrMxzDAqCrnGmxofzFskyQT8FyaG8guDVpEMicLyJRzTWNJvtNqCyVZ4e9",
  "key19": "2vhtKEqRNbom17MVKaHkiqcsvNux2nZkEYmgwryAzTzgCUA4SGi8tkQBksi8nDjxLQawaPZbChzhfSsLkjHEfVR",
  "key20": "5KFaA3kw3nE42HPrBvwvWVtJejubCZ8jmhD13JmU7X41gKzQfJzjxxNQ7dpfBXNz1NUqqijayESsFh5E4wg1Qx5S",
  "key21": "3vhjgXAiTLZwrfyLTJfjcCdwdiBGGD75gF6RkFVc5onvsYiUxJShkwv1grds48SkhfTGL4yzbTtEV5FCP6pKPhq",
  "key22": "55mxFEuCEPitHXm4Rm7B37S79j5cU1fbZaCWkuV876Nt7YwTrE7q3Y8bRoNemXA6fA4agLhvLLcWrCA5khoHvo4Z",
  "key23": "4L4jDX5wnB9SE8ikG5mqCWCxGT3wDe26SS8iWEQnbpNN7oanZobc9ux7VyT7RfwSa9Tn6F2EPpEjxPsqqqsU9rAz",
  "key24": "3gX6yFVHZHXgYo89ivkeLKRQfhJfyVGgupWxDo3T8GszCbksdPsjPppFUSMRPVkKEBEbjVkTVLo3rx7EHbyXRDgQ",
  "key25": "2Vzhi9bTCQ9U3vw1szES2Ee6C2DLqkP32iRwcApqUVuczUHVdxCUXLRuVHtpui7tiTUxoSqQqK3EGAfaovaLeP8T",
  "key26": "5TeSHBmPNidUuJPKEf8NNK2HnPSi5k99KzksdLdKrzs4yArEV8mXhWoR2m8SLvTcF3xY5MkWENsQfxHZBSS7cjdZ",
  "key27": "5k29zLCnzr5NxrQFagarTZjT15dKySckwLSFLVSggnk5aUKG5iKDXgfCQ5QzjhHT4LgUxmnLLdw5B2b8JBqaGtJD",
  "key28": "4hwemeumCXRK4ULnHLSj4Himaqt7NnC7fH6CNaQDYm8ZEt5vUFbfSGjmhdEY8F7KLuQzkN83sCxaeHFD6DQDat7j",
  "key29": "4zyqmtvwtfTNG4jqzsh2VdzV9niaYavmxhQ2of2CzhFLyLLNgwqVsFTwD1n3jHNsG73HoJAGKf1hUuEwJT8v1Tot",
  "key30": "rkPDsQPqseddbrakWZWVwvzy9qe6i96xhPFH7zB56JMJA5TdP1PTMqsT7id6rtKUzNKuBAuYVkZs3pCcAZcjEsZ",
  "key31": "2ASwrQGgqHH6jHDfpW9nTuEZMHRqskc9EfpApJWKsQzWr51RzM7Cemi3gMjSfLdtGqdNKQ7BbHs1X9JENu6nVfsj",
  "key32": "31DSFMBpupV8yJ1tfiSHkGTywQVr3MFUByJ86BYj3Q6CtU5VpUvg7gFvn7RN1doPCLZKhnt1W17JMrb8dVV6ZNi3",
  "key33": "52R9yAFG1rPtM4dnWRqdkDV364s7XSiXCM1TwJ5uQ2s2jCNAdreR7YPo7TUGZBcUMyLy5JLuPve5JZ68y8qEeETk",
  "key34": "4d4FSsmdi9yUyyJjG3uQ1rXD8iXnG76vgazGAvVw2oH1ZG5gs2ShexhsYJzaBzbm51Uh2LAE8nrUt98wvniv7XHx",
  "key35": "e4q6HwPf8UgEGQqNy5sW7Zc8y8dBfFYe7sNHkGaLtbUEBCE1a2Yu5zSWat4ys345uqdyVcN5SmCzUmGyUviRSEw",
  "key36": "3uPqdH1aawaGG7cT73ncD6P8yqvEK9QqXaLq5fkQc1x3DFwdx9iV74RCR9R7Kn3hZhwtkH664xcJ3rG3zdLGpaAz",
  "key37": "2cJ3Mxw6kPPVsKy3HEWJCg1wgKpa6tEYFJE8U4gngDQUQLLNuRFAcRHBE4b5aA1TH5joKma5eFp6NipvDQTXuoNb",
  "key38": "4jEBuyGjeYLRsSatE4CDGPCQHthDc8YkbPT4EzDg1LH4obLwamfqM4KZm67gs6LSGshnkJgRTjF6AGgYUNdaArnG",
  "key39": "5gPkSx4gSUSNKczi64voztxqAYRMqdPmpLUbNLHXp8NgM77v7CP8gjzf4usjRwj2VY8QvEQbcC46VagSB5cPD5M6",
  "key40": "65Mow7K8HPh6Pi3jHvZvqu4AFdiviMTVUs6V589ZPWdj9FGAfdRDFjusjmY3JxzyaRjBr6MzRvRetUg9FqUYFUot",
  "key41": "3UWEd4sGS74TQThfXrwPTQnjxE7kZCa5akxgGA4eJrsbnn6bDmYrWdHJT9qeNWLSc7YgEC23Zq528DTAD15YAQvS",
  "key42": "4eXg7G88rkvdLjChPmEMM4JdxfC2EbemY4BQoA45QmHwYi9ZepWTace9tmYPRsCpABi6TZzkcLwdi4M9pkYBinsy",
  "key43": "9Eqqjhv5CnFCYF7jLtkUu8q6YbWLje4AQB3bSiMGuhhaGWNNVzy1a5SBwGMoTQLYakFerxMXcpnCbFovFtFVV4d",
  "key44": "2ZSJvSSLJZfYUkQHNp51eDM2NfhPcVuGfCiDm6mGnuS5T2WoECSDFuJ55TP4i2iBPHMB3u8uEReCChzhuHC1wFxq",
  "key45": "3uNG2xkBmzTDhdsMHyPezmxFD88SHZBmcYfv6fx97HuYJdQXSsz6QNUhf8TCYKEjHLTTKoB6n4tgd648bQd2D45s",
  "key46": "3UCZR2NysLRyMKG36knYEWPwnT7FDSCEeJqAnu7DnBAfwUtqDtoXQE9MHhDAwxhpDb1Y72noHiMRtwTPnCfLMZVS"
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

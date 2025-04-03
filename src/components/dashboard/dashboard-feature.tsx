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
    "q6TgTo2UDFHr89h3t7bmpAmUQmNCjHsSbHAZa2f1rUQze7Pq5v4QGPf7NrGbn4JC4ttsU1CfVXphNZ8qyDogHRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "518tDMJHbZBH11TrES47vVr6newGUG1w64e4zUs3quZn7iLGcFPmk4daohjzZaAAevEsmeKAQma24VQeMmmQfMMi",
  "key1": "5jLrf8j3yK8SMUhcwToXKERVcdZ2gsMPCyqn9WndwNJxrQwEHbvNLRwZcWYCRQA9dD529J6DLzBcLWDqzP2XWis",
  "key2": "5BWZqk9bZuKWt4idTnBRhDESQ7NKdvcJtuZHTS33WtjARsPFYQLkhSCFP4U4zhjwC2YEgSV9fkUQcvkH1HeLPNPN",
  "key3": "3NEhsipT9K8rt4mBL1bbhZ9yUS1iZbudFXSGCHhaxn6384rTahb26e42KYo9u6ioLHiwV42xG6zqomNX2Qn18HBk",
  "key4": "5QtPBVSimWNDqWnbmD43GasyJ1oHjZbzVuqa5MsFphs5cFWHkizwk98zeTx4NVYweAD5KD5nNeo9uVFe369XAGBa",
  "key5": "3Jn2WpY47mLcstFQBFV89fNZd7mkrZWfqZvwA81ApjtPC39whHB7hr4794Qjci33et4RTBa2gn75EarSGFNegCco",
  "key6": "2Kz89bvRA8MuYH2ChP8fipuHvhSvofEraeqnwQpBVUZUrR7DZ3s17G9qrbFwjV9RMrnyzhWea6LqKGBKceuRUEz4",
  "key7": "4W7CSM6368aw79DrsTzmM8k3jqRgLQ6BCTgLmFdNi1UdVGTTnYU4194CgVXaRWKoh6RfXUWMyowusu7XacEfodZB",
  "key8": "3LpzdaLBjYvdFuxpnJwvxpkWYCreYJ25YL9CWsN8N2qzS5s5a39ycPGa111KHXqeN2NQ8UZU6tEcf2TxcS5JW5Cj",
  "key9": "5UweWmzEe4VRCMnr1BfF4dvuVCaBaUmHnEAdi9a9wEFcogXgvTwJBxeEJDkfyWu5VFdsk3YYDvaZjCuhHDwiFoBw",
  "key10": "4VLG5kYwuZ97rw8SGuANcma3baqewxFHMYC2dyAD4NqenD65gegjNJdhT2GzVqWWSJ4S5c7YQ1p7rss9JgYcSMMw",
  "key11": "3hRdBbe7nwRD8a96peW83CGc4p7zrL7Wt96L4PtXDz28KmpkUpNEnNXymT8ie7BGZrZJWmJsNxCK5Pi6K8Zf1wWQ",
  "key12": "2ZYGX9MmiQcCbk6nz6CGs4mnS5ArEahCeHkyv2KmAdhfzAMkZtiZv9RCemNjpv7qgE7UiYTCUtUcYL3DZSmxQn16",
  "key13": "uR9zSZE1WBTEmPZjHRQc7LPnh6SzHCbHZLc6imFSBZnfKwxJ6gcqL7zJvVAq86PyhbZXWDnc4ZuAG2vjtfASt2u",
  "key14": "4EVgKk3i2ZU7DafY7Vbq1GEbsGttUF5UHtCGyKLqjGf3jS7XKFagiYAvRMaCDKRBEhariRX257jooBbMxEtD3f2g",
  "key15": "pqCqCnEtho9r9Y5c2zi9aGvp4HKKNvjbfXvG6ipxy488rGn7T4FZHdsVpUgKHAKWG2tt4vHCSMoX6PpH5BMB3Qe",
  "key16": "5B6xpZo9dfNjSN4LTx8ZNu9Z7KhNf18dXoRjTZH2Z5SdV6txMqZ7jVt17GJv8Xik6TXw3H48Axq5EDb3YdpHUar6",
  "key17": "2rPyFN5b54bzhtUthFSn5wVW948cgf4R5ftGbcJtHRHQMQrWzDmDQohDRht7BkBkHChiSX6DJkJybjRmQ3jSiapc",
  "key18": "5cpBwbh1a8EmDLfhqCBGBUv229i1ApjYy4PX9HmKgWu58b69mHkjntxk9JZ2gtCWSw98hFRPkznMafw5cTV57EFa",
  "key19": "5z3zUCbBx4yir1ZzGKwmV25nb8omjSuUWye9DFyfHJCqGhhQb3cf4TPT8EfRPQMqKCP7sV7Cj8tcTeD4foi6vpP5",
  "key20": "3qXSqsLYLaqqqMSz8UP41HYU98JkkXK9WPKV9HRNpz2t3gJNu2VrSBVTieBsiv6riwPNBz1kLz7u5Gdbjidza4Kn",
  "key21": "4ajfLXn79SxfetM6gdScFJp8AkoJgXLLz9N9tpZcyQRZjnXHt6EFtdnDv9xwUbkb97L2bQ4M2CKHpoyZGod9iFP7",
  "key22": "2XBvnJSQCcbyZ5eq5fEjbPab21BXHycksLtA9MKxsXEowP4s77kSFV3SA5z3y8e9fy7eEARDF6tybmdQtXHy5hkX",
  "key23": "3r37aNLdUU5cjw2PZiQs9nEih926BaYqie8P6H4WkaQz8xG96G1FwnzTbFBit5LzNBcCHPdeNA8Q2mUHWrmvRano",
  "key24": "4iYMvi93sa9gSr78sXF57odqZtd1gpCv1WhJ99AkXGc6pPrJNCTkM1UyNqnWiF8Se42t8RnBxz4nnDrUUz6vz247",
  "key25": "2tqeCfYnKi4yCNGXucyyYx3YhkJo4ebLyrG6FZB5hdb3Ajsmz46UgXaj8hGhQzwUw9jXMu5BPkSVAQei6uzKyGqj",
  "key26": "3nADzgSarr27FVfKYn9iHUeuQEKteN8yjXBHBrjXC9WRiRyLzXDAUexi3BYocVBTRcfkG6WfpxbRDFJP1G2Fnd6g",
  "key27": "3kPtPmdZ4KNJN14pVKBx2eekp2QP3wk8udhAjsfpGxUsbPYKKncYTVEE9QGzZanwzsDfvuvh1uVECznkNhaMUKdJ",
  "key28": "5sbovB4mKd1ExG1AXCguBvd4AeR2oHasuoXTWfGdHgfFegqhrXB4HRvXdf38G9AmUtPHsBy8SPBww72TsCK6dmCn",
  "key29": "4U7n4SeuL4rbQou3RF1PwCKBQifR6LBa2MmwzctTUFeqPuAB59L1764J3X29YT1oGJTbpFf16zro5mrwzDudneve",
  "key30": "2xtnGRpnjpKrfK5K5cgDu2nkrVHxvXYAY88pBZqV3kSXPDTHrGCAhLHcuQBVrEvfePR7gmaxWpU93QSjpHVYnB4Z",
  "key31": "2137S2gGSLXPKqUgYdt6Et1Wd5m8y8cgsaQJ5tn55pXNpt8fTxrCKwHyu7gR2o16mSwsvqyc2xtbcqppGxJ5yXwv",
  "key32": "4MsqDRGGiREZvBGCfobwD4a4GwdQvdZ6Pqqzbsns1ds65VcxJdpxY1KYGTtCWJ1jHiVifzZgqseLpaFxQbByonHA",
  "key33": "3AhTYTzxkjGobpFPjeQEWN2SYQmRrEK9mR1hCrjSQi4p4qkRuoMLyeYtJo4ZPESF95dMwSvopqY7FgBRyAfzfREA",
  "key34": "2HZFPQXyJTc3US8o429fA4uGVCmxty8AxBYxU5gLH9DkVuFHwmuqQPhZNaB9auBPaFa9kk2mTrmPtEmpthh7ZXHv",
  "key35": "Eqm1VnAtgMfRjztM9qTNx8oK4YbYTnTP2r5y59YLPmrLoXHxebFnPYWh6chgSF9AtpxHfjEoNB89c2uwrunGD6w",
  "key36": "4w7gBzUD8U77vcFUicuYZBpQu1ka1UDKUBtqLd4AzaEJdT1JJtNHTA3T6k961U1rUGtd3HUqeYPX4DxSVuDkAnZk",
  "key37": "2LeSaCF4ZnutTGzNzGbXNLqWZzN7g871xQBky3Pxxw2KJMRH4zdbNGv1FFcP7we839yi7sD1FHNCh9WLSy3BUkPT",
  "key38": "2qZvneBp9xCaBQPfFfi3BLmqBdTGL5H7HpQgaAULsZDF91hs7PqhUyxV5CuADVMr3L5tav9nC2A8MEDbpFgMSgXP",
  "key39": "2zkPW1fakARDUbCYFPKWRubVdb1KB7X6MvbN6H2F1qdw7ccf5sP2efksSmg1grNXnybXqpDvHjBywywEkRbdFxrx",
  "key40": "nHCN7eSaokUPs6n6JNiwFLs8kmeawurVuFskKCi2yJ3wrYL9ZbyeqmrVemc8MjrTGtiMFBrPdAsjBo2tGNWVpsL",
  "key41": "3dzC7eH5hx7jggRsBFB3yfdX4sUaUSDKMnxbZMpPoWUjZ1BiZSVs6Reo4E2pw1Xjb2Sg8fUoJ1nYs9ipyFyHgCY3",
  "key42": "4VoKakveidp2TCYcuN7VMoqUNjFVoeusCNgVKnX3363FL558DR7dfYnwsU84r6vdyUHgKf3HCFDm2ZWD4rzokPk1",
  "key43": "hKVLxLraNBXVhqmJvELoimwcXghSBFRrCVVPNxahsQ9k2uxmLC9YXguHtWXAaSLEPCboxccdbHaRmJKrSyFJMGu",
  "key44": "3sQZJJUTocKDgN4N9mFXumMkuiHZKmvQKv4UDSQT6Q1evAhH6szXK8HFUE38S4Xa1oRuKbjjPVE3PByU5r2rmGjf",
  "key45": "bdNfK6CCFegTE3xPmVGkFv3Nyn26kdpzhXL2bpfzHkRNn9U7CV9m34TXfYM7v8wqYV1s3aofQAfmiHwjjwrhrC4",
  "key46": "4VX1FsS2aZoZ4PEiEBHt1Kxy5At1Ko4vPnvju4yiPMBLNXR5xUGWDVL9V4myaeQ3f1xKoL4iJZk2adm81gLsvwvG",
  "key47": "4hkQ52LYfKvScUEuVw8r21GEzFXhx19kKuWGmM2NTdZc4zhrRsYtci5g9mU1W3gtzcAQTcKJze3fWUDXBU6L3s6t",
  "key48": "57jTkhXu7fTVLWGceXPvqGMsLZKfSJBQ5dLCYYD3ogchKbxXEbWxdNL7FS6tdj6REyvevdnrADjm95DvhsBqaCVS"
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

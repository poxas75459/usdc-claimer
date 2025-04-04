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
    "mkZP2CjPJaSW7SRZCPs7WjRdnHHthE6dbovwjd6EQQCGpxhaAa7Bt5i3dqrKeiXjzHHoxbpSY8sW2eVzNdJc24Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63WyN71xXukYwR4n25fig7uhsc3iiC7F4Q2ziKsdjNUQx6DRMErwngS1xJkUwCj7feCFAoNZpmdkevMQ4BPTAcwP",
  "key1": "fb7abiwGPuMnkgHFf2xJQ32gi3tXxYxrxfAjTiCidbNqrZo3UocFptAWvLWFDsd7bn57PnHvsmHtbsJshKsgqRN",
  "key2": "QY9BGDvFCwrKRZHSaG3Fp7hv9e1WqEJCpZ9npehavB3MohgrqJqBbvqpfEspBEVz4qRJzy9jDbiUC6xNC9Z4H1x",
  "key3": "62eVC5C9WowPw9syMxooPph8AFtH4PpcT68DcXKDsZ6rsdVodiNLWz4wtzP1PU3ED8NTqrYmtbKXnNxsrAZiQmvq",
  "key4": "v4VrarfmRkuvH85VTcdGSed2v8wSzGfmQvZxwVtETpufVbYW16Xd56tDMuhtCfxcepzBtCXGgtqCx5SpXtMMcLq",
  "key5": "2zLDqhneMkpgqaiBi3CZ9oy2jdYBFrMEBpNX3ZvprSEzXajWmLPBDaw2iVdtktRRhK4YE6gpg7PK86bDEeu5m8XP",
  "key6": "4FB5BLd89yYkiSHZK97cs5LniSqrAXvQSdh2M1Yd3wYAf4AxKT3bWxe1gKjjRVBG9JmU5aT2ZFnuHMxjS8jrLdWr",
  "key7": "cGjnPZsmFPkzRki2wGp9VkJDzVrhRPqtsaXyq19Xg4Sh9PdhWyVYBR6m7ndFHyeD6PCCFRf3DmZbzbY6SKDi5m8",
  "key8": "2gL9TTWB7nk1qVq68peMEt3xB5JjJZn1qKRtQWryYevRnY27GP4hSZAoSdkpcsXpe1SD3GRJ8dZU2iwK7EKAJ53a",
  "key9": "3G3LQC1knZBKmnFsc5tui8niUCpgw9auybWGusXf28yqCuKew6gHcywsMvBbzCa9g74mWWVjzwi8deyN1WBkncZt",
  "key10": "3WfHqPzmZ796FWxQyRP34gUtqvZBZho95snKpdZAEpsN9anWsdG2CBVinUK6c1g1WAwFvzEgFQHxXdX3F3ViRV8U",
  "key11": "41cqeJTqKQ1RdG3RR2T6Fwm9dFHc6uM7ZpwcUD6MUqMjjeFUHTypYS96SNfjaR6JdzrNxRK9cVJMXN2qYj7TfEX9",
  "key12": "3iPfsjZZPgosH9ucUxMPHxan48Avqeaym5zCHDGAunS4LRUCmT5oUuScoTaQyh3dH5f8foQtE7XUoPB5fU1vhq5P",
  "key13": "3uhWCDRLyTNAbGEP5jD2azfc1gZyV15JXCzxeumPpbEUoDsU6uwzi5KHw1xeantLEYWs8EMHJi4xXPkqvGWPHrwE",
  "key14": "31veHRDqgVAM73ytrTG11piznyvJ2bdVobUjPY1TNEAVy4tVCFVv5tKf5e7ToH1UVYeh4NK2jWGreRtARq4xwuZ9",
  "key15": "4aZutcgL1UykXmqqhH7oQP82Ef4psitRYmDvgWt8YSrsvGUGJcMjGXu5fBx7PDcLc2oMwbjH82H9YitVdMy3XLFS",
  "key16": "31CByvEwpraAdVHGr8fWzURwUMkuHT5zKMM9bKrAGNTC7P4YYDDZd1YawpFVvb9mXTdJfHuCTuhvMiZoAAtiQCgk",
  "key17": "5tc1Ws2uSGTpnkjxHkaAWdnPZEKEJqRStBBkGUVKcBenFbkmzYguaoPPBQE3FXXktBceGHXkq8kfQJwt2SUXvW7V",
  "key18": "4aB27S5wNhzfU5FLantWrVCvHLUYYH6GmBJDbLfzKyNXezN3C11mGKGwqwn3eDep51efHTqJritTAd3Ud7pFm9St",
  "key19": "283j5UTfzqejyt57Jkp8PY2VdxDoL7t8jLCpJRx81nwQp5CgdSECampJDKdHvqZveG1NYzhY9fxtHveKGVo4M3c5",
  "key20": "3ddXcJ1TZBko3sU1zKow7vsRzTTNQ7m98ZMEzZeE11bjVBzPwAEFwkUKtNdR2Ekh6Mn4oouCaDZtDoavPvxR34ib",
  "key21": "yi8JZNt7GtMTeKx6n7d1aR71VVL6fjLSGAeQCVhnELGdwuha41XtDmerHWNdmqjzNUXWngwYRozE9CQeyC5jo9C",
  "key22": "2gprbgicKuR6wv1HwgsNAPSkWRruWn4xu7ouv4dY82RhuDCAXjmo6C34f9hpYWPcrkEtJN5bFev1deNZKAwmKzg1",
  "key23": "4ViA6koZnk8VP9Y1RPN1btwWKy8Y8gvHkmnWSQUhajZoEvsvcPq7Wqtw9WNFUQX7hMENjfhB8tvz18LrMQ59dyNK",
  "key24": "4NQRwmRN3ESkrVHF6TyX4db3QxnUuPMHZvWGTzkoyVDo4ZKWLoumeDAiCKgQ68dG3Td3JggwEeYkovGk1kmbbV8w",
  "key25": "2gbb78AfTEuXKDLKA7zKY5xc7Zhm7BnTNxHQoofb2dnmPHPv5f6S7UsJNjiz1W5xGo6RjXSZ9fpajAy79zbY3dy",
  "key26": "4C3rvYRBsoSTGZLMv13tvMxSiccs3Pvnakue64YrY57k7yynJ6udKUoZ7vn7p369RaSM2JpL6LE9zzo842Nfp47K",
  "key27": "3XEutNd4qKi7Ar3bXBeBbDGJgHaMd8pzAEengvAvbQsuFrpAyqZjmewD3Yobh6AJeRrKj6YbUAHF7HvaW9EvKyeh",
  "key28": "5LwDfgUiATqZkqGJyk1S1e1QmTm2NeoUBfzxENMd7CqzhVJ4MyHbdAjhLih1yASt1ZJmk1a3Eq71XaHn9WuEsh9V",
  "key29": "sMtydtSVzXuoSygEYxdooucHf5gSVErGiqDEvbiybRyi6aN7TsDdMGaP7JV2HHcFSEArvaMuTeUK2wwmM1gcTMy",
  "key30": "5zfAexARwg1gmvpRYGPYad94KFAMujCb6Msjb5JMMG3jgSDsV5uPj2xHpYN2zQSP5v8djbRCG9mUeXzZGw6YqJnc",
  "key31": "5roA6si3W5Bni33AknTftrGtEuSgwngG2mJjddArnLh7YRvACMM43iGqyTQB3s9pRL3JGZomLsre8gRJpudM7QAD",
  "key32": "3hgGE8o2Yzcj38y5g2Q9gCf79pPpQ4B95Rugb6Q26AiMw34mHU2i44XGCqMK74kQ2YAHyituZbk53Mf24LVEceJQ",
  "key33": "eC64yon1bFmjQg25ThKPkiEjvWRtvY7aLpkRVLVPYDfUa3i5geuoopFx2ojEDtsRPp6ynmCHACa3W73tT64kneJ",
  "key34": "4vWCicZvZb9HYzRiBgZLwXkmMH2qUwvqXpa5j45919pWxE7jL9tRmuNvYEn1vK1jafCPWetKFYc4yDxT2Le11RTj",
  "key35": "3gBJpjjpsMgNZsczKjfDUiE2G2shVi2LfEgShphx3L4r6G9sNvXeTEUrenCD6TYEtzPnRherSF1WXsf4mrNwdmNh",
  "key36": "2qgrNyWQ9mYur5AToXPb3Trks4r1aykCjKQ3atXKbaooRi8HxPEtCTSw4U16vvnmukt7iYjPF4XGAMYmTniujrv",
  "key37": "4DkfbZk6pj58vRfbeApuuz3dm8rNFeuuhrQumZoGvPYp8XguVA5T6H5WHWCe8u8ZXRfgNYnGASkePmBpQpBwAbfB",
  "key38": "3duwX8EYyakaWZjFwx9945mrrgXjUpS39CRxyG9Usn4SQvzKWZC4PonSnu3LvwnivuNpdpqxTWasL7u9d4xB6xeQ",
  "key39": "3Eosr8TdDosNgDHDeWDiatNNqebtT3wM8qTkcFWmtgEpLd8dPquK1sMb54BBoRwE4ezK9Sj44zGLD5gAAb3QuaYF",
  "key40": "5ZzTbjsNqvLsr4VJVzAtyh2KJxDnedZvAwxiZktPp8GPHaRHhFXezUErhyUmzms9T3Wk5wdm78jAgNLVrk1krShk",
  "key41": "HrB7Dj6jbfWgkfT8uAdCdseTzqfhmbBmHgSo5PV3dXeFzgs7KEKG4k2BhgJUpibvh9p4Z5tqBq1TuhALLNQ4WD4",
  "key42": "2XgShB7eUQtPExGWitXrRLc7hmskpuoziqen2ag1oxa3JPT8CdaoS1PcAtCGD1ZucaPNwKsFXPB6S2raGietwkiB",
  "key43": "53pFyqwt4ojLD7ZcthGcr5CMtzWkuXehSY4kpFb4bTnDLWp7Q1nWgZZFBym5Bbyth29KnfgdGAjhsjMLeDSPx2Nn",
  "key44": "3ykc1SUgsSm9zKd7nivrxW87gActo4vMEDsvuya2W9VU47mE1Nd7CTd2MixMzb5K2WMCdAuePxK2zC5cbRqH9QFd"
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

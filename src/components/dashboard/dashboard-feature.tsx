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
    "Uzyiq4GT2rhffxtt5fASp8cL1VWEjf26K3NPgSzJJJUVj3LFsZmBShDixoszSmxv6QYLJiCZL7mHnbwj65A9CWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uybPjNcBYPC89UTZ8Uckjd3oPzHarKomoQEKmBjzVLTmqu1MLwJMQMDeQPhasx4bt2FnrfBxwLTqekNMYVQNbs",
  "key1": "2CFxXUM3zQCTPx3rY9PE3EBYVmrThFoDCszcWJkzHwsUWvL7FF2fDfVLWqQ6GMpUHBCDF5MYtwn6rEFzKCyYjKVR",
  "key2": "2bTQz5Em38XaveSnGmnYMzeGamSFMBxYNYccr1WaHYXdBysuJ4XBmiBWE99aFhNJJhQsW5YioyyqroRqJCnicgyN",
  "key3": "2N7ypgGjWBj5VwrjQTgj7FDeS5VV1oJPtcZkH7By4vYGWmPRp4CsopMfLAESUidQzMqKvveFmucXRZfxhzgRw9pj",
  "key4": "4p1p5DVziG9woDf6TaqMPovtdxYVSCSToXiCM1qB4xGRUHxYAHhyV4ovWyPZoS1cMWmLL7qrPswVUDN3vuE1yX7d",
  "key5": "61Y67M2S7dxSTEARDcEU2A3SX41krCFVQTFFy6213Af72a24FvJt8KuZRhKPNHna4278m5LCD6M8rLf1ZEdNLcr6",
  "key6": "4C8RvqXpfPqE9EwPhJBiwtEJoB4tRpjjQNkinzoGAwD6EPmDKz6JzoMMHBrS1p7CFESZBe88moCY1fLHAtv63ktf",
  "key7": "4SvBLPATahLp8sQxxa2JMBGtTGgAsES1q6kfJ3Z3YG6X8VwAXU28eXj6yhuRS8YDqyAkTjfcERxCfzcQjRWgr5Qo",
  "key8": "2u8xT1bR3PZ1yP8JPcad11mE5KzLwiASbFpNXbihonVrHYErfTmoR5SqThuVgSnc7sEfdnGUR5sasdV4oJyJ5vtN",
  "key9": "3fv8TtLBNEtAbKfWQdS5KJpzDsDM4eirhzSqUHsuCEQThwYZXyYiZ3tpsoi3j4zeH5agLQLQMFTyJVDY2S3EE3G4",
  "key10": "5Rape87VJcivfTMrs3LiYhwGcipv2RLVTDczg91uxacKKUEoFePVJxJhjwf7buhgGHTmAm6V1DtNgNexxEzdyj4i",
  "key11": "4Mq9eaXUWYSQ7j9gJyWkdaeU63Zu88b5gAgoLAXWzCHUYD4G5wbmqU1tg1LVBSivbaDYTZVvkiXCdf4FTyGaTh1e",
  "key12": "rueRt77fDPNhFvCGQ1gm338ECotYm2B2Ahf8hEEvAPdAGxLicQG3xLhuqD7pqFtPMog2BtBYVasDjnHCZaqwB2x",
  "key13": "2zAPR8Wzp3Q8ngM8S3izaCeYkiLWca2Ew5zc51Re62k85885BraXXMrdemYZtazzebzfLy7utFh3X1ntTjkaLiRw",
  "key14": "4Gm542udKEHTi35bSXVBM8hEwPtXaBHET1msDWn8zYMdghg6132f4jE9KzrRwYQmuHvmoDyTV2QQ2Xo1VaTv58Ag",
  "key15": "23U1xV8P5VCicnpPJQGJa2mPBr2jYBZT3mTPcJ4EZnxexymwJUGD2MbX2fkpfVjGFZgiXyK5yp8dfrUwiLcMu7Pk",
  "key16": "5rtwm42bYRxFyJXE7dB4ggffiLCHvPnSbJW29XFTGnAJ6ru8fKa1pLYnb3zV5uLKA84gwaJAjUJVBBNmYypBuifv",
  "key17": "2umjaTBg3Kn7DmS4w21MhssDWes9ohSkmnycgAsEYmgXBMYDCve3Mi4coGRQwY4AsDdPxEUvLK8XSj8QadphKWym",
  "key18": "5gsJVnm7nMNMynXttn9bcWKjtQtNDpckvMES3vHLeDLmHXnqdirmzF4Nucdg5uKAT3tTQzEG9dFH9hC2v6xFL9h6",
  "key19": "28wj18YgJ21teiufiFY1UKzuWrfTKB7ue8m6t94WNzQvciD4RddNjJdBLeUnWTspAxom4htvzJs5SrF6UFXn5DuE",
  "key20": "64uAiFq6zJWfvB1B9CoH67icX9pypMthGPoVDqHSMuVF3tLGNa8bYsvnqD5TpzgJRW3v2ASKJuq1k3hKw3b2WbbL",
  "key21": "cdzFR4To1oSjrFCSTzesLSqTHxbCuvQntCt9uRoQYyYLrH1ePjtgAVEaTYAndrbWpxpKSHBLKKUHhy9sm3E7Tw3",
  "key22": "aZdnakrCthQVjpkS8e9So1rWavvZ5m3pyLD44SJc8YQDRRFgEN3FnqZqMF4TLJg1yTwvJDzDB2a6fbMHa23AffB",
  "key23": "6695G68xbiWeRTkHqKHLJBpvR6BzCYeuAQgmqK9eUsGQBzyJ78jisXvt6ahvhgfkLNTTe9YWBuwrpswn5ngPAJgR",
  "key24": "2rW7HpQy7vRoyP9MTLn3z9nDLcB9v8vvUxAEr4qHecpTqfKuUTeJoJKLxhBUAk7MQSyBpEZ6aigYgY2aJuSuyJfq",
  "key25": "46GufCmMTKqTSWo7S69Do5Z48NpsBj2gADEfGJi6txn28DPNURv2YkbuKaW9bnT1aV4koC4HCoohwvYSEQpzWxoB",
  "key26": "4NxDJeJDNhZ2esmmxi4V1WzXP6qrQfmKGagE63AAZKT7UcCGYU4dcvxaHtfsrPkUBSU69yUir7LZPtEjJPk8gi2h",
  "key27": "4ETaZpccNPU9FvnDpwouBdiTFnUsgC8wLa4ep71UGhoLSuuEPjXiTpFgDpwu6XDMVmouWpjBLxR5bVCMvTasQe5w",
  "key28": "3QhakfxXALfskoPCEWEZReJDvvYtA56mYRmtkBS6rJRqtb1h8euXCYuvtP8qbh4YSyTGrA8Wk6edu5SbSZCWRMjS",
  "key29": "wfPEgnm6e51JfqNjAPJ8SvnXJ3zcyUn7mUCD7fGXTZgJRp1XDtpBDroKnSudQcqFqKha6FxDJniq7Q8JMZnbiCv",
  "key30": "3esNfQAyvBRDZCn7TtXGHKtQzdWA4ha8XaooiGDYQxMGNynwMEDPQv6h2xgH4V5J6R3dKms2Fow1WmJmTDeXn7p3",
  "key31": "5ECUmr6h5xr5ZwwQswzBgJkgP68TX8yd6gG5D9ySnDYuXyjayAxjdLk7prJNVQPSL8MEtFG11kQnaveSDQX28RiG",
  "key32": "DPM9HESp8jet4hqzT6d8YNG3mYe3uNswnJPpGs33kMJCqew8Ds74NEBLcWpDfuKHm8rcPZTVQxyvULPdfPjL6H9",
  "key33": "geTFB3kLVKBZ7envB3dk4Y12gLGhi1dFUZPSmZMDwTNErashM2HRwnyjYTqxPyPEmZStHsMKxRxPxitQmS1fBWG",
  "key34": "JpEL5jjU49cJ62nn97QARgzvhgbSMHCnSd1xd5bwtDwTpJwoEeufhsc2cjyMTEAwD13ueCcT9FFP4npFMphxzv6",
  "key35": "5F9S87DSrThJyG4Bx8aQriZpNTgihDTaqpwQeCA6foipWeAbveMDnw2feBKodFCAG5oUrjtRcmhXAMkpV7JwWS38",
  "key36": "21SsyxPd9TjsR5SkjnQJcTKyn1BuWWBwgPTuoHUPnJ4fW8b4hSLacPfFBMfNiE7ueRdKCXYzjNfLke6X2372WJ69",
  "key37": "3drAbcphJGmsDLBj4wruXeRSKPS3mWgx1Db3YJA9hwgseHxnus7a7ssNuHecoST4Jp15qApiADBGgkyXAXpDBfkv",
  "key38": "3mmFrEyUS9ntVSZXs7UXLKyMPSdT6AgMSdfrvsGa3fgsrGpxSQC8s85vXmMBEM58vKciJMUG3eW67gjRUdmK8H7r",
  "key39": "3kAmR2z2MZS5cZCSg8BjLVYCmyWQ27Y1ZPf3YqhmKBMd2KCj1odL4WyNKqx5yMt5ZdA1iFfAy4x9cLtqxo63cRV4",
  "key40": "53vKHvb8dxwzXdgss4Gaopz2ARW15d9cGtqdG4jcLRWggCppM76YpS1Q6ukRr1hWMqDnToSY7LHLXQvJ372qn4W2",
  "key41": "4LZ82trqr97rkdhFM1FWoem1zkDo63JUuqqNVHqNpSYMJQyrMwW8DLY9Jg97enKtqQZEQSfy3aiCUvJtcSPNqn3W",
  "key42": "5ro4akbWCssHj77VhHtBMSMe9tR7XTtnGmAfA22rQReJZhypnnwShJfaY3dKrWBs9am1uqaBqr45DsnbXp3KxLKr",
  "key43": "65KvKGqjhQEYyrFazwEBYbqUqjGoGhh468aZmp18hee9VQJx6C1raxRvbEYjPiJXFwqM26tHoJk9jDncSnGn6gcJ",
  "key44": "qBtXTCunnY4xXeFdgFtv1XxaVjVBgwcGLemaFzfTqMgPykgeyjPTbUp6tppNjYdcDv3p2XRpzeSQhvSTz5Qp5Vn",
  "key45": "4pudvvjQsRp1ok92ULBY2YQ9mnzwfnqGq1XcH92K8gvK29bnsHeg5T6jRSdRLtLQYACFNK2koord2B7LtXMEWzf4",
  "key46": "2t3LW4H7Yf4dypZEbzuxvwyviaX5npkTPbvSjHKimXkSd5AzupESUfXidgjio3WhCBF7pEry5UWf4UC5ZSiNTy5h"
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

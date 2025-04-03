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
    "34wvaJJR4M2cVsDYqJANWe8LTzXDjTyfs6ukvZ1XXhtCLEpMpYk4jVHKzgBBKNYfkWPt6SKh1tLrdbY5XtAGuB6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XPDw45fexaDKdBaLiQ55Knrh97GaCb4wdeTPxVecQUUi86JTQo9UwsKyJ8djoo5vYpA41WWtn2jSHVsQWxBd79G",
  "key1": "43qsV8DoiFwJUVBwfsndHSozzkBdqBmS3UQ7xiy9ZbERXkGAXmgTTfJChme7zZ3gEZgD2veFQVCdk2Rtthn4gTnY",
  "key2": "45E295BjUMD8SsrHPMgBq6XuucRua4FxmuFjoD73PaDqna5E8FtRnBZYgtirXXzcjLyfvzpytN29ZqdMCuNM31uD",
  "key3": "5JdNmEwVJuqBDYYm3mLAvaTTeDqe9VqYVSvUpTaYGXsRx7CvsCDGnybLWKpKutonvepWePwHtMthY8akCf1NYMAE",
  "key4": "5bFPYpWPdsfNu1r2YEBgcdBmLzz7xby86iDfK6uwmQgtE3JUy7UAt9aJ5J5jer6rZWPjWMuJSzVRppySCdoHN8tC",
  "key5": "3f29FKgmN5Qupfg7PKmnEwpAXLdyvd61BnqHbLSVJ38qjKkxpTHsvgHRFbVVRr1Tbo6orTwxvo6GTLZAoyPpdNvj",
  "key6": "4MVhFvUiSP4PA6mJq8JvcwtocwgYitD3kZVGkspN857PkTjkvGvEWyQyk8CZLQ4EEuCsmLdSN5ebsM9VVbAc3yVm",
  "key7": "2f8Y2UgVw2dkRfq3xVCaAHpP5yWoBvVTcyH7CPCWaLowSg6PPyTL1euTESVhWcQAb5rQotn6A5WLMDewQoLdRsJk",
  "key8": "4h7GqRXGakVq6LQqEZ6Dy9GpYrXBq7gLZbujoL8Si8v4DRcrA5fx4zB3d2BSmAFrZjjmR2Y4P68iS5UaFSYLnemi",
  "key9": "4k8ZTM3s77WgSQJWB4BWDRN3e7UCsDsxEihmPmoSPurb71EPRsQrLQ7MnXfLMpBudCcQFKmdMbkCZHxcLTAAy6EG",
  "key10": "mAx5XoeZU6kFKLV1RokW21gbEUf5SVn8jbd6DyysFAmcecmM1KojfdpcGjPkgLxv1GimY9xC7xjuh7EU5o2UGKc",
  "key11": "3Ccd336Uzm5Xu7mV1xjJD7rNQYoYSqkZcMwiW2gXV6dkHG1zi4yjV8hqTf1DvqwQRAccWEtwy4xbQHSYzgQ2WSUd",
  "key12": "4cccnWSq5uo6HJ3yLmpkw6SAwAFZReghZFYA9fWApvHqdMghE1P773xrU1ttX5DWt5PUqN5jxVzYW8wmPur3fSk2",
  "key13": "kECZ31DicK7wdWCm5cWuaozMPQsoGq5jWGBFRUQ7EjU9ZSt8Wb8P2PsBA5k9BJ38Mh3Ng15Y2e99iqVG19ZL49U",
  "key14": "4pGksFP2EbJygE9smKvLZqutv9BGeaP5Tzoju1coyGiBTCsDUdxL2LxjiJn26pbG6Wfm9tFXQCenXiW1ihAVLexc",
  "key15": "2urw5ANQnFGDtYzGTdZyYovz7XpaSiGEBTb63ERvYTeTWrL4JzfXDvXFqEVto2Lh5GwnjLjxxDBBUqUxbqZFmaoP",
  "key16": "2s4BUHHq3kv1NqchtDg1thHWR4wxDRn21awDT9cSV47ixvWsSYpahvKVaarbpi4LcRZW6L2iLGbNWVPxiRSsJS1",
  "key17": "88GrSLnSSfuD2QPU6FfmycRAjeBriPJT14ZN4rAEFF1oYNofMUpraRf9oM1YBn7Lq9q8rstXUMaEVVpGo7RawU5",
  "key18": "4pVoSASVb3LwwKw7yHYMhTE98XoLy2e4P8foBSvkBvLQsANSaxp95rwGfN9efxqfzZwY54ARTz1KTaXWqz8typAN",
  "key19": "5MjJMi2z9Mpu7dPVczkj9cCEsaqKcJKZdUd3w6K3WTMu8q1SY5mtVCZ58PUFkMG5fhD7GK25JakQ4TQd3ALqed1E",
  "key20": "27SfxqeEvQYEoEuBC2rpQah7Thfi4LpfJF1twL369ywWDJcC8su1E8NnYLFvrBkfRZDLowHEBzXriSYevfxKtRyh",
  "key21": "4PzPPqvBogi6CPo7xygNHZ3g4NF65EbFtL3YHpQdR9wVLcC735T8bVRTUEdECxFAfXK8FFpXkSHELMeaD5cgy49W",
  "key22": "SnxDtfeatRuHBCzqgKzpZKP2Cj2s7atzKeLEsGv8fcX2HDXUF17gwssyb8ChMNVZQVtFH5MPNRnGvEDcPLYiAi4",
  "key23": "7nrJ6UbfCYVdkmmChZnxv8WiQjnrAnzRMATNbCbJ1gdnea35GWXb7RpNKjibPgHqfB7ZKh1oGcsJQP4zfqTCzKt",
  "key24": "64va5aspHJXGuNv2KZBXG2Wx25ua9nezwLnjjvrEaZ2VzJ7vMRioJCr3cz9et5XUgut4Vu5EKPBUMbLqSj8kyYCZ",
  "key25": "ae4hW4RYckkAeeiurQcgHukB4mahytdSRtWRXiA53bdew4152mNDuE1BgyPN7kffuS6Q3wc7rfwA4T1h5juGzpD",
  "key26": "3YrphJfM61FJjPk4UcVcQYj8qoBqNRShCRZhxckGYcqLUXpZDDgfr6vNxv2hfh9QM7DkPPdKCugDtj2eES72t4Fq",
  "key27": "5QLgmto2Hh88CKV4NRut8ffRVAqA4g5WmA3nZNL1tFdouMUuxAELu4ycdWGqN3dkrnmdQWBBLc7xAVwyQHRZtZHr",
  "key28": "3uYNvGPpW9r2zkpAh7pdm9U3yBxiL1HCJYnq94pZJouK3APnUaoCSAFUzVuBJfTvXbaJm3DPkDTWvqJ5TGWs5GrH",
  "key29": "2wxUB6TfWmzQ3McdJHjS2XD7iqAzYYKbjzZFezqwPW9ZWDUeQqbz2E3PXb8SXLwrKzv5zMdHWkRsSJnVpT7Wzopb",
  "key30": "3wYAyf1ZDji2aC6GCS49MTbQZ1JaK8ChyQMbgY5B1Ho7Tn4D5XdioNvHbMJSmjftCYfTY22vD75wCz569niuo1yr",
  "key31": "26dggnuN2vk3iWRECsGRk1PFHPUzzDpofVUyMSLsQt8bZ7nwe3JCPsAfjw1MJ8MXG44p4QrzqngcpC5qbvkxzAZ8",
  "key32": "3DoBZmMqckpa1oDZCLfMRxdPDJaBFycFzx7B1ofZj5msuQN7zbaq6XngBBZhYetPwsmSg7zRGB85TY6Y1694cCFX",
  "key33": "5PTrsDyg5L1Z4WhbsoTMhNgKFjKcPYgAUNKYULpgKtsiUtCWRvAatHWoF5CXZFNrJtRQXhdFeYKPw6KREVoDvdGq",
  "key34": "2wUVd1LKBxiqiRqLn8oJJUP3WJG7xuHTEmvFhSpmMUT5TpASmZvk7BdwrftMWwFc33ABg6iQsEycbozpazum6qgC",
  "key35": "3jKeW9g4JEhaEB8BanxyzTWMNpGsADACCYfFNkoCQq4sGEyYFYh1mq9joBLnTXYZ8X2GHXNAxjPY6Qo6KcaKEiAa",
  "key36": "36Km4HYeSf5jXhB9dFifbjFyKwHK5tpq8RVBCpAE3dt6GrxbisghX1BybazqCWD9VFvBHsHBpzuKjzBwiWCpHdzb",
  "key37": "3PipCHQQRbsmpBxaqvPPyEsv6k8hT6mtQXLwWKCb7WZ8LdbwE1E5Pg8mP9VLgVHDvTRoS1yjiS87KLR3trHP9ipN",
  "key38": "5LW5fo4CWeXuv1SL3zWjtd5QqAucRh6EyfMLetqJqu6YnWRu7yhLJ1LfSYCJVLHLTcUQeSRn19v3K8y5xEaHorBH",
  "key39": "5K7jszbhhQ2itroA7jHvMufmnY5NH2ujus7PqxouzNq4uPiUVuKJqCTMmtxM5vZAEv5CNjfMgX4wteoSyKz7u7kP",
  "key40": "5Xpft4nJNQCeUJDaLuBLSkrCxQkZQ2X5Z6TNxAANRA9N65S9QXRChCB4uqHzyFDqjNb21ZutMaZpd6v1tQmKMHZw",
  "key41": "4Penx792xhXQWxgmahrkpytZg6i3ZSCMGaoyNQKjonUsTexezx1PhLQf2xKZuYSN3NHsCBgoJ8B4fRwrFGQBSehr",
  "key42": "4Q1duc9en5hUL3nxgXBS9LeRaGyXaiZvSoS9JcamtLAYhXGCKySxvaSVxa2Aqbs17FiEEevab6ikj8wAnoQqwFsg",
  "key43": "rrtvP1kqeeNNdNDWpSd5pmhp4mjwE8q6piK9yohvFh1NCcKxpnbNdNowS3YPNL4ju14iEWNcgVoy768joCo5far",
  "key44": "2oevzMjLdoisnMAQhNKpDXKyFCNhgmF7KXfz8bufF5xn2v9xxM9zxUHqDuqLW1LKT94R2DWeXKvUsG1kkX7UXAd6",
  "key45": "5KTAqaCLyQH78W2L6VeCRbtLkFE8Zn5nJbTwadYTF4tm3NXbYQ1qMegZ9FwGG8BDAqtNZH2xgCsUd9XQHJpDZaQN"
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

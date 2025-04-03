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
    "48eUXR7TY5QAxnQo7XiUkwX6vsS62VxCvFT7myk7t2zYjk6qe4hF667HPZ2x4VSRUEQPdmHYXhXZhhLm74LNc7yz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92f1Ga4RveL5iCN93TP5KTPNwYxmfK3WaxfdwrKs5GxKoM8ukHxuEDbMXVoM5xo4caT4dAGeNJzNbyvjzs3Bm74",
  "key1": "w3vJH8rYsPV7NaEAkQcRyCrcUSqu5MEFBQG2QEEWJfuHmmdGQLxD8w2sxdkik5CsahtuGgNABXuf2BBXWQGUL2D",
  "key2": "5dYpSC6acWbaUUxPtRJhPWW6s1Kvo4YQvFWp3xYSFVGpBqdfCqj9qqGscBuSgVUaSAytWVancQHjxHWPBRnRkdQY",
  "key3": "3vfAmC7PaRqdrK31g2h8fNuivWxzpsVXbZNxnbndTWmCy9fBVBVTW4GgmjpU3D9KCmALFck6mtzcbhTJawK1HdJH",
  "key4": "5FjWZXU25cnz5JXqqnhGSsBC1N5x8p8vPjzbb1gnCNXhXACi9KWThfWxGjQgtaumRJPcGWciEC8FvSfcdNMoV3Ge",
  "key5": "2mEkmC12i3GsioiytnekY5W3JHMPDAmimFBRCgr7SJdWczcaW422Ns8MnGkDtCwu9RfZxVX3GpeyfsZg4P11SEBj",
  "key6": "2G88hRw1H2ybkcVqYpdru6qJacAtf6ZzeqPzZn1ifMT59n7cPdtNzTK96ExdHuArnPjTAZ9KcSKDG2eGyK3arwco",
  "key7": "3QSSpNTGisFkgaCBBCHP227tnqrD4WxrVG9YDw4E2rRrNTxaXMztHwUisFQTsby6wgrZJ29w2XAd7KBg1Wv3KvaA",
  "key8": "vgDvWACZWxVBfYqJWrfriyV3AivG2U2oZQNQV3Bjj45ZQr2K4cHLdEj5h6kFJRBXx6MxfXSSWakAmSR4NBuDvQN",
  "key9": "4M4DBTAUERe6yqqcVLem7WMDmU6SerDeXuxvX9FFfuFJHsKPLrHtuJRJASvxmhaaUZDwLG3MTM7yVGQ5LptdZm6",
  "key10": "5RTPtTmmcKQBjYm85EibLxMsJSEi8536z9qHM8sD5KL5PdWau6gSESwuRs8t5h5Krc8G3aZiacbLAc7QiuLfUcbp",
  "key11": "3i8bvzqh1CRrtU8aqnA3ZA4idPUCvGKiQqfXeUpG6ghuciqHAiJcp1fm7qpaS59mY7NxTUeUsLENnnCo5FpNhFn3",
  "key12": "21dzNDL5FkdQ85BSezsymUve1FzyDRFF5ami6FPQUnDicLaHc3T3qRLuHEzWN86fKUEtiKQ77DYhNRKan5hxPwnV",
  "key13": "47MoTNRgi83pwbKUPjNjgZimi2cMizzAJDftR4p5Y9ymnjQR1qkRzpgvRu3rCAa7punmf8omn74uT5CzMbj41cd2",
  "key14": "32DkoHMrZVd1wPUQDA4q3wsek2wNKZiXAkfPxkbEf4qnvs3WK7ViePRNooRXBNw99nqo3R7srjwWMkZGSqLn8YVk",
  "key15": "3Vitr33VVPavo9UC99D64JYQV2CUChGjRaZuaQsCu9kYBvDFQP1swqgeE4BGRygdg7BUVKq5iJ6KPGzjZdRbkK9C",
  "key16": "4qDBACNZnvAmAsQREJhfakqJG7vzQbNWUvVhjVj3Gs4B2VPLr2yii8rmGHNsPFk87pSdZqEFoec4ScFF4qu8k4VB",
  "key17": "2zhtdAwwExR62TP1U3wxFQ52CPeZzVB2vgk7L2gDgNPYRDpTpEy8jfgihw9mR5hiUUQUtwuxMJrkSqKxtYBM6gAc",
  "key18": "38Ugjeu5GnJy7hchNBu3Gu2HHkC96zTk4F53WYJNqjNzUysqcHTyhYfvyeLE6UgNSrm85qdWTqSTnVpbSs9nMLYv",
  "key19": "3XYJ4xkmTsQrsM9L5K12zZbFw7GGNsR3z9XxkwZPJWyDKpbPk69QX7eLvs5XhSs1cuqVDjkTwp4djBftngeaVFqg",
  "key20": "65m3wPRRJZaCL4Kpvp7rkbFgriHEkkYgadtbgqREsZoUFjim6Fv5ZSB3eKFryVziWYN2xYqSTYnXQTtp5eSJsQnC",
  "key21": "2i4aaae25MqHKRoe4vh9kvMgF5qTmMFAvuf3pyBTAhjdMb5YDB5RCjsDgFpYEHiqM2Zx31xAoeR4XfDnHKSNRwxX",
  "key22": "2FQKwvk5S9zsitcEMwzbaVRXjk1Hcr8gakGvB761mmtRyvSCRWwe7uGuQJkJcuW5jH2wSLb5She9aQW5Tq4ejKop",
  "key23": "3nJzY5Kr7pYf9bTiSaA6KnMhgtjuqUdqkb6pottAYmABG98S8XeHdvgM2hhLSP7DB1TUaTV4x8VJKuKD8Bkdyox2",
  "key24": "Sjq6x4gLwa2mqgP2ixSp25gcb8dGGfZsbwkqDvG7fcjh1Q5jBoTwdqc8kPhf7D43hWMN66fv7KoULqiJoDKfy78",
  "key25": "2Amm78mTGsjpKz4nVr8WD8k6qWZGbsvsk3qMsypGkGXDW3XzWpBi8828QB6UwMjaMdzjkgtuitiePHrgRphHk6M6",
  "key26": "mJ5cvsEHDixj4GFKpTqEfV8eYvaK2XtUQ6m5B3xo7XkCpZtuSNDXxdh1aZYAAf17d9HvoiKB9HjZc24e9DomFxS",
  "key27": "3YFDEVDsw4aZKCzZvoWzVyJqdeqNwLEsEJjjRLkuhqVyi2XhHFcUFyd53E7bL5ptx3eRiWCCRzzNddg7P3U1Z3aw",
  "key28": "2o7t7pVDM25Jao2kPw7G6isp4ez1mPP7Yn5SMLbyHmkyPEBs6dxYmuiW7rZdeWCHC9AshALTXh2TPhfJeT6mmCG5",
  "key29": "5HopTzmufAA8FHcqHNK8anEonfHJQTtEKSmbAsuwPn2BdT3vZVYPPnLRjbhSXUm6oo2gvpqmLfi71izkavVCTH4B",
  "key30": "3KMAERPQmshzJAx1mc5ATN92T1yXzhNrvXqVrFRGFriL2prrZXRaJZnh739gJy4JFkmxdRnEoRAhJpAMsj8mhAZr"
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

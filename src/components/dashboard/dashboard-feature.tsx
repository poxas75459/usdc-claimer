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
    "3MPqL92jVJobQctY7iFQoXYknWcvkgtJPN2BU95ZnUEQBySGJJWtZCkftJbesmnZr7r96xwasKjEbK574RGycHmM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FZ84KuKbDsPnNj724Ce5j9pK1BYuF2nSobgXvaySAfoXEkkiAhRzNEqYaJNuGiPDLwrRFvRQKdJkZ44GVFjoFDM",
  "key1": "4BhnAec2WbPsdJXTh5tZxQTHzdmjWFgoeM9qH8mxg671AWd5c8xsohXEpkxQjWXmeMaJBpB6ZDMQLysCJgKihz48",
  "key2": "PWo1kAZDjA6btEM9prLwdaRm3gD7g244E9UNc5Lkj7tNmo5KvXr9ezzqMyLgzhnwmq7xwE4bwjfsJwYiGmMMuBH",
  "key3": "5BiyUtoADSnpqYcuq42R1FhtAqSXa4rQ7QpMFsn6DXyw2dFV8CSz3aVVzJxCqdTprTdQoBWZydyoAom4rKL7nyQG",
  "key4": "iFzKC7cwVAu6yZd5b1Lk2HmbdTwFnNvDjC35LV7eg3QWcv9HCtYf8FLnohhDzvwNetXDHrB3SZSz3zgu6iGCkXm",
  "key5": "xC4aUVgSnsCSjA5JrJVqZUNc7UMR1fw43iBKV5WZBufPE2wf2HSYY7xo9cTQ3eq8cnSEyWvkFnPAydDV6qXiC7s",
  "key6": "384rnwr1FKp3SV8Q7QKE4XDZwJGuc6PzFyqtwhYrmQNn4NCtsMUkTHFsgXJ6yXXHLqbXUWBueTBPf268E5Z5VDfr",
  "key7": "5sPYZCTMY26kG7uddMryjQinLuAFdHSFKQR9vfPwfxyDRb3kWWRiAPqCtovKigdH3TkfSZpQ2Ws26PvyptFA4Jjk",
  "key8": "aY2aRP5jc7VWJvupv4QexrenouLtVTdig3Uhsf2rneEWv3NXMEqm1BS7iA2PwVE19QBJ6nurnxzmVByGkSmKWG2",
  "key9": "2n7yBJBadTpkvfzqbUSx4ktYgzgRv1nCSak2ioZnazVxWSb5QRsCCRTbkwqJs389nJyDYMLGf449AUUfKLmELfnQ",
  "key10": "2WoxQVjgbE4QCBEY2rgTe4WaFxfnqn78naBDeefcpp6uCcL33qNHeRyCY2FytA2UrGMS6U6F3Y2CcPoLrBQ29SUe",
  "key11": "5CkBE5MBS3jo5fEuKimHqzyo5gR9mmUyhFKYuFQqnuQryrV2sJS6hPqNv4Gp3621hGAdtkJgUvZRK6Ko1i4HBDs8",
  "key12": "hnqmLWU2jjAfbsgn4rkWaDzjzF2Tzn4GwPSPukAoFTMwGkmrcF7VM7j4zAMyh1n2G2ys83j1hmY3MX1yJiEVqUk",
  "key13": "2PzczSYEd5puCMW8T4JBniKQosSf3tdK3Jsmh4452eA37e6pXTyKrKRLCxzUj3rUC1MfFnpjMeBPjLhwy5z4fMeA",
  "key14": "4w2e6awTtbt4yCAaFf75HWAQ8HkfwBQNfcGMEyVUsXQAgfZBaQbmFyXaTx3Uye9DNR6tMe1bhPCZGBAV2jFWmkUG",
  "key15": "4LSa9g1Mhbinj1MGJ2NwwTgkGpDQKzvDx9rwUovnQNyVnRddgCXwGzgkLqwp5x7BT6nLmuYrp6FthjndergtvFfc",
  "key16": "HrNvbKktrpL2PZJXExPPChqDMwfYNQkoenzrEzSVTqnXXWn75PU1HXCpGafEpU2zbHp3CHYiTaqNss6sU5P6ywZ",
  "key17": "4yVURRk6uitLR8UurzUnvFmsdAhuTK7U54VjHjG7N9g2F956XNTkrZTrTEFHw7ZzjKZ5JLyeWBwXkA9s8ADdxSGi",
  "key18": "5n9CGvDk79csTNwijWopshuziJHcdn6sJpAMfsBWXSjcXYvq2iJXCt7xBzueGJiT9WFKzYSfsBLLv71M2UDDQJw",
  "key19": "5aoYZrtbrmPGE68m4eVddo1nz2b4hQ5oMd7wUkK8r4GJ4FBGrepjnYepmY7qkJ8hteiott83nap36XP9QQVDYTmB",
  "key20": "3Mp9wKSKWdZ77MhGqy32i74BP3ZF8YdPaiLw1Mp2tx5xY6F9dLk5x4m7aUkmfybbGCBVWKemNm4RcihhGMTDvLYt",
  "key21": "3mspNzy28cAhgovypXmsXWCg2kTtyypCa2cy8nqGhtVcmaKgK4XYVVvkYUqzybojMEMep6qeMtYdWhWQz5ZcX71U",
  "key22": "4vFEJkFt7Md8SG6DNUBibLsCqDWLwmBaaog858A1dFQHtpUJ9ngTs4pNKusr7dUx2BhgXfkXg2xvMjZfDgVSdto3",
  "key23": "2fMiLWwFyqsiH3H8kTNjjdUrb66qrkrRqmTx5uPjHdVmvBonrA7JDcZ8wiTo3bVLqHpKF6g3bXQGLbFjya4q7ioA",
  "key24": "gvozZjkcNnwFisWwEdyRGwmiNUj9WiMb9KvgjrSAnuafobbihhz6PPMVYvUMGZQspp9XRncWeswKNStJJUh8Lc4",
  "key25": "21unCEHzA9TSYvb4aGGLVrLjwFdJSYfUzvawWEauo4CRkMPfdevsULZ2eEvBqpjESD8AUcMJ3pgYPnYhr1L37j4f",
  "key26": "XPNYhQaW2aUkQu1ra5mq4w2JWGfN5FTQ5NjF6ELahYYXteEEWnzMsiknZydLCXRDGSQUWES7QMzBtv4LUAo3S3m",
  "key27": "3nVtkBuVAmzJsEBExvxkVLMBk3y2Z3VAHJ9o7csgahNDHj93ohyPvP5WxdrarmqMzxw2uZMs4dnyoCouJ6JKJgj1",
  "key28": "1XNattCpiJKHjaogrMRUq4E6FpYEhAv78T9WZnKdLfE7FyApAmTZg8G8Gu56sCR25nUb5G5bcDonq3Sph94pmMz",
  "key29": "5yArXitu6rPmQmvaGV1VkwiWhfSFinDFogcCWXpBt3Ag5fUGMF7uHUh9HvmbaV8NtSKH1cVtwpsL7v1twd8ga8Zs",
  "key30": "3r84KraHmSoNwGo1Pw5mfQwNZCE7UgShr2BppnHozf87hyhnmUYXpSARHhrM6QPht2bfBPr21n7C1kqBcc9sRQ8Q",
  "key31": "4g5hLuVDz2xoG7huHKLhwc7o6yFmS8FWUdbR5xpWyKnFAWi1LXRZSUzWN5AujJDebyS4PkH2NBBYreCuQeWuMbkR",
  "key32": "4AZYLGiLCumHm4ctCBWosixNUsCN4aFUrkj2vkzS6VRZNgAMNqRTNmiQeZSfqsiqby2od3uraMWmJGxzpDQ5CaeT",
  "key33": "22yBM1EDuhoLg66U9uiXEZbBwrqLyDbtfTQhbCPbju2cSook1NKk7h4BFXr5RsuQ8ANiqx2ADzvvcUjAEp1uzhzT",
  "key34": "2hPpLiSYQLjbgczLUtTvpLbatJzB3iDMHcr16Kk4kPnGEL9W8bRZcfBwQbZNCwWBUVX47KUNAtLQyfQaXutEpGye",
  "key35": "9zfBJSb8mBLxHfVEtezsdc9uyTzcYUytRbUib5tJANzgsVtCca7CHtJ6zq1HWTZ78SgTAsH7AP18D3mhfSsrnNV",
  "key36": "3pPxnDzAwfbst7EKFDo8q5CtwdY1Dbi4dhJzxUGX6wJQpwUBC1wjThGKVwETCVroKCwqry8Tvq7YVFxNjyd2whrF",
  "key37": "5frdHJCwzYrbDq4DhPe9LBSZpAZ2QeGg8Yo9naan6z1z5EhwFdtzAaa8A4xJh9tawML1hUSUDaKVhwYWQHN4rydz",
  "key38": "4zV42oZiDqYpN2x1nQB5Qk93XPEKyhtNh2b1pvzxBmHYZ7gXYarVc7ahXNSQPb36bdSXe13nvC7pd67xYNeNy3Wn",
  "key39": "5gr4y5FKFg5mTG7cbZHQekmhNxV3d5FXndrJ4qk8GQdFTCLVVqMCdDAFpuFU6bST8PZo4Rg69iWeTFr4m7hTH7f9",
  "key40": "2NqRZTktcggZEHYLaU7kK3VaNm9aATbb2dajxTohDk7stXGAtBrDwX7yaY89Z2oPLUBqPsutbqHbDqSh8vkwoiYP"
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

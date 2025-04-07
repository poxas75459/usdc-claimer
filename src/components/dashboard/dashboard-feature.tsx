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
    "4XPPgZjzJ4oCkGjTdoq4YYamJ63kd2U8tRDQNu7QaP19SRQBMK5CGQup8Z76nCUFKSqqcvfSK1NgfEPfFWyzi1Z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "89gFgAYeCjA2gqPjRt5ye5Yen8ww6u5fiVFGwJqf6ikgZRBsrsVYqUFhuac9UXQMH161pyCCoysxC3WXXhkTbZL",
  "key1": "3aETjXqajJeHf5YBh49MoymNLuqhHGTbKA7ijP8FRGwddm2ZmBf2Lz9EQtsW6gsg9dU98XM8iQzywsPPnZG9uk77",
  "key2": "4JnLKM6ME7fUT4EvCnML9tiTv5YGUr51g1KYm5PzPEa84SVGXEVK8GW7oA1VtKZK3mmsK55x4ie7R2B5sLgTmdZm",
  "key3": "3ivvQMLHigsGyZcvMdjMhSYCTgRx5qLoWyAW3J46AvdFAfGG7hTp2mdKudjVRb2DKdUthT2b9wdJRxuPEGGvt9oQ",
  "key4": "1JhbXSTpcMF6yQapZda5nVXGFLvQUDBQLgQ1EhM9pWVrakukoMGULRiE6wyVYvHBrS9tmBZdJFQRpTJvLhgu6DV",
  "key5": "4Bw8pJML79ddRGXy5UtXCF1irK1rRduU8TRxbGreiYeCoNgtNobiGBH9U6fXRa3CkGhE6sqpxMoymt7XmLC12q3k",
  "key6": "5cF44azroheatG72beTGdSDSAMMuTk5Qn4A9quzMsLQ3P1srVG8ypPnHEXnvxGb6QDvDk3wL4TzbBSz6fFBgGsUF",
  "key7": "57JwM8P9bcJtTaAgqiJYMwn8yy4pboM9uRtk5hb1E39Em4g3tfGg79BZTHeE5qnPe225K6qYsLPghrHNWzGdU38r",
  "key8": "5nBe5Mu2HtSEnNfgoZhrZTntxd9BDZ3BxDLL4KBe8oiU2RTSbxyG71FCM3BhriAuA9TQQW2oLmHqptnfqHckdptw",
  "key9": "4fm8aeoxaqLZJuTPy11tfRbc4x984L6zBaK6c28nVvfHBvx5P1LHFAHqMMPo4NML9b8Aghr1qkDcknkBji65N4Qh",
  "key10": "WeQohSxoUDxusrLMfbt2ymHDsBXnu1Q5X8ow9GgQKj8RvHnZyWrJGdxPuF4FB16DksF7kUuArAgAC8wc1wPiGVR",
  "key11": "5EZiCuTYoVDG2EM579GLNnwkNDktTAZ6iS2ASJDF6GEFtroGMxNL7Kz5ank4auz1XCxKNwkkaRwNb4vbA6vgBSfr",
  "key12": "2s8mGQZFEEpJBcJ78UAYHD7YF1TyP1VLJG2cyTPKX8DNapfNjXpPnRinbwJzAe6PvHukYu2jJBU6Ah7eLp8fCWgb",
  "key13": "4hc55vxseEXNqhvkeVhqxyxkm5Sh24nkRaqDNofVjKLKPAGJZDhS435hBKAJd2c8kNNVncvXzLRzzXSBSC5xgDZi",
  "key14": "4Kg5EestT1iriNRJoDv1osXKxw87s615sVcq9xCiCtM26b9tf7NB8BqxMDEv8hsd7JPWJMjfk3pMRGrWJxERTiVx",
  "key15": "41r4eg9PcvDUwwwcQTLtmdaQHeoEhRLmwuwWjBTxayAh897GR19X2jkMuUsL1z6mtPZezjEnxKpkCcnZvnX4KadD",
  "key16": "3G4tZhQrUKhVZCCQ417rBf4S8RiRkysVnAM2ZnAn57SLGgvipCmVkLh8fgcFToXo5tPHpTXax6e2NPz54CdysUEm",
  "key17": "9zxXC1VxDfmP5rDcFwezYcnZW6SgqFmSrvs76FeDxhDsswFdW5z2AdksDcujtczfE3ykv7qAmYdBTeMLkm3RLUg",
  "key18": "4PRmYb4rQs89wFMdkKqXwjwRDPEhnp5UbwtrTNpcm4vLqXS6KSjPe3JKU9mtugR9hA6dJQRpws175jgqfuQkijDA",
  "key19": "5wZiSc2CisyCb7fd4XTfNZgUnDPoaUG1Qf7djrHW49EbqUqLAUYUYaNUqW8TLEq585RvWG2WsRPnqzr75tiakH1P",
  "key20": "moLfmmgmo72DUMwQVtd2yqfzV3ejRXhM1J6Wi4BcQWHVAa7VVzdTDikS2xhcTcR7cqNi68SPUTPCPWXqMZnBryi",
  "key21": "4wiMvGAExsTpEPBkaZjGvGWXj2sCnWuAPKAMhyp5QoZoWhr4zHPAgWR9pDexSQYTYNevdJQLTWgqzcGCEbXiStzF",
  "key22": "24898tM1hgW5ascgaNdRWwMiLxjPdP1zDDiebxLF8gFHzw5bTjwfpvbxHyAHnxsAsbM7Jn2bAwxaMptioHTDp1HB",
  "key23": "46HEzkDYertQGcQ57fjF2qNFRmHVWU1bTuv9T3KeguTDB3ZJVHgW1ywjgz2GbvQbFi52QGy31EFPeHqYjynEJrjy",
  "key24": "8M6em8Hso4LfCmWhTGeJ1uGAeDEcfM7kT8LoUedae4Vr1nHj7UPnSER2v2mPTqruYyE58BeQutvGXzFGm5Rd3g7",
  "key25": "2nwEn9zxGCAEoqJotLeBUsSEf3TZGE9KtbPGz3NB8or9QoPwn3Y2jvFP4UAXVqDRYGHQUCt7bhRGeHebfwpodJjs",
  "key26": "5WVqHVhRZXUTroPqBySTWEbbHvP2MtL4PgEKYvjsrtotFqzhvddC42FgWHB7TQimJh6wmnTn6v1oBNX3VPmxd2be",
  "key27": "2dHCEdX8dsxbFc3296YoH8QQ2DTTMo7DY1fVzXMCPK11JA4F8jnq76gPbgVpj4pyRP1qQTANsvZyueuQnJFtjg3v",
  "key28": "4nRXvFMDbQRJVqx6HvyXqp9HVh556xPNkugTwF3z7cZvUPArRxFxnp6w8svL9NBspLZrnThGQYsWrvDm8GjedXzv",
  "key29": "4jWLhQ2ezvwy81E96Z4cvRvNy5ZEQS2EYEdGL5xBTaUij2oPvM468U8ToMZNCgiJknBpmghu54yKqDm9xapwppKd",
  "key30": "3WD6TLtrbiLm3rT153ar3qxgiDsvhxT61bVyCbeF3JiDaNQbd1fzUuMDd6E1Sd6Y9dx2jziNnwPmh3LmLgwgLYYa",
  "key31": "3kqQq5FrLpUxGaxzfFKKzVc8vLL9TsyZETvKip1WvafFTDL4yP4rrcRofndxmMF4ZqTR1GY3U2VmvmC3HYxNaLc4",
  "key32": "3Baywoavwgrh2ynbcai4GWAqoQFrYLr1d6H1ZrEVu5kmvjVdpKpCFNfiXL3UpuQKF52cCh3ZP1Nvr9qw3cxjTknw",
  "key33": "5tVGa4MXsLVKN7BmsseWF6LKaaM1mRuSeM15MF5oKSJSVqMj37GuBstwbGcdkqXSdxf6RmhtFNKJAKdYYJBsQN5d",
  "key34": "43ULqgjwaP4m8iLCXEwbreK184pXHxcChWScRJNQ8xNykQbJZgZH71AdhSBM3DbB7vWYcC9VpSKLo74NGJhVyCz7",
  "key35": "im5h1QJd4NgFMUDHPcdwYiCxpPS9Zw5CR7S8HRRkkBUndpsMcKM719GGpR39VB5xAZqtsUxHeVZEJicRYWX7chD",
  "key36": "3HrDr1LgCM4WuCp7Rruuw8An2ZiuDCvCw8Ltt7zNRoZepPJoi93YBvPN8yfJtd8n4S5j4aEyGxHcJ191WbGFWFVk",
  "key37": "5hiSPdyF7m8zFoSnY3obh7beWv7pGndkeNcnrutxP8TJmXxzAyRzr1HCVuWNDuRGtawLgb546QUz9Briw9M4UoKb",
  "key38": "2VBJZSrRgSmDENCDfjQjDuTAkvN1eCWMczNwn3M24tkm5zg5FytWzpZzK8ZAMGVhytUeqfCVmi5d1bziq1AMBRkb",
  "key39": "3BzbUSJt2gokXAZ9RxnP5F99wCPzSZqVcdVtb4MuPF5NDE18qrN69kkxbWEAgUYiq3abB21w1VunzxUxG8UvxZfW"
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

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
    "5goQUwrhTg2YKnmJiQ5gn57ifFEaQ9mb9wdhZPRUnA5NkG2n6zC1n5LUShb7ty87gN1bAB9CS54Bxe7ShHtS3Y4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gan5MgaY7Mui53jGT8WspEkss9Ls5cUDXVUQGDyTLaUYTsMyGm11NKL9X2YZjaJ5M7nBexiFTB5Yms6pquVSL53",
  "key1": "3BLSS2rDLN5nor9HcJt2mGWXErRFhBgtFp5FCj9ankMNyb8KQpfDKGczF6EAoZq7p7qo8ARN3NG6qeMPCysN1TFK",
  "key2": "5xTnhVc3XuJ1YFVquNU3dFSddLChTw6rPtT43hpdhSFw1VpfiH88y8P1JAeueTgn12gS59Z8xPUs9FEoTRUhfjdq",
  "key3": "3ye5dsbYtoc2i6AZXk5kT4cpZtvAQ61wJxsPxAnk2vTGiEmiowWVFEj6JJXqRsUAu53UnLyjRKU9sfuuC4vf6TXb",
  "key4": "5WXbJM8MDApGMF38CYgTX9Uckj8EWxPTApLVQ8KKCLKb5vbrezus8GW2tPcT5hND5pQBFqszgTtdVGodiL5a8nz6",
  "key5": "1285yEaGLgeZCf17qioAFBVz68QcvT9osGDCTqWZRqGBL8zZ8KsA9TiHqxD7RQcz5aLcYQWxDPfUnDNwKPn9jnCD",
  "key6": "2RJYXyzFkhGvhJCL3BhHkxPjTroELMhzewHZqZWgUP8NrwPasF4Rb95eLikFM2htXwkhi7b43mP3hFqPVF5YGVgL",
  "key7": "2VJrtX6Ppi1oMR1pF5eLCBR2o9jFK4BHz5pxd26h6RxUyk77nEDDiDKYBcRBghyD6qYxc9xZoaHwfyUWpTJ2eEzK",
  "key8": "33MbuDHYSraePLspBCTnqPb3qMLKjF14XeHWTVAB2K4gUKevxXEvW99bNmKWcvj9QF46BisxLw2RUMiMtVigG5Ah",
  "key9": "3kUTN56NPBwXP4d2i6dor1fMuUq3KmLy6wowQ6ZU9u3kssfCRCgB8MFRntsnyBkLt5Vq6XLq8xmAT6Z6RPD5Fo7e",
  "key10": "4oHyMAtZ2quNYM1iwiQnSapFYjV2dchcNwmF8epmmHY8h2BuAr4UCLn2T7ysY13gWrb4geXq5kTgwJNm7yKsWygK",
  "key11": "59KHL59JvMitGea9iJUeF9zvaPRjQ3d8yxTGNiENGmfVps5kysZEEmWaRxcnAHPpTAhf1wmPbjsNXLkCLmm24Rq6",
  "key12": "5j6YGhidz1vS14eWn348TiSGiKtWT5MbabhPQChP8mY6BxNMNsA8j38oJxPHQZTAsTZ9g5t16iShMY2ymMjwfuEU",
  "key13": "61NLT1izDmKyw1FKCwatrmNMq2wGQ7Q5PV3DRvii6DXzX61ecnd5hR9fRAjzbY2REG7TBUaki48AVMb2q5LPrvGc",
  "key14": "aJGM8AQib3ffPPguRjB7xbpXVVcmfer7GV5BLe8rAuxuZoc7UCxBWufjud4KiVvybdssK8YTq8USS6KtFoXdowF",
  "key15": "7o19Qtsyk2Dy6efYt6Y3qBLm4YqgY6xZp8ZRdRVyfrh9bxzw2pprkzBnes9V9hH4yuhhkGGabf4eywQnAsf3bnx",
  "key16": "4zPAMd7ApSht41GRhFfBXgUMzFZRYFPSqJQaHcV6bzt3L67oPYQpFPBrKHxgzMWcAk4JXPsgV9q4EeSQVv6brEYM",
  "key17": "QKNV371h2pnEmYyUJzGPbjcnZrxVfm4EzRxz424QQ1sDmYDra87FiGDnutNVgU2cNJ22mxgkVatbqXZ13bzkdJ6",
  "key18": "2JGKT8eaNgvtzXSwst25DQQmBUxbbTcshgu6fVEQx6keJ1zMNbsSuDeMJFn5ebxssvDHkrn8sGijTquHx7hhvBMe",
  "key19": "5wNtJXLKNzNwT99WBS5FXCQWNevZ2y4frwrFmeLaBC3jr1mJkXVKjKakxUBfmpf2GJfGUa4orayQjkWFLHzSxsUu",
  "key20": "2gj1KXmQnQckT3KM5YDdDZSdoJBZ3StwTt7P8fuiskKj1KEqYhLzggBqiufJxGF6AFTjPErxtdUWTfpVvNiSqai2",
  "key21": "53xvupF2BPEqXHA6D6PojAfZm9cH2AkqBcY9RpWuTKGFYzo4KXb1318ZBcNwXccZkhaXUR84X4Q9kmLADeTzzTuh",
  "key22": "5WGCMWb4AmNX4mpRmah9MuA512TnuDjhJAoD6UpoiFZWa7W6AoV4b6FGUK22eGPJ6dbWgem7axtC5M75PxnqhJ7Q",
  "key23": "2rXSyKK6LXDD9pha3QtLGa9dMus3dQRMBGFbrjA1oPNpDrRr1atQp5YoGNUHETddJRhzi9JDxDjZnduucKsbLFws",
  "key24": "3UxNASN7UKCB51Hu99T6hVXk3rPTV3HhQtJ4JieG9vHKMBHwU1QmEkGdaFdRELPungC6cXi9JVfhKpWKfnSiR7KM",
  "key25": "3DB8YeJ6My29mPzrvyyHvJ8gTSAjbERyvaLcC4G2gqJJyWz1MjUm7dYQAZ9ET54zmXs3zG48htc466XE6wKJ6a5V",
  "key26": "ZLecrRSZtfnLd5xWrp34be6BsEA8q7AsXxQc8fyQNxoygrhXZmBR26hWCw6XjRpqWg5ezy5p8vJtf7QpmRLqgZc",
  "key27": "32sqCdwfMmF7HCeXrMi9gW3w6VdnxxUc62uDb6nGYeDM8e9w6UeVNPELTUjJCSm2TnLBQep7FfKS8E54j3GmZ86",
  "key28": "5QtC85AAzafVrSsnk8GAue3f6hZia9Fd7Lf4F3ztnEWrbxDGFHJaeB9AD84uSRgAdy1N8d3STbbbZ3AoHmPG9tsF",
  "key29": "nQAttETSCniQBDet59WYKmmTdZNZbZf7cY1uEGST9VAJ59LVGzXmF1tBJph9McqZzwRQ5NYFmNAFCo6LXF8hnc9",
  "key30": "aFkM4SHFn2YUCqRjn4BKCrqB6KPpb5txKmHC8PwEmxosPk12wfZTKoqcxu5U1eCbSfGWAWvmdLBjDsuCQ6bR2Ec",
  "key31": "5cctyRVm6XLrr97yVjVp3znseaQCxVxC4kiNVcYzSuURUq6jy9kHANqZLDuUkGT85ibsNdgpC6yEESYFs9Gte7fB",
  "key32": "5R76cRVUkSVyjkVM5zRYRMfbWP2jLS7K13CffwjgqxCXcVFvNF8yLHwF4mAKQgn5ENFm2hPoJ7VXmZ6dF2w5k7n9",
  "key33": "4PKLAL51XB8vfgpteabC3BzWUYX3uoU1auN4Xb4GwUyvcBW1sjXPKbBrPMqQkD3FfNVQHjg29Ls8jRPjRAaKStUh",
  "key34": "23SK5GvFGdpUvHUdb5DC7TebCQSyzXiaTe3hhxMJipUEiZkiWsSeZLBgSJRf1jnuTLZ6uzzAuhFowjYiqdRTY6aX",
  "key35": "4GJU2eaFa6mQbiZ5gY6SdnxV8wgFFEyWXYDohmupJkFoPSyDMWnDxXvvxQ3eAbbYFURhRou3CS4H7Ex26U54aJHw",
  "key36": "4ZPVXniGHMo5UBQEHvXsgFoAgUqYDw4x8Q3wv62DUjLGYcSx2HTxCPNMSk9UiiotxMPU783KJAsehUWQJVLE2knW",
  "key37": "3FEeXbWJATyU6Sy5nbwbLhS3uLp6DuTW9Lb7MonatNCtDe9MNUdCqYQvQht2Sppe5gLWwUSXphL9psHcZMhL6kEE",
  "key38": "3sWaUWghBCZaNVEjpnhgN9k99pKEg6N1CPZGaNKRF5b4aki4JwgkXz57MqmdJ9Zyzgo1N61i5eJXbPsKLbF2BHuW",
  "key39": "5QdTYuB7p45mdwCj2bKPZAjRnVZMRAHBYsCsQYvCqLUdHEYhgq8yJvzoPVuTwhy9mCfbby6d1ToDfqY3sr6AGuUh",
  "key40": "5Q7BZKoLs4EKWuRqVbhRLod6oBdE8e4CnH1XzXTC5hnCQv2DxW5ATXsViLyHdvq1uTUX36FxMCGyZouuPTXZhju5",
  "key41": "HmfMpoHtoSo9rtmsMGbL1TAYvoPpRXpZiv3JCzwYCuZfJxFN48ceBBVkCvReHqdTuxmZqbrSy7bTBPv6cc6oXZr",
  "key42": "4KmCd9CPNwPJxe1VNLiF5dJzieBx5myEnAuVoKLDvHfBT8e4L2ga8VP3NaaNiNF2t4SYBepnS17h435vYEwNVDeh"
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

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
    "4hUsEn9vFFfgSHc7m5QEzJYkHzJFsUypbX1BMQZKES9Pw6qZgohRrrWV7dmQbYjUKD3jsU5neMHU5PZR2HQgY58m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z2DYXJCZw9FBjShhbxPcg5TKaoxHBYdj5CxoUiQHSZhd4E2epGARXFiaekg7aM1U9V8T3CsWWD7JGwnn9hKBd78",
  "key1": "5m9pQDWgahbsj7KzHfmTZs6Wgc5osL79DboExvDVA2UvEY41W82ego83p3GwuPDP3FXgC8i6NsCm25wPskxzuqR8",
  "key2": "2vxjYA5swXku3M9JQ1rwHfTcwDLQ4pFrqdXBBmQhuWhoTYrK3Ln261EP2BC1ExMBLtFPuKRF2A33rCRxv6NvN9P3",
  "key3": "4pyEX24bJ2Epjvypa5rv57Aqyeg8spCxVxn2VgVdH9JmgJN1Rxf5C6TALvUhLsZfon42fBbg952Yh9mSqDw7gJVK",
  "key4": "5XfiVcUJj382PVRc87YpWfxnhXmJBZUShkzZqQQLWauXMZv4XsKkfE6g4eH3XaDvhA8PWVjaZaRSLrjNtgfQRTn1",
  "key5": "4J4EDH67Zr5zNscAcmR2EjZsKEeTaRZk4nQxgJ9Hpq2FCEWKTjkNwQpCvpFnqaN9NCAvB3FTfoxZQPQcxjSnFHAM",
  "key6": "5aTsZaUhCicLR1Mw6Nazwh358iPNz1GurURQJah3d8FnG586HyGh6K6ndPApsdee5FEx9tjAdYje1UJpVtQpqpCK",
  "key7": "5fQ6JW4wGCAyzUmGWWjZGhLTwBR7Fd1ZS3mKfGSPoWSs7DeCVLir7HRdGnmhLf54PaSKt4MuHorAGFMjtKnq2RMA",
  "key8": "5c61VAHkiZKvAN1NsVD2HAq48mNgT7paebAvLEjENmgWMLfZZ8gHqnkEHsmyt8Kh6u3pHaqRca3uz88HBKf77eeD",
  "key9": "4dqXW5EU2hrjZt4X5Age6CCb6nQTkjtrHWopcHc7prcw3oBzERuWnWweD8MfTyAozYC2GdZnK1up8PUFcHiC4EVf",
  "key10": "5xQqsd6EEBsA8boYuARgcjUgURRavcC4nzb39TUP2yd37yZHAWkxceKwRwT4brbLNQr42ST73mAK5XyKB1xm1Qc9",
  "key11": "5vh2rPPaGdFvswBjTDhbLZeLXdJ9MhFRtmfy2KrP6Dus4BNftJEpxsy7sBrHoK9ydFm5RLNtcF1XbbKgg5bAh8BC",
  "key12": "4wqJdz3iGYjqGfcnG8EesArN6vN216E717LS7fxsCNbe2F5fbWFgd12vbUu8vHHEri6rHbFNG5AJ3tqsGKEraK49",
  "key13": "4M17KGZ5biV78je15qnBSKdSkxEAufvTZK8PDpmKqKVRsV9n5PbX76Umm1bLopquAYhDPtCcAPVHkLpVmxRScdez",
  "key14": "2mTtoxcg8tijg2RTnQxMMqMUxZVFNtLnbGPaorC35tSXVJM7FNuEfKG292GWHJTRqMUkEGvGcSFxcVpx6L5VM8wY",
  "key15": "4hutevRtpaBde1wAMq3r29r2KtEdK6hBLdGBUco3XC1LkUuUQxMa7GSzfRzXaZjuzr1876EiAKprrjvsHn7RVopd",
  "key16": "3vzGVcvHK414NtZ1F95DfQMtvfXfGXhCYaMv9GX7Pg73GFQq5Lj4mpDULcU9jE2NcKydDUuuoJqRcwxjkJMR6Qga",
  "key17": "4QSLUE6Jinz1xLWeXehWgLi3Jb22AMK5Msw3KLMAB8Mu71E8Vi5zeagbkcaURhqrCtnDut7xyBBYp9wST2CgraU2",
  "key18": "4uFbQ6TsZ8DSxwN5WSva9uSWSxmXCT6wRa7kUMSQspkrfdVhQ88jN2coPYdSdLXLRA33BvW1HMU4FoC5ZkdwBsC7",
  "key19": "49j6ajhJKJssYTkTpsjjB9tkgYdh9Kp531VmGaK8cxwmXYfmsvAFnYYy1Eidz9K92usK6KTVCzhM2Voof86Vzp47",
  "key20": "8oecDegzP8FnC6xFRTRaVBTnSGHdhHBgghMagCg1JJsMAdWH4nXWzb9gBjVGVFpar7TtJUaU4NsvzzjVvhrN55v",
  "key21": "32CKyqi5kZDqm7iWeUHKK22nwMsK8wWhgy1kk3XaaXibWFqmY9v7Qocs6S1B7LX2YTcP8eypVxHs1dAfETHYyGej",
  "key22": "4yfJZk5msBE6At5DhwYNzAtM2RLnSbUNpghfykoiN4Pd6iu9e8PQpSAeM1uzAg78epNYsBZNe5WvJ7S9LTdySWFd",
  "key23": "2JcoeRxbgBhMDtvU3zRyKnGDuc1wCngiy91RWdYPMAoGQutAnDxYXWCL7EDtmMWscboydBw7rvZcJJ2nPD7dvk3C",
  "key24": "62fL2Lt7h3rXeV2SRHjXxpQmLnqyBZQXfpHWiRneBFbVn1w9vXHCysGUE6CtLZUS9mkRGJwLnLr4KZza4NVzGZyd",
  "key25": "5oMEDiPUMG7qJdH5Vy2GfXEsu8CkALAWRtkdvcXf8MxBbDfhBYF8mrKFZHAk1ajv2tSXCWMPjRguF27yTCXrEkx8",
  "key26": "5EbyQqVCYyMZj1jfCDhCFQ4JW2BdTowTSQnxcUKPRtQN7LqfPvAkULSK6EDLd9d5dpc7cy545MpR35atYSiH8pf1",
  "key27": "2VtLrgZ57yC3Ro3uD7Qi1cUmd9S9mfT6qWsQ7ZepnPbCijNVQCVGKNuw3LD47SihMeJUi8SeJWL3RUvoZKYy6rtP",
  "key28": "52gtZXSJ5xQg5FfcaNH9vzcD69zCFVcwvZjBzxZL8unsHzJgJpJoLpamGjjWck1iyzQZWNS4nBkQSTtj3VPJEiG5",
  "key29": "629vCKpDqt6NtSskEBszcu935ez5HQMgDnCQsRF2XAetM77PJoZnopP1dp2QrcsPgSznwhHQLUTjSqnvCujNLhFB",
  "key30": "2JuYUS6KC9R2aeH8r7tkTiT7RcFReEwk7uwvkt2CLpj22meWtfeZ28V2M6Bi2SvcrQaw8ypGFYEAMhtgUFVN7m1H",
  "key31": "5DmsyB4GziYtSHhzUiTW7mHWYVYhNd2HGMCXKTkmSBc9A5bgP7TQuvNKt9cwP7eGpjaxz8jHx3nwj68qJLyUtnaP",
  "key32": "Tc7G5d95extnpMqWMGuNo17b44jSpu8tU93B3RYigujKS2X85uhwjnpJd9um2P6pmEaUQGMKHyK5shEencohZZg",
  "key33": "5mMVC3XSLhu8d119JroHDfgaTeyUFn1y3SLdxvaUo7WANNPrZaoFDszGqGAW4Tv9stQhzwYesMhsDFHBnD1KGdw5"
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

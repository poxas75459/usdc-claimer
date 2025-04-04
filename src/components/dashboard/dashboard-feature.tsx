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
    "5rj3RZsqcusxH1kC9Ue6sW8tQaekznSrQUCudk9MCd8XuNALrWuLWHWc718hDJu6FhCfXj1wnvC1SkXVHAWauVQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ThcxDtewEa6Nmy1DPmoJJdxRegZdWH6S2mWrG7iuPj5LPdCVLq4G182SX3UyFERPzWZ4w24dEzwiVBCtf8iss5r",
  "key1": "2BaMVLrSVZ93WU3nkTwTTvQTcoXJmdu1RVTk27ocLeVRwUtWPx8gSE8BNCis5N5u16oXzde5gKDQuV2FB32soeMU",
  "key2": "3LY7ny5eovXivecm3QfirhSBMYLUQufx7qYgmGQnd2Ht3n53DNuwiLDLs5LQe59KfdKYBMAznVS5TRgZG8D3g9fR",
  "key3": "3r9GNaCpCyUcDEz3jPsNjY8J22RVpXEX3HcvNbpg3u87ui5NSAUc59Sr6ZVd5VJ7VGQE6ot84oQ2VdrCE8fGrRAZ",
  "key4": "4tNcpoTcZ2zqaj8V3GZfWu6AMXR3oN7hfxymUbk71rZL2oncVRNQQPhtyyfU7zT6McY12n4gtCi5gsq7HHJzuWbw",
  "key5": "4xJ2hEwrqcZeatiBdwmUC9CDaULWiWbNASoeyjURzoydbTXh9Ci3aY1y7NPwV4CGkmccySLYdDGipVxZTrgRK7mr",
  "key6": "4t5FQ8DD25XhZQ1Wd89D2wCzErkAT9dkBE3noBEM9YN4EyatnoQe8Dp1ZE3mfdL9W5Z5s6Cn5tw7iZBWiDdSmSF",
  "key7": "5fMZBmTL7BRWjqT8ghf9CGWsJZRrysLALBSRx49FL1zbY7ppe3wUYkmNorLEFj1DMwaY3F1nidT2GaCQJfQwz9M1",
  "key8": "317yEiSnURZNYUVwG8Q613u5qP4aiuJoNNPUrK4NJdRcj4uvpST8ctkyR8jDX6KSQkHZYFavwSpypv5S13fcmcwA",
  "key9": "5EEKEeYvqLbfZ3VNRUcMUV3tdbsSNK1xJGzZq6JtXtJg6iAJwuZ2Szz8qLKGrcm7hqJ3P1PAzFjL2eL2uR5RJSLw",
  "key10": "25ZX6K6yWdM6wqyCDRWxjjU5veWZFU1Vwupk4Q39p2LotWRqEHs19iJ6ksa9E1LrG4s7TaqXV4iSQG7JWDGjNteM",
  "key11": "XmAjccwCCN59SAXJrfEtV1QUvaWa1oM3c7R12Y69kePDWpFGWgxe7MgaenR7pPtkZc9ZoEsmkqKRwTqb5W4A2ax",
  "key12": "57cg8R7tv3N19s7jtoSeCHgr3z6iBSEikj2JPMF3LrAURKtPTNTtWb1aXg5iW5GgJY6cvDZUnEft2SKe2jRU3NhH",
  "key13": "65hGkguFHGqhPN2K3KfHeus6XgaQgPnc1zfxQBrjQYV3TGy5iU4RWtCphLXAtVD8SehGxwF3nSi2bnsciGqocoGX",
  "key14": "2Q44xiE5Bwj8kpG26FbPXrRBRe7D2bJH93VQHhRn9HMB7dyhsLu7x3npkTgpA9kFC8UL6F3tsAaidcKJ3tCKLSNL",
  "key15": "6yvpdPkCMbWbJ6URyQ4qFgiSgw4BNs2y5ECRbVaxT8TazuPs2om2i4P3rVjvgQQxcSEKpMiTompm8g4iabqBdPB",
  "key16": "3FFRhAUmZskgdSrpFoVZiC86A9ELfGZhkn5F3J8wKCpUmR5ZhEnc7hnM7JSdzBM2VYtS3SPK7oTvCHtdj9TcDcyd",
  "key17": "2zTPuafoS84rpbqiKM6bHSFLbQJPbirEEZ4wSjpMkKuF71oBEMfvJbt84WbGN8nJs3WT8SscJ13f2m4Yfg5yAK4k",
  "key18": "XvEjNhrwwyrFjiBobGG68G7fTdF73AwEDvq4zwKMez5J4P298ytdBRoj7kXnK18eWszGPgEr8yvow7PUGnawBCQ",
  "key19": "5j5h7GViG5mqFL6aUuPshJ4261gtxXDU3VoLi3d8sAEgH5PUD7ay9DDxMVFYBTVz15Ax6yTEzSa19CnKwoBtBhkh",
  "key20": "2k1bmLHb3x1K3xw7YXgPFPCRy7AjtA9cbNR9zZSJGf9Ausun3XJxmTJA34LDJUBk3dg6PZDjtdBHPBm2V29hbXoG",
  "key21": "3gS4eJhRkAuAFLhdAcZGck5z6CBNK6PjnXQEU8LKAw6ze9bi2LnLkeEFm6HZjJtieEYvnk5KgCHMVxYhCeEvsNzD",
  "key22": "4WS8LGZZmxrJWMT4UoJT1CHUzRrv2d5446RJYEgpNKAn7UMkMWzsbmm6kfcdwSYbLPfzJcvC5QFzZjNMAV8eb7vb",
  "key23": "65w4CiWs1oJTjjPwPTFVxgD9FWGp8W3bFWjAXcMWHb3EGutJfnmn4neS4PuU31Zjk7rLrEFLBDMQmt8yBNyABmgL",
  "key24": "DRUHb47imusQEWNLhJ7cjzLstjigg4aMiRNmmNQba8FJNpPSDd1bVzzvZA3rvo4nMbc91fCwutH7JDgpYEEwSMo",
  "key25": "5XNTM9asdM5Ldrk3rStxuke5Jx2fww7iK8wyZPkxCcGBkaXWhB3TRbzYZALyi5XB3up8SHxfrkqE4D38zsCgXFF3",
  "key26": "3ZvPnr7GXHd1EZ8VgCsbcuASqQwv5JJrph18v1SbDtRh6hQv6GMvoaWpNfdu5xBKbhcdooqMwYqjjAkoi9jbpc9j",
  "key27": "5NjxrxfYNenRtmpmycoXt5X4bsz8VCgCvCVLMvYf8xU78PeSZ9DqUZPnyrQ4cTixAWxSbGR2vDx4x15oMkfr8pSU",
  "key28": "2i5d9CsomqtDGaydG244XoLg5oF7xRGB1pbnxzDLRdT5Cn3vkyygA5vLtELbFzyfAgccYCUyYgpGzpRTKuWjWQxE",
  "key29": "2vio4dKEdgMGpbWJ1Rps1AaDamQkxvZY9YqoNLZenCdf7udLqwkGXu6qboLV2bF4A91bgKGYqXF3Bk45kffrtcrV",
  "key30": "4BqLuMGwyDLwurCvGkEpoPEQ99Ua4EnvebCEviB1pH7uPw2ryHoLLs25HR1hoKgBET3fQVeCwDL2WnFygR5JteKZ",
  "key31": "5S1JXgXf3JJ7YaEq98upkDaXq6fGyiHWggaKmdoieVa6EJMeZa1J2dJMXW9fYpqiF2ypbtora5Z73FBJvVCf5Mwe",
  "key32": "4WzSKbuepK5Qso9dSnX8jj9tWPovDaYg135xjHdco8fnuviuPQDdXyHuPsvEqGvYJijJFMbdMD6zjgn4cGQNTdAa",
  "key33": "3znGv3NeKVGfgJTCjigp4LsCWtEm5f7LCpQmKd1cGJkP5vyJ1Aa2toQJ7j5PCe24Y7jCYLF9iEkCKvydqT7rqorQ",
  "key34": "5PyUH2TTVA9o5Wx1EioHntRiwvV5uScYXJ57BBSyq7UZ1zBN2HBmGHu1csGmua39rixDYMdmEpKXNhWNJmuNaAdV",
  "key35": "3Yvi3Ry2v4SPs67ojbF64K5a4mzj7d2ymNRwjNjHzXECLsSnDsbUiPrnLL7UaTpwWGBN8qY39uScRHGSpjexSHq7",
  "key36": "4bXUHHYZVCEfV76uXNJ3Kvvj3Mwj2Jy33emcZQbJxubviaeoNLRzrERcy7uyYNXE6k7vdVkS2qmfzexWdBsYR7wz",
  "key37": "2BiFE75x9N4F6QnphiPGhAGHQtwKhHzU9DfpExexgdAsx7GZzER5VkAPCUYSJnCkEoJwyVi1nSptR7iMSgu4pA6V",
  "key38": "4s8xXTxYkRUpSMR2vcyc3rs8BU7tgyB1H7AvFxPAXWFbKQvC9jiQDTC8DA73c2YbEQZfv3jUn3aNYAUQfZCVv2jL",
  "key39": "4zcrTfBbxTA2DngSeVpTwoY7JNMjXcMZjE7vA2jgcPnC9rCg7jL62WLdmACadvSFmtT1yLTVas7vA7gMQSL8R9Cg",
  "key40": "3yjXATcWGJcyCpv2WTyjFPpgXVreJjvdxMRknBJmo9vojtcQGedXCKfZkf7eJdXSS5TBCT8Qjuk42r1b9QEHamsh",
  "key41": "4wdz5ABGadKmpK5dWaLiP9sU8Y3XkW6zzsTaskfPKxnCKBjUbex4MFxpaYBWhnauYmLzaHBg7DCsLYMbVk7RZKCz",
  "key42": "SUNCWKB7AvoYFVJppt1TT7AnLAUu8RHGEBTkYijzhRcsqDddqnquzJFv6qJw6ceEPq4m2ipXX87xCyqKfQ57Tqo",
  "key43": "3fR77ujBQ3dp7i2uNHCyZeSq3a1QiZmZTci57mcsU7Xd7vJLSDot4iBTyeUbtpUcSur5qhuJ6xr3GdzwhSa2hcdz",
  "key44": "apcsHV5SQXk5y32sm2EBXWbv8SAQoU2HpAVydGNQNLSAdEJJTAZ1XQ4TeegKybtruFevMfB2TrU4oZtb7koBWMS"
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

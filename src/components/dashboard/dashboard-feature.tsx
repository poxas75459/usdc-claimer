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
    "3DsCtxF683C3u5KmXDvVDQMtJXgCLXy9zuGyAmm9fduBfGBFNbbPYRbthLWukyezK7QpAtt1H8pvvvfvdx5Gcp5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9E7RRbh8UWuaEdPqyR3AuFuAv2Qwn2uiWZtZTqNmaEAzM1sqKWuyRn29hYGvQb1dtvmCWLSr9PxCfxQ3kLqA9z",
  "key1": "JFWHjqEh2qC5WyDMvMFKbk6VWQHSFHee6xrCvwFaP6SwfNNXH1FxJHLcQ3QfzzBmGowNmvCVZDEcHXpMYoLFNYD",
  "key2": "Gj8xTpjfWPb47febiQHuviw4C6kUcTdJaMoQsEyxRdTMm1dQRLsU8S78RzraZiYPQoGqBzBtc9jfgjRyqnTx4CG",
  "key3": "31GcjqmMnaxRd8NxdJPm9eNXEReaZ9o4ygZUPdaqLE2fqeaWmk5D61E7nDYF9f7GciDrKDjFS6W85M8tDdP3MwbW",
  "key4": "5hF2tQUq3jZ1PXVu2S2PE45BowWHDxE41nrHXDg9aT68Qc2r4Kjpqj77VeHPU4NHdh6T1MLhn2xwkX7989nUV4J",
  "key5": "4Ym3XFpG6bds1vRy6j6tzWMfyxaCLmjGiyykjcoe5cw4HkgVRn2CuuYm2SBKw5Tmga2xR4JcWJqAn2CReAXQcTS1",
  "key6": "5tjsTBU44hf1SEQ2FJZcttYTne8eMiT9kgvL2idQyzEoiGGpfKRtv2Ex86PdEUJtu5LDBnGeyYcimeWHP7th4jNr",
  "key7": "5oJYaN1qiuayQMGJpXBqv1fq9waRQ8VpwHU5gFQjKFEobx1c61ibmEHuD2oBWUQTcixLAPyr2kdpMFfV9bVUqBnc",
  "key8": "2xJBzuhxGTozBC7ovMqizNziaJgZC8xTDuYoLvGXE6XFQBkxH7Vgo4w7HcxTVsQuvPHQLYcsxBRp6c1Rq3ptTHbt",
  "key9": "48vET6Uyq73Guehev6TknkBhhGiLbPftKuNC31sHJqo8kTcR1HvGJHCqnbJJEdiTD8RH5Jx6bTPPoKy7nbDKC1xD",
  "key10": "5we3tumcXtdFWmVxnGP7LfjhYgGMQyEPXpbPidBcdmYotyh8pv2cMvcTxD7u5TckAmHhURRutvL9ovo4D9u5WRLh",
  "key11": "3xnusNtAWxWNmMZ1NSnp969GDCszdiQ38Qai7PhiFuCKALJeFP1viHw4HGHsUk42cjr3T41qEBfigwiVu3SZSD91",
  "key12": "xRVuJeSteTfmnEoPi328jwFLfLTdpHPzCpZh3RqAHcFJJz1Z3u3VoMn7pcvZDGD4T2c6htVdcMCEdoqBMcWENnM",
  "key13": "5TWhGEJWwo7JNswZzprDgrMamCP5dHUEH1avKf43tGBsVBQfyh3UdwgWcEQKPu9vH3YihNfPWK3t98dxKb5ebZBY",
  "key14": "2bTLMC32cbf95BSFJLDS2qXLd22cXQEv7fwurJqQjQaR3opnZWXJxV2ij7z4n6gC4dGw2wP86BZZ5xMMpDTunSnu",
  "key15": "378ntE1RyrsxL2bgsf3CtcdvnRdVoG4WK6Mspnp7wxwabqQGApANueFBTNxjhvRMAxUNKXjQP8zQAPc1Mu5LyWrC",
  "key16": "2SkEZMKxFzpmLtD4AR8YU3d8jz8fW5mWSP6o9NKf7AY5L4G2WYKNQjGE3Hpnn9jiALJVnSpxyfdxxcd2ntabhkS7",
  "key17": "223LbtUNc5pT7Hp2dEeALZYxgNQyv5gyH1pxn8Yn4Usx7tjQnCAGXGLe82m7Aeq3pt2DNyryr9K9xk1i8VzkkKpF",
  "key18": "4oSR6Jz71YfuxbDiDphSEbyFq89VL7zUDMfJtCZW168fMgjp3ByCmbFe1EJt167k4k6ryjdWHegs39nG2MtHJccF",
  "key19": "eMThRjEi1JCH3TcFo93AJvjenhx1WcqJ1ehsrDjNLKfEJhDRTdfx5mF6QekinMUPgPsNy5CKLpBzPfnxKvi21hf",
  "key20": "ekUmzph8twXRywgvX1XJcHzXWNBXCJw64ywKf9f6MWXcpGYjBAFXpawNY9nx1xgUxsbpmmxepXhdQfoAWtSoYtd",
  "key21": "5zka3eu6eGzqa1WnPwmsmX4n1V4ayDbhkVVNXBizGAivLuRsXgLjccBQo55aX8fh8B6j8RToJNdhf4ZK7pGFbKKi",
  "key22": "3KMjVWn7sMjCU9y7NYdALLbYbX92bRpM353g2wDDurGTpdTR1jKC3VvesxkLpq4egiqc5et8u9WFmsFjyWyUGThx",
  "key23": "3Qm3YBqNy6ELEMRGUb5iNB5R1GJ6eEHM1X6ZwQTyWXkA4wox4aceweMEn9gk9G3ZSL3bRHzBmiMtrepPpT9gwvML",
  "key24": "2YzMCCRJquEakbtwe7BKHzqG5VYLPpAGVLQs1MBs535hP2QrgkdCZfrQbEDtnkb3nD95DH2Zxm8rDLwqayXdRLAv",
  "key25": "5ax5J6nop47BF5Th9FQXG7wNsLocfW3Wj66qLcdtFffirJYoZWAtcdYqvXRcLn8jS9zvnVC6pKjoC2q615ubEsmo",
  "key26": "2Wd8tJToXMUCdhsZkt1GR6izZPeTEMZQC2MHaAqydy7yQC9SQG5G7jVwSqq532VviUGhjGTbX8GMz3z7owNxZyfT",
  "key27": "25oq1WG2QLVvhq3PcUWzjhYy5d7bs2yg2hz8GcBe49nszjFeMEPzfVUv58FSkGZvKvxCYGeGYRRMstfWidQJ7euE",
  "key28": "2WJUPsVY1TEie2nUrGbDMRm8dxkCv6XMBg5prNoxSxfR9sG3y2s1Fp7VBdocuUdsKhL59EBAnY7oJ8qQJ668JvWU",
  "key29": "4r19DiadVCPoYcRTEFhoYVfyHYVTr7RjTFsxV7awoetepCeztjX4BY6LofuZhk32CWwK1pFW4irAdWXB5sP3ZqLH",
  "key30": "4pZU1JYKAH6iMNav3hx3BCJq6uMidCjwQWtgFCgpeS4Yt1Xzp5WQhRGp3nhVnP9rWUAQfrrSXhomwpT1CopXomcp"
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

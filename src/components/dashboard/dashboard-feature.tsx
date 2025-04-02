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
    "FGkemthxdomU5dJKhRe3bsgdpPjR8y2rzFd4LrDb9L9HWrujWZDrJ674CjSJeQBp4BUDj34SbjYezYf4ZUv4hWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CSx9k8MFzZsUSidmX1aUVQ9w2ZcoNoQapNknZ3xqHUqKxYwqr84CeqrDzKbtHc1QwUakaxJzBr51rcjPgDidiXA",
  "key1": "3LEUQ8KYpSbBMw5nQj9xyj5cS81ifoT73ms9t7N95y5RpeXiWFzP5XLENQ4dExtfeU323YHsZfrrpwYWbM5WoyaW",
  "key2": "2GCHFbZUcnKUxxQSY7TzWx5Qr8kT7cbqKc4t2G5rrQNXnwBR23upuAevSww8j3uxDgcnhHem3ZtYpZKBXSAtKNLk",
  "key3": "6wWoqW1U1zfFveJreioPgmbaT6DyJGd71yxjbXhkETYM6QnRkPEWbgLAhQDBCWwM9mAp7WXCmTanwjei7uZ2vdH",
  "key4": "4o9KreYPUfNEfL8f55sudttgGpTPU7BS25SpuE3MmW6VXSXhfWfXJ1FzruFkKpMRzS1vo7CW1Ujgkmg6oYnQHAV8",
  "key5": "45pgGJVGPS3syb2kiYEvdpFhdp8SoRc7zVYkm5zhZGcvLdsDFJw2vKTdyZLr2bLJWuVDy1bY87ijLRKvaeq16xvW",
  "key6": "63vqhCyDahJgvNkZC9DHgxWSSbk7v5KA6C4dby7i9VDUbrDuCxNLmme42u1vHQ2PFHQNKB6YTfRATTpPVrmfA4VC",
  "key7": "2PmbuZSMV2KTsJ1FsimyYuVKwYDpLjQpKdMEj1cyrQXR798Jc7yk8qXCTPQZAqgwj759m6agGam7EVkbGKLyjVze",
  "key8": "5CZV5HmAPpkagHSU6RyDqJqgy2K2vZoqse6pBEi9WQezk6TKDpcKYyhiJ4yULAx2reKShTX3LoRydLquHihbBKhp",
  "key9": "3qUmMwCDqdY46eS7k3NAkiDuFRLDV3Rhq1DYKBrXGGRq5SjCaPGMf8awHdkGtUirSDDBMJCzk8MrKtaELTLSEPUi",
  "key10": "zYRPM7GuEmPYv3a9Pm8AzqpoTj9VrfMmHyFBFt7XTWBgbCJY7qXxQGo2iyfte7m8sfumKrJ67ZugyHjucwuJuvM",
  "key11": "2HTaaGTUDem5v8LyxQcCtTQvCfFnkv3MEqU2DJYkiZej3UMzQbiT2RDU4sJzdWFZmXcYmZK4qfZnyjGuQbHkeWsn",
  "key12": "ZP53GLTBH5pMYSVhtpqwTwfcMBbZYz4ZtywPffVr6SFxkiujS2Fst4AhvpScmd3XX5T6daizzmEFS1A5nnS7Gon",
  "key13": "5ePsBY6w4eyyFuT5zrCNQaFELXYYr8dYuKVEisdFzLZCdKDavj4XFxXKfuLWf6LYRi78574c3EsYXzbHtzFomXGH",
  "key14": "2KRVzax2wxEEoYuvdcDKiKNCxN4RbBZR1pR98py1YSemtbc9aZC47BWRVmpv3JJn3775JLuNf9cxX4PAQaHr163x",
  "key15": "4hLpEMrKS29bFcGmR2rRtvYPsXGaj1EbfZwQxSqLvGKdmtSXnrVgtLq8J7oCB96pyH2zSpXdrxvrvXqtVveNssvv",
  "key16": "42NQ6rMBuYo8y49rsgGhPGYJHCaYT15krCvbaGdKDFmMG2LtydRSjEUaxdDp1BnNDCBwAhsouD2zRDQFm4LLhZT8",
  "key17": "orpgqRrtpH3G3dgv3dzcg22NV4G9BLhnkwH1C9VRF2asLK2ZTE2wKcPGg2nHRBcbjPw3SnTA1NFkwAvk7MfhZBL",
  "key18": "4eKQEyX8mjK3nE37suZ46r3qMhGRLwiGEr8fdxRS47z8mb8WEkWgXWYdykTvj9pnfubJnVsAUYpgARG72vSkbEf9",
  "key19": "37WZHgLHFkS2Rwo6S9pVyaKTWTKTZMeGui8m2TDhdk862fr9fPj55PSm3j1AFwBFB6qpx6M777PcUgv9whPpGH2c",
  "key20": "2MHd6AZcoby2aTes5Vx7gURFYce76p4fQp6nm9ZqE9gpx819JZWciqGtvCGqNnn4nDmQQ87HXTtThbg82BE9DoTo",
  "key21": "2D2FbxHQ29oWY18By9uCMc1U3Gxqk8az2KHBTCL4C75oX4rbBX1QyW2VeZXJvxHhjDh5eR9HWGwRx1p5nommzBWn",
  "key22": "GroPEg642We4pZq1iwyYdVAX74CLPk1Yj4pnRBAc1zUAB11CsYWPDmNuaEvHHsPWNjkw4UKTuuJzqhtUnrE8UbH",
  "key23": "2iDu98jk1m9PqiipnWBgrDdxyrGfkEa8s3fZf7fZBu9Uscj8UmeiR5LnZKjEbT7TxP7G4RdP1UfKub2zqRMAfkkP",
  "key24": "2amymxsFyF4NnKXVHPc217xUGEUw9V76GfBFyHLQJJjuiX72AhSmnRLpqP4LZxfdJGPNFAzTFEj95taMKuBy3jjk",
  "key25": "5SLQa9ZyJ8EuuoaZXnyZTrXgP2m6GtjZCzMxfSad7BC6YbjdzEKgcK1X4exzhXRe198pHnTBB3FDELs6HeM8gcy2",
  "key26": "2svQZkbB2qowGxedfEoLs9HPPsA8CogCRixVQeecuHExeRBPUWcQxy3S3UXHq5WevQSoNqtNDaqfZoGfoAmKPzae",
  "key27": "3ymtvzd6KQ5RkSCmBr5CFMqaA5Jqzw2L5jVSLSGwNZjiPcHr3BystiptXtuL5mR5GFE2XFg3JyFimFXXijWF65ER",
  "key28": "4tbQ1xgPVorLtgSucfBtpcHhPAWDGzcFopWzNgWALXghiL7s8XiAMRepbvMLRCvhQxLrFqVcjp5Pen2eQSevUSXf",
  "key29": "4mJB53PG6rzn7WaPowRHoRziFzZVsMs1S6xVbooG1ZStRb7H2ZiJBMrqK9mK1sgsbvaJdH7P7xso7B5iYG631yVx",
  "key30": "2FFsvXckjPi1k2vea49RjdSGXym9QzHx7JFCgeEz1GXzgtXR6V6kxS62UVSWX5cijoQEj5wHSRGkyEBLDP3cFpur",
  "key31": "53wkn8gDewDMWU5jT5BYtsmiD38ew7zKDswTwERw5mXeKuhhaZ1LwWdf4zpWhMhBzLTGUiqvaB8auBhVcP3gtE8d",
  "key32": "5da3tC6mVQ8wLKbXTt1FmL7Vv9mYVM6YhPtxUdY5ZFQAPAVgCKUXnusMJrir1Xk1ZVnhPyK9LPVhwipBov6j9DWf",
  "key33": "3tMdbLzF3gAfiaJJhTKEQapkgBMauLK4yFAP4cpUnY7otSHvL3hgmvep9reRxatuzEf6kAwfoxp7ZYwTSV7ywgBa",
  "key34": "5EwLzYr6DARxKUYPiQLaj9dbng5UXrSqduQ98FA1ofSqfq9NHTrgRX2mJzFEGur6KaRw3j1UCAWNvQzaSXww1RJW",
  "key35": "6119zo3PAqF152neWWjTFWVCd3swJGkQkKTmvtd73Efwogd2RgPPgcC4ev4XZGMJScQeFDTKyr5qdLnsPBU4mpcq",
  "key36": "5N4YYJ1BQfcDBt2K7RrkFm7u5WNVyqkoxcJs56zrnuuK1HcVEGQ1KgNNWomE67654zkuM6fXqU99M3r9hmDXEu8q",
  "key37": "57iy4PhKw2ufcYsZLK7PUS5dA4fmq6na7XWgyPeC7veYof82DzZyVgjXnYGWUEZjWk4jdi7g89xpvkMgMVvMAJW3",
  "key38": "3mkmQmGM9J6CoXadpY2ykVxN1XNAourker15nTjMAmexkqPKMUajFhWsaqJasgBEdmfz32MgLtfi99np4iZvK3rf",
  "key39": "2wz4hL4p2gXXWNtKxvWYNzUQRDg5sjYWPuhztsWMGd2tbBBvSZXDzt73cwV8oQx2NJ8tgdE7iYq2BufLr8djuTyf",
  "key40": "5PiEVbd2tBoLRJ5VHHern9RdTNeNARbY4C2ttwSD2vKcs8bxeiT2mU6q9NFm7ZY5hJFL1Dqmou8PkJcnxwVov8gx",
  "key41": "unFxLygdbJ1BVa4DuYbJTp34Jb9HdizwGkZNKVvArAs1jsupitxvEtYrCefKWP4rH5pA1o5tRnVQFpVc6gFGiPn"
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

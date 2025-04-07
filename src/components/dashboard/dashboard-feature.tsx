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
    "2BH6uBU56NAmsXS6kjPvdjp5eaCADSHvn9JSWPTE8Hep3qK6ZGeJmMsxmmrZgZKKn6o8GSuvx42S9G4MhYCjcXAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7jm9w6gVbxbTEEKiX3DpD5pvai52j5ttTudAgcWCMnaxT6N8V5yY2KYhXk5te6zUvnaG53WFdz7c5GeTEkbF1B",
  "key1": "5vJ7faey3Wsxgq2WVMP64FPjg3BwTvGzwZ4h7DxVxcZMGTNPfBLNcQ9GpaMr148TM7PrpmzswKMSYRkyz6j1EwhD",
  "key2": "8PbdyuRkqaHq9gYFzALDgYjffsthpwgbWkCqafSyT25aXnQtANGcprsari5JvBg5qQsM8DwRjfxeaK1pQ8vH9bE",
  "key3": "2oYAvRvzKTcSo35HbvjyeheHdUnvNs4ubwtShzf9C7PoPLhrVMNpXYKJyySbwD6nvsvKwNJHM8W3WVxSPdsyS9UC",
  "key4": "45dMkzD23qcp9GyqxfvkvRFN7oQUtpzSd8hckK4vbjaMK7PooJtP2yCWsLEa5PHoovyeEboFmpVhoEXZjyH5Ng9Y",
  "key5": "2QaDBwicBUjB5xw3EicTJUbRshbThPNSKkZ3Zo9EFJVyPTMYueNk1nsPvNvariEDY5CXMJYe6fibaVKnLkYz8XQq",
  "key6": "5aAtd3fW2wX5ZLT3Lez3tQRMVCPbJM1T6hjAQPvwRtCKDSf5FyhnXGgwxSSF4oHmSReUmzzTybWi4jox41Q9VtDn",
  "key7": "3Ecdakr8KfhMU5PYkNWPUrfmke2TXL4wbu7vhUfRogCCXhUGhY32hVLzvJZKTK3v5oVUC6MQyDHneKMauEDAUUsn",
  "key8": "4hAR9UkQRqdL4T4oiSiAZUYiswcG2dnm4SxZ3tW51t2yrMCWSsbCXV3meDmoGmD2nPYugUqAP4S8CYguFQPSFEQ4",
  "key9": "4MyTCjBjoZHaiPwqFqJxV3FjEnWCvsuVFXRyBzJnoFhn5ZySruXfgh1unjaAWUmQrZQseYMGi4sdvnYyoJPfhSqc",
  "key10": "gtPThney7ViNnquzLeCuCMrwdpSbLSczRMy1YrkXeZoGimf3d5DWUNuEk6i3PAa5WFQ1pJiX7A47V5sKTcwV7rZ",
  "key11": "22uvhGSoxH4RpmpgWVmnUAwCpacXMsahDMF6QvqCdmfVfTd9UsLytqHXT3rNutjMCjjHapWMbebagYRMadYtDnij",
  "key12": "3sJ7xeGkqqX6cXEMuc5DkJLR69U79jx7b9DcNcWB5P6taQMxuqMnwvbkdR6XpjufWMqhQV2bZnwoSJuJwoF2kQi7",
  "key13": "uxWLZNdgMSCmnUbrPrpXKUJM1Y1Q75PuuWNLPXrGkcods2TqjDvkrPoy9pZXmpNwqQb1N3w59PCY5t59bcBv1aq",
  "key14": "36wJyhDtoGUgGWg7EkFdkUbSWZyh9ZXXqY5rkjemrSJifXudrSr23ws8UMjaqsVNo5cjdsF1syWip3f6ShPr9AfE",
  "key15": "nHDF1WRioM4AuqnjTrEVriyABZZqy1AZ2xPpgwGpZcuSzQocsQx44xqNkPaTpWigWHeDyCHDqQQCMWPrc7TVRxU",
  "key16": "3XoU5sH9wQaSseTjLJ22HTjkXvSuHagWcv9M7mvddGPV6ik8jmyeHzQmK11zac6d8fh3ZAGyL6SRn9fjByBMMy3k",
  "key17": "4hScqUHzJFHJVKs9Bhbd1gAjyuq9vHiKetdLFzfWgGgoMME5GadP7qkW6YeFuanorcuTpuMRQp42Cz2d2iksaLz",
  "key18": "5rVjecCHo8ciswfFATQJW861YwsFxifpKE52LF7NhK4NkmJm4sFNGmDDzfsZX34B6hTmLqztc7XHEf1CztzEBd8q",
  "key19": "4SBsFupsvWo8PjdxwVFZifCtEonGahqHj11oyFx4w1aFVYfc7KQRs6egRLgFzTCWCnSHTX73Z4nZGqiFi27VxSYw",
  "key20": "4QA37LDcACrAk6qT4mwWAqfTY7m2KrMitr9tF7NEw33QHgtASktWUTPFPQRqQc1wh79RoQovs4AJkLf1CvBXj5Gy",
  "key21": "41PdpdjMrfc8uj3P9P2GzWevhwxSHaSjG7vfCBwb2RBBWxMkvPRWGvHsZ64qVJqFzhFVjB5WCUCZ9jdgqtSwghrx",
  "key22": "4uz7pk4hVojfS4qj54LM8DGopaib6Th9XhmJPCKeJTLKsCB9hKjZs6hz96k8WAe5f77Ng5WeTySrkBBhptxvWxcP",
  "key23": "431uZaGjmSbzVRRn1dCFdP9hTEtXZMnuD7QwzJwQhEFeWCzjSFx7BFu3ubxJZjL1PQndzaXJ8TyZKr3iT1Dcxfaw",
  "key24": "4fTxkUzMJtL4wAbtioH74kEKn2KzRV7Y1NGnDGbpQTMoGZdPaowc73aevvsKY3Aq3rjCd2VkQGVfWdD4SLkn54UN",
  "key25": "5bFK32RJzACdhdnosRSjSkbbyGCSCVmE199XL4B2cqhCbdnKXPsd6taT2pVkXtLDtMR5sW51oFdff5T83YiE5xci",
  "key26": "43wCNJ5xrYzu5Zi19daJqfDpn2XhmfetoxigzALiEbiDSCV7DrM21abFbCYGcJzGEP8kfWeHnedVbicLjd6YWW22",
  "key27": "n5Ttv79fBn9vN9aoftzrwzAevbhdppcwb9CZDe9U8mfBnQ47sPk95VdtgkB1fhqDJxxLXBDDJUELmmd6RA11Awh",
  "key28": "4V3nECbDni4kjuyxL76dnuhXEF3wH2xKbfn3ou2FV22eEFYr97N4vDcL9zvKDBDrFgdokMnSAesg4zzMKbbeBW7H",
  "key29": "2qfnih7fawgELu96ktX4iBrjZAca1gbiSXVPrG7aUg3C2Qi2E7XAkzaF2z85UK2rsZ5LtTQHZVoAC3n9zzvdmVyj",
  "key30": "5zLnP9oVRJ1twAuno8oG9sAyD9nrjFPxU5ubCdG3PXroaJinTd8mBvCKW5VWzbNS7KyR8wPHZwtpEYc32kcBM5Ur",
  "key31": "814GB4JV69rM6a6yNMYLianshgzhtRzrJBqiEePW4wsijsLNqSHj6RN2MSnyw7bwJsu9rasQ9bHNT46uN5bpztx",
  "key32": "cQ6VQ7Wsg7N9uKNMqCAYgoCoFj3K4nBX4A8xUMzxhpycTTiLKEMvYNHH71NKqmxyafE56Q3EsFGRBgq8HjBcUYA",
  "key33": "sbYAiaS49BUmKaPtwRFndjRqgW2ujoed9DpBE3GAMdmpSKivtA2VHc98wa9NCxGbLmUfNiyBMxMcC9xPFTjGh4h",
  "key34": "4bgqckW91b1RFL4dnFpAcGwpmzduSE4XwkS5vg9BWR8VQBt8kMyRVdpuxF63dGreBs76CmQ64iXAfBAAwwDJpJRy",
  "key35": "2Bbh8JNHRo5JD5WQKggSRViKbk1R7aJjraLKesqbQPDZaXqyr1dGiabC7oSjd123s2VShaptsNn48q2frvKXodRp",
  "key36": "4LwkbpdyZyN9oweotMFhgpz3q2KVjo3xSpNbn6s5ndUXQ75seMRJYHc6n5fqqcJyEMV2KHFEGT1DCVR9zzWogSdK",
  "key37": "519KuQNFXMJ71bzVthEvteN8dS3uecjZhMqr6XDVMDKifrVBNQ16XLUerQiA3yjCtY1epF7hKKe6pWrUA3ynbL8u",
  "key38": "3vYzx8Dcb43F1WyfNsp7eyxTJr6mZeeshfiPXFMhCHkeceZ89RBBWXAHuSaLjJhpgM4AYJphkBLAoh1fLR1TeLb2",
  "key39": "3uZvquoSsxgtWkP3o4WwMiYUkoUiehQybMR1eBJadDR1uNYPfAXMeAR2MfPCzFZeyircP5Vkn49n2M7YnzCGfyPN",
  "key40": "4UBHtntuBqLUczLuvzW9BdBRMA6ZfebprM1LNWcnJJ8a6MyxNoqRwL2QghMyLWaiMjQDcMjYxNKhUFNvz7tzsnzm",
  "key41": "2bEubyVRn55ui7Zh1VWNKvMy2Jwtz1pgtXPZcjMJKVstStiYLouxQUfAH6r53j5HNsWswMmENvM9uYg6L2XayXRS",
  "key42": "3usvpCM8XDnavJj4c2Xf79C31RaFUjoHmtaDgVUbzsfkgsv9Qx97knGpWha1daTLigc6SD3sT7s4wyRMcTy3Qmxb",
  "key43": "3fEjhJ2GBy8Cb8sRq14tAJW5H2gDsUfsMcQSjuer7du4cZaucfuKLML5PMxNTLX3GDMF1Z9aNb4VUmNBBLG3Dcrt",
  "key44": "XyPmmx4BeeGsNpLX74GKNt2qwYnudYnfhwmudrMqZZrq8nyGCvAhs3gaxZ1LXgiiCM8fkKGFUG6ayRPaEUvuGHm"
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

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
    "5KArvoJwEB6jsTBs4GWhCXz5zX4Ne5iiAGx15H5iSqSJRRFjwrQ6nscor5r8Q3hs4ZTQNyTFxJsQM78raGPcz2iJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUETeahjaXXk3J8x5UGtrSoQFphTQ9ambu95oTZBvPmPNpTZHUm7pd5LKbgy4qqMK7VxMTEqrh1ZoxoMneDPDgR",
  "key1": "fhmkMj1j6f6X9r8ApWT9XsrzfYDvmcECa4Pv1rg3WJrhf1puR4UYE7mQrsZfKcaXwAkU3ixHxKGd1C76aP7QnDb",
  "key2": "bVFtW6f6DEgA7wK6PdHcSc3MDp74jW5MwBzypUBp3HKxD9c247YdDV2KSMxbf9UHze5ytxV3e3zFvPSL4ycky14",
  "key3": "3v9pASLRkFmqmDTikwLaBF8Ego9oEodV7mCGeiwezF9ztgr7MfsbZXGU4dBWEh5kazCHWcDcUhmUUoPvsbaaaavF",
  "key4": "fRLggZPBkXLe4JgkT4RRXWJsMRNicfLDi9Vsn5Zkxa8jDzpfBs7fXP4qNB56JspoRhpu8TTTS1JeWXejVceA8X3",
  "key5": "4pB8FhYvQPRJPD4LGhHtGpxV9gXVFyesuz49nyUi9HPNfUijQpz93GHJLFC9margRiWNRBHDV2QpbPZaaexWaREi",
  "key6": "4j9Akq3ws39QKz75oPq1tmB7UdPTjsAVugz5BmvicpgbvFtaaT574Mopa4Y1ZZcs7MwmJPorUPbaBZsoLxWjGyXS",
  "key7": "44k578tQLFWixBTZkinCDPwFFH6tCMN3YD985QU3iC31HJCVTwkfykQ67WPYNE6KMsdbgr36STHNjBiC4xNr6Dai",
  "key8": "3TLFuS8imHvRn38W82p4CzkmgTkaxVhf3ZTCYwgn1hNTwX6ftfdYwbsNC1r25GuLt1QpsEjVggfJoRcxDuZtDcf1",
  "key9": "5QFeHS59XNVch4DHVLfYrjpgogJq42uWQKqYo9YAySqerE1pvM41NVQRHCy1K3F2rYDpqXyzyp1zhHca7ZHpLuKV",
  "key10": "5jrJsCTi2a4J4VEQZpk1pv7HtEwmGq2KSxmg9WapvQpQD9uyd4pDyjin8En9qE58GYZbAuYxmA3peUeDBQmybUJo",
  "key11": "3iGs1EcZcU7jbuX5aMoGokPHE1miZGnqfY1VHcmBGjYgfVB692QTT14tczmezsCNoN4mPPqCiv6inKnuYexHVpAK",
  "key12": "3RL1PPKbj9mzwFkgHbTD4SrtoM7tr4wKb2W6uaAkSxW5XTn2LyndU2qRcnKeHeVbxU9ujV8Bc7W6sqRsFTEWDsHG",
  "key13": "zEw6KyFNtdnCttCWJ9p1oXMHqJyoz93xugHLWmboAwtcbXLrLGjriJKuuBgw2G9aVJWHc9MTJZzSVym17WyzLMQ",
  "key14": "61GwSPoEMsaNMfyocBjjJCNipxXswB2VEqW8V6b9HygG1XJyHZoyrJtvXeiREjvJhjLdWUNDyEuHDJ7eWQfq1JPg",
  "key15": "2jDTHnbQRbTmPVpLNdCi53fErmPyY9TqWtz9eTxQzWPoimrafGJSzsRxhiyU5UjXukPcjk29bdELdkBrc9qAgocW",
  "key16": "4Zt7N1K1oVxetaaK1omRhG5nihWMMDvkjm4ELdK5GgrHEFCgdjud6dBV6nDjLvwwS3pxuJttMkJ9HH4PfqvC6CeK",
  "key17": "3cYuNJn4DScrmaMJU1d1g7GehdjXuKYN4hCSbkkmxF6PK3e8ZHvbLe86crnxnftpL5r3LKLAnvhNHMU1ZJYSrMRh",
  "key18": "4pktqwBbQ1YWakv76mWWNzzXSy1RLoMVQZmAcZxcSUHTJXRXiJZpTkHNwdaG3F9SPWZpwaeHVQx2vBQ7pN99GSGL",
  "key19": "3y9LNm9KKcK9WQds3EVttBbQqPAXNrtSWMuo8eioJr1om3y4n8drBCSeCBCjb1GM7HcTGhE5C5XwV9Uco9ConHV1",
  "key20": "BsbPRHeFB2TRsGj9bLzL4jDrXdABsZSqeW3fCd24Mp6RpCvUQptURL6TnYc4tSdXibVehTuJPwbHQm5Zc2HeVzd",
  "key21": "2Fkvhje2aC8dvTmLKdbDgBUP3xVPnz77yJ51WKZ2Tfjv7qiVU78cZK6crNJP6W3ytVPNCLc1SsyeXFTsZYhKSBwb",
  "key22": "3R6VGdHV1orJQBjoL1weYVRcpRK7CQhSaR6L1KsPZz4v4MrJsCPq2gDWiyQp4b2jvxiarMpz2XMPALx9stUA6ygB",
  "key23": "2v3S9YG2ynT6jHLx988rQZrxQzPdQ6w73sbTWiSJQiAkJGesXuKmzCCHoAsmprU5pfK51K7SY9RZzNa4bpQ4nxDG",
  "key24": "595A1oqfo6doRsHHN65AX8ZMADGGofpAdFRuQRouFQSF4TRGUFYhrHJ8Fu1BCbPcbJS8hpZTJcp8uorpaFMxSu2p",
  "key25": "56t4MK1fuUzpiJqQCUg9NjAReAa4snirL7y4zFbUD1Qdin44Bwz5DBTNLZ5JXn8dGVC6gi1QzCW1Lo2pskEizSgq",
  "key26": "2WMGpcHGrYUcBEf7oHZZhBQgceeZPzHcenfgvhp4USJ7JkBUg5LvHPcuF6D7Q5aYFDPwCVik5TA3bugvoNnze95G",
  "key27": "nGQwnF6w3TqqRiixcnCmFwMf2LXC9HkT4JBeFDrFDsrNb7r5LSKs2LXxL9myQjTR9m7JFm5h1hxZWYJmWoJa9E2",
  "key28": "5dN6g9r4io75kbyQ9M1Z4rU8WAicuJmEwUQrYtB3ryf65HMXzor8kPvjLH34TjtZkC7gNzKLJpVKDuVQENp6vEUd",
  "key29": "Us4AHbLynuJ8Kn3TFzAm8aF7kcNCSVRRU75diUMgjLUMa2mkK5USgMaBFJ6VK4n7uDpJQSm1BHnhEuLLRHcrrfj",
  "key30": "3yJNtzBdCzaWwPZgtBqWsxT2uJNsT2ag8x1RXHyPYQHt5vUtYoQV6XHX8Ks8tkk8Afjtc3LB4PC9mhvKKe5Ar3Vv",
  "key31": "2eCnTe1B9xYu1C2XY99ShSQBU2azhjRSi8rhMfpBucoLdzJAZPnJo24QUzL2yMhPe2Ri2D2hg6GkHktAEvZcyJoY",
  "key32": "3whJD6mVFe2vTrZFAQQ1UvQVZmZsDyKdLHjrWmp8FPs3PLAYqMfhiTj7aFz6qJtHMLLaEpbzvbc56CUikCjU8oCE",
  "key33": "24Ma6t59FuwhUcDBtP4H5scfERY6G5zWCSkRFhkZDyuM9qW8YYYRgC4b7qTzqot8R6EzfAfrNWah5KBL5SBCL6qB",
  "key34": "3bKkVwqqb2FSsEoegF5TnU4gWzMzn9m3Txzv6zDxbaeeLNgD2tmcy21jc6L6PjyMyK2T9F2yPBP3dnDjQvWmfJek",
  "key35": "DEhBMkVRFLv38735pMAdFtAzzoT2Vw7TkXQbeeVytEHMoWewR3SckezakhwxnC15xnsHZM82F14rSFWY1BhkjAe",
  "key36": "2dQQr2wxDc6BApamwKVRbHTJmZ57wR5Tzftq68poE5gtCG99RGQRDgT8Lu5nb8tBi4UEXDtEJNnDRXdvgo7v7C4S",
  "key37": "3e2nV6hvnADhKYjm88sZWkET2mtK7i7XgyaYnTaLVxxndB5tVGD8SBro7Xgucg2z7CKNYdMr3tfz6Hw4XS2yYQxt",
  "key38": "49ZBwcRAkEHNXhg761tArVj9i2YvU4bRiZjVc4h7aKxs5MzTHfdRa9feAP5scnnMkxx7zzaVEVWz9bm76yg5sWmG",
  "key39": "4jt6JHDEot8D5LqDhVcoc4vzNVTNKW5bgq3n7nBhtN9KGh17J6LrP7GVGgj5gYQbzbC4mdnpkeJAEXKfio73Jiz9"
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

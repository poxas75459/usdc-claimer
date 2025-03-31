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
    "5Q4BwCgtN8kMsgDAnrfK24r6Br1Y9ZT8AuYQwKMw3QwEAYK3BsCLtui86eGroxz7Pn28Tb9VCuR97mDsdanuyF5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jTTc9nBxRNLQCSYFvSuVnrSVRe2FoovAdoeuQVaggZN5YBCgmMv4qPJUfdL5PHYTCyDzQp2oMWuVVyYXV13911g",
  "key1": "27wXzBu3jWZTryM5akhJPusypBPvy2FDBTER9TatmtJdjBLjtzRGKcJeYvxMqJ8mnboftZhfqVUjiDHxjvn2P3cQ",
  "key2": "cCoGPfSJxr6NoM8ecpLtFB7oXGrHczkKWy35Sfz7DQwKTEdKAYzWCGGd3Cqkkxi9BPr695VGphhPErAL7DXVXNL",
  "key3": "52fe6Z2iJ5T6eohRVfc5S7xxhRWcWGhSY3WBTEfcZBD3DTSPYZzseJLwGkPtHZaGuv7LLFukCtSrn4R5Y7TRFYTG",
  "key4": "3ZV8JZmf3ubZTo7SjKCqL1DnSvgkuTC3guwCy2PKckoBXQaQKLYTDDTTPXa6es7FzMX25w33HyBXteHsbrEAJZLS",
  "key5": "4fvqN2M9d3PgUVDbZit6f2Mp8po6yKYUmFpAZ8176FkLY8Dyo4KK9Jpz7FErRXR27GeDZnHzhTy94WVhR9bnsAFw",
  "key6": "e9g1ojPGX2mHe1W5xTxvhc1bMyEGUXF2KQRaAS1Bu8gRGxnSgPQSh1CUgXf7Xgtfksh9dKuzSR7dWx2xsJq5c2w",
  "key7": "62NprCdFVspoXfZzy8fq9JejJTwcCske377N2ckuvnGvTVKfFwWBzNKsAeB9v82XLyykPEqcREQfiZDFyjvBVfz9",
  "key8": "ygeeuYvDDtvBFyRSpD9DAL37txwW8DAYYWRCNdmthy2Ksm2QcRNoeeom5MJj8tV6aMG5iMukkP8tkmmVQGXjs58",
  "key9": "3kHs99Du2ksJR8g3B6vJNRjqDL7Vak2DZAznMGkCSGdgM2AoYeMAe1yufvs91P6VyphZr1HAeBBKiBbS3DD3Cnqs",
  "key10": "5iAzSrKRfvrRH1pMVjMEKJoAsYeWXQ9uw9C8CK6nQYLTxavvaFMubTizJpgFbs7bHraXrEbBbMMPPkC7wv4RexAz",
  "key11": "2GtGoMTQrAg97dkuzVBxh8PLzJwosyWCBvBr6Ji2MZsJ4SF7pf78vEj7V18y1WBLewV4dhzfhgNaQsrobN8f7eKR",
  "key12": "2EwZgp3tNCru9M7x1uHeXvhC45JPPm9KiKh5UahBeytmKHVBfd5gQujoDHfMm1hpmWsBF5K1ZS1QZPBtKNyr7j65",
  "key13": "4k5cAKbM7CQyaap5TphsMiS82D9ADxJxah9yQomnEsNfp8padY6SNSDGtGWnm1FEa4VMnSqufAVqJgYUTE49FR6p",
  "key14": "3xYKsjZYJFh8vyWWYRe1S3awqiGV24oLXP9U3o8vmRL3GkrDgaZ4rvHvya1WWagwankC65BoZvhQi1dGcdauytWC",
  "key15": "3GXDXC2i8e2sVJnQh5J6Hkv5Yx1kxPvk8bJUxvfnr8PmgAfBHtrS6wzhnyhsMENX3JWxWz28m8kW1Ggdv2cToCP5",
  "key16": "2gcCmrkmPh2x4S6DNt6N8jndLNgdSP3n2A2jb2xk9poqmyzuaKZoZWv9z1jEqc5gBFtezkh1Swq1fo9xTS3cwS7Q",
  "key17": "7iqykMX4fDQ4eHQatubA8noiVJLN5sqTUuXpCqmvny5xnMT3qpjzBn2NhPFZAtRQP354ku12Hba64sRz6qqvmZb",
  "key18": "2e6jYndjDLvsdKKKeXqxrYgH9EHPpAtPycqk2pD4tYcYaeNhS9YqxDuTpFwVg7Jjxx7TKtsmvbU4N8chFbdNaRVL",
  "key19": "2kxWHWvWvF4cKnB94oGCMZ4uGmnEkiapycAtz1qAS6Q1PDishrbMnje8fKiGzyecmWSuSCivj2BR7nvUQY2gRH3A",
  "key20": "qXLVGqyq82va7qxux7VAX3rvhQm1eaf46MJviyh7VCLQEiCXdNXM2yV8pa1ZWiF9FrmDMXCLsUTjKJWwwWQEdA2",
  "key21": "4y1b3hNmdvrTrs2maDuXpqbjqzn3uBowGN12oaHrVfdH5DDsCjWLrVYVoxgBdcPVm1R24nivSeSAr3VjEC1GS5dn",
  "key22": "2VkodcxVnLUjX8ePDUBzYJH6yigG2iefmkPHwCsVHPGbXW53mj7ghzVsZKjFtijoGrKBu8NEsTKw91htMT8BerGx",
  "key23": "xD1GSWTt6XYLjJ2KdbiQMJYhudUd5kAVAPS6XCdmmhTzA8jLod4bgRUNwhsWXaSxgoEhJbpjAoAmyv9R4kmZiLy",
  "key24": "46dXLoMwkeYauZ9mvPn6NYPpKnvGBL9bcEEoFJAwA6fu8QKhXi8XzMUuA9wPWY38swVSCGrcjPwmhJ1oPxAmN2HA",
  "key25": "2NwHz1cH29PV5US4LXb73PXzSD1tcYxFVfKVbsvb8TQeSPFuyrpDLLkWUHKRJTuqXVLvrxKT4XK6i8nMkjJpHP2t",
  "key26": "4jaEsJKeXS64PHALxRuMD5bEh4Xyus9t3Li57QZJR1NahhXCm1Dn3iayqvprwvR88Bh2GCNkqcduGHRTPXeSvVVU",
  "key27": "YbaLkLnWPd7E3PezoZezPdrSt51Z6u3MPnDVYWgDxgXgioWjHL9k3sTQ5q32k9bze8QxMJXi1qSyJknhwBByLKa",
  "key28": "363nCdu6LD48T4w7oQAwnTj2GJD1q24UyfwtmxcYgouPJMwDrSQEz9KY3LX62RuSkp9u6whrMeBwVLodJUsCXGP6",
  "key29": "62PeQ1rC8JsN7wt9XqgeqVkRwni82TZPUFHEbD2Sso2DEjaUwQPn2qYKAJFSvdkWLAi93Cub1xccCpYZ5HmNoLSf",
  "key30": "4HhUs8aWvaXG6nBPqxQPfFgv3Rp2yDRhpv9KL9ounsJ445q3rYQvozT4H2bWfxgEJrLaLU11jVPQQQQk3tr9ZHwg"
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

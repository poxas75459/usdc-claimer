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
    "65auV3h9gQYMBdMrTNuGGTDdQKQPj1VurjXu6Hpy7kLj4LMte8AfBW97nRoChBYQarPRURGPVX6bP5JsixDi95ig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DJNj6mhA1MJzap75UHkgnu3xN5GWCRyfCWyTw3NBdABuMA7h81bJGXzkht8RPwYcpsTv7HSAx9qpfH3axXVFw9R",
  "key1": "kxPN4BGThZAkhFRU9VxkufJpgZtGoRDJJRZ8xtSPFt8gdTyhskFNVRuGwKQNd5uiyQmPr8FTvLzta8hhDdtiSze",
  "key2": "42oYozo6d3zqKemnK6uW3Usf6qopcYinfVHUUJy8czEYnLPLdSekknvcvZ4Tzg8Ut2Dj29yrDhzA4UCmcmZmpzYK",
  "key3": "58zync5kfrVb5ZhYq8oLZCvTRzWWvdnuWxkthMMDLi4jAfKjsMfD1fUXkzh34wuqEs69SweFdxnmqLD2RBrZZhVD",
  "key4": "sGc6cYd3reruKtCMtCGsewwCyC9PSo8jKDWbyvzMaW3LZUiNDULQPH9KRzxSXrn2mfbY4dBaUztRmS4Hzvqi2Jd",
  "key5": "mAKdrhh4P7YP3G9mhywqKaHWxazUAJYK58fhyM9uAgKXtbtp6ADSYRZDen6vHviyHNufBdWBkCyFUDcMGJrtFjV",
  "key6": "3gVvG8ChMqeWEBxijQDsdkbyFi8JjdFpj9bhKi4Nwf19iL4fuqCgfMwWgJuqkmRcSpfWHz6jwYMndBkRKtW88S8F",
  "key7": "2sL76ZP6764tQK7QzvNVsd6BcqCWfLt2sKSA4186quC4utHXtQYrfK3W916WS54qu7iLDPuexY9LMWKZESuBGDvT",
  "key8": "31cNyy8GgDQepE22tFrcdmz1y5uLkxA6WGr683CYqpxDHePRYUthzcQiSxbvczeU8AYR1b1Loi69aDBnt7whDnYZ",
  "key9": "5ZgZ6am5YsCWsBGRTGqGpUoxWkNCqMcPm5VdJTtjVTDdjs6eUCYkBZS4ciH3iUG7Rue27BmzhWPXea2Nhc5ACrJt",
  "key10": "298dvpFN2CpJssz5vEd73j3paqkkHdnrT6pxYi7HsxuKGib4XnCsmVxjroUTZMpfw9yFEycmK75rGsnYZ2oP5Rn7",
  "key11": "2sAxeLczuwk8WEYwVbEM8Can9KpXcSCT1kAkyUUjT1wmdubBsfMYssoigqrNeMMBcseUhNwE4QD3EbG7x53HbLHT",
  "key12": "3UC8Kq1eWjDDhmpDd4FEEtnoycXWgQEnzohPMmi2eQ3oCs7qbvayCJ9uyCASDvXh49GDatys4U97aKU3haYh41zu",
  "key13": "5uii9bJNdLug4XA4wc3m3HZTZx52iQmDms2fSnXSxXK6aH4HB83RgG343TUW6mQsTvMpUQVmckAKim2dfhQt5WeH",
  "key14": "4V9jCuiUtguNMTDysAi1mSPuEAq1xkQTmKRMMpBhr8dPGc7gL2vYvD5kBprNJkM4xRbGEepLJDPFKW6wszvzK5Hf",
  "key15": "2EYgy7m6Wqhiq2mTGv6314T3UMTXgcbW9BrPefa5rhpDZGa27Fhm7f2gMHZyKWW3uzCgKrutpPZRchwdsboe3FwY",
  "key16": "A6HjSW8LvsYQUm3HgxaiF83CfSb9GX3mctikEsDFPgvf8KpQdEaZoqotX6VX6qFrdkYo2P2kGDwZfd1VoTGM5RV",
  "key17": "2Ns8aEfUv4Tc87eckDCjQgJG111mCuJ97r58SShAf1c3acCwgnwjcAiFYttp1JKiZAXV89Qx8xAqj3d5uBjsyUUz",
  "key18": "2JcNfPieyACFj9iH5bfLHwDk9PBYCpxknmJb2CgnqVRK3Pfdk4RjCAqE9YvKPyntjMSTMZZPb7oYd1DwsipwGPEM",
  "key19": "Wrhi3bgnGUHERFDgweayu1n9GtnA8UFjmdFXYHq7f5QdMLHm71rVM1avUayxAAJQuqiRQrVpZBzDsUzzfFSxFE1",
  "key20": "4ycD6qgT86LToaf44npXjdF8Dr83dc9kVVZ6NR3LkzGWmUgQRy9JRPS3JWumbEK29Cx6cWLXp87BB2GvhwMZYUGn",
  "key21": "57chfhRhx64hhdAziLNPPLkQsWH4btcMZgJ2KERANHqVzWfGwmWveK6pKgbT5qg4PdmyPPLg2JD4uqxNXA8YhW4o",
  "key22": "cBS2t9Nrik47Tr8gGdS654qkhyFjTwMYzcREAXJ1JeWZaTjY8iGkQF2vWuL2vkj35xXMJatevQpEnMQMLHjCSb1",
  "key23": "2Rdi1yw6cY9p1MS1dw2xtjKRjN4pHjTAf9rtrjdnuS5sNZr3yJxrsknRdAuNAhbv2ynAdmsekqogAQBPCYPXPLg2",
  "key24": "2G13XKCCm4nTVQBCgGmVbpdxcY5U4WtqGBhjAP4eBYJfhzrR3MchbMhKDDhnmAg26MEjCiQf8z2BMWL7bH4z54Ke",
  "key25": "2YTqfmweQ1NJ2jz8jdGmqfmNwBr8ZEVr8CNqYacpL9di5U9zVPZK7XRwgWH6eTxaukqaYZyatJrTSTNXUVA7oGT5",
  "key26": "YB7KXXCgx3CWX4m3R4TZbYiLA9BMgp6kkD1Ehvhded3rUXAG62eZbww8CUvdb671AHSPCSVrMschb3sGLKi1ddF",
  "key27": "3djpKRApN7mqbnnraqA8VQx1G93ZAvcc389KL1q3RusncbwDCY3sHzmj321UxQxzjWnSARY3UR9PHAPCG14PeWKf",
  "key28": "3jPcwmitTHdyW9kML4wP4DVCoy29kwnV8CU54uHjLLUyCc2z2QXNA3iC4SidK4SeXeUfXidf7WxDVQTozfgDbWyU",
  "key29": "QMvwciCBph8nsSJpSYGagyzAuYdLCkjvtUW6efoiQN7SvNewjY31QhKakiNvTP32AwQowdxmyktZvgUedKTi5xM",
  "key30": "5kpiE4FmCz3N8pk76f5gwvaZRFJ7cgjHFjb9pYbV2kPeMhzKA3RK8D974MdZ5tii8o5p7g5Gt8qfvs1SCdT9yFeN"
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

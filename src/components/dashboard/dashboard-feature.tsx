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
    "23cUNm69emq1UvEYpd42jvmRurH1JxnGBYG9k8fyJm6d1R1549H5Y1MMvr35tWekV1QR2VXWSoJDgWuSPhrkmQQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44UY3UQxzQB24JumDRYvZS9mKDrzjExvotdj27SwUhoSEc1kKbcrgZtcufcrii2hthqCwtSzxHrfDaMb9AT3DAaF",
  "key1": "gDrFvLmzAUZDP7FnKpavafvwcovdkL5XHCkEKZnsqqRKHkPxYNMdwYaNtbpL1V2DANLRLiiXSNmCiTfBULFnx4K",
  "key2": "3L8zGew9kTWoNKjnTUygjuySVMC9acpXq243y3sZiDp2AfnUq281oZRcSFroasgh6yuFVbD1Xo5gdK2EeP7R9RmV",
  "key3": "34sT9yDAk2LYE2FPbTimBWKXM8BftNRLoWYrP6TLo8MgPzMsa7P5fx9v9ek7AVAAytS3mTjTwRrDYNe9jwoH5UuT",
  "key4": "5J5dDqik8SgfKQrSTN3Gp7ch3gavTHPsXCpJK9DUrT665hSC7GMr175Xc1cd2WhGW723Vjw2pbk4XVWNhcR7Mnr9",
  "key5": "25J3vDsdatxkoF8vyqGUY3Sbr3mUzGo6t3zsj9RnFMvoPXt94fTJCPpSZrszTcxJCf5EHWJZpcDb7q1EvMRkXqHd",
  "key6": "2KNAoCQGwWWYGKYecZMUHgqHb4Ra6XeFEXkb4m4zyDRF7ZzNvsr6qTFbkMDvXDXgBuE1PNhxAqd8hCWSigW1hF8v",
  "key7": "3VCjjRpKdpMXcBReZBqXL6t55Mn7hWQdu6VbNdtTmDYoGFD6ce5o8aB31CSjsiSDqpkpwXkG3VBnjTgQ38VDP2T9",
  "key8": "zfvDfigFsa9nrfw9NsP3Nqkw2B6mggok2UAkeRAFi82oZgFoKYdy64peeASyupghiqdsgPbLTSq42SRQiLExfrc",
  "key9": "32kN6ou1bVCnfb33aUf6eb3HCToVcPVfFbniXfWUQjmZxRMU3n2aznosqMyfSu4CPu2e9Tc5DWnCqqVEsAq7QZ37",
  "key10": "35PtZVnJxdrzX4rafpAYniQ1CD1dBh1CrrE5KXp97W6FUNG2MGo6DeJ5Qze1gMmrp76a1nQj97Ws1RX3BNGrjjGP",
  "key11": "3KAdNuA6WUfTnaK3VJX9zxx6SKbHYTh5uMrE11Dh9vomMueSu9K1gKumABAycMVcTsK3MSAmGbh99WQPoGuqA5Ry",
  "key12": "ea6iLZ4uqrJkUqgA1Nym4awFj97FJVA1nMzmN87cmnU7VD5vXkBTf5uFmQrDaYWYhSuFX3ZrXe5Sm4Qh8ESTR4p",
  "key13": "4B85tSDjoTQinJJJBmN1yL9jECdneCm2EJxZvQehJ7xY5ysQRezKrZzbzUfxhRHTM9uNKZfqSjmqyvTrFeyt64K5",
  "key14": "3HhnQTiSmFyKV7gFDE8y61XQetv1nFxQL4DEUifRk37Hre2sM4ijPZJhKCJEoPnfgWk8wrrcSY1u5TuEPHPJhZV2",
  "key15": "31gnHrCHA2bHtFGsGaXd1Xu59mQCpz9LQZZixzDpkVEec484XnTcwaJ9wGTyDsw6mJZbvnvH6Bza7oi4GoCG2yv2",
  "key16": "2HpxWjmUQyvMs9YJQnpsSxyyiZFNWfeVpwC5Qr8rAiJwPBZhoZ3pbuyrYYoiEqCQdb3hVeygCLEcYydaNduzpCG3",
  "key17": "5K5vbpj92BNanTwQGXZD8Mxzxmr3ZfqCuCkL5XboCfJY7pnNKKJi5TLo7k9pfdU19R3FQ2NhRNtkMrJU4ExYZGeR",
  "key18": "441MqzfTQDPcvgzFfGfM1snSjykJzcuqd3Lq7n82cHqXqAivbsuZ2Xh5xGwoVTSRHFckygdL5An7ykYZtmWhTedd",
  "key19": "22zM1bd6yntQoZjZWTkF64ruExLLG3dWsZMRHXYvKTe5WDwxb4CkDFG1phjEv3zGNVQuGAsjRjqNXQ76JZKRRFeW",
  "key20": "5Zh9vWQWseuFVTpw3LiGVzinfseha2s8M7sNAjLXCeuHVw4bDzrdRNqne5Yp9esm88MSfpB4D92VdiVX8cuqBbTJ",
  "key21": "55mzhCJ2aLpQTVLNumXfy3AYEdswpeHFxiH9YAdtmJxQ6UJKQCS6yMVCiLDDMabYh65mipy81FtvgrCmws541tok",
  "key22": "55Jd19U1hifQ7tczHWsLGcURkHUDyEjQj4441B6dZJuEdehPVypJ3RUUrPAqYkmbP7Hv1rXNSgBC5ybYDG1kVgta",
  "key23": "4UHJM1nHSt2XzCwX7fwpfCW4wSkfaExtNDM2s7A2UCjdfU3ZdDEWQv3xbMhQRteo4AU5VJvdC6VT3CD2NhfTej2a",
  "key24": "2esoyyAqyDdKu4d8Nszw53h89BWzLSzdzxCr68RcVSrPSPdkNhpKEXW1jnwDCrTiTUuryWewh6E315k6D1qmXMCm",
  "key25": "2XdjNHsDUR4eRwRDdLKJhv7spEre1Rr9vaiuJnuVRnZRNvfT8ZedEaPRBbNscu6Pz3cdBk8Nut6w7dSMJCCMGnw5",
  "key26": "5PD3jrcWG78xAsdJUA96Rpx6UdTeJ4Lwo8jDYnToLEc16u5qTLpjFRsX7cvS58kkc6pSVeiQHn9Y7qLJaC5txBnH",
  "key27": "66e1zHzE7faBc6TsA3YYs5ZKqjL3ccvNVXxcyP6VhM7PMSaNMqiFSjr4f2xh64ws3djjJ9cQWCeHJfp5MLYHNqRT",
  "key28": "3pfdiQnyZkH3i1yHTJ9fUNWaj2g6qQf7DvbGak72Efy5tDYP6uDphcuBwrC7upwx2QTWQQh7qVxkvQnMbqK6HNAF",
  "key29": "5k5c3SUpJfgg8Hdndn2Zs4fv6KKKQSCzmxC2RDz1jpWPHNNpDjPmv9YjGNBQe3tGPL7Yuhm9oQinsED2qGCQfFBo"
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

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
    "54Zpx11FagEfYgoRFW6jkqxhbqtYjktTGQP3GQKRFWbqFjbnegYcj3asGyZa7Y5JCbovMPtoq976PAjEK1m2gjbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SPPrUJZd4HPndBWHLwpod4Fw6kjZnhibYGPhxqqBGnph2XLQjzFVaFp4MJ9TSbeKj9Jp9sC92o7u6xajRhgEkok",
  "key1": "4tX6cBjGBWvuASsiQs5EJ3Lrf7RymQYQuQBPoMvdPn7w21HkJ9EDxUZwSN4vnnakgHqiUqFxxK9X9fuHVH4mFtvP",
  "key2": "2R7VNqohkoSDtUWW5jVSKxRMBZiS9dNLqWUzdhB2WLaEuLshMqGQvwXR95nJcPh1fMRc3JrKWZwGsbphKZ9UqWhA",
  "key3": "61NSmAWBXhiwsTCT9J3aBqhF5JeWuJKEAhM4z6uQN5LSmRj7RHiATt9XwHkWDHLtCFnA9pQnQ4xhZ3cf3UL2UMdK",
  "key4": "2jUPvkL44FDu6X936waZ1PiKwzgpsstKb3hEdmt4NxcPP8fs2iiLN2QxQ3nnAEdq7JguQJNGeWTzoFwgiixe82uQ",
  "key5": "4iaiK7SJeaF1tcu4zh4SqhbmaEFM5c2MjgGpimKwXyH2kFFZyRJsbj74W5Uue6cdDqngCogtuGWoTpkYadVtNnS1",
  "key6": "5CoGosLc6qzwQm3N4JRGr8Cqavkn4xPgzwtXMAdFcYjHK7VxBZoqGLxMBaVc9xTn1VercwbS4o6ppK9snAhxuaNC",
  "key7": "5DjAR3ijaQhd3NrxCXFfYzT2QzxTQTyiJDSkXH2XDjzGydkuo3TAmhgakmBAyKxbbmDrpsWX9y4U58gwsvuH1n73",
  "key8": "4uZPKe5hj9m69o4ZKEgbo2Wjqq9e6L9UvCpLAzyhjXtPG9n3GWZYsAHaoDhQZYvgpD6JF6HKBEekikirdmES68Mr",
  "key9": "2gSYYjxZRp33mn3uQrf3KDFH8DemQTwxKPNBV6sfPeYmPCZtA49YunVUGXzBE43CMZkEk7L5DSN4tBvGLqurw3qt",
  "key10": "5ueHkM8k9WDWhFJdasUNBHbtqisEgrrZ96tKB8Vtk19LAu6aMWMeqfHWR2WvhxLP6VGV87uQz5qNLYvR4MkR9VxA",
  "key11": "5gAMgKvsBsFzRayfHokidMym3h42UKvAp5EMHm9uCPP6hRjTM5FH1KXCWrXZqu1cp9DoKt2qW93tC7rG1PBoUisU",
  "key12": "4txR46UW1ijcXHktTyLjonVhvASYyMMi7YXgzzpH33pZ1AT3Uz3c8SbbrcSBk2rsY3HAckD9raYd6FEKgFJn65mw",
  "key13": "5AtL8AEweQiys4v5u7cQxcNn2oEnGj1cYXZ11wQ6Ex1uLmjCC8toXRKG6Uksdz2EwZCZuGZnxTM72Dyz3bcwUqJd",
  "key14": "3APTP43f8iZCnetfNca4LWYQrLiuH1kpTyMCFzZPfvU6BuYz5XaMEwQk8T992yzWHbV13PGwuwHGgJW4hqWaifWd",
  "key15": "5qoirp9pKpdXCQvtPhg6ZmzKq2hF8mM2yweoUihnbAbtSN9iYg6tzSZhxM8bsYW1LTcGm4cqfxwJT6zLZ4gpRGU4",
  "key16": "2CsHVkNXRQQsD4EKN6HbehXyzef6HQ5Zf9Hf5gfYUzSf8bvToB7osTkgcJNaYLvXoEoux8DYoFFC1ueLcGwmbacZ",
  "key17": "gpKZ5rr3Bq82iXXFJjrmPDnM73Za5jdq2fPCu5Vb5rkZGsD1qr7gZarCy5awSoge4LkxMUbbL214PKEGk7jD6jF",
  "key18": "384qy8qx7krGFhDNVMSb4FKMc6HTau2EjW6PFKAXVBGNVaMeBdXVckx6TL4r5rQ78VRNWr7H3k8y9ZuJsRcsvKHv",
  "key19": "4RuRHQLRdJ9eEBQRSNhHF6shuCEif1NQ6giyGVRSFrWS8fskixw7c2SJfoEV4j3uxD6vojtTV7xs4PEUwFrGzu26",
  "key20": "2TH2joiNbHWRKiwtZowqtFDqEqtTSLsFduYHdtcFWHXdXewJjsaoiXgYEein2UKpHPKT1FUGsu1jeLkE4fmXaWAj",
  "key21": "3FrTzGPjtEZEntqsSErhBM2KapLSrfwCZ4cVs6Dxqzj24Z4yPf8UejAgYx1nWFKPnLdCEApZz2GBXXYscW6gNxZ7",
  "key22": "47QDmb5i5WdUgF8iS8Ue3wsgJYTNeodcr1ykd4xx5u7tsbBheNopJJMdFn1L3twyJ6pggk3bheC2eMqGf8RtnEXi",
  "key23": "2Trx28HMM6Bc4Lp2SpwSsnUJXRp6tAzwC7n51aA9e7ohyjxetRLmbgzX5EfKiPQGeGUBb1e1mVNRRL8iqW2M8jcK",
  "key24": "kJsnjyasYaNXT54qZeHqfke6bem6rCvU6rAyTGcz95CkD3MJWQQ1ksT4SjfP1bictnyinduw3hQzRk4FP9wgXpf",
  "key25": "QnVP5BetQTgxGhMwWh5vwK1fxaUMBLMDFGfgMym2HytBP7pFVktAgWZCMd4zwwB8UfSyTiQiMu37cRcXzotXzbP",
  "key26": "t33RzYEW1q1qK5VP39Afj1onekEZcJf9THR75TuFGh3YT1DTm2riif6Z7gZGvLNzMs9mLg2EJjQ9coRpNcyuBH7",
  "key27": "KcLMybvh3SSY9ZNnGUVbusgwjES2gL4fvUxr3179M4pekuFmp5ht4fHpYc5UraXu5hHRjGFLPws7X38XcWnck6r",
  "key28": "47zHKrWBkQt54BrTxH8C7Q9VLPwXBEWEzvZ1Fpmqa2MJmk8qfUFifNYeHWni4pvrQC3TEByX8Fmw2qoZfXefspyc",
  "key29": "4JZKiVwxNCBY9enRFB25axDdpQJraPgQix3YJnson4dVmx92bi2McfHX25TJMjtwybtZa1GsXmvjoq1gDcV29Fej",
  "key30": "5SA6RpTKEn9RYCRszMyWBnPaPTRzcrLK7vTiGgPjezXuiYYNttMWs4R2MdQvhkeF1FnGDFxKb5oHg97TzuXiW6MC",
  "key31": "XNiGkKZ9Cg85MVJeAwVKhqoWEf71LpFJ87tUvFFRDLfsckYD4dQBeQfgV6RiRyLJyW5ina4ahNuTRko1rwSMuVd"
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

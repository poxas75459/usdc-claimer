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
    "4WDriMtTHXiYhe54reieFwabTj8pntKoArETkhaksvp6WdhUYzAmUKbjBV15eLnCD5MPLsyMQSxjXbr71rU8THWz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T5WwDodiFBWqLRgAodoMZ5rgpXDbiNPUPK7jJ1VmZB8cfJh7F3FHsVhubPbxizHk2dg6R19Ts1VNeTdRofo8Xit",
  "key1": "5Ycmzy7r9bQtVCTT4Kh5eaJxeDvVSXTB3xmEko8yTQtzY9Ks4jp5UcF6JngZYviqdcbAhz4f7mGukGz4rwA6kceV",
  "key2": "4E1BZ6aApCPAnmj2mxVctV2TjqNGjaoCJEC8Amwx8nA1LtC4FGLU1RLBtoVKrMgQvBsS1tYuJCAgP1V8MA1LpoAi",
  "key3": "2FsbDweTXCD1LMKke47TBkyQkb9V3r13rqRxauiNauBP7xTynd9zUakVkHJ9v6ZFD1pvufqeDcmvCa4mXEdeugB3",
  "key4": "5GEYEigcSZepf38pVfPvm9Y9dKgoK7wqhNtbQrfAREctW7zBK3XCcDo8TYj7sq5z264abpsb4EqnkYevNNNfZ6ML",
  "key5": "3RzUkhsPAxmq3S32Zea5mAsarrWLKw8DXTHXuSoiyjERN2cnbQcSyiJun9tNsmJNcTkB3ByKRzZDWgaKQ5j78jUG",
  "key6": "224JWDrSAJSPHaanM6biasTKm3nebPzxqBh2F51ZR6bsQCbvTVWR3AGjSYZaFGWKGxJwepYbxZonFhrEJrg8Dqd3",
  "key7": "5fcdwRdA3hy4wHaBcPX7RfkKavSPSztH2JpKjNUeCu881QdPgFEnCCUx1zh9VTqvZ6WGCJpHLUhUH67oXvSiQAjP",
  "key8": "4qDyD7TXTq5pFxPZUnausHXBtN64Lj7RDrgp6xpTNSBfiD4KFhCGUPovGxiFRsRwqhVyY7U3kZbu3dCKx4qGE9Hj",
  "key9": "41KhEWjJ5wk61djWMxuwjRzcT13bet8bjBWXpAtsrCDAG4E1Xe6eCbXdVkf4ar3M9mDAta2xXhydfEZw4My3fMjU",
  "key10": "3imvFZM1Cjoe1mRGXKV5BE5k2nEQ8GS9K4KajZVxyxGcuDhyJwKStBXbyaprsFcfNtH3fZotZCkB4EzHRZo6BpBp",
  "key11": "4HU7iGbea2Mu8ZvioUzmfqGRw3PF1N5YJJRGQ94jNvRqb4UwboT7Gp27QNgEU5F1LfLB1vHSAbg2rDdhFaCqRh5U",
  "key12": "33Divt3yH8JVpvwHvoHAw6kufxiJtE5AxWcCZtdGpsbr1nsTHWxwZDwfKRnE22LV5gCboKSsyXc4vAFXkgyZuZyn",
  "key13": "LLDaUdNffZzjqA93otNrZW9d2aWUJ27zrpQxeCmPgYGMmurWMJqeiYnFDUE4RwmNw8gk2dZWEFkqTnCbpb87Pkp",
  "key14": "tXP5A82WfBL6K5jZzi1PmQ4tgg2ib6GJ2zAhkTSSgn8Cyj4QocJEYc4mP22DoyTrZ9g14GnreoT7dPgVSshthfR",
  "key15": "2ytFp5jdugDumeErF6phCr2vFBaSY8ytikmonYKt3c8MB2Fp4hz3Dhtp5qBNeXYe2zJ1RwVJByz6syYo1KcKLuh9",
  "key16": "2iv8Rg2GvaZ7BoM6SSuL54g429Ypj4KZkZW7rYXiqX5sMxi8recUDE7VLk1UoVhPom1er9QhAaVeBRfSh5y2HTTP",
  "key17": "2PAUaHWnXJkriejeNJBQu5vmrTCGTUAoRuwmSLaVVDuPs6wfhDVaf8sHFqWUY2oHQCXAv6noodPJxw8pPxr7XXhy",
  "key18": "5rMNDfbM74YcHwPpH7KqLq1sFruGbW4uDJ7aUPJfqFG19V2hwTibgNyS5QPLaffLrkYwr7VSpQREF9FMgGcNDqQK",
  "key19": "2JUbbrLnbJcBHP2XFdvnBUGvzGpAk3JXHG7otfagcXycDGFFGWQ11ttnvsEfVjQzG2E4ucJLLj5NYgTiwPSSR7pC",
  "key20": "5jhUfpL9jc86mda9LfpYYizUj7ZPsnANdFVmrqHUb3DsA7kgv8KzB5KcXJNFosatv7afJBBKonFMbxsT5Phkg4uk",
  "key21": "2oN3g7er8YZfSzxQHQTogLN2u7YRoSAE8QsLEHx4nCPg5iDmYCZns8FhjZVXzYLCCRbF4u3Poj56U8FozRXMCkvt",
  "key22": "61wUN9zauMTKXvhrzS86oJBGbS5cHdtdxdritACk6auG7aA3xuM1qmrtrwgdESxM3oDTpw6sQqa9vh1iAd2i6YeG",
  "key23": "4KfdQqzNkgtFkfxKHEayQyjsVsFp1zbFxYPedsLkp72C9vgqbjP8GVFnP2PTAWFWs1AhmZMWc3L2AS8WCdaY2qRj",
  "key24": "5FQozgZgQmxRr8NMjsZd24EbEVnmP9fZ4FPcKSSY4XaswrP5T2VzTXyTkV5VnhbqVUU6SCo5KAR6EZM1LsXNc1yo",
  "key25": "1HPvkcmhanPPQRrpuGNaXeyai1GyHMiCEiRBCxA5JDAw4dFbM47KN7zdUxia7mTKz6947zUgSpWAsh1ST7ZGQ94",
  "key26": "3yJjpZq6J8ZQwHQLA33RW6hEoAUtaK4Ps17KgzsfGX1d474V3BR4gbWUm2mv1u2NfmQe9cwTGh7oDxcB3x3ooXqu",
  "key27": "3jG81XqhV4jkNo3c7658uZS5fpn7S2t1EKwLrNAu8LLuiZ5qUEah2QLKrjiRD4nhnRMs2YbMY1gkDytvV2mCFyCR",
  "key28": "5mer5a3mHzuVLYr9GodZ6oYQFhD8hMqYCoahuezbA9ScGSWa8FV7C3vyJJ1Z7ahLLMpxdwuBx9zeHNCVXXukwCk1",
  "key29": "29rGPcN6ydLueFarmDdjCULf8Uroo8K1oGSbTHBytobfWJR3evwzzpd5rWMs2pVxXjtFwqZpHeUP12tTa3JHX9un",
  "key30": "5ZkEBSemTnJ8wqF3a5zgyymjwNbYSfh6EFpuG6xZGTP7AHg9FbR3NaaCofnFnmKGDqcwovgrBFGvDXKGWPK5j5P3",
  "key31": "irnKFiR74YfeZmYjtMULV91w7hb7QVR1dezoEkRTQ1crk47yLBS4yAvgBpB89BeWH2zYdMuRU4Awtkp6p8qx7bN",
  "key32": "5qtzqPWmHM6TseGj6PGFc9XLdec54moUjBvMMLgmQnDh1r5bUR1FUmpavpi4xgV14eLZHekFnXpX3W5Tnub3DM36",
  "key33": "61kHro7mR435tjJ6XkUpgVy8fVtXYbTfvzBo9ddBKHoFpsgYZQScA9i5fhybfuGoP61RzLq77DghEKC7zD1dUMeq",
  "key34": "3GqgoX7nqqrRmfTD76w4NH8jcX9Y2KB8bzc2sNCaJ8chpb9jLRyyVzSmHjEfX2FXu11EqFnH17LDNgWiaz3tXEA",
  "key35": "DvQhidhzG7shoRnyASMywSP5gFSJ6M66nwrpNizoAQtznv8LaDFVBbyAegD5G8aV9qUxmMz29QPzd6ecn3ca4Do",
  "key36": "3BVJ7fnudm3E7mb4vss6P1mSXeqPGbgKHTNkvPe64mRyeW3MMwRxV1D5nk9ZwB2aCkq5y2UqY3aK8NyeLVB29ERv",
  "key37": "2CvzA1a3jeTPWrUjaokX2kB7GreN3wD6tBW8JotVP8ErkdNM7QBgK3LvyyTztsSwU82oCe2DaPsr6AYoXEry7t7B",
  "key38": "4ZSFnoiASpGqe6iSMhpudYFbgUQDhYMWeVkUNt2Wpw3mpKeaagfT7LtVdDVtmGhYCauCzfh1T2ZswYtgNjMcXnGA",
  "key39": "HuoWzAYb3rRRwUGsjGzphSq3vpUpJD1sBfkSBAmKxP4KvZMTJ5PoUPtsAJTohErT3ysKt9FhYh8fspg4GXraZi5",
  "key40": "WpfJ9oHpAzg6WHyjtLTWXX1Y7b1AAoKB2rxobbgj3jwRuTp9pX5mPYm22fFUvxm6TfpzM6R6CDdi6Hibd87A48N",
  "key41": "352R9d7yZWUwTHLGjexTwBQQMbf8HdkX6NQ4S6TbokEvPtZqSEwrAQtq8qfpkfqEq7bWkZDCFmeenCfkM1Cj9YPM"
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

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
    "4rHjCgkmhd5ZNL5s5JVaLR1QMHHtkL8wF4UX31LG8XAeqCRw3DYfnFQCgEYDo3x2bSDW64boqEcAUNUNVkrAf7ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47LtZ65ecdAYHAFfbu8rZVVUxgZaURpjwVTEbqGePji3Baa8BYbVMENZs64AQaaRRgm5uEYGiZW5vkK6whQpnycu",
  "key1": "RnqaW8dTQzpjoEqfoguDZ7PnBCj9NqMfwg2mdpciJCDWJUAsQAV9G2nTegj1Z2xMGFzgQM41eBgHiSsVV1tuQyP",
  "key2": "59GQ2fnPmtmSSsFjCNprLCWMPpq8JhCcwVR1R1oSJTTAxf55bPMvGxmguwDxMnppBJzotQVtRJoeLH1sCDT7giHE",
  "key3": "UNkdcmtqMdQ5QyVpNKT7qUtQmtbmVppZ5UEHjXr1eNGyPFVqp7gwsqaGVnDcZqf21tqaEcJPQqtSJHFPPY4LX3o",
  "key4": "43uaka72tL2URNnMr4vgofXJRnQWJ5q5EnWHX4b9bJ1WbJAVV6rZMSdAmCy3WC6e7aH7F5NuzqPzaskK94R9xzGi",
  "key5": "2ESbJyJjkVjWztqr4dccGxacAFNCLJucKrYs9fHPkskxvso8WDXLPvmyJhKa8jYP8vWe9ao9AmwYYkgEpsAhadE8",
  "key6": "29y8ScX8hzNYvbbcD1wzHFQk8fJUTaR6S396j2SqFGRpWmwAgoxqcdHXQj5s5Pyj5fTsxf2e3ciuZR2qPSdtEXy3",
  "key7": "4kfsudubBQuFEUDLZ485PHAU82D6PZCdY77rQXJ88J9KBCUPSB8siLnHYGGwz3u8R8xipV9h4BzE9nUPKyczE3rY",
  "key8": "3hPFW2jz1txayzW1pb36JvxCY6AAP1DPYnsLWPGeptUHorEExa7ExwqEfMaXFMwcBxK4FyevDJqwBFRmVdFwP5JL",
  "key9": "s8qHPzQM6U2LZqSdqB3YgqeWbH6KmvLBgzEJzxVsW7WapRvrBGfjJ4KiXKNNXm61cnmq5LpURjoXjZTBJvUSiao",
  "key10": "5vhzmzrWJyZwBjHFkv1idkmyf5jTrNsmtNeB95RMNnR23grTrbFXjWy9mQ6Yo6Ebu5YyJMtb4ww8SmcFqruUTKhs",
  "key11": "5ux7LTa64HqZXkTGsj4dEAkRyjKieg4Shj89PxopLnzATqqX29iskkdkQmWvXUiq2gbAU6Rmv1FkYQrCDdHjPCCQ",
  "key12": "5ugh1RQ3vgCqxHKkzLU6KfXHcM6QgD91pkB3zdDJpq99xEh41UnpePh35JAX1CQbCXZzkXqNBhaLxKsiGwm9sH6u",
  "key13": "4cSD6CovvpDZTMw852Lqntdh3LvzK1Jyty27PhsUmqshjPPzyfUWEVio7oaRJHMRhwqsNwtyaFATaKGq2rPdzbJZ",
  "key14": "2kLNtPY7ucq5PxWW8x1SNaHpLy11D1UkQkVNqv284vT5DgCymRxaxMYm21gQtrv96dNuEPKTfPsov1LyPfNkee9J",
  "key15": "62McbvpNuxrBHrd5HLWhVqcmVvGC76iqrakhzVRDmmAAexPSfarbrCobVDrTeLhBRYKfitCcKEu3Ctwd9gpvYzPq",
  "key16": "4QXHwL4JXYWAQAoodevQdAby3oKAsCDgrrHiw3FVdZEoKv56yE19DLgJFWVeyrem3vW7PK7rQZMP6sXHHs9Jo3Uf",
  "key17": "3K2EFMKSnv3opJpuJXRDxQmxwWXvoCNpEf9cp3za4jp9dMZyeVtA8K1dxg4GdPJ2RS5hTC59pqiZqQJNwiFKnxdQ",
  "key18": "2r2ihiXJgVpLqAoGTBtGKDfdLiashFRrgna3aQxcN7KrcNFiiTmnkRQKNdgzxSbsRHGbbdYkABHUQorV3w4U9k3i",
  "key19": "4nsfPf5mt3JVkVk8t5LiReUggzAr8xTLYH3rDrw71AuqAnAAhvrFuNcKsTBnqrasgWbVGd2vg98kQosdpAQYgACH",
  "key20": "2MbzcAJij1rJu1B7CYifHmtMm1Se8UWKboqJa9fnw8YbYnX8mYck57QLYSWL48pJSJY9FM5G71h355qbrCjbERDd",
  "key21": "4F2jHQJ3VQUD3GQwEmHG8898ZMwL42sobYiomHXTFPXxt6swjg3zvGkPrL3aptGoGJ68Qh6AzrLzbwrP2t5nX4of",
  "key22": "pD3GzbhmDTFGLDfFv4UWniVfE5Myzgj6tD8mirXpJELXFk7ev6VJR4hy7zydAMn37s3DWqRwERWbxV59w2kEXny",
  "key23": "ni4R87hiMK2jsdJr8TK3eU7tyKXhyCbasffjA5LhaK6QbH4chNzmiBeP3NMeywz162DqL5BvWBuvKaVu9XZNDVk",
  "key24": "2jCUNdj6b3CNTT214uGYg6s9J5LBKcLYSez1YGCamvdcg1cbaXApwsSbCSX8pQHKjmwnTZ8SujXz2D8pdtYfKENJ",
  "key25": "484ZfZgqrzsy4jR1cF6p4GCU9Cy7Yfp8J3dMd1m54iBwWCXiMbgr45DRVgQfdyyHP9fECxSJxnKeQakYJGfwu4H3",
  "key26": "sGFK3swVsmcRQ9K4YQhwDBN8M6yHwDzUKR7EqZSdA8nyeqqUWPseAj38UrpQ6CFAeTeHxobuM9QKrL86UeULeWz",
  "key27": "4issmRTYG6NyMYEvs3SfHNLAak6J7Gq5Vyk3VVtxx7UhdP58ePdyWKvtBfoXQiMfXnooTSKBV51nsJgzfYGQmH5B",
  "key28": "4wkeAJQKyLp3e8vuHXZGRKWgLo6FBAjuWrDTFedDhrAqvFSHa8Fiy6e1jn3NWH1eBFBm8zmhg8hqf1mCscFJgrQv",
  "key29": "3RPCwu6oqvMCpWAtk6Hs4mWfoFYV45PmokYpmyCewboQuYXKpGHneeXnfh1DXeiJ6nH6ZbeAFs21jD5vbBpzzz3f",
  "key30": "3rLnGhHm4Rdz2x21W649hEc5KXU5khzJoP7xyCzhpzBsT7532JGCky8stRrMZjP6XmroAry9exzKP3eFtHMC6B5e",
  "key31": "5fwaQRhA229qJ3QkW8MC91NtGRDZNmNKtuMmTuhKZRzfVRec5g3sm9SNdE8A4rMr6LZgooTgTow5bLgZLVZ2oRp4",
  "key32": "JUCNbaUDa5zhtHEKpuXxDLnThsiBYSeuvKx1eoVYec8J52Gu4WCVxibmBszYy54abkyP2RcvhaL9heSg831ZEh1",
  "key33": "3AaVVSG3PCZpRLsbqZHrbQAuuTPnDcCvcEgL3tiLcDsxsscjdhzSaMYGNuzsa43hMsLfwiHDY7WNtoLXpAZbVK3T",
  "key34": "5Za5AArwp28FNv6eKQm8ZpYwLQG3D4H6AM9bTCv7RuiKYzot1SJXu6QEzMdAJF7EkepZCBrSA8BgvPsk347T1QRB",
  "key35": "s7dViyq6THMp7HQkRKxGJbKbccNtCDVa7DZJLexRpYK5yaG1DhNEBuGtS1HUkfXLmg6h85yZFq3t3eNfpVx22bo",
  "key36": "5G1hFxMdn15thZQ2dVcbXLUv92rZokvUBeQpmuyYCzB3nL2Z5M3P821a2wiasptQqZtFgjWA79Xvia5gqxGLe1SJ",
  "key37": "5PDtJgUDBV98Spwm5FCFhv7JrHDfQRFDLBdjsfZThbP3NUQLcMGF2RbytJiDzsYqBns7kVvcBzjqhVENWXzXondC",
  "key38": "4fxq37prR7gp1kHqMYECu4grVaYV4rJUU3xgR1zh5fFixrVdVRUKARAFjZtQ1KUZnd2MfQxv7X2biU7MwVikvYg6",
  "key39": "25KjGCSotfvQ3UGB7bVArRzt6pQzre6xp5oxnqav5fXQ38Rf8M1DbGiRe81rZYXb7bhjLpRLFJ5J3mu5acKo9QFz",
  "key40": "35XH5t9mZp6NxQip9uM8VBGGV4hjQSBEBXx1SDVCc23A1E6XVq44wLyTZBBRnunr65hecRCfkcQS9w64vAXTkRD",
  "key41": "3V2UbyxKarTcLtBAKKr8PZL3XhgZDb8UEJJFT62V6DJjkthADqabHCcoa2AvtmiV8whzyen6jq22gnu1jqEztoxt",
  "key42": "5K2Ye4jwfQDBtVxaKmhg5S4J6V9XNKetvMVp5yUNUuNant2jB9jhy1yFpLiS2eszJNyA94TkATMEvakT62ajGKTd",
  "key43": "3duNjJRf2RQT2Tiu8CPStoT3c1TS4Rx1hrhb2H5WXi3uJifCuHQ3WCKAf7GAskNir637J2qe7QCJtXufweW6admz"
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

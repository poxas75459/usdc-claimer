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
    "9EzGgC5Y41iSJ4J3ocsFF2oZCrcdsGXXbEeDYBGhoecE57ptDcV3aNazPHKh96JNDvHvQcxtvyGkYRYRtDDiuHn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H2MuAj7jzABi8oLTdQ3WrWmhmUhu2QA7wwg5xidr7emDXupEwJV2JJM6PzMe86KZuaQKWtpRK72dMCdYgEwTt4P",
  "key1": "556Fsd9QM4E3fTKh2294ZUe6RJbjcPDUBJZJQFScozMBZQYtRAM962JFvDXm1tQh5XXMGKYvUorVG6TWsDA793UG",
  "key2": "49hEt7we46rAJSjd9cjJiQovMcJJtwGTFUKnLB2XyFM5X45gHxVxqseV78LUwTuzzfoKGmYWdFZyco17Tiz7D7mA",
  "key3": "4129Gj8KH8SujcsFnHaH9kSh3BKizNeHpiWXaNypM2bNPYcVFANzhQ3dXZhvgrESHpHGEKVFrigZYjAKmEetWVJJ",
  "key4": "3swDQtkKX7eVjN2JmbcmvTvZ5zYyFpLznoK9XWbCrRtxJkpDE8WRG9sYTZsThMoNrXkh463nWEGenw83d395qb4z",
  "key5": "2XqEYfePvhtVPvvKeMADxwWDv97TVd9oE9tcwuJcK6Y4jnWkLCSjASF8mMwdR7ZvnmFiyEh8KzymVuZW6pcYjLhC",
  "key6": "2xGK3SGeiqr8Lnfi9JN78XHLERANaKoQVtiQQypGTho98yEpyqVimm3etjmi4V4oLaF9Z3ww3ENzumNrbKg74gA9",
  "key7": "3GaHjnDpHPr6bqdBu24mnrtgNZjRZjbCwZ198n5EFbzX8dPkmHdcyxfJ7F34zwyVUXB7d6oC3R6pBpPHYtbUkV8r",
  "key8": "4KhD3t84UzgCefGbnWns1aXwVedQsJksG8j9ubLHqes2GWfcbGAx2jD4vTvNa9X4ESfpqnYXPotJMLYSFgrD8XY8",
  "key9": "2Kmwntk8HbVzjbxMjZhUx5VZTroVRS3hYvriPgsY9iyrPZuJjoHDhs4xTtE64ZRJmpev3DdnJ1bYE3ANMDQDPgm5",
  "key10": "5APCytvXx1WTmQXJbbgekurwGVZmMwxArpMCtfcHXBjuG8JxWUZ3ycwt2jutGpH9nogLSqM1o7JcJhQ7iDrotYUs",
  "key11": "3xxMtYcYQC59PXp4H9QKZs3aiyKm9cMS4QGdFGh4jZrAdb8RhH47wCpzZXtf8Xf7teLY7xGupTNsjHacXZKQkbpC",
  "key12": "TLJbBCV1jXfjUVFKRydYu6Byy2pWBLcmeutkocgk9kn668MagWn1HV4KVW3NVHzL5y1Jwf3WRbffZCazwU8pNCA",
  "key13": "5suB6c7eZWAhyjKi4pr3n4FpMRQmD7RFfMgZKyMxEbtUANDgBJi7c5Ng3Rt9HQ1uzm6VwkTL4v3qEguicnNA4vRC",
  "key14": "1qPK75w7E24e3jvJJN3A5UJ6WwmWLvmBzY2LM631iaztMLNZMVRi9ADTBeVMYAyr4SSjvANtuXYa3GKtxcPmxhk",
  "key15": "4yY7zDxQxFgdP6jc8rPJdWaqfEgYFg82FDLJgGHnja4sZFET8E1oKQan3YrrezsF6sqXgduSXjx2FKbghyVZmvRB",
  "key16": "21JfKBULRtiVbm4Qtb5mGr5EFuBGjjUt2btxYjFo6K3ewPRddrEcHYfgkQxoSHKFEqi9bv3tvUDPtsofEWH6FQ2S",
  "key17": "3PRooXKfju3JfEtmTCV4GvRKvTQ8bpM87KQYHJtHBZsEvBu2aQ7tyyGazVYMzxQyFmKt8Jo5QQUQaJUuLUvb9Jqr",
  "key18": "5BUCVUCTe9j2NbWfsBUKcNrKHdZxXGAgu3mWHoX12yQ9QBqH3ku83StL7scUGvUtkcBDMH1v7rRqUut9ribZYQQV",
  "key19": "41Bzijc7iMFaVBQRggDyubfQ5xqJYLNXHuCHW9T6k96jWfKRJsAryPyjxVCjiGH75MQ5kKtpmoxXXPvVhxQk9EN2",
  "key20": "4r6WJBkeR6saoYjGJgQyBZip5Em4hvRaKHTKNbV3m7Nwbqg3L3GWfxAzqcqRdkkaapg1Bxu41eRGQEwhMekjszyF",
  "key21": "ejpYRbvPFXja9TSGzyKEC2nk3yvtyAgq4bPgsaNSSpc9XgopBGyZyx96iipPrfXyrcTKUtxdm8q2n1M7uvWrmHm",
  "key22": "Z7aGSfuAkA5oQskv5sgMjyjnru9A93HD2QLN4ijozcW6MgAF6JjtbcVazbsYYq8hXAZw9TwmYqWMA5rpYhPajZX",
  "key23": "4K7PHARGgcu2t9m9UPnMXYB4BYHgJtpjk5Qg4F5tceVawditoewFbkYMoziJ1HXuDj7MRxzVKxgroy7fsE6XqiA8",
  "key24": "565Mkx2himxHAvdyjqkLp13ekZku6xbzzVWNgkACDX8f7TCfVB9nk1JiHFhtrMF5Y2WgpWqhRTnoQEufPjwLwbyg",
  "key25": "3Qz84zjLYhd4GB2MKF9kdhvAzAX11NCjKnP4HhvvBkmzWkCtMBQxprD1xEEKjit2D1zcfwmRFNaJx7GX6nhXyx8Q",
  "key26": "3czUXk83DNfhpfKBEaJnZmM51UEnu43Zxbmo97L4kM5Uc1282q8o1eXthZfa7sGRw5XuT27k2i3u18G5tYS8mQdP",
  "key27": "UASzd9tNPnsCtb9zaEYQafyb21uAD3oEesTGoA53CQBg1pgNWaAXVwRsNy3EF7MkTDY9JRoKmVPEaYAWoPxPt9j",
  "key28": "2AdPh13Fso35gGRZyqwcmLXkM7NitgbeL3PeTPzQdYVDf8xw5qHis5detNRJHHPWKDBUCZEgHAU95B8nWHtmA4Me",
  "key29": "2j7FWuqwhWd5ZwBoHTZbPKJ1xom2PghMjVi7hsUfNsC5tZsYAaiDsNYUA1vCkRxLU6RzHUn4PPxzt2u6AYZUcXCN",
  "key30": "4vdaDL7XoWCZYovYUQMF5GV9w1fdph4QmJ8kB3sv1dCrAQycEYeUuUjDpy5yFmWvxt4ja11jpZaaKnd5bqcoBBdo",
  "key31": "xXhUpSw5ZRrmMddFowxQqYqpZRGG6q6pxpBEgyc9ZKw7gYpoh5vxUBp7WY6WxwRsu8snxVz2HTvW5c4yVF4MiTF",
  "key32": "5cJ9X13Nz1kLHr58XSrJ7WJVwStbaDDAKeudhcReMqFSuMcLPCu6897hsXpdse1RFZ6NQ3ew7HV82EiFmvNaXtF7",
  "key33": "2qoMo4tCyJ8vujDCgB2jy9ZTWmbZQz8hoqtkzJ1rjLDvKFHA82ioCsrJGAsx3LHkd5H2dJ6sRpa18BPYSbkEBrX6",
  "key34": "5Zg7osrcqqLRvBfoyiZhMYFrKhd9ehZaxetr4E8dFWosDaASein5Ajgo3rZavJrTL7XCzZQAotioPSKdm5F6a25G",
  "key35": "41LKbYjXo6K7THY9sACgqHxSruPkfWap63vipZA3avqKDSANfiUipSaKbz2WePHjn3tAzd8mBCi1rcpeyqPh8D2Y",
  "key36": "vy9pSo5hqypgECGyGJ2pZsqwwV1oHVtmu5NoC9gsMwAfCnk5KYykRQWjsGxqGgqpgzohoqmQbzSLniCbgdRksZm",
  "key37": "P2nyMbYZHQx8Q5TLCfQaGbkUPBaKka4QquC2og96dNaMGCuuVAmcHNPQ4vS3i8VJxPACVvN9cfzcn3wPGvtiV3E",
  "key38": "Z8nv6uk7i1rWZvWVqgwBRnZGU1VxkDoMYxNtftQEg4pCM3apk443TkwC72Ur327eXKnufUeiAGo1mzKuNEPz56t",
  "key39": "37UbbTm5sQeUHsPiw992s5ZEHJTurfv7pN5qnAsoGpFCvg4sBCM4Dz2E5S7SqF8pcPXmDnqEYDPyAuktypRk3Guc",
  "key40": "25WqsSHXSWwevSBXvNKwppJLTQAingmMaYyAqfvNvBVFMPbXhWLYiRBMbfYrpKdsJABUrHnsdnoYLgXrEJ5x8aqi"
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

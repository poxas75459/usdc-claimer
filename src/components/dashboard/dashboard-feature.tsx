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
    "5YFNBjptPMd33A5PGHXkwkeLWbBAw6eAiJJq2BYmWFLRC6TKXmfCsc7vx2mk4hxWD4yFfddM7Swq9TseNTZ3TZZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h9AnAuZScLDGsKoUJcUMfPFJbdE6ZTd95VLfXY2uQC3cSFpr3sqWuxmUDrFH3igjb3wMuwRzMRKDoYRRWAUvUq",
  "key1": "Ku9FKkPPvfRaMmSK7Rbf8sevTStsFNtJXF1enykyQqbg5aBpfvdweiKXW4SY6RN5hA9sgdc99kvkzxNeGpepr2X",
  "key2": "4Uh6fCQpfZV1At3vKgRQ7bv4YJn3jAL1iixbwJ3ZUuXiitmZYFWS1RmHENBKengaqcrF8iS6T8UuRtVSnnbvzrWV",
  "key3": "5TEEEptWiERCY52Kvfpt1nKQQQrEkmepje6xEmDpax411sMws3ep7vY2NAfx17S9FFoh2xPVcUgEntvw5PkZBbAe",
  "key4": "4z7jYsDGj8Rs9TwnKVDdEXA9eauVn15mgmUMLJrpvHcAWKgEwAho1YPVcruKmopgN4nmdUBCtMJ87oNzeBNc4zGq",
  "key5": "4utXPpEh22Xh1poKEqgNyJehyRRzWzBSGmmiBDhzabt8TQ7P1sEBK3XDjARC9Hhnazx1kdxfGKKc2ASQpmES9rYc",
  "key6": "2X6NMYrqEzKUc3ArrreHp9wYZ7QdRfBc3VzSHNStLr8XCHM9QoF6tUN3J88mAnsjBCGbHp7to2jpK5X21w46xqVP",
  "key7": "grQG4GCzaU5QZKoBhT3H8XMhi4XHooytEchUCFSgyGSdCJLpVDU1arUTK1mNTDHkRuhc1sLb3jJzgK7adKeTJHe",
  "key8": "39Vz3Z5nu7cy5jjTZ7cDqTbrXvnnoNYCAYpoXeV8PX85Mt7bXu1RNArD7Hp7K2JyDLWU9ExV9T5BgkNf4b1RyLdQ",
  "key9": "gXjwv9qcUwkVFBvzCTZ4ZE674fiGb4dLBsLh63GEoH9hddEKEFhQBZaa8vNsY1R776K5CgHKfWEryJ1BEhT2WjT",
  "key10": "HiPjMMS3G4dHRveGbN6J1RMVqJPFTtoNWURw9eaCjvtUnduEWgsXMwRm9iHY6U6PJbtkZjQw9ZFSZDoTjgEo44J",
  "key11": "5fNhjWKsDz1yCVmuCfZaoBMuoqs18BiLi8gC9QmtFRP6QXY5XVcXXLbwuJQ9WzbSN7u9cgdNaWNx1PJuTL2rXXn1",
  "key12": "XyAyVzZN2SpA2jsbkMq3ps24SxWdbF3dCewyi1ybFdBnSRS94LLAEZ1S3AgqQxe7zS7w3Ac3DdsQ1z7boqF9vNy",
  "key13": "3Udq7Eft31VpriSvHYy2TC7fcUrHJUovoPHSK5hE4jyJhQvpYcNTNZy87ScQ5Cs8iQhaSHKSxEQ3A7JSw21nCN71",
  "key14": "4L7DRtX6h5cZja6PXUz6M9sWkcMsEAUnC6DJe3YNJ4bCEWXFfwRfPqKTAw45ziRQJnJEputwZsTGxpuvw3PKrchz",
  "key15": "WRQYzWpWvxTaA9iNKvtjAkzBAwR3wykmhJg6rmPvkaBRPC9r5jDeqi3qRHeieRC9VyeKFDWomfWwFnMptYxcFt2",
  "key16": "huidEtwaBW5nSnA2yQBvAbFSK2LXLZCpJtsJLEQ1QCk8sZJZhyWMtDhxWe6NuF81myn6ajnq5J3UQJKgTvAvgjF",
  "key17": "4HKdLusCo8z4QUE9F4cwjeNYu8UZzxVQUqFTfbFoj4xDAWQEDteUUbVHCUNqQrUH7t3bBMVYwEJqVwFDH75rDBp2",
  "key18": "S7HUoX2CfHJrCvvQ5pnXXYBSHsmTtx9GkKSDR46kx7xkbczPwgHe4tnBam5JU8pp3zkhDBG5Ab6QUFPVtb5GoS4",
  "key19": "3AzD2mpou7xS9sAzWkBqWdntMrK7vjMnSxNVJLPtDTkUbFvmhFuokjv3jTZGLrSLe6aw1rykGU44Le8n7gAtxJLN",
  "key20": "4VcBt42Sa2awTqKb6Rd2bgyVX9pNy1B7YGMVJfUCmwFZc1k3829dUFqohuy2EeR8BDK5jcoZUNSF9BwpWq4qi3Bx",
  "key21": "DMRWU294qQTMmDvsRZxLH1Z9wuk1HsLaJ4H4cQpFvF5SkEonJk3ZhMyY9MnhLuGjVh4XXcZixUwg2Sg5mYJaxwG",
  "key22": "2rqsBYggGLXqHTVu8CddUL6CKXhZgNxaFVp8RFiNCnYf7aoHoqCYCGQuWF9BBdbNEr4cdhGDc1A1aHudZxB6WWbz",
  "key23": "2UWWCfEQYM5BNkZ8wcttXCqetaq6uoFw5PNEV3QLnVKHGVmMNmTxaZuNeP35PVcc8T6sMWX934doHa95U7qdo4nR",
  "key24": "5q38Afm2SrGXPvxHuZSbizEA4TY2rxXm3mg1Cf79iCUMz1YbiUorYEiQVMhDEXYjK5ntQGKwmeqXeD5my6N1suoh",
  "key25": "285dngdL7Ga5DGMaieVPGYgDkFa9pGL4c85NQ8CoSmv3EagPKtLdvX2T4KWQTw9tXGuZScX7jR23t9C6EYzZeGty",
  "key26": "5Qq4er4q7Yd7yJpgTfTBWtg6hbS1JR6uNiReLKaHtn4R18SLXDDEMTmmfgCksGkJQhKB1bQ3F9rJ4MtSJMkZSFHv",
  "key27": "66vS6wPdSoUVbKxgNxJTaWmrRu81AXm1tjvTYwVM372ruCs66Zu5QfXUWGKZqxgyzL1BgwY3Kjd86kvFevzWkPcc",
  "key28": "4zr526CorVgAXaymWxmob8SrbdQcTcxHTRcEZmcBcUqDKkLiVnmBtw8eaX7qFgBvtnw33GUw4hL5PWwkyDjaWt9P",
  "key29": "2m5Dx4MC5tfDCLYUq7pin3omZW6UfMGcx9meUL4vkBsFFAC8gk5MTcpHrEZX9psC2sxhDDaKSidyZ8voBbui9ykE",
  "key30": "H9PbvoojT6qWGpBNyWiXx4KVqfRi2PpoEVBfEujVrnUx373EwEfG26T91GX3C2vob5qPaW4JyHzioesvBgGdbHJ",
  "key31": "3B1FrUoEFrLgEY8R6hR3XYoN6mQWqkn5UL9yWBMRXRuwASoCJDWJdL48hifacQBBey8wydGRPUpdasHWimfck92z",
  "key32": "5dNPmbasvDBSwBvopjHPoWbf4BC5poYoiHodWyjvRc1Wn3eNZZY3uQtS2qtFBBiekdirsQydGXfjHRVQAum1n8wj",
  "key33": "34mCvxniVJHX1DZEnhQ7wXLqrwsvoM6zsQnQCBPkYXKX3kNQvH2V4Smr1Jwhr8BnQ2EVgLULrGoV8TdKdXTCwV2S",
  "key34": "4DbUomRePbB33U6SMcL9YYneZMBBxcjUrs2jD3QsHeTZqWLMsYt81LbjrN1BmD8qT7pdjRX8jyekxibEFAtijDxD",
  "key35": "213s489qiYhimKYxh8NybhySwGnXZFSJx3JQhDCBMsmmsWX4yL5cT5uxEzck1LQTao7XWYFdbxBWvXmPqGRQQ6RU",
  "key36": "2LYUW5fwVxZCtGskPqm8db4pgGDzS9aPBpBJv7Q3tceDh4oKDZSMqKEfY6UpmcXpRCjgUmBNUdsuJJc8GwqRhiZa",
  "key37": "2SbXKxFY6dBiGV3p5PojtL91MwJ88eis5PYXxKL2qNYjs72KQKXStWtVJgkaKiuendLPAQjQ9L6FfT7y8iaNJg8y",
  "key38": "5KCZz3FvsPfdQQafetyvRuVqoFjzWvUcTEkPaFWfJbvG6USV3qraz9YrZ4kzvRisJ8Smyzm9PZm4zNq3mpbQ8VX1",
  "key39": "2jqbwNmFP9UN2zG9NRzZYo1WWy1F5zB6WepSkH1qdLyVL2b3o53tR6mPh6GPHTdsmVCfmKCw4oA6GeUUwYfPuxgZ",
  "key40": "DmNAQAq3og76uCo8KxQUWqHABfqHB1x6ep3LE2823Yxkot5ovu3JA1RKcZUb76MypPAbzvEJrYzRCMFVgvR2K1k",
  "key41": "4zMFJhA5zqiTX3ycSeYEPW6DMc51qKcRVMnQhw3D5C9NgHA9D7NPyqozYSTXdRuoTuFrq3PQEmeDLXC3nCaCjjyA",
  "key42": "61QngF4CBuwwhDoG4ncWRA71BsPYevDLvvFonQzKkb3biUwk3gPqZhNnLPh2gTWgRnMPf8AxSwYrkiFB1aHmAspZ",
  "key43": "Ar6HEPqxXWR5f2SMZhEcsmdBMutDw6tKD1B559SeLGKsLhNQmKMYexoAcCgEmU1zYJNokVBSGQzJGjpk78sSFft",
  "key44": "wtpsnCyyA1hLhLj2TVRchQQkCgXciNzkTQhaf3iMSzBVA78zyJRPz6RgufGwdmzf5EzBw1FodvRnsWjPhoSafZi",
  "key45": "3WNee6Y6vAFzEQ7KZxfFuv4ELSeKJt3XQpQwoj3jq7BJzj5WqVHU4WwWu7jZRoVfgEbBmVpKU7kY4iKxCZbqHZfW",
  "key46": "4Azdtwe16SUDjVacPXw43bp3i6184de8ZDMsoRYDHTir3ktmY2TVhvjRWFnQ15et7pSHP4TpGBY2avRVHKqBvX6C",
  "key47": "uSirvfTqha14Vxbg1F9JJDkp7JwmDKBhmun6oJ9mW5ZJi7VvLjFyJMwKHcF2nqwfmwJFbXv9CFGgDyBqC3ciSfB",
  "key48": "5A9TWa5CyN37fs9VTzCdxTf42e7tyGBkKCpxXxBi65BMWJsF6sXhnccYgAxgfKkCAXNvtKhx8cLhfJtBndEFwRdH",
  "key49": "425Q6rUGJioov4XjtKr4yJL18e7dLjboticEJCEWJAns1idDczg3V5GksjMi1HCRjMKtVwrHnKgCEM7YWM5KnYuF"
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

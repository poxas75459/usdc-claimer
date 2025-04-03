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
    "4sTwU9vAG45SUswSfuVeusFbwmDZYW9kCfK6dPB3WLBdTa4QMfsv41gknYKCKDHPmCYFnYXt7FKv5rtxqkD7sPHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GZ5sLEJ3cTwi96VygCrv6V65epVxgxsGmWB97PsqQhGiBK1SZujXnnaYuc2XMo3Dwa6JxxiArysmBcrDHVtFLt2",
  "key1": "4r19TGVdyJMmcYjPbFWZKzj4KhjU87Py5wBLdzGNYhGmeEbviC3NC9TzXcDNXcfS7VEa9u691MCmsHUuTpNTj6pj",
  "key2": "ofpcidhDhgYSM8xAygEFQkYB4q9WWUegZbe1UgT2eV2vSaAE58pe49nMe7gUBnsknMsbNJNPhrjsDbvWm71wcDZ",
  "key3": "2ZjbaxL5eqpEQ9HeSZe6Ez4xwHYzCDhXZ2AruSjXUdE8wtz99KDbULdTCgcyX9MUBiuU7rC5MLXw61nR8sZjto8t",
  "key4": "aK9yiZeHxX8b5cX57auM6bWn24E2L2mhHgb2iFtbjKbrzdeAYinfdbRbbYAPg2p9pQJEhjuBQgJ3zJwNtQn2obt",
  "key5": "3sdGYmMJ696tYRhfgXVgpgAxUWTzdVgGW1qMo8oPQrx1cFwU3dr7h3KjPKGZrv4truyzsVSn1S7vjpQfesE2ytTg",
  "key6": "5aaSjPCWVqHb9mfdcX5ufDkBscLjFQqhM64BPTTFqKeLncmKjf5LzZseLCGCRGyJ1V7MfFgYvNNzMreg23eddmz7",
  "key7": "3VdX1MSCUn25aMcRyTKPVxP5SGkPopFmtm3k14b8DboyrUYooFCcbkqo3nqodK3EeyMWq1WZssHAyYPEtDecyRJv",
  "key8": "29UEiSzAi4ZnQy9RzmJ3WN1LRbmc4R8CFzG8eCaQN1pc81JbVV2R4YwyFkAgLGd95maRw8JgyYwdZ37jbNg8oMJU",
  "key9": "5q7UeEopCz6fh4mZLEUpUre8emcgz9TqaetooaJ1bMbYwE9TG65q2GyZmBFsSxYxQayhzdeEsfxm4Mc5v6tDyyBC",
  "key10": "5zN7zqCDoAnaz2VEhysuU2qdgJDJeoEX6sfFDvfVM9L9Akw8qn538GWDnMmH1bPBezaFX5xrLQ8rJUYatou6SfeA",
  "key11": "39W3D9QM12k8HRZEiANzvJzRRJkyJRJyYLX7qjMvZpwCNi7cRGW2Q3rbHJbMwsFmDiS2W7wKUMCtrdJspUnmVnAV",
  "key12": "3yVHtmn4XjE4SufCz5fpcV2ne42TfvXH4EV6V48KDtPmBMtAyqkGkktxEFNN8qAQFDeaiwFJS5iqK2xCkUDFPcXC",
  "key13": "4oVAbQgJwDi7MfLBngF6F5DNqxZNBRGLVKosieYbrA7tBRJLhgUj31hu6sghnkTz6bGNSySJyeHW4MmCmGXaNH3D",
  "key14": "2d9aErkFszuuthGTqf37jrC9qpMaPTtXjg7YD7Kpy1FQHZC66MZtt9N6GZMSVpE1G2EdhDiXTVt4e6r2x48CTjWx",
  "key15": "5GPSCrXWnhryWfDSNoSiDc5oiWHa6rNpbUwvRD9G5QGnAapn1zmFQVFkbb6PHBLr4u88VQkPZ7w4WVRzY5qT8qvW",
  "key16": "5gjBkDBcqq88bKJZaNrTEcieY8mXMc28mx6hHLAy2EDaXVex1JW1nBSQS354WdMiwJqZmKz3fNPW294X9TQFX7kz",
  "key17": "4G5hXUckZTe5GN1QQJ52AgyJJuGZB5GpQyK7fS6w68XGDFLgX9dMG1XXXwT9mQju1JNPCwEZVSD69y94uabzdHGm",
  "key18": "3hjsFJKCNywMYBfXeewNybodVCvXmkBHM1NBTehYWHqGf6yHNcsVQPba5Esrh5dKuJVPfh9HK9kE2AWteTTPNh7y",
  "key19": "2dmNv1EKiCUgytwY51trGUkALP1QvgHdmk4QanXP8XE3FGUJZfUCKzke5Bei4hDpek8Ed9NYmvMrFgB3tPgh2kCr",
  "key20": "3jpUyJXBEjc32poU3wGH3i3gZmAXVxnH96URHeHoo8FDCVmzFZe3Q3a9RzuAc4v1a8J3A5NHzdAGqaisqzqr2vSh",
  "key21": "4efkyvLBuHEoBqyaWno1C17y7UjfwzW4TP39q3fKeA1h16qXTvc7UEZuhmSA27FNcipAmBqB2bRnLuhVhHjwcged",
  "key22": "56TnvhyjD3nCmJPD3EL4qSUugAHBYvVsVCRcRTdgKqgwBhrvE2QA66djgomBxudKUfxuM5KyMCb9H48Up3SRtymy",
  "key23": "4Q9AtMQJUovZL16v63CzgJVqyDLEfEn3DcRN7ny1wFA8zSK9y47EUZfDzNr32XpiNSvxAn8JsFCvEm2joFWsqnzJ",
  "key24": "5oksDNQhzm2AGFMVFjJTG4Rikd6BLByYLVToSqpuZoHgBh9X1ExuBuMaiRMfW7phnbX2mBemLoZSSP6ie1i5a9bz",
  "key25": "35Wgthov3pnivzAN89rvUWWadnLemrY4hNai4nTC9GEjjhJ4M3TaR4FCDpeQT5F8vgmaZ5ech2ufk3sHZJXYugtB",
  "key26": "5s2baXPWSbz1oFV81Gah4zav6VMYJznLYYfiDaSQhkhEAc51UN541iRu2PXpK3XKKpoiSQVgcMhqFMw2vyZoUnUX",
  "key27": "vBHKABPLS9ZjoUxwydbVeD8kTdaju9TC3rLMfXvFSQB8esMJwVgmyT4YqWKTRMmdwyAxBLy9VhjR3jzbvfN9WNG",
  "key28": "5Mm5avkaF9ptqk5zbpCeRuq3oTLoj43dPQoYbHYLAKUz7czVmp1JrSjTU5RCTV9jiZ3AsxYHKq24zbKvQ8c76gXN",
  "key29": "5yE1RXChZay5dZAHHrBhPTk1Rg9ze6NtaaMtQEVzc7Bo4CfCfT8HpTs5QCdxmXgjDndTFgP44XnErQB7GjXZHgfP",
  "key30": "4MXodswSYV5AM9cLBet23PomXW3PJSjooLSyBa2FP3tgnvZ9k9VEt6hxxjPr7EdDJ5zPuCtx1E5NWsE9oy1U78pE",
  "key31": "2U6jGibBzQbqZhX3S86uNEuCbQkYUz7V8m5NN6KMyg1rPrRfwBHkHavkAZetxDFPznDQeqDFximrMMyHsCr8EoRk",
  "key32": "2LwC9axxfKnMktXV5eeZFnvTQfBHzJCmBz3uUfBztdymT88PWpau5pQ7L2B58S2yWNz4biRiV96apXBLvM9PBtuL",
  "key33": "63kFcFwu46v9qApX1WjNJ7hd67UJ7vvZYY82M7Yzys2V6jdbtiupNz2DFBWtusNKydNdp8MZauMYe4621pZ4Pwg5",
  "key34": "wz5GyTMuJmdjJQQNjWPmR2jEQxQBuAJ3VM2iev5JqNyK9wMxojar6fEZQaFucmVD4N9ir6GAcCwedXsvtYAMs75",
  "key35": "3FiBZnM7oQEQLYQubCh36rbXH5Y935zE7HJcVrwEEdcFuS6CLgipZCJCmBY1aBQ4VDh9gWGwMTtKdBBHpjeqNwG3",
  "key36": "2iRzTs3kr3P7rfkuZotX1XjDe76WCAMTfnpi6ub3YwFrhJvQH3JHKWQUFJNoVqCGdsAgrJo4BeMtryuC1oL6AMpy",
  "key37": "3k6C5QnfoBCQBU4AD6KWGx7ESiTG6wqCrxa9CgRo1Xxo19XymdZEExKEmb5N79r4mceuJG7WiMk7ZuEsGqkiHFFh",
  "key38": "3uBGkW17TsfW1q7JZL39s6wjzXPythyR6YjGah5fAzm3KPPXGpZ8moyox2zniJdfqibs7Kf7rAu4icUcS6tYnfpo",
  "key39": "3jue33ZfmLWEdLtact7W1KcHoCqA6NWcfMvjJPiSS2FpvetG39YFZhZQxt4muvCrUUh5HGTB9HognWVHA53iDzdo",
  "key40": "5uhsKHWPz7m5Qcdjpg8PanrohqTVnirpGDD6PeFPguU2L2ebQRHnDkcjDZbWiTDacSpA3pB1FWWxojsQiGKv7qkT",
  "key41": "54926MhVBi8txn4gc27ENvGJLkA7VEx175LfJXaxQYvB9r8EJX5FapFkgzgT16mTGc42912uPDVDxvMNoktDVaLj",
  "key42": "51y2myuqaHzaaa7Tt3geDPNXbGuYqXYp7SoPMaTeVeTP6spP9RudkQY1BzARwTqYqz4iHaxQ4ygNovSEqoK5X352",
  "key43": "4kkXV9Wu7W1hGwdpvCsbBro5TNT3iCnWBujdcMnE2CXfSeeL5ErW76ejTxVzLKTzT6hdtsG3Sw77g94KcoqdCj7W",
  "key44": "3D7qZW1cTgREqXaLW1csZSkG5iZnfLFm21mE7ToaEaBST1HM4xLTRBRuKRo8sLi2icj6BKf98pwWPkqGUq9ES68L",
  "key45": "5Qk1PJE6oT42ptZKGHBwdoFft8jmB9fb4ftmZbF5yapXb4iEVUYdmT4NmDo5SfXYLZ6dzAYrB9Qe7EW1JLXNHBcR",
  "key46": "3rczNhTe5PwWhAGNbMJWVf8sSJGjZrRgsJV3vsgcZ1XDcUoF5dcFAoT8RnE7huPc8TQPPEj6VdxiYL8vpb2DfAG2"
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

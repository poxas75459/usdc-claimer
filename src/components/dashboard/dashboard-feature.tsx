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
    "2aFjSZ9iXmxtmiDryChCxMFRJRLW6N2YhJN3fNDx7UuBBcrfrk8nHrqoiomEKQ1e8VFTwBb8uauBMFd3cPPrKgox"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PNnMPhP7ivb6y3RYCcjoDEdxAXPrpvsHiwCkNx3kBEDCw3JE8ZkrYXYP9deaUnfc9Yw47SdnDtASiDB8wHBLrW7",
  "key1": "3EYraUAYrc4KGdZ6ZdbE36ZjbKYhcwxBydohV32iKi4UQthKNRM1ziBAj6doRYwvcYVW6gN2nikxSWTdBm9Qqfuk",
  "key2": "2F7cJVuCTFXJWqat9wanJ5nPrxPiMZzFvZAXQBiYys4zXUSWVRXNRVnsXe383zrgWspEjKR5uLcypzR2P5VjsrHi",
  "key3": "HEEr2UocXWt6cepJ3H6UfXBbmvjvTSbxJCRkPd68XSxW3GrmVQfids8YhUnoXekCDbGgzWfLgVttcSgprgYR8at",
  "key4": "4YokB6sPf3NEbqqU4oc4M1721ZRhgtMtwKU1ebjhJuMfcAo3VB4n2kJSVd1rDq4mgwEXbYSv8JNekjFZdUYjFw7c",
  "key5": "3TwULjjxxStfiW26vHykqsdcNuAbwxbEZgmxWzYqgoMtoHsyfkedRTf2e75xr28xyMoHzVXUtmbM8pY8MkNrSF4W",
  "key6": "23cg4YgTa1Z3F7uQCn3u9AFbDRBNUfbYAfJmQePYqtxfRLtoqMzuxjjEjZWc86hCfcxXzNcf9Fe7UEtKYV6pfbUo",
  "key7": "4kS8wDaEr4iHpaYPsYdKU64u2XDegbz7GVCsKSMvD4wkJ1DD1L7TafoX7okcaHnr6MR84gnVKLs3s4mvQYarRabK",
  "key8": "4VjxqeDkhLLuSJT7ZQbzJXmELJuWGqGYZmzjSHvMA4B9PRBC5MWAosEyXaMgVPqz4DZSD2DHbzca4dfiJFaKtoT7",
  "key9": "W6oLveNfaEL8dRFaV24FtAPpZGuiKikEEjgHBextr8E8pzYLqonGiLB1kVRuV84MYT12zrSKjgVCG6LjrKForii",
  "key10": "51UGCJwY1Rgfm577ZybPuBB8UC5Jsncrk3kXZbCAgAxPJuMrgmhYYrX3h4mwLAoZUveVz6wVvYbpaZ5cyL1Upezc",
  "key11": "4JXNqyz5X9K2PiX4tTLMVpizqA5AXYGZ86U16qgTJnHLCZ5Zzes7umwfV291GqnYadCyrho9Wy7i2pzCfRg6i66c",
  "key12": "5rVnrMdvS2SbcBQrZxoBXhAGPVkjMxZ6UbTdoNphfpxc6ETjgoa4DYvbKQPXc57e7WJjSjiHVQtgV8PzAg56H6br",
  "key13": "2p12EjNmfvTzkDCy7utZeLNjgDasHyDfokUtRJn4yhNpLMHddhSFrbJZiUfhL3sURRNpxeJhbVe1QXog4yQDXhGz",
  "key14": "5cLMdrJcrCt5iRyU3cLGYzVYKSVH4VSnRTDA1GSLo4vVEYCCnGue2P1H5W3vGWhGtzH89FWeWEF5Nu6n6ijGqemG",
  "key15": "5BxWTgSFSpq9Qp17fDaJViVY3kcSjwPwjUSB7UbcvEA4hkFTnhdsXBPua7b5ehYHJF6eMfg8CbCBgXRQXAHbkfki",
  "key16": "2eEYUbkijR5HUPZLpbWcbHCuGZeAshodTpPPoZQBNazCa4vSpgQyxf8Nr6raJDTy6o68o7ZQ4c4ZhAddNnrfYvm9",
  "key17": "4JU17cBojKe8tkJdFUbRakf2dLZwvBabFaDkMR2eBCUCcGEzGxPrnszDGBJGkLw7TnrGL3QH8EvKxg3vmWCXGymg",
  "key18": "4ezHeQArcLTDRFwvZEnQi6KUWcMZkaFLWmki8fH6WkYbp2rvUhYrS47UQa7m1KGptn5nji5LqDu5APcmjea7TgSi",
  "key19": "3YTPaqBmyHXNzFNagRFYodZzeNu5KtXds3dS2esDZEuW9DvTNbQkX4j7jDfUerRuVmXxQtViBYcPtiggsrkVv4ym",
  "key20": "4QQwwH94Kuy7ewE4BFLg2pkDgMJuXC4sKP958Tiqznr2bhkj5SNk2PHL7bz17Pze5T5Gk4wSbV4gd67JtTDR1coS",
  "key21": "2KCVQ6ZP85mHadoNCt6MBtJEPPudS7p8UAxbApmX1v3jpDQvrMWj9hctfna5YxZKYkXwGphDtXPbeb51kAgj4LrS",
  "key22": "55dNBMGBLwGDNP3rRM9Xj3rVjWBC2KQfZVxadX4PRQPj9rGsPhJUvh3A9vf9Mm2VBUowV8KrscfzVLCUXWwb9fAL",
  "key23": "2vAHdzvx4oT1NNnKnTfwPm88Sk5kGghWbQKF58eMDcT7ATqf1Sn5hmwLWgScW7cbo6TbxxiXh1zUpL5NHtYNcw79",
  "key24": "2kLo6gaNVm19hFqZeXSxheY69mCEPjbEwLvSpAQWvmgyc87Rfxodd75twyaDQLJJLyiNyhWjwgbha3tmJUi7HmJK",
  "key25": "2dJ7DruWTgMH61sFHQQX2dA5waeY6RZJirEfFdZ1toKcUNsRTKGx1y6g7Qwp5eW5y3f2KbfkpUStU69MpU7ibscQ",
  "key26": "SDSXXeKBfzRX3zkXwqRm7dJVK5g1Hpm1PY8p9TaZpVbcpuwz888ygGFLEbG1ZfoZYuhpRfPqq4nNp51rtDPMrwG",
  "key27": "2oCvn4gYpEGw1cnY3G38McmP2QZHCq7Ukv6cfd2AWA8jVUAJWhtRqL6ixRpWbP8yzGD9a52sTqQZAryztiMZMPQN",
  "key28": "3MRaWw2nLhmAiM1aWXdk8cWHCWD93KfTcnbS6ozh7oVTKQLeXfSrjfkfqgxaN15yjMxLPJDbDovGwL2a5VWmYYeN",
  "key29": "5io4WeT4MqqKNmBqWwWKr96KraM1a1FLjoKbj1cAQAZ5A91jxoes1boqRqaVNW5aUPCYcs5ao4o8yQfD9PnSjC16",
  "key30": "4Hyxp32wXSa1QZubmraiDjeHDeVjG3LfUiQZ95sDJ3Cg3VxqiJT4AjuwpZ6yDAZ3Saw9oJzAchrDsDshTtgpSe1M",
  "key31": "NFRMNowZcVZ1X3bR3RMSUgBbGamusN7aazq43s3QHy5j7myiQ6CLUQ7tKQu3vuGgL1E7ZKRS6ZzVLMJoAVv4L4R",
  "key32": "42KSAmq9HnNuhmm875ygj1YYoq4YtcfSMsR3A1sWtJjBwXa79gJqEQw3wAUUb4nNRkZ2rZmEvU1LVFTgykXKn9f4",
  "key33": "43bqLHfUBa7vovDQX1yX2c9sxw91efsjza99pVJ6x8EnPXC1n3E3mnum7sHVfYv5YYJuZqMAZe2UnwLREgfDsqFx",
  "key34": "ytiZFn5VJMX1FZBJ3x17P6wudt729R3tdk7sjWze9ZZja6vTSQwcta6AAukJU2oTUPMMsQbQRWYaBbJzHunMJrz",
  "key35": "2jBhF26symYfj9oMD4bQ8XcCQdXijqqtaYg1dc2ht3eoG5biRiU5GMWgtHpMKbQ2r5cTQQDYozvw9uBNZXLWn6sx",
  "key36": "3WJJmzgy4J5dxD5yfri6pVzMY7c8jRjg8QmWgb14rGtCv2642TkHwB66Um69Vr466tSHjEZQNpzhWAf3vGtTAvLy",
  "key37": "4PcZdaswPTg37hY7BcgVX3Q7nwanXeAhbVccvhKnejLjeK7rojPYSACLQU1wu75rmhuKJbgmGxXaDjqQosDnQ3Qo",
  "key38": "4UuWb8Xxz63AdEFZpgPnWANUk3FR1L6LdHak2dkrkkmRMB32rFccQqUL3SKpZwa19B6imS4FkAmqF39ns1w2ThVV",
  "key39": "4tsdxPYG1jnVT8xGeLQSAk9UpznS4bnNeG3K3zBCcBjPmKpBm8snGkDigLH3GSm5GiBdHkM5kLQF3F5vHD9gUih2",
  "key40": "ZAkjNn3GfQnyJC2iEUGepZkYYsJc5C56SnBdrqua4nMgvg7kRErYWuLfoDBd7FUzTeiSC94YHVLoxYMqeHKJk1u",
  "key41": "59bK489Pn8GsaHYXDk9M23dNfiFoZwEkkrfwnjmffaErjPbzVcxeJrAKqUD36Hbv4wzJvu5e216snBxxwstoDq4h",
  "key42": "2E5ZSmmkLJnUpeW6yoNuU1vWiuRoPg5r4u5X56m211q5s5yxFqskJBtiTzRFw9kvHwvzEudDyj6PYx8CvKZQAupW",
  "key43": "3gNpiEfyTZrJa2VzkYbJQC2WWKCDHN4fcTXjyD4U6DkJDbcHBLGHG3LcEBtAFzBA5iYqYnu5gri2xoMxh3SuYXrD",
  "key44": "4kHcHkZuw3VCrJFTedfY26XKekVLHiYqrGXSUs7oRK8AUgqHMLv6i1ndmyQXM8iUKRSmstboWek4knhQLkoPKjV3",
  "key45": "3PpQXcBrEz85sy2LTaJN1XvT7BEgcoPB5LTAxeEjfeWFDiboKFkxHhNFKo2H4g2UBiVM7WVMSa6DENT7J48Cox7t",
  "key46": "5nynRCuqUTm79mT3JWa8BWeLz41a39YiA9qWFunEkyc7WtJaudd3p5noQPUTi9afUY8mD73JyLQDeANpe2AcSVyK",
  "key47": "4kYq6fAJEFWutRJATtJ1994HeZ36zGrNuDc3B8bwYqYw51LxAvJi9z5XcpHqUC3F1W861vEfb86ndBCsEodbKqHA",
  "key48": "613UioyweX6KWg1JskeRh5RKrpNzzFX72GDnCNf4b23ywc6rNcjkbbona2fmvMcHydy8Gwpka26aEm62FrTuNZ7f",
  "key49": "4oLJxPvXTwg7TLvRc1KEhwkDWHkKvSfedpnNDhd1p5piryuYt59kLyaCXjGt4CxXUDaDACqu8Y1XZfX8nw5wjjip"
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

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
    "3GwG5PQNng4Uu5TCja7FU7mb1KKw8rFTtmL3Km5yUAEnPGquyVCvvAH7W2LSQXGTUDMsjUCPuZigsRPNLWufAeAx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k2tiHZAF2WL3X38TUPqcaqmYfD8u2BpFVbi88T7ZvoNAxxS8it6AZYe3ULotCpa4xwksfUcCFJARq1KBz247sxD",
  "key1": "4w6rBfzcaztAuEVdyjDzvAftfMeXY2YdN4ZrymXz1YsbNsobqwcDXbKgmHT5gXVyyrhHW2HLxmjM2KXvmCyzwFJ7",
  "key2": "2h4uM7foTKAQnCnrbkBfKqPTauyKpjcxsb7fckQAcDL3Z1ZTEg5o8e25Witf7KuJ3i23bkqPnhso5kpnY9ojdsbf",
  "key3": "3D54rydB8fWzEf8rS5gE1k3VHGFKRWun814TZNy22WgB4wHbY9QJSLCPou9t2rmPRqGc6oGapeuJ5b2oLztd4J3f",
  "key4": "3WRJwZcq8xodmRDJv3NKeEshSNt1b9g6gBpadPJEpRxELpwkJ5iQcQR8BuBFdQzNYU39B25Cg3D38kYiAhorws59",
  "key5": "4MmiFWt5ku7pu3eEd8iqEHdzrjKxG3xwpXUzcJRY4wZbPfEzcp1xD3N8g5ew25TYreoZVMk8cdZswunnSqh6fbFj",
  "key6": "MNpsQwktMFwj69DsGM2a26DBwrgF9trnSCzYPoukDJcPqcEqmAtoP8bLoAAxPSc1yDz2QPF7MSg3jir6JbdC3Tp",
  "key7": "yjHRoijHkMuXTJS9EGttGdp9DL7vBDT2QPLCgpWVEZCcuAg5W43axczRoBa2G8Vv92SKwcgkrnL5okfN1DYfrj2",
  "key8": "YXNTBcL9jbZJPk1A7RGzGWd8g9ivixqCjHcCLP8qzhSj4x2Y2BmUwhPzrZDQfPDeiXc5vu54RJeDb7igyAo6d5J",
  "key9": "chFXNdEitMcKmZZMyKiiEE7SrqEcXciv3zi4eZVNDoNynYSDie6WLDM7JvpP7HLno5bt4QZS76PVBPrd2uu862T",
  "key10": "2wUg1A45CPzXq9diSSDq4ZUw3pEmtxG4GGdrocs19KtppXsq6RhdvuA48VYxr5J8oUw23mcYLSsx2RCiPT1uV4Kr",
  "key11": "4kdDgcrPNtZWTMuGRngXNrBAonL4zVMv84Hzr9Yy3He4Mcj6dmUHJPcS6u1Q596CoaFVi9pR9buKGceGy4CJ4HjA",
  "key12": "fH19MFEkfv5H8xKenQb9JaxdX2jNvKC47E3Fn2Wug64k1vbotkru3AXkkpA2EtopL6WbPdFnf3DqvnwBMEh2s4W",
  "key13": "5SuoxPrg6pHHDYboDnx9f3pDynnoMB9d7TxxFNx1AfaTjEaFCT1gLBQoKEHjFgmbmd4N7mnU9kzuDj3cqaHudY4c",
  "key14": "3N4u35njZB6BhMx7zNBoUkTZA5AQeAeApwxsjkYXvJDRtbSFsnoy4DN6pTrnHrGnL6ApJWxcv62S6pzqypCM2oGi",
  "key15": "3BtwRBAFMybdqXYJj29vz6UZnb9jKj2UBeEup2F9VbRB1AKod7kXF3QzsBS3gJwZ5u6Jm4i2cQzmJvgDHy3sXFjd",
  "key16": "2MupFrBwTav1YBnnmxTaZHUCMtoHqMmFU4n1CcNMQSm86LA1BjsvMsyCf6Gj4pobJKAvQ6dBYXyd1S23BMCt4Ky5",
  "key17": "39Y2FKt9ba9oXngYHBTFPQS1DniPk6JMcowQ3ZjWj9z6gfM2mzM6jw7ZXxCuuEtR2ayUCEKaDm2oYZc9YwapzBCF",
  "key18": "63g293r9WhpJsyc7tgLZq4JgZUSXzLRgLvgKi1f6aRFKj9XaQ2T8JUsF62e45CAbrLPbB8N7wwa4zGxLXAMPkZnm",
  "key19": "3JsdaHo3769SPgRmY8U7DVK6ohNL1qXp6RGa3T1nyXAkeEfBd6srtgdE42RHWisgqG1bcD6rC3k83uceA4VZi7hm",
  "key20": "3NV6PyXZwjQDg49PxxwFF5jvXFbf1C1KnDYHN6ZrpRgdAPx5J3coEVUbtkz4hNgw6V66VxeZk28vCUUyLQe2Jw1B",
  "key21": "WUkNYKZVHVmhqPBaGLoPj2spCtzueg4qBzumvGTz52NyodMgBNXu4Kss9QVkxDPiMSLEBvXeXqRZaBchanynvYC",
  "key22": "2fKsRstxie2SkgfBx5s41Fc9SdWX81Lyw6bi3UmK85ugACPK3aFZqvqCpdcKn5J3RX14XLyHUK7khSFUCiktzJMq",
  "key23": "3PzHN8juVEyeHGMRvmSe8E1EcoHoJiWDfhf9A8pbL9x8eaHS8LuB4uMTLgEJQWodGZziZhRJ7jceW6qxBNv7wmTi",
  "key24": "5LKsiM9kF3Ae72Ak9QUnwppuw2pMbqNmBpxfbM7hpfvVGgVMMwCcAVhdhmYvuTfVvzBLaCtfFoonHfHbaCBfC1hG",
  "key25": "4YevDgMeCZcMW79ExUpJzh56noTQjPRgfjWaCpS9sMtkNzNfnNACFbwVc57SirCXNGm32snCLpRs9JbDbPAL7pN",
  "key26": "63e8WR8w74Mup5emjcZWZGLiVuwpbHZS7mnP5CfY6mPVyMdnWnCVTpXwPeoYZDHrUUgVKC54XraTwfPdu4DrsiAx",
  "key27": "3wXkWd3Jw6rbF8nhyjPAffh37vgRvxhfKLmZL9YzMdgzpBomDfrHPMkkNdk7ZLGZpRky2QyCQbJ8Z1Cy2E2BoReF",
  "key28": "554nPaVWjKUXPKHgFwnWpR24pFdqpREJ8oEtXryCEk8zVJ5ReEx5rbHYCXDctvzfyjeQYXPcf8HEjALkcdgVGS7B",
  "key29": "55Mz2zzZKDiTP2aCyrXNhvZGtf2mftNi8VpoA4tVChuX26n9bjyrgYghH39yhtaKXDjF7EdVenwogwZdPE59DVCL",
  "key30": "5FesKzyEaWjCUifhZXCvt7Nn7zpaRUQBEj36mqM12ZjjYM7AKd7BVZYiSNNPVQpYNtovah4BRzs8fgCsLV3wYkqM",
  "key31": "C2s7kn6ky5d2BcEKQm568f9HjKesCpa7pbhhwts1GXxRcREpyB2vH17edQFxeSfHWvHnZVoE881tiE63sHYCWku",
  "key32": "3iQcCiVkNKYWz21MLi2P865emWYDEArrtrSU2YgtyUY6KFg1tcf2HioAKiHDVvyS4nEWbAFhLVpdvqURPVU9e1Ha",
  "key33": "3JsUskPAnpqUKeVBBfTR9Wrux2xstCZ24hsegn5ENL69cvB3FysuGSngrCQWXmP6FtamoEuDu9uWEkVaqJkZNYHm",
  "key34": "3kmqA1VKCXmSXM8DX5PHX5UzjBkmQoJotXLYHukzJuso6t6SSvamzsL4XeMyBnQZtbmGwmaEAzG1ehLC5hxEv5ou",
  "key35": "3Ui4bid8J7LoxVT5a4o7L51stJBVrVEJywwH6zwDD1kuUnDrMAGoXzL2XZJwmNzMHZCD36RvETF4uEWVHzykm2P3",
  "key36": "ZhDrfcU8M63oCCnmNBXmtGjJ9BKXAFFBWLx6qe7CA9mJ2dW2K462kw5WGMDHx9ihX1uvQkVsCNUFNiP3XwU66xy",
  "key37": "2He5AC7CKSpKd5o5kscE3XonfuH2mwFXWefb1kr6MSW6zsnCqyoxny5nYTTiqQMFyJgtpahupbFSUynzDQHysLer",
  "key38": "C1nGJNYa72RubkCWqSMmYwwLb7ruvMJsg3KYNegc6A66et86wdPvzuMVRUuvqKma9mJGGCWJ8DqbKGF3oFJaexo",
  "key39": "9H33DSvvNagjDovGcELzYLtJ9fx6aEMdwF5f7af6oiQXHLHLAuEomJ7Rm7FZpjXpzhBAd1EoB3dVZXiRJaU1oVs",
  "key40": "2tSMbNhoqLRJ3NDCbypDc13STyM2zHDqZGnzZGNoeyAJyoxnBYcS9pmtFjwAxxdfZQjZzQ9UBKDUfjDBUajaaNo5",
  "key41": "441B6rpvagKAhD6pQ3De6feej694JxtVFzafN4ZPY68YcWAGUAzVqSY5SxwxrSKz7fS59eSQy1kP5mG4wDVfhEFA",
  "key42": "66qtbjoduNEpVfTf7t4ZSertSChudpxcN3djmLvxoGuvJLb179sNyXeqzBkdnsrNfVK5toaNGEA1ocHSNUxiMs45",
  "key43": "38PqtT26km9p3jK6qBTuSQ2YBcQiL2qM7QAewChf1xspsUGEfJ4LPmg2fZHc4xNWcMxZzCxEU6Bchrb8SeLLygzg",
  "key44": "3HXfPifwjQBA66WkVtYckC449y45v2dMYWd9L434Ds8bM6BnPwTov9ZH2EP13kE3AJtVXmzx38SFhrc443bv1Rp4",
  "key45": "4r6ntXYb1sZu3asDH97pUPLJZbk3V7PLXRJz6vT6Mp7j6HqafwYhCU1NQGVsGkVajVDjzjngTW3XKF3R8uuHRqUs",
  "key46": "2zFboaTSbjp7nL9DCJ3ZbKB8LxmLPVSfrmys4phru6YNcvQFxh6DBYGQtmFprDzHtjFWRkRbUFigvXqS7tzuptrF",
  "key47": "2hk4pWMTqSw6vsBPsrAYguq4ojDYaeUcKKDzc81zA6hvQpT42bHELsmCcf4S9wXmRrNE8dx11ihZqRW4H1KwKEHD",
  "key48": "2dAbFsxBMbbrnMgtnXZP6NXyFUtmKgnm7Qt4RdADrhsc3gueUa8V5igdAAtgofmE9UhydFh8ARzVstpmYKDLDUTe",
  "key49": "4GVMtuGxH7vGGqryxngAeTR6h5j8Zw5wuXjzZPhcYRGso4kXyys2oh3Jkw7KkRgbn15yLUumTWpvaSBPsJcdEPw4"
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

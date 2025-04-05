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
    "3PD1kysRHy4tD6StHPBKakWa2TKQvogLLNk4pBLwvBg9N25fmwKvYJzHiNetY53WVHTo3rnjazFzBZsUnUEu1aPF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nqwhi7aQTZZizJUTzSMQ3JP3PGcNTntB1Qz5R33LUbFvcWuGFLag2GcN8RygjJW5iYA9t5pcrz5Jps2C2CWtG53",
  "key1": "4dVBk2khjunU3ehDvcQWB7vQ4LmjxqXVFs41GtCnG9yk9YNLTSWuvdoDwkTAxmKzRjJSQRtUULZmn5HXaaY1miyU",
  "key2": "34xuCtuSvJoukTSopArwtYjHw8Gz6FPhb8mFEYV559cfmzSivFDMggHaWy22AsnioqK9h7EFcQDCGqKyQNpJsxCg",
  "key3": "6KXbFQUDZPfGNFFtFjZwR589gwTRdFGEs1ypa7PF58pazHz5oZWYawUSTeP49bkmSinJefM7ux2dXfdc8NDNC9F",
  "key4": "5MfwWoeZxyroM5AX2Ni38JLeYNH65ygr61EzjiyEAc3Xsa7pnogfcXZ9x2rTqP3D7SvCGm5f1eBcGwCVzJg6nDC7",
  "key5": "3A7XCrtvtJswwdNn7ZMiaAnT7yT8i9rYfvAD85EHoSi8THjvHaQG3HSA9VYHiCyvGHU8K79fpXsLhg44cP8MiKZD",
  "key6": "5Yb39RAbiyNrYu8QdYnyquyvcbD9pDgTLZwLvgB5hFBaR1Hcxr9HZG3f8UymWqXjEbxnQeqDks42USZ682uRXjSF",
  "key7": "2KSuM5SHA4SyA9nfkJxmnsDoeLU5Q1JD3n4YiHSfqE5Ls7Jcw9igoXBDpgzFB8hpgGa8MKLTFVG2xrAJ443HSXQM",
  "key8": "3Ub61y7C8F7kimgT6hqZadQKpshE6ksomJcfETQ2UyoG5ZdyTm8HriQYNsxbPB6dJMRo16wuJ3K3Eqft9LxKVkUg",
  "key9": "61WdgjJvcC6LjDJsrg1WTwuiP2LzSDag8xXCktDz3nn4vVBMeUYh5oKzZM7ph6CZLCXfqEM61LSohDpuqN4a3eTo",
  "key10": "2NGyW57hDj9yfXHACBnurDUMjhWyjSMUHvsqQp63oRioD1yqzPvQk8UB84svpH9XvUQzNSYRUpSypzmhT636rNim",
  "key11": "3uj6Dn7yMgANJvoqXPrWvuyMUV8VDnQhpgAgVXjnWE6TZFEiff8YdtKFZ2if9ums3Jc9VnFRvCXXwetYKQG1Drrg",
  "key12": "2WUfWqaji2hFSuLykSeX1gJggaSRL2XufgVCFG4h6UmCNQnGZ2kG4maG3Zs5niYLgCRbfFoVRTtArJ94XiERzP8B",
  "key13": "2rSVbRnDG8zFeQ3anCr8LtSSdAQopHJT7Y74dUEBTabTGoHGPFRZhDzwuaZgMougBYmBQQCrkBe5ZxtQeXkW8HyH",
  "key14": "4T1NgTvRz2JNeQjkMBMCXgnaJawsX1BpLk53NjgwkcygtEHsSMFxS3xNso8bKD7MfM9JYgnMzMnVzCZGgqRHxtCz",
  "key15": "5CT8Tqj9tqPUt5FX2Q28QkcpMJBwPia2vTg7pjL5E8uyxnkEp8ZaBx2LWpsMaBvUY1k1UFFKGmeGM8vmgvm65r94",
  "key16": "2W2zqLnuxRA3uw7Ru6n2gcjUoqLGpWU7K832LUJUC7pjDMDVDiVDvRxQWH2aaWr1pXYWJBpbMMqgHXsE9KxhMYWS",
  "key17": "tLesXLa3PswaMo36ZrbhBeUGYG8qotHv3cZWY1mkVRTSYbHVhSrjZAW6Fka9BWurvqYserAoeLKBzH5bbpQRtfE",
  "key18": "3qnwGV2fSSVg6WL5YDM5fsqoUw4KDdfXyPfd1NLfaSRPdXmxMsNrY4Hudq2ivUT43LWqA2pQ6zuagophiAZKMGYd",
  "key19": "4zJGiE8X8zCjzgSKy6PYMCirxFhUaADT1bQbQoxNRUSHFAuyMahRjdKeTuc7drDqzBXyJJGzgVn5EahRWqxQ6yut",
  "key20": "yx3zr8YRh83L4uwLzTmTRp9eZdh6TWNZNQupCV2NbCygPzLs4sSEskgVLiFHJYevU7LCXdA9HHajS3HAeFx1G9K",
  "key21": "kFAHjTTwWE2UCcNci7Hf8DG2EB77wo64Y1frBeu3nZopsqbUswgx9JaLsVWgSbYytXTjN2kBUi1aMX9HfqbQ9xF",
  "key22": "3fvGcnFxbkN5qdvgcsiFSGtLFGQ9nPo8TDYKed1UcbJjf55czAqgZRZRe374Hau6nzDcQpGrXeDAQckbCuJ35Kp1",
  "key23": "5Y2SqeVFnHesUCHXHCaQChRxFdM3MeeQPJJPA6wkNCTJnNG1QjYWNQ3tsug4NhSeMG4t9xDje4ixAdk77jfss6dM",
  "key24": "wpyeW4wdRak3PBce2gbYhrCwY3z6j594KATDBqsj9aU8ArzUy5srP7B8oySrhrXxdEVMagMcyfegNZaHvR5PREC",
  "key25": "65VaCFLmByqwdPgEsp31efop8gEHw3cw8rt9DNGmDjQJGiJFyaQPCRAFaSauPQo5bMuFym6YoseLWkXxnnStusLc",
  "key26": "2se9xhzQWxjPmTdaBBAi9bAXrWgR9eQ2wWzTCriR3UisMTqQhNsrPbWGNKRbhkE49SUUD4KpXhgpYJYur4QQxGS7",
  "key27": "fwD1yvH3dZuhYzq3Ero4UaAtbwfLmAu6KXqxCDEeKcawYKfuzeV3Ug4xmDPUg3Y36mbn3edheep3dvfJomh7FWx",
  "key28": "2wHukdYorWygvNcuZ4kpurbUVPCYM5bKepE9143diX1YaF9GQuoHRbSPMaDxjKutzCTsP3PeNJG69crWVP8aDXYV",
  "key29": "3uvJTRCfSq5Wqr2jKuoqCHQtUd1jzg2GWWeYgrUe9favy3Z8XHtk4CdPTBQmhFfEEwnn84iZWNyFpfAzzQQTefjr",
  "key30": "2TzjCfMu7rNu9TyvBNvFp2FAZnDvjX4JzUGfH9vcFtaYmEhwy1QeWAYmSasPKm9mwAEJS9LT1BBYDyoZAYfnV26F",
  "key31": "2VHR4E1BQek7w5ASWFG9mVtDtmSnPieAinDBQ7uSr3k8VwDem6gtQngNNwi1Pru9jiKku46pQr1c2G1Xpff7uUmW",
  "key32": "41vYzoR7AuFwrXzdtRKcQgurcUNswzSxJUNZcqG9FxnESxfDPHtFNm7QvcnPdeEg4ZMwBtiPLR5aXSoLXpqiXsMS",
  "key33": "4Fkiwx6m4i37QcsBdCMwk2bzzzx3pSTv2nkh6jQNwBAYLJ9AcCC68KwXigBKRxDZJFYu3eBYzqDVV7vXU9qW9uL2",
  "key34": "5dtYJpdka2fsKVCqTLKdyDZPouVLsTW8drDVBJ8jFNmpZizmr1GQCFfWS4ijvcbbHY7vt23tD6uPXG6y5fKsh8H8",
  "key35": "3zEfLm2iTiwnDZ7q19dqaCaJ7zQ2d6EzzFNbs4X6N33dWqqxu367WXfUewFxqM1CBjkupX5RVnuAwmxvwxyPpXrF",
  "key36": "5v8zBmmmmQJGmQYWRfnV1Kd8WYTtQkhni5fDU7oH6cHEqGQs94v7CeC5bGSExmnzFZz1AnAZHNU14FAPUkJ493sP",
  "key37": "3mXN3pzNYpLdnw5DUgURq8Gb17xKpVv9sE2T45K79fTeB3NFc5GC1vC2FUz7ZfoUyj23S4Y8ujyFsN4biPGFNDX7",
  "key38": "5k5hzgkuthAC5owKgDrievG8LPXBFrWoG5QrUuV7A7rgvozKEJGHUPqNjJckpZNzih32Kc8uR5N3BKePBhTZtFvU",
  "key39": "5AcyF2MiTo5aF427CtyS981ShrVa72jpMWyjnbwZWC9ReUtHuUbYocjYpRprNUecdu79WX9yCfjQqU8j4F5YDKGi",
  "key40": "24af4zXWMsqU2PcDibSjyjkrNzsw8hbtXFLkVw1ii7Rc8VqiNCHY6pEsHJsBdDdGshSihKPGGUrwX3ErMGGZ3cLq",
  "key41": "c582PViPhRsRJNa1LjbDWpP86nmQsGPzHzCNtyJ6dCHH2yYJKNHbJkxyWZr2gfkqVhiQAoUKDdgeZfVBXuU9qcq",
  "key42": "4PmDH2h91m8yDoNwzcn18Bx4CywPntgXezCZSxtDuZ8x2NXu5eFwgJyD9mPXjy3n5TXEpznKj9DpFiM3HF82Z4cP",
  "key43": "2QmS13NGt2BfEss5cQ476FJnrW2GYJjF3LHTZRqy5WkFnXWHbkxCKXj5pccpJnw38dvC3B1bqT5wvtrdESPdiwuJ",
  "key44": "2aXQkfVcRcaKWVUsHrXswaJkJNQdAZKohj9jnT1dAFM1e9v9BygqHs76JZFvS3XuZspEEpHXVmu9ZSohyg2hTZyK",
  "key45": "sEArZA9zsFjZw7tY5s642uh8mkxPBMbpk1uMX6E24CKxv4PZGuNwRCAzgMpcGGNkCFPqKk1VsisopTy52BJzsVf",
  "key46": "2qnD3VEV6JpZASK5aWYSSfyxh1Db25gaNzbfmatpuTRDpnboNUvSdx3Z9UMhyqNTM2cWF3oGj5XurnURFs4QxU6H"
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

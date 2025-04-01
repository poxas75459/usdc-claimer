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
    "3sa2Mw5e7t1p9cu3Lk7HMZbVi8zsZkTyd1GjsghG1tnMwzrFz7oGUWPGCy2h8rxWEbaEFiL5qQSvuhL2rxknuabq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tfzdMaVjyScNfBRgtBoU6DaL3ATpeKRXAcuydYsPHHGdh4SYWD3UeUpNU23zBfAZTXaaVzEgRnYXqtY44JMvfji",
  "key1": "5p9M7hJBp7gmQsGi52uXAKR9SS8y5fof568GNv8Mq3KFixf9Cs5dP7WLPzBULXyRGwZ8Z3WFBLj8a5Pomth1cJCJ",
  "key2": "2fg84PftijuMVQc5Ps1NEq6rAZBqvGrYysfejc4fahWxt3qV91xqCo2M63rZHsVeV5yyNKbCENh4Ah6cBjx9Bsrs",
  "key3": "4cKBsywRxKz6zTuQuz1KY94GzHj967ypzHsSxtxGFVvJoHSNBZhcubgBCgES6d3yuHnBZWV8GTQL3Fc71PBNWxou",
  "key4": "2YGE2KwZq5ccFpsGsNCK8zkc4WMD3ZigWVLuoC4AUoHizW8Us2Y2N8mjPwB3uwy9fqAhtSJXobMTgK7LKEUYJQGq",
  "key5": "4taJq6JLokMY7BdKfFFhmt9RQ3iM19HGfZF7b6bjJS1n2uVkwbPUACxVx2reM7kqXAWJBYKD7vzQaZyhYsFdRvoD",
  "key6": "5pdL2Yiz94kR26PFNEiZQ4DoshJCSPGY2QApKZJthdnoGbmV2fhkMR7Ef2A2n3EmqJpyxipc7F4j4g66XbXBqcfe",
  "key7": "4K7vE2dszGdfHb35hT9E2tdYocWJazoxq2bHu7isvEbwcqbX9coCauWEsF6XVGiwtgTzM48PCG9sipQ2hw4FnzqR",
  "key8": "47D38x4aarGvrRkJz61LqZ1EdoNT7H2sJbifrxLncY6eXRMyYwsYorrnBg8S2z28QBErNDPGR1gUWp8rXpkvaQKP",
  "key9": "Mp8tmApzEHgzFCGYAGwqtsYwrXMgtXzX9szywmH2MrwTCv7XgXgTGJ4eizTHmRy261PZUcoaYDeJT51R9yfsZtY",
  "key10": "4ivPcM29gWfibKkGT6Ksq9MrxdhezvZt3mdP61DmWdfi9nYVmgtqEjyz9xuNrsS7rG7MJ6kxcqE6cDJrHDJoiwQy",
  "key11": "3VpnvwjW4MewwD9EEziX3gqemxQt2ScPcUh2DX4N6z4EtKtLLwYVxz52V9H38Qj2i9Hp5f9GccvwwYHRaT7MxCYe",
  "key12": "2v7vAxVCJRNGPR6tnjDShcdEPbSEWqQP2sFTAEMVWZJxVQwKEujCSCanQBaQtZEHSis9f3GAgQafyPagvqSWF9cr",
  "key13": "1ZkPoaSrwSuYPFzFjmVcWnFiws9SHEXBwCv6yPWmCUoMYE8c2wkiivS9jDWrQVbWLL9vQvRpEFookGs1AyXonof",
  "key14": "2W6i9twXzoU75FmR1HxsQkVsMgALQLsyAnt4CHusSJ187NACg7cpockWG44A7iL4Wsa1A1pkgevdT9t5wEApQjSJ",
  "key15": "3NDkoqLa79wTso9YPkfA3dAHpgKBvx4CeRwW3ncQ5P1paxRarQchkFiqsoP6sUaZrSCYuGSwLVczmUTFsk62UPjH",
  "key16": "35WPcHpVHcukxFaBE111kp6NHwY7XWMMPRJcLbv2nKG2aqXgV9VU8Q7xs3BYNuAGjZ8FMV2QKvYYYdiXr8ZHbY6G",
  "key17": "5sQbWsav7ToFe2ofgx5Qr1fnbWnr9VQakUqTYGBkK7tLnoRPDFN5jLEpeLvX4tTj5ZJd4adHBJgSR6SjtPeCUuUy",
  "key18": "4yjfZcZ52cnkg254xuevxrxaXMvyKBmKCGgFsdiJ5RLKpUv66ARRi5CT2fAe9TgjHgnAR4oeak9VAAq9H8p4YCBg",
  "key19": "SaqFzYSN4hr9A2DHafAMtRuQiUVdCUU3LsGjQXawwvrxGiGyUKMSc3wDG73keLr6k6Pe8Mj3KNv7HCnAh2Dwbtu",
  "key20": "2BNJqM5q9SGSrFnuhYPkPoUzSkLzb7J8iq5nSDo8WEPqT2LgcS85vcKN9xLdTU8rN1k7CWLtGGhgtHNzXGVk2gL8",
  "key21": "5AAi8rMGGEq2m5DoezqySsRr9iQR4dS4jmjwPKY5m1mFbZbQpJDMUhGubgsKwZBJbGqoH7zWuCpsvoB7onQFAUBD",
  "key22": "Xsr8WmzasdbMPdQzmV4kAY5P45p6d5yG4XtEyLzCh1Swu7No1LuuFi9hESWzH86FtjrrfRSZRoisKNCvjhutyLV",
  "key23": "M1hXtSqzkLnkjDMe9CxQgdxSoUENwwmUHTt974jBNib8W7f5wVkYY5thCW4aLvEbqQMuUKhenaniDywMX8sHjTY",
  "key24": "5zYUsWA6xhdsf55KuwfCRL4mgb9JFPz5pVGufmZckxcyaQjrjoSNMBavgE8GM8KfsSoU37kyRkBeUL8hrhU5JKot",
  "key25": "xYfhTFyvrBV84rzG2qPGtQQHdaHieqxSnYh1rKH76V3KFaj3FFmydj28wtsnmEWnwE35UF5v7hZnLqLgXjb7e8t",
  "key26": "2SMkTm9aMW5X4Zuspdn2SjHAceC3X815pb9zUsfxbHx8pgAkDG4EBAQhZU9ConBbFA4JesvM16TdMZUQLrHKzwAA",
  "key27": "55cobzEsMRHZZDsgijueEfGNBahsC2DsJSW5rPjvodzPXK6p9GxPhZJv66Wqscfj8A6rnFhLZNPPWWQ3W2BYQE91",
  "key28": "66idUCX3eY46bsBHHqXuiXeknBttJBw5woqMquJyXeojU9FbAxdQD2NLNJ2cQZP6NvvvPtM2QZjM9bFMQkWxuPp",
  "key29": "3rEQbjVjYyrBtw5NBctTnampoRiFhdCGwaaJhV8yHPve3Y9U3ie4YTdmyufhPiAuwRmPknheJXvSw2aTNPrPUetY",
  "key30": "3GmQN6zpK3FemtyFHaXkgLEDBe4wxkfAVLfnjrVizUdVa5BueLs9WnawxyyrDkm4C9D9Mn5XBN492tPZajyuRCZ6",
  "key31": "4Nox7vK5LjoEdspbU8TAhshHTRNsnKfeynvUZYhpeuFoDrCc5BBG6tTzw4Yy3hEez9M6FmXXRjUvztT9YV47BMBz",
  "key32": "s7YyKq325UchRjefZoBRicZxPo2LvCK9oAcxfQdGDmwtqyJVaJoD534XUS6vwDzgDnbca6df3yfGW4TrU7eoRuA",
  "key33": "ZzTu6vTaNAgKZYVQs2VFgi5kfmYpoTXrBJLNY7Lqw93cL1G4xTdQhvM9FKQARuzeuXcV1e8ZXHWYvz91JShE5RK",
  "key34": "TxhrhFmo1vSnZYrhpNbQtMXZs8fB46QHxQXEFUSvDjX8w88M1jzCwtvxozXF98hXuiPnCCURk2KWoTUtCivpWi1",
  "key35": "41qX9ZEHDZzWQZmB18Et3rFvfxBFb3rnjmTaamiDpyhoB6bteDa6N9X4xuA7aYpMrTso7QR7fRdqmHn6CExU46SX",
  "key36": "3Hm3AXpnWT6c7PELvJQR4XMrKE6C2deU9zjEvbr9wkZ22D1yT5zL6J74ckztNVsjZTawvZYwTCpGp3x3DPgkjKA8",
  "key37": "675X9wKY4sWU2ywKKnMhqzUehq7jPMv1GrtfJ5k91NgQobH3S67yJcYfxnSoqzPKFZNEbHUVd6z5iJSJdaJmbzyg",
  "key38": "5TULAmk9G2aiPe22JhtcVo17jZvouyZRJsVQizQjXJCCFCffdPtBDAzoEYq9XcMFfNBxzntQiixveUEofdz6dMfw",
  "key39": "5x4n35rAGkCrRB64LTUztH88gYmkjo7KB9JZp4g7LNtdbywjkSPYprmsTNduq9yxkkzZLnSRMpEN11tcQ28gbDqj",
  "key40": "31BBETJkANBBdktj17tJFfWB8aGZD7bWewdmAL683cjwAjVNPPvMbgcWBjt2ojeMRRLeVZfTJhAr4VRxsRqZcFQp",
  "key41": "Xj7yjaUVoj9VZ2rLg5iJSN9UskjbdDSCKLgVWqU6GYmU12rUxvrQC7DaSUcg3smodgGuh6kSyDtZaGaUsH3BkcP",
  "key42": "TPAgPELjduzXxfDmfRGWWmqdd5mkhQJraRQ3jEaxMcfPrHGkSfwH4kpLd8xAQUAahZR9wCDJD4ab8vn1iHYZAaP",
  "key43": "66HCK5rRKZo5iEPNKgXvRbFHLocEeTZ21RiDnuvPLLPdFU7YxJdc19ii51eqRqEdyW7igGupCiR5xUyi2n7idbLi",
  "key44": "34Nyp1c3J9HLtKPLfGRqwmLgkdMQV4UXGTzueJSwk86WCG6z9JabhwyVkfZqo4WuCzjq45zvUyZTF5aBF2orpoia",
  "key45": "2554UBztKuZc3J5ccxX6iUkswCxDzYhBPsod5EA7b3fCJ7okX94nvUik11CXohscRKHnZJTRGBN38hnEwDbv8j8N",
  "key46": "4nxHmaBumXmYicrJSicYkaPNoukdQW6LDtDjgEQAU4ZQ4siVYQQ3gP4syu3RpisBg1wFkc1xK3dV7yLcU9oRiEsp",
  "key47": "25pZLbsVBssZs9ouyAFLvbqAbFhBEZc2TgZPJoTzzwX3DCwPPoLXvzj86QCraeY82B9Lk7eKQ3LaPfh6zaQgEhJj"
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

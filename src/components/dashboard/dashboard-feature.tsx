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
    "5y3rUBx4ciAePFZySWdGCZ44WQR2kyLWBoa3GMEYZTaxGfTi6ifM6U7bR19JzpABsSkWXpiomZB4uFfg5q4gpdxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39rQWCGmpEaNK9t9rqDMjFeeEy9VFtRtdx4Ch88T3RQox3RudXxFuSYK3s65HisEFmymFQNBLfNK5G37CDewh54C",
  "key1": "33Cyiz2ZfwDAndQg4L6xWKFoLQjwEuy7pVcSx6xzdyR9QxrpMruNyz8Wrz6PdZ5TAdu9LYPii5BL3d41BumhzagA",
  "key2": "2sUyxxwbw2MhXwYK6TLENmbViMnnQJUzQjbigEaBKzqg5yvVEc5PFvFM95tfwR6JjLx7nDtXG8h9ZSvDwkzuLPAu",
  "key3": "5eWtQXeZgrEjLWkoAiXU7nhXukU9f2E7gB1fAyDwddSAZbfFayuXzWpSPEtU4ptdFBZ3drpqEX8dssK4qRy4AEAZ",
  "key4": "5qnajyrB6g4HisyLwEJzJPhJYRRVpcY9nJfGTs9PD86WZtZKZnqNXfByX5BG275Mz1SQufMFCoEdv7Z7neARMDLf",
  "key5": "4ZJRSG4D8rgDZy3oyZbTrokN9CdkotAER8TQ6ybCt2mSZbKCaMqYmwZZJuYSSnomv4WEZYtMDUEHZNXTxWZhF7fh",
  "key6": "4nfv4y5UxDMe7SQ9j227uJDG8fnYJz559irHUQJ2fxPJFJkeRiMtjZhdBJ3HCprbJpzTSM2mmXB92i2pT8CbG652",
  "key7": "2gBpaTQuN5evAfYpeRo21tu6usHWsoWz6E9PZzsFz9Ko34zP3f8qALcZmjAXYeqap2sqdUDTHh5MoxQgRqySzNmV",
  "key8": "2HzW16PjFY9Ao5PPLgQPLEb5pVvacDjTrY4hCtPY9haCZM58APdC2QHu7d4TzHEDeeYeU7QgRogxvMQduymvminR",
  "key9": "63LFGVem17zn8gedS1RbSEFof1cmYCyEsjbS4845MFCuUyZn8pddiotbnFosajQyL6FxL7VZddKdzvYzez2o2RRe",
  "key10": "e21UWdStHuHqG4fpHjxXoZhC4GgNr3zHoc3MB7W3wwk9R6fzMUaY3Aw2TxzivbgSoUR2YT8nFJJEXubbe3p8Fqs",
  "key11": "5rk9Uk9yYSKS2diB1wc1L7epdtwfAGWtEdkyza8193BPwBXNx2iFLpN2QLUydLmFECzJuF1y56NV1SQKromdwLb4",
  "key12": "3ufr6YdeVKutUTn5c71RVRV3hRJHBNpHhaoXeiJJLow9kcYUE8rPPrmxaGp8EANbWTAj2XkzPJA3fN6xKf5R2t48",
  "key13": "TxuBnEvHvq2BNQj4aKvnNqQ8VvNho6XRHVQFkVk4X7c64avSrqwCc9gJJWWP5binsA21bTq9pn2j5UpdzertN9y",
  "key14": "3XmNpu56wGLy59t8RVpwEbzXwKcgkZzX9Lpo3FzE1oWoi6MfLckaTNgjvjEzZdLit21jmp95RkwjozNKUbohnJKi",
  "key15": "3Ge2exxg8XA1jmSLT4LXfGJjmvoUijWTvHgciQQ9QaqBFVjcyFEUUizCWWGgFXqgoDCfHkBkEk1W1mTP54epnyWG",
  "key16": "5e2CLBudat3M4Qcctx9upDhYnSJJdsigXRikEeKjs8FWoqRaYsfkMJU4GsCyL3amVXZUCUNGPzreQBw6ibBczPnY",
  "key17": "psWKYs73JZ52mDZaWngpFLumVZ1PsufQcwXHPqmyQPtmnFDv3cLWkpwL5nPiJ4XFKhpJDNZfkUdK9e6metqGkiJ",
  "key18": "25Qho43iHrWhztBFyu5y7p3VmUd2yt1DkNdSWoAquWVKZtkHq59De5i4Ue7bUNXNTwnMrQ4Av3e3Zsy3nVoHXu9W",
  "key19": "37E8E5yzRJwYFNjpsMgpBEBz2tPXpsWH5gMhgnBcPAE42ZxCNuJ27EyVSAZPJY2NBghhsgt7hJWDMnYcTpih3WmL",
  "key20": "3ZJF1ZqwToMJJVVhXgb9tW9tqGz6iM4XaYon9DgiWKKLhE7EdsEicw3gPhJtxxETmTgkpHyPRty3VqXQp5KufF9d",
  "key21": "3zaZsRYyR8WNvSezQCe5kmQBSf1LvevgU3K8NkBRTNkogMWQnv6U4hMFSnyyfiyBGGXjKmWasjo992po4ziSq7GG",
  "key22": "24kMUgvcsKEQTTVSCSePSggmF1NhayNTme2VnKCMyqf35n1z5pCrRyFACeHXHeuyVwDLXjBcDVKFd693yQg7TC6x",
  "key23": "3pXKpASYitRjqhkczr3zESPBNHegr1cLCHXBJTDJY1TcGgHeykCPBYjicGnL2e7suXTFhHUwH6hAwLEeBb5uMYr6",
  "key24": "3hTLQM2KtCUf2j8YwdjKkYmA7YYAUCtEDtJntt8khfBssuhBisgfMA5jVrfrPXLv7U35wFr6VyjWMAWHGBNqSayt",
  "key25": "2WLeo9QATBPneKy8PkcyxvdpzSExVKZSDLLZoMZniUcbboHNodPasbSf3gdnWhU575sTdNkBnnV5ovM9yskmH9v2",
  "key26": "4UQ6roGsqr4iBGaoWZUJvXN5rc2NDFZxM1qDewNG2b9HqpqddWZajmXt2fLseg5c4L67dpk9yeMpu14cXJLvEtTv",
  "key27": "4aNPW72PKm2MCVS7Tyd61RGKxF8VJcqWAwqtyfJdwMegnxiFUgWSVVNBS3vQF8cHCGvnp6KjmKyjDyJ8HzkYP2YL",
  "key28": "5umvnN8s7YHCFGYGBMWreq7kMnKHQhkZTfAiHak1mj8r29fCBsoa5KMHDAeg4Ca3kxzqsjKiZETjc2iZXg8Qmpnp",
  "key29": "52fWoFi5bSfYH74ENgX4hwgwXCzMVgfCcjqPjHqByuRvQBVzaLz8zCmmLWpRYi9Xz4S6Q4jNxJTsTJLs4r1ocWVA",
  "key30": "46YJkzzmDdKnpRET9iNSwjHoJi3rnxpr4hQuuTcsXV1uohDq3Uvie1J382FvkyCqGzog4URYh2PmPtBduTSRamyo",
  "key31": "q7ZZkTVxanC9DseBiCCKfEqraGG1rf2RxCLx4av74okfFgU3SgipYJFLpjshjNFSgUTSxcdNCPGmA3VF25PLmBE",
  "key32": "2wkk7KqLuGYtuHRLmLdoitPo6QttagXoUYV8poFXyVKV11TqTCSdhPBYCdFYP4eyvHGzzpqaaGBoigAohGhz9P4m",
  "key33": "4DyB6f6MKoTGFg9Vv3mShoqTCUSwPLeuvLkxVqeJue7hjVz6uQ2di6cbiiUjZmFd7PtFw4GRWhsw9p3D9ucVGwqE",
  "key34": "q65zfLPXqgvaJHtWyq2UYQVZQi6RFbKkGbAkcaYZnqdYLTmCxJbkidVFeVoUAQFSzcbME8a1g6RW3EWE95nFMzG",
  "key35": "24JtgCSFCHbhgnkUzaBK534TxUknTqRjQJW9nCTKSzrfeU1Rnnp6ARfN9uFaqjEfniRp3B8wogwCchZ9w3LdnLX1",
  "key36": "ufukn2wwkva8skN97BhDSJtPszZhHx11SnL4LQvL5FBrcb8gLupAjnfDvjXpYwH9CDpxca3UUi6Aqex41MZWi9Y",
  "key37": "2T3oURUn4PYdbCw7JeoD466WugP4vHc5LGL4ZzDnSCoiWDuvuZpBDuQ3GY4Le1ehKj7gtCgAWHqzFoVjpcry4oRT",
  "key38": "2SJVYMg5JUboDz3hFHhU4CWED8Enhgc2uc7zxLBLqj2xxjVEkRGBE4hY6qP7uKdfyMatu9AzXcKum9mwq8n9Z2bK",
  "key39": "2VbfjzM9Gy2c8nvdnahQyPWLhb2q64vZ6TsSvCiX6eF8W4q9YHokNu8w6Gcpb75vaxprFz5wrzsbKFJ3CPse5FMh",
  "key40": "1Y8FbuFfXZgbsQUdLs9npsPcZ4QHFEphjmQ7mWiR1dCz8Ksb4NBU3Wdhh2E2e3PvrSmFXrV3H47intuJSz6Eqxg",
  "key41": "HSmqwrpMiPwQhN4SGTVXtFdmmjDd6eMBXyJcfBqny3XNP1d1PCk2jnzcJvKivTfY1cRk6Ygmd4G4n2CQMy7Rmsg",
  "key42": "4ASfHdwe2XkbzpKNMG1FDBfRTb9HgBvRDNru26NdJBFtU6etrKi6Bk9XbJBYGz55nWuMdAdSTVrVweR8QpMkJSXQ",
  "key43": "3eiRNXQdkRjL4UJs7VzsS1RtMepNfJ6njVfy9b4FwjJaf4G7S5bThn7FJvWpaUhStjPyNiiaMMnGo3DCv6fFbF5C",
  "key44": "3nYDjALyaLTjHjbkzCNxNX9zyic8fwHZuajgaWKE178wYoUj7u9WbP7TKJiGq6f4m5QKEuLFAu6f4MGeWq381B6r",
  "key45": "6634yiDwDHtUXid4rXWFJcxUMscrgX3CpQqbJpXX94n4P1ZH3gBXnKgZw25X85fbx7w74LfDREoSULDYCcfnPUwM"
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

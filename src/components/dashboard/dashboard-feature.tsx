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
    "3NYUAKQpS7N14zrCs82z7tNfgjtgYh8cSBxaVF6ZfeLhdaU6YRVuYXM8SPTBMBTQ8mUSqCbt9F6aSRt4jyHGRce9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7R4NkezeCHSdohcWCPVnaBWzfYiQpGr81j97vGQzdc9vhGNKsgexxjtHPBWfREZn7EoBC8ZfGXb1b2Ay16HjpdB",
  "key1": "3zkzSDTfqq27fudUeKhfyHng6Be4ihW8h4ccX7QwU67pnHN8jVdT54vXzM3YmnmVzGe8hSDL2iTY3HLyytBQ8R2y",
  "key2": "3sTaoPsQWFNMBC84ycfZVAoto3vVWRRFwuFhz5e6kM7uTkUshW5PeBhsTGwdacCjGkjTUwdBMJHMUQJr7kqwUtkX",
  "key3": "4pNiW143B6LaJD51Sch7XJuYB5jzeqMaDEBe7MxxLmgfd7A1KBeFTtHeFeFCT5dFQZXnGonPcftodHC2QpHbAcMq",
  "key4": "5ohbvvFvZUQhxR1HsmjUxCfMuyYpBiPqzcSn55NyCXZErgYdzi8TePq954SG27UEE6ViN61ZQLEbvJzVxNcYSziT",
  "key5": "3euCbWLsNNaP7u6gKL8jj8dKjQCTAqhZnwXXo5FNtHRVcoFneg3mxSYcsnX18mt2BK7oHnAw6xf8MgADevk514CF",
  "key6": "5ew24UzCqYdwPEQ6GCdegfihKNvZj9oQ9EPd2Uk8LhqVyEKuRQUGJ4x3wYddpTbd6qmhE2ZEGm5ecMrHc7qNAvEo",
  "key7": "2MfaYkxVCdvQQ8UVzp8jjdYGFejPKgikKtsVW9y4cUPovnAGMdjGG2M5a7yDmJXABz38vjPMT5Dn233T4x83RdYH",
  "key8": "43jikDwr1FEpWcLsHpevDQQRA6vCmnNrakn1mw2Q9UemgBdfsnpiRKGZ4sq3s2hnBRJ9Vhqu61J3bXHufYkSfDCi",
  "key9": "5rH9v18JdgYf2zXxsZVuXMcBsNnAri673pavrzqhs81D4bcxF4kvjm4Kuhr8crqWkxzpPjBsAdDXNiQocvAiCenX",
  "key10": "Nxhd2uoNZWUYpvMLWaGVWn8Hf5TFZgbER9LMeVVHEc7sAKVaJvw4m7MhMSgA1dsbdE7ah1PE77iqvxpYQPBuoqn",
  "key11": "5EzzU9oURiLrC98aXv1QW2wqiDscGpgzf6GQg2s3A4rLpMqVooSLd8Fq6DGj6fgCQgv1z3GfS9Zk6eVHzjQH5gNn",
  "key12": "5c8CKYrHhgstfgRrz5ec19FUserZwvaDoPFiuXcPLdr4TSRFm9mw2D7tVbM6a9tXtMBm8WCXZzgKDmbqGJRfoCGu",
  "key13": "KKgMY7MCLPg4F95dwbUcLTKF9VDbzE3JAAu2EJKvv8S7z2vPmgoAygys8HAn4TEBoZvvswq6nmbXto6RGjuMYrB",
  "key14": "2srJr5GzTKbuAQUZMiHDTsmN4mFAgrpsGEm9uvk63Sv9CHrFk2HuPg7FFxdzWga9pkPf8NGkrKWAdJSBu4LVrkxx",
  "key15": "3UixTVHVaUaf6jKbCSGrQ4rTYQbZTQuosVqmo2LDNEZbua5b7kKezwDqfWueoeSKBX4nVgBWHzGUSLbVWjiaULiB",
  "key16": "2ibfWoHBr2KFsiQ6fKATYd8gK41EdqoKrQsYxDiQfHGYUFdtgyXzDZH5gbJyTm28phwcipwHiuVYqBJXijogQHoH",
  "key17": "5eSgbJXTWEyE1wjE4y1yKUhPb1nzgzURF4F1dKLNvyW23jyuAyZZrudWF2WzTjbhcvxkFJjzbC7y8L8cF56vwjfX",
  "key18": "3tqbHNpjsFyCqN9vNuFzZFQqpXwdg1E68w8LcpF5x8PBqprChzJ8h7URtUnFqEe2QL3iV77uEWg7LnbkgJog1kWK",
  "key19": "2MZiu4G99Ym5oxp8wxygyfanbGicN4RCYW5aWcDuEK69qvpa3v2xK2KQCXKdzmbNtymyoMT7UHRoLUdrENEdxmgM",
  "key20": "3uWKdAxAKLeh4u6T8zdJRdhT3Px9f4YpWwKPJoAjfjbFi666vt6yGBPcvZj9qnLKZ2fUdMfor2drFYVWzXXskpTG",
  "key21": "3RuEpSPkAVGTePWMsBWdniVKKFcUhQH2DoJUg4FXimFWRYUkzq52Z4N74MQiviRiSj2VifyjMNfRgwDcJhkcHUS5",
  "key22": "4GJtaixQoZBDWR3dQJnf3rYePKLEYgWHJgonDUxVNQhJv9SpN6dzAq2YDXEyEfYAzubx71NYvS9Kd7XThS8euuy",
  "key23": "2M5Vt2fbr8Go1HuYssPMTHHaWemB9krr6Qak1VDvhSYSU5eA5NsLMZ7mZEEeDj8k7XXr4TaDwGLLASta2wa77iaF",
  "key24": "59rXkee2AFQLZbCrW8Sf3ZrFAEWTrQ8XU4nSKWGHcYuoMABYkh53z1xPwZFxbRmLEpe5Sseso7qBcSM3aCdZ1TEH",
  "key25": "5gURZCpHZ5Ynf3Gd7vaq6hqKCVGFB9GX1nK1tW5fa6wuYvBCdhzawCip8i6BEHbjCwULydvMt5jSHkkShmYiF77v",
  "key26": "SmpBoZs3zMRXNcHy1N2EatpHRQHCz6cmjNvYXgXRP5GV7ess62k9pwcebwczxjqQqj9tUXgFhvMCqcZBG2Bnkuv",
  "key27": "36gHwnseSYeX2AkvKVyqEXwjQXGDynPmCzXgbxPgJh17qf1CvUz8RxoA8m8s7j2T35hxp6xF7BsSZFRSmLrsYKnZ",
  "key28": "1gGfv6W2eCjR4xTgXwnPMjdSVUX6JXzfB6rUZ4PBTUqd84vePwdxjsaM83igAwmLfAssyqz11ag9yfeo7pTJkvM",
  "key29": "2sAGLgb5sBhpBotZdLSuctdmHVBZ2junS1JLUXiHzyucR74XX3V84Rw36AwvXiVAXBaxnLSb5vrzzoBD2e5jwL1E",
  "key30": "4r8qgGLeSBRWeZu1M7BK67NxjjboM75mgrrZh2tebQGWuHMZ4dreeL7TpPEGcT91WfutgRiooMRRkaS49C1cykTS",
  "key31": "4FB4755eNzdS8r4GFGnRTmkXrhu3j4cRum9Nfu2CEouqcYvs8Ak2fZdmdDhapRj7qfiuQk2MPdE4wGf4qbrV9Q3Z",
  "key32": "127fa7kReuFp9hj3jyjn9t5UQX3wfx8HNchvtkRYWgAXFtxgN4mgyFTSq9zJbhkLdxW72eBDJYCdEVqhV28Arp12",
  "key33": "hCDZsD8cTac7tSdoXvDTKuJR1CNaEabCFJ8t8Kf855i7qJ2sH29JmU186CEDMkztz9KskmH7P5UuFHj1hSabVPT",
  "key34": "3dym8jbcYy89Z2YagfU2nNT6eNBK4DVpMFmAuP5cjoUBauypHEUAY4EVvP5rtDctCKUAJqpVYRVop2TZDKeHdu1P",
  "key35": "3trFQMqSvFM1LQ3K2gRFJyz3QVmKutowEAny1vkxPdnfGkYQqR3rRjq1XvP96jUhnG92SJcQn3fJKkeNCLtZ43Wu",
  "key36": "4pukroH9FsdZdFG7cTnU1uq9KAiGCu2VdUQKpTzJ2D2Vbg8wTqKkf2UxF3QF4dMjf5nDM4ghuDrMgvF17aTvmMX",
  "key37": "3BRuhULvsS6Zmw6uFsPmpPxwngKRjrWjQ9LsYuWDcYToZJZcPimt8FLU26YQZakJyCqUo2H7EeKBT7qobh1EUtMU",
  "key38": "4TEvay8oSm8mWKi2z24gdwjo8UmTJzFoVpuF2jSTcmbccYS9DJhLzKNzyqs5vdxun3nvmsovcbhTP5x4BHjPx3pL",
  "key39": "f8WU4v3g4ZwaU9fyAdXGdhwCB1MunqY3JWcR8WVHMJeLoZpzaiPwEksvVMDrtC5FG4ymbDZkWfFSfd8xxVtRyyi",
  "key40": "8Zhcy4tS2qTPQ3VTMc8Fjj62m9bc8AwXkPc1yHuZkbo1KRx8UGivXM4FrUt3zmdfQWjWgFg95ZVEco2ZR2npAUo",
  "key41": "2YQNHuFhhejendNRqFRiH4PgARhYYVfNfBvR2WdjRhHDk8TwEDhQwV8orRz85u2g9yFnv6BHVSTvP8R4WjNqaL6d",
  "key42": "2Ycz1wN3GBsi3uiD7hV6eF98UeCocrXFu5Wyt7yLfhCi1PqD441sbyPABrxUKCkieoyWWJRN3z11wHSPfw3GHope",
  "key43": "3Hcscfb8wGJt6qBiUWTrr4eh7cNgbL3Q45moR5bDUA583St4iGPPPQfyGfFBYEYoVGL2oo8dZ7dEUzozJFBH6nKR",
  "key44": "5FEEFLsCoBDcwd2zP7FeyszkAybTNHjYCvhHX8cRtBdWHsT4gDe8o15paqZgYM7fY2enQTyzsVf7wVBdRbWoohXd",
  "key45": "5ZZZCe3X8DKPfLdXhUEeRjTguGwPJUkj7jtp6WPUNNPThC13t8H9jUGNfDuaPoVAwbyFXPgNdRtomytJW5yBGQY7",
  "key46": "65BWB95qSDbDqjNm8fJdqcsT8Xm35smQwnV3St9FnWBHNnbcWA65mBD8b9X8AdMsxM5Mjm6VmKXTsYds8QvtweqY",
  "key47": "2t7VTqtWV6UhtEqTBEGcJsFRKZLsd3DbuLvk8pYjUbXXSV8RMnEYznGjvgAqjPPQhRtj3Yh8tw836GbZSEGrSxcB",
  "key48": "3v6qGegU2puiDyLLLkTgsbNedDwj3vfqWZjedgHq9zwXsdsz6i8p42oGV3u4EVGUtJ2AtanTkA65SK4Zb2h1ZBpc"
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

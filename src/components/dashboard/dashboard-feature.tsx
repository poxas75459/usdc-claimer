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
    "2UohWNeuTLGBTNhhC7dN3UnKPVcL8NHXGPTKuScgeQm1FTtBU8BdXBV6LX3eRxp3V15Fq3oPcRRUhFEqt6hsFvC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hskPksyEsefrynMzsbco9nZgznDkcMiH9UFZ7urgv68LM4bf8E4nqNaqEMASdNDFLHEUWa8CmXFc6MvQ9H4ShBV",
  "key1": "2Eptt1jXG58dThD7eXifqYvCrvcsm4a2YizwomwQqSAJtxM5mkt51Xr82zHFo2qVFoaDoXXXEiTCWJ9LBp3cLMR8",
  "key2": "5fZwp1jxQmwtqUrKb1jCxePYh8HUtcw3uiw9YG1ZAkomVm4xtnh2TwqGMqSvHQPYMXATAqHnY64dpRoRd322L3Xf",
  "key3": "ydukE5JVvYP25LbCryzAZxVk2D4GZbydZtWzr9185XeU1UE72zjhD4Vk6xNxNShBsWgsG571BtX6Gf8cLiwVpfg",
  "key4": "4MBPDoZ4rRV8k47e4f1dkBh1ZbnX7iZg6sf1gtij9h4iCyNUChyySZ6rpbeDsuGjzufabhDz2sEZdaLrZrnVaFpc",
  "key5": "g523siF2qaeUqVD5zsmyytXcBrLVNrsK3CuBgtnokEjAe2Rft4PXxJ66xzvxFTpked9kfF4kRd6DCdYywCM1m6w",
  "key6": "2ftS7815r2efZ8ufLaDegmYNtboM4fnZj7mYSf2zub1zDLksBGfHHtyHpJPEso61F8BYmb9YaU5A9yLyumC5BumY",
  "key7": "5j1WGLk8Bp56gMJRdCNYKBrzs4FRtN8nHKSgz9ZimrzBNHPk4wfiyqJHGUsQpPoCVQgyYmwJ5kFvi3v36q6fMggD",
  "key8": "FCrzipQnzrh7fKoEaWn2N24Ccbsw21dDcVL2fDx93d5vozLzDVKJgUdK7EHhG7AFEVHiAQK2J7AD9dkhBbj3Df2",
  "key9": "5gF9vTgk6amLB9XFx1Mx6H18NNhgF7dnaBsuEPV8GgcuH1by5KnmgVLfE8ryMjiQQSSML5M3oLaX6yUgcDnD6dYm",
  "key10": "4FygrHnzwwK7yXVoWw9RVKZ4kc3Z7vbsfGFrVVsLqpo8tFniXeeGqBqj8TSCQWzopcjwCDFfJ83CPCgzXz5xiuJM",
  "key11": "iLyskngp5mH5QtZexj1kTkfRjBm2GgC9weAKcCFzvReihwF9ixCkKTVwrDuuD49aUYvdwkjSXQhKm1gvzRtG8KY",
  "key12": "5PZKvtgA3ndqSs473EzvBzU9zBe2KfvP5cGoWgXtsNtj6YGFn6HtxevPATmME2eKJWMTvCfLU5j9G43tMHJLxbEa",
  "key13": "3KKxn7DKtPPYsGjKqNCC1XNqNjKW8LAeeMRN54yorrYMPpQKQoAK7P7Q182NuPUNBka9bBaGqJpx6VYYrmWQs4vi",
  "key14": "3cLu7KmzMXmhQjvwnfWfnD6UgbyEtCjtydTFYQWAMrgdc1dJz2YmMXq7gGg89tABAjJ1PTJBjtAoxorHKW5yCTGA",
  "key15": "4Q15Sm9RnF9TaPJ8Px1C53sLHsPGW43KmA177jAUiKrkx3ADi4fcVqdEmLAtoCmo5iz78JCEKviRDuhD2HpVJCxC",
  "key16": "3CYGPKmar56zuABYraED1Y7qymC8ccivQ2KrXpA7qG8tXT257RMcMoZ46rKPEpmfGDmEXtuCoSMM1ULUG1gdUaqx",
  "key17": "3JCQAmySvj7jLga2i8UVCbdaMrnN3YLvUSGJonzk4Pxr3VxrvNyTYS9sz1hpwcD52XG3h9StFQpUNpRoKjJrG4qS",
  "key18": "4s1SkcZqAXw3vCL2tbCrpjbfVTJTdApV6mpStshwg1nNWqALbMkeDcLWcvtUbfbGcrvxCiHxYoCrLTdnxqVko8nH",
  "key19": "2B2tXqpJNvaYgkTiiUYaKyFvuXgEgPz7rJAmy5u3ZgWcgp4dLKS35mVww8Lrn8d2BGv65JuNiMfJu2RFsFMTu3EP",
  "key20": "2HcTyihovLUm3i4J9QQhvJmziMPsaoDTfcKuZrAYNnh8nSUovskhqpRDSgRr98EBnQ2shSe5EwMyCVsTFQLArZB2",
  "key21": "3CSryXmAZewWmD1xHrRN3R7MouvatwN6aAHWWFk5pgjat9hmWkf3K2EGLLn2n6W2G215WRuw2V5yEjPHDXmVh1TD",
  "key22": "39oYPtV6xnBVVFV61erLU6EyVkCAmQ4YXo2em2WcqhFQRK4eEHg59s5MoRobpwJp1gWSP87NaAEdVwJBm8bHhaXZ",
  "key23": "4rCUibcZCZRZkcTQBuF8FCLdPqy1PEBZpVQ73amRcEPHuaD1d2BZCviq1WSpdNuidMyTwh1oMaSyhCAE5nrVaDWh",
  "key24": "XqtCC4DtRRGwpPoPvVyKgzdBZCuVrZf4WjuGgxzqEYC2eYMsoYNDPUy8mixaXzBo6Jf24S2CaomgT3W7yHBNeeM",
  "key25": "3zEC6bd89bMhJN5vwwGJn9R7mt9S3rbHVMod1PNuGvcPX3zTwg1StDxodFih8mJm9DXpGgzPKhkctJqD8Ca9AD8U",
  "key26": "4c6rWS9qPVMYocD9VpEn8HmLC2q2rUCA9vVM7F6q8d4QJ13UmMR1MwkNH1SJJA8FzZePbDTXDUkuaABtD5gh8Jog",
  "key27": "jYvxrHpMb6ihRQYE3tQjcZM3Q4z6ZDDqi1pHQAkHxcVfUxLZGxg1Fvsef1yLXuEKLsfJ61Z2iYDJ4ubRatFtqTr",
  "key28": "5eN2P6RLdmS5KtcZp6x5sTcxX2q2Au2vysPqjND8ZUPQvR7PLG1AowzvWot2LDbhRLXNFpXwrAmJZ9B9L6LiMP7v",
  "key29": "2quqnVbyTPEN8Zv78hVhHvMLRk5gahsXR6MgNRjcfDmQt6RwzWTfE48qnV1tCwJjBNQXLZ9zEDNjKk1QH8YrjNHw",
  "key30": "2TF87mgtaqqBon5hw7yS28cyiuHBNniL3XuRnttPD27XqXFWX7FkSvxAJhTyymGJssbRxddz1Nii51qHMTVzTF46",
  "key31": "29xkQLgUBp5TkLvkRCXEQwGa13wD1TQSKbgHpTFXkTYJ7SgjUoJnYDsh4YqWMC3jeAreZ5nQzhQ9GUeFBHM5rsTz",
  "key32": "3hEmsDE4PyB3ceiU5MiM7AkXA5ynCknjJt6gTfRvzcxm8xBv2YN8z7JWzoHA53XchNjoQGkudKBKPgswGRegnpY6",
  "key33": "644zCk1xyeQSgVzr3nyqgMUq8NSHNVi9B3NcEpPmDU57xNmjPbPRzxXNiuN4oR7ec4HwrVXUKUi1FUD7hSL414CE",
  "key34": "5yEfNV6L9g6fgMaEHr6dshBETAnxt9tBzDyuMw71DTdut5X8SeR196Wk3SFDpvjXAAMVD1Af9KKt6L6Z1mzCQ96q",
  "key35": "3uiJN9qAfJzz4ucBQpMJBtiApcFsXgMpgZQMmL5oAbrWn2hNAbG7hA8U1vXCgjygDTL6GTFxJrvauKCyBnreLvku",
  "key36": "5N7odLKn21Re6dCbkx32UbUQJJEaQHM61RSE6drNZK1Wr7L2g7T5bXfLUG7j5kn4MbgNRtMPywfSQBTA3oqpy9rt",
  "key37": "5Y2jB78uYrnbsDrPBLLzqRQGrWiZ3xwKh9kCmSPrjTbQRgSB26JHMswbAsmqNfpWoacGxApXrfbxhdJprFBxYtAh",
  "key38": "Arvm6X6ENhvrYWR3BjwMtYz3PH4mFsbwRKKSQkoHhGiR6XLa3YFyT3HxNNKXefyGmvebncYkRHZsHWQwq443DGX"
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

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
    "2jPYF4PZvt3nbhwqqMjRzuUi248cdeaSpC27UTweaF7UMXMqLZ1Mgzc9QzCpet49K8msn6Hioq45HLjn9UtVTL1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46FbhxacB8nPYbv1dSQwWruqCXwFxDRmVvqT1QUArrW1suPbJoM2kCiGV86BzbhRFJBAqWxLaueVozAfHQYb8ruU",
  "key1": "2cC9Btuj9MyNmvxJKLWR3ceXaAbqmn74JcW2gLgJcz4KD35Y7CMh3mV4RQr4SXw9inQgdqNit3ir8ekMvcepb1bs",
  "key2": "32qgwssMWy47yojhrxyv5mQCKKV2wqXLhSpgfAjntArhPPuCwocdzJ8V4j1AWfBFkvNBhbe7LPmH84xid6oery8w",
  "key3": "DeDF8FgMcAcnMyXjd6GR4gF4GcPCqDhFpPR5dhQUvjZGzxYoJ5TaGxoWwPiCB3RQRMcC2QJh7TUYXZxYALxdSa7",
  "key4": "fPzRAZ21jMozZxpWXfaRBbdeyh41zmUmcvRd2oCnA1FNnsY2g84iFjvGJZNoD6fkaCKjCifiv7GvyBw17PgWSkt",
  "key5": "3Bh1anNrqVfiozGvZ7YFArkrjrs9QHNmaY5wXEZ99CbovTY5GCQSYBimg9dcvu8k5SwFirJZgN22NgTvRPED9afA",
  "key6": "4CptrfZuyKBAWGTcsrimqWWtjPy8U8wHL3kmhYBs65Br7D7T4VGc8ZqhrbFt7QxcFZUrmnmC14y3xEXFVvVZ8oMN",
  "key7": "2agyjk1N9pfFEsHQAxbpVXZUKbsSfYaYmSjA1TSJAX463DsLMPWv2QgAi7goUebqjxpwFcYQHfzVzqYipvfcjoLA",
  "key8": "237EBnjyxZYAwqy4sE7XyJYvkQmPaTGiqffXhuXsdHA8CUMsaS1EF9QhmFNnmDeJEZk1gFhrs6aNjPi4PfJKwz1L",
  "key9": "59yrvoAPVkqF74stJJPjHAPuSgpu3z1S3xvV68z511VEim3u8YomBjmHhtnaz14Wzn2fZZoModAZcCTytziUFBYs",
  "key10": "4aE6rJKp9SYEQTTNo2QbzYaBisoLXR7JMLP93dHaGmecMg2jfQ79kZ5Gh3bjugnPpd1RoZBC5Ga8dfZ2c8L8miwg",
  "key11": "3doSBpG6RvSgsjqaZ9hrU1GirvMETfBGxxZTtSUt3R3pAYDc2uD3J66ZcWEzkL6EyVjSDWYybTTHGpiyf9SruWfx",
  "key12": "4aSgAj5VunVBeTNFfTtGpYU2fj81Q9WQuk6YjfRaRRZWtDA1f39FxSaxpKfV95KoYUAKktK4MPYJgr7nqwTv1ozH",
  "key13": "4DLvToEG5z86prsqdkGqpdESD8FcGG6bbWkx6RM6VQBJTJL2Bzb2KRK2UYDqi1ycWExRMR3CRzXkWD3GTA6mwcM6",
  "key14": "A75CkrtztGzWFU2kYhwgRPxg4HKBTMxunpjMr1R8qSwdTqq2A5uTa7UeJWK458ohLF37hTLsd4qwrH93vi4m93e",
  "key15": "2PdcNeZ4gbN7qSFfjmD2oJs3NmLJTKALMJjGTxRHDW2AdWwTM7aYUYNz4EggSx9kneRHc5c6e7UEHWDPSsnCgbGC",
  "key16": "zg67Byy7AQ9wpe6HnYFMsbg2ByQSr9kpE7QDKLfzKnazgXHCgecZy922tmG3SSubMX598disswCbcpRGC8bzjk5",
  "key17": "EwtZuaPzyd93XUmtZ8oaVtTHZA2JfiLFufU8pwpMC1b1j4AhhgL2FovoEsNQ3R7SkncT9TGyGscrD6NaxyA4jSL",
  "key18": "5W5pXVPsmuaBpWJxB2BwtzKCZ4d2CjXVvvatixiibyJWMLZNQYNhP1VE6VspmnYm8ji4AHuHhAZnNCa9saEnjqdp",
  "key19": "25AKMsXmKxUCgZeNbcy4H4ihPefxMEB6Ap1uKdTrfTFxHk5nNe5UC1DxepQShyjM8p6WVktZ6VrBXpVQoMHF9n9B",
  "key20": "9fhJDktvaFdjyrHhM95e9ffSLNrtPTrqr3sFHobSpsoJjY82LbvmBPtkZMVLzVTWgT8M9WkDkvoBiFrs38hQgBQ",
  "key21": "4SsHbxFY957Zbe1UmaHqXKcdvDkes3Dm5sPJNWZBebRsgpn7eUpBc44mbAHwHRhgbKuzDG9a89ZRUq9xeyCYc8p5",
  "key22": "Cv2QbzJtrQ2NLD96nVoHawMQvNK8MwbiTh77dSBECUs4MHsMmwwvNcF63ikgsH182aqVo8QF2g4fkWDrbWTWQHW",
  "key23": "4T8ZatcBahaXnVjf69VaVoknioXrhgEaV4VTNE9EybHUJ62mdX4LBujaeru1waKSXdFdzvGyP1wuxepNqfosaNKb",
  "key24": "4fYKLcHqqz5bgmZnuFVT3WjBPtVVHCUYtLvUnrwt3m59YH1wyAfpGS8uT24Zodr6JNiZtwf4ZJmw7eUV8vMScLr3",
  "key25": "3b1tKRQc9S4DQezJtt559XB6spZo5pgHir4RMaoPMAS94U9ts6w9NmtFV3hgkzvsN65Foic4bjc4bQBiZJXf2JAv",
  "key26": "4yGAknPSekBMEvXRcdtsouQESZMi73XqwgiCT3mp1MXW7Pjnw3pGGXMeEprPSSsSKHUCRjnUN318JJ2Zp5QKreXz",
  "key27": "XMzigJBXcHMNAe8frRSXEMgeABTS3GAnBq4zRiMspu9aKdtKzdRKDXTDVPuBRwb6Cz6ugA64iLHPzowP6BUkfRu",
  "key28": "4CcnbiucMKMjTjHH1rXr9vAhJ1NmZWE9z69kwtHXZn7UQsbnP5Nc5eNZkimLtfWCoGVaJX5b74i1QEzPhuiyTDit",
  "key29": "2JFXBCchC6qiRJCWuVvAtHfUJJSMqF99yYdgqL1HNHRBFuSUWbYcKYpqhQfekn3dU8ipKEwCvmTnN86rP18QcVdN",
  "key30": "2rGE8ZV9Yf4RQmw7GSBfTFHWz9hNZ8FeQN3cH6YMECjj8Pk7UcHDwJfVCZ4nJrvTo2ZzXSayBGZz2XeXkWhkFKGW",
  "key31": "3jqyoicyTVw8mnnf9vuJRe4yvAdMYVmg4yrxyxTU3enwmxPi5Qw8mmqoXK8XYTSQZY2MAzQur5TMXXuNiN84hy9G",
  "key32": "2UVxPTjsHBcRz6HfbPWb3dUcRCtmpYVotR6xvqujgwoTvHuwn7V9GNdiidmmHf41BLhHefWMrQmxNT1tD7Nw8q2r",
  "key33": "5At7ZFEbHX1cMKbNpCsPUxMq9x2JSxg96U4bQACdv9gqEGyKh1eRhYdoUadYuGCQaVtXedaJg4bYMpXcAr4xnGHY",
  "key34": "2wmbC9gdujt5z9aWV2fuB7kvN7sxVBTzKPzq1b2txjvhdrgQhaW9933t5PjwFitygQrXvXvZzzS9pWZQePBDRY8w",
  "key35": "5jFBLsKN5aaoYEkeGhxGqsabiv2zmwpNZsZe9UqAtLFtP7P24jb67cs5pyhQBwq7zqd8mNQqWqzLp5v7pDn95tbx",
  "key36": "2kuLazuTpC5W8gNjXgDhQmusUSawC9Laf9dVptNpqTHL2RzZZnv6gsq5gShxEeXnHge9qhe9W2ahY9PGgtuzqVpJ",
  "key37": "2Pfi4qE2YcDHtj49CYaeuR8z5SgiGuxiSxUXM97K1XGXm2WbLHkBxn1Fmo9gYaeZLmDnvRhAiij4AbJShVSG31Sn",
  "key38": "2f5KoBoj3oWoVqLeDJqtmSpzLCas5p3jeCvca44iEsEucXpcTrWiEyWM4GXgKmEoFbbxxcfkZ9a4FEVmMaQiQhgf",
  "key39": "5fxQN5xv8xRSpjkyAGALG51XvBujLHXfL15miS73xkuSVtzzPgTu8RE5K6FAcsr21z3sJbRnuUWzvjUYfRFxJ59J",
  "key40": "45hgwyVDc74fikPGwyiWjP4w82BG33nweDA6uRgkMcS445rTfFp6HuKHYwPpDvn6ydn25F25AvqFLCXZidT9r9KR",
  "key41": "4Syjh41L9fvPWPoAzsn4y315mBNdzxZz6mxCac3nAEfxfcyheVjp9YxE28i1QjosopjHf9osnREPP8NVS5FYB2YA",
  "key42": "2uksW5RBt4N9u8mqWt3EXr5cV67Mc8bPq5XmayYQUtrULFXADwAcNXSTuKHZfULE4TmnsyVTz43pSqbYZW52XNjG"
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

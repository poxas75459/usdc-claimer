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
    "2JgvUxuDr71bqtU2uMUo2hrUrFVsJhepnXpMfdarUFEfJT1ZbCuCU3Se8sfMi9SUD6HnJHxL8m2yopTPMaYTjSuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VAzqGdZZCsnBbUm8xajYt1NVta6xoAeYfB51iHVoCTHjwCzsb5BWdbb1Z4aDyvGHDAgphjjhW7RciLURokfxkPb",
  "key1": "2MMA5MWq4j5vqhwdxuJkGM4YH9xf5fB39SebJKmmYpKZ5qhdeuirMbmVVXLaHgeivpugVSizjmb6fBdEzgDR3jJs",
  "key2": "4NQ93yqipyPPxworTTCP9AQCoJ8yzEw7Q26rwKnavG3fGFwvXNoWM2krQ5gPcEkHevXwyemQqCjFgrJwmkvBkGJP",
  "key3": "3Cvr71BNZnn3s7PqiNqpA97m6jdZBffqheXE5E5pWJkTMAhtsgozSx2HXHZ1NB3VMsQH625ufd6E6ULSDEsz8ena",
  "key4": "2jshXFSG1m4imEwrt77oi1TLgECvho8uHNA35hiDotrJyX7jRiBD6Zfrow7aqioFSxfT2fEUTe2EUkWrHQnVLicM",
  "key5": "4UQJSCX4GGvZxmTkuGYujp162DR2S1vTUrHnfe4ZUEYS6gJTGw6jR71SBuEcwCd1YkHJUr1b21yVc7XwU1Jbx2JA",
  "key6": "3HwNVhaDmFRW3K9E1PFty1tGs2ChjTqoeCxHTKiB9wh17rKnA8wkaRZAbmawM1M9VgA9Wz9N9QfR48kaYA9fYF38",
  "key7": "yB8yz3nwAy4HeXoSke7eMV3fQi1aYJm7W5oerM5FkmcuJnHvoHRv3s2zDbcZa8qtQMGwf57XTTxrpejSAnhJYjb",
  "key8": "NrGou8pvovqK7pmA7gAmxaMaeXEkzFeHckkwKMuPa9Sk2rb6dUWTqCipLhePxQUyrcLS8uhJC8A65TcgzmuyKSg",
  "key9": "4Wj19Y3rM3xS3UcsWV914JBDCf3fQdViUb2JpA87bzSYdepLkFh5cwspbWhEf3fWP53zBQJa8BW67h5cX7aGBJd4",
  "key10": "2efxbZQB3YHUdBATVRe7QMKs7UnqCV5vgKtzgjNrjY23aDqniUM42iU54ZvdYBpAq2Bi5bdRd4YnP79aGvQQp9TQ",
  "key11": "46LTS2QioCfhZBZWq4Jew4DQh1fPf2eskeBiVshBT9vVxqBcKJJCWPVNsqaADrKMCcXwodbmtghkP8Ar6ZrNX27R",
  "key12": "4d8xm3pxzrLpS4H64uSKKRnex5J6ZgpLrjjrgqLz9FjuVTR3JBSjpeWvHioAiLuBhNSQvxGnx1SN3jrMN5YRjJP9",
  "key13": "JTr9tGRdD7XGhHRRFud6rEeTRLPnCEKuGHzSa8aL52AD2J7e7vqZ36MqhiabcFqfuGXLxHiL2eq17tNkDCrohSU",
  "key14": "5ccC1De3JbRhQzKthp2pBiNQJArJwSBPHuKVsdpaEQGJN4PPbJBzcEeJdRe8JcfiJV19bzgf3sgHgLgxPFbRad4C",
  "key15": "5PNZmQgyd4x26EkwQ5N3UWmcZ9ymALF6Fn6S9CBiUzWWEPASnkFzAyswDdvt7THacvQXZgVUGUkRuNMJa8Pe3Uz8",
  "key16": "4zwxmuZcA7QpXCXg1YwjmymSeq3hiPiBDkPzXDFuZQmMFXebvXeRaYiWsQeicLZF7iS5jFqScjNpEnTAr1awnqnQ",
  "key17": "59Q45tewSH9Nr1Eiwtc7eLusPMdN2zGt4WZnUhpubS7VSSKuEMDVQGRQYNcfeNmhZMh51CcC5TnB55yqZ7nCaGsA",
  "key18": "3K8x7dP5sLdvRnRHcV3siQ31dhcsCvi2wCz2qXVdns6icEn7rfAM7U59nxyrirpM5TfbykFuFaSyw3bzg6BEn3gy",
  "key19": "4E6u1CDNzw6d1mTRRu3xaN5zLiAssBPFcxPKpC9RmJDRSfvCn5B4vDFHWKPM2vzM5JFvA3CzXGzkjFPgo3AubhkP",
  "key20": "xgBm5C54PyeKrySZv5KAApBfeNGeYdRDHkSU2uAErrMbSDKuhjQzbyiygYcDFzDNm5SGa8tMY6ajgGM91sA3J4N",
  "key21": "4aEjedsvpNFcsM2s9QgeWqhuLUgBBCpyPQ7KqSqBoKUz6GcAkeAjGHx99H7G319yCgqe6aawgB9AmHc5D5Srwmka",
  "key22": "2G5rJswqRK4BLL4rcT6bmatbDW88eqfNbcy3dhTUQ5eH2HKkzzhq3ohkCEPfznzJZBd2EayX2shjsbUZkdRFECsP",
  "key23": "5Lkwczfdh3TfcXBEVKH4VdBr4KAaQiaxKcY3zmrgofuDcUksbpZ3F1gXGNGhYmJnoV1TWdke8Adv3Bn29t4V6Ph9",
  "key24": "3bjAsy41iAuMuq1gjv466LFyd5diyZpEaE3b3wWZm5RPdx84Te9m9FGMLZZaSMgNB1fE8axr4GHjVcXmqukH2cgi",
  "key25": "HEEDTZtmmHFaZGhmexsdpTep18GPibxvpwTYEEHkbnhGdLcJWy7tdBBdEjwqg9UURVAntyAMLoZiQA25R2ZXtB6",
  "key26": "4KvmH22rroFcM27ZeS66dYYqRbsEH5Fp5neFXNbu1gF38gBQWDXMQBTzUiD7cprmoUfTUN2BspUDG74WV9zgcvHs",
  "key27": "3pZacJyuRgXhjbagSHv8aop5ufewTvQBzfdyVHr3mKnsTLDLmEgkZBaF1vJw7JjDU1oRQCpSVM6A85Qvq1EAWfrP",
  "key28": "4gk3fhHkYqq6gUhCgHn4yU5cfZeP3b8L2GzsvKjk3Sqpjgv3Zu39rKNhU3rgoGbU5u5MmvtBcREqqk5rVUPDdmak",
  "key29": "4kfoPFt3RhUr93RVEshnMv2kh2ukRKHuM9wmKxxZ4dNsu2QBN2W8qBxjrad9g5L1zQfxs78ww36H5GA81TpPoobG",
  "key30": "316KaYPTdMb3YgsSUcA8w4bYNeTSHP7UQDPvgBt6Bpu6Pyt2PMF8yrT6myoTAHZ3KdUVbKmo79GRTxRB2KkJyHaW",
  "key31": "2NJ9WmAs9bB3Awx7YAW3EVjpN52ydX4uLYfahNeiuF1apwTTnRzDVeVp51sHbUQP4MTZ9mc5TEqTJZtoHVLjtEQV",
  "key32": "67Y6ABssXrbWx9xFJcDxUhiB6K2Kk69d6Dm58sEKxwvR8TjTVxHZF1G3WqMnvtxsGLe3dugwsCEDMnFugEPP57m",
  "key33": "46xpLMgumZqAwzSju6UUPrRTh5jfEdH26xwr4NAUdmjVjCWE6UFuvkMhyQyqC6bA27Uo5u4BZvFyWTikruMNUfDT",
  "key34": "2ySS2BPcd5XrdVACXistvGGLkfL8GGWHXNKwCAw9TVGKuz4C2u1Amhip3ip8k1Wy1Zp2TjCzLe12FdiC2PCZaMZx",
  "key35": "2zyDkViG5oxUnDd51oNsd6yQfvoAbzeUnWu9Ukj6tCGmT5k5GhT5tjJmnmGDH4qxfACqHDcEUcdG2WpiWwomfdCk",
  "key36": "3LPvzowuJy7u8htvDtddqoDtMGBwXB4xba8o7VtK9W1jYjzvUjgDNEJQgSH1Z6uQ3BQE6a5xWzaxJvxmi9TQqvt4",
  "key37": "3Nh6VjyrD9rMhuwad1jRzeRrr29Qm5MNeFW3reW98opm4ir8faKLgTPMp3oFF5wCDP39KgkjRnAH74jnzPeg738X",
  "key38": "dvT4SAsivu8SQdCJcUGRWpyiCzCXHDWmGdLwjbu1aFP6s81sAR92toewKHLRZz1w1jkbZ97C98LJgfSFCisC3vU",
  "key39": "vV3byEAUmHZXBRToG2KWCQZovxWFBjQJehMDR1pBYLeysF9qfwdfH2dheMUVTbCbSinL9ouPw47xpRWEaUub7ab",
  "key40": "3H7tAhfga3JFeR7pNuEwwCAhZdzZ3eKHALSSeXbmJvRKB3p2p41B42f5vDk2KrX3rVUUKLKWeJibT9ohNRUjThA8",
  "key41": "57zkEuPPMbWQB6cQUp5aSPhCt2DXtytJf3z3a5jDZZDMQ9JJPPxGTaccZDcSsHfJYagzyFab8NuQdNhhwAQa7puQ",
  "key42": "2oaCLALy2vmEJBL4aHKfT92dNoqSwS68ANN8CyCVsve9QWmrgcA1okHAsY8PgQpa5V7yV6AA7umoY4qok9jFKirX",
  "key43": "4KPYtyyob9CTBr3bNRkYAayzpoBUgksVRLfh8TbgCRH5c1U3iTbiFJDqigLbCnEM7XCY9gX8H3uVi8CK5DGYGzuS",
  "key44": "4ikq9DT2keRcvTP3M2bmN76VqBwnp3EK4iGCVpmfigEydqogFYJ53mjAF2V9av64kX9CH64kHWziLFb3vzG5k7e3",
  "key45": "9Gs7ha1MKHqB5JVXt817BbQY6VUGgRirUVJy5rA5fyKzLYcVz8vV8JW4Sf6NhNXLfLMst1NvZRTV1YmGUUk3qAN",
  "key46": "3XWniBpfzJgUrRneryEiFEh2VsPnAzfUWJ72RuXeYXzbsAAyq92K5KW4dycz9ogfCfzixgsr4fQS6RA5JTLUExy9",
  "key47": "qKdLGseJJZZVtk6JkkGhfGCuNwtWAvkud23MtBsZKLjoYyyxS6apYGo9ZUdt39avx5uKrHWpUt96BYuuMzWcow5",
  "key48": "4iKSWi94mZDuDkT7RGLxwZto7XHaxrsK14tUbjTHB3ALdvLi32S1rf3membxtHFhPxgf9Ed6EZKAs635LS3h5NHS"
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

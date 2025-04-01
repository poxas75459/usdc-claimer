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
    "59fSp5gsV1xEeAg2hwrbt56JaeeqKLX5yqUnMHLhrVFfotsydXpUvaFa8wUyKxJaMBVDL1zgyBBoT1oh59eo8mTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52rPFd3h5hw9cyPC2mCMMxS23JsdXauVV8sYUHZmTUMNnLHXKRrrMPG2n7vBPWnZUZ7Caiym8d1dxbGw8Xc4UMsJ",
  "key1": "46U9FCMSjydeU1vSQmneZ5c8hA2eVPaMveSzbWeqvWhNtVWjex2mBBifxL5FbyDxd7xETXhsi4n6n8rQeGp6ypdv",
  "key2": "2KKa5Hwq6na5e94tV2hn3k27SssC1LHkvqx9aBwTcgk1c6xF2bKvyfibPadf4q6JwbrQ8Bj1zcBpwEUFFDXreCtx",
  "key3": "2YS6nWTjAn2hP5p5M9vjAEy2KFdrvGEUJehczhSrMK6wVbnke6PdVBnMTijDrKR925UPW2j2aPiqKdiroGTYdeBc",
  "key4": "5uUoXvFH73HLrftwD9CxtsGNozLFwLkcZWYePS1LDtynAemUTAFkhQfyG6pd1hYXjrPocHrPN1k8SLuwUBE2Vqtv",
  "key5": "DHctja1yMAR9rpJiMc4sM4ZZHjJngvTz65L4kb2wXDrBHn4mwX3VEf7UHDLZJXTxXmQthbGUmHLCicZRFc9oNZL",
  "key6": "4GFEY9X494jm7FNxjDiguB3mkY3ydZEvdzT6t1UbJT5spR3caWc2Gvf4AX9XaZ7AkHKWuGemfaqdSoNGSdU4BnuE",
  "key7": "3FQV4M4arpp4tpZij3s8jfRMiMph9EY5fsNDBr8M5RF6T8D3fKRDSMkkhY5xT6Mwgncn3j8xGv2nXsJjvDsH3uuS",
  "key8": "4DXPN6NHk4E5eP4SxFhD5QNCR4gYrb6aiHdyyR1csKwZ9PcFLqY8XPAfdA1H4AjUrjyiurmKL2rEeqASiP27oudE",
  "key9": "2xHZWthN5n6P2pfJATunNFPpa6PHH7WJihJcd8hhYqkerMLtUT6rnQpo3gdAs4jW8iPiwi3PqrNhtHWMJvd1dLHN",
  "key10": "2Wpjj8Sf2N1nmVkqjnX61cZFTT57J46KbfJeYaSLECP43uP3Pon9kjVwxwxmwu53UbbcBNu7a4yEhDw4h8CvTUez",
  "key11": "3hs7s6H5D4UyiriGdWmRC7Mc6wyMtHoq2vh5w3WtMMtziASX3mMgwGtCgVPokpFsFRWUbLtBXTS43VjZBj1Hzby1",
  "key12": "42yC5SKZUHKB1AZTND1bgb936KQRnQGTgvTPzASY26FzrezRz6AEQuKxcTmd16cAdFG9CGaZdnLinaPmMfYojT3m",
  "key13": "3kgPXQNioqnVVSkd8FDoaJpCqCBwZFUvgbP6dH5iYdgcrg8u6jru9tn2LQiw1343ocumzfxdiDct7nY3wF8KZpX4",
  "key14": "V53eT3J4a4JfnpER9DZQpMQvUKYJze2AvWHXPWR1pKCUx7NUiVtZrGyk47fkgmhEn5dH1VLDk3c646JwCb2TW9Z",
  "key15": "4YuSWbToMR5s7jQDKidjRPeEp9azEepwsERQ9grcfUoSW6L74APYKwn8DvJCHRet2UX7GVh7pqVjQbb6VsvJdNUT",
  "key16": "4qpVzf2nwBpuuvfiaTS3tgchMGQZgtq6H1pCNWVKgefCtQPETycT5YhScaNaMwxkuW6S4tn2ua72SvGZz65uYuMW",
  "key17": "2fQgnsAd1XJne5U7AmpCYAZqN9LghGnsQzKRT5PbjyeaPPwtvWevJwXHoeY8y8xNvNFhYEEC2TLRFnzeLjuuffM9",
  "key18": "4eiPWaWZrRQuFgDstLmsL5NYvPsu8mhbBKUjBcaSe4t8PSZdm8tQbqJGTtZCDjwRRHPBRpsx9LNfoHsh1Xa9jr6f",
  "key19": "1D7QKuGv5SKVHkt7dVEE6Ee9UjgicZnjAxKw8MD4JjBJxBvT3ezqxmEXB3EbWTtft2HBh4WcxTamS54q4zieuEr",
  "key20": "4EgL9wPpYqjFo1Lei1Q8q74YUwbQegY4pE8qP7QkuSp35wrPtDT3yAMSmRFk9SkG3LtGgMuBQb1oGMDwqS6LVt48",
  "key21": "3VxjieZ6UJCea1XwVTg4USgfwHKwbVTYum3o9ucfYfjpArpV446XsyGrJ6MpArv89p8fQDS9VayfbxEka3RPNfdA",
  "key22": "j8MNhnxxPrUFft1LL9rXjpMytHnMtrxnSfMBesnkYkAerJ5xXMEChS462kzeNuyZR4qjShCvqD5mLay6uuv49Cb",
  "key23": "3pzWWC6RfgNWhtQZSqmd6Ky8NVBWfWYJg1y1npfKnnE9huScydW4mSrGH6NGPQzGg4AH1Yq7rVQtuf18W92dmVrn",
  "key24": "2mdvVy11Y1TT6eF3oKikgBJBaNL68DNyZ1CBjpNpzRLAwHsMwJZ6H11nyM3TttUUxETRw1jWPkJBKJuit8EU9qbJ",
  "key25": "4U8anYL1ep38sV2ysjFoDnuhKDJMMsVCz1QNcYgByjWGQGwryW2abkrcfe9vLB1JWh3G4aAnPWQ8azC3xcFWZAa6",
  "key26": "5eSwVdPPSLPwpjitwvXXtgRqmc8rEL4D7c11dAWFioCkc7ENfuRFmwRhVazLygRvo8tXEWRNgdQfdV4TjpwCTQcT",
  "key27": "39pMYxgVDKUwBfMCZ8Rg361M5rvSBvRQjffX48GLgKJEZCjSgzVR6wqmqWodAnPDsrsWoGtn2xZLXA22k7dxmhKF",
  "key28": "4Uw1qo5G6ohdmuM5SkTb5QiePBZjCFPx8o78LC9j9QGMu13qdYwYAK1mgV6VuYECZi4kkCxbai3BFpF2Nd37kfoM",
  "key29": "4RLVcr4sXxEAocvoTGVsT6fYd87j32ST76rj7NLuv4M5BJy5Ekq8gUpNLzS48j8sdxqHy3Wt7B44jXcjhxS4TSQc",
  "key30": "5k1VpoXH5T3vxAK9k5MUZZNDzvJKoMmGd7bRKHBPKebXcdK5BebhosoTdytd5iU7agpK5BhwQXHZcXUcahQNKZCw",
  "key31": "KpNUXdwJFusgyDyFtat4tkFUbtsk9pXX58bzYzBc42CQn9GeHrTsQcU2ZwskXy7GjgezyersQ3p8Nj4pMq3vnci",
  "key32": "5jqJWkh7W1kQJqMNwyX1jhp2ijNqAdc8UgSMfzXKuFY2T2A8Jp4jWqbcND4Ux3XoPbsn93kPT7Y8cQYZNgmEqih8",
  "key33": "3fymXc9DpT5Kz6SFpFAhWmvrVeaMQmWY58ifLF6nGVViLnETXBtPFh8owDiFyiJD5YagUhNUNYe6VkdsfqqJMnBB",
  "key34": "4XpH3RMxCz9vjBSHhJ7NgapphY9AJWLhz9iRKxB6YxM8UgC4mSxSGVd9atFbUxZZ4uq5vWmrb7SHQkt8tRUaQBLd",
  "key35": "54JTufbQBBPyGQMcZQfDPpajm84Tz1NdiryFQ2NEdf7AiNNJcjUXa1VnT662FCK8omszvNMLaJkUwqvepfTyFGBH",
  "key36": "5LxmvLyxr4xwRuur5RRQknE8CtkrXifrdKZ8D4VHCErKFDLomFg5DxQRkJgpWLpjvP8VL5EhXg6hU4qdSn7hp8px",
  "key37": "2RhfspniVEU1oLfdSEgiZs9Qeyo7Nz5TfDzMjR3AC3BK1RPiRmLTacmM6ZGpPaUCeFwFQiGJMT1vg4eAZYXurRz7",
  "key38": "4UsbL2UTbWMCifweKm5XibjGXjEYPexWaPNzECnd1Uotf4SpzYVRun6gCWAyiNGW3UiARpFoBMWDYKoZ1C4Krgky",
  "key39": "JLCDHdp1z9N1rCNcKDi4gZqPqHXMNmQUDYM3UhrhetwA1QNiRwvtRHTztACSo9udD8iWn3PkQPEDPwQtTQCj2TG",
  "key40": "5M9DpRCMEWNBbXgrRXyeHtjb28eEmDQHQdcZvptkwzsfuHZAPKqy9AEfvjfX3mrGkh9i8scnF8JHjVe5kygfCzV5",
  "key41": "2dD9iLYEa1L9NapGty7wfBmUmLR4Y3eLUyJrNJg9B3vpyJ68LY7xgbbyVnTedcdQQ5gCvY2c9sCdw5jfmG4jVroi",
  "key42": "3gB3Zw1xf5wCieaqKDxSKZE1JtSX8Rg6aLUFYsyADxqdDvNu39HjGxdvfr91h1zjYJvvFEFxhKH6yqncJzGyXry9",
  "key43": "3LzyyszFBprcBwb7pJGbZ5omoKm3okyykNMHrJU6w9CvxUMRF1E8b2GvAeC6cGu7EkNEjpAN8HR3zAmxGFBxxMv4",
  "key44": "2gwRemQ4ra3f3rCqXF8pvBegWTvWJ9DA9Q2ydX1fBLAsYKGufJFfQZdHgbFXYiGDNHwz2gCrceVZLU9Rue1j1WLN",
  "key45": "3PCbTY5xxRk6K9YjUP2AjYAewpDFPgKhjKtnWktdQJnwo5n2aw9JB82rQWC8uT3D2kAeNftEyZinfLhJrAXfhxRY",
  "key46": "4CXGL6AzF8G246prhjAoZK6gaKtGAXe1Fof1NzvktiifCNqyAQinzSqPGpYZxcuvtG93UjxngDN5JxrXGVMYBwvm",
  "key47": "29JuVF5YtGMTDY2AWnka7pFoXdZgPmCfRDMFrFLchJB9CsQKxczaAjx7rvAdTPC8a4E1Zgt72Rpzd7Sry3keX8x9"
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

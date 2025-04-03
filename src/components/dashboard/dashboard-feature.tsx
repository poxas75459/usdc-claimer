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
    "2WnGE31n1N38HJ5zCgeAh232sfrwWCzUxH6rgEXvtXdgAgy7C9YkpjxyKa3CTffDVm9uS1vEYRok8cfgFnc2kTZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uABtcoGT5bM2KtvVgg2fVcN1ZGFQFpjRrGBJV42i5yuE36MUbqjYiSaCg19kmhex67xgyJ1UEXGDtUhoBEn7nGE",
  "key1": "3kcyxdJrBvxEduCQpZZoyVQk4tfa7GD8Mr2uBkfhDBBQBD4564hnLaqsDRGL89QK3tLve53LRAtzRWBeMV5e6MdN",
  "key2": "5Nmcqqpst4dKfWhykEEVJA16Kk93cUpGiHkLQMABeXiMp3x86prYjautLQ4BnKZbsMNuAQCXumm2sgBcogQyNxxd",
  "key3": "3iKGn3w4Zz1wb3hgDWQ24tLkE4imha6Yi1LC4ShxeXWWQHsqHkXSZhqycC1YPaFk7crn3spGharqxfJq4SyfWxGF",
  "key4": "2PH5AHJFD8UrHjyCmVJ9LJ5iwTMoRdLWTJ8gHSzxEUN6vpnWyRoHR6uWTevPrDi7W4wFbKqePrmhTYqdPZRMWd6V",
  "key5": "PcM5cRtRQC5MQtcpQyGuJPMhV47ygF7pV89FmRY8J2vLR7WtGm4nsX6wfzvAYbzeyYhP4NLVnXF9EEv97SEZb6W",
  "key6": "4s4xziHFydai1abPBMmhARzy9V8Pdbnk5y84Uduz8LMTCukUfCrgCmJduHxtZaxSPhK49a9hf6E3kaeyUrx6boK1",
  "key7": "5uX3t1hZRfj56qMGrBssUfzeWQCFF6Dt6Kj39VjZLgjC4gU1j8nuKyL8EAdNZia1T1FM8nm64xNuYYq9a6h5CFo8",
  "key8": "2Q4Wj2unYEjaqZRFcHC5SbE59Kd9425TGkQ63oew9uzaZBzh2PwacxAv6vH1SDRJEu6SJo4xp9rSx2hiU985F3rh",
  "key9": "5asynKqGgEXKMXbTTvzQTLxdYp1EpXQtfp9EZQyUMUZfqWU374cPJRdEWfPBBxD7XcZb9tMpyhD4wnpvSDa1F1GU",
  "key10": "2NdyYeJX8dJ7yekh5fXFum8mjy3N46Pe3fU8opdjyB6dHmjxy8xrfwi1pcb2UbbFxVjb7ZDcyjiUYB8TFiPjmFqE",
  "key11": "4ETrfP2m758GWseW8PZRi3j2NpNKvpFhDUg5j77BArtGMD7unmbogKhApgHwkYYQJYiMDRJYByETo2cknHgRhf9x",
  "key12": "2LRLiXLjq4FviH6BxSXqEdxFZsnVFgvgdpLwPEqrcvmWxAtvtrVFsdynmuUmn3FKZTSk6L6a7Bvk2jfH1KonkDbz",
  "key13": "4oMwYFLcvzubteApUWWifRT4Zr4r6SJmifWXuojKqBnQPHRWPYYy1c8EVXef8wvnyVn4742LfSaumA4ZT4rkHw3c",
  "key14": "wqshfFJfM4GkstnUDUiP2JXSZ9GeHkKFuSj2CofRSKFN3eEbWSCQAjfrykD4n38TsxzuXwyAjB9iS7A8WhaEwv7",
  "key15": "38GQnGfqn5f9s8Bn4Re2qQ6nCdswvNvRgX7jE1qj8AYvpSDWbHWL8Zs1Do6AwWnY4mFf4eMM6zBnvDwYFvc6dcRv",
  "key16": "5LsMSMZDc4u8DD6S5R431VNb1V351kivd66j28pgL5aWoTdSUfoZTsfX4pdhmGQv7oNYN6gDEfBwmhD1ZmSQhDv",
  "key17": "2BimhYjXnxmPAchCXdLguVUpd4mRjhQqNQe63LQNcfADWAkTPxr3UzgRczGuib17QXkiVJqTDGWNR3kgfygQZ5vw",
  "key18": "5Xv8EKy6Z8BcYsbs6rzSeXZtVJAbgsap2nFM8JHCKwFgxtqd6us7ojyTU7BD9m6NYdNoFdzZddupiweH17pygWgW",
  "key19": "MBVGbCKs2JK4VREfMwBJES7fbiT7FTiTG37ubfYLuDonEtDSshukga7Nk9kBkYy8YEFsnhq1yYf5HNLAwVDdEbP",
  "key20": "2PwxJjqYmgow44SKuLoWY8pPMe981eT9vAsQDg5kCPPzXKNeQUE1pF4w5Ssh7fcgX3xhkRU7E1jTyJ23NndMGCUJ",
  "key21": "2naT6j7uu4kieeTPJfagGLtReAs1NGUABiEMFTswEGkkD1SKMi69PhFKHbvrwCxoicuS8YQCHeYgisjY6WYvcJkg",
  "key22": "5DNCeJFhm5F7ycMdYkRseWufqebAwNWoXpkoVGcVKX8TkaStw4EaBdY7ygf5pG3RdcrQfxezK4yCXwKEtcqrq4u3",
  "key23": "4eqo6SzeCvgNjJT1Kp99tdH7jyQMQ7KagZDvbDxgh6JuwCsN45PunpDnTe4biVFtzK1rvJ7dhrdJDMdsgVUW4rmB",
  "key24": "42nbG6X7LeQK1FbTNSs3xYwMiRGKhJZiRMpWJWo4cYeYcRziFwKYtSei3VosMLa4Z1ei1tpDpgdJhJBqfvDoKhov",
  "key25": "4oZ376wDiddgNaWi2jZRt3Wg7HKS188PS3qe8dyvLkbet2SpRiRamAVJnSaTKmkMFQiW13zx79dEu83BRgAtxmZF",
  "key26": "26pPyeAEPvJDnRb11k9jXD1ACwX5hhC6Lks3QZ6bgyD8J7SGAPiimHPkGLrorPSN5iFRrq9yzQjez2TEUYnmvnvH",
  "key27": "4kBvivMZNE6AN5kkuTWHyDr77FWjTyVnRVnG9KjP1b9pYNbXHhYmbFsA1bbbv2vT6GEytCDwmx8wWhmRLt4KF1zn",
  "key28": "43q6oUuhKH6HCqjtmvVn6vMJjcgzVZJXqVENaT7yzCLMjmRu6RPNiSkvGHsTJkuqXweghSvjsiq83nDQ5KDnRNcy",
  "key29": "3pC2Tc66zU4wikWPAU9Lp997biNddKgqSPGdk2SGGDNFB5CjcaYnXBxckB3c1sF1YvZGh7EBgFsaKvPvuH2LumTd",
  "key30": "2dqa5gM3MvTPfNypw9KcFDyy1ZhBZ2x84Pv83DQbfNrpGyzkDuR1HoFwZH3b1P5sY2aWvkHzQ1grazyqTt2VwTyx",
  "key31": "2GZoTdrFeW6PSZEPri2xUb3HohqUQZHt7bVTSiqP1sYocLUNaD9LGsTY8jaxsbin2SqPNamsZJ2aWS9Y1t83pW8Z",
  "key32": "5fwE1vTFrBWimEtu6vqVVQdYvZ6Wjme93NWuxotWt9FspEzYy4i1Zq4L4ub4Q3BL28CtEECMHxViYAVMnr9pcGZT",
  "key33": "4spV7Y1R4Kzj4sXvW6xnShub9dKS2ZfoESfkoUpwZY8dJjkf8prW1vXoA33pMyXLVb5auXLHRm9ES8i8PPmsVxLF",
  "key34": "2pTADNorJeenjYqrYNFrWmWX4B99KuzAFMvs4NXqTMhsvxZ29n1xMVB83yNM2ihfbSCw3W3Q7druwkhTRip9kmcB",
  "key35": "yGJdmdqXhX1aUs3BLGSPoKautxNzUBZNCSADKk2r757zxcN3etisPEsPGhQzBiHjUhZVtKttVjXhXkybUQEN6pD",
  "key36": "3Tves8Af4SMmg71ZgAdi6BJ5H9Y6dzP8QVG2uCe38Y38LWR669wjVCnQ1XNKPiPEv9u1M2vw6CHsHfhnmkUiQnWv",
  "key37": "4JE58XYN8MJYY3e4vHFZTqKiwm2UcZHpexhhsYimotZ5g4CUioLmXx1YfAcfv8cTRugohcpSXJzZ4HT5RZozveTF",
  "key38": "4U6yC6bok4frAas3ndq4WpdHyoFkT1Tavi1apUctux1vT13BWee1A4xhdg3VqycxC2ERLC6BDYJezPhtWhoYYkRW",
  "key39": "XWP8V9DSKf1uNpVwaWDeaBD8Tf8cLWpDvctd1MmoANQ2jYwtqdD1Wh8HLbyiv335HUhPSmLNF9BuawzimdbhuJR",
  "key40": "2zf6RS5UGs56PezNqcAnv4wDjtMBzHXKu3MUBMEkJ4v4s9DTmefscEduqfEAor3z1vGd2EQjAEEG2r7S9PzJ1uq9",
  "key41": "NmUHCDA1u6A42X92c9VG3suzUnTS4Q96gEaxLs3Pzee8PKA8kUB3wwe3Eaynp2hLzWojjFZ6dfEdE64TuW1nyA7",
  "key42": "62QduFdCyiiR5tGt4tuufhiCnoDj8hWt5s4Hsg3pc2YVbCZFGwj2f7UiQXZiYdrhB2uFb9qxQauv7GgudHkaRF3L",
  "key43": "WQp3MBqxZPEEoBEGuspqTeMQYbs8tM2Fzz4xF3Fok6NybVJeAVBNnDXRHJmSBZdqwQby9bu6geXXQ7Ju4aoA3aK",
  "key44": "3r9PCNQ2uYM3J5o1hLe9tKcgzNVAS3AYuBo4Pc8WqdXzdzrpvoGdK3DCQaGpsRThhssUDGpLdM4s4FjSV9Mz6rPV",
  "key45": "31Cs4L4DFqo7h3Cy7W55MGikjD98QaK4aLXKJwPxncFovcwNXeenFCzUQU2NiFJ99Thbrte58thH1VXZKkfEYzxM",
  "key46": "27DkU7Xw8nkXbChn24eM73uvqEAfEAS28tboWnAjNDu8V7VeRvgLLM7njyff7Qh8Z2ZWnMzKYdRC1L3iPWckj6Ra",
  "key47": "2uPQgBrr9CQKeEp4ag5A9y2ZWu3mWrZ1TpUKJGySbmeGbVh3c6FgvzDkTQFnHMtRxZcwnU4XhLt8cBDW2VmyzZK1",
  "key48": "2XJyVLpQwhpLuydhL8oLTZ7NK9H3kNZaJqyifg7sD9e1Z8T82WA467BW1fGLk7nm2ZaAUfd1XV742Y7E9JLrJv9y",
  "key49": "2HTogMfC6LNH5e3Ni7PZnUzETEFs2Q1HUQRrokPvuamrN22G5S6mZkLfJqExb3g8KRqMXE7pbNQzm5de9HbuPQJk"
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

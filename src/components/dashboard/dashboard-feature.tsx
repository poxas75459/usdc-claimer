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
    "4Pv1H141hGBoLXwCNFWMCXnZsCdjr6rwQTDzQNu2hc7RjtRGRrdUWqWbemRRzNvHdvq6gH3RL2sLEGCXmmj4aBrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ncSHXqwBBLCWYAJr2Q5pp7g3ZiiBhKAXajcv7xr4tfBxe6U5Zpp1ovQ5BnUdmUmEz4NV7NhvYozgWd5QXBVJBFG",
  "key1": "2VNnwQo8eT6vNzDxBcmvh8mXHteXCk2FFpzK3AkHeWkhHn5WiZQr9yxXNJJcD7XM88RcYRLYLdqHVfeL4eCsjHRA",
  "key2": "UU7Vm5EMhNkScL1ATfoTX9Z7bAaEaWaRLqW86fxMaagk1TN74uAYgWMeeHKgNPmqAA44fuzzFkkQNg4RVGoGmxu",
  "key3": "5FPqqrxoL2fdySTyE6uFF1aXmNu9phcvA21LUE8kv6RLhXQM2jDJGx2Ws9V99f62wZCMFE9zFdJuCttb9GqBvKr9",
  "key4": "5cse6FHPdpmVFk5M2WDkirZ9rbf8wckkwCWxmEwjDZfx63HatGzGjcrqkXR6qzJNxJV2FAb4BSz4eo42zNYYYd3E",
  "key5": "81bf5oY6Ej6tsJGbgButuNMMR6KJfFfnK9cSuZu4ENHTgbPRzvnCfaENVhdSNedTSt6K7vL872dsqFoLn4uMaiP",
  "key6": "3BDSQ4GU3f7A8dg6gbEZXNxuWyxnTsDUXpp9xYiXZmkB1sExiA3gVL8Kpw1qA4sWawsz8H5ATnBSYjTEJT7eDyU9",
  "key7": "4qgCDqtmK4o2NgqeNbe94Zat9KrS745gzcXP7Hhw7Yk8NkLNdZk4hxw4j9ipBANPvRHcHfSSzixQKpNpqVMcVfQx",
  "key8": "3eHxTNmCmur8iVBVzHCuxcd5CoHeqMMx5LjyjMrYDJqyWFsCC1xZmuiuimcNnyTyVqepKGuaekpVYy7fTgXYHXSL",
  "key9": "fsfkmtSLowcBxaEudhsDBQqESH19U5NZ8FuL1afzG4RWiv5EqEj9mhR3wxAt6NpDy7mG9V1mkh7tx4W5wQsdqsP",
  "key10": "64JmEqMg5UJ7Y5mkgdaL5efWsERZa74RvtrbNjsVwDQHY9YH64KD9KH8epoLn1367fN6jtDj1vXCPEZeyKj4qJoG",
  "key11": "2JZ3UH7H6FKsf5jH9JwJiMuH3XTwNAbicMNnEZfe9xthkBP33vbtjDLxHcyMF4jffau6Fe4F1yu982qqp7rsFu3U",
  "key12": "qAo34iXWiExbDRjGa1cXhAPGWrmmPtYuPBfXucxhiJcGpgTofnwU8LyRDMXjU2yoftwr1HpiUL2S3yL2K3PDDKW",
  "key13": "4n9WqULiJzVZWLxguGTgZ9pEFyLb7eQJ4kf38C2ae3XsU6DM28udYgoG7XioJtSvZB9mXeMNueZBD36N77WkUu4r",
  "key14": "4hXCS68bMhnqwkuvzHwwC2ssmJ9YFqvH7rCn8SrUXCysoQdkSUN633ZsAWUNpyYF5QDfqH61qKXSzcpKV3hU67BN",
  "key15": "2idQFYPxmbLzqhPbHhrRiSzsV7ubLEiNGDwM1fRxw3pkJSquo9po9Uo7JcrjtzEbMHpj6Mwy6ZhuNWwu5eaMrFNf",
  "key16": "5ZD253wey7vtnt9vzbH8H4KqKZg2dXJVrysxzcC6ALNcCAC8FauA8cgdZ3A81QRnae1AuHbJner2RSLWo5t92sEk",
  "key17": "54KAszLbTbdRVFbaFxRPqztKxqPRLsoynEEXAVRGAY6M2xrn7VYCZd9u5jzDfxM91K6q13rv5Jzxy38fWu8ezpa4",
  "key18": "26kRBB3KcT4FvxSsBbqtp84RHrgkhVhffNsR7JPhRn6HcpYLPYCRq5bUXzPQd6ZeKgtSG8wGirrcQP2SprWQ5kU3",
  "key19": "32civBxKeRHdk8JbSiJb34STudWL94KArSsxkzaqte6tRhf9L6FighyCUvZPY74uU2fUacwJfprgK1s7k2WowXay",
  "key20": "kqbff2bW6ugTHmyvoRezSZbiExjQTSS5DKveJCzJkpd8JxDToDXkZqR1oh4Nz39c1ghWVBD4Qhi6MmubHqdMzfJ",
  "key21": "4ZBka3287yqucZHLzruiwziVtmPeYhumxPoMyWSc3RRKhBL5ng36drNNUNTYTpvyypf9BpEYgXRPvMoHZYfxMBtC",
  "key22": "4SpGuzRTr3HdGjTtguW1DFR5QuLU8R25eSRHbH6SvMjSzhki8t7Y3yegpb2S6Js7GeczkRrqc1eNEax5NFAyKh4z",
  "key23": "2mG9zh2RPNcFuHYnjChB11paw1wWWYqCWnVqbV8iWZCZ4C3G5GPXCrnumhDXUDSet8KknUe8AcXqaQ3TKSCqKVaG",
  "key24": "3AdCSYw7FVny3zEbyCLstDYEL7La5e7Qr6ydFubdW5ikEB8exapc4JXCNQTLoZtXiy29df9YA28XsPPp2CK64ZVN",
  "key25": "2DC2UEJJsZBUkzH5PRbWtXuW7Qd1yFEMtZdQsai5zm7o5i35CQcfDzooemhr21kRMZsEyJBoTULMPxe9k92YH5PZ",
  "key26": "zFRmd6d3DaUARfKjftG7ZwiuT8FUnycFBNRJNyqjMNdT1BaVixU7jLjdGLzmEwVU2SaYpPzVpJ93HkxW4kYHwdz",
  "key27": "4657PqMNhBnz7Z7EbE48xgpzuybBjPEigkVqxcjbJBDbYK9Z6LWY5wo83D6YfNXDPkUKVTDLAC7ggpfz2ywisxJZ",
  "key28": "45Yx3DvuTtTqzFuFFzDTawMFLfzMLggkMggW7WXzZw2aMsB54Gzxpwp2Z2rVfSTLH7t1HTfwr5FcUjtVjfx6nBQk",
  "key29": "5M48mdygZaq7FMDfnydpiVEAQf8BzcV1bcf1WUkMDnNdGzuEHdfPe9qJ1byZEScHeLoVEo8ScuwhvFMm39epzbDm",
  "key30": "53wAzNXf573U2BjVS8hJazN91DNRSgBqPq9WZNbL2PLnRrWBL1GgqgtJJeH2xF1Q7Uo6mGsKxSe99dsGjAj1PmQb",
  "key31": "2RiJJXQQmgCirq3XPfJZuw6VrvKybH91xMBtNP24J7GmPZPpQmcaSV49q4LQjpSAX8PNKEs8EEyRcw1Sy1X5mrTo",
  "key32": "U1nTLVjV4jQE69gK2V1XcKYW9wkUKAqACSDLJNLrRAYTq5zWMAdumD21EzfHR6DS3tMzpRu5h8KYC2V16FkCA28",
  "key33": "S46nS7zozRF9ij3wVHV6VvQgwpTJTYTx4s9B3j1Cx2PWo7cG7qmgsWYTjoGErEL5MxhDBCQH6DfVT5cZHrCsWWW",
  "key34": "29JK1iTn8RnExjzrAMsUpG4EpndQ2F2tCjhwV1NoaLdKneBR7GW2S6sfvGRxg4rin4jx8fFnnrn783t3DWNgzMA5",
  "key35": "4QAoqVgUwRdpkQ1vgYdXfXmorzA1MBf8XTv6D57f8xPTHNbBJcHQ5sV9oVASYDYdmimSzhvDPM8BwWb7sUcqjDd7",
  "key36": "5draVhXc4LSVi3R36LcAHeVhBKFNkQFGruwj48mKnyCLpKsh65KH6uPJDBXjZdbFUHcJC2g4DWThzJ3NhyKA8Yzr",
  "key37": "2UAUJbDzK5DXbCC62YNGVvcrp8SnV8GvizSGF1ijGAu6kb99cpFfpoD81utpPD54TDyQtRUVwGoTkSc9UCsXtViU",
  "key38": "Kf2NTQ1dN28H2L5qJ471MBsGrp4ajrt7wXjWgmxxpEWPf4Cyr9uXnALjFfE6TX5126WwedC7KAXDmnosZkqaud6",
  "key39": "572rvMH8VhtAPiCtoBRMYnT7RW8k4HcPa4vyMU2ngXNRkJMCmgYUPkdBQrroyGygcZk49RGnejCAqmBPAW45qLkG",
  "key40": "23Uc5pkwtWvDFXUYRX8pPZQJZM3Qr6hkxDUd6cvCQfERrpZr2Srdj6sqC1xBWg7XrriuRwMNdcTHWse84HoN1vZ6",
  "key41": "3J2ueoMhirK5yQBH2x8KL4kwJWfp3vDvtGeWyikWm7GeeLWD2AXV7mYpQoKwDi8G7wgL2dMc86m9644z6PyWooA4",
  "key42": "2pr6oJBcZtmH2JKJhwqp6Z3bTYTqQ4nUrCissc9T8LxEefKmdmagbSYh5ppeNMM1odXkYFuxDdijJM1yKmKYeQLV",
  "key43": "2qYKhVFczeGrxC3H9j1MyU9QB5L2R17nhoicdWEfGjFRPve63q24pqMxvx3W6NcTaTxBWs15HPmX3fgG5QVfS2di",
  "key44": "511TM9ntDuymTXfQJWad4ZNedfbudxC1CtJSc8dxxAVFiqSNMdkzZh1qZLpmUDLyN5akzXNksa3ectVxAuboVnte"
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

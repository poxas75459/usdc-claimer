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
    "wju3pW9BVFntkQP95zsvnaFPxqpxqw42ZRGp6aRsJVRHAzqxdjFRymuSZGL9aBMSKvhcUpXNReCMsBYGZyePRS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfYcPCgZsczNziCYhrQjgiFmRUdZxRf3tyRjfhny52ReyQoUV3YbWZGxA3S1svhP9QcdpPz3dxbVSnqKy75sx6s",
  "key1": "4bYCrZ8YbSRDeYxJQ7yzm6GxtzVuzvKmiTV5FRvNuH9CbhdXvLhnwTjDbLnuEFz6GYX2A3TtWDgXY4suWyhmwgPU",
  "key2": "3oeWsQnoBDD3rq2pRECPSpBDTgPVdbuePRo2dFvfKUb1pjXQerHyL1KVUXerbApDJif3gah2U5umXyZHD3uNc3WB",
  "key3": "RvHZrTj7w8iNNE3MnQ6GzDEbDzBqNfBkEetrpUZtTyygaYxtZQMHL9dti3M3tfeqvxTyEyjVeVVbgBU4zGqi4yq",
  "key4": "2bwn9oxZMiuaZ6Ti9vBKi4zJtozm29rkXry7H2wrNyuN4QaHm1HgDpXkbygJWdoPHoD2Bp4ijure7eLj8kYKfRwP",
  "key5": "vxfY8BEQoeeygP1dTYHuyXw2jH8fzQVyzsfUQrQm8XNigM6eu38NcNYeHoGqUdJ3ffCYDXa9DQYzzA3hb7cDZj9",
  "key6": "4MVdkEBDmtZ8TzYPGNWSsuc26QaYieTAKesZwqpDtBSCGo1gG1U2MU8ySKb8MhfDRiUQQSZcRS9nbFZkARK5362y",
  "key7": "5xeEYPK86NGHZ5w3CWsTfZyHBgL4AUzDpQAWK29DFWUUpfZ3q48dqC6xLn16NrkGimv4hMCzKHhesv2f48GuqkF8",
  "key8": "8rTo3vEuPpM1UKnnNLEg7i6AC41JssWMkr5mWZuRXEG5kJaM9RE18LnAJRyRDYRRM59SVBp1LvNdyGktJSCWxUo",
  "key9": "3r5NJ8cKMkaobHRpvd89JJw4SAy4M85oCA7rAsi4FwnPJ5QvoXarewNYxdG8y4q9H1W5cChbRTqZSWR89wvc8grH",
  "key10": "2bTWevArK8w4oZTuSAMcZQRgyUdEftBK76hi33oCcJ6seuWStxJHqE1SLpZTPuSoR53VmwRmPupMHz4KA5HmycwG",
  "key11": "4QfzS42RBT6z3KRceSsRnoBDS5rsLNoKcBgcL7QrFXzme3sDpFVFPLnRUx18YUwek2XjuthspoUpbZTpQNSJqxhF",
  "key12": "63gHjonZLPGf9snwjhNuGSsnEnVK7Hr2RD8QRNvkWdyHSaCXb6VEqm7oVVvbHGpUwTXdfdY7sPH6YyLhdRu7b6D4",
  "key13": "4zMqfPR4muHbmAb6ajo6yDRrTVuCs1njUvkskNdun3bmfjEuHptdtDEMinejzRug2ZWvreYJ3K6HoXbsQtCpXynE",
  "key14": "5hCBb63PFVJYtX7Zh93tmYA5PKzSX1Y5nR4GdNApzUPTp1zR6GpU3riECFbppwtpNtcCWmPbh9pPQcw3zp1X4Fe2",
  "key15": "3XTctBWQVQP2DVbMbkyJMnapjmra3JiUPgP7fKs93HmwKDocTZvnRM7jErzq4vq3P6kQcNEfu55S7D7jyR1RP4U1",
  "key16": "3jFpayGhCfJ7wp4sog3oCnsiAS8Gffvqfsto9dVZfZAqEVULwRLJwF5J45DoqwHfK5MsBxEFVm4cQj4mWdEzz73F",
  "key17": "45oNe1K8XAXEyvyjiyaoNS1rr7svZSYLSDVWGZe99Q1V1CtKpkyUM9B9MsfWcuDJpubhwLtWiikMgytDSpUscT8r",
  "key18": "3NBK9a1FYqHhd4Ky28jAZR7x3R6xQka9mqoHJ4xAKtvgAR1i5VQ7t29ebBKzt6MCyKAtNhz7FBCMwFFbQSHMCPT7",
  "key19": "5UWLMHGXdtmGqX9XMekkUp9Ljg2F8DrCDYVCENYuzaqYF6xXr83MHCA8HUbmHtEj632fVoEQj4WQbRXLPYqypzSA",
  "key20": "5nb4FeZx5ZERUCPqboVNK7owJrrrEgDqLgmeyTxxyhcTzzEACA6yYiQahZMMgGQM74XqsggSp45o7SwrH53GAZYL",
  "key21": "45Guz1LHNccMrv3AAdy3UKYW33eRD96A9GLNK13PQGfaq9iaj8v3Az6gKv4ejMtLURZAgqJzP8t8TUfoEHQKYHP6",
  "key22": "4mwqnGtr6Hpp7jTnGbUJyCj95HaERZVq3F3QD27QGtDarxjU74ftwD5dfYpaDF1CgG1eKWLT9LZqMYB3aDcYEeyp",
  "key23": "hPjT2mQQSoTFV1Ay7fCFTYsvHEsUegC5SQDmPSauhdtxLgSXpX33cw983gZJ88x48m9gAFAR3wNTVyG4McQBfUY",
  "key24": "5e1g7QG1DwsmEEyGwoGrTSDTCa6ch9P26JZtcwN4z6Lz1kg9LwkbT2WTEH9MqDtjwxJDdF1iSmnnbdwjvitcCSC2",
  "key25": "2Cx4Dw4huiJLP7x5aeSxaL5ceea1NeT6aQr6kUWNxkgmDyid7UBdLhLz2u1i169U1AJ3u4U1gk6qXAejnypHHoSM",
  "key26": "zq84ipYz42o7ceFtjmBKTvubDu2kk3zgbwLxtUwMzL14UBGgjatG4pZdDq472dCresf83Ean48bjBQzcmp6HbBU",
  "key27": "3RmUND4u9e7py9CBbRAemX3B3x2JbEwHXL5QihF4YupJpk94b8ZGJ9okpN8mar4QxTTx6YCTkLVHA3g8Ztt9tSkD",
  "key28": "2ob9gwS1GQ5N4i4YtmJPMEJdhQt6Tfxz3PPcAB78MT6ZjEwjCe7QyBVAmEFhMT3K3ZJk9tmv16sp8UvNd2iRpYyF",
  "key29": "57DqgZhLQGnoZLNnExt71VYpoXa2LZo2odEK6Tep2dVsS9m2gn3kvugZ7T8K3yWyuAwmkMa2dNcnQZ5bGe2CwsWv",
  "key30": "2Tev4XuB2Mkv5CDP4MwxPoLSrixNTN4asHYH3D2E2qav7aXhjELiBYQCox6Jh9uozK37AJs71uxK5dayATDZW77K",
  "key31": "5y11vTf5qLoYu25C4ydFenBVAH8KsudjTiW5jHw8DccycFWFspfyjXDsNVKdQUSKa9otNW3vNBdgbgEvUqoPFiU",
  "key32": "2CYqC36JzUxjnF4QGvh9NAFR5SXLK8PH2Xv64J9W1oMjM5JPRVes2cDs1tKRGvnHYCsk3LPrjYHCMP4HgeFFGeXp",
  "key33": "w2jGyxX9tXipQwXCUwvxSpwRV6v959cusDk1RUKQitfr3ZvT2dAhLJFGjLVBUuPFXWyYf7ang6YZwvAQg7YKDYK",
  "key34": "2TBoqJrq6amnX1aNkiZcLtFB8ttmjshDxgK3eznsV6SVfaawZ1Y32NJW6cnUQmLTnsNTCNZZWrRpRXFgExtaiByC",
  "key35": "45ftkx9HPuB3rRETjqyvDpSvzG6MfQy6v5nymHRgSzSefQZq63vL2Grhm6vDxUznNsVuGBsNgsqYdL5K5pNMSKaF",
  "key36": "3JcrqVaKJ4BbJfuQgWLpeL1hGfwb7cb2An2fnbGZy51d6Hr9BsfGxjvLT99TDvf2gqnb4mLej3kXZyjCrNJtc3Vh",
  "key37": "5eLmyuSvcej2KKU51Y4a3DayFBkX478CTfNYi44agAdSDZF7M26FbHFAaCSS5ubLEFABC6CxnvRdumEZrARXhrRn",
  "key38": "5S8WqNH9mCvMXXPkqKfbC6NkerRYsbsWQT45bhbck1Vp8ufy1Dq7dR52YuCTjDjXUuA16RVYsMUonyY8kiNNh9ny"
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

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
    "cfub57ZYkC3wwepcYAJqJ6XFzLuHCNSWZTMbepdoGmbXNgPXNTCiH3nyfSrWuGBKnn171sLqu5Rk8x23uWuHfGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ieSAptZFbH9j48zYcqi6rnWK7VbGisEm7bVsnUenpdJFdkojEumJN6C6LhdWxkqD7CVLK5VYjr5Ms696EGhzmwE",
  "key1": "2sZNj51N1mt6vAhf5TUCaedQ5GPx2HdySphCeb41ohMs7ZeoY9ksQQFVvJaNx8dL28efEFJdkfGaCESNE7oPewkK",
  "key2": "49Nks6KE69gXSunxbjJcn9nuZzJ5u8VqsLnbpn9KRhBL8QaVeK9scbfYZ4SXrkkwgw8omibxJzzQNx51Z7q1z9SY",
  "key3": "2BkjVFnukoxPtqFWtpCoVWEoeCjNcLgPdsC12BC2mzzN8bzQaxqdYYC37BF2TjDDDcZpTAJHu8LkZ9kzkg4SHY7u",
  "key4": "HiVy3YdepymhQaHAD84XtrWgCFbZ2FXKD8onwtRzYHuvdUHiM1wKumnRtGQihBKXCo4tbT1PXi32r6qGgHFNW7U",
  "key5": "3voGuJNwtu2H8kFtbcY532SPA2Ru6YhVgGsFjSdKNh6n26zPZJWD8hUrk6my5ds7tDpNGdJ5rh1yrxxZ3fUe9ofg",
  "key6": "3RdidJXRuRBGfAheeSPNB9QUqrV7uH2d7emQ2JWSo58BE1vMGPgi8Y7sDTc2b4kXG1xh5Ghtm5CsdUZirnTrwHTc",
  "key7": "2cX3phgmHBgD1t1TWAc6B6yFR2bSokgqjcqeFiNnYpc7c4BuYBDfBkJd3MWNggPESdTkkvfiVDApe46PVebY2KqA",
  "key8": "2UTmtE7u3s29fUNzbcAQ3ocmDna39FyHJoQgAH7jWFXYTKyjTMwNCptSYT9wptJKU2fBfm39aBGTD9aNJRWSkND8",
  "key9": "4R32QAUpuxJBK5efZRRC1HEj1qpwcYg6M51fhUBYzbHeNMFHnDB7vHBNf2f6LSQYYCUeqryX8d1VR4C1eCNJKvdB",
  "key10": "X696QeYc27dt8YYZH5affwpPW2Mu6PB3sWun3sVnahhqERa6TCEqX9r2XP7o88i5F3AvBbjRZrPeqHegcPVsr5M",
  "key11": "3FeBFRu8g6qYq98iK2j9PQv7tKrh3Q7ZqjPTMbwkx3ZEoo6pYyG7jvM27SHkjdtqaz8yBaVeARer5si7okGmWCtB",
  "key12": "2P6pz3wm93Y271xgBSvaBHzGMUPwNNUgR6o5R59k5NzkjRxPLxgsRCbrXCtiuFn1784Nzh6b3q9umu3HZH5FnsNT",
  "key13": "4pnjsz1AWW6fAQMaEexH2TihdLPRMKz7GiWaFKZrdkeLXS5FjZt1oujdSTfn7Z8gTEDnWERqrCN4NUggDvsUefra",
  "key14": "5i6STpVUTAQTaxMa14rzAVCQBytdwX2GDxxVpUEdno7TuysFiSNDSqRHj7bz1u2buvjCXkFZgwGBeTYqAHBaYSVM",
  "key15": "RebqxvT4GRBufaELqFVH6U46Kegr6qvRUVKK1hyWjbGZjTYaDkbYBDkHi281vAE6RxQQ2jxsTfJrLyp5cFWZiRt",
  "key16": "5A9NY4XYqWfzu5EXF9B4Z9o4oEcJToUH8NiXY5ecYXEeZRKBeU9Jy3944kgi78p2rfWisADKLPtBHVWtbmb369V5",
  "key17": "53ZWGvJRbXBWcBrGJsxg6bYuNJPqwqYkFjawiYHYeGAWmW81ivUBRNwSNTZusk97GqKhL2gHanR1adEZCBP6dRRJ",
  "key18": "2VyKcHRaGZgCohYJ9m5fArPVDFDKxD5kmKSTYMtyRET6eKi5eF6jjrFRS5WGevPXxpCAz9qwuuLEGjamCzfja7zX",
  "key19": "4XQb1TUskqjYo1YRiEeSq4dopFwafr13sUQiWJxsSJreST9VtRUBHHz6KfeKAMNHWbCp1Vq6vrdPB3i7wCgP7xX5",
  "key20": "5Npktf1GEneW38meeyrs9VE9N9tgyRvyECM6wTCG4Tfj4wMfnPScY3sokt8kQT6BzLAzFhneRZaQ2FkA95NQVhty",
  "key21": "HHUn16kFASWFSJykPwE2Vv2oztk6k7X9jRBGgB6GsqVSdFAjFXhbv1bUCcHWLJtU1qjoBVnoq2Hv2W56GzQH2Fr",
  "key22": "2ha8bn1wfhZYo4kcNpfkx6Hwi6tLRFDwrrdcWJUizT9bzrcA5BrGVtetxv516AN5D5wiEz8ec2gtbaFVKAxjLncm",
  "key23": "48dR7TceKGKTzeZFi3HGWcMWRRkErTsSWFwnrVSwAAFMhErZsogZ4Lfb9mbbRqL3vfQX23ceEVwygRF9bZks6o4z",
  "key24": "5NexjzLuo86m3Y7kGGJ5iT8BgowmZgbs6YiPXeFnQ7NL7YLexyKiAXBALxEz85k9awg1VVLe7eMzNc9UFRoPuT69",
  "key25": "2WtwjVM4oXCn2tqXk9pG9e41cTb52t5ULRNdWqNqVjzzzhri82iXkvZHWBKnbKP6ffuUjqJbHSBEC2bYubfwrio2",
  "key26": "2Dun8caHH7pZs9Byv1jeYGUTpKcs48PoEkbf7yBSShunugYc29g9AmFZuY76QVzVYNtjYqsicPTtxtypEiebwXdq",
  "key27": "3dDMQj7C2mRgmajKbEseXd7nKWmrzPGMEz2RGwwNssRF3LY79q6FGfsVzcY9rkTm6hLB5kerMti72bDtjHfQHyWL",
  "key28": "4qQVsrCt2UM7QtZx83GqEXWqKRmMb9MtsJCW2jWVYxNpTuhj9f5V46XJEhNfHMhmjB8M4RcUXDmyE1SbjH2AGzYR",
  "key29": "2UiyeGi1isbsRV7PgUfqH2GQ4XafCwhQ2aixiyXd2YxSnKTX3FH5mkrgHGkxaEBmAdgB8WK1twXy2cHjwsoXi1B6",
  "key30": "2ry8uPYwpKkFZ2Zq1hSqzfGUAhWTr8uKLhSZuaGNBV11AQKYaYXPd4mu5sw718cHVhixyo2a5banuKnKUnK37qpk",
  "key31": "VfhK5qzTkHHQ9VPxcKDszjCS9x552TXcREE2Ciaespb4zJeWmGWxj7KgqYKxL7WpTBnFagPQUnmZcMRdpMCQSrt",
  "key32": "65zzZDa5cKFAM9Xpa26bAH9G3jrkSqz9axF1HAmVhCXNJGNZcPr9CMiyYnC7o1SWvVYe5sse9sCFzsH1iBmfTDnn",
  "key33": "4sfAx4eoTw9EknSAiSm8eLuR3oZESo3o36TNcySvFfAY76Z4HCJUsVYZXmRJa2zuAGtPPxBkcLjvn4fCJisQxmnH",
  "key34": "2vzb8958Y5jwyzERnBEtdWhPtpg6rWpyLdBpK4xqNYouR4myZnuqvsMRrrDogAQmCCwdT4zVX9djpHwgDj4TtLCg",
  "key35": "VNcVvdcuraWomdbSsqVkWxfdgUxYuo4qhfakwdzFMP7cz1mb5CwMd3fNucwcoyCzJmd6XEJHmzd2u4FRpHCVqXy",
  "key36": "2yF89gd4myMhMngJev1N1kd1rzz55uqXjJJae4qFRyv3CkGYA8ycWs6ZyXUe1TNxCJ63G8QWKq6ACPtmZ5zFXzXo",
  "key37": "mXhZAqe6da5JJd2u95DMABtUuQ1T1Gwp5FrsE5AwccNmqdBCEeb6sXeqzs2admpTUNU5q3R1sWmTqMguW6XNicq",
  "key38": "57zvBSP78tWjpDgjkd3T5C2cLThRMoBxQR3DiqZcYXoNtaCqeZDYCkXf9EmQbUNjEBiPEacy6Q6NUurmmdjgwGPU",
  "key39": "5ts8NUadVcb4dKdRdMYwYjfuLvqoXWSSHCqsMGavTp1Z1LG2oGpuz6BaCxh4qCzohHDC6VcyoRhMawAMH7iRdJR8",
  "key40": "5EJG5Q7GmmyiWbAaWBVdSsTdmiBX61nRaUoNrYMFpN2qKDD2vU8deF3unRDf9nZvJcv2NpD2nsShxncm1iwxxpTr",
  "key41": "3tZuMtD6TfAf7B2MXkMp1tifCjrno7H4pSmqq3YveV297eCA234iLjBmwqegxCpiGJScgkNXnRunU3vMRS6TcBmw",
  "key42": "2Lzb2MU4USvMi51qa4YocSDcivDZMQXdvoqNVfKYLnDUS6A2hd1kg38u4MPoLjot5yaBBZRSEeTK3oRha4Fniu3Y",
  "key43": "3qBkMTB3Fo4QstRT4M8UJBKZasUJqYisjaCCjGWXug12dpnQDkCaiHgjS5WgCyaAcnpAhUA94jnxC7iH7eA9o9Vg",
  "key44": "5orgWTrgWQFUhgQYfyYJmbKhaR82WoEpfg3JBeUYv1jLaXSQr6kGf43AN16psuxicFq3HL2nXKJSEX9En6QBuj9m"
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

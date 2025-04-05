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
    "5edEQYcZ5QCn3FoQEG9evkncQtBmWcD6Vb8tZr15NRSLBrLjudxyZj3k4PghTARKWrXQi7LqUbt8o6mv3BFtFVxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RxLYV72VFPKPKMHSsXFARnZAoUu17c5AjgzV76QjhtBNugqwAsB1gxfpb7RbHK1Gy7pHPx6FWQRvnvSnzGLxK5m",
  "key1": "4sg2kiDSbCZeWuMMLxXZ3NTK29qhaSEfj4qABPNt31iTdpoRvepmjjpaiQtNq8efoYYyPdiPPZP4UCgisi4qRUNo",
  "key2": "3HhpheBxCkR3DQ6omVF5QmERKCieKZBSmebGjf7CebVGZH8ZKZqvExjpjokLKaJ8GSoKHNJB77z9DLDg9eu2Y1VE",
  "key3": "5WYuuNKKyU5gcpyDSiwyZ3R1NjcsUj9g734Rp1KP9L1LoyBaQQ6GgDvgZGZ9jFuyVgFPuamUj5ppTBB78FSX2Q2r",
  "key4": "39hULhYF1PPZDJwhtFNTZCPJJG6Vke1aH8hpP5f1oy5ZdJjjMf2TccnrJ5nJtbaqT3c6mXdtcV9rFeKTgdRwjijj",
  "key5": "4E1oFADJg1x6DjsRqLjLjQd8Vr2phqw4TtyCxmjfSfg8dcydzqiaKdEMbTYfn8WN5gi99dfPMVXAKARHEn24dJM4",
  "key6": "3UN9PbwFqWCrNDG84x36n1x9yJGEo9kR6Dh41gnPEzGFj9ANgAiPAGXbEiYJjBPyDRyoQfWxD3mcbR2XdDf46Wft",
  "key7": "2bb8adzvqYFGZhTynGPHAdtMeiXhz7eH1BRDx8WZWxNCvBiRPGxjUK6Tt5FD3dQXD1ePVs6uWuqBjP6wWMXQes43",
  "key8": "533UwaSUDjSu3PPK4hwjJibMaPtKxuQky3mxVky7xwZiviQVBimLTkQ7iKvBo7RMYEbqf9v5iQq1BEtczUCpBMnG",
  "key9": "2c8jnBGupQhSGYeJkm1nEbB7X95EoJGTGyeV6ccZytgs694ZQqMUFGPdTVFT87RAUX1nJbXseSqGn9gymvhCxjV4",
  "key10": "3ASoGtrcQWNxiGF2xD7UvMVerd1YvhQSZZSmeWtYP55F4gH13xz6M3KymJUqCzGVHteEXTvrWvFiuKfxK1VeNaL",
  "key11": "35m1MfSk7qZQVJkzgkB5tjQ2zYct746bJ9zW7u6HC9C1sq5iVgUCLdsVjcKAvX4oVR8E2rZ4yM7dMFsubFx8dCUs",
  "key12": "v3ezeGqfGViCdRoT2Vhjw4YdU3eujwNoSh8uC5wSxHe6sBPbrsRZaep6jUWGC25nocUWVNZGAr2VYhffkmsnuuN",
  "key13": "4pegPowZDxuBHzBmxWzSLL6zxjUVmyYtBj5S16fqQ2DRYgg2rpa1XWJFxA6i7K1BpPeYdQE1p22Aq3X4WeJVDBNn",
  "key14": "2EXYSeJFDpcE463hT977K3uCZMSLuvPXsFvx1mqX3213gSd76J8tanyYhV6Fohv2CVPRsyQR2CTJ8ZoXQaBDMNFL",
  "key15": "5aWfG6KQxGpUxshdqTc1PHQdL2ZipwYLbatHqJS36DfVeVn8VymMmBpkSNcKDVbWqYTrSYU4Xc33xPwdVvHsL774",
  "key16": "2yfccSTvRw5Np7ancQtpfJpC7H5mjmh2jk7h6fW5VDFV8CMpPTeo4xraCANKMzKmGRn5YwdwEzSpvTzRe8pJ7PJx",
  "key17": "L9QSkd1AqMt1fpHRFGagdLkJBgQZZAnMmNyAMsD1V1vuUvZYU5wdgr2vExSPVwMMLW3rFK9TLbVJzGct5zm5Um9",
  "key18": "4pya3T7SprBe6nuxVaLut9gRpwPzmgmAxszYDr16ayqxgBeSpWgnHpWLHii1paYbN94GJjZnrYWPoinLHWTF42iy",
  "key19": "5Ar9bghpkmVaUe67vL57cMfa5SCr2CbgyokDP12iwKNRzfP7YhBarKDK2fCGFG1n7UA3oGCAPKfMnUgoFzcngZKR",
  "key20": "2Te6bS1PPVbYjEQ3nkkPtDotkhYGPwggp78huUJZ4hJd4D3K4Vrfbh9L22iC4WUqVu16KiYTdTSRizSzpLt2KvHP",
  "key21": "2EXMijEaLRHYdM5HMTzPrM3Ec1QqFgY9gfTVFcDKFn6cNviZ5A6SdpfyRDpHiQ1ka3UznDE3g4VqpaK5g87Bu7Ae",
  "key22": "2XVULFJAjMDebrMcVujzW28dnWVb3CVKQWZjV841nqM4JibSNux7nB88BHoEFP2rtnB3g9fRKUNkz7kEhn3RCVQR",
  "key23": "3c8vytvQjH6EwLZpinh4y6nFD1Cv6cTV3y5FsYaahqkJix2WAza5hwYanv4EhDwknpSPd1G8xfJYN13PtGVaYq5n",
  "key24": "24AhUn6yxEca5xmqeYtmZnNYzZMm4QsDHrPxu8tddyuthwLMTaR4MyGZRKc6oCxnYii9KrpQA1qSKj6VBgwrH2pk",
  "key25": "23EageWU6Ri5ccTr9wsNgVDn1zs1hTs8cCqSdqEPuTduevdUh1FTnbucF8WFAjurxPRpa7CVgkbtbnthss1SyMis",
  "key26": "3oRvbEuPWva9VKzBPNrp12QmoJzyw2AhHngjrix3TYeWpAtKVPmzJs8YTN4p7q1rKtP1hXtd8wp7RSWo5JeftUGD",
  "key27": "3chj1b9j28XMLjvJyyU1NnZPZe33UKqWSpLgArGBE3zmgFsqKaT5DLWuAXoFF2QSKriD6EGTBRkVpzAekrbcFgz3",
  "key28": "3gT2WTx54ccCsE8p8BrzmAKV9pX7Cmju7LiqREdV1fNY2AcXBhstg33CqsqNGnvNrt5NcGXRLVCFuURtZkmyVDLT",
  "key29": "5Sy2mjXzD9SUtJnzxTzqA41UYmuehT2mpqqvekmSryTEQhd6yyU6TU9y3ujutHRQ2ucg88GRHSR3cZvVDo8YLs8L",
  "key30": "3DmHj7XbtL5V5hwpbzp3ReV3VXSuko9GZrCZEA9qFdvxX2tUctJdR5cYGAkoX9RNc4CGTysZAHD3TNGcS2s92Dt",
  "key31": "5jLzkLveM9rcArnuHnhCsWpHR6ugmGwGiXE99tRfywUd5JMDsZaMFQRueoop4eB21oymrpAeyS89dVuQerxFU9ZR",
  "key32": "5YDYP5HcP1qLvhAhm7A1BYyyrnNJwnx7wGepMm8Sqz47F49zYmAJPpGpVMD3oxxK6ZjpT6UYSX3jSiEQsJdeqEAo",
  "key33": "2j4d6b286c4EPizGJnCAJAgadERrwUBX3puTFdLb2jfMdTveJqxb7aYQQbbEJSKtR9CqXTd9bLwttB5vEPpk91f2",
  "key34": "2KHNprGwAkRx4voV9Rm6fqCizVk8hvTa3NmXawATn667UW3D2JorvW4poJC2ESRnc5heJAbSe3wzRjgpnNAiASEb",
  "key35": "4Qv9E1E5aZxCojJMfQ4Lk2BW5tYrFvR5exrXRr66X4MnGnrAZ8ZSAqjK7kGmD31zAMLWeJSEbPaTwpqjPrW8L8qN",
  "key36": "2E8dyBGoZnLCetC3EFt5rZPvFCynjT6fZxd6msYGqWW5JCcmzZwb8rrU5eGNMXF1MTvPMQq2mqZ7rCmTL6g8VLJA",
  "key37": "47vjqL6HmRMtabjYWBJCP3N19ksSYScDpstdGKEcUrAJuepSooWWcLR2cEV9g2ujaVs3Uz7P6VCCWnh1JGdcujkg",
  "key38": "5wCYiQusXpgaKzwwEP5v62yXZrutYW38ro49UncDyKVNtkeSNp1BzAo4obTKjzyjoW6Tofq4jxBEXnouTFjwYToz",
  "key39": "5Js2t9tCWRjcmXMxhzt6XLCygo9T2zLYWUcttt2AAgtZMiYVYMnd9RLQKz3n1gSSMKneU7pjnruuGrwK3d5yNyJ9",
  "key40": "ZzwcviNWvfMwSxDnHxedLR2vubxv2CdMexkTW2YkMMuBEnCsTtEkTKt2VjZ6GQW5xoMAmziSwPT1YhSfYoRnXJo",
  "key41": "5qPmH3iugUpyHZ2D7JRN8nMV4iRPcnze8jacu9srRyQifi3k4Abse2uMWGHxDsntS7r2C7jFcvVra4xBgQP6uMRD",
  "key42": "2CDa8doi7iauXqeDVYLsfLkE6ccfyxkZgV2nZbDG67UpMc4xMk2LCwuqyTDj6uG4qZQEca4R7BUGWvcBXEmVu1gi"
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

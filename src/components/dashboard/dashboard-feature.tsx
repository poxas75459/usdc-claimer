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
    "28gqNQqpzea92EDFTpq2zoMVd5TBf9hPkBXfSqiWPj3sHGwHBFwBSUWJD9edADMqrhAVAK9Jr7HQcx8Kqw3rpiCc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kxEvRujW5Qmyp49YgAiV7PbsfrF8LaEJyScCuYsmq8BxEVVnb6oH3to41NBX32dqcMiqcFgZtpij1WGFFCgja5f",
  "key1": "56vZRsRiog3hZQYWiEDU353PjFjSu4x8JNEqPegDQezE6fs4yMoRYFKhwn1t3mbhPURpYcf5sfVfNz5rkLdF6Khm",
  "key2": "7cuLjUwSjq533hTt3hkbRpLdAC6AMxb6Mwx3qcRTWneaa7s4WPdNHorYDyhxjjk8oxifTNQTMb2vZ8kfFkAHdGt",
  "key3": "5C2gGbu4eGgyYtTafH1XFSxRqdJ3z5awuvYSgSWDisv2HM2rYFdMSu3q73KjeEcCTLtmtNc7FvGKpqqaENi7g85F",
  "key4": "4i2GYV9CLpvCGz6zBkttfHYz69odq2mgb394tvL7WBPa5jbSZ91ysAzEiF3bRX9HuxWuYF1R98RCB7pu2GEkyMt5",
  "key5": "Ev9pGcKDqfV8vUwRksN7YLKXDVRsvzrdFqr319Bo2r5mTvvStyesoS1mJcsWQrvwZ1mKA9ogrLHuQTSaxsyTjWP",
  "key6": "2veWdpSbPqUL6exdopJ76EXCN18LJ4XBAtgRs1nwqMQ6rRMe3XsGXNME8tjKJins9xoYkwPv847NDLjSQdfjZFbo",
  "key7": "b7creXW7J6dYWK2AxXcyE52s6ZTw8YjgVbYsSmzCP7rcmQCKQ4KSYdFxFp9ohE1gyET2dXbUWuc5x9FxtesGZrD",
  "key8": "3s52TYtybQB4HPP2kFB6De7vLyPTgrzfc98gGxNn8ptw2tFd8aPu7uAkJWdLBvb7EUZzpAxyRAv5BSeb8rkw2CLU",
  "key9": "4axUj4hKcRxizMtQK7G49hSBCYX9Q86Cmj1WNK5fVrnAt41sEMcNfDzoqKmPjscHCSUoYyBniL2xj7zyqNkfvGDt",
  "key10": "3MDNhgaxkLqyAf5KZdVUpPSJ4KGVmR3KHrAkhE3AqQ2YXHqyS89fSgQALxsZr2uJ1BjyzquxD8aZRb2bqcgHc8Qu",
  "key11": "tKadgiUTnXALTNKfktVH856BFDfv5LSMX3gaTHbAVoKXEG9QpPB3eSS4kBBroERBF2bQyJ1rZjXT1boU8jQvf2b",
  "key12": "2mjZwXo3Nc635NbaPntjwwfsvNQm1gYr5Cd6qCxiUU8yqKqfr4A3vnWQssMF2GbWj9bYDW4RNZqaFe6KSyjFLT3L",
  "key13": "2PiUdQK7J79gWSNSRXmvkEfptms2CM9qZ9Sh1bNpR3uMMTDX4ioBEzw7qotGiV7Y55rpRwP9DQgBknBDQb7axarP",
  "key14": "3hcRFqyouoRPEERbXkx8iuT9RMHLyMTpARKi9tvj3TzxXJ8D7rrgFcpwm1femKcAjPYDBzCdbUC5vgHByPPdDQH8",
  "key15": "2WexAh4ktS9ChxA1oc1vFGBTFhBTccw15Gz5Uybe86LUu5FRCCRWeSrZTk5XvyeDjsQwne6WyqTqVDHgfgV3M8cF",
  "key16": "2eFb726KJf3vhWaQQEhMYVRZwtJDf9guUpeFrtHmsKUeMc3nNmbnCaDxip4rjG9N38jCYm7qQMaFb5NThxaSbzL5",
  "key17": "3SUsc5ah5yeCE9wUUAeZ9D58CcsWvpHwZP5D6RZHcV2dHNhzKMXLFrfB2EytPFmsbw4EKXTekxgwwMHk8NRW3oqf",
  "key18": "2yi1uhMSytJMP8TFSjXEXm5U832oWQppNE4McZd8yXcF7Ex1sjoQDn2dCGAixYJmo7mYXStCtc4e1a3prwqDdxps",
  "key19": "MzrTP3fUKEXnDG1pyDEcNe4hVAcyvvGnFhGtTDV1EvgysvaPDDyNviANLkAoq9HpCKiy9141jUZRFUsRBg51vo2",
  "key20": "2gSPcqjU4wx7BogygQTne9VCgUgyTbdcwSciaukaZbuQsM3YVC8HwBKfKKv2gBk4fLPFWV8KstxHPi4LQoCKGJPi",
  "key21": "5WZwqjFXfGzQU6Yr81zSjj4x9ZTjaEkMbBy9hzwfF3TSxiigCsUmfkyEKa6rqcpJV838oAyRLJtaPDvZQgkTg2x6",
  "key22": "48LWf4xELL9Go4ismcBBs5aiMYb1LxtbvSkq8J4mapv99yXR4dC4tjrbSFHpzbvHyDE2GCpSQmrh8o3VBm79s7qH",
  "key23": "3MFG6F6fBf2RmSYAUgs5cqR6YDmCZvRrjLbu6ZAQsEWAxaCjTFwqSZH92WTX2v9HWfTiQVseg3UTdwL7NvdhaF3f",
  "key24": "3cfqBjAb2t9rPrmq79QAa69HQsiNC26evXuZGEtAyN9UUo1djPkacS1QfPbDbVuSZEuF6u6HP1TsXmTavvLnsEqt",
  "key25": "33SQLzPUHXxWYQ8S19uebXVPx3xez1WrLMWRfyb4L7LgZNgdePQnhu8tRPLYGcCaPSPafT55sufNYX2HmkrftXmx",
  "key26": "5CNV68PnrgrtVCkMcfLMct2i3DPkkuNscirdTHRp9CaYKh9o4GCBJ6wc3hv7ef3znWZM8BbpAX5cznNYgpCiGf6p",
  "key27": "5nn5we6uDwABZHUGvvfWpAGvYN5fNNiSVXExWcJEa5ZEiZfYmfdGBJYhsi7czK281VebS6WMvPhKdPcq3vTWFq6x",
  "key28": "5CUi2bJ3mimXeWymHGi9fh9Xng7jYLzE8sppjqd2qYrevXg4dxoyLZ57wszXAK3V53Ab9PUe176D8wSBHhd6BrnY",
  "key29": "63KaMRMLDcy6nWhaSytJ9P6amYfSWYPJy2EDLGGEaQYwftHoebCcZ81MRX5ZffbHX41E7SuYhQ7WdpZGBknzqJvQ",
  "key30": "2TQYEZPrUkwA8yMb61znViAGknwFzgWhpQaYLtv4Ke6rvY9NXJn9otzNT9e2moHqABNEVzTcDdYvPP46F6PjgPm",
  "key31": "5VRrF3Rg4EduwTukyRGu6G6gHF8zFBcbeZ1Y9PWanjdcGxi5Q93J1NJdW43RcpTwMBrZPw2nJWrP1ku86ThKoS4o",
  "key32": "YqeNdJTjyxyMgYoxh4mGYCUXVFdJfj7nrZkhnLnoPNjDPC8BN4xWYUteUxT9BHUzkYY3p1awEjp3gxLkg62yEuw",
  "key33": "2w8n9sFNyMdrdGWpqhTPsA5kFMzS5Mr7eghSSQhJoCAtAYZfc2shpFsH9i7h5CjQU2qSTz12ctdEskpnqZMiXBfi",
  "key34": "3pPTp1PfcUASj6NRAqtTFrFU3zJcqb4xTk5FZj1MPVSMSx77yBMC6qtgezZyeWJ8a9x41vBH4L3oaQGZQNt2Q2iE",
  "key35": "3P7CYZGWuK1mP5u5zZevydaAgb2vUKFUDBoaQAqujeVed1X4MHc5E4gWz5CvbcWRcCP9rAz53modAkgwBBUR9s5B",
  "key36": "kWigwXtRiLPyZybYemajbVGc1NTjDX8Wmfd7A3uP7LxkdkQb6Rsjc67YpicK9DVR6zkSrgp137hqTMXhRcL2qrJ",
  "key37": "58k97ppogj22JM5fbAW6f9uFNBFG7Tp1Sw9E3qD2BtVqvUMTQvZhZUSV6RLK6DqKx36w7zw6nLZaKmbYizcVbEgr",
  "key38": "2kqA9uv3hZ6oUfa54PwJ6PrVdrvhBTgNuCTdtHB97TXhMSo8nCsT8zkgGGzAHiDETY5R88qnfKrNq9sokXML61mE",
  "key39": "2pLD2duFxHY1k59RssBpjf25HteHvjap6WCQS2vPd91PpCWdWxZdKZmLy6jeax6kbDv9wmJNCVAJecAy7f3NBu9w",
  "key40": "4Cf1B3CKHhfttjVWHBPzyRsw26jqEw9JrpJHuubULTFLsj8iJ1gqYgbVL8nmemRgiXRPz2kEaACxRWvZD8rWs1zr",
  "key41": "Ef8nQ7VELZZR8oUavYTmEErRzbBRhutTB1ZAVnrbkVVS8HxCdbfcqfZfBC4ZKSJUbHPYQuY4Fzf4J19Pqc8VFWx",
  "key42": "63gnFD9bJvagJ26CA6HXJ9KMjcJKcagF8nudJXwoXHNQ8Dzdm6qZHaVsu1pcMgMBT3ySfimWopcaGbjFYviJnrmE",
  "key43": "3tuL6ij84LPBwLa5RRCMPsZeui8cTDgZ9x1wRvM1SyXdXZTub1qQgND6QAXkG7mRNxjvNzxnLuoysjKfEz755R2a",
  "key44": "4E6EGwSAJTgwdLxt67fgLQnAvkYeDTudLofJK3Mv9V3xaDJGYcjSTzHwf15BZBMF1qYsaPASAtd71RjTPQrvw9iz",
  "key45": "3L2XHKtzrK6zF5AAuuyhZkrKr8EA753EpsL5Gnx5aahYSfpQwzoENpyM2oAM3rjdWF8gBqGsd4k8WegRY2rQq94k",
  "key46": "2eHrCUuuqpgsokCxPqKwRUV1CDaihAwRaTYmHg9w5q9st56V3qqvAKZeRo5u99pxrY9wTh6qk5EPRuxm4mVHnA1a"
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

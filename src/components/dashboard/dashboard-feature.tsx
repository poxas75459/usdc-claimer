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
    "2rYfHAPZMHMPG5XCYEmxicnTTtRo3P1ACuEGqA9GaAuYsHT6nPVNavfBAEBuBw8QeE4aAWDKwhoZVYMFDxU9ckND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i7hAEranfFiQS3vb1M2bAZsEnqeeav49Ga8srxJBd7Naykz9kssug7kyhmQPLtyf6v6v1b8zzR7NMLaLKbpayFz",
  "key1": "26gyw8BDxuAZrdSaZvATfEDs8dEhmzoi8i7UDte6VRgtM1nz8vLWbK8HfoJRhhhupz5QfTuYsFXxt3pnZibjizLE",
  "key2": "5HnBVwNzGoSDtPko7XNpypgjr3iiAdWyLPBHspatksbYFVZKRYoQkUEou5NuhH34sw7oqGSuZvw5C3r6PFBZU4Pn",
  "key3": "5WasqGeh62KGc6EZmiuV3ycGzNmNAmnjJioHN1abHAPv5YUpoYky7eB3t5YzfiSA9Y9cDbws6eeYYeeDqgUz6Yod",
  "key4": "3keoqar52LTyBb2h5tcarvGReD5b6bDATYbEhqLWP9d5VotuHTfRCiQvMCwfeR3qj1ctvhRdT9azqW4U7c5yeySy",
  "key5": "3Zf1Zv7z5cKt42RL24FX4npjrM6tTRrujij7SCyZNAtJjJqGykxCUyxJThC9z3E75PMhHRdkAcy8fkuSxaz2xJEn",
  "key6": "3cKRn5T6vhGy1p3aAvFJdtp1w53GCSgGXDjTfLyRL18g2ZU7PWtkWRzRFuwUiaKDuBMBUQBdkmnnLkh7pukVgk9N",
  "key7": "5ok45HvFtfDoFF2Re7kKbCiYSGX8srszchACgzBTXWVCs2TiUYUUsCCAbCRizYyyMqMymBZ85zeF9DaH5zTbEnWc",
  "key8": "zSVy42ZYuBezMExi4WKQWeoSpRTF7PrAfYDLvzRjManAxN3jFNuDJHhrhpsYpCVL2ypWovVzmDm4EHhYmHPFE5c",
  "key9": "2D2psPzG5yZb5WJKHYVQKoU5Kh4Hszes52k2tPVKHgHHBXgVtY79P4oXmGSPNnqVKoo7JtMXfnet2bBZAgxG1MRj",
  "key10": "fn7wB4KESv7HjNApiUBPMG7bfnaUeRQkmAatXL5CvPgdSrveXCtN5j42wKQx77K1Vp29PYsSqu4GThDbudH52b3",
  "key11": "59vbqz6ijcwDbdwyfiMuQedDbfCUwHRv38jKKFsiNyfzHN9DL15TZcawaFkaAoMjS1u8vDBMzkSRiU1ZaM9N2xMM",
  "key12": "4catYvgXYgPS6v6M3jeyQiz8BHyC6JkDxj96tfra2ZdVrwFzvUe14qX9bGbYgRA4HHjKK8TmMYSAAtcexc65vzin",
  "key13": "3W7nD5oZfu5VxYmwVz4wuwJXoGh7nTBsXnG39ezcZAdc4nZuatTwcF34SfF744h41jswqMW1LGBMKXBimtSBKdCs",
  "key14": "CeGgdh7e9jFrMakPsrNDhLQAtCFZCd1YBEUbRTstPg1LzMSiYyv7JCKFJf8wGiMVnv4kFb76F8cM6FpDNwbNwgf",
  "key15": "5P4HjR8yEmb1a6YQnzNuKV4QcmdiY6TaVA7j1kQaB8kjB92SJ6VcbPQMwhix1JPsoHZkzcPM8vFWguabTpqDyyJv",
  "key16": "4uMKQEVfsCdYD2pwuHLnAUtojvQy2StPfEnKYGeW5cwbDk8if4EvEzhobnyjNe5uZ783LNvAmZdjyVFtkbTfxfai",
  "key17": "54Us8an7d9wv4krVbTB6KoD2DvZzeW1fjKTtNjjmFjvZhic2pJ5v2uUZ9C7YFMiwHsgiGHcuZZvBwX6egixqq5S8",
  "key18": "zQU2LcbNSZ6kvqinWJuLtR4HdRv9VCnCsLkfbQ7SHee8aP8EK767t5e8khqAWemLJBcmutbpUcSq74AxNJsan84",
  "key19": "4GB5EdFBc1nz3z18aRVtLogfkobUDv4UvREvRJ868EhAaLZX9L7auDV6afEv4R7vyE1snxD97pkvgBTWgaHAkKNk",
  "key20": "xGJmPcraPnYvNP3vm2vb8UZoLFpZSTRWkymqRTeQsVZJJBgFQeH7wEmA5i8cyz6dBLkJ5bg6aHRtU8T5GzAx67V",
  "key21": "G3LHLiWfNACLYSUu36dGNHEScB3Mwebw4CdiarAR2cbsqgh2PrAgHRtKDfdZ51ZPnegoZfqb5d9tUkitHsUffe3",
  "key22": "3wSdsDSAPT8qdJ67Z5bk8xobZSzymdBDpzkxEJUbfnGY8gotiyHzuoug5fxVaRhKEkBZv7J73qqszg76AGAPpQJt",
  "key23": "qwG3yYXvSvRXgJRr525pAtxiSohCSCPCZnaBH73p4LQJmCVS84NLPvZmHuK8iqhj8CgEVhGwm7CkukfMKhXfxTH",
  "key24": "2edUqwm2WL1joUotTJywiAffx161AURWEscqzhxx2d5VsXNHYV3XNefCt94RKoC1Egsz1PGEAQQw2nzFdoVfvfJF",
  "key25": "CaSRS4tERN57xAcZcMDEt7byMYeS673UY8YjSWyxsH9neTmVVXMSZjo8gKXiDGzKkJq1zVfByS1Vvn65zEJkbum",
  "key26": "2UQ49fNV6LWdjTnmWHyS5Xdd4A8kYv1oCnRbTu76myqqL4GqrA3L7iCerg1pWzDcQxuwCMYWo4mrCEfP1ZPE7DJW",
  "key27": "4MurZPFv33tmHuYADaNQc5UZZJcVmBAP36rDS3g5yTNXAqBjQ1wd9tm1ddYiMJCYnKCsmH2epCenK74vAdKnhZDr",
  "key28": "3FQcJGPU5xKmVFhtCh7hMtW86rgPrRGydRRuKMzWoW2gsnaiUHgh3txULNtL86se97ktu7PDFxp4SqTnjNvTozXR",
  "key29": "dwvYAbYiuE5BCQ9EXwU7miTCCKBha74LJgVopVigsXRA7pjQqUaJ6crcMUhprKuu4wd9HX85Nx2fV73RQFCEDxo",
  "key30": "4APpcx6TY9AogecVm9JMhm3urWiwcqiwgHjeVpDDhYoHWFPXTwAPkgMQRFzagX5eGKcoTeDwhzMHR1neXkSQCiXm",
  "key31": "52Ak5CTXaqMzv38RWY67YGpBSnCnzXvBdgBriyLTUexaRBbtXNgPYXPizMhdbm5hAkXMe5UUfAsLqaGZtyjctzDA",
  "key32": "4B4SLCmbnfH3DWRHK57f9ho24rLJJ9kpaPSz6mYAWBTtDYbg6yaHvyCtvApsNWq1xhejra9sSKaiha4hrbbDmJcQ",
  "key33": "57iDEMf5rJB73AhN9Y5kmnXUqtpvGsYSvpkK6SH4ynttBqGXN8vJw32p75dKFzDDrAcm2n9gev6d17UvKyJRmHrZ",
  "key34": "3jNfs2W565oWLb37qMPgkGoetf2vNCVv8kcwTTQ8d5NPiLharDwod4Mb58VX7yxfB6ZDEX5PJzXnQCvmwcg8nSSP"
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

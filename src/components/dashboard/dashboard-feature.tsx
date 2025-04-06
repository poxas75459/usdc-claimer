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
    "3nxLtHoqKh4DgsredLzwGWx76hA2w6PpZjeFYaDoEb8gMEaDSfCtbRDGPFWnUQt7DqyMkcYqpaRAovAGaLRpX2hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r6UFKSyAuSUjFM4iv5sU5mVSspAkRcBV5amaxAufWcSvXeffGUWLEv7zE72qRcmpVxAegE4CLuAtjxdNy26ZW5a",
  "key1": "UKYoY1tvHQsFxzjDgzzM3pPu71XrHksyBTqxUduaMvjeyj1QLQ5gD1ZodX8DmHBv5sByGmQcFNeTMssv4jTvAty",
  "key2": "4BuCEzB3z7rrx7xAUdFxhudaP9uqSyyeW8HKzZnizVMmHJcobqcioWebMvKpf5pZ1wHUN4DKD5ZJ62bgkLedX2xB",
  "key3": "4kMMUo3cEd7KLYUUFzy8ojTnbntCcSTwwXxSGGnauXmAQ2ikVBerUAUToenPnk48AXrwz9HsZzzsNuNLbcjeEAT",
  "key4": "2BCKEpFEXq9sGYKuAJhUU4owVwGXhDdsxbNVX6n14YYZJ9grDCXfHrmL8gipCXv3fFFynyyPNNMcbVFjY5ZVFad7",
  "key5": "3E9jn3wcCnyJGUxe8Do3qTfCw5hvpxh3Bv2gEgjbQqopaZnm748fY6Pnw2PPXjewAPXktqhvtRZ5aGidTGJpH3iB",
  "key6": "gBUcvpNvdotkSfurG9G8haT38PATAC5ZGKiCLqdcExDgTRjZu3njWHbBZ11qC7gyHJF2vPVrcB8YP35dveyUb2B",
  "key7": "2YUbjM5d1zVnxjHVnushxVX146vHhuq9ZZaCJdF68PMY3zP4TVN6pSSTk8S1YhHyjNMwL6cC5FmKidscXUSuhFK8",
  "key8": "5yThoY6EZigjmMXXTPuKqrkEhKuDTnZ3oUTCyr6GiU1Esg8bEJY22LPA8n64gznxdhzpkuA2tSogxeEZUhRc1kJN",
  "key9": "3chjJ8Hzi4gZdFYZJgkpSAAtf85wBgMUqRrqFdG5oTfqEoK6a9HHdH3STVZksvnC5x8D6axrz581xNZhoggrhAbh",
  "key10": "4LyJhX5see3n8LDBJCWgHEcphMGYfL3WhRcgD4fHgerepdhCDxGTtxnKXwZzTWFpGvxRmUYEtJJQBjAY617SDmNH",
  "key11": "2RsCobsMHFGmxLG5vwr3h6tMRcxftgv8frw3A3UPSkDHj9AgmKoPubgG4gJuBuaYUs6hCtzqXDZ89CdS7urgAUKQ",
  "key12": "2kk44xyy3fWm79owiU1oHa5ZtVHPdTmMm4juP7wneZYEimDUeUq5KHLEgdWah9yA5q97cCRrFhXnTzVw6kkehb3P",
  "key13": "3dSNgzexoPwFdh6zVYbWBSB91hMjVtaVu7nThxCa6GC2zhtAYHDDjAYPZ7z7ufctht7C26RF93TAiznMgTMPAYXD",
  "key14": "35Z5FpF11LVr9E9fK6vTCAZcMQdm99FS1oSSpMabffQBXE86ZDK7HaRJ2566WTZxkzJRfwt8D9p5ZCfnFfMgTkuh",
  "key15": "uuuvPBp7enFco4rzCR2YrLYA96dJqJ1o62WV1GNCqLLmbkk2EGgabaHgTwGbnuUUv4s23vV9saZiy7iJ9RiNGtV",
  "key16": "47SFF4PGqHK2pvbCL45W2qxbmqtm2kmbm6iUZ5yp6zEKcwUg151atkBX79UJjCZcuyMNzd32BLKpfqjYrSBg9rxm",
  "key17": "3wRdT13cmV37TMgGSd3qaYs1pFkrS2bCai1rC2GN3oY82aUWdks8wqng92Aj7tNpHzjnjoX4ujP2GtKEwda4J2zy",
  "key18": "G7poWPvwkFFE8sARxKR5nM4P7QvtRaDr1nLGeaixyK3fmTBqDTyWGVYryTN72MCfvUv6KnPWJazQphjBZz6qjoz",
  "key19": "2MejoCacp2UTax6YNGheqirTyNqQo2RzW5sgjYBtwS1mMYChFAmvpzSj7GkGo5wLEUke26S5nBpwQTKLkH3ivZZo",
  "key20": "34eXqEvgdpCDfUaJCy2JE5oC699qXYrzScqaqQh1Pon1ETnkNtQ2pbSqdkTUFtZnid4kQisHUjmRduFtdw7cN7P5",
  "key21": "2UmES8GVqmxG72wX2Uvua5orJh421Av4VK2Q6z8LQ6FtmUtMjn28BHywSoDQiNz9RJWt9E8Ttt4fV51eaWkH3czy",
  "key22": "3nnvyqirMxkijYgxjFytGRpnuRGGvRkWToB9rvaigmaQdVqJCDjrEnpYFbXmnMms1Kx5qaU5pba6NTVh5sGcydTS",
  "key23": "4mDw99rTXrUBBHkhjfDD2cYFst28ek58tUwxt8XT7oKDwabtUQJJajoRw7TF5qKdehhKHYyRmvSoXNgmVn9CYyS3",
  "key24": "3Xia5FRqpiEDzNB1P5wG1taUFER5CFB8KiYeqX8NL1DTa3FRoVomzox9PFeVtd46pcy8nqLD2VhNmTap318RSzfF",
  "key25": "443oiPhbfrKY1uSxH7m44WmwcBNCFcn1ZaiWFyuq2HQ1X84GrphMngnDMZdpk2v6oZQrKiJpZPf7rseGYV5mYKzc",
  "key26": "jcPSz7UxzNKip4waBejVckijmqvJxSvjxc1hZ8Q4qAuj9UtmmZv7bJeCTzZWKSsnDRnprhbQQ7vLDTjQ5aoJsw9",
  "key27": "3cCLCXHtNEQvFacyfvxDReg6kcXdyeiQ7ULqynboApLQ1Ygf6H3yHPVW8oT1SzoxrvqcAq3sAkq6xAxoQRvqsPBd",
  "key28": "th6Wf7sbYFMNmWGHYWNid11wLtDcsSgPAvVVDSGHUs7pbCb3Eis7tMnhsr2JCzfidCH8N2BTRLNx1hAYBVpfo7R",
  "key29": "2e9u9pN6uK197zxFWdRKug4Fm3Ra3NRawVpBeptyx29N2Jjvw68E5fQ8LTdLQ8u4ErCPxvyqfu4pu1CsUZvk5uhb",
  "key30": "2vbUzqAVQP8yQNqMyzsxxQmJEaEkaBMkPvovfD1yi9z27w52yCTkvzPkfRxaDBDDL6NwnPWywSK8Sp3oVWP5LSZ3",
  "key31": "4irFVXCUcdA8hueoWqw1s1B9S61AgWgMLiZkfxbVwV9pFUuJdw7SMGRFyDPA9Cr7ghKJFZ5T7HmZz814MHyXTMt1",
  "key32": "44b3oEKJWLyMhyGuEDhoBgUrNyLm94JGEmH7b26agdfB8M4y17h4Ms8oknq9qNe7cmhX62FGkaMuE8aa7x65Ywqw",
  "key33": "2Q7HTiXMtqSVLcAgf7ASGY7HGHTfxmf34FcQDJr2KnGjr6vrZFbWdhetLLCCsc95NunxLjYoVocB3yRrG5VwudNC",
  "key34": "3ZGZYZysSdgfd7MGR5Fj2GHyzuspXY6phRXkmhZ89LExJxLvsq47S98ucdj9LCTxeVP2B1Jugz6Lkc66feHvEH1D",
  "key35": "3ovyymoLQ7d4VjUaewfFxdSnX2ZLrvJGh6zSStnsdHjweCV5yEFjzR45aiZHLFwssToMcBn7nCRHFZLhncPsiAYz",
  "key36": "5adCELmcvUpQhJtsbVs8erYi7ehWTQALspP2CioSQcgbjhK5iweMWkQ17d8NAP7GheZgLmST8jCA82Fm5hY7UZqT",
  "key37": "4WX86ANiXbTgdyMKo4EZ8emVwAQ2oANYsmYCPDYiykfdTq1SjRxmjXpStPprfmAb1YKYcKV53hHtBGVnPUZ2HfkG",
  "key38": "5edY5A7BDyVrV9Evj23mHMDxTCzdXr7fsY6AkepzERh2td9GtDAPtFX6nnGh6RQTGVEP2AV7dbbPTKr4VVqbBJku",
  "key39": "5fGzHfmNTbXTkXdqeTTeq5qBz6sxxap28TMnUspeVJ6Ai6cifLrhVi6mCkXKL5MMjzViM49b554JHhXQt9UmxAJF",
  "key40": "5taoiHuZ9BNCz2Mpn7fZvVpiqwhtZeKos9E8eM6XvGBGrjQgmevixjHDxkDqoNp3hw67rNt4q7ZwCNuyFVpD7wss",
  "key41": "2n7h7CwW63DMHdEBtyXHTxd3xjJPGiCcPzGpqxY1nMymBvDU2fHucv7FeERcX8xEbHcDxuNPPwj7oLb532fETfN3",
  "key42": "5UrRhRghvnEzjKbJKyU4ewqHMMQjNDs2yaHKCUmV95xXrm6M1iozd4tiLH1CdBQParkv1NYPa12MZrEX9x9Myq2B",
  "key43": "5wSEgTtvC4cumrUk33DB5JrRBDmvdZbDF6hRsp6bDno4ebJB8TbaB8LzWzGbetoj6v35ovqA6qeedM6AzkC6MXim",
  "key44": "3CusMGTgzcTzrTtzHu7CLagg9imDCmuUiVbwTMdcY6rUTLvFoaid2x6SZcMpU5fgKLhi5AnRahFy9apofwoa4Bvw",
  "key45": "59WXYRpqG51XqUFiBKGENZvPAAQKmWGEmNTmDQz2fzoEyrBUuciyLCxbmVFUCFrCHvopRyyiGYz4dyX6XpaRAqrm",
  "key46": "2tJJJGji5jRHo9mcPezZcF5zL6biY9dL643Z5hsTyThR8VHWpsYv8Pg44tiGaokgrVULNUcoYz41wa266LU18GHD",
  "key47": "2FqN7sNBBjiu52yjh38p1u3oWLKy3CB6KiBjw6EHchC3VjjmB7GE8oANy6zAiAu2F6zd2Abaiz3CHBHWsvpB9rJM"
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

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
    "42o98R2PLSmmuYWNYhnjyfnCVwnfFCmzpUnQxqf1evqrSNGCtU27wnyFE3WFWzj7JpV6B8tyrQbrQtLmDaFjs6sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qtNSq4neAzo5EppzMaDBZthgWVwDALESRkpByPubfp4tyji9HZHAJtUbe3fwuzaYBhHK6oz6y6d9iyN4fmmVVin",
  "key1": "3G1Uv2Ye7GoU3Sbnr1Kcfs8tKzSJ8zaxCQZZ4nM97DDfSvdAueZVpjdYKfDTt5MupCe48MaH8nkDj6Th9qyAT3T",
  "key2": "4aEtYqwJ8CpJ6mHVWV7NyiS1kVDUssZshNWoRkCzQn8dhV6VPm96jv7GgMWmACuZtDgcKSoZH2H8jyDPhejgDLeX",
  "key3": "ZpYVzi4V5Pu74HMzz7EGWvAbsbS5fuo1iF6ELyZ8b2w8fpzz1m7PuCgW4BYhZ8RBub5wrBxs2qiGQ7DyzHZ87ic",
  "key4": "3FNHGDJrKsTbSVZ1CAwSXsH385bPwPvTabH2CPVSUQk19igKnheK9aGfSHshDPX7dn4XHDdpxesKhZ86aR7ov29a",
  "key5": "59Q5Lv5Y1BkTFhyKLePMo2JXdo3wMRVh7M2fhFJrow3uF2thdPqUMKAqZtTRnLxtRLaijAEqVVQ2YL4zn3ZKu21A",
  "key6": "21w9PYkHQNwJEK1HUpCoZcKbsj14tjQCFZfURAM6zvdExMWcRHDq855oKqrqnuZUPNSJE7yLGVZLePYxfbdBfog3",
  "key7": "5sy6rZsc8JaQEFb7LEMnQzBCUYdQY1XDWDeTEFnwrGnhVqezyZ2r8tb4ABB5StBnnwjLiiN4wGyWwZFM9AMFFTYh",
  "key8": "Skyd6bGsLnmS9h44voKtmph5Pd7fKzXDRMKTGNY7ULwJig1rTFtnzLHvLigtpjGjk9feQYwUSWmsQt3YvgoHKrv",
  "key9": "2Hr1Wjaxzs45EZttJSKh1odTydvApF4pAz9F2ssAZHXKe1AbnxqinubFEnUYjg9JZB7ogL6HNJWTZuCXUbL47nxP",
  "key10": "2Tj1HosDMzSuXf7dese1aD92p4C7zhLwNGxLQN4UUmSzULNqmmJvmdFjfmSGEQLBGjKGJHbWaxbPr1TZAppRxx4R",
  "key11": "1TMxjcsQAAytTbSbCyjNbLYNQFH6ECET6skYUhsQ5NhNaD56FGRLffUayLz26jk6fHduE1S3qEogAyDoKyjXHhV",
  "key12": "4um6BLpp7ZnaRZeCjtVqUTT2ZZdLsZiNseRQRJ1G5rdsDghnaysNr6NmAPtXR6Kd8QNMdxN73GgkLmeZ99jYnX6L",
  "key13": "3TGdcuNv9JdwPsGdJA5Dnuy8dDiugWuHsjYN2LBSqDpGkebqobApAouy49QMFd8R9475pG1rxe9842PKvVnFmN3h",
  "key14": "27csHRq5GfLFQzeNbFdie1qX7inTzDhnhS2otgrfq3aLHa1cjhx2Dj6Eu5NupzHSaQ6CrNM8zBJ2zxDUW9PoJVDg",
  "key15": "2E1bE3T7tw4tbVQZt9J9zKxZgK7TJHgzv1iYMrSxGYj1tPV7kUy85jLakJv8wo86ZQHwij1vjA1uGyLSU3q7YJig",
  "key16": "2xgmyDHrtvaAqQBkaUDmrLSmd26kZHDCoMdgC4kuvSdaPYtYzmRSVUWVyWUermHHjW7Tma7G5XLZNe992dV7VNgP",
  "key17": "3ctzhCKsCtSpZFB2gTAtzz2jM479kJT6GQpdtZS19AqRJiZKV2fNBEfvj3hX3jkBHJUcJp45ThuYbXuLyMBWHmVM",
  "key18": "bGjwygwcKi8dDhi3rm8Z59R9tpgViKVS5HotCVE2bZmRYv4wXHEZZydWqfQhAXz222L14uvt69FNjLQzrhpYUGs",
  "key19": "2XpYfVQwMNcayQ7RdSuzhAbHaMRrpy9V7YowBpGeWM1jTYuroy3AuuJw3aEm3FKYDanEwwA91iEojy6hhgKoqYgr",
  "key20": "3oupcjuYkNACVtpvvB743tVquLSvPCVwAPP37na8QoPGyQU9LMepJEJfjeTudiWzWtJpdeEvKsJbEAyDtRvo4wAA",
  "key21": "4zp4fFaRHiqFqyTHFnaGnz477GEcnUhaQ9YS2q6QPDTuCNW3y5tuLZTKiJZQksYs3zwUyyJA6BoQo47SvijoDbSn",
  "key22": "4Ex7VS7EVqQzMdc1BJUjr4SY67RzR34Dj7YZoVwcdoKJpg94WedgSaZiQ46DiJCs2CP8RgNacyrJmuBitRnyGkTr",
  "key23": "3QmnLbX9r7qqaC5VQaAMkZZvVTGEvQ2iwDMTh2FZ9WtEDcU3okkA2NCftHyZPF6VwV9VYSN6RSDD4JTGGJDEHPpJ",
  "key24": "2RoYkZ37c1bSxPb2sjhWuT7ggkHuKPH3quB5ARe391B9XayvrZnEfopdHrMdeXevrvaUjpfw2VZhV1odjUkoj1SD",
  "key25": "z8kDWy4YT8czWCvqviK24ZThAqwyzsReMAxvGvosQSPdXBcTA26CJLK8Vqomw8zgGZi6WVnRkKAYq4pbnvLSAj8",
  "key26": "Cr4FzmBQonYfXe9U26goBLYM7bHQjYWAAJGgRovGdGp9L8zEVxPgxtBtS5KUpaYqQqiinXuzxP5aVHWLeY9nWE5",
  "key27": "3G8FiH4aCo5HRGNu7MqaVCEWFhZEiUtARi8ixz7WydDbNAKM2wRzSSCz8MghRmsuX8m5L22Y8JTkmBYRB7889SJ9",
  "key28": "3Ae8ZtKr8dzkQ4D2MJNRQZnFEmZ7Gk8xb1peGwicvnZoWsWamY4szfj1aWewDMaWgg3xRHi6L4yBDWD6R1A8PdiU",
  "key29": "3JPstCf6Qo8JjZVzoSyZfcnmGwJKtKaNVcP4HY4cvtwm6NKgXSHLEZhqyBf9WW11511AnCeqjiyFsDU87dobD2sN",
  "key30": "2n6GxoymuDepoueJLjYEJ4ZJiNjMVDFzvqbD9s1DfCi1YwyFmza5CLWbKMyXnF5G3HDJ92cSzSTCDQH9ojCTpdFQ",
  "key31": "2diWUck8m3uMCfpNuehx6q9LNFByc6ysm9pBFAGtDouk67UkGHkQJ9QxtCDGJ7meZxvAxHwELKW7nJcgnieR67sW",
  "key32": "2KgEQn5vbKC16126xQFyEBeCmw2oefK4iExyyydcvxaFmJPLe5vZy2SmkTVLbiDJMpt3FR6ADaDCdWBDP2ekuKTt",
  "key33": "57L5SEhf7xPeN2gzn3SbZ1VefDeJz4TbjG3b3h1gwpWC5fVrBQj1GqAS8hSjeH9cMpmnuWnYdaJtSJ7eDqYL84di",
  "key34": "5iPQaC3ttfe1qiK6iKaZWKzE8UuWVYy861XsPcRmm9s7f1XafQCcApodx6HN7o3zrLBPc8iX4fAyp5sCRo2aLHik",
  "key35": "aFqeYyEJmL7wNgpvAkg1X8ivGj6wyYX7euG9LFmPkYadZog5kfHxpAmNqG2nHfqSWG26nXrPTQByngTHVFARNYS",
  "key36": "4PogrRaGgxDRKMkM2DVa2izZ49tEU6S4qCRGaTCyMnqQyUdJc5osoJmFH3tNWevSBTCZmnUkYHDKZrF5QPiZVaK7",
  "key37": "5Fb8HvvZAmXoQdKA8tGCDkL1WKz13ibMUzW8n3UrMTh351ivuJ3DimJd3uss2Li7HEsmrzb1tzQF3KSm3u4VGsSV",
  "key38": "4wnY5N66uNjT1xtJmEc3no5os6vx7uRD8QGirVvFWenqYsxr8u58Ghz2i4pFZMesf4S6yRHK4h8rwezieQBV9tMc",
  "key39": "2i4fwWsgq1jWh2Rpn51ouJmpbgGVJjCPRU2dw8PCa38xnwojufoZZkt8fkp1gYN1uQuQHYK1rTF1F1xWnDjorWpg",
  "key40": "ohmFQxeN8ADsYVLB192WvtuGEEAqPZVRfs19oERevrD4ERZxLpVCDaXFrzhnhNVeqHy2ps8atg5PPJTRXYP6Zei",
  "key41": "33uMtPg4Fc3FVRaqFAnia3Sg4XJaBjby21G1ytSh2nrzF6m8DpqXLUyc6ft6rn5bqoDZbJGEKPVsWfVBcor1ViXR",
  "key42": "5wfmYA6R4co1XNDGq1QxKT69aXQxTQFhxP9kctYPEJkgcmFYi5yevwLDRKFXx3uKW6bK2NfZV32wpGpY9Q4E6w8x",
  "key43": "3BxnYYJ5ssHFFcE6QGviczar2k49GyJifkhb43SmzQWtPQN8q7Mwe6a7FEixXBfjXP7zT8Sgx3Fe7c3E3Cphxt3p",
  "key44": "4Snj5F6ikezKcNcVxKwwwAUZi49cfnppF2ETLRB5DuzNXhSF8p64u3iKjtJE2LRzXRmzp66ejji9BsosKBCABxxZ",
  "key45": "2nUCoMwhPbRpidsYucvTcTkknCHNGZXQGuNLs83oAZ4woTXj8d6LtEB18o2Q36AK5QgPwvhmcgiWkE88w72wJAU9",
  "key46": "4UdVzi4MsDBNkrxr3DiHxS7kHK6EYwBAKrJdHTJRx4EbceFqWekXonA8qDhb5QP258pm1qgAXSW3KFP2Z4vWQiev",
  "key47": "4D8BngiMg3CeTJNE8Z8xF6MMXCgNAu814LpL54pnpuWJuH4Fd3tr8DsVwXPPNzf4GC34VFswvU4qgEigzWisMCPQ"
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

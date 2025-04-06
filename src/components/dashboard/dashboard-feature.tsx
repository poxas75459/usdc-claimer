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
    "4TyBuyuPxcfG5wWSj4bD4gsKJ4JgHoUbzp8dFN5UAurKRifebeL8LMDepDArPNkLgL4YscpiveEfZ9BscNPqnjp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEb8TaACEtUC2uoDG7Hm7r8socHiKg9nnHVzJEGekBxKkdrSBEvdBMbknBowGhPXXZ5tbPMtpHDYGmqgotcHKfk",
  "key1": "5ycgkobNBnZ1tHFQQWD8Vz5uhTV2QvQXeSjH5mr9wvnL6Zp85rzBqcg6SeeeNPVnbAirqyoZersv2xGodr6Unpf4",
  "key2": "KQquX1rAK2FhKPeytZfqtzQMRQ4V4piUhd8Vn2zfagTXpbHfCgsyumvAgaxFPvBPHtQdqvpMYqouExFDV3xo3XG",
  "key3": "5HbLrJxjtudEzFPiPs32kwp5nbzU6GiX2WyRC2oep5Zywh9ec5TdBBL5LrPe4T4V249n7jr9weFPDAujqQfuaoGW",
  "key4": "2mn5rMcMxfTmPTFtCB289TbiXa54UxqPwfHmtF7vuwZX6Q2nsJUkRDtpo13EftKu9sqBedJoTHDVf3NmATbLBmVi",
  "key5": "8ePYD37R8X8d91nRtYp2iDd25MzVQx4chJ1WRMhVst3HJG9zRWwrTeBzRfoBd2kRi7hdeTmcjmsB5R3jcrsmA4W",
  "key6": "34vLd567rPUKaf2E87PhmyGB97NWxXKMd5D1WedZ9rPhTzdK1E31MgWqv9GxrGzwRssWdmZBmES2v6tATvNP2AJy",
  "key7": "42c8bTLML163oKPij8mb3TXp7dbTrCiCjeqy1LeAY8roLnN5z7va3KUMWpxKuG1PtfmGz2MmfH5T5hYhLqR5ku7A",
  "key8": "5Cxqnq4GcPN7iJfmhNjJQgKDKGgJ4hotLJiXNPV5egHGyc6P5SAnSLiqYEcbC7N7Ydo88ShhJu2LSKWrHBCg5rUx",
  "key9": "uBjJNUX2i6q2CkU6gTYJqtEx8TdaKRWVsyqSnxrw6mQ9J7P9XnqiTXH34C84yBmYeYzuPL2T13gibYVtg2AvjD6",
  "key10": "2X4qVWd8ttMcKpVZ7qn1TJJjCELKdEBz3nvmNhshVAi4iLD5u3TovSapqKtSG6QWZ38aJHgq8ZHakmNuAWdAcCDK",
  "key11": "5Md9dZvbhadLGGTkQi4yafmviCGgTdXRGUt1cZNGY9ioMRkBVTzucE2SyKa613kSMgH8jocQGidDaHw6UZqe8Ze1",
  "key12": "2UeKmQQ3ab4hoUMXZTdmw91rg79wPgVkjrU2CXZdax3CsqB75pzzwhedqZsQABrfo5oqbmZ6wsspbhVm8Yuqc63",
  "key13": "mv4AHx8FP5nT8q746bLUhMZ9UQPziFC7yjnvxoco81MThJdxDidQWhvboSe7gB76okkFuEEnJnLrKJntDhQXyaD",
  "key14": "sSi8nUGGX2e8jtYX5ztgAsvUeUEEWiuu4yj9KcdULgBnDkSrsmkskQfMMCoCNh4JRPEnRCQYG1PtgRnKoBcFpvo",
  "key15": "4Luorsc3C2rFnMbgc3PBKuFT3gWrXcPvx5a3FoMnM67bqyDvzu9t6wtTXifejYiLXHomKW5D7t73F7YPH7oJ4c3X",
  "key16": "5R5XthUsYtQ8zNyrF6CMZdyDditrzoWeptzuZQAF7o31piQtLEJSBDp7P7YG9C9G2gnRfbmBFT6bYuTpdcSeUR5A",
  "key17": "3Csooe3ZWPN4QNSdBFY34fq7PvrwYfY8BpcyFMYUB72rLrMK1DiT5gGV4k3SMp1KoU8NobcZKHZLhFUYcx26c4H5",
  "key18": "584qGAvJh9fAAc7swiCYd32AsqvnHpPWZQ6ydhhnohwi1mjXKf47duuQygT4YqG8Bp1PmREzyzfwQpd3NBtENPkP",
  "key19": "5dMSiXpEfT9HKqSrr92CPui57nYDgwbYWiVikCucLCkUtX7EKDdXnsmVcKcrbZVfXznKmfXZvteYfcQdQ6VAXhio",
  "key20": "4hHPMVXarWiYf6DpnuTsTSeWF1c3KoSwMMmVisEpwTauhQh3ynHHGdtSUkmpNPeebt95Co8LvzBAMvXETeALvMjS",
  "key21": "3kyKJbsriHLMvxej3H2QKygax9sEmzSD1ZwVXdwR2xddUH81vf1oYhYupZR1bd8SBjmQ9p6h718eR6XUBa7vikBV",
  "key22": "2h2EtjeVUYxYgboC44wcvm7Ai6ns9SMx65gE6piMcint6Roq9QsSaaAZahNo5SMk16EbrqkpsyFXoaW7SJnPGhqk",
  "key23": "2YPVHGJ3m3xSjZTfH5wLPfKe4KCFbdYr85TSzGgLmPyiMSmEy7AGjvQkxhoJap8KSJT7GbuWpqygjdzmXEvfnfi",
  "key24": "57dxHi87LZCDu4aXnVRUBgwtNkJ2v7qGxx2dFkj335tsmJdtdJHao91TQMTqARqpJovcBuz2xE6AdKDMiofrza2R",
  "key25": "2jWrUe17JKKNmRtknmezvu96ejeAsK8fCX6EKspN5sBXFfcC4BJ1Eo5pAAZyB4L99Z6Mon7vDFyENrJ88doamu59",
  "key26": "55BMMnSrpYXH2oMtA8irWkwHFWsMaufNswHaWYmVhNWDCzB7yvFZyUF4QqrjPq7ePReGJ5nbrEksHgq6Wt9GwWzJ",
  "key27": "2RQckUdjR72fjQhEdQZqgSUBYbnQZ8txHLK5tyT5pq5qKgGeMJ9q5tk6QWvWLvgPZ8fxGZYE83yDByWdXfMYxxnz",
  "key28": "4GoLjGGxrP6ZyeNyCRfd8z8dPVPuMBzzkwUkmoQEBfzy8ifvPBRWYsmJPnPWrFZC7FPupy9aEqWgxTiGHNDnEANm",
  "key29": "3GMFThfHaw163xpdEKFHJeeLv3S5mL82CtNzrV9sRrnCXbK3PcQcAZLFrAz5RsE6wEzUmoro4vdDoMcYsBem4jtf",
  "key30": "2agX54JGyXoMQ1maqCKSFZFZwiELH2oGJ9Ny8N3KxCpZusWumoQqBFfDnMuqtaUvkksi7kwYV3y6HdWdBrTJy3t7",
  "key31": "3aA5CHwFbuo9psJ8bVU5taZTfU4pPsPdd6NexU1xLJCdL5wVniRwyq4YYPuWeZXUEEJWqXp1JAKNQaA1UDeSKwLH",
  "key32": "3SZtuRMCC1yCJnp6WcwfrbfPVGgYZkGC8NNvgvFFpqK2QfCyRFPrXwAm2yzitj5sMaDv6ePypx2DwemDqJ6Gg9cM",
  "key33": "BbP6RsJ8181mxL4DjTmZfuDGN3yekFiJCbfp4VawrtcmWZzjNdVvnTrm1ycd9JrYSBMyfSJ2v2MP3AcV4TmMDuV",
  "key34": "5rvLf7GDmxFgjJAmver9Bwj4bF6MhQBwTUm2TPergxWS9gz65yLPwZA7mpUKjdd3ezMJQMWTs3Vrz2mgtXTC8wcf",
  "key35": "2aUvU9pYpyxCuarm3yy4FWqoE7fduhjDcgHZXmDPMdB6CqSLTkLfD33zcEaGMbLfunazR4SubkgFmhPDgrGCeWwU",
  "key36": "3szHmV8Z4EE2MhQ66gVgjChNFWDp2eavmHprFGPbRDfvFrmPGkiYX3JiAusuzMxb7FdEL3ybrce1MwE2JnVPqbwT",
  "key37": "5qDW11jqePz22svfbZsJSQbqwbkDpkcaXDtXeNAFvickn9PaUBruJqWWEQGDL6yheq4Tbz5GpEfe6gMQMPu9vyfC",
  "key38": "3yymoBMo8C1QdXqG6pAJcRaM5NYkNTNNKggPpw6B4ZSUMN8M67AgshmieSRdSH8tjWpeqrMsszrJprv1QBgDtn7g",
  "key39": "WxSZoyccDQ3yPXLhv8kDyQqQEkVqvgoD7N8GrESZjaxaPVW8DuK9kcPRjbnPPoE3giuooimXypMMU1mS8NbDLyZ",
  "key40": "5oLVaqesjR4ZmfL9fexhV55s3WmokkSHiiPem8tduJtz6StyyhPkdXjJmLkgPwWM4z2oPuKLFyfvSJBDHe1MVGDx",
  "key41": "3oPfpMCr5hmJxwUqQd6byae59fr5k9xjpAj41yQEGSb46HEbrfB4zb27WZQmoZwAPMxkfYnziMi372MYJP33wBd2",
  "key42": "2DTp6PoriWHVaopf4F1GaVDRfg547mi3MFDBMeuzKwGxg6xLXLDXBEWs5A2kFhuYAadtEHwBvW7CoS1gEB2bDpxo",
  "key43": "5nHNy53vPP9Mn3i2QpZYMxR82sVmPYH3n7d2FgBCwoHJJmtPVDVtTH2W7AhfRMtaU4tUsEwdpdwrpQkBjW5b7wm",
  "key44": "5wfmZsazhWHG4GvEjU6rMfA2teb4xa4qu9Lt9Kruw6hvant1tzmtPnjqRRXaYztRPh82fUooPCRnczFWfrPYjLC8",
  "key45": "3qwscsg3ckNaZmmZBpYNj1KQMo4fFume5iCiQQmKeDeoqLq6yPufAnEbQ3mZwkwiGrrMHG29mYj62bqu8XexVPwY",
  "key46": "59ZpUJZxAGXKjvpCSeVoLs2ow9e4HPfSXC3KZgVyJ96wZQWaLJXQKYzUHq41zv5c9grPBsww33vvuVUgyPVeDoJb",
  "key47": "uXeaHT12mzBUXwUTZRT9wsqEBw8SuC7JsuuaojaYCUnUQUKPFuBT1qWj8X1xK742VgmL36Gd1gEhDgUDb3p2dzy"
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

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
    "7bdz5mvYmNdW12ZZh7H3gCtFKt5fLW8BE99k8sCUQZ6cSWrtFMWfjgYqnGWMtZxP8rNBgtxYY9hBgjxhVQkPyet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AxkiUbwt1kncKoj2cbYvpbPz14i5WzMvxjHDZGP4eow7LiW5TKG6y8CuyCp3UcFXtfksf2QnF8zezk8QZR9KDNv",
  "key1": "CsbjTQHBgwf9MBJgUYFoCKeUyDGvap36MFtGWdQV2qBkx2R9wQUzHfYvZsn2akyPAhfkZxE9WMGv9Y216hcF5QG",
  "key2": "21GtCYnnsjX6arqgqySwVBV7NA4WPU27uVUUSRtNLEsnsjXGvwA4TyRizFUpdnVayFLDHeW97KDy2FA8P5VcJpvk",
  "key3": "5E7GofPZSnCA9aBP3XwLQEZGWqEs1Y5M2p15ksdnfoq5epxwtVM5Z3Xw818t8dYtQVTbNPSKqg5EVkDUNNWiMreD",
  "key4": "Evjz4EC6mYu1e1YkCB7V9mZURaZKiJCsDcKLGUdopuG1vP4F8jkMXvTfngasdL3L2pmnHZy3zptmHrNCU2pbJo3",
  "key5": "3dgDZqeZaT7iAMWCRpJ1q4eRz7Jsn66LroRHMDWRpS9zmNRpUwu55VtUuEMfsFsAtHvfZkwwsu5Z5G4UQxNvimn4",
  "key6": "4TZ6CCzCLa5VSmQChrutQCLXZRMTi97sEw1xJ7U44GqmvkvApP3u8rs1NMMqQfA3Ax76GQ4rYuJEe57NwR1pDWrd",
  "key7": "23JeBHxwqq6WN9qNDBvyRWz3LtdnJjCJppVtfxdR4YhjHu8Zm3HCXns8Wt1pMqbhHmLJ95Hxn8aHDuRR8arZmDU4",
  "key8": "5j3Yh5nGdNb5afhX3JCsBrXca7FtNmu2cqKNGPNodpyPqM1N7RxoHR2e8AXandr4ex7GDhYXZJgECKSzRkTFxq1H",
  "key9": "3DAbjrjCHjo3sG952kQi9AYGggraJbjX1cSFezivn7MxncDWqaj25ZD16SFZwtEEBGtmA7dGNcF4Z33VwCe4UK53",
  "key10": "KTQcwT1HZMPwu8RAvfLFoGxcjwRfwhb4Zwqm7pSgHNqjHZFcDuDkpNBhups2HcPYsogUfKGbG7go12axPKcMBua",
  "key11": "4nKs7FGDbNnopPwdSqs4oifxRvzoWWBaLYiMyBmgDJxsPPdQSDxyV9gcEd7JdbbfakrZ9t2DDP9S4ZgsNsqRdHa",
  "key12": "4Dwi5exJ7RQPxSnewvVP5hA5W9QCBrnR9SqeB6vgBekZdEYSgLVmAdnTXPMMc3B5fwjRquoSFdaCbYjBfLAwdAug",
  "key13": "3LjXv1pC3fQB7XhXHdL82VLq5BWNbHAV3sW5EbgnubwqXcfyGLgGRF4iTVi6456mf2XRzdagarcNSVHzrNtFMs3e",
  "key14": "4F8dXLjkSENzAsMaRyZBGxyecLUBByiyNdnES9oYoYSUVt5MFXchPaVhYoGEogMjKA7C7bYjNBMcBLXV7jSdG1VM",
  "key15": "29GnrGEg7iApsrFQ7kseg8HSMM27zNxJCSYySvDaNyV2SmvWxm5HEU3B77jbbDFFnqhkck6CRrJNMmhRfMGtxEzc",
  "key16": "5w7biyvkbHByVsytgReiZB366xX11rGBU9XA1NYrfL24LHNkjs7gqKYEMrbqaBxeyPur1rFgAUow1b95hj6hnKFo",
  "key17": "NY82kcf28fT8jn6uwcRLpAwhoHbMeD6bmhYB84kCQYYnRg7f9Ke6Bth4iLhivrjPc32ag6pkqB4mJ6MkcB5AiEH",
  "key18": "5eNW3U5L7oYKQ2ozfnwJUpNLvKne23HVzRtMWcA88q8E8thUtNq4K9hKRiEBjKqWdMBpZNVkq9P4yuQSEk7DqnaB",
  "key19": "oae92mVB53gkrpdV6KRBfAd4R2FvsiMPcYrLKCheYdzWeUEf2f4nG5J59WeZGv7iRUT8q7ZHXCmz8jNhiBE1F7W",
  "key20": "4hX735oqFWUBUUFHxGsPMg1Zu93RdPtTYJ95EndmVHU8vA5xEoiyT7S1Xk887Qcg6i4Qn2KygMe3xD8ZeVwCS5jd",
  "key21": "2hcQddS5uu1vra5fTATcVVEMXmbyUKeB6aEXrNYNvdZv24A44PYEZMHRPJVWp6zBsKYXkSLnAE9ui5jBZUpEJG2J",
  "key22": "5vw4etuoq9tD37nSuDFfrYXrcgDJJBZoxAxS8ECKNvWN9pEByf3ET4irv1Jy3au8wjKvG8pgoamUGFREWugoqA8y",
  "key23": "4kZcuzYSTC4eC6N7fCcZXd5uysCnk94urKJtW1Qd8yShTT3dsuukoZeZh2k2yCgtc2WcBuPGPxGP8hznrAc46gRL",
  "key24": "2XbjF8tYjpm9rYjXmeJt3betXSN6BGGh1FnN6PKxmBoJxUfcohUoJU515z7r8e2qA1wSCNPaGCQqoJDxQtRCVcvd",
  "key25": "2F1j4jv3UJzP8tR4VJnz2xnsuS2CXzuwTFjkUQxL3sfFHpm8n1ixuNaHhBp2bBm53VeDV5cqhGE9oZDxfhp5Lgqy",
  "key26": "6knJ6TbZENJLRsHrqQEwWzsERYLJkrJDHg716TRv3rqT7ZC3JMVjX7Ej5T3wRNr5Eb2DTXkH5p6SWkrjUjmUZCn",
  "key27": "65CXmEPMQCCmBH96gJZwuwsSTyQSumABEXWCTee2mton8PBXqvkbLTXVEFXP7rn52arwfd3PgYoEJ96KVakzC8yb",
  "key28": "2yfgwem58Xu3qTJn1GiUm3QwvseVa9vyNFZ9Vw6KmwmbZJ7T7WR8b85dkLhhJh3ZYmSqzbESEr8fY1A4VghPm6Z9",
  "key29": "5643imTjQ1bE7u4KfZ9bF6WGYv91TLDFDXQUfLxH4Rvd37tMutnyhXAUY2RGqcpEzymGVJGnbzwxE4rkrMAW9k5N",
  "key30": "56VFVRtweuLXkyjQVGdthC8J2zpDoptsbpYFwo5Qzwbynx4Wf3eye5FaMzoHBuLPSiAX7YSsGLJS6eCpPxG5dM7L",
  "key31": "5oiH7PWE1C7UjqRWRnLAS8ntcA3psDuraSZazAxLPUBSrjrqnvuYzAiKsGc3NiS1gpVsML6muNAMTWETSksqMmyr",
  "key32": "2cmyHC4CrRi8R8X6rQ4RfY1yUingM1YYWJF7GLtHYLHnbV84puB4xjh2iwZttdw4ve2JDyKpjvvJLHUhZSYpw64v",
  "key33": "2X2wg4CCGMzBCaFxz8wcf1YsXuE8XqYbkjoNrhGtKfT5YCUBR2MffdJMRXyfCxU8ibhDS5K2hi4hV5EcaN7Hrnnv",
  "key34": "29Ssc4PA7jyc3BzAatxPpchVcznatR35kVoB5dvLTtPJApriiHtUfEWWMUh6wDZ8b7YF4ie6G18nuyoAx8eFYRRw",
  "key35": "2pVmt1D9NKrtinQJPWH1n6ak18n5BRSQ9u4BqTdrpfps6ZVoakKCHphz8h9eFxL2pXG9N7r4Expr7FASR8GQ9k8P",
  "key36": "37Bawkv3zLjAJ7LB6E2bu5dpPFxqLM2iuQ1wPpCVdzKwcmBN2z1aJQwsra2BXWvZnqV5JzR79YMQyDDZBXXPk2D",
  "key37": "5n5g54rPmRnid9aaK9SfF9STw4bwnUG3MSehQuC7DPAmKsyynCnNLddsH22YoEV52YfwPdZk1jXzfELXQLgrcx9P",
  "key38": "4rLoLY9HWXpKwxt6x9ADcC2YjT7rzPQnRL4yg6cKGHWSQKCdJwyUJPFTkyTysNb2yRanTr9VPCTggYP33TnrcZMF",
  "key39": "3dscZXQHWQA7PMHq4oUUJo4moizE78kUt3QdwDcuNUx8Yo53GBUVDkpsj7PKa53FavwbXCse8kpPiSG9jdxyy34T",
  "key40": "DF6YKWZzGmMtW6MG6jNUFJ9uzy6B7dgrU3tfxvy1ivGBRiasbVuFtzoUMTUW5uMtQfd7NHmfNZ712U5BpJeACbf",
  "key41": "4b3yPxiEuGAZZsvSXjeRqYhvzBXR33apGWWTHJBNK185uup2gaw77Pr6KTScnxQwexbDHc7Zy387RHWNP5DX6HfN",
  "key42": "4yYcWhNe2ccxupEEyrSF5RfQECt9ZAnzpyVeozExsxHas5MNMknjbeUELwk3opAiLpUMaz8CLFDWNdGFK9Lbo6ec"
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

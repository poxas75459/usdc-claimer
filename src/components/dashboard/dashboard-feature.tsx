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
    "3JBNE8Je6bedYRyh1Z394Ebw7P7vpcX4qdR3Zw4d1VahqQQcJWV3y6LTGGH6cain77KKxRsBdBVSqdNPdZ67DLk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nAKD76p47AaCgh1WcA9ZxvDmtTqTze9i7XXvRLYqeC244NCjqm37J8QWW9keTHUDPW5yM4ZvNnTENGbrDrUxFbi",
  "key1": "41GQzDqM9vdvq1cDFtQX6WLdsDtHknUDfpyRhZfY3uKwqgfacJ58rqGejPvJBb5CHGqsPYzh8HzqUQzVQMTk5x2q",
  "key2": "3Mz3gd8q8hTuW5sEmqBXPzhJVwAEnTFmywjnQQTieRYxugRzxYPvNdebMTHzkLAtNEShZxU46w2QQHGZFBjFeKyo",
  "key3": "51y8hmWywngYrVswysBN3WogpfdcZjuy17kB8XJRfEH6sRK4LmHnaaeHgseGus1uH4MYuV9ooXgxEnZmrWZeLzVX",
  "key4": "2rD4sABCu8XyCa7cRdRqhUucgGuZpQCKjo1tND1hhnVZ1gCvJt7rZNzKSrSt9n8hJpXk5X2iKQwmXz7oDk63mS8i",
  "key5": "4466brSKQDmWSE6TWSYJ61FLNiRr3jr13xU29wLTxyeYpxBkbRtjnDTPh8oVXeAysNGzkkmrdMSNJ9j8SZG6abtS",
  "key6": "3VmkrWGZ7LXjDqfP79pBGcprrqkboCwfWazDjg7P5LHggoRp21789UpxNtYHkmzCkTvxwDGi28WYGQ1dRnuECCwo",
  "key7": "3Zx8rcf78FwBzQ8eca7e159GCkunuwSWaTDVyEotdsbHe7QWuKZJB1rmhu9xXzyReF4vF2b4QvyqP1d2D9inXRRD",
  "key8": "3CMJsBoaUgWY7w7R54VHWsBnFao82kam3wQffDg5YhGa9zwgzS3UfkG3jRMA7e5DbfSGsuSD76j1cSVJF7mgLzGz",
  "key9": "3DVMT3BWBL8USir6B82P97tgPJB5VnBAcj3f3YK2BL9vYehrPhaxn2ofqTvL8C28KtCyfJnWFGYE92eWKbViJB3y",
  "key10": "48sea7TMETi3YAW13FUkkAWuC7AJ9kGgKjZ285gUaFdKFmJghPYcGSV7hsWdoArjBb3DP9mPDLXeLqzxNxRqpMs7",
  "key11": "WMiAJ8d1SGXxn1HfcVqsw1A2qR9BTd6DukR6bJxACuzep84FRgzEjxchYKxbG2DosJqNdXGnNhxLJ2vwHZ6SKPw",
  "key12": "2kzToaCCrYwxfXA12EU6q4CbbEVUP5oH6TmwBCpRPQhZmAKioAUo322F57S5jErPJJ8P4i2VVKSwRQSTCfgXs1cD",
  "key13": "5gBzsm1SoeyCVAAWsV39wCZLsFdtLED8LTrVGhoxNV67Uumrky3tw4L1B18NXh15tu5EHor5XviSJDmz9h5y8VLB",
  "key14": "4eBwDddeWZYjMQFxYyEnJJFdfc9Sn9qbRMU1yj2CPc6nTW9AMyuHVTh8obddezK4opaXFYJd73GHfXYu4pbHbMzt",
  "key15": "4HYsBc3sjGKmYAYdokc3gnZ53pqfsrNZB9G7PA9ARAGKKz3S79dWBf1vnzYmZspxg5j57KuZkjgWSuGaPg6w9AtV",
  "key16": "66JqfGnLJ3FofxSL5vdc4VqBfXVJqmnpBXm29aZBw1yY4eo6MR5RGcyy3GvPtxWRmssAMXykJVXzm2D7veod9B7k",
  "key17": "4PwsfgUx7yb2RDMhqQsxZx9gzAt5iSFo427L74kityauY4bvxDLruwmkFEXEATN4QYruKkDpPLZX7A7nWkBAMeR2",
  "key18": "5VCAGKKhPnp2SxxpvR4icvonVoLedvWXHhB9v5eA8Q2DZNnLvzbcDunAGiwLX53fnykPXHLizA9wcMoAJiwQbHaY",
  "key19": "28a5iHGs76W9LQ2Uwh7cNK2tauMr2uZqaC4xWH1KWNaxEEySjX4JtQ49rb9PgEmJTSARoU2okpuGWZXktu7YSg56",
  "key20": "5GgZdzzQwsE7EHMzzmSJ3BD5sjBCuLWZ67iq9KT7gFzt1EReFr999WCu8NYkXH6WM7HxFeu6JCRBkpo1zzo1GeNj",
  "key21": "5gZePWskQjNwQj3dsShaWGWfZRPA4XEPknYqUSPkgWuhnUk6evC1S3WHQhUWWuUupHVhT59Pis982qLUSXiU5Xfv",
  "key22": "7dFtF9yHEqR7GRWuWLyv3TbNY471ubDKR9BbcuNxwvHPYPKJjhMxJ5UEebCazG5UYL8FrXTgysPkmCgTKGd3a9Z",
  "key23": "4Dxuq61LcfUpbVocmgneyqU9b5Nrfuuf4DBifRHKCPG3yx4XQsS2T9cMEqmyiLu7czUMmg4S9RUtGyKBCNmmRiTj",
  "key24": "42wFBRSTeVEQ1CmDQ9QJgfNAPwpG6zNP1A9gHTawmDVFt5kev3TpKwxbQd7kXCLDkD4o8crpyouJhuStENQ2ndMH",
  "key25": "5boXPS67qrxoNuoer87RgW1Yq6ft6XqMp2FvESE3Bjd1rGbJpaSLm7dvogDV7J1QNkUaZq7f7xXzBdtaAaZ9519D",
  "key26": "5aA4JCYYbpVuVrLahtBgV4wMnso4KJ6FLrZihotTyssRrXkEKhBM2Vn23Q6X1Rh88fUoVbjr3bCKNjLad11JiDnG",
  "key27": "5KtJNgBG6pvAUwq4R6QevY2A8bygw1D2z3rBRgobfEtYCsRgtSksuD8icyykkvXT96Um1CcXUVQUcFms6u5Hu7Cf",
  "key28": "3ucX31qAr1C64ahTTcyt64fdx9DhE4x3Jd9XDnTPgm7BVz1Dj2kYCXTmhQcmgL3DLx3VAghG3ghFy4Ne7oyTZ3te",
  "key29": "5UE5ZF5cbsLe7Ua9UywhMnCtfhUvoSo9nTKn1ziFsfTsrKxfdCYckJZ1hieNg8Gq1TsP6THnrVeJFUduZzdXYvdq",
  "key30": "3dHNyoAtcb3KHHdMNEn5dJvDfMosMCXztrPmZTEA5yv6LpMR1dAWUJAYrbA88Adqtdcbv4pAJGkrw9hBQtoBpqmH",
  "key31": "xfkY7d7mamuxFYAxrWMW8upYcjB5RuLuPBHbNDBRpyPTfvtgAH4c4Bme6cUEiXT3naRaAcDrw6M2TVmgEkoMSfw",
  "key32": "4JJUCQoMkaSuSfvZ7qJeZ93eJqoK5bwXRAA4zraM8ym24CuSrq72FmhPGBxTygPFV9W5F3CTf8c7ZgHwzY4dYdPg",
  "key33": "2es92mQKHv1gjR9DspV28pb2sxbxuY8dhodLHdzJnf19LafBvhCPPNyhGzybpaCSCvMeJ93BK4YYK3j4j6H6MPVC",
  "key34": "jW2jRZoyQboWuZQdmz5MXU2VfPX5RwmGrASjZRM8E6UbyZTGfMG7KkuJW4C2fbwLEEsEXFTwRJgdonoWqH1xRKJ",
  "key35": "5BP4MMfcnifP9BgTntkajUundB4i5nrBKwV5rpMiXyjdgafaSbbx2MnYT2R4i1ty8cEabariMPLtV8g3yFFRSkd7",
  "key36": "2kfJwvPZLQGVNy6qMhZyF8ndBFYS4jt7grmN1LiYR63UFW4QSYNCWZVQcZGwqg9Bg425qdL2GEMEQhBNjsx4mjyv",
  "key37": "H1a7VXprEM4jgh2C9M5QqKSKKYTLhibUszTHBWUfdSwzP1i4LTVdhRroFCZa9FccmHycrWpr1ryD11KauLbBkjn",
  "key38": "3FDmj9mZmsRCwAMBHGFHXwcoDHHgTfLrf9d3PjvRiUB2fySYdvP6J9LRgj9N8HG5H8EFDvM821xsTiQvYmrrFEg8",
  "key39": "33gvtt5Y218CJ9GWX8f29WCftBYWT1BzHcMBDFQTXMoN4orf1q2RnJPds3QknNNMiPeNfYr6yFzNqYH53zsrydiz",
  "key40": "mmpCoe7ozttmkkg4EuQeAHiE18FNvAnBRRMuZtgQUYniRTUBSmdMAXtyyoT4EGyLzndhCxKUUxgL7fJZLX6M2b1",
  "key41": "279dLnVk2UdifqR93fLJGXC1vcfRpw64wfx8m9ouRTwL34BZrfVERcDZZJCsmMKrjGv2MbD2ftza3FECab6yqTXm",
  "key42": "52QSi9PFsy4PahxHxkVH6jX2AXMeDx1xfbYH8RpFaznuLUCgZ46avyo1z36iPsHwXkJ44gdZcvjz3geSS3L2ZqNS",
  "key43": "487cATLL8bjynyV1SLT2xJEpKTUt9CQAAknQjkzhKY1YvnnjuHd6NDqXoUTqoVYFEtnsvnURPtxAegkdhR8UCRUM",
  "key44": "3e7tZN7NeYuwUPZrV3YzkSkDEfEFT3KnkTLFEhSxnPfWQ1X87rS1PTSKjyRRMekTbV6sTDc4KGDaRq2pJ8rQmZ5r",
  "key45": "4Mifrmzb4Fgxygc5f5jJD9XmjUVjrFDRmkjjuYC16BbesRucY7nUJbinUQ7Wme7PBomWXK2R3EmwNgCiDkhYcbio"
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

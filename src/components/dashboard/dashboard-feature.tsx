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
    "4GHXNXcHspTzqscHX99d1EYQfWDePMbSfGWAg49o7eqJXFebbgg9p6NvxZZAMt1SQy1mSkNupx4o6LP2sTZhvp65"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cWhUV8dvNJ5qUD2GBFQS9PV57HqDSfYGttkkymcMK8JDEMgE8LEUF23uKkmvxgFAhMThDr6htXwNgFyAHiq1vna",
  "key1": "3EpMZxdKvRVMoSJjYHt1qr5CnMQtbfxdbQA92wpAGzqLACmGS88quJG8t1Hx9AmTjsvMJmFHbgvuqL5zpZH2UJmn",
  "key2": "d6jbX98XVQrkguAmCF4qgfmbejvndYTsLuMdmMuXka88eaEV3MSDCAfQfejydUzkjvgnaCC5cew4eGAeFtcMBXr",
  "key3": "3GCvpAhgkxF33EnvPDL7nQhmyg1rkYoVYETw9SCGFX4QTCgn776tUmUbDVbPN3u7i7fnH2wkDDb2Kua8yVJFPXeZ",
  "key4": "43aNP5TVWXoQyEGFcVgxddJs1h9QiMCKPf3kMd8Ni1A6NTcb44x3717A3vCqruG8vaGaoBmK65zezF9zi42aLyTW",
  "key5": "4HWXkVhHFVeutjKgjoNAEAVz648tRZrNnU3EMfRLabZCQ1KnTUnYnGfpe2yQ7KerK9ZKbz9FMm8GmMyUddWuhoCY",
  "key6": "QcJ9AfSofuiPhYTjLMM1UB5dZ96EjPd3hTYHJQm26JafeukWJsLFVUxqaq7TaRJZFHg2xo7CkSZCwog7W4UHGoZ",
  "key7": "26cgVR9P8XjgoQEXM29KCmpURz1gb47U4pBhjgGsHdd8Jv1TxrGVXN4oeu3KEejoaBb1CMpJ8EAaEh6qEtzbP4WY",
  "key8": "2NTXVZAqtPniR9BFeKZBo9qkPEdfV7SmUEFja6TH9Dr1qJmMMPgZMhUArHV68obFMVUUbuMmME9odBs9rtPX25n6",
  "key9": "4azz77a8yZdphoExDY82YjUv1fKWSY1pgf5GHVFZw4scjhNvnq36v78UmLd7sYEQJx7YTYucEWsCox2AGhaZuh1R",
  "key10": "2phNMURnYXJgDmYTr4QB7e6JxhMwCzuaFn6p3NaD4XCVhLBd8zxPGmRcJE9bLJZsrSPHzf6DUneyYAU9RZ2DCDZn",
  "key11": "4Yh2Jz9Z7VQevq1ePkWCN3mqVBFpMQe21q64uf8QQ5j5bhHdGVMjgAXyezwgDGbDJrrUacBz6bGbszvUicjyLu13",
  "key12": "1XE48PKdBicQaBZNt2XF6jta2nKEccbdByHRzMjUSboPSD1EfBfL38den3gfrgw3EKV3ifcPDJnrB6riTtLUh2m",
  "key13": "JKHRkFRFtnnZea1MkRaRpSPh1Lmpdk7QxjzNJeZpSuBKaBRza7q3GD9E8xNiGJfjmcqQLuNZPiCbvMYhiRCSqzG",
  "key14": "5P9YjDkT3g8bCSsFrJQbo2Rk8d7iz8gy418pThimpPwobMZ4uvc4LTmbpZv4KzehXqUeeCtpkke6dNCs8aFcdC4Y",
  "key15": "35mpMkfEp6kQxARVgfnZkKUF8ddSLffz2KpAAhgvDvQvrE6snXAZHrKSVWXJAzaa7qcrGvyJihWaerZVwpsgZJRN",
  "key16": "51nYxms2sNJoQ4z1CsJtvT74oeJGWu1ranCkCwbvnK9nPX2oHCMc7yMcsPRaBsreZLVMxspwRpdpwWPGVDiADAsM",
  "key17": "3TJBYMJqsSrMF25k6uRnRz5VpsPWbiFayuef6ejbpNZmLteBMy3wt5isAGLThNCUm8LKp6aZSfjF1cr4usCzTNmP",
  "key18": "3ZyuHrMaT1agLc59dwnjPRpot6XtCGFL6cKF6tUnpAPqsEDDmSwMAPnpBz3QAAeweoxYAHP95t5KFg9yTpnuuFYs",
  "key19": "67ASSZAuKsoApSbuqN3XNiAuGk3L1MNPrH12nFqPu5NCB36T7tvRtnoKJqK4bMHDe6d8xV7hBC1rmNFDxmsSoK3h",
  "key20": "2aJz9TbXYCJmKUd7uH623mCj92WsgY25neSC4LLJ5s6JxKemF1NMZK5afTSrVYmeNRxQm1w2EmBtYN28iWvFuQHm",
  "key21": "5tddu4hHoddaA47VCSTrWxsYpVnWdyvA6hZ6PYxGw1omB9D4WkvgKETSgabpHre5m1kRdAg14W5fUUVHyeo4vEqb",
  "key22": "3QUVjQrWuh69nfmfsfke9b9F4m5dNEr5mbZ9HwdsTn48xwyfWCNP4Mtm3H9xmDpCmkY2zf9csLYz743ekBJmKPTu",
  "key23": "4Gv1Gq12oNrbJeF4RtMHvYRDiM8uqBAiW2HV9UyD5VKBQkhdEKZV8uvc3uRUErq9EnbnuSL1P4sMnuJNq4VQu7Kr",
  "key24": "5PA4pxsptx3dexgWZ4156ae9ywwFRRsfKXhMTgPoRHZxdRSUGnrgsJ1AMqqTwYoTn4orUkaABEmqtj3y5X3mF1TK",
  "key25": "2s1WpdVupayKeJ1XvvNQge8D4Hh5AS7pTo8CNU7YRbjP3tbTjP6igo7QUwws8oGovgfAwWwdnnifnwLeeEYuELzw",
  "key26": "25xV36G3KqyvcuMCaHAFb1E8wJ6veWMCCgAFaf5Vk4RVDb3wamwRhtgmo5cqtyUQ7PdtyAUjQQeKrdYFXUuBDn1e",
  "key27": "55Zg9haoHFV8eKYLH12tERvEYXskgasRdAyPuFPKN4siPMyTJu94sSMNEya3TisEjdrxp4FDo557tUQ4a52HLqRK",
  "key28": "4Su3YxqhXDLDkK2MmHWCSZBvZ2pFYHGnzsswB4w52Uc5mbVoDYMoccBwGjXwb6Sa7pdKVTLWN3cwzyZUhakc6e6D",
  "key29": "2JMgixa4d7USLLorTdEHY6LyCAKi8jA8hgoCBqdv8xmT5Dw1r5fxYgXkDPYU7UB1Y4U44SdneJq8zP2njVhK53hs",
  "key30": "24NAPm2ZsZH6u7wrWMzsgbTGgpqhrjcgzAJtNd8wDKrCkyoLaujXWv1V6UZB76VC7UnpNJq3k4ZsJJDctkMZJk9J",
  "key31": "22TL1THevdiV2LSuMYALKshESLYaXVCTd3PjK12z2wDjYLQmLfaLZNf8o5QV49NruF8iVZCvBGTmfrceHYCdbJsX",
  "key32": "3mjXjrJQRrMUfTuRJsE2PxAxNJ6zWih1ExUVbMSccNoAVDWq1ERRAdL4VWNJgE5quvVu34t3dZzBHDfFBXdMYox5"
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

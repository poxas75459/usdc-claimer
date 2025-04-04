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
    "5jxy3vU6EsLuSNP1UQ5N386vG3yUgNSUXr8FS8CMokM1VjjzpG2JEHP9Y99gYETY8rbpizqXzUwajcky2Tgm1mGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5LrmjzkiyMeogJ21uAjGMvPRTxoMo7fTcXHFGJcBKNfjSWzZJojb22PRdZadvnFBWzGdTgpDBSYu2XbZM8KZnV",
  "key1": "5vvdgG97QZEkt4rQF6YHK1qgBQxgodqtcsvoriVaWwYT8b7m9rtdcBZ97ftK3knjFzWh9WXvw79Ngb3UqBuompon",
  "key2": "44bAJXheAQz2xcZMAzxtQMKhVRvAZUUAs2a38DHLBfuxxmpQ61F6VkDdUG8ruMkwFkPTdko8VkNeg79FZepNgXHW",
  "key3": "5SjRFsB63PhDk8UPhEMbzQQwhBDVWytdNPydneKbmn1yY5JCkawMTU45qMULrzfQprV4VGr4GNtHuPNmhe3w3HBx",
  "key4": "5KAM9jyxU4br83Gnau45YxCKGcnBphqfp6inztThjpoJ3ksngehtuNv7eKGmUFZVjRVKotmKeLUGjiNh17HaiM3b",
  "key5": "3BqQoJt3cj1qZmSzddr6aQEdLbtXa6nei1DmmonrsHVjvSh33qxYZbC7Fk6kWQhDg3RuetPDp5fsy4waFW7bFRNV",
  "key6": "22MJ6Gncigdr17Ls4PdnrkXdjHTFE6URaSe3CmSmcRrj6tt4CxvjB38LrfUnTUEtSWh7ETxTPZWm6krLrxd65j8u",
  "key7": "5APJ9Bjw4ckAa9M2jYvnj3oLnVYuQQvGeEvvWCseTjwbEpEQ87yTuAdNWnr1qvzKTCnfp1Rqmqjw5ExyaoRHB1vK",
  "key8": "3hVPKVV4DJm6g9NQJoMJXyoiPCS7HU8uC4wtLNWCnwrqhcmoeb5pf6JL56oLVx2Uifb1wLNLZe2h6KmZYSew1caa",
  "key9": "2YA2yCrfvn5edGkkL41agKa7hFd6dxbr4RqZTvY85mSaTmKouWQrWAsRAdatEFMChJkqXQZKdfnTFJ16viVvtkXD",
  "key10": "669RMHE4oFzwzs5tyKRCofCVq9ND4MBbtTi4iQN4dRwHyKsFGcgZxYKi2u6LDxsrubxGufL5kAYEnZrajBZrDMme",
  "key11": "5mgtLmFzSALtX8DokKqhWxG5eQoC4eeuJVQi1BeHwRvxnQvNLz4rXJEcYiE2aWfXm3ZxF5EMoF4SpGVu1xPEFzp2",
  "key12": "3LY5g3RnmCMgkmVNL5JjyRk3jgaihMsFw6DxRjWETL3ZRxScGwTHrrpqkXM2XA1TnUfPnMfQmxyL9pfYv5G7rtQW",
  "key13": "5vNjCoSCvacUaFmteEhxGCf3KfvKbY6AS1ZUrDxNwr3NPDkGnm4HJbss6QyxJM4pnTsAw5vLU6GzGUpeHHDGsLQk",
  "key14": "2h3KCL81AWGDKne4sWctvhqJwtZG2Q8jTFCBVUzrehFdGWUQ7eVh5ksC499ighiRKqzaeTim8ufTnA4sUR4LJmDJ",
  "key15": "4fqX3usQKNiLvTCNkdGtLKWRTD15Knkd2heoNFVfAfrpNd3U7hcPHf5MUCynYiGANiAAkJQVz9xhVXG6gwLjPgpy",
  "key16": "4npLTiUiWULS6cdF8npBJ9rEDoeFCaaex54a97apsta4QhxoGBE6CPAVNdjwgBbuoNRREQC2K6DrnFBzdrfQqu6i",
  "key17": "2goc12qEQrzYGt1SZsjpydSB43wiuEFMU6nz81ijuHdTEfcSzvwat1jStZAQjfgLW74fgiCnERWCLH2ewm5XtF8J",
  "key18": "3r2y3GbJx2VCPR8Yvh53EzSg7hjyQ6knX1sx1iwPrC7S5xJk82pZtukutjtqjDrzSMwmRsNpTD6vxjWL2W2JJM3V",
  "key19": "1J4HCPgaJ2Eo3Y2bBskPjxkENrhXMVVAvaZf8n7MRCXLRcskKrv4L4U8LGh2B9K7rLakLY1At5dc7AbE4tDQDrE",
  "key20": "4b1C9qc48AH1Kc1JgdfTACnmDeFas8UiV28ocXCcxxdgiyZhGFC9aD4yhTKaxtNeFnmEnRBw4K4v7W88VQj6JeXV",
  "key21": "4Zk1W5zFEPzbYLLJhYVqUGenJ8gjo9F6A9uNGNahxp54rgPuMnqBmDy2Ar9nwbDJpbwMMYJDXRwkTHNT3WTGWitE",
  "key22": "2BNyWEDfNrDmMRzeQvYLD2W6UvkFi1sh8TVnXdbY6hcDAy3ADVazrpYdnme52k6ZDkFtPD2cJuyv9zFeBHnGHddL",
  "key23": "2vtprVybfhSFEqURnsMzkwttDumcSzfwcQgfB3zezrvXmr2jVEuvnv5i29ePaVgtKGU8Zfk8B57rQKz897fehuAT",
  "key24": "2W1ud3wSc4Zz6JWb7v7GNXuwdVGLWbgQg1w8SS6uem16QhNKrvPJ4byZR6tRJ1DxwAnmhiGM4gdpqWnHp67CJBVU",
  "key25": "2eTyubo5RVi6EWNCiQHeJsCwa6atjHvgoK5pJMxhUf6vetZXuTcudH9g4QPrrzk6TwVbRqpiAM31FEzNb5qJDxcy",
  "key26": "3f6kcYCQgTirQxJzSzgnHYqYNPKnsdyoehb79RANHMng1Tw1YaCABJJjz6PDGxjtByB5WPH2nJit4hMPoSfJCiHd",
  "key27": "2mwmZpRKou5zE2w2qwvPAxKp5btHC4c4t7Rd61ZVDEvwvUTEayuMGsEGFbk4euBv4D3sQJ4GDtQUReUxTmQo55Rf",
  "key28": "5qtYBn316b81Lk6h3AWveWUBLnxhR3vSwT3vRfinL7ZvSnLAAQuStXeT98tHE9ufLHNRM8hW2gEbWDwX2fq1YVsY",
  "key29": "5tMbRASYwBAGvgeMZsL5cm6bCtyZ7EHwLcEjdbhDrETskT3x6sce1cj3QPsAvyu66kkJixNUjsW6w7J6gHZ2gg11",
  "key30": "5eH21TBu8T5JWuW1wfQDsPdxwT7wg9AvETTfpvoSn18vEKcpGqcKTQPSg6G6nEbjpgrurZSu63x7jn8m9PUArK18",
  "key31": "4KnnzByBHXYFtQ2LMcaeGCrDSAtrAWc5Rkiivk3Pqf6PCAdNH4J6BW1PeuEzxyMG1kvGk1i6vTuZ548fRHiWLUEy",
  "key32": "5TMN7juopZDA7HqMBTAFFcYZyF5mBsUkvx9toZyQpfm2t13RDs3Gx8XVU5yTnQn4vJbWEQcQWfgm4m53MLHr6EWq",
  "key33": "fGF6MMMdg55yNSfT1o4YfDmQeQzPx6uLJJypcj8JvD2GFTj6maBDLjUt17ZRY8fPKrYdqDoroSZoDjJaguKwGv2",
  "key34": "2CxbPUBhCcKNAYkB798fg93WoWrWAdQfNZgMubTL5FX3721rS4yCS15oavxQvXfcd16wjuzTk2yibgXm2beSk7s",
  "key35": "2C4HGmCVYi8PcBo7qz8p5XaricQxQZqPtbKBwPQwimgKbVUJvduSpNvtmMDJXiUNDrbyzzGx6TMJaLvtLMJJJRJb",
  "key36": "3AWh8qA2VZnrkNb3QyrMgVEFJG3Bcr3Qv9SChDcrAm4aaqh3VoMTHeU5ran1CaTuMQCxUbx8JhCZx7pM43nC3Nxz"
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

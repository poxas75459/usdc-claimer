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
    "tXvDn12BXutEtk2k9mCG9uNScVFgpRDoxRyPx1yLn3UxRv14jrJ5Yi2CoBW58XKAngbejgcP12WjVYLFZotDXE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QPTYNjz52sKtCBBVRzQD6EwwLPHTuXZiQS8v3n19YJkh14V9gLNKH7cPvxHdzeQkWvUaC4Z5dAhhCZqjuQ4gjJA",
  "key1": "2NHkTN3167mVziK9QPy39nCcs4vfBHGMpCjNKT6adq4Kx9wzResqeCAQWGdgiM3YF3g7FgP7zsvjtUNFp6P97R3s",
  "key2": "f2wvrFHtMXtP2GknYTuFUb1TNnYsd3XKPep17XiLXDrEhyE7a89WN5QxkPPSd9ZjNbZ5r7wtCzxLADN2VGismjh",
  "key3": "2DirKQhMwDVfEzzFiGwfkuf4ZYbwZty5KG6m8u6SwjyqdByG3jpffh2Vze8VGYGUrADPD1E6yJPwVw2kWRigfgKm",
  "key4": "2fNx5sWRdQyhPGceB3ShX9P57fxiByHAXBeN5TZTnGi3n1nJmUvVRX5r1SgRPhMNYsmvgEfvqEFpqPAayAFuoaoy",
  "key5": "5CNEHrH7Gah9pKyG1imfhvMr5e7s9c1USoyPQn5a8bqcYVi8z2uVbCFdhuMBtgHLZVSD7926ENQG2mFjNeU5wFLM",
  "key6": "PGBYfPu3PW213Q7ZuyEYmyxPp7PsdHXxrujLYdWzTJuAUZTsvijnDGbmqJ3RLZmc8ucaeWBkeBrYFstYg3te4K1",
  "key7": "3yPWsEyRWHrgEMMYBCmkuCNyM6LQVyhGBiKMFfaqsGmAVP3HhEZpvwSS56zE9MPumWiW2ijucyYkQkxMBXCCszCG",
  "key8": "4K3rmSJygevTGcXHTq6hveYkEE9FzEN1kaa2TvNUMXBsTPTraWF9ncJztrdV1K7DpniyDuidbGL1ncz4NF65MXSd",
  "key9": "3RWg4yqbqxgjcNNqENPFHabjeAAJYVEyqiFHNDwuDErrTVacLXL2nBv4iBCJ3D26Zarw31xSsuqGpb9GPYWNRPBt",
  "key10": "4V9LpXQnVmBuvLZza8U5eT7u2hfhqm31ohGCsH4NP97Cr2yXzrrW3iuvQhM3ACiz9AKaT5tvjbw6o69zTt1gTBwE",
  "key11": "3iMq4ibJ5L76DSPNp1NqCmtP5jwKXhLzA1henNCErMiZexcqo4UEDqmBqwN6uwWbdtgcAWwqtBMic4iZ3LKSx3uW",
  "key12": "yjHqCE4eGj4wajG6gnJEyoS3CPvqzKAJBhDyiKz4CEZFHR5dPGizLJjx8jX9RP4qEPRAbgC7p18QKLKGCMsRTqE",
  "key13": "5pbhWbH22R7aa6oR9y7m3xRmVvPhmSW26vnp5p53YLvjJ7sUiN6ZHXSeJA51auQbVEwux1ka4UaigbvC2q5UVDwG",
  "key14": "51RGraUYvxZaa6MNbnBV464YE1iib1rNLwvsHuB2jSWG2YWHcstzLaPUd57HUw5iP31fgnzywMoFJKTRxunE8zcF",
  "key15": "2E2LbPyrSWwWaMxcW4k5UpritK3qjR5D2u1Nk1EdbTUzzmVmt57zqiVRy1NZpAa951jpE3ZQuANQdwyaUWjr1QqH",
  "key16": "5EaBa8M2mbAJUtJtEdPSpHW9o3PXPUdMAkgC4zph6sBA6AVMNRUBE4x2oYmP3fjunK2bATierdNzkhtwdiH4fCGz",
  "key17": "F1LR35y99syDEhtgD6u7ZbzaAS3JTCsqCV6DfQqbRo7afzJVbwe3ThxoHjVGZ71zaq15pq3BVQq6tqAFf6unfGb",
  "key18": "1wotoWxHUhmUYSojioyuh5Ep1zDn9tvgYEhUk1M1bATyjKE8zN8CqifQsgLmdBPPhgpaceY9yd9BwcSq1MBiLNy",
  "key19": "4NDd2NogQUT7WrMkSsyXAnHZpAuuCxf8DUBhkjgZSesXW4TpaqpYphsAzoP1o7U2BjcBNm9H7w1C1vh7ay7U5g56",
  "key20": "5MMUgRAQn9CFcaEdoU38w9Cd6HM7676AmVLstWAhSy1sH5pqhZWFGcLdxJR3e8ZgF4xrUCYtGCuumwqvLkDYXDtZ",
  "key21": "5doENDeTET49V6whjcXmnU9TV4FcGoRjH4u6qj77L1hQiLJPTWZmiEXjan4gPDoywq7999DEXXLtxVdo2qzYWkDF",
  "key22": "cq7Q5CSVwd4SXYoypQLM5B3a1AL5gYQ3qLNJnBC4mrZQhy1oyUgwUhR78WMs3Z38UaGykBvsupvt7BKHqDrTojA",
  "key23": "3RtNCp3mJ9K6zcDXrLs7BZ22xX6TZLL9W86qLLXeqBAGYtnEYgg3oGSGCL97489KzrCqbXCGnPaNb5WJAJFhpiTJ",
  "key24": "3R5EtaYT1qKokPqwiu7DDob8q2M2VEkobZZmfJwHS8UT4X9fEvn3juHWdqRz18nPFMCe7dqSGfLJZEkxAuPwwNrg",
  "key25": "3mqhdzzuHGSHLxVCGrCz7Sa7Hw4orbGAVW5MG6ubAsaJtVqdmgRqUkMwQyiHvHVMdyyLbrEifjPdfzJXCRXebEKa",
  "key26": "5sxCCNhYmzfHrBGK9V3CJ87fK7Y3CHwxfJFo4BS3PJtavNcHdxcRJUgpHvjbnUAb6UUSrRgBU9Jm8ft5bbLgTsgU",
  "key27": "58j3ZuGBE4xMCyCaJWdbtesZqV614kiXnCNaXUU4xKNbJz8RAcyhF9YBpiDsZKcKtw3eEAgJorEYA8NXnrzzG8W8",
  "key28": "3RGAh5FsQvLDrz1aCE6frbnys1G7mrpNP6jTD9uKWD1uMRNkJNSFszVEozXjtYHn8BkNuQxxJ4B4dzDPbSer2kPX",
  "key29": "3q2ypu1jyY8od5mvbz6FKw2XjgQfSHNNWGZ7Ba2Jtiep9d9hmR8W4sYbccY2RzzesabyzGGCYD1GTR8HXwHUL6Gz",
  "key30": "4zafJ7gtkw7gbDKfVLEByV4HUFWUm7S9fTRYPqf7TLMPJwdWoiwaDWqnVE2RQPNhWGaTevbpXYFq9D94kgmfKYQ5",
  "key31": "2idf1E7S1qFonKJapdqZV34amyTeYUgqrBdwGgqpgEX8vQSFYjLE4N8A4poJbqJA7D6ySQB4EFM9phvRTWBuA2Ra",
  "key32": "3e7k41fR1MFyNuQ6CkLmWgtpZ3jirXsdJcEyx5Tr9U252MB2CimLWyuCyxbKJwLNLzWf65uYHqgBZ3RRhtGRv9nc",
  "key33": "56KFPbVqChibpJ7M9K4tybNG6newa2uq85mpXeu2Hk2QXCcptN4nTqRSpNZ6bT57ED9BJVFLmm8jJ7kXepwu1MmV",
  "key34": "1wvMevpaVnLgZbd9qN7rpoXivTciauqBomaUdtzEELxgtVXvFGgAvZQta2wJJkBwvdmrWZ1m8E55Dx3J8ptbCTa",
  "key35": "dPLDyT12KNKq1fVCQwnDa81PnHZLmDxa4VzYTVUxQhTBQzrsuGe5G2Bvpj57X9zNxwbfLPAvAnKECYL9c4RpQfJ",
  "key36": "32kzAzz7iY5DfMmr1PyLA3CFL7WB43NVZFerGgb12dVvFJ2sp5c855GWfEu9XsxYJbJm5GFpFddrJg9iK2VHuNha",
  "key37": "5XiBZCoUJYgEjuqueBCqmjSaLmUXEd9bt1RiAjdcVPBrWAmxtu8W2ZLNrwuBSq2hUiuN1zvMYhryC3XpUyzsJ8u8",
  "key38": "bjgz5hYwn7fRBekF4yoXJUpti4nvxw32ex1gqgtmTMgrydxPPfA3CZTFfRvZYdbRvN3jrZPQpt9UaLxKxfF479D",
  "key39": "af8CYdLU1xSoBpH5k2EVjjhR7BSRGVdB5cAwAYkwqi29h35oBMu3G6AHTEVnTPWEkAANHnDvETHn1oeyzSvyeGp",
  "key40": "26ZucMHfVRydGRsjrsaHLkCryyMvVbWk3Ckd8kntqi5oHNy6pQTt8nitkndmn4uQAuFDeM6C6dEow89gYUzxSGgm",
  "key41": "4HionYktoGKWFBvFreULhB1RZmoZVxi1LX6nChFAtTbN4SsdPmehfW2ToWHaiV5DGgn7sZUqRdxQYxNRMxdkhYaA",
  "key42": "2qT7yKSPFPjG2ZLZpKxoQpnfh4ezrewB7gGWtYTiz5dmA5qWM3RL1dSuFiNkgQAL2HxoqCnYiRMLddjGzx9xB9uK",
  "key43": "498VXATogQS2Humun61AumPu3mrPDyEHdkakbaw2HczMDF2o6ykf2jy61Ap3qAUw5RhtnsKKuo6ryJRvwFjDNnKa",
  "key44": "3MdLobXQsSFmdsocB3aVtN2TPg9QVd7s74JtSdn8ftjgP4eKipAL5zinxCq2qEJNQtojZRUJZZ8KDqKaEjjcpN7Y",
  "key45": "55yrAZe851tWv5NcGKQL8pb5eWYBTFCH1ozpmoYwSyo2x8zZhQ5DoAoPjMu32ce8nmYP7d4MGqMitiQ8xGdZnyVD"
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

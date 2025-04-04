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
    "353coMh1Arvmkq8qnUCKJNT2hTLcHHppXsx7fNr8qK2unAUYfwSUd1aRD17yLkKrRJ3z3xfG4rya6vGLeeVqwX4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2krt8iB29PmKDUGBXGBLDKUF3EnjnpUZ7ZTCM6TbGgxGzfptXsqQtpxgQpYhiMdDcNvUh9QKpBAffQd2Q32YaDuD",
  "key1": "3MDwMpALALZLNfJnn1CQAMLQXJcCFKs6whAS82VXkBkwwHmnJwvL2FUBnESu8GWj3PqbTSxDzZc8ZddbgdjdieUh",
  "key2": "26b5Yb1uB15x6UgAvwnveGtgscRB6tSLCut58buXdF4Q6SnFLAyaGr2ZNrU4zpCmidWRCYjkra4DwSCQBRqV41cP",
  "key3": "gT2j4Fvxp2PTHwzYq4qTe59mx7C9fEn162awB9vck7wrHfpeaPgud2cKBzAD7AMKP3s8TrPcNbtGWmhvNDtYXqR",
  "key4": "4jRTnSPiipYzMUxnaivjeT2esmdHgfjEvQvpQmcErHHVymbvNcHki6wzCzbycV23URCrJCbh9ENKyHRnciAfizhf",
  "key5": "55MyJtJW76LAM77zAdxdTL2p4YBFNMiP5kQpyj7kncRXKpNSNrYAi18GefcPnMdaG9XFmh2yxv6fHUPLweR9QngP",
  "key6": "4rjvQWaUBLpgddGDNSEGwbyuM7oG5keHPw7pzD1wRth2ker9pUP47JDmPuRPeJwn6ymSR3zazAA6XPPu4wvy4Fwb",
  "key7": "5sx9XsCt9MMFyuMvK6wyQ8KqRpp2gPypZ25AmbNYvDSreLU2fRKSUpYspFYgqrhe4APT7WEPHfhDzarPCD27QoLU",
  "key8": "mth5wHnLtxySy8U87XCsiyGAh7CAKZRdhNn6W1kuyKPeXTBTjTfdqknKf9gWiDXDN4mNPriEY1HMsp2MZvRPkvg",
  "key9": "29GTsnBtVF7BeeUd5heu4kcXfY37Pb9UwDzUenSRLZXNfcK9YEZpZs8DtULysXtCxnoEfFQD75TZUN6yNJojpyxL",
  "key10": "3kJuYLyjLrFaJy8hfpbGpMCoz4ejh9uS2AsJq53DcS3P7bGmoiHxZjwrogKbFv2ivQJoeAW4LVMHPYYsDWiSrru6",
  "key11": "EcmGVbJhhSz4du5PXyXxbV2iWTELbn17PBjqsVuMVJ2YGWUP3mcq25Gxq2cuosse3Vv39wbiViWRJjJpyM4sMkY",
  "key12": "239ajpAWfzjhDTC4zWfBPkF3pTnvJKnwvWHkvpzerG37m4RdLqQ5SkMdTTtASdkD1fi7q8raQmRdTJjGUpLdnGdi",
  "key13": "4BRjhhX3CL5gGwRn64WV1duqZVTsnotDwiNm3ZdWkzAzhxw1DE3qqZiPfniHiDBJ5mM1imyVABPu4c6XgGCXYNGS",
  "key14": "e56qC5FX8HiTDT8Swk5ibQBRnkCnbMrK6TK9JaAvzK9jros4ZucdNcisSPe9JCVm6vKvnaBiesQfT8sdVbShiEq",
  "key15": "26RjoN7EhqrV6ThUruuz2LhcgvGius4dvPVW9j6P6UdvxAGZEouDb9EEys5ZMsyL9ir9TJBHaTpDy5CfRvRpdq3p",
  "key16": "a3Xuq31ZmEy5bS1B9FBARTq5gXyyhPF1MnhS558GhEX4CRUYs9FhtHY9JifX7J9kbEb4xLVgGBVN9GEe68NHHey",
  "key17": "teceoUuMBEoz1FLLx1ukJfYGn9UwCvjHtGHkTy4cT7bzRDfgpuGWVSse9zGQDDrP9CpFAAHo9hVigncSQStcXLo",
  "key18": "2nAGm5JKFDqowPqPtcnXdPBYZJ2FpyxxVpZenhECsps5z7qrYs2iSMCA78BL1Aue7CgTvNft62cCxVLHfCyGQHbj",
  "key19": "5ufPgqGBH6m89gcir5ffqzMhwTYFfBN1iNag8U1ePPXoPptYciDvhUtTcsNtSJkcZwUw2AYwEEucKyv7e8NczP5W",
  "key20": "ui8RnXBXWMp489g3K8L5gw5QqezQrdUkUtHACzjbnNeUNzPX6usPYJvbYbYomQvMf4DMBQT31hzpZiQnnUyRJWS",
  "key21": "3qm8Ryd6Am4RFyges62Zhtdjuqdb3aAMDdHqvSbuSYUvPd1iUnqRNQyYuEGBq9htcSt8ehocPDrgH2a5x8fkiRJw",
  "key22": "3ZC1LCuYxHA371CgaDHzZd9Juq7Zh9CRrhJ2y1Bnda4kmHShQGdeaAh5YH1B1ND8zYXE9d3817hEMYGHqzAGppeT",
  "key23": "4PQkEkM7dJE8a1gPWXxNDgA5JR8rGLTVLz1jJRBprgLZcuXcDNMAs5AjKvk7RiLkyhsNLeCfPX1LZnW87fswcDWt",
  "key24": "FV4fQ2hqpDA7MhbKb8ye78L5HCoMzp6EgQSQkxRjWPQ278E6Q9A9mn6xknYntNFzwSRqJBYznNBYYvKj2aBoK7K",
  "key25": "5XuiK4YJkV4H5cA7bSJpASiVmS8pSCq5FhMWPviCVAiSAnTkUjvqdyzzZDEBvrTG6z83qhCcbBLDi15ihL9skySE",
  "key26": "3286JmXmjpFkxPJoNtidVjm8i9tHVAkgk46vRNEunZwMFuxZHQhnK7JqFTjf9bLD6dgKiYWTXc7yRL5FD7sRcyNv",
  "key27": "4GBYkaQ9mCn9XTsiMerf7nnDpBuXwpS2yohJv5kNXhWXSDCvC8Wr9sQBmEhQKMDvBKCWhdxwPKqUJzMkp8F3ND1P",
  "key28": "5M4qsnnYcdhqXwgU5zpFKEfi8YujdBmzZ4XqmsCf7vffj2BVoeDCkxZEzS4abs7gV2SsAem6VKmWCnaZMAQc3tno",
  "key29": "5tnGegs9vtZmn5njSq8dEHDBKHqtZVMd7oAQA9vdPEb3vuhjY1UvvHXUbAXf5V92BGnj7BCQnVDH1SrgP38qHMDv",
  "key30": "59FciTBDJDD5S7ZHE6PZzYpTKSTA4b5kY3955adNQtYpE3jYX8Xg2qMrAkWGz8nkXavMDpciPUaZhwZ9ZNNsuab3",
  "key31": "yizcXYFAEszDTDHKFj572LPokjELfEqMCXyWd5urzGmz2eiUmrTApSr6cowZRMLo8raKM2h8vUvhks6ijJKnwaF",
  "key32": "YqUpGfM9hfp23SU3HYdELDCWTxopKbiMxjqbhoQhbP3tzb4He7yNfTUAYx5CF2K9gtYmXYRVUWTi4AU8QahGLq2",
  "key33": "2UzGxoxG4SBfmrSf8RSiwT2tXLxyRgwvyVSf82mC5tBrbL2fktBVizni3fDVJ9xHyawsWAB29U6qTBuUX5Jky6or"
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

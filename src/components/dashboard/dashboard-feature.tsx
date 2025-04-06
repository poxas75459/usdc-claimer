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
    "4XwHGpojxwYdvJvkcryUTrn3CSCwV5viUYPbF1eduBNMNRMGh3WVHuTt1sG8CMzgB69os64b1iNXyeH5JzR4NBe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aaoN9SqJq72A5wpLsH2dr2pEhtbiLaE1ZCD6oGPY7mzeZJNrtvHw3uDN1Q3xDUuuo9gZFGhJ7VSYKJzY2eBWZuX",
  "key1": "58Knh674h9vVJnhFScyjfuEizgofcAFVKLtWwwAJCBnyvi7vHyMx5PnDakpk9zJANV6jnyey8RKsZfPSzvTWhuJk",
  "key2": "3dk6f2Wb48yndsb9QVWr4SmYUq8Zd59mZ3jwVM52nfpGBXHLPgKbfoBZV7yo6mPmUtkmgEex7S2dVDFdoTzHbhb9",
  "key3": "BEJJauLmd2D33CVQVU6SjfyLMzKVdJYSeEqjXWs61bCshxAzby7SZas6iruPH8oEhzfPU9PHky6qAeQS2PgGRBQ",
  "key4": "5Pvur2wmwA9acK62RGKnApeSic7YGWPjgwyi8UGXd1jzWBdb2GAqQ8LPP1CYnnG72sYVFESX7goRcjfssUN2ZtXA",
  "key5": "4RHkct1bEEzZek9LoQJWM39FuQu7RPztqENPs5Tzx6hz39R5xiTGVgvi7StdRHb15f8mQEGeV8ETMHhpBDyb54YB",
  "key6": "xaKZWwtgfGwt6TsGEp9mPAxZx9ChzKvYcqkBDCpcrrKAQHeEQzxhgyYUws75dqeYX622g3yWiHANK22R8HfgX7C",
  "key7": "4vdaHkPYZ9uRJkmEzrYfLTV5ghE66WZunFJJK3qAEK4iGCMdZpmPNrnTT8qXjuQ1jbGvGZmsMqaSEVVSLRY2b4z",
  "key8": "aPVaR7wC4XbSvCivw5jEgYWKjtcJegQAbRrdoSfPqWtFDU1bsAof2nMjzhFnxSSe6shXQe8hmxhRRVezEhJaHfi",
  "key9": "5oemycUE23TqUKu5T5v7HGfCW6Vt6rLfKUV4n41DKAda5brYEukw6poFxPmtaBLJ2APwpSpE1WBgMdc9cQKUNMmT",
  "key10": "3rPR5rXtAycPegtrxDhg1iZi3uEk6drd55nzQxYyWGo3gm4pRSdqGjGLEvd1mAFyMNjxRnF1CJyeMNsT2pTn9M9y",
  "key11": "5jvuZofRuGUvyRpZfKXeq6fKcvaQCBSUpRnxzfdwHLThtJRwd6kbuL3oPvbUXwd7kCLgsV8Hqxsv6LBEEDYbxRUL",
  "key12": "57hvSmLdkfVFnZ6XnDMFeVtuF8Byqyu69rzG3xUQXWs3A7CycZ7uncb16wjE9rp3UMDVrztRB9ijt9Dg3GLPczW5",
  "key13": "5iW2EeiP2e49vqAUCbTf63fGNTFsV3h41PU65iWDiMuhCqATpkStgDFVKnkXAoFUznyy74zF7FL5LhqqHaA5WffD",
  "key14": "3DHyHe6F7F8tnEcpAstofqYKyeAcN9j9A7yVYWTnPoUkLGGuKwLi29DsMvJq9wcDM6g7ta9H8YMVVq3WLYLixj5F",
  "key15": "24SMCRYQ4GnMd8Q1C71n5V3hjqB4tLQSWGT5wfUbHGdN5zcf6ncyaVj3RvE9zd5ZU4WKUA3KaJdoW1ihYdD5Zq92",
  "key16": "66FB7bQMYc6iwcbXg3LraJscqYWBc1kc3jaUa4Sn18wCBWUJ2b1oR5ExULmSchNivt3afS3EoRVUL2ijAuGWQRXY",
  "key17": "5ty2Cq4KQVTQr2ND8c52DdudzoaKFydNbzxWPtWpcmUWHgBBLZrdoWQYj297rNpscRwRuXggs1HTXD2ma84fAHZw",
  "key18": "4VooiSnNph54MNJKqsiRmiesdgSByCE9UPTmaHJ1qdbuhzYua5wh1eP3foL7Qwqmr1U7GL6LJ1Lhr1vgTm3SV9nQ",
  "key19": "KTBhz8RzmB2EehTN7W3XwMSPg3HEi2VgALFyKs2uXWMK93foL1bDHKFgjKXFFeBEW2L75CyhZKkPeRGjb6Rs4UQ",
  "key20": "2DQrj11yLrTB8Tf1yAfiuKT9g5p6YJVHhD2vfgKSLyVTqTGRmbxZXyRcH8JSi3TmVG6fgrihoPB765XtxqtrB76L",
  "key21": "3RkaTzutp1sePXy2eGX2zkmik5mpnVuC4H4n2dinkrv3TyZ1mxTKaoJNW3B1zpnPzHzSAtQfpC51JAhxLwu2o12X",
  "key22": "PrWkSDMwuEtdmVV9hRCaeFJJsjxQwLsX61WDHCqwNo7yTtxVypBaYWr4a8VcHkwDHFXdYVRmPRovbYX32iboGqo",
  "key23": "64j3px7dWDtW1x1dXD2ssYxCa671CpX4SfddviXte8Tq1EyAURR2rUmCgfPLQyCZHiNy5iQYg6NXMnwEHJotuHd2",
  "key24": "2awykfA6xmDGgrU4tRnCEWzLE6Kr88KQUnLNG5Hua8dzAvnhYN4sLJTUuyY7CkbUN5BwGXDT3oXJdEraFTSbCnPC",
  "key25": "egJSvAN2FzabFeiKN69tLRLKuLfCENweYB7AkxbBVcWeRSBinggKPrh58C7fqLKf4nubPdksNPJxtz5kZKVQJ7K",
  "key26": "53xxaVtC7uQWec29ZXBfB8FwUZDCQnr2rhDcdotbCCEreW7BW9cCqFN4MPM8bRmyn5DtPeZxeHLM523TWPDQVNXW",
  "key27": "2YgweJhLLMoyBFt7hoDbmKvLYPQkrC1QXjnD9SsbdmzBqFPuqkPf4CmZQPv4UqQpopaaUfhNr4rvCsoqvXKt31Lq",
  "key28": "515Q9Ts47AL1EgbxWqd7FcrEUw5n2eSiLVvwZAhitgeADi8wfdokSoUKTA3fRQ2KVKAt2BPFfcnFoFWEy8sF9k5A",
  "key29": "3L8q2yiLPjJPkuATAhrwveNPjcyK2QL787hPRj49imdVGMKPeZKBUx1feCgvJVFBA38qCugCfqyVY2V66m4DfAMr",
  "key30": "2AukiLsaenVB85yZT5kv4ruMLWdAJAtWCMtC3zW1vzx4GyvqaUxDpLSDuFyU3UZWGKJGHzpeTbcZ3GW2mcky67qn",
  "key31": "3FwMGrYbsttybjTE4KwvWzJHConbTWy5DxdWd1h3q9Vqu9JiRf62HgTp7xqWJnchquSC6T68vkJGta8sGSsVbC5M",
  "key32": "2SCPYL1nt4f8MqGtUcLu7ipMmxp7WSTX5tU9ygcim3BnPHgt3UvLuEdtcDeHGpFdtkxyS3NhHPuCKuLvyxjZdNaF",
  "key33": "YEbt5hMHNiUCCtmPJQVwYTTsCgPJHpeNVXt3p4z6ssyUXkMWrWgnDJDrpwXcP7BzfVYt8Q6L8U4TUcqnc5xwzb5",
  "key34": "3nGyzkQKUBVo1w3CDHiP6mkvTYsYDWTVKRAjNSpcGYY8VhhSCa6FGbFwXZ1gsuhhJ1Q9FTF6nSpbH1equpdSz6ZF",
  "key35": "5dpR3itR8XpoyychHkJ37hoKWPA7SNQmL3hLVZogUoh3zfS66fHBoNAnT71HBTUgHXxMgRWAoEK4WLAQs3AcNCuW",
  "key36": "3BzWC5KhSk7iG3JK9gVzZhn4TWtdC9AMDcMkGbCaKdgED8DGumwUHzpKu82vS99qLRDn2GSKazYoX3Q6648aGFuN",
  "key37": "2h4nbtM3A4DJNFyY449MEhzWpdS3ZYhv4WkP4gr3p9Cf2zBHjLUgQsEAv4SfFmksXporEQQEzSJCXtyE5LPPUf83",
  "key38": "5MNap55NpZYd8sa4hhe5JvCAVU6eXUwePeBRC9NeiBc5p681qUb2Van3dP53f1xgMrqF1tmKBDutGvwPp3AGaCtT",
  "key39": "47wwXQYN8NuWUCcWdCsZc5RoUFybS4hKpGUNiqVZ56sNNWpzRSSReB6kfsiiXRxqKwCWAQiLgbtAiXah7ur8RqMn",
  "key40": "4oj27BrDKdqZETXkbD8GXvxQpypny9dC9uT8YhmSMwkxj4JJNSbfPfCh8t7FFDsCiD2siTf3FnffmrdXZhDFW7Ai",
  "key41": "44NMuZs4XE6WTfDbY6gZfNWnrnx4hrQ8esLyp2jQbCyGFRYt5snkTyFkfPR7CzjKZE617WGZJusfxyZVomkGqjxX",
  "key42": "4d7G6YXEmNuuoiueaoJu8vBNMYtVHqjesBVM9o6hSbrThCT5kB6zDCHJ33shdhe5u1eE1sgPRkCdtGVjgSMzyZ4Z",
  "key43": "SREtgrWF8zsWEtjJMGN5h7Ld4omdas6Yq7HmD5wLRCkPLaa2i7Br2WC7qoPgA9Whx9SgHeGg1AmCqyKZ4H7ispL",
  "key44": "3MEDzgc3UfRcxiaeV4Hk6ByV1s6kgBrPbsDyVYKVeWJ1CtjkoUpuqKL8LN9EQuwaVx31sDJ8vNbdM4WRXDYEQVEb"
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

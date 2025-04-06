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
    "2jhMmzncDSRixb1aL7f6ZBHbLEAxwKik3uDFisj54mB7qVto8fd6QqmLcmngSVtRqBTCnfBCoSdDm7ADQz5ZEEJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKpz6uah1jx1xbqUTkUXr8JQanNwrE8xxsqoZVBeNpBzaFpybRJqfaBXV6uCMP81ANaZEZPHi3PweJWapRfE1qm",
  "key1": "5ANkiaPbpAh3rgGyQXKETA3Zot6JHdwhisoT9tutGPYFEuf6wF1pGvzW2i84gxEZh1MJhgHgszxpGcqjQ7eNSGRW",
  "key2": "3M2nctPfsVyKc588BbSQGtoExnqVEz4zFUfDKVVbki3fUhvNcNXRTR3Qp42VffyroAbLLRJt693x5uK7agjqx3AH",
  "key3": "2jeaKQS5ACLVVCJfQEi8SyQkia8SqTde4MPCNPXiaXRTFbrmivms3ccVy65q5Cfj1b11VYJkW3hG5ggNjWhMN37g",
  "key4": "5AioeCwrjubUyLktX3Fy8MPQt7jRMJVMrkgpgDx8D5Xj4YJ745VWuGPCbCZjrEmSWrkgjgxDA6TXWXwmLaxU18Bd",
  "key5": "61DoCEVkabALAuHWaibP1McmEa7ktbzo8hMDFJdTKYzrya9FrJzQC2JPphSfcmbAbSMfAVzc4akzCasdYeN4G7hT",
  "key6": "4X1EF5BYC4hLZ1fbaerM59wfUJXxtaWBhHRAAU2LzvfBzamL9cmxLvP4Y1DtQG6BvfYi86rdN3kq7syHRpVf6hfL",
  "key7": "31vdMyENKEcnJbGrCPgAFJ7Ny5ieA26Y7FRTmtPpsBSF9LskiP5AkKqRFfCS2hom5wnLxQ1itKQJrBPWPEKHzuZy",
  "key8": "5B63yHeP8ASpR3X884VoHTCx9Hgp2qyPQT3c5mBnTMk4RQbhtvQrss6TY6UtaYK2DYea6NbbnL8gnf6LQpvMVPtg",
  "key9": "29anLZkd1TJ1S3DNbdXSEcdmSiHBh5iXT47P3cMS3EbKhGaUVKnD21HohFMGKEsqMcyYJDR8mnapzkSUEMwMQktW",
  "key10": "2VnERS3RfbKwTGCKN3VAM765sVgXPE1r5WZzNajbM8x8emdzeQDCUT3vzq1etMaPv4yveYRMG6KjvBY9FddVDj6Z",
  "key11": "3rfQREAdskWTRk26inW8rmDB6xF1nRWHXgvbb75WnAbybw5G5nMDUWHZ9csuoLfpYtwnSrUJbvPGqiBUK4HNZnEA",
  "key12": "2psUFpCEAAXJ7gGwX3a4E5fMFWdZgZFYVZ3Jc8VE6BqQ5gWJuPDWvrGyUBiGnv2vpUtEwjrVPtueA4QBkMmdgXrM",
  "key13": "2uTkygxbH1t3GGNh2bcuMWn5BHBruXaRndSPi12dWRnmW3vJH8nuwKLzt3hN8Eu4wp5KSMX9GQictda22KMQjiJC",
  "key14": "3d1kP3rWhwhytaobFwKZKS9km1Myh7FTzESUwWdYMLomUPocmsHQQ31oaj8NnSLe2hS777vrxzLRg7xFcpZ972zK",
  "key15": "4BP7eHwQ7M2xxhn7qTjBjDX9i9qem3FqjpLjmy8UfELCoTac98NwuBtaRvgiJ9waHjTLFYWYLJ6d8FNmSRJpn13w",
  "key16": "2DVYhjXuvo4bMm5sfHna5JqUke9hxSQEkhktgYhU78Q5MzmiVn9qDgirBKLp9buMJW52yNerS7uLxUw1DRHDxVmA",
  "key17": "5uVxF7CPWD6egyXEhvpD91cu3gecTWGK1d4o4aDFwttgz168M9C2Z9KDTCd87kGtK7uAycwWcwd8STYUU1CpMp3s",
  "key18": "4dHfutArerraUw98RhfE5i2iN3fFs5yaZi6V5xuDnFheCJegNacin3UPGYUyzstxBgNJdbaV2UBk6nDDJUsFV41S",
  "key19": "CW789dh32wJkJ5N1BtaHmqeTSZnKot9u4ZWf2JjxfrprUbbq6Z1frtgKNaEbHBh567BNM4dVqbhotQVdHgXwBNE",
  "key20": "3Fm4em2qzHcX2Sfeffz6KQikmoN3PKXzWxu6m7bCkCkRvyQUuiEbbrCvfpJxxcVNT9pNLAu1ACjDET4eNPEWNTu4",
  "key21": "3Pg7Z4N3CRA7oHoVJpPoT1yNudLShv1uaVqh9qywrBYLqZV5HcaEw1f3n6WbChReLPF95MWNMtHM2UGKtUgtPJ9t",
  "key22": "dXGBSmWdbSvrqYXYKN9mVZy16LJbZLeszVTRSuN7npZ4nufPvwemqAk87n9E9a79pqburPDrgrMgDg81DijMjzJ",
  "key23": "2fP2QaR32kYXiXL6CGzGrBZEjsqiZv7uZB9z8WB1ZnHhaG4R54YYLfUDFjJBjtEMUvBBJopGPX8wgHBVbgskTXRN",
  "key24": "3xECExdW3j45HYfy2nCtzt4c5BrQgKYVfK6fwbEHXyBtDJKMecDYNacuSEG2bHf3FCuFqKuyDv91WVWaCoafsX5f",
  "key25": "2hBuqHJCYmehTF6HFDcesvdEEQdPz5ai17bzaAcQvdd66WZz6YzY6HahcHKHFt1NoZpLaRr3hNWtw5poJ7jucPKf",
  "key26": "28TXpx4JdtAJWUWtPcN3Xv5NmTbjG4G7FRc6hqZVMHWT9qeAkRhNmfthgPBzhLMiGKmaeLZJRiN2cK5qY5L57SJu",
  "key27": "2TTytb5orHpVmN5KBJDpGV8LP8mppdes2pdyU5zssyH6jk8iBHTof2iTeDrKREyV12gWGSwrFbkRyRqnFKRR5pPG",
  "key28": "4Ti1f6w1B44it83T1p9Ao13RxM3r5p1VoJ7iU3rPr4TASN1a8GgofWYJR1DSGguZ3Frp3pB2CRifgiyG3xgT8Bmw",
  "key29": "4q1QNicqKKWvGj9oR3qQS1uuiFhfWTXYefrvFJoA4mpTmsVgMLxYC84VEgrEMxfWa5Q6MhMQoH5ZqYdj6Ds2gRN2",
  "key30": "4v6YToCk5FwVfvDWEXoZ7BPfqgqD4XN5MWFU3ZRGdLzJC5i5Mhwp2FNjwC8DLhdteAsz5EJBjdBshm4rRTwNyL3R",
  "key31": "3uvKE2zwt2VidR8AjxG9WQHScQFnv6iJNaoMfMHzREWSp9MU36es7brtpFCj8dT58C5zTDZHfgAq6PqPh1pSBe6i",
  "key32": "5J4ELo5FJARjUqEANpiaswPH2qMrAaCVcrrmEmYZDL9fQ1VcnrQBZ65GTx4HKRNTJxbrcmEksNDZ5vEakTS8vsHC",
  "key33": "5XXURpaMKMz4jDPAoTwP3dZcfaBKjh9tkhS79tHWR9ZxFYQyc1opFLSxhWy14BPbWjeX8R8YfdihjJPXdiTgqQA7",
  "key34": "3o4XpJNt1m22kZWCserQAUuntvtzwADefF7feMr4JUG7ef7Lr5Jm7ZMivc7iuuGjPkzqAMqadbR7pMiM9ihxQSWd",
  "key35": "4HNm864zRcjSfiaKoLTyK5RU5LainSF4yETG3x8iWxpEAQiLULSDw9JPHUwZRmPhkxZrMAvPmKWXgh8WoEKFTT6g",
  "key36": "5DTt9ZfFP47q3xCsaqmTzJSuGieeXtwDGr27qexaHXowVxLrkmeptgHKe6WHeBK4N12sQhm3MjgE8ce16BhyzLat",
  "key37": "3XnBbQeKRhCKpQqh4zoSgfHMTdoY8A2rPkFc6aUYBsWAD7mzxCkxvDiBrkjQn7xBDxXKoc81umPqcn57zJWJmkV1",
  "key38": "5QHRMdveFBbRSfoitW7YEnXZ7b4LBpP8nk4V5yd8DVGeYxoqtxYk5TdZFpZQ9t23WnonM15NBF14v79BQCu59xNi",
  "key39": "2Jqcs6ANzcSQ9AeTrzKTyMSi41WjraBMPNWPNKvDKkmAiyJwTMejxrXvBbF2hYWgXwnaqNndXb3fA2KQbxW1KqFJ",
  "key40": "27tSZtP3M1kXw4e4eUcCU9ibnN1bjhjm5TyKgnV76aQcZXKHcXSQTDSuoS9pd3aqHp1pvUjna61VEaSNnLc6BfBz",
  "key41": "4jHswT2iYJmixnb72Evkp7BUaGknsxY4XTgbWXvYgEB3TARfKzrtH6RimT4vwiqBz3SUUj36mfn1yHun85mAQWyF",
  "key42": "thWxy6q9vm6KZH21EUQqyFjNXiMcxJNEtBcWCubqxXqoGVAR4yN9BQ3Hy16T8uJLqzbAptgouqJvbedXgwsdJPe",
  "key43": "3A3dtkqikF8o8uzTSXCMbrSPxPef3oZ7e7pFSEmQqn5AP3qYJANXSw8UxgXxKQZq33phbQqv6evUiN7FJPz3qDrk",
  "key44": "5nVM2mCSk6jVa5QBGX6wxhqBX7gn6Qk7xbCYErEY3PUts9PvUefNfZyqSEQFCCxgbuUfg5mHzS7nYhYadTcfvCN8",
  "key45": "5JX8vbtGe3JSXwSfnySR5QpMSCccHZPg91GXFKSqy8Eq8TJAeSJppgkS8Eig5p6zeShdUDciSLSCDd7AjSEpJ5ZX",
  "key46": "24dV9VyEafBE4FVV9BFEz3tvTDauGcMoLz4rRXRexFb5ck6r1FgosEjuGRqto5cSqDHAPSHVUdGK42fyTUyeMDnJ",
  "key47": "5cShPo2DfKYiFTpRd7K6iRUgNE9JrctKuBgHCX9wd8p1W9AKTwMtF59PbAja3GWYzANiivHVY88pnfSR156Tv8kU",
  "key48": "5YDVhzmqZdxF4VFDyVBhy3My2ZUyrBGtA8GHwHFtuR8phrj1graxMGCRnrx2jAmkcKDpVCYiyPYB5Z7vz8H9NhMC",
  "key49": "vW1g8j9YJ7sWgTzG9cQQVEFSd7qvmow7pLsnxxdfzVm95iVHb1aNaBymdDjY2XCA7KKwfeyig8KsBiQ5ZxL4U7n"
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

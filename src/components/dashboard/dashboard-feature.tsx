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
    "2vZrdFuapSb56v9ncjP5YB8AwptvrytobXQahRAaCRZMCChw8zwC9zz7tRQXCMZVA7ZHw2d5VKxTNex3XS6sCgJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1oka8RfdGiYwb7KFJaYbvpJat3ycYMC7gckjKfzsoCvyqE9S5twutCDXjk1xXRzUuxY4ajuryHt1FoDpK4i2Cgh",
  "key1": "4vJfQH21U7R1ok72bWN6TBBVbFnMLBv41vDTrZ3Ef4eyLMKM6E41Ro2JJ9zLKUUJdaTMbdn6oSQtDLtPvJcyXRRy",
  "key2": "LXuBzoyhij7qmGPD4mojwwcBam2H4aFHnCEV82rysQvp9ZJCkaM56D5d9ZPQvmyRbBL1MaJMDDot6naRdyjsViq",
  "key3": "4fkBsekHzpWgsG8frpK9gMTDaTimchazDkbHVNozeH8TxNVPENVkzpFATaEJVVfVBpxot8cr5zByNJgbeUHRAk5c",
  "key4": "Ccg8nXjCfeszYPoPa2REfQ9t7RujHDETkFTStdUD35roHZSVjB7HDQioupj5poAfFpyAuVgwKhJvmHFWkCDURwz",
  "key5": "4Teveo81jmTVoqJXKFjB1Wy9inUuNnSBvxpT4BuHG5aBEqgXr5ndvKxayehqBzSQEgFdcPZTHQPiRMmVh3mnnjPa",
  "key6": "3bVMiNALoAJmGLBYN6GTav1NoLvHHz6sfY3zRkexWyswAjJwEw8o74YE2eQoEmGq8qmhLBWuPsN4wggLMZCaNrm2",
  "key7": "4FnxYnt1AZq8mncQt3zNc66PriYyHx7rL8TWe3FNmPNypxGj3dvX4dttiaPV9Ao55FTVd3gmL5uaeENonkmberzk",
  "key8": "4C7CkKFyuKWHUrU6EKqGvPu35AJjBUHx2uAnh8acXB7oKTfDCWeJu3eeALNy8DoTkzUuGbyogs5qCPzdhAyjXMBJ",
  "key9": "4p6GRS8usPRtUzZ4FTic6SMmqBRyduvn6iUbp76jWQaH4mMg4rKmRkGF55N9gh9EqHuTCYUZcfT5QN1uFRBtC3ZN",
  "key10": "4Yyck9L4XdLreXAty2TDKSCxApeq9iyLCTTrWFy16zq5MpokGvTL521vCeZ77WN6VKZMBnbCftWGkcALfr6Yq4m1",
  "key11": "qovgywpNPUCKEvfkLHwaofNDrKa6G7gRbbwoqfm4Pe5XVRQpQAen8zXTddSmjC5ZjxRRkfdbq2Ynw64FPow2GFa",
  "key12": "4THkE6wUnuKkWUkqCcNSkuAj99z7U2pv56yinV5mXYoQJsYLAb1qMKXcXRnscZr3rW6t4oHuheJRv8ovkjwhU4F2",
  "key13": "h7q5EmqjwqERqk5PsTm1MHabBCgxjzxUqEugph1qPHzKJiCe9AmWdDnnhCM9vo6tMaMDVhc8iWvhE8xacFeMsfG",
  "key14": "5wDB2q9MrukSuZxDrUoc4JsXE5MiH65aNXAhoTf4JbMpPxcicPrastdu6iCFmxzjS2N9pUZpoZy5rnw6tUocMToM",
  "key15": "8wfiMPxwPYPfefsZcU1PQVeeKn2Zf5YWYHyPnqeoP54UJd2JAjykekHRbsAKqxaSVLvZVXauxkZyuBrrSiJEPo1",
  "key16": "5jz79uQWbeRcDZHrVCxv5EkM1U7kBrtu7V3p46bBrvXUaxATB7FYPeYQCcTowb5suRQnVka8ePgEcLYoYaTtWSqr",
  "key17": "3qWXtbu19tcLgwNqcCCn5Lun6Ly8ipdjk2u9a8f1GgFzAcAdyG4Fx67DwQWnrPZWpU9PSDFEw9sj2EjRxAdHgpuT",
  "key18": "2EhPwzQLxTtx7pmQab3My7W8Mu6E65WrMc8E3pMrQyvm6Qep3UPZMHoD312A3FbPJbMcpHwxCN4VAhuJwijEg8hu",
  "key19": "4z55EAuMj5x1DSjBoYPBVdiT7KkNNfMRguuDa2Xm7w2hxex6PbdFP2HLhpuZ7ahJpT2zLP5GgRC8n4gEFYyqUbfp",
  "key20": "2PvPwRdy9JYsJnmPdUQ2kmcu8LrCXRXfrQS6GppP8AAhVPSXks6edQM6QobtbXhShx9ehVmkLecnZKhgB7wou6vQ",
  "key21": "2U6ENS7s8hNmni7mNZjTERQmBiGyjTexyXpmr8m5Av3AD11QRapT2x3ypj7LL2ffixrSkRKsVNKcqEfBZNgEeQEe",
  "key22": "65UCtPqTVnQ7ZHSqaCo6mmhQht4ZmYCj6cVGdM9LqpMa4VtNB7RZLkg1MvsBb6q7hR5MypejHqTEjjTYb36AnSvP",
  "key23": "5NKuXAorAu8ZitRVJXwRMzs2JKvrQRrmEzJyCDDefZGV5rvdsxYH6sVScmii7mkkUUDfYLaa3riABuzvr134Bjbd",
  "key24": "TpfUo734WFoKvsHV1AxJ8QPfeLcgGFygihXsy1ZZnR7ruDBT3J8eyWJV6kKGAstrkkJ9ypsWkTLc4VzpUsXJaV7",
  "key25": "31cEEPB6HTbcht7xdMEUNY3RGhAtQvbhDU3zbQvZ5QSxJt3DfCCCMB5XDzaVgdid4eXT2a6nyg4UCrPDgc5ntFtE",
  "key26": "21b5zVRfwDVQ4X3txaYudmZEUHELKSF2VTLAHmw1wDA18ADMq6xhZpoez3FFb4smgCU1ew18rKasWXWYVYf8XVYa",
  "key27": "5ovXyxG4MJfW2wP7G18sgXBMKPbgkCy7wVHgXL56bkuesqaWZr5gdPSjeXKBrrXNK5kXVndMcFoSUBSMfM3mncNe",
  "key28": "3qaPeM2tuMe9Mhwb83uScsnZSnpa2apL5YSasopeGCBjbzsJz74pR1qczoJSvX3LSjatpFjdWhk4Ra56vkqvfuNA",
  "key29": "qgkxtUQ1Pgzhm6PSznGf4yZ54X1puTeHC4XkHauCrcUgJLZJBVEBarrtw82zjWFs4AJm2LpTrEtbZLS5co8rSFK"
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

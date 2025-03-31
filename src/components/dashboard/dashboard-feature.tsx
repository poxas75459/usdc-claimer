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
    "473AMx5rfmssUp6gFeKqbWgzqf3RLym5LHy86CuTZYkkHnJC9unTdwfCtQHhLZSQmAbB5gMisoBptVCfPn7LApZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xm6yWZu2tPDwWVh9HXj4BpqYzkqMMmd3yHJGNTQeHkV2S8LLsT2G81vZjgBFEt1xUCWWS4hj9WgzsFtKmq6ivPK",
  "key1": "2AzLiWkLUgtcoNfn8UpJ6bA6SUXAMgkvW6aFaB38QcUePuuVuRDkmgmrRetCvDqC1N1Y9hNy42zX9YsJcbLBySAE",
  "key2": "2c12diaKdUxmkGufSiFL3Memicy1Mn9oEM52LCn1gaxijQw3vaP3wRhNAF6vruAqtpF6adiNRLS5a65AhF37FoKs",
  "key3": "2uw3zFEyvrKXNWpqVBQGjTm2B25tCWRirUb5s8jo4XRYjQAcgBvhQmAtfpGehP6e2inPyyfN1abXtTy3r38MgxAS",
  "key4": "2ciU8GRdXLizoo35Z1QpabMoJyFHgdBQrBc536u4QrzVxNTtex17umyvJmzScFKMCHHWMpf9akZjgiMdaRM47NZf",
  "key5": "QUmUxqe7UNBy23jdaftTeeRLEct58bTV5BuzX2SxYSbMTEtjELxsJNYPFt5HXwGnXWEy2DgYxMcbLfni2uttsmE",
  "key6": "65RApftzkBH2Vas2ESHf5fcE7E65FXhPmZMGCjx62WhzQSx4BFNbUiBjGJfQoWor1ZAZKFxqWjYuDCD2pxa5LGCA",
  "key7": "49rmgHfguhpSx4wY4oZ5ZHxqjfWudTgAqFgw72oNFD1jPJZruatzh65CDtcRVoyX4tpAmD423i2DYmoBVAguFdRA",
  "key8": "3HAmbSCZ6jNKLLa3wquvqKEWNYNZ6FvG8NNLJgM5gotMpsFgJiqXFW7wKQY7VsBacpbvK7ZifN1WZgsnCPS95X8E",
  "key9": "3eGJkwQVv1EP6oFhmcxxFQCpU54tmcfSZ99iMkv1ZaqTB4XCJWGP7KqrK7nUJufCSFjYGSGfPrPTkkdj4yHcVxYh",
  "key10": "4rE3rX8sAQpp4qYWPoxHWhFSsp2SDpK3mPdBHUFvR3ATP7DEzmhEAeHqDy9vs6VEsdTWrtqE6nmqhkSMaBdeBQvj",
  "key11": "xSqLLey6VRQrnvoAeummH43XTC6sEUmufC4qYB7gTjyPGWV8F3cdB5Fregz4nnxg22qR2NcfjDVVayV34KtvHPD",
  "key12": "5xW4qktpkXQ72xJpPiAk8cDniM8eQtxheazhs16jYnFXVr4dwM4o8qqXuxjcNWSrdEhmPqXFBFYAwrtxmfY35sRK",
  "key13": "AtEnnZLRduJQXPCHLjdcTexHimzKvBHdhvaQRLf7GNTA65dMXhcpbmKMGci5g7Hr4HwjARiszXJUVJuNfRx9Fcz",
  "key14": "5qsR93Go2wcGPWE6srr4PDxhtoCZBxXPcxfaSneQSdyq2qmMpctEoS2Nq259LysCik8ty3J8xc7g2EUiSSTgfxex",
  "key15": "27BBo12e4riBDchvTAUeH7nqVxVk8SDBLiUrgDkm9uKAVWsfKTrnVcXyPUmHbD6eg4deD9BuaShruZ5zA1oUjkc4",
  "key16": "3nugj56DuLQinJgJ7TrCKHd5MroqvU4xcdDRCmoaztvHCKNfgYrgCRZBn9y4Uw3kg3mznswPHdEvYgiVCumSMfyz",
  "key17": "4z2ug6jEDjp16iaJyRCxcqPWvqLkjvaL6gKkvtSghqFLfq9hsBm6hEfsE4Q61ttVjm3QG3pTX5cAV5HRaJ5Sja1b",
  "key18": "64Fye9ZwZRUGKoEsQGCvLfG6qmX2XstAzD7uXSAvuE55bEMnWVS5MY6HptNkyMvbyHRVfCT2EmvRxA2uiUPZkvfr",
  "key19": "5w4S8Ct5rvMphpAzUst6649rFAgHewedB2UuSgivaA1gmymzoTV2tFFYxigyjwC757zzdYm7aJTsGFgcYMae2YJW",
  "key20": "2Nc5V7DfL9gV63Un7ndNCZ6Gf4oNHHBf5Uy7QDGTQbEnbwf1Qf5AVejrTedJwjXTYXT38UeUNKbj9pWsEMdqgkNE",
  "key21": "2yaRhoHsfXuTHPtAzoDWSEh5RsJE1cbhhESzJsUL5SakBjrbdwtMtV3xFSYn72YdRcV8Tj9k7jdbiXhmRGpr9nNy",
  "key22": "na5FHCs7Pv2TfEEpiDQgViNmSDGpHnsSoixPQa16SGM9HXNcdXpy3NJZoGUYMKm6qJmaGdxnyvtMn9g4L1SDtVH",
  "key23": "4dfsy6bYzWQan7tpgK6t14WwPX337qdDRUpFADnW1EY1yUC68JLYVxWpmG1xYmrXN8vrWSytfbWwzkpo8846Q6tJ",
  "key24": "63zuwN1eg8vdFG23ijg5r5LeetjLjUX7CtSHEwgU5ze4vRbd8YShQviskaEsoVfkCQWbnuPi9pisAmFamrMCjPTL",
  "key25": "5CqJx5SQqJjEXKCL83mLf3HwrffsSts2F44BuSn2yhH6sc5FzDM8UT2RnMPK86bWB9Mr6jBhVsVVCgKvoRMReoEA",
  "key26": "5HuxeAGAs1LxucSJb4JWKPov65fZGywYy6nD9PbnKenHuBdF5o4nBN28yJZoqkF6CDgABDDtZvTPdWNDPbiYA4ZJ",
  "key27": "4KSfhhrZwNAdEfc1SE7QLrpo19RfBFnejyX2dnA9pdXAYhnzghnWZ5WNCxGZjHSPVf79xaT8V5U7MwaMDyhpPk5x",
  "key28": "4wQ6Db9grBNQCSCrjqdoee4emTvBJDxZjG9uvXMRkerD4qUa2jycD7GkhRSgPfhJ6XbCGMENNadEJ59LgikSbhz6",
  "key29": "dWCZLVLVvenQNT8vSu8xF51fkJkYg2PdBv64cAa6hhLDeU9V4Rze7MycDqEz8VkvQgKf5TZs2zf1Kg6JG3d3JQR",
  "key30": "2ys6XqdKyvhohJoyyUhZ6Ltv96ECUqcGMr7QcS9VNBQBuf5FgWb89oEnCN1aF89FoKkfyKdsAAY74WXhp4T9GzK4",
  "key31": "tf9faA2YnzN5ZTGPZZtpwCucY97ziWrsddGmFeAjFXHDymcE3LHZtEAq42Q6rLtoMHteVCGjNb6jHQEqmUTo5ta"
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

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
    "3dmN3j7Amg96ubcnx3W2CYBneWsGeKitRh5GUsk6XPbJMRPFt1CKgbcd8YdkiQ7Vjxn6PQvxUFCfYK8ji4wBF864"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jsNT7WrGSXFuQvjXpc8FBoQj6JC6WnUyQNkRVoNaaHFmjWDgagFrS8KrieZBAWNiZNb7x2h8YKx9KXkqbEqnmAU",
  "key1": "3VjYu1kumTappKqZ6dupbaomPsbMYGMoisaciBw4ov1RkK9yVFqiLjC3QASwcKvGHS6D9fDikBqmxMtLbNxTShdW",
  "key2": "28HogxQRNAQQDz4pQeW7Qc6DWxWuPR6YBK4TkDj95sq43p2w9SBfuNRqxFTBdtAgvFMECG73RFDhRhS9q3hgFo2C",
  "key3": "2V7UHCexKzudgJzpa8hMb8HsGgF79iS8C5HdEb9eWsGg1GrvQ9AvxqLsHt8URC2tGqmm2q9yqHkeX31SoiZE9TA2",
  "key4": "4oVmC7zBWBzJjFGoG33Yakkd6M218TFnVKp5Rmuno7jRiX8hJJyn2M8cS87s1AvjxAmUDYyCTRVzgouxb2HnGQnk",
  "key5": "XRDLKhm8nb6nfmY5idsJ3HN448vx2N4hjofQVcXkB8FRwoPCr4PoQoLxMQKUQcu8YhbRiDJRLJAsAhbVQAjsr6G",
  "key6": "4p5RhcdgnxYnAYXFDmSDywndrfnrqn2N4u2w4dFhjPXNdkQWUavryYqA6MAryaEnLduUAQrLR58pvoFXy1JMZJCM",
  "key7": "3oidCvmmsDczbDY9y8SmCmmNXdhPExHLwCqgeTHjHzWQnVC3cfh6L6uKscMc4WvYFiPD1DcAShMcieQapY8hWrEi",
  "key8": "3HL6hB9LL8Doc8241ZzsjgLD4Y41XjGhjMGivrCAUGRVquFnWAzz9ZJ1P4dCpCp2Rn3uXtrzv5d2Ytu624z2eQNf",
  "key9": "2evJvRenL5mTyphYqf39jcqTxafFwwL9DLRrseYxiQGdheVThvuhkL1kDXTLLKAv4cLRzu7pqUHdcha1ykoVrD25",
  "key10": "52W33KSssp2vVBkn6Ljo1x6ojq5KNSCbkYmjK538ot13avK2vwpAFPC5wYRcvs2qsH9nwhFUc4uon72Qvq8pU84V",
  "key11": "2mA5hcX5BfWFyRbzBUuUwptnckREFjZmteK6MgLSZBGeAFmPbu3ddAsjmaWKiZepUpvvsvFFMVjM1Nsw5smrLVEy",
  "key12": "25ttTzRrJq1tmaCH4somWp45DhAjW7L9histg5ibiB3xxUQnDPwJr5T4HtsQuvFi2ovPRTfei9XmV2esyRDK7Ga7",
  "key13": "5xUVvH3FSsvY6y7U68GBUUDeKwkP1gfByj2kK42fSNpqbtySXoeLPkk4N3YF7p2ntf2ufmNjSsFDaq3RKSwxQUxf",
  "key14": "3GePsiN3XLvuK4pVGuzhCVRMv1ovAPWAVJNbhGrYp9AiM7vD2rVz75wWD826SLbjcp3h6SugyCcuHYmQ1HF1ovtH",
  "key15": "46etk6QgaZNwThRKEsjwXEFTSVzNYtk3scwVAsxXgxHTVKFZKNijYSPZETgwdkJaAvHwBwBVbTBMZj4nuoa2Q1m1",
  "key16": "3qem3YRNzkG9FKX1SiWFswRLycZMkUiLGmLneZHCD4NL4RLSq3uS1pQLttfvPXFS4BqS4pDAMvXPvALdFqZUjDeV",
  "key17": "2sVBHbUCdWtnPR4ZAVqFkjKpqxXW5rEJgeb8aTsuXm6wuBWBjhdEn5zwUGiQRVbZxKsYd5TSiK5xE1rrCsAtk1Av",
  "key18": "4GneoLjpb2qcU4WZVfjUYgzFyqMK2A3XJAS1Zewz6vQYUe9MGZ3LHjfNtTAGqJE4q2J3aoBQYeViiQznpCB2bj5A",
  "key19": "26h2mpXXHghJrtWNNFadfPDb6WDCkExCamJgb8BQrbCEvHE4aTHeyvddi2JWP7HzzCVb9eNr485n9myv5YpG3Uqb",
  "key20": "kRCyiT3T9Bmno4GoBtAHoB3NKRunfs5KQhiYWux9KncE2Vgc5AHHUGKWgquWnhfBVZFqHzBLN9eaXa9dh4F9s7v",
  "key21": "4nAGtiVFfmznAefudwYbZ5Nx3MaSgY584H46kDMXmfn9F7N1hG7Y1fcD9QuY3DighZ194n9Da44sszbQHAgnuQUB",
  "key22": "4PVWsuML4ZaNxFouQvNLPFf1aCu8zDoCXAVMrx4tcWtxszqMY7caEYUqvpCY41g5NSLKws7HKc2uzimMkntRkLNu",
  "key23": "4k1hwiMzRiarr23jfsuSSumd2VykxnRuiLNCSBJD5yvZmG6k3bYYLCUh4W1MoX4BeA1KNonFvZHVzQjuBUNcrM3Q",
  "key24": "b51hsrSPopBBEN47g7hvTZ4Wyu5rRVCdML9oegvrkZthSUKnJz4GNXKr2B3fdcQ47URP9ySCuzyQpWg2BFMWYqU",
  "key25": "2dHegvz33UF23EGJdPpZiWyVUWSByYep6TnNxiUDpDKeus3hGK4byiw6bnDowxKhhbTstmBKmKtXzuBn3qaoGLQK",
  "key26": "2smEFaGUaaCvN6zwyg8nFoYJnqmnsu6JoXgB29sHcxg685QuD2nCDGMGenCgfGAWJJaBu47VwduYAaVK2nQw1zsm",
  "key27": "E1CsP4gZTezBHGyk1HcjrHiXym86KhetR857wx8Pku2D3493WsywB4gB1Qx3X2YT1UKqYmqx4auTvx6Sr2fEz17"
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

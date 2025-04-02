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
    "3qZFfRAZtz1EdBMLUgdAR2uHYVfUXRS6JFtEdMHtsfo68AP6umB1PDeqxifUYu7ZEn1yRaZbZDHvshjkg4Z1ET3B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQ3rUy3rVjKiFu4i78APkfZHtQJJ45D3HrCaUXowYVRPZPofcmYeFwcBh2J6Cgk7X3Xyq4VrJEZQL6be3mYkF6Q",
  "key1": "2BjunWZKtLvFZiKAjkLUBN7trZcJmYZw9bNibmFTeFWX2GwSyD6zUDE5KF5mHBDi9Rhw6WyhWf1raoKzRGsEvLDA",
  "key2": "2rz9yPw9BrwVWuSvuYyEZH2GRG5oVL6G9yYYRT8Xfjm8EiebNupvyKqsGLGB2fEfNieCu5CoJSryqMa9NqZkFLhu",
  "key3": "2ZHnCxQXjh765fhueeG3fXbYhaNggzDYyc1yPz8VvBqpheSPeQbF4B8t6at5UR6TABwgiTuLTooyRdo3KJ34kDXM",
  "key4": "4nrWMPt9T1BmekB3ygZGW498rCJQ2LAv4vdwWqCsYR1ojh7agWtHNy4ZDYX8igjhzcrWDfPcMv85Tufdr8NrrgvR",
  "key5": "71efyegtirzkKJ1Cr7WPvrc6mffgfTRknWRXZxmXnqNrawdgcdexNZ9zkmqYn9RXb1usGeF7ZSkVESeLZbd1ufP",
  "key6": "5GaCXD6Xabi9bfN266wu7fHbxjUkS4PQDucV2ZQnjnVe4xatT2SzFihA33yLpGE9SsVYMrpJSUTeY68o6dvRWBQh",
  "key7": "528PBWdNu7t52ZdZFSSM7Cd9HbWHqiZ9De2queHsCGgzqftk6FMGCRhHaFUVL2WZ825QNZjocXKnNkVAKaiqL6qG",
  "key8": "665sk4RVGxTJKdBb5k3khzTeP1wuPdec61U1vy6jdtErW17xXG4WsWpJ9SP1qYSHi3FBKcBYieVYz7wBufxwNY91",
  "key9": "2n54VBDyhkhDaDJizec4ZkCSE4ocTqo9YoiCMd79mXc2xg1WFNSuB2XvapBCpGHoc81Wqy9MJ1xQNYsYwMZ1uz1J",
  "key10": "29pUsg3e48guhjXSXoffJtz9xKn1orfP4ZqSqN7LNb3Qy5Z2VxBi7g4r5ZA5FDmEj5WKFxCEFqfuYd1UEHTrzHAv",
  "key11": "4jCL4UnQ3ZBRSVSYNxZCeoh7gSfPmJihs15wfnHxSXAyNgLnFi7VWNBRaVC1EgCMUm6cc4WLwfSXUWopw2z2RvRX",
  "key12": "5P6xFexs7Z5fJNBLk1PkH3c7g8q5a5BVeG7rTAXHZKJsZAYfoWQH9YuTNyE5quso2JDLyjqYoEschP7FYsdSudkk",
  "key13": "2Efv6wFT4eRL8EUhki3zMPk8291ePaTJG6tWvrM5MLBz2SHPqZjoveCSZcmkrjSjWTvcKhv9y4RPxbeFi4yuJEKS",
  "key14": "3MnZp3ssMYZ76GTd4eL3QYifhTBoKxrNcQqeCpFbuZ69jWs6sQkaLDq3xijqbhLcvj8pK5g2oediSQLk77azRFFX",
  "key15": "4XoPRTdeLJ8n3UmqJE9fDzAzkkjucR7BH4sVn6xvw8bXYQtuSJbFCF6Qskbp42uAAjtMeTMJEWPB5givFZ2zV383",
  "key16": "AJQ6uLVHF8cR16dTPfjiXUc1zFwopfa3ehxjeZhemiACBR3QRwhzdkai72MCsk5i5RcPsPxxZDJr67tLh8BxW2t",
  "key17": "2v5FqmKeXeTzkuLGmZq4aSFWapKjQyNARmzQ45s4Mq6PKKyHALSJoxrf1j6XXPXbVn3kVZGGkTMcRXxVfd289P1G",
  "key18": "2PhV4vZqS6E7HTM5mqFYsNaiV6Vgnt2BajzbrXFay12LFuJHVJWNXjYxydmMVL89mQXAt4B8VVM6UVpSQN2izHzh",
  "key19": "5cjRFxRxHQAmpEANC16KoHLu5H7PMJstwBBox8b1B9NLJtHefTKF7e4bD8ASokWNXVrncVKHAkK8arrsBkvh3vdy",
  "key20": "3tofNuFEWCP4fnPMvDnavJNkNqvouTTx8dUkXiuq5s2zGPFeMBBksRz23W95HgcRYxntKPRPUEs9cxyUKjvYk6Uh",
  "key21": "4wkJXBkgvvFnXMnsdusm3cme4CLKmTrmEzS7bpShdMyjKzEBgL9jhwejYDNkUP2YpAyaZDbDgiRW9ZPHXvh4SwCC",
  "key22": "5w1j992oS33f78WusbKBbLTd3WEGafnYxF3HvHX7SZrt5pbUkuy2EXViEJqoWMB4qpxQEr51nX3SQys8wYppnTNY",
  "key23": "4mrEzK2JXN3yoB3RU8mvLVR9eV2uCxa1VwkYCFtDN8uKyhTNoVRozrGcctvNrRqKgXsQCmJvv9xnZW6zdAT9ok4B",
  "key24": "UuQFjc1fu7bMoRg5VptPKNYZUVC6CXzrMBPq1VemRFK1a9WLHFUikHt8SFExCDG9FKjv252hwc3SALVo2gnpMM9",
  "key25": "3Bi2kGXQCVwu9oSvKPqZ1qkTnBG2oGRRYouP3nGTxy6pfvMY6YAc1zNyaVsJi9VS9uowPLrzGYzQ3BRNSMErNP3s",
  "key26": "4zug98HBSn6LCEyNVJDghwkeoWDUpL2aw3HpoKEaJ9dfGcbrZ38PBMcXZWZYadjYvW7SQNM26Dih5CQqDcowqvtv",
  "key27": "2qzVs8yHwbtv7NZW9kxd1Cbxc643F3kTKEmAtM7simDWB2LNgaTAChpmzUmQuKxaubsSP38NNCySWZMxca792T6B",
  "key28": "5NqqxbiQgdsqp9DuAZdVpVLyUzefTTF9THMTSDpxEndWVnW1eiRQXjD9AqbhSUiTWqBegy8zF4t8kkPqDjX1n6nH"
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

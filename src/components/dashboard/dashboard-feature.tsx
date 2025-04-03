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
    "EvvnmpqRUuZDDzvuM9dPvUHMTzL1XcdXKLhkLdrQgVvsqwDb7q72FpCrNmF7sJLT3qJ9GDyLb7EbqPNjh6d1jgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pmGyEUDpuDb87wDhmCmy25UiuFi7e8GSnUp1hkeefBD4sU73s59tnM5M6AcgDVXppexhphbms97irbEfyoEvvfw",
  "key1": "9xmW7ZBjom48B3JRJbBfgHwFRyzrWRirPFJAWtsLnkVExeJFiELciRmVnDYt5otmZGeTwKdD5ey1euhzC9QEptC",
  "key2": "4RgRxBJ6SXmzKkcDcrp2uXTqikgUhSHf5ukRXMkxctcqpDManWAEU2sC4fSfuk9cY3qUbEYWyE3ZG8qe7Kqsxzop",
  "key3": "4GXBduh3ySae5WmBQerFXdHciXPwwSTXycn1ZGZK4aifVzGEuS7EyWj3JkoJBFTvbh3x8r68pb4nCJZWWSb3A17Z",
  "key4": "3RWPMVbCJZ1Rf6yAVeZpRrXgptmG8Q1e11o9QdhkFs3rUQjv34URmashS7pCkke9SCTXo87eWwNmt8gW2nU2iEWd",
  "key5": "3iPtPM6DoUGBt72tuTuQLCMxm6L4SGRSnxhqWvTt2W9hcYt8QpiTj9uCrirys6odPCFcDsMGX7ydmoLD3ayfqxH1",
  "key6": "4LKkTHXXtztg2d7vqjZDc2DpoBVchN3wHpdnNE99oRb8JLrMrzTa2GgPeTyfFuqttYZBHJ81rAdwdv6u2dGapWiL",
  "key7": "tyfgW1uoWAmgn5bnLqJdrZBhY7PH3j6r1P2GWt6K17yn25EorbsKH5m5wmDBqt7XD76rjn7ZWJXc9VdzeGFnkXb",
  "key8": "35A5duTdNXsT1Gnb1UYsDKBgnD6ZuFkZfL8sR4KvcYVCzqV11FzCrrJT7SikM2MmbiYU4bXWXxqF2cCwadq3yLJK",
  "key9": "2ZGYXEhPV681ySj92pwdD7tSrrjkHvRhXnKpsk8dJQCaEJWeNfgPtKdfPWjrwS1KsA16ki76NQ4xcmRfosi4YuN4",
  "key10": "zeijxyXCge4g49qjCSJQ4Rg3kMKhRamksu6vKKknfoWwiLu441ttcKXM3tv8adqhfDD8TMEse7T7wggaYcRYmrz",
  "key11": "2d5ueUHgXhNoAxuS29UYJ19x88VbzNmqQHnBRFFGNk8J8oEs8k49yefjs99EJKv29eLYupRwjG9QCva4wWTHZpAf",
  "key12": "2CERQpSm9avAbDe38kmvTdAvcSb4cnfrY3GCM8mXvAmb2Vh7bd5qSxfRwf3h2nHpWWepmdnw65kYe3YfMSd45Jpf",
  "key13": "38nK1t9dUsoY3UwhmguNYqUkj5h4N8ChV65jyVNFuvd3ejN9TDdWVWySuFWvr7Gp4KPW6jG5HkHrqHbdaFpb6U81",
  "key14": "3AuMuM9adff9BWCzN5VFU1KwtL7bo8XsehzYe2mL6xEWtX5vm8QnH1cWxjESwAfoRcRWAUK4FYwbq3NTX4qoybsN",
  "key15": "2ioCvEgz6vrZHUyF7tj8G9w6ALRowG1JnjCehwUho7LfWpAtvr3oEs7RC7x2gqMCefUbwceL39J5rrNZ1PkgehD7",
  "key16": "3owukBPeVWJBUeZAxwkbYYA5H6JnVeQd2Sv7Fgqtf1TaJShYgJKUijYjSb2y952ME9FbhhXtgPU4pgpTeiw31XeE",
  "key17": "h8RdVWXf4fLqwCexWhZqENZSWstLhVvPXRFyvR5tM2Zck8NVBtiFjutjZ3S4CQa6SSUKNsxwr4gocX3coxcfBLF",
  "key18": "uyHj7jy47eJpCJYKrdKB8e8ighBUtScsqvDuUWxxFfzVDCLp7bGRkVb2mMyBbnojGaXJsNKTunHz9GvMBa5uD4m",
  "key19": "37jX3R47DmUYWYHom4n4DTGfnpVK2BQayA9dFnz9QtCYE8M4se4vbR58TW18Bg4fjKF82o88QHJWBWQ3tVTRTd5k",
  "key20": "5KZJE6ahLvUE3j1h29G9qpmcmK7SHDStAYWL1KNf9NzW57cgpofyjnPWXCSwRCSHicB1ffU8awPv4ctGnCyXTfA",
  "key21": "5genmjVS4bTsJPLQ7BPrPEoBPUr7KFQCRorCyKjNmcRXwxZXt2Spyn6B5QZbHHGK7qm4jg4KwimU2kzEoETkFwGC",
  "key22": "2RMxxP44Se3mpRWnWLUqVHvEWtEn5QUvB5GjJqE3SW3V4MKgvHwpPc7C14jQ7K3xJQGyJoCLzdPNfAp3huk1t6ra",
  "key23": "5MCWmWvHzdLDKp57rvBUnvSDf7u4vLnDTcrmbrGCNZmDxKuCmY1NexEewgzJcG1DQsFbuPDucsr1HEHu8X1obqnN",
  "key24": "5ESVgCFht9bLK4ktYJQUApRXE21deZbpQa6wGMRHo4PkucRFFKVfzzqomd6RaASNjGxT5wFp3s58mpdy3dE6D2ZF",
  "key25": "21J5CDyptxCwevwBiAXrVcxeR51tFsdcZcgmvtkGQHSjdng5qhwXPeRyg9gx7ywgQSvHnHMyJJQirPSfS6hvxQC3",
  "key26": "3rihe36V3FMNsihrjrq5NbPFxo62sGLnXyAcDSY89JmS8jHceTgyyUphmqARVUcDui8cjiskqgtjDHHeXwPVgs9g"
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

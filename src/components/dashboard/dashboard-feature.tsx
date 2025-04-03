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
    "5aMaroAts8jTVbPhpdGrPWVQPRkXFEMztP1Bg2Fa22VjxxAt9dJZhoUMLmkq11ZDGh7QANifXdyUQww2zkFUWxDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddaJkgggHgxBsqujtRLpsgBRxmLdiqmEnHdx98RAcVix6oT7hWxpgPnHC77MpJMrxsQMTs28puugFejerWqbTPd",
  "key1": "3mRLrar4DsBtTiAVsHquBSg74Kw38zgXf4d97PshRBEaU5MbZaj9tokVUVCyKYaw7dgdLa94sgpgk5Tj6nS91wpp",
  "key2": "U8cddn6fPged173cvoZDX83R8JAYXrcpdhSkoehThUai1EK6rnBuz8CaHemEbHhJYPXu8C7Le1joQyhVaNSj7cd",
  "key3": "YaQFUUEZa2JxkJVzV9pEMFxbAJ9puM9aMYvG2c85L62DvUrXXnEZTob8f7FcjtK5EDD61jVisF2YdZbKRzhMQhe",
  "key4": "3JQhhEjacZPfJcgdYCsEKNexXgwsMgY3cVzRn4xv8pUPoyURVKK8azio3AyWLXVq4NEVro2TMCAvpqeZk7rjGhEd",
  "key5": "gxwXk7GVBb8FQ5iVLxCPZYDPbtzus2iD2Khe4ZpQ7MB3h8xUjAFxS9gQzwSsuXw9hrehKx6o9Fgg6bWcv4y14LJ",
  "key6": "47QJtXzgHQ6Pembv5phBVFtRVFfr7r7QjvTDHpf3dCMPZRQyqRF2d7LaM8zYrp7QhUZctRUx6NoyYwXEJS7j9umo",
  "key7": "3bmJLjq68zCsQmytTMT8fVvDYqeYfMFicAoo8cAYTxFRN8QJcWjJTXW9CxeqamvUWjT6DXSbA34JY6MUQTiM27cs",
  "key8": "314ZWsdknnkem2QCHTXKDz94zsAUFUbEndNri9JwR2Gy638wBMedpCoVW4oDdwfjYX8DaFR9UZP3oRb8q7PTFtPX",
  "key9": "PqVqcefPfnvibXxM98ddbGYcsmceoTrQrfVQd8QV6eUnjCtvEnQp8i8DX43DvM3aL3sPgpKzxC7ZS5R59upqVmd",
  "key10": "47B93Ayex3Scs8JEUXUHv4DvLkqA2VaJGnFbMJEDwyzHwfDzaMq7QSbwZLCZcE8bnyjYss2vDTBtdThzPQFyku6J",
  "key11": "21p4nxpwZJM3w4PGcURp7EJwxyAkg4QyDgY787dFrir3gu2o3vb3TBSWigag44rGKiCEEPTk4QuLUzmAFhocCwm1",
  "key12": "ZapoAoFN8smAmZusTYv4CXkeyyPEPkSfU6jU6hSjCSpoVLMX1TTXyUD3aE2kjYkRbuR996FVUBphq8XWqzc9dcM",
  "key13": "2B1L2URFfz2UQpuGKSEYKAwnAoD3KcPpakAWsHJ6HVH2CjDsAsnNiCnBTRt8HVojzBhfgNQp2HebPoGeVtjCe4wS",
  "key14": "3MtHr8s9uWFJRsiAYuW8FMEuhpSK812Ebrqay7fJdrrYBwL5rUZHhvKZERfYXukxW63FHXWktSM4tDYyJoSXUhC",
  "key15": "5JZKfPR9r4ecbP36zZsGgq2GtMhxxUwfTA9JasUDDGfqXcbET8ARk5GMmvn5yiLZoTUZ7RtPhz7WnmZxmtqQaMrZ",
  "key16": "3gbV3ko1Fn23w4rbqwXsGfuZJHEVfoER4zbmiuL1Wg2dx2RyWzG7PEJr47pEz9rb5Mo2Mx7LPFXxpXSGioBYG1uk",
  "key17": "3jKDpEP5MuKrnF7dbwic33dq5jAY8QoLmBSTYpivLNRAMkXU4YfRfcNLdEGYB26FoPKgKyycWrPw1jFHcMn2XQwA",
  "key18": "4RS7nq2cjzwraFuisPAmUwNd6HRwdZ5YQYuKxJpuBH66aqBUEycVGe56JtKioHKSTeysyPneuZH398YbYKJzmJ36",
  "key19": "37dSwebqz8nHKR7ykYZ2NLTznXKRUaoZML8eh9bZ88NHuWSgQajd28HRDFx7XacFfWPaTBBXxeP1L3S3SDXBwHAy",
  "key20": "3U3r1thr2pWPAwqC7N1stDFAhhQZSej7negCXkrosu5VtNGLsaK2h8mu7ycGgLqMsAfVaSKRKptsLS4Vbxhz7M5J",
  "key21": "419p3kksABgDeqirazBX7xY9TPPNFSwNc8uJCDiytZfpGhyRVaY1ZH8SGzWS2ju155eFtzBSEZP9duwyEpSRAqkh",
  "key22": "4XsTAaiVqZKw8gTkxXqS2c3UQ7v193KVZaK85xrpW3ztyhekdvmP4JjPC34rr49xBKvxHYZULnzRxY96zKcpBcsB",
  "key23": "52gjyvVUpXX11zQiLvTRifYWEV4688oJ7hr79PVAE5H2oUm5Lh8pmXg49WCzh2Lwu2A5KCFZf4hyH3oPyPWhuoAc",
  "key24": "3apZseU5PxD1DXU8iqECL1zwUw4xRxWeLKTNqok4LxvHbd2o5h1NHFZTPYg1Q1SJbdsS1C9f615MFjn4W6RRELUH",
  "key25": "2LHg1qvaqaXsuRG61XFC1HwM1xZgcomRdUxepvLFsVo4tXiCV2cLK1kA7wjj3zPvNrUdrxVkWmsWLQsgp3D8C3V5",
  "key26": "4NX4FxVZE8pc1iJYFPw4ECfc39XfcXWWvvo8oXiLH3nwQjs8vmEeiDNGg63YmwxFfYi2gqNfVcbiYp7bpQAFFAM",
  "key27": "CkJwtjParoA3jWRQw61NxxcQ87o12obKxUvwGLZrE5hyeYJGLnxjaqbvekwhfVZJ992YTE4h7qdrWBj3h7xSzZ8",
  "key28": "2k8tWYaMXJnoBat5okjZF9sE6fPVetujeKfoTHQBf18vyBQhcAMt9Wsk3wxyZ6dPYh7kg69XDpWHsj63ZscMN2Qs"
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

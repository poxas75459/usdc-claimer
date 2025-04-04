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
    "2iCz7BhvTLV98LDSVWccBJfd3FehAvrMbj1PF7TcUDtQujdGUMtvTL5x8VBEcu65AAQJaRbrVYLCs1CJ6vcf1M6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QtYDGxujxkVstmkiTV4AJtXZkivoWYCpGfWqu196DD3PvDHPZSQNN2mDEHy88R6GiZsAaoMAsGnEoG9X3TSoASc",
  "key1": "49k5ekpNaW5gUVFFGgB9QyeejSL3aqWnRXXd8iwXZTLbMtXmiB9zPJTZGiXUeiW5EdwQhjg9nf1rfzUmmioSNMyP",
  "key2": "5J7KMibbruVDbGNZJdcxdCPjNHRmqs1ZSssfqRnrybaDr4R7F6RXzSQ9n4Guzs5mSmcWYtLttFAi11kVpE6NGih5",
  "key3": "2YQyfpgo1rRnkNy7YoivMrbSHzsYxeiw4ashXcZHQ8TMuK7tHQbn8xGBZ6wyW5Rm9fP4fSHzfSwRNNF2So1zwPV6",
  "key4": "3cuYX4ywRJiHZHoy5hEDndq4LRWf1N7cueCnm2MuhMwrdBGQZh2uUjeuwnVW24Lsee3QUWhYmR3wR5Pkq5A65VLW",
  "key5": "2nGb5n5532QEWYMuCd5cokEizFmmUYuqaDmxUp6DeM9Eb4bq53RPGLx8bPSEq7SA6hH4EFYinFiXXEiTRDXyh9VP",
  "key6": "3DKFKfhSBC7fZPWeeTpneXpMbzaKVaYQMMemGDLWH6sdcrLXFUzBrR1vvrNaqF1ePCXrDH4tk9mZNUs7WCp4VWPH",
  "key7": "4kD1xogVeYP4yTbrDd3sn36YQx1BXT8hsgrYeUrk9bukg67NpQZG9CGeN7iGtZhECUaXwPWdeYY7W37EZRVw7VBQ",
  "key8": "5qTHw99CffFs9vf6AJGsD8PoDGTTcuWQLHc62cfgdgTvgazLo5PDerDYhFEEFkR5ADnEk6iW93fnJaEkb6NBnWRv",
  "key9": "33mkAAj3hWSzaxVDVyxmtimFhDbpsLjJQPqJybrLkZ67DyLMXwifCtK3SLy6mGaM47mFbxyhGRv3oRDtsobGSYDz",
  "key10": "4axLGghH6MPA9c6QL8j6YpvUaSEBteu3zkzfstmUqsziRzuVuTk4JYNw1KAmUnMPkKeA5ndjnsX8Ro13J8T7yx6Z",
  "key11": "4w3dTHjsgbrqNNd318XRrRShiLKJSXCnNhRbF8HRr5perhPrPTsApE9FBHPpdHQfws2egQSYc1dJWYdEMqAcpyqC",
  "key12": "QXBj9KF3huZ9vtsmKGXz1zr7F5Gwk9878r76nLieRfvrm1FMWAUmEnLoyJkYrky9tf3pvryCjw5d1i4Y12wLPSd",
  "key13": "a5yv3g1ccXy5WT6sgaiMpeBdg63aTcZqqUcRVyB9663GcyJZi1UXSM6d8VsMCeYCwEBscJyefmZG4VrdJpbzhoJ",
  "key14": "3AoKmr5Y3dFnYa1eFssY15VDD8R436wq3SehfS7ZHJZk1SQ4yW4ZuDT8uwM9kPkmsEezGzGMMCHmZkatiKw1ut3Y",
  "key15": "3dycFXeabpzW8Piy6oGTd6cQvfq7L8GFtUBfbZMHxizKFGiEDTmbZVQs9gzZE3XAdQ6VbDHAMrxYFJ21WARsGKKs",
  "key16": "2pX6VuS2RceEMF9S5jiw6H4WviomzFc8DXBuxgUcMhhYZKUqYFeADmCAocvA7hhh3szsgZYgsHBfk9yRHdDYMqbR",
  "key17": "3Pt3y4fpYQGdXAewxcRrJ67tydsnAQAXZPQE6XmnsMw3zc9tR6hZjckXGV3pRfPc4DpQqEejF9ZBhtQXEMEhB6ki",
  "key18": "2sx5KTVZWnJeSYVJkCTeQXwNtn4fvt53Ehhi18hQygf7ARKx2A2MSkxNJvdvnigDEGKPEisa3ZC1rVxvuvw9NKmi",
  "key19": "57Q6eSLf3FFtX66YgUSbeLpzjoFAN4VLf7kWugqS8ZgJHg23tzTUkn1bX6KYyKjGfLVvCGM49fCDk3KLKWRgM4VZ",
  "key20": "2kez88JxGAY5rAhpTJ4DpxMZr1fp52EATKjmHftRTouuyb3spS1RafL6qmXF1LQGzzqnseqkx68ZSQhRGjZgkwN7",
  "key21": "22TbPmrGrQafTFSxVjs7n29BcZv36mPNYj5URQEMyCKfMNMFhLs4LnT1dK13Hw2pH7PHBULsAoDnbRi4cnfTfqEM",
  "key22": "3QFBYSAmaZ4FtAPqCYi88eBium3Ce6briUDndhpSzRMtSDtrSY7Faci7DSLTXYcxHif31X1xmBZ7SjYUVdSxhVr8",
  "key23": "2mUF8JHBnDwiodBxSF5CbsK7iAHoH9B9C5GrBNZeqDcz6oqgfc4F17zNMfgRB2QniVFsXs8c83dt6qxMCVTE588u",
  "key24": "2H1QgLJDWSZATJg7tTFMQ3nUowo9RajK77jut8YjzX5CqcEqG2i2B1wyUYy9XuRUFTMRHm1bAZe5MSh85H8rvfWr",
  "key25": "EKwKqCACRHRzrbNi37sRFdaad3FCVKjDMSs4ZFDkTyYbJuS9it8JHm2D1aaSrfx2Asacm5G5QE4LmQpqfakdqya",
  "key26": "2NTYxYiXVFX6FKgRj16Hfv76Vch2sG5yV1SwH9WmgwBHESGrGfsra1kUbdaSHhHZks1A8TUxR8t7tijmFoJJYv4e",
  "key27": "2R19fmk9YcDVV2hP7CAdPVtHZRPFbtdmx5EFx57toAU9bZZ4JQDth6S4A9mUEJumFTvtgB7wyQn8DBc1aDJnG3nt",
  "key28": "23SmVGgoMvF7NuFgmCyCQGwVMGYnAPqwTLyNXPfyKHwsrcMf9fJJ2WSTPki7VxQShWANW7dd7CseH7nUDpm6cr6u"
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

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
    "2888Q8aG71vUjasvh8HjdmGFUtFsEwxtzgGteyBHoqrCpZBUDihewHHbRAANP5Wu21BWvkTJWYtEJLu6J8nqu2KS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q2BD1idUd7NNd2wiJWFm2mNRW2Cjq5PqHhXkoR5sdCBze7pyGvYYob2HMnYVd2PUjW24VQCErnzn6oFUzxgRb8G",
  "key1": "3kQdoJ8dV9SJuLXRb8ESBW9uyzySPghJTf3BtaLNEbMfiE4u8cTyHEowrq82fLRr1UT5HVxP821L4Snfr2YHRK1b",
  "key2": "4FWVqoX6q7cyr2SyziZkvFhoSqaDMTvt7wfuqSpXi5SitmPuEDryaRJHTSDw3di1pLnEAHFJym71CN1RV2MSPwuG",
  "key3": "215Ffs3g1QuLmvd3cjZX9T8UoihaKG8rqQkuQobL3a4kNSAMkqmhhh8ASysMYYTsSW5RcJeYZCoCEf1MhHcdoiFj",
  "key4": "Xdcahz8XzTrpBFtMU2ZxQrdQ2aG5GZaqQBFRDihids8AXakARovvLt4zEuzRfBSQCowyKzfEbZBc1gX8Zgsjyd9",
  "key5": "3gMGX3FKX1kLMC3exQAmYZNGh3UjELrGagwQS6BQwo6CiXforuaxRvb9utSUmA12CZvRkRQV1KmHrDLMDyyWTDQ2",
  "key6": "4cQV4Gafdi5qHSwGP2zYPvJfcbKn2dm37k6s2e5b8Nfh5rH33WexBnVpEwaA7buDpTKj84Fhb5hEJjMJ9Jfn9QZ2",
  "key7": "5UQm7VJLtg99i3Bn17NqSN3eEZwYz158cfFZGU8jFt3apLx24NHxerdJmS4bpLPQR9ZZ6EBdAkto9g4BenX4Cnks",
  "key8": "4roH93Xi4Zy6z1pzF1upQHVqu4HGcFk2VmE5rBQQmgMPLnEFGN5QXwHov3VFVzohrfpFNh3gps4jgyNj5g6xsvzh",
  "key9": "4oKxFNignc4kE6vXZs9ZAKFJVmcqHGb96SEC7DUj7gaLhSHLvvKwYQQ8cDHXBQz7kSnbhiN5PJWxsxa6aZ93acHp",
  "key10": "2WPWeXEKzNt5Tb7wL6rhhSjvbouKB9ExsWZz7Ke5HpFVBkpuoyjN99ULUHiVjrwVqXwQbw4kM3Jp7shWqRCUHEU8",
  "key11": "3vTLBQqpo6bvdCVHs975MxqKHjWVr6AYZWqPQXFvQA3Cd9EwiCKQG9rm6c2q4ZajGxAaYG79yeqzzZweXZc2hoMt",
  "key12": "38DuKL13C6sTR99QuzeYcpLfBZNgUZ8rjsUoHMDMo7MPDcJUcWF5MuF8x8zpNymoEAa3hfM2m1Wd3unQkr3jGfgw",
  "key13": "ZMxQE6ThDwb31hPiiPezKPTJYQjdc9TA79PWi1e5m7ckhE8bjvBqcP8iE1o1nwSfyiB64Xpgg7Q69MeJnGPv35A",
  "key14": "2HSfkJYNQj5ixjMuNPq7aSREJ6HTCARBTic98mZkfXHWPJe7D9czddmUqSE1WbxmPqExiSM1LNvY5WAoBbfF2NFf",
  "key15": "2UGnXMtFbcTCvkV47CrsTedbco3Bmbs52adguGZGKMNDL8NLgC9H6JkexaKSq33sPsgAmZ7o3yb2tXSKvZsSaYrz",
  "key16": "FwbnZUXTcmx3QrqzAypSYkHGv96dS3YDD4sXciKQLGukG9EQG9ziay3Z3HZwfhf5yzcHYSh9xjhBvAtrTzTwUru",
  "key17": "3Nhj9Bkf2RXrbZ7rWjYyBiAxoRKhbdPDuGCPd1Ch6fgsowhULANVtkaAYRJVM9ESkQGnwWfKS7juvtjuWknQ2cWG",
  "key18": "4MRugBTKyTwUqVBgUahgMbtRaQzFfcHDZFJVw2W5ZnM2PcRAHSFQqfEz1ukYP91UKbBag3wJxvaBb7xJDkbnURqo",
  "key19": "38uJb16Q2jrYUnD2MAYrqGUFHoP5W6z8mA9C9HUsJzSpxDmQ7aT5J2WiArkwqysz9JWGUzz9kdFudJqjrctGD1JW",
  "key20": "2k99CjonMkeNZHMoJ8b5dECjk3xinBni75nexwghZBJkapK83QdkuQnFA8Yxh6SEnDh3DbLoGxnq5gSFP4zj4ZVN",
  "key21": "3LDeZ1FCgXbjG8ejVsYgNFN9Kd3Q23c1dZ2F2zkeoSTZ5hoawvmuGbCG97RLrYF85j1ho2n2dKDgzJp116jZfSn5",
  "key22": "4z8exATbks1QPTmSFaoi46xwPzyT3PnucHUDofi1gY9Z45ECdn5x7TqMiFPZk7BHTUMNx4qHkBKJYtjNhBneTXM8",
  "key23": "34PZ6VXJjFTzgawTbzGiGdUybepE8RTxCSFo3HzywZswCR5MCFDR6aKCo1AdrNYb6mr8Htcdhj5wthsxCDppPQyJ",
  "key24": "x3Bu5edreww3RqTDLtSxqrzJGSDNudArLB52A9WNYFDtMo45NvvarSh59JLiugzWhevur2aX1eAbTNKECKvbr5U",
  "key25": "2mxg2LE7aEBxnr71pf13U7ABDo34Bmcp41vLVkYdhvhD8ZLcvYC3vu5ahMnvAuoc41VHGwJMxfgGvomdpTievMFs",
  "key26": "4jk4WanD9M8F8pAbYfxpysviifnDrk4kdqSi9xjmdWSeShkLEvvXTsBvFKpwAEV1kVEPoMcdGfYjR7U1hqmwZjd4"
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

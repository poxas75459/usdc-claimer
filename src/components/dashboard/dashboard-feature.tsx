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
    "LJBPQqxQLh4JYEn3Au4eXxWCtGUGw1bGhpYsxwbYDAKbzv7EypVrS19XrA3YFk3xUHHzscmjM9YefqRFvDPRz2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVDu2NZsHx63QV1bVyPeyhkfmRCb3MkBo93nbAq5EYqSxASrhCWhPJvLihNs6gaPxQw5Ri1SPdSvgtJZuu43SY5",
  "key1": "3iRWzC4e3jBqikuq1cPcp2GrrBK5bq4RxLpHsVvGDUfbvnJSTfTQ2xyV76CXpXZiqNSrTeZFh1H9yA1uYCRhAnY7",
  "key2": "3CNKV7J87tp5QandCzQDsDeCud3YCPGfq6i1ZDsso82cdLT7syLNjrTL8n8k47qNjmeiZWN9TRMypy7jo25UDq8Z",
  "key3": "tArdZuh2grbUkpDmEf7QqJQ2hUPATwfm5XgEBEQ9AmZSsE8Gh9vYTBPpTWrXtFMFCTAxdAU7J6E2x913UGVNCFa",
  "key4": "3BcfRGCEUkPrnq4HDPS7E8anSCcit1a4aNqi7AVBbFKiUj7fijmQBcspR1o4iVk5dXiB1ioopmePGdTFweG9VQCt",
  "key5": "3FitvQLF8JatCeV9cSvkWiV3Xsn98CeKXFeUaFcMQ7QQP3fde91RGUyWDFJ8JZLutut2gXvJEsNWsy2GbsoMHrDw",
  "key6": "XBDBLvWfMbtfRmQwioMVKFtce1UVK1vJJkoWxjzAAKH1tnLcbeGeFSxKrDnBFGfHzuH13Dy32qsw2UBm25WX9XH",
  "key7": "21mqXdUPDJpwhw4cktR5UGr3zkN12FhPCWMnmhWqJum3fvASfCAkB9hRPbtJ3z3NAQKgxZeGTFcGTAuKjB6GmVzM",
  "key8": "54qcCsQK8FCanLXPrBHx99bwp7URUHk48iaJTnYTa8U2VrXZrw9HdAS5WYfBKScVY14iX99JjqWBRMaHvHxMyC84",
  "key9": "5disPdq3xGNXPcW2GgStn3haZNDGH9sAuorGaUQHStcxutjAsNa1z7vfahQkcV2asbprL2T4aRvfLYdGy9teeTaB",
  "key10": "VUBsqbDasLBoJrsyxocHvLAik3MP3GyshZ6uCrvyd8Vzk3dNUTgLLNcLgTByf54JmthL2pB8LKzW4jrLLVN8XsJ",
  "key11": "3kz57htkZuCeiFK98Gg8SzaiNaqBh7Mv9wre76cQRoLPgx8RK7QPqemRDYp1MKra7TR3W4W6VQMfXQkJnoH1DqDA",
  "key12": "k2XrLUQXgp3VDHSC8aJLujJDsrGpjsEk2ZzhTCZZZrprULfK98rvCrK1yLBtNW6jE5hHSDsgeyaTBrhnwDhhaDs",
  "key13": "2YZgxRbm4enD3NuuYfpa3PSYqw8DArnhJgNDU9Fc6mBGFYUCj4oNMrKqwsXEw7GHvwNf9UZyb5pkgMhW7sTXUut4",
  "key14": "4TLFQmTGBuGSET246pUwdDUumrm2JgL5SNU7XBL6QMosMGnzokhcqzvq1XfgzHgqmBGthq5FbmzeKwvh9BuTDfj5",
  "key15": "272vc2qwuwGSGVL3nzzwxU7W1Nng5pWMtPG2o6xpZftREAwKLF2Za74AqvCmKPXqW8cGT1x9cLCKrEoSguAGwcbf",
  "key16": "5W6JL8zi1twhAbCdx5X8YhdiebUSo1YpUA4SSGZz3YNEdWTexDjYmjJ8vDHpuhRstQM5jXTSdDkuSsKgUDcbFedD",
  "key17": "2ybD61tAicoxn7XWMipc1TetSSEtF29cGG2W9pGHLHncqBmFQJjkmTcTxYUK5dJKvfmdBV7k8sv7EFrjCrPPVdiK",
  "key18": "4rFrpaQDiXv9PRV3tjqV9oVksgJEyMvqmMaVT4jT5xPBZ8SMVYy4Epb8gH8aA8kedEzjdWu3GVCwhFLYGJdE4xAc",
  "key19": "4TuZDhmZVuLEeFf8jifdzd3jVLmaKw6mt6Es1XGDYmqtn5YBZAxbq6Gs79AmuYCAnMfsEJ2K5kmuY5cVaEMs8Q6D",
  "key20": "33kq8YZ3RzEAR3v2MEvUHj8ZwtEs6gBZn6YoCVhv9jaayPw696HoJ8ngvcHtDrQV7heS6Xyg6xn1CgFtxVMqetKF",
  "key21": "5K9W47PZgpUBGDvsgrhafC4DaS2FwcVXvJojcUobUmSZ2JFpfdy9shTiW7mJrTm2bH3Mudt6mCt5QA35ENx3bQRU",
  "key22": "4PKzgusUVzbUEuQwjKF5UGbsKBUUw1YuEFbDzbTVgat9RGtCP6rdVb6WAkFeBaFotardi4pAVdWeJGE2qeMnm7DS",
  "key23": "4CwgumqnzrZBkAm3TUwYAJ54RtrXi4HLSGbNAcaSvJDMdyMLWBwkLP36ZDWb1EVR6dekYAn9VA7jkTuTuX8gXBre",
  "key24": "44NDmWwzu31Lo6gCeWX94bsJRsFSpV4ddGpnuKTHYNDU2xeRnvdzRD47Sm31HCiXfcY5tbp6a38KQ2ymZs7AtDr",
  "key25": "5u4mcpxjN8wETWr5BdHCcC9wxyrxEdUmoC9R5Y6A34i1rb7Am6eQXUeDPFz5RW4VogNokvcBnNu5ewZqpQDnAXkz",
  "key26": "5QCGsqHBjj9g6YiYSfbrDqNAATyzkgd3tJceiLQr7VNFvjhTKNxhp7JgEghMVUHNd3AwffGPVayzwX5SuZUp7Egj",
  "key27": "66h7TgV3UuYW4V4dpQuoeVXKLwdYtZQkE8auxrqezdGfkBy118hrbhtLjKa7GjyT6dFZm7EHa1mA1yoeMG4hgiqJ"
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

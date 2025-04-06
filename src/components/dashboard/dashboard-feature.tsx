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
    "5nACiypoRNoKfy8K5Mi9wA3GFuqyFrf17ZMCosum8tFXTc6eXd1sr9htYQui7Npr6ufUszE6ahjqi6YGbB9tpUJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NbK3FdC5y9st9KwSet9gJ9UAWsmiZHS5NMFtmyBeVVjC3diqV6PegVmR8QcdAewqhyZpomim8rik76gXGCJ6x1n",
  "key1": "5TRoyWQV5fHzu3b6XXjeaR9KR5hi1pPkhJNnUWrwu6b352SVUWrdyP2DhfVREGsXt5j6FB1zhc6GWqVFP2pHJPBj",
  "key2": "3aBWVu7JgZxGbFHL9cGM4cS5TLsX1bKVUgdZ9WX4EVidiUwhBLLu9wHBjyBzAYg1YVah8ebfS2XcTzjbRjgkX2Z9",
  "key3": "8VFVmARqu5FrmMyrzWqzxhQqgu26biFTqTLYevAPEDkhrBnzqbTVeY1G9paML9K2bDdkGhzvbLvGjTJNLpbwjEx",
  "key4": "2h1JaSrJamXXb2NYttUnGU8JXTrg1y6agRSJ6g1YpvYpBrVnWocA8DLLcQisDju3pvGh3rW9JcjLWTSRT3FRj1GD",
  "key5": "4bF3mxYdvshMkuBjNGC3VBDvT4FFvc8ff6SnpMJ19gRkEQeJUNybhWvyatHMcoeckvYi5d3dqPSYvnpG6EPdWv5C",
  "key6": "4EK9SAKx1RiAYHyvNmnMU3KdjbTTXrgT7YAeJyLo2owRxu4MipLWmaqpGiYtJBWZ4PdggNFyTU8Y6vgdKSc1k74D",
  "key7": "3pFt5kYFMNK1sasCCDaBNBVcwsd5g4maSUCyaRfo3qjQCdeKDHiWcDetaPgrMY6j5H3kEy7vfFkPvvHRuBS9ccGv",
  "key8": "39GS5YwxxkuCxC7tFc9PnRWERTcU9J5yw4sNUCUvDwpmrPthjFsDJG5ahU4Bv9p2MAvMEmDDW2CqAp6uTkqX5fgD",
  "key9": "2ozia48AZxjRGfLkQb541afupQMJnNPM5xSCBfK5NeLo932jCBUTBRAdhxz36vDxZgeuzQae8yaWF9Be3dZWZKUh",
  "key10": "QCHUysVEPdxMtesbwRsaZ9h3zapKai6VPPpEXWyVF1VKpPvTD1VN7KyRmNtWrAXD6dKcVz4pMXdpnqaNZ3KaU4X",
  "key11": "aqaxqHKQnvc88C4k4BVvFecduZHeWC5tiJuSQhcEvpHu5K2HaSpjkBPL6V2sJibw9iZppSTXiM9hCHx7EM5UL6L",
  "key12": "4PLWRGqjnYLjeyY7cRu77FUFH4j6aUYFLadPrBnDwvjwZfDTZ5x851MJhhyDpRt5mjUbRaxyu5eA5mhbZTDFs65h",
  "key13": "2vNDxde56nZcXweBNmTHAh755uhLSeL4VB5GiHf1T83F6YEfDBKPvWZivvUeJ5nmyxbwjGoE2UHV4Pvt2ZJ7a1ZB",
  "key14": "5Ynd2gbg1QmptUGw3rQuziHVApg3HSbnNWnhTJGQCxCnGqtdkfbiyCn1QtAx6UAUHNoygZP59dKdRmidYJX1VwA8",
  "key15": "iPjyn4PeqAJbBnuM5KkGcHX4hPzZmHobAjU3DPzPxHtjVDwDGqkYxXUGa5K6SytErNHQPqS684kCv5earoh7aYE",
  "key16": "4UhRPSqDi997CgPiU3bp3xDwfoQYDTNcgmfByxaFEsuYjjGnE4i8xbWTJrCMYDHYyMiMZaPnFwULKoGHnjjoBQSz",
  "key17": "4yRzbTNaGSqGi6jYxMVjBQUfmmcxQkk1QJg1jn3vegifEYfmEWzZFdTdhbnAqXtPr8SvtNgYPgHLnP3L9desJLwP",
  "key18": "A8emrUJDDspYJVQmngUTA5Wtd6tUBd7fsiB78P3MVD32NcxE1PzQUAeBiLCm8BSki11qbUKhvHuVcNTdC6krqDs",
  "key19": "448eJkGCL5ZybWQaNQ6XhTDQDJ7HhPFEW3bUgUzWbHJDAH1KDcEJZZHW1q7e4xAfmAdum6oKv3cEVy6Y1VjPr9g",
  "key20": "5GHi1SykMEDxAGo4nm8TmMfJpBpNawHU5QBev8QGnLTPGVqKZmSLi1Nkafvvr7iBRcfxvfQ2wnswvL4LwFzjhJif",
  "key21": "5dSyswX21VYgz1epghk9aoq3Yd9U3Jct9MZuu8YEtugDdcbKtDzdAXy5vMhLWRhDjdD3VrMPT6uQY8mk34F6de3k",
  "key22": "3qmGynBSWMvqEy39BUNeY7JTJxTDAN5ofYjBrsgnCFUz9ySrmwojyoXQxukLywEsBWpKhPJhXXzZx7GR4yfCh5Zj",
  "key23": "4wCiKt5CvD5JXd2Nn5K136mpmpZbZZfPDoYU5K3RFk3zQfZZcQUutwhH9R1YkKjdhUsAf3bGUfJ7MFnbkxZ1smzG",
  "key24": "4YtZSsPWyUmXfLAShzX1LfnbdRujq4LjP4hbJrh9JhNgccKaYVnnkAkuNoVQG9GcaVKLZ8amRy8C9jXeoJbvsH1U",
  "key25": "48FZ6VZKahpcnr9KrBKQrBK9UUe1RomwriPmBkjp7EoK6XgPayxrFk3vJHGkSHG41VYoECFj5x7co28gqc825aSR",
  "key26": "2mgGKY936TmdfujQuNVxwKVguxAMc9FvBXGYLjDUZQKWmdNNNgux8T6SeVq2gvCfxiiVq158oz4fesGcqgxWZgJT",
  "key27": "454qJ1D2knfA77FwE3pBKS3Xw3UzqBgGop9A9t2pnCTjEYS5CUCXhysx1eF3oP3ttPX4xE118FRXMbymR66CYDN6",
  "key28": "5dQcNgvo9rkUidDztJRNMTiQTTNZrcQGUdb3BA8Zaox1Y6VPXV14CtrBdbzKJhs59G8LgYDJbFHLSbQtp1JPYuxa",
  "key29": "2xgrqqYPtb616GDkQpx1d8rJRjQk6cswM6t6xDSs5nrzmuxWaD8Jb9S13gPbFVsW46Mpi9Ns2Pa3upq73T6zueiB",
  "key30": "29HkZuDxH3azGmqyQdmTCCXouC8aeMuWB87aYfDmmQMBCdBHNas6LURa1hFnM2YxWNk3YEmSqmqcG6iSXhkXKbdw",
  "key31": "JEafP4gi7Tee9VbR87xgprEi3yuZq1Ju3kvMB8165DCrDBbvudeaNxhbQHx2aUSgtYfhzg8F8C4sWeTaQvw3u2j",
  "key32": "3RZ2mDH1ZKCCEThkRND2T4EJkKZTPCbLcexJEZHjEwCiKwiZkMBrgEeRsDWxZ2UtgS1fSxUjnz9pyDruWBdTGjD7",
  "key33": "3xDmrJtuBmvfptu3Nzy2njZoY4YmDpDSEAbfv41LTdF1K9YsRi6EfMZRJgkjmor8F6JvaYMML6q4PzXv7DzB4YBr",
  "key34": "4GZ9Q2Np2uR1nbmVesiUT6ToHu1yVqar2JUqxSdevRvnaE1W8cTBsgaoUu1txwjf3n1jYKtxLkbCywQo3ZLzYqeV",
  "key35": "wD96j93Ws6HvwLRBdBTQTxUn1q8kS2CcguwunKwQJQ6xhjdHDAAvJmdi3w17jseGcPUZAcyaanwRXn576HbMM4t",
  "key36": "5LvrmqtWvTL1oEzTN4ey4wo6YgKmnvqapEpR7zEcWG5AmZpbtWVzoELkkNVDzB4oDjk3pa4ZDrivGJ6f4uR3k2Tx"
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

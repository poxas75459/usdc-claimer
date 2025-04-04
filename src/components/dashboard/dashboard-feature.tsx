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
    "4UmvyiCRBvQbBPwrrLVYAZqUogPoGdG9RbSfSF4BSUagPs85gNM6NrkfY5wZ1PhiD4BiHTnJr8h9aL1CbGasWkNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aN8cBjuPBY7V5KsJ15qzpv4qchLgyEifk5b1TzP7XbqPWz711QEwdEGf2yFVVZKXm4DL71gvvHTG7UMx9nACX13",
  "key1": "tXyYHr26eNoRd4esxUXS2FcKLNVd2Xs41CTCNotFQoAy2cVHu5JBofVNd6YAbuNvFYQNnkuw6pWuksERe1vEV8z",
  "key2": "4c691eqafn8WpsAYnS1N5ubW6a8tMzMSDAURWxrgUf8szWkwkeQX6eANFXhwgwZpKU9LPoWRGq1bCvbs4ngM9P4L",
  "key3": "5ZapRtRCuUmMboGFBJNjzEmqtHrLFxHr6sQe8N1F8Xmyb7a3DJFNiK9PqgR294bBC5K4hDo8bF3B2Av6X7G24B1B",
  "key4": "3pBbHpgRXpj9Xgu81AEwUSzreg2wYQ4MS6veABrggRnHgu6bcj2LNA95PRK7ZeX7RhRE7NE3gVc9arPrhH1K33ft",
  "key5": "Xwn3HFffXCMjaBn37KMUuWuzZpTWrgauNVNGrW2eS1i3k5PVQeJVXHTarY5tRvmhMrRBqWTDByVXaMwfk1FaUgM",
  "key6": "2qo21Q6Jpvsebopwu1iBHXE32r1rdTbWHnbrPhrRgsu38rMfomgvwg9y2nfgstVrBjX6jPxmf4WEqSh2H6ZZFruh",
  "key7": "WLnPTAU6WuMBUJRWkieczPv4GLZimDA7B4GBfuZkVswK91uCYjvY7EWCTxh4ZQBnaML49uwVPgyLE5M7MdGyxLW",
  "key8": "2GEveazNbhWnwK22QPKDcLPGR5DJgSY3A4XK4q8ZiwtcMMECHhThjCx5fj6qwVgqv2cT1SMaio9PE6AwxD5zeT4v",
  "key9": "b8fqZiJ2gs1rJ9RfXUy5E1mgSmbCqgwmj58AW9YxePWF2RV6goKvfJVCHdpwoB25fsfjXoL8QtZTS9E39SCNcjN",
  "key10": "3edziUX5xTjZ2iPefAufezD6uqy3vsmatq6RqPyGqeCLC8QHqDJg3E16P8JYrzywTRCKRiDAi4KdvS4uFPPBpWRy",
  "key11": "aavvivbiwDyttVrgnr35zAdTPst7mGL6gpRHV2etPTViZ19QySsK96wqhKxBBue7Y2j9b5yRXyC4iXvuANsYBMf",
  "key12": "33jBeLTaZwSRTuY4YWKejfvV8VjxV23PUGDgD8bsBLCAr1gqVE9PPsykJmuqdpCJFxhB5BpPnM8ZBz4sQgguCDVU",
  "key13": "Tr7aKu5QJNNqHcNdGYM8PAukiE4sxUp5FkHH3vApkP4TQVzcZw5Ud5qGYLxxCibfjWkmvKnKRi6fGef7PxxDiET",
  "key14": "5Q4uQ9zu6upmVUirf45VasymdSRapTckhJM3vQ44tDUZR3V2hsLK5b5wrdcBSHgkkEXBkdoY7JH3Lp77oRHkcGhr",
  "key15": "46xxHbJYAvyAwCqLRaSHCraKFDMR66NkfRtjV4tKTtVDJQeKupUNvVmh8aPF3ejKY2txqpitas47Zj4w7NbLLcHi",
  "key16": "52KvfaA4SnD6D91BA6P1Mha2a31zPSYykeuc3AiWABHktuKoZcNfsoScMRPWTz75w8ixV9rsjod83W8GURiaSxAi",
  "key17": "35TPDbEtTHi89V8KPPDmkwuC2kZLL4Swk9xzmnxTB3XePUzNNaM1vsEUmwm5sfPWT7xK8bbfb1hAohx1z9g1zHwV",
  "key18": "TB7qVacAgnsqqE5jUcQnABqTMTrx8bpt55STFiR7KhpYVTf8CPUAx1Ejdjy6Ed48ZmdcjkLBA62ns8Cj8g64StJ",
  "key19": "2iopuBWBoT4eF8k6ZZqRp9Az67FJRyRwV7QsKvwQfT8fHJp3wsPLPrJ4HaH2A5td5SQuk7GHed1e7VkirDxr8xq4",
  "key20": "3V7TjWyQPFrkg7CCtPuT7ngGAVQk6ZJwGQUQjthWkFwxqz8sMRoaANZjZR37TpDv4E8GtGRmLvW8x3RihL2oJ32r",
  "key21": "3LtgcA5ohct4qGFKh6XPXrPCSQsrmocFPtobrtC6Q6MbXYy3AZQMPcDTnbDTnDKg9QDA8LqZgrPJc1Ssk95JV4wT",
  "key22": "24Mb712WV6rTLYuBxTNtZ885uqqZbRjZnCSQ1tPYdPvdfK76WntQvBjjMqxthT7w5MY6z54nideZ1m5951K92LDo",
  "key23": "5PRLofeKazbY6Kof79r5ZXJ9sx6vMSwSFNAgirnZgiBEUhmApx4zXBkeT3JCFWWg3Ly3YeASyPf3NcNFmhhP3kwu",
  "key24": "5H8WeghDKw1uV93Q4oH4gJJYWozz2uc3WGtR7cKtf6KPoGYXEoM2oPYufFNWdtuxsPL8FKbjjjqXoVgz2nLUmbF5",
  "key25": "3MRuKTgJwQqY3GrYXWbmoojTcGFogdzWyQ2o99y5NNY1r725HHxR4V3V96qAZEW6vs6a2igho9exvKxB5BTL4Ex8",
  "key26": "4PzSFQU25W2uWWbm9yxsTUGq2wh6DkQmemyE7rV13NqvZ5Dy1g5mYQCP4H5gr6nKZCLfChCPZuhMHjz5brC1M4rR",
  "key27": "4tQ2rjZNU1TGEqVuFsfjAfgFSmVHCoZSfxSK9wAE5V2oJW27UPXtWmuo4LpTAdFX4oQ5tdGYZUFH9uRACiZWZnD7",
  "key28": "XfMBJLmHEAennqMroAjzD6BjzJ2LvrBwceLKqj3wUqJmxktoyrhu9wKTKzNTM5TC3QNuJXXeKro5Nd4p9dvnKsM",
  "key29": "NNZWaML5DhbCwbTYkBQPmby7XijJ6Zn1MuaMa7Hsune2HqpHetjj8iK2MhJe5wQzAH9QHVw7cyjSaTkFpGPs5si",
  "key30": "Sb97VgzDEkjxg6HEzrXFmp1YJ8NSWEzAoSdmJoMMjwhW6fN1CfATxigeZ6G8MBb3yb6CpwseLEwE9fLbptkRQYt",
  "key31": "5AyneDLbV5rHooznkQySy3xzvoQ9oXUGfnZ4ieZy2RaYeki79uQDCU5zYp56CqyoDrCZUYXjwzxakDEhaUF91cdg",
  "key32": "238ifFtQMmrF3LF3G3ZNrWFwM3bqRkHoG4Tsi6GhSVT664CbtnusmdNtZCMxrFvGCDCtFZHhVg5WrV6y4o9zCSFJ",
  "key33": "2KYA4Bohzoe4wr1BmurtNTYnqNUWji5rijW7wYMSDLCbxAkReqv3ia8RYMHuMdyDtuTY27E7wh8JHMZkxfm2nFFg",
  "key34": "5udMSoVoUwNYHE5xRtEChPnRwLgcnvaCApXSLdqXa5ivUfBzuR7L24AAVwCzTd1pscsjRxxzWsypufRusRzoGbBy",
  "key35": "4hL4RYSMgqp3hpC4GdsKubAkZVgrwwA6g3iVWqrtXrsWbWrECfRmM8sDJLysvfArL1hai7PQsMbUz92JwfoQswG9",
  "key36": "SmnAwKZoDbqCxUA8k6hqitHKUVMvS2o4YVCmparq2jSPBkuBkL5Hm1pGzUSnfMLSJqJ9zKkzMMgoumNFum1UMVx"
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

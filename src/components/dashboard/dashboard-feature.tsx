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
    "5UdwytA4nJJhqhynGiiacqWtpKJ2W3Wz1G8U5UqAihVy4dgYByNb57jMqnzVPf1xu4M9a5CFVqUz57hPuCXFCMJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMPvfELgBWbkkPhXoPVPJLc2HXsTmJokQk99t5Szaabb13prf7MJSG9guWr3oMRbMitwHPX7bVwgKhNj6mtuvm1",
  "key1": "4zB6VH6iQ2xkMwtFYdX6RTrRhW6zUyU3hSg4f9DWtcWTodsymxTpqBfEvPa6akjEPACmq9A6np7Uzc758EQLYicJ",
  "key2": "3NYrkf9sKa7AXatPSx9gXapgZWiojY3HTpy32Wnp6BkM6sfJAcRuEMUPgbwK4gq8TzopKouiT3uJRvpYWKGSCypj",
  "key3": "29sbBoj4Tcr4ZnvvB8vhTWLdh4vTdxDZCYxBBuZMj6oSdBzY3CPUtvMEyQs4p27staKmtwTCACYAW2xbYDMQMG2o",
  "key4": "3ks6mi2EjTzwmhbN7Cw3FsPUhoANWXXAGHJEcYrQhF1SUjY45PggmhYWpUQNFvsvpG2oz4WJ8STCEkeMYXn3qaa5",
  "key5": "2t62UGagxM9KotNyxkZBJLX3iW1BEuSbUHnP3FhPqWuLt6uF2zwEFamA3bg95SVVJ5hGXTT7LTsWWvP1GbHV9XRK",
  "key6": "57G1dyeA857JhHjC1m4z4zrvUbJ9cjJYW8sS3L9vnCJaiW7X3mktTaCDhucFikXZgy91BqTuB7qJRvCHTxGVrSjv",
  "key7": "VnVgGpYLLR6JwQpfGEdynThKMdZBwE8ZiWXsij74t94fzzvzteLCRY9ZfAFzRzzLhM6RktiiJh7DKbLUCx3VQWr",
  "key8": "3FVjHs1DNPJp7oHafaq56YGbp65q1vEL9w5WG5uGUuen4bbSPsYvrVkXxY3NNfLSwXYKuiJ8g4BKaTYtj7XPsiwf",
  "key9": "2SBUpsLWAJH9cEpzc2cRZcY61sSaTkR2NkNeUyedaAPpaGUGUQyDuS3K8MnfNna8ftfHnBDLLW6Pp3V7wcnwqEo4",
  "key10": "2ZUiDYvNq5x9VQhKpNh9Qtky8pUsMaVAmWd33r4XZ9frRkFLiykFE9x6ULsSvxBJqPQeNoCsKZjEs1XaHhippstY",
  "key11": "2GeQpLrD5doNx6HsLYXTvTYuPiQSGvGW7mSVMEuypKcPKPqcd2LNMjMKaEKwC5TknAhmPJi3jc4rQ7keMWLXdKvP",
  "key12": "39tUpSXK4Kpi1xXrbTKP8MGduFTEKYiuK4sSzF9de78jNB7iyAXYQhvqbM4mwJ38kazg4waifCHU29Wto4FbNRK9",
  "key13": "3RPYseXSx1HSkPWEseZixXu8KRWGRdZudfeitomAKUY48H1rx42TH2MDCTreH3P7To23ZhoR9bSrwevLGWjH9rFX",
  "key14": "4ndxo52Q54STW3E8S93caE9xoG8X9P12GmH8PTSum8vDaLjfmbG9bPwoUovhzeB2J2khxotN24TjoFxg5Lrnx456",
  "key15": "29LkTADUERaci48QZVUaZLyDweuKcBtajgVomjfmmgXFxGD1LWUFaaXw9VXGLbp68ig26954KGqZ2daY79rcvJoD",
  "key16": "49RD8SvyfWnHwYRpqFVrC1XMfXUNpfGG95UpxUHGisxeq6QF5YaJ7yvmgLBXJzP2eNNZvxKMKVh7W3oTAtJ1y3vV",
  "key17": "3HGi9ZtRurdsuTg86jw1JYgvkNSSsj3AE6ddachJfTUApTfsX88cYxarjXhiZsCvxbineP92rL69atwxrc4EPJ9H",
  "key18": "rZeBWmrX1tHNXYD54UwMgJefJzhEDo2nMBrkUvxvh4gC3cctm4yrMGJYQBnEEoXVy7KsV9EA9yCYDonLhryqo5X",
  "key19": "5c84oQewWbLYMX8WYS3gZGvZtg91boUT7kqmm5oZGWzbs94UwmCYoWncBU7mc5CRedYG1AQhG4WG5YE5iiQ5RCwA",
  "key20": "2RRLTbYDaqV1rdE2jCDKsq32SZUnW2G2rijfiUFr3uy94DYqTDjXUioRxs2QWYoLHm77LrKL57Vu8D871DFfrC7A",
  "key21": "5HXPAyQjRLg8KdrHpycdqMYoDLpvjruxwB8JC8UMY65BfCYQG5cWZn8kDJCECQKGYnxSCiXQjCwcwwZXKkY2Wf5Q",
  "key22": "xzqG7G1E1jfxjpzwteDHrBjv5xCUiZBM8GmE6oPSA7VjDZGhtS45n5oeb6mcDyvtw92u5wUdahPYzzb636txPT5",
  "key23": "UaKjuqYNcmUjiE9qzMKGZnALXGsMdyupqYrN92Dfxwi1zqeAfTmR2oMofoDd7U2eeYEtXPUFx8j318Emc8VkVBV",
  "key24": "5Ax8qoyywzXjRkE1dLHJJJ7RUSWUpLbDJsjcj64HDvuBtKv7MLrExg7PJ8TTLUravmjciKryje5qGbUf38JDvaHF",
  "key25": "3YFx5iirRFfqsaBoSaFjvmZStzSmrVfrL4G7AfokgXVoVSTCgTyaDtnX8uRbrNxNGKWLECWCKgMvV6x9q6iF8ZrG",
  "key26": "bLTL3MSroF9E5XfJG121QiXsFSWugFbGGSuia343vAQJ8qwaEg7QGX9mmgqMBBGGRdACr7BDRuNR75jorCVeXav",
  "key27": "3854RpvwBsJVoPCqZJirHMmJm3ABdBUjZKXvXBURuuWQRRi5YPLgmiedFtQTYpv933yW392SsfhLYmruoWLs5xLi",
  "key28": "5i5UVGnojA5yzLZJvtJArP1G64GBV9TrHXHQWiMxRZWKUF6pssT1gw586ak7JupP4UdbvWLDGTtFbArBcWUxVbcP",
  "key29": "GDCgF2hGBfCrjSgSc9NZmcfs5FupirZki9J7wyXi852mNhD5EZa7ndmNYDeYzwcFjgsmr6RtTVgUaBi4H7EHd6i",
  "key30": "3hdT2KXioCHggkTHLHakxbRvTtjFWDUwCuhxyMucN7e5BdDSkJAYujr4KAn2FtoaGSxukMyN1SEJUC5Zufw8mtNP",
  "key31": "35EwwDDp32xTUnyCwJZ6Gn4cPtksshRrkk82cnWzi62uXNCVCU3J2Pjtm7Z72jSE6FVdD4pG9YhMGUH6aqzBMy6x",
  "key32": "2wQtypnDSWodugv8Zg76GDmpyBMbyysjR93AvQB7kyDNtysiezPyxtXMDJEj4dVLqFJwspvmffVHifwUPC8S3fy2",
  "key33": "2K9AzJPSS2HSVj3gRR8J8PSokiJaYV8PCmTpjJ4vdafsoFnddiEhJwMHLQQmuPZtcZS52jXWfWNcikSFDBXbVRHW",
  "key34": "5et2pNBCkz3Utfq789U7DZjGVV63gQkkPrdGM4eRjiTR63BUn23dTFCKk22Q2Qho85mEsqVifMrhqqsuMVy8msCJ",
  "key35": "4ocGtG95bge84wHV7TJSxVZziQLszLsD3RkTMxwmvKQAsd7bSsatayrvtWCCepDBPEPrh7DxEdQ7CgBY35FL5DLv",
  "key36": "2DifTDpjWEL6pnLttUoKQoSkR3jNvJMT4U5pAYZ9HsHe597pec3tQMw3fkyRMkBhCehc4F8QBMYsEyh2isCqgXK",
  "key37": "3L8eWWDgq2jhcGiU9hf9Cq2NNxznHiYstAoSphJLdBmPQoWa4DcfLVC5ai8B8j3Vah9a7GW2jcNntM9JoQTUbSDJ",
  "key38": "2CRBTv7hk6pdpc7WU4uzrKTa1LBMCsnr3Z9sG2Br2a7RNNkiA2kCPWi1Yxygh8NA3ioc8MwiEBqadT7s1ox68iM7",
  "key39": "2oKuBrcFdnya2qoxHBZsoRBTSbtesrAMrJTzH5Wtay2w99RbuRYRsNGZkeNzq6NVJ3wykSJLKTE9FN8QCL2b7FGE",
  "key40": "3XXtX2EH9Jr63cMeD9NjFqqUPqP67NLUQPCNxp5FFKN5eRcqexhcCJ8kk2LEMWw6GofX4kbz6Nr8JoQ5vd1a3rSU",
  "key41": "5os46ScQQwZjAFp593bN16qDo5zED8FEyozooygiKcxBh1P5vKk84zWBGG2fjLFoMx7pFYnqWbThu7VZsCNH7e4Y"
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

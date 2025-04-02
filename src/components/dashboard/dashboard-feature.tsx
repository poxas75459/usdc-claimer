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
    "4u3VgqEQVrn41b4CQMpMwqwJTjSXecPgGJxuyki8iYAZ6EGhyXaGsoPodWfxwHnXETcQAFQEivr2ELPwdNGCTGr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u7kDT8zwNtFhfr8USyRrJZtYUtRsJpDVienTS5bXaUanfGxwskuiHoXtLb9uHyAQmUMD2F4toEpA3KjPZcqVKqj",
  "key1": "2VrFQJheR9CqwQSRCqzLZ7JbPS585NwWBJ3FfwRKRDTWpxvxZiRgergPTRDeQpQ2pM77gsRpkbv9ooJxj4PjRykK",
  "key2": "4q4hKKw6H6vpNeFCAiZPA5Lx7aoNwukGy4rX1PE3V9rib83PxkpgHxuoEikkMZ6ABFPJCWdbd9NrwS18UUrCBY4a",
  "key3": "4JGrHqDvRfeUbthmtcJzFgmRfDBPnwZTpfF3zk9uHJML8A1tyqM6JXShKnPjjqjAXsxWXgpWfL1MYHiaPaYYUx2X",
  "key4": "4yo5jYWXUoKfzhL2HKWCjY93YHHnFsF1LL4x2AeppxU6fFTbZaQnd4tQ5kgbFRnRawND66CCUPWqSK14b5Gty8h8",
  "key5": "3zhoqZJ9w17JXqi6SDwLZG4HF6fHcSPmcQo8qNR7QDSRobHYiL5KDpDuzK4PSxYYbkuu28FrcYpoU4u1qvhNPyj1",
  "key6": "8ZeZeAUqgvq5TXvK7AJe5sXi26FWnopi69oE9RzcR2yTxWcgBZ4TNuowvWc3zAJqneSbHjQzaCk4dqaKFuX47HK",
  "key7": "sehRtiVe1KmsGnpHZTF4QrXLNRNZS2dvgttLoZvQNdF3NvaokCotRSpBSMKhAQGms7JS9e2SvZLMkSW97CLWtN6",
  "key8": "9rcNLjtsJ5wjYvjvmiw2De1GSR1GEJNUAbtvaYohqywiJycPwuxof19rbyhBcZqGYqk5grH3PC88WxFvyTSfZQp",
  "key9": "4ENsEMySAHYjurGVhQHcc21N3preZyomW9W2Zp8W86Rd3BYZCc7TZWscjwwPA143r6XnfnfuKHY3eY6zj7jkwzUw",
  "key10": "3F1pDu249BqcvfAzT3uEdUi1T2ntyNLByqJ2GrUHeJxKZxDrD4p9NpbWr1DMH5ja1SQUvb3KPyC8iE54VczRFuhA",
  "key11": "4iGgcNBUmUSBtPQ9MfKCat2Yx6QtASSpZTQ5r89YK7faaZ4SwWf7WPLKpvq2gEV6xE8b8XXAcUMXR2eoRqN1AHC7",
  "key12": "Zd6qhZSVgZiSNfNMbQgcj5JP6pmhKQ9YFaxzubH2gVmViuzAzAW7mmzg4FskiEfyKskiGsoWfuVTxjASm6bgNM8",
  "key13": "2EFh1BBAYDpLZSBP3KdKhqSp8bQWGZ4HJ2ikGvd31yVcQCanxMgPt42R8tvkJb4k3qPPPNuvzxM5LwBRN7Y813Wu",
  "key14": "3qz4zKmFLqU55Y5EEidxHzbKo6xY81HE63KRE9neEqWoeQhjxLBoq5d7qqshsPWrRLDBdDRkUBjdp6T1PwZdRfzM",
  "key15": "2FyeAatgEV8BZwyhVhKrcA3iacJu2NUfu4UEhBgBNJkx6UFyDmLpg62LSZbfjsuEUtFFLGfGpHJ1g5rAM7jqn3F1",
  "key16": "2bvoNg46Fx5fPsgy6gbYqHx6sf3enicYPmf2S6gW31qFx93Qco2F65Jtks7fgmoSt6yWDyiQG4wpHMaLVdtRbhLt",
  "key17": "3q2z56Z4ZqJTN429MaAqZwxW5h9431r3uy8vS94KcMb92rij8d4o7sKRHe661ZpkNaCjrMCgJcizTAbxEizSHKGM",
  "key18": "65Epczcq93izAd6ZBiESNDLwGAmtzMpsPLDaoAEeWZuEUCppBNcajyhg6UmeEBaLiVUqW6SQ4QEfnrmae6fkZNzL",
  "key19": "2LMZXZEUG6yEejWd2BJiNHVZmcXtF5X4phXKAas5XGNeXWy5AV4Fw5o2g7GiCedz9qfh51Tw4JtcE1xchkRCt8nQ",
  "key20": "SiyVCDALZx8ikR9vrkBtYZqkcu5vzJfpnovM7negZ7tJkbbwbNnRSpvS5ykA3rcXTggq3SYj1bWi7CpZqngHXDo",
  "key21": "3MWACaJn6JjHU6e39Ea3b8aLHxtkphHCsLKkVm16akdyhJ3NA83q87nEa29mHzoDQeAHfJuuNgE2kmejr18conxW",
  "key22": "2a83xWxLb5mZF66c3jVW54266QZLuZymTuYgE4EsRDVu6eSp1g9mBSSoPZFAoU4F7QLAHJsuJ7WnaP6Rhrj7Q3B3",
  "key23": "3SzZYGjtuTzKhjqGDeXoWBh32hxUzbhoDJwYQjbhnqAmbS3x6mG1be5QE389LjqzyNpUb7NQt4DTkWYsL2GRSFeL",
  "key24": "PhGrRirxtaUobs9y8amTu1LeMFLQWweHctAeNDXT2MTDLYkh1y6PxJCeVXuHyo4eEDM9QAKasHoSBgbvN1SgvZ8",
  "key25": "5ATqL6Ly8ycz8RFGD7tb4J3JDrPdmMNY6gcyvihS9tiZzcD6m836bkUopb5iJavxjji7xbhN4VgqsCfsKEEVa361",
  "key26": "2rwWcSgHYavb1yLAdcWHihDoPCGTmJRHCda3DkpkS1UAgzyerBJ2pamGLpXFff27bvHi1pfQh8bzerMB3DTbVbTr",
  "key27": "5GgJdEFCJ1b6xzAbDWgRZJ7oexJ9eV2Lj7DjzrYJ6D5BthUagxv9sCDGLnfpJRmNwUysn6N1Ha5LmzFFj28d5d5e",
  "key28": "4cVaZMY3ujjJcVmDJqpoGMwH2r8yLQddDFSZByqX86PCRWRgPQKP46MKEBDF4GzLqYVpiLeC6rNCgRVPmJoJJ7JX",
  "key29": "5teQGtKHyzNXxmZPZ8U5sVfsEZLJvBRwBkvdRRy9HM85DemaQbVnRjX4QjDwt1uUroPeeB6EnpXoNVpL7d79zCG7",
  "key30": "5NuWGFnS5zLAaQNXyjwSEFSay8SSPgYbR64hyieV8PYcjpMsB3bdEopxocC3wWtYi7HCQURh9tRsc6ghgkPuZmZc",
  "key31": "2UYY8UBMYNiNkxZ3jem2y6qEc6jgGVBJvnoJJ78qPxv2NZ35e9RpGSiJkeRroT8Rq3recEqYTYfxJ8yjPaiMHmz1",
  "key32": "2QaJYXjxxXqy8gNJ4Lcm7FTc9Cc7AhSCDMPSXSegFCRBtALwYcFuFtBeXznaATwFrJZMHjeKcTxK9zExKKghCoL1",
  "key33": "2GbanrmgMXZRwHFCCgidUvkvMmnPzY27t6SeYwewpLn3xUJY55A2mUg57YRBTjaFbLCsFrsBgnHBj8oXxm9bz2Y"
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

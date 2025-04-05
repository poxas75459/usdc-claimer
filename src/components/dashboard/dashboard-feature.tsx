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
    "4qnGdYESFf8qRnD7CcfztoRo9WPAxZPiTE9cUg3ZVWRZ5Y6zKiXGUA1nVDruiYvU3wd6jumG5CF9Nmkm8oJz2A3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41YwRCJiGKatKpVT3mokNNWwthEho3ibPg3mHKovjVDThzyBUJBhbHHaDjYAV7MTm7VZ6xBshjay2c3ZuQofXSDZ",
  "key1": "26SocbHKezCezCsqqkfAhHoV37EzUHzC1PVBookGKdvXitiY2T9FuiRiSDgUhhPw6K7LfWQJP16sJRQkhCppohV3",
  "key2": "4LAsDBWKBBEpHvXw7iAkRimmmn1RjhUmZKFGgNZ9bWh9N5zDyEEVCFiTmmjLPe4gcMqyKMyavRLm8j7TSWaHEV4A",
  "key3": "46CPy4sTiG3yeKzcj3XwM4EkEo5yYtvPFmrf29DHEacy9T7Q1SYfb8gZK7Szpz9r6TMuF4KyAsErDvbUqfyNpgXT",
  "key4": "2qKcDhs9haEZFm9Cx7YuL2GaTV7u9q86uqFj4h496xnbCbUbrFmuUwLmYwwpUoLoidxZPpLMVYKtWAYKmCZivYQF",
  "key5": "F3hZq5ETEvmUimMPzEb5bvgn1TKbCJAN6kGk5Vaxkf3LVA9kfihYRanCqXT7FdrNueqxwJVJ2boP9JiQXhGhwnr",
  "key6": "62ry4i8w2R9PHmXA1dSeCWtjJTsxZhCx1qKQ8MgRnUaxWWnpQRhSd3dEeT8ELR6g8euAcgBtj5U2vp38DxZybkuN",
  "key7": "3exLP6XfitEkW5qQ3at5wF4kmDtSYP5TYYxTofCfxiWMmrum3BoDc914qH4wbtsGjGDsyed3k14gvF4dhua1avxs",
  "key8": "2Sc2HVBcq3bf2CvKp9iJygD5roDbLL3ZafAb4fMTuZp3W4WzF5x8KQcwZmLAgKNfSr5otiTduKcckB3aG68JUdZ1",
  "key9": "5dxfcriQBK7cSZvRT7Nt5kRjVe3cFAwaxPHN1tDQ3bg7523xLoDiY5XrYaUnYE47af7y18KsSsDLkufxiV7hpLke",
  "key10": "5e6MXJ244cxHgUpi323CDgVDPEZ3gHb4yGR1dL6obhJ7WE32WJGCW4U9VEkZh22dXSttxBj8kp6hQwb6ZHk75sQm",
  "key11": "2rpToiUzMjRxX3VmBRMbtWRZM4CthJPWPUJWoxRQdNoH27xKDdSJ94zPvamqUD6GvEBXhiAph4rzpD39Qe1cnjoQ",
  "key12": "Hwn2YhomjWwXD2k1cE4JqUKpttfsA9zWM2G76jhLkXsuF1ox3f77YfCBoCgmJb8dzpgtSEdUsydzWB2xe9yvooY",
  "key13": "4Y9yFAPMc3czfnnK3GBDWTahhfZ4Xwv7VnpWmcoPvbvbWU6985mCgtpiHujq2VLGs74u9cq3qDjTiGfjqnhvtgeE",
  "key14": "3nNxqU9WueSrTfKVsLHsUG4aMcjfBRuSUfXtnULaH7CXQsGLd16kcaJLPPdXUPBGNGEW3ujFWT59bnoMnR6qN29",
  "key15": "41gmHXazUfmVFEDfv8nCsyZXca5gEtcMNfngLTJ7bz5FnwqQuwiyJR97U2ZtJrU3bBZAZ5dtfN83eX87bcybYBAS",
  "key16": "xB6GTsd6YvZSW7gALU42vvCrc4RmCCYweT1bjQ2mgcMpQsLYDkXWZNELgpTKpLnfMdAjANuHJ8AtkXSijWCvVPS",
  "key17": "4VJVtP3f9dGDkTp5x7Ecy862S49v8rkVqDeR2MGchgtZptpFV6bdncFJdjVyRFJxymFhCHrTiZE5BJVGP4Hu19y2",
  "key18": "vN7jKBsSHk99GwiDiWkynqmFB1iUzHKbTMTNdjNnWQbt2bZTAxjQb3TFNVAaZVXeYH9xbcjL3m5vJHo8woJFwTJ",
  "key19": "5kBXzr2LppSJ7NZCA1pJXQcypRhTRHQQBevPjqyRaM7dGMX5kTLochDPq3ZTYhPtog8ZsW7GiuXgM2mz87M9hWB5",
  "key20": "pWC4S2osTTkfwAhE5cnGXXW2dy5NXzgS38XJDTDNfdiKdhAqgxnowcNefHi884VZSZXNrKVxcAcDazhzDEb4zf3",
  "key21": "5rzAbDdho3exeKvnJgBaJLsboatzQMvBBjoXL2HeqW3NETz9LNc8qBUQikA1sFBc4M88Yr9ZV21ZSrRKkU6tCjzX",
  "key22": "4CGCwBCy6TxQLv4HkhXHbmDzQH7e4v1JkpejLDQWThcJyu3BrtRV5JwcdPp6HJFnggtrF6MXSnUkNAc3hYapzERt",
  "key23": "2YNMMCqGWMLsRxCN8AcwkBpS9KyFpt7Xh2ZXSVqPcXyU9jEYviimYZiR7UDfUHCG57FUMXS4bFgkByXy8LqkRgnj",
  "key24": "5QwnoK9aXkn8ssi7afmUbDV6XKYHh9YMfEjUZ6Ns8oU328S3yXBgSHVYggxGMvqwUmt3Z6Vem99LuHXUe6TzDQkv",
  "key25": "3ebHmGQsVnMiyW3M9Asnf7eASsPjLniVPthkxrdP1zvjHVMMg5kfMS78FRysgAFecGnzCK9WoK5iJh9PhdBYZdZh",
  "key26": "59qp67kK7Wkaj7vFB88cjFRfCxfMQqxvLREMJZWYD5pyD4Q6PbnaDepF6t7Yr4AwU6a6w7dJohQM77P8hHtYHVus",
  "key27": "VJb7HJsfYX6HGPN31H6DJRfm2bAFWg4QDYQgtRaztM7mjNQF2rJaFfppuq8bomGETTc7s2m1B7DDmCoJco4ZfDf",
  "key28": "3N7h8c5praRrRmtKpNH38fqoUEKDw7UtEFQuHYbBVoMXtTwFi3TwG4Ctqm8efuS4hU6qK5fpc7MXy9EKz8EQq4tc",
  "key29": "3C66bGwdo2iiKEdG1fJ1fyqs4r6TLRBMruvEM1AjE5rhuSSx91Byh3bBVCHwEra1PsFta2bCJRgunU45QLdtNPuV",
  "key30": "2dUbEGwoTJs9ZXYKQoosVkMEYTE2Q8Qkf6hCxJRNwTZZf2TVW2rkvZhcdYgsXrYfxkYEvzccuNoVUYPrpmG8sS2G",
  "key31": "3jFuFPfwz87wcQNYLHy5yTRuqZLq7rGisJP7ENXiAURj9MBRS43G6q6nMEuQM7iGh1QDfsAMuA9429T8HaBiEiNK",
  "key32": "5J3uNNtQ1yrcNYZrLaVRXR8UAeto1kCKpKeh4bwByBkUyEuncokGrBJ6wcQ7ijK4ZKh4CtiKjrsfpzVtrR5PmUMR",
  "key33": "2e9HPKMgw5QcjnyxaKd93FBsU7TZqjZfpjpo7kmDjroxHZhbdrDGefSbcz5Wau3RGhrc987xDogyZwn9HvmspHZx",
  "key34": "3ZhDUZeWGcDUrsUoKwaLazzr1EjeP8ypS9RqUP4wXoAEhVKNVgoSSy1aM9aerRSJP5F4czxD61GLsgYJcJz5LpWB",
  "key35": "4r9o9Z3wATN7yRFxiRJ9WLNSfdBPnLuy2XhgmLnV2VBwD6F35yd7RouZrxSpALVyfSEW71FHRAM2gvYscy92qDVm",
  "key36": "4KYviatyvX2Gj1odiuGp4MHrRHiMdpPtYUVZ8oRueDnDzj3XPtbjBJVhg2LeSjFrMjKvHNtwC6JB8oJNsdfeBVrk",
  "key37": "4tuMCxL2sxTF7Z12gT4cyMeDzY6WVtW885KZpor9GjFDmTt3Pvo8YCow2Ab7Hnp3EY5eQoYjshcvvyHfBCBdyVCa",
  "key38": "64Y5MmA9ikZsEf3jQ6f6VmPSMA2Godz12f5w46D3USaSVtSLFYPheZ3ofEtCs3ZxQ7GCMQuw94yCbzVeHqdsXfF6",
  "key39": "axfYh59jm1Bvbmyp56JDo6hAhujmNEfn59QbTsZ3WwasvY9vMkRMGe9n6Spp4xQJp266meJgt8PW8Nbd2NGe9N5",
  "key40": "YqDwCjvnHAjrotjES3BiZcnnwznmX9TP8QrBV7GuSc21N7UWAToKkJ91HomYgcEpfiVMf2cKs7CsNXGPCAMTVhT",
  "key41": "rsHc4mYQ2rswhwkdDGCaRUpezoUi2J4JqMsbuGXsNx3n1hcV8ph1MZe1gehbV3kRxXHTFpdFQsrWjRkHPrpydib",
  "key42": "3dVCVHEnx3BTQAEaLEPjZH3Fn2JqQmtA7pMsBo8M4PEQWP5WJYjkYKVwSjy1m8F284r4f3qAGrDg1f3eMukDzDfv",
  "key43": "9rJgR2s419qckwiFx3crFbbToM8q5N1mkxVJwdxzANbkTnFJgEAYHZSfXSmZmfL9AyjCMqXop5cQe8U5FGNUvnt",
  "key44": "5zu4oD9MvVjoBgRHLPwXH2W2YdHt3UFntzLgYcgKai6GDLRhsNt1fmHkFJFDxpYZ1SSJxgG8v8nP4KKPuhbDFbq7",
  "key45": "4Mau89q5y365hAoMN35rtSGprj3snrU8qGjHrmAvNmv8K56K1bmNxB5kDRrvNqxxm23ZX2QtvpDURFEfZtJRkuha",
  "key46": "3sXjWhYUV3XnJimKRJdvYWYA9UGFAnjmDpNcHcStCkHkCHJdz56SyHunqXsgVr4CmUaM44PJqcodPAeoP1v7mGjm",
  "key47": "4zduxd47Hd5Sn8X3HpFEM3qUJJAnFgnpooY2Zrzr4rRgdqMbv28QVVCeQSYWDckYYSv3xbF2JeT1sGHK1tiEDEqe",
  "key48": "2dmXEbqmwbaMFyhxDUZxCJitVmVRe2J94pRsHjuk817XRZceGPrwWEiH5n8z4aD6dM5vwUHKkXa3M7xqsUWo4dtW"
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

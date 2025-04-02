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
    "4Kkei4ezDEzzzerKxxABkqv71TMJSMbcYQkecXtHt9m3ZJeuedUAqSgKSnohWaY93o6fCwrV7EsDJ8Q9neETxNfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmRDAeKSNjcLtSNeyQPszuv2wkrEfxHzPgyT83Q8txd9WEeyMM3NU1Qo2Rxh7DcovofAmoVCaKdXd3rWgXjUQYt",
  "key1": "3aGeANC2onsMmwSSgLLzoNZijw2hit859EsVYenSeuCWXbqigdVU796DLJeHH63n54z9o3P6hySEopGzBiZnsG81",
  "key2": "3FER1b2pQHWWHMYaE4d9CYVHgTLNj3oBnq1ULfzBhGTLFh5ER9zuEn59MFQZU931TUoj1SfY8U6JHaTxRwddticd",
  "key3": "4WdUjHBNcLL5HWSnQCk1jVE3zngPNrmvmkS2yn7Wuk3aXvQRQf6EeN1KLUsD53YL6jNnfpfyfwyk47PnMbj4c8px",
  "key4": "2XPCmBaWq9594peGD9hrGN38CtRUbnZGGZZT7tmNNujjtqWdaB2jgE65UQTf1LgNSsJVSeiuDNi9dzEXDwHuVejq",
  "key5": "4mYiArbnwGCh7GxNrVXq9XkZe9XRTQVnQwhLYehkqSxVEKqZBr8uQQZwG9Ps2TStkcRDppjVdxktjj53crWzitwm",
  "key6": "zPRegStrAmpVnoMwRqkjb1LJaV7VAADuypsAitomK1mi4Yj9bXVQNuCUCF7MvZJatBRbhmehgBt6XqmFN7gKyXE",
  "key7": "5hf9jdJkgE4ZB4GmyE4tRp2ABThV9aMYUvBhtGcLjaXwc9QLZxw31MXFh4QYNqUjVwEch3MfDBgfs5wNmGDi9sCS",
  "key8": "2TVVDt2sGZMCjkdBmxVufpAyaABY1HBFQFJUaJ9Fnz175qAXSGq4YodUcLdXMimM7uFx7N9sR3avjvY8g3WbC8qn",
  "key9": "3EDuUTsKLx766Q5TKknvjUtRN4snLVEL1ehLHy9bSgUm3C5FUd3vbrPtfdPCyuzfvYwj4kdNMHM8KUa5Emf9voZB",
  "key10": "42ZDqJgEC5uXPV6cVW68PZaXVFiQxhyuKBKyp2x5CYgrTpmzEGhLUFnFohCfEPRoDhtGYXGwda77ju6XTuahFmV",
  "key11": "5jCLzUcJxDyLbS8K2gHxbKFRS2yNuovX1YrLqYPKMXXnzSfRm3W1DswVpeBgWWhmE3g9J4xD96AJR8PSjKtxSNQF",
  "key12": "3D525x6nUdqTiiFCUqgiHkptu8dnkS3RWWdL1xhGmAyAS9uUDbDeheZHum5w1oP7Z2vUjRqB6E6wizTANq6xknzn",
  "key13": "5Cjtd15oGySFLCE6Ee71RkhEbUeUApjhEkRNeTkQzJmUzqUbFMCRncsb9wBcACYnvdAeWcFvKwv3LXJnDtkaT2H2",
  "key14": "37wFdofpaQe6VgDorETQ4m626hgnHbcgbwZXCujr7fM9Pi1CGd5FCJu9D8YPqGE3ccXyL9XHPG2y4FZnZteA89DN",
  "key15": "2hSenBQS1e5qD4WUSRmjQ1AWGUGk7i7fwrM5LfbhPgzGYk9KKnFRESjcheWzTC7GHARmRV4HhHhtE3UTyP6c6Esr",
  "key16": "4nqBvREiAMZNmnAzZ3kdTM9DbaEc6Gxns3S15YqrCPVX5kqqw3N42Tb3myQuHGzHM8SrHDuunqphvKDyn2ET6AHt",
  "key17": "3W1pwdZoiXfVmmCQBSMvC4VHACJtrVRac6W4HWpRroFhEEA5LuD8Ly8ie9mDxNs6fm2VKEjNyEwpBstoT2BFcriX",
  "key18": "5wbgfzbt9bnbs4kVprPRUEtAf2vZekZBaoGnppTBFXfGxKmcCT8qEMNZf4LEEQAvwyuBzUtuTeyKaJysDdrkocTK",
  "key19": "4wSf25brd5mWrUptKLoULAsy9AYLoFMToi1atQ46XemdbVp9wW2ZEpUY9kDJ1vfmQiyVujRJyCrvgDrsrZ7UJTWK",
  "key20": "jFp1H9MmgjKm1betVf3VANeHvAj2TgPAcacc44RFx5XQhLJsv3Gkh4TqYqtp9tc4HWMjpoVfFLpgYP8aDbsucNd",
  "key21": "4HvdXoouTdMubjeD4zKx3dKU2tXkPBJfdEii99FLhrebzmYa59rdEb4zSy3weS34XEnfrcFsPE7FDpuMtwqHHqqW",
  "key22": "4zKk8exV1SSKYWFk5P7b3cUpENYZVvLptvaMfkPhavCoFLxuP8SMzMHv7CXhnP4f2CtEm5RdZMZbwvUhPj8PPv5H",
  "key23": "5hThX833Z7aQQtXTHdeYY3fMct3UPwqFNXtpBn9CjMeiSgVgP1QiziLdW3QtGk97qnqgnUovB6e67D7gqzywj3mG",
  "key24": "5qjyAVFdHSAAM4j9iHGPFD9q82sCbg4nznYBN42vqv6tvSo4zCucSx91uydLjecdQgriRFLD1ELEDq53YdLhWYXH",
  "key25": "FKcv9VLCb9PqyYVyqH3S3xh83b4d7Q2PYwwxcaSjgvhQ7hzzNQtPqjiUkky9hrQ58Ez2GA3BuJqmTU3i87nZd7Y",
  "key26": "4qye1qaeKMjrpxv7Svg5j24Szrch9e26gFHs6R5gKz4KmsW1kYg3apXHu76qUwKeHqzdnwL6NvuVSpAHnDJXcJ9o",
  "key27": "66D7XbseRr1MhfhoorUXZN9nmTyK4qz23gbtPcwRKus58L3WqvCaarc1g9USsyFBojhz5YrpJipB1bHx23jDz51M",
  "key28": "62YLbNynNxZsQswWpnMrhKwUs8BwFYBTSkg67DfDgumZRgscEuuhJp86WJjJ57KYycCuvrXKiDZ92z15cSNGj2SV",
  "key29": "298wuw7gJRW5kXWnuUaZjnKK7S5bAe8oo1VwS688MoVVBoBiTqZmVJ1SthEsuuS9aqcQc2FiduwRuVZGzjGjueVe",
  "key30": "CEfU1NUNLp2T7wU5Ugu98zmoZbprBowsQCa7YrtmoHwHSXNbAU3niqD81nrGAbQ6oA5ZvQmQjTwaGGGbocvAAaV",
  "key31": "67VfkcBKLcvmGSCHEe9NAvLpWwZPVQMBLNb48i7etSc6W3Bbd8rPMGEdSqmvhQie85q89FpMsx7pVsw1DV7XHjnS",
  "key32": "4xk5yw4maiNPFPV1MxwB4gZweTNt5soTQy3FGaphSV1bxMJkvqMo7kznmDwptNjfX8LachPPZywdNJstFTGXW2K6",
  "key33": "3p4dXhhwwZZyt35TDwQ2b7bgXoWhTufGRvPmCWn78nSJAVDb76mzHBtvDpKEqQs2DBbZ1LqYf2ktHNrq6vLKm4jS",
  "key34": "3MS2bR3sTDAGcjJcs2cBqyuN5mTgtMV8Vzfk5Z94KEMZ8y1PZjvHHSSgxwp7jTViWeFUbEpaszaVRNMa6KrAfvWZ",
  "key35": "67dC52SFggQjQFETntDehzUA4rpkzA98MMFqf9DbUy68ZeKwTJm5pHqQrqUvpgEcCpmEtTFFpxyUnaRTHQ8Xp34S",
  "key36": "4rxFUY4UpNu4XTKLo948PkdQ7NLhsAZZ5eJa8CZ1bxydqLh8D9Puo1dLRXoMRFsCQstBxnajJAPsGmRYhC524G3Y",
  "key37": "3x9FDmX9dtin8iKEbvF8ZEvQZJVPECW6LmLAxLgt3i1JG378rfiGcR2NyhajGqYLKFssRCgKxBYzbqKXG2D2eUY",
  "key38": "32gT3rtT9KKMARVd53Dew1QQDRptSxtzt26PyTwkM88eNeKVZE7UNUo4DHkpVKpzBabXCNs5KMeYUXuGa6Esx2HX",
  "key39": "XQNwqvMYM5J9wfJyuiRjEGL3UbKXeHo8id1gUDADjMixqev4wUcUCUgT4nWkCLPwVfEp6eHrjx6yxWPHTND5oaP",
  "key40": "23vruDeqnE9aEBM7QXBfnnxL3WQ4YyfpUGYW7BbZmRRckGeCXBbTrADRvgxj3WeJXcojnes711696NY5TFGjdENL",
  "key41": "5GCg9euzCMCtsTW8fADx6qiYqrHYBebnr2uNqKmoi3zkR6cAfHSmGWyhddT67H6x8BXgpndEWKLwVBKxdeW9GZN5",
  "key42": "3UXUJ7MNvjujsEsv15GP5LRP2bJ7jowsBengeWr3DDRL8mTNXsRR345EgaeNnJt9UHq68q2WRyQTnMKEvnktZUXG"
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

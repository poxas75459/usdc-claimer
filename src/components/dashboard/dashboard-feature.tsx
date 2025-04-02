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
    "4skSyCou7zQ1z6HmQUFY9fSQjM1hHrSKMGGp3kDA3VB9ZuXC6pp6sk97qFyp1uwiDiCZDWSVVN8VLcXwtgzdEHxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1aepkQtuwoDjxJgtZ3Q3kJcPDDYRSPmEWtWkVU79mx1keo3sPCKLfSMPp9xc4PwN6TombPpFqNjjwVJpUN8JJA",
  "key1": "269UjCDJTiJAQAFbqnXX1ZViZN3PXxncQXBtGbtTHmpEWYLUU7ZoXZtFyunoGxPXZhm5os1ZpZJBmD9Y76TaXRAD",
  "key2": "4o831iKms5nZk8c8ES129KtVqD1Be3DHjrnvFrjHketuaR3ejczeUZFESPBWXMbTv7LdxgwhsgTBubWNLKjFLRVh",
  "key3": "4ycgCsD7k6AjTcXkScY4XfhUbLPtWq6AqJXn8AJ1gNJFZdyZ11ivmJB9j8JweLjbG44jkxiT2nWMXieD61j3YMgf",
  "key4": "5rrsnepbAQvoRcgCaXHTmDxFRykonQ6D6fosVN7J4CBLcBLiRC4a8s7ALSV1okHtDVTT5PuSit9ZDSzfuDb92Qsq",
  "key5": "2vBVkEu7Gvx6vz7Ph6HVKCz2Yu3dyDJ9XDRH7Xxvpi6H7hMrWWaxe72rzZ817cGuaaLpPCK7MyCtePK5cM8ZVbed",
  "key6": "YAmKC7RuYmj2zRB2c84Su6MdBLoApiszgRYruKPCw6hsnpVUgcaKgHhKFk1yrhudonVxCx3BMVfgEBX6YRkuENp",
  "key7": "J7omu1xmLYqiPGkc2s8BEz8op7H4jgETgRhKq4N2z8MsLebMWPTnR2kvZP7c5We7sdcFux5GYdRM54SB6kaQSJa",
  "key8": "2Re4Q48tMqCpfLCSZaoHVe8tukvNpmDDVtKTwnuDibPK1VySsBX9ngpPxNASWHsiXTzydnLNjKX6smrLx96kkSkL",
  "key9": "ZRqJf6hHkwtBJqBeGYoLdCBAo9s6by8KptxxnEhKRwGGCgJDsUC2tRZ2ftwDFDsGnMLFJaWvSvEV6szNbuz3yyo",
  "key10": "35MZdRaPBqkWQY5oBLyZGgmPLY9jSEDs1Yrx6Ju4JQfrbLqgyE6NpyBxcJFXVmzKab5WyVvRh41u1KKG4UbLCydb",
  "key11": "548WmNRz4ynwmr4twbfLvvfWDxXNg7DDWCTycbEmZBG4yNKgnyWrvBy7fyr7pRNfmyvh2RFoADDUevtg9n584bnU",
  "key12": "3UuQSFPJdMEyYhpkGR95Gxreb5qfinhXd8QF9iK3wtNoi6mkQx9HGYSeo3bCPKPMiiHpssDTvKHkgYvDwuw8etfv",
  "key13": "4UUhiEc9M6hDh6wnNri88GmvsYemARgxbKjeMGZyNViczmfTr5LApw7cD8nM8SPF7poHnJndDr8SqYaBFx6MRMUs",
  "key14": "29WQUk5wL31abJ92GHWBz2GD2dQ8j64VfsWCYkvAcE8qbaVJToaKfC3tDnfj8MEPxPwua9Ss3YwkCZLy9UnUVzst",
  "key15": "3aqnCnMXkqN6VUGXMCQ4fQCHZcuD2XMEDLb3NtNtEPn1suQnqhPNmhXDBLxnERKUpvmNo8tugVdCVRZtiYqjWWjA",
  "key16": "YVpqJH9azRc2GAFkf1fc8HPXENL8ZmWKVhzKVtquvd3rV6VMNACtCP5CfjMd448eqTQ3wTEzcGcoMcz5yXbnBqD",
  "key17": "5bLniTEsWpcLWMNMfVdv38Cmx2KGXUfhKgVBKfkL599cLPjzBVKRBmvj5mZQmDTCt9VQzMxoDeEF5hyYrRop38W8",
  "key18": "BodMyWVD8CBZxeqARHnUTcPmSDDdLJYUgJF4LS31m2WbQSFHMtygtdaNwXJwDmEEWjVgFrdRak3Xnw8s3jDuqna",
  "key19": "5BKMqUcWikSMoPkUt3ee1vNKh6Psxn8BAcnrxFo8kUKBYFYDXFNG1bN4XaKd5HEV1TVoMcJaVd3jhiGXSkaTDLWi",
  "key20": "4MBeUxVGBF2QaxiHiVgm1RVw9r9EpqtmUVPCDGLewPR1ZSauAKDeYVESZTZ3iEVkVt6fj9KcVziJGZBwxopV66MM",
  "key21": "4Z2XCnPbdkWpNUofgQpDU99RQvaQSfmSjdpSUu7XGf3KxpNY2Uv4higv5cXNTTBTa9ajakGdtQq8vZvGWunEqEFa",
  "key22": "2QVZZPb1vBeCegkXtsWVUU6DQpbCWs25HEkjWRHYgH1pHjBrso96wEMCGhMuoUDdennSX9CrvA6naCqgMvWPPkZ6",
  "key23": "2jZokbDBJaaKSRVm2kcmNJswqHaMhGFsFwL3f4vKCNHXTkZPsZKviaK8FDX3riUGerw9YcWH27mp9nSrZGAVfcSJ",
  "key24": "2YXccjGYKDi6pgtS9hbo5m2D6fiHeUW95bEdcibVyJFnCWY1xyX6wkFca8MKMcgqadR8sCb8VUK92qGYzeU3f7Vy",
  "key25": "2qfB2iX9VkVebFT8mvTFgiZ4vn9SoZ5DEg8g2dTU5bgaG92PJJ1HF9YWsaS4kjrKE64XmHVV2qcownYKXEtxM5hM",
  "key26": "wnD7ZxkZjqCff52N1T7MyGiwqGG5i8w7paKUtVVwfQj9ShfNn2KD2YtttF2ekhFiuAGH1D44rvF2g3Lb8PYkr5Z",
  "key27": "4k8ks4RTD6R1M3M96eLWvzvHNBwBHVqCCXUr3cvqURny2PNt4dXFprjmyYtDJT2vcSSELHaryDFJhXUQd7hYD1Ks",
  "key28": "3TbU45WUgMypsaaB8agrkTVc77fTvwhZdtBHRMqEnjmyR7fFx1HEVHoAdKdoKP4rqkwu4M6epruoyRvfx4XfoTpi",
  "key29": "2g2S6edsT7JZVu2QsMybdqKtfVbuuSzTyMsVu47ZijK9EnXk3JvksQ6W9A6CSmNwgwCiTLRWgi1xEJyh8bzSQAu3"
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

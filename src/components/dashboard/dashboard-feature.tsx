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
    "3t9vzX5DNk5zqtBcgeZvHbSJ4hjidQa3sLoiddsLmRFPAD4d92Ev9fBjkkaX4BfYmkvas1c5vxxeLQA9m3EbCUt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xxjKwj7s34at5tkHFKfFPpAhLJxc8vSHfxzZuoRpGZdP4Erwg6A9pqW5ZutwLrwxu6GFvXBdTAxzshyMfrXAj4z",
  "key1": "4bHhY5rXph3cCq7BoszCBrtv2VQckqvE1wM5UJUqmWSxSKYBoYoELBznEDmbUiWXZJn7adrNM8qT46rurnrhZBc8",
  "key2": "khpUy1ssoyDXDp9C1t8T8V2qDSy4wjGbLBxQoDARD6RZS2vktL8DkMgKs9AQmLVQmSTXDs7UAHU5GYc8f4FZJDE",
  "key3": "3aPDjL1seNPeFhY6b3fvHRX1qzH2UWbShCoz2c6iwvmynaZ6B4wxST2F2yb6WCeD9QeycAGaEA8CEmbpQfKHuCyB",
  "key4": "3oFA7tR9D4GNoYXNESMCCBB5ts7CD9X9BZWzsG9gsKNaa2zf94nN7BfckXrD3dh9aSRDw1jzHEV7fjUVDcfER9U5",
  "key5": "3nDupqjZ8aejJ6cYfK1qAJz9ebhDkdUQHWWGRYF1ih1Rna5tdWTb6NSnWoxUJwBUpWT9hXKh41nBKsLQRT4uoeLL",
  "key6": "5D8bt6bG1u9R2LvoBuMs3XaqG8ipxGbxLmQqt7mxnGpdNC4qoBZBVr7Y13ZbXfvHMPi2f2WXXZyqmoFR7LYKgvBp",
  "key7": "vXPmgpWEw2J62qt2dNqyujsRCQtfsAwpydQgDRaYqpCPUcqSp4DmjxmUJZRTiipcqXH7CGzVWE5q8aqoRRPBeRk",
  "key8": "FvNDg7CFhUApvjL9Dh1KX2XcvpteueUsgseAT2hWDo71VgdC4m8qorNm7u3iiKAwuzEhfbF3tKd9mHiaCoXWCaB",
  "key9": "3y7Nqheh364GGeecyiP6y2JC9iCedx7YC6vx4E8r5dznpbzgDoVRhBXFaEJd3RPoRvzobDzgDHEJRWec6nqk1aTF",
  "key10": "Yxg3VgLzT52DUnPqX1Q6NT28PPShAmpSyUApMULoDbnqwhy1LpLB2oGugooix1v1x8hgcnHZwubjtDSUhWqo217",
  "key11": "236DYjfzrVkrDoFd99R58844RHemH8TLFjnfNYqAjPvmkybnCBMUDJSDUrPYKrU7DFgAw7GTuYR32EsWcjWwayyJ",
  "key12": "tY6o6KEGikPQTxigTTWSCxJ5NVYNvCSNtcgivMvZb598JHjFis65dFZUdpzTD4njCDtZnhaaNnoJbh3ukgDfYCH",
  "key13": "5ffSndQkVtqQfucvrRJdVxheCmmry4aMVMjd8RZj8W159aHBDT2QLBtG8kCohcQJd5HcL259YRAFqhQJksH1azJH",
  "key14": "25ytkmRqacWDrCpZfGE51VZjxuTw2mqQ9jPD7VDAEHRhE7C8pPuaVM8NHJhz4Gz3FBE3TgL27ZpUmXdvyPemyEu6",
  "key15": "TNNmup3XxdnvQ4S5syAzUJBhho2Pk36LS2GbYpbpgpgpmzzvDD7uVMHy7GAL8pkUDER12iwCWm7TTaJKi78bCJt",
  "key16": "27dJXhuVEyUGyfMUZkhkxCMxHbuxg91L1aCjeQjZvMsLFgPUT6MDx2YWJoXGAftBD14pZf5CCa5C4rtyZAJ5h3CM",
  "key17": "4RhSXXzctneewQAUJZiY37Te89NaBV3g9WaYc7F6kFEeGnXF1dR8dnyij4PrYj2sKHMDysq4in5L6EBN2qFBzWAn",
  "key18": "5Vtbobpad4LjiCeZd3udNz44tjZ48eK2PHt22ziUjLoYyUH4gub352Ts4By17tKXx6CsKNf7p3FjySK5u2LZfVXK",
  "key19": "5vgbmJbqyGFjgB6rhq7Lt7vLTqUHgRwAm4NnhSRgbqKnFdaRfAdrvTfjwaWnVFk5FJxoxwbmrVzG3Dz6rWiRbSGt",
  "key20": "4Bmus7PAfjZDh9Cw41wGhTKRtKATEUuESa9qAK84fSoTsQjw3dzLZYPerWrSKbCVNv9GRQUra8dAvtukd74YjZY1",
  "key21": "3fqJnAPFHmrbSJUJzGPBz98dfDTKH9JCbCzq14bku22hDGDL9EYxdiL5dBavEqZdYwTEztdhDSnqj6W53UsxWADB",
  "key22": "4AZTSq52Wx8mwKkXu85Gzm4SxNEFtS2oaJGPU8j7EAWwdB7QkXrPDdX4dLT7ZkQjt9iKpwrbBf8AwtAjzo3V1pcV",
  "key23": "362bQuU5ysEQYgUPU3fMVYcR4e4Eot6r391c3YnwFdio57o2RjSpwTnvgmKTGWt84QbqnfBP2reu9uJSV8zWv8zF",
  "key24": "4rBF238bWNfjqnLGPyrZXjanLbT3V8aRSyNzHGumiqeWM7VDKUtwxLN5L14EqdwohEKLRt4dTAkioPtZscZ8k4TV",
  "key25": "35MgGTX6ijozg4ycFs2ueX28zGqnpbGr9csBgteaXn9NCQ3FbmpPbWycncjGQPbJ5WyJrouWwrSVWWqnzMv9s8td"
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

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
    "3iDdk3fnNEnh7mxYPww58r6o6rHzUfYU7rVktAZ2HrZa4sTa3EDTW9PkyCYbVnZkJf8PRx8rprSKMYFiVZfgXqym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VJfMFma7tDSJE3kVy58pbJjfzzcPanp2ysonB3T1W6shqKmvP25sF2EcvfcPHJ1Cqnb2Xb4tBJSbsFtJMpUxur8",
  "key1": "xCe77EoXZF46Xuet9y68jfU8oTQt4oPHHG6BVWF8D2sLYDWXQXCxtkePd3ysKMfypDQ2Zr7eLJP184aY49AF6jG",
  "key2": "2r5b5z4V4vrzGbXU7jWrNv3K8ebGdRsDowbwG2P1FDW2NiJPSCFr7xdTNRwcjesjQypJasaUMm63w7ip7aHkvDYs",
  "key3": "5uFexNPJCNTRWcmxb7gTyo1sQW32EArw3xUQQatPnVqirGrewsS2jUNvBsWZ5dvNJ66ik1hRVWSfZAEDQXUhjm66",
  "key4": "433aSheDhAmVqyqDrLfMptGYcAwqKVEL5nCEuMfBGrxP9ZVFafK1WSoqoytzSMqEZDgKXsnD8UczP6VCwx57BXbv",
  "key5": "2zvmMkufuD9sf85NCpo3nCyKYsQfdYGWbXeftGwkecBPkYYcv4WZgLc7qrAdc3cMAZfaqQpbfHffQLPMhzA6ND4S",
  "key6": "51swPL2JUp6T61fBU8gNW1yjAE1zj9xMe8APCoB9DF4UaHirMTy9W8bDcfGBvwn1wtHv5ncUvT4iGuG2W9M71Ruo",
  "key7": "2iG7xswkTxBdfquX26JdUfWUZysrkEQcYKpxeGj3kMESVMi9pWK1ABaXcrkFyQRQgLBL3auJht46vdjBRGg7LAfk",
  "key8": "4N6wCFKUxnA3EXdpA2gVdib9u2XJt2Gg25Cqu2ad3itCQvU2Vj8jyCRm9Wgf27M853ukRsCVx8oj5AC5dgjpvqZQ",
  "key9": "oeV6xPJ8RBs3eP9jR6TdJRmsnjhUnnSVd4ocAwL8p4oL1K1qZ5yk6eXxp8oG7AWeZu1LTE2wNvcJGg5kDyfjfVH",
  "key10": "5QNBj8U1NFzBp4j9ahT4ngA7nJXUw4CKcggKSsWRRdmCiH2bpQXnQgnPFyY85dmwCSmZcYLAyhs3qLU4A4j6dXmb",
  "key11": "nVnHhaQZgTCbN7CX265NLHPYpWCva8aHJyUTbiEngU6zycmwY6VtBxevcH2tu43UNLnd59NDaGrTnMEf8gcSNqi",
  "key12": "5DZGKb2SqUkErJeUCjVZL4W2TKExtHL3QxP7Eyv26bhev53wq2UYvRwNL7sWAM6RLJiqicRXsnrQaaRLQSVe7Zcr",
  "key13": "575UmPVH9X4Z7ujZKu7Ps6LiRMmWXFLfoViDuJFZXQRjaCBkCSVTmVZDeTTiMjqHpXSomHx8EKSJnaYvH7B9vj59",
  "key14": "5ymuDyafAyt3cK6zSbXqDD4mEzbixpPCPF5fMPRqiB8Lh3KxLFRPeMXeQrdQNiorfRQQESLuXGNF661ZJwiAYY79",
  "key15": "3jobN73gnkrdsoEGfdtaNFNbWMbhUQzq2vLuBbzoBo8wZ281XwXs3V8s9Tr88VEeQzck3F2zpcUZhSmaBVdCjxMJ",
  "key16": "598dDeRbr2pEW2gWBimfas9BdAh7JPSp3yHVb22sVu8iDHPnBuFAj7XUZeWZaTBjmQUexwk2vmoKZjVzFnKknTnZ",
  "key17": "wnjWFi3jrCp9yp5D8bLCsrdQuUHm8QcywSjcJNUNUZNbZZV3Yt3ynK57QpL8XTfKrP56Y4L7kV1aWsX4jyXBwU4",
  "key18": "3UncZN1fk2REXQ2ZaWBP7AxKndAfnDcC55CXNnRpSsPzoDgpLydh1Pcqg6A2nviVWWCvykFVwFvLmLYGFrW44akH",
  "key19": "4pQpvKucWdb6CB8H5V1z6bCAbc2yXQf6XXpLJbdWarfD58kb5Fe8SnU6wYU4LMcWid9NW5vcL2uM57nMBcvFpx5e",
  "key20": "ob8R3dKRQQhjYqGzAhAARxt2yZ78Y62nubkCH4a52d2WQJN5e6mA3gUZRP6aK5GTEUhQtws19SscNp9Hnxa5X9A",
  "key21": "3SfmXuxa4BozHuHR5FYAWiP4iq3PYgkWeZ29QfrZfP7r6kUkVfTiTrHBQQuz3f9m9RBNithzYtjTkmrinwU3WKEf",
  "key22": "2182GJyCLmZGs4LhGff8gPuJ9W3LKvbE44RViNLNByabfLURxpF6zAaavB7qRiQt787NHH8YvqS5NYKNDodUqMfi",
  "key23": "4CZsXa8WqZxGEgUXT8rRUginNdtxsqDCrboK28U1T9QwdVncuMYgDASgkLNiT4pXJca1Vb6fcqvDfs7meaxBsLdb",
  "key24": "5fs3gCiXpwo5AJouYHx9LtJub2o2C6GCb8VVBgfussrAPXadJ9VDJddhhAMMQWWVQMGmE3pKQkg1KTjLEkn3nny6",
  "key25": "4WqRG8qvAv4pWNRfkcYh2xAwwMGYBzjjcWpwGSanxjLcCT3rQzeMULCQJCA4imYnfNCkp4pKHcDdxLKHpvEGFfmy",
  "key26": "nhHS7xTTT3V7ttwE33x7u8aVGnZvsDTd7xr7SHtmanqqz9xXT5NMtnj4w7zB7AWPAn3RRyTBWUU1AJhT58CirU4",
  "key27": "5y37X4u9ppv9zkdem6xV3TL3QTFppNHwb4JLuDZ4ERPUFtVGTsXM6fmG4EDXxzeuNxoaTtpxTSsnm74wayyhUtJh",
  "key28": "4xAtL4dsWf42umWT2pvqiyq6CzFjnSjYvz6JCqz8majj2vtXXgFexM5nYBLTRMi5yY6Z3FFzANSw6RQH5xNSituh",
  "key29": "3YKwtH2Bw6aiHSYqDPThBUdnPzQdcg2XYM8ZFeS9ZSgjdQakcWmuut67zTm4L3E94LUbBoZdis3va6WzEnuZyy8H",
  "key30": "4mGmjhq6Q9aWPNZBh9knW1WuWnvsmCP6KZid9y8GWDNnkn158gcjdvoLS9rRaLFA7dLVa9AoLwonBTdHuKxBKkZg"
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

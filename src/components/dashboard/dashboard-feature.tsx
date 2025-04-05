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
    "mb3NKUQzXmnWvvCxQGTkH7YvhJnqFpHDQCSwGQ4YGBBSWMmHTBr8ENxRBWwaLZ7T3eUsRBmNK5aM8Kjfap4wJgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMmVU9eo64R4bmbVDy8w7MqTvoBC3DPt7Smnx5hx6WReUGaPm5Ac3d1c6sQxCSzAmEFgKyHu9JpPSR5gdbyCUt3",
  "key1": "4Yi6hnPWNf8ieKEP7YBy4urxX5RUpDFjVnUPCgzyzN5NbNL1ihfQc4fXWRmdt7MKgUj9Y5G9d6qzNETSUh1o8B1b",
  "key2": "mzibcPpyHzKcAHmM37iFU128JHDHC9nk8iCDJjKEUiag4VN98vNYnZFeLvtpWtv6rj3NhnL8jACxvLUsPvYgqdA",
  "key3": "4pfz2r3cD6WcwSa1ML5ooBe2PD2ybtLuD2BtkhTiMQbWdfbqspZfery4QLs3xQ8yLifAFdLsk7dkechuq29oZegk",
  "key4": "7pwymtvA4GCVri1QxVvh53tcUS5AVjoUmkQou4TXNw6NHcnHsGo8WBcDwFNwHBSVM6AKxSbs2mFSGgoGMJ2cmFJ",
  "key5": "2V1EpS4dR5zuzXktq9ihd6hJstwVThoAxYRBYoXEdsVQsXsc5sqhGX7TuiX1sVN6bpNryhE29AjnThYcUAMiXJcv",
  "key6": "5a1yWaNfG3HatnkrcJZbGFQ2EP8mUJdo2EqrxTjkCdcykNS8ycDTKjqrx7g1sJScX5TGVUfkutiYAUtFdnuiS92n",
  "key7": "CuJ7uJx9i4W7WFe6rK2Ev83RQahSjnXcBdVoe6zLnAdjaQt9caUutzLZP8DCGMU9dtTa4G2Z4MaibpU6NgPcGxt",
  "key8": "2WTaC9cLN1aXknsVYTGeKvr3shcsaWRkySsKqJN7qcPD7GKuUTfXThpcsRpr9sYs5m1cTgpJEHSzm1G5XEcFJoS8",
  "key9": "5ENqXQzN9m5mjadVDnCPbXoi88a2EQCx1sceLwXGVzRESw9hJQGToAuwbFK5Q8pFvDqJpyjjV9Q82KPPB27dmc8q",
  "key10": "2y347J4WnRjH8j6XqLde75zEaTVuMAzk4PymP1Uy8fvcz59TzsPWrm5pKYeZp55FZWyEAisAxoELcLddLth7vjgu",
  "key11": "5G3pPhSiHyQnPwwawhv3WspED5Xj5ruXdzsb3UxYjaWWMUMdczUeP3meXPhitsDmXt7WdFL9RwMwKyBAR3i3dE9A",
  "key12": "2PPqBR5fypsQ2vq6egHwJh9WvceQknAV5r63VKJNYLUpkL2z2FFRhGHA4m5cCfiog6gqjwLk4CNnCpZpNtagTCQA",
  "key13": "25frDh3WDjgaRASztShjMWfCKzV5CujZesY9yC344fkXDiJ36KMDB5cJitobDCNLZgX8AvenVMNAc1KPZ64PJWw2",
  "key14": "3heRs4e42J3PzCxc9orHsYagwbyFsDNFQHZXm2hz8pMbRZTk8ZH1vdaDaU8wZbjcMyAPepn8vdSAfu4GvY1ikLe5",
  "key15": "5VvuWWE73sShwmsD6iaNgupJUpqfFTAC17b89pbATeH3VbWm6D2DEqbQELQcNLVQZqr2XtV71gSzdJa2kCgtEYWP",
  "key16": "2VzyzHy1hAxHAmfkG2gANTjoUPm3DjiaEexHb1wGSVKK5wLcJbBmANooFeZtybKxVvsDaQavfkVMLeXsnfCEe4cE",
  "key17": "4y2vmLs2BQm1w2D6qjzkQJeVrtXSYacgeeTPdPGELQtW3i3SQSEXL18A9iS6R6hZua5hTjrsns4RrmECJkEaBan9",
  "key18": "5eExWEA5qSQd1AjWayeBQV3EWWupBnqk8RAqf94zQS7LMaMZKxQtXLU3bbo7krU8sz66t6qZ6ZijcbuGKr8GZcdu",
  "key19": "5AoQQR4kM98sAQmoNFHTz8BnmAGJhsyf2vyD2FR1aJBBA2Zc5EBE1GiXXWmwqGfC6Qp1ZCGLWjpL4KrZmCmtjjhX",
  "key20": "4fLMDANXeDbUisN8vpBgiCnMxXXyDqUMpoiGmykHZ1aNJbXExs6S5cFPuiA6A4SGSiRKZ15VTLSSr7KyFZqNHCTq",
  "key21": "5dpF8wvo14FPnmYzWkceKMiALwvukjugPpTvfPAxYCeDN93u8jNTcsHGPEcEXjiqSiEkv8NDc61AoB1Rpzu79Vss",
  "key22": "3hXEbc4a6VeK5rSGmMfm9pQJEhneDaD5KuBpgMbvRgg6gmhJPSvj4NFCxc26vH2eKJyLFyGE652mr3Bbom7HxRSJ",
  "key23": "5WFnkWNdoESmLPffguufptmcnhaNtzZw3PTgrz6MfBtHT2n8YcZDuEVwu8QhVSXJkMsmX7peSk6gQ4Z2H5J4quyP",
  "key24": "4fziqTqBmivjNFHNpK7Wqs8uTbd57jj5mu6pk97iDHcRuh1NWKFy5tEkagJ8ySE7aYfcU5RLrDVNqPX2DM2UtwWV",
  "key25": "5PvQ11H3YpYVM8f1c2GNJwazBkVK2y2D8SnBxiZ9Nxz2xaXAA889eGHy5JmeEUXzjDGA7frBrJdNCB1pLSQ327r3",
  "key26": "2PpMc3Rgf3bCfSN8XidRzuCEBaBct3QoRdw3424qRyQq3HBLuWdu3n9Y4YCWxDmUt3S3G1Wv9bUFpk5WTbzFDfFC",
  "key27": "4bbuc5Bku7XxrFPBxBgGisYxWzzN4J9zkNLep1YsHu1dZ85fNQ7b5XNpzBhEQFGbb3ZNMfzpJXQoMq3CBKoDG8fS"
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

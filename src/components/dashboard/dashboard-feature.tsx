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
    "4qtRf5mEBPVHdvxHeDfDY7DNnUYP2AZXSbbtKiskhReBSWS5dfvk99AKT9t4rXA4spjzcruZ6pxNZkW9Bzzri1vo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mFsEtqfkEUzv5oUqg9gxGe6bP21z7Pj2aErYp9kZp5mG3QqykNauUgzW73uKkx6YPw7S1Ruj9q2CHdHV2rKD7k3",
  "key1": "4z82Um6G7RaYByU9EoUBXmKAziLyPhiPF3uwitaRgJaYuWCpXatMVobMJosBRXo5RKBfKAcYsKDTUmSw1zi7hGWS",
  "key2": "3ZgR1h1mm6YZavzpgGy4QPFTJrsobZxa1Nbexof526gBwNpuJx5j1zTTuVfvwP9cCwDEwMJNR62ob3oLxS2bKTRF",
  "key3": "3XiFsvRGdvH7VGiXky6RXzauqtQjmFBGjuPnfZd8jujNHHfsKNjsLUDMuar3eR5DQBEjAmQXGpSdV1tM39D4wmW8",
  "key4": "5uXAPhvBmDs5xdauVsKiMekNeXg1p6jDEocC7w13Bet9hUVXh6RMQZBo53WCi5rjumgtz4yvyb4P3QNbo1oThV3J",
  "key5": "5EXJmdZVc77TGmck7KgSrAbBB17sWwcKJo6z61JEdTQKnLiQAQtPkB5RDqtzk1bzaMAJEdbpffSMyELsEhNPEbdd",
  "key6": "3PbnP7hmqScd1q5CMdo58U5oGi8Dwrb968cfchUaMVcL3G8qe5ANPXkLECX2eWXFz9awakfLydGbSWvpT74A3SQF",
  "key7": "2ZCsd2CiHLXCg64aSFC5Ge9qZVqfu2C28emcsAHnfxCMNt3DGUuKYaEbC26MMnEZNT3s1DczCreUmBMXsLLpCE9W",
  "key8": "5k4wPmsNRtfM1Di7YBCeUCkFW9y1aJJdyUWCsq5GUARsmP56Nkg2qfFevLNNy6hX2EGrnc2VXvQfat66fB8AgsFk",
  "key9": "3ygteYX5yzeEh9cgKFc8z7aAWxFZMc9bz8dxbBCHwNEMFzVGhAcLrVyN36yAmJq85W2QNfvfHjKUYsdFp2KQy1ZJ",
  "key10": "3pR7geXyWJdJATkRPJw8caqfj5JaUqLi361as8DhxEjtUTy8z4HbLNkMR8K8FMq6MeuvYAH65XvWwCSFPn76fXsr",
  "key11": "4xSHEj9v2yRjHTh8AdWDipWZWVkb5gQRgow9sg5rc4161oLxo5jTQA8EaiXbBaxLcWsptw5ryaswzFjuiLM4mRMV",
  "key12": "3XcTJuxrPS52hWJw2RatsWsMh663Tge7jak9eqj2qr59EVAZXf87c5yknnv7wMZuZzqe27uueVCJgNNGvJzUdsXF",
  "key13": "5y392PRbjKaX2B7jaZ1PWaAgLQukyJYuqirUW3r5waPH5ae1kNuSUpdP42A6MPN32LedgYWmAfzzcU8haGumKcvV",
  "key14": "3dB3wdBd9DBSJsCwoJeUnAS66AfKFcbuxLw7B3ZeocvQ57De9VdxZGk2cwaYPDrkE9aFMcYNBeauG1WyZuAjVf9a",
  "key15": "5z5sZ8nq2sPfpMBa9ERKdFd8SXaMceKExsoRS4FN1bGswvpqEdgrjgZChXutgZwKZYRnc2DrqoN72qZSse6H3kZV",
  "key16": "2KuYLhYQPstfYeveRvynTzZJEjuFFxYBMe3yNRXdoQB2qrLoCpt1f6kcacSbGnrGRc7A75nzkRfAn1cy3pCGyird",
  "key17": "QRtaeqySouzyjNDe7G6AZEtT4RmtfiErwCEEF1JZzpc9g7LeX5RTjJ4owzgVPxs66tDcijqyogah9ZefSq2p3u4",
  "key18": "3LPVesH4ouzrqcCdJqPLV9HEmxzbpkohpDNFcURYc8Gd1rEvSmZjogRQnHQAgKWx9v13rNSZGLSm4ef8qjDzcG1",
  "key19": "2Uc1PPMZFoW484TqS67qf8ha8Fj9gmnVhTLMzqUq4Z9E3qdw2XV5DjeKgKutkErcSw1fCBbnwRoV1kUiFyHpNH4r",
  "key20": "5VarJqxArverYEt8BQdY39gT5pzUR2rTatFi4sHvCe8bxXDciMbs8cvUcRpsy9oy9sVXpWiS4r9z4YRyFCEsMUhZ",
  "key21": "3kmm5rxCGZ5jJNAa77XAWr8MCYs6vxw6YsCcZ2WLEm63gugE1HGwee2L8NRtTthN6YRnmM7iedrCsktawpwvnxPm",
  "key22": "4ARgL6MjY5qsEbkCVokHhmbs2cax2nAQoGzYYffFJZ5rCL5keHi3WSYcQvwXpy8uFXqxUYGpe5X5Rnq6n6t4h2oq",
  "key23": "3XhYrRHTh7t3wMBoPE2af8XhYjEeWEF9Q3a6wK7KhR2JsYaWy9h9GMDtXhUPP2Tp6gEiNzeQXJragxctVsrqg7BZ",
  "key24": "48UbnD2azEBc7eRJBFctecy86N2Bn1Z3Q3C8Wkq3SAABiccabZX4GRg9UzvjvpBf2qMHxi5nSTw4QSnBJ48T16LU",
  "key25": "5XDYz3MdZ51cBB653AoYHcbguaQoidcX3sCE55i4NuSdRVVpuBcZ5NufLQ6JWfUnq3wX6heCr8RFssTKKv6k3NAc",
  "key26": "2ut85oJp9dj1CLdReVHT6qpoZtRMj3zD5ScwLLkXUmJujDsfoS9gPtuP4T7oYXCpXJRk1tfYcrpCTCWEXDoQyMD2",
  "key27": "2gbfNAWv8p82ZCkw1qXgQA65qLaaawiiVi2ZoFUGYxLxAAiuzxnhxaxwQn5uNn6ASyijERnU7qNkrzXYTXHr9upQ"
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

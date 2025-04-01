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
    "3gs5AxuBYeSeUJKZrkzi31SJCCMvtLu53BtBB9hdBHoKnnREgaXY4QmhkctbuCJw5CCN7BbTekCjnKDxpfjAkr7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DEjad1Tgi4o7HNWYRF1D3ik2z7RFo2sd2Dc2uFU4scSuWvCfe4NMrLR1zfCZFFNvWU4B1grZHeH1Q48UqGUpJFu",
  "key1": "8qw36sZaDxwmCDaELtwTkpaKYp75K7N12Q8kcx8J2iEsctsQ46EYe9e2zWtQ21uEqknf9jqrAHf4XqVZxdU7sZA",
  "key2": "592f3VAh573CDn2DbjdHyMfYYfeUToUjp7TE7ktoj7YXmYEu8pADhB2fwuHvMdw8i3DVkTHMeNLcmT4zCiPcc2Ei",
  "key3": "3K6raiXV8VnpaDdbnJMuvRhjxE4swW1giAg7T6CY3ndVhZKhiwhA18coZAqjVWTz1GEZmVPHZ1yJxACXFHVSVVWn",
  "key4": "3EyMQ3snHNNXXnF16cYC2vNaRSajZcZtxd9yE4PcRTaqLAwU6BwrFu9JQuQ3YYvW2c6ot3uPknLMFwAdF2U2UQtm",
  "key5": "39KjcuwVEzZKcprXz289bnUppS65Zv3WhTedb7apYtmq9fUBi86freZ96SjBiZuMJ5v34wWSVtHNEZiMhdHKCYc1",
  "key6": "37HxbFCXDqRcoYCMEgHyLk6vZcrs4Nk4rvMmpzds4ymMKt8LDCq57s9JnUVVfQJxWqYnLzDA65HQFXiT4DkycaFd",
  "key7": "4ErqBNknpGRXsH4cEP54damN8qu9mMZbafVYrh4DkG73dxdgRZPjWzm3xZieruK7A9o6VsVH2xTmAf4WKbWnAyBw",
  "key8": "RJEkW9SQNs1U1AuE7pa4wzz5Zc5CkeDEk5ChUNHuFfkXfnV7kp17CSHzYw96dXj2V3cTiHe23QdC4GUxfJCoggx",
  "key9": "43iyab43c1j924ZFEb5dVsgHyrc7rYL5Xw3qqYatrEv21113axmyZSHMs4fLGCxPREc1dk2td94fxGHLHt3aKWjb",
  "key10": "4FJsyMTVgYYk3V89K9cgoqMeXTYQJ3ZeCQyWrceBbRqBypz6T7GQnDxqhZeHahr5TDXWPB3EiSPWTctKrHW8RmEw",
  "key11": "4ZWy8eX6bhBiQQF5Ybvjxp74TmKGkj8Jx3UxPNVSWvMikGEMRS9k6qLihuEXTWLGYNtJf82uTxbG6adq2AeQduiD",
  "key12": "2Ch5kNeHYDx6WneKip2Apm3XdQR66KC9hBRgodcUa2sbjzb4pt7bnJKLi1WR9o7MHRXeT7mLp2LgHzzw9TiWJizq",
  "key13": "3h5mCJkn4bFBpZ59Ssze2cSKRxaD1NsT25UPsKxUPAPCkoDdTRdF3kjwuvjA5mGi7NZYMBCGGrN7TZjEZMdcRiXh",
  "key14": "2nLt53Qa6yCTcrdsNQiEEY6c5cu5YL1ArEzuD7LuurLaFacVTZTvc3ywUC9fm9ZpowwGfuyQ3yZB7tKtDCHspZuD",
  "key15": "33BgpdV9imy3cC2a5CJzMHrBoXYTbGFeMEjekfdTWA9hwx2dBogLoCRKvhRSSDrrby43Bx4MSaBZbbedgPrFkB1o",
  "key16": "3uqKNHEXKbUi4xBodoQiUsN7XWxKqVSFvi8NAXChFrPKwwXAD52CA2sDn1czVkQQJGCKZLaAZq5AzEfXcVQeGh2t",
  "key17": "3TDRYisL497vTiXN7bRcWBCbmzqKSDKkhdF9LwtdLPf6Mgq3STQnjdKAoZrFef29a4Q3cXTVUD6nCHVbcY3HLtTy",
  "key18": "5XZna6ce82tbCNtE2cXLMKqrD2otNNqHtfGDAuL3kLTvZDTSpmY7Lgg9A5NbZW1hmU6E77YeGKxiMAwKrBbcNcHv",
  "key19": "5NAWUTGj3L4kUZ5WxmYCVEVD5GJf61Qnn8muNwCoHNAJxUyjJVib3UtC4Cs4SGjL4TV651NHSZ2UXngMvpvjiAEs",
  "key20": "3hADSnVHNeimnhjmBvho6ux2REAPQaEUaP3RfUkLVtCA1sBz3So2jqr6PtDXHyxk4w44vYndaeivGT8c5mk9ueE9",
  "key21": "5R4oMh7tVqsdZzTrz1kvNjK1vZXYBBL5i4D6smuPMtF2jt6km6fowwB3jmwzHZyGwaQ8QCjVx3e6jCZk1gksbBk4",
  "key22": "Vx5ndNTiH1mf9DhSqMg5Ktr6owvZLSVfSsMeLDyAuYEPgfLhxwrsQDHh97p4TBLjQKviwjyfBnoeurYYM9tzHyR",
  "key23": "3AjPecwrTGDazUZxkGuc8z3QnHR8FZC1cphFEWJeKACrprC3e2PT3GrJo45DWsrWqFYX6ZeRWnDxUwUAnKQYdp75",
  "key24": "3HewsamyScvPgJFbXSo7fScvdT6DbMDXeNsjr2Z2Lr84yTX7cs1AVittMrZcvt2wDZei4qgrxr3FgqxHmAzqP44m"
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

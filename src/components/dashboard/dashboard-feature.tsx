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
    "3rb7j96o8cRKfKc9DeVq9x8XNdLAcp2c1jtksVMVx2e4M1Un7gCgx7rTbL5fRfTxd3vhnP1m2yWMAFXsCs6uojS8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UQrhVvkLimGgZnMwcCP2ZdF8mCw9pvSqvWY1LJqpN9c8UbQdhK2vkAfesMDPRuB2NwEWWJy7YbrNfGM5A6Dktqm",
  "key1": "3U8fGsBsg7RGzF1ZaMLVsgGdkE5jyiGXDf3Y3ujDibWuEcs2dcquAByvmRANiYDqMACMxpmfembvPTNDXE2m9jyF",
  "key2": "5K7VBhUFtJcd58dUoa7Q4K9dPrd1JtU2oAZK1DeHsDrCbqZqnD2PuXA5bkZeqpNSrHBb1MPn5mCVNjfuLqrsbNm3",
  "key3": "JijfceD138ZVc6aKxwLbTCCLZxGA2HGLwJ5oExjfELrDQXMFq4gE1QvFhB7HWxgSPfxkaWaAa4CAbtqizAp1cgy",
  "key4": "5fFwhDeYdLfCEQjoM8mLnnbp6Nd4T3m91sbjPBvmXz5d856hTat2ZJHV5SH2pnMY3WKZaT5Z9DUmmopNYypxzAkx",
  "key5": "4ybKqTGrQyb4CwBEvW4XdrdUc8gj8fmHuq4FvNsi79Jk5DLQZNpcr7h87U8QQ8DnZQiBkmLd6oLdxuJ1FXuSHoF3",
  "key6": "4GcsTz9BaR75FbKZSTdYrCfE6zkqKx7QrffEePxBpwrxUmG5Lk9znTDfWo4icT8o9VCXVPogTLH1pcJ8U7t6GPJk",
  "key7": "3YMEu6dHZWoGbPV7eEFuUcE1hwYsQkJ5J7H6zXxbPUc8HkLnH2X5LWPkpXbPPPoibNDkZC6sHaMbdAqpfzZdvKY6",
  "key8": "28fsSUQngj5gceQZgzEchNYeeSs8FFY27msdmf7WWkP2wf4kCrifxmHydCBJ1Z4oxJ2P7ucYU3ZxqQ8oEugq4Be2",
  "key9": "65kw4an5cUWWFLeazhKXZ1WW6BPoJkqgcEV625zyLhw474dMSFMH2nf2B63rRbAxmQAKKn35c3ma1F2ZKtoZVCmC",
  "key10": "unPiEoLesei3547o7R8pP6PDjKeAmBEsfMrPg9DnDhtXPgVPoUaJyPfSkUyKP3K4uiTahRKi7u1D5DdmECAJGZF",
  "key11": "33HJGRfzAN5c1dor1sURtjbHjWh7CJZEW9LZ8bQgSXyoBDzz5Xvk2nUVhKyQBKunhxM9zU8xRQcsi7ZY5q6jsgRw",
  "key12": "4JLAAvE8nzCJa6uZ453aF41vXN5hpuSBHs8YHiMVFZfxMA89DrnLSVX3bXBbfKNxvp7h8oH7qBdP4csQ8pi1S2za",
  "key13": "3AyRTeav6bCTCbu3gdgC9QCif7R87fNVrCaGZBSjUADtEzbdwzFwhgQHN5oFnzhugH1yEhtBZhijMisFcM4xYkmb",
  "key14": "qrRWYB73d9C7MRtM6VBFx2q7gUQXstw46DiLgbayH9UBq7sRvLcoVpcCuXg6xuNCfsxTN684catzTXmzY61AxRq",
  "key15": "3WNPQRmQWHN4nJwrkYQYPk52TNYztEfeAyJE7APPF9DRZGq9qE8E1VmWjjdgjynubMrLJ3BJZGNf4gtGDbiMstku",
  "key16": "4NL3Nqj116NM6y8J3tHoHwRgMqFSyYo8W6ZDsucWdDeDjtm117Cz4vtj7ZzigYXDmxWwH1JrerztVskEjT51Hsjc",
  "key17": "2UBrDAdq7M3d48HvYZJzt18yQKBdJLh7kfL5suY2awacaTgDgM9GWfDSAbMT833hZ1bjhGBVSQgpkWWUTTo3PyUz",
  "key18": "2Ejuxg1BXPVntz9VhpVEwHEwByCbQaxgWcF29YV1dcrChMrwfyvA2h9Lpmo7JvWEfL2jfNaG9ZGgsEWUEoTniMb8",
  "key19": "3XcrqGj3Mp1NywrK9XRhWB8SrP2qMr4gqxCok4HFik7sJDgaYgjoQhXE51QqfxYU5fcBQJFZBBYuJSvKTnxpQ6Ht",
  "key20": "4wCDn3UJfrN3d81sQzQzvK51JsJfT4VV1R1zYiGn9JPYnY6RbkUkUCtchD6szxn7JfzSxyLNRjCnRyVXkKEgCxdu",
  "key21": "5fVZfr21k1Xx1yLALw6m5xZ9DUDEV7WYso7bjQ8KBUKaVFZKmCmtdRcScUWaxeAEJBvaYfXK29NqTQLWvPZDfpbh",
  "key22": "2K7eRMdESAm9rPspus2VfbBBfrjomBaJFAXvgWY93BKCmWLa9cZuKggA4oLNzLpFWYG8pWXMvK8pSnbr2g8uVKyp",
  "key23": "2iyRB5Bdt68SjF5czJDP6NqyBonfHgLSLXNMpTCU5wEsbBUrvV1qZcUzBmDSmy9ovBtNpSs2CKSdsunDahPui4Q2",
  "key24": "347cEt1UsfciGNRFKSHetqm21ft4hHkUh3R2T5cbRsKUXdwFNnkTMQR3g3tsKk2Cd1B2eFhzwWApVhwbsNuYmHub",
  "key25": "3Jc8FYgi6Qvw1xBN7fRtSX69VmdaHm82brQ3QhMhHjaNqm8MBBEFZa8cSwHRhn6nScP5QdtZobae9rH3tGmzZLXv",
  "key26": "56nHRgRhsrNYWukkfE3xitGE568FN3KS14PFdzoLar6m7cUbfG8xAMhMojGtJHUWrm18GeQAtVxpmimxjfoz27L1",
  "key27": "5m3DpxdwSTMLf4CW1m22wMLQQNdETNRvX6e9TjVFno2aX8RqsMRZ6GdMRM4gT4z5qakCyVgjJ6Xq8ncEq99tcoJy",
  "key28": "4oLAxK2nWJPzCdDUNKCeSr7N2yhiCcXwv9DgoQvHR95KdP5d4DNESfir7CowoU3aq5yTGaDY9UWPpB7JpoykWoE6",
  "key29": "K8qT79YFEhdRdMDFc3CqSfjsNwPGMsF44cGZEcyyqji3hTBoNPVLVdB2fRyHgC81S8BpEMmkgMCmMT7tAiw5LCU",
  "key30": "VZ8XQHTSCiNH13AUZQowa8SECRgu88nfoyLqeLNgDTDbfXycqS1Q7CPcQnrsYjbRraxMwzpHuBUN8nFUrmBunVP",
  "key31": "4GGZi4gey7V1k6WQ1bkxF1Pd2T4AoNCKgtQzLH8M8pbW5XGkchFprwNFZpv7zZjwN72xHh9AGdmnoxKYQcizwZVH",
  "key32": "5sLRfz7qCyP1S7H6LAMcn6NVrKpMNr1XJP9sgdR8LPyxXPjxJ4JSFG76tEPeRr7sz2p6RmX9AZqrMcZPTUbBAoz1",
  "key33": "4k97cnJa9guby58SWCRTAGUGCPBmNxBemFUsaZp6wrQVwxMwvAVsGc39VGJ2iG4TsR4FxhvSwmq3Z6op2ir7TA6K",
  "key34": "4QXELrvFDJAzf4aF3Ypv2khJUU5BJoRkTSQhEGk85Rtj4pxEKXpdnanWhFBjjUUzgVARSgATz76ht4oXxDEhjUmz",
  "key35": "4JRsrdrYSdsY8ij3N3YcBjrvQ3o5KHcMqNMwVQnY7Dd5fNig9pczrpp8MqcvZ9rvgT6hTDKfS3kzRKCdrKY3ZuSt",
  "key36": "4riFRqqqk4i7gHDCz3FFTdfmhd1UWZ3mvw29QmMpiit6BrFmcGj3igNbTivLzYzvB3h3yFbD33q3sLuaKBDXDP2P"
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

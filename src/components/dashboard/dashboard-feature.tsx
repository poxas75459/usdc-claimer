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
    "23faQjBnfENgZ6Ap9LmfH2dvJsvoa1QFVq7Z21HkpRZeQMVqzBaTTHcMVc1HJk8FfFgm66ouF96madDxsr5LkBtw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DinntdJEbN3dYDep9vGXApujE4ULC7bMXBhcwBVc1ysaHQuAEvQ5o5mBrhwXxQ499a9vL8SvduEySpPJB5Npya6",
  "key1": "4YM3XzgntTdtRT3Vo7acwXU46wnxRLHVi7CeLkJJw9e6xUGh7pXGDYjBVeGS9biDdBoYBnRKnWNs3aUe9hY3D2D4",
  "key2": "5pZdCcN29ezEqxVM7Pct3A6aqddaxddMwroJKQRK1zKwAGvmR8KD83en4fMuBSci6bLeLPxNtgrr8r5sCL44c3dh",
  "key3": "5Qxyf2Jde2ctgy51jUBkGc492frF9p4gDDQtubhadXDoqGM1BTTYJRKhbnxxMhj19vBaQSB6MLjF7AHW3gT4F5xa",
  "key4": "4nHDTtFWJsm2ucWsNNVWBr6pDhZjdTLM5anK5NEju9hMFFsX5nKvZ8uiiBQ467frq3hSEyR5ZkQc7gXVMsRJ8hWU",
  "key5": "3LSMaL93PnJzTG7NDT9qozkp7mwpvHU2dMdbRY6jvXggt4bdpd99FQER59JFxWqhAADui4KRHdkDZTxLH5HeagzW",
  "key6": "2o5wDDDsGnJvWEwBjqMvLV8FdiUjuebUMKC2bjo8spSdBmEeTfDf7ZBC29TbvAiNTyHMjU2h29BZUhfXpXmxejT8",
  "key7": "5bPCtQhdpzQiUHZMGhoaaxxL423XXebLnvTLHXa2KeRPocpL3cydPj3bmYQaQAkPWTkEpUVj7ovqz3iRcBZ7UuX5",
  "key8": "VpCGDuNL9tSS3uf7kNXMP6sAaiU7qhpJ58knS5fBvzvVtjEXXLXJ8LSnJD6U1trbFFhTihiGRWZmdVuvJx3pDAP",
  "key9": "3qyxU5cSKH9pq9MTxnKP2acPqFe33QasJwWiJYXYdaLJAC3LTdfSTmqr2w4wXxaYpaFUmkwEzr5hwS69t7PgdjWM",
  "key10": "4e79xiBPYmZigSoWxVgtAiCzjgT6yyNvGwrvrdGbs89zhErcrUTf6W3xCghADmJgiRxcQW2apHtV3ChC9LDLLLGe",
  "key11": "26WDvWhBMswNA92TtrfcvFa46UhA2TvLMs1Xnp9c7wQ62ANFWRYmZxmbeaxBW2g89L8xRfAvtTDN6pGkbbNKRHLY",
  "key12": "4pmK6cdyoNiSG73hXq3HoT8i2W4BXDkcy3tJSYWFBTkexEMDVraoru8dwxrMs44MB4ybuAKvZ8J5QoP9dtweS6sH",
  "key13": "2Gzcn5U7ds5cymzabrLyRyq1LKWzaBMYvv4Qa7jMGVB7qxPh6YGpieehwfGxfVubeUTHv6WoqqtUz7JrTNZ8Gu1F",
  "key14": "3QmdqAH4UnE2mV64ysp5bpCAjd68C59ADEgEyvGcaotDBf7ZMXJcAJUwnJt8APNuSh51AEpdg2rdr7GuXfvXb2Ew",
  "key15": "4BXmbfVGBMpxdFUQyj4vxxR5qrDb2a2aQoNLewGyqKvPApVjoNA5QTUFmwmbeNkjmrTXBNVhVza5ka8u3nfWwXwa",
  "key16": "2iadrn6oramZHqGTiFp71yxbyAtcS9oqXgezYUZsiQHJFy47Cb9NnNTMaBhGbQPYVeNXGtdDqmyTkv74U65BdESR",
  "key17": "5PhV7iET4XiNihUiiN2tWJ7cGWU4VxMmcHgTCoMwvaJfd8DJyzS45zCTjFY6sD9xpu4zmsacFk5onVyFt1J6ACLC",
  "key18": "4U8tL5eWXNcQ2PGQW98nmFut9JzVANe3PxqqwhdFapEJ2XUY6xFVUY8QpgRFvXv1FoAU9qmRjMWV4MYBbGGpfUJM",
  "key19": "4F4fiicqtHhpx34UmQ4CEYoiMme6BfUEsYYLiHY9okuNJexPmHFNpriJm5J93n6nsEeSnVGNeGfTd64fRQhFJZVz",
  "key20": "43Vsou9ECacFySQE1WL1E4QShNQvavadL48tWXbaQbok2aShChBnAPGsQZas17PbjEE2HQQt9iudTrnapxKdRCJi",
  "key21": "356mGSrSrtEUgEsmV7zRCjsEa7MfZ2C1n9aWg2B82vkZ1S1snYgVwcgi2Y8PLoFQD7uCxX1NQhHQAjSRhB6PXm56",
  "key22": "4Kfh9yfDtqDeJqV7rcd5eZebjHnCHcRSQdt91mnMgjFstDSsjaw8iQiv5kYERccxg6eMLLcR1jekRfSFU6kGkHcH",
  "key23": "5jSZFqHVQSQ77iAZCc63dKK8vhuq7NPy9UC38WDcMb9QYydM7RbXHfM8EkhUmXqqnwP71UHSF4AfM9gfKxehUYac",
  "key24": "5BhjF451YN8V7yj9rT1xBMqmJaW1C6hYc1garcfUFZyeRj2MRftDQdnxQYQnaxtq6xgTaX2RiFftGVQPWM8dScuG",
  "key25": "62tTzbG3V26HxDKFPaqPXaCMDNxM1LUT6jhBN8PJhSqVfXmaXHVfS3SPihozbCxQ43kFsuL4dGmpq8pjE3WKRx7C",
  "key26": "HBiJp5Fv8Vit3e3vRhM2yipLRP76TNGxEQzWp7jZzm2BnPwuu7co9waB2uQS6x52nJgFDpffcG2YFmdrHuZyBU1",
  "key27": "mqj7t3vAzWM9G2kkbBDpCKW46c4FFE26rKKQi7MU63fmpQBf6L4WBw7MAvbADpZeYhkbEdvnm9vi8qPr86kx72Y",
  "key28": "3XCQEbw2mPMTNvX3L4tVZzKitF5daSkxYTUPdw7VRUUotwZ7cKuMHjyV1mwPji4hbCjv9Eo3AGMVW652KNH9Wn3",
  "key29": "3dCQJSaT1MVG8gAZB6gRP2RCLpMtfdYLJFVL4P7jxvxAHxhNW4LM3nPfybmS276HtKKkoi49P3VXLgtjWasmDuoe",
  "key30": "4eGmsA6JFi5NBu8PQTgh8gX8qB5bhAgD8MR8XCM2kr8gk8Nx3KpfrCdFz9TwuA7pDXBiVH4nESDyVtVfvS3QyjCW",
  "key31": "FLsYwx4unAMEp6t3x3LnuwHbLA7HRnLcr5EJ8TYDgauMqb9dvkyq6QSfW1hdomWDuUt7ip8PoX2sMAHh4NWhC61",
  "key32": "66zC12XJMiJmFw5Pq5AGyQjszXTn3ZY5QyVSGmHqYhGKDFFiRjQHjf3Hau5Vn9hd4pUV1dXiDQysGtJK4VApTM1F"
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

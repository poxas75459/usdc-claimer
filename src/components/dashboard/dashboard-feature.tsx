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
    "4UtGpNU5sTWo3HUE7a6RFW2Jnp4qGtjEbcQj5gAgzPfxtSPi5zPALkGwvupaU589XYjWesSHzmtZi25eTXUgcYfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uh7AJL1EmLoBqAsowWoXxbstKr8bub1UCj8pzsgBTvLF8uevfPkzeRBMkP1pvt9VnotRUddaEygqnsPJjp7jiGk",
  "key1": "67gzTqpwMy3oZxpuBxwHPtoEYsnirCdPnUhMny7H6qGL7L2VvxSKScCKLTe7ePVaerP1w9uyZoKCHmCuJ9QSN22D",
  "key2": "2LHBh5jV7zyGJoQV4xuQ8ZBVxanVh4eNNik9ncgN9UtBBNMc8SwMdXGVadu8csCPdoCcaufQsNbXKUgtVxaBRQvT",
  "key3": "4CCsHUfKK4rYw3kFHTRSJdjrnE5fyS99uD9z7JAPdxgS1byZd2L6wjrVMi876P9Y5PJE2N1mZywesJAfi6uFmyGP",
  "key4": "5eEf9pnqkcgxAHTZMwL4Poni6sAmnQyE48MTmnwTDPN5aHPRLWv5hSAVmpUknvy1vyFNxTGRCeaRK3qL9QYfWMbW",
  "key5": "4iUeqGoC7zhh7fiT83rQq2u6Lf9WQDK2mGNkd4niPfRVAHjQgSz1JcDWVqANHsgrFDN2R6v67BJM8YYqBreUiXnp",
  "key6": "2W9XMA533mV4dpMFie1MkoxhQiPkaFHLYrEWCP8ijWDLgAPpvdcq52ysHQzWbZQABww9YFsWcCcGLNXAAp9QfKWj",
  "key7": "2suS8FvzMrzk8Hc1yUsTH9NCVYJnK84iD2YYo9Esev56qWd59PXEbzAh7pocgUHSW83WDZvmCbQTCjZe6jNmAmax",
  "key8": "5JzVhi7bpFZjn2UUKuxECeypUcc4VrzUjPrnY1qmPrX6Ny2yqH9ZqxHpMkj9usyAsedFApZ88fJuu4i3JxZTaZFp",
  "key9": "3sLEWmmWotVFaUEjmH1v7EMwDnjTRD3LDq1U2H8rMjWvnsTopAzz2EjsEPa2JbvMjQTrobeMwv8qJy5kcPY7ZydT",
  "key10": "5iUBu5HzfkhFrFP1koXg9gN2ihhRtugU1amA79g5Un4etsDq1fRufpQvGTn8fs3ZGA9Y88xvd6m6ahUF8F3Y125E",
  "key11": "3X3ZX1ML3y25ZYoiDqEWk1aeuJMm4F8YBmpeHwiKh3fhSSLSsRtYDUpR6npmKGPGqH6VRWDKk5emAE8b4UFGjY7q",
  "key12": "aFxRoAczWxCqiViH2Geit4wrKJJfpwMDxkmoo5EEXd3Zm5jrq3n9eLFgewx5Uc5gKWtukSrWzgGMhWuNabMo5bg",
  "key13": "C4ZK63c14Vs9AZycaEBmiQobAQo3FVR6SrWp3ssgqLYFEWrPd2rtqAUp3fvL6gv17WVBttGCsqHLe1SGZFHd8Sz",
  "key14": "52YWb32xHBoLFFnuNDAGuagPBwt6C4EgP6ze872US9wJshrwpMKRCmuSs5f3w5xeHqMiKzmCY37beeyCW3uf3uH",
  "key15": "3XtQV2nSdc4jqfWvqWWbRHUdxaeFnADwog9gRzcUPArBPJbjmvztRWihQcSaRwbwTDNxu1SkwAfbpnNv4JqhWxJ9",
  "key16": "3dPtVKiSwogVJ2Bc5YVu8vV8grFTuW8RqFT3AQJMJvjc82yq1ufE2nsMFCVtzmsAjGxynbmTyUCB3QhMpb6Z3Evw",
  "key17": "LvzzW4FL9XznvU7ZyQXiQFsmFhfzecBz39P44ZQzq5DuR6T5nyH93y5YAy3hEiVUAnBHg6CKKkdqMAAQiU2zDHb",
  "key18": "UpHkzssadDfDUtTc6hTxJmsvb4arr5JyAcUZYv9xkwEv4snNAu1xjssaPHYojHKCXs4496Tr9YReRFpVrEj5kUV",
  "key19": "556qCkmaoV6Dp69VNff88JLyofkkckqvJgSnbFnBwyvd2XmU9UKXN1gBmqZqUUqZAnSwre1TdVjrTQCNuVoPaPFi",
  "key20": "JTGS1PqJQy5tro5X49vpo8FrQhUJqh7qArfp7wSNmst8g19xDKxysV7PLaWCvDR7YP7Y4FvVmLV2TXEneq8KfPs",
  "key21": "3tmn3rtPgjBXzXkspq7qht3nd7ww6YHahC8i8xp1n9dCxDw8AWkv2VL2efCNRJobhdDkyxEfY4RA4tqg6w4czz3g",
  "key22": "4dtUH7yvKptvSbxctRdXfjF75Zg4tePCUZgDyFMpU8mt9Db9uGn4CXHKCWZKPAns4S5jSpbaDRKvJ7oQqnpfZotg",
  "key23": "4xAoTFqQxLy74PYMuG8ZVFxPtsGsPwLfR3k7XR2SeEY4oHcQswg1bKLDaXhbYwgJ9eYSLCfugGMGwRbWTcV17MNy",
  "key24": "5QfMBm79t4F4z3V1Fbx4oTZfX7bhTamQWaf81RYUY4sNv628KacHBZ3xcTW2Lj9SodSw3F2R1o4suQDP56ocoV8F"
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

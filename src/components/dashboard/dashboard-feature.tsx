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
    "4srKYa5G9rHeMjMYxuwaYDC31AN12Qpfs7V99eKYhkVA4sc8NJQG7jcCxti8zkKS9gcxZg6Y8B8BYzby4Vf3hbsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuV8nsag5nubMzfrqvo6fffy8QPNtFHVyMjcVRWChu8n2pzV7ctsc6sSaHvi5uU9gWJJ3aRCoMZ6NdMSdYnzWt8",
  "key1": "2S9iJTiPNz7hu8Et8HwFBLUBfzY787NuamAn9kzgTkfxaSPdp6M7ArFfQRgWAy9DHU1WHQaPanhpQiNDkHxizHBi",
  "key2": "56gqJRbXEwmoKPaxKFdvh5hTzvjY1yn4DnhUgJJcfsLr1HYSPEvE7a3ALATJEBfBcuMvh6GrnJTZ5jQo1LnS91TR",
  "key3": "5US4NrRUoV96K1qhANrjZE2gu7QEhbjz6Yox5JG15aqRWCjDgPatJpCaMSa1C7b3uVVj3sonFmF7XRbosFNyQ9Q7",
  "key4": "4mV2LtCmFK8mkD9sxnjoJeA64tsVM5fUR599KKzbwR5Y5pSEhw7TLYcWgocQrFWsMrWFQX8eRMELPPi7NGB65WCM",
  "key5": "3QX4enkD67Qejj2YZjhpGVZJ9aLW5XNNtpYhnN2zBVr7K2xR5styy6gGgcYEVBfbuWUAAPJ6hAvbi4xEkE9NhqBJ",
  "key6": "4qvsDcqZzvcxnQLDChzT92PxUYLrvJiPfKwkeQw2brV1BHLC1usBgg4wa1DVC68s3FS1Mrx4N6JqhuZxEhN2ttN2",
  "key7": "4URXwdDSdyc66nt67boj1Ad8EfNd3pNxyfpgtRnUejpxqYif2RdXKc7dnQckMfXiqhTsH1g3AxBn9QhFExgHmTC2",
  "key8": "5mafkD9QXMwcsXg8nKhvCkfq9NP5SGdYSffbg2XVbX8gDKHwSDVe1Gk3zi82sFEULxJqF3VYqNwQuC7iJXu3pu6r",
  "key9": "2N5gSy65M7dTg3mqYt5heJBioecg2ZxhWVegmv8EFj4GVbeGwzNBfFRLmM2aLaBNDS8MRVe7MVuCLZGNvn6QWWLp",
  "key10": "66ftiiLnGtGJckG1iqzJutVS9qEuiZNgXj3igQvoat5TNBhaH8YLNM2yxrSYgRs7A7gwBevPNT9PFu7YAu3q5Ujp",
  "key11": "2cWtjYuKzvJayA6TxfXBsDuyNcVmqbB9UpcgFgdndoaWkbdoWQBQF8XZaKyUp5E9eMzyTWx2E6o5o8my17t3zyDs",
  "key12": "4pVvNmQJRr5S5GpLL1uHd6VCJ77tLsBVqL9aNxFbXf46HjJ4cgtrdinaawPNaG6NCZgxz4xMK4UWC9ZmLc4jUyUx",
  "key13": "4oFCa5w7g8pSX4FqsB2sfXZBkwNsPzFAC1hfcECFF5ynCT5WgAnpSUDsrzkHf3Mi9HwcVSZxE9b6NctnYcscHcRR",
  "key14": "4Rgw8uGMEryhnkzbB9AMwRwTfb8pXasVW1sjMxWipeGTr4uVkQVfpti66R8k8qaVUKw3vBMbMYBs6eiiMmu2Cyzh",
  "key15": "5br1jW2uCXznj39cKviuUEVN3u69DFoy31AHnPMkPfiWaT6aMq7RDeDhHqHquxjqTvZxdPtNWbwJR3GgM8o2QDG1",
  "key16": "2eh3czhfDbFyCaAgV3S4WD3XxrqwRHYoDM1Z6HDV788xoWv8h48W66mwXLvQkeeW1bas6ioX2RUQcJb4FoAAhTWr",
  "key17": "2MtD27tiyKciMdz4XbAvXfygNtP4gT3DaQtyLJWXwKJCZkqarepjELVZL4VsFg4ouXEaChQsUZfmgFB36X5E6vaw",
  "key18": "3ioheb8ZdKbCr5r5ZuPeTYVr6yVNB4ey4DDsCj7f6G9xE72qLShaB4dLusZePARhxiQbMkZjM9imVtMaWFiDD2ea",
  "key19": "43mBobZW6fci9Ai29CikL42PbQpTMCKcsfkkkFWWz7oCbjEtHc27GGutyi9H7tjdYpKGpbwfqAgPwVw8qCTFeyLQ",
  "key20": "4TjhRoWnEcxknDYUXhLHrofizvqix5auM9RjFTQimyNk2DD3b8ca3MxQ8bZW54J3JUUAEn6p5DmCL61LXihk2iZU",
  "key21": "3VuphazNFicQAbSm89cF2F65rW6R2g399PSLE5AQyAuV3NDBrw2HDVbswSqsz55iczodL275ciDBN7GhPFqBSCYY",
  "key22": "8GuAEddE6iRNZhQQ51ZiJVmpjaVAmJN3TJadioKh11dahth4xtvHTcYCU3ZewdXt3yMNCgnZEohBxF2MZo4cwBP",
  "key23": "4mowu1ekApia8WZQQDjezyDpkCnb666LE3Lj8fvNugZxRQ1V7BAq5XRNmuSff3qxF648aQ6agaU1AseqByhyxGkh",
  "key24": "3Ug6WmRRiLAnRk4yzTyRp8WFHerUNeAGykFYnZ5UVXv4sRZZqMoM3MofVFCLZVXGJUpiTDU2QWpUVYaBuLVR8jud"
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

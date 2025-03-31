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
    "4CRf3KrMLFU9LfEkbJ6HVy1rVgXSNYTMAgz4CbfWmyWMWCyhUDY4QaGmwTvakckjDrR4TBdVopKjqaYNJ5bsdav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFZ35Xqv5MTrCvmxotFy9QtqFpZgKov2W2EyxDBy7dsMF99SV7JxBDsHftwvKYqMZ5Fr4HAJsMdGNKNCVcKq6vU",
  "key1": "5vLjre5EKEncgi3gHmRzYNfLJiCBs3ypbSKg2ATQRfWzjW4qs6XsbtLGSpKykogDE2h3vSfJWnU4GwPw9Qngt8TQ",
  "key2": "4PoqzmGNGPWQvx8BgEZhtRLzPiw31dK5KQie7Wa4UWp7Atk9nCcYTXVidjgiAXaM8XFGAnNW2e2ry4xJdc8jMFF2",
  "key3": "58tr7M5Vi2rRTFtrs5pdKu4H7JihrLTisgCmS7b5tZyLx7VDLbcBerXnat6XUmc6ux7L1SxEHgvGodigcqXa6tXy",
  "key4": "v4Y2dTAzCMUjvTv3qsQUNDWb4fbhGeME61dq7cNZRYqWFbdJ7iYH4U3ztysPws3admBDKgrQVrn8PMNtXLDN3Y5",
  "key5": "2qzkprsud1HHJNj5dWLLC8WvfdjS1p3dXJ9UpZMFECBuMcgSHNCr8LiYyhD3gD5Y37NBkiggChErSdByx6WX8SfP",
  "key6": "38fntskuf3TtTXz5Pt1jFj4Vb21u4nUtDuiqs4fSverS3C8XWwLdQ5XUnoziTm3hbwsLVSAT6hTt4S3CpHNwA2qs",
  "key7": "KsvYNKypmohWTSRk1McVh9kniNZ6oLF7deqgBCi5RDvRptW8V7JycT9EDsLcqKmfxPSSt98nXobtb3F6PXTc53u",
  "key8": "647rGZzN8uvUZRuoV6nHwcADJoyyZwx87YYzPLsY9SGvQaioq4vRzeoUd8iRyjUNABpdrP1PuFPjrNGxD9ZJAeSo",
  "key9": "2pNKCHNQXRrG43gmN1zLrCXbWYumDiuRLkfJXUi7k4oLyUY6w5PHmmjgUzAJpKZuxPhjb3DHLxNqWWKZYf9gH2R2",
  "key10": "23r1zktYVbsxyJUNfJctss8L6ESNQjoVqKgsp4NdFDrqu6gG3a97PbYGVsbSqic3ur1Yg6sYP8u4LRm8j94B2J4a",
  "key11": "5Zn537F3ejcpJJbv37ZbSeE3inVPxqbu3JkDMTcuWoNQ5MyZPgCeCVMCXp9oVVPQjmVU8BJQ7uwYktTe1n4LjiyU",
  "key12": "3q8Uh8mRKn7T1gakaVmL4SbVTqccBXbdEnqNtALxKc5D76uzg2hVHM1bNdTKVswWfWYibro9MKegNsK6sp62qYv1",
  "key13": "22eFFAiQYG7pQBJf1GAqev3NtRHAqeX47RTTDALwL8zuLEy5P6ELPs4Hikb6XW4z76vEeG92qU9RsT5UyeHbjCdC",
  "key14": "28qhk4c2z7MAw6fepez1kTzTdLj98pubRJPuDMhgKu916BqVpMQk3GEP7JFt44Zus9opUmn3KMQKoP5gsZJcowWb",
  "key15": "52eZP8PHSxb6SQ8gPUqQDBdMZPgMrHiU31PmW7DogE6MLGhparqk5Rp7nhPMLLKr8uQCQibY2f1TmvVV1PJSJaiF",
  "key16": "3U2DkhwJ6cWWGrx2GBTnH5hcKSBbEmnmuASuREDNh6B2Q8LEMMAwpVLkQaTm4Dewm7qAjSKPegjWqsJb8FycCwvj",
  "key17": "4eAHFATrqvNNp6q5R6XSkdRRc7m4dMXFbHoZvqWErRR3YFVvek8z4Fq3qNTkZL4az7BDEgFKs5CdF8aiLWVegMsH",
  "key18": "3Qs8kcqCxApZXVVhH2XZAzhW8zdAQRZr3QmDXrPkgfmriJncFts2pJYyMN7g4epqEqgQKCrG422o9ojMwawbvVEc",
  "key19": "615unjopg5aE2xHAjKL7pK6kBy6a6VRp4ZpbLJVCvPg9RnhEdzGP3bEzT64U4mdvJ1dF38M6m1E9yN4jJYVgRSm6",
  "key20": "XjX79xrra2VMWkDeEusZ24f2KX31ZqDMzjQgyfCa2trZECyWXogfhtotpoBaBmvNnwPLtZQqD3vprAav1hurgwV",
  "key21": "WkYufYbWd1SJ1ECX6DCowCxSuJ7XS4vKqdFhptMyoonkgufTHqYqefUfpWc31TvAGdZdXK4mQkLBNR9R1LW65pU",
  "key22": "4L2PNJ3HYx9vxmQ6L217tcpXQnJLzXMULdrTbMjCRv8XhANnnWtvsf5s9zwbBWwPLAzNQtvTzDCxyK8D7NvBoAsr",
  "key23": "2KKLiYUmkbPb78jGgKTi1G1JXAEXTX7oreeZ299cLAqnr56EqJZH1USnKd4uCiyFhrnYMA2fWsb6eKkSb8tnhgBe",
  "key24": "3goQShratuNyaEwosAXRsV79ZihiZNGm68QAfbraYwj8jahJcbaze973JqseLhPXKm6RXd1QXpx6Lh7CBxuxsyze",
  "key25": "3rsmH2sqNJZuyFgD67MiRRggh7azefxUPisYBU2MY85eQ6iAJBsvThQ7A14zPSoofHGJydbkGNJPM7XFgT25LGwo",
  "key26": "2qxmNjdEDNBNhekLWEDSN1T7jEW1JoNLVUUYCMetXjaYxcXceQVC12DjeSvuEM2Wj98TERihLcaCf6vrvo6FX3zx"
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

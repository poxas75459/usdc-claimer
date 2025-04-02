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
    "57g5zwherura7dsUah7VDb26uQ1TVAHfdosLyJY89vG9muhSzm4z1FxZfi6iv7zDQtMNkVnArm2wF9Hdoo9mdM18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZjJ1LFFMsLve6uKYgcnMu7c3sUrvsASn595m7zLzzVKsZoDCPFFd9sfQrarRzUVmrPDcKEqGk5TYyLyKiVhJ3w",
  "key1": "32g38uWx1BKQqg3uX3F13pNFvu2aHkZu6N32YwrABM5rghNndZYGbepdg3CjNsYxxvUWumhmvHHCUxPKzsgcssMz",
  "key2": "3Yio1bBKZRRyQuSo4gqgigW7gPkMeZTjQC1YbzcumWa49BaLHqApddCjpnbsNxF5yg6dSG7NGcQUzoaSxVmseHyL",
  "key3": "vsMVbuPUj6DkLKe6rceHRz5iUHD23c63SRbUZ78i9tM4CjMt3Ajb8pMxyvLcKDdg3ViSbSNPHmgbFhNgpf9VVu8",
  "key4": "4tgnVYusYjdiEwkSJGr3HDjtgFpzrhGoeD4uKUvENanwk9aa4fggtntpeqNYiJK5bcz4EKghmTFBMhHS87QmY5GC",
  "key5": "61eZ8KKzq6KA39Cx6CBTHVDg6Jmn5TsHe7Ri2F9K9Q8ZBUrfzp9crgNUeY4pAzraLtrMBcb4Lmay6cQuwRHwTsaV",
  "key6": "4hT9GvV7BFnw2qENWp5oLSpXtMPs95C95RXKt1PZ85TeaBUKW8RZnes4oLUpeC6AsZ4fDvePJeG9YxnSJDmrHPZA",
  "key7": "3D3s9teUsGSQLgveZEmhkyccJrCGiWx8sxcc9i93FZFGjFes5DuM2ELcP2ReGp2z3bLmZV7JiyqfKH4yDM8hYYzq",
  "key8": "4AkZv4mWFv4uCYHS6MzDkJreuuXvfXCKcuJQx3bQ1wqPH6kzRGiJD8m7HQe1BMzA4nZZFZBdKNMegb6txwRLFmkd",
  "key9": "1nXiLmHgvzWBi7od4PNoSkGHDmizsZPkhcYZU8DH3u4MJrYRK9PBCm53jWSzaSeD422hWHcvAmfHRCNB3toLgBN",
  "key10": "5PMSfVZs8pRNMrSqt1VNyJ5eNuZoaDTj1VZ7gv7r42YxdgdGzTd4bfBWiH6q7tCCyB5LdBXWKZod6UqynATJQzUs",
  "key11": "5auGp5iR1uBAKzkNEQ6X15o5TCoEJ1miVPLdXJHNfWp1yegkS7vqSPcnKNPr8r7yVTGSpDidQiRw5jx5AMfgDaU4",
  "key12": "36qCHC1xuLJRgXhAAnak56BcDnZJGDMiqs4bfXPYoY4TrfSZ628b3oEijwCcFwL4ayavYmMr3HJm25onvsjazKhF",
  "key13": "3TYxARXiKq1WLoRiUyV1RRsQDCCvJe39RzccNxf3puheQzXdpfQ4h3eFNEANyhr24VGZvNqcsUuMHQzWZe6uWRoK",
  "key14": "2sVBd7eTeBxZApmHDrEPDtb3ux9baWxmbnZew4Fo9GM8YhUY1nCG9Qq5goQWsgYP2yj8D7VMxp7RZp9rrMPKwa3k",
  "key15": "3sNpqc5PrxXDh1h8np9ZYda2FfHboTt7VBmXNZLBC2ie5kEkXzhWfxdw6LxVriqYnzJG5s4XFsgV2yTwidRa8PQ7",
  "key16": "4k22vaBbVRjCd1V9vsCgR6srDSTwkVZ5zhu1Y8BYZ9yPG7sENUMWgtcyNNMDf8ngMfCNeixghyz7gzieJfPew7xk",
  "key17": "2YLAWAXk65kBCwcVYL9am2HmscnaeeNKLKTNxv9VZXKiMc5HbSYTkPZMaxB6inC5qxP33taFZikfiRYX77Gx2FLf",
  "key18": "26uY7rtQkKZVg2mJUkqNHJbbFKrHZV5zcZBKeMJBab1v1c41ii27jMMAQ7vtk2jyyCSfo5x47Wzj2XLZQ2kRDWpT",
  "key19": "4KcPfC3WSyH76k7pMpyD19Rwh2vb4pNG4dRMU1GdX8LkUCZbYzJPNijjFYE4R4nmPuAce27GmMWKqM94Na5oyP9H",
  "key20": "nEtd6weq1aicx4YUUWhxmjSwxqnCGTcqnXJubs3ZimrAwKQoFZHxgABfNVuGXfutPcewj5kaiZ5bpFvb1qSWnmL",
  "key21": "3gJNJq2qLL9mPXKLqMsmVZkkrz2HZS8j6smhjo56cKUV7YLP8FxdmpaCBSP1SgE23HcAF6rtqnUcgkAHTu4qkimd",
  "key22": "2co3WbLCDXuqkpu8dEviKKpSY32kpa67rbezSKKWLwnJd6xofKgS6R2pZ7Gk4iyN2jkUfZSFw83tuFpz1TpuhM2n",
  "key23": "2p7gxNzcsbeEH2ZUUqLh4uHn8oz3ENdyUjWcZ6X6jm9DQQCwMryUksusFRyAGkh1HoiQNhx5U6CNHE9AszUA9nXh",
  "key24": "NLRFS3efFdz5gJNWbQymxhdmvhjnimhLK6mP2Y3YREew4SVUnyQw9rYcHKaB54NYusNL7Y4G1sXmMjNGrtMnKjV"
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

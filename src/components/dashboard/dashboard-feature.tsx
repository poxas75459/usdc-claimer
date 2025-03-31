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
    "5gRCo1hjSayuNCd6286e3qZX5JDoRxtjcY6bMEWXCuh7uPKUJUcbpH3ZsZJiPYJvc2MvWFC7VkLYWeft95upK5Tk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjXP2biUN7xnWypPqHQ4cLz7MnaAz7ZXW6Kx8G3zwrwwKQ17qkSS783WjF9GM8a4UmB99GGgqDqxfy6mD9CKGaA",
  "key1": "2z3JB1MetuEtEgvyGNAs2osWfvacMEAfuy3gGx8okUxzYwEGpACUj2esXBPMNCAqvJYS7F7ThrSRdbUfSMffczfB",
  "key2": "5WywDFCxpwgscvUbVeJAUA3GLXP1cFYtu8JbmZYDftMdhaieyzyEMZ6EvnAp9e85AGfxNkqE1x6MbGEzrwVaUmie",
  "key3": "5FkPX9HHH2VBHN9QiTC9jVMMcPGByZuetc6uDkVuDGkPQrLWxVqZ8iY2Few5yErkE5DrhkCoTQ9XtqDSN3Q2bE5o",
  "key4": "6wp7RdpqiPWt4G8DVdfnRxo79xmZiMJCqnuZNjGd2ipmDSSaHMehiD892Fb3q3hwn5q98fB2riaXrGbJN88EYrb",
  "key5": "4gEthdF2vjdvapVP5UaocdB3EQmtFQbi9fBbhnHSm6YnDbX9tbrXzb8BT317aswYDk2r9jJaVqVNg4NqC7ctPGqR",
  "key6": "3Vwyp9rNBYHUFrkChYCadJGGcqGFsye3AwrvSCqsrGjtTXhD5SY97uQLsjuUK2Cr8fAoEDKPWEcEXftwgULM5ESQ",
  "key7": "1bdUHZkZKhtJoyFnBUUnusaCm1cTo3FmzPcydGRFahkboRzS5B3KASxuSgJFySG4PESMRsFXXjNvv8mPbrDWwDS",
  "key8": "52rvg2Pdg3QckrNTtVf5QKT45ki2DtZEtbjrXgWxiTkNiscny49kb6vgARCWNguxU4rP2MZz1xZ5tChndTAcC3ew",
  "key9": "4Y3XqKTY4tdVqxaCwD5dFWDStwYbVLbUXmUCPr8SE4aJ8hmvQjmPrXkXkjk8VkxkUez397ULi8ECvWR4ZNSsVKGB",
  "key10": "ahYMn3ch9tzLFJ7PUyCRWugkXiXeNKPpuckwsPN5MLZzWTgNaaMjxtXN3zbvjpUg532h6KqPRmdG1RPVZxeaTVw",
  "key11": "5g8nuY1LWeayLkkuLh5mpoRdje5WE74MdxHdwu2DxU3tffcUiXECvHRp4k98ANcHrZd7ArEgcNYuZ3NEvdz52Jvq",
  "key12": "4UQWgNuitFD5C9UuMvDtUHY8HwCZJzC1unxQq32CG1ZrqNnerUcJyV819vWG4BCFTJiMci3p7NpUkFBQtx7gfj8m",
  "key13": "2ZjV1EPiRK4bi2i78gfJ1oqBNhYgyydL7dMK3kYJs8LdyayVgLoEfGAT1kJdyX3URmMYQfNE1x2Nx4F8b54SRVj1",
  "key14": "4VvmKAXWFiE8fytcLZdkk9sNMowetbiEDaNqjTmhb7VJ6MouZzRzzgR5MW2Eh6QvXxuC6ZosEWJpog48cQRTTvjR",
  "key15": "TJztjd8YoRiRTAeCU41hTewsyc5gpZMqSk76yoTjLqJLcX4w5uJDUP1C1mvTczCKEHEB2YSaUXmrRCj5R5KHVmT",
  "key16": "2uCsbdb3b1wAZju9iEfdZXxEGwMftw1iW6cjxx7sN5s7LRb7CJMQQ2iPRW11YRut4KNJ4Azaf3RuDvmicVN3KjPa",
  "key17": "2un9ceh4Ea3eotUrbMHz26KHjtpw1Qgs7cbNtp36kRkhPo6RfJbskbYqJP9Lr5b8YcMomQExd8Wa1Q9z42RigmDk",
  "key18": "5CdYFzvFpYdXPvMATyPhDQ1i5R9XtSKicuWiudZTaDKUNNzaALewbHTHTH4A567gtWdvVukZrk9vvPA5ptrJPozt",
  "key19": "4uDa37Dx357p9nXW1goG9wcfWwjdv8qic1K55zDPcV3y2swdvZEDWaupQQ7FK7LkRjD4eV8bRKDjzf4R1VhnX2vS",
  "key20": "3XCUratwBrNj6i3sHjwTjXTY5zDAiwXnpARovdfCbjBjgHzJLVk3M1LgSVwZG6erCUj5DWW9B9QpdaaKjSkh34Ub",
  "key21": "5PXW8FDWjCNRxrP72M5sL3LRerGGtsQKCEFBYvAi2mBWG7qgakykeHr4MmoeBQytLBFdrMbUpoBtES4GKS9XMd1A",
  "key22": "Z4EYJ7PXKV1qB2pZ4RUEDtiD4R43pqZ2mwifrst5kHPvFmgGXWThLUKNBzajm6XHYSdGaxR8coXwhz5bFQC3SZF",
  "key23": "3WHaujSku9o1DnYaD56qreyYx1ipPiev7ARLURUtUaGGbN3uL7Lb4Pgz2cr6KMZ36NqtEMgA2Fi8XAraLEnVtXB8",
  "key24": "4VeHRJmRnGQbMFQMEZVp7m9eyySegx9snMfTTvuQ1idKfaD8JpyK5r9keMBw5AZh35wAgLt9MrSrNRoVETxBnd2C",
  "key25": "4X1cRVPAAWodveBB3Ljh2k6eWFvQNkkmbyjaoSpg8an3AA8k1YZrg3g8fwjiti9Srbk2MzGMpiXStGHqWViaSpM6",
  "key26": "55KfjJHZUKo4oZupJESTEsqgTNPJFsBPrqQ43ZsQMzNcsHC8DZ5Mtu1wffA74RCbZ5puvEip3RgoNmPKfRaczATy",
  "key27": "2abYSGjAMjJqGQykR9KUtSfPjMHd4Eii27yGxcZjPi9SRfV1yKAYtDj7n6o4eZwANwCwBNdTd6v1egHr6yDLrUFY",
  "key28": "3VxaKSYnHyFkTF2KtMTJUcpuNbuNP8k7qiHgqfpXSK8Ev5bm8dbYifsLAkGazUWB8Bcwg8aj99s542bUR9qAaKeR",
  "key29": "4y9rYhApjrsPQyxfSuHKCQ8MYqkmrFNc43wqGT9CuLrLgHLU4RsftEvMHzRVnfC4TCdYxPrthpt1QgsrUfYCFU7R",
  "key30": "TkQibGMjoQYbCFC7tx34bWH28FqJfRsFHdUx7becWe5zkVNnvqvPtFXHZJrqwLDsUHNxSsWEVp2nkqSFqyaBoTP",
  "key31": "4FQE5CyK9E7gRfkaqQTvDSmi7pRZwdgfHSQiLJV8GstAjPYiXRRcUFBmxwsMaQApVktSSWuzt7guWCQLfiL2WW53"
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

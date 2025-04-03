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
    "3MvJVPaFm6WusuC2NKyz811UWreB9Dw4wdPDQrEYv6CqbxiSGr6FnG2EWaGh2CHqHa5KPaybUJ22n371RswNXaRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Vo8qd9AoBpwXagkQcpo4Wy2NvisqfZ3nE7mSbQxx4p68xbeAJTbM4Nznj2oCJBbCnmnDwrJD1dvv4RAdCvnxfD",
  "key1": "3NVe3CL32qTxXZwBSo5CXRTs5eY5A58pxiJtuLoKFpeS69T7jcMuV52dnDssk7iuKc5jeZqL4HpuazgxTffyHhjK",
  "key2": "5CsYmtyoJrnwDb3o1evWwfXkKdqBUt3UKib5iWceKrWYHjJxKos9QLYGH9MVrsxbXDTF7TyQX6X9eYWdUnECaWwK",
  "key3": "2DCtGfqqugFYaWqQKtLZXhebQBdqD7ZjhLdAjwjRKcBuc96KssJPg9WncvCFMyHmrjCQTKmnxPWX6X9A2E3twaww",
  "key4": "3d8aR9JAp3GCYTT995LkEJ9uw3Fma3dWTRbeh1ajbYKDBDPwkcpmqzSYaGTW5xSPRFT8yX7tL7a6fFBR2V71NYUt",
  "key5": "6xeoJnSFUSUVesmzXJgppKPemMifd4Zx7WyDPuscMhbvCE6PCnPHD3YCjYbLPciNDvu8VRfCM5DHCziwvku64wM",
  "key6": "5rtxu6q6YRMosvd57ZEciJHbc5Zad6Lj7Lm5Q9o4ugEbEAzRqhZPJhS1hjDCVieLjS587tzrtbds1iVqdsbAXa94",
  "key7": "37Ubiisbj3gp1GeYmnwMRQ4BxNjTKTt1hxeUhcjoZp4u2LJDSJA8uvCuPBb5rsSBqQ2G8egq3sUXXiRkDu9WE1Qd",
  "key8": "3faUPqXrQ9P3TsbUxzvVB3qQTKqub5bAAG5mQsJGTFG65FsoSdvv85uFkmCNqNb7zFFMmaCsAD7AJJKhYL2Dgm1X",
  "key9": "iTaSbuCEJdwjrg2eMAackapJKjetjhGqWvdChvxYQ46JFxaGQcYmV6nF2cASc4yXXoZJPbY3wPRKTP2nhezqqPL",
  "key10": "wP7JwttLuWp5971SzoTFqvyWDGUR4YMJEPcoUwHvTptZbbUNDHu5VDiBbjLRjpNwmh5vXa3533VGg3z9VJabuAC",
  "key11": "3pAGXogUs5yma3tAUT4qqV8bvVAbuGEgQ4LsPhk9QDgR214qXf6WediCGG68KijqFZmm4AeCnu9jqAxPrC9iB5vZ",
  "key12": "29kmaaE23QtTBzNkeAXtWhNXaQtzc8Ard85f69HcCs6zcEbk24oCWoVrwxUnYMBeXN6nFsv2kxVnGnU3GrnLjJoS",
  "key13": "31MjdfUvma8Grx3gMFm85ZFzcZnDctJ2jyezVcGkHQ53J6Tm4sJKab5bEgyN1fAP8udtc9GMtp2E4Hk7dbKqzrXa",
  "key14": "3KDzkZbw51Jas4uGFPDiHFt4uHcC6nooVmqz7drRn3p4JNPwbQEQZoUXHBSDThsw9ZgwRrxDoEBVPR28ckDFa6jY",
  "key15": "55gzUmhXfvperiLNRgFgb9NFD3nCB4VMQNzaKaYQhWkith1jtua6WFsk2w7eouMx4hpsxj8VRq2Fc6mFJGygqXdw",
  "key16": "5GKwmKQccTFiPd2icnCctHbH8QFQ94tjLvWPxb42xorcndn4ZE3mbDc2tc2uvwgPmNse5yM53fUK949d7Y5cq8xd",
  "key17": "4ZPz8xwU11waDqjx5itnbPKfbE91LHPbqT9NJQZ9KHookH5yvNYkkE6cUbeh3w31TvH7Ncbf9DxXMXn2qWAcLXcd",
  "key18": "4ztJt1yUNKaVVt8mhAqoRYGAmHSRebvSR74RQrV27zw85vysqivzLNJC4SHLZ3rnC3NMEXxisCFK1YUMid8A9Gkm",
  "key19": "2FsR8fxGCCxaKSCf9WnuabVDuJauMD762rGFz48AQczuTngDYzfDRcHRmt6ZPbHeKELF1sMH9Jp7C8Qfqsx1VKL3",
  "key20": "4r3ctux9d1LN5co9DLFfBEM2NiELPsgLWJomAfsqzK5mVJb8gRknp9XnKHY9b88XL1zyMPx4Q4eywmqpTBjjhUas",
  "key21": "45efQrjWrhiUTC7xLoNw3KcHge7mosWMv5uqizNNMQjR7egsqpF5hhMm9jJnpoPowobmhKczVt7QvnUkYcnQbaeT",
  "key22": "BGnpqhbQx5q2mVBNK7gUncLgFL5JYXNMKYrNNR8GQyPejgcY8yD2Kw41rqSCJrscLCGbawk7JvftTMc9KizQXaE",
  "key23": "3HPyruZYLfpuRJjcsZZUAR5TgbrDddodLCdbfPwY6a19J38VBWNnKn6NtsDDgLq5vbdP6vbQVxuz25RJ3onNCcrG",
  "key24": "2iozxjmoZwXkPEPD6LHxiQPq3WFeMJnKr4mcEhgHMTx9FJzqBGsnc3udo6mVb81yiBbgGXp9J2GwRFBDu8zZys38"
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

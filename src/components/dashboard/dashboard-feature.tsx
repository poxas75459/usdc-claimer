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
    "BFpPDFULx7QGnNAmXHmiZKpAoxkNUzBTGJs5CrhJ4kvjjwkestZFzhvxdM2QWC1zJ2wRX51a5Xn7NFEwwM38f3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ua2XpgcvnpWYHXrTqQ7AFN1EJ3E1UwSttWyYZAYtQyTeSYauFP3yc2UhVMQ1jxi5pHgpTVXCizp7SwXKDbHPSh8",
  "key1": "4cr5VSXzgchyG4H8gty5m5Dp6uDCnvz2oBpAvfrD2JhSwTpJPWpreAVoNMLi6PpyMBDYsCUW58Q2Wi2z2yt53tik",
  "key2": "5Pgzwfdm87gcJ5aTzPRXLfAALjbvr3sRvmw2Uo8kyBiofhJEf2ZVWotYk33haTdskzpEwX64dNH2w8bwHxQy1Efp",
  "key3": "5qdm2E3SkxyM8em5RNcVmWC2pyfmYNaR8pqHDYNr7tXkew8VP8PtNMfpmuQyk4wMaHNDAXhsVJ9AizE8toBJbfor",
  "key4": "52FXMoZAu43Es8zVFVKihMgr3mxpsXvN4961TWvS18eymf2BwVFgZxN9NjJ8MgZZCfgK9RMzNzPhCFUUTRxYP4fh",
  "key5": "3oeu2Kgk6apqhk9eFxn1RDTdm4N2pbmzUSrECiXEn8tN9w6hzRT6Jt7AB62RiSHvhLFYwRHj76PGjoEMBWof9ar4",
  "key6": "4CJ1DFJecEcTqoPeEMxzXct8qcU5USYY5DGWVkimUFyhB1yAbY1xaAdPFn4uCPWAL4a5G6geehaQQFHKzFC9xfey",
  "key7": "Unb2YAdt8cGSHguk7kYoMMdwdbwPVtuJEDCqczJZBHLwcUyJU8CPA5SisFUPHq7pDoGtqoTy8gZt99mGQczJFyw",
  "key8": "4DLdwKjJyZXxaXx3MjpxdZitiZx1LRwPEGdsT93jssdQWmt5Es6RJoDE4rQ2ws8bTjvFxFBhwbJPYPBs7kLeYdBV",
  "key9": "4WSHzgRrdcQQBmufZgZwd8WnuAuW82ZG7d5FpsaNFYQB2ibjQGHPZm1B3GTfuhE6ydMo2k75Wi8ZeVHwqoJkNezb",
  "key10": "2Ktpq6MuwBrxZzoB59JTamdeemVJFn6b2hRA4hMqGfSpxiN2PkeUbwmpQgdt481mdndr6H3r9JzDbqZ8MHF4sgUT",
  "key11": "FQtZLYXNBg9Nh2cKCsxuuNxb45sRmLiieMJWkXGz57n2oGJqHVBgB1h1b46sJVcYiwashvcSpuFrdQX2wn2NL6d",
  "key12": "3L7t1pq8yywXp4MnjtvD6nn7t9sxQYNotpR8kYPj8cRrBmzs7sfBoVWifrH3jH48vAVWewNxj7V9gvyjvoNSrNrQ",
  "key13": "46dbRKUWcC9QRFRfMCg7EnjZj8FeK63rABpqkzkz9mD6gtXGGqsAtAMFCy1EbD2N6zeiSFsDLPHQDUKGFF6hVbQp",
  "key14": "394kJ2fo3P1BhNEhELcc85vjzenDvYEMAD97Q6iY6MN2QmBPXvR94XNKxENve7tLfzQCpbmfqrEthmhf3gTqGrzq",
  "key15": "2xpvUUWgDASTm53VKKwJQZXpSaV72N3oGxMhUk8NsSRTWF878WK4d3WyCJ3WWjTxU4s397mN4tBwmPEPQSbpZLqN",
  "key16": "9KJKjnEfHot2FgdkKu2bEa3YYdKjAg249hsDBpxbFSCQUhjZQm59YGw3pY1TkjkNFLYyjLgwrsPvTzpmiELqHqA",
  "key17": "4T9DUxwRRgry4e3kTbFd66BGsoWaJk9t4p3gRcBUjMm8fCEkLY8eZRMRVmdYPD42p6gEhTyhet5UCN8ah3oxB3P6",
  "key18": "21SAmkUtkWmsZxq1BxY6rUiBopdHYVcKjQN1XGHMUC5zMGWZ2Xi27dphidkRNN6RKsKQxFcmJTWK5qy6N1f3SPjQ",
  "key19": "Ygfe92kdmqocXgSnYiFHJWLc3Dhm2sLU4a7yzsD4jJbaM6SqqiQtUcmHHybmEwR5CcvvDw1tpGxDdxD1T2RicYL",
  "key20": "YnA2G34h5UW1aNJW5nJJwisssg4Nuide2Y1kz5T931po8QxNsjfJKx2jDkSUAV6VmdQ26pFGAzGuESdhejwcLdr",
  "key21": "5oQ6ADemTZ3rHf6boiPNkSfVv4Wb5yQQy2Th3riFUuE5sTQCeuxLB5x88cxnNnbKwtA7RZcvZcUNjfbz9BBfuKZt",
  "key22": "5e1Mm7c8ko2TQuvGCaH61AQgUNDMgBqcq3v6ac7iPw4LW5SxCb6VGzr7LRczMrfZhU6hV9AZwsMJJMP6WUk1oXBj",
  "key23": "5DJdSGvM9gruzjqgAuPRy6KP5wneuPdMsLBCMQ68NeHEiFB6pxdNieaRg4rBURHn247MMDoBn9y7F7L41sfFoQdA",
  "key24": "36tYQwELznNMMuKHYxqRLBiM1GSctYvpNp7Z3esd2QMBnnsmXQp9QquJQMVuuMzKHiJXq1UF47Kn6P5wMLwHTxhL",
  "key25": "3EowuK9Ph561kJb9Dy7i5yysiH1xAacqe19o5LR2wvhAMnAJGKcxc2bKDBTiSkbctFds31heHrihKyRNThWLkoVd",
  "key26": "3VDgGe57RE61rXN3iksMSxd33nhot2XigG5ViHq5r4MA8i3FsK6vk6wbBSE9AFdVftGLes4nJKecduuxAgWsTMg2",
  "key27": "2k4HjMHQw4ZkTxid6hYfgmwYjiqPedwoLj8QAnfxs1LuagKoFpEMpBxnybaJxAxjvR5Bs9CLufzmEkmJKQFH3QeT"
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

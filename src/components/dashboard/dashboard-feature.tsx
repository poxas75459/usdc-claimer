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
    "52r1u3ccQQ5yYubK7nrvYVUYa9ucUxTKGh4siRQVFZ7gFJgaPefHSduB4tprRX6WDQDS1DLMgT8X4ZApZJ3fq3mo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppaGNNgwem9yEggvHhbEnAdpwQQtKAs7mTDJ1DBGoXSfhHPfCYrxdSUFrrYUporvX3FjYLCYMeuLgSSou7ytx8s",
  "key1": "4BJfBJmSjWLmpWB3EFVajzhhXeyucrsgivnv7u1PA4JgwN4pJwfVmL1wuT1gXUFkjSUPHUTyzowPkcN9KQy2WzeV",
  "key2": "44rgzff5RHB66SeZS2gccWdZ3M95Qgo7E5P3fR8dy7ttHwtck35iq1uVqyqeEoVwtcnXCxCVWc5zVDwKzR2XuSYM",
  "key3": "4erphvYz2a8sytshGfQifFHUwPXqsvNoS5WyasVy3ZGD1UoeDjsoSD8Wp6annmeYgq9VJMKaDydeZL3yctmQahSf",
  "key4": "5yVPQhuji5W5xi9LNXRyXsHHJaRG4GeGQeSkJe5uuwBbSyNa5dehvFUAydbYznKG5Q667VNve3jsVRTZhcybFXPY",
  "key5": "a457aZWLVeBGoi4JVkZruJXMU4KYf1KkNZbPuc3Kz2gX1vncT4eV9Bm56ay2r5qhjqPPmkPkidPHDcojEn3muAp",
  "key6": "eYFUUFrCVHzokjmepZQYSb64XGoPKjJcPJn6JpxoyCEsyhEvEk2eWZEkd5ziDqtHNMPcVEHF4tpMt97jTuChDdh",
  "key7": "eNvLy86tn26o7xrWEgycmHQr9SRGuy634AhTuRJ7CMrgAEyDPmzFhLtVKMGHH4xPrioDgFga1r5Swv3wFQoKvmB",
  "key8": "2EyXtvjFoybc48yQquEP3o8mntT5CxVm8u6YUB7AepLfUVHq5fEuv7XeFqEFiTkrG9V9D8tgSoEVmrg2MEB6v5Ve",
  "key9": "4dgmFfwJxXcjgVH1eDhQytkEBrpFdSQJD6B2SUjYQVFEK1oggJb31MfVtmL1evTDoVxRMtLWnPirQBPDgz2NRzCe",
  "key10": "2FA5qj4ZYBRJ8ZeRQwNzbkx2QjmWK21zadQfY2ipecYQdpLWm8ybGrx38eddsrN5dX7mQYzMvy9XzDnVVPrjcDzB",
  "key11": "2a75arGqPiKAEbQ8JDPCZDEtmyemNETJ7mw8JkuKZQpA2a5Wa5DmTTWrF4tbx3Rq8JfupLfEVCfxpHgA457LWu8H",
  "key12": "3xLHSmao3Gb69VmVnGtKPH1ESY11A3hXbadEi8EeYKxPcGkYWvPCUj3azezuBGSwuGAdCr5N68XmcMDf79NKtUvP",
  "key13": "3cfBGttKihg97dCC5s2dpLik98kB7tdUTx3oJXckzqDpQnKJQf6YgtXfq1DsjidSi3XJ4chMQ5NEusmZagszRunn",
  "key14": "5sCoawdqrDn81Dd3wnL2rE4DWKXfVoKboGWuE8ecDbn1R9fdgSqWihKyGuvyyFf7XgxsxuueYNKSWaBiAcHm39Rc",
  "key15": "2AdPpt3oPqFM77z6887MvxUAtN6zJeegBFryQbk7EcnY4w47zc7sMnG2L6eAhVhpfD5BNGmhvCXZWJ14vpach5vA",
  "key16": "3fdPsxWqyVhAu7ASXCre1BNt1MVp9jVdh89ucSA5Nnf4HqjaGvjjV5MYB1q7pjULVdMKPA5QqNQKUUQrD5vrGps5",
  "key17": "2p3wg9GshxnofEbfyxvGfLc9gLHzELMG532CUtvXAZSXkVmZjuC411LYnadzen7DU56cBWecRNNgyAktrCdV6V53",
  "key18": "nBnHfVF89oVbTz9G8FCESiis2L65dqbqfWFyrVjFm9FriMq4KTMtXdqUVmVrov9xangYVNR8kReM36ZkvJ6Zv9L",
  "key19": "4Yitr4MHRfL1hQmBjuLtgoFiH6tMzrkWQCsV41mJUhfZbtUBwZ2yo1dKuYHkekixqYELsg9epS53i2pczCGAVGfS",
  "key20": "5DHMTPxFtatbYLEgd6VAKbTYeYNp1ZSFqk7CKqJUk8tL3ZDeZxrtYJ6x1o9WEYPkHAz9jHZTqCes61jotomarjZM",
  "key21": "5B9JtrYCKxsUTNLPyh7AHU6iKMaTLzaRnfjwEwDwssKkAbRTCBpp33tNcowbxqT5f6mRoV8Kpx3Zd6ty5Tind8nN",
  "key22": "3HqEUEwB8LcrvcGQRHVjhPntwnKwGsbTHpaCSMV47rJJf7DG4zbE9CVCS3boXqEmsuNCUniNeh6VRYhh6BihKM5B",
  "key23": "2RqWYTcQK9J3769fKvB5j7bJsZUP51crg9qBozmGUAKfaGoEKvNX3DKLc9hhVLnXgnZbKPp8JzbMWHAToFz3xNVk",
  "key24": "Fq5L3xsJTvi81HMMZr2qbEqXkb18mLD8o9jF5RvDvAfrtJgG2t7ssgkWCsR7E8WaTjpcFPeK2U4GjQwp4HwXFC1",
  "key25": "x1tR727rU5aYikHvm5m9Wgqy4Wgavi8zuU3we8gLDnms8ZUQy7gFqHwDeucs4t55G9jxrGztDXZFtQwY6CNRTeE",
  "key26": "4tZTri8Y21eY3jvWup9tgA7HPdKPY81HSio6ES5PR2BqjHEb6xbYcW7bQbkFpb3X3uX3EcfYov8g8uCW5XfKm2ka"
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

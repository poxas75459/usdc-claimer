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
    "2KTyhhbcNuE7iab4APZqEMJ9Bcw3xJfeVk7zb7fVyanj9vS74JLYYbSQprg4EBGUbcVYkzVkawMvHjFsCnAKPx7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61nvsC415mydNQypQyq7ma7Quaupywx9GsaJ8QSi9PmhwyykkgdrrviDn24F5KmKgXw9Dmj8qmEvP3qfQe49B8ke",
  "key1": "2kgV2fpQUW77RhRcM4u2RFY5C4jtWwYa9VS2TPfErYmg25ixce125Au2zSApaiB37wKQ4JDsdwXmpyWPE8vjzXzg",
  "key2": "4qtNoViBspPdqZFyn3y8H3FS28jxSrd7YuFNbpq4cNyhLUxdenq2NQoDStXN86BnpFbhesUi7WNzAeanCQ21TgFh",
  "key3": "3FcJDrVjCN1Wn8jHNemCfPGeDJtnbPTWbt8Btbxiv9PmFefGAKsaHN49UmW2hoMUmpfaW3LhfwU7Cffg5VQPJFeu",
  "key4": "1ANVrX44ZQhhMBParsWTpaYsD5jsyDvrpLMnKwrcpt2NTWPQbCJcoq6ZxwoZsBTeb5ziiDg91hYJcUFMhNxfJdo",
  "key5": "STZmpgBD25yPQvWVUuLfXvTD1WeLYHuKUr8kM9mRtfGMHuvnBQqUUfXfF8DtydCqwt86svkZKNABTbCbgJdUeK1",
  "key6": "5CNKF3SAK9qnxG8229Gxm8Ve2wztsbUVop1SpAYgvnBTehyMyGqa2m5mAvpdsdVGdyZk9F3SbqaHHovYy39yVqh7",
  "key7": "QB4jWHWUdeM9x3TBF6kMhXoY5XcahDMpD1i67SBkEPCsearu3e6PDYiikjw9QFpAA1tMb5Et8M59DmZSciR9MQd",
  "key8": "46sqBLfMJrn59WFzTfikX5WbKZagx84REKNUPnkzQCjmHkWYSTzZEL4yB3krMz4FLtgaHVJn1KagbQsAs6zUCwp1",
  "key9": "WhV9cLSKo8dLagVX5B8RxUctoTAsgcBAVCfTpbNvoTXdJMs7zuA2DYeSzAP9yFBCAFHHFtuV5TGhfbrpbF9XBGM",
  "key10": "4AyhhhAGEdCb5fGbmpFic7BFNbFZxxRFn8dPVnWNCp8sDJzC88vaBmSJZtcVRHCXYMiXwWFDDkge3b29DzC7rd7R",
  "key11": "63aE48evTPeX3jMmnM5CnDyeGBsLCinhviCoRnkAxCgj9qD5rJ4xgoJLazLHkx8RSvSQfAEyb6hAbbwvzVFSHsQs",
  "key12": "4FPWHyennt9Hqpi6QYaRxX5ftpJxub8QnExLfCStzykHNT66J8bFWnhLbMBvDVQHsfpndXsh6DXovtCAJcyURpnZ",
  "key13": "VNnirakQcNvZiUwUTyV5Azmxp2VapwTe64Ho4x2Ud1EpzhSiPPMFRHR2rSy4rRMwjLWieAZZ6ioFdywegk6RoDv",
  "key14": "2iwub4cdycveoEAYTLW1ddBprvREnrNsfuPuhJa7LFDSKNX68SaUMMB7kLSUmRLHWbhooeHTv4FhJc3c3vm4uEL6",
  "key15": "iy4aYqcq2DRFfUWtc5vDwT9zciTUo5JTY8hBYjn35rM4gdmMVmJS1agKpJuNfFygGEBDX76cr4vyh8hAtUayq9H",
  "key16": "Tkba4YtJendqttQq6f4vXxerVryiCf1gwc76nDY2NXUdXsymsWUgfgar2samg3XMLig9HhEamhyb9Rej2ZRYnCe",
  "key17": "3AsFhaU2e4UkAKyvNPrJerTzd3nVvFrVvSXx36tsytFdSNGHZQDEVEoHXs5B4qPwFg9fHCM3Ze7KDtBSwEuV592N",
  "key18": "sq9rQBegyEhzGxbAWzRbeM4n3WMwGwL8npMNsJ2faKbrqYPqQpyBsZGUoXm2DYGC4vv3vgek9zimFPU6bftQktW",
  "key19": "YVHFi2fPLfrhFw75yArscRvC5eH23s8Vmie7Dp7iT6WCbVyQqCPQfPn8EQuHAu9PxA9UmWJ32RrMTupF4X3k3Wk",
  "key20": "4nC4JT6bjoje7J59RavLkSaQKeA7V4A5zCuTpwD6JNUaHBHDn5X3tXovfKUFE2YefQqF7GhaW4B6byYPDWFeJhgX",
  "key21": "4Ep9xL9Wu8J38DUKGkyD5JwsgmGv1BRCHg6iC6acs79jgHPYKWox4gMK5vLidTjdJGQcnuTFF1MKvRk3PqFf75An",
  "key22": "2eLYAah9VG8VMS17p4AokFApM5mc76aF8AgmHevuhEbXf66HuRKx4uexDXKj1E6RKCsDyHfxQZ1D7Ytx6MbF599t",
  "key23": "5XQz9Vm9DN1nACpqLR99DNVMuSqjaxoUaAkDXxy5MfBNTi15UfJGaTmKuAyZESe3gu5haisSThrzsawRUVE5pVyG",
  "key24": "3cPiz6CQeVE1taHu9CfRxnivXebfLihEDFH5MfQrFLuTRH6Btaihn4E9L6zvHHpDG6XCDa7iCHh8NgsxoKXpLUPi",
  "key25": "2eUGrgZuMnZqqDoETw7ZtxmVayo3td5HALcyS6C9ZYazn7PcpKZFhuaAEu3yenUWc8BEyYH9z9cfmNxHYPkDxBJo",
  "key26": "3WzrALUno5KUixsaZxV3nCrbw9GBpo9Nn4DRV7a3eCMg7jwra2qksjPKWC9e6vD7hDRZKnfMqYWtb9EB24qzKMta",
  "key27": "4pFbG4PCDdNwKV6SmLZmYefVUxTwEEifJjz1VbwbHTVSoctk6nvB8hHGU7FJsf6Tt5Q2nA2DyM79REF3Qugpi4cZ",
  "key28": "PRwZBHUb62UpwsvzyPCWqWgfHjQAbEY5RCjePY3UndYzJsELCVGGjeQ8ugzqvNc4ymeNCEK46pG35KE7DbX77f7",
  "key29": "3cWH4Sbh97hUz9tUvvf5a9vKXWwsmJrAw3oRCbbDbEV7qwdATfL4awb97WEKmFEECp8hoNwzJzcbJNpmoc7cp7rG"
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

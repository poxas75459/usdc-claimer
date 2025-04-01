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
    "3vgMAuyZAxsjaBGNdNHkSWvG8dM7cViPjdwQRc8PZHnpXqLG3sVzy2k98aXichpv4tc9Sz7xWvAacsbkj6VWxWGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Br9y4wJYbHz43djY77zXZAbxXm4ePdZySAUTbShMcAj7aBYRgxAtmBQ3ZmBmjxhaNT1iFGzfcrXMvJ9Qvj9xUKY",
  "key1": "KbtcFPipsiRNayYWarpaEFFRfJXkrCGixzJVe13vGKaHEMXsTUyzpAdCriPh7HDyxZFofx8HiZBWRP1RRjrYWPb",
  "key2": "3tdqVmR5AVf9mhrarMpKvsyRGJTAsppVQBp8Nptb2bBKL9wipw2xLZYTRtP4wXsPEBoAhAJTYGtQqtcQ2c8reqvr",
  "key3": "2yaZzWZL9xXmc1P2n2CZQuux3MB8fFphwFGTYz28coNvsEdm3sKykn7uNXu47u8QBTnmUs1K4mnNJrBLF9fW1TDm",
  "key4": "2jcV9LgRD2ynGJ87wC4A8fpx9eWBsEctAX7QxNswDwBCT4RVdUceRmTfX5p5ZdSU7qXfTH25Qx1Mw8G5KAqsEutp",
  "key5": "4MT8kYbcth4d1fBHpqeoJw7zZze7poYXHf5AzjvkTErzYqFFwDmc1ntGWDymM5NLWrAXV5J4Lm2iCDxeyWK9KNFs",
  "key6": "4S8UiDZGWcWfuvHViVPJ3NMv44ctpia84S1r9VCEf78YEZ3bMHJq46waaYyqzDqPem4eKCXQ79KfCnMvhaG8UCQX",
  "key7": "4MKQyb1qYA1MeveXczJzqrzViGSmX3LgV77roxTmp66r6nDUwhEA8bTc3xLN5smcfE7xtfa8B2US6G2UVg2Bto2k",
  "key8": "2ExjFVyQHgF7Z4iEPJjrqCgsMEkxkiQCMNPLibLcCYpnoaxYoxi5RgzCrH8iiQqXAFb7SLboLfPNS5rSNyHPCkbW",
  "key9": "2UhTQBYTByKnT427CFvgMP6i2tYXdQSFi3S7NxkgHovtJpXRnxbNjRKFcxz5jsSS9QVRzyGf3DbMSniFNv7ZyU46",
  "key10": "4nMxV9ubMawt55L7eL9FT4HHZFYvfkS3RtVCHRNybs7vrScEBiAVuNgSFRefALpUYWTySHbsgpt9ZzmjditLV7Kc",
  "key11": "562C9EKeWpF51YH97PLhXV3miZd7ScMW2DFZi4ER53etAFm68GBn1WAHN9ndVxKD9n8NB89YRKjexEq4Fb9vaRKX",
  "key12": "4WDe1xN3a9JwQWTAomU7eRgL1E5DLJTg7xMFaJabbxeDr4x64Zrn9uKpBGZA2tQEjzjskP7wG1V6QCGs6nBxTPyJ",
  "key13": "3SZR5A9tjHkdoU4oKLoEgtMfPF9c6ApAze3vfUrvvAJaH5f6cC1hNHrUoGd6ezquWik6sxkwa9KNyfCsUgH4nudB",
  "key14": "2gFZcjgHcKTJZT3Wm8rd5g6JVYWP4FDGrbufvCpNXM1fJr3tyuwREGRQs1USGuvVStPpJGy4ZSFwKTS3zrv4SA4t",
  "key15": "3AxbJpGxGpKhdiGjCegUsjhbrEf9nsxPpvWBWDJE13MqPmYSqDGh1dmPJQK6NFw6Ja9HXW2DNEWjVMvpYjs7mpiH",
  "key16": "YWyL6pQV3QFx3YHamZzRqkxPFT4XUemj7intVvmT31VwZq9jrAn388ALAYpo9ruGHxZmAwKtVVtJFS6vazG6vWp",
  "key17": "4r3JGRUJvy1FUTuqbWTuGJXG3ddMLA652Lvo1mTv4b4WfN5zdGhNmh3ocV5ocQtJPaYBvHmdMLMujheXtZJCHKnp",
  "key18": "3dYESNaAt5VmKw9F2tUijeM4HLCvqVx2GKMTeLzDKKEXVmw3NMXg21AD9SeoQEAGd6ha3Jiet1MWxBvcRRUTfTag",
  "key19": "2SC4pgpe5FwAULYkjXMXfkjTFnaT2epBH2dTN5U8Ub7XJXF253GbgzdsM4RBvGnDeWKCAHd1L3LpAuB5zBodcEuv",
  "key20": "1ddju3UBJw5Wd5ibX2RKSJN27UCJt3CJ4qHyiDVwEqaYhMDA8CPuyQfDoRWAX2cNVPLZZXMWY6ae7GVyxpZP6Gh",
  "key21": "2agig6krYznQzAyppj5v1uvymGLLkhJrgDa7Li7vtMjQ8GKagHcDeML1K8FQ9qAFiQhFUPKnevcAoBzBhZtrZ32g",
  "key22": "36jVMPCs1WD7VXeWoD8QzNjS6exsVj3WmLv49ebhYTPBSLTbNd6t9jpBBU7HFQkdCiAJb9K7HDo6VmfewBe3PvPC",
  "key23": "3Va2t9cmZM4W2aHC9dhYxChCxS4DgEBNVhkqxmaToqbDM2cxFVmxNeUgCqw4d9fvnHoJ68ZZUHKoYdGPmHcecWpX",
  "key24": "3s8ubJtQfJkYutg9fPFeKibmcbtpjQcimHz5pyPvHtHGfSwG9Zx2cXG8iE87kB3imWEenndz2NPrubu3oW7pDRAJ",
  "key25": "61eCvyEkYxYkjbVEK2v2DH9P52rKCwhXg2CRkBfgbWDzfGpLjMJD6ynPf6kBPVbneWnteyGt3CUBsEjnZhsuv1yK",
  "key26": "PDSsUEcMnojZj1yb5xMPBAD7ZUR1nLu5wHBcVdU1fND3Cdk2hvBgra6yU2whT3ae9Gau2vbA7RprHjSXkJxgV1W",
  "key27": "3yAPnhM9sFrgxJsjLDXNjvjMjJZwZAi424wLBQGudLYzDicwgEUAeAVYCjrjvEeXu5QzhxFcTeqrK26fW5iu8ikD"
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

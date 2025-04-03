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
    "41qh8asRitV2QrVfRGx14MxS3nTuGuveYDXiDKhgYVaJMMcBLf6GafYnb3y3bGuCkH67ejutEt9muYUT6jm8JHro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lh7pGHrP1THvTEnjoNn5b7311i5VEp742sueCJTtwUD49cRdUMTUxGd7r5PkDfQFwftU1sDhpgrMs46Yt3Kd4Wb",
  "key1": "4jimDRNxmHToHCzThFP1zuDc6fs1UxR5odVZ7ksRd9CNPVvre3jgc9yppDPdVCr4WEEoTVPehoLjxKSt8qTYiGez",
  "key2": "8iY4G6DFkND1tcmpDo9WoznLdFN3GspNvbaJPsHYAuFiuXnEqpXbkaC2purwCb4VJ7ZbJhoTxic1oGfgMibdczS",
  "key3": "5SKpTRMZDQHKxVb6AmFw8JHnsvbUzSZEAEbKnAjimKDtviWhzAnUSv4TwrHKpw8EVdP6PSPiZm7BS8NztNS7GCfa",
  "key4": "4VGyui5Y3uXBvsvDhwBP56o4LWZ2WzRCStkjLyPptMJKXPdkaJ6FQS5PDDWV8SdWohgtjK5EHwBjiNJskS3TDv9",
  "key5": "3yTqz9Pcqoq8zwXMf6hoADyiyDeDKa1r313DZASZxQQ3eTP9U2DSC9zUAD3w8EEtVadNc2TTRTVe1qTpg9U5BUpU",
  "key6": "3g5obnT5VaV1QWtnQL4acYmA1fgViMge2fRkz2eafwKK2W5Vbp8WxvpmU5neToECPmqHaW85xbft8YZJ6dKfW5rb",
  "key7": "4rb5R1Lw53ksGVxtnALMysPZMvSVdjpraAfW2orZ67z2nXUGB8wi748ZTL3QBHz4xK7AmdharNYBJkfxhefuCkiE",
  "key8": "2qs1v1Z7iKZT2YVme7vB2E3EcyzZvGxsBzFxQKtAReBgW7kb1Jfxa6pJLRChoGH1tZxfNJzvnMfUpYhQ9yeyeDKK",
  "key9": "4kArEtCvkNK9a9Rpvkg4reuJJr6Sr1bMrcRAeqRSJa7BY3hAikGeTqf9S9wDSRuvxJzsWVLfgaG8PDcccwwRSeWT",
  "key10": "3x3nqHYkQpqcZwkbXXztnZPSNkr9SZFac6EdXa85fYX185N7tdgLrcUDQcb833aXMXqahborBVUSX5YwXWZnY6LX",
  "key11": "2UGijDBWWjcEhZwMqUMKdQW4MQczMDqMYPZSi1WtoxCcZkva2coWQdvqLwTZCPh2nyifgXjMG61XyrVUs8FwwU8h",
  "key12": "4LYYuJFYhYbbYBHduU6tPQgUBbUQg6wc756UAXGicotPLH7fqWpirVPjXJcKG9cz6bvUFY163KWjUg3RHFEyQKWd",
  "key13": "49bBZZd6jk7HG1JewQrj4giD5EwaEwe1DZWYqRysFtZD4MLun3HjNwENbtHzjWQ5hMLqCXTrwMiR54fEBiymVtkj",
  "key14": "2yHidgeYtGNZhtD32Qr8gHtab8n1f3ufJXvGtHoFgWyqP4dTnK9733HAsY2gu9v6QBfjxWRyRMtxVkPqFRYh28YA",
  "key15": "uk2y259xDoB5rTSawmuFtEk58NRUCRjc3ABW8iNTSnE2kM7DFrWenj9byN1zfchxoAu4sFGVNUzDY7MksTMrcYY",
  "key16": "3w5xBSGdkmTuEmey1gM6gt4qa8WeuvQpAmoJGCeoKM2Ks12UwkhCSxGWBFitWzPptnwQvRUUFdm6pkBxYS97S83Z",
  "key17": "3vxske6RgveWRq7CvuEaBkcMZYBwLwffUBy9BdzKyihyAsg8jwfXi8SbuddsT8iWa9mUr3dooQhCYcBbLfnrVYWu",
  "key18": "2XM9sYWhu4a6Grm4SwhGDMvvTF7MWUXRk3kSHRzs3gA3ZScbcyUXXSGuGqd1sCRoW7ypzXnzQGAJMYZ9jvf3nAvW",
  "key19": "2kLpXymGLK6DywUEA4r3YJmAayQWGzbXD6DMuM7v4JpAVeawrGnmouLrdNZbduTCqSA1cuKQPm2LQMuPgHX2cS7H",
  "key20": "es2PQkZLpoEVFhZ81aANiWm3D6xwmTJosRhiq1wn4A9dGqfc32SBRSws2VuiTsrXwjzGkFvY1vvd5gLUvrJds9d",
  "key21": "vdeDzeFJrs6yfg1EcSB3xSy3Tmx4TSEkowf8SbLf4hvwEXnN12Mwh9NZh2uVv5gFuBPhpuYCmejo8A7mKydZugF",
  "key22": "5p98TJ8j6sEvKoizWBkUGf3728ZJ4hKphZQLZH7z5sfaEagdipJ79AwJuwHa97FC4rVUY5SScXE2tNx1QrXfW2K",
  "key23": "3scVTKRjaiDapgmY4M8Y5cWTRMUuJXfRqtysU3d1GWT3X5fxKADaE9BRD5ApYZnzh8i9AMkC7ahJYAugMPPNDxs7",
  "key24": "66yHmtVATKV9QxRifM5uz3NkKdxi8CZc54XAtSf8ZqUpU5iJ7qnuarpcKijyTfCBybWVUNAmtCPbJk1ZEaSAxED8",
  "key25": "33AQso1gUYT9cG1U9Pxrr2okRVUgWohgrk8nx28yBBDHBPob3o2xJKCN6ahN1VzedmABWbqZhUc1GEZg7DXvoKwB",
  "key26": "33BgVSpWYEyc4kanvbY5rHRvyNDxpQ7FKWVoGfgXCYNZbN88oRN1YBjmPZLA6ywij5fiE8PakARTaUjekDTvN5oK",
  "key27": "otT8Gpk5GkNU1e5Rj9CHDo9iZNowNR1MMnxSg1cK7SZs7K2JWns6t5i3x61Uc4JCFCFkLRwF5GLb1vLQm8U3Mbe",
  "key28": "48wvq1KpjprYEUoWYbVmeLjpZM8cv8c2zTbyf4yxFMdLdZw7Nb4inyGmDh5bG7ZK4yYZTJFQApXSwrYtz7cZLbyi",
  "key29": "bznw2F2CzAwJVFvaFWFfBYyCUt414BSz4xMR2rQvhmdCUGVLkGWrepuWgf9d76wQVvqAUcAVaRfD8E6mS8b1K41",
  "key30": "48ytVN19keVKTy2PxCZL4zxbEsztuJVmsDmG5ggzPGMMrVQQ23cuKtoShf6iF5zdKWbMJLkWewSsQQEjosUDRkGb",
  "key31": "3eYRA96on3HVvRsfqrj7t7DNwDw14ZH2LHCnVvxN2JUjfy4zWf9HQrTWTsRNxbX6TEiojtKDuoDuekgH71TxiFyE",
  "key32": "5oC2ua4BtjFd8UAwgPPnGbGXkrzzMzJDvrDN1tKq6FQXFWca7DGjQ1dLpW1Dbjt4dQVNFRByLvUZcPfgq2R6jAr4",
  "key33": "4bhYSjx94K2Nf5yBSdFt897jk1zXtbzsd9UDWZFdqK3JMd7nTqXDCRET8VNQ3WPc8C1m2sUREKWKNFan38vhEitX",
  "key34": "5qN3P2kCrRbxfFrFdycfzLCW6unjDEu223B4u7cs2quodQDRVhTg2tdBbLbt5GUuCZfMubB8yyBWgp4NAEkZYUS7"
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

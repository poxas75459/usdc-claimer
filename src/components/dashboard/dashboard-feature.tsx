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
    "khk9u4UgYhY7gVYnoS4PB3eNxvGQbwzpJgspC9fjPMeRzHNMmZSYc8MpbPEsVgrV8nnBSfr8Mzsy45QiANZNaC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EXsaCNV3jp7YtEKRrbvHtUM8zMv3GQC2V3KZwXDfZGWusFjxAR6H2AE99F2nzrhZx9EQpPGqPGo46X2s3vrY6u8",
  "key1": "34sYGeCxY1taDnpqitAZXBvdb8QrRYT7rRJQsquBQck5FdFfMcMEu7jtz4WgMzpS9cwpyV55p3D2S9jFJNS5EUcb",
  "key2": "2c8KEbbsPzgJnctJHDkWhFazLBGDZdLorp2iUSoxCimj8R1nPKR25eKdXP93b2Kkqm8gC3wgcFJsq1ps15R4S8Yh",
  "key3": "vjQX9mXFBYeqrHkJxpj2dKsgLkAmwKz53v1QSKbh6UB37CDyX15P8QY5smeP8PFzQ73cB2hYjYtknbVaCCjiwqS",
  "key4": "61tvttti7TGk9dX5M7kbJWPyUDd5fZGjLvQh2g8YerZEHMxuaYqvGEbgdrWNptRjoxfAmx1CkNh3P3riD4NaG2CW",
  "key5": "s5VZ6v8gHTzZA31TFiUJj9NENckSY31gEGH2NwvAptLrY6Sff5UnNosnKKNYygD3rfM1paXBHD9u62izbNaCvsY",
  "key6": "3BCAGc4tuKy5ZLKGAsXb5YDueqsdEULYXvUgudjzixg8Pp1zhB1dCKeLKt3wHYExe7rfHcfYe2YepWLqaDKZCAR2",
  "key7": "5YiPPHGHFL313UCPjFaRBP8XcTQwtjWhMkYGEjH2Tuir77ouNDA4zETM6DfQZoeUV3nR3ZiLUbJh1tvTyvdB3Xcm",
  "key8": "5NiC3uqV7wHF85LyH74ZytbieBCRF6wVdwDuriuhiftqfpVRevJHYBtbXCWe7YzUea9bKFN84LGxKGuis62vYpy1",
  "key9": "2kHZ1irmvxKNSQM29WgrLwbag7goRxT5jevu4rhAWGypT7mxrfNhJW1ksdPT1jVwg3hKt8Tco7E73nY3bBqCN5pw",
  "key10": "wZm1e49gJmjdq1bYbeXmczd3bXY7rz53EPieXgFNFYHWokwsMUGMDQWYPqqqk4C54saPEScqXP3S8xeZsWR82H4",
  "key11": "9aQKsvV1v3JnLvY92cJJWLjHGkZK1HHWcZF2pnhhQ9LEwAbWGGW8wyCNPrfkzHwpWoz8rr3S56DMhbXY64oboiW",
  "key12": "3bf7igf5qJq3kRcF6pbKt79Mc4ofNEcMqzMj6jUz7grtAmUVgCxASvWgY2ExthAnCS5VG1ZFF7gyr3UDRLjockGh",
  "key13": "9CtmJXs48xJ6rG3gcLYMqHgLgYYCE4cHkzZR1zjt37aarD8cxFuJFh5SJdiKDD1uD8xonbizgLeQj7jY726qRDh",
  "key14": "66ZTcZhCCGfQkjDwgKssGPvnxkueyGN9VAT4vbgjon6vc8aQNi7h7PgcBcZeSf3fDdmarg8seGfjMEE6vZwEH6Tk",
  "key15": "3EBVLAwT21UweFetpobkhktnrzerSxdbm3Yju6NfnmPKM16c33J7khASnbZRxtQCRQryxpywd3WWyQroMrMcDtwJ",
  "key16": "38WaNw6Np7CKHjL8Xi7aR4KetVZXD78fvehHTAu3BBCw9gTozsqHiQ8GRxHLi9PkTR1UFNfpRazaS4T5uB5QSLro",
  "key17": "4wjPGY57DT3Li9JJh7DPpYAGJFRhHnLmAFQVjHKY7Ub4dj61Fnz2MkWPdMQzsdeZsdWDWEqAk46nvKi5beAvR5Mz",
  "key18": "NTxUx82jVn8ReuJhncCrg3nFzhPHC39gXiisn7xojxKYBg9ucFFYdEh26LFY9XSAvcpF8W7nUnM1STpTUyduMsg",
  "key19": "2E41gwh63EHZfoowhFeRnydqUPeEEfuXS7ZzWi49G7f8WemGEEc2wM1SPGvAfM7vt9g9rzZ3u7SGYQDeknqHN3tW",
  "key20": "VSqYRGUrJAfD3ftbTpAvUFAbrkT1sG3soKAzZ8uponQsF5x1PPXBx1KrgYaESw9Qomdvuqhv4TZmRYzh99CAkNZ",
  "key21": "4Wk4V2T9128iXmsZNbXaY8rLPWkaDf6rJzj4XY3wHdbURifPZtBHzzE8imRbBcH4KthkRh2FBw3YdD6qgVvVPE2Z",
  "key22": "3kmotAW3QdGZB2NmjLCPfgj7B2wMFZVELiHtdXKRxqGhqdsPFQBdJMv5UbZGYDwCixRmtrpcCNP4YAGaNFZYQbyS",
  "key23": "2c335rnXyhfjKWR5zipHadVTy4Rr8MByDTt3vZE7UE5T9cBzpitZi9Z4khg5jMc3ikYQysk8YaGzkNLwyvRfzqXa",
  "key24": "qKbWUKjP1VjyyNVcqVj2AsSkyLX762p1i199N3bV5cHBvpbCA2cwmBBnMKZz2VWJpjwYX1Fp5XTFnrn7LoKJJLS",
  "key25": "5ZNo1rKjafDghaXt93tJiCH9tDyrWVPDyNGX4kZSND44MRcSygT5n1bSjiU6mrMeNPV2UN4Hd5aTDtijCkAdK9Xv"
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

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
    "21kjbSmFJYMGLdGh5ZbBaA4yp1WZdK8XgQUekgiLyhPcP95NkfaBMriwQC1wv5gYRrVxaW3KqC9eW9vPAjFdrQBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZEvaoGN6vapyLFjZLz68uG76EF51E1o3GJJvWcsE9kgtAZPhVb579mEGtqmmKZaqoCznKAJ1RhnRMvLWqiNJWyb",
  "key1": "4c1Vc4FBfM7JBAFi1VYoMx4MUvntifjzeHLvbdkoxBF434B5qoph7PV91LGWFuiqB757dNfdYkfpjsGA8e5AiAFr",
  "key2": "4BmNgscBhfMosXDL3RHWiApJJ4ZjEPS9tfBxZEx5cyoHdS35bfGiBLFjefXBGxZapyQYMeKnLQyEVuneuNsq8yzX",
  "key3": "86VCdG937hScmTNsJQQSgayYAst5zeSxMJsTsa8tfcYgNMGFTKU3QXE3ppRGSXPcYFY6veVYovwVy4TmhtYDwAR",
  "key4": "38wkKBJrnDnm8Md4mgCbCqsqTMAhT9iprRAE3hKVRQj5Q5hJwdG16m1zJ9bMcYg4tEmx9dWWLh2UNVTYi2T4rWjz",
  "key5": "5GoqjzTX1RjTyWGDGh8BxCQWra657Es3gdYPtZ9YEdjTfND9BybNhfDv4Y9DYBXA1VbNUds6YJPuLhzmTXM4rGy",
  "key6": "xsjCFfDMUX5Q4L69iYmjK3iS1C2uHkEUuSARA3Won56GyFnW76fH8Ed73HW3ZiVHrT3zsAuE9LZJuVbHPVWBBHJ",
  "key7": "3XNtdbHMxBU2gim52swawyp9e7YuvhRnt4LwG3CEGrDzWNuTSiCs3srSLunGqRr62dgb5SmCZxCrGuVrihub3yb8",
  "key8": "2jXYqwUXh8Z5H4qgekZPTPgQKnpBSnfK7zbgESshH11kcxEfE6gdcMZJGybxr8vaNPhXTTatzMUfsVNgevH1Js6u",
  "key9": "kGptvQDJdvoN35GJAyv3jVSZbqcSgZvWhawLCZgrs6Lapz9uEcofxnV8LwshRQCfyDtNqtr7QaMPKshBuj2iW4w",
  "key10": "gKQouP2TGMBEpczdqhXjh7EUTKDssLEeXddzwRmwCuRDndZENmMJyRotwNZGasphHCLAYxkANFNhnVD7JSGWW1W",
  "key11": "3siVce5NqgYncPKrLZdDAhwLg32RJ4NmRHg4bZuDUKAR6Mxdniw8jcWyei9hSL266XM9nbRruEL9JMXn61v1VR4f",
  "key12": "53sJjE4qGFMBG7y6RfEa5GvK5P9DVDe4eo62nKTT6mr57fTAw9RHfXs5nQktK8xeusefYkb1AadXsRLVuxyfUwJn",
  "key13": "3pQuxvPrUVH3XwQ9C3EPPimaKszmpsTUnedVRn8Yi5NBHT5osNwTdfpBthuXRa9BekbxBu4b6qkUnZFzH1BznEC3",
  "key14": "4Ef8GExczDdDpBjYqrmp8oz4YfnKeZFNTQxJdoc53xJigogSGFMm7dcLaLttvLr3suxnK65V4u3Q1e7VSTKBCGar",
  "key15": "3foUNPdPSRGDAucTv5sxZYQxa85UyWzBqKkuHkz7GsqJrAYHxfb6xU5MeZijqSNGKL62bWHDw5ZKzcjxU1PkTBHd",
  "key16": "5igrYMuggYrsz8iJdcAUEWJb42xEbUh9FLAreEdLoUkQuHb8b3GXEuRmTuADixSJYzFeWfANa2PVuAq2WohwT1ac",
  "key17": "4Ua8TZNpE63BbJS6woqMkkCE4MABULCaKw1EW4rWoFND9pz7iNQ76jzjmfFKtytWyLwc8ejUVjMT7qcdynCwbz5j",
  "key18": "5YWvCNcBMSY9jHJX2X5xRjpdwdYZet7LfjjiyicJWeMjGGaM4xhpkiEhsjRgKCDTRSNL4gayhCLszTGjEnkaoAXy",
  "key19": "5CsJ1faWWufNiUa1onAaoXXkN48x4J3i4ZDKABW4jXYPKXAzRfzLcFy6pu6tqU4uTbGpjDss9s54NAmbGzA1tM8U",
  "key20": "2mnnQp1iFQHan7ibiPDFspz9VJzVFY4HJmFwCqZZD1GmhvKhH9dWmuX3EAYcfRKwSQayvEyNNzqgiREnr8NpJrax",
  "key21": "ZcPCC37hKRRidJxQiY9T66mCd1oaydEiV2m7euanG269uhsnqfkdYqLiGEA4bcpUKZpcRC1m4k3vbaBPKhiWwpL",
  "key22": "5PDELATkDBxjKZDrWGXwqpUh4ah5GHKYagRqCZB2LjL7L5PAWTD6Pdvm7t4t2VdYm6fm7qqK4KWPJ8Fk7EthxxRk",
  "key23": "3ZTgg8yDxnv6a5wyYgCdASjerTB8bYqxkgNYpC7zBXoBAzGbkaEjgBrcVPzxM4yQkBmLyRsdWegWJ3AWf6MiYW9R",
  "key24": "oJQVETCR9hQYHV9dHdiAqgQVsbtt5sW3R3y7RAA81QD6b4FWPGZJStmZts4RNmaKKoXphvNYtFeVFZCJGAC9GRN",
  "key25": "nzWJ2pW6Uijc5JXcVo4vwiVhkdwGyVHMdY2bwJA75QC9Rq4k8TwmNty2zVPKVC6nEjXSeKgXCkAiqe5ukmgVjTQ",
  "key26": "3WSfWSCTgFycfiv9uQh5di6tjc8GCdH5Qd5qWqLMfY2qoc934ZTQwRRbo2YyVMqRkad3bE3uLQGeSWeddDRdJWVe",
  "key27": "3xjo3zi3J8sVYsQAFDbZroxsPqtAYk3cq8j8qFu8xyqbHtLcBpsq8w6izsLhHUQXeFz6tLKGCjEMnQc7SrU8AxaS",
  "key28": "5hQhbVzQFzTbUAgKdfvoPPGDF4hcu9nc28LDSVVYc2k7pKSuJCebtatQkC3t2DwZwYJRbD2M3yUZ6vXuaakz2tPJ",
  "key29": "3Dp4kEEUgUmA7b5ebtAFA3Wp7Np27L5B95jTSQtHWMe3ShSe1RHo7ieRenAmNbJ15ztjwDd7XiYVbHEPYV2NezCZ",
  "key30": "2HczzJBrKZmqg6FRQhD8e9yMVMKQCCKc1ZZTCdGd7A4WrdvuT8oBZpD5DPaqd4quVv34QTjdbLZi1zssdk2sFqmA",
  "key31": "3heN8mAZpD8BPkwCUp9LBXStPceKMNcoTsnTyVc2LHyKkgFib2CHcnZaBptF6sJa8EkPQ5viV9Y9mgTN2G38XmpG",
  "key32": "5zEadBhzUUCXf7QLVF3dzMo2PS5nwwMbyEK9nprhqecauLybHmnyDWBXK1sMLqV7CEa2Kr6nbHuA8Qbt86QkRTPW",
  "key33": "5EkuLZCroaXBixK1DhUQRibUKbkpF4hjgjfav57mXFXt3a8cfXJYNS6uGqU36prVUg3SwmaLJzPcDZStANq9XnHJ"
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

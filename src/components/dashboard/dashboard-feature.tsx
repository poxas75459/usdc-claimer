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
    "39cEae1TQyjjCrRzSyzHs9f8ALmqJEVTSF1gPMibAeKpnZXMjCwoNDnKMDNEuTvraoBgCStw3YwmE71Jt7MaQGtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GZWDaQ19vKqRqfud4fGXsSc7QUfh3GshusaGJp1bh11kfUzkp44FxG7BqpM6zEjns6xfMWQ3e8wVEUvwSVaSMF9",
  "key1": "TEyKdmuGnExZj1qaxNgovFugxo1z2xJeHGv4yzBSGiiHPbWbCMWHzcVXcjiy5mDbKQi9ow6MMnP4r14ms5U3t7v",
  "key2": "z3jyqKdEZJm1VBn8b85ni9futcfhD7BgTqhuXCLWptQ71yJAcPf3zZfvursgZfZuaj9h2aB7Mck1t5WiuZtwFUS",
  "key3": "2a4ZLQpytRZrJh6b5jJQ2BwyHUCgLKksrpNx61ZAU6cRjqxBywLd2NcKpKHBD1ca8PqHMoM2Ap94ox9ZFDUsWKuq",
  "key4": "3VPMMzkx5zGEFd96FAGm8iqnbHSRy9rmhPxxTZLVFq4uA3u7DcpbDr3DiyYbmfH1mZTgQRm4wn1ykcQRFu86jiz1",
  "key5": "5xWomCdJL8XyAXDJiPp9h3DWiJJbBnKLzueTJ5GkR5LRBefGcDtrQXWFyqnU4eq2n2oydi7LKe4JCPLEzSDUFFdW",
  "key6": "4eEu3zfQTrtPLpoXqKL7PRtGFiFyUGVLzC329TZGsyVB7o5k5PBzZjMC8zBbvjStZHJs8degx5xxS4L9GsKWasCL",
  "key7": "3TXpyAXShBoNGNurKiFBjxfFHr25EWHY3DuD3MAYQmLehZfeJpQthkeQJUsDW7Xf9xNyzH4kGHst16wd5dz7sJeM",
  "key8": "5NrDr2tDdQRgXum1k5hudtDgavMpLu1yrXKAnvuEAnksjyamK9hU3DFoVYeppb6ZaoscA9nPtoo9LSP2yadiLan5",
  "key9": "3NVZfWUwKLASnHYpyLSaXmLriwpM7kFjkF4L8V2HFGCyJqyu1rW1ZKaWhTQAknrJbokFXwGRhjt5C8dPkto6zdX1",
  "key10": "2j6E14gFzrhNrPQpcoErLo9J1GEs3TVkBmhKC1UuwE3xR5zPXRDqAKdv1sFLTGu7nDbhLEtg11oWzQ7nfjdJUjwk",
  "key11": "2Am6tRePqNuWZdPMAw9AuLipjaJMtoEzefJJJmeVqVe8UhMj6tD4JBe5VfXoGLaziP2REFSqCfa8JZ4u3ggsERf7",
  "key12": "28vmWNsXdVes7cfknDCVMVjjg7budQHu9nQy4PCyFnWfxKFLJCWLqnpd6EuvfQTtCPZ7Bjy9a64e6hhriVL2EpAM",
  "key13": "agpgX6eDZuLzCTcissVJbSTVWRMZw8taVegfH6CZHKYdNWh21JqtkutWbFPsYdhxf6zSE8nQQYJ2k51uiuEAFqc",
  "key14": "fDty1dptpDgYqzoRpHiG3JGEH78st1gdEz7kzhwfqu3jUkfDsAZvVK4FXvVFKK1JJ9vcHi4qrVDbmbWch3R3SB1",
  "key15": "bDYq3fFMXkyrCweAzuXsow5SKnQ83PLnR2eaCjBfcBozcfD2VyQqPkCvCTDHprYc7CfzUCZkQwKy7xom7tHCcZS",
  "key16": "54po61YSmquUAj368erhNQXdrW9nZXGfAgCFVDbnHKWEW1sK11Ut7mGLEEi1Qi9dADmyuYfmpgqqqAMKWcQZXrwp",
  "key17": "5iwLh78WwhdE9vTe8Ro17PcCF5aXmR3U9ymCRzE1FttNGn2ExV9hWR1XhNQ5XfjzmYTQ2hSYCUGPLuuUukrUsdZu",
  "key18": "49YuhUgt3hf73u6GHBw9q7k1Gm3gJPSUSKDEn2juAQ6ND3bxwaK6RmN8nBK7c2zbHCU4qCYVAf5rYGE3K7ZseVeG",
  "key19": "32rK4nyaGALfj3rCjJFHvT83dUxEtoWcaNpVe54ADxQtnhebAgjgRqb9n4U3mSsARgjHdAsRVjhpxf8n1jVq9Dv8",
  "key20": "AyqpAbW7aD3kLUpATQeHPQxEvGLhsEWzw5WmqhCsust3RQUmXFFHhVrQsgit7oeh6ozWtzUZRHjcDR3x4RrqqUi",
  "key21": "3NmJSmp9BA3CBiZkoxUf1cMKxSpSotdr5YHFZpuMbhy6odcmBv17jZYKp9YRFJFFPxTUxfjH1om1J1poburMLhhs",
  "key22": "4K8XYSASN9p6MQf96rJCxxQ9dpiHN5RrGEMLZKsowevdjeQUyX9U2VPcH48Nvyk8G6F51xUkMWk1yMsLc7URNjwq",
  "key23": "3LHg3RZ5792oXSErRs7Rs9F7NsyyMBfYSExA7pX7BHpo3ACqRczbu3qAvWXCSyndfhgiFe1Cnz9Pi39bJ2n2V8ki",
  "key24": "58SisB9zgWqQdG14i2vdMqaPsWzQv2fzHnEGTqg8fX6QZrSXd6usRMWT9bN3K6ULjH5Hj2zby6KhD29xvJFEthYK",
  "key25": "3WoZSm9DxqsLWFWwr4SsvQmmjT4vWYJp8UAjosYFWF3n899A6fyYrHBMHHHAU93HoTSN33kik5NicGek5hqQdS8H",
  "key26": "4PEYzpyoAPbETMAgtB64eSfD5JDCacq4kMKdMARZuLWXeu8rWPg8vJ7u19rACwu4j5uTxcLXTGszkxkjvehrcMJS",
  "key27": "2yJy9fmLePfGs6QjJeFRMhaae2Y4ZAsPJrsrR5nTFA66iZYPEBN2nf9hjB933NDAz5VpGkHTavBReUuN3ckJsbdf",
  "key28": "2JXLYsBET7cVDkL1oFDAnHGTUPLPaDVrugadZuXpxH94AAtaHwbQBimk7ojNR7Cyuu8bVZTRb8winpArjzu7Maki"
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

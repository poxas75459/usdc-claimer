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
    "hLBQrpEJFJT3rZ8TKns8KKUXagVtgz9AAkMsNNrmZv8X1HdkHxAkTkpf9sPZKaqiVVKL7EmxeT5qVH5MWhADrcY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdkA22waGaoWbDr7WqYVUS6sybUNThkJsab79Ar9FNW6RZPSTPtfcv97iwfNeHPyhNuVYT3jtzy3aM8fsRJbUb1",
  "key1": "4Jb7nzGJ4gz2v6u9oHSY919V9AQrqaFEcFT9ZdmnxEdSvksKwiDh719hQe8PPJxENe6CtvHDth9GTmTjBHGCgvY4",
  "key2": "4PSDE6VYQwsMTxsFp9cvGmXbcEZTcEPswxgWnzw9XKyjSpNh8Psu4EvFqEXSUrb6kP2nnTvi2RzotghLPi1BpXoZ",
  "key3": "4UPVBHtAzqVrrdsZrroz2AonMDRvuuiNW6V7waNj7Z6p9jxu8s27ifsjRV67DSo4MXWkn3zEEvnJMxKiBTPh6jg6",
  "key4": "3kCjYGfDjPA4eHYMqnWJNJzcCaNFJZ2Brs7CFneVtSuRbc9Zz1jHZKTnXNpbhrTXs8jnJ6EEuoNS1UKp9ihGmqDD",
  "key5": "2dA9XqUnQSAyZ2Bcedib1UMi6srDHCCzmYaMAshSKC6mcV6WidYpdLnJwyTxAvBr2eM4v8Qyz8PpGWsTCUt89aNx",
  "key6": "4Wb9vMTBx1x4RXjrvqouGwspqhmr9w6t692qwQsq5hxbV976sKNgycip2U3YC5enMwV4Xdw5CbkUC1HnTgCtNadp",
  "key7": "3reKQkZaASvTLCUoTR5XXVKwowyzawqcLuTSbowp75z3FgZyCXR11Y2uM5gi1q1dHUcN75yEBGPzpZnSqZv7b8DV",
  "key8": "3rb3fgaB1qLctoXHXuBXg9KamXehVB9z35Rws1hBvTiMmq9ECDEV39HLveDdV1zbS1BHbzZJAyJFn6bKjFSGcQjU",
  "key9": "3N5AdEFr4ocR5vY9i7LMU6kiE5mawqtC75CvBuLz9KfjgGE4GP7nKN5wLr9Nf7SiAut7pHBSgC4G4C3XBDggqvWY",
  "key10": "3VH2gmyqJNiTyoD4bwbNvfhUvKbaX4Gh8YDJuU4YvNiqR9KKqYeM2TEhGiUyNWZDqdrBhbb9Ms6g1SpSCakLJxhc",
  "key11": "3X2crRkdDuwBbgqPck3QPjgM3xe4nkM1ZtRU7GB64AHQnK3rC6o7Y66d3dDW3osH6XgL2FXhVBuGyVWdG5HT2EdX",
  "key12": "3i46iLnpQUKr94iSXssnBgBUqHzQvvH1KYiKGagqTiRPNp7zcSKuDFA8jcVsCExfv9x1VNVQFrRaNvyod4Pymu8w",
  "key13": "5jXc8E4TWeTvWicEgUuNdznYDP7EzQhBShB4xokMW5pWBddavQQaxWHQFwGBM9KA1T27q7DA2zTmBNifyaSkVH2B",
  "key14": "5BsJFA6ySrYqtruXgzmGfkv2EgGGk9rZah9kRVonTXC3LGasGt6ync5NNgXp51AZTr4u5auaviKP1g4G3SsdyRq6",
  "key15": "3MLWUdcidTB4W8EzxV8fZ6y2oNpWptT8cYtQCw4vqBo96jsNvjscBqZSWQmwz9Z1yJXQaZzdYaaaBiTJ1DWWA7QT",
  "key16": "3ypkMWWrDkVE1xEDsUgbJRVNUHVS3gDGafhexjYzmQ9hDy88hTUtkYHw4kJwJzmN1EK1D8CPQ64a7CeDfsntnNur",
  "key17": "5chsiSn4JoMmxZCWMRyviXU6DiG4RpyigyPjbWY5K62mN4nxkmF1zmH1rcMjNCCB89mXDSyVRYQStoPCREoW5r2g",
  "key18": "2j81uCiN4MFS58krWnZhJVwjiHqVHBDm3PhuaNZbiwVrz9hM6Yy8N7LaLhKTTvFzaKvqNeN6LyGq1NRsuwwjiELa",
  "key19": "36rDu7afboCYa43UDJJNrPayxx64svtJvwVD6fCamJedYyz6SBeGhjC58bVfTd2xftgaRvpii6AK4bbB4xWykvte",
  "key20": "3jf3eaT7JEnhh5iyGPhz4hX9rGu3kLZ8hHqhHg3PBS7sdczURLeHzuTapwh47n4mKADpfK8iuHL5QwNyYGcjs4Db",
  "key21": "qi8ZqbEfEnS5HUVfZ5UhxpDtf9hkc2kBGw5E2Gz9KUYpSiBYFj6HjEbB1sg5MRZec1zR3zYtez6pJdxYRewEegr",
  "key22": "2jrNjx4dZs8uq7qtpx7aGNYo1JH4vWHzj1e5XjaVBL7S3eDJAcfffZDSiW9H8BFXcZHQGfYfSneyEZBLfBnfaw1M",
  "key23": "5EhMiCbXYQBy5V6oB6DQs1e9uaYcfVPZgw6Vbtv9XJPKTShycZMfRviabhiGuAvT4Hx531A9vRT1STZu2tUr8FLM",
  "key24": "3fK5UXACiGKTWRRZYRuk6HHrMAHBjWdP7zcau5nnNhH8ZhLhtDzgUtP5GmYiK5kstenMkDWGPoKwrtJ83sdv5bYq",
  "key25": "46q8Z7jiMR9SUd2BRfAe151ux3p55KbxgHEyFkExcM34MWRuUzVYCXKnPPmuBAPfY3tBrmRBJjyr9tYb5AX94UtN",
  "key26": "3MxSFi8V9TnhQKUVvCKprfrn6EjxCsTcXdZ7VJxrceQHUBBv5Xndr6tkPwxFdpnj58bockyv18AbhsJohs4V1br3",
  "key27": "3eajFF3pC7C7VbaLVkQ7pnwrEFQGzit239eQ67tYvK9D4nxM7MVsmb4QQiF9adNQZtxjfsoifB3VoonJpTqJs7pr",
  "key28": "5qqTvbGoSJm5B2g4zqbzpLXtemnheuHwa2nj4wyjcMUWs3fYcTUT6kwLWkfRv3n1si2dU5Pk81eEV3p1yjGVKYh1",
  "key29": "3e9WbTFQvaQmP8HtTgp8kc1hp1nDaxdwneGPgNhRspiqtMQR7iP9EVtNvhekQRJnEYxhiHdhRs2HAQauC14sh3EE",
  "key30": "4o1NcVRKoNHwRAFSLkzYCTTBSHE6SRgv1d2A7XmHmoUiwXJF9hJn9WyGcGxymBN9fvSyGq8anN9X7gY3sgqfcsSJ",
  "key31": "t9J3fmEqQaYTRNf31waMBccJQNSwUKyKUkBdLp78yyQiSBdQiimBKnQWhCuwMZRsKZG9b58zJrZpyBQ826tAZrt",
  "key32": "4BjT9sjpeDiifZtBNkwwUHGHaHv9TJgHSLVjtMjqJLVjJv8TKoyQ9EgJE8NeGFhRM2Xsuk5Pb9ybB9REiCazekny",
  "key33": "3ksZ4GRkDodsTmr5qeUqJrsRiEZSL252Wm8Lt7EvnNW95LJH2tizGE11daQSW8xZ67DbxgifrzBakUprQnEUpsSd",
  "key34": "4xALdgNW3wfWrEdFksdghvqZvstchdJrtuBVaY81bULBf8AGd1JjKn6KzgeqpE1QhvFdxghry5TyRSe5GJmZf3Ez"
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

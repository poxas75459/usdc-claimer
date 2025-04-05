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
    "23oeCee3TQ4pMYak8vneK96LrXjGfGhqdtWrmP62rXuQYCZzNuZHAsoUbjJy6hgpznctFszdPpbYbHgUFxkWrgU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JYXSJKcvaQm7Z1Z6wy94VCwLmZKYKc6ZnRRGHtStVzkCNqqNdJFi2FpQT21hcWSBqM8BRqhgidAgyDsRxL9nRMq",
  "key1": "HsxTMTEyvyqLy4JynGonowsuMHZE3P7jVUda3iz19E5eEzQn4NrNd4DZNaKy1k4sHKEmN7EuZoxAaeemoR5tRZE",
  "key2": "yEAS9Chbyn1buywmDsALJgeWd69jyApkYJi8ETtY9xr8RYvXjH4bZ9oKTDAm9Ds4YvUHPbGNkwMSGBi1yJxUu2i",
  "key3": "49SXpCeWocaYzLfhgfRj9CYshvP3MGBGFpy1LE2qs9DASZQBSN3smzggvWanYiBfR46MB6YtRjTtqDioNocUqQ4G",
  "key4": "Hejo1eYkMpmPYxzp8jTEzbQZPnAQ4AvWQsQmpdj9HeoRUnZhbicCCXp97s31Rsam1b2PgMeEtov8ZEvyJD6uwQ6",
  "key5": "4p9oaZCdnLqssmKXnVd37EMUAbgZaCJgq2FbKr2BoSWxCiYSjWNok4WUhQGgXoqtMgq5TD4bWFxKr1CkKp4AbHLx",
  "key6": "2c6w2jqEmq1YxQ6fF6YSsHZZEqbDpcRShhwdCWu1HUHwjpQGmsg6BbMQf9DEBpNGXdD8SeggobaL4kgioWKkYqtq",
  "key7": "56wKkwrmYkCT77JbWFYo5FXuJTSiYHH1Gq3PPR6AeAttgNZyUhBs92r1MPtUvTjUdRRLNinrb9amUEGQLzUc6jvZ",
  "key8": "3RxfPEuKtfETtLWvggHoKpVAi6TzM1JTU2WLQBdXUYoa1Ghbo4Y6HAB4CQ4rQTxpXqVSs5iBnZvGhQhSFPsz6YFw",
  "key9": "4Nm5Zzkm6PP9Z2iK6pqmLKKQbNNpDHXaEvnKchr6ySnSnJpeS2WtU22QvFhCB7UhAN72LE5txcYzp4mJXpLt3wFK",
  "key10": "3jVR8yKQUWBDN5LkHC965tF2P96pDMidYZB4VEEhbHCqUtErwfuw8rU9gdaWhuuAT8ySiEKYxfqGLoRA7f4vd36s",
  "key11": "53fCeGbQw4Gut6H2qXd4f9gPcy2xpwxwsAofFWDU4Vivv1FDRYMWcdmpMTwymt9kEXmhbqA6CbJVGpYngsbd8esU",
  "key12": "3BnBcTMDEE96v3GAPywE3Cn3gpnm8AAXfZGUc6rcDPKnT3FqcbTu3dX2CYGojn9Vn7rYa5m5G8f2EkqX1syDmxVH",
  "key13": "5LzVUi1WEspaYbrXqVYJS34mDQQTVNStJWqSst5UY3RoYukwpTscV96fvW2yiM6PmG4jLc7WhH94NkDjUFJXBZTX",
  "key14": "66E1ZBrDZRAaVLsrqAqfB8587NygoHYKw1viFJyQbsL2CDsJx9C1hqhNu3mN84FdK4EJrbv54CR8BEFxn7rhDwo2",
  "key15": "39Tm1B7Y81bQQhChjdeMhXXQWTEdEjtVjKCY8n92n11ZuCg6EqYnESS4n2DQPbsWiN6m6K34q2F1XkmbjSvypsBM",
  "key16": "5yFFDaq9pV6yqYGAXs6gEBk1RiiPHn9mqqN7pU61dLRhEJkwTRxRahgp7f2ZAAbCB8SUL9ad9jy5z97TquVtNgMP",
  "key17": "63jJL3CE6Cny2fhDkHZK9qN8SaWNaAEjTrasYJRcMfpY55Fd6GdwRt9JWWiNe5y812YovGVJECJZ1FbNEkiAvLYT",
  "key18": "2WPyupeRbvFVLWFtXiRrWRCRCQPqYm8ncq6ov1j8saUcWhDGtFXQEfQmuwUgZsCfyWMqFsXrZV54pNM9FB6QsUnQ",
  "key19": "3qYG8R73Jsdow8AaCzgJbYgzbmjoF8GsYPe27nrWgQQ5fZ3Gm2owmdgSBspo9nXe65TLfNA5sDJunwAwrPYNg26k",
  "key20": "4da7ETvUPyA6zz6PWCUqpRuRQWALRuTBnKSpAAnfx9BvSVJ447DR93YCZXzUw24mvX3DTD3RhqWY7k1HBDXFxvF3",
  "key21": "3MR2YhUiJUiWzJZmehv1eVoM7TWtig5vUUJR24F7iNad2KgZk8kCgnpvfrExbzB3Y4p7JGGPibxEL9jBXZFaufww",
  "key22": "2ZjJHjpSVYyBqXwZ2eevLqgSqSajkUoFBGrCCEuG3XCakikNq6pA41TfB2G89BwBZBVoX5aUfbAqzSMKk1A7UUGv",
  "key23": "3bz2Ng1YtyNWeh5zWSpym6PY8US44Ljfr9VxDrKAv2GNUvZ8u1qtMaSx2JijYQDWML29v3cudQMHLNGSx34ea2iy",
  "key24": "4gxmQGdBqyeEwNaoKHrz8uJuoMrp4LB7WX1qxpscLhxbMfZ3Esqe5L3sLbAREQ8iBmgrRHETu8HJzg9z6D5S3fWw",
  "key25": "2sJN8LEpkqaNkuBPwNdh9t1uoa8sj4NWwifhJskHBmLS8N6LLeTgX4FYU3hA59UNRmbCgtghfzQgcpddNVuWPTP5",
  "key26": "igAuhYHeYu2rzqYb4LmnQftMuYrtb9zSYiHUaWTG9c9PxA32Nf1je5QijyuGFNdb3GH3ofCo9rPgWha3xKUyswf",
  "key27": "42wQNBopi6NXFkJuC1qtnauqiDkysR9aXbR96MtVDZdiSsCyXwm1ATYxDL65hn4DLvUYyLgzb7Eh5FMV2YsbqNxp",
  "key28": "5HdLKQDjL2mNpb1X18bnboGH7VFp75Wck9K1zA2xLbRYvf6E8gp1usdbQ9QCZUwHBMQw23iMFnskcQYGRXbdLk97",
  "key29": "3Wd5ExQ37vmxNF9LS9cnUbt9mtXE7BG5pcm8a2Tak8JBLRyrSCT6Z253Syb6NELLxoJQKBA7jAPimgFkE9uxdas5"
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

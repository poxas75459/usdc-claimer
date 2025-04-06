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
    "2LsG2W1ggKehFj7d8VXu4oNVakxfJEtJjdJ3ok47m3GUqrbyRzqEzejBrsgLWDBtCNCxxhrHoDsW4dFszcAwYFAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBAqMudRnxiFuYA2rHUVgP6yqbC6GPVh4qGnT6EEzGNewFtpbCb5pieTq6kvNLhJ4bNY7QVVqNYf5cCJUuWwmVq",
  "key1": "5E3X2xPcgScxTfQ2SaUDvSHhkCcbMaeTcYPnsfJ7QvJi9UGKX2RRucYCUNKwd6ndq4sj2aHpANw92gNWJKX3c8ic",
  "key2": "5hEM9D3B87wZu4uDh2cZ5fPM5aYM26qC6y4cG7WtMiFZvn854SiuWBnwAbQ6fgAtgUVRokahXM7GEdiKtrGGVuNu",
  "key3": "UquYSF9kAVbsg3kmq6z58qLT5ptKPRdj5VEAsi4mm1MJPNcuyub8pkrGYs5TyFxz8fhwPb7eQXrq3ZCyo3CVS2s",
  "key4": "4KFSApQ9Yx8CKnrLhgPxa2QeYH5U5BmCwEHJJkvzBv1MCRhrwjFDtLEeg3WEmDfisagV8ETgb5sQBas7ViK93qaw",
  "key5": "3zyAtqn6UKMSVRarmTXpDtdw86gYbhqNJ8ByaFx2VfE4Ka86R4gmnirERpCu6ntwPUDjp2KamaniMKyo3dW9VCjq",
  "key6": "2Kxq9UzAkLkp8ZNNscPYxXkCj4Ae6GyWzfQcgvyAH37WoLDGZxuCakjNVeRb1Su3EPb1Ft6QTVRBrhqzkQTmKVkF",
  "key7": "SaugA24QDHGmznvUXyZuULTRcnaUfKrkDT8EJGVSBATf1hHC271LuXa9R4AGmVcRYqtKtRzYz4Ne1xG1J8LXNMf",
  "key8": "VCgDugx4zixB4UZ1WCm4rakWvWadfmSrASqGniTDghGXkRDJfng94GhnALsmWXfdQER3AQWddd1J8UGvCMWX1sX",
  "key9": "LNSYNYXc6LEZ7tC4RsaL31kGrVfdXLPN41FcVHUdEnSbi4u5sjWqLbEcfNgcyFGdDxnCwordxcDJRapN8v9Lp2U",
  "key10": "BHotpPyk7sKS5kqYCB3YGTAPLk2AR4bTW4XbTUBd6Wb7P3DXX8mupZWNu2taFJ3h4JgBonT6iJTfuc9HqwM1eEY",
  "key11": "4P6xtRvVX5rzSktsFn4phd3yaJGzUq2WJU24Cvqx9tbrQEbjMm6StYAHd1pBMhCSvpGieENUYJw868eNzuoJWp5F",
  "key12": "5R8pL3Py5BvmxgWf9BCzBKCBnBCdDRar1V8zkmmSyJqCYK85XoJVgpHrdFDTHucBG2qmnbuKcBddioPw9ieRhki5",
  "key13": "bwH4GW6TiHTseFP5RhirVpnyKwUsuf8vY6RtLs6h5XGRdgoE9HSxoRz2LQm2cQ8VNHy5Uv5pWXEVuNVGLDAg1gh",
  "key14": "2MyUSSga9LspdxmARMgniVNHfyqfVyQj6CutqJwm9EFCcVZSNpcTHU982ReG2FcLKKic787BTNE5pa2KefTC5cxm",
  "key15": "66yag2JojDbUH71nmYsomgBVHn64Ee2PjUebT9S7DVQfnWkdccCwKHPqg3k5Fm2YwJYJ1MFT6vhhw8X6nKbn1SaQ",
  "key16": "3KzKELBCSiNwmfBJBKpEpEMqeD4M5uM6SqZVm4UNJAJKv6SiyM1LhEx6eZknTy6tif6pfQsF6YGqFg6Y836xH1Nu",
  "key17": "wBPLYKvucoZVd8Xe4g3MHqHeHf7dG2FVV5E9Toc3p7trj7KZiiyxHgNMRNKSdNRitetMVgjw2ujeERRsrRQeZfy",
  "key18": "4Nx2aT297erVb6GWsmr8y9UYon2Hg2vjQmvLSLtJQGk6QDsPn4isuM4rKny8NPVy2DZiiL524Af7KAqN35Cb9tx9",
  "key19": "43bDV8GcYzBBA4vWZqGmQFK4MbPnkHCLJDNjyaiVKZcXtoe6MQdNY5kzw2N77CXGD2GyWw5N6ikNcFB9CZAMXafy",
  "key20": "45mDR8A7XDffP6YW3R9xRfVQ1UikhBBsEk2auxzFw6BPc4dJrVFX6zAQ7WkSfv6QWDcEmkhq1mJydnYvX91MoHNJ",
  "key21": "3jPwKnFgEGUTiUZzxKtUYVp4PG8eFwLWe5AnbyrB2nyirTEMTaY3X1pccnHQgDA2akZDhfRAQ6Msc8gtUyThKZVf",
  "key22": "2Lwa6Kf6px2BtibU9HcNpVtcZHbcXxKXWFdVWopmi3K8kTYAsFaQsH3KzjKv1gR5VqMKEE5Mi2ByzefAWqpZofyd",
  "key23": "3c9hoz5bdpbDdaMvehQYVcX127EbV8hr6Y4iqP3pcunwd6EdgtMdaVkj7SXubsYNzSaXQPfER6bterBuqnbFvSXm",
  "key24": "2qg5yWknZtVSVpzeSDkNXF9xVmL2zUjjwUyyvEFS2RrUomFP2FAMua4Vb6o6yYhWjydE2jhS8FfLQAXXijQyN4FQ",
  "key25": "5Mn215ZiWYTZq1KB9aWPxjFLKLnTQbpj4Z8RQU1YA8sQ4utqZAqvqRCsP6NMq3smuSS8LbMGka6krb3LP4dXyUkr",
  "key26": "cFMNcC2mJ2BNKzYMiMi2b1uyrviAj8M2Xits9QoWnozPPdvLsDQF6auM4r8Az4z2apHtC54fK1RLrHGpM5Bvwu6",
  "key27": "4y88JjyUmM9cnRJPaySm95527MBer9gVPaES6c8RGJNHsxrKgRoPHLTwWv1xSFqpRVT3qzpjnaKZ7XUVLXthonj2",
  "key28": "2E7q2q1Cg9wYWhnZ2G73A2Yxdm5mT6FWJKLJwyKELLXpfNTTtwJHiA4EMtQG6oMutGUX5xJfM5qcGwQfVi4twLpu",
  "key29": "3BGqD6wGQQ7gJqEitcdpZzSJM324vxBLKSoYsyU9emgbKLWLwSL84L9EnAZ1FKKybdE5ZqnbHY4m1ba61H3YEv77",
  "key30": "2Jqe8kCAwjhRk4QSY7WofB3QA99835f8dC51Wn2WmdXLBMnxhMZ6DRu5MCEdxAofU8x12MAt8HvXTpzeniBqgASc",
  "key31": "3HmCXYWLiAue75Jgejjx8Z2bWY7CDq5n7w9UkunZ3hmmUJqerLxjrsBzazExJT6RhTA4XnF766PKCtb4FAiz7Bg6",
  "key32": "4fTb2T4jPj2uPJzFHaXaJPXcGHEHyoYCq3NLmJzpp4csYBrxB8LF1Uvo1Yh19Mx3qPpd5pENmqDQA9x1yDVqUsYf",
  "key33": "2tacwwUeoiB7JiQabcDjL4NMb7qETatTGssks6P5pvtUsPcRzmAxHTXw51XYk7S4DPq5sCZe91G8pAvzRc2Z2e5n"
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

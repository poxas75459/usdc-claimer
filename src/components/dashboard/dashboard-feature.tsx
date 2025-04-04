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
    "2HsPD2gG95mA3hyMN3Vkfha2VFnAURVrNSyc9LQ9kKRoJnZsFnyV9WKFp5miH7L5e7acCjh3bCuEpWNpqey2V3P6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57p3CWMCCKJbWKW8TskBiDVuKJqaMYJCDGrtyTxoKTwUcQ1uPiaK5jocDnn94gxKzZK1GGKEYRKZVkPnNkwqm8n8",
  "key1": "29nXDbDjBTFkJN84vuEFWU1LfRLQWNLFRjEwXe7sR1MEVS1gYT3nuDykp2sFsM28yD4EZ2Nayu4e6GE3HqVTXhfK",
  "key2": "4pemAbUzSFkcY3huXPX22tqw585jAF453EF3htkk3d9VM72tRzLRMC3ZqS6crizcuHSTfkCU4vhTDoRmTJAj57wM",
  "key3": "5DpiedkzRpRG8pxVuqGfpSrKc2N6MXwBaMqXUC6fUVLefHRwktDFznBDGZXcKupz9j6JAr4KfF9ybqn3YF2eaxEQ",
  "key4": "2vL6tuNTSuJDg1yRYtdvt9E9KoZkAW9Kv42Wxx6sgTAm39UuLJzTWmxYNXkLfDVnVS9XUXDRgLvQvHDeZed41cmw",
  "key5": "2R4jtSKogQ6vaePbFxUms3RoeGZ5SAck5tfQVXUkebBSe8dxQMCn6jPYPQjcPuwMLYT7Ahm2Gv8g5u73ECs1pgG1",
  "key6": "2j2PS7jJrmUFczNtpEK1FrRHTN8wKQTjK2oQKswhyaEkEVzBhiBjdTSDaXW7VMqezugXFew2twbM7A8FCh3uGKoR",
  "key7": "FoFC65ZquRnMoc2XWNQwcVSpiMBd218XnvGHehBa4nZPHUBQxyZLMgNC5xSsYCGGK7PGsWZHUDjZggUWTi5XrEV",
  "key8": "24yZ8KppwkUAUBmG5KyH9g7qeUFq5Gm5BtJ2k4gNSMTPfggdd9cMkatogZMjqEeyfGfhRuds9MBcbTZwpZvUaAj3",
  "key9": "4KC15Kd7oWa4D8a8hU6R4afxBpvEj5HUGUiz6YQMHqExUAz9Gy46pM23B4UV9Zmh8KcGnZq8zMVeZmHzk2Dj29E3",
  "key10": "2jV8ZUkScEXUL8v5FMXENnqYQwHiVM1hwKrNZsXUyaksEbGrjntbP26d434yZK8wD1WHcpkm2Ujc8Gi94Xcg1m3X",
  "key11": "2rKh79tibLUniZ2QxidmP9CziNouNwWfFGDJbXmF5SEXRyGP9wQDaPFGnwUmNQbzhgywk7TjyUWEwWm1XqXYsiuy",
  "key12": "4Xnd4TQYuEZ9k2m2o3pcHjXvKtCdJ7q9sVFfEoRaGyqTbbK4M8tZeKGyX9hsf7cQoWADSNaXR14CrQcPbpXTwsHh",
  "key13": "31Fes2PMToy8U4WNr5kvwBnmLmJQ6X28Jsa6dC7XgfoQPV8fYhHNqmACjATpjgDXSogQk7ukUu1k9rtxC2nfxc2q",
  "key14": "41ASD2M6ntQHHp2WotFCM1ZQ3qRos83vzhM8HDyph7EzNAUhLVheK4gCWjRNqq4nViXdKBEHQsLJeVZXz1aN6WZw",
  "key15": "5ez7VcQ9x8SBeUSDeMczFxH9XkP6PzAhTt5Lrb8Xwvfo2gRy12FtQDa58WZ419v6d1TxmYwjmt9gyy6RPZdyNdg5",
  "key16": "5fRtN11yZKAW1KMoChevWKdvXp3XuKBg3D15ADHhi3XCHTYHmV979Cmy5rcms5VhfZCxLraSRwNDBR45MBibff4t",
  "key17": "4RiNSf5EYu9jjCPnDZr8pxcBPhagM3yJBJBpfpyDat5Wv3NEc5KXuVBmBDrMLi3rh9x7ASDDAujnHKKFnmXFoS54",
  "key18": "3gwYcasH51qvmAa5d7t9FwFYcGoz2w6u1SWgBcKcg4DZfteYWZUfjDB9NgdzagvtuMtZRj86dtpYfaitHPqNSgrz",
  "key19": "5Pin5JEgMYXuzSfGwR9mDjTFTFt8QEC8wNLyCUxVAX3aLXBTttoerZJwTnnFKn5c5jTwWgapsqB9EGdPyY2bLVYz",
  "key20": "27jQGLWspwXgfS9yNqr3i5NzKSTVqgfs4nw46NH6PVvm5tcdKBbMeSn4xBM2gc6syNumv1aAEXyE1uJewVgJ7EfA",
  "key21": "fThXRb21f7KkuBxwQbQ2A8fFXweCc2GdgozvMbxBcNfxZrPoHDeozc8KcACAdkFrcdruTRCEBTTQXx7EVp2h2Cb",
  "key22": "GNrwDHcDxtS5zme8cccq93gmHKHgkPVzFkm8t24XCgKvcoZwHLAueDWQv7axS9kkM91ZyhMDARbBV9X5o9UmkDq",
  "key23": "2uryGCNFQu4mJvXV3yPUqLfzLL1ErV8Do8Pp89Fju6VuK9CJ62gTqEmQ9W9tBb7VVJhzK2KtVJ2CZfx6LAPTivEE",
  "key24": "3ouLL9YgkX4S1RjjKNyVvZLUfK3QcPWvUi1buacFydSQXAtyXQzgwDvzYZdD58AeqFpNGFpwCQ4dRFFJvKvsxA1f",
  "key25": "Mb86LNwVenaLsPYUXiBeyQNHDXXwzqe28fvjp2HE5CGJxZNEzEgsS4TmpdE4Fzj9zMvNVLdNhaaXwfFy3FB4WaS",
  "key26": "4Ew7aSjzwhu7mZQjLW6NzqiN5jKrmm6u7crudTCpDRh9fR8HFaSFmoKKUnGhgHkQAf6FXj19dZagb3eXD9yd63qn",
  "key27": "3wZWUSGbkqeMhBt4nEHDDwffapjb8DdCggUAozmEWTxcxfpsD28rHRnpuocTdVHTaywosLfX4Kd3KT9D8QBBTuPL",
  "key28": "4x6j8nS3tzSQoF8nvLK3PegXm7k3nDv1WZwrKKBavBnMyzNxU5DKDXcjDdYVzMAwuydYoeuhhLStthKL37nnR2vK",
  "key29": "gxf3C9Ve6QFehWXoq67VFB4D2vzmWdPaf1jUgFE35HbiCX3YBJJkM9KB4sWce4PxiZ5rRFdFrjmcK49CMVt3vnR",
  "key30": "31FXZk8mdsUtQgCsD8TeMLFmEMZmXkZXVvv7GPWK6DtEcHSCo5KkThrKG5WF8MADLioJedLdymQsCKDmKeAXoXNM",
  "key31": "5xpat7s4VGN55SSspk8nppUskeB4dnvNNTP9rrocedKCEtiBzd5Wg1uJ3tbFvyS6mzbsJdukXHyqLbTZdtBbHrjP",
  "key32": "416wCDox2fkY82MUJhhqeyVpW4bp5DnicQqu3EnpUw4C1HNY1yD9yL8nApCo2jNLxSERkP2xzJhaauCJ4D259Wmj",
  "key33": "2s9DAG1ox1AJRTcWxPiz3YKm5aZxPSiLboG2LXZm48wbiPfNiB51rASY8oWtrWLY9X7LoSjvVigaMN8iWC3kwAdv",
  "key34": "43SeicGxaNij3on19W2KzQw4a7hif8w52EKzGp22g8bC7UKpm6yS6goqWHTh7uWr9Qm2TC6QgpVnBDJFceYQnxYb",
  "key35": "2KgKTnifaHEyHWAtj3fwfHCuT6faHCcGeEV4h2zoRq8WMY7ZFnsafzMpauK7DtdHfnStJvYXhu4rUvcc2EFC3VVV",
  "key36": "2xCXmPdjfS4tAh11WXuCWdm3xWfNFX3fRuULGDapJhFBN4ofccYPebVXmJ3D9kB74XsdmU1tkmaQrSBQCai4QJ9M"
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

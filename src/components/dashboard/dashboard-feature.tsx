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
    "2g87XBmLG6jzqBcYBP5e2TKxZSjvUosZe8TKdeWjRCzG9CAu8gTv9RodJobGTttVMnn8XJMBcmik7W3JbA5evFDZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rksEWsn3V6xvt8DufCpthZLco8RNeNZkH13drxmyiTQGokzGu2pJs3ajbvzPmXRK4mhtgwcFGjqjD74ZbVK3eRo",
  "key1": "5i2nRUGagwasnMwfDCHfWNzQq3QH5Qgp4jYH2ccGx7oQ1eiEhSNmwB34D12DyY5RksEJX69BU1951AHguB2bvj68",
  "key2": "4LqjD1wB7RzLx14YqupLxc1F1wWL1Vh44XNu9LG2m8RXGNU3h8hsWWf734nWMMgSZVtNmvVd2fVdvoB8a6Kwpi8X",
  "key3": "25P7hv4WKQ96vHrTkurxupNRPCYSUByAkkWytCUxNKjw64SE7HEn8UTEr2d9JAwn8sYJQqrQCi4XUq6uor82ZSbz",
  "key4": "39JtT94QWhW5PBeawxCVGebpyqfMFWzMZJTdpaVVfnh7cg5E9u7izLRmpVjNsM7iPnVFm7u7oQxwYmgZedCceJdF",
  "key5": "3XdoRZn3n1smCdUoHJUAcZ6VKmdhoMGtKmXuByPLSG1du1qRUTkne6Jkc19QKV6oV21HGY5KaXWY8FvjQrkiTyT2",
  "key6": "uKtnhqYvXERP2G2WooMrktEoT4Xqxj1TVwb6XsEPbo3yE3iPodSJo1zczvP8HxonF6DNFdMn88ShZvs43m9kooj",
  "key7": "4gd6CuJsZdTRS6vMzLoci9QBJ1UeaftZSRhReA1rBAWVPmGNwuFzkGvJnqZwZY2pJKFGbwbG2Gopb2SGHseNg6Jy",
  "key8": "5QXpKVdmUZaFJUNdnnC5EduHpnXJJcyRzpw45FKF6ZAHzNp6UyobbymDnGZmgxo5JUm5aKEwH77MDh17LxP9vV3S",
  "key9": "gQL9XPgsq4H8yc3bRwKEAgD2j4oHM6hr49FNhHNB23g8fpWUZS6rQ8CYeCTNBuMtxCXrmFHSW3nhLYRiom6peXd",
  "key10": "59mqrDcu6kGNpJVXELdMUyw5qvzL2wH4LC3hvmiuwRJCY9fWoE9RkJm6tEinBnq69QLHdS4qx4mK9REDV9c1bjyZ",
  "key11": "4L35zdPUaHLaeqRZaovKQ77Gdi2mobT7VqdLYbtJdbYWsPbEvBhbs3ZncFgYxDe5WbTfNsL2L3U3LiYcqEDVwdhq",
  "key12": "5nBhejbm6P5ybFYhikqhkVSjT15SwKPvmsEa8T429ivp15Je59CKtCXMDS4Vj9da4g8yJbPYj5RB9wdnBP3gwoW2",
  "key13": "5sS25seiEPoQZ7h2LKqe6ZFo6Y8Qg7bjG19W7N8UD8nfryDcXWZiWs1eQ6QJE4NWErt2TSWjt75BaZWyCxc9j55H",
  "key14": "1v9oFMmM1iL2z8XNTU1Z5PVB7e2dNHsKUURv2L53cwE1gyMSLbFXzEgoi3xPZkkm7s544wwTCiZJw9w1cLGFA5V",
  "key15": "4pD4UsgXEqk9tRje4GbUpbQtA2hcgKz4hVRdbmnSRbDc8aph2ZdCWzcHx6xvgcFGc2Fk1KSDMgdecLXUXuFRPNDn",
  "key16": "4QuNcuYJ2gEfB5NYS91ZgdZ8PRLBEHPAVBgf6aDpzfsDtoQwAf6xMrYRbT4h1JtbruCLMPCEXdnQJEj71SVtbaiX",
  "key17": "38D9RuquaTJkGm9WH1hy54NXeAX3hPdeRD1z3ds9zzNtzREZbHQXrFTuDNrTkJbATpH9fRkEwenN6Q8LiHyogyon",
  "key18": "2J99hfedr35248kbbzBfvq3CR4EW8Ynw6uGSRPD21XvBrRmTCKTKkHYPdxfFsjnPGXmUTdZAXEXuZxT3wcPca4fA",
  "key19": "3j8AfjUL3LFzaF89TVj5zJ1tPGB8g9XU6fTBWoCFJtAQiofQHX4C5negnu3vpjen3x8ertPrCqhAHSXVUjzFUyn4",
  "key20": "Egk253xJkcQVsvR7y81YCByx54Gk7bn9DrCWs2gfLNK2QUrRZz9YeNKLxZsZjxfxBPNrbqVC4v2YxDcUYQzdZya",
  "key21": "5KNmTuc551s74iF8dwAg5TyEnnvmwAD2YJGNcved4ZeUXPrJqFYDGt5CbzuyQzJg4s67teyVpAT9NZQKJWrNJaHz",
  "key22": "2JPDBgHq9Qp67BM1ZMjkYLXpf6rFSZgfP33ApeTeuBXf6BQ7VvCjwsfa6dMgsaQXyPz2yB5CGvdd7CCemsnDGpNY",
  "key23": "ZMf7fpy7ymMaXu3EQUBgYS3oSmfYiwhfXuzM8SfAPh6h9qUifWR8CtYjnA4ZexQoK5djVMd1wgv6QjvgNqT4Xe4",
  "key24": "4E89zTRfVRjaAUrLd75TYggmiRxUaTbGruMrm5Z3nMV7dDAEUsEfE296xT6ioiqTrhiueCAqD3SzSGoncGnRasyo",
  "key25": "4WJDSRahXGFaqeqSnQhMZ2E1zywff3exb6xugq8LTZFuYg8EHuiTJ81CCbX6Uxqta8P3GtvZpGriNEZJXVWG77Z4",
  "key26": "2gmi8MD2Hwou8ZA9dC7erN6wokZny3x16mVeuxZMhAmcoD4JjkUAF383JLCTDFQb4VzdCbMRb5tKq61CHuWGNU22",
  "key27": "4u3WwgwkwaW7dm3BBvmiSFR8o3FRjFEtx1qYLRDV7qM8rcM66knqsGMj8weQWT3fF3PtJx5m3nnamYQXb3W1JLoP",
  "key28": "45dfFpxXLKFsDCi16bTsiSBRHhwSB9iSs5PpDS88888igjjxAxfjDi2ftj1SVmoTupCnbsjSodn1gpUib1Y2sRqy",
  "key29": "v9uGCkSiVMxhsP58V2Prp8xr9ow8SZQGyAQPnpEiFntsTJr8UCQJSKAZThW5zJbXUg4D9ob8smyjKcVuZXA9Ley",
  "key30": "5nxzFYnCvyComnDdDdGvCgnpu39dWA9r3F7qRvhNs6TCaVrkNzw7CSWyMYpvE28JqT8ojE46DA26r8h9DFkcCmUG",
  "key31": "TrifXwgtcPhW99RHuH5TJFDVqJmBYNq1jKeeukX2TAL6T5psuLin8kDHtc7aXaJaMM6c6cmWA45XfZhBcTmqGCp",
  "key32": "45JWvWc7swFH5uH6HGs3MJaHiKmzRTMcBCRwuQqFdRBrWoDiwGBjjBMt3hwoXPwUCWLSTWU3JznyaZxqPiARfnu6"
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

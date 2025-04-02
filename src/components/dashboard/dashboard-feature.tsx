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
    "53s591Mx1pCJXGs7QkD1TTxUL3DWAZtLcvJpPDuowh6QBysLFUuSUVF9Wb4fzTUFw5oJ3aHd2gmU6Nm3wvcCRB2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MFkqYow9icMvTiPPzjbB3JvmE8BMrsNj6iHHZ8swc9sqaUmidEqbuk12v1QHQUoWM54d1gBWqpBxBDm2hJ3ysxF",
  "key1": "5ABTYBAmgWfT2EKk8MT9GBSnqYukbH131JvZTbwh9ncUaHUfm5kCbc4N2cDk7SAYZWpsjyoe3xsY1DDfyHe5Mou1",
  "key2": "4Ujw91XVnaskZKaRTjRQZoThRMZtn59pqJugwnfpuP7aEUE9jWmfvvUjgVH8YNKsNkuuFAgnNfd9jdf4UyGispVS",
  "key3": "4foi6w3DL168cdzyBetRsdFWjKJG9k1FN82YoyKeEEJruPrj1TuMBynZdXGeze8NnaAhzHUuzbFzBwrCST3MQBAV",
  "key4": "4PeKf6dr3GZ7nMUp3SLMioRkSrjr72rjAHYpe8e3dQeKQXYKZhrXt7pvx99V1Qgc9Ve9mx26JJLWhzwBizb9Bkjx",
  "key5": "29ajv2uXPDRuc5ueiDcbe8RqrqoagPBTRNxsVAg7zDBXACstS3Ck7AV7hvVkmkr7UNGXjHCc5bJQnozrVR57xZp1",
  "key6": "2SS98W7KYFVYqbmXfWt3djHPCJF93kph7B2g7aQe9FRjLTCDTTrnNgMfcuxJNARXkgvqr2o4RX498BS4fPWvjmQh",
  "key7": "3bR72EVXrSvFkE8mVrNddqGvHLenRZGEiuZU16ejewTpM7qswkmPGHwKqExth9M8BGPUmfjvqmwyhd949Kvb3NjF",
  "key8": "3P8zVUFdEVfNi9teUgcRBoknVzXW1FSdvAZYii5vMLy4vtyERT3PBS4r9yW7Rd9K9KLMB4Ux4EniKD25uu2uuqSX",
  "key9": "5xnttXTVbgpoaZxdFVqdrUcPLBkzbqM7c73oi7wGfGwUPVFFRFimrfBALgc33E8fthWq2jkzYYMK63aNkxTJju5m",
  "key10": "KaSgU2Emi6Y7F68Dsdrmky5udaRhRBxifVCgjMUXottFvr18ZtK3dw7HzkPM3H4ZLV69eCzumh4xiKfv34uKdmr",
  "key11": "cQUJThoHPQfrWiJeiLm3gTqqoCC8NixdsWmgaTbBdYhNTEVQAGtuYbLuQrAe7pw6x9eXJP3UbRgiBQ5GKegj84a",
  "key12": "27uJfEMcV8DuD5gGQSch6hogRPdJ1KbZTvPYAwi4uqH3wkuPW1u7d9syh8K2JEvastc14okmZTdaREw3Bt5zEFMX",
  "key13": "2vJKUUJG2fqVzd4PFjg2m2J5wH6WSREzYKFsoamyeEfbsiEGGCoRedxK8SY584hejw3mhDsvNzmU4vyH4ykmUFBC",
  "key14": "nPEoXDAgAZTErvzj4uiYjWYpKnVtbbS8KGCX8fSz5WyFuJwGeno45VGsfAuR1Uc779SkSQ9em2b94kgzDbDFJws",
  "key15": "4Vk7NbU2azDwHbVeYw2eHB6Uxg2Yi52f4mzwKQQrLSvyTa7egfL1nJazLatCpENv2EZDhKV9Mjjvs4v5j5PUTkcB",
  "key16": "cDCLs8GZAcx2LrA1MHgQkwDvbo33DDQQjt1qD2JCrHQmtZYSkbXdtQqvZJ5rEXYfTtL5wiKoCRMG1QNHAhPZR7J",
  "key17": "5oqLbiou1ko4TbkeAWthC61wHLzgPbXyLdqiCF1TnA4KmHHqKafwHgXW1erVBZBj5zW3LAyY939EC5wpaWcz8x5R",
  "key18": "3EKFEwM7Z3JAQ8ZdyytFvxqzq7G6jbTx1ThvfrAAR1eKvhsPkqTpKRJ3jpERoL4rX8bswXhSc5u5tVAhK4yr7dNY",
  "key19": "3Q8Lw5Su3sWg7Rh2rhbfDxpscBrv5FkafcQ6WsGZCLYVaeBjyrrUWQDs8vmTsDEnkRVLJjYr3EVAhq6AtMjxEe24",
  "key20": "PXgyHkq1Mpjg3gXr49GEqg53SuvJkMhe4tW5vcQHkohVtqzLUzd7EgNdgq1M4SCJBnfSq2UG5fgkFTFPC6RS8NP",
  "key21": "2YbCeiELeipQDQhFX3yAKk4BD6sEp5nP5JtTipfqgq4o1mmxE5muyZXa4zncnNvZjxMJaSqMiPNwbPBgR9D87F6B",
  "key22": "PBxF53B3MsyfV8rEeSTzwvYSRAVWasQELq5suYgxVVhqqvhQuYytcxrTqVb7rEuKwBDMfC7WUQtoRV5asnEMnVg",
  "key23": "2is1bZqJpkr2aZKkR2aRA8WNQboz7aR6L3bjZtJzQbEx1Cp4rzUsrgPqGV6itJyuV2R6Go7zQeg851E2CQB2Keky",
  "key24": "2GChvCDULa98fahyaWmjPCsaaaYs4a3sBuKZUyzKJMzaUHvawTCrgHLaoTvm56xu1cevpELZdNw1gJyJPLQYzpqY",
  "key25": "5ZEff3frShPhjR8o67J3Fuwk79TZaWDVDwX62DK52qS7g2qtcjB5VpLGoowNcn7onrQMuUy2Bcy5YUtej8QhA19W",
  "key26": "4URVXWF796rLCfbKyyNwjaqWbhuPwrJLhgGStJk6ghVbagP5KUYxMDjgPSg438KZTjo3dg9iDX8YpMYGXgMXqVcz",
  "key27": "21Rh6GgXZ8zuKcRWe9a2RHETkvmrG3taaBJ5xyjTov1URn4Thcru2zWQ1qMyD3ECdVR7aazxfgqQk6VPA7xgmiM7",
  "key28": "4vCvEeRf1XHxji1xwhtjch5umUEwwZL5WjBcTn8F36MeP4hVH7LNRzgAheWDKM5vu1Po5YLx2Dx6LGUMRZVmD2qZ"
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

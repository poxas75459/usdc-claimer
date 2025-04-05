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
    "3UAyFc4jnaYD59gPdQH2oh8tVt8yoq4eEfCez2f28cJVVPEz4ozbc8WfrxcLrW7prw7qG3pXpGZzD7oXm9u55NLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21xnew9T7gThoEL8Z7CVnRvTcHmRfKBqUz9uqqqLXSYShQJ3VvDUWxwGzPTjFNzC2Jx4xJebHzH2p2gUYMpuMzKk",
  "key1": "3LzT2JS6pCCyMtT16185r3RNLe2XVofjdJVbjMuj7HFTjSzDKZMNFWyYa3YqMdHwxCL5tBZLPASndaaA8jg874nj",
  "key2": "6kXiYt1WrxJajgjuMSX3fhEgLWnEQFAjM1EA7p6CZJ3HKL1Qp9qxnyRfp7tZ415esuYd2yzopY8H3BgTyfrF9gb",
  "key3": "cYAHKc7GKwqVZs7XF7GqL8HMNnmjwrjnj23stMtADrD2LiXp8inb8HTeSvNNHm4Vpjn3TphRuAjfzcWgrnGmX6d",
  "key4": "3KaDdfWfPVsxE9yq64RTPgCSS8rumpJht46KonkCv87nK66dy51S5UTo2ChjJpx3SwWTvXHx7LKd5z6fGsvhYXtT",
  "key5": "3NvadP8CRYz2cbuXm5TYRsJHE4Vo4S6zhrxtDChDaWMz2dBQmWgAYL4ZqQ2CMQpW47yU2L2uKHAbQn1kEtPomdm9",
  "key6": "2wT9iKvWSWwMw7SdGMCySfVhJsRJSr8J9R8h2egMQVWRm75uJkS1fNbUJPQqHuYP32oq1eEj59So5CZZdFT6Mgkp",
  "key7": "3Njk6hnjGCa8rzauXnipsyjpatjwiom4Zj9n7T3notL8AWVrdZoQmhG8q2cwx4UienPRSKDddMwpvunRcddJFZBj",
  "key8": "5aK5mXwkCrEJ7q1ktiqCBifhuEbc2tGpSqVVeq9Xx6FFakUqvgF4fLkKQ1Sr1n9x7xE6G74AUpkQXyjYkYuv8ga6",
  "key9": "5ekH97JAcM7JtZGnBG1a9cePhgW71PCXP6MBG825Kz57xtB1QuQenjPpnn1Aw4hRqJjfXtttcKSrdRnFvtS4k6o9",
  "key10": "34crEjP4AAen5iqonp4yULQyXXigWpPC2KqeVM1x4WbUGxDhmF6Zcn1HUwKHHNrYoDyTBHVjswnsbfQhYQJc3Svs",
  "key11": "52yfkixbhVrw8zXBgRfHsE49niphtoQNRAFG9za23j97EANtNrAnav58cSJUJXxiWUheoQyWsMvxs8HRVYwQTTvn",
  "key12": "QMRbopFErsypMNzWVbWByT6v7gms8NBSsvoQQ2P6fN73RpZixosLjWsP4erfZyzKszHw2k1QHT6yJGTY5w2iPRM",
  "key13": "4Zx1SKtpmiNJ1ajuuz8Y4L4xvW9cj1CNyc2hBoSPo6ER5a8v7J57rtmyxDvk3Yypo1m2nDHb6YqrmbWK5MaFuXqf",
  "key14": "4wtzbzB4d39mxuEry7Y8M8XFb6KVvCfS9WwE1fgXXQnTfg3fGYSkv4N5L5zqmzMNQ5fpPJg3zPYbTDtC7nm72tfr",
  "key15": "2kjRp6EiQPVZQ2e7XYwoHgUmLaokZsvuuAwfVEGG7URnPqHek7CRj7eBcc3HWoMv2o2tyzoTLsaJnvLVYLY5RUcn",
  "key16": "5TJWAfM1vftgs2HXfU6oVwKSWK5LahNJDmXV8jNrCMkepb9awADUuk5hEGE5zmReCaM3Z7dE9Hsby7URh2xYNCy",
  "key17": "66i4nGG9KcBrA8cgUW3ZkT9coiHJ8Z8Qo13SHFEGGMJxdJaTGY9it8nZe5ikG7KRNZAZXh6frD3ePPf6PUyQgnVb",
  "key18": "5vRuXd6RB4BC3izT35KQtrYwwEQdWcRoP3GqDohnFoj8sSAErSiBEyGofvnMNiZNwgeYmNfgkJ5ueHkqe2WDXc4h",
  "key19": "3LdUQnxz5ipSCtRRtMKh8ZdmqttbP6uJfeHarvef4MNaYBKoh6aYKBUDKcXjKE3AHgowoWYcJ9E4H8LGTQX8etCm",
  "key20": "27ftHmHmDfayvczy9NNzy7uQ8KSH7QbL83aZyBa9wfEpFQErH59JBEsMhkxT2D8Yb7KEecHekQaE4THWQvPcVNoa",
  "key21": "3Z8enJb3cxsCPCwXdt7qbKMpcmuRxYDLHJdscm2DWqjYeEFMVV9ffm5PESMnoRgLDBEBqqnnfKceLxbii88CGG4j",
  "key22": "5Wy3vFqYfwwxgfUEJBzoEwG19PwshGApwfGj56MogbJtGtQJCeztu2enUrPnDet1WVay8MK89m97n8dw9A7hezBV",
  "key23": "2L7Kq3PwnoLkitpAJdpk33GcUHkLF1hyH11BZ9fE37PLLys5dRnMnRVSeGRcpvz1UhngrBp4QtbQxHvKiBfUsLGh",
  "key24": "AMJhUHLTooTyEj3WEAoS9CPmjHHk3H93iYpD5P9CLm5TKoU2BGAvVcEbnpBTEE7PjniV8fqUTi8WGTSeQLqtfMN",
  "key25": "4M3R9uqrxXh9JTqupUzHmfzXYVi9bb2jDwgutUthZSM2vjiXJqoaFfGxwdUutQ6Tg6gHBdYbnqZCtLJCYqPFdo5F",
  "key26": "xiyQbyTwJatzG2kcbsFovJi7XEVjXd7dGzipqhXWrihpr9BgpM9FU3Mjr6ETTb5DKn9YMu2ZZYrDk1V4eNNNMYy",
  "key27": "3AZrpkRiygEKWvYqo6rMXZJrGFpn7ugkbNeay52UuWqYYZPQt3iexGnzokcf89s2ZnPu8uk5RS4xWUNkUoybYjkV",
  "key28": "2ed4TpJ3r227D6WWbs5fQJktCEQbGnVYfmKfEDv7Mh9Tt3tuB8Mwxd1j1GeChuYZvomQgYiduYBTHgpEMWYXXZRu",
  "key29": "v8HWqUJvs8BLvz1jfhJhB38zJ7LcH9jDa5mQoPiRpbDGM5kP1Wa8nTnD3nEoEs2HMPPZ7Kt56Qy5u9NHgb5fdrZ",
  "key30": "3jSoTt7RWcZTeFXnfZnafy5xE2gjjRqTv98v8Ywc3NTTssjuf1ZfNHdzBS2ky3Bu3vyBZQYQfqMecCh7Revzxqrr",
  "key31": "5qpvtMG2rx8p647p5FZS1fBDNJr2QEk5CQ6JziVfdfQvMUNz5eEDbSXRpNB3dTziskQqv59uroW3BiZFCqVNf5B6",
  "key32": "2YSak8R2nPDCd2PjPrGeorKe1duVjkEdAYw5fCbvUgg9G2GU1p8h8WuGsHRgPiD4wi6Ye6Kn4AnH7Fqd1DCVnMtp",
  "key33": "zdEsYNpEbyjuA75V3yi66hvSqkqt9vh69RpdwpBqXx78pUuif7nA7KxttsE2Y2tu4c9bXPnzHACFePkgrBSfrFN",
  "key34": "fP15uLR5dTNU3BoQTWpaiidmmYP2WY4STbxVgED4LzDMQxAmJi2ZRNs2YgfPLNYhkyPXR4HwkfCeQrTtTJDV9p7",
  "key35": "T8Vw3B61FprNNtyPTkeHpFQBbs5iUNGfB3NWGTiXrEkZmYS9uAtpyhbHeD1G8TwxqT6BnoRk7ye7UgtvxKaxGBv",
  "key36": "5pUGQcTF8jorhAAGkuYduSzsRoEsg1m8WRTinhMrFzDch66BCx9Mhcv5us9tK7aHLpG3xb3N4Rr6z6d3g5ZUDt7U",
  "key37": "5DPMLLpj1DDxtgUKQoCgsP19DHdTLrEn5E8hfbjZ9tFVFLEpvmkDQpdvx4ETE45UVKBG4ax88An5FAVRMDRWSLj3",
  "key38": "4iBbkHW5MkY31dUzfxRZm5MmBCqpgxPVxuevKimyNmALbmQKhJT8YPL9ntEtt4tkFCcMdULRXZbHsQr33RmXxbW"
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

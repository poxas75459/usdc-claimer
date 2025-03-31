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
    "5h3AHfDfmRk28VJZDUy7TCscrAKkhzESUjEEiwMD8KbTZj5iSZpa7hNXGaNRFRPSUk4o7nyZmX2HxuwqfEXcqBHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPR6THZqJ74kh1nsXxmTN2vwmdKL779AFMXdxJTb7yGzCRkQojmz4Pt8BrTbmXMwi6f2DCEuT8vPBbDzhnt53N2",
  "key1": "3o9RLdyCWZWurh7z4831kA79o2LUojL3FepHFtSYs1egg8LehT3NJfNGPgckn5RUQQaETiYpT7K6hGTpUzy6c5sJ",
  "key2": "414548NkCq5uTL6sgTZpnay72ftHh4M5nAu3z54ZGRFYQQre3SkJT926ZzQKBrLr4n1kcPak9rJsVW7GfiitegRv",
  "key3": "2p2tjX33ZyhTJdQ8W2fqfQBFG4kZ5aXg4zG1ugvkoXV8ENELmUyvZvMVZXkgpYcqdGoh18rpdDV7TDt1Gt2dWr3K",
  "key4": "3mfuuntwydeUUnPtMG4bE6P3EtGmNsQuEA2PD9pC5Qxo4dy6nKX9v9M6LqmVoks3JxPdU7jgBWXR3Ykb5ib8r4bJ",
  "key5": "62WBrVq3FNG7xiQjmYWfSLtUp13AYQV7zTNzGRuqr7Wk7Jg1DJE8JUoz57LQ9yPLCjYXKaa4QqSyjf8gTv52YiWP",
  "key6": "35zcAP4tC3NBVTsbE7MXW44q5jGAWNom9CmJRyvsfaYa4Goi7bWp5kyXVd4EC5pVuMBt2cmnfPa4xNVmB9LJGfgq",
  "key7": "5y9mjeETveYQmTv3rZmXo72rZ18SaewTqmrdk6gY9332BoxNFfghw9pLRHLpzDWW9gdeygsCUidxEw6FDEm1212E",
  "key8": "25K1AXHHFKfmkkqvkUrYZZYJLeHTzQ5SU5gVSmZ4PfoqBRRFyAARS2NdDreB32EhKtX72CyVMj6KVHdv4dq4y5g6",
  "key9": "51Zr4Npjcs5EmTLkafkJWgn6F7T2fW7Tgqr73u41cSX4GvPcs72rVQ5hktqCFCuP9nCUXPtvamFn6NiycGvTBZk6",
  "key10": "4xY9WV3dTa2n7ygQLNm1GncrUvC4sHmB6jjggsZ4jwpdoX2oMKFQgqYuHtMXWfhkx3kBJpW3gsxmq1HNBsMSZ3Lj",
  "key11": "4CqCsWF76bmwoAW2wAYd5BnNwF2SAQFM45vp9Tc5hkzeQ1yWCYvRWCZNbQzVGNkrdxY4vMRkXrGw3FR26kZyEa8L",
  "key12": "4iJQvJbCoVum6k2ykecMwHyfKnFrfgvTfeFeCDtUT8139G399HTcANFzW6VeDHP38ZwMgyCU1JmWrXTkQ8yrJgrp",
  "key13": "3soSSHmRCsFQdemHAiy97t8sH8upzueCPpRfNf6yvmQhtfJHmMLGHByfw7734zoWvQ1LH95bXhT3mrGq1gP35FLE",
  "key14": "2igfiXEtYuCmVhutt7Q6QFzq25ky9KgbR53FLbNZ7N8znro5amofroe1zsqQwTvyBC2NMPMM7b9fb4vPbSamUwDN",
  "key15": "335FkYAJpEHTN19M6TpFhBvMs3Ptdh2MY3Cd1w5os8YSRRqpK6ttnipde4XFbekoZVnmvDFBRg9GVySjTsC1vFXo",
  "key16": "5wg2BSNzZLc3DhgQ6wnb97VrSXG8PEtYu191k1PE2nnaru6dSpMqMSyFVGkwLQyTdr4D5d83uAtmS5Qt2bCc47na",
  "key17": "bqDpgbvStTCkfzDPvPsxb3TBzjf5kk6LV679rPgPAqiNXRg3k9AVSjnZo2iqaA2Q6poNhtn3HcMT2ZANyHfhjps",
  "key18": "4zdin76Yy1Z3LKFj7xwh7Am6HbrB9bGmoqcRRUUfSiBA625CcUu1ZZaRhJqzcTSry4RBweuswuTiEDhJsicwCF7Y",
  "key19": "2tFZNhDhXqQP5Jhmc9BbfoQMm77eBAmhRyfsuyaN1tRvZh3sd8X6pRrHtEiqPBod1UHaMLuT1ujemWyfFVxxPnrQ",
  "key20": "43hthEAiNJU5X1WZ1JtEmy4SvsEgs5MQjMwxZ1D5h7t4kkmisBYJYQmsqiLF8nANTfbwJri3DxR8785wBiLxj83J",
  "key21": "5Q6LjEAtkT7WesYnfZU9o6qgBhuUFuTr56wVBcxz8tXgrXYsDKftfhWBX8eLtHE799BLN3AC4hZf5Hn6BLsMM2X4",
  "key22": "4nEYse5zxSF1DBvLYgLJpwkGxxRDhYUEcgXW8L9mASMjWZRhrtuFiWHgUHZwQG4j73YXC4AwFwpipMtJyCJGQCwu",
  "key23": "2n4LwVwMMxSvdLetBiXiUcVZLchmRbyjW64aVJKKduMpGb3zS21hmintMk6YPMS5VXUVt7CS7jWwfmMuMGZP732M",
  "key24": "SmyvsPbPMzxbyioByjQGXotVqjeJPTP8Pm4K3kgRSG7wD2gEpECtb2QwR4SCF5muGe9L8pvKtiB4evyrW3WJvF1",
  "key25": "PqohBncAdtjz93uEjkpf6GBKAotUxWAszPQcbRwiFV3EcjeRJZvGEGYbRDu2ThCFJxM5suEFAE1WnwgvcUgz7cU",
  "key26": "55zwkJsCDguL3YN5cwE2oBBjKYqFo8bxdn36fW1KKxQMGL7hCfpFURBr35yXVMgqe1PmVtGxenhAe7fnRTo32JWf",
  "key27": "4QQvKaAkZJjnSKttrdPzwLn4bwpSCU8XMSumtj9F25v4yo7nt3m1HqTUJsJFF8hkxe4o7SGcNQiVmVJWjvQTyiDj",
  "key28": "5ojK6GGvW8SG5zWMurbaQqsS4tMy3Mr4nACYLa1xwAfzMBxrkmj4CFPSsnUtQG6dotAmPgCRWnp4Gc4Z2rfKGtKJ",
  "key29": "YyTw8ckdnLf5kcVXchYKYUSdt1iAc6Hy9qmxKPeGGeaEPqyyKguXCgWuXmZ6nsNqyHS5aFdTSbwgyYGFZy39J7m",
  "key30": "9k7wipetrruugappncSnXJAvRgV2SFdNp9FyY1wRto4695EHufuGvfera8DnxdDqMdojtEMPtwVytRK6x4L157M",
  "key31": "5wPn8khcn6aWRJaSYqVevTLCkVEEMh8SorQkEmYCKP5jNSjuNiRWW6isvhL2PEyNN8Jy3WA1Rng3LcRsH644hhrc",
  "key32": "4qCUzGhBvW5NsjEk8NUuhStEct259bi6Qvtw7BnKt5PYWaTu8BrwHsyXDq5znrHe14XF8ZRnHKXtev279mNKRqja"
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

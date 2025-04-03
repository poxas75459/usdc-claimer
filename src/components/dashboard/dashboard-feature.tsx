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
    "5238rwuV8evdqnbFF6EnQeQSCBzRyN8giGHfeYuoCxVS72PKVQxLxcP2EvoSwsaaPyHz5BzaCuaPWgj4LyxwGLKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUXaYJKWtdMa2dHzJsp2JY8q9NuhjX9dUDYSyxjUVu3Dphrs7breQ6pkcTHWGzd6NTt3gT4KS8ZG7PHruA3cn7o",
  "key1": "2k75B5uLr6bJgdqZRSXenQwGkjctoKk2uvYSeESEPmJn1GBgBwUgT4UvJpYXKHpmYiXj7uNJshfdGhLFZBYWrrwW",
  "key2": "4fMkECibbhvw59SXvdzNZSToSUogME48mwoFPayAtoSwXaKSJq6Ann6Bw2Hig3q48F6avZasMm9N8WAxmbvJWnG7",
  "key3": "3EZGghXLR3uV4RctHUdH8GfsTR3awLReBePZkjsHc7HdGh9dtfdRWdXknD5NMi4MZvgb2BH3fRR1WVikuFp75pdP",
  "key4": "3TPVSugvwAjZoSY8MsJmC3notdsB48iMGMrom4vmvdNc1Vak1eWBt7Rg1incTrpFy6AYzJMRJ9jrszGPEHDMxQfX",
  "key5": "2iEJJXQBuu66y7fsgK7yUNDmwBy11GzdG3ZhSnmtRGYfs6GZXgrDznvwUnngmDTLW1WBa3i2Qw8cwhEfwiP8FRsB",
  "key6": "2uFwVM91tL4Ka1pyqdNAaeGkyoigbFZFRm2TUqY99LgAZfRVt2dQTFgQAeoXGoDXTvZyLrKFABLvCUz1tCGtrDc2",
  "key7": "5F8mzpejHa8vrmJHz8Kz1959FhgnXdPmKHf5sBWtbpB2dhWdUe519GjugQvodiQeDceAQjvn6gXRw9RGf44mUypA",
  "key8": "2msx75YuTWq9BDkfN4PSxiv851EsTK6djzraJP8ESYeWrkPrgqcCwheih6AGyiYzPpDmi9sLbiMZf9ioiYCUfKnW",
  "key9": "4Nj7awgpHkGsc1LfFLV8J8YbaQ9ouzW531DRRWMMKWmovuScsutB2A87QU1wFKhncXEEvyWvSNb1gvgQEph5RvKx",
  "key10": "67ND4mmHGvx8RGT76bSfTNXV3cN6VzPCXFJrPGsx41vTdQ1wpuUTfPnceS5xDpdV4w6NqWvAuwzYnhPnrySmtSmv",
  "key11": "4xorQJQPqFnivUVrB3Gsb32oPrgBbMfK25af4Gs39vJc9Y7EWnH49uCRQEJ7SM5kdzLa7AfuHt699RYo5nhq2fsu",
  "key12": "4ZqUtu1Hb1MsD5iqGNE8WDVCJahC62LmG6S2avekdAHoJ3aiwTnebbvXo9aEQMJAMjbkdE3Aa8D5TDy8eacqmTb5",
  "key13": "3R5ykLbxKSgsZgumqCB15KXYJ53NEw562dsHxrFH5n116PeNH7AJppnZgLr7oUXwt4bD9Fo41qz5gFroo9v2BVxd",
  "key14": "n1mG5howdPzMyru8dXDv58LtiYWLYRtGHh5CZhGbMRNvKJpF2F5JDciz5ofSApBbiij35XivAhT96eKPh7jZ2Rg",
  "key15": "66Zkf9DcZ6kwtFsGAw9ABkshFDTfhqWYH8T6GLudYP9MkAxS7ZkjX3BpHJEcw8LF38TNoyt1YFXYnzKEVKUoE8Sy",
  "key16": "jwyx1aHDSxKwCu3BLJSx9jmKm1KaYzLAP1GUoWkdGpTx2pLnmELdgYRtorikbCGau9Vjp2nwZUg5cQcP6AD7R4w",
  "key17": "5FsQmaPA4U936Nzo2pPkgz7SAo4wEzah3ywF3KL4DG95JAKqgMGcTv7Zcgnouvt31GQ1j7bStN9e5PFWxr6RvFpj",
  "key18": "438V1ToYVfS6NmxMKBac3XmnQpFAKVAfxKXaKbVJyfmpmYGmkBHmH9YUf5tpW1fvQZAAjdh5aFE3CuGYXZK3z9xr",
  "key19": "2CsTR1DYPt2FrN8FKfeZm2gzXnH2y4J6LpkVwnQK3oc3V6keSStRsB2eE1tu34NAmkUgNjK9MWPEGHQwgke5T61a",
  "key20": "57osaPMo6Ke3x7VtB9yUFzPAXp4qM5Y629xLdyfBjC675ndGx5heeefaSv3uBVTHFnGireuyfYSYQipgvan9yKpe",
  "key21": "GiaYvXDHaV1Qg5d5Cw9CA46TDwbU2oAY8eKPkwVReKcSrR2oox37g64sVmJi6qGcqeyKEXRFyfs8CyB4MieSuFj",
  "key22": "3LbR5bngmWDXVHNnyKF84qBNiFXnQmApAHaADe32YEx25mv1CQ6gzjviW6UaWJ8NsJ66T7DNoi2NZBFNMbQ8oszg",
  "key23": "2xhNU2e1HRSHPMQrk7trXBZ6amciBt85pcT1MLP2vNghuBUrGUmpoCLzEvdjFYRmsT9FfnReQGABmmepdXoCmaXo",
  "key24": "3o5iKhLhd81n6jNvZmC8MA9DxFddmpjBdKQxdm7fWNHSrSFm6agH6Ya5UPSZzfpCFrsjDe8EtpBn7GAdxAFyvbMg",
  "key25": "2NZqz3T2nzUW7BzHzwaYSTUKmcQixyRNCnaKgKScmrckvBb8Z22SYzEnBwzT7iULK2xdYSpYYb959ygQGbWrqZrV",
  "key26": "5ESjBYj5NPqLFk3rgdibkg11V1XmuBqD2k3QKitKLsB8uxu4ZtaK7e7NyKJRyhrWsnYtqdgcBH35fBxepRbuo9XN",
  "key27": "2KiE2vR6MvCUeLLFzEoep6928CjQ1RC8daz7ZmcG97MfUbkLjZADqKseF9a4Sqbj3md4RNZAFVaKBBrdpDKZBMiW",
  "key28": "3m8JMruJt4bzex8yZ9c3hBCHqpWK1Ynyzhr1yBDkRqvHhMtNLyJaCBf7RC5DUtf7t2UDGXre4XE5XojzQxJrkqwS",
  "key29": "37RNGrQkU7wMxTybjkNGgzU9G7dpd5E8hV5qNNqod2J1H41Ta19YzeP2Riba6U1CNjSD4ZxMHW7gxfHni4vhjKjg",
  "key30": "9yap5edeWVfTYnaEfz3kDrnHeoUSxJ5TRvbhYUU32kJXkRq2Vowc7ukiWyAbeTWnbopHMSCYY4vCn6o2vanqK5z",
  "key31": "4ZBibAgz95ppmQobjkQnAZkoHCQU61xJn8sdAi6nUTW83d2QSjqENGEG3eQcm74EQ5xfEvJ378ZWqR8TQ5tMCrWK",
  "key32": "4Guj4ruSphFqW2nEsFCRLgS9hp8Pf3MAZnK1CgQmqGoyjPcquJzLJej3MtNPPkoq57BKLPqB13kVRUL1w2azw6hw",
  "key33": "2jNv1a8JebxGCWBPww1Hk667Jewi8TFvF1MPP5iHVE3nsp7PYPT4QTgDKAa3b3DnYC2R6Y7UxoTXzk4eZ2MpnU5m",
  "key34": "NopDzw4GsLrMat4U3uSgXG3JxQaEPuQfFNhT9mou6wdYhy9feCdLvAQEzfMEreaztbeMWJcox9TNFiiEy3Gfv6u"
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

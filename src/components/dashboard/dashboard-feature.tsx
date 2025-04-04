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
    "3twghDZJQ12JFCV2MUepjeNHB7GimqoesxCzDP5tL7LRTtdEgPvbkqctGmpB1U5rDWNQVARciho8wM6VLDKwrL1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vBvyd8ysu2sPPzfgYiMD4QNbLPZr3WPxCqZYpyQJaBwuQxfw6Mn7X1hoxPkRJS2UHeFuhYZMtHxU5FyAvTQxyKE",
  "key1": "5cKy1d2aX6sgxVWDvKZJCh5pCWCKXupoVvwtrP2FQZXvHRiRM9gcdNDD67nPqHzKNdS9ZpmLYXdyrTy3Fmhsg96a",
  "key2": "5VwuGtpyD6szDpuSGom78atYTDLQCq51rggS5Xdj1UV3SBKVkeLvriWqM3Q6Vq7wiRP9jbg2ZEBpiFFK8Rzc6Gfq",
  "key3": "V2RZ2op8Bwp7Fmc1D953wJffUK4xddDyQLk56fxMepizVDBHBNSvXHZBgUBmtR5FaBZWEMbxgfxnoruGyroLhqR",
  "key4": "3FckFosAGGF2tckZ7iuJssxzDGdUcsSriP6v282UrbDywL9yAxSeH3HaSBpBwcBjmddfN9dHvm45NzuztiFvbUcE",
  "key5": "4DBcMhSMpEunJbQESrUNB8yogvnNRwHfCZTbo4etbgWotfZco9JV2WWqiNeTTLNJAJbm3RG4cW6P1jTKA1GCCdDx",
  "key6": "4fvRMsLg7umALmU6KYnEAAm7wDdT9pRq5KGDQYgXZVTY3eds9RsUtVvDQik8GeafyMaA9E5zUXXvhg8MN9XDXJsd",
  "key7": "2V4vDfUwFPoN7HjiM1RWEpEr1qDnZ1JhWyv8e1d8mER75JUVNrSoXj6bcnLBnLdhJS2xdDCWwU78viJtxT27M2vh",
  "key8": "5fm1P1krq91GR9HQ5vAeuZDr1dEip1j4UynFokwtQVPMtdErYhii866XeJzdG1Siifmq2iSLBA8wdya7B6iBbZCf",
  "key9": "2U6Eq79cTGA8UcY2XVFCPSaoP3pbaw2rxyiKz8YuPegijqDyjx8cvDuibbF7JE59qimPeZWBBx281VJHKHshYfVh",
  "key10": "5ud6cnQLNDeX93LmCWRA9hXFWoL2LTshWnMY8hTFzzPtjVLbhrzLqAR2pSXyn6hbjgBdnrY9hP5NyRib4oYRGtJL",
  "key11": "4qM5hT4jBfiXXEzenoWSg8Eh9qxfbGxuRdL3eFeAvdgadE8YvjFmXZh5RXqhDWcAEbkj5qProtb2dqvT6ncYuePA",
  "key12": "31zFuHvKwcv5SkqxabEHHKm722VFvJxRcBonDWeU61oFAYy64YX8ynrYrMNGQHeCJxmStHw4RQMRYGxWVdvJCujf",
  "key13": "4iAfasNVPh3anAqFqiPrmpAJNvuqzG4uzyfiBiktjuHPbUpMBvNrH8Bk6N6AE9dnNKcAXR8dB39pHLJDppZXbF7f",
  "key14": "5JGtGYq3rfthVhEb7e7xQudRTPUFUQi8YV6UDE6UY3sXiYBfRrwjtjXcp7upxxf7wXsgvdVveiMQgUPKA8frV2G4",
  "key15": "j1onY8bGtQ7unu83JdXi2AM2KfUvWgK6QHBBv55UUosCoxvErZHNfEkpFnRe92njgQRd1nHxGzopuJKUa7j9STh",
  "key16": "2c6G6TNcTwYjxznn1bSBnC3pmPoAk8AHKBBgUJ7wQdJDmSvLu6skvW7zBUKKmfPMNFALDgqDjYNfyPBiJxpPBwNR",
  "key17": "2udFpXPnfQz6VEzEEgnbAbskkqTY7UFC4ptB5B4vwAHMFg1GHBQ74SsWgz6JrwgZeh4QGBCdbV9dpvfuA9dYpE5S",
  "key18": "36E5XzKRDCp4gVqYxPynPow4NhsCvNsRPKPdFniVjSdojMNJazMr6AW9BwSPMESqoXLJFsrPWLX8kUUvdwB7W5xx",
  "key19": "4TBTw34v15ivJyvnJP7NtBjheAesK3BDh47x86wqZGr4Eh3uCKkU4C6NTxAcVoeiGm56EsnK258F4vkACav7mAnz",
  "key20": "2NDS7om4Y6hWEW7RDHyEzFRBhvN6c6MFLMxEW6nehHa2Qq6uvBU9GNoQZjwVn3NyV1T5Cx6Pcs3FJ35YrM3oBcxG",
  "key21": "4Eniutpn5PxhS5bjNtgEAo6E5cyUEr62pXVN1TYTeZn7C6XHTqCBt86qvQWBZTBoG17PwK3j59bfDNaMeb3bgCh8",
  "key22": "5ZXe4NRjn3nsKx5WR1qa6AMXttWJrE1aY2USj9jW7vw5imYtrCb1FkxnihJiD9CbwTusGuUzJ95Ni294LQR72QjH",
  "key23": "21QgFFUQPm2NMjUTKcdrTPe8BrQgqa4w8XfJMQ9p7vnepFATbFPzLpzQnBKG4ofLbuTy5rjzpBgpzeH5DPxaG1b5",
  "key24": "4YdBHWJmy5PZqsDsTzre8JbMPFUibK3GMRvt6mJy7QDKYSLz5djeUdeW4DXLSXKaX31WwZMgGThc8qQAG4yU7dVk",
  "key25": "rjYZUxvEGWMnzNfZCGBK3azL18nYn9VXZVGpTovkd44CCtdtLNckG9X4iJ2bBCijboVEXiF281Xp7M1PGpRDEbv",
  "key26": "3t3gz6AQ4fpz9Lf5eDRCzWBftVDMg3yjrfG3Q2mmSJ1ah5ZmHSKWHwkVT2AN4iPH1ApaHBAUQMAs9YqeEiSmjS75",
  "key27": "2QjtNAyngzdshT9Qe4osbu4KvA5iT2MyQUegEhEKyjFNZfzbL2wDzKWsUdRPKNk8Shi4buViu7uvkomDRwevkV7E",
  "key28": "tYfoXMQSDg19EXvPou6F2nYZi1yW51D36VsxLQegmYrvyGQx1BveGgVtjPakUdu9E3akJP22cShTppsJAY82uAc",
  "key29": "SDKJCatEcjqbPPKCQsTC4LrDyUoWuvQdLQPuvX7A92rLoAjuY8Z65NaQBMjZt5Tvpfujkd3qxh2MTusPWYbygZD",
  "key30": "2tTktXH6vQQ1xx4f1diNiUjhrQXAvsJnikfvBX4F9KconZzeYPibd6wkHziMsaJxzDDMTrv8fj9sVUZvjhQfJrHw",
  "key31": "4GiGJLKscFdFh7934S3UZakFySW8Y5HVGnAY1bFSJnghfxaybvdCPKS3CLyDLwkwVyfBhM33fZCTtBQDyqgJE3tm",
  "key32": "4w2AkPPG8oGSQvegNMgqd4x4PwfqoEXkmTuQftbXMQSQTeoRZnfWViSswLPCuewau8ipM9kYGfe8jsBZNzzgxQsh",
  "key33": "3R96CqLiqYzzPpXJhC5t7fetdBrM6jnrAycQfA5JA4kmVvMY8WVLr3MoLxJ3QtDD8Gf5Vz33Abxdes6eYVKoqAKs",
  "key34": "4SmdZQ4wySkZzmtZdQUDTvxSKqpPNsj6vHb5b2m46aE8mYWKJTmfcYUMqSrhdKpRn5gYCSimNTWvg5CjMyEk8Ygm",
  "key35": "2qXVwZyrg8v57tRMs1RAQY9LRKcSNM8815qaWUjTRByf8k7KQTaoVLD2T8hY6Qw2o4yRiEB7VLbF1YfNPYy6ZswC",
  "key36": "3d6nG2XZRU2FHkmT2Q51pNGZ4d6jqFgbZsohV8dqWu8h9z12pYwb96A5yhGBUgr8kkiasT1k8ddEMTQnpxWGU55K",
  "key37": "4VxM92j5vUDLmAAnW4fvWm53mQNDKD3ZdizPBVem2mJTpy5qZzfvZL1umEQJwRWknhd4HqSf43mmnipqGMiEyA5r",
  "key38": "2SaKZCF1VkMLHdP4onhdU7AmpLSYa3BE3J8EFnypfbJLhdq7ZLsYMYuTTSMZAugaVbfPFHZRPFY72Uxog3YbqrXX",
  "key39": "5Uoc4MRaCUGptP5qKCHWCnBX2bNAzpG8dgZYyzuHVf8VgowQkgNBcU6QbdpNvDjF3X7HFFFusQd2ipvnCK4cxC5y",
  "key40": "24McSxPwqmPLLVnoxey64Ddcymh5CoZ3UvEhMkmLcseh2it2P5XgNek1ZTUka258FyEYy2BGuPDH7gZojMEdKrQ6",
  "key41": "5sEkZ9afJxMybBoyr1wVeiehjHMejAxU9QdkCx3tGuvbZnB8oTUmKbrhYR61vaQjsn7V1G1jBJZhRBFFLfvAS3qd",
  "key42": "2yNGkR2FTtQqdFkNQ8hWcT85oWPu7Zw2p7x3UazJ2wwBnR7Ku5TgDqTQww8PLB5f3t3uY8RGQf8LfQTdMGhoUbRD",
  "key43": "5YtY81zC4croHmc3qqCuGp3p1dEc6njwDuC3kP1asU5nL8dY48z3ZLqKkhhJasGKRc9ADStiv97YL44n4JpY1wbR",
  "key44": "MUMcz2G2tDrxLDFKWwHSgLPx2hWiryVpKiSvEJ4DUsNHDZeN29JMWbMM2HMyWt1Lht9e5Co1BUnCAhLVB5bTH1Y",
  "key45": "26dZHMuF3Uo7rpCpT2E367PjU8sw2ixHAU2wRQ6WzaSkFmGmMFoi7wsgXi5dVHy9J9NoRXHSxztsv2KPEErdGi6q",
  "key46": "34tovK3BM5c6TPXdqFECENauNsUkipqCUytuyX269jtcDLk1CHA6pEZ7aqTCV6tWLZvPD8mCmAFVENe6xUUAntxF",
  "key47": "5QzW2AXnxPyond8cw3QtA8dpw6U8fV9423q7tzqMAMenHzVmzFpuDqFjrwnBBKDv8U13h3FL24RSvX24v9YtXcGy"
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

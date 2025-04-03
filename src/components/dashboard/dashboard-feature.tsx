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
    "5ad9w7C6shGTxcDh5A82GjFVi2tRtYsURxzRBrXyDa5HUtWZA2gC98cKjo5czzSQXayoVquNenhf8BCAX5ShQMVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MH3Jx5xZ5w3ZF7XZSnhVgB1uq2aaBtDqZ3i193cNV463zJbo4Df2QiNyfjjeaFwhGTMnU8mU8VrD2BF7GRP6JmP",
  "key1": "5vHPPhjScSDGdowksVocTZHLdSxW2qY2VAsgmYMFmDmxFAJn2TUQqaSxrdL4VMFdJ1cZdDwRpGZ1P8izRx82yUYg",
  "key2": "522vMA1FBfcsV4jH5MV6pJcSo3WLSytYYu4so4ixXaBYNMQPv8ZLj4ZRRGwDNE17nwmBx718vAkqudF5PzrwpKMT",
  "key3": "5WUv47rfv7jKkoNitBMczPkaVm6QTWyPsfLD6FLv3YW3WreEzhrLSStJkvDxvFKrcSp25jsRTtJw91J4iVqNZLwy",
  "key4": "4d3P3GjHfw7bvnvNkQ2sJdwHxKhDXr7qTxKA9ZY2rzXjqxuea4f6fCZDMNR9NmZoftk64xpz3bx6eENagSFLqXzk",
  "key5": "2dVWsvWxTz7d2rCUBFmDttPWSVCSfcJd8d2chizf4UKdeSF2yKtd6SjoRH8YaaA78dtHRjDuZd7DSeFhSMruuDhc",
  "key6": "2PnKPSM6oTGLB9q2KayjThDhJ7snzK6YaCYTd8Px7yK9Edm92fKf371t2QGaWL5h9SGB35zwk4vkh7xELZKAK8U",
  "key7": "28BcYEZHF87CFDhHJfzGPfUZ9uS2nSw7r7mePszhr5Fa4idrc3o1B78uu7HSVw3LdnKECzETPWawJV2oVBj64iC9",
  "key8": "WHdQxPXPDcaZUaWXgZZXGBwfX5UrLxM91SvyxA9i3tUHS5AGUpHGGFTgLVeS5iw3P1MXV5S5HTtjDsessuegUcv",
  "key9": "2ZTmAYZDV29T3Em73MwiqtA37ZMLSvPXLryu9hTpAaoVkGKHCgasBbkRZAs1CvDp4sUjv5wGyCpmfRRkM3tF8V7m",
  "key10": "2jbDfXo1RLvW7sDAVc5z7qCEuWFNEWxDNu29b6fqvJ4bsiqWWzhyigNUoe5ASiMRw6ecaEfDmHMs7S7pEATMT2hW",
  "key11": "3Yax7RVpS7BTgumtAdPijQoh6NKpezHhWY4wuL8C3dUtkiB1K7m3DFqzzu5tQ6Ywm7fv1Qwkum6NtPsiDamWPYc",
  "key12": "3BPrb9iZBDmt3Dp86Pqnt6xQjPcXYk2vngAg2c9BY92eYfVZecQQxE9Ef9copyYGdVjK6ca1fsaB41jVBhUg9sxN",
  "key13": "JobEcxvZZFynyfH3z7vnz1JKbVrcmrntyCKPE3WnVWUuT2F4gDHCsBmVTCaQFrbkgFazmKymx83E1MmHjxLarod",
  "key14": "3o38dkgdXQaRMFTPVQmcLA3ErZnNR9ExcndbZBAghN7qgscQcWHXixm1qE5jcY43EmaHCGLs7jHQsYz5TMuMtXxi",
  "key15": "2WFSCgQvPv3q9Hr5Con5YHTjkXzbymJkMGWpAH3GpxtpAYacxeRVy1cx1HXTANhEW2aKKDRKLEeqVYy7Cw8jf5cM",
  "key16": "4t1VuAeFTR99o1s8bSiDnMEkgQxPNY2bXLLNcusGgA6XNTLXW27pu5xJWfXrJyB8iLd9hMvCDMsxs2AKuuhmgphS",
  "key17": "4dHYj5KvExBGSsRxVWRCR8BvG2UcLCKT93GGaRaAMarx9wnQTR32hrBfM1J6KfmCapjq6JJDWyhE8zoRX86KGDrc",
  "key18": "29a3b1tXDxhUrEJFByzAf1JfpPfx1SmfiQQw3SiSmeb7uP7CrgW778YxMbqJhKPxtt8gvpukFWGEmdzCYBD2Zx1P",
  "key19": "2biV5n1AzvKvC3W9GeiCsGBkxRM2q5fYReoCiSaKdWJM3zsmbUtMU6H4SowVw5Sqkv85GjT5xPTumE4iCUepAeyp",
  "key20": "WQRkG6qFfQP4EQJTEdscSR1mkM5n6fZbeUh9EjS5HRG6MuZxmEQBkP4jLnEdth3zSGXGw61tpqhSXa5CYL6rTai",
  "key21": "2DNVvN5mqHJFeHtQdkbejhunsUrTGYfKocA3zQtFVzJzmkFBmUmxhzPEAQfcZKH1jwexNWAe2ESs4ApXRojxZVDZ",
  "key22": "518oejEUtzGXrdFVdJ42Ej2BfFqFYJaVx5vgwcbSyGWfUQYoKUMALNPvt7vNkU3BKzcrouZM68xnnfUWzQyGGudP",
  "key23": "2oCnLz1FZ71XbtW1ZX3sF2Qn8sJEySKk152ngLjiVhR1or7TFaPReuZAU8iaRcsKUeUbFAnE7vRegaHzQMJdkpKu",
  "key24": "2LVcpmpE5qYfNM11ohCYevbq39MvUfkkNNmp7vyu94asz6Y9u7M4B66Em7xUY3ejgRCvr4urp2MAWHascaUreYsB",
  "key25": "xpA6CaKHyJHRLTjPhcYfLNcWzrD93if6qjZifUb88hsZVB8EmrpeMdckGLbMBq782gfH8bAoNtQDGtmhs8mnRMA",
  "key26": "2UG9Ga7iYs4bDYk3CBeniM8HfwfkfcSYYpRxuCxxY1DzS7qtss5Uts5T8pRN39wtiJbR84eAdUVFZ8J3f3kaKc7s",
  "key27": "2mTeE3AVWmP938iuqgVdZKEYGxxTkF1KnAX27wdX6MR96hVcousfKGdc5jb7ju45b3YeMTRakfggBC67bn7R8GTt",
  "key28": "262SH9WKBD5qbB64aVeagfecBHFShDTajnqGnYQPJFyvQjsUMDzJvDh372nM7KDtM4gZLgC7jRHvEnHbNf3pjpBf",
  "key29": "2zEoovDdkTiuKvB3Qd4T71GXa2ynQY67VWi3nEhukbTYqsUjJLBx5bgp6C1sJ2yWDigZzFCgi1rcrShT975eo6Gz",
  "key30": "2tqCibRtRLAVA8moKZB7tuqjYHRhuCcUF56beASC91BxwC7H7qah44LVY2w35Y5MtLbV2FLHktgHS2q86KeeWa1n",
  "key31": "4YceyUY6VpHpsGRTSHmLFuaLBXvEfX7uayaj7e3FZbEzEzKsXL3nBs53NczsUcm8QwvFQWs5ukAACeJrrobbq8PW",
  "key32": "5bGg3otAcejYr5SozWragRu1ptqzWwkXBXkDaFriVDHrNA7HvMqoppMzMaWQxwQVZes3gp7ZSWoM8185bzqiPwFZ",
  "key33": "4LHDvnWvJvaT8J6djfNvWT4kNiQSWAd7YyM9896S2mS4DLAeGcP7RjXV4CTprYukNbRU7z2s7wpQ9c517sGcyBLP",
  "key34": "5ivCFBaycgRGhREMHg6CCcySh8uzZ6Arkf78CAS21Syc1VM1HohvkKZVA7qGBq4mBe5vvFKEX6jA7nd2TdRVL8Kn",
  "key35": "4rKv5EwhLiVvGVdsbhbifhgNJ5Y4WZ8wRXw75QsKx7UEkBHYQicaBmkGUSvg2XRz4XkAjkkCm6PVh3ynPqSviJH5"
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

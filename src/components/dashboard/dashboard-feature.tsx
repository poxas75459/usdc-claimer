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
    "ZwZ1xiNbQNrArmmhLRB8BnFAufsrkW5E1FTmqSgCyxFEWsxE6dJHFVQaZZiM3TSriZHNEJgZz4P5pZiyLPm3XFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oGUddrfE16Y6pCve92CAajzUGUbrUD7TX1kz1EFxQXNuKPP2TFYBdSYZQh2NVLuh1pBAbNWVfCTgDTzFzRN17Ki",
  "key1": "4aF8mbWP6ht6yhsFXeXV6ob4DEGz66ZSgxfYirPwfncd8rU9Z4wUZZ5DR1KH3jnGGN1Ni6r1vfotr45BpNM2x5op",
  "key2": "4vNHYn8kkFkWAChfa4cwGt1i7ynFhynasxcNVYKAhcdWybxwV4vRixTCbenmWyBuSo6PQ7hTqobT8H4QfhVA2UHQ",
  "key3": "3H9qPXVnvP9Ju2XNNJKAmtjdj125kaq9X1moB1fWGRBAFXoM9XWPndJfzZk618USPyVy2GYFKZNTfAZoV8dvtYP1",
  "key4": "4tx27KexQW6JgfPTidKgtkGHypMHRaXzB25owQK63DYcwfZq4oSU3PiWafR4Z1c6uLrDL1LUagXFpG2AaMqVhs8K",
  "key5": "5n1QJns1NDoNcTyGCB8xmNBLJTmW6UW9XZcMwkJCUf1LXS5cYwwRXeNtwM9eMTAxYD4iQRhEqaBvkbnknvapvxq8",
  "key6": "5sSYANMJT4zUxLf5xTcsEhgqq6wWNwKE1DaujneZKRGiToyMj2auHzvWDoPScdQMs85EAHj7UekZE7LVHs67rocS",
  "key7": "h8gaaaHKh6NznvP382AgKQM7zXhM5ypcJN8X11dHLAdk2zLm9fgGrLagedkCAYRxLx28jyUtbpdzLmUjpKP39mj",
  "key8": "3X8MXm17V5mKK47aKgznRjFF1EaRRmuAn9Sxpudhq6fTSuXuZUxh6hysTDqqbh2KnNc9Cj5h3uxXTEzw28krV57V",
  "key9": "3o16y7U8j2YgA7XJwKENWX32qqgZx5Y5GFceaBAbSVAT6hD89d3qREvSvRD7x5SCFVij3SZrCdfJoGfXKnb81dAV",
  "key10": "2cdX7Y1EvCBBMbpABL5JzaBoxHt3DvXmFxV1h8r5ouSYTezCUAai14prLuyEc6zzyHoj3G4EpR9KuLpM5FifTErn",
  "key11": "3vYwtAs66mXbFborkCRiPCQuSHvw1D1yJjZ8gEw2qFJDvT71UuBh3VW9DT1nqYJDagR2Pd4Cti7A2Zx1mqF7adZQ",
  "key12": "2ge1qxWKa3F3kWihT7BFaTvog4p5erijKVPH3EVE41Wcd4U1UJq7w95VmcB8GmEDRhHAtiayr46Z8eMP8Dv85rFp",
  "key13": "5SoCbQ8QBLjP7P9FrQgiCZ8LUb7WhKyTbZjKiYsrQka4HFNtSdXrjRpUSkNzxcWdgockmrA9xfedR3KR7eC3pKoH",
  "key14": "aTqdsYrYLXpqCSfsKa5ubtjyfqZB2NrnWxogtrMJPwYqFVRTFpXr3ZJPnXJS2MbQ2NWFdSPfdzcUht7TPzPUZmN",
  "key15": "25YB54w7aKLZP84w6ikQUTWc9YjhgerGfRzWVKqEuhV6XqdCfw9JDgXAejnjzTsbnWPJggakoW4RgKnsybXtPQN5",
  "key16": "3tidPfE71HQP5LNBc6mARsv3TW3quikysM467YCxhBVshknXDRwpiAtCZrjKE5yhKVr56sLoMJQqGFk3EutgBd1o",
  "key17": "2cGLXYATvpBRrXTPxrvXx8EJUZbwYXMxDK2S48a17Yj6FhhEX2JJm8KnYM8P1WHWb88xkfhzwLPfbtutvKyvL1BC",
  "key18": "3xNnGKG6KwjbE3295qtHaJaPzw7FjXoLqMpFLwtHqcRdWU9oEHQhgSsRPXTdfeBpzfr5cJwgULB7fuVMPEEARUew",
  "key19": "5zSycm67H3Vm7nb8wJ83Gd5ZNJ6eN8xiK2jMRsWbtnRthtMSG27VH9vSXoBJjPXmhv39L74CF8pAA49ecEWPRMVZ",
  "key20": "2ieY21e7fTKU3qhC3qRcXDgPZmdayNVjRw92SJsqtTHNxTVzEPnMp5hUbfCDAf88DNQjfJsngfTUq6A6N8K8XGei",
  "key21": "565BZoFxDweQ5ytwimpHPmGQD8TET5Rvfqqo8PoFetnjz8ruSJJG8UH5NzFNpuDoDq2EyJCWZmnCkYiABv7ZpSMo",
  "key22": "47oAxqxkTFxKQZoK3HPnpJUojtRMnwSHbofMcDs4skGggK8Qq3dqfEeyUW8bvnpG6txLyHRvVDFQbJDz9nD81dRZ",
  "key23": "2tkkDwaMAdnRhN6agYrDudq7bNZexKuBUUPraD6ZtC2egcd3LZpie14ygKiTutRGoftAkLF9mNX7VBQxiznrgzj6",
  "key24": "5eTcs2D8bwvH9pUoXkpqgYAfJRi6gt3GDzYFUonWCdwTQrK4bE6BiVi4DM33nr4QmaQbof1TCKvCuJG9vjR9DLa8",
  "key25": "2BgJfJ5UWwWEQDAurorDnk8EyhkKrVgswczSwDiT9A6mtaznXbHQpGQFZhTdMh1QXQrvpU5593sFitnpwTpF4iSt",
  "key26": "4pqJrmftVYD2nwkcSbg88YtNKR1BcL3Tqxdp3sgTLSinfqkHvT6tpTUTvEnxaXhxhvJ3dE8UZjci1iu8LnyALr5T",
  "key27": "vaycDg5pZfYCZB61CN6NKt6aw5LWzuFMsicjdjjS1uGEHasoghJxTZUAyMn5HXWF1Rsn5uh6a2xF63fdfeh26Wj",
  "key28": "qoKzwDu6kYniwMLRwFLBtk6BFjUCiDVUxHpV64tHrrzC5dkKwyzdT7thr9LYqR8bkXGsDTG2ZTFQ8XbGqTieE9A",
  "key29": "4JGueYFYjAMcSBQwdn7vPEKAXXvhpWHqcXvCKMsnudPRF5NcXoPWpbxKvPDjueGTnp542pXjcuNgge3R5i75hyLX",
  "key30": "3EW7WzUWxEen4so6f3qoA4tyKvytoEvx6DDXGLWyZ6kjNKHaan9V3NJYvoVxA88zG3iGtYiSXmE6o4wzb4eEMi79",
  "key31": "1AC1p52NwWbNCk3JT4R3RmMVA7fS8XEkMMHeA4V79sVgRvTtTLHPZQ4idz5X8KT1hNezv7Z5BRF9GkK3zmMUxT4",
  "key32": "3unP3Zp1AidWtPJHKXXoqSrWV9mLf1cSsny3tHRe8UJhjzLpVpC3XEwJ3rkxEn3hZwTfKAn6VTr6vKzGQXZ319R8"
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

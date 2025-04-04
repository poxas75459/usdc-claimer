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
    "4NDox4F9FNZ7J8QUV4rPy6ATEAgb1b6BJJmrdC4WEF6oh2kXoXc2VQcyaN5FvjyuY4VUoDRRneMWdohwMYMSenmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "661xv9yCv5oRRQY5inSe93HP71xFyg4HRWh2GxvbaDjmMcXpp1f1NdEMLoGjZDiSuMpRShfuuQkyRbWyBPqdy5FP",
  "key1": "3sqmAtJu1xHmRZ3KzTHPorWVHQgbrzLKJbzdzormKpLxifYzzdHCk8XzDusS4rB2TXNf9SqRKTaaAWcv1BFoemiq",
  "key2": "3DX1Lh2i79etyEnipYCnBRePjZUMXtVuD6gzPpgJaCsYcjHwvHYfxvrkBG4mAu4bWcfFaMM7gsigMaCfqpPFhjNH",
  "key3": "L5uKq1UgvPgfbjgErAPRnF6Ab1BYCo3A6A25hiZ7Sjs5UqqeCJ2xRXgbT8APeEjNTSUNfgm1Bk26f72x7L1muaF",
  "key4": "4imhK1VGr9uRVWoS9FJDG8poDDFJiPquTAbdXvhWYvUESCLXE6QNSRc6YwQrg63ez1JGy9MQGR8FYTz7baT4X3gL",
  "key5": "5tabJFnt7XLGzM6QGSdVjAy9VkgU85opqvPUYmcCoav4vMGcdQs2zH3trtkzzkyrdGUdiitECsoNxkkC45iLppiR",
  "key6": "29zPmU2nBZT3sZ3DBARLujbnGvWydRVRT3TA4VTrpbNUj6jFTCgb46219Pu4fNP2LkXX3HPY1eQ5uvoSgyKL7x1c",
  "key7": "3AAJSozjN6oDBbfAWrgVTcd6Qg4yemuEBVv3TNGdBdTh4GTDwx1gx5GfwfyTRvh24WWckbGVNttQkca9cGs8SHhr",
  "key8": "3GC9ZTTT8XMK1nkoMdoxUHygaoGF1stivVyc7WRuuevJTGaMXtY66pdVRuGGbSupGoiqSZqsocvXT7Qria9NkALh",
  "key9": "3jiJCrboa3Je833xp2ojGqZSWdF1LpaBnm9p8aaeZzuxkohbY6cQ3yQJsYvzihdk98ssLfvurPkQjvmiRmA3zrWi",
  "key10": "2pgSJhgZS3cgWBDCsXvStwLqr3eC1GkRXbtz1SFU4gPrPZBQcLJ9BXRJQKTX4oMyrMgEewobmFd3ibmYf6bMYM3C",
  "key11": "nz9Z7k8HemDWKcBnXFqoTnQ5XgrEhfdxiHbHNYnLTDdqmMn5g1Gv4fHNotgnmfzEXiFrtdJxEWpVJwrutnrbNxg",
  "key12": "2DGqHKxGkMBKssSbzXJqvgJCJCn3g6M85T3vgFXnUf42hQU942r1DP4ar2HREG39UcVajLFhyPtqJ7QkX54hfdd5",
  "key13": "2f5EQspXzpwBN3XMFGFnSrHiBQDYspdimJk4Hum72jjmrxf11JPcSfDCvUyqwaw6NEgZwMvpzYuXVS3KHmUUFesf",
  "key14": "5b76ty9Hf5u7n9vFHqCHSHhVs5ekuRwxni3VgRnSU5QVQFo2ELcaLXCPFM8jkHaE1Dp288hU5VzSHuwRGsZPsTdU",
  "key15": "BV7WZ38oRPekQExzZ1KE9bCXiaAcwqN7323MthvPA1xbzUx9qrjXGuGHQgGPjK3Ybi3741HYCYy3NDFEWHgX2L4",
  "key16": "53moqpG9eoA3pM6NrUKJYD3UZBFraBeWh2NVarbJ2nu6NWXQKQz7TPZGUAmdSr7wQCFUtNAeTdw4ZTWSokwxjCNE",
  "key17": "2AyAFtsTNwh7injQp1PRu1gCAmAngC2L4Mi3VgkyqjW796cRhPGtPGmwyJZMWqh6qodeux69YfuyYrw7KZjJLPri",
  "key18": "3EADXhcXykLHRk2x5G4a9j2uyEkw3BoBk9rE3Hd6upYy8FPtHiW93rmRW1q7U5tmmCovra8Gy4wqXZ6rxyLpuzZ7",
  "key19": "JYHossyMf639c1seCcDW56ZgWwEtvvMRJLKb9rD1CzXbswY4ofSNyKC8pGssqyo9ZSUGnWw4nLG94pGCwBfrLa3",
  "key20": "4JmPxYRUFQ7Xa6gWbEw7PL8eVLXZaiKTQGcJcWrxoYfZ9CAWQrMk2j6gcemERWXmh4mtMtdQJWjxbDDXsxN5X9Cm",
  "key21": "5fy3gnpWqJiapTzqnnATNJxKCjvuuj3q99fdMoKye6x7NRxNEKyxrv8JA8JdbAeAQ3DTi3xxuVcc5HSPjqCqyapN",
  "key22": "3KSyHvrzG15XJiENa2NncTr1J1rpMdVCUXjR8Hj718FopmbT6QuHYDiW5rpSCEBqwVjg2NUaFrW4nTcxYzVFkj7N",
  "key23": "3PgwZY9hKDJHhyPRtEJCddozgH8B3bDUzu8Nz47YJiq7x7F8ZZ9u3qT7x8XADMqHnEagMCsEEEraWdXeHtqQK4V3",
  "key24": "4Ed6bTpqERogfuDByB7KcrLJTu1FHZG8uiigz9Qu6KfW32GbyZxCkBGs1nrDSjsnJvX9qzf9BSX72E5yuKRfaxUn",
  "key25": "3JbVdqUyssYG4hm3Qz7xwtcgcdmr9h7d2QjXPZmXEYVrCEoq5mbYacYAXDL8XTkp1koCNxfxB8NzDcJXNtfneDhJ",
  "key26": "7wDo6zdGHkatM8PmJeKyYV5GzhkNjNKX75fHS4AHSTyv2Nh97YgpWaahuN9DXS2kSs1UeHqFFa9jJFLyPU9jx5h",
  "key27": "sJp9r2rZnLYJNZmBQpzS5kyqbTZzGyXWoFU7qEm5ggX9czLWzWjrEiiwyEms4VkmU1gUzVQFgVcPfdzLMbgrFBc",
  "key28": "3xAEgaZ1WWgazioJtXzEvFLKYg2kayvXG14NFvuqyHK6pWxzdnd1TvLCaEANSmRrVoFkHU8qWZpkVfjjUDih2MfA",
  "key29": "256ZVyRgefQUKoWEg9KGwoYNH3ynbcdwGvpMuL2rmKqc2MbGuvrqqSjLD2hB6AX1QDGeaVByJwNS5sfJqKVZYagL",
  "key30": "3uThALbUVsnHNmmUacDCXbF8hAM65pyzJeDXm3GdpWgLXxFeX6wLFB43BeYiop5sE9s6VCCW9xUBJXbzpM4m2FRs",
  "key31": "4coYjY3ebJ8vyhDjMiCLRvXfgDdXLSwUyxudq8MA36Y2aPdiyu9TMPkHcyf1PqQ77XdPMjvQQmiVtr8SgvWQE8P2",
  "key32": "2z4c2NT2p2FopZC1u5AUhXPTUt3qghe5wcZHjzsEHgCbVFK36zBtKNpqDu2wbk4Xy1tSPYgKYL1T9HTXKPkQAdXa",
  "key33": "2RKuSKMRXC7d8PCo7krk9YGRNga3yhS7a6MqSFawqtB11D3hYViJUyjtXnwoFhhpz9T7Lp8NJUZKyPxz1PRvXBBU",
  "key34": "4FT2uWkD2uiMfGCvGZbiePZdAYvp7F97HwfrDRordAbdvNQRYBJpx8YFhPFADC2U8iq286cP3gkk16KVXNnNWSbG",
  "key35": "341JwVtvcFxB7ow1rxdNRL26LFtM1p1tqeYXPUwdu8V4RkeoLeEWR9NsUNRYbkrHsYriXCvTouW6W1P8WNvxpULa",
  "key36": "4HdVF1UWWAEu13Pgjpo9Jo9PDu7UgMWtmzyfBQQxambZZB4n5xpkoKLjFQVcxCoxjcgnvXtCwcsCF6g2yggtuDFf",
  "key37": "4uL5LZEcnnd7PDpJKZ2NRmUJqaf76cWpjtHbZAnaV8qsrKXGth28yriPXAsv95MaAvSCDAu5twpd9fZu6Fr6UnkM",
  "key38": "3Ntzp5XN6iGe1Hjt2XwguZbBqSSMhMDkgeUQkPjtnM2WkHPDfNATNdPyu8PofS6yvBB78dG6TdjCoKSxYfUESUwM",
  "key39": "2wXCJzBZgrReGuwv4fMFjb2kcaj1wkpagdNe1mprMS2gQ1ngEqxmk1C79T66pevubf1m1RxbExQQGx9b2opfJU1o",
  "key40": "4Z1wcayrB7A4D9LgqbUnS2VnxWY44y1oYVB3BrSuEnrdiyEFfVtQYALubrHMq7pJgsmvi8FYS76u59qSWKdT7CRM",
  "key41": "5RDR13nZWuWjDUqLhQvc9JFChMQCAg6KJ4Vna7AEvAm5CEjPzN7iLnJNoDsPW8ioXsQgJ2fMrG96WCepXXRXEra",
  "key42": "2kFPrZpgRxHFpcXGt8f2sptzsGfgQDv8jfXnwp9iYWgwiNi5N8gQywgdLB3MGTxb5XtPkbSuhEbcT75X1PvVBZfW",
  "key43": "x6yWczDTcMP9vZZzySnQjEHnf3oNtUj9vfzxM7mfatjtSbn3x74uDQLBRrAp99aWhrkfHkynrCdFrQsrAeRDqdN",
  "key44": "46AtB6DNE85MqQF4WusPa8XiFozY3SoEP3Zv37nAEn6scbqjxyXkSeVAtJsWoph4wyqyb6E2yc9nzhRh7N5mHZmP"
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

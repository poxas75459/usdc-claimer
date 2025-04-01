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
    "2KZ3nePUcGPUSXkz6w8uAo95zkYzSeUmtx9ajcNxtSvyJ3zgNV9W65238UMqSpMN1an8JdaAhDVUZw45JyQPqiGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApmLPn3XuoAbWhBCjyhbjFnw65AQCqmYHCdcpwtYR5DQzNaooLFAGf3apfNPn4JykQfDSdrk6TjY8xn1maTYrMe",
  "key1": "3Qgrm9Wjiy6nb75CKyDTBa6VWeDgqFpFvjhCccKejyTifDiY7ytYiMzPsYNSA38rBdVC2yFTXtPsj2wvLDq6rwQD",
  "key2": "5y3Tq8TNzPUxaZbcdy4yFzY1PGBECZY5VDfR7vrAVK1W4uiHgfeXeWsBBmKWjNho3DvHiu2WmWtKrbCk1NpRAqu7",
  "key3": "4X1p4nhKE7Lk6WMR26cLnpb9Ze2GejL6caxaHVwCWJP9YqQ6Nbm36mMt3bdZRgtdpwBxex8ueB7PK7nFz7pvGeS6",
  "key4": "4mCDzhju66BBk56MjMFzFFp5znnEFJwsm4diY69sDF7pKh1WFUwL8E4MepxRJnhEtbVK3LTSWfh1x1vDZuJVtYJd",
  "key5": "5mcSfyc6PtiBjUx2B9h51PNU82esJH6XWUYhEki2moqfNYxvhvmCrQmPKgpt9pNbDUf7Z59MuKeXaN8w6gYNGmKt",
  "key6": "4T7aTF1nFqLwFqZfzgA2HKribhx7yxYsGuHCjfymkPsn9BbRu31JNfH4Ko1C89UhrADLs49YRwF8qVGSXdufe1Fo",
  "key7": "4p4A83oR3ZjfyZj7frekLD3C1d1zGJuiuLV6UH7HRQsiBtJN6rBUK2hvDpySygMLcU8EnfL8wHTFg2CaNDWGEYdn",
  "key8": "cMcKgb98SRcZ45CTsBDVY5fBzRoJTmXwFS5XzkWU5bJjcanc2YvCAQ6dkdb2wUR9ZELsJV7u6YzprtAkfma5uWs",
  "key9": "31c79gnarfD9KFeGpHDPRb8DoBcXqYBTprwb55PM4ErcJcPauby3zU4tFjTRY7osumbyGS5tfaHoU88NszK1jwMy",
  "key10": "44CQPUNkw3ZCySUwtp6bZikizxsU5aDaUYeXjTntNY2bBS3dZv5JrEEfkQTJeocBgTDsXvXHYTeF96LodsfawaxY",
  "key11": "5qTdnyV3eGrSPa7va2xUkoVNtQQRwPjcZeyivanVsmYDhxzpp4TtE9dGrxPxeph7R1BmNA1r8HYk1CKk1M6D79N6",
  "key12": "3gyszk2V3GSZuxunCZy1jTrUoniVVVgLYQjtPQv31tFCQJyfp18i4qbii6LjSoRtyqujMRsjNCPSR7PyS2kgwEsg",
  "key13": "51tatBQWBB6STsiy343wPs61g3FDSLuvV1ejV62Ygkdjc6K2oeub9bHfA2FzCKNrqe3YVDmkzJHGghMK9EmMa4JU",
  "key14": "3cwozPFSiq2MxC79jJv4FkA1KN1hxhhL41NSsQb9E2fiFqjPkc7ALsXjeqszV7Wo9QM6U7TySfz3sn6DzHBpDSnh",
  "key15": "5bxMR6jjrzYHmK4RTLBjDRLxWT2HKqYQYcVpFGRHAkZsnnRy4atS7FF6odtHfmFzFy49F2uDtWGsPegesmFrpvmD",
  "key16": "4L1mK32Ge1Qvbmv4wEcBrWCQD7nq89ifzKEb2Tft9Tn6UTPAh26nu6XP8Y8HbnJut9j561oWRNFr92QPpfJQiGok",
  "key17": "54ZZmEcbvLHNBn1Me8yApvxg3Tkp6oNJcmCwL8tXhcqE8fJAvBT92AvTPw7c428GaKH6dRAP6Zoyt94Nro2r64aB",
  "key18": "3YWif5Ex5N62aDQiDc8DaLbhW37SZcAG4WivkKvVZLr7kU8gyN8oiTS92re6K2MGBkpnve9hc4k3BbHUoRMS1D7M",
  "key19": "2UjzkJFNQWMoig9BNgK9qscvuVpMYFstUgHf5rJeSUHvgEbHXsKhtwTAXUxAT7KSjzqcnqfhmQU96FNBoqJVn9oC",
  "key20": "34GcVsSE1bhE3z5JZjaaZETt11zaPe864KScPh7e3JZ2vKSiFDZq8xXervCSnnXw4JGPsxnb4UkihKh5gJn7NJ1i",
  "key21": "5JKPnvvMmx85W4QBXHEtZJTGJbwNnQ2L5P9eF7gaEJPnYnsH7BkaZMGB2AXhoevGRe9ZQLrgJE6e3PPeoVokgXLh",
  "key22": "2DQtnTPJvfehPWcd2pnkKNBDVaTnmKrY2UGXZyFNgzAxh38KQojy9xUCewNMHRXEL3AQpxGq1tcMppDfofM4fb6E",
  "key23": "338UtX4fui6q8XCQpr5oG8Jj3a8AFZ1G6HrK7Tgg82oSKHu9JkdkwkHLEkpSuc538VXSWR2gropejCH52g1Tc989",
  "key24": "43o9CXfoUSnfVNZp54AFP2gcFzXiY1Gz8VkqUZht6JpZNZT3TgwBcCfqebxxxKm6gocfCekHTfGV5aL56uzAFKdS",
  "key25": "4Q96JVmSo5JmjZuFqueCBstk8dg2Aek9t5UMZ8ioESRRQztdCaTttT5ES6SagDP6DezHLqWkBQHcSbQa6CPa5JQL",
  "key26": "3kTsAiFrqW897BQ8tRVWxax14YYLJpmiCZRqeZ9xVjgtXaTnQjLtek1mR5vYcmdef6iZnV8ukrSuHG5WYcCBa66m",
  "key27": "2QYVBoHQhjWR8xmSRjbXEPZepv4VHfAEXwdfpDksc97oTe4fwUehnGvQEWt6Lx694fd3P8Zta4QoA4sd5EGiL2yB",
  "key28": "3G6MbDKKE5fVj1GNNYJBb7EiiZ3sLt1hC52mpvgiBsgJukz83mWMDUSLpnjeDXSAjJZJ8BZeTQREQWd9ygW6nZ94",
  "key29": "DZ6diAZqwVCRqXi2VcsWwVyZ47LREX2cHJ2sZ1oxQLvo7vgoNXyHthGjU7zEtdxXjQ3BpVPT9Pb6Hzr8ARY22kH",
  "key30": "itXBzoYYAwY7A7ZrZFNqGe7wc7GWwcYEJQAbJpad9yVQck4be2YBJVAnxRjk9LgtgGdzkqWmsrGSPg4Pu2Ldrqm",
  "key31": "4RyauA1BXhZUozCRta5hkBjdSF6pPq8pVkQbyZRxfYbiYpmt2NWUCPtgHH7kDNPM7Th32o4FSWje7HrNnu9J9jDM",
  "key32": "5bt3WPwSRnfNHqUoXAEAhvew4PdPYyQ1Xpg13U1bkQy4MYej1CtG1MUc81A76UacBavY1Gcid4fffF1s2DwkkbH7",
  "key33": "3vvV5YPVSuJ5vYJ9iZBA1eFBidwS38HF5Q2yEGMfSxByTT8scC5ufrq8SjypK4iL61ez4bgQ3esYSf2JJuDFFTW5",
  "key34": "5AWFj6o7wGRtERgfNKLH4pvUMRPfTyhU5JeKDJ7xT14sMroXJi6Bo5CHwJjsMcS8H9JLyHwv9FCjFw4eD3SmRr8g",
  "key35": "WKsC1MSrfGQjtecGyTMyPPuGe7eXJqkAVhC26TKwpW9TMwDF1gBY5Ckh5ECBQe7yHi2Lwd1YcyypkJLyvaExYYF",
  "key36": "fEEo4PnEzjMxidJikYaNhwijVYasUDyKAm2uTf96KaGR1FZws9thTUuPhrwxezgbVZxDtmKQyA9J5TKoDv7HzVq",
  "key37": "2wfZSdefbAebj8H8VmwvDoWYKAy3mPqRaoYw1wHLArSvrnFGTZRxJ4iLGuHxUm6DWBUurdNyeHf7yzs82WAA1G2D"
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

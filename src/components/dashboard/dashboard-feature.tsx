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
    "5uEBKD6X8XGEMKQUtWJY6mDPJVRgeGVupvqdFmhkSCbs7PXhagqwonGZCTeByd4wFP5834TbwFneqR4R3DyBCSnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KmgQsJuHVod2QbFNHAsLWdgJk3QQdT6vkDUxQFcbHgffsu97oyw5SwJC6rmZaCp3nJbxe4hMg4vs5a72GVNeRbx",
  "key1": "4KYQZhK8jcxRifhfHxs2vaqf1vKCJMJE86cb7brurPSysX1mdvKfaKSqh5cKMTYi8Kxp7ZnyrErk2TAhm8XAhidM",
  "key2": "2E98QGJw3cRUrhsNjqwu9mKd2FEywrJ5tCRbbi8MXvGLZCPSkSgjJhTP5GWwPfdhoj97j87ov4bWbunvbCfyRxTw",
  "key3": "cBbMcw49qXM9waweGSWF1VFdemdh5nLtFH6zEMjN2QHMAa3KSxGZsvfFzB5Wq9PGmfMLkHt8J72N4ac61mso4wF",
  "key4": "vgV3dtqobzrkdiAcAfWzFo89TPyGRf2dbNxHbBLAPrsrT22oB8nP8gommmXU4tJWhDwaSeXsEVDqZWDDNw9kqBV",
  "key5": "26xUVRxGo7ybdN591VZYJHVkFhVfuPeZQDBGdrAyB1v2sXZp8qSnZSzMN2zNpDaKDrQfRV8VQxdq2Mnn5MubZMch",
  "key6": "3VQHuFFTcRo7UkdP4UFvEo5UxMbh3ALXFCqwX9GaEDEt9vvnrNidBaZbSLmpgAsx7eJkTJtNHtqx1PnM9WL6Zw7q",
  "key7": "5yEsUcK7kDzBkbd9TxcM2ijp3ShYceiT6eLVF2Dz2JmBG3iqYAje3DtbvDyyR61iTth7gPAXmTgUwLmwJj9Fixy5",
  "key8": "2wkAZXY6ZD2dne8qXbWLNzg2aXW7FRHdxiVviXMGwKhh16vxbXs7dg66tCNHRuWNCPWUPZHapzAvxGwUPAkAG3oa",
  "key9": "2R79ydyHTwycEf33KEGHFZwztrUDSE6Y4GQKM3hbwG4ibi2q6f7uLiELBJyVxe7MApfxgWvvMAc8JY7VupfuzV8h",
  "key10": "vC34V1Zteq5aMZH8L1Jx7d7SCoyKLFgaNS4i41Fa3KsZRZtZoYxm6x84oium8yY43apE8K5QsYARn8CFpGwHzyx",
  "key11": "2cVFLFwRmiY9qxbapgt1XkbcPXe3quUUUGg7H2WhF7ZJEixnanLV89cTSMD3QEMeqNyyvFgCUHuxEpVBgHBi7xo9",
  "key12": "64mVXq3WTdEZbUvxpoVFiYaex6dhnUNY8R2Jwd7PhiQv4CUtVMiitRR4PUDVLdFWiN7A2uV4Fi3eqeuEs9yj4ASa",
  "key13": "3GGVKUXeBrAVtQzyecCCex4DqwQdZgGaxJkzB7xnNUau9NhyBMgvCjQe9BM3wojwh8ewf8rDtV6su3h99TZyiZzx",
  "key14": "2jUiaDNbHGzuYDF4hvuhQy3Dyiu6Rtag76Uc1on9womiuXE1QGgYshHiYCGRmS6wXxqt1Rsu7eTyvRGeGkQc6keU",
  "key15": "5mzDidvHvPET2oMAa4xWK2EXy72fe8ewqJKRczcGYm1fTGwxs3ay1TYMk79zWt8YY5hgEpbDEiP4p1UZbH19jfuL",
  "key16": "w9ajsXiuWnF8GhaxKYUK4KT7X3zZU8Sxtp2G2Pcf9SKqdbde4V8JHYTBTg2XR3B3pJef2YeYakxbCLinvviEyWh",
  "key17": "H1aEti2a5qjYoWexV58KDWWDLeVizP3X14ycLzvu7dRUm14sWVJW7cUBy4M32aHE44mDzShXj9LnA2QTuiPrZWV",
  "key18": "4yfstkoDDnmubKtFCUU4mJ948xtcUHvQsGofLNScFKTh6fPpgteKgECtajTPHy5QhHyu7g5hCNAxDuPibTxGxUkx",
  "key19": "4cEvLD4mBP1CvPzfDL8XGptBqU1PbA5vPSg8gJefYattgvJ6Vm8rU1MsSERFM1CRLJNghCZEs4x7A5NcUrxHm9ur",
  "key20": "47ThiPKDVWENaj9tJKkifg5ZRMK7zhnmJkHbN8p1aiEne3PzEefs3zgZ1DGoevjYyV6i15QKQ2FC5SgNgAXd1qiG",
  "key21": "2yq1su8itaYCsaVydLUi4pyZ7jnhrsMmb1HUVPmAFuDc9YQLCQ3BYe6W8d36vJTLqNsVkDasFQ4Hvxtkcy95VVLV",
  "key22": "zeNpkZf8sbTv8uHytn5YEvyJy1gBiyzuhakpT1SYvA5Mxe9RuGNZAf3RyXQssnQvVfayDNmnsm7kjVp8wP4PfFt",
  "key23": "89oeewSxfirZYeci2bAbATTgf1qHYT2xHhzNDN9ueykHUwPiVL3Mw76wmvYt6eVVPXo65ssABdoRDjJLPHRhV6w",
  "key24": "7Kva3RxKXsQ6czYYkT4BBNo2kirHmE9jQCq5VoQmhBDAjovD2Jh7fEH3aLykiVp7YNPzKzxgwnEXk7dxzHaQNVq",
  "key25": "4TtJpGp4GzvUxdVqBRShPH1GMVAGXPDA6DXCYafG62g3j5y5WikZEhxidxPx8WU19a9rYZbz5zzUFXKydGpw2pzi",
  "key26": "3vsaYvG5HLmcdr6VF9PCKKV7J31XEGW3qPf1EH3oLi1MMZJ4xHvFxbXjbzQE85CyVFGwGvEW6RqLe7RyybeUkSm6",
  "key27": "66HZjfQLDJ9821FasQcPcovcnM27boKiuwqDbe3u4R5XPmoH9JUroFudzjgTZX8B1A67xZXiQgsNTfGzcCDoETt3",
  "key28": "SsDHVL5bRfNgcTGTPdPi2aLua7w9sa9gA6DMTY3ehLkkVGmcQ5vMypWTHjYDj5bUXHYPTvvMhdfXto5n5FpSUgV",
  "key29": "5q91t6Av72yqexMHRWs9brJ4JzDcjWsVfokFWGQnKxqdh6xR2hzH5ccGsS1vGfufUBk2yoy8SehPABw3RrXj6m7k",
  "key30": "3UPtk2hYUwgXBQ1rWJEi5UjrPriTS3FDbBwmm2BGFYkSvmKcGRr8M1f3URsrrgSyELg8BqhLNnYKArBa7EUJxwsi",
  "key31": "45bpYNLa7iFJrB28T5n6TZSJRLcWqLBvwxTKrFLCHX5CCgfiSYZd1H1dnvFHyKx2WmhqSbqsKvLUmaR1dK5QEP3J",
  "key32": "4JjW9rDh3vW4aJgi7uEPcNUx8YJYUPH8171tnhqUTAbNa1m68cqgzW7fG4UWAixLtBXAw5Vb8ktcCf6dfvYNtjQE",
  "key33": "3MSLYwPPDjwqQZzW3ajFt5EqsN5rmy7UzgcAperL9M3PHXwyVuNDzqpkArd7v5cgqZTFhvpApT2rsqvaNRB2ztGy",
  "key34": "5YqVzBdmQDZanq1jnwQWMStBjM7XWcih5Nsh21U4pMa3dpRtuzNRuhiDMyFJPJpbw2pmtQCNj1qZ2dwZuVcqHgru",
  "key35": "2FhGq6BwSde1gbnoLvcu725eV4m9R8u1bgY8SDjG664YZNnq9HWSFGuum1yxjiKvHxeLUCPTYTmcgVuSAmgw3Z8f"
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

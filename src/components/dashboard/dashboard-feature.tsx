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
    "2chVatbWVk6N3etNPjh8rcNrryjfHSVjxLooB7UVeEy7pQnN3nHRmzYEujTe2niGa74aoF5JaMpkJ1voYsB9srNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baEqyTQJ6ivRKW2UJ82Yf4BY9ayVjVHukSWyLTj1jLKZdEFGSdAXoK5HcH9Gsa2XGYb2PpWWkv9EZXteMktSQKw",
  "key1": "4nfF8kfCVUD5RvJJnw3eaGWh251YFB5MsrGnmgYyCbh1EgmKfvrrZrQABga8Vuk36bTFUw4mNA5KH9BsZYaicLRc",
  "key2": "37qjcwr9QwMkYH3qCHSRrc1PmAhvATC45ixtMjwDUHaYVoA8aimz5DPEjzHvdNuTPbdYzB9Ko6Zyxt8tALEN9BTt",
  "key3": "5BLm4RtrizYSXkCsAjeD7wNfjfehKkcTKVViMCcsJuUHCBwrYpvXSAa7xLDU4wSLqfKAVnsFcTHH2PzrshchsWst",
  "key4": "5oKTUcLg7ULbwZotQpfKv7SiYzk44DRJbUfUQUq1tgpmAdp3No42VJWSzK7z5BrWP1VLyrD9YNoBfUd7jwtnVJ8b",
  "key5": "3hrp7dRXqmmD9jgVEoBAhmi5w2jWJSkGAjEwHZBfW3QEwgLzcqKvzLGvuKHSxgMc77EaeoPDH178VajBofHeefae",
  "key6": "4hhLccnPUf8sPZSsg7iR71b4W5zBfFQB4Aq3ofbRPBe9x7NTiYtB5NJUBnGSnCeiZDPoGSpDBKX4TJ6qXrti1Ug5",
  "key7": "3WWSA86jdCBiMWEoYXGAynpSAyoyeJK444FHCJH1iMugqQX1C7gA815NhweBH4cK5Nwfa4TtAH3Y9uDuPLi8TyxS",
  "key8": "3n3nhWmWTiRdqC5Y369iZngRSDosCtmL9uqY3mmhNcjHLdmawWudADxMi3PiFxLeC5WbkPZ13hShAL5Eii8kGGiD",
  "key9": "23Zaj7hrEa91nU7CfMpi14XyqKZ8Gjmrb56kjXaAmLfL5Zx4ZVWJHTN8CviSUuXvC3VkCqRuhu4b94vUf8CZDq3i",
  "key10": "5YiS8bQJd9sdAq9LyBuFFaRvhj1dFqdZi5yrn9TTRoULFUDmeFXtjki9sQLofmdaoNpRkGsV1iCehXiG2NqkVTnu",
  "key11": "2gJDBkDsLjWyHFmaExTxRiU8wjs6DD2aWhr25KgRDxt5Sm8bendWXQsMZuCaxrLF5BMRRaC9xSiZTGqC7Xku7TzQ",
  "key12": "uQSCZu5oM3TxrBraijd4yZ8Gz5qzY3Gr9oURbwBYZATDQDh6d8UDVEFZSPYCGJDKMyyvNMwtRynsd3YXEVarsLq",
  "key13": "ghcp5UcLLxjTejtg2zRE9yWH9xDEBJFMpD8XB2gZZ1Tm4iqUZq8pnxrQi6xNHFY1VbnZASyweJ8oVYRyEvmG6DG",
  "key14": "65vDXDyUCz19mgkYHuoZCCSCdj4bS6Tr1teZL8PA6VUU1yCQiRDNyuSTXMf4HyoBBh3Dvpzns3Fg81C7RYoY8YvK",
  "key15": "58erKm2hbbDgWedsuDmgjD3mcEBn97i8Q9XnJ3X6eBeSmKMneRbDdM2DpCCyDkhyuyRr49ALoD1NmVXm3TpkKZNS",
  "key16": "24bNHYsEFxY3k6wgsZDGKRUCJ44q9GuYDamYqDUFQu1pKTyYspbV8nRZ53eVzhj7Y5p8qwQMyeeiwbLFxasf8BzU",
  "key17": "4sRJ7u5EmShCzHarhUNXNrUKHMVTxvUrp9MeTQeMRvKDrmadhtrHTe5bt2K5v6eVr2jBZXNkuvKk8cS21NX68u7h",
  "key18": "5J77JCkpFBnZ7ScgMuP4CEknrfBB37X7CpDJg1eeDU7Up2ysmHryekFgDQXokcwyNELpQXyK1WLr5VzjAYvLVF9n",
  "key19": "4SSo22iPoY1YDZq93Fno9gJA3GPtwJxTWmJsf6QrBtp1ZDDmLXDVTXHLPT2LexJzH6FrJtavBSj7zQ1JtsxzYV5Y",
  "key20": "2ntPipkDLucp7Us3YpXJSoC322VZ4G7yXD6tyrDz9oC9H9tvb8frnbeJZ7FqztfEZTcRe4puw8UCVXAdShevsSjx",
  "key21": "3dkPh2c7JG4cGXEXij1DXkvU6r7LJUo7z2afcwmR6FgGPt87UQu9SPBKXro241T1kTRTbx5sxBV8DS3B5MYZCbTn",
  "key22": "3GDAuDvrJ3orkT1V9FDTyxRVWwX9PScBihiBfaBt6J2YmuPySBntM1EfXtW51QZrRVRUJpca8Y7EapfKGuU1uUec",
  "key23": "vauPyo5siT6UxHEtu43NGbcykYdd3cNEcs1DWfpGUvJqgPhw5hjAabAjnfYfTHKyQgsDZVB9s1qDka6sVFX5dTa",
  "key24": "3ovkyjeq8W9dYXhmHAm1XBsxdUN8avFwBwPYj7CJro8B9w9Wqp7HEfa4463RLCEQwwDZtTvBjMgTUV6znERdFhgp",
  "key25": "2jwPbZZvsKWMKacViasu2T4Vm8R3FbaH4ZwW3uwNfTzJrncJgbD1YkGGiQWbkd7DpXKhfSa3C7V9VEkhYCXo22rg",
  "key26": "2WNtyMJr85YuKhAA9ptrNF2A18YXb5bqf2m2daXvBS4YYn3RNfgL2bbuu4qJsj9Dbzae3vEhF3Yb9c5vKCevsLgX",
  "key27": "3cXJeLh8AbqVLXV4Q8jo8r4afwtBSHUM1dFXgmYb1DQKofCFadv37p1awDDxAZy7y3TY9auwwN2n4oCaqeBQAqH",
  "key28": "2mkw1o1zbzdzNy84erKNbnZazPewvWR2moyqgN3qpYudSSbYihRHV5L3Mkk3ux68d2j66LTsm9Wk6M1BdPyBe1fy",
  "key29": "T96g8u6fnV1jCX4p4DxxSUJ9zCSVZ9r5v5UggubikU2ufeW3f7X4LAnWHphEGk6uyCc2pB8QNazXKeeWJXgGcQv",
  "key30": "3DBf4cq9h5MvgD4iLvzeW7GCu4oe4YeZuDB5bjSbMEnH47VyMEu5gUQHDRx7kEbaK4RsNq733w41ZN4QL7HpVjXK",
  "key31": "4HbHi78RTJVt4oRww1Nits57vtuVTonLiaLc1XE3yJiaYEbco7DGN1K7FPxRW3DfhPGYjEg3YBL4aoCaLrA6f11k",
  "key32": "5iow128o89RQGZLa2dijDTZ7Gy7Sed53Dy3D74zGxHHgM3teSYyctoGxJqiyJPijGJEjq2KTfwdBmvWymyQbqm9e",
  "key33": "4WVk4Ns8MXJoJc6UkbgbpZNYrpdVzdvEqZCW41w8itJQ2U5jJwoWZoTuLxoVCuKDPSndozTCdG7ju4NeYw2PrBz4",
  "key34": "5kfeJEwS4PRDHuqPmHVepyk67n15XUGEmz1mQQEA7EezNSZ2F9StuDwQjxsXaoHDug4jjWdao7Hzhtz9Mo6H8o7j",
  "key35": "5gXroio3MiHYq83rGK4Jc2Nwu31FBjw4vWMXsmkW5VhbU4pvCJzycVbMYKnW4oaFoRh5FtfTz2NKGaYSRpfLvCVC",
  "key36": "5mX5oCFz6TMSnpyzi75K8kZcekHEMJzACLnfavCAdjpZT9N5t4638VyAob5Heo8QUzRwxBxxwxFdjRsLzKtJFKEz",
  "key37": "3iY3LZHA5rPCjumKy7E1bKhBKmRY16QABp297RwN2KEmxmNiBVKQaTPhWy1qAnqG3USaa5BK2JC8rqx6ppvTDNJC",
  "key38": "51NqKBPCtvsNjESwnZVe5xeXMKEweAweN6FzjjQwvgAs1irTSCEN5gMUBhn3Fx8N9ztHzZUhiXgrA72AtKGwYABm",
  "key39": "2G24DTWqWjyi7nMmQav5MMcE9scZAy3ybfLkAx4VmG9AyixdZzAKaH1rXkeJaLryz8VLCFrmnmjEMTuswoEeA93S",
  "key40": "p8btLzBTrMxiGpQ9UwsVUYia1gbmTQheDFsJpmH9ArjyGffmyyVCAucoxYAFJegFEViyGRnnJqjpmCFaiCx7nFj"
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

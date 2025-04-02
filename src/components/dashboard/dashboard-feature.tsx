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
    "26RwmBMmpxGRAhnzRSn3YP5sbAki6Y1w16vhm2tQmBZkZBe9N9exD88pygM1TvAjeZnZpkpWfh3xr8yzwQnVYk7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLcQ3pmcbfGfp9H8BX6fom3Fp6vZidknk4c8PN8XUiPUAV7KYH8R5d8FEpv1YBbaNTg5XMe1ukNM9mSSo9Rh8J3",
  "key1": "3RenWJLTy3CT8S6pw1o3TqTzrtR9RpSQZKZef2QYtrHN9fmc8i6R9d3VZZ5y6GvqcdwJaQkARFpNaL3ib2LZ3vk7",
  "key2": "5mB9yiQVWfnywdDFAeypKSH6rAqL6jjEts3ojEJda9ERZP4fBsaxEjQK41S8xPhYBgCnaAjpM1xTiZo4EMhzcd1M",
  "key3": "5Ho3xRRUeFEwHAGebWFoce5Z948ATSRQsphPHndVTNVAiieGGcpfdSYtRfXNaMV5FLuHPfqRZK7C5TNBHjerRnwT",
  "key4": "kStCPkcDdXS71mQ41QrhAnn5QdWWTfdNAXx1pGucEWSWd7hrDF3y51jAMCF6Jk5nDbmkDwHwDFtFxAX6BecrDJs",
  "key5": "4Jvg18QA5q3kYhV4XxHNuCqswc8cuB8FUamkBtdBgMmcF7TE8oa5EkSSjsuKcQ8cNubW4b7etM8cq6smj3VmFKLz",
  "key6": "4SQGhwbuY6UZfwnivtuAn5oFQcmBg1EquTweoicpHDGoyS2K6PnNLArbFEU9Kb844SSTLuuAK6YjKWKZ9s1ng5ZS",
  "key7": "pzZ1qWYk5fAx81g4s2eZ7a8UFrFqvPVcz3ztycpGaLuMToDGNXXLS4sVUHXj4SmcxcJ6YDPYjoAN3RSzwbbX8sQ",
  "key8": "2maTVbkJU2EWw4Hr6JtLco2uURUAJQqhkxvGTnFsxdeUu1kW1NPUVFJJLhsXNYCYrAGRduWspfFZsw6wQFSLMBzP",
  "key9": "26CEXbJ2M3eRGVR6Rrbv8A7DwG3rXxgg2bbx77MxhV6UyGwspm7d8dJTbVpHC7udKXUChtSvRXf7L3DB3KLWrHPa",
  "key10": "4N51x9n3ccHaKKuqYyWsJAjCgpidxpR36mZK5zmZmmTHNvEAcFjZMcn3nUZ2dwL49HMjV2MMxQBiyaABGJig1FWT",
  "key11": "4NYL7upE2jzF6WaZWouH5Sy2BpcuD4wHAGU7FitZgRVTYrUMZ5EVHK5mVd5mx4ALznp2UKaFYdNgysnpwpnDwUo4",
  "key12": "5wotDaFp5bRBWGoEiHLMku21yNoE2QRQEMTEy1c4gG9X4p85kUS1iKe35Qwz6oS3bcLN2CV2qsxhneR2jFBMGf73",
  "key13": "52JpETv9fLYwRWWDV88NGW9hCcRxcSv2vzrpkYcq5sNMrKTjJjQgXWQz9FVaamJGmN7zypsqckiTqHeKZofHfpHd",
  "key14": "26SizKMwbexWN2HaWehR3txNdc71Z7YTfkaWo6wyvia7AgRZy6CBtkCVeQ4T8nfX5mfNcUyXT3K8LuzeX9NgehWF",
  "key15": "3pxFbEqihL27RgbdMkTXQojdbXrHyXEaMvUddAxeD2bECS1k4DQtWA2N3pNVhuGxb7S1qAnJMrbyX8V5ZSBaAXKA",
  "key16": "E4WA1urkw5drn6fsm7k27fwzBTH5oneNbJrxewunH7DjRBFqGUejkxNhBSWvePpkeV6U5XL2X34mFHZUQ4sFVa1",
  "key17": "2114QJd141TNR4h8HcbZjotsr6dMhnDouTquT6VppL9AVoEQyTdoF5m8CwJxdot5abXSSx5euzm3NqtCiq3a6vie",
  "key18": "2Uhi75c7GSGk2T3LNaeezTNrDj5fTMvZztPocsuxLum5Br1Rc95NM96coQUCJXibAU2pC5gLQ8Q86udTRx6ZBef7",
  "key19": "4CzNwnD6Ps1F8dtcciRETxbhZBxtPnzGmkZYcYLpskVN1eRqNN4uaXsZh78PRPxWYkhvqsMBPJ1R91v59EQp7jaL",
  "key20": "579SSeAKMJ1Lp1i3HFgx5ugC6se1H17X2A7zBcj7ZN9e9e6rUvsTRxr29pbeSbfWKY8Ycgny3fqBN3tHux2pajq",
  "key21": "4yRZQ4JgKGxHCCcPi8C5fP7eeGrZyF3qCf7jYRYPYXarwbo7Prx5wWSUvxosJtk7DSCKoZx5djhqyLVZiHogvFEK",
  "key22": "3QHPFttcbEgUog962T2CrLdPUyQJ5DA9uocUCHqs1zGfF9egNGtC31KhP7mLzB2H6n9e3JQMiJEGxhf9WaNsW9aE",
  "key23": "3vVXES9MpTHDLYUy3PSiHjj5j89CsW4m1qj1JhYfiMxLc3LmZXe7gwqztJhCqjxtPJ7YUGzMwgfUrXTmE5Ds1WEQ",
  "key24": "61kbbABUR4qYi6Y4rfw9sooTzFEZsgqkcebSrQKKrTNML1u2gSC8GqrWtn9e1az2fpEzWi8wHh2YtGPfqjhyS5Ah",
  "key25": "4Z2npvxsToRxvabVKFDP3yQKtmEamyViJAiB6PjzsVuJHHGfUZ1QkWN8EJqo2rJQYkEA6WZynkYMy2N86v2q2ZKY",
  "key26": "2MrhyMz4dLyP9coSggFoVKdyHPu9XE5f7gt715nuPaFZ3z7Dm57xdTstsGgFiZ88w9nTDBFooNj7xP3DPSgZNGRf",
  "key27": "2jhDdEAK4AeaUgeC7PhYoewsPVJF3weXzFLMx3sm9RcSyHDMjV5cAUTSNisDD4YhuWCTbdFxy5GLrvDTpXaPLUrG",
  "key28": "58QvqVZoBZanbVxW5optyTgJMUG6QPdcrcCaDhPxg71QoQLEAAhcn9jX6GfzYc4pCf37fREkoi5paYLB5TBjDBQE",
  "key29": "5rvCMiDmhYCDxXWpQHGr6oyognprJxq13SWLzCkdJDSvbZBpDciWg7cnZ8GpnTecKoEj9VcffQVEMmET7K2Rgt7M",
  "key30": "2xie3ziUm92vpGTTmxxQxsKuUse5bFksfH3QydM5vH19C5LZrKG98oS2dLcABNQZvK4nnzzZ7AM83BhWmGb39bfW",
  "key31": "qEZmazRmfJga46TJzwa3xUYC1oPTB5KJ2Dnz4HBcpt6EeHujB1ipUJA9vckP6gQ9PMGJ1ubgYSUn2VBzZ1uJjrt",
  "key32": "hwkgqEF4n66ff2fSkCFaMvyWeykTDiPgkBS79tJRBuoLSSEk7sKeQ5F9wTG17hW2VpL8kRgAJW3ywE5DbgfTiux",
  "key33": "3B1fmTZpXA1MTGfh8Vp2fy2K5m9ogDmjDXMYmgUAatYoWJwWckCfRhnq7f2XbSroHBsjg3LDu3MmVo2u33D5gVy7",
  "key34": "5wYySSegZMRJx4hukuNeQbDrMQFozWXdyzCkEbYXNRzQHdfoHtmv4XnNST9CUYRzNGeSTWtXtB9hgtvvj4C6jHt5",
  "key35": "2BdWbY7QutDcdUJCkKrL6Sgx5kk6xcEKqVXmi8HqZ3e7ZCB4E47DWe4Y31MFwj2WMSsDahBQ7bisJ9SpEFumAGq2",
  "key36": "pmxuZjBv8L29oKVKtZzUss3zdWVvE2X3Tv5NqKXB4jB5hmRp6DpwmuCiT2nt4sdS1JyZVRbzn1vEr4PNrQVnJYR"
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

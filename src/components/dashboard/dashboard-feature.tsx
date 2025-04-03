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
    "3bzV9LMSxJsG5Lz5YuPtFBTAcXyZFGFiJsUZp2FCud5sYFBroarSj5BMJitQwaRP7PxCKuUg3HM5MYB3T8LS5bNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjVNps6skeWZsAfPwYcE4YfJan8wwM4B9FH2M7DSMZ9t9njUzqK53vuDNfGtnCyM2gvfWUfoV5f91BM6difCbDr",
  "key1": "64mpZ2kibbnUeKmYRLKN7PW2DkeydJHqHTUCk9ZbttaJfGAuFuq8tCb3H1FpTUYjcSFbHCtAdiHdzGfKy4ntkkcj",
  "key2": "4fPbcDzytaqGWBGKH6MtppEr2cdB7BBDLubU8kNtyF895rx4LRycKQojkMVjpSnSFhvomeGreWSxubctCBcZXYfQ",
  "key3": "5e7H1JqvxhogqJstGZGv4v9UcQ2NeuqzjRXrtsnvHWZWyDNbuHHVmCC49w3qSas8cKEiutoU59aBuTCEMSuJAyor",
  "key4": "ZoxiMiMpahc1CgW7GcCxLbGNW7gGpytLWo8AiRcuiRoMCQfqL88ymyxXvb9bYncj3ob7v5oVRyEjK49Nu5MKkGi",
  "key5": "28Sgxmz1qzzfg2GDThKfdt4qhhW42aPz28CZPvJACtEpKP6vdDo5bcyEErjraCfQgfNncYNMLwRnRaiGryuTXRvP",
  "key6": "2pvXYxTK1rRUr4zYbHvue7qET9nNta3UhE2zqkUSuPcsHhY7Zm9g3SPrdECJEM6kHKcor1dk9L988fMRCTuKJsKv",
  "key7": "5b9GN1ECxAv66mphH56RKxqzBjoTpC1WnTzi8WeeyxrJFX4z3xjRfMwdWvX11fGEn6mjdCXRFUU31ZVkKEEBEyx3",
  "key8": "2pftbYZ3RpRtrWLMBkVkjQHMbL3mvcCrB8BGPfsSTHvxknHsXvWcC1CRmz4eH7ayL2LeqkQmAHCg5Rr5hUtUs7Xr",
  "key9": "4EFumjomTYXnEhhE8qKD8Z3e2G3xZnbCj17hwa6gf8YVMX3AetUSm9oLmLM41d33Y4XnQywpdty36fLyrB2HsibF",
  "key10": "5xetydUwowDwbDyWR8WkWHBq1Pz7ABDUQujayYpmtp7pWbbFfHB8VTswK41Hg2k9sbxfZuDRuUFiq6fW7gKie1uB",
  "key11": "25955z4h6tNryX2W4VmfoGJEUPPvEQa84VX8qSCDae2J54519DLp4Lxx12fnibQjL9TL35WVUiuCgwY2eE3sxS29",
  "key12": "3ECoQ3ZNdoPofHGCoeeFwJ19SdMZPCGvNfSUEnduLbS2d4PHCNiLUzpiLEWEiM3JttzyfPcVxVJAb75814wqfEX7",
  "key13": "GNJYbK3MFSKP5hHrmjFSiuchvVcqbNtsL3rMv6Z3eFNigsiwvhnWkANTrUFFSMtzydNv6eRGiktLuSWsiCmZYtV",
  "key14": "3kiZMJZw4g4dUR3G8DeZo3ZMhHMXmMUKUrSFeMhyfrz1vLL56WgDXyjfJBqR9B4etdzbXqqumww4dqSZfSRUcp4P",
  "key15": "WBAQvs73AqmyvN1JBsTfN9iCevNxqYuqffB41qhdZQRyQcD55QuYFyjFruN9QEBW2cnsFTUR1TUQhceL8zDpSh5",
  "key16": "42mA5Jt4MJoiUtSfqDKwxzPoFprYRVF4i9xXtigxY78uH1XCvBrhF4XvQLxYcAXzgpnqDxyZktoo2R2HXytUdN9X",
  "key17": "2ktMFmPn3W9FPusEL7833WVFCvU6A8FAeHKvTCCHvsZ1UkD8u8pYaoFxxstZSnqGVEDTj3iihs491wxksgoVqNGX",
  "key18": "4rugPZQr3pScrcgx2YiXZSWxdQxh3bZcgpsUVtUMwVFMTRWcVQDY1DmoARzJezxEHcWfzuYBP2u3HRsg4Vp2GwB7",
  "key19": "tWUxQwNZhVu8bg2uwx2svHuSKUEytq4kNkj1YNkzsF49fJBavphGe3tCi9ZGwfFt6fRoXtMBX1stSNnZ5ehGXV8",
  "key20": "37gcS8xT4VYRp21RtP59iG88D5wa8TqTj1fZpcWqRYQVFaCJ5FXNRGqyM5U9dTyqXXt6qEAxhgJdBrugiSqWymuR",
  "key21": "xUpVzc17ZCUuBHvzru5JEWzF4LUd9naAPM69EaLsbiwT2UsSKFfyANDTVgD3BEszgyNhymCdJVJsdjy9shAu8J1",
  "key22": "242gSavpHsXa6Ftr1wkgrsDtN4yFpjtuF6sStTdvC7snMzGS7X1he7BMthqkYzCHJkyngxKgSsSsrPWALHbayRou",
  "key23": "z65sEgrAtWWYEPTFRCgZ9xajPn9jMWn2SZbuXDDY84SAuLN6Lmfo3nZMERCBnarkTnucSkehWLhAvGo5Qfht8gV",
  "key24": "388K2aC46cnZjE52dy95wTcTpMsFPwMG2GVDova2UNKRRVCvW1qof3xoABjj8yPMdTcaQywoYZcxVXM4AgtvbYoK",
  "key25": "2ZYQheLRr3sS2cC9XKVtRoCoZfJiS3QA1Rw81SAZEJr3FaYkDSS13ronsoePpxMaGTAU72vWNyh7X8zZgi14JiaM",
  "key26": "3SrFbovQeMEHH7aeCD6aT6cLeYSKA9d52k2tHzCgwfEe7Td7kRdeV93cxBKSbUgWMnc2HYohctcjXwJSaFn5wJUq",
  "key27": "3J9Av914UZiwpxJZoGpTvBEttbHyhQ5RyZxD5PGpPcdfHu4xLQAgCCPQ5uk9PsG741pUZoBY1KfW9rapQXuYJKrt",
  "key28": "62LuzRhFEnePYdkiSS3GYzUuKHG5z5qgGavUQyoC1FvYZyYVv6F9bLqkvmNHXJiWC11QeTQSC8H18Y1mZuCNbEjT",
  "key29": "5yaRbzinhfVmNX3mWjKLyiAhAndVQAcc2DmzzDgQAiaCMTvVqMvqa31b7afcWsb6vddExD1AnYQGJzosHb2QUCes",
  "key30": "4K1j9V9cNktGnUNyX61r9cjVHCz3XbbWQNnaBnFzJCATSUiM9LFq25av9LBqVdoUNQKaKEUSEHogauC7HGqXDbU1",
  "key31": "4JfDw9Ac8SLQN3t76XckQrVS8hwojAkbMzSanJRJs8mKeLjMqcXwBRuiNriLcAGegeotZDME9fhvnDcA4wx9K9MD",
  "key32": "5Ej6mRxNyUAPY61Kh3K1kMPTjjBsgbrYYcHFnNy69kc8iJTnsXztoKDZ6eXKYFU5BchiLgds36t74N2NpWEAYcKX",
  "key33": "3JtDVCxT9cimqiY4Q6bLvVGpPpL2pmxY8dApxrFrc7SH57vnP6L1jKQoPk2k7a19UcBkzprBeK3aDsUYLzeugTMi",
  "key34": "4VMJYNhTGQL5CrEnsKV7hnPGtqikSmoFfwce19Y3tvcyHWfqP5jxXfUuNysTFcRKizZ7uazFkGA8wW5Z6q1PFXCc"
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

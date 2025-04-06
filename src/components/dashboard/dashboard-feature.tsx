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
    "5d64AVgiXBPs5uxFwFULM3vH7SgHgDFXebvJephBHx5Zt3QBnG69TuS4xZDwNRqeE5rUA3TAtKubrB6YsFqjy8Jv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yn3fhtueF3xq4drFZu8hb3MPXyFAMRCobAG3hG8oiUEdwCnrEKhGRRLRRiymMymqf4ukQz7AH37GkdnKFGXwunG",
  "key1": "3Hgrn89BvtRFqq2dSU18D45KUmWfREjv3vdCza452spwah7gSZh5p4dhrrQJtYAHZhg942Sqw3pZKPLQQLTemkLk",
  "key2": "3QNop4t3fk7x6v4boern1r8Rf57GpDhFPfwdA8YdVLfiZ45qYJNQYDiq3N12ijNH539n2KKwcr7yRo4SuepC76bQ",
  "key3": "Y84bqNM1iSniPDRWntfdusMzkPrCEf64cPfMkkbPhhGtES6Svr7iB8wvB8B5Zvu2tF6yfXBZWjyWP6UyuiCiEXB",
  "key4": "4ho728az9aJzSLTnGNXifRK9xdhptZeTpDYvadUn3qsn1KAcmoJVWbDtQDuUnT6xCpMhgMWYoysRqNmzvj2fERFJ",
  "key5": "Gx4jUTRScZcnnXtffquLpUCgptu58FZMtWgiNyUDLvqqKqCuc1FbYTyFmaCEaSrbdpr1DnDSj5TRFDzBRsPrrRs",
  "key6": "2ErWkmWUByn9mXu5shKcjy68ztPFzVqjkHjid1PZEBaZfUnqZABZoYxVN7kjaj4XoxmpAJY4nY5poGJobhNVF69q",
  "key7": "3KVN4bzrNtbbmmHoNs7zFekr8qsWQemYJyYeKSLHrLAKJ5eLfCzQeMAhfzcLfkRN8ZEuLwE5tDdryt9xG9dF2MDp",
  "key8": "vchKsjYQC9H1GhHLKpMxAEXsBeTa7vXGJ21hUP73jGpFJWp9QZkdX6cs8btnCw4aeXHqY55nasRvens34LbzQHV",
  "key9": "4KadwKsh5DjC5PTcFKDjfcG9ncygH6zMTVppqDxXhsqxbAqppTgToXqXeiA2kN1j8YKrYoFQyYcQUBDDaw7xv3fc",
  "key10": "2guuJ5LXDPccQcF8pT9yUXCz4xdwLuZqSMDat4cRud6mrNd4azoPdzc4Bp9AwF2BP5a2cmoyYpkckPjxqqhrJ4eT",
  "key11": "4SyFPeDVUpXe28jYNVwUouskAVWBDnDzKgDbLVpNeRuEa4bJHkD3StjfYy4ps5hmvDdPkJWji7kWFdhQu8w7VKSb",
  "key12": "3de7vqqYupKfnKbADZ1LwMK9jri8rQjcRMVK2W4YDN5QqnvtktTYbxVR7WM3QMmiKgcdtL1PYmWJDprpsWDApty1",
  "key13": "2Wuqzfn7QvvALNDRhTZghhwipu8E2crWTy7eiDKmozriscmBxthdg8UkKaVWRHc1j4vXCUPFRTDQZcUNZJqMBvjn",
  "key14": "557UzVrFRoxGod5bRjmDuCKcpiehHD7Yj7F8Jzmfky12RGBR46hFeH3pECL1UM7R2juv4teUbUhLdf6Wk1AReaea",
  "key15": "4TNv6WMxa8z9yqQRDkpsB6ZRcmayA4CcwBB2Ma3ryRMweEUqr6dKAFWgmXib2WKk9hh5mh2hCyZrj379c4xT2AHd",
  "key16": "4ePivN9TA9RQeMSKLzQoBN9NHAwTV5BtnpzbFy6a1SRkV41G8H5EmDVsTEdMkANjYsUAL2nAaxWxfbfkb83eAXwf",
  "key17": "5RAgZEC66FUVMdTUW67ZgzuY4cmf1Fq3VvyFHH8Vwa4DvaCMgkSEyUUvcnf8Fqbeh8wKjVSwaqbwmmLseGFXQps8",
  "key18": "32L7zD67EvJCdhhzHSF5TpgXf4gcmY6jsb1FykcpEJYckgoCXv4KQ9NpR7zV8yTMH2gzovBeBAW797f6py9jdRnt",
  "key19": "4U2HDKUHEYGhAbCKyXndj1w5HJhSr1qdAcLRBnB4moLFm7Z22T3MUijAHJXYp46E84gX3uVKMHFnRsAVHhyyyAz4",
  "key20": "2XiTbw2nzewx3ZoUKFAL1qAzorr8RkWS5YPmr1Ac6SAfwqwzFfjm8aQu9QfJCJ5sjT5TRhFWjnu9zp6yD8NARKMG",
  "key21": "5mqWayLCQwqu8SxnZSLjxESMHX9HQznSRHvcyfskC2NUgMZY9MYMP6PFyYyLFgVbg8bTgaeA7LEfR3GMjtFjkqdQ",
  "key22": "3jm58hJkY8mMKwseFpMnRyPEndrdf5eeAYTh4nG29xpnidLC1pe2fXqcT2F6j8CbSR3A1RgP7wbhA56yjAVjnNKc",
  "key23": "4isEKWvLostTw4iintGtHwTVbFY5FpXhQCLgphcZZd6x39EAbmKsPsm4xBSUz57VUFeJDeSZya2dej8d1yLpDUvX",
  "key24": "5er3AmGSHpo5GjzYswjdBhYofBnvGD2NfhnBr9N3f2sdPkLentcRWPx2139XmdoW6uYGu687RmUGvDirnHvxWrkw",
  "key25": "25hMtMBo4TgyWqASSE1Ckencudhca6yNXmpWeTXRgn3jwbWuVvUSN1rwvfu1tDJ7RXT5ggcTpNxpqgEaDpm1Zsiv",
  "key26": "4G3mQCmHmYD9hzsB9msvycCkoiCTUKMjHB3wiLcMkTUWhqed5kRyB2UmoZSLzeASNDsJk7tbPMYQpgPNgdF1Auxe",
  "key27": "UTAqhgmx5tNPtbeYU5hBHDAXXZZogsCtgHcgGJJhx6jPgbkt144UxM2PsqW2XWyCkqAHKBLUfKz3u8w8Pg3aEff",
  "key28": "5iCfTVyHbygeARpmJyQ65GTBMQ5h8b9rpATN1FPHZHkM1v226NvDWhSDvQRnDw6Jq2Eo4ij6wCUTunCnibmFTMfH",
  "key29": "4y664K7Ph2nydUF476yy1u7s74WKsCx57qKe2R8cpS2kaYcnLsHGgDc2psWRt3Q1DFyBz4DikbJ5dtT6aZgsPzVr",
  "key30": "3tSFZvf8zwg4dDR8g8C5uuNQL54HTcA8RgMKACAPM5tGA5jM8VukE61qeRJprR6T8QQAQgrtFUwKRQNuPUaxd9bN",
  "key31": "Aoir8rLgtGb1AEyFYaLC9M5jYibm4KJ8kZgLRkPcE8Qtn7CwLz1mbAd56aHva3jcnpAFZjPRsDo8VYpQWtXLkSE",
  "key32": "5XcRjsZywmYGsgSkGSky33quiY2VEeZejrLkkJbHoEigw3yVhzSLNUfRn3Ga7a3ysQecZMfrqUPYrPsxZ3sL1xvi",
  "key33": "2UWYYidBNv5d6vm53Mep6JVh7xMqyyqoKStFbrsEz77rkPiyLpkymAhvhZs9xm9TNskWQh2RhvsZhFwnujkEtFfq",
  "key34": "4VxMcWfmBhvRVfMC1FwRpSNS7Td5ryK5r7FwPHmRSQ8fgZrjDHCNCRzeCS8kruNJeMCPfyrpXNE2EeFYzF1Sz7Cp",
  "key35": "2CoNzfWZfq1SJp84rj1xzFtsR3qUz5xhmAVGuXySR35MH2vSfy2u6DQdLRLTXrTDSrJ1Pz6dcDLr4mkCE3Ze8PLb",
  "key36": "2iLuEBcdXFY3x6ynZGPB4rFfg5h6frJ7P9EwtCEQFZC2MVKYcrui3L1H5BermC4abRrEv1ETX4ghC1VwjL2x5A1Q",
  "key37": "3NN4W2hDmBErC8oJnRGcpjd3ieGuG5DXjvgyrcNDJytCWctmZ4XBKyxjT1LDJ31vkzeddFcVGMstgtfFhXHktxbw",
  "key38": "3QdFRW13hcjf5qres19wji2a8pL1EkVQwJQ9Hw8AnubUAZgBh3748VRTyD6RojbUGmUHUi9iMjU5RnVC47Snrg1o",
  "key39": "4ddvGcGcTU82BMT8paUgQ2hH8RL9PE6hGp6rJ8ZfKeeKyAD4jUY2gF6Mm4TanJ4huziTeqMxu6CnDAp2QAgw3xST",
  "key40": "5snVL8pgPjHrpEUGdFHaMx3AedTDayui33sgw2foo2WwXjJgNhqmpqUfyy7dyz5Usz87XXckEBZmCTKxzTo821Ya",
  "key41": "6PmAnzqem7XMNNGgHDtrMV2G1DsoiSuPvps4huRDyECtS6RhTH1UZ8iaatWD7ATZdGhrPaSiVbKpYkGfUn76ioz",
  "key42": "5dVGWEYYQqknYKbKbH6Mo9BV21VTDiCqp4hqpwSs23d9Hk78i5KSPbtiCWknSmhcVoDPKwEmScuU5pDS14UYGCWH",
  "key43": "54jpNrgkrgq57U2WbMSY8HkcghLaVb37VzcKy1j3rtGMaCivRJ6Hjp663TDCA6XQaUakZ4mKWbTkbsiEbbxAPz4X",
  "key44": "4CMsHsAquVhdHCw9FKw4GErmgsKej3urDSVeU4mjsUcpD8mGermGev3FUx7AA69hyK4UoFyVmnP2agsBB8BLYVTX",
  "key45": "2ZDQE1W6MWUwrGsMaEtUjucyNcMUwJT9LFf6Sqx1qLCCedQ1mnsCZR7PEBdvSnkeRyG1BdzJxCmGJSx6z5D3Dhra",
  "key46": "2oiwrbYAnkZiSiRsC6RDGDYpWRhu4z9CRTZHhwagmA5ov4925GAMLmaZRQsHGc2Nmj4dnMRg3yZCwPhTxxwhH9Bj",
  "key47": "63zBkNJhTa29YwMrBKAsjcxBQ8Yydtj8eoY8NuFgwXLyfkpHNLXLBSGiJaeKNvqCxpdNzCTXPQMfguiKcAMigz3r",
  "key48": "XQysgRd5FPRygC737vtw22Bv2YKvor7rqGeysFR5Y1AzSEhnq7ky2C4vG4ze9TZ2RXPKKgNUX8NaXzZgyV6JsnX",
  "key49": "3yhF3vSbkWmKCga4VEBVUVkci14VUuc2hCD2z21qHPajZykXwSsavy6otVTWe7YK7b8mLzamcKRwmXp8vywFC52U"
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

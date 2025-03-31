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
    "4owGj9Y6PNbiNukA7TCfBwZa6dLeaXaFRBs7fYW9xkbwYzMT6Sa2FXRBmBTGAuP87thk3MrYSLSDbAwWDXCysNtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FhzDxtLtvnD3JckNQ25Cj8Lc7C6ovR6CatLU6zNKi7GtoRiyJr3wcB5Dr4mgSmn8Jd5yiKwqyvTuZcEd1huF6iF",
  "key1": "5jSsnHSSxVNngiZuoT2vtyWBAco4YYLBs9XmsyKWnC7XBh5cBjDcwDHj475FxeWwFqRDeBvWj8FHuCdfSn9Eo7nu",
  "key2": "4MxZHSSwBE7EpUoT3WJwoX4w2VP3oRq4FUh2LzPyAbv9FBv7kGBcWEdBa9tMH1Bbd3JMafikkaMS2nDamVbJYdJk",
  "key3": "37kX46C34JX6yNYiwnJmuYM1nPK9sZyARQY14JhPcLnB6fH51kzXzj4CH5ykESy3jKcdLhrccGfLrR8i9HMiTHfW",
  "key4": "3DbyAJHJwesxkn92ndfpyyFYKQLXk8AAjdC8uQW2xxrYAmq2Cz9wsUPUXzPmvUMisacBSdBgKLASjoGbKFWshpMC",
  "key5": "55b22X41gD7vVvAAUqmZjttdE2kaN1XEEAWaPSp914YZDMoAjHseRa3sRVsN9z7CinqMbS1t4eQzyiQmQLvfLeod",
  "key6": "4vrBYa6SGrDNMvMepHUEw4H4HVeqPSEXrWJ7M6bP69QoD3AssiAqaChuTvHZbpzLDA7YFrJZkX7vVXCXRhRWmTJy",
  "key7": "5h3NZ8Nkt7s4addYtC1H9tpUi66etwq4vpnHMmgUpj5mAVCGPNvbGyM9HQmk4xnssmX7YC85W7b95V4w77T1icyV",
  "key8": "3BcupAQDRTGZ99fkYYetmtF8qi2x9zgwTHAXYB6xxW6fwD1YnN8Q6qQyEwjXkbBTC4LFcGkgAVRaNTcjzWbuzZy4",
  "key9": "4N9gSvmnkLgt1CguKmcvWDSZovvqwc54qQRavXzdCeN29zCjhEyF8EnfLjR5EvDD7geA99j7LH72NDdaYcMrVtsG",
  "key10": "5cvSK2RBm6hcAv28P9VCFEHDsS5KZrPnanW5FHN5sDZ23R1WcaffUjvAe7btUgpLXCMpHQx9KU6wg3mzgczXEbQA",
  "key11": "5xzZ58mQobuRhgq6FA2vCKP9obE4D184wed3wBnHoFk7GydxEsA6P9DB15jVeVYarCrFsmXygTJTN3jtySPvuGx5",
  "key12": "2zTLpxPb6epAn15BBJHx8Qhy81vihrwphbQ8uJxD3La4yvyiQin3ZrR33e7PBM4MSDPjX5bhDxbYJ8vxdgdwZVno",
  "key13": "3bLUsk3m2mmHT8SMXvJLbr1Qy543UGZoJwWZkf7F7yHky8Dri9TV8NQLzNk9ZdtYtBEZgWXo9sSiCqhLh1wxsTAS",
  "key14": "5owk7bBkFMNtejJrFFsJgSLCm9nSw5BjZiUbDnafPdgC8qCHeR9Em5GZRTsQiSzyoAk4Mkx76btkqsZ6xx6vUfvc",
  "key15": "DFXD64KXfG9SuKN4UeF5BX7sRxDCEL1tnVESEgvPK16NqPk3sqwKGSjNuKFVpEmcGdqsabqmk1JbYRRJywAJcWr",
  "key16": "4Jq33dp8Hkh3PKRPMQaLmroCrq5kXWUoEQXXnLFRTmXeLDvxZh4YrYBKTqhU1QNX4qyZcDczvpXo1kgmof6fidh3",
  "key17": "3ULVd3hHqmWQTa8QFtKthn7RQ4ufyL86wRddnRwHLwQB63yqgrzbhyE46SXcsyuXnHARky4muCdpFx8zqLTUyFLh",
  "key18": "57kKNLeitePgWu2UF5rFUcGEcwdVaDvAw4Rj44V9KcQvnYsCU9UHANgfYinKqd2DDFyAdfzw7vv8Rjtm7Gk1845",
  "key19": "2UeyLMfMKbKsSXcDzDEZZXyqs4uJrDFupr445gk7AZvjMPyv4YTic6gkf2GZSD9Lkb36RP9sENhig8NGLUizpPXh",
  "key20": "3QfwftzNvFTkvdcMPSQhXFDhRDGcUdDvjsov6MWoaZo9XEr9xatW1ajUmZioY5i8BjrxjXhnC7NduuUU7jBAKYFo",
  "key21": "5yLSUtFHqSjVHY4iEC5ppYr5aodHiAE86qZZpindYoEK17FGMEPyp8SQ7C2Amq42zw1jksm8Ho1aWsqdp8YiL8mm",
  "key22": "2ZDZmsPGYbzg3bwHVAGLWyRGJjrcXmBA23qLXBeWE5AgtEjGgsfCv8bEWWewKVN9eWBxC3KTFawKwmEoorynC5Zh",
  "key23": "5KTZGptg4oEBoZxfSe1JKt3wfnnFnQ4ZApbEFBq56CCQy1XE28pVdR4d1rriQFab9u34sFvYPFHMSVr6XTvvffJg",
  "key24": "4Y7btXr48jmw9Fy2idf1oQcXuKf2TaTUAvx2uw6teX1nxJcv6532e8DdEyo5ovKVxygxh2KVWmfRXqgt4jS8ffKR",
  "key25": "5stmtRGiNscwABw5wbh1KE7ErxY5kSWVx4WmBD9sW68GaXbvnMrUi7wNBKCtKHQxQMVxWzvmHTRY6ndSxkEtmg1j",
  "key26": "3qbEvbcBVjhPxRJu7qurJc7qifvZcQUyVnSkWwnyHv7bkHBD5ZqfViRBovQVgStWHM4PnJQyys6anbvrbYXjb8Wi",
  "key27": "Jft7PRKmmQy9xS2kksTNRAxxTkJ3LMfeLPAgTKMfATvNxQqB44azKbAC5vdCemzForTrTCA59Gq2J3xJsKy8PZr",
  "key28": "odpBRJzLFFYeRoxRYBJqPW27hmxYMu77JTCUS5xx85MwGeEci2zgee9Zp4MoLTk3uquq6rnohfKgRxUn1hVB9Kt",
  "key29": "5H6E8J49CCaMhwRm4fciHByTDCVnPpUWmWpqkWLJApBUZNfT3Mrak7Q534oUXeNkso6nNRsVGXo3YmiPETCkT8PL",
  "key30": "5RRH6aGyHXXdKBBTbaXw5dnQi1A3W2xhHnvzpHVJe2eem7kq4oYLSyjMsreGU6jrAPXMJxHAkRPVfKGpSVrr7vC5",
  "key31": "3tQpK9PEWamQhnVSzUCAf9iL6jYSW2tZjrQCgc9jTvTLpfkzSvJBqA91PSCE5UwU5Lju5reX4nbBrgGUTKFPGDUi",
  "key32": "5rbUUotg582VcAKGwvBbiAfi8H3SUrqjvUByQkMAyM1zfNWfQhNvma5YR1rACfuEN9Xj7S6BiBaVuTftnDGaKbkw",
  "key33": "747uwNKzxNPkzvp2Qez4Nt6qNPDDuqscXjc95LE7YwrMGERV1qhf3SWBb23MgwcgPPPxFBKChgbUxatLtNHK3WB"
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

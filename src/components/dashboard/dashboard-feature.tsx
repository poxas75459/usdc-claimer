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
    "5jXSh1TgPJUNKLJxek6LQTVzqV6dA4HqydiSJzmmfdpS931p8iMXj43nWPMCuVnE7XSZxHiT82Vs4DgHRo3XDHDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t2M8tqeaRD3kRoGCzam5n5XwrgVYxd9JV68iTx8gWHeC5N1oNyLkzuVS1SMyM1jBdYtwVzUeQCU8WdKapwx4QVE",
  "key1": "4GcnmMXBEUjGhxxeQam5wp8jomEPwdQuV71CkC75XCghPLsbYHcdoPq6ao59xmifj4x7G3XzL7GPc1onJTopn1aL",
  "key2": "2EQcw5oiUra67uaVN2HoRwdAkejAwXnv1rskukAnikWBLD3KZrHbVpjZ4coHh28CyagXy4iepjbP8M2xkoxhwLsW",
  "key3": "63JJtKGnQzf7tjPsm88TwYs7sAwPVwG8DzL63uQgNF72gVGjmGwuZWsFR4PKT9zRzMGfhoqVLcMMU5UtE45KHNsh",
  "key4": "3jbX8or9hvczQu7hPqmLR5jaZ3A3jc8uTa9FPhjBKuKJGDiiqHcwURjVC37XraBDEUZQ8THx7SVaxRui7SRcCpEY",
  "key5": "3QaY684d5pQQ38GmKG2neBXSPF522VPomSWY6VK32AYXUfAcG9rBBKX7cnrVZj1B6RNP2VXU3yei6BJXoPdt1cL1",
  "key6": "5ymrk8yfcGE2BPFFqYMwXSYU753mNPtgvc1v52gcjqxrCy8wabE63VegZzjCko3YeE4eacsa5hvJDLqsuikzEDiM",
  "key7": "3oqYQUHRGregVQGybVxfBoaWFwKH69tAwbioDvJZfNiuxrCnFVMncWu5NfaVQhW9XFnJHeXWdE9ybrDTD6Ei9hU3",
  "key8": "5isLs8Jmvtgqf6LuBSxmuR7N2m7vKp294jFh3LKEps1ornjvYovy3VARszqqjLXxyZ3ypAnym8cKDMuCF6FvSMTD",
  "key9": "qD8CyPQVM5vdPzBJHJt5T3PboC18JdhSBjjDLgFxwXxzXRQrD9Udz8Z5F8bZqHoxUDcpVLkt5JFua5QPXxq3Qsn",
  "key10": "5daAvx6V8LP37SfXFFPSkuFMmKQfiYyp1uVcxiC2MYxc94z9xyfTUqWTxR3Bq8ET1uetvGrd89mT9y8PnsvC4sG8",
  "key11": "ChvsaneH5uV6XqQNJRne68JHM2buJBsQTmrKoUoMvrjKrrWiJroRun45exrFHwfN4w7tGYv81EZGYUR84aKZ3sz",
  "key12": "4AiGR5y1P11xFZzjkqVE4Cp1mtW8pvdbYUkCs6SvnGt9ggHWnFgtbZtNRNK8PBRj9UHtMbT4tCNhNsXufJkfJwmo",
  "key13": "4e77pdXkMcAnGRRSdyMuHmffjXeHpKNBPWs3TZtjwq348hFuPhu5tj76Fa45J2e41So5y6ijdahF2KeTz4WQWi5C",
  "key14": "56P33VRGwTPgEQAAijQqiNP1KS6vHxJLfnsCXKUi6S6yRji6WQy2rUjDodKdvPADqmGYnq2ZNTRbtrD4N7ubSeQK",
  "key15": "3QR4hZnxvduXjw5iMW4zMtG1CiPmHZPRW2o2qoK5Dx2jDicxUxrjm9of4Mw5AWnpMkdKJqtYXSwQyijHdq36WE9F",
  "key16": "5e4eQBnZ7aGAaFfwb1VVBckgvsqhs1WU8mXQ5KQRV72rzrCHrCxmA3mFQVikhveEf4fmAueY7fbk8KB3xhDRaNXt",
  "key17": "4x4kKQPRf2UqVrq4sgWTH51s2y4qSADbReqFPxkAskRe9yMTJKscRg3fx37F1n1dpT5Q6VWXgPEKVxhQBu9VAsLK",
  "key18": "34samwvsWrdC5Fy8LWXHxjaVEy9UBMijjimLMRbep97wDTDuBrZ1a7cPF2brjHxaKXHfH6wDQcpiRz6P9SZiSeHw",
  "key19": "3DXXo82jbZBwkD7bX3zDPz4cu7zBGamp6YuF3BuC6nEYYvn3NojKS5gKwz1JqfWxnaRcEX9zwqHUfeNhwbLeBRqP",
  "key20": "4meyLzcM33GkfjhCYABat4p6AiTnYw8PgV6Z9Tzc7jfEnJqTJmrVDp88TGoaGLdW21ARyMBPRFDwjoxBRXFuV3be",
  "key21": "5hSo56a3eQpGsQArSm6UNVxnpDrSd8BzXhZcDmHpX8zCLsDRBwDFvgPgyoJWArHFrpiNtUE6ALgTEVxrCwk1VhSr",
  "key22": "4eJijUAcvyEhen1sQozk6H7Awi71ZmyvqnUrQwuADnGDnbhi5XKd18jFRzk97raiRimXGtbKM13nyYcGchfTjZEE",
  "key23": "43wo3pQxuTgbwNHGznVHzEmrvV3WptyTTqtANC5Arw3faofFxLkdxjVS1C2C21wrhebcD7rHfa2Wu9cffrLmvYZr",
  "key24": "3SkjhKYNcjhMuvbWZ9VWEmQTDcdFpUnd1aqKibMeZoujwEocDa2rdhEAegKeHGs7KzwgukSMWJVdggDeRe2fMR5H",
  "key25": "5jrcVQ1TWs1nRDR9xKwYLiiwmUG6WBquvtccEKCcRJFPmbZUtiFoF5xqoHxo2oQSNfFYR25Qk2MtYXen2DmvkjsT",
  "key26": "5x6vdvPczc7Vijh3tJaDn8NM7FvgJPomV3zcNM42XCxoXFF3QNZDsUBmVoJXQ2JvVKpP6MmKqm7sviGP2Pd7HYnV",
  "key27": "PqaAqb7paLHQkRu7unsvZpu9HmPxMMSREmYMyAvvoweYe1rtJLfybSBq4bV19fgV6UxNzH9UjWoSgJspoRNRn2a",
  "key28": "2TpEzLYHQUqaZ8tXuffKogV7CSC6Pcsz66L3yg81sNxhfL8ug7wiFrESA4UHZHebGWR55rp2o31h4teymUn2ncur",
  "key29": "5WnsG3LSeYsqVUnKTEBHCso4qfeWz4XKE6n3Q4UC64xdHFaD4S6tj3gy9tFgJHNyQNMS6NWQGyNWn2RVwQj5n3Kx",
  "key30": "2x2fhfAPeEkBhaRWmGjPoJjQiF1sEmigLHh1xWY2T2jKZZNVqQcpobtM9SY1kjK3LmbPUQsY4Rz9RoJBdE2U1BUd",
  "key31": "2HUDeReSxUpuhNpEDZ4DxLMzd5ZDHZs9knMKEAvY55M7nHnVaQNnjswAxfxMvkpYSe35mbjH7PnvxwnbmrxNeHPo",
  "key32": "4Zw5VWdk51PyyVBbFGeFpg8D8DuyZD9YxqDJTFTxjw4qroqmMhE2KPiAA3X1g5qXtHhqYdkbJMMKXmtgaUMWA6ne",
  "key33": "5RHsF4mxvWzQbAfbqf6aZx3D6bDcCYmWkkzVQHAcWC7kQYyyxkJMKNJ8AufYQfHpiRTLo8Ua6PCDywziLZq2onbF",
  "key34": "4geS9ZxAbbghsNyL4hgkKF6yKSqPv7fms9EkAHsDwEiHpsaZckZtkvXzRnxm1TSbmPBjkGm64RVbai6fkUtc5J8B",
  "key35": "FE3dygGAW58gSbSEu1xC88DNsJJpwv2FpQeEYZU3YSwfqyZNKtJHYyex4UGSNQYDpawTgfubEAHTmqg5KXDVSeM",
  "key36": "5VwmPgnMjxmMGMrUgeXGWPjgTGm5JyY3xhgjKsrVSMR3WA9gynqpVJ325XAH5Dvn1oboScY2aewDo2sJKoWLo6fY",
  "key37": "2piuKUmeuemup7ExNLdhAfQy9QVLNgXLUHsmHZsMaHZgZQzcivqUenhpDQrNLwi2AT6yJD6wJvBqjssXoje7y8bL",
  "key38": "2PbkneSnKwz3XX79MJ7Tivj7fQUTcre3j12ZFP9YdWvK4souLMwS7cY77jRAnikUPGMvL1ex5rGrfiGC1JMstGYN",
  "key39": "2PZZSauUGfxmPELTnRmSfHkS1W4NCU37UrLYpmYHYotguW5eAyyKcFrzTTTUhLuq8p7N1xz7XEcjK31fc5rNL3Vz",
  "key40": "G5gBpLwnA3WAfa9AosVdtD1jgk84SM5bAEha3zMFoJepAe1tNMrjT2DVebaHUTP6KpbxqcMWK8p3oXUMZT5sSkL",
  "key41": "5C7un8nfUjvxwrvoN6AEFKaADpk8UefreasuVAh6P7SALNBNLqtLRxZTra9QtDravkZCcQfaKH8Z4DX3MbvZNPV7",
  "key42": "2v3cWtoaEexoUVAMDiWSvgKDbTEY3UbQgDNdeNvGfMbAxwX1y7MU1UB9gmVBCmAJK6Pbp4RG9phVAzyEvtVwwz4j",
  "key43": "3Z18JzeYkVsGK5W7H9Sx8JBqKhNRq8GRpUvrVxURK8VwWAWvaGgbWmcyG9H91T84rPZsa8Kp2hB9oDcbN5daZtwN",
  "key44": "5ryqDkwxsSw9X7ChxTxTjM1Zgnb1WanDNjr5ehw86T2x8fDqpxbx1rxHPsPKVQjUzgxAexuk18YHnZyi6gUHSPwh"
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

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
    "5PcsgWdubfwbW9BLNCxuVPxQWtFmmN4avkHHQ6Pgc1V4squyEAGkJbFa35MNwWcR5D6VkdDAa8Cjj8BU7PXk6Mji"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xPs1amdzpwGpEtmTSF2m71gMqGRwE2skoyPWoznPBQRhL5sduBGDh4K4YiQNYaaQYAVQrCqA2JQixtQCfGiNYyZ",
  "key1": "4m1AsvacQZdYYZbEL8NUbvuRxdsww4NUyN9wQ1azdyZJWTX5oGgBh1iS2FV4tRGFw5Nt3THq6sYEuaCSajyiC3Us",
  "key2": "B18yjEVpSJyByWj9hoySp7L7h6TqU9VxBhuvhndwwRpBBNnz2TVKzG5hP1SQuD219VEsShMhTNWR7jYtHZWWiwd",
  "key3": "KUjHkYauyowSMRLb5T8YuWUukNrXnAdjKECQaGc27QP1r9YpuQnifz3faJgSCTZbpDmp1QyTHycpmgt96bttD2J",
  "key4": "31MATgf4gm4nKmkgJHszkqLD217CaB4udHYqrsq6zGAvepEVhuF5C8x9U2s6VJ5yEAPNf49UyLdRKVHKBMpeuKr4",
  "key5": "3PxCirfsdfoFLqaX52wodUqFEe5fzskKHwbR7NTx4dzUyh5YYwoZhgCSLHNwbejC1X38kha6Fh2PKDZsGh3necN1",
  "key6": "3rb2TnxX228KWyrhEy8HidzjiVkS7Cb93WSXV5EmLhHiJAk5Xf9e7fPa56mX34WJrwPPGnd1zzK7rCB6pfv279KA",
  "key7": "5HFxhg3x2NzErqkyGdv4jioKGR2u48hYfFKuY4BQigs88grYvs4XqCKubAAzDGvEn7kYHTxYTCovdLrKiHXhug6D",
  "key8": "4aVo9esT3DGRrBuTQUy11V9TqiEsPD72kP7zfKmvHM7oWha2bYD57sBrJAfQph93yQ6Giaxs6B48gfWCDqLP2ohs",
  "key9": "4kFJd8Xnumtp4cxPDvDJhPUbPz33JeeTKvC4Fj6y1teULQivMFgua9NiSGJbpFQGJVX3mAWH5oGHHC6kV7UT2i3X",
  "key10": "2rPzGPbqUzKBCJPC5mHAFxAcnPBeUyW7BPqnR5Zsy3XizHvkJeH8xYANDDwqHA6BxxwTLs38vEmxwAQvi7NmSDCa",
  "key11": "JTNxSzp8K8CXW9DsZjuen8hT2zs3ZKTgXMWYi44gHuh1qXX2dbD1w9jc7GJdbLGPusAtroxfiyWWQnwfyGDRXB5",
  "key12": "3a8bVRcroHhYUqDc122ASF2xp1LDQ23ysKwtR7VkDtrSCjPoFKLyvBQobHdG6GBTPpWT3SZpJspsyHcpim19wag5",
  "key13": "3TAzTV8qFWujDd8B8dQm3XrNPGdsj5UFNBgxtX3bPQc4dGBowaxpwGx9NhwYGfycah8nQGRDuK9WAAz8JQB8TC1z",
  "key14": "2MAUAzhffm5XbH4Xbjk2gkQ3ssJGpc7YY3UEY4nFcx5QvyqYSNVzGjJo74EF4853KiaSEmuZja4me9PUDAMWyHAb",
  "key15": "3gJk6pWH9scuvomHJAn5BmkiFHYCprHW7QSackAqpcRhuabrGzZRRhhuT8cUFCqJJRkqYombUdxtLpGsHVXUTT1n",
  "key16": "2GNfSVhS4CU8TTrvrDYJHPev9ErAoYALH5okLASTZoXiy6srAX5BxLYxf9UYQHMTxxtnWb1d6A2y6ugAF8MAahcB",
  "key17": "52c6LSx5cEUupmMBTCu5qifNUPnWtq2joaQ4xd2sJMAuVAg22SSyX3hif27aFPKLx4X8Y9PGD2ncz1eo6cZjKH74",
  "key18": "3nkFsteThXYEKnxxgtBcahYTqfxNu91SXUeHHX4CvQmqwp5vi6jrT5sEFPC1XacCLS3ziMCe4uprYdqttTQPmkz6",
  "key19": "52EbrkhWi9ga5Mcj8cumRtwEUHY6oVYZpLs45xEE1NQtoa497bYK9EUSQUZqevh5uZ52w4uN5uWvvEC1cRs8yffV",
  "key20": "esvBngpTS4zVVWs5Jqh61xHNpTHsmr3XUeDSLiU3J16eQadg5AkbrNuETR63PeE8R8uHcDg1GnmzbwuF7KLjqoU",
  "key21": "3CpG8QmdUK3teBrLHAR4ADEtgaG5unJ8wgG4n91TtzXStxsR65KYtqARtUgSiVJjjpQqfikZ98qf1Exb7Dz42i33",
  "key22": "5CtwmCHUXKZL5KsQkTf9NrrywGugAdh789GHeM8skX84AcQNb9rPttJrVrvbEGfSzqFgc6DvKfijYFrip3jqyWif",
  "key23": "57dTGWwujv1fSTuKmHN6h3VCEpZDo9vR3nuGZ4KC2NGzohHsgZNKo1rGSoNGhFJ8g8rBTqLFPxBWYajeFXMDNb1W",
  "key24": "33L8NdkMojTycXVXKEYn6jATV3dQkLn9QdRNaABsLC88eGQGBCG9wFJ1fKa8MeSwYdGF3Jv5SJd4RTbU3DJjN3Fw",
  "key25": "3QzEKhkcEVK47F2W3sNeAwmQZFezmpcGQyPWHg8XjAqh47A8HL6kqHzRYsgwVqkvHKs72hb2Xtk7MW3jrP19Q28u",
  "key26": "51Us5PSVA7SPgNbSnpM5R7HKhc3wasTe9ekGUD3C7QhzvANogvxeKRXrWWfSEvuSfihLSiZYBP9WuGRXMBXtrjbs",
  "key27": "5NTQ9S8KoCxQnyJE2Lv7T42UB4ppTrVx2k4Hi1gWRahwKA6gxmWREBpADPbikAwQvPdKWFPBiwczGFLFmsVw98ji",
  "key28": "3hGySdS3RWSEzm6izNyJbrcCQk13pyTTdTdqMBxke39UG8CyFUCmiz5W6wRzTomichKjgXxG5f3MjNidjZLAWbat",
  "key29": "3HbAUVLqLHT2rs2wya6EmxksCfK1kjR4yuSPWW9F9ZqwqqXK4P9XZUB9wBq75QRrWJfzbNqVvwayVApXynXN1MXf",
  "key30": "2FCg5K72XZgLVfp2bywqdq9Vm7EtNxuaA1KXVhHhfu3C54FQvVG9YUYLMZgET43ufkAEU4w2SkdNChUmi4ELCCBY",
  "key31": "4YkYhqibLEYN956cVEqbdsTAxe42iJiNFQy3JpeW4Cbze5jRAepXz6a9VTxZRiqxPRRxTJCTJHNxrXTAnjCb2fEA",
  "key32": "3kZKog7rs1jBkXD6EwKCg2RiE4fuXxa5GnUtZzFVxYtWrsaYBEbkVtfmuMMu11abKpr8S47TbBVoirUSAJzwrNut",
  "key33": "mM4RSTRCZ3w3LpYL1RrtgRBFDfA4antBN6jvUECZ36jt4YTnv99r2hUKaUbhAbALaEowNLX23NCXQwq5AqM7fvb",
  "key34": "3QqLX8LgW9e6pHpuGkLQJhtDLzPZKAXE3YhjiwHS2EyiktUCVadh1AyA4PNgL6EYm1oVB5EaPmtgNs86ZTWuva4Q",
  "key35": "3uh25mAP4HsRzcFDaGXPmQ6cmj12dhGFFFX2eaoAENgdranAScdA9dKoFRyByehzC8gSdoZz7T7dPDNibDErtkMw",
  "key36": "3ESZtijbuK2snBsiJqG5fr9zDA5gCwLvq3mtMfmh8QVUvVcambYPng5Vye7xq342Gxh9LdmLtrxTvBDgs26nw5o3",
  "key37": "97177MNKzhZMLqkWqSeSatFBshxy7JhNin76gcw2V94ag7WxsXwi82BZ9CTPmi8msVydiNqKYAW14XJFUWcyby4",
  "key38": "5RsFAfau2YnMXzjiyaCqm3GNFSY74a2V78PpE9EFmmaqKpHMmxsw4Y6Ri3FjWQyZkgs5QxdgduJyf9EzwNMBFaSu",
  "key39": "5KtXUaPm3wR1YBKuXRLY7JtAzHrg1mTYREnrbmDR2T3X4MwMUGmQYwAYwaD6F6yWpB7WL9XEMXRnb9txz9wmQJeQ",
  "key40": "4p5SoGbJyvyyvwJfHgF3i9N9osBHJG1jfDEDTzRx5P7RuTFNKEv6B9iwVpgyp94sNFY4ev37MvQabExMF8qwbLFh",
  "key41": "9RHKQ1o6zLYB3usTg8zZWjHhELZCSyvsVg3mHsQ6xfkfTchCwnBunKDhV2Xd7zmjfLUoeUC1hn7sUTnrKB5Q2Xo",
  "key42": "2P98LuYD9q1PdzaGBuWjpw1xteeraUTZU1dLbwKtS5QbM2s7B5uiB97hd1MVoreLSS1ZhRJUCZ4gm7h7Yf3vDq9e",
  "key43": "3GfsJixnu9EN1oBypNsQGwqrA5otL9iCSKPramdcC4nn5xZ7x39mhUVJtAndzhWZb7cARsf8KMibhB6ztbzQ8Lxe",
  "key44": "5UYnCJ7BjpDMb6eUAu9aqsVp9Pbfa14ZmryE1W7FTC4Azxa8bALQU32wd6jgU1JqvbsqTNNL3NK8GHf6ckn13HnC",
  "key45": "3vmXe5x3QJUSenJZQW6xVcLGuqk6oqXj2acrwpESkh5Kt5vtV5xWgiDRpYoyvmcRcsk6TamXAaJdCsDekH3SUb4V",
  "key46": "MNChNET2FKmCpc9jhNMkz7q45o2zrU9rkdiDTZ3F88MEXanYY1ikgnTeBXhHhRQkuugtT3xYJsd65B7abnKpnx9",
  "key47": "3Dd7KkGPWfuGV8VGvxBJtj5jVyiGM12AyuN4eVSByT6WeTLtHZ8WTRfy4JJBQqCsvS2SRFMVHKUrBfzmUtWZhMdw",
  "key48": "4ioaSfrHcNhhv4zH6HwtVoeVr3yRXUCFvcEaieop3SwEj1ib6gpD4XfCwi4JKcfXgHoKez5qdSKo9pCPSP3QRd8H"
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

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
    "4KrX3HdSQgAQ9RroGCmNZnFRQZVAzuTDs8Dm1mick1AUwsUYCat5JB3t3maVoUs9Ncxgsz5nrFbJTFpAyyUH86TA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S9p3U5wdoPaA3yjZPtxSkHpZg84HgRc8eR2mu5mjETN12qsXCizfDBxG6xcA9endzu6iwe2NULv7Jcie4xh3yo2",
  "key1": "CBHTasf4AzTt9Ji1QQ3NAieW7UHVqGZZr9bDuSMe7q9gW1RGfZR2HF2JJtCk6vTuVApkwCdT8QC6CQ2neWAkXcq",
  "key2": "5wFT8xNAFKfBmAnQ97bYSVo1Lb9scr94sPLsaBwDB4z5VuigG6Ej9NPEZBwrk5rXikVkotaUK42cRDy3P2P8GL5P",
  "key3": "f73xoHwzw4B4SehWvjAQhAXC1CxvjLnoGgyLHCSxHsNqAi9PgM4CETuD1LCVEYRapWmDgu6426rZYSPB2YwGVCd",
  "key4": "533i19QZ7XZUiYGtnqKFJVZ3MdacMrEzHiVU4gVGrCjR8hmTqLT435nNxjAcxEVhDXAHXKB8xHhzfWkoD3LuHjWr",
  "key5": "2yZLvRsRvsVnyychKFHQ4kgBqahNcmapBaYA8ypupCjhod5uDnuC65HsJ76AccSDbPcTGaxSUXMSv1k5cMdDNigp",
  "key6": "61VwXua8bJQ6JZFv5JXfb39DAfMaacGJGT5xJL9Gx7Q83QkpiCcmDaEAuKmDiGDVjm8hXzEH5pe6hpMxTkx4Tams",
  "key7": "3zWw3SGpWTukMUrcXatbXqH9MUHooppPygJAqgs6Vn4wAk5shu96EKrgFWXS4V6bUWmJYgaYMPs1cFqf2MrPg3au",
  "key8": "ZYo9yeGJQc2WbeGGzY24uNcuyM8Leao2A2g4gMmaZShnbanJvxLejHh3jUZ7uyp4gXyUAcXcFhJoBau28VapeiD",
  "key9": "bTnMGxTaR7dXwN5NBkQnVwUoPx5q5hhfS8cbVoYp3Y4T77p9x7TQkztBPJsJsrN1UcE9p8vBJW3p2Qau99YhZLZ",
  "key10": "43bZek2K1ZVQcP1CnuPfWqFeWjaJus24XNYKVhPhvBsnT9Gv6twWYEWRJ7Go6kQvBP2bTqaST5tDPdokogqcwL5w",
  "key11": "cTd3Zx5qezCef84wsY7Cm33Zpxn1kTwZdq4B2Pi9cfRrjibV2QK6pc4X8GJkiQGQHUmrDmqtvxKFWj34Ns3AMLX",
  "key12": "nrRjqtBFzhGz8TchbnPQybpB92B4rZtTMR26yYHVXCok7z53bjbRxMbv5ZURnRqUrsmcTmcgTV6Yg4xNLPoXPjQ",
  "key13": "5tiZDxCioRG5L9nP1BJaibZv8VKCfGZc3y43VxacKkxeQpz9xky6qWVstFyEJe64hWDptgEbT5YvMsCVq3vZ29Dn",
  "key14": "2i3m565uSMifHr6C5Ec5ExcJ66GqbszFr7PEJcYLWpZWwe2drw2hr9V5wrU6DA7wQrwxyCZjPjEwRW7QvCXVWSc6",
  "key15": "47ZXhnistpsYW6qVFhAKiFkqhNeCwNhtZjf8UA1apiCaqvpSTTdxk5J6NwQcdExpD1mM67eNcZPKvnWBVDmZwH4L",
  "key16": "23azY1xnd5jL9xntWC5m1wy9f2kEvxZegmZtT2M6YNofyKLevQm4ZHPb1WZPmp9CKPgDQhCgAqwjyo8bJrHGisUe",
  "key17": "67Coe6VibdVXk1U15dCefBsYZWqazajrMMi4b9dbotwk3F2ME4bZd2QQYzbAmzJqNa18d55NKxyzJ99Fy69WRoVQ",
  "key18": "5kMXV9hcDpPc5pkL4euqf2fThyqVxh16jFpFTWVUj3MpLJG46MxJHeaDW7ppRkF6WxzHWjcTovjai28BncscwGLL",
  "key19": "3r4UbNH39oyR6H8DDSCqrZn2dJJPqidVfoGRrTWN4EYCg35rkwekk9kstguDu4t99uQVciTbSkeLPpjJqWXrw3xT",
  "key20": "2rtVU4QBY1hVYq6RuQYW2v12psmCT61MZRdmQXzMpfyB3yE6b3WjAwcbMeesSpYiC8qCNAh1VDezTY4A2q96Lfd4",
  "key21": "3BZHtn7rG38NYkuJzUkVGkfEiM1idxbPjuHuHu8bdZrCSYHmfwBL2LMKntDvHHntHUHPVBXMsEbRMPqHC8ZmbD1U",
  "key22": "hN5XQis21dNyWkVr4t3T2TQYc3JRFWRMmD9xMKUeJcGdZk2B9XTpbNRrUCNgtSHK2GyWmswBmMrx2S9ya3bf8iN",
  "key23": "5xPBBqnHZKsCJVfvPqVgQSkYRmvQxACtfi5uU7SeMSjqcC52bbHrEA5KMyb7DX7XUdKd8shJ39WzxmGhiWVeDSK7",
  "key24": "5rZ2NxDm9kkKW5PY5yG4U6srWJmMFMQv8TFavS7wvukiXGU9UiSHHrBRYLBEEJ656BcBV6xg1LEtQB27Zv1MeLs6",
  "key25": "56Z8SyiaugSL2DVSEwcySD1z48Ji9BKACofP9UpFnpMes9j2E8ewyEBK8kCZWv1MhQ9SKphV2ywu9J6fXEsZDJSK",
  "key26": "4R2WfwqQMadNqkSoPF4pytB55NQN1jxQUs5ZHRj6b7v7L9tc37RtDL8hcDgDsaEaPTzZ6yeEN5EQg4vjxxfVRg9k",
  "key27": "5TCqA3FTcMdcYLW8wqd9m1bs9C6G5aKZxJEcgv5xrTMk3WX2ArkZWjia4WW82kWDVHT1DK9EYdbSQHhciSYz2SPm",
  "key28": "3UTJBW3WAPmnuc1Ci372bLugQ7fWpEpKZm2tS8CTGVTMNDxqBYK2aaDt35ieGS74a3qKAEnwaViioVVHq7QPWzzJ",
  "key29": "4VAdcsod6DNsAPFe3AXUAPKM3RZc695DUCDtQ1NtY5umGFuitfuSnf2TS33wYP3umtXgvK9AqJPbUpmi5kveZq3A",
  "key30": "28BgdES4iAe9hW43J1NHCmxoDJZ5Ragc7mQV2jLUYjtGR4TKXFJ6EoMJMsmQx51gHVeSK4y7oCGikRv786W76B2h",
  "key31": "5sCxkwMCF4ehXzxVqc1QU3n9jQBsdESf16mVUD6BQATG9QKtjWo979ZQVYGjKRLaHyadeDEXqb5cVhnaT6aBgvsi",
  "key32": "fGFzVvQmtnCF46RSoZPSHXshBVpzZZoM3nZPQdnGQZMCPawFbqLco2HZZuhh5xYYwiDyMj9b5SQawH5Q5RCexnT",
  "key33": "3sviqtVX6YwzdMkx2hEaqUY5cRcA5zgb4RnRZaxSApH8DBbbpvJ73kHP18grJuiTwbaFKGYGm94uh1f9VHnUNFTa",
  "key34": "4aUWfff8cyRkgxBkuHfThK5ZXfRnAMqcanru4frwARYdJ3iekqJLWh8TsKDDUBxdb48odRH6e9dXQSs5T1Yap3s9",
  "key35": "W2eicV8vHzpKAM69mZvr5Kmu9um683X4CLdCjDdU6w3yKzyE5i89CzNeUxYtDLAW7HV3ca5d84kHHfpr5jkMhcJ",
  "key36": "VEAemwgwLA8BEy8aCY9YAc82BuptJV5kCkMvB6vh4sPp3Ait9SRywvQDTZaMMnVBEDPn6vGhShRTfL56hSpwpMV",
  "key37": "5AxtnxV5KxyzzUSgMYzqzYfydLAJExkpdSHYHuz5PxQpXyYz3NAMezFGc6PGCEb7bLLZZfZQMdGJoyCvkSt3PnTR",
  "key38": "8zZgTv2gtNx4be6GBwppZUvF2KCUbU9vxqYVbnSiG6e6rc1bwtrcDTQ8mz1bhQNXMGFxLyCHSXCWqQHHLwWZb62",
  "key39": "1oVGmQz5mEHWrwSL5yaZv99dFcpgmFvHXTMzcweWoH1MmcfcnZZd9vMSYKQiYYY2RufgMbqwiEkCJpLydBdWMzG",
  "key40": "4jnCfNYfUsgUTHWdr1Rdq1QeaXLoCsEdA7rL5CpvDorCyeGin9FcFcsd4iStpsHmWGv4RXqHXdrUogPUTdDsgVEN",
  "key41": "57L1g8CShCTxWStqjerrjYbR1TPgF6gxNy2niHNQsqYhB6DsJ4AbrYHeebH5jhkxCpGRXTUEnHZRPxvX4ncfKRjf",
  "key42": "316xiYKksmpeKkpgPLEGAsHeG53prFCyULMsaoaX1hgZuD7Z3734Y5CARHoGALvLi6zwYZVCJCoP9WyoNcmyK7FD",
  "key43": "2TBGFmb6qMATSwaavWzzwVPHPCMx1zcwtacMNMmAxUm6KFs3jEz2CabFgaXqZe6TX6a59oS6Vu2oPcPhMwugCHUB",
  "key44": "3mGCSmu5kstEfvHQbiZizqJciGDSSu6tyyX1PAuuJC98eoukpvYpksyYaP8npu8JuFQ4UMZ3oUbwyiDJm8kG6FEn",
  "key45": "4DX8ZAKEXVkqc5zz668UG1o4sAfJyFMbc73WPB6q5vH4a9TYd8zQ2Hgubr7uaamP5aRFn9p6yyaRi5M9cDXpv6bQ",
  "key46": "4BXTxFpeN4BKWoCay3cFQ9XyBpvU6GiedApLXuA5ykQ5ckc8ux6GtJqMoRBrvgQ6pWrXEPC3x8zE2Dg4VH1hPcNF",
  "key47": "5fG7LMJFoygf3cfHDzRp5ssyiNN4TXwrekTCqKknyWh2s9uugerFLdP11WBmETzQcriexCwJH1udTs4RxPJzNuFw",
  "key48": "5jJAxrFNhDrzyMn5Gt7kJjJpUKe2FMk1PfwnSYBATesFpF1oLxMmi9oJFxVN5ZuLKBPX3AhAoBN5N24DBoA1TGMX",
  "key49": "2weXPsuLfRPX3qV7zcLFfQzG4tCjHbyTwhvGxughWNLKBXLRg68FaVXnLPuTHmWh3oHxEnhLuXU1ZpGEgYY9Dcjm"
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

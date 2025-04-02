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
    "2Zu9as9Y1tQ7N4zmFK9fACDMeSbxLigvAP3BAhuC3DyVNwBkV52dcvZMS4HkmaaMwLJ6bK5TK8EvPnugTpgqNaxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBo2eYUhtxHiJmTkV49E7wrwUnx3DjHST4x7JQ8T6MmEWgrQJQ9AuACtBZQdPzdCC8tfud3jfFEzZt3wbSSHhKG",
  "key1": "4tvc2jv2i5ytcPau3gh3yPJJkZ2nppsj8nVHghHvHs1LK7k56DVusF2BwScntxGpJAm1vHW6ykaCtM6T1Ukqiqix",
  "key2": "5BJGs3bMMYJB7qx8nRrBWjxw8P8BKLVFXE7HR86JwgMmcwpjQmY6iJKd3F685NA8hgrrk5rWzbga5c4cZj7yXZJf",
  "key3": "MYa1WAAkbstkDtch6HaeS11BxTPpwLBqQZUatvLVTuYbbP7r1LjH1vpeLfgAmWwpsruroY4pRsAFS79it1J8q7p",
  "key4": "ih2oVJUwTUWf9VPXAcnthQxkkwJFxH5k3JGvhRW1MjAKTQGYXWhPYUqsoUPsEBx1NZTmQJuSMF4d7DoXA8Z9Xuo",
  "key5": "3ufUK32d7dBGa5WsZbPvAYoFhMwivPjFgpFjj48dYhJGy2V9EWQak4okHGLXEWqKaJBgAFHRmdGbd794NUfJqXPM",
  "key6": "4AxSvFX3V5uADYcQkbdg2LtAQakzfkqqHhRZSPX6qY8agZTiymjRWixPPTorCuEjrPZwjHZcdyRa7abWuWxzQhEZ",
  "key7": "4ddZzjEJRRGNtMd8X1ky4c8tD9LmdpoPweLPwdxy2vStzoDp9MBnE7Di2xB93uaiQcfKpgLMjrbPs9cBsZmJuDoC",
  "key8": "2BooJuuN9zxqN6bYHqYw4W5CMrA9fAeakMeiv22Kya13YE888J6ovKR2xi78c6UtVPAo1BZW4QBSofWa8wtb3yqq",
  "key9": "5kcQs9QJvR7hqZL3ZKVTEW4BJ2qw8PVrG8Y7siRjH3SYouFV39cUWDUuc53kZkoE3pnUyw9UdHWimCz8UCimz8FB",
  "key10": "4g89qqruZy37uqWo5sZPsqy1qUR3XHdgKJ9A5FCAHat8FqYkfJktDzeLUK7GoA93N2SkMFPBPHKPMXoD9wFsXbhn",
  "key11": "2oCzcLedxmcEKx65uKJAdXeag8tKP6UqMnVufEUoVRYB9Ws4J875KmpMRFgpKBgWmhHwjnnBh6oiiNTJeDnGESeN",
  "key12": "R5YK4G746FwETk6SSA5HXaSBkHVLCiEgYW4VAV1U9d35M967nbp1cg647eC6Minnj851FTZstVUKa9gh3hK1vim",
  "key13": "37uhpiCZP7JqHJ8Td7DUAe6YP53FRqJS2wKxrHZYj3nmMPbEQowc19epFFYh16AtvEgiKNGgu5ikTELscE9GUPty",
  "key14": "3rDmBSw7oYRAuoG4FYsbnh2hNiuoZZMuyLa4F12qHQUiMRCcZcsRZdnfSjgQDSMTrHfie9gLNDYHHg8n7Mx3mdZD",
  "key15": "44UaPbKyXwRN7MZoGUH87JJXJfMESZLZf58W5NpmYfuuJG4N2vRWs4mM1NV9VkrxgZvWgSez71FrEb4GMyHbpKBD",
  "key16": "3YBSTELtgzMHgBsjUeDwgDRBn6aMnhFpbg55FK9J3zMaF77C7iphUyLaSXPLFVeFLiDnJZE7KZ7oAiCY9khs1UCj",
  "key17": "3J6SRA188Tw34c2n2kr4XwcmE7wUQTSqZKwNmaSGNGVZvWf2LBJKEzS9dPGD8dRCMe9HE8bnLziSwn7kuQRPYbay",
  "key18": "cTzs8LBbd5at2P5i6nPEWmJMi9ERMjaKTwWq4LkBmtQfnPe8JiXLSogJVxA5wdToSPmitgzUNuHwqAsMHhH2JsP",
  "key19": "2EF3CHwqesvUBwAmnR17wvyWJBxtZFJ91bMePgQTSbsFTGgXkvg56TJySfGqSdxECfPxoHn2SqZd6U59Gvgf8Hme",
  "key20": "upnJqPwVpXT2eSxQnU45as2wXzY1SjTdo6ExF2Byeih5PADtga5JYoVCiSAqa5vQ5WB6sKGi17n8ht9Doqf9EF5",
  "key21": "4YPEsKbbNtXEE1HwkEkDbHgj7jSXc3txZTNu2bNyCXbiLtYeaUte1GTQjC6Bd9UxpGJV6nWoNExK5ciQTuSLxBb9",
  "key22": "2AUqChGVnkgVvxw1BhcdDrAhroZHFp3oxm2TfxGj7Fuzw5Y1gtpxYxGY3LYJMr8kFr4fih1EYkCe85U4gEXZhBNv",
  "key23": "2gJUBcy8CfvpP8FhRYYJ74L1Yx7MRihZoRsLF93VP6FPL7jTJdovsN2BobEpL21Z1dZ3Lro1EANE4GMqtDm5RirF",
  "key24": "Zr4A5aPBL6uNVL4CqvPH5sEK4QSQM9UyYfq6KLtnBbjTLH3A2p7Dn25dW8Eh5hGpbrLkDDfpToH7C7Cr72b3AeH",
  "key25": "3aSnyNebDdoCz1aQJm1AkgArsvRm4PqTr5746DVEvKcYafTQ3V6EM9AL4DT2dqjmdWsR7UT7ndKZ5Ju63TKuuWcH",
  "key26": "5yGNpzMp7MufhumQcBJrhhjfexqvvFMf1xS5SidToaTBEXUKkPoVgpjvEbM23EG41CyutteH7KQM1MdEJ7hnwydQ",
  "key27": "2PDMjoiSyaV6tmnq6rBbUuc3HWR7HshHLqgjpetmx35HDkP6iYFuxaomYUz9SFycWN4jcYU1rVUa8bzWP85wE6FL",
  "key28": "2ZTwsUKqxJ8vveuT3Lr2k3QEm3C6urWwQp7EbMjaH9E6ykYFicfmF5iCYcASJNWiPxVBM6eir9mAJKX7LiNTZYMN",
  "key29": "5CGL2WcXjCiYaCQfmcdAcrzM7YKnVruw4uGDnKYr4RrphBj2xL2jPLsJuyNcNJ6kU8tRZgYz5W1M4hg12EobHW1K",
  "key30": "4jUqxQSiAgNZXc4TAPksFmkFUNSVp7oGgiTaXW9fALTT53RZiqpGSWSoMd4esFCuyepJiD392c4rH5rEozMeAUNv",
  "key31": "vd1VDGBMfVyu3eJ24SNt86XCajwhqQ6pUT1etRU691u1kKjDpz6JkCHUoT3v9sKMNb23bAsedHeKsCuHu5GcHur",
  "key32": "2DaFMDhTsStyQ8xEUv8S3vLKBvRoodwzjSVKE9pZUkZtqeNZC6i9gfcM5qCCNaq6TkAMrdhjLEwGducXX9CGdhsN",
  "key33": "gcXWpSqMTe6pdFwe4zjS77VaEgLPqp9w5LZ2qWuWZ794KYz24BmTkmqbj86g5M944V8mn1p5jxFJvFZsuDzv7sX",
  "key34": "3MsonMkFvjdwAZzhHKxsRDam8CxVALp1kPjaMbQcMbUhFpa87UEzz1CkPR5puSgtXnF8KopmHCPRisgHPYFPBVmU",
  "key35": "5xPdupUVGFoQH8GiDaJMbLT5SMgUyGKLWDgPFRcMq89BiRHb1eyvGvNR2xGjyxdAUgVcNQ2vsHVKF3YMUYu6sQT7",
  "key36": "5w7duueQLCktCeyFaV7J8GJ4vi5TpeTJF76APLUh8UmVm1v968EmMDzcynwHV1mZptEejBAHomzZsjs5J7SHaYQm",
  "key37": "41sidthVPkUFmwqEQZsweqj91YRNmYDoHk2hDC7F55mKkBy5wqKDjhWbEDtLQgQ4t9ZuonPe1egaYmVKKrUt3Ady",
  "key38": "4iJ4Ygqhps89HQvmfxxjbNqt7P2uuSVGS6sRgc6oRxz4RGJSBj5hrftaWxwFJNJ1BuDoeQRjBg6pBLTnL7sWAFrX",
  "key39": "2KFFVx6BfzJhmHPU4es8bygYTd1rXzHg8EsdXowSxZVjjsAVjfnMNKaWXoA3WnyZBSny5uUWVyhQDcoqzH9gv8vN",
  "key40": "DYwfL8Xzf5uNYqL7PiYpRsJJCami1ZLuVk5QKk3sZ86kAMZzmv44wWSi5v1eEPTLgraVcbLfzGJLgjLpzS1XEJ5",
  "key41": "3m4zuXCumL6uV2pkQBJyZV9m5KwmujmymimD2SSBUFrNbhkHTqmvs3aAn2Ggu1kr46Av8cD47CpYocUNwjbgWCMg",
  "key42": "3fAGDexkFBqN7LrT4yzsS4kshPp5VUyJvsnpyhPqysX7UG24mywNCu6PNU2kAFZ1fK5JXpm6NhfQtnDMrSGYzn6a",
  "key43": "5Fkh4KcamcWz12iszBLNhi771ogizGEf8EdB36tx6yctiz8DYvbxDDnQFsW6YLhBSRkfAEwNXQjSVEzWekNTCN21",
  "key44": "kwu63sff5cYLNPMJRVznjw1va2AmseaPAZG9q7RfDff8Ngyyw4EYEJHd7NWhvPhUXTd84h6iN5cdWfPDukEUbGP",
  "key45": "2EvVqRXG4cqw9rrt17mPWFyY9qZ5FSyacaWESTHjR2b8dTTUWab6rWLeK83kDhu5K3nS9DtuD6jEn1FtaspgVmid",
  "key46": "5g2hdzmTAzcLqSY78dZgCfwYiMYrFkpM5R26LLEq68n8wovxNcA9pEENdiJYrUkPu5ytbCHoBqdMGCPD6e7Lumx4",
  "key47": "2JN9wPZ4XQKLCKgYJhrNNLT7dyzqCEuo6gr5sSJ8eMACmn4jJ7YNCbczwiaLUyAh6vS8tsVPzySY7f48PL3FcpM2"
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

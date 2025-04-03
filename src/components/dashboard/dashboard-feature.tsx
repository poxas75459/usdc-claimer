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
    "21agxQDC6FM7TtW1JTjzJeuyVzeHmyn7ayonX8NZ7TgXTeUv5LtL3rSLZF1wHYTgb6pgMvB3ZoaGH1zrcazipMBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KjWFDv1thnsDQmgBtNYpdMeRZ4N5ok3Y7EoSgVWPBspNkhA8a7AdvYjUcshamKZ4wKat5pUBNbXM9vmRZVHk6GX",
  "key1": "3PQxQWGEfTBJmSKU14p45zuMmCBDos3apP9JKEJ6pLxoEygvmZDvMTaYAop3zxtf22D44jUF3dyD9oFmzZ7s1X3f",
  "key2": "3UwZkuAJyQYMzHR7Hc4jq85HXG6n6BKSvRrPb1HBbxjVPMKDFv16hsh8Kw7tdiWgXULQjPGtvdf1JvyQMGfRANer",
  "key3": "5NYYqUqEwpXv4B4G5TVGGc9GU4jKDVHocvf6LRZCcNQMuE5Y2btaeDso2wrVeSp5z4p7VXEx9jLeLyHBCJZxUac1",
  "key4": "2wFuTzb7MsSbuigkBGcNpL9AykRtzmGWaJupxsNZiDRdWb7C7nREGtsbWzeHYZ7GJjB5jnjBrY2wAUm2SkwF2Dqc",
  "key5": "4K5Y187pJW8zrHLntSTdAtHnRTVWCWC4pRd7CykmMLYAiDUK5UbMWUCMQTP21gLg25rCDXJXodKFfmVzvuCRHm14",
  "key6": "4uHnoqE8XBZXBSSsHVmgHjcQSEwrrETNS7sk3R2U73s8D73WcomzYVkDLeBrg8k11CAnud6bqQBkY5BJ8m7NyPqB",
  "key7": "4pPnpqYRhtGCbqYotfkW8BEZ9aKEYPX3PfkU8pPmga5c6HnXR36uLUfaaEqPaMyLpzq7J6DfHwrq5sJs6yZd3nCa",
  "key8": "3Th9Upbtuw4b33WWwmtqi2bFMgQe2mx2PP9m37i65SGCUo49L1gcVt9CMguZx26zTYABjDsFwtghQCNbLUrBbbZm",
  "key9": "3uEhQRsix4FKx2pDU4as7VhfXMn4tiGZi69LNGdJdTMnmBnVWnjnGgXZV9jwEWFJcDp5svPohKEgFmNHStUPCDKV",
  "key10": "2wSX9f9rhNY5CjZxim1ipb5e326dW1QJsMhdR8RmtHd8LwxjsCgCicUc38Xww5A2P5jE1wJvoFEnrAS7sYxbfYuZ",
  "key11": "4PZGYTwKDJkvv8dZqyL1h65MC2ZuQSs9S8BFfCBhNaQ1Gw2voGwuAo4DvsJfkLJjDeD8E9XQFV448eQ8c9mzppm3",
  "key12": "5gqMVE7YGXoW9PtJrm5u8D6f7D8jQ2sjK8b71FeWANSS1LhQ2j5Sandp2dF16RTL28jqkRrGcxYC1Pium1xxDZbh",
  "key13": "9VM5ijmFQPtoP3Da9gn7aCR7ZtWLsCuLyf63hfMPgMaza5Sarc3t51xkyAuxFoFG4MLnLnQPfb47yrQghNJux45",
  "key14": "3CpF5LJHcccfFchttDpNT8QCqoAkCMGftgDniBpcJYkYZCSWoBD6jg1WGBGvwMDcGbXXjKdqkKLjhVKpMCgRvxsf",
  "key15": "3815jbiCGbDbAY4bGriFESXW1Lpp6Rg5vEvWufzdVtPNS9gz7wFPQ4ra4mH2givtLf1PYNN1hPgaKaTBzrtWVeKo",
  "key16": "WZH4euunahCspyBMxb3igYkUWuyejXJA3LBKjzkECvp8wwjEsfovDKjnaaHrrdNLNYwnYhzEDNVHgGU7qo27nre",
  "key17": "8ye6fv2ttk3C4DwAbhPbbXmDgdJr9SJdYmwmsCEvPsRunLGYYAhXRjyXTA7YMXJny68DVds6kGtK6q1T9kdxXDe",
  "key18": "CYnU6tnLHY6WpdAzWdUc7cQbz4a7tRfWxHB79k1rX4HWkjaCoEJVDSgCaH5JEmapcWWGkiZ6gmdkGYjFUXEcWpj",
  "key19": "3wVkwg4YLjHZLG2cX56atEP7GChSrTo6C8VUq6tRUrbBDW749EwPMJprdnDAiwDr9PviaWK9EEAaPYegRgZDREL8",
  "key20": "3au51bt3sYhrLZn6Ki6dJ7gpDfvjZ6bfmnggV6qmdyQgNJBGVbbnAEsVT8NS1WxVyBu7TYV8JoVezegwnGbSct3F",
  "key21": "4RnJiMZr4THN9Rf7ej1ze9F7AP25Ryx46aVpWNVyVac3w2AAyVmDm4YBa9NBsqcTS8DwTwcKSatRP6Uz2nkQDYMb",
  "key22": "4c89rSfWWL5ZoQECKfWDrwWPz2DuVFPdXJKgv4V9S2JP4mtNVA793S4k8XC3g7UWkwFUdbLcu8AjVNehCQjvefFW",
  "key23": "DR3D2XBXWEXjiP5GaFj3S9RMhQCcFp4rTrhwP79neiok5SRhVrvMzN6HavhwJ1dqEgQLNBqC4zBnLcMnn6xBtu5",
  "key24": "5FakJW4uEqiFgipD8zVfRwFpxDr4xJW31sWgY2WYT1LaGg4Rs72UtCAAm5QoZM9JojpvU4VbWsch9sskCavdKvna",
  "key25": "3M7Y8rA7z4xPzg9APW75H6BLXnWKmJTyXSYkXMevcSNgm2VaQUf9LpxZbbavbXRZ94hW8HhKAdpoJRyYQseJvx9v",
  "key26": "5nQ2yzCruN8otp8aBKg4oxWs28rM2aEe65g8duJaZFMaZfPfaUmuPuFY2PGRspBj83yFHKeLmz6jTq7EHp7p7ZDQ",
  "key27": "s64nVEzDxd1PMgLMCUXjVhET6QVm49m1iF9PM3MzVAGTZC1St7fk15Zig5wwkARmQgiTwsx9FXHM5LDDDU719PS",
  "key28": "DgBsS4oWLbGcpPnhmnfN8LEpos1BgcBgqdQ8MTPDgQu2VcaTMW9JtHVjZM8T8hmr6dZxqECZuBCTHZZprNPGewm",
  "key29": "5vpcMTLYrWDtqivD47JwcARs2UbDB6un2wqqyAGhir9Y1GWnGHrXUxfWmHVyCrft3hrQahCBH8Ua6B4oBdfaJdzT",
  "key30": "2GFYfcdFSuPAB9od7xiDEDxouCMF3QHkNtcMNkiTrwjxjtnstamEhaQs7MjVYmMtx2148idBqJ3p19N894yTyv9j",
  "key31": "Nio7w3kzSnPUX7xZ1KKEPwpAZ3qiZudK9gbGKsmEyp8tNgbTCsa9sKGUrhhXj7Y699BFJ661SMtvE14QktciQCU",
  "key32": "4xhEpk9U26Ptpg68XM6M2Ha3VH5oxiq7kND1GSk34RjCYqdcemBjX3AD9UPMwjS72dnGzEmWqkvAD2BHxxpRGcBf",
  "key33": "2W3Jd8tWQTfxpiwdDEFmzb5fsFnRdo1GZMWurt6LZaVCvQHGLi7G2VhaTHFtjGpWPVeABw89qdFM2HPtLYshWkh9",
  "key34": "4cak8ez7ABqw2TXMNhDLAP6Dv7rvGVMAy77kC668GtdQ3Z9dkhFKVf8Tm2EK9w1WhngN36j35uqHjHiN6KdXvtxd",
  "key35": "5PookbkZ9Tagi6hQSHTm83GRntqm3i4vDKNb4Gzvfdjzmom4dsMkPZdxqJ2vhonGKbeDKmY5PBxMuPv4Mw5RbehX",
  "key36": "5B7kv6Hbi8rCMeXaLgMz8XpsQuW1A9kaxXKmfbTBY2jA91GCCt3dP1NoNgvKWXGim8YSLi6zK6NT9UzzKJdkyppA",
  "key37": "2Y66x6EXuQcgue3xJLSG9y6SsotNMJCGu3fBoAYUbL5BxS23LQj9QP9xRoZVQBduQpBUyMv8BwtRznLdJZNEdXux",
  "key38": "5AAmhWj8vugAY6dcGTVcRFHWcbqndsfj1cXpfkLBgrroMPdQLumFTVTK7pQYPBirL6MgbkgDDNwYUjrMvxhAWe2T",
  "key39": "3uPm2x4GwKoE8JMNiRmtgNy6DZxG6ZSc5JnwctdPuxGk35ms76HZLJHCmRTRJH157N5RoJkoRCTqiErPS3gdwPKd",
  "key40": "3zGCwYaS6bz91zLB43cdkd46U9e73rzxaZbgkt9bP9Lm5iumcTyJ9zzYm61zJq3m3HXMHitQfspLeeHcBxtvRx66",
  "key41": "4Sxjj3XiFHHpL7yG8vCxVjr8oYEUYF954K5YVLRPxSSdRozy5rsTpiKbye16tcEzYhGTue5DmZe5yxubACdzYbHg",
  "key42": "2QMJTioHW2XK32CC7m8BvReAMhB2EaBERHAkCjZP7GCCGETJNxL8MdD4PcWdoJH9Ly2ZSzh7fTSTNXB1WwgRkxte",
  "key43": "4sEFKnQ2nhrC41rXCGLgfnUboavEUzDka3yUcTfXjut5hrgpmq7CxWvp354LYd4sNdGtB3ppLs6LGUHWLJsSLpBe",
  "key44": "2YLoa8Cn5KtgMPRqe6vXTHqahg9QM1SF3D29FJmmtFSpnzsEYiJFmD54GPPKwPXMye66y6iB8ayiXz9eifBZBzXU",
  "key45": "4oFyVtAdnxTPyKahAsBbw3EtWJxjqMxR73SrwGopgv8S3smDeSNtRzvg2ydUUj4xBQ3EZX6ErPPJPWHZxvMGC7AU",
  "key46": "3UMuN29PYuUin22iJjGD5FUHLEcdrNQcWxEyPwpQB2DHAnj8MhPtdTGgUBqnk4WxDrqecLht2pMz3aDJ1wjXeFnQ",
  "key47": "5KNe2GMVx7eunS923LYdmDrhCwhUmnkCrazhhQzqKUuhLQf2Y3ziKnaU2q2kDV4pGs2fSJcFifGLNdiZNvtA1hUx"
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

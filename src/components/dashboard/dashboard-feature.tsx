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
    "yCHsqVAojHATTf5czvaHu2LeSPDCNmQM7xg22m4AG9gHivVjeqjD3KyXH6VGw5ervBnAFsa2zEdtCGu1fMhd2Q6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LueCTr4MjmVSvhsYsxVTucPwSjjyKjAV5Bi9RR75evcENvchtrTyQ5GVecruNQxu5csqJpvPmyytSLQLsqWFdKS",
  "key1": "5MKVYpWmEcocAX5rHk7SDw7Yyn751gzi3YmufqY3aKDx7iK5G7nTWivW5ueB6EmCt5BPEVw66R4MdgGCyTswNnTT",
  "key2": "PhuvfKhxckrosfz4mTNVCxw65VL8mb6xAKPmCFrxqKvPruinjW7qdQDVKWmH4t5UzwSPrXi2vXNT8c9x8wUPmVD",
  "key3": "439kQDRUtcgQZasTT8nkYRz4zW1MVSpnptDDrVtKJkb3bEHVq62cpLCzWFbZc4Ff7vG8Cg8WTRdcTwcom5Jfs42w",
  "key4": "3E8EkPFBGyraDYhfAJP7K9ub12K9NF7zZJouyTNECWtzZfAjXPyYqU3LHdwgSUoYSyPqUcHnMhfnYzLLBoAh5HKq",
  "key5": "3xVUpAEcTFGjxGwc4HxJs5jFK5PYdxKay3XeJb6swm5DazUaToxrA223Jtwej1uGAeNERaiCxkyTrz8rHRiUVnwA",
  "key6": "3C5P9GETXnZaG259fB35gzPZ9Hvgc2g8nfCmq4UpNcQqZ1VpYoHV6MtWJXbjUaBxeLV3dsqas3sKtubBHHd2xhGA",
  "key7": "54yEHngciLBinm94hu5dP8J6vtobe1tQPVaCUcDUu7S2VEvCe91Xx9VZrZzP1CTMGLsBp3HwnGrojzsvPUdXfdpH",
  "key8": "4aTkTdJX3NiZRBPnHxrgVmCmG4SBbRUMLxBKw5VLKtgjWtxcS5rvZEog3QxUHLz5yBUuiC89H6Mft38Pc4QZ5mgQ",
  "key9": "66bv2qnmSwALBg5tAgWYWeRvDktpKrTGFBcKmjnUWG1eQZmBbfQr9Fy3yyVsbKEu4uCRowuAkx6q5e1PuxM67c1w",
  "key10": "4kpGb1TDq7SkYBLFgEu4dMyQ4L7zyvXEEZvJks6w4eXmEiHZRLNzZH7ND916pswa5jmDFFK5paMGr3rr8WzycMoa",
  "key11": "4jT1dBDxYJNZP6n6vSYyCph81ZuRx3SY5W4gdK98cekNHVpk1BeExLmmhu7vnCBkAJ68BZ96qxVr4iUSGXnt5CVF",
  "key12": "49F5CreUezX4m6rdgkCUU6qjzG1ZPBfdJUSKUt4pT5SQwdpsvtbwYrywjmzWpekiHukHeac6a9H1QY5afeenbMKE",
  "key13": "58VdYaFkPe4p9xbtvnSA9dZxepfyfZWBrfGQCXaxMzQXHRo7iW4vDUThJM4seJDJMpt9YApY9TuPanQ3dAJUwtne",
  "key14": "4BRWkAnAvdFDhHMsDW8FKqdbHu2NZFdtWo6SH9HXrPLnCQ7FjAtRWs34B35QjpaTjXsPPFis8EssL8VWkhiumpzu",
  "key15": "2jomuawYgAF9tzbfpd9oXKitVqt9u4PvnM5TRdgf66VY8J3ujDpUdapyn7MxReUBXz5933deJpwyNbQhZZEFGQdb",
  "key16": "53mDvtn6pzPAU23KSTLpUwtkzRWryeyzYdCxU2uhpFKTyBtFTwhbGXVXiApEqnRQWfQar31M1ZfRn89Q42ieUm6W",
  "key17": "8ZAWR4Bh5YCXyTVBDbTbmowC1b7vTR3xzUzmkr8G2aA3s1apaMVrMyN1wmDUbpV8EVsRrujee5ziwp3ZSXrSnDj",
  "key18": "zX53oa3epAnMw5qQiHJt1fJL7q5rpjHJQp4Wn6Jqop6nTBPJdhhpRD177FGNxXXgM3ZAeCCKe5T8SsACdrb9iCJ",
  "key19": "5FMb1f8Dawon6Trxh2F34hW8qXuPwcW6uDGnd6UVMueBg8esFqss31aRmXWaskKAPCHd3xREv9dvi4Ht3VDkXun9",
  "key20": "LttAGXCJ2Li5MSDWW4Hb8KAYWry7mbqjimRbXeWGRiRcuD2F4WS6aLa9WL4rtQrBRbwSh8CzbsnUMLvt7gsFFzd",
  "key21": "QWEuKKVeLAU6vWGdPzLxaQzbFeJS9sRMTnbeuMz3oRw9FM9DMbPd6sfRuvdfDVQ4i5Kd3j31k7ctheLQ1FhAemK",
  "key22": "2frX4vkPCrs9Mj4a6YZxD7JLBAy6Mxnu4diokbthX7DujumMePMh2AyT3wxo6R3ZHm5xGT6wFRARvTfRDGBAoohb",
  "key23": "4vwXnuY1NDTorPdk9ACEdNsLXiiCZHRoKxYMat2E5Ekbmn6qZWfnPYdpMX4fWsGTdiTKNZaXQodHN21tVuC4o6AR",
  "key24": "ZHFDBxevgwiy5mBcCKeUyCMM3GhZ8SnLxxvHWFnkQVNAfP5XY2coR9jH2jWrgzBBRmZMq4hGyMhpV5BZk5CBfrc",
  "key25": "5nBkPbJ5HjRwpU6Cpoit5orqseXNuRnLZkuLwYj7b9dqLsHjxU15pfdfyaeajL4V5k3WBUtgvRYiFMsBYSBx8mxZ",
  "key26": "93XFxdQgDFGNpoNz9MwQawGKTZuaPaQwgEgnCqmbcDsTe9Muusg9xTYMdfm8PDumfocMRiKd7xV7GBbuWH42cpq",
  "key27": "R8KhvWRpq7wC29F2KEoZrWTDsmeuj4sp74DABQoMHDFBtw7pwsSm4RfnHN5GbhdgmtfNquN9WxawzE8x6tCWAc9",
  "key28": "2GFHNzKsTGpUjiQ8WuaKg673nJgiaFFw66RZXcKTRmrmxAJ5X9jAUe99m199ee4X2tcc9dVLehRDjiuA4aDYSkm",
  "key29": "4QW1zr9BHx1kfH5Mbwo9nzNW8nCgVku3kDPQ4sH4Rpj1FgTFDv8xtz519N7CukmNsLBCTiVq839pCaHKLScZW27S",
  "key30": "5f8bqewBWFtFDBen2rN1bBw1qo3nQEx4FnqHhyVwu6FM2sun93F1Pwz6E299v57yY4gJPf9v1HshzVx2rg9KdFzw",
  "key31": "3akmVU4fM7zeMjxk537kKeZAwH3rgxm3VuGnZZQ9vHwZ8PjecqevegGDWdDzwv97oce5qQ8FYsHzdyEvz8ceXNNu",
  "key32": "4gBEXcmTraL54wmygK45nHXLaoRDnZ2ZbwJxHy1Zsm7mxS4bZewFUEqTg7gQACPMt4unF2yx6cmn6qN4GqBiGNt9",
  "key33": "EeqB7kuRnkZ8auruhwShPpE7UvrX54GXjFBFTTvpzf9dxi1U1MpwMXvnG1nL5Sir9XmkxzWkFFHUc8oSCJyQJny",
  "key34": "5WD7AqTiSV7FaGof56VfSY5rabpVWVvwaQvsAkEgmB2DLfmSzVTEVH3XFcz4vykqUBcMTfMRQQMjfnJMZsXCCgTb",
  "key35": "WpkAaWadjE1W9sVF94zoVzukU6KE5wko1keif4T7NPxSesCAuqBhXsSJRM4bk4eWJxVormaRV49JC2wNf3eEMG4",
  "key36": "4GWFjofrCNpVbUHGtmWDpGWeUxzchtGU4dhsy5JLg2TPGVoXxa5QHEYT3ASoR3At81k37VSqWSjLSVdohBLPStRP",
  "key37": "wwvW4C9h9iUN4kkgLCSGaXuCExHqvw8wc4wncChbGuwaAe7mGcWuK4BbUG7Amn5WNTD6B6eadHc1wKSPrayuPSA",
  "key38": "2TLn4YVYzyHXAJDtxELk2Sqzp75TjPMw2tRiznN3PTXjY3x82qZDxwgB2EX8qbBK54WpeHg3KFfNNBNDHTCBPJkA",
  "key39": "24BzqH8y6mTsJh1fvhgV7iaE1CnsKSCX34rd8fjPXQXqgAQSpULriXp7a8gmRDgQ1GHbc8bLqhVW6P2nvQM9UzKP",
  "key40": "4VcYPHpiH69p5w3n8FHXoBfSjXUkTd2GHoCsk8GjtPQDTKTk9xm3Hxwzdm1dSFT5UPppiprboSqN4dUtsT9LowiV",
  "key41": "5t4VASwckZrNDfFVZfqx2VJibCpgBRAhTHzDKshay7o1aKvFB8JsXevpPNkPMvY4j6fY2ZuAH26q4UXjWMGAu7Ni",
  "key42": "ZG4D4YZQF38GYcXpTzDAk9JCdNrLZw5GkPTuG5CxdHCLFyenu84qdkxb7KLUB7pBtCRyxaV45zgz97wxxQ3Lz1o",
  "key43": "24pocYqcry63eSHvQkpHHhDTPsiXnVEbXBP7dvvhwRg1oiF5LVcDmz86ndms96U3JcjRQkqmaxxQ8QEWumWCsFvq"
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

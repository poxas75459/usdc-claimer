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
    "bp8tnTp3dwr2ch7ZUPtANnvbrtrAnSPrEg4wFnjYP8i24HyA52Ev8d6C2iA5De5gWoJpME7EPWtfeRgmtdg1ALc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zWxYqarFGR1rcm1Se7PrPGG1TTDhgpRzuZHDGHiqDFPa5D1b1NsNqDXAcPTZGu3GtfPc9Nx8VWEFmy4bif1TWv8",
  "key1": "238hUkYCLHyFH3s8uVQMGTDJMmC1d8zrZC7bM9zyNeeg9uzkkGCrvNQpaR6Qr2T6wqA1bYCJDvBRNTkmKSeUdpRR",
  "key2": "4FcJnFo7GjbVsrhRRGqxGPssofKppfy54ean3sZ5NGi1AddDctb3Pmusy9495Tvhn73qx1qw6uSipzxXdFUa7Rnu",
  "key3": "2MpmzdGQ1VDy5mSeMJ8qyJyTUhbrcTgRfGTmXLUahZb95XFLyE3ttbbtc6Q1eNfMEYiRGLbcpyocDpvxVJKUiVst",
  "key4": "531qzWwVs2qnsYbUEW1QyFqZNtHvbXkFjj3uheUHfFzXdS1wS4XCzsUcrgDq3eEKYBhsi7L6R1a1o1nAsvwdvdvr",
  "key5": "3UkUj85w2LLCYBUNQrN71NCZRFSzwbsGWYPmNPPrHSofqzQ9EPvLmGDpgYU18NV6j17N1GmF9XL8FDAfCU1HN1JW",
  "key6": "DJYUA9dyfekDxbnLYwuw8LgYHEdUh5BQMN8RY4Xg4iHGREcDZsJTgjTb2jGdm6iQANzfmtHFr5a84tCXqe6XwKa",
  "key7": "3XFyXGfUjweKJ3MBd2BJ8uoWEyoTESVC3CEgYS5Mf82wvVCqRXxeXuaULC6jdu6kebU1Bt1gemGs4AC4ThDU1Lbh",
  "key8": "m78KQTHZzJf3rtC56XGNngP7TyHE87TviXadHYxLecVCRVPaYqbCN2XiAeNgQKTbBWjzGBxtZCriKSA8nPbxCKD",
  "key9": "2mwBR6UhPGzTuyypqxHWYiN7Masf1yKpuvPad78ECtHRheUbXAcy9LGxCgNHbie1N5f9HDkCahwxSc8zae1dxedU",
  "key10": "3APggRNTyms5jjnHuYvN7iUqgfGhMV2Pkk18tNfN4ojdsscFwXhjtKD8Dqv39EedWydoT86fF9RvudwEjRKnZMiF",
  "key11": "5PVfgz2VezBb3Jkb9JuhidgLg9GzFoYCsfYiou52oZxTTnWcDnCD1geLaKRV2Nt2jAELDYP6Gyno4Lf9dUCrqBk2",
  "key12": "2giVFYW4AEFdYfkpXMet6Vcqiw6jpZZyprzTpxHBfpnd1U9CiaGg11sfX4aAu7MYiVvVuQBZPgjCmRm8ueQHjpjY",
  "key13": "4E97FB7fG6DRRErdT9dWJWG6HSA7rKvjFUpXMzfBS4eVzvBGQnBJwVnub9vmvGjX8YbvBLQoEAGJ16Fg5w52VsAE",
  "key14": "364mpe3YwipifjMZqWeffGjYpV2yYW27VQtJmzrkjPZZwSnEBXm1pZcfssTs6ja8q27hPdcL1QTZbPcaPDXjYUR7",
  "key15": "3L331Mist4a3vJ4jQsj8Giq1vkeBWtQkvD8efG1Gp3jFHPywmTKiJVXUyhf8nB3nkbLUM5yVFZGKLyMWF7U54fac",
  "key16": "48qmgWmcLoj1Z4hm6Sru1ZuTYEYrv3WckaocY26sQnK2JzP8GrEpWajaP6Rk71ZmdxPKBxrcHs2eArfwWuHSmuSB",
  "key17": "318E5F1mdhNEtPtMhyF8N2vo7D3rmaZYhxCCRKABKjnBQUou6SGDYE6tVS5Bqa6vhMau17p28KGWmszGoc9vdmJQ",
  "key18": "5ZaAD8p2x92pxXVsecrzGpnT5zwVesPBj8yczWtrR9GNc389UoA7KqNMdZp9Jx8pN3Fr2dZXEFVscmp4kX38XzeY",
  "key19": "Sx4qyvtBwY3gHx9YXhP3367HHSGh6oJn664jgupvN31KscqQ5ygCzTTcJ4HVPK9UgefqcvHq98wFc8XJi82a6db",
  "key20": "4kPs1Xhz26uxuBucPjcF4gg1xs4iPToD6fTQDqwwxKdRq7xTBYPLqmPnqmnHUWMXcR3L71BsCt1BbWNKEyWtVAHc",
  "key21": "4XPQ9eban3T9t9QT1XohqTzSW5quo98h2kbKeYBi8468Lv96iLizeKQ1M2KKqbkGid2RFBPBptWuUcr2uroYL74q",
  "key22": "3wzJLgmBPgRRHjeVegNcHnbqpMRZwn19USHGuA3gKHS9hMF14eZyb5exT1mTLM7pTLDfnfwUPN7nSYuVsp6B6DS",
  "key23": "U8aMYjGAdMpXZRyudJyahwoFok5tmtsEYquUL5AHRMuotNPa7kJpBn68G3ipB3TKezyfDBzJuARsfAVQqEo1Rqs",
  "key24": "2CsatfqeU2T2YNo41BMdfjCeXMVTMUvKvPx79XZSGVt7AsHDG2EnU42XG8fGRLQznNnKonSqUjXi5B396GFc5UwM",
  "key25": "3KAaJ6J4Em6PTG1L8Tjs89RxPph6Mk6Zhvg4Hu1hwovbGF23o6vs2q6riazC7yy4b95M6exh9tCTHX89dn4Tkuvj",
  "key26": "jh8F6zKUssdyUYu5pU9Et7uVvp6DgLme8JAovw2gk8z1fnpDAygUoDdVV9m4tzEJFk83eCcuSAXdr7tDr8X5jTZ",
  "key27": "4nMTHTovPPKETTWkd2Z9PS8vBJ3a6nNkAG9ZgRBxE5pg7SnyicDgwtLcGugGx9PpaYEfGp3ML3a1UtxP88zSDQxz",
  "key28": "5ezRqootUo8Jn5ggUWKC8EGJCY25pCivFPoU7BvHUFG5conFGpnw1S77ThVGw2n27WYkkP8mXdTmcXqdN3qiZADx",
  "key29": "2Px4TVTwdfhE3p675Eh4NVLWRxT91L3PQHivpTqS8xPx96NhCrFwuuYzwnKdu2pEvC6RWfoDBc9EkRmNPbJKgUqV",
  "key30": "46uGo18bmD3QaupBFjZ7gBtELFjU3w8FdJ3SWauKrkrtSLUsBiFZcgCPRCaXYxZeiAKYAbPoQhS48XJPcjQwpnS2",
  "key31": "JdY3GUiqUy4137DNz2m8mv5XkqeTV7Gh9cv6VosCPnoHmwzbV7FRDSis7DRkDrFYzyjLm4GPk527JXUKQGiFTfy",
  "key32": "oXSRmu2q58GXP3tb6MRVowVJ3aLUk83gMZETNKzfyW3eqE7TmLP5UDJQFaeD7G9BUQUSyYVEYNox3tbZhpCKcTx",
  "key33": "4U4Ck4jPnbynYDT28ZGSSidbzU9B4R3sBJK71Mn48a1veJbFbv64V6rqRF3PDuBHUhiNZEdBbbShtahfzmvx3ffd",
  "key34": "2LCwKorZY47kYFbiuf4hzxLBnZHywqstt56vKafu9k2MbQh7Y2vCzEB8pRniVjvAh2e8TWHzwpqUCLLBuXuD8Ccn",
  "key35": "2yHcXwEQugCWNoyyaNSM5H4dkXRyA9LurHP1fVTidQBDNSzNZZpWAHMooYTUczFwWZxDSL67uC5QEpVtUYBziJE6",
  "key36": "5CWUALSnwpv2tKxoTf3AFaYTYyKRFzNVJ7743n4hRgtdeFFWdzNSYQiUyAzKo691sw9HhQao2cVxv8fPP1tSVw8n",
  "key37": "4kRRKHrEx8MTUq7NVGpWzJccJaJ5wzQr1iKrUBPHsfkbPFREdGjJQrhLY8ogCzRTuwgtzxEfNb3thmAHgdQTjdGZ",
  "key38": "utWkWyddvdrFoNZdhAHxtijnHWWKzTnpLwPvYimPRvmFWqwHe3Ljbsm8Lxq7i8VGq9ff8GaRpe2fADHsMtkKsgc",
  "key39": "2EK7ZkGAqQesZaJKkTHX95zxrSHgASjyBU1J6d2erupp8UJqrasrps2kp9somzvBd7fGmvVWfs6eAMxjqw3t2cFN",
  "key40": "3J8Vnc5WHYiKhv9G8Nwdc83Yche3DzPGoRL825NAkapWZL5Uo5HZbTRaBYTDdEkjra252A8WtaKMmTAkUBQeQoA5",
  "key41": "5eqWctUGiuQZnHT4cKGLxkRMQkZ6ggWGLfi83PAY2tG1WWEaypUx6qjtdZm3cCWsQcvT3mFvLvESUKTLEczBk6Wd",
  "key42": "2CPiv7NWgytTUmfAN5WuURVYqzTCXjBqHXSPHBvjzMACU8iZzmMd2oynUhgq9FHpHykbaUf2xffSDQKHVeFnDfxf",
  "key43": "3xmHyGoBrdX4h4dBdqxUqybi37icgB7QKa6bQkQgZnzWYbVzsxYfvTzVoDhXjeXCoZno96xTW9comDoH6Hke46uk",
  "key44": "2eXwKxEoYxSszeDzuy76mfyNT3wtxuQKuessBj87p17Ympbf4ccf4mxNThRs7h4R6H15VGgQ5XiSU3rL1wAcVvJH",
  "key45": "2EHh1NHTD2DfLK5D3uyFa8HiCAtGP3nEpWD73xon6AoUj9e9hvazSknnQkLDvVPMAxhhoGseg1h27E4oKPsVkGCE",
  "key46": "2EYiX4q3ZLaZ6X1J2g93NFgs4QCQeLyUChf31M5zTumHEf7VPHABgUuxM9GvdDbkUiNfN7Tr13Ar4dEEg4vbgqff"
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

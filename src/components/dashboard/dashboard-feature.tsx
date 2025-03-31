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
    "5PbwbUzDjjn497p5VU1DKyBpkUd7nM4nGVjNq5sdawseEb4V3AgryMWaJBHwJzgJiULURSHjnAEymdTUqdea78rS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61dCHeZ7FVbbNZh8KzNscPieck7TLXMt8QbdZc6YvxgQFcBKi3vs6ZvWZW4m988qkHsPuaTbvjQRSNBs96d9riqW",
  "key1": "3QMt3uNTwUeUejJHDedQt83V67uumw47Kr9PWxTNvsAMzG47d8F8WEsPezPwYkGUbc1uHpJSGu3tF15LT11xAsqH",
  "key2": "3upCwJcCsvufiR188ZXGPaNf4ENixEtwDducXUuskN4XqRZfGqKjy8BZsTxY7KQie5Nh2QR6Qvr3CkyWaLGtWX1N",
  "key3": "2s69yzb2eokZqqZoubeU9jQPFm3ijeS5JYopcbx2yoPJUdNJ6WxjZfJ2FPnRB8omQtbnV6TJyGrEXSzKDUytjQsz",
  "key4": "zUwrTdabMeDonZgmNg3ZARhCcPe7zodkWPj12x9JETwz8uyHp7sd7vqkBzNRvNfiAwzXa2quKNjf5TqvKziWHdh",
  "key5": "3UZT9VH2zHmSUqM2SmkgG5sFTn5sE3aKwHW9Px5CWqUeqqGj7REuTheaNYyiP19yGfi91iXDraW6UacwEai1evNt",
  "key6": "5u3DVk4zAzeH6Mx7ede994SrTrcVLkqADg1Pk8huWUCLAzfVHkeaCJKoSbz4h4LnrDjQTNtJCmDYTwbXQVyZHtkc",
  "key7": "4XCfiyzJs3PHJtV3EBwP8gAH8D6KXhsEsm6g1vJJmH7mMcayXZaxqe6Xb5V8TXN7omTYShyb2raZEwRirrsVjwxD",
  "key8": "4zR6kstMuo1HU516BW25cjWMvURnfGTYXAZziiAS7u2ovZfExevkRCuZ2dGrC4rE8MRyzrDv13oJyavZY5qLXRxn",
  "key9": "2kWwWa4o9PNvbTHphi5fETnVTPZ9KCrgjGxoJRmPYXnif3HzgTb5i2vV9XVvqisVX86LAhnEs49L3v1TTfQjyyHR",
  "key10": "2Ldia6NMC66Z1CbFzeD5Y1n2fTcxGNBw7QDu8Sp7HsQ8dZEpfDVYrY5DBQrsKrKZfvQ4QfarWWgCPTQmzSg5rhTT",
  "key11": "mT42KFMDnMqo1qoyPtbkmkVJ6fMs8AR5hRvGtagaVCmDcHj1dPKeT8m28zGgfmRETscQeHCqG5kozrv1P4YhEzz",
  "key12": "2t3ELEBFPLoDVE4gT5ZC59rA444BfXMJQouz2AxSzCM9M1dN94zoQcVPigvB1xaRs5md1hW9hosnhDVRGeqXhY8g",
  "key13": "hFUjHKj5oveVZ111aJMD2frCMJhm7KDeZ7ik4iXqezNv22a4pcgzSeW3hUFaP7J5mmgixNckyv7KLSLG9XhGNMa",
  "key14": "3Ue29Tk7rPipDixJXBKc52NXr7krMZcJB8hkwpmkuDjLKeTkMTehobv6avJ9sPXcWUnXDTxsJdLHkzufhKZ1VcXE",
  "key15": "3FPjUF1MNcqwPRNXvjKfSoGpntwaLpFi3jWGcRfoHqGGuu9fM4uarY9VQQrbcwDZj5FsjAneRkynusBBWVW3awSn",
  "key16": "3KdhozbWRZHap6GEpzRAqDpiE6TM9ZDYBnepTi5ZvLwuTbHjMDjKTDY5z9YKDmvewf9MVVEZboRBNGSb6kd31Zak",
  "key17": "4sLz3kaXXYVhECKcpvxiCbrDnJS1C3u5Kk1n5CmdB7DkRC51iMpas1Y9Cx2w7g8qhVPmPeeKvsCwggF2it788Uym",
  "key18": "4WxKhPiutpbVVbxQNi635a5Ye3ykbMPgjUdWLEGNLktZBcgS5n428etiTSpRSmEAdQ8pRbxjaT3xz4vnWvxWypDx",
  "key19": "5dKAmWE9JHAAy5M3gHDjoRY3286SAs3WTXAFf1wuyqU9AHngsPjAbtV1Vv8YunWRzY1NJq4o9VqWg9b6ZR36MTAY",
  "key20": "5K2K7Cj9UuHzF9x2byz74r8G4sqbHNthbRdSw8b5SWrvfmTYbWDCpva182e2Ko8D3M7hAciUAiWJ3pSa2FhAV7rz",
  "key21": "2k8WMdKDxYLrePYsy6VaQ9JYM95qFJyEG5ZdfxCkot2STLYRahaQtY6wZ2tPpJWEZRXJjikMGiRmWUGxpwTmaa8U",
  "key22": "4jJMtjCrHfjGTkHYUr5czPZ5MfUgWRwMMR5WgNmMw6To6G9HxwSbyhz8Ddi6NwLb6z6pwrwp1UVQ5pfhwwPsUuoS",
  "key23": "sKoob2yU5ViPVfqhnYSuCuXHDKChkKDXzDrPSFQvDupRj1s6aC2iETQ3Ktr33XeQhDaB4Ys2RsZ9Pp19AG11ovn",
  "key24": "4ayn7bZNoWLJTeFuV8CT7BzPFUehS8w7VQVQ13hVKQvT3JyuStiWzXCDNTaPMqfMhvTDd3tufH9tEq9mNc6bwpki",
  "key25": "4bAu1TJEZC36APoAxkUkDuPHvvp4c4GPfj6i8qbMKvN8iv4UL4veL89uho49j1p2fLhQxYWFA7JHWSkWgdivVWr9",
  "key26": "25oTuRnkoF4YX7w9GNr5f93hN3Tj6xYeDBh7zaUystB2VPhjqQ1RVSrTEbnEQCCevTWGF2p8YhAfVp18SVa6e9Tr",
  "key27": "MD8tPUUywrBZp1VpDRjijNzgxKY5dVHZrdEnAZ2B6Yw2GSDjXudhHrDMhy863ZMKFwSwxKP8Z75AtEhef7rjgoT",
  "key28": "4NhndUQEvevUZNzwasLAttMVYUri7N5ppi6TKdPgakoM3HLMddg1Ae3L9GnT1PdxV2BWWtMzou9Qq2uwXvprRvKV",
  "key29": "2qhiGBULRCmrhsQsbRhLMDg8PVyUhP1bSFGxWMcfno1pgpTY6dZdJ1gr646ZvVsqT1Zemuv3PPE3szopRU5fx4Wf",
  "key30": "5jWNE7jRtt4MpWhsS17Juwu5J3s43UKmF5Fpg583Pd6eyH4Ujdic8TDKn7VofHTihpXcWCm7v6gLPGUe3sYscy5U",
  "key31": "2N3mpEJQMQb6Q7TCAArPfSTpysAHmvmxKyhXhVPi7NoHrJwVNBPmKzNiKg6Eij8Q34Nor7eiBpB9RtrtSMGcJj2f",
  "key32": "2shqUMu9VzTDh1EeU5UEoANrJ7XMKUF5fbqMzY1v5u6jpkeG3hRrQvfSHaSoQsDWBdUtadUDQXz5EEQ2MEuBmqf",
  "key33": "2BmLj1jasmkrjqtT6hXPpaTWd7gM1eVYrUntucgesipP4DPoYCJmdTYJX1M2m7KKxVZDWYZEQMAJpLxPJDBK7doK",
  "key34": "2LaVpon8Z5noG7SGM1zUHLCeq27dMAwFeWqv1fQuAkzkjkQKQ4r5DAcLJjLfKGF4oKx1fXLvchpXYRdVXDD3QL8j",
  "key35": "DKRSMBWxf5FLwJUzTTNa4DLrTqwvEj3G7KZSUoLfaqFtxYLcRWGices8dcSKDuufg22CBGeikp6Aqm1JCd4TkXp",
  "key36": "39XBoYeUVXAgVBW6CDWVdKX7niHUF6SZVt45eDrbiNL886TQHUBk552xj2Wz6RfU3xQig8bKrdFXrQHTjmpDAGAA",
  "key37": "27ZrimU6T2vahk4SuFEWPUoWsVvzL4zGK4jYJ17rionA2WvRsSwzZmx1NqzBUhWkSEcsHqJGUbB7L74GPmZYhXqX",
  "key38": "64CpjKcHp7ZeGN9qVvoEvCqwR7RCgFJZS8cDe33Dua2dBTR9CHUyGgmAAP5zGGB2T1L5gc3dtZmn75ZC1Uqw571v",
  "key39": "vGxKpTB3sDgCaK4TKr1LJcm7nvVCWoJR9sGxSucgagJdZK7ZYckxUuT8S5gizFfNt6vBngxHrtYx8diitRzGvsN",
  "key40": "obQuByuv2TNJkwRas8D2BGdNK7Kq2R7khKEUELTx7qu5KmyvEvnr2aXbUheu4AaU1rzccgwMt2teeKZoapK22St",
  "key41": "2WUtYTYmkU9CrvpDZg4SNbJjjMeajUGPMvfe9s7gmHgY68MjnW5Trc7BnSHuonZVwT38jq4HesKWRFey6rnHS9SN",
  "key42": "5bQ7xErimZ7FCGYDpydQhPv1PUN832LW9APa85Xmi1MnHw6jEFmR5DS9xX7srS4RKX6duhethBgUdq4xiY251Ktw",
  "key43": "XgunFRGLfgQYhidNCBKwPrL95z4jjtZVonoyiKE9cscNDbjHH221nMf7MoHLyvc1FG9r5VmJYbiLV7PuSu5xBzS",
  "key44": "4Xza8dPGPvup7QvKsTtfGuf6Lfja9Zrhx6ALpD6uPa2c2PV5UHHmTRXqWKz13ew5udTu1DuKT2rj6Ck79BC61Ws8",
  "key45": "3Z3s3EJbNausfjjtyF1vjuVq3mpLPemWsbTEoNBHZebUQAsW7M3qKdUzHVXnS1wtTeiZWHEM7SHkxin5FCK4S7Qs",
  "key46": "4xk1D29kNgMXLAy8P53MaFx76pPhsumQTA2mKY5LY2rqcqCuYBZFT54uwJ4qt3HyBe52evSX98toydbHwwvjytbu",
  "key47": "22S2KKTKCyHcsAuSnZt9uu16gD3XXHTegG4QRiDvgYzCQFBy4aCaEdfKqPFwteEThidsYANbindgC3jAk96gC48K",
  "key48": "2vDRNiXfFdQRn1jkzK2tNDgwaGbySq5XjUYrL69Vk2QJJNFVK6fsZhYh5GPEpKzE3JwXCyWHpXRHxhbygf4BNRsq"
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

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
    "5B2CNBTCP5dmyV99RzSueWrXuPNJjU3UsS6izrAmitEKFw7X3E5DSDpj8i4VWoh4YW3KgYUUVDNV7J6rCzM6UK2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDhAFDGsHb5Kj7D3sT61RV879HZ2Q7sJDk9Vg7hyKv8h9VTWnfj5ESRDKzKTMVC9FPKn278VBEV74QiCgim5Jsk",
  "key1": "3knyLBure3vSssuPswCLQVmtJbt94LV7m3yhzXAkWspq6gGJmMYLih5g9SkuC2D88Kot3zuNarFuV1GWHUdU9ddg",
  "key2": "4Sv6vDunt8uwZgffmFQ6oKVL62iMSmc3tX62zbZmE3kjcAKXyUcF8suYJxR5SmzBa7YMed6Qhg1i56FixPrgsATy",
  "key3": "5WoJmnU23dtDfUKTiwmKmPGGes6PYxrowGz4F1Tv9SubrR3Hf52JMj94wrZaAZnw9YScDvfkYY8QkWSDFQowdUwY",
  "key4": "4TrrywCkaLwXTQBt5NEDpXsqNqLyYZFcL7sHDrFxFHf3iCdsp92aeFNuuUEz7No6cEaCsWrk3jRGTpDtF5dk7Wxb",
  "key5": "Q2ew3qkY3oDNxadzdqLbYt7asLDTiMoA2Dir6KSxxiy7JnUxo2BNYY8sdhJYZNj1YeRUD99KmmLNHTRz2Gec2Zt",
  "key6": "4tdt4utbGYmZUTuDus7KTe5SSMJFZRbh2rYQ4rtuXucdooZgh9wJdz7J2SmJehhMxpAXhAtEqVZYU5cm7kHs71XE",
  "key7": "55vVfUAbHd8mVtrLvsdUjsmPuFW7gq7JEaUya7do1zDqGZdwa5bnhtDGNEBdu59dStnZriu2ukkYvGLk7RJu3pCg",
  "key8": "FofeLijQywEsSeqfLyCqo7vTUVT4ydBihPf52gQSSyFRADUh7pPoeJvBnspoTCQBvijLCb8CnapGQ7x5nfB94wK",
  "key9": "4y8hnoJVQkxgP5UMjNvLSfcnJbxP543hCzuJoYec9nKVayDs4D3wb4zo3vGA72rA2Qb8C6vZuryB7jqh5gdM2Yqr",
  "key10": "4wcTPY4MAJTw9Q1xiS3Ni1X4eXi1VNefVR27JLL7HAoUauJWgeNi1oEXKuZqBuj1bfk7akeXwczhe6yBkTTyemsV",
  "key11": "3Bu65NbiqjCTViEVcugvu3kB9ugd67fEvEWHqUMwNr5XR5yaKTHyrsGDxLBhCRs7jjcYGUX4xLsaY4QmrT8hGrnZ",
  "key12": "T2qZw8VrnBX4YNuU8TEcgmHsA7MeKpc1tRygwta2pbuYT1WaX9k2Y5ovhZPhSD9AzcBpTgBaLsXuinY66WVgaVn",
  "key13": "3W4efyoZ6JAs94N3GYkPeGZZQfX4E4w1eThj9nhbha3DP7xWPaPEjXPJeRfgSixTnfLqBNkHBF38eEBggzTdJKKb",
  "key14": "3Z5HbFWZ7xZYVaGAwpzR1Kb38ijjYWoMocr8gQrFGgPBJt8oWZLhyrptMUpSyv6gvUF5neV5a7gCo2D6SUMqujYn",
  "key15": "66TTFJy3aSzUFPVej2ycWcKG5C4ANyKsKLxYCoevkygTAZiJ5ZjzD5zMuwg4UaQgF9WAwWaDgh2bcbtyL8pq9hsU",
  "key16": "3TnwL6WWLYH22MqY5fcGEbTsu77XXmkhBCdBdg33LqxLfWq5BKrhHRbrey9pGwoeCM6J8jhnyA7e6kCYDddn13n2",
  "key17": "4QLA7Fd76HB3zvmp5tCzApb8LZ1kYViiiBEm5AM5HemzW5JbJJ6EtuyMmPk9HL8TjYREDJzS9hYNXKiWorNiu5QC",
  "key18": "3bWhQgU5A2p3HZVdwVsLG25NPg1ntvBcV9Nhsc31fhmxnzqYceLxfuWT5qPcWcPvC6jhsP1EwMd2SyhYtdawo7Xe",
  "key19": "4NCfQPYxrnbmipJYKTF9Dj6brCifMUvtdnVybC6jnofdixEUtmKye4R3ZrqZ83vddTp2Hzk7j6qGSZTfUjxmnccc",
  "key20": "2Lc8MJWQUJJ63b1V9KExfY8Lv88vHyq9f8aKYiuJCPuVSiw9PEp5esbmyY3nXFyx4FPibd6qeRtn53SdPPwpeea5",
  "key21": "4SPj2dKMozJcVUbTgN6NJtEroGUck3j1WHaSctCW1BVizia2mTqE2hdGfd2RAnxCkJ9Amy6KztwpNpKk58SDMF4i",
  "key22": "4AZXDSc3LYpQSQnZBMgQuLeRuQeDCGu1PbVtUxbkZXrVDYyT1gecwYiUBM1p9Lo3yRKwtWYETjdvZ2pX4D7ghKsA",
  "key23": "5VxdrFFyGYkoBEJKqRgEZx7Nkzriu17jjZKLfra2jCEbKJu5vwpeju5e9Zmf42nTLHFCc7NhTdkMYF6cd77W4DTG",
  "key24": "onYovdNR9sBGxAz6BiKWf3FmyMU46kc5fk92Bz5qkjQGA2W4KdtZDSChPgFdyFbEu1DHD5he4camxB1s4Zjr138",
  "key25": "4XgQFxdrPoH4yRdc3ZkJhhKRsVkq2pdBrR5pHSaZSMiYiNHifprztFCYekW5TLoRcR1pryuLuyEDusZkA7BwAZUL",
  "key26": "4BTujbfwqgSpNr4N11DhXwXFtJwK5npoPQfb5XPcFQGk8nKVLMZ9SyfHUjRKSnLVeBxrXp5Fe64JCqzwweu4kE53",
  "key27": "5r6hd8rbPAP3vo1KqGFZs33FVKAVUNcyTtEFX849MjUCj2AM7GC2Tvun4GANYs6X6hV73Fjp6A5HgjoT8q23zH8L",
  "key28": "Hu7byeQDV1Xc2sJmEnDK9HZJAcvxKRKet7WmrfKvFXBaYpQJzqcgwFUKgcp6X8A6eK1ScvZEFScMWbzAP9RzCo1",
  "key29": "5md9NeqPX5iGvevntTpZDaafib5qP1VyE83yMTU8ihjSm4TgZrosuSnoGq4Hq7uxyTgRdSXEZGBmF6gEkbU2bcUJ",
  "key30": "4kz28AKPUVYsrpvCbXGknquy6Ndvcdk88pWdqMfMUe7kVJHpNTbYFd9Cc3HV8ZJ8SLnnDB6VYYy5L74jKvKoi5Ai",
  "key31": "2GkndLQDL16wfaKmH8J5dRH6piZuFfet8oqMc7nBSd2SW53fEdiWQrHKfqHgLd6uSK51WJPW8pffEssD5vd9JKaE",
  "key32": "3KpE2HnC3pRvSdTTRK6HrsnCzQjFZvsJX3zKzcbqXJT1DxufSPn5yrFK6NUk6L6TYQKsvMvewt76BqEA4Mj9v9iA",
  "key33": "5Z1Cvu9aNndNopGVy7KwJ9ffuqdPQ1tY4BaBz9TwgLcmbdGQNyBc7Wf42KCQ3riyqrGJR3jpK9RKJG9FERzZkji5",
  "key34": "2gkPkVts6KkvxbgsjKk3NXMkMVFZuc9bLYdTnVBNiVvi6xmuQGSogChKDyVe5hcKfuPNG3EdF9SgMTvA2s51J2zc",
  "key35": "5TEkd2fCM2G9Sh2Ho2FE3c98eyEafG2h3QcX7unqSCCH9a6cckr3q2PSR1pWjBcZycw6E7Z3b6ff1XZmTqNZCyHS",
  "key36": "4YnaPx2PUbKG1NBDyVEn6Z17XFJKGuJNYfWWCWysCXErpJ9PuM8dHNqqmRyA5naG5V8yfcBEMbt2TUBB24wdoz5y",
  "key37": "28urzq8o6gQQVJu5fHJau39FbVvkQsDjwVkzAEhYXkzrCh2G2CDnCVPAYrviufhoRNWNjWmWtwTbqTrJssmNsKsM",
  "key38": "2MRXeqosynH9PG7SojRR23d6g427XSNTsYuvdauSxEihTBQ57pgUikTFerEuVYVbzBuWnukTd9TTtRcxrLsRhLZu",
  "key39": "4XYtu2MvVs8D4farArmPyuJM2SNnFFhs7PtKHNMWCeWcxx5C6PsxB4d9T6MCmLNUkfdK542b1WxXhNkQsJ5Fms29",
  "key40": "5dnrqzufM95yK3T1VKwaSDkp4sLntFevq9bEfW4moQP1DknQk4uh2XmRQR4A1uJKGavzxrqnXoNMTRVYqD31bhve",
  "key41": "5UFqPBLXMBLpHY32KQXqVX45Td9oCAAKS9v8tgkfMsw39M7DgmYxmSEzXnR2tBVHEFKqRPuXVnr5d7wEoWXBvFCQ",
  "key42": "2heifhTMPBfjkrn9xbH9uJiZxAuZxEu1w3ViS4N837UF8taBQxXpmq6bZr7cmK3JyFVrAnVDGA25YGhLUxEuDPDJ",
  "key43": "53Kbv63sTNBs48qgvNA4kiXFgSK46JXAubabLbJqyfaN2HzdFRmNw5ibtvztXxuaj4QSMed4zUCrwmmVX7YPkbVj",
  "key44": "3ksRasBbyXthThkJfEA5aXqU4zeytybH586oE9Ki6CfvVtNPZEF9gw6CAHkem22rCdAfAqpar9JVeocf9P3Aer4F",
  "key45": "NSPFuRy3UNZX8QihNP8fgiEwdbeRyRELeQ22zWkCPB3LW7YHhy2TXdd55LmKU2z74wEaD1VoCPr7XCnUh1RQv84",
  "key46": "2NQYew3rmNkorQzVzUkBB5fAMMnnPMvdWyHGuoC5dJQxMkZqKM7syeY8rRUjDw5UDV9kEPoZMh5L8paMkvpYfcc6"
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

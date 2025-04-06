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
    "KA8BMpnDCFz81UAKR7Cf9vzeWnzeZNvVJjisXHQRRJxLy3Whi7DYZAAwJyxfAcC2MpjdzsGMoXJ7uUXhZ8FtLyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBAp5nbSrgg3cNL24z4xYBVe2PhT3sY6o5REJ72AxrScYxgHYfDgursYZhYWHUafAmMNzYYBjKRRr7rkr2sBLXJ",
  "key1": "3C7CRJfR2aLKuPowL71iXbbYRLkHzNuoxXz6C8XuyuXLbvZZNCLt5Z7qS3UiyBnwQV1WEXwgFbJkFocYFr4Yz8v6",
  "key2": "ZGSUrQccXCJAscHQU9Ri2TuZoU2xQQ7GKyvuTzRXS38KQiCATzumfV4hSat7nWntmC2Ta7wgXLKGtfyhvhUCfsB",
  "key3": "3EE3qMjC8N1khFZzawktixRyoLW1AsGjNGFAgF3iPxgogS4dxpebLeG8P5RgX3NJtySjC94SRaVAgS1pZ2bcYHWc",
  "key4": "3duvfgAR8oAU6hmgtnSPhSGmbcskCemF9jUwsHwLefrc4axmvTJdzXeRJi6jFKNAZea2mGqMqMqKNQeFbqUz9Py8",
  "key5": "5nym8qPiJicsZNdEkWv6b2S2SBW3L6DjkEWXGN9PytYcLf5hVRZ1GaoGtUsX9S3PDVb9YAU6SUPoMdmrjGjJLkpV",
  "key6": "4iPkanKHtu3f5mjXPFPAf4jrE2JaEh4CbAQFSFM4KE5kTJ1sqH1buFNnuv73CJc9mYCtbyFZqRzSEnCeBb9yFsZ9",
  "key7": "2BtepMH6Ko6b48vQbjXPKVXAK5D3vhy7QASjzkD9ynevjtUo8PYh53i96RRoCTXB2mzDHMyofDHskj3B2DDnszoY",
  "key8": "33pthVyTX1oxbNhSar3KdiGTHmMETiGgzRRJM9ShUS4TaRmXKP1KjcyDwuNPdYB4nRqAoGBtwnXdWLf4E5uesBuD",
  "key9": "wTu7JY7NX7e2jxB4LzaSnV5aybQQjVpXZQUn3yYWBJw66wwePqeSe2ecfE55A5Npmb8DtoPWYnq1zAFHkGM1E9t",
  "key10": "3Dybb1ZRZEEy5YgBcpDk2EXgc9dXokVmPorFMBUwcCv8GdrU3Yjwexmgoe1wLFGmXStsM3uQSB4nZGzmDKbpwAN4",
  "key11": "4YtcxVyodq58RoG2E3kudvvxPwyKn6RMVLj8vuDTzKrvYgW4d2quRuBGhm3fBFgpb7yRrKemvspy3pbGqUvzYwxt",
  "key12": "3ZjqimXFpfMSeZEL6zXwrCdTkwriKSNpSGUg8JzXbWVTKBrcYf91uSp5hhmJvEjqybR2sGSzZmXbXHFdqr5jeswr",
  "key13": "e1dNwNu6yMisGKHgfzouX1M6FCb4hEGz6kaFjxeSPmeWkAD8C9nsFF5Em8MMnKQLyMgLjhrB1ET9EyXDr9LqGyL",
  "key14": "35mDy4hu1mZ3VBRRX9McC8ik3i3eXrbW3pANJ67SwGjv5t7ZrFGeSAFa31RbvzQnvQ7iT5fCgmcjCTgofiEuMq6F",
  "key15": "3U4QopznpbYsxNEgjtmuoZ175z8mudfADTYcEgJcn27b6hqNukeVw4zGt8jvdErsfrKPm9KVii6MQFBqQiCPEBDk",
  "key16": "4g2RNfqHYfVTNKBNPNghsugZ9WA7vpGaev21V2yV77BHNjLvckpozUFxPt7gDzGsSmmLimGsTZjroDL6HCnKAxKw",
  "key17": "2vmJmHHhyNkA5T3A9KLkrdW8uFpcvYTyWW26E8Ab8KTbUYoP8Sy1pMRwMC8do46if8yuX7PqFBifzbYD39GvcRHB",
  "key18": "2CMunxpYMQeSMigMB26kaDk9U6yABh8ntGsJPGEJxjU4P4n2xvmB1jjTuy4KWsch8wza1fqLezaZSYCoXoXxeAuh",
  "key19": "2pKE5gjZvyTr33R5jMTNSY1tYtnfCmgb3WAY8Vhv4RRp8yHpbYrCimVNwpuJpE5eftvbmvefQ2B5ZYYBceCaX9eA",
  "key20": "4Jkv7UjvYMYXUCWxR9haVZpppQQVfpXWXJ9qUBpoE5gE5Rhrd1gSTgfxQAcQef4xEtmDQAaq8mx3PhvUAYQD4sAw",
  "key21": "tz3SBiUJEqFYYLEzwbgyLxFVb2W2Rr31PFDBu5rgmyJEx74CLDmETUdHUgKjXsAfo7ARswy3X38N56Q5GgsmYWH",
  "key22": "45gt6eGyQjg8XQxHPqmE31q4aCseAKSE51Tp3BbDyjNqS1a95kcUs5CA1qbrqZyDikXb1mXWLuQPUDp8ZWwQuhNJ",
  "key23": "2jTKp8GBj1S167PsStRCWbSKm7P21vkCXyrLzVnTefttQm4wccYCMCR1pjX9Ua95sjqnkPHHjeNGi3qCEx5FFcHz",
  "key24": "4XZFS13veFj3bEsNncyD5J16KmoePQ3EAZXew8DCQMWrJUHqAAdedJef7mC8JkWoP8ar5BZL1muQVMw6dENUZpGj",
  "key25": "4SXsio6VA3QRU6eo3kr938B23MFYhcikGDPJTk2gCYP1nbU24PA7BU6carbU8Th3DsxLBKBe7pbi9QvdbGi2GM8r",
  "key26": "2VVY7D1qAo7r2nhQwUFG75We5Khb7CfdWzTn2X4mievUgMrnUUSjpZvWGxnkockv8pZMJRF3VYHadmkuCkjbopLo",
  "key27": "4Yzek6qgTrgMYA3QUB2kHBQR4Bc1AvoG6YTfpUiKd49tWynG2AWTwhBkBKoWSsuTBLsJyWP7XBHHpGK6oTw2B4k",
  "key28": "27pivafBs35XyuQxehhE7Ty2n29SDiqWQnuAPZwXeLG619cqJQvunEv6hFnz3cxA2pAb2Y8yiZhKEc9w97W9kWJc",
  "key29": "65C9foJyshPxcH7BHVRS4LrBvP5iq4GKwQMnXrCuQGqvhAMtdjFTUXtdp2Jynx2zJathEbRmRdjPbSg75gHNsehF",
  "key30": "5RRaQxRRGEPL3N8cqFov2suGvNJ3rDvm5A7yPTr3LzGrXky3F447BPZ7epkYdFrFHzU8Bh2P2oTeVHGFViDyBASt",
  "key31": "5hBo156Z1dicAx3tKL9nfFaqddFxK96PihpLY5HewxAHu3BGQUNHPeDB36UwPKxP6J2rF4oNUmfeinvtYTQw5QWH",
  "key32": "4ymewDF77bbtEqvY5urBxEKGVd9bHFBZrCf7CCtoG7mghAzYi9Sn3pKhprbLPo4vFmAqRfpWBtQkf8KZ5bBwzWp7",
  "key33": "2rxRjGUmabDcMk52ByA1wQfEcSF9JjKxMTKpJcQyouq96yDgjXyFe5WThxmz4AMtXm4mgWLBYvHu1oXxcRcAKGZ7",
  "key34": "3K7LjqmCbGwD3GUE44siWfLAyWk9DBqhYiRTAnujPFjFdBvtXEbJkSmQSE9EWZ9LvFbfQpP5BeehevKsNb1vNYtH",
  "key35": "3p7WKjo3rvnENNwBySUbqETxKNFmErJAqHfkXfhDnT6jFvj5yno4V3w92d2LGS7nyLXD1sWQiq9F7NaRXeLUnhgL",
  "key36": "3MjRxLwnp8Uif82qu9iWBrcpjTMzqwMs3QCqSQDwnRE6aHRoiVs5FMCm5qwx55CZQA8Vv9NmV89oAJYNPPb9mrfk",
  "key37": "49aJizApdJtB4vg14GSmxp5BALqPt77eDaxwdRAMJZpm6GB5SPwvxPg55mFK3pqxxTZ3ds5F4qLygriA2chSxFqE",
  "key38": "3zr5FidWkXMqkMk3SR8CMq9NWYe1usFU9kGui4AVYuJQ9rHjHKmZWRLRzL3z5GsQjcPcotneiuWaYUFQJSdR9qZ6",
  "key39": "fLQMLhzytKbtkctif43T7AdoXDp3DHeE26LS7fsYKc2GNumkatrbQewWMP2QACzsUSRDFrFfhgzsiW1jVg4nDvW"
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

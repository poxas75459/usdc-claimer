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
    "4KGBbHr8Zzxcdu3WF8B3QCAR72DiM5UfskVRtxNhjQ9QBeTFiLD8T5NdTTiyfmdQtafXYgFTzvPfL3s5KLnE5n9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F99u8RkxBKUVkVpo4crDmQJnQyoJc12i8zFvr3XTnGptqgYPJez1WFX2GufVtqEuxThEMcs8SBg3NiENUWmU2E6",
  "key1": "3FQsSWszehnGHRgmQw7RhqoBTSuSTbB21tD3GCf7uArQRqT7RHA66cg2KUmNfr73YGuKNuk5A8PPWBXhd2fHTqKe",
  "key2": "4kKDRXZt5i5dmFErKnwH26cBp3iLhLX3WBQjWWuoNpuEejv6skRdviC4igLK5WrfGkVybTyY7ef73e56iTSvEzuS",
  "key3": "3heSQBw467EM6vsMRrV5ZGsrPejuGfAEvdqXikjwMHJgXgiG8GDKT8dc65vhuFsiqFekjQNfK6vUqYLhbm6FpN84",
  "key4": "39xe5d8uKNvwWmWsx917TDnNpYxJct7MiZVTYQkngiwwRz2ur1zicdyEWdjFhrH4Ky5csbFw3AZ7GqQ8VE7e399X",
  "key5": "KejZmGF3NV5GVdQJwkhcKAFQ9Wm25B4HuJotrVfg6isUtbmcpFT3YtG5ZH1Y8e36A8RAJcKtR8QXke7kecomGov",
  "key6": "63Q5pMpB66RmFxNtDyXiZgUQFwSdq9yat2L2L8oQU9CxXetBZzFpdjzvdan9mXhAejuqe2SLrn8tFfPSSRsXZnQW",
  "key7": "21rgkJhuF5uNixWdfbtdck6G5RrfUQmLVZBxEeucdzXJxfrpVoxj7s2DucXgaLP1z24uayfJnywfDw9Gezw9rpcu",
  "key8": "PXVTJmXB6zzmvbESrtt63sqpBmW4ndfYPosJQLELP3Nq2HftUbcWyK42c39LEHcyxMcN4VsUC5pdaFnqMhnhDH8",
  "key9": "2RPBp2r1Ehww6JBoTBiqPNoTMfNe7crjWVQpMwciYxR1hsz5gQqf1wKTXtFjFhDB13HF5Dmg5M6NWdCwfX1TAqt6",
  "key10": "24ncjz8rTZkQvkV1TgkchVq2cXyJQX7KW2m8YVPHWiKd181dfknAy4T3MiFoni4CqYDBDfQr9CiBumMKrQcdbYVo",
  "key11": "5Je5nnydNeVWPbaaFFSeJDzChBNyAo5GA6HW21N6Zidi5dD5JX74cwig4s2PfYneJXhiBF3gAnQCCQ3ZopWnosDw",
  "key12": "5BxDQd5qXzjm9peDSFo8DjENUfBXrGYfjK9vzHRgCuCP7v7BZ3SEPCbJEZnvRYwXkovDcRGqTE66HAfedHAPVdvv",
  "key13": "5xqFzC8XswLg7pB2U4tyDM126JGWSKABF78HX6SaniqHPLdTjdQE7X2YtWN9HdPrRbxHJhZQ5MM8knXSR2zY7WiK",
  "key14": "4sYa7TvaWLcNHJ5NbaMLXVwEMah4EV8n2yfmPHURg4H8MSZmWUWbLYMU2rDCAKND8fSKUc9wDywp1Wdk662eUwUg",
  "key15": "4RQGVSrLjg6iswqZgCT9rx1yKR3Cri6vSGyuFiN5G8h2a4H6KfpL2fUGzF2qHRywBbRLXAH14Hst5f4swkSTypdp",
  "key16": "3z6jFKeUQX37Eiwi6LVHjVkKV6seZVYm59RUQoU95vQtjZVuaZgSjPGT8QRCCFkt7QdxCvJTDv9isvBVFyx5aD1p",
  "key17": "5FJBoTTZgq1jjYBcWgW8rMGUGFFDAQU9oWBURSBgdMRQG793Bv4ry5wTjtF9TfkKzbZJ64YZv5e3uwXoMXkqi1GR",
  "key18": "4wtPvFcqtCv9i6PPQRHbRMo5vgHvyKByMnQkzy8hNH9txbngVue9V5H7an8WGEUMuDh5oFKo4FZro3WwkcNnpkhC",
  "key19": "5HFmVFc7qwgNvvuQqjKYySn7NVNQCvWU7ADVW7jD9RQoQdNZAa2qak6VZ6tjy6wdfsjHHAnMpYyyjG2ii5Da1ESY",
  "key20": "29XPZpYqQBLPGnnuCWFtB6PR3wacwmxQyBrcJr8mzuF2ywjpH8hPMfCtZhwXwN1h7pHJbaiZKMKczSCg1NG1cKJ3",
  "key21": "nSKCcz2b5WYuyxuYb5qEJHf7pK3VJHUNDi2Rh7uzWsWFoSdvAHsbiyPgcXHUsAgRHy6JSVAm9qbpaEcZQiLcMjf",
  "key22": "5tTbymUQpbMd88wg53TZ6FoKfCAApCHkFfbra34728bzfWfk7x6vkexwKtwv8U1H4j1wA4Gy9M9hDpBa5XqarctC",
  "key23": "2RLMzwWqzh8oApzWKMB1CJKThWyhDmJVTaMxafiCCpmKCtXPVETiD2VarP9Tnn6m24amLNL11FaddTwuDRaDR1YH",
  "key24": "5M74uLTqHwZASZS8HVyUjo5yZohMjCXh64XCiqLJEFDsbLjJ1T3yPiaPzsx6sdjDPZLa6g9YRmdNxbZzEuQSfoGM",
  "key25": "2jJMxk35xeX7iLfMeWhdc8KwfuHwdwNacJmXyQLCLeoQ1frH6DxLkcj8wKPjrownCbnb5cs19SUhmcQjaqP4mffY",
  "key26": "34qsM6BBGM6zAKBeHCf5fL2SpQZG3KhZuAEtQK8nTg3Yu6qZwgGk2qSKggvbZkFtnSk9R7uam2YQfXCxNhwfjyXv",
  "key27": "34ng4YeXwGzZkm1EFJA2UXHRFAxujpLm7ACFRhfFg1AyUvQBuJL1jQpCuH85eUBuJCKvZwE1UYnAHU3z4xFXTSQc",
  "key28": "2rkQzxCZciPfHTHnq41p3kPcZRMfuRTbn4rbRYfeeHphoiJxXC2tGbvpTcRZqBTQdNV2mF8FaV4rkbawMESLssK8",
  "key29": "dnJeMnHNbwn5Z6D45TE9BkqQWgqgVqjECHB6cUtSd3t2JGjvkmfMZPBJySnuJqUGmVPWZkTb1vZexZQWwzyuEgo"
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

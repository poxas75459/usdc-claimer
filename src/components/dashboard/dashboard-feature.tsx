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
    "63vUq7pwwCLqqv7wGN6xpGjGg6T8vG82dKhr2VpX14XsxvXbg14Ci3o6GsrNDHwnUH9W6TPq14L3TjgzkcALM61C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LQYwQVf9YLPxpyzc4df8mrdLbbVqf9L8wSag6HUJZWpdjjQQWbrpaLVar5UGwg1TTNQ2qunJPRKEyXunqAKyWMN",
  "key1": "65oes1ob4JqpiChmDbgyHm9zNRidRxRfRE6urG9c7Vgnhoo3YXQDWq6hdaLiX5V763cZTuAbcmjge1nxMYc1hP4W",
  "key2": "64hc3ZqdxVaXikuTydcQ5LhrjAJbwaiZNVgHCL5b3U2PCNMp9puLFuJjLVSvaNj9zeqkDS8cLwbk11CZstw8aB3J",
  "key3": "2cTCU3H8dRSbtzDEdvjaz2RJqbf395aZqW6Df3DkVy2T1rgruruYfnheuGTUQRSqxsF9jFTz8ALjJsPzFLUGkPBQ",
  "key4": "328W3JFkGjFyfub1eGuimfaBrCneLt1cxVnenp55EqNbDix47dFb1EMYKZqCapPdtXkoSJuuU3m7PwBYa6HFTBQr",
  "key5": "5vdy5wnzNGf3PQacjUnCN8RMUZyaVUK5FM8qDQwCXoJUrfWByaEFcc9cuAHbpuFEEkmLtDWAzLbV34xC5QDMVP3E",
  "key6": "2FgqSagjjzqtfyvSUZ9eP6qCGjEWDaBXuscevFevdFmBstkBpmphkEjtawLwTzv4oNwTUiizMV8cDWgLzEavCDj",
  "key7": "4p81xppzwNxwTYu3ck3XiRsVcRksQwa8aeDR146c1rGEcBXUNABhfTdHLoauyZJb4Xoj3k7642NQv5fPW5H7Lyvn",
  "key8": "3C5x9BzPJ6jsYkFViyjZ4cDF5Xz9LidQaAt8hr5X21Y4iQqRT7WariRyTCQEGR6yu9ryb5uTNvuxYADFQRn74byr",
  "key9": "5J7j3CQKsPYWHaE96X2WobT2pVV8zF52HagBqX4iqGJ68R9jCRLwddEnjdi2RrRpeKQ9ZaSV9Qgd8eXfw9kAReKo",
  "key10": "2ArVgtpZsx354mK2EpzaBaMrj7enn6f3pm3kcz7tkGXCuToSxs6EzvLu1yruPd9wJrY9HkpU742LxHKiuhCyF2uC",
  "key11": "5pE1RMQiLdBrZgQrPasTs9hawm2vz1QXxkxJm8R9WXuZR2vUVsQoA3aZJa4koGWZjFxysWgAyFUF9A7pGbMKK7uA",
  "key12": "2ZS7n7pCNTCE41iWtYfdXtAGvonJduo4viWTGhpBm5SgAs4yYKT16JuZHMMnuc9iwf5vbXaHGGMPQvJtxY3HfXiD",
  "key13": "zyzSDTyruCDhgfs2u9DkD7CWQWLrQJvHdiZJPDmK1MQRCDEHuzYoA1Dsyd8V2iUaMVwCprjRXgULh5eaxrzm42x",
  "key14": "3xST39QNpa1YQAUoBpfcLNdvc2LGcoQEtBn7XbHtHeKf6PnG1Lfqn2jBTA676X4NbcdWxidtrxsNMc96wyFAUwB7",
  "key15": "4FRxECYghrMsU4cheCRyUPr6KBhimf4XCv8ePZyVCWRBHLdVfRicJL25Aw44kYeHwrThqUj8hSfj5qqxMVFn32VC",
  "key16": "FA6mrku7acHi1DJmXdUVZJBdUwTTbkMhdzaxctmzfZxtjLR4j22GrH9HMrtpJstT5nkiFfzgvRMc2XFAMjkF3kQ",
  "key17": "5xQH8JNJccNKuokgFK4THy35yLrBB6snGxPe6W3ySF4YKb5EV374v7BgmQegU4XK9Nf3BvL1E4sCjQxiwNmvHYFh",
  "key18": "4K4hSRZLcY2aknt9kuDp5roKeNDr31oKGkYrhM5x5Q9eXa1e7V1RKQfQ6fVujndSG37JtPbVSqthhXFaeyNoSBqA",
  "key19": "44D9GqVEtYrEUhWWy5jvzvi1yAKvPhQqUu6Yw27V3nmhhpckUPEVB4wegPdmxrzHbJGVEYfHdA4k4KoSqJqNW23E",
  "key20": "4UX7wRw15oLR8qSze6neayCExaxivr8VcbG48gQyUWZUD3wweb3VDp4Jo7KmZiVb7otRHLVowtv6xCKt5ttX5wRR",
  "key21": "ErfUPQRQ9n8B1KdS2Ckzx6eVfL8aBbjcJLYoN1bKuojYt4fJeWxGzCj8ZfkpCgznf6zN4ts1kgdbyi8AuF2BBHd",
  "key22": "66u8WjE25k9v4fpHpnfGYcMH6yqPCWjLCZNYS1e4X9ftZY954KXkhSM3Xx1jcfjCbYWrYYwWi644prTAsQm1bmRH",
  "key23": "4eexHd2ejiSLi5BWsTVkCc4a4NVo3VkSexWfdJr55pMJYYqcwunu8fhfpDU4D6eMEG9Svuci23G4NUxKBCRNoduq",
  "key24": "2SYmEDJSei75Zb86WKmxrhfiEdw5VZCJMPaChdrqpn8fEKVdcJimxoJtT1JQ9wbrNKPwqFUtDUmSk3rs4X687Hjp",
  "key25": "4f3d6FYB5ZuPxPxiYQofMz526urqugTGEqp1NkvrrWmcMtNKkRPx68y9S4SD7YPuXETKVZD7sLmhy5z6XpnJjEYD",
  "key26": "3Wg7fmeGmT1yAoXR6MRFuxBC8aqsgEnebkRb2ryiEfoHZWK4Qo5HU4tNtGaDi554LivRCkNnSX9WfEfaTaBfweAM",
  "key27": "3vWYUt7Xpr554jjABQvD7z7CWMDEM14VEK2yEbrV9djSysHu1vk5F4oKzjHzYcxTR2qMpn2E6LW51rvwQnWPMgHf",
  "key28": "DXVaBRpNk1reKWYJ4wuAXDdt4Vt2gP2JAr4bfGMQPVKi51jSKtauddVtRsK36xFYJ5uAQ116asG89p8XcetgZ3E"
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

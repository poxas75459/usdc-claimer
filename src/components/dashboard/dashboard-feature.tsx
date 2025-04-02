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
    "3GM5DQim3xq4WNwUad1atXZYZWLcVExcsDyCFN8iSc1a4URCgdzmDFkQ7VTA4vBACauAJbKpRxnMuH96xGmnhY62"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nAKvrnkEthMAD5Z2ETEXFSfhmMfqKLhDjwPfMWatbQewz1TJZxsXY5QZ7QFT8dRMXYuvuSxQsvqvoajhmu7jxa",
  "key1": "2XHGK1o9Vbsb6w1dbChnJdtaqvPkRkDCdxU2ZoRwtjZfpeYAznXMf9LcPbgHRC5oxMWj7DbDPnqrqzmfoRSiJp8g",
  "key2": "32yjH4D1oGp66guij6uQ9qNVQSKPtZkzwT3GFXaYWfGJexdF41ad6KWyXSYY3QnrJh42uXm48rYJZzQbt5XPWAKF",
  "key3": "2hQLpFcZ6RhVCMwBXYwxxYPYX5f82P5PfP224ewWWq1iqoGYF3mLUemqfX5jmi7z2MP3hJR8twtdAXQzBc9e9DRs",
  "key4": "4wfAkdEECU4LzFexb7SJWuWBnrPkER5pLfLyJU69DmCFRm4rUHWiaVh2CJ3MbJu4fatUmL283w5zz6qXC2anoKcK",
  "key5": "3N8EEfRreVu9NZEXW73dESNPTYcdP1j9fLuSH92xHeLCQvmTe3Zyp6tvDbxXEmWCB8dbTz1UdSb6bEUyu65MAQ9T",
  "key6": "3o7XKeBmdnMvJfg7RARGwG8ZvL4Ld33AMbNQDDQrVUMkHi1GRQBsi6R8L4VszA2vk9yuG8DEZp7DniEu79fm6RuM",
  "key7": "2VMuznscqGPyWM9LR3cS7GLgdCpqASM6iStWnHVvLzjWBQU22bVRyVsvMt8TKPbkGt6S1xU2nNyg8pajExvDmRTk",
  "key8": "3PpSzwMWDfEX2uEsC65yb7cQ2BLyhTLcFqMKz7PQgTCL8igEPNEBWQGvyFyCQ3Wg96v9sPhA9LsV8TkbJmjoU2zA",
  "key9": "3sBZtrVWxbCqC2ahzwjkG96PqkTMp5PGiViJ8ZaVHAhsgiYWG4R9wCFB1AJkMPjhRXDvEYon57oymDjeTQKXHrTH",
  "key10": "24ExqTcB35g37rH8h8n3ugSBVh8UBDu468kaeJW6WcYuV3ShAx8L5zpQposhk8Z7Z9Hf8sL3aJNbCW6oUsBRwjq8",
  "key11": "3RFGkehf6dnoxwMp3XXjAXGu8aDK3aTrVNfTCUcTajNUZsFeSFJkrzVqUrNFoMKateZdKYtfKSPqdDL8DVbTaQjy",
  "key12": "4hZuBy2mqw7Xuqx9xhmzQt82KWZhuK9JVATR8FB8hyShRyWd4HacPtFvQZEhRDUiY7VAy9JZQD6FTxrK6kxnUmiv",
  "key13": "5pxCnR55ZxeaWWA4jNMgiu6caJ6jg6pwCWqufAVW7EAptxQYvoaUGsW5pCUsbSSh2MK32uHjiGzocHnSbZRv8vfZ",
  "key14": "4HdTnoAVTwc1baAXPiaiHhTktK3hs4PYdK5QCZrZaconKpzHCHquqvhmcsN3N744FgPePhjr2Jy1u2j3AqzwavXi",
  "key15": "3oSqYqLxVzqyLP1qN85gV6YJuHb865nq8oAZ5sKBqEVoFMgxKeryFvHpq8GBMBbS9ev3AUjjkig5S27cuyxVnH9V",
  "key16": "3Jv7721JLpPp7VPMNjCMtXVS8czC2Q2Bv6k6JFTefVWhAA7dnwEWRWtjHwz2u1vXaDPwdVabnMn8rWv3Hyvn1xvB",
  "key17": "NmhyiQDNYg2JL9iSx2URQNZjTHQcjxmVfivLMNYBEkrHwwgkRqkSNLP4KxGm9ZDZVFGSuDcj462mLMCCUxSeDs3",
  "key18": "4pesx8WiWdyhx3rgCw1eG8cxqDaEbeaAQBHkVPraQmfh7W8BTw3sfnXTCWB6Zos6i31BxrocHBT2im7czhDdRzba",
  "key19": "3noq7vTgnZ2puqsXfGn35UFWTzYuknc8sCmfJHnVKvfhp5xURv6shZ5UUZdKnsri4J4kUpG6MGi5iYHWmaAhYtfa",
  "key20": "3pC6QPPucgpXGXFBxkRzSgC7CVgAjHzciwwrWmkCZAQ4MfuA5cvzKXhvTsz2VLWN5ccbUgzqNfPMTcYzZNriqW59",
  "key21": "4nTQhcoeEj9qP66ZShKG2peo569sPUVFmvWWTLgMBVS9KR72BtUKb1gy9p333Qv2oxMGbNHudx13j8GxTvMPs8ue",
  "key22": "2nFFxiu7maQ1T2d6UuCXfrdko7WztQyEC87zbcHSLWMPuFntyM7kkmP9fg7aoMfrwnFMEjHe22oZomWBxjGSVmCr",
  "key23": "5GtKj8PuJUxLK1t5M9h6C61N9pTMh8Wqfq85m5cPiNHz5wzcxdEjHwhrxyhmD9P1A1YzHUo4a5MNkVoLs7Dsbmbr",
  "key24": "5oAVVx6ARU4RQyVTn5mRJdzcHDBNbJVA52vybrS7dLWo51EF7pWGTnmdqRrMExfcbpjA1o5NAHb1rvCoUjKxJ4mS",
  "key25": "w75VZbKnSPiGgi1RQrzcrBpQFR6ng5TXNYUMtJ1Au6fPWxbm9dPoC1jCizrbmGspoyYoGJXUhxMLmm5WCzTG5KC",
  "key26": "Qa9XxhruheNf3eTACbahHjfRkmU687cNZGzx8tJcwtK4JAncQSdtGpYgETqc4ts3SeBrcmz41r5x837SzoqGf4E",
  "key27": "5RsSbss2B16QSxhzu1VsqTNVQqHvnByVxdvRBH9wZ3Jzfg7u1Y8cchUgjA8CqrhjXtg49cF6kn7KzHzV5Ru1vujB",
  "key28": "2tBuAyDQRzgGWKU39yCHNWuv73WAPZhV9MoPcHQbviQy6yEzJHHfTLBqpMEwhFvyFPSp6sbj5wpxnCJSTzqcxXJa",
  "key29": "efG7Fpm1SceUsrTDda1hJUVgs1D1v7qd9aQptC4MnSQJPpBh1Qwyq5yjEbUHJEkYPJYgtJeK9mHd4K4omzm8oQf",
  "key30": "3DKfCPr7BYfT8d7fqtRgKsipwJ8CvUEjDWk1y1LuUN4J8Ex2arefLxTZUhKzD1yQgY7PfogzkoRJvvB3MTSyvsry",
  "key31": "3oT8EXGycAJmJdtcr4UnZBvo2atGHKNm2mCo1ZRuUaFh26QTs2pJ3w8LyFpzaYLB3Y3u5acPPU1V1Cbb6eLZjcNP",
  "key32": "2H5EVSEQ3oK6ofUrF59JuipWcPpu6BbTKHgeP5Y22QdmAFVZ8644nT7fFR8qJmXpp2Nn8QJuyNvoBLzE5yP9DC7h",
  "key33": "4zu1wS8TtnMk2zmZDBKr7YhFQi8d9VCQ12N6H1ZqndZfgcug9hfKKmX53U7RhioPyBVnstKfWfWFwosfegBRgYBj",
  "key34": "3BFq7LPsGB8Yt5mr2NpNwXCCoELu6u39FyBQTHJ5xBe4136j2M8YJd7hnEoSoxZicXiVu9AokaY3UGfokVEKEA5B",
  "key35": "5ghdX5pERtSnxcBaQB9Q1yWTaTSFrrPLYXtt6S2zcngYf12Yh71spNhbwejXBrdbqTDZS4vZ7gQmfwa1oPkeWg8C",
  "key36": "2MXsRhLeGiRVDBc6NbS7ivrxaKcqo5iZz16JQgVwk3D3zXkxDrWfDoSJZUUzUbEqbSiU6eDM7ZQqqNRUsLgar8Hc",
  "key37": "45CoPGgNxx7QroDsVqvhogBwMUimkegZVRTvyuaRnA3KaA1WWenyEL92QdmzRSSh4v6SRcH3pVUGwGyJPA8zefX4",
  "key38": "2yCmRmAwnWSwoPyNwB2cufegNJFqDBPEPNDgMVQVCDCyJfJaPCQnPXgo7ed6Aj2H8sKw1chQX4oJEKvLyKNUQFo1",
  "key39": "2H8AX3TAiRq3bdFSWD8xcE98GtZX1YzXftWLxYqQ5fArRswWDvT5mmb3Xw7nSwvN5hVZMQzTtFxMMhB57nkeFbus",
  "key40": "2WNDGFxzzos4kE6uhXBqnKQGDthLeLfM2sgXHCe9pRCVjeaCfTt8jRKFuJ7uL6y1iQQDvoFgBL5BBQHsPwfN8TVb",
  "key41": "4JN1DU87MFUVWN3gt9Z6Ezn8A3THE3pxfjDMGQyC9LjZkQS9zZCDT6FtPzQowdPhG4b1fCW8sxS1tahGpX8G4RxA",
  "key42": "4AK6jEUBug3GFXmoJMtdRUF86bgwzwtR3ecA7fbDzVWGEhgw5Y4RBXejDE6EbfoKnJh2kb7eGXUaRrAh8GKZ1SzB",
  "key43": "63ewoH1gdPQ8rBoMayhvnAGVfdMKFiVTeQdvtNHXiYr6mGAcT8rVUXFwcVaiK46rZeH8kyiwubQqKyzHaTwsqwLz",
  "key44": "3pniqwnfs65XcJZQUQZida45SGLfjjoQYnokzD3baNMCrXRwcBALBZ5ZqRoWKN6rp1f5A1BNaRo2VYrm9Wr8QjbN",
  "key45": "29oPxK3AaGxWUAzT7Xj47biwuuG8KUyczKLnBtwif9diNdawucvrfB9hkbQ5Y4ArqkEMGCqfLfJVkNmd7WZxF7Xb",
  "key46": "N5aer4BLvvSJTTHMnfmwcb2LxaKfcvAtb2hJJZHQdjvP7D8GBuuWKfVm7sEZw4TckQEiyVicLghuQVsSGonwmGT",
  "key47": "4t14jw143i2Y9akUtBRGsLrBDfbdFBJDdBzGmgagqtufXiGUh5dYMqTScYUtENng8M3FyGkph5FK7gBgRwqTqtfs",
  "key48": "wCC77hUUtnAKxU5qHStFQAr2MXcrAAik2FGHHHG29BmLXHqEnjr41xhvqi9WUiwfSH3YvFbh6p1rJq3ykCVS3Kw"
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

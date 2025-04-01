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
    "2fvGy4EqHjCmCJqiXe3JEfEexiRBuYuMcktp2C1r7MHdLQUwe9p3W5J2sP2H6TqsJkKXJE1EHCAE1eJ8i3nHQih3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WZ9BgVmkGu1SEEKP4kQcCDoqUbM96wQNr94b1FchvWLBkZe6aBchdZFHuJe6qHS8EkZ6tDdjLfGP2gAGNfCYfih",
  "key1": "4AK23YecUURFLirLL9ZH324ucWrPQ7fMwinNDTcBi256ucHL2WxCJKSPgHmfu9XEVyD8wVL5zZsSLor4pnHvL2FL",
  "key2": "2i6b35TFATPhd5aGwtqojvATbvQ3b4tjin71RQzviVEc1oD44P8Fv783TpstV7oW7QHiqr763Xga8dZNrJrkqGyZ",
  "key3": "SLQziPxeCTDQ9vN23v2ve8wgK9FNdTsmBZYBbs4Q5q5SYrkrB4Zu19yK9eJP4cd3kyrgJPDHM6SEAT2fNesYdxH",
  "key4": "vcQ7irf867roncL1e92Ntd7vqu8Y4aNzdADxACZ2pjwBnzRQcYWUvq3xRr9Zdik3J2bemUu9tpeKj6BqnyvSb7d",
  "key5": "3iYcXbRS5txo6iiXYm85q7Z6v1asKQgQhCBqrwN1v7CMQrhMxKZ8QjCW35aPeyTcJFR6kMFQ1UaXyDaLBtwGts6C",
  "key6": "65JNYp7bLrg9FWtBiftPmmirq3BPPsBmWx5DmDmFg5XT4ojCSEYkJ5arzQM9EgZRevfEuWp2TVwx99U43CEvkT31",
  "key7": "dY6GfbuNFh7kNjxTaSCyBMHqXjL1qcN1pXn9yBndpQWdQRvTDn5yyLXRfXLUy1sWxFZY1fVPC12xBeRWkAEiEM6",
  "key8": "67QCiojMoAEM4LM5xnjK73PhLrsCxYFVgYdxNYwQ6rz74ST7TT9M2kbWqbLbJN1apLeXkqqvDjxAEspNMhtfnK2V",
  "key9": "3Y8u754SR3VXhBB4J7PNAKWgPXGQec2aVUrTh72z4S6ocVBnUstSAE7mLV8gzmgMB5v1pmNucSgnASNn3WpyPHG",
  "key10": "3rWDTgYWLczd8zJzNrtDaE3LJiVAGWfxLTnuoaDthoUveoERthd8UKKrTuNkxs6WXtsMf3V2HgEPzFkAx3iTMMbV",
  "key11": "4gSBtKEG3hiH2Fb9JqunCWvPvDzJbLqNzNP4NejJTaGXJ5BFhTqBautR2kn8WMgn7HJMXSNAmL2QpdcqZ23cDiCC",
  "key12": "5xZ1b6WGjMootEwejUsAjfZ7aurJKULR46NKJtSmhu8KMxDjqPriKbceb8RLHDtySjef7MThcCq5GpsdZAUKChpo",
  "key13": "X7yLNDGVRYptepVsCA59ABYQtu9fqEQcv3K4GW5NkFECwjwxS61qdyDDASQkdBYh4PyLMekjPjHrKBfxqTgUHbW",
  "key14": "3Z27xYEPGV5PjfhGGhT1fxDAcYJYMBSswruTTgv5KtBS6oH5vMno7Hyz1EY9foTQyTUTKrzx3GeS5vWBU3rjvGYy",
  "key15": "3V6XNTmyXwio11Appng7RWFKFnqHLuWRPQ8KSs7sHwzgB3zHZH4NM7aLyfmTY67nBT7pT4rRASwTeTmAkrs1LMnE",
  "key16": "5GBU7GRyi7PuvGaddimBuB9JqcE6W1ejT2nv5fBRKTgpiExk5TEPMTThAequkpYiTDCnzortGEKmoKgwMCFAyMnS",
  "key17": "uDBXky7GboTF1Ay1dHUk1VctKLqhM5N96kbBiQqLA5gnVGMzkFc1d3yoyp223tXaQH1bdyA5MtGGEjCYYVcxpFQ",
  "key18": "62Dk8jnXBMsjvpYeWes8Gt21AY2dPvBiRi5bjc57nDu7AaN75U4UL5zQ1ryL68XRBxQaH7UjBNpgbFE7RTfTCSDH",
  "key19": "2ByRxRBxmtpHahSpygijnHppYBCVZhvNno4gKKVpDBG5fEa58eUXdjDn3Qu737LcjsaUiCoJd35VZJtR8L7qj1kg",
  "key20": "LCoqiDXJXqSroGoQXKoycF7oEJLWhZUhYwyKi3iCukNmJKsBXWvoDjpHAhToTTA8CJ7kp5TbzBGRx1yHvPSYhzU",
  "key21": "erzrMv12JpXD7KKKMFqDadmwvwK86xZP2Xk5812oTVQSv4Ge3zx9Trx8NVG7ssYhvV8zkXfZ2tVbz6chtCyw8mu",
  "key22": "5jMxfd537YRt4hu1wXQLeknNsnmWQqo9vqi5RD4L4CLNhCofmiWXe7DQwMM9rBvqChWi2P6H8RjykvkCWbsPKtCv",
  "key23": "5MeNwSqZrFqY86QtFPLbnf5kd31mXqjtj9fzJvFEehtXfHV1vkCKbT1ZK5hDfZ1f7BeSvJTkn5iAiuoGiB85WQ38",
  "key24": "Atm3YDzogJcdAJ2JvQGCPsfLELrGTknjp1sZ6bd9ES2EXY1sBTMSR2NLpBsMEcjrAY6G7CoLkzbhKwrz6EEFHL5",
  "key25": "5RBYgrn6uhW6vbXT5edsxsb7yukNdg75zHDD3MtgghYQkeQuYg4MtVtQPxRCQrHTBcTjPsNRBpXGYWfCESFBMQ6u",
  "key26": "2otNSUVoPVHR8duuyaV9Tj4YL64gyWbFXScHFmXAmJm21mNGCphLhG6XwR7iNQtRKZe13zuwUgUncWAoDjbN6ZXm",
  "key27": "6E6hJuJcs6xriyXi9t9w2LyWpA9f3htEsMdBjqs2o8unwWAJkhhWVwtToRzLAGJdjS33t6ETanUH6YepfiZ693T",
  "key28": "3kzN8XQxeW64HfELDJfzZfPGBb4hX1to7zmCvTN5fZ163m4Y6ARgnzccxG2vAKaXwt77h2o4eqEHw1L3fKEVmkx5",
  "key29": "49tMawGZWN196oWsy7z9ZPQeijSaqRt1u9s4VVsGMq7iGXpY1PLC45VkEFefgz68bCmmb3bA6HGc3cAbG3pQxFVa",
  "key30": "GPT9uwgpaeApK7NimpoqNH3ZHrudTsPgmhvrVz4NaYJ1eyvm8ruQGhATzFwe1DcpWvJrw9PEEqCNpQtKhvQevFF",
  "key31": "4Hh261kGPRd93avyoj5yVgXRFvnkGdtAbncbEcgJWf59KyRf9ZxyxpAjcPrjMhAzmb8W2rnHq3mKWCa3nKP7TmC6"
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

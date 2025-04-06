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
    "4iitJnY6v4xStRvjEsVFdipR7MToQZ66RTa6ijtufYmyvuxKL86nnuwHKtppFp7XYeS5UxExxpZo6ytSM68QWjDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51kxYAM48iT8ikWKy5agF9cxPLevbGjfXadFd1dhcqH56SpQepzpdkDhcJeys34runHP1n87csUBZZaFtZt16Awj",
  "key1": "4M4wqR197xXQVW2w14DaKHE7teFTAfH3mFi2Ae8dgYx6q8gaqg2Gx9ehEQZTLtMsizzgbqf21hm1t48MFWHxUDEQ",
  "key2": "22jRFD9eQjqbQdve9cjP9Yr28PukNCnVGDBZ9FgVMuhif4L48eANMu1E44zJUBG1peXQNNNfdcyb5ktvz6ic5aor",
  "key3": "5PSTVdqkJjrtS1baypxPf6pCwzvQY4q2kTCQQN1ZhnYKzFk8yXPJuT5grPWaAmAdoipBpXRY3JTMyatstpxozLdr",
  "key4": "2oDFdZJgWxqmcz5LjBFFzmFB8v994PE2zNjWzHUHiMwr39tccGMunKNPukQ7P2PnkSRLP33U6zTf732LFg9iDgxa",
  "key5": "5XCE2H8TK4qrQzPNhMeg9zrpAb1cKDnyFJt8cKKQs3vk7TH6EwXRckQ3AkkKuZmCrGGa78142TgP6trA1nx1LDJL",
  "key6": "3HPE5mRHj1rr6riDTUvvNgzSJ4JC5yvtYa9GHZFdotoW5yADBmCTJ6BgoC4Gmuks7cqYH1yPBbSAH9jwtw1A9xfW",
  "key7": "CNnF1sMSkk7WKixo3UoBeFLdodAijkUsbDCqLgidqe9uYgYoGBZssZDrXmdvqkWqMMsyVKGh9hycoVvTwpeTjPH",
  "key8": "4AXfhQJA2K49JLWywThLpNntfpFMtVbBzULxLAeYi2NQvotfp81Bq9SYYpjwyQ4rPacdtvAT3Zfw6MAuGq4b9rJD",
  "key9": "qwyTmWTgavStB15ARctBWp9wp7UHbFYzKxUDV7U1HE4u8ouDgGwMWF5QFd5aksHvm4XuGpkzGDNKUFsqj6vQwfb",
  "key10": "5MiHifwPhoy3xRARY59eC9eSrfhGAeoSyBEdv2My6K7tj2ATPdMC7WByk8SdhMz8EaBxJ4qDbBQ6MMrnrefnzuii",
  "key11": "5gJMu3FwV64eo5ouCFKjrx1iTJvngD4rveszmDHPD5qQdWVpfGmqFgJXPRQfRRp36nUbRGAvUddj46Fb8PtAmest",
  "key12": "63BQNkSf9kAqbwAg3nRzGte6zVmqsPWaNA2c5RhhfKJati6TnzvCjJUiDZBJfcK1zX5752rDjf7ie9fFUeizpqHS",
  "key13": "xncgsHd8CbrjiJph8zcyeMW5sfGvA7K9GnjJiu41Ebe9DYj9SEvk3zMa7ZtfbMWofWfcLABdZ3g8PBn7gcAm69K",
  "key14": "4mAqJkS3FcQDknLYmvpsTX35pDxRyaZGvA5rW3WNkPbxL229XxntpniX3WSM4GLoaEad1koXwn2MhZeHbKChgZbj",
  "key15": "23FZy49aJBVUa5W6YYens6DghnFx5e3Jz5eC2XTJaEFw5UYWpHLF6HcN3X9ksMHJEyBduz3H4zVGoE12RZUw1gX5",
  "key16": "vKiiD5aYS5EeNaPL5jcU2sqLUCW3Hg2yBgiiBU1vrxx7VgwZkDjKbxubDJTAozZDbT5V5xSS4uFDe1ztqTsGw5k",
  "key17": "3uPpawLhMpJtSEvxEDuaSJMhrDbn7QspJCqMpBbna5onKNFjKsjkhUJKN2a936dG6uHxdf82xQjaTRTDDcdsCXni",
  "key18": "5ugEmLqanx6dDqQ6iEMG4yfKAKbsUQatu6kMgNto7hU6T42KYYnV7bpnUBYfR2a8YEzwNDJoPDKE6n4qwEHr3JyH",
  "key19": "2UHJX8Eye9VznCFAcRU4dY3Whg65VxUpv2yWgWE835S2ipcLRxfXDaB79oGQ4VLChE4amJ62FQ5gaw2M1onYFW9e",
  "key20": "2D4yLGHjeAnUoGns3j3bd1Cgkxyj2ZJheLLZmRJ7vpus1E3XefYTTYBhq643DcTJamPEePamXzRFR9ySPegYKkcB",
  "key21": "5MSdBi4Rx3Bqt2cd8MVbnmfxi6TgL5soGN1H1M8wMBejDo8Zjr6FZrA3PKmpocH5Q9aoHbvR8oZQ6hMQZG2F8y7R",
  "key22": "51McnuYuc4TNx8M6erRAGygj2rkoW1pL9X3u3yGPFE1jUfzRF1XZ5dPEXSAY9RVXyJDggpxXtdeo9qENRc2d9RtM",
  "key23": "45hGN8uYMX16QJjEXDDpdexx5i61mHFDCgjjpefMgKTLJcQoEoyheQYDVwq69CD6BfD2SReWyoTVxfhx48sndZFB",
  "key24": "2BM4vMLdfv2v91Lvvd5gjagh5ZnNEy7LMsAuD9RGcJBP2PmuXaBUfkQFTU6NgHJ8Fh6eUVFWUwiXrxAaQh3ZSV5h",
  "key25": "3djynEcZD7bBWtz4EWMFjknfbtaAB8ucnprp9wJnX8eikk9nHeY8xSEnqB4Uh5aRmoDZpkxhLK6zmt6nEDY7rox7",
  "key26": "2V8PbRvEYHfK8Wi15S7ZqnXAHBEmmxsoMvVKgqMnNucTAAh5mNiLdw8aBR5fS9woP7AG95ynjXtGWEqYeQQ3xtNm",
  "key27": "4vRzthMpYzEDwFU1YJpN4qz7tF3UndTcrz4QkNPvnHBSn4UNU7duY8SKTFqcGhSs24QPMGuVVBkyM5hqKGRVz64f",
  "key28": "5nUXtkgoBkzVFqGEoZ2jhE3vLp8PjdnXkAmjYN8TUGSA6vzgefYjou5ShTpgZcG7MsXZycXVyaDGRnwM4if2m9xS",
  "key29": "9KBvwbr5nmwtEV4vrHaSQDcjp9kXXSXWipmtdfa2NsGH8QW8jn8ofwYwrkj9TJH3rR1t2H3HFrJZoyFXnpBPHo2",
  "key30": "35Tk65DMNjVqBi8Lv33zBaWBwqZAT4wHYK4dCJcervJWs4R55i7J5rfQzAnKvDQEFsqsEoVehNh6Jt7c6vVvxC5r",
  "key31": "4zVnbSAZQ3TaLMPp2G7dF9nqCUeDVsSop1eM54bvkCpX3yxdMVwqWFDGerskdbWeY3dP2uQKpnERviupB2RNWNsW",
  "key32": "2KZ29qGNMGabgGGT4s1yuPsCxjgpC2togAhK9aJ8Pg1QsJ3xewFSN1W7b5CwqdLB29T1rdMBRF873Cyqeoq4JTLP",
  "key33": "5p2YyP4AtPxKxEotD8Atx5VxZ1SHx1ohgnjaf7ZSzT9bSiiUMX66xzpBQwFEjJaRn27axdznrq1wZDhy1gRjiQWt",
  "key34": "5jWAmykPdRU8CyvxfPzGjTT4HyX6Arg5GpPz1N9nFNo2Y8koKdWrTj33GBpqEsB3vgssXFHG6HTZ3cx5V8yfxdeE",
  "key35": "5mRwfAaMH8Hji7mqeJuNu73s4hfkhSVRh2LeS2oQBJ3ANt7NXjSjUozR5VbxQYafM3R13X4inBGWrh2Rhvdjg2w6",
  "key36": "3EvU61sr6ikAY14wo1hjhL1QohSfJbH4GRsgWmPNfQwhcwCE9hkPFcvQxDDmxERtthKMJwWqzzMkrqazXWZoPVn8",
  "key37": "5btTvy7u7TKWyCsQ7ModQHEvvKJAYcjTBVAfW5a46gye2pFYkvby34euywqtnnStSuEKBE1W6F59BCaq8HuYLs75",
  "key38": "G9NDwwCgjRX7xRUPLUKzYtm6PTd5iWuRtfCnwcNuSmbT9rUs9dMtooxLqQMZ9GqhaqUsNP3vvdnwnnMSdpMkW8T",
  "key39": "3Qw2iodLXrPh2XEJaJj9Sfvp4AzStPw8TnSNa1AXjfSq3J2Lg5rxxPbchn2UAAsxDMHUsAYSktf3hG3emYnFV1ki",
  "key40": "Hnr7oWYxUsVJQiZeMBQLgBZiNPnjF57g9v5GV9D8fnFGvuTARZMqVTCJWm8qizkvVrqbCkJwfsamQvsmkJH99vc",
  "key41": "2VbfAGCzVQuapJNC9F66UuTxcsiaHDCiD3rdJj9KTs6VYMHpM4RyoJciezmzHuJMxPfx3UexPpk1ge3kaXxEGkZg",
  "key42": "5qkRCCCsyMVNVaqogQvb5CXYXJYZicKjR9aPNxvYJ9jHCmzrJuQhQ4YroBKKqADypr6a3YfJi93QMbCYh4QdyCMz"
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

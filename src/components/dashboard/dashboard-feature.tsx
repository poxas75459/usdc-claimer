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
    "2U6ZHE2ZpV1h7r1TJZixBtKhfZjR1JEts6kQWdB4tEKR1LULVCqx16rCoLRh9bQxBpGN5s8Rx2MUap5idn7SAtcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPAp7BGgJv3mjQAHzu19s9389MCedVQNZAjFcj6fdcu6vhuvoKky93cgbpgnyWLkZg6f7iyV6Xet5JVtniESQ5M",
  "key1": "4Jxjxo7R51RsQeDLqYC8sWW2acbZ926YgoGApjGA53DnujyxtPdjrVj4rcknWEKixcwG1rSE3QudGU4xv8YXywGU",
  "key2": "4qa5ncAq6VnKJ536hdzHsF5ndzy71LYeBkFceVY825yBzVFxLRVHd3jZ4QHwmHAgrzfC5ST7L7wGHPnukp9iQXMX",
  "key3": "5cAnxAmaSh2jHbFxBnXyfzHnRcq5ek8Tz7nrebC9Z3ZpgAb6W9XemMQpCm4peLCFKze2UyVWvB7kQ2oY1dDMdTvo",
  "key4": "5ssQ65XHjjm9A7VSvojbsp7pCN8GU5ZfkGoU94mKg6Zd1UbBdJH2QaNuJSLyHD9cFBW2K5QxY2kU244Mp5c1Mud1",
  "key5": "dZQp8ZSXYbKEXybBpFrW528eCPsZd9EkStAJiWQiCts3k1HZQBgAFZQMaxTDN9GoJTEpCASynunU79pv2JLYgiU",
  "key6": "3vNeCmQTfFh8XmwTtyj983hvniSuPx5g1QnrUESUTpyXcA2N1538NQ8gK6B5jBHkr9YYzJavrog3BskjPFepCwdF",
  "key7": "5mMUAWZS657dUhXK1Q6H2wrU6qdiXBR1U78GAvTCPekZzxMuT8WpaSNB3r7ven7AGe7m6CuNMMDGUHUwXwy8BxBT",
  "key8": "38qerCdFC84zyW3qSBwVWXciCJSdDH6jLn87KunPXVw3giSrm9HiaEkAq2NLACkNDjW3ZermQG3FHMWiBVfjPUfT",
  "key9": "5kCwBNzMowFXDpiW95iqKNc8rGdkSGJyAqUZNqyeuobQES2KYVGfCoktXjaNnwDzx3k6z7XLvaeLopzjkMQWYnRC",
  "key10": "2JEpwLzNsb6ruWzueJUWFywy7KMQ5Koj9LVgLzg9rgcMuQLksSthNBxfghBLpvJgcCFYKwfhZwRnFxpUfSo85izc",
  "key11": "5BNyRAjoxQmMi15D867rfJLAFrRGLmgvXkHHoKpHsL6vurWQc6hCzvUsqukpuNcdNxvukFTFtvpx7BYauZYf2tA3",
  "key12": "2vNUYjJqR2hWExMfJwkgwJo5hmM5H4VVCsaSZJr7bJ2bGDeLg6m3MchL3ZYpA2pwrwT4QqXjspDyDtp2hii2bpKb",
  "key13": "621F1gHMFxD1RniYMGV98yq4zun8JAZhhPgsTD4MqHdPp3RBWEihEQnSKX37mm52ihE4fTyajxWrTd7DYpS4EsMm",
  "key14": "2QMZPFG5hSCPjq5kr52EdNcQ1aNPx1R5GzUayEBr3XrpXokSvRowkvuqQ3TUmMTwtCDwKssrfpwNDo8q37jXwq53",
  "key15": "4JmjeDENBX7FBXEgXSfVYMpKH6vSvpSguc3Nmq9tMCagyxWjBMJFZrffcRzCLp6N1PXE3U6wd5pJBTidoA1vbmc2",
  "key16": "2u8xV1WCcmkf3LDtbr6FUiAR13tRf9qTJiaFqT98wBVNSnGZtDsG5zkZxgv7MnvHV9iJeAAoq2LvUKd96Vbt8LHe",
  "key17": "3chpxduFp1yYBWvjWk9j4d26hh4QT8VFbdxCbs1XH5aDMWtfmrm7e5bf7N735A9WaXUUTsxPphuqcC3ze2HXmsgE",
  "key18": "LQmfrfKTRDikNpfNDyNa2iu7vyq7ZBoYKbfQ95Gm7eS2pJuRuZ1V5sd1qxJ6Ts6Vp4w2VmywrzTfJjodUKEughX",
  "key19": "42KTxGT9yJaW2JN14eBrASwknnmQbzB7Jvx1y4JkSXFDEFhwHMUAgV4dpeN4Ur1e5fvKntuiVwEKztd4t1hVqcZE",
  "key20": "4PpeFQ4uYacWjQFR9SXuZP9vQZWBvoqvAu2fktu1jXM5s9B24HMGjKRTpku2hVDFVmawuFDhTPUaDnbqUEVeUMaL",
  "key21": "2w1W4yr82Y7ALYVdMPe2cvrNeEWytjzMDeyXsZ7KYXnKzuQNyTG16GihgGjZU88deoNRERx5Mpp61ynuCE12s4US",
  "key22": "4sugP1vV6dKNeqxXSPq8UjQXxr7WndKG7dntkLrFFHx58c3sz9r6m7zi5ZfmttMgdK94Gaof5GEWLSJKVzPuL6Da",
  "key23": "3mJZgy5WsZ7rGftj8wAEJRfmKMY1uRAiUbHDjtuqLqp4x5SNWnS7SaDDbyoXBXWQsk5eJ3XtN3ekSZj66JfPoCXZ",
  "key24": "4P9koun9YwMAHAH6V56FQriXf1kXnMiiWJ2fG5xGqBqoUXYkA2BYReA8f9QFhDpjr3oTE1NEePmVGhPsFT4Cttjc",
  "key25": "3VXAiRooTjX1M4GkjdRM5iwrN4XY51quCWFVYZUcemctopKk5eAH9ecxvtfSN5J7fX4Z8RzsLrhrhYGcUzvb5gB3",
  "key26": "1gtBFQDYcG7ZStQigPT8sKWSUCk5NwySJf8cvigg61Pcp3sWapyxucw4spMGSVBqtBkjKfibb7E8CZRPrCrYqpa",
  "key27": "2Reuw4GTG9E2HNEKXG3oqeXWX52wPKHGGPqsHjXpoHWKUryGbQPDUSSbAJBDft8wCTAzNTAukHEb1wj3eWkLDp98",
  "key28": "5rDPzQrq6oLNK6cRUZAezGEo7WL8S2Xe8b9x9UEqmW7J5kYQDqAu26mkUroyBMATzWb3KzJUaMzb7cRPAiZsNHV2"
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

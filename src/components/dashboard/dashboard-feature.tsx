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
    "287s2SmDBGY6PMqytFrRoJdfG2oQewwjUtRNadhWnRxX4WdXWymHHHUNZL3FnBjUhsXMu6gpeDNxLWhHWAkFDY3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JvoKH765RoGDcLYd9Rum6j6XNkWXikS9LkKmRmQXbA5akL9cDuYpbbPyoASswoh7SeoJ49rNA9VkUBFPgsp6D4c",
  "key1": "5SWJiGv9ev35SCMriRbpcG8cqK7gmopJ1rK8SsEKZLSZBPVeEbTWhKaArGQY4ui5C7HgyK71ZLc1cE6iWfUeRkCc",
  "key2": "3ik9Co9Uocw7W4RVHY9mJ4edYoGQT1cZSq3HL4NKtKRrYKzMHTdfhf1HTeoQy4vkHPni2tRrAb57DFJuCCw8VU7r",
  "key3": "2ZgcqXcTfbzo9Kx8vv8fcP4pnSoeVGUB1x4NFoct4QL89WUufhqcrxPxpPFJQe8BP7cvcfHsoM1AdP2Vbj5NCq5K",
  "key4": "3G3VPXPu764uzZoVqu3r428GXJd919QuD7ns7q1ATHP84BchPcFj1PHLfNoGz7t5miUYnkhDDBVJcH5jRTMKQ8Nj",
  "key5": "3aJFsKr1rHaYc5P7oZj7F6hHEUwXsgB2EW1jWskQsgNu1rX7Ux5wfjaUMBVBeJGx2J9FAiMyXtwpwRswc8uy3oJc",
  "key6": "58NbE3GH9hDNY1CEWAzE1cDsaoPu11paVZma9y4qrp2UUWataujnpeo8kjYX1uv8HxqiovLaP1e3XR4uZ8kWshf9",
  "key7": "1btZB5FYcxb3zo8cuHbe6iBBxvZAgucbpY656y9G5vws7HNEDmqHJtxW3bTm6HZwKW3YbPAbT2ZimdLV3mPhJwF",
  "key8": "3T7e3bMNanPF15ntxqUDZwiXXe7TnkReodnzVPMGzVhLEMmNPT1yniazdnEvFo8NS35sG1AJrwk5AFvpWXFygATP",
  "key9": "4Mr22s9wKHMNAdTG1mp2cDyRktfZcBiucjsgnx7xueWCg5SEZcpYdn66LLCRCa1GfKZXmhy9owEeeyDYvnyDHcYK",
  "key10": "4tCWT398EvAQx6YbiQQMHDk9AjKGS7gkYLENLu17pq5x5uuksnx2cooGkNn68zsmo5rDpHM2iS3gfUuhSH8gUtUr",
  "key11": "CVCuh9PDhcX1YkLu418RoUh8emXvnVTAyWo5Ya3gZ9HMcYnAxMGkPhBjDodEQcx4XX4PMsWDaxMr15hvfepGhtu",
  "key12": "22dqc2h42aFyhLLQRxwCVwUWKNsjEv1x1ViTPNT6EVMKMwzccUQtxBuk5B8sztTm4o1e5GbZbRrqU8MKPt597krh",
  "key13": "35ZcsWmzBJyCM6KBALL6ME3ekjAUKFYT55z9FmXWAxrCN4KrSq3oEJwGtp8mcfueoocSWxUPR5qVwxYdqZosGFTQ",
  "key14": "i82jA6Dxo7EZhjBjZksV8htZEArzTozDsbQA3ZgzZSFMrszaMRFFAoYN5NF5s4BC1NXaUNAF4HCK7URKz5QaSi1",
  "key15": "3YwQjCwyxr6bcuBrYKKBt5YE2LfHTNMhz56FXn2Vdfpw5CGYZcBDhQZX9kseKuXiJm2BrCoxJ121TS1GTxfdUgzh",
  "key16": "28M6ar4Zp8gwqit5h32s4D6ChoW6BKfNqNY3VDCW3YqBpAxfkdCZDqoYRTmpbUWn9ys3HjPYZQ2aqcBjDLwkdaUq",
  "key17": "b3aPwy34odpHJ43v3EApSHj9n31cLKb565d6dNKEGdX4XMaHifLNrNrHdtwBFwxyFJ2wyDxieEFvc42cYnnGogC",
  "key18": "4TKR6fBt9gk76zYhJeHpqVUVNnLw7HerSZSs51yDfittENExVTYbYzQe7fY7FSx7TZPW149VF7bPgD9h3XbqgTpm",
  "key19": "2wd1Qiky6oM5uu1YAdTcPkzLUA9j37XwagFMpCjR8jjfsrdymtMN5XYXjocaLkpjWwMoSrxdowZYsnBt1bbZNDsR",
  "key20": "2pnRznLd2jDyuK5bfbwDvxb3nPqAGVa8vAr9CoMD1h1LmMojgG2EWEa7uPMC821zJjFGEttvNEivaiVTycawfktc",
  "key21": "2yuc3tQkfpUk1TRVAYpvMtqZGMQucrid4WGpUGCsyT665RU8RX9qbBdcF1AEnp4FmC2fcdJsVxS3ijhuAv9HbYh3",
  "key22": "39H5Y8343FQutn7nwa2i3PJKTLquh8dajK748PirtEuyfrWKnBpMY5d4sBj2jzaYThn4BDhhqn4gAZWnZeBMVzR9",
  "key23": "4vqhzK8owQXye1VwGcXupu1fYr3JaoEJJhTD3ZivRM1k2trQUVbjqJhJU2v5bVZgaG2SHXNz7FMxioighkjbQQwv",
  "key24": "2F3s1vg9VUtGSM8N1Ngp9Pm4CLjzbWzQRCAfJa1Xs2MatYGvhLGtLQpkj4rezzk5HM3R14y493JoVctNzagYBbcA",
  "key25": "4K14hC85tue8eTjCACT2UkjsbYwnfAWTKk4BoRNajtei1gyn1UZ239RxTezqcCh55poRJfC5LNuQFDeC2K3v3JEW",
  "key26": "5qkmspomWsbbk1q4vRvHjHYmNvMPMG4XWqrc2XG6kuhS4fz98FCrgup6fHn5kMSKqttCTSSAZmfzzCDPzKVZamqX",
  "key27": "3pmNZUXYUZpLskVEgLunnbT5bMF2wWB6RtTJvhgSzWQTVTpEpfvKpbm115LjdzkrVFPQ3f3799ZTaAtbUdFMmQP6",
  "key28": "2sxc8vWsfj3sgu8KP2NQvPLrbdCAa5FYB7vy2AQMF8jPTF9PWEaTsvvx6Do3XBF39KQVdks4EDixfkTBvxQN2fSF",
  "key29": "2x4sxYnghGP2SEyEJwPwceBESgWjXXDwztuAzfcVDu6KftdPAG4n2fqvPJzpU5SnygPgyiWSRCSwPn2CNXSgsCBg",
  "key30": "3KaSLwErSP285EvrLKNDxrQdozLbRNDwkmxtZqNzseem2xUMncb5f52jRNfBttDwgoRBHFcnZMennatzMmHSdya9"
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

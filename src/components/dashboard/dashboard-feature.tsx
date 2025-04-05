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
    "5dN7QdwUXr5EwbNMPXHn7hPPj7YNjPUmdxFJjrvki1pY3g4rthuewLmqZQkPaPxHe4s8CV1TXuaoadSTJ52fJk6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqtQoz6BECPpYa7UCEnLS8RyXQ9vV7KHo5BTQyiuJm6o4X5VGnQp1k2KgGV6uwesNCmHbKiK4hTXMTQpAzAXB87",
  "key1": "mazipoLUtP7dJEXFvvwMigkLUNuBfu7HF8qmxpnDd9i9wQViw7MMQjQXrYSwHkzT11ULNSB2trh919Yke5qnZbN",
  "key2": "4BELBNbgCzsyTRiKQhdZHsj122JrVK1dhZUvcBiEhXFgqnLUrXK3HPNmkMUE443caiKEYZJhpy3Ma52Lq955BxMB",
  "key3": "3fRrtgCeH5CuQpXb2Woq3gM8xbuAKdUAsXXTctoyyP6cQS2E7Mxy7Ru2WviLqeJMkb5Zo9b7iB1fNto5VCvUg7Fq",
  "key4": "49XDddGzwEkz7an3LC7coEeMrg1JDg4vFfFvapePmW5NBEMv6u5Tsd32uHDXFGVy38wwPxk2QXwi9cm7gkmQmdHe",
  "key5": "2HYr6eqFRTFjvnBvnqBzgfxdFAC498LMN8yPi6vHAUttNsoFEU74zswT6yLXz8nAgqjsRXj1W3AwGwfFyDiUQEuR",
  "key6": "2ZtvXaNe77tgdjgbnfmHRAFsFFqhs12JMyL1Y2EtVkoJ4EEQbnQaaF1TxaB7PH2t7W4tmoeazUdZaa2PS6MyhoFo",
  "key7": "2G2JBFxtT4fTZCUg5BmRmzd5jjVP9ZsHHpUd7Q9zgobPXaHkfEGHjMpzHSZNyCn3sirrRzJFkxRcttBZ4ePbGtN",
  "key8": "37Q13gRaodYBHMnwhEqtLhUqKwoqZUMz3MQpaQgqMUGiJW7PAQ2xzmw14FTzhzXzRvVDzPXfEC4noTFRjf3MMfLd",
  "key9": "3de6F3nRz9HX9dPwZ6aghsiVomUFX5YxW1qybeM7brFfaJjttU8wmZYdotaF5rAvKGYntjPLJL6CWrmBsvgnEC1P",
  "key10": "3GGkkL3HTHT3oqZR9qyNgrnbnBcakUqDCWAoYWXC9n2bUEDxVbL2PRj6uQKjrKMEwoGrrvDkxcQWB3UmRkp9XyCR",
  "key11": "3z11Tj8yMj2LbP7KSznwvKp7K9CpfqEX8vU7xbZXoikuipxbovsBzcaTdg3z41kH2VcxgFJmRLLudpxmPrDeFJgW",
  "key12": "2bKopuNp9TCGRQGEM7LBgukwJDPaV4Rmh5xS519xWWeg3uFSaGtcR6K6SpCBRuerTza9rnVkDUU8bJ4uYp35bBGh",
  "key13": "5fRaqMMDnQAkpcpU9hRUCdLC3bfXaE4DSTRtSSvakE8ZtxsH2AnJogpdA89YGBEVRrMUGf1zYhiotvmfKVEtdrH3",
  "key14": "pjWfB11pobWtmB8z3MjqAYrxBDQHJcv8eTzuppmisCyhbCHHCE7itJiDMDPcY483S9zd9831tRNsSNiAS8Q1Wjx",
  "key15": "2m6WjAL18faBHKC9zhtksahsQhhokiMq716m7Esx8oysZaLafQNLv2FcegMNKXQmeHtUC1EcWKQF2mK4hdJzaKUQ",
  "key16": "2rNMLkCPzgc5VZpqxypSkbvehrnABJEE7S45q52jPD2jU3tV963o9vvEKXEbDjHje3nXWx26zkMWC3iB9Dxe8NqE",
  "key17": "5PXigAy6Y4rZKtAaY7GcSXk7p39UxLe4sJ2V7c1aA5Hcqh4tGtFYEPJmFMzcXoUa5xqxt4E4tJpczE3V7rzoEduu",
  "key18": "gv3f8hFDgc7yiNmocg91nj1pbcUc8JvhJm1d2AKsqhvhRCg6hjz1vvXkYTzZLDfxqkcrM5GhVSY2ob15N2XXYpQ",
  "key19": "4obRGe5HFSm25Ts7yhJepUf98ESboUZYYNWXyWE8uhr2rDTrhKQhmvXnQwW2tEnwCa4t1oSKfaSB3GDbetZH1Vcf",
  "key20": "4RWiEikceEucXryCFBwv15i5rEb6HdQGxH6QY7ZJAW7pyHuMuWSd2qiGnbrYfhHMP7AaBjtxpMvp283omHXK6537",
  "key21": "AM79HskWpdaEQwziyiRq3d24WkRCXsudL4kUo2QF3kPD88xFz3KvqBdNWxXHH4mEAYSesom4AegLg2K3vHeZEH1",
  "key22": "4yboLWhSR3xj5foEVnbVdngRiP1QEATwYjzFcbjoDGHF1DyzmZino2eGjgeWkza2nzyztHzjnTGZ3fYU8qA1DkkE",
  "key23": "2wpiTk15spxHiUCaVYfz4Kyf8jPWN2yvqF1DXFP5jMaogM94Jec3oe173t4L3G63NVETViacoZ2XMV8VmqVwXiaP",
  "key24": "rD98ripYF6k4WmMCAXBYaWG4jJ61dtisWFqzZZSpUMesvxPmY1B3xBWYbwhACpeg45itJTgshhSqNUDDHebeweJ",
  "key25": "iBPqQfYqrcudQ7RcbVLm1R73sk4tpkbMqVPa9279fUEmiXoGNqtVhiqSjvyGtZZfSg8QR9dKBUzBVYzi3rPsz5h",
  "key26": "36jhDhTnEnxw7VAjZ51zXGiubkrJ3EgbwgyTFBp7XvBrZh6zeJv3KMgyYfetU72MDLpYK3F5vocbZfJG6CERtKqw",
  "key27": "2jsXR7KGGqjuM6BqUYLVZ7P2VZ9uKZn5ENMgc9666kzM4ubfz9qyhFFwsdpzNSdXK5WeGGnuHmKVp3yWbTvyxx9W",
  "key28": "4pojx1e6xBY2WBCKjqQDpXtSDCvKhLFHj2Fomgf9cZHLZMzonroFFnc1MLTpVpLYB6BYcLt5pc2G189egjbiAz4L",
  "key29": "2ErLkHrGKrtVzXDGkxPD1TLLG4JsCBT9wkczsHyqwDBsULxmmHshHDtXoycYVzFs28NCH5aLwN4neviQsb3HTiBh",
  "key30": "4VUgruLmLu8bgTB4CkL5U6KmCUb2tf19diJTiURryEizhiqZuSirwzgZMsJPdc4t6gYZ9j32n18JP2YFCLQgQfGA",
  "key31": "cM9r4y89oh8d4xn3E6fZ1StcdpzMAm1MmAkfwEruRYLVzhVnTbXTaMYHybMoMvFGB6Y7MLcqksbYSB7ERotYrWW"
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

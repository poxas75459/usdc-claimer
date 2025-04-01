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
    "56ivJKjkgiLNkA7ZiYafNfWSqssMC2x6ENrYcq3Ea5UYD7y7MywDBFGExCprA3UKPHRxCs2qr81HuUJrKhPurNfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H8eDw6qegg5sUQmFeY7EbpL5fD9hFFXH1W1BxrKHQinwQYgCbJBGhK3gmvG4b3mfHReuYDVLFZTpRfMj2ZRUaEV",
  "key1": "STXJN1iKDwVTqbYgWeiyqo53sNfciQv16Texm8UPhKpWeKimj46fFSC1FA8Rz41H1vRxCnjRU9HTh8FwW9QzV6Z",
  "key2": "4iqQmbwixDzE8pnpxEYXqZ4k9maDQ3YJXxHqMuvkvbmRmJ93CSWm1BZm1uUdmkvSnD4BAy9draRzaoDju4nnJbao",
  "key3": "2nWNjoCG3m5WxL57fpVazZSP9Yr54wRSZJ3A1LHhEnan21DSNnpuNEDnqmzR6dE5am6ovDy8EqYi5ys7LbPKDu45",
  "key4": "3MhkZqDybyUKn5PdAZSbgEgo3mhSQVZvjvkJypM5xr38DyAcpXghdV4suFM5sETxoGnanwVsWWR8UexwDw7tCCw1",
  "key5": "7AaSafmRM5GbVgdGvfJhT8xbBx1PiG32bz6GYsPQZCqnF1rsnW2AAiChH7pkcynjj2NchRBQ9goYvXkMLR8atXY",
  "key6": "L4K1YATutGwpSeYSnZNd3bJsyh3tYuWNAUZiQqNXXJDon9bNuR7XkcbUygEssb9BqUuiWLb71iJDs3U6afcUfYC",
  "key7": "3FRitW7AUHzAzpEapN25Zy4oYAZWj9Dk5oDJLEVUFF7ZfYQVctrrMWNMWrSwAFDa763UMohW8iw6mG687qSCsJZD",
  "key8": "65T78AmzhGq9z2McpdHQoQQiGJQJ57SGyh4ecW1NZapXfMRT8a2g6BUpJ9yW8DiWcTcw3ZnURMR3isgCSRW8K3tn",
  "key9": "qVNJBSy5ct9VHSQ3pTAm2frhcx9zN9AiBqU6D7rMmAfWV8HjEDwgcVkgHMa2axmHF9CKzosda2bbSycPTPEBGRC",
  "key10": "5tUGhcfahLb35MYZJjbvUG4NeZ8PdvYVSYrKMnTngRuyiVpWr2TMt4AvpchXnsgw2vNEFgwiNj8KWH3PigQ6MohC",
  "key11": "5ohAek4TtJsrbbL1aDQoYXPKWCzwNnDPWZFUsHReE94aezZVxBQ5AH1NgwC71CEmCYbB82CU8UscbRqU9RZRtpAy",
  "key12": "4VHT5MzaaqdpdeNyiceuqpAt34vabf8pMPxKjCXuPuF7dv9H3tFNC3pV7dhgjZjhfngDoiPpiXNfbb4TNx2v66XH",
  "key13": "4EezNfYYiCvFp5sTQfKVhJSLX7LeaKAHvMrufKPCK7vN8WAZ93m9x5FRpJ7iDohFdsqPxgMLdaBVQbiSieTKN6qG",
  "key14": "31fVoimebW6TwG2PJmPsX3TGDoQWtRbFkWW9TKrHyePGDPirhoWgFhBT7LoA4HeHdqieUsdhfPXDJJRpYaTigaMT",
  "key15": "3fvYZgvrcN9YCNXiRBWjEZTqs7CTZ5DrZoAC2bzpmNiJtfNfAgjoZkvQq13jqqZpm5cWBWnKXdANDUesuwY62jHq",
  "key16": "65nSKcggS8EwAC7C3PY9ZAAu6SsavWyW6azBoex5fYvS3jt2RdxgXDkbXu2ALe84z2gygjsUVVHupYyfSqyBmuKz",
  "key17": "55Ze6Ei9XCaaY5RCqrizmZS6L4odzAejE1sVuLELN6WvhCphZeJDSjz4TqLQcYGf494zucGGQHJuApzS8QqC5BDY",
  "key18": "DtzmDdZedANABd5K4eZWYqa7A9r72a9gnnQ1cB9RSEpRYWXGjmBewH3CwL8k6p3PzAhqUYGQQ3e59DnAigbpDzD",
  "key19": "4tj32ZtWXivhjQDhR4hDcwi6EdR674kMs9gRT8UAuKf5LxTPRq35T2PDv4ZhzuXH4hrnVBzWp9LmArSTSHRQEGUC",
  "key20": "3EKZvphhrqptpAc8E6jMGec1eenTmTvZJhZ8e87Ux3TrWvxYa1DwrNH4nLXBDkk9ksd93L9mu6b8bZmCz4N66HSP",
  "key21": "Nqd4TzjqJuqM3VEHSh7vssAtcq3Q2wKf879Lywf7b7ZCXcmjw6DgGc6FWCDv5CvZkouy1C2wfk5VPiK9gCDBmsd",
  "key22": "tC1nD6nMv61TqqvkvqHuNnfJiwn7ZemEZFej3SnobopMAr6WmQJuDQ3sPdrUM1epVrCLyfy8rfWzmwJuErsBHVT",
  "key23": "3nRN7uuquanWtPU6u7zzi5PFzsDf1Y9Gt9ce3Wb6sQQ6KdtvH38bq8jmvfwnhdFiy6NNRJSjML8NAoSquJVNBzc1",
  "key24": "2pRFpmeepKxD1kNvFx8mwLLKfT2RBNXvwSpSL9uqJnMFYfhf1JWuffPkuEW5TProkSxUreGSg9DdGDd5CziBdGgJ",
  "key25": "5gWwBZ6ghCuQVFRJdj9xb5C7qQJPCxMqSJUwmeExEKRvUVaLC4obVrKcncqbaTpgqSAPUvtzmE5oJgNQLnoUjAy",
  "key26": "3nppkrYK1gWmFNwpHbhdt1KWNwL4DX548YBbJ1Sb5ar5GwxisZswvaGL8SePdXa6m6GPYWnoRkwHHXTTDRAixGN2",
  "key27": "2Sm64TYso1L7CGDngUgmEaCpf2nJ9fPdoTcZvWN98zPjMH85X8XNdCo9q7Kko4HScUGjJpX9cAA77Yn5aXRDbyEe",
  "key28": "2ejbyAfLpxzM7TERWyzEXDzibwqMHDPeN46Zvx4gNWNtRk9XvZA4sBXrr62Nv9tMweJgZS4R8u4kLPULoLER5iDt",
  "key29": "5FVS6ihGuSj2KkmfU2Y7SVrKyZC2J9u4jfvE4f1dU3BpS1LWtGM7KjBWACSyM7NhS4bNPJJs1Lgxpazd1oyeWCmD",
  "key30": "59j5wvDpLxdwXhXUaZafmcd67NcAvn7u69wWUH2J41DfGy9cPkYpGhaWMi4v6k6C1JiVPdE6U4sBTYH1KZVYCYEw",
  "key31": "2U3w7mT5ypiMvhpZCcBv1kiiGDDVPJAZ9NiqwJz4e6kbbuMDXxUyEY7GM2B3LGzF6E2zov8kW2LF81LA7skCsb9h",
  "key32": "zkarKiQwMR1qDhDmzeozhCo3RPZ3JyRcEHqFLvPncZv5f8PbqvRaFxdSfmX6Axd4JMLPQ5zo8AYbLKyhWdYMNwM",
  "key33": "2tLtLqBHEfKHrAPKWPXYwricqr5tthbrWHm569kCYi6Ef51uYqLaBFRSA1V29mEvJo4hJLBo1yZKFX5MPsgKZF3r",
  "key34": "5XQCrGxDe7Ba5Q55caDjG8KAe4FYtHVFjWnMDheYD59MgH3g7KScNdYsBE53ER3f8LNfdGVuTzKZS524H29bpjzS",
  "key35": "kwUtW7so1zSLDoXTAUcf41iY2ab7LCJKQJZKNdMsGKqDd9RkcoNndf6M9XDFG28c7GdMijvuyrYz2zUiWSsztkQ",
  "key36": "45jQ1BmYTSxcEyLQo8MsNJyPvW57gjUbV3vUAzdJUvFyNWN3fvkS84h9NMgjZ8CftFdHCJfT58hrJ7LD5Z4dqQCc",
  "key37": "5W6L5Ni26U45XvMUkpoQNqfVYFJp5esw6mQ5AYcNmoYWQKBpDSCdbpvCKhqYWGzbbsjrX8Fk9cqqAvBsJGEwymc7",
  "key38": "5UXVAuX1PJqzMZ6R1pH2L1945WdoQ5DvTWv5MQnGtt3H1UDW7tpeNFmNWYMEFsFtLadXHkkYpXuwY1fbn7yJhe6T",
  "key39": "66H4VYKmFBLMv3JYTFWH49WwQYD4yidAT2Ka7VnxrcG9omuWD8BbpBw83GXk1m9ZbM8N7ArK6Ht9RneDrUPNvQV8",
  "key40": "4JYoKSsaCvfB5rqQjXRBTi9gEbMrdVfCPRZ7f23p3i8ZK8g48KUZ7x569kuXJ2t2mJHYpLRYpwGehZJ5ADqdKtAT",
  "key41": "3bj9rARsyxUpQzhMq2pSTXcsPZjitHktgLScenWxwZZmBT9QUEwPtoYC2nsA6exntT1m7ML6bhJw6CM8cnQA9nDt",
  "key42": "4FtSJ3GBgLsuupMMSLj64o3BHchJj52bRKy3bxX8uhAtSxSx7ke9YhqYhqFoeWXhcS5tCS3NC6L9GnQpcPP1pAa5",
  "key43": "5PuhxZYehWyqoybA3RwPixpNBLubQsxfcBNW8Vkp3Eey9NfhGTTukoG9vALJFYeNEmoT6Ha2us4HGtfFiBB5mfoE"
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

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
    "5x1RwLY3EVw3CyYnekAjVb7K9bMdbe4RzXazso26rbPjwyDqwoK6EVwbkpSzcHvKZqqbpn8nfjGahLHWPxiJpgbs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38gq2yCohWAcGkarMr9TCFcGHEDRTjzvgkEij2ZXkRFYzBna3RJnJe359iUxkC92uyHoXJ7FUXEreB2P4gb5L5w7",
  "key1": "3HXberE2kkSiCC3TPPywa9NhZnGZ9ZsXt4vcpEinaZSGjWQfUTPMVWNbixFiTVoUD3GHauuxg8Ynt6bHS1sod49F",
  "key2": "4vvPY5BDP3ecGwAEjrbza5yzsPHW5wj7SRxkc35SaRCAsVPyhCPDjzkr7ykjsTvH9jkh3X4UvVubSKaMiznnCTuP",
  "key3": "5Bu9wbFbrC2vxbtcwApspGM7WbiXaU1i58PYwWW9AWAS3BrFH1gW86JddwmJUcwyCbTgH6uPsxoqprWPMoX4AFMe",
  "key4": "2jxd5zKXyveVoXkWKASPn4KZ6w1cUFL2hoEYWhZRG5cH2p8LDvYkWv8nFAMwyBK2JiTyC4MV5CsfBdMmSVbxeEZd",
  "key5": "funBBW3LPHKVpcZueDabLQQWPxtTZFTri9gnk4hHAZ663EmWtpQgw3Ma66dvPRKJ7Xqv6hhL8Pn2W1q7djwUhLc",
  "key6": "51jX3f9BTNy7vn9uNHBZYQGFyq1K9HfG8YXZVRuFKE55cemKAjrz9JHxPRjzZoPiiFKMSb7W2TSqgoihApncUorY",
  "key7": "StqcSAAgaV7MdP2CzryyvCW1ZESK6C5Pzf8fyXzRSJv6sTkjsd1cS6Z75cW2AMDLD4idBfTCucXzmJUVTUM4GZM",
  "key8": "27WjvhYQA6LhxeaHmjS7tw7P1WTqHNSMPpfF1fZKZjt6GYBPfy6HMvEwsGcdjMToAtPiWR6jwCwDhMttqzRj41gY",
  "key9": "2NQSLzix4CmEyKDZW8L1mzsafiERpFA7Xyx1fn7Uy2H9DXvsE8yfz4jb6f6yHtQnUJPNe5xqFHfh7nBCtHSAsxD5",
  "key10": "3VXEjnbkEUP2HKB8ipkCbqDtjiVWP4tkfwjzQhds1DhJVvCZ28RaLm7k5FiaitG9zJFvADxu5uHo96asBxvmab6Z",
  "key11": "25STqBRgNDVRZBdE9ZWoDZEyD3TefKSm67FUURCbcmErKRYSnaqkSgQ71w9mhF2JB9YfiXvjrE6rbmxTWNDPDQ74",
  "key12": "eZi57deKj6uW3WLj9EpaAZtUKALjxdE612U6X8QYVhVaH3e1XeDr9VtXGTEVrp9Up54tPBdrfxMdTVZGd1mcc7T",
  "key13": "3wMqrVv2ZLVa19xhnoFswzcqNkePfKdoC7r4MBrNkBX1FmNC5KdqyLQjmhBQHATDbyHZpShuYCg7uvZNPyfdxNpT",
  "key14": "59yJJ5McVAXhV8GznMEW7uAv4ZA3wJ5afiW4mfUEvca9jjoGgNzbAcQyHkYwSL4fMtciZLMGNBa1GNxPnE38uumt",
  "key15": "QNGiQSkdniHwn3DpChDcwicQuFRTRSkqdr6SNTA5kpUGBErPRV2u9nSSkBYQ9tSeM19vgH2HXnhk2TzmEtBQ7tC",
  "key16": "2q68DkftGm6t8a1sdKGgvDKwf91AdNLsFDDHwRSKyBaJahJoRRvkveS3g6q6RGXK7EhSH4V1Rozb7yK2nR5U3qCT",
  "key17": "4tQmKeSwMbv8Rwppt5K76mSaH3cKfjitS5M1aPxx3JchBSfc4z1SST7PjZ1Jb1NHRZrtvq1wDbZQiakWTvp9PN3p",
  "key18": "2xEsaqh6wRWKGXg2QCoNSNFAf8Pa1NcJSt1PhJNYLvqbhn1Kt5v9Wf47K733KqnN1CC2Kysx4mCxP1rGVxbkXZUK",
  "key19": "5J8Nb75BHBEAA8Gn1oZnDgnXrEbx26NYv7WULD9VaxL9ELvWucNubWr3uogCTbRz3gJczmPfMTwzkYiq6T4NsEhV",
  "key20": "4VQcARAC75uF52HGW9LznKECPQJYvoMTZ9yFRphqEeYVBN2KZjntqzTAUmeC79Jp8dTVb7YUsMEVdUUnQueW31w9",
  "key21": "kkUVGVHMEmnre89zc8kSkiRYS1CT1G8jzL79P9xzAddTby6NTEStC9zxUcqsUPFExkfoh2ZQj53PVYNVFwozbBu",
  "key22": "2zZwNFxvB3WN4Zv3mtToG5ZcCMzrY6N9BjQrqie1zcCuHkPDzwnSw8zjiuJ9UF29QQq6F4G5DfuZqJW8qMk1dr3t",
  "key23": "7t57Ve47wB12XuR3BArr3qafMiUwzeRePpYcnDCpR7FLdLngRSz3DgVzUX3nXC2GA6T4jffYbpuDctU3q48Utwa",
  "key24": "5LRiwQQgwFQ5gNa6LqA1gUyLM7s7KQHfvppyhof2TMrHzNb56u98CSjR8UHkBcw3nqSWqJbqntJvTdBK6q8ZoNH3",
  "key25": "3jNq21nbUYx2Me62bsQCGRFpTPcqxeUpLE3Cjo8UNUUKpUJSPfX6tCgfhUVDWgAN8CLnJP1x71et5KZ7t6xXecya",
  "key26": "2oxYhxrP4Hhqes4LNDBarz9M4otwQ9ULQxCCAaU5WeGZVo5zGA46oFJkY5mwgH9YjVbonsLhfkwKj678yGJfTxjj",
  "key27": "2R6ebNJ6JyugEwTaHbNqzHmTv1g8MVweVBtXTFMNZgqWfSp4Lv4wSDEthec4ZfVGpjC2drPuYSyVEj3YZQ4oGGsj",
  "key28": "37ENhPFHCtsunAaR4cJ623ju4Anvq2xvGXNVtzDbLUn1zBEVLy2bDGwb3YhEQXDqAbmfXv5A73QPsQBKqjprrLxW",
  "key29": "62vybWADtSAwAJcNSDf1HyPCt5Vnu4GjX7M8zjyiz44NvzCR3UibRomB9H4CRDvTrRnvZ7Q3SwKvsMhNEgCChrEt",
  "key30": "4kyyuj3zbhBkijjDk9ebnRMaQF3YM63Gsh64H7h3uadTA5TbWti7pYz1f9vhGCfsQCsGmcfY6i5nXqP9e2HQwQrw",
  "key31": "4UdN2XyxJ4viLd5yS5tY4FzDsHJq46Bnqjjwqzsgv1ocTm7ovBkPGGQCNbU9SD6MAUeDYMUuXqXAkBdnxgaNa9Lg",
  "key32": "5wkzWQXJrcqUBYUi4cVvCn7hUF6jqsXhqvW2Dr61fB5166T3o8xXqFcxtDkQZE2RGjeEpPZBNzqS5S6LPg8xGAMw",
  "key33": "5PqCtXZuo13Kg4rQkn7DJPdCotX7BhQG4vABSz4Y44tnaJe5SS8EVKVah5tZVXk6pbwRXMZVyXc9ax8vZsTz1386",
  "key34": "6QUnNSCVFaeRHkdWXFpJohacyo5oh7g29YQQTuqf8qy4FySbnPrGfxfT4gWrutwsYgT8nUWiqe9wybR5oKkR71X",
  "key35": "7T23H8Fyce9WfYQ7MsGwd3coBWtKZMAVx5ApmEs9GZ3aXQBBjDF8pcb8pP5k7A3XPSD4QH6qnfsbhabAN4iB1Dg",
  "key36": "5MQZBTZNHd1rb7bZk7y8NS5ZBBWot6JFH8ES9qGZEZB66rX5WjpihLhxAY6KNxmZWPXaPRus2avM5ZHLJefaWBbg",
  "key37": "3mbjatAYMTuN9aRvz6jpzxv29t1AeweC5q9fX63gDD3wvanMxevKgoBaHoV7XR4idWeHtbqQeaUZxeDGMUJhYhPt",
  "key38": "3PSGRYCpyTWTjt4FGWD6Q1yuKBTG6voPybKRnXP4Yo3T6Wta2u72kxqzR9hkF3ymKJ7jA7jskRPbjYLCae9QVDLy",
  "key39": "3AYmuVPVLWMAZSAFTg8atGN6dLdPBkKLxcFYD8B6i5b3kf7ddKW6QD3oassqDPWEX7rBmmVYZBmsbDEGhjZgk4en",
  "key40": "5UWBCny5t6F53CEHoFtDrTjsUsgAbLbQstXfJN64UqtZNgEXsXGb8SzwKFEkpc8Up4M8c7XXD5GA2YKuhYmqpxKW",
  "key41": "4sCncnR56TDh3drDSNWFz6LvttJEneTzmJjKLCvNx2LnNTF98xDsoaGP9NNfdWjDVZMui8Uup4rbWFT297YQz9bL",
  "key42": "2Mf2rYFXF9bWYTkcvshbYvQSQNtAzh1jXw4VgXAYSAqzaKGWgskpfiDPTvojiqbDc7bh5Pd1sb7VBdcSxGHDcdv5"
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

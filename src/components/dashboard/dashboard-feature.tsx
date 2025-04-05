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
    "2jhYjf3Jr1Qu8JxRWA3aTXX53MGFaNCXSqiZjtzzNcMujuTNc7uQd5gPf6ReZ8Mvgz7ar8VdmHi289S4dUA7Yr6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5fxdFqJxddBAHuo2jaVPxYm5zSsL3uEWpjrmqqHUQfcoPyUiTX3x9reAo2z7HmURnNJjMwWw66dP93rRWwiuuq",
  "key1": "2jSLqjcbh47W5PrwzWY39ugCfZND58ypF9xGL8Ap1nCYZzgKhrREXwgAriJwe5ZMbKCdMTmjfAfxZF8wYJBpU8jr",
  "key2": "4cMzge6VKi1osCkBwXcokMksQm6ngmbF8uzHZrMAuhNhAb8PTBpPAZYaTaSpw9xeyfXb7ahLm9GL2kSXoKVrUGEr",
  "key3": "4kprx2VX6jDZNKaLoBcPus68NJGrzCPGc5mdLkDKuX8XLNMSwFvsDYM8LH8zFvNYs5vyr6iqAHSB8QJfZEfNoB2G",
  "key4": "57Kg7ZjSuTxSqnRu6fCQiRiGfvCs9Z5z8Fab8Tarr1aFJCBEds7rcJqxLqsvE3sY7MGFUNK7ovta9QkdYMhyGs4W",
  "key5": "EXYvMeWZpLi5f4rgpAaRhxwSLQRaVLck4v15NndvygPCz7qTWjHZDs1Mdd8uTBpaSEz83RHPVAMCDujT9f9UM5f",
  "key6": "42SKBiXhNXWkiKGqTmsUGDY4Qx2tDYpT94bCXpJbLGcX4RPm8HG2zBQHKWhGALa5f78u3kk7u9LSFNgaUBAJhoVM",
  "key7": "3bvPyFX9HPjwfspAiJiysaf1XCcCjUpatA7vQFaKW3D8cufJCYmyKPzGbonF9NR8BDGzihYf3rMUjid6yNgDCbws",
  "key8": "4vLP5T1KxyzbCEWr56ftSTmPxMWR16eJpPePfMV5XfjdCqnYN6QTG3cY7UVYEKyokSGabcBas8hiKLovwCdNiYqX",
  "key9": "3LSqbVq1ig42peCdQvgRAhQK2gDAUFiLVk4Am8DhA1DJQUTTip5dhmhsn1tad7t9JgDzY9hHktbm3DDVT22z8SpR",
  "key10": "TsRfA3e7jb5DbSyNnmKQLs2WSxLvo2yXwG7D6wVHr4pG1e3fG8fMwmJHAQJHAk8iA2ud1ik3wfDDL9HoDbcX9do",
  "key11": "E2QydLgFeUeb7dKz7A1mWPFt7BL9hsPpQ9bfhLzDs7gXf3wpkw2sQJkwL6JgwUxW1iSuH2vKFes1eJZzisQP94a",
  "key12": "mumZg7HW3wMtD7AXbbNuu2KQxoDjsrLenm3FddFd4VvcbK68dkmUuhkCDVvF8Z6dSRiTzfnDZcnTmd8TibX7mA5",
  "key13": "4jsxXyc45avUgCRfEHef1UAFA76XYFsn9votxh8muDs6JjJDANuATSFtFeRUJJgJBScVYSNknoDxM3An4njN1JdS",
  "key14": "36ABFckSspHgsesa37XqFh5AyXZe58tv8nmy5ysBWcUFwTE3MVGC2G9T9uvs7tU5bMZiM5pj9UPXWNc9VTpA4qgP",
  "key15": "5pTsUouNCrRd5keCEtNAW5TLNbqP6Ri6Z3Y7sLPjL66XYc88gwREqrhrivPgYCgM2UDRxpo4erwSGjGk91vzmFRw",
  "key16": "3Wxvqg8dwBiZw5FCwb37CHXqtxQwdkQjKptdNuNQSir2myyte8y6GqEA4nzZN2LKTrbo2AXHh2Pma7N4j4N9FqCZ",
  "key17": "mXLP5frGFf6B5BPiKr3x9q8Rg4G2ksGMM5eE6knaWshQKTckvvirf5ZhYEdjMMmzNam33uS93XGV6d1L1skSRDQ",
  "key18": "5xqsf8BMeDEZxF4mW7WcX2G7Jnq7c7dYoypCwcb5zmrRvX2qhUd1xzFeSbn9TEj8eKRnV3Rg5ptyEZxt1r1hoXaQ",
  "key19": "DCVEGW1FWjyFanmmeqUroz4w8DGTjqg2CgHWHh6yYSNMPXrYhn2jtRaTmykpbMKTEgE3E6dapiNyVZKqufLkbx2",
  "key20": "3VM5QFaWWQr7Gpe23S24jPhhH7KLmqZAqd5GqzAe6pFqXjDocjVkg2gVVG3sbRoHpwFbdQeT6VnBMpr4og58qm7P",
  "key21": "5EYVVcFTJMLZz23GWUU8nohS1yWbPTjH2EV7MF1e6thp9t5UNHf1Vu5stfVbMtfamwUucBoqrRtn9iNreSdBf7vN",
  "key22": "2npKNmw7B7t1hm4rAnTtJx69mdxz71i1WkRXLYfmTAMpmyZFPgWFykKeyEUWArUqEGDE8SkDDLoPkRvR9RVXuL2A",
  "key23": "2j1Vx4pYnUeoSe2eASf2wkNZYnt663uNtUKaPoWZBVAHPCMwV8mTF1DKxym3yQW6WjjZb8iHe7yKBMR1Ad5mTs5L",
  "key24": "39scdzB2UuwhfapQNvNjnLQEuA6u7UmGcmx6wknHso4uFZCbuVPF68em5TfsaNq6s2nnsprLVk2pkHpsa2dcBGpm",
  "key25": "23seYwVRRdNFN7eW62mpBSkcaiJ6xTUXi4Xo5cNZTPqKUbPRkWE7gCMdrVBo3mGS7WTtbW7CKf2h95JTUyBSnrzF",
  "key26": "3gUbMv1xAFnqcVrFPChSg61fuL7kvGbi9UQcsvtGY4eRrRQcQ7RmDcrs293MEgRqT1FajspTsWPSAFT8BccvcLVD",
  "key27": "3tbwXbLEUXaR8u4EKRjg1RPZDvzsYUxApahtASn6Z7mPA8NLGsAD1tzcwa9CDcNbXPWVZ8W7DnNckFrYvWp8bbWt",
  "key28": "2THkxHo8mXTQbNS24wyjAYWvLL4GRHiQiMbCG4qhzJF1j2ArQfuw7BgstYqHm62nyvzChpvVmhU98bYmDEEWNXyN",
  "key29": "ygSYPUDMD5vbHFdLPoQ7ocC7kDZdfBwdCjAEAZeyseHZMotG6xh9K1Qh1iWBiFqVtQAyW3W3nApbLH7tsnHVJdh",
  "key30": "2i4cfeGQD3zc3BqctZmWDd6ndLr6Zw4Zv9dq9hjK6icxyYDmDqD34GQ6w94oygFJijcH174HYjhx9QC9uLmTHBxJ",
  "key31": "5oUkHGXwK45Pnr1AMZw3TbeWEUUypU8LCTgCYaEoYpqho5dfXGjLgmbtcdo71hBi41nEyNjTHr3FC8qyxaDXD5di",
  "key32": "4f2wU9EzwY1umJhmnAXmETXTV1bAqfMWKDdHFg5aFunhz16UfgmUovPUvv2rwKtywFgG3pyWoJHfsyLVmMLgCY63",
  "key33": "XgXhK1dpJSnPVY49HKyLk9rSxPiRu8qocuZmyaQX5QrvV1jKWLmNvSwwYVn1FbYeWctZeiy6n7ag7ARhpvHsrgg",
  "key34": "zAqhKr1LrXbo6fFLn63V9Pr8qcC1fNdzLjYEUmkZ6VdUoUT7EUeJ1siCQSFWckH3R9kqxjkmRzVhUpHUeAG9ejT",
  "key35": "5w39KhSncTsTb4UwLJd6iQWFRDvKGiTfKutHEw9mrC2rFGAqL8gdVVKpnQezZJj2Fq8do1zbR3N6cCv6TXZ768m4",
  "key36": "4faDEc4BusYnwxXFCbpgeYybiinP6Xvg8Zex2yy3yLBGT7Sn5KzZxqpLCb47zybijaPUBFRYqfD2paXJMSzM7i1X",
  "key37": "3dgCAXK3Jo3t7oixxxyyPgJHEMGWUdACoFAmfvkdJMQ6M6BgGnhzfiVgSXnqnmaKs5uWn1ZoSAsjSCZaD9mSkbiJ",
  "key38": "5zpFj7PiCDGFDWaboRp3BVkarjoEDrLS2LrozPKTK86PsfFzYTU26ktz288XUoG3dBM5iRNLvveyj1itQXbpTD7u",
  "key39": "wiFSmGLu853W8tXiG5fZYZjbKUpvpydquQd2p6DCZUdTv4xii8oRdDs8zxHhv9aS3pPyiXtJBTjcxGqQqsRvf9F",
  "key40": "3hat1iuNXKRr6xBCgiQcEbBnRLxe11jiEo2SURkioVqDqxRBoxmmTzmUVbiSVoPmQmiGwpM7EGtHsPVtix26ZzL1",
  "key41": "29xxGnjZtLhPnJvtjfDoRb8ZqwLuCXKqJXBQsFo33hYmkUnYzrkwVeoh4d9pJvUFN3zdsMUzU2aFLDoDu6yHNQsq"
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

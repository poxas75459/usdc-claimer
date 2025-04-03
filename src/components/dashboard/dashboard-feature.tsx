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
    "3ELC2C3J6QYVB13ynGRJpcNJ1Mf9xymLoh2rZ4NTERSWF4SWUvSDDHGHZeGa8UrP5X3x4pzDBgdkhLPjKsfSMYn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5unvn9Aess6vaaHwYX2AswroFquCHTfxmRTcXTnf7JkU4EB3b5rdgUCL9mzJwea89WHE2P3tbNh72DTeLTjMgiMJ",
  "key1": "4znh4eavy86zTePaPX9XDtrNrhwG2JdsDNNCiN5FruNquSMkyrDmRHoGYeXSbG1BhmWsvALHAr2H7dreFAbiF1uK",
  "key2": "KZ3UM4f257CqqKtWAcFjoe1KP6QAp1ZU91dGneZbNdnuiS4EJVkygsiMf3oGoTbFiKfaZs2iaqYPLaLWtmipS9f",
  "key3": "5ytek6Rjd1WGUvHqKMet13syT58fVvCdQ8zpG2Kqt2CEcUhthPFMmN3uJTRB3nAKdNPz9f8JqNRLcgZoAHjFJ8Zu",
  "key4": "3QpXHNvk87ULZjdP8GdNhiQGAiUDPDpoou1dd86vp6BFPC7uevYzkA2ZHDBK3aN2692fmEWeYks6KJwbyKRph7us",
  "key5": "38W385v5dy1uSZwh1QP8y1NdxwZG9uZGd1hVSeuy5pLw7oZhnc2jEV2JeBd6oEyZFGVt1WzL1dsGTtHHmtYBtzt2",
  "key6": "4MwZ1gv97SqbDxdrzmNCoSgctakZFdGjWdTaYsjAdbfhBDXiKyjHjBsXsA6j3eoa8o38yjHNL6S5CNg4Dg8t29mR",
  "key7": "3eMbQpumJW1Tnk9Aq5NgC6QrKLLqFmz5tJtgdjgd8aQFXr9PDvUXHRmx92KNbfJ9uo9sc24uYDWDp9pkAH5ASY6H",
  "key8": "41hLDFgiy79fbfMZbJ49tZnB4j6bU8vxXoMZdPqw2ptmKfjrSSk8C1xgZEGC1MgM6pnK9rPgRBfCA9ymh4t3Qz7w",
  "key9": "637vf5DABqT4agQztHLXjw974To3Pz7JMhq3PEdJbvLC7SgYHDjFzgfCJ4jBEnWx3zqRR8ZM4q83UyFUPJj5YmFb",
  "key10": "4BfNL4ZABxtohe3prEcm4kfUQMcnw1q7nQk822Pg23Aw2bHK9LFmX3AVtSvmup7epbFtbpQe4KNHMmRhKXNe48ey",
  "key11": "ZaWDDHKSF4BkgwKeS5jYqVtgG9vomV4k1rXep6G7BehynRvdYwLxQ5bUbwBTk8K1WT9QCRMRfYx5eHqRHTWiw3Q",
  "key12": "1GNZoTr6sbpgVJj5pq7oAgocV9f1gGdFGP8EViXrf9sv21xMkjFAAJ8cZh2iH395bhcLjPCqbFGskjzvgE5agv4",
  "key13": "51gbd9NEcDetaUYnTfY85Q5nkF4288JL1ZgyU9C5JMH1MAxt8WLppdoQVc8i5YTk9ZZRjtMh1pVGudTuD19NhXB",
  "key14": "ehLeUzv6NeTanbQzPG1jUvX8HkQSs7Pf71cJjVkuJa2J7QL2BqQJ9jGj2HZuPxukHmFsC5bd7VkVpfySsJ2TUPs",
  "key15": "4fFgUfKheeLn5wznETyAuc1omBNSdpHXb4Fd5jojy7WX4NiTKLL56m2qTc9qqq5H6e2EEgZqszQRiZYfuKQ43MY7",
  "key16": "29VM8Z8AJweKtnXCTJmQUmVUc7i3kWEMVLEEd7B6w7tg1deFYTfrqhQvA5uN4u4Bibss4DtAwRdbnGfHAswjj9S2",
  "key17": "5UqtHvSxCjAng96HiHL8FXhcpRUy4qmurRjypz5fc3iyuCT5qMFwp2FjXoH5ZWR7Ec6CghaTdNyfiRaQXSVCZvkn",
  "key18": "3fGhLHJHJGbs2NH7bCVkX7tcqbNxTdRT6ZQH42RPDKUcscxQvJFNrHqdGoSgbuyXdNSzuqvh4uGTSkoHAFEgKVv5",
  "key19": "3uuUwHTR5w972cwMcqCrusrxLJwUMtrFjffzDScmvSBxSjCGf8RMubwd5XLXJEvDHXa8xkMXjN1XxhPijxpnmA6y",
  "key20": "bCaTzDVa3gSyeX5cNWqXuvDEhnZEnwRHDGC9je8QVTXrH8avf9HpHnqhN7gqiQqnu5wgetMPwrPmS3siz8AyzC9",
  "key21": "tkAkVWdiGme5dzMkVXiUaufGWyEJby3bNuqTB1LEwosnuvKTGqqUQjpMcmxKnjyNv3NQSBQE2iWMyAvY1SA8KdZ",
  "key22": "3SAGJTJgCJkDK94pYLzUykeJguhajfELMn5ydpG87kkWUysF653xEGPKtaw6173DENLgSm5kNtr8bbLCJFGA5ipK",
  "key23": "4fEETpqTXHcfDLSgv8PLvjTEf7tzBSb5fiYPD4xNogi6mha7s5oyANcGgJzrzU53bQzKaxv9HktmTGg1SN98zzwc",
  "key24": "dUSbqQGGwHCqnhZp5s5xyetG92211Wm8jk5Yswmjyr7oxHXL8yja39HGDmEXDvuYYyYPZoFnLkRNZqDNoqfcD2g",
  "key25": "3Usza13dsJwdeMtbertbZsYS1VjhtBBynY1fRuE3J3WEJn8wEfbVenFhufSshMNKiUd8BEE8RsYkL5E3qC3C87kE",
  "key26": "5H5SAsesNUx6r6B2UbiVE5QcMtLPEQTt5w4gcVvcCWG4StMzfckf1w8tBrCz7jwBxhnSnFGUmtVMnTqBbUqMVC1b",
  "key27": "3qvQRJwKYtBkovd38fQq6A9WX3MmoLhr55PUV3m228Hxau7Ti4qhtkqPjaFG8xW6BBoyzJpNZiZs5JEymhRZXhR2",
  "key28": "28dzEHS5xgeFa9KbC3Z46u29auPoeuFXYZ6zdJr6vj5NWsjSS1x2UBLQ3krXZazUBqB1v66q4a1NPj6svVA1iMPe",
  "key29": "2E3MQxKxadoURobNhqVfuQUa55Rm3NHTT19fJM3o7kjgAzrEZzDh8ZXyUiYm6Zak1vst7kaVCGjQzRiwzpv5qGA8",
  "key30": "2kBhzuPtn6H6GQZbW3vswq52VKxsvz3UC2KHiuL4nGEdNGHbdWVGpUvP54Ek6cjThABgUkcYYdtaJejCemeqMk75",
  "key31": "4VcWPw9vaYVUmDSYJPXsB2AxyFeY5AR4xVNYVeZ4JC542B6XuLuz3CH3MJBLDkX7DNwAUdgcZJu4BBEm9zyj8R44",
  "key32": "53dvu6FE6PGTgSwwMcJPhXhKLoi5ozPr22SWpZbusctkiBEmCNTHxsC6BQfqouW2KkzzM4JMu2u4d7wRvHwcYat8",
  "key33": "31j5PzuzXEGwXiv4iToUozJKtmZURB2rAEFTSssz3BLGL1jK3tnFFz2uyoSB98BxRAPYtkiRikGFs1gt61jzT7AB",
  "key34": "bKho8PfmudKgx4gCbsruN37eQgtkGZQQEax4cqn5nRUkJny2WRMMg6rhgsQAYGGqf8thVoiwirXZCmYuTamUQDN",
  "key35": "cZit9iC3L283cucAVXfAXPgWrbe9gE4guRBVUJM6avuPbL8gZBmrynSdZfmwYwPz4vbLnWvZDbApWUbPwqJqs6z",
  "key36": "gvPQy1axNWyDGKyRZ1pyeh2TzmA1Cz3n3fsakbDbhJuYP4eXYunatYRVwzwDeuMfUEVDdhX8BqvV2T9NbJmRXUC",
  "key37": "2nP4LzzMsQreVmdjcNTA3Fq8JZhfCCaBPqHkaDQP65wZfVwwCoNRpTf8yxnyH6TBY7cmUuNsCXD1uSn7ymharqmb"
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

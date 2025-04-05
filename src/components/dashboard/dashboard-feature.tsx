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
    "3Niyc5zzaxPgvnjQ8ktdNvwTRs8BW32CiQ5yS1VACH7hUUWwBdhaWGpmqRdbTWgB5nwqgCauyi9jrtEmSRBrshq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptEGrWY1eZw7HvX6pKhMi5LdWXTDyFWfvL4gwfW8NWVVhdyPsQcJr5XPusaUwAS1b7r2emDTKFHRC1vQfVKvyxi",
  "key1": "2eNmaedMaBnrzAZD5RNpRPkvQGPV2JjSyG1PrybdwzUiSpJo8PXLhr22ppCeV6DWt9is3pfYmaJxmrqRJv6LuiLc",
  "key2": "4LHRaafgrpPS7BdvNbhu2PDbRBr6CzmvnCffdw94NgD6Bf2672y73rZ8TCtvGB9f36Qexm3YTYngUkdM3qaqn5u8",
  "key3": "daWqsgePcgjPCZn32JgGvVXzsRQkbGMtQoC9s2vgW9AQDdQnE7wZCyWgoabNf4HbJnh9RwRt3Cqu3WSpV5EeBke",
  "key4": "4ySBG3fEKtww8fdgGdPbFpUxZaZ9XumNi12ovEgKWhfPzNRxTxHjhnHr7hNeGY52XJFk2wc2ECKuoPJDrMXay41p",
  "key5": "34EwCQDhaY5JcpP8ojEbBSCLknNLyHoTCi4kNHZzaeQvFfvjFAJeeD8Lb5Kdum7k9uqRPGke1FLsoW4h9X5FMpTF",
  "key6": "2piPMtFmZjQUHXyfu3NuNipeFuJKcajrg9THhWwX1dCAr5FFthTwTuE7Lpg35CEQJ8syrtWouQWFVwedK3QQHz6C",
  "key7": "AUh96oEqc8pkGMpNycmGXrM1KrK1E1BJcu71H9AmnWnf39w6TrPiTcgmc7n1VvPFLKxJpjAEmTxa2CDhQaKdLJ7",
  "key8": "5H1Ry71vBACVN2BRMauezXKbr2442ExFhy5hRioDJ3v2FGMSkLer8mskhWxYbSMzvFA2Ysv7hYdVhuc3RTySbFrJ",
  "key9": "3FGZd9oEpxh3YePcD2rZDKgoeRdNWLt2U4jZgeznCzH1Wx21NP6s4gBfLDitcen79QGGudXE7runNdQd41XZ14Sc",
  "key10": "KtoaiTjSaMNxHK1j8aKEqKhcDc4RyaTdk3ZnRf5fY4YjKdG7VcHzyajX3vWc2EtmGD9YjQ5ktbPrWCXqeN29sNg",
  "key11": "3PW8kZXRXubxejBVKozxtbwhQsmWyD8ktoxstpXykAZvf5J8v956Z8VbWg1Z5Yu8RDBjSo33QJSRGYD38jY3oFxp",
  "key12": "5jcFdmKB7vLvhmcyou3WYDQfxQ1mwPk17v2uKwRrp8p9MSopUB8Xc5B9tJR9N3iKVTTyYAaofm4B3cR65o19CGzY",
  "key13": "3YWR259udsLq1daoL4f3vh5HSLJGwGyPg7LP2TCKe8oTjHLygyc3JkdDACMNTNi3K1kKC6kRSfN6UAgGrcbjekGy",
  "key14": "4fVXC6CRbmUfAunzv2Aq5DorMPfrxuvzJyHJYw84iD7Rcuvr5qWmiEDxS2HCVmy2pDmiJGBumS1UU211SwCMDyYi",
  "key15": "44P6XWmjphvRotVXVQ2X8rKQXWRhsXPQT9mo5Mkdi63x9HvMS4zU5W8yvBKZoYaDFmJvtYWDuLnUM2LsFB5muu3z",
  "key16": "4rhW41FUAK3hbWCG8DEzXmWYiuQeJBjy4Nocruez9ioSi6ytqLsagZb12XhKSqJzMUQ9uAn3Yxa1Jivf5MfDoJdM",
  "key17": "oLkmrJkV4EaTfLUeeChKXCgJQTGvMmXvo4ncyNP4UJFfGqrRjojNywuw9njTN4GHW7KtUxKCr1A78TndhcBndx6",
  "key18": "2AWBiAKwcSisucSzmQ4jzbJ8bCmUTB9jasv4qnsH5ejm5CCVJmUhNetAJjeYESb4Kg8sBfSEaX3R5JBtzB5FHpuC",
  "key19": "5yGmmNDfx6jkAhMH1BokN7gSwbUj667doZbnWbyK7DkpF9sgSK1unpE7jPzvXuPmbxzUaMJrWX2BbUpLoom2x8jH",
  "key20": "3FE3oa6xjc77z3arBEoggoCPHKUKdoSKScFCcrzqeMVs78f1Er1npbhBdFeSJohCz5dV666Ev3niHfD3HFgFd2Ny",
  "key21": "4RohNN5TKUk4MaRh9kVqWwFZgJSetQx4SxCYcWrMNkxXXCUp2GejcsHXYDga4XfNMT4vjrEyt7m3TGq3jDPQVoVe",
  "key22": "47M2hEEPqezhJGm7aPG6vc6Pb6iyUEg8wpCjgYFNCC6aVBVHsUG2MeukNgbUNAApjEyvKWF26dALoWemdXgDndnE",
  "key23": "jB4mUhdmHH3yxZjcPkSC5uAd53J5gq1X54oWGe3sZs8vyt6unPHcTk7ufGa6r8rSJNJwTpVD8v33D72nUVeayA9",
  "key24": "3qQyg1c7M4W5daJ5gdyMVfjrXAtaE91ovBED5Bfzgu58yGX8Ztyi5tGp5jMHdhHnniQY4eddwnNrcRmPCZHvZM32",
  "key25": "2MfMEBLn8f4Rs4DF6JPuzJRRRwEpYArCeg1fzHaQ4LunPn2zZ1kupMCFQRwV3NFydvEJ23aF4bpnHwE5qH5jofq9",
  "key26": "4f5vbt7exmXGjAUgNKCu3mV3jKrp5eNHKvP4wRK4Kxugt3CQEktXnTixmX3jBpFwDzLNQYXyiGmXyRDYUkS3V2Gq",
  "key27": "27ruJtLYxKLq7FXNAQ9qHQd3f64SRrZ7b76qSfEpo5wG5wkDT4VbsVV7g9WKVquf4jN6aqFFCEzXqdo949JHJ7Lk",
  "key28": "4kua1Zo9E9Arf7Pq2iEHiRdAA8MhLjAMqCCJUwfCQzba6V2UJ3Q1qqWVw6TkH2eMXzCV7hFP6Ezw8hLEw9AEnwLm",
  "key29": "3f6xLJRcBi4KarkX3UyoGWoMdJVjqALUzxmpK2tviJ1r4uTs3rVZ8iYq1izC1VsNvehtyjSv4qtWj69bPvGEY2MR",
  "key30": "4qnr24SufJMBkMWtzaCbCXiHLwHHHru6yoSAuFXXGA6L9LhyjyMRKNDXvi1XbmTbEpf8KNBABRFK8ndzGDimopFP",
  "key31": "4XLSUyAy9dtD6pfDVToAh5bJ6xBjFVkU92YdUdQTnAKNHn3rEjqFH9HYk4srNAzrg5fdc2jaNgRkCqUCGJRvf3JA",
  "key32": "2QLm55K5CPZrXj8UnnyDAmsXyyMBdb9PEe9YQqz4Ey2RgHpMCD6UsYTJphW5FPmwNu4hQdVbcTbRUuvc2JCn2cyL",
  "key33": "2sqME9HTPaESaNFL4eQDLjKGCQexopBKHPQf4k3R7iisVbHtHRxbmYJdHz7LxN7yTDijPwNMa1uGPy5VFzKiABAV",
  "key34": "5oj1pXJeimVNn3bVqZ5F8vUWdN88EqiCMjbjDJwapxuXt6KgPMgizeUWtnNodiwHg5uBytNXPuxLjS4mvuUK6c4s",
  "key35": "B3SrA5NUoWsRsf8NVGrzeg1ZSAjNgZJFjTWorpEA5SLjfTSsG3BT5yPwnfx3xaeNW48V9TEdnLB5MiyWC6joWPc",
  "key36": "2Ze4K1FZgN2LopmFJGqmURxz9e4PdBuCrubWtt7bgBKowkf1AmtTYUbXYLwBmdtfzDV4ZeAitEgptGdkNaGXvkni",
  "key37": "3wvYV5mx4YfExq5yhQZzUhQ5Q3dbfYNoAYbGCNvhXb2wRWZHdepMPfdRjmkdSnNV9p9VmcBMwQBeMbqiZonZypSf"
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

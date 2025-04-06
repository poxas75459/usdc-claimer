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
    "i3fsQWbPqCbGat7meG21Cjcmd55PuNN7mu5hAii51ztoWQov4xAghrRt3RAQSfq51YcDpa2FozwZ9cxi4vQ8Pq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h3jR7Mw3uJ2G2T4utEzLHrZJFL6uXeRGpCbdma8Vn786bUUqPgzuiDDkvvzctJDk6FMNb5rYWaQCJYR6gjJxt1U",
  "key1": "HCczkSLCKSjWEwFKVGo5SJoR8qaFPP8eHSGJzjXZAViRLY3TVQ83VLeHKw3cuxXMekHJE2FC1wcRk4Qi54w51VN",
  "key2": "4csRfoGiKYnGyUoPYrZEUNLoMBWcZcNhmBNauJaseMC1HHDtR2w5kzSgjKA9iELHxupcdhJkwa4JB4wTmPfZfeVH",
  "key3": "3YxJQqzh5Q9HbEDiiWey4URiCzf469QLrNvHQfu88qonxW8E1ATX5Akavyf4ooFthP3iQ5fqL7rvpBNobSVt4dUK",
  "key4": "3nKp1zhJQBWMoTDnhudz3T2tLzRywin3MMCMHpE5oebH38RixejJB12Fg395k4hhkqMN6KU3HjC2Br6zRFbbWGgW",
  "key5": "5aEtmyEFviGTZA1XY4YMGPpA5YA4iM7NaKpyWqTevBFusNjLGoztJzY1ytGJd1JR9CPuotZmKGSWTgdPoBHsZuzG",
  "key6": "3uzesu1mC7CT49JSWSvv4iFqQACixRzh1ayiLfbmm3HK1Eb6KQCrsFmSAvEBmSzXiuTNxKYXT4fYiTL1rZR1CswH",
  "key7": "2SaXkJXK6qAXDfEHSmpWmapgHqJc9A7ktPmvwWgHfHB7sZAzDR7mytknnX2QsRGuxgL9RK6qHiLbzu6fjfWZH9aY",
  "key8": "27JmBqsJwZH1D2RafBhXUgnrE85wEo54a4C8SKY3CGu4jLwbM5bMqNKtd2U2iNLFHHKxAAz2BvYATHwfH4F536EG",
  "key9": "5feXrQxxRFVDxMPP6egt8eEVm5LYzscW7X6iY1r3KFbWCqtMsbtA8hADZvD1ahnc67hTf6eQ4GGT9U4ordfxSAtS",
  "key10": "257f8wC7JsH8gtCZg8JeV4WA4wBp47wEWejncWJS87FpStS99XYwj3h8QZZW3jJ2hV3v3UfVazdrvWDVgTy3Grnt",
  "key11": "2ZrSLXuuWAcfQaWaep66vD1AKRBnqxFBnmHKsw2aKL9nAyF1Rj6JVFf82o8s6vTdG4AzW4RmUbnkhKqcEgvYJiZE",
  "key12": "8ZwcJVo4fFYKizHrgdL6wqkcVPT4EFmf9Y7vSYM2xmfW2gNTmozrDpK4xK2gQqKanjk5nyJWVAEyfxod4AQjGZq",
  "key13": "faBhmgueJpXSs39q6yQSxNAFd2Wy9BFqhthL8a1gocqSNhuvandmj9xrxL8n4Wftd2QnyRLTTQ44MmH93oPiMGm",
  "key14": "5itEbZSrEmB6G6Ce83PPgq2u33WQe9MEBR52D5ozbrc3FBmBoVicFuQjdQ622uH7CbSz7rztxJUmidtVpUaQRLxt",
  "key15": "5pJBMwyAWiCNwvZmSky6UzkJHm3nnoAAhbGc2HifNC2W6UfBWbyGK3AFsPo6VihAbhFhbYjQRcz27qe6UPY1LXhQ",
  "key16": "49SyX2RkmUzyJHKZDSqmLa87ZWhYqrxLkZLfv99Hu4nqWBqKmUPHy2dwjJWLVu5itdNkDFpX6HkvD4PnZUFvApZz",
  "key17": "5u8v36MY4DELuRNhHmE4zDit1nMc3VXz7zrw2KN83dJ3eaBscWjkmuhp7WQ1M1ubNtTL97pCtNe4i8oYmpdHBa2Y",
  "key18": "4quY1d6gYcs5tKjw4ueZfkX5ccCq6CGNh2mKgaBFVXWvb3ZysK4QX8HLpdhcgKrVwqbV3dDk8BTchVip56usgzq6",
  "key19": "4D2AVd5uoNAjDpnL71HvrjfekyVNbs4PA1EZUv9q5nS6mToqEHE2PVk7P2zeVbxGAQraetoSbcpd4yv22SvmNBbM",
  "key20": "cXgLQ4sQ4Zvc7PCd3QCNRjRkALgd8eZMH6rMGZX6apUNyQhj35uUyxDYtaGQ2ZVDHVVhVKGAKSUprL4eFfN9QKr",
  "key21": "3w3n87t6tezHggzAWZRySc6kNS2PqbaNPxwBnA3jAmeQhWthXkXhZ1cc1Fk9JADytg44Dt8HUxBwFHoEcMhfoYEz",
  "key22": "4RdqzMwerfZoCRJGLk4ebmUXt5yMjQiyiEjFH1dVBbGhEu5ahNgRNEBeNkawEFvqB36zyWwJGs8P5Uqvx77N1P1V",
  "key23": "2gWd8Ph465eytp9JuMzBFv46HxwWmSR7tQ9YTMbNqjg8b4WnUsG585btdGb3PgzWnCjyetDZ8eTNzAociJZdStUm",
  "key24": "5RU5GgjPdjmLBY4SXpsf7L9FY1qANz5gxbtcgfmjFGvP8FtXunKritFjFsiCXUegvSG8gAUDNvM1jbzfrevo6Nhw",
  "key25": "icmhdzYw2npuMm2mmuXVhc5eeiwKLh7M319H5jXGDfYST3kXzZCirLPRcEL7EWPwALoUmYhnimDAARUQ2BrqP1D",
  "key26": "4yBcJd6PKJyksRewYCa9UdM8pCzV2YLbwNqfAHjHeZA9Fs9w6s1Wwt3cbJmEWaBUA13szp4d5He3zBN1teVo6BtF",
  "key27": "62aN1w4dikyRctJ1ugEkNixR92WFteao3K5zX1jL7Ea8UsQfYXqWxBKwFyy1spwdT9TdhqLhMeFiynqHnXKneVq3",
  "key28": "Fuht2xpRrg3ENKpXnv1A5CjAw3Z7u75QNWBQ3VzZBoMaFgcavbAB6APHsCcjTK4duftrgN9qPyCwSwnJa9kyC1W"
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

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
    "b9yAE1t5QD6N9i41YasxWGvWYSAqANs6XJeZyXGSg3oWgQUuQZX95KY4Q9wifejRu4MSmjdUfNJiEuGjEeCgYQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ufkyx5UZeDbz1Pb9UqvwXEK3C3Ua7otMpA2Vx8NcW2XyyqdveXw9Xdo8pppRZHQ9PAs7MLakX7CJxTfJYvCpqd6",
  "key1": "5k8ZVxQSkR76efUs1tQuasmxLs1XxZxZX2UvyRWobEnvzhLELTQfNBeFnnMLCmE8JSo6udqVNcmh5hAB1SkC6c8m",
  "key2": "4aJ7ihWMKyZ5ZTgZh5pQ5tKtfDhYHUgHPFevtfmvVaxUJeWLgcFzWgLQVwcgMW8cdQGtexb8NrZyGMAATGAo7oKx",
  "key3": "4SPLx9U3yaUrMTPUMX78CKN7ZnGpYH2puKyiddy5VV9ornxwNh3KHaLypZL7n3NbpThwH6zw18GBERXNABmDdbBj",
  "key4": "5Yqp2wGqVqNsouWm4EAAyGCsvWZRCWcPZg29WGCb2edSCxgMJDhedU4SH58WXwjh3259Nny3wBS9ZinucN9ToLr",
  "key5": "5mm9rhpuyFa367Mt7LQje3EbVSoXuuFANxk71zW69F6goBhHoKeBuzYfSvmjQRPGw8EWnq1T9Q83ErfkRqskVu4A",
  "key6": "5T8T7DSw83FyVuiKkYNKho9BagG4MXGitoB5UGWiQKXzZTH8AZpTXXr8zDyM7o9CJCJzhqUdEm1NEdHjxYAuekKb",
  "key7": "4rvPrHAtMCYwY5ZTwNkzWC17yif7dEUjmQrboCBKrp9HLwk6m5umDLgm3ZJxbdvgTU1EebAnC3Dv6W5ry5dvxwhd",
  "key8": "2KdKwJazSYsMB3Kf2DVorvYCBDeHBruu92vhsSp69iR6oXwxPtHg8rfQ4rqgqubHgreYThFG8k9vfobhWVffHDsr",
  "key9": "3HZRHQ4o1VyFS8sk8BHSYpZHFUvigdsSsm7NH7RVzTLztNwg17ZoX13yYTUnYvSBqZxdyPNAwThjVaYeq6gTYS71",
  "key10": "2Pj5rFCZX4XwtbBc27KVXQtCa1eLLycJkbeWLbi9LitWQPAx1bw5g1TASdFaaZdrvrSf2Cb9Jigt5sDjqWWBftZV",
  "key11": "4Hvv24enb4Ev2gNKpHZVvkJKxeQQbkbWUg437VPifzDcxo6LPLsn4mqaGshdR6bURnTHMRPd73fdiVchxNk87v1H",
  "key12": "3ro4U1pbMgyruSLVHhzR9CznpxLTwpaeFbTXUtHVVkzQxgeXSSYmujnvHKwtRNq98aDnUkJDfrjoCdKemABb23Po",
  "key13": "4GXL49ZdoyEqvYpLd9Kjca5JL87QXxdKjmHiJvvM2Gwvwuxfn61y5URNBC5vc5tmtwk4Rb7k3Vr4i3uopPVqTtJn",
  "key14": "3AtdxUq1v9ZLBQFzwdtm949tS5mefgHPYdGwgEsf45C9h7oVSkjsgWDdPa9zQ2pYwR8YE4Qg7EdUtkNJB6ZJ2tVa",
  "key15": "39irDzE7nAbyMBcbFadfxkdUK6JLYJ9TVT3kkUkwwKa5wmm7GUKdX71ExrwY3p2GZMcRbDC5afxVmV57mmTymTab",
  "key16": "3CnqNNFAPVZQRqnxHsc6Uybc5UdrNtZ5C9u938Un7ES9MWSpasuFmhBMGFcVyz6CmsTUhCnjahLAJEUB8k4W1yQ7",
  "key17": "NtdVXncthi4uur2GpAcHUDUJBi99ENyqHT2HEWp7cdtHFmCu1mdMWMQWnEJbNPaKmeA5yXTMt1UTpcqegi8ysuV",
  "key18": "qd99x85Wu2Pn9HcgcLf5qUAHqvNVk2s4uCcnzYt2X3F6uDEzKtNyeMJ8s37HvHeNUrHxR2r7U8BxdcLaQN7RCTs",
  "key19": "2BRH8t4AbN7ytX2j6yTcBWPxW4sGxjQPdVdSgvxnj1nx3zRwoRx6nNzhSF2xvUv6KsTJcNCTtpEF1TiXQK3gcKGK",
  "key20": "paTiZkB9EUTgroAzMjJ3D1Gtznu4CqoRbbQkSv8dZcMM3Q87nrfjT2jDnLcdbkCsGb6qBuwVyn6SXP3672aW44u",
  "key21": "2ZM5C5jKk63aRamNxTmMYYequcyRfD2BJtRikAJ1LCMWPU26nF3gMge6RjkLeRqsCqDFjuo3o6H5p4hxrJcCU5vW",
  "key22": "4NR7z8VGXvY4QMxdHzbbx24ErNEaNAaZQSrnvunnWFHdwbA6mi58ZD22dKuXSgchavUpFyArnwFiMM3d4toS7GLn",
  "key23": "56Ng1aV3dXd5ZM9rbJjzCUBzZgue192zZhnJi7erT5QSfMtKs6acvGoVtcmy79rEs1HoeNdBR9zY78u9UVLZfb5a",
  "key24": "4zHkXthBJpxVrWhxbgm8gtarVBxoXE624SvX5grZUvdSJ3NDUKbFKrGxmHxyS6r13zm7g8gXF3VbjEBZz6uDF4E1",
  "key25": "75HJ6sabdg1Pomnh59bJ1dtUUP53y3LHVqPCy5qnpxXwQa7tDvmhC7E6LfmJJqDtqwPBqF9M2RyjH8tE6iFpoDt",
  "key26": "6rvw6cRhyFnJZq81jLUBA5MPpxpMrZuDhTQuStM3UDtz1AT4bz6x84up4u776cqjQLC9p4VaZ8sxS7yfYTv3mZ9",
  "key27": "2jXB4BFZVfvWjHaE832HNnA5iQkkJV9cVTuiTM8g5eLrpxi2jzSJzr5GiUFnGn3U9EHgjTWNozLzeiVeVWCdWdBe",
  "key28": "5XkqRpiCF4dBySQMnTBvz3fxM1FzUYWw2Ko4B3xBs7TpdWAwip3QiKtxeYeNBjJhCaqmqy83FEwF3EBoR7eZ2nGQ",
  "key29": "3LxWAd4w2L2HjSVrrY8WYwcVoKJFfNL3sUcP6JLtZRvfVEacqSsQmmoeg8UaknQgzL9Xdr2Am8xuajj8dLeHrSKY",
  "key30": "3KChGHzLze6qCxxZNL9tAQyXxtbDao8PF174D1hhXSNP1dSoDbmQ2mXdHkh8JnRVL64yFxTzXUuN5UqTVxJ7mw5i"
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

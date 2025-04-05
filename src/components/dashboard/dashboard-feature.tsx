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
    "62P2BaK1zUaXCVQuxUWKwQyfiVH5u9M4MQ86iqaxfPQp3VSwxRA1iyoBc7hW9opPVADFf1iDpS7Mr4wzeXNjX3xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXYBSga5uu3CkawSmPggqCKUjep37pK6BbJV4drh3foYuLkR8W7rkKtTx4rLZtmQ5gvXGB5gTuTKNsgmhUueqNB",
  "key1": "5nEVu4R1vNFdteWnn97WNmpHxWEXaqbVr7GWkWvCQj6m35ZQEQD7F8cFG9iUfYbVXnPWdsb8UbD1hdbCVRTjszCV",
  "key2": "2pEjXcfM2ZxFaWYPKTVc6BBQjNJUR1Y6NErHCXjp7eMe5yyfxYqu33CSx8fXMkbGGh7Gctg7Jc6X5SpBLA7JB2hk",
  "key3": "imhjv9UEgC9eoPiCj26d8pRExF6Lq9dWb9mMAGTfJ2kmGqcrNLQiR3R3ed39g57yhkt1WRUtABhYsTpxHq1Wae7",
  "key4": "4m9cuZ3eV6EA8cBcxLSa3eJeFzvb4Y3maUE4dQMzUv6GALBJtu4kXBaLkDuouEsmix9c7pQzL8wYyFdxTjy8ohgQ",
  "key5": "2GfMw51Wx73hESKmdf7YkfdhTD4FfMvUv5fdBxNNDHDpuAP95f8Hz1jhrukFpzPirpGZsLWgDjKoLnNDMLDFo1E1",
  "key6": "4SySWHYFksKTrusCewpzdysCwzKfYWvbnbxjfuyuAdfDYkvTkWyUSDruDGtJG9tkKj2uVzJoxFZ9bQsRzAVuK21",
  "key7": "EdJdD5fzqxApLJUgH5vfxcnxTuW85SZpWAtcUxydzAwPhMpRA3UgAy7pvY9B6nmccYiAQkV6yzaAshUwS7WuT77",
  "key8": "579VzKsTptcAcvXndaShMNUkQxSmt8hWJcTXnQ2fFktyQHpXi9NDYRFxYzFjaXqbYcXnbzB419a4NngHHVCNAmNx",
  "key9": "3G5dmndHCktjG1Ns5pUFiJyZZznUceFCAqQZLX1oXD1LRpQEDXk5MmRujPepWxFu4EERrze4jhhaoHJjYzqFwXD1",
  "key10": "5oqdriVUbpn55TffWsV3rMwqdaDWRLLcgXhekAXFRrJG9FcyGpxGnwLdsn3ZQ9xo8vpcjSfr8soR6kHdEazvRQTp",
  "key11": "2LPPypMUo7dWUhWDiKu4p9iZgvnMeegiQtcf3iteifG4AzN3vDCKztnprmPtS7ypEPqSQtYxz7W1HaouWXbNUsK1",
  "key12": "5ZJHQjgL3c5tVenpTiFoVA1yiETXSFwf5w1gx1hSBnxnMJS1MJevf9r2aQM4jo7xn1bRBLDDU5YSczj2KbsAYnWy",
  "key13": "5jTjrcjuSAXiN4QtqfqpQG5rkaEWkHmZQPqW86mawLfQJb5bX5M3FfEyCy2ezCaDKCij7HwbFoBesBa3kftiDH2v",
  "key14": "4QyUdA3khxCHPPw1dCvD1cow9E9FPWrtT1J2w2gz2tijfqNRaknzV9sA1DxMtrNYz15PoFRg5WpS1aMWUH7UH3hQ",
  "key15": "28t1Q8y3rVTMBFEJcSL8uMn6uoiayRzNYHAfEM7kh55e1LBfaK6MtLV98TNx5TuTzjnCoFv4Wz8FLr3swCybs5QM",
  "key16": "2DtnrqaVeNPzbhUG2dk68YJHJDP18xxuFuzkkGZBoCSxbwJ7ovsppvLiQV2bshUYMP9GtFX3YmDWUxqTMicE4LXK",
  "key17": "2RBnAQFSXzvMRbqNKA5JgeixizUmSx1sH7nYmxr19LcikgTQWtrm6CH7v7cMRkeBcKX9AQzz5jmxoEonXQMUzTkZ",
  "key18": "3BCFnrGffz3QfmAa7TrBGPfg46D29pTizYQ2wwx5T1kb9YWw34JHc2kJ4vXMTXenLyMBi29H6XYnUZwGSZbzDbQN",
  "key19": "4es3YYmcGv8CPfgtr2EDVim9xNywgh7P3xqTfZjcoepTMMSp7jc8yGMUcwpgg4qFRmyXHhNWfe48RTS1n37x2RKC",
  "key20": "4kGJnAhYpBYdxicjE47uzH6VVkruxAwrU8ygbSWsPPDcSsz3fzXaUJENnMsm6q8GkPscwwMtzLZHoaEhWGqfdzxV",
  "key21": "2w2T9qwCrafFnh4een3UsmkeN6RC5JeT3FvKrLJAH1UsCmrLAc29n7RXpXsQnT9aJDwtpBvd1SJhg3uBNK6cNXVg",
  "key22": "4KrjYiUJbbCBqxJB5YaYuifv5RB5iGD2nsgzNWSnKrgvuxuonUhDXHCCv1a14HPnGx8EA1atNGTrRTcNb4UjicBa",
  "key23": "gpP5dNqn5v7twGis3GMEYHsSpBFuVqDMgmbXh8YSmtj98F3RNKPVPc71pqFCQSeVZ2LhFCftqxBHCb3cHo6QThZ",
  "key24": "hezVLvQ7YHhMjmXAvb64VmUghA5oYXbXtmYDNKsi3GNKqkTCyzt18iDGjUsQBYEZZEF4h3YCXq8o2qvj2P4AkzK",
  "key25": "4c2d3XsdmqgUTnZRFNhUZsA5nyowgZwu6htMoBneH59wUzBHR2o1x4k8zQHF17EwJnpduh9uNRywZ9qvyDEQGtQB",
  "key26": "5zyQFAThA7sg93AAVWGN9WLkBmyeDhzprmM2iyhhUvEcVbaVGNNkMura8egEpsxks5CcfRc7peXfWc5T3QucXkg1",
  "key27": "4vevKwmLyHTHNdqVjwkB9x1UArRSxf5haT4utpoXB5dfqtumTnhDXJK5wwr7pxb6v7UyhEirgoNfqm41KhMd3SSD",
  "key28": "4hnzykaZoWZZrp3J1E753KudjwsMLZSvYfhTc5wrScXWHQjhFvQVSjyfHT1tFQCt6XGRqVj3fnAuA9wukygLnkqd",
  "key29": "qeoBSJMbKMAB3f7theFoEyJXyUxepKqxQmEXZ9q3wAxGvAfnStfNd1vcgXRHrREYwJ4cQhz2XQrKAR22yb7h29w",
  "key30": "4KBVh4YZPHXmTcgKgRSHYRmeE7Agswcgo2qh4BtxDrNwkGK2fNDCu4TK6oRFZj6vLKBfp73GJDtBEfYLcoEDzBi9",
  "key31": "4Z94agytYFjDZt7YMiwEBWrVo3jv1p45tsW1wQqd1mNGe4Z98wa6UDkCC6GZpBHMgYC3LL1FnBK8oTMpkTzV25tp",
  "key32": "64u57N538YTqZQ38cbDWbYTSwPJgwxHBz2X5rgyZ9AE5h9AwHMLsizbWquLG82WtXJt3ta1Nu49kbPqhCzYuJG1L"
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

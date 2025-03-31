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
    "5VFptiFdaai81fAA4DUPorLVGG1F97wevzpKa4xy7sC34UFuJwrFCCXz3oSBdB4EEHGKJeaVvpoj7sZ4iHhuWe51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqRUzuC3GcpenBJbxGSx8Etyco8m9S4bFJaWGGZdnezsn7CVogzVX2svRUZGGobz81hUFQCDsqbxUq7Lur62WVt",
  "key1": "45iBw3jM2tYKV7uS5bnkTurvD1AKeJCPXwZ5RruuqEE7WfhgYzeFWCfobaBoCmtmqsFn96iBhTzXN6PyrcFZPEHv",
  "key2": "2EWbjeBmVC1ofrQV4VKAoShUVzSwWsuEHdTPAqZ1G146GeqfsiTUtqsQQHKo5MRZuAnaZ3AWHftack8qGD9egKSo",
  "key3": "2UPTe8yWrQstHQnrfVbQPU2af3pSwP3MXbh8gpYajThBcEYcdrkpDQn7mP5DQcbaCCer2AmezUuToxAjzatbd2yN",
  "key4": "jvJyrXR1qN2ByhbpAPaaJSPuCGRsB1EmBzEFLw3NKGUC4b4fK3TY4piyd8LZmeUkKJ7dHbHvgxMboikf4S5NfYg",
  "key5": "CJTqDTk4vowjr44bCKq4SRgumbMExdqjx6kjrffgvFgYsP2otSz1KzokieijtKukxGqHAWHjSJinAF5gxANLxzk",
  "key6": "2tvdK5w4mFL5vUswzPqNfv2XwsC2gYUQNHdS6kCwnPknkq6PG5qGfQwXftaDEirHnadfkTQryBUQYfCc1b8KHi9e",
  "key7": "2YDQMvuiSD7X3Vb9iMWNVXdxPdnahiKJiAPAXon9dNtVkJLxrHQ1SgyRG8EFPA7PP4QH7MhRAfFzedp2WKJfjTWS",
  "key8": "5do9Tpaq18uhXncodP1ywCnrKzncVEJZ8qtYzRPhPB9CL3s3gQrG4LMseUgjgFiUBsA8z2PhVQH1M5UxBVXsYTkt",
  "key9": "5b33BeqMAKXHiSuVwKLFVsFTCTK7dt73aXuoUCk7aTtKX7d651QJG8e7WMTvqQT6sF6wvutMRXbnWcPFiXskpGzT",
  "key10": "64n89MSmrfpD7rwrPv5V7xDxZT9jgPSVXzR4aNb9a3NZXXzqKJCstVi1yjxSeZwHDUj9D3oJ5rhMmhLNcb5FvhEP",
  "key11": "48XvPfE98GSpM6WohBQo26HCqVdr3KthKudF56KB78P8EYTejihRJsT4ezbSEGXmnW64vaDpANDTv45fLVvH8LEh",
  "key12": "3KNdyUfSWULJLVZ3ijTY9eHgVFWd2ZJhwzjxCi7z1kWDekSJoBANW1Mg4YzeFaUVWJm1NoEKn6Wr1ygmo6Py1dQw",
  "key13": "5AVsWfvR9CRUEvkz4FTMdXstz9QKDSUSsV73H8sh2qgFKV6vA2tev33Vgv6WfRvWaVHyzNyJ8CH92Bzumvkngk3M",
  "key14": "36qhCCSB8boa4DrVa5LMqp9XYEqTqN8dDEZgehEcJU82QcYakyyMsFGRcNNrmQPbnFCoyibeXZoEMXiFAtCUk7Y9",
  "key15": "2CZUrTzUhTaHGnXKCCgSY2Hhp93Nysp4RL9bMWStesutZCgmNRoJykLNdmApcPUcW1M9tn8FTPNNaLXxMX9M1ykv",
  "key16": "26dd54CHcjVWSWwrxMY7VnkUBXq8ZcyE86kgsYuCTLxAfQwgr2QCkgWsNcw3xmuMMrSEjYtgtZ8K3HhFZqdMGrxq",
  "key17": "43BG4F6hjfd7tVdWKHkSn6Nbpdbyi11jdu5672oMuMADiVck5Emkk8eNQVKei6eJmHTyu19iG54AbKfYu8rzZYQP",
  "key18": "66cZ9GSwmwWgCGzJ4FCvporu9yUTzQWCdbDhcL5oJtePMBL829Dne39dWUzn79WxVq7zk9eHrY18pXRvRSo33xmJ",
  "key19": "2eevuWR5ESBfV4FCDz8rvp9oEWr3y5EJ3GDgt9dDgZkRtxYrD3p1bQRT8WJrVxhntKZyU6d1za2Ca3tBBv1WMpXD",
  "key20": "D2Tva8SY2PcBrM7xiDZ4AqhY6mh4Scv7sezqAuw7t3smNZbijecS2Gvykui4ey5nzG3v48EPiB72d3hPjZ6Za4H",
  "key21": "3e3caaPTUeaiTULRUnXFWT6h1w3wWJxoqN3NmyfAgozW2MoxEYwJuassa1mfPAsEoQtP5JmNUX9415mVFe9sVVGP",
  "key22": "4ydKF16jo3jYTN2qd7UTi56G9nLNXWQ9Z2Hqmnewu6qRyZVsgJB1hYRMncj8XW3ApFjx64hVqHAYgfqWFKXsV9LE",
  "key23": "3zpybnZLqrd8LfD7npDLywwLZbAKVJACi9JmK6TiW84dMhbgFR7QJNYHN3oqanX9zRoq97Fyz5unmgx9rgWiFvhK",
  "key24": "5MDLiGArXKbJn1QbefUYJRDzwaepVnmqV4Fz9YXuTzus3i5WwecDEzCGHeZMEDxurANB1DMQx11LvMchetx8AGJ",
  "key25": "5mYZYwVQc8Mdq5yvSiufRNfJocji1TYQssrf8n3LcCEC8zyG5ZgjEy3dgH4vLfL1xYL6UJD7n3EKwcQyj2Yh4AHV",
  "key26": "3YN3R4NnU4M4Sr3rBa6dczfU2BjsGfG2m4jC7qGteVbmFEn25HWnfvVC98vsdXF4M9c2hqyaj3ULYqd3eYiAvE2H",
  "key27": "3V99UCZesMg3dip89V1MLMKxTCQYLwVj2tCad5SFN1nQyyDjahuWxeQnkifdSyqNtuCrhgnyHFiaFj4V4v1eL2Hv",
  "key28": "AWvKENPhqRyMYbJAQJnKq9RqvKR7ngga9THBriqqCZ8ReX4Fi6hqqg5Fb38jvRkzRwrXvew4VUcUWAKCoDjHUDy",
  "key29": "2517swxfekaNUzEWyQDsbNqtKY9LZpfWaL1jCE8W3wkrzQFSb6U6vynrRDX11FdAeftbqwBhwt8gzkeZWo3YxFgt",
  "key30": "4VLkqfBUvp9djVAnHPysJp5hbpMRNoo8TGK22QGE7yX2Uyp9Wium9p5cnpC5Km5MxgiygpgnjJAvyo6EYJeZvnXa",
  "key31": "3beYE5F7yxP4eRYzmTooDq8FZEcdh6XLggKCZtY4J74a6qKPoj1NZFPXStWRXigtxgN9hyniHka6Fdr7CmCC9Tjb",
  "key32": "3WwJkk2sqpiF5HtpRDsxNSUYp1T2dadQTyEjh17cMgffBUw4m7PUQNiWxu7yxJFzKUn6QuNsxCEq8kkrqz4nhjzm",
  "key33": "2UQZQWDkho7cZagTGU5BBj2dEBW9oSYrDCk2ru4Li9NCx8Vcan3cGCsrJAVGar1gBAKPyHrEXmsfsffjwLrAWpbh",
  "key34": "TFHjAUwYdantMiioF9JKNs5GRADEQhz7igwyvt8JdEuU8B8SiwwhnAYYenrNeti2W6kBCqr3Z4W6rFsHhQqUu5v",
  "key35": "HU6jy9c9bS12ahNk15b39wpjxZdSAazRsY2tjwXyGE7xumSDoeYouS7NEjXBadTETD8pmmS5Z1fzQZAh5Q3Dxad"
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

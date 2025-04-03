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
    "19BnUUtJTzKHaueffCZh72246uV319eXVGa7ojun7Kjh55o4tL2YU5j9kmm9ovms4q2LMnUANurUHdLv9oV83Np"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HE6DZsCGVLjMb3kfkpbSVwBdjuCACd7S3VU9j9Z1JWpjDRWFpeVSLAJUeyspWDrFVqGL8LnaXufN5gQEtgupZss",
  "key1": "3f9XG5UkCC7X7Ky25n3DcxXDwU8Cuevx97TWcEBxY2VMe1Hwbk59S8crGe88upreMcbq8S4fqP4Eh2bhEn6QGMy8",
  "key2": "2tjS27CtDP4ga3xuvyP96StNZHeuNEF1heivPXiJhmyLvSnGyCKQGGobYnc8Vt2tU7qY3wTi89KLzCKH6offUogi",
  "key3": "57KesapAQSQKCAT7zrgwPsggZmNd1u4zTcs8f5yC7gXq91E4tTAEmDh9aSX2FjVmC8xWg7ThAkXrh9YZV5H1tURf",
  "key4": "37m3iWoFdeYcF9PsbQaBPMaugjAsruEC4Xdzb9VX7sS5Dg2v7J6EAzNTspaf6fhyGwNoDd7mceyXQAZmvnKpDEie",
  "key5": "4MPD2mQ5fzCMPhfyDhN12k4YBRLC1yWzEWqrqv6d6zLrbrrdxWebZagYhtxuB3aApANv7x65gr7LJMFvavmhv7fH",
  "key6": "5CbtLdDywtkhHLo4mNqtrNwPMDrXi4bFPqKKW2HfaFdnGtifesjULpBQ8SihPHER3gUWyerKEojR3Zqbr8yu3qtz",
  "key7": "63ebUVmHtwzytkddyfBkhcLHBwbtVjRs1EVWu4BQT8CnNs1E7iQ6h9F7L2kL5oj4kDrpBzZzLFrfCSHshYyoCVCN",
  "key8": "5QzgT3JnmgK1EjuzwwKcLqh2MatsACZLX1kG9kSWY7AoY65Hjvttang8MJtDt1aHdaYwPAKKzJn4ZwseH2SwRXFu",
  "key9": "4CQt1NRa7tLEdyEgzBVMhMPgXwknqzzqXSVsSyBC1RTmxu3EMnpFAdjnd4RxYBUji81RcFMQ68tkyo6LhzNvAuUr",
  "key10": "4W63QU5DB1biSMcNXCYMUKkXqVWmboYrCerYv4U3xLpJHSjhhZC91y5ZJQ3sL73Y2DcrWHin4QogcT4wGWLxN94j",
  "key11": "5XWrHpak1uPgs6qkJYMxqH4JUWSYQ6J86bdtKXiSPa7aNouktbZzusxoACr7bnt2wvedQLK56oPecjDXQmuDMiFi",
  "key12": "4rUwPGr2dsJsTigZVMy6rkUXgtHzFDiGS7gNTw7gT649JmZ9mgj8frgn85pk7gPyawh3VFMdCvHjqv2pNdvMhqgN",
  "key13": "5JwHfULDiY8fedzyh9oH5UXQ7Tx1F3Bjtug5NRpX4qKGfitqFwJHiSVuzzo56XMsDxd4tZzKfFp6upR4NREqjDXe",
  "key14": "2SdBZdgchYeGEUGPeiNxyorx2AvyqXE1KVYeyEp2Vqnm6XHnmxL38vh3tb5b9csQWqmpFU4RRE8pLGdnfbWeXqJz",
  "key15": "35wYyvvfZPUf79JH49vXkitm7gdgBZhYqTrMwspHfMznrbte84xidDvmebM1NJF7vk6dBKQRgXvA9mHqPkjxjXEs",
  "key16": "5bjLhLWDd7qSdV6syww19eLyx9aR2h6LuCEVtx1KnsnGGWQ6HgJeTpEfUWhoDHXQquTur1DmsLCsRGc1BQAwwUK8",
  "key17": "4XWYLq2A5ne3dYK4GfQwJeYsbWKQr8DaJsXMJS9N9ukaySfUbZs7ge6mUUGgiLRMdEWnJTqp8RRe5WKDBu4jAvUU",
  "key18": "kmiQJnqAME8t5kK5LsX6Vg5BWbvQvvRzFYk7vJq8xWeSA4VNSx2ew7RhiWmLVmqAgXptnaQyGT7cFHxTraHfSCd",
  "key19": "3NXFBmuAYWp9x7e9c7dw4XKrVmSpoEYYzPtv4FLF3hf1x255Z4Q1TiHd5m1rLrUhYkiSoBEhbpkoDwYHJLUXiNHS",
  "key20": "2hq9VX1xHCKYWCnbNyesP4VRNQCs8D4z7y5GXZ6WJS8Y9yeKiWYEixfeKCWv4Ki9ZJF7qb9ZHM8YzWTmfBbEVVbo",
  "key21": "2UrySzxzziKp58Uwma9xdG68D84yHCKgJB1jWDa1Pah7LkCtMPvMUMaURGLkYs2EKyu1ZNe6Z3cBE7HRvFDZJojf",
  "key22": "5f5dkJKfW2G7JgJPvZ5NK2AUzULiwCdUNWZX4dDyYWxUbg2HQqf6vNFDyVaT5Z9YShp5hxUKpyMFCAJrWxixXs98",
  "key23": "3JCJUyBCRf8h4yd6QiiAEAbDgix8ATurFixHsHVPFrJK9KuuBBAQwtpuxGdAjsbVeoSdaXBkNSLFLUahDMPJd72x",
  "key24": "3CR2876FtVmAzac522vkwJvPbuFhpiXa2cmL1FxcZFUU9ivCgbeRuAM3VJ1YEZUuJuunD2gH4XAyPpnHFeYaTpPQ",
  "key25": "CLgUgjEWrKLHUKsQfDA2cd7FGkkwL2qvYtSxw7DCY5gsTSYrCaLR4M9wQiagWZHooQjAg6BbfnkciMZcjJ2S7ee",
  "key26": "3CZKXS1URGbrmsMHFiK13wp49Jzb7vnJhBnvapquhutKyKDiLcb924YVJpNiqnANpTFTqo8F7U59wYTcKgtSXPZE",
  "key27": "25hF4JS55KWeUuWbE3zgNN4RxziP1kgLWfdbsdDzj7L5HXH4Rc3zpqW6AhHBvKpecdJFuVFfoK1QKYaUNA5DdwaH",
  "key28": "bGuCscjxqGKz77hi3SqXG4zrHt8wQ3ivWTzzfBzr8pLPcJLS5gZVxgbRUdQubSKrGDNwPji4LNNN3iFmLT9NswP",
  "key29": "2N78atoyHBfT5cwUKPMY65DEgMADYr8tuvA7mmvNMGCtWjs3UT3xCHRbvxyN4S9JGxFsHGayhbm4bAa5SUs6tL7E",
  "key30": "fpuy9LYXAjHqxV37eKNvmMYnoj8h1f9gbAMsFaGgbVmbGib7Q5CpF9WqPkDRSVSKdZiW79SV6uvaHVm5EBkHf2r",
  "key31": "3wpm62wLFQfQetA9jiPSqPSD2ugisNARchNp5oV7qZ6RNu6crUKXT3cdySS23DBmZD8CrykNqLb32iEEJ8rth9Ru",
  "key32": "3TiYSKdQisgv6MWccn6evXFGRWHSyLtyE5uQ5HpJuHmP7mJDUaH37hYcipN7J8NTbEzymKthQv5ntZt6eRTTPhp7",
  "key33": "4YKr9Lid8S14XJiqnFxYyJWzYfKkpz7g3zjp2JhTopQR2Lj4nibCqTbHuzMv4SuCkMQJW2NuZtFYonXZXJWonVkS",
  "key34": "54kRX6Si8QCSr5iR5eYYharSyDpLgeYohK9sVDwJv4VLCb96EPNXRksdnXE1pa15x8dWirqt8XB2i6RJuDf8PTqZ",
  "key35": "4ATZaUZgR24RdE7zcDmWDeZL7gFqb6ceUoc9JmP5dceACxfLcwnviiWoyqYRc2aQmwPJm6w9Pf23SxzGz8FsAWz2",
  "key36": "4vj9HRafSBMC9E7mL5JdtAoZBa9gitgUDLaMuLqjvU35qLJubuC7t2Us8Y9uDEKKQWNYuCoTU8TeRDJqbJHe1iV9"
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

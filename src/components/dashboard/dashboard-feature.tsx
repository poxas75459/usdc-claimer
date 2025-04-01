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
    "4ZTKo4Wq6her2zCnNw6YEKGyJdeFtP18KFLpuxCRKEdR1TZevfuHXPrTRr7bpBCxgRTezUWBVc9cFm5517NvnPiX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gX17V5FmF7NmiMJft5T11jyjox8H3sFjypVEYEHbXPhFpzz2panAtP9JegYd7xNrXpE6Xbr2z2oGEeUrKDBGwjf",
  "key1": "sbLiA8h3LfU5fHvaSkKXLXNik69seYDgg5iGgPMvPUyD2BQoZaRL7JupdiNeeWjV4MPugQmLumxGm2hwpV8AKdv",
  "key2": "2HS3Xt4NKAaao3LvwnsRy8ZsVkFRgMgWfSg8kqrGyYGqLum1sv293PbrVpv4mgjPNc4w41QwkgBkM5pSjeqEQmD8",
  "key3": "4e5Dipkqyy8mz2P9qC9CmkUiChf1rnC2jgkcmBc1xTwzoMz2VhrrDEPCzqzYz1Wf9UGeZkJ8JoLtNYsLjpddc52m",
  "key4": "MYJ73fzPZv6zDFUYxvUxUf8xtjcLX62SFrH6uwL5aWiFE5cXadvV2Xj4j7FgGJr14WJoBWuy4MbazFb8ByZLrsf",
  "key5": "5wC1Q73DjNYB6Mwf9PG4Gpuqdjeufa8XdntYMF7sFWhkdYMm8P8F9apaMvddWhecYARWs9TP84mvWRBFPKVXryMt",
  "key6": "51Npp4ECNcsE6V6NLmxWZAgPtd8zR2TwWMRcZxdudjYX3ZRcU9txTp5yZ2iNxKxn6rt2Yo2vU16rJgBR8Cecajdg",
  "key7": "2rdSPCu96ST4N2Dpf1ixLUoKxfcuAjdbwtcmfTNanRpn9XMcuUHAEqKivPHyMWVKP6HZMMwZqSBm1VVDkkqaQTct",
  "key8": "3NQafiUG7nywGyNJwVsMftweUwbCsKEgwCch3vpTph3EeJG5JtDncChkAq7oP6jFCEK4LBsaQHGPAsVtuPCQLoxy",
  "key9": "4Y3F2v2D9YHBzDRyrSBh14Bja1yqYGFUGVbJGtS9vH36PLfuJJWRTzr35rLfzfzaNdf8rh8mD5j1GbgdRj7usJr6",
  "key10": "3jFqPD9v9NH8ekorMNMBrmUZ1FFtgjK4KYuARFo1D4gUjsTUrXHdrNg9RX13ae4b8eJWCTqroxGw6MEaA1LGqXmF",
  "key11": "5SzCtLuPk4zgYnmd7rUYHNMv1NtgDt8c5AvBcT64eMn5PZZ1snv8zw2hHAq8ndjZ5ZWUDXCERrpZaVKWSA1EH8i8",
  "key12": "3xmc7rq6yYRKtKCXQe515WAqXUQoQZcy695aWDvQJRKfTUd8JouEJXVf3wCtXBqS6fU9utytDfGK4a3J1ebnLyfB",
  "key13": "3QEzMSfuQN8myH5wyLXcyAecHYo3Bi2XT6nbByJxWdnHKcwaoXqxwmVSkknNFbnpae1EGg54e9cMJMT22nrh498G",
  "key14": "2wSumsMfYWkwWGSAyaeyXYmVPEdsVFHZxSmCvx41piY6LxdPag6JNwnU7mGoN7LhsGi8oRepgoVVyY8q1adwuVCL",
  "key15": "67pRvizcs3rrdmZviTJrUaoxpek37pJmCHCTDfCA7DNuwzkzDA8K4LvYa6cbRK5CAAcF4K7YkxRCcXR6sb6q7iUW",
  "key16": "31Ak7BCn11AotQPTQenEi8osFCe9JKE5NxDNAgyS1q74wcmp5y6bivrZSiAUfS1Ha19vsbbkd6265K4fg9JuzXb",
  "key17": "4KBm9riVqMbiCpdhi5N1xDLND5rJoHjJw54JABTASGDeTiQBzzqoKboMtGBGBvvwuDAdVYyKhBr8fssQEsvFBaQe",
  "key18": "5QXUHzsNSNsv18KKnDVJ3VqZZU1Twn99KyD36QLzTA5hXzkwCt2EDfkBLToGb2erjkvS4qhQRnzdETzKFg5pVqvz",
  "key19": "5izsCK7sCDFHG5PQqm3gK94WZ6Z3Tmb44EvwQHRsQNSsvL4CRRNvcomySVSDVTbZxBjPTEVyZ4xxJtDtFwjU5ZAy",
  "key20": "39UoW52DZKadsNJGknZt5rfuka9xaidxKy2rWz5DTPN76RfgkBcYo5oEBnfJ8a7Z5vTBCfRiSEXyYzubyq8CGEPg",
  "key21": "5kJCy4hTMpapqTLFifhzb3MKubVGKhRFvJ9EnvPcVimHRLFE1WUzHMtfwKWCD89hu64J2EpfvhifsxpY5aPQaykE",
  "key22": "RJywWd1Xkanew2VCxrDmXMg7VEyqCGc7ZKoLTXXzdqCdvz4rgUeFn4Vip4iYc7ZDciTDhEjAsK2PK8xorACHffL",
  "key23": "2Gnv2QDpbFcKzXNZ16ksm2xKXx2EEzeBH43UhvaPBuxZP8f61LyZUQzf63jzWUcNrfFFxMxk1p5uYZskybxMhYXz",
  "key24": "3cLhVj8YmtPKcKLRSxywP3WNptq61eV8HyBi5GffiF7UKrNW74LynKcWkA6KpoRoQ71CJBTtKmuW5BjMMoZR5ShY",
  "key25": "2Kn5G1Pe8egw7cQznAyCGWxNicidjKzqNwt9ikmAMEsWWgnZQEvn8h71R7XEFsi9qWNNn9ZrdqAr1s76yJkX5me8",
  "key26": "5oF3jhs4mB9CPxyVk3HR6fkahZnmQtwFbfWH9br7SmW4B6Gzq3C8Z2pFeeFkNrE8huvqqRFbxFLaQhBEcDRoZ9fm",
  "key27": "3UmophdNWVKgFApbXseSixTVKt6CSbGPuCBwbeRwU4QSagEUr526a5uyjB8YbDLsq9EqnmF6RVB6ckxjJ513fc92",
  "key28": "3LWdkjhK1fDwXSzEwBFC8FSgEagLGhd2awzYrn8hAMUHBvTN5wVXZKEEkrkTxUakUdg4Rb6v1uydnzFo8jT7Y5VW",
  "key29": "61Dxf6LFSP3W2prpPeZ68ckLzSYuukcjMzCDqoBjPDrpYNaFUoGgQMmkLbBUL6pG2TaUoWqfv2kWsUSqT9rS8Leh",
  "key30": "2GGEzraZ5edVZrJQUFYZBaMyNLXr9FnACuAt6ZMJh5rB187HJGLpv9Ufycv6AJLqSVTqpjD9KJAY2aFcqDyJU1Jf",
  "key31": "2XVvX1AvCRrGnLUSqhtLF5B6QL2rQaeNny3ghNJt4qwapE2ippqz2A7zdTog3ZoJwnr88ZUALndFa1cQrPMhsPth",
  "key32": "1j6FZTASZ4GVxc7LEc8XfSQgAPgoK7Mi5QdbJUwGBWcaAQo8QtTHRJU49t78Rp1Z3PDjXN8BN1J5JdQWi2maCPV",
  "key33": "ovri9qJ2r9n7q9GimShzfpjNT33kXgbnt3RqEhKjBNWk1ywDgYqN1YfEA6dqTbuYVV9BhvVZJU4fkJssk6W8dbf",
  "key34": "gdCmQzRXQpcoRfXKeKFkh1CyU839xC4891hRrZoy5RFnBmmgdTXFvXFpQP69Q4G6acFBg2Rd8e68ZZ3VntbjGSY",
  "key35": "2WzeaMAmAoP4GZMxd3zngJUMatwt1LHdyv6fii1xWYDrB4VGj6Wgb5Xeqf3jsgs4upxqHr2XHr6dCFGKCejTpmYk",
  "key36": "2zTnPHvftGZ9nsXDBshNtC12JgFnwZH19aaRKCTF475eChm2JP4rW4cMYhfAE7hqm9e1Ud4nUF9KLAFyJQwRTNoq",
  "key37": "2ZdLHFBSi5ECLa9VUhUQhF4YoMDA7hyE2CV8goVwtS2g5g1XsoT1s2mYeqKK8J4zwfeby18PQVLNKBPq21xn98h1",
  "key38": "o4FKs5RZf4jBeTxPUTidnAfejAB31ahkroMu8H9noQAoni72F4pxFwVaHkEUzC8W4gL39WxjpwzT8Z2E13euRvm",
  "key39": "2Dm9d62RZ8TfbVmZxyxuxhVJ7hLLJ7XDNKJLTebMBZtb9ZUXtcFE7AuRu23oEhTVakMU39xDeTia7yJs6Gp1DbU7",
  "key40": "2x6ehn5LNT39Wq4oA43KskWkeND5VQWyGryfpvkqMm5rLbCBsz4aHguc2B8mdyzCrcqXYiuTEtDAeMBoG7ktRQEt"
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

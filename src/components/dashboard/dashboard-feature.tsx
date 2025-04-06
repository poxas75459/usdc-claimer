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
    "5yphV6h3noCEYr6bTfS6LBxDimoLY3b5SP5qkR5ftTCSuMnVsMHKwJsLqavwRgzsyJwF53NpKU9jkvYgVn86Tdhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RfgLbK6YmAqNwDYkBYg6AHqpHSwE5t1S3eo7rjvhSSejSXa5aBU7445tW3Kx6FYF1oMpznWzd3k6aDDgrPxWmxr",
  "key1": "2GtDMDva3NUGzCGtvbEVZdSg5fH3UmTqSxh3ea1Ltx5K6Qbs1Za1BhHr56Cuo2N2LVMdRt3pC1th9GJYMyFJtBWE",
  "key2": "5bQuUxpDzvXSv4WERnUAQAijVhECEdmAKwZVRohMAJQqpvXqdVwjs926es9xcfWAyGZ1ECh45Vhi74RjUxgF8KSf",
  "key3": "5xdnFBf8QSPji6KMRtPa4ZQn5h9mHujupSmN4Hw5BRCku4gGVa42Ty73auN3D89RCsU2KTVnKc1rCkufzQMrYT9e",
  "key4": "TCTBcCSoMJwz2Z194CmAtbP2JneHjKd3Srk4vVYiybb9Yp6syyUSsbfDTLBfMU1cqeN5jgMdGuYJDNoKrgDj3Q8",
  "key5": "33HvnmAyMVQcthmnkqpM3uQuHZoexCupjob4HSuH98E93s2zQgatdKQBJo8A9FKq4jmf8N8VfSscY5Nu5zNVcCom",
  "key6": "36yXDCsNPV4Xa6iDDCik896eLsnB8i6vwRAf1bCVK934NGgYuNzMkzoFqo2ZxNrvmdkad6ddGfXd5mbvdsyhD2Jy",
  "key7": "Rr3nb32N57NwkUPb7ozCvfWhjpaW37ULuBFYnxHtezRJunC4LNMmpgWauWZUAfuooHgyiFntGdYvTzeDoZApKSM",
  "key8": "5ZFgbbaVfrLBswMfawNxVSzR9crx9oGjeGJ6JxHFvQkP6agW2hgjd4Db82TFovuriR183zxGjBjrYMRr8NdUoxZS",
  "key9": "2Y8y5f8dvYg7dggScL8NNc52XLCv3kdzGDsVcdZQfUZFPwPxpLNee9HuZ1Y9c3dQ1ZikApPW1Px24todfukDy7Rm",
  "key10": "4P69wj5jcx5rybLPU3moYQEqhs8s3idjCJo9Lxw9LYtkXmErRGMWmHoLFy1xU5bgx8Cosf7duiPy4VzYV9ZBVxeM",
  "key11": "2PVWzuyNE9aWpYwGPTvAj7fUZPioYoUfzBbs37T4g87ascQU4rWvkF5VDu9Eabjam3G4a4N2fjADWRvd9jW46UBM",
  "key12": "3p48ZqRNiAUrKFc5WPrVJUHfjQga78SYhJQVLgk2WLHxDoUVzxjUFC3HuNj93kuTafMXoDFETZaXoNp7zJCysPYN",
  "key13": "2oiRPRnB6ptvhVGGMvG29kCYG5vhsE9xtZqX84YgJnwseNvdiKfAYaGVnJvCFL2fak3GgT3UTbUkdqpcjpSN2gii",
  "key14": "V8MKJuaKDKAfuaKDv4Yvpqo44unYtGkiHnsoFFgw1FQwgzEbQUFfdULrs9biGkYopt79E9audHbRALaoDjz32fi",
  "key15": "2PUyfPL9dGJ6cxx1zstYGxKR3kLUSNFsLFw86ErGia2kGRWfZWsPvT5zN1XLYB5FGjXikMe2C6WAcJDw4ay7sL9V",
  "key16": "4JyUyDx16DTsWRmYMU5CUwVxF7RaQzfF6zqNeEnR9qEQJckWFFJ29e8NvrLV1tP55vYz1iSPn1jf6v3PnnQQPcET",
  "key17": "2wcLFBBgnJrsh6RX275yoRM4J7tCCKsfpupqKF5Mwjjv1ed1sdHdGFMiw7V4w7iQsCcGAUPLqj381PzQ2qGw9F4R",
  "key18": "4JSCuQyrnBeHfCStDrBepwowro5uqUQPZArsMYsgQj2uMCYMDs9PFbqAuoSzEvBrKx3y1WohJwSR5Y3x79o9Lyg8",
  "key19": "5xPt87P21AxEy1MiYMP2mUnoKBgnPPAFJ7k2DdZYbE6M6baTiVaeCDRL2sQsBpaReumJSWcagjhFfiVkzrHcthcL",
  "key20": "3kkRvbxfP9pmuf6TPNvb4qGgwT1fmVPmTRqtumDAU38y5v9nXbG4zK1nyTLpmTLEpMsUvFVAxXHCrjasDbR1Y7dr",
  "key21": "4U63jVMdMkoMwPKJQRpcwS4phRFGzxbta39nim4BaaQ95waek4rXxqagRskGTnEQqrHLMPVxMCP2YvfrhQ2QCryP",
  "key22": "SMca77NzXFfXVHddRpCjBDagZu5vZKKg4M6GiDc1rViCTR8FMKe19CQqEXp6KUgmCEbbxRkRsSXpUq6Q2XrRcyk",
  "key23": "628Jjo4BtQKAZNkPMrzwTcWdmCSPvpzbH1Qm43SHDbNoQGayDTbk19trYeJdGyW6zTYe2P8uT73RYmPUgXrrFPAz",
  "key24": "3nxdSK2jAoZiM7L6iRi4Emh4ubP6MuCgff3aqwrpkhFNJW81ARVzUwY1cSpHfqSb6mydW4ovvdUrM4xCEbzditdw",
  "key25": "4CfKip78zuT3nHCYXtnZZSh3FdwebfHfnNzTzJ6PXRtYyehWXuu38CP8J9zdupbnzfU89rNKsaQAc9WBaLx4vxFr",
  "key26": "5g5hGWaZ4pGDu3vUozbNChqUPnrpy6EsS22riotS9CWamwiKeRotGGD5PciHe4NN1kXV5g8NLWE4iK6MhK2hbM1J",
  "key27": "4cKJHsbVkbGXNB4wGdfwppLv2YYQFFanZuUdmhBnqttAqJaXRRekiqTTPnv5XNJRMQLepcvmMc8YT61h6E2PfhQT",
  "key28": "18xPAUFHzgxD2FruiX5kdR9Fhmtab3gMTAnS4g7DozgcFWhSJszEiQKXzsRUVwMegzbekYVhezdjEmQmAjuPcoo",
  "key29": "4KADFWapPifsd6DCW8CXZijNWv5eBjDLcwdEj4c6VhdQW5hjWHLmP3XjkTTeVjmKk8cZEtNK72r9Cb5NEdE7RXLG",
  "key30": "y4bgKyap7aoFoc1LGUw7Wfof6b42UTMF8vFrLgApfr1J1JstMSifhwrnKpt8UXwBJGjKtT5uXdWDANU1d9Am7vh",
  "key31": "2AzTcGu4p2DHQvYvmZgSkKtXPhsh6uZq9kZav6yUwdK8Umd2nocuBaVrWDHPJzXLnRrsUazZgoCReC7QNF28z1Tu",
  "key32": "4oaH9QnpSVVMY7xb8zPjLBgkZxJZh1tD8kLUc2CAm4j4k6RRZjqvGEno39EPHQqJsviNrQUw6n1k5TCgUwmWYEHk",
  "key33": "4CwNrYYwU1Mg3atY6favTULpckgpe99EmKyqeYYWZoEje23TvnWRaUbC1CcevnfSRQA5ZhYK8nL5aGeTt9iGTaVe",
  "key34": "3ycMB7yKKqY8db9au6qfFMfaWKQqPgSewdxPb3UckJyKXoDB8NZESVDGGY1wF1Xe9moy1nNfrcaTVfD8XEdoPydN",
  "key35": "47gekNReCFTi1MN2j8hiK66svZLiguR9rY3ZbEA9RWbFcDU7BHJU7QbN13dKW6fE6paW4rLrUPoS1sJmnWe4PpvG",
  "key36": "FCjFWBWrMUpDZqEWWhwwvfENQejHPYhJmRQvE9J2NtVn32vaCrf6toQEaXoYnbcZycwgfMAa4HyJeF6EJVUjTdu",
  "key37": "4o28bqTFBzvzM1m9RGJ3Dgtn4F3iTkFxR43s8SPtTeNKRAhDMhv6uVCDmJzhzrHNQkh2MTBASYEX9Mhqc1A1Did6"
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

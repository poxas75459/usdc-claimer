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
    "3wLj5XSREvFhN4WbEDrNWCRSuEhqVwyzBvQbnsLF4kyjsvGuXtn1kb2YHf7RXhejGm9UNncfyx6htVFNHj3DfiNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iSp5WnEMvwBfn42TbFBR9anucrzZJo9xaDvE4ziBshprWzXCeVKyUhPVCnpYkLsYVW3ry1zqEN4pfj3XgkmsY9C",
  "key1": "LnLr9L7VHLxPiweTmiVp4FAk7ReZT5WhT3EfTCFwFVLjNq3MeYDAz9k8GgQDLc7zcPYYGB2CFuXkkWKcdnSY8pd",
  "key2": "3DDE7HnyfM4m9EG3DWWCDzQBccDZ3TtmgHNnVwxGxSRBXRgQHEytwQgbxVVnY3c6pskmeNwNQzRPAT4Pd4yeTXDn",
  "key3": "3emwc52ny95rEyDCp1mxmxgM6ScDEsgRenaGGUrvvjgtbKDU1GEtAjknTpoq2R6YxTUK4Bti9CpSzdwcX6rGNnAR",
  "key4": "2jb4uXrLfktAY2ygHuXgnXNrzfxfNghntxx78bBwo3pwRcp7N3P8s1HSjMC3nVnzVR5DvRDYnBSVNWd65U4vGcme",
  "key5": "4gyFtXN83D6evrwrQ8s8mJmYiDwb4j4V7F2cQc9ge2dh7EaA69JuNNJaPJdTMugZjxoSUnwKxqo1CxW2VSY7hnYP",
  "key6": "52YeCQhMaH4Q1DQUWoieawKvfwq7RRM9t66qWGfTcfqJFwMT9iiAsgjc9Ldf84NQvdydohb9zsc8h9h4cMw1hihb",
  "key7": "4Y3jR4N6iLZ8VQNjf1c7bbBKLGsMsAryBGUfoN1U6wWaHbm9bZbYxKZkbqyysmH9r2CWdBRtKq6scP1v7aeK8t5P",
  "key8": "4fwY4VsabX1xvuPFFnUnhxLwuqKMGfbW2r8UsQDUzPSsBYWDkMeqY1L4K8w3TG66iLuejHXDrwkFZH1u6HQexrHJ",
  "key9": "4fVdtCtihTwgMYgDqNDZmKyHSCd8fgVRKZwCxqZj1Hdtkt8zTZ3UZqrRhJ5EtH3JD4xwS6u4bCX5GNjaUNWfqFbw",
  "key10": "3U1G2ogiKGP6RdKxqKtdD516KQ9pt95vjwYZ7MqoRhXLXdVArffDPpmXuKXCEuyE3c6mv83ub7kkoZx8gQFP2AbN",
  "key11": "2xxbK1oXSxFNDcFN3YnrYvC7CzPUpJftNvW5kFvcJ3jBH3v8XjTNqiQWrjbyi473YKD7g9uatukfHZyQH89pXLpF",
  "key12": "2Dvp7gdHznQDwf95LRyWJwt9mokozZz1ghKQMb8JzbTgrfqK9CHnvcBbzmvR9zwg6FVWPda9DFUHyNGkczHUvSon",
  "key13": "5GHnoBFYAEZX4fCSEVGMN8SBXsAK8yzcakVx5zELxgX6A3a8ZLupyxt83ke1ZGiD1j46byx1CBxisFWRxPwm6YCY",
  "key14": "4s3udaKSvebL8ikhZwwj2oeQm91rJVGV9bqvAR1NbMAJEvbjvXsRb5QgMAYGNiAta6VsykwGQWbRmEzRQoEQyQtB",
  "key15": "5KW1GPS9LTC9t4r3ioWqDac8WKwo8jGnt8RfcMKKWz18uzs8avV1TRn6xJhjdrnWGpf17MxYAJMDPBhm8PQEzWj5",
  "key16": "4jwESpJRJYCSRNJYjnDx4Qu1ArsreVNhEauKHgNMPBsvXqnetUScCmrfwA44LiY1KB63DmPwFhYMHvPqj6tpwr8J",
  "key17": "5cvBTr7XP3bagfJa4gbwTtu1MPNnaEb6ThfTEbapya24CDtUmqz98W1xyYLHHTk2XbLqw1Cqmy5CZJGWwP9LXZzR",
  "key18": "C7TE4FUN8uDLffQ1FeQtk234GqcTZBVvK3TybZ1EpUxqiP6J42vfk9BrWdvkEqs4idqGHon5D7P1EaJJxdrMHoM",
  "key19": "4B6e3GXoAnzg2Rn7jfBoXHcn13nXVUpTHihuQbLaJFgc6CZRRTsyAkdM9Bx1sse8Yv7AWbCwh4abT5tv8ytVyQnN",
  "key20": "2QRYUURYN4J5QGnC5B3yGe18UXkD4t2LPZsz1gjWdb4zAzBTg9ratjGFuuErkvnzPkvDyDmGWxgiEAe4FPx2jcvA",
  "key21": "kKjBQMVanDiF76JChAvsLMz7BVhejApyr3s2Mt41vZbVUPmoDNa982XFoucY8oJ65bzwQWWM9HrYNVybdgJsDei",
  "key22": "28aRrFTPwyXsxU5bsLjKhtCusazUTjMR6vbMDcLb1gWunXnFjAKckg4gutPjv1cU8F6xrXXr7nxy1ZX9bT95yYsZ",
  "key23": "2PA7eibVq2p9aBiSkF8Hmgh8byzYJ7VC38Y6PaMGKqr3C8p5ono8wZK2JW71q6nuCNDEzw8bcLRjENxWKL1aCjVV",
  "key24": "4WEX9jJXpPr2j2669cAjFAUKWiyGaj4qaqRY6xFgef4YqecErsBZMnVqS3Xj5ChuTZ5zw9NDZ4SSmEFnrhgrCp3Q",
  "key25": "4izccHRHdCjYqc8QbWdBYLS2FEfeFd2FeHWuFmoPEWUtprNhVaQjus8CMxr3upFiuybUiva6Lc2d8jdhkCzsRbGP",
  "key26": "3dr1TmZQshGmdoJCdw5mquhBKcN8H8Gt8JViKSHYTpkSoGtav42o9LPgYvnZd3hWmNmQw4BzUN6eKAT7U6nZyT4E",
  "key27": "2cjq2geFCoufwT2TczzM82PUSPhuUp2E2BGpnCsBTspNZJth9PCWuodRRrmpsVNBjKjprzMdRWTbWDkWMXBbabWZ",
  "key28": "XVG9ShavdPHxUXvKyS29e2ew6cwFiYLYKvzbLrfvW4w6VWam9CsFHVM1egrXZCgTpnxvYosUzGRrhmPpNfDTjTn",
  "key29": "4GRVjtGKNNkdXKDBhAVZJK3yd47BzDQBh3ULDyHRC77Uofbj8CCxQGKVt6PDRPMEGoPfWLKEAfAwzPzMzmdLy3T5",
  "key30": "sXFhqTfkDwrXCUuAMEW7VwtqNtmRwaSpzMtsb736xptGoZJBbUVf7zVWnm9h9LjDnSjkgjar8LgCSVhzWucri1i",
  "key31": "XFLEA5V8SwtqPRFUY9bxWxuJ3JPX4GTktzG17Wu8tQsRqwEu8mf2YQm1bS6HaabZ93pqNWaEJJrVkGJ3zrUy1Fg",
  "key32": "f5fvVCthwU41dKuei6Vcq9aC2StECtccHfYLN9iSvNovbFqJ2vkxSz21L6b3QEB5VJ1QaMJJF7XUdF3rYPk1vJ3",
  "key33": "5AtcgxJZoQUXG65o1Qp7Zs6n82bxCTTwZW2mQr9FNuxPpkiBrhP7WHNkV6aDUuQzsDCaP8DvY2vv2kbCb1QnzqDq",
  "key34": "ybDFS19fz3r8kSuroqsRPfPBVpaKoYWwbb138BfJ31kfjiy1dCcpUsyiFmBHVdtnpMLWF2Unx4hr8GPFiRBnvGo",
  "key35": "5ysnVxchKBu2gMLWY3awAzVmSKu9D3SnSPxbXuUmWxH1QRPTZLwidq29imoZ1qw7LBH5gJmcXyVfiAP9Ax8V8bdN",
  "key36": "3j63cFmN9mtH8ZaKhMbrEwW29nomjnPQSXE9zg1JVSpZTpfQtKq91TUsxApHqdDNUW6sM4EhTM2fny3Q8KU5KGk",
  "key37": "2jTRmtVyj5LFwxS21bTDfZeHPtz74f55iXQdyAbG8ahnPape8RJqm8kaRHf2kAAGT2Y8HN93hnbbUtLCpxFsBNSQ",
  "key38": "5cZamn1j1o6MKSYogjPKiwrPZ2N4SzGL6kBiJPky3Etyf1ivkrKiX9dVZWhveSYiy5RwFf1PvfV8fCMgztUyVHZ5",
  "key39": "3jDWQgze7jLu9g7cJ4HAJZHh4jqnnx6Hp9YE4MKm5PW9RmpahgDH9XbPpvHivM6c6brP4HYVVYCaPip7PhGdrExf",
  "key40": "64wJjvGWiFF9KR5bTkC66RrvHc1dPaFEKRFcntNUeLP7BTxchtHXRbrVExmwcfCxjkq4rXN1BUVkrrS5kgbUUW5Q",
  "key41": "5R5KD6Kfd2kCp9MW3h91aPjomyGgWJFRApZtTknygPXbmdHYzt5zXmAun8jsdC1wQpDaQEq8x9fD6j2gm2V5kJo9",
  "key42": "3APz9tYKhod1anj9H95Dg3cTisP1AfCUgQzyHMuWJsDLDEt7wqyE3n8FJjaLaaA42tSRLwsVHMRigURHjSQWY68j",
  "key43": "5eeXynaWsCVc1Xk4RWjfcuPXHMtoEqbQdCoZJzFYbubr3G51KoDqRbu7ZEpNBff3ghz3DTLzr4iDenWWFueHxDjW",
  "key44": "4NcSk8SGZWeBH2Lyud8WZYD8yA3cHVvaZRXwkm9nc2utVgcFKXjKYKgsvjEroWHGK7w8KVHxmLzQiM356NsF6dp4",
  "key45": "43gv6reFabka9PEzX2A6PF4G9c3Wv1oZTGzKVP9DUT2Auiaz1R3jgT64ZPfvwSbf1ZYuEWsjs1GSGykAc4mH7suc",
  "key46": "5ScLF3eEGBj1VBXKVMaE9EFhPz6ZXTJNQPnzE5DxKvPPw5LZSxehzy7x1pjb5DfHZuxNQDKNvt5LQsoKDTDGnCTi",
  "key47": "58xsd81n4deDFgptFqANAhMYXysvKhBTCRxS7MkU44Zm1pqvZGbYj4igi6zMzboypgWF5t6xDnKzDZnz6GXZzeAe",
  "key48": "ZJD6RtuLrRW2YvY1iASh19AFY5ed2vNTuQZjmXnzwRsnbThYRbyPgUdd3mqZBxw2cUP918cCRWhC5KLJHwSpKYF",
  "key49": "2pu2RjSDw5a6tATrt7qHjtYXfBwt1o3Mj9JSomTTtHBVGNiCHrHU1Zj1TB97X9ygHhhN1R3X1fa3PfU5MpqG7faW"
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

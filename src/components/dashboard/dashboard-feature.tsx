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
    "5ca78Q46AzN5RqiBmEpQzwbiJ6FdFkyfGnzMh1rnMfBr6netpHEQaHPav4bg4TETwfqJ9w67fvRivJccZ4eyNFkh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oSnJHKCTQ9fThbxbqwieCrLHKwFFRuuHmpejiBCaBZHqfNd4rAaC5eJ2EdJwPqiBrtycrWH5xbXY69xCmBtgGQr",
  "key1": "4M12HmmDHMCyDEioxHdkcm7SpwdLksr9LFzpRCCDU7TWZ3q6CrzE2xVyehcLrruwa8rhyXVkJHbWBubyYnhuXDDW",
  "key2": "4Jwg7gC7WATWRVdP84koJ9u6aBhHA1jqJcxVveZSrfS5kZh14WKA3L1GRJAXj7ypk2BunTorVqE5rjQUPzKzgjXg",
  "key3": "5CDm5uwgHS35Pi3QBgD7EcKnC59KnZd3N76JNsfg8WPqZrym2jU7PJyQat9KLGLv6xFhGJ42KSEKhWrQtLmst9Hx",
  "key4": "29w5Q1WNjVJYY1SSP5RGoBPFWRH8MCp8M1Nbhsb38CyBhUS8nWHxokPD4jjDG1TJC64HDmV4Y9B5xQLQZydQp8xo",
  "key5": "2z8bpFBYksNTeSMNzf4uGBfwsSLxkrzCgvrfJxp7PMbnrZZgtJ1NYwyNfLh6DrZKhn4sPxBPfTi6HLFQVRVCJ892",
  "key6": "5r3yLpy93xLj5EakFjnJYbeG6KzgmNhekETe5uZF5r8JhhKCA2xDyDqDV8rrwiXhgaxTzsKVaLLFiyrS4k9MaRMJ",
  "key7": "28UDFRXkxoSccZsRr1UBskdZJAmTvHZXrBEL7ABZ4hrm7Xwhg1e17LjrZWx3JHgccw1e6rGiuZcNjzCURsaay5iG",
  "key8": "3F3pz4mKQwDuoQVvBfJQSWzMH2aV63uk6wKcvydbwKMkq7YCmfs3WzqGinDC62Xw22gi7tDhq8JyWUMCjusdM7sx",
  "key9": "J89NfuTmoZRECFHADuLQx54jGxM3UkB2g5GsYid4dxva1yTh4apbt4JihZ9PAwnS1aE5TMwqfvTM1s9GRe1AL46",
  "key10": "4UPzSLL9Td62aaNMzhdy2nuc3RXVMcA1Aibp6E8KvbBQU2Nznwm9fEfp93Uzc4asBGna3VPHadeJfvhBcshZm7pU",
  "key11": "5M1hEcaFkT4zaAppTqChwEBbG889TqcjhsWtSyZqPquwTp1cjSQxnpiu6UjfTGjj3LB6xfDptJyNimRGgQZP3RnE",
  "key12": "3RcdcKy2zesuS34xWyNqm7BGopyHzbk6Pb9QKAjrVhHr5FW7jHHZVU1ifWqHqgiNFxNPTWsZcPEfqT48udWHyqix",
  "key13": "5p6wwxSfqHbKyjCYFLHkYCE62s2tCeyN6EbjXbwJp5NtXg7yx74G2mpA3Df94K2bQAACSRRieVsRJWmhMDnw2QsA",
  "key14": "2n5jDDcnHgJhxj2uC1jo9FcG4vm3S9pHQ9HPdN7Ga1E3ULuXhN4jJDCCTvmQ18iR643JfRbHtYEik3y3KuApezNM",
  "key15": "5Z5Yq5q26i47pUdpY4Un5GnXBmYw4EaqNEhMQvGQPY9MhzC1Z1Lhi9grvSyPxp6pVuUJJdHuue1DQmWwvSBvsiDU",
  "key16": "2houCPQdQT3JSYCRCs1iMc7zDibJconFa9pJDaHRY7fvMLPoGEgbYxiQzhamLqCpy3jmw14pqqYGkrzVDruBsRAB",
  "key17": "3D4oaQf3fmMzB4SpLYEd31CbZsUhUShCsnfEwn7z3vp6NKhcx65h6nW6S6GsQwpYkgyV7mSg2aomoxuy6tgEVr3E",
  "key18": "2xG6NZwsQKAkhfVLv69GTB7a5jw1UfS9crxfHnehUqfjN5ZPKgWg2pxhefNGyuR8pAFgAY6KjkdLbRDHC221MeZx",
  "key19": "5DNzG7TTfpV4EBBFc42Z72g6UR6hjdP32iSiwFFPquqxtVuWnBjzRcSa1rt8LEoU2g3d6xwZPfbEBRgWsW56PWo3",
  "key20": "2c6vEUDi1KgEBqX1uDnnQEuG7xZvvHC7x6EwwzUzBFytDpitQ2zfQp7dL8DD8d4MKXqagAE4NE6w2TwJWtgm5nwR",
  "key21": "4i39Fg8HnSv3dxbBMVFWjvZJBXdxm74cdjfyb92yFE61YKEV5KcKb6fbi93T1zXMqh7qRqtbvWgHbnpFhQx8oAri",
  "key22": "5K4MNfgBUPtCUydKk9TQGASJDr6d9n48n95G14g6HeCrKu6j8x3tf87cbKiigrpapq6NqxTsPSAeK31nfKJzNtVk",
  "key23": "4tP6Fi5ASfn1jPXcZFYE1E3MQqHA4HTfRdHo5zFqwLaxy4pcKEqW2KFGH4HFnJ5pJPnMvEZkH5MZMsbWjeS7G4Cm",
  "key24": "3QnfPaintJ3SFNviZj4oAv2Kh6ogyJ5ED4CrRZ4eavhJy5s67MaKneUbiQK9jWT7r26UP6YGn8PrXKn92Fqohb4X",
  "key25": "vCjRmTjwBtvsUnEcdbHF3718dgri8bw5kzrfNuskfg4UiqeqHxJ1a4ghGAq6T7VJnYepeQVQoY6iMCQ5Rc7GM9d",
  "key26": "3KwsdSdP5J9SKVnDs4xU6FwQeqXThZgtLy4AsUs3HqfqnpEa96kPj7u1N6aFT9zq4kdGALeqHo9qRE7TEQYsybYo",
  "key27": "5cRuFa3ncRkq12o43vLBMKb5trQEqCw3JdWer8z3un8R38afbeg2NdnCfuZCUAYEcNCocUrH6iNgxhbAf6JKX2sx",
  "key28": "5Le6Rnd6sKWLL3WG7USPTqdm2w8BxhiGFc2qyvjcH59L5jeGrmi5gC9SymQqwcQeCBHH1SaXyRcrwCWjRuNnCVUQ",
  "key29": "i5AXnPkKw9Q3rb3u7T7cG8KJYp3HPPcaNmBp7oVqV5Hh96ar6RVvKhHhmmjQeqytqAR9TT7RHnjnCswnU4FufrP",
  "key30": "2LJg83SRasvpwdjSVLKajqXzsa6utzc9uB9DnAeMDiXdzGSbr1XfM4oonPG3McsAXgN13HXJX7EvpheiFEvg5MbY",
  "key31": "5KBDFKtb5tStg3qFeH4Esd3ormz4AMLRagxA6Fjv1SMCPr4Tj89pnxvrZVeiLRrqGYspEP7XTxWpCDD9i9dn6tXU",
  "key32": "2syP34N2qzcURK1VTmQ6cSwxFRbRCHMuwmKe3xMCTu7Aqb1t72qJ42vVvKoqJmjWyr6h3Pa7aivGJCxjgCNx2WCb",
  "key33": "3q3P7afoqcsst7G4s3uaLADeThDB1LZCKwxWEgU3JTsLQauJto24cQURdtT7jK48yfzhbd6wuL9WjcCxgh545QZp",
  "key34": "2JGc3AsULXWxkVkNw6woV3CmNx3oxKM1NsZYREakTaMYnSfwuMTzHxBoUt3qyxXUkYaMX4r6EPFSw2BnAoPvesLu",
  "key35": "64wrszBeygWq8ho9iuQvwizuhrw9K3QmxLgGGeaqxEMEnmmf1NcQqmTAsLSrsTxJucDiC1UbEM3gdu47A2tC9fok",
  "key36": "28d9arhhANvvcofLAeV2M2zLdQaaKy6TotJA38vrJTRN6VVi46aw4snjtBdShVQSrU8LPYMDZJwNcbMdxNmjWvXB",
  "key37": "64BRDVKNu1pB8tLiuMUz9CjVGicf9K1cX1FdxyzQuzRY6qFBwzXtpuqaX9Q1Wkhb1j3hQPp2F4kPfyRMNpj6bidX",
  "key38": "4UNMRizJjeNMChS7CkMwcXYN9EWgRep24uUSypZP8FoBrihoju1AGdNjKP6mk3cDBgB21EM5eC9LXDbCpVR62xbu",
  "key39": "5cnmebQpoBDy5j9mXM8VvrueJXM7Sh8gT7xr6YqWX5Tvm6mr66L9WDcRSv3BytFYFYi9vU2p4BPzTje6CM7QFnau",
  "key40": "63VF3GskHA5tHQjWkixSZTkiXowtGVycAkNJzyM3DfySyExdQ6w941G3UXuAHaPrszwyg1wAdTSj2tNMwfhFCQWe",
  "key41": "3X1JDrD7y7zW5sWGVcr2HMkPCNBPs2whTsZpeVgSLRsziPyJK72nhFpvRSb6HSJD8Ss4r3dxRsUjP6EraR2QQzoW"
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

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
    "3Zxd9pXhL9W7vsLhATLd1qcmPEnyU3sMrGV6qRJ35wWBHABJn6XMNLhyxhsff5UBdvQhCPcn71jCbaHrpBai2mDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56t3vzuJX6xYHhPGHxg8K75DkVBDFR18hX6PNKBweCbjgL2vj3S4L7PERiB8zJAfUyHqVqPn1fEeUvYL8UJyfkVe",
  "key1": "4BLS7omptyfdxm7iBLVSbY7DRQCqR1nuEr8MAdFqDdsXLBLBv5TPjnPCMkHBJE1aDnDFNpTfBwW7PCp2NWVdafDr",
  "key2": "4pdf8qbYigwrTyKdvsQbWT2MiAQKWTrfearRbe5FSx58iw2UnJ8jKXAR4fgxAJ8YrjXkHVNddYSWQc19Rh87tv8U",
  "key3": "5rbaW9qXcBJcmAWYZQqP1HYDSgwXdoCcpzYkSNFUcZzNvXTCWSvA5hCWfjG6Ks45zAAv276YngTsbFph7PfxefFw",
  "key4": "1PRMXvhFw265CoV4aoTejfjXJqwnPovrNMa8D2P8vpw14CbETg2G1GfPscy8xhWqiKswFb2T5asCHdpgF6E2rL3",
  "key5": "5t8rGs1jwnzLuX3riVq6tgJLZNsAHAR1XAXyeGsWYBKqvmjvc8bekr7SZyrjaLxjXmziX4c9WUSJ4Y3JBn8Geb7h",
  "key6": "85b58P9AFCrQVsjh9tQSZFLFWLoMeNELwGBbXpUXHJxHswPbzmye9rfsxYJz2bLdKYx1pqfnriHdPB9xE1SPGMn",
  "key7": "52tXPfo7b6CHsgYo93hg6Zh5cgeCHnGCeqbXxhdFyo7KaMQ8LMJGW1MHjy3JDwPPTnpFEfeeahCaxeuF273KdjSK",
  "key8": "PKhbUqBgYcqCtBxjz7ZMaCVvQYXxyps7233CSpkVJMry26tc9rrPQp9ghRbZuzxP4CRhKGSMvvFsap3TVDQDrKt",
  "key9": "5BKT94CEsGeWCX9dsSZFnPDYGMDXy6mkssSQRfMWjknsMpS38Y7SDw4sKY75HXcS17b5cNPRRJekUP8z7nQ6NicZ",
  "key10": "5CidrTULJSr1msyQLyYb8ZhVWcxg3WLp5XJXxmguahKrZThijr2Rjiz1i3P4pLRbiWvge4AcyMVFurhKrcHwKUy3",
  "key11": "4Q1upDfmaPSCP15EKUhpDadxdGBCvqqADomFeZQbDeG9BP6a5JhZr5C1gv247jtDWXP9RAYrEJb3M1bmE8K3K3pH",
  "key12": "3dLTTkMGv2tUaRFHRhPMDxLpwfREqLkWoz1ZjWystHunneiZMfrAdBjfg89c8JjKHctDXruaRdorQJZ8MoXXCcoM",
  "key13": "4x42DgiLvL3uAwb3oyp3okfUMF8r7e5C8JD5WxEB2JFsRV6Qc5Td7dKKzckpM5qzRqx8DN8Ni3HScx5JJDWS8vcX",
  "key14": "ZmsbRqTfbJdAccTk6TgCSxXc9zbDvK7JiVH8maSMeXBiPGEKbFK621hwcsukL5nebuDpqoWvD4nuQF3npfTGS3q",
  "key15": "67JwoeKaQtQGpruW6CFWfpxtgYq55y8iR6f7HJCvfARRbVeNSWDMBK2pDezmgz741b7897u2HDRMKYuVGHrAZPiP",
  "key16": "2yVAkLTivsXggF9Lok4XGbbZqrC2AmvdChHAbQrkCvGJ7Ah97XRbk77oFRdMQbLJUxBJ2whmH3xc6RfmsBm8jYDy",
  "key17": "65NsmcUPNNVDKsXmZkSJKcFuG9TwoBUTdNtuJi6SdTzARbybtAaojPQNLkUu2X89kRnr28LjystzKGuUEXjumdaD",
  "key18": "5u6qX3bT1jHprLws6DZEUjwQRyaXmiJcUsW9LPkrP4uM7ncXJs2ij3pbjaTtXtxMAz91aXrLESyiLuBnPDZWcaeb",
  "key19": "38K6pcredYDGmDijucS4Y8JkEvcF9WGqmJLuwynojGEukkQNL2JvgJ9huMXKaJPVdhCuTwwv81VpWbUuFrik1iay",
  "key20": "BavjweH8LcUVWfpchA8AfyvGznrXkYFJmVEpsyif4vZWAo1mWvTgQqamT7a3rZM59DQvZn9oubs5SJKoaCc42VU",
  "key21": "5thbo4Ge27ycdsfiUpWboC9RFdz6nvGTpbbXagpaqkhNHBeGXGbG92CgdS4C82SFqhKt1exSXDvjk5TP5KaLG6e5",
  "key22": "2dvoGqP4fup8TFRF3sG8VjCqvWE8vXuS1xWQx8JErjfBN1EQXMe6UXTYBuHNN8L1DhqXPwVLwC78B3qwh3jrKrcC",
  "key23": "5CsBSis7YAJQWs62JmheYUFanN5vHg4JmF5d1mq3EGCtUNCwCLLMe1x2UB4efJBPGkoCMVm1ovtMp5skKPGZaqQ3",
  "key24": "bR3aqFhGNBuTguY1s3MYVZLi3LbUbCXQ4QMycWyG9fF7QexLczgswLRzy6X6AdWQAVymCCo5rqhh5NjPFds1wkh",
  "key25": "3hix8Kv9JzwxZrReGSDy4jHnbkLJdFq1baM4pVnDvQxLTw6RSrNZk1bPZ2H7tbPqbBBC8FbX3rWGryJYNoTD3Mr5",
  "key26": "5qw6EFR2KdVvjaUnaTjej6EuQg6KzTBFMk7LAKGMdB9L2m6U49GuFASvxumZgzE5iyDRxf3S9nE6cTYFsAKjkQDV",
  "key27": "QGRDhQyUVXzNG3HZPrM53QXpG3PLrVBcnpw8Ey6grMZn3RoNpE5c3ucSDJEacZX9gLYmxp4tgDicenLcJQBNBvV",
  "key28": "hBUK4m6FjWfzSDDjQxmRkvErrUiatpkfbZP6uhgzw66uUivW1VCkkrc3ADPrKi4thugx3KwtkAFgqpuJ66aYDpM",
  "key29": "2meNP5vaorEPkEQkm7QTVrJMHF3bpwkuq6FL9gZ1f7CoN9ZrGhbgcsVC9tquCCVvtnpaxC48ajUTKJcw4qDoNae4",
  "key30": "ULUf9dkq242EjDbgWb7hPappJGcuVQGCio6PovHxBYA5cKZ8eptXnDPVuSaSo3ce6vD2eHip4vaNePVeH1YeaYk",
  "key31": "2YMaoez7441s2Ab6w1HjxTew6izkW1axQuDmYU3q4rJrgUsV6kRxLu6ct41okzzQnXuxUnkFmESvHKZ263gG5FWZ",
  "key32": "21pu84YMKAUstt5pcGP6i4QH56fmDgv5nk5NUdZi8dgH75BLjbq9Sq14qNtE9JJDfDDE91hP3rqDTZspW92hiMxw",
  "key33": "aVYqvhuTbrRhmypjAzhWwMRnHPJodUmjh7kmd355Sv8oNicTbwQrY99aQA9MhRcAS92B9oi854ffLVXsxdPFHSr",
  "key34": "4MVqWwM8aC6TitQfSPqxu3qA1hh6anky7cXYJC9hy13DEaaQ4y5eVqPV9xfASrdPVBPmJW21weccKVusnJeBJgvg",
  "key35": "4bNUZxMVje8bFyms1afpcaag1V82gP84PXoFPybyDmLTuqdi1gXf2uusnpvDfV1pyGH2sXa8ZWs9uDdTy9PzsHBC",
  "key36": "4kPrjjEpeqUr8ysmZQmnVoDXqNENvuxeKi9sK8MRbarDWLZdwQruRSpgewRR6c9kibajS3uH5ThHry37viR7wvRd",
  "key37": "2cqZNuFe9tZjpx2AdLTbyZ2w6dBnt6SEehTKeojTgqZb3qeau3iAo1crtTFB9HupPsT1xJkpHzWg5e7eC5cxTSrW",
  "key38": "3Hrs3uYAm9Cza7cAw7GeLLZwG9EaNgeYNrwT5WE31aqxUy1zGHXuTtQvMRavrHjhbfrVuskvo1VgqFjbMVZXWgxd",
  "key39": "R4XVvNxs8CuQr9Aypf2pA6ZV4KDH9ZCoB1KY1z8c4DyD7SRBZEgamiQQZAVtV8ka4zKHbF7VUExnU8tLtxCWiHx",
  "key40": "2EXsn8szWxDRVb1cYx56WEppiHN7gUqyUfDP25wnLZa4N7zboCuBKPp9SnqU4ZoVU5s2HFsCCH1yrwjZDH2TWs7G",
  "key41": "27NvwbhRDaD6b5R1TMTSf7VZkFUc976AoUWu8JhnihXGHXwi9NeeFnHPamB8isvbir5uEkrzZLFFmSjXXJ5cJuUK",
  "key42": "4vkNC1WJgjCPuchi3ZU3YhTwGdcDS3rEo1AJM1pwJfyMSfx8zZBBXuHo9M1Lsj4AKdRhV8uPGCUhsJUt1PTTSmtL",
  "key43": "65WxTVSqfg3n6Ry72bZ52ASbgfzEumUvFkMof4XTqpvJ8Qcek1ZYHu163RH44csQeyRhoqj5rYCAHxwstq6QV5re",
  "key44": "3SaGJDhbK9nPx2Tpk3TtkagxVZNdGJakdfKLg8FYEAqWvVehhAA5L8CZnujBVtuenDe65RiNrgRjrSxKeCWnkKNt"
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

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
    "36j3xutzMWPaChJhP74pdbJwPZSwEHzpGXX3W3qeALYjU3MEQzzU27LHY2VA2RhLHosgN4JSmVTUzDtRMHKPay26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aLnnT1Fhn5yUe34yuFEeUMPkff49zULEFpXS2ZWk68uKWt2opnZyJo5zHFYpLSqPRGv4NXPBz3WpFuKoBPkJqoT",
  "key1": "5Fyj9kydshTpA5DByLbTqV34GMSGY1zA1seQsmEiKx9pbAuZ3oafZAGzJdmtdxpg4cW8C9H9pR6REXB4Z4vCAVKA",
  "key2": "5RP4jHF9B4Ed6aaPWQueWZVTaC9BkDUyNgL2sH4TjSZbSV4SoNfXrwKfRBHdbdRbzYM5SncwmAF3d8NcCGLnfqzE",
  "key3": "59Vu6TA1zMW2NLu1KcGpMZBZ84uYxtURheghzYrfJVCyEUX8nUQxQpThast73pZN2NLvtMPowNaNEbukKy8m7coA",
  "key4": "45Y1opv38s33VBme9KqSzRatZkMPcJwUA9L8xcyQHTGAxGm3TkQ9d7dfn6gxkEpA4o96KqecqWeSiUkSn9pwBTky",
  "key5": "2Dci5ZHcPc7u8NGbd5i23WbCPUnywdRFiJmhSQAYyFRzquRPnReRCzvCG2niucHpZoJUWQo3AZoWHp16S1ARxjFK",
  "key6": "5h1m4cGLYiwZXDxwWASdy17s4zdMLwNf9JNHmmcHaW91NUxHb82S6Vb4qWo2UFN54wW7yhQMyKqiweo8hXWDUPdV",
  "key7": "3dhuYTVWEJJJDnpASVFhpPz3mLENkmc8pq6XAR6vZezeQud3RuireFMMHbkxhs3kYdrKS3BCZzDkm9z11AcSozTS",
  "key8": "3TCh4i4ZtEjVfM9FeNAiQR7tscyVnRNvVRrEyFpScK1tPQHnmTdsCPenVPNU2R4yzJ9D8D5YiuR3q7UdinbhAfCC",
  "key9": "5sV3133omVywgeCPAHdxeK2Tq9zCYAVqjq7xNMvNDBu31PmRNLHHnUgk1vhDwGQzH66Jgsge2oiMV292m6fjKYAz",
  "key10": "3CjxTLmjT88DN8wZgVzwe6bR8Cc9rkSedVRt1STgJgWivE1gWKQqD7afwSqVyjgJuXpmoXKfbrwMLBb4SXE6zUi8",
  "key11": "5HFuaLRJHMtWPTkfR5JYa3V1ek4JQH2Nict45eLWphNKCw5ophDa6bukDkYcZ4cKCurhtQE3Cv8GY3GWZS48pcjm",
  "key12": "52Cq1yWo2t3bAzF4CN3oS4j8AT4EhRN1ijra8veDv1LZxHP5WqkYLnAukLa94PPWVierNJWLxwhDE8SmHFLPpmx2",
  "key13": "5cioTzteiFzifDGYuXe8fP41tqgSjqW1WzUey9kLvFaB1Tmtjo7m63J4vJ5piH4K43EgvoL1ECo84XHLWd5mgsqa",
  "key14": "3ZUCpBSfau8AxRuTGgYrDyF4RkP4NH5keFD55aS2XXQfnNx8Y2PTeBN5XbZ6YLANE5cVKMM23gvkLHBeWQz3EtCF",
  "key15": "4E7qUBA9yCNvh7u27qHrS5t9dDJGXUmvR9kHWLU5EoJwBFfaDnAN4gvyFAo8qfmtZ1AWbCKs2QWcVLR5UYdEoKYf",
  "key16": "45WMvMJPouTQnbmSnWpvE61mguPgKqBWUteKRGBaqSirpuMmSgnhVR4TVQtmG7B3BFhsAM2GbyfnnCPjy9pUnV3u",
  "key17": "4U44kxys581zDnyCqiReuV6Cg1CesifMDHzp56xegEiEGfCBkVZGQqNSVb74R5oFDrt1ecdRMSNUbyJQnabuZamr",
  "key18": "3CeYEyW8RFZwu5YkMV3tn9TSBwAByUiC7q9kVKZEzcypGf4zA88rTn8khYUNRWMtHCMyykb16nSp5T462eXgUPZe",
  "key19": "4v81QWDsjkZgPuh3tbsC65P34x73GrfYBFBmiKkR88W2GcnhceaDfbthickHAfwQgTjhYWYKc8aGCaTmkJYJdFF8",
  "key20": "2etmt8yvjyG8QXFwyrnTdW2LhhZGESCGsaXkzwnGxHpDFU2bou8bgQwauvk7cZaFe63KNS8JwemRfwnXj2q5q8G5",
  "key21": "u9XGaUeSB8i1cudLxUNAfJyJSswAU8q1eC5tDfbeSVpoBHMSxR81XKXedTCK2YX6qCwuuJJZfW67hFFFJ2QZzXw",
  "key22": "2KGxSmruagCkjfcuzejcZB31n12Hw3jgciNu8x3YmPXvhSym5M75i4hNqgP2xU56W3oLkfYv9YMrZuzmjV1sVEMc",
  "key23": "5H4tJiEfrVVcqB8E7dmVtJLEUVHV516MFw3M8wdQv1beFnHtP12CwoVwkWbbLHBCuKatGnX22PQF45igzGirf75",
  "key24": "3v7sWBjvRzQU1pwwgzqucdg5NP83TtACY9L3piNkFyXjEjnscby7WGts8jAzAEYte8RyurdHvWe7tMJnPYbmgDFX",
  "key25": "4UidKQVxTZWG1Kw52ar2jE6pwkGmxekoNPDkvFPWxLbGqUheR4nfjWuVoN77GjmoUVgqXwP36R65fW41Co6d4Gp8",
  "key26": "1R1BjrT2gUHFUFBdf4FtHSB7RirmvCBd34VRi13wpz2o4fJQxNpy6gv5Hs8vi6RQC8uBDsiqop8D3WJxmmGypeS",
  "key27": "44WEL1x7XmTzBUYdYi4dMv3cCLi1JNfapTndpSwVLggp7QLJBBEv7N63WNchCc6xu9D36ma7e4oaXPqDdbVyYG3G",
  "key28": "365p3xNYye5GkLL7h3FcwXcm4QLcGqimj7BCTTUPrFtsaLuUJagyoohnRTrRPQs7Jdsrshd1VJZCE4E6EcvqZGG7",
  "key29": "3MfMkeTZxLKpMkovAwGUoZzc4kcfaK8r2TTd8jXCAtThSTs4AFM6mppLTpLGCUZJHnkVUR6gw8pUTar7hXnijpH7",
  "key30": "4sbpXbYL7gq4MXSFu2zaqb1egxu8wKL7D3FEnxgJkdhSTTMzEkAEoWSBF6hRovQ91QaSQqdnV64k7o1EYCKyeEqi",
  "key31": "5JJ5Qprjvz9YgtNh914L7kKU2YgUMuysxda2waEca4SzB5Xi76s3vpT6wWszEJXYTqJg9nUkqboxozv8e6yTZpdH",
  "key32": "5DcZzKxHJJcELG39NC2U4Q4VJBvaFr9aEZCdmxRDgpGwj7yyuvAmbS6qkrZk9qyVx6uPeK5NVH1ZYYayX3hz9DHD",
  "key33": "5HWqeg81csG3g9cjZe9Gx7zFatVDhNBmqWhHGCmqVw2aEtjAVu1AkovChkHjjFdM91Tycka5YaPoEjiLJx42PGrm",
  "key34": "5Bfh9EmvxhRGeSpp68Z5qcNJSq9oVU8TRH82bjTwKWWGZadYrJi4uav2qU2EiHcddH8DUV2ih8jg6f9hf1LJQbUa",
  "key35": "3Pbn1a86wDZYAZH4ArgGD1zeu28qVWikBom5BMgbja3VGEQBqLMsCVT968KM61QZ7j34avpA3WZ3d2xEVpHn4N5R",
  "key36": "5srRP3BUBCqjExK43GdsCjsp7qW2XFup7RS9zbcGhv8bnR3xJtuWDLW9T3hQbkZa2PRgKiTa9f2Xd5UubKUACZP2",
  "key37": "3DU4RKopVyWAMpswvtqH2BaECKDuvpXSK8Jow11VGRTwvyn9fAy2xJEAttGpYdeqLCq4nQUnAiF6ef5qPzo21Qeu",
  "key38": "4yg7v6ATGXsrWZijwXffgZkqvveUmtr7hAJE9vFWjoJ1BBPvukq4rgWY5CtbA2DGqhAAJhre5C2uySXyb31Buf4N",
  "key39": "5v92WkzpZe3gxe746j9g857dnomFoCuVdyrstq8BzdfmxMQthemLxrJKEkCJ6BbfZd4a3BQkezZvmCjYbhNxtYfg",
  "key40": "4FMBiFyBuy7HXtN6R6CuXj6YdRLFH7jgPkerpSXe1aCJnfTvZf8JyKEPQXoHUyzzhNL4bV3HKGkKiZFfVZM91fdW"
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

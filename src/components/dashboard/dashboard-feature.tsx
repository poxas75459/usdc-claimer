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
    "4aD9ZhQnJ5dvJdN6pG4QLm6Y3LMNRPPMe4aKRwyHK4Re7bs5ycNStkQ551HRXndeA4FyZ1fmSmGpZB8LmnY4rBJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MH97XQMvqpU3nVwouzRY95aSrhDebvMyoKQXQNmT1yMYJYQiznYkhfg2YSNLTRbUFubggLq3Wn7bSb4QscjpGq3",
  "key1": "23K8BRCEL1yiWmbZAWums6WRWfqfkpVSTRErCxnBf3VSQA3d138jfEeq4f6F8fPBzmm3E8WkXZf7zM8zUtfGt4Rf",
  "key2": "BCB2StWfqi3iFNP2asyiNSbSwUzuHGTXWtpYkwUgkMBmA1K8BTGjQSEVEVE7A6fyGhSU8p575pyh92EozR5fcxT",
  "key3": "2nZRbiatF5bH8Qhbd5iFvNYFhosk9hqqA7QXso72UQoLGo36mEP41Lp1v9DA5C71FWeGsdU8kj1ZQtrsFZGAYpmF",
  "key4": "JTRJdKZy3BwBTcgiXVn6EQPifPY6F7cSMX6Jbi1WNWjhjRkeMx14yUt4xqPVuojbqb7dL3V6eATJXBag4aZJtJB",
  "key5": "4sGFRzH6qrc1bNZ98kLto2T2YvrDYWoKfToLnHPJi9fvhnoi2dN51wDKGHbXmibjtV24mV8iYQQrZJ1pXYmnTdqG",
  "key6": "5so9CYRYeLSmW8WYmAEXutvZhc6j1UeraHueGpZBH7gzSjziRb1vCHG1JMYbKVsRGbBT3QqCjETzvxG9KjTaYjRZ",
  "key7": "3VJNoHYFTbuw5cyEr1iAeKnpP4Q9TiGaemoid9Zpo4hEM4jR1MrSKJQc8SaEPqSQakBrAFqbwG2dAaawSVzEZGr5",
  "key8": "4dZZwoZUGYFXuPXKob2vNuuMSKKZb5PZKiqT6uzfR37FwiQ5TDUTYeag4t424eqKvojSrDLHTQUY1eJo2sxPMfx2",
  "key9": "Wmg5zZZPeqZPj7Xa6kBEXkqLAiBJ9XuK9987tmDihmVjcZZj7LeFXxjjfKNrSMNLZStbUgrxQDzQByeVV7LY3rs",
  "key10": "5XRtjhiByTv9vrpbefj8Xb7becwrVXtx2deYGYVShZcfPjhf9Jo3GhPsV5u3r7bX2Yk7cSGtGoLY6UUWs3JdWTbr",
  "key11": "3Wx17W2gNFr5TNoGbvR2LWrJR8DUrjFYKWeLSXdGif5yw3afRwGUo3doog5xPimfytvuGj95hdhCMs2pRt5jayNM",
  "key12": "5W2E7ia7fhScF493JX8rEguJaiXJUwxtT1o74WiQzAyVkxd9ETXwGmzrYS8U3zbvAnkdNM2XtMp6ts3JepedWMvc",
  "key13": "5Jy1RkNL384CzLmPdnYY4uwrXbWF7YeGEZUrU3bBDrEKkimhN33P1F1pkJcHmMrmC6GA3TgDpAaP7w2wPmTqvNLw",
  "key14": "eHauFACE9gERZq8AdNDsYwB8bjzaUsJxqLQKxLUX4kK6Erc53MHjmJdbZuj4teRB8g4cY4aPBUKRYogWyQenMmW",
  "key15": "UcrrMf2iMet3NwWJrSnGPxYX1mswAhSRA8HwYAtmyNyXnbEEjtRyjJpCmhswuNpZ9GaVps3dz2ry2eGY4tP3U8X",
  "key16": "pfr3A7p7Rm7rYgSHgkzyCWRpqanG2S2GYqJUt5ZkfDbrna2MXesfGqKxd6zQcLsbgAKTL6nuRGkxoiy9aqaKAov",
  "key17": "5cyrD9XvHBJhWvut9S4quK38rLnPUeX4nT7U8NoRnS43FfYifLAnQRZwTu79d98wYxp56zvyHiGfktE3brkm6Ak8",
  "key18": "47tTapYfUyvvdMcViyWdaiDTxDjtxGYWEgwyznb7CyKSeMUU9M75y6oTyuJ1TKuPwgDohyWaddy6Ghk3xgNq7y2p",
  "key19": "sP6Pxnf3FBaQL6vmMw4KRdh9Q8pCwokF7DUvWwsSGp25yeTxUtPuyb9niS9c7AZaf88NPatgCtDB3k1SuCsNExj",
  "key20": "2ysxpt4nPT2Rw6J8mammHswnngABK9dXAx88Hm8tUfbnyrCAzrGapbQPFuVXhyRako7ZNQ9EbCb8AV2qC5EAPfCP",
  "key21": "5GuV6V2XwJRCt3nx97WUhvb9gfq6sNjGjtu5JqzGVeiqXiE1uRK29u4SGv3PFqkNwEbQHnxp3QMfBQCivb7sfCGG",
  "key22": "ipt39z3qkyPyJNP4KusjTeVtD5WURKBrcKYX4Tq1KyHanR7PqTCXNoRNZRcsmHhxaHfzYZkoqfv6SbqhPZMXjNU",
  "key23": "3u6EkQ66dnsRDRPriucGkawPcxbhvAa4cqNHsyQrgsLq4Lf7P4HS4phpZuLUPZmXKrmDxukEVUBuSjhANu2QkV3F",
  "key24": "2edwACgUc2d99aGWqvx4jmdg8UmGGURnx1FXqaWiawXhUzwsA9jpomTaNRQnz4nCdPKuiS78FnGf8LhfEbqWwrkr",
  "key25": "4dN6R1K7LPGy2WE193M7Yh7m6Z25roUAqeMejjsghxZ3exEGhPmQRDLXTs6anayHi1oaJ3FThzyEn1Z5oU8frFw",
  "key26": "2wjECnqEcTMdmuN7KVSLtaCh4JZZ8xFASJFFoJ7tURTGfYZ3XUUehuUxaQ5oZWWmfMV55dTbsLDLazhr1J44jK8w",
  "key27": "2fcy6a5NGyqgcC7TchvELo4MQCoEpUosqPo1WGa9v3YMohB8PKmcTjiqdC5LfpXtoheVR9ZKFnKJQR4zhKHbsK8P",
  "key28": "LafgfU53usGBseycSe2pZQiLxqVP5f9RnXrfx8XkQP5dBdRDYbtdUf5BBZxw8QmVNVvJ8zthQDqKtd3p97cnj69",
  "key29": "4XUYWxTYFPhucYpVvUpBgdL3XCmUgHJoyAXATtWXYoy3RotwswH8rrxtNbZaakycGX4HktDjn4Rdf2vNRj63fcvA",
  "key30": "4ziaoKBEQCaLV3ZjyLozxAGFnYLsbLDjoPk9t4LKtsj4myoPUFEiWp3imrsKUZHVdHa24CFCASAf7yxeKJ7VcDz3",
  "key31": "3cBBTFZUhcfyRQxnnf3suASNZG791ZSHM9PvnZ49wTAxeJA6YZBXo6QFfGE31LV9TpSpGM7BduVTfwzQgtWjnb2r",
  "key32": "2FsPTwyjiqDSiuP7WUZcDEjTCruVQcwhcEaLYnf3oAfGoL3DU8xrRpef1Nq9sDDeF4gqw6xExfwqKzqkjKuoADjK",
  "key33": "5mrMZmwiVMsdPjXPUmmpAHVAzcaBS6YTYW2qBAtjX3iw9b56xsrzfxH5xydpg5sn58Tva7L4e2DScF7eJP9GyWYA"
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

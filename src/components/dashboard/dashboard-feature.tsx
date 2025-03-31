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
    "3geNEkcWyZz9oAhTgr2BtWU6TnwBGPfGWBVHpweMrx2DbEzsnT6R3bpXV92Mz5LScRZjZF97RGVAyZ28rc5qimUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iQ5a5a1kCurgavoTVJuf7jkfoTycJpExoyMLaqaaqFLWXiKHDi6QVXspdcgvqQ7kJvz6ChBFkwscnKKnDgQjKJG",
  "key1": "2mQyTvtHWCMurirLuoYJrsWwFZu2Rmohgwc2XuBYv9zqt1bpdVnc1bw5Me5hh2ZQSxMLjpXwFoD3jWnTzsXQTnfx",
  "key2": "bz5RUyY5BKhgyMyQDo6WDwKzLt9QqkM8pYUzHQw2jGzuoRcXRCuE3ZTxZG4RGr6rkyrHfgyeVDKzaVvpittyVpp",
  "key3": "481WpHALTsxZeH8RyxedfPSpXRCuqRsH6vnGPmdCB8r7sneExfmUgdLK4BWfLpE25hxb9goDJVWENxKQhvRREQiG",
  "key4": "48g9iKBAYSJ48teRaDzxmSwahC4mbaypdKoMc7LAJVjVwM8o98QF91LpCsFupdRRSwRWBxCz6sM2F4dkKXnBduFB",
  "key5": "3pE1XvbztgCQEGHkP7rZR2wnQcP1wawFubYaQp57BWameUWoYoQqGLisfM8mUGT7oorwmqxzRwqteU8RsMHt6kfX",
  "key6": "4ihHm6oq2PWQQaZ5zUatcWvtVfhckthGbAFRDVSg52mnMnf3Dydmf65XuraiyxXjVvP8KZC5vpwMv9JmFV7XwyFg",
  "key7": "4REui4grkyKsTqoZGmyvU3bHaX4ufxN7RaSkjew9nD1gBVH8ooMc5eh2fy5c4e45s3Ea1MvUott6Wi6WHLicNkxQ",
  "key8": "fVHctCg919nR8vbc7ykdnUZc8Az13r8yHjkY9PSZLHTuXSdbz71TWKsSd6LuphdNNUGKGVnmvoZxdNRPmdp6zUK",
  "key9": "5Mfu2Cawe7Eg5982wd94ZwkszXcBBD9SEGW8Ycj624sdkakCGV1YQ4FFJrukmEozDmf5rNhg4H4Bp5B9DXSZJqUs",
  "key10": "bYGKoWwbBZQpirirREqWfHyuqEtLjdMKjxtR4XuTcPJ2e8gVWXcy1rpgVwPEDFpgy2bFetdDLkcjzXRpqKRVS9g",
  "key11": "53f3sjzYvKNs43uWyYPXgaEBuR1eQe6PQiuU9RPdLUaxMJhL3xXZgq6RBHF5w1NPevD71zEe7A7kwxGoMvvaqijp",
  "key12": "4ziz2AqiwtbX94B9yHB3sNtU1AQe9wYVDSrJWoKCgWFXX8jsbWgrRp9arWz3XM7B71XaKrLLeDhjTHkMaFkunag4",
  "key13": "4mBiUNV5R3SgQhcFTFrV324Hm8C8jAGbSdsQK6ZRY33n5KwUkpD1K4nkNuWaoFogghgCB4kA6XbxJRqPDcZxhYgW",
  "key14": "3CntZNGE8cLj6qyijUwLMftDjCVCsGhfkBmDFAE9Gcjzo1eypBgeroKenVtP2k2nJLDL42BTiJzJeh1TGG3NnLnt",
  "key15": "4t6rwqRwwtF1t2RzqNzoo45N6RuGjsvEumAKTnzHyNJ59v6verAJBd4nwqtvBSY1DeWLGgdCYFPMqVL3HfYPd5Mo",
  "key16": "5899gb4BHHsrL7ajmNNeatvUvhxxMhT7po62MMm8YjJC3HnTCmcokoqSsNefmaggXtLmyVn2rd95q5GwcRuwQBWz",
  "key17": "5srv12RXuTT92XVUsb1nXWyrEq7VAkpU8aPsxSQjCMHrexLmZjPxcJW62fgDfyn5LfrexffSi2PgHY9YsevnEFqx",
  "key18": "2rggtF7oXmReR286uhWXV8VcF5YepfGTARUWKDjhGe45F2kKPAfuBAzALTBxu5b3kV4Psmgv4mYSyfZ54AQHNnx6",
  "key19": "5kfwMe4sVtD8E66Cj8bM4v7gvgptcemT3dKAT2HeMz9GgysQz1PPE1hweRRyNAXRmW9D2Q7es7KMNfY6mFg9z38N",
  "key20": "4bSLAGxjgpzhU4LkZtuqFtcCYgJ2unqA8pqQ4SD3LvqnkMTYd8j6AnvKBXwjXTXvc4i8VaDgWyxzbhZnXNERoyNE",
  "key21": "28K2bvsAuVVbdBYGawkUk9v573xCmXi9JtDbLAsyT1RVut6L97SwU8PGqM8HcKKgFBMDwkyoX8vjouX88cwV948y",
  "key22": "5LpWwUSQec7svEarau5sTBqQjZGXq8RKR5xkqbYNiZL4o1GfkN8z95Gf1QiZtS8xiyv2CWRguqUFSLBj22FJ72Fu",
  "key23": "3tFdtV3Sg1B8nypuvU2rBypXC65MTXbB8qfpBZ4G9uSHKZiL13MUkV5KBXvcGvbCmvGNjrBJ22fXYKCBmNhKUY1s",
  "key24": "ggCADq5ktwz1onVYGKGkY72GiVqaWCEyZufW6k71653fUFJxw5o6vNjXq5qYMRhMsQBhNVRGdVtDxzarDAuXqzj",
  "key25": "35nknikM1RkBcczXcXGW3gqpd7U3WRseuv2FtRyxqJ4f8Mr7JpkohyXVtiY3SofJrSQBf869PffW8K8PnUVuwydX",
  "key26": "jJQw31mtyX6FvohsHr5FNkpumUGJ9Pig3q1Py9wqGEnbajDN1Rq9yX2eP5fct1Fha8KgCE4QTqGLsFEovu6Q6VY"
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

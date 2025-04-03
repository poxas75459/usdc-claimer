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
    "3antHw4v3H73rNA37ycAWo8vpRRAyprnvZQE3q8hK2LeBSKzQerYv9uniGEZDX58Yg68awTgi4TZ8evx3Ax3frbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umJWsVEjzWbaLpqAXMSHJmxE12vKC3SPjRtCSzhxmshxd31y2qe6FQ8Ec6Fa4tDekisY1dh6FDCWvwfArozD44C",
  "key1": "3TDmA9moG5dGXUqS5xJziNE8TkhC8Zk3GiPeXRnSe6VGq1WNYCWRdTV3gx2MFffCm6Pi1BSvGL6bqJLVrF3DFiij",
  "key2": "4yypGT8EvctwcnXq6BiA5FrWR7qjRVdUMrutyHJbGfEqjtw2THDsDQHVfaiwEL3RwPXYyRvZUPZU2gvRf5vyjae2",
  "key3": "22cHfETjadjifratdJ5xe4xUXUPyhWkki6xCGbxJBuM9mqbt318RvnoJwJJy6YbQsVQn6bQDm6SVVGZrPQ96JtsR",
  "key4": "54E1uz18FSiPygtUsyj5gQLDfR1uKbEHH9nFFM7368hLmzG937zGTPijKGmveE6Gdt8auQz5rGDZs4RSEmPpkXn5",
  "key5": "4vMydYjAYCugvhNHmMjdBHpFdPzmvHvBjgxKaDEm5i4dJFxqkzAc8t4JRaCQwQygpov4k16WkY4NLm2TFfJg9DYa",
  "key6": "3WnBigRiW3gEDYhCzxQ2FgyscxkzojUhetBcQYzDREv5PMb4AcWnQqYVFkLcYuPGrD6D7sNrcsbwDecePojwYzAd",
  "key7": "2y9qnhqtMZdVJhadZeWDFSifDeMnLmuiXmuYhNcMvyinNpoaNgKyXDipywMg1q1Ph8JufUsTdPmmoH5XQBYRsmWh",
  "key8": "WEdmgF33PSAXzMEp4xXk74Yo4LKVudFNw9db8561XYx3rJTauE6o7b2cnaYizgYXPzst68vhxXmtxNa6weAiKuj",
  "key9": "4UimrDN9jgKpUhVNGbuu5ToVYmwLkJAWjZ5nLBYuaY9v8kUkcmzhhpZTWcBuw9S3HZbs4bYcAcvWm59JhwzhVpXg",
  "key10": "ovjcj93uqYHa5aQwhraF94zcskbyWSkNsw3vgMmJiyvFrUGe2m6BAqxCuP3ARkrgNijXVL5LABsq162x46uiPuB",
  "key11": "3Zgdq2dUTVL66RXsLrGHaYYbzrp2TeZMTmoPESqWJYCiZaYuVe4d6Yg6GF5Eu8E52JpMv5EALwmw5EUsrCmtuDwZ",
  "key12": "3gfqgDnGqRCja89HhV5ne6HntR5eug5Ym3WgLxDxrFYMArpvo9wBVGuJdPGG7Fv1FbgWNrd95dEU5eLNp2ZQw89z",
  "key13": "5TNRtNjTgfgRwqwcJsuFnEyrp2iXP4pQu3L1FDrkjjPmETSiYKoVMLVKY4GEiF9mLhCWaziW5aSmzTJAXfjkiUVZ",
  "key14": "qxxHKRNd6tU3e1bgyy3vVHB186SR6hxpZAiVmJ4TwRsmBM6mrTyowp5StZPXgbZGSxHQGY58K1ymvJ8BnuLcLV2",
  "key15": "5Ds9fAmh6CETj96eu5ReWRBCkWP3qdxfo4csRzCTqzosm9tsC1LECRefd2WvruZQqiX5KGFkmkmSrcKJvgq2Ciyw",
  "key16": "47zXYAderiBLV94jRbyN4HGbgxtLQL16ke9wuCU5bEQm6oJPz6NSTKRi7HYFb5WGHc3vC3ixxazfsQVEUtEWCZLH",
  "key17": "4KXQ1zByCuvRFfj9Hc8vJKNbfNfh8ivMVxNxbpRa6tpWcbbvNCuQRhMvgZNooyskcUvXpk1zmGAYdcktjXT8wPsD",
  "key18": "2WMVi5TbesJrVFRzHEnFW781pjfoVzvHrNhsqZuaCxmcc7FL5FKdz9etrbuSh121raqaetLjU5swuQ7ATuP3GVbg",
  "key19": "p2XqTWQN1Uxxv7D77AksHKkd4FjP8oYWkiurRSmTyouD7Vy66yJo9iKAze8PTqZkKx32uQrGQwbZqveec2asbdk",
  "key20": "4XQCRL8UnmryNwRyfU2U151UiBwHk6aLCRKD6qDaB7qLukf51FEFQEGi5qGXYdfmpwEZF47mQx9uemVhegjW1EiB",
  "key21": "3pTF45E4DHWeU9wVb23B4Bt8A5utXVhoKqPi7Di5XTatctPyEmbhYZwHwBHWCx2E2UsV496rGJ2K4Lw4cTEg6LJe",
  "key22": "5ASLFkHMGtZ1jkS5oDKPZf7XHtiEA5iJs9hHZToRyy7Li7eDFiNWMrTubq8kNzpjJc76GTJKXa5NxzmZQKHDegu6",
  "key23": "2S85wJ6BizX3EqX22r1N5R4xXByW9REACHK7Vh7wBfA2gQR4p1VhQ8hatRKvSqNo5QGZ7ADnxxFyL5oFjjUasHzX",
  "key24": "393HgDGBEYqTH25A23W6qwezxSasj3qFSfr9vdsmRWAxWZjMiSVAHcyH41CxWj4Y2wgWx8MVxzN2VDwQMyFePdWp",
  "key25": "5zx5enKykaHkiu8UrU6RPb6kmCCrv2Kg1yHo5NjFP35YwQ37fHvYUUshamBsZhC5Gf3HvMrMknfdwQFT9P8ysz5e",
  "key26": "2RiRfXQEyd3ywh5g1badD93QoLtZq4NpHmhFiiXKvBxBzb1BfLvNLtiCuC2o9UuGx7XSbVrHadTTP6tzfgG7dwe9",
  "key27": "5MPd1PxB95SZTRSULHVWdRb9AR2p2TGHxNQYGL6GgmQwNSyTzNfTmDVQeJBFSmmHQ9HtGJRiqBjyK9dyaDgD9P4n"
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

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
    "2oc9wozmwdo7qRvTeKwGrhaTdY5dHFr4t4HQ7NPsZWhsR1j9FwJHwFkxXTNJA4qpJs8mUwxgDfUJa5m9QUFeL7Hq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L6LfEyNCYKef3yAtjb6NAwfTMjgg5Ch4ShrWj5dh5oimy4wscsw2jjytcU9bwCV9c7fCxaiuVCtakhRnLzjF57g",
  "key1": "42kTZjAbFRWXjcB9eqRoYyaguXGjWjevz1rFQfcX7m3wHFfvpDMsrY7iKKRpLL2BBd5uMch6yXJTDtexeoBwHYbe",
  "key2": "4387Tghu1GaRMmdc9cgwVNDXgZKKpshr5pJzQHFZdhKdTQaXDCntbj9cqUADyBAR2gxEqVUb9uPUipE5PnQoUVdK",
  "key3": "3FReKAzmWoxNzQBSxHZtAcL4thw9D8jbXWc7AXLMMeRRz6UiZ8rFA4D72ZczncSyRBF8LWVwsRj1km9zgmxcbr8Q",
  "key4": "2LQe45dDux4Vhfwwz2BxV8sAB9iCMDtkBcjTaowVm3CTNaTRy4fFyR7QbcFTPjwrvJyQQKvUFJZ1dsDVVM9TuwRE",
  "key5": "65nURQAUYhK2ohJBiPUBaWvQJPXSr2XV5n5tGJUYAh2gLvePaUhonHc3uN7m9Y57DU43tDbra2KqWn2sgwdAnR4C",
  "key6": "4kmAngyrvnYsktTVY5KeSSbixFp6NtCTA3FJZ7xcF85z1z8o9sLKsbMW8UyPH8hNUJpq3yexwdAFh5hrKqPj5mgf",
  "key7": "511oGN9aXjiVTQAJkiDus6umCTJy67nwDxiiY12e5E2n8WFmWrQe4h1rXCzesrgdQhpRGSF4BVJjkCSoyZHHfeut",
  "key8": "YDaHiPP3wL9EyxoHdgmjHAzQ7u1CDLPTfQd7tyFovy19mj4mMtcLDs9ZLdyBomPd7VSubxHW68VNecVyqFU9wmb",
  "key9": "33MMa4KYcbyj1Jf2cv2CZAwKDGz5e8QrG9FuUXcGeJPAmNWq9a4V6mtK5AcseiwUcjMVckK64BCMZXpAgNQg5Gan",
  "key10": "2qZPKp7MN3YAYeL2VdhmtVuJKqiMrXd5SpGZJP16kocNBq8BvvJNhkFTft17uCVzNvVSzE4VYRbGNWHMYkjT9Teh",
  "key11": "2mXrEqYHza8bi7rypKdGhSrwNR5YpY1TXBk3Fs6bJbhkFmVaVKF4JWzrg7ddnhiu6Sm3GvrrTmPxyr27AFxcVboK",
  "key12": "314fsM3cJkB1Cs7RbJvxb8gKCbV2TWhzMP61xuLSK5CpAhFp6BXF9XAKjZcMHQyARdiED5pmgQQzW9MbBZRoQS8x",
  "key13": "2MY6DK73SPZDqa3p9jgMMzCtx6Hy1v7NGhwoTonoUDranjgKTFCfAM6DcgnHpjci4cmDuKjNPajbt7P57Gx9fK8f",
  "key14": "3gf8AKvkLcCjrC5uSngTF2TbgGpBuFko7BdC96G7XANzhveWeV4hJ4fiSrPjTzfocLQ4EcN6Ds9cEtaw9gSE28pf",
  "key15": "DBH59rGYpCLhJjGQoySLEhgd72hQbzbQZAmHavgYmzqwio1wLUr6JHDQjQkQeR2mTHnkusLSeo13JbphLcpgGcA",
  "key16": "4PYt82FRzDZqhnmvCoUQTnMwdFE1xoj7BRwHpXJA573faCYBwg6rxF3PKtXptd4zE971hY6iWwae9s8M2BZiCrvz",
  "key17": "5ddarsEyDwUhVijCareccJfrBfGnm1xdU95EaxV5pQq9kpzZqNvXq4BKxh7APf9ChiEdSjjPpZA9fAnE2HCem3Hz",
  "key18": "2UTvsgq2hNzsGptZheus5FU9z33sSWMhWRBHWhQ1df6SiFBdwCLPzAWhkL3YHAnerhstv5saWiqibqapEpngVnjK",
  "key19": "vt3XB6VJGCrefjnWfspobdpJjk8Djg7qMgoP85WpUKUZjCFguSso5BxKCzxhXYRywFpsNrUMuqscutFyWuc67My",
  "key20": "EntU53ttApSyUjFYvbrayhCGCAHBt3HaaYy5b8Vyx75dGdpvnq633mpfGwA6whuG66qktCTkqSfURBUhih196GB",
  "key21": "tcz7BM3c39b4mJC4KA1pnPCWy7xhrkYexHJk35gwea7EWSodeiLcoGwXRorN5WqyzQcd2Fpgh8BiYLTfRkZXyVi",
  "key22": "5sXtqkjjzhy6DbuszzmgkdPKr8Tb1RGLUtcUvEUpsm1HYHMhN3xTA7LT3JXQGdGmGwBpcoUxXLrJEL7M75oHLVbJ",
  "key23": "kpJsaj5PdBU4NwHTECmTxXPRxEuKyDCxwqmiz5FTv6AZC97YL83d69utvHT95JCrrtERyWcLrUtgzsvNANz6Nkg",
  "key24": "3ZJUdEno6wYBHfV8AkpC141wYcThFioQKHisjZZ2DnRyt6FdMKDmM8dFv4v94CAssQ1TiwQdyKRJiZdrYrMhDesL",
  "key25": "2xpny8S5i3BuaxsLc8ER56vPQ9wYivF1fy7UzXmDHUDzBnDot5ZR7XuxNvrC6NuEHMk9Yg7RwVfKB8bVo4fZoGqi",
  "key26": "2VSB1s4q9G6mVZUnwZ7V5Rr9mfEcnRE9LZSgAvsa4A2yodgfy4VcUGJGENJeUCHDK6YSLHWQ3rbVvrqb8iUKGx9z",
  "key27": "46embLPutWGYK7ctGcDaPHR1JvBrY2iDTctmmDKPTbLpHpH2xRBB7XnYVErQdsCNg3EjRZgrohYdqmpZr7LQE4Cq",
  "key28": "3kNqbihX3tRUsrKmhP4DoxGiEsBX3K3KHNDXjQZgK79DFeULkT2RdaFCtv6cPWWQ9PddrYbpafMqptzdGrcF7RvF",
  "key29": "5yBLSD7wWGFa8YQMweK3rJMyDX6uKFATEfzzevBmCWiYNuBBP1sbFomVNgztnJpaTLzHoX5MS57JTx85rDfgpuEi",
  "key30": "4uaC55kcjUqQYsM4tSE3dYtjuXEjXPrjdSxXpmfoPvhVhuSTqvporuELaJRyh6wSauxMV1qc9PGpdhzoya7jbWaD",
  "key31": "5muWQNkjRqmGVVDDrHh1J3kcsUwEEYoc3EZm2NDGGbzNxRnbGhURX7N7VjyzwbUAGjNzhyFB5ceyrkrqscZwKuC9",
  "key32": "4iqaWSmEC939VwdNzFgnGPuPuShZMMPsdL8PSmwVkuSZDCoLSiVXWDSW7C6oQShoVR2cV1H2y7YAUi1pHHx8WT3U",
  "key33": "3GWkLKsZEtMgWGB5GgmNyyGMyy9R38stmgwNUHvucRVVAFPSiDAGM2PRN2GUb5RbpB6qw9rMxtXjnAnyqbZKWDbi",
  "key34": "2GSbHi7zcQiwmR1jMqSWdiTvQLQaUKBqsd4HBde8pBvkavbewDYJi8wusb28YskhXFySwYfMwZryh121ifMrQQg1",
  "key35": "2ET1bRNDYGWsFwQ9vPMzdTLhLVFwdzxBr3DWQCQqSMt2yVPGuq1FL34GTy3wAwx4HjiFj6LWpbyzr8DvbQgXcCoo",
  "key36": "5QC3jUsNdbLxVUJsw6SmZKTt7GpXwFs8GKv2Mq16Q6ME5ZGLeeNDz1Tc3UGRWkkMNvWAmtyutZCQSPEby8DJ7fKs",
  "key37": "2jy77wv9UnwVFRdgDnZJtNkVP93G4oGrgYDGvnY6VbFMV7HFd7osggE3B2NSFbevDSLrTM2WeLHh4fz5Abfm3AT2",
  "key38": "66U5Ugg6Hn79wCH3S2GnTPTFrTv4EJwuX3kZT188J5USjfULj6fbFLWmEoePeQkuPwkSF5gcHs5ooe9sR8a4ynoP",
  "key39": "65q48hgSkAt5uUmxuy8h4mhSuahzTGhep52C6Lp4i75PDgpfwFj8jw3Sdpe3hiBj2WMoW8hueCAQmAJtdYx5agBu",
  "key40": "5C9wucPZetLYTvsZmgpqqdaFd3h2fw9n37ccraavZ4PrtD15UrEauMLzc5NU7MLsCU8ts4tUGQmZNDfXAkTGs3iJ",
  "key41": "3XPrPTYRGpoGd9T1pqAR3n1235f1rXnUvZG4a7Ny74mhdn15P1uQaygFehCyiosb8v26MDQoP586AGqkxas973ML",
  "key42": "PBx394zTg1Miu6JTowu4BWiTC1h8r3EysYT5uDGxUG3QbFMNxxb59YUuVsom3jyEzgoTHntTYdkFPFgurn6PQvY",
  "key43": "5DS1R8EQdZvekywNUgy8i92k5N9MFrZ1ZejxQ5cpXvXL6sN5zk8N3GZjhpxAodQdvkMBAWc7PksSWDKKEZM7ULv9"
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

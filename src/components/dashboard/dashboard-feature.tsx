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
    "46MXfGRTKcDEBMAucQrypsqXtHdjaH2kSctKQjP6SyFzu3rkdWsoyzEhY7HBWNbAGRTmsLMgJrQSZMQSEE3QryWF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGrRQYC4G3hGLuYFFwgKYHfRBnXNQgbZjhx2h62rZqK8o29SCQHhUfMYZ97RRnzaK5x4p4rtmpf1xJxRzDVdmDB",
  "key1": "2y2w4ec3HgW3FKkmMiVGxJwK5LZXztKbY2TcGPpNDK7yMXk4G453c11nFbTHd4geXQjSMJeXiaCWCcfcwA5RSGSP",
  "key2": "5Pe4XfqH2QSwDK1nsXJ2wLB1VC3xvMos4Y6QxtvVeTA3T8BSVRfW8d59K3DkfuvhDA6GWoFMkCMiVKhMh3xbPs1a",
  "key3": "2Ehth9yiAvV4FzBL4ZhBaGfiuJm8P6A15935adunMR5ULW6uog9LfTjfQn1Cq5zeRCdrvSwjmANZYrRaL9JrzjbM",
  "key4": "3HRkV7Uspfq6cioha3wxbzXJHC4ZW5VJi5a4aQgYD8fXLhBzPMMvzWQDuhe6NCAnjNvePztZrT7VeoVa8Gz1k8uC",
  "key5": "2pxd6sytxdKMkpCRdVpmZbwAF8fuaTyi2SvFU4qkbDC5tonRJnAuQ2Gcp3EJKrW1zupgnRh9K8rzuYy4zYeqs1q4",
  "key6": "39sH2EHfWLXwTs6CtcxbB5xDfNNxzJiTqwTtJBYhBHnsAfsi52eZ2c6iXodCuAdvaN4eUZgFJjo14occvycgRduh",
  "key7": "4UgMNsDvUFWYmXSr38imfPa6PVJCBx9W4XSURgpmW7jQ6H9TP8HgN1D7xZhZXmWvPcUZmaJ4a7QhKTYKMZymSybg",
  "key8": "vMu52AjH3sLaifjvpYuah9MZcgLdo8RPVCSeouQmU2wrkvHUsmtNYitQeyRwuk2YW5tbbTriQRBZ8GTdHpFSf3W",
  "key9": "5HKA9QVKXMwizzmMPB792k7Bmpx77HbGWVBFKYydy38xMNZXdut3z2d547okf9rdonsUPJUe992irVjsBnhVYP3H",
  "key10": "56nk6TE2uFpLLcZs5hvPHMqJ41ShARyWBzZYeHtpgAQakMVZSip43jsir6CysT9kkiWWRsDd6y8tDDdbzpHkwtY1",
  "key11": "4XRz8m3EBtP75oSUB4EwvZkxcZVyQNQKjvX3Rp2fv6wSEGit2fMyAHvUwZKTGa2Zm6ZBwoQj54Y4ZSf66pzrZ2bM",
  "key12": "g91rt5tZVzw3sVfm7EcBtyPhn98nhAt2xGa4FsnHHaoFGiKiXTA4U4zYe8hKKMkgxvH68RKNbhhTftwsX7xQbrt",
  "key13": "5JhQCxTA4zXmpEKZNK6hAGN4rgrrERE6naMPD5E6UTfM3fpwWT2S7WDU4nAdGcXHThqwDVjryuqJPogcJi9j1yXB",
  "key14": "3ko2GdCq7rtdoDFg31NrSwSRBFFYdwMftLUZeR13Zfzs1oAH63zQ6VyfSCL1xxdjjtdjKZz4pR2AxTtpXJigbeGt",
  "key15": "z89k454BG6tFVrLcT8Kqx4aueZcneVnfarzLLW7LNbNz8g1zaEZfG21dFSMWJfzz6EbeWXFSKe6FfXyj7C2Siok",
  "key16": "3tfJG8o25c1Pe6R11DmFZXPDGdqnqzFqNCDxtAFvcm6MamrUvGQE1n2JMQKTHrwEQ3guaPv2tgTtQ8eP5JNGiLZa",
  "key17": "5uUDLR9RN1HniT8h5a6URgR3ntj5bBfZQqTfjeDpdvReoQVASPz5nY7Koi6GPpFu49LKNSHQsAMUhfPuyn6squPD",
  "key18": "2H4sZHMwvkoVPFi6HKJrXVTLSE6bC4hXmW4FRDeLtQJH9RYqAci1Q5EYeX9LNy8yFmXHBCPXcAZcEvpMp4BEGnU2",
  "key19": "KdPRJ7f3CoXAVRHRe6vPSe9wP6aRv2mApUip1q2WfwZ21YkTUvqeu6fwBcwm5SaiTQmKEYbD5TAwEmcCcViZiUY",
  "key20": "SKze7KiwXPp1jTXsKrA6wdGTmyeat5TiDKymZYbjXUtvnw3Yms6niGVrAAe2i9pHH2t9Sc8Czis8qyLmW3CRgvM",
  "key21": "43AKPaDbsYi42ZpoAt4JeucocQiC2huhCaTp8CneKARmvHWkqk3Gcaf7a4aZgoD26uPC39cdZfitksWBxVwGxrxo",
  "key22": "3myqA9vWA5QHsdnkDvQcVPWHeFzE3MmJbfbrgucDuVLkA6THgP9k6WRRr1NPz5RDTKygnMhpEUWWxszKcUNANjsJ",
  "key23": "XU5qQEYuLwhxbNmTtFxgYQCUVrx86Ua8yBFSez8TPP6sdDJiScYBdScGKciU1D5H2nKFDCr7kWTk2FGcxMUZNfT",
  "key24": "JjKo1yTQ178XDae1C3zk5ty1hyW3E3R9rug6Zmgz2ZeS78ThzQ39zgxz9gn1kH6a16KUbDZaZjSegEcUVjWnxPk",
  "key25": "5MKtn8B34DnPyLUviV9Ht6iBPs9DmECkRZ6u2wrxzQ5cECdaRTFnxrLMzFSb5eNfu2CFrqxUB3UPSYMb2oBNwhQa"
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

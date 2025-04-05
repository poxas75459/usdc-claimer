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
    "2A6EjX19Nr524GDHZgFwpqCfavUz99GA5kGbrYH2U2jNx3buJ89NcpSdrFdwJCTR5fZ41vhfBvt22LVzxAUZ3jAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F5vss8e7HFxRCGsGBeCgwqssbrBoeiuGkhYhgtT3DuDvjHycBcgMjszLTVzMkJoThCLQSs8w4Nps917VYHTYrS1",
  "key1": "CYArncy7pj1Kv62nXehjMCoKSGFetPC5sPpeM4ZqZg5UQERJaY84szut6Kdx64pfvgfctsSE1cCFYH1Zm1NmukG",
  "key2": "49zM59JFxhRY6KKPjJZUuqRwxtEhCyC615hdCXkQx9q57GyqYwZbrjG5vqHyneCA39Uo22vpnW7SsCgaiatk6YQY",
  "key3": "5Gm9Vwjr3YSFa3eJFT8MBLFVkGVvybxJAgFcDqsUQZ5foBCTq1rnDjSXLVnA5j6U17sd6EDJFR5G4z4wcjZnUaaf",
  "key4": "3yafkGXKK6Vj5mua3MMJJHNYNEdD3zq5XAx27UmLdUC7Y9LS64v15B1b4BkH7y6dzoAeee994tWLmRi62qF65cDY",
  "key5": "3HpNYpqr9imeeQdVtm1s6e76EAtZHZUy2npQAApNjdfqXPMMk7BA9uqVr8LkVPRdomFZsfdBF93qGqwX5kd9pLFx",
  "key6": "5zAwQYqU1e5d7atUZtNTnGMamJB1atdPPiC7fDUZCgBP1QBLmwrYSTyo1e74VMCvFzYBzELSqmuqGppdHEvKy74a",
  "key7": "4YugpZDAojqDvdiuP2hgQBAgts1xbKg4YFWGCjrwFAUPtWk7VJt8jS4TqHVLtV9woxuNVF7QYs7UNykwU3LvhnH7",
  "key8": "2BJ98xCaakYHEsxjnBPPjGU5FCYHXtEvjqr1UevVB8KwKSmHK2mw74KsHmzJDyvSDcHEnjSWjTGzk4HChyGXyQF2",
  "key9": "kwVPrBiDa3Xqt5iE4zjJGLo9cbGPXju4GJrHnjb3sgSjXmDFM45n4XS928EYzC5fPjr2UNcso41eCKaqi4KzGwN",
  "key10": "fRgnJDrhEnY7CXnmfMzJMN3V9ecwmD56NRPJzhzhDkPoW7vxFerLMJsw8LmWUayVKVXUR9ifYdVES2WEqdSCybJ",
  "key11": "4FzF9Wwn5u7fiVMtT16EAk1saU3Q8KRvPEQujkn8iPizcdtkXmVzqq53UMaLyjh9RpeUBMDiVmr4FozrBrhkWohj",
  "key12": "3ND9KTkgLJBsJ5oNJoTENhYwSKr7qKHTEvJsnLseZJ5noZRc6hAKKwXNWD9u5y6u7TUCidENHXgGLtV5xGdjqySR",
  "key13": "3sWxuKHgRsv5C22h5DCvAZZGjNPPrGi7voK38DgghUgqDE6LjxGzMJ4KnpjXDTPFmnXLDKh9TapRzEgDaeyd5ekF",
  "key14": "49pwTqwjfj5f2fMpPVSukvQEUsQiMzhWcSKLKG6UUF3ZvvA3YCn4iQo96yrf3eDg8mACE6ua81obg1Xk5h1Z34TE",
  "key15": "2s1oiiKwg4FqLdgHN6TBZ4EfexyNMDr5v6mt9FfHdLmhEgs52dGR5YDQR43oZNSmw2Y64YLLALxQDn7zqJr8QcKb",
  "key16": "PGbwYfWhcgGCrcKtqz1KUv8nxXnZZAxkRGcMj5dVSuQU7xzdKu4q368KPjUWKJBtH4i7zvEK8DAs1ou65Y4FCBm",
  "key17": "58yFgYjU8unHDU185pT5cmMtqaSGEu8SXptyGzEyTLPVqiGeY2jT8UQMUuiGfiY8h2XJ1WUapc7uTFdEupoAiXfc",
  "key18": "3wzU8P9Ppae8suyX59ofsinTEeeQDKQujEASKPfeut5QZNN2K8C1F819P4kgDrcxYLtyZSB8fWfNr473RSXwHEnM",
  "key19": "QhKmSAjg8cjHxXWma8t6DUmaD4stNAVJRte2s1W7Ka6a26BPSD7H4cXZD589JHb88xcnKdSRuyNQCsogoB6rpGM",
  "key20": "3HYzAqo2xU7e5gjQGNciwne98RdJb2PQmTwE2HTtKrYZAhATaCgGYfdW6cP6M199MZcYXbaAG7sh4661rYjBZdpr",
  "key21": "3yT4M9UVaJfXNxDKMksQu6BkrUByWnuB2Xs79TSCCt4rXwhiMcHnJmzJzKgi9H1As4AiQrLDjgpE5Xfqzr8o6mXe",
  "key22": "65regkKzpu4uQWLUJkYF4gFGeVKUxpZK6HydBdnAG8XcAvufyhCJEoP14URxqcs2Juy2dJKxGTaXsHvj9LhptxH5",
  "key23": "54UUDQv4urfntMfsQRE2b6dF4WVtsUNHAUziVN2eVdXRZRyGesgfn5p72Kf7u2qDJTiQMBKg2qK19nAKaJPdMXVM",
  "key24": "62j8nq8SpH5frG4cgZykE1d9oA2MCqpqSmyUrYdtuiyfNQUgEoTUsxg9oMqsm7cmrTJMB8mJEcrkhb5Dwyu1VAjW",
  "key25": "2ncDVZKsx93nqwzQWGDyBpWcKdW3NdsxbSp3DthAXVGmiN8pdUUx1SufZd2VWfhYXKeDi3xLQfGth8sGq4si527k",
  "key26": "PS5yfQ9jVLEBK24FEakoeaDNnDfBxRLaUytBP2Bv6So9uryue74TAfUFLkXqDaaGn3cwGbRMcEMXptZkfxGFGpD",
  "key27": "2ydKvYoBM7tyLMc8ztN44j1fLaUgmasbShq1xyDMzipNhWBzTNV2GKaD2kF2xpc7GXgxDUhVqNRYXDzPdokWia4Q",
  "key28": "TkkTU53uWRVHW7JGQZFaV6sotRQHFCugrBJoRrbqegj44pXxp5MNXgGoQ9qZMS4wRQQEwvS733oj6t4Lev4qzDc",
  "key29": "ezG9z69z1pC8vrtYXkjn2EcjfnhPJd9yrRN31Sb5Xcbi1NqNSY54T329zXvSbuaAEp9NAUdB98brYugdRiYPzAY",
  "key30": "2TogBywkQkQsJZtzbrQgUPTubZoVSosEgdfKUqyRqewEtinvZxvJSA9uvfXkidRythg9j8T7C5c3jQTDCfrv1tt6",
  "key31": "DVZfZv24mZRsYkHat37f6rm93jSXEqeQCQRLtq5AvWGmxFZz2zbPPSsSWCS2DvPBzgxYnMntacv36HGCZ83LZ5v",
  "key32": "3mqQbXnzxWifA7Ery4JSgAVf11g73mCZVN6xg2JdhRpHvn4C9FukVQKVD9isSzW65ismJbMx19nX9fqJ9YQ5YCQQ",
  "key33": "2WpuNcG1tLpMBNAudiEYyLqFpimpHx9ai4wrgwLGzjBNjg56t9D78cKMJ4Sx8VYoowrJVLkbqZZH9QiZKcNFvwxG",
  "key34": "5sE2XU2oWJjdUAhbCghmvX5sEFyw8REaB9AANtrZTu8wjr4GtHrtTK7NBU6YDvseTf8rPnUnRqF3tMxyHzNJ1omL",
  "key35": "3fJdL17weR1PZhj3FTiCUYPDxaqMbffWiB3tfEf9MffCofkdZCDPQhsX8hs5LhTr1ofkUswATpWTCnUzbQrAfVM7"
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

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
    "3vrE3qkJFkdd7tyFC8RpwiLB8qisP9o2HhfNDQY8KcdojpLHPi6D1SiyN9KFQX4tsaFwmnkcjGYoqEWmWJ1GeRQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfdEN1yB57Z2WirHMJcmxGUidvAX36iqVu5Bn2S8ah5Ta3pYQfWkLV5CW1nkjBdaMm2tHtXcmq468xyHTsVqXVb",
  "key1": "5Q4JVVbXYC3vhig5zkEiALby9jwExAjFQoDE6vFaFwx3FiXKbyfwP2HudQTruYrS7DQyB45zcKJefWkxzNd2oxkZ",
  "key2": "2BQjuz5rYUavErJoiy1MA1yJTpm5fEuzhadWmCaz3pxWwbbHLqqZLrEZvNEvVWojDxQpymAYFNB8R455uMgRh1Ao",
  "key3": "2e6YV6YgZxjJBbJYfTWXqF4vfxUjkjhqsNJHV8fEVSTNcgY4pNs2pjeY6xh3ZzrkZHKMNTbFBZLA5RywPJRQtV5E",
  "key4": "4ELmcUWuVcYcC3oorqf4EdaMp161fmEUB5vYeqjDmGHPKmyDbPmbU1chyVDTW9eVoG1QSon9jLLcFiFiJospVYCx",
  "key5": "VgSY7zfXoryxYjZMgzfHZqz3NerLmJ7t26qxciC9JTQQ11sa5TqzvAgj8JtgRSKMAMVuWFtdBB9hHhmji2KWv78",
  "key6": "2YbE1zNnKBt8fXWhowWcpWjHYuckSLRkDVr2hAmquK6XXwN38HykzrB1PxnHLpP7sxKqDp1YaXkeXjJM9qyNuNU",
  "key7": "3YYBrT7ZYcz75NCZ2LWhoRwQY3nnNg8oNmimnhi18vSp55p7xcXVhPEgCyY25L8pQZpBMip4vbvt8wqpoyT3gPTj",
  "key8": "3Tv6igEQfDTLQWHY56HbqRV5io2mkjfqk3c9P2wkF9pNQE46GYpANgA3Np7nbus7hQ39Qnt78QBfeYWVpwcndp8T",
  "key9": "4QqMDw5B4W5qkScbUokKTJGJwc6LRAEi3iE2ENpPGFPat7dLTEvopu2RJians8HYPaZMYVmQqL25YgDXgzghZp7q",
  "key10": "5hvHtFEuS6pQjFigqLxaTJNMrDVDnu9aS194WRDHASuQFHmRVgfBmThzg7nx79mMseo8SM48qDmMvS9Dj4azA6E",
  "key11": "4qAa6vBq6hEBMeLt5zhJKbVrCJ9rKQYR6FPAGm3GZ1izowQrcHn4hJykPdN3BfxThhuZ6DBy3uy8WpEJsFiNsTXx",
  "key12": "2BHVnhuGGKMctbRKwtZVPEv1KedecakS42h2j2KBHR63GS8H9pX4LmMpJpB5byWDqhXoLkCNRge2Rx55nCXbZuXf",
  "key13": "45v9mAr5RqwgQGnPdThkZLgcertJJiqWwS58rhm9dX2F2FQK4QD5HQkcbGDtB9xNvzVkMFmXs5EZjBzTvKRjvhhx",
  "key14": "37gmJBsqopoP7hPoUsrV8hyhjoK1MxKbLmvTT6DeP5gEKGLouB1mnfYst3nrtginvZNHXVphyG5Lu3UmmF6tbW9u",
  "key15": "3jjMMcnreXBzm3yjqP5gdSmFySvzYZXvybgo9oVbAcjixCKJY6EagRfQN7xebHkdcu9DTQq5x1ENbLPyv1Q3i4Sp",
  "key16": "2rYrEJfM7DbRYYrSr1DWjQhcMvBKJuThEXzKhbQ1tLGJtpMPq69xrhqksV2Wa8wDaYro9sLYTsrrbpnoBP5uV5vs",
  "key17": "5KRYLhDUnG1q8ZKxiEvc1rQfeNC5pLfNoTZp3H6WtBcWF7fHssEhNyfZNyPuBUNRJJPF5GoZE2UMW5b9rFhNzmn2",
  "key18": "5cZ3WRZDP4zMFBFmyCtgV9PBEk3JpXbzBQsHVFBLZUueS44j5XvjhLEMsW6anWH6RGNtAYo1ufA9Y5zW7y1dhhEP",
  "key19": "3XuBTMv9f1WdNsC9Y6vzquNyARgSi47fCSSXLcYzXowSXbZCc5FyXFNRM9ZoHZxWF1PxqfGwS5Vu6rAbKHN8xQCh",
  "key20": "HP2CEC8RwmwqyomJX6D7LXsFjyc62mM2A1eaSasqZZ8ctcVJqvvBBECAmcXNvqNqQTBo64j23vaszSn16uE9pAW",
  "key21": "61xbsWNpzCf3tAgoqzPaduvjuD9NEiDmoKjB4fMY2Acjdio9HpyJwdbq9XS3PjMpnDJttEegZ8qEVWVGMfRUKeb2",
  "key22": "3KxSuaYLxNnEMJFGhv4UQNG6jApH2wPSmEgJ2aSJBycoMdSBRDF9xEPNvoCpGB1MUYvxV6L5QDAsiLNGPc2YBepP",
  "key23": "5G1njL4GvcqNitbTqYE2ar1WVZfCVuWrssJ8gy7yoi6U4wy3JUiQui5FSu6mqK2ktNcnehnjJXUsWDg3KeVaAMwj",
  "key24": "55MjMviAevFJnrCiQMTqusFM4qAkFmCL9PaShx69PaaXV9n2cvze6umB26fEyigHz2u6cfQ64mEKSnTAmJBaqQck"
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

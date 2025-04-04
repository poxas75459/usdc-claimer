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
    "5Bgfm1YtcWjP6KRhYp3phyta3xB5zkQBce3AjiHKsxwRfn4zmv8cN6XgccjBVYr78nwXegmTpzgznSnPKMbc2YrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tX8sTXEb7agQUELbb675zH6KprAWPu5BsMHaDCFX2q1MERj6ioRJWfe22aEBadUoTmQMkTkXyZVAtagBQJV1GU5",
  "key1": "3gbhu5DnLkxksVWxVE99mcL5jLemDmQFaG1gVk8H6odbkoVdJkJvGe1oJhLkHLuhuaismSaCMjqDcywX8F4iHzME",
  "key2": "5heq76rSuYW1v1MVdM6CrqqKWGUtfeU2xQqgnCsgqCCXMtdSxAR4zmTRWWjDmqFLJ7Wcpqv6MLntd5yVft3c7sit",
  "key3": "2YGKMiZxHATXPZNWdpBKnQYyaw1ZQLCG3bh3jsuAohT79A4qwfjF1sF3yVLHRikk6UXFw5GZT8zdm5yDZQQ6vHor",
  "key4": "33HNEaM4iFe8BnbTMeydeqaiCC1gSMRqw8hhRAwaRgdGa85ZnoRugBC1cN3NE1Kfwx8u7rgyhT5FA2SmeViXRXsa",
  "key5": "2dyCXrywGVuVPxwGgUY88H2MD5dsn8FhEyNRcH9eeHqQuauzkkN3hr45eAkusVyNyH76kxRQZQEB2PR9R617ojLD",
  "key6": "VxBm3T4KpWtP83UyubGSZ5YKZR8oEweQN5Cv8TnTdfyNZ62DNhxpCt2RMT4SGcrHJvZjhKN6LDSoC1VQ8DQKvDM",
  "key7": "HKnqvorhYUgvZDZNRZTVkmrdZVuTrrhACTsvppLS6eqk986KwbXxptgAsANvzHibVhch2uhF5Ao4SNDpsMUnhBK",
  "key8": "U88ueXuNBXNUuEKJ6ogdsBJ2agqrn5ftBVCYcf56ekYWFBdy46fmdqQRjX1mJUTkiV87Njzy5hfJbCt95Jo7Kys",
  "key9": "FVpwnPFThktRx1j5ZgcuoEzubKLYnLgKmV4zk9QrNsmy4Lkn2JWgZHutTB59Syeyf9b8GBtmNBXZq2ZvVcuwqbg",
  "key10": "evS9MThnNH3nCGqNgJar4dBFvcJid4Pi5viWT2KY9vjykp6zHsFipmqdXZDWRt8qhbMFPRh4Y6em26H5in34QdZ",
  "key11": "5t1nbSgFzTATGfYeMakb4zm1MsWnLSWh7m7nXpdFXHsJaFY5WFauF3e5c8EQpc1L8VoD2uHoFmLL8ZV3Tvxjs1tg",
  "key12": "42c641WYDq5c8avj7R62St8ae3JEcq73ZYyEeatwzKVGBPqTmjk9X9tsQ5qxAGzyYXfXL1m3wpWHYZBy9NCrsJNV",
  "key13": "2EG6jbeJ647omoU7oLWj4LFZLyvCbTdUjEhUcQNn2abHRLuqcDbgMyeDXJQotUF5LFoP5ruWX2wyqkzdix63DsQh",
  "key14": "3xDyaQSi9jHJvRv5CksXYzoRxQRjjvGjsm7TiAzGpyquaro7hYRGLGoaCpVNoxSTioACdZgzKnFYAuQW1Eu9JghD",
  "key15": "nbnBqHXLacnqdXgd83j6cNnMx23AG8eoV86uBN5hC4D6Vcj8x6R38HS4Up4oBvxB8rzwVkZGwByCE8Xz4qfqwWC",
  "key16": "4AcrQmiCCDRo1wV22V7heQfg7ZqgNyQUtwjtKL9kHZhfwdDygTLqyG5YFJjTcz5SCougcBhSNdKsbeGhCZfJWykN",
  "key17": "5knLoaNHEjrR6mo8mx5maNt5VHWyHrgs8NENyS9e6cBYNx5JneHRar5gEWbofk1prrhtSeZhkU2PT8iQm7CMuGcw",
  "key18": "67gvUd5iDjXWSza6DikssXDStmmrTV8T1XpyEGqcURP3Rz8DA2hv2SxLiK9N1y8VkZhbYiFztrSaWWvHNXGBKQCz",
  "key19": "nc77B7QKUU3zoKmDZzsa3X8afFFTastTALgLvW7GrqvNKVU5x4kGgrG6VdzajJ9dcbghba9Co9dGvRhhH3YzvvR",
  "key20": "Ex3PcY9in9sdvzYKyq82UZdZ8FF52Fkx5JYsb2o2L6owd7PD2bbZbbZo4twuTkhw2KT3zLYJRYvR4AAk2GL9dDV",
  "key21": "2UNNBdbdMU2JKjGELWQsEaFDEafkf4RNU3E4E5Wg1rTsMCN69u4hGLpqdMSjCPrYn7tnkiexMKELbicADpdEYhWD",
  "key22": "386vqKqgunCnwCH1xpSKxV2orvSnv4tMk3vzDiMGvK5zbGwW5b4AddJPRquHJCZaAz1nmpXtsCpXY9sC5d23QHZk",
  "key23": "2G7aRdLE5WTiBy1Lcb9nwdhBwfCApNbjE88YtNqidu557dKK7k2DFqynuUTzE4Bm7a6uWJpZrVZuMyJymN7a8iur",
  "key24": "55Yi4LvUvDhjR562aHZrN7nFjrrGAZq9VSoLGnKe4r9BQS6tXnzifCyVvMjbk2AfZwEi9VpAMg8PkTnMHEnL1EK",
  "key25": "1DJDCG63XTTzePUTiSCeftKy7ofLhtnHba1yHMCqxYBbNRPDNhd8wUXTw75iGzojnGetDnKVJy3MKGh6RyvGn9N",
  "key26": "m6bJToE7AU3DyDzTT2VaUmj2sWqQzk378M4N4LKGLPqU3LCxmGfhW1mVXx5wGEbwtXZBkiyQBJ1Ldp4yMwxVhFt"
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

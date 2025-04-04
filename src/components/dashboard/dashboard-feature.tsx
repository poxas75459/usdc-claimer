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
    "5Vf3Vg9yz65qhwjiEnaKJttBLC1W3KFzvjourXUacUzXQEq6YYfjt6UKTkZvQA6AH76yWnW7fs3vvekCjMRJ3PNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5STtKJiP7PiPLTvPGxxrFoDmtqFvjCNs8Zd6xTJ5Wx2YpNRA6Zaw2bX26j7ArJHhAYjWhqRmxj4kkzSgp6EkvuWk",
  "key1": "3cmrQwxqJMM2DAK5jXpb7NV58fBm913hFd9Nveb4hNsiKTxRe5uTMPXGukEim2QQyXcc1KPJS4JUU7mh5tW1r13f",
  "key2": "4YvekCfMsH94R8bBZ1xZYotag1phXduBUGsvGvacGPpEg6iFvg29d81bw7uwTp2yshUKtqxW62NHKw8vYpZcr2zu",
  "key3": "5fn6oMxt37GdqiAhNCToKKdMeUv3J49cwK2Macc7V32JuGEwVbQZePMkWSsdrotkp6ZMiKaocuzA7vX2S7RFjjNy",
  "key4": "KWRTdHExWcnMHuetQMY4DmDzMcb3GcdF1WarUMbqSECrQh2i2Rnv9ZaWbPT8kakcr8SoQ8124UkT15LqXPvKKLP",
  "key5": "4PP5wYWgsrXbHX8kzJGVawKdTdFYgvFrRA62QSMgXoitcWjbTpUpD2UFaZPyTREprtezPMbQL8WfTYqgVCN1ZPd4",
  "key6": "2zeGxFu15itX3i3TxUNpYje6sNX5GxgSnmKxpGw6QfUj3BaX7P6564KvwbA4QgXfPjQSqEGab6fkwMeio1aiMhWs",
  "key7": "3BYGLnYc5kCE7zGZD5p37gSVGor7QAGk5staouAmZqcdaY9M5M6LHKeq6D7LeRDTB4PaP3LsLuzUgZjza5JSKFrQ",
  "key8": "3FSU1AqPmp3TV81qfUtxHesFRW8p5ds3xP7bUNGbChmCwVs4v9uX2vT8NcH8CvQHhSpbZjuwh1i7FBaJCTVgvVB2",
  "key9": "3XT34WtKh5PV6dYF6JAYcXFJm2FqjevbCQLNP9vPqeVtsnNiDz8PijvD4db7guownK4Zvuca4FPFUdqgp4sVwkM6",
  "key10": "4F641eYjbJ2FuAxm9tJFvJrsh6Pb4BND2UoWSLquCiwVKo3Jur84XspaymmuNoha7E6PHZJaZagaGDh81Y8sdnia",
  "key11": "42ccSwpfceEnpngK2WAH8gp4fU5JyEKpsv38Pudi8V8K7hDQKCewMFVs711PonbtQwiQ6neAeyf43PybZdJpQhKv",
  "key12": "5Ampdu3ukwoAYomnARfMYdMqPo3cZrmzchAAyV2HKAcKHDhsrB8H2SgbPhbxLijYSjPe3imdTNECz56PWVogNWgh",
  "key13": "3eGbydETc9YEMzjmaXxfkEFBSrL7jZBNZKoSK9ybirzn2fPtrc9DZevSa7m5RUBTiBfeYXT7q9qYSdKBFm2EPN8Y",
  "key14": "PXRNboZB4zJSGYezddDHZhU1G7h43MHnwAVHR7BZpAbZr4vsMnHMXKqfztG67BwGityK2zfHTpYxYDbiDt7dd7C",
  "key15": "26g5eHYYMBZqnFdL3tEcNEwtjhkNinaDHEKQJFhzfQZ3QwHt8J1V5ebwM6DAthgJrQpz66M6ge9YZWYu9m1gJFpT",
  "key16": "2hSfVDodTi39aDBuf1hmU2mdCithfcijRCXiuQUKw4DvkF2zxv2qM1DUY4bFqZ2WwSMhcQpq5TBu3rXwbmm3qZmt",
  "key17": "277FvdAzvvmyR2XUkeJNoET1smRutXXbud3HnLxC87Rv5Y5cYapwwVPEuwak63p1NTBrkLTuTX4rSQnaqCCnSWhK",
  "key18": "2ShuXSmwWJuSvj8YFmudyDF9v2dtbPzHKp1qYWwXx2pEbGqRTdinwG8V5BP7Xn6Gg2kipjjSXowZhy7wc2idso6y",
  "key19": "4oiyo41U9CAx2rW3KdWYcpxCzChzc2i3j28gwDsCH1EzzpevJNYk4wxsATiSNqdAJuYuKPpAifpWkQLUrzNhfD2i",
  "key20": "4nj42reJbixQ9KFHtaiGp9GjsUbxPgqr1Z4o9FTYCE11vwsM7YJ5TYYnnKHSkGXvC3XzFi4GrrNd9mb8MNSHeUPT",
  "key21": "4W1wQoqiwkE952AHtLu2ZqQkZ2FBP2cqAj398eCrV2qb1zVaW21XYavFK8nZNbhqyA9JTjypDuQpgmiHzgLuL5Sv",
  "key22": "652JHvSzV8jbDjjxQgHRd66CtiM46qxoURFkxevdjBDVZfbyBHW7mSLsQgWEWVLGcvPXV5ugk2sbB3DSu7kbgJ5J",
  "key23": "4JZC7nhGtPRstuDzmiyeJd6a9JEiZxvNVosJafuAq9Y2vxpnPfS5o1rexNNCsD2dKELuAQfof4iiu1TFVRL1V1xy",
  "key24": "5Nn8Wvqo6arYbM9LDfg6MvhiQgizjYr3gLHaHb5UwnKD3gszp7cFoyVDVnNSqadNQpk5rAH6VMFaJ6ftpJn7b1xM",
  "key25": "2YaEGi7gTNuxJ4Gag5LNoLwASCzu13K5MLR4pmfETjxntfwDPPA1N5GPrxUZj6unaSrLWVPavKpqCmxJStuxZem2",
  "key26": "5s7gVFRi78YqhpPU77X7dQRR5sKV2GTfaQT9s4Ptmr69PFxoD2hLadKQMH9LZBZjGJ5yGUpUQp1mR9Af8ykDSbmX",
  "key27": "sK6M3C82fgdUUD1x3iNDRaqidQDBMdcnKzcFCGXXcADxWkjv2MqBNkHAfBWijb9GHARu8MfbS76Dug6MUNagvxT",
  "key28": "4UZ7qadKtjyjABEJX3rCJ9LBXm91Ld2uywxqSiEmb6Z7F4nX45wqMrS13hWqPbLksKHaiLqPoAbww9jtg8WUnqCS",
  "key29": "32d5PQoSJUkTRhZJqqmzoUU2EU59NozsnbzAsWp6gaAMm8ZPKvRgCzVG5tZUHkgHyeUykhcQBVyUzDoFaryQhxc7",
  "key30": "31ioTEcjvC4GnUB4bKgJ5E5kho8RihTEtyGERfpU5Sq4pgVqxqBYy1rd84Co5cZrQoraApNsSA1gsJidDbxMqjXD",
  "key31": "2AK1fby1rndkToaH1qQJofEhGgSfwQ4uULnsagmcxXenY3PRDxuCVZN2YxyAno5fsdjEEsYcTAExZ72whirqTVn7",
  "key32": "5ueak3898y2BUiRV2zTJpxgVzBN163K2zMDS4WnoN3kMs83YWn7kziZzDtn2s4yNbiK3hamx3AghY2MF86CKfS5c",
  "key33": "5YPs4D9ZinfJUjowqTvvhPjrMS6npGJxNcGY2W15em9ZstEfqwuN2D5K1RF8bWzU4h8iRfCwLDHJmP7GjXjxTQXQ",
  "key34": "4GdG7sXpzrbwaKu7Xo2EDX8ts1kFF85u5gJozKt1m8X88f68JSEDBA8ZRrGhB49qGewVo6q4RqzPQVJPwmJ4GJ4y",
  "key35": "65u28GUgc8rm3AKH3TDPf28y7Vcipkpv7Khf7eUXimRZNq6AQXcNMYwCcrbpStfkyZM9dzWdTcGhfhAgYNGkifyk"
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

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
    "XSLL49w58H7EbigvLGJAg8Ew1PYfhsZQ9wu23iS6ak8gYj2Sr1Bb9Tev4e6iyFrWQCV22SBSwnPZQk4SKeUEMHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anPxFj4h41qW9skmmk14AktLvDsX9UUJgAQ5MkqM6XQrmu3o2SNukC4fJviusHQQXzRsu4Ls2ydfJQ6Ucjfwyh1",
  "key1": "3fi3Sfr3n1doMcyXz15jazbqycdgukmZkYQamrhwNYdp5qdgNoHXaxvL5dcqmS3fh59aDfkmMvVfPJLycAzrQduZ",
  "key2": "3eqE5yVzdy9pQ7iPxXMEs5hU1CcbL1DMiDtf6PR2vWykmTPsVLnR6KMT4w7JH2vKwMUTmAwaLWE49raECnWKxs3m",
  "key3": "2DMCWPkBxf9BKHzPJkVcnHLfwQAejoDKuAMKvo6k64fkANyC8b5G1r7sp66aTp73qvwQHNroiScRaE98UbxDQDZ6",
  "key4": "2b7dA77L9eEN81DZxtbHt2HGnYJnyiho2Kqa8poiicw56ZjwQ8WNfEnDXNDBuuuD5KnDsZieksPnGuNuzfhNosmD",
  "key5": "nTSPxiFurHC9R683D5SiGY31f7j7jvTdBCqAPXFn2R5cCe6KWr2HErG9LqDTfgUB6LTD85ecVxX9oQmhWpimZaT",
  "key6": "uP84buroni1CzZ3S9heBZ162ZswMczyuYeA3baX9apFQsmFPS57dWdrax6sgZbetwqVysYWkhBTybcvcypwu52J",
  "key7": "5YFDSX4eWpUueh9fisiK6C6jXg3iWY7UutzceXygy8PUeMMyzvHmXeWdW3ofpPbgh2wF3GiJvA8zYrASMeEfkBnQ",
  "key8": "q5frWbB5YfDUt3X9tXm2wFoLKNaxc8ZpKphXWJrTwZ17qDeKPpMvMWQq6rzo6bQu2aYCRhZ4hBGmnE3ZurGPCe5",
  "key9": "5exRcac6VzZ5pwHJbxRQLWCwtbnjaDyQ7upwCD8Kr4G9qnmbXWsRTGAZHhsWiiuWgD8iQqC2VUiD2ZcxQwrrZZsq",
  "key10": "SkbFMpfh29V8wp97uGZFp3ZAigAFZ9HANV5WPrv4xWDAZbKrQMtmD3uBDe7R4aNTHM1yKzhgTxPSwZfH4NhVnh1",
  "key11": "3Tddo2FuCNGxSfg7grB7DG94aQTgLMjDoXGRU79XRYFYCs8Bdgec5ZuZ4UpvFae7va3oPsB7f5eDcC2hD3H366LE",
  "key12": "5FTWbUJa2pLPaMHrtAXQ44p3a4wNxSxGJiatXG54EuvjDR2QboeGaUvDbENprpwU5QYa9TT9fE2JwtmnbYS8PGE2",
  "key13": "4bQi16eWVVEbXKCSDdiraQWTDoqSnsaqV83FskXnWtuarYmq621DFkjhjx476dacACE2FTgDcXpnFqb6Jq9RthZ2",
  "key14": "39HX4UTgmyCPCak3zsB8a1g4onpoP2Udq9wtEzQyd6fYKFQvmTEsGHfGVhRxiPEyych4HfHpVXQkuvvAdRv3Vb8g",
  "key15": "4zbNSdWusZCMzccRPR1jdCU6Kh7XsjSwmhtGQjxavrgJFJnKXGgih8FZaUsio349A3Mvj6MPUU5AjCGPAfnqhuBb",
  "key16": "2zSsNtkFdKNDdB2bsYteuE2XAb6uTLEjqmVFfcrp5Hu1zM2Cgw1W4GGKpJybSwNm9TsZXxE2Xo7Y5xHeA51E8H9d",
  "key17": "2FCSVD2cCfqrVJQrcTPzUgtoukYKkDwwV6TLJKSwoNsZyNfp2aGsvn95sBNHKJWvoXAQfivtY9YHjGcsMKPMRzL7",
  "key18": "3sEpSahqDFmyHDJLgneQRK1tXZ8nJ1RR334x9JK55wTHW76Xp7dpFR9DjWFCAw9AUUa4qpptwQwoy9q89aohMBbX",
  "key19": "5rVLyYtFf6QAE5shytK8ZYcKyWJ2LnqDpah9zjMPZ8ZSPdnhu3V7h4UARHq4LKYEe4oSQzrX1BuamNKs2kjCs9up",
  "key20": "27C6Sd7FbqavsvWXSujgyQSzXddeJxV2QunUX228mWapHbRFqpx1cwQ1bER4Q9vS6LpJGk1BHnNUWNbpN8Qq6sZz",
  "key21": "Zd4o4zJndGfC4YbemXpTnB8ryZGnw5bVwgQobsHRRXQ8f2rciFk5SkeWNChqygHy9rzLWGsy48NBHarPWA8UVL8",
  "key22": "7kTQh3Eos7a28jQhcvEZ5g5cTFHrNu93nydN5BecUQz44WrtrHCLaWRfcQEj3x1a6ietDymZ2ynonhDYSek3xon",
  "key23": "5zNeiWTkCLCyKPmyVBws2ipJVRwcJZs2TpqDQxhhZB9QDkztJeKCcZjzNx6zDxDJZ6sNiHRpXDkXspkZSVmE6RCN",
  "key24": "3GGFeXNDX6SgQ5e5YLjSJWR3AuJmaixFvnR8Ci1bMsCWxDVRvouEUrhZD91KDzgi9Ln2FTFTEDSn1cGrsehdwB2D",
  "key25": "2eWBNLgbWw4sjL4hFpjgdBb56aKhw9J94bgeem5GLJ6nn5knwi1G1UnpKDKRfnXpjTKC8YCu7x3oatD9pjEVaBSS",
  "key26": "2tzBo5LH5EAfJy62dMJT4NBwr2MjrQYkuhCXrTapprqPMMKypF9ZS5HhDSGMUZjknPdW8Zg6SEDYeaxJFzzY1ZP2",
  "key27": "G3aXrq9AAwyU4i3h1KEzjLLbtBpCqHbq1vQSF4cFfnbgMU6HvuG4m3XwP81RE6jm1A8jXwvCLDjM8uquCvZtzrx",
  "key28": "5SKY28Yj5ovScEaeVZvyfpZEvaPSodKH3ZtHPjuadufUqYPzNQUYeMKUkVzxnWzdAPxiAHwGsaroMb4yoLASSSCD",
  "key29": "5fdDxGCVNVzn9THYimaFojyEgVSaz2bCFTdufnG1EYgqRNa7LoskdzWe8331omog5yJdyndap3gp6tNWtX1QaZDr",
  "key30": "66xZymA7VgHJgtP96Nbc16MJ5s4fpTgpxFG3b1HcurMRwvWdQZe7dKMgDGsg3hJyFZLhw7Kwo8eRqAMB9w5tct6t",
  "key31": "2LFNBo6vgPmHKfJdNgCr5UuPmAHGcVXr8emLuj5V6XK71FZ99HKPkXFAUPoRV4ZgBHirbmqaumSvXftvMQfZPNzW",
  "key32": "3gjen3dKYJdPFxDJBkNFxWyX5jqHcQvF5XqYxxX7aK57v4TjvSqEEruMBGFRuzr7f3HF1tW75pRNH1nmfQ86oKoB",
  "key33": "39EmhrbjtCodA4QEip8y7nvhe4VVX3mi88JHVG1ypUavwtwjUJvhor5a9KmQd8J7fF6obULoAfj8Z1aMsBRu1W5G",
  "key34": "UKgiwcHVK65AHtTNZHpo4KxeZKMAbAVyp5gCaoGDWDnSgvMjdthZgWqAe5p3cS93MZbdX5cKyUoQoPjsxSy7yA9"
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

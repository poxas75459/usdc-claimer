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
    "2neeHaUMuSK78MSrCeBNbkArnb9rgss2LzHi4QnDp3536HVWSw52W9YgtQZP2ygE8if1X3QgScdfoLCHqRRzuvyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sLXRoCF7WwotqqyT95ZGzEmaLvDk4NJY1ikTugt77BAiq1Xw91GTEGXGyqkSuv5M8KmDRis9Z3jrjYzSJ9661DH",
  "key1": "3KdEyfDe41WT2bkGLdHRY6PaTAwa5mX3TUgmxW3L8eJFYqhytT15W3S1CZmDUK3HV6tq4ZYAL5jYCdU6GLCEAsuC",
  "key2": "DY9cRjoi3SU5aQgxZMsV58YS7VdKwzEVrnnhWcG4yyg3QapEeVK5N7Cf8vdjaJ41KFwu2ayZionW3ujYu9BZruo",
  "key3": "51Gr5ojwy6wLEhkAoXrLnMryJHWN9TQP5p3Ta2NoJnoxXZ7XV89VHsCP6Cit5mSNmFFfQfuf9gogCpYDFhP92mLg",
  "key4": "3xyxueRd36u8vbkvRVgY93zYezHKfExcTwx9zCCJvvV79EWUpGgmP7Rr9tzbD5dFAUb8fQj6SBeLZyeEKWqew39z",
  "key5": "2uhvvRFFeVDTDCuyM9CXecnXGNAshc2hpDwreLQFcwoWgt7rcdJduidUYUTnYTLDMBMQ4vH77fUM8kc8y3ZoamZZ",
  "key6": "3cvVEmaEioGaTLVwAv8pxfqo3jhcEFDimvSRCy5YM4PHifdgAyUruiCuf12vnoTijVypq2xjLgzhE5r4cPaTTki9",
  "key7": "2y1xyTdEVcj1xR6MRfzYRKgj9GHKDcsP79mY6AxMaQ6DmhA4uB6CDME7ypkB6VWURwFVJ117bhWfNTcMKycRLT9q",
  "key8": "27YmbEtf1m4sUvLkLCBu5GfRZQ2jaTNNCnat7kH1GELwdbcurPKZQDp6SPott5RbkVKemwrA3ExpJsPM7QAGhXBF",
  "key9": "5Z2yYVJmSRtQQBuSUCY5GhxwjcwGJnfo1vGXGfYMqKq48m8FXaxTWWybVw28JzdzCbA57RqaFjheuNvmNf4RTamX",
  "key10": "31925rE2jeRKDPuKhuQvXHEddXuoDsai379hrk5hJt37gr8x8kppnqojFf3zPfBMWRbywDCgdF8SCLbNJaxpsvYA",
  "key11": "5siibC29ZfDK6gLaq1qyL8b4r4RETRyvVbwpb1wWKzAvmkdJtqwGiKMcVsmAfmU1YvuYF6PgWubMzP5uLET96NWp",
  "key12": "uBCzxuZWhararRkAzS3PbvkHQyUgNyc8MTqf9iy1knLd9VSV6mmoNZ6MR5EVwREMcfJ7JE1uekcqLNhtQU8s6qm",
  "key13": "3CprC3t9v8ZjJ7QuoaZcDAPGHea1yBhpZQYqMuK4wXAjxtmce7wRpJbFuUDYPXJeVj1nsHzRy6pQ3pASxY7oWjRn",
  "key14": "8aAq3hKPGmgTEJxJTMVmJuwoQJtSoRyp4oLT4Sjx8nDApbXYL1tSdA44dv4gDseJoXw8NinZt1RU5r3HhHV4thX",
  "key15": "294HC53HP83KQZcPw4RyyT1EtYiQJgbFzAj48VCxKzUwoHYrWKEgw1UG3P7evV1WFC61CfyzT1K4bMtE9zgTDvy8",
  "key16": "2uSKDYEYAd8PQo7ChuGqfpR9wh2MCRvNLG3Jd9B9vErSsFKAdTdrMfSToi2H24ZB1v7ZQheHC3XYVVPDuH5t6hhb",
  "key17": "2aRGnxJSg9pqnJgETX3kaXVogoMEugydfDX8XRkuoTtfQUr6Wf5zewUZnxEDun1jvUX9NNfHmi8U7NRdiYNAYqPR",
  "key18": "5amq6u3jkheXEvtYAifZ8AL4n41TgBnnL92eKf3cJBkWjGNKjHy942UDjxHeNqchDdjYQQhMQ5xQxymcu6xN7sRh",
  "key19": "73J3CZj4Cj8tMKd5zuvaGzHd2mScoW9LXjpWrrgbowZwcL6YYUYyZJwFtdjA4w92Hb9PfhrQGXtR54Thhruw92q",
  "key20": "4yiAKgpVTm2wuE6eNhgZgkLHUF9pYNZiCtdf2dqeJY1NAWH3feVascqpWd7k9uA9s75BuRrezj2S52dVDQub9pae",
  "key21": "3aiXTt5nkopvjdYz5C37SMs7JY4B7LAau7yrNkKrnAagx64oZuqCYbCEHDhwrmdapXpaHKNvNg2aWjYdQ4KLrfNd",
  "key22": "NBELHjP4A9UbHigfsckPnsBCTCzaAnvJVBqjxsoHyBD7Hy7wsYivG5E2ZbgHQh3FhYRHXAufLihZe96XeQM4YCy",
  "key23": "5zzGBZ1HW1q17ze2xRsicEhHE899insqpyQvLNCegpzx7jJhntwXQGPkinMbkgTrxdfhtPt2DkABbFr18rN6LsSu",
  "key24": "5xtssEXUmJh3Cy5Syv49dYX5syuCqpJS9pk7YJdp7JwKiystPDAWkrzy3baQSEHGCAN8wJMRvM6Hb8aBUW4v5hJb",
  "key25": "3obrPtDVmMEFQvXgmSJjXCXk6TR3dBjQmf4AT4DrkHRtwYiovYwgGZt3kaSiyStc4BmQ8pzdPoKwjQH8yocViE7d",
  "key26": "48kpF43No5zyJo5JJDT5Pttfjhc4PsVSo1pd62S3iaYTwttQtsztukhBpdcAyiyidesvDvazGhBiGfvdAWikd9FH",
  "key27": "5hHZaomLFE4dj7kQ9VmNYx3cojXvCRWAS8ki2DSrd3Fsr5AYMG5YPRyiMVgJu2An4w9EczWAhYJzpeQTUpiBTkyf",
  "key28": "2QLnSzKBkmNxx3BGja4zefBLYYXQzgnt45zNSbw3ERaYTrDNVk3p6Lae3kGThzyYqcBDKb5EtRZV2Ji64rh3KJCY",
  "key29": "5Ngzmh3syETGmetyXkW6reG5kyYQA3YVUKfA6MjKfRQEtiMNu8SYzX1XJihiV2HYHWLfT9GMfeKY5obpTEhvUFRN",
  "key30": "2FZhCViu9GG7C4o73m1VMhwxmxnjJHYWCWwM1duTvMXopbsArNChpbAzgSLMB6zKTUiZ3zKKT4BcqgP4fcjdyqne"
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

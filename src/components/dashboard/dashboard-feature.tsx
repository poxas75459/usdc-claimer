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
    "3jaN8mDJTJyg1wcjaTfkKctsAtaYz5hqRb33FPrX6vD3oDz5FaBqcHj2Q3AB95T5jGZQf5DfFnF29yRaMP6zyrMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fknFs1UdqGyg3TLGL5wEdH3DFHVGqeGsvJwBm15yntg64RMQnSzzic7u8nXs5Aqh7cyCDyMXFDkLZurGBniyZCw",
  "key1": "pPDhLBGWRvPMUBcQmXh5zRr8whTtx3vgaupoPiSgtjtMrj8tcaq7RwXvWvso41HFCqSqfSE8D5UJDYJyaajAC7q",
  "key2": "madhj4nE7XW5mAnHLUWch2mY1s7MiaL8tdMSEkQdfXt8RX68arRenrawDJULCRtvNNfQy7KfGbvq9ouy8NkD2QY",
  "key3": "nJJwETL9MpYDqtN4X2RXrvyTFDNaWrs4QnR3vf6RxPUxJ8g11aP4uxQs3jN1b1nojxhWRzbiRsLvx2ycbg6Yjgg",
  "key4": "4AJoCGmyA6eAWeJR1hkPWADqexy7MyL2L3rZmeUobFszX8FZ5AnETmTHGz2jEHKt2yLx9ok8SXvzaYJvBU7KbeBc",
  "key5": "3xKdaWTMAnZzvTQJ9sqtLiniiaCH5Ys455ZWfXvBTv6tBmvrWKUmPDjMBQnb18nDhKFRNYfykBG7Hm6M5i7k89Gk",
  "key6": "3AWXcuACUtvCC8SFiZGwbqUFmQ3a8CpYKudbo2R2bqAj8g4mT7Sz63i5AkzuRVtdaRgKpcwnq3Z1DiBDp78SQUtH",
  "key7": "SdfBRdwx9yjKNUUo3hna7FjeqATD2GiZmqB612AGxGYpCSsrjzcZRLajGCgDYLkQBcUyuAPa1UGSGfWPGaZEasg",
  "key8": "4e7krDQmkNm9dRa3FQMaZftexCBnZVTdPvbhA7XeJHdMQha3LkNU6anaVEsS82xkJHb3cy4C9aGG8jMuinPMtfYy",
  "key9": "2Jxv7BuGnwsRsmqBoJ3h4mLfwCykwB5x6jJdxCNTQMzWwri1CxSoqKw7eLVTp2TSVq71Lb4Fp9AobwhN3HCMxafo",
  "key10": "2jsM9TMLMkEPfpG4NKL9Cgp4kT63Rd1aggyUhCbA3GttUK4oJizf3h1mrKGjJxwf8dRfUhcqyV4ftMwxSeAvPNpB",
  "key11": "4ZB4gKXWVJJrEg6fCiLREpRbjQafE7y5Z1uCyQeTinbKoi1aLwp4p6hkbWKCagPjY1nBPwWfpMc5T4yDakMm2dAZ",
  "key12": "4uspPZQNXWVytoocLZnZVoUbBkHMkNZmKHUp8uBkSPMn16Miyf4joqRgV85QSnJLzfoVhC6arZ7rG4jSamVZvGQa",
  "key13": "231YQadbdaNTHpg4BK9u6B5Rk3PazKBAcMJddLxriYpVpA5aaiT6vPm4dvizStJkWRLr2AqCVKTNqk6Gn3X7Hxfg",
  "key14": "4YWCzkAoYjs1AQiwsbFqVxkGYyn2MGMzrgtgbgW2NGU79rLUGp2QsYdndjTtbVTSjWymRnYBfapWnbes3oUaGvCe",
  "key15": "dYpDjoVYUFPmUSFskEVyQcs5e8pkfB77oApZPhnGfQpwLLZtqdhRUq86C8DkEEtq1XQ9iJ7KA4sD5ZNAHZGLTYf",
  "key16": "47hASrQZeWrWKgEzNH7auUxZWHWzDJcNgzwBu36YauWQQukZV9NbRBpskv98yhRukQr1Pi5UJZsTLUiVkEppfJau",
  "key17": "2e87TKyFFD8kgfQx2xgcKe2D5agSWbD7DteSYXHLo39dLawYsn8Docg361Zqy1845ZiF2c6MtP15nJD8rzAMJrSs",
  "key18": "2hruJUMYsXKi5wrt6jaUGEFXRqTtyvrbWs6tWpiy5zqEkiui8jvkgv9sSnm3MVC76AUPfz9cbjd6gpzRyNUtdpuC",
  "key19": "3quF6qaSLxTTqnL9zoXxGcsz68rnd8i4d4APmaeqVxVPcX4ABiuSgwi26hsi4LFv3WitsouJP4P7V9T7NpMYnStT",
  "key20": "4RUQYYVJch58cGzfEqRf4kPnmsSQEE9xjVYfjoyNxTH6JVQyZkSw7tXGGSFr5dRtHJG7hFjECSx9XFQvPV4W9Dyg",
  "key21": "4JXBHzMqipEvwZTQVsjqwt5yotuDRkGAHM2RneCwibSTtvXtvdA1YBPAVkSdacVeGtDivoaeMP5zALSBNPuwksv3",
  "key22": "zVysMrGUSSFJfuLBieUMwn1cmm2rbqqiTFwzapK7mmRgi1avtRupq5mzrhx13AWzKJzrcKgcxdwhq5bXBNh5us1",
  "key23": "4XsFSyJGEbsqc8LTxNLGXRHdkBwzGeBim6LNLjvcvxaYNSx6nxV1NRKwZnPZhywo7LzXjfTXZ3q8W4xQC4MyTGMJ",
  "key24": "2cZwK8mH1gjAD3dCoCSJ6MfhbHuCr8ger9jFBfdJdty1Yv6QSxbx6JTV3xdnLyY513vhua35C3zUH6aGx37VDBny",
  "key25": "2QBY1vduGYMp8fUMgsx4ZJDRPX9bW5rqHhNH8WuxEhW2E4yVENuwxTCL87ynaRJ6xv6uE2URfLqncyH2KjcwWEDQ",
  "key26": "3JtWXpfCnMe8iA6GhZWVCEpYeds9TDcD1mW2hsEYeCgqq4xBY2UZYjhMnmooC3YE7Gojg9LoM6ozm4pQniT83B2g",
  "key27": "4vMGBjZ2hYs55ofEMX8fMfkXuSmu3gnAy3eR8FMhFieST4hAwH5HeUmynMT94wTQpgp9SNvsgjneqQnwvKLcaAN3",
  "key28": "4PCW5NtVD6vEcrdtqGmbV2VyC8q1HWJC28X1JSxm9NzTn1jWZP4QD2TExhfvVshAiKCqrtHpbhZdmdWo6frse8SH",
  "key29": "4G49HoGAp5uggCPUL54vw8MHtSbeXxvcg79qkHKdEUX6w9jEzbniLHsCLLkW5zWn7n3HXcPkk3PRUsu3SrADN6eq",
  "key30": "3eBFzdgX59jd83gUP6RY9dogGpuVgfqC7opJenaR3zmXFD9dRYHcySb49bbc459ojGXr3PUogJ2Ks6voLSbSYeCL",
  "key31": "3uGYSzUtx2t5rmPoQinmB8FdCw1UryeCn3vLJsY4NtwgJKomSaDxCTjQsfxaiWNxUTi8dzdNXnNnJ8Vr4PEBTpmT",
  "key32": "2Te7vwsL8ZhzH5txYCbeBt9rjkmYtRznhF71EUiWRQ7tX2iAwpsWKrEnN7sxY1LErEHcc98nFfAJaiQk43KiGDzf"
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

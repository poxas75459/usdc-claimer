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
    "3YTCmqcBFvFyXPEUNsWzJToSH7d3wjPcC8gwuPWVkGSkVXuwvhHuh9UKJt9u7m2r2pMwbjdHWP4WYxs7T4g6gt4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z6E7j6ZKkM9izPnmuHBrFbAXrkBpbMzEswVjfMh3mGHPWVEbQVSgBAcGby32fHDKEK8aQJuX5ykNe4DUr5tGQXU",
  "key1": "4ghiDdLEuWL2Cuxy1ffX9xp2eVuFozgShia6Dkd1UoGWYZUfVc4rc5jYTAtPCv2sMvkC7ai9btMKWjrYVSEXAn5",
  "key2": "4utit4wy8dkDRc8P5Cv3jXr3mrWwppEk7r9AgoRJ8jWbLKrgkK7NZGLjsNkKkSWrKhb1LEiMcVKVojaHuPWdSAYN",
  "key3": "5XKCFQXnMvRGcibjMQ9ed2SvxS2P5FCnTX2pfHzFd4G2UoTRot32BhkMNQtpNF5LdUhfMYdfLZwPAWHvHtr9EQZz",
  "key4": "4qJ5bf73CTcnBbc1s9Wcqxb5rGAnvUrVr5Zeq8oCBLpWZ3MJajcxJ1b6THqt5aVYBZW7DkEGanrESnQLaNHxPXNw",
  "key5": "EXH7HxCVSh4BeG4JkXKjhHmkksCqxzASsZdvHGt1SjTcCDX43b84GumwWF6DrBu1fBY55Q9hKvKTcMVbiL4aBQS",
  "key6": "3nNVz47t3kdcjY35CKiYefkFdMAtDMBVVyXjmFtPVmLoaZ9QrsCTGviyGaTR9cuvbhFqJGH7CuzCxCfaEoELZq3M",
  "key7": "Be3TqnAiwdfyQTYrHV9qmYwWY6U7zvRW1oiC3dRXT4TyiEZAU7iAU3oBCKqAqVf7k6YYnLAuSmPTGdj2wu49kJ2",
  "key8": "MBabbkLUQyBAdjn9B26nE6s8i3J1A9oBhxgAw7V782fwfmDcXQUu6Soap7yENDcEkWUhJ4Yexn37XVj5ao3vYro",
  "key9": "5on89tmJ4p4YCZHHq45wdRe8QdLFftPJLVco3DAcDWkKVYqL9Z2XAuSPweruZBb2Bcd1wREKeZU9eEvwBd2Jr7E4",
  "key10": "4d4DYU9VpwyMS3bVQ6nwFHyLuELcWn1TAzh33vLrXFE9h9m5xhFMrosTcg57DmjKV1PrqWZqezS8DUKrZNh8gQFj",
  "key11": "5hA93oaSeH7uEBjUY7dKDRVtfsNWWAn2pyeUPaZUtK5kJLnradA6VWo6c6M6yboCuEK89oHYJ9LTCaFjnJa5XU4b",
  "key12": "5sR4rR3NA1WBLqLooJ9HqjCjSnYUQEcwc4TuSboonuhTCwNSKSdnC2vtFUDZwZ26XZyeCJxsLcgABC2smNZTqgMt",
  "key13": "X5ADwSp7jJpUGngWfwUUk8KoKShtGuZoptjSXnPkmgAo3ff2rW5LUhmFMgd1V2QL6w9dgEVDKaNRfTHPzU5xU4P",
  "key14": "3XXB4b2SZRCLkUvKq2Z24PTQTXuAcAF58AddZYvQ66WTXST3BscEv4NqXn1xX4bYiWZs5fRvy4yU1k7G9mETvDCE",
  "key15": "2RWTh1mDvrTPEbSAQYWf7ZrCnSVHmS8WCSNnjZ7EQZ4NHvzJV8TC8xncZaHWooRJJB6V9B83VyxM6aqjkethR6iM",
  "key16": "wRZK58894Uiu33gzEWgZKj425J7pCrbuJhmKn1Ei8uN7grtb5JzyTm8hVmg51Yeim2xrxWBYuCS3z3zJ1std9Lo",
  "key17": "5YARnr1fziq7dRjcmEDPEueepxdjMmLDQuBUyi3oGp79mPJFqottk7trxJFP4FwMPH42zn8WtkS8BSMj1ee9DUtf",
  "key18": "Zxq4c4hM5yi5VhUM1Nz9EkZQ4MVd7JJNz4ykCrLCqcmMN2oLd9PQyRpi36ZB5FfiZtpVxKqo7WFzNHCAShRUKBp",
  "key19": "4VFk5LLtVnpAvkiMPehuHpbA6XT9Yh51UopooagY5tU5q8kSKYtaw7WaddNBaVEnyabWXqrZiddMrU9SPRWx2y2f",
  "key20": "4NTrGPgDrfe3pYuJMrGFZ6HvF1bHWkaiyfpzoQhM1JqaAUX6JHhxBvKeAuXx9kxY1B54sDV8uwg7LHbXaYHYS7jW",
  "key21": "3P8CvSksZzXscZR7bzXrhx44SWQhFEAc9Tt7ZPechwERzDS55Gy7wcN2V7uQim5tg8hptH2ooD67uXxmpfN2qGcX",
  "key22": "4R4CgS4vrmwMGXhwS3Dwzgm6772BTxZZPb4CFFakkdscR5WuEncmLkguc9bXtqnbSpZ88Vqyifp6ddMjmThtTkFS",
  "key23": "2oNFBfX4rpRBPHv5KESTHQt6BMTaNbfLHy2n3pTBiTXpoqs8Nne9ben1bkEMfVZJg1wc4nCGi8rQo7u6kq5Nu4pt",
  "key24": "3jB5hsyssSCCgvUAWhJ1aymepHV8xWt1VjQ6QvR1wKzAk3hHXWEQLmCyhHtjnAHAzFkRx27BeGAdTYcKYkCJSy5v",
  "key25": "3ZMZ9ophuonfCTZ29RG7JTusBTMudMWu8agHJHoWgSNcajBrwPP9Vk5o9RMAZxqNTvBKpG6nFPtTKUK7Mn8ZdV4X",
  "key26": "35XkJ8VsTWJoqSQdPERe8TgcRa4rs371XBK5einUZJUV1G9UTMBmTrwnJyfFLrNWDuBAFuvngQqTs2TZ7rnEXMcb",
  "key27": "La5tW85rCaNU9nESQpfseBS9Xp9wNJyw5ssHCon7ieUoLqP39DSVsWNwX4cgB1vmRwMZpEotSG9iasxuqLLdjCy",
  "key28": "5CFaujKV42tHbJah5Q7ekBgva5fPXtoRGu9A9YxozBjKFuJ1DJYY4kJ7WR3H6uBfrFJN5DcY8RPQNRjJCggmQQF8",
  "key29": "4cMVgi5qFK3fZ5RY4PSgGn6kQeHoFySFSRcGxKKmzYRPmpa5KZu6evD3hZoZ66aZ1BMWQXu1uLb9jTWS68K5PcRa",
  "key30": "htRnrEcEN5SNXdm5RHxcA4PS2BcnnnnTKosR3TV8tB6WsqdzF8drDYBnoL3v8MHx2vB1bkHvRnno8vfWQLfUyyz",
  "key31": "3YpLbvy2havGmnBkueGLdvzFYAHNmPqzzKNzYAouRNLY3obse8RUjEiapWcQNZxdze7uzwzM74BvbAWTUzKzfC61",
  "key32": "cT91qVCUs6Gwm5NX9ndXanNQzc2NxWeixK1oyzfXLxssS3tVxg4ErRFrqGjCmRe5YTX8XYjAar86v6EqDcvbta9",
  "key33": "5JXTKzLurFz5PHbXiBbf62ymBvFpdznHh2sGzABxsn7rgghdB5Sprt1kzbNxkD9trE5rGMffoq1yLCC8VGRZKrDK",
  "key34": "2JyyMWTbWQZC8VGEr1YLrY1fM6MAkcYrJAgSms5EFJUV5syZxgizszdJgtmjoAoy7RWaTSrCeuJsAjEyqPuj3UV",
  "key35": "5bVyj22N6TkmDAtpNMx297VfL3mJHFW7w4WCXnZLvoys5J82gJU9aQMVKDDKsfMDyo9Y9yKTdiifLHurAL2KYMo9",
  "key36": "2G9CudtKg6czgaEVQg9xk9uzzZswqjnA3abvEZj7T9o6JzeH4D6jDTtn7D1QgWuiEZ4QWhn2oEbPGe2Mx8ALRaNs",
  "key37": "4Ud22jrhxPAGrY7jVmBLjwCJSkq3VLD16egQMaXTKawJL1nqTFff7e2tByYC2gb9vnPakcEWNykTARZr7WMQjqg6"
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

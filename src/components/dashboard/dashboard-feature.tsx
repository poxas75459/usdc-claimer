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
    "W1UmsxfWXGZbTGZQnLwoZVFJwVgCuyyVJs93yNwvNGJgmaBAcSwWyucgukowBcL6127M9C4QvvRFHVbiWmZqvm8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fH3uDwzysqqvg1cSjyJaEbvBHkGViKPcQpHLj1Eby2PXMnFHc8q4YiShQdL77Zv9u8SwDQgohddNHLVsrME1C1",
  "key1": "2kPmH4tUUgHfvRJxWY2E5BQKEaeQYncaQVrmmuUwtuhbSwRj4KLADV8HAbFNvF3RbgkRUEQRM43TF9MvPg2w3CZu",
  "key2": "58Xb2Q18YddqZT7tXWpgTsvJsEnuQ2oVsKgXWrCDPUu9YQ8xBHhm45B3k8sGrhEmmuaRPuoPzGWyGud7Pv9mn1tg",
  "key3": "5LTE7R6SHNdjMGBtJSdrt3uCAE8V5kn5NE8gpmMHCEZuLghz1cc1CTha7emgnMTSb6G1Kyo8uPn711Cdk4SuB9PM",
  "key4": "5P4uWmEvSQMAW6gX33U45jDqTpFjVWkDnurQ5K9sj5KbUy3Gw7Mz7R4vTSHcir3bUDYSvTsFB5iGWZo7BbHEWYox",
  "key5": "3iFzAAAFK6qyyGthfv9MgyAA2wyLhhTkb8JDPptdfbJA9EoSFW6X8mEtAjG7cHPNvrb6dcFwWDMCbFVz6Z6EUjhC",
  "key6": "5RzbwVkHMo6mwq1YUsAaYT64bZ2LGeAoGXvqpNewvmfd7NN9HhWrVAF3bsZWPx6fXJZvUJYuMoSCcw8wig13q2UN",
  "key7": "3wu1nwW85JNgviHKKjVBnw5dhGThGvnxBqTRLy6J9cTr2jU5SA8WTeroBnaTxBGW7pPGcUfPpj7Mfn8wJWzwmQ8Y",
  "key8": "55JhxySDKPJXrzM2Dwywv2fdL8ekuensz7RDfa3kYoxsJRTVdyMtjaY4j6zcoQRKCEng9cQSyarasJkiBTZbzFUQ",
  "key9": "3ruY6st2ULVRC9Wyj4AQAAv57AKRgGQm3YksqncXpKZu4RYoq12L17HKZHE5qNJyGHLhfoZRfmnmcwEgckrA5Lxs",
  "key10": "4UJYb5wJP2v8WNVVhCvueAy3PESNjtTCbv7ULkyz78Zme1V6Tn22LGbqvZcLvkG6AvxSKPEsKj437MirUTpViyoh",
  "key11": "NqM1hsMJcRjT9ZszGEXZ97MtE5EFAcheFJXak2kwSBbjC46wRaLyGnt6YMTvhcxG7SAhyaoFUVTohTHGtRfszki",
  "key12": "2AHyuA2hMscirXTQSasXzvhPsKvfXhtm6QkHhuwbfEFDjZJCkGCxvgPnH7zw3dYgJiinSCoa4or52odANS9eD4WT",
  "key13": "n9fNJBKz1BG2jyKGKr64dXQ82uGFJdnWvd6h9ZsVt9iS3HpDgCm6gPUEG7uPkcvoLyCbHmCdEqwnbw8GuUjTbst",
  "key14": "42JbKmP1BiRmgJHCD2rUdPmXUV5TwjXssaeYGDE1BhTFb2AwPHpWPd8sgT66ADbrPx4hwt1qATiXSjH86NZApNx1",
  "key15": "5YQgAXe6BP27xxpNYeFEACLnQeccigaAePKmPyQ3ZAmMtt1M3vHnyWpLM4W1RYnhgVDEu7Gufwdu98qNBAC1htCk",
  "key16": "5s5KYGAdqtVP5UURCkgNzk6mCd4Y5wMjJ757dhZe5rQCmKHzjU8k9nTRiycaBA1dc26YEthtupmRafwHjVhP6jYo",
  "key17": "4nPKkppSAY58sg98mjUqUPH83439mUTt8HGEMtiLksLFyLc72D9Tujt37XJbNDchxkxzo6fhSGM5qQzfYgiCxbv7",
  "key18": "JdJS8mp3yiJn9gAmwMSzHLMXfANCafWZpWNt5miJUKUbrJBNgxyz7UahAeAY4LqpVwZqXj23FxkAy44tbUrYqf1",
  "key19": "2wpcx3gqeB4HyiTLCuFjJq44tC9L4nMi5U1qsva4upf4ThvKxnaSnh5vfcvSRb3B5b1tc48mLzhoYcn9ib4Vr9e7",
  "key20": "a1sUZcSC4Ews7jz7e9W8d8DZBNFN6ADse8GGLbWpfkamaCqWRCxWCvLUbcQ7C7e4NoHKJLR5bTnmWyLR9aJYB9Y",
  "key21": "66AdYFL47QkFcFwApWwMhQTVpqC4tRu2MPmKJKPmM8Ppc3ZYGGJQAdkp6Mcx6xADR6jJWe2xQEe1sWDaCL9HSJaf",
  "key22": "5h1Wsyo9th1HmzXbjPdSjCkGVMPw4s3WyK9eqhkoL9LxyMdsFxRk3fBKxmKD4TTWMYpqp9rRSbcbCjzohWQa2yEa",
  "key23": "5RxwYJ1uDrUq1oiHpKbVqqR1tBrHzHj34E8Z3FT7rqNspsbTxujHaJLwnQXN6b31qWCiGkxK13n9jgL8gkoyZy7B",
  "key24": "3vWLSwGGbnBKTZEqr5zY8rsGezEvpak6Nm4et7T85aktKsviTJHwRnih7RyZbuXitWvUZHMEmtYauqT2zVd8umDB",
  "key25": "3hVpu1xv66BZF35fCyZgQBrN9LcSjBbqHmWNX7Cy1j95pTFumdYvQ7xtFS22Panqhr8gMTPQiB6BGBkXzbLLRoJB",
  "key26": "3ZUPyWMzsiUUedWK89LdnK7fwNYsoq7WY8y4x37gV4uHm2ogBYgog3X1QMjm9eWzKth5rggSsvLAojNfZtjZ2gis"
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

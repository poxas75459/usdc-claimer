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
    "2V2xepTGcuNu4fNg1hDove8qdRpviQLDh72VCQ14V6nRFjZ2oC69KabYYEymoUvN2qjYEVVoBNcVz5haYub77zPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sHWGsui5vv6BM2YWNfeSff5uriC1JunrLBNu69TXHeT8dgzGZZjp3ej6Tzkf3mbXQYjCPzS2ry2DyCmqUjMyefF",
  "key1": "3rkX17Mt6AjJFBfSk2hUU2WqxaK1XkafLTANRCAVgrfdP8qRAAtvejUAmHfkkDquMYqhwbBLRThqkdJh9i123Yuv",
  "key2": "41ArTXkejtWmBG17hn5g7C7hkzP66HJb9yAZMEavambdp34YdNrv6KiQ4VLRUtKMhAc39p7Nif89iK8bS8pRAfaQ",
  "key3": "JF4NPFkFLM5ukvyhH5Z7R1Yic5829HQTscs5R5sto8j7zPdwzF4BAegKHg7v2zfokov9uxYeT6M66CpSr85sPbZ",
  "key4": "ZgjAWRD98gUVrnqD4txcepLmaqq52EJv2E28S4va6rpdomk3UCL7wNwM5sUSpw1yyykY1pfAeEVLd6dGB28sZzJ",
  "key5": "4b7HQvpFsg7hcdEUDvBVyCGcudZCLeaGY4ZWVV3ZKKBoCjoYnhYVSSsBDVLF3vzyphgbm3APYcUyuuPDZ1aT1Aem",
  "key6": "2Qo5SXtdqR1EHC3GkWmQQMS8iio3juzgapW7Szzuv9QkTbtaVwP9LR54Q4Jn5cYXA7fN1XCGENNKmJ221rrnEPT6",
  "key7": "3jbjd95kqDbq55mhxKX4KQDSu1o6b534gwYMhSA5gJsukCgCnT417A3Ntp4FWZ7P8yPZXeRPx5b9Qm81k2C2XM9s",
  "key8": "4QiDT9CDziPsPbs9HxLvzuihZKY7SG1ndZW93GdnErrmK6zh1vBgUxjS1LPwrZpg2GVUspRtydy8mGDjATuuXMXH",
  "key9": "5MP3QgXdAWCoVpTXDFT8ZbttwycSkC6E4hMoZCNPwcDxnBZsu8qK4qzfVQeuYfSEnBtxZCqKDTYh8LDXSXCqo1Bd",
  "key10": "E5f6cfqXqCh96EHUbSqio3yWCiVS3j1AswDehoDS5ZgEYMXhsksQDgHA4o1UqfoAoecdmcZLVAhpLzLTvBtHSW2",
  "key11": "Qh85JRukqdX5PqD69zjorjW12qHAqWgCPBPJ16FHGVy14KgNT5WzMk5GHdZmCvtcQv6tLQW265FeqdN7AHADvKp",
  "key12": "2gyTUwmevgEGNkrhMVToWzCFRqaawTabP92qjap5ZuTjvnfrS6tFRXoPSUXWSAH3vDonRV7pM5Hs2zvQq7DD71Ue",
  "key13": "4ettWB9R4DP4EEtEDsPHsj7BMFCEyAbt2hVraw3SesXW9Bda6XeCqfDu9jr6mYBj1sEcAXnutxtwUCR8UtrLsUaX",
  "key14": "5rYFypx1X7nG5coZXnN9sQfG5LoiJtvh9SPvqfJg3KkHZTPRzfd2wMDKZprXWHY9VivEuSpvziza4QK79yA2bQTw",
  "key15": "8F1FFXEDxSbw6yMdqxCCzxZVnMhGVkgyVNKQq2voS72z3dt948CSEKBKjsjS6sXo5hwpr4Hw2mox75zFYLZ61BX",
  "key16": "PY3TMgaQngfKMSxYmmkapxEQdhNctDthcFeHaB59nijgparW529AGNWb6FxagsSaKDK64ZTzFZ84HNHsG1G4KSo",
  "key17": "3pf2E18iLcLiWZRxotZsoN7YftBGFagmpkiVBJC3rPLdNLgXwiPzDqq2jo6VAdc6CfuPV6YkpL8rFw7PfTg8ERTX",
  "key18": "2D6ToAyxBKf8taXF2db1hmgTgj91H1VCMrxnFyWhxJjhwi9x642VHwHWFfvjX8BFZpz8ZNzDHWJuvp6xBT9D5kWH",
  "key19": "vPK2QPqMNYCkThUKs3Ch6BLS7tWii9a1f8PFHGJAaz5FchfCWisUp1TA6TiSms8GsdCx9oXqbcYDXF3XRNp7b39",
  "key20": "2RHaPhnJ1XArraNuMgEngEXxAB3SCsTYHoU3mQr8XaofRf4ychf5M7HnSohCn4rErCocYEjDBgVXMxXQVQnQPNoR",
  "key21": "V8b592ocXin851iKDNkCxxn6FKthw1prT6KEJLdk6GCQBY1o6Q9WmD3VFsa7upTHsJmA3bU3RLjeGWE8bT7niwj",
  "key22": "3dbDgbL2yBDmQjDnkJDJqBhnGouMwuieb87s2yhhndBL1Qw9om1YBsYgLXxKaUqkcDacqnYmHNyjTeEu4GEjAo33",
  "key23": "3Km8BGfJK3m7WaCuFYUru8EPs5Yj3ssRNtV7ugBr4Nqv6AM8MnjZFH2YNQpVutYZeADgJdbYJZhZuRj6pmc4n9KY",
  "key24": "2sRHANSQPa5awK3jLYTKwqQ8UjYPLrZSMmTV5yEbh6vcLVCuFvCLo4Za5uL8nLwqP6a1LatQJoPtYju6bPSVtnw5",
  "key25": "4GiTYBBbNmRD7gxvuHnNSphF7vc9f7z3ToiDdscGyKXNMJG54VMV5mQupkpqRHZ7LmU46e62bwAXxG1GywG3NhFG",
  "key26": "25k1czrPpBLvctuD2stybN8grUSAFkzMUgdBXp66jVWpqeVUTQXverGaWx6XX1vhFLP8eSw4tmFbr4snoT2rMk6h",
  "key27": "j3ZyCVG9Qtx6qesWgAvc9PKBqBV6JeQZbBgZS1v8Qrp7LdCpiUdcfkajNvRf88NMYEa2e2kjFDe32fsEPgf8sNZ",
  "key28": "5C9eaNrQ4aeKJJ9WFg32acdpxXpLW1i14FBVnWVLGv6d4ZEEF1sXbUfReFrK9toKEyCdvEqsFq1k5u6kZA7QQ5dX",
  "key29": "5WhHw9NZzYzdhJT4JZ1DzCbPL3eZNCMp5xfFD9XjtStuebARcaj7maEURnB2Jj9GRmShetBHqtf3rguWzXWRRSzP",
  "key30": "DdqXwzQhzb3htLDq7Ar9cok54EeRVE74ycrAmUnnVz4SB2gzptd2XtmJASq28q8AVeTQKKUH8x4BQsePpJc8P7i",
  "key31": "4abAdwqnPVhW1Gokfvxxf87XMqrpB4qzUu12d9VXRdonoAMUaF4nJM3VEDF3Td2fv8bop1FEvZ8hkqRTCdnax8g",
  "key32": "D9WJ1qGH95477Ub7rHR1sjmzwXy5grQRwHYLfwPVww6VWYMdPKvChjo4VjWm1YvQk5cHQrbACKb2m8ahqNYvCQS",
  "key33": "5USSxBRgAhyzyp3U5r1eVzhpEGCXvsUKBWxELLDdiUdFrGQzpozbm7khKmJUyHsKTVuRbaCGx6SdJf5ANwjVfT2q",
  "key34": "2DLAcK5wi3N5zMbfESGBW6i6pLiVKuuLRfNmT7vXesJhUhzWtcbPFnF5G235GMxHqmhCjQeJ3t5tbLrbvas5pSiw"
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

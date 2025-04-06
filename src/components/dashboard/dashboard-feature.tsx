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
    "2VncMUayxvz4So2sEmvgmsBwsPJ2PARavQMqj7gEu2a5KbAV2FXRMvE7TAoJF8DV42WFVVeNQeEhDXmnFnerjg83"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yioY3BdXUHhE3osooVAbyXrb7CLh4ryYnyhmgo6Cvd1DFYAiRphoYqYeo6VXs7H8R7AdoEfpPHZZYnA3YKTWsMT",
  "key1": "2kUHw83CHLK27g6iwsm5UuihcCbpUX4VVCBAjhruHorvSnJgJVkxT6L5WbdvXLVhx2eYCxCEERmBmg8rkAkLQ4eY",
  "key2": "66E8cLFD2nfKFns9WPPobP1mYw1t8gSCED1uf8joBRDCmK5p97DVwWKEdQdfZxLi3g47LyW7RaJNP3xr11rfKLoQ",
  "key3": "2GuqR5cgy5hq4sjdg7WwUHZvNryXHi7tugnCjwkmxiQ4X57cSMAo6JhWB4uSH4nGGyGAraYsX9TwSdfmyVtF1d9Q",
  "key4": "3oprMM2gySsbvaKT6cBH7n7abaoNUnhP4PxobXVgBte2wtjdb55eZLD7digxD66wntdF8MJVb285bXrPxgixJZAQ",
  "key5": "2Kv7cYDpWCVd8Aa3i6pwNPMvF5G49DXxHbbKgsPusZx8KYJ159aMq3Ewu3KBZi6Gr7eNmAMwRi2uShKZTBpJjwfJ",
  "key6": "5DWWmJvx3VyMionRtNVZBZPDDBoXwpnUprjTr7reMBFnJwaQkjjeio9FoXLm84EgyBh2zAJPavnTfYtUSRNqArR",
  "key7": "24XfkputR5efLAv6EX6CJ1dNnyAEQFJb5dogJ46WGKHwsuGRahmiKZWMcWZ7KnimyScfh7Lc6R1VVtLR3KawJ1zy",
  "key8": "8SjGBr632v1oRzMgc5r2JG6QSyn9ti2v2iiC1nNFW7khRCSYws6mgSTVRjkCKyDJsFBiEbqWJTUMqWPCoDWPCKE",
  "key9": "4dBYE3ScSMh4EEQicxeFpoc6cR1c1HXqJkeFZBEtWLWKvgGiYyknyQW64fM2zWQohM67FaLsDVtn3cUVg4prYaQA",
  "key10": "2aoyXrnPeMoJmj2GrNpT8K67ZuM9Lo4sk6ZU6zhmyBFHYrAMHYRsQo3k6JdwXyzwB5bou7hpADpz6aDMz9xraySG",
  "key11": "2LH2J5HSdiBe6GanrVdSHuCk1AdcgfbzUxKteHexZ2Efb1d4orjRPGcTTeT5Hc2NkVFd1nB6rxWs1sxPqEeX8A8o",
  "key12": "4WBgruDXX7PhGdndL2D8EqGYMQ8mJBgvvLqCW3FUWuqMctinpjZNUVn8VAtJGkNZjsndp9RdzCFwkPrJJsQVwEof",
  "key13": "5Bbar7f9NDmTcvw3kDEXrdE9fzQaUA7wbvDuzzRFgqbpoGTH7YH7DJGVXmxDRmfxeN1N7kjfuLSDyofKzzZEAajE",
  "key14": "3CXRQkJg1SXXxXL6yF5MKPW9MyUyfVWVf9jKLFgiEtinr6XPXNyYS6ZeD3qepufuJDkHJdmxXXDfTHBxAYMwMPWp",
  "key15": "4c8ypj5bQ5VKj9wiivhiDoYyRkd7faU8uCKy2afUDUpxJwH2P7FpfdBT9QaY3YVVxnTDBy1pU7HU19G4PoHbxvBV",
  "key16": "QRscJUM8Vb3UdWc2mCzDAkT5HdM2nz2mCquEPmgpR8mka1wqhda1bNuMrMHK5HjbbTdUNCiT6M5YLcT9Ehjzruv",
  "key17": "2txWZYnyUfEk7UazNTajBTnLUhcjjnLyfB14nfTJ4euK3naiuHL1r7mkNYoLzqpGjakdvUqPipEFEJigbXQLb8U4",
  "key18": "5eiBiB9ff2T9ejERnsgD5efRYrvBpu8X8LvnLFNbsPn48aTiJc2t1JSzeBivEqHs5EgYmstKHsdFeefoHrpR9t89",
  "key19": "nQGmsd5XYPJWCJ9VPNSmFmzBfKsYMNZRifAPSngvAhBmxZtahCca9wxWCEV1LgeTr4k7X3VWjDFRC9gfUNfVNPZ",
  "key20": "4tDc7tAELng2iJYekkNv2BDzVtmvWDGWHUmct3zwRkMCT3p4qY3WyP7Q8bwbqtJPDaRkdBF3uzL5QxV5Bj3EycZ5",
  "key21": "3kmAnwqe4RHiWHuJ1UNJqAXLg2xtHxmFFynvtsgw9jjjZWUvCZeNzhuu8vMooNZXmxmnd8w3nLnabCoybwtoBEpD",
  "key22": "4144ipzyL1tfGfhcb6jadLattLN9yf9TYK6hhKJrHGyj4m1uk4e4NMYrqAYbhCDLRX5aGzeck97fnTck7xuCv3Da",
  "key23": "4fKjchwGry6qGrypxbYznB4mborJA5ok6mUSHjQu1f6VtDEhpdrJ8byDnv6TPjNELLGXoMqnhsSv6mJNRNXC3Tve",
  "key24": "4jBwTaNmQ3NxKqwmKoebBPJivbktjvNGQgsZSRL8Ej72HJCKW1WNoeWcV3BJn1gDgDggixCC3TjpzrcZviRVu5sb",
  "key25": "2pfdt2fUhEH4H36RPStJeQT9ZKXsQiqvbGqcQdP5bxwwtcpM88y1AbcMGGFtomYUCJKWjdYGsNzUWnQCefJ2Z4aQ",
  "key26": "5RzSf6WkDat8RT9B1oM4MHWUL9dFcJ5EejKs5zseHqm1Jvp66wChB1XJKApSE3UgvYjxCiBSn5ad6BhncoJjjPT4",
  "key27": "4XFNt5JgB1qcxbCMqdxdCbsp2EEf9dFs7UDrutxcaEV3Py3SFRGWSZP8FeSV6jUSBn5eK7vF762XQnqXzGcTBcjb",
  "key28": "4zc9HuhWg4X1ZwhQSNDtuXzzS59AUmekjexCwfQhbZbRLHgrhaZsDD2KGjwmdvMsUwhna7DtQDCAJ32fzNzPioY"
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

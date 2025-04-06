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
    "2aEiVUXYcpozE7CEzRjCXoG15yUFRavyTHF8vLSTrKBgWDuru42t14QFcMJWRrcxxaZhZVmWr7AH2XdHvGu6e8JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r1SudoyXFWFRJa7c5Uv8K1Py3U7Ap8ChQRALxEV43cTLhfSa2t2QACtpQ7e6B7TAnqxRpX6RGXWLa1CBhhwK8ME",
  "key1": "25aPFUoyfueHxY4nVaFH5MQig5tvTxWJo9Hmufh5oYTd3UAUnfjhmwXLWRkSFARgEvCXymXWpPs7SVprHtf5F7yy",
  "key2": "64WcKSWAHJUAhh9aszKePgKJ3RFSrcYAFAd7KEvhtbi9oCE19nii5F1GNrDBBDbbmCTRwgv6aWgk2wrZx5Ex1vwX",
  "key3": "3AxgkCScAuaHSzfWJ5ALY6WDNpgCZngr8PP3F6EFprnjotpNBFJH42vtWkPgP8j7wxHkfeu3sSgrC1cUKRg7JbQ8",
  "key4": "2Ubgsb6HTaqzmtiBB4VNBP8KYWinZ5P4W3yyLbUjaQbdpdCHdQ5Xn7EEFQAqn84Ji6dXpXse5NmeUgGMHtXjDfMR",
  "key5": "3NFmGV5qTMU4tAhcs2i6a7ReGgjerVgqfR9oDE6v1UkBCeJ2FkzaaXSVp9bbmoRYRVUP9Gh8NS8p2AcGSrwXDR1k",
  "key6": "2NsvY5mrumn74Bs8RkWKorF5GrdhP9cAMbMqxT8gocUNTn8U7cRQSB8zeWo1Br6CvemVFJp3Ru16HgX4us84Ko1q",
  "key7": "5Tsaz95T79RDHMAHbdiQUU6SDzEYBe4VvKhVrq6q8VnyxxREAFyYw3165fCbwZxnvhFwfoKr6UfFtmRSWZX7HzaT",
  "key8": "xa9ayx4eKJi8pqWdY6z786n3J3LywRd4yRPCMM9uXAHozFA8eFE1hdXuDo655T5R5D5h1mptGq2wYb7qBg6Dqy9",
  "key9": "5CSfprofzWGebNpEacMAAqBgm5DUWrSvdJPUTHPGn5JC46AiWG8G4bSNhTJ9jhhaWpbZFhKiLhrrY2htndTPbzhD",
  "key10": "5gVor7cQd3RM5V5FZGJdZbDKiGAu1GYGkByFiekq2W6mvpVvhMQw6nXr8vF5kr7Se5k2pPq4X6tyb4D9C5BnveN5",
  "key11": "3WUyEmEYUP4xPuxtCxEkpnq2fH5rx2r2n5Nig2pSsXtKkT39QFMBkY4BdW3aGHXTHfGtf3Bydw8PDDqQuaw1gMPH",
  "key12": "rrKJzwS7cp97atzxxoxXq3VGJcMtyn1o19houraex9AsCVY5hfEzwfN2szX39qnpJkvD3K6rswwrezzfJFooSss",
  "key13": "2nsAuyEnDn1Gjjv3cQZfm2yKgXFJQGo3cZu9VXSXRpacEkvs5aYhAeeFS3vnbvyiG7GxL4EyDcF5w3BtPXxjoFSN",
  "key14": "4hB6g57EQY8iaFWfC8LYspvCkTUWP3EzDhX1GZJtegNVZBi7r7GYeWvrQBpd6w9x73czWBDg5vipBGzkm7TGcFGb",
  "key15": "fWmzYdkgQnLiVshzAbbt5L9bneja7ky3z3BCbbX3u69tt21R6HbhyyQhmsXoADiS8HqYevKLBv8uWivceqTKBjk",
  "key16": "65SB4Szsmn3McssRDbhddPFGTGY4JVaSf6BYAJjgVLvCAZa5uTm87kXRYzf5dCjA81gHc5v3ASoCzQ92hFVhtSgk",
  "key17": "2wLJXEjAe6ZeXqZ7GUs9jrS7h7mNyYgR15iV8GMLwVrk7nEBQF85avH49nhU4AYgHzCVLqhKmch2fJVRRLoZejvp",
  "key18": "NwQNVrRiif274GaTotKzhLUfuzPNadToySsmJP3juCZRB95SgzHUwhQxyvKQFWuhPRh1bgdN8gxVAcWTT2aSMPR",
  "key19": "5ZhiapkiWQxVKL6XijZLmbXwYtu78jAPm2ugLwgixk5e3Fq7MryGySJcjCmKzsdNFpwfrbaXRLiufJLPawsCf4NR",
  "key20": "xKK3eEdYMMNvc2e2wdA9EqxoZUp7gkvAWpdr2j1XQ9TTUp2X8fTkHtfhwpbBZaisNb6RhzYzwvJ8q7Yz4tnUYRj",
  "key21": "VCEMgXWij8FvFVNzNRwMJ5Pdt7pWX6bQrbgWtoBGjgAR6UYQ8waAd4kBZkd9DqUyhBcbhnsaZavcEjC7TPromVV",
  "key22": "5GoKY7U6ZJLXDru2giR5tVc8ZiP1eCW13TiMc44VtS52qGtpknuk4MbTRwpB1DRhDQ6JR4CAHKcoPjmTrF5eKG1o",
  "key23": "xsETg9x7sPM9bSCyGoHrrEXPvgKPsWCTjaNNYM6Ttv8as4wTqmqiou3zHPhEauVjFQ557SvvYHerZfCidSeT948",
  "key24": "3B5J9RRKrEit6qtGqnmmtZxJpgsYqRQVuUQCk62NhvMebr78UyBBuhUeq7P1BviZzpbjsUPnUEL277Jz8SdxqYxq",
  "key25": "2gQFGUGSJVpNYd7UMn66CEFPUtkqQKTJtsy3yRoJbBKiscycafZWCLkMTctk51itMLgN6jnsKZkmNmjnPibYTBUP",
  "key26": "4tH6ANJoPHCvGnPEi1i5CP1NRSenD5iiTS7qha7XCPTTFNsa4XaTaxcMDrhoBkjkL7JbQeYPhZufk4L2MUt91jTM",
  "key27": "3WJZJtrR1MHUXFYTAeqFu1zLYkYCdxvPY82WAWpc8ee93swHaQskSjmygPDyBxkho8m4Y8ZqHdb1rhJjUpzqYK9",
  "key28": "5ZUD1Fp2sW3wiP3cEMEgvWWtdRw4d1aBohyq84vWq82iG7Syta1SToisYdsycoYZEZTBXEsXGkbzddHBaGedYBaP",
  "key29": "5YaMss64U12YQwU1DBXBVXxgLfH2EVkuWYYERcUjGwzeyG2mt9T57v9mXuSdLNn2XES8rWrRRohyJMCmn31WmB3E",
  "key30": "3rkjgHqsGSaF4LuqsC9R6bra2RaNHg8djwYQvQrCzJXh8ctbu1p2vKkydk5u1YNDnGHV4g9YNE9axbiPekixepBj",
  "key31": "LaR74b3ziBKSa3YBbPqHvVbZ7iCV6wPr83gCrxcijtHEXYXyQyxe9jKk1oW9Q6DM6bH2K5fwXXgeSN6ASSCPKLL",
  "key32": "5zzo4H8kzU9uSho5PQRXRWbZyDEWAxtq4tWeypsfsdt6oV93MH7b2NAfBGVMgv32eeVH3iifkctXmPbgFGabFL8Z",
  "key33": "MNB9iWNrX27bELXfaoq2v6pQRb9YEvjr4GmzAmxDJmGfwQMmBMuk6NazgNHVDe68gphoG3eFH62PajayDRTQYAG",
  "key34": "3U2wCmGBTZJTWbLweJrZ92NibVjY7RFuyKrAk5M3jsxGNBA1vDBm9TzSbXnB4XUTNk6Dcr4GU1AqLMJEkp7YkuJP",
  "key35": "3Q8PJBUXVy3FJofbUA5X1ZaVVyXExu86ZyN3GncaZ2AkcYEBcow4arqgvJSFDptyb8UKXJzfEgj7zUewAUZZzazS"
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

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
    "4ddh2LMqDvF1FcFLbwedcJJVCweZ361U1vQDwT6VkoRG9y3QPaA4zoFR5mL9Db2ugxJzfEAuPNTjHyZAGfkJ5Xqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i9Hvv5TAajWD2MX2XudtRFJ6NFoWYQAkSKgHXnQuk2YpRyAjw8Ssyjs5CinW5tJQLyBm2jgKrvYM12qcW86dWVL",
  "key1": "4JWJMhJfnVcuc6wQavwRAhQKwNsUUPLFvdYFUuoBkT7UEhEqLPot2UQfuxApDwAjLba4Ek5Qrty7XW2kAiT35aKh",
  "key2": "27dmWDBPt168N9UtqNvDDQto3vmt4JAZ7aBJ8AdRD1biRzqS93fULtkKNHzLJXaxZ98UNGwcnY2FhSMbugQukhaM",
  "key3": "3JbQtgogUNCkZdcSLszTsPLHQL4nuKR9MRrAQGzjtCSHK52gNMfZEWuUT9PmPQeu4JKBYLpPGxEp2xxqmLs3NUWF",
  "key4": "3DUgFYB7HmhWg9Fc1dyXAcBnggV6n3cTREeGFSK8Jx4Dpdrd2wK6AkMBu9i7qwKAV3Am3gPLUkdeNjZ5Wu6Q3d1q",
  "key5": "2ZZLZtH5hkB4syyyA3A1vh8XTyEDZSA89Kwuptad4orB1e1fvosFGSFiQY3cAq4kvyDnMYBqeeCZvW52urdFeqNg",
  "key6": "45G6YdUsYA2CXmeNMbMRfhtfHHKyRP7QsRjPho4zQYAt8RuttHB2oPaBz7SCkY325kEHAf1v4C9mvzCvgRo1dZ5q",
  "key7": "4H37wMGNCSkijJrRvV89RFhtGHNg5eF1Jfkqn3PgGhmZ3FvKTczCZqYDNRgxGxJjgyS1MwcqCs5WTMKNXdcqa5sv",
  "key8": "5GPYxpp4S4MnVbPdd1ULu9bvyteELDMnZnq6Hv5YN33q8yyWk3w4LSY7YRD14nvqYhoHwzMY4PSYF235bWz7J472",
  "key9": "2rqvLXuYHHAXsSW6XdegoCnDQni5CXFij9hbkJMnmDswHRLnC4vPZV73vZyRXY8DJKMFiEpu3LYTarbssYggNXLF",
  "key10": "27HUCV4LDbZZNqcNGGvMif6ftr2YWYeJPSvKA6JtQFPwURh5qYjxcU3x2KhAZiQLHjuUC3Qe4vbNZG6o9WMkP9ns",
  "key11": "3hbH9UogUtRwxEk4U3cy1AdzPkTiuKAqtkfKPQLEENfQcLdA4b56z5bNoHgZ9EuUKiMz5Fb2AtkEPmHQ6tHd5G8u",
  "key12": "EYb2hF5gapfAkYXwvKyjrz3NxtrcAZfZ3gamLWVnnjpuGdtGHg2c81oMcDhBbMP1KYDoNYXFY8LUBiDUstHYcYi",
  "key13": "49yPcphF6MeDNo1txxLHtXNoaRxecS1m7mtZU9C1b4Zn6TRnmWiFjA7ghNyD1u5RhjjpNGJ9B92PLmaGszXgs3wt",
  "key14": "heymQLGydrYKckmFsrCSCfH4KrPkrSPYQnEfG3j9gZbzsQw14GzZ1juDXZhxC128YTdSmv8WVqQQoJmz6MXFQv5",
  "key15": "4YZBb1eCg71kv6m9byhsbFCR2EKicaixtRbxz9HkWMWNLmxJNz3ewmcwmxZYfm359reV49SoymiPeMmefjpEwc99",
  "key16": "4jZ6vBXkS61HTggafHcP4qvTUFxC7kQfFbjTuBChf7MRwMttBZPXSXArZfYdpk8iRrstvE68pZirwuNrteFzTHd5",
  "key17": "38EidkrprSbkc953HoWbfm1k2tXoRUsSMXckhDh8Fz1Q7f3HRAJKwMXiztNAwSnU9CxkrSyvkj2i1egAA2EhptEn",
  "key18": "3ZCBYgYuwtQasEMYsDmvGFwAJvLV8tU9fEHrnkBDqab3415G7zbb41uZt2nGq4GtyBNRT6PD5erDA7SEWGeV5wXo",
  "key19": "ftC3TzxZofDcZQj9JC7iZhxTB7ctSkNpMQwNLDFGq5rYuZ4D5pWVHDvWcG5R4FfqEaBArsXartCN6YR1Zh6GVqD",
  "key20": "65MA89HoTdrAWeRpTxabGKiYNPPcQkMDWdLhziBVswX5jbYeFwAQVHZivPaTcaHVpZdBx7ynaNkbmFDauAZBNb75",
  "key21": "2XNgRjWT1tsUmmH43pmsxEhhsdQUyUfTRLbRdttmEPPSe4rbxMSyThzuQQ4p8mrk2ma9XuECZpa2oDuAesP3Hys7",
  "key22": "44p9Fmf7vsTsy4ucquvTfpPmLo9b8q2gh8Xjsw7NaqxqdoCR1KYpoBC7hhuFzoaW1Yh1JrusbDBWEhyerNHrqrsk",
  "key23": "5v1Xps1yJeYkKuDXqTNatCGJ64zQX9bEAhuyULurnvqNwPpQ1fwepfWYbVj2Cc6MyH68A5HkAVupwLpM7CNdETgg",
  "key24": "62y48xczsJAvcifaxx2DAFPjjhEFrC4yJuDYyGLuPQDWBnPPC6wYsbwbZcn55DdCQXLeHAU8A1KJdZUHJd4YBR1B",
  "key25": "3PQN3AfGHHLWdesGjqbARfZRmJ52iN2ehMKz9MjtxJP2FKy87awQDYgVD4cLdNAgsnwkUdNbbSZpPice5aWbh421",
  "key26": "3bunwmcYoPSiCFQ9xvk4evZFbgTPGj3QpsaKZpA44zyjAYXF4awsyvUicFa33FjmbLiSLnaWKRPG1ct6NMzXk2r9",
  "key27": "2yrnDdCZKs5e6wNHNaXHUmtPzdNytJpzJDeFnNfSq8CcVhHZrRy38iJxYHbGQHjASzb8v3yMvNAxPVWnqHQUfRSd",
  "key28": "3F7KJhLNELyu31jeF4tBRVoA8CS5UTDhW29rqi4GX4j4HxySedvgQ9nEoQoRD5XHUpbH3SX9rSb26FeXe9fCWNSW",
  "key29": "2poWtNqbyQcWwwsAjMy7nDuAoyMtEeSgwD7asf67reJCPsS5sDWgXnh6gvrBLaJcADt63oKK2eExBtch2yKk6g3R",
  "key30": "4y1HLhDSt9iFnDbPaeabQ6qMhjQ9k2a31mjo4nPhyA3kTLc2x5BpDErxHFiF3ywRSjwWPDu8whGQMgFkaG7ovVPy",
  "key31": "41Z2LuemQEjnKi8sMnPuoUhmLCD4AyuKeEiD83Z3uhGvwANAEevHh3xUXJUMhdBCEUwhYB5iaUbF23iBAS78twkJ",
  "key32": "TUT1UHngd9R4DPAyHTwkBhvgj5VY4ktp3xPRudKDnwQ5CHwB5kwtiWugTfEAd3vyja7TzuKACKqsJR5HrHJTx5s",
  "key33": "3WEGUj2H5HV5Am593dxU1u1rc2qgwzSe9T2jq4oiGdV1hbxTt9Fz2NDbJ2rfPhxSThaVWy4XPi9qruhzHudu8Ude",
  "key34": "22TxYuSsLBrYs4xoUcm2UChmRo11YVE8WwdtuQxdvEmtNMUZA4VMhKw7sam6Va9Y3pm85GH2mZDodcNt1Jvbs3tx",
  "key35": "2shLfhGucpsjEqL4PaLTSFd7wUoeY13BL7zHayYKhjLvXSk3VKuXQuZzbfJW8qSqJLvR4fY9USVztGPZ7W7QWrWq",
  "key36": "noKxTArAGw2a8FzrwSoimQ54M84cF8cs4t24nCvQSAB2AMLeuZgaBoSwC2ch5NabqHxgZY6GQp1yCmuJnbXZ3ti",
  "key37": "auRVKZhBUCdCQXTTeMx7r71tbwcfh5LF2vg4NeBtSsA3LcAZ7rngwprJGyCNpNV4bojsFd3bxkbx73yJi64SzUj",
  "key38": "4ZFLqiiFbiqa5KGbtBrQ2VaoXG6GLXgEcMKMf3mu5EJHYQYa7JeJQBYvsyQCTcHN64z6BvwzYv2AgjEr3VU4G1R",
  "key39": "3CZsWRqzYMnAaQDpm67axKJKwh7gxHxfW4Tr6W8uWgSC6z7KV8ZCecwKvwVLJpZ7TobTVkHnTe3PSzvGYgJ2LRg1",
  "key40": "2gnWq6qYYzeRHVWpFaTjyVU6McWLoeB6vVgvzzfShqtNkDBRBSWKPSweC2VzAiC5aWKkc3eQoR9VChXksoiYJmBj",
  "key41": "5pBoeTGVwUx2BqqNhNAzGX2yM5yoJoEF4Bixh6jFxsCcThESuumdSFXC5VibUHgjF2zqPV24htHUDPx3z4aBF1mr"
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

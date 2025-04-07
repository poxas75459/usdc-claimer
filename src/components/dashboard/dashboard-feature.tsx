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
    "4mWertt7SmC9r9r8B3hsiR9rhCGsE8MpfU8mG6daTmfNqUYKxQtEJ7EESAf1C5X29vWUrpke45zuoHzUG6M7SCHm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SQoAQRfEoCoGr1mF1KDmeDaTANQg5q74SUEZrKtt2uKoDorJxLVgRZ6pXbGt8RUa78GDMnZKPtvwVXqZr2ef3qF",
  "key1": "gayiFg5p12rLfR2icbYEvrLSX5QquqH8YG8nVgXc58pNQBuwotKeS49gYZfspZnSFHEwyFjWnocd1qoAEsWknzA",
  "key2": "65owm5fjkLRWMESFJetBMghaBpYYqyvGEQeXJzYjnFHwaJsBW9WDaZxfKP9j3u43uXbXieNF3zh6wc5UHSJxdvLJ",
  "key3": "2571RKT9D5w7qdoaBLJiwGNCjmyXGgDn9CBTMDhw1w4EfaDzBwK3J7gtEpQ8NAY7uomWJzRd9kjFLYvKGVrwbQSP",
  "key4": "64Z8dK1LcTPmBWgvKmHRdfwaDa4u4FiiinDTxZsocstCsvEqTRuAaVPM2anJkwxajmgzSU1QNKqqpcFj1squHKQy",
  "key5": "KVNZRnZkw2EDoV44afRmvz3QUUhDvbyzubvynF1X8oBaMoGGzudFW578svBM7UcpyDujUBEazpx4WjuAZqb7pRb",
  "key6": "3Fzf7cFeaCwb9xd1bRZakVKcnCvgJUpzi3Bf7tEWYffm219SERj2R8oQJcenpGW5DmiNcChYWRBUqeiNi1HEhVFP",
  "key7": "3UD2PzgRdUxJbeTchjk18R1qCZW1Z6VtEm2KfM9PkvFDNgbJombRNoxo66yyGV9KSWemKEWKA8i1KXPAUAp9vV3N",
  "key8": "3aZsxGXfWx3Qs35HKa4fgepDXxXYurK2MB8DYE4esLUmcV2pkcmjq9gyhum6LdKsHVg26dgysJdjC8DiMf8Vx1jq",
  "key9": "5K88vk12mR3k9Tpq7XeCrK3TBaDXwxp8nAFnHXoVvaUPiWsrSH9JMaK2Sf6BP366PcvuDYwU4uRFimyGmyDzdhA9",
  "key10": "2dg4X9iGL7dzrYVh4Wxm9gN99aunGKNTDV6pStUK44j7ggWkKyDvtrkavB2nVXoGSSbbGwFG6XdFPdgry2nDAvod",
  "key11": "4nrQjCihpqSMDpK2me13CXVCMPzCDwW7F1rAxJHAdJVZj9cB1TATY7eXzQY9FvD14cepDgCeoicgkGymAvUMcY6D",
  "key12": "66CSeVQgFF16GbQwJecorxvJy8BzCpSNZrxVQQN8bNFYPekAdUG9f94AYkywvL1ZPR6SCdoePXHfDtLxe7xpxMC6",
  "key13": "B841LZwuv2nrRfZA3o9o877nAdVJkXbrcXVNgW2H1SRjRGzTe2LDZFjTgEN97ZPK4rRmsQwyZQyCcaXPCP4i9Gw",
  "key14": "2j6UAgPLgJwAjoyKFgYYF2QNBu61h1qokXUZG4azYADkSHBrXx2Ufa5c9obQCzqVzfPdJTkbuaGUoJZKgbYekgDS",
  "key15": "3qZVRpe98yDu2fRuPjBYnbr4yHHZFxEaYomMG8huqTDDhnDDKyF2KLQ42cRFySgCobfoUVfbDHZx3nV67H8XVQFr",
  "key16": "22xDtxYo1C2AiPBnVdtZKJYwZZe5dfdySzHD3x5EJk34wbvWf4YzFwm7jHXDL3PX7twkQArUqQykwm3hse9ArA4Z",
  "key17": "KBiVQadefMqLDR7p4pS57jsWqWhbk3Qc6ruyq3jWjo9NwM5aCh3h5rXCKBhwGyPPFeSYdDFd6QKqtedGyECsnmd",
  "key18": "sR774yYckg7d8DnDoHFbDXhk37mdXYWJGchfM38ht8FCUPyeiwPn3rwWtHUYYtUCJjoxP58cPGgLQ2vHKf3VXHh",
  "key19": "2Q4CaYNnFVEmXRGvYujGXVF8umYV4bwquw8XQPwLbLh7jHrsvVZ7mtqNNF5UdjuUtWmrCyS7J1eYVdNcRzfLp1WZ",
  "key20": "5wp1UgsSBYPanD4BM2L7KNmEzay7Qw4KtvV3tgQWqjShL7Ab29rR2rMb6Z36pUgyJmtwagVkVDf83HPL4keYFuQm",
  "key21": "33xpQdArrZsa6VJqvf8jkEefUwi9mkZVrE366zA6Zud6Hxg5a7uTwcFgJMcJX9EBUpLUVDbBi8831NAzatoGxigz",
  "key22": "3ZxSGC5DrQt9LZem4B1u36NTj3A7o8qSoDBm6haiWQdcBKnNyiaLAaQBQ69NtH8KHuZM5MWXprG3NztwaSrnU8sh",
  "key23": "P4FNyHuh5L21HWEKnqBDdcCSenpHerXdSYaHvB6K2C9fWtvVnHR7FFZ9vSVjjm4hQPuK6xRcSpQjFVopkdfnAEA",
  "key24": "5x4YTUycz1HkAaGDXDqHvLyEjadg5zb6ifrx8GLChTSEZ5cZiPmuRPRZ4X5pUzzpfwz43MwxudSXnWhPCbk8BGgj",
  "key25": "5KRpP4m9JDbN9Rc19yYcFZWd6fyAEovyxThgWmtjtoHujkXMQF9RYMmnX3MxahoVWALehbjiia5Sy4eSSD21rKmh",
  "key26": "z4TapbBZyCTrZa3wj2m81Di66sjGK5oY4zAS4fY7PZ9bcoYe98dLWSk1WW9bRC7WFAMoGm5JDcFafbvANMQSemH",
  "key27": "SBw4EUTBVtSTqFuuMS4NrhBVkQovBVobirGzzXV5Hta9yBtnppnvpU1uvwPVVa1x4ZfG4tZYbyi8LH6ZxonyS24",
  "key28": "2nVNcKoycB59apL4XCervWSLu32vDpoB3qHsPedC1Wbea5F6VKcj1XjFrd2eZjk1kSQiAaxFb3ma9WSZF9WVHzmY",
  "key29": "5Bw3iRwK5ctcJjZ2Fk9S41z4vourbdkndeAHrVEZMn44i4zuqeE8jyVjDyJBC1k6pw6qXYyrQYitNNgMVkagvEXS",
  "key30": "2ws89GQ4xPFV9yJN1mvDx5HnvHeEn5L6GfFwHFiDxzHb12A735gjqvGh9pa9jFM9M8jiQ5BGTTKrkSKL1xGV3ETZ",
  "key31": "4fR2CC8f4zFbTPFudpcBQc8beVRUXuLDadAWwtAPzFdiaYW2Huzt3mcHfJAZXxVPPjExg7C65q3Vv5fcyyjqJP2e",
  "key32": "4PKTSSyyPFc7MxwFBKVtDpL9LSCtG3Jak4PR13urUYQuVo8q5nguRkCupSYvmcVnpvfTmSqAdUqEkooPnTK2etHU",
  "key33": "63ng7tY9fXMETfeYLnvHJrnDtcHkYVLQooHjoShFsYYQrkvS23LpbR3y1cFbsWt3245UUPLFiKcReJZp66wiLrfW",
  "key34": "5AmGYNiovs3f6VEYor1iahzJxip8r9vVZAXahqW1drf96pSh8CNDRcsTHnUk5cdDAEigSgWAF2K3UCr2sKJrKxzX",
  "key35": "5UJf4mM8p6pPt5F5Xt5SQ3v9b5XsxMWHzFsnsEU7FZYPB27Xd6eETX14PZerWxDm9oSGDSuaTvYBZY5vLNg52Uht",
  "key36": "3cg3KDrV1yP4BuxDBmEsbXmy5vf6HzcjqVw2kvejFCe4YkvhvcZFM15aQ9fXBGvWdCrf8NQ4DtkfZR6QGaCStLKx",
  "key37": "VtkTUSyQCguM8VP5gWja9iH7tF1N2ihs47XWS8jsyHRi2criA7CRR6ZRnaFQTCiCtEbpPP4RRYvart8rRKDeGfH",
  "key38": "25FPsVxkTxGcUczCETkwxwD6VRhnJ1YaRHpZB18cUFKcnauHC77aDNGMoqLReUDJ2MxntQQVhFfEEJwYSvoq7n4B",
  "key39": "2X6phs4XeiSKrENpNtc5Xe6Cb6zc7N5Ere9t4WfkUuTrMBpPH3SadQC3sGEVVwXbNgWbohJnrWqDJrBTA28mzNad",
  "key40": "2D8yB9rEttCPg6E2WFLYj8dmcxPSRBF4FLNGr2p87itSoPGgiVnk1U9XKqX6smM5p1zeM5D3zBFU3mi2BkFqi6QU",
  "key41": "3WaiPqaRQ4Xsh1CTPShrWa8DUzF8R9h6LngAn4UYXMBZmfYipXugbND8p4JnnpF6Ntn2PUPKuJpbbiC6uYv4V8t5",
  "key42": "3D9uWfqyeok3yTnGxxDHZNr6dLB3K5FXrTChHWcHS74jgrenRfSvppNy2FizvYMEc7aqB3DUBa4b5gsRC4BGSYag"
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

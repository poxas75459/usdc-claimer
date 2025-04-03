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
    "4AHpfUxeVH1o5RaerUHJ4YjzSAufWNWgsePvhwyQ3ySrBztKyUCxgBf6BrMKxPFfz1mWVzfkWrGmjkE8isnmDfvc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeaqyKSsWL4w4G3HWeFV55VAwe8chRqhtzHCWoGBXyfPafmXuNqHgfqUTvXJY8mS2PqshZFgs8kJJomDNie36mS",
  "key1": "5o4avSGNAnWBRQVQDw7ZJnt8HJKDshcUBb8ZHbaPjqW65ycn2XMWKWs8CpYpiPz4cxwhPgtxopgV6vBShTMivD7w",
  "key2": "Fn88psnLPHkkQ5QNFhUANpPraakg74uM6SKQ9Mw6MYKhTRkuzkfFtnRxbs5abugDVgsFHqEbcLd7QNFG172gQXo",
  "key3": "2m6c9a27mX8YKKJZBhhjZACyifPjRw57ZoScubwjB5MjJxAUZAVRMtw5f5mUakVSBTTgDuh4oMADUd6ya3NqzK4U",
  "key4": "5J2BzmuZjMSZf7enGTrRQFX99GYoJup8J8LfnnSboTQqeKAR8AQeRRrU1UduDGK1RnbGic3gAjdPAoZpZHxcA2cq",
  "key5": "Y7Ke6dg9UN8biwrauZtarSokEQZaMX9myLLkMud2fSR5uLceDw1fF1kA6Z8TJiNgfRDoCsYZ1QuhpBb8D5mVdvK",
  "key6": "4nf8HZvvW7E2YpnNtp6cC3tSc7wmUkqnh2P8qbyPdznYiMraL5jPuFqY5gwDSkfzoo5BWbRaDxtGbb3NSKw6UETh",
  "key7": "5zyTc8p9csyEo5LJboSHrJKzYipcD752P1jqu1QGeUPmfQnm8L1iCVnkPfT1J1SGaKwmpT6TgUi2NSiPwBeJQ9r3",
  "key8": "5JeGooRpW7UC5eWw85Kf9vsQsPL5yy3wf78RvXW97JAjYB2E12r7xkYcinJzEK7f387tugwETJtSNniCFwd4xifb",
  "key9": "4a8L6ZZEyUGqDuU8tHF4sKW3aAGYENukgoZQ2NpUjTNxsTq7AvJTCssmQg8CWsadedvsEEBSNHQciFAhphabhYpP",
  "key10": "5vmP3Vj7zZoV7qARJAqG6tYKVS449B9QaqL9aerMzEHH1nbhmoxzCBMLvQSAKCtMkrRUHiLUr39uMLBv6SwXz9gA",
  "key11": "5LhxWJNwN3ihvRGYxr9ns4CRcrqJctr7Th6xxQSuk5SWt9EJeouHnC6hMZzsBYRJCyNHzsH7ey2WJNj47ikXE3Yj",
  "key12": "2vLFnPEoMgXpK5YfX5sUwwKPnzQ2zk5sK8YRH6jw8WWTYDaZwMVQCYdt1RAJq2Yg5FdNyRgBXYLK3LnhVZeRMaet",
  "key13": "5JaJZcMu5KJRVPnNpaxZViRRBsSFDT8AgaTPsACef4KP4Gax2V2FN987P8jjQSwdfc1rM3oBcV2R17rnXQBHcsJw",
  "key14": "3gbRVt87oxxH4FuUP5nMEhWcNYEw2q5tsPsouddsFYKLbaZbkYNCB7r8tJiPb9Ci2jnmtTk7m4EYXgqvo8htVpXN",
  "key15": "2ysJobBYCisRktjHjg4BUjFzXkSjgeBayrYUfwnYG4erbSa3yrJfhuR92Z8modgNQvUfBhN2sB64Kn7MYDgVqepB",
  "key16": "45yqjzppYRFeRadwZ185frMPRN3LqTirih61U1EXvd8pEQhEYe8Bf1K55Qxh6LX3jzwPisbA1GS95pGydqmE6xsr",
  "key17": "2RNTo8xseTQvgXtyvGUsVtocJ5YeCbvkG37Ly35arQydWEK38cAiCT46jXtKvtvzyDgo32bw7e89Ash15Z5ZXo53",
  "key18": "5krq82fAfCYzmbu2LdpD7c2dFK1mQVenPVjF94VakedQraxD81gvMfMVH9xEx7WHsavV26E4bohpgdA1TZfT1SSV",
  "key19": "3ZnjxhKqdrFGtSLm9ZpNPkrGXwJ5FtmsPjbRm3k8kRpjgToXXZCEiGDV12EPHmZVUmsR3Yw7biBxubnxrWHKrS4P",
  "key20": "5wKEjUacAWbh8yfFvZKPFHojHETj5RYtF4gxGkurHP5V5uhdg9vTrA1q56A2wkQXNDTQu7HarU9eucGZm9oyZsf6",
  "key21": "5tCCFqexJ7kj4sxASftAG9sY2zQaVYEd8dFJ9yhVrMgMxXHDqjCdqP8gXa7yJ7FeEoUbNa93YXZhLhFV97nCMMfH",
  "key22": "5vpja5dhUDTqdfmPf5owcJxeUZjaGq1RxJLmhSB4dafyZCL2jxtKdNrmVB9BVriXeH9gQRM7Ncd45dLaL6FcjNxY",
  "key23": "3UqJjAmRrn7bJqzh5mFV3U8HedgSNRgkH99KGZG2UdmuC8eWL2tT92xVXbN5BPWvGz7pYjHMjTw1kZAXDFuWrJac",
  "key24": "dQZ5fu8DHYC6sQhsM6akje1isneZMHnf9Q9kyKsKuD2bizVbs81j9GujS9AqXDz5ALWcGBKj9tg5jWwRfKbLduy",
  "key25": "3e74hPXF3mUfJU7C64ZTuLWtUaTFNRNrNuMaWvbDQNiM3KBMhw4j9VyhdwrAUk8Qhv4RGp32eErRQYsCn6EuXpqx",
  "key26": "2hBZnpmnuDCpH52SL8SYACwGuFLtKL8K5QGYDaHTQieXHrujjAkYzmAZsFGcJZWaQmHkEmqUnFVDxC2rFX247c3Q",
  "key27": "29sZKhjdbbSodfp3Sr7x4CWUzn7a3CVBEqKNbK6DLVGMhEuJfDVX1kuczuTvfh2swE39JRt9Lnmfov6h3NCTmREy",
  "key28": "25WqUAyjSkbh46U22VWncKSj7oWtV5nrSqyr1opUPNyzMSjf9QeBgkBGnxqHtq32gVxgpLmgb6HAN95txiYncGPn",
  "key29": "4UjN3aERszwqDjtc2iWQ71Sc2ac6Kieo9yyubTMFzrCDQ27SUUK3KAWKJgCANhvD1RBfHmUU5ixJpZbh5ic9cVaq",
  "key30": "Cq1336ayau8wZTF2E8rB8EDwCihswjGLZ2xce6e5BqRK11D82Un3A4bc1bkq28tkwnfqTmJymbASCBpfQpwXx3x",
  "key31": "2MqM6mCirVk4Q75MJGUXhcKgTDLoknR3HH5sPD1AQD4CkzNUFJzgJgQ6SFLqdhmkJ6PYC3HJUutGrHK59qbhauXz",
  "key32": "3NfWZDqyW9FifeJfAMvvcuaabqR62LYcN1KjGo556KXeiALrSEUhrvfAffXQbGJ9AVEZiEcDdWtiCzUN6JdzZ7te",
  "key33": "4h4kBjUYxTN8MJnWxfrMhtzwgmzBFFH7iqh3BbGVUMJcAm7TAmUgUoJX84nxQu8CHVWCeGSN2EE45H4KfmE8DQ9T",
  "key34": "32hdyqUhKjXgsySSmoAHMDmkkPbX8Qm8mSUdNdw242LZgb4M8JvZHVCDn49mjYjk5zMQT3shWc94vfcvv3S9iGSs",
  "key35": "3vUsCin7RXX9ocLDQMpy2KyYCeyUNF2JwJawAuHepN22GJYyeTfguLYycHpeXmZ715PNGFEBESwiqSHTJAr1nhdn",
  "key36": "UV73aX1TzCpCtELLNv61KA5pYhvzrQrAJEGfERzY2BKH8yESRkVqr71vrqCma1hvGa4bGthCzGcRVCggcjCRhDN",
  "key37": "cgA3wXWp2f3SNJrvQ5KKczYcZuJimrguS2tYA4V5U4rBw4MfNnThLDZC56FgTQscqY4R7bH15NNq88dSt7iMnec",
  "key38": "46zkaH7ENVX9RyLibo7Q4KD55t5KbL4ACwHdp6n7Au6bTqwk9SFJYurbi5k9whPYHPLjdgdQe9oDBpka6SmPXTvj",
  "key39": "4QHgMfCUc6tXCkrFmY48uMFrp8C6paCvo4E1PAPr5DFvHW4Benz8cnqXbmoqWzD1E1TiqchRWYX73szoSL5mbi9g",
  "key40": "JwqWpESEZZ6m251cAAtEmiNQv9itnQHaqeEcuLF4AwSakUmoHxAnmhCpGpXKVwReKZU4Va2iqb5ZGTEGeikyPCR",
  "key41": "8uJwWWE1Ms3w3kvMonp72X3ZCZqiC1Vx9XfJDbMB2u4swEQsx3npNx8gJBRRJ8htpBzFHFdibBvgCuPE53gFCjH"
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

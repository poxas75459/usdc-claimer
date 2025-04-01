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
    "63pebgqPWmYpUJAPyxZwNStFKZZgnFGvtMusBoYggzcaJjRWsMUy13BrDPyC58LG9vxpU9pUnZvPaA2zJp59xDkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qyDb5JsfkCWGYhnEBdW6ednUVoudsQ4152RuLBAD22rvatzqmKWL8QxKdk3FkreN2qjXZMPgtZCeVhZogfX1p7g",
  "key1": "5kV4ZFZGVBK1NYy98jpt57idNCJzbPKdy3HijNANiU6WagxZS8A6oXoZmqsrD24kK9o6TNJvbepmKUboe62qqTU9",
  "key2": "359zAyKK3kmGwSCM7Yxz7pwzbF9hWAC5resNGrauXkvqG2vfxcjoJHTQwesFR1tkdQrVgNGjebN1d4PqQZDBaeki",
  "key3": "4oY4RuTRSgvkSgHeQHXfTrBf1HdUoSub4C7H8uhouoAcbbbB4siTihQ13LznYJJFnvzakWYmtRhVVuS8nBjdoVqi",
  "key4": "2BmsBRpF2F7r9cFtVknMUUFDdfCFudDy86Pnzt2FAVNvBrvNWLCoSc2ABKgciNLG6iX8EpL3VGddkiMXRmVaeh9v",
  "key5": "vmryiQua3PFjhmsP5Uourxz5vzU42Mif3FtiTYdGTAo9VRHfiTR4gejfRWFtAvYNeFNadBomyWreqUt4QFSHeeR",
  "key6": "qfjN1rKu4ee4rPw6GA5z5GpxnPzh6yEkvdspLPNyBk9f4fWbv3Ek6DZHnxgY5h7PKpk8woAqkC3Ryu6ZwxHxC6P",
  "key7": "cE5CQZxAY1MZgp8Nind2AEPpv6TQTx7AkcPTKFfCWXCY55ZHAKk5bRT5xZRDFN4y6AQoobse9QH5dhE4gDn7B4C",
  "key8": "2B3gUvtbJ46aQbUJZRmv1at31pcA4mZY4p7zzXqSFuK8C627U3BWNZPvopwEKjrtryr5GQbQFugrnqoak6V489do",
  "key9": "3uTJE6WQvHsQZneSCX8ahS7efGkytf6rHsLk7eYKJQjHh6rjdWYjAPh4RyCTDmCpbHTBqZb6PMc6RvNyvyxKn6RU",
  "key10": "4kXG3z8RDVQcbJhMtNWrx1QumPAcTLKKQ7fYjJj8tnKpaa1uvo53146tzrWEKbai66z4KVKAoHaSBiwV8dsBzN6M",
  "key11": "3JKPM78sfNSpSt8RGh6UuvedEU4jiRBBhnq4eQjHvHnkxNpUTA4jsxpb1AgAZ77vgkfskGDpTuXDtfmExHtpTpEL",
  "key12": "2T3a7AYdfdJWacfXHgCjckMut5VuSn1LXNpem62XJf2PgzaJgPibNinf7pi5PVtr2CvBG4SxHJK9ydVvi8nGHzie",
  "key13": "5KS8VpqFASyMRG1LuDL9Ay33f7riBQDeaaP3WomqF2b6Fn6zhkqxBBbqi1n5uLJjRY6G9vYs59ajy9sRa4yMbeRw",
  "key14": "zeZWkQy3cMx7PtNKL1TVCEV7rnhifTQYSUg7uUntE1yPWsmkW4eWKh57Bm653U589NKJhAMYxUE8CVYwChY3BxC",
  "key15": "5QDQfwqkUwSQL9UjTmxucG4EB6R2cYuejniEpuL8UbRxRnaZm5v1UPG47V97YNwtHe4cjsMSnNQsegJ6pQwL2V1v",
  "key16": "4HdGycp2SAU9UY5yAqismmprYyYrU1JXKbsqR4CDgHrHKhN9nSEPPYGWvCJ9GwNPETD2uqyETSVEu1hD1SfPStPb",
  "key17": "2TxgeRxaSN5WPAkF7vcPFjVy8HXv6twizdowFKM8CQnncBMvc7NQdYqcKmn5hFHN8ciFYfhwUP36Mk1RiQrsRxPB",
  "key18": "A8YpTwoeddmr69WXcUngAXzSihkfFie7vVoE6ChnQwKN6q2SdJnnqAG91w6iH6PvXk7xpryN5nBTFXuby9c4wPc",
  "key19": "3GVKdtc8hLaKNPBGTEK5UDYwhsmLYTPf4kZ53xMFqGYMg8h37whTPb3hz1iKhgjPmiNG5BQR7RfrjVRKPt4HqjMT",
  "key20": "22pPfv3X3PoBZSW7vqLLhEZxFkiuxcUHUfXPZoimBfGJFkyat4sfT9Q7mtfWbrcMrBm9oFqFdFrbqjDCjvs5qQoP",
  "key21": "2jj2AoJ2FdPRsiYjKqYxjBhjDMCGwFdUt8RirKQB9fPXGLyKhD2m9qPMtRXKjfhoLKg4xZpeW5EA8rFxWfVMeLNG",
  "key22": "4XNZcH7Ef2Js8mmVhG23tFuYgwTXJa7hCM99XLYVzkfKvAUAoQdMxamJnXGh5eMkxNPJwFfa5LPinBttDfTNRwW2",
  "key23": "4sUdeTADtZHax4ra8G2JxQ63gBjyXw6Wh67ugHCTpWugEzwaxKqheXjzoE8Qpzy3UZqrGxXXFQhRQdcbzE1bajMb",
  "key24": "CuA9TkbRodEcYTunsTLPyymJX2JLHQ1ke8tkKrCTtABdVEMmdDFY7znztkZXHW5cBUX9j8rP5QV1GBKxfqG74e9",
  "key25": "2J8gwYnRSgs3DmWAr5VEMf9xEEqXj1STdnmFtdmcdCF3mU1GyR81a4MjWQAaYjwi1JqVWK511mf2eHCZzJD13GCX",
  "key26": "4gfAH4RpxNjscuJnDRoU3oLjdxKrEihmAwCKJnhoy3pdryK7ZRVzKqd9XxeajUnkh37h7XfwtwxMSEB5nmhTbeHG",
  "key27": "3ernwPLCthkeVby7kLFAknWyRvdSMcQhdm6W73VxiZPkomg8qqqcGs2rQUp5AgegQ92MM9VwLbZD6XGqFihdNz8w",
  "key28": "47fcixffsb9TzXTPvD1TtZiu4FMtqXLjJ2uF8KPvi8gtLiovejzifroSuvD6X3AAjDj1Aq1NnvaTnFsprNHshs1S",
  "key29": "5J1uNQg5L1vdZStF74zcVfrrweR598vYxQXLmYi6PqXRAgTvmFVEW5jfQrEmAPUiZTb8PCUUy8V9etvAvzET1SWH",
  "key30": "5gYiV8cSo1XnkKSE4dbJjJZTrYJEoks8FNus73RtXGBw6krL3CQbcmaf76U7RK3vRpkKqyXQZqmdp1aUKrBTki47",
  "key31": "5qroGesM3v8mkMfF93qhvY4ZDjC6esCykuCLrvqWtvbMkDiPvqKXAMTTkHngqM9enZsbSjeoFcETW1rSsGNNt8ex",
  "key32": "4SGAkDvHxRmGqH28ScdigvviPQZRWLXgvAcuq514BmyPUvuBRCXEcbhpYn65vCaSeAXgN4JGnEjFBPhWXvrVPLfJ",
  "key33": "sq9WpnzKrk2bgRQrUr2yjsugoZJFAbxrqBRKhHRpJurFBxq2xHytVJmhXsVSnCrmYSmKorzMmEDmiXMgeWUtifd",
  "key34": "Eh9WAKY6wPTjegqtMaqXP7MxMoTDCJWB7oBodgZGqA4fKprT9NjgcDZAZfixU8cM3piG7A9Ddv16FxFpbM9pRxH"
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

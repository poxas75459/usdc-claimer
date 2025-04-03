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
    "2mgKBDggoc69rr9DpFdEzdDtkG8UwCGwEXaT2vqsP3VQNhmjv9Bn6secUoVX2nPpRnociacXjvDtTdmbjczXWCtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GU4gibMYtM9xL8JsXp3Rn2dwWPQnAdUadn3wLHtJhY5r889UsLEfDizNxJ3k3KqXU4ZCFdzfmtw6HixhAochBuG",
  "key1": "64m3B41g96S9mFZ38apvSYmqBb3jsnBVQaYFeo9w633NKcN7MYKBv5X11HxaXctdMvoz6ctdqNHH7kHjCmrDTdee",
  "key2": "63NLQAumuwSsvWd5PYGrejBaPihnzQ81D8qR1SK5gnsK3VD225hCK31AkLdArfzmwTnKyfX3FXk586nbDVCRVkAN",
  "key3": "4Qjf9rxavegULRcW6J4CifP17rAbk1H2ECLT6teXH6wkC63uNcua9D4YhUWnbQFvdP7i82er9ZoDkMvBR8a8TRwq",
  "key4": "Nq1JujFZMW7VqT9B3tHk8QYr48A41jtsvjBdHuPjEgsVFnNzLMLkg96fo4U2Q8T42SdDshBbHYqnkQefVJwdjEK",
  "key5": "2LiCmtasjyhege5jBQrjHTfwRnD2PU5Jybm4dLBwM67DCgNGdzifN2QUCfqEXuZkGzZ9CNc8MrQjNVb9Pni43hfv",
  "key6": "2GTcSiaEnu4x76udKJJzNyvsT9GQ2DXREL8GdmbSYB9aEBpLzga57BrKPndqqhxWVE3d9a6a7BGHnhAZt4LcRJFK",
  "key7": "37rfL6RFKc9v9KhgcwimKETHqJMjcFV9HnxjWpYnSmo8YaLRPgyFcsmxVEAwtrcdSkryKqyok9GDR52imKuzmVUx",
  "key8": "tXT6upUiwt2hyVA7WfTjDmbXs3NTguAmN2t4525iFnxJqkcbiGHHtSYiWrC1nYihszSg6984mxjbYfCky1GHWzv",
  "key9": "CygtGBseWUHCV6MCWztsxDpBnhZEapC4LkHcdBtBCTwNGUCMSoFVw6KJUceNAvFBLYGcs2AAHeYSEm9KdMKkjqr",
  "key10": "2V2SS7xDgQLG2dS9GKSVv2mzG5VSL2nkneJbyg4zfPDPFSLW562yNvxgZdBiWiQ9kgMKJTwMSg7VcQsmv9CweXBP",
  "key11": "45WxhEggXHfZRJuWDffircMTM43k5JqLUtV47TAnGB8vaev3CuM7VbAH2k8jVSccJmbqxHFZgEtkaQe5XsmZgRWx",
  "key12": "3hNnbADyZXpNEvJrEewgSjQEAMJBnnU6QWGQjKjneVyD7aczErhpwLLAswVvTw3A5sScHndQy2NCS1J3q8oR9vsG",
  "key13": "Q8pd5mng4toFeJErt1T5LneGbYEjHVcVZYwpkKfcif7uKJaaH6FdrFfbugF1uevJ4vmxvNj8ZqRjxvyfFqnDPCZ",
  "key14": "5tX6WcXCg2cP383a9AnaamsDCQ4uc42F5iZgtpGtpMA15gTU6Nce3d8vngLUDnPCaaC7CL4p51p5ZF36cTAo6vcM",
  "key15": "y6vRjiubD6PfcPJ1zKrCbp5Kcm7x2uDTkDzf24XYUizEGJatRUdMkDJANEXFCQj7QooZcHM2DCLLp8H4vwFXTEU",
  "key16": "3hQDZo7EQxLBCHvjgY28GvjYH5nDk3H78bcqxSkcLon6mnJGXzNuESKneScBimJJKwkib2Md96V9Jhi21KopBN5u",
  "key17": "5cFGDHKJpbXtV7XWkZhuY2vEafrqUM2x1GRWzn5xVEpdhqDpcucC7rR1c2oS4kjxXAGjWLevi8dcC2FUitapT1Q3",
  "key18": "4PDqwJEarwAWZmAJJmieFAyLh2zAz2hZ2GPgPFFS2PPHNVb48o5suVcwiAmRpFC3zwDPbhn3GKd3oMniPFRgUcGY",
  "key19": "62qe2byQ3KmPrfSxzGYG1JUSGRxBnDiwcbNB1tv2trRLbQDiZp8F9wBfoeuMurEZpNzcariUcZksWqw2wvpR23sz",
  "key20": "4ZAFHCDBtwWxhEMEox6ji7FsqbPGZYVdKWgxkqHH1h9ffxVWjCxN2uVdJw3bvxkzn9UtQyRKt7pMfRMqhB7YVeYi",
  "key21": "4qVKaTFvAsC847QNNqenNaB7YFq4EYwKo9AcMaRivAViDx99vFAYUZuBfsM33HADm4c7z5UGfWqSeEtoNz2jKDmc",
  "key22": "3digWJ5ifEewjgsqc2gZTVAZxHVFGQdSFNwLtnHZ7jrxB7ZKQfdMXCiR1q8YHHjVJVwjpwJeg996chdZpdHu2xLK",
  "key23": "62ipnMUFmHCVEv4kcFEFte3L3t81ov8LxmbpdPVEAbeK6FR32PbsmEvy3uHEB5tJjbSfHYwjVpYZ15vZ78UyK2UZ",
  "key24": "PBu6k3EM6Uh5ygjewqCEt59R9bCH3uLhFsLj1HwiskP6BBkLE7v5NrN5CoWhS94pUZCbK1y8b36RLvToJehKe2V",
  "key25": "BhEipWjwV9JhPuzTjxxwg6GnZbXK233WZrUWTko4zeUMUchT4UNGqhX4jXh2JLWk9sk7TzSqeQd29RriHLzeozy",
  "key26": "38BEc1gnr3ucMxxKkwR9QK2LmSFceS6rY6j268m217R9iXkyXHVRvGz6KCTMc4CtsWu1mPsuVM8E9assbqtfXAMX",
  "key27": "22xRGspjpPGa5KwtbQXgCrNTjq43YNugphme1phTy1puBsNsQY4ojCpmvr6RUGnHGnuus81L6E5J8P32GxaGnC2t",
  "key28": "5qRRYYXz9sXcDa87DjnfREUGiuP7C8yPysLMkqNnzBr2MJTEWgK7xsmscXi5VjhquRb3tx4P1Y29VgKMsE7iLD8q",
  "key29": "43D7MutakCbCGFaH5oLzqLEZR2BBsVqcwqDUME6ExSqe7DaQoFYcooEntZXQibfe8hG5LmHar6DoeAodNZotYtSr",
  "key30": "55an3Wg2MrL5VAwyA6TutEt466FLg2FmiKKEYh6X4nP67xbrF6Debk5N5DNbjdJmDrJWMhTy3wB7ohDoTDy1ubhD",
  "key31": "2rAW75rDFhrrunSWau3ZghRqT3RR4NR3SLVqwr8D9QRha6oEcmMjV48Pg6dEyurWBEf7pLuYv9ZqAc9XX5r6pVTG",
  "key32": "4zSjxHtvbfv4iXxYsc4b5p6fwXcEjsLokUa9Vm1HemtA3tqFaaYUeRdXSUmUKmZmrTVnoBKFXfqMJP7xsSCSwAPw",
  "key33": "4mXvbSWAi45jUUpfhAhk4cCKrZ8GFrKcqCJCXvzfsia4kbSCw9bntLsVWL69ETRGkhBXE1y5Bg9Qn4oEKNH8pK3B",
  "key34": "2Jj7qgJ4kWsf6Vh3MzpA3xDuxr2hT2yHoWjeYEgTjXsmqCgoAsg1M88BDEgZNVQkpLqvV3CW2u8d33XRu1rNWzgh"
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

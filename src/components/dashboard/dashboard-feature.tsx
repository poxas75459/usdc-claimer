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
    "4rr5eH5syu3SWNAeg7Wyecjk2VAUpCRtrrJaGpN8bFUsee7NKtn1kwSasPTwefwgVNkbES1aXfKNzP6dzP26cino"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veq34R9HHUweY2ea2MgDPREnJSFd4iqEfijjHZ1cmbUUWR3jmGCHREAQXS9RQU1tgCTys6RykyRSfFDNn9p7BYc",
  "key1": "4oaHwyy3rxPbkTg5bVnSXpjoCP2y91khuBpV7seGTWmYP44d3k3M9y34kpfxSgKgxt8PDLxw3iVupcqtbR4ZEHVg",
  "key2": "2KxLYeQb9L6HNZv2JFrGKvLYQm4aHaSspGkf7z5ehxsP1pjiV62MLqqXrsjx3nSxrabDsLB43wD8zBeaoWzuSzUB",
  "key3": "2LM6pCsfHCvzYSpdtaQWqFUxoFmKyAkiW4nBi523kVdSm91gHEvVGL51vgcVyJ1DwkYJgPyFxt11usgtKTxfRRb6",
  "key4": "4FrX2uQ3WNSpndyRbUuPFr6FGWijUzzirzfqkMpBwRM9pS7fGKVGqC46QhzFiktG2D7TRdZxzFCezWrNFBgp5cNE",
  "key5": "3YLrmfxgK48cxRqpDqfNF7HCtvKMbkCFXjDX8FGgzTmLn876Jvefh6stcYdDpqCf89GCnNZ2pRo6b7Geka1NGpfm",
  "key6": "3qk24wWuR7uax128JGSAAxXRiqTCySwTMNhLoZrYvqBtvirQXYPBkQ78j7m9Hqba9zjnMma9GqrDFtm8uyCsFSfA",
  "key7": "2SqCT69TUEyJMZiJjNDdm15L3gk97AyUZzVA8QRXcnN1TqQCyZ8YvmR9kE6xqZziHh2zTUQw5sUXKpydqUwBy9on",
  "key8": "3k7tjtJjsPUmDv4ySjHUqLac2Lvhqt7yj4Qn9bdzMyfZGLsuafr7gP8wG7PrkgYhP6hU48eKVyTqTaR2nyD1KaE7",
  "key9": "3jHVriPou48bKtW4sx5veTLorzrTaqiCgHEoER6YebuS2fkpXnSWNkoKUoBP5478muyvx1RhC3n1hqJU5Ms7NAaA",
  "key10": "4hMEQoW5A1ixr1rDotYqSEp1BNKMnUqTHc1Nzaaa2rKmzn6H8F76F5DRE1Gx42wEgSZGqVvs6sydc6AXfbut9RgS",
  "key11": "4miRzH9Np31DeNtE8isDJU2sZinc2ki44cZqMs2cJh4St9KntmHp6V135mGiJiDEDiS9VSE3uNCJTtXjtZLSgjhj",
  "key12": "678B4w6Kuf64Vc4xVxNCSjiqj7RPhBZNRk52zdCi5ywf24QvyMEeyB6XrqoS53wWxxFeETgW6EJaDHrHeRu7kBb9",
  "key13": "4sS3BLnwvURYVKjQXw7NWoTEfWP1R1scnEkMKTojmeJDydzdow6w9CVj9WNu1NquRNryCNiAXgWcoysHvVQTm49K",
  "key14": "5P7KGzJx3mfYnEprszMzbGUu7fwtGEM5LBrwCkWVmJPRx16oZrsq9vcT1pCYUyNF6LyCGYZWHPHZURuhmVo8fsmy",
  "key15": "3bgs4cEzoh4EAGni6jyYfSPpNQwwu34qhvacz5FusxRCMygdsb18oDRUEhnjZyKvfRek9XVeehQvLKNUbJrTGRcx",
  "key16": "yL2Gzvy2JytTtYHjNeXKgjG6NsVyMUjRr7rdUmchAKJGkCiaHQUoDUEmvDCkU3eThTfoDSLFaaJDziBCMxr1Cx4",
  "key17": "n4CXwE8M3dR5LWHmPvyc8c9CsByK9FoWu8FJoiRo3DbjvPL9KSjiUHPP4EtNpBAHRFDYqpiNajH6CeTEmxqsyBt",
  "key18": "66YC6QAJXh5hopBt5dsK83E4wZPNvdor6G5fJXXE1XzBdrZn4aAg5FEsJciAhwctxj2QZRES6Tpco5GQTa8QajZJ",
  "key19": "2Qz5dVXtiQseEDiuCQmpRUWfjMSRtCR5avoV9za6TaRrqFBT78fVe7buZucuHwF2UmxSsmccaEw5uttUumTEXrhr",
  "key20": "3CxhzqXDskhzTv1uwNTE3x93Ltm14sev5Q8ZpVKPSgs6X6uJTc5uwRNFkqUqf4mNTZGsvAmm8YsqYcGuTmiSr5Us",
  "key21": "4Fgbg78gj9PjkW2CHjbDQmQmv9F7Y3Ti1CEUGNjD1iGeP9qhTjq3yi54H7k54Ln1Aknw2nBpA4TRzmQTbgzNH1Nf",
  "key22": "5pSZhJ2exoeq77vDBi2G9huLdncJgkUaFh5sU6voGSfMrKigWXYfvHxkqsM9D35VKqvPW18wUXLW3RjLGuiTcqLc",
  "key23": "4zSHuhqRiGiu3wzFHTF7xwHeQ8J9W1uPokVS4Y9pCQZ6DRzZQsCFjcX8VUSKZkfSmQcJYGrb87d43YKgrh7iyJsM",
  "key24": "4gSDp1Uefv7dqQmVmG39JGqNUQrWCwrHY2GHfZ5A5Ti2aVhHAnEcmydNuu9dYBHS8QWwJKv1TriipQ5jkWDkgnMo",
  "key25": "5swXpjJQnN4GqgPnHjmyvkdyQS6Egg3bqr1g1ztVrW2VBdSiGJcnoMA2FHDSaykCU8npjD7dkzEq7vbNJTwNhoaL",
  "key26": "3k3R3M9RRLFXzJLfqn2x2BgfN84VmCmii9nGtLvZP7DexFmQ5e9oNPK1XxWkjqw8AHm65FsgChu98kRaG3Evbgty",
  "key27": "5uBqjEDyWA3jsf46A69LSeT8U6tWNp1HJ1zJX4gcptVd84Syf66QJRvcGbkjdRrckWCeV9jh1NVCxmmit62zqpCH",
  "key28": "5Pw1Q7otxcqXA5hvEobmVdojyVRQrHPa5t9PTCkormN9eLwHjYRkSz9JCsVpixiqcop19uktsXga1qzV6Jv8JSVg",
  "key29": "4pcuxxwM4M5JZXCyo2z72ytvB2CMvrK4hPezxmCyf34bBQR54Q99MUpXbDguaMLhdXtT2E9Fvu5Qgs1fUF3ZuWn7",
  "key30": "386NAT8zWfeKxnv4aM31zWMug16KWyjxbyM44dqsPacxDTGr9Kj7pm6V61n6KMNbXoWQtdAUG3ckLVCti4Vqt477",
  "key31": "2Npg6sQs9x81NY5mMjb2EY1RXqYV9K9W1v2wTZRWsZ8iihv8Nj7Yo5V7G1cLG2ep4JNSDgZ2KGf925sbwgXbY4rT",
  "key32": "5E7uA68pEd1boB5N6ghB6DFDu2BwrAHdktESmBRvyUPUMNRKNvphyHiCMmd9q8a8Wiimvb1aLXC1ndtQ69i67jpA",
  "key33": "67VdK7KDCBPLhwtJrQnwARkRU24AM4oEaagdQivmzeTiieVRChHCXhKTx39c5BevzTo5VwmkxvBpUfLfCTFjLQqH",
  "key34": "41S48nBtHwBEkzEg29Eg71GeK1EtRDT6BwVZFGZmWgkVgZpWZaBCKjafpzrohSJMEmWrQvSSXrzqyBw9Sx1L3Gqa",
  "key35": "5dAoUgUR2bUcsQW3R5EmGBFesmGohbRuLG7ahtjsJHMLQP9tPPQsS1NAXZ1hqdpCMWkMXtRjasmNQ8jVceVhAnv4",
  "key36": "5kDPhZAgnNjfxseGdsu6VVqUNNubdiPcf9SBgZERTx5naBWYx75oqPmkM96vLxKVx8CifFFpbrWjragTpw4MnZq1",
  "key37": "4SyLQ6MT6qjXt6UF5mtZWVxCwpMQ5eqtKQZYK17rvrfjS2sJHeQa1PyJT8jYRKVSbJjqrLFRVKzaUqrXBHxLWR3y",
  "key38": "3miT2XgXm2iBMuQnLwuvcV2bizN9rWtMWcGPyefybob2XiA1EjruSQg2but7ozcA7YZapCnpbqnDURCNiip5B69r"
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

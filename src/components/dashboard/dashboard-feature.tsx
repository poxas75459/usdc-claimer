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
    "48cPhmSB6f42pdqXbNFnn7wobTszGDDX1Yq9NX5nZKKDqYwXVDZvGbXjMQk5CUurc9wzZJDfqM13XzVP1GWiyruL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PekFAasM5x5yGdPDrR38RcRHNV2NErtXbhXy5uCtyUAc3TyAyZ8AME48ifyKWFjeRt7ZN7FEqy4PRkremqoY9zB",
  "key1": "45KToG73k2ArRftkgj6NQDydjz8pddDbmGGWFGWKDSFrNA9nur8YuVuEejMP4PZxPX4cLtceie9d39JfWQ7Q1Z6V",
  "key2": "37pnYW5hKHGvEH6Lnpc5RTqU43wFnsypsB7kXLMRGfcJnTWy8mZrZRnvuFTkSxToa2KcS5yJaZoT5ECyoUm7Q2wk",
  "key3": "2wYkfD8AW3pUAJ6938WdvDtAeSnyXhRHM1ADwWenboNVJpd4iQ5rnRG1u5gqjHqBVbMy1CZADeoSGV8yFvbTAWzX",
  "key4": "qe7NzGMJgZAteE6kgZw4wnisZBaDmhgooB388PCKkmrHLew75Vra2V9ekj5WTJdYr3wiTSyTBZfpoA7xt5UL1HW",
  "key5": "evreFvJzip36qaBThU1PhJocBsngGCvUj5HRh1Z8mNDSMyste1U6B54KtxTCvBN9CKa9ddobrR1jPWnkuBEoyiF",
  "key6": "23V4tTsTN6RvAfWMXWzkZENgXqxUrxhWMSXEQ5wpw2Vvi7mzmdwqdVb8RF4Q9BT2gXWjSDL9eJjCqxP7qbAFK11g",
  "key7": "5VrAR3TuM8zymEkAtoXEmuUNDjeQVD6nuFqaFPgHN7Km48Xjd3S1NNFjWdeN9Qz3PJcBPS3UZuzcy2aGVqWatGgm",
  "key8": "J2VmH5HZWV9DedBcz8XgSV723UaYXuQEvcnVnzy8pUTej1yaoCUEM8gi1KV7CAduKaNsuZSTrLNMojGz4YbxyUw",
  "key9": "v3K9SgSBbmKwRuLKYNGCjWguWFSgoX8Re3cYWiAgRVmnwi7KHzvLu9ywzLFDPEKheehq5x64Arh6oVRWBJPYTXk",
  "key10": "37p2fQ6E9qU9ZiSXx8ioJg9sqte48HoSD2m3XhUm5dseLGXrB1kAENwzq7NXpSqsPENudzGsikfWeNGzh5EK2nZT",
  "key11": "5UHo6gamdgJQtVGfXjrVhuj4iHxUT3bHN4aHYzbEbwRn4tnnrM43MEb1nZ97jf9JmpP19QnB6ZubmpK6C5x39shJ",
  "key12": "QwiznzgdVg4ytJXMCXfDWUWK1FAV4hJ9BQoxeEwu97V81JGQfRuGbBtDRGs1CpAChoDe6tv8RiL4Xx4ygJUQ1Ft",
  "key13": "2GX2wH4i7n3BvGcGQvrMDcTRP4Mxrnw62n7saD3TnTKFL7FeuXZcV2t5uPrukidnfGaoyUhWvcGNWhW34KiQv9Ff",
  "key14": "5azXLtMCyQxae7WqUiznr2A5XGfpwAez5wUErg8C1PKkZkJ7HFERgCh27iPTDBpQe5bEhdvuStRoWAx5YDUZSXgo",
  "key15": "3u1BKn4bxJtUqJ6wpbBFshA4CPTn95YtSNYJfR8iXkngZ9PN5NoV3e8WQMhUci44sqAPkYBs57YhQb9xdXXsW6eV",
  "key16": "21fLogJCCjHgi5oBecMGRyGBVYfttKjB21mKkKC3dQrLXzTzT2HUyaF5Z5tmdXYtE4xLcRAqnVDkGg9XU1kogb7c",
  "key17": "5Y6UyziY4rYvb1332AWEa8EnZDaw7dEcx4S35yUyeqdin5oQpSvDTfEz5ihWmqUmYp2TzoSe52ErwFpJUxDV9M6n",
  "key18": "57Bjgqv97W3gphuZ5PGThdxLWUBswjNzVh5nC72FhgHL5Beyv9ErrFQb61nGzQw9tUmxyteDqqknzaPQXa1QPDQQ",
  "key19": "4USB1Rqx4is459PDCxPLDDqcaPTdbwJWdPgvLD1JWFiPbHU1Xqd883DYpY7gy1xKkKaXAmqmBZqN7AuA2ANWhMWU",
  "key20": "5bHb9maJ6Uq2WZmoZPB2WFMhfQgJpY1BnDyEtVAdRUABZRJhocKCCdV45qmdFgN6WwjjFAG7KtDUtTMxtruxTUWX",
  "key21": "525FaNx6A1watKQdA2NtGytRsHzMwnV16Z4KGC8F6Gckt4vCNiCD5qyUWM65zYKxo7r1DEp5qBppaZRLUTBkbkRa",
  "key22": "4dzsv4q3wwSmcDmA2FXyHoY5U94J2LVzujMkwyiEwtDqzipp22M54cFqfPCVi7BfRUgpgkkUB5VK9p8NFexxLVdH",
  "key23": "5PKNiH5JuGL3g2eNtFcTeF8jCVFS8LC2fSSqWSP1xY8DDZBdN858HNPEFKc7pTabP4AZkXiJk62Sg3XyJYvAAeYd",
  "key24": "2wAq2Vun5rgV8e9fRCQSc4eMHdqaTPQukSghXBM5ADdaBe1ePbEkWutsuQSFgD5kQZe8JMTpGmjPooU1Fo4nW48V",
  "key25": "4CbiJ6GSHyUhpwfDKzvGBAb5jSYReDiWsaU45TXRsonGwuK3vnX6Ao8mZiiYfiTrz6wCHYuPsnvsdwAvgQHxyk2X",
  "key26": "Q77aL66nfngLPcn99rAWbBobMCGc5ZHXFAgCgevFjj7NRuWFjj1ne2mUK9K7WBaA5TLYfmX7xGjKhzPqC7ugqbT",
  "key27": "2j3dvcLkEkE5dEBq9imRNi5LVAFEVp2YjLJAdubhNFXbbJfoA6nhHKDAort26aPhDQEVaDWE3FPeDcaeE8H1ryUG",
  "key28": "5mfJDoNsoC3XU5bLe19VjhUsSy7j1WUzPvjP1EyHnGFqwnPABPQGTztyg6eJwNEfVcjTXuVUn1LYpoqFMwiYqTCz",
  "key29": "4P4mktAAmiPqseQ1kGpRY6zrejnjUtJVmHxGExkgb2nKcWGRQRYk6WwWGxFdHexmspDfX5JqSR7x73bprUSYB1is",
  "key30": "54JWyASVD7ESQL91UkEToRhUE63j2WkL9PPw1WernyTfn9sU9CoihEA4UCiKchWzS7jxy1Ajfr7QDS5KcunJzG38"
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

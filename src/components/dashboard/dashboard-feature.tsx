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
    "4rXJnBQZY93VtDV8EKZmZqoh1UtpB8G5JeLaqZNJafiawxxizqzyNGtjRrFPTbXqJqEgShWRxD1nk6HzLt6w5AXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W73PuKSrugcvhLzoZ5bwDnEijmmod3chvNy9eP7CdAkApWpf7qskV23kebzfrGAbag7VRfeaVbqJ12DcBwt9XQ9",
  "key1": "2BkHw21sqyiYVftozDRcHiYykq7dP6NS6Aa1n3DoWti9vZMk8RJge4emvgJ6HLjozeokUPKjfvLJ9RyRhZQMBWkf",
  "key2": "3ymRfTyih6NQinzFM3RnpcME1o5uEPpmwiSHiY5KGzQv9syn42RxF8Vp5x2eK2soikZt5wL9ixjbW148dxniKtMN",
  "key3": "56owmUjpAZVwquW6LsrRT4pWLBBuCTSSKtaL4NrTq6Tkbrp6SuQdBAEe5izfZrvAe5pRxvQNjQVeVWEieqF649B9",
  "key4": "vUe6igtpKV81MY1WZwabrS3c4f4AJ8HjhNE36BC9XrTLXXi9pxGLmcw6kMCi6rcnscQXvdjNdpzYNUutYeM8TVe",
  "key5": "2JYkbn6JftvhVdNkkVoDnaeadTAzKV5ZPf5NcA7kCSzzTUNai4FQ5RigWgyCCD1MSd6dHfuCTbFhwc3Sb3VQQVLZ",
  "key6": "48PqjjV4fm5eANMek2sm6ur79fJdomFr7QwKMCiyJchUkGAZRLwmTtRfGk9qkUe7iUPb8GEMkvSL3mAr1tbPMBcG",
  "key7": "2FxYnnr4joUsX7i52HeFZMmuQDtgTQaq1d12D9Da8CGHzBK93wPJCtHztPm668ToBnspyaJV11GzDtRyFdNet4p1",
  "key8": "37rrCWphRsc6LYQkSsSjriSSrjzuT8CtS8azY1mxLsRdWdZQ7zGNFhGXBZjtehgMm72YgN9TjJKJD5wZY5EtYhRh",
  "key9": "4zDXCXMxTJwCvC36UCzfJ4BQbgmQm9e9bLZ7eC5TuoD9QBdm7c6tRGNCkoxqK9sNCcSHDrF67AHBp1q5MGok3gXz",
  "key10": "5pKGhp1BUZ5XjJ4S5nQaZJSw8wqKyMqBxWhx1P2fLHjeZ4dbuhxTrdEnk5jaAUEHjW6fZ9MsYxVBP4ammKuXdYQR",
  "key11": "5CivBuxyXPPvQ68MrLjRTMiyhkpieHmDJCri9aBYnFKuSZrkRKrMLBUNpXvkNA9WWmYWJeyg174NSbAVK7MdnbVn",
  "key12": "4qHC2zG2E8n7xyWwtQeCpFHTLAVqvmAAYYwQEaUNSEkQD5sE1dXKReRroLojnX8gicLVfKfjbyZpy7zfniKxiZCr",
  "key13": "hbhRwuFC3xWtP4uRMMCRhjzwiR5WWLNjC1UukmhkTPrpaE5tkx7SB6Wq1aAfEk8mnucXsetAifqwJnHVPYhrJJc",
  "key14": "2xsnUAAxGZJ2L7fjyN32CjUiv7YLCjnhgQEQj9P72fpwj9dA8Tr4gECneNHTwhTd2nWhTPwDeQFf3dQysfBVuprX",
  "key15": "2o2v4ddauEYXAgMpFvRc8VBMis8mcKDCCWx2NgVJe9rHdp6gfMqrpweQJo27oo6UiAPyRaN6WVr823X6uDRKk2Ws",
  "key16": "5LSnZQYqEZesHkF7wWh28fPxFkrFC1c2BLSqJniJB2QESHNF16mZJcRqSgCWiVLbBhLqpEXLqpuMuCCtCKRkj9CF",
  "key17": "36uuUaDEMCLeBQpa68v2VRz1R1yh7kLUm7xqeNiwch6LuSo4ofWwyZsBCPFaVg6Awe7yVbmNrf2gBPefs4KEsxR9",
  "key18": "2E8m9MKqmLzWgnFXZFsWWWw7kUrmzyBhFFEd75qPjaMaGnuKMQUrPQunrW4UdG8oMrnZ3GZuj9FD6y81Qxk6aPaV",
  "key19": "5AzJNJUzewhAGucXaZUPmw96WwvVy5V2gs3jV9zLvafmtg3V7nfrBkR2ZDygLMh8fLP6PbZuGoLiSQyGiqrxZ5yg",
  "key20": "4SjY8WyMC8LxkQiQz87ojCWYjaFpFaRdfda1jJSJP1nefWMwgABstDHbYgvDmtWd1PomtxCZVyAA7X1anb7h7AWS",
  "key21": "5Qy3XCoxeZos6fs336A2yea5cqppSoNnaiN1NDjUkCVYj79Emy4KuMDGUg1KFBvNswN17t79QggBUyx16wmPM5Uw",
  "key22": "28kMMxYYhMc74zjZtPCp3kN4xZdqCrXJVv4uskbtZwAXhQxytFtiSeexrgCpVERTXraKj5VkoXJBBLw61KU43odH",
  "key23": "DjefxHDQWKSRDHfqmoeHWrHeNdFZQwHhKaQn2H8vqeL4AWQ4QAyQrFmzAcGoNi5kSyJ96H4UZGG4feD2sb6PzZw",
  "key24": "3gQBQBhPtJzuZb9XvHavWz2bD5pH22CSZxi7cvwVUNxHexMbnfzUYgcyLCY6uyPxusnkwsnfP8EJx1F53BgKHc62",
  "key25": "53PEexnCmPqDX8dsGYJhDH6o83BinKwHieRepHKQ1jV64AvAE9hRmag39dyEvCuspSLH5bYZ2F7m42s8Spa9Ehrx",
  "key26": "kR2fhYtncefc6N4zy9ztFZiYLPiGBa97wTQWePCW9RZnks1SfADdxGWJbndWMFeNTQNqi3nZhEVg68bXLtNJ5M1",
  "key27": "2eDKqQqBifcYxMMb8RT2creann27b5kqwmKCHyNKZuNvnantK8sxEdGtLFuiBB7yDneaFvCKEqwFiwo6tg4ChBEw",
  "key28": "dv3i7Jt2xC6N4TGXVycDxe7Et5cTkSJ9VknhofDaE7kFcKDCWBW4jPbaxVNYWFUVzP4GscPHQG2sgHbDgutqERH",
  "key29": "2JTYeZxgy2PyfUHSKfAqpDwKBGdDBiZRYiif539mnKjochkngf2i7oANUecbYzxH2snVk3iemyAJsVSF7jBc9jpN",
  "key30": "5zZMB3NXWmadT56JdAbTtcYfQJySq5RTDRVcazDoe1waok4RJjqEKpdgzQwsZrniFXqzr7Yr1b21aM48KbjB9ZpQ"
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

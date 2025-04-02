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
    "4SRBViyxkTGpXTZfJ65SCPSWXfRWorq3RV22Jz58ShkrivqFcGHFRGxybjAZfK4Wf8oYUyNu6yfYKB7Z4QC9eZWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53m3EJWiBTRCJoMSa2nLwJ3DV4aeB83ceYNYGrpcPJuhr9crTcg64u8a6AA5w2wF3PuMSvTXLu5jpGdqzkVbrVAM",
  "key1": "54m11mprQkBPHzr2NsfnPZ7ZchLS1CvRXrV8ZnD1MtSzw2AY9HAB5ZztHSGVXuHXPZxf1B8UxK8VyxvRiJB3T7ir",
  "key2": "AHZcUPRFsy4w1FDwcaZRGG3YfxjgXyiZfUxjeXrSsaZczLZUdk9r1CDrDueDWpRTDvC4Ee8bNhLT9eQGKkTUuhe",
  "key3": "4MLowga3paQGJHd3vGGab9ypYpeCVhcWxMiqPWeWiPB1srBoZpDxPEvbqfWucGkMbvBRWfaxmMm1VoZijgHz5qYm",
  "key4": "4ETQhn73wrE4ALyc4JbME1axAYHdD4eySHgesuLxprPf33hgiiaVF4gDfT8iU4tdpS8rRzrueJX18Bbgay5VxHwj",
  "key5": "2nMJDtzXLqCGn6cRkiQAwZoKXVEdTWzdPWdiDn9T53Z37TJ49GY6vVGr46dvEz6JFHxdp4LaVYPr5xtaorkbkp2x",
  "key6": "5tUvhodY97WsW4KG6M5GPncbexhpv4Gq6xzrcREN3kgrhgEkrj6HDaS315pH3K3sJfn4EpFf38Lttvysc7sZ4QSH",
  "key7": "3c1Ljukdo32QoVRSqo4Cj82jXffneF2fHpg8tReuUKmoaBd4nSn4VTGBD4aZT1DyrZ1k9hyEf3nPsfnh8FUU5Dyg",
  "key8": "vcdMMmvueoyxSWW9UUD5Wp5TPd7S21eVRx8kHRx4V7hVrfmHo83WwpXxTPpYoxGexhu2uwXBfXSYzVzrnfwcsGT",
  "key9": "2d1hagYpHse4BdnGboaUDVm3MXCwixwmvNSqDtwcucpdiLRNkT3xoGZG47wdfynedEGFtuaNPzUjjLeehB4VefsD",
  "key10": "4nNpaF7gX4XXLiZY71y3ijbXgfyvK5GxjuKuG7kT4csRAFL1AmBbmvLbwhmn2cryoPqWWTcCNUn6noACAxrBUdv8",
  "key11": "4EKSPyNh4j4rZCqJY8ZeB9McsStgDyNyKGZWFz4TcrYQ9p6k5XrTT189fGjVGJQrhTytYhwv2rvpnsPSW7Ko4aAp",
  "key12": "2SR7pwFyhkv9t7aNG8jxH5hDtUe1E8zjND2JudqZKi5Sjkx7L95PFUfukd4t5gr4rzZHA9bW1Z91qiNNeEXPR1aC",
  "key13": "49K2YepfsMy9yTn1nZZciVU4szsXXJrnBfdgScjWdBwmp5AL2EzDF9Du73QchnNqqE8C4A5xxJG4DtUHPXAsqbSj",
  "key14": "5v8HfT4sksMi4dvTy43AmZu3okWvfJZnx1gLRieRy5uWvJCrShRP6M7SUN1LaDPfLVa8njCnvBpQwuizQbzwBCFc",
  "key15": "3UxnuYt2eB45YBPewXVmoFC8w9GHsjqbCWWu4EsyhNwK6K2QzWYg6CL8gWwMeJWGFjVrgyXSHusxVjU79KaL6MV3",
  "key16": "DbgR938S5Fh5wbC6umM1WJznDew86TLCYj8bpBtFzuR2bZgVZocPJ1iWfhEuE6hksHgNjPUJqjbJ1rVrkaYeGYu",
  "key17": "3DPRdPXp9P4FyLTE3LqdZTrWEkFB4W5hfj5J2zMeqraUoL9WS1ApPgHu9Bt7GfQQn66kzrZUMdxxXMETgWtMfdv9",
  "key18": "4Dew612cV6rbttTaMqWYR5nVM9GZesWQRGodohp6CqKWjGDQt9CKpRf29ngL6r8GtWdrWbiqCodrRSkAg4Nt47FM",
  "key19": "5rYgjyosTQ1eneXQzHw8wTm47oUvLxJCt5XX8jYgCFJX6nRR8QakprHV4pkUyzYZ4KCjAUVJVFZDYXCmBtimz4VJ",
  "key20": "5K9Bnp1mntiPL4E3CczevyxPYbnU4SDZ1Xa6ANxqybEoRwREabnAb1TdN3cKsz9q7CaQSrUYn7fG4H3r1uvsuDxS",
  "key21": "3ut9vUPfj69QtY2ZS41zjbUsUTmQuGAvuziMYUJH8u7kdAoMUPYchuJjr8MgXLAC2LhRUCwnTVWjvDD9X3orVSEi",
  "key22": "2zRLC2SQMQB8R3Z7Xs11QyRv1wVxEgeQtSbzR7RVWTEZ5rp4Z41Bt9MjEvMZ7HcjcaBp9oxSuooRbv21YS49XZbR",
  "key23": "3ST89FuJRbJNKuQv4pZdLwk842rQpNqifZXJhRcQH4kC7wGfaY9MUAvtB5gHRrkexi4c3sACFdpGMdExPRFq1ukJ",
  "key24": "4JvHe5bpjjWe4xWTKgtAVntCRaXazLfVNSBAev1GaPmYH1m7eXspXxJ2TV4xFAAWGBWhr9B1cYMJCeDRy5koDi4X",
  "key25": "432yFENXNNj5XPer86fh1maUZEkT9bbAzxyJsCi8gZTgCTCzHZp8pZpZTnu2Lb2YkUaKVFKGF9rASf2SEB8VLoDP",
  "key26": "4kTqJnZrmaGHpFidbzDmzEurBoykHPzEQGVjn2yWzHHtwf1E5D88W1Eh4s4GEniWGp1mGnwzwfzEng5TeyPWQ8sY"
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

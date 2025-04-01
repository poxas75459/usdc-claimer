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
    "5KNzmajoK8KRBrvz5SjKQvjrG4AaFNYaQpi9tqWTCvZZVzTj6ryrqgKp7cMLz9rQvsByoELvM1pfmxqaEiuzNWvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EBGvBYwhmoSTY6NGVx1EiaR3YK4QATHurZbV2f9UhsKQ7xAAq9Bh4Au7DsTMdhGa6sAPiPdKkfUP5iWoT6ZW7J",
  "key1": "SZ9U6kmbF8azLpgQRiGcrB4ZAXoTxRcD8vgxXDPUupAqCSpFAEg5vyqVsi1Q2t3ngehq6yg3BGvTQFkiZ12EF7L",
  "key2": "5JN61Ahdu4DaLWWiK6BJ9BnjhjQm41Nk3Brm81am5CGnNQi4HjWEM9T7GHADAwmwY5X2Q2DDLGVLKGPMCczUGW39",
  "key3": "PFhxCh33S2cgdWjF8sts6vLFNFbG8U2SDrkNasW9oX5gnKPX7fQotmHiUDWQyvmDaYVccQkYkxL7nUQbXhTDh3h",
  "key4": "CjHmbC6yZwZt2a6xzK55sXrPL5qVMLwStk4sZp9d3vZzP1kYzuHVmVjUiHTcX5K8PhTaG7vwgmfaL29EyP35KGt",
  "key5": "3GBFBVNPYdBshEQhpCqnhAYVhwon66fE5TWK1YJakg9th1rVRR7MCbTfmxAD3EaRqkqiiChnZvUeK8BVqhEwFr9X",
  "key6": "Wm8TKkHFTvV6DcgDtQj1cUdURrc9D9dMUgzAcmykYSAqqFLLzcjoEaqTf4eNkrY4DAHNWdHb2pPMC7UqhZ3bbP4",
  "key7": "izkAq4NrNm5E1buKR2L2rvCgqgU8tvrpDd5wEm55ufEf6sdmRi1k6H6c3UM1zsniUoXZsmgGP7CGpdwnoWcHnBx",
  "key8": "25YMDLMDCchMTwMciPC8ZnC8ytG651pjSzY9zDLWpTeQhevBd77p8wJNZ6gJbUS5VHGt8pewRWV5zQFfEHNmdAR1",
  "key9": "4ZgYrwsvGiPfwSVzK4VLMsL8kWYi6tehKqFL6EgfEvorX51MDCxDvJ2DBQkKWH8ty9wWBntYChWiiFx9eM28Muni",
  "key10": "k8chGjeH7nx1mjtnjJ19k8XRjbB49K2rPrwxvhfnQiQYndYKUhHbQedErMq1wbQhNzUcHMbopqLUEKbqdw2hXp9",
  "key11": "2tMYASUzQ9rq5VETErQYbEnjyurRw3aLBnTefJ1jXLghFMLQne9moUwTr1StjkJKqwWwovK9f3L3Mvyd1iKCnHYd",
  "key12": "EpoZw9V3Lst6vzykxf8eU5rxox7stTC5DLjLCq7GXmEuDZafkPCijEEcwJhJbe1Hy7cKE3aNKn6pwLgMGgJEk1x",
  "key13": "PMAvpZnUBreYvmkoVTrfwAAoXBWEecUZUdNn1jLw7A4HWK527sG4GqQmWysxefnuKWF3xt2i9qJB815SNxSApXC",
  "key14": "21BaB6vUYr5YeFsCbKrxJrHBtrDdCZTUP3xQtZpDTWCSaTzazjGbuboVEdPzFns72pmcV2eksBVFcyExPGDmjZGY",
  "key15": "3Gu5NNSEZUTQiL1jYyQMxPq9neih16FLphgokimNbFf6AFqsz3RS3GHYfEHtaCijb5rM1PHZAWZz6rxrEAnjuYGK",
  "key16": "3eRcYvjNQPqr8bnuvfa537ZFEcwSvSEvML6pmgRmEVai2GqGUL7W2CYYeEJV2DszprWCgNVoBuTLEX5mfg7Y7zpW",
  "key17": "3QwNQcoTNzyyCnUUpL8XgbwLNAnhkPnePJweHcHHLEdaYXT7PjLP13yRy43cnRp53uwhfDE7yrV83oNJFdBP6N1x",
  "key18": "nBw9RWvb4wqPe6BBMzHZu1KLvZXKgY3QGVxrbY28Ytxg56K9VG1YrxH1NuoLYJzHQs63fUB3eYGYcSN8Zf455qV",
  "key19": "PSdoHPewkR8VvPEF2qPrzsSjwsHoaGhLRLYAmoBZ2TX9pAWbfPqh3xWqYeDMPDDBVKrK5KEsWiJqha5ZCXywrM8",
  "key20": "2ch1or6KmrziqdWKKkstKttK1ydQDag7a89kiFFdmnKnTYMVRx3WYoVEG1A9kRd4JvVA41E2oXnPoNX77QW1oBNF",
  "key21": "4dnEEnb8HENCUn2CStyxe6cMfoiKvevibacZogkUHXFkme9anDrsRyZE89RBsp4Y9MajWHZUUuk9STdvYBQQTgtZ",
  "key22": "42dCUEpTSmZw1MUA1AkL59i4MTZYoJJd3jQR7BUAL8xN9EoZoyxmYe9KYwopZZmjGvq6CLtDK1DmSCm3a5y1jDEe",
  "key23": "5SUxqmz3QSqHCWyjzCP4tqYbrW85ttwKwcuGD2J3NW6Wuw5GkkJfdPZ59wPzSwZsAPnPG9ZPyJr9q6UT3vBrHbn7",
  "key24": "4jXXWfSEEKvfdddUKPhFT4kJHDXf82cY3eZCkDfEiMQqrbKhr8nivPCS8G8gx6aQiEqKaYopiZEMN1smdpntEa7j",
  "key25": "xNieJo6q4J27tEy67hbxQFiponqmg3U1JtTcWUeKNQW3oQRkXYSFTiqAEb6MPMnS4HoKFEaGtLetAAWBCCMTAYJ",
  "key26": "64Rq3FbgiUh36TuHvWbyd1tvacZiPkjsdasToei5ASV6beWvWvfywBE814VNKnWHUpaphBw7mvy7oEroMvoS4oG9",
  "key27": "58cV9JCARa7Pwz2JjsuRdQzHUrSyJg4jpYXdpzSDT6SsC9UGoFfLnzYrcKrkkqvWbwcaeRdw9QcCfCe1D21fLUt5",
  "key28": "5t8U88atM66VmuCcWquU1tva1wigjwZtAEZCPGhHPtedsvAWNAbVtLYC3DxWvKidWecRFTTgNKDw8vY4ZUs7DqWG",
  "key29": "5NsHbcLksNXNYbDK7wcQpS3X2nSr3QkDEdV3ez9JuNMCTe2THMvat5eBSxfydKBjy7DmnpDRJUrrbT3Ru27qEzd5",
  "key30": "4bKKNcfawie9p8kszJmH2FTXudQL4k9Wg3iKEPm9rwt1ECUwfmyHwobKfEZBMqyGyWTbPQiGsWHgqZQHi1owhcTf",
  "key31": "3oKQMGHgAwgqSXd6sGXQETneUPHdEUiRu8NJmtu9xfrwu5FiPsJSYrU5qVyH4TduW8ohbEwKHwiNker4ZXaXc3vt"
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

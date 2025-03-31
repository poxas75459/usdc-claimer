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
    "4zxCcD3JxyAQrLNxubSRUNqQewgQAso3348gwti7T45jCxxmMy2hyWufkonMYnCz7cPaN44XZE6jyFLkKcRJsvmB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9LknQW38y3gU5FqaLMaX12SzZ8827wkjuQHNEcDpsACjM1bTwkLJMkZrkeXiVcWB19MWtqdJuzmtzidtLeuRtJ",
  "key1": "skpuetMNcGwWvivmaiz3zZkRwKbi1LNKPCB46o2oQb9AoynnkAkPJqz9krhaBEu119pUbvXRefogQDax8LSvf89",
  "key2": "4ZnBjsgBZ2TLYyZFgvH2v441DYfFm1a2YAMQPkp9T6ttJanC8nDwLGneHAhY9gqyHdTEBN9mx8cCzF9XA9HFgtqF",
  "key3": "5WbARBVNKBRAJkCjmjfKg9YtvJkh7KzQG7GsrZyFu4noAYchQ9snF6Y7VeZHZrnK686H7vQCpg2qvVBVczYEG79t",
  "key4": "2QDVdtxqgNWHknrJ29Qhneq1D9XB1rPMpS6oA1Co2L2zCk74rHTAwqZ9bPJQ2Y8PRvLaZYSPFxu1xTxgtG91PYAb",
  "key5": "48ETivSg1foxJMUbg2MKGetwUsYC2puAE2NKSyZhhNuxNXgQ5wLFHvMncnoTo8xrGzv8n2fjkuagFA4uWGC2Spk7",
  "key6": "3EqbGgLN6hebjAtzvFJVWMEtJMSxYbbJnUYQmo2ivQTzAQTxegnYj7qR4KioTENRzCYsPqLv1jBaEHuaoW9z9naK",
  "key7": "viJyh4CQYP5cAFzc9jHuT2bgaq7CQtB96N4fronXDLiZBenxxRKxzPS2mT7AJH642HsVy3ev8TDCX6X6sfBxJxL",
  "key8": "5ggsiR3ZR3rYvbVfDixs1aeoYXoEg2pRvaT6tL43fRY6i81MJtUQ7Topjbnz3G77WSWcBT6JVrHESKCV4RW4jznd",
  "key9": "5eT69YMdtBESnWLzyowyWvS9qZgH2KsAx5UqBb389V3Vif7UkUhviUvWtNN9cD92RJ3w7X7kXVQsh8C7qPNGmBc5",
  "key10": "2PyidYsJ1x5bJ7Xy48oZyCkPUwdqWgovrFXr2Zjw9vYDAWKyzzFVatuEt8QQSTM9EUNPVRxxJs5RRpYxZYt3GYLz",
  "key11": "Xv3tPR8duqm1PsifS9ihhNNxwMHeVf6b1oAXAX9JG38hHbfopP4WM8Y8RreBCgWBn3e4Xbq2Z8htnPNG2SNvFUe",
  "key12": "jhYd3ewRvNwej2YabLrA5J3gr2ifVqzuhUeFTCVX2ta2QTQsMxzzmx1FUDyCwBBornsLTmLJThEJTbrzVupXJVe",
  "key13": "5oRQgaCVYK86UkDns2UBy2rKUstcM4o8ZRtTN4uUBuuS8pCoSN1t7yJqeCuXpk4EP6kXqSL4baw6CKDRhq8fPDtC",
  "key14": "XFG4o78kT5ULUwbCZPNgriRyTvb7hpsECqCVdJT8koqjvaWGeBmQY77zrZFPYPmKVZMNmBRGh3wviPToHP4Vd2B",
  "key15": "5GzCvHeW7pV8VJdLca16J9G1ZQFFtgNGi6x7R4twdxnbbuiPrmmzF3K9kkQo2cGospTjSgcZSi5RVJdMdMriim1z",
  "key16": "2ykJPg2SDEVaN7Xzi9Qwo9CUo7SFELbAqtBkSPWUxYcp3GwE5ZCBgVw957Vs64R5R4gZthv6YEMLzNJJWp8z9iJf",
  "key17": "2zF8Jev7KPvsDZmrgnAvqUw7gzcBeguvtQpCf3xMT1SeixZoXbKZdKfB5GHV2hd2j6w97ZX5S2FAyad7Qx7zM29z",
  "key18": "3ggy1mkKEwBrZC7jTG5fYUU4Vw5kqLDBv3aon7P2PSkTwraeSyEm37ThEUXwYVLJNetm198kQ6z7dQfPSRZqDxm6",
  "key19": "62zvSFWoaXyaffrtwk1wBTNaqfF1zogBKM6d1MGiZoMoKaYSE7PnSzmLdri4YYwA8gM3YSPekmR2ENNiM8Rkrfqy",
  "key20": "d3nyjHoj1rWc7YjQYBzJ1AwnmS65gEdrVj6t44LX6FebRZKPXY25JY6Vwv4V3Ss8Rz72ADUsBV3bbTdAGsKxUQg",
  "key21": "2JZ8Tt4ZHXFgzPnSfMosNWSz2keGKBNm59KxKryhhfHW78T1xYZZJsGerHKiKVtgfQyusLCWjppfrBxM15gSQoKZ",
  "key22": "DmZ5JUZ2Jxfn88FW4Pt8D1Z8jdXEDRkVwKNEbXcxggsUioUQkissJ88inudfFs2ampoCUUFxbDZbNQZVJZVaPdX",
  "key23": "3Q6iu7JJPo7oxmp5mGmMFkBPpWCNVHqV4U8FfmRM36qmvYLU34GTHFgtHx7nytqpEQqELww39qnpKmiPi1y2bbus",
  "key24": "49gcVirsD2fU1AbQBQRhAmpUj7qxxB1vciGduV9KPBYKbhELTpoc55LrzXfqmAhx1RaUx2xeQHkjZuVaeyBV7iXD"
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

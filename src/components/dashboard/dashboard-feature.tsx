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
    "5M7bszVPqFTGgHXP3L9GGopVuFHA6k8zy71TAqZpbAd1ofe7Kp6m484yfs7PvEfWz84cgGggnAYcyniJTYaqAR4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4neHExXfZ1HiWPbFqnhh9nVRDiteypjHN5HHHNi82LF86fYzuk2RsXXxznHWkNLXMnkzagTBPXs4ZrMHy2xLLtoM",
  "key1": "uhv31TvdkcjcqVXbtKqfvKUswZ2TrboWZVG6srbwrBVnKGshpDePa5vGFaKtDzY7zPbg6MgaRSVa6yEU9CXABWv",
  "key2": "23NSq65h9CnmNXp1ig2ojZ8hm3rv2itMpt8snVUEo6gfsSrXYePKXCQzQGbpNBrmPQTnriqJhdjEG3tU3RxMUmd5",
  "key3": "R5Po2mDdT4ndgLKcvZY5u3KLCyw59BUqjEvTBi2hnKFLLJg7RaAJaG8cSdgoBzYWBdLXNGw7BC747LWzwaxLKjU",
  "key4": "46T1e4kkRShaVxbPBCt6Y3kGrtBxiJNuZuTLMvquF4cdX5DK7rPtNskUZvtrti5WwDpKA4wmpTg5kjjjBoAQrCi5",
  "key5": "5K7sMf4AvFT4LRYih77VoUaiHoqQSi733zMjf81p3Tr88BASUrN7o8KzRXKLLCWyZt4G6Lu7FtUauXgoqu4DFpVT",
  "key6": "56qZW5m7piUKdHP2uEELggh3tLwUTVtK8FQiHHgRfHt4UdWFY9SDtUQyanQSH18LyDQZhKwEJFABDYTsu5krUaLV",
  "key7": "ioRB7tqWsyuQG9g5GKnWYpog72W2UxnFDYhvxZEWxMNq5e8ryndyyFLGhZbj1vDrM7mbXNYP5baCUDD6Z2rBrRA",
  "key8": "32NFKCtQxuV3wY5zd7chTJAjtbeZonEyXD2T444Jk9g14dfVGkajhrorYRQ4RQkpaEec7entePj4UzURMFrhn4Vv",
  "key9": "2n3txU1DpXP7R3swdmtNeSSrKsHgvY5VMViyeG6bhGHXkLkTJJvPZzeJTuMkh6K4C1hsPDQitXnrP45dKjZiscKU",
  "key10": "iacFWdMeq3TiT7VvVqUKeEYWgNH6Rkeq3Xuae2eDMYrjjmp776xzAAaTTRDDTdKbkAXwPDZUMy1fSJfWr78rHrB",
  "key11": "4Yzii745tpzEeb7cZtjThC6TVyAzbF2t5oUUNJqZfeKJemQGfjFJobd6xnkfLDV27N6B4617cUmBuJg4bHprc2rr",
  "key12": "TgtndSB9xksMGYxUjNcBQCwXK7TLwH8tjLVkkAgJwPHvLW9Zh8PMJtpn6yZgcVR4BoxQojEgN4iZw9DBrdavmhu",
  "key13": "3kbVBZYHTdhLRy8wCNF7uuV49gtxnda34vBm8RFKE3ztYFtk4R8sazULDQmLLBf736tfQ9bL3xVxqnHZt3iN6p4X",
  "key14": "oBN8GfzY74EpUnucnxLJ5k9UW2uC4TCJBUJeX1ccBPPgXDA3JnAbPrKkK4VcZirYzK8YUHMnrGrhzFNtXzfhBHC",
  "key15": "4UxwaJwBE1ADTNf6No4Sx7h5gpeNmMVSLF7D6SaSamf1Fa1otSXq6yYMZk6dWA9wXfFufe9EHBpkFMga3JLMUcTu",
  "key16": "384wtRNWAfcZDzJU3MDoRG6xCJg8HfJE63ZbDLfwLQeJHbVYoxjQGSaRo6PCXXXJoF7SRpsFRq2SAVPdsPvKW4ZG",
  "key17": "43F7sEVtBgqWf8jmPA9y31qr1HAKdyuTHZx3YpUJE4NSZu2oAi1A1KdyXQx6EG4FDQwutJTtCAxavJe5nrQLoE9L",
  "key18": "YYGczpUb7yZX9ML1cDA3r7kP3tJVzRfd2RGgTTyie3jevYhbNQFtvpEK3enahFmVavQDnvWQeekRfr9K98w1FGj",
  "key19": "3dybnrCxVewPSstRej6U5cTGGmqBKaH2fNLseKjWWR4dN8rugKZyPNBw27XGLNtL5mrRTym6sQsbWfGupvfHfbJ8",
  "key20": "nmiK84brFg1zcwMCRNfiP4cKAPaxEh52NPQuKbUTxPC6LR8ptLcUMq1teMSFFh9AGaxNn1UiKFgdvGYktLWe6KH",
  "key21": "4NzHkKjEP5aEsuXFL2QmwJAZmK1kTcQVPQNNwEpyqBq1hYH6yoZXjurA9oGg4vaMuiQsANrBrY9XgNhAHiXc4ups",
  "key22": "4zzv1J6cp4SPWnktHGWgtcDxxbEPnmjfYz6Rbv28rZ4bi1RoYqg7TDXHVzhZiUtYzAGq57cG28Ke8ne3PkeQGLS2",
  "key23": "5GYhm2GF4LQ36tPceA5UQnWytLWT2sUNs1mvXSnTkA2WsLWjACGsHnDhTTST47znErgJC7Sk3yJREG4t3aYsDsUK",
  "key24": "f9NySiFxHK3vevDocsdbQRAF5MQpEWUeQQbMsNf45gRfNtqoK2nPaX3TwKbpUqQZ79YEZ9qB3Pgyzxtu3gDP7XT"
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

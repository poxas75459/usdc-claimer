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
    "4RcJGfP4Df9Cnuq65ZX3Jiwjs4KuXTfdE8ikj494ZGp7E4WoN2U6zzTnSQQ6u2QfTWobCd1JuDvvgscAUa4ZMqt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bcZpp7D58qhkz9xcMqtVXUcTQdAKeqSaZ9e24ZFPwrNww1VWLMghPhkMBqLUffvr8fpnrv4kVN5VGSpZqk27u9k",
  "key1": "2w8BJYngudrKFso8qeRAvokSKizyNUyuVNyuWfNp6ibSqe2kiB3jPj7nERUzrBtSsSPwGQyfKzoz5u87bbc1TKWA",
  "key2": "5UKrgDEU6PQoFEcdzoxSLezcn4BmjmLS63hfZkwKSkjhQyrdLazjohpQv3F3znVp5ttTyhsqML3QCgFc9f5VU8Zr",
  "key3": "2rqoQB8ZJBHiPCAD8sFog2NY6zw6e1F82D3FsSUgFLS6hKiaTHn1JsLCjPdbL3UNAKNA1af7kZPZdaTUhHN8NM5b",
  "key4": "2WUTCKmFNpsZYJK4jV6aHCjFPNujjCn7xYvSUN6Y3bfmTJAcWUyvwLxP6Lt8YzbRqKmHLD7ByT1Szwhe1Z8LdLiN",
  "key5": "M9ywKNas9G4TAntNY8kRgPgyLJ6FAd6UbouKKnNeSAbbwQ9SAeCGJ6PvoK89Fstqu7fvof3vRp35Lmd59ay1Q81",
  "key6": "56aMyJZxXGpScFBmfMYgFjQCgfjNjdN6ZrqkXDUEjPUNtZuBmrQMUkzjYvn62FRoQpsyZAsjXyDjGPVzpkaLwUoG",
  "key7": "5TnvQFtdb5prZezWWC5bpYHKxuTXWDjsgLfADT4SBNcRx1UsZkNBuJGSFLoV2gDYqftP7LVZpJRXNBGx8Da2R898",
  "key8": "5gi4jA4wMDNJwFAX5n2CDd5mvCazxnR92M8KjsboKCLHtJv5a9geNrtdQbFB77KAE2mB1AKa4qiVyCRxmi511Wmf",
  "key9": "32AqWXVy1BHTBzW3EyZ5LRp6jcJ5EsNvgSz18kRhkFtcSFtodPG4avi2qGSQfNrZrkTHnCx8VhPgkVCAtTWgxDJ",
  "key10": "V7GaHdZYXuvsmPYxfq2s3wJdRm6uXGMSd9d28dKNAe3adJ3iVLMg5trEBHbAbijniJuyKzP8cceduYnSAyGme4b",
  "key11": "3TmBvnztvayeM1VAQySJdHisFq74Q4wa3KJgS9USG5vepcQ1fGpNEYpmMue51E2hweS7sth7m58rGXwMoGEj4R7v",
  "key12": "4zTqbBeJ7oZWKt5bd7TrQ2s2AHrUuutnfUs2yyCjUX1YQYHurcYknbKLJx4UPzSKEjnYzWbLyZtLaV8ohVZD9SJ8",
  "key13": "5MFu8TgmD3qDbyyvXA1B9QM9XGy59hPNfUajRZMkxqwrHghTsWi2MjoagfwU3wBiGba7xFZWZrYHXbw6YUZDRegt",
  "key14": "8iwQKDo7AP4dc3kqvsT7y3Rg7p1nwxj3dVkfryYSwnfKT3T3RzRyL9m5WJfkLKgjb6Zip5BgXmwCBAG637A1hF8",
  "key15": "4GGfgrmMSuTrEWPYQzwz228rhogJdW19McAqCCmMYfYmxDwWb7Tyxze9QbkrBgNKydJJojd7prsy2CYmCJbwsib2",
  "key16": "21jNiGeQ21p3ordLXXhpzEdVqVrUfF8xqGifuT4hdShEkNfSRC6oZcny9nkFXnMhPWdokf2Fq3Dqa2yCjudsDnwK",
  "key17": "MQFAWR1rNFr8sBQ29ta75KPXgZjanyV7D89iCWRseZxfb4PUp266MYyPynSR8ra9vLut9JZEnAd6jpUTpJfFr6j",
  "key18": "2p6Wb9njGN1yXKeSgKkY4pS99QWrmbKL9ShZBeo4dMERkMDNQqDTb1ug9he1t6DyetpzRPQNQq7TgaXYszb9PLt4",
  "key19": "3Atb1gEkkZyWtkv63PQ9qdsZmF5NppfhcRJtFqvDBZyEiY9HRZJLHCDtASbxHqSQoq8Hao3b4T8cfe2abFNWsy7b",
  "key20": "5qXn4w8pd5MfKtK432Gi6HbPuRUPKfkRR3wpAV622Zn3P7UutwLWS4MfQ53iP8cC9eBmyzGy1P5DwdSjMPAMhnyH",
  "key21": "3LninRVwNvonpdtpxSKmYzUUhnHiZK9zJ5gpP9Asr3pUBei7AoJLRdrzpgS5Q8ykLUSsXGZ3kZ97fV3kZUoZwZwh",
  "key22": "5MN9sEq793ZEtDFP1V86NQ1Ph7rNux3MEyLo5ShY6m6TkaSshW9U2HZ5NiJZm7HBywgvQ287n5HcHxk7hDfWUZn6",
  "key23": "2L7a79ycbbvb8xKQCt1xPFETU2RjGRGbNJhfuPwK3SvPxYbf43VP4YwAwXyq5WbMVNjj3CiqB5bZUXNCNiKXmFTZ",
  "key24": "57oDNk3maeEhH2Y1AACmniJdLTd7TAj5hdHRr6dAbW8NMqPqcoq1PPR17PdqAYJKGwvRkkfrr5Uj15UMoKfC1cbo",
  "key25": "5Zi5PK86CZpMiz6jj5UKmC6gHX49o4fao3MnDMRV9GhyEvcTbnUn8w5UiZy3vgs2kiQuyDbSPjaLrFW8V89sZ9tC",
  "key26": "3NckbSPu7ggtNuYPXYXBBhTFgfkGQPrD58FG9B142dSg49isovmKVFJsVFih2uStgQqitGbrjHtCA8QFEEoKZ1xH",
  "key27": "5VX8MdLYM9T9s4hEeCdggwkvZQ1MP1dbAiJPkYxDaNxjmgsRqy1DP71Ed9x38WLTShjXtbpfV6D4ishm2B1wG88v",
  "key28": "3Y7BBiKe2ggbRPNgCYVj699M67oxjJxzLjsKdzxAjopgeSLQMRzkgxVLfeas8ZR3UEbzyjdmmv2xU1eHTooEpJfJ",
  "key29": "2p3nNsc6etXpDnQgMogW9cKAtKWXDtmmtXo7KSr7Y2qQCDn1k9ErYMnUJDpTTKu5fM3weqPbEEAe9n9JDJzcoTyg",
  "key30": "4nrYSZGHsJRhyvPZYZQ5HM52ryMmvgj1Ni7Q4DhEASB6cAyRSe5QjhzdwngDiKhNbrGa6n5FVfouB8vtsyjEmU67",
  "key31": "4LvN3qftKQma8BpV8AuwcosAT4BEcREDg8muayueRkERC8bp7r4RLV8E26LeYe6EJ1ftkvm41y9vxy67BTo64tju",
  "key32": "2us5S9XRP5HdBfrJC92j62eQXSZqUf4zCVfuiSybmwKJjM8XxH4mdY6vVWEMfxZMWDd8chWcRPDKgeqvuwEieQuJ",
  "key33": "GmXseAYxBGNpS4usDoLjKJF5yhYyrNN9aWwCgrypfRQa9nBCpZhQZRM4ekRBCCadzYNWhjP1BATfLj5zuQKZB2N",
  "key34": "sEwpAj4Jnop12ir2NWbVMe77cfLHjB5TqNXKLgRAP6LWCunBhs73CyqjK3uvCikemzCqJNoxRxZ7jVmDkeno3GN",
  "key35": "tgziLfgi6NdXqXE37mDSbQkLrDTNncEnfkwPGUPSTLJpc7HWaAg2qcyEL98dPvi48WQsXp6Sm7kwWAkBSH1W71w",
  "key36": "zLNKj2WHLSxibajGk3LdCHdwqbA8GiYFJgMJqbprng5K9ETFQfAA7JFgm6jzpLmEJKor7VLiAoQ9g7CPQCqc5ep",
  "key37": "5Zo5yn8TchqDdUeYbbvF8sMrXRQf9LG3aLnPvVMVgwhvDWihJSUjDWv1mrPeddeRwW99a9ZcvFQeMQTCahyeMPDF",
  "key38": "2SseGVN5bLrYwQG8bDKd8R5amDMj4wRL9HmkAFayQUXknhbFAmLLxbaU1truTBTSYDJVuTjF4W7Etk2vKtE5moWT",
  "key39": "3KdBaa7Ek86jBHE8Tj78AYDDSQbBxg8y1gtW5iCt6Hrgt4z2AiVm5d5CXfKBXkek2kiH7u6qc1Knpq3CBn12Ka7L"
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

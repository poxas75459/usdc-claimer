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
    "34GbDhs7dJyxN6zQjiNKJSvD4uC2raJSZyRpJdybeDr73DudvEmtPjAcwjiaYrB6baUjMwZg8CYcR2kxPNiFo3Ho"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NhgxuZsRXXsCB8Y6eE95EdroYJZf7wkzaVYVgKkzWr4axLpyem4sbNMWsZU6Q9sCQHdHpHJXrmVjyb4rygZgWjE",
  "key1": "4Kw8ahfWfU7WJQFxkmN9sgsxzfMpdFRq62ZUSfrYYgR1Z367cJB65Y1Bk3KUbmT9JFcTjjQvMRBjXVmeEJxGBFrw",
  "key2": "3c7uxv2DoX2WAbRHxKnrdWjN9NZZTKUY3soxJVys33jSfDCYqa82zHdZWqGyBY2APL2ecaih3KbfgrByt3FeikrJ",
  "key3": "2t3WueZiB9sm3ofwrcPaGzA77nMXMbYHQojRhbdFPJyRj1rUVxgRgHL2rsEQjr9gVLHBVJev4ndByTBHL331vN4P",
  "key4": "umzGxoTAzskqhfKsegNvQ9bwAhVT5fEKa7wDu7mVkVFXg7am6WyXhrjjAtmwJBHcdr7MHPsC5aT6Pwg4KWUjQiZ",
  "key5": "yYuWKLDFxvD57ArLr44fgmzTAeWEQ2wnnjqPNymJnHDWXZLjpLRo5wPFHN173XG5eGL9jqUVUhugnZgMRQ83Ka3",
  "key6": "2ekbLBS9y1m1e6Ge6i9k4J76f2ncC8NHZcZDcNqfDoX167EV3vcUkf9Gn4SFB3RywtgBva73WGVfVc3rgjY5RksA",
  "key7": "5jXFG4MmUVtfgBM1fxV3RmzvCz8XYV6N4EsqR7X3dHLJF7MWV2kPKDoLxQWRbxtJQY7VcfKFmapFSFqKumeCNqbT",
  "key8": "35gTbp19UFvZ6KwGEsk4CGwfapP9ehQAw6ARbDtVQpNMQkcE9WEVFD5Lv5JQMq3JPRbY4VBj6PhBET8HBAyXwhMm",
  "key9": "dFiQT5aHoD2iGzpsLgU5hqkBh1dBLMqKBqAp1YPBbjGB56FnXEUbMQ2KmEXBNmhxAJdX87rReJZdzoe7ndYWLu4",
  "key10": "25VST1ZDo9JHdNijrFzNUZfWjnZWxYM2XEkEzeXbDnP5MguRe4qpBrmqhYmUuv5GD839T11XhuLDaPodURQncEer",
  "key11": "LTPMw6sJZSkjS2gBnYqCQW53zxhKgfoUQ6i1iy9mPBGGsZTquNaw1DGu7cpsvnG5idCRQyJQHGcGdPhZkbTATUx",
  "key12": "5Eh2tsFiUpfFffW9YaQtYMYMwvBTv6C4JhotwthbCVZKparLfW31sPTE88trCL5LcwtwBud5gGnpBxqaFJbGczgh",
  "key13": "27cCKey9DavYkViQjtppBn5h8hGcXPcvKTLfx5eWwdVRHRum3GdYXnNoEs6fvsUDWL2XM6AS9GpqvE7HmCcrpDX1",
  "key14": "5zUdGu4rNkujJttmtr6LXTnELuis8SX4575EPx5yDY9S4Q69EBtKobAnezQkPtu6X7xdDnuXVv6b74cd8NFZdnwu",
  "key15": "2bphZr5fNdE1yqKgdMNLR6Hcax6sqhMp2wGfhi4tq22H18VeStfW2GBkAYJKAavg6i9oNWqPmdLrxjgC4cEtRj7t",
  "key16": "56FLqmrnYc27p9ffjfcpkMiL5Jr7kvabVaRR2MC5GUBpGqBUxMbe1D9GuETDa73AQiftE194BXrwduzcdas2nzLf",
  "key17": "3uHmntb45HXcccgn6AgH8ET33k2WSWCQNrxYNivteWGwXgbTYQ2iWzpwzKWW6C7UrzDnn444MGNvUDiMtFGqATXt",
  "key18": "2vgMpAHTkAYcZFr1sULV7hWPKq2JKtYCnripwNeo8nHKct5DTQ5uWJjbk629QUuFXxsBGyR5GvxNZq9YVbnR9nSP",
  "key19": "KbPwWeXbdvGo2Hi9gM7fW2QEWriVCNBDNrvqu9De4ZrsgKwWtyJQxMnKgWwNwDvxpDCQsoRo4uS1VKgAzpdFAdo",
  "key20": "GM2GE39kFU7YXm756e2W8E59H7XbJPqQ8HdRaXBUK2sXZwEngMx8RWk5NCz29Qj29wM64JZXWtjJv3GgfJDbGxB",
  "key21": "5zdogj9cxksyHmhVZpoX6wgMRE1Ec8xh2Um5N91YGiYCw5PQdGJkG7qCrMFT51eVHgzYf1rmoJioQEeS9dv3zYKz",
  "key22": "49xiHzTNnp9icker1QhrchR69SzHCTi9EzRq92PekWGmMWV2UwbAUG1aP1KHTapJNRkkjv4x1XyeLWyeRdRuxT4o",
  "key23": "CeSbkEV471pJPbq5WArrR9ackZfSuW48FavE4BZgzBHfz38ekhkT9SwHigDv75k6JJQ6BnUXb6d6P4he8suszcR",
  "key24": "p7XPNzwKrLdFJjeZzgBG1n8H4D6NGQiQQq9Gn4BEXySQx4mqTYpVHXtJChM178DRMnRis6Pd1MQkPBXadGFUbbY",
  "key25": "5aqfvuwmTsDUzjVLwzjxXLeyjbyi3stwNf6h9bJV3XmiAjmDWRDTCtNduxw4xAKXPa7kX6QSJKQWbkb2M762bfn",
  "key26": "32ZNLD3dbxpqxFLYCEaWFgRY1hQSZhNYUSf7yKQaGH443A1WwM9QWyrJ9fq9xD3ibp8TK1U4q7U1ZAyxz38vKuY4",
  "key27": "4WPtk8xYGebcfwDWTwsiRKU8XFk4svk1MNBNgDcUq9GmB8Qy48aoGzzTXAPUY13UYNNr33F9LaRuAZhfFAgXjcsk",
  "key28": "2e3Nszm9GWfLQzDnrpPfgzfQyiDfTxa3gBsvozHWjb2et1v5L6ADFpYngAVsH7NSdgwXs1JuhbxSzgG48uHtt7Bn",
  "key29": "3Qa7CW7gtyuit9NQAYNUPj8HFAEbuknb3Wnu97QZAeAmyXcrTtK7AKtA41Nf7ZfD66LRhx85iYMsR6hBne58wSqk",
  "key30": "57dNMyKxZ3y2FQN9a1xnNrRBRASqLx8oVHwNTGzdVZ1wzjGKCHWTScHU57TkLYkXNE2tjSaWffcp1h7BYVZ2deZn",
  "key31": "4aJirtyMuxqUjCJwTzFeihxLRhxWs7EaFj7Udgu1NDRojrBrRjUh2MwtQuTfyKyZEs4UHN4u79XfMLdZ4kW2htS6",
  "key32": "3yAKtqMSMVtm7arWhTFVT2xg8QyFZAYYYm7LqnL8fbCT99ART5Yyn7DtT2Rp93ukrji7Gvw6pomVwdi1VdntbgqT",
  "key33": "bto7QmK7RCvqdfavEs5SALDkHVMceD7VTqtsb6wYQmdDQ5iRgUfEuZYBtUe4n7bUSbwtn3gVMRZD5fxLURuZhWK",
  "key34": "2doKfEPf7krQjcMT57jrn747jkVLWLnPudYiorjzTENygTanik2uo17WHhzNBBdcF8ZEA1x4RxJK5NeWAxHnba9K"
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

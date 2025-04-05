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
    "4FD13p6ffDV7b2Motp3tPMdR3Z7Ch3nd2fgvXaygHyATW2mNrvRJ1P3RCAhRBax7Syewsp7Vg6jtTQAsxzoonPM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GV5AK2Yo6UqTrSicAEd3x1FwXgq8Kt3cfn65whjfZzGHdUDYUXxmxJYXHoA6M38hjPkoBDD6xR7ynV1PBo65qGi",
  "key1": "5ogWbCb3bkYaAwUVyyMoabLasMTqsheKzFJBQJTTRZThFzX2DeWEB4AwFchXXPWdJ2jLzeDRsk4SfgDyMFSCgU4f",
  "key2": "2P8Ji2zHqygihTieiUsfpAVzT2CLj56W2rgsJuJqoxPm1YX1gNqheuGyQWRCnoMfNxhnNV9FE1QitZA2bBr4ncE3",
  "key3": "Zu5WHbkLQWcR1imYtwtN8RXXPwCGqDMeA1bkES1kLgbPpmhmaKshYoA7xag1txTrpCDRDAxvrUUVhAckHqkRjS9",
  "key4": "3518v8QZXR6EbQYdzetQmri7y8BCemEjJGMq8DzSXrYiko4yxvoHadTNsAmR5GhsPGET6MDRUcdR3beWVsCRbqNm",
  "key5": "5nTdGVYM4Pk1U1JUoY6PYb5Pq3MMXPeuELDU84mybdnpKrvRNA87Nb4xyfLQ8vwqJaznFq1VX4rLTW7cvoRzn7ST",
  "key6": "dcNwRjWb2FhoUUAc2zg6X5GQJnAkUJimm7qG5ynjP4aACn1CS7qSt5wzyU2Daq2otgQD6eyTEd5SiQyHLokPkdr",
  "key7": "C5hZPkkMZSwh7rKQ6PYt9F89ZHVM3hBzhVuJpFeyLU1TQGTqMj9p1ZfZu8W5a3RcUSwcZufp6Q77EhBFJeFN7pR",
  "key8": "cKrNmDH7571V7nbnkTnMDVQsY1XaGesWvsp9r4AJdYkydmUV9kh6bM8czSPtNZEar5rVzEsrjc5UCrhv7uh9gTj",
  "key9": "3R2isZzHr6uX8W1Gmq3LYqzPKWCNr6SxzgC45Wx8Myr5Y7TZJtsk7AVRZkYm7CSERXG27NSDCMeC9mw2XTPwaiGw",
  "key10": "3TMpqNryhSBhDAMdVsd74Kw11a4qCyoyenCc3BRwUidWu6jYqmNKXvWQ3m5HnG6x2USC1wSzXM5tpFhcPZqfhgXz",
  "key11": "3yWi2zWokHTkcd1ncgfn5pACu1CeRpFKCHNs1zwwD1PEM43w2W27h6VKE8n5dM4hTwx9jFb5mGuJbmj2EfjsYB1o",
  "key12": "4J5KDi1cUynAyWLWpmNhD6JTzZk9GHFcYgivEQSJ4C9nNPaVsRS8jFR3uew6euQtVrE4ixkvHzEaon1TSzDs91DR",
  "key13": "2WtauWY7tkKAyvRdpNm9w2Qxj5oWr3WzW11JDyGS2YzRHuu5K5SxoZhB7b6jcRkDaKHgpjQFNUZrdLDqfZ9a2uJD",
  "key14": "2ddjcQu9zkUBDHKwELSaGRQhv65WtKjh8mPCH1yjpLs3outAKpdS8qrm1UdJ4Bw22id7p2KMYApSxvhGaH2xXWH2",
  "key15": "5nkr8CtkFbsC3SxP5kCzNEaVYdiAUsFe7ber8ugavtEFGufPJXJGxhjh2ueBRmxMJyENW9KU82cR6BzmDADMwU9q",
  "key16": "49ap7nypoB2tDTkpFY21JD6sJR3ojkbYHseHtYCD5DoWVxkGBkthsqUv6bq4tF5nzhQFCVLfzrkMDTGGL1E2wRKd",
  "key17": "36xnWh98ThgH4MWrkETMNUXSCCt1gUvB3pKfNdS32KRETGQP5arz5yrqhKkb7DneZ6GZw2j931oxsPdbTrkJGu8w",
  "key18": "eZfYegjvPqsZ5ZHzmgWp9yH88R3J1s8a6PpmUb4PT5SZWf2rRSjuWbZQNNLocicnAsmfEHcNe9KCrp3DKBKhh2h",
  "key19": "5h3tFbwnjDjjdJjMyxGdXwWxfRcGd8PCA255NPK7R5aRdHhcVw9pfS8cCZGrb8SZJJWRcxNAeoYVSex2Xs9jAoSr",
  "key20": "4QxsrTXzyEqPqe5MfZy9qyt89dzfwccvtyiMZ9CxMxg6FZczLktD6YxoB7y5cqkis1kuzSdaeKU5y3odY4NkwpYY",
  "key21": "5H7bqhUtv13kmYLNtRBY6R2xJDFNsNAq7M5TWEpJxQXhokvk3bZSFCy8fxR1QSUukG7Q5zjWFmCSrhkPqsXxuXYH",
  "key22": "4mrXUUXCwWwR1r8hy85W72QF9wLiSc2xR9i2RERZB2KfLsnwBGoRJF7XheEW6QceZwt7Ybf2mKK87Zp7YybHmZNE",
  "key23": "f1iwjjUkePdSsAg4nU7YWe7ciQXfQbYs5MzJDeUvdFZpU4i1zHHLChC3dRZt4cwiFEq56ChcAP2UkxhhDixF8df",
  "key24": "3QWeom85av57pPbuX5E9bbSi1oZC19uADTioMqD7VJv63NLZ7NdXXtfbMpAf5vRtzJsjzStkpzdDLdycZUmJ78ja",
  "key25": "BM6L9YniozU6pTvFVYZC3SrnHUSqM5V5ZnGp4zEzGP8QQ9w778JwFMVzsZrpV2gQeiHz6fWaYAS323ZwRhZzjpA",
  "key26": "5YQR1gQofxGsB79FaV7BxZUZ9TMYXutofXSsCvJshXssmK8xxCfpgJTdLfpEwzDdrdf85MfyK1wT5CBhzQCHNq1y",
  "key27": "4ySz7P2DisnRVssVPBsYyVEksLqkVRymBWCVbn2D6M54nMnSGKogpoE9EZEWDCew43jZ5SNQ7kGK6VtFXqSkDssv",
  "key28": "4QDeJfroVibNE4tdymbvJK3KcANoWEwtGK3gXUKwE5LRB6Z5iDqrKhueRaWgJjxv58Z2zijwRewoEWVotH7tJ55q",
  "key29": "vodFoHccwDC3SgbQHCB7aCvvo4tQLhsp7FhpahpMH7j5gF8cPfPx9f761Ay6hyLcBSJZNHYPbhXrDLtDrtS5iji"
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

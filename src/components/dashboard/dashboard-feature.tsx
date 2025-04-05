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
    "43LA517yF9adBGt4PJVXtoigjxrH3XTnDrkmtJhwdMLUsKrLWKBM57TMe95mDSoqioiLQiYkhG97m5qXqoUpeg6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TDin6PS6wQe5xGXhFw9whosfiiaTvmVneMJ6gnuL5uiSJceyjeDMZ52z9hPbReUFjUrHKQfVnkpW6WJtUx7r7kq",
  "key1": "3sbsTSF4iYjTJWzLPPs5eNtqLZD1Tvec43Z9ZQpVBGcoPKFWgWmzbgL1eawwZJ3LVoLkR7gH44NzkFJwew3ivZTt",
  "key2": "4f5xSnWWVjDB6nekty7m7RgwYSHnHTmipDEuLBZcCa1d9qSsy4HNGUqScFghxUKw3epDLnKPVzYNrYDVTPAmUyyE",
  "key3": "3uXnpi59sBRg6UYhbPC2S9eRXQM1URUANhDciPJNJN5jvUNPpP5euRAcRzxqXK1z24Si6LaoP4HPBDQnEhxMZ8Eh",
  "key4": "3UwoyPYyKD5pu1f2z2CD2P45WHbVoCng8FrBByb9eVktucJDdn7WvsDybxQAW6XN386HVYPdFtT4JnpzbqTqB5ZL",
  "key5": "5qqGzSWsy2M1gbCPBNAvRoGCYnk5FNcAejqePaxNiREmJ8L6ev3fp5cNunpt9FRp7qe81FCwVpj2iHx3RALbYmnH",
  "key6": "3DA69XLfKzbioReCmC58B2qBDrQQ7K3WfWfgNgdoWP8zfBZM7Dk91thj2HAhFA5Goqw5z4EGdWsGjScAaFLA54Nq",
  "key7": "5b5Howp89TBdv7UT4Ke9sM2X8Atusr2E2Cp6iD4DDHCJWJYSBunQdQakivMuMZgBUJqXBpCjUAkcQ3SgEC4fRh7g",
  "key8": "xNAvCxZUP3aGpGKCgs9VxiFqXTHpQ6dVGTpaevTPc32sgBxQPtDNJ4qkRkGoSseNQ4UmsFMhXUqxoXq4HW8L1Tx",
  "key9": "35h5iVQ9b7bSkdsMhcEThZ3h2xAAtF9gjSPYd8yFGu3stTBrYMsiZfqrzDdVs4QsbdxdgRaEBny3HYcfbJmuR4PQ",
  "key10": "4ixm53r4AuoknsTi91eGeiPKFJBuobjeac4FcWZUpspkhXTGqXNQPoYvePguecxXUuBxX44xguGtNPLntfzStADK",
  "key11": "311PkagudHbVXAmWLRY2kUB5g15hDzsPCZtEWyf6fXoLT3QVGEfCs9VscD5pbYUBgrGqcXfCSESd1hZ5FeC4uYtS",
  "key12": "2hNYMYgKZjVa9Df3ZojMcCEgyypEVW4UTYVmiF7N6hGxqAe58TJp23kS3ZMpwQSVBHUiboi5UGsxnnAsLwdABak8",
  "key13": "2Q9xM6TyzsNWd4wBRcs67dGApWQSsA7oH8Gnegaab33J9ia9yJ85j2faAFQ1cj54ozrLjQWZH8Rz8MCQSXYhyjZv",
  "key14": "4N6oCG3tgkruNZTEDtKzna7S2ZES77qVtdAnpk6L91Beb3m54Sdi1B1BvpSqTS3szwV8UQ52a8rGmNwH2SC3db8r",
  "key15": "5oUJ6EHK8wYPhHbRcsPucT4vucjQeNewQhZqRK96BN3QFBWr2Yh19HSNyNiZH7QRRQvwsTQzZ176CxxFVM22CQaN",
  "key16": "4ptRUtgRk5YLQzinjUuVwMnvyFLLmQz5BvNNm1Ft1Q1ccwQGFwY9YZxFLdPthrNKsnHBT8rNKwkrvGSGHZjWCYx7",
  "key17": "3PkhMAfh1huek7yS4kBdsFgewp6F4h2W513ZxxKkfWrHAGiZf5HTUhR6PFunQc1pi1ThrNNhrKsWvbVzHGbuEAU1",
  "key18": "2j6WcXziQ2YP7roaR2cnVnGfXb6fgX4kTqekz78gcy1f6gzpzPM1LNRxSzWjLm8AYqmm1jvKyyrm22N1Pm24hHNs",
  "key19": "4j4YMjDH1uDFX9VSZeZXZFKpUjq87LFWHu9oDpCMvCTrHe2kPeqf1Vayajms2W3ULs5dbDfSpcjJ8rooFYAzyRe8",
  "key20": "3UiitZiFokLjgpjzXaaS67ZVpQBEd8LvXVW2YHX2pjqsk9YgYi9EvmZj9knrtKX4TSvoYGG6X1DuT5R9wFqtf4AE",
  "key21": "Adr7pooK1e2vbhNxVNjfjUdDNZJhpLjSJ74FV5UPtMyLKpnPyqeoyEzj1vGsSR6QvqUpqSWdbt4KHW38YY5dArU",
  "key22": "3qB35fjPukrTWaJBjzvtYoxMMcsxXEZQjbsekCfm3A8MNn8ELDbE1riTkqkj1yiuxhFYeF61NpvcLrpcUmbnB1y7",
  "key23": "HXR6Fh4ECc2QdVCsTiyqwpcmxNpd4WPcXqThBPzUxhxjFtTS3c3rZcnRN6y123v4i845RtjdKyDhQvWSuYx5jSU",
  "key24": "4yQDwwoL24fh3jVY2Bb32deo3C19xnTPeJDtNZvUFhgF9syXozeen36TuCtcigeSVuXf2vPhqeCuQh6G7jXwNFXs",
  "key25": "zqeveBg5KkKgLR3wkPJo19WBAYTR7eCwfFkTMCJMnKehiCDyphywSxjeEJt6A9pEbcncx5uc1sZg9MKUQzL6yM5",
  "key26": "3pqJ2gN3egs5PJpTXVUpRGynZ3PNdBjJGHBt8UYPc2fL4iSJ7BGaWTp7y9qBaxopmLeEnvT75ktAw8xQEKWyNAhU",
  "key27": "4hXfMHWbfNJpEN13mgjZtwE28VuPwVNUq3sXm4aKay5iQTiRqBb2A7mmdjqnTDaFFf4tZrCJcQMJcCFMRBB9g8dh",
  "key28": "3CRMHEdZ2YpL97ui9T1do78Qp7LzQUD87yehESLXwEhUHxvbM4LU9CurzsUvRCviQ6cK61JjALEmxtgkdhcpGNro",
  "key29": "gWBsfqwGQs6Bs44a3RNWCEk2Kf9CVrKfCFwPBRPtrJnDwtA7DYxGDgDKodVYQiE2XswWx3iEGqUvHMVxHgoXAbd",
  "key30": "5UKyyKxqRCu6TepjQkKZRHBeeYk1THcYRzwoSDvLbw8Nh1GGtYgQxmcvzuoL8DsQD7MYvoKmQpTMjSVeY5APePJz"
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

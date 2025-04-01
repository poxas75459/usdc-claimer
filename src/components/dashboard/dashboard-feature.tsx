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
    "52ie7aDPn19GEpJiRvQ5GYa7LXR1RXm7M1eR7tru8Maq2uT7Rc8ZaAnwnQWePfZCiMSwSVq6sA4v6dmwUxg1sABw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F2ZBu1cGoEj7JqbUQRpCbGpme4HHv5tuSgK1aoD8DoZNMvFBiJ3MzDenjYspp1kJHj2ibtW6GzA9PurC5a3UxwT",
  "key1": "2HcyuAEgnWSke1LtsscUgDekfHu6RnAyjN6yCVq4zKLau3qkfPRcAcWcX3EfMH77MkDRXX1ERwGqqtrDPQ5k4hnU",
  "key2": "8D8pEFe7kEeRAemE8Gs5RPtJt166QWm4TG4Q9cuNzYBFygxtWeywXkPjBK4kyDzDsMCvfiPWxGwBVVna5i1mLtU",
  "key3": "3TN7C9MdyCStjwkrQ6i8SD8nwPYxRdRExASTup895GRzRUtpesZrNfU7Zg6d5LAEXnhZ7nKiyghK1FpgZ5321sMw",
  "key4": "2sww1KzCYxKjbqHa6Fja3ohHzors6RsoZNMKdpinAL2RZsoHrgbHdGaafCMDks5uLvo5fxvMbkHoNfz9JQK9LidW",
  "key5": "sMozuCUXVhWkYjXQoxjhrXvjECw8swQttVATEPXqLAxffJZLcdxR7kkgNFC3WWP3YY1SWAu9eP7iz6fUopAL4q1",
  "key6": "4zm166M5ZsZYJM98eDq6nHyv1HeWJvS6zkN821R2D48DD1z56usiLpQYR3i9ufBFVV1tc3pVp8QkrG3F8RDrNNaF",
  "key7": "5JGJw6S83WxYCjQxEs9otQmzryX9v2KwVxKrW6DdHHC2rpmebCizYBw5Gwkyz7LA87DL1SDSToCBui3hXZYVdBc",
  "key8": "5TuQ9BX9pzemZ6QkK2RsqyUgqVp868H5nJb58xqTrzJMqV46HDAUzBkfy6kr6PUXDXqYKQ6upPK2PqpVoxg6kNY7",
  "key9": "BsJgzcYaH1zE6YvvBmZ5WE2SKpubHTBctuiCzsAHKWPoPLz9VveBZA5uGrEySoT153uWj6YGfBUcYdwXbrpV9Ag",
  "key10": "4UxBpaMMDdq6Z9ReyQ188c9UAjn5aAeVzozA4k2xepAC1aWB9rGyGKgkZsztwBcXRxiPc6fcU4L8scLyCpFM4pq2",
  "key11": "5zDkNMUdTZaeNe7a1PmaX2ascjSqcC5ZSbzdL5t9fLFnPHwuU8MXYdzcZez2KaP2kBhG7ofdMuwHrGSfSEYgngYf",
  "key12": "3h1S7YMBTqqtmQ1q5JEvV7Td6mdBaRofKSVy5KxiEwTgZWRm7CjeSW9o4vdqLd9DK6PZHitbAz2Aec4iQjNv1XXN",
  "key13": "5opqhJ1qbsdNn4GWKUzw8Lt7A3yWYJNzmQa1bKdrNxXefqeXSjCbXkrdfZ3QjVHUbCN2mQcSb7rhUsKT6gAzmjW1",
  "key14": "4PbTM7bscXY2LX3o4qp3TU3Zdz5LMTaEonGanWqv5r8jnaX1Yrt88pCXsuyR3biz9vrAxfgUutVYn8FXAQFDzokg",
  "key15": "5d65unbQ2JwsJ6agPJYzXPpmonL4VysH4kA2ANNSdvfeAHKfYwhgvQ4UyJXkXiQhqQCymhb2eqCu1PeEZyvPmUdq",
  "key16": "3iDNU9zzQsycQ75XToGqkhmXLXXgeQo9FkUMu4pG6f9E5xHko1Vfen3EtgUeVNoYyZBEDnJeG3GoWYwGkYf15Ly9",
  "key17": "2jt2FoFcHLwwxRbsQsiVDDRsEXqjCXW8wTt8GFEFWBA6KgeQDvWCt4Xr7s9KQDgRyyuuZtuPp5Cxjin4983SwXfv",
  "key18": "24a37mfLp2J7BTNqWUmREcmwQ6r1hdtunQsxnmsNuCnAP3G2xcJ5w5JEiyRTtBtoPs8Uc9v7mdTfNt2djqMv4vw3",
  "key19": "33pynMHtydiegeBHyrPSqZGj5a9RKjKECw381NHqztKyngFKaS5V8skK9kxpYbc1iFHiEBta9FiBcf1nqFWmA4m4",
  "key20": "2rXS2kQrtZGoXTST63EwrvYfK7bmA3ETv5LGHoPUtdgCupxgXLsyPd3ZswrDoEEUmjJ8FAJZquPtSczJDsvK5XWc",
  "key21": "1erNszjbGPyDPcXdW8gTDxFfho6n7nkfqX7bUxuc44c7jsxTxAbjwfmM9B7iEGzmukkcA4ZWWb7j7mDdtK1hK54",
  "key22": "4uDX2bRVJAKDA1kMtgFSpvxyaQ712RgoeWegBPjvqiURKVznqimnLpM93yBKiHWu4tT91HtitBGAmKWzxY3jpHeZ",
  "key23": "3qkUQgFdf1JYiEunTowS96kYfHF5oz9oDsMPebQZn9JQnGTmNw8wrHxec7mnBsk8nakys5d7LfhULA4XJtLSGefi",
  "key24": "4ck8K7DKkQQEn6rMF19G6aTTH3SmkFTgMdkX6gtFPnS87HF3nHpZh44XhvkHB8mQGqXBGDHd38V3wFEq6o5Jvk23",
  "key25": "48TTpxX1Ys8kxjepCBJxMcqA6jR8nRuCYFauxDpYyu9ipa4mNPjRcFWPpbPTBrmdfHHvdBgX3V4dyBUEURw9xW9K",
  "key26": "5TwYdeWeq4jwWwUF7d7QRUHt3eF5vmVpxjVgXTxWBeeuvPWB8abTDEiLFFsFtxCjE7JL8zr4crTE9sis2TeW8iSE",
  "key27": "2sdzbDZDrdMaUDzxdew4sbU21zfj9oU4BUq9X1tpdw5mtb7uuBUC4Ms4EoLPz6kuZp32jfVPxkQJMmtqYe3WSh4x"
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

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
    "429YGYNZa5i6cHMasVkjMQc4yLEMGpoqjjHx8TbuJqAPq25151iXqdfkMSszkQvPvezAXMv8wDtDyJ2jLSD3ESRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51533piRyRAGWGYGTumdMq7irZyzQ6WstuXw2s2R84FQshESKhCLQgNpmkApAENTHFKdp661B6XjbC4MXGu1h3Qr",
  "key1": "4b92mBMkz2GFihMdUAvCRRzuyTYU8KaZHvUKnBocVCzX84EzaAyygBiQVZ4DwLxWKS4WHGCs4PKoPFQmNcnS8v3g",
  "key2": "5XvXdsWXAmvnMoBeAXJPgbvAsCev6tQ5Dg4aQMTCjuCNM1RyvmNVU8nmx1KVqMUw7Kcemfy699Ff91JKz7RfGVXj",
  "key3": "4g5NR6LLa5wMiCyqYVhBubQZnD1j2HdDjSMjowS6GxjT35aKUcQac8czQS9LRVeQskSF7942i9vBjXR6YGGzo6MY",
  "key4": "2NtTHCzZ4WvWy344ko6dKYYJb1eu5VKMZFegb9nW4ZvpTvKNEaMAQsPazv4YuKZc5qz2Dz1A8mSCrSzcEtXjRPxJ",
  "key5": "32HCehxM5SQHyMoAhpR2gchpe33XnmEk8wwKi5pf7Qdvq9MtWZ9oi1yDnVSCTjQWf1K4k2nA1XsCGRUw3A3NMM1t",
  "key6": "5rkbsaFYbEtWcr7m9ucgu1qFnwAvfp8PeLtRJpxRMK9Ex9CJGdnmB9UUNBSsVNJ9K6vA4pkzZzxfRxJQr6apX8uz",
  "key7": "2HgZBNqBTF578eLxyaRAC54Hpq9qeqdGt79YDfW86v5ZNGy7KyZR7fdkeaCp599kC2wWFMkbwd7kEfiDK7GByE2x",
  "key8": "HsSJPZoju5Whfo1KjMdRn9AyGcveMqba3PfoztU5MWhPZQZ2U25nM7ex8vMFPbFkLFoKDVs7ZFNHyqfznCPb847",
  "key9": "1CF1e69xwjs1mZbx4W94jZDHWeGrbLswgCdgfFoxtAmuKzjZc1E7rcRmghDQFjTNL2YxFeBToKr4Fv9W8UNT8Zh",
  "key10": "5vavW9gPF7H4P7pqMjzbX8jwuhRxwpVA2ZdvV7b4sXcHnxpUujK2ELbATQGYTHUawRZuZ4oiLUZwgMiNvhYq5sJz",
  "key11": "5e2TSQjYk46j4gH4ituJ3m48cbJf595oMpERcpiSj3UV7hYzQdcaCLiksbw1mRS6iVzhsiBzYJkTGkMj6rtDnjGU",
  "key12": "wjP9GtmfDUtiuKN8fp2Ypa6bkoQFt6WoTHSRDiu6zMNYiopSbjYdGgZHjVBirhbdw5sBVXxLnsRnKQH9d1ddMEj",
  "key13": "VqNDb1THkkzr592xvsxcn4cGSspXFajgAswMf4LLL2YibZLBh8qDnQttuh5ujsiuwW1nTHTK7ASu1t6tcZ4Rtvh",
  "key14": "5RSBbo6sVqd1jEMqz24fhPWdAJfFy2XpFwCZB5ErXDfoxShAvueBWoR3ZbjiX3Gy5LVkoQSpvNdzeRsUUSqLPLS1",
  "key15": "2umziSc5AHU7k36gPxRVFovfNWB5Huzrqc5Y8qwFS4sgVBZELK2d2HLwU8f1xSBzhXw5wntUV5wDangwztACuyRR",
  "key16": "21W5ZMiaDnHBkdHEsNBkZbdFyrYqfshVQ99BA3TK7NLP2pFpzTvC7XAQKGEAk7xBQFDW6buvxLCyJ6EdSbDy1P5N",
  "key17": "3Ph2Z9UsvfHCTfNstby8wiEoRMwkYsJ6GcSKhZSCqesWEzdvw766a1jhH6zKYKxxQDo9Ef9dEcWR5Q5tNBsGrga9",
  "key18": "5beqfrh2C3S7A3afNgiX2CsimRhZY9n3tJNqmJxVYKvMHPDW6xJrmtnkAa7LVLKy1ZMcnBjJ6JATy4CsJUzGLx5Y",
  "key19": "421gkJHELSkrHtXnFQYHgm2BiNvXGm8Abb84jwnJGdktbMywTikPhW3fsjzDraHnM41Ynjypcu27LJnWggxUnWdW",
  "key20": "5QA6fqbzYx75GhQpnGQQWCrYYewpcYrSFEMM6bY6KVX6V2dGsvYmaRk8quQv9FBnex8PH6ecFWJ16Ppd1JgtGCcQ",
  "key21": "2srdjUvCFpR7KXw9t9M5VbJLFxnEEXLX4jFW7Ngpfk5mDM6KPpp3952MUWhVVGbuuXUvZT57EMUDGWWfMN3B4S3D",
  "key22": "5v6muLv4qFP6EAjBQr9ky9GW3hyPi5LVVbmNBNdPf9wcUA3sSTEZJePd5s4WcfsLKVHNdxhCUrJUtCXskwpHb5Nc",
  "key23": "2XL3E7gEFtNHTNy66wVaB352pZ6C6UNJL3253fyDcttU94bWXzEhrP1BvBn8icqLGzY4kcMEd1f5hUA6xEMb3ABg",
  "key24": "2pwb7RhaPDLMbAm9fzqqpmJYWL2BC5tY4oFTdN6JLGvqsQiFyF7dducPxBL7SsBcjfL3P6fxYy8Nt7vDEpXiacEW",
  "key25": "4fCJfYKozD73EeZ7w2G6swH3EzxbLNEk5rWfkPef6a29iKDobjFpUiiDH6L5s1QVrTBJWz1hQ7rErVxvFXo7rRpT",
  "key26": "5vYK5rnNZVysLTnTMQvWFEYSX11k2WPcsbSsdcHGaUYjg8TyEn9zi1wMnq1KVkw9UcGX1fibuyq54Rj2YfJ8guea",
  "key27": "5hwyRPEq44YbXzHT7iEYgs9Qr2KteuMmAVyFZfQfueFghP1oDds4MdZo8RGqDAQoRgRnvzSmxZiQmJtTdud7uRd7",
  "key28": "288kCmLtt8r8burbPfuWGe1t8THb2Uh86HH5Mbayohuyavcu54j5GVMc2he5Ut7YJnphwwYSWVuRPyiwqkTYhMuq",
  "key29": "aL87iZP5786KksLfGS5LSpGEtrzzDHiME7MQ3aqAGnmwF2bv8T9CNb8suZDKCNMpTftbNeC99L6ppcY7wWvK4CA",
  "key30": "2Cct1BMGzFxuugdGoYoFGTfCjPwyS1YJPhTM5EY4XWBatcwJixvC4QySFsSA8pEEDYSGLgsWgmQHMbSpcoQe3PH3",
  "key31": "4VgLjqVdpDNXoaApsuaduPWG6x6CMKszMcwYdcLpWACzwAXXYoznqXasWyGzrvsnfwMVgPVG1DweqZsVgctBpoC9",
  "key32": "URrT9qvgz8NA9W6g9sAmbSbM28JtdjGBKQ3gPEBn5chmjQY6CLaz7PkTA96H8fYaJw5yyuG9bdJ72rVCGhPKP9j",
  "key33": "2myWurvogjxC2MCNCFYor2mH5cJLi6qkfEq6wu5xtDbjYxQyhUeosZJo2S5PcZovSdX88bns8RsGvT8VT4AjaWL6",
  "key34": "4tYKoDqomEHKE4NSGAMHnLbptFUhHMZn32X7zsiQ23JX9jx33oy9JZ6oBfkdjTmw5ahTAuavuBDErBjziKWE31it",
  "key35": "61DxycDSd1xwzrF8kxvcekxMx1LbonxdACr4LHuztEFRNww5XBNhkymLFzazWEVu9W6AK6mw25d25d8Hs14e1ACF",
  "key36": "4XZKd21NB6VsWianYwwz9JiqudyQLZTKSGFHisSzmuWDznPRfY5zBLiccJ9wjGS6MVP9gD3oXTBuv7ut7STRFWbR",
  "key37": "3SE8T3WbuuN1PPqJdM9FimMwxrtyqSXHwRe9NL98QdiQS41vH2pdAqKxqPoLw8u85rPghsK9eZer8BdDP7VcrkVW",
  "key38": "RpwDVDmDHsMjzSEvkFP7U4phTZdc1BQ1AYavyB4TfV8ELhFo71CqiM9je1BktuHCjLeLL3aBCjJDW6QnCd7edic",
  "key39": "22A5dDb9zhBDUhuxo7YWURpUtNdYedTv41DwpBqKrrRrT6sG5esx7jTVd73FCjM7qsYxgiYHzUUP96AP7Cg1wNiw",
  "key40": "w9cC6qccpDTKPnqGb6Z9d5ZCvTH9MraaNvpkNLfYPewk5SnPwz5hgkPD1Jn151ScrMz9TbeDLLjWurwuX4opW1j",
  "key41": "4SZxWfczpzwyfAVjwJwW7fm7Q1Xwf3xYLF99RY3TbDWvcfXhX2W9yB3meaqasANTjR3Y4ej3QKscBdt6s9CLobrb",
  "key42": "5wLjABSh2vwC56CN4eQ1kJNr93qcT1QtF53pK6BwikqwjY2q1srzU5heBLuAWkGQRiaxm5ABSVHUwFB2MjZx3VtM"
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

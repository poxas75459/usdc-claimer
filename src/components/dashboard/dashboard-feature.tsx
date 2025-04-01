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
    "trQ6jtVLJ7bPx4nqSEJJBCE5XZU5gBiGHMbFtsw4xKyEkWuC4Z18fc4cQ87oTB3CaLdEwfQ1GNHcjuUbxBawMw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NRmiHVYfGsrZz3iP7D6b7vXoBjtW42mPs7A7JLBmY8MQhz4tRqNQ1Th7aqvhLAxrQXfLSS3Sh8iRmiDwi7mjn26",
  "key1": "5aPHGeh13nxkLDfGhXixNV5YchaTGCuu4avJEyaRYgwZm81LFyVy5c39Q4UmF9TfdVkLKpFUu8smsuDMdXRxSBCZ",
  "key2": "2EVGxenRhQ2tt5ZZKG2iaB4SAwoBtYJybDdErSiGj1SusvzRKuz6jB6oiXYHyPgjUkJeMAFUyUvy2Cf9hpJuWFhi",
  "key3": "3wAot4ja1pv8h2trhWYCUUTERux6Bbni5iUxNrh8qgbsbxn6LZgvQ6Mjjy1ktHtvtD6cMupnRqHTKt8TqhHGQTuy",
  "key4": "DajsPD47Xb7viLryKWu8rseD6P2aiS7XC6xX73RsKPMkuhc7CKikjpT5go2L7Kw7mqN738SWvdDPAEPf9tscdGs",
  "key5": "2bdrQNGDQqfBU46ubJN1tTVBb5uXR7XzeRnpoJEANbmkgu1qBmK9Ru732gdGrEBkPjb9dpGebWXwiTz3ujZzXaT3",
  "key6": "5dy2zH9SCg3odvpmZFKjZCJvMJ1DnPJnqecUYoL67hUhq1jNnikgut6qbr6DaNHDnGRSHTGp2UoUd7JNyFgvtEoY",
  "key7": "4z2KkzYk9qKx2gec9fzVGBoH9ht8Ej7wnjUPHhdzmJn6jwdG6H1ZLSXRar555xKDVthCD3LjtzwEd1JWcY3g9po1",
  "key8": "4Gi3BhhAiJ5kxxYBWoG1LqS8EgzD5wxqPgPzaqWi6RYH8WwenCQLgMyWq8zqudHHXSib9hkkxtipo1EkjMuzq5dZ",
  "key9": "2uoFVrrbdXGNQTUnCoW7njrGnQq3AwGvKc6YdwMHhaTEGR8hVj36Fe2zrw31J6NEbbrya8juhGucgpMTrz8pRofb",
  "key10": "4YiLB5sRws5pqvA1ukbRnw3oieGqxdAYtAXUUKuL4R5mMZSZP18LYw5BrhL7ciyw7o7RhkTWPNDbma1YA6H4gcD7",
  "key11": "4ARsJTRuM5PpFSGqtdanczVQqyjbBumbJfaWdsFfLyfyixKA8qsL7MpwY2v8XDbA7ocwCywDSHN6JX4yvoWPTe2h",
  "key12": "2XoQ8GWhieWTie7X67joVUntBVzGRJkDYhjiTbwvxVjGoBBLrqUWDvKAmCE5LxdfwyZKYy51RJE3v9dJohMv5dwt",
  "key13": "2svotMgnswsN86oWVaVrGfQAnZdFDoKBBZtiRZ5djdECkqCJmkKczAN5ZAAPoZKKyKcE8H1vSMvKUtYo6tCoKyqR",
  "key14": "14d9s1Vve6FPhqhrkdohS722YoHaukPJJo3QXPgxJequak6dSKuWRFsYBHdzJMY4wqmtBdME7N65KhSUbzWju4L",
  "key15": "2DKcHSKLe5Dk3MshcCLEjjdV76H2PtBTTTBuJ77H6YSs27vEX3bitsDZEM6c3irButfhMK62zypob2XTLWvFPgYm",
  "key16": "4fbNma2QUCGEXe4Vnh7JbjkPBxHd5dwnVg6e4DXeF46GeKwJA4YfRUMToNcqkjRaTQ5ky3g3EFb61sJ7KkUai9Nx",
  "key17": "GnXvn5np4RYNQZpB4mK4g9PZKJyi9ke3ohtMF6fKEb4BnBEHvsBbh5cUTEEPRxTdrsquTzsQ13ivQgTMYRjqpsD",
  "key18": "uaELcw1N9SoKTChNEpRGHFX7TUTB3TFvxFJupv29aahEwTm7rDT4o7jFCxZQ6ho6fSVwxueVtnHRAnxRYwsDEZZ",
  "key19": "2SAEXKGs8de1v3UyE9QGqvKqkJq4NHm6Harn3ZGwZe8Krhvvif7WxY7ppdBfdbHvsG4ChqD764EJcsDXKKhsUFDg",
  "key20": "5JuJ5sP38X3BTn8xTEhLFKZLS6vrJa5MA2yVrFFCSFs9SA79J2RL9vEYLihM77ucqW1aUeNYJ96YmEdjRKeG3gkW",
  "key21": "4iaW68MyqyrgTW2WsCFv884xLLzQAoQNNS13M9EvPpDFdpBVHhUzYeAxdKvdG3byLR31QU6E4YaXpfSYvh3mqzZm",
  "key22": "58mbkP41CFpzzpa2NTCwKTPKTZrDH2WE8EbHCN3t2EsuPg1phuGqCXizoEido3Ez4c16XLem5T6QR6whwCBiW7aE",
  "key23": "2cdCkyhcuZrXfou1HyvfEjmFm5Qdcu1hiuFctpXRNFBaRzBDbRi2ZtYFwycfySbpt9cKasBvNDyBeg4CHNDPTpWB",
  "key24": "KHJ1XoJczFw5HQSHQQMC2UxVP9PJsHyKXhR23z2yHUUQtuxNPsrD2n6ciRFFpUc7dPLxKxBNmaQShGskEa2aDhz",
  "key25": "2ercaJxxndEvq3E1ADdTrn9KEN3oazzJrPSw8gjjCdtP5uyK7MJcRz62vKANVvAfAa7cnnGrS44G8vMpGq1Fq5Hx",
  "key26": "2tpZcWybFq59cEJ2XDC2tmtKzWgLnAwZBFZK4eVkbiB3s9MGguQu78kJKtukS1k1XFcZLPvEZdUPY7fjMWJQWuXX",
  "key27": "4smNRR8i65yGrMVj6aJBnsZ24jk7Em59QvcXhR2GiTtc8vwkCdNE4c4uddZ8b1BUYD7G9qgTvMA87ZNjuJWwXkWK",
  "key28": "YkbrTzsZVJ1eTtd5QGHmuct28io836Xa2SxUUatVF8vjcJ2qgQPwV88hRBY6dMEoRj635ZaRr2VL3Tyo5enuFCY",
  "key29": "2uF5V4Yq25zQcx1y69YNEGkdp1RH25j99fP8EkGJnqaZF5jxiTVDmsF4cuGQeYHVx7PiJbo2SyT2ndpG8riVqkLB",
  "key30": "ZzEyobh4fDod38QU8WWA1rJiupstU6Am7nsUBD3pLGmuCGG66VudTZSg736AD8ta5q21tSzc8ftLiooV7Xb7doR",
  "key31": "54xpyDC1sf8U1DKa96NNe6sJ5JdwiFMga5F8HaCB5BfVUMEDNx7Eqgk8uyAQYHnj9h7bQeCeoeubFGtLLSJdDMPG",
  "key32": "5X6cMe7MmGmmuhoqx9dK4d52gsR7sX6V7FxUpq55VYuQxUWFMDqgSB2rYhVdi3PS1EL8mhCH8XQwHoCmrSTSUvzb",
  "key33": "2S9EfXAzCeENAeUyGryQRHaw4ZgKTW8sQUdVm1cvQ2EeJ1gdxjHR66orxk11DYKGDV6kypsSwgczMEGq18GY55kh",
  "key34": "kGB8Jda9NqrBh6ouahqgBHcAb3kFwS8BgakLfNSp8Wt3xoHWVV3YJJmftUodFUYyjEoSQckVFwkovjbYxzYnkvo",
  "key35": "3Vt4sKWR2ncHmJuyab5kutTaPUyFBQAVd52Qu5yXH231CW4ZvYs82kHs6ZVj1KNsR23mBU3Ryucuh7kxKCrEkDFx",
  "key36": "2198FQ6H7e4dURnkFUCKvTWQxe4W2WdMr2QY3AniJk8PieUh2kyqPfsLqKfq67sY7KncP2Z7ZAjNcYoPun9Pa2iB",
  "key37": "3gXMaEpnEFWEQo9MpFdh1eabURJz1uSiiTFiS9LkCJHsy3tkUuBtL5UP3hwf7QzK5iqLEgbRBgXCcEJLBe9tRTpg",
  "key38": "2ym78Aj8eCt815Hhs4bY1wqBJJ4EuGzpFbZjqS5Xu6Xisv3DdSdD2stHRsMBBEUng7KAAE9NJGLJN1Xdt9DtvL7p",
  "key39": "3aBAKVSvNvxEPxrywVdt7K9aaZuzEfmNoiEsDhY6FNWi2ZPjGaZScESMLMDUhGhC6Hhbejt2tHsdDEexwitzQf3x",
  "key40": "21x8DC3dPRsJRjgVPc3N6d7F9aqgp6sDGTrM2sbM8VgTavUZjRaEsLV5qvwQTSAVc9qEoUcRPjG7TmyQh3Y8tPYX",
  "key41": "yzXfsEzzT1a1FXutYvkb3W3EfoPDqxm7BjpnpdtWPtpCqwz5xaTu6K6JSXW4Djr9aw3nAy1x9LPGBNMm4P2tGEM",
  "key42": "5co3YrGPvCKmiEvuex7hVJwBSeZbGfRbWfnstSYN8uc1cNirqepSWAwKdAg6Pz363xxNJPgMdNCom2S3hrwvrBAh",
  "key43": "4UmkkgTmmRENHeMVCu7R9m93jjAag7mxav5dkZgAm3C9ggnezdn8kKxUPx85iK7qepYwzLDBnv7pTE5K8Cv2n8bA",
  "key44": "3gufKopPT9Ci2CLPAtkdqiowFL3gPXFNptGKnLgLVjbSjwfAFdkKwSxH2RF8WTXqd84h9kPUWHeQBjVVFNF9dAia",
  "key45": "5FrbpaFZ7X86hHnjs11qj3sqJRMdhaGv4x7Ai7x7L6PYYbnqiMWUvdnUwLkR2cF3K6fmH2jY3e1PRikZSPqrH6nS"
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

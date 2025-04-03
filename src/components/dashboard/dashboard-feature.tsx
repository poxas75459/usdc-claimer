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
    "54s7w5G2VSauCe4iu1KNhbXEuQdfz7WU7dTtnpmyrDhQFKSS9ecDEg476r6F8r5k9EJ3oqSdFTZo73a7KMkEXYZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Ya4ZCL88b4gqGbLVLas9JDd2ENJSd4EzB33JnyRQ5dihXU6cwjUvt242jpaUWGdTutN8Y5RMEV28u6KmzNP4gJ",
  "key1": "MU9yetMYYecTwCsYVAbyGaZsvdqo1GSv1RGM59Hbe1ZAsjbaUvbW7L8R27bXFm6a6TKNeAjtSrRSmnwyfdHWrcg",
  "key2": "j5j9aCZMZwvu8HB6ABSiRGKC4Eq2XD5YagGZDuMzd5Dxbfz9c71AXnMobR7x5u6Wv9jjoLAvciTqS4WX315e7zB",
  "key3": "42QazjWVyZMXfuYLT435aXDkMaGSFzBvgGVitTztTnBQJC28GJGscRSnukfpr4qi6NQqHZ2JWhJYdg9Tc24ByvtP",
  "key4": "3UfcLeRLysVdirVPBrucc3WDpigTRuuLE5HrcP1qqxPJ5Z14GM76363tZzGJ1Qo3PJbAepp6h264bz8ERpDjo6VX",
  "key5": "5D3ewK5ruhfxQyyT32Jj76sZgxZB6J9yrz5aBNVJejQX1sNdvB82VnbXpqM6xFx35jiGRRLRHY2WNt8Gc4UZshQy",
  "key6": "5JkMc1kiSWBqENX9A5ug6izDNd8Xm2eyEHxaxAG1HVgxMknvLXWatc8ot9TqhyHx8BbEtkZwFGgzKb3s9WCXDazr",
  "key7": "5VqdHYtGfYQQr54xBSNXKk9NhKn6j9ytJVuFyft8eM5iuA6rjFLMd1REmBdNwzWC3SQ49439dwg4UyAw7q7Q5M5U",
  "key8": "3YpLhU8sGvMAXXb7GmYTuGn1MwHL1HBmiH36E8ycrsizsz6z7pMYTdV11A2wx7sZLtnSsx9FF1tYe5eYYqVt8QAx",
  "key9": "29nvw1MwKJowdyet4U9NLLXeoCCiu1fsVsvats39xPrPEvMYgFWgRQWJCPpT4o69dzFUbPjM39BsdJFw4ydAvjWG",
  "key10": "5GaekDMEQ2h5tnDqqFjLyrb37qg8fDyELhn8h22ucU4ivcFM8xqStTbdjsoEsiHUbVHAMw2w23uqPaMoMnozWmpz",
  "key11": "4hSzX7WAdfao9P6LzikxgKrXu5phkF2ztyQDcDgypvbobVj9t737r8C46hk7NFv5mS61UcrcKXAdodhg4Xt9VkM4",
  "key12": "pKy1Cs6GkF6yV9vug3hrFeTGhzhHkajdtPBqwNdNoywoPBK4smX5co3QbuJUZifahRKDw2WXBxbgPFfNnC55G63",
  "key13": "48mDSV3S8NxfcreCqdSvfWfbYch9kGHQKzJtWPxdLnZkEviRAQ8d14TenxsuFLUNgwWkxtEn6wmtWtZ3n9woWmdj",
  "key14": "2LQGwNu73FYzpUC1ezApdyJ42qWLcCAytSRU61NbRC12inxdjDYwGJzjwcY5UzpGj8VVjiwVTWQ5fven8eJRSjTh",
  "key15": "Ze72obRFk5wsweBDa3qR11CR6Exz8dHk9eTaAJdzMgLQLa1ZdHaxXGKysWianpbBD2685TwqW8dDUuoihLN37zd",
  "key16": "WJuRj5MSCNWjm7V1VPMChK982g4ZuqEZYB3FxaN2j52eh4Xta8Mm5MUSp1W5z218iXYfYqw2aKoJpz3mm1vVnR7",
  "key17": "36kEjzcoUhJy6Yqy8j35n7n9Qo96LehcrSdGeUEt4Ub2d7ky1c74SHh9pKmSAQpAmCQ5fjqBEHA7PYhhtrYgAd1m",
  "key18": "5Ffoo5E1N3APFcDYtU3nLzREHBZYv1TCgMrpbu3efr8R3M1NLQXXmPPgqA5mjMnqe3UAbjSix4cfQDJK1Xx2KNpp",
  "key19": "2SX7gdsa8uQzksYAvdRy2GbViqZcAzhrKQ5u4aoLtyjKnrmf4vavqNJxoaUJpBifbKA891oEr3D7xABgAsL68DDx",
  "key20": "53Csa7JEM6VzLk2JmNbXYqLr6D2hFcN5t5isKEiScTWNMswR9siRQTeLm65Lc7ndNuiasgUNmbXQ1QN2ydn65q5N",
  "key21": "JrUz9xdJ79vTGro8FC3W2gAGEnAmDh44Fi9td4FAzgfPd3GexvPGgNQfhjX2qih444vEgqT5g9BMszB5AuiTqD7",
  "key22": "CxMG7hJaoYht76XbHVmwq4WRj63fNMWeYEUcM2vXYF8nsTxAw2UM5AR1VsXAfr2oL3acp6JXb9t4R6PcAGb1Cor",
  "key23": "T3LLcECfZ16Hjb6QfPF1mq2fmMdQ9uqpzXPyeVr8xtwuaHGAMm8DG4AWEVJgtoYA5mx87DD5KnW6Dp2TFWU7FGM",
  "key24": "3hu9oZKZCs6kNkcj1MSCYg2qVxZHcUDtuz8QR5EMfc89EueeHNjTTwXLzohg61vJ4btfa59SkdJreFrDHG81VJQh",
  "key25": "QKs8i7LFLRdzvw3cDPDqAJ62VtRkBHgsbjCBkMjVZzTztqAm7zxBpaohUfQFbQL9nVn5roAGVJmxq9SYtmG8E1p",
  "key26": "5coSJztFp8E64Ws7jdSTEbrUE1yaxtGAfKpv3Nwob5KG6HzF13e1ZSwqsGN1poDfnpipv5pcNpy1xAwHYnXsSYq4",
  "key27": "5TR2nGEimVHBZj3pHQ3QWGsdiXM8QG8bYi9383KhKcnYFDywpvkBgswu7qR8LXEyBfBXvJSKKWbYkquqo4K8SS94",
  "key28": "RBKwsf26nh8F3YwyBQ9dJ3tAdqq2Pwr3XRzEbazvYgKDsyDYi5wtm5SXrki2BoSXJSyARaekYW5vHJkE1km5QgR",
  "key29": "4PuysvDLumfmSvmswSyWqEFPKFELfdB5CHfhkPE6chdNCJB3AawperZKy2axzKCWncHwshzNnCjKEbuSp644yMHz",
  "key30": "7NXVdux2W2E7MeRd6Fq54mZ6MSRHhwSeYPWibnciKY77zD1nDt7EZSgaU5nKovcWTENSfocrTukPpwkFzdKr1ar",
  "key31": "32MHYQGN4hFE22G5h7WYpYKBzpLXnBepjzDr6mPgKjxL8u59iYDmqgEYQ8LuWfKxdNxY2W1N347T59p5EfjrnK7C",
  "key32": "4e5du8s9bzJ7tqN92nnU7usyE67JwC3JBhMSNpNTEryYFCfSUQAcpt3zUHH4EjpdizisLLhFec3TLs4rYesfF4W7"
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

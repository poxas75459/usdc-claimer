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
    "3EJrwynPgbieMo1txJqkDbUecwPfVDxFPwXP8yyLo2khPURWsCTTtpraVgpVALbDyvAauF8d7W47qBYzi4QbUu9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Aa6o2rXoDUR5w5BLcLvYYHy1rYmybgEgChqoz5bhnsoN6uLBu88Fq5VLK4j21qqY5xartZN96Wkx7nuf7dJtLRa",
  "key1": "5xcLkgKWXw6fUerZdfDu2M4aTQWA6yP38zpjmu9kHEb23SrtCcE5yJrZC57vuz3ySDdcuRshyUFBuo3GCCbwdEAC",
  "key2": "5vnjy2VQb3i3i1ErUisG3Ffkhe3XA3t6hZS4StkCVNcHc5kcHA11d6GVt9tRdFE4V2MBJD9pidjg1DGc5WjNCxmx",
  "key3": "4SrZq7Qywbu2rsjwcjFnv7C6qUJUo85nMJQ5DCrWQevvqRPJzQXap3h33c5cdtmoAx8qYwRZ5d9f2x1ErLbc6rYV",
  "key4": "4yHtxcmyK1tHRPifKXSPg3V48k1J86KFkrahTpmurJn69bLQ8q5dfrcqib5r4gC6LdkjdrenD9UmXGj8Mv1vvqSJ",
  "key5": "5i4SSTjNMFwbzVJSwatKcCgUY6jnCJbLDEkNAwXPx7zpC8iHqBXREfHHuwazdKBKcvnKoJQhR9UNytvEdihU49du",
  "key6": "5P65DWTwqRNQYEnsRqixPvQuXcDhit9uan6ZosNXMnLtTdbJB5Vmyvs4mw5nYizAKSUxjKgj1GdgawyFUgWYRtMs",
  "key7": "5vezACFtyEWEhHzGuUFvqY7KcpqF4a9PivbMMzg4JFFQE2zS6siZSaUzPCaFUpRmQaC5Si6MYJBentEo2guo7dyr",
  "key8": "33Jk1LojdVi8sG44jCqXtVhhfAVbuQ6f4EKLReCAxt8MRBcma3onqQmbKrSh5R3khGh9RvqvUXjfe5auV2cqWHvD",
  "key9": "5YvfnCbWxeBwRFRz921pwDTYTX1K8fsXv9CA7w5EtZRAYHQebu6biFhHptBDtn2TzsktqoVzQViYNLyed2HfGamT",
  "key10": "22Jpet2gv6734PvPeR6bZE5ALD2epmVWfcuLUFJiT7tpeN1SJS6AmY1pco4LygCdTbyv3iWtNfPJcTfaaf81p4Zd",
  "key11": "S3CbN8XLfEfiM53nzcN7fk1ijuWQhvqL45Xkw5BcNZjfkXRrj3uJGBYEyvyS9FWWxs6xVqfHCCPKr8UbPL84XQx",
  "key12": "4UAfQFF1vTSkXbt3eQonhsFm9ks2jeu55mj8YBHGNRhqqEri5ZpjCKrSaVzjGVfabyyDTXgB8fHxWDw2Ga9ZNaXJ",
  "key13": "4mPnvDkYFUimN2p7gZoygy1ebemMCssmJMEjLrBhiYtRniLyS7R2gWwhN6xkrCFJ1FWuh7vyMdkdpsorByfGsER5",
  "key14": "65eVid5Ea3yQhCNUjaYEanywFk8YbiyohBwnZ9ynQLfTG7w3v1nqq5PJCviZjo7FRYXf6sz5fWrPtTzG49PCQPh3",
  "key15": "34gmVkbMxbjxahEvSpNsW7YP7t3Jz4vqEbugvTwMtmZbaU3dXBYdkRhQ9sL24cmAPTZTiKWAQQWxyZvTCnxPCvsE",
  "key16": "2en7fyaQnXW8qGevrHp72JpBELad9wj3qCwYxxAW4aFahHeDEHkmdLGgfx2qUuYy91KnugJdNyCJjATkK9tBnwab",
  "key17": "5QTnhDXRMhicbdxQ9pWjhoLa7htujBHNRP9uDf3AVP72jBKjzhbzqEXsNKktGn3TXweP7W7CqqJMp61su8qr7DX3",
  "key18": "52mj5W5BzpjzdHmdRBCjfNFb2xwnbWEWPLxaBvhZ6xwatxAQsNMpEku2tpVcTaSJaXf618UEZiWPhvgQGrTJcqNz",
  "key19": "3dbFeJurp4WUea6Svcg8MCac2guqLaqGkpD4wjBC8kWfA52SgMH5RqjRBAVj57LoEf5uAzyUcE1bF27SECCCHGox",
  "key20": "3ZaAf8m2xKQXkjPLoxDpaDoJywaxjNmDUoxwT7R8D8EKxN4ZTxri6tTN5AgeWMrqTuKVcPy4w1sm79CTg7KdHt1R",
  "key21": "5JBKW89GEZw6dzUE6YjjWc69rdtvysKUBFzdnYpTTxkqVvpEoHAJN1VEqp6yMjnqSThXwLKGYQcmKn2Wv48PfpyB",
  "key22": "3e3y9BLzyGnSzu14rhNVsDCfkP3D9fBz53zapTBpvRNCL8wTgM36M6u18K9MVPY3gAzBxqJqDwUdJ2P8Xt4tTSWV",
  "key23": "3PJcXZe8dJQHBRMDkqkt44EjmR6K1NNQ3XbsCtga1is4tkVgziVWvwNe9KHLatSuR8etY3pLCNMAT4JMhNse4eo3",
  "key24": "4FAGkm7ZakqR5V54MuZK8yMyUf55ruJqhHipMKBgJycJ2bAvj2v4Uy43CTUzomJdch1wPc6j4xjB6EMohyAyFHez",
  "key25": "3wx1ngNUrXy8i1Cd2aZmvpQN3EgbLFYgiyw7rqrgGrGXmNvd6W8g5Yvt5zp6o14mhpNqKJ5NLcBr7TqukmPLqsr8",
  "key26": "2UqMETg2ypsPA1VCA7pgDbd1rXQKjoDNK5m1SqmjX2jz1b5M3qSwLwpKRWhgakHioP2rKLb9Spjrq7HUkM419xg8",
  "key27": "4AACyQM2mVWvp8hfoZ87Xu9u7h9qr16z55xPaV7TatSSkv7d1cDnJRcPd1199jg1rkgzToFXncJ7CCeJeY3Rjj3u",
  "key28": "2crTBCxQEGtEbVoASt2Je4cCLKPtPLi3HEt8A3rvLT2bm7mtxARmo2WQuDb3wxXLbNxKT4Ex2eKRYKgmtev7KuX2",
  "key29": "MxiUAZoSLWGvSY8iHy15otDwmH1jE435kEDnHJXZxU1EEYf9wRg3RLghwSp5zFLSiMSLUa4TSN2Rvb1mkh5HJu2",
  "key30": "4tpt6CRGx5VTRCGjHtSyAuVMmQK5pPWNrypgRt3914unRPDnEnXJQVaNicroRvx9Fovx2Y6jrkbH6Sfd955jiFYX",
  "key31": "J1nXjWwhe1c8xLxb5VeV3hhHqftgFALb5kWybzKWcTqaShZPfXmHipRovYQ7wu7K8sD2A1GBpQY2WWWjsWTi2nJ",
  "key32": "4EHZVxaWP8gAupXpCjauiUc4j6LiYj8MUm1JTjYxHwC92a7HhQWkuDzJ6pNTeRCAgATZoVDW7ErwhFQDfa2A5M4z",
  "key33": "5dBsCwKZoQVKohpmKq7tsZ8UizD4wtYcnP2vuN8R8tY7c9iSc5LtxCBAZiuGc4ch7a1bWSSBx9VRB2ZsMbe3k7Ff",
  "key34": "4Gh92WiY9bwhJWL8uLcAwu1SdzbydCF2A2PNggL1Peow6Dj1LGKaVVmTAAK45gFa7LN4LHBjTGCURhkCokQVzHTL",
  "key35": "2TFwRjypNvzYMyrvdUQdkdLJ7WNGBZtCgqLvrxQr75Z4NmfJFWRGLv8bC2UVTD8NZ8QPJZvkKLPtsxmovWigh5Kv",
  "key36": "4nwcEfxFi8dRqq61tBS23ckfGecZ3tqtjxU1kfckkwn3FQTer2aGDwqMKrPzHgpwXpm5nq4KubC1qhyf8D3NFqcJ",
  "key37": "5LTTxirArxU8M4q5asDgNj9UVsG3ca2Ws8DimTpB1c4VGyZrruDbWjuFs6P57hn4NaKxtSi1JuLYyvUhXUB1XpEW",
  "key38": "5ViUhXLWLtQJynWr3PPEjwpmn19K6eRC22TA3WRFrboLuu5iMTxuL991kKJ4fT56dbcoMbc6NmcNeCfU8AnJqV6n"
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

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
    "5BmFSouaGaAZqDbjwJfzCq26HtBPzfUBaGsAJurn7pyV4nXemtxLKnpfRuBbuqczK8TMDY1XoW2STCgqq3iBmaNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wQdkeVxgyUbzRgFUAZTwuQiz9vgU69Zob29fVXYda5tRBiBQYDvnNTV5asNmrmWJHDD4LHD7Kfr8ymUvznMdUtA",
  "key1": "fT3DQ1eR1b6ePVA55ie4rQMr7ymfx4LQqaoTGM3BtbzKahr1tpXAYthNhRjxAHCLgQBFENfmKte6YboLphN3a4H",
  "key2": "29L4qQ6CXzyy7notAsmmP2qLFeZPXAoHeZoR9hh5UTpdw46T2sekMbjXA76jJ5b8vX3Y7wWt6ncmuMAr9pnbEs7Q",
  "key3": "3PTRABif88wB2wm9kMAF9bnD2eERQkH3uNUKYBUTLfPcBWVceffte2s3GSAsp73AL1hgBUuuTYH899imjryGyPYv",
  "key4": "2HRge7a5qwjXCpANXPSUsZhrK3c2EUJvFodwny4YZkpJS219kAe2o1HLrgQvt1bLjVWTi1AwKzqtV2JuHpUd5Gu8",
  "key5": "4J13wg8nidjFQEjxHSpNehdgm9GjtRy1rb1piixTug9Tnej1Wbj9jGoRQE1cqiQiGd6JxwCogEpcYEQya1HZ9aWt",
  "key6": "2uvUsaHzZoEb3C2hQ8DE37RkFCT1hFDfTAMqDkbGra4XTqdy7aJvz9psSb5bRWGSeHq83aQ8pwEgjeagcoTcaHaz",
  "key7": "3xuPorjL5Sk4qoV8PFs9Gb4c756ZQcafBNuRBPpWEzJdqfhKkWLRnmAW3KTRNep1Quqfw21HeZhxbrgQxZzDuQ3S",
  "key8": "3yiexJiT4CNtn3U1WbBzwvFNgMiXFa1TvaEs7jyPgSvKzpHFZE2soEVp6vodMBcdQVEhErk31ipJ5gL1JFHDsoFR",
  "key9": "3bJDsswQ3vqEjZGpHRJQu96p6CpXhSeyjiAKpNRyhscJWbLUHRb8JPaum9EWNobwZ7mFSurfFnzX68fo23GXsQHr",
  "key10": "3HDdoGamPWCY3hA6wL5DV4VsnWkAdA7ZHrVBWTVt5d5FbzXbBYuSFo2ojcV6ZnDb4dQP2WCU1LHyK9ro8wS2tmdm",
  "key11": "5XgusqS35X4SHeXfQ7tjU4qKfAiKawN6Rr3TcoYo6ia1bEm2cDHYvNTUTyg4qDuvgSLkV7NSsHxoBvio9XbDLjUn",
  "key12": "2pvLPVHyFTSdEEBmsPu1cBYGHWHivLfmKTHJhWvWnmGsBgmecMLyCFQebPRATeLUfV9AgA1DtZSz1SVv1yH72ZWf",
  "key13": "2FQH5uVtMm8bviPonajSC3L4GcA1BqgHZ1BWYMcTc8PmGDKPrbajofpPhuficHyChrCwEkzx9CPigvA9Yok53enp",
  "key14": "2gAw1gCDbxJkeYDeQzuyGGvKJJWk2fQmaJX8gyo9CRQpbYTAskUbRh6BksT4qPJyq9zphowdatmd3kJkuRtUcvQB",
  "key15": "4sGQaoupY8y47zUgiB8ZtB7BhJ5uySpfAxrrfbdEqJck1kroPGG6nuwuxEXkGgBWjrgBaEWWZTfh6EPADfYQdLMV",
  "key16": "3uXbvuGG7F3YjacZmxa4Qp1ZHa9jry5p9fFduRtWz845i77114utvV3pFaDYPDdCsHXhKphSNuseXbxEEm9gKVR7",
  "key17": "5xbjgsavtgg6TLTPU7EdG9LWtrGp7Q9nHzrVsTD7B2RJuui95MN4NZBnqLZAMRMgHRGJtXxy81nh1yAv83d5WSQm",
  "key18": "42nytUtFJsJDCwEddg17rDi1AQYL9jbToE1n6bnTuu2FbgNqYNMq77D14dLHfNWicN9eTDAvWaiYeHPYgFtXJCpd",
  "key19": "5W3pSsdmAqYi74LkKbcjwf4fxAJp9F7wyKakV3Vy4SeWtLftKfN9ZLNPgjR7bUB9hmDf2NdPzbVeP9huQWX2vuKu",
  "key20": "3vbfDfiJe1fgav9EesRbV1ie1ttEe1ETQNsapyU8fNWV42wH1VjwrbpShApWQJGN9q5UsgzipLxSAFWESKYipxTY",
  "key21": "5EcDvqBmBrtGVy37e8Z8aNf7x1uA8Awa37mqommDYyYwkxWjkzrrcL3uM5wePZmeZZMo6ZtCRMQq9PkiQfKBzm77",
  "key22": "2fxMm1mBcCzAwtwTYhwhYgMHqq3sJiXDf2cGroLE8cZ1XP6ybZN7yht6g4k81Y1pJAies3APZo6TmfcBxwRrLbsK",
  "key23": "2ZuUoUdin7EZTWVJUnmJbUTwwGjy7ZuJ2a6xyjZceTqLEtHhexHZnDXS83nxxwrJ9QFTnXxm9Gmmmxh99AQuGV8J",
  "key24": "3HhPUnWQ7RbWXwuRY4VufDMTPkQ5wWEEniC6H5bScT6JSK9PGARaf8yxkqtMsvWuv3BAw8b1yn65zhwz9QZBF7E1",
  "key25": "n9xh9z7ZDSRWs24FBkFkKoRQynMazLRPiz2XnKARPXeMb2vYdUg3SfYEcxzZYyPnH5ZH5MJsNerp5abmmYkKMZN",
  "key26": "4hnaknNrEuYP9yRxXJ7sPhaHdAYuW4DkwykenXXFYk7XMzkAE75wsPDRk4orDNkAP9TVhU3LMZGcz7ZrCz5wonX8",
  "key27": "4aY4Hgz3MhgLMcxE2YWqJJapV5N1uamRtLTB48Z6j8y2Dcg1tvZyxGNCKT7PgvWk2JMQ8tUpfzTXDHoff1fiUWbF",
  "key28": "4fcX1braGjcVdoAyu3oey8uMcnq7QYytBPR5y4scBBxDBtbK24APqWaKP5kvLifc4yMhnkpRTJ2yZLdoY7ZeBjFs",
  "key29": "5RuKzqVHuaxZxj8KoXMeijRDPgySuzT2CBMiGVihg61de6458s4iatpHg7USwWdPG4sqS41ZRLZnhjHJmJzERqHM",
  "key30": "28GUoYKAbh7d865GgeHkz1xJqBiWVB2yeRJ8rttce2VBfBt3ofBWVCQmETA6gkaLCR1DWX1NLdi489mfZskg91yG",
  "key31": "5k1sv7ff6BWnanznioBt4MD7kRy2MS748DnptEGjjyUL3qiwt42MZpYKxjxkqGdB79auqNWwC32TCmmUDjkjdkWV",
  "key32": "gsyWM6kwzFc13LvP646Mxu48ijZnd5N2unfAFBQV1r72wmkXKTtc2rgnUDqFymNYtvpezgVjtSU5og7QbSvE1Fw",
  "key33": "4cut2MeTR12CASzpMZ75ByvXgxhEXmDWrcA686pqFLviJTYcrSb494FmYhDQefZKyExtt6nwTQSRjz3uLCZEzCJH",
  "key34": "5gNd73QYrUwYUc8QUFQ4uzvcorRuqxtV4MmHQXHYK5Qayd9vc9BynmYfxXAiCojCKgpowbMQ2zDtQ7vUmUFaziUd",
  "key35": "2q4mkHMykt7ZV65bo6PupMfoKtJBbLf2Y3nsb3y5UeHrXdFhhkTNzce5qacPPfzzFTT1h27RHoyrxEprwYpjszRY",
  "key36": "5Xavx2P1eupj4seccyUiimRGt5Wx16K9nRFgaGZENr1QjsvPZYpKsHhkVeCaTf4ZBmsbXBtp1GAjeAgwvti2oYTy"
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

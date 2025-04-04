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
    "3Lua1QbUokPp38rbF9ESq4NCLh4mojK3RWU55qGBNHXYKpmeTzrM23jvAotQCjN2xXgYMB71439XhuYonMyiKnCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xD2nrBeFQ7a5u8fhs4p7RsquRvDxQ65Q4PztYbig689L22hgq1zWsK6oK9w6PCNAnDjLgAw45whYXSYVReQbaLT",
  "key1": "2JPmRwykTfg9jDvPMjKspECxpuZcgtkkjcnyDCPVgNbF4NVAGVayeetqc2hiXy9bwBpyPaGjNEDh7vNbJrY2FDux",
  "key2": "2nRBfDdc2gdqmbGG3SrNAVBv1aDH4KMMJDRwARW4jNH2DWryjw5DptFSzrVroJ3Ft8iJ5gJcDLYEh9SJEmXxnWJf",
  "key3": "2Lz6hZwappw4vdgoRnEkKqHyjSrpVqLvqHf3xURHA69nqVBcgQz8JnX9DywLt6gL2NFyWXEXrb7q5tC2UP2ddy5V",
  "key4": "5AANdH9BDi3M2MVp8TCYceEkbcEmnPFxWbduMzbfrKcNFTUpqMXdAKL5d7QgyNbFtTWpytQEBXNKUBmMjW6jjioT",
  "key5": "5ed6WLnVMbuoe3X7t8XhcaY3Dao3JYQ9BoKMRc3FQzJ7iKKqUJrYuvu8WRU76SDWtq3g2UE79UoaSd8p2KsSbKtT",
  "key6": "5NvwMhTZNzbDt51PkPPd8bNyGk4qfPfxfKsSTo3NASL2WkxigJWwVQmVvGiCikpgKvuZ6PqBt5qLjMsCAtMhNF5A",
  "key7": "3UntA6tZvGaM7D89y284yQtQsHDFuz3yS6efv7Nkv4aay6EXL6pKC7RDnuCBLsr8KykfLzyfveqqGDtvGwBL3M96",
  "key8": "3QmSGeJQfA7S3PLX41GTQxWveZ8h7c1t9hjYk4uZCLEFFVaFjfYnMUL9UriMTNQBeoZ5fA6iFVvxeQFyvSBAUbCH",
  "key9": "47FKV4wJ7fgQ9cxzT2qtFVhsoPjj9nkKN8BASomWHhrhNJcwwqESdhPnThCpUaFuvs2HdwZVGieUquq1vzNabFx4",
  "key10": "49FgFzu6vQ9oUCi1PHAjavcjdwQ8X7tYhYTWVwG8zhRiTNDuKsC3xXPZz6gpVEAQKxwfGcNgjDfRhkJzhozma9wA",
  "key11": "4sV5rFw4ULsRB3DysGaBNhugpp7RmBjRg7PRX2SFraz5FoGPKEdaaUGV9QSuaxa7ocrkQ9NqyXzqdF33w4HdHmsa",
  "key12": "2ZoV9PQMbsjJMC3Bp64cuV1tQbySuwabGJqvfLMwFszfAnb717xh2iiV9FnH3jn8naxqcNb5Y9mEkYLro4WPU462",
  "key13": "5YkN7LvVy1wmeSYXBciVnfUm5smDANNiu5LGWLLN1oDBSNsYN81EAakfUgDeGdDpJPfxHd8Rxfvztk8FxKba4DHB",
  "key14": "345Cu7S7KTnEwrYiFCuCy3xpdwnMXwpLiCrcMyUXh2Cfmdrxq73JzBmnSk95oK7Rqz1ycs1iykLNDKtEmipeWfq1",
  "key15": "zMzNJFtjsrZJRdyVxCj6d2JoeZ9ZFwzFj6dikbatbshsy9ZHwyGuWRWAuo37cXRJfHMV6W2qqXWyhCVKRLE3ggU",
  "key16": "2MqMz7zL9Rfjb8k8T8eLjxjA6P2qJHMqcBf6BA2WumdcxTNGTzCoDNC2sS6u2Swm7Wz2fhEZben7dgb8mzeGV2KZ",
  "key17": "5MiDg4aLhyiVoEAuZAshzJSbbRJvaP276pLAD9iKGj2V2u8WRDpyTWTN4vxgCkWe53VyEx2XrXzWEsamLD3uyRF9",
  "key18": "243TUbtaffjKRVwosZrjimyT43ipmB7AooHT5AbfbMXUyCFpwhN2ZeFGNQSWreHzZjDiHZ95tnyfWPYvuMcbEnzh",
  "key19": "3yiPFRXW9maVtu8HBYoJm8TTXzYkvub6SNqNZEYgVJ6aTHwenrczEXCqEhrK9zLu2RvXAdCoRbzaKorNtA3Z6baz",
  "key20": "31Ly1zpCYHvNwDeJb8DVmRWjKX9qoed7UyutCGLm9Wfm75vfSTT7mh6TFin9rdkQhUWNkZKN1n4eemtq4kE5hC5B",
  "key21": "3UH3zSEST5qz9XSKgEjVBZtjW7nnAKHBhztTcTnEauQtX4Nqdm3LLnUcacvNECHM7FDEdN7V6PGiQdNtmVVqiL43",
  "key22": "5P47B5cM824b2fwLzr7ARzFCJc59GtJDZcHMFLrVaFysB1gU8dXF3VKWE1pxtkKxMEBfzHZGhtdtvbC5SYdW6Q9p",
  "key23": "4ENbVg9H7chqhUztCazwZQFZF5c9qRGSaLqbC1PwNumL61XoYNfda3iZa5txHshiCwusBxWjAA5L5hnXbwauPzr",
  "key24": "3EGLR1h2BbRpsLefAvbDYURhiSwx9ThHGAoZZ17j2BE8v18D9ZAireUgUBudgcDoPnrTx9VQibNc55V6n5km5gnm",
  "key25": "3awK4hyo7FLuSYdVjSbpnbJfg6ccrSW56ZVjLb6dnr1hKGc54ZuRoDptQdwLFs97ojVcoo9zyaaTw6KqRsjnWRCB",
  "key26": "HBCFgw57LD6teydNCY42QygU2gSBoozdSj3Zgk9qvfpm7eXGAukDyZjUqBs1tjE5dzQGPTWU4PG1Hong4rKp6ue",
  "key27": "4f2vjWFVi3XjWMssJiyH56iHBfKQ6UuNetb1iX1C63YWTzUAjMPAfQdo3mKGE69adEq4QK1wLUxKXc1sA7b4y9Wb",
  "key28": "58DDtbqybb4jb1rQNTwFb8BkGdgefahTfY1kEcJiVn3iHhVBxTV9pLo1sDKnCzfza52Mai93PcpEhWd9mf5PjTft",
  "key29": "5aNASPhvQNEK4bnoxTAFtxW6WFpyM9tN9p3faP12fdqzzyHkUuEdy7HA68PvSoFSSUWbfFQ9WbPUDRfTXU9WN9La",
  "key30": "4Naqo8nrF4pvHuJyogjyJXWRbVoLe2GCns3nfdkdvdbxqXDyB1WSRuwWSKASupVCcbpZkL8iKmdNkoa3FvYbvdiL",
  "key31": "45rwSMcrTWgPaSg3er6hRan7hxZGczvw14aeHmbb41u6cnHra5i5PvsY8eTBakoPVXFEsfn4t5rYirApp1iwsTyu",
  "key32": "28ESjqsGQcBR6uvkyHq6XU7i3cnofRqx7KoHAizyw1RaQakvKKMuwupxVQ3ofUiKhWfGBwXnbZXGJEcBTkLgYvfV",
  "key33": "3EGSDwDqmqBhjwCXWvi8Y2UrCGTpAwFFWFyuaZtVhknRWQfN9B1TXU3xiHuZfLrCYmiKoXNu7NeY3SWKSvVhVuZ2",
  "key34": "56Tk6ivzgW1qTcwj1EvHXu48y4wY26anAmZBVdFDZKH7G41z5RyDkiZ6fWVetH1xT7AZ9o7Am8AditHQcXAXHrnj",
  "key35": "395tqPuvhWGCRpbo6S7yRGRoEs5ghFa7H9vkxEBkyvDqNAkc8ZgHMrdmm5Eho3MV2J5qFjQKzR8HHumzMLQngG8C",
  "key36": "4B4nMZoysoX3mTck9GmvbCM9o3z1Zz1eS9NCiN9p3FYEtDSCKJy59Z923kRhuQuCGXr66ioH8zqE7ABpRKEjRzoT",
  "key37": "2eYC2ZC6htuirfHiipVxMayd165sbypW9QA2f7oYd7CtmxjaterSp6noMxUsjGuCuh1MttB61Rv3v6XynMTUooQP",
  "key38": "pgeF3sMDD6g6cnHQZfDSyo3xL52sq3tisL6e78ALVGYf4U7WXu2gfydrfuTvcr9stBn3sEGAzSyet1kX4Swmrbv",
  "key39": "5UesGcSL5QYtwz7Qw3m9ajGSMfaXK8e8qSo1Y7feZvH6qq9aVSLP8oa8F1ves8uzZb7BvcufdFpsq2iVHBNPFy9y"
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

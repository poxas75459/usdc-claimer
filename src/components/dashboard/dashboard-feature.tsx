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
    "4TbQ8j1CBHTsntz9nm7mnHJBYgCuToUb5cZfAnwP8683Cs5cSHhMhzo3qfREa1QwCUv1YgDNBFaDV79G4ZNy8PBB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26kbA5rp2D4VLgqyfu15cC9SLdACWYqERG6748aq79Jzfe1xw5j2ZHrw8WPYZroNw4Tsk47A2NhQKBxjdBu3x7kd",
  "key1": "535JPt4SJzxo3mdh4wJqt2MG4TZHwzs6majdYE9FufrKJXuW3SSXwgYbMEmWjKCKZghar6aJNrL6haymcEcTdiBQ",
  "key2": "24Csc3ePmP3hr95fZ7huv2Zkm21NNp6ST33BGR2LhncC8hSWqQDrEzHcUibSzPLkZDBLxU3P7xSebiow9PzK142g",
  "key3": "4iPLuw9ZqXzp8wGmB6i8CnFUqvzY7sWDiEUGuBPCq7LHtTYquJvR3x8aAcRfBPqHJtYCKZsG6NqwRzyMNY7cMf8K",
  "key4": "qvCasz5UkWYpTmfLwEYgpag9RGsyRWgG7qDL1ZBTZCAJhH5Rw8iR67MGNDoyq2JabjQ75t8a3nxtKuPpSEMworr",
  "key5": "SrgVErdp51u8TGwfZDvMYbgwQ424jQ5WDZfHFW6ZchaMc9mZCUePEtAqvAbdtFrcEMA23u4iYRUYA1ZdpgQeW7D",
  "key6": "3RCQ8aBUKqDaqbH2UoDfDpAFYZfL2AhvuEu2EC7iorNuKj34WvSeZJCaFBhTTLiH4bXUNWWRMffKz4uoPZNs6FxB",
  "key7": "yxKpkqPb8Jc8y8Qjgtn9GycYvT3tYpEcaDB4849TzGxNAH7NE8hVUB6PXEXWRKzSWRgdmc1QP2bC18dedKj21XV",
  "key8": "7UjXpQeFwThX9rQ33ZzewaDQiRLzhxERBaJ66tge9yfvotJ26r3vc49tYcA59h2u7KZL3pfxGfc2pfFbDPTWW5e",
  "key9": "2Ep4iTSc5pysX3GC5kQsTxMs6a8gCCG8EXC2JJz51SLytA4M4WLciQ8jHznt6tyrUJEtf7dGKaiYknxg2VJPAtHP",
  "key10": "YnVxZVD6eQnMYRrPpYvw2Na8kSdVUjdmeUy6ym3M2AKSENfLSvD3haTG9SQoWcNwXnsLAnhyndv7hbkNURPACA3",
  "key11": "5UB5NNM13hu3ogyUriLk1uMteGXESjTvPJQmh8FzjfDpriSqj9XNGkwWoJ7RnHVHY72Dt6YVdxGp9s9VjA31c2nd",
  "key12": "592vb6qdKhUebz8NRKQzKJpix5kY22ZPMJ8XWuTpvUPihJzMxEqVLQpUhd9XX1sJGKh7zAwZYrnxEdbfEe8c3xf7",
  "key13": "4Ao8mqfksgpfs5JHYtPmNibmhbawBzHX8AT2GS1KJReKYrrLJBz3EYakC1u2UZwgCTs8Yiy4GvryHBMzEF1pvaxw",
  "key14": "3fj3RABgAPEiHGSZxKHirMYNga6f8Cqc9EPrQ6Dr8YC6t3TPhCLz1amCatfkVVyctscXuZLqC1b8z8Zdfq3tp7S6",
  "key15": "4hG6aFthQWrSkSMJZabDDPhguUH6GAoJ4ByCZTswivzUaP9f8iFAUHp1QSpGVrSh4Ueq8we1da8Cu6CkRuUV3xH3",
  "key16": "4YpCVwFt3Qtb5mmsghbiWg5VLsmAnUuHqeaZHDa7qq8PUJ16B38FPQwBkAUvUxePAvdDrb5LF1oDfMnqxwkNkWUp",
  "key17": "2TumfVCzK3UtPR3bFFVt5EswEjrrotGHsJFnSkSx6KY1u9xo8PviBSDHvm7JpU4DwaFojccdXuTWrTBPTCgZQt4d",
  "key18": "2eEvbkGpnesr5SBriMcsgKisKJPTKaQzoL82duuNrxJHviJ894Hd5dzLZhudQx8HdSeZrwfvdw7UiUSd4xM1vXts",
  "key19": "RzfZqfQPKpFiF1pHoc2XT57Y4sVpqnkmaqymyVeZT6Yis3Ga7qrJFybe63g1HLCy1gMkvPwZhYx7GrfB4np5zJ4",
  "key20": "5f4pDMjcCuDAAjyeYDwFae5fSHkhL9hAma6J9CaZbpuS3ah8Lt9xdrKzNGhzxNL77fWqk1KkdDUMkz6AaXmRrtEi",
  "key21": "5bDnojmCQMfApT7cYQEgocK8dtU2GxbpLhiztweb88qFyXnkqx7QPYJCqB31tUWgPWUJeEU68QJycXHmDYVx1F56",
  "key22": "NfBnqnJLMyRmAcbKQXRV4QKmauWUV7rhvWH1rXAXqrmXjnkYP1ZBf4ZsxRAT2ywtqLunrist9ADJqsvHBE1HorB",
  "key23": "QsPSj89RpymuiuftYqk3v5Rrrm2mZ7ukmbFsrFQ92MKginJ97QaxPC2jwTHxFE6aXMorb4psAXqJJZWofrDATeE",
  "key24": "41uMibrDKaeLidcCiFALngTSShteCrBBEEnnLntrJrDfCHcjrf4u1mV4eAzLFTBp7K83pQqqBjWK7tsMwssvxpa8",
  "key25": "48FowewZ7XQNZn6agwwKDVVAu8t67qgaJaN6k7EXA6UY5HyrCScEqAh1HuiRL2QoxUam5uX2Y53AGmvRBpoN8yEi",
  "key26": "5wBfMh4TH15yo491fkX7BSekwtGgaadzYZuotrAA98ijMBDh2Fqo8gQKS5smxNTz7cCnugLS9Ezo392FzvChiWta",
  "key27": "56WC1rxTwxBqJTFisFwNPxKBdXMuK6h2yicTkY2eziXhonaEzbNQTd553i1D3GTFFQVo5T6p7zagSqRP4aWjZQZS",
  "key28": "21iL5niuUByjhu7EANwE86sCSaieXLpxribJkF5T9m2XyP31712XqquWH93fifa9DtcNAshnKFedaim6B9w6pP7e",
  "key29": "5nS9So9SbuZvds1Uo2fmePnW73EBNL8xSnFAskNYQavvgCxRxrkoxL4Jf41z7rLLqT7mYsoPKz8seogcDyhVpdan",
  "key30": "22vdCWQ8ZKSPq8rx2n8xpLMp7fbGdVMEmMvMk3LJrBN6zNVjvPUMkbe1Qq786htMfBNNKHEvgrPobSGV4kWFgynN",
  "key31": "2Bvo5KKuaSzjXHvK2Tmx7hoNQYXsANMqKDtGrbb5EkWtBq3h7evTUDEDg6LpKvq5S9PTUPYxfZj4pP5hMYY2Cvo1",
  "key32": "4SZKLaUXVqFQ7uA3SWyv8sewtpH87VGdWKGsufpVUktriNvidNVRGdefjD2UaAqaNmFwQ6zjqikKNw2baotYsvVj",
  "key33": "4knPqXkEqV9AgVomHN5qJgbpggU1q4j2DrwATtvectnW5PmQDmzLUp7RfViWHGtzLjpQRt13b32nwB8buXss7eKj"
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

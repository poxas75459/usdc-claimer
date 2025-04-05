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
    "34jCiAoirVgrMDdRSy9d8mQ1keH4sqTTPZu5mozfc7b1XzoKhyTmngoRJQk2LtUmKKUPzEHFBuNXKFBzmMnCnnwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hJwPeX6tRDAsJAhommRHreKdByyuhR4tuGSTYesSnx1FuyCc6B9zZ9hdRHuV1WcsVraXBvKsETFzikDCSiW3uHN",
  "key1": "hQ7XocAnP7jq23SPkAMdPpgnm5EYgjbNZXKDuowtGBCux1kk6tKG4yjiEdDWQo64TVN4wutTBbDFQRpsCEu4FvZ",
  "key2": "yGUBitwdqvQZnoY8tZ3ryTMhBDtwypDtpwAtNVNNqNe9zSVjWPQM1J99eiUy4AAHtDi7MvAKpm7sFwRfNgqU7dp",
  "key3": "bg49GNm6CAm7XvLRiR6MaVkiTvYLNDnLC59ewtgrDKmSYkCHhYkcYwHZCWKzS8APy25KiW5cH1LC3T8GRPB5TFS",
  "key4": "qsKnyNad7zCJkmQN7CkcF6vN8E661GAEAf8FAgig7wJwwwQ5MsEUcVuJbqCvwuxWZXcdkh8TFqmvcC5kjPQHHTB",
  "key5": "2B5a84Xbwij14Jw4CcPSkgeZp66uET2KVhkbbTSmSXqpn5bFRybmm6svg1r2CBfRMtg8HbLUxAvSS5QjQ6Vb7SUZ",
  "key6": "5KABwWxg91UcdsAFQdj8Nw867ztqCWiRsxmYkCPoDZRh5Si4LLEkQ3CHfxbGyhhtV38q1hUu1yMPgLWCU4uAzgf2",
  "key7": "5k9hX2k6CEnwHRtzSNpNuzYtgPHKa7gLvQE2ESvGcddsexdzYU9zYjJ1pYNqrsP5TeG1mBCJJZRJRFXybLtF1Nrf",
  "key8": "hJrsM4FDgYND9xyAGgqBGERH8RrL5rJg8wjXWCXJD59kaxQZwrzLpYJ8gmyz6CU8YCBWBdKKCQ33Ro7cKXLj9Tu",
  "key9": "5YrHJwgSRwwdJVrr4fHRbkbuhRjUuzdGrC82js7jUtvZxKBoCE4ZLZdRv4fRYD79FDnZbcYrHzRWWAjgRA6r4gNU",
  "key10": "2KkYVdfCmwNNh5pp9pF2nL3mhWx5wHPTmtxUCG3Q22kjRvYn7WBQXnFjMgtvxK2LRLcCJpcKSREMN9fMJJogsMQ3",
  "key11": "2BwxFggcdWpT6315A6eLxLqCjiwyyqGhauP1qtpxDNUz7WrW59D3r1ud56fTktcnMz52t6xqD1Bimz1CV1wE8M4a",
  "key12": "2wNgEhUePvhWorWgj8EtWjnT4fXvpdTU2xsorw7KRzVr5KRS7BrTUcysGasSrJ7hAZuxEU4UeLn73tCCHvm8eZzf",
  "key13": "5qMCAGTEm9wCaFMEwZM7JsGQynG2nFSCbtdvw3VMMvWmGZc2HAw3HsyXYmg7nb7rsiSPVGyWkYMfEY7Tf6YuPmVW",
  "key14": "UgegFWPU4ypdjfQ1yukfihk7GNxFiEAz3Pane9NvouV2c4Vd7niE4wuei1et7fXvFHDh3yb54nszCKBRAfBcQbc",
  "key15": "28khCjSxrvXzYyngf9R2fZZ5k9kK17MU8QMsyZEJA4oP9vKi6t4hJBauDKFoFVn9UVSbpaizuTjbLiSzjQVqD4wr",
  "key16": "4viwG989Pi3Y7ZAPLfNzdJAYWQKu9mFvLmUnwAFtZo7nuJjsNEuKWiyjbGsBrZCiSEEVmHgysWMRezGSno7hceMd",
  "key17": "2fDnFakAAMjr7GhagYoWTRLX1XnWspBvFgd4RWMwbVHybJNytSQpvWwx6PMbzUH3o2cq38ZnTZmoLJ2JU4iNZDFJ",
  "key18": "497sVYMxkyJJDiYNRP57w4kM8ua4mwu8Rdaia7DFiSzNLUmdWeqXLmfUhJhYKdJdtJebMCZCFtNZXiEtNcujRR7G",
  "key19": "3xb9KYVPwpqSVtS36xQR9b2TM3sENF1pULZVSqsa4aZpFfkrmQPA6uPyNEQvo9uwAJcaAyFjwELF1jYCkkY77agh",
  "key20": "5uQTBb6S9PsRC8g8tNoTJbbaMfYeuPTGen8AXRxkZaYJKn3P6gVo43SGGy9eS44oQhqQAcNDTruwmvDwHb1bNk7Q",
  "key21": "ebBszq6VeRhsvc93AkEbGJnv2jL9vTXePcc6MTXyeBjaQWifk8QMJezzq2b79BiMikj5JbgixKCsE7Liufhiwtz",
  "key22": "2aVcRAgeKg8tevDPaS4Twi1sartuuptByFABTcbPZNeabetpP6KMuBaAtdzEwmqdLsDSjfGFG2FbxEfnUucj6rFJ",
  "key23": "4X29VfkjJU6DAnUvfkcmqPBuM8srn5gJ4sZ57cZ1EJyR23RdJ9K73GRTSCbXQk62i7uNXgV6drF77Lg21PvZ3ngc",
  "key24": "2Qu2ScV6uNyR26UtDSRoqR4VQt9GY1CHQbZfvwfC7rDF4zVyrYqCLkbjoCFSwoFWoiuZiAKZGQfShxGf2Lg1ctD7",
  "key25": "4mHoGTBC1MSJ5ABSurAQ32mZjBaHiLbeUPp4s8xKJzXQWnxifsUJPhPno7qARE4UUZmR6JFj4gLE1TLLZhnQpnJP",
  "key26": "474dxvY2xFK52r95MAvxsBy9i61ZmEF8eYoxwDSpau9b32GTssLjqAkLjcq6EauycpF8vT5qNQvkRTFQdtzSBGXz",
  "key27": "4jYtJzDSKQbRy1fVGJkDBht8jWYSXiW2MeQ57xiLkgzSBJu4powmQiXxWSEP6LYjqr6ug2NXNc53ah5kjDULwJd2",
  "key28": "5RLrqwU9ctXMoTRabY8aSLYqDTMZZkhaLNkGBveYdG2ibjqrdmswtQy6qn4h1xiAmfrMKp3rFp7b99zYS4gf5qWf",
  "key29": "5hGfncrfUR53U1zRpBdDSTVYskWGyiek7jrd8g6EHtK4smCcFxNUamw9erAkYvwrNfwzRySzSYdRk7771oBnHAkp",
  "key30": "4aEuPEBRCtHzNCn7FCXFrJYJcsqAmwn7TZPXtcgu2ZyorqKfw6S8Zochego46EBECw7DAiDsCwBKemShskPSHno",
  "key31": "2fBFsNVjNNvRGYV26sBxAa2iKh3vtJMMxAsPFMPjZ66rfi1A4shfmdnLTeTtzq7PmcyvPuSQH5cmfVYB5So8y8aN",
  "key32": "5xW8s39xhumsnmPC6ZHQiLzZ4zTBuYrcLxPHXQ44RL1xfAPomWaU3CfjHE3iBrRoz7274uBp3JpRm5PPjpQvq2Yk",
  "key33": "4oZUPxqEnPGupXhJq64QsWV8fDFxbQuVyuKc6VUXpveVhF7DkfJMm22pwebnDxtw2bXsMpDAGkX1EHQNA4H5f2u3",
  "key34": "4rYppZtXWTczo7deYbwM5UV7SqcKErA6o42JLCbYRYr2vHGMMGAFqcDoXuMmzbmbzRNoiKVeRNZLY2uHMH1xXdJ8"
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

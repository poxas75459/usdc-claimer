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
    "3SeYmY22mJo5aqXN77X9earzkp4Np8sshBGgxAiZpo796RJtERCmv5f96WL1Fvj5DEEH8zaakAiGEeXwz8NC3kWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFRx8A9zsoNZRHJFxXYBvhB4CJbtYDkHBNKAjdsaU1somZaBFxBZJGoLM2g3J4EVoqNGSeZZi4NdUh3LdSQdLQv",
  "key1": "5omxYNECEvBYTzCsK1Ln4Y426yGazdxbJxgPMxWZxBXVymwSHFSC1w7CW6meKWGTwbiYE1s8FZfZhzCi6k4Yj6yr",
  "key2": "NNJFGwS7iNBetXX6qpGGjf2PQL3YLndasEntskTUgvQMEHwD8sbisHYwKg88JFTW9SwkxQbHuxUEFXrr1kLtEmG",
  "key3": "4A8QUd7RMXmjTTVoJgDP4BCguyuP91CeSzFSLiaHZ8oHzoJz6azVSRap5sMTEeFPgCXSrLHCvLYn1jZiLek42RqZ",
  "key4": "5YDohCDHLbJ7tz2HwpPcZr1QHhQaq2wQwqn76viQVTMCtJmpGQ6C2Euhc6GJKQb7woVL1nVJz37BvekjM48QT4v",
  "key5": "4bNf4NqGHcBT4oL7Q4eEojvqpxW5G4cwAteDp714Brfq4KvN1D9BmRcsQUbZJCXnxhGCES3E7rdTWsJgyy5X7ZAZ",
  "key6": "4GMNcmJQN2QvfBZGrE57g37SzEXytKmvh2GVfozC23V2USXdoKnDDfvAt5vdqRr79q9aHdG4hd9AfT4TGrtAnUC",
  "key7": "2aLJEAE489xxbTE69Bw25Yw9UuKH7SLnnEmCCWRiJsBWnWRhrZWg2xsifHWuoeeh9Rgw4XdcEhw3m9Jnp6C7DLGX",
  "key8": "3P38iFBosXF9N5v3qCDVHue3ndp4H1Zso4TDJ9nBrBkrMzowmr3QLvzK1bHS9X6SU2hW37hEdx4SVBpSMqxGhqsy",
  "key9": "2YuWtL6Aoi4ZtwbAdV5B1XWiUcjwi8anpAfVvbbDrKL5LD7ufWvQ4CPses4MJfhLwz1RgQphoRiBt3fZkQApRpfo",
  "key10": "4VqvL5gQ8NW14ZxNNnTb6CqoT3kM2c66eFVacZr3yCbpddbbEzEw2MUrZpV7G83vDh5jAxvTxUbatdgqLiGrMPCs",
  "key11": "3p67wrnTwgoemSX619zgUqbTHFGiZcimzzVi1un4Y5n6aeSpDx647ZYNbiAJvBHFYrSyEkbYqCRvtyG8C5rKXWVf",
  "key12": "KAZv7KMDa4A9Pe6gEx1QAgsLDWXHucNoAgdU3hUfiSWZhETQhcKUV7cAoMvSbMkGrEXdSuCrrZUmBPtHEzGxCer",
  "key13": "3cQ1viu48CZnQLtPTEuwMDtidc371KWR8MLkN858NNFZANWrxadRUQuWnL4Ki5erKLJ2qdLybncMVTUb6rJo2GMK",
  "key14": "kkPzY7qLQz6yZ55MM43j6ZNtuvVJkW41cVEZqHnwBB7Z19KhJPfHbt1NiXzLb8zUXNJXp8TFckHufmnwve9HjCZ",
  "key15": "3GVSTTL6vgtyfG6jnfczSxaT6aUFN96rdgLatRowS54n73E65ewJNaiHZnexaR9qTUMq9P1Y3ZJ4vvQywSg5xTfV",
  "key16": "UHRdkPanmBMzjhry5xa6ZrghVYC8RwJ1QWrjCMcYtgJxAugJLh1fv7Eax5HeCCHtnwtKjjYUvsP8uxuLCAc9V3e",
  "key17": "5Zmv4ndDDRZD1DCJ9T59wyfmddXmTbGf2MgtuNeY1i2N1zeAwLLDHqkfx7igz5ZYgucovN977sY9CAdEJVLjZEk1",
  "key18": "5ruBZuwfkajdMuEY5bgVEb87hLrMXaLk5wWVrfqjhX753VVmKoj9ieWW52ja85214HVHQiqxJueYcBv9hNxb3GGF",
  "key19": "2Fv4dtJ3FvormW4pz4gLj5ZPkDRFBp1XdTaE79joosiTB3HrMkSwVgJ7zZAA45KUBjT4tHY6zccmXtua7NG4JHjh",
  "key20": "2yfmEJ4unSiuotVvzr9Y9mP3TE3Ma8nqT81CQtdCViyNSNDBvp18z9XUwCYUEEs7vayVBCwdcjD2X9gU2Mba1K6G",
  "key21": "5gvaJndKSdkiKroTbxpDkwCptKaAmWqHuyjEF3tEgDB2WY1irtK91yZTytSLrA8UnrwyFHBT1avL9bU7wPp3UWqN",
  "key22": "5S3zo45HAYjVZrFvom2XWSZSK1b32z1A8x8HrBzM1KuTx6YeETG5AksPpmpoJPj5rBtpkLLjZUYa5sHjKNomrvrn",
  "key23": "JNnrceLrEWEJjA4Eask3eAyJEXvP8zzmWfoX9y4cCkkdPzPiKVDuwanrpjkoXJQ1kd2EZ6YYzC3aR2meZFk35oL",
  "key24": "4V1ot985E5xCzBySQmaeRyjMwzr2CtTBNRQgAkg1F8AtqAUVs3ngpASrE4fGgNqzLTRyhzehEQa6nRsiYwHZTLAz",
  "key25": "Ayk4D2bbPf325TC1h8H7HeWQMho4aCsjYRxy3Uy8Nv1rD7P8Xn5tPSsoNLHsRQgUh6e6LEprWZQfToyXiNfXvbt",
  "key26": "3BwCf8bT9BMxnCW6Ub6Juhphid4FM63KFh8HiQyBn5WDUPShYjgjidm3tx5cB9FrFn5edWXoJNMqdhpKof66YCtM",
  "key27": "2air7Pv3wfkCXu4bH3tiYtGaNdRLDc7bLGL83xVdU4EvVGxCwwcoorxBLdVabhMd74ExGPEhL7PXN8iwWDVBU6sE",
  "key28": "3yMLDtDwgnAB3asu9fEvZRd1g6jBVWXh1X323L5pKGbjEaMQrFQ7gCveb2CsZFjtMwrDMnhUmuepeCDEbNjq3htc",
  "key29": "5mhf4QUXQBnYYa393Ua21NhCo7Jt39sF7GiN5uk15uULw3npopwpEqPfksnYuwf36xv7Uh6XzKRnJxrADnPpUGo7",
  "key30": "3EDpBmTXv6PJGPumjHVmwqdnx8wG7tErZAKS4Mfu4WQYSRQc9TU7caiQws81Pro3nXYsZ6eyqBecur73gMfSffVP",
  "key31": "29Njdy69Q359TUQJnvFQr9svJ8FH36n1KmGKitnhSwdYwwuJk2MqH35XMtBJwMyWvE37t1VwGQRwSQ8sBPQtUiNv",
  "key32": "2dHAxVoNE3FckRUzA3WdZvnuqH6oZHChXJQdBgRWHfvU24RSqk7ft8bvC9WzSrCgRXn4DJLtQUkSJS2Zy8HdSDM7",
  "key33": "5zkr6Nm7zQxk8ubx6LHbwnmJTMgpgvs7puEWsZUn4RyHM4dZCiQe4BAt9ZcMvPyvConSNxm1L5QGqBJHDcyzodx"
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

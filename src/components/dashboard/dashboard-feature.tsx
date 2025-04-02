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
    "57oAVeVXWKUUrGsxNqeH5ht6jG8EXjNHtTwoPJ7MjWK8MG7tSJ7nnaKEro4BinL1ZVA5vz6vtWPfpNtcuQTDzLsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Ch7pCeVZx2oxb2f1k5sGjNsDy4XE726GePNjgk9HGTbCzfVrDsF5TN6tEEYpMiofBmm3E546bQBYTKnkhkQLbT",
  "key1": "2odck7yfExtmQLqnKzujoomUoSFSVxFz9yuSAbKZvtAkbXp8YxVLUE2de2Za8XB6oyv2wc8GZWDWZ1WYwVy3yeG9",
  "key2": "sFbMphVoHgWjQYq2BpiLrhMdW2ru5JRraARRQa47QCip7NUedLSHCdhfRC8XpJRpJLpJ7wU7GX7q6UfPm6EKHG2",
  "key3": "3ozqoJnxVcLq9m5gyvJbwjK35miDmdyMgoK9pbKyNtRoL2HSwZoSRQDh7wtYQhHbA3E5NJ8cJzNHrwS6ePUMMDDx",
  "key4": "5nWWbxx6sdUVhAhkCTw9iv2rRzhSTjfUT3Pn83poF94z6AiSqNV4o5jpZS3Eko3vb7Tt7v5YzVXpGNoVbL1heFiK",
  "key5": "5M3u9rn5Xnojo53iEHEdgaQsoahVsqzfyzM8cjngHRkWDVbpQxtmZexDgpK4KJJo4F5hzBXzoz7kbp4Uxgsk4fG3",
  "key6": "GtFVgDxwonsAZx7KYuo7PyrUwt8iECgJcssXyN8SAXEpy9pK8zz94dR8d1VVLgE3rCmDuUKBaHGa9uFA6TxA8AY",
  "key7": "QC4eFQ47DGxzt5u7DCYMLJ4FmySWgaXCdEt5qCo6mw5xDBKTG41UBDAEuXKj5sWjDgrF6AE1QSGB4Jpk5Ugy5XD",
  "key8": "5GynfoCkQzF3c8wC2J1PymujRb2Wq9sSAGFFCM92fuu4HGEmfDPLzbvUmVHXpY9Ba5UpygnJnLt9untiQkbvaHkz",
  "key9": "33W7PLVFXFzFu6TzjG366C1z6XZmnpnRvSQk9hfKxv7Bq8LnxaPRZr8Qh3Y1h9UeMVapgLoV9D7z5LoBbRYvTdGs",
  "key10": "3Knq9sJoFvHg8CuLVWQ4m9FdHqNo8kcDAKCtMghv6NfRViu8rwa8Wy1ii6ta4ZeEXsLMnJAR5VKGJeJGVUY89twk",
  "key11": "2DwyGNnXmF7u8PUBEU1eVxywN4aCEYNgKawrkieg4iVsWNUnJNja1ZXa96dcJt6cLzzEpR67ypt3oSciEH7xncSA",
  "key12": "4L1yKpuzaRZmXHNhjwZCmQkcGxafuVyaLnJ75Quhxhsrs85E5iSF19qMuhHDWtB5i2uG6KPzS7Lf5awYdH7xsnSr",
  "key13": "2PqWdf6PGxZ58ZnEZ1FEryhCpmpMVnnNrMFszxKP9yNwJkugXb8CjenwMf4zoZesJqYe2VjkyuxxiQYjbEayguFL",
  "key14": "417gA8YYcHEGwo1kB9UyWH84225ABZbHe8YNTtszhud3nycTWDJ8Fi2p6YhZcz64YVgYP1bnr9Fc7hp6oR3vKZnG",
  "key15": "3mzkUC3wUF7Xfxew8eRKmZaFXZjyYh7jdbAGfQvsyXk6B1QPBgXxeP4XnprSN7f9UpoT6mR9K2JELLiignqGnoNg",
  "key16": "HjnXwAJgA5w3kSmz9Y1N9rLLMGn5exmqC4r6X3qLA98nARgg2rmEURVwQ2zEVSjewMGv1fXuQG3bo1f2phXgUij",
  "key17": "2ah2T7wXsJ8TFDiM1zhYpi9cG6LHWwCUC5zDcxfNnxUMwYC6E1Ej7XJJzEmZuUtnWiLF6KPxQi44s7BYFLf2KcQB",
  "key18": "5govPy7UzH59wWLfvpfBw4FFnugTUMt6ycDbCLM6bA7e6EDE5BVncuNs4ZSzx9ZAnvgeNFMhgFU62Bdm3YhfJKpu",
  "key19": "4jg6jfbhCm1NVu44Gs18Ka7ugSBKVYE1FouEB1YadpzaahDmXNjthkTbbhsBaczfx3n7qryW9MACEtWd9E5d49jM",
  "key20": "2Ah41PwX4Du4rKCmNqPJRmcuTPnbUSH1QkZobLJK9XSxKELs1a81ieq739bAxjdYGybh1YaeKWDpLJM73PMfDBXW",
  "key21": "2vp1gKEkCrTXqvPr7A3fBKm5kvURb6ervJzwKCqCW4MRbYTypycepAYqdRBuexCjoAGJEyi29EVVwvJyzh8nkMZe",
  "key22": "39PyTvH9QEJGdTJSbUc26wx9SE2aNb1PF8y3iVkeGQWWPk5VTNSWABj7ahKQcfzd7nVTaLTMsuyiFVXXGc21JaZu",
  "key23": "5WgD6zhkUB3Zx4xeSUqWd5qfKA6FVndHfvueMLb9J9rUBDZ65ePCAyRMx51qSH8akgtht6V2812f9HxcscYTe83F",
  "key24": "2EwBYMaMZJkcT7bbBWob2MMvAVy8azWcri2r1FQG2JMHKVmKxGvQ5dT5EqWEXdtw838T2mpJQE77aGKnMqJBXAQf",
  "key25": "3sydpuf68EQkhq6JFzGgaVWkqYPGsgqQx1e4prp2Gh1Dk3ZQfMxSzQmyZCJLGhdoXFArYKyhLgBbeBzphYfCYuXq",
  "key26": "5ub7bHHiT733NncyaRX44N8kbFVHpPdMY9ZxBvGrjMqX6kwpE2Lk3H3RVG25AyVvgNoCiBZ6UjEgsZD9FRAXhog1",
  "key27": "3hJwmazWfMuJThHm27gjUSQ6pgruhP7CgYZ9AAKEEiEtxXgMdPgkStzaR1PQiFU97qNj7M5QRYRy1nMT1xkxatjg",
  "key28": "HTpQd9BnrHPGsjeCowJ3Hj3CVDfi8cTEgmDfp3xT5Cr5yXQ95YjXKmNBJS4tKB1qGctZLjnXVepFiPzjmY4am63",
  "key29": "2uVG8kaEKWjxcbZNpmoCHf9SxyjezfFr68GBBBTZZ1Vp9andndEwFXQAw7NVJrz7x6UJf6PUa8zfxnG1zDpTwx4C",
  "key30": "sQQ75s82HiYjDsB7HDNnVxuuV3YkPWTvndtfc9jGnGLyAw4vL7rVJyCBpZyoEREj4y1CC1NXiTzutziW1ruJsQ5",
  "key31": "3XPH8dhf7HHo2fpEbD66PccKSk9v8TQjjR2DkxRpDubfTeTTW4H22vTkBycawU82V8CgKWaUPTefH9yhzi8C6otr",
  "key32": "r9h62jtt3SceTUjqLoVAvSf7aBzUZyQKckCZX9ETmk8CUeVufFDT22y69Q9c2zxDmQQL2CfteM7Tv3JsFNE3phN",
  "key33": "2ubNCH1MpD2Ev6dGLwZYVxZdrpxVoz3T9Gdx2RurR3ezMfdieqL9mu3iBbdZz7qMDYgeLcmWB1Y4eso5FxzUeLPw",
  "key34": "64Awx4GraVDLnhZ9EVoBMRRuZskp8nPsEVwPqG4eWHyS5BiN6ssdAa5wQM4soQsLtJgHBa9ZvtWfpwPqxQYS7sqQ",
  "key35": "26DzRqEF4uGYkW7nTiHD7My6zC9gr7DguZrNaAb2c7kQ1b2ePNWaXdRAQrwUdE9JPwDTE2LHnxTvS3e6Ar2zL3jH"
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

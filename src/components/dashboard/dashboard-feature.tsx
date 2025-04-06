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
    "2pd2d3fSJYnvcPNKc3oCzRzGdnVbRQARavLWQFZZWUV6Ccsbwjb6Ljmw8N94aUB6nXsHeZNwZHdL1sB2CobpnF4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43mWzEGJcTqt4zUkQrYVMMpN3GHjfGMwa47b7nSNhdNJBkgxf9vq23ajdLaGdfXifFDa3J7HoyJJMePi7F9eezRm",
  "key1": "4vjLpaJ5gLAEkYeZzVagc49dZHYsMAEz9dtqLZKyh2XLKKgeo5dFhXNZoTHBALgfM9Z9yA3jXYo6HMJbrNx7fXkB",
  "key2": "3tnavLBE84akpEg9eusNqb8Ug75pxeMh3RRoA8xWvCypVYFx9aQJNJ5wtAYUVQNz9oZR1jpgzX6xu2CPEvbeGpMJ",
  "key3": "rETvaDonuJQgniEUSWXMFLgfgqXXZUUjeTgpeK2skz6haBARxY131o2JsC1eb47Pmeu8dKS5EQdsCu5bAfLAtp5",
  "key4": "ECQUa7AULmjiuE7Acvuu4yLejH5F1b8jN4QYLrwGi41TGvKatVySMoPUbVS4nC1mXs7HGF8Gqf3ev93dwQpk5bu",
  "key5": "394f5QauhFoqyeoLG6nYbPD6EwJE7aMSurTt7HcTjcq6R6ZXVYFiziv8rf69QKq56mny2LoqfdJ47ad677ubEVx9",
  "key6": "4kkp5U4k96j7pq2Qk64XheK8goAUD3fSvy2bALNhCeZj4JqrYPxpJWG5UfKhY6NKSV7GpeHAuQpDqo8LawX4Wkoo",
  "key7": "4Txg97k8u1c2hmP48K1T9n8ypBB5aMZyAZxMBhEhrnsZoNVveRwZ7QUAYgtBXHpgftyinEhWbyLM8ckjf4xwXnzm",
  "key8": "2a7b5mVKZdfg7v9zwttk3aErfG3RbNf7ipEFuyvxPbzadSBg2qmqfk1SC3Q3pSwjwe5MR4QtztC88KoRbtzLJ5tf",
  "key9": "2NPugag5adCivZz7XKWPZ2vBL29ETnnQd1vXqde73W4YYrGoZwBhU2UtMyZ1WPSpfECyUZxKeX15cfDpnjRV59LF",
  "key10": "sjBbYcYrdMXTNrm1qQZRatkp45A44gd2JyhokLL6mJ7babfPnmraeiTk99T7hhFrVcFjMiuPMSxxvJSmHkfnywJ",
  "key11": "5WAXgTzkCp59WJz8jS1QRNaTmYU9XwGCLNRxrUFmzLuRXPimyuHizRutWjHeViGs9aVLe2W4grFgFaPD6TAREze",
  "key12": "3aH47PUvfBHN3SJZLdxPGPxa3uKUEbbKaC2x48BwWXh878WRP1aKxm64QJ6rMqWuq8nCEnAJ4g5BBRov22wMomtC",
  "key13": "VHM8gnS3VYPAxfd6o7WAk8ES8pfKtTpQQCuGgxWxcHRcQJfgEU2P7CtKkVmFrLEa3YxiZYq8eLutd49Lrj4JFHm",
  "key14": "2gRfS7hwvyn6GSb5HaZiSfcEtovKAPUNHoNXqid9vTiVNYndZRAzP6cren5D1q2RBNX13M3Djcr9arQQh3dmZoZY",
  "key15": "2FAo4w6KTmaTaPcPdzF7p2mhtXHhLzkhB9RgchvKAJKNLfq9YQuN7i4gDPxM7WMP7sKeuYWUgBQYUNXJZ1pe4hWi",
  "key16": "2MsP3Dym7VF1j98hUff1V5cdJrY93y2XGHfRG9j6k5XtWEcYp8EtfdkgFJm6TpY2su9j6KYkqjPYJjStMniaCucJ",
  "key17": "4VQ5BgCwq7tyDHjwXTduyED69gaSur4dsQi7fUyoKy5Z3P2ccMofHi25zDs1v9bxoJsKVbLeztvxUu7oJbLUVt5Y",
  "key18": "4PYBei7rCMFGyobZpc3NXELt99xZoaPqkNEm1rv2P7qwQ4NnyLmYsEQKq8jMD5qEFSUcrNNLNGaLXJJMNpXsJEBc",
  "key19": "3JbVfaDuiMMGBbxqyt1WaCy7YGXSL6DGTZhgZnJT4FGaBvWfj1xGiw2vCAPu5ZZSGNSvSqcfVqjKnSSGBjfVxB4t",
  "key20": "Y2C8Rc9ovZPshdAfHYgQGg1tLzg5EaSAmW8PcLaFJWu5xzHgEsZUbgmGoMvxs8G4YQPV73pVYveYbPJ1iQudGbn",
  "key21": "3G6Y3j2fp4ww8e6QsdgR5rsSh8rVRfPGCF6hsENcGd4jDE6P6RYtHLzmCoMACGUYDwHFwsJeyWyMGyh9UuY2JjoT",
  "key22": "3hWvk1LYQAb1ruRpk6DnKF91sYHhQBMULGEN2oVYpr4A2V3YQENYBVkorHieyyGzX9ijSQDvBan4DHXnHumToBpL",
  "key23": "5h1Ymg4v8wxhusotC5KuxWbN4DBhDCeyLgHU5QZFGafXrYZY9nxvLjwUeFYGquDAATfak8514mYBdsHiCDozhmjh",
  "key24": "291HAm3t1oqsog5cjGgKvQJ62nsbbBqvdL6vp6u3Dyqp3yeTaV81arcgrSceorJniiX5D2fpyiT4vi2g4YukjhQD",
  "key25": "2dDvp9fPx5sLeuVkpHBJmBYLQrsNMWiinEB5BVX5GSTt3RjMECUNGv5oeGqbcQ4LWZra45t9XTKYQurfxnrntyws",
  "key26": "5eBYa2wnUJMf47ZmiyHwGTCv73fxk3hK33cshn3Z8bctf6Ea7kbAEwViJjQJMenr7YUmAQvAPcVzmcze5YSyThpf",
  "key27": "5uJ1uunqHJJW9T8yU2rBQiZ2mYFLYCq8LXQ86oQZWGR2bUT6QxZuJSnX1d9nCkxyGCL9uC5dKmzkx3cNVdyPAHnn",
  "key28": "4C1Xyw2f5uT5BwdL6Ycn2h4YJ5dCwNx1Udsgjsbu18x9GaWEoefPCsRsrjxZyx1G6nCjV6scrMj787vzXB6x1g7w",
  "key29": "3nAj7QJFGEW31Q8Ti4JnDNwZx8HmyyGtGN29uGnEUZXLPxwtc6REgHHHN4zUsETYq6wSGZ12nC5HQBS8wWqy8Fu1",
  "key30": "bjH3MST1b7ZQ3HDLQZqon5rVFR4Zs6wWoUoFrHnPLZVfXcURemwPfasRDRxgodtycrnxdQtgPfZGsjhXf4z85PU",
  "key31": "4Sh9QsnarvxV2zgKYnYhvdr3cmPRNhgLzf42So6ZDLRKSC7ja93GpapRou4BvVnPgEDvToKrMFQ5EP3j1zZhGMGg",
  "key32": "5xiGKqKT5Sn2Rpp7MfsqX7ACepeUrdenkXGuNWZ7c9m87n4s9CvzwiVXR6JbmvEx4FQk9bRTWtWe55ukDcqhSi71",
  "key33": "5pRJvBDZ6R7hPxnjPBsuAvr5kM3hAkEMLttwEr8cyucnB4yesNzgivVXr5D1JfVRKDz85n9KyXMPSAvKhXxaDJfe",
  "key34": "597nFZ4YxeZaBJ4nzattTKVNiykmeWovLXg4d9i7RR3Z9auSyYBujMfyAoNpiZDCnSV2vosZJcAfMMnoNJ8fmh9k",
  "key35": "3BCUBpoMaJ47Xy2BTV7caMzyjjnZFeNtAEQtLgxqMMS8rUBBWU6XdTvb4wfnZmaH3dDTFijq5HTHZcCKFyGDFWHn",
  "key36": "5qzDBtk7whdDfSDTYbBqebkmb4njjMCD6kgbq5oHvMH7Y3ho8HBd5vriZEjyB7Ugc3H3EFK5GCp3QS2KMXTLXH29",
  "key37": "4g1NtjtsBDRiWhUL924LDfowAxE4cWJv7qCH1hHTWLz2cD6yJNLDrPQ3LyVLVXvCLNmqgJP2vbrdpazX8brPf5LQ",
  "key38": "4YV5xNxbHNXXLGJXKuWZUYg9Csk7BC3hu66jN4yU6bMxW4HyvprGviqFVZ1XTbUtCXN6qhSWh1DNGYe925V64KtM",
  "key39": "4SPJkFRjGTjcDymeYFJjsiEiXE9dgJsee9cCf481zfJnWXDK1UffERccLC7rDdwPMLXrweuwSpJ69ueVqTPkpETp",
  "key40": "5gHTtKfS31QMZ2E7yWptB84R6tntGm8L6Rscx2sooaJqumBUnsaUMmutnHjm5WWLoVXbUrS91CWkUT1tJqx1VVk4",
  "key41": "5RwJmhky2mXe42CcvEaKpCwB9nXeSBwWLHW5XdV9zfEv1wqWCgy6Uk8HbKANQW2rMZCwWHcbCQGFndG8NQDFzfrG",
  "key42": "64oGED3EYZf1ijWFyi3GwKqegxDGnt1TdNTShGTpdiki64riicmGvRjZsbb1D2DC2FMpmdmdRHVknsB2xgLnZtvZ",
  "key43": "3HYfJ9KmgHQVWA8YV5MBZiw4sfjnJPjuuk1PYgb5NLNMGMKfu1BHMxmJtNZYji976ZQ9nCSL7vuMs5b68jyBX1US",
  "key44": "4oAm78oxCm16LggAUciKvyDfPjL8bUvF7qhuJmXg9c2gFu1qeGLjeXAcSsREW7YyHrQkQpfAapj3o88xJU89QtK3",
  "key45": "2eUYwMFjsmM5VrqBuaaRnGs11zWhrgLAyf3wxtq4jBMxjamh3zv5hmCKMCW4LdMFyYitCfUkhEqDuKB5wpWzRabH"
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

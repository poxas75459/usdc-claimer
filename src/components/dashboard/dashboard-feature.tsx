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
    "2yisv5vB21yE4AjRq7UiRW6ooXq5wqF5HiScBkjbzPPB9BrcSSnZ5ppvMKrgUaZy3qMCBbjXAXJ9Gwi27cc8CdUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TZ7kBJdogq4NxX2xtkCnBKnVHcfkapgh1iA8rb2axgU8F8eiZf7mRu2RPjsvxCFaHdivsvo5dRzT8A8SWpNBhX1",
  "key1": "4bRKwqMZ35q32n8BompoxMEFCweYrdGrxLoVbJLqRjR7acsYoozX6HD3TyGpDQfsErVbMYCqX3HYEEiqFG4QVAWC",
  "key2": "5ePsBubMdVNuocWYn77BJFEXgbkhx4Q5E7QjYAfKgnbagp3h7Hruux59QjcKpFV6fVL4P4qPuHnKzafPDyHbmRUS",
  "key3": "e4HYzz11dk3wM4VYTn9YKdFiKXwNLFtBDyrnpM8YcDpNumD6aM1ViNFgBzzj8oL1k9REjtuj82yddDoZgmcakQz",
  "key4": "21syhLdtBu3XFwNBtzWQKQHbpER3mYd9WaDDPBE6PLQgGo5c1qgM6uyKKyQ1ruxDuv9rDQk498MMvYfRXT7EqPQK",
  "key5": "zCqbuAo8smws66SSALbta1wFt8n4yCSc91HeUESnfs39KjyCPdJow11UcBSyopr8QnN2KyU5YWRKaD5fwKMM237",
  "key6": "gYxoAAkLoPhT3xdhF2vSpVUpf7sHatL8BPEdfSL7coDWgKSUoL6nTShNWiziiadLwwQzgkcDasz8HgPHrG7tcFd",
  "key7": "652DmGdAaWXyuRmX3HkqX2Akf3KTP54eJTvk154PPPeZPPGXoaj52YS8FThW37wcC94FYdJXypFWVCk7T8cn1xRT",
  "key8": "2jRdhM4ZL174iKF6NdgHkRZVVuTWStjg6Mf4xLs7oY8Nod5YfaCVDuY94qcVoJdD52b1qu8yP7YGUGekXrTCF5SH",
  "key9": "2SWaTxhvGjkuC5SsZZZA9Z6qyyVUkz4e498XrTqkPaFbB5u5ev6TdKvBczZyLtCiJLx1Vtx4w8sd2m2zFF4a8sQ8",
  "key10": "v6nT9Ksei5vG1XYvV3WHKyDDzRfsRoGAyshYp9feFzskbQn1jodNjonk7fieRzjc8fMamMN3E6n9hnEAocFYyLH",
  "key11": "5njX3LwUQTws5DResS3rsjwaFdx8uYChPRUDnCbmxj4sQTJw1zqxr7e2fYG3RZno3Cqo6KuUYjJ5fPNKzvJhtHH",
  "key12": "3pGF27tbmp5WNWByCv4ywPZ4rAfQv9z3srrtotksqTLeznru7Wa25ZDTMsCUvEoepjugWhuxZaQum57BLfzUkTDt",
  "key13": "4D5yD4vfVK9dBCabxn8fMjpoFCqNHchwrhekfUcnMmPoU9ppoyaTkUZYns4FLRjKpmHFxUDRcxXwQdErMigvQj6p",
  "key14": "f1rX5ZVr4G7jfmX3ikfHwL8syH97katrn812GmkA9HWGqdPWhhNE3kxuLVGJ3X9HiKDahsnXWtJozjrQ6KNCQmV",
  "key15": "2ywqMEMinLfHbocEcEwkaUT5NmeUh5QvMKNBLofFsJq81TmZjfGawrdFTbURUaixJJ4ANP4BDb9Fn4XKNms1LMrD",
  "key16": "512zqsXbSdLMV2uNGgXfZtpKoxn5PTMzc9AbpXE2d4uKiGEdUjL5buNeeGPFvrgoryBJPCtgHjrQXsVST17yEfwX",
  "key17": "5Pi426ZXXWqzfTv25tu1dNYccw9jHrvTXTUcsj1gNLw45uTkYZMF6tuyCW5WzSg2Hd4qkSFSzDanxh5syfbLifbH",
  "key18": "2xz5mKdNRQA8wV72YygbZfoZhZFBUzzYcTrYDVbZs98w1dWQ9kjfakwmW5Qx3cVKeU7Gw8EDWrihBM76G6TCC1NJ",
  "key19": "63Fs4Y7csoCEBMtMpYqJEMX92HHZtMYQUNezkZpmzwCKiEaVSHF1KNWBdMEk4VA1vsNzGandS1QEDGfVchTjfZvy",
  "key20": "4hCyPZVysSjWYPcxPr7pRZtTuLSTgeXzYWGRc51L2R2SAZZh62JJ1tFen21dabHPUokyz9D4gCg59rsaxHhBrPoe",
  "key21": "26TcXKZQxpWysZELiA5DF9oUyP2UsWTSzJDfoFJjamqywncxma1vY2sqraJYY3XUJpe5pMYURUZMnCQVgdS14VxZ",
  "key22": "DJZguSD5cUobeWbA45Wh4UNMkkidyr9qwkEYfZtuNmh4q8HwAEUPEaj338c3vjth8Eb8NBg2MuCyqAGPwsKXypm",
  "key23": "z7bRqmbw8PnhtBxkAcpLoihf8zSfbRoK9GpRpSfWY3PTAVtKpzag4wRxruGP9aNFQH4mQQhMcZZHWsaeQqvDfiZ",
  "key24": "4anAe3ggxx9Tp2Lxu82evFcZDQSePuFzpEPKSfus8Mpvi3REbN2nczDshzcHSwstdqRbN6jXXyi63AdG7Rtsm5EE",
  "key25": "2EnvnPyHyFNiGcN1ZmxwTRyoEufKTStkJQwVroYinjevW6XMKczx7hjD5uBDfq7W1TGHFrhe9aejeMuKGK3KTPqx",
  "key26": "2G2Gtm33AvAfAknSwZUiwzhTH4Rdn6EZNQUZYgYyuUxsoBxhHuTw365F3yUZVBYShsgYJzd52ddiMpx7TZQhCK4J",
  "key27": "5KioT5i4kcP9UG2DhXdyahdndqM4W5AUsaPndLVHKWC4c3LcJr14z96t7C3oU8RiaXKWXufVfPkp6NHCoBmR3Hfo",
  "key28": "54g7Ueqqh8sMgT9grmcyE5CTEF4GiQ2UN7NMByJeAoRLmerCKXEbfBJX8jgUFMeMmvwbbgni35ixwYahin4ivdYi",
  "key29": "2TQZGUGiEuSpk19UEpQ4aasWC7uCqwEfAfiYmW37dgQjghrKnim1rXDdjzWUMRJ1cga3XreVdS3DxtdYC7MMiEDk",
  "key30": "4rQKGDaJC17HWC18XXiuzgcPMhQcFcjQ6qwJttPJ5NUdsiVbtwNskeRgphDB3nUUC5vs1VtLN5BuE7ZjAyHz3SbT",
  "key31": "2Pwhgd9Xx5AMNgRRzBKH7Qd7HhhhorGVz9jb9kEZAFUtoRSEQTeXjkYAbGkdYQNVuBZnzZTCeX1RqQjR6JQNLjQe",
  "key32": "3iDFueitu4YcoBUVwx2NAiiPNtuR84aKyUKd2bPMaUtfprihx6UmfpeE14EPmPZ9vEYNtXtu9x4eq4jxJFTAMRCv",
  "key33": "j7zyn7FroSrCVDBRHerAwgKsQ8cTnHGQw7NRUepfg5C4XPjzmMERvUQmJZyWwtArHBA2PXXfzK1TVyjaJgnC6mw",
  "key34": "5sVLjzsazHLLK7Z5B4eMHcXaUoRihBvL662dmp4jodMA6sKytiSnfUTu5afx3s3fiJEF4zw4tVpykcB3RnGxcDut"
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

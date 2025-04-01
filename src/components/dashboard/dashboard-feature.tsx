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
    "677P5866eBTBPWmoAz5M6ADzQ6QfBDAo1WYPVJcwHGeiJFpJ3taXD3pqe2SY8cngQh1BJwwpS5VT2hXmKVoczLqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nwTLYorMTaPHhANe3ehWEB8b9rQHsSNb4jvUk5yXRFnQyTsay4zSVB5ExLBvxrHrLowSne8zauXCmDozDbstjCK",
  "key1": "LZ8Cwbxb6y3nft1BAjW2eGmAWrHPq8ak7Knqa92zMCtqNinh2LZ3SSxHG9Kh3stwTwkpPr3fpu6coYW1GQfae7J",
  "key2": "4d39Q3hyE3G66znxRiJswRdKNFcyegwEwjkb8cEJ1G1qWGp5LNzAVRK8B48n25vAsNuwnNZRojNxdxwAGQKw9PRn",
  "key3": "kZKDpkjYhwbkcWYBQDXCn91dBsJgao2uUJYCf7Kv5soJwDDS3CPkmjwPAvdJQ4r6rGzvJmKMPxBQSxtw9QXTzKe",
  "key4": "2Axm73aSLXi6Xi2NAKVZpLzZYhBViewtfy8Uk5hZz6sadAL7CFtY5pCe53QEjNoXMry1JFWQxjrkRtXRPKNjhqkK",
  "key5": "3Tbie8oR2C2FbRwA7GwVCqgNGnQNWjitp7dVCak2WFiqLxMDuD5RiHb4vnpC1aRzUNqy63Sh1S3thJG6W7GP9mg9",
  "key6": "4fd1WatNCxCV3Eb95TKFmh89z1haDLy6wHAWiauXNSWvSYrivMchu519dAbuQrA4TKpY9xrxeo1EN7gDfjf3iW6n",
  "key7": "2GCFDTRrsuaxZzgXHoehx8xiYcAtyKatQDJcbFqUjSzs1cLu2EBrmdBq4xmRgbkdp3PhTjC2UeP84LaozL3Qcxk",
  "key8": "3f9CQVNmUggBaGHs3Cp2zgA2Lpr7Zh3mbbeEoiDVa7EeFmYrbsvPeme5oZ44KPqmC5Eswpa1ejAyDnyj2n4gg7pm",
  "key9": "SF6K3gUuEqSqu32ZxuEwjQdopB6Jf6k2pxPrBkBtgVGZAXwka7vm7VEGnoxHCPipiv6xBP7buWo6QXvUUi7ECRJ",
  "key10": "i5DmuKFBUKdgoTBhYz1Bya2pMQjhLDJGvh46xuzXKZRwfBFqLskwT7MVKyNhDXvXtennh5kycPwK4B8REPPUdxw",
  "key11": "4xdAmnUmHwCNXeyejBStsmw5VDg1wt7PK6LEWVLqRx7353joe1ELHTa4Sg7WqQ8g3uKsCVLyeQwe3dGaezor6z2G",
  "key12": "3YjmQosutjT5kYZzB4vTdVhGGt2wPinJ2Qyh5PPfxpjp8mSk6CpruNYvAGLTaw77kvSSXhQFA6YnaMcgVXD8h8gf",
  "key13": "3xMa81tf4uZYNnEErUQYUf3wzigGVjimtwdhmKpJhjs5a7KMeeZJ1Qjfi1rMigkjKgpdsR57BvPpuqL2wxJs7X7u",
  "key14": "3urUzthCtR4k8ZZPVAnuw6aoPjiCzh5FBArEx5PP7g4qmnqcQmA59oFv7jCfjSVx8E1FpojHEZ8hVwStaGaypxou",
  "key15": "4ALCjKJhNYTUGir3WmnutbcK2RwV5UcEtXWFLTRAeVbs184h24uK2TX6B1mmqH9gCXaw6MxnpMPZrLfU5VYWeUqH",
  "key16": "4FdQ5iSnL5ZRZZJYKUJNVoVfUYp9zn7Cpn1hdUKro3b15Kcz8gWK1iR6F42gadKEnPQemLxjip89XLPH1DHtUDQn",
  "key17": "61dibH5Y1ZSVm5gYddFtkXB4sLVHzKecXjbtoPSE2vLFZe86UktBkrEco6MquU4jia3vZ2cYboysbecA9KGz4BtZ",
  "key18": "YUPY3F2ihHUnVKyVoiaY9LbA1C5Ut2dSfac8sKF8njR7M3aDCKfSbV3zZu9KVUMWEGe7eUXJR8dzwPaDPKVJgJu",
  "key19": "2agreXoBZ5VouZzxCWWc6mNb9S4nBtaGXdavSD6soeMW43i16yFRtoJMVswe7rZu7bUxQrmSvdAt5HTxick18Mge",
  "key20": "c5cCexRpkkRpE1dtheQ2Kz13fBZ6ut5BSaAWB2E3UaL3SFjHZ1LjStw9G6Yrm5gDxKMubUV61dAE7bAEFKfwmTW",
  "key21": "3oJpmUaDQdyN9QPnTt2m7tW4fGDcGp63DTVfpDkyZZvmdEe4wCKBkGujxgdYuCNsghGyXf31pY31PzsTjcG78cqh",
  "key22": "NKRH6RkqH99xWDxiiyUio1L1BB4WHa4FnL2VLJMdEL9MkogpTHB5eojq5ma6eRa4ViZ4nTAR3ayCyZDYTirPyNG",
  "key23": "37azmgLpJeyhMXvZvBfj5XK5wyf23nPSFBDNkBpn6wG9QVRxBi7T2iN7AJ2DJ8f53twyNGBiQdnosGnj1q6gEB5C",
  "key24": "2U7ast5mk4WQyQRb6Ped2uLz79FxUvYDEWUFEr3Gvjk7SQt61KxTQbgCN85JSME2hwbR3VqqEEw46uz5vzgdYx7n",
  "key25": "5skHcPME2R8Y9F5mVX7RyEsLcwWtHedPNX4XimzhEz3qts6aXQhBSqTQRWaSzgruGgF3EoAT49KdPXSMcyc8qtWf",
  "key26": "vpMF3zPWmDDj53ejJKwBxmxPnkkFTNCc253863xFN3GYavws32MeWJmSkM4DfprupWPsdmjbKzAryqzVc33HtvG",
  "key27": "297fvveBaKrdUPQfWzQj36jUwQQLCa8ThZsaQjVD9nD3nvV2EpdqqNba1TZ2moLuXU54YPzqjiQf6L1WDvjYxg5e",
  "key28": "4ChqUSSMJRwPXhLB4AYx2nsbPrMcyfMQXiAEy6HRnju866gsREkazQ1YB1M4NdebnqHFiNoVidTYGJ44J1tH957t",
  "key29": "WKhCdEs67UeMSb9CwMwddgnUDGjzCwoHYPinaUW713HZtH74w8js2DpxocqZBXz2FuBXkh4u6HjHRnYEY7zeRSU",
  "key30": "4afkPcefUEdZRJMy27YqJFjJucqD1au3zX4jvzo7FvSMBmQh3wGofcLHhCw1yicnZX5zUoyhaisSMsPfy5WDbs1c",
  "key31": "2cFyQUT3GWJHjftZZivLKjG8T1kozDSqihwWPw9dM9fGnUHU5vgxEg1Qjsa7i4TRVNnNL1ckSb8ZcyKRyzubjnUe",
  "key32": "5aKEoPapyUWE2jByM4xYJxyj7PTKZBaZ76YE59VJUqbjHZS6CPx3suTmEEojsTuVzfdohQgwmuon8L5pfdGMTuXm",
  "key33": "4sr8Hkvwvdyqp6cqiUhYc7yB1w73mKujZLLw8DmtqhucHTQ1SxG6nhNQQufcSyvEuDWuqLdLvVRgDeRFKUBR4ZoD",
  "key34": "NHmgKvKNeexQbb9miYTmmvNssfoZkgexHhFBacz3d9VDGJNhJDHMUckMvf8H6Hj6tA6cQdrDanQrvAM9ETrNfoZ",
  "key35": "25d688s4BAZa8Zw2K1tMedRwn6E8CbxBEVWjx1MmzVpSeNXSt2yhGZiJH7ufxcAYTymgRBDr3orTasuPxAVaJPgM",
  "key36": "M6mt8twdRZh4pCjLp2GePij4vTx56UfVXQZ7FbPvMrneHeKubeiqdoh1E9eKzKncinEQpt1GRN5sASyMzg9R9AY",
  "key37": "2G62AoYnU9YmtZnfWPKpuux7vtK6A1S7zK156PY2wjDLhC5aM6UJELxJJNBLoRCQZV9eeMFyW3qxmS3g626ehQ15",
  "key38": "3YyZVYxY9AEfqEzwSngAk9n5GuxDKVbLQDL5b9ooVT59XwF2cdr1f7XA7LhQDCcEBmWVD4shEGWn6W1M3heKm2NV",
  "key39": "31yJSzkSjnVd3NS4NrHSo7i8EHCg6SYcqpn6EVkZy8AbminFcuFrHXTW7kSjk8ZLwo5aB8qoRMfUZviaW4bbcJGY",
  "key40": "KJk5zDLy2Ku9HmPfffQU4g6Lx84VfoxPtHD4PR899mfN9FVk8PPETsJB1Fm9P3c3nWo4C9eYKaxgk3zwa56ixT6",
  "key41": "4DsCdVNsn6kHrarnXvyEi4esMg6SccB3F6dVFYdyrZ5KMSFPeEUDcAJXmv83kXJLgFRhnd5xuyufGvFC9xYAmhSB",
  "key42": "3mQgnLPMDezkdaY5CiiNXVsbQXQb4CXGQvRgfd4NyXhjm2eTsc4CfHoHf83rbpMWjyUAXyJGycVFrtUjdatY8XqW",
  "key43": "48ekGWyr9G5w95CdrjgseCYM9yUp19bZNyqztn3Lt1sQ3kG7njD4UVuuypQefKiDcPqD8dg5848i8RWsxCJnHn9A",
  "key44": "4SR3v6aW2DGodwBUvfqC4SHpLFiASF6MFAYNdUXBWJ9j9wWUE6W6X5KkmHbjRobSUkcBePYU4VccNub6EHJAcYXV",
  "key45": "3BJhxCnGr79cQHgKmGBtuWSCswrMnXdNsUS7zGfUcQ8axHuLrxitJ92EkYBBv78L8vaW7aNGC2FmtFB6UhVpYSE",
  "key46": "2W6W1oXYZFWKY7QkHK4R1uYzvRadLXQ8WTXAZL41GT4VfLvnFfcirJibNux3HcQUdsJMUhRrbhTfS5HE5XR3EiN9",
  "key47": "5yyt7GN1XG7zFPeA3cAobqjX9A32rKN8B7dqRkDbuVFDsh9F6gAYyx8D5hk8VXM8UbxdzBpH39xii5ckZtpzvmWm"
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

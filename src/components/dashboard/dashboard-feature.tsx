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
    "BTprybZLLxmpjSjNSFm5TTRXhwT1Nih4uQiTVrPpyxbvpgWqCnsPWXajheJAnEDn2ufbDDy7CHmnr8nq6xVEgEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PW6hFyyajCHm7HWECD862LA6oUVEzGhzaYtc3WAyMCtRpKix8VhZuKyMrAmwfRQndWFTRRAHeMQjEAjApXaK4ZT",
  "key1": "2H7xJtav9AwimpXaEfu4tKp31b1CPCK5rBmtSArePBUCxmMuCRc3m9b8NPPfPTrj4tNhfkcKDoh5fY8pg7pqQXeT",
  "key2": "4wnS9C4NXbQfpGfyJrzs5XJxV9gAtRx2KMA6AbXHHVstShxxydrmJGLNyVzWVTrdFEt1WQfT1TJ4U5DL2kaqQuGY",
  "key3": "5uXdQnLGZCHf4D6CyZyHoKDH6KWhnmQiUzkeXG1yRFdhT5SZYZVgRcpUiHFS7111nkigyRqkY53mXPbXGHEZSvTQ",
  "key4": "4ep2c5J777CnA8PkjZD39d7LEocFKeoAn1kLs7ivPJmyvis62eijnzBU7QE8xUR1SwfUmnmy4bYR2xS26oThxCB8",
  "key5": "ZPRLb5KRhTQ35cP4FKToUSVTUx6EcqU3fzbnMMjB6LJbK933oWtGcm9LhsF7vW4MCCFb24QCMFATUBsQ79xstNW",
  "key6": "4yhD6CSceDET6GXUc1F7zUWNdoTjQLZEHezsKjuJqKmSocRq9LszGNiweJvdppxwsV15A8PoWUVYhgUbZMMAa4gU",
  "key7": "3UvUXrDUjq69W8cSmEH2LDR2c2QBLgujJGZndfdhm6VvkY9QkT5xYm1rAsedF1UY98VkLPF26B5DJAB8trDmyrDa",
  "key8": "4zdoNbxvLMD4q3z7wYgJevjTnhhzmhXhDky87BheQJZbK1hjw3o3w4CcUgF2pSqQZvbA1wahsWtujYbjAH6MvRRB",
  "key9": "3zmNMm8BWXWf3USwpUbFXeT17HgeCHgHNC1WzEjtGbDEN6tcnWWpWvcjynGxZNnwUhRcMpvjsWCR2dzhqq94hGAX",
  "key10": "2c8xwhyyDGTjh15RBQEoGLEMSuas4DzmY8xJ3CUSECqNTajm4sJKszvFqvfuNdgzSzMXgXxaCPPuem66K5PDRZQb",
  "key11": "46EFZop13AHqViu4H4STHUTPF9KzavDBubBk2UrfuP95pfb1hJca2mPhi73L2owWHyQVVarkdiyAdyadNvFwnEb7",
  "key12": "LZr1eMgY3dbtH98TbVakxVXfDRk48KMSH2nxdYcVs71qi5gwEBbSv3xAkeXd8ESD2BDo2SggfLES4cJkkCWDRxD",
  "key13": "2GFmMEJsXJ978qLm4sKWGRWJggRjJe5vcVsnDDXhdwNMU6FfuewZEauVzdw6ZZAxKYiDcCoZL7KEPeSyRrxfa7v3",
  "key14": "3Db91XcuHFx127BVASdkWnP9G7kmtTJJ8zmEgVZsPpCXaz1BhoidM2C5eaG98LUEsdruVk3EfxqFUjr7YGLVQoVz",
  "key15": "L4wkmnaQ5zkkNeaGHHkUeNixXUS1UJSWFMVt7WeyH7TJT4srnKd5DkmDJqTmu94T63noWGvm1StaETJJbYjayyK",
  "key16": "5AZBeKJTJevk9jSYXb5aWbUzB2ssDGZ4Kdt7xKNchtTabtvQJT3WnFpkaeYRAwJ4XFTUwnFshniEAgEBHrVaK9od",
  "key17": "77yMZFY1wcWTKhSK8Azw8eXjhoVDgeseLJogStHQwW2kF8x8xc2iJ9K9oc9eyzbeicecSG6E9UozFKxTdiTvQc1",
  "key18": "2eMHDUeRn4PkPxF1nCd8FrSV5HmLZ9U7eZT31U1cp25GLhCydmA6ykKV6fsUrXY7nFay9XCZuFVvcozYiVjMYWvU",
  "key19": "65PnsFabeGkb4hBV2sish8bQPMTWaTEeYGVrDmYBSjUjmXEcJqYSefdeLgLqmBFzzHkr4xaphmNfMP4ZRwxDKmf3",
  "key20": "4kPL9gRKb1VWAXfTcoXxMUPjm4eGsmn3gPCspVBJwdUFbKuPaHQFHNBBm5j1xeUGVbRjbeXhdSHnTBqYMxhvDaQL",
  "key21": "623MW1qquMrYWkwMVwxiwQVVJLTKXaTt2daf4HgKT6kwsFQRYuMdmiuR7fvEaHdMDqer4WwStiSJSCGeuwftjE6R",
  "key22": "3z1exkYRUqeLnoVaZ7FtN9T9wC88MZrHi56SThA47kWX6UnerR8kjsVko9cymLvYyRq1vw1SQyzAnrod2UgkP16s",
  "key23": "3mgGRGtxACZbFxGyr79frqPUtxP15YDiixGMovGkf4hpEUpqfKyxeFJZFmTKsdBFfGcDtS3LStBswXcuBS9nxFm8",
  "key24": "3NuFMEgd1PvPzgCkN2zW5XBhNEH1cMM1KFkArQu7CyNLFhUnssYwYnE4EBoiHpafKu3jY7ELtEFzHEbAx4Xq3nx1",
  "key25": "2nZaQ7csKjxSf8pkw3g3g1mjngwZRZw7n42yiqq23p57TXnGQoCWQnjGzToU5TbNGebFsAVBsKi8DRfMYBmCfF7v",
  "key26": "23owWLbmD1c13w9RzyFhsNun1926czVcatFWm4AuTKR37W8NizJodUiZo4VQm8DUwnb9c3R7yCeUcBBHFQpGUDrb",
  "key27": "iCLKShc9AZXT78GrXifz5M92scH71X436DXdMx45oAGyEyZBfgireRKsv5R3Ndi9PCsBdavbE5AhYCCsG8RxkhH",
  "key28": "PcTaKGoXkYL72kXJTFnighKuHYURvanU6fb1AnmZ9agZCpw7yfWh5ZCLzsECEgmsgSkyZQkFFjsn5xLLdo42Hx5",
  "key29": "4i7dpzgY9RLSpFx6UXrbHvgYXHDJBuAkTpAgSoCobef2c669Wku5z2qvsDi5EcPBFvgJMvyC2bPUoLp1pkFVjJ3B",
  "key30": "4oTo2oV4YrkcnK6qKgZH9usNqapza7io2ARkwKJ12uyzQUqx1CkKvEp9yvc1L8GdSGx99eb1paXDBHCZv4qkph12",
  "key31": "YvYeEHRuC7bDyNoktbNkGGYJdyVQ2Evi7kBhnavwLqrafaETaBBgNsukp2ctyvC9qWU2KiM7HsZ8FYtvQYV2kq5",
  "key32": "c6C18J461KmRduBYmnJ75F37dUbBUXcG2a3GHZW43XV4BRPCgsVK3zar916oChncgnMrtkQUJR3TXCf7XN6nggS",
  "key33": "3B8EuGMkB3kRns31zZYwfniVSGUvgaWXG2uanCb1UZHjxDjcKs5r1VYdnDJksZwAnGHUeFrdWVp6dSmZopQNc16d",
  "key34": "3MzLjdAZixXvDSCkFcUY75k6KVL1Ac5S1gTFsU9jwB9RMukqEhEbKEawWCeH5Ph8TkWbgnxUuokfSLcBM2VePLyc",
  "key35": "Wi6aJyUmRwmUAuHAWyYC3Jyvamgnb9ZBwxgir9DHkqspFYqUcLJ5U99vNtJGE6oFkL28atzQ15WNhC2G14jAFuv",
  "key36": "63Wotq7ugCPUPvkDvPHnSmiV3LK6CsPBDowQh3WpaWhCiRx5eyHkwr8YCzwcafVHdcPuNkun9i5evPGJVB1PNYa9",
  "key37": "pmkAhLEWpBZAwRn6YmRyGuhgQkdTnaynX6bPB5fmgRGmgPimUiJXZw9nbBPKMCHfabivbyDWRKDNcmbhh9C8N8k"
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

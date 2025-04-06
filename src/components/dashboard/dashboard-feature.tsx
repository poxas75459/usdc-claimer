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
    "2LHjWHBTnA6coAAw89tofdoHfSZJJTSZCn8MH8Xo8cAqq4WgjEZ8goFobPJZgpXyez1mUXQBLR2XNaAm25a6hDC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3avpuNQQr1DmNGqasPjryM46EP7XU6tdoozKpQAZMvGoAKdwWUcEEBdJiDCwvMmrUVzYnme1NAgpSdkGPkqthqUk",
  "key1": "3DZSEVLtjbYwUXa4YZjufSWhf1KSMHhYrrhbnKFpdG4UdyucbgNVDgo2N6Pzr8A9NomRFx6BxcK4T4c64AHqK7Z4",
  "key2": "jV8ZE9bLAkJwxnQDwXSX5EugZiuZkHzhEaxqNBpNqDuMEgsPQM2Sgp6UgdjRpUEcuA3ywxb2WScgZBxXyHtHC37",
  "key3": "3f9pSMxAKvWHGVr38FxBtm3hRKgsY8ttjhruUc9adP5oidtyiAunk6AbqyvL1BUf5TDK1KTEAgnt5r98sRZCrby2",
  "key4": "2V93pRGjsNStKd4uKsEQW7rLCMxrAWTHzZ2ZofxHAtW82ADPB4cHratkexB7uvYtgUAKekZVXcr7N65xtNXHrBNt",
  "key5": "2HqwFsqiNJtc8aXfp5rSC2UqwCQKnfxQ5wYh76JWj9Q7sNLxth9zeVUCy5NZz1FHxRdWkkBwfMaaiKrHZeQDxr6e",
  "key6": "DLvYLdCmfByVBt2JBDj4McpyGf4AAZH8regYmWza3e7BkU8RJByWqE9vqDTUoawKtj7NBydeGZQKSkZ8bPZ7J7G",
  "key7": "2DuV4PEg762tcDH6vgWuc3bFGjPu9nPHtWBqyRU59D6oLF8ES5ha6cFCXnHM42dDE2r9SABNA6yQu8icvTy1hfXq",
  "key8": "nUsexLnaK5PPDnWd8a6q1i4j66bxL6XxAUNoG85qXJNvWxr2BjdMgE1AtQyY3GdBK1EnrfwTLH8hCkwHZD5zRs4",
  "key9": "264m3r8v3arpQ24D4eT5LgeSKECyT26CSTvaBsx7wfSVtAgZgx9QEu3HHoGuMth9Z53XAnN6zHEW2SGq9zmqE5X2",
  "key10": "3rjJ8Ph5k6ueiX4YeLHExYfmLZdfqPassQdq7Xai9PYHwopw3kjsb83vrTM4N1L8pqnaqos3CxMFkAvfkqbsg5nY",
  "key11": "HBEjcj3jMLG2Z4MycNyzLjR3vtH7Ku2FXu4jVanYhipHJfJDg2fusAQUotr3WJFwfYAGS61ZBxbMmoQJa42ZJm4",
  "key12": "ykBJYCQNTsEawaHWouRVQBH2CycgK8oVvgeJhThQA53s8W91b4NQNJ3fmVS6gt1YBQZax9hYJwteU82E2EddEqe",
  "key13": "1TNeen1ihmNFX2jXfBY3rR6fwiyV6q8Z35RAxZb3cAqrrxcpbatGrmQakw2cjXE8WJLzg44kerxw81ttBQs8wfU",
  "key14": "29BSRrAQjtCFhDp9rw1DV58HGCgZq5uU6CXkPKzbrP68YkpXzmEteFAUNxWJazkjqP9xZ9i2vXWVnwK9ofeH8AJS",
  "key15": "3tnGZx3jijrs6CTib8GW83r1hkVLpE9QpRwWraw9dxVrMMmPMFUZVNi6xTMphEVE3W8T5oYjP4Ny8kP7zqLm6m3Z",
  "key16": "4RSkQrp6NKCWpxuoVzKsGWxfeNpzJ1YTE9dZvpWiaMfTi2fmcqZ9YfDdpWZJpfXydZMMLoDYNQ3Px5WeVpxx6bwb",
  "key17": "4yrH6e9NmVn39uKnYrtQrBoDo7Act4waEKLMDSWWSbLoaDXFaXCUx3Kzh6tUU2g1QgntTEZoeXwwAb4c7ALKEp1h",
  "key18": "5A5FKXbt761eGHmtfkN2d65MKMKzh2hzixtJWEdf9VfqfxPfozkgdGW7raXvMgoeFXQzAzdQ9AgP97qoYvjj2V38",
  "key19": "4qqNrYpCLJucBD7CoJesvV5UUj9YU51wUjvyLNxRqrqJn4EcGMfkMdugQXPeuCruwoqXFk4MxfBPnjQrxkso5XdX",
  "key20": "5uaPtiEXvVpXpkCD3DGNmQASdVvneHEu3X5ciaWsDg1AHgLQkAxYKZFyREsgxDZan466S3PA96h6SQ7inTHxq7UV",
  "key21": "5zoE8y3nTbzQhjTwryvbuNfbhektXzFJaQNNRenoNuDGGZ88XM2YyrWLkTdwKfJW7h8VaGdYnDKSfsbLaW2imVG9",
  "key22": "3pGp8nWWSKrkA11bziBaU4X9ngqPc3PpFMW6BmDXLT6ucmrxoP8gFAdbDCDmmc3f5YEuDyNGqh6GND4TsyCv7Dcb",
  "key23": "22hZbrugFXSjDYmZn2R2oUijQAoAoW5VV6McikTSiqCzGaH3wTnxtyY3gnGcG6EfRJPVoBLiNqq4zAL3PJLDKNAk",
  "key24": "3amjnQRHM4Y4DgYaMsWLdY6u2gUNB68ffnkKeiLoAhT53d34jmroJxmaoqnfMVmXRkakUttrG1inVpggWAEcBbtS",
  "key25": "gm46sTjaDFFA3n5qBiGDQtzcBrQ5UMkLtQpa1FcdLNXKUAnWuhEwd8XXaQWrc6HAxRqxpiXvpG27sXpAhNWGpB4",
  "key26": "nW5j7wWvX6db3Uwjt2tZU4Xpmj8b5CAAtZYjeNCTuGDYQznCgJ1cRFxKQKkRTxPmYywQmTvRWYGpq4XBYJp5sWt",
  "key27": "3fUJdd2Mie2YwiJst9232EkRzbj92iu7RTz5EQBVg7xokKVeNcN52Ye7yyCNjDB3h72GGfVGjgFBUpa7R9NneSy6",
  "key28": "4hUxCbTNmenCDEChgwuZ4pVuJrQdHxhwBd4ygofrfxzjTDh8w6eJxZJSH6SHtSHejVUKDL8qQc8EnzabnE6hYvXp",
  "key29": "3VMzz2Pbp19Eudw74byGyNqDaW9e4r5TZFHU4CGqdBNaELuSfUqZPCnY9NJifGruFJzeZnfxsvUfPZHBTLFwjA6",
  "key30": "2ytpUWKam5tsFqufQEBzt4FqKpjTf9AehhPqw8D6TPFXTfomsGZ4km7cB4UQWCdgz7AZhJTVBxVBoixhv73DM28Y",
  "key31": "4H4E7K4EQjZsE2uzRdrNrV94zuMoWtPsE5aagAwijvUyjfGf7aohgtUNJjDbj2US1194tF18jNUF5qxFKusma4o9",
  "key32": "21JQj1zfmSQ9V7mXkvqz8UZYkcWjpQfKK3VCM6V988yEC28WLHNi7XjwgU95JocPGHoFffJszjj6VGhYjNDcJV9g",
  "key33": "npQJX2ds7J18rxN8ioqgZuGME1P19KeH3kSCxoDENAw1FqaBy5ZykVrmM3JXHPYcjH5fpCK9xuS5rXXufadD6ih",
  "key34": "9xVUuftG2Tsi74pf7ZBxcRmurTbKjFbXDPJ6oBc1jvEHUvxPLej11LjybF6AUs9fn6ce9ookrfDXzxjhJxTH56u",
  "key35": "63phA6GpzDuuSe8gTnVP5PRZS1jSo3EMDWS3awbDvd6AcRENjZiYo92T3r3vqHjsUBECrkbTCxGoXf6KUjYDFEje"
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

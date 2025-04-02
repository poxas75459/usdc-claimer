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
    "b25D2MDx97mLC2SYJC7TpEoLkWZNnHUCsjRux6yXLZ1kFTiHujGd6svfBBVRDdUkgvfA3weHZoVwqmZjQHBwPWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gr5M2Z6mQjtatSR6uwWk6LrD5uzELYUXtLDbwPdTzTHsvYtAdxdnyj4NtrsCHan4UCVrK9E4n87orxpKVKGRot1",
  "key1": "JZfJXEP6NdwBVDcgkfCBtQCY8b2jLWLsxVgnWuKvm9RhGe9FLR5HDLK7ktnP6q43Jugsbuj8DGWhdnKHp8uBvzb",
  "key2": "fokWxL6Qeoyqh96ZnGF8cnsS7Zb6ZhcHckzNQjKYhRRMnDW2MdhDYxQch56v1QtgmbSUJXrYx7mxURP6i6eChdw",
  "key3": "5uEdijy34fyXr29QHyy5AoqMpPBkHvFvrCFHR4WSCn8prXskhwemdNi3WLTQQeA4iP3f4jcTXEiA1VweK5TJcjAm",
  "key4": "5fx5NRawSX45zH3YdeBTSVE7mheBaTUKoWPZySijC9SmMw7UzRbhaWVFAczeuRko2tYp5jeSN3igcSQYhuN5dXWJ",
  "key5": "4ytYmcqDv3q4VyggVdW2dPMtQEYWTdKgQB776frerdJSVMPvtAWw4SrqPNMA4YWCNZvdP49ox9iSWPdundrqUAu5",
  "key6": "212gyDYgwrHHFpHRHzrJyZgStoNz7BegcmJXVH1BbdxNCRTeKNW1VSDwWTJnFmhNgL6Re3ZpGaAHcaAFfLmQUc1R",
  "key7": "55L1UxjPJxGDxVnh6zx233czLJuRhjXsDzZjWvh7dqc5FHDDxudCDmXdZkjuozkLMKtEgeUeTtAXHRPdZM2ENR7i",
  "key8": "2qQeJ6q9ZKv6a61zVoTT3SqkiTMKmg2dfroq5MhAD2tLhkoQghMTR8ArYZF6p1g8EECn3xtkRcXJk1kGvkSYMYVa",
  "key9": "5Cd9uQKzj9RHtWp5cd9WkkxKt7iZoFFqVJwBkYSagBxEpUQZoyU3phddgp9dpXjmCQPZDDPaYUoiDZfNeE7UxSXN",
  "key10": "CkWe8mmoLjRyP9ULvbzWJQi7iFYTvFE5rpo135837fjCfXvjBgrzf94ewFkZ22NYaWfkq5WmUTAZQRxtjSxciHV",
  "key11": "2AZfuuNm6hJNbbcQ9kxqSPX4uBsr2KmmktxYXc5iSRbK35ALpxMuxbTzcKrWEVopXQCS7zAJhQ97zR8pHLW7hEci",
  "key12": "43NPvddNV1w5aPmJiCJEHbVi1Z1jDb8HcrekPxk149opzoKgU7nk72kpYZHdaZTrWu1dQ8xxGMkkme8ybAcybze9",
  "key13": "4n1wapmMtYAB5aFJucgmTaGynzPo68ADoGBSvJUPwf5URmCh3pWcnnb17RYpYJWAYrfMV9sBaejTE3za2WBh3JFt",
  "key14": "45ZaRqZEzFzZpoVbAPYtA3CcbnRN5S9yk4GepRSr5i2vMLXkxBQwuxnvqaGEt3sDRbMZwqyGt5qraVLmqCvKb95T",
  "key15": "2VUi3pwzikNWdEtzFH3Jehy54oXkPVe275SBY6jvwt8KKz7QPwmhsUGtUu5Whq26uM8ccH7w7sXtPYgdfyXvR5Kd",
  "key16": "4v8DHC6qzyBkUdNaPtJ4ZkPQL9ajKLHa7nGzFXjcDSHhptq6GsCvyQ9oEFxtFa7yc4QugSZh2PjfTsshiwiu2TiS",
  "key17": "4Ev95f4SoR7ZRNGUZSovXHJ7TwbSEdiJ9K8Yyk6Ep5QvHNVG85j6PAVqtHzWEy1t1Az8DHUSVKeZiiJMVFH3dwMx",
  "key18": "2K1b6F7BN1rJ3BBnPe4of7Y2eJ9cTJY1pgGmoWBt7egVRzdz9gkYMBcELp1zrK9G1Ya6pu8m5Go5NYFcA7D4BwF7",
  "key19": "5VbxSuZmwTtyGUBYaV79s9QvVewmM8kopBFxHBoCNGkHtCVTbw6MFij91bPSM4uSQyKLcZvUcJx62ZTFNvizRTSg",
  "key20": "3cuWZ6XvH82ZiYhE3E4Znd1HtneumDiz7D6DwMevQnU6svQz6E4S4As4eJFJ1yKHuPaFzFJuo18GNRqcFmNiAamy",
  "key21": "fSNtWW2w2WpUsLG1LuGkjc6xNPcQ1aHPpuZYMufiybqWjj8GmJ6Tp27tGBCjYxfL9FXTjhRep5cN1LCs7UXxJ7C",
  "key22": "3GPKLu8t4K5aBWJf2gRqZGXfwk6cBnizXgwzPSSu5CURRMq3BAPxxF9zRts5rK2FVmJcH8LnqMHHynC2JkmSDMAx",
  "key23": "2ZnKv2pSH9JzVHft76PfLQZa6tzSZjwj2fZPGSmG6vKbc2EVbR6YYa4NGarNMpWbfZCHhvwGwfbMfGZ5tToWPHGn",
  "key24": "5c9DmNUqd31xAUjeCVbqTTg9CDTWHcjHpGNCJLnSG13joVHez3zaK1469dCdpwREUbagjokWWkvf45ZyhJ2MphDe",
  "key25": "5QzXGLuRYF9Jpr8gr3WGPD8CER8uVVBSZizzTWG18WbaxyKjQgBhVvzLqz64zSuYF2Hu8QDCCpogXoYg6VR5JpSd",
  "key26": "4iQPUSBLw3Tvm23MwwgHAwbqN6jYU3s8RzCqwFjGRSZp5KpG8q3yJZ8vSaZiPYU3vpCgcWMatXSTZFoaRjTqVzTH",
  "key27": "3hPCvCZFcUdh2Xx2jRgQUPFwXNkFr3UkZRQqgHxHH5bvJETZRyWnWmu23YZNQZfVRqmhtszW5vVB9fN3oK6UUQMP",
  "key28": "2rdjEAFQvFHJZMmDbswgjjZ9iA24vwrekkugK42SVoRWsh3UVUPcwxgS1WNYHvLubEJfCLmNfiHJcyzsLWarfAAM",
  "key29": "2FUA9F4XFbgRFABup5jChp4JbGHidfnh2U71rgmQoBeW1mM7ij45kQudR3UR3AYF3o9txxMr7Kcbxn4VUCzFvkmv",
  "key30": "4nuvbEPrmA7tGQ3ktgHXrcTihgUr9MJwuBHjDffkJAYxNfoBFjNtD2bTLx4gKGiR3bZzkxeqFkcAGAqExkmZCkhF",
  "key31": "2JTxXBN5J9L6FDBZuEF3ctmkBHJnWes5GYdq45XX9wf97ymewQXob7eFTvxYyiGmQiSgM2js5w9njzfrBUSyfYpy",
  "key32": "3GvCy4igBTWJQdn9TPq8Nb4QcfGh6skoP5ZRzeUepQqY3aLTZVi4NVEW7EvUNWifTQMC2UcwSBRf6ZGEuYWoGPHV",
  "key33": "3sHZFCpgfjwmKFDvetGuSPZpDGBVHELYKJy5JbK1y1kHFcR4TYxfMApYoL9TBdKmsc3TKhXJhiKcvy6DqFqneRWw"
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

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
    "32eQZwdfU9Ddba5FTMyRKfwJn93njT82KSmjCHq4GDpTB5jPzcPP2aqFb3HSKnsVvs6CnwLaqJXdRkxaaqfcbS1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pNz25pnX16wgm4XURuHYwKCtiLD7Q5T4GX479yEsUtEGgdSp7NvUcZNxkLWY2sNiCnBaQWeydAJ2mYFJZrsESrt",
  "key1": "cRyqEzrdqWXnFfFHmzfUTprQhQ8ourNVUVx5FLqMUkoiSdrsVq4rUQGyd6c6LVaS9UUJRJZRdp3qQhTu8cmtxXK",
  "key2": "4rZgaoyFu8ydcydYujZGSesNxPPA5zQK1NvyhjtznL24UdHYY2yMVDyJNNhdDnRjyvMscHULEfwoiQ4DukBKJMbn",
  "key3": "4ufAqU36S6GFUKKuXv5NMLztCv7qHKakQ47FYNLopr9d1Rh8CpuDwgv3KwNTtqBxMr3eJof5hGCGkY5MemNbn9rB",
  "key4": "5FhdwsUM7Y5GBUSnoEsGM2L7mYwQjMPbcexgzfAxnhi5gDL5y2pgSHUJRbzTVj9FdW13UkHxNsLvWJDT6KfpBL9c",
  "key5": "4buJhRzU28k9izGvpaiJkR3bpY5pdUo3NcqUc97KknoLD2fyj7VChyeJt97KXj3EHmjGQxsZWpDd5yME5E27ZCY",
  "key6": "636mV2s3JNk6xyYABpeap4Wu7z8jHWB4mrriR7LuJNiDUxLiiR7uLBbRif41NsGcKXdgniq46Pkxxfe1W5bRmqET",
  "key7": "3GE9uGuHRsyTFQbLSUQy3Pjx7hAtZZHu2bJfNwRxDW1fNRYNKviTkVfUY8k5ouwvwpaAu8eeHSCpvsbnh3NCgZp9",
  "key8": "5WKFc4NNuhKFHTnoAZYos7ncCX2feBx1tRNb2gzk7BotgXv3di2cX834K7zg7QvjfNzQTddMykjNR29NgdfovWVK",
  "key9": "5gdwizYf7doKEw1qSxz7MFqBUZeJFXjFw2dKroPxsNykRhATLP8cJwQr66mehXqxAcBBSg6H7jK8dnMrEMfzoFWB",
  "key10": "4aBKe7ssx5fWnHgEUcR1c7jjbDmvQHUZSjfhaJGHTso5YTzXSiZLmWUXcdMWsEfuhGtY6yNX2RAoqtyY6WhXdQyG",
  "key11": "3KSyVFaQcs2AgjgGZQJaiNZZCvh1qrugYqeXsfDUVS7eoJkFqGMXMcRi7ZpC3uMGSG8anpM6tbrRxykx8xqmd8EP",
  "key12": "4FVxzDRExHSE3cfVDaNRodFUSVP1DjXqz93riHV8vn9zFrDioGGfMdix94AAT3c5VeWEwAYoJNffPuw2zoUNUEtH",
  "key13": "3HxAJKF4SzLP9t5UhxPoHVEtcL1LXKwPfcDSZEkxAhohwxkcHss91U2cfop8DexYTLrSJGyMh3syyKAT8tEd7tet",
  "key14": "2CydbYNfTSESufFyrTp7X5ypvSFDsK9Kgxh1N11PHWXpXqQXdtzdHDEGGYYYHXcz8Go84QyvxZzJZTjjqhLJbFdb",
  "key15": "4DyiavtGgDBGt6XhGupsZ5mMmBMYugTgKVsb5Kaq267SHVZzUBPhyMuagpj33G327XvFX1UcsmF7kxrjYLH2zAeD",
  "key16": "44GEuWTXDY7ysHNm132VfTRpkddXEgszbUMiNvi3dXZA4nmbKrE9e5U1JUQCkJrizeHDFLoPEozxQEhQHz6n4qDd",
  "key17": "43rPzz6FGnTFGCcTpaKJpNby8A7Eeo1kV3BPJzfjbJtMEgTQyTEwxNH7ZFsF4bPCHmbZdUZcqefLNpNXjSq7NQ7c",
  "key18": "5McRgs3cB5HwxPH9quKkaZWAeEFRPfQ5bB9siazcSYgSEPXsneRs8wLwoXVKBTpwSKzXeui9KrFuLeM796MdUmgQ",
  "key19": "4DtS4pNSdX9j81EwEP2y2DNPtkn4jMeBYWpcUXvNYWp7DZQcLwB6qKREvUxu3pqN8Q8UdT82ivpoSU5TdennfKvu",
  "key20": "5Fk8rYU4S9G4VHWUyFijQtjC7oWhJigRaMwioFvV7dLC9FNUnfqrE2Z4Xqd72526sq8xT5WAy4LmFVRxXL4eS1r2",
  "key21": "4uijVoRy2CzBrMw52EQx5afe1zEx7QjPy7hiBbDnMfRUzhwf2aLcs8Gn3TQEVaMaRZiR6rymh7xeVWgYjjj9aD6b",
  "key22": "f1v7REFevfkQoHPB69SChgUE8YfDAavQGJjPUJ9fTDSykp6AY19pgbsbMR176cWxVA82dRtezgsoqsoHXLshYYZ",
  "key23": "2EEZBpW8brmYTxuShMhoQwiT5z9yKN59w8aVPBVcnFdBWRDrjesxCygrja12kddKAyCreG6CvehQR3hmfKAA5mPJ",
  "key24": "5q1t2aiLkV2q8f3R77vWE5sHBSeuMkft6TJ3J1rBJ3HbRe61cdBtZG8Q73zRSQWMdKLWLUzTn26REmviiyfyLqog",
  "key25": "5wPAzS16nncpNLrk73MN4ePH9n5H7Qo3uBMwueYGWK4E1CgsrXDptLXVMMSK3s5umKq4RAYTKiQJUU9yfVWh8Emo",
  "key26": "3skPQfTSnbLExNsovBKYsPAMdcLNokk8gbkdLB9LSrEASoKMQ6ZnXEYMwTu1u3et5YT9QpAUfbo5aT6KZweqgMW2",
  "key27": "2FUCrRRaB8j1oBvfEdTBKYfcd5LztFT7pe5hekKQeJA2RDt7N92bYPb117qSNvn76AwAiDKAi1dreSFEkZjexb4R",
  "key28": "5PQQxUhZSkPoYLKN6yi4PgHXobdGQTHEuj47GDT3Unba8EKxfWyMsfDLV8HxFqwmTKCsH9byUxStn77t8MSUif35",
  "key29": "F4hyrpPVSq2bSkAsyFDKcr68tDNZvjv3p9MY2Ejm22h8CEnzEELoS8JzLVpAkWVGpgYV6Q2GbDrCfpXq6nTZoNV",
  "key30": "4MUSDzjJmjpeHdM931oS41MLCnYbk4VGUSgGDEp3nqrXXpKtTnfD1JwKGZZAPNYiedKpi8yVVcTMA2gfVMcJD5EG",
  "key31": "2Q1H2qTg2c6Yrout86e98DVEzLbbQDhW1V982PT4zyu9zUJBGWH2BKKC7bqbHNz67yL12xgaG131XMsQFxpx7ufk"
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

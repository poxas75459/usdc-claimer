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
    "67Uxej4yV1qVSLoTUbdAnAcYFk5k4eCREyjKZqRDtLqR7NMkM9cToiung1de66Y1Pg9QUu5uic6QHMcYvPQA1tev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kutMZXpQ5wJGQuhN6eZo3L1mCxABZSeCcCGp2SXWPKh7aBZnEe5t1JCFF9MHW9igkpECb1iGADxHLjNMvq62LMA",
  "key1": "4udWMdGASkaseYWbirCfqqLuNjtfeDqE7hyacWD12TEsMbKVSERLCMTEc7FUFc6wz4mqKUtH8CqsddfpqZygzcqx",
  "key2": "UfUPFy9nn1q4Cm28XANpzyV8HPukAYqx64E9Rg7YW4ZouNHLkQJp1Wy3ek1K4RJqU1Prp7JnkDYoTsjShENc1sk",
  "key3": "2y7iQ3gVQ9WCdNDT9wo2XvPiMhm78fhLLhEmJvbHZhdJSLLWCgH6HW7YXuJoeXQpAegQMgoUaELoDuSrrgZNBHKg",
  "key4": "5zedMkmVdSC6dnhDDkNBG7FmQofvDSwQ76hBJKNgjdujAeACXUKGzooTUe7e2XL7zezXv1cU4Fw2zUqSQ599NeXC",
  "key5": "2Wn7NiSoPcdSAZykSQaUVGVb6jmKJG7V6P13SUJgtGbgn8DAD7DNA5BqqtzEekormrgSwwfbwyfmvoDBvxTmZ9GY",
  "key6": "2rMMNPqPR8mRqwnCUmohrN2PG9hRuwQB8s9UQxbFATiApm6CrereY9rSuhURzTsmXNmaHrnhVmqBtzFtWuL7DfQR",
  "key7": "5FPhTqLgwSAKfjJbMZDCrtd9JvReDm1bz9wNDJEdXv8DoFhK1rRzjP3fsb1eoBGsn4p9NDqN5fJpQZmmq9YktNMA",
  "key8": "2GxL7JtNucNRLMB86K1dQFtgazxUK2WLVuF5FJJ1j4LgdpdB2MXTAA71T8zyjYHDRrPkA4CMahkhVHhTgNT8F71c",
  "key9": "5dNDpLgE9RSLdCBrKHGviaDERiBWqB5Pv8hetystpRuLhQNrrB6xBG9B3XhhU2qDmrgEYXdAL6D6sEfvNAjajane",
  "key10": "4r8frmhkzsEsPALXLgdYvQXwxmBEP4a9L4DDzzfFdsWZkmwRyJuGXwW5ydfrBrGG5Ucqj6iffb1b4yZVVUp9Ywyh",
  "key11": "46WHZgUrKjAV2JithTG3ntrxD7FHSqasyt1RuxBL6uRFwD5h64ArYM81fuMrr8G4f6Xixu8pq5jseRG58sZ6KXRX",
  "key12": "5gTxJTYx1LxDpyU7ztKffvTMPrsdhTQmYneUVz4SaVKYdxiWWGYvsiTQ1AkQTmLBRBdnGkwdfiFf8tHHYnaZ9ffY",
  "key13": "2bWtuah2TNN4nFnfmHzSBfbXe36BrKWmMbaiVbSzqjFN7yqqth8G9Wbbv6dNGs5pKmMqpwDrUhQV94qgHfDMHSKg",
  "key14": "2HuCetXBb1MBTDRo1HpuePCZ8Ca1anzsdssFTNryUG2xGaFfgBm9MgWYmXNEdXAbSuuNGDWjUPnKohnE8w8AkY8",
  "key15": "xh7Gm423gWiHrr5uzyRHryjbxaZ2qo9jA3HwyH9ZgRJeyQnFdPvVer4KQdFoFA7HdXwu3DTHwC5CNbpiuzsYoFD",
  "key16": "w5SqLiXTMWKhFPez9za5wR4gHQE3aMcxMoJuRzGHNZEpBAGKPZpboBucH5xmTTYy7ipJ5tc3AjHtTZYyZywUgH6",
  "key17": "24J3LA1GHAzQGEz4J7xrJbiDRwd2PRna8tXQWDiuh2AvadevML3E8JUK8k5DebxU67JgMAkNNadwNX8nm2ptk8t4",
  "key18": "21zHKqNyy7VvqjcjG6pTDya9bUNLanTUL5haqayqWiwDLcKuLQB3fmNP6BR6dtNUJ83Aawpj6gKk9vX4dW3qVW18",
  "key19": "3B3q8dWvxnwxHqkGmwCuZHvFjM5EJBkRTDDH2eNdVmvYhcBARuvCHV8aMWgU7Y6spdhso1VUz1ZGPwtqa3PrpFrc",
  "key20": "5cuYJR7jC6gYWasQspFGSzryt9t2gkdXYx9mRjrn75qryVqPauAomfwGiQDttYTSpkt7d9RAN17vqmjVaNKZVhxs",
  "key21": "N2eDdoXQCRxmPWQF9K9aP3bT7rRYn6bzD9T1uN8bYTK2ksrnWdjNnny5Hs6UpVozePx2LTukJ7tcxBCfBhA77ks",
  "key22": "3mrrCjyVhtu3gAwm3C7PfA8p8W9vTPa1okgS8Bo5rhXcFSgjPpodznVWd6C28PK4dPF2gWRqGXVFThXwbwdexRCb",
  "key23": "MZz18J7R3jd65qb5AGvPVnWCwt2wzEWddrDE2WFCKsxWRQpYfwvNfo8aWmG5Hun2DqFEeZEaLun37qkrzjCXbmo",
  "key24": "24kjZzeptNyDQiSW8V2zqPzmPqy44pSbWfXyLcNjD7AiyTGzxXnyQwT5KeNZvUMvUrhSsbjijY1cL7yc6tLqj9cs",
  "key25": "5KVCzqpmjMoCKJE6Js4Qzg5HBnDDiqHEEjqfsCnKH7B21U21BA4gPqyZ59S8yffusB7AuoghWrq6w4VoVPH4YNdj",
  "key26": "6VTWTFMAV6BNSBqWekDqCQkDEShJ8m7yCVHZzZZPRxS429fx7qexrtub4vUb8nWVvFBAY6AXgWfcJNgM7h8PhuS",
  "key27": "5sMKTqXY7mhU6emDC3JjX5TEscA5hSoufbDmhXZs2jgQ9YpvyRtPf8VA59dtSxnne2A3cuHSNpAuyUuHYBHTgUBK",
  "key28": "46KPEo7pdnZHFzAbR6MHhAyo2k6cw5tRgkHCM8DqQkpF36KNk4H5SUBTxAX7JrDNUANxuAKDxFkwLyctJLyqEYJY",
  "key29": "Nx5bSh7kpp2Tfe9qmFEYYHuuRoKjY8rpDiP2aExZTo9qKCgKfGrxmajEVNdCqQXQrDHe6GpcJ3ku8knhbAWTuC3",
  "key30": "2qYq9iuwKvtZvSo9Wgv7PDjqvYAQ26fg32JW8CmGKThJmZcdrnz8UY1jCcpoDL7bjGCcM44tT7nrzwS3LMRb5k9A",
  "key31": "2P3HPt6rGJghU96Km9mLD75doXSLUXktDaBbPFYpaPFTuZ8jUboDfypwaNekWk699yGfvCFyse593ZPcavNxzq53",
  "key32": "631m2bhyBT6azTuoDrqRZSzhB6fr2dPuH7hDKWVQ6VVn38oKhBa2KctHw87SScr4xTXW7Lf9gNtEek9T9uv4HRCN",
  "key33": "4FiovzM7fYf5bkdyQFc5J38iMx2anro3hqtaYZU8gh5cF3WWdMPJCowBBccSdhneVkxA9nB357PQPadMjV19Sd1y",
  "key34": "2SGJw79XMeYr99iwHDsnLrZUwB52iCTHwnuWPEionEG88LBFw5jZrhYsjE3E1V4R4VbbFssTzS6UizA8ogwtp2XC",
  "key35": "2kVDsHTTdy66GZUpWhvtTGafx5btEWU8sZUaGX264VCjZrRhrq6veAJBVhL76fUvFLsoBQceyLPU1zBxfS1y2naG"
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

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
    "mDwp5ffJvw52iNk1iaJePFQybYYfWisS1peXGaizNMBQmHYEYXNfjee8wsYkMbNbFDYKAAicsqJL8oSjiiMEGwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YM9V3ByZkSpMqeMVqWtBe2KcsMn1PDvisNxW3rfoHv6jernhJ9SLrbhbcotaTa8nvmFoVgxqhRvfYD8iHZJoNz4",
  "key1": "4vw4DyBg7uitaNm4x6MZk2Vu3u4ZbsXFfcjS91oQV5bFDVvFQn3G8h1JHVdi3KsjhweWVZQdmtETrMDVkWLt5eK6",
  "key2": "3rrqkFyJBXaiYPk6cofscH7wjDbzRk3zRA4n5u7LHR5Es77DV35ZPEYbJWnbZpFdVwPz4jKVNhnPF6ie8JaTdfod",
  "key3": "5YHhi8ggZEB949iBBGdVAiwhPwQcoHB8DQrGqvrTrrM2KHyu13NAGzbSyQ6BbFsSoYNRT6GRpk63Vy896z4GczsS",
  "key4": "5DxqSNyLZiBzvxJY9h4hykKxj5EXPa7ZFCnSyAMNap6gUviPzgzA4SZXic6eVvFN3gD7c4nEvYsbw1q6ALBTgqRK",
  "key5": "24dh4WtuLpbRKWwYfDitJs8fGXSnp1KFNNevWY9qMHcVPJDiYhbWBfk5wZmwKfzEcAqNabTT8J9G2tKEKky3uFmy",
  "key6": "1aZ8jpiWcgYm7QNbUXSpvZyfT3J5WtiTLT1KD2NBib6Fsf2pyFLWqUvusrV7BwMqBFLdsDd69jAQ324WARqH7YX",
  "key7": "Sv4vfnGa4pik3KcfK6FA98CxxNFAuFPy6Po9xteWrsaGggZctfBbYhoTpRXbbXtcHJkrori8Pe2tnwTnX33hDPV",
  "key8": "3dSHfzUFq8ZCsHxpi9ft6q1BEpBTosBvanC4XTfE3ZHY9GKwAN6ELTpSVvE51dU4jCAiQ4pefQ4meKbu3ojGGH7R",
  "key9": "4zYRt7P9qrS3A81bsbsaBY3xiL16p282U1iajUfct91u6LL31RcZvGedWBhNV3gHPyCN894NKTpnVy9nwB22FjLx",
  "key10": "4en9wSLpw7Fs26bP6kTgCUrsmy67ALwAdTRaoHfUPkSnZtB75UixduPkU2UKt6T3Lqo8zKmeJKLMDK2mBSFmKzoA",
  "key11": "4jsWb1Rv57nQzDmMNz8PA4zXMNHyQJyaWc6EhLnXTkVQhSwhpTqtAUBGuDRRpQkSipuR8UMEaHP2ZPwEZH4teAdU",
  "key12": "5ZB1R1ANugQYQmWqhpCawAWmvyqX5Tg5cLb9pM7WroM13eAHdjt7Rfe9Syg1NkA3LSSL6BXbYoFDo7W6f3iePppp",
  "key13": "2Xb6t1BWYsbHgrqZiCCPaVnkyti9u8JhF5EEML1pX2jnfawmqGariWjjChf22HV4bAvA8NexfPycshfSrVvPNFLR",
  "key14": "5FX6iA4LGARo8fLz2fdAAUcHzXo8vBSPUCL4iZjUEdQvt8zpxK5ipLuYEXZ8KHjUUBwfRvdwDyNPf2smvbzorsuK",
  "key15": "5NKZUQ69LYBRwArQBVm6N9B1Ad7gLG9Fs1QJpBfntnzC3i9bLaYRbQjG9uWMWFEY5vxVLM9jRaEAkMysVXiEes1h",
  "key16": "3DvvF1sx4pGJzQSXbCLK7kJ1d2HcsVMbhkDhgDHr6t4LWvHzJFCQ5v4xX1Yvct5KADgZunuQxQzKLedEFRRHkR9x",
  "key17": "2SL7XZbW83VYSDQvTfNfx13KRCU7VFKeyk66j3S8aPCLSh4NA1DvvJ6boUWk7kiBUYPCXgLQM5sDK9oBqRiB5CXj",
  "key18": "yQcpkckbMrAfyoN2xfKRVcuqAZV8npJZjEewyeSwhAp7yvAZixcEnv7f42kVGHu1EBEttCKkWCz5cmxeaqNHRmx",
  "key19": "4cA6HobjZSjQfaKTA6XVj7cn42AUCTX4fFjiNATr84QqiAU6LoV5Csoq53ZYM5Gn3D2VQXDhNrnCxCxdfu1PBwC1",
  "key20": "2Zf2zZbeNpevvKkSAfP5mcbz3eQzXig4H1zsywQnuX9KEEsQkuJCinR2TgR96DMp3DgzSAQYXpctdV1cnQCePtzL",
  "key21": "5K2Q6SsHtYhkpPWPxK5DLi6QZ4aNkX5PeZUzUWFdYBptfZ94WQWUTb44QZz85nq1QTH8H6K84JsVpfWbDYRbLMq8",
  "key22": "MdHx9srFz7RnuQ3nLjbREvPmCdydfFjPGuu7dH4nMF7AvNkpshKXmZkvpKSZ78KVQsvwdZGveNuTKP887zfddyV",
  "key23": "4TcPHCo1XsfCGWKyyE2BiMyvVSgS4jg3tBmHi3EtBNpzbRmLuq95kGkaP2PeibHDRyu55UpDWW3VsZAbHr1QyEKj",
  "key24": "2fECBTk8CBzzmW4kKScgr52HMJYzrzLRmm1bwAKe3e1k4yZa1ZkS46GQEpuCzsdbfTdphZMrq5TBMnhvQQWcxznb",
  "key25": "2sVhvXpXD1gSpFN5i1MFQaq2hPsRbQ5yhizBW2iW1P8SEZqhwCwzvX8UHxXAhFLMjeWZdryh8f9rXeBUCHf9UmY6",
  "key26": "pL8CB1tk9A5azuGg1xuw1z9Hd3REigGSwoAvyPGpuETcMTkRVZh4jwJFXYvaGq6eSC5Q5BdPPy2UNscdjdybXm2",
  "key27": "rakZeL8k1Mb3ZG6X8d6Paod5WRoBY6uvCPASBxP2oHxTX5rwrqgfzHubvUBuErDXN9R3Mft4RNc8e4FrsXYa75S",
  "key28": "f7g27TiuEa5YHEKGuG1NtEzKu8T1VBSghGZe7cwFRWsewbjp74tUPWeWHxQLxpRYVwy7Nmi9myxgCpe8r1ZJJZ4",
  "key29": "4GqYjCPnP7817y2REZtQEWdKvwXnoVzD7AkNzXssViQDeuzVsRim9xKe7NpuUVg6XYagQQimn891zEeacRV31QMh",
  "key30": "5LnsGMS5dQraWcK1i97wdSDfMyD5EFvpcJQ7EPJDDhHpdvHPABQuuidJPmxYM9VvmAYVDf3dJtiUjZuQY3GYWkZr",
  "key31": "2h6sPM12xHzcgp1Z3GSznSKnoutjjR5GHLCy4DCuCKz6EpnGYHv3QmT5NFbWDbiEpfWZBXFBdAwyvC6cHkacTCf7",
  "key32": "87XL76ZKsrzh8M4KNH6HY1mv31DdPonpaU64Q3u5wqfPqzRHvanz5c5D6W9uMLGG2rpxxytYYJrGKDkuZvQLzek",
  "key33": "2RL1jF8Ke9rqwtRutz9mWJ34BvPdn35yGDUN2KbZJC4vGZ2eJU6St7Uf6jMX3gHGd8gzwBoXLKtLwLpQ1Ep4mPKx",
  "key34": "24LErGaqRVAUYEckB5ipHbLV8B1Y2W5oFTYYUwjJ2i9FWGaF6FYZfxQnTvtFU4prjXCdDFNtc8ctN3VKs51qv4GG"
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

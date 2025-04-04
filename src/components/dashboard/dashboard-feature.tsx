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
    "36etV1fCfgSc13LE8mdf3nhc3Dnca8gb9JQE1GF7Ln87As8iBABw3pcaJH1DijB2SVmk4DnFrMuV7pSGLyc3rPqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31r6YnxA5WPDbs6gSY9eo6dAqPMkyxZDJrzyZwcvV68FJzJDh2iKyHCwf9rpQpwtonGTHmddZWCgK5r7p9k7t1KE",
  "key1": "4oufvJY1sZyqd4du9XMKDBKUAN4kn8tPWjtf3ML8PBfeRV6DzrGD5S9iLso3MeDySFALXEjkzbadATWSBcbwwRkw",
  "key2": "3GNUsxzxt28m7XZLJepUYSZMHqpmLFW838AZHTx3iRZ9jLiV6B7SXwqXpoqKNqbLRXNQjfKMmSzNoSoWX5wCKiG",
  "key3": "VBwhNXr8pnP4KKn1tQrRimR76TuZo28oEYoXDWvKdMhxyktrUym16NsN72yPD5UeGxTMtkiMMV2rE3N4yg1beG8",
  "key4": "3jHRZr1o5KafS4GbtDAeJzHWirb4ko2XZpEhM7j1bpNnLrY7BpRyv7RnMHUSZuRZcovbNQHm9JQBS8NgjZpKyE7z",
  "key5": "dZXZu1WA7efTgYaB4KER4VJ36FUV7GCQRvLTLnvqQbXV4ajTBW8KXGK9AFMcrDhg6jgVEKXMhDMdKZMobPMcNMD",
  "key6": "322w1DGyhaSLtXTkUEWYx3MVD5TxRQVeSVgGK4M8AGNrKo8DPwiq3PGTqRbZBnnDjZvhaBbGuH85zvDbA5pXDYBQ",
  "key7": "3EYPMjcW5MhYxer6HKR1D8JWxkSvnF5twr2tUQusiQ1KYiwfvcG7ejuJCpNem5WfMHVrYjYskG2cxoVmpZjBrPF2",
  "key8": "cniwXTxeME35JUDWyCQjZg3TdC2a7DkxLwR7emUvaH86SCs4F415yB6faGE4Fi8BwpAyMmr7EykgizSeJMC75qg",
  "key9": "4E3v7NVx1rrLpLEWSQw32R437RE5xS3W6zp87dU2AQ7iciJjSuhDhDbwsDguA6S65CnU8MiLRVZTRYSr41jZEuWY",
  "key10": "5NfbWhDL57abhAbN5RGmwXLzSRKmqVpvFGYYTfC6BzgYQ9bWZCj2TBv4cisgFt8mkLN5M4oBE7KCYKgCgBCsbo7v",
  "key11": "NSGFDGTUs9HqGE4uQkavDYHBxkcbVNk4qf9wqeLspuGJCKVdaWiWEgYGZFFR7RPCxXCGwBAEwCdGbCpMxQCjtw7",
  "key12": "3k2k7woMWzKUH8s8nyB8nAUnMsSvLKXGAAJnNQMgNYefSgizEv911XcEqPh8yzTipQM1kbtdfjzNZ2FxJHNw39f8",
  "key13": "2Uz685fhUTuG2uvPfeK9eDC8bXh6jTn8dpDAQyAixAHajEn2Nn3SkBkcQmXoWpqfUGKaDJfwf42wvoBcKZ9o4rnC",
  "key14": "2aHXV7XPcVCpBMTVxxFPCovyhtjv7qJUGjUZ3EmQqULHmMqfekeXNayewoGwUmR6Cvt2S3U63s6EHKcfZMLPsUdB",
  "key15": "5fT8hHNcUFthSsP15DRCpBYobQAgCZTwS7NbYRDVjVvnUPk14ZPjd9hHZhCRodXVFRSSxKHE8hPPPSsFpFkPn6mY",
  "key16": "2z5ECsB5exgqSjH3irivv885ps3PDBqV7cncysZgoSPyZEesQhtZPA7oshMC8YyJxeW4B84tJ8ov3iRvDuiXYorw",
  "key17": "4RmVVoGv8QvvWtYUwLFMT6B3GXrG4AjiKUNFse9dtk2JVjDKSkDzruLbG1eWwtxdrM2hYKsdGoRVP3Kv4vP2CkWV",
  "key18": "XZ8MLFAeZKFs8P9yjexZbmy8Z3jBQchcpYvoGR1m9PMGkfiAhjWNAukcamhqpWbXACETwbXMzZDU4LawftYfvko",
  "key19": "44zT2zv2qyknYmuP48JMgimXSAZgwXjxGvrhBdZ9PAv2Yp8zqqSRh4eg1heQg6Uxqh9cDqKDMdBrk3g5KpPM7ifv",
  "key20": "5CKcDmkdsNvqhedvYnfHj8V9jwkc6kboBuv5eVDsna14BP1GzW4LzDvmNbz6bsGPARsscP5JvMKwh9616kYeBboC",
  "key21": "5yKmcUhyfiSSko1g5UwmRKcYioxvxRCdGWAUgPFTEcrmXAFcd4hUny7kodiKCazgLi7i4RtSFLBvPZp17YRb3tc5",
  "key22": "BdCY52YqyEiGwC2qQuRiCpSJHFYpyHxiQMfvCvEhWAwnBhQZFh2hYPRtYbs5ohX3jztBizEAtz8ptKu3fiyADMm",
  "key23": "2eEfC2wHP4CedMwYbHZpu5FUA545aytAToWT5M2zCyZZTKAkDYexMy3YPaifCTMdvAKq6kYFRxbkYV4uSKyWWNb9",
  "key24": "4AtFLe4bqz1H11trjoC69Vzon6d9BWfjNUaD8LSSDQpNgS34KSKiQ1C46fws9nHnYsYA88yk1BLvDmn2P9NtBJxs",
  "key25": "3BcASKhWYS9fnTsddQ2k95Af6tFbGAVGqs9texSNVvG5haeYMsJooWi6Cdcx4LQH13J7RD9UVBMd6FbEC3BNmUtr",
  "key26": "4EXLTH37Sotz8b3jM2nwbhhdSPKP36SttXQ3gAmTv6nksAtxyRZ2fZGn51RyJyxmhcRw2p6gwDPCRoLDQ9gQuEbH"
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

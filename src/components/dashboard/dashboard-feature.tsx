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
    "34umavgHiM1AqBz7YSePguYQwFY8eJ1XZe6qD1oR86Tery2D5f2RbeNuVEBmTotd5d4VJfiUqByVHUhoua4BYuTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nfRhHxibo17QKNPfvd3w8Hceq3zVSthHszcsSKqJhfcECV2gVZubZdHx3tZm4tjka491q6WErwmU7zLfdNNfuZi",
  "key1": "EDvofycqVm4CjDxnH6dVMzBLxBSwcLiAtMLoP3PHPb9FcFbHu96SEuaYtWdEGeGQGTPmiYK5zQszpynLYaLynQq",
  "key2": "3Hdh52YgiPAQKxdrTaXZx2QtKoMaiUCJENJxPw5qz6DNK35gcLpZEfYWnXTbq8cGV22AXY4JrfSF4ALytjqYqGSG",
  "key3": "2uZtMK4kvbnAabwyVZaUyYBapdgucY4nC4rtaEoiaS22dMaCniMdYrqpBpFdMh41RRGUe1wQ8sidb7kHPK4jgno8",
  "key4": "4UVdvyYtPUP3aC3yweCzDYCJFzYTBqdfFFeKzyFyB4aHij99u553eSJ5zwWDLiWhQJavVq1VvtZp9EQSXgVEnM1C",
  "key5": "3kNcrSsVgDNm1YeBBc2jDKwrypUM7QgYiFEJSjjWkcv4tePTtTTLYgD23j8vvC5Zdqge7TG8KuMh4mRei2qzLxkV",
  "key6": "nnSxacwU3hXctwo47oSL1rVp3MFrd5f4xjHjRxerQ3qAbUm6L56SQjNjPLnRjpHawBoDZ8Lzvmkaz4rfJtU5gRn",
  "key7": "2QiH93izQMLdCkyEA28Map8xApvSrcBoAPnxGnjkfB77ouvy13LRsTKwE2yBk4BsUxBoDXc4zaRSWYERj9YpWkqk",
  "key8": "3BEgwDWqb9sSVSooA1J2vDoAmk9iGqh4LG9yDoySpksUcE75RJWiFCUxnz7o9WbRRCF5zWB8zkCakJyhGaEzodjP",
  "key9": "2j7UDnn9xcDBi1Hr9keKyt1AUpCuMKcdUoPYHRKFnimWRTtTR1xxds3EeKPfkmqtJ8LL1HxarShgg9XszRLVL4Gu",
  "key10": "2WE8YRLCgFYB787GZik5f8ByBQmyJAsZuhffrnXzBd9ykTnSH28XF2eiq87CJRBT2TtGQTRsraQTGLfrR2wFS6YU",
  "key11": "4U5GTUgm4qgfactaCF2t7TtTecbHm8qut1aSy5dP7Q71knStLtCT76CyqHEnMpKxpxxeHjcB87is8PD1wWe7Rhu2",
  "key12": "5jFphStiC71Gc1craWDMDDwh7jmgaxTEmUjVPuEm7BoQ5wPyL2cgkHzgMZCNr4ZrzKwAone3Bh1k6xRwpe4SjiDG",
  "key13": "53qLE74DuDB1TiG2xFq4bUzqLAFcWEQP1NYREzXGuuFZDKcmp2xGfg5iUA1huug5gVVRG7jbJM5NysyLVdRg6iuE",
  "key14": "5GbVDtY43ztA4FJSuu7zs4tkp8FTyCd96ZiAAb39x5ZjhH2AnHFaFwaNq5M1c6P16hsNAqn22o9giCGeex4sHANf",
  "key15": "3AkhxzJmfDac1akwfCY5Ag3r6YPJQxqZBtTGPvRVvwcCv322MjKqYq2A6tCq4wCSqSrKzZArNTFY7Y5DTVcz97au",
  "key16": "4N1KM148S8qKLZFSgPHepxPMy5nAoauR5u6JCjjdXzQnPCdbVtKGtyocVDm6P5JCep7QW8XrB6WSqSNxvsZfoJMV",
  "key17": "2QKUHWkLe1Dz4e7wH2pusfc7nNoFYrwYCXLqiv3AQSXKMNufBJfwLRM5HyRtGXfrueh1i25DdTDaEZ8ADPY5mCkN",
  "key18": "wZ3Y6WuHSFgoZu5RAdvJuVRnUY3UDPbNpQKXmJS9bJ1Zw69tejP4r98bTb9SPM7xTrDvNgXW6xb1h6N15wmTJun",
  "key19": "3iG9oy8p5JLgrPLpzLtaZ5YshHhayuHyBn3W6JB687pQmnfoH6ed94dZDSbfx6XSd46ep5JjmAUMsPm3irZDupgL",
  "key20": "ubUyjNxpAo4fqSU9wd1fLf9fQxjArxx3wRAE9tAgdwDb3nHTQYSNhbpQaHbXXPXekU3iQZ3d1ko66iJjm6d9jJt",
  "key21": "2sGA43aCFBJWaufYz37H4APG1DB6Lq6AoFf3xU49t8F1w1AH4PyMpW4bd57KcQesG6GwsQfRp4GMnwvc5B5QL59G",
  "key22": "EuSW3uUUkF9Z17JduiK7gpzaithHQ8eQfQsTRCAB77kcKhh1Amv8k8MkNxxBxPWZt8FjHBaZCucA6gYrHCkMjr1",
  "key23": "YH2EvhwHMUgiPnKmHW5yXnMkx64HTTeD3pdWji44JEHmVrRQigfauuCWGwaQZYF8Qb5VEmXBJWNYt6JEm5LweTG",
  "key24": "uE8ATewPyXBck1oJZs55HXQN5aFcTodxVpgaD7Qm4hx5vQ5QwDki7Ac5UULZMUVApk6FSXujTJBAnxDQFnf3Fy1",
  "key25": "4panvSRh45T48jN4junTUYF2qTVNFZznd7bZiRpSJdkZ3VjcN1pefSteferHk3NYE9nm6QGkoZtuKTmC34sKuKmo",
  "key26": "5rtcir58hwwuZdrnpxS8EzbdahkDz8sVr8ajBm6gDCJjWckwbJZDbfg9BMjZpd8ozBt9YvL33hFepN6e7ofF8P6r",
  "key27": "2Zc3TtUHizhFaAT4UptJTCQWbLAUiG5BnYzkFL3UNHdRTk5g8t4Ra9vM4y2EF6kSs1jtqDs5EbdWNTHBbMkWTyaU",
  "key28": "5vU3fL5MirPfgQQE9WJy9xs3q1k8W9F4vJSrRjBsUQdiAx9hFBche5DKHattqM2VMbAuqHdefF1KrNa8J4e4qPBw",
  "key29": "qYtZYK1kikihZBhmHFLjKtCuj3YjWiBfQWNudNAUYu2CaargjKkhAQGx8y4TF8SynsmswWYWK2rMGj8SN6E8Hpv",
  "key30": "46aWqTBeyHDjRxay97Nz28A9kBWr1hHg6ELhsupzDGppRDb5uVTHpYn4nT5ZcaHnLmXZfz7272VtEZTLytzV1whC",
  "key31": "5ZjJARY3GwwUFD2unt1eu1jvGmqCCdkwkyzdxmSYu6npDGZqpfL22ga3mH364bXF7bWPyjsAKeSK7LzPwSzRa2ve",
  "key32": "arQLai2di3cocLvUwQXy4K6LeLBT9igBPic1KUgoXo7V2HeiEUecJ77kSFGubK7riUjnVUWviQi4QnhuAyUdHQs",
  "key33": "31feVv6csg4ZXuF4mgtRqwPvYmrWc9PRMEnvPj414gZxjKdjA6beEE3Ax3BcUbpH13oboZP7C3cziUpQ1BMJjbSf",
  "key34": "4KJfaVULpoMHMqhSrUqEJQj5r3VKm8qVoQp8MCX1YaAXLS4Fz3fmKny9YjsJxJBuEZxAa5RpJA5KDoTx5voBLTPw"
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

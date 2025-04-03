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
    "nqawwD6b86qi82jLJ9WZCy8vn5Wpc4u2p9fJCbZVNMtPRHCjbBfbgCrVBUaPXQQYRd5E8AGGoKdMZrb8zxYFMye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26NM4UbnhYz7CNMe1UYKq1VCbzMfCfBEXf2sictA4e2vMGWjdghWv5EicZeFQEBk6nzwHkXEjK3LpN7UUCy1Lj2C",
  "key1": "4M9MWjnygm26X62XMqELNoYrbdFtvWSvnVYcogY6hE2kwyaRZtE8nTtox1K95B8TcuHnHKrF8aZ359qVeebJixca",
  "key2": "36J3LSZHf69GiQiUx3bXDzJmkU8jxNSZkmzHcuBKTX73NK3n6chA4mHeghnq65rzbCvu4rpnrV1kVTQJPAnHbvZW",
  "key3": "5hXyX91YDGTXwYo91dMHJnbU4byPYWAnMPpUMS21rsR6KGbKk4eXxkP7x4sFHYwNXPGFmju7T2LHWE7iHy4HkhPy",
  "key4": "3SzQNLYcZsfPKyWhBZB9DL4PbxijqD3KcYZPQnu47Jc3L6fzMjwqE2isF5vKt8JHE6gQArHdqiVEMzemrvypaABW",
  "key5": "QYYK6NVBjXdp6wt7u2Nu7FoLWBk6Z8SfM6zkd6jLnx3gNkL8eSmRjSHutogqHbMZvnqqZEBwmMy4mBP3ff7W5WR",
  "key6": "4AwsNoUoBTD6Gdk5z4taRbPGAfCiMiZKZ2zPjwjpMa6hK45bGfKrMndUrSpeKRtgdGRCmw9uGhTYWreQkSkiWxP9",
  "key7": "5xLM3YNBAHiiiJpQSYzDw9RhA7nihGsVyaCSHVYgLLPp6f6cGniGoQcm7H9rYaXKFwuVLUah3X8CABfvjMU9znxU",
  "key8": "2X9ai4FRRXZT1NAX3U6U2uvBs5smiB4W5jMvQKbhQdX9KfzxJHAk1AGC7eDGzE6mmEim1YbuDrL7CoSZi26ArAWM",
  "key9": "JGisGyvF35CbVYi1NQ8Zqi6HUqhRChEpXhGWk1uLTCsbCHYLu3jLwQyraQnP7wa72WbvJVKDvVkgzezqweKUnBh",
  "key10": "4v7NPhZ99Jr54V6F7HLDLrj2goXzECoe8XmkFPnTPJPu9cuWiREK5Dvsb99ts14VwLKpZmsHkV6h4kNj6xpkobkB",
  "key11": "5tc3ERh6jbHyvm9vLQPcAYuRk3nro1DwPhy3LZjk9DbjT3JgoDTBrd1FpuKUK4yBNtZ9FMfAeHAxCHgYy898qp1J",
  "key12": "595w4mEAkmm2nyXL2Vq1AY5t7ZvQfJmC5XDugFhAaAhQkufFkb384f6pmxzmJPaGWTmE6r9RLzxYU8xSN3pDLtsJ",
  "key13": "2v6evjYEei3Z3f2jxEWc2Mqe35Cqj78b8MZSaS2gSfbePAtABBKNjZyFsDEQPyyypD1mC8kc5mtmRu66gUagAM1N",
  "key14": "5oQ69Ec3JWuqbGoiDUVTXwL7Z2WrpE5KXTjRTWob8D8azqU9sZYNvypBm7ZEMhp7p6TF1GpHq76RHbiHCBPaB3av",
  "key15": "BcyZisAxehJmzAzS8hwpHPyJg4t5XBezEkZWaybQPos2z4uSAfzyQQVmXHDrYiE5dKtqRBdq6KXnfJvwn6xeEe7",
  "key16": "22ruoRyfypqgfPhGGSJdknUFmRgJae69DpriQFihHXsHRWqdvWAbY2pt8pU5PcdK4J1B1gaZ2FbiXzBUnwXZLS4a",
  "key17": "hEZCM5BDFcEfZ5f3gkNw1NfWeD9bCcuk7QZa1UP1sxY2913W26Fc8kzDsjVqsLz66TKaW8JrCAfZHz54zx7n8Cs",
  "key18": "4iYZU1nquwoQcZHLn1EEHnqLDNKcJEvfz8rkCWgSrfLMhmgxRVrBgBEkMNyRPndaufWFobmcwR8NZDFecx8oxGHN",
  "key19": "SVARAH16uzBijjxzueqwWaLvm2L3K6wZH7yeWJ8xDpx7jPpyNKXfmPE2SqaddMiQ1MBXSjMtMPhKuEE6SmT99zG",
  "key20": "2cztLqYZw5D8nUhSjTX9vYaXWL1FuXWFQDS6ZRbCJHK5GXwqC1Y8HiCK82QvStEmtZBScXk63QQZe4knRAg5pBpS",
  "key21": "5RsCKvoycszfjJbNdCF958qPk16GLXZTS1XgenuZbKLXsXrGvqtnPBjCYsh12uTLAbf6be1aRdW4vLdSfgpYm7XL",
  "key22": "4zA1jPNmTNc9qYaA9uJ2GjEEneirsxdEaA6ZyhL59Gg9Kt1pjbWYHDMfBYzrSZaw9TakYMk5Z7L7VY1RWLSWsVNh",
  "key23": "rcBVYXvMAcWF7y2MiH8Wehe8Mrwu8vJdvCmM9WjvU88dmWvYr4DusCSyA51tNG5qUG4hdgKGX7yBP3Ji1HRuyKe",
  "key24": "3ScD222o1j86WToCSHKDfTnXtWQcEez9erxPdWMxdQTu325DkCDEvVR9vyxcazb1k4GzCsPADtY2FpQk1CmFzJuF",
  "key25": "41u7ADAerPac5anRjpLdB6ks13nz8ACtNSMTV6Cr3RMwnKvhL2Q4iKG7xqYqhwYx1bG2uGA4Crnzvw65j2DZoHo3",
  "key26": "2wW6rsPSSfmBsEUkxUpm8dg33S76whuBKLUHyVcavcbaK4r5nnL3c4ULDjN5jNeQZ2WMXUNU77UZaRYw9MUgMd7a",
  "key27": "wFW8sUMEwU4WVfWxYdjQDPtXgE7dJJjKCapfEdBtYsroH5hTtPJbtv4d9RzKxbPe6Sr5E7PW4B19Vdbp7emzthU",
  "key28": "5PXYPHZ6b3RLQ1HCSFzWo68D9L9BJFANDwGHkp6ZDHRmj9csDsdcq5Wj1syUonkUQXx5gUTTRf4SLVok7m45BT7q",
  "key29": "3fisXWgPTY9e1fph8yyfhbPmb3gGEZrijupmEJaAKAchFrnPj6aTmSpK3iMb3F9DzHXAkCj4L4BDXSLKYBHVDhjB",
  "key30": "BzFXKVZqiWsLoSzx1DSeaktbpYHZef4HXCiHRRQC3apMAbZKtCztqcercuTFfFUr28UXoB8TTAadSqS4LQT7joy",
  "key31": "58aMpSv438LZoPnXLT9dyQb7HBeX9mH5wP1jEjBzmLBJgqFuSd2M9UqMs8fCXe5hmc2UEe395KzFqVMTo5QKmDMX",
  "key32": "3Yzcbts6NtznHadokabsrzT8YF2BAPkgvENJjfDerB2UAQonL3qbFHtLjsDBDMbXdPLGue74kUvV4vLNyTLd9Eyh",
  "key33": "WuYEdc1M6uTgFdCu5rYsPzX6xC8J6BhrGSo3RbV9ZG2VjGitW6ND4t2hijLLc4DiQsDzD3BcqgjQeEdHBarizwF",
  "key34": "4EdZihPXRCK2HEbs21GduFnhPRRRJyqAVaGRGZf6qg1LYrFC2rf3NGtb3egAhieoSErXyJ9rNQT6GiwVT2deUdFH",
  "key35": "5c3KdQVifxDXGbTUhQW6L3aanQjkaqPgHoMTqsMXDpad2xvzysY5n7eCJVe5XJ8DiQ44dB9h6pASZXYwQJPtmKoX"
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

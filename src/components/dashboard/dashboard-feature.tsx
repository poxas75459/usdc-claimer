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
    "eL8MN6uBebQn7x4zyXXBs5ZEmhoV96hPxGoUCiAh2Rb8vJKFqtG3FvL3w7zjKeLhiLZPTYgvyA3xgTbvE7kWJyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FquqPt5RjXrC2Amy21AudxKSsqXQ6ya5BU5HEvuGs5KzEi7TYor8Rtcs4tqH812qG4BCSWjEh5LLLJEe3JzoTXz",
  "key1": "28kX3cbd5WWF5pqEa5hZj6sqhk27kEaVWswaCsu2CZ453QjbT8yCYRCG97NeZEox6ukYWRCktCwkE3ZZKeu7Qpu9",
  "key2": "5ZKCri3cuFZowgT2Z2bPKHDHBKrBKBy6i4jTnaCk1ciUyNbt2vxtyMRx5bShZCoX9NRvwADy2LYd366mXhuNWwyW",
  "key3": "252T61R9UjYsN5PzhvwVphxkSWNZWbdkLgszzo4BokdoiQNqr7SNVKnRhVmRSidFz1ndAJdYUFRtq489TnyNtVvu",
  "key4": "4JgRD6TSmMoMP5ABfFgrrrB5VEU34Sb6Qxf5A3G7zNhjAkfb2ogWQszUZ4sZr3npZNCpsJ2edk7sYGWtUMPLdThs",
  "key5": "4P8PbPxiR8qdfF1qE8cPBXg7u8kE732GreG5UeJEMbXgX4tiGnKWZwHwcm5BCvb2JLoPFBVs6gwBFPSoBqZqcrXU",
  "key6": "jdqYHz9X37TBHcugVqmAfzKndbRyjbRyfEtkA3ayaAcA9BevFg3TanX7LjXYzvpZZwKCatrz2FmPM366zGvPk1s",
  "key7": "5jRuMDkSRkusx9RctSp4UYKDmaGhMjR8ZxxRis5Dmd5MevvEtBFDtXzCVdzDccroWzynts8aBJdqdPf1AfvfPX4J",
  "key8": "5Nv3VJrSnYg2MJfMRdb69SSwNXjjaeeEhWvDmFeV3TVChLx4X32Xnk6PpeyLBauWxmyu9AHX1bnKs3K1z8BQNPF6",
  "key9": "2NqJc1P5UaTwJSd8gKa7ZXpZbjJfk63xdfKvVBCdwngXvzowLEeXxrpjjHeFgS7mQe8gNHYUAJwHciZVAFTwW7cQ",
  "key10": "3Gat5Ktgn9SxJB5Sa6qkFKD2PR2gG5SMor4rRr1RscrkxtDq1vqdguZCbZ2MqVHvmyY4qLw9Bt2CMt3MLeoVPmiT",
  "key11": "3WP2avaeYj7gmEZP5HzDENp9TaYSaTArEkSjAa6qnCSq7G3YXa8YwJT5uJaT454i8GLorvQ6Cp2i2Pfdeh6TpJVw",
  "key12": "4rM4kS4JtjnnA3oykUMzqGqShd3CdB5VGanAGwjhAp6xtSD5B7UGoK589MHJWgnGFdyYrbY1QWw7Kg179CHTmyQK",
  "key13": "3ap4L7NgnPzuBrxREe9xSc6H8g114nV32ZD76FLApBqkoB3KsFxVbgrH68RXL9CysGP4gvmybZNNrBDQmGmYUJen",
  "key14": "3fyW5RPpPcoGKiw3XmjWgzZun6Dj3z6WHr8x6A8UynMUWM4bUQT6XpbhyCjZuf4abEvCF2FBVWejN8Lgpmn334uL",
  "key15": "y9m187TZJYiSQrCgabWdJJafKHYLsrKoNUD3LUTNpmAnmhTTiiYivCEcqSm6r5BEUouaRjT5zKABeowVFYfdgEq",
  "key16": "bB3oFEbRqLXwpMU4qHTDNjGhd76iYh2BnPJC4bPSjVfAe8QCuR4gbEGjGLuYGwtTa2nbQvN5wkX9sjmjUAs4ZQf",
  "key17": "LtJXs13a5ha2b9KiyRubQWomQ1KmSVW6rXZ1fpmTJ4uTTpMcp2xQ1iPh8yTpE2199QBiFZSy4BBqSbem9jFCq92",
  "key18": "2GgyuKZVGMhCdbKrLrjKr9kX4sv14Piy4QxKeTjehdWP9CSvpyFRc48eznUfwdJWHRWgwyChsgCRY4QthRMSyA1c",
  "key19": "sMiXa45yYhvWRK5aCXvbU8qMUBDXgfTjtaSQ7GzeXcbguruA9jVRvfKiDk48WffaEt5dAfW8yr5xvdQPm29ZzD7",
  "key20": "5Tk3eZeXoMLzFAy1br1PjU6yW3SjHbi536uAsRFK2zQssGfy3kpvKofqQ8rAkGNCPnsYW3RDp1M5uYVQBQikVFAr",
  "key21": "2U73ZKwFQ48bKjNPh86gzXRMAT9vzPCWUH8dXdgHpS2hP96G24Vb4Znd23fgroqpeiGbKVn5LhhBQfnPk79x2ipU",
  "key22": "4u5PG35roaeMoiXMJrcLPM9x8bSCVc6n4v7jHNwUCnqdbaP4GBe2vX8iS66dcWTucGgxn3Bwx59JH96Emc5yoqAD",
  "key23": "4r8xqo9azJu6bwvLnpvyDTWHkncuvBoVidpg9YpRAnuRXHTwHMNwwfCDxuNdVxsQCAuqQfvrqJzYp5QheR6JS5KJ",
  "key24": "35iVFmJrp4mGY3ua6ZYTU5ZDg5KAPsdeeGXvrQ7DpofjHoSdMFJHhNaHVV46YAEGCXPDfxXQMNtgpXx5VCTaoCny",
  "key25": "5MjqoQaHFCh4FKAgHjVf3hdtTXSEtVzoYF9TH5G2QzFv5KvTdEch1xGm9B1X2LcKL85p4QYGZNQdAfEdrXtJR6Vy",
  "key26": "ePXUw7uH2BqFdMDCqhKo7SxFKycDN6Ba6qaozjHP5oFW1UPFMHftXhBADtcRHNDzRkvzEVBQHnPpGQD3U7MQPdb",
  "key27": "2YhupbcX6QPmttM7RTza3W4CzmzvSeyJF7c4LQcQtUg1gYf9tZ9DAn8bBtJ5EzNswV1oC8Fj54Pvktt9RVsTsugC",
  "key28": "k7iFkK9qvndYkAbQ1KJq83V4fw55PnCFdfQuimrg3LtmCEZeLacZ1xWa3XaWU5YtNhzRU3hHbqjZ5t98rfRHQme",
  "key29": "4V76Pyp48LFEuc734btoeu29uau6fjM1kQUs92hxBN98McZcDFZVjAB9J6FzGfe9PXc5kfLbhb3HAZwYhiNKZdrH",
  "key30": "4n5zk2G6KT7E2uyKMzsidFhndTD5Aprvy9sBgCvRjTKqhdgYwvMjChqSdr46V48EzASzjxKeYmm2qspaAhDCnQ1Q",
  "key31": "5hzSaorMS9nu3ocXey6A3NyNbEWT46bTJ9BDYPRy4gy7MbyAYuU8tZKBjrooHJ76LVoYKscoNz16xiScYybUNx18",
  "key32": "47FH2JFAAt4LmhgCHgSVmyBsB9RrTArPsAuuiWLZ5dg5YQQem5oQ5GtJhnekhHioZrLgorHQRihXZXLr41hws8vG"
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

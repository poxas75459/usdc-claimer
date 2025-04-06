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
    "4hFGA1WF1qd3Y8aADGQJDae6BPfEWh4jS8PdVWb3muHHh3NL4fDS6wBjELcv8vgSgWx7TUDfgVsLFv5KMVsHpyXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F9DMcoXTjH46jE8jSeYQTVCqgEDyNfHPU9Z8VLLy7tCA8MZGBQ9dNtN6mknLuybhe8dQ72oPgEZmg62w26b4WYW",
  "key1": "3QvthbKP3HtEQFh9F5HZGcQGj3YHXZuKFf9bQrQeRxiKM545uKP4yEFLN9TQipYzjndxjiGN18qrpC1jjJkjMqEn",
  "key2": "3ZQXWgeU4nniM5KrCntUM3W4GbDtcbgndkatgc5Vvg4Y1pJLHEx6TWKUcF3yScWNabubBXe1rkDAtBs7GkeAHs7M",
  "key3": "5uYvv1ehAv4YYqWeUAVGTanHUC5cnTLaprYgSwRa2CcshTmEzWHSC39LmV46cpy7Be7up9vHB2j5SB2js9Ak2A8G",
  "key4": "2V3EVVHbabsJAXcQNkEkf55XN1s7s5vmKLNWioaMrV4BNir3fMpkN2ST8TsuUjNXN37a12sEA1FFKVQbtnedQVVn",
  "key5": "SoBL4a5QpW5VodPtzSHqdKnxsfY6AN6CJQ7efgcgWqM6iHoRdAtWqatAGGQeyNajukurXuvCF5WAeSkuuYFBPgY",
  "key6": "3jnfk4fybvjWJR8pJ3zwe9eMifY9hPFCv76p8HV99vPwuqmTEy5NavLMk6zs71mdQXBuqFL8Z7i5jiP316d53tec",
  "key7": "3mz6SRzoMuP6D3bGVSTmi1K1efKG9e751ss27VJBD355dpdbCWEqSijvRCeDe1CyEDmxAxUdmMB3RraSW2f3tTvq",
  "key8": "U1siMf525DqEUJ5v9o7NxaiDDjU9by26MovaJEoZRjyRs6id4912JZAnKwiuxXrmZQAae9DDLGxncofbC1hKU2i",
  "key9": "PJCjjiRPSNyC5L4uGMmFFsfRYSDJMmhQ1NiTTGvzeS9aL9JNvapQ8KAHprDW4hWLPpU38rFEHLEH6bNRuR8RYcL",
  "key10": "3f8heswHzrhabTMzKhdvd8rhcAtcvtt3znt6GzeWCFtVU6JuPqZZ5DLBDXiqAVqFvoB8cuSsu7mJksFxysJnExDJ",
  "key11": "541kzwT1pompVcEswzS5CZp6stoiSC4T8CuY13hjVYv12ZaMsnWdAkF8NXfXriKV87vkYpFjfKcePhZEGu3SNnfD",
  "key12": "3chR9XnFf1WsJfF1NzNgAB9GrPEuGTJu9RBYZEEuobybUmQhPXms6qFwZePyJ5QFfz4HvV7y3vB5XczzzT73RCuA",
  "key13": "4oCJtckphehfUNzKMfNUxvAe4yokRr1AaszFQJpFwxD31dRvUp6xDfTyNLk9cEp7MU9txGXxRubHvVPhcQWKZY48",
  "key14": "5XfRsoEfd5bztySmyhG6Gh3v6ogd3M584n1Nk76Xut4sMrwuYQ6GmCjEPtYS3jbKnMHyYz2VTnaPEW8h9qxwm8Co",
  "key15": "5ZHd7a4gxSvtgVh7s8kAe727eqk3ztC88cxJdBZG2Ya6QUi2JchMJsvtQxkpcg8ffihfS8RRRkBMP7JgGRSmNTYN",
  "key16": "2wcRjB26RdaiMTRbD4z8UELRXRfLYqWqtmKEQaTAmPjTZRSPwxY5FwKZofK3io4ioUPc1Pcwyv95trHNiPeCXEpS",
  "key17": "36Pvu22FAnuDBBZGTZwCfp3ujNf53pRNAgpVhwH2eQN8T53G9WehmA7JNpuq4oqj7QwYogJYQ1zt4iXZCKaVYoX4",
  "key18": "2KFkAyi4sVkWz7zPWq9pUjN6srA5iHZ6sF333f4M4CLHQmVxiYGB2Vbwz1cLNLnFfh4kmGRe7z3iFzWispPwVrT9",
  "key19": "55cZ3zAMTuUfiGi7CwVMXTJR2YaXfrRiuQvRC9ZS9gaTKm7G1hqmPjhv73uRiBtQpNoTpXMweq2n7dBJU7J6bvre",
  "key20": "4W9bjSaDECD3t8hPB54WkPybDKPzBjMBHn1eDA4dai3CgvVhi4FrvpFHVyS9dDFZtZPjbtGdM2Kjbnz46SqhATtj",
  "key21": "zsbqUTPytmTpr3CD4DAvNtoEZmZNBMiXs6LEP8tqBpGwvsPxKLW1b6VQjskqWDrMEqppZj65VX6y2ofDcUYCVDu",
  "key22": "4eAVTfmh2ng9dDHQnWapSvJLMWR7t8VcwHUA8fbYRnhGYS2skMqEr7PydcSuVKEZbctBXMY6aJsTZEFfN8DogCNG",
  "key23": "3ZmgDRwD241mTjuXUcawk14SKgo4b9DDmFoy7iiEeBh9pmRUr9EiksZYY2jhGwHQFCUNEHEhYmG322Ha3wpxSftH",
  "key24": "3kjErr2UPxZuuXUedPnfTNX2fzQb1tAPxts79YiKHrKdujMVBCiBdGjDzPd7Fa3425Aa65a4aTskmtvmvQ4TmTwd",
  "key25": "3vNezAkLHoxqFsUF6doDTaHCeYUtKyCeortVdvtgJZJkPcCVv4w7QNHYZZ9CA9Jifu99LuJ2AwzBM8pCqKcUyRfs",
  "key26": "41pNKemL7ecBDu9nZvpMVY5txLhuN3xsEj4UjQbpEuCZDKMUHgbbrfU2Jn6vx9aMfkmJk5sJT5VVcZBKs57V6wLZ",
  "key27": "46ar4HXnjPT36DCYMkpQMmXAzE1P8yRzCnzhwroWTJEhqTC4RoHZGcRB1z7WXRdEXGP4xNSgnocRd6ku8PKT4vRp",
  "key28": "39Ae1eqFeE2ohnTqxp46Nfd3qbnsXAFRxL8HLhfs3yRCBvi5RZ8PYAPF92WCeBHiURHZXCUKERzy5GRfnEdw7kPJ",
  "key29": "4LBnRtzTzAmyW5ta1efXiUC6bG5GXYXWRtJVXiyKKf4ZbEMRxxgb6kUPFfAZykqA74STveP5YrQfaAhUCMRBSUef",
  "key30": "5QDQmxttNHTvrrdxLZhnXNHnoASDqYg8hjiePdEhtvfzi8XYtSsDm9cseyMXP1iJhbFdAcw1FgLURTsF1Uepxfq7"
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

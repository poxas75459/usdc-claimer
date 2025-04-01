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
    "dgNwDnQmcR5HCgFQHny2vTGvknVgty18xYCLMPVhqPSEKfJDHwG4yvnARYnSPjNBDN5DcV9eFB5wFkiLCRN5jdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zpWdFsFURjkJJP8dJKFWBToRncrcMSfPmftx4T8PeTi7oKtHVMTcjcJ9fWcEn9dMFVAhygs6gbLGJPYqFRunWVm",
  "key1": "5yDMxkBR2huFQtrpFAFGNGMVbm2oKfam8EdSwYFQAF5oTgGNWiVaCLh1A76un4uP6pk6r9Ttc28nnYG6P3q2LbfD",
  "key2": "2Q2sH6QSgXHWyGXkoY74bJxyDXFXyDA1zDq5yoWrNh2Xed9fFrynV1XoKHyJfMZXkv3oisBXBtatXxSC4gir3RD2",
  "key3": "7k21meze8LPaPNtFS2JEGvewVWV9SVhRYF4GfgDTB9Ci9yyHLGMTTd8Xq6LY2ajXXbHvut33jsAPCcqQvr2F8TZ",
  "key4": "5mya4gfbUw4CmrKxvmn6TquCeHc8S5mYLC8NWAjKGfaQmFZrAcy26ZdXS9EtZ1gBxTxZKXsFTCZDybfKAZENcJcH",
  "key5": "cNH5CPBG9oDFwZQMDT96LfZzht9bSMCs36bXUYEBKZUzKxeDU19DNCiR69xCUoH9hJCB31zg6qioQt9Mp3wkfKj",
  "key6": "Eu6NqY2dDMeLWWBBTTXki7wpmjGGkZgSSbESYnmYGfcZSouYhrdbdcMapNLC6kgTxcgtXRpfJFCnDv6GoQEkYhH",
  "key7": "5zE2danCTLdHAoMsVV1TjmKCWP7fZe33tDYubKwZvK43tKyqd3zoDW3DiW8s6PZ1FMHUJ9EX3vHLSbF5wavCFvjy",
  "key8": "5vCNTS6TUSpDpvCyBd7YEXJDQqGSk51FArVtUY2za2kJwYUbfQLu2babWpgwHwozS6Q6sobvJVvFbbPJeRdrWTQ7",
  "key9": "6389nG3zxS41ArbSVSEaDP7myqh2TNqXf3hFnvzKtgbxMvUj7GL9P91RM6Ztov17nzGjU9dH7bmxmW9yoJjt7JFA",
  "key10": "jh1K26ihramHBXJxfDeccTcVRrz7e3SN7ss4kwisC9BPk7ZkLzXcgpqAuyVbsV54QTY5e6aR2p65FvndWcLpe3Q",
  "key11": "5AxWA7THRJ55H6oKsbrCE852RLxbJKsv7nsaAKFwnSo8UT9RCXPTS3ZjQ1UbtqsArVC6NxJdjdEEbxZgYEb4MxdV",
  "key12": "2Le1rfnApwkWvenq9JuEN9MnuBSdVeGXvYxBzwXF7N1utX55SpmcM7q1VrCzCR6coi5aexpLiG3suMCbiSAjXouN",
  "key13": "mMCM6KhjQ8j4aC6zPDNtfdG2zPnXnSPGimfnLqUnsbWwDgH8xtS7VH3EYYZMtJ9oScEmEoCPrg7t3ZdHvvzAg9E",
  "key14": "Swg4w5VmfwdCYsNhS75DAKxgTVLazzUhr4MjYUdxyypFyt1HV9GLeiUWj296EAy2GF4zTDiWU6F3jMzHCk7BpCm",
  "key15": "5sVajAoHHP1wdyuGkz8YuMZG91sUEKgJ8xTEsG4rEVHFrD1ZA5euvtUbkr76AEenpWLkBdxyaf9krk3C8Waq5ses",
  "key16": "4z6nGAuCzTUM4zNuaiDgSuBtYjFMKq42n22MGKs77Wy1kpJven7Rzqk1tzvTFoW79hgdMeDfU3omNNkCTGpsBiqE",
  "key17": "3zRvozjiz3GyiTrsp3weKiT8YEzFJzT5TccJdcm5uqqDAkCmyDRaQZnTVMX5pMi1VKXtzbZGtLcCFgQ3wGSQUuRZ",
  "key18": "5xQyiH4WTMMghZ7CjqbTxzZpVgVMa5tMfoc589k8B67MVrSCVoQzFCRTgXXmyZTGs1rfdChNQB4z4Phr3R1ajkmR",
  "key19": "3N2oejcZsdDZkWZH5yevP3SxHTLmkuuQkMtSNnc7TovazmZvmG4S3SEqDcLRB3wHDemqZmrSNinYQuTmNWxaznLp",
  "key20": "VGCZ3H8uaJthL1oXVWNxkMXRr7ztx8sHv49F7ebXEjZC2teWivMrCRFCgXJpLDPxZ9mug5kZYfDQ8ckVDLisqtY",
  "key21": "3JZbtvH8hdVCnyERgWE2yiLvfihzrz6ipL1A6ZeudpiVVGKPsCgJdJgJ22KxKeJM6EDHyPuv1Y1yjPEkzeTf8JMC",
  "key22": "2xsMeGNSvKCwfXfXpRWJBQcPqLEt9oU8qAWjbmVh1T9n3GLFbeTbo2hwZjpPTbQMnbwtugpoDdw9hqwPaEigFCR",
  "key23": "3BKsBueJfRyyosKtyxxtyd8i62nPUZxuY6msRmMAodREjjwkwu9MwTW3MKurEEjn2EZ3jgbTX3iJzJoJAJ2NtDYN",
  "key24": "5sxtriHvgAuUYmNi8zbgny2kz8ygvYsBanuVR4W3f8pZVE5vocpXESphCHbk9p7rAXeq3eTX1zigGawwtrYAmChY",
  "key25": "5VMKNYi1k2zRLsm5FqPzZoDsh3fsXPxJPQF3A57Ssr96UJvD5LhG5fGVEUZ5SZ2MwTEbQAq3wY6NAw9AEEvwV9ik",
  "key26": "2B8rHXmYAogKzXBWs2RkSouFSJJQMYv3AfrW5EyQRG87BNwmP7BZbYR6vu9jiuSEnUUKme9C1XTw5aVYYNDnRfPf",
  "key27": "4uA8Ueb5yXh3h355X4cVxdBn8aE77qa5XRrMRGAhJRPk8R5R1iBWMpyrNGCAS8XprG892mRYfWfBP4hNoqjMhbyk",
  "key28": "3pKUitiyyGcCeapJKzp694PDvXZAEQEXTD2CwgkxUfkcYmJi5JnW64FBe1nPvbUjwFsD46QyAupP52Fg1PZ3Ub7P",
  "key29": "4o1PeQqtECeyeXKbrzSV5Kr18cQiybm8WX6mwX53ZcRg3hEhtri93nRPb7eEXvgRv9dikqBYJsSMt4wYZXSf1Jzk",
  "key30": "CR6QKUS9rD6UJvyDDHxXcqfx3r5Q4MZDyJHTdis5179hpsoghvRpQw9fKgenGdbjZtjoXz9bkcW9E24UXbeZpyd",
  "key31": "4whEWXcigXbbBCbhvRt4UGfGUAvNDBQqRnKvYzNJiAdwEAwGpJHL95gHdfdL852acVEHTEcR6esMf3kkMVMYfA3R",
  "key32": "2BzGHDr8r9sjjV4a8DBNFCXvEdznCp2DmBj4CcNHSmg3RxeayWn4nv8GzJma27783C2yEQRe4g5bopPH8GarsKAS",
  "key33": "3RspeCUZ4nWTPUS7TJD8JLSgqUTStb1d3iAVw2anCJT3xuTrxXmFfJsnRCDoNah1wWvwaqicnmqdfDZWJaJKC7pU",
  "key34": "23kJMWekUskxJA9dC3znvLuPn24eHAireftMwvNwLMJDL2JLe3dSv4xRhWs62xDq7heGcYejzYqhTudoNDzBvRY2",
  "key35": "3wsagyD6fbU8MjmCbahbPh7Px8FQziiBcyumr2GthbZXzcZDibFytjhpndHVMK6JH9bB62emFgxoWvCD8EXTWSKu",
  "key36": "5tmfXd8LRt2TFQNubojrZct1tnXsL5yrJYmUJuGTZn2LjEdFP93vGweJ2qWbjeEMzZXmGbByuMEF9FLue3xDVsgi",
  "key37": "4WwgqzAeaGraLvk81oopuoBn2PCkkwbxoiu9nHxCoBtmReECzwcEZUkGx4T7vrDfo9cth9KQjU8qNJtRJ6dibGaB",
  "key38": "2vGyn6L4AkQbhmybrdKNSzA4nMoUGJcswTnGekdwkbfScKEagaQd4GSh98msyNrKJnJRjSPHRGm12tdbjAqKjCRG",
  "key39": "3UV7R4uimuXeb5iacn6wWWsSg7cC9bYGB4avm93TVpz7MhSi7XspEtwWshnWJGSE2HWkxjMsjMY6e7Fx7s74KPH9"
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

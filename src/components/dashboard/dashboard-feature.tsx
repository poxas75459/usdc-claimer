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
    "4GCCAtbb5ZzmMZpcsdg6cuxbNzk5YVR33BSHFJrHC22ACtSCSW1BqX2jkFTcqrgbyDPex1GNsmmCku3WjW4tXUiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gMH6y9WB1ejRdmQz3zzNrv8amGuZ3p7NQfY3m69qSXmavWfTUWoDoE3FxQGGxT4BbztQk87QEn3rv1cKRBgJz2w",
  "key1": "cjMHDkdyRGz1irsm8tCX5guNW3h48VBT96JCgoqkw2iaof9RwkZLC4h7ENRYouGTbfWkJ8B4foBoRh1DY8ktYjN",
  "key2": "5wGgFFaVBBDGs34c8oxLckx3Be2x7mbWRphFPZcnKYC5985RpvWyKoLBCxnMdK2Vv5bNQy21Yn3z1LZJS1DQw3ys",
  "key3": "2iMrXnsuFGg73rSFXv7mhjyF1n4dw7HYx5t4oDNx3DpPpdSUAnwYd8MbyxzY8KZPk9Nu8dVx2QRdF5JSR2UUUXzi",
  "key4": "4yPwqGfFsGFTkbiL5zn8vppYNha4yrqYmr7AhCVqLZN1wwHjv2uPw8N6CR8G2bvZck8NuZMDabzevkbVd1SgMmwD",
  "key5": "3fVWU9PHkfHmnCzm8EMyjf9LQszwMrfH6ufmnNM3x27xYAbGzQES5dziS9wJZm5PXKqEmei9w2Q7oFYqk1fkFHbd",
  "key6": "5Le4xigLqQg7dewyU3iRxoLAjpMemkjB28PsgeY92DLkWpxeSUC8VQYz5ELfkNhpLKTSuKN213YxCVLZZP2XjnWH",
  "key7": "2eJb7UbWJicNffT1mojvqpG9dcNaedBeYpYXMsg4yJWuSYTqeB5Eix3oSSMrMwRv9F9v5YmdbShAtEqoXX1qsiRb",
  "key8": "22WjCygvf7oBNGFnAvzgudp53wrQDi8B4j3ynXgvJpPZqc1KJ3K7nCbGfV5G5i3mRCBaBrBcYHCvbfaZmnD6NqFA",
  "key9": "64zak2DSwzkDJTtaFssVfs3sMMnH417wSb7W5oLNU6oYjDTGhJ7QPiCVrNi8pZWY46kySuMa3A5eyniQk4Eur9xf",
  "key10": "4LZF5gBKhTTzkdqJxdGc7De1oynnATmq5fUC7aRzEVwhawXtVAHqRereXSJB7Siinzvvb5esasGzMSpXNzjqXGme",
  "key11": "2QRnuxDtYHSzf4vKsKRX3ZkNNskgSHQ6363kt3XgQoR4gg2cdLosLkkE2fATeCRrKCh9WpHk75FQQAhE1vjx1yeF",
  "key12": "xumKmrx3oZwLBtvPEJTTrne7uZUickh8Tkt8w1pxA7kxsKaT2fpnsZ3e1vLzJUDVYuxiwoSDAFrNjE4cT79FCBx",
  "key13": "mDUUDNYNE6eDJ9aatCJcSKm2KmwKJU8qE38EuK1NbSJXy9SiaxdP8fRBAgJ36o6hZxpXemRk3KgegMY7ZUofZyJ",
  "key14": "4X2fw9iSD69nW48ZB1C1i1GLBN5Y9Gt8kXyyHdgZk8Fe9Tq48hyRH6addra7ARWD2SvAhrgJMp5DhP5SQjeFuu3U",
  "key15": "2gxpVeKCC1hv6RgHwjdCH2B1D9GTC3wj4Cs2JTvbYuqVEjHjymcZ7jzUT6e4z5GcgMLz8Frbg164GecG7ddcmy1g",
  "key16": "53dEe8Qn6GfyCryxdAL4dTZBLx8fP6EhyZHe7mdc7nD5qGrnpmDvbgYHknUVbGp2yBUefv5cWmgF2Wcr87b7gLDZ",
  "key17": "4pkjHpzKp9LJfauJwPjkeCFdsw8nVfGg828g5rZV8eErX8CCYAqwVs4K7PXBs2etCwQK6MCrv8wvNVd12C5bz39W",
  "key18": "5wU88PG9ab7p93oi2bfmQAmZkUmHynYz1h9UtG44DMZ19RytSXAxH26G2F3Qo8wmwELRhi2rXdyZJYFsuR3J73T7",
  "key19": "5XJK7jpKAZXS9NiJLtWwNxZmbiwTtTWBWyUmfoVjHjoGLMpRRGCExevZmA3TNQXN9Ldw6nATcsxaRyMZeNCpQX6m",
  "key20": "31kLLqBsKPTweXewE2fhkn7VXX5J1TN5KkcSUfX2q6KYgsXxwoTQxnkPJXeMGzQURoknuQU16vcKHEFd91nwdtpk",
  "key21": "4qrLCavxrpsccQK4e2PdJHBcSPjcBRXW6kXJj2geJx9fZ7FS1FByokTznJdUJ9BsT2PRdYKgW2NBLH6x4x2vXQvw",
  "key22": "wxMnaEuxqf8DmxXmEdQbsWtRfHae55yq5qivRPMAerhnNHCzHjH6rmqQwKc26TZTte3EdmaAebmmC5JeQrHjRup",
  "key23": "ov5cjmNUZPMjqA2dKBTJdVXAudSqX8EewnhzSL63yywxPnU8UrsUvQ6aHha7YMXvUJ61SwpWcf6dFU8CpxUHWTb",
  "key24": "3yw1cARtvsP5WvDJqGSnmHL2EsQmGM6JF46aMViJri96qGmvecdCjeSbUFEYuDBMwofa3tfogbXXf6w8gzYwiqUu",
  "key25": "2KYS27xWr2ipZfoHPkDc6zDpVFek9wvTv6spGDVfy1jenZT2aYqvzNr5unfyo1iCS5xMSm3tsR7mQgAb1QyQGkz3",
  "key26": "39E11L7rXBHdAEjRJzRJ1ioyF563XYtsGCbxr9GN2yfxDa5vpkmSvD6QXynHRACwyTMvCHrUamTAga8cDdHDhNYF",
  "key27": "65DMhWm46hqA71bxnFcijpxr8BZW3TfJSXNRu7h7UhYKi7zh9S8JUWBq8eqGocn2nV4HuRTQBDyfLkVvwMzHXBP3",
  "key28": "3bDZ2fSsCMX3goaGNToVUpkLvkZNTEujukrcCW59Mt9tk5TcnouEmDfGweVjkyzVQtzNfxtWwQUxawV5Fz5QSLZD",
  "key29": "28pBeG1iSPiERCB3uVu6KVUjr4zCrXnEBjwPXx3Y7EDVeEY9pjoa56KWtoyV6p3N11TsiNSw2Ycnt4p8mdVrwNcV",
  "key30": "3QAxM7WiWBpgyfWiNf7Kc18dLT8DfS64Jzt96AEufcYHpFbduD9DVYcgjkawNJ8jpocnmrAJw7oyYdmQbPRYowy5",
  "key31": "3SwB6NnsXdRfFBRvYpzsE3cqcERMo9okEj9Bj7Z57afVKFqYKmFEo2rMopFCmhBaY5CNy1YpfYSsC5jwtVGBtUR9",
  "key32": "3BN3QX1d2J324xx2hhBLioN5Z3YeTpv7E95dUydrVDif7d7itJazKSAw3AwKFYNp3DhnGCKDVVJhyrB3HSyYh6oi",
  "key33": "5ZfEcNkWjaTEaDBJ5unb7onYERKxehdFnmJE5mwY1bhArzSLAVELCdDwKueKS28pYEnRccf77aWqwq1v5SYcEYTp",
  "key34": "5GR2nUKjPCDJndzHqjUiuqCwNR3gE2thLUimuTmxyTKQTtNdR1oiQKsbksfeRZyC1Dga8hybyqxEYrVQsyDDSNMB",
  "key35": "5mx1BXkuGs3cj4755NxAChfYoTQ5WE4StWpGazPg1Xub6veZRASR1iRhgWeqttE7vrFPA1pmUG9pzWeZ3rWHzuMb",
  "key36": "Qm5mgRKxNRiJi9yo4vAfKVsJrSeG9RDCN7wJyjLGgws8GbdEswSmag116sgeeVoc7itg2T4zNVTcmnnuRyGVGeQ",
  "key37": "4FKqQixmuL6Hjtm2pmoCnsE1i6tcT7Jb5HKi9kNfYCXpRSdRBNz9vhq21CWwBzBMdnZGvb6ADr9JbhqGCZpUJPpZ",
  "key38": "5CLLbNT5axRpwEGMFgp7SyktQx7D6cZVhm7o33TToM1VDTHvXHwzJQ3krPQ9hFG239GTfVwGUNveA1MhAEiWaQsR",
  "key39": "4UHpXYd35fWfMr9xmmBE7XggM6Bh2rPg7TssBGiR8p9g2YhurRaDAiqrWCroCTvb8UgrNPyWbyqrKP3drhVGt1QU",
  "key40": "2Z6PXxjFsYFACJUttBS4oSxiyyXWM2rQrHvZRJTk719fN6HLmRa6bMSdTgwfXcdSxfz7WXyB7pJFCsNvvfvF7UzZ",
  "key41": "2XrjrqmJoNNNcP13DEpKCKk4KCQWZ14n9ZFsLGkCd74q3zX5sopAn3comWMb8YTHrp8C2ENy3n6CiPJ719RtyjRZ",
  "key42": "Jffd2n472pMAwHNz83FxXsghYKzbmpeEZJKWnaWVincsAQTVweCPS11hH4YP5AoznZHyzSK2aBqxqBeZhzVBkv3",
  "key43": "37miW9WQpLQKNGGBBPZf7vqRVefBKRSzAW26qK92rWp4wLp73XyFnKDn1kHzASJkryAxDogBSh4SDaGEuXD2sqU8"
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

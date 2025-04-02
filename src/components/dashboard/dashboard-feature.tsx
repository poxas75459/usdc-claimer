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
    "5iwU32M5EcED8Nk7BwveKJ9w2yHdifVdAV5Jd5aEBCTbQ2vhdPsyKxygihiuEDod9mQN7uKbWZka9pucTCVY2sAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HdQHfQm49GboTzGMUzSeRJdicNwnw7ib9gQGuYQmpGYFmuPEDwUU5M4UiQ1zy35e59WZ5FY46Ypy4LoxzUjUnvd",
  "key1": "21ENsRFvFJvTZ9ZzXXGP6RUB4adkcVXWKoha7cUkJvGpJaNexinWw4uhkabZTTfiw46rgbiLdAvdxxPysVZC1PES",
  "key2": "2yYvpDBTyRskYmn1Y7wFGdTv5pnB9fytEj993FG2PhnLnM8SLCU9SRS9SqwmsedYT7Kt8anqefphnecuHrWygVtg",
  "key3": "39P4zfeWEV7xNbBeAghS2AGeq9AFjFC5iDMLxjQwsEWPZL33Z4ZTCRypeF4g1bery15oR2ab8DGdEdLFBtxiEHPn",
  "key4": "17qwrjRY8643joC8wK8ZP3Fhvt5gb85xGJXBWabPwJwc5LQJ4h8BLt8WPWZWwXJ1EwQ9Fskf46xBNEMGW8vVbHQ",
  "key5": "7PSVWi3Qmjv8ZZpgzHb7kmk55HSnN1jB44cAzbcpZZsm3tF6J6aZFGwZfB9A2hvxuu21Vfm989nqKo6KtdTTXSN",
  "key6": "4k7MQNYXgcnvtGfjKBG29TxMwbqUdVRhpFU9T1J1jxJ5MwQZb1RcR2y7cbt3vjzxRqn7asmc6U28MJbeo9gpW6di",
  "key7": "4EG8hgi2yaUaod6krQGqqiv8FrCvCzPYd1SW34L8WkQ3YhKW76NJoDa3KJZULaosAbHoDrRYkW6FzPyeJFkfkCWn",
  "key8": "3PjqaAhVizhHzoHX7LgC5zQerV4GvMudifGAK4PsqiXtQ2cJaY4GVhq7fBesyfw48y9xKcsFd8M4BZxy9dLoXaCo",
  "key9": "qHBf4Pw3qC9GvvassHcLU4zMTBnCbC13CX3RvRiW7JVigq3e3g4SZwCZG8L9wqNrfRj99BfsS8NX5GARjyS94a8",
  "key10": "2aSp9FPnnQaXDC7CBLp6QWfHwxUo9idc4ASztWttg9MKtKsHoqC32dTdNj6io4DLqtGvMPyQUZdJaDaWbGcLaAot",
  "key11": "44EjukHbbqxxauTXzr6Nt8BgX7PbLKgT5bd5ktTqpb5JL1QeiWLE8LmuiZLJwbZ2xrUsHRVUUdgaruoQGCdjVwAJ",
  "key12": "5ZJAJnuTLDH3cQUz3YVu3QMtrhQfqfYsGYMi1t4rEGMfNdk8HY6seit46CgGbSCH2EQs9hXsDmLDMvEu7aAaqawc",
  "key13": "3WmVR3x42J1wYMEqSihEqjAcPphcaVh83oK1vKPbvPehnvdNYJkaCsEEPPvfUwxFf73cvzAJ2oiXweiPTdV7hWdi",
  "key14": "2D2VNxvj3y65f99vageta3aCoLJsGXAfPvQ4Jgi3974Z8cgWmxURhd3KgRZ6Np5B2ubarCxWgdDvoUm9gh1B4UuM",
  "key15": "3NDbpoTkunYnTZ3DqGoXDSfBJvFyxpKVhAjwbU4YfvnZkbF6B9LnJx5fHHYrxABc5ZwQe7dnCJehqJT4zpnwjABA",
  "key16": "KZ3FN9QWQpvvCJuFrqddqyb17Va3DrUiUgqaem4NJS8PWFVK3LTNHd5nqjzpjrtTPJYbeS3QoyjmMmrqAgbU28L",
  "key17": "5ovfDf2pQrEmhh7JP5a5roSC5xRS1m8jP1QF9M5LmGfC3uVsXi2BEzTZqSFB5BoQXUYqiHAV6amPF1TrHMeSkg7U",
  "key18": "2Nn29zrfvFPCUwP3GGozgGVuEwyqx8Z69buoptL4aSUWwUgtx3RDsss4j5p1o2X1cM1xvSYt9PrhFcdYMorLb96",
  "key19": "5QCjN3UeMUbaBvWpceRGG3KTMuM6Q3uRq4R94DnijMmv2GKCu9q7iuRvmqAmAdudr4SZJRee67ahnRj5C2xxayvq",
  "key20": "2m2UPSYz331zMpFQcHdHnwtkr36d3eFCo4B14m7iBDhhfnWkY7HyKftGDo2YeM6RWzzg6Ghf1qTeVAHiMwrwKkiA",
  "key21": "54jUFFyfmqYbhu67oAnXYQumWUvucgjpWK6wbqgsPNE7B85t7ebUvKQHGUhtLYdZ58vxuHG4yaczGb4jcJ1GgZD5",
  "key22": "NVB97YGstg5kTdtREns8cCf8ZTFmFxZXzv68ERQuYLr6uW5ZHX7bHgpHGksNLzb1efUMZQaKVtB3rk6UREQMffa",
  "key23": "4ZLU7gXC2Pgwtbak7qVvUsjiWGyKof9Tz7Yv6hYH15JGUE1XjSWVEKCi8bBzQUZCbAZrmFujNWCu5UBVNT1qkmWX",
  "key24": "B3gvrqtVksLTVtqNM42Hx3mUGstyvAuzyouoyHqvx4HTdB8u2zRzmcpbNT7xnVwPpnMWGDwoR87QfTbJJyDsigV",
  "key25": "3UetfuqE2fsWDHaNvEsWikv1zzoN2urmSoAdVRASZREDKZ64D8fwbvHHyRmfhDykSPn8QoVxQWuTxJe4eM7MBi4T",
  "key26": "5VHn3n4fXVBS47NBwxpbGEXLcJkUVAeDDq2VXHGYEasub1zAx8kH3vg9pBi8qs5FdKSAGSB7cGKCZDyhgF1afSFv",
  "key27": "25T61hg9PPFPm9pEUD4Yo8TZUrREn6Y7TNJ5UxWrEb5xPphHAAfFo6TJoCXCeiYyfGKdKsAzQV9swYHzwrU4cDrG",
  "key28": "52zEhN6QuxPewPwtJCycmYHxDJBYQ9Wi6N2ShvnsZGg5NBLXzNFGCQ1xgQbehZXT19aBfm7NgAh6CRCFSqTJ2bsK",
  "key29": "58ZMg4D15acboKva15aLFUSfxdnmV7HrFXpNL958Xskeg8vsVAEgBiG6swJRR5NmTV8VDuatybVMjrnfR1L2jmB7",
  "key30": "nAQgt7UbLDphGYteFwcMSjZfe4jm9DgQyfthAYmytcDBjJreVtXpYPdQLe43xT1bL4cwEKEa2GKTYZLFPT3uZcQ",
  "key31": "EfQdDeTuG8onYkZFT2hDiDMUhw93sho7USZPgv7Vsv6MUoMMRE6ugFcdCdUis8z7QiJdSVr8tzvcKjwfmp96ro3",
  "key32": "3NXxfK91ysaNEMJtVAkyNu4q2fF4oPDEZnNvRsQS9m6DDHCW167nWsSc57Ks2HNdoVacReX7tRLwgxdyCypnNgKc",
  "key33": "5v155YtGnRtBnDtu5C5tg8EGRUm6eSoHkis3UvLfUc4nYTWZVp1qqwopQPKJ7Aq45HVnsykn4xm89qfo8NJkAVJh",
  "key34": "5m9UhFPiJcxGSQKZC7NHTehiq8zANmQKNXq3y7gmicnATiRtkcJjhadtoE2Cop5syZJZyFbDjAZZVrx2uSuAqNMt",
  "key35": "2wx54B2dxEy7pgCKprHA4oXXemd2eVbDvgtiDKSg7gzfA4LBbXeT8Xz5GQxrrdtaV4txZoABDiFgWCNfEzrTKyRi",
  "key36": "21hjJQQNiL1zv5sFWScYm6G5pcPbEKfjDN2ZkK3Fk3PFpTSVyuHdfPkpc3meiq6bxoDxMQRNAAS1T5vE6Tzv5wV9",
  "key37": "YuyPMHEdL8PDRn15ge5w2JhLKzvstc3CCrSkXBcnLe8Rvj2ZKUV8peVpHuUtYzNRsrDYriJtS1jsRccnSFb9QEh",
  "key38": "2toroTiM6xA7FbL3fm6Dy2LWkNySApjtW3w2Wq6kTntzEUyEMGFoq6hJAVfM1ffy4WcqeFyTq2L8q5u7oiZjSpy5",
  "key39": "5egdKKRMTafhAHNeu3sfa1uTFzH2Cv8AX4pXeRWfY6GkKf8kYdvrMC9HrJg3y27Weo8Ld5614H1QEkaxRddsj36f"
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

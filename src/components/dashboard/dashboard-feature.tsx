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
    "25ewovXjSwxBBDx5YiVvfKcHL3YfGqxBbxsmAisnfCq3dURWYEjW9hX8pgkHhVi4QqEzHXSC24PTNmidZVMLEKda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZVqCvEDrNKdVteuLwnLG1gEn7eShjVJ9y3X6K17k4FkP1ag2nbKQwFS1FqwZh1RsWYSDHuRguAHYrbSUDNgzXKv",
  "key1": "3agNV71yvPHk4ZWBXSdJdtHEQ7q3zhxyynTMBfZyrtVPeuMEv5afRZe3GeiZFiSnXq18WT6dmt3Dpx8mKdPpEXrr",
  "key2": "cgSNYc1Rs9kYVWzrt7ucD7C65VDF6wypiDCrjNm7PZnemoquKzFzicbBqtBUDNuLpDnSgSPLELJqvPVzz6VHwaq",
  "key3": "321fgrmeJZokcoHQMgT5L7RmCXscZRKvkwsL1gVZ8zbUN9AtcCrDHsXfZjgT4E8WsbS7cgpnCgRzrLaMbxAyZGZf",
  "key4": "4xyJtqjJf4EfuNHxyn2jgww2YQ6CNWgS1ehZoJYzNaVDug8Db9sqY67BigFeUnPa8pqTYkhvkuvBRb6UrBmKNtWh",
  "key5": "v5MTcULsSghUtkZZPyFdK8isrJw3miax5eQaxdxPjj4zQkLZUM3XLpFk6Gjn4r4QkArz9jjL3gv9hLaKFLdtuJ7",
  "key6": "25TVfg8Qmbs4PYhGwtSPBDtGGG1MaEfuWte7HWjTNjUaFXZzTmadnFaCYdzzoMg3gVwVg2W5gZ9MLm8kUKmJTaB6",
  "key7": "5inK7gr7CE1XW9y4asbZa9pDuNZSzsBNm5VwsWeGUkQPD41RCfxeRsEScwtcnfEH8MmnEJsWMAFgF1HKbW3e8Uri",
  "key8": "54sEWVHVwyo7fV9xU87wiNhCgerYQ1kuJ6f7W6Mzj4zTwUNzM6eDF1J1v5jmFgsGfPDuZv1wabYHfLJahRnm9oXD",
  "key9": "55hdg5XgMsQUg3WgWerGjnrPDAwpq1PbQda8bVTAckDtDRhFaDy8xQnSuE9rBG7ZyN6FfyncozMqo9wCUiiMwo27",
  "key10": "3WciMKbVPKDSnLMKGLiN1XnWKkevUnwXgQGNjVrf5Uo3K9s2WmpQoA1XCtzVm75w8NVLdjew35KfZmtKsvW5Ewip",
  "key11": "4ZmmZAtU3cqoBiWofmBxi4DeRHSSKH4WquHg1RJ5WcPQzE5EtKqDuo2TZBNo5ZPJpYtyVge7sgCWGzwv4oqXKXQH",
  "key12": "3YYnGSirTLYJ96zurZceV3DjyRTN7Wod96yHaExSmFRd54X1j9BEXmpmHUNM4d8paMnNsv4CZB53Z3ZbpiB7RjER",
  "key13": "M2XpxBSXGEuEJvj2vBGzNz2ykU1V4z53XsKMcmKGDfCDzazmuRrasuCpwRiPupv7kub5A24xZ9A7RDQtzVds6Dq",
  "key14": "5JTF7SB2vTk6N9eizNf29yuUax5ZSaLq6AFv84WSdnSswaEqsxq6sWjYDUM22kTUYtVefkiJHVjrqSXWL9j91t4M",
  "key15": "3FeezHRPMYRShLajafuEE1o9Mf5P4AVyzjwJZy7wv8wtXDC96xNJgqaAdRBK6zWAMwrAUmbuV24U7vfqb6uAh91u",
  "key16": "36nK6e3eRunnJxMxx6EKsqEPGSDACRJ6Cp9uUQ1WFkP7P3No1nak3v5QX51k2fommD9wbUgwbgSJMwWrhH3dW2ia",
  "key17": "qGAAfnsoEZGtWfU9i5y651nw4VGDcx7P2X59LF2EybEVifm4zpeuZ4PT3AkW3aVihvsQ6wnoSeuYPh5e7dFikeJ",
  "key18": "4BjX6FFNcTDSbjPdS641BCxu5aqZHQa9PQnfLtRLPXDixBaHfCtC1x6ntEaGVX614sVgbXvpvBGQn2LdL8YroMEv",
  "key19": "5VyUK7RSTg5ws2VCgnw7NTvpXtPY6jqH2ECffKGXJ3CewYvYFfkEXQUTiEXmnWVB1b6sdBZJDjir1oXDsJ8YLDqA",
  "key20": "4mPN58ibNtNQcwiCkewxVNdWT24TQiQx5XgSckvdKpvMVYMsvUjLfdCNjJmUZRwD79F574soN6qq1ySoREmQvheE",
  "key21": "5YQofgR22dwtccE9wi6SyA6fE9oZZVHZprzYemxAbbu3FYdFGaczdUkT8Ma6YXnTAZFkZp4bs4o3yARNpsE7w9iU",
  "key22": "2Tz5GFYTKq6GAbLakD9BwxwLcVMYw3txvtqUESaemnEDcjTneqon7jDBrNbs3PSEwUHbB8qpYmieZ4enKN1t8eY9",
  "key23": "5xbSG7qmw4PurxLuMcGkcWH4dJghv9NpJG4F6UpT6MrGaPuumAySx5yiRy1X4H8mh5CRJWnBXGdYZz9fqeQy9yKF",
  "key24": "dJ2aS5KVY9shT7mZFBor1JTSQpnqTWcAY6E4zrBDr5mEpg7ZD7NtbttmjUjhSf2dCz6DL4g7Z1xmmK78N2AUx8u",
  "key25": "5UymGoZ66KX44CM3UBC4dheU8Y3aHYKzH48LteK5fDCs9CQRJmzNNNXdD2VxB54cTLJwK3Z1se6K5LTCa2Pk7L5a",
  "key26": "3zjBVHVGAv8hknHdKMjmN2ZjHR1YQPL5gnygu7v7pYfQ7hpJdLa7LihZzRpfvHaUzn2CZ9ihqWu5SPoSMxpRGpHr",
  "key27": "3dfQcY3far4bSvu5pyE62NMbFGqxiBpkMgSWm9YyBoohDtVDGFzLg1aVWUzsVwrf6u4jnyKB6XutA4MYTE8TWzJf",
  "key28": "5imifLvPwhE2FtWh2ggiyFRWFi4VNpqvSTcWGENbJdrbxbJrbXdtC4qMvDuAUzhvzGchX2jFxKExAMM2h6KFu1pc",
  "key29": "4wscjLDgbXfbYFyT2Y3U78AF7qCaMSmv82xmP7SvYveR4vo2GFPfLWF2etateQTRuftrQiLcDZtPtWkKwuVtFoUc"
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

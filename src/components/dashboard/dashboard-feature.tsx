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
    "2rvqjNBKkuDMUw1d5dCCSJ5KdEwTLJaFBcRdhUnkhigH1qYLqTVrSGSCeJuSYtXeorx4qxXJCEwwcM1siZwqSwZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqZnSaFaEXRgUHyvpSnMB9jb1UhszccRzFx7DP8J9oFrh9GmPiL3SchmqRuJ2zvPhbDCCMqJxf58G8vKWVpje7A",
  "key1": "2V9qb413LRihKaim4Y5fiAZmr6et6PSKQ1qSZUgRqDWBuyBYanQD2EhUvc4iZGnwRLJ8c287APZZ9gEfpEFux9Pk",
  "key2": "2EhccRWkZdMRTEnSShteZpVVg5qYFegszD9eKD91FUhRpFefUAQ6DaSXJEKQcZyP9iUdw4iQc3J18eB9zQ2sTTv7",
  "key3": "3p8Zn2ngDsf4LGNvwinJu1zpnC7fKAhZt87UzMJPXjGmqJzBfZx1Hszop7YpqnevYtCumkYXSUeraUwxcT49QZiz",
  "key4": "3gvQBEwM6CVeUGDXeLFJZZAthd2HEasSybkXtNVe1yrwTu5rfdZF1hfraNYYmuypCYfjL5wGrCiEBzznf91mcBhs",
  "key5": "58xRh7jjEXk9P6yDZBWsWccJQTmCQ6fUjVrZNjUD8GPJQT9FwXorCumdmV2ytgieMMZAaQK7GDRzniu7PWfxqMVi",
  "key6": "5givUSMUy5eYX92Z6p8ZdvJ5UjABTSr1ZwzHvf3AicQ9m62utncnf2hR9UykmeFEWYhP6tbmkcY54vs2Ygc3yAUR",
  "key7": "35BEbXw7gtEtBdScLqPpSUgNPsxYWaUF99BeFJc2nH7Gvn4HhhXqb6jkNDeKsu5W38S4qhyYWyGGL7n3jmPsyWKt",
  "key8": "2bzq2h4ALcuA6kC74s6vsf8qH1KfN5CmyxT2E6JNa1AjJDTADzhZm39ijzdjs4okLH8iicZPQRDPVVJEXZhJ5AKs",
  "key9": "47YAoRmweM8KehP7rmjQ2g2MGYerMYXqWfjRBmjKSyizjKcCfu6ZB7nPpPjw2z6DWFVwJghgYnqBVgvaYUSEJeKT",
  "key10": "4y6R7eHWSK5x55fX4A9ZdZWhAziSK89yxPkoiz73CBkRtRKzPH9PC4zaYmvGo9tKiqPav93vYZbDRaLyRezMbAQu",
  "key11": "MS2MtGg8Pa7bDT8xSyp8QVzsxNUvqnmTZBqCgfBPvjEUodbep85S7FtHu7f2UmqixgGR8XqAe47p8a8mg6DPzmN",
  "key12": "4rhgXpeyJACFQghsCdoMYJi6xh7Q8AnHSdwRc7kt33yX2Ach92bPDTFKPdZQRvNDQNcZXGuoAJP2qK7ZFVhyoGfF",
  "key13": "5zVx5UPWzX4a2wknVso81eag8R6H5AVT8kfMoE7jVmvDKJoEU85yXNsE5J63XU557YPhRMetjjy4q5UshZL38UNg",
  "key14": "5h4QeX6cvizwQLD7RpmSN7mdhYEFTC4HuNVTgGUnnVkNt46kSKAoQUxSq5LXctpSCDoGFJmzahYMnmEBaYyRKPfN",
  "key15": "cV8EHWfb5osEsxY9PWqAjLM12ZKetsPMqecnxngTCshEwdyQ74ikTTA4BgKeujsMexDNhZbEcTE1Cx9gzt74qKB",
  "key16": "zbAtLoMjoH9rBKNxxzPdDE1TL5QPE83XGCTtXGfSfNVQTFR9EeFBgAneLATmtRuM9FQwX6BaBoTEQHkpMqLiDBA",
  "key17": "47t5SbQkDTvVbMS1Zwgy3eYRiLRhjvuokXWWKzSeUYQeH1yBCJ1vRWW7VVBQLYngFrPVX2gE9KbWqHZP9RtZoXi3",
  "key18": "4HWHqESMLEgkqDCUuPhEeAmGFpeWxtxBMbxLwAaQbPRDZgfmDcpMz77nDhNnByRGBwFZMdjwdC2GY7TfZBYBMrWH",
  "key19": "4uGrwhMXgiM15iJvwPEWiMoXKFYSA77vUjqEMQiQ4MDbwUeySXdrH7cTGWxT32joVDrnMyziGNNVdEqddqynXqYK",
  "key20": "5TPjGP9jUPxzspoqSUQpK4fnGRJ8zwfpsiUjZdX7aSbknHzNUKhyuXbnYVA7WxP74ArqPVbeAGAwq9673MTrDQDE",
  "key21": "4opkRVSEPc3tJSZtsfCSNMpQAhY2CUDmkkSuccd51HHrQwMewNkZx93XZZzYtJyGSNNawTZF78paYSyAeGQgAfM",
  "key22": "5BrRuBWy1FTaFAxRB8fQALNWm3cGtBqakMKT6JYS2CUYY1hKwr1tGoeRQc4cbXgtEmJESRat5pHVtxct46gqZ7tY",
  "key23": "27sCQ4qd5WaRoZHDCqiM1m3pJvbMP6aA2BSm8dRKR1TqW68qa6MzCyTw27BiukFybW5eXtL5RLDrZQAiiDDXR6Um",
  "key24": "5nyLfz91EPa3hV2F8RejMz8rYVvzZ3HTMzcWDpZfXvSngYskdLyxSMsQETxH7cnFvCqmXjYVzaJ1GVaUirvyGDdb",
  "key25": "3id73cfgsiXAvEbt8onEMPmQqXRvMCAPNfeAnB5qmVr3edqY4hfDgq5LvymwcGDMwvMmY5QpLYauWMGmCTxKiGD5",
  "key26": "4J5eSE141W6HQrk17mwjF3XgkYKyXY9YBshSiupYxN918KWxz79fbXkvXBn3a25nthJXQ4RpwGDEp5gSUpnv7XgL"
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

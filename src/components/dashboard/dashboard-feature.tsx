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
    "2WLbCgYhq2rEKaFecppPt6MXxq4QW7vEHqFmHwBBJRWvGLHEZ8epNw4MqLafwzY7kaf8LhKqFrvJ8mD24A6yHEYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R3LxVwE8wRQuG1G4cMtAnj1WJZuL8UeYAK313ceBsMgRcokogzfoMMHqDVSHnEfbQZh5x6NFyAEMPGa5daDFBmj",
  "key1": "4RVUrvAJTiy1agtZBaLwGBV7586ZBTs8crKys7WgrbVyvtFnmAVE4pwMXHK6LGeDdb9RMnik2rGCvwnZzxmrGEe",
  "key2": "9jmoA3wpuEbLfe4NYit9UYUZa3ybdmh31QfxQQE74Pen9QDUM9DjYo1CpKovkv67inWNAZFu79MeZVsS34CYPyD",
  "key3": "5ntY2SWapFz45TYkwA2MTVH3ZUMtk3Sn2ZuMQwSQZcHLHxUcfSSfWH2HPwwNgyYR3wKKodPVbbCH8gX2d9V24gY",
  "key4": "4x8UfcAC8fYsEsCz7fCGusnUMhSFn1MkuZLMK1KvpuEsfQPzN3qa4rsLUPyT9ruvo8vMK97nhsPgp2hV7Jr482tB",
  "key5": "5uSitLyeDCWcL4iWDDHevzW3yxj3rB2NrPsySYwdeVU5Tu3SqNdPTK1dncLUKk7NbJghpFPDm4yPhLgz9MRhNL9p",
  "key6": "36WKMVugQfLZ2d3Kpa5ZCfDsGWPrprbUhSZjDzNJ5eK8C3moUsbRB1yJA21Pd15x3tMiZNjfpHTw5cHGxEKCYkYA",
  "key7": "r2eQU3MWV3RLU8EvKQ5wdR5ihBkXVjHPvtjB9xdxUVC6CSWV9ehnM6wTBeyBegVjtgM8wpiEzyv1cupWRZCXBV1",
  "key8": "36UJR94myVE4kHKvfqqCZLKZtqFYZBCyMma9pHQ8c6YazPoNiHQQuDZnbZMvvWqSNRbaUS11Gf7WVM3CRWj3ax83",
  "key9": "376b4xuix8eTtgsEvjN3paie3C3eJhrQrZjfXttFmMKGrqMnB6n4SzLyq9jqo6K9YGSjUca6SrrYuMWkF38teLWW",
  "key10": "2EzCxtN5b8SD6ZGgnVKY1eJFDbJMmSv3pdR3QpXDeb6k7UraeGij94RmW8ks7dcyq1auACRNhjMvN1TXcTc7ze8C",
  "key11": "3oZk6owZwT88uW3aPYgzzChgBUPaqPCmB3qY3VyeKD6b4KY5YnZMSgvGU2VAkGHKUgkkk2ynQdBE1mfB6ozXyAfA",
  "key12": "3hSP9NG1fA271yoqrMyxupssNz3tpx8UNUfnuvBkyenhWy3qHKHYbKFkUxyuNKrqUz1z8qdfKUSffBe4YWTRNajx",
  "key13": "Tv7ptvFgjTdiZusSCHYtcPnPZb9gxeL7AcsgAU7geU5f1Uh4C34XyHbTzxJQor34ofgHcsyGjxchu5gmN1PMwQf",
  "key14": "NJaHUaXiTJNBcMJTdp3atGKqfEkVbA7Pn39UMBaEpx5h1jiQoYKsmT8GpDW6Qbfr7jPkvaqdLUSQeJNQVJccvYf",
  "key15": "2xXHUS1kdF1ikDZXyeNCMXnzpn4VjT3tG5eSKjDUyHjom49544XQbxmchuUeNuiWAJoXwu22CQcGaafGJxjHwchd",
  "key16": "5uH4tMxt1yxNmh2SiezK1ptNLbF6Zb74WQvHNM1yhAM3J52ZqjrQm6dF8zcB8iGL1Ar8r951UQ1hiNYaFq3biJDF",
  "key17": "2dxsjjvVvbknzqpXKt2xo2pck4YPawjXgHjKNPJvx3mtcwhz9tLCVGAk7ivCmfw1ExcHsdYnUpNCeTQUDNQF1cpU",
  "key18": "3ZeUVWMUVMJn7jozmSNni5MxJGg43caqkobVSjkRXgjMEYeRcku1rVMdrRXPBY7TfckB4P9QVzdjDrCSRJw1NDY5",
  "key19": "28NXsThR5fXVdjYhocCq7wUZjsjt8H5TB6n7kNb1sVecrwuPJyKGpC8xzKKMgEwgUmpY1c1kQX34EABZMadeAMrU",
  "key20": "eumntepSHfHJmXGDqiXZAZRB2kyGBvb875mkc4BzrspfcX71nS1fGLV9AeXf2fbX7ke8SV5nwn7hdJ48Ae2YMEg",
  "key21": "4u4oP63oof3V23hNa3U55sP4U8xWJ22FLwrkEY4R3f4bwSRSQNfkAsGjAtJBjkhBAkj1vpy6KUB7HpX3z8FkuoDB",
  "key22": "9TnespvMTaJkiqEmPuMUWRKEF81Rkw4yJrzinj3e8j3nYAeXoXphg2Q85NMEi57jufXaTCwup1shoBm7hcY2Jwd",
  "key23": "VX2ru9bJq3vgqLc2Bq9GkzqzGYb53fdLr1oe9FMnvUDMERC1KH487A6WnBcm7Rjc1PbvVidEKjsHfsoidAYkUY4",
  "key24": "5oAtmXSyq93vmvsw9SSDCjv3GYWMLeeaZfj8AnHdvkzjroa5gyRZCURayXeAiUPQxjG7DvcLJciSnoNvzVq9Xydr",
  "key25": "54WZm1Yrwyp38wmZMzcRreXvEzH5DFsRTDqgUDhXQCKkZWQ5YW2G3EypphRfKMVxzXUzTiosiqHJyBt3eJh82aU8",
  "key26": "GNaotEGrhvN3wbdtpz7uzBsa2QMSnJKdK117jajfhVH42fgLsu8qJ98xTRuDMk42rqXSGpgw1pZEGDf9m1NEgeL",
  "key27": "2LxQDUTPPeJi73iR4QTD6GyVGubrgDc688qz8g2NpK9T7VWb7B9gX328c76AVuuwH9CLhFchP69WgJwJoAuUnBn7",
  "key28": "5Qij8VQMdhbrxiHvpCqNyWXxhhUL1Rkz4i9JkKARY5GS7mney5dzBrdsJbMqwthtVWhbsh7omi4J9acBr1BNv6sg",
  "key29": "2YMFWgi4DSUQziXUNY7t9fdiW6eVowFh9bFGy8RXQ1E2YE8dJA3joTf2uQ8nMyLpMMDeJx1ZwFocbuHbMqwFAciw",
  "key30": "45GUqqR7dWYJ1zSpaRVYgZ97xd9Bqke8UhUcVo6miJs4LiNPe8pm949JveuJGqsMmPp9EtoHfMBamP4FHxyQDQmw",
  "key31": "1gLfFZtV1fqjadHJPTnrsVRrojhYhHEYkRMhddxRGHh4jGobaMzksyCDjgRvdAHo3vtRaJYzsZJvxCk44yznzyH",
  "key32": "vdEhppYdAbKJLpgDQKmnKZeskGvxzMARteRXf54oQgnaSjQDHN1rebtjJd2PJ3ZfweYAHxf5WGpASEe1vjw2pW8",
  "key33": "3VMbmHWM4nWzQ2uUmG9KxFTP2F7hMfypZPenqfraFzzHRB7wRYd7MRR2z1P3ysdHhKM2Fo7sCY4Uhh81kig7gDTN",
  "key34": "4GY5U3YiEad5fK5PvsiHabH99Z8iugrZcHnH7BraVV6exMg7suM4GC3jMjGRhVWnad6Wjs3ySzKdqofKWtFEKkBE"
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

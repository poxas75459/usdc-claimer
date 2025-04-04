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
    "4PMnfxKskU5M65J7t5KMdVqXt1JH6toevqC8QhoJTnjch2szeKEmv82J9ucg2bFs2nuArbcSap8XGbxK2XMwudMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UDtorKbdtMWqFKbgVNBhjUxmN65oPfNhnb9YCiBQMmdfSonJuD5wfQTdnFUdNfuyRLeYJxRck7JMMXNwnM4aYRq",
  "key1": "4duRaJSzHjNENj1Gr3zdYpJZmjqpGwEgKaYvWkrCnCMXWZPVcAA1i61i6fZGA7um5W42tZPqU6Qrw2QKVYnxZkV6",
  "key2": "61av7NN3bM2LmYWk3WYgsTicMr5CKAMPmsqyB7zV5fditf1y4xw7R6HXHtkunMxb5h6YJBTj7d1ZyQPbycrETXka",
  "key3": "5P61GyXsaHBpMbxBc3iGsfGxwALC8cJDbh9D6rsrfJ3YRLf61fnin8hvY4hwvhAecFDo95yEDgXuQeBySHNcyvdx",
  "key4": "4asvc78uFDF1JqFdLfubDv1QTB1krQCpJbGpw2GLu44DCH1JqZymf7wJEyHL9n4ecN9gBAuKyNKSYJAW61FUhbmG",
  "key5": "24hPLihRxDGa8Ua5ZGTuPfwT4qd1Hf6NbvzfUXCCVxcEHrQioybT8dV7vKCcuLSrcLp4xC6q5KuJpad8fQUUacgn",
  "key6": "3jEmV3xYGTN9PptuEhW7aG98bvW5LTVjqAtAEC9znDR358FLmVR3imU6LE7dM2gBD5ybx1wFKAwQKWZErsBWJ4so",
  "key7": "3Bo1gYLXDVeHQwE1RzMU7iC7iEtFxsxbr5Zk2KNAwPdzkaiRE81SagVF6mC22CQckbGvqp2nViFAhdTwMC5vos8Q",
  "key8": "23s8oCTBDB29NrrUfcV1cdJVhpb2Eqhxeq37LtgQQkYVZkZqnoLReDVzpGkqvPWYAWrh8HATRpsRL4HFAfj227Aq",
  "key9": "fXNBgo7p2UvZ7K84upA6vt6TbpCegZ3PFZbhTE92q98aTpAxoeYcK9K2ai5mFZu2DPuF5FjJ2rRpmRRPTyNsiho",
  "key10": "5xjQNFWB5fjNid5T7CC2YiXcyrq2NBCUJQ9rDv1rL2qVSSxQwCogpZtDXjzsLKmMfcmduAUwtsoNL9oXqxX34rPq",
  "key11": "4wCphhkcbaETqGFp932EaV1cSbreTKJQoS4f8Yb6NNsLYiEmyXGepgxDKbqa8s48r9emQkhutG6mfPvt2R9njzNF",
  "key12": "2nyji7dJCM8Y7sYJ7ViN4bRUrhtjAZwKnfSKLs9ju8UrU4TpkzQCzxCPbmWjrxcdS6Fh1raasTqb17zURupVFERZ",
  "key13": "nqm8i9ww7Gawag7E9fZrTEspz7a3s6FoeT3rtgXBHQYPMicRXhVD7AodMhtwAGXCQNtK8oZoPpzqx5UG9UEuhDa",
  "key14": "2T5MQhTvqhoMHSG1QRU2MFkkBz78bgKnM6P4CzMh21tYbTqZJREHdjyLYYLgcaaaborBRSNujesk2pFDcBNM6v5Z",
  "key15": "554Kv2A8e3TLd9vJ9wsGyx3KPrZUvjEMUUcPb6zSbztKBM4vPeUSqNbi2hVq9ZjBri4U7V2pLQPDjwSHp2KPEGDf",
  "key16": "48GVFutDoAnbyZ17G5Zqu6z69sDK7uMSNCVCXc9yAYVX9RYZ5jts4ueh51XcGU1LQpnkqVbXNiCj5wMJdU1rEeiB",
  "key17": "5jfgrpGFdLWxCKC98qe3x6FTVVrhMEFGTqgReKoZZqHQm329BqkfZ6jdhinaXsgCEKPs4gV9PXfW6QRaUQMkPQeb",
  "key18": "4EnN58Q4wQZ81EC15ANzE2fYwuXNconW5aovxrzhndJrU1rMmup4Co6xUeWjZjjLcZdFXPVuJKmfohLunyVFFbpg",
  "key19": "4huWMtbhgzBkEHSvxC91JDzuyP6TMMqohgTfPjy4d32UtbKz5EUkoCccdPdhZn9dLzqWrrvk5boNNSzCwteCPd6P",
  "key20": "5TPRJKHnvU6zrtt2YiE3c7qyMTDC3bLQuBvZ6vpYXHdeN3iYc5rstmMxNfNuibYg5yCo3VC6rDVR8FbFKH2L8Q5U",
  "key21": "4XvqGByK6YF2WaBtv1hWhXpfoJQ3eHptsYrJv6RCuMCvFT1fTRSCB2TD9P8wcDC7kmuqgZht1ZajU6Kx9akHfypD",
  "key22": "X8cn6gT3MguX1RRsCyBn2WQgBY1xANu1XeF9x1ASBzhUUKyRYVhBtsGVvxMnr2fQMuCPmLaE67R5MwWdcZ3x4td",
  "key23": "64HJ5bvQiJdUAVRVSHRJ5T859afsVwCFQhpeMc8CteQZ7fvPKYkD6KkPAnd3Lu3ye63re3Y4c5waaFtyivzuerG9",
  "key24": "57o9CrNKZYUVa7bo4k4L26JUFLDiWcnHMnf6mejisRmFQYPRjtzteNNjUxnTqMa6KqMWjqTL12UKHF7Hi248znwS",
  "key25": "4xDSnUCKs6NDMqBh2tmdqzY1HFFiMQwfUr2LD7WZMgK2kUSLmhvpvKCqo8K954uuSD3QSnAqL43xiySpnKQHmcKj",
  "key26": "4eftNKN5N1CgJjGAG17aCLMUhrpm4dVHWmhM3Lx9YYJgqRk2xLau3vpPrp3UFmS6RXBuD8sX1RFqoicceu9UjoBi",
  "key27": "3D84RmCpgzDx8eMj2MJZjy2qXFcGcy4JYHHpyu9hjZzQwitqzFKEBDa6f7L2gFA1mGDLQroUnMV25bzVg6kt4CHc",
  "key28": "2LabG8K1rcE8F3EsCFFWdxp2UEgePEZTbT4wfRA2M4MeYfESPKC9nYLqdHKZLtB3WQzZWU7n7NGLFbgaS6EKDNDR",
  "key29": "22imuYKiVYLHiyL9HeRSXXEEdcmudkcfoekRG5iKhiPDkHo9vuZa3QFeQpb6MnpkpuqKVp8smPomuVzm8nycU26P"
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

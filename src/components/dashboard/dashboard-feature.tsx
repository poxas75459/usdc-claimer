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
    "2KLoNWxzqdWvxGYfLLPeozxKtww7isNWfNcwBLazyjPCZ9UhugrzCg8k2yJSmMGqDBSsxjFxy3xEzNXmS2GhF7Ch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AUUByAggjrxTHHDfRN96zohWU4xcM1ekQuYAnjVBUbjQBJtxS7ZLWgqamrQZuTjrsntTwh9JU72mKX5yG3gbUc1",
  "key1": "3BACt7tRJyMQyHSdnhXKJTkzg3d7Auyderodr7AU6VDxgmsMdCqoxFCLXfjbUDtv63kvX1T224NREdRUVaM74fFp",
  "key2": "4LTwPZGM9bSZMQFC6ywGExKLvLQ31om3uVaf9Z3Gjsgzd7wZEt2MUoSLUSz3bKNp1cvKxByQNd7n8EvoTJxpi5sS",
  "key3": "C3zXgLyxDVG1h1hPcTpPYNRLTUcuqivU1LmwJq49k8SjwayvsrFCYqZqnJoiCuDEgUWce6LCgbsFJUndhDwCwD8",
  "key4": "5sWrCnYCV4d6stzkpNyjoNfH7t6X1STbSNRvbB6uiQbdP8daoYhTAkiyy8jfo3cpeyihSLYKXJj7r6tegFLM69U7",
  "key5": "4To9j6Fn8tBT89TSZemobvF3XvuGpn2jFquoBhMrHEMuQqehVyguCdTwKjAcU8TknHprMArUG8NBgYQydxLpNUGa",
  "key6": "5AM63kV4MDYUfphCjg5ZMJX1YhKZ59A6cW5z3XZfJH7Utt4sPjbEDLM2c6oFL3jZr5u7AE8A7uRX2WWKwkjNfWY9",
  "key7": "5jvwCSVgaASaENUENfYDNaU1q5CiCtV6XkfzxDsUvkUpzuCv9oNkViCSkT8dTShPNCijti1XVUvUqpS2JnKCv6Ds",
  "key8": "4fCy19ftSvSGrsE9ea4L4wg5DgUxSKzAsxAS6eHaPfT9UfDBktV9PBjhpKXGfLqt82NavFQfbpgWSv782xn5PutE",
  "key9": "3jQFYbYtpGepXRs1JrZg9w9HTfu13oWtmwupJhSWDNtcHU54JZJMpAJWgAwiHiKnvFkBhTAhdMK5r9HfkPtjxDvk",
  "key10": "2795tWnnNtGgsEffqsBsAWGbzzWPdT1h6Yz92tnhs3vrsVe71YuTV9eqD64Gj3TNNUF337c1Wets5ea57C1rZLJL",
  "key11": "3Xq31xBEb7NT8EZpuBBXQNbXz3FkvZiktBYZNn8ysMLY89fsYCszSzaL1Qpy4nikSqLnUAVeSS2anbTgum91brDx",
  "key12": "2fWe6bFeMCxv8eLUnkWJWWW3AoSh4fBK2PYfARxLGk7SZvBNcxEpDEr3huyjAae3up7H3f7SukntWa1dHoYSwGry",
  "key13": "qrKH96qbLtPdQTfGE7ed44sMGSD1ms17RneUcAokXHLdZUf6YRt2hHGSVV7abcn4Xsj3QFsn41fP57nVGP8FKSQ",
  "key14": "XJcm9jEXX9rSC6USpmiYkqd7z2jPHAf9eCGLbmcoFVJFbS2Z3BQiBzoXExcszWk8GyFCovEUmTVBmeWA5Huuyab",
  "key15": "3juL55Jcii1MTj5iYm8na6sosLsCuVAmR8mV8UyzPaNZarw9GFA8Resv9eiKqzwLoZeD9Zh3cBHok8hkn3VmLaM9",
  "key16": "5wQpGd7bvd4a16FyuHThLGaA6nCbygQTN3Lsuk7888xV6oJrEXK1njgEG9HU3GxX3i98WZ2iemnHjixZYbYoRs8B",
  "key17": "62KVhPg3aHXSxLEzDiceLSNWDmMi1iicbB2TVy7yfnp3LH8fwVi24G3KKWrf2LGxssWRkqF9hDpAM7LJ9P7BCYpm",
  "key18": "4Kxaejt2beEnUqgNgbPMQZTVWd92XgqG8VVFkbrpxJqMkfDzwxMjhDta4cWfguKyBe7u2PpL4BpmiW5e4XeBwPeq",
  "key19": "649xVGxVttQE3MJGfkLsWqUfZqLuCZ98y221RYh7QEFbhC1UxPtz2wsf1HyLW7yPuxh6VMshvqFQZczQ58vUggQ7",
  "key20": "4ByjQBgDrugcC6PccozYH8eVC96YdQDbzib9KcFSHqzkZvMnfoMCqGMbHPVERLm3mDsUFfCNUW5JPrkEDkfzYXey",
  "key21": "2fb3RRAii53e3a93SfWfaAA4kqmrN989bUZe3t8EcLUQ4b1v11HoPmpB5wrRcV9ZvzHjkabPzMRozVrzHJz1pB3m",
  "key22": "2JaBeCEcztzFd69aMBpNd1BWK3djAmCvVokgmdk5Rd2y2qHJLdz5UCQjGGwb44Q5CcihBSamTAYwX4n4JuqBAdWw",
  "key23": "22rhyqvpnh37gFbX789iCt2ErmsEaR3D53qnqWpnHG9Y7vY96yQzEcSHxTeNjABL37XJKwHuNqkHdbUwfUnAPNUS",
  "key24": "5s5T4dUmRxo3nDXoUdMMSF2Df1Du8Jq4x75FsYoi8sTRpWRQB9dzx5bm7LEAHPV8M8A8Vcxt4vcPiPxnKGVz22RG",
  "key25": "CWpEp3DS5b4J78Cq4keZmuK5PL7EhnNWW35xKMM1EzK6bWNLt7VTEGxAWWTc7dwgu1Tey4BwnkzrARGJzmUZpLG",
  "key26": "2d2TStyGRP5BJyEz4LiAfwvxrMiPAg2gVWrpAcLPByVq5PcUiwPoWzN3NKFCQ9s9jT4h2j96fVHxk5uhxoQSLPnD",
  "key27": "3LqiRZgepLSfMoyCpSWMRQAYKg6Lu1x56euAMxoRyTCiiE5kMEAZHWo36rzganFBVT3FzfMgXTY3fyUE6HnE89BL",
  "key28": "3NDUt8MSdLpXwWqsFUedcLA1V5PouVLEztiY6v5apvHv9tM4XZwQfMm5VDgxM52v2okpq8G4kPR4UNuTXbhdpTih",
  "key29": "2Q5Ytr4WBnSms723bbuoZi1hdSiwHHX7DzkV12Bapu4ydLndnh8kuZVm13qL2VkELUBZHFLj3ddVBh4jHBNEpnHf",
  "key30": "62h3uXsFNp3iAu1AdrtswBqDgDv9RC2JK28kZij2dqnmq8Jm8iaaMVxT8XZG2gfcvmP6k5r5d8kpf8tkEB4gpxwN",
  "key31": "2ZJu8EJU9grVKCN2JJGvu72FfokTWgsfyYNGUscsrc2tzk5HHEVfSqqFdXrvWkkurR9wm8wPZeZRMNfN7jP6zmi4",
  "key32": "qKsZoVYKuG7BxfS1ACYwveCuGXarPB5YshbDPBTwnkfbq9xpJZAMGZAMzvWHVADmo37WLp2RpuNr9DGdNZTFDZC"
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

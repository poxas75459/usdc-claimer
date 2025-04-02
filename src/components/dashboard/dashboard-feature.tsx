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
    "5DAg84noLtmoxgmwAbCdFJSDhu4fP1pXdHPjv5EZKGgrgqgRupza2igB4UeNEiyA1LiUAtGVR2wnzevFEgaQgJHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GKGT6PcP2FvTQw7LE2YQ1KJqCmVwmh26X7dLNgKxqoj4jCPTnLudRCK1GhswrqYtxqnuDmYebPXq9gCt9ub7ckM",
  "key1": "N28Atpks27nS4bqbq86ELEzSmaiN53Ghv4fM2Qh2LtmJmoBpqJRNeVwWfwxZZreY4w8NQq1h3KV68op492C6Dug",
  "key2": "53NjSVh9tfUz2CFNjh4cNekj3EYiAKM7VepQ7mHeP8p8Mbk1oSrvGjVBWN1hx1vtEYdbZuQdju53hEEW9kSyRuwW",
  "key3": "xgwpidEr6zZrUwR4Q3B9MENGJMUoaSZyWQWysC6eo5Jr3DNbQQAgRKKRjE96v8AndPqKY7TPBEb3LNeW9UxUJ6r",
  "key4": "48JXshnTvdkUZKowfwQG8iqmqq3cQQig6MMryHs6P5Sy32JcP8DoSj14yZtAsAgKeRbeVMwemMP6gYy4frQ1p93X",
  "key5": "31rju1v5kGB5wqMedrcFkXvtB1dzmdXzZKX8DyAZUrtgKifhkD3RUxstJinqsN9sHGQjUCbG69daxiF6xMv86aRK",
  "key6": "33SdYCZ6Hcv9eoZutxYUqPiZEuvAnTe3qSV7Mcz27veUc9qfRYy6FLuLcgFvmADD6zn1uc8Skqmj9imZhsAHtUm4",
  "key7": "4jkKZxrUeDRxscwV3L8Vjq5f91koxpZUAmaG7EG4ctRHL5RyLKVHrXBJ7y8YUScmdaBjn37xEwWt3mKc3S1xqGz6",
  "key8": "4UWFiiShyhYGnrbtrEYnC65jS6YMPHcQXEpfW67oTSgqDKAXaf4RvnVHCvKaV6i38DZNg456MjxF8oYyaKqpJBwS",
  "key9": "2YS125bKgqDhckGDw3Tu7daeJvbtaqVLASG17Y6zPVBJ7U6nZavmRpsX5w9xq7viyUTA93D3KhiBgxUx2P9s8Y1B",
  "key10": "2GeExTUyfjwqfGXhqXcYiukPRTktp1Ws7pmYwWT6Vr2dCqyDW6tYwDJyPyDpJNtNmmK1sgEX7qwUtr7uJpVpoisv",
  "key11": "gmhKq3kQ7agyviqPgdTq6AdwP1FCDNgBcJSgLTu1JLoBF6Zv9QgKPz6cSLCeeEQAKfe8D3zwZCV9NbH9QPFhStp",
  "key12": "5N69nRfk2GMJzSLu9qbakVjRLygADVzbymcrEXSb9hidGFcF42gMinrVJswUr63YXwLuCDDuVoHmrPbXV4Mt79hq",
  "key13": "4i8JcGPyt2eFwXhBLnGjtKwaU9oe1VNnxefo9BArLdSFNNXsi1pGM7tyxaGi9uDm47rnbLssKHzfLvrxi9ettQAj",
  "key14": "2Xd3C4UHnxZrF8ZRG9KC71bbmVDwzHd1kdAAPGQTT8DFhTastGoxLuM1Ahio2bXgFVq3WWJGWiaVnEnGBVpQFbCN",
  "key15": "5Cz6k35LGdGAZG6y9JmdvJF4QGXUsPUZYZ5QqEiSJ91HxvKmkeB9tcLyoifGauKHaSesVgCV6aeX74CR8Bsy49EQ",
  "key16": "5BGyS9GcnjBfFDZyQ3BDQCwFn89vuU6gHvknvQcMcLUzppf4x5Vi6y3ykbDgyz3fpMuusWN7EB5Ldhu9zLrcQR2j",
  "key17": "3VmCbDtdbgf5AhkrdVM6XNv2qCwkYphXPHSCXbeJtdcBdUK4ePnZxYxTGXja37bpHUMgZ5qFSPKrSmqQynhQj96C",
  "key18": "4D9vgNtzhp2adXKoK7LpP66HPPDCEss3Hajdwma9MAgX8Cmq5pYYEw8LmsdhJHE6o6hbC3ZxLkUYeiWL2EpodsSr",
  "key19": "577Z8WzpRUZV1xdHXbyGURXUnJXJxotYN7KG1ur1V1dmCYvM3XXMAUygrDpG5uGEi29jzSGuMjNy3fU7WFYuQ2bE",
  "key20": "5stjZJKGPb14VjQG1VzPC6bcdz94V5FjxUcphPF1LS6b81Cc1SPqjrRndjaoPiBg7e8KJgkNtZbirXwCSdkUs6Mx",
  "key21": "23fNybpsZLKuG59GauyWt3oPbxCMer8LZo6jj8SnJ69vaCtu3Z4zShqtqjRwo4UexbzKR9vQTDfTKaCMEnj6YpRJ",
  "key22": "5KDZXzNPbee21si4WakBSU5UUYi8p8nhm5uwQXD9ecqwqX8Sm29QWdw5UZZBWkSmWi8P9iWUESSe3ahnv3F7pbb6",
  "key23": "4g8zKp91pf4Poc48xmP3SKyNJwDsbFquKRfKfkTSqHLj2upoozJJjPymFM8Em4TitHqz5c16TxG5xsjr5Bdiz5kh",
  "key24": "5fxdRHbJftDx5DtzbaWVmKJ2G1155SQ6Y2uExFDWf7ftSdKjGMThsAAtqfjpb32rvoc5upESXTB5FgkgL9B4PstV",
  "key25": "3kMJ8ACeYn5gSLDzRPomRKf7SJeEJhX2kpXarK7uBZ7Ryq9M7rnisK8gdrdTmVyRpxuQ2JWdx41p4WRULMoCu159",
  "key26": "4rciqMgLFVYGL2bqb6hKahzhacum9J9tE43zwNZGmvrhoQ2WoVB2txCuGBAjRwov27VY3wEvobnUdXbot2CMKKGu"
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

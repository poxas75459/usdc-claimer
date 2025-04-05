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
    "3TXrBgRpSjq3dirG438FLucZ4Vm7QH52J4TrZNfZfxZrGXPY8f5wZnpDbVNL4UrHEw2foZGCFhZmKCxKyNTj5FRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MehVUiMoEovgBfNNpdQcqv2aPHz5wGoGvvWFa8nCr9Bg8MjK4ob7V1DBa1uywyTNdnFKHiCeH3PfbYr7gcSkxcn",
  "key1": "5wCi7kF5pb23qPnKr2sTMsNfEkftABn2ASLnMg6aFWhURsmdLFzpMc9YSLLWjsq1J6gCngtKjNJouuTpYtS6Rmcd",
  "key2": "3hBG7vycnGEeHWqWemq3cysvrksu7D9XfdX4JkzLrw2f4eF8YmdpW7aA6PoXgmDWV82Uk8ZBfc9PnVHLWBCzNLDM",
  "key3": "JdJEF1bEqAFXcJMkocDK3jGFFm9Qx56hQ1si3VriF6VKHdqc7Xj2mf8BJbVU2NVHATnj8PYbc8itowtg8wQ47W5",
  "key4": "oKcVWN1VTBiffYnnR8Z2QtKytBRL3vYxEx9QHxJR3XEKPrmv8ArewSq6ySptLyvGb6DiLbhCouRoYzohHHwAqgu",
  "key5": "2JP34c5oWHaKCDB6ukvecnquwMxUd5CqgdraDJQbY3GG5AMVMSMf2s8imQKdGonSdNywUARRpaWAQBcAkxHYAak2",
  "key6": "2dhGKtGzR7djKVhciJFtxKUamzFKTB44nbN4xzHiHS91rcfqmB8Uk3G6baZMmVrAptwjVjejCw3cgyfgw4Ps1tVB",
  "key7": "3xieodXKhMAexbNYX2ppppuJ83Mw6DxzYVjsf6Wq9myTxypKYW1q5v6hHxBNPtrY8Q4jq8DMaVrxHUkLmEruiQqg",
  "key8": "3eUBMxmkTPqZmMwF9wwtKCMTAfZyhYihyUxoNx9yRG9KNm5BoVwvy1Kb3fKiuSpJEpejZcc8DL8dYhmrAGDngCkp",
  "key9": "X3z5tLTSoRxukHWBNTppTTif66XTcZmzzkTd4QDEYgbhVgzjyB5efwe33PMTguHp3ZmReJwJtoXWeaHT2oGcMWK",
  "key10": "3j8oYPjk3vsPr7de7rB7iemhUoAx6QwhcByiKWPvjrEUopgMtCvCi94SunMNm4FzFnY2CsngszamhPu8mTucgp5i",
  "key11": "4WFGrPdLZtr9HLJDFSFmzHjb2EeQvbPGuAynP3etuMvPpLvtNY59X413EoE4jjfb7eNZYFqv1R45kBYrTT4jRFeC",
  "key12": "3PxooM266eZ6vTRdhdaZzfpbcJ4FGe8wKk11r2YXsXV1xM7uuJgd3acwk2ERxJDQaySA6CuzkR5tD5tU75bjzXd8",
  "key13": "3aCQTu3WhWTxJV7YocmwH8Cj3K24vTp8h9eWC5qYJSHdo6kkGLeL3qazoHYLdmTsdiiQEPrzynoWjL3V7B5CmbgK",
  "key14": "aNjJ5da6oyQK8puTwdd9nG7WQquikzBqE7HmHzdcx435JqQTEy193twzBzL4qwURMZAvGUaJgLqbTtxsYxCQPzY",
  "key15": "2s7G21SqiM5jc47gkLDcssF3LBvHsqfkK6A7kNAtCUMkR7sd46KkbhzsU5dxEE7zTkUVRCeVg5zXCHuGqLqPPbFZ",
  "key16": "4VR4MAnQNtdFs3186CNNnCZjcv7nrEKGGCBmy8A69SMtpZ9gH1wMRcuETabTm5amguyuifVee9tUN8wbUTZ3VNyy",
  "key17": "4n4seYGww11EfG5Le3nGSHyYJK2XP3dfWwVThys8YVUgSDzQ58zrek2vTrKA4SKKmWc4ZAvRZWue5vjB7CYZyiSt",
  "key18": "67Hn9x3qT6vnFNBuPSsSVjthyQdtH8JPh8jGuBJDphTLWKhzh7ELwcNid2dVz8w2jiNg2LMGRX32oNgxvx1XXJUo",
  "key19": "3khdJERUgKAdYo7kuKzBxiy5Rix5BboaRdPcLeieTf1TMHm4Wwqgs1SfAzTKkyzrjBbWVbwBdNE72AxjC8zcfKU2",
  "key20": "vJLv8f82CBjjGHdv5AaxTdm2fPVVQQ8BowaTHRUUrdENBhR39rSLy3rmqZyJHWYJxQjbhQMtK9Lrqv1NoBWvq2C",
  "key21": "YD2xMMcR9VX6Qnczu6vxSdQdtaN11f1mtD5MdjWmUAiHjACdbi4RaVz7GnVeJ5qXLgu3gG88EVdhX8c3myxgEM1",
  "key22": "2PgU8XWM6152CbYfvaKDC35GuxFfpW41UJTGiqpeH2B3umz1yJD5JeeSU8JtPULWBrnqQdFYbEgu9Hvp8ZRnsdo6",
  "key23": "5JMcBUHbcDAQ2GLfxPqBm4n8qcFVLmRB8LKJzUqyeUnjbPX4BfBDrYaYmQ77hJ4zBHxXm55R4D86eVgH4sZ8jvtm",
  "key24": "2ExMZ5X8Pioi788oQ5SRxrwdrg2d6H9XVMsBc9AMud4U5Pz7ohEGqZTewexeg8N1kTM6EA1M3whQUrviNHx9JUMh",
  "key25": "Ei9Sz7ALrJ9EJdDDPQUaGkk4rMmkQBjwKdMramGyGDSy4hKTrVBYxDb4t5zUvsJqNpYb3sjC8Gj3LAFDAVygoMo",
  "key26": "3oT9uWqghmPEyKirCkj7ChH7uXGps5UzLh576ktk9GU7iHPVYcuFu8JJfP7yjeJo6mC7EgUTQUSbrtTSUfCNopm9",
  "key27": "7PzYHPtKaqTsXpJ85m7oH4A6Ae4TwZZeKm3o3zzPqQMjz9JSAnTh1dCPvVUvVfaHhGbGMLqDMc2RAkDVpGNQhBC",
  "key28": "4UPwTTizR3gm2MXre4ne4ZavtQ6tY2SzAwXc4DkJX1pnwpTcwNThcUE7xKZGexHpEZ4zZwhyhtZZRBW3E9uP21kc",
  "key29": "tm6fPQDsmgbHWog4UBXKx2fNMC37qUfFoaRAKdXUgfjYXpWyPozwSEMK3FKwpTGv5h4mMwJTbA7aznHBoEDhDZL",
  "key30": "3SFkW9amRHpSZaMVC7JGey9S2oGCGNW7sosqh9qwUqqx9wsZRUcdpUqMxcAAeFPUKFo3ZmcWCx64MWvpvchaLUBE"
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

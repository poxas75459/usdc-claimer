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
    "3GtkHa8SUuZDUySDU41vnLY1WBrcMohDo8Lefz35x6iBQw6LjmTE2Dpwh8K13meV6d6uBXMGobtrZQvt76tnB1rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48fQYATpdgyJMgQyoALkjKKU3yDQKYnNx9BBDXYfeHpiTBJhbcLoKaGvVMQwAXjh1G5tdu1hDHu5ZRxNDTRCwckX",
  "key1": "276sRf57YJMFx6TgLXr5cZCw3GESHEPQC5Phhrs8ZpaDdbcivpBcF2Rf82ycsbEdxu5VfnJ2sRdkruvXFEExN4q8",
  "key2": "2yxP1fZtk9PodfBWBuqCUB3Yao5MK1BBBmP6GUSyuG6GjVuR1M5srSjzDKQQkdc8y9cM8urqCgrdJscLkRg52KkD",
  "key3": "2dbod65XykVhVJ2WV5vfuoXVALqYVGWmWHL7xUhCu5ZKgaEx6S3Atba9DjevvLXUCkPYtVTvfMuAvkgdgMZHqQnz",
  "key4": "5PpZJbTcH4EVYpCZf5Aca27xXg1cmc6XcPWhEtV5R3BC2x342M6wanNj4VpUdu1kj3m4R6twXBfQyzr1WiSjd6qL",
  "key5": "3jnLzRgaZdnWXvtshN2aPjMCSMdeYKaazfBfMvX2DN5HkNsQRmg4MpSRH4QqRsrijZ6vfqpvfue4RpNecyY5hK5z",
  "key6": "2btjRASiugJ4fZEmFcBmU5TsUDUePRmgryYVNsPCDQyGAUtfDy5NcRmiCwN9MLc2dbnjrM47isd1Mthqf6gXdDNT",
  "key7": "3DQ5hbReQicKywu9N3FHqg4uqxduYjQn2itusUZxsvbKCBjy2QXPmYykDBYtHAPRr7iEBPzjFJXtRakYt3NdND2P",
  "key8": "3U5W8yffVpE86RBiUCdvRnApPVskyQgF3miqWUyVeAuFAZUjRfRFQMsCbevmB8B59GBxDhrxTFnUBAkyXH5n7sJF",
  "key9": "nrX6pKDht9fhgvosjT4bv8NWUqwLiP2cLtZnQzmxzmvF6xVJ9Dk5UvFPwUZdEoCAEnWK9W8E5PJaY5ZdHapDFMa",
  "key10": "5r7oHEdNRTRHMcL9wqGu2ioakpUyCnxvhHrkNs9iqMP2Fts9JSytQ3VTq94FEpQo5bEVrUUe4boyhSyuUUb7vCNx",
  "key11": "5xkofvV7TT3Uc7pFvrMM1kjDmgPtVmntRuaKsMN6D6dsRDWbXAB9ur3FQSARTTvMnFRVcSb5CE8hS2vbDYE3iLVR",
  "key12": "63xTqsE2g89Cuzwa6wAqgzJu4W7PCPFHSYQZQYFB8bVCP1zsoXrHoKUN1EgvL5ocHLzCT2VFHidtp6GAEfXFchay",
  "key13": "4DakzUTYCdF8MsQQqEKzErnYGv4CyUb2q7oSU3YgqTGg28edpYP62fzQZjWKpeQ5BsoZjdLMdDyBrmDwCMe7Q3mF",
  "key14": "anL381TVvrDKFBMSFsEt8cBUSSFbMWbGjKyuenF4KNvfFA3EGSX2XKqnWsxW1fLxkVzxXEQvNnvbWRoBfmirjTS",
  "key15": "3DkRMSh6SxC1chfMDrkaNL3WNMkb5FJyNraicNtptmkRXsCGp7H6MREmYcCFSkHwHg8APDav4roEQLwhY1aoy2Em",
  "key16": "3vNaY1Rae8Vue6BF2KYbnNUWRbUM6HVgTGyJ2x4Mk8TBAzvHLLHKg1MxT82q9X7uuzxZeoKwmeLBcSwE4D2KMfYJ",
  "key17": "5WKucDCUe6arsGLkHiddkymdbjjTsChKbgn9LqeQQhN7bGP7hu37voGTyrDzSxFuGJ1H6FdhSYd2aBYE2T2Lh1kn",
  "key18": "5uZYZ4sxWsA29CkrP1PtQuSaNsKYzFwWQnV4BP44nP2MaSWpkXL5XTY2GQxvf2y26oeDUmMwMZ3jQCC2pJjUghcY",
  "key19": "3rtsGzuAbS7NTvtjuaUUPd94BxWzA58XZoysBW8XhDM2RCyBn7jJ9uLWAoZqPsduBPBeSxiz1bz8gnFX8LQRyDRv",
  "key20": "o1wM3o7uKZsSnEPy354bnJCTGQvFLNsEhJXq22hARXSd5e5DML3WpTcbRrZjJpjJNuDoX5a5jZSjaskaHmWKNHf",
  "key21": "34GUr9RUGE3KtxMv2ifEWJ4hPPpgaRDeadpCRr2Jk1sqLBqyuR3dAdKCUMc2iB7Xj4REy3R6eJYBC8JKSbQd12PG",
  "key22": "21ajPxbbpND1Tq4o6bTa9AAunDU1KJBug7v3pVCMdZncH4V7bYBtnrjnBawi7Aodg5ihPuJxCuFZrefo22t11B9V",
  "key23": "5xt5S1oq4h14XJbFtrcxqr9iAE43M5zbUsQweRMrA4x6cfdyve44aztCYwt52yWyuNAMgcnv5aEMfPdJodErFKxg",
  "key24": "2oyEqG4im5PWxFtD4A9ussdxoQomwfGe3jTii8hbKZvC7AohMzxTXcDYpPKTt1jH68Uv8JFzizgvCfGSY28sLzUw",
  "key25": "5Jx7vH4kW4xBvyVJAijGcRirbjcpF3fu2dXRaUeZ3s28jHPUtd4QZLq1e5AP4D2MXutFwd7jhWzhH1segwgb7uyL",
  "key26": "fCmmMCsnCq3p4njiK9YhLdEzcUo5bshYXbnNgSXj3j1q1pUUDwm7RG4n8gB3NTpybGKDuhUbmMKghV9vt7ZFJnc",
  "key27": "5pdkVQQf34XisQSBA3ht1qY6v8h6iAjQyuqWXBfu6Le6XGUo2N9aiKReY9Er6aiwdpUaZ5iGEpc9rXAt2qTRKakK",
  "key28": "vRNbuvM5cANg7NUtjVV96hiWkTiLQn75bARuW4aCA3HFGDb1V9MBfhsE8hNbHhzFs9vCgqoSL2MPci8fx5xXvHs",
  "key29": "2QDRGq1UKfKx8LB79Ejx8VbtMUNfAWZB6apt6rW1XjBXYzvgzapgggJVvzwEnrGHehgU5H6Ur2a1DrGnd8LYsY3H",
  "key30": "2tow7WPxXRaRM9gv2aR5kBFMbVtkwQPSfd1R52jdFgvUngJ88xKQrfu8TVgSwHMTswonpspnEfc7WaNzNNKboNUW",
  "key31": "4H3Bp4xLEzSXPzphVt3GwnqFXfLmZEofUguBeej9zPA7rSkZGWJQYkrVyKzpYscs93PTpW6ZXSG9fKiz6kKNuwkY",
  "key32": "KntRjwRwkK7uAh26GR2Yo61XM1ELGW4qXrtPKw3ZX2XBykXhWRRMb7GidGsreLdr3rXtJ7dqJDihXH7cEMvsWao",
  "key33": "4y94T93EPvUWjeGnkKZwxKR27AfgijYeN2EP9FyvqhCaZjmAKomqNiUNTKSF6eW5Jss2EABjfmnVhfYC2WAJeYDf",
  "key34": "2RnHwEbGhRqXFzzKPMirpGE2Rpg86bxXGXgDG4LN5tKiru9BNJFYCsxXpzsZcQfwNoWG2PfzUc9kKgDNJnySgjwm",
  "key35": "5osZmt2rPkji9L3ixgqDLhiHuPSrDwRKfGuSVLafNPZ3mPLK2tvt7uyrkRhZ5jSYkZdTjCMjuxht2cQJM8tyauQU"
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

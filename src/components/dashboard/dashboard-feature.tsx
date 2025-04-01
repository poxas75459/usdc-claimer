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
    "28meNxyEngCqsy9gDKaHg28DtX8LkYk7YA2H9pHZtE3p5fDDqwk76Y6iY1CC4rNSUBXM3seeqiSahNLziD9Vpie4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPXavbu2fWe7a9HstGxj2RX4Fy6KKAnvMnUZbWhGBkSMUnrz2752Wmokj88wWLwUzKWaGbMtmEoNWf9xxVviV8B",
  "key1": "28q6qjmDXPQVqmZdpdnvFCy4CZEXZY5VkueGd9uQZkHpBYYEpf738c9rTN8PVn7FW75napN5h3kHPU8X5B97bR3Q",
  "key2": "24Jmh9yUZ5RuiYVo9eaTPGd84WVrSgYafwsHQg4uScnBRmAw3qJQCgPAGMpdNSNikZDXaSmKNBcAW4fCTPi74Q8x",
  "key3": "j5Lv5vBhUWuwbCaG43tJiA3SM1tA5RhZeRV6qjjH9k28EoBQuiX6zVwamHMAiBPLGfLZdsAYFqteZv49j2HvJ3Y",
  "key4": "4rdcLrBDcwxsdE2DRdJAqZ2Cq1vdhoTR3GUc13xvVRasTdmXPN2vKscDh4co24k3Lrd5z8H9L6dRZoJmjkMAM1y8",
  "key5": "54ZjanZkAo99AC3NqtGo1VCoQ7RmWZvVeR2pjfD44YTAUFXBgaHQtEhNdsvcuWAXPi5qBb6SmKcDVViJM3xpuX6R",
  "key6": "47qVmQNuf8MuNmLQ36Ua1s78xj6x8AgUgB865jW84KhEYqcEWi4KqYeWQam3EyVpq6HjpEERHndxHPQqDGMaTYwK",
  "key7": "UxwTLbi4f4wZYpamdby18GgDsKBJZHAVUgFsZ5kra9JipJpdcYsQbAyY7C3BA1i2ufmHLLwdfSAGygCBGauuAkM",
  "key8": "3bjrBZNrW5eP3dwHx28Mj392i7CqiV3ccqGkPvAM2ojEQQsEZxLMJktmM2EMxdq4fnXtY1XVZM9E9hFhZP3itg3N",
  "key9": "3JQrY5ewongZ9DetN5NEgXDMukoj7WfdsAnmPEuzBxMjsxHFNeHmoCQpYL8RiLo4oox3SXtygsAbbqyFfSBvsBps",
  "key10": "49tW7m1odgdb29548tLgx3yLm7NyhDrJDXeEgNWKJDVrTJonHbPyvyh1RNytXrS3ZH381usE1E5faDvPq4pL1aoy",
  "key11": "5DfYFgp9LN4Lo1tMQw5RHFEWGQYrn9kXjsAXSG9hpgL8GWFm13Xd7ZtkSPniVwhJ7oGAyTerUCoppTDKD3ANf6fo",
  "key12": "4svYyLRLfYcJtxX9P6tcBxxaym35jVs7LrQpKGhA8umWMEB4mmVw9G9fDuZBkLihCdF7iJdPbcj42qzWwW7mC5i4",
  "key13": "23r5Bf1BFk778SuUCMi8fhEUK3e6VGa13ycCJ431FEy8fM1t45V17UxRKf2NCoLUkH8PCVuQnmEMzwzRKcVgkXJZ",
  "key14": "2UcPTySievCwcaVJiW7PQtKWRGk8HkK2DEARKJuwkt6uTegU4kDNFW9rH9MTNG65gqGFRpNCC2SeZQzf3BhjapPo",
  "key15": "5rV3Z8trBVye2UHoa4VBNvQYA3sPZJst7aJxqtC9LtWZ6yc9hNBcbztmZcmSGLNwVjvAnaqZBJMz9KUWuCX4joCV",
  "key16": "57uDSW7XzBrC7W58GTzbqA5Ef3jaBXivgX34oaJewcqHL4brn5xtnsby4Z9ErSaFqfmqcApqkrTArGEHPERb4hna",
  "key17": "4k2gJyuXZL85P1ALGmC5iH1FncpRPXHgKFm6FDRM2a3seQqPKFbrenXFVpRXJbcpN9Uf4DCpkQXLHYL3kueqT7aT",
  "key18": "3Fmoc3MsWWBm5bxWo4pQh3BckYfHXwLqvHaYSu8GThDx3ayJs3JZ7SrswcYyeSn1ps6NYHMz3sqoJNMmEbWp1DKB",
  "key19": "2xUFztNZqxmYoQPs6HZxpLGUkh24PNbHsQZMActbuJLyNtnWVfb85ZTWMZXUg7Qi5HoYGXQRFuMid9EnNe6pP2be",
  "key20": "5a4uxHD3v6LxKaCqoA4kYuib1YGWUpz1CecEm2LCTz4SoisFmYZYJsdxYNsYdYBRjLtg6bqtdJ8zg2NRufUkEJBv",
  "key21": "5rJyyEts8KCCkE8Kau8Q9Xy4EsMBMb2cYGqqrTjy4AuBEuSuoyxfTpmYVbgmtYHfHsNGXo5RbFQReisfUhzGJQyb",
  "key22": "GVgEgYMTKQmwJnKcMdDw2Hot3dzZN4oCznj3Saj6hgpb4wVuffR6jHc2YxpxGRYqwVrZfe5mo5bWwPeKWaYK3d8",
  "key23": "4u8gAN9tgUpUW4yZghjAcWbRKim1F6M22V7utYqkwX8ckKzLSEfkuYmFPAZzbhg3jvnL6yVmyR4bvPfykGCc2VaB",
  "key24": "5u8rjpkgmVZq7yJDAPc1EDLYh6wYTf9zXii2dKNYShxwMTrGBmcq3BpECYKt9NmgGTKVomkDTfd4ft4itvGmrSeV",
  "key25": "vyqEeUYtA4dQDBgcRfQjUR74B2qsCtEiHUsbsrPp4Dd9c2CPWrX9xSJxzmeKgGxEY3XbMZzdYG4DSTMs3edKv6b",
  "key26": "4gcF4Xk9SQEHAtsVsDYXt8pvyUzqj6DxmSaWV4Xi7RUbyNaFZUDX6XR9HAFuriWWjg8KzwMwJ1aeXqwUGUX76VpG",
  "key27": "2YXtQnXg4ioV2tThuuSrcYyisVee6GnbHa6WkytfWKDSkNrhehEaZPHrFVJawHb6dozXSWyUYF5bNt99YXrukfeH",
  "key28": "2jhqN34m5Wg7wV86BAh7qzNojRfsGJHzMKaUTCnk7hf9jbGM4wfvxYNYkPrqj64J2dcKycMeuxbRxarLhvsWbMiu",
  "key29": "4zvdo5Dhr9tWoVM5eazq5hYm7UkmaMsdBEmfs82dtfaTzCs3ZfRMywWLpPmukRLddATTrJ34tvQHwt1HrzewibAC",
  "key30": "5CtUDyaWwcGbpU89U8j3J5ERu6S3CnF8dL514kmapLHEhMwSwtHEgo9SL5VgaGRgF1UPaezF8VFANrcPD6m223uy",
  "key31": "5KK4wZ342rTX4yz9xw9aMG4fDPksDNeJcZjURoaQoGnTriGZk9KUZnQ73CWAeevd8Z4j7ZyuoYfuTZf3UAd4nGwb",
  "key32": "4aGL6U2C5gTd2pDrRyhT4UHkad2qNd6D7iYaRAuvY8yjeciMVwuAJqA9fZVqiGqHM85tHmnz15M8iUK1Q2G4V7oF",
  "key33": "2mtpPsRGdx7sGp581c9xstLuTxMdfXy3tCdJHr2AANiqXqPaL3ZkP7sSXcREspsJLthE1TcNMxJFDfnPHsMBeK1S",
  "key34": "4auenD57XZFRf6gjmsGLrCEeWsd9jvyTRqAnnBxNtLPt6ZMLH7bmLZsgdvoEw1eRB8SbcoAfXf48vCACW15uS81T",
  "key35": "5KsU9TwQHUVcYsYYZkWaob71DkqmcifpWi8GTFU4JQ4284cViWbNUVYJskRQGNVKnTYBEPam7XPf8emMYLfgFMFm",
  "key36": "2zpRaDukXKcQkQSZmyTS5F7y6wyxCyUBnACSNdemieoWRKXynPXaGCtcDvoN7ZEK74anFwkdYcYK5KGEWj6wX1vy",
  "key37": "4iVjESkWS5FNY4zVbrXN48MdTngjX8ri5fstMpYacZDH8phYbNUgVY96TWVGZBUEu4KDgms4Qn9vz7hezsbVwES8",
  "key38": "5VFXjEiq6EHnuAZfFX88zbcKw65nUKyQvLji8aRiCJ9AuYDAeZqWod5WkrumndB6QiJBRPmdFV5hywEMUwZeFcU8"
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

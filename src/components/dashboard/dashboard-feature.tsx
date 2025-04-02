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
    "5Lb9uucj8ZdxKGJyUKzsR7e1FRjvjKD2WzLmon5HfgpYBZVC6j8xzEYJRUapx5pqMyMbptbAz2X6yesyeqEP3NLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sEuYy7YxzoFT9qFSksrbmUWb4urnYiKWHmRFAYzTbGkqCCxpvh5cs4TsHCthtqvtWgsfDdZ7MaHrT1EexNDS5uZ",
  "key1": "2hPKaBpBgUsLeejsXLg52W1Rk9pFGKzriEkyi9ApAdPe5Q6PwLrTzx7hVwCgmanDToPgFYioZj8RV9jQTSTR8yZe",
  "key2": "5TSLsYRAgADLEp2gcHLaFnZpU4tYfZ4GRUsVGuRUuEiQRV19r3qiG4JYkgcZ6WxVPBb7DJ9voD1m1oKqjqT3LWkN",
  "key3": "4x6CPVdVnKBkgbzjPTS95kq15mz5x6y9PyzV8uDGngxMNLTD7YWh7yxoqdyVotgj7CH3Z5W4J3RKQPrwMQ92mQvY",
  "key4": "2aQeEnMidE1ChBR6kxtrAkUa3Bxrb2xxfAj8XbpSoHJYPXryVhMjkS8xFSCfCvpRFXhRJNfH1wah5WyVoTEvp48T",
  "key5": "5nAPTYspUCmJHiv2TnNqsUqTHvwActA1unzNJ6FnxXPMpopfPzQ8CXrW6ADSUpsAcbDuyrRjgMGFzgsJP9TJDAVE",
  "key6": "3ud6zKyux8d2aFHwkCgeHkG6HmJA1MWRR68oZH8skh5Tg3GAeMW1jsSoiA2jWimCdWBUc5kvxJFmJHC2mGdmZXHP",
  "key7": "5MQYXkYBB3HMK3MGCdDeacUSTzHqApoVFYg3qrUDy9AUVvPcS3ksL35dzMxBhqjdfk1242DWmaZp6g17xPwiRw8h",
  "key8": "2jCXtAJqy9hSW32RSDgGXQThmTxfR8VSZwYm5gDCmWz521LmXg1QDDWQvrjv8D4qCCid1waSz1pC2ewwi36jrDvV",
  "key9": "52BJj8UZ7xKckMaed4ZMir8ex9SF3qM6kGNovgzpqvfRzjr3MA3DSHp4vUQAoWyku3aM9iL6Pcdz6wWrub4Qwphx",
  "key10": "4cXLmSfKufrFKHhX7LQBQKhyNSf4QGFWfdkA2u1RnVqu6V1VcC5owscV6GsB64Q76VGZb8h4sNX3D1pvPVjroFGK",
  "key11": "4PH1ma3fXF5yXo5NFZB4TaASrdqHJy953k9KEQ5nm4GxcstjFsQKuU74pvXh4UA3yusWERdoffLCPAuCDNVB2kiY",
  "key12": "mmHzXrvrsHHrDaxzWucYd9JpyS64HJ15AgDCY6PUZhL7SNbbb3hqt3vGMR5kMwKunHb6PGGgtowWv7SXTqMFkM3",
  "key13": "3Fab8VkPaZPTbhsH4AHoyeVbhJwbMPYU4EhHwQ6KMHmgotcSyPJFLGRtdxg7HPGY1NYQk2q2GU9gqW9Myskm4Ret",
  "key14": "M3hX2phpCbgJCkEcD9Mx5tz4oSbfPcjQx6WdECzEDsNvbtZhoVbvnHGF2ZtYQGLjYepV2qyFzNtZTezu5xQvMHa",
  "key15": "2Nyv63xcfuWsQvgon9JNHwcP9VccqtvPeutdzS2gxLSqzFQiqvjb9sKsfYNSNfUwjvqVMD5FAMnf6JPTUfhoLEnV",
  "key16": "48CF3d6oskaVb6xYEAzK8X3hxC4Sxp5tzf9dJcqKLiD5rF9kdycEsScd63BQq5PZUdz659Y76Fob2iySQo1UEiNF",
  "key17": "3EVxpx3851JfdvxNcpSTiWRtREqdViyLcoFp9VUprENeKaUfLp5tsJDStt5DpcKpwcfP4KLLpP32rHKMVnHfHXKw",
  "key18": "56jerm4fmHRx6bcj9R1SWi5LvbdgcHYcgF9h37fsJKFdmMQviZq7WU8ARPoobJdxT6nGVR8vn1qmV187tYoDhVcw",
  "key19": "3m7rv6pet9F8s3goiHcV5zsG4ZfusRJdJjuXmZT9Ea8WfaiYxYLE6EpBjubiGvDaUNCWMH1srQkkExdwn6SKruNe",
  "key20": "Kt4m26Fq9ug1zSsiQsyTF3Nhq613oXvLoMVQvAHnuotuEy4DPKvZrycs8MqR7UUvKqgkjaX78NzL8Y8HhrgF7FJ",
  "key21": "65Nm8Ur1efmNBUUBU2ZcPApKnZi6eXWHCBdXjjLDAvusuCmcWgahSVCmbsmHnK5ZW4tJLnokT2zHBtMKif84MiXb",
  "key22": "sVhiaoZu4duDMa2M7SUYayhbwvNcX4A4VXhnJXAEtbfjjbbRHy9UJkUuafkp5ejgsxsUyqvFesah2n8eoc4vhnH",
  "key23": "3Pu4CEqDYFHSoBNC43m7hJ8qwzbhfsMc7FuqZXFxdBMcLrC2fxMNyyh4uPHMnyrqLsYTDxrwA5ee8pMpxCuk6CDq",
  "key24": "edJyJNPdvvGuYxEajXzf8VTjm5vwdiHuzNJpTyFRVPL9ywft3SCD2tHHbXkbxSWCZqJoiFMtZLD2BKxVctJBFDx",
  "key25": "5CydvxyvoKt8UmVPm8jJVuz9F2SqN2ZLNhWaz291oDQU7D7sYMdiMxfH43zeakQshYxKiKJ9sJHT3S9j4rToFACQ",
  "key26": "2DtpaRWMWrJ9dDEaHuiaR77asPMyv2cYyaStZEZscAsufCjcPHxzb2VG7JXUcnUiimK9T2ZxKSct4P7HZ5Za9syu",
  "key27": "UhYQrCHFrejrFZMMMRiMaxqEph6r44wirihscVDkbEWvA662QqAs3go9CsTVvm1xinmJw1LLYHcUhc2J6a3tEdP",
  "key28": "56mVPdk69PFm6JSSqe9fo3faVvpfjc1QfXhenGFPfCXsuHbHEJpNECPTCuYAbSAnUjuKDidV3gyMiAxrdDaxHz23",
  "key29": "2GWCkdjnb2J56HRVi8w2FGFr6gJRsMtT4e57SnMG1bqKmJhzPZdb6qJ9P5yChbxxjNPUDnLmseAnUvF4nhVfQUXe",
  "key30": "59D5M6TQH3ur8XGeeYdCzDmZbav8m2kcskctUEBDN2JLqtFNH9TavxrquoF56R9zbhZHJ2RRouknr8q6wzBDdXUp",
  "key31": "5fEmTJ54H8s3dmLt6ihqVywFzMai2U46xvgwnU51TmEE8BXsJhF2qFv5gCYW3X3MMhyJjnNjNxTM8VMqgwnjhNgF",
  "key32": "3qLjc6HR9G4owmV2XhLWc4MFMBzSqPdXNUd9fDbMjmkPTDWqbdb635Zuovk9u27kw2CKRDDtGoEd79pVBQzzB3qo",
  "key33": "4TpHJGckRciLG8mEmdXz7mF1e6yJLGmKSwmxrpUERz7q28MS5A7yyiGgubPsHSn1oiUgEBWMkWouW8ADGcjZgCqv",
  "key34": "4xyHy8vpTmZoW2c9eEgvf1dZ58hCV4FWqoDsGg7has7NoAee6xd4Jdw39jmmFR7zreUNhqCpz5HUnBUjw4KbGpKH",
  "key35": "5NUr3hBE4d4Z95d4r7VyG6tLznp86XLpJXzPRnuJLEhyZySMRdsQ5iVnGn8yc5ZXt13ygFdoBBqKjvGE1hHzje5N",
  "key36": "5EQCXBpbn8Kx9kFPi17fd1q1yGJ4qjgc3AYcafCWegXNoATycFBU5AdRizjAZ2zufTSHYs4EeAWJYFh5CcnqkJZA",
  "key37": "2rg52ESRJB7a7MDgRKsnTYi5rSwuF4iv64NXPbfSH19MmiEqBVGDEAFs1GqyVsvo6BUBfu9XpV3WjRe7TQEHuphV",
  "key38": "3wmPxtaDRfYBqGNNioc57TugtqAorsB6jhSR9TX2ATiKuQYuAPxNL3ShdLXXZRXeVhuvDY15Z7FU8obSbJmeZpq5",
  "key39": "hxFiRAJwHX7RDTdQ7tYuHTGMHNApEbr9xKhjFWc6HiZq2YiW4zChLuUhVcSkpkRYJqqJ4XAeVNfmTvpvQ9SBQ6J",
  "key40": "WDHoDAwfQ4X3wRgrwF9781nx9Eag9S7EPtsHzKjGgSAxNnExJs4RFUeEX9NJePTpKAyZRf8LjDTMCGFLqyNhw99"
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

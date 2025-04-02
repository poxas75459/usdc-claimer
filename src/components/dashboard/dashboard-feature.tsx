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
    "4XTsjHwYpi5FEkxdYo8rDr4StCu9i6wpbJR6NtBz8cuvrKdQhmHX4M2wEjFqh9X9QjweSSHZ5CMSutFojZWc7KGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kHWbJSGqoU8GxdGKP8b3b6R9vxmjxJPWVZwG5JUDWvhCJ14JFdGT5WpUhPMA2JQwrEaVCQGYu4D2xCoUSkj2Kgt",
  "key1": "47PkYMdJoPA8nKmbRbGkqzfkWzQ3yvS8Zuqdh8VbcQbwr6BGELA8sNTGYDFVz6TFXsFyC1mKGAnNPB7NHhKMCAxz",
  "key2": "FwpjSa3UBBDcHRu4kXN8NMzzvxVnWBGZvP9yVu83u6F12ibEncBsepn1niAU8MQfx3uYsyTUwt2XxskLzuhebm8",
  "key3": "59M1Snq87RvPWs9775oYe4wJHqyh9hK261nEsvbGheFEuxwmodHNmftUrJ17P6o7oCM1KLpRhmz9KLiT7rJm8tSL",
  "key4": "4C1nhzcgPohm7qF6JWUbKYbfQNUw9tMmEfx7MAftDFvXhmAfbH76QWHm8HzWRELFbks2m9mh2CxS4G8cxTPxwQ6H",
  "key5": "4BcmNfSnjjoiH73gefwMw6SmqT641Fysc2s6YzeAXWb6hB8kcr91yTnLQsNFBe2wvPwMYuYfv6nQ2gS2sdqBXQMT",
  "key6": "4H6qcuRToiYUn9bp5Mc8HNdUPMSns1oZudCJ8ykaiXufTrstSfdbFvvSdsy9MB5qagghA9W81j7Tv8Qdx8BN3EHe",
  "key7": "4p7WL4VaPPbZpA4crjcbPDNavPwaEm9cHEpxmtG51FbMJ1c6oawdiWJESUiFEYRAvKBShxkBVyCB912pD5SWfp6s",
  "key8": "55kTAW71WHXJoRZdBhFLRat7JKuxbvMsxTEQxUAZp8KGXZ8BTqeb2Fcw5qa2eqLRPnW48npPQGhzfVeccY7ACPtC",
  "key9": "2uZ6fBweU2h3VZhVJnzTmT6a9T34KPsRmFwvBdkAKRgWCsFvsVQtuoQ7xnpLmdPQKmhEGHhoq59kwS8nDiwn6cs3",
  "key10": "4yUNKoRC6JSy57aZEE9DYW1gZkVQaVfC4Nz1C2b1NE17FD73VN9WqdRP2DsUPvW5mnKaixBwNdDfCUwrERNiVsau",
  "key11": "3L8vxkbbNguZVjLUHFArc2rWo5eqiUEaCcPjQmsZaT9GiNycgerGMjsYHqaiy2HJnfVpEN25xXDVY593mf9J3jhf",
  "key12": "4txN8kkVsY71fAF4PCNCYXJWXwdnGQCdSK7rhPrJrjsAmRNibnri65nA8Hzo7gse6xzu4CsNGQfVyyoGpaKGefAa",
  "key13": "5zeotkR3pGw6gPtm2SUQZNUqgN4nEwAYUgec4TqUNTRgc7XyLqNfnrXdJhuaagYZdQWarkNY6mRiQ14s8tDRuFZ5",
  "key14": "4bVLCA287918HUQqNLmwn46wyC7dSHjqY5vAGzRakgwMxUMxeQ5UgR9p6J45emgzkL1sW9uZ8ALkkYWbEkJpU4FE",
  "key15": "i7fS8uAqGcCuzG9KgPr9dqqhVtxQ4nBqg3dcZmyFX8TPSM37A7Bubze44gewuSst6CaaPJAtCAhCoszztATRRvt",
  "key16": "5Z5kMwJcZXP7TYCoBz8UZ38R8pdoKUEjuAz4JXuL63Z2yGT58SaWaDeQPVTASdeWAvTTH7v1S41pVHg8cEmh6P25",
  "key17": "5u2u4rxgTJKrdMYvHNGW2MW2yeJN6xmbL5zuZdbc13youhFzbKaLjPCcijSsdPtVGuWhB1KVK5JKJxLbFnb7Ki89",
  "key18": "5kQ8AwcCUR1baeXXwXr3ZSMQBCKerYsVoaFCs5gDm4cf6aWwVu7YZQXjSbt1oxojSDTJzN7qsjttar8RXSxuqGBV",
  "key19": "33nchAUk3UBZhkVANQiUd95Y8BJxPSx8Th9ttwS1gYmRgqExvYhULnzKgZksEuxmGNfWdeKFnY8vqdxmXuzu9rb3",
  "key20": "5YH2PN1ULFCu7MBj454WaXDv3WvBSVx5DLcqp354ng1Xx1yideiBbxTpt34DAANraqHrjtECM8paVddecT8Qn1gz",
  "key21": "RVobeLoMVaSjTa7nWrmtrzW6hwpuM2XmZK4HEASbNKkfdHu5SCTJbBKBzQeUWbHkaiRMwDGqf9mXYZv4pwRPU8m",
  "key22": "sed6Gmbx2cAw6sW62hchheReCkZzNmCmAX17gNjKTFmeBw1pNGWZ3B8rATGSaoSBA7ExvnCXFmD65c5wwTDuypc",
  "key23": "66iY4egSTfWb57Q7iFKSmcmTGEjQTqgNTEm5us35Zr1FUqnWW6HwR61peqb7DsQAoC8FqqQwe3cF4cKzzTiwXwAL",
  "key24": "4wgty75ytND1MbpajqYTudk5zmWoedDHVeyjMkmXXdeXLvuGREEvBdDBQKTGNskYbXrvUMnw8ZZoGHAE7eACnuJw",
  "key25": "cLDGfuwBEiayjb1JHVYfNJNheTsFw4Ff2gmZ5kVHF18ScbmpHvRymGvXz7PVPjVoBuJ3ysDyRcaSfVk3EhR4cSm",
  "key26": "6yW5Gv71vsBW5T59Vtwa1izvYhjYZXzWz9EChTAUTBKAULrM6BLJRdHEextgkM7ZBprJs2SoqGQGijjN8EpJARD",
  "key27": "2AoKtRnmSXnFPMh5YPjWFko5d4uxriLUdq3HxHN1pavXHGSkg1b95GjezzX3S3JnrcxxgJrYybgftr9z7MweMHTs",
  "key28": "5S25AVVZvjeMHpnPfDUJ82xK1reERmgYrn5isx9r8C6eSgoUSbpBSZWGHvwQ8kQGHV8YogtpZT7FYgrHgCFqT3wJ",
  "key29": "4DCPW4KnrMXp4MY3KNvNMLwGT2bqgZxB8esbJtfrUSG1U3pC23XCUhMgB6EjELmeXW8MP2fSJKoaamu9ZLYmJDX4",
  "key30": "2oAu9yWGho19zypAdAnd84ixLPewuwpD9TXbq9rFGwDCu8JNq7w5XwUcEUdeGLt9GUv8wiRFkJwsYvPjsowurKCB",
  "key31": "5UxcVCXgwStexDb4FLJkzyW4oghgf22Ajngrryt4mr1KQvYdq8saCt5bxGA2fEPzgYtBNYWU3UF6nSuGmhZbw9CY",
  "key32": "3bjrdbGcRAcGPXj1YN6SYjcBN51gdPuHuDx7afsQdB843SDbawTtpHVtsuEEg8exR7viPdvyfD3xAtHNH4ppMWZr",
  "key33": "thefjcD6nLkS9PghMcaLWuxF2deP6GLvPyt5RZjHBxkZg1d5UH3LXJczo5RuYEguUQru1kN44xUsxVxFz3bUqqQ",
  "key34": "5uVXFfSSQvSpkKC5P21zYkmwejStf2C8dLBoZtG35UK7NQ86zFPRpBq4CMBTT9zEjD6PFKZM5go3FS1gMG8F9Tuv",
  "key35": "5AntNZZQhp1FWaW2FmdwD7Rgeo42Y1zA1ycuTtRLNRRidCJ8EdrSsCvXe44Dwrc2PWUAJnCT4wwP88TdmvmoMH6P",
  "key36": "3GaMRwEdScaR4MKc7y6Pos2pmWMeYQGsoTvHCCud1BHhDgYwYgnmNsX8gBmE6TRssPRXfvpoEEHD9ZZX6Zq2eZBa",
  "key37": "VqEVjsdWytoiRgssiFevE3xYmCumvVHukyVurxZDU7e6V4PTH2Z7K38cNYtTdv4bn4USMGEHA6WgxWRpD6VaJYp",
  "key38": "3esadaJhQ5eA64sBs3dfpETgDJ6BMmvobuMG1EkXdR9m23Qe92nRjMkxi4RKzYqSSbUTsKHfYDMy3nMXXzowysqL",
  "key39": "3YcYs341C3umdru1rAibQQiTKjKiTrmvRFD7xEtSaEfRJqovrM45sPnS3rNVTEsSUcYYfgkaymPYucfqW7hiksSg",
  "key40": "5Cv6B4usrJUX5mbhXiF2PCMf3SaMrLjoknDhRwewYN7orBH26vm3gaeDvWUJvRBVTcmYSWZmE7wBwtpsY6iiNFaQ",
  "key41": "5gfhp9MjfsCZ83Lo22PyxYhwbWCjZ2WjbNLSTd9A8RS8Guw6hEgWJqgY9ycKG9wykvjiJ6SbJZGLoRp1M5jndLwX",
  "key42": "5nPBByJUfoL2nex8FuNc7KkuwAiTRhCMmVR1vwC9bg6xjLpquTjGsoK8W84Wa8AWnjnR3DwaxYD1YBqYRxJpiUw",
  "key43": "28vQEH8d4jCP1aFjXdateU6CUQ4n2x4vRz64TwcCjQKLC5MXTa3ifKdkrSph78gdBgP7ePTVZQ6Cd1oT8K2hkNnu",
  "key44": "2ZeptpFKZeUnrdFGMqrqN5JkHeYMbzk3BHmrpDdMbw9hDTm1QVarrgVvw2daLbQ4NnVStRkRD5aah7XJiino1v3V",
  "key45": "3ZNLTyQtt3HHFFY498qWY6rwavK5Tk72Pkj6a5GWzV52PhqtyKvWTYdkgoKDEc3h1M2vbjaAcQkpmrt46t6KKbNS"
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

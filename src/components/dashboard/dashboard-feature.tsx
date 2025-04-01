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
    "ZjnQWuVcz2oSZUQ78gL3P8cXMLu3SdhpD2Dy4oNn3oAqRJBpZzSPz3NEiYnMvdWpncQVe7Mnfjx1TrVJud4aUm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GedqkZCDAY2qtTLU7mTUXkVRSaS3TJMARoecrB1t8ABJQYGN8pFFBQgCSF9Tm8UCHBQRkdcWEY7jEAJXZ5ikd77",
  "key1": "mho4dATajY4MvdoVGTyq1CMKxNGhekG1hciWq2je19NTycBXLiNMtC7bvucfcBkbTrw2oviDDSnnqKJ4o1PYis3",
  "key2": "VFKUmUACnxRQHu2joByFKTngAMEWsDAFL59JkXmXDx3NB8JsQrhBiB5mYM7FnD6zHsKX5Q2BSCuBwZky3qF65Hx",
  "key3": "HgkEYNBe6AC7qgvpShKBT9Qtcnqaq7o7sLa28qvc4kACuEoVvjnL1JMhGKMcbeB84E1jr2hpGsgpVh3mavC1Aks",
  "key4": "65cuocRCGqeBWgHFf6jJAHy6u9TBaWUfoaLmfWzeUyiUa9KPGw6ENFMrLNckz73Xr2giS2zaxjqchgH8PCW7KyfJ",
  "key5": "2As3jswLGm6Ps7AGvnuAMD8rUn5mMmWrYBu6TucwiWTDGTrxeGq6fvaamBPKhmckzNDYHWTC6bLm4dC2FH3mcEq",
  "key6": "5uF4bRKrLgqqGHwAiRZPfmXcTZGvUrXdf1VBuccKDrEzrDCtv6UDoncW5XHpDkm9Ron775fDJobgnTWjftaUD7kL",
  "key7": "32tUY7TATQM9VWSgPbRekiuMmKZ8S1NWVveZoVseUwWteiEe3jzvfeEA69V6LU5F2m5WCxuXanqX43LU2M6UBcgp",
  "key8": "5YUFYMQ2yu9H2iw3pT2JgRVaN6YsYDsQdjtZFpR251x2AmoCSn4DAQxzAGDY5dqCjuWe4xnCFaSoyjLS2G4XMBk",
  "key9": "4UgJx4EPdi13HbqnuhCV3JBEa5AZseQKebTRJ2yngd7UnJSMzyPS1B44TwMbVURMZ6fCAGZLoJrVE75YpVTwth41",
  "key10": "rDdRvhY1Fy3qX7qnFNPyd9eUTuimmo53wrWaxnSP8U15M1Vj5AyTi6yWeaCawvr5uWD8cFNkkCotydKvGWJSe8t",
  "key11": "4PX67MjRE2rCie3SMDfbo34EjW8wHWWny754MzqS8acbdZiC7sQEArAmhLbkM282P3yx25ZtW7uwNRgFmz6rK8Cg",
  "key12": "2Up3mzviXNZM9yZBJAHUw9rTi55oR95ax3w5YMurVszCStjNVuWXVPYYpKqhZwi9b2xkFeebzNgDyJzdFKx2YfLd",
  "key13": "4zKwxPuqxhzT3PvfqAZG7AtPwpgGQiPcyPph3huJ2dUsCgBMTYdcteGgqm5gnomjVKg9YaZRSiKmRCnVtj3hDmcJ",
  "key14": "4EPa5ryUbSbsBTfVypHVQGGDAxHUpWCjbCRrzS5BQmzf31cPWtiUGeGD9uuk6cxYQSnu8VYM5ArTKPFuPacembQD",
  "key15": "5AmtLDJMv9WBA98ADYU4D5fBWLcKDf9QYEQNj1VL3Mmv8FBaVAfJCC1Am1R4Utq1L8jMKHj8qYtukmkYG3bYSSeN",
  "key16": "2RHGisY9ipTsv4XqNmPfFHPsvDd1QNpRk1Dqggu5kuWVyKPHB5zJUfqRMM7rkdY8amdHAJnGF27ZgnW84NK3DbkH",
  "key17": "5bK9yWawFfwCjnVLfp6Ek9czkzMULEtRDNigYJKKY37uZHrvT9nBfU4j4VzoKCGZZNejnyFcV1RgY8YmB5ynEAbw",
  "key18": "2SAfY5zoCpQ2zYTnWhbVgQ2P4nuMJVegA2zRnw7RjwnoSFprVBAPF85moGCLLNDjraSGdd8WijyvoeLpthVCvTWt",
  "key19": "4yySZutkRsPv6CqmF6nPuwCwY14HbpfGo3MkUFXwNBxfSCoBhvy75aBUEev5JQqNawj2n2xwKrVZqfKGmR3MFBEz",
  "key20": "4kjQD1QPqKHJmpBYqeswUejR12WVKHRDb5sEgq1CyZBxNCQ5eCwa9JBQ6j3QHTDR6aEXYP5VmxPBeQtmW3AXAufk",
  "key21": "H3Zy1w3F5iQQd1QLp5zHGL2yRNLZFX6dYr5uctYWetQh1Nbed6zCDLcibgkzjFvPT9uc8cWYg7bEM2SsgpRv3Mz",
  "key22": "2CwhSjAy5Nwtbp131Jv7JwABBeTxVvgjxd14q5YDs1vQtyAQTCsZeH2pNVh7p8DcmKrRZW7F64hqRmEhVKdhGr5e",
  "key23": "1XBgQpmogf6KDxBJ3EWL2P4fEoGF9RTZ83AWiNhAJ8bAig6gQQ8A1j94QXR2RQSDzQGZNeAemiXUHvSwJBsmzor",
  "key24": "5EagqUwgLWUG8s3DJzPnyhKnx1hW3nV1J6pQsLzRPxMxtKrL6fTSYyz8ntwRnZiRdCuDqiPDq1yUERbAmQaztZNw",
  "key25": "9QNTSqVmJtR5EwTtctsKCeQtoSmHjGPRaaPijcCkgNBmwMksPh2z6gWsFsikYAa3bZUTh2VzSWnM5Mp36pbb2eF",
  "key26": "2EQre7eHCVV2wBNK6hEsTWGrtsH3rpMpBPAoW8jfE2u2C5mBfxYnNt9P2ioKapiJXAUsTHQCC2jCZEjqJJRYFYkd",
  "key27": "5CDCWRrQPAzFtN2thTU8SLjcPoqEkkaPAwdLEdANXhgGA29L5iYM9n6KXeqsXGsBydFCjjSBfgmr8PQJJFY9ezgw",
  "key28": "62RsEEmuQA1iao3Ffw5W8MSfdtgUBVmzgCTZXYRxbj7uMnDu52z46HCBbzDeMHhpbANUB5tpR19cMZ58w5eMuc8R",
  "key29": "3m6FBpVNysUTdUkX6nCzfi9vT9ToGhgSLwA2H6K2NafKXa72BjnB4epd3ZTgWy9pXFeQD7BdNnA2jL4GALdW1Ajo",
  "key30": "PBG6DT415dNFmob6AxFxWh8G96RocTg5CPcSEf1j7M1iv6KDog2Kmhkp19cWRCE2Kea6dmuPGUkqiFo3Xx4JDdT",
  "key31": "2ozrP3hMBgt2Ry7c48wkU2CNoRhjfJJLsPnG8fodQe3hAyoEzUQmsCvKvi5KxZ1saXre4it4E8xyhm5Rko9Ntn3B",
  "key32": "PTLVtpEsX6E7dVv2GBLi4dkKudk7hvk2dyohL1NDisDDoxD6zBoER1WegiMpLMJyrpgQBPkhJGeKG2Pz7JvSB1F",
  "key33": "3eNBuAG4SJvERa6muZNLjzquUftY38fyNFgWhEbuPHasNo31E41nhDKrUuDA5gYepFnx2UodtdgJiP1mzLFA2x3q",
  "key34": "48fyTnEY6Y8xXBDXxbwdo2zZWLYJPwjS2DP5rwSqXzC8pvSxvkg8siFit5sAqt6SE9CLbozmEePCdTA3SYm9qBNY",
  "key35": "5HqZTu9ssJXFQT2cmV5cgU7daXcErVx5MMqN5n4qjMLPhqHYb3Ffn8io6ppXoojXxnTpEdrAr2xYRkXP4fpZ1RLF",
  "key36": "4MnJcqAN51hkga2gDKUjrj6YZtQLWrkbkmS8VGRJyQWwyyFAJTY5TV8t87aQzN5agZGbzy5MpTJGz1ZexypVTaZN",
  "key37": "41RnZVtBo9KtVgo4DtsBwJmtYdZU6Xvp22Dvy3Kk4DzL2N1qeUAZ6mqbENGBLVRMmWKA89eTmY44ouuPNPzJ2vfH"
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

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
    "52zVp1uK51DM6F86wjCpVi8GNQmHJTRuYuaF7LXsieQT8FGpNYX5sXuTW9bQ9R4V6iT75F5t4gupVaG9NaHUUwiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y2bSGAnsL1mnVLqiyinnEcU6BaxtGV8WkPBXMHuGb2HyNzuiLDDWtnZSMeaV7HeoSpeURd5t52cSXoo9PG1UHtR",
  "key1": "397p5jrXtVjZ9sh5D4gCC9x7qwKamnrmTCEhJ7cL99ZJ19bMfJYADKBTwyjgb7u5F8C1d2nA6jwTXBo3CbcoQn4a",
  "key2": "2pm9RgYxu5Y6b5PyxWeHUeVU5h4ra81NPB9oYD9KxXu1CsndK2JbSy185M96GKjwh1q6eeyAwmE61cjYkgbep1MB",
  "key3": "5tFHve2H15oG6zRmQ7sktcTpUhoHhGMTd3dh2k4q8LoRJZBhXyYGFfpKqirrGKpprWu3G3uuYLoAZrwN9iFa5szn",
  "key4": "3mKXPtcwAWkiQsjFMeAz7tkKvC4Yf8913o3pTTjrjJwQEJ7NFzrPbYvfjzM8P6mcDgN3WxMVdVa1p3r6RbScvX6R",
  "key5": "61JWApdVoBCLgQihfawR5Sabxk2TJ9yJgRjKh5EkHdeg4z6rGr8XawdLWN3fSyvk7w1gDGTxu46jbRXFWJqRU1Nf",
  "key6": "4fFkQeYr4KzQ8MdatWwv23MsFQHH7E9m5Swp7kW2gDrSv3SiYJm2A3p8Tat42xb777zKmCqwaxigt7KmGPoZivxx",
  "key7": "2YgM2y61tF5PcxCD6tSkEphjtUFef7cBTdKPPBLo8DmMmPZxVqku1WEFvSsvioejphT4z21BWJWromsbvQgzriqY",
  "key8": "2j49hFgfiUETdjv3HYUz4Vv9ASgh7zRJiMuXqpxUmoWY3fbVWUf2bg7vMrVmwS3UEyrcNvqvDoNjDziMG5PfdJj",
  "key9": "3cvspa1tZcwFYdDekYEbPwkSeDBBZpPuXkkxBahY39RSdRqmdnit7M3bUCuB6bpj4UGtuE3C3Lr3g75BM4JCwcnQ",
  "key10": "5hSgordx9f3J3RT5D2DRLaEtMfsnQ3t525jRQGREQ9YQhs5sjSRWejGQg1GVeULUBSHSWLQbTJYELpXKaVdtteNY",
  "key11": "4FaZD6aPheuLnacxZhPrzFnNX35tNEdwkBKivQZd4NeLvBHFpPD8VUx9wbC3QfEvT2i9ea6K8Cq4JZnmbzrh5xUt",
  "key12": "58MHe3vjvweou4A15m2FJZFVMyxumHehrKABQH1o2F5cyFQAhsdWEo3Lqctzba32yW9gbAHTWDfCsJgo8PMKmzzt",
  "key13": "2V4r1L7iXqkdJxgpztWTUfD4d7GzCvWabHuxoXVaoq8wKzjsRAp6r9nsDZitoyxeyDGh4qeibqvPAfGpqJUmEcsL",
  "key14": "2ir4adJtTDFFtzG9aDyvgV366gUrFmxGhfpZdWUEGBv9cKgUDetB4pSDTit22gwdbgbfujL3ytpReMgdGrrdm6Cf",
  "key15": "2gBeJMV87g3XqmYRsmYPDCcKzbND5Vmyagtp6buU8LujAwZwF4F4syic1DnaG328wQMG8W1E5vWPufTYDC9V9Bzd",
  "key16": "23GHn4XyBuGjqZdwLEuM47ADfHWMEiX9ucyoodaScsqAps2e51wjYKDtfvu66NT41jaaGQV5GaN72MB3Vw4jk8nf",
  "key17": "2c8A2vDyaowpz5wGzxfbwpQFAC9GguwyrQyNAJWFewtvrUadRcAwk8tbRkXuzogXTBLhaCeuBe8sNx1eG9uALvVk",
  "key18": "2Fux1FDApiJVwKJLXdior5P6FrQYffY2eaWi32rohaqKpu4uJa4XQy2EPyNzs2CXHG1Hhf4rMUcPj6BHfzPrw94S",
  "key19": "5ZyNauuuW3ksiZ51ZShTitvJpUE4czPiStEkwLRTs8dTNEwdzs5wBAjKbwJBACizEJk2ZYn6RFHDkMsmpT5T9jn1",
  "key20": "4vWhH7aYi9cxMx7Xz3S7JDWCid8pefKh3QMoQwzWiRRFhaxCwBBsC3tQyYRk4j1iK73Q9BJoGTGTMQJeLoXdo3ai",
  "key21": "8KtbLHDdztETe4cw5pgU6AEyJGtcZ79QRB1DNB3KVog7ZHoKik6FTFbnBggqofJhNpqzF8b4ZWyFhxUBpiA3qeA",
  "key22": "2H2rjRcptSbieWYZ1zKkKNAf16LqN3p5M9y3vTBgoaoQd24Z54o4FVr6ZixYTDbcxyAF7CY6hPZUR5HAnGDECVr7",
  "key23": "3Nsw9n8ghdeijeUsr9rGq1imNzhFtySfCPJ5PEdcx8enSEV5A21EkuzZFHEBNtivXMuQBrqp6TP3M7Chm9XgWwTB",
  "key24": "26sMkkc7UATKQ2rjhZn2qvwmwMxVFMq2TLKBEb4N1GbzhN3ZZD6U6gLJa8K9RGABoD4pzEczXnq8XyZiFAPbVrE1",
  "key25": "33u4iRsSpzxgYBvp2ubSNSURTNRDAcEGh8GffJ9c1wFBvfBTn7KsHUW6SjNM17KzXSdSMyjarsPGeg7AnsfWYwX9",
  "key26": "GCopHJVKbTR2xLQUAs4po21d9PNHu3cj4SbmN9NjhWDuobgrxHtSSU4g5JzEzqjtgwF3pQonTjgqMQSSpinB7on",
  "key27": "2LSrRHyZ8UF5dznGPY8QE69bfqgvZGmceDepVTR5j79fuWogXF95LjcrT78TXZir6c3hTErcAvA2tTQ34N5K7JPj",
  "key28": "3amokEB3VyZEVZRKKsq2Y56pWozR7GPF1qpixue1Z5DHpFvryP4Ds6dYY7QipYfVBdsxFibon8C7jM8GiTTaZcFg"
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

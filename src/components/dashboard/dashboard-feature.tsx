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
    "3hrLACwjBSikY148ggf7gBb5BZHTuszBKVwHyfi1DMfZze1AZHCEpRre7RHzhwN9NdUEnqfxdqSAtaNVLvYY3d6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UHSxsWAZW5fGvi7xGLbV5AcRdbLEh8DUrZi5WGgS9mvLGWELee49W5LatRcFFVgHPr9vt6jH7aFpAnPqJC3wQNU",
  "key1": "jsyQsoHgDJ8UdYGR4ptszFUwkVTNNwT6uZS8bqcHjGdDxCnC5f1PMVgm6hGk6PxxryfrgwZU8kA27HStu6mU4Ly",
  "key2": "4RgKgJ2GV8SXncX8DcXo7tLM1FaWhBN2eAi5fkfEPctdGurmrANsk9Wsr15kwpnuNp8DrNMR5w4Z7M5nTRRt1FxR",
  "key3": "3eDZViF113Fvth5rtHcypVJsvBjyvoDBvHfgQtu6sCLsGHKvNSemL2XFKCpM3rovo4KFeG74UNLsL7CoQ4kS7ebs",
  "key4": "5B15qD6eJ9f2YscW5noiPEy3JdS6YbQPzeoL6RV7ubhqkMis7QijFTXFhZMyfr33hbcbv5yAuThYdJW5KurLBpPy",
  "key5": "5hFtukMfhCTzDTu4iK3RuVWvyDKENSNAnYqLxgNuEe6Rz9A1EK16mJ964vMcpssWhf8ofZjeh536sNThAvv38c36",
  "key6": "Rh7EehDACU3RZQpkE2tHBqtKUB4YefKjAZKWnwKDg8H7R5bUXboTWtzaoPYiCv1kCTXLy9ByEjPuJuShbJUvBQX",
  "key7": "5o82yRqq64nE7Jo9P4CtiYPFupMw1df1jJbRv3EP6rE7RpRDbVJBuLf4PiG19Qyb94vJm8ucGkgd83DouZ2m2hZx",
  "key8": "i7QYEV4JXnu81y8qCJwqpbp5yqbivsEzZMDErzoPfQBab9zg4gdQffr33apZSJbbUJTfQyXrz5hkeXxpY4BeW1z",
  "key9": "2y2kgaS4semXjsgZPhXZSuJG4CVayE67tNj1YvmcGFRLErYKGbYZ3JU3oqFkAxBpzAjNBBJsHzoyrRKBFQ4Lys98",
  "key10": "3uKDdzobLu6GHZ6TgPKa8Fno6eRC9mKNRoa1bqa1iQGrEuDFcvrpcRQXwQHCCYpPJDWmpxNk9h9iwvqRctncR4fA",
  "key11": "65RwrJnLrFJcyEioMbb9o4sjVUV7PZsARigrPwhhazMgUJrxGyS3YoroQ7CbLA5YXAu2NjPB7X2YvhoxgosKnaj9",
  "key12": "55pJo2Wxd38rx5ffuiSsCfxVwZBUsfCfPmTfWcQyokorwRwK4nUVU8Y7Qq1M4HEjKXvzjr69FLCNNB8uW2Xwj1xK",
  "key13": "5h5e3v8nrjMdaYJhh2xn2qJugW1SwMguLnb6ZP5gVrb8DTr7Ym6aWzYuTPqivvBsvipEf9oYHL81gdVRCHNG3r9M",
  "key14": "3A9XPawUNKTyUd1cyzS7deNNVXyXCyQYaCYoL1haG7mVRRx1V1ufjgNex34kBQBZYE7kzMZSRCQbHHfSnXxJdq6r",
  "key15": "hHDAqKdTMiwsy4gxAJemuW41TX7DTh34WVqCR2MJxQx1WMvZ5JB9zKHxiyuvQRsHqzKgNL42srj5s5xrmF4Ej5n",
  "key16": "3DymwhemV7VM7pn5fBzAgizbAE7GSG9e6kSaq4ZF7EfEPkoCi5aZv6zcndXYWdXZ6kE32sQNYjz6Xi1G5LLRXRtc",
  "key17": "48nfGkdsSe6wCzfnE8p6vh2jy2Gbh6yQUAr3PiiMC9XrUipQaWgfguQttvzYDXEvrtHPAriBnQRrKoYWNfx8oUHh",
  "key18": "51c9G6XCkjs11ddVs1daEQ9NNcSyJiTAzzmWRvmaDNQHPt4NQGZkbySc1iHafuLivDgzsdBAhio9HSLfbZCvmLZ6",
  "key19": "59prvF9DQrBiiA5ARbyHPMFNhxU1yyNgzotdp9C7JcvTS34pABueKHFrHiX2qoefX8bQhg7CybCECEcTatfj5ttF",
  "key20": "5S31eXcjeAB7mbAjFy66jv8LDbr7amWoDAwpF63FytZqQGKYU12fwtJ8r5MUoLQtNAcNCNLYJDwGnY9qiPJBNAKo",
  "key21": "3JFoQXAGv8kcDbNFokEkCaTiYptTbg9R61qfAziKS8Cm7WB71RxBT9ZSpTYszbkuCkyvEypkWwMEJWJPoQXktfgh",
  "key22": "bfhHg3vaCmfp3EDaUQgumdtnTRzQh9CoEyyCAxmYqjC2Ep1gembt4RfzsEUCXzWzuCWHRqnBc1i8BfSA6goEvM7",
  "key23": "bfkfuqKbtEWzhTXLqBiKVgY5k9ymLpyYYcUDK9wAtfbkcA6utgY3agETftdKBVXZmtCezBU4TPY19RJFkb1mAaG",
  "key24": "637bTdqigMpvAoCsbgFUUdJFEZCVh9Pp3AMqFxbWvgAa6XspwGWhnpJVCm6RX9spgAJ9wxyov5nxrcig7UX7KC1H",
  "key25": "JyhDzrVPSUkF2ZFPFhrVvop9M6pLPut7JgJ6ZYwpV4GqAzyqLubU6c9QMXkJyD6iTY6wrRNifMZBsYYYMJXhnig",
  "key26": "4ycykPxiHcrFvTBMy2hskbdHCfa4j7v5DxMnuii78MTHQ9zv7kSp1EewXuTT54dB1jQQ18hNShC41QvurQMPhE7x",
  "key27": "DzYjbbsbAdRjsQ73Fn9EHMVZY6BPgQuiotMWFsfAm8eYPDs6yW85M3hsntAGya3Wtkwo6sAPAEQZzyNGkeopT3Q"
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

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
    "66xDBycQZuMGry2MM4EptbLzETgZk9JupZDytPcHzjj4FJMbjKu7mhwxwigXaV5K1wfQpdeFqGYuNtcJ59BJ1PAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NikWdBfBQABJhvzDyjz5JGzU7c7Kd6v6dWKTQ1dzY3vjCmArT68w2qWiQY23zMgHE2phT4pJi2DBEChbDvfg1b2",
  "key1": "4hjRRPezw4xAC3P3g8NENURBP7FNewgiXSUZfzWAZ6Bh6sDMrPypPowemyeUAafyRFRApvtMpM9NUpSC94FK3Cau",
  "key2": "NFjAZVKwjPrmVCxiLVFuZaeJgULVKGZBjqAwFELzeP64NcwjuTnue6u3NcSviQHMvYpyXu4GVbm76ou4Tux7Y1X",
  "key3": "2sgLGDNT3escAzMzavkouHJGfB5Te6q3TehWPVJpqsUZ9cn7RrNLxreKvaYifLRLmaHbndffRQHbRLucpgVsDUCF",
  "key4": "4k6JHqrpCDWP9Li9vxfnKZ2RjkFZkUoinR2rvK97s5QwUZ5xhd1H2YGfRu2a2ffzcUMyzUrZNVmaVW15NYXcBaEH",
  "key5": "rpr76HnhzeNVmbVKUiJsunhQwbiNF7v9C3qXrsMktH3hYxTsHSai7fG8sZy54BmRoFqjiG37esKEqP6vkPu2GzY",
  "key6": "4HuWYQ69P1qH7cHKXLZr3FmR8h8huURy2oNZ7RCRBJf2rhtjRnN2hDias3DT2rNsXn4SU3VeW76ZXmFzEnyAEETP",
  "key7": "3N5JkTxXM1nKsZRHaeA18eupuym3TxF7Nxj79YZ2QqvKMYpy8YCQvs7EVJDL1RFdJN4DmrtSvewYXQp3a5eT4S9U",
  "key8": "4BpP7MADjrq4p5cgHYkW3wjqfLMUAepqmcfEPnXSW47JJR7JsEkPp2ci47JwN6Z47NDJV33AhMFV9nYf74Mo3weR",
  "key9": "54D6Ld7uLayr6JMysDQVhJo4iSB9HQMhHWkdKkz4Tcp75ippBF8CPwjTnvwqcgkxxC2cCFxAKeHQzTdARGq1sey9",
  "key10": "2pJAm88vY5NZm8GbDTto46S1fv4N1dSt6v43wtnrrK5X5c2wMoVzDDnZJeNfRX2bPpegbgXbnAtcL3LQ4FqmN2FP",
  "key11": "3GUK1jJsHXWvKH4iZz7tQWFz3s6oSidqoczSLsiE5jq91vj4s24BivYGLMndAscJ7Ac53ixGBAJwQaN7Szs3Q5te",
  "key12": "8TWku9jKYzAR5MrVCmHV69zMxvkf7DmGXsj7216SRoyFCwoYbVave8spdKyiPJWj2HSeqrBX91TSuHAAqwFBbya",
  "key13": "3u9sSSR5yVsx3iFHdfrf1fUEGpqKu4KoHjHu347BFiXDnsej3mBXj8wGRpu5m7VDicq4YMzXMkhJbkfmNeF921HE",
  "key14": "2SCfTHTr9BizFyu7Qc8HotwyUR1evJc4TpTZ8RiFHZvVAjpaVhe5u8qAUYtEUSBwPJVMT37UJ2mTYEfsT69dDqZ1",
  "key15": "4n35q7DQCwxUiUMiFTpbpLbheKZn6mVGJDZz7Bakm2UsH23s6iVKaJY56tQX6UAYBZ4Mzet8oR7qGosTurmKtXQJ",
  "key16": "5FjeAsxn4EG7EYywSBpE7fLwskY652wBrM9pB8R8CJfAk9JsJdC9HrhvhuFdisyH3GzWAgUESEbBKuXGLpntL8WJ",
  "key17": "2VVczW5PTJzwfNzReAHLUhG5wX9mAaY9tJQnrw8mkJt7YDXvry9ebokFKZmpRtHMvNRJe8BMHhGjFY1r3uVDLyfs",
  "key18": "2x1jBdQJJLeGEW96iLUk9QAfp5VfXooJBLzPgod4PAhFrmzaMXVFMeT3Su8w6bzUumVfbAjtLHTHEE45EPcPWhJX",
  "key19": "56VyHgyNxUGimGKMsqTfdBcMejjzUWJnwt7czAWKUWmdheLMmcH717SyE4CreqhzzdYXryJFPWJYPDzrJxjrCoqa",
  "key20": "4mk8sUYtSU6XAobCvx3EogMpq4yDkmjrd9GH8CTZCMkfnJbup6Nr7nYS7Hgsy5fVgRjviTznyGKDkLZqwMc4SF9J",
  "key21": "tUnspV2JtuJ33qwAU3ZABJw57YNvp4c6mS3QjRXnVZKwCwTubNqLNpiJpqvTHnxd7s6ib8WJZWkm5bJq39BrbeP",
  "key22": "3qbNWvSUsqcr57U2Dt9TX7DAfYsfE944t2dieKLmGTGS5ADcbKoNb1YDPvHDiwyqL67oyDj7zmh6fhgD9xRZ91sH",
  "key23": "4FnAR2Xd6T79qymDZ8e5oCa5CZPbMRfQhonqgobFGaV96CSy9TRFwcyT98PTvKQDX1n1v9eabvJWXcoLthXnJiRV",
  "key24": "2NxHwMrmTNANCf1aoTK9VG8sx9AUgYFhG6XRfZmV2JZvKm6JjdbcjFNz9RNE2cRL2Sfh7jVzeGoVA4U6JAd9bxRw",
  "key25": "3UHtmjDVy6pnvsbgTUyo1PHLgwBBdbwkpZ3MzCtUhWAKtcjc55BJWgnrbANRQXJfJyyh7hB3ZM88JyuS9ebFafUx",
  "key26": "4kjhvyVPELo7sUkgJYhtoTCDM5c7P1GiPtiX2u7ue5Vch1ceTzwBxvtwchK34HBEbwk1ctJJ13ioRh1nTDCofQeJ",
  "key27": "3oG9pVRJyHEHUQ1Ry9mKaGGYtqNm6geXfmCWD948y1ZxribhqGux7buucLwx7AQjswJcgtiLKkhEAEJfBggqDXXp",
  "key28": "3hmh26BW31iUXRLx3y4BagNmmoUxUA1eGpJENVmWfBmtR3JmDrteB6U7y8u4oMS9cYVrwxgQYpTxC1SECJ1ZRhBS",
  "key29": "61w3fUS5zvALNu6jXcoJxU4wUMVtcLwiJc4jjwVT1pbK4mYxfRCFyWvKKJRA3LqjftuHZSUoLkrfG6etVNrHnGSp",
  "key30": "3M1qM26172fkRigNa6hvRaEFWuv1BBDXkwcQkGeydQFEAiWqmFxNheucqUC79NkAbsHSrT1dumdx6Vkfg8FyRnTg",
  "key31": "4KSBzwEdJUFYjenUGc3RRbvBfs5Hjn2PWPd3NSdQjeWbykz3SS1uaJMk1RLN7FDRtgNopsjfsZqU4rL1tR3mMCyK",
  "key32": "2t2F3wmW4ybUZr2JoWwEFQXPk2HDJMc5aVt73bavNYXuGH6YzVXKiRhs2u1viLiW5anryKF4Y4ngeMRVcZNU2uie",
  "key33": "5PU8cGPJC3oJr3Xer1duTkX4DuA83FXT5SymcPCJc75CGPrHK3v2AWzuQ3wH6VBB8jYEr9s783S1kP5tiUr5XDpq",
  "key34": "4cPF9HgQoWSAUqfk2BBoEjWrGtg96iaDWnsop3Zy7LnraeKRcDGsqM6XgfTXM5ziZ8niDfj3VfqicX71aEEwNXWW",
  "key35": "4xErpmcwsvgfgNfGm8SmBc6qDDxeXNbCJpUM4QAFJAjq9ESTPo9XsXUqTtG9idA2mkgNsmdxp41HPjiFZgHBNc4B",
  "key36": "dM7syT2nc5G79DkwazdgmDf1p7P6GCjo4CLitZ86DBCrVvKRLZ8Fo3noZn4xhbeqqcQiks7SMBX5d4Afvjt2Lmu",
  "key37": "Ka8vZHP3keAHek62JnFEtu9G2XiM2DqtQYU7BsXDFyMJ81YhXMbFJj2FmKWyNX6z31uybGVZTLtGSuX14CXySST"
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

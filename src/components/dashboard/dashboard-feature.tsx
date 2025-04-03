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
    "2kS9vbinRDCW3p4ZywQzEEenE9N53mEA34GNP9YYYkffJKECbydV1ZAJE9xmcfeoRtjS61GsxUEMMxpMTqo3JspX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJNzXAkcMbrN3Ed634TeUEdSLv5dyyonRVpi92xY1pxUN5zf4koAE7LSDq5diA3DKqYj6DAS1qLKoNe1QRgvw3p",
  "key1": "5CBX3YDnSoDxMGTjVUAjMZVxxCoAN1bffAvdujCE8EQ9K9uey9ZUMfNMXmLEmFZ4b94WfkFdWRF7g1KBmtJHNpL4",
  "key2": "4tPSPTuE1CUCGum36zaHRJXwazwaNWonaTWyF4GwewHNVDCRqy2SS4tkq1w9a4DgP6z8LPeMEPaNm4dBCZy2E83u",
  "key3": "WM4YaK8abTCH47evETwtuRYLD54G3vp5xZy75xRgq51djoKVMGXimADFYEg6wKkZpCKWtGd1DYcTG5jiR7hwSNq",
  "key4": "4PJtVmANVM36gnJDBuN9kEA1urJHwHhnhYHRKvVsonNfNFsNg1PvkteyCLyg9gaWnYCSKa3zHFu3RBY1fyD6JLoj",
  "key5": "5yXcFPnN2oqd8T7ax9PMtYDfcbUFvGbaECMSH5rjHPSczCZbbFX4aeYpqrbGMrVxZ1hMAaz1e46Re93wPhD9ZEzL",
  "key6": "2Wu99yifRGBgBAWLNZ1Wh8GHNoXsYgy5XKaRZ7HWbTUVyanXSCe4EvUvbTfwLNFbRASW8aUJgMpc1rhUzA5J5vL6",
  "key7": "3GW1oQQDT7yYtXGN5V82wxrHwbqyVERMsf2rwu9zazQDY77uesKErPXQiASaj5wr58F3sNigb5H4nDMUhgJi62F6",
  "key8": "5TFm7Jz9eBsJUScqpFJs43u5nMuhS5LGbBXRxQyWWccSHm2Bh6vV5oA2BDa6gEBHjXzcoWqDJ6kmAmxsSj6yG46u",
  "key9": "Cp82xz56chbC1H4zwX2SP1o683dXbDqb9U1Wf6wMB1C1ac5Emy3ECGPQYkL1oTEEFhpHS2qqjWazUYxkW8MKrTi",
  "key10": "NSpNjN8dgHRspKXfVWMUfLCD2P6GDqNkSwh9KSJj3VzPAWwYaXi4yVYWjpL3yyAhce4MyGrfFD4zpNHKifjUt5X",
  "key11": "NENpShRHaapexRB1JDmFom9F9nBnD3wGJiTxBqZhq4taPVzK6Px1ivbg9BA5jfJX7jPcDVxzW4s9sNboc1qYMxq",
  "key12": "2FdFvdXzEkMmasJto7BkxyehpVVnrYwodvjsNhrTPnmZpt6EBzE91y1WSRpSBoXpxzMY4heKuwJT5KEXahKp61mp",
  "key13": "3cUeyHKmgP3mTrb3U3KWAirbRCjEJT7GRP7zeehaxzGvcwPy7TSpbCts2MZP6wpqgzip8z4L1pv1srFZZYmgLZLe",
  "key14": "2oymL6WjFnLCLk1gQZjgwCzxbfjbZHzuea3KQzkygi5k59W7tVTAqyywJqSiR6iqRifyWEAnPM3ddECyB5BpC8zp",
  "key15": "46pFAeCZN8RvwvCnkzdzdicWudsJgAL9UA5kdi7DuG2nrjtWQSxRfRpwXJrUqBg3G9846oGHuGX42dPLwDHwDXmq",
  "key16": "5wAdxXmxHsiXYnWqYnzeJ2m7FexHWce7mS9LT7Xo5QaRk8Fc6PgEnGQccXkmUt6ooiRdDY9aEHC1z9Dg37pevKVD",
  "key17": "VCqvCpoYLy3D9Jt6gkYjRgJNjBAnSEoWu9GN2Eiz1ZQSY54eZQ3hgP388LiDh4x1rxpvqwfbPzEz5n8qnkqDcXG",
  "key18": "xoJ4B1K6yz5UVFHmqUfyxr9iNm8qiseoe2x3LCMBYTkkVzmRk414AxHpFwXdf7syzbeAnwdu4hftggZx6n5oWFq",
  "key19": "3Fn43BQE2H8orcfCrM2WiafnDrbDpEPoGTJKmkCLz4yk7uqCfq3LL9tsbHbSw4WhdskTWNQnwnH8MX4vSA1jRps8",
  "key20": "5VahgvtiideJMurepyQnXdwxneqqGvVZmUrA7h2SSWZ9dAzJsP1VGE3eb9ToW4sCQ1aspmwqXbmd5uHaPJgTPRiN",
  "key21": "z5EbeNRSxUhmNvLgoXrAaZ9nVv5s7C2fXudqkLHvGrCvLACVNVmQvdeb1DYrCgKrST7rZZ42ZYfCbuRxPjkHyTS",
  "key22": "2PLUhzhdzaaviRkiuJS8bkKg8Fnt5J4iRVeftdgeusVq5FfwPonqE1SMTzarbcVsrMUh5TuNnanCW9PNjc1ErjqZ",
  "key23": "2Ztgra1LiGSuRwiXXG7SSM2LPfEoT72HonewKYVKgqELNUxyi2Nc8UxA9k9PLHD4WEEci9GH8hWYqAVDwnX2s2vg",
  "key24": "2Vc7Edv42rHrdaf6knxbMkway22SvuYdkKV7kLsHuYgeXnMfSkdwARw6WYjh2fhPfdqGdSxti5ucvsCtWWN7w9aJ",
  "key25": "2ALj6udMLXiZTGDTVhPVkJCeFjHmneEQZuhqSFipVkFYyRu6cdru4gpAYyRkm2YXjVg4ra8EnzsGmFfZNok4fBoD",
  "key26": "37MjAeRrBY3mj6DWEuu83iBc1coyBk9uwurUFPCcP1zbpxURS5Ajs64HEhT8ddTmNje61byESviWbggJs5tCD193",
  "key27": "B5xpipGJBbcknP2fFCRMvFyzVF8vfXYrrQgVAEW45BLmKZsH5gqGNYZFQ1Xpbez9XFATR8qUBaQTG2JPvGyhTj3",
  "key28": "5VspJd1gBzskCBAh75K627hm37mkQHj1d26nbAYtcgpFPrcZaAg3UZK1ynyEcFWHTjthZH1dMeSGpbDBNWyewe88",
  "key29": "2sVULbvHEwTAgmzPbKd3SniDMzX2XngHeD5MtnTmLCEcE38jiyyRHen59aPK9rfgSHzPvXUBLeBsEAtJSeQpcg94",
  "key30": "2avJ6mN2hhfPYqzfaUhygG6PtHUZW4mkxLBXq5RKEidh4E5x3PfuFBwMNkitwbZarSUdhGkqJodGzxK9E1Pm7LPx",
  "key31": "5cThiCJPD4RUfqwDYptEWCxxNjRezNbVaE3EWizDb1gwvmidRhfC3z8VdcRp8Sb3YJdXvKuf4PW8UdfzsRJJPU2x",
  "key32": "pEYHDbRnoECM5Rpzh1dwuMYMC5fVWLCcz8aAS2xmzNybHs3LPTbS3df2N5ZGBtBeiMDyX36FoG6R6ZVsLREDJrb",
  "key33": "5BaEGXVgccbk77HizfZDidiTznjcz372cxctmJVBK1qUGLCGNjXdtdj6M7M3N365uJwDt1jdSiDRZaFokQocQXQo",
  "key34": "BuZuHMTuZWm6Ri3879jegEbQahh4aK6kRtyuYArQvx6sgN8AKAp3PJ6u5Uxf6qoGYYZjYxA7huPDLr5Wk9jJZ3C",
  "key35": "3jmpCvZD83wzFtTyTSJTK8wbkiv466M7kJc4p1sTr2E4G9DSopWpiCcdiJRRHibviw6nWN9LqTBCjFQgw8TUhgB9",
  "key36": "4WcTLgqwBCfHzqLU6Uew3MgKZKefAVDAQENAXAFwPkGHDwNEeaR4Qn6Hh7rwouERxyUHL1GvZ15dgPP4iKJZgWHb",
  "key37": "YiNfujhseet2kHs9RrTLiQ8LrZfGx1AkFKLNsCV4BVoavBquzUzTHWTPW7CcAtzXT4FBodRxwJ8qwFxDDDK43Uv",
  "key38": "594swck3QetWz8ZRbiCFvULjvj8HHcqGgBY2KTWCNhxhwp746WWiLTxCVU73R78D5TJk2zBmH8SZDyqB3UQxTWEo",
  "key39": "2qMbib2SLD861QwMumzuq5Mx6XScZtHcHynmcMFMruRraaxFCLcebEn7D76PXCGBRQdnoSsqLM8hEf6ptmEoDuaV",
  "key40": "128oc92PPweYRSy5wGAD7gutHzBWjfn7aJRSSMzqwBi6ZwtwE2DpSFHS66JEiBPdLKLUVpfr9WupmBbcCukZpb9g",
  "key41": "4bNDv2VmX6iKWfDLhjt5y93ZzEgYYFPv3BAkV6ov5Jq4d5haHfeUxNHXf7QyvU5er47BnmSXk5wSgLyA1rWeJMLH",
  "key42": "XXngKBaENjSDSjrJMsfmacKLdHguBmbrDwAekJDVdFtYXeXjBY5PPN3nMhiPs6qsCocYnP2YJ2erMN9JogPQwB4"
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

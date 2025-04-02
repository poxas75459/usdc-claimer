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
    "4bjLkdC5fgfrzb7paWjumBCHFExxDBYfz5ANLqunAFv7HKZ2uf2ZbatW68c3QAxpiY7TknktdnUFJSms9BWQkjTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fm4DYmCPhPHAdNZPucQaKrG5CbnaSqCvK3WyCji7x3ywQcoAkNMYAhaiCpvoKWJbuL7W6XSVBcK7o8t9Cw8Sw5",
  "key1": "dHdRnv2K4MBPHt6JQcpyB1vZ8wTdpBbGZWRDKWCKfuUtuQQof5KW5v7DBvxNL8uaJDo7dPox8G7XrnvUefnvxxS",
  "key2": "V3W9GgxKo6a7Pxt2KLKHB9SZP12qpSKYnxDq7G6ttQfMkYEDv2hL6hkZD96CJ5wX3kNoaJK6b9QNL1aP2B7cSas",
  "key3": "3Kvv336FoFq7NBafgzvd7kwqy2f6RFoTVjEexfaak6uzPUyyivQbJ8CZTdB8w5oJXHcyagnfF5cE8rAezsr3Rgf9",
  "key4": "4GgB6oC38eA5hyWMRoTNLjKpUzojU6wDZR5EVyaPfdxBwm19ernTqgUb3Pupgqv65mCXYHeqrHxVuCg3tMeJQsMx",
  "key5": "2BGW1gCidksKxpSr8BvYTP5BnTuaWAuANLftDpxEa42XWfWi6tCwU8A5EozbxxHvzBBLMc68yf3Ap7fumpEyM5ic",
  "key6": "4H28ikDANJQ1eWQ8vfyJrijTSifmaszYPFGLqUAU19LAZtky3BjZ4xY8XC7zwsfpPT6apzg2MEoYgsoPK2jrMB8j",
  "key7": "tEoMLJTPWVZoa96ZaaEpDCMJDMFk2KT5E4Jv9jAnvmwPzYC9sx36Qr773pENpX3YJFdGh65GhmizRg2pF58V5cN",
  "key8": "2dzFDmduwzZY2miiqhBXi38diHv45pjzYng7bzeAEaQdtU8zYNSkhXMpDQf5BnYPvV87FrUVZjGSJP7dft8y76bK",
  "key9": "3jacNfDriauFhkqDr4tnQAXi7ngBi6zMpH5Q7XVDDN714mvrc8aqkRgETfwJ1EZoU3mJoeDVeU1tuAjQNawifFJS",
  "key10": "5McLsUKWNk3VGZQLfBR5FSrNa2ZQo9BXQdpEwRmTFGiwTBuQZGMvtVDEviRsqwAukfLvCwiwWd3ej5eXmga9YaJD",
  "key11": "5R4nQ3DBvPhafMLxwxCfEyA1aBHU6hYMWhYHdoVxoxbwPDAWAGacezYqEn1wNL61BSZ18M5fC35wLiwvp9zMG5pc",
  "key12": "2eiT7Jnr6QiyGsGAsgmCdV9EgSFqTDWzJ7UwrXfXm3MhVbfqE3EfEykWjdNmstnoDaaJAZuXNijmmR67QRfWd5vm",
  "key13": "47Bs1aPiRE8RxGkMGNw8waFHz9mgZyJ4pZa7Nz92CNX34pi9YagZGZ8bR8cChXsLqPjpMhwQSvvjnxkMGCjZoAXc",
  "key14": "3ksAhHsvWg9y9Bjz4P9VaXAsCMb9kRoZAAVimhHF6bY1QXkrfdHVQUER1E9SFZ4DysbRQ6YrHg84tMawMMUF8rWQ",
  "key15": "2sB2p9NuUsuUuXfz5ZzjcwtcGFb3TAbogXuEnY39BwY8A3q5uV7XRKi4DBaCKBYNL8kSio3QxtTwxHKDhxgjihZ6",
  "key16": "56Neuk8bP3kZNcSEpH9V4rW9JsTLsBPXfnDa7q4c4U789JTZnfi5kVW4Js6Gfa6qL8EaXe2f9gHDc8qUNMQrxmYA",
  "key17": "4DV9755YGiR5c6Sxppvcguf9t6GW8CqJHMvEtSsDFoyZhcMHeYocGxJQ2jFBACt9uvY5gjDRJcPMokvymKiTe8d",
  "key18": "3A3gUVEG6YxpDkhYJUgRD3WUdRnCgBXc37e5jrFAjPfUN2uot16pmoi5n4xygJw7kDrC76iKPWykBNLYZA4Kn99R",
  "key19": "4bRGjhWyXx26rnnFLE3QDqsE59EUxBRCmmMKrHQaizUv8GF48txMRdo8s6LisxcJQ4w8hi59jaupQccYNqG2Fjar",
  "key20": "4ggB4aKsKHz5mPJ5RpEDqRhqjwoTccrKZo8XBHRa2F8bwoPyHB7vetiVVSGbxHRhUc44iFQTuFfCWRkCMPeTJWHf",
  "key21": "2XdbmaGxJYPcREYM9zJvoxubNWpNPg66T1o8wJj48VYQUsjjaGjiZofDhKXChdyxNyVefCEaZ3abpT3g7p7zCwgg",
  "key22": "2zCpvXk8vgprXtzPKrA3bV3ea4HdWAgx5EMMRdTXfHXJCUSxApeEaCNevSyNdYS7QD74FujCZjunYvkjK89FvsXa",
  "key23": "2HYYStcTRuMGMs3zztj52gFWPuLmvUYbwuY2rtUMd98ovDkjoiS7jdegwT8YLzCLkRY2U6tswzMEkdYWA4B515Dv",
  "key24": "4zoKtTZT3nLq7h8YDAgB3PwogBxQxDfQB6PR2pYJHGjJzsvho5sYdEiAwcb8MHmSA6p14i96phfjCH7ZdHNZV6dy",
  "key25": "3k9KvoaSrBC5GxxA9AbXU5VezjzP2DtPFdfexNCcjjhYspGzDf3s7XCwgQsb8ti7Ryrn51WqS3cRhpw1GNiPfzTd",
  "key26": "44Ff4fGkMiiEbSGRqQuQBQUcV8H6NDSWT3QwcWEB86gCUwsJhRVHcgH5ACDghE2DsNaNChzQD8UZ9cah65xSEN65",
  "key27": "7GFPUxhF6CfTuiRY2BR5WUYhWgS2TRF85zdbcWPBYXZBCoEJtz3WRZbPwNK4azisKdbnYtoNv2Uc2BnAdphbxkF",
  "key28": "5AkoFdsSAwqGh7gxGMY6QLLUNpH5424T78iaRRotJrNtCE8xryYLBYHAaSqYJBm3G8R81jJT72g7jbsGUhEPKkZo",
  "key29": "UexFX2F7GXz3ABajVsua3iTFYWiU3oCBadDXzPmF8Gd5iNRzyJDLgMRyv8umnHjUY6ANGMrEnKvvUR9pagqMk6Q",
  "key30": "3dvqRFZWbYhNCqUut4rCcyp8DgdqadMP2Fp2tGyAazD4ZLGt27hfx1Lc6xkB69taj3NL32awakbmp7KDenCnxF4F",
  "key31": "3g6psE3K6vWjcpkdMWd833txWS15fWZNZPxkYtvHERTsiWiuwv99D2MU6sLvtMa37ArH5wnUYX68zNs3uRM1r2HH",
  "key32": "5JoRJzxfnMJr5UHwWt4Ka7ixL6ShR4bHy1zJWk5wHbUWVAXeuQH7dsT2REcSgMrfn1noXQpHdtM4cGwqXRMCUVHu",
  "key33": "2pyi7m26BSVDG3ZraC38sxHmaeisEhg5dTtfLQJhY1VmguFLYLtha9k8VraYmufwzQc9GKXmgp8eBpidbTEy6gJ7",
  "key34": "2TbK6y8Mk1c4jQgVaJKuJij5HBXtHs3ScVmaFYGXj9jTr3b4zSjwz445bmYDcH6ZRFC4jzds8MTuo4Gv3GbBh5jS",
  "key35": "pUTPkYN9G1CzmKugTLWmhi1m6ZAsk2vs4KcxH1B8qGCwfR5gQg98cEV7JWKUFfPgX9BZrx8MjZaHaEJxn4JuPTK",
  "key36": "3AjdkMfVP2yiXRCSktN1u9AK1DWi6bkEqdBFYkinHiuKSaC5YPvHjUfGx2vZJpMc8yNoAZCvj2JBmKEd1mznPdLj",
  "key37": "3q3AGtuAYJXmcPKHggkC6HtmBZsDsG1isGwQJm1szSkL1khwUuouVrjkUSQGLcgRzPqvomJEVMaxFChBE71W4p3M",
  "key38": "3CTrgKFMHW1AUWBe3o3d3ziye6UoezTmMUp2bwLACwWkxJRARTu26EVACDbrTdvXSusajbzUMiRjBkxQsrwvVz93",
  "key39": "4FigXMMMpSk5YZL2GHp75myvNPyfa5RGcs3xKiV2b717qUKX2KojMKuupzJ388cgqD1m44xvB6Wt2afQr79RarhG",
  "key40": "2LwF8xYZwWMD1k1xvYJNHRyFWAh4wx9Md7DfpNk34fg2nXyBuxJavfudBZ8QfuSuWhJWvCP4n6swzT1u3qD97HTP",
  "key41": "3b5p1CNDCjsf33ZRbVdj3JuW941C8g1rvi258kWzZ5J1kmMnMi5kQAa1eRoC7z4we9pLVZQTCQyZqsPp5r5Duh7U",
  "key42": "37aWzXNRc1Pbgk1DEcNJi1e5XxGCGZHedKtdN6MisJC9vDU5rqDxT2yQ7cTnJCbp7NV6UHqHaQoKtUaPMUS5ZNbE"
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

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
    "4BqPzUpqH9Py3duaFgL2qh6Rn7btsLau7kAsuCWjHhVMHcSU3uQu6MaAZEgcFDbamiL1rWRukMQgL3DSgNtM1ZWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uQqiyC4GJPQkTNsYSD3v9uHPhxZH5HGpcK7Enmu3zGk886dU1mzr6v5GCwY2DK1Vk69urBBdgKkRHfyxocMn94V",
  "key1": "2eYTpZyzA18htVVqyRu8cuvxJBcSBmncE276HmqfSB51w6bc3D8TD7NzztLHbPQoSS8v4n4uGFMAfui8YK75qZjc",
  "key2": "61nLpdYu9aas8KZvFGUmUMpHyubL957hnCEENMLcPoPMw4uddu6cN8zWCVJoLuqocTyJJidDN7nZpPaL7hUhoVQy",
  "key3": "UccM8eLRFRmKPizAhk7xpdV7jmFxg8NkvPuUJTVUp1t4w7sRMu3j3iMT1bK5a4XEqwdnRypmbJcbQBoAYVHLhGj",
  "key4": "65odoLNWHBmbsfUmKm7BxF41UnsWVsLEVxG9LUeV5Xdok1UEoRRPnNZvAzJPGcnNDEtc7fY6YaTvPgRhvPt1cL9G",
  "key5": "644JHPopnfT92QHSogEEFceTBncWgFw88tJkDAQMZ2szYQqdSh15CkLPuM2UiEu5gu2dcBWk6Jd7rbTVb8S8zkHU",
  "key6": "2wiohu4k7thtCRxoTyVNxTzAv8vK4V9VwWPwQLHtJNQY4zicZKKjZfr9gwUjbXEEVovH5N5MD3jQQe3JzUdMpsqa",
  "key7": "K2dWSQ1vc3aGUBaxxCLjMs4NQ7ZSunyX99z8VtB5bdiccfxyAkTvX4cFrs9r779GidVU9Rw4pj3EjPDZp8yp6Ui",
  "key8": "3WbnLW7jwrnWjHB3XeVX4HT6XwHNTu4HFWgQJtHP3zYUahGAjwLYHwhtZcjLo8EnMy8rgBMgnAv3bGV5bXdfw3yM",
  "key9": "2dS8sn5d8kaBvhbCG5AKms1SmNkE3RDcRKzrp41tzDfN4VsiXKBx1r3a7evR2fmbmdzXb9VAEoTT8F2aT5pS6Foq",
  "key10": "5pwsnMmrnJshrM4QPdVUGHS75fp6pVpopzc5zKaCBMeX6JDLW7yFjX6sGPryHBjfgjeQgjJznKPBAy9nr2zPwuE3",
  "key11": "SaaTjrunVXX7qPouTTWGjbrcCHApcziqCfjjwNChQptTxwAfscyG1qDWFtBcQTtDQW4qBRm7pCJjxoBumznge1x",
  "key12": "6vEXVbLeYRWWRuG6kbcED7FXh5rv1o5NkCNhNPDzTcMuVsB5d24pJUkQRKvnB99vgdQcJAYCySzjCtNYyK34Ggz",
  "key13": "21guyHJN5Fhzh1dkzoPqCmJ3gzRAFnUzgeyjbRW74EUcoUNsPd4Kzawrvta1DiHA6GCb8RJEyKWMufg3jyGx7cPE",
  "key14": "4i3uXhv1pbixc867uYhxPi7GxyQenEJDwhGa16eC1JWj9CC8PJYErXnQg8PYhrhpBNhivMGZt9ZveSKJpZRVH9NS",
  "key15": "adyiDvLPYFFqiyGeFWmHhdzGjQjVs735PT7vFjqPbbGTnPdE7TPr3hARVkJq4htPTybMT5UdYGV4rufDGCGZsAe",
  "key16": "4sKVrHsR39HcE4BM1W1TRQ4A2U8a1pAPx7k5AZxWpJSGv3b5ZU4pQforfPDUvcfzyYaEv4C5AwKiBTPVrr8GsShW",
  "key17": "pocJXiikdMuf3qeyMz2PaoPx9qUyhXNJwHhsiHo1jqXj89iAT9U4NjS97vAXKbZgTAmL4JdDwa6eiU5BhhHF1mT",
  "key18": "4ZQtsfGJs85PjzTeAjM12BdKTb9pky6ryXfbx2CtNNP5ryDNbSP2hj3tqougs2P3Ej7Gz9oWJBbzWtLPq74DSdMz",
  "key19": "rXPEyiFLVPqkHPatmsDmKb8DnCjDxwkDstaY9pG7GCjWRgUEerHgRHFNBaKgvvaqzG8jbvTrxywgvLjNRNQP9cZ",
  "key20": "cv5XBhKEZ4J2C9vPTCWFEfk8Y6QKUg8q9iVDJw8nXY8Xt6v5JKQww1mBVmD8QVig18G5Jiv8i1ZtkN799XcMTpS",
  "key21": "3n4Fe9VZZYDQ1kpbcNnU4rtsRdVycMupP2N7MPDZiqcygNShbXziEv1tZp1dGoVrFV8UhTK6TaCL6zDZ4bXoPC64",
  "key22": "4k2UqqbtNWMLXgWUniGBnHyDnHzAUHLLFjgmzTUFu6kAR8k7EH5bs3yxgs4gkBKn82MMVw6wyWwwU1rAHBrHrzbc",
  "key23": "63KUiEH7ySjsbaEDdYhRvfjopoxiyEfc95io7HN3z6akRDMMguERyKYa93MoRWtsP5gqcfLXYVTRKsfgkC2A7oNe",
  "key24": "3BabP6xdcgaSZJh1fiqHHDro5wf8QuugcQRcTT5oCUe99cKo3MXthkob8FMcjMZditHH4VnrbUJcGcTBnLcjH8YC",
  "key25": "4DDsxTqoXdS8Y33YNz6hciuKC5a61a1Z74y1rgf8ruKvDxuDKBAvMzyGUUGDzYwTk1BJqcopnoZiBjTiMbs2f34U",
  "key26": "2XFQxBuTHwhZMU6eFN6ohezCM3RYCezDCA5cePP2STbXxpJbpzwKmuerDixbob3hA1DksHJRganGC4hyPvzXvCzB",
  "key27": "35BgKEBnb5v4N5EvTuVPkPe5iwj8iLWKP5NJS7197a9Mb9zR9vHmZxddt4ieR1kKc5HoGqEhU9ZhNxsTV6mZnNBg",
  "key28": "5ymLaMrVfx3u89MuDQpgaoSB75rQMbDTunKM2KQp4oWLiDpKV6okJh4dijDE6tKfWm8VMLzYouNUnzQ4q3rX74fy",
  "key29": "MFdgDBTeS4phXaLHVo1RGxEyAkipF4Atc1JHoYJNSeic6jCDo1ztuaxJxVGfYpXfFnqv8Cnew7njVHsi4oemJLA",
  "key30": "28dXDHLpMEwP2MxExogD51Pjnb7EHUgx7UCYtWXPpR4M23BZZ5YWTfwaHVKCa9SjfE9bpCbgjbWA1oM6zP98R3G4",
  "key31": "HvgtFJoFYUfNwkxxS6sfv9yGe5Dn4EYPCMNkgjwKbxpxSv2HzvGKzp5KsK1X7Y5nBPVJRi9a5KHdKZVN52stsKf",
  "key32": "5ejFX1eXaD4pyU3nJYagKZ34dPEW3zLs1YLcHr6jxvqc4o6MN55h6c1dg2pBcbExU5HsCVCb8Y1GN7D1gTTjkS62",
  "key33": "2LiP3E4bXmA9xFrPb1AMDBTaFbzdQVfdDaQP7Q6QmkBXmTkH7V8r7GERTf7BgcpqSyF6k51ZJPCteyboTzDoqdS7",
  "key34": "3ni3pcEqgrcxq4ieQxXWBeWjwtoy2sy5awFY4QEPgeTHRuCPyP8ENdjJEPUjBpiGBpeJfFt8UMfSqFmwKno6U2VW",
  "key35": "FhowPhE452Ftto9qamEhcCrBmWUToSPSGS3yusNE37g8NBrZmEppBJJyj9MV4PBoPopmyfwMSiRN7Z44Mu4yKBy",
  "key36": "24aRb1oSxxGXxqLe3YHpdpcNs1yaDNuGf7x2i9p8Q2z7ouYKXbQcdfiR44HGk4gP9vUg7HiA3JapzbT6GLpK6e6K",
  "key37": "5p3ZsBjC8PwMoEjseZpzc4x9LACUqsTZiEEqSCc6YDLNnf7m7xFU4VtryEzCijwPYYxNvvjawtvEVZFkYuSREHj1",
  "key38": "NEYN49bnRb9AdWczXWa9jekhnrcvrh5hUN8nzjrxobFPrJ1hV8CWEm6ViJSqLqjYcF9ysXdG6J2d2Xt7dzwDHTP",
  "key39": "6vHc7WXCNt1VvpocR9gospaQ3JLuzFQv5f5bejzWzt3zGEKHhgKzzrNV4TH5HnyVU4YYnHABjPc1UvSFvQUPnYQ",
  "key40": "5LM1J7aNR5P41VHwpKExaEJbSJKdC8U52pV5arTaoNwzcvEBDYSqGA3iso9aN75oETxuKMzTcLKAv6LKFSJ5BTm5",
  "key41": "4oAoBj7DzYpvDF6VWCtWCcUnn19p2X2XJ7YvACv7NngvPdEz3KH9dDibsMuHSYeQ4jiXtrdzxSnyvKxp7uJp5uZ1",
  "key42": "5sVJ7Cy7G4iHjftAmXHaKmBhGghUGWp3DeXaRP8FdrmAZ2SGd8GzeX3x9Mganz3cb9bsEJSy4VmNmwhTFwDtpA3g",
  "key43": "2d5ie4i6UG6nnorGWHtYU19F1fHrezu8spifkncTmQmywCXnCoTpVrH99QJMofooLUMBZyAx3LkAgvAd5kRumL4f",
  "key44": "5BKvWV27bTPhxBMsh5Rdzn6SdXShkpj2Y6z3N97QsrVZE3uhZQnmafUyeqtHudWF1fCRYWMH8eCxqprbC8rwMLy9",
  "key45": "4DSjtPafDcwmVC4CfSWGimHRcqhShP8pvDRvgCQVc6TLigxg2UsjHPfW1kVXLhMBccfa7rsSxXSoovWaJjcPY8W4",
  "key46": "39Jm8AGQLcmbsdUGB6KNm7gWxv551iB4AiC6SYZkTAEG9GXV6toTSVtMvzAFCSqMroZFEFw9nVcbXjB9vCxLm69K",
  "key47": "4A2CajVgACJkCBvAuT7AHx3E6DcGAQTB6qSjRq1gm6LrEWgGoJ3HQdA6SVUGa8MEBHAqRKLEegm8bRdj3n1oWP1S",
  "key48": "dgLP9eFW5Jz1f2VccKNZUmbggAVZbSVsExXLtT4mnxFX47CwzZjEkvqyuYf8qYQWuC7FsyGVc4MFjoaP2RYAVVV",
  "key49": "4yWNuascumzJq8qAGQUA3zAY3MeSbEw5mYydvHFvQdU8nnmmNFosB9aEy6m1k22GULFYtoiSp8r8k6849ryLWtJm"
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

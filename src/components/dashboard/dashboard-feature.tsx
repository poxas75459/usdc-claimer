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
    "JEtvpvjFVKWc892zWVCqHyhTuWv1FNpsASzm6giKVMrApNxBhKU8eAe68afEfvry28r8ediv9gFow1yPNVrxJcL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QTrAhmdmE1YJcMXfT4u99RTMoQHaqVQjt6BQs7BeDUfpqaTSrgKjNCfwdEhXeffBY4Z9Gvzo9T8sQgBQnN7hjvV",
  "key1": "urHZmX3fifk9kg3owGLy89Mxxaj8qGiQmiw2UaKx1yCgXjGntkcurrf2eYAGRP5Y3Wi6HpnXqFvxTXueWkqQrkV",
  "key2": "AmV7Ya9XLjjx4fGxEAomGNLpUmsQBKtoHN1qDkXC2iBjSnjBeAF3tNb8EVHPacPXauZRZigaviL9obuaUepdTTs",
  "key3": "4SrQ6ezjH92L7j2NQcXYx3vcCRnR2DRtiaZXGxfGGah4aLvjwK4TY3wTxKJPcXPYZVyLWQfk9mNDVRpnn3VRuPLc",
  "key4": "4LMcQaCBZq1VEn3FcNvWcBT9rMsXxiwAQawvGhzi3CaJs4fBW1Ckm3wAx9e1F2uXnKbWXmZeNqsbUGg4yYokpcPb",
  "key5": "2Nv8eh8T3WuapP3FSyqMr4sRoxxaQUkEHkzJ76XmRXTxiv7etBsk11tzJPBgx1gpd22a5VVwiqvhaUk7NBuTiB5d",
  "key6": "KsNiqJaLe3UnuwMsuoyrK4Nuk3pZsrCfRo4LbPukqBwnLDe1px7hVDfc9jo9nTb8ANEpaCyhTSJo2vmnL1upgFm",
  "key7": "55KLkDEmZUgDRoJRaRrjz3gnAMLayBe5HE5thYXwMbxRoKudmEn1gDuddUcFQgh8wkLFMzHD9w1r212eS8Y7i1ZQ",
  "key8": "5bZgne1kkoPwgeUzNfVdWctWmJhJLcAGUAygaqTzfPvmXKEXBsX9MkknfafhVX3VghpTgDdLupShM7ek3G6B3PuT",
  "key9": "4mFPVirYY1AWq7GyZrWmJnjVUVHEn8Z82qm6k497SrVpaxTSetZq46LDXG6j4xDRvkstNBt68S6gyQudquyUin7Z",
  "key10": "5MmFQ2owBy3KBBZUwJgWLxzE5hn22jR4cPKCermVkQfxzBpaE2vFyjCqyMbppFMdRVkaHGv2twbSN6YYeRkWBGgf",
  "key11": "8zrgBQ2G57hv2MD7KNfVkhcK8kj4WXuWnFBu5TtqELAVdgvXZMMyezdBX2AQFG6PkAFRNvKc9vfF6dbZjrr1fmS",
  "key12": "P6ttUsw2AeibZVAb8qsBaQPqqjwebosYV2KiNUDk5opBXK6xwFubF8fMemATCbP7GQa6APXR55GSGa6TJU41vUE",
  "key13": "2sCU6yS86pNRvvYTYDfDvSFwn1LSrN1aRkkPgewEQecB2RDhrgxzYRDbNAWWWGrVqoPxti8xcoASQJypSvEDMJPV",
  "key14": "4CShCUfbZs1jZS8YURNXT3r94vbkedZBCM1HWMwYnVZ3dgRqfhTcex9ap7V2Vhi7G7CntxmvtwkAVV27DEgwrGs4",
  "key15": "6tyV5B5MAuVgfaBrV37zf445uyS5pCqmrtFqtUR2RHBMtwohriaifoYoznmWgM9udryK7furScDPq4st11Ne55S",
  "key16": "3Hnji2FwVZsCH3B3PeMWCBeZVia3rFjBkusWSK5LA1LLp7oSPpakim6K524fjUiQ8SKhgnULLBvSuo8J1EBQvZaw",
  "key17": "9697njDuzLvF1GqSFUui1T7kxMDf6DTwdbF8aP3rwjGwweDCASqG3qrxrtSaGcbdRiM5NfbidSTdYQPqZWspi7o",
  "key18": "63MnMCSr4aEXJC4Vp6oqPPU8hA9PGKQNB8qESR9SDpJugiqJscweWaT8YnvRNmJGuqY6oGndWekoEwwx598C7tdo",
  "key19": "3Tt3c1QHAvJX7s9ovPUN1EzUBCJqFkFyxiV5aZNpHkmhNxi1TvjrJVW6TmU3jq65UGSQ7U54XjsTjk96FCH4bEuE",
  "key20": "yMTfZLRpmHpp1rxsLgadatMwkk41yyruX4Qf8usvJbVAgbrrhQkoLQHrxFy56NtqcGhCefkAcRnXHHCjUUXMCcc",
  "key21": "5CyWAUp8WVYqgU9ZM8t5MYwLBpDC8RzrKuTcdtJyHkzqBMGHCKRWzMRNoXrCUpkBRvbgFcwrm7YMWYLmZpDGQUvx",
  "key22": "5HDX5tq2CTLzuRkn5xR6syx2gDEobtxhY4nrM7J2C8ger2ZZJbNGN7sWdKQiJip4nJHSKsAVcGdpw26YsfxZnPDi",
  "key23": "5qAvRSCxtnTC1oq4ABS3RJz2ZdeFpBChySbWjXy2RjpzWLptdrq9C4Z5hpeyUawE7JJwAUBVRsbFNo2nrFNZZRd1",
  "key24": "33P2JkbQtfXsK5MMEyhnVRGnT2aMdBfb5eESGefxfu7pJqyYEfktgrgBhG9kX2EvfTzXdA1e1sDc3qQUXmu1TxqY",
  "key25": "5YdxjydDJYov846XUevMJ5PrzmGotJcEoTCmgomexbXaHaPxqQJV5boECyRfdC88Y37obzqm9EFc74aVZQrW7c4Q",
  "key26": "52HJFJwRYztLkwxtnhZgbR5Y9NFm631gHdBSWeoSuRFcvD3ub9ftSnSF3umTetFj4dpJdr4g42baiWishBgDedjA",
  "key27": "2bFewUirznqmzXUDJqzm5PggLoDK1nFz7aXFHzjDvatWdxvrbLgrjrRd3F3BT6YpqzB8Dk7ZddmZ4KJ7EGsuKvd2",
  "key28": "5A1xsGrwLyoCxw97GHQrEXgdbjcgfD2g6mJYFzXxF6H2zJrP6vfytKUWV8n2kievCSGnXJXY6aoJjwa9jcGzqLUM",
  "key29": "XViNqb6CMEsH2NTvnKhfB7Tztagu2rzpkcRgSy2nRNjLeqr87P42huwY3o4Tcr3K7qfQPfxiiTGra9xNJddrBK4",
  "key30": "2DCWTvisexfsdzK1W1A88UdSLLKRohDxuKMbSrkXxePUG2MupE9FSp6Rrdf8XbqG7v6jL2yZJYdkNNvh3oM38D5C",
  "key31": "5cKDH7mTD3QAetmt4aeEi66rpvmbzUJ5soqqyv6CLQrooW6txSFvjutWbRhSjWjiiAHX3bKFk4sY5iaU4W2MvXVP",
  "key32": "5ELwtqkKr1Ah2qsEDSkM6xrYKjk8tQRu48Rr86Xq2do48ooAg8PdBDc9mWJESERWnu8oZkVbUgMCVfpcDsPXaf8z",
  "key33": "4Nf4km35yYNjTa2k4siMZd6CRJ8uYBYeWkV4eWb2Zj1WS3X4KFi9JaxbLDKZXggQpj2aFsooz1tx5tDU9LZKfkA7",
  "key34": "4dgsGqcFocZZRW27AY2kcwaxQwnBo83US5RbPuytCfNWNTR7y3pNS9wUPs2K15dhULD8oq61NsnoRfNpGhsuwHPo",
  "key35": "ew8oTXSJZtewD5eVyvLG1puuqLXE6JNrf9QRwNM5LEqydeD36g95hgaa5o1R1vi4v9tdC6fryC9NCvnn5uMR7Bj",
  "key36": "3WEfQSuxmDW5iJBpraWYKV7eJeHznebULbScTm8fsaLpuBGh1ymWDmRSCVRqDDFRvPkRB9DzHJ9g3XL8hKagJ3fB",
  "key37": "3Giemqn7wW2vpSQRbans1JeBhDgCxbTxKizVr2GUD7iggQYDy7pWEqdb2Je9XcpkVTck3daHhAriqffqmsyaXmrw",
  "key38": "4YJjMR9fCoWGuYtsmsbegu4itx4CBEtgm49CHmQWGyeXjuYFkV7R65Hrjb5PnQxa7BNAZAujR7CFRj5CZMwf6M4B",
  "key39": "4sKNhyuVYReTqdhyfCfQvXA8zjw9sJ32m7HCyv54DTqAf6f5A3EXKB6kGhiayY69aKLs9oovZxmwBbmh8PSPQK51"
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

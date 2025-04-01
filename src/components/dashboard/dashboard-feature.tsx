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
    "6ambJ3skXggR6FcjRtj9vRGBDGxgr4iQ9HRBJbKm5wzZAAgqnBwKeUcfRwnQBhMWbiKJUVkWTjgsZtrDpVwsuGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mjaWbDL3fpTCmcd5XBf4pmrgkMedhS5YxUN3fuApo8y9fLqzGTinAyk3BCqxFuLSKyWzBYJSb3Wva7beS7fkA9n",
  "key1": "4cgHWX8KLU5QRqRRPB1NJTQYGSgahnH5SEsMewGajZfQa9uKT2RcL6aAxkzU315VEiTbUP1y4t73gZvZZg1xq1Ah",
  "key2": "4UEQ4Zkrh8Yw2ajR6PCLZwp1qjo8Hy2swvRuJZwzGFiKdNtkuvNC9LEfmQSianAjUouFvqGMhdrW6B1eKUHvUNrw",
  "key3": "cEL2chqpbsvQdTC9Vb5S1vKNUUgMV4q3w2T9rC1f72YDEMywcHPh1BrHyCkRydN2EyjbcgDvB8QZHNT2xsm6N9E",
  "key4": "3CLgebbFtiiJ7d6ANP5iaYoBcSqWRxBaTrDwUKedrEuAkeJG1VULKbXtRYc5sggA7yBqNV9FxQmV74Sss1auucnK",
  "key5": "tEonS8ZYDRqa71n2fzJT8GbYQCAvb5pscg72YrV9Rq4e6xXD37uk1WAL8w5zG4nkfrs4HTfoM2sb7AfVFQNN1Ld",
  "key6": "2z5qdyerdVJW3oPtEveQitMuSFXmyhfc9SNsBD3AdeiK4w8Vn5wnKf2B7feK9bnxFN2KxCHD3f8Lt9NQUp6z6rB8",
  "key7": "CajFDR4BZJAQvU9igTCQMEF5ccLEyGBkbEbjjpuDn2zCpKJgXrV9GNjbYWwxHTmKVKQFE3NjdfJQ17bBxrY61vM",
  "key8": "5ZKNc2tcJQu43iwMtWDnmik94SjYYoDPUBqtzzy6DsvkHijCF3VNKCtJ6VkQAYLi5Zf3Eg7xeMgT6GzmQfmqDwDA",
  "key9": "3sEgdzKQc6aC1RJZ9aNvKgDdS7PuJ9GokNnEQVGpPYwS5G5Weu7tsCuWweiDQcH4qpcDuzbnA9riSEWxzkExhiC8",
  "key10": "ZPhpeRT42od7QcT5pUuk1xJhmn7hx7cMV97Z5cZMk1AkaooAupocQHXzaixkyMX77fuJTPDswurv96bpBDyCJsD",
  "key11": "5SD7JCgxjvS3XAxFasxbzoZ7nUpfAJQEmYF4njq2RB8Zzqrfh9ttYCRivM1Fze21bR35v2mcXiszTNDr4JNd637f",
  "key12": "3K1ih22BrNYk1s17MiTUAFUbcidwgL5cRRU3HZHrMmpX9dJNYgLnQDPgbVVbzmff2zyUeNnz7brcXXpeJzuCWE2V",
  "key13": "31zH3AQ3zffcbykx5tBSbRH3jiiiEsu5xJMkspkN8m4cYUApSc6Bifu8o7fnhCz8CHn3RmDD8JiVBtVKFHDWjC1w",
  "key14": "2LBUEZ5Fng1D8yV5P7mdQH3qQHzV7ScUqQAVniTjev9JUF3oKiuvi9EEQB8LvcHYrcJRnhPtCGZaFwnaEuoHiuQ6",
  "key15": "5x3eAwqeeZceEUm9DSvzC6KXvdadduZp5vi4n9jUD72oJ9XMxgVQhN2Fq7WzYTyMq16a6F4672ixZqojon21bB3Y",
  "key16": "fAsQGM2mqUTDLUfkP8HCCurhn3mag5iUBEu4VsQPEkTXoB7ZqP2byHFyuxVnee4Nz6zGKXsTnxiwhbGhgMbZh4E",
  "key17": "39BbHtKDxe8DohzVc9hdwdECt9ua4sRrLF9aaDTBNskPngza7pz7ZamLe6kjUmbhDA8f8wsSEToERY2CbTkjRqr7",
  "key18": "2nDbJvSYBTrtdNLmaUA1TckAjWCspH8QMzeNpYAZGgmnVvNwc9La9R3ySumVnexJXmn8vACWzgKKWACFLjG14MVT",
  "key19": "47Uh6kxN646h5F5XugWyi4N49mLMXF5NChH6FnhBEKvzmYRxQA2cnUF1MmM9SaY8vgvF4EUNvNDAmV196DFQK7yW",
  "key20": "5iiYSFnDPtEwvLijdg7mKBRrGFaCyPUDi5WnhmXLxVvJgER1LTEFRmqDzMhidqDShdkpugRhTitFXhztfmTRmTGp",
  "key21": "3rKwiz6orJLTNB48pvzmci9mFFN81RPbWuV6M4YMr9nDsEG3bejZBKYH6Wp7ovjAAqUqPCFHQTyogKYSjZArAUmT",
  "key22": "2vfchZMRgA64mrd9mPdb71DAJ5UortGiy6BV3p1hPK4wW19DUnXvXhnGtWSx6wkQAkC2kbmDyjYjYzQuFMJvurAE",
  "key23": "3ac6ihSpy1LbEZDsMqDwacx8NaKuoCxsNGmNDsTpJ4wZKiQYLN4quQneNarP5Ki4i36xSE5JhbHtiJ1MByNPwg8D",
  "key24": "5kqqTXgcfNAckdWKaVV86uPNbyHuTFnvaDyejVmva72AEvxXGgxDbRmTuzRjmkJs6KTDUhwGHo9UYFUdot2Dq8m3",
  "key25": "2djsJ7PDcD4K2fiGDQBZ51w7r4xV4x3dZ7xnM2hkNEnKyeg67xFcsVMjPhDkWWWCLg3N7XcgfW9dgLPLj4YEAEmZ",
  "key26": "2WfPyoyvCNZvKL9Z6b5bc8mtAxNssU743UNMe79EMPZmQzZczc9ziAW1YNbvzWxWYuvC5Sx8KHWzdX8mC7dLqtGi",
  "key27": "kHTGfRWezR1vmNCYFS9kyZkCA83PJ7hXHDw81qeY6opizTsrM5TomdkQqs5QDkKv7weVfcESDJBFHKa19ztdKxW",
  "key28": "4DB5NHN1cdWBy47UXNwpNEqNrNaD4w2eYkh1WiETCHdCQLRk4qLk6E1VdTUWLEnea2m1HrLpWDMga6rk8KH7QJD7",
  "key29": "5VHhWQquDZ9LhwUFTsahnXo3ovPfhNdza1bFYh5EsxAwmh3G9fUMQkzckC5H7TQuN7QxZHVCojouiNBtv2sQYVzm",
  "key30": "5o5ZrUU2d7XFoiipPFqJpbMEX5hJjM2R3zTyRCuf5b6u2BPBusjSiotZK141VKQsXqpCgx9GjwyRBHCcsc42ouaa",
  "key31": "38weFkLqjLbV2RwsgpA8YxLbrZtLfNLmm81vxs7cganENFUkNQoohdvAk9RpGYXuFHGk1fFmTRjGC7pCrR1zmoTm",
  "key32": "CiLt4fYMUdZ9yNFvesmKJFZBzvGZPGbxHmoycDnzcbzjF3CreKY46vy3FkWdxScFwZEAZMJbwvzhCGcM1gL493s",
  "key33": "WNqsTnCeCiZReDgMYYgsWEiNGz6DpQJQdtwgp7UsvMDRRiLGkGK88QJJzUwshkQLRf6LS9Aj6CM3S4gtwsrUbzJ",
  "key34": "61XNZRsvMQ5YJmZ4VujjGk59Fw4C5KwSCSP6zYHmLXVNkeACM85LqqTR38Y9H7DQaqwi2CdizFdQJvRLx26gYD4a",
  "key35": "3eahDLh8nbGqnogedf1LacDoydqkRfJJndZZVAMm9UTLPkMtvVDue8tcG9zvFDsnpdQhrvMRbTrgK7H3tG3hJ4cg",
  "key36": "zWPdupG4WxfGo9YsyeADNjqSFCFrFc3tZSzHBSGDkLEdUdLwAuhj8G7PuThWYr1d9tNYpoeVsXcj9ekv5G51WH8",
  "key37": "4q4fAkfe6EFK1q6a8qryz4SgG8dCmrJiL9yhWAvMsmjmC5QYN4SQGajLmFneezGuqsiEF7NEfZH6oDLwjFe6zh4P",
  "key38": "3zQRTarmvugB9yg6NxBrzVGd9fbCWFGQo5eMCALzYPSY3ZLwhU8Dmt162bcGckF86LYNfRLhoSEMaVaKV5GQvPwx",
  "key39": "2Xq5skttNTRyWceCSDLLztuEwGMjhkN3UgUFwuGiEtvBMyid7S1yhTv8aET2dnKD44ExRynm62SLCSLSxhcfNZBk"
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

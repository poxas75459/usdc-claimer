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
    "2FCuh4x65pQ3T6exsVvnFaGFLm6hSXieuxtMaPkEPEMHLHLSgXFLhtKLHqfi5mFB5tPncBSpKihAhAmD69yioxqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QW5NJbFNGAjjMcwkfc3S1tUMpQ49ici33oK7JSJ5juxvtd7hEG5Wkkr7aQZar8Mi2WnABsjH51ktNzPLCvw2hfJ",
  "key1": "4YHGpcitYEWnJ2pHjbYJEtfvuMsqXSWLbBhKtDwLTB4PQA17RiXxwxxdDa3fxmWcxtcTZ4EWd8obbGsPfxBPUiv5",
  "key2": "4nqFvmHZFM9puvMQC9Xzoto2FGeaouULUhSVT8VRZ2E6rnbBaZqo4qMHGEzhGFMFtxfWEvD8Uqx6KKrTQ3vzWArK",
  "key3": "3bQCRpBR3c71dX1zV8oMcfrnUEwF7Z6pxivF5dYwoZSNzex6Ske6GN5tZ42vyRq5AGS65zwSQWrLaorA3eJ7dsyd",
  "key4": "4eKqrZmf3vZyqZLzKPQAGUhuTwSM7aJZR3g9YyefHBGahSaWbaVuMGrZKiarSEmVDE9WjPCbBk6aeJngruSmGeTk",
  "key5": "2kHSiAZMvAKH8DhSc26ebaLs3exb4YG7Dba13TmUDMVepSBj3fKTqpoNEtVhMVEFNUz1WmeSgacZyp14QVxmgrRQ",
  "key6": "5Wfeunp4rD8FXitUJVb1JHYEQb6hEYi6J5Uopk6eFh7ewWhGuGec8c4miaWNs93Mi83Com4idR9MkGeZ9EBBZPbK",
  "key7": "5orbYH4BQTCoDhzZ7V9t1upQnF6D4MAKpmVWtcu99DHMw2y67myJiZmBh6t24hHPebgNyf8EJUsLGMbCnDHUSCeY",
  "key8": "4pw8GEeKdfnGcg2MU5EK1QHvKdkdL8apkvwy4axT5FxLgdkRzP3zhgT1UkjaeASE64C76HtfejsUVYttjgKyS7fz",
  "key9": "2nWY9DR8X8jnEwQ4hK6mkxkJhbdtJGB7zu78KSqL12TDFJDgqJYs8FxfRojs25FQDgsXFraQdqpTw6pQHSYdwcdo",
  "key10": "2RzN2ZF3ssGpuPoDFo6F9S7dar7yVFEtqo4HgzDM3HCwnXHPg5gQ5wPSA21sjNVDhSydE4MQAzoQoyG8jgVvCK9p",
  "key11": "bxezwSQy1ffAG3YM593DwTtzwaF7g3ZCNC7uGnocKGS4sHfTtvt34VnK6QrvFHqwxLbZ1PcaFfY6ocdY3F5V4YE",
  "key12": "5xuEMunaNRoBtghSmJqWpEWPiHkxtNK7GXfUYi2cPAF4ZN2yKnsxFtDXjgH4a5UTtBP2ju5aDadccNHtDm6amkM4",
  "key13": "5kJjV81MGmNwjCGBZo9rQDo99RsKuAsxN2DYj3gnJ8bApzbreyYV5qmEYrX2wu95KD61o1jPRV2rFWAT7vxMJqrA",
  "key14": "38QCJbqbbapSKp4Hx6K5QfWqKadwuXPpzbcGEwd5xjAqkaTmVRqWPZHi5ncoXoadSBiVchD9oFBtBoepdHpvk7CE",
  "key15": "2pXkcbF9e5xeFeATVR1smPnmh6HvMSUhUgo9rUtxjYVfFyE8JhSubQTMnnKJowjtaSfW8RhZWAGJskcqQGjAUAr2",
  "key16": "4cEkC2k9JLYgSyRM8RgCRhvmNwv2ZwaboViGwyPqARD3FkvhnWMEMV1VnHeuSNxYm8JbGmz1PpzfptXakH13yNBe",
  "key17": "3TtZhzymqkkPZFU95B3ErkHMB7x4DxemFUZenQ8b7itnoWHe4TPumJKofhV9i7m95NBmd6PnKukTDHvykgcwvo4C",
  "key18": "2rTnHyi9LYDnVRN4iqWeMgEDkPhd3ocrzoWoBKBfSW9BQrJGo6pBsW8f2g5XG9cuNKSm1xDMc1fWGBsx8bzBrL23",
  "key19": "39RNym1PmXTWXi7f5yTPVxVyStmnvhXXWVmfz5h6z3YbSbpjEAkgTTf91EB7jVfTAMD7DLqowFcDTRaqfBPhWmkM",
  "key20": "xwbALcTe8xFmZThsvjHJxZyeJdEBkFYD6bvcm8zX6sqKd4DTPx1gDUgYEjc5QzWWTmrjyF9KZJ5gwNMbMUpGJFv",
  "key21": "3ZsHN1Pms69WVYB2pssVATvcRRXGtahw3SCxQzxzKg5FezrqeUxfPqB32v3xqvEKj8cBDhJWhZtjoXoengFfrTN6",
  "key22": "297MGRZgZsExNSC5yYeQAiAD3ZrLb3q3p933mA7ds1r8d6ktvDmtUTmZCGUZjx9oVm6Syh4S3BP2rrAHE476QRZ6",
  "key23": "2BsmkAdd8BKrcsq8QG7DqSbzDocYpuC9qhPUYMKvCgq5SkZZhVu9imPYHW4WC39iQ6GA7L4EayK6F5kKhESYAgVK",
  "key24": "5XAJg6VMAbS7kk7ZvviEvphLWFkBrvSNp7KfaxiYajvNjBJ6GUvdGoNapmfgBXRth6nsW6xhA5dxQJZrs2unBQkv",
  "key25": "3jGakBC3pWdD6cRbSGPiq8VfR5BYYhH8kDf82fRES5FGt7LmvMH2t3ywV3uNvtJggKccbZJNcCBvHFiYzVRANAMe",
  "key26": "2NjJWKuF1LAAXp8At2Lv5rfpYej5jchFRML8TVthwauvXH13Y1YJoyVcvJ5o7kcpde3D6qwXju2z7F5anSV3jvTf",
  "key27": "5KyrpHyhKSZxMEqVrjTCSkYbpYTHiZGqv2QVHvGZ2n3HSEFJA972JthCSnzytjid1NfCXT1DNGMDuVb2rxVLLNeA",
  "key28": "41DkyRYGwgtxCWAcjpo6aUVZJfGyF8ku8XFp2uCoGwLZmutxbJ9Z3oDqAS8gfZnYhQNBHJTDCYefATp14pJShsgu",
  "key29": "4jtGa2YzWMtm8qw3xQNDjXEiVEkGGqm7VZc16aHBkN6dpB5YahSPpQv61KXacF5tRKQZVrnq4mR9B23mHDqgNMVS"
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

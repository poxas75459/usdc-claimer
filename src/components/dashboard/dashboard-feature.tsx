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
    "5eMZKBbv6rW3yUc8B3HWoimA1dn56DVWWvgE5WYSBsSc4m4YDvb9DjJndZDwp1XAuwXEsCnauAtShxa5shmEJpUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hstqLrNjs1hKiogYxfunS7HkQrQ4a1CD5jqoGb5bZ32eiUmdzQcPtgWKcC4PTtw1SqZh11XUXso5WTL9u4ayzPu",
  "key1": "2TrcG16J5SZsS5vny32xQz236BQGU1CKKYHkL5uWn4uv6gsqVgNvZ4gSrtma9muULyLJXteLqjYCtkMLbnJqZ1iy",
  "key2": "3BHyQyx3gs3httHuV7F1W5QZqEP5QdYVpNx42rPNqedL3BXjr6rRaSEoyozFPxvBS4U3SUe3hSj9FXQKKNZLUMvt",
  "key3": "21CVDk9X7rdVZBoyPkHdveyQSq2njC2C9z9eiULNV64pg5zfvTruucUPKj7JC7naEip2mfLLPDMBsnmzjB1zvFFq",
  "key4": "5Tiy9zsCJUkcDfczsWPqBoncwJBJdtiBLB3o1Wqr7K8rPYezwtyKGdSBQpC2HkFidW6uwP3H5YgMTUPntNQ3jGDV",
  "key5": "2t9e1VVHiDn3wbCEZAa89KRVjG8Pg1nunZdtQK54n8a7nAudkP1kLAPvpFruTq4XRrfjxAU4PsjhpcVJB1RfAmKw",
  "key6": "2FzvkAam5JgJK2nWqq7jgEAXHJMnEybhUYhPTRRM2QUnugG6Gp46e8s6DCkPFZrDaFiJ6LhdqCXJBh3M1s4vY48Q",
  "key7": "5HU3fkcXW2iZLUdZwEbbczuBMjG4VWWFnx5nsVr4BXN4xqHkToBMCBoSVGpHZRK5ojXvgWHQvQ47xr2V6rd5pEs8",
  "key8": "5HwNGXeZGN3HSEGoX3sgAaaRdyGVoQDvLsUzEh7feEFfP1QWoJsqHbdA1Zig6ZCbVRfn8dMUAg7enCz9Ajftm1LG",
  "key9": "5f8i1psZVe5rL5MuptKaU7M4YNYeqiiPmj6RA6bnAyn15H3ZtupKedMVMYbShmWNMxzpgNhApqZjg4DoozK1FKFr",
  "key10": "3fmpSGBLjTE9c4WLFzUbU1gg9ZyFtuwNjYgTNm9p9eZ5dWBC1M52WASjLS1UKwyjhmLeRkKivYKCe1ePxFx3pNWZ",
  "key11": "2JpkoLrNQLpRBX2dWZkYavMdFh58qjBxeAiBeLXg8nQ3QSCPjKQFmyiWi2RGTS1eT5KtgqNkxsqPmKjAdwuRSukc",
  "key12": "67oAkpTiW9iLJwdL37tPmQSvqkmv5L6unCordWN5GTvoLbPR9VdiW3aXqHzBiNez6r2kMUqwojsBoLBcL9AJopTU",
  "key13": "5gW6yXAfRKTPugUvCekhTERWgRiJxbicALcxtW19xxL6GcXHHmeeoeoxJGtS8WuyW4Ctf3iETfYDrhGq3yBg5FLc",
  "key14": "5uLHtf7t2cX4XnVsLfwPPk7gjT7zocrL7zWZozLQbxuEhZBChtJSsk4qnBC4C2csXRAhdNjt9XZuDFuApKgLcqF8",
  "key15": "2Z9YrwjP8QonaBGnYyPFZgJ9mSqaN6i92CQPHKtzGEhRMADgBK1fW51sWJftpRQmsh32mxrGX36LCApTWUtNzoKs",
  "key16": "29ZgLttRMLcdVLtyvqx1j9ohqZB9bzhLsHKgmZg94UAuYBzyBd8n1h6MiQJntrxDpCBMmWHKoP8mLCR3prF9KVMG",
  "key17": "5r22VfgMJAaFcS8H7f6XoVGjndukCM6Uy9h4EQSyS58YKKcYS4s9snW3pzZaKrPo5V9G7kdqZTp1FEC7PM7tigTR",
  "key18": "TaCCNvNu4qUw2WHmSGqQbgyfU2bU7q8gZUuECgZoaVEkiz2ycjHjoqtm1vVDovt8Nq8LNbckmZB2buho9e6PzPy",
  "key19": "2Zv9ZtYLL1jhMLYz2jPoBX7WfrDTFFsbFA5FpgVHd2L6TdNfzmtKQcrCPp4ApsLZ9rGoBmZZQHiu4FFKioetr8G",
  "key20": "451rHmtDJZiFAYWaTB6D3D4mWo86ZWEQw7koB94PAbQfG6dYv59m7krjzThtYwGiyP8ReeUqFM5Z5yw9Zdtk8Na8",
  "key21": "fASxLkDfZrHjwgodC6cmCWSrwX2zWFe9WJ3sPAydoG58VXD4TL28YpZUnHQm4hd1DF2RQr8JuEjH2h8EziiNZBJ",
  "key22": "5QqAMDbw8z9BQtrjqcwCbB9tQcNXNFXQWTa6WRscYGjxsLpnwiJz1pgMTZMBo1dWQH2458AseC7aWvmVtQ2qhmiv",
  "key23": "4EAn4tpLnUsAebrGmbXcDFW4xqHaa82vhEXAZt4q8afeqcUtbm2ttukREZpB2yAAk3M4YfpT7ZPzkQpo1owQBFhd",
  "key24": "32f88hT1b6tgBfBjy7rYKhofNGaXLtnxtkh7LCzNvP7Z8jbqLqDFSRirxRLbxge7JvVTt7UrLjhorNm977Htq1aF",
  "key25": "35qhhsieNVGJYVBN2v99dqNgeEi9CVWjZHr4yXF6azKxRsyj4ouNt79qziVqu8z9hSWUBayuURQUTS38prnTd5YB",
  "key26": "62ZBqg8ShhrkZReuh5atvtiKrW83HRqvzFnUuQ2bwMnHjELcctJYXsvtdAVGPrYa1RxepoRC8LYALZcdP2x4PMA7",
  "key27": "5comF4QhGT6j5TZqYrHAUhyFEKg7SfTXG7XKqXAyoui9otg2QUe1PfN4zY52FYiP6Dgx4HbjEiFSV4hg3zzpep9P",
  "key28": "3cSgQhhFXwgYTAykakpbg6QYDur33i5TDc1vmfLue1haog2JkQPpwSuveRPyYpcdHSCveufm7jZbsjzXJ2mLSk6p",
  "key29": "iVv7nvzPiMeyV63wwTqyTujfx7js8qU6DME3gCByafJDt2JZiQ2ToGuaRu8LfWEHMdscYboF4kPCzSoAeJ7CcqR",
  "key30": "2njERnSqKU4Utg77FEYrFXBxWMxmuCZY6CFnZ4faTxaiiAVDasjHYTwpGsevuABuHuqjz7mAd4hicoNipUvhiToB",
  "key31": "9ebKPfxfXb15dcuDHZq4CN6gUmWaTqUNdr6hPUkayRHW31AJK8bEwSeoPwXBtxz6fSqtvf7yGb11J8UjGfzTKwK",
  "key32": "5iMzaudaUnQ5GUa9jkftvpPkmk1xddwfjXHVVZ4F4Api5CRXVTcZuetKxrJBfXYraNCqYtMNHqnRsGk9hjYCFMCe",
  "key33": "2Et5qyq5rRF9QavoLtQdcXtdprb84L4HpNskUyRM6S1QZLVFp71mnZQ8JGntALTXqCBTa17MQnNDom7JakFs9VGi",
  "key34": "5x8C7ZNa5QUzMEo1ZiwQ4HCnkPkJJwv6jNJGVC6FBwt8eYyZyJ8foqyiKaNtu9MDjL71Cqb7Gy39XTosG3QTpnSU",
  "key35": "54JFz38W1LjUmU7b8FjQZsQY2Ma3F1uoGkVv9PTSc1mryyRkDE9RWfHmRa4hhBmYiPRuUzRygiSQw9jfKhypibeL",
  "key36": "5Wt54CxPLWdhLVFEYiZ46trpK1dnnuRDGxWcvgiCvzEHKPJSSLz91E91Sh7pW5JUAXeQ95DAVYQ8jSU5nJreUS63"
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

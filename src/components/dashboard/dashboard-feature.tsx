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
    "42GKAqvGhdkhvrgvN3sL48nseQmroqVFQWD1BNzRpMeN95age891KCehEfEfEKmv54dD43y8Lrd2PNVukWPo7UV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T5nw6YA61Z7y8BtRBD7QeanGYrKUkkw3vZ4JxnZveauTBsghDjqZMbLdgDyk1axnvdN4qHwtVmnvFmLuo18W1UQ",
  "key1": "2QKrxMFXHaMumE4bBckBpfTSRAQdHyhfnBXzbL8CRLBmacg1S99nmQFr6RA2QuKbEDz6WeKqtzGzwUHFWUNfZRG9",
  "key2": "2xZzmRfxSYuhXhQBPoULp8zFLinWB5qYe57yW3d5YtMvi9xusWmwC5tBRmDwZzHaPjpMbcKbys7dcvh1rsG3BSmE",
  "key3": "3SXFLFLTGsSVRQCeVurugYEMRiSehtdrctuU6wtVXfwsfqxvAnL5Mzf2wPxjt15WAAD1tZ3c55UcGaLMrhZ7N1iz",
  "key4": "2UivUZPbFYv99VmjYEbWn8wgYVgpc85WMFA2kL77Yf7WFkdPc4DCRKyaisCF6JRyn9RcMNZMFRzYcwFYq2fyXi5f",
  "key5": "3RyXW342HJGtFzBEKuJ62cq4pARYvJCX5rmtfGmrmefyv7iryDjLfxsWmVEBP1o2ZUf27CMN13ZtTPjVFLVDUPCN",
  "key6": "5MRJiF1GYPLAyYnfJxCc2apbGEXXURuBh6FKvnUsnR5CY7C4yihqGncSRjsEJJfGVCumWs9dC5Kuxc9Ps8qhoqWT",
  "key7": "jHNG6tAFooD11fnt6wS4SXxwrwnSSg6ThjTEq52UrJ45gEAh4KRNBzaHaCQGZSw9A671yQULtoQKCpiRYxJbESi",
  "key8": "cf9itAXRSck8EQ9mxMp4GNHHUjhHbTScuFng24bdKZHv2Bt7PWBmwau9gLLaqukoSeLecPYjmTqYw88EHHhiRKu",
  "key9": "HjByYbkbvYSYS8qzSLkGs91WHh7ES2tcc6mrx8ubkbFJsqm2R97Z136RhxYqg5vXsuthmbQ2i9HYdw6cHPkZdTK",
  "key10": "4i7UvfVJvBmKnhUPpj3snyaD6HozgXLsaugKx9TEXpeZGJJTAXjsMhKTaNrFyDMVhDJeicNq1rBLJM45gS8YjaPk",
  "key11": "3sDa4VDWp8HAeMRpvmFdiD3U33kiXmCFveMvkDMZHLRRvSVhKiu3ZHCV9UeFvXx5bssaSCiinRfV5zHeTcs7dYsh",
  "key12": "3PYkwjGzarGt1fvpNgjyeHC5rWtu867bAhenPVuBj9meXgNW495ubgzsBe8chBLEeecF4CAJWL2onRFivnj1u6tz",
  "key13": "4hzxuaKLAyUdq9v7dvJbvNh5aNxXwiww2Ncj6r6hC564miRddCSwV2f4gd4VqNruXqRrcmLU41WEuLA4Sj9xDe8",
  "key14": "2pzkFSdxUqkwdNcmdoaYN3HrMLnpU2mG25wkRAhRkBiUfCTtMcWvRHCtCMshJsArcrjrpCnT71zPwW6BbxEHzZKA",
  "key15": "4i6uNyQwiLLPuWKhL2D6aCZS9vK9FatoNjpzCxT7apK2z1M445Z1yj9iPaJkW4bht28SAgk4vEydnxSqHuU2HeRK",
  "key16": "TMeJrWQ8cY4CRLfqGX5qAGwcCASEkV9kUyy4UzUTEfvdNKStqfJ6SnaaaqotBK9QrTnxdvYYHRyFwYHm2uEHLEN",
  "key17": "3wrW6DxozXPvpZDW9ZGcK8X6hrsdCgagKfr4iq1Fpr37ZEUcKL5aADKdxxfm1KL9WPxjk1SQLdg9BerETstuyPjC",
  "key18": "5LyZEpZCCqTCtHzu8ahJCDGxoLZTigxTGSDicgbBfWzZP8LLdFT86rY3oNBTTGzLyUujSBWF8wZLjioGDqQrRYT8",
  "key19": "3S2PYzgfJYZqk3GGcjhbnH6hkVLx5JJxQLoXqP5yMe2pN4Y4mp8jGh3faonwzKZDZv9p65s2MtyxJWqft66KQREF",
  "key20": "5nZTh63SbXYuqb7PkMGoWauEbbfFCKDHa6p3moniyEJ5JKz5TFiXusYcxssLbpPU5LQrVHfJvaAhhrcCSBth9G6o",
  "key21": "3D6g7W4CskiiRkbr8fCcKrGtMWPDTYRvVag5opYpkxFeREo8yjTYgbqyCNeqWv8gWZxwfYoBvEXg5cbKigzfWgGg",
  "key22": "5Jbz2hV938QnR89DKB8TqHXPS6DRPHQ6DQYQSCQCenBYopGMoM5Kp513AR4RESM7A3a8tk8BfFp2GbAU7LMBFUfL",
  "key23": "2bTE6XcX5g2nLNJ6GAkbA7xSKK3kMQ1sXjqM3TUkDKsGKygbAGjXo35EWACNeZPaEFbxKWJHB8w2mBJaaBcypLcj",
  "key24": "24izSrR6F7ASUAXfLEHUhUgvq4veBoRBiePkW2ULix77uf6pixXUPjevxh96RFm2B3Pk6FtZDjLuFYTztbZuc5Ko",
  "key25": "aCjn8pFK8Lkfd7qFYTAtQv3eSXpmAnKxfZPe8xRUz3vH2wbaZFHhv5zqjWWPZxSF1LF7xzVzQ2rSDpBz3e1d1XV",
  "key26": "2L3oZqqV6BvyqfzjKXbr6o5me9roqtGs2o7WJhWL7oDGZvEqpStkFenQmSnLeFM5xkQN4crm6KknztciV4kqEAvV",
  "key27": "4EMsKXtwaAD4XgWrmDBjMVBE28Pg6rD14tE4H2MLTHu8rUn6dyymMK8pt24QYwipQWauGUGy9qXr5ocAy7NDWPKC",
  "key28": "26j5YpXKWjWRkufwNaxfR4aJjKWjao35JXVVLR1yyQGBpabsTHRmXFVoWZcYbbXMTcBgv2HACsDVsCqisyDbhrMF",
  "key29": "342a4Q5AJPp89s19Bj2BkNpsLarrfyWxJ9mj5ykMfn2uRUuBUfAPhFz5dZRr1U1veiS76bpPYZ4KYqYu9Wa5fHbg",
  "key30": "4m6vGanqBDjP4JK2wLeMwrjNSWhbT4eL3UtS7mAt27eQhVWHpEZJmvSXqztnNQUNs8c2vTbFqpqEmiUvV71az9H9",
  "key31": "4SCfd91o7C7VWfgdiP6RoVPPnhCSdM6yCxXSuMMXgyiLY65gaykrfdSRwGsXyV9g3JnZ182YUnxVjHe78snzHoe2",
  "key32": "5KBmGFa85oE3eMCGvGkcWSiMun6snuDJ9i8kcuBBaMoeD6FmcbRgwEaBFtW1atm8vuGGCdTXRvDps1wgbCzXoYV1",
  "key33": "3ue298ufeCx2XB5LeHYvUBep6pM6FYXKsqPagjSvkhpkjxNEzoCALiHrWphXAkDTStg4uGaWkJbyL24SoGmuaA9u",
  "key34": "2STLeRGd8Qj8UqRk8PK6DmvFDLvMEJKhBMZNbyZEAsgvqJ4TzZkedesshR3P8eWsEgufEVaWdyaWTE9SFxYCPSdt",
  "key35": "4c3UXFfdaMUv29okZsx1U5p7GDQc7emz4tfrsJ5zPY2veFtYByv8fiCstDpMa7tUnH7iiBoyBc1sk2u21AtBM1iT",
  "key36": "2zHF1iLXZpV4pV5i6Smd6wGsn6BkxBDVNaiGkQRLKYe2VoV4XmKGZXfVxVzK4rFtt8cdsLtgwkUZwPNPDGLPcdES",
  "key37": "4h9H1ToWbihrJYVaF4N9TbAKm1ESxj6CiaVswk98wh9poDZy16kRkUjwwFdgWwcxMMTvDdux3DQ23iXbjAe6qYdd",
  "key38": "4xwPaGN79YXakej5gpCpTrDb4Dtpghv1BTPo2jYvM2Qxzgc9kVSjMkHDGNtjnhAwRR34Xtu3UxUcDvKjj5sBDpYB",
  "key39": "ivAKT1dyW1Wtzsc695eMTftyMisQk9FSzD6ZXvjhECsgasVRzQYGjYgJ35bfqcB4tQ9JdCcuSWZSLEzWpXm3zME",
  "key40": "3jXinRpY8bndFGMmU91mGXC8sDn3k4t3ArgS7SaT7faePrDiqsaxKtjUWrMDHzKdnHRq4kScM2XeTajgJCQc86tB",
  "key41": "2tGQVeRYy7n3MmZsh2xxmXH8ZhusyN1bZgKBTVugYTWtxRY3tWsCLJsRKa683ywHY6Zn3NcMeC3HF8BKHqcUqdRT"
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

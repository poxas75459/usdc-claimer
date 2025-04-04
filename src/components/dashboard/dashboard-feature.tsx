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
    "2PEqnTk8WvAvSwTh1G7dYm1UddzL9M6pFVLRZ9bJDbEqVviJX8Ugmn3HZBAY64spnmo4jdd9RUU8ExV5MDLB2GZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eCgjCD5QumwB1YCbnnvviLQzahAQ7HsB3zL5Cf7GE2fmRvSBjAAdMmn3QUcZAE4xBoBmSuwYS61EQrG4SJEzqcb",
  "key1": "5KAEC1bmha8SXX2yCN27JigG2FwXVaD1jy1ZysNX5wrCHafAtfj1vrQ89ZQ7safQ9ngsDLdUzovi8FC8wvhBUkSA",
  "key2": "EpLZZzTgspVg5cnhyXEbjNgYXG3KEYCeM6kp3VkVAYbHbn1UCTs5bQ1U1XjJASB7RozxaYjMtVzYGE3MPsA4GSE",
  "key3": "2BbEn8xj9YP1sWtk3jcXaw9EVb3Rm7XjaJLfknoxTiNVLAqb8nx6Z3aggc9sEKhioxcmYRfZKyEAJMLWXB1mnBrF",
  "key4": "KUQZshkEFHNdNfcmYMFS4zCWFDX1w9ECVWJAMFytE1FEFSCy8smn8bh6VueAgtPmNh5Sz1uBGwTkDLxtbEeSqKt",
  "key5": "5kTqjHZdTPcQVzPUd8YxVan1Y1vQgmTXATEZYNfHt4a1C5LVFwTrSzXu6UWvzZ224V7bE8ynCKBj9DfogPeFo8Fq",
  "key6": "5H6rASybJvguY5pYZrynG9Gt7RHjcEpFi7yR1btXYiYGexqSR5xwpcrFnCJcP24jcQbhKr5cG7EXPcSYVqzY9SpF",
  "key7": "3zteSazqK1J8UyMoLtsW13dVPHGH87k2fmxwiRe8uEg8jg2xBc1tanq9EPtq24Janvx16CqDmkV9kw71fMFxig4p",
  "key8": "2CHbaY3nRFj4jctZJdz9KAz9kbuogp7CwziTDGCDTHXLsp97wTYqPGJ7Gn5Cd5emT4cXPfBWafzRceCuCeGzfQVx",
  "key9": "51EsC4MBjBnZF39zrXByZGBGoyyskLCvAPgEkL3ryqtYoNj8ghqQBn6Vjp746Efhu5Qun5FVtgUiGkstduqi7rZT",
  "key10": "4t5VQsC9u77U5Rs7FEv7QNDCw12NFP7NZnM4SrsSH7fkJnweFq25uTyFjbuctAToNWz5EMNpf8YQr6ZeCGWRicCm",
  "key11": "31RRPU1puSxugV8h5A15c1kHuKo4BPR2h7Zx9XBHtygm66efhXvTE1hDVzewaocfnGCrc1hcjyzyM2JFUe3YN6Qa",
  "key12": "4vqRstWNkTYcLBfKtPTwuaq3jGoccoEegyFjuy4NLSkx1cfBoGWMZwMekrpbenr12JQNnDpkFkj8BgdGhSCD2B7e",
  "key13": "3km1sQaNMHwt9ySkeetDTaBMih8JDFVmnjADrcVN55fLuaVawAJPjzAGarqUm8YRcQAQ5NBGxgRkDG5iYHUoTMN",
  "key14": "2NDUfybfxP6wNkKQbduHHPnEJe5q7cSsmeH67Xix3Jv7N19wx4Wyo8Cjq9WnNg9M8V4RT8N5nGhRAXfdNjrHska4",
  "key15": "5SGZX7JY3KjhCsfmtohn2hJRWbHNMSuEvVkyCCzwK624FbuweZr24q1kWtdNx8U3iDGjGKs8bPRv852EVrsSEH4c",
  "key16": "4Xaj7ff71etcWPaJwzWQyqfW92oDgvoFVy6dQufetrrcqLoqCPrpSMxQmDNk5nQXpeUA848rnD6AsPHQ8QvBD1HU",
  "key17": "4xmMTjy7aVQ5Aefk1zrmFNbpay7tTYF43BaHUfkdjZPd3gmfvarZzDgwLUq3TqRtgdmvmrK22FUWG5WTeCr6cdqZ",
  "key18": "4VdhQTuAUZbtjc7LkqL1KFsYLn25FRw1W9SifSE8UWr3UbRv1XinTyV2bWiVCWwyNi54DvKU7mLJt7Svh7gMfU5W",
  "key19": "2XTZME43ptjHiz629Z6vDpxFGogmtRGvwMwkcAannR31oHEB9tFgea6MsqTbBJLnhESxvkdDsvbDp9xvS6LqMKz3",
  "key20": "4bVyT2GXHxvsyZZF8gVTRWXiVicxr5qs2i7yBrEetv4kugCs116wFRAekrQSYmbnLCRYddFSbwjz8y2e4LBCDeiu",
  "key21": "3ev8kDWonYApY8g3jAASb3vmqSVMYrNrZyMJDmcFswa3wpahRibptJiSe8Jed9u2qWqQZ4kxYHLdXAGXW5iFsALX",
  "key22": "3d7pUZdDeetM9QEQJzH5No2sqxab6nuCjvu2nJHFzr2khhhSipmepPsGogNJxkx7sifdzszd9dMfds1Cd7Lv8Sa4",
  "key23": "4Cotjo9K2NuZwCbYCaTczTgNyahGQNCtcCoEQfojxxzUzgyRWFicF8RAJ43U2o434tMQ8Me7U3kTExU1FUgUAbhG",
  "key24": "5AWkptNTvDSXkjkzconcVv85NrtmSmhD61wNU9sv56wVNJr8TaQfi5nrGtQEHp2btrxjWhgfTzaQkcqWRLmVmbSW",
  "key25": "3qobhZGEWgPV9ZdsDptCBF9UbJ7dX4BMgHgdGfeKyeboF8Z2mf5kWa9sxyYFLMnwNN9tUKiMedq6czzo4AiFbudL",
  "key26": "5mN9QtEgrPBKUCj2ca4gUz69wTWgiNKnW6GW8FSLaZ4JuuzWnGujWNbvixQZCHJAEieLPD4zdNHEREszx2beRaG2",
  "key27": "3asazfBjKsQLd4vGeqqt9MEkjbiDkiMdR1UrGfGhs7M2Sb6prbiVgrSyaZL6GvybynEyNGeyz1XKkoJoTLybC9Qu",
  "key28": "292jgDkWD71QxtzTF2H1Jp84eF9XoVChm1WQ6acJNADcqTqWzEvgEgQS4MZ1WaNvWxM1ZWqCTtz4LbWbuG5rvRSf",
  "key29": "4QxL2RrDygJ3RdS56kCz43srmxLKpRP2dbECW4mmg6V4YWyq4ebWc9hayAFfQJE7EwUxEKqLhUPtQmfb6rRsDMeD",
  "key30": "67QHwjuRrFxVNtmv4bwKWdyyLUjnAzAZpCMacZaffjb8M1pfzn9dpFMsvePUgp6T7hidKNX1CkLZvjM5fpzkFksU",
  "key31": "4mFtDmy4Tktu4uKeNKnj8fhnpEk6j4kPrhEjyZfNo3isbLDNT3JucqHtCkRkpxHCed7TjJXuSPGzVT3pYcAHpADm",
  "key32": "3cvySTER9vQoi1ZFuwefrS6Y5HbPqbKyXXkCmoSTaF3HDU3p3oKvFCQin64cx7qSBSUGb3TQcz59HvEUqmknpSpL",
  "key33": "5pM4HRYDTfczRmDaTmGkE5sP2fK9roBkPG5KyF7FZcp4E5wFBDrUAdUteidUNdEM9jEKYbzuVvhiES8KxDdXHqrk",
  "key34": "nLttxf9EbchquQPbnZMzFpb7m5YFyh4apmSCyXuY8w7QBLDp28rQv4hb3rvyW65WkzmxVc14M8BTzmtQKBAEKLL",
  "key35": "2tVYfbsTXCNN6jGtu1RuDdK5a1gcPy8ABXtQ6YGMyDFBmMELpwHwo7xJUuXQc3GMtYiu5gLGqmqRiPpysQev8rAf",
  "key36": "XzSr1164WnAumt2bG2eSo5kB4uRHiXeES8T5Hku3ZUeHyUKvk9mBnE1TpKGaWxd39erXz8V877ME9tt3uVCNzDZ",
  "key37": "curVhzqkTjVNGeb7uds7vEAgVry5W7R2dtc4GnRMSNw6jBQwVwEjr61pXundBca4ebueXmhbpH8YU2p199dNb4q",
  "key38": "2FdZ3w4px6FYcv1C7SVMaZbCLxyrDodCLggCoM77P5smz9rW5DQZ2ngZcyRtBP3vGQk8tpVTyE5XSVWxsn1efxvc",
  "key39": "N6yzpkQ3JakzP5Wadkwi8mr8tLsfBwzyZwLQXY4yt6FBqEkodr5JzrC4EBooYJZjGuDRodgzhaHVRjgkrjExMCV",
  "key40": "4WhkaC6ud62K41arAjmjnqC1TtqYTpc7A28L9j6mog3eWtyeNDmdXSw1BxDfruSiFJ3e3ePzZfpb2QxUjcLcC7oL",
  "key41": "4LfrEAZhCaXXTBF9GTzuSq12s4U3JZc8A4pQhYEC4g8VWoov6pCaLoDKpgRgLyMBCXdNvh22xmwT5dM6R9SaBfyh",
  "key42": "AWSQiGinVAs4D1kY7UhaytxuGnG3UGLkusS2w7eFGsayTi1fMMqW3nq2VLiXJCygnwd3Bki2Zp3z7TCdjebPVA2",
  "key43": "37MC57rYWznrvGgdZNHSmJy2x58YoAgohHhYnAE7RLdKeNwmDhiKaL6Jj5pJ6ckLMk47fKNYFXG8VHue5hsafHd2",
  "key44": "4upvE8jGiRRrryqfXcnTPhVQ1gZLh5iNw16H4rXhfyhiSRNA4UwUi5twy5YQEX4sKQC2p4FCiCZHvWdRbGEMa6We",
  "key45": "2UV7DXTiTyskwKBfryuSm9RS7P9zHPjCJjXoFjhSEA1ad8rPCeJBWuCwDB7PttT1DJBKU6myYtfpMoxh9jA3m9TJ",
  "key46": "2YTbMzAaFkUbt8kjZHGUrxKraz6nxAhjKUT3unzMZRhiyWb5AWQHjvJg8tjxP3vrTZZJhXPgiA8e6XDmrpFCUr4C",
  "key47": "sx2AsPDqz1rqMdbET8n3bTUtmjikUT5ZZZAAy7cXNpTegfubNkNhf8o1RMcNUkbaz8roB46pSV9fUHmYKtsuSTd",
  "key48": "5aqBpasBwkbteYEDx16dBbftuyD2CatwGMMeCvUKn2SsUJoxndNj5h1evQzCC1CEJVVTxj4uKcxWf2uT64zG3Nfh"
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

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
    "3UYusQR47Rpc47jmRS3vdpPuEmwRgVdWshF5EA2fUpk988A2PDHNgWo6cCXMeV64jKdnifM4u3UqZqjZHwjzGr8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ougMd42233vCNmum2AnCybUNeYupRfZbbLvT9VPHeLqbYtvd2uuEAsqDQunHXET129GdjH6G892sqXpAaxPo8C8",
  "key1": "3A7yWXXVpH8phJAy748utXne3y2Tj9skxWdzRxugB4iTGKoXPEjiHRi46wCeEhhezW9zwL6wzR2hXjg3tsJ9V7Ta",
  "key2": "4WNaowKRj8qTqTYwaMxqGkGLDMB8Avs96LpkDScQcY3AUBt6cGMPPStnnxXubKiGSVCQcuEZv7DSzceXXWHzAR9G",
  "key3": "3WzBUt9bkGiaKB569eVtvf7BvwLQY8b1xQm2keh6MPgzustTU1K9pg7pDPWCJfQiaXumA1mh3c7JAeC8CKSiu2ge",
  "key4": "o82TyyC1FqTJtKFBi83VRzD2DvqnWpu6UZxWW2zEdmRF1wsQeWeAxW9jqHo5ivokLM7bmBvW3VzKCHQh7zUmFWr",
  "key5": "4zbUfDtLDCHssBdTzxK6hMAf71VDKXcN3aE7aeETYM7goADfVKGRNVMKsJgJeByqQn6wxwLXjX4vQAKfPURSs3D1",
  "key6": "3fVxwaKzq75UmemTPpPCt6g6ZNvmapW3v4LGBGLNjPkgekGEvxNpWwCpmmujS3HBnsbt2jc1SYYAerjgWLFQEWm8",
  "key7": "44eeYwnK34oUQJLcmcm2uQ5ZwYZAzp3VRkb7EJFUnbsapSedEYfnvmncxx6WMhrnFbvDST4VqXPBDWRzLL2zGLAn",
  "key8": "2DuU2nHETTC8LCjozZWo4rHz3JR2KSXWi8AvWUQJAkdZEvEb7yyeNTykoaNdVuVL8DUkSmzt1CtxfMVX95Fkjwcv",
  "key9": "4b3TDWpTfYb1Axxea7cm1Mc8mj4TLoB1w6seABkbT7PP17hffidXaE34QogyNTd9yogBJmC6LLyL6U28hVdP8DpW",
  "key10": "iDZNyxweANW9NjWjzhzZJQGyVwhUsUjnLHgH7wzQSwgtNMKSBWNnMoLrCKECj6qLz9mSpVZeHKLU1cYoAXt6X99",
  "key11": "2JYM7b2RJEqwV2yLmpyXM1bgKmJbEBZAH88NY4W2Lsz16hxeg8bGtsotC9mraETRbfmDeiARugbVtsucUyPm4BWP",
  "key12": "2dstCdFZRgqfBxXGs7yuWZASh6TShoBvyVBobriLPxHJNSReTUDgnyZjkGZwmbPCCEe5fyKKiPG6RAYmXfhLRHzj",
  "key13": "pbxNTTqvvJyivZYXo7yJzYbyEEzSnCFk3LDLudbETN8KGNhrTkbJpRxGDf4jrRMxHQghP5HJEC5sk25iVpHuPbn",
  "key14": "2MYw2WsZdJ9mna5aHKP3J6J58NJERBFo16GkDQznDkHF6LQZUgvy348h5KXJHCT9xDzqXCLixfYPkkdaRJRvQBMk",
  "key15": "4SVZoYdyzhMxXaGjLyUyN7DMZwxwKTnXXxxtJh5gLuCynhwJiV3GoS2EGt23Avv454M7ZRU7zM8crkiKe3NkfbAN",
  "key16": "3LdDwraRi68CMXpWQMxNGnQwzWHJtYQSVeZdte9qScYdMhnVTQjsTzouD4TwjyuAGN4q5eBzHk9ghSB2U26vfihp",
  "key17": "4MbhoWaxj4Sr8uLMgvqwzCgpA8zVAeZb3LRrPLhSETPZCd4YvktcpjZZAusjS41aj4JVcizxRoUMNUWuEYax3VfQ",
  "key18": "5CoZg7nJM9KoBhyoXHdU3GZR8ytWrDeUQLGXGvaoF3AL5JTX9vQQXHt4d4W4wXcydcRBCRPsZqpHdTZQda7B8m7R",
  "key19": "3adHcDKD3KaYFbTVvnvYo1snEZArxwRkMnKFjXLfUEowFgmAc6FvbJFG3YsWDwvL9QKts1mdx5gvGTfsJeaTQQoS",
  "key20": "DpizFC6E975sePDGdsBhSkFrb6UVkjdLPV4CBEwNNQbBqCfdVzaEpAswLqbDKv9kSghV6oDBhtH8jvaNYn86WW8",
  "key21": "2szYPBjRe2b9GwBhfyrk5RCvfbhgsRsNJh1ctqyrdgc5ADAcqfPk9kPB7Ff8PgbgH2wynEeDUw6AR6XeX8h7qGRb",
  "key22": "Wy7Jzgnw93KkLU53DW6DeSMMGXaAb24fe9otfEAzbRrprLc6jddt2cCBrYmXW765yFa1d3tgNKprxhYAdCn4PEg",
  "key23": "45UfQrurob47MYJPQdbgLWmAm6ES5KgDkifyXi44jRKZZSGSyYBTFd4J8DpqY4cqXY6Saf7Eh7DdibWzuoGJovrB",
  "key24": "4hoUUkfXynFSezvKGg5GYW1xv4B92UAJvzs6x9bKiAaX5cgLe2ca9n4x3tpcBoVZtqZW9US12QQS7TWL68xmjry",
  "key25": "2aes61n8i7fBjBTCmHrTk49xBgAyNrorfdBJ5R4kk9Q1jc32gbd7D5KPo6nQhP7FrxNQU6ToABGG1BdfXp4Gvmn1",
  "key26": "JcRbgq5zHqxaXVQqrPPfm4KKEaABiDTM62BYhiPrXJcJHtvbSMhWGnU84TtiYSaxM2fcfyyj7afySwSqrAUGujy",
  "key27": "1Ra8RWtxzn893X4aS2J4YZPDhunQbLBgYmW7yXRqNLcPWNrvMrCRufVuB3wzxZBrdpTqLAiockzPQtFjzJ8iZYJ",
  "key28": "2YujTUihvq9UFiQGpUcy8xkio4xYVMM4zJSWhm5p8w52NKdmdb1VbeBof1GF9DEqLR3rGNJ1R7LRDRMZP4ZPpxEN",
  "key29": "24BRWL78LAKsutcbT6scsxi4eZcYc7WmrGX5pFzWWnVcGZsAUuy3rrZNHxJzmeQfFfiVPB5Q3dHpmzzvhd8XFyqE",
  "key30": "UabUVU23uzvE5YqiEMB19XKtTYWZ23LpjECD9VWs3pDEmsgNgVCqVzLhMVXpEcHVB7yirm7T75Dy9hUQnUcVuhE",
  "key31": "2fDv35amFfKe2dWLStX69rumU3zQs2yMU1UqPPQA7thzLCaJPPdQdnDWDS9msWsipQhHxzNaG1jBGmoSC2BSBSnt",
  "key32": "rgmMxdivaYLcQs1txcsEYgZr8NKdGFPRqFvd2p4ysVU3KDHzpt3uwqboDybuec6LrhJg9cXBeSC5GqHKxeYSJgp",
  "key33": "56kLD5WgeP5bSdytmnL2JZUJbRbQdxfQyYDWP94M8EyviiJs4ehBWocC17APGuQbExkpM1JNsxLvNqF6z6QV3UcV",
  "key34": "5ZmEVdq7JThqpsiXDUpMKr3zfLB9Wy9HP8AohjL6tsAkcBwFV9zaU9QKktSq5Ug6sk3CwE8pcpsig15JYbnHSnKR",
  "key35": "5QjZem7CeSet3CX73bRaFuTN7AC8ryLQAyfcCSDAdMsMcaP8j8eCG1Gvc6mDjAmtyp4KsEYuuaiqvzZZEiozgYy1",
  "key36": "2G5kKThGJahhnqsnhCPxoRTob6Chncd1xegVTTwjebYkUTwphFkRM6Ty4zz4nWtQ17cqAFjg1erFvaEZSvncARPV",
  "key37": "4xeAR6LZEeQHPaJEEfQEkC7CHEcWbUsoYeXBwE58AdPkNyaHoE1n6D3UMVFAhra1AFx1yv1c5kEMYQqq8UtgAXZ7",
  "key38": "61FvduQDzwGQYfqhw5jrLAaVPDTfaPxP8wrvNghN3Z6Cr9rrdPjAKuTdooS4MGC9yMTJeingjZRxqAZ7ZqTsxJQr",
  "key39": "5dt5UmrZga9jG9objvpwbmuiPLEKY5FFF3Ufh6cGEPnCaXHZc1CV6rJ9PRFKyHkJozbH1qR1Fc8Anq9VQnHcg468",
  "key40": "4omZgCC32cs1kUUjc4nH3MgY2rvhMz5npbyYHTB36gcBgmV4WarmJqGw3VAes9Gq4625jGL84khGiEHf2bCPrdoV"
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

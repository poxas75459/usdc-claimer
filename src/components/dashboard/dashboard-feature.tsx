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
    "3uJ5SvxRrh2kAC34yXUYHUogX381gm86g7LqxXqmzX6RQV2bJvVbq8C3yzJZvT4TmYTy3G6titLgS9pYQmT6ro2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YhrMfDC44ShUSspBUh7ruW1erL5QQTBKiJLHUovBe68xyrmYncaYj8jDe7mpiZZ6s1CZ6xKRsG6YGHUJZYvW7E",
  "key1": "66heEm1JC35UcGxB8WaxD7Eu5jhmTjmUogAfpDp3gDmakSxdUfUeiwfgPt5Di5ko43SCunRyWCcMyiVSkcL3bTkJ",
  "key2": "2nrYeu9oDX3myHXDrCkni4xkHrRJH9PeXXgQihMBE9S2VjG43dtBGKkKAyCw94YF45xKADH1HACMS2X8qfSM1V7Z",
  "key3": "3jhaJbXTB6QvVVM7o4Dm9xrQGgeTDLu5QJtwWd2FQ2Y8FsLb3vfHUxahqhGiQsgyN1K5fhHetQhq1RovE1cp1gU7",
  "key4": "eoNPir1u4BvEbZuQ7SgPtdEzzy6qHBHbYBbQpVRxDUpobFVKpofrA54quyXoyZ3DRHXNM2HbwfccUiEmeTWhEg9",
  "key5": "VgKL3ZLKVCm6voKRv2Hy7iLocoGEnXuRxWcA9XJU664GHthc5MqDvCURWzcjG9zYDEtxZL6RkKGLohjTKfC6yFA",
  "key6": "2KHmeon6nZAYuFYBeyukgHDYPy6VuKLs2ARhvYW3ae5v6Jsf6XLsCHnYF9jaGSyCTBbW6XBSA6KBU318rEFgFDbR",
  "key7": "X62LNrZHdHTtvp1f7q998ZhQHC7yyDfyPQ3jaXNYDaR5Bd5rJUB49a8AaZ4pnNht139S7bJJDQi3Q18YsxaYy3W",
  "key8": "2GUPFNMVzokK25wR9nHZA68e4XxLZFQ1pR2Mr7YS4Eo9bMwpE7yQU71ydxv7pWH6fzqFfq3j8jYaFHuyGJ2sh2pZ",
  "key9": "5RsewVQzTMnKgZYFGZt4Tht1vAEFCju1x8wfYUa8hyXiEfn3i8MNRCDsxWxhuFqqphLSdGFQ1MQ3L3UV5CZhbVEq",
  "key10": "228Uvvt6fDLBBXwjWRUHJAcuDinC3eZZ8uVYmg6fCiccvC6JZWjbvVkF49HRT7KXg9QocaBnSsB6SdQCpfp2u3Yy",
  "key11": "2uxsf1ZVMSisvMf4EA9mtFtu9jzkUwc5LsEBsFSa1y4hGkQJZWdMTyqjSy5QPmpW1EujTZDCdBX4U8ZZY27SdTGi",
  "key12": "3W1zj71TNuUVfaPn4XHBA5Wh4t3QRJo2i1fbmdkZazb9GcS6ifyi8XqE9FVGyYX9ADosV9KnftnbWUjKijVX7RPG",
  "key13": "3xpJBn3WAYSJcFRrprM9aHxVPkACPA1zBXpTRmwDtzukptuGZ4SYZzwpszYidijzySDp6YmdLcQzS2RQ2BETtbZ5",
  "key14": "675bFPiN6nUsFG9Xyx2e34D3h3dDDkWMRKJS8Z4pWkxChHD6DFh6aZaB1z71tVS7Q3rEMUPYsV7neqGHjvTbY7dq",
  "key15": "3W67CCk19mDxGch7ANZeh1uhWRDEJMRxGQJFZFqAXCzXkRgRQC6ci1mYZpLEZKiNb4WPCEBAsmZkiSvm689v5FWP",
  "key16": "5m1TqCrBvPfEABkXVJo4vsjV3etREzb1ZsS6rpSVqEfJXxXFyxHYvP5Pp55zSc567QPttjgYb1fcHpsgUkSu5NAz",
  "key17": "62cMLs6PiJ2HZ3zNRT9RuwCqTA4vRGypb9aVFTFreHzntXmnQu5wtCWfvus453bV5gYJyYkXf87rYezpnTwwkGrZ",
  "key18": "47Q1LAKzzeYPyjqDhLWouxWJZyafYnKSxJkpuUoi7Pz3wgiTLMLasM6pPwbtMKf4LNKrqLZRK2GQPz55Ka6xAPQR",
  "key19": "4XBAzomYv4gWLecXGbYWQVpeXpbri3qhFZxv6yhJyN8bq3qr59q5ifKh9JVs6uMKhxC4KmJVwWHPoFi8RKRfocti",
  "key20": "3pKDesntB4cg35nweNsNxPkCXvbA7mwXdsKNVSdQcAmBoA47wd5qV2TjTxUwmMpdggiiYcthEbkLMuHZqWs2ZGUG",
  "key21": "2ErhKiBizfukmwR13YJUjQM4BJfnKA3iVNPmsmRwyX2kkE7T1tSrTFedHwDg1uzKhTTd3Wc6dvRv8T8uyKfUgZYh",
  "key22": "YXyFDLjqRdkManxLDBCqFDrnqPu26htAJbg2dNw5pkCnmohbG26xHfvNev58ojsAJrsfbNJgreznEid3b3QiLhH",
  "key23": "3k7DH7bWyh7XUMuZHUA9RNj3ainZ2j9hKhriHNVVE85B4PNun1WfDWF35hMvKw7WgEipSgkAwHa1VS6yWgpuhQ7o",
  "key24": "3Cx8uqk2S9zmH9hdDFCS6wbBW76WJvJZwb5Ar8aX5VHLPcr8YQGG8Ny4XowVZTR4QBSnc2yaMc67VAKtLoNR5pYM",
  "key25": "5URTzKz3PjhU4c7p8ePCkRMWEZogu7PTajQTPv7BbNx85xEpHbDnki2pvDC37Qz81szziY6CXVpFg7NTBruZbRtk",
  "key26": "3A5xj7dFE3JXcHh5VJJo9s7tupXeT6Lw8jZMqpsSPv2GksJsRzGxPzgivTzycRmZVdPZ8f1gWCKDun6UXs2MABDa",
  "key27": "2uxD4s55YTwuKvrKsADseXSNUmaNp2EcsFS3Gv2g1FTVTwc7bhyJZLbmQWYPA1MkN2jDVbAaKBpF1UjHoXcvCCDU",
  "key28": "4jkwfG5vch6X9DWzw3zm449HfsKN61YTFnzGhHA4N6YX82K5odJpPhNE23rPVVCzQrcSgjYtPerEmejm8LZwd5Y9",
  "key29": "2peCcS8NY3kKXAPtwSAjfygBxnfRyCGrrGbTuxZRUwCSAeewWFBXMKvVYAMjFBumyi9vq3haCR41D4hXengsDFz3",
  "key30": "5JuyHyqJoxye9wCkoJUDWitkVyt9FTCuGQoLcS4bBB9ziZxShSN6Feb6zbvbnGK8WZtXcqxsaR2zFJWPZvKBNLus",
  "key31": "4m8E7XKGH8T8LH29iMsDDFrAxv1iyASEuDvQVY2zQHWmbgx1cpn7fP5hxFBozS6ZdjvCkwsvCW4vFJGKp28QS456"
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

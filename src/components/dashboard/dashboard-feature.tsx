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
    "2JWkii5SA4uWXjLono7WRMu4F5Z9MyFjoxGXDjsCTvM32x9mdBUhuHZEaVAQ91zALeG8a6uiKqFpz9h1kYHHwa6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DZmMaUUPZhkhXgxYj7R8v3CBDtZsb8mWsws7LZyQNZVZA9gCLop1TSheVdbEYRp9hC2HzyHv8rukLRYZGw73N2o",
  "key1": "2ZEKHUN9WcJhmuaGTsHKFavnS3a2QzHmz9iB5nPf2aiMwn61Tz53K24Qu2BzhN4cnL8v3KCeFh5DxNtcJ7SYAs99",
  "key2": "5a8THJPiuRsWYTvFFWmmCkXZTbUHLqXhsTkYscNdTZUZ2JjiEc3xYAxGibQ9EZHsfoAskbqyCAnTKrwX5kgHNHhW",
  "key3": "4eSSgzmo64eURiAxGJ1M7FqKnwSqKeHqEP2bCX2TtjkD36yHYQyajmkbdNmb5bLji1CgXqvz8noiu6YfgyFH7tQ3",
  "key4": "316LJ45jn4KtqHUtSTjtxsPyu4R67DNWivSbvpzsHT12u2byoEznhsJxgGdmEWiNATdP6XLQS4XGdFsQVFPZMm7N",
  "key5": "2rEHB9Wo7fVo5DgdK165F9tuKBQ69FFjvft4EiFZjn7eB4RGndyV7CjhmMbAPHDbr8VR9GDm9vW9wDETWNYcxCQr",
  "key6": "2n27p7myu53F2FH4PUVNYpUKWoj8dcLN7kmqD9DheZLBTnnXAPSnVpMfaH64BpfA2QCyKFFose5J4AVdK32Dsaxv",
  "key7": "31p4dtDm8DWqX8KSyfvHJTzybzvRgPULcCDt6GiHzTgrJhG5gJjKdtb5zXjFBUQsVAxx9JY8ksGhUzvwrDTrCmE8",
  "key8": "3oZ7yBhtxb8Sv7ZSn9GhGuZHDK9aQfAjsEQsQfFmGht931JZ4RZ21Lz9eT1eK4GTLRSSbTpi6YXgAVRBWFPHNpvS",
  "key9": "4wyw3vCd2TgLCttd2GzvjQUXdXJeofAJMWxNgdUbrwANCzeFDcmYx9MSCgiu8mhGD4t9w3Ah3Q3WsSyiVo29hhbL",
  "key10": "4rQFjtacCgt5ni1Tdvg394XeKmfGFtj9FmmAPFqi2JZ43z7vuGqMDVAr12BCLywEaXsEYuiPFS3roG2Z2cHoaE9S",
  "key11": "5PBy2VWyqqyvo7oaPQwPqrcz5Hx3D5TE7SZr5K48J8K5TphiTyzUavo97oaQcXG2Nqjn8zBhcYV27b8TLWnB22AV",
  "key12": "5s7EYFFH87hmie7iwjfJPoPUHtQfPfdcPUhhMPPC8ugKVAwSBm9XkUEwPcyCbtykzXrMw7uRCtP2pa2FNx1C4D5h",
  "key13": "4KZHf6FpT3hyGmCiCTkihQiWVKJVtsom7QXtw2YMx5RaSaUxT1AWgMjSSBZmaz4nTDWVzBKTd8QjyEoT9351boUn",
  "key14": "3sWorgsktmNwsnf9JNoPGuPY8MZZF3RRQm3tDgppMjnrxyc5cpsQgBmAhnBMTL9p6a1Y3uLmU5ouadtfrPYSe27F",
  "key15": "5Tsbpi6kZdgzNSrg6P6TwukccPYLsen1jA7HCTD5cqMET3bu9fcZJGtMJkp46TDFJGTXbatoU5VM3xvvFTkhZNfp",
  "key16": "iDBLAzrobwTWWR5ZYBQRCjw5mg1R73EGyJzgohub5xuxNyvCDWJz7wxYU6B5JfLRVvbYS1hYgnbeaXUZZMVWchB",
  "key17": "99Kk27qaFrfBPp4vsZ5fstL2B2ycD65get7cxEZs8igMLZ7tLPgq2jYoHJwWcNGe4SjcdC5CKMcsQHwkukvKx3v",
  "key18": "A1VEW3R5wKGXaNVa15Zs17e4xNbiC3EuEjQ2NyNUaFTXkbVG2y6Xkom4xum5Qw37AMbTHy7cRymu7y6263nKizx",
  "key19": "5MRpPXQkg2gePdqPDNtSMpdmSvbqGYY6aBHMgfLMMephqTu4tC6fKt4wt2LsaTsK4DCYp5KndJPkWKxkaE22nCmn",
  "key20": "2Bpm6GRXKFf82oXu5kXhgRtTDpsQjsYsrrGdbxH2ZiAJiabgN7RrWXPv3MEjkKEJXCiaW7h3KQGTrBWzDBAQbnow",
  "key21": "annBi1kDmXQ6t46o4Fs4BWM47YXvahiSzMs2wVocuGmGWddMauS4zF2MzLWfdDF92ux93Xf3Pk9uZst3EfRhuWJ",
  "key22": "53FMVVNaZWnyaR8KoviZMfiXBaANTk6th1PjejE9rx7xqsL389QTTiuNQPxZ3h8mURn5ELXkpd9By9VBxXseznm3",
  "key23": "GTUd7KCpaoDMB5muQfnTQWzNMkwrDCxnJd1bL5G3ZsQws1kAyvxSikm9HxGbQYEajhTki6FyH4VW791SWchaAJi",
  "key24": "67GPcyuT4CUAzVgjUe2n3W2XtQ85YD2AWxYwcVjqqNPHWeCVEcmfQrRkziBdwczAtxEfkuMicgixogo7NVY4GtRp",
  "key25": "33mkRxR9RQiMo6Tcnsr1qstxd4HvEk2MwwBDHGZzZ8QKhF9YfnJ2oBHAusUmSpozvzETEESvmkzKw1NMXFx8EPyd",
  "key26": "57TPXyevBFS6ZWBi9R5z2DaB2c3apVv5TNXGnyecwH4HggPbfEDqpxm5vREPbqz7zc6paG7u4zu5G2DkquMPTXnS"
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

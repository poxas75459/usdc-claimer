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
    "566TW3QHPRoYDz2fF5TEe8DkFcdDCrJ1drByVUuCiDqC9wZSwSEynDXbuA2prMYTXwpwFXTgaKyS7ftx5PLqTQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nY6A2w2eckpLa5m74yNu2FTsyDaPPmNAXozJ1smSscyune58XVCiD6Jc4Hh5DJjA4i8k3poBYDMuiiwRvNkcEid",
  "key1": "5UHyqoswNeJjMMimwRmu6y6Nja72zahpWdFRBgMRBNkzJEZybALGoqSBysLHPnqdtBW4Pc5xjst9zuPVuXW9fFEP",
  "key2": "2Mh6BwSZkKCyfj31L8n2aEQpi9YMJ9wpnmEFn5GPbYTmGSps7zgQaMjtqKVuzgC8X5CPJf52asRDKVbVFfeJUwQV",
  "key3": "2sXs4RCCZx9eKXXDRksMrcAKyXXj5FyPkoK6sna5rnAMeAQMxZ9o4nRsR3DEARJeyMHniJsAn33grkgtN9Q4Seft",
  "key4": "emah1NSTJLHShxYPJoodS3SwnKEWQyjsm5inxHzzQeejcqksBwiGdrfpm25Y4ubueViUgNNavRB6ivpBL7vQ4HR",
  "key5": "4kEE9SU5fg2FqmQXNKR3ATgaYw5h7tSmV9wWbetDwFA3SFgzxFEaEDFgwZtQogUoqDH3ugscr9j53YcdfZfKSRHi",
  "key6": "2Q9XUc2YpAgWaGb1ZvmcfFKqq7CQVkt2dUeHDwFS1uKPPWDNFY8ZCo55WjtH9M3iQdgPoRwav3m69cHPjW5upNKH",
  "key7": "4Zvziv87phjnHP6uzzcoUkdB7bQA3h7kHEMDN9wUAZMQU8ydXC1YbidynfoJqakL5UeKNSi3KSfEte2GpDAPCK8F",
  "key8": "3d2tMWg3PvameJRTC15j8kqKuwiEbTWA37EMfSP1bQNpQMRTiEyeD2gNya5GwUzZNDpCP33FRq1aLg9YnPha5k9L",
  "key9": "5B5t7i1KDiYdauuGnsEUChdQ9vT2SGbxtbzmutbPE1G1XCAhsLqeTz6phAjNKib7fGHjeCH76tU3o3ZWwvdofQkQ",
  "key10": "3QWpMpx5FMrJEaGq3oknM7ZeZhcwZvpVJGF6WULVTSPpX7X1j3WjJ4mGwUbSt2PRAh289eTYnafW3UYqe8o9wb8t",
  "key11": "3tYYM47KeiavLfYhdJ15HUjxuoU8F3Ke2dSjezRXnjDY9DqF9vDgoneUFzd58h3eh51a8hAhTkbE5DsEUBcyfrU1",
  "key12": "2uHZ6mdzsPu5CADdiUnqwESf3vDj72Fvneenb4kz4376jas5GiHEZYjw1PMrSnCZsfeBALJPyq39Zs5BE71XV2wi",
  "key13": "2Ys6x4M8ofTeXxHDwNVtHXFZ3E6CzgtfHgxrJYU2Cr6HyzVaNypvhdMQJi9wR9nRwinC1ZHLGhiYYkPwogmHHBER",
  "key14": "vLAmMF5ADMEemTUxNXxEdssjK4WQdXSgJt5bsumbbyzGMyX7LyexsmDh2X8RLpCzcNYxQVi64QHRuAh57K5Q9n2",
  "key15": "3KfCLeSJawYTcBMZ3MDK8FjJoj2bDz16auTWmGe1pzHaNBfFtHKEcFBV9joxGSPoeG3Dv6cgB99xN1ajYnQ8g8yx",
  "key16": "N5ykWjHA2P8b5Va4jPHrxz3FfPfqhL7rxVkQGHxJH6DGSHNcghQLP9ariymaG3iQTjysxiHFiyFGzMkkDSovC8y",
  "key17": "5kQzSgAzFTTDtK3P6Q8QQB6A8EMAYFbDfBMzwPkfP1wdBMvD3Rn2YVoemBJfjiydsuQApb8BPBvdKv8DAkNuuKEG",
  "key18": "2kYvmCv55A11cFzKwSDsHVsgRUK55jARBqfRN5wx5YSC8j6PocEwixPJZFqUeHSSzEJw6UjxVxoyBQgREoBjdugm",
  "key19": "sb1u6i9QGMoykFuhrE7Swnz95yyJuwcPTUEw5zt5rXvZdPg86ycBEzDFVX87Vpx5pZMds9ffdUKtghSAiJ9YYDz",
  "key20": "SracpcoZknYvJibmWsBTPM3frogeVKBMeekmj3F1bJ3pn6HPdUArUPn72b4h2Nfqz98kvXkBzZguv7FjAifbDDK",
  "key21": "38vsxyaZ2Ft4hvR8psz3TXDP9MbaNSj4jNsAx8HzUCNRvE47D6nHTLFW7ZSa454qxoHgAGQToZ2jiBqBGgAgoPYY",
  "key22": "24i6qC3ZdvZQjjg2UEJ5xHVuCyHYjLcUwaqDGRhE5oN8ThS3pzzMVJPyHs4vYs8UwvyuztxhcGVzqjCQCsZRTqtX",
  "key23": "4C6jLZw3Aim7ggAA54YF6fVdq1TTzoWy9eCfSboBzhd7Gv1qEASBNFQew7mBAmJNdDgrxwAq6S3pnrb8CjWEWsE1",
  "key24": "4g7onjAq95warCEdYd5HpsHPYtaoJn8KLdVka45EFNXMFuuqZJXH2nhqzbXsKzHcTLaZUBFroA9djKVa1y4XzUCC",
  "key25": "2UF9BCHpRFg7CoQ179XizBLELext3B3Bc4uER9XCF1vUUrG8w8kVxo8oYPjAzqAtKxMHcbkdcbNqJJRRVQwW1MP",
  "key26": "abXp6VDMJBomCsH6RU7tYkMsozh97EuNCMLUTJvATEjVDfSqEXv2R44B2XRTer3gZwn8QDM3AtXR6kcetquRDJj"
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

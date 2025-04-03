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
    "4QKRsVLbzfR6ti8uf1ifHHZAda98NR462zmpexJKW6X52tq3zCT8kvDgtktBCEfeR2Ay7Q4Wx1XHMiUQzSBGETnf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328DwTpNqcQSaAMQZT7Bf9KfSakrakxBRxmJAHgJNGRreVjPpT1z7ymvpgMbUnCDgds3WthZ6s5r9jamKnfvGsAW",
  "key1": "2zyEk8Viu7sna5B6zABaEF6etcsUDofKRKTzEGWq4ZEn91k4mXD9CHHEcVqt5hYXzSj1TjVbhjPJut22sdpxCXvG",
  "key2": "2uD45VqEiGeqTSjLPcKQumbNDhcmMyHjz2i4GHSaAB7iMj21AVk53wHThTqbSH1wtzjkRXuMznwq9mbvfCqoabn1",
  "key3": "4A9pryEhMz1vdy3VzRoQhUpLg2vNJe5DwJULbBDX6GmJ3gzfecQtJHPMhMaLG7F9bQnkwVy2uriF6PKrVvf6tFaK",
  "key4": "2cLduSGnrmxjrdASD3ZgHAHN3sgnCWLW5HACyB5SDiGL2Bf8ibLVFBtXacnSNkVv26JiQoboskFQsvwB4Vp9havU",
  "key5": "5c32hKotsNVZk4wCMFwaCtcqZAA7wZUdvbvhPiPE2iNsjHspv1yT85LqTsjNgnakBLvSmy487awLCANhMCgfTtFf",
  "key6": "22bNjrhXshJXh8fKECpyy5gHkkdYNcePQRWGThRs4nrHqnu4CuEwXLvtKsShjvMvy4z1HiWRpGjMzwmmspi4SJFG",
  "key7": "52vTXTvViHS6sEuSZeXGtpcSXKJwzmhtW7Zk9NgHCJR52qT9aqo2QrdVPw3amE6232U6sT7jgHejVxA6GKBzWLXn",
  "key8": "3quWcY5UTnSCWuahPsBbX1pCzfxfhucd3VePqJYGLZzY5UvsrJMGrDgWutiDPh4VwuP8fTnUGYhjZMyptFRer3E8",
  "key9": "34MMmz2YcxvsKx7R2KUr7epWb5ybs4LAwQGYETqs3SJh2uRKDqffqNu8Pk5weFprrDPmffqLZCqFFvw2HC7q85sm",
  "key10": "d3GA5dHN4mYmqE7qsvDUA9yUKCcYWEXrkz2a91Kmq91VjWSo3bWfDJKjD8ajHPssiRBy9L3qPfcdcurioAbHmHL",
  "key11": "L3VP8nF8tRYb2W2n1UxNxrQdSzu8aLzsbJNurKHcFExGuh3d3RAhvBWmnkjQL1J7Huto6hvEmHq6Ezjt3QxMrS8",
  "key12": "4FRQatqDjNHgphRCw78syD47WbaVyBPLCVWGu23oYar5C1h1cckMjybN5WbR77YGBxSwUh6XeXU79JbaMtoJe1Mu",
  "key13": "2TTkem17fYK3soggPoopvtpvh7d4FtrP3GuYZAu9jUuzjKEfRxxAF5C39mJ4TNG6Y5ukiTaEAHwKUzYM5jQi8oZm",
  "key14": "2Y46xyMFD61rmfB6JWsgMxm3C6V9pX5Sfenhr6LgYSCJUKooSxxhJFrQ2WEhyNVUJynkNLh2gLKPqukMn4akSV4Y",
  "key15": "2eLax7xKfvNmGwhgj9dQTWKEjoTMQYS5ZNdWyRJifuHwFT8vTZoMrQY1GiaLR2xDRSGRqKgY4zki3JJdsguzTLoE",
  "key16": "2krHXoS4NeEe3DjJ6EKm7bRR9fh6eUQiKLVZo9K2TvTij26WPx3Hdp6nqHaxPjgiGQf25HH51HmCNc5NbMgmhEDp",
  "key17": "27HjP57KcsqNm3pbweJ5d5bc85VHnfx58CvDFxcQWwBP4cWpYUVH5qRKVVsTc72tycvhSjk7Dud6fxCwD8im51my",
  "key18": "5q6XuxSUujDThTDtBXw7ckHmsUDj8cf86TXSFhYUyMUYKSe5bBeX9K1QLctxbKtQAgUfdjautV5aa55vaYBkNAg",
  "key19": "2f8QCoBBQr19Hcj2tjzNphiZrpBEYxAESGVWttUCzVVgbCkedcu2BeSPeEKvrPP7eQSpnHcBV3UCbd2XkiBX9CAJ",
  "key20": "41TGku6sR9uVEVUF9Cmy6aouGKtzruJ5ySLsQfBnLzHwsXGTe4GpUoL2vb8U46jUELmyrknaEFCpTx8TKE9KoUt2",
  "key21": "4XMd8upsmqdb5nKx4b2DmXfDKM2ox8xQCyZL5pKj6JzmshRzRnodNJZbnjnjiNXsVgzyRJpWBBstaRMEzzGwiw1W",
  "key22": "4Tgg6FquR73by4EmFV92AduTmki4WnVfNEWKUmoSTA23NK93saJQEPoAk4Dhc9o1Uz36nXWyc1JZsAVNntDN6KxF",
  "key23": "SFB1Pzi8tqZop3jYZXWqPEd89irifRvH4yn88F5xAfJxtaZqQuMheZ7nKN73mzTgPwK2pDq857kTcqvWjfMxRkT",
  "key24": "2bJDMreRHS17gW1LMc9UDVN7BmvfCeNLz5yGUtAXL8eizVV4FZjeD8BLo9T5FWadwJ2YbZk9PCc947cEqaNtGatn",
  "key25": "5CfWR8wNZM5udztVL15oqVTvcBAzizZqMwysfynFAjxmKW3EctU3c9bPuo2Gdv6as184ECRkgcjwdaZMcNqZYSyP",
  "key26": "4sHkH4jnwas9vM9T3NhbGkKUmnFeYzJCpHSLXFoCe8spchnLvvmiHWHCnkXrTCVFTZZyiAbkLaXUH3Wr3FFEHpEx",
  "key27": "zQLac7jttedNV2f2nVTSqTkit8NTqhtt9nBjg7Jyt5A2tpwq9sukFvxk4FPNJHfaETKVwr4ohzrmH7yEgHgtujW",
  "key28": "5GGtZLn65ZuXYeXyZGwksQp8LHKm5wERcFY6ws9pW7eZ8bivytRLGvxyMESw32qrdr8njsReK5wCt9eRoD9iNaDX"
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

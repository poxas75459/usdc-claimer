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
    "4dw9jVy8wop8nKu5p9DWuNoKGRsSJKVBsF26V6U1LCZx7UmENWdTtjeFgyb8ctK2bfmQoQb4EsRpeQEAk8CSFtSZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66v6PivxqahNSaGFsqSbbwd39YLaQLf9LLQewjYZv4rrnMAXkAL3q29FqihGKC9wC5ny4pCwES9gbok8gJgWH42e",
  "key1": "4aKHcXJzFWmoVAkdwY6jxuZgQ4GW6nGFM5EEXFto7VnnbBC65hXz5eGg5M1HRWNyM4dXd682ywBxqZRXaPMYUAvG",
  "key2": "mTLDMSY7FUG723BZS3yKsHFf7YQLjXDzC2fRZWN6Pfk5xDg6Y4DBnTWtondAGPkw9rMf4W6bWjyY1u6cPjQ5rDg",
  "key3": "45L2uneHLjqmrwhWRV89SCrhmtyQx5jA21BYRkW2mMdMRecfoFGdPLznNsp6BTz3zzZR4BFuM1XSQuoKmKiC5JHv",
  "key4": "4JffambB7P4KVthSB2CGKCGctuBytWDvnYKH2xqUyRjDz5MgCrYHexBgxSauFF8X3ur4EkgtBbZYPTXpj8Poe5c6",
  "key5": "5e8qN4vzAAjQ91vuNrHbdGVpu3YYLhZBJHHEn767v3gpkyLTdkQNWqG89bPhjNWQCXFDT6Lh7vyRtyr9Bs7a9poV",
  "key6": "35ZZtV2Z2o1UJ8hnquNN16EHym35MTMfXU7Lk5zTgXptGp96VRgSQzg7VTc4UsdPP41xy9yNdN48RVsveveUktKt",
  "key7": "4bc5XzmEgfGH7hkSocYgn3UozAiSeLTTfKzfRDZDK5mVuhmeCqTnUqNejYQDXYnpjhwu59KRENqnBdPz3PuUb4bC",
  "key8": "2PknQkuqmF6vM1ZHHoMzC2ALfrD8EVYLzG92dsfX4s3HWZau3TMTMjvoCBxJy67ecmnJAYxYYuUZgmqFGKNfP3kB",
  "key9": "2WwPaHjEvYx1E6FpXPKQkVCdbiuBPfN5qDUZ3wkTzMaxuoGaMvMbXDMzRhTT834UuHVVhoYsw7e7y9r1be3u8wHZ",
  "key10": "prG5w8GXPeYkKowhiSsAjRzGXp69157xQJN94wygeamsfbPdjkJ6YYjDbm6fGQaHSMiAq7bM2eodoq31fHkBtnN",
  "key11": "TCBT64hHb8NnmNhrfPSGacw5Wb3JvVb3YXs1MVbHkfjGwvodfCKSfU6HCbGrqaJCwR9AHKgkdQWFbsPVm4nsByC",
  "key12": "5qMR7NDPj1zhVLWic86t2jMecZbMA5gMBVJUdgc8mP8rZGv7kihsor8qbLm4BwjPmfLA9HRyQUiZymTMurMrNgi7",
  "key13": "3paEP2wthWMaYV8xzzdtxp7xYVFiZw4BtF7wMKSMfiDKjkXLByn7DpEs6pbebGbACBBpFPyyJeyuKVhyS1LhZihW",
  "key14": "26vfU4SSvscXDZNZ9wxGBykZK1SzjXmNf5rdBPYGDoB6bnTZUUdd5prPSYBroXi2W8o3SXVGCu5GnrQCX4nyMci4",
  "key15": "4uqogyfXo1yLYehfTa4VE9pVx4iGxQP8DLfd9L7VGZiyoRyQYtiiFyPqde2PdKujvz73WQ3BhFzFkD76T6sEucJY",
  "key16": "41wboVJbk1BQmzcpJd5anEZSXjneN7KCQGxmNAng4TVFXNqMTuFVKH3wtuoW8XHE2ZG2SM4XcbXsZiw6rDeJxdcm",
  "key17": "2xmwbFjVd4N6PNVFxN5Ti2wKsM5FssoqznM1Szdd3FUM6SVPzoarFQ7vN4opuZewX43jPCAJwMYtvK3GLHFUTh17",
  "key18": "4rqkCsUdWczjFZRtc6siXEGoyQxfBjgvLAoztU6zhEyNiQ97dgb2DcvfunuseRGxuvTETtzXFGcsgREBC3JBJHsn",
  "key19": "5BD5Zb8Lnz6rnfpXWGoaeFiUss3hG8jYCLn1quaDctwmFNFqvProJy8JWtbmzWLRVe5uYpVq26aLkNj4pnQZyFiG",
  "key20": "BYXG84v2PWfsB7sKqXfU69rSqZMvMc7ZTayzsmDvKzfMpw1T3T2FHkQzZEJmQsCBPPBbjmPfHj1iQYh2FFEpKca",
  "key21": "4ysvpkQkC56xQ9embUHzJ7LGPmDiV5HsB7yjXbaERUHeBTykgz6rTz256G387hqRXZhBbp2ybgMfQBN9uDjrfiY8",
  "key22": "56SqUiocbPtwmCXfv1d4fd5woRP6heRBjBpVcS9vv6qh5VktjBxGUfaHm1M1Ppp9uDGfhLxsS7cGURCMnS8dycDv",
  "key23": "3wZtUqJvPkepyCgJ5eM5JRTkSLspbDMRvorkgwJJQ6qTvbzHU83nCkVCsG1s9WFUbxf3Gzswvf8RK7QW4x6M51RJ",
  "key24": "4g3BG1WC4BdM4ujnz5gi5d2Hn7nsg2i5f3mVWcQBZnvv2CToCq6cGjDjuw8yZMSMHzSX6ExbJZ37fVMyrH54NCcc",
  "key25": "5fRrUsrweSKvuPH5qbggcRUXuRVZfoVNdJMZgNg66ygudEFLfwdsZSGLvaoi7uYVEZX7WDNXpjLwAogJv3pDmvHm",
  "key26": "2Es6W9FKv1WP9bAGmpmQhRrTozVxx2Fr9SGuSnTSUzavYhPSJmDFTBBpu2cawNp2DeMqfF78Ck5WxEQs4zbfPw88",
  "key27": "QGHoE4fb8RUGCZtW84NoSQsa8VSYY1Xysu7yn4kNkzBVaKVa5DsuRHKmokMB2WSj4Sf83aP6PZ75JwcqqJKLCEJ"
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

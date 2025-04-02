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
    "67hFeMd47z6yWhL7oqzQQhLBSTQ3a3Dh6tZx4uqkNSWoES8XGU3UtnjiFfRXhguD7aZ3zbdenuUz9WUyCzpYhMW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hwXtrdGuDMzas8gF7UFckDqQtnuBJ9B81S4B4zj4YvSSxGBjjKXABNV7t226t8JQJHeL4szF12WJ3cSzjUbyXSo",
  "key1": "vuD8Yvq7adcEqGigSPc5GLSfdkc3bTvTYkUoVoBan1U9Fk5bnHZwXZLiHRzHwRNcntG5jLtLU2AxCRL3qLCxJ2v",
  "key2": "4Ny7gBiVus6U327tE2FfTD5XKzr6pEe8F6pvhGVYscw6ULB5ifEjpnYsQTLQaPRQyTeji8hbFq26RiTMdDvmhXE",
  "key3": "3JaqVBSaeMntTpTigqNErYiKzKGoaPVFqDtZiSr5D8viUwSYauBoFscNKvAnTS82egNcEyM22DLGdyHYGug94UVB",
  "key4": "2uq53m9gPcCHC9BNtGjDNhYXiRgNDXCKzhbsYQqP49T1oNeh8cmnuCX7wVX7YpKBfodPkKw3vMkBVZ3U5TnvTJWa",
  "key5": "3ooxYbGpSBNYD3uoS5xEc8Z79UNPPNHoiR5yVi81vsVbadzED7f4QZ4wVzfUmVNaMKLnPacmSa7B4T6p5h44WP2D",
  "key6": "89ishcpFjWcohehvSPGMKoiNbK5ZCeY8wxuN38VVSKpLzGohhLLz111n8WQWFHsvYncGMK5LcAsCnbJ96hkhbLk",
  "key7": "2DyfYr16BY5xYSeFCAEDUFzEwmjWVnrP3WDWDwXtiPB8P6TQPgRZfXSiRiZB1z2YvpUZ4qQqNEdyFDmNq7phTzbQ",
  "key8": "LyHtxWu4vaRB3FdFdqcJNBuVHFaisApSG9ryXfxKvJG5r8p6pSTiDyH3dS2icYnfgxYk9fG2S2WC9gRht55kgyM",
  "key9": "5g32PN6a8YkYtzwTvBsX5f9fBFJLCSDD25s8v38buLUtNgbmWiixuJzwb1r1DErgkAM6SxvTHc1TD2Kz5JJqHBDt",
  "key10": "5E8cy2WR9M1Qf6H9ZR78LubkuATuFNhpKLARvHit9uEoEXQCbRWAvvWkTrVwB7q3U1s9Zxr4bsXLMs7QBNm9dxbJ",
  "key11": "667rgB1USUnEs8jBd3vRqwWWMfesFgStWbxB4Zo1R4B9TvZxPfHUboV3ruM2p2HskWC5Ym9gZNxEpyY2Z7WkFXE7",
  "key12": "5e63EDGkmXnjSycbsEK2qDF1CXAH9tEDteHUyfYtFTGNnAZSFgbX9kRjsuuNn86dFbi8UjYGNFcPHAoeMy8MABvF",
  "key13": "4G2Q52YyoqfHgj8BzNdfv4rCBJNC1NCt7VzVcpMT6nAuFZskPmTfRHgpm1mMBxtcvZ8XNbTKnbsjh648TREDcWBM",
  "key14": "2xsoprMMAhHAxXGhVCprDkQikKoG5mRbvRSSTdTb5R8Vo6xYWhmuZxum5jQQyZWUfcmiWWwNv1TkXER8UNLZk44p",
  "key15": "HyQvYqD44zkreB1MeqJqYKMky2nTBs27ksMPBKrz6Pk4StGmMnwyT3RPyYfjUkjgHKjfmvoyZcoYSDmPEYFLV1g",
  "key16": "GFNP17pRm6eJWD7dji6kQL2jxVJeMUR69Ahgf4s99X81G871vYD35r2Jb7ktpuqQjha61Ndtd4AX4xngNjWfRbt",
  "key17": "5fccVFjvFJKb8kphHshzG8XyGZ19SWkp7LUG8saiWzuDyrMw6nocuPRLmi5pc66TsNgoNm7Dudj4Hkz7xYB9hHT9",
  "key18": "hA22t6szG2ADDGAvZbkTsXDhjq6qm9KELyY2G5PKQA2mZyGnmUWboLna1DNg1P28SffdYMdACQ3oCmq2iPvnqJf",
  "key19": "3pkeChDJ2n2VLYZtARokCiLQRupJWiLHziacMBYs12F86iZuY5a83P15TZdNj1MtXVNtXRMh2Ru5ujz4DcnLyqsy",
  "key20": "5qyFN1tfbzPH4Tjys2DuBbm4GEW1KJUvWLndmC6z8bBf83DhNYtbJScvtEpjmToRRkt4jJgNbJ7hQsKV1VZAbsRr",
  "key21": "3Bc1Vq5iQ8UKevMg3ncKQLov9n3LEgEieKz94QVrGV5JYfxsSWWtPCeRvEAK6nvyNG5FvCcKGpHKCgRthTGXrL96",
  "key22": "4JKHQEujKZ65qhmDcZMmAqbMfi2gPrVXSWS8iw6dJnKogRWqgQJjgtTVT7N5bGAZEfKbyU4ifNjEFJ6XSntbtMHy",
  "key23": "587Dxeaj57q5BqYXwinpakoR26e6o9AvBKniTrHzrqB5BTRcQx69XaCxAunhjd1rockYZxNk1dBq3DFB9gzAV1J1",
  "key24": "492fye3bPUJhxXXUNWGGFSb8YEG91Sp2DWcYQZ4JjiP3yoPpKrQxfFYgfGsBCukpH8oATbJS2af4BAmgWjxZrBaa",
  "key25": "5ecAbrb5KZpkUKtd4EwtDGPDHoDTEgL6F1VnTFTpDPtx7fTgAmdNdmHEGHZBhiCE31oYgYc1voT32NLRZiLRFcfo",
  "key26": "tLGc7M4ZVMWKY6e16aRFfSq7iudsJPY88Y7eEwG8tnr4cAi6oDfLEvxwR5DHVFM9vu8rBQEKdRebf7K4CHwCctK",
  "key27": "2xdQydFqgS7d7EqpwmMZjZZjdriFTNvYkHy3q5TgfDTL36FBnegywpFkRLrU2g4CSYhqQeC9JCaDmA9y1KSAf3DS",
  "key28": "5fRftk1RLNPzd9M6zb62z4yRBaGQqp9NpnxvyLkv8T1SfLye41r4WzVCSGNzLjBqMNHjxNcWwYpktSy6ARJS7dim",
  "key29": "2W5wctUTsss3RWxSxUvqS3JtJnyFfTWevXCkCgichCRBQAkWMopJoQPkumS7uQcTuYzWT2czUSBb9m4eDGBYs9PS",
  "key30": "MgKhzNtmHoEifPgfz54gY4nxBAzcGYi2uoFgcm2GQMAH6QWtB2xmJRZXTEqKjWtkU98HcyKTGynXqYYWfwoZSiV",
  "key31": "42L78XgCc42xnT4xdnRkojBCurWJHpFNs8tYQG4K5ZHWUTkCu3SApStBh6avU4WHGGXEHDePRpcfNWhZXe8dMTF2",
  "key32": "62EsXCSgJN8hpXjVf3TGU1iai6unk1MtAwS9rSk1GA1u5EWemYNBk6WjaYGyMQpCUYUowEBB757ihefS7FSMsA47",
  "key33": "uARoxfQ53TqKtXrT1s9ruvgLf8htzAmHLSZPMHPhJs4xEbXNio5s35v2fpZeRCqLRipbxRn6Ke8QxrgvUM7a742",
  "key34": "5FzPH2xW7FNJg2WFCXoafyqmeaEZpCjukvu3QecYMyPQXHKKYEV5RCi1tMsSKg99Xnyuyon1Dm8xvc44qnWX9QsT",
  "key35": "Sp66FJf3o9LH4rR7sMJDe3zMXJYfEfYuBPRKs5hs7QZem7A8f2fTSs8ymHKNWbvThuzrSpAFWzb82bn914p61zP",
  "key36": "3LHRighdeS4AsQnwDbnPeKozCMCuR4iQEQbZyvTN6F374B9MScLerJ4eHMf5qGMGePcHYzjrLYcHMZpaTvp9vRFX",
  "key37": "bFiLJAQsdmdX1FXYECQaVhbCXkXS3v6smYqdYPGRBNMZCts2iwzCHdv75k2QgXXKogv9czFzFEtRdz8ujuHz8xd",
  "key38": "3d62AejYCoGnBNh39GMp2Y6TjGPKKnDJFSWZsDsLpt8k9gBVtJxL7ecMxzTesGbiUV8tAxxrnnNh1xim8UgGwt3a",
  "key39": "4gP32a3wKKr7Ds7BeRUnwnLMsDyKMpUrwLTLMjhhCoj33eWFoRZnfmeyE2u8EFu3ex3TzLyqueJm7UM5wbxkdX3Z",
  "key40": "2pMee715h1k9AbQPUJreVHFAKMpbdjcuojj8iSFfuWDRVFh6wXeqzgePtU6R8hCWuXghLg9awDAoZqvkHx5gza1T",
  "key41": "21Wy5VDmTWweBXFqRdmAqHS446nG3Zo2ugkgg6HZ36ZMmnx5Z4MGY1iQePiPA4ycXGgEbhHHQXEqSojTKGst9jYY",
  "key42": "4NpAqjJbqMZdaiSK5nne8k1StDRy8nVhnvs3JU7X1MdDBADqHeizaUzsHLyQY5A7iead28UaxxJsfLwxAP3uPjmg",
  "key43": "4dspxHDgtQ8fBerEYQsbL2abh2DqbVyivXUAaR57MQBNNxqhUEZF8sVGLxWywyWYU7Ro5kkbi4mnw2epSrh41uux",
  "key44": "4qxE6mYRgpkq6uT8VYo5vkohbuCbQXUL4QMisggywJ8gxE64LW2twXtntEHuneSXH6trK85xgMnzMkH1Ce9ZAf6h"
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

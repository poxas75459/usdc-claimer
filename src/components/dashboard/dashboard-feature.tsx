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
    "2ToQDvykgQwkL3zzESYgCY1s68ZDobttvghx4ce6yi9LCpsG4nnXL9mrbBK8c5sAFU8Yk8w2h1nfcSkCoMzMb1wX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aK4F7hAKfCjiEbrtrXMrrx299N48SW6ATD32ibB7Xkn2yQMGT8pmCcJ5SW5CWsShV6Tm9mvtAcEgdJq33mGdbop",
  "key1": "4qhg1HwhkiGuXzqZYi2MwpdRNoV8gDPvMhgvJHsp2kc1va9PGZaNFufe35PPEAq3m6PnWpmM8Xfwza9Q9GWcffaq",
  "key2": "wX6VVPX9RXqtj2DqwKUYfmeFa1fgHeTgfDejru56FHpThnnpgim2ntG9NFvFfUjtFNevLx4qcaHayE3TpRXnKcv",
  "key3": "2TFtHsvjNeqkrweUqUsX3DRwmZm1E6zT5DhyhxpCNRnyKFQ1MfKxuoCobjTh5NcM3B59DKXqs5LV5cJmdwJyCBd1",
  "key4": "4Qp9VvHQLYeeYx3d3jQe5nJXeQAhFsqrDPTVzVECG9gtkUVdtDpeSVQxFXUsbPUKgvrcd9PgC8GUaUrgtE3r6bEU",
  "key5": "3EDm4YQkbvdeSCDb2BTY5fVwvSFrLuKLsWrN3Zsqzfvq55o4MnybT5aYNhqwuCstYn1sdyYQsY5ZFkpyJoToa9jg",
  "key6": "64ovLqUmRUyqsxSVinG5Lxtthp7ZmcgCcwsBBsJgwhJVFfWpr3QvPNkBYiAmoRfzHxjsCNVJUnhKd2ZYmLijo3yR",
  "key7": "5LoZRVTLvfS4xh1sH6Gd9DjyezZ22qLCiTUaWMxzAWLxcvZUEYUGcZyQCBDUJj68dDpA8JkvGsDP2W6cxEFN6iRn",
  "key8": "4JP9zPasW3wAjSTLN2xX5R7fTrCb7a2UwsjdPppY2CGWccWtBwoTwBk8j7oVYPVsvgYJuoGKAoFmJ5Zc4xpxkXn5",
  "key9": "5RMQhM8MNghnhqDE88Wi1ej6MPoVbzodRGaK7v45fKWbGcB3dduYmvyW4uS3mGvsDabQhHN6m2xYZY9U81QG2R2R",
  "key10": "2BK6dzmCaZDcxZDVahXHX8cQ78U1gpKuZnGQ75LBfJL5gk3rJvbbonSgZMqmxFneRuy8rKwJDRYfe4agR1FdJ9M9",
  "key11": "QPFvSxV5LkvYfqaNdaKRbrwyVdoLiA5szzqH13ydCm5xK78j3zogqf8tHky3jKH8HnTCaXYBzCtHYDhj1pUyVfv",
  "key12": "j7NWbgDfkwSZ44JTW6gsJSM1fSrZaJ51HxRVzazohPfpHxhEjZfm2vY7SpLxQRsvw7Y6YXGDfrtoA78ogY5y24v",
  "key13": "22wF2sxaLnXN1PEGQifJk5rGZx1RQQE1omK19fTZxZvmE4FDV2ZphyHt1ZJ1pYqjGQcwRVXmnNzKEHc59dM6s8sU",
  "key14": "24kYjSTzYXH53xrgTJfNbgMtUjgjhPuBFsHzopmMud4MSm7QhTWQac8AcBtrnyGjEk3N5y1ymv3V81c2JU1QjdNE",
  "key15": "3BDHJtv8pkoFzMtWADGz6qJgKaLgffbBwGP5VBSBDD1UYawNxN2MypRvZddSFmssKLsjkDufZxxAA1ZPeyCy5RG4",
  "key16": "5iUqnB5unF9qmr8uMZXrD9xFE2JhpjEfdC98YUBBnyQfyRMscvYD1n28avj8VhZqQYnuYC6JLNCAgtKxGmWZJAZN",
  "key17": "4JNidvDM1BwHesF2zax51MeM4Ttm9b6P8m9Ce6DK77f85AL9XDbY8voBq9Tuips3gEAwJ9dJndHW3coBGWVrKz34",
  "key18": "4peMRT1jQs44wyFxZx4C99ZeEeb3TFvAzy4bmV77TgoNm8Ne4qPi65DkLS7AoFs2nfEjRYCbCcBzuWpWHa6CXVUP",
  "key19": "2oAPhQcVNtzgJrZiSVJ677aVEWonqxn1oybPNRr3ooFrQJkZYw6gVLNZ7REfrWs8xedJR9ro6ndWT7eBozvf9NVM",
  "key20": "4h77B3cjEaWHm61YVs7Exf9ywPgWWAcCbmixxQvM1fK47TcSKcNV3bQtGeUhis14e6kBRvTtCmLfpSt3E4JqYohg",
  "key21": "ponSsQQ4fuVM6FYpaKDHSMKzw6FtRDTBS4CZi2q78VsWKDPEAGZjrx44Yc4b1jnNorXKUxtrLz1JRimUUsArKMk",
  "key22": "2xxthK1PVn9r7LCW1SSBJ9ioe4vuz9eR2Fgu957bB5cgWsvwYkQqZAQrKGfnwon8zxrxmE8pFZAqGVfF4jW9vrNK",
  "key23": "3GDmuwFJcG8SRS3GLxsZi4R2DXzuQkrDE3BLkYgfgxxpbCw9Ru7YpdJCKTFkAPkQa34FjtSSybopF1yin2kdFTht",
  "key24": "26TnrNhGmxiYMkBrBuExpk3qFzn5E2Ev1mfpTSpH72HU1HFifScV3jxMn3LbCFrX2Ctw1u8ZaanG4imRRur2UQXT",
  "key25": "62tesjTazWWXqoNjJYHnaYzSinV3jZSjMFtRt7QnJgpXaidbswoMDavyFCGveLtCvrnkeynEdDPBhW6W9EQCYnjo",
  "key26": "3ckGF9B9Y1S62qzCPsvj7HUTcfKDuk6THncXmAJ1SnwzsPrxwedGX3DTbLzbkW5jiLzsKH5TfBXzcNxgyLmCuua7",
  "key27": "33fPYmPoLAo3QJTi81hJVVJWpkteWLpmsr9XEZawwF2uNkqzGyyPL8hkXwqrsvgWuwXr8bmLJqcFVQUbDYZY4Ppe",
  "key28": "PovmU7bSzgPeZoDLAKSe2kn41g5LNJ838KxBVSvBJKNaxf5D6UkGSyypPx2jbWkYaWMzabqVpQsScRXDBFMn2MH"
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

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
    "29a9Bdc8mjwviNwd1hty9oGzHnwCTcHvYSRiJRHpqRnJjne2phjTvPqD71Te2d5si2rtmYh5AHQ6WDwxxLmaRJfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UfWJGkGFujCCCQU2iSyVjNg4iEoJhhgKNRQMVR52J6cRqTephJzUBQwjNkJ2QuEDvMBdudAD3E2q2Jr8KhVEuiM",
  "key1": "5HChTxhssiSwZzQXWwx1y7j7DZKcfnvBt8fNJJMengwJZhAdKY486HcXuRDaX8LdTXsnvMVa9oVhQ3uYDggd6s6F",
  "key2": "MGeSijjiBXZzDYVVwRKGG79uPDBPRzGiLTddVoZwdfiFG6weWb9yeLQxW558dAw9rEJ2S7brcgyQpzo54AGfcQc",
  "key3": "2HaiaevUcfGmZgWdT49mGQPxvzektwoTMVbrmLbU6xNWr5sB62Hmg9uPfUj9H9bedPD93Ajhe8wRVaEau9TDmcP5",
  "key4": "wssyb4XyU3T2ordTQcZuGUq8ASJHfeJ6EndGZNrW2RPGUPZ8yq6YptLRiWZbDwWygG98ijvB7pYciH3ssiBVmh5",
  "key5": "3PpfH1XD15vxf2MgFXWc4eU8CtLHFWMb3dzEdp7JcEAGu5c6ED2iQUJqhzcYY1zg75Lp6uZx5Hum5QmfJdaKirJa",
  "key6": "5x27PySoYPaH2eBuwAeu9FwuiJ8JvN8Qn3qwN2dXz6YSu76cHcntiJqbP7LQrtyfQsaZQbRBga4QNMFsi6UKNT9b",
  "key7": "3KdrVEBHKPaWkHkW32VAnuC7RLtszHU2oke5xKXnLPiCjrYMsKgLLeTs6WJq3Eb6YC4qcpvtunBVHKvwB36VwYTW",
  "key8": "129r98hH4jPAy3zizdiiAyGDDjdQ1mV7TFpedH9MPBodNqkVVBYdnLbMSyUXaGEGwZYCXXVeqZyR9BtEfBdw2Vqd",
  "key9": "5nt7NJoLZsZpY1WHMmioCMYzQJLA95y2xhyU87jknJr4bbofAEEZB5bvMxK5Cjc4UUFZr6pjhBHPtok1bLaezyC6",
  "key10": "4inNRdoUykB17NkE7KXRfzPdT9oaC8FRLo9YTpDk87PkzXrgzNxHuwn9Vqk3Gt7t31GFLBR5b91Hz5mXgyugFDDc",
  "key11": "kmaypbPtAUdaVuW8KRoEwKXNJGUUud1c1TuQ6chJExUi3XR42f48vUVtfRJuLfbJYrXFi2Mr2nTrvCASTbtJwyb",
  "key12": "4yzXqZPyDUDdDYXoR5uAU4EPpY5rnuUYjCak8b2hDUqHmzzKCSQhX7daFB6oLh2yNvgPWkkx3m9a3zLgRXUfhc7f",
  "key13": "46Jg1xBsxeHeNwYvxWtiZQ3bbsyfKXFQdvTzsVPXZETKMyH17mKpjKBMGRf7kJ4SbccNbK4swWnZzvcFWYjFd8nU",
  "key14": "4PbbSJY9sHcF6BDoeeuiA9fRZuP1nhxhxNdiu3CWwiASSemN6Tc19MnbzxaEethy2iVT1kqsPG3pGYJrn9ethQTv",
  "key15": "h5NX5cBFmqAdngQ3hb3sSaUwrY6MovuRWCyUs67hJUYjpA9i6Ntcoht9gyaWUYdGLkmXuRXYsDWMn9KvajweChm",
  "key16": "qswUM5tevFMFAcWCWJiVEv61F2PtqGYCYXETfEzowsd5USKUiD5RWgWAPNan6jYurrYXLwpyUQEhvJPj6MPairk",
  "key17": "3esbLAvw8EzRisCFfpArabrYH9jZxbpSgZhvDtSFE5EMzdiwStzNgXqv1rtpKPvNAJpdTJSnewdUomiUGVT3GVic",
  "key18": "fa1dhZssVFGe1cqCxvFZHXtciYK6ZMwxtGLrbwrYSJjfi2nh6HiHzzP98BHNKr7ggfxabv4Vz8p6GEFc4eSxL31",
  "key19": "3WYhZ7FPt3e347FKYo2pTjQGryEgW5LvmKVeF4uEnmZkeR39vmZdp3xsG5mAhMc8fQCW7xFC3ybvWWaE1o5Z698L",
  "key20": "3atxdR2QCSWJMs1hUtoktF9YkL5zVxZPUSVWCXncf5X8MNfjNvsbMLLTUuGcBRcq24khQcBHSHs9TW2BsGsK51Cd",
  "key21": "5J8AK6vXACS6xnfPUk2vsDkfvNYZjx78PW81yStTUMzKU6UycpRB5jCCsi6WNupLvg16tMkEH2pEvCVe2ttFxqyL",
  "key22": "62ch29A1bAj6KagUzomQfCL5RRCcsx1sDUysRbRoCEoFjLQcRdkreiDV6k8TA35iP7J3k8XqtpK3dUmgiHm9jQ4N",
  "key23": "2xTpA8fR8G5B8ukysV4ExJC5gDVRRxw5AEapr2mbxa7vEDcc1VkLqUBCTiq5RftaZUoJxgaeqhw8rP8YybGLyzst",
  "key24": "576Mzs1F2dJrTVHYs3Jw6RW5HVBEexBxtsxVjVWXZ3DPGWqbjpTtz79e56S8FZidVv3qYoWsZrUB6HkuEsp6Yh26",
  "key25": "3vfiQfdBd3gTz6mBWkGhAzgY5iPKuhMYgnecyyHohXGmzR9Q72QVFeurEBDELNzjrywyymoJuVPe5MPkRmuzrKAa",
  "key26": "2DJaXsR2KqiwtazWBocC8cLPHNrstTmcXuXwroAJnAm5v5b1QrNtp5vmdos2oweotoyxBDvDYN1rwpzskDHoAENR",
  "key27": "ZpNHG6cVkBTM3qN7yR9ShviGhAXwS6bSqsxxdJXEAcyv48VD1HwVVAQsWSDYJKHLRx8DBhFHpHGrWJKF99auvoP",
  "key28": "gxWPtEcLRM7A8VsH9LWt54utBiRJ1syGrPB6y37wMwv1WUmn8imJxh9F4RWRoAawwQLuyWU3qW7yKrMqGYmhCPv",
  "key29": "ajn7ZwYdgty3zSpHM7M6fvfy7xpPWnNoXq2dCcnjBmodHbUWecjNv9jasdgrgW6YnprJ3vqr4nvj3LX2tzKZYi6",
  "key30": "ThFuVAdHN1FfVmRbVPL298AH4cfruyEi6YTDmCcn4mEtMnFz9dDkXDzSVJ9ofc3WUZHXdhkwjmSrvzXP5faS2Pz",
  "key31": "3fbBaRxXSBkk1tFWXnsoxybRDpFYyYAby9x4MTd1oLuRCfHYXQnL6RMLakuyK4xoQVy9KKuh7cw78FgQqQJ2Hhcj",
  "key32": "281Uvc7jiEjnAsuC8H3Bz3hjA1QWzqyzWpddhxF8i6we36ePwxBCufsVcWhEBwz659kPm4pgCtsrq4SVd9FAbkPU",
  "key33": "sdhce1ztdiPMBVLFjb8mBpj6eqZKJiTAhGDXCPt2AbQCGrab3JZbTYKRzUjpJRjD9hqmtuzq7wBTBC5vV1e3Xm4",
  "key34": "4xorZkRayd4BDkmod6DjQgC8TkJ8A16WgbBCsgtDa1a17hV8By7uZC6eNpPAoQHjyDu8Hdxwy9Q1TNa6HJBPzEGe",
  "key35": "5eDcx7dzk1iSju9BCLsDUUWM8rSsbWJ1ayQivKA3z8u6s1AHEiCRNccivJ78uKiXwYV67WKAnFnSTyWrZUehvYUT",
  "key36": "TNgmQRn2vdf7sVM4UuGgCsoW7AAaDGdN6cwR3J1Q1nhnmWhBzri4n325Nrg4siH8Bdv5DzyaSzR5LjiWDdLjKxb",
  "key37": "2HPWmtXiYBKJjy2EuKhiDrQH1d5ASAcVbCauSddreTtUGBvrkDqRQg51318PHXNxQQBRAuhNpHk7DKt5R3SEg31W",
  "key38": "4xdSpNkr8iNxqVHkeEmLRbmA6gSwoBmVD5oCsvCjcZ6TUhLBm72bmrsLPU2YuhHFw2AUEatYw3T6vytqfPJSZpST",
  "key39": "2wiFhQFezdmRQeqDvNxK26QnWN1ekQCCFc6rCf6eN9sMCkBLNVBLjGqbSPzaic2Nq31Mztf9tnpfKKjRb1voqQbQ",
  "key40": "34aFzbs9s4xZzTTmSDykjE5sorHee1vxw8AQmHcRAyLSEvBSRCZkZMW8mi1B1wxHNcrB5E7Rboa1C43mnD6zj8Dt"
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

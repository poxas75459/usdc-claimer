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
    "275vmoUEXtoAWZFFUjeRKhCWh9EufcSeRD52A7JmztoqWL9iprMneM4RrSQR5EzM4yeWWeMAH1gWPH6Ct4jvEFdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27SHsRezpfesK5eNJm2x6VNC5oVhh22DSLfMVmcm5ySz6NPesviinTfhGNyCJSrnrViG2mHWuNrSMHKJTNyHGoDQ",
  "key1": "3wMaG3coPEY6C2yrj3RqXDEkQLXmXPYvWuuwVKKjsidtjZVYRwmSi3DBMj38yYX3KnYKVAD6uNMDvnKknUC24rEy",
  "key2": "DszEKA74yPfjoXiT7Bayfpy6eRv9tuGq2iEQmG9NyN8jSgwWm5RdvewpfqiVfqh9vH3fr9WQheMWDftQKXoFkRh",
  "key3": "58MgBV4xpfAqVyMaRAmdrjigeKCnALXjQpLfQyY8z2wCwSkws947SHQwMtqbzWkm5WPETZ6hYi3gsKb6ckAT2jqH",
  "key4": "2YbaFqZdGSeRD6BNyj8DGXoSfGpuv5xEHXkVgkb4i5SGcKhhhzjgvmE6moHKwDdKbHUsXQoto3ky9Hx5Pf5qev6Z",
  "key5": "2jDovrJ4jDdU3BTM8JmwPggC6Xo1NHL8yMWNt2ZAB9TKbkcVQYsk9zmqXs5bozf7PGSRDB6iBpeiRG1GuX6nHWmo",
  "key6": "4bWU4MKK2QDkmhDM8dcHRrtznrgoLFYzUurcxoJKNwmrKWJcTM3r1HpHvqbqD1vHakzrYvYepi7G4S5M7LQphA7p",
  "key7": "49WhAfZpcEyhud9kPiawkfG6cfQdv5gVRhe1h5T4xGHDSJM4PFzPsKtqJdU2dwp7nooETfnmURFDBm9Cn3qzfFkp",
  "key8": "5VcSsw7Ub7rweasMTkybc81GMNFaSo9kUyShvBDr8gF2iyu9PKKaYnbd5boKhs23BAYLsovJfMSm773JDfVocGrk",
  "key9": "5uCPwApsHZGQjZ7SEtHAc57Xy9vzd5mwcUwGBradnnvQW7Db4XdXk7yVUPM9SQjKsWrTK83yQ8f87yEbPHthgk1T",
  "key10": "RdQq9yJqm8QQEhEJYPyXqNsduViftc762PaLDenVV3ZaF7RZzMt8cWKTKzgkS3RS6fEm3MTdytn145r7n8vgYUH",
  "key11": "4uSoFnNEgoWs2DyoxiVa6qzRLZSWKzooq4qJF4NyNhJKPCJwV35zPXTjdTHS3nUH9poKDqM4efNokMYyuDyZM8kV",
  "key12": "659GRHCtfNPy4FaHBjEYtqTuZwPaAVezET8u6FNX4PD5ThH3qTRVYeikPLE6DoDRZt1Rp4V1wjAGFyigFqDsgQ8K",
  "key13": "3subWy3tPYxwEujxeq4e6kYVjuNp5WHuqi7pSQAmgggyNwG1DiAKUKuNvAGF41EsryrEyVzQKWoxgFQc1K5z8GjH",
  "key14": "4FX21WwjsnJTcpLdGZL9wSA7SwWqJPR1qNc5S5Mip2Lh8LRYMGi8tLi4cdDrwVPZu7dBDAWiUkcWFsL97GXG65zH",
  "key15": "3jGZZBNTxDRk3PvYYiVSQmArFyWMRzvch3GmuNVLPCQCPEWLK1DXSApLTVXp8wzBcf1hAhKYWH12tvNjfkcUoHoD",
  "key16": "LJFCUrmUNmZ43uS1tDv8ve5wU6khgLQKniTWAJhtj8rLtWi6CcZhBWSWyoaDf67g3Ubco2ErcYG4xccWSf9xhHm",
  "key17": "2AUxSTjLK7fgzvz2jfh5BjsH6bxWQqZS8n1nQa8Nhk2Uv7kpJ9Fowpd7J43zQXkrMNcPY3yrpTZCHwF65tcnvHPW",
  "key18": "2gF8sXxo2C8JWzc3XujBLjat4FKo4p9k5y78bfFrgmuygZcDRTqjLn8U6RFEU27NwwxGkJEVJi6ZEbihsmp2RZyx",
  "key19": "5ByVBgxm1akYWGj7BzW1NEPmSUevySvtGkynhzsffphYUmHqFCsPpeSqaGUvVGA4iLrxfeBbEVmpDZQ3EvbtFZUg",
  "key20": "5xrJGC162Cazj1xghjVQvuiCdpSLxWzJGpLNGEddVmrzNMdeSa5ABJ8uRghtpYMwqs7V1EbohXZM95TTMvEkzKue",
  "key21": "35TrVToC8mKszj8j7P7sX7mMLdpoJa9e5HZkkse9UTWa9XzJQKfiRpyFiZjsz65VV4uAjjawEXCUKrdGrm7rEqD9",
  "key22": "55MEW3dMSrXYDgRyMxMmZvY9GCMVYdfPrQqUsnN2ofKUqaCmvskSWR2dKEzmPkXALgMw1Qd7FSxoa1M6iu2NscPG",
  "key23": "28jXbtp62zuhAWYfs3ZTSnXkNpibBNmLP3jiHx1gGEo9kA8gTwPmzRavH78L7buq7dQNMPwN2STcAQxgFeagc8Md",
  "key24": "61ZHpZYGMKHFyXUgKK1pLs4Fi1hj6v4A7w2dtuSsrANCr1MGJBLzaVshssffQLgXwsFQGcPtAMio8TkxGKLeuYZt",
  "key25": "4cH85D5StTo1yWSaMYAwdbhCpKVAwm8ZX7zrLMfd9bNXueMv5bSxrgW6de7dcXTzTsPebtevFpJ7w6X5w4ZjHp6K",
  "key26": "5Vkkr4yQxR4xfai59YGgKCpmKKkTb61HKyZYQXTo18gFWWHH2mCcQwMFW7NEaUJRL9CBrKnkUx6iZbBiMGWGj2Qy",
  "key27": "3tZMpqwzxYe8eYbJErzNdzx4PVea3VTsByCAioxytkuQUtite8sUrQzY56rreDSVSZGEC5nKUcTFcLhSx3oT2GRF",
  "key28": "eGkDYCH56V7resfYHVV2ZWfJbrNQbkwmUyVwPCEKeUN4Z8BZpJuWnTgXkYYUn2pueWPuFbDGZRgmDpwUfVeWCoq",
  "key29": "5gk6yo2REk5kvdfhQA43PZcaY9fDeG7y362PNWJVxyKQGaBHU2dY8D8Ym78ZybB1nzWqXLi1huikrNwSL7DuXemy",
  "key30": "2wcbC5zzMWPbrjTtbwzjzjrYHZUVj2riWrrPQrk7TYxo3P59j65rTjv1GZxJBwvoDxy9vRpCKqTEzbTNCpXXn1Ca",
  "key31": "2BwL7KJvYodXtAsVMGtheRbTzVt23zJ6aoKeLPHAfS4UTxiVnbFa42y5MdgCQs8AmjwLiGgXAL3bDZn8a1t57AVr",
  "key32": "5JQGKbrfHNJj6DyqLhPMSYtoFjfUnpSPNpvhKDVBCUrGWEcmMg3UtyB24u2RHdi5RndSfACbLHDwh1RdyqtNsYjQ",
  "key33": "LqPLBf6u24qChTtfnPhPp2aM3PhTkpANN4u2AvmX4H8kus5tkpEKqgztLFnTgMYnMZUZsVpD1D8rMEArctha4U5"
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

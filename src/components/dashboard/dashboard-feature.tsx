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
    "2cjbpqrfC92dMfASHDyftwpbZ57sENmNNdgfj9RXWxsn4tvKtCyEUpcyf3uciETCbELHLWapeLvkasmQYYjUkQvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zn2JQgXMamgsDRsRVeYQDCiE9wT2C4yZYsdQCCvfEHqucnUkDqGcRpuErSu6rjAirXxGdYrUu9XncNcEombMpXY",
  "key1": "3Xs7yScPJasegizY6Dfi2xQY6njaDEXKdKtzGac7BcwNvGXoPai52ztw1EXQfmA3jp19wPkyBJy4YR7bJudQJFT1",
  "key2": "w1fxKRF4WRno7UvGLpfVU9HtvpMc5aJRSetRBy83fPZBhBe2Ea1FTpSitxGzpQRRKvdRaPYTH9ZfHdhvV4gnRC3",
  "key3": "baPxbUuGd2U4HQrmt194hPfjhLp8hQQArotMCQiihesoFGzw1mJ6JoJKfFtWYq5zPuRrkis6HUd2sVdHi1LFBFi",
  "key4": "7PL8iazRmf9gRRYPfCf2L3bzmzJXyvtrLNNzgKTmc99KZ8ZioGZEQDiuCYCTQz3a4BvF5akqBQyajrDZnprMVw5",
  "key5": "57FVhiBq6AZx5jh2L57KsgsAdGZPdTXeRK3yNNNbJKLgQfSgvLbV57HrgdrMUiroMmqo1jA7mFJqb869v2kDiAJq",
  "key6": "4NVbFF5pDbAkEQtTY5RJ1EeG62pDMWLoWxS4reonECXt3rHf6LxYrVA8vjM5QoERebt1rQv9LmNfeGFQRVzY2o2C",
  "key7": "2WvunqruP2N46CQ5PeZ8AsEJoRvzMumhgyF8oLvNQw2upRnBqJXxDv11Yb7mZaic82PdRXsZPXp5XxESabuRTa1C",
  "key8": "5fttvgLZKCe513XSUMwjHbLUtFw5UqPE7hyCrzXzFgWS7UDFBjHBAKKoFsqzWByMhGHDh6dZMES5G4QQ83MbCA4G",
  "key9": "228vABj94owLEKRdjnnYDKMM5Xi7m1tjuBqEsfstt7NKKka1qfKFJjDsGoMGHTfdj4QhUyTSrKVfYR9gmQCMog76",
  "key10": "5Xdb35SRBPKiQvZWAhxvTsCf18Fr1tbNQbqiXjkZYBJbsfbaBLvnXbeuRMc6J3ZrZ3LJaDkHvPbjeKCRqpQEK2at",
  "key11": "55UckVDtyWggqxL1AgK4YsiQLw426KQX47cF1LbraiXV4yUXMUy1ERDVTGktdP6r7qnh3n5xMT7aeJu4imeEHGim",
  "key12": "3AtGUT72MYxCB8XJRqeV6qXdTckC4wRRG1aH3heH1w2DocnUFpsVYn6sQoqHbhg6rHFy3mgDR6nc6m5rdiMLEg23",
  "key13": "5i9oE6PZZEXv2Yrz6EBYKMyzX77XicCKjMKHJj5LPpzf3GBfjRPADx9g1aoii61oLdHyiSYZFavfTQ5Kd2hZaS7g",
  "key14": "4rmZhmB6dxv3uSLCtoD7DHHKJkyj1FgExaeWe6NTUGrqcr4VPtS6CgpVVZeqGXfK1BqnJSsxER7AkMLKqnWkJCt5",
  "key15": "4rVn5mTSbZitTeCYPZrU9722mWMrGQnZjxtHpj3MdoECBGUmyvpdrsbQwXrdtaKmacDiNgVc7zadYJyPc2zEL1Kd",
  "key16": "3yDU2Sz9r4htFBwYUNtezVQSsM5NCdPDbRNSQqkXHR8MoJGKKCA7mnvB3eWPyNoaNTwKNAdz7VHipKjPJDedbzgJ",
  "key17": "5Woh95m4DRt4HqYiYJWHgjtgR4CwKsFPM8J2VNN9J1uzMcZjMVfaknuArPV7rzPXEFvGAWrXhYqrkEKgsEbhdca1",
  "key18": "2BZ657iUWAiouyBzWek7PVCLxqaq4n4CKPzKzFEc6fWLXET79of5Ao7hAap6qFSvgY3baqZs1bZZsAgtayRXRUEg",
  "key19": "3JcnhqokDiYmrdY4waTFJB3gkwzt54GCEZZVDfGN27hNPEZkXWGDBPix4mZhoKgBbDNUZZ4wmTskxuYxBdRsZXXu",
  "key20": "4ikyT9H7SVtwfbzT1ypGgvzB4KwLm4WjCYQBZB4rBYJaB2iK3rqPNvfsbWXTAjp19B5ikbUcNCb9gusGwM6PJV7Z",
  "key21": "3ASz5h7HvQWN2MyHw96GjSKvh7mg1odU5eTarGbDFvbSKdziHQuY2vjL1u1mGbNHXG5qBCeBMuMPa4m1wonT39VJ",
  "key22": "3d3KoQbYKrDmU48LyKLt17jf1p35gToPoerQd3VUiXbh67RitWwTBEJWcPvodBTNBi5yCY9PhFQYsBUHQGxKW6Su",
  "key23": "2hAgVYn4tyWYBeQgoXervN9JiCSfx16Tn9R8VMd78DTTNSGQCjU5dceKpEEydDVzg9eTv3NvD913VtQKqFaWgEF7",
  "key24": "3E72DCqWyuhHb5UqeTB42ceU2iNModBVV6DJ8MgT1HBzD69JyuzqVLvDHpLjZuHcCjDfEtUJik9EDaLD2D2LmhS9",
  "key25": "6UzxKmfz5vQrjbggCGFkkaK8jkuQ64HFSkZaKwpFiFkLTYMVuQQVm4y3tohE1HkUQqbJ3jjRNkxjJRjxVkGxj5D",
  "key26": "BTc49z2ZhFE6GMCbZteL7jU9R3ikaxABbEXrwdTufStoWUDrnC6nR4kfB2wqC9xPJmx5dD1QfeCTHGcAGjZYMWj",
  "key27": "56U4HgUBGbkWMBU3iDdefb29wvTu3NPooJZQVfX3C4PhKt3L8248sjpXLJmjYPAuwR5Ua9m5FW9QZievcHtiMDc6",
  "key28": "4q867ULUoYEXtuDQJurB2V5ypV8NP6z1ht2fwDyXMg1oJ5s9a74q7vuT7bpGETqBM81TM52XYuhvwUCVQ8MdSHuu",
  "key29": "5SG1nehkuVbFexBKXEtaSRudL4tNHXLPs6eAPWVCbW48MxmFEUaFMxbhtZbdb9myCvtbwvSfD2TZG7uC3E22MS9q",
  "key30": "2G22m9wU2dfkf9KBsBTXSZ9uS4LedscKtuzgSuX7eJsLCEmu8HcZHgnx5mXRdBkRMpufVNQ6TR9TKb9E7wdsbgau",
  "key31": "54tZtZ2BVgPmmLBnwZMzCAHQaNeugddi15hP5sHsgd9CY5WCuTaV6h4T3Hq4YnntJnxu35Bw8X92N1NNX8QvGJpB",
  "key32": "3hgD8p6gNmcW1JDcCyXKQ2gfmTnqQ5hiiqfYCU6tkwKDbFRETAsDzdVdbaGZtawW98AgVmkD2Ufc3MwotJxBkCSR",
  "key33": "4g1MMJZednL7a1P988ykVp2DcEnuYYLwpfx8DZEMMXg3g1Krj6F8So4MWKJJp6ZCvjhpmL7cttSrk7e5phLXjihZ"
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

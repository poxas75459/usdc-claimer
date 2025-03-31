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
    "4rqAsFDB5RJUp9FofDob5dQtfKUukVkTnbtiXXjZgdykb74v7Z9yePSbBvuiWgTphPYquTVpv5PguquC8nzvHKpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TSZ3cYu7JXFbaKzQ5FFq3hwgjHQHX1hBeKLZvztcU6j7MxuBdQUpaRswv41CMFt6hxVhMNTxjFU3i3C2hkPCC8Q",
  "key1": "57t6f8mQ4h5ab536bkQRzEx1Bv3u9FB7hars3KjrCRthRQL2LJJELb7VkuUXc8hnRPQyzEQZg3TeRysCVjrTei4L",
  "key2": "3VmYPDP6ZiS8PYxqwE8dqYQAhXQp63z8myzEexWiDRkAEQEzVZs6JfAkME6aPdLmZL2xW6vyrjTdBrbuFmvYKb6Y",
  "key3": "28XLaVJtCcC3YF3HRAQUy8MXgfWug7TbcmNnDKxPEfRsSYZBDFs5gb3XJ1E9Rt8ak3rhJFkhPooya85FBC1vL8jv",
  "key4": "4zkngMH5njD7yg6cKZrwJh8fUaoA7cVB62475B4xn5iz9CSWjfSgAtFTqqpHDKTdg4MbrGhzPVDrsEXuANQA5byD",
  "key5": "4CszU11Jrw6DobTw9s3xBU3Zy8G4iGaCXa9eoi5Equ14xcoA6NV1drYBzX9BDztx5LxDjPT2PHtAS5EDBNxPiNyn",
  "key6": "8FbBc8fGxqMuE99FV3Krc3F8zfRfdqsdsGKtoPyGaSoydzFK7LAFiFhkbaAVzsUxBLQkC8dGng4txietoDWXMW6",
  "key7": "2eD3fAyKLbCvTzn7RuMBK8wFSCtXTirMHEAvm1QXgMMiNnuCrJhZKzmRCYVef4EkscjBHgbQatpjcbUGQ4Le9nR9",
  "key8": "4ZHDXQ7T8bR9vM2a6J7UHSp8y7DtVdhJGAESXzA6P8uLK2swyrMnViURxBEKcG2VMCjzXyMuXa7EmNn8WaPH6uSi",
  "key9": "5dZEKDCX4nZ1QHp5B76RuumD7VhoF7z8gz1c85odkmonzQ1MV6NhGdGELT6vcLYPRjCnLnBQX8RBvaAxC1kCrUpk",
  "key10": "23SRtCHqBCNRnrPHLUdF7MGDkcfSbMgTYPmNdLFhC2XByB5F7vrdAFxsWjY2XiMFxN8kfmEVv55xdcMiM6R46g1S",
  "key11": "2CraTcf4kjma8o7wnWuoRdjzKk2L3SSoNwLK2rYtJJTuPxth5yQHu1nxMrAJvYPwkN2App1fudUb39PpkYneoLeR",
  "key12": "5JP4ox1dtEoJAmM4yxF35iDw5Ah8kzEP1MoGieUhJdiMqwz6MSF8oJuwiHE3qs1La8QmFvK5eLd39eSS6xJjG34P",
  "key13": "43jqeGjkRcwyHHNQjq44zyamttaDrfBX5UUVhRmjeLC7QUN18PTYerG1Wv5rrDDJ57Sqd1x53Z54ESgYQutyE5e",
  "key14": "4G4Xf8xE7U9dKe9N1JLjquKy52zg9QGPFsTCNhcUcfDnHBUQF34ccdSpcpew4FJUenLaCZLCYaWTagPtWX7Fvw4t",
  "key15": "5q4m58uGDY8QXywLY4b39YdCU1VqnBCgP8sjNgE1tme8MbEXjiezgGF9HwudqFYpkCqAea8QZJe63L3f332WZXxM",
  "key16": "4wf87btYWSJjUXakoMEGnEpMWuYiqcVz9bL7U1ANTBfEWwmGtT4C2qK7hL2cj8TbMcfQkEKkn9AYW2Gf5MAwVWfu",
  "key17": "2Lm9r4bMBrf2UDmJL2eL8L4oCqPisYpXpkJ66WdhY9X6PW3mSWT36SbUdVdb4LBzXCpX38tjhXemQwcfp4rhMBNg",
  "key18": "5v4cYJB9Kr557BC65XdoJPvHJ7Cihs7EXBpLHACFHbbhqaMoMMJctAHW1YfA7BemjvXuy1BgwKkuSCvJnKuAy6T6",
  "key19": "4kUk1WnqHgSFMCwiDuUy5wqwgKWgaQZKbZb3Q1ZcWQEAjqjCCeLDWiKCRCZjRBefNctkjPXcdorYQ4ffGsDihxat",
  "key20": "35ZGzDSgML1Ae1da6W71VpaEViQ6Pn85eBCQMQNdSpUFCaNubypeGK9tgSoTiBDoquSckJCDH38ERzd6jtHcyKmZ",
  "key21": "5q1fAS7sxQgMmUexfdbbnqJxWTuh3Psa1UzT1NgxDDzMJVda64Tg9xQ3h9cFzxaE1tk6JoXL3iCC7uFdPZ8DbS1F",
  "key22": "3X88TNQ3wzf16Rq5LwEFKtDgJUniWy6smahNwq3sFKNrNZVWGWnSqhHkmcoHgLBxaizg3kyoX1dzk3jwAwLg7hPr",
  "key23": "5xsqsRefaL4R4rvK8X2Bn31o8zTV3GWPBKpXp9ZfdwW6hs8A7KP3Z1p4YCydjYz9utCixVKzm1kwdfMnkcr5xuyU",
  "key24": "2JdJE9BmYUcqZkob7m84aq8rZ9fQBWgn42Tz6D8CxZ9Dn3dsKzsWzdzaYo6cRCiHuKhfnNi4ZwSR5y38Quzh6TkN",
  "key25": "3rrnnJ7gWcuf1QoDv6fH6NYiHy6AP2Ti1EkNhy3QP9xdg6miiAHVYF48auQF8JdFW2b7GwQC7iNXGWKbzsXNdmbG",
  "key26": "5WYT2s6ZLdxsNsCgmHHTt6soqff1KmAtg7nbxgcmXTVmt6NGFkHy8FW27cPXHCm6YAxktNx6Zaf3Nq6bKBby3g44"
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

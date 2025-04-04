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
    "4mJTuQsHKXqhj2m1Nv2fBfCB87LxbmVnyyFwS2b6pYxHGaRX3MpLiJonyo9Fad1HK8JVY5YVEtRPknmEQxSWGgqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33fYiYXu7in1uSFKe99Gu2NM19XbKjNkur99zrsEJyEVypXNewgnfbyZz2Cy17z3NghhRMV9jeyJWni1huEGEnoG",
  "key1": "2Lvos4Q3uxFrSW5WQ53bZTWjJ81FZv9UhSeazPnnDV8bDj4thiJb7yB6o9chkTZtrsBfFMTtADH1obnBGHMzVuTr",
  "key2": "4attwFuyKFgzroCRX1EqKNxzqmEHvC9TE8uSkWaSGCouh9t4Gtvxy1M3DrVXTzhCTCs94PJMD3h3TUyoHZNQq48W",
  "key3": "2HVy7NrF8efBfEAQuLZJ6h8s8CzYuuTc4ziJ41RWRoWNchHhB3MP2i4EUGEpgHCoSweYATRSp4f819EaqC64n8pk",
  "key4": "d2XghLnQUZX4G78uobTP6oBSG7MnFK5gpfoTPPdo1FGp3pFRGFRL3QXDWYpTA54DNKTXYvTsrAQhFpGT3Hf8Jcy",
  "key5": "2ZwkCnbUT8D4SX4WA49aJgVGSVbpEwYvPdcUBUX5S7kzdLQAjUc1J9Qx2v2hzNH85h8cwchTkBYVBjfYvPVjTzzy",
  "key6": "fuyLss1VdQAsdyC3viykBCX5dE6FswuyikeGQBL41EAZEC7Pzo5KTzCCyvpaR2JfbmKmgA1nnkAAA3edj2MXgif",
  "key7": "61iXS4JxydMV9oWq1okdRbY5QP6uavdPPYHWyTVZMM9Aad1MZNVMUqB6mrShETWqvAGb2CUatuvEXqwQjx5fWddB",
  "key8": "2apoJzPNeg6wqXn1NjYotU1M8k6hE1ZLS6jXn3fHUzY3Ax4jyB8nvZynDurv6Do5iYN2G3sTf7vzgoVphDanXRPM",
  "key9": "3dA9Ldeadrzkk8myE7sVaE3L7eozqwEqqDma3Yb2wo27WHBBaBxwbrZh9agLkcLDX5Jby8XqBBvKnFyb2vAYg7Wn",
  "key10": "VR2VoaVCs4kmqmKuaKW5BQo4QiV9o91JVFcjYDUJ6Y8718cHpMB8dSj7TjtDYYqzos8oTPVYCPyv6vWdqLg7JNv",
  "key11": "4Q9gDBx7JbLeoUqzru3Cx7uoCrB1fekddRuiXUrfiyR3P6rvbq4z6Zm3Qz4MejQRXNhWSm8FkeUK8L9psd41n6uw",
  "key12": "zQPvWyYQKqimvgsSzVGsCNjKporbjQNQnCFhUiRXrhYFkcogmfdYRt7YkP6MXrTdqgXYZQnengUe9RkN7zN98eG",
  "key13": "27LCmU6BMUCUQC4fdXhrK5PgrSPYhtrUor3eY2aXwRHqvoWsyxfcW99yc8ScwkHD2AUPzUe9ffTiQH7ZYBo3tgLz",
  "key14": "kQT6kTRRFZu5qFAqs9UDrWm1N3ZuvtRaZa1pHbV4VhFQc7kavz2gDHkUosbCAmic2ci29K8Qa7mDwCgwxdRaDz6",
  "key15": "4LEctL76yr5PtXuEAGKujyZT3L9wrXf13WcPGJge3zpMFWJEJDp2zkwcENtnshyx6QwdbQe8ZxnVf15cqsaoeSaX",
  "key16": "2LyWYZwj52hfJabjN1PwzD8gFnfGSrC5Rme854Dh6ypGdGfAPZeSuDL95qZpWU4FrhKUuiJK6dK1US8D1NLvetzU",
  "key17": "3124qMG2UEzV4H4MgYGFanWo8nxsh9HtTgWTe316eVR92cbGGvo3HmzR96GWjL3P9dA55QLxmBB3fgxtjQ1WkHph",
  "key18": "34RFozBhXHFSnMJiAyRm8R4XHpihrUBu32tNwkHqZp25e5XYhwmkFQL6LAEboMzv5cP9xkM1GaCajZbZb6hUrSWo",
  "key19": "4XqYVX4HVd3EhuFYuAyjwYXFWFreZdDY2taPxGFUUSg5JsWC6ZXn6HCHfybZyzPDJwns2QbwZzssTydjPpBM3VkC",
  "key20": "3FXYNN6guVa5iApcaxRzh5YaTusnKpfbXf3jDnoxr6cMm3okrajsRUnSh728rH856QYt4rhGau3qcXMwi1vPW57z",
  "key21": "Uf52PgB3STb95ZGt9JqoD8adwBaivAESqVu6ahUHKn9EojF5vycN7Yw9uT76GAMqbGos53F57vhntnZwK7cGr5a",
  "key22": "5EDQripXVwqxCASXpP45WDmWPp9eg2EDidT6pwM5tgTHJoge8em1HGFms7n8SgCkXQ1cdhyYmUgJz2YUQauU12Ev",
  "key23": "64Z2SPPsHb5MfwbP988R2dn4RLqdms4mimobuDTeDsAVYQKrngp2ahps37vD2CxHNaGPWGha1nfBsr131vnEYt4H",
  "key24": "5yMp1VyQhddih6QDEohkyLu69wBYJ5RFu8uaUd12fGtQYQtwvo2des3HKChMmkMJ93xGVbBDfZMoo7R92WCND8xF",
  "key25": "abTtRpTRmUjEjyhR1ceTM83qumBrzinhk4q1pgA3aQzBsSW1YbrgUwA5NZCGirQoXFKxPd53TkoWtbJfSvZCqj5",
  "key26": "3qtfDL5m58TGBsBtWiqZva1PA5svZphZ2X2GUt26ZnEqCNjnbKoUpRtfWjx4owqQ1K6i1DWSUvKgu16DEeoD561w",
  "key27": "3v7Zp3KfkZc15qoq1xkRJpgmQBLxbuuQvbbownpP3MM9SJrPQGtVWZwv9SKe82gTZfS8MrsnfESPobtWoDfUeL2U",
  "key28": "4mZkEmV3s4CV1j49346NJtAtwx2vJ5oBwr5zpCc3Q1X8SVuHiSaWaMkyesX9qCSndhkaNySPea9A5ejMUbC7Kupq",
  "key29": "3KYKgH8bcN9F87HqrNJGAa3EDi9gt12qxXyRm4TA2Wx9c4D9nnS6UJLR49Ypb3JPpT21vg8DA9mqAtbQLuo2xqKB",
  "key30": "3Yt6XPtSPtSGoqtYyTPCiKHv1p5fAQ6eMPnEjz2eSGQ5fCSfkXD4dpLEwHj8TPpNorDCmMWbmggz9Jq1oECEbr5N",
  "key31": "5xgyjDQ9qmLFFAKewvy3eGA523SpY4ZcnbTjMRfGZSAVdkdz5jXjAv2QRuQzPCbGjNz7bF65vSZvwztLecznKCVa",
  "key32": "5McJm1wLHUiN9qAw19s6xi145wvh3yqE738WRf3jHXdgjKV4Ac861Fjq8CBRVBhwZpcqgTXDyfg6avVYNhPGKxgS",
  "key33": "3bXScFeAg7LZpkbqc8XYtWaccPegezzgFQTDvDh4zyBjytfTbTRXKrFH5LUYP3a2AuwPeAqb2bsRSph4pz2rbhLZ",
  "key34": "RAXYnKMQPeKwQVe6Qx8o3m3L4VfkLJLM2jqcnCa2kkA1f24hRyum4tjdXNo5p9c4pKttWcYb7eSdGbPxcGmHj3j",
  "key35": "i4dNT4oDMx7hKo1vLn3Sek2RoBm1gwNevbotSmNQ3qKXeDPaNCXAmiA7tfgW2ZhtYM2aec438FD4thjsPrX6q7J",
  "key36": "5mVTegEj5r1Yh6gCERD9D5PD2ut5tVxjA5CZMW7x92W8pWF7RtHVxVZ4n3vdr5bSdR5BmBtTeAzpT8XZB2irx75C",
  "key37": "5k6xP8YAdpWfHUqirDhUzqzPQBg7EuyfzbQJsuyKupz7RbzhAqjnRMU65TmJ5fDBUzM75Gckn7C3QjGq9gaJkqD4",
  "key38": "5EHUxr1WLicPCxM3bm8vAcBxouD1yGudMCmXfHEMhCyVWeKQW1NDtEAUMEr24xjdgbhwhf3BxEibHtYrRjP4GMEB",
  "key39": "2diRHKQy9K8QU7mgerh9vxGvXhUtpMeyYnzUjCzdB21g9etBGHzWGBCYonBSYexrEtjjN38vwNu5pQjjfxqQ451k",
  "key40": "iEW5LF33dH4rmP5xeiPtEPVSwfLPRjRbCvmyrwAbxwCMhSroNYzYnyDM1eHYXvTyCfaLqELSiyN2vkJ3s5dXokd",
  "key41": "3crwYbxnRiL9kWfA9vshZbNdZNqYhgxFXVCiswjkev6zX4fUbegZ4aRZuJqaSBwWGbdLf2JTvgoeSFbtuc8EjiNU",
  "key42": "4TjEaNx9FTXsfQWNkzHiUCRiBRhzmKxu82TyrYWV48KNdTGwi4VZKny4v5Ji2Zp7jzKvNW2vnQV4am2PE8QFhKtZ",
  "key43": "44ifYKWLwegfNzCTHSZVM5dZhweUfJrqme34cuUEJdyJoYHkyd2QjeU8kmphVkwpVidksAin7ARQnXDcmdmDoMT9"
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

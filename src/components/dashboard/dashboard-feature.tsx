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
    "2C8s8d3W7DBjbZZPuRm4QfGFmdbFXajhrG1nYp3hZcrkuHdAqzEnGN7whKQxtkzbBGKyBQ5xDLgnRKe6aWJ2Pm8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FhpkvFqZfzTpz1NrikwAUMUvTmYQ2sgREY2RpCXFgBGuexrHuTaB45oAahNm66nWJSBJ9MWA3NPG1HE6S4pEbED",
  "key1": "2b5T9r9dQtZhZZzm5Ks4MHA8eMDWRyDf79VrZe6DByTjcgjDf71AGmo9nrmpY7RcG9TBAUHhFBaUpW5VrSgzstNw",
  "key2": "3Ep61g9hYpqinMxegtJvzTiZ6SRgjD57SseFoXcSbr7VNKvS3UccEQsCYoeYMXB7ZzXVszKUJurPvwxB6ZAHrT5t",
  "key3": "3ybPN3q1vqzy8vWEwodmzZmLRHWiaPvk4Hyu8Gugz7JMFqUhCiq579AFxaXVeMfaWT5wY4fUwGkrEGuDRnibiQva",
  "key4": "PU4khihvjFtV7K35BRwbx9W7ZSs2RfWX7nKNkVVmCm9jn3h7bhJHcmW6VptT83LA6Gn4VSb6D6T657qDfpRX8Tf",
  "key5": "5eAhP7XHHmkRnLPgdfLvaRsaWaM6cZh3N2FJ3WshnsPFU1vWUxN5NWSJKXPpeL78gw8b1f3DBqJR8gE4k2FLrhhk",
  "key6": "e5hkJoMf4thT8HVChPz6WY41ze1AMKsnypwobSjSsw1y46fF4ZRW5wezJYsodZK5gErBiTaBZXFj5ig9MMRye4T",
  "key7": "wuAkqz5m2wj17Cax9wh6uDqmR12kT32Srfm3vbGhgJ73KgPHosLEZF9UVTd8MaspaMxgQTCJNBRRS1Myp5EUCw8",
  "key8": "3sP5TqSkCdV8S3B78sdgojtr4rAquCuhvSQETSSyj6ySQK8qK6ZeJkDy3jKVZyNjESpNSr8KgBwdnZBd52GwW45K",
  "key9": "5CTZA3bjq1viTYcXFyTyGSLJXhCHfCbgeMDzC2PNVFmgTTVFnBt9QCeC7Gbm4Evb1jY6uSkUFK72HzHpdYiegqu2",
  "key10": "hJURnbBTUhs1wB4ArYy3pEteQp45sg6dNzaJccWbKSCtjvhmVfp5mmq3ujs47xpw3FyfWtekSMe5x7n9SGSsVf7",
  "key11": "HA7vizUUsk8WFmPsgfTwBR2LdhVqPqdH7owM1byGsMxWbQB31VGjE3fijgStsi9sx3N4nLgs5K5ZbwEenTNWwV5",
  "key12": "2ci5feZuHrJfpp6syNwoB6XqAvDmJnmgFLyom1WhdgSvvqw3PZDcQwEs7CkaECYuwVnqB6WJRXqjYWEFF2r5Bkkf",
  "key13": "5vTz21jnNRD3JwXUVtbkpYZBHtdLsMtcDAe7f7ZWeUQkg5PaQ6Duy7o3TK7a8Cn89NgtqyRiadvJTqhLGzwgVn9k",
  "key14": "62yZLAXG64g2HKDfU7hxteYXB7icfzuqgnjFHZrtu6JVJ4m9kWGWKHhb3iygU9uj4JtdLGZbMwB9dxQ5BoS6oCxt",
  "key15": "4E75SYuSPKqUpxrwa6QLe5egNhjv5kCAdLdXyKcN6fA7jAFamkZgkg9uTn8Bif42dixESk8VG7KiC1VySvsDcAst",
  "key16": "2xst21PrVhxkrfUMmipAaGxZ5TLXEGD2sSfnNs9rBdAPuxpmZdrbU6kr3yAwWivZZzNi7YYqNrZz9aqoPejbGN6C",
  "key17": "64KpaNUnuqYmTS96fBsZs2ncw2vTfy8Ys9w2TdsShi4YEQXwdZrtr6MfTAhwF59rLjp4NjdedCXGSvYEXxNksYas",
  "key18": "3ycHronpzzaz76HumbkGKddtQQXanR3q1fsC1HgVBxwbE2Ki8wVZhA7jdjKPVb6PTgeMXSRM2V4evdJPVY5bS4z7",
  "key19": "3SbT7o7B6aYZsvHJYTwKBFuU9a9SJC9FiknqeP5kCEdyEQ5zVMSGiedcFUWx8EGgR8KC5TJ1XMHwzevk6CBxqtUY",
  "key20": "4SFm6CaVhDX6ZFjrkxBm1Rmz2hXFc5vK6MQNKX6pvYxmJGyv9YLhuzsyABXxp9fsmfbnb1YVwV1E3sFXYgvtA4pC",
  "key21": "5oVKfrEwqGJJj4qshCa39qkbBRoF6ie7KPGFnaGaTnWSfbxbhJcZiUUzfVaNHrGjqkc6z6DkCAZQUjKVExCCHScZ",
  "key22": "5omU9avCSEj9SWYSdTKtux59hjNNXqhPGav4UqZNvXYj8CsS9X7aRGCwSfg2gAwa8FNVrBLGAuVf7gijh4wRqBm7",
  "key23": "4zsQurZcN34cao7JjAkvVLXosRQySW9K2iNgUKhrXutEsrgPTF86TEY1pYQcz1opjrZabMj6RsYrevx47Yag1ED4",
  "key24": "3Six1kH8DVw17vcCTr5zb55LA4Xgky7dXVVVco6uW1wz4CyQUv7fSk6R3m3iCsLUzYp7GrpEzkivqy1s5yFTUJs9",
  "key25": "2dmSsG9sBfWQxw2snVnZGJpGyJiQFHsBzsV35VN3Yzodm5vrDVrNo5ySABxiJrDwaxqtbaRbfB5t7H1CCzZEu1oK",
  "key26": "3pssF7ED49jcfkRjMMxpRTtqstZwqgNP2XfsUGm6hcqxP8Dz65pqHaVk96fCyzR5pfid8Ue32GWuMvuWfMdX7gNy",
  "key27": "4n9YtoKugnwZGxsRNRAG53WN144NYskcVfEXp2WABanKjEEABzEY4xkpaMw8yPPR4vGAmysDNxviAPoPE4JDAKi6",
  "key28": "2r39sWNec8F4pW8Wa4FUf9G8rQTK4kF7dw8ZzkP8S99ztdb2WkCXjVtsn4kEaLdokPupFjeAnczRHQ8rrXjLausv",
  "key29": "38wiA5fpf7SJ2JzjiBG5wRN7MiXN3PXfCVjvGcEYq7NWsoU4zsTRX63YyUFtT9EWDTU68dM5fCbe32rMdthWdPkc",
  "key30": "5Gq8KCZ1DMDomMYdb3HEME17PhciaprDQDnDUNXDpLGSKCzgchWZt1QqAvTRC6z4kA3i7kNtDutXeivh1BiFLmkQ",
  "key31": "5dfdmjXzajK1Ttmjx2QJNTTerAJQLUrdobUXxVbcRxNxXhTFWsRsoegaptHRiAbkfqHTcm8LJvWf6h3HXJqu8bpw",
  "key32": "gpELJraXbFr3Bo4zm6zqKNmPAp9HYK9mfBPrkANFcQQBW9Y36gbpEk4uuzyqZgs9KtD9dRF2GWP7s7wZsVHAeEX",
  "key33": "2VxHHbTUdQY1Twxdzh3hnk6jnhFEgr8cjbmZED27pcD1Kb9S6EJtjsYLPmtovAc5QP6szDkVF9xh77UDB2R8S6T",
  "key34": "4hkyGEXhp3xyiVeERFGsZposnStxovd5tV8955ewEWzeWDKmsqM3mRGh5xdASR4eVYab6SYSHLB49gMDxZhZrBt7",
  "key35": "4ZQZ13kLKCzBcvD9hLnK2884FToHq5X4RcPrkDraGdEoBdX9koRJr8hR5VhziH66SpC2pKTYJXxFvoKn5TjT9nUy",
  "key36": "5h7D5FFdaTph76thCyxhAZC9UdzsNb6djSqqbBpEJv3ypLyjepsDsPTruDwUpZCU3YxaRSjeE5HQQQSZppufzRnv",
  "key37": "4Nx5ENr1zpy7Lfm8PSQaU2qQysVHQgdfWka3qGeBGsnhBxveDeFYb5WWvNdFj7HausZ9KWjLwFN4A6tnFRnxrCPB",
  "key38": "2VvEZG8wrGtbiUAKTnW6dyfKEHMaYmFG4qKbrVhZjot76RLVMKchbfm2eUgwk9cbqAaYegn4gRQSP2HaxwX5dT8x",
  "key39": "5Jn3iRETki66MLPLV9eM8HCpGeSGpH4xFFGtRTjXSfbQTSb5oCSiHnHudcqsKYBU7JJaDKfopWVfnCNDEUTtXMr8",
  "key40": "227xiyYhKG8LF71duZZ2Ds13n5z5LBx9YrAoUWGxT5pCsvmJ9Sz5BKH3FvG5sGwiQ6rjKRsEoos29eKWoK8nhDRb"
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

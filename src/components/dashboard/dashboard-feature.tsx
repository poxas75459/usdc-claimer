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
    "2zAQbLDPCXbR4CkRvHAHVPTGY5nos7Q6Gt4YkPGA72MXHcGo61TursPMACRvDvXRpCgn8dVLmxBwwSd7cB3eKzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZtrRsJgnTUNLprwyCAC25NNjmYBk8NtYEeaH2eQ3bWscAVGCEqVwowjtjgJmPf6wVd8w4qsbvNaKkECcTSKPhf",
  "key1": "2uxTme2dLQrBb2pqXx9V5CoVCQnAdsDhBCeFBJNZwE2FwojyKQUGDR9eBdEQRd9VqdBNnJuzr5PDvjU2DMjpTAqs",
  "key2": "3WnYZfkNZz13hoDxdVnLfN5ZiH9be7Ru2LQnTwiKkmnbDTcSgEduBEV7m5mqJgWfbh8vPqypHkeKQC42mi5WUy53",
  "key3": "4oeWeKg9gghYJmdQLKQWTstFRKoshQr34SoVjxFFemYm3xsTSnhn7pV6Yk3XP7V9rXRskwx774Co5zMXuKYfFzM8",
  "key4": "4TwAXg5UZV3V1kfzMTMJLRvbBotKMG6CjfSLLGbe5eR1oFGqeeaTz6Fwfu5136hiqQ9Dhn9yNN7342tFgUK3xYM1",
  "key5": "3Zs6pxyTNNAfo1rH2gcvaxaQDwTzPcTCGwo6WGBGgUesiWENqacXV6oRQcng2g4Q6vfZrwBfVdW9boyb8PcxVYtc",
  "key6": "59bRgu39NXrVt7JKQoJBErtAuVpcnSo7HLUNAMJpjKiQBUm1tHnvC9SWcKyFjrbzg9Kin3utX3BS2LPuetiQN3Vn",
  "key7": "47VvvSXci3TYKXG4bSRMfwxXdGttARS3f3nNpjYZ3ZjfEo2Qhxz852BsjPx1EZCB7cQGFdw13Kv568PS7sWortim",
  "key8": "2jwM87iwFHWdU7SvhRJjVZUET757vVsBBD6yRdk7WkNMPPwvpYXDmKk2jsTQDewF7ay1h7KdwHeDUd9FnS4ginuk",
  "key9": "32SXqCi7ohuzgRAortaNDv1cWhZeUgiLmvjjMKz9HN7AQMdLUnsRcaTW9fE5G5qyymMPqiw3b9bonYo6AtLCdks",
  "key10": "5VNmucHTkaz1gjfxiexNNX58NJuQBcCm7HvkuYvCSUpe4g1nY9Bp267sDvGQhXrki8Gpnx4L49e4tbHr6jtGyT3e",
  "key11": "5pJs9x9Fd8wKPjpDKMjCbyroCRQrNzKw5m26uUQxQdhuNLoAwHGeqdEAgm7YbeabwZhdm9W4f45LKcEkKt3CngUq",
  "key12": "43QyXoT1R5z5c3wSc58AV4QJymCqcmikk2kQjxAabyqvwwEhKqmEAWgHpB16iJ5EVt86qya8ehpfHamMt4Jegjvt",
  "key13": "37ypsxHqFFDBxesH6pTDrTRWf1wJTAMQAbQLDVCc3favWve3ruKzZS1wPqZLPdmXwMD7xmRBkPFoX1yeJa7rZsFS",
  "key14": "3chdt8jEEBH5GBFmFGrCzvjpk726ix2rLnKioF5VSMLwPaF28NTH6DsysjNWs3KGkFrXGFi6bvu694sNLcnh1KL7",
  "key15": "4bHqyNy3UuoaYPBzYGKJTbT2czJqDuaXivDA1SmqRMxUj9Qrk376buiG4pxyZ1Vc6gLBmQwRVTsBC61BSsM4xkQ7",
  "key16": "5WqZ5gE9eUqbmth11nV2atLPi6r4UAHpKjS5Nf7zDBiThswNXuFdi9jDe841Ej92yRqWX2oaU7fcpgrizAwoV2uG",
  "key17": "41HfKz8gj1V2UDW16vU1RjAUP8249qF91uK9tVLjUL6cB6quaNAy3QiagtUuSnaR1egYRCyuTk6fh6eK6JtFCYbY",
  "key18": "5zCwZjVhVMoJnL2W2a8dCstsby1xzcraUrQFKuow9HcxUKEuEDcJ6uXNSrr4VFDwphUQiVbGGCuR6wb55J9PdSRh",
  "key19": "5FsbsSngywDKnsCvhNcF4A7SbLAHFnYsRy7raTRdsy1LSUQPijZ1AEgwxX9edxGxSUDwjATu7wGMkR5LcrQotW6e",
  "key20": "HoQe7jws9JECsqhMd9iH767drYWek4WZv2PDu6j56nNKTY44yTTmAszfhvWjce44MhP2MmbGFwqs1M5t41wziMn",
  "key21": "uYbhG6UFjLP9faWaqJbNgZ7ioAv3iaTw9NjFRR9oZU3trsb411tQzRpzzA5WzZTuXxifzyJj2j7nyn2QqCZnUkc",
  "key22": "214z5179wDF1XawwqYCMCbKUwQNMdZtBB8BC1xcLC42WB5pgyLV9Wbvn3LYCsH47qgkCk26ZMtUJvZnQmTSsdFPb",
  "key23": "zhkdBp215YZ3LZn21JLsKUsYwt3MYhtPuRMirLFzf6DbqBiWHWDAL97qPT4XvrxcB88PjrxkhFEM5ihA33uEqbf",
  "key24": "4mLKfAqVYTEZgjXB48UxwggPorpwv95875BCjpBbEoGX9sRCkTWsp2JzW4EcwxQKdCpG77vxoVmq5o83FRQT7d5M",
  "key25": "2hpzP8z752hEHULgwRWujpHaAY18nzVEiWo9qmJEPshG7cCoUm4D3byP4Yb5GWKVio5jTehzehvXGySrVHWYvu2o",
  "key26": "4ZQ6nDwgDED9yRmXAnay1MsZ1gFyDqCzV38mHL34A2A1C6N3MABEVAVPpjc2wbo2x4ztYPU3oSSc6FvUDd2Ftato",
  "key27": "3xEAEu65TEtQdLdFPFYv4UDUNbyKZURkJ1QwHptGDaLcSFtF9rM1jXY6dYQagBF5GYaEx37A1jM6DvAjtuL3noAW",
  "key28": "2s7xZfY6xhxcixSc692MA1f3zpZR7MqDF7bQNiE7d6UuLXEPZwRR8q4zgtJSB7yYLzh35uzMskMgm91biyUM2xNB",
  "key29": "21vM8FrgdyYHQ8FFHae87oqrACHyEf3UuKjwaj7xZbMJxx2Afo3FRhZLfc7herFYo8e8Cq2gLjaffQ2Ln6A2UXpD",
  "key30": "KTm2h782XwyRsZd1Hzz96XXD53RJk28EpEif6smYk1ZGUtttcjRyRMt7GNskUAvF8rKZU9x3uWKeks8apf4BVzU",
  "key31": "4Qh3jVqBgbrWsCngiChJ9ugnrwN13g742nHxSZFGH21iexj7ML93xKYcqtbJWbs8ukFiyAdvSti2WfbcPbfqGyHi",
  "key32": "3kCS6D61F4mMCyZHMoQQZA8YiFMNhCuszF3GpKkGxx2KTubeQjAsxaEF1EJvJ1kTaHtgqoCrQUWM6YXjJ8DMNFYt",
  "key33": "3nfECK5j4kWrzuF5suW2vr44jeAJZfqJFqtvr3cCx8n82wyyoHKVS2jUAHXUUEGzJDBzychK3BVUCmSJAYiCUJsy",
  "key34": "3VWFHdSwDXs4yGkJA1yUK9aE7Mzogio7ffuJyUrKo9VJ1bNRxyWeyzidWFiS9Hihfg3zvbeQTMgccKEiTawtVoKE",
  "key35": "5cJFXdsNKRXa1q3mqfaQaCMydzhQiEJFJGRPTLsgvB81fvzzq3tsBBvoVBjkuSMQYbdbYQ1tD8sXx3Qait5H1phu",
  "key36": "4SnqFyzg7VR1tj2ykRUF6Dj8Wn5rp28LKrjmb59sei9ZV6cSo3ajfQRKE7Tw15798VrRcBvThXCPkhNSNxA8zdut",
  "key37": "oXWUEVFB3yfT87q9rSd1UmXosZ33zUQ55Vm1PoZJQeKuhQkjiqmpN11VA412EFEm84NbrZEY1bNnou9FwEg6Wuv",
  "key38": "62Zii6mfhZXd2Z1pxde9PueSHLy6oKgHANHZnH4fKYYCoGMXr8v6bGs6aoF6iDhXD5qLFQbQuL79ua1Qdw5MZBZR",
  "key39": "vviAHdaqdwqwV2Mktu6LYLDgzNc9DcHR57dEq6Rm1B1kB53trs8CDkuDWGfzz4qkjuVbdGeegTbURV3zeYR628z",
  "key40": "3yd4rREXohbcUqAA9sjDSihoR3PbEVMySuZFwr9kwgv73DktrJV5rNRXZLemC3Aw2CmpGFf7RkRS8BTpUepGF9b9",
  "key41": "3o8DvvdXnBebfkfnYo2KKSr625J7yY4VJzdPbR3bA3ztnmykUARZSimYarA9zsXNAfvJcV6peQ9mmwP5Y7ejxpEh",
  "key42": "2cNSwgtGEQWEHzfiHp4ibREcnc1JTPJNw5LtmTMZsoRm9QvNBkcNqN4sLye7JFkanUTzbXxyUjNLtscw2kKtiNm7",
  "key43": "5GN4sMocZ9brvu2D5TLv4qcdaahwSKEZFoUvUNJr7cxoftkR26WQC2B8ijEJHHCGBsA686vH8KwXYNq42xayQh5A",
  "key44": "5XE1V5sxHAkzWtj1rp8i5VvXDjG8SH9mzCf9Acs1Ypv64bzCq7Ff8GMERgZ9j2qMp1SS5KQyswB8ZEj1yYmEnYAP",
  "key45": "4weA6NWNSS6TgHLuBfXjtLcLvoHeAnKpXZavZf1EFH2VauJRhPzmWKXYgw4wg3Qa4cZuofz1nopvBgxtsDgyuXbK",
  "key46": "3Ze3DGMADMpJPnphvVb3nubSw1TnnEuqfTXx5cAh74uG2vxurzLQPiLkX8mg6n6xZwLZmMdxBZnwcpVKKCgDaHhL"
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

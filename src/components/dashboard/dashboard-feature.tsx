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
    "3dpt2kL3t7yd22zHfS7VdWGx2TamKo5xqai855en8PPFwJJzRmp6saK94mbkdzRjimRCX2VW1MBXpTmZZXRrGrDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kA4cwsd4qFgEMz3ZWXJpJjPA6AeQiSynnkmaBpLzbUqKBxzWsDDkw93o9mFn9DbG8BjvpjMFqcvSStYXLJCJMQB",
  "key1": "2BiXLGMVwAsGnVukEWGxgV6XDjXRKcvdgTnPMCLb4aH7zASR8MMUj1qGvSJGpYa1Z9783g7djLiYid4ntWrq8mx",
  "key2": "DsBYA8Q5yjdRPRzsE7R2brAin4XRj3uwmV5yTUAngPQo27jhBtfdcJKWmq5TD7QeRKLPNToa6qF5KigWfsjwvPJ",
  "key3": "4nsJCPcNghmDqwEFR13kqtjEhmcLkEEYk66LC3ZTwgmDtP3PNqkiVRh9imuQHUGVyGVLpmAZroiW7EkdowVb1CVb",
  "key4": "56TKggsFWR9n6UETvNMm5m5F6huY199Jsj7VKkNeyXy7a7ss3aHihmEUpQFUTqF75Qwxno1USzHcqFYG9iXUS2dn",
  "key5": "4coEoYrPkWyo7NuUL4cyduC1swG1sykb3swigdAMjZYPU4Fau5ocQzQfRYbRDoChZd1PYRnea7G2UFsEbctUA4kZ",
  "key6": "44yfmjTVShVMHCcwBjHwREuCiJgn5yHKgnMsBQ9fFphWJ1gsGkaDLkTj4BzakSrU1cErQR5oA5LtAf94u6xcmeZS",
  "key7": "3PpiM6wft63WqU51mC1FFKV5Rm6xT1EfLGtkcNRy6rMYdTUwJDYTZYWG7rjUqm1445h6eBdgB4BT4muRR4BA3kcN",
  "key8": "4S5afUt8KdD5hgqRSZGC97ASpernT6myPbemYpcanyvJ7mn2nZSZUJhA8eQ6RaQKwJ7UR8GCJpExa6mF1XTiGBZx",
  "key9": "4UZBY77UPUTWt7LMaTBzfc53adkym6ddqFhubyDohLbGUwcN4TbCqowCn5X9wukBstkfwTHKnvhWQTTKNAYs7zep",
  "key10": "46oY1hdEwUisaXL4snuRTthsiom5dpgj9uEcu6kQxSrhqJmCkcWCSYfAAiRRGK719t3LfwF3c5TDARhPrk7zpfmx",
  "key11": "3QcaTmHiHQ6YFQpytP7Ern4RXR8uytrrNyPdrkNxEujwNAdkYxTeJDmKpxVLScnfKFGaLG7efhHHtSTNcxoqMXTG",
  "key12": "5TVTzK7AHzgJnL28EgamnRo84AvcXsnPMNnp7KUHZ7tSrhch6Vs8MGsVQQ5fGQjuEUyA5AGduddUCjdNm2oJNusw",
  "key13": "VjqDJQKVCVaUBoUES9Fop3gvazCMGgmEvqPSEk8EdLVs5f7t2o3fAJnNqrD97UCst1BCcXMD2Kob9Rim23V2CwK",
  "key14": "3Tc8VHhGvM4Kk3Z4X8Xq9PmPHXX5MmCWcorpBebNN5KMnq6SEjJmCrp5UtQRdAD6LSeJ3ZRFPoVYruN1ptTUTafw",
  "key15": "4EEW9y1sA4EC4cJrPtXSjUdK56iNP972bJHHtBpqsQHwpXTy2FvLyBkzsfviD4XDqj9NKUMMFFK7btCPomvTAkqW",
  "key16": "3D8AwXkMSsJw7V8eRWFcJJMaSgMVDfHsREQagAmcH3wtQejCq6DvQAkYHM7tWeAJBc3LGUWfJQEGCFZCHzJQduCK",
  "key17": "5esm8qjEnYKGHUGtbFPy7c7hEx6G3NghTzeb9aP2Gh1jwBSkAVyXBnqnDamrhdMUoAfHLAUwvq8bapeG93TQw4Cj",
  "key18": "2R6crh4RyizJfmRF2qxh4WsCT1yVxA18igr3ynGfpn5tUQTAV2yKW8gf4xD4DvewU5v2YfBQD6SvZfEuuJ85MV7V",
  "key19": "5jUZdZb96FL5oYgMq9U9EyMJ9RWYrSjjfTWLM6QzzroyvHM9WiU3pDhQUWHNTzBogBosk4mF6QE1agpcsT5Kyamn",
  "key20": "2yjKBr3e5nFCL5tQSAYj3R3Hq17uQNkPHsv6PoZFQ8yceNXpzG9kGgtyYbrhTTmWe4tfaST5nRL4q5iRGGBDzZVH",
  "key21": "34hgZe45cJw6JCPrRcb9wqPGzdWb2Ed1C1FxWDGH8kmgK9gxagZXmN4XMZDQMjGqsS3WG5LnFbyJzyu89M45Qgp",
  "key22": "3HaYMJpjZeyZiWEWHKDCWsxCx9SrjU1xtiz13i7aTtGr2KxL77K8oA5aSbp7gjJyDshZEeTmv9GrB8PNCwiPLxhj",
  "key23": "5pa1nKbjdFLiXLyrvLRpV2LonbY2sd6YE9shr659twmHZ9cjsaqie3ZC2VwwuT8zYqD5u9CopjTqUMTSsv76tiCJ",
  "key24": "4hfHAzgHoEXgn1NDx8MFbDyuV3qmNBMsG5HekY85VwoR3p267o5vY2wcMDL53ChVyECRYMSmXS5QFKbNMwVEJH1T",
  "key25": "2B8pRXAGdNKVMdehY4vu13zA7ndLqa6hxQnP1NqTVhkoJEhAXqZsQQSQrww6X88svwkh1GBGVVmtAx3ULzgBUDro",
  "key26": "5SpRd7CNv4eMAZ7Fz49FsAvurtv8qwR4Be94tAvRx6dKnZK7UDUpUWd3vTTgHjM1717tvf7dTcFF3D6gik6eEDAv",
  "key27": "5sz7G51sRSrw8WaZFdvBTUner8g8ypVedHWRW6SBPjdsaiprYG7VL8UoCBXjS3ykkhULM2koL8sejQuS1GJgqNcV",
  "key28": "3ro5D7SLR6yiBzRpqAgDPYyVY8eMcNHPVCF7xMAE7NJsFfQCf4VFFmzb89QqQA8sA92ydJZWuctxDhMdRyTw6Vfu",
  "key29": "5MpsLwq8dbKCyDfUGBukZWirxNyBP6tqhY49sHp5ir1cBVb75rV1LiDPrXhSG9DKiSWTqHwdvYpsHLEPNWZHuVuY",
  "key30": "4b7iSKwewRrvJwBRgNPtgyyuo5Leua1Ve1oZgQubsxgCbVfbkW47CRvpkpwSAjVRgboD19jTPatXtmKZ7K3wfx7S",
  "key31": "4F9z9vRMr62yejTP68AXsphQuZL7b9nCjYyUvubbuiqDBo3TwiGwS8nwKtC6kT6167m1LXcYZUutKt5NqNcGPuDd",
  "key32": "3EXW3k1K6bnsRt6SLkB8mzLChqrvvaxU7MU25Utwtc3EGh9Hx2wssvWZiPAze4SxqNPqzQu5nvHjRKEyG3FmTrK1",
  "key33": "5QHMEEV7ETg3QtPC76TNNpU3x94Skqhx94fUetWHRsXBzZrTVYh2jRKJ2EkZfS8LEDDK4q8LvyyMayUeRegPmsmz",
  "key34": "2fuBQWUc2hUFJ6yTnptu4dLwGLKc4mPnC7u3XTGmkREMjzUiNLnThFjjvX6o6S1YiSVXxM1WXGv2gSrddawhmwhv",
  "key35": "3sC3czpJueMngHyKeHfs8AssrxjZyiQ2djzCkFUgq4b8o7cR6eRjT4u13FUEQbkvC1w8bdQJXCqcrdE1uLwx3QUK",
  "key36": "3Bec9MYDXqmmMcdSyiPopwDi7Lt3sHi5RcHk4R4ssfKDDhvh5AQWTPMRDPyEA9i1khfkkU6c8cyC5nbcXjKN3qyx",
  "key37": "3yvnUZUn6qy1wF1Hsxucb31zMc22RsbZwdGEBQrAvfiovQrtH1My1R4AYv1AaMhi4mYc4ciu2diqcSZV1Axk6a9K",
  "key38": "oK9QA3mutY645SCX5RMwWwmVkmMAK69UreWZy9W66nLqzTe8N1cjPv2MH27F9oWjSyaE9eSuaKSUCyYD5UTjs5m",
  "key39": "3iJpU5tww5C3G7zkgWW347o8wyznzt7je6oqKfotpqGyeP9STJ3sEWytvLvw6defDcJ7GB6v6TnsoSG4ymnssgbj",
  "key40": "59VXtGtzgwXKFGbB473h6ENtdTyDkss7WB57xvjcTWgCViMW28HnVXSBZg88Dr4PihK4z16dAjzCFDCxMgpubT9t",
  "key41": "3TioJi1RNY7ju7BpCZ1UxMrvwYi6MCAweR1ZSkhLT4aRaNzsyG4scG7AyiwLPWLZDouRHKD1UqbdhJRy9Rc77uXf",
  "key42": "5PN6xw8fjnriE5PnChvZsQ4p2H1GHtJ2DxGqmgHL3uFDKrBhUu4YuzCdU6SLbGBDKH9NmJQuhEuLGJGx7A7GxhyA",
  "key43": "4rnejxMuLwvES55bD6akFP2Nsxsd7pszGftZ5e5hhfULNhEDu8EkzfQrAaEfUqEceHf7QbDJrwQWuV8E5FMQjmvh",
  "key44": "2kMiUQjswyfQBnRHa9mmn1AbF9ZWsuGHp2S3TM9F2etGhuTbp6Uknfu4dcdY4ga7etGcj91AGY29Dm3EeqbsZ8z3",
  "key45": "4ZGW2mE951YT1G6kWSgHUkXp6pugxpnMaHFrpd2T8BrLkwRfDgSTQQUtpvP5y4ioJXpCG8oVgLCsTJRecTWHXpCw",
  "key46": "auH15mu5Gn7K4t3oQd6ixnZ3NUUzFHWw6m357Jwa6PgkzCxtY613Dcu2po7haQVrBD2y5D86fWUhtQYFseKnzsU",
  "key47": "5tHLjJt8nsT7U7bi6ZBLAM7Pgd5daXZUvUszc3vjBciCaXrjikaN8WGU4e4nn8vPcgsLRFjsj4guHXksBEW4iFuB",
  "key48": "273bvuFxDCALu9dsEBcwpUGCDogP75VSEmTUm6YbA4h83UJwwr4fSAJTAirTPojhGUK6rJE7fpnkGw48CpmF5Adu",
  "key49": "2PKCe9CJYbgdGKczUuqRaDeAQVfm7xyBz1uKYAA6fFFggxPEjsEoXckEKce3NieDgF9vz5aebUtSxBiJbhNZA5ef"
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

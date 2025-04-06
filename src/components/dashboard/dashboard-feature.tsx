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
    "5p4XHuaHkNwUCCXTm5udNTwVMD7kZKsxxcfjJgKraNCNvQqWBy1nxCdmJSoaXWp9P3sWzkUbTmrnkYshMxqGCqGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F5inHx9EFABYUBpShZvEwmxZC8bk4p8triVkJQY3XcjLQxqRomZ1hGPc6XoEw4uqovhhyLisRkTGzQCCpj1Y5k6",
  "key1": "3YtUyLS88ihKfdv5fbueL9VXFN4CkUeRnPEyW9dgzfCS833fcvuPR7ZJsHiBJdRMEdvx2K4eYZDDd9UBkpb7iskQ",
  "key2": "3cvjRZ1yUWSmNLGh3tBKCcH2c1BjA7uJndoQNqPnWnGxUxbxo94SfmGpsQ8aEWUFNbytpsCsq5Lfy9AWhGYkeNqL",
  "key3": "3Fab7YymUjXAe99dbTic9WitREKGv1kY4ZHT995c8EADtTBXkJTNHEAoV23VitJTZ6AzwhTtju8PZKjjwYP5sBaz",
  "key4": "BMknnfUZryKCqiNkSrLCrFVaKNw1ScmTuEDWejghEozSntDay3H2AzGW9kannZdRJMjY5TqxPvPdnQuRYCnZbur",
  "key5": "zEsmsJvVodFF4xXatpkEPKN1JeJUU2gfCL7d2ioVajwnqtAeUze1d2Xra9LFEr5b2ayWMGMvAeaZsXZoSGoF1L6",
  "key6": "5tCDtqfte3zN2bd3DDZ6QKUMyauPK7jjT6y63KCoF1XyZNQggaKWd8V7mD5AT1cFuQMqo1bvejMx6ngYCDvQvX3",
  "key7": "5Nu5zHPLsJq8WnAd42PMbDSQ1PuGoi8GNvSP2zcpuVV9XHhrgMhhFUsZY1xpy5MGf4Kiqr3BTxzpqj4uVq4qN8od",
  "key8": "fYekCQZUgH4YcZW7kFwRWvnAKHRMN46T5v57ALTEd5XcBF82faR7vnyP3WbDqcAFNSGE5hAVSjKca8dKqMavcBd",
  "key9": "43tycg3w3G5TMreaK1DKsF7pWY4VX952RLfrvivCiwhnaP3iwnWxEkx6RMtbMUtogeJUstFsHCJdKixLnS3QBihx",
  "key10": "4geWbTqtcYSkCMBzR9kbJA8SfHzNK7n1X91A4wCYu6Tna9erRiRb6yD7DR9i1PTdTNJVCAMKtP9yM32rmfautiuB",
  "key11": "2Jk8g9GuWrrTVjxWg88wR9Y6Fq42tjzeGiGPRDoP7N4mZ6Jr4FGj18pzCXPppv1ZcZhHuWDYMXbQVA4EpYoqMdG6",
  "key12": "3eegxxTeCiXk4SAGJciczZpbBF4kP14p1rsMAF6gf4W1xNbo2z1s1H1tCVUQ7hKAqXa1vnzvWPraimPKvcQscqST",
  "key13": "4qEGYCb3UkeaREeTBBaQsLqGS6znUMLJFJ4tAN7xFcp6HeoKeupHPpwUVjnaQPK4PYaUkgvGXmsyMxeFGSS55j2P",
  "key14": "3KoKCFyqhgh4Un2F9hWppMWs2R1bdVgUeGCxiJ9QEsEKtimkkA2HLnCq1uNT1Bt7UXCJP1scfVqHWtc9HDNu6cKe",
  "key15": "2dhNGLBE3J4TZ5xdgTxvsZFNcDfPpiYMYaRzSMkJxY4mk5KGQpaZJU96ghugeWibeHot3L3zPiDwKp6g2Xq2k4H7",
  "key16": "51FCyyMnvhB313Y15fTSeAGZHMdzonnpdLHPDAJKn3zto1Hm3F9NYPnzmhZZGgou11bnkQugcf1T9dGXjGxAVyrv",
  "key17": "4ACDsHvfUPTJNa4CPkg89mPuKmK86Q7xjbF6Bn5FJrtbAT9a84X8RjSSqyo8AdVURpEwN2ZQ4a3GSp8mpK8RWWmm",
  "key18": "hq2q4qCKayQj6jJUsodzX8xgPrJuAuuQk2ocEa4KZqXtzqEkVgkBTtKoMMZZrKMoPoi4ieMfFro9qDa4QbDrNaV",
  "key19": "2HCNJ8bVJhTQzHeejJXKfJZ2fGAGdfXAXvqjNPNqKtVJ7jXUQAKL5HEqzbQjM5ywdFGXdBqcKKa8JmA9VQ3M7G6p",
  "key20": "4zrxoDCJbXVqF1w2ALBjDEAmsPMD8s9XjezibmcEKk4NbQbNNZQwwLQXRjTcwN9Z77xPDxWqH7wjpS2k1DzKNyBp",
  "key21": "QUgouQ1CKKKqzHLh4o727vF2f2Xo1ty6ETjPkvNLJapS4McidM5CPpxkWAWZy3iSTq95gEBdGNVfrdTn7WtEvQt",
  "key22": "2MtjNsjPbJp3PX7vxGfRiQi6hpLxv7suzu1kywGk48gVLxEbdWGLtodvWg5zFYbA61HxbzGs3oeFQ5YqmxJzvyAm",
  "key23": "wDMgWNJheqNRaRPtZ8pLWUUVsirR98jgtaq5guUnkHL4SgsaddMDbHrWsykZwdqdsWJHpc9ciXJjfreqjK7Sq8U",
  "key24": "2qGFYBc7gdoVAi8AUnRAs43UuiheMDf59WCoJL7r34of6tAigviLUNL5W5pFxiNqXKYR6wWymiWrMo3UECChVnto",
  "key25": "5umQB5cWirtywuYVL6ex4Zfp65MUYiasFc3VZKB8hFLpJzPpF1EK7qpP3mGFGRwYYUkkiVUr5NJWKFLZcHeWzssK",
  "key26": "2rhkNNmKeaQE5fHkKwG4vy8Ln8eyRBeRHXJFGEtyQ1inBeZLtwQFp8SGeu36DzWXWbQns3rbF5THqhqakLwkDRm",
  "key27": "26SruYuK8KLbJpWKSmqjqhXCaYNYP1HTPgZ7Fs7ZKiCkXdU6hijLBDzAySXsxRbua2Gqrj4GsbbRZNdtfbFhtcUL",
  "key28": "5YzwMeVFJhpoU3RtUdyExNaR9P7pQRGxDvbhhYQd5QBWNbNtE9iEZQUE4ksn3BaibdySA7x44uq4SnMT4yFSvf5q",
  "key29": "4M7rcPXiXWGioyHxkNhhCh4DNohhEjaJD7NwNWr64AkcSoHMD4QD2mKbkbi9MoyhYSLQajaAbusmY7wACmzruurQ",
  "key30": "iUJRwRhASyCQ1FQJpxptdoUVTLbTxVEfxyNbrSjZBhUMdpesaFErbTGG4j9qLNeMcUr61igVcoYACuwmn9qQbbD",
  "key31": "5JsvuE8V2L8HBdXV1eK2WJG4CDyr2EwBgFrtsetc2bNfgMMDTEeaSDR9VkCkQ3gEVXzQzi4izu3EibhoXR97hq5f",
  "key32": "46VjAmXSBweeykUMmQDvsc1sjYYkDtmMvKQkaXVdJrcQ6cKDKJW9pQyGN7xc3WU4Nw4cD77otX9i4QiAVEZan7ba",
  "key33": "4hUDjNmY98mdZBZyMDQrLfSbj4rPUNRGqVdhK7JQWQZsfSNTL8KeubGtbLoG64TFoRtGutxhN6Cp2KcX2pjcXzar",
  "key34": "3ykLBawHRWWUW7zyPFW1ghrGz96XAtDfgB4SvTr1Zq6B7SUUB46juwBnjCmKyL6DL7GxtotcHnkaN5fJkMi8ti3g",
  "key35": "5aYSb1VTQLBv2W4ZL8aBpr1MSafuXh3WdLuupp9fKWUyGN3V88aaP2FtXkp8JjoTJ7g6L8PSFV58NoSagX2VNiFY",
  "key36": "66ZXAo2FJeJ5ppzw9kgomk96c8F5dxuZ6zpLTJmpdn1M5LUMiq97nDp6d3WD98PtyLFAn3JGLxzv9FyU4VeRMn3",
  "key37": "5XYYrk41VbAwbZn98ydiqCzgpGT1qu2sBpDvBGXHwwLhkDeDgXLkwYczc4azghXohsoZcS56SAfM6XskHN18WkE9",
  "key38": "543bceTcdxE7uscvhnGDP9xvfZJNmBV6i2FT3sovLLw1ff8fasPZDyWxiWz6HhuGqXg9sBteMQuLT2qm89HrhBeg",
  "key39": "4DEL8wTKHngXEyRJvc8DjL35KbVSRbiK6v36rUN9H89taNTrMmwPwU3BBAjKyURe5KhRzyTZjHfZ5aRgx6rscbiL",
  "key40": "5BZqn3jjZtRpdPGPJGoWv6wYBhLH6a8LT1Lg3bftG8YwihCzzHh5MRjJD6w789oJHd2StPEo3goBz8mtoGgzNU13",
  "key41": "2EDb4home4SDYqCBDgQBvzudSNoEL2LZ1NQ5T775NcKnpFqLK5AZtbpofmmHyX92oCM41GA4hcpu31zYLgoGiVfH",
  "key42": "5KVhkftQ94xnADL9EAueoy8rpQsKRcqd2tLFpAt4DfQgEV4xGqZNoiALKbYNXfSMPVYgXN8G1xXD6S6nemKupzgs",
  "key43": "Jv2f3s2HRNU2QivLGKngUNCkSJadHivgz2noS7qB1CvJ3TWeLbBVevrYraPHE7cfLvVCayZ4t9e1e4RamMMc4wb"
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

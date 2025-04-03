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
    "5ntMBEq1Ah9n2cUSFmG758uazvQXAJCjpMeTK9nTGreEhhiSmZsVJhu23yB4vsx3dckiXbCvcFmJr39wrZiE3QxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EUGwKXbYdifaqFVpXt3fMwdUFbs8eh3ESCAFTwgQVNhXYt5icZRNDKVaPJzB51wJhGxFdBsD3GrVPtLBrLmdWv5",
  "key1": "47GnkvqEBmPBmwNoNTVe3JhUxLSL7kbrvvDvAsWfN7VKDciBCSmorSB8tXgPEz7L2USspZUw3AYcrg1XZcXhjLzL",
  "key2": "yP3vbu5t9G3eDLobn9NYoCgpDoqydj4iWz5ttE8hsZRmGSz15adSnYTgGU6n6e8Kfj56AMyFm7peh5b4zMvkrsd",
  "key3": "3SFYPRJB3qdpDe15Ato6BrmwksNRAYWuD5U6hPec2o7UkEgFeououGgdcF1jstSJy8zRwaQYhJYEqR5Gu9GCiDCP",
  "key4": "4PUUJhtchpRwDmy4zi7NzAD1KfmiHweMXK5ovkdZ53fTP4E44oFPeRJmcRUGbmMoDKXuTLD4Duw4MVde6JXNi77W",
  "key5": "4wwMoh65yAD41D3D6iKi4gFTuDUiQ5sai7hoiSacXW94fgaENeEH2tooC8gdeKQzk54eKcTPYEzjcZ6re5UZgyLQ",
  "key6": "5Y2XSsjZTDpAX79hQ4cbM2XX2VFCPRCk8gAtDpMTinWPn893ATfsptUjiFTjWp7beBG5FQytpJDnDayaMGf5XeQC",
  "key7": "4yMuahJT2bNnxC9uZiAN3VMqLyvRnQqycq8Ku3zPjq74z747t2czuGJ1pimYi2b4NFUe466hTvwSqyuHbr6azMeE",
  "key8": "2Bkt8iZhcYdun7RunLaKLMH88afXeeJiziJBXQBe9FYYeBSsTFkkndAjscCqiKSyXizwp71ogEYEXAhDbRhjFN2h",
  "key9": "oNWyHECUTeEP8XLepx41fYFtGgeA9MfP88TkhwmkbZ9dFTrgiNPTq5w5uwRc85MhAnSkbdF1QHsp1xqidiTRikL",
  "key10": "4Jvmd6PyzovB21bbVHcXWxmvLYtRV9Fmwk1kKVkKzYTVCKnsD9eUCm2Y47ogqHr8PE9iZxqxGa5Eojpte9QcWKVk",
  "key11": "5oAD5BtFHi5oEaG5PLj8f7RtWHqonfvy2GZetfQkmE19sWbJsmpjst7eTnj4RmP766MXNfNGiwVm92uu8v4z9QXn",
  "key12": "CbTvbca1mrfJDwWsEkwyNgRihwysUSHXPH9AZjM4dV4csqDohm8KXTqXUxPUFQ1a3pFfBB1FzTsnNMhG96PZm2S",
  "key13": "29czgapcZRxtkfVpuUQeWxYH2Xzf5Bd8ZowRVYng8smbxATngnzG6DZGzx9SCUgxJpy3nuubVwKfAhTT2FEJEYov",
  "key14": "4fQbVsmQCgrH2Snp2oEAK3CNbGkF44YYPFHu6wjSi1c1VZ8hrdPE8fAGytaMyJfZw9tRsEPCwmZLCwtRWiD22bph",
  "key15": "5j1iGmP2RmykuZww9CVUdmhZap1eJt3czJRvsP65sGsEcooqFePm9qyynEJsnyYzX5N9NSQw52JqtuyN9j4MoeWC",
  "key16": "2u6iUwsZB5Sou5WM4LVxFNDJ78Rkk3XpNoy8KeLs7dMHLx3Q1pp9E5JbQun73HEyhuSGzA5YSJRpX7Hio4BAR1U5",
  "key17": "3Yp15okXL9dqi2XWNoaNT5JtNehPeryhtvVEt67Wbf6r99Rc2tZYxSssehQCayAqtBJbcLyYPcJTDssC71EUsHyY",
  "key18": "5Fd5dP9qdiWmJzohPjwuX9zR6GfU3N3y4JCwhZWqa77ZDiCC9v6jg96tFrUaRFy95GRA537atEnb36myMaKyr5GE",
  "key19": "3E4kxbykN4DjEKuWrzRPKRMekk1S3ZrvUKqcb4Xm4hZUnWDzEWdrb9wt6Dzux7CoanNkw78fRwaEPuetnNqUMY7R",
  "key20": "WQetUYKs8RCk5vMKXW8r3dmWUf7psVkGpPUUeoDouFVjZDzQ5X2qqC65bTmW29oUtdaDCYw2Emv8xMsTbQeFsXH",
  "key21": "3qwrMvSxQXdajbz3t5228NQbeYuXL9h5wz1vYfaMtGb1DBUn1cR2KZ7kn5q9vWsMgWAAjJ4KDYs3MN7RBH6AHza5",
  "key22": "58qMA1yDP1uV9LtDKEs61pr1HgGNj8Z56uNrMkMbc62tTs183W4Mri9qbDdHktqXr2ovBCjHmN99LeMUQaZknct5",
  "key23": "wGzZEGxZmG8PkYtzRxAGmVoiH25oXe22KNHaSZGEerFqWSUMokPX2KpfC4H8aQ418PxRMtheR46LwsHj3Z5sRDN",
  "key24": "3WgNRFjwzepeeA3vwK1bnGQuNB2YbWHbqpF3CgNmWNLMEWFU3QwZnZ77moEygrye5vZcBsN6hhDUFSr2wHh9afTx",
  "key25": "24hJ7cx4zJEhZCbRt12pj5eUGn1LqvoeaaY9YEudffDjDMBRoiPNEhVvkEofY45GqxwHByRY9joq9LDuRJZrVHGv",
  "key26": "481BAc7mGMmqudwWAu9ALnKjpCMyZP3vgJRQBmRp8hpQuRHf3h9QtQY4Wom3pzQmuLSLHiwCfUDRmYTHi3ZDmZ3",
  "key27": "2WDBRhaag9fTWfsAkXqt5EDX3pcFzWTaywh3kYoYYZweLfKJqziA3zvG5L91Z1CVdNJkGZUXN8Ee4ki4HKaxzZcn",
  "key28": "4NGr5dP5oyfvjqD6bidTpko6gmuaNkpuhJ2omHCb1smLA2pt1Bsa73m5gfa8bMWEqh78Tj5zt8bhkjffdJcvyo6J",
  "key29": "2jqeC9D1FPKWeE2QPFXC143MPghRTDdyTCKGYeuLkrXJDyarwKdEgR3TtrQhemJq9DShYz4KTPKDqpYJpNyZUtPD",
  "key30": "5SuyxQ9suhUjN39cRjor2DNZb4UEswhr6yN1AWa1d1KNiNspRscRpW2WUb67tEh9aQ9LJ5iHRgwdoke4T4JtnZiR",
  "key31": "4vDnHLJ1Y5m35Er8StJ2emkJ3wE4yRfDHWjXFbbiKDA32YRX9C1sYaGUF4cnDKP3aRVayUEkbFUXCodD6gdFwp1c",
  "key32": "2iEH64FDEQus9LsH7KeYBAie736iYfAJpkyvExzG17eGSWEFJMhKmQVckTBAuQ4TCWvkpy2KTPcHdW2xAdEKS9xA",
  "key33": "5SoUs84BpzC7wdFYtCWi44ggLqU8F9C7YzqtLBT8bWo9nGhLAU7j62kXBMBV5pdN6hYC8KZPfW958VFjKbbpJ5wk",
  "key34": "57wnoZJ9FCL1S4VCWVRnN6ujm88mmkh6ZpGLfk5zQoZGzazxGLGTy5ae27C29WAUYhRRQGvhHeKsEqgKg2ZdL9Be",
  "key35": "5eQsseNhtBHM1dtoeWqHEdmy5BA5579a7Kywd9UYAaBQLNAaJVJbst7G3s4HCZrS69LsWkFWPGL9Syt53L4nf8MK",
  "key36": "5ZG4cxdwdVNWL3xEYevJy29BQBxZoGJS7qx1w6zNw3QkzVkJJ612HKhLZP6JSExKzEpJG53niVoGuYVzij5XzT2w",
  "key37": "2fgPJDDzLcCk5XpGeyAQ255QFWmwWezCD5ZaYRDyivJVWFaNwWfGEogZwpAtzPuNR6oLqLinmnT4YEryKt3Zx5qN",
  "key38": "tRguG1vxbC6Sj74KH5nopmm63g5b5iv7HEo69A18eDCBTF8sFziocL73tdW3mn9e3L8nfyaAh7eMjkYck7Vz7Nq",
  "key39": "maEMLNCdw9ZFfnajetKYNx7B2aAyiPSmwEnkVVAaMrYptt2Syw6Q6X3HMehsy3ttydBpWoVHCwFPvkrCeqW5oSL"
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

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
    "57p7EHtggbpLEDhnbim5XZCV7FjGR61Q9S14s84qqg7wkNXEm3putXabM4Q9jUjvYKsHT5m7QW3duzyapzkCYwa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBPGLdzokVbg3nTPtEfwsY7S96Rg8kC2ELu3hWNtc68PiV2Driav9nrUDqZ8TAJAZrv8aS5oWb8Ab9t6n9dZBSh",
  "key1": "5E6bXiYnEa2zVS2tLLAq4YzifQkfUM2DhQBQBUcKTpLZPcftVbaHNWY5kjxwAFsYvqhBz781SZXZSfUkDfbXN8Tm",
  "key2": "4KA6soD5jDdxAMJD1Kaxii2fyHn9yQsvAMNVXtEpeNZ6rNULoYLYkbttvvk8BWwnDiScvr9ZC5uVxLamQTX8J5Pk",
  "key3": "3RxSph5TewAgREQdcmUUYkVgeEx7UDo16TW3hgzSRCCrcdAUMnZ34DTq1Ut7mLUEc2sizZSar6pxPiECxZozYzfK",
  "key4": "3aEXBmcwdQwRxixbDYytgHt7Xn7PiUvkASe9fRa6E57dfj85ku9zuVQwf17GR9csvChNKKcq8zEfMXGoGnwdz6RQ",
  "key5": "5aU52txsuN7SYEJVq5njckdkFzezcMupPiGzwxf87K7Mu8xxYSkihDQD5GJYTC5WY6mtc5HYiMrYzBwFiKQ3K5F2",
  "key6": "pjAkSuGh5xhQq4r3nX4JibpYSw6cpuYvJBPkbQYXkvqHGsbUX7RHHuhjqxfTiuXmRKbgmf65dqbzyTsnNvs6Bsu",
  "key7": "5RMXqzgN6M2iS8NsPwC7fSomCFLopCe83rmozU6rvXp5e8cmggmv3dnBX4kbDqg3FohG7fPLfTXtNsZB2VAFbt6V",
  "key8": "4ihMeWXKRKMnE1EyhbWZMyHtkbfnVRcJFAeBEcQLpDxKokyhSXcuFGKJ69oMxFPuGYAjQi5tt4RNq3bi8UrNxCrD",
  "key9": "63w6ors9AAGBrA18AMrfMLEYqujaA2zqHhmwYv5VdceSkmg5wgS9J2rWXMJmjjJdN6hwfTuhi6UhR4ipZvnrtCzw",
  "key10": "4kSYnBDStrd6uraV5JRV8hvbpJZVa8nWgSon4eCDEKBrp1YQk6NQvExrz1BwFPWiaPvuT3ihPfRYyokm26wgopGF",
  "key11": "4T8ugxJeWxGHZwqLexa1uUjZm3cypnCJiWBQ5anN3j4cSHRpLcag9WeNFojhjB7eheM69qt5vaLbx9oFFVLffBCD",
  "key12": "4UgdbuVTRJeNkbkQCSBvGEksgvmDFCCPeitJFsYanacgpQcz7Jmnwi3fjuv7KEhyFmhQyLCXUdFF1skxAQVz8HWC",
  "key13": "2mas1C9Mwba3miq8ryKWbbzphYrANaxsGtyiwMhHXHw2qkWfkvrW6vXYpJnByVLzkNK4aV6MW5Co2RSb21Yrt7dG",
  "key14": "38ANZzBixheh4avLMdML5BGNcsbNVxEUM5jLoatCThnSbAixVfp41158dsHiCRwG4nkLy4r273W7HSw6QoboqZkH",
  "key15": "6BRPfAedGwSsXiuw5rkh4g6kSJNZRDzZQkiPtKoD3nfgxFndJxA8HT1e8fwkGJPouU53zwcx5hexXkFXWpu1kKx",
  "key16": "5sxtH7ghbE6XcRwaHCHCSjK6FXustRXXnxnWYAhsm3VsxEwJkQHiDGp2UY28fnabU635dqpC43DV8mVhpSph5FrX",
  "key17": "2Uc6b4PRQ3MwwvaZ1xEd5jkRRRpT7SXocPG2WXtxVM4CYBtKoBk2WZYARSZFkNMnX2cVFyHpfksEqft2mufyJwyy",
  "key18": "55t6GDRQYBSzLtuvavR4Y4KSTpDBNCXMQa4f7ea1JkQVNqhRbst3Su6SETNN4mgMoxzJFcYetE9JX8B4HLJ42WYv",
  "key19": "4LMBK5R9fJkASv5aBqbyff6FmCtaXenk9FnvogZ9ezC6WrYJNTGaEW6QBJkHmiAwgFvSkkZ8ZL6c28niXFUuNf4X",
  "key20": "3Ba22okQKmRPArgYa9tP2xWtqvAPSCVRfGyppPbnBV8E581PvsgGxEZa7Tkjdv8hW7mX1HTed1tuzY7GLEF5g5D",
  "key21": "wxfx76x3ehSwfikuL5afLpud7FKoKg1gUz2mQt3nGH5hR4Ea6fkH7i2XVbRayZnqaKWRtKzMtUu5SjU4HLjLWQu",
  "key22": "3ZXtXNBDf5RgdPsN1EVkbCga4biYBB4VnCFM2qNASk4XNAmUadxU7GLDd8SJxF5f7BF5xU3KQYC7CdthASZygUXe",
  "key23": "2gAkxTsxMt6pwa1ybh2duFC5VdRyuiNq9haQgn3MVx4JjwqZXkAi4rLhmTyqwQRx8UqJ6guAA2B2bXwk1wEq68Hg",
  "key24": "4qA3X6ca8gp9j5D1xGRiTuX37rrqQRSNsNZMFpn3auz28XxuZQJCeBqkKbaa6Z6BYjKXcJ3zwZnPqSWHLRTPHtjQ",
  "key25": "2iBJB8kYGbHHBsKXnzJE2vLfzd2d8aCXakpez7HFmyXLvwqutHWCVU5MYyQEkPUbTWGhSigjtmyaJaKex8fkfABt",
  "key26": "5rBb4fCCFBVsBSFSsyoFSouFcjob2uAoJyjMZsu2KcBeb74rWRpGmqJGU4xRpkUh6Q7dTTLq3uTthtP6bc7jALg2",
  "key27": "43dyseA9yWLPqYhyn2b7p8qDGoFCpfdx2jmSsmSf6xJudk3u8e6GjrFubpRTMTd9nRfQnnaxf95LscuXubvCQDcu",
  "key28": "2WGSv7MuN8oW7wh5oNJDZVitV5uWbVMcJyw9ZzsRPFRti3Vqmjx534v36r6BYLzYDffjNviVAcRg3ManZwk9bpR1",
  "key29": "3qNf6HozZMbZ85xaVTmkJfh5vZMdUfnNoDzwmkETb1kQitmxuSmpwVCJsZjyT6wXr6fMq4uVyAw3whhNMaSC5CVW",
  "key30": "4MqPLpvU8gqqrjYPTnfG9anZyNdZJF2fA2dYi1jWKAQErvFLgVNznNR2mLdj8QUEckSgYSXC6b4wvfWeXf6dgY7K",
  "key31": "5FEgkQry9TwRahRtFN9JtTovNjhdXNfW4LuNBM4DYbzNwAUCfUkG3ckPyuFT2LqSedMxvkXBobCBvJdu6HiGTTk9",
  "key32": "5Ny3YNrv87EtsUBmfqfWYYPQH4y8vrM2M57nNcX7ziStN1nyqUSCCDxjsNbMWUnH7175h2WBeEX1mRPkA2rk5iiC",
  "key33": "3B5ycTLMBoaeDhiYF8z9VZ44YzzaX5vxCRcesYVjubXf2YMEdATtVGkgqEtJZjvYx69RR87CGxJ2Yis15ccQty2i",
  "key34": "626zfQaiLySYxfGAfUrFCYUKMQdPvQ2zLtzDgH3huvL7A8QnJh5rh58uiQhxemYrp4CrkaQVWG5umkq93KgAMQ2d",
  "key35": "3LXvuVTo3JnHWHNW4wRC7uhGi86bk4Ym5mpiByoaqyGoKsYNgWRfvCJ4EfWmqMSYMa5Vayh3bWMuN5mUwYVVfgYW",
  "key36": "5wZVbysyTeDZMDQ9C4eREaXmvFoLWjTHgBBZN9rEtGe1nbZYzZcbTH9MpPPBcwxYJAYa1gmcQPy4LsPwcSZUCmG",
  "key37": "55PWh7yT4MKwHEaN1JiWxoU5sy3xeJCBoNMWojhH2jvd1RVuodGQmeU6uMTeyB1kmjSx5G58Qtpgisgqrn1CZjmy",
  "key38": "xQLhcQLDPMU4y8xcwFSMF4RVhJwsn93BUU1SgvN68RmBiAkDg9KHqPzXxnk8HsdMvkdYAzUxMqHg1CcdRKbGbFP",
  "key39": "3NxwVbciTQeMpqxVRjBKLA8jFgW8gmZLyZTbznAoyR9Tj9wYohTgSFdCn6xrPbGseYvPeekB3TGxsXynwL9mfeqk",
  "key40": "59bk81BoEAEjcYUiXvhm9VaXdGZL6CaZLPqDEkc7UwGLh5FwSRZP8SFxkPYPE4kzGsp441waCp3N4MYJAKo9N32R",
  "key41": "EfCkCQ8hyrLYCGH1v3UXF58ZucGWSF2FJbV6ws53QtqMfemPTgu287x2jaYcjRvVS2ihuKZ2FDNmMk83qTh4rZs",
  "key42": "5cPzuA7QJPS5vratXbtr8L5kmTnejHodf9pEPTonJRUYZ6UL3b8LSFfAY9C1BZbqXDKNQvpbRC4vtyDUfMMWsN1G",
  "key43": "3BVdA2UK1Rpm1SHmmE6ZFBYFBrih12UNqjwwxh5AWRMmfagXjZx5K2TpVWbMMNPwnpeNtB66t4ipLpFZ8tk9vswj",
  "key44": "2srmwHtQTBa1xBmjTqjEvDquvGDuji1VCxtyiUNR3DpWihVheVASeB6TF4dAsmpXZu73ZMPP4punHonhidzLP84u",
  "key45": "BwELF3DkAjSuKowxLUEXUQwzGpHj6Mo5wwoyufNKAFNhLEE4ys5JzPNHJeQV7vraJYiVx23pzsEQAJVbrxcn4vg",
  "key46": "2D6why1q6xpeDHHLCsRDdTdQMqWQbDEPf3BhpzpAPVp8Coh7Th7FXoDQJqnLVcQANRJzmRBfZWNcWYb64JajU5rL"
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

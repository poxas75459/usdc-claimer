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
    "5LNgBaEaWDXv6sNEDBCWySpD43W1ZaPvijuddhTFyvD4WZU6xMPRPQi714nzq5prCC69Ya28aNwpcMcAsVFnrumh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z3DTcahGhvPJNTDeaqGBUm6Yxmi8qyutHQjS1xGJde6dqTy3QJfJctmkwppiHLEMj7XKzEanq6MiLhnkLPeyURi",
  "key1": "nxnnP6MQesLXxJ6RNsi7tZ41eDQqAuw6jjrNCB19bS5SpMhZe5BcrDjtypVwcyM32S1PzX1paaizyapxH58pouM",
  "key2": "2bxX16m9VbsdfDP1nECQ7wqKFs29YcEraMSPKCK47bmE5v9VUAbeWSW9DY7X2ciPdftkALtX6krfE5THvSWKN1Ah",
  "key3": "5ZUMmf6BYvtZ9EHN75Edypv7iihZRuYaXqKRvQ8EoNUcH2G4Tsy7VEGiDCnB7ukkVBJkHRyHPPpgv5u6No7tmU2h",
  "key4": "31dnvUb7i6MUJGnGPnJs3gvLA8M3euGr8uWpoMBgUSw3R3nSLirs2vggfUyZ8Spxpkg8KEEdVkCnU8snTgHeumET",
  "key5": "3TbTFhZxppKMXihwFLH5SgWmKs7RcfqoAodvM8m5xgVMF24Sk3urUSSTg6eeusYfwkBFEBsAse1RavBZWDgHpzPR",
  "key6": "3zDMxnx2QkVK1TnN5BuxBK9ch2V2inQ6BUUmvjPRHKFyogCG1TXohhJ22bsohewA2nRWuZyVLquVGogBRTUMxxcT",
  "key7": "4gCjfLSngmyzJXr2bjfeHvoWGbdgiTnup68AmoA6PHUr3wNVwekLSnDD1zhe4b3APwbj9PGcxd7pJBSPDUKS4ujm",
  "key8": "4dYw8qhsBj6fzQpryr7onVRhJXg8rkpNN19BKMvQBbdG4eLdEw3rJTLhxxAkPyjGMAnfA1p7JJVMjjoRYPH7Q2Kn",
  "key9": "hTLXHecLYmbaXss64WmBE8DTUMkFrkpr5hGZ577xoU58sGQXYKp6c3ccJKzJfVbM2Q78hkswtZraDCysANHBQJY",
  "key10": "45QM22opoW2UzMBsCXyBGVdXKRFfCdxbcYmwZSLLBW8D49vqiA8s3zvWV9Ef6hVDrfUK2c24NPgjNhiTVXSVSguU",
  "key11": "4vdZicb4PoJzcinFtdAwLdQhNn7kL5ZKi9jxZnpkQMSe7FUoN9CdX27VEoxJ9mVP545XN4zvumvPakryJWRUWXsg",
  "key12": "5vdDf8TjgqMgTCCqVWGC13gxuG8nt6XxjhF1wWtkD56WK2HSAEpCzayS4WyhZs3FMupYSZhvC8CyFzfrHCJYTkRv",
  "key13": "qkcxfA1Nipw9gbRYbdidP6Ms6i5LBdtYd5hCG4vHMj9mjtqA1WeZa1RouasDdGZMPthwWQbiuHqzVxDhqtzTcPg",
  "key14": "3gakrwvg5iSFfJA1KYu4q7CzPaDdjpuqWZtrvkdBBrfWLdBqMftczZBecwxYLd139h1G11fdErHDKGiR5GhbGKNt",
  "key15": "2aGpGSBLV4zx24aCejxkEnWTAczfq5kgYMsEhAn3kocSWPU8BCSKPBJx4NgvYYNnyLKkxJ2ZKD7x1nHB2WogKtUX",
  "key16": "4ULNp6kc9ErxkVLHpiCpQm7mbdzn44yqKmWg1G4zzpq8Z5bpQzGWpQHKNQKVPJh3YodZvbLQ82BsKa9NLYtQFFtA",
  "key17": "56FEjmjoe5K8Cpcdf4hi6qDYbXk5yXZ11wvD2fUwwdZh49GakSGP7JXU2pgKZoAgwXxyYsF5yKYpLSzpRdxHLB8w",
  "key18": "3Cs9eGSVxaUsadTgm9rUsXgbWJzxuDwVqmR8maax5xh7ctGCkGtmEzDwESPm6uhNuQicTY9wjWdQJ2wdUtGHKxDk",
  "key19": "CZktDX2vGFzh7cdPoU6dLEJh4iryFYWksLpEhBToJ3PcYE8tgWSKfZr9T4oNqqWejthfivWnqHD2hpH3Z46CJPQ",
  "key20": "47787MyNmFkNEuJvYAQJyRTPYWYbniGjGw1syXt14Tk1BgQngM55pSY6PzdoWqdhjC386WKGX6ir4ZaLvFjaJVgE",
  "key21": "o8gaP7VbW9FhWCQ2mH3cMJnhM7SBZ45jbm5GoM4pSHKrYFgrTeUePrBF1zXWNQpTJvb233XhBdsmHwNoBuWR7eW",
  "key22": "5qhAemnewtuWEzJiQFQikVnu4eDMyXY7GzAYv1k2pgH6SjmqVFeBSe8pnsLUzNskzd9vs1VMmjRahPFHdT8FMk5z",
  "key23": "54hohwoos1FzAcnuZrQsfGnngygPgXvKAxWXk7XXhYq9KG2UMRV1ZV5JxCiXGZqtmUasWAiwHLEzBraxHT4t1ZZ9",
  "key24": "3DmtDSs5pmbKckAqfuBbNmd2N8A9YPjUjWe2bdqNuwawZn2dChR5sCQ9TawvmEVHWYqNqfEDY9BMXLkJL29EXJEk",
  "key25": "4CqagLCKwtfVBG36XoTxvCF2X6nG6mTDP1pF5eKXtfoEcdirarKrBfSoiX1pSiadkRqwT6NgfmbkBdiVdBxynosL",
  "key26": "N66aintMhSyxdWxqnSUbC8Ra4SqGyX4J8Y2zGziVxXyfqmjt542J3H4mApdS2e85Dy7yNafhRMKyEefZkWTTacu",
  "key27": "ggnzg2SzsaFd9aoK9wMvBG9o6WucmrH8m47uPULPBHrRRj5TcjyVtVPeqDk8yG4izzDDeyWvkhgNWab16rmshdN",
  "key28": "4yKEcptr52X7uSg9rmYuWG4v9monBPTBMKAzg7b9BwWPXn39KfjNAmbyWzGb5oPGWATvJaJppev9eoUk5M68SQWZ",
  "key29": "vVxiFJmWoHGbSJrXfChdzCCy2iDLo2W3Y92roYY44WPEKc5gZhAbkMjsvdvuYuczrtSQHSgnNZ6y4sJZ6ipiSJS",
  "key30": "2cg1gFaNoBjLgyVLJGboixLFuL7uXLBbzBnpwxn7qnJPspRWvBcx7csFz1ypyNSsB5TbxGioecEEXF3U79hcjQtH",
  "key31": "2Sa4WTc49oevuQyHhkenttkZXkSd7UYSB9g86reEbpxeunsSiUeS16fKBLjdxotsiPtSrfm5PEDLQPKN62aCwbZp",
  "key32": "2gQ2UcXTED8CN9AKAhpmkUsRyJQ5iQGLPvAj8LpbFLjyXnPtzFwWKncZyYq2EkG3Uswpx8q2JGushTpVNJpoUWLZ",
  "key33": "4yXQH8QvMksDxLSdDiUKhmj9RdqiiT1DvEd9taJoAN85yhtGkdhtKSNi7a3pKPUK7wQn5HEh8cXwNt28qGv623sN",
  "key34": "4Rrmcz6yGc7wj2LpvEDdZSUuUVm7Q2VNSCmXCrCsNKRcJTa8JFeTWKY7skNHB7P45Ca7FKo6NvAZKZrfAsbqg7Jg",
  "key35": "3Z62hnvk59Jsiy48JqM6UiJ6y91Z9wW1xkK7oCp8ZVgvg1FVfH1kn9bD7kx9wVpXfNuPqJqCD8jeztmT3uPiHwNN",
  "key36": "VauG9cLBtAT1fFfnkDxnhgvXxcqJ4YX2k72NBKuRPuvuBfVQcGP95nV4iNZXpUZTR217zSnNiuRZeUEvLAf66De",
  "key37": "3Axx6JitbtLb85AWPCJgztPtZatPaQxnvKK6HNd2WxmXU2CXvbxvSFVfK7Qsk9PsNHXkZgaat565djteFsezNF6t",
  "key38": "CzoB17tL6kWWnUoL3aC34JYomfwA2NeUbC316f6EqeCd64xVKN9wWBLtYFnxUB698a112s9VTvfmPGb8Ts3YgFT",
  "key39": "4Geyr6yDdnqwxwxxDR5NPfYPwFq7uQzQ6jYKQYh9WGbMiXbpbuPRAMPKNgu53g4bdP8HyupXCZB8hqXe5kgxe4bd",
  "key40": "5F6CGkVAK3VNRinQtTVvxwywHkwjeAruquu1gteJfbc1mY4r5mqHnw3W5GGaxfpyVJRWTKhYvwwNgR5N9r6PdMYb",
  "key41": "4M2VKKhVtHyZbnrAuUcthkvWz3DBmiuLhAb671Sf9cj1qJtbnByLNvA8h99Ap6nehnmz5ER1TvCuXvr2Ha6AvQpn",
  "key42": "LXYp1ffbawkujtZAMZsM2Fq97YZXQysGnWyQ2XhdiJZQSXX5kMzCoEaiADCMag39DxBzZmsLwyHqtok38g3vAT9",
  "key43": "fNQ8NFGZmhM3mnN3CFJpD3tX9KwqWzFKXwbnMREWzJTZnZmwRhdd4Dv5bxgwUawiP9z24skRAypvUSW1VPoY5cZ"
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

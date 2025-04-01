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
    "5ghUqEMHm38mFZ2ySADaxMWeq6tWtd57EgRnkhcXXSMcoVX6NjCuNcxHA5o98fbSmpVCptYPazr3rLLPCeXE7s7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AJDihQ6Jh2f3c55oGdBHGwbaQWkJuBAD28yoZQHdEePrnT8ANNFNG4gUxqH8xE8X4CCpBunMjFqasi8DgwCKThW",
  "key1": "3KJPL5KMfdfzpXsiTaLJxuFyKG5c67aFBq1BafyJqPE51cajUaTKuj6MiEYnAe5JVekfgxCLQyKaGgYGeaitEwcd",
  "key2": "3v3UcwKu3w5qBoFqk1TZMATeDFgCCGreAZNvt6hMDfe2V3f2c7e1kNC7C8J87PDh2qWghs9UnVuHLuvVcKWE7U3a",
  "key3": "2ZnzY8GXbLshjB5Rs2zgrMohnaL5pz88idRFLNKYPgTTRLcPmQ3ADBGcyjMbX5SkoWLEo7jA466E25L1cL1i22BV",
  "key4": "3WGXbKCfzpKWryMfmXjTbWTH28sy3HnJ8SVrfMe8W2Vp5BATWuxFjN1dLEQ5qYBhfr72ocR6eoyurm5dk3cXau55",
  "key5": "4xYFRud5rx3t2tvjDbDW26i2GgqpKYcdfUUxBHCMWnXiETrTcQbaCkenBZBPwZQXRwQ53tCzuyKNvmkTuqV2AC3K",
  "key6": "48DDjFr2oq88o8hpuYxb3y47XMgtacZAB17FBSKsFoSZ6fTvZcFhS9f1aAqT8Po4yMCbsPfrLZYfr1jvwCk6jSpH",
  "key7": "4zhjUuEvssdskeqPgaZJAscKWW48uGnVYqhb1S9UBYqLwxsyU3yDwC994EbwD3zis23yXa2oejKgveqGkkV8CWMB",
  "key8": "4BuhgbzAadNHdDus62TnNHunjgegzVu3N69T4Z22kHLbiPm1wGsKtRXSUNdmnEwcTLjMzsMh9txALBcetwdrNK6M",
  "key9": "mGHvttVCopAfyxPp2fvUcP3JjLGfvFkYiuDtFXaiipMFufsjHTXPvesXeFQscDJpFdWbtB91ZeZUdZDYuoYKbmR",
  "key10": "4H8Xq4XSsNypKYyCANpBRSKfFXjQyXvqB7QZTgHTRypmRrZuKnQhbS3NtAB6jQ7uzm9Smtt2C2jNRKtgSARvCqiy",
  "key11": "TSdLw7qTLW3yVwF2ztNNJgvnnJ8Zdce3ke91HHV6U2YRiSsEoDtPPHMxvKNDMGSfGJzXMBH4PGiRN4Ww6H7fNAh",
  "key12": "4J8ape6bovevEk59zYVNVRjSbSNKAU4rS3jUnEpP4TivXtBkyrKPNGWx9h9L1XLwxxsT7KxZoQZXDvXgxjyVKiS2",
  "key13": "3Am3amy4nH8teS8HiePqc7kS2nYHjaPGhfNLA6epUDzFAiE946YvNoBGYerWDWRsMgkWCwzBNECHga1aZiJTD96R",
  "key14": "4vyZwfxr9zkNmrbDbbzzWzXSnwf7UWR4JBxoWG3AoT2TDFBowsZtGA4HsEB8QqTdazYSSFhPFaufN6KfGdHX5nvP",
  "key15": "3JxV3URkgtCDu7FKq8Cx8b42CJCB739anrFUuSdeH8fmRV8SkZmwan3wVjZAMdh8U9eDKwJxL1R5NEpgsvo9yeNX",
  "key16": "5H3kYiEHwpFZiLFnbeTmdqNfKgjQQDSzzjDibiVoZMXCR34ZGLYxUuMGsvqkBkkRaeCBKFbwEtGyfCPvu4z7DeeC",
  "key17": "UtMMGof9nafTNLBnnjWn5jUVEkRyeHXYnnfqWGgrjGbJbQ1JJYQTGMvmfBQ2EhfZ6mzx398NrjYXpt8h4tsDyNi",
  "key18": "3khBSXfRSsq3evnQXTPVxZEtzwTfYDUx55NGTSNpxrofodG5jja5nLQz19AbSdFRpBLZEWSVfSS98Wi2xPgtQhqX",
  "key19": "z9H3fLTanqfnwcUpSEPAvR7a6mA3n1roDmLcgcziZChooSP7JSL9Mr1Ag9FMLcxmPFTCSfqiWdJhme1fUH7xUE2",
  "key20": "ppF2zHoAnPSjhSXNdETfk2MxdeDRYdpLSp8SiN7tcz5PAhsoeMiT4YkwrTA9jEBvjwqtWFpJD5xVFLSNctiB5fP",
  "key21": "hFZ4WU8WHtDj5TiXNyTuXfS3k7YFFK2LDdLEAXSy8cfyTUw5ev2zw7VaXBq4299V7w14LjWtPxRraePxyuXjp3G",
  "key22": "4qnMeAq8mNEmHTsS5KikXDtFHs95vMkcGoSu2Ar6A6jGMEMyRkxViPKpFhEkJmii2iPRuZ9U8tV3Huw9kwjEzsvK",
  "key23": "3z3BL4GGnJp6idoooXKZRQRnJXGLzNgfXkJXYHhZExmWBzDpaFFGKzvJpaShMhmUpMhVNCyR9nXM3AGBdwFmK7vX",
  "key24": "3N7r1PBPyR64JgAgXbjta6ofzoP7xUQjJ2nodkBbCgLtiTskJBWpckRwxLte2hzJ7b5R73ijXCoGJLs3Vb9QMiYS",
  "key25": "31it27dvTmYZNrce7zFkfN2v8ramGBh3GQQUH6pjLyvRBPWc6U2k9jpSncJjMhoAbLd4HijG7E8cc67c1tCgVBHS",
  "key26": "64nPoPP41v7T4EzKJMW9aD7VswG7oVLGaYxPBN2yrAt6fEAmasksjiipwjTAneduyMBn8mddXxSfu4W98dg6gDXZ",
  "key27": "3ErgbHvYJiZuvxWSNULPShdETHK33aF5D1PrAytq2gS4mvoXow8WGo2wNxyWXQFtZXxccJXnikxRNa3XZ9u2th7F",
  "key28": "5cy8FgkktcWywZfQGYN8sgFaQc7GAiewTvNPsjy3PLUNPQhsvuiaG9G9yzqV29EZPWPTdRR77y5iNZFMVUhLoyyw",
  "key29": "2S5XfugHLVavSisrYVb1ZAR7MwXzfCJL8k68Xe7eRu6wCfQhYVrNQ9KMwo5BqB8Y1YoYFfobSkJvoZyRUnF5VbBM",
  "key30": "2Lb9aPZpZK1Q2cJXknQxzArpuhPPip5KEfmEhEvP8vuBKCntN3KdaG7AYJxXQLAXH1w2Ai3pQ2xnJVxVgBrJHufS",
  "key31": "Hcf7X2z4qReAG3gFvFMm6AUyueMVbJTXqPLwJYL2zWTvPeh7wGXZtn5kyWMYBG9PmodUZc4VQzr4WKR4PLLrpwK",
  "key32": "3nAFfC2ve3uLTY76J2FmVVaU8wbz6Z5eWadJRvZLTo8PSeM3bR1B8tLrsTtkGUVPgk2P8bJCZzMSYVMquEcLjxR6",
  "key33": "5M7YKFHz4zaX29Xj8Ay5rc2sWQbmVBRAANhRnLFYk1ikKmuVeYKjiLbxEtGjSPu7puq4edLSvJypTuXD5Cd44vS8",
  "key34": "p8Jhrz1JfiN9xeCZgPGsgdTQcvGBGia2A1AbzuJeL2XsVjVLLPfR8jUdC3zoL1ZzuEB8k6NVGn7PHTNeaY3WD88",
  "key35": "4iBPsf4oxztDfsfwEuWBRJLNrH6D45g6HufdwtM9cx7TodA874L4qKVpoaHnL9PEzG21cBCEZ4xDkXT1KtcA4sJp",
  "key36": "451YkTUYaECpUy59QacRRTvRLCVTjL5UUjpCcLwkct7DZHyi1whUaobTU3vJXDBGmPY8Lz3XZgRjdBGUTq52ysuA",
  "key37": "2uPd3KdFVzgTAUpCQh7YSUsAicw5ahT2uGadRGFcjykA1Qp2N3mU4ibSSGjVPH77Nvj8d9eKwEEzWcg52vH3uKb4",
  "key38": "4f1tRe6xAwCTRxVYijQMbC6TgUSryaYCVGycD83hYATPMvPg4HkuE8KiHhi9ryXXqWFY3PyKeLg7EkCHhxMCMFbV",
  "key39": "5oYHzLnWUC1JPfmFdAuBNo6PAMvsyrtBDkDz9cZDwg8nt16bZ9sW8SH9PtGKSeT6Y6RbGCgyf4EtNAEXBhZnu7kK",
  "key40": "3AKgsqo1WWWqGnAvnuQXzXcyB5kYSycGdZHxwDZULH8J19W3aoH2Lp8ne9uuUzccrMYt66onYTEvJyZaSCy43aBH",
  "key41": "2KcrDMcQmmvWh6VxvQgSnz39zb3At5PQqeVK6hntnGbQ4etem7PeHGVZz67LVMN68QKv6BhkZmfXTxTUCCKiyjs4",
  "key42": "NB2ABjeyEyyZkeZk6uDbH8nNup89tyKxj66PZ4BNRxCDM7gMvmvuAHuiY6QUpDA7aCDHHvq9RahUm9sY8wiN75Y",
  "key43": "3k6EiHjV6uucyF61nPKLbegyWbMBn27eVqUG14PxTNca8qTNy3mHCApoVkqdWbHdwzL25LCMhkbjeK3s4FcaYoK3",
  "key44": "4ekFZzSWn1TKJWJE8gCDQDLgxr4mJ49mvFNPK6NBSYrJYjmF8GfRSN4bnTEdSPqFaFKjStEBW6iRb7rvY3rWED4Z",
  "key45": "2vLD9QZ81yUWKejSjiYcTzYF3D1LkBjLxtFoA7P64fsAdFwvxwkM15Wd5CcccPLn1361tcK4nrarSjKSoVMRGFaR",
  "key46": "4qcUh2tkD3kGqsUHRRB16dZb8ESE3UQQwPw7hu8H6t9L82PiYFohu82nwFWAxe5YbbxsspGFH4YN87uGQ8CXDQbj"
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

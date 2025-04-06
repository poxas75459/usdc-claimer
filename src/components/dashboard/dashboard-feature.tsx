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
    "4LWhcsJPAbHNiaDnpxWtjjg9Kg8wNkstwR4mw6T67Lfv5EXNywEDEEqsM2LFntFWtz6sa77Fns688RYsaB9PLUAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LA5rzWXuPKdYhKo8yaB1a3u86V6S7s6vsj7ogJeR6QiHWDnEabjARaHR5GsGzSxc7buTsL9DBuDEFQgzUKsrKwJ",
  "key1": "5WEMcg7SQ8BEF5nkDkTf5tSptaGhSriFXsBYDvqxA8D36eGao3YeZ3phChUu9byvMsCfKMyS45fiMmRRUjemC91i",
  "key2": "35ate4MtNyadQ6E73bomt3Sr4sB9RHMPZmxEwL8dfTtuagzRUNnn7FkftCdxRJiHfTStjfNQMJQqLE6Jd4g3ofC5",
  "key3": "4LTeWcUjJDYFkYTmosqRJ9eNpcDuJgZuYgqmvvXpAghYbvV8LzZxPi9aYarAKHYBnhEp9CRsFRDezTCSVYUbnK4N",
  "key4": "3LUBppf6HkJTKRze1Yk1DZxvMBsSjf4rrTzTBs5pmsoigtFwy5AYmNBFt3ycPPFw26fZjRXVjDuBxgcEAcUoh3XC",
  "key5": "3edH175kxkF7h6a49q8JXuQdLaJUon7ShJAG6SJhzfBR8KYX9LgSakBnw1HWrysp51FZKGX7oKqHztEoM2zV6bWZ",
  "key6": "3EVBqZZtrFF315zws134oFSpPoA2ogWaGki4iXXPHfLbLW1dcFmnhA3DtqURaRKTaoXEz3UeaF6Vuc5NKjTTkxEZ",
  "key7": "2MHPRbHQS6RAvXhTJMp2oQDUD12mWPejbSVUSQmKgTjgwxaYKADCewoCf5nbtaG3SHs8YnmBny82yUec6xazPusj",
  "key8": "Aua2PtRRGTkNvhnsxZWigVzb1MBmQKRkAyDR5mTapjGobfwLLMH1w5PhyTgMfqaBnd4johR4ZwhWq8poSS4yE7C",
  "key9": "2w7dPX4DDQt96U16Bpn9i9upViBNDz9MvixR3wdgzXcNAJhcWSMCGRM5RwfVLLqC44A9LnoWfThpLVPwCFNerRMd",
  "key10": "2cd3i8wEQS3PyqhXcpFtJtJe18GhQQwPoFHtGEdParwDDkvnE2H5QqPFAaMs4krgNRVxprTjH8VaZ5D7ouvDvchW",
  "key11": "2KnRWB6amQbUJV4oB2g2HrmcZinb26CLhKjvA3ApqkLTZ6HM8BpuLXSpUwxrJeZktopWVu2uBauVGoWZKV2bVU32",
  "key12": "Q4euj3V75PdpQ34CriawKZwtxnb7prnSvYqyYqsuj3EEtJxyyBdRJztr2CQsskHeZtz94Lc5bLzo1nYDirLLuvG",
  "key13": "4zdNnhABF2DAJCuPvDNqGHrE6nJfy9j4HXCa8WWskVHtoJAzLs6iiTPWSKV2FCUdBw77pus3HcRioeEuxNhAecda",
  "key14": "5PeZRWNypEnirYBKwXArxfuSWvpgS7m7PTgZMmprgV8cyQbdJWeLZuB55QmuSPWZkKL1m5hdDsMYPkJtN8bMW24p",
  "key15": "4dy6RwrrMxMAxv3EcJ5p492mLmJvXUpi5g1MPAV3PSwG5iMhj8Mtka4NgBsQza4h3k1ss19MbgzmuuSmfAK9iVei",
  "key16": "2ieeUq5j49bs6FBTt1b1gmLUFiQMCnzHyEVK6xuDQQVKxWLvAvNf6mBWQ6qjFdC3WKEZpjxELz8uRAJHai3WkdiQ",
  "key17": "5rsNauyq5Qrr73RgSmPFzR8P2z767YtKCPNYqGvmAw2yCnBQuNPXLgMgW1EeADxg9BGwMpkzMtokdNbodswVR5f5",
  "key18": "56ZnMhZZWtR6VshJ82nBnrgoyBV8oSxhREufHsQeACwHJYAnpB7RdkjXex1J797UF9GD3gDp5hKs8eiDmyCd2ziR",
  "key19": "5qgvRsqfe1WLy9yxLUsLyLhmxYyLtTimNQmvnsyYvfNg5E89fALym2iMmpPrcZJ2VRZ1USc7EkFLVBZRyXCvNNfD",
  "key20": "3ESHCqnQRy3nXfnEQ6uvEHZhMYQ9C7WdxBq7nAX4omc3nBssdMifwNorikwZJWDFmRfYm3pz3Hw6TPkam9AN66iX",
  "key21": "zLBHMpkCPfJZi3hJATfTQXxpH9JG93mtZ6KGuXQZybeNdTTFqmUNa9xeCWMui8swZdv5otJRjxhnjC1F9LJqZwe",
  "key22": "2TgzQqADvZCxPDAQQRs9vsajZQ6MQDAoyZFqT7q6LDdbu7b4j8F1Y3jspFvfV7MPiG7yhNNbBjYksDV2Wjqty5AL",
  "key23": "4TUcSWsCsFnGbqHkrxmiGCqTs3RfR3pUcKMdQFzzSn3MQ6sGsp1QgaKa6Zbi9msZ6XgwGHC4oMUfwdHnBsGpKPAn",
  "key24": "2PqsLNtpbyycniMCtWXPUC2wjFrwHfUQqdJNTLVcMG2fLKPdYTgNKvwJBAYRksqhtrreTv48iaCLV4ojJrWchsjB",
  "key25": "629T67vuWAyGyh1xnSKxwou7hCRZGNuTwJcm1jgGKTLJ24kkZFQcUUzCeRj2NSnCi8sxNwXBEdAHHALVSDynpvNg",
  "key26": "2xQ1hchU4Uf5bG9NgMaJ5TgwS2jvmEz6v1bxMWb37gRXockGNmgmnmrTQgpiXMGnfch2fDeqatNP7bxrAwuSRPRv",
  "key27": "5aQGEmEsYasN3AkV71nde3ncpvzXGGzCE2eTND1VmvcfC2piPkHgSvzMmvjWTPzWBCnPWH8Vh9rZyquV9uGLKKv9",
  "key28": "3fz1frsQLK1nCpxc7oso3iQJwZWjGAEQm3gDzfVmTjBRSbegR8h52y4NwJ1L56dYpmXVeTPwgyFzBAYLyZHYEsZp",
  "key29": "33pHJyEX3P7bmC9JVUpPZ2XNcaRBTGphMRPcU1bkNzKqRZCR6sHqhfKddb3EXva7CD1VtifAkeP4JGzp5SR3HhQb",
  "key30": "4ArPT8pSLhRPXS6EoYBBAQciZuFwZqeknLFtVLWFjLnyXdcfA5zVsmTaDeQkfcbMzi1dLgwdhpGhEPe95CpUTr8i",
  "key31": "2bGX2pB7aJ7e9sp8hwk9sPZqAGz6tqj5dC5bGMJkAmdvsFu2AkteHtJy4u2jHJr1G8B6M3oifbBdUeu4r2dCQMKG",
  "key32": "AzEcRSbRWQFmkgaqnaCp1RAK38sx2FxWppZAuDE71Ck42Ck7VpqBtEFb85MS9hJmteXU1fzXAQJ8hKwV2aeKMa7",
  "key33": "4eLRdFjbX8uuCZYChriwXcfwQ1VU5sLXCztE94HdheDMMYM2YUNVvELfG6psRB3ZsrwCWdibT89mRu7j23pKPeQt",
  "key34": "2tzpJXH6nb4QcCzPG8hzqge9Dcbd6Eba2bJqtsWTDXPwCpAxhf84n7MxawkaMHcSvz5VrnCvnfo86fJNvjZCQsq",
  "key35": "27r5LoYaXFn85pubUpSAGrcpAVg9sjPW1B2q6mKsC3v3dtWxpJEFVvE1NYA3yGUJnFArzPWuHQK6bWTZ4kbT3xow",
  "key36": "5bcnWqUuXcZfRZLRV74rifDGeDQi4ojWiQqJR7vW88i9gsKbsL6u9TVxpYPa35uFi1cp1FKtu45bWGK4Ajgha9b8",
  "key37": "2xMx51mVPfuFnCAogbfmAjrXucDSfBL495yDBNthLrMQCdBDy4Y22LkApLYftva3KnzXnE5MkSDJmxkVuFMZByeG",
  "key38": "RtbX7J8vb1VhWYsDjXLyccB5y9jvJLHEC6vwKNp7eZwWySncDvkYRTKxc3mMKmRVUZHf3SJmHHD4czir7EiTu4T",
  "key39": "4ohM38rU3W4wbKTQJQzsoC34GVqGTdV4f3kJKi3SfBiiLexFbm4CUZ8t1AqLTY8obbuYWcUZCpScoDgDqGBqUvV5"
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

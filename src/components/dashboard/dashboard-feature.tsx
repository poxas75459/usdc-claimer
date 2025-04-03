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
    "qX6XHLrtca9Kc94m195oesMsPkPGkvGnjzfRND4aAsTBLnBzcyUDqSm95YZcfkUSfxDRG3LLYjwrmoEUYdAyRSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zm312UDFcsgHifsxJagLpMnpfrsvw8X2idUcvsD3tgmmihUaL3YKUvzUYsbg9rv9AV7pksHTkAV4NbBLbXqAuot",
  "key1": "3GoJQaxm4uCoVc5KKQzvBeZviZpaoHokomoMVChJ7gnrgR1hrLKyGv1hNK48iZ2hRYLQ3jdJ5u8rzwfYy4ZRZiLh",
  "key2": "2JWCLSfXy7nWmnfyiuGnFfRh8SEsWuPCWYf4st2vXfMzvDw7YKcwyZqAR2AopGf23Jm5TUcCRm6EJ4LdC1kZLmNA",
  "key3": "2PdT4JFhE6JjgS1oKshnCqcWhTrcX5cCG63EhVTxemiLdbBeWibvHdYgT6SyMtCuZahWVY1csWJicKdjWbZJPznt",
  "key4": "4uVGZH9cQHJJgyjzJWBenTXpzhiFZic1M2RryVp99qi7B7PWzE1rf9KHjfbhsQ3rLgbJuVAsiJeeDZv9aowRnw1",
  "key5": "2xK9e85GnXdV4jCNqBrajhwNfQnFHuLogFm64G8MsSNihaLS4cHmp1JmK37EtcXbMSkvdWRhaDveXr9WKZzioEXY",
  "key6": "2WN39FM7dWCgdzVHRJH6ZhDqXCQvSmHELNL81mkknWgPbpHkwdBmTkBGA7KHqizhS4y1pqPeDrMpA2bcKbtVvFUA",
  "key7": "5evu33QADj79FHmqPygiHe3NiWs2LeVBh82QqzydssRdMZspMGpE8bJD5cnUhnnadGk3c2NKFpxGsZMdzmbfmyUK",
  "key8": "2ckWs11Ajv2CvxVfFwkZCyRU4pkrDPddz2Q6jENoh9LUWzMrsMSqmrR1xryQBBdfFi5Wde7KCAsJdH9cpjwnAuuA",
  "key9": "2b6tgS4ENvKvQSUWsvCfLGBSgCBw8PZ7GrgqjSWgqMmwoorskEAh6388aeEZifyu3iHc3pZcRui74ayFXFEuHV56",
  "key10": "ycEguEC81WJ1wq9MtrCZyPDN1t4LMZ74xZqBZJJwD7waTQDpMVTKVkLKdgfvCGUi1FDDGVtdbxNxJZQHH8r4UL3",
  "key11": "RB34ExB6q3enXETFb3VfEFRR148aoFr4FUzKuc8f2EbHv4zbEB67Z7W8A7B1wabMy8grE38Uihd7htECtijvBJv",
  "key12": "2p4GUdBP9v5a4vwkceQxM946A2zfSRLA1VDe46pjhzAS3WLShmxLwfsYcKVkgFes3Ro6C8dckA231F7Pydv4EtGU",
  "key13": "24PK4wYU4LqXC9s2MtvKmeoKuKk9SuzTpff5FzMQajppiUxEt17Za6u61bBQnxwqh24M3NUGEbBuyBiCoRMDoqAm",
  "key14": "3QKknxpoHcXupKfuGSfCmGvGPZb4x63vaQP8pfW2stcYhNxx7mUn2ZXYXLn56SQK1jepbP4yziDNLzM2s1wWBWrF",
  "key15": "27sPT1ooy51BgQbpqEWfyXWvdirSVUsj42u7FfT64Mk6r6yXCXTU2iJ7unL2HUjCDTUCYAY3KCjEHY9aiXizNW7f",
  "key16": "DL4c1QfoJopVXSPwH5DJaEWASn9Dgb7BoAenej2FLeAtbatAQwZdP7vHN5bmU28dvD1EWVnvtThJCsJBNTVhBuY",
  "key17": "5NxL1gxmx8qZwEEuxpa6ogsquGe36Ct37LHbN5Ezy8SeBGp3jpP4BE5kNhEdPshxqoT6wY1KUS3RPugZ6aKM276n",
  "key18": "1i8xb9LGLh2o5MTbjUCk9rV386WTxyxY3RBkuednWUxpR91oSeoMSQY5t2WJN4tB3AW5GYKKRFQSHQaJSZjuwjn",
  "key19": "5GqAu29dkEzpMhbGmYQMczMEyHfaws2r5b5TeJyNRHJV3SGpgiFn5AohLxaq3TmYK8Np5EMGQiShLhAchksEKVHN",
  "key20": "43sNQnvrgNRdcTjyFs9HKe1uGyuNeUd1T57i7JB7skPb5K2wu1YjWfLmEcJTDqZFvxgobtAhpDKiVyyut1E8hafP",
  "key21": "4pGVPmmPEK6dhwvFiUVBgT4AmQ5NTc85Ja5XiPvzEnu6gA4qs5g7f98UDzcQEAfVCwtpzQ6mt32fYjZFhttRGmji",
  "key22": "2PdVdah9DYKtYkCkEVqHq7nB2pcqf8VAhoxPyyWDKhc3GBaBzGbW5eHSHe76B6NjVKgGagbw5p9zFcTPvEULxRyo",
  "key23": "2qvj6S82VxFS5AXpQqLBDUBd6NkkVWNhE643iFpqSVVMN6SkWQrrYZxyQBa2nuNW8f8Chph1Ugw5FqMVabBxFUTu",
  "key24": "35CPgWALoKEtx8dnAazmpzMqqUCn6CnC7ZNGnAa4Sa6kD3V9RoenipWwJq9ZJNhC1Ak4Tp1dSyYHnAUwy1wyu7au",
  "key25": "3LWwnSasV3EcDgNcfWibG9bsHjRUf88kMYKt89xh57VNyA85VDMBJx2cWFofNP6kpjBNx2NJrHWdbNUjNp7Ap4j4",
  "key26": "3edzBTxW7cyRtm2zKJkLrmkjGUbxVWb9bycgXuQLGM5Jd1WaLHdPcqSvwVHrpzQpwd6zpsYR2P8oyRnqQWkz9ejU",
  "key27": "5GDTjEmYGQ4CmBKnoKsRrnDR5avG8KghdG7kXZMzwdVLmGHRVNKrdqwKMQmVxk66MYmRrUp64xVHNcSxsEoreRK",
  "key28": "2uP2EHwYix1MkevZfUh2kTfQJgqmBmuEPuYgiJpmk9bg3pQUa6XgSMFhox7MWR2BfG5MNcYQC88s4KT41nFJTKWS",
  "key29": "Sr1Cg1hycPzhDVvLx4nSEPk1pUZiGmJo79GbDUYWgJYjmFaXeF7v3Q7KdKa4sA4Uk9BrUwoByPsua3CWmNKbZkU",
  "key30": "63vVrDLDLugc66YXm1UPvu8KxuLpf2Lc91n4A3cDZyUZn4YuBhr1UD2CCw4dEb96EdKZ6TRdYCXXS6rEyEk3o3ff",
  "key31": "3Qceyvrb3vjRQQZuAQzPgM4mmVBexW7MpA8uRWEXLPW6FRTKr87PKH8TpxNguFF9CSSiJXKY5ewjUNsMgJbgfxYZ",
  "key32": "5bZTKbYY5X6stJh9LtVgypHqip7KnfuG1XjpvnVfirZhiAgk7fV1c1cRPVhjkTUBjfi2zzfEowmhCSgkes1zxRLV",
  "key33": "RCY8XqkgHHsXZtvWVDDpL7cfkq51gK9VeQT1dSdRv5QfmNjwL4wyCRzvUVt12mhB6FcLukUE36EpH42WdreRiaf",
  "key34": "Wzp5G9mEkQhBaJbKd1ZEhz4rocPQoRXuuLH72psird8oSyc537ruaiZ4N8ZX9o5EMcLDmKb46oZBUzxRaucH6xp",
  "key35": "thspxHPF4uPgE521teWVxktyvjGkuS6eVpMcMfcczuSGhHztW5FKq22cKtt4YZvbMLkBws5PWM99XmSynvP1L8n",
  "key36": "2HV1pGr7z1Ho2rAiBMrmgFHPPdZvov8WZ9tUSdhcpbvyvbo3zDqZsqK1M2ViaGomKcuD2FW6A1MK9MQMK72ALQbo",
  "key37": "236on24dbHnrtpNEZHNkvACcY3Yt9btgfNfTL6N9nNmTczDG2NBrDSZL7rN4YjBBtw43YKh3RhR8F9sJiTDyb4NP",
  "key38": "5T511VzznETpgzwSUDMKZRJqQjHTqqwSWVj848XxLDc9CFDANCiQwmKCkPti1DLZfNDA5ahRCdMZJXkXgiY7G3BC"
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

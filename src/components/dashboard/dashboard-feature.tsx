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
    "3jQ7YGKWHQ8e5v1EBmqzAvDpQMdvtwm8ctekvzWHSyVs2v238JJqi6Vg8vstYZsmQdknEp8QBccVDja3JuyaMTze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mABsswx2RUFuKpay2WE6jpFn9SFy136eW7y3GW5JNjSkTbdgyDfH5iHdxGAmkCKHhrnR9Rupx6PRCQ2rXfVgyg2",
  "key1": "5xHo5yMzSnXRKbjMGE46hK7LwRApHUpmtQnXJKS5xqC9S9nRfpcyVv34vkkfwWk1cTSyBWRD2VJt3n1y4ukz1TbN",
  "key2": "4mdQhnUdzx3k6rWsnEB7Uy8muZTWFJ9Y5pCuTNKewPt39qNfE87LJxpPQB2gCZA2NZ2272hTW1JqrsEbNbyshazB",
  "key3": "22hLLTx1NPVQvLY5u6LJfn2WpZMMsJVqb5MX1yqvkaDCL48mgVowCUGfZ9AtVsKscG33pUEgTxaekpcdJJcNdnTZ",
  "key4": "5Q3gvkgpxNEHCu5JJuknzSeBgggBL35DvfXkfwqEi9Vp16KHx9vkXJUvdZPYGwDxigsDqLJp6Zr97L4ikqcT41ft",
  "key5": "5B8bWSXTyZtJyaVx3i6HLA33gqcXB7oDd6BLTkccThUX9KNEZHrhqfBcKSjfKWkFpLxYG2MrG1yLjwauUm6mNtAc",
  "key6": "648KZagSUQpc4fF4K2mEcVMFVRv8nqCnPfCZBvhTLgntGe4JkRArDaah5wLvsGhKGM7Eu4uX7rb1z8pY4Z9KojPw",
  "key7": "b6QnSry1tgGyKF6P9RHE9mHdb4pvB7yqmsbF6WN3fQvXaoFe5GTcWDeZ9kpb67pxbPcLqRHgzZvX82JwFZwNYJq",
  "key8": "3TarsrjFFFeaw5ULzP9TAfzQa3vu6LysPTDQDgEry7AXS7baqLZHv2rUuXmcWRB77hDweEnUZGNM9QDenzLTRvjG",
  "key9": "FCGK7JVb4akvvfeEYiQ6MSkjVubXcd86gfUSrEP3scrtB3eNxr3jVrLJa9ReLHq3gVMeUUZaP4dPFBcvnw7mBH8",
  "key10": "283vFKqjfCddntZjHheNKSufZc388ZdCpoUpQAhi5QcuxsifcszGm1x8yJm111MXnp2LQADA1wmrDfrUd9wgYuYw",
  "key11": "5QE2GtLDpKYPZnw9cV5Hpq2ReFDGDdhsvAJF74ZwKu4dnAY7DYTmVEFw1aKmitJ2mcXfdtaDGHorvg5JJTbd23Zj",
  "key12": "43SiZ5ggV31Zuoii6Nm5EKWiLPcndoRfr65uAzsgWNchv6Wg8yHwMcX5hYWZVphAxScoqvY4MpEv7Pfp8iRxGi2Q",
  "key13": "5wfbgfikQWwPEdvHCoZucxwEhAXzBne6v2gWPpD1pdTWrnaFuxGedpxMqhJ3if9W6Db47iHetqYx9HwrMSLgAifb",
  "key14": "GVKZguC64R87Wswq2s7uyBGaEqN4NXHLZZSPZr6z2h2zA2mRWpJ3qoEC1CudDJxSUisnucuHwiJSRpoxikS2wbf",
  "key15": "dP4dNgygkocFxnMwkBk8pdscZJzNri6ufHwFoJvmL9eniPn5un99MmGp4oKPhPjBFQtDc9kWJWggdnuLTqdSVyW",
  "key16": "2K75e48mgYVc1P5EgwCWnge7yYHfzwAR9i37Rmrib4VYPxDHAydjozyFLxJ8a7mvXV3f8vYBSGNMrsVK2jjbxjNf",
  "key17": "5NutC1ApwNMGGcgdK3yJEaTkHuS2MCzM81kRaMziDvP3J8oHPjS6Qz2B5ssaU2nyRWVxNnCPAEWdGG7P9ycfoiQ1",
  "key18": "KU2nMLVquZZkiZT6w6nMt9TxVDUadTtpGbkGBNK17jyqN2VNXU8HrCLP464EL9CQYUoAsCnGBZasPZzgJpvE2Fq",
  "key19": "JFBbHkfUUUHjKoYNFA3MP6cLTzv4bWJNXDsKhMe46tFdfh2ALMB912xRwfNjQzknBwsK91KCp9nmpXp9U2BpSe9",
  "key20": "2qLs9kTe2HLjekc5BGYPzC41ZBSwKENxYKjtcheiXQBZ6TeJdzWrcVFwxhHPLfvFBC6LJbYQpUcL7hut5Qa1qX9k",
  "key21": "344mvWToZnX3KGrUKCnQKkLZ7DNvyrWmL28tW6YvkiuETCRn2U3JD91zMaKVHznY9j3y6byeLrbXrq8GgDtQPz2o",
  "key22": "DPKm4dGvXDY8jNAWXwBB3ZSu4aNynxj67XEuygW1a4KDdBaRseK1T6j6yw2KhpJ4M8HR7718iZMMkxa4GpZm1Nk",
  "key23": "5skKaWJGsJuTyfoBvwwHxvRNo3DypWabXRWBCyR1D1JAzP9cRkgiiYpk1zwpyKS6qWtj3GWfNQLszSkdXccRFC9p",
  "key24": "3TWv34BYSEPwukJCbbqQak9mZQP4LMALYztb8KhpkYMjJtjqJoQG3FE5DXgfSZtkFTszT6p7RgELwwjWnmXar5pC",
  "key25": "3Sa4EEFsehTkuhbWSKpv99UoeUUFDw9LuVajjN3LXCTTCeZnCE1L92TH3FAVSMfMpARmDtjsuDhWUSfv8qgRuYF8",
  "key26": "3kykT4fSXAmjPVYMoMYQnC6vvMVpBxgbpfuVmWv956qNRbQjNJe1ryWdENzc9CREQpUJ4E7HnPTtLQciToHnPW8h",
  "key27": "kgfuowvpzYp1X5TSogXBHNYC8Y35qVZRveNZuxEzf8oRuAXaQX2oFKzx73TyzGetHsQMPUMy3yQET3xJt6qe6HE",
  "key28": "4rBeSUJxmqEs6ix2hRYAcSxKAwD6s7aXMDu5HUVhSCwM728SdCSDANq19ZTpm5pSiUEyuhSeZoDeCEw8rB1VGr3x",
  "key29": "5ymAmP5wCjbxbvUtzkmoSthYRKS1cL1r7qqzsnQkf5Zbh4fWgHMGPp8URKVQGvbgZdeotSFHPpWx4BtpiecABWZe",
  "key30": "3sxsigRY8nfLRHeZh9QiySEk4Bet6H5YmpeTKR8GTZBuRDVV9ofNLyKeSiXVbVRHvn87U8rZdSS6rtmahATpjDtA",
  "key31": "5cMrSxdXXGhAqRYdSBv7F3PYs6DHLYpEggN5pc7xn7E832P3z16hmg9x8uvhBTQGAhs5k6pKyeRg3Zvd5FnoL6Wz",
  "key32": "3xVaYr9RuUrdH9jZiBW5FLZSmWBLKiwNdszG1LPuWe2ocuGxzxeVozeNXn7mq6B9yfU63Sd9e9YKvYuLhLv7oDuH",
  "key33": "4yrsL2pyE13fUmUZYRwrCWB4k4gXqhGTmfyad2sZghg7JyKYfmd3rppbtUU2g8GYY2u99CiQFUSzxxPJLSbio8gS",
  "key34": "3QTcVyt4g3YH9ngBbnrwmgsM48ACAG19AeoronTq2uJ23RyDH6p5VysYr8QB74xqeZhoxHcUHtAyYQ8qtDJPYJj6",
  "key35": "2m4HQX9yzYtAccKfB2sz23cM8iFHPnB7i5kVDonS21py14PnpZySLufWPLUHfJsrQvt5CHKJzQDkoxijn6TqFB9r",
  "key36": "2VEGjGMemWGdmQWJ964ortyjSGhoaPtMbbqApj8igmTeh2b2Ru21YXs9Tm89eYvFCq3QBmy6uXzniR24gbGj4StB",
  "key37": "63ZmkC1KviNuCtp9zx63wDpsxr8FQ6RQG4PXau5Kt3FhyZWCsrn9fcuneDDyqoRB5BE38mkBq3mrEFMRUZLQddaN",
  "key38": "47Y2HiVXuteLev7bcGubTpBK56RVp82zbNewr5rnmZGysQuGx8tdTymeNq9g2fKRewZzj5Rd3VZ4EzRaw6bdqaEs",
  "key39": "2qna2PrKVBPBgqkredZJyYjyKc631wrf8Qk3cqR6Jt4PiX4eVaaWgGwmsBKRfbi6BczkfptKviXrmBnTUU1t9HK5",
  "key40": "5rjD1ts7zGYMFVCLVP5tt39WFpeJdWW37mBPknaXJ7gpbYMcJcwCHTuEUDGsVK1PZn5qREkhz1QGbjd161vmYrwq",
  "key41": "22HDmckwwPBvQHdXbiM5R3CJMxsAxAY7XqyG7zgvSxobaFrdddCbN3BMqJik4BbwYtDDtiv6JtT93pzfUDxfiv52",
  "key42": "uQ2Nxkm7XV4HRo2vNCFASCu7DUhKCwJMUkg7R98mpsd3ZScquVYx7NMpGK9YdidxTSdFekVbUh8sFGfhP1dt2ds",
  "key43": "4GDcPki5jT1JWczLPgo6Y1KfAmRjNmnu6Wz4nHf61dTxjabZMkZhQUTXPxtBhgRL4rKRF5eCwJYK79XLZYQaDndi",
  "key44": "31zcxYWEpkzVAkUHitYbgeTTLy1CB3uqygiAPCdaq14mEx83DFW8j8ayprAg1dhuv5XxSrVbFtfgimSJDst6MtKj",
  "key45": "43nE4BtYrw6huFNFRgXPCR3TJscsY656GWvEFgQQg49r8EqudWRJJNd4rwSPi6gXjGqfS6UJkfHFeGDtFEL9E3vR",
  "key46": "8N5ceeC7EpRN5gCQRWbaiRkeGmS2KnidmgxSnXvYGCaJoymgyas6UzdvX5sKuNpa2cojcF34KRxoP3VvhXJ2Cbd",
  "key47": "21pZwtf8Wg4dv4PmTbfLxDcWG7NBLTi1WzJDDDdjuHTWhfaCiAJbBb1c2w8PasF5fmkFzjjPG3t4CjGuA12RNtnS",
  "key48": "5DG2Nn6VUbRxuCDDeJx5za3KRQ9YmM6UbTm6X1ZPJnsovG7iCYJygGi9KdcbcdoPhPhiyZGBcr7v1a8Vs2ZLAZpD"
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

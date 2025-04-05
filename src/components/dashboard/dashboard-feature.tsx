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
    "4seafipnuxuB5eynm9SJZLCHTP6dtRMogR9sBnLMYxJV6XFgpriJqfiYjW3r3ijB6npqpTVz8KVHFMzpLu1sGrJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gW4Zqs9EfpqpRPvzJ4txKFdARN2E2Fhk7ayWmGMFquZCAVDwzFB7fv8k64dYfPERotopJYNnRJSwRv3rTXAuoRB",
  "key1": "3Ap2Vjujd7Pt2DpJR1qutMPNtdNkWYevuXcc2tFSCRmWT7r54kaHGvUhdn9vqyDMzgmt7jz3559enQEv81qFBHT8",
  "key2": "4e7QrGJWztLHzyA5GRyCx5RGEkegwsRedDWYa7nLjBY4wp948PJbRMWjBoNmhd1e2X7if43qEBwoCSzzTUtNsNr8",
  "key3": "5QRvJwdUYYhr6FPVGoNqy4DY9cCrH8VzCq83CGwXDuWywb9puqYdftj7JAoFFf86K1hxfQsQPcnjcGcMUBPUv1e2",
  "key4": "2K9pehyXHLnc5pPLeQ4GjPPPch81ZMdW24fmnYxomsEK7HJYvhyJXxhaW2Yr76yJfFNAZ3GJyYuksRbpWhxkYhBv",
  "key5": "54bCAo1LNH7zDAiwKJmGVm8TqsrvWodzSeUbqJY1W5kNzPoccJq2ruLqqzNAuzvjJ8SJPAW63CECxLP9bK9HqqGn",
  "key6": "2RCKg4rT8HJHsZM1sVeHSnLa2g9WW7nHdeFbGWH32BGCoDCCdcsHXeD5g1jmKaD2PsCtdjo5Mwg5bUZxRbTmp6ci",
  "key7": "3q3Wc6UBfxicK6Fkyz63KoHvRY75ms377bHEH8vK6N6z3cw7xJ9cMuQ6J393RKCQA9AErxYgBg3n9PvBFguhusTz",
  "key8": "2CtdoRcVAcvpAWppRBavM4f2kDyFqhR7E1Et9y22fYnRjwTKNuTYihUMJFgfi3nfM87x8aQM5goMcPtLjyLtDFdE",
  "key9": "3Mf2a8vumJqRykNaXJ4weodbiAaxzWGHMYX8esQbJ14TDhNRzTgP1YVBzF8vsAk3R4PA8WqKFHG3qiSCr1q52Nf6",
  "key10": "3r5zpUSWcnveMMoMZtfGUW2dd7fUcu42X8H2YZhZtYkVunmHUEz9jf4DjxtJTuik4YavHg2PYQ393W9HTZESYpH4",
  "key11": "3JEFSybxuBZEFm47Xv7Zmx6DoeG2VGb9Q6CX5wa3fo81JNv65fnst8yXw1Wy6nqbjNpuDB4bWpyjNnsNbHTcbuQw",
  "key12": "5aAaY6LeDCpyvFznuSK3hiX7LYMyqsWwPxPTnkGvfXdcFtsycRfS5XvYmjCkZvfNLomZk3oMd437EsLHj8VST3v9",
  "key13": "2xzPqkxrv2kKPG1uEZgVFt7VTpsianCqQwxQNbunfyz7AGU3mDJC3mFCXbQnx1b6KuLQgixXWyRc9Fhaat4Eip2X",
  "key14": "42c1kLY2BpKKfyRLCQjMi3k5aUGZGagDutQKAr41KQ7GzuVV2M71pmL8ZXRV12huSNt9rSyWDdAeB9KrxAoxTRfn",
  "key15": "646KMwuiNdiADqujFaB4ESUdFi7QCP6tDcwitEajdKcNsup3E3HmyuNaJmiYx7mocdRHrMYTaGgbvpUQ1ApAgdvk",
  "key16": "5DMVP4BHxJZVGwSiQMBPMekvSypKQEbLMmJg5EhDTqxjwinrzaLjnjuiTZmVF8aYv7kFxmL9PCb19kehS4vPELiT",
  "key17": "Q4pvbwXc48HPu1fsK5Vpc9qJXyFc4shPwBoyxV8YYdTB5DYK32Rryczu8ALpWgHgioRvUHUyJgiwVMNotaMSZ12",
  "key18": "s9kNkmt8rTaRQwYgPK9rJ9xh1Rzgp6st7t4dFpUQDrSxVHryLPmCytQfJgsivKUFigVAsv6k4mqmqAPN1sx9wvA",
  "key19": "2Xnx4iwS2srPGU4oBJwAcxt9vPCGBJUNXq2hqSdqrTN9suuCVWPL1HCa4DqW46UNw752VxBEvwTzqwth3HeU5YrY",
  "key20": "4ZTtAwZgWD4en6mxX6xuMpUmn4wSC3XktPNhUguGCVm5DZ5q7qXvwJKwES5GDruBdg7JaykJcrgxrg6vKd6brr4i",
  "key21": "2gha92XzGGocfQUC9fveuzqUToVrp5p38bqQojRiz6DAWDRikQk7tqhkj4acuUhwxuYcRu3X4C91he1A3hTADmpJ",
  "key22": "3MZsKzqKwySzmp8Bozai43ExeMwRFHFdpFokWHWoUkZMuz4dyauFYuh3cDrTcARuDaGkhJ1TDe6TAdwB7EWLahJ4",
  "key23": "YkmcMdKr4P22Kdf47Y1zAsxd4LLqCSxzHwpKaXZddiaM3oRXhuHf3MuucrJ2j5tAQqPQtEifdXg4dZQuJRaD2xR",
  "key24": "33sFRM7rdHoKSMH9XGxmx4sSdeQVpeeos1EyCtSrwoTXmmWdnhsSG8rSiERhVPFf8aNL2xi6yueN48VvYSFSr4St",
  "key25": "4iRux61svJYrj4o4mbvzQd6Qcbj8KN1AUprrHJzYCxcukCyAfX9tfGyKWj9XPwwDL8vFuLtc4dKyHx6gjFB3jqvM",
  "key26": "52NJCaFCiYdjyqAfrR36VfW5BMRim8JCG9N1k5CdkH5FnKkMTYeUqrJT8XGaEkcaGN7A8SHWd2YorANtoKikx8yD",
  "key27": "5yBik5QrqTz9duoyQCoTKCWpdifmQoXv8RhwHbmYJPVtnryHW79moR5nbLf11oxUEU2QqRXEpfFs3tnhN1DVzmqD",
  "key28": "55DqvbsERdSFeTZbYX9Dx69pkVwakAXfp7PTGv8VkYzNJ6fGTBCrQcKvVqKcNZ4hZEsF5MDBXjvnQZQK8QwmSVub",
  "key29": "3zuvFq7vdZtChoqX3HxgvRQ22xdRSAYb5DdPm3n3LeaPfgTgCwPS7Mfn5BTt7GWnyX7JkVBr4DuKqCKnsm2fAFV4",
  "key30": "384dtEvmwG7ZCiWCzPcvNXSRuWc8257N1UbcimY7qfbnNHJDV6mxGnSgtGEMjt8Nbq6HmaBnoRYzPpvEYCAUgJGv",
  "key31": "5PRvQjPT9rAjX8rK7twchDL7xZqreSzfHUnDbBTN3M7zsoexuACLj9bqzXnEV7z8SqsjKHdkDB4ES8bvV5M1zy6",
  "key32": "457FE28tuABNd3XRGaCbb37PhBVpFXwhkjWSjgVd8iEvQxfwLibfCpXJVcNP8wjwRBJG8KY2kMViqAJoP8EdBkL1",
  "key33": "5fQgUaj8VDjy6kDKBkhafTzJw1Mxu4A5kQC5NsbbCUncgu16VjEi1anAfpEdndFJqhJqMkqeuij468WMhx6Q8ydS",
  "key34": "2rJZfgkQXtmz2ui118zW7rgNfba7w8JU4pzXdznQ7vRz6DQ7VfRM1AxiJPWTYwsvVxfDL5LMUo82isHNAxcAQ8jh",
  "key35": "53auvk8nVdPhJDGqSf6UbReouUmuBq9TRXvorR8jitbbm71BYVLG4DZrRhDmrRnmkPJfqV88JcMzauW2XpyUjkLd"
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

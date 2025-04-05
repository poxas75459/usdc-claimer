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
    "4qeXbEhRXRMwZYW41cBPSYvAt4LjGJ4zkKyrV6hXd1JM5D6m5qcHp3bNiZhCBzmjNWob39YQEageNwbpG7B4jD3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpUjSJMSUiZT9x5TpDY9rcGv8UBebSusiU53GxNWGvMqXvyshbpWWfmsgwRakfTD13Xy3RnzPmeRaiLQCj2kd22",
  "key1": "28xk3eDYb5vm3yjHk2MZZ26em3KhmWhht7bepCk77bbTzJJDWYQGYkGAUfCvCKPeWoyTp7EcCysqr8h3rxm3fP6c",
  "key2": "4hpvixA6SHacnjNvhC4K5L8ToDUaRAKYS95EL2sLDjwk49i9jsdt455tv4CVToppjsUxuJPfYqDWDxojqY6eL9sg",
  "key3": "TmfccKWsc1Vbz7wSFHKrk3jXx3ppnraEqxCwSetdmMhNmJHfJgc8WoM4rgp3UKf9VLMUExoVvn5XxuEitU2PGmy",
  "key4": "3hRwmQt47D3dqdHJspYA3mx3AFNDe24F5Et9i3rfJmHzZHLxCPRopdjT2jETVYATfzsLmc6jYapkX1xwjtJE23ua",
  "key5": "5rD5aqLqmu2eU7YXY7uF83vYSVfGZ8rbHbEmNdUGYsBdUJvzWM2F2s2MZQRoUHz4Ebh8N15StG6Fas8vUAUfdmUN",
  "key6": "5k3hGxRK5xjXM8bik6Wpb1FA29cAdLVYJFNh95NkSLGVKyogYG1Y25yZCErt1oizbLbDfDwVddbMqERudcZr2GiR",
  "key7": "38BPkDPZBHcumRRhoE69ysSHcYPqxGkARbVcsRDEfjE2ZDoXuYNXmjBd3G8NRqjVxYjrF4Uo1sRW7avtKg3xyqTu",
  "key8": "2k12B5yBCL72qEuMX1EV2PEuYGSeqjcd5iRJS9wvW8GUkirbnbpYE1b4JcFwuzNZj6vMMpPg7gWxpvk5rk68Tv5U",
  "key9": "58RJzwKkFg56X2UnTpzsmT3zyTruyTCZx5jPtiQ6mT86h2xJ3xErJ5uZNcS6LoeVPXFiyb35vTSUgNBC7LGxiYpN",
  "key10": "5ELiRiCpf3TfZcLJ4JxKEKezR6tNzspP9nbQUW7iGbFvDiL7VmdzU5JCVfFNwcZYKyHbfceKKZBLFMfqKeVLxUc8",
  "key11": "r3jDuqAY6tcXEN7x56U2k77cstKozUKKLXMj6MF2Xy3UjxUcXsdBLfdsLZDFVzLJQomAG6A8QF5F9ykHRr2GUsE",
  "key12": "49VdMG5dtEefxwb6Tibz8hXLsKeSvjAbHUkTMR4DpAJHNziWdwsvN8rUZ2Ujn8fkMKuryPBM4HS7XDciGDgDPahW",
  "key13": "WC7RdPXLVUqRNiju1kYJYMxJSWwXVknnvAMzW3AuPHFdyjELB5E2Vk1TfvRVXZS69F1dcFYrkGet2wf6VLDKmeG",
  "key14": "2CEXSPJ3Hx7zsRE9ED1rnJwmXQacgYyNYthupWoSSxaa1jezbTYmcF9DyNPeEc3Xyx6xWQMbRH9p9fQtNhuZnTvd",
  "key15": "4x5qXmPFHx9WkXtZHcQz7dereRNV9fA8zk5PwwRyfLwkZsnhRa6gTD8j4qaeSeDpL6gmGNR2yxMxUQCZSfqGLhrv",
  "key16": "3MaHpBRX2DDmQnFbMvLjC8MHPGphL2fsvEwjYKpGG8b13VJ9PHurJhrJYo7LednRqUrx2UCtQXnrVacuvDBR1JY6",
  "key17": "4hK7WgWwd9eUnrqKMXgWZbFPtDv6qGzCAiFrZhzEruezxJPT5v7AZy2t8E64rFGuGbEnWSvZoS6cDR3kCQpojTBM",
  "key18": "3zmTsSS19vgKpm1Th4VXnV3n7JkTTgkwPs4a4bcgpUQGhgwKiNq7JVhQSjQWQiUKtaRpkr5x6s5wcpdfXw5njtvU",
  "key19": "3NA2T9gZqD7tzitLPKHYQHNY8KNCzu9nbTsk7L3K9apvrSqSoBimemF8FW9BYAb3zgjtLi4mQNqAaJquNagnsroB",
  "key20": "3qRxFq1aEhZKqaxD8sLzDkzwARqGizQBCYvtTTUy1AgT9hQRukp94nU1UHiqKZn8uVBNBjMZ4VmxtQqhY8pvd2ox",
  "key21": "4JW3uvH1xrME3C6EaokRVN1FXPQwXCrxVJz2we6fweTMqf8qsNYaKMaw425nRFEzU4YrHNBXgv84QxD3RcejeEw2",
  "key22": "w6ntdukM34ZZeV5H4efwFKJJHZZc9JewxttbWrykoSaexkt2mXrDv8zUo2i9BEnE8NpE7B7xjw9YtkoweHjjv1m",
  "key23": "2QQyCs1HCHK27ctBMQNjcMBHBPqc8JByGJmwwce9qtYWihEJJKQ9N5qHNSr6XoXiHHuwZ5ChqLzFm55HVRn9xZ1a",
  "key24": "2pHt1JRdU27t4anqV61Ab99gALHk5EKaJdbAgAZGfHRcfjUfFVJHQXkwqMY8hrknY1YFkUVV3pGjswCiMTx2TGbf",
  "key25": "CefWNkzXMiWR9Ksc32ULYvAVrvPPSZfwTffYDoSiz5S4KZeb6mLm1FNURZUEXkTCqK3p6MeyoovL7sTRC2EQwUo",
  "key26": "T2RzfDZZsm25ackiUG4jfvFqjAs4dFnJKzErt3HB5QchWBZPs83fZLrXimueVmqnKqgfkFJKshAktJVY3Ap1AqB",
  "key27": "3hgeGpMHQb21AQY3tpGs1QfzWcRyZWmXw9nqiuRajhws4UmgziAU9aM3SZWzsvxpAPbupUYN6nBbs1kRfDtypgnP",
  "key28": "aaH1exddgcskU5xHT7KXUTCYaV5FGtGf4hD1fWH53YrxAbBpzEW47QwuK9uoR4kNvHSALcbFLyM6MkcLJ8SnuJS",
  "key29": "3jc5q3ETNKY5qZGsUWmyB2BAMbGzRgRmpPsevSDtEzPrwRAkFU5cZihYzb2VPkorXCoNZDLkwgGWQQYM7wwacTB6",
  "key30": "SiYv85aeF42udAU8ghFxpAbQ3s9gZWK15GGRJj9F7qZ3dctS2s46mY6Ho2JaSXFrq86K31Hs1SgB8yGnq2XisNp",
  "key31": "3LD414tkT7riySVw4qGYfF8tpGyfbWKguMwL4rxLdzSNPJB2au1VoDaS1sbBRXV33NGgwmweuwHSH23Lxy6kKSK5",
  "key32": "4Uh4xoDsk2KB9fbUML3NwZeTERagDWH6o561G4B9H1ESQ4b4pUKT3aBX66aeEGAhcf6MHesMWcTEUzKPTY2EKEjn",
  "key33": "2dRBTE7XaHYSHy5c3uBmyfR13sSPGrB34tggB9b7jCPTbo7RXb9hYWTEVdMQqfXU8vSBSKsTHyU4nrzqU5zBDNmc",
  "key34": "5R6hjnhPa7bJkaB3o1neW7m89i1gyphoQZFzGqzWAomuB7hXVry5zYrWxvYuU4oLKNC1KezVRrsJHTbYst7QQ8eu",
  "key35": "2DJSWaAVKg4cpdMs126GxWLFBy9WVUCeu2obdaWe5SEyVnsFgvyGq8Nhc8CtHGk4HxVWensPW1nohdF1MbTTikgc",
  "key36": "3Vp54pLcwgQSqJbexuG4T9nwWrEEacf3y85GTP8RAvs2fDN2X6z8WnY3mww3B3h5j7vwBzw8ZrNGVBa49p5KiaeB",
  "key37": "379DXAtzH4odWzoD3MAnDxYEbVXKQdRp2bSXEqbbTpMmDGRxWHYZSc5fM9peide56tzHsv6A4bHFhr4ybVPmzn3x",
  "key38": "3qpZ3f2juSowqTxkKgzskBHUwHiUDHTuyPDEpQUTxH2aPsSk8r72v5piFuH28sRhscvozuJ9fv8XfyfSJ4VcfUVi",
  "key39": "oa4qnuppbAGxVwhpGkvtVfd9t2Ukqh4PiCoUKnFhkMMkng3Y9wDK8ubTV8Rjk3Ucv4GRS1ukukyVULJE9W2pcgn",
  "key40": "4CRPLD8AxTFQ2Cs3m25UycYz7RUq5dTomP8zQasKtQFZLdcjd1n4nGKwKL6HW681HMjruZWWUPNY27CJmxhTteuP"
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

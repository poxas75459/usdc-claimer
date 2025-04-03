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
    "3JhGraWquLiFqU5pwhEmrvUHGakcwwuM1QANMh7vo5YeAixtiroE7cjdcHkzPENDDSuKs8DemY8V4wAdYp4fM9dh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Aee2E7ae32j1WcoLRhrbd8ihQDmvvc8NmQVTsUt2VrskZXaBkNWY5kFoKQ7N4psTzGiiRbPZqfsujo7CjagQTbx",
  "key1": "XF78aShfTbkc9N6CXh2GwLzxnTsiWhLzuNXTEZMWxs192J89QqG9ZXF857KRcCymQxgysJGdU8jAVZA21mp5TkL",
  "key2": "5ZueZbstr12WdXcE9F4TevEj1t4NpGQmNGaegUfVSHosPHTS2ajg5sc9c3nD1uCWCk1xy3PyuvGUc45UiiNib3EX",
  "key3": "5FBk1vS8trtkL9b6pVCw6oqWBgWHt7en64zvdNUVyABQUs55qMNbx2qkwwojTPG9jwHiuB9JNS8yWrW8JkFEd3uW",
  "key4": "3Dsf4oqC9Ejxj1jenWd7qL8ZLJ85cqADD18UdiGwn4MMcNCKb8CP9FwV22kJZ1tnFKwkjb5yQaqmj23xtB1u8haL",
  "key5": "3wAm9r8S5JuSwfXaMuwGjHFShScpqdym22o71hpTf2xM9n1fmCH4T5tZY5WbStnF59zystBTfTdqCB5NtN3ngK7Y",
  "key6": "2khidsqz449FbqWNZrsn5gpAkmaANGpaUMcpJ3FBvmq1hvSGedyoirJBjWdmMDSreGdywsb9Wxou9VKR7FuA45uX",
  "key7": "3gyiHUKUQRrmGfPzHBrG4rqNJvZ86uGKPQeVPKPCh9BUhXm6TduvTM5bWg6vhS2pxU1fUHdPW8BAqnwreiGfn7GD",
  "key8": "4EPnmSxAmFBNxhGDNXk5M2z4PpiJFHUDX4p42KB8fPUaeMFcwzLX5e9QDmragoqA2qEkWEbE8KjefEn7FTY3pwS6",
  "key9": "4PiYhVjhizR9JPh6Tj7WmvKmyiFCPhUSyigGHErNUF7TB9x77S87nawYAktb8RX4DPPRjPrS3JKHyQ4SXV49iAzy",
  "key10": "2jWMGNwX6bRGkzYFdquy6skBQGuz6Mg8w5DTkyR2EkGwFj12TScAfpGbghEARGeVCbXDM3hXkJWjq794Kki3u1vr",
  "key11": "5eKdyuSHbfFpuLXGRSUdpsCnM6XGByZouAUjeCmbNAXMHpcyaKyYNE9aGHGF8P3AHczYpSAKQXZd7Ju9Er5XSHDD",
  "key12": "akCnauPUKmVxQFJatYoj4zKNbdVvjLwxozzwkNbHBSGBHc9NrafWZrBvNZxZnKpFPqfMAEfpFj9z34iQHB9Z5bn",
  "key13": "3q6bi3yBBDcK4XDTs4Jg3e6tBi4QBWtaxBkmsnuctMq9HBnAk7vDMZ2M7yXciMFfc5u9jQxd4tdR6Q2SJgwxKn3K",
  "key14": "3z4GtwN5zmypQbShLJb9Fiv1zHbSLMgBy6m6P999srvhVJaN9eee1Aa44MTF7XNNUEJAnm1RZcotQ7nJUqyGr5uf",
  "key15": "5pY7MdwxFfp4DDVXUrWKS2neqDjSpbsowyTm2HfpynZKYbn5CeDQ2ZNaj35Da4BK4DHo4382p76KaXkh8Qx3K6f2",
  "key16": "ayaVudwQ1eT23WAoDg8Y7oFmFDkMVS4UVDtr4oVHVDxQSq2NygAkGmLbW3EQnEu4yG2KaMbfW7JtCVfnrhFEJ1M",
  "key17": "4w1z7JuU8FKceGPq9wZ9RAE7igeztM4MTpEeEyQ4t3Y4SRrg7bcDtSMzTzDmQRmQVei61kReFwYQAf394YycvXoc",
  "key18": "4rmGqbd4DREK3c9ApgHUPZScnt1nNCvZ3wHv1QKqp93YdPr7c343VCfJQf1ENxfa5cQVBhKmswtfyoH9TD1jd56n",
  "key19": "esBwWHATkax5v2rcNk1j6ei4hMx7avrLcjmK2dTXyFPfkY8iwET2wz2jHWxFd7wcKavBZu3qcPVstL98VNH1dmM",
  "key20": "mWmBRPvwqFQ1Yf2f3sD3g5NWXzxVfj3MRvmv6pXqE3L8qYU68TPCpMStbhoL85ksuGe6KGZuFBvHxKu1jzLGG6M",
  "key21": "4qjoQTr5yG6kCbdzHxXJi4wZuEew28e7RVrPF7g55kGsUPD37Zyk9hcjryGZh8cdfotxHb3kJG9Uds2AVdJici9m",
  "key22": "3RJwwDqhxNJ19mPUgM2aLrEKWh5d1NVZwxHpYf6hqdBpVk1n4pLcsnBUV7Xfh2sjZkeUHpo19oLuu541taCiErQn",
  "key23": "5hZiKG39Sw6pemEzbiKosXR7ADDzVxmJtdCSehStP1zZN6UjnvgVwdgGrJ5rZbDsbf2WLHo2yFoFD3pdpR9zQ7Gt",
  "key24": "5sukNUgJhGJSoNUdQP2enggh9LU37CkcjjLrEVrMG2sXWqrdUdpU9j11PraZv2j5AGcd1fZEWBozcdEKbP62KrFS",
  "key25": "491b3FRYQ9c7hkfGW2ZXgKPC5fCWpBBXibBruMq4KeFBhwAD2wh4Duzd4VwzYULKx25n4U7WHragDnBiNXfqDmoR",
  "key26": "38six551FQKyVhJJoeUe1QRV4YMMNYLFus7cPP2Fq5iFCGHuAppBBqwcSqaLfVbBw3vau5cUCGj6rSBZjvHELTZx",
  "key27": "3AXeWN5eT5dofAGpxdrhi4mSAksS54MKhJDMB3XShbEUQH5anAynGsfNe8SSxVe6VVYSrLedTidt9J5cXYgu3YTU",
  "key28": "4mmWybQriS5VZiT9HxCDyotJYVTWXtCzkFr4sD3CZwTbyJ3XdSBHV2JwjLu3afzzwz6FX5PhSpUm1RaqhJwesrDv",
  "key29": "25MG5847qFkjSjGdEEqngZJL5R8YdidKD23eGAAL1wox6hFe6XaVLLwcexdujqyUgJ9QqiQrb4uNTwhBzdA3CWdZ",
  "key30": "5VucqMybNktVFUji2kE8JfkCZkZaCtwQNF3kbs1ce6aaxZEf4NNsWswCUqMf1kEqdmUPsLqGk97FT8SPW4C8ghU6",
  "key31": "2SUv4ncz6a1N3qp4vviPS1Pv4e5PyEvyJtSxG3HiYS4Mi3v8oVSAxx2fNLvABcKtuG3NQJXK2QEFxvHgXLKcutGA",
  "key32": "3fN3HuRYPQnfzrUqUrWuX7KUKYZNU2vK3YWLHiFTpCH6x6N6WQLkMGubfa5h3jiNpic6N8JhAfw4ngc8UnLDtrKY",
  "key33": "3kEWSRLEKZtnyAtwha1FhBsbsG8nKLjUvyCddzaF6jwi1exkcJvMW8i4k7LPW1EaMJe9w4yH9SnhFch1yKeqGvRo",
  "key34": "2phAmQwChfLw8zVXPJ9HVoNgTpztd25KmteBqbUFoQVTx36ALizuShAfUao1m9ahEF8uDHzZKCsxEhFof6MjkYmK",
  "key35": "3LJho5FRxW9gLK87EX51EN9NqRgEq65Kzq6B9nhtkz6AR9g6Mfj67NDmU9pn6jtZt5AECSvUZ6mmiNyFGKjetARt",
  "key36": "3mkMGczBdXRYobuXvu6rFtgGDVtjUZbA76aEtQUkW8YcvpUyJStbWZ63CkSPa4qfoQ7brfB9Db9shYnzEamwZHWb",
  "key37": "5sBEZZKmdQhRHpTzA58yRbDX4CNkUTguXhD8NudyKzrQKk177HKtDxA4dNTf3WewSDT7zkmZbhfEfNkZndjmH52",
  "key38": "4rRgeCW9goH25kzTfPkRvmGMDxFUXw44qKpAZTcY4L9id2BiX6sndrSfrttqFQqLFF4fEmFhtTNqtvuYP4mURiY3"
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

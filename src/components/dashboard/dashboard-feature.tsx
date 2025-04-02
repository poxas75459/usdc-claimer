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
    "2PWTG5HrT2YP7UebbdLW36xk1pKyvs3bgtfoXL1aUW12eYnDcey1MaSv656b1ryCptCPsbNADmcBtVi6DpnAJZhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LpDcbbJ11kNMyqvfyPMnfSg56rHA6kCVHeGmff4d3pnnSYbaxMPorzXC9J44iqGcsaxcUJe43aoPtSVtcQuWLJw",
  "key1": "GVK5V2PR6FrtEvzGkoXUW9ffcP2NNtSG96tqPQ26uei38iGmhshL4s2ifBFNeSqwzedr42Rdz73ACsk27GEgiCk",
  "key2": "225RWTtLBPA3dDRK1EVyzNF3fePnjPtpi3qw6xdALzgpgEqCs42KDuCi8STjYRrP2CnfKWmxqgU4wNpahrTV6xAc",
  "key3": "aS8aetozNS2FfK12zJvJukWAnFV7fcXhzVMn3Fouk7KGagCmw2uWBWxkGdiZtbdLx8Fntpi1Krqt5SrZGUiArKQ",
  "key4": "3aQnYfgzsnANewhXqEozTDrH8h4Exz8JrZh9EQas5Wga7dvZHCcpRC1mzJvifZH9PkTVr56DSCk7F79bNtyyLzte",
  "key5": "5sgSK2hZKB9cFjBx2TPAPY8ixdjZdKb39M9Gg52zFo2Zonhc728F1EdXH1NYCvT97kkYRmssG9dCMMU4FnCTFtZ4",
  "key6": "4RkcHPnZbd9EgJSK4XVHo8i17SnRLKzgegJBFmEdKDxNio5hZS845LnRDG9258WXbNgG7X57XPXSe9bdZZHdzQhT",
  "key7": "5KS8RyM9rDh5nuvG4UGdABujdkDRS2CvDpGfGDqNVyfwKwxzDdupC5tbPftoucv4Vvcp77xBTVhReyVmT5o2cFnr",
  "key8": "5EykW498miEZLjLrvKpUKCLWUuhp3JHuDgAHU6TAu4NA7eNAATCYuSSra8MV843zUoWHTm4ZViB88uoQ2Sq4xfir",
  "key9": "3susyzupJpR6ZzWGRmBFDQWrWCmNAUAp9Tfmxok56kxRuQKS57wUjpK7tCRv2egkztftkCANBkxaquNC17wKNzdS",
  "key10": "3fJ9GRPQwETwE4psm4MgNX8r4Y57SgVjUnDDozEoJveGUZwLnf81KA7wgRtLRWJzW6c8jvEWAvghxz395xuXeAkx",
  "key11": "3R9zYjus22QmASH4ArwSzsfp6GGTTfn86yUp4nwFhFBteHiVME4J1dkhHhaEFH6qHFhgeBY5SWVqnQ9HhT99QZo9",
  "key12": "3aAQu2bqqiTvhHxnVGPNeC3RquE1LPhAafE1GMZwGmPD69Mh49Xvinr1cpFjnCRPvPGfunpPcCxuCaomP4eG5i8o",
  "key13": "27D9jbaH7fueVTHg7yxn5m2n71fsCXTaoq4jx88ganyQmf6tMAMpuWHp3Z2sSMjt8JekqbbF8ZjKLya8GANV6ks6",
  "key14": "2QjjiUNavQufFrvn4Nxey62hCcJ7xwtHY7ksSHteP4qx8q5hDaruQezEzNFbGorH9SA1KRXzbTG13gkxDCmDF8Jc",
  "key15": "5xrrwMchrqVUPYAq6RtgDspUQLvfhWkwpXsH52eccM7xAPwoHwJ8NofyauFKPKsXnPJZm49p3kXCkZJC9N7iTp35",
  "key16": "33ZrwMckvjoMGDhpzhMhUWckttsTdSZ2iwNvx3JJvdLjrnF8jyLSLNSuGe5b3xdsbcTMVwNXNST1FBrhU16oBDGB",
  "key17": "5tbVcjyGRwKTYPxrDsWHrb8FTno2GXSU8U9iVbWjK1iaaEFKKpfeV2qdfsKuVoBxgRF72cDd13QRJMiDiEwrWoGn",
  "key18": "ynJQgCjJ7biD5pmBda1xoqj7mPwTTDuNtpCiVZHNwNBy352Rc5uG4sVT4imVw6dxumKuFaWBcyXws3pjEiQZvEw",
  "key19": "52anjTmWvx9DfhCQxQcTg2cmsz71yg8JZMfDVaHwUhnWiotiGTE8sRckeQSPaqAedoqTA8SN26fFfoXWSJwZVLxc",
  "key20": "2knj95zihgS5rCABtQjqnd3xz1RgZy8S65rN18T6jVPc3uzSPeiTqV6EjfySWk4PUdgg7bTBDACFLKY6EerwBcRs",
  "key21": "4SngU14Vc5nj1QK1ixF1bEofTjLzwBKQYupbk2qZZsumRzK19Xxe6Gxx8zUJWXwXNJYNdDbYHEC7xWZr8ZT3BoMK",
  "key22": "5aoTQTMp7gqddwFd9cx6PRBWaW4Ue7FV8fwrDdwqqQYCNjmFG11GM6k17gBsLFtbWAzf6d9UuMTaK3q2QkZqj2Ai",
  "key23": "SQwr2dAbEXcD3skjyLc4CUtQpWMY6mYKurrMLxxYGgC18tGoaJzHzTdjd9KZbgrXfqJ3iJjgdiZrnxQSyvhDfyi",
  "key24": "64A3Y2rveXFi4YzyGd1sMkixV1koR4eJZSLSFqtJt6s82YSsEBVxor1bn9JS4WS4o7w2GpEiB7mMAEWNTWdgije6",
  "key25": "5SCw8N1gmkmZfWvUERTJXwe9P1ACZSVVz2PsodmndeUv8XVrbkswX4W19LudhCMrwrdA3RPHtf57hVfnieAvxxZ",
  "key26": "DayFuieBDbgKJGVeWqQKQZxHm67uiJXSSc1ivX7Hnup4WRL6xymvCefdknx56KzzNe77YFYsQ3WqC2KwzHD4YPa",
  "key27": "5Fi9y4ry5RBWiVQ8rNtm8KhTRayTTd4qxoHgCQKcLXa9k7exmQgvsmBm3K51Urkcv5u1EFKGWMfsAdPWGU5Mmtbt",
  "key28": "bhzERLMR7Ggg94EosqaTPyYS93uuysTNUsmCfZdDEkx2QwLDpjYEPrzbdrjvGswxiXFLkV1RGs9gGxuBVEESfw7",
  "key29": "3Zcjib58aUShVbi89mPz4vgWWAmEsHGaZt6mupZD8kJpBVu9EqP9sEjFYnWpZhA4yQ49endH58CJNZqkPgGh5ioi",
  "key30": "2PbD8wsQZyxDAuprHE7RZ4DE1St1p9NJBNmV8pgNtGhWqgcxeGdv9W4LTp1eCi5JrciRrPijcLs2SMv1bmmQgB7C",
  "key31": "2GW43jBNBMPyfyFfG2oh4KfokNwQ5GkKTiYE8fkY4um7GFuBMCp5MKkLmVXjvrx1mhtkqXe5ZDvPL7oBdFZMms7f",
  "key32": "2ne8UAd22LqGn6AWEyZ2GLDXnJP5iY7EYHGiveU3gDeKsjGqzrmkJgHUxXR6TWQ7yZdqxji2Ev5iBsMwdPsrEa6o",
  "key33": "kYxSV22cBQmBd1ijMNrypYhjTefjXzWFiaxSp6T7LRb5cCasYYEVj5omcDJtt8UQYUXKmwG9QLKRHiD1R4tJ3Hb",
  "key34": "z88v8mQAFebq8QUYbhjTwepuAe9ugKTvvAAUNhX1Mboqxw4YMvMJ7ZigcCeEn7p1ojY92j947Azdx5BEnEqKkZD",
  "key35": "4KVzpMbgNVSvfhfDZsWvWYH96Y15KhCbUSLzRh1zLi9wbdtwN9ZF7JmmT5bJdhx6UpKvmftmGPqRgnzDpAZVCajL"
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

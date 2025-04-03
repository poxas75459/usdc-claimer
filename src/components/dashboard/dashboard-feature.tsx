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
    "43ajxRXZujEHVx93GRqiW7xhVPWJGgJLchM1t47PJ7fmjpnMi5SYXtdZWmo7Xu5CSxqPLo7PXVMCC2TDLimhC3CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y4k92JGXMrZncWA5ngHEssebXttqiiUJBv186ExEZzrXedyuLaMnhypp6JEL4p5jb7pnYLXUYoazjKx14xMPcPB",
  "key1": "iPwb4jrBqRRScz7zF71YjAwu34pC8hVkXUTqw8ZpRKnCnkousmKjkLehBVe3sxv5Fdtn1MbKYcZd1nT4LuVqwhQ",
  "key2": "416ac38NhLADJNYjv3xiSFcLWH84X7j8NR3ZsDt39fDfCJvAjrnp7fQTdsBESEwQ67nb9Wp888H4uLj6NhgBvSbi",
  "key3": "2WgFTBAweKLtUkPzu9eBCt3wkoCkTeSpRYUu6RBXfzyHiLjVT77JU2butca7cn3FGWoC3N5nyw3YS7HAVckzZ3xr",
  "key4": "ZC6xYKZkpmL4i1r7GKsAcC1kpMq1jDy7gqB3DX5wonT33rkZ1N9sFY9HKxw1AhGvnWGwpv4fmUa6zvEma6UHSFm",
  "key5": "3BUS4VcXeCokdrtaHNnbykECipiyaLkmCni1KJ6Bfgx5HSGK1kKoKNjR64wCofJHh8oLL8GWW4Nzp2Hf6p83ktvo",
  "key6": "67aPV3D8p7XaKpuVDSyETp5J7XdDGVx4cX7qv8zn8KZJ2ZCdKhQ8NqFFKauEApWGFqT1QVYWYqN3kq1v6zrxriAG",
  "key7": "2YeFjA5Z6VNvhm2fDgacoNgi2EQzc8dDhAL7r2KR9KtUDmUKrwADFufA2k33enzxBSDcnJd1kh1NAvEvYPwUVrmN",
  "key8": "2p3t6QCS2nHFm6LZnQZPe2jJSGrajZK97y54rKBZki8SUdnhaJrczyf155uFredpPB2aecSmJNTsEDiYLPYdrGVM",
  "key9": "sshzx57DyTroM5aGCGeS4Yuj7woR5dwHA7nr4SAKNTXfKh727is1Ln5GmhiWh9qEMVpyAP4jCzcMKrbiNhUmHyv",
  "key10": "52iEjtPHwwFv2T9kr8CLjPwGPhsyDdaBgP8EW1BgyfUocH222L1u8UgVeYURfS4qWf75dfAeJKpkpXNHks8HhH3P",
  "key11": "2S432n1ML7nsjERJsZqXNt21hgeyUH3PnM2njUpWfAYc3RA1ACVu7fwbhUVWdbVWXRf8owXEqDLLnf2aePaUGthQ",
  "key12": "5vSVNCitBhf8xkXD4KZrKrFTRNBzxB7bWSMJGbL4qY7fctLPSDPhbNRwBZieCNsJKpRgH21fHaNmxxEEjjZwmMjN",
  "key13": "5LiBDQRZMoRy3wxDDFTMT1psgc36m9z9VWE1HGtd9AaKYD4ybm2gkV7iU9gEUjJSYSbVtgZvtKEjfZUWV4fRUFob",
  "key14": "5yrtT1Utev6MfrcLYT99s37ZZrNmDFve9Hc1TKHVjiFUBwyqoH26Yz6dbYZko89NQLR2bDu8qh5E469MZ7nvkn7X",
  "key15": "jsJYfPZLYv3nGW8YcKWC4pEaLdHdr6dbrgPYuK8gHUpZxghd4KeMxD79MJ21HCSiKwetW9V699GKLnaJQYPHHGA",
  "key16": "5f1ARNkSLkWtBCKuKykvEsnQPh8uSbqDyrkEwJfbHswJmTiULgH4RRtWmpRmJ3Y6t8GavRcTv4egeCY5VRrdYbD",
  "key17": "ntc2CVoD5co3L5buNSuSgJzqk7QYdvAg75jLjap2ZhFbcKbMHWNBB1LTR5BNvfJ6wWDWm1xzEmkUCdso4KnLKpg",
  "key18": "5bfa4xd7HEqorau3QRh6ncCU2y7S8z187ePbAR72gCfjnVPd5beLqewvk3tt5AXPnQv833GbviqPfjbcKo3dVF1b",
  "key19": "4BLKa5DgNFuJVESLUR2RSwaoYorhLEKguiN7sDBEGWjxxQFqwZiUaKnWi3rZafpPsCFkb35T4coEXVEnuAV9uqWz",
  "key20": "3CQ2JgAXjYxqPk6C4Zr9NHGgCPqFEUqXxQDDc1i3XK8jRrZwinr5UVeCWmNWpcB2GS2WVGoe8JMScmTKG1w3CHsK",
  "key21": "4v6JuayKDyYi8SGJM9QjBNuWQW2YkJaZu2a4kaAAEZJdpJFdFMZ1YcGdYBK8PGdjyuaWXJXxRZwDahXMyUa4k7DV",
  "key22": "67C7kbggxbo9Q4YoCsbG8ZTfN5xVW7yoStzo1fSLHBPb31SM3Kg5JuTcCzvbBefdGsFzXWxwRwp6fHUDmmKwsLDQ",
  "key23": "4Qw1sJPKy225p33EzrFYFuvpQZc86NMvk5PEBHYDowq4gAzSGcG3dBsGyWogNrVDK4wfVaqBiCHJvBFgP6mRhgj1",
  "key24": "2pyBeeWGKmmG2fEQzJHFbYnER6DNnTgnNupNQ2fGoMScZSQEdj5BgBvJwJqtN89BzBS8vdZVAqHPdqkc9fzaFYBw",
  "key25": "4e5ktiaFbGJPKvrsr75Hs6VMpnJYBPvLSbnWjb5YyekNTpUYkkcPktp1TZiJzS5FXyrmRhEiMCNY3cr3AnrWYeXE",
  "key26": "4K7hbr5i6UxydfkqARrSk4Rau4KZoQiRZBAsCJdenCBDriyUbUEDamycDSKGoygk1p9wchfkAN1JXmnSSXUtakQW",
  "key27": "5PaJvSjmiC3CwouUp4PGFFukyqDy8UWcmWie5asJRtCBCYv7pfwE61XGrF5u7PDjTLjvZmy4APE8ut3GZrDfaG9f",
  "key28": "2M7rN7MsZc28NLtH84jEZuqeasJXzB8DRkQxxSt9AZztAAPPskkbbCGWqA5LDhaZtpdnCFdR3drGZR1o8WA2qN7v",
  "key29": "4oF14wrdjhpu9Wi3tvQeP1ZzQRpSURCtXt3mmu7Kcc6ixLhKdiqXG4m2wVMpjcYurJVbGdBJSooUUauRG2PqDXSi",
  "key30": "57LzyuK5PV4PHDPzdVhAqdKW9D7f9iN1V6phcqWgG1ZGpvcD1Tg6FXsB9CYaamMACtic1YAD3yPzUcmDW1WbKpkd",
  "key31": "3jdbuWnfHJrBN9BjsAc3rjxHqGpR3jbUwMoVPffyYG2VhtHJXBNadHdSfQFwPAhS5WKFE4Cr3GLPSayYyuuCv8mW",
  "key32": "RbhDXniMep2AD4yqdv9jCjTBpirLGDqrkHTu4ezu89iz438HLPVUPR8dkbZR8JwsDF7MrSDta988b7NexAAnugy",
  "key33": "5HkvtrPqL6aLmJ49cfrd3y2BboBZb8oCqQBXRR6jsSjNw15mNSPULUYJkHgeQw7hHURf9ZWLPkp83bJ3vRmuj9eM",
  "key34": "ypGXMqm6B7CDc1GrXfUH6F4uejCTV1nquKozch7TuEbbBH3k3maaT5Jcb7c1AxuiWiduKpg9EFGkFkfNfwCcJvQ"
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

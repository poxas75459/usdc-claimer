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
    "2Ld4Uoav98dQsQ76CHdb2rnkmhqRNVNNnRbUuHaAEwHyW4gEXTZHvLzBUuMUYtfVUVhkkbT6kPWR3NRMjBkrL6JR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "557oGJ2dvV4zbohzE1Mq6TXrDrtv9cm8Fjfkx8Y3TMnvxemFGaNjwXyUPSea3huanDY9EPFeN23Vg8BGCsZGToRe",
  "key1": "4CrT1tMCwVsdTZ1qBkAj715tEs97ueFMEp5hxyGEsrK3BMCCeMEnqPje9XVcBAewG1v27N61YzZC8kGjPE3z11NS",
  "key2": "kBK4UJZ7K4LfHFeRfbyqJcJejuF2ncFpiBwo66HGxtsaVU2mktqkUDNQsrZZ8WNzzE6p9csAERh8Nr467R7eP2s",
  "key3": "29BKbnyPMjDLr2xawKQJ5B7xQkTLr5zrhye4ghn5ZEEL3LzfvoxNMTNAgk3MTZnutk1HYmkoijkEi2hg1E8u6WwS",
  "key4": "Z4rp8ryGd95Fb1FzFGHi6ck8wmeoQPdh6nb3pLrVQA8VgcpGU1ZhWZvJujwTgsJXc75AAzd1QZbgdwnXb4XBCHJ",
  "key5": "2d4HbjpK463aF26yi7w81DBbLUFzv2k9sZxbxUVqgBMRmMoSLAtfvGr2TTZvUNtekuwmt8456BszGpY2ezQTiXYA",
  "key6": "5na89E2uvozY7usc12pjWJa445wCYQszrwyVrgLLVcVxemSb5ygBEuToC5SuVszcssuy33yUmUNysi1KCC37WQJa",
  "key7": "2raERGYj65JM1LAZ3B3RRmwguBfyNhR1aGiRx6Y2StjAwJMutY3S8YkTxwnNcBBksoc14iDGFovbW4AbezSLqYmv",
  "key8": "58XzRPbwtBNa1JgEjKg5KbcskGDR1rsKMGkeQo2koJu8WRMJSxQqwCEyugC8No1hTwFovrgMgA9kc3hXfqdQvENz",
  "key9": "3ARTs1Lc98L11tM1TewFUsZWJpyYBtj9BseTpS1V1Pbn7zQ97Yt3SHUjDwWpAkY2hxuKUCEd7d5QYsQZ7R2vUpqM",
  "key10": "4Yg4KpqZF3NVhtoEbmBHddRriDtG1cePpDGv3t9YC4odZzH5G6qKHUVaun5sTfK3yRvxGrv6UkQ4M7XNaXGJoyVk",
  "key11": "rLsfQBiXCNuso6bvuLSciajReHrro83QsEkZLpSz1dhjmbVJdKacyqzXhAnR1dHDYCpWNdyTuaAyoMRZHVnMebe",
  "key12": "2HQmgbGt2an8uriV9kKGapivG5vyVtm6hCD9uFfZcGgN7arn7VA5zQkQbLD7CQJoakaT7Zvbu9hShXQsfEuAEybf",
  "key13": "55LEJRVZF1PH3HBYyt16bTmJHknqD8ycvX7YcFW9DLneDychmyz5mkfkVgCmSJEQGJcHYRVgwNZaXa5hBTZRVmxU",
  "key14": "4nsZoJuLtXBAwcqLYw8TwMcRSKdmqrHv3Lx5oZBJUYuFqUDh3QgxPwYz6ZJczCjSUjoBLBsX6YBzmb1BrF6pqzrY",
  "key15": "3SN6WGaKsgbPpwBr5BgTvVvGy66duoVmRrLzbQqt9HXEhyxGEFKTNn5iqmDcaChuWYifVgE4HFLZr9yjKwWNHnfE",
  "key16": "59RWrkVPrNvYjgz5dUZgKYoS3RzXTGDCGT4peD5TeLoj7by7hRd7T4BfgawXbntWRBwGB3ReMyHPrCt7sMiJ7oAh",
  "key17": "2d9TZnWJadjQFtJCezndqJNojMrVJHRyGSi4azP612vn1FhpvJJvXNUpfRAgoneQqQHCgreAz5JAyZzQo5uNJ4v9",
  "key18": "3Bf7u8fMCNa1AwRF1KTYDw9xqaCqzkDA137FCyEvaPhi3YqkvqUC6LgTWYTwioR2Bhiuc5kV6oyKLsppQpjigjjq",
  "key19": "26C4MSeBMCuVnhDjU1F23fNS4ue1qSSrdE26mGZTvzk5wEq7Uoi7eiNYkhgZEXoUWaHkV3BMi81Ajzih7JYSSft5",
  "key20": "64D7VAAkUzHNShpMBdyv2RrmDBsWFTxzz9zgbDZzFXyusNoR85bcy2sG4ZXN4K4d1UXnGYt5LASAAxLRFASd6JKh",
  "key21": "2CCoPr9L4zEGWbejPh7SppUfJBHLiCJatLimwuZzqtZ1YbS4Mdge6XEfDcUo7x2cBas1hhu9m8UoSoDaos9CwFR2",
  "key22": "3VpXQC8uuchDy5XDMhe2SxXhKeJoPHhTb9KcJS2ywZjC8Z5cd9YXDBx8USUpvf8Bn8vs5tdaSdVvPxUUSLym4Tpg",
  "key23": "5a2QKwFGjQ9TZANBHj3VNjKGckNwGd1Y81ajz8r9Gu4mDA5kbwzmZ9MVC7odtJakL8Zf2F6hXgE3NAGAh8awZPxk",
  "key24": "5TXwnUtiAh8v5sSHMZJ2HdNY9yjoP7U7CQYboB5r4NK1mRV799yC8CUQMvxioaGoZhTdH23GYyV9wNCNaMfNF6fS",
  "key25": "4N5RPfaBhLCP9ruAJHobJGUebgXfDVTpi2EXKMz9UsXaaCkJEWfxyTThQiKAdRv7vbFjVmQruU9RGQ33CU3eogKX",
  "key26": "KaqkhteEgNHrWPciS1rwW52tTwAG6oATWsxXki4JT8RSmcCr4py9Lo442cQyijL2dEzLdP9Mn48rGXDrG5H51Fe",
  "key27": "3pDNrGFGpuQgYTnADabQgJ5cut2Qcwtej1tGqCJ2YUS8j6XvhunpdZfy14MLHiH65x8X3XkqmjAV8L6NwYm4TuHx",
  "key28": "3A7osPKNWuqv8b4dZhcv2vLVvoaJ4aBsjgy4REnzVCSyrqLMv9Hb2NJTLxqNpsjVJSTETzUv5nRagg2STVz1BHdW",
  "key29": "5TZZ5GuydzJuqQ78gevUDNVfyUbXP9TvSJqRFtGNcpX5rHuGA6eZkutaicmTgELKS2jtcwYQgiwr8uhyQP4izJP1",
  "key30": "4R2BUFAoDuNJF867gtnqXcfHZwnYRpeMeQ2pMBgZ5m8fR8wnuf7DNpY54xo8NHW9zFVCp3BiD61mxfgo6KNrhVsV",
  "key31": "4MkKCbKA9W7fTQdZS5okbTQmJhQW2yCy12c8A2BXMEoWuCX48zEp5oisqVq2QNNo1YoM7DkQfirCG5uUwZMPVHYn",
  "key32": "5G7SYMfYeR3GhmMtXg6s8Fo2pMB3Li2NgEUCuV1Mr82CTnFZxWNQXZb1zvQ8UZTGbGqUEVy6pVKNqCujWXaYMBym",
  "key33": "2JuDGDH4b5wHqzSV6o9U8JTE3W64hvmkmS6yHMfT1C9v9g9LvbxgdC56LFKer1aAL8uaB8oWX11Tk42PB2E3S57K",
  "key34": "4qadv8ghbqAMAv2e8fo5m4vf1ZUKcDywLX7jtMk3CoVohJ4EG6LNB6zT2LDGBSA2M3VdsoYduMbB7xPNWsE7wFkZ",
  "key35": "42uMkyyA7smnRuQPZFjaunkZeBHCsoK9YYxMzyJG5hXTyz5RQLDYRUdEkA7DNTFyZpKJkvmUNF5eHfmtLP2VzmxE",
  "key36": "4CUxLC9ZR2ymxUEtbcgevZMrfEcWgucWckJUX5GeGyTuDZmbfNvN5W75xjWywE4ZKGqFzXXz2cJGnWaBaBcXnDxA",
  "key37": "1X9ZTEnQuMxCTREgjjBMmAmfhgmjNmZVk77oLiz3MGJHVi6GuM9FQaQLMBHianjnvsUb51YEKorfWXAymU18AC3",
  "key38": "3GTP79dtm3jn28VZexjaYqyNhgocEh9sPxhUPyRSfT6s9TZbiPU6p8xQtnjRRm9LxWMpJaNJjKWEkj4cvWSAyxia",
  "key39": "5tKQvKzbW3Sp31oXqq31p8YRoeG683mQYf6Msaw4pfttysX6sdsz6QZKREjsmoEYshc7M8atkAQWUYoN39zdXTpK",
  "key40": "5EfBF4HeCTvVpDoMsv5sFoPT3uu3aHNcQZJhrnJJXfKmwiicqgd3icdaK3jxWfEsdU3JsEsTnVpZzNmZt1SJ5FjY",
  "key41": "2moMa3QUhs4Xtr1c38uRQZXYNiHvezMhiGcGjxpwdWU86ThMgtYLeWQ6A1xEqJKFfPq1h8THDp3zqzCQvpGTvupG",
  "key42": "344e5yWPSPvgNQeGZZFEw4N8hvS9Q8Vc9YBs5B5bkhDy6Umu629orLEzAJqhgG6Z62J9Bg8eGmsAw2VUMskWmvUf",
  "key43": "37GxQTyBbu6NaiewGmpMsqcpogKqSnAxtQGJKNXUfoMw2scHcKW58omjRqPaXUaCScLxMyb9D12X7DRU1PnMVUJs",
  "key44": "5qWdwZ6AyxzhNUTA8d3mEr4hHfge2oVbxNVuiKWikKiy1rDks3qdkohDPe4cinNZbcdn9jwn6Cr7Mi6QBZZv9hw2",
  "key45": "5x8KvBdMs5bDYcVMGSB6f6obGkaVS8joqzz5htYdvpLAP8XfMk88gdyDivxtcNDh6nhozddUxHKAJA898TQLK5kL",
  "key46": "2SLBUQAQL7AfsQQV4JgY1xAHgpx98ncTwka15A6FTm949gcmPDcBhekA1TGhiqBBUYtrnQ2q7W8eZY5yC63RvyNH",
  "key47": "2swT8KBdkmyCLDpDwYkaaiwjcGu4sD9SBsrHFgDYq3yfL1zVR5TvfrKNjMJesmqZ7qmJQK1NGBXgvHEWTYfs9icB",
  "key48": "piaPcpWLeyX2MgspvKLKqsfp8Ac1NCEUmTRk9HAFKPyq1pv7o13UPh9n7bMHtTPgmTbMwwDV31Y7rWb1Hyfobef"
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

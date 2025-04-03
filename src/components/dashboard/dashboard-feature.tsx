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
    "2iDXJ472WXfcDuV5qS3PLQYaiTJcDcrYNy7pm7XwFYqCM7sA2jjTmcxWYY8WhvqCPa4XrKR8ANe6jcb6CESUTRL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1W16UWGVqVZEhLp8wWudd3fredXMASvHGXjzTnAYnBKuZ37aJHB8UTjArytmc1A264tc7JtcUA881Y2UAqSKTrK",
  "key1": "3mXZYSfJJcZRkqfAHzkn2pbQUKmdfE2sdgHBdscRTQdPbXRgpVYbtQL8HcENd4kBKgxkQyXadtxsJeUu1yUUC4NE",
  "key2": "5WysDyYuWjqcVLoUoqsY2ue1y84M6rYCVx6FGzUYawu9m4qtddUe78TVTCNCYnYQRqKrr6EczNGALvosdNsXrQs1",
  "key3": "3rvrp6mPgv8czogRHtHgKKdVvyagrwsb19jmT5QiJbySeM7UW4gCb6fMGBFS84gVoBoXK9iR5P1JopVHqH6uwR9g",
  "key4": "LsiYzi51MnuFfGFeTvsYEpa5Pb35ugbMV7zkdiDuHq81bVrKZ97Qw4EQtoxsLN5wznTzx6KjmMHHuUAx5CvLAZa",
  "key5": "42jzRgDEf6V1rwcjitHrrctYGkbM9wL6VQetEpAqxDXBotwRBdaqDLJfjnbDseiy8dF6aVVgahEXTxue837pQGtv",
  "key6": "4tS5mtWZzJTPbvxm8c8HeqFena93BDypn9aFcYh3cVEpzKhqTmstdGTthucdMPBo7QeZkbqZysaRXbseCqJFwxAD",
  "key7": "4yfNKVSsf29qRespX1tMEsUS2xNwA5J5P2hSpudMpWvi3eYiDRzzhbB57MwJFS3LURBVwcKaVnF83kGvp8GLzewz",
  "key8": "3YiV5JVDkhi3jm7MRN4CS3yFLoxYUViyVeosfQuso4efg1kfLLdm9Z4ETvriFoKhJPhThwKFCN1JhTAzVmAccrjR",
  "key9": "2wCbupPZD5xRw16FtisLH78d797P8RrcoB7ufuGZNDP9cry5P1XBFRSHLg4W2DBf69gTmAbBt4LqshNvSYnUFG64",
  "key10": "2J2GRDDnQCuobKPP1sb7TK9w6cQP7Som8XPsG75Sv8jShNNvfeCV4PKLGsjULtzBfPMFKb8WpTLAZjbjwuqxLiY6",
  "key11": "44XM4KHg58EA5N5PHkMdQwSMH1stNY2udgehxz75i8zVZhtKdJiAb8pKzBToJmKSfXGTL3iC1BEQeGozBfwnGfBU",
  "key12": "598aEw284Uhydzd8U2rypnqpkVQ9wCg3uoDUMdgWPYgVf3iDQoV7hkRm6mWRf6iu8LWWrisjBrCxgWWUyjhTUGzg",
  "key13": "C13zZTv7n3pPNrZcRReCQ4LLveoTq97tHnHuWQpp6eVqNzYomZWie7NMfdpnUioaRA8Mi86fwYS5YGqKu5Vz9th",
  "key14": "2A6t8S94M3cQeKuFDimD8fhDpvHWeGd7NMkR5yYfCp6RTuEvQFk9Z6BH5QFafV7DW41bCew1AJEReuPKj5pa9EfQ",
  "key15": "2wHkdV68QBddGh65tk9Kbvkw6jHbt1bzZz76mNHh8uafRGMuvyMZCX2G5RvvFR7rLTodWD7ysh2qt8nsjStPfx2k",
  "key16": "5DxToBL8yFbPVmaaMj6x6RG11BZLZ52ArpRkte1cBEPN1zihaXw2onaLQXane2MWneNSW5dibha5CRUjFXapfUkj",
  "key17": "2pe6d6XstZhH9ESt5hjsJs4Scn2vPF6C2YMHYMzuDpZUiCxYxCikYEgkBbpj5LziiqsAJGJn2Wnh6sEMSVbzLeFT",
  "key18": "4scR3mdvsXEdpwLR3q2UyrqH8ay22pT5ocYcgpjzpqpRknQQqqm2aNLXxF1McegjnKu8oWUsY45ABvyJB7y7Nwgk",
  "key19": "5jgiTKKbtHkCPT7z11oWdVfz9wGyJUFGhuuszoQqheL9MazGqBnFwAiMEtt66rLAFup3JfHK7SXKi56wAtPSpyjF",
  "key20": "3wY1VchZGGnF2ra5nfW8kHdJcNTCVhk17SNSwb15pdbyn84tkFmPiG7oKP6Z33KtXqhVe144rRFfWSmFWC9UtkRN",
  "key21": "Cdww8SHPxc5HNPrkorCUSuZCVcapfKHqpfQXxPdgfjiQW9UCVWnjbCSznVoicW9MxpZmSuxV84Laj19jQyQaRGn",
  "key22": "5yT4yDY67PxdHcyvLwD7FacuytSzoPHf9SuZtVLxYR5Z8Hm3QnUxQsrf64rQ8VmSJ1p5wAFwMURRP7zyrFWrsU72",
  "key23": "5TDXwRfAyM8b3UoQA968Drc55Pcn8E6rWbnaKwT21srt3VZj3pEnqgKi3bHZcavtmoQPc7AxYeNWmUBCD8YLTTwJ",
  "key24": "4gzsT8C2JxafN9PYN66nHNprWcZQEybcgZkoQMwS2kdwcrkA5gCDZEwhNVrZ95oF282XT2vkMaBijtwNeznZkipV",
  "key25": "3NSCmY3Xa5gg1k2xNrcLTUMfiGyDudEXpQRsMRe5uRSw2w2GAzvk3gV7MWSPqzQaXnLLgGoU3tsonRrA4XsUTftV",
  "key26": "3R42udQ1C4sq7Viv1tHXsCMu314hxHnxbnrBSV5ap4m6Tx2uVLRr8pDcNoD4yGKeJKXRbCnC6GYQ96ZsTwv9dB33",
  "key27": "2ugW8kBtoBhQWEezJA4dNwtAxkWmmqfHqEmymsrw2TnLDTmTV3w177yuhPUhtPNHaCJz6Cubw6aWjpbF7RnUL3kD",
  "key28": "XG26SyfCnBQ1vW5AW2UNfhfN7QLYnDvayspBL42gX6WwyxAs51ST1BjzwRN9oZ3DeNXiDgueF24KBJNkAnQy7Ai",
  "key29": "5b1KbWDWn7z5J1rKMW6kt4SV336APnr7sjXmF8exbkuqRPDqKQQo36RGTVPMbUKxe4Np3o2hZuDRcsyHzwhNowKX",
  "key30": "3Pow5zbQwC5bwk4JBAKeLtUbouBo6EatzNxHFAtY77TDZpcVT2rC3PLr4LR4T3QvyFc3U5EzYg4K1kp7vyHASbgj",
  "key31": "2PPzHsWZepqcquNQp4GASLC8a4BkwMJkdb46jaWqqFpEaG1vUT1SdDkMduKPHYTxj8x5PucZ8XmS4wF5P1KjHLte",
  "key32": "4AtL9et5LXwTt5XfqwNFrjSzvRucWLW9s9afJBhaewkj96MWPb6Prt5zzAfo4rDYgcd3stvPHRwGnJ4fuzQN1tkQ",
  "key33": "5Pda4MiGXXhmsw5SV54tRFj7fevpYSsk8gyimZiUgQVMWjJaSzwY99s3yjgYjkNTcAXknXT9mrCGHeH8x555Zrgb",
  "key34": "7wgyDxG6xR26crn7fE57YaaMVzUpGgva8iJkWuTivpHDaf187Y2TJfsiyocsrJWyasGNDCJnEjVwekGW5oEip8P",
  "key35": "3y4mG5KagvVGoGMZsY3VCFjqH4baKYrq3oLsSDgaY2b6FwAzz3kc5BVWPW8EdHtHnXx5sDRrSqaDyk5bX81YUcKL",
  "key36": "2vdRy648ftpzxPLZa2XU33Dnw2DsXhjDRFRqxJkRPrGUiaPsuATeHDAtmp58hPoZ23KsRXMHAuyr92dxuWcV7qvs",
  "key37": "i8rqjp2mJ3kXAv9ZaG4Uzq31t2fR43hVeMPnB7vaYkCJqnUAZtMfVVCxo3Ybgkcz9HzZPr8JPysReTtL7JZztFW",
  "key38": "2MzbfGH3JrETjGZUcNS6WsmMwXZB9hsqKhkAmieLNxpyAiJi7V6jSHkvJW3GfDFH17rT8Pknrs9JcCzfkjEDDQGf",
  "key39": "2nm82ARKxkYNn8WMLnrutZXYPfdEJWACHxCK2Eum2FxoDj6WjoMLYBaFZyooE1GJpd39wn1aBrJWB2HramyhYBEh",
  "key40": "rxzrZndwLmig1geYNdRFEodv2z6QDjpHZ1hf6Ecobcu8TtzPBKaDHDtLcDoaCYM3oGscghembDLGr3SrrpqRATc",
  "key41": "5ag6Hui2T5nwF2qUFsWDrRdyvdn7YUFkjWJuuwuMgEUKa4MqXNykFVfpcQmwYHKHGSnBC54TJ1HE1B6kxPjEzieB",
  "key42": "3mCVQa4JURKiTS79ruwjenZ9KNAo2dJSX2xTBdN9wbudRn3CP2sEcq3vJvCj7hVvzBArqTgMzfqF4m6bJYoZECUU",
  "key43": "469np37jPniuojpJLsftJRfuuei97yz14tqvJ9ASU4Nv9Qefv4L5AQYrhrwTNoJBjSuzam4twbsSE5XkxrwEkjNs",
  "key44": "C8eqvaisM1SQvuwdakLoDwkDN9G5VJdq2AX9F5pagL4d8sSCK1EnAUKyeemoUPkyxjGiapZSAGYSKKqyDGupFKS",
  "key45": "58Z1nf1JfWgBGUFTUDKPFrnik7eAQ4xVLXCLjgeXEN6YX1BMitzUa8sEDzVUdWDjeM6pGxvjznV2fwsdnfsPiY2G",
  "key46": "5H9rzZRRauR4SuxnzkZLYgU8FozMctjQMhgMvs1XB6qr8n7mLqwUPCsFmi8NTz62uxNKPBPsaxPSg7Fe2gvZozEc",
  "key47": "3h8D1CkfbGxaSyWRuNqG9Qm5G3xQyvfEh2FJYw2aHThX1is9bVky3GxcztZy61Y6WiemgtwBM8r5oAX2qA2hqfnV",
  "key48": "S1NDFFvGgUjnxCXAc6KPN45F71n7pzRACyeFuT9tMbtsihAJSvuX82crLVaTVPed6fSuTZo4Ch92TqifXBZh7Du",
  "key49": "7zBozwmhRuSs4ZEqqdazg7LvhhovYberf1iJkUx3VcCyeYMZA32t7t9MX82d8oBigx9LcnoAC28FprAEwkXdX5o"
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

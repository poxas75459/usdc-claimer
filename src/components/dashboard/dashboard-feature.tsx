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
    "3BbgDdytBYNS2HCXxhZ9Kt8qucAg1L9Zx31GRu7fqk4gPAmNDiC2mNShkmXjQ1QMDVtAuAYs91Ucdrmy4ZaEVwLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c3T5MyyKfU2DrP2qYAy1yiHpNkXUUskBXPBPfmNHtM8iYHf1kD8kUS2dZE6rwe2Tb242Hiy7FuJ6vRSm23hxr1H",
  "key1": "3wDNkxny8mVB9jdKegtqahnkm6KmNX3586XiN91RoFeWLPuXZAqz6TGwAoRsRiVF7oeiT3PRrs5o5W2ehCDtAsUB",
  "key2": "4ngVTdNvKiFbJayzveR5HgbU1n6MVyXSaoV6kyAby2axXbzrRdHTK8d7h331L32HX7jb7p2rrATaf782tsH6HeVj",
  "key3": "3E4J4CHLxGFo9wF7sb9ERdt9uJuqKmD552dDJVqk9ociw6v4GsD6ak9h27VVnHJPfpfKE8bkXRDxr4yYfizLFytS",
  "key4": "a1MiVdp8gWfBCe9ZWanG5A6Q2HJR97Cht4kEJPsuQ6AY997Mxr6tzF67J65xDXgQJeqtLFo6SM6Wsrpkx2RvFe4",
  "key5": "2PzFyGi44bn6wuAbML3VsrWdztqAWhGyKxnYnKqeTXWVLu2eJh6ei7ENHeNQcu97NahV2fjYUa1d8v3piXML2Aby",
  "key6": "3ex33BoKyFgpa1YnwMPkb5vJtcPTHRzwJKvc7szxXmWY6Lzm6xzCbjwMz7Xb7ZduY2xYQyeRLGRfot12b5mqhJS7",
  "key7": "2yDjLrNQBBwhmkutxZCCB97dLUCZub2sT2N68fohBfuTPDvzniZbCcAoNhLdabZPLerG8dTq4YjZ4siddBL394LX",
  "key8": "5KY1fKptAKkycr3CLkV5mj9wRvzZMFmq6LzGDg3SG459ii747PbMCGsgfpQgQ2tqNdytzMQxaBq2zfdxZmZdy3qs",
  "key9": "33H74h2qzxEEjiYxkYjPK6fy7ze82ddwfhY3EWCKCEQ1C82VqBs8q2xFPQgSrgDugFy8hXSMr54scu62ybgcSb13",
  "key10": "3wXreRbEbaWxdRy1J13SwjPuvGT5RYVgwCravzu1znwHZMc6tu7R7jjcyey888gtc2PJyKgnGdWAZF91h6Esm3B4",
  "key11": "4PN65SngSaKD5G8TJHkN1gw36Soo1nuwSviizkhXg39xhyZcktcCF6zD1Frk87WGN4XiieTcXqsYi3CJokYoUG7C",
  "key12": "3gtmqzyKXiDb8bffZngiR9qxUGFmKyeQiVJ6vTsZXz88kQaJT3hrT6mR3K31AowmWgb7z9f46qANhQobj43tzJqc",
  "key13": "wPuYqnYAwSoHN2CWdFKAvCjWdrc2TQPhfBXQsbuqhN6Ydu8XvoD5NbQCiusbxTcbScAh1fokKear15s8zDGx4y8",
  "key14": "cJHkQmeLaCv35XccYcPYzVCynDgBBbabPMbcLzWVDm7Phw8ddgda3CRQLezb433pdFLX2y6R9pzEMEhyDYtoP6a",
  "key15": "5Lj3h925SPrFE9wunGWGDLk3TPXtRXHwF1Wb5xgReZNXhwd96C55j6ciYrgiYE562G7mueqJtXzqMaQhasHbRu4D",
  "key16": "4RpGuBC11TPoTeKRadqcuwbtfXDKw9fLUFPy7pMogW6uypnbi5g8WrTfqpTdrzeGfowyidjw33qbNWw8E3v8yhmq",
  "key17": "3M9t2UrQWpGfaWrpuC8DvXU7djyFyxLNoVE7L6ffFkaX3UPqpoEpeYQiMY8DWhascCg5NT7WJymRdNcryxhBxUEf",
  "key18": "35SVAheps1T11vYJK5fEm4FLSSyVmgx8C4Q4xFR3AJiSJwQmhU3TqY2nAZ6vXRFQQo13ESkQaYnA6ngC9saZt7Qh",
  "key19": "44pFoL1ZqwcEBKG8Bh4mqYUFGXiWvdacY8MngBrkMV2Kv5YkD67JgoKyDGbu8asqFMdf17TGxPUcMbUfjomnGtai",
  "key20": "42WSVshZHCHoTWjy1jMs16K1Httb86ChtTtY17ZKQwkjuMgiB8rikaCYmxFqUdcJWvJxYWCxRgYHDF3bXdZ2FAMW",
  "key21": "5c5Mqke5nAfDCn7tRKfgpFr9YqoP3AX1x2c2sMdsR54PHQ6qUgNvrJwUYvmvwL7jsKrH1ZGSjYp37PnGsjasQV55",
  "key22": "3X2x1X5GvxRCivkoU7ZWasjYL323N3iBvEoifrWEFqfQyysxdEyc2i4EGG6ioDprHBTyCpMo1MEXf3CC548dEuwj",
  "key23": "4K7mjy6HmNYWZCxwrF8WA93bBhHSj2LUywWmgEx5sG2FMEjKZhpMnUzFq4LEdN2zq592ZtRLkcDovX93Y7NonHZ",
  "key24": "3efEzMUiVbujG3eZRx7Etv5j4FAmwgRRuLZTx6cfXNCy7kfiPuLzrtrJtNpnWZ7UTbp7ZKAfD78kHoXysJzBvXVW",
  "key25": "gdT2qzjSuU3PCGJ8KVzDotiLyDwW3nruNssCEiyiDQCQPS5oWHckq1EQEv8fs9ijthzJ7hXjNhg9XUjZKBDLf2L",
  "key26": "5sRRdbHXisLHY87kuxD5RqRBjcgkv6CmHx3oWHZnUtZoXgsB7ASovStb3pUvpi2a2DgnmbEXTZkwBatLb5Y6Zyd3",
  "key27": "398Az2V574KeaczLBk3cDd9ua7eDpKgkKY5JVBJ4c4kYFZyLhUxTcNrkRpgsaHR54RcPEmioepxd798sTvhZpBoc",
  "key28": "3tUj5wvQjkWodjfvzejk9MYy2JPvvXbB2R3SBy6yoZAneofM4zdedaUgEUtNmkZPaNYLL4dbNJwMHgGQMpqJi3RT",
  "key29": "5NcYPtVmbJv5D5rZdwKWnGyMMnejoLehMNLcyYUKg462d8FLmLnKi4ZgzwCAAbh9yUBcvnEneJARzkpe64JxLYq3",
  "key30": "3cbko4iBJMThe6mfcgmfadK2247UB2N5krtPEVo1iA71roJuzkJe8nTT2kd25Lo1V9Mp5NmWxXNGXSYRPd65XfVC",
  "key31": "4YSc89Xdr2LVu15VEXVqVdwf9abFE5jaFn8sARA69LiEX68ENeCuNBGyr7bTtMrteHfQ7pEByryv1zmDaW6Ep2gw",
  "key32": "4tiATg6eeeNcjFnDhrJ9ne3ZgGAfHRJxb1vyrJrSgMfjBHoRDknE5faRXMQJUgSTgLFa9YiZgT5DvGkCUqFzf6pM",
  "key33": "36deUooGs4iSVAi4vfANtAzTqgBWUZZrWTeEPJdVNDim1KMRujufamL57dvfLA9TVJMJXCTaGTzcEWXkPFT8Uqzz",
  "key34": "Lq1otkML9dCHyhsBLykH68GjKbvUvH1Ag1T2hde2tvrs8nQp3jDrLVwCrnfsho7jf8UAqRQkog8VQRvggJKpqRb",
  "key35": "dUn1kXiAD9vMTK6w6JETGZvZopaoo72MkkC1xC8CVQEd7Q6s2vWF17CgtxjfiYRhBfNsxju58K7fDVHCGuPM4Cx",
  "key36": "3fJv7FyPR2CHDzUVdpYPYdYzHW6sPWhZ1oo2aQWN4QBHY1FaEAc9Dfx4s2pp1rYY3yVxK84aSWAZJMA1dNsVXhtH",
  "key37": "4JZmcoU3okyw2Quip7hgK5586YasthKuwhfe89LbxsgqGmTBbnMNmfgiEnsKmQWwc8YXEebPW9gWBLm3SMbm7AWb",
  "key38": "2XvhSmd5pmBVqyNFvBLLm8kECygFnCDXFNAXnoMnPxXK9n9DANQL4y8miEA79YD3XyNGD3fsgZJB6mNEb6Tdbcc5"
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

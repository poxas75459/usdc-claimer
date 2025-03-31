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
    "5REYBysgagfgLgN3qQ5oPFK6GsCqV1wLSaKhrPoGUR5vh11Doj1rGLTEnJWY4svysyongXho3C5vQBP4tWrTpa5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58kBSjwAf2fAH5v3kg8rn15QPpL36gco9yZiWUxf9KCN8gNxzyz5MkNTh8BiPMp6NSbxmci9CjgkANCncjbg7AZC",
  "key1": "54Ed5DBsyeFKNeVAXwHxHr2jSj18ypGrwiFrPQSrrAbGUt6Hj5rL6a3Dq1DEaTJ3yRGjZBcUrHW1Ebqo9Mqzfcmg",
  "key2": "4KNqX65QV4uaB4JSBtcESoHSdDYybFaB9XHWUoXK8tnjqCguuZYWZpwKQ3M3BeeAyFQrYa77kiYugnUBxQgYFxts",
  "key3": "5aYhMLq9MN6gu5RpXzZEwEmfDDbYQihWtukyTr2W9xsDKGk7TW2mwo2K6TaDtkWuwdn8kvE7wQV4FbQnhdEVSvhA",
  "key4": "296yBPxs9mV9Zg3zkFas9iPNy56tNBgAEYszkDUQdZQrLaAzjP1zzd1b3g4DMgjJUQUXQRzi5RZ4ws1wvLvr1Eft",
  "key5": "4QXdRkEJErivCGBpSd74ST2soewdibvFY7MRw6c5dCXa4hupqMwWZzHT2FUVk367zSGeNmageRGyF9Hha1387kD1",
  "key6": "3RTAu9fN98ipy9ijiwF2h6hEdRxyLjgKCtpHhhJnVwYtrei9aZisYZuwNgEX4wYxuuHsPSwmoB7dmFMaeJX3Q5oK",
  "key7": "yMTEjLtFZFqooPkSUXAySkTBwKv7fgM3GGoi5vwJatR9eREtVLkh4yRc12DcbsdPexdJTWiCpMEvJxifyVLkv7W",
  "key8": "4v64Ez46HJ6wiKbhTYvHsM6qdvxczm9VKPgDsv8jvtwxQXyzbWwRFd5srP58xrnxBPEKgYNZq1DreLA9MoCu9j9S",
  "key9": "6461DcMRTpvnC4nszGf4H8sWgSf2EDNEKLW9qMhZPA2bsyFxQQsGbQPSorvZkYwibT7nPPNZ8ZNfF9eSeQ1UVoYU",
  "key10": "4ArcdggQ2dScgKCLm1FnfArWowzFtWnWeMezZDMQ1NLtfZQKLLTW9rcg6k1hdzwrwuxbKdYDAdZHqtBbVdS48i4Q",
  "key11": "36tvzFyGak5ejPcQutDzHRuZvaV9bwUBxwGPrfezmN3qi4gJMYzSwxNhpJj4qeqB8rQJHUnaqdaDLb5Cy6xoNrQZ",
  "key12": "H39eBkCHH4Fzhqg3KBT3kcNhMhTEFYYEwjSCph3itcKGGqbbqC7XsufcEL5W9eMfL6ib1u3L9frEvcTFgkiSaec",
  "key13": "2RirBhBTGGBQo5kztbyroBwPvxbPcWGieBUybYaUfcrrRhBkEfBALf6eo6pQqknut49LZMrLpVwKGnk5VdD1N3LW",
  "key14": "3q5RTQnkwiNJkzoyVHXK5Ao2yXFrVFxVfkqobEMfikKicEXX9miF4bJdQHAwqciszDnhQ4JYmvfm9KMgZozbKrFm",
  "key15": "C2KQiw2yqYPsv5T8xyuD5o5gM6Faiz581DBLSDsNFBqtf6U1mtHtuGVZmasJGvYTy659RuyPrw9AoKThrPSetTS",
  "key16": "2Hd4m7XrmFCrYC1BC65NepsR4xtbU8AqMxNx2yPPUHD5AYvepELiYGAFnYsXSTopLvAjQLV5kjvxr4VmYpwoJMmS",
  "key17": "5MQ7qiEEkHD8zt3dcjoHv4yJhsTdtEWYAxwLVasHsZJGuGH5uTPy9nYcos4AhZoE5XqSwS7bSo4k623nLv6J64j8",
  "key18": "5UXjRBYsTCkKCPbeitvbQmRLBypHYJstMb8Cmc8172MMHdwNdGp633JJR1Vn6e78Y5fghtsS9rEfUMmcCCVF6KGG",
  "key19": "5SRfje4Fp7mWBWRDLCgJgfpxf8Mkd94Q6wKJDNgf4GSzwEE1XBMv4q2U1XG2Fip3pCt5px7RysDq1JNQMES92g4e",
  "key20": "3oiRDY94r6RpzuszpsPCQk8QZ5vadq6VwxVx6htxGZkkMqkmeeQSChZDqmDCd9h1C18WxkMN9ueKzYvfWk4bunSk",
  "key21": "2N2qAcWC2HEJtgo5H2Bsm7byV1L1hcXF7oZUpmBKhbkpepemevNTa8vjnezB5vQPHSsComFY7o8rjLpQFfuZXjpW",
  "key22": "2xMoNzfWAE8wfq8PkHtHpENY89r6zKFjuWa5jge7gY6PFD9LzECCX2Gk9BdYhbAZ8XJ4khPS7hhdwTDPePMyAdG",
  "key23": "5gtvCCxzmfcwA7dCcq8isfbbYYvkDNELFQAHqpxfZiiJcN1pdJKikWU91rjcY7kUTXtXfqQKRb6TUXJ4NAr1ucBM",
  "key24": "35rtBmGxksiLavacgyiuN5CYPxpztSXhY3g45yda5wdRADgAjhjuaii6Y44iHsAoDWsyTQxo2mT22rzY1LVYz4c7",
  "key25": "3z9grvYgkqBWwuyQRY3H99VfypRY6CKjQBPVDuztSzLzcmsKuLyALwmsNroXrqVLcBDu2BoKMG8y2Ee7JbGovd9J",
  "key26": "JQ19paaXT99aEWgwE6ZETGwcFKwFVG9r5anDtwwbJpBdqsNSNeq7i2bKrsFvz58iHKouMQHjX457xKfGc3n7fz5",
  "key27": "5VQQGuhCLpzf7YtgWuKpagCxHDpWB629pmVMfRF66keyw5fLV8Rs4BeQmMVdhKukjn6sWN2Tv2xsj1fpm1L9f4mS",
  "key28": "4SyonYDWzpcWstoE539TwjstG2pDGPjcMuquyv19Kp4NhMKKbhmbbjyCqxXhnGDEBPstVwtuZjwR5gSvyf8PyhGW",
  "key29": "2ka8it7PJ398CZdJX2YA6cT58nCcDFQbnJ2wSyU3XMXnLh4M6whuQznd3Ly382qz4wdYVxpkqUW7jhtJrAFegytt",
  "key30": "5Hr6mM71nfinS2HkYx4Htwpzohkz7v18CDK9ZwkoxjFbNumoCa5qED9zZBDdDatLNbsmcRtz2EWFb3CtVzqD8wVF",
  "key31": "F2jELxp1iXvtTec8HC3TNLXv8BL3uzt11m4tNybADZRUepHENskuWcSCgpitV4eJvvuNeSVUj1sSr2TjgNDxiCj",
  "key32": "3gcjZcaRVxvLQLt9V4f32hr3YkTVyivvwKsiNGNEE8MkQ2kx4UnhHWRiXagvULwoxz3Uj8UV6ZUarFCCjFNcuUVL",
  "key33": "5g98HFtrRZGptKqdkPR7ismWaBdWhLN7Qu7NHHUJ3MJn713w7Q8jLRGNeHEihRxTqLuHkCVWdKataWsbejHkX7pz",
  "key34": "5QwJ36jeJiRdELyRDMiZrE4rz6xf2MLhdG1ntsb67vA5VQ3A1Gz4VYQku5dap5ojLtrD4EMLLqoo5zcyNK3fmbb7",
  "key35": "2oKBjnjrKHUgTq7hXy4TdsRaDSa8qwxa1FyYptxEnkgmSn5ZeGiAmn4Fy4mLb7U9uUKnUQsnLcBVGhZ9cZUMDcxh",
  "key36": "5CtxEXZafSpwYHqApvUFP1uPb1545BNXgSUzpJSscuwXm5NKaSzEz5CudXCCsZDF1HerYTLhG1x931gh3Vk18E82",
  "key37": "43eD7GJgN6rbxiYfzBTKEXhoprvWXPhgjTHeBXDKbvwy6XSEWbUrKBjH6DnbHregCgYy3vHdHMAoeVkXA1G7Apar",
  "key38": "4o2LcwLL6Uey6cPWetfpjdhvfvYMjrRErXpvozMt8TPLNFquRdKhueFJM3cece7uiZT9M8aDxpJ69Bw137JRPLuS",
  "key39": "4PL9m4ETFj74Qvecwx5ahQqTDQegEChEeNoPcfmXkMR9RrNEwaZ7XyzA1LWPuX3JxLZ3mWVYdMFSjTC7yyq5d5ab",
  "key40": "5uYcRhJwibaqeqFnirwPGedSyKq8T9KX6s8ARxtVWZ8ZghXZH7jqpsHznavHSasp2fPW2WNRcsL2s5RXzyZTgRjC",
  "key41": "676WqhhJSmsFVKFG5bPM5NZRkFVs4K8AC6Mc92RVfYETS16BjUCQmBg7uidoBhYjY4cDD4vdUFsfrFH3MhifjLQE",
  "key42": "4DVGpUzhbnEPac8YXdh4NVpfZvWctaPfshFrPRkzQmqFsUUcY3rotMQeZ2ja9faWi3sgW7ghmCF77yHJ1vyB5wMa",
  "key43": "3GWmCZfviAe2E3aESnvfdP1QHQUUTPvc53pZ1caLyAMDrtZZq8wjWPQLag3YkS7EvKJW41Ed4SBTN5kfmbvzkRPY",
  "key44": "5AKjRqZUnZ55cNrq3rDgBW1FjvhPEXU339FxqjTRzLJi76RGYakCoLpJhs1YB2m4cTAFo497E33KVUBE1Jw9N96",
  "key45": "3LAHiqYQ8JCaYXFjX5uLtPGgsiXaCxprRRpsgM7XrSRw67PqNn8E1CU6NESL94rbgw26HibW5RJR13AVT9zzPdJ6",
  "key46": "DMWThCb9o4HxxY32URAs1xKegukQt5BJbUFMrpmppFfA2Dj87FXwEdiM1ddJ48FGhB46vKXi443et8pCwfk2nKr"
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

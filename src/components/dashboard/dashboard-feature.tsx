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
    "5tR6XYk11uRTHLUYAfasP3qzQBJ2GKUrgZQBb8YbTBtsxud1MXjocxLJDuJYxCF6u1e8LJ45ZLC6KSrNgpLYyUJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sbTwi6wqPQacG858cEAFNt4pidKWuozRMrwt1bgnHPEtVPo2SpZRGCEv4GoCHKuriKExNWC9tksPUgTH8XPohF2",
  "key1": "4t6X2KuFG4iQYQkcveVVjQzEngLNQSshDypWXLteLMT3CfTXStkxfz5UyCr9NBr9n3Vc4BTunduEnoC45V83Yc2u",
  "key2": "3Aoao3wubpKtyppQuPX3TWSyvXd8Vs6ouPNTUSgpuv7vNr6gte5rbkpzoz8xGE6e297ZPBwwwXEwe4Le8Z54wLhg",
  "key3": "4maufseL3tCK5XcHQZmYMppHMnVRGKnZbDyFQiqw8tFAEj2HdCpdVWs29gTzt5JZpe5vPU6tnMFcJinPLs4BbCGm",
  "key4": "4UAo7jtWH8HQpriBXCxszAiFgio9HvLsUgJgqMTDq8Ev9d9mrcC7dCTZhX6fFx34hwSimFnPe5daSwVh6Xn6F8G8",
  "key5": "2hf1bjjSHxaKjjxqq3J3M2d92uyB9tMybnkb8JKwt72PLjxJtrDojsTLxqjnw8bskKCyjJZUxk7tJzY16LqWaAuw",
  "key6": "2TGd8wB6UFJnPmcVkNcxLBpEVAgjGtkB5XC455yBWiWCgE3BGNSwK86T1QgF1gQxEnnTv6xPpUUpxyfTRymCGmYU",
  "key7": "Wyt5EzyiZfSTY3gMceKB1TX2ELDhbjhDKrpX3Fk6Uwh4sZMAoaM8B9HsqnGs8sX2wu9Ykesj7giVioYS9wCFNG8",
  "key8": "bCFzsMsZWyQdgfQCrCFSRD32oynhmLkfytpPaY5BGguGPTX8RHWC6sNUybNcPJxARjYknoibdaWC1FNBKibq53t",
  "key9": "2SV8TXaQfy859bDhY1eq76Ket3fkmN2XHAg5PmiYD2KBqafsffNQxWY2AJFdAVsZWZ1xn4QZJBxnmNrXtBwxnhuC",
  "key10": "3HdS5xsbBgMyrrX5U5ep2pEMtfXj5xcVkjwnqVRhd4kusCoDrA1HV4xShAEd6CnoWn4t3Am8QFPfphAxb1auYXcx",
  "key11": "2ft3J6JgvNWfEwQqwFsNTigpejHrjm71XVShweedSy55Mgpng7a6C6hxofP9vKmgvASZeEE9MrBQRueHdNdRo6PE",
  "key12": "81bk7Ky2keSFzAxRU476CUsj5Q3NyYECd1pMVpKrjeXUGU7diMKqR9NnzpnN42s1B91F1iq8ZzfnBSNqcwZHeF2",
  "key13": "642AwiMvvYtUJf8apXX7hazZyuN2uiSMiBepk6N2UgZeVLxGuWfvQrs5hzZGZodamrk7bkJStyzcLVnrKALwK5xh",
  "key14": "64d3qYq5hL8X5QgTYrwAMAEDYaBfU5crDvt8MWEPqtQvFjcjCttR9RWQ7eBobFd8mhW31VrrhCgywfp6EfwbGYmP",
  "key15": "rQM6Z7U3ZwnNNFVGPBbupo9NZL2ugSjj2x6ZDzkA3oNJ4rP2p74xi22fhrqnjLz8xdD4hwcEGmgJuav55HumgqQ",
  "key16": "3MbtnAynfDsh9ez461Kav4SyC3kWBHjxVinkiwKLQPnBz5Xat2VT5Ywp5iv1jaxXfkf1QwfjbtWZcuSh9fcAzU6A",
  "key17": "3Qd2b8JBcD6idmQ2m5E9txrVvzXqTSKe7rZeGQvojeJ1AqvYpy4ZZ5XmgMc8UKusz4yzrDJ8ktJNjwpLzNTbu9pT",
  "key18": "38aA8gu8kXAnMmST2MoWcwUgmZDCdjJtPYdkDNAVREY7DfPmQofP2Dt555DbAANC69EXBi14fv7KSMXvZxpf5qDY",
  "key19": "2THuT3x5oTr5AQcHDqrwUhZJNouU1ZXTvmKy2ePAJsJd8ugCZGvQ4j6fFary7awjFBiB82nN6cbMTgAjdMrdWfBF",
  "key20": "3sZsi8UwbUD9shTJVuzEHhBa9QtHjHsAgaJSM1qBaTEXTMvbHqNgeBDLrhV52Zps4RjUL2EJSMniFUenpyLBRpAu",
  "key21": "4egEkVwJ31bxUeKD59fNBNH6h9cXZhFMVCiCfX9gYrgB4c8LWyDZRJHWm7ouWPRNVKY4ijReXMrHdcTvyq11GYKA",
  "key22": "yQgRWjqd66PzeVBmehRaMHj1M21GeUJtcZTciR2hYemyvVLMi8iFDu9pUzNcq2oeWPQPEzBfYUnC2GDeWrzkRdp",
  "key23": "2bvvAvMAqUw3KjMRH1Ks816VrPGunZ4m9V5vkCb6tYeN8LXxrEbDz27F3sWHwy2EJQJjFTysrindcPGyRHv9W2Sx",
  "key24": "3vUpnrc9eAiKRLmR3DXKzswNwMVNTQ67c3XnYBchauLsT2pjR9geyFRgCVA2vnSmRiB679AtVjCyYMgGQdDUupJ1",
  "key25": "6eFcFDTYkumiixpNVcnkkdTkaqTmrGnGW2qcs1d8khJtKNewm6oR7CjHQBiXnsbDwhgGAHDfTkN5hqx6H1rTmsZ",
  "key26": "3DTfm1aykhqi6B9DbxVgDakKkL3kjecRrWWvQ7dSdmXCY9NFvAEvcNRjwPJq6ZJqJfhrpPhqrwzCZ5cJ1W5GikB7",
  "key27": "5w2x3yhSSivnVSNMJTNsbysuPj9oPiuvPjw4WzUmoWYfRLTNSzpW5LEnnCsWUMLhWteMA3CHa1EFTRYRoPJ23qsZ",
  "key28": "5gkUW7oMoXW8KEdJh7n4XrNj3sHQv7dSBYGxuFXoyL5g1zvHJA9i8zYV3RKThsFZpeAdSdc9XQcccs2F9JBD5rUW",
  "key29": "533873dUULCHY6uCADFxw7PN5AfuXbX8JYfh8TNSSkervaPUzAUKdhu9pkp5fVtZmSdZSUtDCxcTH6eKecMLsFpi",
  "key30": "3MizZW5EzfJK1Jkzz9a4iWPyXZzQDjquHMcZaf1WjwG9ZC6yLUDGHnYY279iDrkTTQ5SpAeoNgxLyuoGPypGkkGM",
  "key31": "SZvhaaZLJZCCkv4KYrTSXXW6izTfnQqY72XQLsLhj6eh4RTaxZFFoDTU6nPGqxpCJK2R2btsW1UKmAtfk9wQYcd",
  "key32": "3XMqDpC75uYiGpi6J8SCFtHCNxpsdAN86t3MKRUm1nqWpTB8FznH54UZaj22gM5H4rBa5egrgjf7QtK1N24Y2TsN",
  "key33": "8Hq59nVeu6MwvnAMRqELF8irGASLGfXyWcqzzJUSyCTnh9xeqEVTT24SfFLwD57HfBrYXGJv2dJNw9zmkCeBv7h",
  "key34": "2wSA5PKUPpSADbJLr8DyUNKapGBwfGNJWnRzZzG7sx5HTzvWt1HZGsvfdMoi2oBkDV3bsY95WRV6JGJrqMqrZTnK",
  "key35": "5BFCQ5s2sBwGJ2hTzrFP256UnenSMyD7zJgcDr4oD4YXQkxH2kfTqwrXZm6BDoDgGpkzpDjmPk8CYXiq8Kd2Wwyz",
  "key36": "4Vac83bbR9d3wbTtGVwZWVD7d3ZDtS98D8uqqSdDd4XSJyt9HcytvpTksSmMeqVxAMGcDT8u2hhd2sfjhn5hJV7X",
  "key37": "3VqvuzGS92F2ySwaLfVTkPMRM5LVQuP6Kp5gbfaqPCJsppeJAWeAPQ1rpfKKRi9XWR4SPuowZyhxpxayZn4WG3WQ",
  "key38": "2FESty9q2Pn3ojwt7KCgH2pPnmh2cYzVgeTVz76HTFuipgfCmTK7fJg9eiuRkNvtkE5MkG4ecaoCsaqHq4V7GT9p",
  "key39": "LCyY2dp4P5G3vymP1sCFnVHrDToGEhczLBgYeBvzRJFbSR9otMznJkMuCakfSDnz1ZEPDQAc7tUuZaSPmQPntbj",
  "key40": "5JhsF77XD1A2Nzr5Huzrp88nKLjrcyhHGCxApLaHuAiRJGUbjwwrNpYUAsU9MZeR5mgZNwDBuL5WZa28mZq3pL4d",
  "key41": "5GTEXxxzj99a77xoc8mQUxx5wCcCUDaoj4U5ijWWz4HtjCHxCYGEB5wKavXCmM7Fs3mstdpRsFZ4vpakTJWdCLfD",
  "key42": "2G4rut6tZ9xDBddhcMc5KPBDcHJKV3WDzLH5sM9C1XDTP3MCiXyxphtWFMzxtmFKduRToKb48KpR9AEJcbhMLceB",
  "key43": "2oLBDDCc7qi8hFmAFj4kda6YfiaTF2K9f5jV9HtdZS4y4f7k2HTwJ6QbCK5AVrjcKWqpLXmwp8ohGWE7oTPtE2LB",
  "key44": "2uxfg1ZP7fG9DaX6ZLdcp5TqZfJGfMsFjiCXq36gLToXvkrkcfcHkh3YwUD7z5uaWd5gssoWHLrZoM5QPgjsMYvd",
  "key45": "n3in3Jg61ZSdSraUbpyJ2qRRTHoLDhCCKS7DNChVAijZTFDnf2tAQ33LLUWfxZqHN8KEVgiPJjU92PwQQCtg9y2",
  "key46": "3VMx6uraQRiGqQqnvwpGJGNGm6XuDMf4AzKPVYjtSgTyxkokPLrBG2Ap5pDBtE9g9tGZnkmarEoF71QUYumeb1Wa",
  "key47": "44t4fzLR3EXxYCiAvZPoz79Ev4ULdM7Gg1yKJ5HpXybfZfFjAvNu3Jm1W3jxqdJqEtsWigx7crDBWSq9WuSvBVvc"
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

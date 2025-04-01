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
    "cjdF4vFUVXhZ7QyHZxbyxqmqVVzPA3nWCQ7N4afoaNVrYM4jtb2PfcVVXaEHrpWdpnFLJt1BfnAQ7yP8tEMVAPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wwSrNmsRVe96QcNFmte9D2XSAxmpC8AgKTrz3pp9CzCmAR27jBkXfeLpwn4GKpf4KrJ6JAa8L7YXuDdc33BDgLU",
  "key1": "4Kn4x2ZpZorv12hhasiD3zDH2ctUGSjjyqnj7e1R6CEFFoJt6nxRVkc3MpeY2UQit4Tk2bQR87my3PCbT22QbjRR",
  "key2": "Gvc7LqHbvB768JWfHRqYohQo8ninxoqfNLQnFMntEy4KNez5yXizLpgebaY3WGUhP8qjg7TQfHzm4durc6oiFy5",
  "key3": "4L8kKUrprEgBzUqJsPXfC68Hd4AE3V1XT4RD1ibVzf16XRQchiuCDxrJCboAfhXTbtz6mQyvyn9XoggXq9WdmUcv",
  "key4": "aWqFCFKkJb56yTLXcKAcdt2ZitKEH27MwB5p4do5cbUXLbhbWvH7VtzAHi4b82N5n6s3Q8oDDwaeKvVmzMPhYKu",
  "key5": "3RxagUybbDMCVV1wRYVQfi9r435t9YN8ZDoBekeu4nMaGPovVSz8QkKtocKn1jehCt4MjoJwJX21iyrhSN6gEnoQ",
  "key6": "2A8B2BzxS2wHvNYSD3X6N35kpXHbceZwpouyR8vxYoyjW3ro8ZPVTumK6U1QfAmowgskM3SfEeAwo1wZnoGpa921",
  "key7": "BFeYDYNJsyvyx9BikFLGVgfBcxy3dwrWeC2Gbv7Qtd2rdG1S4bzKRVHCfdZ4fQhjbL7hRyUU2p2FAQeofmPC4Tc",
  "key8": "5hwfTPRnN1UJtL43YLpneJSMopAEb2BQMqs7rvsFVK2Jq5d5gMbNke9t8XmPGXQdNkXx2XsUaDaDpgeGpNQoDi1v",
  "key9": "5Qr7E7311ZJBU37iCknbTUHahnfGvCwTKSjGhZ8JcksCWmXq7e2qy2BhHJopBW4N1QR5mYCKBvD1qi2RkR8UQQdM",
  "key10": "5w2L6MRrL5TBaYSrFGFkELCVJ6hLQwuz6PG3HSSzCmcghZByioP733hyqAmttuGywHKTKD5ay62UDJMsUDG8D7NR",
  "key11": "4wa3zcVeb6idcxnkgWgYhwLk6geYqQ2yHVUVwgyuZSMMyYdbuYvkpMij4J1cx6w4eq8ru3xGFGcu5v2CgQKDzqxH",
  "key12": "9wanPfHmuDxwQtnjvEmxYbPmghfPBSZhQZBLBny3mKgHRL9hcgqL34snqxK5HgYqN1paL9Cf6uxqaLj47tjUneG",
  "key13": "3BxScfL9ZxBAkU95xmj6gpi8zUukQCFQkUByAXZJRvdJ94hYbQ9mD7po6SNkE9Q3bo716tM9jQMfKZdXcV9d769N",
  "key14": "44xMa9ksM5yLkH4U7aZZPvs9xYd1V8obXeG4ZW1Eq4iTbqwzZaTvZXTV7WtJtcJGFQqzWm5jZ2dwsVyTYJV7w7qd",
  "key15": "4A9obNxLUuK9ick3KDRsAqKrPgtioUc7LWDqUAo3TL8avYk6aLAdjzQFdFgUJM6HiaUpDBxfHHMZHJ1u6VmqqqV1",
  "key16": "5H6iTyg28771amraR7Zk5bMaNQAMZtCwraskerHoNQg9bNpZPJC8Fvd1rXuPWH36C76EwoMcS4UdLYerEtsxQsvZ",
  "key17": "4hKPGD1WxKa1jGBPLbfdtmRAi9pY5KMhUj9uTNDSH8aUbEQF8nboq2AQ6sFexccRFQV4Rxuf6eaZZnDicCLpfcoR",
  "key18": "3rShjSgbNDHooPNA1h5WTsuYJP8BHemTxUSXxUABqyaJRhziUkdJLy3achQp7BMx5aHZpknNKsad8fJprnd342NK",
  "key19": "4ZKFjLiXjgrgYow3VxngwA2pDXo34C36UH6Dmg1ysg1RochgTNbpPvvSNvs3B8Tg9efTLbHnGNLMSYjnBPMp8bWn",
  "key20": "3AaY7NrSxJNuQCjE9v1Uvkr5SgnwfEd7M3eG8c4ncHcvAf1YYarFkJ23s4i4WgnvEUWDS62ULD8P2VxtV3YsazMJ",
  "key21": "2K5SECd62DgsYQbdqyEF9T4A1cWhGfdJcEHynYZXC2Sv61KXs3TCSwwRwB3psb5FTkk8nzLiQP23FJRQp2jK4ioz",
  "key22": "38GV7vaVNTt5awuHD3P3JzkKx5rjFXjGWSLNBS1KKgm6nE6QzMzF2gy9T9D1md4ArFrh8C77jPKhdXWhXFWJc9BW",
  "key23": "2DP469JcuByovwVmDUwFJyoxixAMZC32tZmE22LvKZnBHnRoof4Gs4Yzxn1gVvqGaGnZQS1aAapbH98oAWzuB7y6",
  "key24": "2GfXxNnmytgQtZEtQhQU6JQXS5EmeinqHwqs2SXQYxSyu9TE2wdhw5Qu5Jum4cvzACvcUBMhb8Mz2DMFGqp2CK5B",
  "key25": "4CYUR2iHThHUQu2TTa6z4psJALkKe2jo5GnCsziLYdJrmaVqpDHvDpmrHSXYCvpbL88uo569DyrN3MjTp7jeZYiL",
  "key26": "4EuaKNc3styZ8dt9mbxtH7BLADChSNu5UHKNBE5RkbXSF4jCUKjqDZtfPZHEfsuXczhQeYrUGTXMyb6xeVh1stZH",
  "key27": "kfpXMJh6XFXyqUXPQ8n2qx6b5wxyH4mTxZjra4hB2aTrhtR6hmKhrh85LX6LTWBmzABf387FzCzAjicYsjRJeAB",
  "key28": "h4jNrudBNH9P5gjjXctWXErXxDPN5pm1RqPtsmw4wfANDeQ8oa4WaTNaXYPj4pVfFh7jYR81c9tGEr9nMLZkGYF",
  "key29": "5p2PtiHE669kZdDKpCqmBq2A6JC5TuaeDs6qHT2Not3qh26uYBoCxmzoTPkW9zxVPRVH12R2pym6ryYpxkSTn8gT",
  "key30": "29D1hdZu4PkpyMwWQQg7KoG1KUJfNPfqiGmVFoN2Nw7bziNQRj6vSpo5VnSXiHB6mCzhAjKFANyjcZ2by9xmVTQa",
  "key31": "43wGpcHkwgyWrnL1S3jRZBEaNbKuK11KmcHbrE8yJr2514zAa5fFhCDcmc2iauWihs21S2nHumNpDTLepnx2x6En",
  "key32": "q18VZFm6iVGWwP7ezWWVhjfDLy57cW26gH5T8CR76YfN7LiiKwjPkXgAsDfi2TgpB6h4tj1EQiSH3Un4Gj9ARkW",
  "key33": "559tAKLoJiPLXRoFkeSPJonrKUqi2Dt1WQzQVeDJb6cvW4eqpyckwWJxtCxjygYjJfWJRGpEuKxBWa4oQ9fJ56G8",
  "key34": "3FCwuRwNKuFrkXSvMycuapT9xjerEas7UYrutTmAaydvjmnLfoV4uac11dmgLfdMQsHdffkoRv73ZETw5ktXBpDr",
  "key35": "4CyXsE8M4t4Ra4YQyXbMwdshm6hT1NNmQWocrZiCoqX5oK5jtekiEsZ7Ms3ZZnYeoSV9TF3bdFMWSePRXqAeV26H",
  "key36": "5hb2WQ3ySzuRqPXJ3fxbEwHEriTnJAJZdqh5igceCmGi8y8Qys5PKTZaeSbLB5i9oRrJoe8NgScGTG7yqxToDCos",
  "key37": "44Pxmv5kXi75u7vCoURr651trVKkM3XAAxGn95ZRSXZHVouhiExn5GxstSp2JRmucm8do6qDe4nU97CbNzERG7Mu",
  "key38": "3EDr7GYBoQJZWTkm4dgTHWpe6ggiVKfcdMANsEfHXjJQnMwbxazXjJASrEDpT3GFkAWcLzV3hwM2zgVqtcMEm3Bf",
  "key39": "Qotu5dKhDTSc1nijCzpgasQuff6uQQanCLcYsAup9AscJzB9mPZsAXNp3K88bZ1pm8RFCekdJjXCcr8QE2KDC2k",
  "key40": "5XkaKU24cDt4LwV9Gm6UBusaWNaEmR6dhkZzbJiwMGVnsqU8aRoiBRAB8qYxcjsK2jQTCJ5SpzKKbz81HFQNqDcz",
  "key41": "3Tvc3P5o4EmpA7sAHBa4qSiEqM1QkWgbzdPQPJtggPmnyRfDPXcRYJWVmSz3sdytvL8GbPiGSWCyPheiAL9Ztjr4",
  "key42": "3kP1ZXbaDcdMT3Vx81bZzvnBzhHyooiggMAxS6kUVN3A6dSzPqWdGtq9kCkehkgu5rZsxGwV4EG7fVpPhR7ZZSod",
  "key43": "4NytXZrpZ3JrU4aXsvPzACw5Pvscksb1pcnxKGSRyVXJj3xUTjoJJuQdNH7DKRx1BFjMJE5rSaTXa4e6SwUmZBqH",
  "key44": "3qouJA4q43kJnvA6oLFS3qpqzvmtvNzZ3WwrXboHy6imFYs3T3tcFfGqLvGwvdwAVpWL3nJr4WzfgCkzJws7ZKhJ",
  "key45": "e2qx22QDkchEVLndmph3tTqdx1wWEJEQU652Y4AZZdhMrviX9M5ebv6wsbpSvW6RNSRkMfqm7FdzEFD6rvLozCi"
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

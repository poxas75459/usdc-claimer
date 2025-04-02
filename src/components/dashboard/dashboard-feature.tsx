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
    "5ujfVewEs4Rtm3x8iQN8PeRt5a6uJxMPR7qd8vfUh2UBJfZppzGJwcjfMYDXZ6Ei9gd8R5VL79ertE1pna66VrbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Qi5HMkWjg7pUS76bKqaQXg8iwddUCZGgu7YmvdkCu5WaYjap2p8CUSKmDcBRZLVUPjgM9et5DSFPEPXGzE3UXM",
  "key1": "6j4kbpsHq89aWGRKE7YC4CwvV9dZj58V7bBbRreofeDLYfJ47uqFKRCx8gt88tPrrpTHBwgNGpzSjCKjpDkLKfZ",
  "key2": "4UVfJhW5BeqhQTkahefxHnfzQH1gFxQibvo8oLQ4wxXBwjXhhQvQ3X9EofoaA79YZ3N6cZKtDBEB5WMLADynjZn",
  "key3": "531FDfZdXTkuwtkUU2W7deUZXZDFMa3BA2GeCbspn3M1RAPDSzX6T88ukxpv2vzrzj9urNpTGZBqXNCv6eV2CB5y",
  "key4": "uwSMmJ1nsNvrLKhvaiRqyXxM4bBMs7msEjq3niyvWmTAQJneQiVuFLEmz2PkUhxRvv4gp9R7q2TSWFBjY7z9q4b",
  "key5": "4hnwXygDL1E3fNrgSqKADYoZyo3rYho2CW3Sw6ET5KHMN65M9cc53HroMf1txPRgm6DSWaPYAWt8f51VYnt4o7a4",
  "key6": "2YkDGjgB9KPQ5S4M3AirhmtgWTmDTLCi9jC5vL8g5Vpn9GpSod5u7VGWycezJppFC6ffs2KuAtkdtAr4f5UjGXi8",
  "key7": "4DHx1KwDFAGwEvH8HabJAB21VGP68DpKzXMroJ2Ea7E3pGRrFqAZt5cRySHPPEgYkP8DrfvkPWJcHafSfnJZiREC",
  "key8": "62Vz59FLUVgtjg4CdjBgynkAwHMnjoJGXv3wVVmezbcT8eDBaK2szNNn9f7YJ7WkAeLFGYAYpraFeUc1RVB6Vh41",
  "key9": "5RKX3LWeEkmCq7uUY6s1FmAcF11RoTCex91bMV8L41Bt1bxo7n1mhdQ4ANQSiaexiLGPbigd83u6YppZGDFc8vNV",
  "key10": "3MtgzvQ1pBNzZk1cbbih3BSTbFYni2JM8o6hwJwTYVzWS2KmjqYnDXaEAu2kgxYukizi4azik6xt4fJ7bssmuiS6",
  "key11": "3UNN6XNSCWWuRZqmDLxP8GZfEc7r7W1gnqCLu6kdkTn6Wb12CHdT7BCV6irjuMqF24PNPgPKSSKbznEXZWQkvR4w",
  "key12": "2o2RcWP881RHBL2o2Pgbx48RUfo7TdGUtYf2VMMo6PcpMHqVYtLbp4FXCfWkENcAoTjo5xvG7RSVnAse2Mma49XY",
  "key13": "2MAzuJYzykPuxBWqrPQjqjwaJ2CEX8dX7xt85Phi3EEx8QwiSYp5PJg2qsY3fGbHGaJPv5XrYgUtzvKhBoqnVpC1",
  "key14": "4XhFRtPg6vvHcJTk6uy9XBKVeCnX7y2HaZqMbYe1E951gWJDVHC5cTzGbvBxR3ndK4H7rtPW9apB8PWsoYbeq24M",
  "key15": "31gHB6X8usVaavncQ2DNvB9cbU6mMLRcHoGVKx8sdXYU4RwDkyxYZMbeyAw5XjhKpNaQSFH8JC4MLqFavC4uYEit",
  "key16": "2SsJ4muEcAUwnGTkz1a7bZ4Ms5FykRhTGSNMrjH2y487NMMxCeVhKK39AsqsGNC3AV6iJygRxWq1ZTjNAuPkpPqJ",
  "key17": "5j3JU7i9BmCxmcxjkuvvmij1HkRWEzz1GY8V9epSJkvB4NVkcLvLwUE9ajjnzgYfnbSwCisDaKEqBL6Sjd312Up2",
  "key18": "5Ae1j3o4xjPmenCLxgEQfzAdyBmGYdXfSNLuXh8mAatmcJAso3tCVCMPZhCf2nopjtd392FivUzv4ywmDeYPCS38",
  "key19": "91M4GvrRZ5vMrix9Q4MDsSN7Zmisbky62HDqkXcjsP7NN33dUKbQs7py2vxQK4bYKgAEKc1u8YuSTo18Nf4AGBk",
  "key20": "3ohRW329XMjBN713c4fsxBx8i2PHfEKdPzTYVeevF5t86PnimdGzTLnYni26BXrZdSp7ur18fjo2MH9N4xMsd6MY",
  "key21": "2gwAxD2zUSX2uvX8YbpRhvVCeE5Qtw2NJ3ht9scny9d87ec4WfdoL9STnGv4YVaec7AnjFiJ76x6LKeyNsxAPiLi",
  "key22": "QxiARbqmKQkhyp1T8gcuh7MmAqPajyuDmtcLXQzZFei1fDNfLPhhqnc3CAcHYu9pgc8m2o91hS3hmacrimTkGPi",
  "key23": "2QS64cecquN1rDRzwFSajBreWADoGweyn5oTJf5KcR4DZGF1Qgqqoecht9uxCeCGLwy8kHPgfKQJFnWgzfM5iLoS",
  "key24": "4BQ3RSBksaMfrgsoybZJ2tXPamAKsod4SE4sajM7Usiuos14rgkU3jwtLbxcigkWrzCjGGAAjpFq9e2e3peE1dQS",
  "key25": "434TuACgffTm6KViKmwoeMgW3vSV3H8XVVGcbsWPK18RtJt6QKWm15K7V5kd1niBTnWb8jNN1U7B8kdefgPpZ3h1",
  "key26": "tgNy1P9GMCsXiAQUbzLCHFdwdU7tqbswygaGddiMw23ysZB5Jb8Ffh5iJ4ztyET2c8kL6dqixwTsZRBYUS2PrAT",
  "key27": "46xXohk1deFEnoou4ziqam4omS7pKDDDwwA3BEF86QUG74ijTELjGrmL9159YxpFZa4Gy2PrfUXVUGMQaabZ1pwe",
  "key28": "xKnWoTxmg6GQC59XZYL2eqPthcJ2YwF2RLa9k6VHkqNZhz59yX3EMTbZtjMkoWpd9GEntoBLuoj2yEnbBt7fo84",
  "key29": "474GDkC6kmQsiH1ACeLVcxebC9kTkKK3VoLktuNXrrGVeBwmiQYtARzjo72FC8VFHxs4SUXJz5wULF7Sdjgpk6vC",
  "key30": "6hq5bA2sYfKz5B2RZ6y7MrzChmyVBuLx7ddYtywex8rYV6d9G1Tfz8CutmchmXp3KvR3JLD2bdVgjhBU91RHjAq",
  "key31": "5GcYYE38X8tJ54GGusEQjfRAVyQ2RhZWvq1oLsaFvwTRCQXXSkTntgL9d8ZwsDrYdXrgBLB4eXfy8DMFzqLA1e1Y",
  "key32": "5iTWkRmXejfjMECX6aCdmabLJRrqjtG4tcYgtsm6vYUyTrPxntwcVoB5q7zUxonMTNgJyt9yGMzH7cFK8xXeg4Gg",
  "key33": "5LsJ1QwC8EF7k9MDC9hdrgnd1EyML9DEqyWD5EBa2odJnAkqqcaKNRCVmwY3CED7F4yrWzdaQKAyoyAp5nApWQMQ",
  "key34": "28sRZ1Uj5yFYM3pjGnNErGoneapvLJU33S6MVH8kYPmFrhZSuQxkxt8Yjj6rJ8DBm3JbMdHCpeDacFQFAsvoU5cV",
  "key35": "3nM4tH4dKGawpbby1wkv2zBMrFrHoB5pSwRoECyjDRDyN4n75UkQybr6dRWiKDzcrciS6vU5GHwzvuL8TQJLmrjX",
  "key36": "iMGihmLs9GTDijNVNaFJiy4v6s5qEyATp4SBWvT1C2Ehn7j1kPHXJjSChCM8RwHkN4MkmD84CULsds1pw7AwSk2",
  "key37": "3gyYCnhdfXXWGH249bDgQs62fiZYvZnX6qbS3cXzetpERnBx1tKJfzzBoG9JVsBkk8XLKvHNTUYuQ1NzoG2vj1bB",
  "key38": "5ZUFWsRZvK4GGkdJHBYF6aPN4JoLchSeFFzcb2gX1pbzBa53uKquoFW1JNKsWeksfyqrRKRiR63qY5Hb4iT2n1YA",
  "key39": "yG73qgrYz3U8GAYqQGd7jeHsQLhEpUd5rmF9keaLKxjftzZkc6X4vCQaW6C7fEz2LRYSBr44aCkk1EboRjxo35u",
  "key40": "4tyV4PPVcQyob6iKW8RJnMRWKYzUPVUUxChxPBVxDWLFVysbCgzcBFEuwuDoNyYdJuG2JKzRSnft7SdUeCNP6ZyD",
  "key41": "4oCqVmwiJ5PBBsqhvCgcFozctnNSJ45Gu7bMYG6SPHXJ4uVr8iFstqPyNE8A4RXwwJXbecNef1yp7fa51bMbXKCn",
  "key42": "4vqxQeTsi7BgK8D3zTVi7CKmrjh5n9J1Qmot7tqcE3MhwFJhbLU8S7zv8wRapzsYjdPkWiRqjxvKjhRaerQ3R1q",
  "key43": "2jY6qG6X2akSJnVMxVo5up5itT3rJAybmsSUtLjXTuzXiyRH5h7kDyUNQ93ED1v8L6ccePw6WSP8RNi9zA1WBKnc",
  "key44": "3b49fwdLMSGcaACo537QRFFgiErB7w5nYDbwmj3doMfaKdPC3tnSdxzKaopHAV3kVPCb2EvCSRHfttPm6xvvNQ2q",
  "key45": "cWCsWEnsWvWgWDjmUhKU7mfyfdYQRcqfwTKxHBJaVZfX3ZeGQUQ2XxXMKZZxsBCKBxaH5KtHDapStfT1HKh1uk7",
  "key46": "iqg6rZzidBES6Deu3LZhdcSfeiXDq1qfFhGXvKXrygZtLWvZZKq7cCAcvwKc7aNoq6GuNhC9dpUvpMnQSJxJQhd",
  "key47": "45x1HdNnrJSpBWEb8woP9k9pXWn5yntDMWu7ej3GH1xJ78qVdTTgQ4gngasfskuGSKngbuasqmWXgzD22Ny8qNut"
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

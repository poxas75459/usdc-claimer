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
    "q3vcZXuA37n76WV9ery7pxMDAL3fEEJv9E2hMNi118muNFWv3Kb1YMTKxjnez1FxPzzKLxMz6WP1u8awLBWy9e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Satvu8v6bf2Au6gPyygExMAFKH2UfGezx1a6ycGd6yApC95X7zC1Yy2eMBtPhfWyb2iTKvM3pYi9rUW6j87VoeF",
  "key1": "4TNw6WZs5b1Vtsb8jzXECUYt8j1Dju2Q84CSBL5ZhmQdor26ciE58xVdyqvrU6zsFsdBXudzRUaycbFUfj8d9dBF",
  "key2": "4hBv7ezx6vADfHHDXAQtgtaJa2PBTEfUnEEuXQDZ1HcEFTVDLsMxmgZ1YgZiuVh5TNav6d2hFT6VAe9MwdnqkPts",
  "key3": "2KrYcngtDvfyJ7rdevQGbZZ16xEBDvkbDhkYp6hDWmuSimyheDzxrgwao8uwCWKmschArQwwDf1CV6sroJ8WSb97",
  "key4": "4oWkBHtVLkvRf2bvLJza4AHGFMcwNzB3yfQYwSrCv32yWzSsvj4mWVzRTnoeE1jZ7XXRsnUZhfw2RmPu5Kd51NkG",
  "key5": "4chJDnQB8Ri24dMAGxecmF82vnmEme6qQX1DYHd4bpYg7HbEooyzRM8FiEBheMkECK8yQbCyZhp2tqMraGuTLjgT",
  "key6": "2eYRSCCRCCmGRD7zCXic3Cbz3L4zcDafpGq8YEjwLsmPTM8hBdsZvCyeFkaN1VZUXJMjBuotLuiDfo4PgmJMbHkA",
  "key7": "4W54mKJq6cvJj8Hidrm7oL8qRZom9FgCUGrcqgTY2GN7ZKEm7sJktwtf2PKxFNumuB2b9m6yteoArxGSzZENQEez",
  "key8": "3aYeEVtJDBWfgenhQCTujiK3655a9jwmCWYwQaDzLWvcUmCFEh4A6LFTwYq7Cw6bsc2RptEuikRph3wfyWzsDSbX",
  "key9": "23RShibuNfoTNB3sV7DkVXmfbnGEWvBP1ED4Zea7nDc8196MaQpi1YpHYHDe43Gi3Aw9PLUCScK8b2M7jgympv6p",
  "key10": "uRLMJ6oSSRY3dpUaYrRgr1MzsRC82mUrbWoVtCCqG6zTrj4d1K7DsaYWJTJETMvEkQV7Mm5t7mwmw1dbNJtkq2K",
  "key11": "52qMryf8DipPxsywTjgyQnYWxiwf1BYByjmGPr9cpTzrcfWa2FCm4vvtG1Fzs7ZxJ2UgQLXzG9e92HXtvWdnnpP8",
  "key12": "3Xeigv4G8KWzGHnXUDqdipwY751RHDjwMm2FYcjCUutwCbvbjrMLkifzCMiiVHzuHSf42r9iuQf8fDxC3TV9UWuK",
  "key13": "3EeNypqgC1wmoUQLJZ6NFjCLLUHjbG4rcrQtZHydfZUnWun43BE43MoUBZ4z5HnWwuPF4j1Gwxx3kJrbDDFGDaYP",
  "key14": "2kFEDhnGrsksWgQryg4Q4cTkTidL3L1KuAAvMuaiquejy5EXHLZg85NvBmgUfDsB3h2VT7j7tguTCwnjERWnt819",
  "key15": "4W9DSSJhcC8u9EV8EHg8EMFhbs5xpjNanqCAcVGJZiRCnQtHLfHdFkYZvZaTv8CHiT7c7kvj9wffWCC2pMbRpbBz",
  "key16": "1Swa5R1pMFuZRgj2RrRmcRCrSLeZ4kHjECEZuRnrZuQFkFNjHetJV2LJYVBEK77GGVBD8AzxGAeXBNgZ2dQ1ZvS",
  "key17": "ApfToXkA8yd7ckzLtB9fEkNL2aprjjbva85kfvAdcNRtf1H4t1DYWX6mmmyzkYarzVXunHJDSriQDtZhmukTgtD",
  "key18": "4s4H2JpzrXJyCTABAXyF8WvqGPgGwaVXoDzyNwpGy1cnAtVeLNzkhDdZvFXBE3B5inmka6fBZZzNumwYbMVCr7m5",
  "key19": "3DBt7ofTfHx3ZcRojWKiis4MrvbQVNggtBjzb58z9GntPzKmmXfWhWK6xxm78DfqjsMtpxHvNeVvCs49ykcG8p1b",
  "key20": "2tmxBQ6gvjFFDDjY8VDCdhrFVXGbgbWaPMEsJFQRwZqnUxXWQeMUxAiyWar41e82TF3a3ANmRtN3ZU7JJYDk9RUZ",
  "key21": "DdbbCpwYdZiw8cYYT6uTdxe2fnLtVAM7zqCAcye2qfyPdann4kqFXCGLpwsh5c6xwCxj2TrphoVBXzwqvcaAyUK",
  "key22": "6gRSPD2g2pDaKb54D64n54XGAvjNNB8Y6Su4acAyA9rH44S96Jn5o6J89HDUtKWcG8Tm95fd9kxxPyFFZ6PhaiV",
  "key23": "3npj4KbncVs261whoR9EkDJLF4QsidGeWYYefUdPoqdBnk4HzvdyQGJH9EeYfa43GJGhDdyHAMtoUgBq4ZMKMCn6",
  "key24": "5gvpMv81Ta2Nu4fUThGC7BqxKvk8KCapjvWuNBPzg6AB7pvhFckMHcUfs4D76oepNUFnXASMmR5t4zFQ7ajKYgwU",
  "key25": "5ePPcymSiZm8dBFg6v6PdvwVGB2fzjjTat67BP3C4W2nQBQJR84J32ygsuyfiwuWfirA5kPo2yWH72GGNjyNp17s",
  "key26": "3ipM7TNapZ1Pedx73oqTTephfP71cVpukEvbYVSBD88sXYa6Xiwdg89exphCgpN7fRSY7oxHFC5EKnn45zcWNPdC",
  "key27": "Qf4HtzGFQpXRrJ228DU8UFVbckycrM6qX6H6GZ6FhHT8oZnUm35j9nCKTQVd8hh8BbMBucQPawTU46LDjcPD2zH",
  "key28": "2jPmQzj5eVaocATHVj6qzueq2Xk4nMRUC8NHAyiCDoMfRt4DiUxqTCD76ajc8pxswKb9uWZe1P5jv1QwBWeQwk4T",
  "key29": "4kuaTqNBcsR2N3x82z5qptptGaDMQCm4nLNjuGJCGUqLBDutDDQ4RYso3k9mLrJkMAntkMj9H68KG2LSZ6aqDKhu",
  "key30": "SfW87qRRe9AiipRNv6axRa48hpKLE4SaXfG6CdwPRjZhDPBCwYcAMCpyYr92sPkUvGdZpyciVwyGCByxqKtVDR8",
  "key31": "5QWkSBzV5eVRii2Qfz2xbRAnkoG6xt3vTN23JmbdjnQuG3zv3D9MkJZwuTRSGZ54HbTxyByXkFXNcmfriWc6JZKy",
  "key32": "2bhomssf5qyNx9yEzvaX8UiU5uErj1wNDgB129Fr3PWYvj1JzgGbYryCLK4kgPtTYi7dP77XMx1ALf9M3FE3Jtod",
  "key33": "4sji9DA9MKNz4e5NEdRKWrUh6kCcCJccpEzSBsEf54TDLB7BMcJs2Gj1LHGyGJjT8iHu2ey9xmpQxKuaPapakVuf",
  "key34": "2kQBbi941jRHSuM6DWZj92arRB6EiawpMURZqUraK5GFPUREEokDRKoGcBZWAKKDpJ7iLFHT7dpJ4AoufAfoSkBu",
  "key35": "2EH3XgDyfEK3oxXYoMEkymet9Gv4yChdfeU75tpq12GLoNFzTr3qFDBc5R2rFwpuKMd38235fx7Mf9s3GnN2LoZA",
  "key36": "5jhVka6YHREzqZbLbE2Yz11AoAa9pCSaEu1VaNr9nbGwTnB2sdCdr633BRSEHz4JPQgg53wTEZ4dLmvfTA8wRvW5",
  "key37": "4rcAz5TDtmkFRRSCVCWcANaiSabdVyAdtAwUoJ6ZPdTG2xJ1X2EYfcpiRviL9n7w9q7sx7Lb7CXYgSZNw1d5vBSk",
  "key38": "2nTDSzv9Z8iJ8Q4VYBV3FT2pK2E3qdFiWYa15zgHt1iF4eMF6ZxiA2muJDn3WBYnGadC6j1HsgaRv9CZyX5tEDok",
  "key39": "4jdkCcjwPY2AWhdVoeL4kGkzH974B1P6icwvDk655D2rjscCdJQACPDK9pavZ9yAmVoMaFEKdnySomvA81ZuqV7h",
  "key40": "3v8ourTetDFAPD1Pvtwqqc3iSE3LQJfWJpcp5pB1mGAe5oVdrj5nGSGUH9kSzHUS14dNqq3yyWZp2v13wiJpRrYo",
  "key41": "5kuSR3m9yqSeYwPzFYqF84Fi8vcgJuA7EZuPdR6JhLp32sqpSoHbw7jS3AYon22mjENzCstsWAYY5E9XByPW7vJU",
  "key42": "Wf5cqy8bng8QrDXPZ8b9ihuGYJhoBpmx5DZVADbqZADdsQW7YgJbXPyjFVdsAvoBCMuNsULRATjgLV7GynRmQH5",
  "key43": "3bL6yGB1ehqGariB4AhTLxWAZww8pPjoBycsAus8nuB99uUKHHy1EaN28zKKASPTtNFCAz5EnheJBUChKACBUbxG",
  "key44": "5r2DW92FpCUekwNmrTRUJ8NzerQcJoPeqrKBkQLd58cNUvkGYeeZAWHubWiWpc9xBF2wU7Xa7vWZs5zKP8EFNsXe"
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

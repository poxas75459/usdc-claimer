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
    "6rBRXRvAVQgmc4ejBygPimfZWMy3GfEHjo8kUG3Y7vSxHNgEQAM1dGNvc5kC1UwMknoZLvxeB8wukKC5QutDDJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47EP2GBy7JsM6LJSZmDAx6VpbVMgRABsB1unpHKznFL7CJtWNDoFGSsAzmG7cs6FjoHm8AMAcotBGa29kFuC8Tkj",
  "key1": "H1H5ubRBfamK7zWFHvDRbTSAhHKzcvutsBPjJLPUqPUcPmooLr6EhXTfhWFfWSahPh985CfTvgpWJ2DNT69yGoG",
  "key2": "2XMD9Q5pndFbv94taggmA2zaTayjHrSivKKqk7XmLHEYjde7axcqJ8BTk1Aoj8qNfhtbGf1tmkoU5d6qPZHeBQp8",
  "key3": "3ho7WfL3iRSTNWbTnDjR7kRmbgrxxhTt1VWrSXKmbchjtNb4XikHjVww57ks7vPeJ7UJd59jx6nPpRSc3bZGQoQ",
  "key4": "4iuPJeaav5THBAyEzqjjb6njjSunyVVekmsSTMMQs2KZejgVzsbcCHUHPE3GfYh8kN8vjCsDTfeMME2DLukKUvNa",
  "key5": "576P2tNcGXbKZYa3iM5CyuwnvEcjArb6NM6DtS9ixfbKoANAwnjT1687JrpBef8yRZZ1TQbVz31kedaWgurqegj6",
  "key6": "5fj9ksTkKmKV4Amn8BA8MSiiRdnUcyoD6ZYQwefQ6SiJTgtCGiTByaBCzUQ1xDtxsEDTDBYGPmyXggUdUBfm6r9z",
  "key7": "4pkcTocYTg7EFEtLt8Ux5SXA6rwPDJ4UUDpxeqGkCbZB1yfb6e8LuysiSQxZ7iVzADpebaWVT1dTrCYVMBRGBcT6",
  "key8": "3PSocjbXVAM2Yc3w39xEwnoEviXSVhNyCRR56G86JU2Wo83gd9E2Wrcryyp1CdeEWJgQzqkUbxVWJo5yURK6fPHN",
  "key9": "3PJwDGi8XnAzyjNa6VcpWm7SbYx1rD26kB8GLn7vZ3hKqNce2iRRtmgGwGPjc8As3iyCkRar8nzw6pRZUJPJF3b7",
  "key10": "tarxs9HfJYQZGiEVrtfDgo3YkNbDvn8YPqMBfosg8up1rBRhqhhoqMALwQtbjAGeUadyt3kvpfTbDdtzJcx6EFm",
  "key11": "4avPAAj5ExRYvuxxC5L5wBfZqAzkpRV7xPHADZ53TMN45mzJZ826oqPjLuQ6z3P22y3GuCsf4T5xdXEboxipc53i",
  "key12": "4ghTEnQcy73VkKtN8pJwtdyLjerGC2J2rxUyD7bUwrL5jeZUtsnMbcFAKs6SjPmQzBZaX7Q79Q8j87xvQkeRUWEC",
  "key13": "3PGXpEUqApHFfpja8czMNyJPp9cVi4cVX4Jc2DH9atgeujXe3ZpGnPeRg1FCVcRgNzESkCQx3N8PvGb14UMJFZwq",
  "key14": "3sX5Y4f3SJfwPGscioJFRXWTV5mYMQGD1vDxKEyVeqbucrzuA3Fz2gY1DAwNz36jGaFxRqjpG5cB48Zc5kD2AtVJ",
  "key15": "39kKco8uZkBFD4Zmj4niZCedu6GGYG8wrhyKTnS5xtdfTH6XULpWtQnMmHC5QLG9PntihQcjipVB2QdsU2ofUtkE",
  "key16": "KtmTjVqJAYAcXzTNwyF2i54SzrJGxGJSZb3CJtJf1W7R12iRCdTSjFvoPKw4EPgraBtbhVY2C9u5NuNVZ6kMGoA",
  "key17": "2hpoth3XBPsiaxoiSK8hXHYaLJJMkDGN6hAR6BZ6i5cAaCuCcboewhY3HVPyQ4j9mNbR9uYxeNhaP7dQ6SN8wfn",
  "key18": "2FsU9bShJAScX6Gyw1YQtcUQ7PTjnhVsfeGEjumAg6uutkEQBFv462NRtiR4niNw7TnzSDwdbzqY8mAf3EZ2NVsk",
  "key19": "4b85Hh6SsnhuqfH3Fr76Y9q6ZgJQgZTmX7ySQMD7DnBUmnpVjG1xjGL6wkWY55yT9sh9nwJm8KeCPyyrBgRoUHUX",
  "key20": "3RqNoYa3vttyAAPZqdzoZKEm7FftokoRgryFNhrYARAv4WH2dDBWJDqNBVmjE8VqMVgGPkh5WTzL98CLHGbxgxwX",
  "key21": "4BioZfXSSebJibGYgJSSGBBgmHaiwHNhL3pBdRuWXCyfZmU6uFr57GumSYT367qtBmzifUWgteeJViNcpw5HLi5i",
  "key22": "5NecVDC2ahtXPE6BsNdP5jKGcCoEm67Hd3m3RGn2ZH3YTTfH9a47YS8c9TsVyPVD8xTzmkw1CxVeZ3GfLno4P9tw",
  "key23": "4NsVVJDFEazCG3CMRtRJehdrPMsozppduVMzWikuatUFtrCM49uAtnWSZEM5CBbGH7m8japWxSM91xaM3JsPYcGb",
  "key24": "4Lwmq4e8njjv7yZq9Rn9e6JTWhVrkDw7JhrDxsXtQ4TMr6HynhL7Y8WKYsSjkbptQBanVmG6mivTYxncMbqy5BYk",
  "key25": "3mCzuWc1W7eoZrETNHxjpEDjpv1LWEq9jprwBFM8rnQMnRNJ5sw3vFNTxVHxbdwKQdf6d5uSZSiu836jaSARdTdF",
  "key26": "5KdgJAe7pEe6r6TUP6ZFaomt6WFHcNKrr3ff1XLzhh65uvMzextYEDCcLuUiMNoTVUsmTcyaNyunuyFZUTKrUNy7",
  "key27": "5zEa3xVcFPko4TFdB5YqRbsvPr2ZDxrYqfXJQiT3maCgrr1JWFwxbkknrY1VjukatDEyqsHGV8MYbinNucuR8JVi",
  "key28": "5GXAcayorPyrTgWRfpSW5aTxVpH9RmPn56GiZUYwFSvzX6vBfnc7hHxqsrDSwMhfPUZJtEzXdJzWQzySXHTnNmUm",
  "key29": "5tAGWdeRYuriBdLsTFPXLaAvNgQt3WXWA1yC4kDbi3v5GReFLYt6HsDJ4C2xH3752Ak61kKnMtWeFznYPbQ72sjo",
  "key30": "rQocAeCM7Mt1hA4ADRvD12mHGBS5QLvF82CivvjEdSNHcBdgrvK6XFPHiLmztsRzUkzaoidrwnfthvWtBsG27vS",
  "key31": "2byAwZrrjkwVTLQyrVYCoMBT7SfBcCis7EqNDGZaNz1RsF6s54tZz3hwaYM16RH4RRUMawTfhA95tykh8uc3838x",
  "key32": "5tmvwiK1XXEhZcKqpofHxaJRx23AwsGrdm1542mFSTPRA5tNim3ky61E8baeYvm6xMwCoxtRtnCRffmkq9JQAX73",
  "key33": "nkWt8D9c2SKj3GZfWQjCS2CuBdhuBrFUwMeC6Snqe4BmLrTystut9JUSRGVytCNZq67rRXH1Xv2L73PAzvHmWBQ",
  "key34": "3VPYtvRwwFTLTWQytdoAtVHCzG98B6npnJyRF4rx9fDrFq4QqWckJXQufEJQha58x9tGvCaBWnE2DzK2XTByjPpv",
  "key35": "2omiGhVPte4jB377qpDXN8nu3oN6aLgwXEYNTMfhpSysDZZnP73Z9TVGs13U5kDXqdy8m38EHBsDzisCXyaVfKVd",
  "key36": "JYXS9xmNYsk8CvYuGFz6N4BYBefrK9kZ364XC8kDiiB3wfy98JptjtxZbPHUmSze2irRHbWCt4n7sriV5BjqBUL",
  "key37": "37acrWFsnJMFDPFZ5QonWycC8zKU6xwKEGGACJ4dEnyMo68QGYU7XMzJ1D4sr51xNyN9iJV2JjFi96SHpGQq1568",
  "key38": "3rrixAL6Xovvug7c1NTVFBkNv74jqsW7Rz7iBS17VUfQZHBdbhA6KuKExFduPZucMBpQQ1tjSZBREUck9czeLeFx",
  "key39": "3p7DW3r6CWNgKq8jDQyLhsM4AwurYsx3enXW5jaQ2HChnMMGF3ApvXPsZSwUsz3aBqPMDSF5D5C8SAaEAWTLvosN",
  "key40": "2HvfVULaUsi7rdT4oKcDyCtD2yd32EAYJyi7kPGNsXTRospKLU2t7oqJDTuwDPu3yie5UhdihK9Eg2Cgx87rDxZj",
  "key41": "5fNaYP5wXcQ5acHzNzrm1drn16iGMbPYGa73aTUQBWts1MTuUxRxRqfkFS12FRD1tUQMZQVpCthDhZKXUwbReEDS",
  "key42": "31nUoKXvCb69crhGuztiT2vyVMo31GkCNkkMT3rTWzGiBxnKBFSvw8ZFfqKpbw1ZhHQthEYEnwU7hT2xJp5MYY3h",
  "key43": "5wXcodfvdhqZHRHXFpkQtbDhKA7XBZxeMsNjZY1FhffVuBcv4tAk6rp24RhpB1VfVdb66kvNRXEYLBDqaiAeGki4",
  "key44": "2ng8qDwWawCcB6twXZbSWfmPKcEpxpGmkesduWjLTzhWxewxgv1r1tqDYikHaMXPoWJL1gbuam95Lf4HKtDWDuxF",
  "key45": "5AomVnwMuKiiuCCpYJxZg3ScJUyhMU6qAjNUz24LcN8xebN9gQxoe2vuvkucPAdPwAShLgsBi2VjcGKysRRDQwgU",
  "key46": "3BGK4C75zzYFbaRnosr2fdtaymC7GyMzLoWyRB1TYEeXN8HsdW7zugUdMW6x2DpXPWS5uvFcMsix5U5tibywyQWA",
  "key47": "VsYoGPEtJQuGPTzda65zaPM67JijMtX4XdbronLNdYxWnVgSPBX8WpataoatJJ64LRmHbCdaVj9EERaiTijbjbS",
  "key48": "3kTd7HR2k32g9XewgWJk5Wg15F2vW1V5L8Cdu5ToQH4jdVrAm1W2qXvSuHfwZNK6q4eSkX3ZEe7sYNcBzhH6WCNV",
  "key49": "Tzhfm3wSN94SvFd9nYahBYbSKy9BPq4ywCNc3rxNiPDg7qGbu4tFEfAgsRmzg3dMvA8UgWRuBwxfSwhxhEEvjUE"
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

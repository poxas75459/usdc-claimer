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
    "5DMLDTnkk6biMUVyR1gPPi1TcdCRfxDGhbjomBvLLbVgrSZ9FXaFfPQPVMAHqW6KZuoNYn3wk8QKkZe2vgck6XDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjpKgGr11ZgLEhbP6zi33WnAAqq8fjtkjuHGuSKiYmeYPHyR5U4XwBiELpr5bs2MZXWTbEeybTBeSaLYHx2vEa3",
  "key1": "2TzX3pqeGEd5t2pbYD4pHV2cK7JTwggLpMebYgFDzNxm36tUn8fxCXKuKCHRr5Lt63SNtPAW2maWTXohwMppKFfZ",
  "key2": "QrNJoSj6s9SijV1EEWGEp3L5hzdQ7s8SZZ7X9WFdVcdHLVsouNNCxoHZBH2yvZpD2E6gKbVh45Wr6kg6ZaT5gxn",
  "key3": "2GAxEU2CZWKZwrSjiErWwE5jPHYP2QRpfp984nnmTfoGKABnuSFArzwzxxTpaWLzas3pxwfH9BNAV3KDbSkAo2QZ",
  "key4": "66bayUCNSuSRNMZdVUajtAShXaojYaUsfbh1SUgh9Ev1PqAwEkUUHsdAMuQxzZvgrkHZGg41Pa11urZpFVmBqtEM",
  "key5": "2AEK4FKKRJgCMS9kUvnc3GmJsLZ9zvCvSTVjSnUTHP9kM9wa57gxBsVgVkQrZYoaHBtrVKAbHGE4pC8z1z5nTJsp",
  "key6": "22BAC4Vp2byy56SBuPmgCT69WsqDiVuWXQu82J9Kx6WJ6JsfU6GeebgL4TZezEvA8t54tNyskrC9FarBkW8Q1eus",
  "key7": "5cuc5QCLAgwwSinf5E2gyyFN3DVp8rkFwaL9M5Fw9vphoiBJ4WLRSwNZ8pZ3nwfGGVvXiV8qmxNN8cwYnVqVdd4F",
  "key8": "DbUFgpj6KcszuvgFjKvtFC4aQgkWQDtvQd1VuhwEqgdazSLGDYgxzYkJA4DBcfSX1CJqf9ehx1XBjnvJX18padK",
  "key9": "8Z9fRqbtXNhf76YxqkRuwf2qgVDumoEMpqMvzVWSFBcRGf5EKdQPziqbHCfyRyvjTiQnbGfgQuWzKCPyivyUeax",
  "key10": "MJTJ3XMc6wGWwexSj1Y3kQAAMYhv83NmfuUGos8xyEY9S2p7kZGAePYufFHhBGWRDbHNb7BgdYKRj6QVPK4zwvD",
  "key11": "2vY46H7TnDfB3StapzeRLPdbLU8REYbB7KUQJVaJxdvAAZhWRC8ArtSoqBmZYgTUzkeo1mqhBb317GHyNgEBiYK8",
  "key12": "4xoLm1bE4v3JizG5PP5x99Q8NAfqnxWd8rny3xWuBk4grsnTrvz9XeK2ZZXF5HPj1zCtUqd2E6EjTtJWpPiWY5H3",
  "key13": "5c9EYJFe26n56dN25YSwEFy1LpjGAapW9DsaXbxqijoos7KoGXfn6mzHKkTDNiLtpMRW8iGqtzHsiQUhcAL2Xwsr",
  "key14": "3mQne7zo21n5N4zqAc5jrEPTpEUgzo9Eh8RyVEp4winFkU7MXv6Xv7sk73w8wRHdCyPvKgvzQnFMRQqsFDy5A4Fm",
  "key15": "5FakatMnohG9LM7xEZK2QiAVhtTwxF8JoMKHcfXUmnD5no5CXKcJj7QPmw6QERLdRWQncnVexzqD4xjy2QkE8ECt",
  "key16": "3EKYC11bgMKuH2EXGpoTQjVPs1CsaCH8HJqB54R2suupjgbHQfMqMvnu4wksoQByPg7fArxKFG7x15bmFZ1JwNCC",
  "key17": "41uWFT7juwfgXJaBoRDSTYD4QFAYrz96ZhDHcpoG1AsA8gokumeANnWZ822GZFcuYtgnHnuEGqRttQU4dhNjW9n",
  "key18": "4F1KWS2FD91f9L6xsJRSDhaipWtsEAR2AuWERARx1SaFAUe6WEFH7x2i1zdTmzfy2DJroUdHPq74QYYm9FF5Jbon",
  "key19": "62FmDxTFrjgZP4QB23Fg7YivCWEirSVUDQDgR8HcGNPLsR5Qt8PxB3CG4YsMH3zdYYSj8Hi8kBK3xgWKPKczF9t",
  "key20": "3jo4e88RypsHo9upvLgpajCD4NwJePsmf81AaMeZm9PwUrW4efPQoCY6s6GRRdfS1QYYAFY7b6jNUhQa1RFSPciZ",
  "key21": "iTTi8ThCjJrWYL3GcbYtSyEzDY87YAGgxJxrNEWC71RjfepmXXFFo9vdth8TjdcYe6SPDA3tZP459U8jX5DztuF",
  "key22": "2TsA7utETVJV3gXp8KGS9jGhWDR1qVPrdWw8rinVvt1iTvHA94roZbgMWvSQRxxyBTCR7S1RuWrmQYBbETUUBwn7",
  "key23": "2Dgazgu5jPjeBcPnKFgr3hhfYqwd4dfusaycK5PMBGgZnwb7YXJ8f6yXjHGadAVktoWFK645kYfzBRaMnNZpJPt4",
  "key24": "47HHRB5bQ1S1NJhfvDgB5qdzL6hK4Y5xeTd7zSqcrskRBkczdhP7iqqeVhD1fmRSj8nwy3zWE1Npur8FizDc6TQy",
  "key25": "51XQcn88Dkaq6g5G76WmiFCmSzJXjybiVoLFGFqq3BcA2VAkFgJ2De5u2yH2JWmgAQoRbA4m9572dNxT8HpYKTgK",
  "key26": "3boXhuB37EMTKuWvZiT1yym8BkfnBgYYUDd6Er22ztd9M3vfcFKP23XcbNoSCG3aK2Q7TgfrnoNasfeRK4X93dtr",
  "key27": "2EpNXEJ4y5BUyAYkDYbYG8bEeQ85AAUf3W57EWcJYS2v64q4EenFHkPAHV2WUvX3Xqv1zRiPVkTemhX1bZfC4b5o",
  "key28": "3U6ZQdnYhEqCqD9Cku5oBLVaW4v4nwjGhrGHHFRRDntTiAL6wF2Bs8o7Bjs19LJ7ciWHNdt2w33UNs9VD2SCFZz7",
  "key29": "3wPsDaGiNheVMR8AqFY7tvEbGxSr6WNaub5bV7mczTHhsWujfrJE34pEnSd4dXf1Wpr1B6Y5MMoEHQvTJh36Cvxc",
  "key30": "5vkZwRhnxBFktkNB7uy6LKT4LNZSAgqUfLNgtAzHjwTob2YirtiCRagCQDiivxfJEddCVsP3bwyvQAoYn2Rkdg3q",
  "key31": "5CJFMALTii7MmcuVuKQCayvPjSzL5EqcLwks2n9ZAKgnbXJhpmuZpu3QbYovBkfyWbMyzS1fhTM85Sorz12Vdk7f",
  "key32": "4FrYUGCXRUKFsrnuZLS2BahePHCmQ1BJ37RqvHzmQrFeMh8j7LS2EijQ8y1aRSfNygzvsTckWVPL9yPBLVXBmSdZ",
  "key33": "4dYXvYxwFhDRktN4en7WT7o2g4tp2SdacSZSbY5JHJpiX2UxzgWAEpVZB8Yx82p78ozF1LqrVCnkzUFFS4AV3pRB",
  "key34": "3aX5C5NAV2oJ3KnFTzrgQsfsLFvaqh9Cmy3vf5gkw7qdoXbsdXLH8HLEUuHG8D4t5YpVBJXJdGzqm7frKXbHgB1t",
  "key35": "Swdms7rDobLrmwQTXknn74eRbyLJs7sH7MdmeUuM82C8ZCXCKB3aJPqrtj6Mx3XPhNnkHsdb9HVjSm1QD93mB6y",
  "key36": "3YPsNupYrR2jwUYvwLmLzqebLmkPxFHgVCqbQ2g7HB7g9cT1Pd6bUyiiYT36T2CrX546LAmHzR58ytgnVg7Peqhc",
  "key37": "4gZpE8HfJfnwNRoeC3gqQNaNWL9BqKPMwhsyQcHnA2hyNKQBfe2f5js4g924wP3NJn8m5qcTvZUUB1RgT8s84nRF",
  "key38": "5s8gLbpJEtALrFRDwKPrCcgQg9q2CPrYu9jCvCCTchqhtwZiGr4ZDCknG73rQ7AfinD98qZdG87vRwW5avyivNdc",
  "key39": "5hpetXtCZauu2hq8Kww9b8dKq7hTwfDDksYJuzYZPHEpWvFwhnN6ujcQB1zcsc7oubiCHEMsxTBGQ2CBEaw21Y14",
  "key40": "5yybeyBvaZc8MiBwqQVwiEhify8kYYffcN7P9qsLGtWK7Txyd6goLKKZwR81sbs6VQpMSSCaFzpccaNNvTm3b4LK",
  "key41": "5xJbx5PsnjAQdMwUhJd6NJC2JWb1XbSfUZZcv2w1g1ip1qjS73dKZ882TPfBzfYm68wrGiukZywjc9oKfYXGdBza",
  "key42": "2hs6ssgpoWHrEM84PyQVreeFehRZHVmH8c3UZCvHK4drfvjbqcWvrc2joHT24q9sX3Ub7jCpzhXhiAmHMA3LDpFA",
  "key43": "XWYsFEVJyqN6iwNkBJgn5n64GD3bsA12scutgj1Ynr1qkJcKXLGVQQnDNzYKidKThuUKGD7mzneHRYZs4By1TBV",
  "key44": "XfSJYhLzYGPmmQiGTbhTjksqLxFXVUKAwLFLbG2gZd1vgVkMG7WYPBEgLY1M14iMmAf49GTzgYhW22sHxbpM583",
  "key45": "yp6gxjmrADVjfMh5pRhpQgfnANMJqoDc2G7aYcDMkiLcGhj4NyGTs3dLDELo7ZgptSsLrqsUmHLHi4SJF5dyhR5",
  "key46": "VgKeZn9y2PACfBuMhreWsbe1bmMM9cT32PYfLMAgHRXp5gvio93tLAvRb4ZWaknViJNfo2qioDrtcZYakTR9fEJ",
  "key47": "66Gy8QMpsUfg1uQkvLcwcVCC6x8CG56WBnK1tZ8hJ1wXiwhfNLjppa6HVV9EDciyibpHrYtjGUfx58bXQh6iGN3P",
  "key48": "A21knss3zdxVk1fAEvWd2pzJSw8hBSoh2K4fjSjrWDtHA6hb6SNGNzzcGv7hKkLWSzU2HqhgATvWPB8s6EZ5rp6",
  "key49": "24nBC9Zvbf1rzSMmDjra1TYPyvYipU7Z5sgHHp787FdkAMXuG8GfaYS46LP1zw6vhrPQT1wJLBB4Zi9Nuu9pgUG2"
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

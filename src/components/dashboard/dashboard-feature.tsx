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
    "2RjJtHUGrXDNEWBvNHeysZ73qNoEqymGFA2xBniVznrzTYBxzcE5YnfszvJr2M8ShETVTW5LzPpiqYc4s8ePsf5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbwKc2hEt8kMfrH4UhhLfxR7xKSfiBdEkitTHzrKGSs1TYzXm5134X49u9wjkN8Uu6ehArr8G5zHPdZZTvAv6oe",
  "key1": "JmiPr38Cy1BanUB3LAepvCrJ7KB841VV3G72HtsHMgi3YfqetBwyVNGG6eQVp1CtxAmyep2HobZ6QLbhh1K1hcY",
  "key2": "4xgvnWGhV8HFuMrPPH9TD7TGKWrXdN99ty1ckunYpG9EBpBeQX2cjjovNSs2856KBJC5drs2bMqEZzkVvuScGb78",
  "key3": "5bRi995qgWixeuCk6UG18hNHtKTesPs7zCnVQL9PDsWGY3a8s7rYj7exWKNLHJm2EFNL3JTRC4arHSeCEZXPm4Nj",
  "key4": "jFRGmyqSYKiqZTeiWJXE4wVr3ChgERVCNxmnfJgQFxSAvcUAENE5LWjsQFYQ81TCfagJsn51BeUhK1wMsRSbKfa",
  "key5": "5aYVBrxvWBxi3ovkiEuxze9n5XcD7Rx5YD6wStLqA2pQVngRYYty9a6dwafL9bSe5PghbGyw3cg3RbMdxqD5zq39",
  "key6": "45pyNvnmyMVfQDWbM3441YvQ6nvVB8XehojzpqhQSpjESNsYmBEuu8auaAjSXPA6NYajgCwRttWj26v6JnDXRrFF",
  "key7": "24eU3jF6wCzCUAvGnpFjtos4g7ypHxbTnAQ5UbSJAR9UXjysksU3wSxieqrkMk8SqwuBK1nBY49ThLNYqveoMNrP",
  "key8": "4JdqwC6AX71JFCAjydc4CfMjsDaDa9Ej9j2bV6ZJVf1gMgxg3rU4J1UrhJVjuNLRp9jP7YD3JHq8b826SDAuXqP2",
  "key9": "2pkrZGE9EFEqP2Cb9UzdRnmSjFLNEvWmBCUdPTggM19L2puyPurPkWmKaN7oEfPAcCnqYWAZLU73d1SR2wZg1aUJ",
  "key10": "2z5Ybp2e7p4gjRDb8BE9ecJ61G6FtXPswftpY5FVaP92ruKeirq9imFXCiGZcM77iXY3QbSo36iNi12HMkyoe4uu",
  "key11": "5R5rvT38D97z61b6FQi1d7mx8b2viMgzhYeX5do8H3gepKa7k4MyroJfgJuMAPFpuCEh5AgUE8F9bcVTGAndA5z2",
  "key12": "3CHqQZic3USTBizhYFhNUJzSDAucGSSZmCbR7Z9VT9w4NeRDUxkfVbfxARxQBGdgV9D956NbJQfdffLGUxqhps99",
  "key13": "3c3SF1jE4MPHenRYt7Du7tGMGv8NvDorJhA8hEKgxkWkD3fvc85KmAkgt5fKqh6XePezYG6vE8g7k6b25MwwgZYh",
  "key14": "4YtzjWRUBoqPKuev87CyNTJYoLyCXvJzuwziFBre4uP6zKfggwaPpkEkyGcqpfZTZeUp7azQrSvyjXDBfNbzFNp8",
  "key15": "3KZoYtBx9BYQwE1VYpaDPMZPC7ZWF3f5fLyHdW8vNkNQb8AxqgPJwGiHXJUMDoRPtXz5CpWi3tJuwbVXaWm5mtmf",
  "key16": "4DEHUvagStJ3Ez9EUscFmT783R59aNTh5dCFPMAYLQdiuYJsddeWhEizBKpC81fBrnkUA8rZGPHEbfx19fVnEft2",
  "key17": "ytwHoRmUWnSK4gREWEz2hNhESivxJy3zcWskjg34DQuyQPn27549n1Qp5rDSfWxGnXekr4ohpzSF2usKXyNvDu7",
  "key18": "3riRbpzv21UHdfcvgtrSou2TUMCXaUbqoE5LA85V1dBhodtu5cNgTpCA2s6CS9WtgiL8XtAtJE2htt2XFzWQsi4u",
  "key19": "62Js4GqVNs3cR6f4224pujNSFQEDFv5zvfKkJDwy1W1nyTupmfjFbw6T9SQ75SjyHWXpMVWoRyG3aufMZyesdkgW",
  "key20": "64UEyPC6GG91yn2Q1VEX7jPBQdq4xXjAEkjwUpGjSb7APe9ggtEDFanH2q8YM4zCN67xttmxQofsa1wWZuJA4Gko",
  "key21": "3GFJURkhRF1jePaGBV6RFNA8SERozK65yQCoD7Hq6KfiwVha26fKfyy6AURZZaPDeyraLULp5B5RWLE7aSpTvQSc",
  "key22": "3NNnynWLa2Wkt7KiA7drhKJQCFSwWo5W9TKTLt4Z8xhSD4adGhVRoPzu6tDXFPd8uVJjfxhWH5ix3RgLxjYGXQAF",
  "key23": "37sq8q5YmDtx3G3UcqCsNoTB9b2oLWKpWP7XBWZp9M7gB9bBqozp41RvdNpTPhmiG4u6CGcAx79cn6V5EDdcxAdZ",
  "key24": "2HTzotyEnbj9VBvMQgkbxfs3h9LSfLiaHhZh85qJaZeSA5rhMs6mjsADEJbGwXzKThLrv6VdtZuLwtJL4Ld9aZMv",
  "key25": "2uRhatZqFp7JbK6rLJGzT8kgzNCGyKnjRNRBvSSGxvsP55gBGu7khtr9MeEYZHmikhZSGd1TJn1MhzhvcoEUgmm1",
  "key26": "4ntmK3BMXksRWHqxx7ocWDesxV5GrSENDWR2ywTaVPdqUkejuvHmXBNc9MfemECJ12NNvqmW7tTJPkumtuHrujAU",
  "key27": "33DUE8GQK2RkyCCNjpkZnfjx7YP1Yt1CuZzyu45wrwygp8RHiW7ohEikFAQ4z58cHefF1UdQ8GFLe9Ss8MaPZff2",
  "key28": "5Erv99xDGPMGFRfkU2fScvguzjDPXBEbeBAs5HeLvnkzUwvhcRtCb2VgF1CP9oUQ8aACFnJ8X17crsMkdpUutTbA",
  "key29": "GRkSDb4i52mGcd2quovoWtmFPNopc9HCZRN951RqCBpmNqF6FwCSnmmB4aAypMTXZYJJ34P4JEnDqrgJ3ynnmqn",
  "key30": "47UpssbZH2PFsfhDCrGKSuHLFCe6EuFeBsZrAmuruT2TWwZsyY5CiPFTvm39yAJQL1HSfqyM9VJ1961snQVagZix",
  "key31": "56QEo6UFs31W5hx4nN5WME9f9KNyK8sDhfuLbb4NCC1Gtxnzi9toonTR9uuDe7JXSQ6oYLhrAwyTYWERboAsELcd",
  "key32": "24prxowqtZdJN7JiqZiWzK76YTqNhkRsQMSugPzQhPmH8eHu6fdD7ekrz4ET8R1Batko1wq24pBGpcpm7vFJfU9W",
  "key33": "35tMJgWtLBCEKnLPd7tLooYLrEhL3WWgR45GgHHJb5kTEN2zJQxtPoxeHkvgVbW3o78SF4uVFqYogCdddRu3Q5o2",
  "key34": "5SQsy9SNMSuCwdbJsMz8uQzccmFq6rYWUzX8zQGzFZBwWQmYBuZumtxReWQkWwTWs56o7HSH7crwr1qi8dS73KMU",
  "key35": "v4JJz8N1ZRX5EaReo8u1oeFYQTXtBrT9QZjrNxvEKcRcH8wcfZ7Nes5Z9jT3xrxK4LsNSE9EBbLJyBjiRC228na",
  "key36": "59d5fTg3uDBgj1B4cEwS3fzN4bFVRd7VwysgBZGmzEvfiJFXV4afit5cayUgkZfF8EFfJxsoWUp7PJ58fUjpdE7q",
  "key37": "Yk9kWSMtEH9jnULhayEuiKfxZYWkHmTZ54NmdpDmM3gG1F2DShjxPnw92eRp9KBsViAznJ9o9ADSWRUJx9ArWhV",
  "key38": "2ywumH5F76Uk9eWPLVyCTtCHzdcdXP7uyA7hRiYdAPK5xbbWQLXecLk2hqK3RBiGKs19hDsCs2jtH5QRGn6Q13ir",
  "key39": "63RBXFsHHdMdnhxGuQ3umQtEry5gBF2vwKBiLYZYN5bCQbQF4R4ssCdeXPjhZLb1Wh4URYbL4MNH8zJLA48rXPWn",
  "key40": "qXDAVad5GGQ4uzpBdTVg3MQX6GYyNXNJiX8buEr9prGvB5JaF4rJQp43q81HWHTSLJryHRosw4aBBfuaYHa1oBK",
  "key41": "3Fbn2XcgAiurfnnhQYteuqerLuEuhbCd4bNabVdANwr1Typ2XtMCtJQTPw2MFHVqJ1VJfkCsqwPybH4X447gcZG6",
  "key42": "3L6wfbG5rbpVNGod8XoWJxGyoZXsn1CFpEjF3zg52m5U6vbV7Apqj3F6nY5kqYxqgzCFCaSueWiCh6ZXEvdrRBv3"
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

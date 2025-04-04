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
    "FAaBqPACsrQQKVNVgTaBP42G5zb6sqyB1DddndcRzeBtqYtMjY4pgTWavEmQXjCMfmixK6QcSpLZdSPzp7fbfNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o8PHgs6szViJUPULzaALn9mhRLDHTT2gosQFgWRn3iGoWziW8ywsgRf4e4TwHTSNxnevNzQGvz4v52SBt3pDtrd",
  "key1": "2DxdLWr3g8wpEcWB8aEfnYrToVA2gVKZpAfjMSzrFwUZ7Hkju8oDZeCPLZg2RLfsBAW2wBLCqdMKjpRcPFt8aUJ7",
  "key2": "sRutkCnR4sCL1bzmbsbkMvkBJuxEy2xE93LTbavvhtpUqSQTT3Huq9GvbzxAtMFEYrkiFhonNYTQGsz9g7Cax4v",
  "key3": "5u47ZHkbiocSXVsqp81srokHaUxdqhYkQ4HsaYPsmMdYXuvZUuybxUFUVPNLZoZaYgnFn5Wrf1732V7Qs4nE7Ar3",
  "key4": "4knMg7y3a6HiBGNsvdMxnVgN74u7xaAEYApcAcVPHkBfWkk9wQ6hZBhn46GwaSioR4sjUVa5BHJSAgawZvwy6Zoy",
  "key5": "2VomWTAnAW4Jjr38C9XtqTz1xQ5bnopi29GsuvrzcZYKh3emAWX38ShrwdLK5xjWQNYb6T7XevgJz1F4Ha9hetD4",
  "key6": "52hJePh9TwCg6zCFPBPK73TmqHtfVGe5zQUXa3tuQgQhMnJJbCnonsZZ4fPaZfjbdGTFi1huSziGSoENzTkQFB7T",
  "key7": "4VUSHSttTo8uww5wCe8YfKvfFpKhyE4byZUpKemxapZKKGZ4ui8Ky7ndbctbcnPRUVqf7BRuZ14DmrX5rAgTcJ89",
  "key8": "2Q3WrZQmua54uKVt7myXzno4EzJPnfNFCBpebUyPCuRxawSD7N2ffEygmiPT13XxyRCSAPoZ7413hiVRN4GkW85f",
  "key9": "5PgmpFAq8eE9a6jsqbSe5NCKYAcAopAvQ5NfXxA6Rb7G6DKhut4pqp5vAtvQjL8UTaGZpKgnTcuzBsqhUEWsLcQw",
  "key10": "ymPX1Yn1KpFw3isHZvwJFzm3BGJAzsAbxU3uYnY9npSUUqB64B4NGskEAy96GmGhCwwLj4MuJ7u5yFiLvvVDkuJ",
  "key11": "uCXFxrDS5GSFbUKX9DNKKuodjfTuH2UobqD8v4MmN6QNzYuVRK6E1jcJa4iYxMid4VnVf3Zm8gWv6FsKEPr4VgL",
  "key12": "3rxST7qw38WvDpF7WxB5KSr8HyZrfaMxkXJVVMG192o9AMMwoEta6ApUd2nowF7DpTMpgTw5YMkZj3QsYAds3dLN",
  "key13": "DgJNz6YHji5NtHZDvipFxXcFLBM4goDCxzNSranLSpr9wf6CMfcVGPWEmGRTYMXkyCz6VnSAewTiZHaTVgZhWtX",
  "key14": "48qzAmn2e83RbuEv1GhiLxxqrSy81ckDjs2jPQL2hvgDBuKnbwVYNUcDw5SfGj1Feg4ZBFqJVpVwYEjneaCRE2ER",
  "key15": "3EBfBs4DoojY56GtGEgR6WtyyH5ykY5mVSPshFLsJWVnMimbkVZdwGKiqncH51PM9MvVQwZkmHHYJK8pvSYGYzeZ",
  "key16": "5rxiWCzWnDrvMLPpDsmhnvafAVgqwY1fqu1fN3d3ut9326YuXCgoXWrja5Pmah2JGodFKdcfV2mPfQm6ayf5Acya",
  "key17": "5WwNznDx5im7oh9SuxjraYW9gimDnBfyjHc1j9D3jQM9Bn2kPvgTtYW9WYP9rrrA638w6RSSdtMcvm8fhkNZqX5E",
  "key18": "vVT8Fo4NbpuWu48qqC1ML8riyGNj38Vf877BXBMW2gXpxjCqo3v1Q4N4cYzATjyo43HanP3YmZaDX3VzGmhktgs",
  "key19": "5DY6MmQMsAicoiV4AV9ATWexUDNGhy86VTdUQ9JiVFGrC74CobMtTG4ERvxjUg1vkhR2X3FXTUmGZsYZjcnkXstJ",
  "key20": "4TEqUj3k7g5ZH2gNHFLyURMVX6N7DMSC9PLFRrgiAXFAZf5Q9kWLp1R4XPwcugSb9Fv2W2Uy6GemQTtyUFb5ceUN",
  "key21": "38Kzs8cona2fLB9jihuqeex8Bd4tSSWJA9AdRgWnPJU2goj98E4NVYVawVMSDrqzUJSnsZawGDYmwPaZABz2YoEo",
  "key22": "3xJAsEcFBm7WoTf1Byixs7XWFBhvniwzoEyR1UkixymNaGmn2abYDH4P2U7PnY7Jv5nv69ZLCYf82VjeTNZAA8Qb",
  "key23": "2TQE9Yk1Ck29q61DkUWrZJsKuJKLXaqapWrG26g1J2ZXura1rT4gooEUn8BXgTb1wBTRUeCmtKhm8Wt2XEfNhuax",
  "key24": "2S5B91ZT6esgv6wjDc2RQzuQAD775mVspZbdPqmW32E4Ntr7EDbktzbTZVV4zGuNNvi8yC4wioZ4iHCSEWWcY44k",
  "key25": "MzmDTJqaDpZHhRXveetQNaAs94yTRxw86to9kYeqffuwi3iPz7E4ggYmGH8TvUf4wAwyGWDHBfJGRs1VvLEwz1B",
  "key26": "4xFuAyrkHeXy5516RDhD6XhwCQZ1zRmjexuQw7Whv3cz9DYgELti1sfR6bRzEeNysucQUydcNx8DuMsxg3PadA9j",
  "key27": "2qkmoYkjqbMbJgGJqkcEKF7Hw67UAAuatQSLiHskzQZjpKkDs6o1NHGFiFzUfVcJ797AGmTv2v7EDXr1x6h2v6fn",
  "key28": "45jzGwVwrjpNFidtmgQHxSrqSHhUM5ds39pqwr2JpheR2j9Unp6eCnR3VGB8C1ecnjYss6KBaywNQYkxamd6Mbjr",
  "key29": "3SSvxwBvxgiDhtS3rr1jJexm9FVWgswZH8tQsaVusezbJGMyUhXX3tA5FNqZcSvzHXJj7z2d9PgU8GX4Ef5hf8L7",
  "key30": "5Qt1QVHTk46APzfiU1gDW4heFL9mVx53QdwCFEkF2vhTNNcZaQijTq51R11zRG6cZ2Q2yknoVfRwt5R2ygLPpSxc",
  "key31": "HgXVUspAUD9ZuW1KEXZiZ1GvoaCEtGWqbGG9y1w9cg5EyAtADfPaDyyEPLaKJfssYs45c9iH7gphRu7DVBucAMS",
  "key32": "7bMKpvtepqoUFKzp8ALwBrxd5d9ufXUHb1YALPAHSi1nDhWuFtzpHW3ibhQJbBzsB9x3C9reMDQmv61TGoYqefS",
  "key33": "3DjBSuu1c9hkyuzHbNiNxXW6WXuN8HH7cT6pHwYgPPYhupcymBcGLQRU3YZoQjddL7FU5BYouxDcrupK4gEf7ZGd",
  "key34": "23FkZMAJ19D7y6uw9Lip5FdkWyQxPv8GrUe7RtKUxF69oUrdw3tKGVui5oZtHYpMUSWC76KdhXCZ1vLAcNga2emN",
  "key35": "4XgKFmjfKJVgswZWW4KcA9dvnHAMzRrwvtcRaB1Fsgtv4qrm4Rf8dZqAz3w21M4Xs33xPUJrd5mykN6zd49y78k3",
  "key36": "2nLDC9rRicGVjDaf1HYshz4Cob99oUnwrGDBJ5azr5ygnwt96CcBcWucH2wNmoXLEiMJn1BsgoxxwRDbd3qTWcrL",
  "key37": "2ZsDEKL4bZaPtyHKXMBUtXFctjx4YEN6BMx8zuNE7vXXygGsnaxwvNfRas6aSM2xFu1ge88eENVDocexEjog8SjV",
  "key38": "U98nGfdfnptjLYqVnNRVQVEwdEEUY2ZEkKDXDGxFyMZNHDLsZKGNRUMvri39jZ3ESfnFUsbDppxuLPtA5BmDWhn",
  "key39": "3N76QKGZsM5gCswv66Wkwm8o15ZHqK9aAqT1jNFj9P3XtZ8WBGiSzSjNhmvyxdsSBgca2WwjEb4H66ryJdB8wBcE",
  "key40": "2GaEpex6jvBw61isEzFN7qgz5EFduEkDphkTpcLL7iFHb9VQr9TSz87i6UvWfmTqiTZx6CPEieji8A5wCvney74h",
  "key41": "2cdv1TM5LsaoygzUcw1G6uiCowTGcbwJxCsnowEKLyEbijWhyeanQ8FBYKhbUTX638nibfMzgounip3cBL2r3NCB",
  "key42": "3uEB5vvcTdSU7B76W8cWcSJmocuXep7YGsAyb1E9CJ1WAxisiy2MR3aHjNifHP5CxYFDNKBvVBcy3WmCCeRTrhwt",
  "key43": "49xNaXytFWV64QoBSrGkG3T1t3467pHv89TS2oN52RGgUUESYHBzEHoHTJD96eiViqxdV1YUd9hnVqkSzm8QojF1",
  "key44": "58GJyDxt2oXKrvVrGKF4dnXfiEuQYGtJLDUszTotn3r9eRBGr3qtjvNf48ei1T2DMhd8cFUjAbvKgAMXAK5DpYJA",
  "key45": "QZjsjU26UGRrzRAJhrdFmbg4QmVAy5uQf9CnNqJ4ib5TqaCzPzKxzXy9TBtzbQ8N1PLspA9DHSuxoFwFiyiuyoF",
  "key46": "WDGqScuvxdyR7rsAY2d7qHQTW469bHyF3smQ5FyJbTQHdSPHCNVLqGKbPJo8pieDyP7hnrD6j4AqBFMf33icrxu",
  "key47": "vqngRx1y2TY3Xpt3hEqNWWC4TukuC6mktYmanZpKV8enSMp7j7VCXeRhmeq97rF4EqKh1mZytwxBMZQkFz5cJdH",
  "key48": "FMmcFBeBtVyKERaMVkiV6eZVygbUbBUyRTi25bdoNn76z5as7BJKtJ7cqwp4azZ9nyjudK8AfdbVjxdGqkHrF8q"
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

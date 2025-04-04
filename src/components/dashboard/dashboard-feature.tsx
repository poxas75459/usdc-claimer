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
    "WH5tsgyT1sFeihdsvestFjXRoXDJct7oQ4hNqpkpw648VPw4fnuesUuix7FeqGYSDzcgdbEMx3QqxLaowsMoJPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dG44jxiXXgpsdapZaefCgNt5qbVN4Wh4UVCo3FpmgRtJpCSqZAG3Q6TJkg915cESTe4rFe8SxK75wQwrDHVcxFt",
  "key1": "5cSR3z9YEoeq4k1DNKRrGsCgZrRPQftXadFuLHp3gJi3mYyFK8XkcrjEVkHsVYJBuj9CDu9cYFdXGaELxiT7NxBN",
  "key2": "3ET1Q6jAT18AssMZ3z7ip3AGy3ofCYm4pXjTQeyaX91ayBHLW2ir6SEWJGsZM2g27bkQUXe6dkb8tCYS4wN5NcZc",
  "key3": "3Df8grXuf1hQRoWMaLifLP7eTQzH1NYnbyACYaNLmtJxhshNetdR7nuRTAp5bS7zjSm9BoJDAJEUFa2YPFRTWd3L",
  "key4": "3uZFy4BYYWWAUjpVE32XmHbGKiEEW5Q8pJFQ2oViNDaZCZjqpYBdKYVi1FuTVF4QwEimEHGkUj593AtPESt3if8e",
  "key5": "22LME22umQe8RBcCoy8hdp1EFPp2cJcA4qrkM4vWELXEaMng4fFZzKzSBjTa1rLpUkrdUm951V1FYabLCexJt94G",
  "key6": "2yBXyeUUos8jrsLFussYhEqno8vYjU3G6WwGjZimRiBucCoaKMsrbvrnt2xp3kg5f1myEmdnPgWazDS6oZMtcbAf",
  "key7": "2RABEr3jFeMrwEF2Nfe7MR97EpksSaQHK83bjoTBoJ4a31RqXaqZFYv1zYyZLVPRTnq49veSN4pDEPz17nH5zuW2",
  "key8": "5DdF1CpL1naCsyNwDnG3x4Y1DSFwHSGxfzP4gvNaLBLyJkZhgzsgbaPkjz9i24KJCmb4rYXufLPzPoV7qt2fNXY6",
  "key9": "2j9cZy91dZ2PMQjQiM6WXofTJtp1W7vKS5KsEw1D8XL6JqBvcXwe5M1QSMjaLXWLCJE4qCkseHpD86bPfZTwZMjz",
  "key10": "3T6qrAFra1JvPLSKASttCfzatc4TZm1MA95YDaHrsQFf6kAzq76rm3Rng1ftGXe1a1oFGd3wNAuuvtwA7RLBJJ6o",
  "key11": "QegAX5XfVPLx5gKqdu6HoMnyxwm7mEjxbziMs8NixbCPibnnC7hRi8wo3CzaPd8bb1ZMCcPCmz5sZWo8ykeYQpM",
  "key12": "xtnTDeRjbL7QmrJWybfzvAoEqQ8TCnwCCeBrtwD6PndH25KoL36DYJBSEmC8God5nM18EjtPQcfDVADcGt2UYxD",
  "key13": "4KL8JaKzRWGAJEWNVV3cLimbaRRqD33PGPwQjfgnYtAMbgMCpn1b5XrV1xMxpHhTCRV1tVZhhw1jPerqTGAhtR9E",
  "key14": "3TfZ8kUTaKPsuSrHzETta4dWJpTojPt8eAyq9bdB1bdVZQamWXCLqxTKeJW1Efv1MknNGRtDrWJ5Hxj5WHHaK4vu",
  "key15": "4Jhw8KYmJdpoCPsp5t8ePDW8hNXoXgNYknrXx6xwVKwskMUnmrUPY3ciFGdu1aQTmBPe2Gba1iAZi77ejiBnwwYA",
  "key16": "4BSXQgEyp6BiqQyoKqgWkTgxoQ8wzYwcCF3FrDey3gfk1V1HV9LuqLyXf3ew4LC6WSBDWcQyrsH5Rn7qHKPzGumR",
  "key17": "2orzP7mLom7xjJEcw5gLFKRhM9eaWs9iKvfbsNBieNa9vT3c1inw7hpnMk9KKF2RtLgLAj2d759wUL18ZGKLPGKp",
  "key18": "THz4EGBHptnJJ5KAvTexSf9xN9EsqzZXwhrTTmrJNfnnG7vCLvcGL9bKTwCw9ya5nb57ffR8spNXYEFKE1KcerL",
  "key19": "4qKunB6UMc7zw3eWYirTqkxrVMu2VTuELQyKQJT5s1p5Z7GW6MWhq23FdoqnFvn4ft99zVBKSq6f1APF28pVbL5o",
  "key20": "pmLcwgZ1vgGqX5tJDHsjL4FqBn1Q8JDPfXbyV3PRH91GF44G74nrbvFrdgVyLL14gbtMwpZRWeL3upuTV8BN55T",
  "key21": "5EYBYLAUEmqWZq1pt6Te16d8HgWWLRdFCKcGHCMXKrKnJ77QkxRmdTeTKNDMWUcohJUcZc3WtNaLgBXPESd5uDcP",
  "key22": "2P5Z7dhXmmY5L3hcvkiFa9mzT3VVYyPxqjyBRR3G3VjS8isiMVTU8PdKaNVKwZ7y9VtFN3tGEpQBPzFqc5Kpabb9",
  "key23": "3H9auz2XKRrLQa4KUyaLSBtKcm6CkSs6NNGGmagHvo28DmhheiGzw2bipuip9BbMi8rWr69uZuQy5twCeKM5M2jq",
  "key24": "3yGvwisML8jAbMo6Jv9QtSfhoNeBHXGGNnErXqVuQHtXWNwrq92ztfr6FeaDTw92tyKCobqyXf1oQNHTVSjRvM5o",
  "key25": "5dCTiJJSjEn6pRnTXHVVPyfGxTWByK1KqHaaBkgXEQstS121yoSWftVFnUWUs5F2gJd7EhA2pnFzuL8hRqiPBE2P",
  "key26": "XW5Aa1Mf7WmbEpVg3MteuXKhHW8mBAy4iNrymALhCBmNkmHGHXXQTCRezpufDTfnHJuPMUchWfepKV6rgzYR1RH",
  "key27": "5f4kyHPLCMV9s45siQteGU6GdBu3oChdQHQRA8Q2TvbHrUQQ4u4Sd6AB2zuuukPu2fSenbhKLhiHSE59oFGDDoFk",
  "key28": "2ViQsZaxuFrZEBT5FYvQ3zb1HALaQKK9Hp7EpCBL1fxemPFfAdkTAEBehMdHKCMtQ3rgzxqxMkH5rvQRmSDwt1se",
  "key29": "3T9PVn4UWdP2CNkotuENwZqU3LsW3FurUNeYLD4L4ZkkFbmwY5zXFZDVSanLjDH81Dohx8wjNUQ6PgewYT3kd15h",
  "key30": "3h9LBhs1v1VXiad84RidCVgfVnTpALvWRfjYG9sFuYmZKyJn2kHABp9FqS5zvzHSRJ37etBsoHEfWc1k7NL9Nyjm",
  "key31": "4CGWVnvQpY8W6ueTtgRUGWLHFgaCNJ2r5NoL1V31DhXsjoQp3HcBfft7j1q2wTK3j5GDuQtXR5cLfS6uuKauKWYj",
  "key32": "2CG8VknBJXD8u99jVeeBzcvB7RsfeDGm7HqfGbU4UZEb2v9MEra6NvMJuuntZBWTmfjSgYNgBWkRStFEJy2dMwdT",
  "key33": "43z3ZLZSbbxfeX1arXqL6nyeJFSXoJJgvaURNQoMPgEPgTMCsfaWXU7KWJyniSz3RfVHVDwkc2MFR9Z9pTAuA7Kq",
  "key34": "5Ro62WTmf6vkCKxK7VfnXcWbH6qfC5vnUiq75ytqK5o63asNmyQA9Xnm99MpCybig3ZHrY7HgWkEdhgzF1LYMiFw"
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

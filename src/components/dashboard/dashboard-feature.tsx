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
    "3512QmJ24Bt9f9UsctVgbcSuwJcM55Krk6NC4r1mMA8zoU3XDnzkKjoe3BHkLrNhkhWrxTYC92y5d7EEJzLpiUsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RyQeMAREb5vUF3MpZZB6TQytaucAZaqbcxsm9z2tWsd6Cb1BpSvAJaFiYGYh3enPUDWfVEHAwqwDCcvs3zPAK3J",
  "key1": "2n2eywBSHsoHLRXZ7e7ekpg2RyXEUid7xciQpDX2KakHWG1j8dxL2hRjRmYjR3GCojhFPWYFFoM4bC8gVY9xTydQ",
  "key2": "5Vydm8KbXqkjcfK4sWCGXANcS58oxANtd5p52TNFcispoVPNAnGw2e3bE2RYSx1VekqpKn8WLLEGu81fg9M8j5Bm",
  "key3": "4ouLfACvZehuTbrEcPuerC7NqrXhFnut4cAz3mNvHhNW5516SvQZJaxojMdCVgha2L9LeBGzJY9Wm2gdUgTSSXVE",
  "key4": "5LH9pKYZ42VM9M7ys4sBb2utJhaLXNEZfjwFvh5xUzcYz7dXbeNHm5zoheTgAUt1pp59iH999PvzhqXM87KUDPgG",
  "key5": "3Dh1uvJFQrQyVKmoNcPeuR4zML1FGsrEBtxNpouSP6eTpyDRodjSZ366PwVEGjczfhNxKx8m696JLKnwaHD8uKym",
  "key6": "2nov4yy38sEtX2SRwGFKedAjAHZs7fgQFdj2Atkzcgi5iG5Xki2FUWy392Q8kUVmKZGmBfqWXhztrjgjASKwXZwp",
  "key7": "25VZvJMCNgz6SWmE1ouVjnHB65isHYxX3ci161HfvSTiXW8NLG4Df9pFVLKmq6wV6YuxJEKmT2gNo9HHeAVuqaDm",
  "key8": "6vCRnxjzNfnzmLh99x8h1Ut3k5YmMSxcUEyFt37ZDVNEJftAwbPUyPbE6r5cnXE1323CtQPVdqp4fHfXPf6ydP7",
  "key9": "4XvKWysGdUWa7b2UEt9ncdMYowyJyatwJDzVk7VvtKAwoqXhRPtE9qYxy1pneQkm5ZNJyjdc7GfqrGTKtgvhA4yk",
  "key10": "3eBZokzuJaN9s6BzMJz9Xwbzj2HyM9CfQKDr2WTrAxQftHfGm94ZDuH7VR5aMHeiwuYyxULEB5Mh95LeEPSqodYh",
  "key11": "4rzfB2pzLQuUoTiaefFN5ZsmmjD3CZ7AwG4EKJDSm2z9KfLC5VBSGEX1HTazEkAg7aVrTLxdmAZepG3s1hWoSu4w",
  "key12": "51xQWkJF4wzqF92pYRVLStjvbU7TLBrBLVxSSFmwEwLQyX8P5SYXU7cMEFkWUxcq16fetRSySifrerFKBSBBgSMe",
  "key13": "6LeGk8vwaHXTJ68YFRjnxWmUJRJz761WZ68uxe3yi6dAwHRrC8tat86LvpskqsBNBxQuhDH2Pwv7b2vzsr7WLAh",
  "key14": "4e4H278x6ZRHtLG9JruEeqERwBPiTkFP82x1RC5N5x8sxWmd8g6A7skFKaDRHN11bgnS7rbuNyYLNyaX2AJkzd6V",
  "key15": "3kNKRSAVDhKFULTSEp5winM8e4VcV9oRVAyKa4nYQi4ePjJoHXpNWxZj8x9ppayf4xquxi9Nt3xZShAZ8y3er31e",
  "key16": "4kZ5cSEiHRa7RCiTkiwBA9RUGmck2xFzXbzAVttw5dhq8rmjcSKRWp9b7vkSb9o3k6S3UpaQW4htbNwvSJBZSTcb",
  "key17": "5yusDL7PoLxmdjJnfpm7u6jVrBBiNKTXMU5LWYLU5kKdyPsKfWJHKA4EYMMb3FGrjtVzAx59HRFpBnVeinh5RfLJ",
  "key18": "3dP294iWNav61owM8BfXEd1LNzummReVo7vtFARKuAAogiBLdxDXSuNDAnw4grBJXuXStXohgBGqTBYZh1mwkVZk",
  "key19": "3yjiLUQQCjtkvRfGurZ2GsrQyaAd7WDkDQY5LbPbiEQggTqTuHj9ChYwrfF36P84CXnzQZhvejPPiDfoFtsGD2sz",
  "key20": "52WFLv3JfdLetjXRV7ouq63g9Bum88PpACtnZ6KcW441bfXmCvxXCRPDcxwUMhdQbBKivfmrNJCGm3G6NKumbceh",
  "key21": "6GLbYVnEfPmtrPTGGXRp5D1gTvAA6CdaTjmedJ7koHBuLqiaD8gRa6KNxHZE2EcwcsVFZkVJzdDKcLkUvRNkKcP",
  "key22": "2b3nRXfEWzfia4m9WiPAPoJajtTpHzTSwQLCg3VWJTWf5FvosHmW7JWveysEQF28jzKcyjtsGQxnHEZPq9HYUBqX",
  "key23": "3SBXwGLdYJQd2SPM79QJuzPGk7Ky1zAvUc3ao5oVmfeMdoDtLYnU4XL8ayPXZczzCVgcqH1hrbPBge1sqWgpHKgx",
  "key24": "2Y9DcPRVqFAXjKmh1Fc8qQrGVTAdpFn3yQhfTRKqRmoJpAv1WrKqNWxWQWzJJ6zzum39ut9bwzMvDnoPSELSLSkJ",
  "key25": "2pUkhgwZGixsdmzFdPXcYVoJPPTyrAdCUcqY4e1RE8zmxeQrtv8AiecDHigpACiZQj6t3AA7FZjWRat9Ds6SjC3V"
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

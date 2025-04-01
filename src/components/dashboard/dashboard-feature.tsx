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
    "65Ve3VWf8VVzfvdVSsEKj2koSfXATvbEwubqRTPpUEtTDTrSwHoR27egEuHCiPbGA7voHGn7eiUaYRJNCauHzBUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nmSzSqgdxwtzYxZGSJhui3SPSetX2hFvacJAisrFTzW9isDNCzgF7ehnwrbTd97u9C3rgZ6BtTnWmt69xqjEZUn",
  "key1": "2QkPxLWmFmATN73ZseFSV8WSpZueHmFU4FX8yXjWyqANmhNzcShpMj3ibvu3ZeQp5Fxc9Qtsj8oUhQnHnpicgvFe",
  "key2": "3V3ajiCwheExMvdNKu88PJN8nnQNix3A2cPFpekfVW1mDa7wXCkQ8wRhtBEoUUFzncg9Va1mNd8pb1bcgwGGQzbp",
  "key3": "5CSWguVYoPbnXYNJFpwjP27VZgjPw4ZZsD3WGvPvj7TQA6gMNYY1zznyXaPCU5JfVxDZHPYDptBSgT4UhBvREkbm",
  "key4": "2LQn7km1Yh2geFz3ceBRdqE8DjwhoAHaKV6tQSPDh7erzYWgvfNi5jYLCAuwtytwu3UUkExsUq4P7TMqvnw1gtAG",
  "key5": "4mNSmtCcVEpBT9bJwQMpN8nniHvkKkmmBTo4yA5HoEaGKnuNmMrnnQEeKk5w673ovb9kxXgzy5PS33hHKC531Nfo",
  "key6": "3e52urkuavnQs3otEv1WYvhaACQYDhk2rLXxNryZFp1r6BLEKRAeakN36CWQCukYnTneNrJpiXtE6bsZbVRNQNwP",
  "key7": "52vYEdbvE3HVXDgkz8mwfh7nUWGCFzUTduJpem1syh6tcgWw3vi3srTopjNH5WTTXDUfEf8Lb2xiU1otyRF4C2Zx",
  "key8": "2KCyZaVKbCfoeMe1zAtr8nwDXLcBGKAo1ppi1qWsfofaX23m992Rz82zWhtBNhihJ7wQeGfSGWt9H9NobanFFBid",
  "key9": "2rbfCwPxJSy15TioWmLwR68f1TZcC2asVYHLjbfPhGJQayCTMnhu6de4tpepk2TXTZoXd6sDQwLFpV9Ac8eFvCYT",
  "key10": "BTq6D175VgAMAiGGCSkv1FUpZu8joqHfJJfvz59Y6ZPvfunePLKzYCc58CTHr3E2fhdcVbMUQrxKgBTWgtvX6sj",
  "key11": "5nwDVzgEKa9PvEXw28i41tb4K2TWPx9ivUWhggeagr5FQzbVHVkYKBYBLstvJ9pvzHv7GvySfMiccATwndAF6b83",
  "key12": "4Rf2cUXqHNzK3ToYPHYZSYtEkr7eDkY8mRBC8nmqm1XLo2k41xyERrnpMv6Px6goJBS4KTSUycjEsC3A7MkQbuyU",
  "key13": "4R8Mw3cDnKMfG17pmHwNyz3r3XUJSVCi2N5jFp36UR2BP1wTZcUfCUTr2N6hT7mBkn4HiNwhqCTWM2XuCjZ6Cdvs",
  "key14": "3mvVrwmWUw7845hzF8p85fSFDQ1WU4x4YFFcoQ4tcAHDnQxtxfwYFgs1SYsC8sz5yD9UfW5GiU8N4PKUue6aszxB",
  "key15": "64FHCMZgG6mx9B2WNp64uwf8SNKFkLKXUs7WAeBKnnb8GsRousaNkDxMp8JDa65K4Pf6GG5RPoVNJz3ghuwx3EDG",
  "key16": "5HW4jTVty9pnA9UWghTreVkCAckmdatWE5rK45qS23a9Zh1X3uzyT5anatBiHQKZrcasXwELk76bFX2YQdxkBSmy",
  "key17": "2BmQXBKXjcfiDNZ6a8d55Cw7c9krnXR6aP69uWMvgjPzJH1wzVSM88NiexJi5rLnDdCwbznNmJJ77ja94WbvjbZ8",
  "key18": "36rVpN9WrGWxwp2Q8aGRcNggQ3T42ntjA1ijVYuomdySZdxCw2v8PYsP3UvNfxRivgTtnPRhqo8o2sFja2HpfLkb",
  "key19": "5hWp29ZPykjVNyjGHcmxqKQiqh65hajYbZZCj6gzdi9FkutpsAb2bQT6mX1BvpnySJYVqrw8p56BCC9Ex2arYt3Y",
  "key20": "RLVbzMp8Zt2v4mm2Pktop8FegCp598ZPybSkwzakk4Fiz7pQUyrDvtJkLv1vnE5jX12RFuLNVER1PXujisMASHw",
  "key21": "4Gj18eurENnUFy94mPdX2EcVSjqrm4nQkC4X7yv4ZopjFWR5fDYaS2cAuPKho8TWQe4VeWLTVDQYDzDqVBAGb8ZD",
  "key22": "52UgNWvKv2uNEBfi7XcGPxTau32ezAon8qSqSDFbzohFWv553MudGhyxqsbAZc9A8tWCSDv4R6jG96mAk5P6Tkgj",
  "key23": "2Q3sTKCGjR3dWcStDjg3AN3PqZa8ZnNSv3ahXd862BLiuVqVdQ33rtT2rdhSzy34NUbDYeJqfZbtHBEWaaGvUAKa",
  "key24": "22tTxXq3b4wkHDqX5yyKkvdwEFTdYXYzDUCF6mPREPVPDAUec8oPF5mwfqbYbD4dKYW5NEVJHJZBfpouHTQjF1AN",
  "key25": "5ZTnUDCyjdNuiakrpzEYt7MCjEde8q9FuWbK9uHR94G6JWt94JHssVBBPnb97aS9wBUxAro7tga78RbjTEjSHhLK",
  "key26": "DqwjETwyTYV4ds744KJsFpLQCK8Lbsk4MdnKFdyQDA3xZcZQ4eRGP1uq4sL7vFAZxAMSW23oD8VfjXX42MwDvA7",
  "key27": "39u3HuxzRxzEViinnaNNfyfAbXwwLxKtkaVLeYAzrEcsLdjxqkSDKVh1UYtNd1qSDHJDhA4BaRnPEGRp5pSW7HiQ",
  "key28": "2DUSQpekNq7Kaau9K1Hf7FvG9ysmQQv1opGmnSepxU1ty1KDirX9UFCFWCZBDydRQVjnAotS1jjvMhPHE8ncPXRV",
  "key29": "5MWRnHJmUDUUHrZo2K1HdWDVDEkK5jRv4e2vYMHKJhJrAzqd7b2Sywv4Ybe4J9wqkLof2HhiyBJ6yhxkJysdH6dp",
  "key30": "cg5X8MGbDsQZWzToLd1987REbqsAvdasfG4PC5RYtsRmPMbE3bUcG6Bgvo7LUV7dzmhFTmKG6CJNx7TLqTmAJxn"
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

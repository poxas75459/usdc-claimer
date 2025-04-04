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
    "5MuMZcLX4kxY69Zko2N7nUvucxedHCT7jUa4N7UqPUGCKKpkeEXaR79rAnFwVTtd3CjJktWytipAFGaLpJQTk2gi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FuYrQnAZU41YiAv34JmV5fJbQx1mZEofdiWhZCkcHqVrWNR5cLbG53c9E5EybUnMkQCf17HXvDvERNmCi58SEw",
  "key1": "5eddKCKEEcRaM7KnH7sFYEDQ7Ky8rG2kr3mx7i2FckhZdnag1t1YAGE5h18LKg6xt2f4oFt8HuBVHEwaVZyxnHhy",
  "key2": "4eV35CLqe4erMCzCT1zmdaXnFxEG6ngiRZnXdqQCXKTCx3wiBDDuz3RL8ucWSH7uf1xAgmriMR5tix3vSzZxwVNG",
  "key3": "NKxguqVBMwShic4V6hRjFkkReqmneum1hETVuGDhvg9TPWj8kHt3mNSdqCxtfQ3YHV8YsdxJboSmXG9sQ1gxwdU",
  "key4": "41oyP3xPkYFw6HErZHZiTYJrRxtkWHraunhwz8ZTTVE6z7qb8o8SupcnqMqQuHkbizRmphDedLAPFVvwx9A9iGcF",
  "key5": "3U7r96YuYuvPzqc3NsJ9epvSrD3UJevsesUiaYaiQ2WmfXwVEn9qTotG8mbh9A7DL9i2bJc2DYFZfbJafwAiX28P",
  "key6": "2CnxQAHAojVh7SLuaawTf3A98fBLFzkGoEPMKULtuEbWAWCSdsUaqmEqLSYSBZCX3Ek5sCENpCcxMVJT8raUQesS",
  "key7": "RBdwJt2SbDNCUnJjfULV6eB5j6DcJcBFfrJJD6bZ7UCz3JTHJsz2o62YL5F5XJr8qwh1DCegWiPqvB7DHHerd2y",
  "key8": "2FSfk1Bk2cGHdkVwbfaSrrPb3d8amBZJLXeLiTYznDfFJG6R5JfGzJWbDgJ3JiQgqnPArW26FgYgiEHXqpWuGUGP",
  "key9": "4HcyAHpoxLp5MQGGwkiMQ7nfXhZbajwZnJm1NuQJXqXRQU83b4bmphaJrKDi524z8B86e3bD9nvWGCUvkmG6Tgqh",
  "key10": "2zPVFXRfkJxz31ySP4d434eacVb1ccx1NZyxTaKE3Vc77E12ooY4DRZpriF4iVtjqj6cDMpXtuGu6JDV2pSx99Jv",
  "key11": "63dXpcVjyXTLVFRFifyg7E9xNw8vHHC4z47qfWGVrQpjNop18qYXUkW3kc8bF62AnenFFeRdiEES87Xxtuy8c7pt",
  "key12": "4GNpkxt8uC3mHwAvnnJxsEWk5tUdvsrUqpHcxdcxoNekTt6uAaZVre4rDaEAqiWpRZTYkGEFZ8gbdbu9NJKe4DpG",
  "key13": "erPFhTD4e7Z22v2SYFrpR5189QgbunStWqZNrRTX2boCjZRVR15VHLNpx3wCWRLgWdCh3x8D5WTHP8n8mH1QHCZ",
  "key14": "KBugd3vqSJnRAPaD2JF8NHjHHNQCZ5zjpmQztbkCDC3bzCpxTUyNevu7RoHtvov9qp68qt4EWXz8UWZQcsggf8n",
  "key15": "3avFGXSRcjwVFkk9zdU2u5vG5Nb2eXCCVachK1aKcDzsSHuHGzpXngYVzNyCmTuhr6MFmvzV8KNahqS2Vh9xxbts",
  "key16": "B54rxL23CSsv3JkV8mCVoAxGkPkzrSvYHaZtGKywvqGB7JmQDeBCNgftvx4LPheqMJ2smLsoeFLNTWNm1wLf7WP",
  "key17": "p56cmFhDNEEUGiGExgJMXwx2p48XrgzhNrNHQran2KrDMnHtxW7QcdK2zDj8J8nQW7m3e6goh2Zd95NXaVMSEVd",
  "key18": "2KUZpgBGUXZNtCBwTG2HNSjbABJiik2KAwc42q8mZzhEWuBtqqHzmAXzwGQqvC9LpvduWcLdYYS1tE7iXrwkNYtF",
  "key19": "2m3tBajjXeFn2hVJHUdmT7TAUBGRTZpJ5U8hK8VsJQJib3bE2NPndBjdx1UsG7zMwnL7xDpAVyPT9ittDyksfWLJ",
  "key20": "5ufyfyXkRuXNKGGEDLamV8se3uQH2A7qowrQHhe1hZiXEhRp5MSBvgVfWcwzm4rb95W1aEpgfiV7TpPmfkvjPYBH",
  "key21": "BSSymftCmNKyFadkfK9wRFN1VPWq98Cpxn2GdrC9dBakbiAFMSCdN3qrbXeBQBajnTHaNNJWEKYeuLfBKiDqJxk",
  "key22": "5Ey8pnDdNVPakEZENzJieWZ72ufwhZtJG67NgYBvUeVWhfCLmpJyQ2bN64ESguW8gDiFdufgQXJW4Kz2CdYzayTe",
  "key23": "3U74243R3S4eB7TFwTgrbRsA5tEoAVj4kRFypPkcVa3XAWDk4zFv4qtuojcNhR97vqYvmUVCPUJrpnNhWXuxRxvn",
  "key24": "2ZxmmFsKDJKodMf1bakMTDvjBH9AEH8NvqTRMFZWM256e5Y8u8wqEGQWwgMXQmjLUYMkbUFMVjiaYUKCePH47YXS",
  "key25": "4Gcc8V9pxd5qsM6PFQWEsFjCm1fmZTcqdxesxNQHstaXjx1rTTowYexzuM7GuMHWmmgeLwXcLciNFp837ZjesJUH",
  "key26": "4omcgkSUCDvK7HPP3GU8MUuiBzB74b6JmHLNZCF2fnsXa6HxF8zwfB6GqihgHBqQSTj75QCwH1Q1AvrYrdXNZxMj",
  "key27": "3mHjckEgVYQP8ccHGUDmcwFCBih7sPTE3WkJW55jzhv6ZjK17yYGstwPTDvVuWhz3CRZArjdeKhakyedf4Wxadaf",
  "key28": "2XVtHRmojmr4AbTqLZQkqJZdJN1dkVJsw5oUygJ87gPre5WnyF651ryQiH9rgvsWrdJ5Uw22spHTkVMxNCNyw4eg",
  "key29": "3aeBFDe5cxd55Tv1RyDFAVEYgTXV95oW2DpgrypNBQJ9wc4vHLYySHQi2Wvrb5ztuzbkgwrLybucJLcsgMT1DEWP"
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

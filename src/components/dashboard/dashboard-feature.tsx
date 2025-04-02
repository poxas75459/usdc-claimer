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
    "5vWMYk1qpRMjsK2X696tsrJ7p29MA72xfqqC1Fwe7hEkJ3mQ44nUn36s2w64dxuMqVogF7jiJ1Nu2oWmLvyTp5CX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24LTPFtfNVhbJ8ukG8AEFAqoayUJWEoTv2gNeyqgShU9DnrdYTFxft2tmSFzGBRo6VvceAmSH2aiJYV91QFTHYxh",
  "key1": "QrbNwanx5ru5ccz4LESdEv9Dkaf7DcdaaR1sT1WE7acLnVMxAJ38Bu8iguidGfZWjVhiWYX5Tu3YLSjV2oEW1h4",
  "key2": "32dnLQU2NpLHvHTcceJrba1GZvtxx9jjHMNpKueWfeSMngzrqQF4k7qMkPtvBRsnfKaWdKjzvrLbVJ6V7YwrvQFN",
  "key3": "aWBuEFb52FcN1cbaa9FdeJuq3msNHdUptzhCbvwH5sHgdPvmgnxDgDeBuCZBufzhkUeJEHZV9Wmeov2P177WSVK",
  "key4": "5QkEHSNGiLbnHrXZ4CFXQVyvts19dPNbdwaEgfZnYW4EcKqEMXYweVEEw1Cy9TSiKYWZLMUZFRgf6rc27GpUGScg",
  "key5": "29Bnb1PbxKUyRoTee3S2GacjhS9wrgWsDPkCXEVf4UNj1PxLhaKeXUhfnzFCqHfnMGePnqjC9PB7Gv8BEKyuogxQ",
  "key6": "2LegMSsHQ5PWm32KfvnMcZnqfCtSryBKctJL8PK2Rs9ht19oKvo5WzhfoSrySEtqdYk6HwBGmaJ1kNf8YozLYNq2",
  "key7": "2UkJD6pZGnA4vsy9h46vD3mbP6QiW6wUvYS343k2rEihFqJNo3ykzvqirptQ5YNED64yTrE1wu1YvC3p3vBHRHsB",
  "key8": "rdYiVMbmugR82SGnfGy7EPRZwgAH5mTXr7qUoZLngVbrNXqk7pWz1R9bE2cgdNw6uMDDtqJf3HFUoTAtfuJoKzD",
  "key9": "5g4dozeAZKivmJsFiVFfvLVDsktJ8XxrF53YvpYtwoidR96R9nYm3YTEfuC8WaXFxmoferh3wANVLqnq5ZYNW1m1",
  "key10": "4BS5TvZA3GePjHr6ChfTrvtzTQucjCnzkzAkt8jSz8P7accyra3t9g2a3UwUkHtgRbzhw54anFDsnuQ8bzY9niR1",
  "key11": "5JWmn3XSYR6XLUGid8Me122rQwKmN4RekGwVhK4g5ugtMRve4GYKtA8xzJqDUwaz8maKqddCeiHHawpdQPTYNt7s",
  "key12": "31F8CAUQk8hMYrW63FmufUywQT2mBzGHC9AVWj1JZ222pMcJsezPAU9Tu5dcQukwkRCodwcrtNjNbt9pKiFF7nHf",
  "key13": "2hPitisUQzaeANpdfWGbd3AwpVa9GkMmsaPFP6odh4Kj1vjWtSUt1WDJNdAPcwjpC6X5T3DH6TFgKLNLfAiaXTck",
  "key14": "5BdFRJbKTGf5CfZyvxRTibC9Pn4DJL12Dq9Co9d3MRgqK3KHcHNpt6YwDsX9k6u2zYBoLnrJyKoaaUXHrL9EpPCf",
  "key15": "4CHQrr7Yss3rhbtxf93aXXxkEKFpqT36Srj1XSTV1fmsZG4Jzf7rTj9yRxYz6j7DU72HjZYNhYymxq3fcUeJNf5y",
  "key16": "4jL3QwWo5LeHTSKgtzu8abGAwjr2Wc58DycWyjoi1jQneiXep7M1piLPEGS9LmSfdpnchcudykrDKPHVsXGj1ruQ",
  "key17": "52ktn1Jhed3goWTGbiSXTP1HZeCj3HHRLquEGGfnicAXkAddNteWT6p78RdKiJHTV3EfQnaKxkkmpp6YTT6VBHrb",
  "key18": "2XREMsRVWzoP1VZBKAtozkb2BYiAPTjewiwSPLVfJ321ToKDdgbTHgHLK1kver27z7Ph5HRHo61NM4rKE3M6uWoG",
  "key19": "5jm3a4Q4zaSwSReRbqFMQLwYNeMu7af9wGhdtpwezpWWMh34pdMrtWGiqinEmDYjxGS1f59ZH9yRddUZYnjzkWbd",
  "key20": "4saJMeM81y2PdXWQz9e4QneWh7LJboPDHdg4WkgF7eqA5Lee77PwB25J3oc1mZFK9ZVsfktowjKS57aNzs8yDU2H",
  "key21": "5cE8ppf9kXcg9jdso6C6LMGgqnUmSYYs9DEyx48L8k4SsQhGdrJ4n4xKFDMRPkhw9whn7QJVPjZyALbjtDJ9Mqiz",
  "key22": "YVdYGzYKRr9XYu29uceJkVKvzBgsoiSzmT6XS4zvSgq2r9qBvgdHs6hgPEUfYxyWagAeY4EgWES1H83gDCesys7",
  "key23": "2dc4mToGthtdQ6ipKrrv3AUzu7ypULCzXRmV6GaS3Cq2fr25PyZFWcrTQbGBMtwm1psU4L7SXFxooyGm4VhW81Rq",
  "key24": "48SWUJbxb2wQ4THq4wkRMSupDy836nrzQjiyMoNRg9vEQp3WKetzSnZFcgXRFn88ciQ8bt13SPnKZLsH5vCtLh7B",
  "key25": "2JGCjM2ZQws4C58F7f2yYE1B4mxmbBKRu2efnJHGHjUWwu4QRWqxUPcgRYtVpY558ktCcgRrSaLy98SpAnPQAjvp",
  "key26": "5y6odwtXUQ6VmutB3SSfoDJVgdyZUpmHBZzTmYqY6Kqq24kMKdH6jmeRopgztsyKREbMZJ8g7Uu5JDmPLjwH1qVy",
  "key27": "3ZHv6KeKn3M9WMxHApeMuhRF987h4ZKMMmHY98DYRjaEXm4TgV4e8T9AKynnerRFYp3wKZWyUnEDiKrz61jni1be"
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

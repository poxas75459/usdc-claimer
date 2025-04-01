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
    "7fQFnFj9G4AnTnzgfxHtbX3zSqFjs8y9Lmc7MThje9KisFvaW2J1E9fPJqEfznB3m2e4XqhrNvHEjs4WugfiDQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZT9x7j8c6zYKEQxYCV6BC8e9XYihCKwQ6puw3UBRy6ymn6a7SrSnceezdjBVCteGhyG3VW8sDxMpkAYhKppzwLb",
  "key1": "2RdMAm1tuDkHErpyDzhC666iHTiVrJHHyu7jzrPDjs9XJ4q55kXazs3tRVEbYJf7fkAQUn7s5KzKfWz87qURSR7k",
  "key2": "4EWoA7zEoFJ83oyziAtN62Eep8Us9RtWrCy1qmdTgxYUuwChQ7qTq2nbSewo3aFikZjPTeYk629EFJMriYSsFtX8",
  "key3": "5YN5fQoiAUxX3rdWcQ7aQd8VsjnLKx6MPmrhrN7LvtEiwarL7i1Swy9SPMnQNZM7cZMdSin62tvoYodRi1LNsPaN",
  "key4": "5sgzu3acMTb89DeU4YwWHjZNXwQFLeLhkGZjqLedkgJLuyQQaYGDCQoSZmvB6wTJhLghrPPBpV33igYSWeyZ2x77",
  "key5": "2sJc3dt6pJqqa8VWkhoYeSsaG2EQYCeNWaEsugrQdY5thLiA687H4rYVkTKqpzTJAFAfZwRmBpvrYnTtrhCZbPij",
  "key6": "5qcT5hVzMb9TkBrUo9MTvUtjSHJRgb2F9M4ALbmnSUJcjUG6RJe9rSS2ufRtLAaapFtTPzdyU1s9jCHxmWX7PC65",
  "key7": "4oApuhM942aVQVe7DASPsUbvDiAwdC56kQCdpwZiryyz9GawLhYoebGGBqFwDTFzzTXoSFvLZFpABdRrD2cr3iww",
  "key8": "4aRvJ7CwHGgDuDpr16eCumsQDTFHeAtYM3FMVanEuv9t25FCgk1sxJvmfZb2vowLMoTTusZBpi5zA1bNiCD9XfYV",
  "key9": "3E46hJkNbQXyW6dh4hFzDYYgQeMnmN1QYEZwrJtFBNxJj6nLhPfcVohsNrp9VbFFM4YULV8F36W7GsComsEPHsWo",
  "key10": "2uSrJGLk5cYhEuVqShpcPeyAUy6JxoCVBaEvvWFYVU7L1NN7xWuuYQVGHRn1B4wv3PkwJAQh5C1vjHHVm67qH97i",
  "key11": "5s4nZ8B2dAhXAVhMy7krx2N4vL71ZJCnVJ2EGiDjeWdkwCZaT3PRUBHbHpupaidF1vCjaHc5ZPDDV4RejdYfMvmZ",
  "key12": "2MAuCjDPyPo75BnN4LDqfBawB7cuG2gog4BxdvLprznhjn4iet5mzBZxYqh11ReoGFGD8o8JwQv3oKnsfcwGgZPi",
  "key13": "2qx2KcEWesJ37zEGLVt55h6FxNAx6mtj2Pxuyk4Gnt6ApduRxzm68ErBGAFR4eBayNhSCA3F3pQnN38oULyCiuxh",
  "key14": "ZMKz3Fw8jsicZddZT97NpGyaraXmnbi8D4CdNwxwn67FrU7ZZpwPwsZoSmCnZYu9aXXH12zrVGCbs1FcLWcKgQq",
  "key15": "3a2to6yWr5usEEJiMsBUtq6NoA7WyHMuYe7d9sfG4DA4grfFKC7T6ovVxna5H7yYpCLwd258QJbjbyViQX3zKacW",
  "key16": "VBEjrmGk3v7KwVLaf8UN2QYfaZDXUFwPq1BNcd8ix8WCueT1CQ9gKTRrs7eQBD674jSZ1tJNRHkKyE88zmoWbwa",
  "key17": "3UGaWZ62nFcqSFtsXWoeP418UG7kgoyvLWwr6nzavpXDFREkKDytxbApaZsmPWoPC76suEbyLQmrszneGh25iCGE",
  "key18": "vmADM1w5jojinsJLNMuJPjMi5C3t4REokMpcme7DKePtR4HcucZD57h7qH8CvNNToZBdbHWa483TtQcBphqLqr4",
  "key19": "5kyrsddd2Ya7ifyjiUVAeAjSAN3y8yHZhr5JWTGa8zUSNYQWs98hXeRsa7JDHSRQWXWDNAeqPtP7Dkye3r21763b",
  "key20": "4EFr8qaK6iJ6SLLmd84VN8cB9r7SxFPa38xhTYnDoNAoJxKjmjJmxqeEfo2azqguNfW6V1yRU15SeEci1K8vejed",
  "key21": "4i5wodrxoWUQvAP7WBefXiR1BMR3kKA2EqcF3UVa7GigJK5HvKotodnXaYB23GToP1AxcEQvGz8QNvcVo6XUnqyW",
  "key22": "26aocipwMJYE82qj6Pq48i9W9MzY97o9QpXu98sH6DvYXbzkE2RqxNyy1CbetSteMCHzDtrHr4P4cEPrNJNiXABH",
  "key23": "3wZwBqHT7pN5JDaknEjrCPBbK2YqnCV1FB6hhpr9RawaPzaoY6MsprTjxKckKekDXMiQwGu4eteKw7X9NSNGZFeQ",
  "key24": "2L7spkz1fwNSHDCa5fXyf6HM4gkoKN9KjWWYup6JQYrDshT9gG3SMD3zcMWZdNYV5VuSpuVDFgq4bh3mg3G2XfxT",
  "key25": "btg9VLfiw1C4F2pULmj3KYHPkgVfC7UZQdZGAbiCnVKSBRZApwhDwuQTixLXcRjEkJTLt8sfzkXU6RPrFLoL4xh",
  "key26": "4b9vxWFe2ikfYeoEUQWx523BtDhDW5keFSqWZzj4YnH615rpobA7ewmAQCShRjZcjwfCX31dxz15KkBjAWs2X2cT",
  "key27": "2axPRxwfWnDjWzCU2SKiCtWTaQAjhNhBho3HXD5uMXyQxciyjsXy8Np5CUMv7yYwDzrHMqwACSkRzAVQ1NUWhrjL",
  "key28": "3VstBwpBtzctvrdSTCz2tjvGjTZew7KG3wACar6qEoU5vg94qh5kZ3cc9CVrMACTJUebFw4NPVv2qAhf1GPqAT5g",
  "key29": "mAUroYwwEeVjtNxQn9cc2VJVzkM3Jk5BSUthvfZ64mzzKBDXb8vpNMrrpGmv7qAHiZqWaPLYF3PXmfU7KGjVarf",
  "key30": "M74DFWVfNwem1QUbHcQTCCvPx4B65bJwiMjvRTjREwVYpAVhFRMsaeNRmW1QZGGF5FqXWi3DbG62fmN4RBeBzPt",
  "key31": "3c9HH32zdqydgJasgFjf5oZ51ySQ26p32x3wuUiDrzoBDM8vDoTkh2YgAsHS5RBrudDV86hAWB6XDtnFvCH5wWrX"
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

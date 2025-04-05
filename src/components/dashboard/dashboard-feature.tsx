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
    "wLF7bnVdgSCWj5i5D2XV1SRQR6S1y5LFQojsnx4fzWrjBLt14gBVMfdxC2yxJPYpEuwfLgDjQHQiXbgLAXWhQMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23qXHDH2SUFmaLLPLMVh7Vga8L554mNv5M8srYvYtEUDSEX2HGqbQBdAa2sBo3BVcPoGmA52XvWT4Qsre6xLQQcG",
  "key1": "4biAmPzfSmQSkDzbDQ4hP6Yywiz4kfV8ZKrnFigcj7jzTjQEZiykGFsKKfFcM4DXnvjfKbi4cr6Ws4Uhj26WJBCj",
  "key2": "5WKG8gjpRvq6rSo1PnWruCyz5pCBTnTMCYjfGdNiobfTm22SvzigQCbzmxtkWdbMJkNRxLPYFQNdRGMQkuevPEXN",
  "key3": "5pLGkLD9iCEiQuoNM7sEXre2HjgMJidn3edt9v6p7gMiVYNPbEhYYmuuFfFpy5KKAsFDHG9ECQ34awJEyXj9uHkQ",
  "key4": "2m422Nb8Y7aNNnEBDxiY4mePRas5VCBVc2dPQNnL2VvKzsjpuDRAxsJjDvBfnjqSNgbb3RDcDvPkif2HkxYs9sXS",
  "key5": "4EJ5WW9PsxEeNLNwhLCJSdM2BREDvFH1jvBe4UzKZ4jzU5b2b2SGnbpwFfEhMzL12K2wdeYs6ioFwMBrV5RTRwr3",
  "key6": "2SJdey9toxCR2FKy8Ei2wHFhk67ERj31cQFzwKXT44qMSaozC5XfM1KoJUwpJPyxVJxqCXwqpDqg3LqoVNKdaaKS",
  "key7": "4UJa3dgEAnAXfdQnMjhPo6f6qEm3FzLUsxLrTwJAX1HhAr6ifRTb4VRqtwkp9mvKUsQo9dhVGdSLLeZsmmCZTXKk",
  "key8": "3AYsGRaFZjc46vVt3ie3aZKNP9WmJ23FN2womo6ik3cFkn9r57JBaKM22iW5m9aNydSZo44aHVYyX2RwGG4YgnkJ",
  "key9": "Q3qWztWt2QHTVg7b1VZmjPYc5eMWhZzg4TA4dAojzZrpC3J1i2kstGRWM8PyCoQe1tji1kzbE59BxEF8LxqQYa6",
  "key10": "U92tB9RHXATT32Ujsx5EzrddwGUu67R6AturZBqG5P2gcGuk8874TZV5nkqvg2BM3azrSj1dGGt4CrUDpcx8EMx",
  "key11": "3wggDEYv5SRcbgktFeDaQZokunAQouEdjWsEsJmzhNxZae6ZNaUQWcC2kT4G93NQwm8cRKe33ZjvVgCwkgv8Rp21",
  "key12": "559KWAKdKaBgMy1eAYVSns1MM4ySaTXngStuyBHwXeWcN7dDwVx9k3H28jEN3uFjgSmHP2ZhNDwpVGg6VdHigKHN",
  "key13": "3UY7WhEoLh4dfkftLXFUcnGQ3z5bCiGVdQT3TeazgmMEeTPSXfUA9CQarQCRdmFe2Ut9NSpbN149yiSv3aFvse9m",
  "key14": "5KYBEXudQsCLLSbbGjY98Kjf5GoPidENy8ULA7uztEJd3adUDEV8dcPHyF31u1jkVPB2nzqX45tAFKaZdaNr5oVA",
  "key15": "3JJ7kAKK8cnhBkvjCanBBkKAjeMDYcH9ZYmwPj2tB5xd3jqHp4pDmT3tgbvjizxpt9Z2TmzQid7G4dUu6d6hxyWy",
  "key16": "2R73KRjVWSGiwZtuwWGjyugdz7R3YHkKySLud482AWD5WbHUhghCWCG3ZuLhJcmDYqPTD76GiAxyeECjdBhSMwJx",
  "key17": "61PdkpHZmqb4jbta2pmng9Md3AFey2XHbebPzmgFUU21reKnZauw6bjaeTW2SaSftD8RKPAtMX5hwBZoxY5MeYUC",
  "key18": "55Pvcw7q1MhpnBXoYczkKq88Riiwhb1oLXQsEfUETtBQrU8anEFxhCLDMQbsa8qNtcFg28iev9r2hUEogck5wZ14",
  "key19": "4NPdkZbkHDe1fm8ANDXm8LK4Y4iUKYFvCf82FJVmKqLRRd1uPaJ5pRSftUdpcUdbXHgNm4ckuNBGFbBiKQgYmT5A",
  "key20": "64h89YmXU7chpFXFFp2dz4vkvpbYfg3iSPtMF3FUZaYiZyzmzF3ZhUqp12cYZtRrHrB4JGrmYPDEFi3o6nSCByP9",
  "key21": "4pYPMnz7e5LyRAoFXNEUotJM1KWwzf9kXVt8sxJypYfyiVdSxKKYSnrLPbZq9Fbz4j1Uke4BMp43thazhr7Z1cWa",
  "key22": "5sf5hoyRMZDUkFd2GfycERrHENSfddtfJUMHQFsKRiGkaiX1jgY6vhCExNkQ5ypv5sUrDabjCtfsXf7Qh6DrbYiB",
  "key23": "45zaXntWP5NVyES7xBo5c2sckZ8oU6AcTsF2bAXvcjTT8ztwrjYhz4k88C6ruE9w5zr4YtgqAk95FVXkB9sbxUwh",
  "key24": "5ZWqXp35f5e8qW2Pdi7epHX6Q7t2tjBvB3qwa1sFx8f6QbNF8TKMXQkrFa2DvA83G1UYRu62Bnp9hzhgiTVtgM32",
  "key25": "4EdYdbqDExTCkSTo9b2H28newha53Erc48nQMBme2sKVbPb5VEhKWQ3hJRbZf3xNHEb1oMveQqa5seyB9aahxhsE"
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

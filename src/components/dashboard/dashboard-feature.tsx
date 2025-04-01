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
    "5XqwjZeVDxGoTyrtNk7rDfjNpo5xYadp7ax6Rqz24HAM8pRRc255ZacXQXo4Hy1yG2WahjN9cTpj3SN5nM8LQDtP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BzfBmdGL7CYXsHc51bJ9ft1yvV74CTsqp6J3Tc4w7i3HhW57TxUJ7ZYzuEUyd9qvgS3WiuvjXxH11x6xikwowwV",
  "key1": "ASh2hd3v7dLYzx61qxRqfapYDAboBuHaXZ5MHZTNeo2P3yJHqM16DcwwyVVKA9mckZ6Agx2cwAsxoPUy6SE4sot",
  "key2": "5y31obvqipKEVg8hKhRkXDiVvKkBGoYkxoUSY5xCGqGm6hEh2V3cnprhGSU3R1qLPWdgJy8hog9HNq2mpYNsh3WM",
  "key3": "3h5WhhE4KU3ejy8kcypccNZ76SjNofYHV7ptRi1mu3LV9GZy57TZoGEcvDFiPbUwR4YeqU4SsqvtVxUGnZGpxZcs",
  "key4": "4wNyuHdKf2CHTnWkSgXVeHqb6tr3W7U1wYpmEoYSqWgRA8t7wssoFQxuD8a15kLYEgE1Z6ZMxvgNqzw1UzXqwM5f",
  "key5": "5T73CWVhga7iNxgQFF1TgnHPCEE776iCJaCaMjzrdDzg3rcU8gXmTKP63t8HsrszszwtrH1fCMCm91xPeXsTzGQ1",
  "key6": "F2mfNqobdjfX9QGP48UFt1igXNBXMJNuZpv8ZsSeRqfahZTMJnYpBnDDL8U2RE7BUf8sYobpKifFpoWYkfBWNWC",
  "key7": "5XtpD7v8ck4fqUo6K4Wve7V1YhqNMPVCFFbcuNZfwKf9LMHAbUheSPfzcv3SmVrdUQtJ3etJmHQfq7ZfZP4WzJ6C",
  "key8": "2s1FLehaLLK6w1nvL1TQDbTX7du87Ah1eSUCSaGHYSMLAzoWjXMDwpCPXGeoFvn15NX2bV92CieKn47gaPTDMAxq",
  "key9": "5fjzC498ZD1erQ3dnUHQ3sLJq5iQTVvbZnqugNzbQESABAuRbgEdDyzwimozx8dr3cxtVkTfhex9hc4UvEShv3ay",
  "key10": "4RaT5zqjQDbPihL6R7HVRdjtSuyNDqDeqVw1EMnQMCuwKoZDdV9WQjkMjk8FKsrFTv2yUPb5Eh7dyqspuS5RtWMh",
  "key11": "3Y1Xy5VdqNL2RDTxJcXAzYf4fRmq3FS4GmR54wX8wPx1MMfsefPPp5huuawQq5YA1LLaEmFwVy44S49K3fRUpBZc",
  "key12": "252cnBZapHtVGc4aQgmJLGAjsuocq7ABFi5B9vr8cBtUKdnhmateEhexVPN6ptDPzKq4VsDWoye2yY6BF6F7rJUA",
  "key13": "cMe8wupB7xX9XMy82pH6AEZwj4Z6mSaJSdbVgj5ceXMet1mB6dT5NZTyb73QAEpgTcp7B537cd6dQnrTSaF3RDx",
  "key14": "4AGargPneXQvBbKrYFrHQzPHhrSCr1je8Cn9S45LqLB8v2aBuNndgm1uExT2PKcx7FgUPwB26RC7CFdwFeS2PXFp",
  "key15": "4nq7PNU9BvEBkmnPhEetwiXLkLP36zjKKXXNp26ZeNJmbZhupLy5W1grCvbmHhjurxvz3SsM5VjLB8dcUrUbYwRF",
  "key16": "4xBTm6ZsaaZna8xwcscV2ZdXAX5FoFudKNWxzJfAa61aetR1xc4SYaGYHvggSJh4Z3nLrUaYazwpgZW9e1oPhuJM",
  "key17": "3SjQxpUL8fCtQFb8rpQeZGX9Ag2wRKt4bGTM42cLjTFQKeEjvC3cXqo7rRchTtJ5vcVM8kj6mmLNkegMheTV7HAP",
  "key18": "61MGTNjAoX2VxoEg4emDciVPvREJumAzGJ2DDXo9pRTkE2G6HdXQxZg53z882NthyHReWL2NEDCp8v1P2hhL1M9U",
  "key19": "28Ctfjx6W6zhJijH2WGM7xmHgkHZKYsKT58SfynKHTN4n22wmmLv2ufToh8eTJtmWiPqiNmrAsUdivvpeqdSTTBC",
  "key20": "4MovzVVtK8MCcqBfG9b314s6juY61bx3pbRGP9ZQPe7Z5fXzg2JpxdpShbBhWGvi8UKxDvukDUFczAzaiGnzht59",
  "key21": "43E3yx1Vqgg4q9Z3CCRkXjogWVAdq7cNEEBHHQ64b9yQ6wxHuw2ijQSwjjrwnmHcNf8M44AW7kyYcqpYYeZhtZBx",
  "key22": "5Jpdn1ySd2aTpf68U3iDimCXo4pushmbVsWGb9mYfWuNYirnYaXmiwRGm9e92wCVjd3pUyqJNzy47cCi5Z7t7qtK",
  "key23": "3gxWjrauEzhooVL2FfAot8g3sW3p7BZdb98HpyfqD2VcnDn9stCdku4foT6ZaA3WKHgvvPTnZobnfKeEdi6znUDD",
  "key24": "4zeJpNXsAsZuFAFCgMeig9gqWhJGPPAdeUpsR9HyEKwZea37ZXqHMog1oGYcuCYq41WukQUAHRtboCEzizKptuPu",
  "key25": "4V5DqP68ikVNXMfS8STHHWzJ4F7zUCCNJ6aTMPtZY5hj8VicrTo1d1STLShDDbgpS2QgpzvGMq5oeer9xtZ54w6A",
  "key26": "66TmggSJMz6FunzNzgHJujZt15a1hfa5uetnWsDG1t14NinvZ7WSjM4XybuXbbtwnMytUPoaCKimrvxQnVyTzRwQ",
  "key27": "5YDJkS8bjhmFUB4NNao2VUvxGYZXM3qGTQXQ69cXTXbe17aewU1mWgwokUMaQowFStuJKd35w6Q49q1yPXLp17sE",
  "key28": "5CVKU6kLPGhD95e1G7PL8jWBLzXwnaPTuKdZSR2W21chxH1GsN3ej4yNRJ7T9kyT7M6Uwi6do3zatznXsdyrUFkK",
  "key29": "2R9AaM8dvAbQfRm7ndCWUcJVY1CwTEnpkuf2WiFyqvvT7AzBCk5R4SqbP94Cb8iuU78mrkEaTNkQ4SKDeokXMBWa",
  "key30": "5mQaGxtQNta2NEebhMad1ZPHnLqCuxmtvqtqC1PbrXWYWzoEWTFdx454QkbCVoXVz2NdnYqvXQsvzCFARQRabgqf",
  "key31": "L6svGaepjZPomZ8k2zTxYZVJv5pnYT5Qxxd3dv5ji5uqHEqrH6SUERDDUHnfCWXuoZyRRz68EzefTXoaXVucNKj",
  "key32": "3zqDuCnAwZTPRtWgBUH8QqR54utiqWvsMhVN1r8QuovgNDQjrPYFfREAKsf1ZcqsoYrv6rQh5nAnFucaPwDTnZwt"
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

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
    "4LziCrtK4ZCdvYKu8GJBx5HKexmKihRGnaMKbDXBU6F28qKrzLdXhFyycnY1zg8fybTdZ8xqDicGqNPRD3Fdhx3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CyryLERjEfMhJwAfHf93QtzHHQ9N17f2H56EeBwJvBWPYwYHEwuVicfTmK2HxFGnuJQRHmTAWirbhzcFqTMDwWH",
  "key1": "4ciVRpLP2hRd65rRWdfikkmBPMA5z3WjJCHEJFr9fVknZmZSTMFrLpmZ8SVEdCLCDRyhTynXSL9NgPes8MEbEvrt",
  "key2": "4fHrZ6jShEuWL4WksVga65BC9YMC9x3DFmyShhz7AXatq5jcd2V8DdCnraTgdUizjoaAaiW7VRKcWrFjJctmGefW",
  "key3": "59NeGruXjU4bTf8J3xpwZVvTqC2SYsaayYXLJMHD99iCbE4qtQVRaiHsTssSjmwt3jB7a3hG5VdXyFukaWb491t4",
  "key4": "3dW5xtuLH86z62JVk4q7fj8zsjdnGDxMpm7C44DFkQEcnjpZ8Cy8zzG2UXzvdGt9X85oYPLEWVgNa4c7ga3JPBtf",
  "key5": "5tBj2t4q52PRCQYUZBZkbrSN364qoF6hEgtqrvdDdt1FdD8Cr99AwuvYUfevQ7k3zLbRwYqy34LwQuvqtn5FNBBN",
  "key6": "t5zVRjVyA5JbJzS3ezHTKKyoGYhD7GH3ybE3pfXJaa3yqnE7S1858xJyuqC4WEq7q7WWyc5t8YRAe65DrhfSsV4",
  "key7": "27b3grRoDEcP8RLPxzmt4ZnmdMxnfXVkBMpr2e4QCXqFdMB91CJuVuPH4ZGAN3g17ByLqXPnSzRWnfkUXXvRaher",
  "key8": "3tdULbsnUcAyNpbHbMywixLnW4HqkoAceRBBRAoHJAGD5msqFr1gLWsHC9acbEyWPzZEm7Aum2Wjuh1BDgzgYCwj",
  "key9": "5M25PwzJuVRntJv1BdjZUmWctnfVqAbwstfUHufgyRLEmpeoBJCnSDokBzatkw5Zh3XU7ht9gH9TkZR3eWz5utZi",
  "key10": "51jCiN2K8xf41VbZyP34THqhcyF7H7WY3FAKQeC1c4YR4mH53tn3XWMwDrroqMkpWV67spUMAAq81BVXN1zfUyKv",
  "key11": "5ULLTAgQbDsuQm4VWKPjFeUkMB7eP9dyxGNSUxwJcqvZgdnxwP9UbN8k7n5N3Enc96FpCr1DVwmAVEYCoey5AwqR",
  "key12": "2ZeAQzQZ1MAf652hLgj1TxeyeWvVFA7U37djDfbiYbai2vut3KdXypdFxX5WShDnUrGVHQkqoQhquB9Trhp3xass",
  "key13": "5oMxihaXo1xqpgor6zwQi2StW2DrCe1JDUAG2tqCi1XewgYZxgymXtN1WyFkVU2NhaRTrJpTsARTLSeauKGAHBUg",
  "key14": "58dpTBBrMps2w7T8VwHRNFupKSj9LZtD1WCNbeknx5ttPdDwddESeW6ABjgyhGH16LPryWJKuP9f7nKe8hqBkkRo",
  "key15": "RepwL2Q92gjhic9aME28QCw5EtPeUmcRSHWtzo28vjUm6iF2u3HQtqE7A4JFjKppRomHYB221md16YtgJJWHDBE",
  "key16": "2fgnDgyexPBgTtCoSUiNEdDD4LhjQ4ZGS2jiwvRGKVBEw34eX6YpHfRSL5kzFsqVGHNqCbD7XFwqc5xJWfpVa7gp",
  "key17": "47B6gpoNeP9gtFgxRdBcraDGS4aAu1XjmeettdDdAQxgnMLuSE56JbvB9CoH5THYMabgiKs32mXugNWRtuagw9Tb",
  "key18": "2D8VG4dE4AkMppuDd51b1rogW89hp5ZW2FxCBtbpnxEW7v55FBcQqkhSw6R5WRfshcBXGiZHR8isTgCirbGEEkiB",
  "key19": "3QyYtUMyeB9BdVbfAEQYTrNWzEkwKBtp6ivKRKkK5FKW5D1pNvgH6ujT8TywhTHDawVeDvWeT59JibobHdsuUoc3",
  "key20": "3zKaU1Ho6cjD29Pu9fh4uJjJVEY9btmF4XEYf6xosH3cHAhaFETDePd8obBzxSuUi41gkEnjrS7F3f6FdUcTXzzg",
  "key21": "2A6pmGp1HDzvzrvd4GnVQNitgLrzLMbeD6B3pv1Grc4Y2VXCTM3VPD787RPLyWaCc6SVUnY5PVj5gLR5RevJxRZ1",
  "key22": "2kuihbtxPcswpk3mw2iV9WsAgV7oWBz6viSRwqzVSkBRRU1apSdT5hxsGgin9NEbr2PTLhQrjUg1KkCWFn2REc5r",
  "key23": "4ALt4EX8jGEpNPVGbKw8hxGVCYguAScbhw1zskUk2NmMjbbFbHw366pE3FtW5fjfqpcniQnBbwwPB9bUiQa399W4",
  "key24": "2QAqUv7PCSB57gerfiRY6zNcmbuexeyLgPpptZnSm3unrMh2YfSNm2yHRPQPFkWpZSgGW52qExrtNYL5GkgifEiF",
  "key25": "4XpudgKvmje6ZvWo6w2RXnQaBB3NwRqZ723JUSJ176ZpxKrKL9BUmBuRAM37TDbPFTHQNK9eSzqHGgNwMd12QN7w",
  "key26": "67GxLyZ4GRfbg7XaWHTv1bcJUuGfqYYi1Hm3WNSSQ1gQRhoRYsZzNp9TuJz4dnPjiRqsUmHnzfVUJfGWgAcQ2V7g",
  "key27": "5n6zX5mrBeitGjStzPyT59rdPbzLtq8HDvTuHavTDFRUaTJWU96EQ3aEWY2T3orHhtYtp5ahp4hwMBw34H8s1cUR",
  "key28": "31h1iEbswt1h1m5m1BxTY3j4fmzeDZsP5Fias7zZfW6sQFP17QSvKT6BbgDtC7ViScqPdy3nBiLPh3Dw6gZXNdN1",
  "key29": "2bchMVsJFhdQUcApbuFzsYoQBXcn1UyUcwD2MWnyAtAyKPy3o5niTPZEWxNQKtr4jhFsWAuCiAbUhN943immjH9f",
  "key30": "5VmKKGA4x5uuEdURGTcicNAXD8n7XWac3xFg8TrN9f8H5KwVNEckJxfxCHvScQkLzEpYGomcdjcAzdkJa5RacJwU",
  "key31": "66Ng19EiNffpoRXppkAKt9uvAADF76mZosLRFnk3u9RmJEuozsZsbrUfZfiqjFe21avUwUMWzpQT9PQHCdTACdA1",
  "key32": "4kJrZNSvZnLGmBkT69cSBsXwPimNE1z4hJTwXjbLhRApXksdm7RzALZjrDKCSoBbFCjVkX4Wvd5FyRUXLir2rD7r",
  "key33": "3ufP1t3DeWCro3qCSnnAan3vGjrQX6ZjMsYjhwpdyF8QeQ73au5MyXppzfQZhb2ytte4R9SqP7W5JiRBciZhXQ6F",
  "key34": "5xcPJVxUTY8PrSY7TWGpnTxR2gTDM4RJ4Z4stWYV4C8MrzLbG7LWXetx11BKpyZTcRBwFp8tpg73Aqo99eedsTeG",
  "key35": "4LNrHPam4HhkxnY2ajh7s5GhPRwhoVD1Cu1sz3DspvpHabefRXtuot3f3aAnfRJzV3GHFpF7tNgpCScN3GGLNPMg",
  "key36": "2pYoZtnbsUteewzjTRH5UzFvAqtxAEWBQHTqUAwsuMCtunzsSBDHV6BfWN3RPwAGU8HWPCuSwAvh6U9uAFEdfS6v",
  "key37": "4NLU6pKa1xee1TEGYkR5QzDvma8k5ztf4sFemZ8t8ncDW4otz2cHfH8jV9UhiyB8R2DsH3xPZAkXdR2pXqErSRzV",
  "key38": "5cphPsSFXKmNNRAYxrJDScft2nsbh1Xb7jZ87tUogvkmurPAUjFRPjAHr39gBBF5mn9fPpuj2zE7xtTp6iRMUVPs",
  "key39": "tvniXeqM9oT1yUszqubcNKLsKFizirrH7JhyWGYn3RMyg1C9cGsEkL4AV58wq4wZchDBChfkqwydpLdCUmuJNj4"
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

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
    "4P7wmXr4583e6J1GcSgVEvWupXbuip9JXKtmSpfWNUmMyY5snRKnohbhNaiXetJMW2kPGjCK9t1UB7ZKTVB9cBo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45DnF1MtESzZgpS1tJ9d9QSdEE7GRnCPxwuJ8yFrzASUzXfAwqvdFQK7XXo6m69SucWcy2BHdVoovJZECRzdwANf",
  "key1": "3VqbDFtmVW6h8mVAegi1xbWViT8J8Xmjmr21sDKpiay94dB6bdy3vm1SYV8nkujywaxS3ktaUFRs4UTW4ZHYF8EC",
  "key2": "59N8YvXgyBFtUyw3RPTFojHzDs3f3EXBt9v5atnaYJh8TwRnMTcCHMVsa6bkhydHaXYmxTU8xCMqK4eR61ForsMA",
  "key3": "2Gb77HQXRXAMBJzFuWqiyk6MiXWEk8d3tnmjTKHbo1M25wiFCDhGf418mrdaN6NEGs3shihJwMQNpPtrskHQ4CcV",
  "key4": "67rnNV6MSrt2YA6NwVoJfdK6VPpSkn5zfCm1ZNx6npoEgesoqVRfpMSD8hx7mDuZi3dhTCTUTQtx9seHS7Y67sEa",
  "key5": "5J3PVLLXnVj7injGVdHwZzZUEYCHFkFgYv7bsBq4cZpx7VQ6BwR7GvkSk9r6AuX2DHuknW6zVgLDK3t3nxJfL4Z7",
  "key6": "21FsK3JENsZXjLLytvE6NUPSV2WBAz67ZyxAPzEwLdBg1fjHP8eqPiCdQs1fTvahPPFYZPdQ3tTSuDAZLKGWHyiM",
  "key7": "2s36u8vgu1moiDJFXhZGzmatdUmB8uTw8PmMv5eksqtqR4dv3zut4UQCCBqJr5nDgxqTzUCaVpvmiNGWJCg4Z3XN",
  "key8": "2xoS6dLJZwCq9UrMSs2n1FkhM4c1uCXxG35LD8Sfi1yH8GoJ22HY65enxrZec8ZGz1TBVhKzppv9ogBDZfwT2EHR",
  "key9": "38UXSKp4AgGzwqdBtj4bmhupGLoiXuHm7QV4mUNcr7CzzjWtTtH3itY2ZRsSU6XGYVYnQ86ypVrko7DS5cCKKumU",
  "key10": "4PsnygXrouxFm8JL8HLmm6TiCYJKC1j4FqorzCgJCmrmR32kv1TZHj7XSqKPM6EiqGnNFro3HT9YEmG4x6gupx2u",
  "key11": "66xoadjc5zuJnvqPu2VkKzXzvVWwW5qWHLsBnUyR5ZMDYzxsvyZZLLzgAt5gMv5gykyqffxago9kMiZedS7P1bWG",
  "key12": "2GmERmVJVzzBRmbSCKafGEWmHcLLRycfDK4ySgvyfH59uDWsBKMpPenKJdSKvuEZX1ZLnRk9tryUZ5oHPkfqiq7L",
  "key13": "5iTAp3uJh8bdeeRxwyv9bn6PcCWKjiQW4xdSQyKQtWRJS1ZnsAwUNaUG9ZpibSo26zpTvz75euYm3145FgUt6ovZ",
  "key14": "2gt5uQTrB5XfSdev1uYPbbFkBFK9UY9DWxS9dbTy9fBXpyPnHeMh8EDSrkAYHFanfCNzobMHyoHnYRwisrGLZgwL",
  "key15": "2xCTxnKbZiLeijma6eFtbRP43RuFkGo9wSZrAyBJWF89UdUhWd48EmTdt3h1y94fgguEGHN4X3ZL3xwXPJregwdi",
  "key16": "4SxzYY7svetB13me9guAXaVjM9CAf6TKPxsMJZtqMvMz9TP6tEckAyi5dMPcdp9HvfDT2MxdoXAeSQBL3iMMG5Q",
  "key17": "2p4cT55waLNsLz7a9m2kfKPReaCTpXoEubA4ehHHmzUn4y3VDA6SvoBXiBrTdVH6JnTvMbq8qcqsRKoWgpvcsVT8",
  "key18": "2Hs9wC1G6VmFHePy36zpoeq5AUD2o9EYEpiChHtevijSMQ1hgtNFagvix6zfSFaDqGbG1LSaXXuSHwh9XkKernxJ",
  "key19": "4bVZXEQdFCpt5RKyAfaDUeH9SbSMFUuAjHrMusCDg1kMC3gLhLkgusGqTHmLVxZ2b5GQN6oKdZxNLTaaiSXzoeUM",
  "key20": "3c4RvW7C4968CbHGXhWixGgj197qQF6QrsX8xabF9nyke4xxuHiqbfch17x9bzi8ku9tNMu9mtj1qSNjT1fW78tW",
  "key21": "5JdwdeyyYTAxVetNEpgHRm4Xem98eWghWpJAx4vm4VoHQ3pJt7bEnQpfT4fAJA1XVMAPkq23PfPheHhR4yqMyPr8",
  "key22": "XJjVuKEdyTqvJdJdkEse4enKSm3ArSWXoJtHEiaNKDsB9KRX42GMXorM7SzaWcreKD9twMLjcQAki6tZD1iqPvT",
  "key23": "45StN6DSiKMjgMp2ocGHiFwxBFEu2uvukPQ1j76mGfRSospsopB3JEVzoKbEFzegk1TdZKwzBQRNFEyG3xB6NGQn",
  "key24": "EtzP6eMiDemtA5PZqbzjSo5PMXjryzo6dxyxAwCCR4wmXUXAcPe4QJWxU4L8HkGSshWmFBERRL2bGztH6ABrZfb",
  "key25": "4P9KK9auAnUMUdnYyC1KVyQE9s5orZf8AjDYCAzn8Q7Cm6fRs4MnC13QDu48c9Kqpi31G6SwqPZJZcuCucvut7Vf",
  "key26": "3MgcxJnoVvH3tck6teWWXzSa3cg1KSFgojrx2wFBg5ee7FZnz2cKi4rmLvUYYKzFF2FQ2GVMiXupbRqwku4JVEqk",
  "key27": "54tNahv326mrV7tyqynH2NiLdfQ88gEwuTe7eZ175JTxQzuV166tNRcwDEuS2NECJ5fTZbA5TqsxnJybuBBJdPPA",
  "key28": "391zjZuCFKMDPhWQQ416aZWZEjnpsfN8PPfi7E9Xjg1Quz6cMEB3WvxVWURCHrMVYrwAUz5ebP6HbXT5ZZFgQdaH"
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

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
    "NHuwikb5xQapMgPsBP1af1Edc8fwrCjBtHVNuKDPimedZ3E6MvqwNJBeGb1tLBXthcEfn1v4Yn86cAwRe7nLoi9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zLmAkZQ7ZVyLW2Su85EVtfsdEfmXzWvYVyF7R1Zmw2386TMLckf1ngMF3iwQs73Xxt8sd55LQ3Zh9gnvGuy5XaR",
  "key1": "5k4oLo7Zzjs6GK41s11u9MnWdmetwc25H31nbv9k3AbJGZZduybqGkzcBWkPZ4zt87pPhJBEDgRNTwPpoedeW6jf",
  "key2": "5DmTnzjpXjXgdXTxY2atxLEhvwgSAPmQWXggLJ5VPFRtHVFimdW8iSFFctb4zUbCS3MNwavTUPzq22kFf4tPjxRS",
  "key3": "46dJH6nFYZyCeR4MDqwC9apWq4f8kV8B4dGUzpLE1NyVC3yChFMoSNJ3xtUrqXeSyepYeqAGL4RWyPt1YY4WsPun",
  "key4": "aqPz9kdf9VCk4Ar1KncBr39RuY1WYMK8nWA7k71qzjVJuEbwFn3XLdvqdA54nSR4GEbguyTcLNaPmdgh2YAvAsz",
  "key5": "4eyrZhmLahX8GRdbFamZgyLEHEStdduCR8XMQJ1rBwxwW6fBDtz4LRjWozawBXAXMV2yrHpedLUtWB7yMKhL2vj8",
  "key6": "57uR6uhoehnehTHWu4UnP5kKQL9Rtag2rrssUuCMN1RRbS2Re2GAzjQoJgFeWi841mM8fCsS6wbD36wc5QxerpW3",
  "key7": "2VcUgGbCFq4XV6GXFx7n3RteF3PPg5vyGTLLhvTHCtDHc7V7phmdms2X79cgSZjGLdT3UkGa592YNhadAcMPhHLa",
  "key8": "53TgdYHHFxeycWkST5Acj6to3Er8Lgz1hMDXwt6jpaXjc4Erd3WnyxH1ZQnweiJk4ju91NeCxqrYDU4s8T2UQS9w",
  "key9": "4ufymzEyUazaX8VSMq2jYBo814o3tnfPfS3VTt7zFxWBD9VkvKCEfaw4i5tqYkJ8rTmqMzeofcfhunxpJ5rb37zL",
  "key10": "74wYv12AuybG1eASZ8dXpTWYsgz7thKaWdoevZiM7nRzUHPpKG3QBH3d2JReqgMCkH28XswmpUhsPnQaM7CZVN7",
  "key11": "3vAuku8CgVCbW9ahXoT6EQEzTmxEwYykiBcxQaqt9U2nwTVyP4Vgyh3nM1zWH954FKrMYys1ifZc5VJ7AJyyGUyX",
  "key12": "5zBbJtafVBtWHNMCCN2sMH8u8xUYjJeiZ3pQyZjBZH8FRypGqcyoVQPmfvRU47ZcAoswFgV47JKkWauk5xFp3iYU",
  "key13": "5qbUYF5r9mHUnCK6W6kYV6ecA4Wm9zYubRAhgxhBS6QgTC57goaULJprJiyXGmDn6vKpehjwrFnXSkJJwGZxVRw2",
  "key14": "E5igdnL3a6VMuKnJkpuq6JhrkWoYssBej3Vsc2n1XT2KoBojit8gMyDw8diAPz5GPittLfhGa3AiBthEtdbdKdA",
  "key15": "2GxwJ3ganqc2DPTxk8XJC6iKougDKu71Yzxr82vb7AT9XQzmwbkKciBoxFXniReZwSbTxF55cF2N9MrEdpQfNUVE",
  "key16": "2BtyURcdXw4bVgSbLi8GEebygT9KmNNgPp39Z9GXiQjQ6bcjM3ZXN6PFAetDLXhcYDV6vYaFNMp5VQaWRu3gbQdB",
  "key17": "2PfwnmPg5ctqEUUiuR2R7AMi1enE4gUxFnXQgFS89n2kWaPvjcRYGMHPrgo5MHu9TgVCTGwaYm5cc7K8eZtMAJtn",
  "key18": "2bASjCGZMHQAnyzz23TwHdrTherDwKnqqn978ucDcWB4BKVc793TPJ1mCkh7nktTfzepnnGgy99sybUTw1sYd8vX",
  "key19": "5sNdjYpqmGv9hNNke7qPrgYCRc5jKJ352d55PveGutuMWbYfhzK22rs252wDGrdcLRViUzNPidh1iYuGrtyBnXS7",
  "key20": "5aHNeGBdbTYhBHHXLyizFwRKryP6RgPqpNo534WWEL4dra4d4XKzfi8SXQb6nPqSDuknDHHhPBPtkUMU4Gcz2bgj",
  "key21": "3H6zEjE38EH9FEoJ9PmaeugLj5Jvo8dS1APinyN4PLbg1xg5ykwL5kTBxaRT4jMRmvmraMB8S1WKFzG65AwcmrAD",
  "key22": "5AMf9XuieGtAFTDK6YuUSmTVt5xLyhbmF4Kc7tWZNrSPochyKFFawJdCs1Jafr1ETbRvw5iXyMbjZegakbqhNZ7W",
  "key23": "24HGSqZmJzFXeikEgQQTojGwSEbWsoojhK3oTe9MgdLERtBf6qCFsYHEctSLYjGxsdUv1WkZ9VhNxaCQwJ3KiMkE",
  "key24": "2jUCvM1qEWSXKjoV18iokbMuG1j6SdSWa53sHXcC4RLb13MrF1NCUr3RfiKNjj8eGrRMzJ7LLVzzHEZH7qHQVt2u",
  "key25": "579YFJVvoM1BiRFEG8Nm7AKQjYQ6RBBQkDwkoMeXfw2EKKDbDNKa5nG32XRvwrnQYXMRBbvbExBiuUCR89VYkuZa",
  "key26": "uV37wFPkN5yRdq6z38cNjVzn8f4nspXmpAiCxC1pJ3Wyf7dmj3DeZzdsi7SkrxdGcXPLyz9RKaGQup8GmsyvPmV",
  "key27": "53MdK8SQgib91SqBdM2ZcxnDmcFEp3AtkrStXWV6tGbU8pWwEKb87HRHn3tSep8e39W1JDgDkjdHk4gBYkgqBngZ"
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

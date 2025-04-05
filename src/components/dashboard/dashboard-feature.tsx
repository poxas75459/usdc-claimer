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
    "2yPcb9vc1f9CTrpPVM8tecERGNGQ7LH87nL8NDA7uY7JRU7dEMRjKKmwTrwi9xsCjTfne4CMoDP7BU62KJZJSNZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gV5mNke4okHPan6LhXXPLRWrHSjSsya5Ui9dsuJgtJGypWTSBASgEecfsGzqL9uLh29YPu8NFrdSDp3nxJhhnZo",
  "key1": "8JHvVteNVu88YijdvfP6Mqc1KSW4bXgS8UZdswnjpc6cpgSMwToQod7w5XQSmBi8fQTFU4Xk9E4Bj6Geeeywawh",
  "key2": "3Y12k4LqMSDjBx5xUMzWKDBF9q3SwQn7fEaifmPkHxFm29LBiJznNeTvy8sf63GSi5Dv7tMgto7rpE7vhfryZXqG",
  "key3": "Jf9wwDj4MsAyRaZNB95sRy5eEL7MaGK23o5ugASfuxyqQUZUsyhuXBLd3dEp62L9iXZJ8MWkmo9ha8b8BKoSX96",
  "key4": "41AKt5tFA29n68f8YwkpCzWWs1mhkQ7nomX6ZvTgRjNjS2r2H6Lj3VzPRFXFtbV9jzz3DhBzzgzpaTUigbVFghNF",
  "key5": "4kXz1sibqWJAGSep1H8qER8KeVK6tHGAPE6rdN4K4BkvcVFT86DJ3EzwSnGegxbFuizaZqG4V3DG2y5G1vjhcuGj",
  "key6": "2kmvZhPTt8juf1jXN3CZoXAj7uwyC9Ppk67WvzrCrz5oB6ztkPdedqv1DsZzEduCGNHJhG3jgEJHQJiKeMtxDo5A",
  "key7": "3pyUfycnR152ZJTQqZ6hLrphsTBqsyXvQQFVkq3zpRdhq27zQ95W3C7PsnsKQYbtJnWAfsbLZQTYHTesbcEisWQs",
  "key8": "3qPVSBgK74tHYxHUxS7czovjpVPo83ah29tWmCv9BB8mRWqdbnAaFpyrnW9qdxcsgP1B1JYH3Dkp5nPvvYnpZ2f5",
  "key9": "5KQwyXENE89LWkzVZNmVyqGGD1HEfQtj6jht7VFij2EVWumvNxCrTYLnsshDZML6EUHP7zooToWSDtcW3M7HXLqc",
  "key10": "3HRCd583KRY9Qk27jUoj23gMS61z6F2Ys6dUwZ5pYPCXpzSUmUybCtAJYTvkB6RSwHqLzxDCpTQNbFt98Bp8oEdq",
  "key11": "4rNp3LckFGeDxQhyBsWM7iPqEiPkJ4SKkxetRfU9kVhjQzKLF95bkGdadQYA98CY78ebKpXYZG9a7iJQikuLaePq",
  "key12": "44TGWdJTNrz5C5mNTcyYuiCed5hrR7B7Jkx1BbeGNtnffZaazLcJLDVMvQtezeb5MBEcurEgNMigCvtkog7gNg3M",
  "key13": "5V6CeMRB2LNQA7oh6yxcxHrmffwcDwhVt69FCyH26KPcvLN9oLLPJxvBFDZ7iAfcwjEjJzxHyJB1ogg2qkVonnJ",
  "key14": "3iXeWR91cXnqStq3fWKxFKMbCqk84LXNjJCCMGqwaG2YnzfY91saUNJk4BXP4WihsVCg4BrsrwHtQ4upYUt5hof3",
  "key15": "2r2CmRHrccijVHb1usg2tJMYd2xYMPhUrETWrgtYY6djT11qic1gR9B3E9AxoBaWDMraZuG9ewF53k2cxXca7WCy",
  "key16": "37gpGMi5hB4fLfn1qmZraf1mnusR8vWSDyekTLeKFGY7BeCbTbZNEnVzrHtFHW3fnseDYQMLQ6X1rbgXAoCShS2d",
  "key17": "VEVuwrQY3jbwUDz6YLover1jLfvN47zLUFg5MmzjwDq6ZoiaJkjwz37DwJHvTFYVPiBzquNhDiZsm9haEEFotKM",
  "key18": "3vDMbuEGHZMB2rX5epDEee4vFN5WAkHaWhTmCUFeebDKc2ynPhoBwTXdLzTt7XwrdNawQVamhYw6cS7HPgEYUYvB",
  "key19": "sMCZuSdUJ4LGXcPKM5uCtQJmkcRM7y8W8Ko2WbZftQs518WoELdsuwxUcQGBW2L3T7ZQtToz2yJZQ8Mkrc4GjQi",
  "key20": "2v433Ck7R43TXeH6BmZqUVGpy1wpQr7dVEENJs6rS5aPWBULtW2tqXi155MRuSTexKDSnCYrAs8pj6SBKawiTM5V",
  "key21": "yY3WLth8nc5m4N5gqAcqv2pRERPTgnGoQhmtW1CrwZseJMbfnBxb9AeuNjcLwXkRv7Vzbhx6z1ZxoyjRANVn8ns",
  "key22": "3EjuWf7hg9fJgo4UW22Xzn4d5tRGRM4g3Q5e8j1FgitBRhbQ9L9pdqHQKGkZJpn3Xc5yQ5y57ASUhauP13gQVXPB",
  "key23": "4r8vme8Ur6LL5TFiACRwCRugmrSSzeR41jtJXS3AEPo1fyHfSpVCr2PS4gaTP6BVB2nFXKZ1dBnQE2KGW4VowV5Y",
  "key24": "1ZdgirvLjFAgDMiAw8T9NiYjqbYdNPwFXYvyZNTucdYovZGA1gkx5rr9ZJSwtBD3iZZ4S4WRexJE4UzjPCCHcqL",
  "key25": "5ZgLjts1KnaRBGAehjg2K3b8vPGgyk3BZCk2zSyJKFWzaAQN7DXDV7Uf9N4wy5WyqYokhhipRgB6rykgB1am3vdd",
  "key26": "2M4tgwzZByF299R354GYGcE86qwxbPMbU5EFQsJqVEgmAjrcZsWoqnJg4Vjg4Kcb5D7Jno3on1GbRdZ9EfTnHxux",
  "key27": "2viwu6bgBnr8XELHzD59ZyB8VjmFMHT9xbDtNrELEeYENDy6AkmRqAZan2fLRTwfczD8w35NYBFma9g5STbGJUBd",
  "key28": "3YNUxBBjXwNMQwysCGcQ8NM3aEE8oSsSbc8KuBKGPMStQBNYRNe6YFFeS71cSxzrfyVymgBHtjnRefBDAUEVg2fN",
  "key29": "2ori7hBnKEagMTPYxmwFZmf9nrxYommbb8Zo7hbDQLWxEEhy5K2feisZHD6XWMAbEJ3pff8TYAQyL5vma4B9gocC",
  "key30": "4rhPbfUxHmL2w2UwF1qihLkTUkYWiMYQrBRdTtP5f4ByfHSbFDu4nVyxwgbbuM2Tkf1dL1cH91nWjctykK2L6Mtz",
  "key31": "2zTYRF1V672dVqevo3bttHiww2EuSprDCEPoGfv9ByEF1pxVn1unBP4NHvTzQiUmJdCBaM1tnm8pEybcg97KATB1",
  "key32": "4eSHnAnM6HpBmRUNbMHhwZDoCtkN7UWPvSqPTca8QBjf5DobFf52kLdXLwTy6vRZ4rZm7eGEWVGsioYoc9btbkR6",
  "key33": "2kPWYnJS8yjdTxFtUUXJYU1LYj5hit83W5tLwH861uKCr2Hz6VNa6KEXittnyfzRXpeGm8ZDFNePPnir8QpJNjz7",
  "key34": "5kKAjGM2qffvwJtCAEQy47qjkbe5yxPtyK251BEhVkb3xpjD7wExHvD21SRujCvjTL277yT6UZDCTfLVWLQSo3ds",
  "key35": "3hKXEZxt12LzuFtT6b1AHu2byWGSMJHgQLXiyLbweCYEPvt4Y9DTPU4RBAkZsqymrsRrbjgDBHhvzWkcdDJfpUoo",
  "key36": "YgK9Q1xHWaFjawiThBRy3cEGhrsFqnKjsAo4W9mc59Tg5SjmoQjK3BwUSRd1z5Ye6B3BYgTvKQgwAzPRpMGy3Zd",
  "key37": "3cE4dDo9jCK47L6tceFANwoScpHWXcVv78qYecMVaKvbicZGm11gtn83PY5KXWdofVBk896ocbsdxxPPuX69bfy9",
  "key38": "4CdXERwzW9zPMQKTfPrRp4QNqWDyqYvtqf9yTUPfeaH4ybBZ7tsfqb2LXsuHezJgEJT6kvZvcQ8pNDbxWz3DVfpa",
  "key39": "kvZGbuyJ2QWtaeoFudrvFgStoZjWKjqo6Yi4VQgzmakCnjYbDg14yt3SgNWzQoM18MeDSxvR59a5wRPUGwNhTaZ",
  "key40": "3pLEQMQCsFYwzBwaLQBESkEAkt1WymDrFdqzN2qNvnPcDSGYjenxYcxaLNHteCpf4MrMCexbCasjR8Rg2nboT6EC"
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

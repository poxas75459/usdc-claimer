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
    "4Z1x8UCoxtfnmC3ZjfbQfhUCHvvz81CYSkxe8EHarYKHzpevEzZ4x8XGQZDPUMMbZGQoxrh7GWdaJJjFxTYTVEqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jbVHimQsndHkZeyEJUe6A1wwNGWwYTGurArMaNaijUipSrrcQtNWsPLjhmWec9u6VA1m5b4yNuzMyKpxEy4v35y",
  "key1": "5F1mpTd9JbJZ3pVkxqyLH7sbujQY7P1o7YH681L3Xpdf48f4xR2badiUFcarDJ4qpfK9cKS8f3iSbwnUuwmkuHZA",
  "key2": "2MoBdRZbiw3VSKGo2ttag9xMq82QWcwriy2coyF6R6SiHNExk3sLDKRHoyFg6XjxiSKyp85dwes6vN8hC4k21s98",
  "key3": "4QSd6G15mHDk1LUgMA9zgW6o7eAid3LCC4BKJmrNTC9Z8znbYBQLWaVVzajwsMqDaog4PNAuaNabkrGuVDTNBgCs",
  "key4": "5CQ67SgSMGP6tYuY3QmJ2RztSPK6DsuameM4G9ULL7iASwHXoDLC4c1nA7DcXptKHStccwdFe9msDgmTGxirsTeQ",
  "key5": "j83ShT8RrKgfUxKjFUMzJqQuaM3qjCoWNmdnTFhxSgqyqhZ2Xuwmoz4nc56LsGXwyHFBPNFcMe87toeoumeL3iw",
  "key6": "5YA7deSwGYBv92bEChkKJKcb8jL7J9QPQ95iE5sLnpbTgaTorTyNMiQQPUJaMzDUt2cJu84p6RuiehGtR3FnQEQQ",
  "key7": "5gAkymMjVjgBqrHRzkU5b1XoGt4RiUQqGHvthLvgXrLhpCWXFhwR8Es16zuhK9BSngBuaQ6qcUJs7zedS4LhYfW8",
  "key8": "tA1o7b17vweUMUJVvf9Y1gvSx8TrbpyD9CCv1g7mHbh41st36dDmmHbXRhHMawjebwBU4Ru9U2fWrAKkRmKchVA",
  "key9": "4DMxUwvJjP6PocLkCkCPMa6p32trSGFsSsHqbzSc284ck11BdLoYdGKree7ULJW2Z7QAW5hrPTn9KByD27qMQASd",
  "key10": "56aEGqtFdSbKjCvLRsQerg3Lf4RZNYMYernXDkt7ebB6CHTiHtcP9Kp6RTup9tkqBhP9iFR5GhMvigAp9Ao3Jxsj",
  "key11": "ZFQEfZNwsFftF3MaCLk65sYk1CA61DHsFiKktFZS96n7gNo9QHYkhNuMD42jNqmyX3nxdiQScz3YHECTpdruuqF",
  "key12": "3vQPt9s91p97pGDw4EYH8cY9suDKLea3M1rd5z5LdXpXytWS1WcED8oomUfGfAm8i5oDoKYcqynHWqZzJ6eG5EkY",
  "key13": "4XBpfcZFeHRkr94tZUACxEqn5FLoHmEvnniWCBeoUG7a8Rti26yesZhkwotwTpFuw7rSggnab3VoJJkKgxkaJunE",
  "key14": "4TzCy5HprJqqR5vNpH3cU3n2mmP9f6Myfyqn1PSWJdPsLSvdPrWjDYU4KVvRY49MNmWYsQiPQbnEmK6LHTEypNDb",
  "key15": "4WZrNZvNHUaqMTAi7eFgP4GSfM6L4ts9j5vJpnUbuYP9v2Te6oC55t2W2ouYERByNppLrYeNkCXof1FDEje4ahC9",
  "key16": "4z5AegBQ3wBmfr5zbyBUVu3bDLSATZKjqHbXFsUSD5SWaBD21y9LPMvtNeMZ3Rhf4oA1zMUXFKPJLaFW9jH79tHp",
  "key17": "2XfPjECME5SYC3X7fV9uCSJee2Xp7KHcMnxHQg9gBXB59PkdhPMzXTZjQ7UcUJADgSYhzddyn7fUZ31dc9mHSjDD",
  "key18": "3HLkg5mVbJobVGCKTqc2JdxMGBjQvKkv7SJ7zXBorQwm2wnYTG8me5cFgwZjdBW8hvH4NbVNftDTR4EhCzcyqXb7",
  "key19": "44wEhaABVZvTateFCBwxcyGgFb57UoFAikwKNoQtjxbLqC5TQdJDttpNutvZKdBcX19Dpbt3DRe2kuvrcy93KPPr",
  "key20": "2nk9eV1PNH4Qz5Uy4JGfy9AhoMUbrm916Ddh2148KPbtL1Z86zmaMLbctQgWMS9653kHi6SsQJC8mZjHZpkfZVyw",
  "key21": "2K55nDeSNU1kz5368uLMXWbHvrRajxHCkmrMAKSeTApjfmDMZDPsU9b21qLEwSx4ETEVPsWACawNjHLJWdhAt8S8",
  "key22": "3v6bRP5ZuYmZRsyzjSk4ZKiHuLnrJzKcJbszUiSnmRtk2wZ2cbSxXWp65sif4nX34gTt1TjSGtfcKVKJEYs3PBui",
  "key23": "4sDvxmyZLqs7fLvK8gSpUFXEcXrgA2K7CpwkcBH2H8wYRbMicdgB1tH7ngbTBEZJrH2Fmh2ChEyzQHtVgBAERqgk",
  "key24": "5RouNFrPBDhJTrDC38WSQQuPzqLHe7WPiSNc12VSC4VFv11zuoz9ByJrW66g9RZ5JWJSrLHyPYDZw1gYH5fnPKgY",
  "key25": "4gtoLcVXnMhytX8VEF7mduxU3Nt9yQqaNGca8CShTT9DjPCUHEwfBb3k8QFJPhtmhnzdXDbZL7u7LzyxZmcCsEDg",
  "key26": "QDj8uoRfdPMqZjyxxViksbqgPpmn92MDY6inxndSwt6knN3PcvTSvQFrZvCv3waHgwnQj6gnLePnSq31qq8YXsY",
  "key27": "FCcDqxMbpwJ7MpTRzQMPoei9uFWA2cHF7JyRwJUA6B5uxqj19ma7DNkbSCnW1t5HbS7YGmP8R1mLRY782qk21uV",
  "key28": "3dtRetk5vB8EdejGTkBvnZFj6Pcosb7jNbeicGCzDxDeV6CFhoQXHxFpsPSYoueNDBfNhXTgxGoj6E8qWVp3wSYh",
  "key29": "5AgHWk4qRwjagBGWGXREqdGK6Cq8pgMEBBLq5EumkWd4QF5FNn77fPkzf7HtNqUFFjF42wTrJA2vsBTHreY4p3Vm",
  "key30": "53SnN1gtS5g37Mzcdtf73jrZ5tDKEMEvHGZuyVs48HBopueNisv6St1S9tcJCtvgiRXZuXZ6xUw1qFpz7RPLUKhm",
  "key31": "D6bYaVjQHaWrcEsrWkPvJkjy4SqJjs1s7ihVuY92trc67dKSSy3u8HtzArqhS5VcGDXBxd4ZjCGjTRmZZKSvy5g",
  "key32": "2WcUdEvpb2itWSb4pXTQN26SretVg3J3EpdXN4CRt4LeXiuzmLN4gW6Po4ncksgYZQQkEPLnCmQ2sTAd5v9GmC2L",
  "key33": "4XEJwDWvnuG6Df8gjSWGjomUcLqHaZt9aD4PDAVHqu6eiBUyKHNTZ1muKLPEBsEwjKiWNatzgx8hvHyuS3ACqft6",
  "key34": "5FfSqXK57PQVbnje839hkCwrwCVochqzm86okGRcxE5tmVKdy9LzKbktGj6fHWTMjwGfi1GaQ52ieiZfUC5kcKDP",
  "key35": "33yGMGesdrUgoHe4QYTENGPhjJu4oGhhaUCZeWw8jbK1kuSBNVzk7Wmp3YUAtwzG5Dxbqt4gUqrnSjeJmQkydV5L",
  "key36": "42qdxHZ8mvX1YZp7tpopFxD6Gu6yfnVLsoHpUdubUR3VeaYN4BmkC7hPhqrw8gdb6ze9YNkZWKDqpAZjYpxtnjgp",
  "key37": "3hxkKXd4d6KkxhtyPXAKqnaj9jzZ7vpNXMSWbGHYjXDJc7QKaCDCnM84Nmae9j57fRyUSnC5Q8AeZXWepckYJB7N",
  "key38": "43gMfe8TNWnS9yJwZNDjEkQXa2vQWbidXCJKFs1mU7QC83Z83EbTLisS5H8uRVCRz1cJF3NQ29Y4McqGpBhUfQ55",
  "key39": "3K3uGhART5krmx3e7SoiyyRMEQyGCz3pg18fGPw7VZM8E9vraCEo7Zpk9Fr2Jiju9YtvWe4AwZsvS1C2aX91TaT5",
  "key40": "2zZG5rdrgT4L5emDoM7Jepo3vjiZNPRyjRKYWWDTokf1MKeVg7VSuZqhGAeQTjHZ4ULuZHS8FRYyBNNJEFi1KXhy",
  "key41": "2aAC6dkeKkkNnVvJ8aRpZh2KNAMe3poTweF4RYpEp7M12sybsGvz5TLAkfLKiGk2zRshrKnTrGrZqjTqEb767S2o"
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

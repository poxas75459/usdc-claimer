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
    "JPWEYz3nW24x88Nia3SZkQnHCGtDxysW74WARRKm9fFJ4fJgF7Xx96Z9GQ3VicrHe9jMDE8NzxUFt85GeoeChgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfARjwvat6AUWaajXEdYcLTQncw13ByV3k9UbLzVJnp1ovcjtPU2oQn4DYXhxMXcbBeuBX9vKxAmvpRKt4JNBS8",
  "key1": "2J2pJiM4SrfvT8AJQdUDpifhKnkMEo8dNNfaTmFf9M97LWQkrCkJEwUJViJ3jmtr8ZAKuumv6VbfBMzJcGYNTFux",
  "key2": "3ZnsPwRt8SyoY3TKeTVRYxLTcAeXf84EoZwQTUNWznbZzCBWF7dmmLAEmWwoGrVnc9DkYNtxJgE677NG4gW5e77",
  "key3": "3XMv8E1NMkzEzsNBkj8fyzJk9MSspi88uiEz9dKwzx6rnBk62RCFib99qhTtVhDwDzCEpP8FNYSAq1heMfBSTKjE",
  "key4": "4qxtFCL9NMQAcwvpsxpruhFDDfKjqDm6rV5tiXbUCtDJxmJUYcjZzymVNJzWbaBMe6kn9HYud18QQFZC5uUfPv7f",
  "key5": "4cxTPZ95wjfoWefWPoEpStEj1WZVabjaaiatT4oHrcY3FfxKAsqUxonmHcxPLf7qDrwQw3Gj8SUGJL8zoAWTydNe",
  "key6": "5qLffieFZzFF55jkbi1b2fWZU78hKcUsHm7eDirXsJuSphq744T5TiwEYzc8nkRhcW8Yrg4Zajse9yVTFJqL3eHN",
  "key7": "2fGSKcQJuSQ2TLizXioMLJqSFBdz9Q73V4GJ9HmCKho82uHttg98GE8ZZBPthyfWo6FqjV5Z8rX4Y8VmfXKFNcVK",
  "key8": "Ua1xMuhBPQhekZk2kG9G7PgH7aD8o96JcDeSYVgzpfKSprdmxe9asNFEt9nLyNppCwi8akKAF7M4WerHgLyP58E",
  "key9": "35ABbjA6vkvSSzUah7sncB33HXDWKVfwfAk7qD8ryLgvvUVn2qAXXkjtsp2XLKrLc334fAYy5nUSPcMVAzMTzQUf",
  "key10": "4XBBtDSTxRP4phU5dLR4z2AtkVoRe9cfG5BHnjK1WmFEuydkjmi3aAbUZKZzsCc9XXgNeruY4pmLT3k6fZ74Toem",
  "key11": "3hgZ8e4m3Q4sfj4VXNad5EjAZK8kEjQcDHVWbZtWzNJkrNTR9BmjXhtLc5QJZnDSxJ6zq6US14spjeEyCuh9tPTG",
  "key12": "4oYDR8u9DQB9As3WinvqdFrZeRuJwnuaztRcwHQysC5Bo2jxQwc4AENjXUa5z6J2ngCV2YDQjNyLD3ds84AWGs7x",
  "key13": "3bXqef98oFUG4S2hBjCwRbBtBwHTdTk2KNoa2MvmqeZVKPTRRxx48DPGvSUjvtMceNfucmcrqb8Z9iGX512uyDhR",
  "key14": "5oe9GYg2n2fhBx8nNruha7rPxNu37yHoSLHoRHmCmzrBSryFCwPDo3GKDrgBTKFpmUQ8YY5TPEGd28K311x2i841",
  "key15": "4KpTFy3WmnL53WxPE6xyoYGyLjfa7g8Tm9PVBfJb12MsDiGat7yX4RtEqUJcFWQWk6MReLjWCBLKSZ3QjaYUQsQK",
  "key16": "swjdqbTEswAoj8rkYzpesxMGCFHcjQ2yN37GKsDfxGPovCBXX4zrByvN1Cpyo3954169yLrL2oRjR4fbK99Mh6x",
  "key17": "3QnsRWh2JMY1fcu142JcwX1RvYwAeonEjZ8Jy5xtk4v9jGjYvx5MxSCiPf4XLpb4vsUtkqq4sZvWk6X2iHo6CtVV",
  "key18": "2G6w9DCPpCNdCMr72cx1RKgTXgiWsZ5qmpKQQNjyR6fsS9QEJSUE11iV2tojCmA96jRn5jmhF5FoprEcQQ6t8zyu",
  "key19": "2DR1gdPsZSQtCRdMAQZpTzDeqqi1zgH4GsS4EJLfj4x4EmbgK5mW37ifjKB4tgyxRTumS7pojxyBkFxpF6WFoecR",
  "key20": "2SJLbRt5teH6UQukpvZZhLpBG3HTPqXsuwiihWqAss9YTwpTB1AXsJzyG3QJqjhqddL3cuE3uHgFxBdzoLQ4WA87",
  "key21": "mmzdbHLgPgUkHpPxVMF3BsdhUTw7LUY4RAFz3dpgCGrum7qWHH89JPRrWsHQ8x5YHQMNv5onZrKMUvrfhv5YPkV",
  "key22": "3nptuhRPdabGTHRM5snS6pqNvuMNPdToEhv14gUBtXbjS97fSDLtBpmVKBk86vGkyUDCNuV2daRLnjdbzUci9xAJ",
  "key23": "4bu1p6TmaEqCHAgswQj2uhNmmvhzAgpv9twBR9MjMkUT3zG8eLu8ebkuk8Z3YHnmpEpBx6xiuq8fdnV9ZKe7hiXS",
  "key24": "4ARjZ33QucASK5nsgz8rqx3T2kT5UQzErskpysDktZECGWADL5wjSHXbRa46wbAS6CYP3BLwLTDQRRxYiZNAsoQZ",
  "key25": "3xcj6dmJrtZGi9KtoThHtEPaW4qQ2mtzoGTP62RsfEhLcaPrn5Zw4Aohw9mCNwaJK9tNzpQMr1SVW8WsUxWKHK56",
  "key26": "pXxKKcGodgML1LYCQ5fMrCESus5EC9m6jgW5AQHzVF9U37L3z3Y9gEGJ4HpUjQqBjqDd7Ejp1Ry93nfQ6bg3aiQ",
  "key27": "4F3KkUayqshFqUrj5R5NKa8VLCsVM4o9WthA5JY2oyKPCMFmU5RbehaWNyFRjDH3YaYWaMbAPVMjaCuLcoCgButT",
  "key28": "3FzgoDr3pjD4LC9S6DLgryfyVf4UJ8EcdAZwLnXxfE8Wh7fsYjxtPw1iHNuZA1Dd7HsN6pzg7Xc2BYPgmDcSeYTx",
  "key29": "3TPL2aHNFQUnV2RwbkKjtg4MQpfd9KfDFKozQPBdFHPBjfn7CGkEuekX7enyxjQJUuT8BX15S68We1oS6nuD2Yhe",
  "key30": "3zqJs2LAZQnqdQhqyy1ptGPzQZnZEHtn6fxcot1NacJ1bnrsQUEZ7Horiyi51dBi7r6vSFHvVQ4MUdzRpYSt6Jpu",
  "key31": "LFq25QEiLG5pXGk6oGuVdXAhqKkRUvnXhp3RPgwd7U9nXxdH8tkQMbb3v19jqt1tqWVayvZu5LHsGS5W1ExDuSP",
  "key32": "5oT8kCatUCqgXTyAFh6DiWYBWzz5yFMtLRFnQKoUgTo7wPYa3K9tFs1tLQnFTGFeVWaLP62rTChLBCfYVm2RAPQe",
  "key33": "w4nGWtXPcVdAAtv3bmj2riDkj5WbdNjuPANpH1CG35qdGhU99fTY6KvATbydExu8PyoAZ6e6piffgcYjYQEXtQz",
  "key34": "42pS5apY3WrekdkWK3CxmPs8d4vdwsBt1z8nZuUKMy89yWjGHL5e5WQ154nFgwU1kLsEjmMoJpaGqf3cGyA9YfSH",
  "key35": "36KYpvhuh4kHZNgZjcGUF1MNtmheu17HgepweXqtDkKdfox39oiWnWkrCEYatWLgZPBBNLHPRnV2QAuCyt27WW4C",
  "key36": "5oJqXockvTmWEHSrPpHif75vEoA8oZshFbQgWTR5bfM5aYp4j9cinyB2ewoU1gM86cd4DL7AoEqh6AG6ycdn45aL",
  "key37": "5cfNtvytCiCdUxy3vYptW2wxUmfAi34nSP91Z4MHmVCGfB6esmbKZ7tbz7uY9KmFmFzP4V4eMWk4tgrrUD7KoTik"
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

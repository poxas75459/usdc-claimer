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
    "5zE7sqgJeKu7FB4uBA1ERqHcaUJkg63yQAoeWmcGEQgUE7h5inDCQAwGJRCJeuZ9YzH9Ck8xMi3tDb8V5npGJeqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9NxR9H2fWch7r4fRG6Q6dGnTEjaJYK5dRCNAQMuUHq2EgHZjJypx9JNcwkYFRxXFYshYjYXBy2iDKoPqpLEnkRQ",
  "key1": "e5cQR7k6NkT7aRRWiK1Rynnk8dhsGUm1rGX479jxdeiGfS9JBsFgvqZK8nsrWNPEXoJKEKcTtDfqRo2niHexz7P",
  "key2": "231CVhWmisnL3JLohSzvwdb1547nmvUaLVhMojnP3Ni5wj7fTWdmCYYjCZTwSANuivS6EeXS7HPyT3PFLyhRZ3LH",
  "key3": "5NRxDcn8t3eyUZzaipLqQrHMRVALgNR9dkU5bQeVQjapnqBgezwAx79b5GQyuNv3Remq5m992PjQAt3Typq1PsxQ",
  "key4": "26E766D98PFw43GTPWu9XXQv8qQ1NqpZEM7zB8Q6hFuTGsRqzxxC1Q2uugKHF8S49JQL1kVqoFnhzjbWVma3ev6u",
  "key5": "2BrXox7n9pvKacbXbb44Wnd7PxrUdGakL4zY9NLNAhCfzvmwkEN9db6jqm3Kvw75G9gU8gr2nhLoroNtJbUT7gtM",
  "key6": "48YVnYeDa6jXKbgLe72tPALxqQUuEyXMjPkbnxqs5bEJvTfAT323UdiN8Mkt7UF3tPcHHDFRkWgtBUZg4MjuWQtJ",
  "key7": "4Kn3hdDW3Hupf1TNAQaWC7GukuhMxtQdYthddxZCWvtYguT7MAVqFTzsQR2ZF3w9RSQX2pAFEyPza2KsLWt2FJQN",
  "key8": "qcPMJkPGDuMsHC3GLftXFT6JBCpYyqq7y9BbaUTuJLsELt4vBhPU7UB8qe5odwzHTF16UE4XGzwcEuv5YGhZ5nQ",
  "key9": "5FUCZTZYocjvYbKaHK2rMFXqo2n71D7b9AEpmLmuRvDCJr3a5k6v8Vjxo3GFJr2nWroDPMq13bAftJfgHw4Hkbqb",
  "key10": "3vNdyttEYVqATaf5MFVJr8QxEovGgmVJawaLK2s9GVzUH1ABESHxBW4NiWQtnVSPRuB8t7jerVFPuV28nkMo14Q5",
  "key11": "4VBbK3wJzqCH47Dz4nga1GezMCyC5iuD9ZKGvo29PZDdZxSk54fk6VNJ578rRyvfHSqoTtsmEFUCa2x3zVaCLB4T",
  "key12": "469W8xcfqczQ9DSa3XmQ9FFozDtKThvb6uLMeVZDFuiHvM8bKcoXC4YvCs3z9QegD6mPHL661V1csGCgj4Y3iFAt",
  "key13": "34EnLVep7dsUnWBaxynCuQgas1ekLKMbCpCvBaKd3uwrg6LSbvqcNB52miX1tF3gJFMAwo7oxEzQtfn2om8ESdgH",
  "key14": "yVj2hJVCWUfzKNaGb2Vb7aHU57ihoXjpji9YBPiySi2T8xdCXuo9fGsha9Dg9RDo4rwTxDkuZZFYHteW1NPQC59",
  "key15": "5CyyHs5dBa7V6jnwghM9i4bq6FoMfvNu3Xn85Yqh7zAewByoGjNSrcRnA1yQQr9rDLGg3yxHxoy7ofv8VuaKRdxY",
  "key16": "5vSQYVY5GpVpSKXf6zWp3CM55363ZfcZNep8qemCYWUrXv7dFv2SYdRnBJT7SoWuDtURQKyCVUaYu8DGCCNUCC9Q",
  "key17": "ZGzsDhbty7h8yDmDXSYfnYDtj3MakHnU47Zf6RcRTMcd154rHvtYCMhLAmfmAASL2MvtyPhS9BwR3PmL9Q4mjFs",
  "key18": "mjG5wv4KgPjGsPowSCTSD4asnpvuc6PaFs6yorkZarg6Qr5NjjymbSyJdMWdrY4vJxeNxWne2XGawhZMue41mZH",
  "key19": "4ggupwtcej9dupzRR3qniJM7jbdR41q8yrqdBVAG4c7NW3QwGjopobvmkbc4Do2zKMGp91tBX3nVK8mE4Bh1MgsQ",
  "key20": "2LWtEj6g5gv3r1E8xytVmzBs6Yyox7TcjVP8batRmQoJ3VEdybDqzYFGb16yN2hbgZUSvuohyzh47cBZxF6TFn4F",
  "key21": "5vMYu3HtZ4SHdY3bQUHaapj9ZrZiWwVpzUTGj46D21E6DUNh2EnZjUH1uYbRZUoJwkJNHXNCb7WWb5E9UYV7R3J1",
  "key22": "3aZjZNU2A8cHJ8MYPNkPrzu1S27bV3NewHTzNBwuVBWvRL696Cda5HiMEisgZPBuEpdUj4EewVdHUkvwQFrkVPXc",
  "key23": "2hoAhjTxr4QnN6NLwDZQVfNmpzMJ77SgvWbxGsUePCRfGZdD8Eje4mwRbvzd8gKku7gacpMHxkvsWJ4wtT2JqmKc",
  "key24": "kSm98T7TxyqSwJQ9U9cEcjL1EVKR18yMkeLknmw3W6x871h8bj2xApUfM5qHN7gf3VbiFtFFtxAiDSwpwBds3vs",
  "key25": "GfUhbZjZHxktafVQVM9hxzej3EmPyXKaaE1WJmGVkGuxjj47s95fyjswKNvEr22vCHN3JnHyENTRXxMXsk39MuV",
  "key26": "3L8LYENb2m9yFUJAV4jiJSLvSg1exBhS8TdsRXiQvJ9Hby7SZJGm9YKg8h6iBveQN4ycFmJQmXy2YrvYU1xzzSve",
  "key27": "4cXKiDiFpbhmkWHDe6bJ5bVeGsqpmQTAaDJviV8VV9JMyPgHiNJxDgHRYDZ664dofAJVMRFK4CZk5zSUtQBvaEpr",
  "key28": "3iWcqujfVaNbnRezaT71reEdfMbqR7nxKY4ECWFvnS54RZ8PfSmYdLvNbw2qc84vHwPVa8EVKSL2qAxLxuJ8X2AT",
  "key29": "28uEXpPL8vzV5ujV4DkE2HwfUYszFSAub65CQKuApL5jfuwgfETRphpNk6sks5sUxy6eHxuqBX65ze74w3JZvLF4",
  "key30": "5ohQUCJPLA2an1y7Wb9RYrgbxoA3mhqr5y2bDhCkid13zEjdgDFbWNLfzvosvZkycWCemk9Skf3dAAdXKJZob5oq",
  "key31": "tdqaVPwmZza4TKncjythUqNqeq8YoSsMkL4LWR4CSMdfUjVvv9HBbvrufJjiZwSkuyJjSRQwjwtfSFnQCM7VKG4",
  "key32": "h2MY2uMQ2cVLxxEdhDMJGP5ppdNeUhhXrroVag8jVnvA27oi2hhmFADBPQiZgLexo4KD5dZwQVgzzKW8z2bBayn",
  "key33": "24bjPQuh6wE4Jz2F6QmnuG6SdqBVjryfb2ENHV73vgvyzY1Ukg1Xq5eWTgWf3UnzSfU2jnV2Wxi24Pa4ChGcqC4f",
  "key34": "tRqKjEv9aPjjjnBqRTeSh34bHXWzMCmJaEcC7mYv6y5NMGcNQquKh2b5JoaD4zCkDACm5x4k2zPSd7T5iUCMuxK",
  "key35": "5tZTLW8ku9nd6xoHEHwvmTMH89UHgtSWwAB4tprqskDB1GfbdADY2RZXYY3TyXcsqzCrNHEA9GLXVtTT5awrBETQ",
  "key36": "5gexDMha8qfugxCuu2tqJnu9WaBC3dDj6kdnED6x6kCU9K1WHQrEQCHY4vWYu7qHi8xgyXzayvEsqXKnDC9aLRRk",
  "key37": "3zX8TJ2S85q97BMcVLeuQ2stP3LLkDuVyg7JDuGyaxiNBvD11eXHKJUbpbbvAgohxFZVswtp7yNYb4sNw22cjbDs",
  "key38": "4CNx25gZGoVdPUk6dh4hQX6wL14hP86KVQ4rPqZRWf8dZVvbn33YbmMjTn9WmrW8AngYCbj9FF5kMRXuwSfHWhS9",
  "key39": "5toNdPaH2jFBXU9JiRrqTspEV7hcTiPtRn9kWesvENyUdrE8iDDUsrw6oGJVvABL3NpxGRvPxCCACx6MT51cmpxo",
  "key40": "37kJEZgq9JsuuW9LM6cGLoDRYP3V1qyDC4mspHVUB3NPPWjLaj2oX82myre1r4f5whK3bwu829kdZAJzRcTLZqgM",
  "key41": "wA2J63hmLme4wyxFm9bvXxqLKhmSGzcGVi46bG5ZzgdKRJYz6LEg6HRgbUAQ7o1t7xE5mqD9vban4HddK2ULe9h",
  "key42": "65PhsgPdK8z5a6ATu4jKD98UrLNbCBRxDgbv6VM6CixKCymbtfEH2Nty9rwp2asmSCaAABbEeUpjsfVmhfXjAFZ9",
  "key43": "2jPL6riEzgxFsD6nrAaVxQct3v8E2ChJeohVhG7qbnoZ5MrFp7DxujtGBPbbYVSoBTPUgHuNN1srAHghLRxPrrUp",
  "key44": "4f4JrwYajaCzoHEKkuN486QHXZKfViUAjLs6URW7SBHtbHqURvFaUSoH2K4YYJe2sH98BouwytXwp6Wdi5q9iZi5",
  "key45": "8vq24YDfWaEpfx3fRgGHPMXw7jrtRvDQx9xAGD8Cpxp24kioVvFngbfWcHZZU1NHfQ5kohVAUn3Mg2yTbhMKg7V",
  "key46": "5hE47rJrTJMEk4JsmGsFF6NDt7DorKXnkrSRmd3mBKVGnyXK6KJ36NFj8JApqRoLWY4q3gW5oS1Sg2Dr8z2dJuVi"
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

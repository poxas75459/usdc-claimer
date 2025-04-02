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
    "2KH3wtZXKrV2BjMuX6EoqYxc1RoehV85Lw4kVoHYRUBmHEg33aW2PDoaVAoFXwEEGuU6sPMrFtvpTJddVEgrsQKV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKT26gtxp7wFkZ8wj1eKVy4dDKRurr6exgKobTY9KEiTtEJvzPGYNZZJuPV3Htb167bxTfp3qUEF9BrGjxm8NJ3",
  "key1": "3nbVDDrdCG42T8LmKcf8hMb1TiSkerKrA3YM61v6Xc61tUCJXfn9ZUHx4ZVYwvEZzBh4Lo8YEWagfPZ7msUJ7TVd",
  "key2": "52sMXJfiVfmLL7wrAwxJCog2AhekL6bm3zXz9Fz5SpwSzBv3KGtxby7GS9o1Udy5vE4utrFQnQ1pACnpMFRD6R8x",
  "key3": "5aqVquH7iXqAeAeo3XsxhaeyjNAsdorZFqY7H5RDPH5GVvfxuRbptHtPQAGt5MDVbAPpcdw3Eun68tv3YkUQjVRE",
  "key4": "UZg6UTfhxDQJo8BnmDYSs69SFhE1zwZmWB2u7w2yuoyhUdaEk1np79E4BP3VsnAcswXsqty6zNiR1PDmg3UG99z",
  "key5": "48Jm11wWqRfjkKkug6ykRbSPyHEvBhdQUhiaC3KXYRN2sBSJXBSWkEngra4Ty22M4oYxi9S2Rw2j4pye62UeSkmk",
  "key6": "3yvKsAFni6zAhtXKqRCoDW7vByWWj81t8DSa52zKWPNSG1pSf1AyNh9mHJSxhvoGQYy61PupRAjomSX1tt5ThLZP",
  "key7": "dkSX9yWLSrehWhq7uFRyQtcbLHJm8hgyLTUrXYWpYmCKRLhGdpGBjVHpjMmNH6fis53BzUEoRMcqFSR8cwuAUF5",
  "key8": "4EuCHcUKmo2TdaZ2QksSiUH375mjQriqNrbtWh9i8AnsAZ8Qe4cPfPXnkjeiMeHYmTu3gy6cCnNeN8o6Z8BqTEiS",
  "key9": "4crqNM9XStYoNcsSTzpsJJMAwMEYQCNvqqQXUzp6UhoRnTtJi1iSuzyavMAD2UwAqeKWxu4Fy6LjgpUiFxDJr2PA",
  "key10": "2JYnyeU77AkRDqnVhSMJVjedZ171uS7vyNF56q7yfJ1mQuUZmupkqkZAVi49Hf554dJtt6Chv4WWtrkBcUPDaoTh",
  "key11": "3NbMhtqi8HwP1FKBYmHNjvVvkPFdTULYvKojcDV4t3YEfzCQToLpM3oNneTwi7cVJYArEsuJap8aWvCU9D1MbeDQ",
  "key12": "gEhDYkKPWhRrJQbMQMYQuvs7nDKZ2ScRMcfwLqeU8xaXAQs9rP9uzivZsyiGbrkBHZm32tGPwkWmtHXjr3mYSbw",
  "key13": "2jAppU5sHoREiEiz8yLExocdJBB3ozT8wnGFAKqCpCZbqT8LtJUKko3PTFUjsYfw6eDPQDzJgwHHzYRr72c3FZri",
  "key14": "2a9MchGWhbyLpSAP4f2XPfkkiu4CWT2gdVF8ZYV7fQXu5Bibm7uYuEXgdvwDXpndYKEM2iSXT19wR25YESVgnMJm",
  "key15": "2KuYYwMEuviV93SV66wPEs7XAVC4grS9tWhpaooC9kofeSd9DyTFUGzRHTQ28FnEWbaJ3ZsWJHNLe8sMGyBGCcPi",
  "key16": "2svXdLgsqztuSrHScPE5x71JAC9jdzkTQT8hKLaBJjSmqnFn6PZudMFR7D4AUPEkJ41aJtJtv63Q8TgjfMVMZtQG",
  "key17": "24Aqxhcje8evoQM9Pmv1Qq186Z25T7uGsPxAB6Grt9RA1yvMAaUAn63uF4kHZo8X812uK2g5Jc3oC9SYJcAJRvQe",
  "key18": "2943NLQpJi1VWLafZQ1C6FY4UCCih8qz3iHGEJUkWsxiBFmaj5VL8naKpDhZRoaMtDNhHCj7DySk6FfgRcFXUTuH",
  "key19": "46NwxX3FwqUBCdSSSNKmf7Nwdo4aA91LzpRuFvUDWgARm6Jg2hxNZnHVghe8dCmah5GwQtZjW8F6XZ9Y3Kzb2aJA",
  "key20": "3asDQiQcCXE4WsHR7jpKjGd6o4iijmGNQrCnGXyaDEmAChDuHPoB3iPds5KGe6pXheBj3ETUY3ptvygcWic1DK6i",
  "key21": "2YMbKG1znCktJg9pPBTWb3wb3EvEjEUFEWxyCdP5oQNYYw8D7P5gKitLp2AL52kZYxYtPNdCgFzDqRjG4462XA1e",
  "key22": "5NsPAovhdKjFnoHAcDs4CVxuRfmEhT8tr1S5DmLzFCnvkU3EWPrTcKmqA1DmDy9KPgyAXU7NjF9JSSrAR24AjL5N",
  "key23": "2JY4pJZ9MMxCaATAZXjMVFYsxHQ2mKKGj8xrYbcr27Q6onfBEdHSBh8gpiX9S3KqAxRzsMfJi8BgshrzKjRP4Thc",
  "key24": "qJ4fkHyDhCNbEs8a4dQKZWR1BPNborWLC1H6yjaACQTQaTChVSZb9hJ7tJsXarHQyZuhMj1z3bhx2XWzMqaJPgH",
  "key25": "2ZXhWD7AeV6jkGdCFyntKeGLF7t5ERd4syB9tpdpHzkr7azPHBczHMpx8fGCTHBT3RTvqLfWko8fCCLGpMbbefyE",
  "key26": "stHETVWg2LZgr1fRMeM3sw7X6HnZrWWb7EQsJfp6Dq6Vx7GGyaBBTo4vHRCd1aaGkUN6FGyWVeTVV2i3n8nCkq2",
  "key27": "4NwPmwDjyXzKnBtF2XT68Hn4TPenf3i8uA3gZXvgjDnsnZrbcS355NRdHWNf6v9wzHHRTmw54o18UTZw5VzypnJr",
  "key28": "2wFhF3PH6cYU76RcdVdyy2PnQNvWDHYpoheD63jMAV1KAU324amjCThNhfR87sDorjD8epyb7qEb2bkJ2zGzY7vM",
  "key29": "4M9xzngq5AiM6hLMCHocYwosWFfA5ytxpPAWsigVBCdk9ny4wQwmaL4CSdChKXuSX1czU4p17JEYEMNbmmXvPZxz",
  "key30": "4NaLzHCXZQ2BsDpsqJE2vMb2rbrR3vbjuqZXmE7vAkXwf3d83ztUyNFdK88T9sShFPPHp8BSCk6bgijqMhf5mG6g",
  "key31": "2SBf6k5wQqke5ECRM2NHoUNEoX1ReQ5utnXzTRH7oYGivn2oKZGzh5pWcMyN3B2HCSz6xXDU56zweE7acGJHy2z2",
  "key32": "4cjdYDMpg4mWzUuBzFyj7GC6xwaoH4Pi6vk4muGTTug4Rt78f3r8DkEkwASzVvvFyxfGfhpRKxvvFAnL8skVfXGY",
  "key33": "NbRpwPJEx1mnsBv4g4NDoaCpn1WGa6ZV9HK8299dJQj83ZDj53GR47QBxRNLGUCEKTYFvp6G9Qp9EzNfHyxDmmk",
  "key34": "3DdQjN2wTwUPxazMfhxvv3TJvqPLJ3qyKzt62u7fq3H5wGPSP5RX91gnp96C4RLjHpJEoqV44JenHNpYtscBp4Kv",
  "key35": "4ZJw3xBUjdq6j2V7vSyGs3gpsibk96fRqkL1KRZoSKUUkbcnYmpFZGfTFibhB1y5UNmQyq3io3o5Uk9kV2DnVQSU",
  "key36": "4ApvZpCRjqqh8o9r2p9WoBxgUskZDM9coojpQe3xHqpUnq6ugdfBW117N91JKCQdYNc9evB3jeGPqmzikZwY1fWi",
  "key37": "5JfaYe1t2X47vCo9SEjPvNe4t9y9GFzp7Fh8zWr1Q3ABmYaudX1s6e6fWyxbqQ7LidKML3RR9Hv6sZrDvL38yX7a",
  "key38": "4eDLB4yd3h3A3SKFW9sYTijoCwEWfiqVauzLsLeUsrhum51VH9LJrPP9uFTyzoZLMDSduztp2EeNft5aZLA7rWWu"
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

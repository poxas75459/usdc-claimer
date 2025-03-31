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
    "3FJF51RCAadSofXaPcZu4GQ5TmaQwjRJUHEtLVe4UWA32h3GdSP1hpvtjKtcnWMLwdR7ecB6LBUVcK3AmwfYnWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBVBWkzHC4ZzDThCRQFYsrLy15xGUjk51yQoDR3NQbxDYofm4WzmiGu87HkLkj8NtUEVkJ6jAkDNvCNJkcVeCan",
  "key1": "2KuHVyHsiKhWRchEnCb4i3RFA2hR5trri6G1XPA9AKtJKRehYroAUJeAMncvuGPMbmeCN6C2EZ9JRCoT125gZhYH",
  "key2": "4MZ4yoVRBAk1pAGzUtAu1oLk7Pz6cQaBy29PnHtojd66CicnjCH5n14Au2H1RhiTjd42FvVeW4uuoPyhRuvt6p34",
  "key3": "5HjczryK1vz3C3MSTSVaeSP8oCwBSVEnozXCBPCrewmSzp5XLbEpkapz2RiWwRXTXPwRE88Y2vn36DcZUcr4Afrq",
  "key4": "2LK2gK8eNPPh1tgyLqmoYDJGQQ8sdx8RSmsAW2RoC4ZJnRAc6ci4fs3gZP4JBA9tC1ibyNLioQfDFtf1NxGYb1gg",
  "key5": "4qbpDVb1weKwtTkcDpUfyaXQ6AWCCm1bj2fbn11vDf4f4MsUfPXDYc7Hept7LfnobqiSbnzazWCycv3RsUuqWtQi",
  "key6": "3HijDpoLxdYXLwR1FQscqfM1kDeWAT3umz3s6ThXyPdTRxbE7JpUHFHKuSPmeXkd54k8ieCkw9FHHH5LvrmEfBNV",
  "key7": "1NkSBXJLBLNdWHHpU1HXvfnMnivaxJEVVrJTxSb3EB14QEp2PRKEYJaDtc6PippbzShTBgjZYo5iTtnsiPMCMNR",
  "key8": "5rBxdcX4CY93cg65maW7i9xRmJXVU4EawdGyXhmE5FvEoCjYnUPu2yvjH87g9PfZfCGB3jeM4hWKDJhzio42UJwu",
  "key9": "KZYev7ATUDogdbyWxSTqWEDkaKi1U4oFCV2TNPD4UyCTX443qrYu4CBnMoWbmKxkktF7hCbBhBjuBTCehBd4ZYL",
  "key10": "3EJ5ysHHpEs69SSCGmJA9ewcWYCG1bA5NAeMQxLU3bP2kYgcDhQoGd2eGeF1g9JtedVf38HaEkjusmmHZVk5zfh",
  "key11": "3KqCRec6xwvCdu6vwP3DvR446DfFvYEN9XiusNizxLuvrrU7AWiD3xZibXWFKnsGfgWXNMk1ESnSX3f4P8A3SnS7",
  "key12": "25aN1R33wK7yzmYa64pv5ef1WpkiWUcsJbBgiEQ87pwQ63UPgCQmPJBJZVQUQR3aaed3rUwF6VH1ooBgBUnzYPp1",
  "key13": "29KWxpyqzENxFnGjaURRYiDeLbByQUhP3os8f1HpoTr2wJTKa6km1Sr1h98dUKrjd3mrKok4ZYK5wJrPZ5Ztxaou",
  "key14": "5KWPA4LMViNEH17LBGhAJW6BoZATNzKcFYsWyzJ9zbAX2Ni5sGbbrsS9rGJZHGSeoCPiBEnKGozmHsJnPeaEn8JV",
  "key15": "4X1L61BZsNnQ3wgEgLnmgjuEvHK5UwvYJgB3e5deW9JnUmyRHJp6quzJXiK2KxFpAQPv3YFY6TS5i7QpDHSit8hm",
  "key16": "2k9vrb7hh774GZHabEN1pzADYRMWvDaxr89jxyNVn5dUYqTqqXPatKBZ4baaTeFkKKdtohCGC4GcAXrqXgqHMcCG",
  "key17": "5cQ9vntvdLwMPHRgzQ4REP1c2qTW2satmEnXzw8SA45LnZsoxWDTiB3ijaAT3oZq2hedY4ztrmygBHsmf9jXvEtP",
  "key18": "5sVhQjZQW8aQnpH589tR7vzVpGhs3TSKQs9iTQzg3chPdVZciaNkjcpPmWuXJS8fmEE28uQZpVh83JmKtL85Txsd",
  "key19": "4KGAKwyZviXZiEtig5fNVLzqSkkhV7Tmzyqj58CTwf5hJsUekwrDUj32P4yPWoM7NUCB8Lzdg9rQzhPNr1FZytt4",
  "key20": "7tDQbZDZVrv6Bx2p1tVqdpSTCPqeJWuqvYYvvHbXEqV4FTktWLZn6NYTuRtka2MZFyTQtoHo8opN1hhwNUjzN41",
  "key21": "atur9ZZChwUotbbeQDMn33rY7vbSMsf9h3DKuwCPnbhPMqpULbBHjPQ8JoDTS89JkLjZQojJizxqwEM3LbPyFUV",
  "key22": "5PeTVcGUb28EvKgZQp1Bf9dbuumcpUZ2EkHmdjZCg3K63L5aEvavqZ7rfERbtxK1U9yoZa6e4BbJZUJrAy7NLUEi",
  "key23": "3xwvD7Y5tFhCbbgJHyMSjvCM21RKrdhnksLQV9WNqeuRKysK3RGo4Xq9smSUr9BxyQD1rFZWriqLJNuMCPLwrhRk",
  "key24": "wjinz6pMnkNzGDK7cytKU6Mj8tEeA9ozKyzViY8JU6gY9s2tzUQy6zNUiLC9ZcEp2H8WSxUJHaQgQodwpcb262t",
  "key25": "2v78rQLWmqTWC7Yx91VK1xT242BqPtoEME98qkPWgd1mUu4W9JQdPgqk4e8kfKqhS1ATDXXozH8cJwuGYvMKmFTa",
  "key26": "X9ofUijecg1QwuLC3WqrUguev3GbMTVMJM2YWTtQGdCATv9kr7yuPpZW1ctGk4WNWjANDaRMY8P3RDJYFLHDjdb",
  "key27": "hZjFBRKvUtoXSwvse3oCLjW9vDbwKkGNszzqNRQUstf8GXDGJp2uvwATWmN88pBkfKviNqmfrKJYPvVUfLf8cLX",
  "key28": "43J9tqwx3cdhBsC4DetMTxqAY7Eu1Jb4hLkpC1tdV7tLzqYkUKtMgCZvqTrrvRj6awJPwg6XLEfQ2B9EuX9UzcfQ",
  "key29": "2sP2jw3Reer9oVwdnb4Fw9YXnpAysoQ563L8xPmYVX1GPuZKz54HqEFBLLFTavXXTbmo65vYaDux51yhcH1TEsMr",
  "key30": "26wXZiffG1RAiT1Fcib2QWm7FK3rK5aa92TE6BBZyz4JR922zzpkueGcbXoBGC7NcEsgDZcyfi2px9Vy2dvxKKve",
  "key31": "3Pvb69gVeTMLeq7H4DQMdP6BP68wnsvFfvjx741kjWNKz2ABC1ayikjh7oKtKa63bG7pUVgudaXeBwQX7qbo9i5m",
  "key32": "2VVP548LqVTRZMnZZMP6MZSdQD2mQvkzcyxDuzSDg2L1jmKpdjZBN61cgq8kj6soNdC6UP4R5sikxWzDoVE94PBV",
  "key33": "647HiG9AZwjonNCwxoKX5DhHrjAaKv8a4Y8MKMKrREFpzNj3ZJaG1WTDwRQC4iadtsPuAe5PTMt474iBy3Wm1B6d",
  "key34": "4uyy6fuehrGM8z2bKdaTA36u9H2Gr9XtQ9TXV21SKDaRuho5Sssd55s7MaBehuWo1dREgPECkagUqdjFY93Ctgo",
  "key35": "ori5jJn9HBS9dZBRMhDeY29GzX4e6C97ZrVPigGG7LQrN94kmQse6hGPX9Cm3eP8yoc3e2e2bRAz1BZZCqjmqzf",
  "key36": "b9gajpqgUKPEctzUpjQNEFSeEVM7qkq9qWxM7s8XvdTV8cfBTR17BMiP1VjTu17o5RgrRRPdLYcqYEgkuNwGwrg",
  "key37": "2SGs7SAjz8AMotenu2urKAViq9RxoWvbt7GeFPkYVQkT8jcQCL333Fypk8Ea7yBt87KFmsNK4RomrnZeU5J3uv2Q",
  "key38": "4sCSwuLntkRhPQd3f42pgkP7rwBvQZ8vs9UkETF9mGTdTXjoQs8MHkEb3gnfipFz4Hhqspb2d9Qq85WmX4s4fWYV",
  "key39": "4rn51aBEvQHxq6Uh3SPzk1vW8BYH4MjMJEPxsZa382hQ9k6PtkcAXJ9naLdUhBdB6Z1dcgXn8sLUfxN5MWtbLj9t",
  "key40": "48vV7k17KDXL3MgXGwoCWCX3BACuUKXnndRWgdo5sdBu5QZMxJz6AR48YRKUbiHTn1Z2KCWEuejqkDyPmu8zGuxy",
  "key41": "5AicHYo4UVk24LtE44NUndTRfttJNbPt3bVBBWwyzVz3VKsCg14cp5UU9F1KrtSZbjz95bkjkMj6Zme299AzeeFS",
  "key42": "4wdq4Vk1kY28xmx8kdDnA6W6Age6S4edQ8ojUXC5u9jv7NAZWD8e7xV661ooXLCWjxeYjsvVPcsNdNGpwdYpp2bt",
  "key43": "qGuVNHrJaGKVyPmQJf1VdTdozTFBsBXZ9Dt4kzzEoSWNEB6nobrBBrAJ1esfXL8KyVoHkUJ8CyZSK5WgupJyA75",
  "key44": "3kUoLG3gJFc1F62RTteXGHz21AsTVjaFMHEpN38f7QLmrV8oDkwQ3r3qiBpNrpz7XpKo2SUVDK2C3gaZX1GodpLn"
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

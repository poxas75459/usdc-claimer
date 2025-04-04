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
    "2ggobUmNDZGUfsdT86tnxgaCVBEtE9pPiD6yBYNLzZTtt8dTpqJ5nidTSRAmvQXZwk4XwjjRvvBr2NT145TVv7N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C7f83T5FaGbRDA23xdLDJE849w8HB7NA3X8eNVB2gmxSVXFkM3kLFNquKv4Wz7AZSuc1svDrtmfqw971PkeCpV8",
  "key1": "41SW1iA5xirRY9usCcvpfpViLacGuvWon2oBnSD3co7mpk1iu2kbq1Ake7NaDZi91VTWz3KrmMN4BF46KMD9HUL1",
  "key2": "3cjJR8hMgBmYogUTyw48ALAkWv2v18HAC95Xm2S39qhXGWnCo4Mh4BtTVcEBY9fJzsn6gonFTk7vWzBWmQwLmqpf",
  "key3": "2RaznE2SHaAJ2z9P6J6mYEqwqzt4CPvX2q2dfzoKxZqJtW7dF5b363nwJFmnjrDQRmsrqe7fi4EsbxPjSmQoh7gq",
  "key4": "2jUygvELTcDBnRnwkb78XMxuyHWRhgWBcaLLisHMg2AqDBhow2qgVGGhVZeofCA2RnrsmxNzrfTjB5ZXN6bFunz4",
  "key5": "64j31Mv3wEkLgNTuxWG7JvfdMoG2Q73CkiipVgteRixnMWcQ8ZLjU8ThPEEjgmFcKSaBsTXF7dUXzmoMCTxk1vcx",
  "key6": "4XCsMvgmTd5KMFDZeYrMP6cd1EEtUs46wPCKCKoUcPnxF39irtvjzpVcjHAny2LZKvuEk9TkkjRR64zyNuA3gx1G",
  "key7": "sd9KFEdzRRQEpG4PRtvzWMfAm6FYoUbtfPCr355w2wXvki1f3PzuKCu6w5h6bC4HGfoQW9x8i7zC6rNZKdPdCG4",
  "key8": "2tynBLeR4oZMWuVJB7WyCF1hg2Q8taRZHMvrQ2DdNqzCgA27oJHutRMSVwUUVQyxzVD9wYrrdYBidjAWUUvmj8DG",
  "key9": "5Ep9msTRYcpJWvC9xYWZ5vcAToAqUVYDSJP7M8q2RCgibCjgD6jQyVQt6RJUoBq5tMKL13aFY8MFhwGVApqUmgrR",
  "key10": "46HHPF3edQ2UqV55hbA9abqNwVw5gJz3QpcZvHr9KRQUcjfiaPkyB4nsDbR33jAPgTUosvsMrDo1tnE9PvPvGhEu",
  "key11": "5XF5ZbeByjGXQ4vaXz5W7RkJRATPdTr4Ygi28kvmisbQG4mV2eBJ5Nn2CVawnncoBdXffZtE9z6Vmw2Xb4QzSpXM",
  "key12": "3LVDiLbFqfqsJQWnFD4sfASrWbJsQg44KhCc5LVt4xyKTJqxbhme1rH4gFio1XaXkw8kYoFRvtbPqr5vvf6VHiQx",
  "key13": "2wZ5v7FJ4zjRJVompVC7gqmKP2ykePoDa9enwMxcmw3MBekr1ThEni9oWYfqdBHkZPL7qf6Sz4jpRz2pmb49RFDh",
  "key14": "2h96PV5R15fuhfiPxryr5NnNWcHosFw49LsdwpP9FWp8yMVMki2rgxs7V1zDoBd5btbtqMFoxG7bbafCSBsQNp5G",
  "key15": "3b5S8Wzvst9LdVM2QeHxrG2NgCkmB7sFJf1JsxvueV4CA8Vy6GFshs97mwJEe4sWwWLrKR8bShJKmJgT1j1gnzQt",
  "key16": "3u8TFpJyaxNwXH9eBP7DqjKrByXvhpVKnVU9oXvY2cW4JABj2yptaLvXsWuUG25EWfncwHFgLXCcpCJ68KYRK71x",
  "key17": "4ySWaWrcaoSH7DXWeBM1yqzXXm57iBK75SXriL8bYnivSn1n6ArFJcfFYYmBXh6rauhGD6axa85oY8ySf2FL3kfM",
  "key18": "5GeQCKAYtRafpuHHC9vRnAyr7FSt33x4T8XWSqmww1ACjY3686Q57zEYcGrwkE3syCd6dfMVhWiNyBCFmG2yzi5T",
  "key19": "nPHuqMSp4SsArmFbfvSfQ2obeP6bYEQzXASgcznTLEL34wMvmTggNM8ujwc5vhm3ktdB8vcRjuP2U4n13ucBtAT",
  "key20": "25tHQoM6zsu8w3288JBqJYJktRcZ9NkiaRtRNz6BzhhickALG9b5SppdH7AnsSke4iSndRRu4GgWuywNL1d8WoG3",
  "key21": "2VJbVMnwWGgrAJpiWzjm3rL2V9JQfjdWj1PaLz2dNUChX21hzVF79UDGRg3Fq57NekLGSN9EyDXewNxKneLdKrm1",
  "key22": "5iyRDTsxXxgamUTuXLujn5k3Hxd1Jky6xmXtaGxNHyzNqjZ5inh4bswJ5FZjNkNzxsKcYh9HH7XiAamxFYkSznjy",
  "key23": "4wjGWAkFdtj6eDaNxCsrGceFqQVJxvSCFPbtfffXK6WkmrTY8thf5qV46sG43TCUHNpXiRANo6u8yviDgdvanG2j",
  "key24": "4T8rNAeERakZNmdfLu8gy3qJ9imncjJG6DAQkBCksHoQxG8TpkY9mnCPqRUjZkoMhKE8LBKWj8t7a7WPiXjdpwvy",
  "key25": "4PPq51V9AXHjS6WyKnR3AVciqFmJV4ayzbU1sbVewjzk8zhZL7JcCUKdfZ2Aq2zMZm5Ko8UuSiy6yuEuBgVNAsjR",
  "key26": "5WyPDWpuMUPPd68cRyv2KsFgiRwMpU8jzx8MhWmGQZarEVkDYGSnSkZZVj6RoXk2eZXKro1Zx7cGEPMEPJMuCch4",
  "key27": "4hTJ4vag7PmvTqBVN2txTCxMEwVF6RthtQGuT5QK9turgziixizjJJqnmmPzaMg6ZBxRAZmBxSj8UysRuBMKNqnQ",
  "key28": "5ixtPMeSG5ueasqBQ4XJtC4VKs5uoK6p1q6kknG4zkDw2XA8FNqmKxbhofF8zzUjeGRmaKscu8mQwKGp6yGwLsML",
  "key29": "2kTpTCkZeURMbzzd3jYCeG48PWPcWW9AUUyvakRvTeTeoNyCDf2ffwpfcc65JFZGYpiKYDUmGaZrR1BBjg93VBNF",
  "key30": "5XVeHBdKPvxrfTpV5ZcwgkgiNWAjDUwetX1ZLgGuSKfUrf2sKYUt3cdAPxzHNfYMNjYdvB7Q6wXs2NQQSCqkXins",
  "key31": "3ffgVCG8dRGiik4uVGGaMGJtDX4ZknE47d5HG9sMVqgZDKeVhry55TjES7xCsX1LV1vPamAYuD5VLMSroBf6d6wC",
  "key32": "48ad3oq9WU8ppc8259tDFgNjCi8QTfXTdLoWx9ERiAkUB9VirTSvTCALHBNwYSWaMGeZKdX4fXaN1wPuuJGfipFU",
  "key33": "3bzq9U6xtVz5jbzVWYBBR4qJm2h4JeKt5vqSvZnm7JBXpGjZFDxYjA9RwdtYjWQCpKaZWDGe84hkYCgQkV5Hx9B7",
  "key34": "zeWMrNYmuTZK1vwhLAXcB47uVNKTZgSHuttZYEBS7m1VxUCoRRY9vfnEUTJEcw8xmRiYCVRJsVmuWvZHA7UKp7d",
  "key35": "5KKBoCJb5zXfHgrToFVHvxCXZ2T76R5cuU9QtF4pRqT1kgGXx8Wusd43EfQgBLAkEDeqdrYF7Hb49qtj9qQQwkRY",
  "key36": "9c1XwcywDCMZ2QHuwMxsjZFQTixjqzsAVusXFLdi8HHiYnT7HXBovxZAgoFDdVj2ZckvmZYg3rDUJsRpFX4Xt4r",
  "key37": "2r7kCmm4gZg35SjvRzBzfj6ccsNgsZf5w9TQgXm1rPCtYG1bxdvLZ478RR7LwaBEDdcHXszJDD8DuyHNtBotJ3i9",
  "key38": "2TURtrmw5Jr4V473YWYpcEvwrTynA2NCwz3eoENRKtvFfnw2z7JR3WX9rFELxhRjEodzgyPey6CKyhWtNowAjWcd",
  "key39": "3U2WUCqrXLvgcHtmoN58n4Am8b4NNeyUZveMcoNzBABmj334pKPZQV2HuHUJWPSReszrcNuB6NXs7KJZxLd9aBWQ",
  "key40": "5NBdGFKt5d4tneCZruF8zBqyuNisd5sizb4CWdWb6VVAbdZP9BoURvbtkKbLdQRgLAm82xJmP9PdjpBTockoXmRq",
  "key41": "yh7K3n2Kt8UC6LzAv7tk22HYoQXMYpRBkQg8b5ixrfy5D1pzg1N9sk9DyJSD5X3GcC3ZtxH7mj4sdsdSoYsfKay",
  "key42": "4zbPqvUHQJHsbFjAFc38nxdsKMgUYksmJDKfbgZ1roz3vQ54Zu6of7dFt7D2QYaZ6WxBPojP3ZYxZaxfEL36hnQi",
  "key43": "3G3ddJjQg5xte9Mh5qwJNLX7BWbWmY6GBPeVg6SagWmvVbXEa46xYbki2oATJH4QX9VZ1Pd7knuwUa6qdjSzTk9T",
  "key44": "H3cFdkaJgqnLY9bPgxHe3LsSZBKZ8kH31bAHjkDu31NBzXnozX63nQi8d8mWbC8GRAp1SR2eoj7FJet28sQKoCs",
  "key45": "259x8a5TsfWbi1Bo5ZQ8yHN6svyjaVC9FN26zqS28z1wP2ymr8ThBi2RLZ26hG7Y6jUuCFkQhKdq3C8LhqUfMfmj",
  "key46": "4A3KXYY9fMPZzzsi8mjcXqnfaGfnwFqBkPgrzsJXqL5NRSeRoff2iRFp34iSkFKxTTyk2aVfumpnMJxFsCvrRyfj",
  "key47": "Hi5aWQ9g3wwpqqVHxRbaBsjPoePMDGgM4FQCgdssnRNJU4iQaKzSeRSpyVpjmREabJUMcCGisBELY9Yozi6JbrA"
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

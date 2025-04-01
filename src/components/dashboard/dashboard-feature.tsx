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
    "2Y2gKDMXQGZxbu9mXGsrbackphTZwzvAWhxa4XLMzLc5yzZar43f8pcvG7VTpQy7mq9LZ5afZQhKPMcyK8HhE652"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmWfiudoZYR4XjJzVK5qvzmspTHZ5EG5b2PRS77eYEh5vQVTQvdtRKvxj4dFpXnEAuM7ECf4WSzBVQWbhskvsD9",
  "key1": "2AQ7y8MMWeCQAP5umcQC8NyWUJVCnBuNrARG8vWRBs6CtcgMSvUfPGhWSYUGs9pdMnN29MNcjLmpKt743ddQYjdS",
  "key2": "4MtYkivSQTQyQ7pDv8vidGwVyJ1gUTFLtyW56dPsVpiXghb4DMwcx45G8EizDxwPefXN92iz4ajm5CjcjXrR4Poc",
  "key3": "3W5nw6hkGpXzPb3yrFhKbKVzgymxXp1iJFFuF436RNV9zZCnMMoUGyVqZRp9KLMxq8h6hfAvVaQdRQMMZJiBuyzD",
  "key4": "tQWuMVGZRCnT67zEhYWEsRGmkUxKvUdn85LKSZqtqNmcdzTh1gwcTTWaSoATgGHfPr77EXgpabPp39hHt8TtNMC",
  "key5": "4wowL2RTZVR9QAVK93BQx5LK2BjFAD6njGPZiZPP6fCi7YHG7NU7bNCCqZF469aMrY83a8nW5eMcauW916TvYT8g",
  "key6": "5QyfMk9zZqv7SbQb72Wx165qDHcvHF49zgKiw64bCBo2hWDcXa1JnXu8nby6tmwTtuz2WgLBC3tvh5UDhDLw2sbH",
  "key7": "b9NBbawV9pHuVYPERYGTYU3yA1JqyssvVb5XaqUXAzz4GvxnJjXxX4fuhVKk6V4i5Dc9N59z3L4HgxrdGqyd9Jv",
  "key8": "4WLkij4S9vVeiVpTPnb2spSdRajxs9CuKHe6WTE67nvbkPLcx5DdckqdiEeg5uyu26fPANGjVRuoKAjDd9r3PAx8",
  "key9": "iKGXxoHU6BHekNTed4fwsq6mwq4MC9zm7gmovcPULe6SCSqUymmfKC4M9neUJAmcHZnYXokbzEAW6PPZA2YKJHV",
  "key10": "4A1NVm64ThE9Zv3WL5rwK7eDXKLbf6WsUNZA3kxLyS8G39MmYRyFv886EZQefghySy4QjWYY7pfKZxXQPPu7jdoi",
  "key11": "5KRsqz4FC2B85cP6bpJJjSQhutmfReG4gjAEJBRgSSCoh7iXvWZ2zvGJJ7FuzVtyVK5ytqZfMwucj5KqoTTjZU26",
  "key12": "3cHCBWh2s8pq8WpvxDfySHpDdzGJcshYJ91NBNzYXnXAQwGBXtbAmo2bNj7wu646DQJUVN8YYgvgyTymuDtEc8kN",
  "key13": "5umNi7sj6b2LA4eRtDJrYcG21i55XTQZSzcu2wNj9q4HxtYsX2Gtsnpdi5GqPkH593nEmuduvxbvoQ5nE7CH2KFS",
  "key14": "4hNRqqfNAHd2JpZCmJnxtL4rrZYA3C8qQSKs6u486vPfU7imGTKizsRWspg1TCsWrYcLhqwNtvNYPBqPB2p3rL6c",
  "key15": "5n8r1KQfgNhvLVDZxjvgSSXtyPKWvAv6XDRGYFvkdmkVcck7bJbbEsbzU4oeAEGSYLT3JmAQNa26c2Z4adCNmT1B",
  "key16": "45yTrHtbKKyTRo3KZpckjgCeVQNcVgDYBQFUD7bkTw4WoRGxRLLy7hZMUCVE2wvtbfDktioB8x9DzQUnafQ87G7c",
  "key17": "4psS3gkJmcBxQTXN3vyaxFGVWtfqjWY8A6ftuz8mscpdjB4GqCPv7e857m6NvFs7TEK7wHzzuLtG1VSL8PkxfsG8",
  "key18": "67mWWgY5J4F656ussiyfLTXzPwnzpeB1czf2S4ZDoUKNT1xA2Fry3YjGLjndU1iw4ywPaJr4YsvmkgpJiCDVF3xu",
  "key19": "2tgKifrbdS6W3rfhHSU2443QPwWfL56X3gMi6gBZ4tcMUqJMpiCCyd4muMoCMR5YckCzjG73KjKUKTFwTNtiWFFs",
  "key20": "4QM2Y9Y4CyfVWxjmQxmZxCGL79BfxRoKygdFxbgRfgxtnjKmpppqx61UoqxNAgRCXEwGTsTY9Peh8NTXkaFN3Wb7",
  "key21": "4WfRUm7ygsFWwRzL8u5qegGkGNfG8DZZ6B8Cd6zGRFbs5GyLDMNCocaM4taam9zZfvFNf81LcjGgeCPNve3621sG",
  "key22": "2HHtzdjjHDFZ4Zg7VCsQAyL5LCwybhad3SicS6FBcvp2hyCr4VDBjo4BkF8eJvow8n6jFEpmy8BoLoHBBtnoZEVG",
  "key23": "3YNgVZcRvnzBWxeZuXzgJ5dyGQSzQ6FXjEaNWenQnbGcYSb7agqkjdN5M2tNwKZNSMLM8GbJG5W4tyrXuXFm6bM6",
  "key24": "qg3uus8tcsXntJgspCionqTW34SEseY7zkFzPR2jnQmuzueMwTxk6iuYaubsckMxmqtqvBNKARxGChXfQY1HCBF",
  "key25": "tLi7iR3LPz3gTYZnVbFu5uP8WA5268UJyMeVy6eyZvt5oyAxrqDV3WeqhivkNoSQR5En8eRrhxoQY48ic5CcHsm",
  "key26": "24pgZNMP7xsCqDUUzK5HHswEQuaRvfHT6QRGxwcr3gVWVQvdsDzUy8y1CoSyPTSrTXWocoYYapD7yKB7fddDBxFb",
  "key27": "66xLAqUiNUd3xQhwxCWTTyqmXphCGQJuindy34jUqxay4aUjdA8yPjaVzA2iqd67xFKy4C7E6Lz38ohRFD5E4Rdx",
  "key28": "36XfczASP9NMZ3fpibkaZK1q3tQLahaGi9sieGhVk6tunbY322qhv3Ycu11TWxbCqfE5zxeJR8He6HPh36gS53wP",
  "key29": "4dTfRXbxrhpdqWPnuJNv27Vg9FdKv9WjpueMVfc2HJQVfxWmKprunMKfhS1sRywm4QsahTd9ZcAnNMmea8cybyEd",
  "key30": "2Svan13oLG7aTN2ihw6CauZjrucSz5soHBzWsjSFDHERxCmd3A8Etx1kgkCdfNDqqXSeHXbzPFL42ixWXgyhnbbz",
  "key31": "54sj3skNeX59QDXs9eqzv5heUP8hUocYZW7dLezbrxwBAWM4pa5iLc59UjCTwjEYfKCEhWqxGYkMam7eMd5nvrPq",
  "key32": "2RfjsohFsttPxt6uMsGk2fAR2w29wEpvGjdrnvB3gMnzfwd9gyP188kBbEF9dx9pjwTzFAHV2HVpTB63XY5NS7Su",
  "key33": "7d7TU3jLeQSpWRdtKEWLjY2r8osDdQoarNNWcwbrSXZiG6jHgmMBJZkJHeEx1TGn1a4AokucT7hkzv5jhMvNxMq",
  "key34": "5CtTfom69NT2UPMvvn4Dhq3Tfz7jwjupEkejyMR6VS6DgnyKWkuPfFdvxBQSMhB8A1P6HvwBxT6FAzXNpYQwpVtW",
  "key35": "2yQKQPa1yjeGua76s1ZwtLkZfG32i6mChtSfV2ZVCvxFtJ8z4CdHomcgLweh5oNhxL3gd8vhjMzAYLNcQTxf4ugY",
  "key36": "aDknGKpftVzSQuH2deWbeuAPyCUdGZxhtL1iPUQTz4ybUiBRw7Up6eLAMP3ZLZY4r9q1a3247J4CGoM7zqRPgQa"
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

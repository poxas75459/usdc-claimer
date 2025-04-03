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
    "4B6feHeo9DPzEgENr3jdz5nTZkrUhotQfDXeiaA9VKQGXJVbvLkAXQWxx45rGwL173bSALKmMNe8oYpVoyS6eErH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eK3EqYroRzX7ad6F5ijyx8ebMQxDgJoKpxeFXSzZq1LQg8t47XuobZiihwRTChGSw5ibPJVEhEfn8k9ufnYFutX",
  "key1": "4V89TSggjtQKeauidwtyhTwAmWcX8aPsqvme4nhGxmdxVgkPqaM8o4ZcFo74crSMEZMq9WJimvB6KfBQqoCwznKu",
  "key2": "4HJdueqLE16DZHDwfiDqAzPe9x8sNPQEKapf9jAFj3SS963xAyeVkrLuRvRwKc6wVziZv1M93NwfqPHCDHC7QvLW",
  "key3": "4myDDBFeScfenv9r8ygDcXycPb86TV6B6pTKrMrjFx2xbC9aJFEH3frPELHA8YWSTbrj5uUrG9GDkmVJm357PU22",
  "key4": "5LkKvguBBGpF3zR2PMf7NbhqVWPJyJNMRij55X9C5H8WoJk28bJ7cgjzh81ZiyR5oxK8ijhcwTDR3V4Yb1YGbs3t",
  "key5": "3E7vh7BCsGoym2Rv8SWYkUMAjiATf1gnbnWDEdZUGCkWRrr46tqVcrqrXWXChwNgjvgksjL9YP3S8pgenrycwm7N",
  "key6": "3vACqEtc3Qr6ncmKaKpqM9qbgTe8eNWLW3NtrdGay5oz2B2j5ytVv21X55U2TFD1mmqBLo9EhD6rqBkTzQhp4R3P",
  "key7": "59cYTMiVsaCZytweYgfo6iE5Uzehh1iefSQU4mDzsdoynwhfYEeTj54DoFfNDL4MEgMse6zVqJ6i4qQPhkJVDsQk",
  "key8": "3faYYBACwwRdj9chFvVbzp9qvjvtvkhoxqUowyUnUgvRZjchj5uyyuHhj92UxqXJ795T18WpRu6hZNGepTZaWHt3",
  "key9": "3qRUaxpsQtNRcWKo4GNkvhZP72aGgrGQwQhFpngeBHxRHDbuNXCQjUM1BuMEBrX4JVJjHcQ2ZeAGvFYxyz1kNhsv",
  "key10": "5AWxSU7Zc3bY7UaY3BSgficJeFsBH9xrXpR8yXu8TmYRgHMYv4NwUN7M8vzcZEVKi36mmko7s98ZgyoiMyBWkBiM",
  "key11": "3JXCT1vbeigXUKDLJzLUJaB7mdH7JauNkDSCJYSFZ7t2WdYSjMM4Z8xBMWkLJ5RXXuNJvUXV5Pv6QXYncH176W63",
  "key12": "4EcZsypSLFk5wo8rKr775SPGfmeF63JiTYa3xebAqiJ7meivKK1cQx43EwpwrQqSj6H95XXKSDLNZL1CoUddJVt6",
  "key13": "4YhWA73bztymevyJQ19UCGxFU56Gb4yEq4Zj4N8D862EU3D6Yu4Gmgqemwv4PkqA77FJuaMw3keXS5zh2gDbDxtw",
  "key14": "CxBvBgehceyemHhyVX9q3k5zTaMxs2cEmZtNNeWQypxizvk5nLgy19VXryUdgp5hJzKB29hF6ffjrwx4MuKYjfL",
  "key15": "2LsinY3ieAYaRkfdvcoEP6hqv79q1NHYfQN2QEEkoUnrFJBv79phdLtBjdqRwKfs4c8JvjEQxXVs7eaR49UuSeZn",
  "key16": "5LrotGzQToJuK72soyDLQxwx7LYq2XZJfhZQzgYQtGu3gqmFFmjzsgceiKTSCsc8cBbgkv7hzn9FR4yWWo1MVuN1",
  "key17": "5WBem9ap2Pn2uWvinnhYtiJDsfUW7G7iTeU6dQQTS79mjzMxvdw1tnWDqQfPVVWzUyH46jUuPu3o5BctfXp6juXM",
  "key18": "328MURKT6Jxsfd6bNQh2WW4LZeBH1yoPF7uhN1xQ6WY3mBXg3oUh8ukTgkm2BMvATBosYYZZjSsJPKBzQCzfUy46",
  "key19": "3JdTG3tZowXorbNiNfktqhCskJXBAEXnZrs1biWzutJ7vouuxRed8arBqeDcfJsW7gvD6qj7jzmjHAygnPnNgWzq",
  "key20": "4VGzV8KFzm69V1DRCTLxaexh65wpcS1DX3w3hC2jZD1LaiiD8wZHpXUUuWc7GUmKRxW9ZK3HACkCnddHUHCxc5N3",
  "key21": "5QQ1DJTVhro8jVQFqptb5bN3b8Zn9Q9nWkLMgrsNBwSbnmFYzSxobBExz1qNJjfjv8eGusfTUwDKWMctpACTpwHF",
  "key22": "5uu6xDhUE9mWwC2kKKEqLHt3RYvKg26Te2KT7n4hYnNmaayXECEbk7rE9kBwDkkCN64aiwhuvAw4GB6ZkPHg8foC",
  "key23": "5GnwKCtWhguAhuC29y7swDDHf5pBbufMPAGTnAeh9Tp5XXZ6PwMXbc3dUN7tNG5efyDzHDCmcwgq1Ny7Y57gnVH3",
  "key24": "2RDj4Ekq1A7RLWsHH5sVdFkVg56QrsgmVENUGWVR9KkCc1AYyMvEVYm9PoLeipzju5EeKPCjMbo713XUkJZUFsKZ",
  "key25": "53s1rbHVWDxm4X2az8UqLAQwPDzPTV9G3ScPKcvexy3Wd8VBPvBTkisiPopBBf3Xr6CA9vTZdwckUBEq6Tz5kAXX",
  "key26": "2M6LikyYy7u9EtWa6rn6HmBGJmvCzzMxsuVU3JeBEEeNVpdkfMrtn9cr8vTrV8zTzKSpM81nC7VagKZ3bjjR2g3r",
  "key27": "2Cq1J9xXfwHTNBYvrEhH7hjho5EnjByRz54ktgcSMYTEQ4dejnXzdFY2Hse2YWphBqvCsUh6kvryJcy8wphHcY6P",
  "key28": "2ZyPJQ63i9KPHybVSPv2pSpiaFQgTqPByiJ7MQo8dcM6taHrzoMcKnSeG9F32HwBLFd1g9uRw1VTi7iCWC6FYZNd",
  "key29": "3m9QDMbap4qj9qeRvjBTnEXwoiuF3vcMZbZeGGEsQuRNVVLTysovjb7ppaE7nNWDDyVbvQKb6u7L38X8WybtxFn5",
  "key30": "27wdY7YkvCwtoYG88Exb5fjwEmCtpknN5o3gnkihtRNCvtZSaXfqtDL9rSAwife4rLWX6ExBM5QDbBZbNMsN9FaR",
  "key31": "2oa9ykagt5zeJxPWZ3jQ1uG52iVRMqfMFDa4HaU3VXSyUzagsUyczxxKTKTZNLXbKsJGKEMYHVz2CZeiADozRYtn",
  "key32": "4fhHiPNPnj2ezNNj125ZsyBtgo9jdZ9Xjg6HFyTidwxj5JDYL3Q7fcQpNSEq4DXCfaynqHSdZjdMhJYnsHGowhfa",
  "key33": "2Wj3Av8nsyo28gDihMfNZkBv8UXeZWaKfvTQtQzzMGpeuTvsmYF5R71uv8wKQJpT1s1FcApjoAjanGvhbtyufLzD",
  "key34": "2uMPi4278p22W63qQR9YT2YqBye94L6p7gzYZ2Ft41H3LqzMvSU3TZWYhHHBm7DgLpjLZkT2aQREkhWwiKdFyMpT",
  "key35": "5a6kTSk9o4DvyCh4zJXpvCDVAKFo1bpAL9LaXr8mhFxyywQZ6CZBVV4aRq9KMBCRcVGx5hxkNkzE5gdQTuhXKBeU",
  "key36": "5Ct5EmDTqR59dYmLEHToY5o7jf6ZyXQH5ftDTrhjUR4BatsWrM2qRXx9bkKVL5mi44RLxgQDY4D35ATo1dEdopAq",
  "key37": "3yNyZ2pXLYxKWnY3cKJcHKjYYEZDCiHBbKABXbFf9EHiNmXHB5bGQ3ckG6m4xwyRh8qUfCQzSQX63KoqHa37ga7G",
  "key38": "2Pwv8EShFRwqXUyXKzEZYf8wfZ9oakGrfPhVyfRCCLw4RNThBWmos1L8f3U7rCxZCdFzUJQBv689SBT7fDxZKNn5",
  "key39": "41pGMxYzZivyqwMEvdPoRcAo7zkF7PD3g9tXAjizkcfF1LLE41aJBaWra4LmnFB8NzQ3ZviZihTz13Zkqua4Loe5",
  "key40": "4DveHoQJ2hYw4h6ptQg5PnN4kT9KqeRfzVf4kNjP7FxtibBynhNJGXtP5MpTFpYY1XyriG8DmWQxbsjhVSecUnTZ",
  "key41": "4ajUK5yboCXRFp2dvTC1XD37Bvu4ZvGcEK3AVimnjWEFhL9DEJPEJPdz7HTcHgrXnbiAczjYbBxNy6JQsBxcpBxN",
  "key42": "2MWLuMFAFf6gTWQ3GGYuA3NQTpSHziYT6eTZch67E7rVjkFdcZc1K66Fw6FWTt22WGZTEhrHconL2LarxrAx2dxV",
  "key43": "4KrwJvKgoLL4Tu2UNVVeCcsxBSDXzxV1ry3b6H2CBcacoHkHzoTYxSiDZmD9zxCWda2s77v1PYSUErznJXbGUGkW",
  "key44": "4LCiXYxth7teuuyLmczHvrVUcADM5QTYrfxQRXmGKArnzfFGynMaLTQCCDftHcuvisjgHFYeJbkPM6vanbSpga6P",
  "key45": "ZpdddrvMeJXPzizN9Yk9HMHVoCTmbKmG4Jfx53fYmPoeb1CDoDH7WHmVyzSk9SN6uWBj6y7YN2fygCBXXgVVk5R",
  "key46": "3RGQV4gLDGzNR2StQLtDfLdkJzkMaNQN3awpc3WA4x1CCj6Et5Hh9YssZYJXvUN2MuRzwBbfTTWHEJ2ijdVKNNaY"
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

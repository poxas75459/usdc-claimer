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
    "VtkFoFbUQhKg19SDM7h1UN4xmrgXEppuqTqW5czZh7mWjErsnnNRrttdBLS45VRZB932XjBTEjjsK4FuNZFWJU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woHdUyik8q1VMktjyePJY2bGNaL6fNhror9zoiARX8vk11bRkoc8s2BZv6yLxHFKPWQ2oU9hutLGteMCLxLRfka",
  "key1": "3XWYyLcMMjkJJnhwnKso8x4brjHdzEBDthatcmehGyCUmuGTbSb9ep2FLATozNRDurdkXkhNmZSN5fQyMD4kVw5R",
  "key2": "4rhzbUB1QNyT5yPqAiiQo3rM5mpvS97RBS7xEEK5zTJrYUchWvBKodeHvp3YFbi3dKzPdfimGLFRvv9m7pE5i2VP",
  "key3": "4fBKdpso7mRBWbzz6CZwVzTZTRYMHCz7RNGHadKGt5NmUAw2pZs5DjsuamF4rtFahfMJf7HmpKM8G7BSACNYCK4h",
  "key4": "5E7pgab7VhjYiWxLQwYgyUnAGxY6atzJajb3UYR9vpk3HU6gap3hsiYLmrnXjdsBoSbfiWuPcJtSHZPUod9MVwjv",
  "key5": "3EGdVMREHQTCCfrZHHYdTjMS2teb6GVzZo7QhLLjfRfoCiL2oSzYS3ei7Hb4iqLAiY8mgMAdR5Q8eZ16Ub4Ev637",
  "key6": "4JM9KFNq44ZhKFKtu6WufTFPrmghQGqg99Ko9N48fAYaG5tUWVtUKoadrqBAYgkaXJsV1GpAqinzF7PyWADBrJoa",
  "key7": "5WTGzv6VPGDCWZd6uhjn1M1LbxVbv1JxFiqXvUfQzvGYEsEAQ978vwTYVZwqsDobUJQ3ktP2kiktNAvzr9VJTBRW",
  "key8": "Fq6mvTaZ7agbMDao6HsJDCgTapNE5HRik8pw9mUTeYPaaz5h3VgnFkumXVfHnPA5VHQUTkDYP7Ztu1CPSBDF1Tx",
  "key9": "4mtuH5JKQxAQ4GiFqVnjLRU8fSq446G8caayYFa5CQcfCa6vp46RL63E1gHYfempCEoWsWZSGRahNLJSA8azSAhN",
  "key10": "597BWzrkh2gLjSuGrPndFKAfmFCed75J7xV1tV3DBYRMkQ45KnNGWD7Qrf3tBuik6c5nvfXqzf7UUKpyGcohsW1Z",
  "key11": "3NGokU1sr3zrVQZ4DtMW6witwmhWCtGbWLE3sybKGPvWxxST5PXqoovHcAKsZuu31tm34c4TjhtWTiVZ3q9qmTdh",
  "key12": "4Zwqq7Vp9bEJJMPsrmxK8ES2y3euP5sQ5e4FVpfprhLkM6Uftv7jgZ21BRMEicNQ7WMKTivmdqmvueoN7RUGcK51",
  "key13": "ToQzr2UQVJjGXjB9jACjm3CD97xNjCvtv7t8Nxjcy7WaoinUdqjKNJ9qByJBXbebe5JukLy9xK8qbxtfgTQwJrn",
  "key14": "3QBLgAJrqe5TGtkhsuaAzXNtqt8KoH7BL63W2yKXaMEBEdbX9sAkDfpJeW1DyN7xTwGzfznFEYiEZQcWbecMzNfy",
  "key15": "4qD9ntKv6HzU5zvz2Pwtj8fAQNt9LUu5zxSYMd8C2m2oUfGNMbV1g3boYNDsLSP3dYLttm9YTinTBjHJDngPU5BZ",
  "key16": "5j8qJ539M7UAHsr7pV9cuyQZ1NbiZRKHKmsR8Gu3be2nUr5oMPMCHvm8h8y9jLDXVHrQhSufn2372cYCGa9VuYpF",
  "key17": "54fMghfgExiNNTjFDTRZmuFMJ7K7KmqkJpcbLZzXFQCGFmwCeKeg8kzpC6dv1fhg3u2STgAjjFYSCSsiFV637749",
  "key18": "2mze8S4SfaPi8sLv2tvV9TqDUcYcdwmxyUARsr9hEQ23tajuW93KK1mjGdPRbTX48RzSyacMwSZtcFyorYvQZn8C",
  "key19": "5Pk5GMuSPXVdXrtKmb5MjyEE7FnnKjGyY34xx9yZGHy8QvqKGpX6NrsPwMFLZfvk3W9V2dJ6985Ef6L2c9Tg1VPp",
  "key20": "2ntz1awSee6SdkqPrmgzRrEQERYTifaDsvE9xS8LcLkQtK6ti2dqCTY6u179iNzQ7pgD3gwyaE1SZJ3WxmxpWmhG",
  "key21": "2jRjZBWvmnexxm2Nebz62Cq8Vfi8cU6WLJF1Q4yKcJCgVequyi71ZAr3eJdCqdLNdwbjtbPEwV1hXt8x7BtAduzT",
  "key22": "imv6WnZxNq3Q4Xpz49YvDHNm5h7izk6DkTRsiay8GU6fiZeN6PyK5RNH6jD3ytyS2x8NR6n7xPj7btKPYtdvT9s",
  "key23": "BYZ7evFhDKnQknpG8uCvJjiepPUDbDCreJYBsB3B3vCWJk4FgkfZ6gpEBbMF2cobMW8k3pniDFVHqZzak5YcEVR",
  "key24": "4hHiujfFfVHtgqNwtzj4ms8jQZRgk8qEAgmpfBgDGSKjyTYgRfCACFG6q3dyA225JwYLEYMni2epbhT4SRpUMgry",
  "key25": "2wfMzsAtSH3DmVjpAjCukmSwfLXWjfnaHr8C3Z8zpDrME1gZr9szwrNz4sLiWrmT586v4cTDFYnKiDZzFgenGy25",
  "key26": "4HQX9Pg2zoRb1pR9FZBfQdo8RUvwtUPHM3H3jMYGhbbAaoHKFcLbt65XFzRmSS41xMaj4e5XriNEM3WuPVbJKPK5",
  "key27": "Q8D5zeojzn2gabF9QkJRB7UzsBKDdtsxgdQRJJ5vucGQKHts1Wv73Ve8ccptGzRN9i7en58GAKgkU3FnDMzQ482",
  "key28": "32YsJTppGYDtzfLRSLGmdHcGruFGZ7Bww1zSDdgkzHUPAWFhKCPmuGG6idWj9gcV9YAz9bwqWU37Rm89sAWE2TgW",
  "key29": "cNYACAmarp5kgJobW3UuWrq3PQiiRnLyNFE96ks81caMjivoQszUtc18nnf5ywQSg8p6BmqrerjwqDGwwBGBpxB",
  "key30": "3xcFiQs3XduC7TJxWbKppfUZy7SKbWHByKD4z7K9ueRGnSNcF8sePGgHkgjh2AhkHTNfKobSWxKRRJArdd4DEueH",
  "key31": "4rwZAsBuzjFMjKSrxfbkQGUKZiePh3H6TxmMKqPSXZ65bmHs5S7jT3vcsE37f8uu7QK2FqXyhhtTU7r6GkFkdpPt",
  "key32": "5xaJQAgJqVnXeA1LJ25ag4UXSc2Mc1nHxzyYDB66NUWPGozEmrwD6AhCpQvGmLFksZA2MHBy1T8LRvF1Acw7Fsr9",
  "key33": "58fALY4HFBaCQmFfhMPseYcsEaYyGiqaVjYYBiFBkLWnZGouaXHAiGxfujjAvT6ioVZzF35ZkK9M6sUV9rmqRfgk",
  "key34": "5ZZKBtxzody3vYxUzYPJji5mNokXAiSojYcZyYfPP7PqcHagMMvjZaP2J7qprRNjeKxG3a9e7MvX8kqDaqsgC98F",
  "key35": "5MCVAeBPso9BvTcaxMQ2boUHM1SpSDJhT8aKmZYxCAQ7oWD3EymFuTUmiZe5LKC55cnogQPybbnpfZ5BYwE7z1vA",
  "key36": "27dP5tKq9i2gsQjNJX6bcnRL1S6SHW9zLTPbEq7LTCSurGdGo5bZAoc5F3MCT2RULMea6Texyta2GMrBUwu8xuhM",
  "key37": "4FB96M8RT3XLL6Ccvgc4VvKFQ4Jo6YyXsGqC7J1C2npvG7s7PtcfV1875GCVppVsDJv492k3gLbBHVAvTtE3z2gq",
  "key38": "61StU1PqdjrrryXkhYyCYfpfDoRWzeSowq8Bno5U2ibGxcVvJ4ZXfyNHAcVxt1T9XML3PW5S1Sq1La1SchGBbRqR",
  "key39": "51AEjVmJ1TfTmmXc5N5bBc1KJnk1zkiw8Kmo6A2WQ4tAQphtZYc9r6FAcjGiMfjyAkC8B5kSPC3D9F5JSntgCHm8",
  "key40": "r4gszkhmQVGz6smiPbKR4dL1CdQKHy4JDjdWhFixRyucb2CM81be3f1tAi1QsTB6U89nhRaMn1JFA1Jxn9paHVT",
  "key41": "3YP5JkRRHAkvVKitzzfB3D15hVAgZLPnBMcyqefLJfVXc8N974qzo37nEdyjWBwk7wUiNLJHtA8SpwwdDGpZSSkW",
  "key42": "s7SZDUvjn93D3iUESB5VvNj9y2ypiNSmGktYs2uuGu6BLXjJWC33vti9kmaG7vsamZKoUeeqxGKM3zoTJvdYdYZ",
  "key43": "2aa373VbHBGj9NGwMpwzfHtrDXmthv7hQJZwnECtQ97dEH5AVUPigdHfKSi1ufuk8sikXr8oiRMncdxiMt2jU3xA",
  "key44": "2UFk8iKA4SrsrmBdBAPwoS5ePku1YFJzcki4ANVVLXBD5F7xw7hjKU3anwupj9p3DsjDcjheuBTcoASFAMV678S1",
  "key45": "26ciEWjdo57zGURXa3S55Nb9s7q3bhFJhC7QpnEu25awez5dwKmobz16FKwoJcVKLxVh9ZFgAaYA15kBNCFSGYzk",
  "key46": "cYNaLAg3tYb3FG317JxvBWUQspU5NBFezPLZ6rpUTjnndbLRPXC99rSR5bh2U65EQd83zPLF2zRnf3jmN5kb6sh",
  "key47": "3Lp3Hxcs6zeZLHBf9hAJwH53t8yzodkCQN1TqUPPQj5sCZeTqH4TWpuAH9GmKxj4kWyok3Rm7vXXhDs8QvJg1JPo",
  "key48": "5M9Y9YiDpLvn5eyY5rc6LVVXGq88Pfjmof64ZFy2JPJeqGGXs344gHC95B6RLqRHZWhgLNNpQFDMQ5DvrKwGdpQL",
  "key49": "3kJbrNvKWFQX2MuoX8teBFmunTbegMD6udW58hSG3s1NEoziWabGk8jAGcnocKXdrMuwDys7s4eVJ9LbxLTgcq9H"
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

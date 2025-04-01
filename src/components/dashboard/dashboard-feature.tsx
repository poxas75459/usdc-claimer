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
    "3VVBgauGKd8j2Ae9jCUpcJkEiPhR1McQ2nNesXU97Dfks8VwsavcZ4WaENppG2ZC3jqEd15YK1usXEo7P36Gup3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38ywhFBkYN7nsP2LNkgxJgWQt5nBKLTQzNXgqnKTtnirurrKNPer5uCc1zSYkHRQ8sZbQw9KsYdSqaP3z4n4FZgR",
  "key1": "5WpzJP3QCZQgJXxRdnpiFxF8RaKVF2NTP8YAKjEfnwasxisQCddCZXo3xEAz98BYXw78F2ToqzdEVWhHTWmEiFcA",
  "key2": "5f8eXkoT8tMnwXaQnR2DraHzmh67AezFzmumKTprJN8UbzWf4vLYNh1TGVwqoqZfG3ijByS7xeC9cxrMgpUaUFK6",
  "key3": "4S2jpjagWpQFFAqMKzva4s8sMdq64dEVRGm9mx856iSUgqmwaoWf41A1QBZ4mU6ddHQwNEUufngKGyrDmY63J9Xs",
  "key4": "3R58USnXynuBT3XKpC4fvJGCKNqncbN4mQAdsznKF3WBcAk5BeYBqD8d8EvTTfP9kpdZAhsPH541NF4nkCZ4T1vu",
  "key5": "4iz5wG2RsbGgFyHVPhZJkNN75jhoNhXbaaq9TDfdqMrtKcR6EwztbchtMZPUXhJDPEhFAsGdu3QR6qNm4XM8747T",
  "key6": "MU9hL6gbfphvqR29yh1WQWBMqfpc1BRqB6CUv88rKAepQuMoVjHadW9Zu5AGLBh2Q8ZmCz2Q99i5v5Nez41VKRs",
  "key7": "27KP5AbuTZALFayGhcNcZwN1dA4W56GgZjyYZQ3FudEywaFYja1q31Be8SeyrUi4xBSV19hCabMWTDxWH4VGuiWQ",
  "key8": "4cNJ3QHLXEzwAwfZNiTcsCgkGgzxBTWz4P8M2f8ovXhZx9w4hrfmTo3GxxmSaScZBSW1q2vREnjt9ckRy9uCms6L",
  "key9": "2NWQyejhG9UGwdfPQ5peiB5HwckeQMfRdpsphgCKGxALuK19hJZ9TNRSZu3Eq2yfLTwVceWg5NykZXDU4xBDDcZC",
  "key10": "2tJ1ad9AbjdMga8EdAPVPSg8Uz6N6rrw7gqgNATut6MFwJevFWgmonmKXXSn2e2E9R22khD7Vxn2395bu2775HZY",
  "key11": "2w8iLTFTLp5dNxJxXCGsXFdmh1Hm9rBeh3wKfSw29UeaRtuiLZGhtbu75Q84oze1VvPpkZnGF7KSMbpdBZPJxBkc",
  "key12": "34FbmuHXzqnUUH9U3rhYGNepamNMGvP7MAaDbzW2up428eHrhN6VYyYzG3aseQeyDuWtn5znsadxiM5GdfNUzCKZ",
  "key13": "5FBKfcUBT9BQzk7qZhdKa2R1EXiQ6bF8FpH5wJTMV6xTC47mvXfopkAu6TGLdtvqmyf9gsah87KJ2HfN3aZAWdAM",
  "key14": "5WbJrkSKdCk2wSwGd6VJTJt4ri9r9zXKYUwfxFXoCBkzZEBE57JkqcB9eYy8YAoRvnZxmRcGEEmN2ErrnpKiAtbk",
  "key15": "3dPmcVxboyoSxyircbaUFAjhpfW1WtYLAp3Jb1y3ZYd3iudTwrFPNuskMHucKd6r3t1G1vn5T9uoxsnbNwPQEw18",
  "key16": "4AnbG8XVp3FsCJEgN1scLWJWEV5fRhyZUqMtFY1GgJLrqfmjpTcju7WxZ6NWEPY4bnMbif4gHXaS8pvebXe5e9i4",
  "key17": "5GwaTr7RuykwdhHt1AhLvkkgZDhqSE9hTakpxmU8wkNpQjRGEwcPpgcvEzJdgnDfhWkU51hbtdcEmstkaN3jWuQE",
  "key18": "LXtVCVfmWxN67QzR4UqZSNU2B5EuziMQh8jfu9mNEXSyU7cGdpVF3gpCA9Ly2Dx917z5LKQLhKDSWFfbQC28f23",
  "key19": "2ZmKqXHuTgqqwnotnB2xi3aJvuzab9rTtsknZNSWvo1ZuowYszKSKenrV7jt8m6CFAJGwDjGVazmRGZhZjMqzGJN",
  "key20": "2cvuU5kxEy7uXrFMaVLiUw8ahvhfzLFabdNFcVR6XavQGz4eeSRQ1g3x8Lf4pj8n668iKEGJohoQtBVvSw3bNb4V",
  "key21": "4HTTJEsQWrDA4GbQNzPZEv4VJn1fYzAEVB18uxpJrGKD365GdkHiVbbVh5DaKDLsT1KRUVQB2BMNzNQBqGheE2zW",
  "key22": "4ice2ajHrY1EX4ycFfqND99S6QJUa8pnCpiemTAbH9ew1h1ALLp3wdKPHLuWxspyjinnUxxMNwBScHieutQzYa2",
  "key23": "2Yikimm6DcJtC3KQkLwc3sVuTKEvmYDU8ESSfLqEvH74fKQejRXLPPqd4GtsrTXLXu87odKtSf7Hsp9QnwM3WM5M",
  "key24": "4qz3P4cmvXuGnMMtL7q6AisVhvcrAE1fCSA9nsBpfsMsAeuraRd2Kt9SCK67KaCgePTNFgJ3txztPGqqEgqvWUsX",
  "key25": "2KWwLQHVr8VdGBkomzRSfRLqAp2zLDPYvLENZnVs72N6fEVuFEr3qnFMo8X1nsCGeZudGtCZDndkpG1ChXQ6k17k",
  "key26": "5t5DGfAsfeFa3eXoCXxujBTvjawGvV7wwAbRzoZxya6VeTiQsvTkPJ9ZvJf9b1E74yKdNtXhpqRk74aqMXevCj1v",
  "key27": "3saT4AA9DBD9SxroQC9V7ZPo7UcmTCXJC3D33tMrqzRUGBxuyMddyik77rzt4AzeaStyHiMjEnJKZHYJJ5UMMeGS",
  "key28": "57GeEDVgreom5T5Yj4hppW5eYdh1WwQZhDK5ryZmNZbcxFQ8vJscCUmUSYQTzFC7bhuYiAtcw3W9RDmyNipVKegq",
  "key29": "2mxQhferJW5R1Nyumz5vb4Pth4GKpPmkyD69SKNfL54nig6BtEhYwyQZNnS6zYoynfqp31KkUWYWCTmhAwEmGVUm",
  "key30": "qXwn3qyJ6xQKC8mhc4pAuoH1cDFxegACsE57YBYxAx3WX3n2AXEXh3eG1ZdNMYPQ11cjHu5XjWAsBorSbmBNuFA",
  "key31": "3vshn4nFyEM7bXbSsKWZmv3t1RDsPW4KGLrsmNQyrRCs1JmRsckYHt14kxhsgdC444uACGQoGALrPsrKAJNqKvcd",
  "key32": "5nehAZk1HxxPdvyjCCTsMmSHbzkgibmzq173BqS5CGymj59KRUBwme42iWPswYHGYvVuoRrAVWma1x2o4U38W7d4",
  "key33": "q3Jh9XMw1zG1hrAvuPQcoQtnLBE47LdmE2VhBParKYrugueWjjVK9ahsqYUxsQjLhYmqdhU3cw7XzVXNHtMNHbd",
  "key34": "5cEoefP5NUJhET9ACx1wZRKqZ5xrykpyPbEN4ddm98HHYnAMS9CYjo1KNjuw9tRNQp4QygGNuKwk1d7WCXev4PfM",
  "key35": "4ZHXguS9EWakAnqQynrRPDNDQMM28HdGc4t5hkhjV6W9pgwLv4chu1Hr6FsKmNcdeXtWhHKs3PVYG2v4987zSZNV",
  "key36": "4NwS77CXdBqzuL4yFLJqR9pYGHETre47dGgzgtHmTmVPXwowu6k4Cqbx5b44cHFLxi6Him3ouCiur2j8CUQ5sKMr",
  "key37": "D3zpzo3QipSwkMHXPjZFNkGUj19WirDC9Jz6XLBpsVEWfJ2TkeWfAoLvuVBpDXpmwm8SKNFnSRtsHEJc8HSWtKF",
  "key38": "Ss6qjn8i1c22abmnk36DjMwNcSbmtzc8K4Eu3do2EEAGG1oPhVSdZPpy9Dom3DNFwUvrSBNwJX6oxAWerfzvZMZ",
  "key39": "3MQYpbx9zpYy1k1i1xR6W5L6ys5Tkq2u6NXAasELt8b9rTG7JKHZ4qGbi4nodwrCmn5YUngQ7jyYsJqtg7wmBDZ4",
  "key40": "h922aZmcKxugaDhzTro6LxqwVGgCc3FEGtSnAcMdrQaw8jqCffXXqPhRTRy2oa3hn5Xvkh7N6EQsu6Xsry36NfZ"
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

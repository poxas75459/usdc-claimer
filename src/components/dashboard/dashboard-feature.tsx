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
    "3a3gbUphXRLKgzwXTj2kT3BPdLjRKXVge9kQWfqFJGQ4uMJxfjhk23Cy3Vjscy6jFqgYypetwqgVvVj8ZKGJ6XxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "312DVRYSTgv2yFQCmQ2zwjBRWQMhTCB4gz31w4yQxEr393ub7dWECUrhY6DLdtzFitBzU9wdzp2EAZ3nRR9xSobn",
  "key1": "fBwzJ6kJrv8eU6x2QTc12XPcYcfU79BxfUKdpEKTA8Km6TNQvDn7JrsMx6YQFoKFHoH2vowFxtTHyG4P6fxBgTa",
  "key2": "3bGNcvZNEAkYwY2GaMkkjytwoCDQs4hbWNKGtRZpGa2RqX8g5mMq3FGKAVjB8aihmRZr4hW3DMLvQ4n8iGiW6yr8",
  "key3": "jkfk61uy5ZKXBB5x3ttLu2e7PsQTtowtseWHLu4zu6z6qjdDKpn2vq91UoikdvDRShuiiTJNBxtP61bZBZvaskp",
  "key4": "2WYuq1mNs62W4txPg4eRw3ysADQp5u4x2Jfmhc5eK7923b152Uvz5n5U8B97oJ1pBwKRQHnKy52RkuYhCLjBzmJT",
  "key5": "2QXVaAJGBBeDc7natBG68qVkKPhowphQH519d99pdt6KvAfgCzsFsQewG3h2fztyT7hrki6K7ezmKAkTTUBQy8h7",
  "key6": "5UnN7VJ4BqjRQaQxL4d4Av2hWaRJ1bM2s5WdXbJ8QwGBU9Rcu8r9mmQPLwQMJhT2zSBbTs8BMRKACkrDRA8Rfyss",
  "key7": "1FMgn5cJLaCjskSJ89VYpipAJbzy4PimEkypDwPDZZnaAMWm8GGYZ4CZLD7myiR3j5bUDkXrEkU6DQfDLBPM57C",
  "key8": "ja3DrC3CiVK84jFBei8YroAsXZbf9JAXKU658dt6rNHyMAX62bLRAcsqnysL9rggXWAp7y8DQAsBP7dfJ83k3ZQ",
  "key9": "3o7oc9LXrNM8mwwZ3QvvshgW5TjHjWhM74kXLNsqrJHutDwgKysC6jLFppaavf2iF7Msv5saXwowKqSKeeGKb9Pv",
  "key10": "2jSGuRXifZUrMqwQrEFdbrdLABwjw677diETLkyX9BXq2QRo3zJ4LMzHYdmrfGGuL9a5akyvyJoafY6PeyUoHcBj",
  "key11": "4as4qZ9sE3HqGJ5taS9haTX2DAqL2N8tJdsfDh8z1Lmi9cxFJsLmfxhgoxaCrgZ6YK1x7G9xCrR4re7XWmGjxbLz",
  "key12": "5cGTu9obDdVLWZGhs4XtJ2ewXv1tCV7SE7WyGQwzY3SVneQgivMWPaUMtiMEbiSejbhMTSUDht5qhkvCc8G3YmiX",
  "key13": "2iE8PJ2cUoTRAuxb337ctU9VoBM6UJ1pyCzz7Hk1LjxJhzs6FiWKCK6LVvpxJTDi2AbK2ffng5MvqZnxHhVnsH9M",
  "key14": "38Zpvwnfrvkx7wfcM3grqtcb1dYZEEo79s4CXEcMp8chejH88gsXzHC519y3cj8a39Q53ZbPEyqkGbiEwFbcepLP",
  "key15": "3Pihupr66tz6PAZpJFtCd7dmSoGwZ2Am7bHUjrBPbkkA6ob2fr3x2fqJf6FeVAk6xdt71UPBwMusqZ6MLWqiPUMy",
  "key16": "2FoWgpFGjYKfzRdXWJx7f8KxUnizTWEhUw1QrapYkhaZ2Ke8TyKniZLLpJe5j1dfB7wW1993Ep3hHXzrjBBBtu6K",
  "key17": "4qF72ojM3Mw8RvvqaL4APFwqXuduQ4MeDmxn92bTfNVMtCsNkMobtJgKpZGguPG4eCSNhxdBaX2Vgg1smogJbPPQ",
  "key18": "5oJQLjQ5Uku7fvHcX8WNAJhdd3MKNkF71LN7sG6e9FhryHVWsTK1g2RKRc2cfu1S1PneUmGXUxVe9hZqP18yRSzQ",
  "key19": "2VKUyiQEicvj8h3xNxeJBWnQxqxSnKrcTVdvA3q2qWKphW6eQ1xqo4bvTLsF9SdwuSxwB8MH76G67kwxWkDiGNPq",
  "key20": "2bqYJk1LMtszuPo311Eb6MJd2qJaWdFwtkmNJ8T96hmU68SXipJ3Uyt6X4JmCoyu3J6oTaDN57hhWFcwg31qbkn6",
  "key21": "2SNLJWv6wkacrPnXfFJsbVPh9Xz9BoC5rxs6jBVtZuXU3s5mMWyUx8zfzdvQAJEJKkw9AEEf2PPbob7HKkcLKYai",
  "key22": "CmGe7eUsAcshzpbVn2z6qSzXFbbv4jsrXZvfNsstRjUn3hTXdPVPZYVrBwWSYWfsXeZpzYz35gYm3hpWeSL8ifN",
  "key23": "3N1xN3dRUQhDwimtmdQwh1EtLw6cYfT8JW69Dtd1hxNmyAtSBQCbzahS6pQR26LeSRrjLVcjqDYhu4Trmms7ES5L",
  "key24": "4uCgZhc3dUY5KqwBvtGFWS5vnQwPAXin8ksx1ESPMzxCt2hRYf3xtGP8GW8rDaqNRhAGm3XxS8rxtvyBxxb4utPj",
  "key25": "2KrPuBPJXMxqvdRcH9eqWtexiNm7xygwcAyySnpgtGB7jCpE4DgkhTX5N4QBAyiswV52f6sUK58DVgkiUVui56MD",
  "key26": "42RovXGXPVMsKeihuTXG5KRuefpYx1MPGnateE5UbjnzpHaXVF2tXHaJberxZujVyMZvVb918A2kftAZjmYk6L93",
  "key27": "pSRrH3U8Rfz7cs7fcC2Z61usmDSLn9SynUHkwN6nE2JxfbcKfLt5breqrpKQQFTwsMDkvfUApzC8PC3VAbs7BYA",
  "key28": "2dehE2cWjFL5x8Xp7MqFVBYNu8BEqykynqptmE6DaFAgDKGec9cA9iNDP3hUegm57NdmHVGW7GYKha8toEGCdZ1w",
  "key29": "2mHiioC9UUApCpfmgkid9on3JNatWCtDZCUhoGWgPjKAE5xPSwXrfU4uMHbgaMZGtANqnBGUdwNhBYhWmQ4LjqS7",
  "key30": "iqjg5cn975juSzk1qCTTXicKkqcYWBs25ZBoy7AbVAiBWdR81LcsAAAevGEeo4sivSDibdzXF3VUZ7wu1e7GkhH",
  "key31": "2Q22u77pkhSXNkYHJRwzHNqncUvENmvEEzFRToAcQaMQjELsGRCc4nGYwtM6tLckAcGpU27UNCYJR1tVGbK16FF2",
  "key32": "65YqRv2JxuZKkiEJGSnvQuu3D5rzybfMgnKyoNF1t2w498XbzFuy4NL3TXE5GJvst8URP86EbaWCGiMMatNcPP4X",
  "key33": "jq2WBNQgnTWuwowCKzCus8bfinVvqnuQmu3nsitfDt4xnq53hXZfJpJmivVkkw6kTAUGK8xZUjLWEUCHzJPvkiF",
  "key34": "2kr356gxH4uZdzgUiUdKw75AhBuuoVWwnMgH2nQ2gXQ4RTHYCus4PESdNcpgxRTX4mUeioRzwWVWXNevyokgSxMT",
  "key35": "5kApSsojph73ENXp7MVbC4KXyd2YbqEE95TV2YPe83wMpmAntucUWoh5Tg7ShnVHctTTUQAcP2JWrRz6Zbh4yRfy",
  "key36": "3RjJQAva2BCSK3sq2yMLgco4yTPSfLJc1mKEZYZkEdP5DRmzMAKuxB8aUuqgzfZZHMyvJNY5VK9tb8FbgnDZDxCs",
  "key37": "ZqAzW2425WJbaRJ4LkUj83DpBrYN2gYgHgNaaLKiLQihjJgKdy4sDMrxn2bUBTbDZ1YVn9Qai8jzig4Fbw4FrsH",
  "key38": "46EzFWt4aPsVcjHQqKk9e5rmRGCQDBejoZg3vPy1NJ3Kc9o7Nj7LGNL8qaCz6LeSfwrhpyqcy6c6XnsSuVWvGLVS",
  "key39": "3wnQzK14BHxngL1jCUG34Q845UXXsGR3rpxvmVdaMacerS7gfTpmnxUnEuWbfD5FVpXEjdQ6mTB35JW7F4Pk5fMH"
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

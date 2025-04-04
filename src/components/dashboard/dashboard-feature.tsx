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
    "3Pv7UfHjfJti2H4w6kwJQ3iJSDcCwrFozuf4Yka4FTibg2FoBYQeDLtQujNhcmjp2V4D5gx8UF5AAiFKoxDp96XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvEH3RrRmsHKFjRkMaU5S24Gei317XRM66SoqUsAUrepsi3YMvtBKLdoETzCS4BEeJCF85LPBuR4hRmQDcQxByM",
  "key1": "48FHwxbjkNaBsjsYMFjjvWYEZrV27qmwvFukfiX4tpNnR5X7u5AUwJE5PJUDj65hggRjBvYMN5vKbooeQyyRPZRM",
  "key2": "2L88wwVJF4wy5viBLWLmc3rRjj4aAaYH43iqzhvGmXTBif7Huv7iCmUBBq7MfNMbsGfm5uwgHmPm1X9DNrmjVFvG",
  "key3": "rgbQyLxVUraX6Nat5ztHiQ6M8qV9u3nDZhaxeyz4uJ3nMwqfjF6Tt6Tn9Hzf94oDq2H9USGuo2Ed7znndmFvH92",
  "key4": "328VZgfq14dQScpZEtrDdYPFsPffBPu2kcVcmRtWRSc6SUZAsYot3nRtzy1hmUYP4mBHNywVkRJQsCQH6Sf3ASTs",
  "key5": "411HMhu6WoseKyn2WNc6U84cuPZbmuzMpCYaaU3KHYDwCiEsMb2NZV9RkPyVqBuYRrtAiUSddHuUfB42cvxntCeV",
  "key6": "3u55jRj3Gm7hQQJt7K1VauqHHUK5PsrqhRpgFukVDtbHef9jHG3bQMTFeTnS5arjpjZPGTCvW2sgsyGgVhivEFbE",
  "key7": "FgPwpycshYrra4ynaMQCSUFLFJ6ouHWwECedgoSNyyL9Rmup4CVL9NjJhvMoy2tYwxtepuUk3WRWMctbKKqen5f",
  "key8": "523n5ZFRtktz6QicfUyd9Wo5YNtwdccM8XcV1g5SUFkiXnkJVS8A7RNLmjHBJfb5UvxHi6AJphzsErQ3M9AnK8PN",
  "key9": "4PStxwiBeSXSqKc6ypGzUrPsqnySLt94yP4EfLBHuNGVzwZmLzCj9CpxexRbSdsJP5qYA1htdyyFfNYzFS4iHoXf",
  "key10": "4EMUBPQ5M2CCFDPPCqA5m12GKYSNEsy5JCyxLrSoW38nLSUhrLbyuDzthKTKQL9Md488zjyTic2EuaWstt7VWH4m",
  "key11": "Kagx3RAG5G8tP6cprburDeqfpZqNo6xEua7YSR73vh4rawEVcr6J1yW9E6KmNnqGZwofaBr1G3EWKgdJMcx6VfR",
  "key12": "4X9wsR5ti5NCxz51r6WRb6uUhyW3bLD4EnU7YfC3vTKq8KeRZgKmYBcQQUYBxhN5pCPudkx4KrKvXtgRkz2sd2EE",
  "key13": "2Dhrwhksb6Twkj7Tmpt8HA3o9DSmxeF7iUVkuw1gWdD1PadZisUmhHQQZTPf3y4xZKrBa5wBomDLnqr84ZmGvk2U",
  "key14": "2zmF3MdbaVaBjD1V9H8gsaUKazFBfHWqgYKqBoBZY1JiocJhFvmEq7owznyHfYcEa6FLZnBZsWH84fcLnYfVVJ43",
  "key15": "yUw3tzTzbDNLpumm3nWxCKLK8s4CEZAYft3fJqctsPF4nz6qfW9gb1Qo1it8RzXhJDDmTvtqmHSLBjgaHJZEwhZ",
  "key16": "AowmNA4toi8CtiU2xuvwknouQshZcCLVVmFVLpWg5TTkCgiVoKrpFWEBYrveYvXzJkd8gFeipYeyWpcFRdVGcpt",
  "key17": "22vXEstp3WL4Cv36J9jCfdKaCX9EseyRCgad7PiUV7UbUbrUqUQqMETeQctPcp6qUA7mBNAym7tKx2mK8UappY8W",
  "key18": "2uUSU4LVHcL9KXrcapTmRrgUwUeJ6cA5ddaTWajbaEy8prFM29Zpi6iNRmqdWRLRtqdynSCFZ8rozX3zAyAP87a5",
  "key19": "4qkeDX7FruwBhMzrcfJV4bkKaqk4SLeP5SduAeqDQZRHvPvzdvaWAiBHZrG1sdEe1p5Lt7Y8nFAD7s7jodNuPLCJ",
  "key20": "54Lvzzqmf4SyUJYd28ZJZPYz2GgnKwLXcc5UtkcdYVVKXKsLroJKUv3H6JKbMLCefwuTzdgiXj92vZqgF9D5Ng44",
  "key21": "jccm8rFf7FpohHLRz52C49W39cabfEyTw81Ws6mU7xAS5ct3DTcHBKAfuDaDXsLzz4Px4MNUGnqUUaQ8WXGX6a6",
  "key22": "BibvviYUfdwDexrgDKNgdXyjMdB9UWXjGnyCQE27V9VZ8nk9h3SiXZB2uWUerXBuQUVyhJgW211i3gDtV3N24Pn",
  "key23": "561dFnJo5KzFFdJtGhhqHJt6bm3Xz7n51tpG8Yg8Zdv41EJLp1sKhbyGJkFq4F8qPNLc4fkxjoPmTUF8oJ4iMBMb",
  "key24": "3g8xSABLGdzRSNoeCqsJCQRwHLCPvj97re8CbMCoVVMxrBR5omdMdN1iZwioY5xmCDKChXpFdR6JbWqiGUh4AjpN",
  "key25": "5gHsrYPM1cG9ynUAiBEJEVzyKXecFQRHKKdvuEzs9y53oPngj7UEts44jpt2DcDavVxzWrHdW3HWwBh8p4GFfK5b",
  "key26": "4xY82mNHTB9KWsubJHDULvvX7NM68jcZKWi9wpPzpZdiZ4isMjTgTw7R4PNP1VQQTAxGhMETJSmMHiHX6e982D5A",
  "key27": "3hCSnVt5de58n1aUUi54hzWszwNA3pt7Zjna1pXi8ees7ENBss1eKnjzHqwupHbUHkidkiwHAcP8QQqV3yA9a3k4",
  "key28": "323qL3nJj1fZsQYmHv9ug7i8m7L92HAF823KXatHDYPUdMjDBRAxeQY19Y2GKLDSkjDfExSDb2Qzh2m4VzV7CfC6",
  "key29": "2jk8tgheiHjiUNArBDTD8ycEGV6Qz3inbDQ8zRZ9hxqmzymwSCAAqjYdNyWudeXkXN3yRr3uPVYULUxsUtywk5xE",
  "key30": "ujfCvi3UAjiKzVh6fNFwTBRLaLcatKuFXteywP61hiXLeG6U4Rb2E8dwF29KvNbcDYt1SyT8T96Coxmq8Y1oQGE",
  "key31": "aFbBtMWQHbSFqkWZsWuKHqcp3UpgK7t4Ps9MG1Vbiz6ChTSSap88wqvWYSbDy4vsEY4oHeKVwZA8XJaaqdHQrbr",
  "key32": "2SsY4keduRctwXNpqQEzUfWuR9qZQGi4J6mZ34m952reF4HLGgmrWnMneRNRKm96AdYUbVihjNnASoHbMqdD78BJ",
  "key33": "3KXfvUndCVtVJh1tdjrchUEV3rGWUaurpq7VcULvkJAhKSvcJZ6gEGNHLdMTnTaYuMHNCnAjBFJWdzjj854kTEbb",
  "key34": "64CTGQ37zXz15yPTRvqxNdTStjSegJXrzUZEaWuJBi4LRqqRVgrVNZsrdRTYSZ6tboUeq9arRYHkLpDxLZSVk6iM",
  "key35": "79QN2PKCHthsRjt1Yq3mbARae96PR5nb3xj751awbCR8nC6Tami2AxatfjPrj2wPTirFqTBjM3GZW3aJJH52xox",
  "key36": "3Ld4SQHhbiGfJ3KAiDCJKQ89Qp6FakkwzktkxwNzHAYvpPokymxjdFdiPHidmsFvbCKR1mV22KsHDQmQL9yTQNRc",
  "key37": "39e6FkUtX5z9ZmbwST2zbT35P81GaNE51JEuWVjPWyw6Re133kUSFqTUxgm4R338RdbVaWLTQQvRXXwhmdrRzxWq",
  "key38": "5aw6mpx2a3jfCDpKDZQzk3QirsGRzq7GqosikPfegQFPEfTwRY9qGk5nBVMvF2vpSCDQFJt9gAFsmoYfdciCnSAD",
  "key39": "5tRuwtJ6rRK9QyQ7VwD46E8CKdmUVM9dNtbY3NroagKP4fmK8W4eHTQQ2Sqay4xSuazqX3KuLX65A5kUBZ6ASj5z"
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

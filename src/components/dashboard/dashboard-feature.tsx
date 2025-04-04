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
    "4MjJ6W3qnRftiPzwZG2vo1NURWhy1DEAYfxjEWuVVgoeJsJcvzaUZoupXnZtPiQbvR5oBCA7jFE77QUUAUvPJFYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XogbPuQQEGL6PtZ4KrGrwkr64Geygi2F5SX8rZgBx3HgBVzDWzyA8YJXEddGFuQTVmJoBGCvLMXRDAjG7mvZysH",
  "key1": "4MHVrotQHx5rQTWczEUV7rxx7zBW5qSCatbC6uxpyYJzZTDzPXtkJvjcPeP4TqYc5USjag7gyzkCJGKZTZVHBCfa",
  "key2": "3aLQdomwunpKiWG2TYSFBokYHPaNqGCSAd3yUSAQxmdTjgSjDfQFsrGSMEmTdzMoi3KxLC79B4SLScqzkTrGCRBd",
  "key3": "5NHyhqkPWZoJ24ZeGDRtNbX6gmVpCaRn2MDzciEuxoaJ9tjCfFoTbe3K84HsHCJDsV5RX522UHpuaoj3XTdA2c5B",
  "key4": "27vNcMncvaxQ6ow2YFLJNPLuDHEWaayfRripJWvfHVeUxtYLbD5rNtGALhZezz6NUjoGSV2FpdNKhmEJw7Z2tYvg",
  "key5": "5wqaNWQ3ixqk6mdrCvt7k8rwdsGtg2rwP2AqxT4zbk6a5P18EYoTDvJi2bohqYueLvitewgTYL9gc8arvavi7NFy",
  "key6": "3q2Lbv5y7bQv8AuKWBExziiLk3u4ZBoVDGeYf8zVES7DuSDyx8k3eg6pwg7Ho1VdWtYiRD4AUxXPygKiyvg2kFAK",
  "key7": "41iB99Fqp4NPZ8EHZPhzqFZ1rokMSoRnyszRy9mnbG6XECfoV5Ba8dm5RXCoGoSyAhtosuc3vNHNzBZrdW8D7wH6",
  "key8": "3Piepr9HH7mwcyrPgMEga33iyZpZchvnVpkBRDThb76dqCw5PswLSWYNfBSCW1uq3bJM8NoFRVXoqCUm45u4KjQt",
  "key9": "4wRaisptvpZgVatw1uKFigZZNDTqtXfQSnQvqjFQW9TsQiAqdKkqd8TV5PUvGHNRvGn3L1WC1WYF3Ph59ij5tB3z",
  "key10": "4TvBa93WKgsY2PV9GYyfPtyewL8t9cPfD7HvaZ8JcEULePxXoPwiUYEfJLYS8bbdDzZ9EPTABQYwwiNEfAHyN1ST",
  "key11": "3wgsTGGumdJZX4mA5WwKoxkYW2jUHCpJHQ4kjizSLyVb8nbSxHJJ9GfoBq2GeD3xYxJCsYcRL2y3FqJnRvdC3GuK",
  "key12": "5f63mLhqwRJgwtEJjsPEqVzwV3B9TPtqqUT3ZaTTvivGpGFKGT8sQ4od62ZcRuV1PmEbUzYjJpufzHikUoh8te7t",
  "key13": "4yHAiBACb9frBViAxkq9scjm4Bf7zJdb623N7cmKpW77Notd9tNKGyHNTYy4zqcUsbdcJXACfpoHV1tGPVHadphw",
  "key14": "KTkp2TKwgr64tSBLpuh9URdyh3FaddvaTogYcJZzfSr7HQ7SHzYYR9tjC8Kdrmsg5tbDsnoRYJKDkHCwVz71nqF",
  "key15": "2EoJSQgWjLdX9KMjnCMcw66Rog4TvJSGeSyQiYXpPNRku9XCM4wYxwmrfMw7Rr3ZFZUjmrnZ9FRoZaC7Yvfo9jes",
  "key16": "2hd45QusAnBakekhnFRHvNtwLhSXsWx7CyfskatrTTtnBq42WrJt3CYGvmTfgbjCV7uKV4LQPuMYMmrUJkV9wTg2",
  "key17": "3m9wVmY6ec24QthzG6b9KtixZ4ddSEQd6yAD2aqSpJGrVYrCR4XAJYAGEpez7GJ5mfKyX1CurtzawtSugwBT6jzB",
  "key18": "4Pde6egJfoaZ176M1TeUheHcvaPKgGz8t1XYk45QVGdZJZut2LAbxnvknmosxL8DEwE7U4MyfXWVLaEuAB9nkR1b",
  "key19": "4kbvgoDzrRVpBbq54FpuPHpy83wqFBD1VnCadi8VJWTqk1Jrpx2DPQ9RRxRNdykYtGV6XU4AUgZvTieJZJ27iiWA",
  "key20": "2DRg2wUC8CJBSbpa586aW8u75YJar61Z3YxZXSTF9mZ9Meb9TZp1rScGN87CSxuZvZuVW3VrrBYYKRhVehCjDpT7",
  "key21": "2s15KzzMqUP4Cnp6i1Y1FMEGCvmXrr5ak17K8txizHiq5x165i3EwEaJ1SAh2ggWFjwz5VypgNuM19i2P3nMySrg",
  "key22": "46LfBJEP5h3v4LVgMMVU1ZrTj8ZKTk19e6KdTT7mCjBjUjeN2a7hC2CrBNf32eJnbxJKS8Gx43ua2VzHvTZTPZ2u",
  "key23": "5ovAFQ393cUACjHyGe6cJcd6hYHRUX3xfx51UGVRyQjka4oq2ThdDwLhwBCp29zcPLKqJv6FFRXGaBsV7ndwvpvM",
  "key24": "2HqmsMPUuYutnGneiSRB6qfQpDDmN3zaR8ioPHGn3JDHvUF8Ys1geeNU4ZXLNkHz83po66P1h8J4Gqc34bnKuf15",
  "key25": "24UhnYQq54E9DiTCtEKrRRM5kR9SGqDFS5FHXMHbEFHAWFYx5YT9yoBRdDqCUMK6ujCy8W4w5azsQASW6TtDo867",
  "key26": "2Mz84skahbUFZsEVtLBCDfzzBWGxUYtK8jN1pUGftBpG2cnrGkEkMWyx6UMwNaM7m78ETNfkFaYc6ryGopzGDZqc",
  "key27": "4pp8tRcB7fHtrkk86EBLVUbWaGMdL3HpsCigzE9fvfPwfD1HP2WGiJN5KjJ6LRFGkLSMmD33ATUnP1V4YUXniRB8",
  "key28": "2gvAdGRwXXEq8K8i6pbWV4tuWsVEadQ77Jep3asD3QZRiaV5aUsjiVLv6d7auoxEv3V3TsbGyc6bLNjhGh4iJaA8",
  "key29": "2h9cGv8FjCkZTfpdMTQdAE4aLx4RAbKHCNDE8vcx4WkTUmA6sPJXDJMVLmxYJH4DmSZRMjNwwVmCEeytDUFos6zU",
  "key30": "3rDnsbYVcwKPcohDKH2BYykRJMKUbGdwWnHezDyjKVZaoBboRBbEW4XS6Jhu5qR9Y9fF1cWjiPfskM6MgTzWcMqG",
  "key31": "4b7MPd6oFqs7ttzw4XonjWdN2t4Pa8qW7GfJ6LFgEnMTBoA7zMuZ34G7ogs2xLjGLM91SVxw7QKgG8h8f1p8tVvN",
  "key32": "R5GkQ2mLh9vbGuYBqYSqATncfUnWPSm3AC4iGeX1zG2p8ocup3UPS9icD6frdErzV5rYaeUnqDK7HZkppghS7gQ",
  "key33": "FPoitniysRukJvR8k8YSSbjM3v4mNuPmNHjgRoyWxfVu5cEsJTWKLJpVDRHo7VdsKKjbepwP4QLwjPYzWiVKKWo",
  "key34": "YFErxZTtHRnyRPkwMgfUbqAiqrZvPBwpX6bPnZ3CvczqG6jxUGDjijsQGfZ1Ys17F7KMdT4uuWUuQEcv8vXQn8b",
  "key35": "65u4FzYi7pnoNeAotMeKr6t23ACQp14xqHgL6vAfJ3CBxRDUjgXxrYKtFtZ9LBdFp7G9SjeihctvKm8RspttWvnK",
  "key36": "4TMHfzpKzNQdRuuvzSBuWFYi1iQ7BJjmEvyLKJ9NmvMxrqbL8AZJoC5wECMBN26VGk1MxsWMHtDuiYy8rQajt5oH",
  "key37": "66QQtCRWbGj6DNNh2oHdzxj3ehcCvzgfwbZv67r5GXBCW5mRprG3mWYMuRxCHMynEBtLY5e366YfS86ftcjyiQU9",
  "key38": "5j1Az8HGM2sVth9hFtUuEhtGgdn7pskwoGoTsZVxer77bJUxWRckfbGxooM4XqNTr8GgGwtUz2vRvX9aiQAoN412",
  "key39": "2x8eC3fe3EQMFjmaJ5HuoJDqzmSH1BLYZqVdefhd7aj5D6FyNucdgUwskBxfdnVoeBjccaYwbRCNhiMrUGdE21ao",
  "key40": "23A8kMc7f84Mb3LXPbakvvcSWDwapVJRjFx13om97144BavNpvZU7ZQVveNijzVXRo4H5BFstawp9fELzQ4LTeYN",
  "key41": "5yuQWNsJXY5ifRaejp8NUwbvxtn6ezK3LaYzc8jU6e8vo4QHjh3FZHg6Xzjm3DDo7HTdoCRnmHNBHCuiTUGuQS6t",
  "key42": "4m4nfAg8fhi4HPCQ4J9dcyjK5n6q5jPRVdZj6RhcH6cvq1Yvy1k943zAMospFqZQyrUB26CBva4enP4H6X92Yuwp",
  "key43": "3mnPLnMGqMhZ3AHJAgq4onrSeNJGSkGo43zZXUzoRkTzfovp2JqUimMW6QvTaBmq753WLkzFZ8GrPWGNtKQLKM9W",
  "key44": "r7oAWLXDBKq2SrKCRpP191jhR6Rx9PSRSX9twbqFXnhoh34qBvwBXUdbDxuFgD6eNx3e9Nr8vXFc3vzosHktQi2",
  "key45": "26Mcr5oejYrGkuijLS7jujJjo1TG4r2sYDYLrXRx56k2NfELKuEYe4XnE5R3Dcd9kAaEgRp3NmhFZso4rhghQiod",
  "key46": "3LUbcS9oX7zGTY6XyDHxDrNBXTT7T8vokSkGHYWFmukrfAhxu84VAHkajnWDAvfsyYbEVv8PzqAZUxUpUUnaKL3n",
  "key47": "2RrUvBxTrzxx8KnrJRoLpVTU1EFbPQneqYLfKMwpz7np1n22RWxxkZXczdQXLeEMSJ6edccSG13zKhu4fBSo4pMt"
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

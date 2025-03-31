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
    "55jxCKSt9D2ky6Pj853uTBX3hombhoND4YGYyGncjaLtg35b9pqzNArj2gVHTXyknT5J2ekT8wEku1eT7HVWeqo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZipVDxEzV7uyvYochQNsMpFMyHWFUqM1WjBbNySYM33jqCqJU8Bw18HASBENkh1c7rcmdQH1iH2vx2aa5gKp38s",
  "key1": "25eLsKjUBXGBe2rbLAiM7xk1dN4e9Uj9U4sHvE3Fo8PvkAqNRCXM6zLtoei5qTvRLMi3BttSmgjrV1V589RkCx9q",
  "key2": "3dS5yPuZ6AzU7whTQuH5Mw1zKn58S1ZA9DRJfKsGJJ9G59k6turaMqEoYojAc1vNRABJ9yMZtmXia72r5br5RHYt",
  "key3": "PaMMibApibFEsoe48YRGE5MnQBtJ4xqyqMn7qp7ioPMDzEZhD9wd53CMN6yQENrjsRdZNJpbwhx6kKXiAKXU5cw",
  "key4": "5W5LzycRGfDsi3CQR4VFPFDMux9TPWFSxB8ZRwnxcA2t39uyra7otFnnLM1J1FqmnRhRoH83H2V9iNrvy8RbiVKv",
  "key5": "w9ge2kkaCsLZfbWbgv1MqprkhemP1YbLfT8ixwAMzekDu5c3BXXKcsTr6e43GvkSKJJjKCye2bEsqWrZfCPRbhL",
  "key6": "57B1rKzwAuFW5x1Sgwt93u9K3tgMX4Ab6Bp2y3qYKpSHAJp3h78rcjzCNC762tXUic8hr6ptnymkjqH54enwmwPr",
  "key7": "538jAjUPq8GtsDRLrdmKfJpeK36XDvPbbFUHPKG2QsusWMmu8M3ovziQvfyjZmJnoyTz9EvfusiLoV57QnG6KDvx",
  "key8": "5gdsBojDHPwS6juER5L6v5uMLZhMZRUo7fVUgpVxYixESpvXp1RpzDhLqAEfbkMYZeJx81QWfXzCMPxaDL3A5KvR",
  "key9": "5gQLYTMuLQCDbY6u6m9s2JwEPdBSYnPWZsW5EB73Kw8x2DNuyZZ541a4ar7Aj3YuKdWhPWS7nUo3NV5BuaMXXrwb",
  "key10": "ntnAC6GTpsxSKTM79zEavgFf61eS5zmPQVpzGpDLsmXHHJv6tr4Rv35xqLRfYYSrHgTJbyYhxWZy9yUmNtGsVms",
  "key11": "5BHws1rwknkLWKUgP92wkHzo9zaDifeiQfKNomfAM5Ma7pysXfZ4kJehVXDtBPD8vdXGg9PjNfZt6WQWnjY7Qakb",
  "key12": "47MfuLvo6zqQmFwQHfvSsuZv8VWgSNhEKuuwT6tPhWvBSUfHKCVLJyozibVE8Yj6KvKgYjV9rCJShHxWXDfi4LNv",
  "key13": "52gwdewiBH8wEYgsvDTpVe1MKBojGjLaZW4T9j47AMnWv8ze4Uqyp2KAQRUpLyABH5vBKF7a9SZRAAQGfvBihnXv",
  "key14": "3C9ykGgd48av9ppYCc5Lm8hv8bwd4rBrsAvr7oivmz6M9jSNw21yXy23tNmxvcn4hsNkvmFVEbKdBpTovAjrAdqV",
  "key15": "5yHD66k7nbabbDqjhTfwo7exrUb9fVRQnJcgMepuweEKAzzzB1CpZPp93MqHDiv17TjynCum8ui1BJRoQct1jhH9",
  "key16": "5giKSgxNjtPjq8ApBECPWypyYAQnehvqj2TXqdjGGhRsnYMe88HnevRjYLSMPTFKu7UYaStgQ6DLvEnyiWpzNDBE",
  "key17": "2cMAJME2MGes8KBfePzqnLPGe13FGE2N37UNg99okSmCuSqTWGdJGxHiqin7KGASav6RnCfatx6X5fhssrDSdMZc",
  "key18": "2Y1C9NJmMGkU2rRkYu1qohx2zFtY9fMhqC6ySV1GTV7M86eBnDjsGD2KmjPhbtKaw3FYv8MDpsPTexB2TabKWgC6",
  "key19": "YnDfimNqY45NuHsBCm5xpeQsr9nCAxqBjqzuXvotaSFdLTbnftMDozUizvQWHjNsgfmZAat52He9obCy6bZWozL",
  "key20": "5eUibp5JHNGn8eDYLowG4f1t9TNZW1NEV69XYEyiGCAjgb9GbTipFzvfsd3qKKH5RWD2XoHEAFvLL5hEopvcg6pR",
  "key21": "36YieK2SsxMPuR8iDfRXBWeViwHykkWAxpKHdHnzmPvJf2qRxARR9xEUgkDQTEs5KoZLiQxSnfwYWUmB6jQ4HD6Q",
  "key22": "3UNK2jDM4Pra7s5zPDtVBSksbbGq9gbo7puSGKjEHPuL6jsgHPsRLwPyGRbK681bb3d7aHhKJzus3zmMLuayrhUe",
  "key23": "5PmviV7SKpo2NPxqgn4QPqyfNkskRHUWMp4tQqzmFqLsheUCiehqXxGv7GWo1i89zMDjhiMWuVjxJQPfAsb1CUAT",
  "key24": "3EHd4eoNzaKy1s4fnHLyoftuRDVgETjxfAt2jXZL99tuCtwYzpn5VN3QutRCndKgtZwiftxm2dmdXri5BLksvXX4",
  "key25": "36CxMjxUBQ7pNGwaiFNKWz7aqyzhhmBcJrxLn5xDa3JmUzV5wD2rVuiCPnqqjcC9HxyUYpPXFCbUyL1WnpfFTWHB",
  "key26": "2B1ZnnFw9NZHJbneWB3RddUd9wb2iXUuaoZpgZQ96T3LQ7q3b69PE3qDn4hHht5qbcFc3ZDKyNNLknhH6P8ChvqB",
  "key27": "2iA4B2meCG7AwrgQqS7CcHrgySvh8EB9Qr6nAwk7PW66XYqE4zJ3kefETR7LwLfm81zH6eHbrYJaaY9Zw6eDvyQo",
  "key28": "bVKXvXheGuSiZZ6xKbtfwbtrveighf5qcvxguJqrMwchXP5FUFh6zBgb72pwx6uoV5sWfrmWgZtjv8neec2GuE7",
  "key29": "4jc76Y8jrL1oZt8oKjNqF98jmHM3GYLyBRDqn6JHyTMSAjQUfjB83N7GQCrKmf4ChMUPZfKUKERetdsHXAiYZYsj",
  "key30": "3rZNnuNEzSQFrLd1DN5Rp3RrQaa9fEhwM2i2YKSEPf4ZV3maWiiPLJrM9BFASVm2Bf7jXVKD6BYi1HASTZ1Wnb7P",
  "key31": "26ccijkTUDa8n1NHvQjXauagXG8kqafa9C6c3P3mFBLQTtn2jVMvBmBY7SjNV7mdTFA3j11QN8HRjBMLiMcUyBB9",
  "key32": "2voaW6dwbrNx17GpmUm2jdQaW8uyijsztiVRKjtuF2CR7uQUouNMFVbBhnMBo9F9ZvgBqQi96q3YENVDA22S4tTm",
  "key33": "2o1hdVWa4SGCGo2nV8FiPDL9VzRy4UC3NNb9FtcQvVX3Kizw3JgkHZCDMUptRs8KTcScQuwgfrSpaiSoWLHjysvn",
  "key34": "5trdKeyvxxEci6M43aRJLafJ6HUhvYdgYJYTsmm7TtEBh7UaTJfKm1nvVAbJh4NxzDMohbWZ3EABTKawTapKCtnU",
  "key35": "5ChQnbTpoqURHigbywCtnbiBj2SCcSvVw6z23xVbYWfRUHFwCLcxjUFJ9PQBoQ7ZYRPeTHGPrBpvHANoHztihN4K",
  "key36": "2Ax8CzbSPRsV4qbyL6PVBHdNZFqaSM5RhLMMnYVUvhWzepRSj2nUJQgdifU1mws1ymT3bxR69DMxziQczYfgWZmg",
  "key37": "3G77PL9mUXz7su5SUwDR8RhGQFZSxAptbUZXXEUaHK284ndkE5XvtFgPrx6U7om7VwAQFzUnTqxgVPuvqynmwcK6",
  "key38": "2rr66qmD4Zb6Po9r7y7jcgk9na3kvR7GiCUDx7krkV72SZcG4y7VgA3btyXB3uboBGK581W3E53D1osV814L6jpR",
  "key39": "LkNKBgnm3hLZjGMuE3tzJP4EF8krKkztXDrygxAEhbuELu6SvZqG8Hv7kqzq3LXPe6R29D81N3JTemdBYYzSCyK",
  "key40": "34q1CY5FhdoxzUB6hSCFGB4nQVRe76oR1Tv2C1qZbgyzaaUGHY6N3HaLira45yy6sBB1R74dvaZcSJEeyR4uUWvV",
  "key41": "3jjUwqmkkYkqkXXvTXa8TWUt1m7c7hrzrZGQFbTDBDmnCWfNpMnwYLDjXnANKjEFq41CYRveUZZC9gXmwBUR3wE2",
  "key42": "65eDPJPVbJEM8nJxFVh3DvxcZnKcpXee4SzkpPBFJo6Q4ySr48KQYzvCP724Y4Ay3PSgs8s8uBpsfZtQmwcDxKT6",
  "key43": "2KjmNddJn17Cg7MKr5e59D2LPf1XUagQcGQb6qAEGKezchFd2HNUsUXreRzzmtcemVVeTKeGQMb7jtoy4FX1gqtu",
  "key44": "64sFKm1cpmmtcR9kWwaMPkRwR5pQk7kdYzZ4CrotLdvkCvhet1RwvzApzM3QYCEwffKYodsmF1iDWJFcnzp5Z8op",
  "key45": "2j1uLuMNzhZ6u52HrLi5P8YAXRRusmGUNfCSG52uwgczsKhbmRsMue1NzRtRKtSKvz7WxRD9JRUmWjt6KTHDctvo",
  "key46": "24xM4kqGpNS1cz1sXCXA5C5gukNGeJsLDBJHFtv813uyYzNK7Sh3xNtk2YNLEfuX7QVBYFAN1GvnP1jLZYP8w7TJ",
  "key47": "5nKKAknsFQ7MiAKhgP7GUMpxekaoM9rJejTqvAY3zYDYS4bsdHGd6bG7x5znJk7VHdi3yfL1CSqjb8HHTyt7EBW5",
  "key48": "32WLnXSDgojLUxAC3LUiF7TVREMuBpyzc9Qh24sLvzZvnr7UDkSkkCUZyQVefHtdUohjyzLM5rsytKMyz33vEbUL"
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

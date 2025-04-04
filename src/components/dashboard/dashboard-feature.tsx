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
    "4YFE1c3rehApMFecEPzbNgaG2oioJ5ELVFhey5wt9jjQJo8HccHLYd2zdcZVdyMR6SooAbFg686W1ys6eRTnvCzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6AVWn42yRoV8sCNz31Zqg13idmk7EV5Sky8ArMAEKVLENCV6DNp9rG9FJkNDvaXJaPEnb3AfPWHHuT3TUXKhFHN",
  "key1": "Mj4ZDQAgUWcp5LvYwWsJXz9tLDdDftG3YFq9adTRGEAuxyM6mrCxQjXxdFPfVCzUZXBPTkyYzDq4AKVRRvQ4V9r",
  "key2": "429xFL2m3L4WANqW62xTyLv7DH5DQQ9uUizc142BYSovP3A8RnfxJPp2VHNKDi57ykohffgRcbx5dfK2FWyM2Ywe",
  "key3": "ZJ2eVAyfpUP5PaxoMf2f7hDZxYuMnogPNy9nzN2Qa9Jmw5NcvehvMMiCrdvT8a7LDbwib8sZec3aBmPRRwZCrNx",
  "key4": "3TAXMpiK9iWv4j5XBtWgVrb4kriNciRmYtetjoQe8zk3wzKWrbtLWA7cAH1TpvrHh3u9CB8veJp3Tfc8rkkq4CQj",
  "key5": "28QxWoaedHjQs95yRojU1omMgKihLXRxQTQwREvXWcDca1LQJQmZmyCvtrR842VS6dov3TTsKpVVWFc4FAMX3TKu",
  "key6": "5uqTm6FEnVK4LMyrPQ6sqcLe8mFQkXgmgJXmyvgRRnAZYAnad74rcqtDtciDfsZLqxXtoDwGr57AW4Mu7t4sqLvc",
  "key7": "43Y5aMP4tDTrdaNmP7fw2K5TW2Zu2z1aSQhJ1KxURNLJFQrijCSf52e8M4Y1nF4t4o2GVNSYAWnhjXZgPA8TsFwZ",
  "key8": "3mwXynVSjQiCDCviXZvx4iozhieMabFknTfi5Ar9vSPTYcebb9zX5hzkzg8bPcffJ9FnkiSydDUrGGDKLTNUhppL",
  "key9": "4xGCcHMyPSsaM2P15B2qBfKtkpgLUqfUoKrT5U1UKQeFWS6G5aMKcqUj3wwRBKFcaTnwuAWL7wLeuF2JQ5GdovXM",
  "key10": "48yiCeLv4XRgE4QQYP3aH4UPQakQjAb4M4aNzVaXASBeBGLY2e1vVR8nKwUsdpmQUFdhBc4wGjhvVCfw5oUkRoxe",
  "key11": "5nVA5QRuyZaXE5rWWjND8YJVt43WAbfaCgiA8eReUxYQPUPEZ7MtdMyyHvQFfMNknppnRNpo4EW86ayUDaiR2TDq",
  "key12": "4fuWfXEHCR9ZxsY31a3fxpcyESodNb24EkP62BCToNh1WkBmZDo27KZtjKftoiP75nxE1YS4xmmkH3U7ZDqBJpat",
  "key13": "2yY6osdDbgnvqB7coMc7qA8Z1w9DPAij1h7um58YQFnhXJd9YEGAkD2gNYvFMTUsMW2dyiPC7QzmC1ugxF8sKReA",
  "key14": "4v1914n4kLenyydTWJtqDUX5xEwwJt9pbMgKfv5ueinEZhivGEMxvYcaiFJEHYGXkdL3QezouNdyzvaQNBSzjHZN",
  "key15": "4kQPnDskiBPZHHm2jeViiVjL2zDvSATZmWMYdmjgJfrCUXDY9SRHVVAyKuAhoyCc1opzFb1SbLsTLzF7gKDqBbH",
  "key16": "4oYPccEyCAJG5sVX7QzYuNLRWcBJu1fxArDTnLT2zaeaadgxffqbVcYxKsoFSY6MjAtj7cgQAgXrQyZ2hLMnCvXy",
  "key17": "3DT6ajopVSGmwQoynpLKccHQdjcn7ssvpoqhswG2UyiFPuT2amd2QJLkjWKszrCGPWidEng88aTvBHa6w6qmLK5",
  "key18": "5LBBsWNQ9d1nCrYuxEkbRzKymZGV4Lt9QPcaDiGpjBVMzyTTQrSD1mnnj6bRMgymMzJ2SgBASoTwJeKZtGYnitBk",
  "key19": "4r2s2D7JPnUrmXhiQqzRYuVfgJuUeL2bgeUd6dxpfEV1835sftfCWvGtSwfbRsZ6JsNFr1RCjMEkjRpxTH1z8LaM",
  "key20": "25rNQ4w9EFy5U8Xp8pBhBJxBcZBGM53YhVyuKnfnnS8YJVgCzznhkCPXX2FGantRWEzGwVppRDbe8zQCt4CJ8X9a",
  "key21": "6wjYoVVMi6Mvap9u7j77w9irsSabBGTmsK1MkrUejQKTYtcMPB8SHYGryXPXhhFsbUrS6GNXsbDRGPGqoykRxmu",
  "key22": "4i7abR1DEknhyDrtcLMgj5yHitunb1thJr2PGRurPhZUwpGkd4xj5ggHgzcJxtC9e5CpLUkA3yTga488gpK2ZzGs",
  "key23": "3jjjPQYSzz5MsUiaDJruJHskU9EPzxfrKzHFDnJqa5TcxN6QHxn7QFpYrzbdRngzNxuJgqpuD9ByNKNMF8cQT6cn",
  "key24": "6GKSThosi2vodDDFRMWBBN2LTcDeKygkDmXs1gAGsxg3RRwkwhmd8fnJ5LTdmxpPhBrMSsN1ed3zUvY6R4iFfpv",
  "key25": "GaQCo4JM5uGzxZ5EYFWMMem5wXaqtXQWp5RCNrvEMgChAtVuhuzDzHTmstkHXjonkLPHCD785DXR8bZKBmRuMaQ",
  "key26": "4zBtyPgKJbeoGn1PCxCsPb1dpeg7EjFwnqpDMZSLZLfRCN2meQwive4UATsc3Q1ucsmydMGBhYrXVjKGivbE6Xdv",
  "key27": "6724K3aRJbiyth2a6yrhmXt4iptjNtjTbbPnic6Hf2hc6XdMmrkH9JKdQUqndjxoyCpV7AvNAb6tz4JtXE1wVAZ2",
  "key28": "GSJYWeWzxp2te2T6exzWVjwmXRLxaSKRGRTVdmsW9jMiieSQ29gzFTpWndQx1AmwJ8QXJnPpCQV4SHzkUifepBX",
  "key29": "4j1o9wUTpSDTmw1CRnrzr82bKvM24Lnm4yP2c6D7x6sX67r1sRb6NagF8cPEF2psyk7p5eTJXkP6BB1jHCdSP1GV",
  "key30": "4dAvvwivHZgJc28aw3ht5HQ8EpAAT4SQFamuYGK7LVU9ocPZsWhmhyA4NgSwMkVFdvtSx4Yd7PZAWJKAsWJY8rm8",
  "key31": "TNHh9QDwAboHjU1g65cSRJdnLUz6HH5FGdHHfmm31BqNUnQ29cBFU1vY3GsAnzdZMLMZ2ScXT6Vhv1pasPX3paT",
  "key32": "2PXn4VDyXyKnpfohC3yMiDFMXzHkKLgcZqD4aYTTXvKLKXGgv9VJcZtiEFy8j7mmqBYm5mdGJXMxdYVT8D6AvmLZ",
  "key33": "3g1mW5Gw64PBf5opHAySe45Mr6ha6BtqpretGgnA4hj9nwd1neCjUJ5aBT8LXnoy19Ygpu4Xinu3h26u4sgmhNxv"
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

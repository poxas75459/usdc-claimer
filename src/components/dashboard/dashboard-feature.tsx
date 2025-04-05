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
    "2ma8aXHPon6o7djMSosT5G5TQfPTp1EUUh577a4ZGj7B4ZsbYRvtV2gEkTpKYcA4dHAqTjtucHGLjpGwqQiVQRCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrpCKn9ywuaTY3zxRzXzBy1f2AWpaaa9HgjSfX4UavmK6ABKYwkVwpS7TABWvj8vEZYmn1vWedGZEtVbn2pRCz4",
  "key1": "aC3mGJJKmMVQynPqKwPDJpeeBpF64UYLKF7B3BfvdaneyF8GAPtUxwYaCG7TcvwvHitBkmaiQK9z1XBeDyrfPsy",
  "key2": "3Dh4Pq7jy6GoqkknotrBETaNxiBf678KteZLoDGwy7z1aU1RgaXHgD4r1B1MMJAkS4HBGzMpLsoGVW3b7Zv7R6ue",
  "key3": "33QoyKEEnvosV6swCYTBiUnuq5aTcSAr6CdS2NpJC3Lex1X8SdQNaYaW7aeXwckoHcpBNrWTgQyy2ndLR44A9NQ9",
  "key4": "3U2VcgsBvmPHqgkzMmeJmWB7DPfqdtgtoEXY8bUugeZg8drWgF6JuCe3uhPU4Ry11Lr6BihoaCi8nEqQQwmpchr7",
  "key5": "5R8eoe52WyEm9EQH1xkNGA4uuLXcD2bh2YXdfY1TNHCztWbeMeUgchvqnho9mbzKjyLLqghhXRedxpdbH2sKFz3",
  "key6": "3sNJEaN17KbEHZ5M75cbWJCHh4gm2ceMgNXpbKpXNForLfhrSngEHUeQ7KY1ywHYAof58k7BDBdXtM7Giyrgy7ig",
  "key7": "KbUvWnGHHjHLu4zxT9MyiMJZc3DGEArhp1anoyLJiAmCMKLWuPCsQXxbyuwvzqpPxNBseZhynHfvhsUCBKq8vEh",
  "key8": "3QzLLs9u4MSGTTiwrw2WzXCoYz69tfqJJnhQHjqHXT7FLraVtsyWtCod9Fq5gGy3Vc5icaEyv9qftEKRroBzBZZS",
  "key9": "3dy6eKh2GZt1WJywzZ7Qivbp7DxZgc9oBXkgAH6AwHuqjveJ4nnfJTeVrpSrnxBPQSpDakquBWxy3REaxQQ8hoPe",
  "key10": "53wZyfZdnzjBfdcULJbbFjyXti3sFGnh3FKU6GGMAK4ADtkYqkkT9EJReXDJhXWCRowEETeFP1gtABBkpkHBuUfc",
  "key11": "2vqZ6n3uP317Lyw5mMXAr9LdkLuvq2Z8H9bepn2PmDQUf76syEwS1RjYHXTMeS1zvpf2itEbEuQND8RKoQq9UtEm",
  "key12": "33U4xb7DWYciPtwV5aQvgDUdu9PPGphhsHyFv5TitnQRSjQhM4SdKLTQsAvLAGYy4rEj6FiJsbV4Zo5csKf19SUv",
  "key13": "5KL9bmoUgKqGnvchNUrGFeRmgsyuWMHUyTcKStKsLCXFuL4TLmeFtaWVDQpi3oLv93goKPrg29SP73RZ3CRRy4My",
  "key14": "4bQGFnnmNukzyXkJSUecJUriZotWnyJ2rBH2tqc9YTnaPVgfT6BvwP2vBV5prN2zAkbq9tDryMvmzZGADM65kyTv",
  "key15": "3s3dHXiPcvvstdJS42qn2WLieri7WzNhBZ23oZMZpWcjAGhuqWETS57NmeygXHJfdHLREXZ3MCTVKkCBzGbgfRKu",
  "key16": "48ayyhzJHvXXxinUaBXKjHaB4TWfEiMzW55z17BrtCgjWhkzXuHJWLMEKcZwP4fBu8XH23T6r3vWfp4qeSKiYzSb",
  "key17": "54Ju2U9JGgJHUEozsxG7tC96Ckuk5sbCudkbQLLZK6ujsBx1gTU2uUsWcPqDscs1L8VwNqVrMRHtcPr36JXSbCgu",
  "key18": "3R45koQohxdwNAfKsyg4wrfYD2vWuQDuQdN1Z75LPL6Q5Ufw4w82igokB6i8XjJ3aKhN1npkJq24WD5mx1opvrb9",
  "key19": "5eGzmqX7CgaDF11jBUEAjAHizMmWGVaKcP8shQFgQyRN5tnnw9NkmuzMjk8P9tpRqtiofacL3i3x635iKWLf79FZ",
  "key20": "3jAaK5V6wefALehyR1mRRD9b7AXXYKM9xytf1zbAFa7RDkhT6tL9i4tSLDNRvcEMgrpJN1wjYbaaj7xXqbEcjmwC",
  "key21": "7kPSrRcBx1itwfRPt7qUCiNyfCvptmNsp5WZhDMpVN7U8QzABDAbgyAeRb4cibyx6T6jou93LTCtzzB1fhoZuZC",
  "key22": "58gZGfeLL9L3CiWb3ZzKPFXBqSdX7EvQLPfnWJYoKPRKy5jCXhPyRu5P7mEp6ybTjw8ehvoiyjLzVz4ZPQyKDCza",
  "key23": "4JB5JkpKmWbZz7LLNS73L5e35RN1UxujoU425u2zQLCp6VexTUQv6ihu4PvY62mYnTdpBynqAPxWNWTN3Y8rauFw",
  "key24": "4xbs8GvYZyLCsFYfLPh7oMURP2b4KE4v82AfVgkN4sLTrBC26AKQfC9uKLquxXstRvMa8yvCc6E3s4Lwma7aiuy2",
  "key25": "4mf3Hw4eT3KRozpcFbJa8vY9epFQUaUxJ6XrEN5wpcUFzbU8MHCiHpNJ4dcNwEzUZmZQFktVcSnBwB6TfmMq17bo",
  "key26": "2GLpQvJHf9QH6dKwLFUPymvHHE7jMgT87BmbDsevhp5u5LvzF1J5XXp6oSnRbDNDKSygNdjsXTURuGcF6nuzfnGH",
  "key27": "25qRveARDDja5CEi6VEBKohDqDg6ZZ6Q4tSEYz1nZ5HN2PifVVV4US1WpXUSKptF9aYvNVtUu97JHyQ69UezpYnY",
  "key28": "3vFVcYZy9Nrr8oXnFh3PeAaSwHJGBxQZ9oT1LN8zXP6RKP1vPDjnE3Piz5q9BVJxr6Sq8jiCCdq23rVk6vXqXzbG",
  "key29": "46ubJxPT7Ma7uAcE79kVVvakyU9fbTocfCpGUZDn9dHaGaCj696tAeL7nxZmyzgkb2LGkA57aWEdivEVZ5pFiQ2n",
  "key30": "22qpYjxfdmsdo4biKtk8n6MYZS7LAKKeWv1CDaB5sJNA3MdNU4yFCKTNWvQ9qaQYNuN2iRUrgjoMMhUNXV94HQTA",
  "key31": "XUsybCMEQMgLo8qUsG5vwgQe6yGqoYkc2W76hLHDNdRVS8gmMQu8DJbJjEVJLdarggSd32LGYKuwjrBFKkBBBwD",
  "key32": "2XQhev8wxsk5PZgBHUwgb7RcDEFxPrFbmLPrk1aoqHXUrjRw5mNTv7JnBk96agSKi2ck6bAPq3B2BcSebZnS8efX",
  "key33": "eSrZxQnUYLsUB3G86xYNHgzT5RZv9i72zztz3EZENRWAenDjwgwdeYBWhAYXE6utLJbaFHG8A1vofgS8sN511pF",
  "key34": "3vj37CGo9tdKfNGBUn4dDaw7qmTtSLuiGYkhgUfRa4vEaiAUWJhFR27QWBxZNNtz4NDghg1XthFkf9Jq4RgdXqCR",
  "key35": "47t92jmbztpEAnxQMEtPy7YKuMAxReZNVvCX65RcshHKKAyj7bka2HpxpHXPBLCTkeBcUSyGUJXNV1d96NhSAm27"
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

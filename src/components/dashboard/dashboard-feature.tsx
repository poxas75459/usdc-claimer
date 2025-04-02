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
    "3e6BvBvKHMLYSvJL5xGJz2WoSbcnwccJFiKoL4ugvwERvzteaaN3QkVRNZaojfBUF5YLx8TsZ9hKE2wQWXXXuFDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQSTDHenLw9kxj46ZFAadHpfWAAk6vUMBfAYZ4nVNx81WJ63yv8p7DzcbAW9pPFhB4YfT6MW25FwpEjmF6UgT3b",
  "key1": "45XnmNQec8KaXmSE1s2zvAN7aG7TqVTFaaQkLC6on6EYmMaLDdBjxh8VPXkEeZ1QoUk6xCZpeTvoX5gYaxKiVzWD",
  "key2": "2ihZmbamAPSwBxdoDTce8yd9CStqNcaJJNnu4F2e7Nu5cw9XyTaA44d3Zd1QRVgD1CUjhLpLS9y7gZZJ9p4SH6h5",
  "key3": "4ewQwe1ofmbEwbq28sEWDHpkAivUUBous4WKKvgD8LQvUEcJG4EzsbY4yaBKn13qzahdvfqxz1kcUPD9jqHe1guD",
  "key4": "4SfxYLaCArcFqzv18SrW8tdAZhJreq3CH24L5JnbSfdTJqMcSsLtWHH6Q1SWNmrYiMZ8NxfRyfrPqmQEWeX7LRpW",
  "key5": "2tubD8efVqq4wNzvzqCvCHgtihFjRvLAhrVG6qPKZp9VN6XUhCsfCkWQ8TPL4PYXKVjCFDPArTTX4GsF3aYJiLVq",
  "key6": "3fDTjREESfgd2hzzXp5RnTcxqL2WxtAM3KkpbmhynxP1UkxAHxGo41rxweGz9nbcutj2NHdfVCpY2ivmB4K2Jc9A",
  "key7": "5xDb1J9Hxvg3is72jgQJxaG6c2eJgDzVrLviTGs5eUy25Zs1VVeKooAVr9TuSS48hDWJNN3AYHYpiPRxLToHB9vH",
  "key8": "gVQZtTjEVFpDSpSq25mUyrqmyv1T9qSkhdQ5Cb5gqYrFtjs3MGDGtvUGZB66udWsbmTKDLeEZcLC9cNgiBc7bob",
  "key9": "2kcZKV79RtbAzH8Q6WaW7FJBXwcDS3CaKY15YTSE6DiyiVt2nn89Fwzi44m347zxf79qtaNbYjVb8DhVm119poN8",
  "key10": "GSKJwxEH3YyC2LTGxyqrpSouQeB2P3xeb4GSPS2SURQnmWiFFykkcKGKnhZUnoqEJZU22oMNpxLmpsGEosM1m1v",
  "key11": "3kNo2qrMRzRNGN8gkEDdpdGYeDd4ygsYFyM44KkEQz5G5ZtByCF96BdeG4H4pBJnWN9q94x9BgEabYCtivLU4741",
  "key12": "GNpFvuZMNVrEJsYaqVVPgNxJsN2131b3eia8V2PE915yQnCe83UpRGeyqwG69yCiWRjnXME1cjbDSeN5NYeHUxz",
  "key13": "AYW8vsBaosGrzKcY1SXnD4eRgwrTEapKSvpqz4DpMnjvvUTZJnmdMGtb5W4KWg2FYpspL1K6NvmaTU9JpDxDEvx",
  "key14": "3Y85LChdbPFiTPz9v1ako9XL5eaef7ZkUZMepfummVgZDAB6zKGCxwng1hLX3BwLpa1uvSsnMEXAg4A1KKkbUKPo",
  "key15": "2WRZ53axDnYoaBaP7MvfeD2etxcb2z7nzmFn9Hda4jBTMLVUyYN2iotnZXpkegWSfbrAUeQUWc75cimbpEoyZkVD",
  "key16": "5Y6uuRHtb2ynS4c8ir1va1TEMahVVycccgbHeZHk8haEm5GfmXpyyzMcPiTiNBmjbAiuFohDH356gPyrJSTzZksZ",
  "key17": "22xAxi4CSKaufdetk1ditKdiLSsbtV1tB4aNvX8bTfDrDJWbhCdJTLGNXzKJRRFtzBDJeznhc9Ntwgry5ksNkfEj",
  "key18": "29RV1aS2bYXHknMYrT2QdmHVzpyY4tAyVb9DaxCZeJgSxF9Pp6nKKD1qVhp7LNHeqsfPJQDC6zu7oAf7fiZgG9Rx",
  "key19": "34xq5nkACDEvbhMxEfzoHJaU2SPWZiCnh56tk6iKcE9wmiKu7L8Wq7YqMYAQN5MHnPYD8EccwtmsJ49ts5z7JMAr",
  "key20": "3z1KViBueC1SHfqg6a5GqGPQktzFdLa6EyvZMisV85cTR1iVCaf1LcKQP4DufkBN1oJjrD6KBHzqVH6txU7Lmrti",
  "key21": "3A56ueE3v2dSjMgdDYVcfYs9wBvw7Nq23dKycn2fFqH4hNerqWNF7t9BNemTemg1hSo27esqjRmhojnPWe9VUvx3",
  "key22": "2FcEA8v1zLS2QpNwQdTBAoqcjjYimaEmTZSzMhCRBcFv6SUxiDpKiv4qMwqpY3L1gDnEZGaj2Gzjs7Wf7p2wvvXa",
  "key23": "5SYrgXSKQai2ojA9MzCaohaqXqQ59yqM1ySWa9zn6JbqcW4gh5HYVdeKwMJQkQfQGMfC9iycWHygKBMd7YKoqbRv",
  "key24": "2TYQHdgPqFb9gbYtKiiT1VUTmFp35DLTumePYaw6of4Yrs5XjD5DgqkXnEhmjeswV9acLnc4C3enAuQvcuWSG4LX",
  "key25": "3ktUGxwv6n1116mehY7QvFFnQjtfEUvbEXoRdmKP9kgfSCp1vQy9KoHaBMrD6eYeBnMPryLcMJSAvLRv6dM2f2bC",
  "key26": "M4DCBmKVQLPC1oFFmrjMBDKtQDH3MRMM2FYCGR62yHifCbNKMxHziKpa5GekqHva5cMqzgrpeaGLk3ifcA5wL5W",
  "key27": "2uFUeKiJEdeX558fdzqKMw1eTMWqfNnTBrn2NngBS8XoXiZtoZgtNJw8ieQBFy3W7foUjNA3C5MCgfcxew8o7Nbo",
  "key28": "ryZ8DwmhgHGL5fTh1MJBpgEdorGvRNDrcNbam68iDTrn1pZYy56Qw6KVzFm2BPdry8mEnVG9X6guPXutY6U9ZgC",
  "key29": "37GKQx1o1pJ5uEKxanzuvDMoSbfq6MbgUrAUYvMUrEkmhEb8AHQTEjqEDgjnZG6b1A8QSbQBRoc3ZF9VLiWoS5o5",
  "key30": "4LGWfb6RjGHMGdbRJQhjukhccRYc6pyvpVY6optEDef1bvvwVjUpJP4Xan2NskhSmBZBSG1gw9gpQsczht5XqP59",
  "key31": "5MRHQGuHDoZaYFSuej42sZP5zkoFdk6sbRkNX7BihXyjAtDef4EsDUYjDkKvyjVpWC6NEpNYYs9hp8XuvRcbyNAQ",
  "key32": "5XV11DzcAz4HT9DiWZavaZNpXooEtRjeeV7RKd14hpH8gEnGJahSbhagxuUknPvGYEaazXpcwAq8x56j2FfhYKW8",
  "key33": "MQkgcXjkgNmYJzYEZej4gmQe9BJtaDJiWtvkY3a6q2FTytqFSxuZZxFEg1w6PLN9Gkv4Br6uynk1AGKP7yi98wj",
  "key34": "aqCAkGemjtvmReBCytQ6JE3dRX6JoGjjhXAejskDs7sHPvoqDm5fN89J1uJKy9BJFLbKPaCAXrTyeazwTApiT8Q",
  "key35": "2e44srG4eH3U7J5Se3h4kYSpVH7rcaRKrmfSCASZoJ2k3nckDedKLft7hAS2pmQFasXxiTGPXqZvjfVrWg9QyqZR",
  "key36": "5eLM3sotsTUqY7WFXyFb1Q92gYYGFS7r5ZfkVp2aCyL1LUUJmKaR1nH9S11oVjkVjjzCrvZzy9ee4xbzavHj47bZ",
  "key37": "3jnTy2qgXsQZBantR8sRaQShcYkEDvo4zBU2GLoNgy6zFRQ1TUgcbA2j8LKiCKgAGKKzsuXA36vgsVeQGQgnfSqj"
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

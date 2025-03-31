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
    "KCceExvEpykRhnR6ng8DZjFWdc7FisWcoAzzZWdtUh2tcxv8VybJa3WzcdQpjgC3uMpCRoj21Cb51eQdemZR8cd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kh4WWDH2s1FyARbnAxsZL8SSNGwjSCuzyGWJvo6LxftR6zN9imjmavm9QiJNSSkmFgeCHgLDXh1iQrytkzKg3ra",
  "key1": "3okTyXX3LPBcvrRE2whcq1hQFoB8zshrC46LBUKhtd55P4yoik1EmecaiCGsyXpkLtUxzMfdwq8vwenCgFx1WDjq",
  "key2": "5UN82y2ZVXa4f32itxr7BcZZZTYrN5TzfKNu7hv34tp9YVu8gjbqAeVKzeARA2RG5TZ4oCxDrNZKuiVKBDWGBJwg",
  "key3": "2wp4oVFLowBF4vyYmghHQJWxHaLYjr84qgoxiyVayB75HKqFwqxpyFhinyQZm6TGVoNYTKgFC2wVqT6NAHCCPJHP",
  "key4": "2ZmsmRvJ5UJPUpquGwQcpxW4PETRAJipLWvjRNMEk2oSdKQscBHkieUYd5UQfQtdMbdYN9jVHkAHHy1Ei7Ya294R",
  "key5": "4kc3eYV3v9ynZHmP9MveWSxdhbGN2d7erPyXX6ujQ7f5cZWAJYKv2xg6rnWJLgHza7e81fBWchgNqadSqtdDFssf",
  "key6": "447F2nwmquYX4Zq3dF7s58gSXtk6qy65oxPUcatEnRGi5ePNWhGQJHnKKpsi3LaDWnUGGuhNo5wLfqzN4wyWHgRJ",
  "key7": "3mjfSodC2CvPE6oS8vgq5NZEDeQoZxfdasaUjwLymm21n2BWi7hQ6MM1DNFP7wNVYnVedag69SRWTCCQghBqGVdf",
  "key8": "5mpbMYqnxUNUJ8mavuh65oh5fTBsaJLGspXBTPe2Dj713RomGyo8ePMTWTfYCVVaRMoPD8Ux89uAE5Vjr6jjq46K",
  "key9": "2wMX7pAdrt2jL5367XN86ie4S8iYXX8tCd8yJUjs6Vu4JTCbDdXTxoD4CLCZJizMvJPTsG1JFtnEU8SHRrHy3DSC",
  "key10": "2QawhY2qRgYb2qGn7u9dm5CRhw1b3VN2jFQBp3ZPBsxtoftyVoFGGYuD5P3XsszKJYzpVJv1pEmLZHkh6DBc8Vvo",
  "key11": "Hamf8MFBopRZuY4rJ72vzGY9DZMEMBkgameqW6srRpJZoai1SMmWEjFPYqrFjE2u13Ln9Bb6TvUgWo4nqRwacHw",
  "key12": "2EEXB7tKbCB3eMi6tC2MjrxYeAfxh8ZwDZsDcsfZaiSwbXCSTb2vJPqEenpySpVq3QzY47taKt5D5XANRyUxV19o",
  "key13": "2eXH9cVTXubVgkxU2QuiZ3mnfng7gzeidhhR4NamRbHmWsM5VziYv5efRMQYdhRYY1wGm7B7i3ajmhxJ5RoY2Rkm",
  "key14": "4zQjRuhhvCFtMvF5i8Je6oCPSMAKiUWgoo6ZyfdqYRGwjUsuho2KTirKQM8vqjJWTQQqLTyG9k9M7srK3LxVQ5LS",
  "key15": "2Bz6evfdkp65hm27qAL1wWq69nTSVandZPYqJcB5zbEy1DKMxaeipzbHQXecf4CYWYeteuqtNc1gQfnv5wThq8my",
  "key16": "2sJpZvN1Dz96qYAjWU4sx5SVEYdYZ2EmU3fbbfarCwmZ21PbowNqE3x7WzAbTNC2ZDg3YPb7KMbgW9Ge3LTcHmv4",
  "key17": "QadfrjJZzVSSe6c5RwttgWBpQ8Lx4Vc7zFkadH37gXFqAvgg7mH62ZGYYrFShs6sFLthrBdpnXMqvUXZv1jx11F",
  "key18": "5BWaUW2pPB5JfGLEn28d2CLkmucmqxvPbdaNBx99btgT3NXjg9hPHJ1WwjtuMmKZuWbV9jj1LmehbZcg2meDvN61",
  "key19": "3TaY5sVdHfV9L7pyqoR4kKMwzVdpXrXeCmekYmncigMQux885rnkynJdcumdY75vzmo6dKB9gAhySyqXkJjjMBa1",
  "key20": "24swfttuc62rZZKosqszJ6LL2W5xjrZXP8eZLFejEtmg93WrbBzswNvx2RNrXgevGfzMkNtG5hoe4EVLVc32xpfZ",
  "key21": "3fHxMgXTDtvs1aYTHSvZ65LPmeKPPfDHeB5F9bXBx9G6qfho4wG1Lbykcnsv2dmPZYvbCgTuxosEkQyWi9zbfq5P",
  "key22": "25S5kKeoZnBsVwsTxt2jRYq9RCXj7U7A9dyZ4t7UMpq4HtMspne6K8shgyGkNYdEjK7soqFeZj5rJLd99k44AjEr",
  "key23": "2oosZxqh2mkKWoa3oYQzHxcTHedziJWiw3i3eRmBbNzSBTrXQdA2GYFc2Y6vpkZyXiUX46SN8Z5fV6C5icQRxX9S",
  "key24": "4sHjCTkJ1Bpfosa3tCBwSNb6cTN6jCnbaYtEZfTvxwHyjYV1QmKPSvck8pLZ1QsRWnw2bg7jNTDKsNsZDtgu7UVk",
  "key25": "5AFmWgDFBxsiQ49enErYBkv6otxgguBAUsLrm7NHTbKUsVs3uRrMF9hYG9r4QuRkdTYbDHg5pnQS1mL9r3dAjjyq",
  "key26": "2VLYzEhjc2MJPYNkqVY6X8t6bVpZaqEAP2rpT4d7rL9e7rQaVafxyKDs9XiNMNrwriuDjuJZG2cQHDtL9P2mAAoy",
  "key27": "3Ke4nRCcdHe9DBLWsZYQAiMrvZFYkxYTd6bH4a1mjBYfxNVcs7vsVX3YLdyVJpqqWVN71bQcqsD9oc2hZ6ftegYp",
  "key28": "5n6eQoPSYvjBvpa25UhhiS9bArKEbThP3d5z3fjkfZNbgPMddgfwHWLtJJENVx6pRKe6WN4xeva1aSZ37XxhygFu",
  "key29": "4zsdTmEqybgZ5ECjgztjBsRjPBzMti5ThWTXUgFYJL4hHfG63h1zy5Kufp55WmCdZHBB4Ng8ufV4pBygYMSnBhjo",
  "key30": "5nAEQkZLUDaJykTmAqQXWFv6m5veP5kM5EQGoL1BBxRXGxUE62Wa2qiV9ErNYredJSaRraY7vKrbZKKWACbGBM2f",
  "key31": "4p1VKBxHZwzSyBNyxaoMy2uHzNrREmZfajAC4GkQXsGZ8YEx12jRzDRwcKxGidXWS1a35VbxmcjCp84QLCiu9DnA",
  "key32": "kcKVjgN5LmzVJY7zgSAXnxAJ9wu8oarvtt94pyALfJ9n1LHAnmx7U8vUVyfP8K1GAcoYNJUJ6yAHbHm86HL2mPK",
  "key33": "2WRM57t5ShbFk6Qxf24Q7YNoWmVdX2oRKvUnzL37ox8JSN9okFjWeBQwVYhqFX2joRiVxhkcWFg4wo3XTxtEyvRV",
  "key34": "4sm5CKTmrnoCaFVMw4ycPD6LQNF8GkAWM5EtwMMwwi3ayFKjLjcKt7sES5oimCNVfbJsKbfScpARYnBPWBRa1zuQ",
  "key35": "5jwrmaq6agvgDuWLawara4wHGzPyFNFiT4mWBzDkGbvhskGKjjdKf14nnPGjqNhPPX8nEt4XAjb3kWf8qn6pPQD1",
  "key36": "5eir6VJYVqLLsEZL2xtLfm4jfLPA1pMLaVSS5sqLisxfwvsUyVqjVh8NENiMEztN58ec99Kpcw5zWiQNJF4EY65p"
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

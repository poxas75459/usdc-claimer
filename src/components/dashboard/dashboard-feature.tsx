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
    "5nXJbrANF2AAvkTrnMogd4tzaA2VkGukRhixSMo1czWTaD77zSMwEbEuPzUaFmrcuVTn3vRt32fr3BzG8jFuj4it"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r4nwdSBBkVaUvs5ccvWHybTDLQBHk8gJU3Cc3kA4kj13DVPNtexasD9Az1GPNUhdUH7VthXHxkjBPxhELr468mi",
  "key1": "KH2bLuhTBhqaUXz4fHVFEGedqBuWEZrTfUmTcWZAQ9rXNdChAPGgT5cFeLDtDX6sxfZnk5QXXKFZ6eFeSkFDEZB",
  "key2": "3MSWWHadYu2or3qqZNtxVjV1P2gS1PfEbokfJhhj2CVB1MQfAsXeVA5Yu9abbXucvq62XEsQSA8JBMw6DRZHa8Nn",
  "key3": "gfEHwnxwHbELJY6pmSncbeXNnkMHsjjKftsWvJny5cN5BdQHoct8gYAJFbtxomQKppGz85iRNjQhFjDXvaTt52q",
  "key4": "uzp9WXN2HnVReXEZWQjDKqz4ZzihLpzhFToYCG4datQidG6GbUSyn7jHcVMBvb3QD2NmFexnxcCteAaEsw5K2op",
  "key5": "WLbNryP2xJ232B5AnT4V1UGk9gAEopAwN9hpkWiSfn6Dha7V4KawVPb9HtwFmPvH2ax3UidXD5NL76r3uVuBZyu",
  "key6": "2APoVjoKvaVCBdxFFRjJfHf7Dc1W5WhjZLxk7UDgiqv3VDC3GEXb5uZjNxVEaq9TVVxmfMCVGWLpQMaNcruaK2ig",
  "key7": "24SxrXfgbrUqcrv7eCJCvGBbYJn2twW5Y5c1gMmCFDSyu7hwo4JKpmu9SwfLzmxPXw1SyYbNBUMRdRnUVkLBuCZ3",
  "key8": "3kD14vZXh4sHCyBZr6HvGf2kayZr7AHb6BxYCnsv2KyoQQabxgaMYnkeTSkZrP6KxHhmqmznVpRhbKsB8VATbogk",
  "key9": "2L4WRbjWQC2Y7s2p99xCJG1GDYjnifa9GuAYezpya67rpKrqYEzz9pFxLhP7H9LhWeanUbgptzwovGjyC2sYcecC",
  "key10": "2wm82ZHdUEWPVr1nm1RdJgERV9mGFLnaCrM6vX8GxJY3ejhTSwoixQC4t2P1gftZgmaowEJjsQXBPjQdTNKYXnAZ",
  "key11": "4eusPLQyTPuaGCoBaLFqEhQxPXyg7KhFYxxSSnNt1HERZ6EqB586D4BjV2FsjpwCYw5CENK3uKasNcSrMWTBShR3",
  "key12": "3PQ7VNW9MzKRKKPHA4qq5hS3cCCgvkRfR2kSLCqFDUHqoLbuRiL8WNB9qxEXyuPhVsrZcxJp382VzNQFDnK3PuYZ",
  "key13": "58WvK7qVgzvstrjgxnJEoujGi9QEPF6Gabp7phWFwsB3Lrw25s9iTzyRUV1MspwMvC6PLdWzdbTSBfiLa5mRcYfi",
  "key14": "2u72RymX6c2YuWgabwLmqj2PNZX937jLYcwKgMSg36Rb1fxcU1QYiEYfdoYwtDNNG5AjnhGKx6CZUwNLwT4B9qhQ",
  "key15": "XtvzNWSRbbFrsChuYL26d9Jnc7fphdHh76XP7yoemtuy1LN9e5WkYzidGQDh5z2aETvmbykKJfWpGDGfcgV9osg",
  "key16": "64ffEZgmyDfcQQM2nqYHQbbaAf9TY94RutTQRo3jFRVih4bgzhywnPpgkWcX3aUXbBsQcgekGSy84Hyyu4G888n8",
  "key17": "2GKgDkZsJHCzMkF78iiQMbaoFF9mfhnAQJtNKA9SM4mvyLkt5K1yBeF72oHCfVfFfSzK1x1yKCyLPEeGvUvEhJgc",
  "key18": "3vBPb31Wqk9Hjkpoi4pV6ana11yXycUSNLFjXhWizHk1k6eTY3AyXnsGTF9wcSCnDBDULuKs5QVxj4ffSzRJnQ15",
  "key19": "4Z7P99mxXFVGfneRVk4AJsHoMaztXg9EMvoPWZ8V2KJ76QnHkiz9us6ybWEn71bYoFtB3Dzd7c3YMsJn4DTxaaBr",
  "key20": "3RFPgv8eVz53L8mPEoK3CWfPsnzmCcFaV9vBhK8CBQDomuFg28wxrSDRbxjbbeDVUKqerjMxmCok1xvE9jVqoFeq",
  "key21": "2AFnkRZs6qAzNMUo6MuScAU6g5UFBuaTGgwEzVgbThejCWb3Hqst79huk68xkFVFjKWWG1yhpJPUCPvndvXsptFV",
  "key22": "2raJRXmds8ZK8RSyFtmwirVPTpUiHHGCDEU84tukBfspa7F9bmT35PvC3rBNhw346Y6oJh2Y4EAEU7JGmymuTAjg",
  "key23": "5ioCv1saTQV8LpurUSQDLD3ovQizc48DVhNYGhdwEDqW9maujBuJhZWnDFGMicqDEMvE9rnCHxTpc9SWkrhh7qUg",
  "key24": "5VvMEvvVmYXfZUu4BFZ5HpqSk6RrPbonMNixsY48zjkqmJDTowUyGErpxZ5AtyKoTHSamQnWm8RSUbX4Az7XZvon",
  "key25": "5aeFXwWVYrnbGiuSfMmurSTU5BxwYCzUCpjKZYFQZaVyqpX6FKGnob8FUx3m3Z79Z1CLyMHTWz4BoJmUMoUDKSbq",
  "key26": "5fRmmcoLV9qshnrcYEXGKyaehmukcXuiUSUeir9Juz7PeeQ6rBrehb6WYdeG7dabf9QckFk9PPM5Be6Ln6bvPKDj",
  "key27": "51zdpkqCcVg48mBXiX86246wEJkv4Y5R62enZyLmqkoR5aBiTguaqyPwv49UvwnhW7zZ1KMNiqGsjaK5thh1Fr8N",
  "key28": "3X2Y9uMFBuhHjFfmxXhGWnNYEuQEPVcZWdSjcYtLo7AniPQ4hMSrzTQ9vEo4XQGd9SBhfEkxNVckENZexK94YG4C",
  "key29": "xaKRemH3XkNtcgChmr42PuGQeDjs5kTujFuiQSX69YdU6af2naQVxW5iDFNL4HRFGCPnKKsniA6a6H2tZK2eyw4",
  "key30": "5oF9Qe9hF5ChHcDC4M57u3BXdsndNyy6L1CZgE5YoryEFSdCpYUuaS6mqy4xbcgxou7QcLqZUV4dM2ZysWgxANXR",
  "key31": "2eSxMYdWAeL72egsyzuaNoNCiK6r1HmZTHWs9Wd4EAPuK7TKAggnL1gyaP184G5nR9GLTJZsVrPxZeEkBzgnUViZ",
  "key32": "3tFKfpdjBrgdo28GtgviffbbCek19ERzuCmZPMBUh9Btz5s2bJtJqGheBaBh3WhghYhuoER6gqehB9RbNZXFjGkY",
  "key33": "2jQMEqMRE3XcMXqEAMdNmQyVtcQcheuKAGzuHbXbCaEZJ9Fi12Lh7zwFepMWVP6xGmAWNJ2KsLRGZZX19fyurega",
  "key34": "3jPGBTotuvSEpyv5QE1fz8cMf44iKwdru8i6U7zGeFGmhBs9QNX9MeuqcpJbFzozMUD8qUNyL7gLCQ1webb9dGyk",
  "key35": "5Wde2bb93rTs9foHJy6cQiXu138dfcDfibKrb8LCwm6rxdZNxQ17H7qkeK1wobkRbKHZnn4QWA7WzEEwcWscUSUf",
  "key36": "53CE99zv8oqLrFgXZaDmmGtcUqtPsybCzzFAESP197bsJihfV3kMpwcbq7NUFebPRo5rkVoNepW5qMHaSc5nWmRT"
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

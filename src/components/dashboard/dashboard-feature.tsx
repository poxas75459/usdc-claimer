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
    "5xrZStKu5RtDjSFVLofZBHvyEAyBuTSzPVtjyfNMKZ3YW6YGKKx8oCXBueUGRCmaTtei2RsNtUwJ3pm5jvVwswSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLbT9Kta6imLbCwPiecfvrvENe5W26jUesL1GvffE1FRrwwtcg1NKfAHeybKiM21tw8g9fjafo7QgXHYop9dCTi",
  "key1": "4kc5rWR6Pk2iVnDyrJMqBu3A2GdYksNN9zJaFyyEkCqpdQ2vNXKwGNJCvcnEZ6w3NLKd4ys5TfuuRYKwyEzt3hqg",
  "key2": "5DYXsyrtQ7Kgq6xXXBRt3SYuTFFjB53WDNaFnAYeaDTGeiHJqyxAhZZYjisYd8RTjjpbMmmV1qvuArUXnpvB75X8",
  "key3": "5qVrF6BtuH26jGYt5c41w7pEUojARyyRK875pguoF6QoxZ9YYatCAYGSQt8ZkvwsdD1Yjf964cDmxAMTSZgcroTE",
  "key4": "5z87gKorNfftAjT1itvWpkauxNnPV15YduN9hJRwsWChoNsEwbhkFRTPQSrYJAV2kndxKuYEWKPRq53SmVrBfse9",
  "key5": "5UGRBYiBdzrZBsSQSHnVZgy3WUV8euBGfyCS2ExKVZvTBupsqN1dbRcghkKyAbAop72xzTdP141bpf12w9aWk7vX",
  "key6": "4nmSehQbgdhTFkYq9TWTAwFECmjwdxxwTkCNagcXJdszAZJU2p3cybAziUp19ZW4JXTWEoLbimZs33xXMKL6rtrN",
  "key7": "2tb5hSKsfbnQU5HbTYthrnktL8AaLwR8HNCnqfjkKF54EmhRyB2D1Rw7QrvyorBGPsigk7BHtYeS94ymr1uAPyaU",
  "key8": "5M3bWPsoqzpdQvjXg73YfvDEVy6FAmQT5i91ZESJrZy3ZSeUjcp3rUX2pdH97LurkhcgBmxfXE22NaWp2Yk4h1PU",
  "key9": "21Jr7EHkPcDSnz4q4Z64ZknMJFF8RNSw8zwWeZycW268PbxN9i6Fp63tfaFdeHbiXbrumtDNJ1SMcyvXCLjFRXrt",
  "key10": "5WKyyWyjjBigS14rB46pTJTuTqX8Bu1v6ivUh7uCDUi96MNa9MWsk1myNZeqYsGUEKV6yGBDtTScgky6sTb4GKfS",
  "key11": "ZzrSwDXrfsKbPM56TnF9A4bXLWVBAxe2Km1JTkDpgabavWYrTqGHsuumA1Y74QXboyGPDFAJyT1QEBGwtyA6zxk",
  "key12": "4zdWazMVKCzLnLqRmT9ak6dvs8QVu3AKitZkGkBqWGrops3UZxiefjVXuBFoZHLEUNUbgRtu6NFrav9GM4CNWrRk",
  "key13": "4ttN4vQof5uH2e5zLuVTiWSpYLfm1TFDEFbTJV1mc6ezwMeTkfsBEFyqMVMas2sEKdQXvbxKMRyAzoZ79pr3AnG3",
  "key14": "52Nqm1JZ7r7mu1TeWsAf4gdHps7YLBxUAJgHkZPDip7MkyypYLV2NEQGRYsUy218GBz85avsEyueLgFR6qjnvMbP",
  "key15": "2iTUDAkUchonubD8CaXJEmBp4X46PSU8Qm7C9SoRh94xDKQuTWhxgWD24jsWt3GkrsBFQ2cp27ND4TCmEDN5fW4K",
  "key16": "52fpwujekcPhTxgq5oQXDzQvXVjfZ7CUNkdavHcDX2P2VFFfw6HpHapRXWxEB92ZzuB535MfjYumwc2vswRynAL4",
  "key17": "5pnZvn6eNKJY849ZxNu8rYHE2C7SPqCWFx17V4jagKESTXdzPYZGUViavVrt6KhRiyng6mPaKCbwQwwMiPHqF3zK",
  "key18": "5iSCLrChe5m35i65td6FW1VcUeNF9SuRwLMFUt6aH2PFKBfutHtMEjxAL89Ta3F5PYvVLwTDKfKmaXFjQ6iQqKzA",
  "key19": "3WXhP18R6PaGbtPt9kHXy4hY85Y1SvWMM9PHvc3mNoPSJxwjwRPpxde2qW7DCW4SxPREiWULroHcw3cZsg6YrzYW",
  "key20": "3kNvQhxcupgwoy63eYL2ALbWqm15oMYwGxUFMfEM2MKZNMggTPPyxz28Eo3Ci3TE2g6oRPq9WjUQmMgU8XcrnCR8",
  "key21": "2o7xti8SJBWz5vPebpKsgb6w5cAcgrYs3qnXsWQcp6cGLNgwW1F5XpiatZTL1ZTbdLhPTuxhgJpCPBGygB7qio5x",
  "key22": "A44kfJNYKR75MnSve4g8thS5TuXY1SFf7QHGqFZgdohpQbS8YsJduUtB3QzKaDpCSGT3KNFXAwTg2cGwQTuWRnr",
  "key23": "4xJV7SNzG9kAUBy2N5oJE4wnNTNNCLUXqdaSQ1bPMks2js3gJM7YdCTHY6K3LqZVRLRg4cdrR1qpuw1cKitKAF5c",
  "key24": "3USeKqb1Bf48TT3BAN7nZhMUm85j6Vq2XX7Z6hzSXxotqMqmnZe6diDwQF7Qx1EAnztLEKHrL1K9N6nqBm9nNzPr",
  "key25": "38YGugzho9qASWDC7UF6ZPCDjYqU5d6zbsEMV53SUFyp4D5JPSzcwDVb2m7B6NZZnmq2EodS8Y3xvrCTPoquRMbD",
  "key26": "3oSxV9qUkFgwXhcQ7rq8N3BVWwkbqrpFkA2sbTym28xETQ8V9uueuy3PcDLtChtK28pWgmXNWNeiKd4bDfCP39fM",
  "key27": "2uvU4msUraj3MZ3DzowFULcggfTH4sad7b3ivVE3foFX6YSPateGDHy17NoDGKfEhU5GuUvxvyDQRx8zXie5U5yT",
  "key28": "2iL8Pq45L938c8WK6B3Gxxy3D8EgNS3A7TayYjHB7ShpnygUpLvdScqxq6N4pusuGpJSdNuQAZJ2L5g2aFrBBeVJ",
  "key29": "et9NCZCTxSXpgKMFAntk2tnCwUmMLEtR8MdNDx5ypHVMyFdDjYbDfRDoLaBHjj72gM1NxFAce8h4rdmRVefFh2q",
  "key30": "3J3dyFJgwJcr9HskE9g2gLSrco9VFBWfmTuMsbBawqJEy1RJyXyS2qtSdpibx2ubaCPU99FrvyGES8ieRrzuQR5L",
  "key31": "NMeudw97Wf5XJqHfpZyW7nzCm3LguTFnjLES3GFxGtubDwVJpgrV98j6m7aPCU7WePuP2pMS5jziFruNPnPLWQq",
  "key32": "5eLP5hCshQdawBgYzhWQ6DWWf4ad4wbkdnQQh9xpQPRDtNteqRTcoLTWetguoq5RJ32jzGsA68B5pgemtAfQqa91",
  "key33": "KKi34syPkpBFgfaqDHDKVc9pUjz8NeMpSESUCbRe3sX3MitvrepqZSaKSherai7nr8nhvJaEtn4L9RZ5aCMRcnA"
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

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
    "2mcFCzccp93cb1aGpiuNSnW3iA3fhpv5pDywtanJaMBT2AE5JLX2WN9ewuwY61LRshv2qXnqkyHZdZAaBGZUdq1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Uc9hhhik5NLgx31FqZ378e3HT76uiLDPWZDy98SfKpwCWwm8bq5XXoS1qcK825H7EfAEKmQPrv6xM8QvM9eWxU6",
  "key1": "5ZKH2NFdVZHVJpSeU64WY6KiJ5qGHQkd1zQhRdwut5ZRbVnaxYiwfS27qUUsCc928bAcqbUhm6gcgw8bxwipa91o",
  "key2": "5u1ifdb28isvaHEn8Vndaz6DTG7e3fpnF8mqWwKY987f87dhtrn394gTVUWXqUyGxkp3aYcbEmRcbixawbNVVxqm",
  "key3": "2ibZtLHppD5t3S3yjLZpEhHfYiGhTQ8TuwvsGR1zChPW6UsQVmUGirqfdqymj7dePCLfPc3kam79syzh4T2AQE6W",
  "key4": "SStCPfhangd3BG87Xzry9DfLjVhrK9fYMgG5ciz3ViSMXWiqMXDtnzQvJxD6wN3ys9NXZwZFXzNuRVr48ryhV9f",
  "key5": "4FPMWeXtuRYUNFfS6L1Mpte16FRhBbgoDuAur423rLZBPt4jbZXYNXANpLhwgwLYescR3Fech6o647Gu4AmNh7r3",
  "key6": "QPUmRyrPcs933T1H54XhXNxwoG4knXqUgXGKCDp15LSQUxY2CXNDsswpXgAKkD1aeCqxni9BphgXkoh4arXpCp7",
  "key7": "62vH4HxcP3BugdU6ZtrvsvN5rKFDRTKb8nP4eNAgAxpMRhnitqkUTWEC5bzCQ6pZpTozhap7z1Eo1jKAy6SGctqn",
  "key8": "3n62KzMjm45AGCJ4SfQG4fis5ST7MCtkvorJUPCxgs4Xnkf5RCwWFLDifXbdG4hRWvrc8pYBtazvx4PzuvG6xT7T",
  "key9": "3hwPZdf3WzBvh18DgASgv8K348gEb1aCQUK3oNxyus2BbcYbosXzmMLMfHb53czdxQzvvNHaMc1byfVQRzK9caaF",
  "key10": "nGWtPQDCEUVNQV9kPj376fnPCrRLwGXVW2xRTuifuTr6HFL1GenxdHCkEa5dWvDWnAXVztbZ8jp2BmmB9ppRL9F",
  "key11": "4twkK1r8Yny1CVciUPRBqwavB2pvcMKMcJj2rFcygZVKX4ea2RMTBMAZg8b4KNrxLggps57X62n3aiNemXo6P2bS",
  "key12": "53cqyb2KS3zCAKX7QDJWJH5xQRPgD9e3VPcTBcg2suDjbF9sUJvgG4PPLmoS7YSWvY3wJkMuk5VUQ1bSRpjt1ufQ",
  "key13": "3a8D75GvvUypf2PhUARAouwDCdaMnXETpCbbr8wkGPMZopTda97DJzFmirdXuTdFiciCyDmD5hd6jCu58LMf36F3",
  "key14": "3r9tdVD1CJaVuJ7bfnKHDKnBZAQVB61E5mg7prestKChe3f3p1VNEXVhvBToAZpKqHMdjVUDewt2FW293MxeQySN",
  "key15": "qSeYHGGERQurSw2891Y3Qk71maBpJ1nvwotF4CubKMUG9TFLBgX114xKvPRepgcQFZcdYVB2r9JTz2soxm1iFtB",
  "key16": "H8jtyZ1xpzMJn4YFhEwbzTS6BCtzwKgPfe6PeBoFiGU7oCevSvjjir3B3Prute2uT6sf8ZXVP5VD4bbf56G4irN",
  "key17": "2gdPjGHMDTDfGoeg9zZ8zxFjkWt6bMZag5zU1cMHFxGiLw5FWiWDvqa37nfpzmYGuRiyFUSPCEtERQpcffnyLKMu",
  "key18": "5snSMNqLYNkRvVm5nKKnhvm9fkrmcRxvjuh4M4mrWpXtE2AB72yFzNH1Td2d1As2bY73LFpKcw4nDjpkvkvZ7C2v",
  "key19": "4HDFYxonmYJsooKR9yvxiSywbpdkRjosZYQsMeq7BEvppUFaELqnYZMPgb2YYukXk7uCoub4H1VJDtb32s5JEesg",
  "key20": "2GJdZLPjikhP8Utew6Fg68ovFFSfQJUxJ8roE2FkkfiBwf1ioEto4ssQAuJ4o9DcHtLNKVUWvnTiL1RTJqxwkGLY",
  "key21": "anVgLtta2aLExLwkp1JLPWiqcjX4teauRugrbnUs9wtZQpbhRapcfkauLQzYAU8YnnaB1bGBBEjhcxzPMiYtihU",
  "key22": "4JgnhSgdd7LhvjjofsZC2bcmNDgbBo8hvnW6A8cJCt1M1cuQLSzGWTiSzn8WtekbPYTuqnq1wrB7ysxaR5DJ1i73",
  "key23": "5zyEGsSmjr4CUiouVjS6eCS4V6wQFEuEdRF21ZgRFywCHCBSLD3yhMGX4TcppCgVU1FRHo456kaV5qmLgcvAJewH",
  "key24": "2apacg8MFyXrpZnMHzMseVhaqCtoetc7aHDF1tBdi43GjMs26jMjUhhALDyQJHDLUcf4Y6NNEGfJ9WB7MtYx5hY3",
  "key25": "2ojjpkT6cFZQQnhruPZMGLhnQ8WWqBjGJHm1wyTRjsEjbabHBt6zwKz2CMifz4wfRQC1yyvt9WGzUQP6Ee6VD83",
  "key26": "5fXEnBhRaKSsEPzcWh41oGML65ifVBdy2NeuwP3tRMkdyfesEfZLHp9mJKisezfKjKj2ZvVdRfxReHubj9savRtB",
  "key27": "GUkZtUYXtWZWf5E2QgyubGH3X72t6gouJYgWQe5wkjxgRsuYqxm4ks6v3qzyhimYJTTBHCvnTaYo9MijPbeQMRK",
  "key28": "4W6ubNwe1zXZNdC8iVniJQ7YqT9BBR5dkiPr8aQ6vxWrJYjKBxHVRRG7bJZBRdLv1aSsrFwh6JaGRudCXMfCCXas",
  "key29": "37NfYqgyTe7dakL53zqZjfRtdPubsSVHcYsLgYHMc6TcHJausm26HaU4owmhykuctTd1vA1TCMrmcGQiY4VQnGz8",
  "key30": "3SJabh49yVFi6mqy7agX1U5wXPZhc4s9uzf7h631mz3EyeB62bsZLAMo6R5Be9Tksx3ucxSSC23p5yRXfNQseuqX",
  "key31": "3Br9hb13yMCut1pSVxCDf9QtB24pNUYPJFzYnoVbDjgGcbkFfnyTQ74L75WM5W22Qf5Qj35DXaZdpF1GhUkDJDX8",
  "key32": "3NUJCExM5AeeqeBCXQLgiVELfH8f5FPZQkwe4szr7WitMB9Ni31LNPjTV7ird3662uG1mWHZSPSz7Z8zrG33YtPC",
  "key33": "2cSn8SSoX2Swh9rKZA6buyBSSKXBm2SGLcA88Y9eYipe1z7hRCkeaBWZkPMDxzYJ68wHbwUyjoGVMWVr2txn3gvR",
  "key34": "28BBrgr1UaQgyvPx8MnRLKzzn1dtavJhoQSYcvhoyLmv75ST9RU2zM7W2pxWNMMwcBE4Af7Nawyz8J9dPtomcABQ",
  "key35": "3kWbhU7nwnbun1qLwGvnSETqPkaJHeNf5FtsGwXh5mXrCeCwHDj4GKa9MxN211WGtuE9e2EcYrZFpZ2RFkanw8H5",
  "key36": "5zuqQVBnSvj7Y2hUW5Cxzm9N7dHpD9rMVon3HeHDk2YkRao9wgktXj1aoMQBJ5SNWLfT94qVYKXEjM4MsmPMkPfK",
  "key37": "2g1vvcxRfJrAHxYBtWEJhSyGCgPBSK3J1p4FUgu5VERE2cuyXeFXo6f6m5acbouYC3J8ceB2KNgVkXkGSNZA3cp7",
  "key38": "5naw8ykL2b3gFMLcuvgVZGvFb2Lf4Fp5ySTjCJA2bWNyMs5T6yKgvx6C9KnbupZSUSx3KzQcfYm9AtCutKGKSVw"
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

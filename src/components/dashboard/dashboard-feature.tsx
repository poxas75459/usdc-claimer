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
    "3tGz7NsRtcnd6V3g8SQ13mYw9GxhjAAQE55Qgz6gxa3qU6sFJvnKQw8XdS8BzACYP3dR1j7yX5Bo1Mmve6UAPaQ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Br8Dyx3HW4DbcpZhuBeae8xq96RhtrbXNvT72pEVfXYMDDk91DnFzNMwA9pj6wSnZxYLbv859hipfvXZ7sS1c6W",
  "key1": "5Lb5EU5GMasJ71DPN4Hgu6dAr784rNV6XqCU3T7vvf7Wd233PzutJDnTMSyrR4NDVKqMCBJL897tA1Tjsw6sVqkJ",
  "key2": "4Ps35EjQZ2UURDYg6XDjhsKpjCVqbXqwDREQdABYvsVruqiSZeFqUqBa5Genf8JPimaAhC5KTMKctEuND3c2CsNi",
  "key3": "2S1u52xUt5ZAKfM2swVdgmBQkWgCdtKAsdwQA6Crs655hRGqDbEyzcBWM4bqo4VBuGZjQfFkYaUd6TLbcGSZwu56",
  "key4": "2cxGXMW6MYhUuyBJDdCaTX4fBf5NNqFfsXLikdMbhkUhQQDdEDoPviydpanMktxpVwdkJxNNjDxM6JPptZp9p84L",
  "key5": "5C4QukvH9jtDAyXFqFaifNcHi33zYTBLuyuG3v94phyQ9H9UcsLDdEoLFaDdxZL7ZcmR3guqJo7ftMnhY7m2KKF2",
  "key6": "4ojc9VtTmWSwL4NoHxtnXiZ6nsjZ3jN9R8LnBLxsPcsAqoERA9vGEKVJ7UcqXBis8XzN3zUJ2Ytpox8kUui4jvZN",
  "key7": "4LYzdn7zbhyfsS2KRzVBpSUNg4C4aukqYRcCs1kDyq5DpNW4dkt59AR289bHf5oqtxqTB8EB9AFnixZBvmtDuvCR",
  "key8": "5W5xY5Ld6gfb8ZtsKQ6df9Kj9VNUYhUdddNAk6qenTvBD94fL2gA79Hq4SGvMZQkjrfnkMfx4ttYBUjpXpzLZiAV",
  "key9": "3U1pFAAZBQWmQTMy24QiuLiJ9uhGrx5hzx2rLPPSAnubxMuFN91xgmnGeQX941iVMK6APgMciELhjdLpBFTZidig",
  "key10": "387sfRnDzfRPXZ4XFfkVHLDs5r7gxrUC49SKchzhEQWXtCpCMAQCHpUUEP14SpkxqjKnZUqXuWC4sn4pwWzWSYTt",
  "key11": "3hk4o8bsg9uswoRAaLTejZqRyGJTTQUATEV8LABh2sGFjM8dZ7pcNyAeik2XREPJNQwUUV9ohKrPJqsJ99gHsAHm",
  "key12": "2oQqrtKPPSUNhri2eqQxwSUj9rqEKtR3k47GMCENvLScm4BfJT5Abc5hPi93u2gTVUATFPiNxXwPAD7Cs2VW9Qta",
  "key13": "4HmSLTCFJNpHRyV7YKQRnjfYPspwRCacdhULVg8xLrXGuvYRb4hw4w37RczLo3V8o3HDiaba88RQQhUYqBjDF5VN",
  "key14": "4dK5iYnVSiSEUGHtFVgo87zQKvzaKf5ekKcR54YLYgGGWQXfn9zUax1sNPFue1rpvUYA3WnYeFyNBATdS8W9EW7h",
  "key15": "2h1QoAZ3StvkfYckxwjMRbZsEZnHBBFFtoGkfkQYy1jfxa4aqHCDmonrX8ajkXzQvTABH93amj6821RpxUoFGCfH",
  "key16": "SzBeVJoRxEpnb8tRG1Bi3PNwtbj6163DzhcNq1QDB2QCNRd2G2ccyLbwigXdgoQsbZ5WLLezMULjBEMeg2yDfd4",
  "key17": "4WzCD6KuZy6dHbTDcGGmySCUTgBQLLEENszr8qGJn388PnchzQFuBJ9Nt7dVK3XmPp52RKxfCXgFN649SpQWhXYG",
  "key18": "3JuNWqCM5H1QgCBoSroR2noXqdVNAuDptg7ktu8bWjLh5xcb5rQgKRLBjtRKRoVzL7KJ3YAYh9ovVSFZkECHvrPU",
  "key19": "4g5UAhiKzceQB6bdTYJK9PTfW9PQ2877bgzwfErwQ7f2gCv8ieaEc8HJXHsw1P7BeBwKhPqmSu8C8e89nMQkPN6g",
  "key20": "5qvbnRSyTSJ5rdCyk83kYdjNkMkvyX2ZUAqroSCEkJA7dnQkg9tqbdRfBZfPRAvQUYrMreLvbnKVp2hJafpfg5Dx",
  "key21": "2heXAwfyuSKhpHu7TRvFmuTvAVCoLVwY72exuAetWKA3NZ2J28T8cc6PYtyBFqypLVo82GbnnPF1TPsydZJQsZk4",
  "key22": "28okEQ8jcXhUFiudFhz75Zp3VvEPrBUFQCmNk1nsvgJt7cADD4NoXpEKTD8qAxhM7a3mjJBtxa7CK7ESDszei297",
  "key23": "4Y7XTVerXcKTrz73YwSismLtCkCvogPcqQ8rEK2K9xJt2jjCV9oz8qojX1hh5MEsrE1hY6kSXCan65fuXj2jYQgj",
  "key24": "5QLwPNKJbVR6YsYMoZsG96TwnWK8s9dGv5mYeAbLJSw1hCC3WYNRZZRSf3Q2g4Et8AyhHEssWLbbwaa6SWBDkyUu",
  "key25": "5hqXYFQYno8Zo8k6kGCrEbrRF5nPQgDauPRD6diqBn634YppNjJcfRFhHZB4gMbJXnac2Y9yxBC12hAhqsb4SdJF",
  "key26": "5xhYE9gTYKHBsELWnGUdPUv2uiAFmJXmd91iKh2vi2zmG6ccrC6XTz7n9mzYnK4iavA4DXwHF2aUavjLDSqYvov8",
  "key27": "63vgCG2dkgZ9mXigobF6tnUeD9NKKFGzJVrdv5EyS6a8X5T2j7tgVt2P3XqiDxyYx53Ho7fWDk8c399waBfBWDPV",
  "key28": "4n8RQMHrw933f9DxnDWNy7Lwz77VoSTdeDYBoJBXxV62SoG8n93PxtHRD3Xx4c4opegR1PVZJLLGGXGpfXZnJHZX",
  "key29": "3dweuo123GTn5m8Zcgwhc1se3Va41yssaFioT5Uqvt92ywkRc2q8mYF2TNqwrnrNLcApUUT6tFF4sHZk9yw1i5c9",
  "key30": "3MTL8CQqm1K4VCpdCBmuTU77dHKjUiPeMZyVTdx3ZwGkNxRnxa9reswTtGVq58LFp2wEPEj75QWp3cEwiCXwrpVh",
  "key31": "4DaFjVrin2Y5p76rY1cfCe9Zu3ejAfyNRjMFcC4MRXG69gpKKaiKmh8ewgrBnLskZYL3MH7Jx64bv9iKGGQX2LCw",
  "key32": "Jzf9KZSrapEcpQFaB7rr7uKxMbxmJyhngEwearSJMrZseqDqRKcGpG8x14gR5NZYnEKMPvrgRqbdL9jZrEXSxaw",
  "key33": "ysUEMST7UV8Sn5gn1oqQRP6g3qHhUuMqEh8ZCFEYF2g2x3BTEmezHZ3As77WrLrb7tuoErLwySHdbkGQYbhffxo",
  "key34": "3WTa7dTtjojZZsyZKFDprS1EmkTCuBCWVpsbGYX1iJWpMQQPyxx3NxQbphG3mQDKHBnutJtvMq3BGW63oUJRCtLc"
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

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
    "4YV5nRKpwiHgs82WGi8Aso44EpnSvr9gcdXWFBnfoxmVmRSSG6XhWcYJM455vEUr5dL2yDQUxvMRKa8eppgWQ47K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f1aPYV5xAXf6VFyFJ31Bj8SAyLUgXpx3968c746dgdmoMCuHSUy4H6TFoxnDvt92rTg75XXsUAmGB8jxGWrZS9e",
  "key1": "5UaXs2Cntczb1vWWD63GTxJHtg9BpoYaKeShH4cunMidgC4YHkd98nb516zC56R1tErSKRLPQHPcS4vVbSBAwEJ8",
  "key2": "aneSATWtLanzpp6KLZyJJAK2mwhVdevtPJfABWj1hGW4heUiyCGoJQy5Fkv1vBhJmCr3ZBktwXfsCfv7jub2hqG",
  "key3": "WqKxc7iQUXjLT359DkYj7h64tj71dPA2mJGRJbrCS8xP8fJJgpnuwZkATRat3pa54BdbBBMbHiXhbFcheHntaSH",
  "key4": "2YQ4RMHEazKeTDfC2hQZkoa1uABSMuSt5iKorJR7Nj51aq4aZEjjps8iK5Ps8rSL8T3UX6djTkKcSxo7kbWNYcu3",
  "key5": "3DpRr6frCDd15msAzCG6NGmhpR1hnDhwWZbrKDcr7JxD3E3pNeiBt2TPC6GnZLF8F5hj5z9ujS1dsjGDcdNrUSiB",
  "key6": "4mQBkdQVTB71MMjokSdGbAvkkugmRoKxf2CsjwVD7wCnpHsVE9mqL2iikGUbqEDWfMPRH7Phu5UsVaoSxhRWEwKw",
  "key7": "NSFXFceKiV8c3pyza6cmdzjT4ijLB7oKmz1JKByc2fA4HLa7GhQryuLN84dpERiFaFa5MhqwJRSWn2GCGKUzfUo",
  "key8": "46vEDqSFnaAPgdZr5WZyHzm4uzK4dMkgYJLrjxDBjcviGAQhdrPcY5jEXVvjYfDxk6VkyauonU3Uh7HusW5A9L7b",
  "key9": "67K8qeCCYx5iHo6b5aZc7UC4vUUdUTk4E1VKBafz2yHsR7J2ePJAbQpE4Ucu2CYji4e6CxqfdwV1ab755mMqi3Gb",
  "key10": "2vTDR8sKjivaqAaUEGbVHH5eppbgQKBjAm7nktkD8EeFqWA5mZHPbyVcZir2RdTunWtAZrRWHxjLhu5xJ52LNf5j",
  "key11": "315HowZHp1nZwZkKvugD8cywUB2QFTTJKRqsC1ofkC17KQpa47uRaMLbDnQ6fTjDPAxeU4ouHEfVwnbyjRBxrRJF",
  "key12": "3BPPrUnJqWoEKmnfhmSBsqyqEcNU19X8eF7PrWBoDfJooZfHNEjLYhHYNJJYZarSfBctkmSi8ToEMw2HgfXPVf4v",
  "key13": "3LPHzfE182VWNdqqhZfWnRdVowfxNhjnfT9etAWpPF2B88gERnx8GYRmLoMBcp5Mu61P4NoqK9vqUjd86S9qK9cQ",
  "key14": "BZHcCTV2VXWJ6ScFRbdyP7rKTvEyz6w5kU2mKLK3Pr1p8RW2bQ6qyoMbGMViV1jsaLEaZpf9QxSm3LScooEhU5v",
  "key15": "332upWissqNduwGcMGit1eJSz2Ntzv1xJMRqNnMAHuC4TGkrSC52XfZCYJ3QLrVMRKuoHtQPpYs1QHaEkCCiCGkN",
  "key16": "33QHHFCbk8UoxkfsyQnJ1sZph4bJ6f6s7T93v9tdMcHTbxLFKJWEDXVuiifnAXyCkfAGhVxHSRZQMoejhnoDS49W",
  "key17": "21N1EpfLsGbi8gfz5xkhuqk19eXciCKtdyWW5yntemFaCXCkCecfvSFBm4R7vDNi6EwHrT1z6LTND2TFNbKuyRbi",
  "key18": "3io83rQJMVwck8bLjRv4XWCQbrNNx9MmRkoL5FQTaNFWZeYLVXq2nbPLX1p9E4puL8rvoTbUWoKLFT8shVsSHvBE",
  "key19": "2sJXhMzg3gUWrJg9BDNsQvrv6EZQKU2kbc1cxt5amU5HBLNoYTqqhpLfDsaGfXcJFVLxhpdg1PaPCugJ8kAGUiQd",
  "key20": "2AxFmUqcxdcaXATj6k1kQmjR6cozfwcgkB1UK5st1eWo5Cudi7AWtVER1B45GrKZZZ8aARtE3ccgm3Y4cN4xSawt",
  "key21": "4LAnMUfCvTPod7RmhkjYjBUWft9TRyH2NstS8tb9BHQGMaRUVNz8AeChKJp9ihqDZj2tTgFE9jCgy2Ss21gTu1n7",
  "key22": "2P3sUxjHfqLjKT5U84z9AWeKqqaucdQA7VHGGYZk8UUg98tpS1iqhQE5eFRpCqtEzHpTMSNPhYqMmcSYGsBN4TCM",
  "key23": "5z4NG117tfYfJ7DrN6LBxDonAemg8r7yDduVdHhtmYRg5cF8MUDi5QVWPFckKC9tRgzXRKbVSXxXPnpg979aUtGw",
  "key24": "5B5NzDnqW6e9RTzzrRzr4g9VgwATFgCL1RuA5A6885FN5Fu5mZhYwt4krs3aZiULon3KCCUMoQDnj3sm3b7DG1V",
  "key25": "67XDCjJHq1m8fDajUzbvuRfaKSSp98SJtPjQip2H9DwnFwbSXUpMqyZX5Fz7j6PE2Q5oJhspwsmXBMvPnoSb4hQu",
  "key26": "31NbmFuraBiSofRMpZpWR9wGSLjfk2xom9r25YncBTc2cPiSXBTcuk9CUiiUe8dkcuU9iuzSwZhUDzTmWEiFHdaA",
  "key27": "2NArBSyksGLaGwW1w8tqezpFnSncskWwKEV1HvWB79wV5QGV89PhCcU8q83pzrxzUcRYYbHvbswDNAXkBXN2LYPj",
  "key28": "43NSzNnN1KwaLGU9eiDNdCnEBdGfCnYSRHN91iEEvPgwix85KWNroE74uVTDjWCgCPMy8cKMehTNXeTpxfc8vDt7",
  "key29": "3NrWQCnH8PVpPnTzqhUYFqL8k6krGVqWet3j7TmRTW3nJz3c4YH4hNvuxoQEKnMpuh1ofXP3yWfxT587YsvwpBKU",
  "key30": "UXdndua6Ld7eiwpfZptHqE24MRqKfgvF4tW5gAAkRujDeqYrDBr2V83GUGgswfe9X3PSHkNtqnLVveNia5sQVgF",
  "key31": "4i3ZhAjupsGMiU9jPdmfDgwHBkkVNdDJvgJKL7drEce2cA3jt8PaXoowca7p62U2J9a9YKCN8MwuWLQYFmSXvg5o",
  "key32": "4quXmFytzhPd2DTBQH6WmzRBCqzrRdHHfe5SuktYMCFaQc7AviVB4r7m1y5Up4BaR3jr3s1DWJRdjGpqo1X5ezFV",
  "key33": "kxkwTwDZjeRpcA1BxCYQPgBnzd9XUtUYunE52XbF6oDDVD1FCwGEyDY2Xpcw2JXp6iNtBDyazdUmCD4khfMuTS4",
  "key34": "56anyJzwzrW7qZgSf46apqzJJwsvpEAuHsJTvVsn7j66tdoiSjQEpHubwLBoKs7k4vuPXoUSS7zNKXs86Gkt7L2m",
  "key35": "km95saegvZXP9TKzJwWMCns8wmRHyE1i4bBNHt4tvCoxCq7RvnHCezX8rPMqAng9Srk1RxBjGaX6qMy9MoR2UUC",
  "key36": "5awGX1moASUf8USRUBBqYeH5zKtT1nigr2XakUYYKSrwF5jwFc81476fwBQyRCQk7AM36Fh1BgP973XXK4i1cA5s",
  "key37": "5ATNUPbU3PQEu5xVavDKNVzUFsJBXPHpgfgfDfhAMZyh9L4xio3cETHTmE5G1RA7Ef9r3Bvgb5zZ1Khp2kPEE5Dx",
  "key38": "3GQsnM737vVjkxVi4zmFP6PFHGzDchTfvXJ497sQ33Wa6o64ckjLGEh6mHayqbVuHtB12u6BJvKdEyHvUmK3BfuV",
  "key39": "2jtE9w3TNFmzZh1rQxCP163DcFPbJ3z2FHD1HWCLhTihpF8csDd63jhtxNyBKcaUJ9ZXs15HzaW2gewf3T6dN9N3",
  "key40": "3aRwbsLY2CGaHd7cojb3g2fnjc8uJmTTanF8z3uGF9BpTVWTxC5vPFhwR5GuKSWj7KxCcHKiFN7mgh6uiDD2tNMg",
  "key41": "pmMzUWKm3xWXLeBfxV9eo8PaGhn1iZGf6Z1K8D1hPGejzP5Xxfb7rRQ9SXZdbiBga2RSJfMZioBiWvoA8v88eL4",
  "key42": "3EiZMbwLtudufxgNkA4XmfgBZ7LUkV41zKbhTbVTYmsE3C7X4jFWmUmUn4vHjmzyn78jaBHHKAjpixgHg8ZwwU4e"
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

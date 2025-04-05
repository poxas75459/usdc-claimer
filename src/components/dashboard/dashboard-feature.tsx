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
    "evRmZodP3bjKqEBguHeEZcsYJ3XXe1xFB4k9sDktYRgCK7vutkhETwF8DCWzQn9JmUeEoMRtdd3BhEv5Uqb5KUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xyRtK3dYFZwEe8Kry3yjLrX8VA8Wf1w3onNxAj2xTbAWZQpKpsHBKjSej4KDJnnbB2PfKAvuDr9zCP6fYoh36SR",
  "key1": "5EUzzcBAaFUSGZuuFAPrZ1vgyZ1CDc4uRps6YdghGm7FdamSvV5yzzUimPgiGi9EuzHmFM6BczMqAB3Lwm1hwC9C",
  "key2": "4dFcPRP2jfex55SUSSJLP9ryV3qgiK2fTCoAQXH1Y4EDp1Yhf16gZ5NJsyLoZHGGyPQcdYZeL34UuTrEyHwmESKk",
  "key3": "2fZEaMaMmGbmbinsiNta23RPPXRCZoh4gPhy7xuwGvP4BZER5CorhUxcMw3RT1rwceKY9XWjbaZhrdCtnKDDjyYD",
  "key4": "4Ma5m9oMbMd9fXg5VXLLnAyxEoaVFAK2B4RYXmVg3n6hNWgeRQ3FH1Fg71SEUJ6S1qX7jJaSr9Qhkh68VGz3zt81",
  "key5": "3ePQGQAR5M7gvAFV5R6RxVmaAnnSBf3PeA3thdEh3FQbv35dPt1cJzQTLLd46774vEfYQqw1QB4CJ2N7TSba4gpF",
  "key6": "3DPK7kHTFPWYKrPJZrewr6rSiKwLnLuFGuyKZxs7bjeg1EhfKhEjos27FTSptt9HQxHgGf5WvZc1eddfprnZhc18",
  "key7": "29RLLm17qcUtQcfFtfCEVa31WjTFP41yvmNNGu8sE7wsfVynJQ4tr3gtPRL1zdBnRUZP7KbKosLrHv3TsxRqwiR1",
  "key8": "Pi86mVfb8iwzrmr1ra4bGXNfvTe1BbV6nMGfFGHZKXC2rEhpPAwuoUw9LsGni9D5noWzA61CHCfZU8p7Mr2vemR",
  "key9": "27Xr8RgE9QPtSa1MJP1MeKy21xGVRAj5RzFfYJDcqgzvUZmauzJXewnV4hocMCgbBm1eeoptQ9ioL5N9xzBeFHDk",
  "key10": "618rEoAAhqHzju3VHaSSWSxFTnTVPQxeN9w4ECLs3iArwxxS7GpDmpEvW9FZf5r8SjtLVvXrAa6EoswPR4kmJAC",
  "key11": "2nzP16QAdiYUw2rssHgf1C2B4Mb3TihP2ce4YTCcAWZpfciVYiUmwUGaNqu2xdxqebma9yiZGDwHddeENY6JvhB5",
  "key12": "shdWM7V9h56eEK9EFoBUnkUnhX2Yvwbtnm7MgGM93KEhPkhgiPbny63uyCSaKbp2DuXc3Ua85cdyNNfNTzkExe8",
  "key13": "2cLvt4MHTh2M4XEq5ctVPbGu42ZFSAtp6mhZUrA8iPWgKQVvU5LS92692TTDY5trDo6doeiLbsRugzshJHuZ1bEv",
  "key14": "pQthHKnDaG7L3YSYwiivxGn7nkCDf2WmmyEWmNUATy4X9KrmnprHA7ZfY4tsM22epoqPUNjf2fFjSqpenJTtsah",
  "key15": "zf5fAtCBty6JZwvakmUgHfQEPrCe6NnohbZuv2hTZhCEhS8q7v2RmqYKsP7M8fF7kPTRhAkZqVvPwytKn3D7x5S",
  "key16": "9Ne57q2rU7EAJMNsPb9C2rx8gpBwzZ6k6ASoWu2Lcnz1wGEmS6KAe1AoaFehGRX6gb4H6ML4bw33P38iF8hTHgv",
  "key17": "8XzY4P9KdFT4JS8k8p9RPZv9hynueg1YnLpqVz7H2Cafpk39266kHBghzGbNhybtYyA7Zynz3DYxN8HuJydfAXd",
  "key18": "67oWqT3hVZTsYoMDbAXUf6WxyDyDBmfc3cV1g7BZyDwCat6dbhFLDWQaCSUXokwz1WkTUR7kAR5DaGLQdXdCjBcu",
  "key19": "37dJRQPvzqpfPPA6bDJbTT2DNMSoug14tFYP7XuCWzkn2diUFHEbsnzu9ebBHfg2h29YRBksNYRMmTAdKskRf9Tw",
  "key20": "5h2a8a65zZCvoBaJ7jEd529DpnsuS8S35sCbiTKjntbv3tibpLJj65eEVcguVmFpZ4fNABKyf3quyuUSCeVdAWmb",
  "key21": "62MSXsixbBpqoiZhDvSuUHaoMKZanrnnmTXt3gvjabMb2NRKESH4XxBbKCJxZFWvnESkq1F6VaqEUfHbLDBJnePV",
  "key22": "3pdkV2FoPx996o4MRCB9wzW2MtBCyoRenWEEhyDPZ1g1raQmgk6rVKHu2LHg2U9K2Jt8ejCq5cXAF4kiZgKbcfsY",
  "key23": "2dfjUJ6JL9xrZW7nNcK7pyWeeRUQP2PH5jpq5XqvyxjVsCYSkKPSbyxYZ4VWHrbrF8Y5bnYjaSnPnrKTRZDWKaKY",
  "key24": "4BZuCxzMZtd5aEFYPRFctapBhGJXux49DrCtbGyD2vAJ1gXMzHfFPpNTMv9dTouWWENbU5PkKKATY34U8hN6ddN3",
  "key25": "S6VgLzT4AMoU8eKYR5Soe7cHdfHwTcKhPAhMfvVeFSNwz67kHMb7gMrqxHTDGHPcjFPuxKQKhiskzxVi26wi1J3",
  "key26": "kAWBBiQs7kibKEMfwnuLGAvwut2c9AU5yDi8rmq7NtYDBT4czkuEdeW942mmcyd1oML8oR37LnnnPDAjhWdZtwb",
  "key27": "2L6RpmszcPLaDnFaT27eykJsuXKyHDLyV16cDVjAMCV66iP5guwe7sgTn1Lmbgzqy4WAeAWrdaBmgABGDyozMeji",
  "key28": "3VX25sn5DtuwHx9VLMQjjjg85EGyeArQUoWL5vCQqB1ZhpXqtRT9sUaUcpDKqThRbYCqHzud4HPsykfNTDo5eJGC",
  "key29": "43xcMzaoaYjkq9SCHJ816E7Dfa8txqTaf4UYATD5T4b4iT1SAkYKGM5KAj8JKeXFDtDwWCH4SnQzXHLy3hR8vEhc",
  "key30": "29ZG69fgR4VkWnTigrjQCsLZKak2oF7DQVFJaMfK5gz9bX5bmhvXMVbkr9hVQBhaSBx8YMH3498QmVd9FtNfzHAH"
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

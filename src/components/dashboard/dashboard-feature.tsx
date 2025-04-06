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
    "3Bi37YgwddAaxyrLZWZHJtWrkZTC1VcwzFy1zJDvbZFqsWTu8Z1qxEnNoTGGUxKoqCKundDtwpP9jPi2fAQYo3Da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCMMjrX96CJBqRjsJmpmMZWx3ZncxddfJ75epqHgUSLvcgTqX7CHQUcF9SLPKc7CmHTpES3QuTCv6Ys9wmgFjMH",
  "key1": "49UXFzHFMsidKcTpiDasCyC94zTbdPvY17pmqXg1XWezEv9QeAPgz4PhPrRQKcWieyGdRtxxcJA3Zrx7Uj6w6DUF",
  "key2": "2PN3p4S8QXGUzV2xvQUPTRFU3Fu5EjkcZuxKGkE4nayLjwU6Ytp6aYjwHjiu2taFV3DFQzBjcH5WxHVT2GkeNhCa",
  "key3": "5b17aLE1LjVAQC6TCpxRzVhFiJgwvaTeVjUWEDWq5YYQcBUC9Ya3Vf7bGnvnc7ydSANrkcAR4SfaUAuaodSM7zyn",
  "key4": "3mgvQGYPmtNTLbashjp2P3EBfRThvSoWZAcxScnvFV3rGRtwR4cEw1NPgkVz9AbdGJQXyfQjADN6hrH2BKRqnEdz",
  "key5": "3QiGPESJqf8yvTnX4EneETQxb6Q4xW5qr5t8qmtjM7zFrALFUr5Fsek2JapNzrEtddh7sDjd5kWJ2RpQ4PXYqT8s",
  "key6": "4KjWkHwCCKcTzejDsrRSvFMNnA13e3T1iuz3tHgBdT4aYth6oHZWr1iYgy7iNAzpeBhps9v7GKte2HHCY9RHYj3h",
  "key7": "2hZ4QpkU1Ns8WeGK8MT8ZGfxtKjNQWt7NiMWbNxjVZoxxZiyApCGixE85oYoQmc5DCwyJfFQ3K6ebA44RYsLAPFc",
  "key8": "2goY5hRyVSgRQEvx2cyvcaGGrTtA9rv3ECZRuT3ASCdbgbuYPrQy8NCc88meiXHZuKVHVqgFNus6rC44YTHw5q7f",
  "key9": "w5wjATFu1Bsbf6yo1jvNPcCtDvDGMBhorC45D5q7atpjz46NCVaid8fGkMgpqSstDiqAp2SS5xjYjeue4WmDtZK",
  "key10": "43goJq9v7wye7HmpMUiqpwyPK2myiUmCqzHCswwSfw5fMHa1vHAQC14g8FkJCaGtMZe1EoBwqzxZ4VDMEmFKPjwY",
  "key11": "cM2r8F2n83cinBRVPQnRokWzSF7kTcUA4r4txqTW38Amkhm1siB9y7CLrYgELgSqh13vxgwSvYL3eEPKBMFdrkn",
  "key12": "5HqWYQTLHLQTKFh81pnpjb7Qad6tt7rqaTJyuSbVYhEjvz6FSWSqmAobj4mVAbroB2xXMW77PWhXy8UK6UtTcPwQ",
  "key13": "3q3vEzKbPfG5xP4m1jxHXEgUHcaKT7AGtPUMY7LV9kExG944kMDWwu3FfG1JRLhx6wpcRb3jNdGZrxtqDGw8YxQU",
  "key14": "4k6LL9HoZRNZDnZWTmpHw6vXquapBAaLQorKGjWKFiGTXJ2MCXPcr3Nf1ZycZ78zeQjdKPRsnVEXivjagLrL8FL4",
  "key15": "5m8LESkUNswca6geWPifG1kGqDtFALUNXS8Y3vBsURXWUoS13hAcdquhxC5NXo49MkCrnqB4hNPgdNub2sH8atS5",
  "key16": "5WXdxQUHDjpJQ3yN6KHNPHVj6ssC3NwZ6976NbJ2gBz9dnFKvAtEgGsWD8bCi1KSJzueqgHnc3hjKD22DQruLe1n",
  "key17": "375dVSv594tvsK3qJwhY2nRN6f4DEdP4152LUXpeM6cnKLfr5KLzMt47JU2pqdzdjGdRhizC8PTwBcmujSwWrCtN",
  "key18": "5xf5NVwmtRm8bdkYEcBEcSXQkcTPRg4vu4Pt1s27j9hfJxjBC9cmkzk36BCRqxXC25ej98p2AqVjMW9uUthRmbKu",
  "key19": "2rJ3iBo5L7arntVzCF9HpVDfJoc12V9QaV4e7GuuLUehA7DFBgyPYJysjL19Q9yuqhHALcJmfEFeCgwaoVocsRgb",
  "key20": "518ZmjZH5YaFoZCf4rFZ6qRVq3tuMCirFzExwRsW8u9NZPtVmyybNCQXJcE2ehZ9nKiHLwSNmEy9NoMP77NvxLpK",
  "key21": "35gMTmW1fUdcHd9CEEqDoqVmx3N6vBiTA5yY1zzyG95tfupyiLuUayq8DHDjjxGPgrg4JTtwi8nQ9gD5Swk2AdY9",
  "key22": "5qGkgAbt687ut7UZZAJWJRe7k7pUUoHo71D6qiaUtnq38iFeNuhrMRu4krpKziwmQGvRZcnd2VVSVvB8zLUsno36",
  "key23": "2fYGpRT3b9qSRJaEX76zcGxUHm7DTRXeLN2cv9RbxrqwAmaPJZFNPZQW9oKiFB3nHgyZTa89uiahwytNVYz3EN89",
  "key24": "3BG1TRd8zaJgLSr8jZ674gy2eYrYmUmp5BmS5fg2yV27v9jUZEJzd6GJ1SQCGN1y1D9BLnmqT715hirvApnsmN8R",
  "key25": "2zxEN7eid53Rvh8arSt75tcCNxwnn37aYgP6Dtf4fnmv7h8HiwknME5xCzY88ggDbFUCN39wZYhDqoPv8uKvkGPp",
  "key26": "4vvQ1kM7NrwVmMUrzWgKYc3Yfdjt17oAqdS7VfZmXDt2hcW3aVKk39swyjLPGXRAU2CCTHiHkn1GSN4g5hXByM6D",
  "key27": "4wgmgNP2CWkQhMbpFYbU3KreYfrRZNPHMBcF9yW7sFGHcZjoBFjYkMFLSXSxGnzRtGkiXcvQrRxJVztNZ1koiMCK",
  "key28": "3jsuzF78oAvSubenbh1opj87tHVMaf3h6f2M6qeoFDNa19u8TkRB3iPZhLLCiqPTWFtacN6FP53aGFM8RghhonHQ",
  "key29": "4X1tqJQjGEiYT62LVmSxr6XvFBNY9Cxmhh3d9jHC9mLNitxRw5soT1cf8Xmo9U9Yy2GGgaJkg6QXhL6K7yoMzmKy",
  "key30": "5ZWSffRjeW1AWxrhr8rBGNwVyLMRwt9PVQyccvpXcPPrVmuZp4pot9nw92tkzWfeQktvymUXjjXYpvyubq2hMaCa",
  "key31": "5jWfZng2ALELDxc7n1VfFKDrU6eVUBBfb1gTt55rYdhds4nDq9bn23Gm3fJnPzKxtf34kCYuNfMgVPmTvyd7hTVE",
  "key32": "2LNxEhahFzojDPrkxv5sjmPM41Bv5vWxNEcy2yCNuUVKZSYYSERZDaA7abTq4YSXVpeLy9u7qURGsDhDZa4b4xEB",
  "key33": "iCBV3hf8wcSUXfqhAYfqAdNDuFS4hHgE1HTHzEEoNVKoDkhqKEPdg4aRpLTiWgfW3x4K6Gv7TUPzLfMbkmvi8ZY",
  "key34": "3zCqmJWXf2GfTBzRs67qm5umoesTcqw5iQbjS1Ue69pXLQKPwt4oJC6p1kji4ZLDpZ1TqaqWVWuwsQApQKMpnczJ",
  "key35": "2fyGeiixaqPiSMYhkFBqHTsNFbUXU7HNTHxEa2RZEMbXnknDapT8LA4uZh88V7XnZUd9i9B2Wosmdpq4enqP9vKx",
  "key36": "5gMdSK3HCqXR4nEKPRTvbejF77wiSKcH4WkopeYcbVWHq7MzM51UYqyv8WA7dw5CNvMBGMWAHA3UhGfKaAoBYzFw",
  "key37": "2FyJXBpLW1uoLJJ3MudWpN1yrYT1B1xwbeyYP2WRiHyHAPMXS2z1hjTvJnXUM4NJaHoPuDqqUhG48NNznjLgJ5Lp",
  "key38": "35j7Uia3tM35mHQrSNKksPTx8Jbax32itudZAuQmUspiQmFFLwrnTDkJXgMrm6gUNRGvnnp6ENrAwbc59jbagP5f",
  "key39": "MFjNNKkdYZR8kSzev2j4CiGBqSDrt8z12EDQWt7smc2UebaYVgLGXD9rXwW7Q8Z6zvw5DHjAH8S2M5oL7R1exT4"
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

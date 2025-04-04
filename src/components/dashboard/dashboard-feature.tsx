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
    "5d9UzZ6rBHLKCyHq7LKBuQtWaiqtsKknFFEvbffa3g6iKd64CDvLwTmcJf3B1kVPx4jbZMhdKkcz3rUEdfrk2GtN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gi6C5xaaG38PWC8AY94uaL18LLP48x9gEPU6Kt4pETZPvWg3G7MPWc6DhwgXPAyBSYBvU2KjqgLRVBEHie4E8jC",
  "key1": "5gpuJf1PuaEP8xCZsrdppPAsxfHU977b2686o4KFyKqWwsnPbuZ4gtRPS51K9on56abFMnvHrvbfRD7AEoS2Vs2W",
  "key2": "d3pYo9KiLKifpsam9fLzvUg6VyWPUpHtr5TrAuLe9XMWwxcg9iGomiEQHaNPab7Q5G7m2Pmq7yHv3F9CC5PryGn",
  "key3": "omLxPnUsBP2qG2EFo5P4TU2qmS9gE7xZquFYg1RemWwbkY3HHPD3sY5vxoVVMNkxRS2d76Q2cprb8zFFEgGGG4k",
  "key4": "3c4u1MLKS9NxmbgvnQmQxpeusVQoJ9fVkVnysWHcsYxxgXLV1MYNBBeRzUvL1iyyTCcEzy2uCF7KQ8hKkMeaQbKp",
  "key5": "39Vy93MMFTGvaar9KosqJQdBuVk1H8dTwmSdHfPxjJj9n3vczU2kM5HiRkUa1zBkQqXf4VfhHU2aMRBkyowKGHWA",
  "key6": "3vbRmhZphhymddW3FhE78rbwwzPWuX1yph6suoMT4zjPiBjWVQjUAxa9ES9hMgnrZB2ACgVKMvW64wbcTpoKkVtN",
  "key7": "4EYcGsJJhTMqNFxTT8DGepkV5uHzspNQrYg7WyQZZGTtPkErqnrVLgE7WQTcNETN65SQmEV5E69FDztRXjvFJTHZ",
  "key8": "63PpPBJcfsKpq6B21uEsG6tGj9K3YupeLXWn2svCKMDncGED3RC2ZCcwnn2doesvYgL6YTdZAc2w1v9EVyu1AvhE",
  "key9": "3gFvdaz2Zvh9iG7xEKVqAcmMSka3RETJwsDAynC2NzxXoCL9p9mb9bSAU1EqWjo2jqmQc5yE4hciXhPx4Lr7qNAH",
  "key10": "37E9aiTPNwQEUnvqXgMkfc1z4RRwrfydDNYNRJrumsLocSLurFjVJr6Mj6gw6mYgAtiNtbnVWgTnvtpGv7cCNzTR",
  "key11": "zye7jaTTjQz5H4bW7oDLv6sqk9fWJUf88E3Vf5KYhFf99yPwf67TSJYJ4bnDpxmZQmocsivAaeB2RqpPyCXe4D9",
  "key12": "21MnHZMxKYTyctToE6UdG9h1EGcVktNiNXPDdP4d19drUj3UX95kcatmJ6hsjKFKJkoTZXW2o1x6AJcrWxykKZES",
  "key13": "4r2EHpGyu8476HdPr6Z1Bp5S6WKAycxEqEA6Rp3nwmL4Bftxhw1Xzb13wyx2GRoUTvoNaYCdYcj3VPNS24EstzZS",
  "key14": "FNRcVFq7wxnkF2WnWs9uT1G2PcQbU7fbBxRKJQQXGXfgWhHesq1gZZt8W6dfcFoEJ18pp6r2CjPY4wxMgue14V2",
  "key15": "52SiHCGFp9RHuS6xu9B7wTRGRR3We9fCRVKNG8ymvzR2fe5DDVmDc9mT5y6p4Kfs4CA4dZj1g6BrwrJYmFT2k8Vx",
  "key16": "rGNsv1r67viMj8kBcU6nXiuYGtqBrKqm2WsCUvKZXoiAYju8pTegRwrzGthLBFskUnE3v9asZfekcnMwg2nUVV2",
  "key17": "5tyzHer6x4RL84WgXGjSFxQf8hu3op8P2TfRJPdWow34SoUQr3rz1v6HKS9zEXkMPkHaJ1uQFU775VnZetgGx4Wp",
  "key18": "4zr6wRhv2N2UDvW3t6amBQw2Y7fu2ijvAqMbY6VfauLpMXCcBMZ9NFG3ns5YmH3K2jmWkRqLjXJ8Mot5Kn6w31b1",
  "key19": "3J9kWnbAthmXaR4yN6dgwDaHVh7gDyYMCw2JTF3KSBZZUpQ7nWUb3DXjX3pPu1e2EuoGZHVYs5gtSMeRQJWko2C",
  "key20": "128GpR8ocZSVN3tuWzVpmBibaJ5t7ft4R6yCrhAgNiypRNtyG2KfP9by8WG6C3kWrbzxEQHce74F8S7yDKaqDv2i",
  "key21": "EGPAn8i8r6gkc5Frph62dnmXRB5GQ4LqzaySBbtJW8JVCn4nYyAqpPKvAscygkwMZQ5di8B8JjyK7hmA1bwtXWY",
  "key22": "3HyPQcFeyU57W1RFDb4Bwv25869iypgro7UNdKy8fU2gziGPaoafGfv42MJHZfifbwdKeARsrxySyoKmpXpwE8Zb",
  "key23": "43UBr7FewpjkNfgDvC53khwsT3Z1D6x3hyvekeeEZd7osRvFed2Y6m1mKL89bzz4Mv14hSqkCJ7LC7hhJ53bQzaa",
  "key24": "5KDiFidoFMqCRg2syW4WzEbRrActc7uNMympWEcbZZSCZwh1Nd97aesFJetV6EfSDfJsixkJaUCqJw3SFghieaw4",
  "key25": "h3sbuirDA2sBSZhcrbBRqiQqJKngTk1riY2sDjHWA9zLSzF7m6j5vtecSHnr4p7vCyh2R4n1w87CM7QK5nCakeY",
  "key26": "jnBkmkLgFr6Wyg84Ze3JyrWuwSBXgTMMSgeBJt6E9yLnEL8BJdpmVMzV3sD2CAfT7XyJ7tL9VzkEQD9Lr9EuM8k",
  "key27": "25Vqkk71GuVVpwMektKpHCwrbCDHAYGPuXBfFX1bRqnsZ5ZWjHeGq6gWZHfZZNnzBgbdgfMvBkaV1i3CGbRhLxpb",
  "key28": "5o7mm7LNqwdLToAU9R1jp4cPXuvvCirJPw8BRQvD1qvim9nRhyLa3B2sSsRb7iWdf432v5brpoFHjn5jFiRhp3xE",
  "key29": "2gUiLi568cmNEEhUeYZbHvm9NxDaPdLjiF5QQXbn5HoEcu6HekgEmCAaGnbfgZQ4p5BD6s9eSxiHPdEzKN6oLiCm",
  "key30": "2KHVUWsZtaJzUzqyvJgybw4hkEdspcmJWCjfX2o3oCbiqh4iteVpFx71U6dyVLCh7CHYJtBEyCzr1fmYv1p49fm",
  "key31": "5FZN2X18m5ib4GUFz6MSRV2iASWA9tsvzJVePxyQ5aWbj5MVaeW9P44tinef9VfFyDAbLFH9cLkJ9L2cY4JTRRqH",
  "key32": "2Sa9TcCk8FqcVGJCNdAMJQynVsBkEuM5vm7M5DJRo1XkfXGpuuZDPWT9iByQKFA8Cr5r8uittGeGS8W6dSSAyTLX",
  "key33": "5voprrDffiZkJAVLaNQtwbHKdb1p15HW11GxgvdZ8v1TRKsNKMM8Wjt6gK9ZgfZCrKJemZPN8j9D7vqKQRMqfRkT",
  "key34": "4aCQAcdVZZt61myvk3n4M9fxpTtHW8Wa7FDYC2rS8suf59R2nf3EftwzGDXjHhwpnSrp63E4EMnFtAiXRzZTUec3",
  "key35": "XLHr1S4HGSz7VNSWrmdMM4SDDWot4EygX4AsSytaKTdc6ZtG1yXMozsEq7LEiZbFoESBYr9TG9CwoK7s6sou7dU",
  "key36": "2se1bFaxFnxsPAC89DvGXvZJCBRLnWxZWaY83rBXZCPagdjF6E5ihxwxXb2MELYE6TQdEXCUHN3SLScaVtYXcAAQ",
  "key37": "4iN5ujevKp69BGbaVzq7L5t2J6wfi8LrvhnN7U3z2A8UncCfgNnLA5SEtxdigZwuDtASEEhr17sDe5u9eCGLPS5U",
  "key38": "4Y3a53sCBpHsBJ2FJciRoCQW8QMWvCj9KNZdWWiXeDRyPmHEy3duFLyofEdXaXP8GCWcLZxSrUBPSh7p2stng3WA",
  "key39": "2GruoCb7Khu9iLMaQa8xaAFUcUuBa1aQvVaX8nohqYAMrSLhnYa9XA3oiNSBiyGSPQa6qsZCBNo1F5K6UVDPgUKZ",
  "key40": "3MpBxz8YjGM8r7613RVtvqF96F5wrFciVEtpAHaes8MEs7ErC3vaeLrQZamBPAZMhkA5co1NAHiotUjbvPcew31W",
  "key41": "31B36VdAHoiB9wsEWP1kHtj3GNk4m5XFRXA1n5So82Bc2oFn9qkyPGagmq9W6ym5YPU2ink3wikg2Wrws1S2D84Q",
  "key42": "4hAQSA1UjptUxkYtPqLQJTUqW61ntsShntcrb1yeXMbZT4REmeRawEybQY4yBywnkxk5WSR2bZRVHH5oLcw2Y1KM",
  "key43": "3dqtbv8Tte9D6tin1UGSag5Evq9aDjQWLbTX6evnSpCagvt5ZKdB2zEDdLiLgNGMb2g1GyBSRqdiTytTuwnwFktN"
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

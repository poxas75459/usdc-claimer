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
    "3Qe1SQDCsY4dV6mTVDYfnFaxsp4UiU3yey7BsoXkrC8s3ryHi5WPotfk4ugrNvogzip6Fe3MZ4HUNRxxc3P3A9mj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NNKi3PDm7M4Qw7n4AhYagDEWmsXuSeu1GU3iKv43qspZoL5CsuicPfrtGQdzVgaTns6omAWc3s15FSuNrWVoaQ8",
  "key1": "5c8TfZf2Qi1H5sFpqWKvdkf4UAu5PyQ2mMgUPPCrkykb4hxGhaeXwN2T4x1kySeosRFS5GZSAByMK7CQ8LJnDstT",
  "key2": "iWSuj734Y4bpbkjbDjbgqWHC5YcUQMwydDuD6PDe1PtEdpnw2puag2DiBdrMatBn21RE48ggu9M9ZZ3LNxVtoSB",
  "key3": "3pNZLdpe116BYaDX4YrhiLsTscF6aLocuYALumGpMn5EGWJTr7qBFDtWavN6dAcsKHubUjM7xMmc3NuJB2S2rhJW",
  "key4": "4rCv2U5ig6gJiUyxYq1mEkkzqXZ4kF2jrpjyeg1mLux1Yn4jEHcLEAwH89oKwh83EBAuyHzPBsB7hrwgyYRuQW63",
  "key5": "2dBAaKMuc9ttZ6PR5Xk5ej8Gx3SyUzbyc365MrXJ8fBGEtoY9PDC99hz8LgHaje8UscST6SWHV3wsetdRQQzk9wP",
  "key6": "4JpwmRNkKSWPJe9WGi51YtckvgLYkMQRF9J938BtiXosTi5w4fRXwTag7JFBsJqK3sP6eWHpYSvE7Tk21QTuuXG2",
  "key7": "J7oiDCieyjMou9HKcK9tuhbZRswz93ftPF8yBV5sJ3BwFrEsGa8gHEyV1QuoFZ7tXz3xyrByG7hxvvQBoCmqyvT",
  "key8": "3kX7CpQ9ygEcaHutRk2iNAHCZ6UKfAuSSD2cVchhEtMVrDhbZASpxFUFzY1mT6ZMGse895KxnHsBSexRw8BiaEdC",
  "key9": "yjk7a5eneyoSquVqbSRiqs2WMNcCwz9fdHUBdbP1NQ7r3hQbe7owfT7zPWh6oWZx1x9ndqCfJ8qhHGk9qkwhmPs",
  "key10": "3tKt3qhtSiegpFDgEcijP1Te1dWN8yiZhZvBKPQBPPTYG9YMowhJhk7jS6Qvh9wqThMmyZWRQCNRtd2pZ18Eqjqp",
  "key11": "2BWGKH4FmxGYEVJAzZrmA49eZYTVcjdTkBfrJRnHedmEr4n43Nnm3LyGR2HpGA2wu7XMid2GK5HWSk4BMscW9m3S",
  "key12": "4jiTU6SP663MPYcrh3EW9fDmdoDiq2mun2615C2UowkwoojwkyyqKaiCk49NEdhSB3nAcEWMixyC3eG8Cg6fqNuk",
  "key13": "3ReMWMSd4rqXSfzBqaN7TV9x2kwevm5x8VwyxmH5JPPvwfVkNUjTgGMKus1N6T3wDXyGiNS774S2VVpmhMRp9KZE",
  "key14": "46PZYk9Jex4b8jW4H5zBJxZDkeGYdSiKYvSfWqnir53atCQhWAL6yzm9XWsZ63U4ymb5zsHpQ5Wb3VKkWnPxScdk",
  "key15": "5eqCdF2uMU5Pb78unf8vANdgWmPMiUfHbnEW9Gq5oic8zoMurhu4FDkKcwVqaHejD8Ji1RQ5V6ssWxmC2SYSMvrv",
  "key16": "5M1SWH1NcNbea324FpEPngh73AVUKxj9QqVXxU4HNMvCv4pSRAvz4pqFAKGrjAMdqQpUVpxQtPMTpXw8pcCJAdBf",
  "key17": "2VpytQsRAV2KdHb4AyiaoKwz6FEy23gdMFMpiRAS61Zet9pqS7TSnZs3EanmhaCCAyvwu5jkgsTN4szxEq9pc3tH",
  "key18": "4U3z4w5x3Ti9gRW7stjnAubzddnPYjtBh8yFXAU6Law7N2uHxpTzPkdTFHnem3AAvMobEtnoJbgANRxMm2vzCMAq",
  "key19": "3E25SkVwAU1mEKxrxJ1GooVYZRVunXbLe3n4dY7v7x7WpjeNfEJxuJ3bJ5KbSBzmpbTM618thdiobmdSFhspT42P",
  "key20": "4zLpqZYjshYctBedv3nuoCMjHHE5sYftPcSGZKUcjutbFMMTMTbtXsCfX1ERosZHtpPc2J672knQyD6pq5mBy1jD",
  "key21": "3xxNvkwGyVKXAW5v2gbpW5QdjAG9VfEnGxKEyFzJxDNBJnifDejE7U5KhjGaf33VifM4mf6gYbCSQQVjGtPWioTS",
  "key22": "caEqtMDYuXPysQJNL67g4ozAA2rK9NZiaszM9jx8hyJWqV4MJ8SKPVQ4jFbftVAuMkGodacvsjF6T9yFpNqcpYr",
  "key23": "2Mbv9XEAFqnVEwF8ByyG8NmNXckMPuE5YKQa4emzgUvkcK3o1yDKd86XUWNUvAUtm3BgYm72sQwr6byTNnuki9r4",
  "key24": "4ADvzszVjqt9YDs7eoarsCQQpVPUDGJ9N5coUoHcA2LAKk56yqHPXCVAiLidDD9t6DR1mRim31ooQ2A35uEmqwmu",
  "key25": "W9ZKRGE7wXMPGKweLYVTPH6F76tmaZPKVHezFucdFahUpb8cUrkLK2cUMywDF2sziG9LCVAyU7xL3SpfbpanPQZ",
  "key26": "3pc6oJJnb1cgrbiTwqAmKsP3zi9AuJwJD65JtV5NRokMPJ8KDcAjUgQLzqwm5w2gyd9AYpTQ4dgNePBRAGhSkUD9",
  "key27": "5Mv3848cvaZtaZ8etafrC9K8UZso8h1hvs281vyncQNk3MQATtk4MYUd5QiXsmyE6etoySiwGv6CRn7YDr1woST4",
  "key28": "BjkSpWheZKmpNHZHKZaBFbSAqep8GUj6fVvBfL7ioPScoALdBSWr4kVx1TcUpKsn8fnH4399B43Gn65nXDUntLC",
  "key29": "4zyJXW1rXqKdLkwLJ8MTtphmRnmPC5nQUU2Ggz43pNtxPdzfd8dYLPck5136r4V7gAmsboExXVHsU3s5jY2mDBBz",
  "key30": "XryXPM1yJytqwmdSzWBfNo4dhuTEjDqjsPjex6r8AWftQYBi4CBv6bcsjH3cTLYFW3RwEy2sAAKNfDVUaeSCgM4",
  "key31": "2FAebsbQVJmB2Wf1CrXhiQex27ADQuKVi19nbBmN2QD6fEcMdDFELsc3ss3RMKxzt228gBBomNAhomL8wjSmX3cd",
  "key32": "5zDLCB9cHksDaeqfHdyVwQmMcBQVWUHxTVeQRWnNC9qCP5tJ4hQhMUBaTE5QbXg1irEdNPkeLQP7XZcfxMwiVbFr",
  "key33": "3XBbRmxjZsqKPEadjYPLPWQZUvGGV2rprRQKhfzsodiNHcF2TUDDmasbmTHccGg9N4EqXUweRVUqqDsFScBqx65E",
  "key34": "4G2N3KpUnvgBjRstwX5gzixBFV5CDUHHH66YUcUsSRWKcqpXGfPD7yGboRpZZtdYrd2rzhaiUFBYy4mAs9nFYL4r",
  "key35": "4pqHsWcVocWg2E2Ztd8Qz7p4hzDX5u2cthUbTjXXT1ivMxVyebjJqAo9SibGjX4pRBESVmXd1oE2HBkThBShyB3K",
  "key36": "YNeyPEhfUs7C4igmynFyHYNiC9Y2Qj2XiYSqhUXzoGuBbJRYJiHZC85wBYxq9cgKdxQAHJFDN2M5ZpS1YZUczZk",
  "key37": "3AmUGGJL1fqKbgsWXdkFiHHqyoopwpsSiCKRASkcErxeqf29piQaksbRNm3D7NnuoRaXZtgj5GrkDDpkc686oBkV",
  "key38": "4K2F5PudeWwj8J1yfu5ss7BGaYD5ZNmpRjXjccDb5gRear4h1WDVACiMJ3ZA1h4K48qafVFHv5A8p9UnVi9FgaTu",
  "key39": "2PcpAv9G2SJT2FGtFK8HXgHh2nkT9XENUpYi6NCA6FqkeLWm4VsQFa72aRTg4bn4RagVHqkWz5QcZwjvv2tdUy6L"
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

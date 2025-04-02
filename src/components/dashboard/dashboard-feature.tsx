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
    "2nvu6jkTuuUxe2GMPa7m51FPVYVSvkebMvvwopu2sGVG8ntqaoPAhDc4R5bDzRemr6dsfx8YqKh9PJ2m3pb2ajU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t1B2WkkcRWVyTrzHBEzSg2yHwkvEZeXhZ5RMGRsCK55eTW7vh9owY2QWGzF9SP12CnBzY8gFL3GeZTVJZ84G9BZ",
  "key1": "4rD7yZkny2n129GTjeEMpS6L7DSj68axKaKrvGn88hFDigNSGmzwXiYFTAcFLejKbHKu7aXTuhadAGzzjz7dV3wS",
  "key2": "2gBM2de9FKJ6bdVmEVGM5Zh1uyqZEbZsmC1YhPfpUbxcE2jRwNpXzYzQfWngNTtwCfhfH6KC7cUayAMb1Df7a8xR",
  "key3": "4kQc1Y1k56iK4ddyERAKiGtinAHUqWYEBCu6pwmtYbsZRXruE1evuZ4vp1YSWAY8756LLLzeibzcoCx3xHuSA98Q",
  "key4": "2jMQpcYh7guYrVKTMCHbB3r5Zb4SYuKLBrCG7ssC52vn9BLAKYQL3wQv7LpfC2dVtApwHbrMU7jg2AQsYSrv3GBw",
  "key5": "2oCoFNvKbs36RdGVx5N994UE4PT7CE1ovm4sdBCyx5s4yMv6KcW1HfvmCMYueNQ8cqgC78ia4vd8TwuuFQbuQ32N",
  "key6": "4UUNt1gPLk2sVWKkCWH2rT34ciRivo3rBtK4bRnCpXtKZ49oq8TZFQGvPtyo6vNvqyJ2HLogHyXujW2gCi3aqk3P",
  "key7": "55zftaw4VTvTE1CDdxEqQtz4LAK8k2gpvumz6ayuzaaiBiD3471jS5RFDvGnXSqbLE9J7pmGF19LWQyt6Gcq2S5i",
  "key8": "2FJ1kcZDowBMHAxYPhXtMnJTme8g1DHUiWKTGnG54dzRxNxAXNsd5xYZfQx91qKEhojPMkzL1rwYo3LADDcAN5xv",
  "key9": "Bqm2FXGcGBfzQGRRoVbdqp4qrUnggVGcrNza3QpH2eC76xsYLDVgeBbAJkNH33yV56aZuQ5uQ2KJtYZrtNxKqGw",
  "key10": "39zuCYU8bi4NtSKYmqrsBEkMPqitq8ZrdJ2e77FQ27x89PUEYBaDcNVwqHaAH24LCWjZKL16d8cgtvRfRn78j4na",
  "key11": "3f2gTQ7rGMB4t3gMzJRGoCAFrGMd3cuKbNsucGb9Xoahr6NHJs1F7PfTGruswLVSzkZrDHcXSUj1BwbG8kDfcKET",
  "key12": "5YRW8vTAjCdArxnKCDCp1AD4z2WFqAefr2vUJBMZuF6vybRSF9imBG67F73bmYpFrh3aLB31tva5nvsrctZvp8WS",
  "key13": "5JhCRzZZj8nZKmChL8gbbHFgWX6tmVnuDVrFufstSZdzAvYmQWsoZLJXiGNMh56boS6GYXW2Ud1kTtZU9Xm9Zk5S",
  "key14": "3dx6kT6uZVqRCXfqPMWyuSNF4yL32j3zpQaskeKFdfrvMmWjqgLvKTV6Pd5ap5Bb8ZDBdQ2cH66QdnhQhYJa4hdR",
  "key15": "31LxyybYFQT7seLHhFhqDBYVhbRHMtbB4vejjz8HD1Q6A856gY6x72cyjXRqkE47M1YBg3vg1xxk6i7JcdWc1h1E",
  "key16": "28mfgFj6U9k3X7R6fh3CmTWAQHNgoAPwgqmdZHRMXs8vYDR5hpQGpDuv7mzWaRtPQZRJHoRd7Rfk1845bqmUktgK",
  "key17": "3AF3xqgBA7S7aMWqEAcgLRJH9B1XRrWLqHPhzPb7jdb9JgYGgeosQ27evFZWD8EnqbX8czodAUUvP3EC5DHVKKx1",
  "key18": "66k1n26PDoSEthKx2vWUHdyVJ8kib72q2pDtEMVPS1u56avwEcPQ61NxG54HLhSZo2pbHBz77H5rFgKbJuU2K2kP",
  "key19": "4Tc2UyrLrUN2JmGQ28QYSc7ML29prUpw8JyanBVo5V6JJuhgK3k8pRo3wWeVzN1XUiwjkDrnQwuCh36dLTWEeWZf",
  "key20": "mhFiKPxLbyQkCr7DvCRhDPqqA1qhjtGRowTXB7ytcUNFkyVDC1dsw451zcZbZfu6ywQwZhTjhpuGovuN9r8TibE",
  "key21": "Fohm7Uo4NJz7t4AtXqdJ2t7DTfzXodFqknYH6335nSBpxxJmWLxK9n5DAtKyyS4wpYTqj38hTcAjcCjwX7Asfva",
  "key22": "kv818yRppj5WQ1E1Ayor7hncLJwWHRKnpWhCt2vsmPqsNQkwtD1kmikKWkkf67RjCV9G1xshSELCtZvz46okHng",
  "key23": "3AY1XuULFc9h65jnTV9LzBJfBa9qVKmVM8CNFpvHvC4XzKmgjAsKuLuebWhSafqLDgBDiNDUVVjpS7AAbmqs4NAG",
  "key24": "4pqKkjZfJXhqf6ojKiJP6ZPX9684rWDRwn4WYRws1XAXE57iRNznhvusYH9NsdWyPbtTJPnKcJD2fCzhChLtBSKy",
  "key25": "Vr6rvvxqKgb6hjZiCrLwchuUbT44rB4scJTUnH8GQg4yXBWaA4U77ciJKFiK8xScB92DxBVH1myRTKfz7BSFeGd",
  "key26": "4zt3p8xm6dAqGZRATFcntsNxzDhoABmtktgQ5bihNKyaFnBeELX7fi7ygbN6JnbUyCAMaywMvxi65g6stoeG2VHF",
  "key27": "RphiuLZidejEc1CcDiYBxZW55G7pYSWQfse798GRqfXWouLuAnTGfTKptWF5ANFA6ri9qxE8DQr7NMY9akV7b5S",
  "key28": "64KugG5tE31SYmE9bos1AeJRE7X1s8ZwueApFm3A7a5TPosV7NjzBaX8poaLFb1Thts8atDS1RXzKg8DEznoFnR2",
  "key29": "3rW5KETHzdKR48byKQSC8uEkT2ouE2orvhy4mAvmGyKpow2QC3Rj35ds7ArCFpcceHP7utyXKMrfDVeYD1q2cNDV",
  "key30": "3BixYW8ACubfY4xPCEEmTuyoKwD6WAG3UrZqCuQ64HNv1mbgc8WqtRmrJL5m5E61RiCjmHpTgVGWYTcJ14FFC9vb",
  "key31": "5Q4t2ySR9r2raAbdJwJ8VjKa5NpeNxckSN83DRWoWUpp7KCBYzwdBUM6NgKyokkGx5ZzEab7xSPzETZrCJnxmfr7",
  "key32": "hS9s9okaiP5GXpzQiwLaX5BHGLBu3v6HDagymUMTS9ptT72ffEJ4xcAkZPuxxUTZN8LE5HNhdcYN9gHou8fQiv1",
  "key33": "48LRrSs1dDdPuXgFH1ziACoQjSDsVrnBtiGhqx6gtfrH3YMVu9Zt9G8GRDYZNxuhozj56sFALeWb9t3oahwHFTk7",
  "key34": "2sBYxsckgUCju6gWn6X2Zf28H7oBBRG2Nk8utUXKYtqETDtegvT2ZUyxFPAXb1YvYE3b4ZBMpyybchoSMmpDCubu",
  "key35": "4MFuJ9W1xMbBMKEa7M7x3Eq7RBY8i9CoAtGHPgKHwpK3SbQTE5shSVRGrveuwEYS8zcrwPKk7WY29Seynrs43ffU",
  "key36": "5thnuwA9QxRzriQArt8LLvgFDwFqSCKpM3P6Yyv2SFth28Sdxvk7xhRWbL3fmNcRqn185R3TxTWWQKccLzPy1rbg",
  "key37": "2YvVRYQXb4jNCgPGDEu6xePHFpSee5rgoS42jUuq2MEzaqP8GMyALt1KpA4p3fKv6judwBvk6bbuTryct4JZxkLY"
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

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
    "3tGnRAApjMXAE2ZnPQignUakZVkhkaFhpDuMvGjqZbP662s7HpYCBKovxmJ1a28DfUNfBrSyYp1GMiZSGae35Z3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V7YoJtHj54AXYEH6zVVtRQPQEbyFdkrGr91Te8dQuht7jhzdXjUFYb6546dz6MXbavXDKrKFmmqQ9vVEKMZV88d",
  "key1": "2qG3ScuWZdu8SiJG8TvfmxVpy31LwRKBnMacEzpsUZiSa8iZqwV1XEEX4WFhZBx1vodsSa23YJ9owJEQknA41HNC",
  "key2": "2upBnZL1Disg63LAKNamK9xB7PzxRuvCEPBXG4QV7AiPfxKzHiLeUyVYTiPMQKGEriBX1Sh9F8ErUaf8zown9YXF",
  "key3": "TVtc6T1Te6xudNEg9E1tsgXZZ6vCVAswn9i8zmLdFTqsK6WKt8Mgu2mv1BHQsDvPdjYYXPKLVC4Vdw67dP4Nvy5",
  "key4": "4wsTWmp9P1VgccKz9syBxqPJVhhaHAaKqqhoyos1wAXakUQytakHAZRYciVKqudWdfCWAkpqXF7V1RM9EShXHcu3",
  "key5": "3RM1kkvSiWpWhgRsV6iPNDV3qPoUPeEKbDroybPXGcS6sfkwsFzRSvwyvNj5VvLb2y9qLnMDZney8BTZ5T2JYXJu",
  "key6": "4FCnFzdqzSxbkCdbydHXreyXvgDsbbormPFR5afJhn4bcoR8hYKVAyLQTSdEP6Wv6p3zaWbVPSBBG4jjRKQkWeMS",
  "key7": "5jjC7mU8S65haBVcgCWctxu9xpDxrwWSrNwnoYtDNqFJmxHDtQ17RaVHTmR1VVvwxk9YUE7SUoZpdhrE4dWDEB1g",
  "key8": "2Maeu7GroeiYxZct71etcbXczauj59PuVDFB1LU9i7FFRxcTQRcaFDL5MsoChtbYfMHFYCbvQTFyxjEGVephdSuE",
  "key9": "4NaVADRxBXp1wLiNysvYQqBRvydFUEEekmHa9JQLtLuGNzomCn5hqJpDz4Uu51H2UT6EBHUk5tDkqNzNq4AgAvY6",
  "key10": "4a5PfKY59RCu6U6zWr7GtWvLkgNNm2NTvLx81w8bsGXVe238Xk8QjBvQBZ5C62iVJJd5r6AVGK6XK1yADQ4MAU53",
  "key11": "5Qv3YjaKXP5dD69x5ViYpxf63A8fsr9unLuAiJeu8uo7gPz3vJDyBaVxw19x4yrAjVf5Ws1t6xvJCr5b13iX15cc",
  "key12": "5xUQoX7hKSFmcdF3BSmR2TxkdnpFJfeuBhrXi82JbTo2Xyw33EU28FfCnUoJbHiia2WaBHpWPrHKBtLamALSuYEH",
  "key13": "9Koe2i1FDVJyCr9iS7jGX76NSakz2xd6zAjSk3y3tbkagjZrZaNqmrfFc4YxgKqmqcpyhKNLsqw2PM7YudRxZPh",
  "key14": "5fvY14WDNE4yHphfKeTLovdVkccHJWxeuTdNjUMaxf824FtAyFAaCWpgnzpcUkdiCJvHqbAaHPcbZSFx4T59ngjz",
  "key15": "32wjbZQHFSknELEmQwX2ZqZMEyVVWVn8xBSK93nvokgtDhejSdfpoW1V1WQF4HzuKWxCnzPodGw1khqe85tb3U6u",
  "key16": "2fKJAAGP3SyUepp8EqdTdagMkhQR9JTUbG3Nbr6EEJKaMgLNUZDRpmPFittYfY6h2NDvARokm5AsVbqAmPHXisgT",
  "key17": "44aT7pqDs1TFKiJHqR8FYVynV8omhdgsSZUZgqgGpQZrv41UCRMgtaywiA98SDAikhGvf3VnUtZBqBjMm6FA5xrV",
  "key18": "3pYfshGxVZw2irp276dtM43azrj9TVDduhnV9XrTTXnKS9QcrrEwWtCH2tPb9TW9qLsQKkNMRHvdeoDqTtm1HEKw",
  "key19": "EFNcupVEYLrctj9dqRrwduKKHRW3njL1hnNCaMb1VhwqdzctZjZqwXboPmKXc8iHtSBAkMGsN7auRWzG512ayx5",
  "key20": "5TxNEvL3Gr6GHdrxKQxd2rpmYoTAqbV1w7Uhqk9xvx16nGVHBXjMdioHHXA6MCpqdjQBSKX3GBECpk7KRmdcQbTi",
  "key21": "zozNZL5K1KnYtRbBfHmbQZvMLZGKWckzZonEkPvo1g1X8NhMasutroZFUi6MTyKoeefV2chN7NYCSNYUXEg1Wm8",
  "key22": "3b3WBwGpK4AiCX8qPD4UHEusRu1baKm58cg1nEQroyeA7U6Cbs3fJthxjdjeW1grs3oraiKNjkTJUVMnYmXVo6aP",
  "key23": "54N6F5Top83SA3Vy34KZ3nSAu9o7rhF33bsjp3VFi99gMj4iwckCnhnXeau33piCEk95R4Yyjr1KPLD2WcSPP3kn",
  "key24": "5ox173QoZAFPVsVTnpV4QCupAtgHhXVphJKHBGy8qbNzQJNXkCuY8HyMDZ8PPqxP28yPZcoqFMekXv7uMGgqEZPS",
  "key25": "4D1VRbhC2hUnQmXuYuNE61JDq4aZezrbRfRiuWVBTB7gHktkGqTEfu6MnuYBVmZXdAwnsTPTk5eQmZwbWRDHB199",
  "key26": "2Gg1rP1N5aZDDhqPcd5j29Kwmt3y6AdUjA2FCafjLBjzzGXBv6XEfrhXAKs7DGTUKpzHz9XZF2aMdX3qeEm4GmR7",
  "key27": "eELeFBwh8vFYwwvfcE7UkMiXeZjV8JoiPgHrhidop5XouRnsEQoW9WjJWhNy8zvtRDJwLZarGQVF76bgcm7jSo9",
  "key28": "215tHYNSd9SKyjLyavSLeYeS78ARnaYvtUDPoVcSWWAjQptkfKPeGECWJgnzKsLUgDqximk3uEMiYEt78V3TaZU3",
  "key29": "4WZQKqcpDYaGWtFf2hdMk4qMpNTjHKWtJYvwRkkmdkduhxt1WJTKatwie8CAb65zBhaDTx6ehcHJJNKYMvkAGccQ",
  "key30": "2JXYxos25kitMwtUXoPhyV2Ukyf1qUQEKUuRsQ449pNygPczFaomKcoPyQWjyB1r9qvtiRiJm5t94KPapig3o2iw",
  "key31": "3FH9iWcBgqkM3YhiFSBJxR5cPWWpwdFdHHYxUaKrPcXrQcKzh64oWxppwRCsVD3hDGQstoXWFca8sQ4J3AnVofMU",
  "key32": "3hoYAJHzYGUMt26GBpNNJJy5VvoZQn1hi3fAqc5ZL3tYfRDAic9veKtJSpJtNjib9BfG6KpiWSCbEBzCAWdzpbjj",
  "key33": "626ATeeAuzgYMxpnGsMApsQksb1WhDeBZm71fTNgxZngZrixQQwfbpNEusxKs7mAajGqVgjituqXdLTghUx2K8vd",
  "key34": "2mUD4xrQmXgmXB5i6dbT9Stj2mBBo9NwStG7KCi4JJSHzeysAYUpZPCrnSwY8wqnKfQaduRBWsQFXrByGmaGHXhZ",
  "key35": "397jbUNmre8oidv8mX1UnF2HMA2Vn7nxv6WYUozR8s1eF7Su9gBreCj7Zpa86j1wvexZpP3vLJkFSdq6Lqnmk5mm"
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

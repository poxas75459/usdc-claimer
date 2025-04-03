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
    "Nskkp1sHscEsVAB4FAQ58ivJ9gk6QgQRwYNVTqKMUvucAWtVk6CpBm1FWBhKKktDYmUWhp4KBJFtDJvRAJ4rZnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YHAVkrYgnLQwhDCBJDb72FHvn3ovCHuFNTjkmaEsReHvrdypXwp2PkHR6k9EhMGeafhbrBsaZAQnvLC67hit9hF",
  "key1": "3GhdomJWRJdTN1baRQCeCppMt15uBhoxjP9eW8hSp2VWjY9ijqhYey27jsBizhuoG5asMrR8GvUZQHaKzUrFhSm3",
  "key2": "3kAQuCTeXmH9w4622ee3iRWkq6FHCGVbC6gAdnhzWeRwNwHEmuk3nt5bQvrKt7B6UMvqQBxU3jcFHoyyMzzpAG3U",
  "key3": "2wwz8FkzMsmZ3QwT63goKTJU2hFq1dDYwEyLEx6BG2Ndeuz9fMCDBUL4nxAsa4kZybGN1seWhiv8bM3efKr1Sran",
  "key4": "4fqPSQgyLHHiX4pRtLmWqA8AFa5z1cxxFYBJFu4on3c81mAT1iexRdaCKfBPgCtHyFJFMwFEjkkyhyCjhBoK499c",
  "key5": "5Nca74vuWCp3Nh6grYtfnydqEZ67DZDhD1foZ6XuPfk2n79wdmYXY6rHArk3mT8kApMST4gdNk9g2QjsuPLekvkZ",
  "key6": "33pasy54FP9hq3nJpgN7wvaEarSaqJjMmxutjhFV6HoEqBfyGFnkhm2cD9LB5DfiRGjodd8EF6MekTE4cvW6xYKb",
  "key7": "4iKAeiNrAA5NaEZcJCbmWkn6rz7fDUY9UGAUexbHPdzcqWMZdSLqf1z5TNLH7RAVyk37PcD1Da9zb2s5HhjMtLiL",
  "key8": "2s2ZuZ81G4WP9NH6jHAvYpSZrqJWtCkKhKV292LUWDVTzvQ2DDhE32GAAuhJr9W7dKtHJYUShjW9HP34ninxhnAN",
  "key9": "5uC7BEttPSqwY1RnZPfrLsXgGn383SJHWb1PrGbj95dB8grz4hf5xQgw8z3EPHYrqfzrRuDoeQp4H2VzJQrarJhP",
  "key10": "4j7WMb2jvKbxJ598rZ4Bn9gNUCe6dFcVGND7ComVyEqFH41AgCCfX4s7Xg43G75Phowj64uiSzs7xY23fNYdDXHo",
  "key11": "4euXsRwQFi9SRzrarvSHQASoztdUJBTseJCcqHrGdJ4psc2qQAZBaeSsKLeP6HAgf1T7YoLzSL7Ueygg36rZHuxJ",
  "key12": "vASDwE9Pt6N1b2NPXTBo638x5Fyd99XnuyJEW8j168PWfMdZCfPW3BkmADRyDt9zpSmndebvwKNpL9Wq1miGupK",
  "key13": "AKPNAk8MWS3qbooLzu5yBXN1xFsznNYBWPKkT4MiPfmYu3Xn9T4xSBq6A7nWN3aFCbKMYv5hdsLF5yFtsLZtNUo",
  "key14": "3D3NgECcRssA97EsfSdLvvRSMX6LLY2aSZcwzqHnMpq9SJ4DkLtanxeZ5r8ehwLWbTrbM5Rnr984cTQy3R9rqWq2",
  "key15": "5zydry7Kjzpu8rX7AePuFJvwWdMbUvjhPcEoScMW6t55ei1szW4tD4jCPhbpTJ3SCgUxyDD8L3mvUxBtRaJqePyt",
  "key16": "mGDNgFXmp3p7YBfJV3YUwYudfSy2jdjSAccmGDRNLcTPoDXnGUA91xVtcc2KryRniFCTA8J2rSKC3FHSzfG4DxR",
  "key17": "2D6GHFBtKzjrs3WxnaYu8wb3zvPXGJQThBFcc1quazwdz5WiBUvogDQPdS15nY75JZ66HQ8h1zV1Ke8c1ZZY7JtT",
  "key18": "2bbCKwMK47fsJ6aHg7jqkMkr4PZCWKvTjDuMeDEzap4oisdAhRdhstvsj2wtqxpLFsvnyRtCr3HSCHxequHu5hfA",
  "key19": "5X8DZs1QK9ia9jomcY6s7JiUQ6HHHrUfK8ARV8uE2NSJd3R6rUscCukJMox4eHz4KzSnEiz12iSdyrkFvpKaeyu",
  "key20": "64WUCYkb6ysECZkeVs44TnZhj8Qxaujjq9kFvbMtPyPHgfiPYV52UYtWJiktP5T8ausPd9b1P4Nn3Jm12VmkxTt1",
  "key21": "XY3hJrQz1D4cvEtW7kz4BrgXXBZYcZuVY3eg8KhPQ1x9GriiuXerRPYxKX6okLuVDFKd1pawKKby83ePfDT3eNw",
  "key22": "4MeHDNSuc4a7V1pekfvPtFGKz56ZaVenH2KowgDuox6VbFqSVutL7Z8ZyLnJ8iXk2tEs5ZjgwEajoV8ZX3qUfSQq",
  "key23": "49hLJFtaNTwpLXRkUotTV9f1fXsdcA3V51UZ6pPMxvWaMbdUuxeBbaHvPzppqUMzd1HrTSaDTZkxa4xoc7NNYpu5",
  "key24": "5drRrxkXk5EGtthHP3M3rdTzdAm6DGkncimUcMbrNsF98r3bhyT5FTrQx7L36g3reimuxM1DvvJihZzBK5rZBq42",
  "key25": "Pez1cuoo8RkJN93FcgiLSCBZT6rtCfiSXurDVCSuVXcAFnFar9HQmDnkEEPq3YKfLYN7VXc5sH5uHBkFpTPRGXn",
  "key26": "5pdVKcBDCR3NuMdvSwLRPG3nLBrz1dSB7BFRBwecNycwyzfMBiH7CwoFBw8dp5Fr434Gsjy7Zks4JFGCLrvhd1p9",
  "key27": "3AvTvmYcxKDzN52892SbLWzH4XTwRm22w1YemL8TzWV4xjXFWSUAtzFzYotJGGihXYfwmZdytAkSrBpArNUNSah9",
  "key28": "42U6aQ1fJLGbGyhJCmVbsao2pzJj4FEsGvBNd4XcFTWhcDb4bLWwJRbyBz5L1xak9TBsvK9nXFwavkjR6MsMnoYz",
  "key29": "2t8sBRQHQhfgvC6sMXB8LwNjjwRLtE7zpRTpCqHTvd96Yft9snmBNJPoUQRFmX9miRka6mNJ8fahmdrgnZe2vyoN",
  "key30": "tNEMJYDzPzkwgQ7PuYzRu1bEXyGXnmZoddHPnMM6gsXMVekzQ1QCz5iM8nW8EtwWhhzhWVR8otnzSoTvoDScmVY",
  "key31": "4WmzBJjYaEeVuQCXnM3nXRatS4rSiruBLhuzZuVUPAo2eSfudn89KwgYTyFTvSA59h2zYEf8WVuEhHNwkhuNeqMH",
  "key32": "3Jyfhvbcx8qqC63qbe14BfK8FSmKD4E7Pw84WjBBVPdxJYEUxFjfNQcLCkv7SbtSaNzKakYpMUNizpEEe4GibcGv",
  "key33": "4x3e9tNTu4TehSjigJZ173CtnQiVPNW1FSDNfjNfgbLJzN3EEJ1PJSug1A9xjTkFfiA1Cx1DcX2VCWz1VKdj4LDh",
  "key34": "4y971jW7LP2ibGRwfrgkVTRxJtyyJahEPMUg4qcceh7xVbbQe8a9Btnjuvj3DSzFmyRpNPVkhx3pEnvhSkyF7AnT",
  "key35": "4NgNG8W3RRRGdTTCmmrLesfY5cJWak7sTgxa3B7LtUuLWYzgbnkoPP9Juqh8PdZVtPH4PTyTo5nhGKzNNiBTXFVc"
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

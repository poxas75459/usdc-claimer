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
    "3o7U72KuA256igCKDHMAMJUeMvoVndUGsVsEhtYQTFhEEpeRMqkX9gQqF7HqcnvhJc44qTByKvpRwvL6peRj2zbg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27AepdqDoEp1iuujLQBRLJ7GvNsTk6KL1GL6HLs2YpfHqQyubHZTcMetT4PgNRTkGPEPWnbfacZpPFqKsFG1vZjY",
  "key1": "Q9TGe1AkB8JM6d7n1PtykLtVwRR5NsjqQvatH78UL68xdq7EgQExH86oMkdVw6PjTc4wkoyeyNm8BfawzzSKhYZ",
  "key2": "65JMmAj8rVYeFCdwtPz1NFrn8p6MafRiRb15xg9oQzyWjaoRMJTMLhCtzCPmGsmkvyBCMDaDgirwGaLMys52YY97",
  "key3": "5Lh4gPjqfdG1qSZCbhk3A1uzc4FnByJM64UwQT9NSZCaDgtZP21XrgAhXbu9fEjm4cfscsogAtvapsgeJaRj1oCC",
  "key4": "2WTh5snF5bNaMUtDBzGjR5NTTDoBWRnwxWCnGWxMm3KFkBeZXSohM9ouGLavcHad16sZWnM1zAzyeanrr1aM8m32",
  "key5": "2f3kDYvEF3vsPQR4iVrFtrhGiNhFB4vxJEU8qqqv2veyU2WwzaiGSMhazkE8dBbtpNJvNjvTLtQ1MVGSWpGz9qcL",
  "key6": "5AcYPn5xL6C7qva7MdWXQNmPZ37nsWeqa7bSMC4nC6joE1yM1V7MK6SZX4Yedo3cgxQh6pQF6eiPDVYGYcbNiKYb",
  "key7": "4AJukXjC6neUYk723Us17bhshVPmPTq1gBoRBA6exZxZT3hjTR45vfKn613kikDvUptBEVXswZoueXEr39NLDTY8",
  "key8": "2SG2sSmzN4YxwG9Tvg381G9hxP8WkjKmTWGV8oUF9aJ62VUFCHDPoXe71ks51ccNsvhP9UeyBus4f7kCeGmvnpPK",
  "key9": "4TgPUz1RGThCjYNSuiHw4MNsykqgwcL3MseAfqxjrRBsRBUZSFpsKkzrNt5Br7D4Xen9KJrTCZW3ST5ye4Njgzp6",
  "key10": "4VDkCygLtynDXDqKRQCfrJ9XDNFmrMz2H2k2E9dYyNn6x19Cmqr8H41iaQ7Vy2dQr3K4CJm5EQA5GVehvsGx4nT7",
  "key11": "5hmBJuaxtNMXREv7EquL4GvBLzDgDg3XpQrirL1pKPtaooFEkMCUZUzw33yH3FhM3hnc374tBgZLAikBw5Z4Eo7J",
  "key12": "4dSHEdYLaLB7s1hEGiLRqmiSrMACePvGLVEozVptSzyiMkXf59W7Z77FhN3yu7GqA4S6JdsTwGBacfKUGKewAAVz",
  "key13": "KGPxRHWgr9oXC5MoiYkxaThKTbrSNk3qdXULHz9Kme8Azrd8X8ZsLYXXicxsvAktuqoP1MUhRPuao2MVQByMZ4J",
  "key14": "et3ZzCLb3bxMAxtAiiBqMuD1ev2y2HWHCP5BSk9GK5K2iLz3nDowLkTVmfVTjtFRnSPASUiYTK5iTmR9baW5tG3",
  "key15": "4hAJnWec6c9tqa8rA89J6o2nmXd8gpsGw9b1Ra2mvK5k9H1gHeXAgFoBt77SoP8MxAy9yy7Myjbs871M2eEntkWx",
  "key16": "5MyRyMkN9gduC1KeicWa4YS9CW28AHRaYLiymz9uGY5acPBwQBEonFkwTRtTQmgSQe5QRC2rFLqVEDfZ374AzfoD",
  "key17": "438hragM3rNKuWSpB63aZDCz5ME4XkVxKjRoYWNjhfKTem3GeGVs6UWatCbLntrD8PL6WfJXnJsaSEBbBM9Dn6ij",
  "key18": "3aQ7UxLqxLfQzcxsbk7hEKWaS7coS89oqBD26QihiiYwiyEianGj6H3qmeJJFPzr7UkPQ5nNB968HGZCVLKsgeXM",
  "key19": "3MuNZzfHZ6qQwDW3kvjX9ArAjX6RZqhULLFWze65JVipDLD5F2523Uxt2dPqU3mj2RHAqvzgnkUk3LaFnLffVaxe",
  "key20": "eCxeux1ZbHBbcfE5VbGWuRjBhYK7Xf8PY2DNgurRgjD2fJMpVCPLovpkSMSAhJ9aFuF5HffxLUA2A7mZ51xRNRT",
  "key21": "58yuM8x7YTzy6i5DsFfVp6YTRvvr2Z27PNsmJ8hWLGkjcR9L9FWhNkri2cKUPZEzqLjWxFxBiVPi79PatFRTsXTL",
  "key22": "4hrEZo7B4gQQNwN8zGssahuwzm8Jec8UJX1xGohaCLSrggGUUHNitrivisaiPmRtz8gscC8ruYMiPAkBNuxC9HKp",
  "key23": "31CQfrTE3Mrn4fz9LoBJzA53n8Xz5LAJBi8gNWj5wnGDEQyVjhsDnxr9a7TcCRgE1dwiLHEsbv9xj4BXWWeeMQyN",
  "key24": "4QLUfr6Gt7oaa5GDMWftAXLjXCnkBGV7BusBwbKfviUNVWrWiHm5TJxG8sAwn5jEX3GS2wnHgZJqJwurUK7kEifR",
  "key25": "3vLgQq6xdErVG15RpFHidccw6pZ1AwXm65aNP1sWj4fCS1LeGaYDaTLkSeM8RpAb7HBfwVFd4MzHm55Ee7DXr4xE",
  "key26": "2Zpf4F2vkodnCHmVPZ2btS3G1KzHtMvGyoZRo5TLe8auxHSJjCcH49KZNsmcWmtLJSzC7spYkzN7AbNwcq7E7NBN",
  "key27": "xEZUvETBJuadYFXSQPqW7KuQ6JdjyABHgtV6BDkVrzDg4iPbspSa4G8SHdk6ugRfx9QK1YpbiMaXPJmTxYzAisn",
  "key28": "WwMsW8upxHxcQDvnJoaT8p2gyrvqQ8UJG7C2vkRLuaYosyNpAd2mkDoMMzxFyhxqec1EzTJzH9ds3qWuUDMVXbe",
  "key29": "4rYiQD5QL7BLDMtBrDFAU1iCKJJmvVW55LGEpJCenLX8Ypczy7fCRwpGUEXWAhCK8Syn6iLNsd3nqNSfsZ25t9pK",
  "key30": "pffHT3K9vzSmN2NSEPPvoX9uZ3uTtD9tDVWyjL3Zk3BBHXAGE7DRnxf5ifJxjziJewGyDVRu44uYvmaWjixTeJB",
  "key31": "55H6C8euCiQAdkQv3NitWH6Rx75n3rz7atX2APByAfdxyf4MippH5y3dGDEBVTRfkQicaEApJxzotRuyy3jUm9ap",
  "key32": "51SaDMHVTtUK9hRAFqR7AtLiuXX5qR2gPPAY7LzuuCMr3fbSAiCBLbTSMgLdWVteZxPh7FFQTCPBUmDXDd4VgFuM",
  "key33": "4jX9heUAErotQKsvtA8torWgqJCM5KezG7zzpJtaSQGVh3NwEQD1gcTKCubNwrSyNQCME524rGwYnoFickfm7ATD",
  "key34": "4CtMQ2BYphFv4Pnn6bf6Yk8i9cmA4fBbiJUzfJS3Hgcua3B3Ue4qcSHbbBFF7gTa85PzRTSdLj37y17NrETdyXm5",
  "key35": "2bqPkZ6x6TcWeL4VhLMBK7YQJQVoZuBF6VAPaehCwQkknsJ1o9z6oEdrLgUkgds41ME5MScRZVHpuKKUsoyeN7vy",
  "key36": "3fevsNVRYUPxSpNSxef4zp2yw5aGwJinF3vk2CoJG5wxHtHsVk2kUGRxsEi41tdry5UDKdcyQL6vPaHoi3nLUUt2",
  "key37": "3vzXLwgojQuzjyNtwdbUTWLGAAJfv9q1Dxqe7za4V9uWkC8hJgZitoXRryMAGfsDH7xWkn6ugMs4DeETJumMkhkx",
  "key38": "3pEGocrYQ1DcdwcFHgfkcgcWNq6fiGZJZ5aRxsDeCpQeVrbV39cgVGqxs2mrRHiNUKeZnMLxd7jf39VEmFqYhc3K",
  "key39": "3yoJUfhAC6opUqX5XjUcXD5qaq3ZGrMnPPw9dRxHfRq5q1JBybYZQsSBJkZj9497xuvtHTw3BNmwXZqgQE8WRejr",
  "key40": "oqbBDnGXfq62yexswP1g3q5udjEJapMZGZmaqTdJSGayoSyXHw9SKjWxWLEZVbTwAKpBdRiH5Gx2L5uRXL8R89E"
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

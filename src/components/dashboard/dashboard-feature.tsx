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
    "4zfpYPpoceMXV3Zjch4ajqGBohhtmeyY7huwHTGxzx4FgeH3vDGrrU3E5iEwzMQ37JCAvVG5aBHBW1ndSbhqVwPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gVjnPZkUvjN7mL97JapdfYphBYtMt9hEJvLq1fcLkwYxFN8BFh9eiXVUUXCK3oo29x45bA3AwyaqfnTvivfSgds",
  "key1": "55JZqGCrMARST35cVKPHUTnzfZiyMxUcs1797MSifBDyCaK13dLeU5r1d5FmNa73Ni1orM3LoNhEsQfpy6fC2VQU",
  "key2": "3RJAvfysZGrgbd78DKM8mjdpS64BKTqNFM8EgZpamgFvUus7fEHK8TUxBJ6j3EZ2kzd4KjCxZnLHGFBKBa9AZ3Yh",
  "key3": "2kHT9baUugcH9G1xZxB7CP43X8V7px6yeqMidGiqY1qEew2r129QsGy8sdLq8dLPzr6xMTknHZDXJeo7Ggpfjm4c",
  "key4": "tc12fQ3WzMohjTRdkGEveKcgWyzj9q18PPHx2tykCKCdQxswrgGuUsS77aeQZsQSbU4d1bhbk6jzovrUopqVVEt",
  "key5": "66VUHgNncKXfgwTHQmrbvT7PBiuRbED9HKb4YMZ18KYrwUTkVS7RooJuaaSuK95Q4hzsiFtjG1h7hJj9gTEkM2Zg",
  "key6": "5UcZNirvAXNnbzkXJ7cs4h5QQkAituzXc2KbkTv44JP6pjipAUXtaSaHBqh6DfiDyGUc8Dh6e6XZfSCbYF88K93J",
  "key7": "3FeEwWc4AeXqyp4Rc87WajLV6J7TKZoNGcCmCsH9rDHnk5hfJprq6Dtp2JYTjEZmJjzt4A7vBJdVpLrmMow7p26r",
  "key8": "YRJwQXxCq1hTBuHuUZTsqqMEL3tHF81we3stdce7wnfcwqCqd5TRCzEBFSD9iSRSQJD7FTjr68DotStbuRmKARV",
  "key9": "5cEoqUYah1utHN6GpUGPBLs2KF4f1r6BxYtfJgD1maYvgMj9e6nSJs34WzKEsu9onnMA8sMxNQVnjK4RBAeQugf6",
  "key10": "36EmyiQXHs2N1Fa4riNLCxfjUyhMToo7EKfyWyUcEA1fKGQMPht4UAVGBjWTVuQQiM4iYXRKNFZBYBERwA36aEvN",
  "key11": "sj3k4ixPjHrKPMpckRP4XNGFtZqz5faQCvvRAMbawnQzxwoKEbDCrLRXqJrhd6bTWUknakPb7V1t1oS9dbQBBUk",
  "key12": "5gvpB6WF6qjnEkbbFPbMdSjZ61VMALoPgrK1un8yxNmq2iyrE7Q4Vuwh3icJya5URUFCgMPDH2QoYhN8uADyV2Ji",
  "key13": "33ToAQRnE14XowFsaKcXDLZWhqr7nKumVjo1yJWn6drm4BsDoLwsGDnMHD7y2ji9JD9gWDXubL8A8J3d7LRpAQqh",
  "key14": "5a4e6SX9xWnE4Ei6RaoB8MyRtPp6cL3GpWBpcAYA269wVJTMkNMh2NbabCL3zcyoioUJ2V5t9LuDAs1cEPwPLUEy",
  "key15": "53vzru2mcLQRPBmw1EfSFzXdfnVgnYaM7h2bzPn7pFFoG6iJ74PSaZfYThxvPHbG9KNBX1YHYiAJyQ4wF22mbu1Y",
  "key16": "4yASE56Ctu9JCxYRGSqtkry2GEBn3fHXnmZKqaGDabMrL5ByFsw4cgfjUaHu31J4wxjBHvJt9cgLEN5YAfivJjeA",
  "key17": "5eUbNPVpk4yNuDh1yWJP9ajPdFwqyu4Exj9sWZnAHGpKLSXV7nBftfMfqidmyN2sZSDRTUWWNhYUtcYAGZhFU2bu",
  "key18": "3SPP27ULtrRsbNF2SKg3WhrHND3QrsjqUduMn2F4oTv3viSQhZtJbaurHe2AaPkMa5GgSxKYXx5t1NbPp4vrhoYU",
  "key19": "436DJZQGv4k7xeJWnscmKht3sSNnSdPnprgX7ETdpLTj5V5zCbWViUeX7TRc46dj7r7fUoKCULN5X5BQigynGc1M",
  "key20": "2CZyxkqpuFjtomuaw9R97nqHWLrvjgTMKneAXFANATBddGnop1Pp99NhZ62KD8hkonyxV7xd8pVKiHkBzTXpy98c",
  "key21": "5paGLpDXecbgXCN6T3Az6fUC5weWNwYHmTfdRqoJv4V6NxSxtjxQrPbifkgacr75TSUwwuFQvCdTbe5fTwgQYebH",
  "key22": "5yviBUoFMsrPcAr7xvhnv1TgfMwGntaM553ZTTMBNx9mfJXJyPxRGCdiTAXnLHYVTCoiyERzf15anXpVt7yYYfK9",
  "key23": "3AQpBjhrao5wAhDHpgYN7GDN4urXV1ZNvyzECtkycQHZEn1R9hmran2CN6NWVbKBAmKr1R6h1MLY1ghMJ2GUyyqq",
  "key24": "2NSYJu19Ggkpck4b8M4mrsFRQ6fqqXMvkKwSDVpSnJKEnbqkyRt1vGSbjjVYVUEEx5dYsMXST5u9mSrCrq992bMB",
  "key25": "37y1uKZfTSURLB9LnjQ5AvHA2kT8pHGxWZTo8Mxu52DakahwGwVrr7a7Ae3qhy4NsG23LCPfzY2r8xrdF9QkpTwV",
  "key26": "4nkq64zgVxiWMnnF7piZC4PxR5NSSQXkAN7A23MYZXC6kcgGxkwKvxdVkseneQivt4yrrWWVJ5tjrqHMQzeAiBEF",
  "key27": "5GoW3ytZxNMtBueJLS14DvPakakAwdQ7ea1A9DxfPtCG5Wa2DtLYNEKCMB6tMcBoHJtBRqtCZWx9veXwBFtrsirJ",
  "key28": "4Rszt7dioTBUYwgmHW4K2h7VXJmcK92CfCyxGuXFe86NdDPZWo97KPU6sejDQ9SqyeFDAZTTapY3TrfduHaYTnqn",
  "key29": "4NshnvdUX1T1kcsHXKZQsQNgPY6yUX4wQUBtAfETDHi4EdCPqssaGBrKqNsb7kVysH21zHm546pPF2zxDNJc6Nbj",
  "key30": "5N5Hw4v2NXmPRmYm8HDNFWvBbcBm1zhpsvpoKtHNLXbhNonemeZ85X1FpD1UEXhtry7sF1ExEfWmBLCDQw1ctpEK",
  "key31": "2bUbSoXrhFd1RKEbw8Fcr4BnMn7LhDJqyFkzHy83xhRpbAt4QLYBM2mSNQU2RyWWFXTa2aoiLGWgo6BDbsRdnxCo",
  "key32": "3duuapvd99Mt21ukcJMeqMGA86oE5Phvrt7fuxXRdhtbY6DxE6Da3rSzBksitsWGYExaL1oRcjD57YX4tXA1se9L"
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

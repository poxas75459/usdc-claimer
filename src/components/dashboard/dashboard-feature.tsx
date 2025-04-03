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
    "4NDvBQcLk8yZvBYgqus26wd8JYTafyjCEpLhgxzYv7xYCEoJMHph2opHuwhww1ZtxrSJtG6eUgMaAN7jGbdR2EDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2utSdfyZyGM5KBJMtH2bmQzvC3CbsVbXFzVbfiGDxspiGMz3KucF7waH3FfrAk3FWzXpwjE6sHqnaEDMVpRCracb",
  "key1": "2h36UTL8y6a11aQoE2cxZbzEJ1SQphYkVsvGc8HFN8cF88WqEwSx3ApHhrdv6baEXZveEGvx2Cc6MzzhBsGCRuVN",
  "key2": "UbLN2yMiZYe4PZBfQXyfLE19iUWqqAfdf82oJeADiL395F8cSZetE9EEHFGufLgQRz6diDeQ3Dh4EATLyaeb6Gf",
  "key3": "3FtBsNeWb4VZWRqDFFPZUYJVCw1UNFLTC127hPoHVDD5CoiXNgQ2t9bXt9E2yM1Nf24HxneeKceMDN7BGDM3cdCA",
  "key4": "65SdiwsWv5jvFaVhCYeLxEVyEkz6fznebFPQaivXaziNz9dCRjqAKhMzeoAPx6gDrDaikHkvfEaCZMCSwzJuuB75",
  "key5": "3HivDvXs19JfByxUZ1dmh1t6aFnN2R9jvzhJ6Xv8KSAgRwhTqULUXC5DtmEHoVyTVoQ4FPWLMoWoz4eKP9a7UPm",
  "key6": "57KZMhyRfhyPgwBE7P8vEqfL4YdaC1i82HNwu9wxu7yHDc5FnzzxwJhmFxzcMfb8w1MK7sUUQi1zUKMLoS3XUsu6",
  "key7": "4YD3ByLrjs8TznBkA2S3y6zqqq1Muta2kvrEhbg1jZ1Ake58kFws5k25ny7mVDw1j9fZZs1bDyuMcyFcvr3cDEG7",
  "key8": "2jzLSQbrZR5kvdUJPJ6QjwXeLK34ognZ1QtUJafqor1z1EAWD1YaYptn1XbQyPpKSjrvsbxeUCPCSNCGYVCa9BcB",
  "key9": "2yM4G4Z3N2EedLpfruCBFEPhUkWTFg5FCigw2siTcwK3axrfzkdZYeYKscTpmuTzussGauVS2qYdLoWFJxf9TTnk",
  "key10": "3S6yEzjz6r3akGuxpWyyWniUMjMvFahs21mYfb5GBSdRX9KrgBZv4HPiifAWJdBtGUPDTkzcg6BhHNcZAx4c3NPc",
  "key11": "dtcMpyYmbLFyx7TMUD2oGCtzFxxy22QDB4uaeDdG7K8qTNzDJwQf9FfgrTrXD5Wvzv4YvYHwBhrScB3ar9Lw6Hm",
  "key12": "4dUSFpPFg1kYRFrUSYBibbnHVXSRbhY8j1zpFtpc8YAX3wfMM765Wa9rQ97XfWu8phHCBhgYmVoyBGRQc1q1h51v",
  "key13": "4zeoBTqGrCvhdBfrRJme4uWkVeks32JdVZQfX4bZH4z6bXNPg5xZg2TLVfMD65xTLvvnsKAiCcUNzLRu2rmzXdf1",
  "key14": "3DK3rgeDkfkYpdCGjT9fiRnySUrnYdvXbQYLsmAzp2376XhPA42aN1FtA1Ew2d5qr7q6br7YcnKbPq6KYPsMaTED",
  "key15": "ruLRKHUV1okSn4D9b99Jqg1YESQ5aDnyFYCZv9tmDJTas7VYyU3aLbPxXz5GqUSFZmFGpvnWm5pCUNfxR9QHv8M",
  "key16": "4LnpPrbFSEoB5dpq2ZvqzwmSw33DL8Bo1KKEhcP1du78oMTkoSjawS5SQNQAfV7N6KHFPZ5LLZup6xpnJwkc2C6",
  "key17": "2fNW8C6vTDXT2ufQKWtbnjBTCnHYrm5uufGV1JgZ6eihTWn5sigkQ8EVfoHKpvWYBMPhj4ae4fztAANsdMPjfxFh",
  "key18": "5w28PyXr7UrsJMHu5KBCMPr8wpsyCNAo9h1UfaVcwmtcy5zpZKb22qBAAoQbMcqkeaFGYxYNYdFFW2p5DjheAfwB",
  "key19": "7YdGpteMCCxTDNUcF2Cs9Ea3fXz9bmYBJtzUx1yRXT1tVf4GKPTgtwYXAvm83ZQ7hg4nsq8k6G9j18yxVk5juGm",
  "key20": "38juUidWzGwD1yC321PXMUHduTjegtTUihnxrp6ftJjP1mnVbySHcjWVdJnKFhstp648jcdB59WqZ7aXUVNkdBfX",
  "key21": "dHoVEUrjU2xJeQjA6YmVkY9RcPBevpdiXF5jFcP6V7xw1N9Wdwiqzk5W3vCR7yuuVxQfDWAgn3DMsbsirr32cYX",
  "key22": "DtLyniSDcBykfVLc3dsqPHgWJvp597FXYH56cCdVkbaABjuxggMqvUqDTP91UpDvqY44gqHnAx2n8swSd4pn5uK",
  "key23": "2av3UguoE5fW8o6Gu3foAwnVixiMLFkxcPXCgjc86Kt1Yop23KpiGgGaXaLf26KZUSvnuTjcXLs2qUfEzaZS7cg3",
  "key24": "52svs3oUfUVZEWtKmyFSpuKDHYHBKsDj5yze8gtNzqBsV8VQbZp5pXhmzFNpJ2D2VREx6rVCCuTfZbJsEm4fFKip",
  "key25": "316C2WgTbNxvxjXkcYUyB9zdhA5dcUx4kNqWsAykxJVyi36FhdpUNUWJzYbxfhui8J67fX8rDKVF2fyYYZFADtvq",
  "key26": "4ZKZkhdj7rud93Va2DuaRhoksZy9LwSHANKvERooyn8CZmV9hDbs9tJfHM243RtCNDy2LQjBmgQTGqfMzFUDJBSQ",
  "key27": "tycE86caVYRVnumYVovgCcMhYPixRBCvhSUv8sJrQC5Q8PponRXdyyr6ZKBJJ5GLZdZRvGPR2sLnFWvDk2zjNMg",
  "key28": "h9ugarm3jW5QjhbVjx9RYo2iWqN9YMR5aE2XM7DPgW8wUUdbViQWKcseLEqT7DfPZghnCWJ3KY2UmSvbH1sjdmV",
  "key29": "5GsLDBAyKMv1GUVYr8KdXZGQkLh9BrDk9VvxBa9K9UdS3HJtcvJ3Cgyd4mBL5dsm6A4Q8EbucwjVKy8gE8N8ZyDT",
  "key30": "4oufTHEk1vcNJqz8bMNb3tHMuDbBJPWP5dmELHfAcwUurnx9aLs4LTmrj1sf6HLFdU7Jw55S9nX2tANbnbMdfVWE",
  "key31": "5fzDp5hSStgDyahHTiU8Z3atW8ByjLobM5gfaqAUuDitJNyqK43AzKwFLinrVJgjoEu6jUXWZt3FAMhQXexeU9TD",
  "key32": "2G5KK6Ze4JsgyTMMDYmyoFTgc1xhwKqVUyME2ucfNRjxzKFUwmTVBTAV8WUG1NHqUmtUi8Vqdms1ZhBhtzKJigLw",
  "key33": "5rKVgdq2FLbAaJHh7kNSLikeD6RC1mSy1698wuj8AN2fSTv7Kmr8rcTLZHsfTVa24oEpQqaPV92LjSRM9xCKzyf2",
  "key34": "ECHsAqTRgnyeQC8r2phiTCJ89PoH5yc27Xu6LFm2pKX3XW22rQjYuNHWRw9k12t5PYUikmJgRoS99EYQPKTcuia",
  "key35": "3zULsejnP4X2ibQ9tJ2Sqm2eb1bwJ4tXALz8Nqr9D45FjwKvAgBLvo3GdiRK6oH9tzKMGcXG4mm9J6MK7BJo1jPr",
  "key36": "4YeKtzbmfKjzhjLXZ6LR1tnrRWMWhwzqV8MGK2yNiiuj1KLsRz2N6uMnvXXB4Jr2B5mqnDUd2ndwb8wSwgL2KvWv",
  "key37": "iuCUyvUsYnaNqEtr9JgNY3FNoP9Ah3MjuKcst3ijCFroQSWrLEsXefLDm7SDDwNo4MpudQnJE6YnZbPmJahRgfp",
  "key38": "4uTNtHYmZoeo77D7QwFY3A2vqN1zZpZruRsxiMuNJ5f5aFiMrQpUAaaxTE6QDDXbYLqJLgNMwm9bn5EbeiLcn7Dy",
  "key39": "qj98FXwcF9eNLhir88EAVmdt2uaSi5pmDraHQipdSXJdHdgrfZJb67X1nDCd1A8cNmVcaV8yBGV4txHvip7AdeA",
  "key40": "KTsUiKGfFc3LbbWN4ddzxu8B6Lh1fYdjq4Yhf64aV26RhNeb1YwqNPXGdGayTJH2aLjn3k5csQgLY2Sp3HYfBUy",
  "key41": "2fgaBX1Tjo3vREG8LbYAZ6ot3mcSbX5i4Cs2Ght9EqNsqHUosHMRQ6JSbnfRfF1Y2Jb8Jr2UWJDBh1gRj2bcerYX",
  "key42": "48FnyboX8XUD8uJ9DH8QvTnFrwsL9Z2Y1j36b57UXj4Li8fycUg3k9zw9RNaXfqDnSthctMRnjL7bAfSRFMhdHGW",
  "key43": "3aWcfxY9MdZ9Ct3apQqY4KCKCYNPQqymRh259AYovFfcVLQvuJf24EobKqyMo8LeStWhm21aXc3hmrutUR2um5gr",
  "key44": "2A8Y1SwqRSvRarfW6CJknTZ9zHHYpyNTQFUFQJHe7io57ud1k3TRjY5MMA3wADPzVLYCUa4urcCG27iWosSywf34",
  "key45": "4GzjxvsTyPJ1k82qLm2PSgagscdff4pD485buEskbehUHn9ot8fdM8McLEomzXKTnCU9xZ3aVFKTy2cmwBCBtqNG",
  "key46": "3fkMj36WMFktEacBK2fh11Z2CbQCzpaUEthg1Jn9ysTJ7J8LevDVPbnkJbgNRS6LeEujZsCUK57Vxhrd1cXs3aT2"
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

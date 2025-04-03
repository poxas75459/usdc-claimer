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
    "4B6DW1csSYbDYghQWuxhGeT5g1fHAriFUDXeRhodH5SoYkK6t9GLQLz9JfJZFvMFhx9Cue9CFrHFWC3sRjGWQfHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8zuQ1oSptChy7Xvpu4eMifZw3z2FtC5ist71XBYxZCAf64VmZ9nbueVXc7GzFGR8nmjdhF28qYcg48txye37Lyw",
  "key1": "3V6QYKcEaCgqFV7CL7QUuPtSQn7WmDHCKvucnUJu4kY8u55mxgYpV4Zzc29QfHkGLGjTiv2k69FdgVaWAwFB8vkj",
  "key2": "27A1U3Xjyit2aZGJcu9EEwLx61pzD1tCTWY8RkRh1zp4rRxR6xJUH8zbWqzBVALfPAhfZ119bbf7EXkDEhj2Hbz8",
  "key3": "5oCRrHffK2aTmXPMT5jD6fX69H215qJbj8p6ViqmhQv77LTQoXZUXwHd8p6cFrKvFjeHg2mFW1dK2vcm4YMx8BMZ",
  "key4": "ibk39P5e7yMySPt6FxQPmcurC8TmygbUJYo6MFvGTDZYqwaqbyBBinNGtgKHT3aeR9JiGsdr5jeWA4scWdaMada",
  "key5": "5WUk3e8QzLV93abjbQtucpFWUSPZkP7nb9iAVsgt8yL7CW9UuEHfZnKU4j7a8wd9867UxZdiTL6X4DXCuxGz9mAc",
  "key6": "xDHbooGGfqUf5K3zyVYWDutQTnGGuDwJdyHTPTQgohLiRi4WtSiXrreoRx8MVvwfg5X3r7CFyWr4ipoHSN764fN",
  "key7": "RxQNhqYPZG9VVVVAwQzXNRNnoYokbocADZikPbnuRGpAV6oDvGDdM9uYESvkGwiaPDwLQ9LppMihunvbCyTS2Mx",
  "key8": "j2ukJhaCkCkmvPxeqmjzfgv96QU1C8Li5cKwmn593UuFMaoiMNt1hKNXa81x32u6fgesQVdkBmjEFSagnwY5qUU",
  "key9": "4FB87HxstksjYyKgZsdNSzNShfAdxov3KsqS3CLCzjh43kFJSyGFi6MPTEgZKBQx2EWSGg9zKfXEqNykfMUP4Hko",
  "key10": "xo9nom5PwFTpBnrvrrRTKxnww5U4HjHjkspBkqKGaBr3SV43n8w3NQTWqJq8BueGz2zuWAwz33yvCFyjUKcGzk2",
  "key11": "4ZDe8BycJ5F4jHmZgbwgcxsFfSVrq6xiQZne1wkbBTAiP31W6CPCvzudiVHvuwqepqXzgeivVRzwgBsnW32cVRcH",
  "key12": "3r9qNB9iFodWKm8BeUfDaWR6mfaSTueTPP8uZNzNK8d52FAEmEZCJKdM88bR4X4YNFxSsNPxtqKtDHpprBRJoxEP",
  "key13": "m7WizmJ8j91Cr8rkE5zsJRyYX44EtkceCT3kkzRZPdYezewUm34Pj7wqUAZhwtn2V7h2HEVtjDBryXtP1YTLGaB",
  "key14": "4BU1oLRiKsh86UQBund3o8GGhSqaAqMDcvy7XbBG1sKTW168Hc1fPsiFJRaDet9JZSkBb28eaQXvfABB78m1S23N",
  "key15": "2xQ7gUrjnn4D27Jvaz1PUNHE2GxAPfagErAgFwaH1hMFLHcdwj2vdWKJARJLUyrvausRCXzV4Ay7Jai9T962dLZw",
  "key16": "pPwhhcPEQDCXGVXLGtZfQctog2shTHksFE3vqBnJMme547uaDr5yZRMzgU3aDbWtRsDSu78v5x7XS3hkmwyft6N",
  "key17": "RJDgcEyDoRnjZUFhs7g3wWgouo6AADasZF6fdwKiwwiawQDkfDgY49oehY5iAbDRMcrRdX1mRQKADGKx4CCjFhV",
  "key18": "61qqmfGosVccNvETZ4Y3ceucViroWzNBVvvptzgzd68E46hHHpfkXAGAkkmtoTK8VQeRwHpG3tessZEfV4nDTA87",
  "key19": "3Z6aRPCt1YJDPANcLWYpTBQfGYkyy34bvzWHPEREesFrtRcxq3nujCZpkfJLs32Neo3yanDLaeXimzNxSWULu7wy",
  "key20": "5HouCm2u9Yj6Bs4gHsQwMPJgEPKXJZM7pyeXp77UUzoyJgxgGnFH9V6VcBLt8BtDFZ9zekscdk42R6bWMPwcRXvP",
  "key21": "3Z237ER5Ex9VcQPnEhH5vJqwKDKdTuGTVgfpc9ETB7MsC5fuhNT6puA9djV4oA4CD9XNvUvDcabpAeFCVWhtn1k8",
  "key22": "3rLS7UhoNQ7nGgL46SgxntzgraDzKGook27Ff7Atd97cmD6rkYKucVwQLiwY5dLxeRMFGrE5sH1RpjMft4GMPr7S",
  "key23": "3yDuJDJjaGyWigzaDtksTygR9tvC9QWnUGMX96nN8kHqNRvNfujRJKsTSKgXrwTjvTp4FhCJYbLBZG4zDopXRLoh",
  "key24": "2XXK9E6iC5M9L7c7A1ApgKvg1tvzrrdFnj4mDJhih8mRpS3BWBCYVipRupyuSarcN1Bhi1qsnbHeNNyZg5HadBx4",
  "key25": "rp8sSchKhACYGMp11WnTn6S86JD1bp5Cjfz3TrxmLKWmx76LpDHVBc6YyDtr5cQAwedKjuAJRjT64wCCdYUVqxF",
  "key26": "2kdqzUjphuYgNMR7c73goUy4KGJ1vMmWCF4kkm5RCDHp3LkoW35L7BSEjcX7Fpa7FPkiuV2791CgMvACqCmSXKFM",
  "key27": "21cLF4ZbaeMJtQNA6TbweirTx9TTRbZLH49CwFiJwWmHiCaLzL7TN23ryZGMtH5HUr68U3QHbYmpMUsQGGE5vvkv",
  "key28": "59Ebp94MKDCpnFSqzAnqggGzrpTJfMvygciHms9qgQmKdu8GXpUdtpNS83x7zteMw7ETCJSRcpTEsQBreaXuGRCg",
  "key29": "22mH4Tv2wP5FUTvSYTnQVnZEUwjDDr6m6mAov3guZmqNwF2UkNcwFcoz8hymfrD4VZNwgVtPocRHTkgWue7WnZKh",
  "key30": "eGiZ2hZTQNmXhg3ta3E3hWJRzUpiQz9RNms129EW2rqfkAJwK5TBj5HcjW8FVReJPSWWBucGsfpUUmQKxhetRN9",
  "key31": "2Ts95aTPYNaeD4CyGZDjTY4pkC7QhzCk2Yaj9sXL8UQe12wTRkj19KSCxHLw6raLAvVFHoUmiqHxL7An6vRAvu8z",
  "key32": "4zZwVJk4VWbCftBK31QqNPTW8u1wadu3pwAyLLgo7BMuRAwSd3A83Tp55ieZ1ZtoSrxAipbTyuE9zgNdBvrV2dSX",
  "key33": "5MZZ9zPotHxEYkNDZF9ksMibK6Si2w6ZRkpYcxRLiCSbp4wPByPimiD3G6XU83K64RpYPY5vCqQHz4zZn2nVDoLt"
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

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
    "47PMQq2YUfqG7EXZpQeLhvuNWGRPMcjj5YUPpPnif7DvJBUPNrRjqS44U1h6dwoAFmq68trZNQ29pKsgy3w9HCEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ngjNszfc1zgkwqR2tCX23rrRgabpR18YHHWddFznzvqjWujs6Ttngagw9TPPyLLGQ1TavneopKoVSzx2htLW3Cn",
  "key1": "U6teYXRwj18PM77SZJEhpMney4n58uFu8aVFBJ4miTSZTWiuFbaZ2cW3SXmdkVKb95NFoqDkjYKBbRBXmHQgibM",
  "key2": "2e9ENmpKsYkCdM84hk5Ck5caCHscCAeCpiEbf1u5bsGRq2djj9CsdVMHkFKtjctZadLJcfKUrhSJdP8VDyP9N6MC",
  "key3": "41atYWa9QkYgbBFz6FfU8UCKJMnYbYpm7MGCVtT38kNpbVP5U56iNEhYuRyk2YbrWmUkixAeEcHQdV6tctZgS3zH",
  "key4": "4m1rFR7dCJJkbQe1N8HLGWncYZPK2VLXoP9mJTWGDmyAy1UcSdeBbc62GLNovtcHbyamgSkAK1MMrUJPQHUi9Sd9",
  "key5": "3adcSb93YJV4sUx3smCnmJtn8X5EBQwmARHB9ySUPfFREeTn3mS3mjW7tqVJ4vRHASUSDygxKfDE7SZ4qgjVr8Bd",
  "key6": "2VfVCcAbMqcCXxgw69fBLkd1oEqzEigcTFZFe5edn9z2FiKswPXtTapzYCM7HaB8xjVG78sDjg9bpynwJM4fQX7T",
  "key7": "2Er3zVRvwyDZbpXAQFbhTtUSHojCqfUwwvPsCKinXmGKrXNoHQVN3UgyCnqgMcviVSrbmJpBbGovNaaceUpb9L3",
  "key8": "4y3qNMxwzkBgV95CKn7NtX7gu6b8CvxD6BTUG2pMVaEd8dzwoKG87QPYYGtqzF7YaD5UXNCerHtujV4gZUpjXM69",
  "key9": "5P7F732fvx4e1T4c88yCMJia8DXXrYBBJd888sXY7ALD6YXreXcmZw3i2n9LRWV8swpChwqVygSgQTvJTCpHnigU",
  "key10": "522Sn4gvke5YLckFeF9XgXAVSRg4wQRuA7FwchMwuy9zm8jBaESazi7Y3dhSfULSufSwuKbtqEcQ8ax7oKxeWCnb",
  "key11": "j5Q6YA3AfrtTk5AfRnuMycMYy1uXptjRrMoS1kdxPsDXn7rNcSw6DUT9EKL7Wffse72RqqGuQxuD7ZrJyXB3y1S",
  "key12": "3SsaLTVVHNmGheRqmXGwxFchFhyJ4b3pSLxXkqAHQHPNwtR67apr2V2D8uUWHDSbPxffPb7nVCwcuqhx9Srfmxjc",
  "key13": "5XzY1toyTENmvWAFC2tATTbLERMzq8BnczfdBhbYiB6s99PkPGdDecWmGi98uzjKdDZ9WakD1QJxDNKyM9f9VMhU",
  "key14": "3PydQFhyLuPeeFHqCg6Tt3N26tAWqTZNpdW1FbYfFdXvYAv3r7byZPSUiEp6fUKHe9uz3yz3EQs3WmjnJeczqy8x",
  "key15": "F9cXn1WyJp2urQ7WdnGDb547kbfn3srGuMcpZ3ADnCboWF2jKsKqBVdsviH7Zy7zxKDY5rUMkGKoHFuUp6W7ee8",
  "key16": "4zuAyBtbCvmSm4VFVmLiEmqtnvfAMpYQW6c9GrsjBMxqm5LE9BJnB8q12RNgFRCcg1s8qDj18yMfXnfobhGfKDqb",
  "key17": "5R6FftpHYR8KM9Qmm8sqc78tCr1yn4ysagfzUfALxa4uFAoyyoRSxL8yweFP5AtVMnEecvD3LepnbRxgUaNz54sU",
  "key18": "2SPKHUr2cdkAfSojn4Cy3HjRrKMRS1ja24ZG5NxzE6vxTUbEzdjqcg9eSTrNkoKi38rZ68Xy74ffPe8UMmbp6Fh2",
  "key19": "3U8UxG8RkZBBnNSpMXLDw3dkmwuk1fAYWwGPVnhQ7wV2ryY44i3u8qRhSu1t225KXHwMUDkHW5hEGNjQoDyCWpY5",
  "key20": "2UVUZYxSCVF1hVhmw1Bf66bZ68TCJ7FtxXuEKjW9pDaxC1XnPK7NRZeMCmwrwbtxYjELK7dc9ENMgrem1j1zPagK",
  "key21": "2xWk5DETMeaM4dV94QS7ifhVQtfv9E5Cd4jKn83UMfpTh5GiZYwYBmqV6hhmdbjSCLT1Yy1VLpK7G6vWrKEndN4C",
  "key22": "5xGEcPoDDRWttE1NKcBM2ixHVG3vziumRqnnnrwQzbAYi9ZhqjSzwDwvA7gMqaMS7Fc7MYu7mPeXoM3RUnCLLeLQ",
  "key23": "3eLTjPGtSQzU6htMuwj1rEL7siL64qX7hQYvf47xTuceLthr5MJh1NxXsTiDRb2YbqyBT8y6XqY4zG5XGhmQr5Tv",
  "key24": "55i16QimJb4YLLdPxpdMzmaPzp2VQf9vH65VyueHaW83LgVqrej99TY2Kz9vik36Xvrs49g68f9N1zd3VZBtbEVP",
  "key25": "5dm4mJquQwwchvwQ2TDtYXQw5W47eWkEwh3zfGmafez2xc9BaziQ7WR1Nn58mMFqemb3WLzYqi26BZ7y5UciryRH",
  "key26": "5z5tYCM59Hzv12GWxGc2DaApfwTmVmyZ4XNihVc17AEwmAxfUzjRvVvsFpJqasesrnmc1Kic6Nv6EvtCdEX95VQV",
  "key27": "2sWgobSEDmeABmMK14cxP5ZccHsiY3qbi9JYdys9SgGB3pJPHMJr6SbNAL2nfheXZ9nVnc5EuMAwbJoaoT9NHzvW",
  "key28": "3VJVYHGXQ9P5sFt4ZimQF4ZBn1YAzjxpyAmcEjQGbqeJ3tnf2uZobe8DJbcschJ83XrHHuuecWmCYhg59BKWz4YN",
  "key29": "3MrcwFdoE9tgiTSNaaLQW6asx7xYX6wgTebCoeJ8p9NDdnieCMJ4HkEMDN3CV2E3CeVYNm55dPCZyffkiHNEucTn",
  "key30": "5fmTWufVysDNopAqgYp1jooPvQ7rJdnYbRhA4jJVKvwQfeRrBjcR8kTAwgmwa6cgSsUv2XCsmAkkbnLwBcrxqshm",
  "key31": "31DugATwhRGkmCwCmDZDjtTGcFa9ZoDgnJM6nkqwARxAXCnvmptAjo5oJmVf2HGoemcERDp3ZKuH2v6Yi2gXFFNr",
  "key32": "5B9uV4HpErmtW2Xpy97oMiRCz1ghUgetXeU2jNDvnrziJDdeqd4ZuULJGZgQ8rSUQHC296SXU3GvxkKNS8cG4bYA",
  "key33": "5tFYfYNjSVzJ6mVGgcAvWiFRfSHDyiRtwtvUw7p27dJ3fezvSsoe8eQ9eGq49EEs65qkTGjqEcTLhVDrQGzmfP3F"
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

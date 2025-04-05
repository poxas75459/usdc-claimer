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
    "3BGMtY4gvyryQwMTL2dd2RUYVn9DQnBwFB2EbCFGvvGdgUiALpFM1Z9J5m4KvdNbwduB4QPmXcvzrBQ5QrLNCjmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Vb8CAcv5LZwNzoycuNntkwcoyWpBfHmPEJoFACLPB25rzF5aEKns9wfa44kAPUqbmm2boJ9rvJ6vu4XZU4zCAY",
  "key1": "24zBrkD8Fpbjoh4qsTgpaW7iBomLQrVnGgheYxwwKP6PNFUfWoFpzGmPYNG6ix22pSP9uCR4bhZKZFarYrfkpJhk",
  "key2": "3uus1s3rSBHcCLJqc9v8ZRaRS7PSpxDbHqUFTjz6bfoh83zsebTu99xcJuCAPTboDguoZGfFC2SacT3tgFStZgpL",
  "key3": "2BFzpsP7ZiXs2pMz7QpMiyV1HDkh7SBEWFmNGa5ezgVQAhaNNagUkhpgSyxu5rc6UtzsTnaJ7foaAtfr32bvo35S",
  "key4": "4Rfa9AA51SQ1pzocQ4s3nB7ZmU9FCZ3zZiY6VRZzsk9sTs4LhtCZx5rHUfpE9XLLHRLPbyWYyU47Qu1HHPki48AK",
  "key5": "584ZugSEDn1wtKhr5Jm7wy1RpdUshTCZ8LGuqEAaPSSzHQUsdyaS8rFCDmBVDpHFuAyiZjBzm7UcqZkWvJLKrHyv",
  "key6": "3B25vpGTNj3kkXPLxcGxh1RgKLAutjvPdjHqjhCuby9UyXDRYk4L1QcYkU2yDSN3ks6duQ9PovXXReTJLgXEHzw3",
  "key7": "5NvhaCcuZF2D8g5mZyif6TbRmi6f2XQnSNeCiG3u6q25XeL3BmzBALH1stEu9XBq47RTfK3xCmUszjkKBSuqQZ1W",
  "key8": "MUX5hxFoWA8oR6FLzRpLYQruoRvTgsdPoZazkJaMkf7MTafy1HaPvc8ELge2ZxH67qGZ7CKB9HCzdEGPCcHqgvn",
  "key9": "eYAKcgBMpZX9S4uCDDAnUkTCyEh984zN191kNPQAgDyr3cDCE7G77Zbar75M8nY9XykgfdL1rHe6N1ZX5sNVnEe",
  "key10": "5uKqCM7VrH9oCmF5MxoL1dMNd44oHx9eD6DHSfiqczjpyNjkQSyKmGxmw9AP8XVQ58dvRyHTz7vop62vN8BKMqA5",
  "key11": "2qDq1wkKj9NBnzCPPNYRcvNJewkAQ1d4mDJWcGKr4rgLAH56AuVoVyoP2ZSD6fvP4UbqEykNtcVb2xtdpwzgCCPT",
  "key12": "56xhbQv1WytFkzY8SS9RTXaAEueveEV2dkSssDYCcFpkxETi18qYFpuVVPDsTsxW4aQ5kK6BarLfNxPKYqfV2nS",
  "key13": "3LRzo9Z2KaYg6pVD9kn1ghXpFkVnuf3Ncjnts35UyozxC6RWwpDYjHEXvyaDRY31TvWYKTHUBWNAehNciBX4MgxC",
  "key14": "uV1LowLTxZGDjpu1sNkWQ8iwqbuedCmUhYX5R4vy9aKgvFaoFvtYcwed4ADxL3S4ZkW179kwvuBwdWWxsoRBc4q",
  "key15": "8tV2uqKf75seqMSkQAu2nQ1keBnzmV6easpG2xxZb1KZxMu9eP5ZCor3EGHrgsHjUjizHade6Y5UeqTApu4xa3N",
  "key16": "2m3RVKxpfbwc1gdgGy6axVmoLB7NeNVD8DBbCxXHzaPjPSUg3UAcHvKJrR86AcwxbTW3LXRexU6qTEr8mgGFwNid",
  "key17": "5yW66psrZEsv9U2g1XAzd5xvKE4pt4rTHVHitFvsM1dBFCqUKqJoRfv47jDhodzTe9DcGsHEHCKDtH6NL9e9DiPu",
  "key18": "3CHWnX7u3tMZeuM2uBL1o75EstwtB33Lv3pzyU4XgJLsDsSvii44Ce8bnpfqPm1wXsyfoNCJRevtRc2nJF9ExYEb",
  "key19": "4FXDsoMtb4PouLr5RNKSdrz7QdYDKnb7xXRfZHcYjUvmYJn1Xw2nKdSgbpJ9m5PHWdK8JT5Yx9zAUvxRcKBBBCA",
  "key20": "2rmWkN1vTSdbYm29383aQB36irPAzqwTzGTJKkdgqdwHwCNXQCJ5eUE5zVGrNZnBQ4edKmpjkPZP49FPhUAxtF8r",
  "key21": "25vNFw75xR3PeN753SgaTLBQp1SMATjn9YVNjqWLncGyfz5Y4eg2DkNfTkn3ZJS3N7QUDto3Dz3EW2FAWoDmFT6q",
  "key22": "543RJ4pCUpvHPWc6ryN5qsHDRBbcaMJGDKZ3ZdaCFKy37qVT1fVBKWjnHQp6QGw9RFKyXHpnfyCaxh2iuDJsquLJ",
  "key23": "51gfvBjyz8UdL1qvZLCQd8h4qW7Y37JC6RVwFxTEVFey6kprPYAtS8seNuUxyrn5B9E2PEGpSZgrsGsJeBR25Csv",
  "key24": "5X1K8Ha3fQxRr3bu5WFjukHUv1oeSFMEjwFN5jYdBoEUD9MLWjeHu4S1DVY3UXeQCip5z2vG5pijbnCAe6fUtk3g",
  "key25": "5Xo7jnyQ4XbH7GVkbZSVowsbjwvo6mcJ39dEuMGrfha24SQCqgkPyKM7iW3hbvyCv47HqUTTorRPrLmssWpmx7RC",
  "key26": "5PmuXQ29mr5Q33CghJz3LETYj5XwZPP9hGBMFxKqGkQ59f38JZnWFeVWCBx73ST56j2TNUNwTu5chPUZNmGZsDgG",
  "key27": "KLDBsAqQ69wSV9duMdpC6hv6rd7JtrWzXccoVQCmrP5X7BLLhq78iRU1muwL1CYpY5p98MzzduthHo9CbRTtW9B",
  "key28": "8BpTQQ8btXqyjabbsXX3rEfEFLc6AKoKv4UnbGRAw66m7HNJYacJMCwtRgbqLDRBRYuHdheFBadkxHGpvdK2HQk",
  "key29": "2f3WNzt3UqstxvLNnC8a7Wnym6QYNTQKwMHKLSBjH6hoeNujZbBC5sv6ZJf7nHNAqDdGPJGhjeMnyttvSQ5GGTwE",
  "key30": "54LAP5aTwn4g8ytXENMXn2JzvB6UgMZF2kMymviyZYQ4bh35zBtCz1SrqK38o3Q4j18LvmAyu62ZPMWxpWBauaGy",
  "key31": "2TCoFvd5eVsXcAuYvgwe4UwD6E8wfrWw91rL5SRVFQQUviotwDKXqrzKRzG7Kh6w4bLsPzB7ACnaUBu3s7G989tC",
  "key32": "2Uwa1ShtWTNGFmF3ACXoZLrTiPyqhPgG8hmiYfrEcBEG2b4GyW44S9oj65zgGwmjehrUVjcrFqUtBZNsfbQkeuzr",
  "key33": "5gsKbcU9mKUoQ5ptyJvWz1Xk2rt6yUWCNiGNvBLD9qijXBCmnV43WYJN8e3iU6GHtwGkQod9DokYTPvaKhLcUmYk",
  "key34": "4euqCowzJxDN3ZDBX1upbo4B96aUuPaxQtsQgbfNu6kAbkyvy2TUo36NmhpxicJDkRGvLDsfJqarN1WdhC5LXjF4",
  "key35": "3qaPF22EcNaZ5kDrPkyJc9xy2fScKPQsWg4cpXrfXnt8EadLPJX7EHwKUqYPY5s3N4KpGzpzVEucZpTwa4UB9mwJ"
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

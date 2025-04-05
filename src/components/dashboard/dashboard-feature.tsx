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
    "5QSzjMVi3FQKEN8KzE2KMwzreyjdb8X4mxmvNqZWo93H5vx8tz2niL8N5iVWzYwiZGH6aKs7fHheRKiBr12kKhZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hpjBQ765kTXkGYCBati1GfPTYP5xwqLeCLFg4ptzWKwSzyuyrWD1R8vWFmnoa5P888c2yjw3aQ286ixJhcD9BRk",
  "key1": "BVdTrnKjqGnmBLeVQX6k8BzKVxZdcngyxFV5gbzoyWEn5wWiq4zCuCWHM5YsNQhm3a6zL2bAc8fumiJAgLHT2BJ",
  "key2": "ewKbJcEgbzHPyT4pS2cb4uWz9UkppXuF29vW5guWazH9gMCPksjeqwr216rNV5F3BW9Av96CJG8s5N3GsNFsxa4",
  "key3": "4TtRSpV1EdfmSY1sE94LVu5jH42KvUefNZZdnckGt38YW5rtfbYzzSE2gPF1Z3zZFSNqsR7qTzjyemLu72KXNsJq",
  "key4": "4RY6uPdH4kjhRXyGjUf5rfA6crWWrFcWe4qvW3Hj1umWZLo1iyviGXFbPib7GpFhFTp7YyZ756WXiTCeWDa6s6FG",
  "key5": "5fCEEvqHSFuEFyQqm4YyppXTabftM1ozW3d2gn68ZwoQ6cBi6shi4rkbfmDLHg2w1hdpSP3RScH94LD5bEBWLPDk",
  "key6": "41DCuTtEpM2rmoxJWoaKmF37EXDG9TbYz14mrhCUUJnpjz9S8kQKKhSpsXpY7JWos3KmBE1TCTqQTE1rH1GYWCse",
  "key7": "4x1fHEQsY4DN7aP31zDgNoGEM8jHYEryi5mPbcSPMTZyRHY5hoj1ayD9dcTjaxNPETooowqZvz3yuoQyqhxXysRY",
  "key8": "5BbBZMqHh8gnzSN27wqpSyYkUsCRJrdcpVky8mfXRJvVeMWZz2yx58kNmtmcz87K5n8cvCp1BppU8k3odLPcEGaz",
  "key9": "LpLoXc3K6j2mpuaoAh71cXN98zBL2CTsE3aSWidhGLXM33PGpy9znfke36Fq2Tum4uiUv6oEpSPPm6CysFuCLUH",
  "key10": "dtAbeQCFSA7BH687zupXCgcB9kG89m7KqhMuRtwyiNFod7dQcpKSyPbzx9j5FD2sHDpipfRMW4dQiCyq2W2QraH",
  "key11": "y4x5YBfjViooQLiuHCLtQ5EGet8iZV1rwoUhqjCcvBK4SaQb6taDwpogo1zhq9xH1XeE3tDfeb5nL1XapEZ7dNz",
  "key12": "5mHwiPy8F9mvKqXAcie6vLNbuAVWmRSCTHTTVkH7UP6kJpcp6uCSNqiyAd1Fqz9kCs9Xmn1GM85i32Hwhf9cNudz",
  "key13": "3nH86prtkMx5zsPsP8ur7npUHNMyk4gi3d7hN5kLgTBq9f5KfR93irhNcTei3ngL5rpuDincJDKqcdTe1Uk8qKxF",
  "key14": "5LET5wNEvChm6s2iSHZUDXTXqz2PyizQ48MVMi41mE3w6k4zL86jYVfPB7ve1x4DvLcWRXKfkPMgzbrWGamG1UbS",
  "key15": "5JGvA54uvdskbhwja7sfn9QHgeNHm4JWEonYZTeGeeFj5D77qb124cXhCpAUAboZyuXb4Yk67fMzeR7VpyqerDpk",
  "key16": "2TsXhy1QEdQvNKqGmtfKL5KDf9V8GxgngJm2Ve1ibvWd6nkPeoffCgMB5cojbHYBvvNmv2D7vwrGUCuNa4yQnuEV",
  "key17": "4qE5rduYL6J86xm1RNwcHNvFYfBLNZA9uE9PWAByf67kM2vfmsLsHjoerNTWHR9X5rwS9QLGoLJPFWNRMsNaoB1M",
  "key18": "5ZkJxuRg7D1sxTqDn6jTSd2mng83rcy6UJbbpQfHMG628Tx45WXDyw8fqgXrx4DmMKAotLT183Z5imYZTjAu6ZZz",
  "key19": "5izkQrnXSJv6rmvtnuY86fGX62jbJ2K3NqkbQjKsYsz8NoWfs65HebKCpiv2ovVWGSiKr65qn3RHHH14zDJDtADa",
  "key20": "5nPcXJWxVmYZbNHkwstHkEDGAzgaWCyXxsTL98s1vkpUetYvAYkYAs5qcrxh8NdJFPSNPjNRo9YBecwkumBAxUZA",
  "key21": "ULFfZ4DcKjmh6VStjKYyuLXqux7aaj2Xjk1qDMKzfWvFdtegm9qw4CseFwfhzkthu7Qj3G4ezTmEVs5nWep976L",
  "key22": "4rEY3uBKdjdnmJnqRESv2yBh9SLkisWqpRxweQfNNeptjybEt6hSi5528ZyAszh1j9vhbL7E7Czvh8bdgHmAEeGa",
  "key23": "4FYB2vgD1BhTc6vPLSrebdAsdw3uGW2f4vqBtmpEop8ZyvLLX81b5eTcz56GNBtBwK1dbfCZxFckbmdpaVvKfPdd",
  "key24": "8uN69qdRatho6WVNZbmLw3oDqENFYsvhkSb3NP4Wbc7abMzdYUdQEp9hnLBjemxtnkeWFQeWgXAX7CosiFbPSni",
  "key25": "4jEkewDg4NMUM8n28z7Ekytx5AfVwJXfiA5uw7Ri2V6TUhYZmiKoaGohACAUqUv1CUpPHtzDze9t1EcGxfUH1yWJ",
  "key26": "3QVrTXGVqgmCowDQkpHnUAa9z6Hg6rg5sjMKKsZq6wJX85aU29fS7ibwnq7CqwuzAwY8iusy6RYqUiKA6g4TVm3g",
  "key27": "gxexU3xat2xa9zDtpdMXvPfJ23sU6qb8bxdcWXUWjx3X2jtyBzyqxbFjKyk6E2E3uXyJQ3gzqCdYWq9eVQfEJSc",
  "key28": "5xfrPFcou7vaqWa5WsAYoUtJrvT9NF6nbhZbDGobBUo7tpxDhLCsaNHb8Mppn3pfXXqLNFTqDvLPnLFK9A3rskf9",
  "key29": "2HbWvVUkVWx8qCPAszfkxGU3aiSUk3ZyZSvchrFh2BHsRh8tomN3r6R3mSiK3ZL61WxteTatGgqjV9icg5LgGvCs",
  "key30": "2SVUzyCwvcM6hNE4DtiLztHYbwKiuR6QuJCc8v8TKFqYceDrfLE2E14UYSLrSTs7cTqxf8V3VsA5LaHDYifjR2D1",
  "key31": "3Yo4BNqKozLtrUsXfXPyBVegNTVmC5AkZXNM3CjWtWw7s2btCdzZdY67fLudxmXM7Q8hqq7S7puDnKfGiLSfpMnL"
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

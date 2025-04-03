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
    "VH4d4tzshTDgo6BaVoV3Xsse7X69VSCDumUuoiaUyVB5nwndwo2yJRrsmg6UQqXuUSExnPsvmkX1wGw8twPo86K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4angmCsgU9ZWtvuUHc8fm8ZmkqXWjL8nLvdHcXEyba6gmc7bTmMK5udUp9X7SkE6STKzE9CK2LPus4yvDmTqcyXa",
  "key1": "B6GCks2sYZqo2pgAMsXo95qESamdCyHbtkczdn2i6Fb62NA7SDpuq6FyCaKFatLbtApjVfUjY9TVsiBDpnDLf2h",
  "key2": "37fQa33EZEDXHEcZy1pJq5nWZB46xdv1wBZaB68348qeruBumoP8XQdBns4bKUoDdYX4jQ35cQ5Birw1RJ5fFDAX",
  "key3": "JFUmgcR98LQxmdv6eapufZdNGDnjDMcxXeHWEhd5poqRCZNYSjXU948cgKPtPJLFMGKdCVeJaGyDQdEoe48tFN6",
  "key4": "LhZsvPBfxJRFJxUygU7LaFqEoCGHxgfejhmXH1jquUVcz5Qzj3BLzJZs3A9BsQE5R2cpeiKSzfYF4egGHjYnE8Y",
  "key5": "y6jujUQMjJyGWsHpdJWChvMJJ2XQV3VhppQLNRhk6Vf1vrvxWQkvSrhqrrBqU6FQZT5ehEiUbfj27PJg249xMpX",
  "key6": "23bdX7Kf46A9DzPRtF7Bf8Dgx9FF5jyjnpALZLmGxQ7AN8eGEYFUuBamw9wf6SL3ZHp6yRQGTZtyBQYhXxsrafux",
  "key7": "2VEYWNqu2jVVaqFHUny4E8Yva8FRKJ2JgEsLt35LH8Ea5nDTuJMtWZy3kt9UMiHnaTGnrF7XiEcdLWc8C4FY3g3j",
  "key8": "3mR9cvxJob3o33Y6tcCftwBynVMGwL6vx8ZwztxbcCyx3D4Sv1Uww8kiAaQHRiZo35zaKT29XB6dqsMX58penvUo",
  "key9": "598EfjPg9vjuDJWunk82a1pcnPvMBAk9oQaYM7shMMtJMjXxtgRMAw3RWpVQkjt49utHoLLyFd7AM2DnLJeXs6v9",
  "key10": "3ARCdqiVXCxiPSkczkeGZH8EkvaKiVvKU37AvnFUVKcJVPvYZDwbsiBTz5HgJeKvR8zVF32icQ4dvwmN492XJjwK",
  "key11": "5TsfUMA5dWWUF4nDU66JqtX9H16Ki6WwW3zCxQpiuYWhEBeazAcyP3BeWgiokWx8ayjaBnrcHYWPt7xELqNEVP3s",
  "key12": "3xY7imVN6zzXqYpveuhuwX5szqaxFHizwPAnq8aFJF1urLUCsKPC9SKe5ZtbWdj9bSP3YkLHy4fsEJLNAxRbySJW",
  "key13": "5JXacptNrXnq1a2uCrvrKRFTbAiQgQK12BRpdDZh5fXLaGfG4sHH7WDHpCJ3ji3zPcr5RqNjRkMkkwyL2q7DkNbb",
  "key14": "4KieFWTMHWfxPdBLVEc12CM5jnJzT9PZ5JTY3ocG2cgER7b7WgpzY8eLE1gsdMkmcQyTtCb9ud3zHoYRLwAP9Hoq",
  "key15": "4FKhBaa1TAgvzFQNXied3g63dGf3F34LKDDQB66bVb1vfNr2xhbYgpCgqXWefxJwLEdFKz9dxf3qkw29nsG7A515",
  "key16": "5MQCdMWKCBYGTd3KX274EugfjwSPwVUwVKSrMrNhjUNcgT5N6ffHDtN93dmLcscSCavczr8EfVDgomvqwbjTfmWH",
  "key17": "jPSEpCDxFYLaHj2BgC8Ny7EFyZ2zfpxhhC8Ki1mzGU4TcjQFdX1AmFQFCMopdgkGZ3Adym2LQPiyjvAkoW7m7fw",
  "key18": "NGJX3awKBsmxpRmD18q6HU35j1LWHrKiUmaMffHoURiRaw1cADf5wftRN5uPvHAqAmCCMw2W4GEQcTiGUmMQpFi",
  "key19": "yM3xdKYaiYeBPwhiEY95g27fcyuQ5epNYXsznSD1J5crjjy5kyXMJ5fRmwq1VUFTtgPm9sw8Z44ujxAd9yLRcAU",
  "key20": "2Vb2YvgWWsDg5xT7WCnC3UvGpJi4jP4iAiM9nqGzzrCwqSnoCTGJ7USwaGToFQ2F3vw2s5vbV1beyeDkFQmCBqk2",
  "key21": "3BFSF7vhbRPjZFbzzFmDffry49DVkSQ6V5M8hJf8pbXM7F73t2bTyCMtvCg3DcT5SVz5rEd53xmWevyMZggsUa73",
  "key22": "5nEc96qUwshMfff6NW7T7D5h6sTh4u88tVDdeudzQLRPfFLWt8jhZsYX5hD36uzQv91wBSHmNZm1W2fY6GMcC1vm",
  "key23": "2U4UQnvnM59wQNn9XN2KFp9B18s58cW8po8CQMtyuQnRBNrvukSoxmEfAyXQfQYCXrxpSDcwyRg4pDgoDW1Gfkky",
  "key24": "3HX176cMG5hJ77u3TUkV33Q11XQqfjATSwm1Nop5LxgxZqAVXWaEb3z39LhZDoujgNPrpkevmxUvBk5r4vWcHfFZ",
  "key25": "2M9VdNYV3YUTfDQs2rW9zHyswLdktk33zGPYza132fXzwueLyAnKKPRodB39YeCVTDgkXv9x4cm9hXGSpNihGdCC",
  "key26": "2D5cMpGCdzKp8iH1bfRhDDQZVLUmzzNKyD544TZ49w8PRjBRS78fokjmBWjTtfRpnGxGQis9iXLdLdZWoTug5EQF",
  "key27": "63boYUBq3ar59jN8V8rk446pqvns1hYBnRs7mnW8pPeD4RfCYYfFVFfLvd5m26gWedmHtJHKQbJiTKbwmeV61RzP",
  "key28": "21WBb6DNMAX2Hf7GYD9ofaSUfRpZ9cM942hsSqYoNy5BA7tPBTKsuGgsrrk7tvUbHnSvqfmmehce1gZysG7eGyQk",
  "key29": "59oXQXddRD1KG3GzTQ294tRA2nq5CTS5HGb6WSWiedD5urGZQweYrARQFfNPabZ4df1a3d3mWNWn5wVooHtW4u7u",
  "key30": "4yYsFbs4HaM64ZWLHsxgT6Cd9A8Jn5CR1gzfMbC42BMKS6ixhvonAKFvUgshpw4hwPy96R1ciVWXgELh5Yp5jLVo",
  "key31": "3AFHKepU5mbZAwC4F3zcRz6ESGi5cYQzB4sp5qhUp2JjDdrSRrb1GCytw4XCNnS81j1zsQHfQJqHhY1RKXwv3zhJ",
  "key32": "447Ph5NNwGB6Y8QUSFBshmy9fmkFKhT9dxtEvNUKQw1Kt8HT49W96hSkVSxhjRVTWmcAqayefV4Wwqd3Pb4kPrk9",
  "key33": "3ifWP4Tpws3vfX6a956Y9QnKQFvTFpQM4n3ZS87zo9xtmfmmYagSxJGz2KNCjThKYdwae76U6Y6zieNSvYNcdAbM",
  "key34": "xywTv852pYjTz1oDY6AEAnVhiJEJPziftnv69J58GZSvVNUrjKMCQaRWcNyFbyhif6oWBcxtFeBuPtMw6ZZNfmP",
  "key35": "3hKHJ6xixRMuRnydd6ig3u75BTSB5FdatwvT7C3L9bpGnWgwJHKBGQK6m9C1DBAT6A1XXTn1JqigpYhGAo1hbvVb",
  "key36": "4scJUNkmhmms7VWcUCXjWHcybZ2ZjoyLjDAGqTJSrSTdkPzFMMMZ7uMkYaoydJ1pe3q2y7wFt4DQEdZQRyZmPiH6",
  "key37": "2unW2mJxqMt6tgq9WLWv7SFZuTzRbA7dxGTSJejdkqT2Wftw7FPN7p8RSKETpvAbKGitGnPuaQB1GHhWonxzLfCB",
  "key38": "63ZshCrrMrqJwNkifs9UNtcNb8VRUHG1DA9KLojn6sr7a8paW9Xu39zfSr2ptAFEgvFTwoBTNEuGP47Vb5b6p4er",
  "key39": "2rQWvSewAeanpUpDqqmg2uNjrkLMDCAFYQpCnvwwvFNKfpS3kHkhfp1BzDsJ9Kegt3PEoxmFphq7cavLkiAYHt4t",
  "key40": "4Jf2maJqqEkBPiNEDcF5ggT2C1dbUC2X6xhQMP7Ff9KSYxaw6cq6r8MMXYjcxLgq77NDiZxbULUdr84h8wp3U7fd",
  "key41": "54SBKFafmCJWPYbQeyXsir8LrBD7kZo9QakcRHHRU1KhzF1BHbK8PdRC9ctK4zr9m4uqb9oyQZUqC5yDYgWWTwmh",
  "key42": "CRDfmTf4hjmtVGgATwzzGyRNTRorzn7kYR5aZKyiniDBm8Ah19stHyKF2hkZbQqnACxzmeYtmWCxjBSxT66B8FA",
  "key43": "4AnnaPHttHkYeRD62c3vuRkgyEsdPMbwAJrPim6sR86AYFaHxeDCJjgVRLL7trWAr15VhkPuzQTHmFSMiMDB9Zxx",
  "key44": "eqfD1a9PGdqa4fn5xyLQNt1knrevquQ4UXWdShTTWRLtySkGv7XPn2U5sGNmsUW4tR2iBnXj3qf3i1uXt9TDAuQ",
  "key45": "25mcdNvWPwxPNuQDnL5rka3dx72V9jssNDjdFPHob4Qyc3eYCnPB3A3kZ4LjSrm43UQc4KUPoSGQYK61dTbEMFDu",
  "key46": "4WsUtSxJKsMDHhHbmcCB7RaD2BNUjHnC8pqVx9iWM15UGa3QXSyBkH56b9riE47FBx4m6KWSAf2penqKBybWSTNZ"
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

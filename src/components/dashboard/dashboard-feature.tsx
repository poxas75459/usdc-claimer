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
    "3u4TyxLBc7NwooPT5DuLQ9ZGovKwXc7pPmyr4SRDmw8veU1AjqpQ8aooCCQnLCQcjfYjvgqkxUiGWeAJEPFqH7Cv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M3n46gnfzQHLMgQcGUnK4aALNGxpoXuTbG3EejmeKLiLRD7W7kaZVspe5RGVXjm9PB5Zdbzb8CSVWjhtvyUMfny",
  "key1": "4CxFbi8hP6k7pjAyMekTKA5ojBnHNoe7koVb41iWJWwyBYBGxGm22ivWpgVkPhbrmWZpJbuMQkAjZdFUyQfqezKV",
  "key2": "3qmK8CgfKKSAqXs3rHpxunGRaDcnxmn1hBx7GiYT1pgPHKy4L5a1za1A9sFyydAnxN7ZfPUXtaPWuAXH65Uvzj3",
  "key3": "2LzLhcDLavF7Mxs5z1ebzu7xuvcbux5LVi19H41LjFRFtc5ygxKioNyqfZDpkBZeyZk8g61bkd1zrUF21dwCd21U",
  "key4": "Z83nJzDhpj8knkXfquUEbDm5Yhm2rNwJrRzaGenMVgR84Bv6N5aZaQT3Ssjbp4qDmrcgabfPhr7mjNLRFbpWBSH",
  "key5": "MpM9UWDQPEWDvZnjkRiPdrXtrYMe33pDy2oiBCDykELneSSn125U7vCNWSXdrpDkJrMxZMptWJCMgYLwMggirpE",
  "key6": "4YCXkePES2kPQC9JnCwTq4MuHFFaEZE7T7m7bjHRByNxERa5e4bejD78RusXy9zWXeYm38JX3D8ZsDP77PBT4Yx9",
  "key7": "5JdSnaASqr1v9WZJ4NuCHNMzGJwVrr2eCXzZTftoLPiKiniKg7yh9G5dWf6VniMuFX3igDXugLQYjEj6djjxYGhw",
  "key8": "565eMU7q8y3rN42RxMuVCj1E3DyL7KKx8GmwSA9vFsNRRUEAzPgRYUPxqWtBoRXejbNByeXZ7YvtJvyzFyqDtBNv",
  "key9": "4tkUrQHNntcY6JEpDmtcyB9uQ6r9R7vM2qdLfzkMxbrYA6w68LcjVx8D56GZt8DwCvRSewwuHFJxGaWnm33AoZCE",
  "key10": "4oWVHLrUMLuiWnBenUCHaoaVwd5VZugUe2FvqqoKynSxhLMo4ccunyKB59tMKkB3TNB1SMTKBRqYCYKr8kbD61mK",
  "key11": "5wPWVCRD69XFai3eqnDZwoX1uxmiDjEc2WwuS5hgqRX7Q8bMREXiGNCBuzXzVTtve5bcuDnYJVrfxvqSinPYVdqP",
  "key12": "2ASp1VajqW2KiuJkHgM5XWiz3JCHY8D3idcHVECM6H7vSCnDGS5zxWycs8hcnsZrsnmDdAk1WB1TBYDnDUBdFwpZ",
  "key13": "4p5mjn2VFfHnirGRPDLLvK3JXuA6pu6GMC2PqCM2nAM7B4P38hzUxNafSLTBeLo9Dx81QSGc6yMhEiEtLMSrYKo3",
  "key14": "3RfLhoEoA9ooe5dUgWbx1v8fAuBwRCo6vNY2USG9LfQ9qqSij7FYVzVMD8SCoXDNNpaUYULqDzD5s4MmBGuidGvd",
  "key15": "3ekfwEpVtc7Vi6dU8EHwFg8gJLh1Zb7gBR8th5WZxkFkRWDbmD1yL6SFBajgGVq46Hb2LTW5Z2vEyJaK6VXMtebS",
  "key16": "5R78RVRiJjAfNCZJ57fZsJKVjq828PxRaWRNE5K2FAARZzVACMqD2c4YBezgxckiRLA9VnVhz5Hj8vnq1iFvxEff",
  "key17": "LW5ceJfg5u2j8XPLbNUZXenCdd4pTUq6jQDsipdUv2hDzJMSg5h7MQhSnaSiugsTuhqKYqEhN1yZ9V8M5ZemTD3",
  "key18": "keJkJ6YNvznSCEnCJAGdr5FsTLbWJ7q67pcZWcmAMXCfnE5MNPKyFWu8WCT99iG1eGERjpZDzQfamMkjPfDjxpD",
  "key19": "25bJEvza68ZKE2GZqrhC2H2175vdZbbP4p26pJxJWpjZnnuxqtccfYjbCBsko1mVqzw1Ux94kB1aCC2YHGzoAHR5",
  "key20": "2t3ReQ6NSjtK3DMZDA7RUkzbRDQK2289Mb6ruhTrE5P7H7gPXgVhSEexVFEWMYJdg7d3jVDqpW38H3czY2nbjWLJ",
  "key21": "4PfzMgvBCZdTfo8SZ2mSm77jn4LRFQ4e9FrThwG9H1Xw5cJcnSBW1tRfooyhnWn8ogZ3ZfgwyXrcYpzH4mqpzBPu",
  "key22": "4WnQE65fTxp3EXNrVhCbtN65LWCEa3gi6d7tp1rbXE2VsAEe2f7KvUNUYq8ARCUGGrh4cuWCMnA1MGquCqoypNbE",
  "key23": "CR88CFEzMf65VYyvhM8FcwFbwzuNgL4P8MGF6SzyNXxDuQ2QnUmFFPj4egwGaER6NS4FHN2WcUjFSpPeqp2vBE5",
  "key24": "5PotNuTwRNrXYZuP2AzZMyYQKQp2MtkRr4iTzEEzNYKbR1EnN96bxPhjdoNAX316imvv6xmwXFqpnxbDgX8Ufp71",
  "key25": "nRFctn75kGoxW9foArSLYRd6jLDsKXY43DC9N2ByQgEmZ7gK8FmS4JzebQUcnPRLy6iEz3ZKEKH55xQqvXPtktc",
  "key26": "2cyNTK7fdJjJa8GSgnSA3tSEzpH6Hn6bCzkpZwbQijYRFkA1GH18kovMwLS7TC52qmijfGE4X689TeSgXU6QasFh",
  "key27": "2VnMTtrgdgHoXCLpKM1sSVFhBHfWuSnwFKCeu8qnUDTB391gUfkY2YefaWzeSW7a7QjqcD37RcfNHWVGdYaB9dqg",
  "key28": "2KGLvHSv9rHeHrHLSousWXRDF8EkDbr1VFEG3CVAz9WcJsUNPGgLaSe1X4MYKMKrmtHhFr7539zy7aB27kVCaUsW",
  "key29": "48PJEVtHE2rhzk8w1LYUZ1oYSTqdsbrHaydzbJAECtdJPoKst9vHFkpPNKkFqfxqqqWnCzPKQro4Bv129i7AAyPN",
  "key30": "2eBC87YurbtJfk27rG92LGLjXfw8H27kjKWmWEax9P9wkXqxJR2gfkqzwV2R8oktuQAPiko2DAVR9MTtRAN6eybD",
  "key31": "2zaj1szpb7bt9vfBBWEVG5QMpFohu4EUvR4DT846LYH89psTHcEjnL4w9m5La7NawWyKkaZoW4cEUCB79tVrsBAK",
  "key32": "5AnsUGn9Ag7BG9PS4fmqPLbV3WkWLTE9UmP3eWwcREDVAA9GGoVFWesYR9tULroG58QjoFAZBhuK5i6kp7BSf2M9",
  "key33": "2g2LUKqEbqDdQWa8oSZpQQvk1ipX1sgMMq8R6ZNo8oXDUr1zE7uSwxTNeWs7iBx7RfyAnk83SygLT4NHEg1dHfG2",
  "key34": "2e7VP1gX5UDtQcVbqgLSLBg767efevqRWnTAfVMqbKDboBfyQgiNCLg6fN52f7ndEzQL7YBFTxK1CvTXvK1vA71k",
  "key35": "6Bx6FdKJCe94dXxW9JXkPkvGuKePfK2psgCp89BssjNxZDfr8d7iqtbNvZP4XQYK3LQ91YrB3wBZuEmf383behp",
  "key36": "5dk1r9CKALkEGjY2FL853vvQR8XLsrzdeB5kao8QdCb4VpjVwPfNhtTYx4GA1iSEyf6UEQqtMc4zUbVoopr78aBx",
  "key37": "PxhasssGTuxpTXENHZSd2Nk7sPwQ8XF7Sr8ZkAqYtRwK8Pny2WcWVg7FKtUkPtAUmVcnzgjjSRbbPLHSnGFfi7g",
  "key38": "4VS7F59uRhLwLLiSJAgcvx2YLDsHdGGm7JXLVBM2oLnXfWkqdzgmNFenu7QvF1QzpfV3VGGAfeDy6mJkuZ6VV2Ae",
  "key39": "2SJsTHWEYx1dkkntfrqDQWXdebwpuC2wbqeALRntpZpNqmpyUqKdRUFfC33N1zy2fR3zc5e4PTssLxRocWYGqFR2"
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

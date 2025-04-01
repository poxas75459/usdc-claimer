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
    "23PQQADAodnbqqT2R8Q1Xpy7T9zEYakF5ju2CM9aGy7wQMQN4BJoHVubbhwgXNqQPxfjqRt5Bmq5cvvBCyGMkfty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AuycoQM9tp3ASEFMgPLGuFeQxeXX3xrwnj2X9k6tqJPX4XpER51kooJah5gQRhHMkM2iMTxDgj5u1w4sAeHTL1Y",
  "key1": "oiqWJiE55T6ffiu7kqgz1LoSnZ9M4RUkmktVEoZ7DknvhZQwbyXQcDY2fnTgz9aCBdesuHoPhgpvmdtyMns8Gs4",
  "key2": "22szFYr1Vv8YWhPQhm4Bm2aKYnPPwQMNvjqHemcoJwnwpLZHNQxZV9pkLh5Ga9orYYYUokJB6juBK2PEfZ1Hg8dw",
  "key3": "4ZPoYGssgQTMrfY5DR9t87xCFAasUk6XDPgqbyiytUMkax5n1oVZ4uEvCoRGbS13cDgjdZAhe3R3xXTAFGFqJjPu",
  "key4": "2WfgECvx9hjG7DK3ssb3VR4Gakwazc8Hncfrs9VDcQxpEnRH4EEYN5KERnST9wZKcjs39D75pbx4NG1fuu1wXL5w",
  "key5": "4QciLy1LE4d9sCqn4WnqVCorW8iQ1TXPSoujnHsoRZtGBUFL6n4AyiA199nH1eZ6PnPTiyLQ4Q7v1doEPWCp69NZ",
  "key6": "4B7mAZPp8RgM14K8kVdx1L7x95Dta1RfFMREnLvpNNfbjevuEFcWWoQpXSaHFgTZKyRSJxNjP267eqjSKsmmZRDt",
  "key7": "58sYHNNrTdHBYeaNkpQq1JyQWfQxAiS6WQpoPwVDebu1ENwVCr6ZrvgnJRGSYEXdZD1gysfrvTFf3y124Zb5feNZ",
  "key8": "5N6HDG8jQrcwfWiKQbmup3acKMS5mkzKersMvP4i6F8NcYuTkfLcCPPNKSqEokUJutDgwamX6iUjL74JtsMQuLDr",
  "key9": "4KDDEP1gTCNQDKXiqpLdC1s7axwGBWJcEfk1Z4P3ciit5eCjyDZy2LMzRTUSQWnFP64avdoLp816w3TPGX6kfaSh",
  "key10": "4unVQvCcH6bdhNSPHR8ZH4Dx968Ga7omxwUZj2K4snwZpYfa36tRyjazvL5gxdZtZkR3JhZRaGUDtFeDpqkMDu3z",
  "key11": "2iu86adQjYt7UcEPFtBtMi2ZAqPFWXWb7KNZxpo2rR6wCpA1uwnCakyv8bdWmzAdQCxuJr1unau8NX31cdkxDkfE",
  "key12": "5yZHu1qDCFZEbLQkjLGPKZipKUvrbbr7LemZuG79hd2eW7uwVJHQ19C4n5S1J5aViuk4Z7TUx9zi7M95eRqFos66",
  "key13": "pDAsL536k3wJFXNbZKBuibyxBKAjzGq4kWPXxPRg7ksacYWhReLshBGQbVimcBvagKRrSFHk4UWbWyVKwmLxCkS",
  "key14": "5n9fLSR9rV2WZNHwnRuDTRQVYZf4eUQtHBzpvjtYkzYFzj12hox2EuMS19bTaQuJHtDgG1aBBXswwKoMviW9buG4",
  "key15": "2Bb9RboMnH4Ccu8PBHUySjvg5HNQkv9cCgiPFuXuxXPiFD2iJpgCEgjNwUkET1JkdGGQ5DfAdPwFQv1ELkrpbowJ",
  "key16": "3DZ42J16b8L3FAhxia7bF7VPVrYEC36R99Gaqor2HAzjCev1gwzffRAfmFJuZsH1jH6miPSTcnVEqCJQVPKzf2aZ",
  "key17": "5ezG9FUNfxrVxoSrb9RUrL9F8cWA2veSbbLwnVjzSKH7adQto6g8fgmRJa8AU9Jry7TrJzFuTMAUCop4Kvt1Dy8Y",
  "key18": "2Tvyz1c8UZu2nGvYwaqo3dkPnjrc6Ln9QNBCSAkwhh8ezt3JZUNe5GpLy3QAB7RqT6TxovEhjHbsZB4Nigr6s1R3",
  "key19": "5K9LLSfAbEZ65WAYVevYwtuNWMcvYeSjie7NFNRhCQ41EFYPPJniUnuWib5eF2QCfadw3KvnKGdAL2oU2fN6ZcZJ",
  "key20": "36aKQTMkRi6UsxSsi3w3jDBzJobtTsR3HuSGQNWtQmwJMkWNcJFYQNULNrUP7MFdRBLE3z7SXSBi8cgiNNt1kPZT",
  "key21": "2JDiPnVRF6srTQtGxSWnZ4CvzhhcWYjuQhcoEmcKhfQ2qv1swBkY5gyTHcWnBFkG737meUtVGt5DzUT3GhwpnPY3",
  "key22": "2btSwe2oq29LpyDJF5p6hfDAxTqdaYnKAgQVomBnGZSXSN24agskvAt73qY33rQpePCnXPPFYfBxA5nLGtmnCzNE",
  "key23": "afb6hiiAXwAwbv3hupvt25MXpafx4gjGFQURvJ7nzTg795y2cnEFUJRR1XJmkyUFuE8c5aNHd7LPftEe8QeosZb",
  "key24": "2Tn2mJPji2wuFrM1nYavp1Ga6XMUs41o5B67eMoKY7LVmHQaqR2QJkttnMJueuNg3pPShN6ffzxihQKkjnssXdJG",
  "key25": "5EXJPdUh5F7U55mc9xeQHFJ6QGyxU28aTFGCGDxfdz6jJPAPqEMAh2qZUiPjk6MoLrApUDAXRBosLHxjc5Bb3W5n",
  "key26": "3mErQxLMSb844btmQLx5kp4pA8TZ5tGcDjoauzCTUXLFdmMi24eYJgUaDNeiM9PiNVfC3WrXoHWMNjmMaJPCPaiD",
  "key27": "2F63YytcLk2uBumyQ61Y8N8x8vGbtJGkkZ3njLmvE5tFdnHP8x3KL7YkcAFLKTkncYfQMVE3NXmxT5irAhKvmpXk",
  "key28": "3c9DjHRxJ97gBbf59YNEpb7dsynk756PEt8hbrQpSC8D1TpVEEQR9aAFM94MAEwLDqJX6xaegprboeDzdUhw2GY5",
  "key29": "4Q2tZankE4yyG3bVx2J3NDVBPkhy2WWptbQ8KMCaWUrCnNqT1AEesdLTaW1iAFwtRcrFuj3rQ78DmbUDTrDPq3e5",
  "key30": "3rJrKeo9qzgvjFg23oEz49pfiDzNFTtWs1Nyy84JnGogSBJRCQTmnBRcCNQ8i3A1bkkgL9m7tt1SDtDiVWNsMogB",
  "key31": "3sEKrwJqRpCUUHKVNWynkBewvBPRC9RKjUBRmPfMnh1zBpmNmvhA6x8niTHbLuMQnjPM9xPx1r4ywatyc77RQrGX",
  "key32": "5rGzgnUagHEtDnv9h8hFQ6wmWHRGA9X7rAHUvqcXhz7PFA2mgdjm1YNXyJqoRTUsRNwvyXBSxLFZCx8BsQ1NBiEv",
  "key33": "5zqFKQeKV2UKAjEadW7FmcEypFJFYvip4qmyUWqscnXo37E3JgezTCWtnsRduCsBNK3BwBw1q2qk1pVBYZnALieF",
  "key34": "61DfZYXcSrnfAV1VUHvsLFrKbaUj9RzpcwShjDaw79WCUDECeT6yN8EenWTQsEAN9CL5icNWGp7cQHBFVKkcdXzK"
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

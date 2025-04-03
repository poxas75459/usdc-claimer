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
    "26z6rEhzhtQ1pfq7NwDPtAT9neBLFZ8TX78FAhvBkNarcHbKLMKboXxA56GDUHY8Z9qDRwdJYdd2MHx9kLE6K1Vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvDzHswUD1dm8RT2NwzCvtpMh4spzm7TSbFWjfigH7VFTkV3AY2UzvJUKssiqnYfP3re6qg5VqD7oJnAimq3PYK",
  "key1": "4ZC43SVn61xiw7K6VzdwYW6xpNEk9Mr1RbhFkT8Qcf5TiofuQRFsY3Z9HLtjfLWicqQ7y5t8XjSvPcJGjbgGCJGJ",
  "key2": "2AUctLbeBiTGTUF5owyo7AzTgk9szzsVGBHUMRMkhCRcZTqrjd8UKadqYDuHdfkNxSFcEntSKCNjesiPJwYMLqTM",
  "key3": "4qR8SPhALaJreQPRzoUi6XKxd4H95gyKYtnPSWcQf2rDLkmv7bWnPfz69eCcw4nqMVoFnHyX4yXqmoND4r7jXffk",
  "key4": "2FHHd7g1uzDJTBDUe2TMPWgWJV8KieMUxK1uuRbsuEmZ3isQfeJuRoqiNUyv6KqzwvpHoYSTMj7Wxpvauhier4xN",
  "key5": "4stUJj5qsZYmwxifgtWrV3JjeZF5FSzz2i7zm5msTMMvCBAKTKSTeC5wgGwaghmojhoq4cDn8tkJA25eiKJ5REtR",
  "key6": "XphHwnSEtBnS5SLJdr3gmxAuvMBXVWS5WNEDcLyvKiKQKsutxnSfxUJy1txXJ7tEWNQ3f2HyJ82BHDHuiGhhJrq",
  "key7": "BCBzHpBi5VtgkyL4BRzVEPxfZy3TvmnvzHxc5NbJwjFd3rnBhGDvqKAH3BJm4UTrngdGVTWF2LNY84cepS8ehFZ",
  "key8": "2Te8UjCKRQzxndomARNayLbBqLgsCC4k9tbsnhFUaXwA2AJWwGQiVCLZ9ska5KXgWhre9BHvfpDxpBFVEfcB2okE",
  "key9": "i6djgNn8ihAfwiyktJ6d5hF5cBNHBBjfU67PEfTQAwx6bLtQMk4jt9ZmjNEyryEC1CBmqCVeqKLpKMjM3g5g6c4",
  "key10": "4FjuYz3BhEBMQCvRepz8mY4vNV5HNk46pT66nJEd2v9sT6MyeqVaQXBAFfNjVimqhef6q5AFBLJoJpKJi5ntPZSu",
  "key11": "aWbs1DFZjnWRWQoqDNueDbvYm2BK2sigTPHGsRw74zwBo6jecduUByopB8WZuZE3F13i55BsJnE7SZR3ANQB8za",
  "key12": "2H3TcGDNB6cM68MG9gNgcUXLmTuL8XVqiaDkdmAJeVDD1u6eqyJzxiGaq7kyxG2yfftphNNgi7BNUvNKHUGA9JWW",
  "key13": "2DhJZDxFE3E3cnmjifoM95jKxAdMHyezggKm832CpeGNJDtYmCmAejc34m9bgJJBGqE9r6JgC3ZWNVhVjLicVy4M",
  "key14": "yxqVwizsQi3azMW3t7tVNKt55pVfTD8DPfi3B25PZVdjRGrGwtF6x23KqxPQxgCUtsyDx4fj11V5d8ARX3aoYBq",
  "key15": "rjq8R4qgekLcgRXakeaDeQQnKoCRYm4x1jUD95LrwENzV2dpZLcXdLRtFg3xTRePg7XQCJwckGgnyjzRrEsTeuD",
  "key16": "5ap1WFQe7J4Khf3BQoZEFfayy2z9Wx8itE66VT7bcVAmyTrX5ow8HvTG5HgyPfyHwmW3KFAyzdhqZaY5EDH2h7CR",
  "key17": "5eiUUA7xHuKP2UDMDVfPqYZJQeYYJJf7rbwE4h5KMzNgAumCgzyLNdCohy6gpg5HVtE95DJV41ibx6Kgn8NGyQ8y",
  "key18": "1kwdYdDDJUvL7HdNm4bZ8wNa134tRgJjNowL1cvMuuDmdFQfyYnGMRVmWJ5T3Q1B8y9i6v3Ynig6WAnor5PaGfJ",
  "key19": "2JogcjXrJ2fqPcyBDWu22dPbz7oPGweS5Tw6g3KULKTxy8GUd4Dcq4tNgU7TWWKoeZyGzbTmbsrReCbDNmp6xLMf",
  "key20": "FFF3r89KopzRDx8RzEzgBL9YP21ritY1aMr5kKfgkXcU3MNYTX1jQkQ8M4bExg9QAHH88VNrPv6H9LHHUV4vD1K",
  "key21": "2XCa5g8bKpMbDJoRvfTxabK8B7UbffVFdzzSLuuWZkmWAp5NNXhvm2rRvBFVmpZhm9GgxxMijJwwoeXveSQHcr1K",
  "key22": "4x5DYmWPru5jVHc44qp7qSsVc8sZXamoBtiASq9kotvBejze3iEVYkxKSDf53YWNj4fdqdsdVcQLm9VJdsaLozXK",
  "key23": "26c1aKPNZ1Y1EKgFmQK9CNdAEenyGuRGyfcv7MaZjk3LVd3S8RBoFdr5AhJoo6Tno8qV9CGUGu1tn7mcVQWemJLt",
  "key24": "2o52QyU1oV6ZrYKwxEUUg1V4Pe6mt6MKnMf3R8isWBtaAUKzvup3wsBnQE4RoeiT3j6Jrjs6QUz8U1tEnrNdkNWg",
  "key25": "3pjfc2d4HWAsvRSS8C8hVWkpzaSZqFoiPzdz58i39ypHVZchVED9nRUT28hT2pb5jrMBx7Vj7srV7G2KB7DiW4m8",
  "key26": "272Dmdrh7RmoA9ieewXk3VHt34cuVLHiZU3se88SBB4Zt8uFMseeoFM2zhoS7YxKMEG68pbkpPSP1h1x25RAM4So",
  "key27": "3yaB913RBryYxoL8Xe7hCeRqvS89kEwZ2cM2DaqZxgZfdSrGCn3Jso4Qofe6e4ydB7rrrZYW3iJZBJpRhaCyDjJq",
  "key28": "4nABJpxaiwHCYb4dqKEpnk45RfEkDHwZc7981JJJr6jUzjZKuaQruFN8aofAPGpKrWBRDfbQme2JyGnqihUGTGAY",
  "key29": "FvckseRZbfP35jP7fdLWy7kjp1Bw3ZnGKsNyT5RQPEVUzgzzgKPrK2iufFXaNN3MHfQ5bbfGZtuC6PULjr8KeBd",
  "key30": "42TfWrVn8cazZYYfqNZZVBAoyQfwh8domEx9HEz81txdBekGY2b64dwgTFzGPitXYguGQ8q9B4QLuTfJpsHFcBML",
  "key31": "3YFDruohzUd6tg8mz9p2LGVGSLvdo6vpaCBKd2Qn5YZXALf4UwzifCkfJRSXHxH2eeJ91cWWX5Gabf8KLt27Th22",
  "key32": "2Lpc4JPhAAaLGGbLzwFUXH2msGU7SDRWdkYt2sFsutgpYijygZKeoy9FW2a2Ra2PrynEPUwroTBfKhNwUX7WZCC2",
  "key33": "UH3JmSye72iZyVNRikv5XP4tDWhSwddYMP22yfDcqdZDNAHxBQnVv8Wmv4ckPNUAudBkTXFbKm8GUc1zEcfmKEH",
  "key34": "31cVgyx4W5nYwTscQ8erbzaR4iv3NKdfZe3DnguPGjWwWz1f9YrXP1o3GdQB9arCU4m4VNnh5tXyrdUkvt5R6jkt",
  "key35": "pHsuoUCy9iyuqvhdvd8UFiLhd9QAJquMN1gTYtXWZoEbTNArfaXCQnF9gqSMCvq43Fz74U8hDDB2pEh3CwvZwRe",
  "key36": "5T8pVyxaacKaJmoG9fG3qftp7CVzPNk8zJi1mLiJ6YTDDTouPtBcrexFaxxUPubSNAJippjswY1rfTZx85bm58Qa",
  "key37": "qCzxktt6gMixYLzhdysmD8KYsPGF6od6fzYwRhJSYPoAx7Jdb3Dmg39uYg5m54VvnxgHU1AEFbuqaYs2Bs142V1",
  "key38": "8fKjfSBTLcRHLhWWnMZd7z7rs23SNoZXmiR7X3UhWwLy1E87CVSnZTfLtg6pCsT3xFAfTXUp2jDneAib3oqpG3V",
  "key39": "inN4Ucp8XR1UhkufmjVwRpu8CLvYXwhdrB4Qu5tkYH1zzezSrwQwZaLgpqpWsH57X4n4F5KhDuzS6djhzeJFx81",
  "key40": "Ze4EP9iEKb6G4HHSHWSArBrPxwCXUUHPEyu2qQMSn4cVmeMVmc5rAXaoqnzUPMZnHHQF8mVUybGF2KP8G2YpE6y",
  "key41": "4y5qubD69ZQrdgyavBjAUJB6Sa2HMXP2qvkaucGpwCBEvQwrU6d2UCJTXT78dB42suaAXEwTtoyQFA33JnJwUd49",
  "key42": "2zsZbtCQ5apM3jsKfrwGZCwtvbaMq7DagSjo9TGKgHLh52khNHAm2p7nVMHhMpQjAsABJAMJGukJqieSNFec9jbX"
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

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
    "3AHn5aLADZKTW5wQPnEhEt1Ydvqzf2ZLKKHrNLcPXfF4RtVhKp66LY3Zf3SLrj3fmNAxZYqz9YQVznZeSCRGiMxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DmHoYdFQUX9gm4RiHxi45uikz79KkKz1KnTAKiQePFLnZDtz8ivZB3FoVRttaMWF7WFSQc4wVPjzMwLuioD7rsK",
  "key1": "54Yt8NTpLfgvWgab6ThHypJUeevnucFZDNCaS6tYBo4nfgbKcxxbDJgrhiP96sH7h57wCPMMk14muSvCJFEKt7JF",
  "key2": "2PZAoR9PGoLvRVZaspN9GBjtY577QFFH86txXhfQ2j7jvQnrcpUe4bRNgEEEFC57rXEw1Yaompxabct9DuBKX49t",
  "key3": "4mr2jE2CxW6gtjGb2F1KvnrnwUPFfRSpieTtJmYCKsSqKtV9n8XmtS9vwCSyufZ9ZUaDvjo9hUrJ6PnBvrda79E5",
  "key4": "4gWTnBUJ2aRgYRAFRY3Rh4gstbqdagzYGDoGn8N5ALHfXkMjZsBmS6vf6SMmkwWMUVZNdmPawBFnGghvGPpkARhk",
  "key5": "4MQbmVoQnJo5mUWHsuk1KZLnmyi74fS8Zvj27tQjg6Wi1b3eZSZRxtZwheEdbQoE5mfNHzxR28c1mNQ8VgwEo8S5",
  "key6": "4yPEg3eCNXN4JXqVbYc5PABjhDjVk6pnLbhM43jRah8MKbjiu141NHwBHSBZBi6hM6XfwA2ZwHv8iKYMT65U2o4P",
  "key7": "4ucWDt9pZiZPcy5NpgZufkeq9rYYXn46HLtY5pTyri92jWJGMQeDYfxwzAY4RVNAkoWxtWHV7CLf8wpCaijZ86hK",
  "key8": "4Kirrh16WaWaNqWoq67R992b95C1wE8PqSXuWSEDVTW58tGAE5vxm6uzzBrVGUcffg2NPfxqACxfVE77rmv6asRT",
  "key9": "3RPRYUQPJ1NxFZQdBtwkaQaRFDUtVkfVCqw41j5UxxjwjEZ9VJgRyatfSySgwi5Dwc6sLhajBJpTgUJiz29HVehp",
  "key10": "HhRreSKsoKBjHZ4y3QPZYRBd9xPETRLknoEJv53aYnRPLNKRXPocf1UdeWRLwLMTBPDrJiiu5M6QY53JJAPng8N",
  "key11": "55YP9DC8tH71ce9cmUPYc3qZ2KT4pTLuYcCAkjHtyB4uMeN5fh5yWDAG4yqGxj6hLTdmEMJ5NiHgtUSCGbGzGgFN",
  "key12": "5mZqwUG3RPKgPNb6MfKAiijuwKfF6xUULw6bQxEkvaA4atM4frph7RAuSjBFAAu4fnpqquvJb3yKAbcjDMuzbbgb",
  "key13": "5D3X2YLA3BNKi5zhhKYfHi7xnD5dzpUUwPgTtAyq3yCsCKPcTAk26CdGyjGLuDzQ6kXuCLHXDD8txBKojYw5uFxh",
  "key14": "51oywf4ofHNHZVMq8tvV7Zxm8Mtod1bkSTrinsGtaVMztehTQWYj5WxDmfkwMK659BhEthCFgAMcg2G42XSUoXbw",
  "key15": "RxyqwiYGFHWAWfxSUGBrSNZEyhUbBJM3sEy4KtKptBQ5KXDuXX5wDSTQ7AjXkVenqyyxjCWNsH6DothAbYSbsBr",
  "key16": "oRDhbz8mRRFZ5SgWmZyKABUqShMxiufFwhDzZj6BVKb5isWPThuM6LhLBjAAoJDDCqcBqm8jkQthkDg5Gvd7J4g",
  "key17": "QfHDvmK2JyNDfFjPe3tXenrRndFs3YLtPDDFYa2KXJSBjBC4khL6uMYmuGRnPs4PJoBQ9VBfiKsi7XaUi6SUyHa",
  "key18": "EiHjk97bzLozjmqhhLfVi3ujkXZ6miu3Dnv4VZKCajYARS4CjVdRaDnXHiMpkyDS684KaJTKGee5KQHPJaVsKFK",
  "key19": "3SJknYKL97tBwawaxkujxpyTtxMjd7UySPuvEnBQpEe7s186ZQXgUWWfACrc1dccDddE1QgpLdzLGawB5fQQjSKe",
  "key20": "3oE7pNhxxfJ5yuWKpmGeM3p2bSsRoGnTEUM8xuuW93Suf1hAXvdKkbPZjJ8TyaU6UTPPfNKPUWB2iviLBZgcBW1B",
  "key21": "2xGfsAjHGtHBz1QJgxSRK3w1pYKCdigPuTN3ahEEeHLcDRPg66sf1P3E6FM8wfz7eDLGmoKTCp3yUGz7TLeZ7sPP",
  "key22": "3Kk3TkggudNySYSvz6m5gcrkjeKWjhgKcZYnqCEnXdi6FubnZJEYY9RyW8MmdmsPByyvmUqAWspcx2uny2WCgVGM",
  "key23": "LYW9ojHM1K5FWPteYU1d6ntSpoMvWQSesXYDGYJ1kjHxiYv6FqbouNkLBoL2BGojDozCLwsKS6HiEwDYNbbQtrK",
  "key24": "4oAWC7JBNgTHzjc6hQrgcXhvX9Ao1z8fbEts8GiRLu9DDPTPKdYz5Gbda6HS6tHFoCdV1uajZQXVAMRzCUCR6tm8",
  "key25": "3SEkGT2hNZSeSujzyUsSr9b4jhzYGgqjXGDnfSBpAgoN7DZqXqe5EJwZdq7AmMeak1bzpNK6yc73JzCDb4wHeRmP",
  "key26": "4koddDJKfJtrmbKaBaYXRs2cNWLFAdyBJyBXdae4WGVqnTHyTtqaZsKe7eop4yPfdzHJ1FemTmL5PzsC17DLGuGW",
  "key27": "67gf2hhrLLPDS4Bm7o5BaDwjBHaDWH3Hj5RYXwBSsz1msdzDTc9WHZEpjacTqA32EFkdGKGdvja7fYZNMvsKHMxE",
  "key28": "2Y1v9uSrfR9HRC1vXLYqCZhqoLPEvqGXDJkrDGS9Sk7yu5wJTRXhC3Z8jFGsTcsvEtcrYDip5kGovGRmAQQC6QJM",
  "key29": "tQ3YMFzxPHwjFjTGSrhe5yMBmw4tx5hqUYnJoji7frorv72Yw6LBspJrKJSyrDk2SWkpSw6ZDGEd7xZSM6vquVC",
  "key30": "f7tyooJ8Ccoz1JhtG7ereqM8Ves5DXCJ2sAS8TjwYi4uzr5dQckJ34S7yyVwDiSqC5Spdjsu8oxj3pwXtMUJM3x",
  "key31": "2GdyLSRskBNUM8hiiRCpWViiPaL1jQrSkciiSfns3xE3689t8RuNHSEcfdSMgWdPzM6n8f1u4yHyd6LVeQWyG9BL",
  "key32": "4aSds87C9m57iXCj14rmUSSEU1QLHFyK4hQWtHdVyiamhwR3RyswNE4CbivjUjyrkDL8Px8bapLQtfZ9KkiC2ZAk",
  "key33": "5gpmnHfU1PApkCu1qyWbx5BdEkTWCpVSRUzbetziQCThzD6P4U41UXLZrp8sZqR1YPhEoHx3PonZvM5apfoockMx",
  "key34": "2hXUCV7Z4VnwTwYs3cywgDaNvVM1LmBkUru7cPf1WPUnR5ZGRaeAxnqp5hVBrE8QER9hvtJhrmJHwonzuAe8bTzP",
  "key35": "3UCWe1fv2qQhPncq5TJf41wZXbiociRpase7ZEv6duKiBhqg4ezuCvheJxb3CcLSdSV54WiDKPq6Su4iXWGfuWV7",
  "key36": "Pajq8difNhWSSVMXTH4znM25P1JQR9mLLaZMuBsneggv8BGbyPEk1XvsBkSMgiABgeAEKWCKEZURXLxb8oTwTFt",
  "key37": "4MPrzx2SDEf3humQpvx2DU1KMtutRXw7rzkGAT1T2jpiQzx9M8q3a1xyqdUrfy2Y3srG9N41GngJ7YivqfGDuJvu"
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

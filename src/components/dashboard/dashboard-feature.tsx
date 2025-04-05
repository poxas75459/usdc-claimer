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
    "38KcG2LMpNtYRinchMoNpyYTh3eCe2AU2AEDRoDWSaz5Z3YEVwxFXhEjMXkP8x3vePBh3qmpoK3mnaaNurRtcDKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PaE6XeJKMLnsRPf8UMsmrwMy1WaasnK9LnMdfrc57Thz3HKHbCoExWWaHtSa6A1NhLwkhWz1fgtkWrE7hjqs38S",
  "key1": "WVr4fJkTxHKqtveZD7spQziTjJSxdfAEPhBAXvLVzsPuPj19B9V1oapmfbojeG865aZBQq9gGWS5mhVkXHG6GK3",
  "key2": "4N4XSrsQEM4qoHz4jGvRbUywuhx8bmJ1CAr6hmpBejmpKnxNtRQ2GkShV1qhfP3JoZ6YrXSe2DEhp28TGEEyJz8E",
  "key3": "5P9ZmzJmFjhNFuT9p3mt5pSQNEu9BTrKcBZu2nKCVged4JjT7AiCyBSBt6mCUAGVKEvFAHRU8gNaVcpfiRNjLXgb",
  "key4": "wTrQK46XLzHNsbmoq4DwUXiMjhNs4FdKW4HS2aHJzZRBcGSJY4diRFrBusGrpyp6pF6f7D4h5jNNM3CQTBiLw7U",
  "key5": "3a614pY6Q94Pjcn3ErD8jgKApihhRTPv2Y4xLAvdKXqBGPqis3MFqmkKptkZy6ts3T3LDGP5A6PFeHWfrb8RbVZC",
  "key6": "jPwUhH3k3YacXVNGGCvMYMrwDtrqv7sX8gytiteB6uwiBNbLwRfVbaWvJv1cb8nTnYosicdvgUdFC1nhMHSJmt9",
  "key7": "NQtH4PvgVMMXAqDEjrt9GP8dA2xuS8JJMrWYbZ59o9fqkeDf42FD8a62ZHxXtPGmzdXRbs2xbqiKncHbF31KyZh",
  "key8": "5hVzKSdr8nWyN5bhch822sr1vtmExNNcm3N2ZZrpdABmzNjLbJ91FSfpwr9NaSbbapyHNB35jCQCi9yBscQpMr4o",
  "key9": "5wJ3zSx8mxW9nTmXvoBqVC3SD7rghWnE9Cv6991N3K1P3pyyA1o53YTMP2NgxQPiCjUtuvQYVSFGRpYRDevVZvkK",
  "key10": "5AY9pK4MjpBSaq7aVW2cFfhsszMV4wActFKN9Zm2355GTG6szMkEZ2VLh5LxSi6oKXp1cvcpDZqtneMugg43A976",
  "key11": "eDwxC3jc6GseWRki5kssz5KsSppnaU1UghN5sGKGEV8Up7h8kk1WKXEthKHiu5fEUAD4bpL8QL7Vhx3a2x7eFmR",
  "key12": "4LuTYWcMC5TquYVsGXDxYg9PGgo6r1STMVNK3JGotnX3nYkondEQc47h9EgKYEhKoB7PVgaYMUSFJn1zoQ66rKMh",
  "key13": "33aYdHi76fuZHdzsZr3JUaT39whW8eevYm8b7QYLQmmbp6QdciC2uHnLEUijLcWGmBVtdGQpqNNeC8nNoxTSE9JQ",
  "key14": "kuvaHUcFPnjBL5P974KL6W3WHjeL6yskfmDqV8Z99UUUaSogFPcymYxA8hsNYjMgGQyjt3pajMMHvVLkZERF9XS",
  "key15": "45QJghJt9s5FzDeKrPZ1QmAdw2pSaeZcirNmMoq8p8Nr7ZQqwQqPSwyVeCYxXvabKKMSQVTZ26Esxu4rEjvTVeM7",
  "key16": "zynoEy4vAeBBBcPMRguZJRrRjytYa6kc9fFKFZJGtc8EbDpmVvFntVPZivdm7yKZpZHs6t8CRJQUqHnizWmeDQ5",
  "key17": "5MqJcmCn3PejMe2atjxAUYG5hsc3bUCC1xR8jWxkhQtDAFhKXuMFzEzbwUJ6iXw1TNkMNSugQzvouJoqop46Fmc1",
  "key18": "4aRMrYwwuvZtKETHbSjtFBsEgKmToDrcN3pn4WctfgaNLaH8bCqkEHLvWkGtmqTHs9F2pZMUD5vjYNfssuF6D6Fj",
  "key19": "WD7hEFnmqe6wEuE7sTwVb2svuhePbifdMG2o6XtLS2odREGkaxSM7rtmhhv2jG25Ndp2hQh47thqSNBY8rwouC2",
  "key20": "5mFsWajrShp2nkpyfRgzoFxKfFpR7g4cKyQzAsgyA42x1b1XGKWY1fgSVwzj3ZgyvSDmLYNfjmDki5cMCNN2dAuP",
  "key21": "2dmbARUVVxxrh4eakLN4xa9eHMdRC5dAvo35oE6rnXHXrAVQGioD8VvVTvRYAY84YUxfLkp5LDcqRKQtR4zLm3Ut",
  "key22": "3o8fCrPecLzULLHuayut8iXRctgzpphmWKpmMDWmtRvuk3r6AASEEdGdWKNywST7KekWLxMDMhZNLYkBjTC69mRU",
  "key23": "4P18wgf6BvEtXqBZr2W3e1bSoPJwPaJi3qxYtg2XDaEdRtt7c7LwdbswMeNEpyZT4gY8iNLjjDW3V1GFiDB4sHKY",
  "key24": "546xfP5h2AF26ydvFiT9LJhQQcJFhdXjn3kPcb8ynoo9RaaFGWkUF8iZfPApjGAu5vcCJkFAPpjWWTxg9gbuseUC",
  "key25": "2T2kiNQSs8WFXugvQKhDutrErSR9o2Au4WHYt9RtW7GkBvkLFTCnTJQp18LLY6MJ4TteZEKtd9TRpBhDig6m8Sve",
  "key26": "4MBEykHUf749PT3hKKnXW34TUCZk2112gHpVNrGG1p82A7UkqXBZiz3udXLjaqiw3vjsPNwJjGRWSnqEDMgLTBae",
  "key27": "iBDEMCbmmpv5fbLs6sZC8LjqZEd6mKXeiphvLVjS9gHAWo2QvmQbxBMVm7y6BgEiE8Xo5wzLELaromB334AvFZh",
  "key28": "3sHH9YjC6TGPYKkxgZKY5RgDtHZqjzgwkjQdMLdTfvEEYZaA7CmGJDCzE1WLchpUDmLts8KE6rGtzftCx5YwYSno",
  "key29": "5rL4Cav1FC41x2QyRNVG81g3xgWWKqPoQgyrnJfsqr6pTsqgqzC8ud9auTYHjaGTdoXezW5Mf9P8r8C1qYyRjcRc",
  "key30": "3kjC3ZqWmJ7VJeMBbqFau8sKoKd7dfUxu8Fj18EUb3oZQTqkgsXXxReqAhATDjcrRFhrVEbkM6xTuhW9n1kBE97N",
  "key31": "4u8ED6bMSTNsSUV7PvHgrujXNT1obuyWkSRue5eeJZFzbsbGFAXz5wQirECnuxVvFLfm2Pfen4xkeGCBqvamh9aU",
  "key32": "2Hh9YWtQbSfbwtu2zdACUwb6RhmKupG3Mnwv7C8dvDxivjeQCCBmxkhyTHwFWAx9MqcFCSxeob657AyRNuKTPRVV",
  "key33": "5KQzAPXENHow99DVm1FgoUe51wYsKZbLLf5JkYxBFbSzYFa6UFFd9VPQwMMB6B2dqDXrSnCxFKvi1j4vLqg4S35Q",
  "key34": "LX85WewqgcNPMzFie2CU51mwA1zxJhSTXTzcSDfNg1vqZ6fm6N4T2AgE9Z15j1ZAPuSojyfoMNuYcnfWD3S5jtJ",
  "key35": "vBnYZZQvW2RuyJtFvxATG7G37JB6YGiuAuqc4sh7zhq2dhMVkDJN9VsHQSwEkYAvB73ss5rxNzL7o9hWgDda1JQ",
  "key36": "5FEaeaGqcFWgXdXCp7mEMqDu8VPB5JXeJbjtr2BnYyHqonHYHrU5tcWNZjXad6dhvTQxHaQ7kcym2PxYgKnBtZYc",
  "key37": "5iUmgC5YaqKwdU52BgcyAVfnEebQHm6bGw5hnZgaxmB95dbA6qyuszyqcJUfxwbVFKM6Zi2q4nXywPcrpiXNwaYN",
  "key38": "2x94AynNnEg56pW5bUzubz17ci7Kw5AegxJgemyswofWkVH5bPbzxWKwTs2LyyJ7Fhku1YMeZMFRvyfb3L1sEFVU",
  "key39": "52e9sxSQmDnNJZ9BqvDcTfn95k1w5pXY12LwXFPWntrXgMJMxBLb1UWzC2EELdfPtEnesVt6ZmxaNQGqmbMekxXM",
  "key40": "5yhq3zFUWvv69pR54ZUhjw4NEFbrmyjCnzVsgysiBYfZqCa6okiBb7mnpJ1Mai47NaX4jAG7sd6QjWjMdU1z7SUq",
  "key41": "BzL5yLVhHNiWCUQ1dYnNuCpkTPmb9dgNM6H2dMFyTHZoNSd4vcKjATu6semqkjJT9BXSQF9r66YazBgBckQxoYL",
  "key42": "2WWKd8Az76c2dCMFSaoz8YDExChKGqNwHCPRNwradyPDgc8RTyLUzjMSbviLQ2rMuW2xvCLekGW4fkT9d3qka71i",
  "key43": "5D36tX9VpvrVia56eCoBZzir5ZdZEZc6SrmgSCZd8cHSQERQtKwNmBbi8d34U4tqWPCAA3GvykFsEEsUTSZWUVGR",
  "key44": "4y17N2zsH7f15egy1Cv5AWGihzJgHuXUHFXiKH1vjU5o2uCarPgJmDFXx69jCW3y73Z24vCR5ojXZm1HmF1qymCJ",
  "key45": "341J4n9hwVe3oT5FwANYZZLUnF1GMAR5JgpPL1N3FBrX4TeEG1LSWDCJkjGxmxZ9KArsTbppAjCCNp1N3bmhtY7S"
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

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
    "3kBpsxBWMZ3EeDY98Zu1PaU2GW1c2eCuCLLbDygJqX7GecXDXD3a5xE8uiDxCyj7wtphjNEsDnQb8YQuzZuFdhhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "594K3ebKsAHe4KvUCb7eimQkEypqeDyjM2tSoJJfenaL4D4ShRYWaxMWBe5P2Wm6VtNvi5gFpfEefdRpxggM2PpU",
  "key1": "4ZC2CsJuw2mLT5pRNx3Eo27jDDFirwAH4jvqjfUM88byQKnBnaXe54zYDkrc6bptWo3pHy7pYrjq9vWjXhE13vpM",
  "key2": "48BVfhNgvvhTU7SWpS3xNoEwECZMgYyM2bt5dLD73zQZcw1dsuQn6TyecW4tGw8v4Ea2b3uMihioYShewH66YiCr",
  "key3": "61ZSHXc1Cfk4xcZdwCLSsGR2fyrQasKUPko5H7Uo1Dsaw4wiYoyCwAJeMtdw3qVdTEB3J66dv33ktshBJuapd6yU",
  "key4": "Z3trmjGhsRVXugoUgGYuCm5keY9AwXixhpUvv9Atqh2TiViALuUq3yYe6mzLyGygLoM5T4vgyK6HKU4Fgu5MuFu",
  "key5": "2EPt3e7pKAn26MJMVdcpVxjFTWs5Hso6kzVE3Fk9dNvenQpp19NLUUsvzeodQjMkcV7hkrdQU3eKBCnZuFwChvds",
  "key6": "4Kv4mtjHuKVyRP7W3dyV9teRqrwYa1HD6JfZViwK8vpHvHN9kWzsCXXWcuM4ykVWB5LsygXiNnfYbht2xGRwPEH7",
  "key7": "29Xuv4MN3upzND5SZi8wwDuzUtummtBAQahRX957rFhCBzQNVf647x36rDGvqwMcuak21RdBN6jN1UnTTEXPPY8o",
  "key8": "4Dd1G2Pdb5jEJXUfNMrNMtBUFNRLthFRPEALMrJkacTEPoLXWxPbwmRydAi8qV3WuNS5FELY9Hj63pCES9XvhqDD",
  "key9": "4sgU9hzsK52Hr9qwWyjbfEhBHK5HDBvdN2GtV8agZxJRpqhTMev7qvDV9E2dPYYDW63FqLFSKqMFwbDvHsnryezh",
  "key10": "4pksFFjgiGwyro8BeEP69E59FfQiNdrUsZW8D1t1VoLh17vV4mhw7PPwkUjiSzDzdM69WWmT9MPkBn4Qb5xjttUL",
  "key11": "4jGXGmA9YuxYh5yRYTXt8qpKzNKX82wbbnqL6DPg1Kmu1mXFoyLhajXzDSW9PvN5fS6V3D82GAsP7FiU9VsBFsAo",
  "key12": "2R9DS53CFpBCSdKokhtnsZLc8uc4yMigxz6JyNmRiDGbLUHakWRi3MvL4rMzUfWYbKVJEzFuLJvnfWEQiMcnDrF5",
  "key13": "2MZYBLYHM6QaRo9AYbkkE9nxHcAJEt3523JDjkyBGaPTGYinaBeUfz9owmeUhMhCp7mURayKB9kC9s1cqdzkqErJ",
  "key14": "omwfHxaViNLTKJyogQitSKM6p5mChmjXHgNUR6oiQQtHqCGTYd7a34vCny7KjKhvvjhqcb51jdjtsA3i7wC3zaM",
  "key15": "4hyG8EDUmFY8vaMczbktmE1it41e7pQnFHpKjrvBQMhd1Hx8S6oU9cT1fAYihn5CW89MLf4xGFRnNPhXMvPg1Ham",
  "key16": "5UctQjtDmibWGLivtn3ss7YnrnENiwWuF3oiwqonyM6MhQit6hdgUNbz6Zp4jWHEk8qs7GVEt1E4cbjMMJHABGDk",
  "key17": "57mRFc6pUX27xR5Dx5iFEEr3THkKxVSqibeeiRGqPQv6BwzKvrmAn4Ny8uHd54NaurvEy5jnquL32wFY48UpGkmE",
  "key18": "3a2M1w51rQoipVZU4DWU4szZJcWrLFWo3E7WrFrznRkdgF6Pke35DNqWDjLDXf3iZgxdZpQZiK633ThCrqTPqwah",
  "key19": "4ECZZJjPJas3PzUvcVGLVxJVfVeVJdn3PPdTWQgkHt9Y9gxy15Ej8FkU3SrejjahXJ7Wn7tYbzUXq5bsVDQ6ETn3",
  "key20": "5CfxNHYLXwXDZU9xnZkEaxb8JaSWkMxZ25RKjd1vefAfoEn7JCamBMmcE1t6qT8hnCePdw2yDUAgSoYVh9sxHkjD",
  "key21": "4zsofa7L9NxKLi9n4pJHajzkjSdL2vNm45FU3APVR6nWfWb2yD1viSzgZPtJi1acwBbPUx6AYdu2dYsiVB41V9Sg",
  "key22": "4Hsv7Z4pHEeD2F6gvzaD5MbZUedZReK1QvBVpfbhQAgpp2FrL827ewcsU7gQytL2jWNhhRN2BA9tkUA1wcUGG5yG",
  "key23": "4hYSbo4FSWr1vKGy4D48ZSwrK5KqYQ2L3dotoZ1YHgkeQTfvLQFZPUymUwezLnxrm1btzqf4XYTcgbzqjzvLBSfD",
  "key24": "3aXHxkGpkZp8x4FqYQh2fMf3cHMUZHE4QDHyxpBXaBbUcorexbchshZKWDgdm8N113KdaffjvkTPYHoY6YQ1UuZ2",
  "key25": "32i1GNLLJgjjgCCPd6J3u3Eg89amFEVdt1MebU6We7QNFRsfQACkevSGTRV18Hex7oZk64TtEKAXLqVrqkKnnCwd",
  "key26": "W5kZXk1zdZ8RdjTyNALC53a4rSHhbUzxBnT9aqAritqsHiU4XPxizd5kmospUNG6LCB5fS4omjRccYqhjJzmG11",
  "key27": "47mYTPJufsQ1gDiVDn5iVLy9HYmKfDZzAjqWuKpHTF5PdLuFi5fRcjtKmtMyvaMJhCYqy2d9HLoPrx3LmUAM8cs2",
  "key28": "4qnBDkKCpSqN4cbdFykuUfSQLLzwbWU3cmn8LvE52YRqCe5aQp2gRj7yXK6JVFUnfdvPhkRV4wuBhjLzjdbbaEiu",
  "key29": "2F8B8J9tFDCb8uRWccrWtLQ8yfibtsmE83CNJjrEWLzpjUEkcL23drSAagt9ZQC7XixU4gRjnRej3kLkyfruumDG",
  "key30": "4zQmnicLFu3yocY9fSizGE2HuM6WrsEh9jod77Wt9v2T7zL4qAp5NYqBp3JigW67iYuUTDr4Ss7eb4kukKKd2viZ",
  "key31": "5avTVYXgy8VVXtSPs6vGYUm6tbNqUfkA7octToua4XGHptiEHfkkYQ6gphcuFfKT9xfLxdsxPScrqMBsyD1F7Eq9",
  "key32": "4sJw2krhP2znCuwVm4pZ12EMDZQiamg2NN6Yz63RRKdgtvKG8ADYa7n9GGz4A6SfvtXBuECRs1Kz1PDpibTB6179",
  "key33": "4Aq1LtVLTicPopKHvR5gH5qZoW4teFahQbgo5jP5V9gnF1Z23hAUhvDD3x3Yrz3NJB9ZhtWqWAPEbWt3ztdtxvoh",
  "key34": "2nHsE2riKjPBtCX16FN9Q53pJyBZhPPEQz5pRUXwBnc383SyjMELhBTwcT1uRf9v7NZJ8fd9no2WQ1Ud1Lv8w1Ai",
  "key35": "3E48Y7uWVF7ob9KCQ3Eu41c9PaUMSPb3dz8rQajUS65Rn88yEUtZwLMyzdUQEFBLKuZASdwcZufpHBrAT2SWyLMS",
  "key36": "4se2eE9ALRHuhPANCCBEGWnwBLU5rUfmDbL4CWCAx2zUgAbbWuf2orH6ZrJc9r4RDYUDAprSpyuUoCK2vP25NKjY",
  "key37": "3FY9dvCVxeqTQt95vnWaV4WGgqdV4nTgrR7SLDtDQJRryV2MbjzoYgmhX3fHzUH3QMaCq6hPXSv5vCWhhK986mhA",
  "key38": "QxGnYKp1icEfTUT6XJiyGA6Sgmq7DPD9rwzskMdYa217uNKsi7bZ8aqC5yCjWGiH9H25Xdztg6tfYbnEfsBz1pK",
  "key39": "3ptixGAv8HDGPPPp3ZQC8CdL4imWTEte6FjeJ1meP8vmCV6d72AAiNcmkCDeB7J92n9H3ayYPrG7yZN9HCX9Jnph",
  "key40": "5PJux4JrSNZXkXgrFBYQoDGBUkENt4nMaevma6BGD84zGai9UFuiY5jvFxoSacK9D4mR1AmCQj5NmxULLTNsst5G",
  "key41": "2oQ5w5nUhau2muwMqaFoPWwkLDXaLL45nnHCwDbNAY9VzciYfjRV9yf7cXJwRtSovwnZPmMV6MCQrdzcGEj8USuR",
  "key42": "65iqVeUpJRPEnJBkUHqj34498Y16V997jNhA3uRJwYM7uRVSjRcdXRvHABhkdrHaSdmndXDbScadaP5Yn7YGN7ci",
  "key43": "8v7GDxWFBHQvmLanGL3GE3SbAvL5Aq9UDU2DgxTxmDSugUwPfAAq3FC8dBV2mihjktnacqSJoPzAAG6swQ1MQic",
  "key44": "4vMmz2SeiqTJAnbuhSyMMdgWK246udqW6eE2fxUQTQ5BakzJn2itSkDnowRJVbj1oZUNBD5DVsEjsSwL1uhf9kT3",
  "key45": "5oBwfq4LfjPHECm2dRaGrUHGQ52CKqbQC57Axg5dBfMLE7xTi9FJ2Buf8VUCEsG4MNwWdxCXx6Y9sSu246FV5dUw",
  "key46": "4Xx7tXLLpmyg91UFZmB7eX3kMjvyDKCfTFmULFfssXkbkbHWr8sHghN6N5AR64oSyVuHxbNhPKBZBW6gFqw1aeVZ",
  "key47": "58SQxrmfDfEcKYBh9yW9GqJLtiB3rjFcZ1de4poyVLY2TiSXw8fnvMkjKENGfurZTTK4M4QubDBQqaWzi7dF2fMf",
  "key48": "32cQ9WtKerM6Z5d56g5YUPfa8H2anLwzymG1QQLue9fUYbBm7z4YuHmpV5wa4xJrR13RbpJS4jfWis2VxggByoT8",
  "key49": "2o3KF3B2jqbCGungP8YWnuYiCUS1eqTeqDwYYf5P9PcFTRbmACDfSwWLiCany5aqCUCvcn3j2LJ2C9d6aykC3sM3"
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

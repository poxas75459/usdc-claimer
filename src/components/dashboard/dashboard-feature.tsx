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
    "5vUYEFSvLiouqCmAfyfFh2mRD9z4CpaZ3EtmQD6s3PkjFW279AR5HZ9LEKNjatAwoLQt17htEtayg9FuZ2tBVpux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H5ySjpspsLz3MwuUW1LAFrDNEBgue5SA7B4DnLpaF6QtTPZeecZ7h2LMhi569hX48jmLxtGTBFuUPLL55sXqvbK",
  "key1": "5mX2sebNKdrX7aFZLg8rE1bhujbGqcbvRSu5HFu6pS3X46YTC9gKogVaReWivDNKnk24io9769uhJbLxyrG3VURZ",
  "key2": "44JGSAZyRAttLL7E73H9ugbcL6Zy24T1h1Rjj2L9PjBcnthPtWYER7nz1UqqUnBQA7hDPNs59e9tCJ7FguHTC3o9",
  "key3": "5kQa2NWem2JAZHF2G5DgnKZufScuPYe6qri6C6mkAiHMz875an8HvnFLBUzYdHQBbpGurw9HoSWP4vUJCnhFTtW",
  "key4": "12Fj65vsgVZE5H1mHbBfXWiTgvDv5Nkx9smBSPKpxgtExnfTRznRgHekpXD7JdfNNbV7SwK6QKy9Xw5GckdoGsj",
  "key5": "2J6hPee2wwPSMwQG22zgQWhV1peVbmYUuuPy3WuuDVRKgWT3yxofJFaHUWwLa3D26qREVwNL23qz23DFNNSeWNzn",
  "key6": "5HqHA7BMzUNyS6URxaUwCDGa4JA42worwdzCKppKyMdxerirNKUGJi7FE2ScxD2ojq2Y9gCuJbfaG7fGup8M6xzT",
  "key7": "5mGB6QDhJ4k74fFMeCY7Rakhaa88Gv8bA6F8ca5GUDiTLvMbQN5BNQLHRB24WVao7aUbYMkS5AmauMniL4B5FMU9",
  "key8": "G1oiedGpTDF7sCH2DLTyXL7mtgmbeo9W1ZBsRePCv7A5qdDCsNV4dgbyezdfbHSQMRZpTGTBoeonakYrEhnxrsm",
  "key9": "4SseT2j1UzED8kcpgyKRDD6ATM4JJmDLRgz8LRm7XXQDoodaKPWy3xEYHWj89b3CtcDZVpBViDobFPscdDUa84fa",
  "key10": "2xTxTAQZZcXgySqpjYsayZSbNH2Y8P9r8oDh9FsaEZVMqdvv21yhHvCcPG2b3hQPPo9QJivDc5uX9iJefHGT4Wnw",
  "key11": "2jAejJh2Jz9tjTEUvLgDXuMYdhsRRayrmVjRKYtbATxtrcYtPrLjcvthni6MVKmEM3op1G92ny2WfGxf9RLFwkmf",
  "key12": "672wuAxMogbQHzfeGJ4455JVMejZ4J9bpv4pfttHeRUGzF2dMC9DvNHCkcV52sCrxTAcnhue2pCysV6JW9ox72vM",
  "key13": "3gYe7XpNPNToeHxic8ebTzuZrB6rCX7CSt4SStVrVXLnyfkYwykqWSperoRmnLuFcBXyGjjBjUeWN2P96gf4pnRd",
  "key14": "q4bBzS9PsAyDQ5fY1ac8g724YhDeW6t4EodUE5C1XZi92CZrBjMDU6wF5C9hkKJ7wAFKAjVzY7tv1zqm11tNE4c",
  "key15": "5iBjWA5zDvAFY6SUH82obb6QZWyF1SuzUAKPkQHYhoAxYwpnZtsQrjADqyUXMpwzAo2SZkhmBsNGpPUEvY478ssN",
  "key16": "3wiPBnQMCfG5gWkYCM1XHiByam88juXfY9A6n2VdSeeUsoL1qFyZkRwAPxYNsS1zcR2QSWi7Ny5dDPegakyZJz1d",
  "key17": "4DFgr8PcDBY3N1RZ2BLem1cYrVe1PsEeTV6vxqxCsXzpr5ByXLLb9LFkq4mTmZWqcnhwwrw8q7DzkRCkpHbFPpnX",
  "key18": "5yLmzsgskX7U2UUoi6SQsQi8xm9hWpwnLNVLHsLYDi2vEEUMqjEpwigCZBbsYriJ6M7K2TAiimEGVuk2pihZLJN2",
  "key19": "4XobA2m6x84Qa2JN1XcVZ3zNgZJb5N4xNk72ct31tageQ6FBMqB3FhT4cY79CtUSimSTaXP4YbanbMu8rZCEC3tM",
  "key20": "5AyBJPvXwcHY9WVEVCaoDsRJyaDmKXLT5c9sTEWCRM5GC7Sj4PnrWhsJ5zuzuy2RRKxZ42R4VzeBPxVH69iBvhmK",
  "key21": "23AZgeSz5LQUFG3yDU3rCECN5j69H9A86hpQ3rQu1gg5qB8y2a1zTn14qTLCMv5ZkUBmXUE2YMpsgYsd1ArLxoJN",
  "key22": "36qjNAMRwWHjZUczdTmCgAoHart5Lxxeszbw62d9TitTJySNHAmBxeEFmqCX7sPivJH3o9kwTXNP7jYifZXPvnY2",
  "key23": "22aBZxKDGDzJ1op4eXzkX5yw1zuAcqM9yp5bCzKVhtC1BQ9zJjfBnAvfjRfCX9YZvqNV2DmLng1fTVMHD1uC8wEh",
  "key24": "5Jf6ghAsgKVyHiRVFNbgsivtrxhATjC7pjtx6YovYTUiQXckFVqf9tf1kiYhdLtoUC31wYJmdenWnrkP5YGSHKjX",
  "key25": "4nb2bM2M6jm5TNMfPdW1HKQ8kWYY93ivhkqXwVicNo3UyvY4sdSyoD35v4zR86wXt7MVdfyq5afA4fLafAgWc15B",
  "key26": "3umVM7tjgrcmhDkjmVv58NuJpBdLgnZkX3cgPFXvsjoQcvpxpiDSognBQcHQRAz6qomqoRf61h3S69AXc12pDumd",
  "key27": "32TcKcksV8ptqG213vPjgNZ9DfMGqyACm9AiV96qeYtZ56TkENYqkH9gu5jiwGjfq7AWT7CYaKdFBAH6uhwRmBo3",
  "key28": "2N8dysPFdK8BZs31r1i7MSZGoYJSNARg5F8aSUhCE3w36VNKNpkokBUq1agjihoXpHUbWk3Ryv9BdNJiR92Yiqet",
  "key29": "WZEqWwTTpwijTPgTJHcb66EULF82V79VTfJ3sHpzRa7SjvNi86ePsPHYzaKe8ZuEyUjEcGkWWdwiaHg1H8gh5AA"
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

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
    "5QUVTGKLDZxiWednBbQBGrXmNTSUc4bQUaAZuwGfhrurymxXJ5o3BkNKBMTtaYHv1Yfr37L4p5APQnHSogYDhVk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSrwggwmTqPFUnSbQ1cDMQHC42cWaARBjVeNvedHLVALtxL2hcyjvozdHQLFHkjL8p8ULvnanuyMZ1Do2fu5z4n",
  "key1": "5mwMWzz96awiG4QvzVPcWDVZgZ5SX1KdZwmxVap32HbXQyqmqtgJ1HG9cvyhhozu2gNUdY3LtxcHfRNEtoqERdrt",
  "key2": "61QE25BvZPUCS23qyBhdmBeXiL3Ye9VQA4KTGXMcBMwXvvKgxDZ4qywJtWvmbptSxnMsE5YaimXgUfrYL1ugtxCf",
  "key3": "sKBjQABBsoeQuTypfJM1j7UZxP4DwCspRFn7HFoZMz3ugNofVX1TrNcvqykaJBrdK7Sw5invCWjr3b9rm5YUite",
  "key4": "23DTJYferGqe2LLVoD4cbdnyr4bDj2nPQRN9W26PkbJBBXfqeigMDmmqhxL9rMY8f84qHRknUh7dqdT99aHQQ1Pp",
  "key5": "24nLzV139gr5pMRgmYxEai5ReCFVj5raZBCwuxnTDiRL5VvPcMwGMosw7zyieSq6mGZxhyTSZjyGDRALBLNSY15y",
  "key6": "4T9FxwReYNJxzuR8PvhNax5nszgUqVUt7eP7tH1KF5kRY262k8K9h9fYQW2PFxg2krQ9WPXwVyB8MfRC4iGMDNnB",
  "key7": "2NqURKW8NGLunMVPSj91jwbrELbNTcGH1qBJiQjVYTPDLQEAv3SUtos6Nuc7zXabACCQErze2NkVXbdcJpZSBEGo",
  "key8": "5BvQdzBf2ig8KdfdqFDZmNnG66uW9vuSQU9BtpQx9NjoWGnaf5bxVEbWa5NGJXgseSjnNBa96wZarTqHBT9SBeko",
  "key9": "4fqz6pjkw1J7a7ZCG3WwSHXdnx7titoor3Jxy5v6nMYwNuSMtby3TjkSsMMPxWhLf69cvSRbgXLLjb16oYWEhu1W",
  "key10": "3DsDyRVaooa8ouUVPoQ2Ki4XMt3R6PtSpixPSknF3rbVWwAWtNyurwjTh7rhBzZVs8XZd4eH88NgCFxQTqUEkXjD",
  "key11": "crzmLf47vHetXYNhAJhmby8mu4Px38F1AiMD6kfKWtSqxtayjsFMs2X214rqDENEb1XWqJVwGPjseapPBW8uCcY",
  "key12": "2g7KJci6Jst8wTrtQiZ9VdUF57ZR26PTZKtfdpJ8Qoyu2GbmoYxUgqr8aYv3pmYsGkSubo4rUmvUxqjPdnm6rKHf",
  "key13": "591JoXbcZ3L8KAnN64S6fiPdwwv43qV8PbNRowyfbzCruf58HVREDjusdjppJK7fGA4tEo9xSgomM7Vjk5vkZEYW",
  "key14": "3uPJv7nBvt6nxPzmv3ApG3UxsnKqwgoEPZUPyoiReXP9Cpib7ySgy3AhUCYoSnYtt5e528MAMNGPkAi29hV5fBZn",
  "key15": "oxEiz9vuAvX1bqKnqxWGbEs9udDnrcBNXWvEr3MNAyYa14iyQDpm44NeUDYGxWh4HapsX8mmCrhpSWhLnLiu64M",
  "key16": "2G5RsyBp6j8XXhWaKsDEcJvjMdm8tz8JK1a6ETM3b3jKh3iattqybiGZ6RFqcKWr6o3UBX7GqSJoQ393atqM8x6L",
  "key17": "4CbFbMTU8TJUdQmo77v77VRjXjmGZ7Hu14PrQVmyqFpQdZQZJHpUUzX6shvHgdtAhL172G2rwBgkZhDSGThmn6NM",
  "key18": "3PpAkjrmmthg7rSkYnyo6jg3eHvQ2uzeA4VNfCjViR7H2VR5Xpbe84LyErDFXTHQc6RPxzqfLe1P1rvnkLvERgm7",
  "key19": "3vU7WEFCfPyeNGWNJM7umP5DiFq5d2GYt5SSBqEpVL8XBNq5cjKaYvH5LfXi9E6KZLskeVSsux4KnTUe9rDjs55P",
  "key20": "3ZdJqASvXvP5CVwgerBZvkGBu8Qh1XXLVjJ5YsoqxMtDHZvrFdcgjBdPeu44dd1BUY6r9TPGUeYvBfNnPX4rJCSE",
  "key21": "4QYbLbM7Cx29XcS2U8NLyPyxcQvZky9e9TVrgNgfggK8JXdEMxWz2Rx2h1EMPRXyqBx8MttFQmnuqhm2jG7yYimM",
  "key22": "nGGoCFtfg2TBrnAxtMjDtAsen7ufYrNE75duvJPnkpkX3xanTLjoVp5chwdjMJ1CKnUqadHCM2LguRiCbMEV3yB",
  "key23": "5JqLFcEpBM1XT8HYQHJe5Vu973uMkCBpA36R6xFi73eWNksEfDxPhR6AQ7oP8uZ9cKm8bHgKBBWGna8M2zjrweb9",
  "key24": "1jz2JDqqnRpEo4dBh616YPWCbus2pNht2grcur9sDcrKfaEzvjF8vyUH7UiB9ag2TPCmkryLMtVE6Vvg4HMRiYa",
  "key25": "spJEvNBJHZsaYNMFsRTCjwrHLPESsZh8A1C3yD1Lfh2Uowvhue8rhwc97i5ghemCLTYm93RA46BNqkDaALdxCJX",
  "key26": "61GHLfPsUwvnnWBHDZADHwQpgYv7RVrr8i8exgVz4jqgkWW5PBgZ4DgjDuQrVVGquuFRHYsciTvBCcFHT9j9KdR1",
  "key27": "5Ff63YU28PXMpqd9fZtagUM17Kssm82wwmpDijCBSPSecewFY2LBoPUSBtuQhcgx46eQEbTcJh74hkgzn8evvLeV",
  "key28": "3tGA7pBriKU3p2RYgoaQtKt9HVHq5qiineLyT7qvMeUBoDz8TGhz5nzYj8GK2LBxmMTJ3snyzmHbEHJVGhciEQML",
  "key29": "2F8TyU4SWUdCuDi6S5Ckzs4jYu4tnE4LRKhnKjDvAmvFmBHBN1gMUGT3Yj9HxfqejDGUgxMeyHk9aj7TfRjmcwfz",
  "key30": "4VRiH3UwevSpqvGKwT4hMzRBxHFg3VkRaV5iXe4ru5e1G2z74E7xa9LebhxexwFi1kf6ZswUyWVvQPoH7oWpLKPt"
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

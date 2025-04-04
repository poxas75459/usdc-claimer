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
    "qWFVGVenpsqmh2Y6JENnzGF4zSrMXoE2WaAKVGhVi7oSnYsJYPPdfjdU3dpEnWzEB69biJEqNxbRKJPbz9jWabo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T13JTbaugniZ5Y7pqK8W8NxdUSpcpmtVH1uJf8jNXdDr8HRgemuqmDL2rfRrKHTM2stB5hxh1Jzjf2GABeZP3Jj",
  "key1": "2Q6FuvqMtZzf1cLYDaU5uKHxwyXUMLFtXfK2PbdZJKQhCyXfZxjuzfpYxtxVhRVk13oJhjYywMuZvFS5mgGJtpd1",
  "key2": "3Rn1txZ9yqZknJFHYGhrPpY94gigyhofqzSrMPEPGAhSzjcRpnTiH2gehYiAJi4axJy2Q2SPtm9cCtSrewsfU6Gx",
  "key3": "A6ADP3Gtf6W5cjjmypS6DponBogFEz4bTEdjr2rfQ9rR8f1AyLM5smLW2P7nZfzRnSeUCr99w2wntPR4iBH3eTd",
  "key4": "5kmTWqztbyvKvckHhHQ4QS76AUZeAmKcaag2UPybygNcKEXepxbms9nMkKdA6nGuehcZen5RtFeRzoPup1TqNYYh",
  "key5": "3TFUiXVLdyWFjJDa5jDDBpiGVjpBfmYoJgB4bnE1tKJCE1hM1Kac3Ko1eF3Dsw9pPEMCPN8JidrbZxm2CoL5XFGm",
  "key6": "JEevRmK2ePJmWWkr7Rui2aDJoCjdyQbQJ4By7SbB2c7quCHjukqDFjMh2ADKY9hnHKygfgqE7FfzLpsQ2FDR7FZ",
  "key7": "4ehXezV3aCY3jjQ2H3UgqGcWnhV8iiPDzuFzAYqkLFEoeSYraWVsL27Xo77Upw5ndaxpxbBrpvCLrc3YUJDzbSHL",
  "key8": "4378KCbUsQ4hjPRpZgMpzTv2FyuWWvcpch9hwtZbeKnqbCFhwd4vjyupmERjsm8BD7mEHKR5LPy5suRF2XqZgo8E",
  "key9": "W2eijYTMuipa4j6whyNShJEWwYf6z7kcyqmQjywoxNzznsKEULLFKzvByUaCtAnpTfJK3D488f3ZAxV2Wz1EhuM",
  "key10": "4R7Z3pjKogcyiGy8gFqGvvhGJCnL3kjMgNG81aWqGD2TmPNxY3uYdHHwUgHEXPFQ6heyjzbmj1jiuHkvJqaXwFVU",
  "key11": "2R7S53PEEaLsSKJuHUBvWKQ3uoovtN33R3WCUdDq8G9bkBKmfGVeXJLNTxNnNacRf7UY5QEvjqg5pyCAo3wJPb6g",
  "key12": "DZitHkUzFbd5p25oaiWeDwqwS3KEpBzC42FsknLzbb4GQYF7WTcRsK2fYYFBKCEmcfTqVBhjhEXzx1G7NizfChi",
  "key13": "24wHx5AaeXudNyENFXkvaVXKYFuYkHkq55nrf1WsYoU5aUtDF5tX5ehjJ7NpwkuKatTWCSQLABQrMoD92YZjsd7P",
  "key14": "4pyTBshEaDQyyrKE7HMGZBvbid5tajgdnrUqwKYdumtghfQFQ33FBZmyTNgnL3NXfHVx8JaoXW5agvCALXynkrQr",
  "key15": "4eJW6o2iA5C22sMhXu6M9iwGRePEgbXfRRhSJcYUc5nJctmKaAW6sPmEUA3yqFCBGXRyt6haMgFDuU4RQtnVdyxM",
  "key16": "2yKrnuDauHtqxpwcC6MVT5U66kkHLDThfGHtgRPRuTsLhgZ5quHR5vab9xzeVmtSokHVKfgsjAEkwYsvTJHcRVwA",
  "key17": "4SWdoEfY1gdqd5Njj4rvBsTuvwvUNRMZ9LySkY6W1EB5moyc7Q6eDNbiLj2S8fRjjnj2MCwo7qXKSiyfvMti9ZbD",
  "key18": "4Zs2TB4Vqdt4dELf2D5CFVLqf7XHYQpRaoAZz798txhoYUZfvqDzaEocAwvHdzjeWK8hfewx3WHgp8tEB3QLUsCy",
  "key19": "4rUM9cQE8wAEJMwpxqRGL6fEXc7ZDrHWbktFT8akKaHNqL4gomczqVVtHACX3JMtocQEdsGCjgztTwyYpELSGYaH",
  "key20": "4bNoE2hkS5qWmUpsVTorE2NYKKphfEvYYbPo8izb7xfnjg5nhBgiVzaVF9mtnGQoWTNPWW4uJMBPFyD5Df6dQwxi",
  "key21": "4twpfiJo6UtvYJg4fKnaewjELVmqdBQsmzmowwSR2DJu1PPfEyr9ZqeRZNGCRQAsuX53ceyTyccdmUsFvjimEDgg",
  "key22": "rNxhs6EJXa2E27LLFvVFQvCB47wTjKm2t1BL7GrPNVxa4x985LxdM4CJiHqoJn9vzNZyn5aENvCEQ1y5vkrUJ24",
  "key23": "4PAeZqq1ozzbbWpJ2C5rhr41DsA3EDnPARcWhh9qdij3DR9N9rrRGnxc76kSMnH9qcTiWqTGLJ54bof68KKZ5iAd",
  "key24": "5ZCu5gnDtmxeRAmYNNeyBPF2MH9gF9TUn2dK69iWkXtgR84Gkod4XFsKVKkTZntpSw2muHMCuJaPN4W7RdEJy3Fb",
  "key25": "3RiMvYKJKoApBeJrCz4G3CrxE5GymHycng6LkgAbb2675GYy4nBqocy6HCLjvvQrkPcBi4czumdVgH1XYDhWft8d",
  "key26": "4Wa3CCtU2ukKcDFEUKGMw4PMbWa78tkfnLSTc9Ue2cKz8GBXrxQSBvdjcX4w7dUkDfGtaUQMWGtHeTB3ECHTNtDf",
  "key27": "5GJuJKZy2KQXnPNxZcfGfYtQEvE4gikYHEzb3RpBvEbGyYUd7zshPS2VvTqXgL9bvrFgpJ9iG86MpRDTHEnSENa6",
  "key28": "2EnspeYv57Xr4882DGsrTTVrzKaUCaFF85aSQSrP6pNtrrzAd2kE8wm9k9vmjSis7NhtvxbsAwvwpieES9MfTayr",
  "key29": "4S8P52WD5pcCfgNAsGi5M8y7NRpzrVenB4q1bYDoGF3acUf81VygHGBCkbvCFPGMeWyYsjp7enWubnb4jNb3dkA5",
  "key30": "43NPpVD8e74aJGeDWqdF7wCZmf8WshZsdXu6UuwCDrL3i2uNRoRmamDFhdfvrgTGuJbzJP14fMC62YKN3qCPJUpA",
  "key31": "485Jk21eV2K7aBsVWqcwckHksxkVbP2UJ8BAsPTEtvgTX7Yxz8U5p7gcxNyMXuzuR4eyVhLEoRNR7ZE6NiYHLPrn",
  "key32": "2KWnrkc6i1kNpxbGMA2bGPp9gcuZuKbdfPYgkF6NfKFtKDcStwvo7iXFMX3F2GPabcpcq7uaRsTRCqyVYkX8JcHh",
  "key33": "2iEUMg6PjDnqcKBH9hh2arVnLud7xrpfGpZFxpRPCxNR7sTwMGzD8cvagg92dz3pCr3ApEGEfyijySd3TKUvysYE",
  "key34": "5VvmXSYXxHN6JijtAMSHPwuExPyCSc2DKM4y84wfb1Pjh57wxL2Hp8Bp4rQm5FpvqSp5kWuN48eysKiTvT3Nm1t7",
  "key35": "4h15PN8XxY1PGpN59e9DV7zMfWAD853aMLsGQhpx68Ew8dvvk7ZgE5j7kSxbb5T8RGJg1wvPPa1eCaFc771Pw6YJ",
  "key36": "YUu9oZ9PbUn4rfwXBVw1u8uN74EHWVLZgRaV3yCYfU4M4fhM681KGqqDwGYmqpXjUX17gMybgMzefRdog7W3wJh",
  "key37": "4mKABpQiNRnonVt374tSCCWuVuwuCd2TwVFhemnZkRYTYNZXvafoBQeyizof4VuPaZx1pAGdyMaEiWA84MjxFNA"
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

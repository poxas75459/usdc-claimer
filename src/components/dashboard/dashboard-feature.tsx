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
    "4Wg9y5Esjtx98GffAe5MGJQ9cGEYzMnTs24zqYzpUwvuxobTCbyq8tHua5aZosumnRsgZqJExRhT27DYxQg8Kj67"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XdjwWzYSTP48x4z8aHEigxKw6CaptshexNo6ErZAJyraZCmsbaHXTouUSsgVL9jF1s9WjDiXTfmuDG689cbAsnt",
  "key1": "5rQtRJdXhGbG6Gd91B7PdsUvQPr4Ln6tspMTQQrZSRNYwMVDXV7MYdaU7FPoBBmMsTs5AYnDPgCcbXZ1hUg7Sg9L",
  "key2": "61Kqm5rsQhoF74wiJrqfLicBdV6yab82Pzg9wuHQ5ziubXGwhuuFg3o9KaWG5r6ErHGrm5KEisXDt53C9eBRYwZP",
  "key3": "4hcVTznLHUu61n6N6gcUEwByFDvcBjtPSqWE3Ke78WLmFj1GgiNJXP6UHu1bBvG1hsUsKj7B4yjJuh25Sa1Bzzf4",
  "key4": "xcKWmUMF6nEKcTHAAFLN6eQoFX4Hrdn1SASfH8i4kPW1y8BVEYvS41314g2dSThhr4eGxvatMZZ26HisDBp4Pks",
  "key5": "pRnUwpGxjjr1Td8cJzWRjWcQ46dtN3Q7H2j78jk9LhiDNvGegZonEgVte58RMeBnKgnoEc6AQfuQPV4fCDgYGRh",
  "key6": "2nmRYZAtz4xEKK9uch3p4r2wvBoDEF8tqC2DZLLnWkYkyjk1E5HzwekwArF2U3sPJskviE8DJuzXRgZzHDdcF2To",
  "key7": "3dhnsBnB5w5M16PXKiW7LM9FXdhPxe9UP9gtFA69YWBurvUsotYUtHDJK6Qvk5fgpibUWatHQVgeQ92RGXfGjnQ9",
  "key8": "q4ofMi74gNMPEoztHfBfYYrEZFFXTxmArHKwRXx4Jo1kD5a8pe6nBj1bXkeoKkAFt12LMvPHDdhDz786Y2abRGu",
  "key9": "jWxT87THH75q1VEoF5hyvVMetgbCoGA6dnMTh1QhTuy2RhJSeWcTPoE2fAjLLr6nRaz7UcNnQX1S9JyvMzfYrPo",
  "key10": "5WdoJa5dTZvQRamePH3DWUwYo9K2HCZWYnPAuFf6Hy29s1mZSkqozbR6Rxc55Knxjd767x2m1AFpdihjQqTbjVZj",
  "key11": "3CJwzUJxdRXUarGGo9hupD5vMcAvDhtrW1d1s9LmRpmywycXSXfUhqj14ehjdVFsN18EtKGerhh948HpMpnSE7sv",
  "key12": "ckRZ2i54JBoZxzURYmxBmmwURpQkTfaGzigoeHrTwJZ7gca3bwMzAGtTvaUTkXT2HrbcYSspdzXTQ32p1zn9W19",
  "key13": "2W9jDJu5XLHkzp8SKzNHLUpXBRqMLqWd8TDWZQ6AaWuyXKJTsAjRGpETDGfAXBYN4D3VWrteueKws8eGtAwbs9yn",
  "key14": "4gzJb7RHYa9BqwpF8fCy4MCqRWD6bpBRwYBDkiHU597hFb9C3RYW8KdzETcLuusT4JKYpLsfJss2LMEJY8yVoQx5",
  "key15": "2AhzscDRGw2LMy6xooQNmsU1hS16pWqUPQz6L8XxuzzTusTgBKaZC7pkNyGyQj9g1g34MEzebFPAzg6e4weg7Hcp",
  "key16": "2PwFSMvPi1D5xLfGoXNySzzXF3jAbGUZKGWAHr7iLvUPaJcM9vVwqfPFJNqzP7SjXotUW44UJo4neHnBWPX4neax",
  "key17": "3c9vLtrMvzU3CjUNn787Kwpj8vmpepguG1eiBgjR62fJNQkCTLk73Fd3gGtNzA7V132cAbqVSkupYoiCXii6bTxR",
  "key18": "2U2qMSQ3mfQYD1M5oLXMpJy9KmaJJ5rS98Ek1QU3ByWXFjMecb9HnKxNbmjJ5oYRBm2Lc3153gGiZjtUu5YSwb1R",
  "key19": "2dohBJwtJ9FQ2uXEHFPDQG8nKBYe1jxmr46KXSgQQndXbUkvvN6bpfYMPTXzum71gQmPSuaJu29XAT8Xp8znf1x2",
  "key20": "4Hqctny84ZaFPUFgRVFQRnUiZgQYgi19BuZhLK7RUwzrTvWUR1w1JLMdevv1pZ6YQQssDxuqeCfJUZEMKiiNLhL9",
  "key21": "3ZCjyySWywgoi1Q6QgRXCwfgpd6U3jPtXVR4Z5jmrNR7ubUMWBHjnyQN3KNkPx1ZpW9ZADry7PvYZrPr7HTJz3Ys",
  "key22": "3vuRRXBG4EX83nx2342E4nL5AARjTtTpJQtWni6dnC63u3YPAepmfwhzkqAGs1JGV84iW1omCf5NF6mHpZkN64wk",
  "key23": "3F3fWusJPt8E49e7kTzeNghqxnecYVjFcnxYgr84bWe5o2mCYt7j12DiAiqEG5hFjzGbdSBubNKqUdfXNZsTpnNe",
  "key24": "2K6eDiNmeAPPkA3zqZLL9sctVEAU2qD7Q4c6mmejro7fRDKyW9uwJmRMzKuT7C3AftDwLbwaUxksXgS2yAKLHXE9",
  "key25": "cwHxMRJfBgnSR5EjMCRBu42T8b4CkiggQufq7TNiGNb453qmD7fuQRom1sADZwUhPdKgndofXLFUFf5s3xSjgto",
  "key26": "5DG8xE3uiTuvRLdv7uDJauMK6u8213emkbDnxyzk6bpZcjcC7bYHD2PrWUCf8hK7TcduTRtRH2fv2cnWT6vEhYRQ",
  "key27": "2STs2ALvRpixsNQQvjmv7gPmswcxoBbhCDJVmEo4832iDmjRoK8TVTseth3L7YiauWDyrk8ysY5MTq1tvPPJGpUF"
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

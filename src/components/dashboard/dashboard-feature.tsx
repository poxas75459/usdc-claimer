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
    "41MHnJLvTjbADcckhafecUZHGEjCXcYqNjo8tU8cwRYn5Eyvksshg5t7wDoV5UChG2qN9RMB7CBdgyLZt9EvjX2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyJTQRyh9btswggTagiC8a2gcdTPDWV86sSBGzvPDJcRp3MR1HdpcgGXEaanm71gZjnCusUhAtWr6zw3QBdsVy",
  "key1": "YYeoXjiwBzPCsS8QgTBzrWbHXRiXnDcNaRCvxDon4X231k4tfF5KKArvgZvAnWxZKfnfuMMbFsiJ2daFqzqjHoN",
  "key2": "5NnaHf89JPdfw2YRSCYv9XLDCt75UKidCvcTNppCx7PNtTc7VkhQrezgX7abbKuxHYk4igsfhKx5VGmzpZKjgnhr",
  "key3": "5Hv7zcCSJiVb7dkQ1xgoVT42DsoLhDk2mAsHDDnQQPr5RbvfkvQQaWuAWTAFc5eMYYrkAzepVtaYvQ9sAiFJQXJa",
  "key4": "3qzFjzBh4qXn5F8nNFaz9231VjA7ZAmwr4c8NmaXb1osPzJQLdfGQhLpJHVmJA9gmCDW6W5csVtT1xbETT5BbrHX",
  "key5": "8pjNXdhCvYMwiaDR1KMNNr3ViT95V1siRoYUe84bauTWu4JFjqygGzYANAqzjxsdUSShwLZMLNfb9MYDvPfmRXW",
  "key6": "22M7eTLRLrZoBnZYs5rjxzTSQbCQgHDPiyh14h5Q5y24GDB3JpLsxHLCs8BJFq58hFVpP4RUSjfSCdZCWPtWPmcg",
  "key7": "42yQ2wWjEBY4dSKjpYy1xVco86FtZEoHXtnMyz7RAMppcXhJeznk2NMo9bp8KsLggDA1siE3pXtnUN4Q9gHkRNxM",
  "key8": "2Z4FXB1MUAiMdPyNHBbm8rHt3xD3obZjCgyKaRfVQZBw9ng7jJdJxCriq8LihBksmpeYqotTZ8TzhbmQLascWZRK",
  "key9": "MtneWgozmHXsbDAui2hzvMozBEidSeapxBUHCCWvJUqMB5kEjFYF5XoeNT3tVQwVNDyFKTZJBCzLgrYGSKwQduC",
  "key10": "2ku2yjFReTc36St7ENBMa3BD9NgDXXqnywDXC7Ua4n8CDPSCmpfMfy88DrDiNgvjNzaW5Jvo5YC38dMNYp5RQY4w",
  "key11": "2Bc54i7CsWvDxKYZvsdQrToqsjQTkYV7DPRf33fzwMvgEhWNYWdiUPMDYwwo9ZhUs1vCunFsRKNop5m1XuSxymA8",
  "key12": "3hP9wT6SAygTrD5tovainDGLiupDQTsT2QAoLcfyUabvJ7RCct6hwUHxKPWfMABt6P2FuXJbzeXmj1gtVbX81VvR",
  "key13": "3r2XcUsw5zC15977oWtVXpjTkK2urL2Uh86VdFEz61mQdmUghsmczjYRMLDLzaK2E3e9dLFdqaDsXmcXp83SajeB",
  "key14": "22xYCtyQoxwFswCSTcU2YktYb3agN9ribP6R7hprey4d1hBU8fbeJQVzxRKBjM32eL6imZsshNwbDDKneVZ9hWya",
  "key15": "5eVaniqLDinBXAVQSEb1Nypr4W3q6LpbNmWfuWB436aYu2pLBemkmhfK7ShU3XR6AwVRBVZnEVU32KsgDThd8xdL",
  "key16": "4By6h1MnfTTKpj9u6xq1j5d2CoGm5XjrxBxSSwiZdGSB56V5EG4XcQyGCKbKRHfVurbr63vFroyAWGEanDwFho2q",
  "key17": "EhumPHyZpYzVqazSsxM7KfLAcsfqFgnKNmftF1EoT9fCMYCJEJV5XRU6WeyBoQsGNwrAX5Wqvu37Ve4GKjsuaBA",
  "key18": "2F6cu57A1ZXmLpEm5vB2d96sqDYW6TMPUNyh9bsSzCcEBdGk4ZGGnuSWXBZX526HPQ4WouMrvkpEqtYEULcQxE1U",
  "key19": "3iViE23rkWtBnT2DEKHriX8yZqcR3qwcPCZC3e4aqsWeiFfrkK9M2ewUPegVMFzUm7N6XAzssT1DnMKuE82kTfhH",
  "key20": "3exqFqtph5waBnM6PwDTEcHzFPfLFTB1uAUKDLHiJuw6tADjGF8VFuHP3rYPE1CmN9AaNXXW8he3imkeVGJNFY5h",
  "key21": "zQFNGDcDsgZHhQ3zkNDYLyuzJTkCws6dgUUVjiWyohYKUZGczKHjTBqG9YC7YL2Jj1JcrGby7dHF1kE4fjuj4Yj",
  "key22": "piU1PGoWLsjnZ5FGQyQpevgnGWzmbJxYQ7oDwS4UsVu9RidGHUN5DKPr46McY3TroLqX1Yb6ETFFZ49Uc95ttJu",
  "key23": "3uZPz83Mkn7vFqmx2L8Kc5dpNeDp4ZK3EUaqNZzvrhGREYtUFDm3zCwGDUnMRGBPHqyGQwKeRWK53CoBC5HaZDeX",
  "key24": "21bueaj9rff2vtyXfmtSi9CbLWN1jA7uD3rV3U1MkKCQDJGRDgz1x4rxgJW8uPnGEtQ36bxs12nZ55hvbioTsxon",
  "key25": "42SjbTJ7AiP2XHo3ezUCwUapc5frzP6Aj3g9qF9LS7Rp7sBYLr95ZERy7miqWCGMaDQEi3gFUjkNtYm9y4Cxnmvh",
  "key26": "dXat8T7nkYVhLMm6g9HwycsYzoaZ9ihW9kL5VyZCsaoqtmspcSgYhuTMhR839WDvNDriGkVnZ24KHVkui6NZjGg",
  "key27": "5Jb78sT9we5DmC5RH6FsKPSJpB16tKgEVn1XL5y3Eonn9UHKmrGcTY8B2Nb43UpVZUjGLJbF4cnjgYskQG1FmhGs",
  "key28": "332G3p3yK5ZuiEsVzKnCmxy83ViKvtpCtZWSVrfXLbpDznUA38KvAdydcpzS44veLTDRaZYWZVxHgYEFZzzjuG2h",
  "key29": "uSLfc87vsvTH71coQg4io3ehi4YjEwE56Ja6ECAfkSU1VESQ14mMNdTUe2c3s6TUUrJJ2RVzRcPDPkf2CFxosHS",
  "key30": "V3zWCpCWwLewkFDSqPNhXCSVFpGFBQumgEfgz43h5v1Jf4jxCS3orz6LcaQX6uYaL8zV2zrg2hL1q3X5htRaxGY",
  "key31": "4EBSfJRWZDjXpGiwyW1LmEJnvP9h8MGyMnYcKsRFSkptkgQUJ1ii23vPC1mVrGLgWT7SP1mzKyM8Jk1SJUhgBRax",
  "key32": "2JpJaUBUELL5QGH5rzJ7gmzFWUAGx4vfsbCraeyRHu5nFm9FgRJQSwzmjJSFGfEJaoHz8W7A6CXzh9Egf9EMP4Q3",
  "key33": "2ChuPcnKXdUFVLcpCNVQKm1FY3gGRwC14d8sKX9FYCLBshTtKGNQgewa9msKxW5b2TcsKmVqXzYo7825QveZ1ZG1",
  "key34": "5FpghPXcT6LXWxpmeYzhnFxo9AC9kJADespq38nQbaw2biNLGhh1WEXFSUQ84CrvzPLZbUEeEdAMbmNBafdDGGv",
  "key35": "5JQZWxRwAEfzer2NsuLeyJ7q6Hb4wmRvzRAqrSxH2D9H7kAHfMgMSYb9QkRVjYS5A88ZmdJV1aVRHP7ECCDbhGSc",
  "key36": "5s8kMTPDsDWmighT1B4a8nU22KZS4F2VkbA1cU6hesKQDBEDw3kN5D7z6d5PoTEyGACj9EhLoVxYJmCT5cvCEU7F"
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

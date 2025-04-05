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
    "4m8z83RxTpn2zecYoAADnM6czumbPZXMGfnuXAC4RWBZNP5rutCN4eVuKUVQicj4hTXuCVjbXTFXw6s5MMCc7vmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SawEQuDUJ6yb6HmgSpqqYQVkVPQ1C6pPhGwJr7S1WQv1B1kKYN33frByPDqDAbnHiNvLtWCvfzGJcnALVjcgtpk",
  "key1": "2KNo3AZ9ubkJZ26FojBF2bvXce9VxYjcDaLAJALxhSDmbF1iecnzFFmbjhtpaKG3r2TwkY9b4u9hci7gTyWABx21",
  "key2": "4YtwMUFhJXtvk4tJuQnFk4ZTbk7RGMtP2trgpTayMzurHtCtAutiUQpmAG4beXFLSmUtasfFihGCGtSihnPGvRif",
  "key3": "2WcBVQ9V94oooYv8agmr9RFAq4kscwKA1xZB2rdHLeTHTWuY9PRKM1CX42KcDnYpvD9C7Q16gpwVUQUDpr8c8WVu",
  "key4": "49FzpuhzFf5ujBQqM24dCvfassTS4odEcuFs7d4cyd4dWi2hjndisuEPibcUeNEJUdsA6EHsZcLBpuiRU4QHEmUF",
  "key5": "67J93hG4fZTVtjVwhkLJYhTnjbnccY9dvhJA8GBMGEUUb1uELcJUXuqmm75wAH7TYzCLKHTQZNYvaQcb85pSba9Y",
  "key6": "2fiKAeRSEVYCw8ipNJH4rmAAFFhxoDeFNp3Cj9HBu6W4EfxgiukaVP5RWhPoc1RPPtFcoZTT4eBqDHa1hgXxA6tE",
  "key7": "3iqQQNp1bJy6a8iv169HHG97tXYaXFZZxBx8m1nDGVqYRj3VkTYtkrEP64Y1uHL4zctwfLkW7BUQN1QVPMLWyA3o",
  "key8": "kPt2aa8BG2AuDYKQ8PjhEiUhofJ8eheSXxZXAJEQeqhBUxgeTKymhLtTAgCcSoiMoh4QUrThUGcsSTBU2Pe1f5Q",
  "key9": "3Mmrvot2tvB93LzUhBwCnM4JP2ZB98VjHQaApUV2vJ9vuRUXd6dEbJ4MqFfeVoE3qmEhuDuUAbGovwrXJUb4XeDL",
  "key10": "25AzeDguzK9bmG4yxJoPs2Yopov7yVbT9d3MTsbRGWc7tj5DGEmB113feqTvVnhaThTGF5HFaws4voRXEiRhCFox",
  "key11": "xkj5XKcWfStbNnoReyeKaYqrrSPxhfSd1Q9tvscczPHnQBuLtkUVY6SF3GwGnYWhi5YyUtNPiq6NTNR2HUwVQUc",
  "key12": "27cWoxxQfmENzr4ocKJUh7DN9b2J9meekM7DiXAsqUa45C5231Jb21iM28KQ8dfRr8RumeubZpGktjen1xT7K2pU",
  "key13": "5bczVwnEwRkFd3jF59D7d3wsXWGveqgo7EydAdrQTL98CDNdwbAzjHnY9THZT7iF7N8PW9FbcZj5CGomJpLVXk8A",
  "key14": "Dg2FDGrAq3wG22Ah8mzonbh52kPyeSUxCddV9vK1yaq5ASorxnhYa6TNVbHYHbBrqa1UeR9zPZGxjQxefs5ACA4",
  "key15": "QzhkUiNkMoQMJcE9tPqgwTyg7M6kXfjRKjek8ew8HuAx77wgpDdSj3p4AS5PBfy47axPBxUtf2Mudr2z8dSCLcH",
  "key16": "42umD8Ph9R73CMWHXsMttaX74DHPKQQEiGRRVWrcMkVLsHFM5UMyA6YtjKBBkH4KsgbVpdggQbfYXzyVAR9buV4T",
  "key17": "5a7AWWfLFZztLuybHKiM2mbLcdmEBY6p83acy2dffa7sYRTFLsXnG2D2Gj4GRHkQNn14JkftLtu43mUUZtkfLJzS",
  "key18": "31eiKsR94GRyZEChey39c1FonB27f97aeyDa8NBTNamVTpjzVTnjqTKWCVGt33aBYG9eHLFc4RVXdbeKH9ZYdVck",
  "key19": "5hsvri2g6YT9os6xMuGBUgShowomCqDgqj28BsgnTmGuM4YLMHPTxvHJAZHLxZF4PmHU4fspidqP7GZnBVtPgTcz",
  "key20": "2APSoGbLN5GHkiPqQCqMoAJs9fWycJZQq69Si3zpvoqmD2WMauxWTDc7M1v1ZEPCmx4bPt41Yu4w6r44hSwJarK5",
  "key21": "2Q4UceRNxuNTVx58HT68k5BKj2TyHPS5HfwUb6ewsPrQNwj58VSgJM2cRQv8RdXvotSiGeJryUDxMDC5LbCwpUBT",
  "key22": "Uge9E6MBLS6vNNLG949ysidRg2bP5zFFFrpVN2WPPjQCGmgVXfB5LqASgPL8LUBzgsB4Tokb6xwUGdvNFNMCNB2",
  "key23": "n61sXUqn7wRZVJroCA1SBqHaJq5YTbkiSXmDitWTv8giNu9jQ3bCNbzGPJPPu3jBZQi2wtsFpfhm9tJaP4nhXTQ",
  "key24": "5zgyFDKKtnfqJAx1aPCHx4QhAf8s6mx1d16mKiNshoQGJuLEjNXeJabzUBZL8FEFYsAMN6Lgi4yUKzHaDh5Yt851",
  "key25": "5AjceqsELuSewhuo3wuvbVDHWpFVXvGc1mbzwjkB381Uk83M3NFK3BMWPd1VoxFqBsm64mhKFNdngRLLLMkVZfpa",
  "key26": "5ZrL7wMp2ngiB6ZGpUgYpc3QLC6WxUN321nKK2zYBXCX9TCfC8HBBUdVifLJk8LCrJc4pvRKPvAEhc6Gd19Pe1Pe",
  "key27": "4jJMzuy7TXmfAH4eh3ukuSJVdXqtrzWRupcTCVihp5J9t9joWEpZLJBJm2iajsojdByeWFeVyE2c6AV6QVEDoVts",
  "key28": "3e3DQxn1wixcX5aoKJDzpGv1HcBvGVf2PmU9NZYGYe4K9yWUuyeNvrfpPtudm96vwvT79PWeFEEg7nvEHsVZNt1t",
  "key29": "uG7WNBrWiNLrMgaHNN1u8ZtatLPLjjJbt9b2QGaDtkNDP7SBzTML4W8cu1h5cGHxFGJZ3Ttn9sJ5qFgYa46uGPA",
  "key30": "G6Mif5x6gHABk3AUv9Bxd2tEzmvh7ax2NnKu9T266NmLWbTxq8Bi1DQCLBb6tohVfzu9AHmmiSZJr9SdTMFqftU",
  "key31": "2xJeA9jZmaw6DNmfHNejV95JjVkYzTUqwC4niXuu2VEQ5hYDVDGBtQGU3htQSr4wahQPjySBWxHEkW1kYxxeajqZ"
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

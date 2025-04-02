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
    "2LMqAgSgneoL2zscwCGxZ2kK9NQNxbyEg7faSCCdUhjgxvCZ3Fxprz1URonmXToaNpsP2BHBad9iPaP8dyE7AGN8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pdhPq2eabNSFEAGwVz9C8DURxVCJKRz3TjE17wtnfbAA95aqvfdwzyDecHuiYGjXfpiY677aYkUMFEhbzt6Z3bt",
  "key1": "2Jv9e5vkT1enGY2867cEbKn4p8h9dH6PVXTuGzj2Cg8pnncvATfXUvQ4t6HrebEXxFckMWU64QPG131Pg7ZABT1E",
  "key2": "5BqswBNjpeFngG1HDwZqctkDBz7WddqHQRL51kVK1AhtAAzT4WUjFj6c28jkXVAvdeBzHLMrMvZe2Gn6MbXp2cXe",
  "key3": "2vxcDDkoNUMSXsK3ccyctGqKqDpejoW7ENS38YHFb3j7XpxBGWBcuP9zs1gvuvZqUDJzWRMv12UXsn7vHGyKyqPG",
  "key4": "5Fe5rvKdAyfhE7uTf4hL1NURuEhA8JyXgfKUeRuWSSRSUCXGT6mh8hZabrjrLBXjeh1JvsaxST9nibLJQkUddxLx",
  "key5": "p8reV6e5ASWyhiCqhrVSzssan4pXCbMFQ14ADdqnkMNbu8zxo4nN25mtyA79p9U8ku8PJousVN4eoM3asQi18rb",
  "key6": "2SESZsNrZj4sGcXcMgpinqwvjtvBv66WeJwjXyhkV2miemLYVYsZEMe4bx5JEzsoTDjUjnRb7X2QRzZkHajbYeSV",
  "key7": "4HLwN2tCKM9G3FMw29M2fYKDcyPfdBx2ipN4RNcA7nDXVTRDffrMRmvm8XTv6PdHysq2Fu9Y8nBxqgcSrXd63ZBD",
  "key8": "FG2BPgUsEoouzHMiHaNTGaiJuNAWKLXsNPwBUFq1n1xJdhUoCM2KTUf4Lm9Wgf8rLEcrDsdcQym7ERMmEhjFzjy",
  "key9": "2VGmzVr4FmCexboMCdMhGKwNng4X8niE9BpBxan2nseZYP1LcxJNb4Yf8zfQeNYrC3raPhqSsERaYcsGWk8Aj4DM",
  "key10": "63MYyTFyUAegPmUU1XWGvUTYcE5Yz6sUzrXXN3ZpeHkWBcS76ThmAWAVKNBrYFbimvTimsTfLLJsjctWsACy8Y5u",
  "key11": "3z7VkS1vgpxragHnwazZ8ArBHkc3p6rTF14fZBBUBdo9NaD5wyrXXnRKyRQQNNeXJw7J2JQEU8MBRC1vaAaHzVpf",
  "key12": "54xRmQAqDdjYF5K37H7YnVQ8cRvrBJL9sbCmbC9uvuZV2fvqoZA3Qm5CTsegoHKMhjH2tWvxqvQWsAxuy2UbEAja",
  "key13": "5ryA6UTAneo5rZadssaSB3DVmcEEAmaJDpjTq7tYyXNCkNdcgpKiyuayXazW4ECQZZFqAmQ7j5gnrRwppfpqZi98",
  "key14": "P9QRMHVA6bf7UuNMxHwqv5UJ7E9HwBKCorkt2hqYHCkWbZG1n3ufgsHWCvpbx7DH119eQUp6keXtvLKTwW5hqVy",
  "key15": "4UtqHgUVk3UQ6J23JM28mPkhbQ9DXpQaWhfHiuHgyG1dVs1GUapLQF4nGkmVpzEBGvBxuj7zT6X1fiHSvQ5qHEK1",
  "key16": "5Ndws3CaQYXbrf58CApUipXorE5vQaJMSCd81wMFq7xNvns85Hv5aQ5WhfTPwbUzw8QRAw4tXNqAiybe4LeCQPX2",
  "key17": "fgG4X7QX9V5ZZJXgt7tEAP1SDijySBscQhrnzEMJi8zbRTFu7F5hFZAmLWUnnrGs1CoJAiNSW2T7hUJzBad5Fef",
  "key18": "42boeSnJUmR6n9Q76dkBeqtRwghQwwnWyoFp9n7MfEja4bjQwbKQBdmaLdrZm9qGDtz79LaNCYqpaN84fstoiPwo",
  "key19": "6EpvatLh5VcPeC6kPvs1hZdrWkbRYb5V4JfCyLeXY2amiVPMzw5Vbbar9iMFSZDj2bAPHNgFgZjsVM5Wanz1dxK",
  "key20": "3MS7Yymw6XzoC59Ykrpaq8PBZiD5irtqVXbtxNYwbEcwJUZFYrS7pKiPa8iCfit6tU93Y14UUSWeJfhhvb8b7a4p",
  "key21": "4856CNS2poaMPNJMs83TmGYxr5xBVNiN2Xss5ugUxKKv5sx7VnNPCaL3VK6v7rUFhdcyCrXyY97aeRbDLhUeYxxb",
  "key22": "4aguHZtPURfCzxDEKGPMppoehpjP25KwKyMdiiygtaMYCG5BcHEpjMdKTnkCgUehFJjE5V2bArK6kz4bAgN3gkQM",
  "key23": "53j69Ccyzovr677LtQMmCFAtkNS9AM54eNY5GcBmC1Td47C2azVbC1TJxcradeiCfvy8AmgtfmvDKDJowvAYY1Vv",
  "key24": "59Wrhx3pan5nTK5qBfJyZUKNLz88MMrdJcMMgMsrGRtFuroT4ujvaT1ijPWiPq4kkLyuS6d1P6cNuLWxbn5YUemy",
  "key25": "3YVXrSA9pwmfeHBUr7eNEuumUKwjPgzLp1rCSoQzTu3BfGs6SLmS1nZ3RiaSFee26ayc1xEFHdof87LLhYqwsYha",
  "key26": "4oovtma7y6m5vsXaA47Ja3Sfqcbj5LhNncCjSosiMRCvjFs5drsWQHNEdKQYw48HedxK6NsgZaHs9HzL7t5LxGfx",
  "key27": "3Vm6PDKK75H5aggUn3cDEchB7gxWNCiN8RkTLidYTFCEYonZM2XYuTinpgVnU97wSvcpCxZM1mjvXcCsDPkacR3Z",
  "key28": "2Asoqv8EajNSrLN2dVyRF8vSvYk68NRgV55vwLr2NVxNSNE5zpoH6KSGnL35K3Mi4bqXZmsbFdxF5fmxR7qkzAzZ",
  "key29": "3dSgd3oVNfM6hXZdoxTDjymbqoqPWVzuMUBMkp6wamxJtsFvZVgfpg9jJeaZmBTwSR1WSmbd5vtfVUVGrZjrm8GZ",
  "key30": "5ESFQq5oVoAJ8CZ1Yd5VDJpywhaeNDA78uMthDQq5vCr9xujN7d8us1YvczPnGFbshxDnY2jobc7HMZ11RwGwn1e",
  "key31": "58ejz1Hx2L7fKGBExUmr8tWLdeA1rR8NGUm3u4d846Eedwuh1XAjweN9XbAskHncxESXMBqpTSBT8QaHMfAQzGgi",
  "key32": "3gKduZjYzBGZKGHsWfN2hHoQ1cxuwhTP71a79fVD8bL9jSeAZLfCkRaQnU4nmFa4kVq5EzNKFn2H5aUj36SKiTaM",
  "key33": "QRNfbfCkXds7Uw8DayuFZKKX6RVnDyifu648AZ8GF9TwvKQ8Zw7A66nEAo7PiFUsBgAHUD9ViUNMgnDummrWXkR",
  "key34": "TxeYfJVL9HJbtLE4BHXzQ7HQTHyr4szbDdYYVoE9f7byX7a3efhBvqA1pm1LsRBaCMp5tCcunmgaoDAXPUxFYSA",
  "key35": "2X441D6B6KVL3Jj56ryefSsGvs6UD6YSxMZrXyVSuoLiQUJsX8RmUpr17B2vowa2yQCsq1coGACdgAXVCuirJRvb",
  "key36": "25B4prZFm1D5x2ckpkDNh1kyWmZumUzNjH8exk4SxdrvLQQ6irwZG2wS2k8v3qRxuQAX5LaW4y4vrnCvcztGfajm",
  "key37": "3xgHa6TKdBBdzscruzrh4EfSKrnYwyNtJruCaBDrhAVwpaUp5szaSaAHFetZWQFjvPyfsPjcDyawcVWub8T55tFe",
  "key38": "2sADXcPaviTc7KJ4SJs9TtB1Gc39HeBp9mt7TBLJJdZDJbmbsWGhtrzpHcVFiLQ558VfQcu6syR7cE9uzWc3vy85",
  "key39": "i8iN5agDe1uQ3KwCg91AKp59C47DzmrLVQmqidLXy4v4LgNJB6NhvGch13AEBte3qRbokHM3rCE4SSuHiErVuyX",
  "key40": "5CSWiTtpPGSPLbzZcxBm65q5EttFDRd8zw3KhoGKoaDMJLrewhcyHeqVqKrEJuvqPaNGTYDowq4y7vTkdfPc7v27",
  "key41": "4rfxQ6rxYD5Mmc4sZ9MDJZX93Rxb4MqEbHNM59yzFHE3AsBRYZ6pJQTEmJryVCTgYbvCtriVZPcBYupLZmYDTSAu",
  "key42": "2XDBRNqKmwNr15Hgi4btcgTKSqjV7Dsy27jQoegW4wnwWCdfgMUuL6fB1hR3FTU18pqqSksa9mgkUBHwXHytPaQe",
  "key43": "4QfpxWCKZASHJNF8BFQRcgMeWhZbLhqa64KVj2bAgmYcK5UXw5H8F5i4shZnsXHcju85RMtYyuovofgFKHZ7TLMA",
  "key44": "3edenSeAPVX4J3EPjqKs2B6z8bJxdd5JmfNFbjXHf8PyGXiLWuaQqjTZc1ot1XLtVRtf7BYfQ7QaV2YpmrKuLJa2"
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

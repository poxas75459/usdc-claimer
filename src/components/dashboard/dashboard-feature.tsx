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
    "4iUdxWG481YmdXWbS27aU2hESDqcBRZ6uZ33X71ku9tw5Y5u2hyrjLyNz2928ooMXKo7SwmNbezAqTyUoauU2EMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xZxNc1Q5eXso8JSVFFX8VBUejyRXLHiFXD4BefU4EjqxU4WNEHtYdQEyEJxE6YAuRkauCDYbZJaHbzh9L3D4h85",
  "key1": "3PkMwHDQWez5hoiLh83uWvyiaxBLzWNrih8n4D7NSurPzxKV9YxDFbd4hEFGeXUYaFRJdMYVZnwvFKTtdyhh9Va5",
  "key2": "def68ZVxxzd3iiqpxN2QAkmFaHx33Qm17GEByPN7i3antv6h3nCoaA5MhxQF3DZEM3F2wB1YUnRpzMC4UbnsKo8",
  "key3": "2RMmKiEXT3ui4iyu71VUgh1hVuG1DTZrtPbpYmvJw4GyjEy6DiM6TYArB7dJqjtEbuBm3T5JXpkjbHXcGky5odun",
  "key4": "5mndhwrFoxyrnfr3afbgACqfsd9reKjN9W5rYJ3qr9cBVov3svToSdhL9yDcyZCqm1dQqrt2z9gGnwtTivuzGXBT",
  "key5": "5EFe5qJR1dXe8c2zMuziBqn25bzvTZcidP65msnBzUz2HftWEk3xdoeW2tc1Yz6ioT5maL42pAsd4EAVrCgQGztf",
  "key6": "3g2gxF2QqsyfGR9pfQsNfqcJcboNVCTEDgatKtLLTydEhiELZWc23XL42UJuX2crQMPj6yrCaDdURtsbCZDazboK",
  "key7": "1g1JSRa9oFuHVyDBDKqNJKJ6ygvfm1TKUYjpQNokmwhpBvtEpJ67ZGyUzLDpK5epz5k7Ft69mziBt2ygoWQAgpf",
  "key8": "5HW9Q93H7Cft97gYpCxkGUKxhYe3qZV4nkCuXs4KPEYhc65Zaa9AFhAEL41fgcCZxqYB7UtWgof3VYp7QgykNbFF",
  "key9": "T2Cc11sPqTnjS4Tyvy2VAaX39xug6sVSoZXLkdcUv6W6xguTpFFFm7oqsiwrknvyL55475gWpmRaHutu25F6TL5",
  "key10": "5wZHhMdP3u5YqayK8Ngt9GHLpp6y3jhYeDkhnUATXuQEYCbQe8YE7DW2xykUweNAtu3V5dLNY1KHqthBXWd9z4CB",
  "key11": "wCYkGtRCxSumfeBpsWJmbUFiyWWVZzD5m8CxN6VrBwJP38mcPHANxxdeSWSrhWwuRcTtqAupY3byrpsupMzdhzZ",
  "key12": "2gbpj49eXzaVMsoxrvzcoaWqfEEVpBXEvSNFtHVg3r9ETJnXdt6T2UNBpoyQj7t7RGnrnMuefxvijN4rVRBNxxWC",
  "key13": "s6NGWiT4QKKYxgCeDPVVZav8o43xn3XGzuCc2VpuSsXweoPKMGWhTWNu3cHvcSava9GmX6YoELZcBgajqVbuwvC",
  "key14": "3TwVNSZrk76TY3Dp1nt1R2ip29FCEved5P3z6KTqtNN8Q6HFgA2NgbfKnLYv1s3bRkXoDb2ZUwWePf42gbwqJZtP",
  "key15": "5jy1de7mXaDoucxhvdRYETRZqy5Srtzy2Fq77BHcoWsi2k1frZtGxgUSVXKeUP1RtdEZHB8yUBx9J8PTH8U7dTzP",
  "key16": "2bi3c8Bqnt4bN1A5hMJf1nzhv5Q1NyFBR5VsJrz6HMvLPm2nBQ7ERHN26hNQ2f8ai2mFN37zfMaXaqne6rWDUCad",
  "key17": "2MCij7j3gPjYSfsYDnoxybDKXgRegxBAnwzwppdzW4ecdfEqJpDNdCMwqbp23qSCZcUyy3ZBrnRTo6kQPMdYCZLL",
  "key18": "26NRvJdyexVcfc4F4csHKTqob3zNAnQRKLTP1tSdUX9cfNdKseEGiGKHngXouH6x3LvtqtybaAm1uCHPwK1bbjcm",
  "key19": "2NPaYFpuADLgmwGiFbbozn2DAToqwNo8joQPnTweHhD4VY7p4uB11ZGpeD3v14HWrhCxQ3pnPrWj4djeKT3Sa6FN",
  "key20": "46zZLHgdViSFemdRzV7YvXKTpBegfAbCVhk5wboo8fMprdWX1y2KNSG5GMMTCYVQj485CkiLZ3S3bjwzgSxW5iQv",
  "key21": "VdWy7vh6cMXaZrYdgBhr8YxfKru9dJC8VZKGuZcHUa8gand8aC2PFnYnJ8BCZNATHbcijRk9cVSoeYswpeExM1t",
  "key22": "3X6MSctMtNhcvcc16WiB6DLNwVgDZgeHsYxXmXCA9CvF3fKEC8WXo3tMSXkEWWCnVc1EhG8HFCdHLpQjxo3AvMR3",
  "key23": "37em2RxwnDyV3jCrbEDnfQbU2a36dey8gNh2JYgJLawsuTtcvAcfzLFEm5siqhvf6Pb5TUuHhbc5PBHuPpd96rKC",
  "key24": "UmQ6o57JTysVyf2CQMKqgEddScyx55bbEUCUMywVdqXBiBFBFdtWhiv5d6yAWiqGvJHjrvQ1oBjC3ifkBHQ1K7i",
  "key25": "4Wfb7ibvyQaJneP35py41Qcq2DHbbMmfvE1tKKWSeMX6DS6W4SMTMqV2M3prvp2vQgfbxhcf3o8H4BqmjkH1dZT2",
  "key26": "4vAcqUEovCnuWYWfBJVd4gmCLNMpJ8VCmYsPXsPxwRry8CFvYWFDHTtYH9ji7JmuNkbJ8xhooehj19kTWE8ujkUv",
  "key27": "BTxp3vDdXw14oLVEJdT88qAbyvJtphkwK3rqaZtBPde8jJ1RiTaKx5f8RkrkoaV8JWT2NN8vKvxFnFvsvKGyswC",
  "key28": "5GwZxFiLusvDUja6zXQM2nG2h9wYXdDJxf3FSwooQyA7Rbcix6rJY5XKTg4fqivdhECM6KRvfBnrHkR2K8UMUJbU",
  "key29": "2sB85gRRRszfCk92iHAZpaEoyzgczUALWVuo3XKv4wbE7M5Swf1CDqo558JfGijhZbSSN8968EAvbGbDs5c1QF4f",
  "key30": "3in5xKh9rJcCG9h2jcTsiYpd9goDJBVXfEsUiSbSNNDVpcp5ykon5FjN7GWHGRdZdDiS7Q9tWzp3qdBEKMRdBjSs",
  "key31": "2xaMpfrVTGAN7ayPTb6aUorzMyvouRRGPPE5ySFg7eVTptfHNU3Kbz5HZnAvF4LoJ73YvtGwPHaP2w5iK8yZbzne",
  "key32": "5iqkPqgW2tUQm23Ks446dDsgGuMWmaakWb7JoKPqta5aKFWYsijshdCwetFRteonUUPQ8apKyF8wotGAB1L7aguu",
  "key33": "4C5bzt3d6mT2rqLzRhFFYX8z9KPZrq9kpJNs3SP9fcWf7YpsMJ91LguZAhKvZ97Y5LboR84hh7467htriHLSgwJk",
  "key34": "4LHvt4nHYZRHHqba8Lorenm9fR3DHMLoSt4pDf1uDYppPaTSVFYMHJNSfpiaYnWgWP2Z1RmWMp57Ax574RUiE49b",
  "key35": "2pbMzpU7dJSVu2FKi85prRf5QHTGbm9r8WsFknysL15pdVEge7aHzvght5TWZwuACL7wZ2gDDWc9UrRvnvt9FnYP",
  "key36": "28MAxfnrNMQFiuSwd38PGpWP4gwUi9khqnNWLNsq1saJtUXXGoBCz6NisURue68Qgwv8vvdVposhjnxCda53zuDj",
  "key37": "3b5p3sVZXdbdLMndVrN8bxdvfDs6uybbwMgkcPX4v96gomhexenUyMZAnh468pPDESzVLUD9X31HVUYw4ZvYLjhB",
  "key38": "2PsBUWm1ejBDobvBYodJrXzgreCKyuycAEFunnpM1mNnRSrpY9cEUjCjfytBXFQYRAm95xuC2GEqdrqzfmPacdzZ",
  "key39": "4pLRhw6DFm2BENF1kraq4Nwz1NfnJR7bFwtyKSVFDX8mZCF1yL6Ky8baG9HfpuTfh9t9HgT55TAjzBLV3jXVVZeH",
  "key40": "vkd7ese5fyqjaYvHmQZwVr3av8oog1BYN2oGJNdLy1T2bBZuPn85eTJ2vJ9khZk7n6HfrjC8gpJwMwUQiKf8ACL",
  "key41": "67JBd12DAJXYXF3KNZYBQccPdhmwiT7U33QP79B3Yka2ooebTrKyroCFYBR5t69ReehvEc2pEGndoGCyE2Pa1fj1",
  "key42": "5Ce9SeemEY4g7nCy4uYW1irwMvdAXNKcLKfDbg7iLw2Av9fbDCiHkpYsWWXWFKovwvCuPqfZmsGhyFtqC6Qhvukk",
  "key43": "4deE4hoBp7MPM4GSmEeKcHJtuWYv6jMUWS9BDbTMsbrFSkn2MogWTzXQf3Hcm1BJWDo3uMBaJY9XdZWe8DB9DR9R",
  "key44": "49d5yp3x1PUdg6rVgE17YauwvwoxFT6RVUw2pZuXeWaKNNzUUCFXH6kTDQ4EPuiVtAre8yUkTr24tWiNx3Le1KNS",
  "key45": "2RyJyk6BvA45oFxmsQReGpTNsXSYUMfn1kHX3mHMF8pjQTBmfpHuABbpCvo3hF2UbjKAvGucoFM8t3pz7vvbpZwq",
  "key46": "3KxkxoAjsz1f6Hk2E9tS6pXtgGzAQ8BSsRn8xC69MtXsGMZFmGraLP3MtJMBsBuMNyAsGSB4NMPML4QUbooioEiC"
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

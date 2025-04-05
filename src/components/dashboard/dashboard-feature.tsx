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
    "5qK7XMMQetNWAzcWSt73yDy6q4d2VuGNdq8U2QHMb4dhwhf9kyb1bVzF86NWSDr2uTTypC6ju5uCzPEiFfQQMNf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LVjxcsdbByjVXkB2t2Kq7HauK8xvp1scF19WyUf1WBu6S64pGTk3o7aamCU9o2v6oWzpjLCTAGBnM26BRT73hit",
  "key1": "31RVBt56uPwZpPoE81p184cFH7LUJCGB1XxVEyzJ7ZUpWzCKzvbyWVdFDatQTusXKmktt2rYqA97yQgJocCGt5MC",
  "key2": "56GcPULWowkbQf3WoNLt8FpKqhbzdRPcZSywFNBgZwKRgDtqLJV7Hu58JpV5xKA7uADanYKesZB7ucn2fqvpu4gc",
  "key3": "5H5sp22ZDgSD1DB9Y2Ty23T2SVbd5HrENxzyDyKzekMdnyqmYpdYwCfnZeS6CiP3PKVeGvFSYz7LGC6mUS64zjTt",
  "key4": "5Mnua7oVixjdnTjC8kxBmLgu27y8omjaeNSHPgoKkJgdEsxWJN84EBtPsTa4v2g2rdd35FRu63em9E9VP3gh7aLE",
  "key5": "2Z6FXRm8BL62ZwJq6wmKM63ZnDK5tyeXCrjHPVMmr3DVEUbCtsyMxCtwn5TC48f7r7RXiZZGG6PjStXWuhnM8Y4E",
  "key6": "2Wm6bA6FobHpFoyss2Q8fMrcfZ562W5aJz2rdFU1Qc5nrimXmaF67KbBcNunaL9nvbUeGsPNDZN8cogKFTRDvnYU",
  "key7": "3scWvQnqKPhyQ6XGJGwbKUDsGSfD5BWkCWbSVA4p6j1XPQgR3NVi17yYtCeNFJQToskv5VFMQyDo5BNtqmJpj9Xh",
  "key8": "4B8syvpJD4QC1SXVAeqFY99e9KiBF11wZtumtHwEmX6r9wdEhQXbGzzp3HRHhqXSyGTkcv59P5z2c3Nwxky2SoAF",
  "key9": "3JcBmrKHz1yRojywomMzgBjMNQo6HeiesiUWFwV8DY4wWPVxtfnKYoNvJ1ijVwSHDcECu5eD4Zqt1bniGhQa5J7m",
  "key10": "3S2XMqktjuzpwD5E6Y9VPaYu96VGaXHPcBzFiD1tL8QpKHkMrmtdDfHztG5YkW5YoQwHZdnD12oeNWdYBZxwJUu2",
  "key11": "4wusV1KxWAYLTBnnAiqrssgXS5GPT2PT7sv3s4Bghw42SxuuCBs6Cz5YzYKjvbpV58gdHEoUeaAAFNwfT5U2owJn",
  "key12": "64agVvitfxFU13dsDoPU9vVyXDjVf85aSEVz9jGAHrLUDCdyRuAXVp2FMHw7GwRoJ9h9AfggY5UJkfoJV8af6k9k",
  "key13": "5h1ZYBisA1gPHnwRFPiswfz8yWXops59hd7tHZmCDxCiuTsWipB2Dnmn4M3TRxiuMe5mWFiEjSFYXpfaGM3dLFkT",
  "key14": "AaXtQTVskkQHR7HC9wRgBpRm75UQYtB6PJbdJr9D5yigj16PR9AtFi6uWWSWq7L8Y7dyhjGrP9B9upGfoe5kc7f",
  "key15": "Nt8bPsmQWfJf4mh1vYRKJSzpTqJMvEzfy8ih7VGBkgTWv7pMqu8SDAu31GZkFzYymtzBiR4C8kqFPvozsqtzHPH",
  "key16": "2Va8K75eFt9an5EyhK3ZX3b14GUo8fhJfgGvuMUzQtbiMDn5dAeNmsoU4HVZRyhckj6Zji2Bs8hkCTWutPRVesjz",
  "key17": "58cxwkVvfR3oJYcQVfTXfSPKfkASrhvUctZqT52yE3e4vuppFZvG64sChSDdq9RxvkXPPP4D6A6jSRDkQqNYirDy",
  "key18": "5azDeQAM7c9uebJkQW8Bex43UFaGjkndp5YhE163Wkuh82rAuDSjEJ7xD8eNFwdUdiCnDWkPinFg65NefQBMsy1t",
  "key19": "mZNAYJUeadYCehjecHjaHY3ziUyFeaATtYMr1gFasQjEDttrW3gcWFtabeMsRtSDFJxRX2CCj2P46qbwSSwMrZx",
  "key20": "3mq6wJApZBrHsjAm55d4ECJPfmtGoQR7HZ8FvVviNvAnQ9DQdUmFQy6WwLNdeHGB2LmBCjPa4xYz3qSwYML2hxyU",
  "key21": "3nJKxtvtSCvEHfXtgZipFtPVah5kAQ1tZpMfkautTvHWayKMFwRCW7rSWhQZHsXwAnRjYXCwgkLnoux2uYui7LLJ",
  "key22": "5GCWNRYK1VXm8tvStdi4n36H3oymXtuj7xX8yQQvDHUA8555HyvXU4kNMS5LcHHYUw42uvbaPBfpxk53YmGQo2cL",
  "key23": "vPABjEb9DBUP41Tr7uBcfSHp3nKpQM6XT6E3qxT35n5JoKn6NXB9MsdgzFYWrENyuqSj4JEbAywx9FCPU6ignJb",
  "key24": "2h4TjVY3YZhvyeujrXxbbx5KRmjuTKchvD2NTkb9wkSZqx7RqzHKoiiJzEx2XQ3VJ86ixh7wpuSNHN4e2NuKT96H",
  "key25": "2EwTtE63sD581V3EHwkM34aHmez9AFa78P9WBWz9EzAhNf4yMusHUrAV7MT2zqtTQiw8jmEtdKtmwHV1UoFdvnyr",
  "key26": "5H9pKgpn8q2rAuMtxCM8WB1s3XJ2gAmiW3wHjsgvirdUz3E1CHvKT3HieqMbwycmVY8nHTwzd1bH36h6xUYywruE",
  "key27": "359wDsBQ9rGksq7E2eCLG8MtSm3ygJs8GNVsZ9T4m5DKcgUkgec9DFaaWzCQ9fCD2h23NT6VMyZwPaCDSSqmubVa",
  "key28": "5yuRR3pND5QdtctYJCoEmzGacmSDYmpXTpZR1GDdKS6n9nuNcDt6PcVeEcdgH7CP5moqksDzffoYixbRqx2hDjWT",
  "key29": "3bBTFUfNVoUy88wic5nLnq6Xgfq3iv8yKG32kJy1f25JMJez8Up77yYjY1nPvWD6CEnEFBbvBcX4bqUPQgBemNwq",
  "key30": "CqipdMsHDLnWtqmN8m8y28DA11PNu3JFxgmsuPMj761HyfbQWsgQfGf8uh3zRuEAD83JAYVYyZonnBQiYeD2mJG"
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

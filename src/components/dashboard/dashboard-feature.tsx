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
    "5FH46ooeYmFdshqSCEPF1bpk9tiTe1ik2BwqgcD8wa19gXQEdBYL6inZHQYpwEvEs3AUWkeGPXHZXhvdbKMLiNZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46TTZmNVkbkMg5XBFZAfQ7JREgEGvX7UC3dyXeYYXCz85onTKhYLETtuLHf7ftzusapEDJWi2ae8CzyG1aMAfFLz",
  "key1": "67PK23Z5RTJbuVBP1TSi73HzBiYqEd5nmZhf7XmbUXBaripFFVzbfQfUJ4VkQ91yXoSJ51fo2LTUQZgrUHYyibJk",
  "key2": "5dWuckdDKDLUtwZW1QsYNk1GM7xQPQh7d1YGtNwS1fNZHmSYU3Lsv2u3C8DJ9qKKeorbfSP3KMz9JpRnK6Uer1Pu",
  "key3": "5Zkt42vR6kJBxbxwZV5PmKtQsKj4BxuPiHAnC5SBPBibMTouoQ7N48FYa9JXmQnrYHv6umXygjTMofU7uXkqpnCp",
  "key4": "at1BmKCJX9wTnMNh3ctFmuk7iJNyeEdPhjej8q8GmiMHoXCEFm2uQ1NELQss8XPpeHJ1rtxorHqUc7P4asJZWXv",
  "key5": "5gVEs6syZD2kgDzKBGefUC3KntTpopnSJhpxK98zyrPmVUbje4euR3k2wR9a1t4cKoRX8Qohyc9VmnskeLMoYtrC",
  "key6": "4dJtMmGfkxt9WoZVdSb8NdnYqtZtDMgJpXcHRPu5VjCb6FCstrf7mJkbTo7po9CCuvKifCa4HGQtYHdpnGX6jawH",
  "key7": "5MkdS9j6rwo5TXLz2kssCf1aRNHugF2kGK17N5hFpF7ZXi43K74YUp1kwwMPWdbZp55yVZiCDGRXy7oGeq4b9Y9u",
  "key8": "YkaizHj9WdeKAWFEhWVG7Yyw3C6Yprp6DnJEmj14MpZg715yrHNFg37GQJgjQwPBA7aEYQC46ejA4YPMJhf5yEL",
  "key9": "55nZSWUbm8VkYxRe5SzxdoZGyQB36yNn9S9KCk9DDMd8y6FWYyERDUV8EuYnnQ1W7dvU2HgswS2aAoU7h1uPm7R8",
  "key10": "5UVUqFwu2B5woFuNkGeT3pgtedgQwHa41rMWXchhqzxqV9Ee55ezf3jCkUc4Wt7CeiWphuKbSA2Z4LmUEDJ3H5m8",
  "key11": "66sp4Lkkb8dHrg4q7shbrckfd2D9FPN7Nfa38t9qSk8SncCkQgYiXi2rYHJVbKk36JerdJrd38DHT8ePBXw7PD1T",
  "key12": "4iNrnP9sn8LHpwb3LAvS7oYuDd1E3uH6ux9D4p8k9oV9eqi4xpV9YmGymteNqzRnjDLjWrGmoEjx9nZLsaXb1BSn",
  "key13": "5WgK45aN9ScpHywf6iauZ37kTBomXAaMKrSG61yCpdRncJRm8ghRRsocWEXvrNdQMTtZtemJUGj31XQDofP1FTke",
  "key14": "Xih9tq1DMxPJCLNPiewDW1FWqcSqnwKmTgDgnCiJPNHj2VYRDLb6xrMcQhJpN5Tpi7MUigzmiYoQCj51G7wdrsc",
  "key15": "5Hcm3vcThZ1Sm5cCResHxFTWQeUgQH96n2enfitydZT7QaqV4zkhGetj3LYK4WtSPgZZGMECYsdy8VpeXTZ6BPs",
  "key16": "3mSrYM9FoTYiJ3RNgKiX9sNdYdzNPFAjieHvEpyNFpNnwcBHCQpwUGBFXuT53teD3gUKN7fKQWrCiFdSCNior3En",
  "key17": "VGfsMLvgcosX9xjgbgKZ6gXw2WcarkCTKwN7aKeG3qK1WAaFuW7Txekfd54CA5vnpYdZ6LnnJp6tArz1wXAg7L2",
  "key18": "5gs7nHRbQ7dXW8TMtydcmNSiK5DnuhypsMMTZKXaoHKDi7peP71Sx8xj19Awv3fEtoeDMf4wvyw61rMuudfrWEjJ",
  "key19": "EzEcppEmCESraReqYVhWCwQiNRNSwV2Hc7J3pTo7PbZVEskLWmnTVycFkWSKnr78KuvD616RNyq5CEcNftNpPAe",
  "key20": "2pC9oqXgzPGYCYPS5LhhoNovWH7dEudHnUTBmiRmfH8S2Ffb8VN7SVn9qFzz3dgPWFFqvHL871aViGKiW3L9yfu5",
  "key21": "5m8iYqdV3pecxFTqVfYWkq6VPeNP9PYkqazbcGMPHLV4PXbqiUbG9qbuG9KJriqZyoa72soDBR7TMk44PccizVpu",
  "key22": "2q2gkQNzsHHNjiJy3aRoYbR62iEZchxBFzMCKpiHhfaq15b3amP2feyMKJ4c2tG8czBn6yARdPKeVfRWCHhrAUEg",
  "key23": "3PXYjJuhBszgGumYpnmzyhm8ezHe6iQNDWVagfNbKuTZj2coankoiu26TXxgv9qXHPYokrWkpVwhecEDwY4G22xe",
  "key24": "32TwEFxY1VzLhw2zr2qXciKD8qNP4VLhDs5yTpiZ23uosw7x1L1PAS33zpSt5JQBLMkWLAuPbwfEJVXeyH3o7LtY",
  "key25": "4CDKBoC67Jq3M4DwnNnYXPnhfRZLXDYTWh2EqqipWdZhncZzDvYBZT745F6Fv8kmdXqcUBt6ciPdz49U5nmWcob7",
  "key26": "3yS2HVFZAbvXJG53ajbbLBj6qEqfnMrUMkKq7qSsd6ffPZ53W1JWN9ETt5ZGbcdQvUhTryQx2mzQiWyoq8qHP3nf",
  "key27": "5wPPCHdyR1CjskSsV2WUiQDpGCLnT4YrpycQXcCAuuR9hB7p2pP8owymyaFDtm2RzWpqRjw8hGNDsHirWJqH247j",
  "key28": "5HPhFUBXEDs31Hf3N6fLj6gepxeSbkR3Fro84cbQJ9ApWzRcRXm5Y69sycpmhg4gBQHMio4HicK5bZf8ghdcxpcP",
  "key29": "5ArVTACbKqcFzXGmTW2cN9sh3JHbgyvubFeQn4D5DoaY7vQPqgM6yPHxudu6C7xdPAuHomEJrkTWydv9SR916Qte",
  "key30": "3zqAYXDrAgddVTgcJ46Dcjmnh95jjEPYtFwwapi5Tu9cd6A1aMYPh5LtPXn1Nc4dXNu94wchZxU1BX4cycEYsjyg",
  "key31": "3sU4TVwKsBK8Vo6M6iih3KQ3HRJacZbSTnouQeNSL5dHDgre2C1nXFDaxa9GMaSN1GqB6VtqX5v84DsHekLRBPED",
  "key32": "4xWn2TLVpzWU2ZJ6FuAx5qiuPQVLP8FidhFYPWTBwyTBXvrPGWWMrhtN7gwMUSpz8yReqosw7a8S6ovFUbH4eifY",
  "key33": "5c7cNCaFtTRrfLJmBbGJcVc2GcheqLVTxdsvCyqKjSBuFzXfN44oKeLqZaNe6UVHrSw95jotseZoRQ7z5Yqw4nvo",
  "key34": "215g2ry7URgpeBLgcwsLgGmRMyFar5EgkNfiJrfaVYfnJ5B7WqtSZ6mRHmbBrrQg4utZmNnYYhYMtRq5h4CWvf6f",
  "key35": "3oDv25RfZ4fDXta7WoSVCTxFAktbN9wXyZHmTT672xEy767BELiy79D2tFTwaoqYj6Jvmit9YxvyAzC2KsHK5jMh",
  "key36": "2F5KD1pwWFYPMv2X9wYQAdaUBNs58xqNPi2zAcWNjk9tVbvuzJkwbCd4JhbUdEY193bPFEtjxBrWpY561bVH2pWC",
  "key37": "PmhpbhKoD3HU8f2SXKzgKCavVedFc279urLp2e8TJCPB9iceebZT4JMjPzhLDVKyBfF7ibAM6UyFpkWhskrwBVz",
  "key38": "4gAihk3c4MdsRXKQS9zd1h488dXYeoTJpySYrfvtDV1R4Bv889Jk8PRMitWDkC9jwLXmwN4K2Ft5o2KhQgwLtt8k",
  "key39": "eWPpoxHkTmq3f6cmHyzsFNyGjPYZdaGQ9cPBaxyLV7jicCLwNgxJmFN9S7333BhjLfumQeFHN1wTN2TRuDbaHfV",
  "key40": "5xS6A4UvGzR5McjBSHTTD3FpwZ5cyPHsqSAGisoaqDojqZsiS9z4K2ErowwBTPDut61ZMCW51383xWQR4Rqc5zt8",
  "key41": "5vMAxTog6rR4NnQ9ov7c3KKi5UtEQ9Mnfjqp8vxfBsSCNy8r8pEyxuSgThJkLwtszPBnYdJadebRxEaFSsQTYdyt"
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

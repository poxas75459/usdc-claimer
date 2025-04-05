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
    "3o7Rhxy4hZDyYeAQmVt5DR8Lr8tLDA2sPK7yTukuJBX452uMpyHoi2M5PW5verbVj4V6QyV9yEZAAjY5PR4mMra6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GZtqKf1CUuQx61NA9Btj5LpoDQDaZW3Zrap6jbkdB6ja9iLvcgB5YoTaCfJzaRzY9hyHPmErk6UH424aSVxxYci",
  "key1": "37zVEyjaMmgNUccvSKrJ1vqbS3wEBnYrJHJJaoGXpjc1L1e1QYQddTgLMV4qBc2dTyPUEJBc5uZa7ibeJyZCHenR",
  "key2": "mTteYSGMKENV3XbWKg1MKZZkLGpZq5D4CmVzzCRnSdAkdhxrKAVUqzNYUzKzEaf8NgVHs6ZS1HEEuchc3Fy9kYN",
  "key3": "2uYmD1UowVE527LdoA6ujCi8hpmufDw74gX7Q338QsPPZhHBQqWmBjP4RE843wDgYkrF5psozgpcGdFLvquy3Syg",
  "key4": "4vUB8bnCRhYZi3bZtpa2teMbdeyjgMGYFxvi5TCNHfDFbtNmwz4i9Td1KWNNSFXdJ2uLTJLc3aDrx9FG8nzrRZ42",
  "key5": "4JNLMkK1XoAT4qW2SuwZz9xCa2n2XXCASJLzEiAfFqMQKeQmWkSwVqS456mjkkcK3ghjrTBEA2eMgiiBTbTySJHA",
  "key6": "476rsay9Ri9HUfs9AaS7KNqx3VBHEcyLoWhdnd38anrNvn9fT8LhFvpRv181vNi4jZixUG3wXetdPf1R5uQkB6Y9",
  "key7": "4FQ2Wj15twVWQLqyo9BVEc2uFKF5LV8fsv2jXR7VdGLMULUfMmQb3gx2wanVaYUmZ78vvjHAn9vCCJvaBuvwnBNk",
  "key8": "2BvSu2PmLGBvdbnzuv3JFfF4GzPz2RVyXfnS4nRfz7yZeHPBCrVCTgMgxLftxHuVrARPyeULBLfZmGWnbmc11xLz",
  "key9": "4XWRnSWmBxUmMtqiH2NCZk36YFEDokYdsRU7ZrBFSNPMvkycwyaMsC4qomi9HUyDGyEiPEnPPnRdCfH2wkTzigcM",
  "key10": "2DYDH2z6YLf5MqJxMm25YA9SYBNFrX2nT7DfBumM44zNsHYoKxkZPpM1nwGWoRYXpuQupPhHzpGmLB25KctHoEPk",
  "key11": "2HWgqGjEynKoF2RKAp2wdiYajTRPca1yLKCtvuNZmtbBDTkgFdSeHChc1KjXcM7mPJjdRT897DBAVv8LeDxXkGRo",
  "key12": "3LKMSGutR8WcAfueYyEz59c75pSkHCzoFjR8yhEd8SgnBpkAjqMeAZBxvt5sqsa8yYep3eDF22aEAAvq25u7Knvg",
  "key13": "3hgpAHb5bzZktxKyHbcHuLszg4KJ9dLeDqBpLrwbeMkMrCiEbdUH2uuuqgrK2HM1TBKvRdLrgJLx1Hv6YdVHNK6X",
  "key14": "4spqh8qwQ4FuQF98aHS7kXwciZBkxcu6SmBCdojySPVjBhmKnQqcak1dTYLYRrBQ18hu1Z6WheGdYb4yLuMeqNX9",
  "key15": "5atQhFetNrcFEHhyrnJ9pj6w96qh7C8LkyVdtWKLN8oSauiWS4FVX7HMCMWERgnLhBUKnb5kmNT4ZHAbjPHy7CC",
  "key16": "5prMAojuR7GA7CbLoy5NgxTLyZa3F7e7dDX2StCytXwRSe6AHJUHaA1EkAiK83ateCTdpcFWFqboZM5Jm88tgTkN",
  "key17": "5b5TaTR3C6X1QQjFH5BBeW4tB2qQiSrJS5kYhzuXBvxVUEDxy34Ks5PDTDCGpzzpSUHWu9gi8T7Ef5iZxMbR49jn",
  "key18": "5H5nWbYa3DyBihvArEj1J8YSJ8HFt4GFDqKdo4vS85sC4WxRKUCFckkumExZUMXosh8TYfEVndrgYuMoMxpEgtui",
  "key19": "33ch1fySe7H9yHr3asPgEBXphk9XmcRF6BgTSo2MNVx2z3N5147qE1pHpSgi2jf77GQmsP3JnE3wkV57Gn9fdJ8a",
  "key20": "5vKB9tSgbMN7cZETJ1abedphahgiA7uYc8tAKCx4J7GXD33BeLa1o2MjiPimV9krpdz7To16azQntwy6JQiDnvtr",
  "key21": "g7QyLshEfnQfcWMqVk7uf9Xpnx3SwYan7YTxu9vNTyJ1fRTZ62j5VK32zdy76fYtYPrRPX33KzrKgytM58R48sQ",
  "key22": "u9yzqMSUp7QuvqEdT7KaQyDJXPjvgEqNSDZJCY2mcsb5SiyDpow8h3xc5PCSoS6kr9QB9Bwz8gAnSjeYUjTrfVQ",
  "key23": "5ok8ARGQrXvR4eJZvTA8M2jGPNSYVUZVdSBBR8jBJmX95TrRkcKPDAwQZz9uSjgbpvsY2vmD27cZATM5183RW9ZQ",
  "key24": "5u338kiTSY1vx7esVrxYEvGBZYGpEQiKzAhaqVY5ppTz3w2amDaMTxLBDogPz8iAJqwwpAz8XzCDsLT9VYhWUkRy",
  "key25": "2bGAbAHVrgGjsi9sBymekjuGTx1CyW1t3FYEBHKZSdm1MxsX4exQJhYni3Uk1wPWE2GS4zLXVdKScXxMhFrtDFnp",
  "key26": "2Acv9rQCpDAQcfs72LH1pTsKKFsh7juiGj9macAdaN2owtb9ukEHWxpJDWmgnDVTbchD4VS5WAETE2cuRES9p1iM",
  "key27": "42UsZfhUcZ9RuCnPqSe75yEj7HvTJCPmzVwatx3pUXvv7t5qFp5aMT1wo8fmUSFXeS92rz4KyAiUxVtQjWeXHBCZ",
  "key28": "279eFqpjxhMhPMubtcxxveEABU4sfUdhL2duXveVFsAry4HijCkEtydwgjj8CNaZ9LrDjyQdd9MKZABu2npioRyG",
  "key29": "5TbhM5fWx5pXZAzCwKEjLXpCfwM5xkcQshf17p9CNS8uvxEtNizKz7T7NsZaQDTLYx5sUqaQBBUMpWFodRqyVo1V",
  "key30": "2npQ5sKqsVdtDdKB2bxqsq5mkqfBbxNkrsLN7CaCdyqA5Epi9AZmJuAFNW1UxJ9rVkL4w2eU6hetmH17pZqFfUq6",
  "key31": "41PPZtm65FM4CVhSFrKThmshY8Y1Axwmyt3uFcbVA1q8BwgeFPRDFBhjidcieBckGphDMcmm5GY3pKHwkoMreXcX",
  "key32": "628i5pSPihyr6G19sXhFoqBaUrtRUzT6FUE2gPDua6JErga28NcEgMGH82xjK2t3GryPA2ijbKyutvg8mfyJDhro",
  "key33": "4YousyitYkKbRbEuTn1b1Bu5YDKWoj2pTWQxLdH81mKR8jwtLPJVoTryUcAEnjVLjb1juHWDLFvtbN3gvfm8LdjU",
  "key34": "2bZpB9e3i5hLBcgckVXYggvJqv3K3m8TzWMC3RsmWSkfcFZVArwNtUVc64qhJBPMEwJm1KSGzUVwAuJYLs8Mz7rC"
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

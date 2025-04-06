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
    "WWhGeJpqHnyqfEh84LzTJqPpTuadH3asVY2dVgdVcL1g9JmT4yESDDfQ57QYK3tkeYPySr7UknmuU5tHMbn1sKT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S26NUdhPqHCBm2webxeKrz7r5uM3Q1QV3t8vP4hdGMtjCwK578f8ywpWKaAZPvyqXoagZnCqBdg8ew3vD9PvBjE",
  "key1": "4W6bMB9FFSWAnqmjqe2RNthFqnF17SA7jcR9PoqTUwqueCSZLrVxZDteLCnqGc7euyMK5HaDbaLgLEma9QfgdLZz",
  "key2": "SeB923aeBEXSYoxWS3RsG8gz6eNL1Eigkdm7ko2Eyj8P7m1JskqpAHJkXSEwTixLR1K37uz8DmF8JgN2Y8dXb4C",
  "key3": "23Wic2Zua1eHSZ51BeWbp3NPk4Pjs1WSkcsRmKg1rnke3T4DiWTtci2ZzbvM8HfRW1JGYcHWYdyCeuhef4k1y3k9",
  "key4": "XxKhwCdgnRPUXYtNB4nCfbyhqL4wu992DJKyGHDbZKHhszkMpkNBvjAW4N1Jozc3iykxA8dauEZUpEXAQqCQ6wZ",
  "key5": "3Foe5y4Y7j2PSwF4nRPAnkyA9pZikbLVbWN2iWa6vQ87ge5wTgdhefHYtZN4wcZFqrwadEdR35TA1kCPcr4tcJdG",
  "key6": "4zwNB8C2zPACDjxUixrFN2kq3aiA4W94aFJh7GbfWvTwh1c5bCNXfeuFZHpRjaNWFcbdHAYzLyyzYDNMunpmUmGS",
  "key7": "5sTZxN7kSnV3qZmyGAiFUsqSMprNPC2vKFVrr8tKzF5DXecA7eWV44qGdSimJchfmauXdDkTg7w6JJcgPsC33abK",
  "key8": "5ahHWpnCXYfVv68qhZTAfhr8SsJJx3FsbKL3C2evz9TXe2ubdMLw33gt9ds7qN8GAPMR24Z8qwc8aJBZG7D4S7FL",
  "key9": "5DVutvV5RDBx54kwJmZhCKvkSxKRFUsuNLEoSWCwbZB2MEZo7eHU5hdhDyqxJBEzMP4T9MPrxFVNVD2qmCsnkER5",
  "key10": "5ABoDLF4MZTLrGCQZMH5ApfaH6qc9WcbS49eksgFF1eZbdLQBt9XKtw14FsveVrix9nYp1KvLSPYDUm84pSGvGaC",
  "key11": "y1xErMcTebyhmnq3fMhwHg2zhAXriKrwkLXMckDxJh3y3L1Q1oF4ecNxfu58SgdzRcMBSomyQPt1HhWJ3jS3SYR",
  "key12": "4LdKJ8HF2gtuCdyhizxoDiMGKhLgxapwkouQhcBK9WcM8Xsj14VmErtZTRhAFQoUCLLAYrLz5qDxsD8fsccNXbz6",
  "key13": "3JjzZ8Yd4w9kiGoQNoCdH7K5ekd9B1hh2JvsjuVRJYPjZNWGQvKnARerhiut7Muc4w5qt552HRQW6JHDFGTKAuXj",
  "key14": "YatdHfHLfaN89eXEeBHBqmd9eMSgdcRbYHRFg6Ysstyo5uoV33V6HNLotwmh8VBdaUYmGCxChoByptLuHjXrZpw",
  "key15": "xHdL5FEscTvGVTo4vgvmNg7JanfyUBHSddxdy228hJ6cgsL7t8hVojPHtbLfiSfSiz2BHfEy6LHazt4aNvUJoaX",
  "key16": "3otHaTpjRgvugtZv8kyarp6mRwZhNaH3QKwnFiQLSBMQX3dHvWFTiwf7wfaYBkUMkWG6oBtmTXkzzeQGFA72ZXRM",
  "key17": "Y4JncK1HjhJt2jWwG8jrBhA7fSFVbtep968a1StKYo568ESzaAfwTKKBMyTLiob8S4S1bNigR9dZ5DBS5eHDTxN",
  "key18": "3SzPpxQ41xu4bNJHpZPDgHRSaY2c9AF5nYJoPTfCUBbFm4v3xs5RA2xjX8tt9Ls86iYNogTq8kyvawmQ2y4wsSUZ",
  "key19": "3zg18VUZhzFrQDxBPTofkZtgPdWieNnm5He8AoYhhxQj6ogGYs6AV4JduvDqf6B4KnTpShk32LqXF5fpww4QjhvY",
  "key20": "69bRhgTAP1AxzzsDKGRwzuZ6t9G2tPnT9fXnjB33z8y6Vz117xxhJb31K4auArTdLd3Mi26CY2eBCm88Fxrxjgt",
  "key21": "5dsQ5Td1CppDRe5xaaYu2FoHa4MTobiyBHuM23qkfbkvmeGVkMh2WCj3uhQV7zfEsjBs6nLsSeNPxYYzX9boHrrY",
  "key22": "4rUeukbdUFGLDb3rEeRPPYzWFszu6h9PxnJfkiJJSYHPYteAacvFtQd57bAxXJAk3s6iH9LJth8ktgJin14a4StV",
  "key23": "4GjhYSXpbeGxmDfk5Vaq7b7myHUxJHg3QfQ7wEYdfE7TffaxTiZZb2wy8pbjxLfhqPBx2dydcuVH8pPJH2dF3x1Q",
  "key24": "21uaKR6guFNmThu4zFZR7catoP4JWfWjT7BmMsTAK3eKJHovjy2hrd4ojSMfrnZTSDUJXNcKiuJo8Q79MkEDwCTe",
  "key25": "wsjKbnJuou2e2HhB8VZ4oJeXfChEWuk5jCvPANdnsZdAiPE16xHfQNk2ii9tLaUoZjhbc2zhT1SaL72NyXt3YNX",
  "key26": "45CcjnjZM7zj9bxyd3HYdQPpv661N6Rb5D1FuRXUaNqM38bP9TghyZQUgFykwppne6fNXTZ4KjvZHigkDQhx2fhW",
  "key27": "3p9cjBt8cMT61TQF4ibm3SdX4XZhczfDx84Y4T8xELdSEoiDmeHKgtvHJg5tEbJdr3gXXFDyg3nmXgYUUR3H9NHM",
  "key28": "n2uz8t1HZEKGBNk3s4bBkGqdjxPpm2yKSGGawEXBs4hgrBsa56F1dWj6hs4sxTR7Vxa74QhajYA9zJtJK3kqsNF",
  "key29": "4a9NiWrEnzKYFbVPq9zHZNsi2dBV1Ww9fC6a7Ua4UAhohEJCRfkjQwBN7XFG3ZNtaDDioCKB6jDHG7EzkthpUSH",
  "key30": "qPSjHEsPSDnUfEuhamUNz6CA1PvYWJB2a94FXeEoxAZQxwGSR4vCHLQ4VrfNMw16P3dz7Go8bZzg7PnSbMr5u7W",
  "key31": "2GqAcm6AknqsrQgRwF2ttYQaWhXWWxy7LdMvoWUj9UnDWx2pm858GPYcK1ix58qmu3Eb4SRBmm3ALcsPA5AKh69M",
  "key32": "33XjNwBwGENyTqaRE5W7f6bVzY4PtdJueL6YnKcG3L9cgnWnf6kLS5A9Z8Mc78rRBz62gaerTE4bGkt7iEGbsYJp",
  "key33": "4UsoptzLVN2WBVcvHRqBxeaT1gVAToRdorJCusCpFbZgDWB9uWQ2DUvri1HJU9p5vk9v1mCkDbA335kQEokbQcH4",
  "key34": "22ATt8Wi9LLbEtovMosZhfhzcZ5kfmKeFHUJTWU8DmBGdBckxdNDnUoBVpoVZSLRQbDqLb9JdbiHA2nUDmVWt5X7",
  "key35": "2tkEGQFt4ZRLKKETqHCT8og75sZA15fzqS3DrZBAEFoWBouwCfjfXiCUeg5cYhaZXB4z7Uardo4cHk6xTugGYugk",
  "key36": "4hgxzaWnHsAy4Fgqz8ZSydnDiEhaVE7yUvVH9N9oMRVJBtrgVCRFismk66pxQfKrxizarWMpvYhJ1bvsuP5VuyKT",
  "key37": "3fdKNKbk2huMJkCJ6kqGjLqHPXzc668js3oSRHers3jzhSQJ6hwzkMWfGNVn1r2Zq8xG1ZMRBDZAh38VMDgky7YQ",
  "key38": "5eVN4nntfSHRquMeouCVwENnCrj6EiightKGoWPtqW5c68GF3aJ9a9MsXwg2frhugTp6aEWeXYVp8JCsvp6twMTc",
  "key39": "29vqPoXpPGLXrGma8tnPdFE7bHt998e5HYY8G1CKtCLpx9V9X3oi3iqxjs64ZrdWWBy2dz66PemFUqPPLigVA8H1",
  "key40": "419zyaP2CMDd5TXL6QeNc2XpNw6JzYsiBMrJ8qFdyJQGwvCsYpGavyPj2hL2UnLSdGc97Df96xxZawFwcLoHqRj6",
  "key41": "QMMCifhKiB7qujUpnAAr4Cjoxup5HpaF3rPy3aEy3GGcTj7zxvCMSLvGB7ijeSzGbU7pcDHx92E56jsAh71YUh1"
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

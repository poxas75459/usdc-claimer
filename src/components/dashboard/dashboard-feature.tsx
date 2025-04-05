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
    "64nqo8Ez5UMtK38iP82aaj8SvGjDHqSf1i3H8pyZ3jTvHzjwLkpd6s7uc4UhHHVCZVvkjM8BpQqceqRhGBrtCUTd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zR8KdAZxNDH5oKXkw4QvgNUg178Vx8nowNnALmizZXhoRvsBLjzEs6rTvQx7Faf152cx1ydzZcwk6aRhy8cKNWZ",
  "key1": "56cHhnqNQ7EHe9zPVVDz3KLKB4yeYnyQGqXnF8SHJLDUQfaj68Qu7ohCBfpAKQFpzAWSQr96kjNPWtvy3satn5VW",
  "key2": "5EdPEYVK6Jb3D3gWbZ6KFF7WgJpbHsd6gfDu4j3baaXTwar5M4nZNQEwfU1EQBrsTUdK1aj8n8AZtpdPZPpYVicr",
  "key3": "64HA27gfvfcicMy6c6PG3QWFBSnMdHCAbT5eZwqbnVgyxH9kq5DDqrx8ZrBbqTUcUS8gUXf3u1njranZ9CVaqYoD",
  "key4": "4EAPzAij2F6BGjLDBL8tmeLhWt4arNS2vcvdgcDYCzWUJxPWmJXguTrFT3BS4UtC3yC6WUQRZXAbmH5NFE4SrKSb",
  "key5": "4aGXwgR5DNUpyatwVcs3uJwfrsstHjBqqvuWmqKbpj5pKu7fHTRUcchBFYPPT6Du8NLsdCoHfp8eaS2osyVBS6A",
  "key6": "4Np5wwXz7rc2jeKSXn2xAmqeidWhEWcQLkDaCHzFcq1yiJAUpnEry3x5aGYDgGgsvdosphdiB9U62hEDrUBW31H3",
  "key7": "3gY4fmv6AcnjktK14LpUqBZyNp7iuK5H29yrrgrAXh8t2Jezh5TxZ1YcV9QQeYkW2cggiGPFbGEwNdFR2fCok4P8",
  "key8": "wSgH8WqKpMEDjK4CH8QeWNzShQcTj4ooUsLvnJvXks1fo7tGeYKtF8kzxwVLdjqtNqDrbjLcbLaPTCfuTyEwL1B",
  "key9": "MewyVgHNcMjVME1pn1D3wRQDJ4XLfRKhrBkTEtM93jNaGCQ4TLkGmN6NDSxKSEP3B5AqRVYbHyGXr2x8kYhdbww",
  "key10": "3uYWZ5AgBZEYHCpJxPcQEGgFAf3rpSRHpWdSe19iw9b5CN2JERGeGXAuDAzLBg4zXnqKM8STuvmw4YHGSh7GiW3H",
  "key11": "2wU3PC66RoRENoA262frXssabbRV5u6hN1j24RGywAxHXX2a7JKvn1z7NaJytQVvGKYzdKbTuoDAGhLjPXb7shPZ",
  "key12": "FHsE863J6dzH9pMK3hDrbA18UkPZze1bX6U9Znz98Zk4uFEHctgV3aUZPRgPQym7WTWKoREeuH2Gx8jCcuskHds",
  "key13": "4yfaE7m7kRm66AaqQiR3aCGpSqTcUKbCN5WduRHFqZWyMg8AkYJWvdvjz125VErTD1qXKESr1UhVqSPcgBXPHNfw",
  "key14": "5YchbvHX6ooqcbohxEMBGBbUHYe8q1xAJ879QaD61zGm2ioN1p4C5Ag6qPAVnGLMeh3zsG7r43iEbVpTHGUzVyZ1",
  "key15": "Ga7zE3ABHGrmm4fu8PUioJLNPEK6SbBXD5oag2oamBsdaa7Gq96Xug6Z6wVoeaHRFFSo6CmMyMMuabn4hun5jmJ",
  "key16": "4ZBUhjvLPLoRG8RjDpYYSFLFw6Z4yf9bbx432vzMFysH6ZF5BLoxXAQ3U2B7c4fGhZY2if7SueNQthEXc69oGuUR",
  "key17": "3Dkt3N3AquHxZLNEocTn6TgmPpiCGgrPDmtawQvtokVHd68eJhvnrmjgp9vfPGPumhfz3HMSDNr7mudd6PmAgAxk",
  "key18": "3XLzPmfyY4Mhi2D4NemDT8wSS3BDZWhr1VWss7KquvEV8KvHyiSFt6ZAk6SKu2vGiMJni1JDhfNuTSv4kHQtUa76",
  "key19": "3fjwLe1LSqwNct5XpGc8hS3TADVrQEFmjhcFvoSTpcjuZN2xsqJ5HZAXtBoAp7tudfQuLKkSP1VMMZVkEXE8QM2V",
  "key20": "43SSmo3wqMb441wVf8gtE6eZsoETkuwppmUDy9cR2qS7bwLwyNV6ckAgZF2sQg3VeViQSRrtJzqZUMGT5CwUVv8e",
  "key21": "47jftjAH1irM4VEa5Mx3sEnfZdTa9oUbk51VoavsKeyMbPmpi4dAKJMcBuR6ZiP2WsXy6W2UsS6ADQao8Rtz7FB7",
  "key22": "2zyz9FH1fvoXYuvca3CYhc9EtGo6r5op92adWhi9q513yGfs4GZEaofoUWqdH7ujYy9KpiaNbkRzpFsScR855v7F",
  "key23": "37ixFoesf7GhsRtq34bWvr3o5hUuk39umZpr1hJDhLfmKtDuv3GmgMoixZTCX9G9VXjdvWJUxkfUnLN1KxZZS4g2",
  "key24": "5KFDqLV4tnqJSnmjzigc8zEJY96eniYAkwqB51NyHvrcxKQBgCPvZjqRQrYryYEaYaFGgHReQYmskE6QkmY28cAU",
  "key25": "5yrUgKZmZE3hJGu7ExqNvyDJpH14sJsMm5KkQmGieYL1HfLBAW3Nfi1sXZnkD8dqzzTAPWr7SuaMuwwYeFxPBnNo",
  "key26": "2ogtvXyuiuxdiNcaFR2JgXHRhzH2i5JkFWBUYFhu3EhKCX23piTJAyNj9uTkKWEnZjeAZmCsTFnmNcAqVATum4Zn",
  "key27": "LBhBWiQBoEczNsu8H6nbCdszhAjtmY5dYYVWU9XHLgSdjsykoMMvxJD2toFdmtSnu4dQNV4aNM8p2yJRTSfjHXR",
  "key28": "3Wxxu1no97zpE6T7dR8b2TpmrJ9zPkVzzmS5Y2gTuLTtFV7Sj3kPpT8bFWPKE3bri7VPZTy1AHP6gVMV5SWJns2r",
  "key29": "3EwmTYrSmedK8GvoDMd6MEUD9szdkPxMMbtHuDXRPS5C8xpQucKTfmeGMaCN54fExUZtgqi2rRaega1hvzDCTw5F",
  "key30": "DoHxTw1jhV91odCfM6v4t2oR4f5H4H8B9gn3CbZhoZYCz8KDcpcRi9ST1tFEz3e3vsoTJxQrmjhEetGJBTZKt3a",
  "key31": "4bj8pfLsHofymVwGX3JJeMX4fNXXbK9Rewzch4V7zi9Qf1j2XTELoFH78YkW6qEBFuZ2rRYyLNqJcJcVzo5FJn7a",
  "key32": "2iDepBf25vf2BfMyusmMiVgicJuNi9HnoKKeSjzc6TX6J1dG4mFZN4tKM1whLV67QeRE8t6qFbw5kgM8DvsaEWw7",
  "key33": "55q7SiULwdwqhSDV4GJsSqtqDRdCYqStxU3VAFZB3LoiY1pFFVdssWAR9eP62YhF5SQZfNDYdFdHmBHdrrHqWxuf",
  "key34": "3fgJe5gcSLUcZHijKqrQZEY3j9dX5M8M4Es219E3X7vTzjksjKnBVyuzn4PJKTXwHV693Wf7eSmzDf5BhUZsE2ps"
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

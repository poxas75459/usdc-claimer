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
    "3LraYP4dB9ZK47EECds1SouPzM9fcgSrGTJNGnqfAo8ssk825sbG5rVRuC12bRUPY7wSVcS97NaNuhYBVx2V3QGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mfqhj6EGQgXBiWLYF2S6WpC79k66AYFLFDc1kxAcKYGySSVQUmWWN3zGHBatPW4VHgfVMcCAXT7p43KzT5HLaC3",
  "key1": "Y8yLjAAyHjmXa37PjC21pYmkuLkwci3AgN9918EXkBDinZzUF7HUUWmLFTYhZCjEK5dq6szbokaVpmMbotYuFMm",
  "key2": "FM1NQQ4htjvc9eTPD4H7v2EoG7m9gaxrURYXXyxA9XN3yWVG9UmvF5G6MzgJfGNEm93AriqznafiTBQ72h4mcRm",
  "key3": "3oLKHjcocWPFpBgHCgqdCr1mkQCu4Lr9xRvPo68uhmui42A2R52bHUVps6PMRgZRYtP22XvcwuC9z7xArQtSmnak",
  "key4": "2YyfYfo5ThGs7XNy57zBw8RZZHXMCmHkEtD1cLpss2vdTmAbS3MqMQv9ZojqXeNhPGK1T9BpYGxbLFL2yHbZHgEo",
  "key5": "5M97tRRzcg7KZSiM8TRZwysUP63pmdprPsdCXtbyJ6gxFB6Z12EKJHanrktxF1zr5kDemuty3nuzAP4ApmUYg1UF",
  "key6": "VYY4icZTrpthDNw2CQe95thELmMNGYt4Lv7Ebyi8C9RZyaMnGbQ46xwa8tjTw1Q6Kdzdnsxy2pBbwLrq4N56jXH",
  "key7": "5vFuF5fLVD7BsmUi8R1JCdNVdEJ17qM6PeU4wLaMVGRHD6GjBr3iHmiHymYLHoaMd4tLTYgHu1htkKnYsGWLBUtb",
  "key8": "3ckXVoRrJQgm91bNNmfLHrmZaP9pXvwKJ6X3GPB8bHrNP4ENrjmXdP3cUbZvbwMbhk3pfXqgnRjmqgKN91mFAbad",
  "key9": "4MRuyXqPjZuUo5KpduM4YLUQufmcgphCQT9SsFgpjewjCrQ9E9U1LSp8SmdAbqG1DZeykosayHu9m4EzWBSFPfSp",
  "key10": "32cnouKye7HMDnnsfgYsXbZpft5fXCyMWkgEKRKsUqQT7mvaU8MYuMdgnyEiGWLMkqEjJwz7Y6DVaasDaU5MeeA3",
  "key11": "6QzcWJZ6yUqopPvGa3iHbo9ZqU9BDbEwXPY9ifg5oGXx3c9t87o3mMtYrdHCstX9YbDBM5AZay8MmtqRCitikGL",
  "key12": "5HDuZcxfsKiPh2zMHAaiFmodaxzJNV6QojGvU773zFSJct8m6Y9SogtjFzRCbjQ4HpnsW3crRecP4gY9up3PUnkH",
  "key13": "3qsCB4vZoU7P9iKd2grUT3YRWm3NsjmJscBu4s7TacxZVawJ9P8mQpq9wUUY3G5ivx1kkaHFZ2aoXpFgq2o5UvbL",
  "key14": "2ey1dymj1dxCskKYeyucoxwMudWwcDv3sM2eCKoy8BL56dz4RqPBr6DjryAJBnBSYaxAYs6qum76eqoUeovd3VPw",
  "key15": "363imjx8meDzdS5n3XbG2tPffuunz5wVY9Y7MF2NHyoCJ74eVvzQbFqEG4U446bhigKa4V7UAcD5jFvWqd2p8nCc",
  "key16": "3MFrMFxJBQJLSxAny5gLCmPgsoxFjpPCb4Bq6bAChGyBptMRjhdfD1oYff5aZ2e2bJzcqd9nAoyMSvEtJWjVzhaL",
  "key17": "4tExenESRwRQLkJtUi5Te3bQAkXdBEz2SzfxL4A4nChkHv4qRPVE9tktLuxd7fisPNRv3MEr4FGQvyeWpnddmavU",
  "key18": "5ok837QFgZGoXgYD78sgcyyQEXoHCHixZ6enuS8UyyHG7QeaDNLEA2BM7Evrn57aL7eWjjSUBgsuV2QZNPoEB9cJ",
  "key19": "4AeVeegnGAkbsCU9Q3ya2DT5iWbYc7yGHYp1hFLGKpiC8nRdmju5yEqHhACDeWE5RrXG1Mr9F1XyQvLte7sptiY8",
  "key20": "5HsYKoEc8rqP696wQnCwEwmqKVQnVPzWBTtqVihnsKMEKqgBr3N1N8CL1QW9H7saAab8PN7YnoxPXAprRSfUQNSA",
  "key21": "2KZNrtG7RRf6zeyMfHepYbvbXRjZaBqbsCrW9nWMQTtGNir6qwaP51Sk85XQAkydsrhtkwCN6GcC2gZszcajEQ6e",
  "key22": "61XfoCVbPa5fV41XmHen44w48643QLxvqkDjjMeLRrvktGwFPRZUBEomKox83PCDeULMrEkjwYmQ9DwV5fmaUdcc",
  "key23": "4LkuLBFkeztpqf7WNyCrY6Me6ksLcXLi3kusXYZqp5hS7iww4fmLtHL2BJqtv83QtSK6MFoJA9aEz7XQV7inNWqL",
  "key24": "5UmTU7egxxcxfkHR8rFERkavg2WUXt9zucXy5bT4v56sB4jnGJCXE7g5vt1FZdohDeZhRrMthgqHj5WPGB4yrMfT",
  "key25": "4zggyAsVB2461MJB5ej3QRWTigp1PfKioaSBEEdSaiUNKxwyUfhWe2t5Qi36H7SEEzYWrqVrfmtdH22cwhoHkGqQ",
  "key26": "49u957WSS5yGP5H5se4dtj6xKmHuiswzowdywaCRxE86mTNs5ysdhGCZKkTVH7fzB1uF9r87132EAL2cybZm16va",
  "key27": "5XYSsFqxMDafypS6Bd9nvCJQSSzDDeXKG15Uve4BXpGy5SggPUGoTmZ9ueQHTC3VT5LvtUBDyV8rCvF6tTbYHfuu",
  "key28": "4UUeCvXyZRrvBpNand71MbvRxU3sYvkxxRUfKh5w3Lftng5Z4TMs3UfzBcDyzJRhh2EcVUzo4YKiV8MXDNj7iVA8",
  "key29": "24Ng15ob7VnEtfbvorHyjA4vcdZYpgXeNcnPgeM3RFnM2opEC7b9qkn6uGnfR5JTSzakommLsxPEN2JZPgT3JrKD",
  "key30": "3MGD8nQmc3us1yurvu2EAceDr84T9jii56kXceCgkYDuMM5CtPaAa8UxMHd7pDPm4fjw5ZVvobXFsC7apmLw5bpS",
  "key31": "3AtQRLxaQRcVMpeSP6b8aeXLXPienojVfSza3ypMcpwpPQwAaDWtUYLS27sWisCFfBziDzA2JZpcraMVTCfxoqXb",
  "key32": "hx1nZpF956uqFhXC4uM1HQzATJfuh16s7eKDkF9JYx2QfSZ92gmVSjz5Uxv8BPLpAASsaLKN6xApX6TYDsvTpLi",
  "key33": "3a8RJYNC5zYNc7LiwFLcCyttpBRdV36qzvX5XsYZcvVxLFMZGoXECmQqt1UV2SyWAPcpS26hA8jkKqpv2eNHuxRZ",
  "key34": "Npo4brdDu9spfaVuwav2GjKE5q4oP9Qxt56edzPSR6WFHnFjvEcLDCosmCtdP78hUGYn3H1gt2tM5GySWfZK6Xj",
  "key35": "4yGay8mvPc6jiBwPdcv56FCasKRXPBQCTnKAJ8PXoVoMKHXicbtYGQzWRtRy3vT81vrEfHJ3qfJsEeaTypexJaB4",
  "key36": "4JYk9NZbQqCppnwm9n2SkN7aSjwRH84x1BUvBx2Yz5PzkSiFUe8vC55b7FjtQuiPAGYJVistJ9NgcPxRRRr5Qd8P",
  "key37": "5Vz6oS37GgyDodcsvVg2cCn53fCyihVgTzhjvFPfPEaKxXMTnpyHotJ3SNmZFhc8d1dstygSsx44bRqg8vvweaNt",
  "key38": "3ttjbR48yFYjSumRZ99GLic14SKhn4xCg4KV896cq55byjTnGvTjiwp56zCdzMJEf8VyiYaWcaKG6pXgb6dxtB9s",
  "key39": "5tYXpChcgw3iBDmbZftEHpJDtJzuzpUesqmCMT4f486LBLkfKJULevNJdnw9s8WpiHmxgTNcy3aQTKMHZ5X81q31",
  "key40": "45XmvDyFZyUHGhf4UL7Ex3dKnoLMgpB1JxRUumNSWKVvWXyr24ipo28PoPDiHmHyFEpmEPdDv2JUY4rVDhST9BUX"
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

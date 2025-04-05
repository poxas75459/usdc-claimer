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
    "4yaUh3YMiQSkUbnJVssYcsCuK2GmwoqnUBoL3zPZNcY8teitBAwDiZ2tdCiYFCPmzhha2UntifKcFsPHdeyxZQTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLiGLREQnEfiC4h8bXYX7WnSyANxMmpb7Y17wJkbGeWYBqPUde3QBL25QfiGZn5kU1U2NvMKjjjwXfrD22Cb4bA",
  "key1": "2WS62PQ9FmE2565ub4LdETjZhx76AZsdiZJqXDmQzkWmZLVfhoRUGPbs4VjoF5HDBQBetuymyZFv4GBFdc7sXs5j",
  "key2": "58sRSib8nfzLp3Vo4BEp1h7mrrsRoi1Xfu9a8gxuzws8qkCHufa27RSymQ4mKjuPMxWHqanxWJBzMtpq9L1nZe3i",
  "key3": "4Wntkt31yEjfHLAUMH44B1fWBBfbte7MniB7dG8HZ4MM8USzudL6aExH33KRdAvdNYMuk524sqgRuFDT2NXHTRUX",
  "key4": "4vTJqrnkrfMLDUgd7r2YihpBMGRrjyXpL9BzdQgNXvtsADn8SmXTgFN34Wzz7s5FPUPiEYCaJqVZX3mVUkBjq9j2",
  "key5": "3p3j8d1JKQ3oxe3TZdKPr7Y5n6jZhncDQpB7meubVR12cY9YQ1wNWJfUY9Aef6p8FJg5j8sLps5pYRb6xFsGLTwn",
  "key6": "2HTt4yjEMzPh2bkpj6PLYwDo8HbXgFQZ594wht6rck1eVE2A4Smgxh6xGisFdhFxxqaxWW7RBrqhDdrHZT3YWaDf",
  "key7": "iJVjEaEd5a2BsfM6sbiRMTy2xHXH22HuCahaDxek2WSAMRyAnYRL8aV5BG3Bf1u2g2RSp7P78EYLtLB29jckZgm",
  "key8": "4yqmmiYku1ETeidd2nCt5yupjmXmz2BsWFmKt724DbXmTrbVB9MAKRNGL1r2PqUv3wtmiTyDcaXYDbGduSx9MrhU",
  "key9": "4mkJmNoNwRFH434dxykzbQu5xABQFDC8asZhPcSfPe4Z2TQKUWKhtb2Umfo9e2FzjgQd75dvJDZbJ87VTWgs99XG",
  "key10": "2V7WT769UhPQ8jEkAZ2r7ZW26cZPex4bqiq6sY4hKKhdEKgaRHun82CCmWgb2m1p4rgSJcz2XrGBZ346tUXDjHHU",
  "key11": "dy68jpUhHMBPovVEBNNkbJ66Z1jxh8d6zHGe6yHCZTEoxwrsxmZrpyDsLzTwPMrxWmyunK7j8oCyeJDroyFp94R",
  "key12": "4NjH4w7XbYPZF7ok2FpJf59R8zVGP94o9FiZkBn5gUSDDJFJV4yhhFqGkB3Bf33ZNUKDrWDybvfBHSVJqKwekaUQ",
  "key13": "31d94iA3ty17pYULHSi55cEuYfM3gog6D8DUC31dChZ1SNQWcHEvqKiFfY3xVTW2cY9aVGwB648GqEghUAhFZiiL",
  "key14": "4ABbsnSQJkrgtnxSmEaTKRnLdf7vz2Vx1YRPUKa3dAJjeyHwEdbrU3meb3gbhav1dxYKwTMCf58xpvFVqifnPKqD",
  "key15": "3LqA6TzTkhsDTD1P3nAorimArAhXoK99w1KbCktmRBbK3KL4cf5SU9bSnbzUZ74XYREdkFT5oySQpSerz9QWPmi7",
  "key16": "5fgcyEkUzCWKWaycMKXmAENDiM2gYXAUS5RYauqdzQjKLwF7Ufm8PLrB47waUdCSoKW3WFnvaJLRaXzZPNRWvs37",
  "key17": "5TLFgfWZ5DJT9EPgxLqncytyK6LA6VmkNXmw7vPq431RKpGzZ9TX4wdpdNRZvyqWACLsjkStVFH7hs47cVB2mgzt",
  "key18": "312JzGqn189ajEqGwEokcYWcrtWbLsJNsRbritBzNkurkfDRPuFD8GUbZJyBKMDrRJisM2eLKhjPEcXtPbAFwUsP",
  "key19": "2eLa1Zh1ptDM35r3oauKTb5SzNFRszhPCeBM8tvPLovfM537NJAbuKzGjMZ3He9u2fjNkNNFZDSTyNqjus7LrauL",
  "key20": "1shcHZuGLUj7QYpLXeA5NoAmzMH1yUGz8tcPH3Chkr2DQG6NdYe49UPKpJr3831Brpwbf9JqfxXj89hcBVcqxG7",
  "key21": "5DxFuv1bj2kymU3FxhsqgYRoaqUHL9Xbipo697RSpFRi6pPMQVnuxunawNbx2dwUTe76TBYuhziX6Av1UtFhmrWK",
  "key22": "2G1Fr1ds6ztN1MW3CdGiLHpedmxipWK5B6RwCvUXDkmEReJ23nqqUiGBm9v83kcwmT6Lx2qdqtHvaNGsNbNvKr6T",
  "key23": "4hYcnBr5NmTibKxVJHD23tFAKi43SUMEREVHfmuto8ZqQV7fBvar4aNTY8TuUz3326ntSsRzw4uB8mjZ2LyuUZQF",
  "key24": "41aFVMZcsmbmcjK1iiDW4xu2U98fNT2Sgn2vQb2UTvf1Gms8vHgbte9kMyM8DDbFAEFsBHfxcUbwke8ia2tTGEhM",
  "key25": "2RiqAoC3wRUyYxfkuYdGNPXSCSAYoKdZUxxdN9veDYbdUQco8n2XBNeayNTh6d2FKU9kwaWZLzpnuRfjqABNgydv",
  "key26": "4JrBQNhnabXrrdLYjrnBEzzsMg1hxndhHb7Ce6iiXabM1EWrqVqkfNJ3ANpECnPhLaJowQ3gRDs5FyAxbD82txDn",
  "key27": "48PgyHVEmbi6bHnErMWmRYJq9RD8uhNBn7Yi5zscgnCKvFNLkhdHCqEHB9eqzA9ubM7bJhoSf3uszBcnd4iN3LDm",
  "key28": "5QoHVM3h3SgDAFkjdkditpMvwfTSTYfxok6qzVey7PHm9G9tfwpPw3F3A8RpZcWjDL9Barfw5T7JrGh5DoGWMvUo",
  "key29": "CRthqMJh97z6z9zZDvjbbrLrvuWLCpWMAS5o1hBA914K23DgeLFQXmrcDv9ekgSbEsBXwTAgGxcdCBDeSvgot4P",
  "key30": "4EBQhMEc55zDEedanzQSWHVCggHahrZTxhhgZZC5vtkpBUTUAYuLQnG3qPP5euQqf15g8XJrzri7Lo5A61Ko7ZF5",
  "key31": "46Uuyy3WEroDReS8tyvzF2ou6WpLaGpgGnNYerntN1xUkbgsqWhqZGRJot37h1t5AFgMbiqJYkZ3d3Q5trWgaGLN",
  "key32": "4o3uhy1KxaGobiPc5t5uQaCUt4C2JfMJyzTxu48HAE4bUSxvvmvgYMroZFbpDhDmt8fi5hCBLVAyrXf8RX3T2G84",
  "key33": "4yKNN8rVzDvaaZC3aPMUzM9ZLGmXj9uzq68i3xpAD1pH4dgnBFqrovLRrPHPxQ4zoWH6m4Bo2T8pY4CmxaNcJoYz",
  "key34": "5BT1yjxEEGNdEJM1CDEjh5ydfLKH4xisL6bQvESRvQX9CMhZRgdnRX4JyopxLFb7iauv2h7or2zkQJv4btwqsKr8",
  "key35": "CtjwVavvMtWQo6kAqfr2eqBTXWGSmGg5gbkVsdFNgDkmdmpcXRdG9USDUWvywhToobKNStZ2xRtTDPdd7jmiTgA"
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

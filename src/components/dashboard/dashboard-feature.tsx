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
    "4UTRVBfYwxat1JTTzGp7XZy3d5KsY1dRAjve4PQ3pppsAc3rKLHdVN6Q4J63WJjzbLHrfJFMYWBQGX3UugZTQrz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yQfqjY4rmVq5o7nPWNgQ2uyfQmGv3Y5Nf4KYaXrkkm4w169uZk2Pm1DeKWnZDvwJ3UN1DJrBHXW53666T1vaJX8",
  "key1": "4p3MnBn3DU8RmbuJeHgttd129UeESuSSnUNiSNL1Qe4kvX6RX4gAvmDJ2eRR4rks6DQCQnbiq4i5KyECzJxHDiqu",
  "key2": "23Ux8DVjjgxMyTsuuqxPV4wqjrJ8YydqAxxoDaJQdM8hWebrFPk27mnEn2M9bJAL2ZE2Emqbnzw8QxjttM3ZiC4z",
  "key3": "5ECk5Zt5LittuyzsXEY9yMN2kABHemLeQYfWRmThSF9Vg7UaDGAqzoVTARXa7zaGtBjVqQFop8nF7yNVEGpbsXhW",
  "key4": "5AtRfkMHuEAeq5jNkYZxvUXRspDDVFMfF9Q7EvGFd72ZUyZPFeE1XM4QPawEQmWujHVBoaYeU2PZsxrXoLGQyETb",
  "key5": "5JxFQGBTzbZCFr1amxQ4CkS4RDaEzn47YnhBBjBTaqU2AbMCLuyKmKyQn4jHXpj5CHFdmhRgCkAKuzypAq7nJmck",
  "key6": "XmTN5YSCjShY1P3cMus32PgMp3FbnbqkkUjYPUTqVMeBrVSTVVcEpchh6t1akVTtfU2Lj9ENj7Z4DGRsC3XNZbN",
  "key7": "2efUACANfJiGBa1EkZS1xVMYoArk2w3cwuo2TGjdiF2Q3Ps3Sb9hKwh5EgvoyrFD1EzzMccyMCHnYC762xU6BC9d",
  "key8": "5ZyKekyX2wjBCo3y4uFYVXs1bFehkAePL3jJ9wYCs8WjQAbYfj1cnnAbG7cV8qGmmNDjnxnaDj7qf2JnrmMpvQcV",
  "key9": "6243PJsJi6AjcwgqGF7W7KdXTYxznGhzApssvUQizj4TK4EUG67hyuveTYWTDHSPajk8WdCRMzkS744Pto4uyQxT",
  "key10": "44Rov277kYTapSqoWdSmUwAQBaWnHPz8g64cJ2uP1xtx8AusRzSDMYb6z9Adv7JwwqyqxegpBYXA6jrmkAhZteZo",
  "key11": "4v8vN25cxSQh6vbPd6psbgPsP69Y2mRnbgSer7QqYBP7PahMj3ZvnvAYN79k1tPDX81AqTipuwbywdB9LLtGuGjA",
  "key12": "4QzNZS22cEJynoGPqysqsucZtYdxihe4qJeTKhCRc4hbVAUFVDhJLag5dwogC9mewtrXPXavQbMxC8G59KgzYtMS",
  "key13": "L5RbqYvXtDKry5xCrXzhyERPpCvBmg8F4sVonMz5tunnm2iSXXRaTwxnDuoYCRUWzAPYpsw8etRFALwbs4Hme3o",
  "key14": "3XbT78Qp5govUhVtsrm2p3E8KRTEx6nfFgZHU4KsoVp2hofckzL3SiPs9dNtQzv6agjBKehcWfFnsGjz4fFXhAdM",
  "key15": "5k4VBkeg6E9uPqUhLgremSLxzr2UkiuFk7uy6WnSEUVb3JH4s9ABtxfkDeVSFGZgiegQav1FF1BP92ERx1nD5gGE",
  "key16": "sSh4HG5Aw8Bn9hi5Gr7e14UJRxmFMyDaYT1vnYwgq5TCibUGcsG3a5mFjvxLZpkfn14QAsxyhmCSMvzuFtfQxu5",
  "key17": "5UH8GB7NGb73DszhdTB1TghYVCGaN8P3fmvrTij4PPDPLBnXMWGNEhVnGo5thniauYNH8sbE4r94uW5VbCWhnZvj",
  "key18": "tj8GQd2TyCmj6y82rkXeV9MmiVSvohSvvUM8jFGutdFLpPnRauHj2NJyffVr7R1ZaJBgZaCUmCKivFu3LHhxZeZ",
  "key19": "2PnAD1CSftfYp6qBYBydHEyE64QBKWMpwe5LjVgULLaiCqLqBa12HVwa4qfvcDqz5Ls231HinsP2C3n9KgAYHruj",
  "key20": "3tJWu66aFzGMkSkQK91gp4vW7rNQSJsRJuwmATfc3jK83pWt4ACeZAQZxq1LKyv4sdcB16Tqw298YpHDU9BYcBGt",
  "key21": "4tghSDXhVGV3akn1odfLt7gcXCs9MT7M2b4k2etwQhEQBvuEwNUdHZK4Dr2fvR1wcV7R8mHj9hb4DX9CUWf7Npkw",
  "key22": "3vyEZsNW974cns9YrZy7ScDSJmCgG9bzswbxGZpsTVF2ea1tkr6CQ4EYU1eodz1r8BXbYereun8j7Uxba8hGoQua",
  "key23": "3tnSpBXWzapYAaYNUiog7VdohnbC1swB8V6aCuLFcng94jeKcYzN8evCD4yAi4SUDo27SyMUBPcgATRRF7YvQpma",
  "key24": "2hchChS5SH6XAHCf6Pbc5Qc7fKSBUAHb9MnbYXSomydapLtzzWvAaesYSr6nym3foNQgbSQvUTZ2t3eryL5B7Nf4",
  "key25": "g8kk83aMhi1UJ9MyKgzp66gK2tUsJu5AShweE1yDLw5VgPdwLDMYQT1nWgoLE2kveZDqs8nVqep7QnAgLRtPBEH",
  "key26": "YC7X9VReoDiTLfCwJxxnkfbyopfLVAYowSn4433xanMQHoFXrhC6YL47yVPS3p4Lfbdp4uNCHBipyXteUyNFRhp",
  "key27": "43dRVz6QvR3n9oMov4VXS687Fufj7DtHmuzpU3i9PJULzMNV5CxLwDpBQbwwPYUFb7UYasHVmqkh3sKM8PRfCxb1",
  "key28": "4LsNCeYK339oJSvi371THiz5pNng2Ac2Z32dVJN9maKT4ZnfYhVAr6U6VZ8h3AXE48rNY3M8iTkvN1vhCZReUuLc",
  "key29": "2bZe4NPQw1nwvHff2EHhJ3PVUeZYUCdEBttgHTfnvoPcA89dhz5WZaq46HtopFW392zNZ648x2dzXocxfhqizFtU",
  "key30": "27H4gMSg6j58c5fwpuyZwXKzQH2Y6tHwe9DsZZxQ27WWJXnezrsWLFNYWpcMfAQVhMp5BCe5SnPDbUCtwK1kvmRr",
  "key31": "2zohZ6h3GmUxnZpSfG8uTx3dwUHprNxAX6GarM9Fj2NjvgKh7qfs1t4yZwS9dyCc12LeRk9mLhxy4W5gn8vxwPZb",
  "key32": "KMYubEZjQ8iJ5ga6D4q6Z2Sa9jjhswocm9oKB9fHjiYjD3bP7znS8pjjwjZCX9VrvSNxP9xjyfXMaLrr51tfFEF",
  "key33": "zafr32jvUp2GkkQv9wpjMiB4RrptANBdauQpwWQCrT1FevX2ybz9TtSqjoQpMVyfC7r8RQRHuvBnH1rHnj6i9a7",
  "key34": "3qgAvcZAdmFoo95EoVkCFJq7XRhiP1jqkDyyRYcFyNrFwuWvV2RTDPCAZgLnjXdLnjigMpuAaEygpC6SebtwisHJ",
  "key35": "2ZWrGoVfMEwxSNia4sH7R7Y14EtgFoiLdLA9E3KZGSkU8HATKy34LCEVXnmPETAAYxH9Gu71qwxNo7kShPiNX8Cy",
  "key36": "5YwFivNwKHC73ioQktHyAXRT9Uid9svsHVhgMMZ4xtTQfjh5xyo55D1cZX6xfA3uhrtK1AQRSq2PHMaQs6wQHrCb",
  "key37": "5aRvTYv77HZhspTRZDtLMyZ8fWKM4SLU2KvjUVrLA3cL4jPagcXfJ3ZBD8MV8WLLnHUidpDutqEfs37Vd9D4YYja",
  "key38": "5XKVuK91VGzLFmgJBL9dEDeQtBmq5xAXEF1KJzWQRfQYqJpPwdS9Z9oeWA56TAK7VG59Zi7swFzNQhknmpMS9M3S",
  "key39": "Sxf4kXVAU6kovYkjxS3T1ebXmBP6RhrnJWUdH8i7N7WJRLAm3EAPCMpBUheBxaas8ufz9E88Ugup8ZB4znhDxbQ",
  "key40": "4twCfiE5Dpwmq8WTgFCxsRbbMeYCFMnWmQXomcN43ASHy9enxVnepAAbPkkKBsqQUFpw5fujjJVKSXc2aqN4tP7e"
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

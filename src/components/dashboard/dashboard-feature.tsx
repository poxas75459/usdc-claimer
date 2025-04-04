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
    "4t2vF9S43P11UDVZ4qbm1D63fLgeqJvhWEgTuDv99wgj6BgSuaxkF1rkdZsp3FUn8fGeUApJrzH59uPbHFFBCdZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "657BnP3gTNDpXVcmZxuwvwAmoCCuBk3v5aGac5bVyJ9x5WXBXnkfzupL24xCH5AyybGJqGFdQXrqEtDV2xLQSqeW",
  "key1": "5VGgvWuJuiK81EGT94fuJTBz5nnvC3rwqPzBg92J5HR8igrUusJtegyRwmKUDeKQYkMFjvyqorZitJZoseX48ef7",
  "key2": "6aAW1HLvfYXMXexezMmbHueaWyUDcjzCVmSNDj1ZiwqYsGMcx31Mr872eiVvE1VxF7ue8H3j6pcT65EDZ9Ve7LH",
  "key3": "4bBKTqpzjRSmZiFB2hSgUhwZqVBMs8FwVJ3ay5dYU7JyqRA3y9uEAD1xAsTQsF4fo5M8Hnyn9vd1y4pL6rhDa9gp",
  "key4": "4aRjS6cJ75SwQGV7nqypt7HgkVMt5soUCwdutwudneUwiz88i4MDHDS8RVeyyGhM9QSr2G61NwMZa7ySwWca81aP",
  "key5": "2Dar9sgf2wRhP4PRqhnPLYJFBu5BwT8HteZYhkq2QA3GGapDx5FKxuq3Wmg6ixSnm4vbHybbaPQgqQkr6MRrmHGD",
  "key6": "5GV9F9XQmh9od4ZLr9enb54GDMp8jBZscX94W6gLur92fVphGrZp3SDUo6pwfRf5bCkCqQN2sayPQCKm4RPbGjCw",
  "key7": "4KtLm7vTq5S6Hc3CMPcNPFak67dPRjGzV4rPnGjrtM4EX625tTvvFC2EV9rQyh6RXppf471dzEqCUfANdF3NNK4K",
  "key8": "41EzGCdbWK7PpMRJrjHZ4HjhggTTpGJbe2Wx1rYTSjxxshMaL5FQRNLJbY8RrFnmF3HTdfTXxZaHAugFTUKjsmp8",
  "key9": "3UYP1ziAPL74rwn1SxdiEfrvj5L6rYuEoZ75rsKYK9R2xZ64oWJi5HgM7CddjV2MMnx2cUSA4ZL2ondQtnyLRbGZ",
  "key10": "5gxkgygQKPGkW1a5Rkdn2Lvv5PiKYzrUtRZswnCoxUM3XeAJ3ocB8AcZg3F89oef7awf7vma5NZ96sK9PjVFqeqk",
  "key11": "2Z5siWmz6BMTEDBpyXkHuvDwmjXKrMPV6yW5AMs5UViPsTQs2vH8n4dDqP5Suz5wPiSa3npgn98NGYvVFK8urgR5",
  "key12": "277YNrKjktfVJcBRUAR7ME6G1GaTUrEvUhAqbCBytu6s21YUHpVNPRbiktnmm7kP974gqiwyNQj4grCPJAHRZtqU",
  "key13": "4pJUpS8pksa8ugnuCyjaKBUdWzKSHNSwGYVn3pcsWJZXhFGYoyZoWfe8pA199emm6x6uY8UcCLDx4tTQW8zeNK5W",
  "key14": "4ehAVnETnonsDURYkHmZea7Hz9LqLx3Za5bJmh6uj9FV1df5kk4YS3xWtWVxAUqv2XaVxTQWJQSazvgQwCQL1tJx",
  "key15": "3JpUCHVFHs785qrVgDLFYehmSbh8rvkULJHxwW2sdJSrrvUAH5JPge7qmsLkrSPsS9w5GxQWoCP9gLjp2oPRhQZh",
  "key16": "2UbqqHcb51bgmYkMvw4gEW2NmuCW5TDJk1Pv6AorxykkkATK5PcVLG2Ys8fSH7mFvB8qrTHbE2tBDqYGDsAYavvV",
  "key17": "4t3hyyD2abr2RKJ6C9moELvFCZZoq25oAFWpWxBGeVgeeByH3ALCdnnNGX7KkaSLjgdiNuvoXWmpv539ed9UQhwg",
  "key18": "5Zx5YPpRK88iS8GLzsiytH8AJmeLMqVKXTgg9mzB719TKaDqBKhFnVaTdYBVTmxeiH4pRLvFgdbuRmbkZL6742bd",
  "key19": "3kKxxqgRz8rNxLoZvBkHEbfJDQUYb9NmoojxPH7Cg9gKVDgdajwzmCXM1376RokKk2y19YEdp2sDwEgHkXH9SCrv",
  "key20": "wQJmtztUvArn6nE5BC9bFxs5h9sSjYLKuanRkbscS4HQurK71nX6uz6H8h4A4SzAFhe7ooDZiJ9fD4uDMTQeAmc",
  "key21": "4VdjMx8XhRpJ9BpAVjhr65tpz9kQCSbnfMCK8cR26bmUtUNd2GkhKs6AbAbKLgRenq3e7kNJSRct6jcuJVyCHDr7",
  "key22": "EpXmuEYPzn9ajjRsoq7hF1M4omaVaSa5D2M4hnWuLDRBPyhhqzBka6LHvUe3K2fY7kfN54Qv2mhCuVofw1Si9f2",
  "key23": "4hsQ7ivWAmjsiphCnXHvPxfvJJvtBwNJ3wfBao6pb92vn1GSiaRs6NjaWEptRyxDWNq7mkuswHxm9oHLRZauQazR",
  "key24": "21eMFHBjZeYyNc1iqgunbE2voshLWnGhgs9hGZ2aC8mtqgbBcMZzVU5HAATrSJnQqYKkhU5kcc6nr8K1d1LMrsBw",
  "key25": "4mn3kqd4zHGA5fK21Ge44RkxsSFobiNSwJHdcQxTEeTcGrdZ7PEhq6H5rjdTSNw7xihYNbP1MQpidqbRh8tcpjS9",
  "key26": "2n2qgnATGUSP2uSjgXVyW4MyYcbvpQBqnLFiRhQT1KyA175MxH61Q6mY1RunKaJawGqWFXnKoZGY9nukcSJa8zPR",
  "key27": "5mdF8GzceiYGwqomBdnprGEFK2kVPbBJDmJ8A5BWpb1QjpHspzvyeHTZ8G3JKDVvKa7bTsT3ghePeiFaMjkCsZPn",
  "key28": "4H8pWYKZYAbkY2Z5cMFtMSgi55nPYEXy3mV5hnmkJ8bBHmn3PSWH37N7YAWLiKyPHFEaiLUPqQQRvUVi6W2Y3js8",
  "key29": "23ThN5MjXSygcyQGvtjgxALPqhVr3Yqes65KNm5K8gP182XwFajby21E4juMhWA9oTLmWJhn6X6nRDbmiTtFYszy",
  "key30": "5C8EK1PwRzoLEuXbbojRJ2taJNKXfXDeun1qrCTm1wdjCJpgNRg4E9YJQphJPGmfQf8EGmMoYPiNgzs84uwYNNbF",
  "key31": "3AybRZsbj3d3UGY5gkSF74CeSUfxrYGmcroQSHYo8bULduwj4Jd7r9BXNe45yjGJSAuDJcc62Arky6sW92jAbtwR",
  "key32": "4p5FyH1M5cKen8JJtCQfdocHwYmPyvqBVZ8dTaENudzgTxYGMPYnySdEc2Toh9XrUmSZEEM92ULEtYjhYD2cwNfD",
  "key33": "5gKwnNmAGsearXCHmbxkdhaB5oBSQhqXdtrwv3Wzw8icNbdXXohQveSCPLKRmptejHWqepPcAVr5y1kaJi1DRbck",
  "key34": "4nB3dYekiHymzfkxhCuQvbJPxrxkvBfarExeunxDp4yfqHgFieH1bACMUYv2MHHGELW9vDZTQoujpNrhMbNPN33z",
  "key35": "4ppazXh6uin5KJCdwPfKtyvb4Zm3VaUvgF5DRGUpFybYzwkFAYeWcaXf35ipsrN8enXdX2gX5hxmDrNCaRsa5Zs7",
  "key36": "3NxD6nVaTsgR8Tc1SzbKuZywpH45GWDRvPtttAQvHVAN8741vRt4z17rATeWUomSx7htYAHdqsh3zEn9EgwrqWL2",
  "key37": "4XC1GjEzg44DfTn9QbTwL4R2cEgP2YoHN6zUTLyKtCFgR5tVmBB6ZNAeKxf5LPi5pDHWSSCfsyGiahnqWiehq32Z"
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

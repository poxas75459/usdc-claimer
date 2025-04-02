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
    "2YF1Y1FrBWFd2TCpgUskxat35qXAYx22n95iDADJxikuqxhwh5tJNDnnYEZhRy5njJzpsE9FszNTHMDrdL7rRWWA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWwsvu35eD7qJjccYWiVMf3f5z6RqcAuuKxfbMPqdEZdN3nx6QWbWKV6dt94r8vGvZoctH6NB6Hn23k2DukAyHq",
  "key1": "2iWn4HE1UqobnsvXY8obo3SjV1NcUMDWjM9wzvwUKK7JWGXhwMp6HfSN2jn9Xj4zzfRRLukWMY2Z4TWsrj9LtrPC",
  "key2": "2aTjpTFJRNqFcGXffgsc2ySrCqitkbV4cLTLAWtYVSyEqGNtoDS2TRBfbSLenQ3mLRzBQDVum5tTuBnNFB8niFed",
  "key3": "4ukKsQ4u9YQWSjzpyoo2jKzmXCdJXG57wbhqes1T2tCAubpRaZyH3BcuaKZo7DknZrASgKDwEv7vrS1b5HMFGkVy",
  "key4": "4b9U4rvLtgG41LqoMCbBPhzbLPsrhLb5SNQBC7CMSjcEcCTpJwm3Jb2c9YRxbiiiDyQVXwJEgGwAH5dHMwSn9cfn",
  "key5": "28MpQVW91N52ofTfXDHvid2o4UF5qhX6iffzAbYyGYYBaiULL7w1tUn7KTbMD5Z4JaBpCuigGngX5sLZdtdzkyr1",
  "key6": "128S3QnNiXYxbTk5EmiA9gNi9t89FVGwzXt1e4YSY8SbuGufNhz8bUiGTLU4M3AZcqsPmUTLkXRqUrcLRDtNxLrx",
  "key7": "2Eg2Pv4xmbkfRvynvv3wMAsgF6TNorKGAT8RuFtpcxT91TCpCUiNw8vS1doyZtDrX2TQv5xNdCAxynuKiZJwnqHV",
  "key8": "V4WBbdJMGmm8kZUy7uMKJ38z6yz8DFLXCuZEcnQUEM5SW95cpeNPiM6C2sQoLKGDr6NcEZHyz6irMtpk1AahWd3",
  "key9": "4oANGQPrydbm2oMj8EamXbQeFa3ACMABhGVZr6pucz3tYZT385bBd13HKJJLqj1rs2hj43oRW4jLU7v9UYxPgkKT",
  "key10": "5yp8REZbp86VxqG6t3JJSeSLkHYExozJ98GtZaWmmmDmdqHvYmCYo9PcEQeLXkHvZeNeyFkxGyXyxYVq28zpiqJ9",
  "key11": "MQoMtH4EwLuyBVMLKny6U2AprGYR9UP2t5LdpBPac2UT31NmYtyoKPxCF4tWz2FnNjDnxsaAiGBCiFnmfpWFkPE",
  "key12": "5aB1vfFWkgGeUpmb94NwVE5YhGo96xsUnd17FRzdjAZyqcx9REbKdZcxKjtUh7hvhm25YjfPGa4wVp2BrRMrVSse",
  "key13": "3HATaMZsj6h8LZvoZvpxPixpWHJy6FKRB9GxGAB8Cezxyj8yMaZS3CcZ8KmxyArGtkLWsBq1zBEa6WzF4siLp8A7",
  "key14": "61GACakjxd4nkSrtW98LKKQSbgPL4HZrY3HAqMUvK6zQEqPrhWQvomJNNMeNrnoazRbYP9Q6Qucq42xNN3yJCTY5",
  "key15": "5ZXfzVj5imKew9XaHyH5uogivNtsFMF2JuGZXzvip1MNawmuMihtMbskdiP6tvMLwMhzhDZv2Lw5JAAvNCKuuHsT",
  "key16": "3UD1Y5jN24EdkjEqRd8QZT37KTfroYYHDctgKTCrfcF9KmCrVCZ2TkhHFXBbeSkVPstJvXo2FgxkY4u4kRrtfQ39",
  "key17": "25WJdgQrYj724Jxs6MwSGP4VXXb2dSzviuJoF8bZ9PY14fwXKX9JrvrCbf1mwZonB6xC98RX4HxR2VhsadsGLrf3",
  "key18": "3gw3cmtWebYsFsViFz64f4RqvWbowsvLBH7GK4addeK13APV9dcuWggCciKJfG3KtYtpjVB8CVBMMTz4V8UStH6o",
  "key19": "4YWM7tMUYfNHnUC98Lmurca9DAwkrb4XGqjBky2iR72P8ctVeDQatai8iRxAQQisZZBy7R7UyZ8oiSqjwj7uotLR",
  "key20": "y7kSG4QHPGfMTU78iAX3izkGFBSv8CjgBHncxfBDU29mdnG9YuKc1TJwXM9c23XpFvtKMWUUDaEwya2gHvwygch",
  "key21": "4dwFc7KeNNpS8pdBtsn7aYPQMfonUqgZXdnpy7wqSaxicghahtBMaCxvYcnFrwdyHyfPKA2Sxf8fs6Z5vxcJKRLa",
  "key22": "2LDL1JSaUBEjfqNBCZmsBSKbcySzER1mVdVqgsbS47ianNjaQmfmywL22is8uFNUsq91yYAtDf9bnxUGjNcgASPe",
  "key23": "3bwVuPucF9ETkb2SvHn5dAg2G91BbctkPbo4sgX32uknt6AdqcmbQtvQZrdTn3eEME3RboT5UGJmaEgCrmZgXTjZ",
  "key24": "3QXbfrtnT2EM65ENtgd58CQs35w5pLsy3orEzq1trJCMyYXHhoJUnxxpm5QpappNhWZDYpF2PJaDTourG1mdjxjR",
  "key25": "3aZ8pM3UDBtuczpEBG33ZZiK3g7CR7odFGmSKjAwHABf63upqHgXEqEnmMdVFdPTmGF77x5oBFadY6xY5v2xJDL8",
  "key26": "5DFMUkBgb71qzj1vcEUj97XNg1mNTUuC1vWcyoL8mj16zk7osb9QYWgiC8CmxHHCm5bz5w2tvC5a4US4xgaGv6Kb",
  "key27": "3iULVCS8koQh5PAZoSubPmSCkrBUtjEwaDZu8M4qyFKaM11TPd1AvYsVmjaDYHa9gTxHTu5Y3as7uz8jXf2npUA4",
  "key28": "2JEpRwJ4818NZSMpbKJUa5uTHtP5FFso2AhkwF5PBWbkAJYNHsknX6K9odEUHNjsqTyeJ9oHEKV9NcgdKZtXnXPG",
  "key29": "4T5vmgG25GWru9VeG6TgkDiVDnHindS8sjb8vkgwUsuT1Gvx6ipUCthZjKYccjkgukMbLTvsX1Vy91DWjYWtbSvW",
  "key30": "5eL1iMaAFrVdp8YCz8F259J7HpZ3qkkmmToiUs4XyEGHyJkD5KrYhq2LjHfgc52a7n4GnnGsq8hYtYdiJSFiDjED",
  "key31": "5gAJs5CFPynXnxwopYSq6C99dpn1ho619LtLZKcxiwvJUcaweBPo2mAtHiQiVtTDGF2gQwxGx1BJ8eufDTkiEfXd",
  "key32": "3xKYwqXenJwf6ExgH1afvPp6X5ArC4kf7a96MDFF4d7UcjxgehpDTZt4Ha81C6jNq5TXRd1HVq9nCzVwEFHSA1YV",
  "key33": "3pVQ5H7c89g5tSreQhjL67R78dKXxkKWnJmbJmKnrBBDiaGYTKYbucBFxYGb8NFVfX5wfEhT9bjcAj8BpXVnMxeM",
  "key34": "5kuJo5oq4yFTzg82xnv9vZ8ZpBoXYFMz7raHYCSkDqH34CnCVaP7XjMJAcNxFfEPLboYuDyQCtACo2J4Tb19kb5W",
  "key35": "5UL8QLq7gkX8XSzkHmxKDG7bxuFZoTrzXEWo6CTr1JUMxbJo2xdDuiSTHshD4UMgShhSBWC81knzhKhNqapBpTTM"
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

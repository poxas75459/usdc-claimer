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
    "55Z8t68g6eYorhnoQgj2QPcWG5MFsjb1dYdMzt6EdkhaeQWWA9Y3XL7vNwAqXEhP1f4fu9gw2BY4Aowb4ieFuP4Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6ZNBoE6xc9CkgGobse9ABpoyULaLdQnu3tpi1fMei2QEuxH44F3bKpgUyorQwYtBb8rnddMkq63f2byEyW3GBR",
  "key1": "5Fzm6a4rkUBGFZByJccbCmuMRNkkpNNvu3cpEGwbfGAxGN48qJvwH69b2Gc4dMRChi5jCxrCQFMKCkzqEFXgrJzW",
  "key2": "44SVUYnJGB51cLTDaZ2zRpCckKukdegNRqqsk7vNtexFwgmyC3kwdKbEr3g4cM5Q1CjZbwgf6u14iWoa1kubXQDU",
  "key3": "3r9urkCnHDa3YEMcbB3VVwfiYUZEbZMyBjrGbVZpo93nAiZTz1AJZxUisoXPKCeCmvnu9o6LhxFze2yjQn9dk4w2",
  "key4": "4D2A4c3sLomxhWafWyA95YGw36ANmUhsqaDDwaA5r271q82PKpCdsiDFtwe4UTCNicNTQ1jAdHamAjk5i6JQNHkK",
  "key5": "2a3d2j8C76Y2ttseBAeHSpYpGH99ZsFv9UR8xiBV47LeQLRqoy2wv8D3Bpz5d88iCNrZ8ENXKdswFZFxfb1PVr51",
  "key6": "51AvvwdCXjnmky5P9BDE2cnaMhD5PeKQC7t3zeHvUYoLhsBGEMo2uepQUMhhDN8K4y4BycpJpMQhgJedQuBsEg9S",
  "key7": "37GHNjs18T1R6Yiwp2vRhPnonoaMky2vsYdyjbdMQKoPW7VYpPaHcbWBHL2KrrGNd4rwMsV2DfjKCynq8i97Rj1M",
  "key8": "46AqtBN6M5T9dh54ZX1LfC6utGEKiVBJQpJuVoVgZhLX5pHGg3PosXKexSvgpe9jWdM4z1fijV1qqkg1Xw3wADcm",
  "key9": "2UfgTdmSuittyn7XprzjJ8Wt2L5kUSbgeAVGtN1bmpCxcuRyV5gNAhA7RZEymi1sqCi2hEAvJGqdxXxzsexD7ZcM",
  "key10": "4voLTeSTx7ejCpUBYsiXTDtW85R2ayDfxfuWkda3zkoqyzyRAtAZcFworp4kHcfionTfmeUwxDvh1uwsksekYAzZ",
  "key11": "4JLJ5PfFkj8ffNLWtagsChiSeVsUpS3wVaiSr4dJZzpNZ8ngUcTZ2ZEeztrfDP6cnNyftEewDarpA3XXy5hStzYF",
  "key12": "4jGKscsuUC2mWGQTZbwJ6jDEgChGTxZHkeqzdJ8XeiB7smPKUbm1GKFto38z1LRjvdPq4wQUXiMJA2pT5Cqv2iEK",
  "key13": "ivpXvjogkrsRnuEYS6cuHxzKAiyzomoTcvxbJ9wyDx6LepV4pwvbgihzWoLbufJBALjF2xX9RfdnqepQcYpXjan",
  "key14": "2TgEpZfpxAFFUTADPMinjU9rzZMRiSqfuhxntEDBPzWrYZ42ebfvTEhXt9yLx6khxfYgA1fFk6Ji17pabg925Yh7",
  "key15": "oSMM7e3VBiMzmDoyXZAQMxhLaAynV7XfPvE7t7nL5QVFgoUXTVWBsh9niavLkDAFE1P1zrR2LxWezK6AJ8YWmPy",
  "key16": "7Aqvqrqy7m4QKhsH4Jkyxsw3bpP1griqpx4Xg2pmRx8XZ1643Hcdz9PeVzg6L8UHawp6ia6j18kMaeiJBQ3L7HC",
  "key17": "2u1xRC4qP5TfbFULpDyzHZxZ8TwCLvjXD6Pxep4GiWhb9eqYWgupCZXcHRBKHP3hyQDmWYeC2QpwsJ3MY2nUXK2w",
  "key18": "39SNxcS2XDBoPfjSKKXXEGksdHjBG4PgmACrNHftTmvhqKvENaE9r5S6TxySx2VxA6AnmEow3DdvpDdxcdxUEYnr",
  "key19": "3MXb4REyyoAQjSSgCdHdpfSdPq1cX8EYG7BjSGSyzhUTJ3i2HL2Da8Sg1rXyoEBNrrB9Z1HXPXCAzzDNcbpgUdxG",
  "key20": "5ypL6FsWKLVevytU4cb9Bx1GJsvjG2gzdiAFRAK7rBgAT5yXjCrRErRDoQfucwUmmquatWHpLoKAAqpcuBNsAemm",
  "key21": "QfTchZvvXnrrD1WTevQHMx7cUSTGReExmwso2Ly4WJa4N86Yuqz9kG1Mew3N4XPEpQkV3cdaBopuqSvBRm7fPcr",
  "key22": "imgfUu5F3PAAoeAPiQp5hncTkpuQNXH4U3y23E34GxiooTK91LGKqr7HzFQ1eFBkBRBfzEe4GWsx7fYZN3usXsx",
  "key23": "5YBdd1bkwQtDVzMFgycxBB6eBQD6Pjc3sr7m7XW357LdkMtLdzASHgpPv1urLTJP4xZNskLuf9jomedmX1MTq9Un",
  "key24": "4jT8qhgP3BnWPRjg72ETv5wYp7UkHFq1h5QtMAVfNr21msdH7vVk8brkFTrdSys9YGkzq3aepRSDQhR81yznbMjx",
  "key25": "2L1c1DZgeekbqxz632UmVTLFCxS1Tho3xBVGAx31RpcJGVocgaqu41H9VDzUkKasEvz1kYyZezDtpGNzFV2dwoUY",
  "key26": "2Wuvb17xBvTE8gCDiX4gzmBd7HABLw1YmUHYvqBdhKNKSg4VCy8gg7ywveQvrByQPGQAjULLRESRevAxYHkGdZ7g",
  "key27": "5kJLpnm3HvmioLZ4YibwfFFPwF4Y6KtZX8VeVZTrDzaAVo5J9Ke7HyT1euTvnRDpEfWhUhYRCTWp1mTkVoDpKuYm",
  "key28": "S4pzBoJpDPcaoaR1LP1jR4ejTjZWwjC7hxCry2imigX16LR1J6RpUXoPQktjgn8AEgXXCetrPBbC7cEsC8wdtmR",
  "key29": "2ifQUFGrfSk9iaDRXmN3o1uA58ntibsiWmmN38ZcDf6JpfsfGuKBag9kfsHauMzDBckGHDe3C6JtDtZyqeM44q5N",
  "key30": "5e3GRF4WSNJX4KDDweCubM4VLkKDSLWAV9ETS6ZWjSSzEgC5KUixFnLsMKDUvfT7Z3xaTMxLWQQUAofXYB33qTwY",
  "key31": "B4xpvjK4rHa8dLtQftLGHyAkuCQK7Msvu3AYFSN88XtFmwgLzNbVC3r77a1X3HzN1QAHvWUuL8xmQfbodPrUEah",
  "key32": "5yVa6R4Dgjqyfa3W5W9Y75yp3JEaT9FpMSHiLEq9DPcZmRMm8YMYtupQzCZvepoaHXjUAArCErFevEFKDsPDpsuq",
  "key33": "4ppFDZhprDLXDm3HefDjgxVoZBuZtpWSvmMFRsVdhCXyrx3aSiyt7YMhMLei8AUeB8PPE2hJu7Q29nyM1i3msGPo",
  "key34": "4tK45ygjE4m5QHW8zYtMquXUSXppVXC2HceSeA5Fa9Y3juccefjeeQJ1ww2kRiNZytmh7wrqrjCrqSahWR4zrPXz",
  "key35": "5nGKryReJCRZbXyAAgiHSuXNGrJ53FKbgv3rTbgBmGe78MzhVnHYLgLQMHuDdfFG4QRcm8Dv9AroZqyWhndFesD3"
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

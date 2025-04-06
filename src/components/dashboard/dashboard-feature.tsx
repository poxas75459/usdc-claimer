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
    "2k4PsvVr8tNgfLGDkL7nGbgxZz8kKR5oWrTpwitjEzrvHYtSYCLgkEJMmUGtt9tmdAhExPbk46aBLsqUZkC8AyH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a35oauXFsUcE9YgfSGJEBLUzfifFYzkmtgtiLKH7RUJ4cinoRfQ11pw6G8Jnh4kZPujKFe52kvfPthg3D4ALZ4R",
  "key1": "2UjgzKh9cRBCRu2WiVqF7JmjCjtzDrvWMwzHdLkdGajE5uzXqtoUdFpSGGDRnuo9vfmMmTNfKb1ex2DJCJbc2UMB",
  "key2": "2Yyib8hxxvXVYTQhrxWDd8csWtQur7JGXuaZFrfxrnotCrhFgE77iuTyS6VXVS5AzPaSbjXfyiHyBLwU2R6N9sr2",
  "key3": "2mqptXDcUaLQ79BEkLd9SvjB2ag96eGUVLAmaMCrpGLTH5NJey9GLpaKuRH7HLRpc7qFWZfD3ywVMnabmQLJFUwx",
  "key4": "4ufjJ1R7uzmc7R9LTPxkFQqJ6kxjx1PyznJxjSsoWgkrqDAiCst1vDRWyck2aXc145UZCYfiAgEHqEfCki8yAkyM",
  "key5": "65ZY8Ce1iSsGDpEkJWE5UaZ1edZpgK6ukNiMATJgZCSQaGq28gedRXAqWxgauVFQ9HuDygKE68PTUoyWV7xkRKkk",
  "key6": "5zayM57Na19iGHzr9vatcBCk7vBvFU2LXXuBRuSmHATXFDHY9b8qMHTXQksMfW39mti5ayxD2v4FRJqMar1bBMcE",
  "key7": "5X8VfkaGjdRTEWhEGGawmVw579kXempebhW46TCogA24fDsTy9KwQf5YCJBXLBwSoFt1fWTxQNTytXMTjZaUopfq",
  "key8": "4bnjUCn4rwdJDXSU83F4FwGpZEiegbfCbt9HyhrALcAJbw4pCWkERWpBtwH6kcGa6JVS3NSPTz8NGn2j6ps512ss",
  "key9": "5ks61fxoKjiQKK9DzueoS5odV6rTmVGrTiCwk5x7ATVhMpbipc453hqUz2MNoFZqx3aq1Xd2DVKy8HCbLTX1XHeZ",
  "key10": "3YDbrguxTECdL2Wt4SnUN1ffoqG8jVvdDboWYJfzRWDXWTYfgLmYBTBEssxXe8VViweby1Z6wMM3a4jeehegdrMm",
  "key11": "2bewPdkipuictaWQjGkUgaywJTxYnZeacyEcJJLhv5qFEFNRtbTWsHWr3us43dXzfvAs5EqMDAmPm6Yc33UZhdRK",
  "key12": "3YwG9ayMGXyYHiMd4v4AhqZpP6ejS6F3b7iooqyWppXq7eaeMmccNcwg3Fh7WTRRTUjswyn4StHwK9JmUckGKUrP",
  "key13": "4M2M6L8fz1PstmkSnyUEBK6fwMXkjB9uSGowNkmVdLGecd96RHVfgva4BjeFXnfS3cqmFjs1dLYAsQC6sewYZFxj",
  "key14": "4Q6WSUyQ3URygucZoatosn4b1TKFhMz9mfgRoRmGJPhfA7tK7mjzqgNoDbPqEJdEN2N2JbCiEgfqXy9HkE4sLt6G",
  "key15": "2eoC5gZNkAY8KXxgN4A4CfVn8EjTsPnNj7jmaN7ESJgcML1jYAbdojd7dnJrWY7xy8KSMhGMc2yqekmjZYvQpW5M",
  "key16": "2kUrDEGvEmYk8bK6eXFPdpQ2PkY83viddrT6U9fRb8QpLnQPawPMP2GZiDgbDSRaZjAt7R4Nm8KySCyj3QLp1uiV",
  "key17": "4yqj1Y48rH5nobijx94e4MfTCo2mL8U3HgwBFem35bFJnPwsTE3ZAbC6TCyWehYFHaoMku3h2PWM6GhphK4c6TMJ",
  "key18": "3jtB6FEzwFc8s38HGHamwpWJV7Mo7fayvMwNuJv2wmrfwCEcWVBhegaHhApeBbpT2dTTydgRKB8Kyz5SNE4A34Qv",
  "key19": "4wSrx9FXdVEEv1pdRSp7gvHg7oAZFTwK9dwFYSzf7kaeqo82c9m8ywR67czTVh5KxLR5bjcLkLZLw3FQmwpFSywB",
  "key20": "5pgiphKLXD5ymRVXBtzfmQtKUW18JpoEL9qF2dK2z2g2jT3DandUa8w23hunYmpiZrVSqWmEe9itapEs3bJbZTdJ",
  "key21": "2TUQLXGW3SPizcUKDM9CrwhGt4bAwqxzVCbtdNDQbZLihk79UUyDUmWs3cMLpbjs61U8732EUyefgmCPMWbPDhfG",
  "key22": "3E5TsCgwsVLFponwGNHbB542y465mbrZvEkZr9qzKVgHaddcXtXf7KPk3Fn7ZnnXbLeg5zRpJ9RUHF2sJ6qGZgos",
  "key23": "5RjawQKMEBNB1uqNofteVFTdht1em7N3Lkf3wmazVVfS6o7FMJT9GV31ybR2Uv12Pz3yX2efB92fSspV7Byb5Y9R",
  "key24": "4Xo4vr5scjXkMrqsZKnSqBnYR4WgJWMW6xRjP9NaUWzJqjtN1xFkqYVCfd6tQGRj5ftUEkBSnCQqhxUqhajmazU2",
  "key25": "3riimebsdU6UWkCUweBxTMMeNVVSbemDJLPyp48A4DH8TUZNd6FzvskEQ2AAbzRUpAiti3MW6NeAkWXTcvy618PD",
  "key26": "2panqJ4i6fXWuvJmeNcupmdUAwRA8T4LCQ7Wn3Nta7nXUyEGvf2R7suN9NAN2MN312nGhPeFKeoFAK4r2Vmvsn1d",
  "key27": "4nCyUZ6jDbT4RWAXoNH3SoZAsPD5osoEUUyqmhpahfKKBfeVD9ovq9F9FLajERCXKaxJcETWTsQ2PXuk9wAz6Qcz",
  "key28": "3ic9EKTakauXmMCSEobfcQoD4SE16GnFtM1oHSdWpBmmv9oLxb3KvWUnZH1VcC4z8662dskEesUdteUsjfMhoBKZ",
  "key29": "tX3JKVFgpWREa3R5wRsEy3tiQbLYxqTCbXbwLycV3mTfZY4TpjyoBpiqxNpfBxE8snukbXFnEbRHs7U4efGpfPL",
  "key30": "2haojSLi9F6iqRvVDy2PpHXoNyWXRzgM9JPkmri7bDVS6tQgnsYgLt2ZX8d8d8xdZyZXgBwPg9qCtUm5GEaiLZyr",
  "key31": "u8iaSm1ow4ofQDjmbaMaDQi1WXBECuubBoufX4MxSsdx6DntXDQF6yKvvxf1tqQwJ6DHyyLMjUcoUeHQnqJTeDh"
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

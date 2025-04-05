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
    "4kbyWyzDy3atPugERGHQUYBUKx5k4iBGmn1mJAtY4hvgEEc83cMG1FYpdEzbabrnBLVEKEcpeqakfWNH5qYYbJF8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nre3oc4s9tLM8uuYQMN2dtAG4J1cUmo52LuhA3ALpdtuTcAkQmaS1zPbEpQNf3uS9hBkVw533JwZQwxsBS7iGG5",
  "key1": "24BbzEmm849WvVVgbhhqreWDRrRqzBwJai1vDYa99qs3n5hogxV5MLPAS3VRKRexmUUSQgWRa5hYeX2Zo9JCHyEy",
  "key2": "zLNvezkhkg4fSLqNgguwcCP81DuKWhiGDwxYkdJzwfPkRSGDmU1fRpK6L1eedjw5mL8vuJb5gBzby6iFPeWqFUN",
  "key3": "vjjR4oTd9puUpzPbLVbmvfvkE3ptxt72Vz1nP22hMFMSWt3fDWpuQY1Y7BG7LSVzd4mkfHdbPWcBu9ACmsqMoeH",
  "key4": "5UiKkg3hiAhR9WJhjCvXBgXsJRzLJRY8dPg1r9FUii5cKzMzhm43reqRzpwipnRtQx18iwqu7NmC5ik5DPaG2B81",
  "key5": "62SXH1GgBMcucD9dbT9zyiLX975xFFhTSjaRCv5A625QcudNkRKsdV8Nwu2AbTBQRbySAd3ikNxCfiYSyswijwen",
  "key6": "3sGNenEXZae7smsDTQsDfVSF32sRyEEfQ2frbw88KujzZAnhFZRNz3sKaEHvmS5GWRy4jFQhwP3qLwXZaHzreuz2",
  "key7": "hUj6teg4Xai7R7EkLuu9CKnabEiBwigzTqPmrCAV655wCVfQHvNBGujttXpLBvQByUWwwbit7ehT2jsjxqvNgHC",
  "key8": "Q6pGig48BEfsAm2uAxa6eRzrc6zsY3d14NyYJnekee7AwKNpoh1w5xvzuJd4gSa7DU3GN8CVmXCRsZq9cwANJ9g",
  "key9": "61Q8grZt2tsxZ32eTUTfXweV65BEXaKVmAMZEnzEGiWxzJWifS1CAtBF7Mfjz9DgojBBkmFbiCQ2Np3kSk9m3imJ",
  "key10": "5NMCCifNMbD43VUcQi8v6d6YmNk1Y1xaYPRUBsfaDFFD1F86AGSogw942KFTZJCk42rSDp8Uqg2riC97MufwSLCB",
  "key11": "64PXBQTs8cKuW52enEq8EYBEiwECwKjscj8jjfcTGkcdF7UwyjYnuVL2H7TxQwXc6xkz8hynZTVcCS8fim6QkAto",
  "key12": "654UxUaQog1KtmmWnNPm1VajtGQemzPUWVfCDvmerBHuAaMooYfsBy3QrGSoTjsysrGMMSkQMNW7Wy98MFwA7mQw",
  "key13": "4sCotK76r8Tp7rkWnR8kxR9w3hW9qpptYyQJAscTBNqHsLJWS7cZGvqu7r3JpENbaKXrr2Hwo622LtvNPk75wMst",
  "key14": "4huzVrSTsc78FYjHbbdS7X4aNqyes6j1sgCgm64cdwZchePVNNiy5nZ6ahSjQ2MS3rXwwPABjnxH39siibCB6PTK",
  "key15": "3XGFXSfsWiLKWci7ekRkGzNXav5mE93ZVnnHRm7hye3qZ28q6HfZoicxyU8jfks6Bn36paomGTVFZzBbXoQfer4F",
  "key16": "5ZNtLgRUrJEHciS1HwDU92FEKkgH7LFbSthQMa6rezvNyJCCaN3CDyaYhCvXTfpG6EQPfwyRPXDhDNJuemJdChhb",
  "key17": "4J86KwArNZW7XhAbjg5Hf8aY34eRSR5x3eQLsN4Uw8HaFZwsdfm2LriwD4VSZwr8hNd8vZZQnZzF7mPAdjKqwBNj",
  "key18": "2mzNG2nKreX7q4iKHQfPH666NnJRDVM5h2iRF6W2kgyo5VDVWhGXQ2GfdqiTsj6bKdrMVeXUbb6uV63EdQqt2cUz",
  "key19": "51i1kgQGJzBngZJsq3exfE2n7orrEnAFPFpa1ZykicmKSzFFBP6nVbYZS2GboHV8h3bXMucvgtgnbdx9cRstJkjL",
  "key20": "kt5aE85Zk7jaQBDW91LQoz3oq2gGftkS9mBBeMxPE15PjwLJHFabzSbbkfrRvMHmmQzmhCWZknVuQ4wnemPv12R",
  "key21": "4fEeFb7tAUqK5RqH5oSG4W7WxfYpmjKBUtPXaeGkJqUXYBFFddRee96SLCbhsk1CJTFzhHEcjyKuAfjYMKEJQ34v",
  "key22": "2iJzGuhnFidtxnidLDz5LaSJoQrA7UB185nA33nLm9L1cNRaCugp4avGBh9qxLfi7weDEvAPu2ixqWGtv2TJivD6",
  "key23": "27k8UU3oytuWBzkk9RhhZAwBmaCMuodHC8qb2habvagLL2V9zzGjSL83pTYnaiDXmDarUotYqtp2VXvDUgFYSFH3",
  "key24": "3hJ1v6rSJM8jW8eFJU9jMqMA5eD7CUiSykMj4on81LbbtXnGjH6DvdFnLn3N6SVWrhJcxiYXxDPkcKqR8vugLjJY",
  "key25": "2BcFFcNG4ukay5eQ6Caw4Lp8FvUBsYncQr5rkVVmy57peQ6STz4buTX4YP1i1ka7Hqi5vPkYWpdHcWTTXNRzshwT",
  "key26": "3GbtqBzZVK4atEmqjx4XgUa52FGE35Ubnywby9EFZGQaNivNXA8HsgJ15KDpYp4gKQQ68x1TRL3JVX1LqFR66cB5"
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

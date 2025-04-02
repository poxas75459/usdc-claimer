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
    "3HR5oPRzCuZ16cmtZMVsDo7hMqkcWnNy3rAmdyV5P5DHF9zd5YNUSe9RFg3s2saYfyJ38fvKzw9vLPMrTJpufCFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tbmdv5s9zCCBUyfQdxhStAsrP428ggPnaFDGWFU5AnjycwEagtQ23G4bvTz3KwMnknSZwv3qt62Huh6X2XXHnhv",
  "key1": "3ZgLihbKUJWbJqDwcJLARiJHJWXHrWwJirPJzQDEHn2dvPC3Fg5nNiKp9GKtuzRNgu2VQrfHx8CCMmAU3hhcdXEG",
  "key2": "2JWN7SscCq6atm5mp99N1bpDrKjGo2nzYYuDMMp8FifaSymYQmSHH29NCT493pi6GAZrxdM9sePBpCAdifgLbY26",
  "key3": "4zEUnAUGun4QCUPn6cNVopUef4P45uueFKgubvPYf7p5ffNFRssVaNq5AoeAiMMoCvkm5k7wGxyjZrJdhT433C18",
  "key4": "2hMLnKfj7uKKxvXBzt8v4oLgKPqACZh6DSz1Vr6fEZXvDasLceD3RnuZcjsosttz7STJdJPjSi5zhaN8hgnrYZta",
  "key5": "4wFYBcwVzyioCm6rPMDEQ4jeCQd7TmP82mVCZojeRfPVfRQyckmLUE9t8dFr3cAGpthHvzDRmwdvhEXqeQnoswju",
  "key6": "MnLu5GEtUsdQwctMgoFxpvKCrZP5cX4kyfbVhb2sr4Kzyk8oeegkYtpC1qad9YScehdKUtuchHNELYxUnSv8DCe",
  "key7": "3Kt33rck116NZEgcC8Jgi6y3a3CZkig5HRvZNV81UFUKS1RpbJF6DL5RRXMbkrxcJUE9VUXADDyB6TJcEeEHH8pv",
  "key8": "58S89Q57LW4HfAD996ETmxp3YEhSGtc4csXqhmjfVUz1h6noVjEDYc9nEUyrMgC5jYYQFUkckHgJP1HY7Vkhhwti",
  "key9": "2BJ6YG2pz8tbfHN5hJX8dqxRLifLkzSEVcSYqnb2iQ9rLRaQ4ey5jJpH6VedVewCYhgFk7ykPJuLobCAGWJyvTHa",
  "key10": "31QVxGV5KBxL54kxF2LDVGw4TtSwGacz8vdee14ma5kRpQRdSdtTumF4tEc6QwKdqGfBABjSDMu3FL5iFphfDz3K",
  "key11": "23eggUDUsCpDcvHTK7i5A8H5by2v5dNjaaEPkM93dXU56wC1ZxhAupezwhWPTXg99ToK6n9u1HCG7ahLtRBaScvo",
  "key12": "2BtidkoYGVWNDE6ejruUdMvvSv74tb4T8TZDvbY9pmtVtJFpVTVTLW61okeGQnU925gfnfeJvRySvJswNwfAAui2",
  "key13": "5H6rchcaSVRYLmEmBEdM193uQKiCR3G61VxqHENFFw4QvQWn5xopCxfxu6CP5RvsmkmC1FnqSv3YuftUssQP1Fzx",
  "key14": "5wBVZMvF77mM6ZYJ95WDMnZNCVJ2JiKUK1sQdTYk2haXLDc8CW8QkfXLKvJ3ynL1zSkCXLZeg19E95ecQTpbDvke",
  "key15": "2tSKDoswZTEyPPaEGEGAWkf2jN9TbefzMuxLwXw8BVbHwYb9g7Qgs6XBgn5Tu9KeQ1Bbpg6yyemm4MCBGxNCEyqJ",
  "key16": "634xTwhjvCg6amC6zAhX3VQyfwmGh88X9AHtMcfQ9GTU74yRyWHyv47wTSSgfDwSsKzBiSVAaQuFVgPh4LtnfTog",
  "key17": "5EycDwYceTsGamHmxxVZHQ26CCkPzV2TtLkYKu4qunjP9wq2fjQV8G7T5MaFA9PHJRxjP4iPpTCqQ4MotrdMYCkw",
  "key18": "3zHZp6iUJx9Uz9ThKxmyEFwXBg8bYLYRWE3mZcDLjjRwx2wxZAfQWfaNZEUHFgaJkbG6rz3CP1YRK1KCf5XbKvD4",
  "key19": "sdtWocz8YniE7ijLV1SdtQ8x7X2BcsRezvG5XXgvaNRfmjjkaBvpbyd7YdESvgUTs15aYq3Qn8GnQABrUhQo3Cx",
  "key20": "5k4sjUheugcvtGJxQQEu187ANZqQuLG4xhAHkuJhEjEMcqZZLsFmPnS1xQP62o6PJ8T6nEcqkqzKtcyG73AyhD5f",
  "key21": "5rS1QBS7qTRMh1kePTSqiSxzepXEPL4kzUg9eZptctLDQSu2jVurCcFAKsob8hyX9jk2tQ5VMHzfgwMzrYbmpbFM",
  "key22": "41MUywQPoVefL95bybqEmciYbz42eR7kFQFLC9ie2dJBFbSWVoU4cBrAKWi3mPXxCXhMCpQ99njdJ5Py6BCp6GFo",
  "key23": "5dppiagMabUQDn1a3eDHASiwxTR77zAofAPka9ss2ihLXoEfzYx4nYD1AykyvCGxEwwVGYxXYwmD9a1TdStUsKwM",
  "key24": "h5JG99dreXdsCu6y7iBKDBbJVm3NcK5w5nybf4QwigzeG8pNJH8NDPdwm8Jhscwk8vohQLpH2w8pfJBfcXDdtqU",
  "key25": "5Cf9u9JCBsQHTPHCpXhEu2ESDhb5x3SaEtWXg8Xnjy5anTG4z57eMsABQrWmToZJnAANzCVyZNKLKmhwMjAyKkF",
  "key26": "24SAmDvU4DqJWB98iA1a92dkuKWirZ6nDRvuhYCzrzA9H5jRYzHP6kCAPTKL47iRx8pQnr7Mzjcwfg74XzHXH4VS",
  "key27": "3JcBFn8ZFHv8yqJMR7zq8MrQZhDgSBtB1pDcocdALNNaJtKsHwp9CCtRxz1yCR5s2onFX3ZK8jiy6mwFXiT9XcZS"
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

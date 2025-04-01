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
    "RokZ6fZMSxwz6WBzqvtZXqoNTj36kyT7XVvec7RGVifX8h6cbqXDzpVVWLmpJXCnB2jzMNiGoaGt6ouQUiwR57W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e84fRzWKSsK8ibRsDiEvqcwCrpcPDH5tt4eP7rUmkeRNaVNwMnZrus9DYSkFenTm8AxceoHQPz5Mbj6Zb4ygz3E",
  "key1": "5g7aHeXd1iD5kqbtsrv7i9BtYoQEPGE1ewYqcov3D9XfHqc6jKR2LQRemdXdd64t74vRnTi1vXQG1WH4Zh5YwfRA",
  "key2": "3PjkjZqCtvijTP5EU7WyGCYJePSYbdYhFGYyxssYa7DkdyABCx1DtZBxAWBkCzsJ34gwvWZwUT4aJbUoc6UtAM3n",
  "key3": "RCFJXQcqPgLCgScGPqsqHWyXxuQZ3FhNpD11i8rZkGyAtgdmB1joLVtXwVSMxhegtPw5iV54sVkPGajqRFRs9vm",
  "key4": "2b5VUY9QNgWmeTHMUpvsgLgSn7B14UM15j2TdY7FntDpFCfWDpBqM1faaU4HFgAsk2zDprDQmkC7A7ocNQtaPTS4",
  "key5": "38anmLUF3ciYCsAmkKGT48N9W5enGrmBXPdJW7XwM9q4FJCvpeH9UW5MN1WwqCGhRJRetBryANTdAye5YFo78CDa",
  "key6": "cDLi3XpdPhfKuinzrozEUdn7uvAnN3tfuk8XpBpytJnSJ6boC8fdPAh2iTHYBumTt8pZrTKVsdQyHE3CUKBZ5u8",
  "key7": "2gHoty1UobRGZDCuUJ2qy7uDLFvstJ2fM3TMWHJVPFVfUnxqMKnkth2ZXKWTjxZ4r4Nig9woAA6ap34SCnAi7am3",
  "key8": "3vdfA1U7CnJbfX5xUty6Xo9prS2d8Up55DzdrG262FYiPusTG9g8bwESdhFAwuAneqvHwCotK5YkkrzjP9bbCkzv",
  "key9": "3MiFKawUtJsPCihwqh7BRvuf9GnMZ5BJ9BV7nhhCPXNhh2ZKRVbLXmkppkduRJHZ9HP12CtN5iCsyznipp7YUS6L",
  "key10": "4ybDA3WdWLpAg965zSad7qqNHocMiBdU1ZWLfHjptC4gpiYygdmj7vu1paVVfUik62ZyHXPRXWMACcAt1XeWvwCr",
  "key11": "3GywVbH8Yb1EU2nHdgt4pXZNP1uHPCugyFDwb6dEPLfTur5mBT8NM4fxPf8qpJBYJZy7qvR8aj2ck9pGDejgZa4Y",
  "key12": "341C29YynxN6V4VHDQaCypdBS4SZ2NekfrggM5UF1NrfX13Lt8dv8eFswtDkHC5L3mbpyCFrbDv9fEB1nwHZEmt6",
  "key13": "2A56kpK4Rp5bL3FdRFGqfvsA9sdhWyttdpfn1DMnXvqeQWrXMniqqoSScRVNatB55tmKvKNKNXeMWs1zwwXt9sfT",
  "key14": "5gaf53o88UaNaPLktvEAY4sHguPD5ueutcEfpiYdHUUesoX4BXR7AMNvGXKkbagY3wqdwkZTwNjZfoWmjHYxyw7",
  "key15": "2SWBqTdRzGW39N2Tj4kupw9XyCtVdAJV7RX3fvcBN5bMBncWH7pWQFG4f8U9FVZLGdxwFKAkJJexNpsktihMpCzr",
  "key16": "4pcztr8PSxAzHsFK2tChFiHfMcocRcVJP8KuacMR8u8TdwiZQE4hpZTxtEzJf7QF4EKviaWxckLwLNT5DgpHsBfK",
  "key17": "3N8qAyZkGTRZMUue6tNDtirjQtNsexann8oL3SSv975qqyZzUCK27qR1mq13f2F1DxgJvqaGDzUmMUzK48LEXpUA",
  "key18": "5bcxhuPYKPY234DMocwmHVMyFw155BAyudFVyBY6W7q6LxyYq3VZt3bSUZYqQTAGBh3vcDh4HTsGApeTbpeCq71M",
  "key19": "3Wkw2gmZiGPZ6Sq7CtkLvkx5gFcmffzD4Tp13APDeJxoFzsCEgnxcYsRGyWqTVojNmS9DuytsKM8HJMLK4BfCzf2",
  "key20": "4yXmdwNc1Mj9juYExGeY1nCgSM4KA6u1vhXJhv6JLo6ecjQRSYQetgdE2dbBSs2vSqbzAipzbGoRmActgQKKH7m9",
  "key21": "2YfsJagFNXU5E13fLR9ENssrWhjrvz9tgXtSxrx622qMBZdLRBFQQPJ22WzpLJYbLmfTiZAJPvLSN4CKCrFEsDXr",
  "key22": "35WYwZJNmcD8u1kLYb4zWB1j3wnQGLkADJCkB4cFRgB3dVq7rHvsmd5NmdaAeQkjpfYFbUwciXz6b9mUko1hCsa3",
  "key23": "8vja2PfTGtRmyejaXnsnjUJ6Vn6h82ZFTuinvtKsCbm7mqeD3xQf3391Utd7SALQ3AY63dEd3BEkpohHNaU6H6P",
  "key24": "23sL9cbXrHjZ4m8wssKnkUkY5YX9HcDCzUeD5XBu5MfwMH3ynvKyB3hdCv6EfTmpBzyzmfcLuCKNriFEJ7q2HtmG",
  "key25": "4jygykgT7Lsn9iVBq9a2fpVrt255p1GHXHBRzGGGdGPasr6f7tBtW2rSxTjK5EkUYpFEBJwDeacMsydjwRerbAsG"
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

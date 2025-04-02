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
    "3DC2y3iRrS9KAVeo842JUGtrHoq2RJesqC1EnnNnmsr4tHK5vSiTWdiTDJifg53n2EgvrcDy7S9oZUfgA2kjUEAw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GSPYo1uQRhaxGa9sHDP5NH8C4SS2a2Hjh7Af6nb3pqL53LhkXHUadz4kaumuE44PJj7LVLG6jkYZPMxtv3xjUmg",
  "key1": "4fo7koerup9R7GV67KpGeJswGzEqRBoQuHbC5G3mmws6vdoKXsSuYR38CpZeKK5Aouk4Nh9CCNv6Yk1NC4Kxcgsj",
  "key2": "2CbLLT7YgH1YHVXcqv7Tx3FnuM8UZJVUgorXHu7S3bWw5EuacbpdzP4k93KrGzy6iTBSNmCNBmR164LK9rc18uS2",
  "key3": "5kv5M7WXq2BUuBM5e1r48EDYYdzZwSygPwsoUiTp8uFtXtDofkzEF9ymHbfacSyT6EGgHd58VmosLm1w459Db6rj",
  "key4": "59rVNXzbXhFq8pJSuob1BvQV5Fr5BtZWENSX1yBZwX95ud3V2FfqXGsdFxYSkvMKHMgxwK5akDBy8ajc6pxL8r9B",
  "key5": "5N2jvCet77WwMMuiV9SPWZyLo35nPmHxMkUWKpsYdpcQKM5MbkJ4SLTY3FcWdJ9LC7wszLYn1GCoKR49Qi5uF9xx",
  "key6": "5hFhoKzZvkj4MqgdyQPeBaCJFtcuMpjifvQuRxfMKHunEucxNkwwey8ip2q2q6cGDuEYcvwM1qJ9r7fMmfDv3bhi",
  "key7": "26sWFwDz1KeiVhtnG6ATTZnNsCRanQk5Pqi6qWJCuKGBfoebUpYUKHz6SrjcUNE5XGVwVFjsKBLNzTFqrFg884Em",
  "key8": "3AmR7LadqawneNe7egNQANJGN2XEd7aG4MzyWWhFvcoxvqnmsSuNa9tgvn6hgDdBX8H2PVnaarPdFKvqYWStsDwa",
  "key9": "3fUzD9gASBvb7y5WMwksDLy1pUxuoVXKA9fVp7NWhEXimKLqYmjXEzzcYBZe1GX6oaeMDbjiyt4rcQzqz5MvXxAw",
  "key10": "2xvspsoVcQT4TzDdnaA4HM9CGqrR8gbrEHEBRub2fB6vdPMA92sNoZcWM6G46ciAiwMEfopXHX6tFUwDSXD1sh1M",
  "key11": "553YmmhV84oC1pKaqV7GpZTkQtG9GwU6iWYSDJCowz28osSjGue6S7tSmzk15hCSGMhCXC3h6voayAL32u9zZt3y",
  "key12": "3VGHKxeyrJ712JRnKAkB2XAgtdsWzvu3f6W3QoTbrGeDQpYv8cs7rzvu6Zgjm7we9HJMp3bccpTX4nsv9B3g4Mdr",
  "key13": "5Go4EoHYvMKnaAHYaBLgwEdH2hWF2i2cfuKuj6SmGDtB4QFsgWBrmUUMa2HiDNkWC8jEa8prNQvMpuoPDXGSCzZS",
  "key14": "66tMsykfz117RFDsuccgWBNzytVwUryhsTcnWsGticQvh3WquHjb5gwYzH7WvbchTBM5yBayjzT419TUxvzE3CLZ",
  "key15": "2jLoEM5gtKjGVvw3Hdr7hXJc7FTdRzC8sLwVJbMr9KKJxakraeNmeyVn5c9VmSsnAxyJHKL7xYsh8tsNtUCDP7xD",
  "key16": "4fhhfzSX2FoGwDpwhWA8p6tvu5QE6x1wKbm7mUr5GeqSmoX6B2PxPNpeWqoPxKUb6cUusUJ7qWSHHCFbGH1SXqSJ",
  "key17": "54nZHxTJhqaw9LpAeJJTB6ioprbGZYFa1EiXT7HqrSCtmc33F31JXvkMTxBPHW9BSBmwkzYRB2skYbCV1u3pm2zY",
  "key18": "5May5tPkzpF1CpbzUwnxPazFSLJd97mtphXiuTVSVX4WDhkEPz3woX8ESv1usMaBgE2BARAD6AQanDhHX8Ev7Azf",
  "key19": "2qyqwtfsf9oDXhLBpwrRPnTmXuiiTxxVAgA48Mh1FrRZtMYEfYa8deLAQFn9Dgq6Zx2W3Y3sRxCP3J4CpcFBC8uz",
  "key20": "5fQXv7WkuyYZxuGVSncUBfLK9WRfcS9rmjJEwccyXCZ1Pe2Cu3ePCuuxTMiXf2Yw3ARKxdxq9RTyUJgLv2XwbDDV",
  "key21": "5PaGoysAjXydUzTEoKBeCianEuemoCxfkWGwiW4RyxBrugBwp1Ydmhyv7mVfdTSUcD7fagUrD6QVDZYazgSRnzcm",
  "key22": "3v6qW5RkHtQGXwf32acwmZ2hdjXk54gz6QkERr8be4HerveuYURcNBotkt4FQGRmxeGEE5WQydGWwpoUFPYcpnkH",
  "key23": "5RvUwJr9hwAKvkP8p8msgAHshxXsJMPzUeyMFG93oUHxnSJ5AiYTVsKwFSp9j8aVpRKWssuUqSmwj4oXpSftQxf8",
  "key24": "2gTMKoLpWvtk8oHLhksY6rNse52CHYoJs9K6cRoLGvKQG49ZXNQsRHpe7RuqVyu9neknNdky5WHoWRW2XepX4EtR",
  "key25": "3cSQCvyrFsnkF9u2hh7dif72h3v3NmFN1BE9aTo8JWpXMpRrFoFuenb9DbVR9nzqGA8eMVUnXB6yVNeGKwdUWDT7",
  "key26": "wZ7xsLq4248qnPrmifcc52f5q9YtsNVKuVKuUGB724UXm6SVRPdHQzPUWkCY9vZoJnDYmWSWPKLkiheSbQE5QGa",
  "key27": "bYLJ6o2n7PxJ1zgoUWpUsEgcXfgRYbZVCkJ8WS2ffBaU7EGjdnEtPSTtYF9MwLWm6uWGAKKEJjWYtwox2c1hasR",
  "key28": "48NrXw4nAnGwFvako9GwvKMUV9Vgygcd2bFZM8qBvBMKRiU5vePUDEm35Pmc7DYssRECPzpsWkNwteZjddRHTkxv",
  "key29": "2U47do5hqyQgZtXS94WJPTipsu9S26vefiwvzE7nJDt3fsasW7XEX2XpLdTWUi1Ec2PxBCBSZyLuWX2PRKfopuxt",
  "key30": "3C5GYfNHaTjLXGViYPt37tYqgmscsd2HLVbiXZ2kYBY89uiuj8VMJHx4oUpWRvyPeQL7EeLwwbM61ePtS2hjsAsj",
  "key31": "3WC8AYMrjFJH6R3w9U4VGo1pTWz59dzTxxo37X8Xa8GqeVV4punBjxZ8vJaUWRYqEy5cngYbKe7D8ww2n6ND7XV",
  "key32": "4aK6Zt58xTEFNc3RYdZAPaVvu1XbLi8pn9qU1EMZozxoni3FE7tUWfYnhfQ6xowY8KvYoPrVX9uZcG5YxA8rrpLU",
  "key33": "2fVis13qYN5j8WuZDT7CCAPrSYsXVAXKnn5NNHViWh1d1yzwz4Jcf6cLZVXsEPARUSsMrczKSxkqYcX6BXZdhV2r",
  "key34": "2dS7JQpNjhAgLbf5M8GMnRPHixZKHeTixXLPBn7TZapnZBpHh3Dgx393NQt8H4a9h1zqPo7Rtt9yA2YwU1oyxVBL",
  "key35": "4a7ycBUKiaH2wv4BTmfaXsx1KJDcPcvT7mUtrJbyr9JsuGxd6UCQDAqZN8QoZPChwGrgtbhA7MrayoeHfsCV433m",
  "key36": "4BSPFJJCiFdU7dCXiMQcUkfhEU6S4kZ5ADGAfz5ffL628vaFswpXsd6u146qZQuMA2fSabNTCHVCFbWJEvsLKNHS"
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

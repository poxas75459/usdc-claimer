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
    "3UWmxhMryNTcpgGgfD6fVUtftJSoCsfm8uBce5LgZCYuszrakz9VSkbdJPX1GFtgMyag5bwfeetTBWqEtY74MMQZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66zRHiAnaYqvZGq2dN5neZgz6CABsvqEZuhr9KHutpuxp9auqU6UL5zahthTz3KQHDw3uw1yjAyGTM15EmweQieF",
  "key1": "3KgQ3zRFidq3zKYHJSzoAhfeqMhT5JdFnFTY2ShwcEioKrMtNYTke6Y4Fjud9JQibnFeoS9fzVPF9EX2f8YiEhN9",
  "key2": "5dyknysq9Hkykuy7uF42pzPpGVzaKk4td8dXuUsQ4QkMULiQBL8a5d3Eg2F5x281JcRh2jGyo5EZxJQsDTyZpmPF",
  "key3": "3m4S96sd8TVMLzxLXate9q3LYd2XdPa1P1XQtA4XgiVVf2GV91J7nvsmVutTjtRHXBWSnCpBBgMhCKzXVeYRVNdr",
  "key4": "2XxHU65ifdjraanKhdBnVHiGg63NwTKtSaEjMr4gin4Lc85NqZGhnAcfguHbVGYtf2RghExomAZc876Z1DVdbY1S",
  "key5": "2zEt47vzhNtXNCaD2RDmvjhfpBTpsEimgtgfFs5UnygbERJJXkTgRWG6hUfWtUU7Ck97BSVSuszPao7RQPS58krD",
  "key6": "4JXJc1MJHQZL6ntxSQU44mUhFCAcijdkkNT1qeZj78nb8Uw6sThGJ2qSkdt7bJNBNLAhTfoEogkSbzrMx2d6eGny",
  "key7": "VeBgFDV8PZ7gXxbPqn9Xju9TKxyv4bexNdcyrRBJohgnL8Ro9qgCure2etxjX1FEAQxJkzpkXFxkvsfpExWzxWd",
  "key8": "5iQpZTd4ZUnQ7Lue9EjPwcZSG3ZdSsRe1MSrjrSuRHCzTcuJcehp1LX25CSJevR8G6Eev4Pwox9gVpXTTH3LKy4u",
  "key9": "5kUuyn1CXDjXc87CPBwjzpSWqyvJF1DMpLiGEKSYwnPHzSXgqNeFmheUFJYzMAALcSVgPsGQNJuRcoqUbzpTvLAm",
  "key10": "V53VxsFj9zHUAH1vurmNJ6gBT7WBJv4r8GVCXKSQWANKuZKT7S3nGW63BwPseQikmMUhVy2qufrGfTKosDWkZ1u",
  "key11": "biESPKLDR3Gtg9mqt9JRwRzsmPaW7FMbC7fEhhYAEa9CAyrPYnUrAj5UTiZWgPoQcLGguUZiFB7E1rPM66b9Biy",
  "key12": "nmRA9vnAApbyqRwrBS67mXkgo9tobQejBd7a6uwEfv7EjaNkrLqDCFwbJG8peZSso467Ec6nREXv32oUansaibi",
  "key13": "2xJCuxQY1r7KXjZ2cDzbqfYUUVhPfayUM8deQ9USy3L3v7oP7tCShPaYB1Be9wioA7nFaEqhEmuxM2tp1ETyK25d",
  "key14": "2mGia4Lh2vCyDXDUNHxXXGgvWMJLXSENv2auNHMfHxtmzshc1M1eAzKAN4ExTL6rB128F461y8T686xjAC6rUNQ",
  "key15": "AMYDiWbPyKXf5iMonffZ9PV77f9xQ7xk9c9znmjatPSChqP2ShbYRrJE7iQLHpgkd53rdW5FAczVVtT6L73mU5r",
  "key16": "2F2KE7twqhwd6XC9xgUefzoZsx4C73Epab598oRb7BetGCdXkA7fH8MtUrT3irkZr71k7viUpvhEsSqmoNmqkntW",
  "key17": "2CuVja8V9gTxb1B9Mzbyi2bpCPP3h4Uui69JM2Rj72MGGpFVeDPZCqqQoMJHNr925h9KAWNoBPB2S3coLmCNF5Wo",
  "key18": "W4VGd5BrX6qEj6Pv6CpGJBuAqMQQ9brUWpUnWR5UgMWYjySQr7Ss59yzZLPSqjDSeLG5gcokmh3PciLkftsDHY8",
  "key19": "4qDM3JTWEpkudLQtDY4epBgqY2vYD5mm6iJKk41ipvU8SWNFDxnMkwHUSy4tkGWWpUqDTR6Sa3JmEFtycjXmrbit",
  "key20": "5cw4LfENPyr3KqfDgmtv8HE4KH63QuDd5Levs5nLEYGsnHqdfvShNTLSQkyMtjW7z4ZARwnAKDECZPN71VHurEQt",
  "key21": "4oxrVspd32KApQ8AbDwwDBC7TKUEpLHQRaCVZVwpWVSA9Mf3iRiwST96JTRMkH3yXJc2WJ2vNzsn5ixk78CPANQm",
  "key22": "2XTZ6vX5gxtHGv9tZFtwYsZagiotopCokaeuCtx2LijFezE4G4uqAhGXtkVkbp9BPXDbfdJBLCxeXMTBNCXEKxu1",
  "key23": "5XDkEYcNN4sXfzkisT5ceJ65JoP8UmoED2bFjbe4m4cqcjMaZYc1azWL79f3ZayYmzq12UR2MoTL2HGV2CCwJcgg",
  "key24": "5a83a8ihECkrtNw3vCcWTn8bS4LKf2dDCUtrKz5EBs2GfScKwNG4BM3btk5SintEoCXf79PA1u6okugpqQj9yKkN",
  "key25": "EuBbr5YJpPtuvoaxajXJnRvRcUdQ7LsURfraPpKwZJfJGjoGJW48q6otAMVbPzntbWqihnRqp23wKpW3FJeTDP9",
  "key26": "5Bn1Ck6iayAS3pAQ8yHEBSFxnetewXkJsaC6tekd83y1BUTK8txYVxvbWqxKHFSqey95FbHToyEftv6Mwvdfd7KW",
  "key27": "3NL7AerWNgUJGyt6ZciCetWZhNKmvy3aYRuyLkZ6tCW1W2NE9rva1E1v1svhtsXxWdDRNYxWt4RiRaeYa7eBoriR",
  "key28": "3WGeeJqekcazevZeyRykrNRRDjGenQxDf2ctq347QhZGhZNn6Zui6SMMar3VCNuA4ErEk59wXhg7w3aM3xcDWMTX",
  "key29": "4DMtdM5ZMaHZcrykCFyZGUyd9bT84yPUDTWGbcj5bFyL3iqqkPDQWYsAqSa8CwB6ZXRzKZN9TAibhzF9dkibyb32",
  "key30": "4s6BCBWmPeBVwMqGnBexb9EwWGG1nqsMrQGcDWjqhrEY6KLabJUe6HzooUq96pgxrdVyMgmppgd4EasuHXXnQyzg",
  "key31": "65LPWpADyuA3qvdJYQZrbSujxsqRk5umYBoKATy8W14GrfGPNittgvPA7tCneqDBxt3TBqNsnNhwN9otmd9GtDMX",
  "key32": "4LTVgx7bSNNekXx2ayKjAqRb21YhXaR19J9dM7gZ44JecMa81jJN7CsQNJw6JqrrW9Lgzf9iimHkMniMWDcj92X4",
  "key33": "3sbcKF6MsBLU7JDXfsLjW2rvc3dmd1vtG6qmsmVbjrtzcxJbuZyGVakbd8N5Q4z9aq22BLhKaA5HABYZqH5P9CP1",
  "key34": "61xMurLiRwfio9HBLWhh5rY2SLfwKmtPmvajsNakfW8yA2o2ifKFJLXWpj3T9KGGjBSVpfkPjDicCKUSGQwhtgK6",
  "key35": "4rtiUohniGa8wyR7oebQS1GKrB6ovdnH6WJi4TvbRa2WZ6ip4fF9VXcDW4b3jnnwhfrj6dgRsvBwY2D2kkAQf8G6",
  "key36": "2wVXx66y8rqoLAczXZ4kcwWVgo62oUgZtHfDPmhYG3tJPKxmxEyTdbvWPwBL22CFEevywaS5iNrTTY33dHVQ9wEc",
  "key37": "3tfrRQMdcSXHFocvnyaB181K4ncQWfNwLQzBZ7Er1YfCnn5w6httf9nmbkDbHn9wxqMbYLGMaqqAshyiSJPBVyDo",
  "key38": "4jgEncwcSWkjpSMNYbTL77dGhHrfgicHrBXuM4SyWZkwAd7ykjjW38GBCqbNiGsmBpixPux2cMiWvxtkfKbGJWf",
  "key39": "4XUGrQ2PgjUasoTzrEo7xnfg63BDEkV9MavMSH4k2nBAcJwnWVteh75wxjLiVf5JiMRAuKWXXcju2Vnrow1T9hZP",
  "key40": "5Lq9KfFXSKgE4D4scee4yVxN55DpuDhEkzTMGqcGscb2kZUjqwJQTeHrK3bYbTUwdR9HW3dhTkss6DUGzatzLqnY",
  "key41": "5ThniU5E9FPfeG5xmSXDwgw5baRVszAo1QMiZe4bgKWjHRN21zSg2tRgVfMCsCccESWhHTjhrw2tZvCA1rtaH4TU"
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

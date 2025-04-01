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
    "RQYNj661et1CFWPjYQEqYcXPo5XVMwQgS2tifVBw7dk3U5RQb52JFA6VVnxfbo775vrzwYKEsM7jSEEpGGj4Bre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpgBchXheJzf4Qxss1165kq5w3BeKtg2BmS9ozK6ChQ9VTwpwyW1EW5UBxKGxqpj17XCCseEjucUH3C28NxWsGa",
  "key1": "4XNjPnyDC6rRYi4M7hnQEDb2Y1WkbyJFMaAhDj814q8LoRMhisVnGpftTbzr2Wn3QQ5Frg81zbtx4riLYUmqyekq",
  "key2": "5SKG4U3cdPXBQwKfcKrZsYzCU319uNPnaj2J3aPwDqL7FtmAWNesKuAifkPv2kX7Dp9HkY6j4sK8eTdcKzcKvtp6",
  "key3": "6byfSiuW9ukw57JihwfTK5BnooAp2gcGSXC88p7qDi54reHZYUNBT3bbFmBtJZkfz2oi5jivgVD8XPG1n9LB8bS",
  "key4": "4ApdhoRck6E3jNySSu1QPq3SXj5CRmnvkLBnvx42pt5XsGdYXn8HjWErt5PEdKfDdffXE1jD5wRKX4No52WuXrPg",
  "key5": "4nBr7uQkGS9VVc7rr8u9ZBWjJMKKpJATAfMgvSUv1F7RqTWMeRHtzBcXeBsMEUJdSt4bZCTpjgjiucpafCk5NuxW",
  "key6": "2MyGyKiEjGe23N3nAzuFZCHLKbmxv24CyR4sSCbaq2DHh3VsbfdCvTfCdW4nHDBAF32ru8xYHkUWNgxtivHz2Gvo",
  "key7": "2TtvGG6YMAD6Pb4QoohwZps6mfmpL3PHVp81Xhda2dBBLLW8Vr1AX3fPdToseCGemhfPwTxp2ypUX9m82vPGoH3q",
  "key8": "2ShBeERf26iNKdGBg5LNFeMSsKgvDuRwLDkkxi17whBP5iGLswdm1shhjgCUA4ffgoj58tFBYZjM6Y8BsT8Un7jZ",
  "key9": "GepE5UxavAC2vooYufPCxuWj1wsoZ6zZ331ZpkV4u2MF9ZsLdgTkvmb2y4cLLmPPmRC33KiE1oS4mwSufuY8BBf",
  "key10": "2JY25kDsbAikWWiLvBkFsAqs3DtAHYHHF4sDuds9963WE9A16xMWWCJc3vC6jn6PVsZFQBQUUit2mTHZWN3karuV",
  "key11": "3ZvkLA1Qk9f5yaRzGExsbLW87yJU61hG1gRQegAryjJXuPAY9hQf6MjfBuMEfvFgyrEeFhWF4chwKtopz62cBTHs",
  "key12": "K5uVDT8pFP7BxN1mD3xjX1WV3n2YLEDcLvcrAM1MypwcMg79sYPHNwMbmpqijGLzQ6C3MjeaExWDjn1yUEXzcZT",
  "key13": "2HhHH8QKgX7iDk1NwDhpbnJfq4cpfZ67aqMJ3QKSEUhW1k1kFE8Qg5h81NxP2hmMaPmq2AVsjR3gpKucKG1wum7x",
  "key14": "52MTt4sxeDeDRoRanUCHX5XNV5ECrFf2iMyheWCgbH2QS8E5wqv8YpZCJzaABgWGYznFXM5iht9QvxTxexJ4PCBi",
  "key15": "8C5QNjnJmfhUrLEK1pAyos8CGX4vZqszWqnYxZw6f6XgpAmSGsZbT8ZH5163EQhPifXDY2p7GoTgjpafkXw14hs",
  "key16": "4D83R7QxTUzVHNdraUqXPtnDZyfewJnYDKtuVca6gch2a4oS4CzE5ojVxVuTAgpbWyi8FCgBsyMq1JTG1qsBaG3Y",
  "key17": "48GNk5Tcn5PzQWwdi9sFyhzaQpen9Pj28EHhmuw78t4neiaQ3J8En68AHk97bf2LT3EhE357SEN7tnb3XsrnARwa",
  "key18": "3rpYnTevQHe9rvsKhm2s1Eqy3hQtD6eQVXmW5mxQq6snagh8KxZU5NzmsPK4T1UJ5DZL8SrBkfhJGWTaH81FzEy7",
  "key19": "VLRq5Ym96F3w43ym6dW1oZqq3GranMa8JbQNCrbXnAUyaMLifjEqm4617vuTWxvmjaSEapewYQtLgvxyo5r7XoL",
  "key20": "bXUPsK5HmUP5LQT67SmRJAqVzeJvUuBpctRDw6RhfrpTYiuowNdYPXKyojLtw9nwirnanmNuNJiuGcn7mYcfcD7",
  "key21": "5SUk8pxUp7kaAmRXheTDuaJRBfeCtiairZCHx8buE1gfwsH81NmtvYmJeASy7jjRvMcuEKiCPEnhz2ceV6qquRUQ",
  "key22": "2jZk6rjtujjx8CPDShVD6hasD7TSGhJJj4L4eKAY4uHod2ipU7stv5e1vRm4qMYY1G4dCMPWnd1aYXekYE53ifyE",
  "key23": "2GdEnW6eUhY7LCJGxshAp9W73APTqU3DHrvuynUDwbBSzYtEnNWARYDpLHX35KE1yeNqbTUwi54F4dBTGTa8SLCY",
  "key24": "4UGEuW9o3HSu6QwUQueBuiXAqdkCv14ewKWCGsuwvn1NHAgmHXuNVr9Dh4RsXPVuR9rm4StFxWrHLv1XNjgyqoqG",
  "key25": "2xRoneRuH7Uwbw8gtoZyX7EGthLgVwBkDqFqiiWxkJjhvZDKz1sqG3LFAXiT2Bi37gzZWs7RnxMYQ43HWEQM7hXL",
  "key26": "428KVTsJxWt9z5sfJsHgKkFYrdQ2yWD9qBeCwCK7qmww4NfUWrMAUPUKuUtkrKxTpkd6BuVYWpzArhYWhaA1rLim",
  "key27": "5j2YhTnf8wT8RoJAWSvbU9xseZtwP6Ts7Kbsi4D7tnQoskk5xvWy3LvgQQ5neQP7PwScTq3ZTxy731nsvRpk37fE",
  "key28": "48dwr7zSpeumpfwTZsriFsHHKxitpf9ngsw45MKJZPeRQ4LT5SeNRwVM94tp5w8snWkw71WeGPyBg4F3HwqLuqMN",
  "key29": "2PjyJKkmsunpwhfmM1uBXyvRNugT97DkkLFHSKwSMwKWxpkFj4osUctMRWFLLtBEScQbLTYentsmPYMLQqVyxMnV",
  "key30": "mMwUepeSv76ZRJrsfV1BPtGsiMfgLQAmNdVgeRAnDM6qnBZn8xBdq7w55EjMNRvJQ2q1ycKbjuqEWEZv7xTaZRn",
  "key31": "514QrbqJsoPkvb6eN6bSfAPWfot6o9SoRM1HazSA7TQhP7sZtDuXoVEQAEMiGvx59jV2RzWfdMgLBCnWrgc1jfVx",
  "key32": "64PVDeBdqGdGbTCuU3N9mmp38eHnzBCccE15hotcLkUw6N9pofbXByGBLVJaBnVeME5PgSy5rx8xPTCizcKvH8V2",
  "key33": "3n3hz3EBCQ8Hvn8KQknrxCEDeBLWkBcTC7ippKrYfyeHjdAhvJBpCFD82JJqwpvK4dzdrp2rCqTBFU4kETyk6M79",
  "key34": "uuQmN31tdxZUTMXtPEW62YHGQ8cZkRMomJnqTFJh7UxTyqqoMtbm82Nkq7sDLZRiQMwin9URVkTnHHueCZtPoyA"
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

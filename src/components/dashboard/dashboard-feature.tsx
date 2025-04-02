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
    "4o6xW8z7agaFzyA2c4m9W7RF4zAnnDUVzRVvvqgAHgNsL9k197w5DWWgGRkp39AfysMWb4FAABXWSRjSGgCCE6EE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UkujdQMU3P5naZ76FmBcLofTxqr2t4VZX4ASvaSFT7ugihaRk9ZCBtUunzdAG8CN33xJWLKAtprDxSoLfgsz5oH",
  "key1": "3ucDM4Dg2D9H2RKPJCD8gEa3qtg7WRkxZeaePGfs8LdAW9DPtd1Xh9dTa5omhGZ1gZwhbdu1HpUkXv2KdmASw2Fd",
  "key2": "3EQSpk1jMCRRfmEkfi9K7JYvScavVty89KutJRrufZqidnEZcAgNRNRh8XV87GWtzVryoakHwheRs9TZt7Fkqppn",
  "key3": "29aBALyWG7trhQciE3nHLLYhTctzytZP9i2ttyKw4wAM4Wq86hWDkioNJuA8Hz8mCTURSH3hsAVABFnNc7zPXe7Q",
  "key4": "2mfa6K7dqKRPyv464i4K16DPosxuJAppTt7NUkT18uJcth7YF5qYNHEDhgWc3a9ouTRLE7QmtBHf4NUW9DXxgjxD",
  "key5": "5xfP1SgRMDBYiivfXbagTf16YDUvRPeyPMkk1K6XhR8gYZRTscsTxhMSBCEvgytuZbJRktck9YBRTRgJRHKFMnDp",
  "key6": "3QjpkWZAvpTa3AAuR5HGDsmvVbFvuhXbcFMnXuFdga7RqKyHMC2hTimp9Pj6CGKZdnjpdCjwRsYxxaz3ZFEfyb8R",
  "key7": "58mFrWQFdUoHNQtRYe67hqW5X3AdamZZZhhPWMb3s2p8W11vfMQXEUPV3prAKgrXbuRm36263bd4SA5ufhp727wA",
  "key8": "21GtS1FCF4tjHTXGiFDuKPBL7uuzzdVEiyfzZwvEQqx2TFXzSaQxxuJJotxxeymJyYezTv5NNC44EgiJXQEt1LwJ",
  "key9": "5c6uQuMy2yUodJtX5t8z9N6ixxRmdhRL5BjmrWaAbQwCssauQQdjGEAsGE22hVrZ5nRLv7bSh39Vm7RqjCQQGhqj",
  "key10": "2BJG1s8kKVoKjBQqeusVNBwR2Re4aL416B4erRKCzo12ykHKXfLQKRxdTv99RbuoP1RBTWhxxz6n5HVFccEV5yck",
  "key11": "ygMrtADYdcEjksn8Z2rCvNHC5ScTDe2DjjmQT5Tzbw9mozkyESMoUsE4nd4pq7PsaYB7bu82jfg4Qhu2CafD3kW",
  "key12": "4SAJxw3cRo67eA27uPeWXfJ68iNG7e6TQ1nz7vQSHJhjobc6BwtCjfrpbqzuyDA5SdNNFXZDCmQyvkGFX4ERvohb",
  "key13": "4bdy6WwunSekVuZ5S98FSv1GNUwfcosvjLXF8YSzUA7uK2sJgKUkeLo8KQPm4upjkkjA4TS6WLVc9xqELnyA7P9J",
  "key14": "3gdxbnudoMZ5P7c35yi2Mm5epJCBLyqcUDiMwNCy7axwTTab8rK1pd1fUF97k6NoLmCBwbkdESfJjMejgrgG7JEA",
  "key15": "5rKBtxZxrTpFVKtCD3zwnHGYxNbxoJY29K2PSt1et3LxAX98A58D8XqQofFQDGUEeRWFR4Y4UHhTwu2d7qtPjzSL",
  "key16": "2pjPwksDcXEhEDFHfL9Y88cdonrDJw7mJY87vLhHT8QdhoPrVCnBKqx41XAen7oAH49zERWakadPLxVxoDGSEX2i",
  "key17": "2kc5Jc6eMam9gYxQNddnu2oDNSgX2JUXpGAwrkuz33SgzithJfC7bQBk2KCpZLmNqTV77wB4STmTxayKk73gpJ8M",
  "key18": "dN2yu7rUQQVz52Y4c2GxvqJrkqd8Cc4NamQabs8FDLMgTBFEe7SyFxjRykBuFUoJkhwAcfhsK9nuTeQRRvb3Dha",
  "key19": "Mr7Ti9BvE8QyG18d872hkXESfGZThe23qtEJetFKNwfioVNs3r1MqmyirsYMDr8SBjX3v5dntb52bHAyovMRa6x",
  "key20": "2tiJDwL6Xs6q4zLULk7nqzoHTtu1Q7bjchjTFnZV99ik86b85gUafhd5xDcNM5tb2QL6vtYMwsbzLTcfVk3sBvZm",
  "key21": "4R3UHqQiWDfKdrhNcV43SvrRxuKUBCRWmwVxvozvR6vvEoz1Gqrf5MhB8C7vrfZjZYgpffsaoDtCHFcfEzg3gm1i",
  "key22": "4KwHWRCKHm4bBTNSR2fvTgeCC73KCDZfuUWPj3dnUMfwp9uiGEqwTkGa4dDX8rsF4Tq1zUyssLCxLhYVYhN56b9V",
  "key23": "sS8FNbdZZFJuM3Q87GthQWksJBWeT64ZtjsvfUZVRbrNmJFYusEpAqHkE9Pr3vn4or5686NNkim8uK3e6SLgGHD",
  "key24": "4aQqjEqHLREwfGuR98LYGDbGWh7GQTLa4a7mBNeKk1APsXozCqMUofCBXjE5rzGDjp3PtEZPR1Cw4JMBR17FCynr",
  "key25": "2WHobamXhVQXg16k5SBm8tiEzKKX83HZMZaACftph4rA29jDycefsRSKJcnqTZkBStxx7JDNAvPDr8iTHEvXtaSz",
  "key26": "kQ7pmkfMS4TTy8vDiGu1MBCc37f6U35GcdChdnH5r1ax71inNCA6vYjLRsMm7t3xM6aa8TXEn32oXzbaYetCmQs",
  "key27": "2fiXpnb8VJr7JzjKT5i9WsE39tjaMs6jwoZaPCf8Z31jWVmM5hKyWPRzXQfV7GZBysQHZSRrWkjK9izkV7qzxtB1",
  "key28": "Mo8iEgZEoQKwSdWXmqcR37Urq91hXSMH5BpmrVu29QGjzu4j8B7d6b8VDYcikMZZPWmeCU42fjgGuwYnmwnsD8b",
  "key29": "3NEknWaX4ktmJdaWz2emCcEPZvwCfg3wBTvoSv4zZ2x1x9JVJ5YPniWCAsHe9aNJymP2rcdct2ceZbE6FRao1FAh",
  "key30": "5fjaXH9WtYhU7V35rF6HWJi7TFyPeowtAtQRMzjs35DSHJn5SqVCrapWWP7uvHcmxhZK9Ptx1Z7Kty7wi4yeWbJV"
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

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
    "5mb63mcZiKDjno5G2iymPqLtA6icbDvqdCV6QxqxHoVE7sECkXT7QeeaLLsWc7ELRemRqRcraJMwt1FS75BBwGvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51u3JmtHSdBWCNqPd5mTZd7srVJ8326Z4zg4K3CF2625WnJSNgAkRFrQ5Q3KaGAjCRwMwLgAdyGopJz16hxigZ2Z",
  "key1": "4JPwTUzUKvjNoAkhtnSfidpdEH74KqSGjnJwYMwmUeT7yLGFBstXi54YtPrrTbMEHe9jxAgWE8fNpziSc12PwKBt",
  "key2": "3zWHfPSByzL3h87q1scLCuMLaGpzQgpe7ZgSXhAVwRGPpoyeioRxeATEhpCbUEVGue1vyJvTSaY9hd9RPC9dbtLe",
  "key3": "3fHxvVgW5XYJWVGGoD3vucwrXNfqUFcbakV1jgWGGCBpx1pL7Pamp29G2noZLyPuTHGCFNdDZoSYYyhfFhdcjeWi",
  "key4": "4okvMGryzVZ8RqnxepRhJGWnTMvmgajsHgggAUW2W2trdtqX1yysjVwtodXHqKWymJpt4f9WfVHNYkTD4a9VX3DT",
  "key5": "2iFf8aV8mq1QRjViCyhzfBQf6eiwXeavEFKRwYkib8oysYEq4Jw9YgUU1hvzctp391n56Rg7LW3JgntckorxzkKr",
  "key6": "mUV7PCJBbxfwYv3B7s5xyVDNvibXdbdF279iW8iBQ6tfSUBKPbaBChLjK73tnkzX5zN3XY4JThkQheZDrzzSy8Z",
  "key7": "3YUQnQ1abcFKBAT33dZdQZZREkpmFLBbkXM2eZj1A2mjuSnSNZX2kuWuqrfbgjeFsm5Ri5K1g4Uvhcc57HnogW56",
  "key8": "61b9jhgpeCP9DREmJP8P1c37BFqUwxA4ea2HfBY2o6HG8eESfzzb9TvbtVdhaqcYMcNryY7oyDKvbFp19qCBrBWQ",
  "key9": "3TudekQdvWxrGryapAECYmLtxKdoHY9HF9aevJ2TDMLYctJXW3jV4MhkeohUBweX6cQeYU7rpZm3wjd5S38ehB8a",
  "key10": "3Ss1LgRuErveh3sW1fgVaRVtK4UnBYhok3j4CSinfaV1EPs3QQR9H4NbZHMY49aLuaS67FhJuDebizQStJHSqMLv",
  "key11": "5JjuUy81uu5VFpWd4gGNHoYdYacHVFWCq1crzr8eY4C1QmG4hM5sz8Cif8V3u1h2TMCTPEAqA2sWEYfTr8oVg6cQ",
  "key12": "2qNsueM1THKXCWiu4ikLjcWgWdjSF7KK6kGjSNbuzQWrJfPu1eubL7bwcGp4SDs7FnfGbBPZTZFf1WpsJsSNibL4",
  "key13": "2rxXffsDm4DpEScNTaaLtNPB55E5oiGZEJcfaxKzyqaxjtqFEkzvc7SA35P2vBCzmTJSLKgT8Maiq8dUihLkjUka",
  "key14": "1aVDWCHHaSdsr3cN3m4y6MT4MErgJoJtMcPm5DxRSdAQzzA7hjgSSZsZxsg1qXcLktdLX3hWkjuYLF9kbBjV58y",
  "key15": "2HbbmqYxFFK2TTz2XXFeuFkUqZHfM7QnqwgabMTZRG9yjJC7BsGcr72BAqKJgiLMsGijFs2vsSk4CY4yTCPw9iuB",
  "key16": "4q2E97anHhChrjc3sSFaaUr2TVLhandyFbAtrKp2HTa9FFVQuKKBKjVb5vM8jtxREiZxQAcu9sy5PdzMBYx2p7us",
  "key17": "24k9J2qs1CjzPhACbfgrSHuATB9TLFs2vfDy4mLukY3eMUr8k1cW89NNqoUfhvJsspewhcy4n4a5MqNjQUAY5Ukt",
  "key18": "7e3TQid32fGWhV4fZaGzMGZwkxdnCjPKbS72EPoGaFgD8cpgPyqFMmWP5wYJMUikgAK5ZmbSgQ9FwvycvLNo5xm",
  "key19": "5pTmccsfcEheR8Cqz9LnVeSoBFZd1oZTziNC3nV4ByBfJoiDPTHuq5jZNhp6HJejLXdyRZ8mwQGPAozfV9HDDH3q",
  "key20": "49N6e9q7E16rqFoMEeXk49AiFjQKC3eMhjgHGF94eBT3DBPtmJ4myTy2Y2STTpzV8SbFWR3bsUTJh4bEcWg7DJen",
  "key21": "3gdcWkRc4Vnu6MSBWG9eoNtyeQyPjmLEUuEyA5kqzHn5oNN7bS7nkiXS8ZDivvEiZyoSKtwuDtrN4XJX4hVvGBS7",
  "key22": "5roYERrW5b9JigUcVnCq5xbwKo7MQJrqzXPQwaP2LGrSbnc7Arfu3teUR7d5coauttoddzmwx877aBovVREdCJzg",
  "key23": "iRywrUm4X2Rb4YCqVcTJNnZRBDTKfxRhhAq1QnmmFteXUtsuw8RZvhxzRsiMczVUTaE6CMGYz2cq7UNB4cSEcb1",
  "key24": "2P4FWYjnt8MxxbnZVs4d7UgirZ2XdWpR7xxtR27ugYG7c11GwY7hGoDs7uAKHC89Q6LdRWmfjmLg1jxVaUoGRjBj",
  "key25": "3KcgPX3KSSe4DXqdfSKJ2nz3xhLq9ovqgjY5bTvaqP2Z6F1QYADYBnjmdLqcXTnsdrVc6RwHXnYgDLCgLGa4FvF2",
  "key26": "2HPt33iPj5XRBCZdHLxEVDRZVXaFBoC2XQDZW1jiuXzAPjDZcRVXsbCmBGw3uK5HsZH7KLozLvTXXwbf6Uxa3Kn5",
  "key27": "2sKPSzjdWZgyMkBQezBW2jwdgiUKXUumdJrfVVwDn1fJXqZp49Kvm6KRPqZMwEYL7v2PrkSA9i1WE5Xf9ie8P2bm",
  "key28": "2qQwfHG3tRrzhzjLNNojybAzAo93eta8uigPFf6H2xY7hKyf7tA18fQDVaEPVARrrewMGrhBp8Wm7sot2Hz37MTR",
  "key29": "38e8Z81PbWvfgwBQp9jJ4tppLzZBzw8a5aMBtwd7wscFBbSX9tp5UJVkNKptM4qu5DR7q7aseGsV75uMk5WGs6gu"
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

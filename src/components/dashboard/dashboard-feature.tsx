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
    "3osDFH9UPMR3McgEMGUYcwygnh86sYfqtH1vGPm8bSoK75SAenQ1nebtZkZeVcp56im7S7ZGf7YC74W3zpj2rGon"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UcmCCWX64LwWCNdRcQFdVxC4UYiTkKWMuzqto32M3gLdesTKAhfHdX6uoRGseRMJyAa83zRR4pMNVffhJmQma4p",
  "key1": "5LR1Gs12y2rLwTKuojMARKNK7tP4EufUXbw4PTo3phZ6cTqaQvDmcKPX4NBUigzomnjGwQpccAZvYcu6BMtDuV3y",
  "key2": "4pDgaHAPeapV83gLgbzyFCshhAwmDiW9yeefpUmZqSEYyPZ5cB5CtFWJPcU3W1Aw2szd1FSMJMkgvbme2E16Mk3d",
  "key3": "3Vfwnf3YaNvYUNyFLWgAUNcWCmmGNsmEvhQd4PNbQsxFXjT9mMHiAupRwFtQH4LaKsBgAvm3AK2ecJQjxepuknUW",
  "key4": "5jNH8F8JtLmyYpLVbxHd3Az33WdpofV9RdJZ6ev9o3WoBAn5Z16RZEmhz8V654rUzMzbidTa9wVQHiYv5PBGzQGk",
  "key5": "2zWCFx8yLKXNFFKxmRC3FtGUzNGRBgy6xRS74PFH6JbeYm4U4nozGnAvzrBmN7beJ51BoaihV7Qg7Fu88fihchWs",
  "key6": "27aNHLeLyXcSS7VUa5RfgZGJZ52Vny9zn2ptA3Coghhqz3N6N77u8WMCsRmfh3o5hr39iXyf3hSXADTSJGgmVeZA",
  "key7": "MKt9fDfGCtiZajxDzRAwCiVXsaAybsDyj9U2A5qHkY2QndY79eoWHkWo1En8YFYovsiMvZHbUHMMZ5wEgJpjf5q",
  "key8": "5D96nqPugx1KkXf8kBSgU33CQVZAPNe4CunGjpbPGJomY7doDnCuM6trwARZQpreLLgTEQzf4tj4SSjgcjXJGrQ2",
  "key9": "xK8FfRyyM1M7PE98TfscF68EWpbVs9J6HN3mQdSWfyyYKPstS6PSgc7ZVLUZxd4QDK5ZdCZLeSeHnqRPeZPj2vR",
  "key10": "nsrimVoePvsQK5ZHeD3R7xUAQVNskekXbhc1UeoRNx1jqLBYvCx7cJQzrNs6SZvLgYnZabc9RKgenp8W1bwvxaB",
  "key11": "3ngXE1ReZzqv6rE8egpoTxyT8bAtdXBCBWZnDgUef1o3Y9HRoEBTej5nDj3h5seGVhNYdWawwgTuu1GL7rXRu9c8",
  "key12": "AxNN87Lq8bhuhzV6xtyJN31Sp5wKEGk6KMKuhLz3jUKUacjtdSr8iL6QjekzQpzJKbvv6QmPQs42AAwRk25bE5h",
  "key13": "jJd6TW9fFtdQarQnAqoj4cSmNLbq68HrcyBhRQBGz7Cg8fhVnFqy611vTpGTmodij4xwspDpP6mCac4tHPuZMnp",
  "key14": "58m4rE5s81VAnDePn8sytyBHDK3DmBNMfET8TTdGujTMwq1hnA42v8gLjCsxiLC8vLY1xzKdmWMjNRMmkUF3QEW4",
  "key15": "2TYVgKaSApRwEiRNfjNBiaPgt1sG7113XbS4sKTZRM3bNFRw3Hnsgy3PXKzWdcg1wmAaJC9bVb4b27iwCL5wbeU4",
  "key16": "49roZW48MEqv1j8HcTJXJsb3AJatQxLNdmuEqktrwdTbp8CWqEbZmA5DADctrTerRFDZrzawEHaCPzT87GhYcCFR",
  "key17": "3Zz6Jhhk8xHuFwfmVAWWs7hJqbyxezvYo5QqC98AQxu8mdAcoy83CYHfakAbu2BHriAU7tU3MAmDvbr6qUa3SeSK",
  "key18": "3xM4FsMyunzRjcTLkaXUgBMzsBn15Nez1o6T2DMPCZVftXQ5aDaeE2N8PrGtgdKX8wCsfpLKUThrK6iefbxWK3wX",
  "key19": "3kKeCVnfvW2RKEeZp5RX9xVfFT55HGykyjAPjeYqHmUzdkQNCerTTjGp1nh2sLfcHccnRyjgbqzZ4gV2hKdS5HaP",
  "key20": "43baJQj8kLGkgMdh28WDnRRYk3T6A4s2Zok9jnaQFr5BCKoQ4fa1SDvHxSSpsc82FJSaYk56QqaSXkAyHxU9KVjZ",
  "key21": "3H9kW9YwZuegDiwDuHagjTosRNBE1uJcJehuMUzWP25Xqcc1Cm9nacEXXmhbsttPoSkRPx3riW4aSdY5cQXcuJqA",
  "key22": "3rnssMs6fUSTW8L3cxqyH2pNPajTJLNDEtbcqUC7Bz6GFfYpZBykG5YURKspA14uVr34cMMsrYkt9pSTknPqGDrV",
  "key23": "6sgxRLaDKBPDkNRtS2s9fjnca1ZGihXQMh6g7SYc166RZ94SaF399HSLPfpMnP6YmfsRziGF8Sy1vYpDQgEaEec",
  "key24": "4cqj85hswnW8CGPk2ydyPHPLvHwK6zyotrG4TjtxQin4ZRg2vivUGAhbhFZFVjSgZpuZVEQGLj6qAmhrjEHMTvsB"
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

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
    "3pQQ4Uudh2KiLsHpkvJBaSDUwot8QNm4W3jCYnPVzU2fvb6jKBeWNDmp7obSfHzW2vfkGbgDP7syB1VjwpEXcWD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36PsF1ewakwuudoB6rrY5oymM3TE8iaeDQdma9nDeFHGpwe9FXr2SqafqDgNaR8XL4Spiam7pCEJGLtjzNcjGHgT",
  "key1": "65MXLZZ1rit11DEtdHgmnr51YpEuEtanQJbrEFSxqFT7Z2yMk9k1Y8rGCsoCC57m324pqm6jJwcFLjrkLw7WMHiW",
  "key2": "58RFSdWEL7k6Wjr3ainJrLqFkefWV9Y6kafYGar6S99dgqMHqDXPjSWui2xijCv2b4paBUj3AqnAbyVGPuK12UsZ",
  "key3": "3EFqgEBnBhMBv1A6MN99tmixB8rayRPumSyehMpi6Q8JeRvyExHDF2LsXtgXtLaH2pabJLT6LnyTKCJQrdTY7KVu",
  "key4": "47sAbmRkuN6aTfWmbrcdgEnvu4BYPeqUJVTtRindD9Pxg953EdERxXYzf3GNVVc3iKQfUBudmRdgQ7F6fqUAHtcm",
  "key5": "3Jb3r7EWPvAYyRcMHFgjjQHNQoKxuRc3FxyhEzPTyzHA9B7MzMG6xxJ5u7epm1rz76oXUZPUSqpLBT3EZ1E8jFBB",
  "key6": "NVL33oqJrbN1pTQPxSCkKa6LDLh3kKzVfJDad6UCmS4gcr935y5xVpMmvQAHvQwkswxEQQEAPHdgFgCnSKsbHtD",
  "key7": "3imUzNdqJtAwJ2HK8uuan5G5e4MNQaFtN45wM1qcPKqoGCTJE8pPPxjus1B8KTytXRLWFVbHiDVAjeiwb9fUBjFT",
  "key8": "5Y8TsGgQTuuSt5dEWARt37zKPP2agYfDVMyKs7fXCanHVTLnCA71pZwXs6NBcftohKVY4RRyANUBArAxxcaAJ3Zy",
  "key9": "2fBAaT4NnG4QJp9ZMjeJfqPA6EXJdoTyi2AzBxYkketsaqAH5Vo5jjpYzfyEiTgjpNhFzHYygd6XKdFXo4cbULq9",
  "key10": "QDsKkrNFtimh7z23zRMJau157qYYhwTFRuMr8CYvEQwDsiMGnKxCWZnzCci1PKid1o1xyWhBXFnyBuza72esdkL",
  "key11": "4UYkKWcRvw3XCKtkmot6xBhdPfcDFaUdqbDXfGfPAh9po184SLTe4ibiT8AgdF5KhiU6a4gDgxbQKF4J7niXWprR",
  "key12": "661GWkaAV2z2pbtoz6nmBhHq7bWT8nBtRgZ9LYVw3TEcaiubFdQJcuh38hHLNkZsNvYUDGvcQqLP2pUfsEEkWots",
  "key13": "hLwM1WsKhzEcg9Jhg9B5YgMV63E7DeV9CKHajGKQTCBovK7Lr63qD9VrAE9kAGVLMDukjZvSacDbkRGdovro9G5",
  "key14": "2JFtbtcTyBw9B9PgbQ5CNCMAjmNWwTEfQbQMCtjnjSmpNbjVgw7KbPiDJx6fCpq1ACVannjt499c6TDAEDuB2ArV",
  "key15": "EY7ifW7ywQpsD75c2CjixKBUtiLQqRqNjvaQFBhitHm1BybMxgNDYthDYSM4YnTNFzjJBCPHx2Rd1m37EB3pJH8",
  "key16": "3NET9FkbXgZHJDeDHMYU9LoeQNMW1EPDzJzhp1fbKvjeep4JD37bxAZ9XMKHFusdA97c9pYom6ty5NTV4YJPrGWv",
  "key17": "5Qi28X8rbf1TsFtLyjoUNAqfQ8htJmL8jF6fAfbQ6bMAzSbHhUXLBrZXCDsy98vdTK5k7ACw9cwCj31uwNFb67pU",
  "key18": "3nsFcbJZ9hj2au2EMDDQDQTEir9tXdw9FGxUQp7DHxFD6oRKrFydnfYFMhL6XmzJ4HFnN6pUX1KiXxtmzmERXJC2",
  "key19": "3A3kYcUmhjCt3Ae7TT3rAApJ93X1a9uXVZntcuzrsyvEcsSkqzjxrsJLxTLYQJLX3etzB3zCHcVN5Z8zoSvvPrXC",
  "key20": "4szWzez8kf7T7XUgU75TBCMQFsLX9mHvDJyv9RYaQaGEJDR1CccP4moCrA6ySXVQAZGc2FwojKuKhkKgLF96rttA",
  "key21": "3DbriNqCABuk4ib7Ts1iVwmSyxDbhAJQXqeKz3QXZioruAvhemtZzpjpp2S65w3E1XpuZ3swQTNPi5M2aHrGPS3v",
  "key22": "2D9oTcDfbZCCLfvVmFWkJxQc54fspZgEoUWCpGXh9mpTMNU6eTKC7btGdAM38Fkt7bfaTLX77ttk2Ej2mq5axKeA",
  "key23": "21C3TbznTVKAExriZTps95ZCx98WvyyW5hsLawCDAzK52vS44Dwe6wJip9TpuyHyFBJfarPTtQxpoSdpxvduoykA",
  "key24": "4kvkiACBBoWb9g9HjMuTz2ZKSd7D8Z9R39P4EVVXKWFFWLs4VbNr5KcUV6Wd4kDo6GxLFhuE4FSsdtvgLX1rZz6a",
  "key25": "2D6qsfSkPhPcQbL8tRDm7oQyjiawqUYkn5GsSuotBiY7QrbeJDAcBFF4boTw28ZYpK6AeXUSwNvN9Z2KdNkHB2SP"
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

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
    "4Pd5wCt2b9UgfG9jE4eassK5WTF6CDdfx9SG3Xras39oDzv14LZrDmy4wo8yu9bDega4g2JsArFXe9atxCF7k8RS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61gGGQ7bwX3aR23mT1X8McwH4it279ToymCJZDmi5rRwtN6bkDz6cavMTwDfm9WsjaWCA4i2pM4ja1vtMHM4TCBH",
  "key1": "5DMp9Y5G8Vdt99TdAgos2ckd8MzwAsAPcz8xeEK5HPdyqzV68iH1Jwnsk2HCEnxkSrg7AJ2XzAA5hBbmNDqpJU6C",
  "key2": "2TMmpfuZMGwkFC9pioqoQDQp56og5jZQdXxkMb78JBzNZQ5HbZWuEPda741bjUHFCVk43N9C3pMEzixTs2iTDcU9",
  "key3": "2u4Cg5NTJbAsWw4fXPY8FjvH67ks8Ldu2tSw96dJN4rLohPZjPWUcitkT3LD7BonRF277RxmTHdVJd1xab37DvhY",
  "key4": "Y1ndghp2VLTQub9E9JFVZRpohELGzWwqnokpqQzZtvCh6WBxWBjD3V5nnZ1GijSvvPYykuKw8FXuwZ7jRB8prEp",
  "key5": "2NzW9PLKCxBA47zub6br7fmoihWxrNTeQVNZ9ZKfK6Gin93N92RPCBTkPYEyivzqbbAJQphW7eUEUW9FTcnaPdHA",
  "key6": "5dRNiUR4oGJfi74mhzaGHkWHCSAHfRiV9jaCq5yE5xFiCAgfPZPNz9C1yDwBciGPXxpgL1mkZMfu34WaDQHPTiYv",
  "key7": "qRrki6JpFgJhcV8w6fmiRf5fqFBg2RhcfQ4nDjRBmngVhi7AZ1Bg4xQUE3bjLChX31eoZe5izQ6RxDWEbWsWYzD",
  "key8": "3ZCTdRLtuVfakmZDPAE9BHb5T6YrT2XkQzwtyCRqWyWEDCDhrLeGsy118NbRRk6GcuUTiLxzYLEHLDvcDa2MN4E3",
  "key9": "2td3YdbTVzsnWmAPSkghA4aDnxpEWum6Jc9hU7TeE6ggLQimVABaXgtGBRHjhJ9DUAJYXfCugnHN39w3wNzrj8oy",
  "key10": "5AVVip9BP8XxugpkUgFE3GmdsTbgbx9Dpwq1SY3X52hLMd6S42d8Usw6UsUNX91YDbxDL96nyFy1AFx3SCFwnUTe",
  "key11": "5SxGnK2JkWuEDZ8FWFADAX5spnL8z1WgMt7eR4SGXTTe9sEQ4FHaUJDyaroet1efAETMcfgAmqu2SLrHV84khMQc",
  "key12": "3RYa9TUX11V2RJb16hhBrteYHR5XLi3e3XW2RSin6U32bcjnn1rxRw4jYwM5izYjYytuhukXg6xTT54VtQhNRjpq",
  "key13": "3RHtaEnzgn89M4aC7YmjtsA8Bh3MCxe7iLV7nKGycUUWJGQ4PskGwxWFqJopcU53FJ88MF1TurwswkCsjLQwKKZm",
  "key14": "678jKQtDsiMphnRUs98BkY7VJSQJqnvRksMpf33nt3MiZiqrve6m92iKGk8TVwZrmLPzBvuDSpr5zW7oDJQjn7zj",
  "key15": "66PG3Wh3q1c4bybkgDbx1uLxhssLj26TMbawAfV7zu1Ff6UXh4VaSAjaiBu1Zo3K4k7UoXNwJEsVmYSCj4yY5WpF",
  "key16": "rKsPp31E7a6MH78fRG4UtihcXxRkFw4Tmn5YQ6uR3pTe3FfKX3em4S5DHjrm75ScZtPrgxwwLGG7csKu65pmWy6",
  "key17": "3REVFSXrXbVnHSKHSrEro2h3YRaotSguMyC6p4Ee4BkohPebvP58L7DWUwDRZ1EJjFTe7hznFaqDJ8SannnwBJoJ",
  "key18": "4uRpyEyWwnw8jvjC63pxrQpMCkJXjigwbnr13McHQXQ4JBQJ4YARrX6NPKm68oJ83uP3knTLP4dE4gT32sxiKntx",
  "key19": "5gWZVCp1yqqRjvEJWroXo4vgB3QUYh2gRNG9bHRhHvSU8ffZUVyscofiPvU5pUbBmNHip4fL23bZKnq5xrVEvkCB",
  "key20": "FNTTqoPg2BomCxQ8JPbux6xg1M2MhZDPxy12vm9AtiDKFmvCBcRX5D2HdKTJzJjD1wggTWXE8qz9ANhFcTSL7eA",
  "key21": "4HYopbVsrdv64sTVeSFa7cauLfqhnGaPpATmt36L6BREs68nJtsPHY2o1rfAXRq2L7cX91bJmvGvhLynLUPP2Uph",
  "key22": "ut16m3ybm7ZYvVFkyT55K5JvjtcHvt9nWUUNQEgfnbckQfq3Np9SZPtw5YXyGsYQBuNonABBBPArWNvRPjoS4JB",
  "key23": "mgeDNv4VUDubyCTGFu8H6gzAm4ayMpXVLspB9VGC6rpZuDA5qRL7p1g1cWSPDx9BjGWW69iz4JgP3od1mJEmRY6",
  "key24": "3f5qYbV2JZmhNUARVLQ73rn3gLdTwv2fbMmhSP4deCSTL6Bj32Qdwh6G1MUUNxWZcah6LW9aiohZkRz8YbwSdRpR",
  "key25": "43dNB9aRKnNVAFLk4EpHtU2XWGdqMRsPmxpG9LJuNJjvMBZEmsvLZTZkLvkqE8NLp44aiPW2CAC7jkY85MZWA6uF"
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

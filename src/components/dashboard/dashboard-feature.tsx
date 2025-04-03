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
    "4wYBW4pgaaVXh4MrCfkJppe5nHDU54ijJsiUHBi4Ts31NZvn476wk1ibXsxng48FEnfT9EE4jfAtooE3Z2jA8uny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nngcsPBPGtzm7sP2mhB14WtSyYsQaZaNbKir6kgBQojQdePt1NFnFxhUxPARea8edXJ273NY8XqefMcKjtseB7v",
  "key1": "2WQDGqRcvDKBxcKwXc5DLc4MeTj71YYqeG9fsKRsHYCkJ1nYpRUkGZ2Lr9ijHwYB9urHgRZfpMsGWTm3BBSiKDTY",
  "key2": "3D6dbQeJn6dcNu1wskavYhYvuwjmRJ4Mg9DSMZSR8b4a5bH22oq5sR79EQNtVSwjaMaRYjaZae9BEvj5U6GirZt9",
  "key3": "4RGq3kbSCcRX3z8kntvRHbuBAiqHXT7y9bdcBk1vK9ETpc9aXqiMpRYZsXZBUCQhX2CVExGFi8j5J93PL3V6nY96",
  "key4": "5LhYB7hbrJWrrpYDk8NPsRfFQKb5FzVyxxM38E3o5GbcGEeQbeoeXeN51VoveREvuJjPPm9m5NVR4EsKNSKeuDJ5",
  "key5": "2pusiMTxTQZmtVbA94guHSJRrRxZN3zayCu4cfyu6AR4yvJjnPQGZr35ZNRWGkyw5KVtotQCBQ1dAAXRu3rsE5Dd",
  "key6": "9EPP1T2GWaD5WwK1f8gQhSVskyNzdzoLoHdrc6MeRqozQt7EmwheaufUzcK8PafYs2kTh7Ls9a9GBoMeoyAEJQB",
  "key7": "5aQCbTpVwzwJ5cLMAdgUTGrVKV3oibX1ACVWSaAsA8iPbpy35xuW1Cwu7EvquJgbxPpWRz5CvDKgZWMfh6sc2qsn",
  "key8": "49ExDzmGg23dNA849g7dzVWBcGxPkitFHaJDWG2Xr2z6hepLXfkZeGoSHTypEQPKZphnZbkQLQU96VW4hvMVNdD9",
  "key9": "5Z1xfmiL8g5cEUFEA68bNKBZBuULbsbzse8gBKqNSiYHM5UjBi4hYBm9ZWjrybd34tW8NZjHkZoVcDxd3xRn49uM",
  "key10": "uHKEPP6uAKTk7y4odtuQmYQfoSE8rMSt4Wombn71uVaM8PbtFYQVnRojQZeeJvNsuZErxUgNXCYUvoY1f9iJg8V",
  "key11": "2Q9cPjq7B2BBgy1ARZBKJAHTF4MfebjxtTHeLBYdgXCReBKH2LBX2hNzByipybjxKvisLn9ReAVPoVajCynY2G5w",
  "key12": "pfVR4KGaD4DJR993U7ruFQgEoaNkFEBGAstbuuGRsBSgAFSJ3VMGpbV94gPjsLqyWPMKeB6YHperbZZufwfTDDF",
  "key13": "2rnYBN9VDbwB3oqBFWnkAERSEXV3x16yTmdjV2wodLSpiWM1Db3VB2ftVuPT8fdAXXiigHQsZFoDSYUZrEcsAgiR",
  "key14": "2vWWjgJP3wi1TqZ7riaw36wE6QTgAXnToUamcvWN2ZmQNj2E2hb4Bvxi4U6TcVCH8b1qhTXXxuR9jNNQYgDdRg5E",
  "key15": "2uVwKSVv65a2jEZZuLtChZBPTUP97FgzqS91RJAwbSEPxgwmmUbPbsbCN7NwiY35nrw1XCBDqh2JC7P1TVzTq7G6",
  "key16": "2Rk3tiYqFiN4oCHW1pab1gF3SqhfVb3af5TKYJp6JZRqqx994MaxS4BUcEyyNEmacj1kNGJryNwx77PzcCFdsnD8",
  "key17": "5LvW6wT2Pm1cVxmqWPhMgVKowiTXZQA8qxtMykdvieNP9pG2Vc9Y2JVYJjZ2u9i2brc5hrpxptKynxSHAgxQY6NG",
  "key18": "4diueNZ8n5aLnbF8DopP446GazrgxCwj5fDxexxgqpWLVrqWhiyY3Cvg2tx7NYu7kMtQvsXAeJcQBxVcCQLwsTKy",
  "key19": "4fBbXXxuUxHR79su68VnNiZTN7Phad2Pef9RjSVTzgC66zWbhKfpHfnYkTNq84YGoRE3qSZLVKuKP9KQgBtNiU95",
  "key20": "4vEnf7Z55UKJG3Wnyg5zMS4hhzx5psmEwUSyfy1t7ZCC8WmAdj4CHwQxjcGTa82UrvP9svzVgToSYg71TELZ7qP2",
  "key21": "5DBx9x3DgVZgNUohyLgp1tSXpEXTUu5HKENrprwhzrFTsurVR99gKN7ApCDXCNmCrmtNveZSsLKGtZstFse2WRu9",
  "key22": "BQrqCz6XGLUhzukT45pJxerDGdWuEuCcpApHaS1BYFih3KRU2uGsCPrkwbx1k1oMDdZzNXmjHTf5cysvYtjNycz",
  "key23": "4CdntkPj6ZwavkzsP99Z3srRvv6GK18cqf4c4ocjaRW1XbfNGCeZXsi45Qms8v2NehX1RvB3Kp4vqFv37NP9tv3",
  "key24": "41YzA4KYs5iGopx8sA3iaH22nwB1KsebYBsShyq58FWjSi29BLQ76faG93N9hZCFsXuNZeMrZd4rmsHEQTXkTLBQ",
  "key25": "22njFS3WzKv9GLiXwsifYg5SkCLMSi9VJpPWHYALxUyUy6espefCJLadCXtXMdXfYUenHuLxwAsPMxYrDi48ZQ5o",
  "key26": "5kFJBDD8N8vKWNCmpsKiZArqtGej2KjhWwkrR7eS8fQ9VkQQHaNPM5ciSS1RwL7XxcMMu1r6Xrdxx3owKvidV17M",
  "key27": "3L2ATdzDJaGQ7hEW5gyWAXCVVCk35BYRunuKdtjhhSvhnHY3TPbi89oXQcESxT6hGhdepCkKRuERt4VzMcNRm6E9"
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

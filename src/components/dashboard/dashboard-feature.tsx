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
    "2CM6BndjuJyEVnFHJPoLY6kr582zVF3xeHsZnqVPSb2v8gjgeBAP6SMokQLdAyUHex6wFQHWqBXHU9DfEWXBhpx9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N77PSPcUQqmr5msn2oD4cMexbxuujGc2bjGujpZ9eBhjDbHqWfjjbudRuhVgTVSF2tJZhvnw3HT2AXyteZfrUCE",
  "key1": "SRcyLRovJjfPr89B1C6VE5za9w92wSFuSVrykxCKv9LZUMQJwWasRvaUqfmfksXtkom6Y9HM8ohigM16nQsgzNB",
  "key2": "AYs7vfZPG7WDqE6xXPV4FZokeiZzbfyG6jb3nhnqi5zD4C4h8ViLpU7gszKPaB2p488BYy175PYLNhoUF3289Ea",
  "key3": "51Rn2WzUUUe7vdvpWBfQP6kitgtYwWyKHrLqtfznGadi4QJzN4rPwEQ6kUEibpJaGXMZ5SGv4g8GAE9zvVEQhLtb",
  "key4": "5ePveLL3kUYFjfFWJbdyToiTUKG7cyYnesDGSf3iCbKCtt7ps43AXMPsqMqhezhYJWxaEkamxwbTLDd5gmvnn3jw",
  "key5": "4NMRwro9ZpYEipZpnqSTavwzvLLV3QEFMtWGCy8xGJp2HZ7AWyukWuN9HYF3cjPqqpDcewiWKve7jd6mFvb8Zwdq",
  "key6": "iVfqwiPfaTYdQ6aPfmqBfG9azFEv4zBL2hVkhoCWhUBnRbZNJrZJF1yMMsMnS9V7g2QersSYMwBLDT47rMNrC6D",
  "key7": "54c1X5RG5BfgLS2xQRHxXoCVGL5a7pVncUPssSutCFkkYvYhaXY6hjV787vJPwcXTc5QcwnpMzyomcXnJW7GyL78",
  "key8": "3KKd1DuhCquWeHywNsCBP2ShNefMCMQUSpTHHNADU6o3j7X25xH3psWQud6Rf2fFWikpsbb9imc1NVyPL5aZEVht",
  "key9": "wdkiFriaCXXunu7SmEStXxyX8eSzpc9VdsaUTwBQsmQzp77G4mFUvBPAS4gsvQzLKu3LRK96pG78Gm5a3JRm6Pu",
  "key10": "5NZMYL5Un68KVUM4gZDDyurU122MpKbfdnrCzrL3SMAcaN7bJWrGESeQAsxw42yhz1SkTB2mLYNFmtaZUiRB8cq",
  "key11": "489qqcDDaVpsG4My8w6ksAY265uWwrZLAumEojSu4VVyk4GF4UrUySPufdertkxzpZTw57qtJafCKxppXGNFqWJr",
  "key12": "4Xfv9Vw7ciwgJ3ix5fBZfLgPSgjZTsrFUEWmitpCt7ztWKvx67uSLWPz2sUXZcJEtLfJjumZKx6eFVK2doYupLyq",
  "key13": "451ZRpTam2JK9beeLQBJutnvzxnTAEQjXB9bSysGLRXp8V85rYHTEUngR4fyuQcX8nRfnHDpq7Swb3MHDiortub8",
  "key14": "3BgXbFvGgsmCAk7XAFyHTwZQLYCU97c6cAvHxZXKMxD4PZKRYAMU1yzpeJ6wbSzkizy4EGrMwU7GfT5rqEswJ6rz",
  "key15": "4wAD86rc883GCcCHLNknnwxeZEGSssLJrUNefijbnewL9wXs5cEWM4kAEupjPmSSC4stqag4Bbp9BUf9HuzPYE6G",
  "key16": "4ef4G1MCpkvhKU3imzZPKiV9EBm2WP7uvWgiTneZfxQ6mbWiZTPWXEMmDNNQ7HhFty6n1ES9EeQZK5nPM21jwLVG",
  "key17": "67r9hJPebdwWhXPDN1J7KQBm9fmjLYboztYt3TBsE1TCU4k4EJw2SVQne9A6KLTeqWkDPAE8MpQeoiiuDZy2x47H",
  "key18": "3FtsjfD61s67PaNJHho8U14jChmnTc8Z6KrfnkNJ18qHJXDd66aGgeGRT1PRHx8VQ9Xe9JLji2H9HqxTkLKjzgA4",
  "key19": "2kqajojb58e9bra7SPEBtjrCAkyrVYnMou4kWtRWr78hRvJy8MgoHJrDH6aasPVKtV8za2yzZmYqMNqghNYBhR1g",
  "key20": "2PZPzA2X21cjNbbj3hTY1FvRwnXCFuwpr3Um34na4Hg9u4tXPXQAG5sVJBj5hk6yUaHSU57sBK7wm24ngUFRrtUc",
  "key21": "5hKv6qsbxFVTQaHomDqPJMSajwYugsiNtsMc1e579V9zcU2r1oT9SnHPX1UFoNYdaXkJFRVDKEsZtK5sKE5NVAcf",
  "key22": "26wXc27zcd6zSfYuXu9FA65PjhnArGYC4NpGkQuohtVtFTiQVoPTd2Uz4vXzYbEM1cM44gJhxG3aDhmrVPAFCr2z",
  "key23": "5LqLQtqudXdVZRNm8bbVpm6k6H4zBruXBs4yidF4hXMDjjnE1mQGUd4NpKHfRAP7eqziEBT6ALgHv9Da5c3oaojk",
  "key24": "3aC4zKHWhxhPS6rwnfcfHBpFxcsE7BpYXNPUPK8MA8BMY22zBVJGpJkVu6eYQxuHUZ7iU9B2m2SEpFWBC93CgmUS",
  "key25": "4mw2kVzWYEL86NtTC9fKs71df5quYmexdaH6C3MqzZViULnmX6mAjjrxL23hxMU3V4zifLPsA36ybAXZAYd5FFUK",
  "key26": "Nq9Xa9CuUkiz4dZHD6EFcrCWVFdj24TyTE9RpW6p4xy1ykyrhWynLVJWdLQD5vMAX7nYCnE3mRHT6knRN5HT4wm",
  "key27": "2imyjqwvfsYV5MEWb4uxLo2Y9dFoSbvKUx5ZRqfxbv5xu1LfP6vGNZ1SYR4xT2svAiVopRs2kN11Cazngc4MaRdw",
  "key28": "2ossLf6gE2M4PbG86chtkDAnrBbzuhbgD378QdMY3CEANfpQfdybr6kuC5mhyWYsSdSpmpUbAxiabgfeKBh1Ww4P",
  "key29": "48DAQoxNMDCQzzdvFMrpxB4zCfK9ShC6iJTdDNi1K81z3ddzsPMHLyJkhLw5VsVjQZdHFf7uQKBNgYW4FDnanY1M"
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

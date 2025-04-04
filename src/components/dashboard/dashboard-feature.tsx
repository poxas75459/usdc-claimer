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
    "2bwr2T5xut2gnvjSyLWi7mEKjpMJcQxo2XpmRLrqu7uy4HKdCViYP2mJeV9b4zhDKoc86F37T2HJ7pQkmQhssJ76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2junVyaeqSbwrSJRE6HHUneJSc3m11V3icMZ2qAgWD84Nb3V7ihaFBJ1qR8B9PGfoy4xf6REjjvdmWLdr3KbBwG2",
  "key1": "5ciNFyKzhPA4kaAQmXddnvCADRFK9pyTMpn2yPeGooxWavaKe7SDwfybQ9951cSvKcmHXywAud7Zh6nAscJCQxEz",
  "key2": "2a1EJbRsmWd5ksqSBcJMQKn3mT6L9mjRQ811oZh4VSJijmH3FnGoQjt9iUNYpfZWibimRapHT7bSsioABKU9PDNR",
  "key3": "jKBSs5aezg3bpnVWVnrVHX39g2ypq7pazy8Vm63pK2k6YxqwFG84Mq9xNWC7Swc4yvyzPfVVmhKNXTSa2MukJ3N",
  "key4": "4nHfQ36XNawcknMG2YZV8MksGDNbZGc1NCQq3Nk4C7d1HBQNmorjS1L8DtKfzg3R8upFy6jzv5iG4FJWGoNEsMq4",
  "key5": "BEPFydLnjdw57L1oYcaqfr8ZTS4bCNWk5LPvfYmh1f4vmDvXpkPJfjvidcdJy6w4aNoq1B5T5bwAAmpGTtN1pBB",
  "key6": "5tqTEi7xfgPViwe4YWTnYqNEZV2znENR2Y9Lm3pfn2jNBNUenAtKx58gGpm6J6m2rJrsg3U7noFr1fCd5uMi6tdD",
  "key7": "3GczGY1SLRphg58UzKg5tiDaSi4ocJxAwBzntekdJgG1ZCX3CmTDktTehp9QgF8SEf665ULBU9d26fTf5QRXWdT6",
  "key8": "3bxaSVfm9yX8ckyBeETax661Tz2x9T6JuT2PFuDscDdQvEtohieMmnn94E2hgroqSUL29YnMWdnZ16PuCLeLD1g1",
  "key9": "2Kqc3hwWmvjf1a8QZkcjiuJhmanFMwpj2k481cZYCv1qa4xUCnW1KPp85NyQvsy73UU7BWw5ic7G1bfDdFZSonnu",
  "key10": "qBzFZiu5wLhbGuRU6cuqHyV2Wn11BdWhXcVFHTWBBqfbs5LMH7VVZbqv3SG9Q9ghxqyn75CAzenG6XZHge92YHg",
  "key11": "5HzRhZdawX6maXcKK7dFwU3NCnZjyekToPYZuWTmPyUK5QtHkEvJCbe6F7y26uihLbEvUczg4sS8F2sAT18ADKR1",
  "key12": "pbkrHfdFr5DZrDWpopH2Ld6xUKrqGkfPgDBs2kMJqkHvekdZpSYzwixzU86rXJieZTXaxgVGNuXmsqtq7Zd1Mb9",
  "key13": "2nDkWyPjzBU5b5V4uxvTq79QQtJP5c41JS8vLuDUwgVKRSxUHjTMRoiAQJVLRBj6pdF6yttbSEc5oeRvQAh7Ch1j",
  "key14": "5FaV43CjRRAsr5bXt4RCYuQHfjPxuhV6bAPfhttTtB4kD1wRwm2R2W1KXb4LaWZP9rbY22dF71UB1RJP7LjBS2oL",
  "key15": "4azjnNk3QQ9DvwhUAzVwkSHYJVf9GUmdTHmw9yPk71b8TNtcfCLtLoMigSpXZYh8EMVXJkNEptRZ3uoMurgPJLkn",
  "key16": "2Z4m6PMZtoHxTzj8EfeKAyWvQtYfZ8JYnxWjchmwmdf3J4QwtAwbk6kBSJxC3r1GbwP6Bivh2hBp2EEe7cUzYV5C",
  "key17": "3HJLrdXtioPawNDNRgevEzJDDsq4xqDLK9vCDoSCs6zot8YojomBxe6bcpuoZFpQXpQsr3fhUGwXsxEQu54ubo3o",
  "key18": "4xDmiAaTSQBoDFd7Js2y1NjpEGwMHPwZytp4sKuzZtu1eBaK6bJpp7gk3RFzkEgi3fBsx3wNBDnz3evTXcNuWMGU",
  "key19": "2NgimhprvQmVpfjvazweaq5WtVExpA8hmMmeUcZroX7j5CgSsL9v711DGZLFaGNensTeVWYKFBC4pmCuWcjqGnc9",
  "key20": "2QGrSnknGwzhnmDTL1Yxneehafp53TgBxghPzkUryY7sF6kdA7PMmbtbx53KNVBmqM9r62QQkYsQvNF6wcaaxurV",
  "key21": "5sW6kQMoCkzH7y52SvQMwrHWnTyAc2h9chCLYxmd2F2ScGX9RVmjPBThK7oMFm2geFnJqLfXe2ACiEn3cMFrPXrw",
  "key22": "2h3zinxRBJE7ienbQPqkegGHZ98XfPWA9UkDrngT34EnwTfP9tRc74FLjBVf9nNZ4j1NJmsWr5f3vmEtHxMabChy",
  "key23": "2PsPnC1iH3uXhWgW3DCNL3MNKjwZ9YCZU66nB9ZYYeZvBYTwCSjUC1LoZaXx7ZB6GY7tEynvU68vfUTmGbhUjKn3",
  "key24": "4Mn4h4E1RQrpb9nWVenxDFCY2MZgCY9KTBsjftk3CuCUdhVkYwcJsZfosfsPoapw8TRRSqwyNKxsNJeTXYqj5gvn",
  "key25": "5eJqWHzH6m9a6uUW7VvTQeuhtW8zTrYx6gysCURKnjSvC7czYQKNh37ykcTt173318s7py28yrPBuPrpbW3tZuKc",
  "key26": "2swDZsdhsFkN46X4crrLKvs2tUBUbRusJ7JnhSuCH9Xu4B3EQmwGcGWofVRhTEdaLodQAtCCw1usWYTQkFy6E5qw",
  "key27": "2BfN8LFHRR7o43uwPnNPDKDq9NLMbxgnHtMzfffzA3PTzdVDifk5xE5q6tBxxpcCBVNoDVFtiYSGo6JNSn1zZxch",
  "key28": "3tKnZRSKqdKZFqb8UMpHnTEyQrBH85QrWpeKa5DXdKAEh1AageCHmuNZnEBJwPgzv1ckYkaVNgwt9cXzFi383pQ9",
  "key29": "3pwcowY3tW4osT4MysJpSngH64F2ZddPYL5pcEVR8GEwbeXNFtXRQw2SpJji7cpGzarEGCihuCLuG6hGmKonvjKy",
  "key30": "YW1U93wV5YBwFYtVvZpW91y9jyjEqVwi1N8wQxQ6iSqggwRp4rfCpFe5rogzZoAfKX4ENnD9YtHt8FLxH6qutru",
  "key31": "372UKZ6V2fD6sKkhFJBmscouJdnA2Vc1BnqezwEVtdGbFZuShUNz5Y83aSzdEjGBtfbbPhQFLWpmcbAYyT73W7Uf",
  "key32": "2ifj2Wb2FP7hSeL4XgFi6M8NEtb8VWSqvfqB6en9JTWLtCm3NiRHKDhfMh8Pfq3jdPRPs2CNnVRo9Z9KVnMjdrpX",
  "key33": "4WEnVXqhcc6ohfzUqDzDJtrMYkuiMi5tGYB22ZNZHamDToTr8V4Yi7LdkAjZre6SfzT94bWithM5vstrvEtzcAxU",
  "key34": "3XqdgWCby2HLhj9F3VAYFhXbRU8n9HKs1t33ijWFJSSbiYWrJfV9WCtngbfoZXzHPRtE1cArSmWioLk4VV7NfMpL",
  "key35": "43CYMu8ihAnPGvJrSjWCmfSLNyCBVGKU2dArdzJrWsrVXeWVWANkRddSE7e9ijVvxdyKaSLziZE6vyewbpku8FTm",
  "key36": "4vfQRPK7ZSCyDb6mGGcdL7WSX9U92Ew9VwBds6kEdurBgrkrwvgi6riyv2mVFXrWrVCFMjU78equCxpbFPLM9vA3",
  "key37": "3MnZyzUj7zvKNbYzue7u9xQh9JcEzJXQLLsSgd6P6UdWcG4U72ZHsocZBr4HZip9A3eHEjX4wSs6vQdHgAExECTX",
  "key38": "4uomr5ijaW6x41xzoKaMs7Rqv46kJ68cH1EnxsF5wdj2j5f2jjjAfZzNrGGDXQ4qYJyCKMehmcuGUdn4jn5sS9Wr",
  "key39": "TfLsu4umKZ9cNL5jPxsxC2UtUQUtXTvcCZyaLbvNCpbAavDP5jEezxRBFjHf2hDUsfbivy4QFCc296qvg9WKMww",
  "key40": "2MSzVLLBhAM2L7Ee6r1KDPDdu8kpcLqcBVeCEskPVfvzzNS3SpjCL5tj96fmTqgjHTXuuLeWJ1TWJXpHvb383iFq",
  "key41": "4E4pCTtLaADVWvJfjCozHB9EWqvQFZsY7d297u9AVfeAqGTa3dXFhLJKiy9pR1dvkLR6PcGTNAVkPiXjXjdiEjMx",
  "key42": "4TLt3o8K2amBPva579vsn6MRVUr2ttd6R7geoKXnXM2VBM7rWU6uZAwvfjkcjkXAMHPPSXm4pk84N5tMkDsAg2Xn"
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

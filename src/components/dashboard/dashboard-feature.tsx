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
    "4NyRujubWHvBr1xfCD3XQR3nA1JjB3jKvPhr1RjZAxawjcCPj5pX8LtxvqfHP2P2d2D5mQdmqBj319AXW5qJwEFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdMzAkK8fLVh4JDxHYFynqFYQDpafrDXcyrPH1o29VUkDBmmyKzLWnfbZeAPTprkThvGWQ2T5M9JLjFvA755QYX",
  "key1": "4cnfHWpzuuLHpjaVYz458DWoV74AmQSJtu8ip8or4Absqs5g4vaoeGK7YKAaN8dRWkCu37YRuSy2KhusbRcggNL1",
  "key2": "4cjTb6YgTSDH5C1mNfCBx6j1ZSowXqdP5qmJQ9wD5yX7yCfvW1U2dmS89c9muLHTSwsDUtAdW6qnhHe5Qsxa8E1Y",
  "key3": "5GiK7E7G7M79wsePCZnSBBMF8tb6ZMSCoHWU2Ne7T33t63RALjFuUPrRnnjbLwuHCPQnVofwkPorPUoESAsex1Vo",
  "key4": "4jQD7fpKZQvswx8r3VUU6kms7vyamZDyU6RR7qLYT2XymqPr3BRv7BSRK8oiEojkv2uNTmhigfgNbPkJ5cN5MNKf",
  "key5": "2DFJwRsNBuJhVStqxQTeTk9rBvchHyvaweckc8fRSs5MMNLDyQASR6RQEUbPmqCy7Piarpo9fmjFhPDX9Cbrfq7E",
  "key6": "38qRk9uBGteiqMCTrwUjzzxKMrqjuvj6k7EViyKBqF4GcKCroSCVwJh8rfvpaGynfucbiyGNPpmH6fcX9AYjYiEw",
  "key7": "5SXLftz5u8fmeBNC8acjiJ9ep1XN7L4LYc7BWWTBLMUSUoKEAG2aSoVenV4Mm8jD3W42XRicsXc6CMFLLUBYzj2n",
  "key8": "4nuPbxkKkNSSGVuWwWBFrHfoYyrEseG9zSCKT5bzy91gh8oLUHBWX4vPTTwJocAHBYikckoaEGFTq4N8zTn1Hxi5",
  "key9": "2UVi4eN83oN9DecvyBKqVkn2oSSKontTLzfNQbABin4Dd7LXe2UytdjwZz9hoER1D2NW9vjvxmSx1YoJP8mVbVG2",
  "key10": "5tDLL6K2DKusw6a1K27kHX1TdLTAGzWGpHs2sgNJ3SYysCPUr6JnLupy3FjMWBdLyHvApE3NYVfMuYVB2uHLkMgw",
  "key11": "3TzWgCXnv5ib1hJJTzRdTZdcUGkaMq3HMJjjYg6YkTkVwijfsB3VbyfTv3LAos1rpqufLJajS9wByDcRxTkwjavG",
  "key12": "24H9bpeznCVeBMKg6vEhTT5wrxeBXu114HNa68SHtNY3xZ3b487qXPvdFzj4DFYh6pJGhEhNBNB8kVZQADwNGAHo",
  "key13": "5eRpTKPtSHUAzR266U7CKVkoaytPwzyjTheYvs1s3F9HhL8z9HVKxgnm4NF6ZGW6j6dapCzh8GCbLirsxG3FWjLM",
  "key14": "qe29kSr8SWef4ZPdge4d28Y546ZfyAhXFXvZztUhnkYdv5B5J8npUwUXuXhmN1rj7qj81qFN63LUZRBYhoapui5",
  "key15": "354WYVYjkaaQV3mvqHz2hhb52DDhArGnzYcmuY55rSSsiJcRmC6XNVPaSNCs4Kab1rWZoaqhj3Y4WDaqTawTuULC",
  "key16": "54sn3GPo69iiQBKXwHuhzaNKdd48CYBsAa4vXN8ehoQPPXYRHoxtmTBmZP83Ruc36CPjSJu29Pr5GuH1KijYXGae",
  "key17": "5cEguznTEQEWiWaBxNKUuRcj3KR3QAQ2kh8vLWCp3prhLubhJXsD3JZdkfLw9Zqw1mHyT34RWnpoAbtXGafM1Maf",
  "key18": "42qHcJxuCfYADjLGkndrbM91pVbsNUyEnnMdr6uN1NyefRTswAoSACzvWMV9NjEbmDdXA1KU5dKsDV9JMXzaaDZo",
  "key19": "2DYZ1z3od8CZtDsiadf8M7N8CaVHPw27sM8PAFY3KMp5SBYkTikRnC9WTbjyP6hPmKvMsLSrFWDXVUjqoGAbQXrd",
  "key20": "4iVy9nd9hGUxTobGgMCRu2nJyWMTYXS7uBrNgyHSy1gHnF8iAjmoUGr5RJQAZ5ThBd3Qw9z4fjzBVi3NV5ihmdoj",
  "key21": "52ESzuNqf321WvHXFGjJmKFqjLeYG9xsfrVUJpHUPtEgvni7CDzvcXVFPHvymYjtGJcRByAn94tjCWgd1QSwGEJa",
  "key22": "2wSX3bmDNNfoaAj9MmuyQjHgM9jVAdAj22N6uiQz8M6FPFAiJmvM64u7n8psErAPwsfbcspiRVhAcBZwhDxptUrp",
  "key23": "5bDdkvc3ehbpGTmdkseMmc3EeHZR2n4p8nowefLx5G2dGvV8CRekULbkCJyy3n3pcnMPSzTj86KXgYnpM6467wvA",
  "key24": "249gbSTADupbUt8CUrKBKpS8L54JffQyQWGCskktJZ3BSjLLMuuorH4mXybCWRmufQpHSkt8ECCGbcrwfcS8ECWz",
  "key25": "3AQJ3SXprwbH6vQQKcVsfDiCHNMeV3F95XD2n8YnKKgSXEBVX9kMciPdT8gCrrkUKzhaKzM8nKKKgDcmpZcCFJgK",
  "key26": "TS29tQnNFjouHa8tcgt7u3jrK6bniXXvq7CHcQGeQvMhT5heqLmSiWwyhK6hysor3anMAVNQeppRWifhppzw1Xj",
  "key27": "5h6SEzUnBcSHzQUyL2F8E8pKpkKHQi8eFv27GmtvmXNN9AgSh35Aj2sd6mR1ERc8ugPBRd537avB14DxejtHCkhP",
  "key28": "4yewRLY1bqNHJ3GX2YcCBJ18Zk969WC4a2KvjVPWC8y6M9nF8FKm9F4xJb19ToJaJDWUtY62joDDEieD3mP441Mh",
  "key29": "411rX4veGpEY65bzGe399mVPGM4noon16WcK2mJW4N7DgdCQQbntgEQkrYRwpC6Bmqmngk7pa4xxuRwxkqzte7v1",
  "key30": "LzmMSn3uJLdCNcwZmLXcubtyDWs9R5ZyQ4L1qvWDJsGyzGYABDBHSRkiN6AreKkjL22GwwF7tyBw6eSNCYLTUY6",
  "key31": "efo2P4KGuoA7VmJkCjZMYfYg8DffYABG9HT5XUVRakhrDkFypJxnoVPj7QBAYVeT4SXhs5mHFWmvk171LaaJNPq",
  "key32": "5CTLVgXzsbNt8ENNiW992ttVDAo8qkR1i3RzyVjBw1yjnmQajcGoepoF3voyd4d2mB5G1vRrovEeRtAWYVTxxXq8",
  "key33": "HGGKypHxDhcNAC1RMV2F8363rAnMaKgn5pprPLHZ3uzHfV6atstX5LDWifvRk4dR4ygZtY85rubKWdkQXhvQhd6",
  "key34": "2oSsC7oghgRwPVZ6hCaiRhtbxhfJ1ipdAxkU6ePTapVs9ywPhirsgpjDo8qqXNTZmDBB9WaTT59RYhe6rZgLpKny",
  "key35": "36fj4BHxWsaNMyrcCN1jZC9BwRxtqtmbYs3wk9jdfGoDh9kAZgrBnxaEpPjaXLVCLsC1XcoF9kBcA4g9whjJn5yx",
  "key36": "2YGUVS6udCubw6Mfcyzr9QxLDgnP1axqLTR2NJrfA9x2e6T8NWiArJjQZrKQZQsXEu1Yky5BLsES2V5hzbEudSdu"
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

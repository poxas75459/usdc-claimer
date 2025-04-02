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
    "3sZ1cb7ednCs1aFNcHvH4EMnd8YV3JbXGeUZnJFpsh1zQzhzzD6XVsoRJow4mwRGVvWubghM4UYmdjqD8ncBHaRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRePftght9muL1b7B4eTqEuqf9sTPz63UcAeXmGX8NyXb3zckMzUmxoVFc8wYiqbGrkfG2FYMvap2DpWPngVE2X",
  "key1": "tpFWkwrunAceD8zhjCDvVpmEQ5D8X1MdnVd8Lrj4TanNywcZ37HUenHuQqkKwtWw4UnBbRtT7DsgCQj8u18ZgDL",
  "key2": "4B4ykF9QuvMQ27TrtGkCJxpEo8qREMCz9gEbjkrgGwJAGdCevyT9qGmQYo3qX3TK8k823q11f4QmoE4DYv1YM29e",
  "key3": "bmDUj9abeuQ86MAa14pTezPVAq3siDPuLbJqhuJY3Gz5KqoGeqw4RpyE4sZmQTX8fzYNAyhSBDGJdC1pk1FhUPE",
  "key4": "r5EFXKYo5w71LPSrZEZdSgNS37wtEchPGD8kTv2yj5vNPgNFTPSiB5BBP5roFgHsVsb1ETm2ZeRQmVBwWhbye4j",
  "key5": "33nfqJJ7Efpuf578RsRVHU2Tbd15fLdP8uYWdeqMWwDbyhXJjk4HFvnxGA6UyoJ41cBMWGh9jQA3nnuTnUssD7ZX",
  "key6": "ZjwXJfpr1A87xjMFVXdLiGpwYKSKQfQ3nfwyt78bmUcDDaig8eyN4k9MidH9z6FXGvQpNF1SU8n4rXdCWxUt8AX",
  "key7": "25XUAagawzKRnyPQ7uc1ewBNqw7YLaQRL9LhFodMyZ4Bzu18CoaQZFt1WE9frvPYoxFu5Dnb9CfYt615RwASmEXj",
  "key8": "22UJtrnmSNdydPpFKLHYgE7FvafWdfpgZDB9odaJnM5CAzVk77Gv15xh77Ryc4FAuPA22WthK2CiU7DEsPrEoDst",
  "key9": "4dxgxfnoSqMGJPBkSpVRdwiN1i8F3ey3nXqdeHq1L17p9xzUtUZAyXZhrBndoR18sEg1MP2mV1Qxtfvzqvqe9Z9v",
  "key10": "2wYzy1aWf2nJ32KMdts4T78AEj2gi2VWWKAFGAvFKFmETibDeWA7rad8MkFgE7is3NrrZeRFHhr3XqBiiC5Tv1Sf",
  "key11": "uLrzZ3fpyLgoa9GHvYXPVqJihFGRfLjMVud4YwGjQ4xooNS6i7cre6eDCecLjMXuNnQAMh2bsyNdAVPruZ9CUut",
  "key12": "L8iFodU7zJegs9csr3SASgtpNJzACWHrtTTaisp23Sf1qhFUsfVJ1vHYe8Ad6NCUbAdK8TYmFzsbgcmJdg4NpAs",
  "key13": "624hkTpCsiRdXCnYm7jUPMD7hR1SJKkccxZPpz9vMYbx36WhUShC9cRQ1rLzNjS152UjV2Awhsygcbrqmh1bDYgV",
  "key14": "3eQwBtA955bUEhdfuRMXUJjV77Fvcu8ozt2HPdEMp3swv1hg6t324n6ZjtB8qLnfvRZbVEibPjmo2FjtpjqbC5QF",
  "key15": "3zGd2ntDfqd1BegjTrt5WUeMecFkoQPBQ7RhZZ7J15G2oMmgZrR7MnaJkBVBb6CTzS1AE6idxiyERNLaHzirKuxE",
  "key16": "3no9bAdZHJZQsrZb9r3fU1PGJzvWNVNogPMua6vnP7t2eKbEHQq9RfB9bUtqKEuFSnrCGMKHMW5FXkuPGMKYm6cg",
  "key17": "47JTMPgW51CY3bfge3U3CDDmtU9jLyNNMwo46oAcgwJvHxEwQ5AsCEa3pjrqAR5yePaNsodgTVp1Qs6zhBkadUvJ",
  "key18": "4yRksgtz6xJsVXC791sUdrQvjwNg25EegzxXEuJuU5YCmERE33GDnoqE1aPsSjUnCRB2K3DFcxn5DLktrRQpAdHh",
  "key19": "EXmFE5L4rXosqLtkZsgyYZsTe3vEgD7e7rTcUBjxoQ4mfxjAdAaZ4aKdnLizNo3sBUNpriiFEPec1AiAQucfy3R",
  "key20": "Rb5caH12JB2HZ32z959q2KsVSUoZ1fHC5Y2iQaWVQmfCm7tpxTiEKUrUgpwg83gUDjeGPoL3w9FSRXMD9cYgfWn",
  "key21": "3NrCvKRmDoNHrwY3kQEMmaPoMFNJ6dCnvEKXLBrAPd2qSsGmKzGeYsha34wwuymHNtVLevDwVuPzFXBopr9sdHRy",
  "key22": "3DbXPUDREsgv74MPTxzP3viW25QywQZPbrnqA1dYNQLijPQe2PNCJfmqLLWsmyP8U3x64vEhGRYrXtzfqUvfDEQ5",
  "key23": "43KYmx3h5cEwg1rBkxaWoASpgpnbmy7bXByM9aZJxyfhdCWcBm1A8NDMixoRgicGbecLajq6TWkfB4pKr8BUJvAr",
  "key24": "2tBpcRuVXPUPGw136s2zgCsWiHZpebgxgFDfyumuRXMDVTdusRqKTSyY4QnHuuzBrosYjLeo36tkEgyBfS5nfB2n",
  "key25": "4oVkkHWhZ3SaxQPJxbNJTj1WupWvY8JYEuPgpYckqRUNepRDCCPLtxcmmirtqd1rDqrAsYBtQB8C48pHz1A42bDS",
  "key26": "3Ch5eURaJhapABa6v7fukZc9BmgvLrUZ5dXDa1sTb4B22Ndng7qrGpkVUYaqTuGXqeoRwohZVtvB5oCcK6ejp7yL",
  "key27": "2ModbVDjxPag52ptALMAVzkNu9w18DoVgkdAxPtyC2ACFkACDBotAyHRseeVXBrfzWJfREX1VM8AGGM6gVV8v8dj",
  "key28": "2DBi4Q5NwM3wMFCxqAoRnPkvoWxGWGGNQsVuu8DLGFknQoTcQe3v2vmttmXtxXCeYmo57Eyrr2TYpCEDFyGXKYNZ",
  "key29": "4NwhXy5VPW7zSXsCYSFdPSddLaQL8g2kEKwV1LbnyLu7QyC9DGHHdoPsLozMeucgxkbHaKN6cTViSPxBpmm9eqeR",
  "key30": "378psFzZSKPwMewWkrVr6QRDpgqKwNqku2p6RYVKeonH6oBpZf3rRzKqtsoExgzibYasCnBKAzTHyfyBUerNy2Zo",
  "key31": "5wTHRqsBAJK37SeNkM95Ysj4QyWWFAvkcsE42jqQeBoms8zmwPBY28q22C3EwfDpQctwWs7xAJgxTYidMzRf1xmK"
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

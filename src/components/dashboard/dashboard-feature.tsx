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
    "4GBp3HSGSfQ8keteD9jQyNeKjn83hsbsGQ7pUJfaHkcfcdgRwAxipPogC3Q1cgHPuwmWmdkjs17x6y1ij28NgdXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZdt6fj316twNsaGrqyQFGJGLaqwBwCNkocAGBKRWdccJg2osQcSvRQfoWRZG3WhUvu51BJWqA87DtLGzR56zAg",
  "key1": "hWwzVdT1GmVZdj2JyM6dCLSH5vL9PDUbgZpHHojMRU8d1ZMJptBoLzFa8omzWmSMx76CFGf15TtBYdJWunAi34A",
  "key2": "3Ud6ufZTaMLLt1qsbQosBtRHVRksUa33gbg4CFJHfgMhXJFVTBfNJVoEts5oEL1AyhdqD6LCcu6u96sifdmifdcg",
  "key3": "3qNs7CSmtaaFvPEZC1BLK9gMW1aWufsHfvSGCBDwuMFy4Qepx9qH3kK8Ecepc1nshu8PqqmxKsoSzSDebVuUebGV",
  "key4": "4mvhK7ABkqueJH2J7ZMFHno1fTHKRpD3Pj7oxiH5LNQ3cAtS6fqrWjkWiEsbXXsRch4Bv3y3Gb6R28ijvrs8hzW1",
  "key5": "4PSXmtMciKgwFo1RgPg1YLf2U3ptUNzFARvAaXmW2NGqEmZ3q35BQrAERADbeXiXNiHrKuBWY7ANXndtVAqSaTiA",
  "key6": "25t9QeLwqBNUBphU936UDyvg3s4rewmP6K64srB7fbv2Kh9ULAuX8KpBY47NDTYQ3ptZ4Kn2XXJirtacCKnMsQck",
  "key7": "5puFNSgFMxHm9qso54tJ3zZxnfgj8oJPTR5otv6SNXFmieaEkgfGjaPNhBRGXHFhf4goSDS4BUpkAHqRRgB3jTuX",
  "key8": "3REKabLv78b5bH4Mad3Mvp6u2JoLWGExVv1XZFFQPe4zarAxQqyG7f2SL5Dej4dc9QbAx2CZjqKTT7sEFaSSdWCB",
  "key9": "2jHzPBVQMykiSv3SqqpJVFrCfA5b3uR7afc8hez5WURa5hmNJRRJSVYaRuoDdREaBj5NNBDc2AAnySR9KDAZ4R3j",
  "key10": "2PsMQcArbfy6p2ybVb15NCz22mfG176FZths4gK32473pn6JgBJGJjgxpUV3TfC3nJicAzw4AEYtuRo6uujPfvoE",
  "key11": "4hSYKuknoDfdHb1QRcXCAuQ2vo1L4m4dSVrKgEDUYiW9tdyhToDjjZE73dwYPnAaSNxFyCJL44c4y5Zo1FPKT7Av",
  "key12": "4KekLGkiwoPyLTmX8paV85ix8vNHPoo7mgQ4gJjireGT7GE87dmqVsGAJ5GBBbVkcNBzHDJPMfUwgvnj4G97dEaj",
  "key13": "33gxQRph8ouUFSro6b1dMZ6Ac8uaEcdLY1bQkvAsDdpcswYtcPBkLSAUvwbDrKERsrwU96ePeG4t6VYjz69EuVPB",
  "key14": "4MXdSNsCL36kWuTXvuhQwXPCk6yLbwtxicW8SnZqStYbHs87tcf54YZiY66dxNDKbNs2ousgozcV3XPNHXu38ckZ",
  "key15": "5PZxk1BnPSBEYQqRSD1f9G1fFSCFCD7pPyHYjTopxRqCTAnY6MChDXw3T8xhccPpxPPpcngxm1DXrjHB56kZcDf5",
  "key16": "2smkzBrEwsbbQg8hEhnYzfBUZJVpToxS7rx5JrQ7mYyTBs7wk1gLEEn4RJQ5ANcax7TsMbfoSry8Rtm8BfDtuuLX",
  "key17": "4k1SkxHgUc52gw9X7FmcL5E78xi2xADqYNTe58EZ9Na99FnouipTWh6YH4bXxpaMUHqaM4shCC4PpBwGWSWtQxCc",
  "key18": "4ezLa3gNxnhYHvhnfjwMuqwAzQj6hZiYL7NHBif8CwWE8x87qddvvzsZ5LTsapGXyuR57oyxif9XUq4ZQNLRcDya",
  "key19": "5Xr3Qx7PJnH1h65H7iExWxMDzpSz24BV3EGVTVS1JkH7MsjzZjigrmt6rj7wcmYiCBb1qDwWQ7T7Am8p6gfQeVTM",
  "key20": "38w23V5gBrgwq1Qa2hV8nfWqSniDzr7nWcyg1boCb2k4yMoDycG8ENH7M6RLSAbyYx7gaK38pDX8TtVR9SSdbhFD",
  "key21": "66NCYDfp2rDwHzaahtTiyPW7oBvNsja3pcaTFFEdt77bGBr2AKAs1YwYsbuUhtyKVxk2BDHWbUBq6euKdJLsFmsf",
  "key22": "AKQBByBV1Qvh7hBPMaaS1gWgTdCQhDARg8sSwzNhMpDP5GkFaNfiHgGafJjP5MB4LGBmjLZJunViPwm1V8mUawf",
  "key23": "5gpP2gYGvX8cRq93yZJNRYxB5njoVH3Aj1DpRARdwfPqSCixo9ALKqTv1fqQqzXfvn23HSwkp4y8T3zpJ2teN7pp",
  "key24": "UZXE27E4dKLAJXqXWxWfwPyMewDHn6qmjdRB8NVA2AjdrwLffgQ3rN3hYye7GKP2D5heCGnmZas2T7szoD9dxq5",
  "key25": "5zvQq18AHHqbqiyTvdG66Tu8qBGP2eLBPNqhBwFQQusVC3TXjXzVkCsPRfTFfvBi14aVnM2NDaL7U5M9xsxNc1kT",
  "key26": "44xoJirs7LJV7v2X5BAph1z5B4Bmb68iWfzpAHakgF1rY6VLUYFkzk2J3n561ndBv6zkJyhRUtJUktfswuzPpwnu",
  "key27": "448xeoUTXf29wcNWQqaPzrp3k3jAtm6ty5kq6MCKP5fTBRdHjKXB8FXmgBkUNt9KVuYnoPnAeRD9HkjabYQS97bL",
  "key28": "4rEXFk44qLMVjTxnAUsG5a7gBw7UqxP1s9jRP9hZh4fydGDJo1y1BqQF3oikCJJjkMUEUcghPHWC7uBGqq5UG9g5",
  "key29": "3akmhJnFAQZ4bsA3WKC6uW4WDVTfiywRNLLBXshpe2MvdK5EKXSxw223buswh8F4Un1bcGYXgmNmtpiRr9wdUos7",
  "key30": "4NKXBRcEf5pQvb1nJSGJHGnBW7abecrSqk7r7dLXkVGTeWwtToAcKnggGrQcbSyLiFdPTmvfARMoVK5JL9qLeWYL"
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

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
    "45LTG9bdkXQzJicky2GJp6jtS7T6DJjjjSstSudNhUxqiYLXbeSqSBFst42EpWVF7DusNs2W5eCcHmGeKyT5Kv9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d1dChnXwBUSWm7nE7JAu6Bo9KTjTcNdpgEf5TgkjkSwaJPxafMdGewKp4fZKK9u4Wyt5k6j3j1udCfyWEMjpz3T",
  "key1": "2gC1RYVrnuMrjaFvEZmfuAuHtFbQHHUcy4WiuZi4j4wfAYm8F5yVjgvBTsXVF4RfTZb4zHubDd3nX95bXZZh5nrh",
  "key2": "47aUaqgM1XBz2PryiMEm3KGEEsioFktVwLmaZWq1BGuiKfYA1cwXzeFA5CcasLNrknKB4H6BF7ukgViW53mGseS",
  "key3": "4uDQd4jTS9hMZaFoW5jFmzPRKDdyWShb5GVmLaHbhqbKN7QessSNNyN23ESdb7sjbtj1jYFBce1DuXNhYyvGWeoG",
  "key4": "HttbqTefz66SKhXLyHd6YepwZAFWpg1xCKPc5PdK6s8ZwoLNy7FemjNCSxhZrxQcEPVvo3BhFSCyrUypgE8PAPM",
  "key5": "5m22eMjjuWbDLSknP3S8d6jQgCnkwiL9YQwTaKetJ88J647cAeEo4f9dyhpZkB3vGHy1pSVrDgQML7aT6hcybemB",
  "key6": "yd1ZAfJWLsY97rZuhURynZk1aQ1DddBx537WiXYZExXTqJhrLAT7PSb2cuaxNnSrMqq3S65RBGhwiaw6n8hmrVS",
  "key7": "5XHfyvQESVyYyX6cF2RQbr9p2WL5sfJBc2f48CB8z6ST611Zhpfh3CcA2qvVmj6dFKEXdFjkEgfHEnMoRzBF3Mpk",
  "key8": "5jLhudG89UWqiZGmonxGCYiheXuU68Bb3E4Jp8VETv3z6e84222pTDAVQdSUBobqQpPHFyPB6q1zUL1szTqpqeNA",
  "key9": "fmw1if8kxy5FWdho3yEDfQAGQEYzHQcyDwfjxiPqwdDsWvh67qwbHigTTeQKGAV9s8jMbixPN69SikarPnBaYVo",
  "key10": "5Q5FUdxyc3CmNAVT8rFqY4xtwdJ3D6myoz3hZt9fkyz6nxCtay8Zw7nMrtkEti1ysvTqKAbPQPbCZy74geYsSGPh",
  "key11": "5JnnpUNXAmWNHJKbDKG7MSNpmGFHGQfn9bvVrQD91sPJAMW3HmdvUkaVePnMaWQaX4M7zefwh8tsSLzq4r6NfpGx",
  "key12": "Ai9t2zJwisdNVD4E9xfAnaiSUpF96d6XHv4NqDbGUsAY8bWNkMZWu5SCozhp1kMZPPLdDMqYVMF8AVVSrr96ZFQ",
  "key13": "658jYaovZftHEf24Zujpg6VSCLufMPNJRxq83ZNTZGAhCRAPTsny5ZZxXJTytiyGvcbcH824nrYEHKSEHWdnptsU",
  "key14": "537KywHaN84yf437rKo2pxW9niBBv2ArWRXDLWnekv88XNzois3h4PRFE91pTM6WxQYPQCFD3L6FjWWKLxnCT1We",
  "key15": "4QWARq7Dyr8XPMHqXcnSseY8TqB2fn8Dt43kWKmb1SjBpxHGHsugiiXrmcVckTbzKU2nRoP5MznHCyBXZ3ZEvPmv",
  "key16": "21ps9ZuD8nkfApAFS4P8RgP3HHbVoZ7SVUXzSACKJTbuBZ5RS24KaXDNqBDadQidDvNnXcyMXhiCK6Fgx1sK6qby",
  "key17": "AVRCH8oFoP9p2hPpV7iLtzc1PgVbppnx3yNgWhbYpmU6f2e5DbBHxSCvhRU8YxkHXFaaraoFnnTMRKaDoW8N4iM",
  "key18": "2xgXGC7qmLQ7yKWWL31Pf5GjJMs6TsBH91yJYbzvXgC695262GwZzZZp3ZC2kXh5dVXy7RRRiYWq7GhYFS9U3hLy",
  "key19": "AsxTV7jia7v2KzSCBfhDhEnn4zhEZ5nnhQWNn4QfiLTeEHenWyGufpJSoLFQ2QdtJu6jzaEsQqPaEZSfaR46A16",
  "key20": "3GvWidmtuaoqsofPskyuGsoLsmqDJZzP56xd47RJYge5a6hikkENvdwS4N8unxttGbMY91vUuuFz3DZRf9d92jG3",
  "key21": "nEdf1oVWd1veeraqwtHWAf8bN9o1jZx5hvSDK8cQe7HoWkdG33qrRZLTGC8DMHsV7YCSMnbMS7w34den2GFtrMJ",
  "key22": "5RH7RDzDFPtyhKrnbgoE3sXtxiZSpgmHPj1BXBa4NTiDh94yCyR6NtD6TUa8CFQDtgj359udRpFt3FLrB7vMnjSB",
  "key23": "bioNZattdBrTz6SSimn42ceTPzhohTqorgZF6ZTbLuN44XSNJqLFNUZBufpB6Nj5XmCGFz37o4j5XuDpWWQ1yFm",
  "key24": "64xAGCUpaghjwKiVNBp3bqpQhKeb9HGZrxfrFVE1c6x7bSzZbd1sVVuzRefDbUBG7NSfRTTQpQdCnS2jy9F7yUXw",
  "key25": "31VLMphAhCM4QfEBa8ZJiimA1MLQsVgBw7h6MtkhLgcdsasqjyLjA1eZbii8euLfE2Zg4wPiT1255X8gKXVvZRqF",
  "key26": "47To2WUDg8AYF2ssj6sS1qHWFFzH6aQ49ccQBpibB9BqJincnuZzLvqvdoinXtPPvftJrXojNVGjmhGtCYNC5AuY",
  "key27": "3kESMMgHiGSrSiuzK77Ww53DHre9Urav5kDwsuXtyfKgdS4XU4UE5hRyAWP1ZThkZs8w5nKrsV5kKAGXt22JCCb",
  "key28": "PCag8F9SBEm1BjfSsM8eJnFdsuhmS6SJd5VHx4GAomtXgRxh55jWHnGWBSNV73suDYJNknReH2KLjLJwPhL2C2i"
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

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
    "5BozKCswiTDXUVTEc64UyW24TGPhJaqx8jqeFdKYTdcpEd2NkVJ653NcKVDmPJbmovCdRyBk5UrWz5ynEAMFXLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2swHbCz6fXVnwrsLynE7Kx9bgSpXuP3bikDmPhAtQ9fZLEyUuh6q9T9RQwjrxkjhSkXijocd7LrXdWUZj2dWcZYt",
  "key1": "38azmKzVmLLps896UkXiS2hGBHsY3S19v3WEzhREwjeTetwpKrc8n3xysBNoHJJZtPUTfWD1NjhnAYognCgAVAPq",
  "key2": "3yY8NjcdA6xLdcxPaY5Le5gBRjDkrc39WvBhERuP6qVgJwqijiDQLSwyhjLCtNQs7geUnQtEpyavJh5oecjKJGrY",
  "key3": "4bGJRuh7TG2yrxyLWjATLrMPGyMfYrxo2U8AVK2A1wbH68rkeNxh3yoWnawjRNiB2LXWyxnQsiTGda7qMiUYyzsi",
  "key4": "Tx1hs6GHmwpBspzaPavuzHBF59DTKLSQDGMhqJ299ZPxHfgRSAUCLA5PsCRhMzf1UxskWDoAaaAu24a6Vy75csX",
  "key5": "2CSNfMCoBrJUgqA7fNf6d5WzZDCrR33mYZco2WWxdqzqpdiutBmquhKm7WfN6qCinU2a6JEyQ3Y4cuuLKV9G67Ta",
  "key6": "5ekw3DUd1czq5CT8ixWWkcWghAmbVVXZh5VHxU7afn4WWc39Jrky6iRv1hgNKsifeDC2n8VY5URLpaRz7HnwZeMu",
  "key7": "HWTsfrRN4TNEZtK5ySkWVvoFX1n1HzgVtma6Grcfc4AtEpNGaGpt5ik5DeSVHuWddM53EEuyZ1oSzaYEXWq43Jw",
  "key8": "3RmAbhi9buzL4PMkZYXGKoejumaYb2xEKK9LW31hJX8QE3YawyiVGnY5jbkbAXAXDMu3R5t8AgvbWbgaKY8X92E1",
  "key9": "5E4uZBBVvPEdoAkdLubJzWvfzXeCrV18a6kLnfJ2DpLCVhwoxRfm7KZ9SrmuCB7gGitpaUsCXPDwtX8CcZKAR7ub",
  "key10": "5CSPskpQ62z1xUfNJBg17odhu4NVq5jpjyxGZLdEiN9wVV9pNFvaGVwMVXoL3piN7S6sL5Wo6hrz6BrEFNC2Qigc",
  "key11": "4vQop1Q2GKhoSwJUWrcuqcbc3WH96yh2GSmtFr9cWXfJND7zXen5TxQWS4b2LPzQZEnENspgTGEojeLugPRzs8wa",
  "key12": "3zj8vGwKgyG52FLGVS7rWNJEzzZN3rY2N3BAoUpD3Hv14VpuLV87xXwY7yYxmCu7v8BjcmnnpXuPmtBxFkb5EJZb",
  "key13": "4P2iLaj7nnnTyGyT7sjPc5zb8gH7LV2aCa1iU54ZbCpV7E5YLfoMAPWEdCp64ZJTF7bFvQ394Bo9kwGu8pXBeUUQ",
  "key14": "25faaJLEPX3yhjq2Vxqt3Y7Y4VbYYYWm8Hx9JLKqsM8ndccQeM7girHLw8geq4t4Xruohcg8XHf7k3Btqi4MnLdX",
  "key15": "3jjQpKBskVeSRd7z9p2fqNF4aBCE6NJC2WFv1FXGB9GBtyfV5TTC2SLM9oaXqGAF49za47TCDhTacFAD7inXegQ4",
  "key16": "59vpBo3Um5C2JYR2wNvBeMp3iGwZWV3oeAejX6futHgg54rTVbaG9FWVQ3zLt1mBXZ5zehmFVYxdSknEPSaaEF8c",
  "key17": "5b9VvKGBwPTtRms5DxKFqF54jyQauwTC1z36QmdBMfmcw2MvsQqmHmT6ha7qL9Z5bfGRVf6JGhT1JtyAsbscHDQ2",
  "key18": "pRRVNDYpXfq1FiQRdhcsMUCbKbekmapoCWd33hycLEHSX1fmrcRckDRrBdqhBjv7nYKMRP2KF3215sbCgbySCLe",
  "key19": "3UDBp3bgWGccjaCzUrbuZD1zVAc4bgBo8wo3vZeK6E16KFJxsxJummkHs2NySBVHXHBJS9cqi5sNpAgyuEugExF7",
  "key20": "46mHgHURLxB8wnwM3dMrRGHjHzRfczmgBu1uy8KBuqCHofginW6YLQo7x4dL61yc4CNXuHoLn6kBfKgA77zTMDr3",
  "key21": "2scCntjabqPnSbZajHxLLSdybkpiu9nvCu4jRnKNPKcuEupdXEVscCHVhb26qebiWV9UM1gyfVCDg7grtkWfiaRJ",
  "key22": "5a31pQALUiqc3sCcNBxvvk3uNeGp5KMQ5WPwmLBmgZV6PXiTEGMzoFnZPhtXZFcfAa3Lv27E1ZUWMW2ccQ4ut1Wa",
  "key23": "3xA8QuryT9ggeumcjBbHhhtyuHESB8ZirBTEeUYisVvRrUjWpF5oA9Uv4gUDXd2w1yZ2Ui5EF787hWR5jyAkkxjc",
  "key24": "3qpKHkktegzoykq5DEetd9GPBoGVdP3PxrGcGptXf7Mw7nPAUyfEddatFD5jKRtYx1D2AXNXjdmfzkQuwJvkfJ16",
  "key25": "pR3scGMFkKcWgSM35fj1DQTX6rvaqsTGmwcGjry1croRibNmTWmEvYHndLo3JTzQbM89wt2HsAo5jjnWJHHKHPJ",
  "key26": "58Gvr6RduSxwzKYeBf6brjZKrjz7q9vBAgRHzVDTsHyxLzp3bUso4bb6b8PNdzKc2d7btbNkF1ewCAXrxdD8u2KB",
  "key27": "675xDrjoQSap9LyBQEnxo2P4NVWbq5RsmtQ8qAuFhsPx7pJw2vtZKWJmn1U6CBEwiPGjBf37tTY2tJ5Az3cR9FEf",
  "key28": "4Lmx8E2BR5tT8C5et9HnpZvqo1DASmL71fhpshpD7g7iHcqu5atUw9meUVqFi5dNbfyrAYcuibjyLJUoap8huwsy",
  "key29": "d9EKiQrdLs3zEKUPZi5Qp7w4pyFHhP6facswo5BCaoWF6kaGtgbP6F8te2bZ7YUbZ5v6ykX1L5LjxprjmpkJfuU",
  "key30": "5VF9yzzxWKA7xU9bUJT1okqZTxhwSzqPFVqvaX8gnr7aB6pAUM9hQ5pnZwi3EQx1WTyk6J7iTtFWPaiNrMZWVEMv",
  "key31": "593XQTX9XVjBwaB2x9mSTg6Dpai82jFvM7xn5fuDAd7FBbvRohbBbndSU7Njw96mZj3GmzAfFg8JUtFE5cJWyUHx",
  "key32": "5TM81CP3uwGQhnXmTLNbM5Mmu6crAko5Nh5k4Gx7bkyS67KWgYEEHYqEDciBuTZAsgHZsRQPbKtdJSgYneW7V41E",
  "key33": "4NFrgU6iJgM5QyPwLBZiJqmrDbriPYVzVyEs8h9KpKwjMHGJsSrzpRD6NRihb4tpPT414LXEa36wh4YPWMRbS87e",
  "key34": "3W8KpupxhVves7ckiXgaUHxkkPNpuYHRwyEpvD9ih35hZQjA8WbyG9XRSKckwBbDKAQfmh3fghutYzXHa9x4A6G4",
  "key35": "z7Xhz7QE41WmkCFc2tFQEL3MJGC5vnQmuTgndgiRWLrLMK8iTTXkf2X6tRQFsfhoxzUvdn6HWtMJDr7UfDeUs7k",
  "key36": "5hR3XNb5EFhRCUx7sZZs6vvEWNQ8NjezCbHgo8HWVn5eN2botioiffTir7SbnFGFKqL2cSuDvFYNu24zbGAr3tkd",
  "key37": "wC6fwuPUEc5HtiCfiUNv49auoGMX8kUBpCEf2ZTiFvg9hRGbmEH5SueGH94piNhHYXLvhoS5niUsmgpwL83KNvZ"
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

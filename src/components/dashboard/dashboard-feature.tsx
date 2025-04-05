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
    "5pLK4XigEDb1rDYxWYH9E5eZAPwc8TgyTV1erxtTQh68WQvsyuXJPxTTsFKLSgtVHbuABJJf9N6ZqCmHuiRjCNYE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dmqX69dtQG1PVt6QAbvTP8nyJWkYSgombwKsbn87PPaVcW4zn5VTKjZLw8CnhRoL2DpW4AZ1ooBMbekEcpLSdRM",
  "key1": "2fdXCRe62TrhnFYYy3fs8j2ifvTMkgE9JM8DQ37SyDUDQ3sL6pXoV6cXwjVMDbzj3NWQxwaQg3GEt973G3rvBeaq",
  "key2": "5w3VnvKgzwLRfFavWdXPAx1MC77nQe3zZwVFxoZ4QgS2skd2m4t8qTXhT95eiNrYay2m6AEDmyPPTWUi3AdPvDM5",
  "key3": "43j1fm5erBas2FDX4aC8kTAKF8WE7YXAQLZo1XnVe8uSsZFHQ5sC8MoWjq41QwxeHv1DQSnioY8LURvhDTQCKVVj",
  "key4": "2vuCBK1xsxrqaXfNbFaVSBe8kFT271SDXnXNn1Eb5qX3JiZRYQcZRawFuEhpnsC2aue9F33wAbB8pWsH919oKRao",
  "key5": "MEf77igwETey4h7zDLMsGHQnnKrZVitU5bZCX3c6DWzhfLeTa43yGFS9KZo1duacyhHJ7yGWWKGUE6vQKL9uQkN",
  "key6": "4uRLPxvkvYtprafg9CR8AU8ZjpLuScuy92PEmyUoSN1UwvhyowjXZ5QRTpSwKzRagK2rzPttPttUso2dNmx1SzxX",
  "key7": "83vM987EWNP5QmfTSWKLraCrMsbsKmM3tobEnxgFLmLaaZ2WSp6K6m4HRdyDhHr1p8NTM2qKBqsHTgqNzWxrGJ6",
  "key8": "oLzx2FjvQY1ZUTX6YW7ewYM2UWDFHud5gDCNm3ZnHWXXGW1FaDpnKcioBwPy1hCjbzfLwWSGFEptmH9soHjtvHG",
  "key9": "5tmH4NsLeJoDVDPZUNXJhUCQfMKidcFnG8xBDCWApVUmE6ZT7NCiqtoDsowJfUSNqM9yztja96TWJ4XTRvSsciNA",
  "key10": "4vV86uq3R1Xxhkp9yc75gWsMXRe7BKADctHEH2zcm9mAsAQAnKfogcXdCQhDuHQxtCTGVcF9rSDMTJ61KUc9GaRc",
  "key11": "45JD5B5JbZWbB2ZMJYqxaSmLGbsD92ZbEgX779th5SVKb51cNAjZTy59QuG8ZTn1ezt3ziyv9VgvyGShpPNAnFnd",
  "key12": "125KEjQWLiqQyzMR1TxFPSsP4KiHCFMiufqyRqbynKZa14wQJyw2WS31i5nxGfhHwpB9EFXLQmMQKsFyjGEWGd54",
  "key13": "55hoPXBE7WKpnEVRPksjqAtRhDBh8Q89Tmd4z6AD8hPNvsW6meCp4pwhqMQjkZjybL5yLc81Tw6RoEdFN6uy4TTU",
  "key14": "5nM4JDcis6GsKxGfwa9QuQ3i91r7XebHJeDfwLjzYHznnpwJoZyntYyvK1YUyTwyaR62CHWpLj4UbW5e4SynBdNE",
  "key15": "35ggXSn1mBmsdGs1hnJXhAatRH524L7kWeYF5MppiWyVNWR65hF3wjatmm2VcV9FMEW41UYe8beKEo2RR4tJoBqc",
  "key16": "2BRhBRKxdG7CzS8x3UdoLAVQjefj2mZTwg1EabwrRHwUCdW3zWXN8o7u2q9UCy73VXSrBQUNunWgathYEEhByBmw",
  "key17": "2Xk1xe7Mc25cuvxX4pYKXjZuXL9t28yAcXgwpcBm29UfhcEW5DurhSCgm8pRFTnZkaR6vtpC2fQKw1xdqHB4kAcM",
  "key18": "3bYM7EoGH33nCBCfKmKwMukGFxMQhRjfcZCkCdk4WbhkqrdJDGcm4ccFW4nRHvvdM8WUUjGVgDwgeGgDZL1PD366",
  "key19": "4MYgLrU4T4ywuYVv6XDBy8ghxe1gGDUdwi9eb4gczTQegjBsNykJJFNGBQuWxbw5YHMFoQQaJF4wdXUSifA8cME3",
  "key20": "2i7C2KHvT6hTRseMGQiZWupcSiWrgoGNH3hy17tRnqUbebNZ6zunYRqx7bD3imuM9xWieX3mvs76p6RCdLgSMXPq",
  "key21": "5XstpVn9BguwUxDno8P4MKZym7kQc3etdToAXnz4WTCAhB7Fx7xYs8g42NrWKyZcGXrdCJJheUAGrqvqsWXaAhvc",
  "key22": "4mQ5P3TafLcm7Esem6VHAMtr1dsbSMDvoU9Fzgo6BSqkHrB63utU2KCq86tAoYNSbW7GCLhmtBkUXXGSfcF2prTL",
  "key23": "59u2ZEkQgiY56z49jsyh8RApxjzDQeauxFMyGrugFzn3zH79MQB1J6SUjxr2s35SyfechzKY4pQoY694wdgtV8hq",
  "key24": "5jKJ2ruPp5m1tSjMyAhN1tBzdWRH3hHVkmDZDnSiAnJB6GQdTQ2a7jN5CLBt88V3rUCiyckRKsHukheepZxgQeCz",
  "key25": "5xpCmDYenDPjviHfC6TynaRdNwQUqEGuQ4B6CEn3QXbgyEUeSFRPqTHjnR4nCMAcKdE1ZLUpwQaUKzsAvg8XwSVt",
  "key26": "5jzxWets7p5RCUaXcjQjRSKa7P9NraWWGvBS1EhQxTMK42CLzxCDomdWcTVH5npBe7tYc7ujhGwiMog9RDQ2WEE1",
  "key27": "5Mi4DfeTvnpmBKNp4iZgXYSMoT3wejUQR16eovdzYJvcJDPro8narbgmUiq7TvKxkez7FUAjzV8LXfsHy9rvZuhh",
  "key28": "5RBA93v5oKSLZCQXd1unxaGtUprQ7QR8Cgida28tGKsvgLNzohhjoLmARpp1WMFsNZxtz75VmX4JpEDoJzhzYVkB"
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

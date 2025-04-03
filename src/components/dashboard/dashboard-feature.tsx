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
    "myHW3xothUuPtgQj6fzJW6PqB25edtBgFxW8jiLGTzDas1cVNNUYx7uJFks6F4neuojPoYGuyLgT8ParLPwf3Dj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gNFbxaKtCqD1bWFoqwi6bKG7M5EbFp5WBNZmwHuJ5YWuhcBk9VZAq92bkgvmvN7YVxGfWfnAiLfkE2gYCPpjJgi",
  "key1": "2ADc8mVoiHDfpbkkAUyA8n6KNEQ9H7NcvMCsHqvL2RRYJZYSj4v89eDXZSogrkVGTGkQCfbAC2VwMynSNBQT3jji",
  "key2": "5nyNKEyK93HSvVhGkwab1eAiZdCT2NLqXAhNx4ySgeYU6r4EUeaGWRzcFXpE6UoNHHyUXju8c8rTPMpqLuMKhvqY",
  "key3": "5P3ELkiTaAWfmQiwexjggXzLsznJjGaa5w46tNAtYGcDp5ib9Gfa1YJhjn2mv9M17iDySSqeB7Jc3pHFuViATu5N",
  "key4": "58cnYc56jqwyhtH8P94d4UndUNtso6AU8J1fDNSNoC3CJJsRi8UFe2jKKuGZL1emXq5zr4aqSXAUQ9ZTmqV6nhRA",
  "key5": "2iZEMgTsV3ifetHFfq8tLZyTDPAHUXvCUi3KdA5DG8Ph9Hm7DQ62PfXksb2KDLhyfe31njSvHiXuvTm91DQkwVsF",
  "key6": "45Q8z8wq4Nx843BBUyARSAAkFmG9bRjFHUoqZhQX1grsMQv48KhWYV4ZZFvFJ9NAXQafPAggGFRHxNS8ok17br3P",
  "key7": "4F6FDmv4hVRfB8wq1FipLLTnN6cmHThPPVbKuZ5o63aRNH9t11UtgvmBfUiSLuhKMHjHKN5kg3uKcApyvRZ5FTVE",
  "key8": "4wGikEYWHEoxcxMyQtPrVS7o8fiKVMU8eAfme2No5waGSdsmAWjXXU2Dj2RDjCy8dUwuCKvWPXFUvNqwQyfNCLpc",
  "key9": "5eEiDw2UvEzVdfzncLAJXF1vfRE8HdGyDsm3KjRFzarfBkcZHJxiyzWPH5TzGcbZm5xcaXWetxkMCk7NGqseBVLu",
  "key10": "2aNSR7ByCpebCknQWBdwqc3PsjT77Mo7wCpEfNhF7XJRehQUVRiTw4UtVbV7L8V9Ve6LRQrZQ5SR9BUVjJv8ZwzN",
  "key11": "2ywucKDbrvHXfEgLNVrF4FjXxCSoSs5fAavCWGH9gmm3BU8x3XJfYNcpjPWwk1nyfsY2LsRbkno26RaL2Z7DUo35",
  "key12": "4MtTtd96rUGYzT2cSrhdLZjjsRXCbRkw9LTRVGFNsp33FMqkdkg2hhTgYdkjit6cFxMwuKp1JMFysv6HNrNA3nBS",
  "key13": "3ooWr1guA9fBx74uSWKm2W4XkmWn7n6uwp5QkLLMpFxKVNeyTCeFk6hfWA5Y9JPob97C1NnM4rh4f7yoSEc4CpAA",
  "key14": "4QZGkDD4HWNxXfmgYwr1EfHkg9z2ggwKKKnf4xvPrx4x9PizPuBQbsVxi1jJPMmvFSeFCoYZViaXLr3fnHWxsKEX",
  "key15": "U79RSQ7huQWWaXoEo4yXZqZdWzeXpacooQiLB33bL8iN7HMx6VGHhbQnZWKtbQvwqj78JLeHn6SwbiBEe1QYYnk",
  "key16": "5d1tvdUmfbwxQApx7LWNevK31LNtNAv4LLofNxqXok2ZWd7xWBBHKNsYdegWNv2FKnohxCHCQ334tPdHtebMrsaG",
  "key17": "4i6KSyjJjSFdcPBsGonTZB7YFQh2v59zD38Sv1J2xWSytYWrLTcNcrfLKtrskvupG3tFGzsPjAg1Zy2b1YubgqvY",
  "key18": "2P7tn742g89VEbQDV1TvJfyyYtzeyxNS5LSuBABWLuC4sguHJxHy4JeWgdAynwYMwd8aqHMaPEaacVA9QuTjnreZ",
  "key19": "42avDyTUYubujgXxUJs2UmsJ7DMjr9myCK5UEBSxyeJjadi7gsnYEpnF5n1GTFgHgqKoyp3Yq624jQgr7De3vBPq",
  "key20": "3YXkmi58TTurT6J8TeazfxZFUjcvzZLMLsFJCgtPg7iH5HidiqDFeru9kuL5wfoTZGkds2yPdxLEzG9r4MxmyUGg",
  "key21": "3iB2G8vqkpaaW752Y8W3CL4aNMf5ph4ZYHe1vp4UjRJM55a3rTiDAhjyxXDGvgCaiLKUrCvDrbunp8VpSg8ZRXiR",
  "key22": "AtULCTxfnvR8eyx5nJ11SbHW33SXneSwYgwEa5Xa5MnfEtBAFhp1NNQqezWqMCqNe9Hs1LBXWYRs1dHnNJgPnEE",
  "key23": "28vJGCQ5J8sHc5hCRyVxUX8pyv1dhNfL362t3hpQqeC6KkKZs6Gf2hLNeB38ghJU4Jrg8YvazNUcM8gKwsRmhrWY",
  "key24": "izeuKFVZciBSLQ6oWauj6dcRPbZC2WwwC8hUczvau9ioHSbY8ZH7UutTSBWsWWmtbrDRLCJuD5Y5dfTVJkmgJfu"
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

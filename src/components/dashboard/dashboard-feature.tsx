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
    "4AA7Rgq2ZHwo3xDvwM8VGtbLr5Spsui8i6UTPxTpWmaQTb78ouxqv337EzvNmq1Dbs1koEF1k9nb7ZFQWWzyzLB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvFhNfzRZ1qD9nWzQn2tNWnUtDJFTQJiRwtyowC2gVDNAFfe2b9GAuhThzUV5Ady73PVC8KAiJcJqRnhGdbHrXF",
  "key1": "5gNLcCBgKTJkD9eJgFYy3AJu7yTbwcb3JKS8ghfMPtzNDTbePKJLTTzRK7a4E2Ms7Eie9FRf8tR9mcYRSrZBWPxq",
  "key2": "tQSxEVmtjuEG61hrxXgtP9FRR84M2CVNhGjPk7j39WxTLMUsLMrryP78qCFtfxHsfKqRLXGk7KJ3jGGwj5pB7Mt",
  "key3": "5DpQ1KHb47TpFBcy3sD1LVo33xz5RrRQXazhEhNzC4ntvCh8BhyXqhpTE8turApipC34jB86cGZMhFg6oaHiGAPT",
  "key4": "5ZGFUV3PsZs4EHpCaNyWyVW3jGnMnH9hbhReK35kgM9BRuskU9BJ99LTA3uFEZhitV7LQArwLMeAjmzanLtXHJup",
  "key5": "2bMQsNRgMWrisSSdD8vbGTpdCmWoDWk8m6T6muBV758gLiqprocSurZWhHRcDCQskuAZEiykVeez9ditmEwvLku",
  "key6": "aEgp2rqe1QoMMyevChp3yHAPpTCFTv6GPAdzofDXMrDDYEsXuP3cHZVyhyVyJmayNFwYLbePedyzXbQQLR8cJAj",
  "key7": "2zwbWuwB7eAmb5Ubm9TiD5A31QsRRwfxUUjPH2iq3FWbfejqQ1vygGkV2zeQV4FqcAayyosBsuT9oP1UpckivBYC",
  "key8": "JrGdZsg15H17c114q7RU9LfRq6sNDMxk8coracyg2QvgNYT3iBaFM2ihWF4bMUMXt1kFJownYin4TBXtWJ9RqdK",
  "key9": "3MnJ6gxXJ3U3hhzzqimXL3rYX6akGeuN9XyFz5DYV3ehAYQ8HpcQwA4m2EyT6FffLNaWAqh8BEpHAdF2MFsFbAgV",
  "key10": "2tJfXCX7JhX2RcWUYrcXvwfvvyQFrFgEu2oDR7BUG7G5QKqZTStp1e9WfcYakFdxNqxkTbsYymtttz1x7mBir7e2",
  "key11": "4Nj7eMXibto8Nxw7pUfPcfSguuoBst6f427zRjLiVLsWnBmZhP4Mwrh7kGtNW3pd6a5jonNnQM4BLB3M6PTzW4aF",
  "key12": "44nyGSB3tR8n6FyL3s481PPua5XCq5vU3spXZnDmyzDjH5Gd1EsQ1EBrSL2SAWbVr5uF9bQ7oRcTGevTKkWtDWfE",
  "key13": "3V51my8469kjfnS5jkUMXAporE1yKKfToTCXGBMcvN1mvPRNWA6kYjnBKZt1NEnZ6We9pQc2dZZYFx2ppioQE4Yf",
  "key14": "4xthLqk5UrPUMV5iWZxJcRVzBhkKwyEz5B8Cam2rdRDDgVivmG614v4iPSELvCoqNa21zaokBpwzg2uehXY5RLwy",
  "key15": "5Y13psJdxUG4pDuhrozvwxakyt2XHzfenXAYHu7NoAcaxcLEge5S4CpwvQmUSDpDHSZBQdFT2evsQC6h6bkJXvf5",
  "key16": "Dwvx6ma8DW94gBG8PacL8k8hSmdKvAeoA556dWWBKWWvcGAgytX74WbrCo6nJW47jP2SD1vHz2HXrdAHAPpasPz",
  "key17": "45fv3kCtkwnRKhNTgJShWU4FvEAsgPbZ6Roi7neUvW6dLR1ggdV7U33FV1b7yiuyDd4KuYCPEV8QgNcrvwiTnRoG",
  "key18": "2Gmc1KAtLFJgMka1ioChFccYG2ZU8tXCSAkLxsXRfwWgAeZbxJuzqE4dYU3M6u6Uad8yf92NA3Jsei4hgTtV9XzA",
  "key19": "575H4gBw4HUtcQCxQ1pds3cHexxMFVwvuc4HMXgKC2suXBr3nsP3LqBkavmy5f6uJwoqLFFbv39jxxFxmUabqV9B",
  "key20": "3etyXXFbdSGNfZwKeRBtjhN3QwTNVSKbTP4MdD6nF12ccKC5aqMx1vSnP9Pi9vB5XE8ASDm98hSqKriQj9DrNKRY",
  "key21": "4mrQGXreKhfWbbdWwYNo8SjW4SE8c1oGYZrCB9S4cPySd3wucF6t8bNaeGQpXfcpx5tzXakPL4fvereaHZHRqM1B",
  "key22": "4iSK13MxMkbxtKxEuNrZ2unQaVVzafhDiQ2idF3nrSc2ED5K39rJ46CZ3iuNGB6Gv3zqHZ28Y7ACGjCY2uKb8uX4",
  "key23": "4taCkDfo41RzmhjwGRExKZTfxdm4eFdnyRSo63MrohSPDGv7AVnzXNev4cPP5UmkT6zgpppQ4wLwHtaoD9hS8CCL",
  "key24": "rNn45ranwA7Q267HRqVetqPmpQ29gAt8Ry6GAdZPKh3BKmxJ3RwGp1aJHSW9e5fhAawicXSAhRrRApegpqWGvPC",
  "key25": "GRqDcmT5nEChQJ81Be4oDnjGRmhA7o1iCSrNM73eD62jBQhvJpmRo21HjCNnSbhQJbCRrtep2wePbyMazmqNvso"
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

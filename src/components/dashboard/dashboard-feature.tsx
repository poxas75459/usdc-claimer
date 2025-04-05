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
    "27gBtSx6myKKW6dJoEVAGJJRJ1zi8rVForFSTMft7XduGxwTMD7Ac76aSPYuguWqdBtBTqQADv9PpzHgb7fQiQ3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zq1n4kT5JjH8QnYjoHfAvCTkmgbW4ZoinHbdotViKhH1A8YuJjnqQDaWXsbYCi62Ms3etBEPE2JFXwGcHkuJ7MD",
  "key1": "3QaRCyvTXw2YhvWuBHVyqbSSBz6PE217aNkryHNggxquP7vuAaK6mU63ZWqfKe7ehQm3Fwfv6BZS3JurBrTiKJqZ",
  "key2": "4ndNDjTkkzYPqXZgQx3u5d62bLngiwLVof5DToTE97J9Grk8juukc18JTntb6R4nSXjqrRM3Vc7TQNUXzrbtzKyB",
  "key3": "XLyea9jDRm8ZvWV44S6nBdTyJFp3EwMSXytScJb2LamE3NhK3GDa2dzAuLayJXsv7TF1SmtESAcoV23sN8nQasx",
  "key4": "5pDoqgwAJZGfEotHnTAW5dqU9m7kUfKwddExYbHzQHxzz2NtKZbx8y4gioGyk21Lrz2Dy34iAFCouaY8JoccaTqw",
  "key5": "46JbuGyYBqhpb49uAjmL4jkinoJBEfDXs1W3nLEeykCwrurYDMkg4visd7H5Q3ZrpYcybXzKCSPQZk843axAX2Dh",
  "key6": "5T5enLADD7i8xuuGxgTJF1KJZTeXxWjCdck6a9yRWAQs9DTKLNaUystTteupT8Uhikz6rPE4vEcHiY95wWa2xLiR",
  "key7": "KYp8JT7skxF5sRuAdyDgSTzDwZZ9KJd2dr16tQ6fPYGxo3dMYJTx1yFN81nm1mt44tSiL1AKKGknubhgJ6ZGD9F",
  "key8": "otRyEefo2eRNNJDBySaQgEVNgT4hQERiJfzwpMsDwS7BEVKFVfmdfVawhyd1K4w6ngKfhotD9akKEGUCuboSQ1L",
  "key9": "3xbkZeDRvMGA3A3n3BqZ8WwRFAFEGkMrksTqyjheKqNNMTgEW7fEXWEWBKeVR7qXyGiscg89osUCqVRnNfBBqhn1",
  "key10": "32MCcCVGUM4EuTaJQbj2jScU77FJTgoiThoygmi1ZALAQfieBt6CJh67zi59xsjSoEguBKy5Dcs5kWPNhAQHgXE1",
  "key11": "33s5Ew6pZUdwwYJ94iFeufb6rPtxDGF9YV568YzvmX1JZWQ6Jt1eSAw3P685XpsdBCYrXaUZ1YNRZMYrham5d8dz",
  "key12": "38wDHAt2ZXbJ6U2pmSxw4eoXb5aHhRoX53pksSw5haNLKcTa26nLPHLAQfUrt9iqPHv5CqAJRxfpFbpbQRy5N5Pd",
  "key13": "3ca4ECxHWJDdeZJMFvNpMUPmLhdD64n3Y35xQy9v1seBN61Ho2iytWfeQDgYkf3hzCnuVQcZ4iHxyKe7V6t9EHzU",
  "key14": "2pwEo41yLTZZGAD4eiGRuv2XsrdCBrQrxY5TuoZqWw9vtfoE17TVCVMUdvQjCyFhVDHr3eYgEY2DHHMuFG6gtvec",
  "key15": "5oPmnCGfvFwjrEkbb5yX6S79BeoX18m4BXhzE3bwpA4A3vGFAWLGqJRW5xakfPFkCom3B4knGjKMACE1cq7hzoce",
  "key16": "3D5gCJgGh1Axqidp3dyTVosovzrh7Wp3AAwbzLQvonTCoBmziW27yqiYX3XFxxvLjd2RA6f7EgJAjGNGsFHumZPu",
  "key17": "3yR6t7RqqnZqFxubC8friqzHJiBZmJBNH6DYKSiRBRzNqepfv4aSftmSD4hVUQVemiftp6fQ6qFoJpYfRscJZXCV",
  "key18": "2Pizx2TSxPvk27mcyu8CjGzZB6kyAS8yduh6ZHQBqYavZLEnQTn8Tnca4zQhDJfrk6oQiSucrryCmaMbtPc48wT8",
  "key19": "8nxn6Yf31RSDJ4gCMb1gfspKR8tXm4bGWjRvCeEmNu7WfN1Z4XPfNo1NFfbzqcA36h4Edj2i9GuGBBv9EcMegct",
  "key20": "pg1mrkZ4vWZ5DP9EZmxxpcAKZ7RY4hhVsMneKLaZoNMo36wAB82QNzF8FRF5pzTRfvpSKDK49f9cXD3JxVqTozp",
  "key21": "2HNwgce71xXjnf3tUSKiSKd7LPdW6iWosBAeuHUxBYDhC4ESmK5auWW3p6eQXypzZqpJmCnDSus61nHMavowiRUr",
  "key22": "4FdjPeTTU5P4Nh7PTKZz4EaDMNV1RzNYZH3BXU44GXMe3yJhsH3DsdQcaR1KwuJRQ4AuYv6LgQt8MvPqeS1kGXJT",
  "key23": "274BYcJ6hjnpsTLxun6iwWFsZYUnNuarmP3m5oDhL6ToUJKYthkkd25xi66Vi2zpSXkQSqAvKunTQRmDoNP87xT6",
  "key24": "2R8fNrzXS8MHXk7GotLWWNStB2UzwiVM2BFTZTEXaGdD8r73hM22L3iBgCBQTEykhLGZUgVKHrfyq9NCHWvi43E3",
  "key25": "2Vp6kCVcSZuBuuGunggiLPX17MH39TwFDTEYARbzgEAfPphZRHJ5uBDJZ5AZTKmpbQ4CwAipuj2ahd4pctf7Qe2q",
  "key26": "1yzoCB4D3sfi9pbCJ7qVLjTpbQMhVbzpgrEy6jEKSH9u58dDed2Dq9DbTvdnt9DHfjXUPxThFMxhNs1TDzjhBeb",
  "key27": "2nUgwJGEucwh9xTnHTYrF1XdAHX4ZMFJn8kv38GUefoZ4UBJBTHDPCxGCbCoVdgGE9ESNCpQqxdpnNr87p6ZkDZs",
  "key28": "4UapxmWWXjFrgcbEaXXt7gHn6wBt3KfQXzBJWt7XR25BATBnSPiqLTmVsXt6rUjJoPbL8MMDwZju2snnfiiK1ZSv",
  "key29": "2shDneGHGpXdSyN6KKsJKkjQ75vJx7hhTH3b5S9NXtT3Mueh4j81R9gi1bZLtx1o8smhvD6EJ5u7zLLvAU8WC1Tq",
  "key30": "5gBzsAZAJrtL53U1rWb3m8vRi2scZ5M8Nz6kscCguuz8hH5aBPq52Uz6xQCWoxVDQJXQsme5tpJsCep168CGEmcB",
  "key31": "2hz7TJc1ApASMEFKd2YCT5N8uwm6tmR6fDkkA9YtKrGtKWkx2C4ms8EoRVGxTadkaSUnM5iJCiFgo7iH1GD4Dk4Q"
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

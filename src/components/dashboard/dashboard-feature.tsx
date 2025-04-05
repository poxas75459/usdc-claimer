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
    "4bs7pa34cPbMzvDzQ4iNnbbxWmjtkyTGzKtZnzDC1iW4vpPfcwEnmw5gufKka4rFatoW6CoN2rCJR4FjWeoiD23y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnWF8gEe4KZqwnfZfpRthoopu5u6zwq6e3z5N8YXMR4Nve1aK8aJNyAQHJHygHMXf1KVkUny4CqxGQZU7FurA1D",
  "key1": "67gqDtfSazg6BxvXHGyXwGCFwhWa83XQsq8mfHSuU2DJaCW928S7UUES7kV1Gf9ediDaQEZEPQVEFFuPUCzZWdaN",
  "key2": "4HGzna1YyC5sZSHkx46RW7CP3iarANFwpQDa7B6vEwhS4ka9b6bMRCxpKJ2wP7XgzhcPFWK78vuy9pBa6MREu3xo",
  "key3": "46GNbhmCwj6voQX85jNCZnfXWju4VZYEKspNkQUpRNfjE5p3ic6vZjTdXLsqCjvfXr11JkdmAqaGshj3Euymyxub",
  "key4": "4yqVu2MJd8VxSHrvnhuHq9JWScjwdny1KCdVKA8KRWSgri4dYhEurSKGEBhebSzL7VgARg11dRMnDKD3WMmWbpMN",
  "key5": "66Gaeok3DtH9zFw6AK1XosMDx3NvLUZ579inZeUVWPT9Ef7UaTfZ9nomQj8q234btk5hadgfKAbaHgcwss8T3hfo",
  "key6": "pLUEHBdYuE1NM9GCdTUydPPr35WcZNqoQvqZFw2qeNtZKwK94XmwhgakkrwyqCFFVd8WsPoQXJRxAXmuvqgMcmP",
  "key7": "52o2J3XC3QCm4y7TUKzeXZ8txfumhB74k9JDPAocuhUUns5wGFmtf4gCjnnatziPb9A7pdh4bL9paKVf3LvQ1uzC",
  "key8": "3j3U8MHzEwq21z36674EAUeC5wMtb2Gs3nE94nRGTgJza4cZpTKUHi75YMejmyzTvhV28mBwy2oLRXyVvRqrkMuZ",
  "key9": "dxhg6jyhCNe2sc3MUEEqHoEdEDNrvbHuvUeu3wZY5qZfjVzZkszvsUeeLeRH3vRamg67jGHJQtXQoeGJsGkEEBh",
  "key10": "5WB1fkpuMauuVLsuwDqyLMaPyToFe1ti49Kyu7mrkX5diEj7dvC9x1MZVPcYhU5Ej47Z56AFZcBjYu8nF5mPHydu",
  "key11": "4jzSA4iAkfrYcGw3ZXR9tAjc5jXTpTARyXiDsW22zoWp21Qv4XgUpNcSLbX6ZKEqbcer5jynSbmUA4XdKj59SH5b",
  "key12": "2JiKJkeHZH5yjyLVNRZLbDmwRxb4pcp21CWTAtypHaJmVZKCPh1EqCq7zeHN4pWJivd12MEawarDCceq7y8uUjpC",
  "key13": "56c6EHdWBWXNGnDXj5fqc1MmYxo3ZExhLqNJi2BcLgUdAtarwmV5mRQFX1GqDSYmRhmMTiFcg4cJSk7jgC2URdqP",
  "key14": "4wgc6ZW9ixSwNJFibdYxn3mBiKSZ3DzF796wJTEDYERBtJJra4hxodJU2CAvyjF8GjH2ehgPKPcmPnTAR3zDcM6i",
  "key15": "5MkNSFkLZQ3htSSPWfzo973dxmhGvS6dNiPHi2nkVVfY7kWeQ1GHQnyXHKnbhkUCsyeYaMZMom9cF42y8pgtUCZC",
  "key16": "2aN7NCcpfqh1QBEDncXKtgrajnWjNXiNaQav47C9BzS4JWYSSScDZe8B7x7AuRT4n4bNXZxLkEH1LBjaE1CmVAfa",
  "key17": "2Hd9od8dyJQoJZMr1WABFyeh4oLfoQR1mmchdYzKZG2rdXDPvnWghzMpyhThqo3VPGCJ7LBxsJsP56BV7EcY11fP",
  "key18": "3uiVEuNuLPU9r99g15dfu3C3FtWZ5xAto4iZkk8Y1MQB6yFu4mq3GfYNFxHiut5HYW9gUzrvVhxybqa3NejbhjyW",
  "key19": "2oVoxKReaKpHc4rNXY78ycoFnhKJ52AmEXsyc5T18zaX8jsJbfhATtJfd31Zpxbo9mYGFCMBdrSrPUk5R1biBnyi",
  "key20": "5VN69sgGBZuPurUjxYvSTPHzjZ3zCmjjDbiKEc3vstcKxRdvhGPGDn5gnSW84XKY3rjpYGwdDaesWp4xRjRRCzpY",
  "key21": "3eciMrhDXKRrP55KcGKyEJZ7Bh354QuWgkXYWzaLsTM7NPMmskpsSeL1Zkne37GVnedqbW7cM5sVQayKbcFTzcUq",
  "key22": "4TDGZ6rtV9bR5PK7VzW5JBkTFgDonHFAC9Wp8yYa277Y7U6xi93NnhvZgZH213QBLcnWsrUx4bJzbGWfkB1wSwg",
  "key23": "5mdJTVp69GLwaG7tT2RfqLPFQTyq88RHJEHdPzBB7WpEGFsKmsdrJAsCnP6eifxnTQqk6D5qfYvpvAbh7MeBdU3d",
  "key24": "3WBTo47LXjgf7FhmqsZfrHQFbhnPwAwqoVQ9mPyXvD4yZ1cp5ntg9meKy5seQFB3VHo3sMvVyos8H27BPAFQ8dbS",
  "key25": "3na8AdHx6zwCxr6tdNaoj2wNHckZsqB5rLjbHzeTyGYkmWbp6upvsJEUEs1M84UtSLYdiHmfS1tnaqAzqbicm2xZ",
  "key26": "434DGYWpx3xgthuHjYXcrqMsR6J8VR74L2mbQdTJyL7PW2N9kAFp4dXyM4xLzQvtDhBMK2L1vo1XGnwHK2s5ttW9",
  "key27": "4fgPirGFJNxeR5ocbmyPHviVfGRUmzy7JZm575ZKkyYTRCAWM3cooo3yQ1soJdspVkp7i64UfxkwhmfoxsnmdFtn",
  "key28": "4S4MjUHENcy3jxe9PHmkoGkLpS7CtemCpXg2b8DQjowG6QUZYvhwZqrkLkbEt3JbdgQTq19qVfMV6hdfR9VvY4aq",
  "key29": "289LkzMvFxWe5BPvHydX8tvDeJFapsCCVBsRGvbJuECsZP6K8zZJdn8p5rNmpn3jQxSBiVwpP3ijss3xC6w18pgp",
  "key30": "5N4HcZPzV2uMqsvVooLZa9CF73XKhV8kjT1ZDQh1KLYULwwXqLkYnJVfFALfwuiJ3S54ymsM5oHusbHcdqsyGTPJ",
  "key31": "3oJMhgVq23SmN21GLG4z5iMYxEBivbFfcyZ2auEmGTcbeXxib1n98qJH6QhNZgHopKQoLhqHJf6voxGoqn2r6RYT",
  "key32": "31uZ4fJcgmmmKHNYqLRhA22Fo9vHEY3SW18E6G9fQL2wKpm7PujNdQ6448icb48v9P94TYM4D87azxMnKdbniCGi",
  "key33": "2mjnex6aZgHUoGT3nLfruxwDhMWkk2vsDSTYaph7p8YsqwitGPZWnT2bbY9kfH88mTBKEaQLBjtiZhHfMfu3JzeY",
  "key34": "5dKwK4DBMQySV4HuG3robKmaJigcXsJo5g5Xe2a8CYjTL7BKvxwxMuV5SBcssx5pZedEPieKr32uBbkccx8ZVLdD",
  "key35": "48XTAhdd34Xn8bCqn1UD7fAgL21gXA51gXTqMdZKQK4nnHDQMzRxsdceV9AEiwNaRmCEWhP8JbcmUkKtTQsK5xwh"
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

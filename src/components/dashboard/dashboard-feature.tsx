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
    "4kvKQ4QnNPo57uTZBcYAzVG5hH6ZJnojmKKtB5A2DnTti2fUZvpoYocfpRKCw1yGMsenNnrk9L268tJn2PGAERrN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M7pCPWNR6iUvpsV5SAe6tfwzK7FadhBRAyymHh7mBXQMPduec93yGTZo8v7A4t58LJzGj1bZr9XxsWuvEDFVemx",
  "key1": "3e8P4mamSGZHPo3dua7rCmSw34fLi3Z8yxjn4wHFYXB6zMMZWvWZvzuQSXCX71Tq8UE3dt5ar7btJSHDikugMdyE",
  "key2": "dmbXqotBDyzWCpvWrLVuvxLEjD2EoXon4ZPx6BE7vEVXhBouniyXnLUKLRmymLxXNJa5ksRg3E9TgPxFx2MezeG",
  "key3": "2HcpncYqFb2Aw4QyZCGNZ79RUg4bSJv86BZGtNif8h8HE72wtB9GnHhsNSjMqGPQCrLB5CooQxoVipteBg73WDx9",
  "key4": "5L9QjeW2N3dR71XfuiXWkBRohpMk6Jth4xT7oF51NSfRdEdYC2fZ4oVvsUsivANCNcV97reWTckbtG4f7yRdPfmA",
  "key5": "5jcRrh42smG1eJMsrfeAeyPfwBPTBGH8h582yC8qpTw5Rj83fEY7v7KDoRgTniV7eGizJ1dWREwuEcuGDyxneLg3",
  "key6": "3EsnVNkBnKFtRfwkERWRLcCGU961eueEHBG5P3i4oJ7MuZDdTuAChUjC2F9NEHYpP6cWkuoQG3Z5EuPDAEJcvFW7",
  "key7": "5QLK1MWtBStQhoa1CAhWetpazHbyQgEMWNa2denFmf29u77FZ3vf8c8qVyc6Yyqv7G9KQV5cwoYTm8xkr12t6EkK",
  "key8": "66Nvv8R9jYBRzjghEZNM1CPwWSY3jedPA1Rn6Y97NYdRo7nkJjCt8UL9Q6grH6PJchpsfUK9iizjzBnivVLnz2qY",
  "key9": "61xYpf2zHC5zv4HHYRhKfSJ5x3aVi8AFPzjZe467wfUwVrPCcDRWV5qqQDjruksjq79N3yKzRaJw9R3aZiLGQS7U",
  "key10": "21FVo9iaVbsthCVy9CSjLjEhjrPj9mRu4VQujrAAvYooPoHTLtTstDE9ox1QebJ6hEMT8hghXDyENLfMEvJ34KkA",
  "key11": "2rkcC9LN8mzKtVsZCGeeE8X9tn3iCFeDxsmHvZ9J9XSHpf28V1pr9ssEX1ssNCCYsRHUecGMhGp7FT8ESVse6ZS5",
  "key12": "5uaSLrCttTrrqTmVr1f1QRqqsUMUjugUGNsyPXGXpHSGUPGr5tadpsfFVJc6VrC1ppK8UBCV2NkHW6dnv1zt2VdJ",
  "key13": "3jM51CWC4gMtYW6cCt6jMHy1nGsar7eMNWi3yjBNxiRZgfybhg3YkAzZw7aS8ZoXuDMjQjZY9dVdM6cKu6Xri6zf",
  "key14": "2yNazXeFTLehyeTKNKkPYJUhuRAqhRVZkEgWPw93jqfShraRansjfB1eT6ynPWrN4AHTR6NPT63zGrcS2eMqbhY5",
  "key15": "2B4C14bvoJHQ1Qie2VAQh87CFDQpyCttZGHFhzFysvf4n8atzNEhVU7a1K4kscG14w7ipBuyX94URoK99JPkQEq9",
  "key16": "3tP636Tq7taAgtU6NdLmzntC3ccozCdrjLwFvRhxiGNyV22ciZjFhXr6kW9SJCKu6Jg6Hdrg8QQVYpxM11gayPpd",
  "key17": "5aZDnxNHdJALTD2Qi3up34yQ6wZq6PXfWLanjJqJgi85KaFTpGToDByi1twAgbLczLgZbZRnqEojX7AC3qyxVMRe",
  "key18": "4njsCgGDsjJkkQSsdKdQ7bD3fuYtN7vWruxNWdTfpTVicNUz25aymPrbBmFmWV1F9GrDXn7g8GbYV8tBh4SNsDeM",
  "key19": "5HUQ25JpjRgvGQzBTnpGeCBENRpWkptvvDKJqfDfD1kdg8qWAuFqoceamW18MkPfXeauh4r1FXdPVrraxx8shv84",
  "key20": "5xTBZwJFoDefnCEZfpsKxuNeAzwseDSDHP8Cy4Fa3rP2enE2MqN9btnx4NDcWjmgE1to9evpJXTcSC8qHNyg3w6x",
  "key21": "4J74iFvqGdLEw55xca3mJGmT7qeSBMpKmnWhL7Kvp3PDx9iTue6K7F1ePSqPU5RTworNeFLY6rVsuzyLq17f1Qvi",
  "key22": "5mZWr3hrNnXACyLWpbrBgoH6gU489ztexykATkbE6Rmp9La3h7LwtZaDsFV45bXH186U1zuG9F5WtrUN1fwgy4Vk",
  "key23": "5hYj6ZxAbXGNCHGnztb2xgRPpfer74tMGyHyafxX2smLjrVdwEuczGp66b93VRzb371CeoH2SnWaQxuSubuhGtvE",
  "key24": "4yjjmdYLbz4FHGHCM6fLZmKNyHzJ7ZEgDt4L46DAWN28NUPh7UvH9Ro5yV31PKip4SpoinAQ3Yin8zybpuv2ABpe",
  "key25": "4b9Pz4g9UQxtoP423sMuYiRFEZuopU7VuCVaS8sMqJBZ2KdEPCBV8xBopA5zLLHhPm7pS7XUhiugCjMVRxyGEpH5",
  "key26": "3E3dhAGFsnxHueTczfStvV3bGhPNLL7XrRXECKaa1LQKHA8nFrUKJkGj8j7t6KS6XdvMu8gzyi8FsXB7jMMWksCU",
  "key27": "59GmqHK5nAaFcK5YWpTxc5BCN7mvjnzKPvhFWtSA8ajfWrh5ZMLSB46GamF1iSM1fDg3iTvAqVCXSPBhgxhQUADX"
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

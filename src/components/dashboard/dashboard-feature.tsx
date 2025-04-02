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
    "4acban8xhaQUbrTapcPybdGasNa3dz4f4eUXiV2FWgxZ8mNSwZQJTzgwPP73Jtamw9gpb8raCa8PSfkjzhNeDywQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MhRRBrmd3GMiXMv81kodHDvGM5n8TucZfYuyut3zW59vLhjnvCwRs1fXxWqv4suZUgYA1ATjXfRMW8iT7w8g4Jx",
  "key1": "2Uz4CJGxN5D77b1pw8AxPboztCSTZxjLhGJK4roJPc5v5Ry5xPS65UvB4M7WohaSjimHzBDHB7thPfLkjRGHjwFr",
  "key2": "3jNynfdkv5SF4w38RiU5vwhED5rVyrHi6U6rs9Yix9QrdeqBzukPBkWMWAt1RTQWPj5g7BRcqUzuPV4wvaVsw5Ai",
  "key3": "ti1d4rNbMPiA2iog6TmTHz7ZoNX5RtfJCwQNAoSWq1xhh3J6gNvJ2R9QbkZ3gzG2b2aZqcYvK1Fu6FdyYgHEXtv",
  "key4": "3Wp82x5VPnxDaTcrkJS3kogD6YjnXavFECKjJTecesiHeMJbwPgdoqDa6efB3NhvJLS2MEp2GgE3r5zqv93WyD4N",
  "key5": "5onWLPhqpiTYvzHAVFcGkB7rhaAREgiaoUZBWkK4HjWhHwKXwtDMNyGQ43UNfDH3SKXqKM4Bij6RCptHCnNSSkny",
  "key6": "qRHLWqfdL2FYCLMfoBFdBCuDWiAd4ePgDCVMgEpEJc8oe9bMUvVk1iWzJEcJi9KPksnvLdYkVpzmZz7tKF6qFuz",
  "key7": "34Q8cQLL6SabvnBBkWANGL25DfsdT547PGVMXqJecGnbBXeyyat5TJYMErSCrqjmDQTKpWHhNRzSXvSbRjb5w8Du",
  "key8": "2FgnoZN4zYSCTQsfbzKdknowQ51APxv7oCBLid5Au75HcghoV628TYf2qAYr3V8w7Vi8zNhSDCdtvHMpwmxKk7J9",
  "key9": "2jsNs17VCAXnSWntQ1kZqQiPvu5Z1FXQW2MCzQRpkRJJjg9bjXvS4zSzRacRbooH6M4nwJiuNjKCRLYfQMtf2BXp",
  "key10": "2LXFwmaxqLGq8puNnMY7tdT8WkKCDUQSVYozo28s16iBDktxNVjAaW7AASark5ekSkXUSxhUHkKCpmUNVnJGKPAj",
  "key11": "4jPrT3wX9Y9sFiBmcaZSKzgCz1eC6CmNw8mhuEErFk4f7wnqcaQVsLEgaoNTN65UiU42LEkMzrTXQtCY7aro5m8o",
  "key12": "4fNj9qZZVkyfhuB3mBSzCozH7wieKUuoM1K4m69VMoN4G4zLcBN1Qw3YWekBSZVdKgZKtpVQFtWN9fzxV5LDxBjB",
  "key13": "37LtdMqw9U8fKM5arJ5LLuyTwVnBtEFb7GaGhpZcU6HSopvS2y4aXw7MPxG4aNZwkq9pj5dP3aGnxqpA2wwKGNFw",
  "key14": "31MuDq4cBV1dmTyX5wdNnKvmpHPF9hQy4rfB2da9tNXsaQPDnAS6YNDKjJ1WBG3jLzKnsvrxYP77FK9E5MMEuFHk",
  "key15": "2yquvSR69sL89YPdVGMzLgMcqNQu3XcFmxXjUEGdVee2ESQ9mHta6BYet9mjMkM2fYh4VWbDLfZZ48T4ajdHsNGf",
  "key16": "4wr4zw2SR9CQS8xqRJHnbBBewYesghHb1VmjcMhAso3cPckbK9pcyqp8AvaW1z3aPhJNvvqhz9CjXxCchbMpVqsB",
  "key17": "4xKrGh6gBjPwJUicBmHeSEkuPh65WQEWfmhmWwXZGz7LbFrgHrMv3yuBLQ3JDpAGn1rVwEEY6e8hZgRggnBLMNLz",
  "key18": "61VZxgkod7CgXoofv1vV1LfpfVG7MSBmiefCDwTaTAuYrDyCuncyAnDPt8pCRP3ydSygtob9nGcn7TtM5Dyb7uQ7",
  "key19": "2PDUuirYgMZdH5vySsVWxSCjNatYaF69M4ULzTehNR8EmXudbsAwCd6EtbTwpXmEm7tcq7KR4kB4t7NvetNnp2Ti",
  "key20": "2rx9aEB8C4Hc9NH4JmEVtyCa67xnBnw1rmkmTxMEJhbStfA698EHxaL8C979onhHSs2mmFSHKU7zgvMaezMecGST",
  "key21": "17sMm4TmKKkYVSaRCpxkHCjVBVSGsyiXwwVZv1rZFamKw3ZQhAaheYavUJtUw3M8Pi2DPp6ZxehVXDZenDW6b65",
  "key22": "4t9KGK7YTVVio191CYMcazTdAhDytAjwBjJcUgaFmMsGheSUbg46VZ1x9NSoJYSaqGZxRkeJWnGnHmdQi1KKXUov",
  "key23": "41RgEX2cqm238PaREBTZGbBuk9QZk9Dzdi2Mxpm9K5EpsjwVzRgatEcbJPCUMSkwzfXVtVhTBCCFzPEnauhDkur9",
  "key24": "3aRE4gLi9y5jJ3Hg3eqM5LzBS7viSBVbS1saTPDDPZkx9Lsr13W7hbip2Qj9qZ8GisnVvEs6YRYUdB5exNa9XyP7",
  "key25": "5e27RrMVRWEh8hENAkDMd6NjrZJ35s6PKCGTHuMnhJdrwayaXb9JmBMCEARNnEQiRnrBv4n6v5sM3BZYVeeWCb3k",
  "key26": "2Bd2gEM2UtJExFFk3WkfBE9rP5sNNKnmbbG7jvFe37daLVGDVqaEQQTQxzyDweihypxRnub2KvuShw8nPjBhXPUa",
  "key27": "4PxnqB6AVis8U89sBzx3bnauzfEWBkfVn4oT7NpF1TEtoy8v6d7RK34i68wr79sjv7Cz9CNrxZAEJy7TSvZBJMPp"
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

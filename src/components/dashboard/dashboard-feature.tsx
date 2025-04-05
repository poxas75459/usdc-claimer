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
    "E7UiUENwHC9nALhEYPTKQiVbAycMMTJsxh2JPFsnYoA964CgfBZ4MEkkYBFFrTi9Abdu3k2hhBooNaVBiWvtQB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6x873tUigD5zqrF7R9RRCeRNsQPA6ygfAcMuWqDuJUNYmb1gbumZnS4gwtsCFA3uH63kAuRdKnZZwaZ2dfraFTE",
  "key1": "6X4GmjuvQ6kV2DFDhUEMtZfi5hUAm6LPTYPwFXxqY7Y2eBGKvYweLyQ7ro7fhYgJSyCei6jbRpnkF2q7LHHq2jT",
  "key2": "5pq2CkixRMueXaggUm3eHagfpmoDeT1uzJVzy1xkt8tk9ucAy8MVKKgmLMnvgrupTKT5bRSeHLaoCMFAsS3wSou7",
  "key3": "3RQhU1NKskSuy4iUvxmoFcFvbgqpVECMHU3aE2kJda435DKQf8gXwuRt1WXwadYo3xUZpqHHazFpQupMnsFX3MRb",
  "key4": "qdBzjYF1FpGRwWkzECh5iGLpp3oaExcafgtdKoKobhYqnj5UNax1BbR1UxJU7NcwophFsxH4izjzttieREiJcWH",
  "key5": "2YKQAbCpTMV5YegQEraKXBYqVxYyAbdy4ooUdkjLHMw1c7RihuPBB6iMe7uEmYJCzsVKZN41FGZ8geKbAKak8j7s",
  "key6": "3K3eD1n17oR7peq52SU1QEocdA637tKDrX3KH1a92QoQBbn9QK4smmpqSABV7h79wUSKtXrgkJfrnJLxo9GErVos",
  "key7": "3FyofBWZ5tTKgwETW54v1NjwVpUdu8M7L1ZJGah7TnwTu3Ertakt71GwizAF1gEibzXaE8D9bfnzc3Ygxa6mgj5X",
  "key8": "3Jaa3woACWnas5mLbmjALVtyYaaFWCwzZK3ioxZzGoSTwvxSg9wvT8d7fbT7CuoZHYH1o1i2kiC5jvXkUvLnqSZM",
  "key9": "59r7kxRNkmZnKHAy9R6Mi59rZL8JiMzNFDxzgpaTEF45GVhww4M3k1kfuqdi3VzxrmLAdpQMBzQSyY92U3FbyPCC",
  "key10": "34GUGqA3xNyLby7soaUca9xzBU1aNb4ekhTxzNPvRdeD7EY2zpXgqgoxpAo8MSeAQ2QXsfyVim1o6Di8cRScx2jo",
  "key11": "4MLoTgPNGEguoqBaXcMFvLkqUmPbBgZeS4TLCqvxoAYF3wqH5YmfCBJxJLW2uxZTABg8yifEgJiyXir3XErGD26Z",
  "key12": "4SdiMtDqbghLBbaLkNcnrPqp5oHzUgvGg5Y5cdL3Vypj8rTxfv5k5MD5tLsjUSzYpgLfEbwKCAjbp3zfp1xVxbSX",
  "key13": "3PUD9dkopRdSxaDa9i9VCqoDJ3kmLpJmVSc2SZz3uigGKR9czQwnZtYqiaPyn53YrrhU24GLuW7ztWfjogu3jugu",
  "key14": "5TLJvCySnMZgPTDsDSiworgohyWPs6XcWvBmBXLRzLXjndRYtGXQgCw4FtfBpMfdCTNeox3yAG7L2ZLsZzBXkciH",
  "key15": "3R2nxinUckYLwBGWQsQ5JDBqqAHy2u1usXPG4rrBtZaidwDTMeaVjCxqyidy8MiKgf89bguATH6G2kouMrXkisMx",
  "key16": "5pEKH5kQnTfQvqh6p9yF5EStbxrin19G8XEbgeg9u4uJSJWqzscoKQonbMAsdWFQuuX9ir4yejFK55uva4mahhy7",
  "key17": "2YfekF16UbWo2yf2bAfA65DjYssSUda2suiXBgo458R6bimM2CMocYUFnuodBDnxy2mhZ86gcgJq2oUPR8TA2adY",
  "key18": "2tdK6uisSMWjGKaC6uYYFqRa8qPaLBpn39obZLCwh2kw4B7yuenHWZWvLMyWaRVWyiWaSGAPD2VQYCUXkdNvaXXo",
  "key19": "63tBHpHSbeysCULgQofmL94V9RmGTx95u3qMqKxZZ9MFkJ43ANYG6ZXrjnm5fM11HvmaV3runLFdwPVU9DjDZyQT",
  "key20": "qVGmiAvT3xHWobh1wBwjfBMsbx4Xxic5ZwBtp2ySup22b8zLzpu6Vj1B2q1294kyeMik8gKbsjznGKmrGA7PrKu",
  "key21": "3WGqjG11LJUPb6tjUn7qpvP8SgieScNckwYTpA4DmLSaYTDxqFK4B9NsJ9J5bxvHoy24YbDUShrZeBNcVSo2puLW",
  "key22": "2LWVf2cr9q61BfnuXMbwnn5hVDCV5uVNmPUBUs7DLVo7pB5pxRS6eQrRGWzZoN23PCTCEoHgPqxTGw9QvopzMZZ7",
  "key23": "2njdxHL47uun6yMBQoGfggFFTrBbrWeNeyzLfNjxs8Uq9kKwgGjWXQZphmh4Pjvrvn72Cz8VpRd2kvgJXyrUFhda",
  "key24": "2rSvzfkuYAmFZFmaWFZojVi9VY2VXxnqCRVWwHzHMTRonJfsJcwPnRdRZnpJmPRoocSEH6QmWse4VAXbt4Kzp8LH"
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

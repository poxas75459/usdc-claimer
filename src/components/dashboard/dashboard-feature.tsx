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
    "55pWfHNcXyuqhkBAdNgZb3SDD7z4WMZRBf9ZSNfUszd9YY7SZbunTTfTtTVFrGZvh48BoThypkLN7Se1XyLhgp7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eMqLhR7pvC4m2tFcFrdmgQNxaANrDtmXC8hPgLYtRFv7TnaNJqkASCq49nwzU4u9X8SdZDzXwBCK9ux8KxQp7PB",
  "key1": "27ajn9LWR3NiF4BCec6uG4ycJQmtwRrBizadM8AXhqujj2Uuand6x9P6SiW9vmSoYpJGDjaFSK8FRdAvfEcDX9ZY",
  "key2": "3xqxCbe3sR9T5svDdQxjknXzgccsiTyxWcdCxWDZLvTTKnwHjYiu7ezDD2DfzHxfGGNT1tkC2oPD2Hjv26RUCABL",
  "key3": "4zY9AvSQgcQiVdurcpSokiZcUv77yeaLFR8GjynYjvV8xupzFuhbyVt8UU5tPUGEM3o8cTSLU7GqhsqogAFSqg3K",
  "key4": "4vGyNWss4v8FnVgiFuMEkELhAYAEgou6V9wUeYLzG2zM1SdRAw9HopAYBjsUgPfyYc9mbnD265NbrAUuWCivPWLK",
  "key5": "31U3muuLDatapKLCT5uba118XbCoctskDwmsgC2b1dX7SPV75BsrhxHu27bkeXwrUxcZv8tg9Uz4qSaB1ZJgGkfg",
  "key6": "FkUCbMdLhasp1WpXVYedGv11zhY2nHaueitixxDRpV5fJtnuCLxyrXve7zL4w136xTAJVRT8dMYiWSazmXBqpfg",
  "key7": "2iEkwTFVSL5bx6vsj6CK6evaXUcqUNgJXdXkNpZj3vCELQv8dmWm5zn58r3VResveRwvHBxq1SSCTDy5DS6yxPJg",
  "key8": "2dyxgfLFoNs8ps4VhTTQfed3X9aRPZhpuCKPJxmWtgP2JMffTESLGfrtuxU4H2HFKtMcD8XSJa1kzThjRM4bpBJB",
  "key9": "gEx19r3Q2kYcFWC9qNmT9FnTVHeQuXknWfAmHBsoGkS3Zgj8f8hueHUMj6FQyoK8oZuFH9uKok81Z44pwKAzggw",
  "key10": "4UmEah68DbR6rSgt3rEjcuSCDhvkzhjKokLXeMXAeCqVb7aykdPfx4VHHPfGDJRrS2J3z2Ntzr1rHqhwTH5kRuAA",
  "key11": "3FyLfv3bNynKYj5HQtKDdqmgZHQUYmjkpPDyYvGRhNkppy3T4QtcrSMTFGfUzpSK1UxUsz9QJzShb4mmgsysN9Wh",
  "key12": "4Lekt4U5tTCrwxgsR6rhUMsosDvwmk15eMPReuinGe5fvWNHcMdSnwtdVWXDw9QZ8TkiRUo1p2AH4xCVdvqAcERk",
  "key13": "5cCqymzbcPAeJ6cbVxvdYfxiVz6odG9iTntGjZLHdM3yTgtvNxu5XXAye55uRRMJ1MPocU2iqU2FCL2XvFJDzgHo",
  "key14": "4btgqjBEGuMJ2kqPmyVXYwfzcSbpkrDWmnY7tNyxrZa8hd7AEMV6Hn5sR6f6dcqJAJTpQqLjNryj3D7cANNKmC17",
  "key15": "4HSwUiTfcfRV4msxwiKwGT6LwNAi3kEcYhUPHFCMLmNRRUxU3KJEwSJAY4CNGYvtvPDoNFy8a6XeWL75VwGThpys",
  "key16": "a8P1uCFw3c78MQUU8CFZsQ7hFCjDsgfcMwPtcuwZsEf2hGVAUX3UTt6z5i7TVmfjzJQnKhADAbGJ3et9zSos63i",
  "key17": "659ZDiC9ZhTNAXGa9pPfgASrpSj3jtgqt6bN9xibTcW8ZiY64CbeJ9bfQHytifeTMYWn7RkSgVY7G5y4Rk2VuRf9",
  "key18": "52kJWrsLL9yyv8tMCJVTzK1MTrtY1qUup9m1PNmeYhW4ZqMSe2kMS2PM638SoNxavTdzHKTZ6bM2Tgi69B9TsRJ1",
  "key19": "4Sjmfd2XcbGfijoR8WCA8zQ9ibQfN7cDd94C6D6CMMgSnDpPVaB5d1injosDK5k7tCs3GzBnL1XL3ADenkgpMPzi",
  "key20": "25shPQreUusBHag8WQf5gGPr6xgjTvE6pGCC7RuK5F9aeTbKA1Uc8fZPtbcPsV2zVdoEqpa27z9FWJ4ZqYQ2YaLL",
  "key21": "55tK6oQ5eUGYBr4W4Bx5xrtewJgV7JvBUQ5aGESv5Axhb17eouKH1KHsuFjgWKDTWSexqZd1AfhT8d8GNCyAVs7e",
  "key22": "3tymMQTHFy6aXJsgep1XZ3Abbzzub3yJge4uM1UxpLuwThQmpgQgrcWbvT1h51ESB7Rho76Zi4Bf2KVp5KcZCM87",
  "key23": "2mmq3Wf9ynNffjfquiDudLWn6qVts4HdZVVCWdKYEB8GLnJix3ZYMkYFgUBLJfdA6Dw6pcdXfqhDuZeyF6ZPYpsj",
  "key24": "2qKcJfU4wD24Xk3EzgRUxtav84vARNpW1QJPPkAPi94CLeBU8VLvSc6qv2Dqj2Kh4k9FDgTJwdaKbLSVJ7g9uNG5"
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

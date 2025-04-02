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
    "3Q87PFGk5YQM7SJQ1Tk5pf9iAohwKz4MjUjYN7z7Za4cGQkcRvBSPbJmuo7knxAq7wJ73sTzFe816HcFrAnkdj8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43h8bjXZiLHxvHjSWet7Kyer16MTibu4DLS13FCgMoxWccf8dFGSvgxj59syJpmbgjusq3JV8TqRdys6F2vgpudW",
  "key1": "3sGCDdUJuGHoab4kx2rZFPEiQuSKXCntvqZ4V1XwFMaG3oEbU9MpYuZeNWaTGJWrUEGjBQj5cax5Li6Htf2XNQK5",
  "key2": "4Ysu1tkzbCZTSGY1rUW4n4acL3N7Rg76bXpxh4eiGNAbTYx28D7q2M2Ab666iGaSaBvu1KE4HonT2PVPuMuMke5C",
  "key3": "G6HaKp3sZynjU32LsFwMJj8jTtF3gaiGeWKr5HBywP2nDaQkXS8JqXrgiu5HzHBYUy68guHDpULy7RGYR8ANW3A",
  "key4": "pPWJv11vWQNdTXqYUE38KKvTAvdPvAMimkC5euXm3uTcjXeTy8MeqJWQCZhcFVUJ9H9mFTvp57pnwU9F7eN6vJ6",
  "key5": "SLx88TifmdPJ2ynRXA5t9jjSdHBHBUnbZ2b7iGm56XyN1TFKrdJXVWuqHRmCU4ojojtFPTnPgYUeRwf1Qm787zV",
  "key6": "2gH1iD67cDECwhELFvctsa1AyFZTmepbhadGKoJ2mrUf6etpRNKNTJyKmuruk6mXJD8VrHEN5UC3Z3kQmWm9VTfy",
  "key7": "3bEPt5WsshBMvMiCxCyQtR3Dvk5K65m23BqRcFyec6K3txd8eXdPrN7NgmZLLg6ebFAdqLzDoTVRDF27vdVKypkG",
  "key8": "5jqb74LLvZBm6oEiBGg2xnzYwsjDE2F8iTtSC7gEBFfby35gMJRtfwK2aZhkQPV7qocjCkBRZURAJu1AxoHQMceJ",
  "key9": "3XrvgRxVMVqxb5GVMStQ3Dd41Gzt5DtbR7qXzgDs4kbF56KgDFDX65UAhkVyCH1SAjKJp59VDSJ6n2PjyN7Ny5nz",
  "key10": "5DD7BeMqnQBLFLLrYuuA6Y9upRQLX9wXKzbmmC3WDJeaBBt78T29eAcWwRL3fRJxJpqM54UHp4L8QZSszkuPmjgc",
  "key11": "MxHtykPTBNSiyYVhPpA6jKxE5fnz5fA6zWDQRVHMPq8yTSAQwbaE27qGNUQq5e6WFJbWWcPHJcLM1FZYkzTi9iD",
  "key12": "3P1umj3bWeHrAKMoQspqvowaSsztouW4pLF5hRcXKr9Fc1wLSQJLwPrefBX7to1oypqNTFdeLrkUBD9zSjjss7dZ",
  "key13": "5m9sjWiUaXtJFNq19kn8hVKjF38PAM8eiEPTN1EKghBt5CjKjnwfxhn5u3ngjVmaHW3dkaVvciZwvcgWcuvfwNM8",
  "key14": "3wgMj5Y2jawMj5Ur1RkKLBd1wycagLiygPSGRELMvFgq4VPTxFbkf17zG1vUxM4VbtJTmN8ugU8NpkzF6mkzQvST",
  "key15": "2BxYmbBoD7zPWqtg8CKX6fcaLcoPBCHmYSQAo1PqbgmZLhAXgUbWSaoDrFfKFEe2wXK9kHj1j6QzTE8b8d4yPZB3",
  "key16": "3YdrEjt4EXFnEhqfba6U8VLBm5EUzGa1RJVw35hjh6vk942cLsK5QLJnSGjDHLrzsok2aVd4ocRUtfcWre7BjNH3",
  "key17": "2hXKsrPWM5cezpMqbsbo1jZRAAYSZuvTFcpX5DMtgiJ1bjikAku1LZHv2M3oxBFs9T3J2v8K6eNHdmTxD93wedem",
  "key18": "4en2eio7yTkvmXGH8UzVrV6QoCGSF2cGUJ9kQrbuj3BqyqyiHgaTpCN82EemXRpRfqiBeyabNyHeNrMpyQUzncPU",
  "key19": "5dGravMLuTwP51rUGWH4v6oUzyiumPhYf9KCndjiFRJG5AymMN8xzoTTvDkrN9D8GWi1gmJShQbNLrEneMminzaY",
  "key20": "qYKErL3CVnG1yKpYDBkV6dcAz7vFCAXogKr4KdHmUybeZuKp48NWDUTY1b4MeWsvx2TvgpYB2HYXjLZRPCzn8LU",
  "key21": "5yXvg6CvtyVcJxgEVqGAdkbMsk9hrDwnWyeyJo3Ve67KTKBWvip12zZfKP8Xp2rfNcMQvwYekjWMxk4rnxu4DU4j",
  "key22": "5sidvejGecZVz3urQvPcCPbo9YDZztFPSeBqnaVmtdMvocirumBiAmNZMxAtSBgjHff8A3Pryjmj6Ya1FpRGSYD4",
  "key23": "3svZKSpR1T6Bbw2h6MGsTnwHJVVZfgXS164XBPRNrpmcSyRYDiKBTsacRGYnfPGC5E5Fp6ELi1n1FQfVN9rnW9dR",
  "key24": "EevcK6Lg65Mqu52VohCpZvWjU79hi8Wrh3aXWiYg4BkJomqDYJ1ZrK6TCbrGyGiHHQZdd3cyyVU6pUgYzvGL43j",
  "key25": "4zSn3PZgp4AGpxLWhTvQ4JFo8L5c5RzDtPAYjogkPDmqPhCybmkk8NWsfbnmtQpraLEJEUJjSFcquZba1EPd8nWN",
  "key26": "65iYWe7JMatNQJVXU1ngjnbYhbB6qYao7Y1dxnFmwGRa86Jomd6dJbLSydyjeXfGN8mbxjfro8f62N5SkWcNdPbw",
  "key27": "3QabjSd2HHJg7J6cuJHqa8PJc7CbZNvBUtCuQy3bJ4UdmP8z8w8Z4HBFC37r8BMMuU2iExhJptCNb877bcw2uo1n"
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

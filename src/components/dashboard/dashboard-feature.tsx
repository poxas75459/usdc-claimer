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
    "3DcJfCGFRW3tHpjRqhLJPmJZJd7xcGhuD4dqSszUyEHQhD8u1wp4bhUoNrMRKDHvoD3oBsb1ysM5nnzEx5osGhy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMgTLZJJJvyWzRCD1hdv76u9n1BeMeAmwtJ3jDxH48JswBaGjwvn1DBPFaYMNTxrX1bpDFTp6mF7BmBFgJf6eNc",
  "key1": "1DBGdHtaqZKj1QMeF8buakwbnn7aTfe94uqdo715SLWFDb3YinpajMKeerpXkhSYp6aBZFUBFA2njUHQjwswUDU",
  "key2": "2BhEogxJonDPQpB5pU6ZnsmZVB5NiPTEYdc7aHeVxRfS875U5sQy8yQL5VQTYQjDreZsfUqWxPvcQ1TUJ9JxdxxB",
  "key3": "3Swvro6PqpcFGdPhsVakpxkn7RyvVYwcR3BvjBGWGLha1eQoemQwdzYekgjgAs4e9dsomGdXH7mPvwr81koTTcue",
  "key4": "2aRR34ycb6bbpKQu7weiWXMXKtDFwmiZxKkgJGu6LykF6shPxnWCX5vZMopJ3qBtqVKTPZDJAXC84jFYsvANH95P",
  "key5": "285LRnYpv9aVdBhrrZanZosV3Xh2jR6oBXdzKojJKkV5xnQRcK3eprX6SiMs2Ci56EBsDugTwiQtZqwqXFkc8zxD",
  "key6": "51EsmpK98dSynjtxy8QzwznKUYecYKgwjsc1Ne17qvxKTY3MgHGi8Tvfw83xhSpiC3phPPNEnZjQv1nCzTPjzzPY",
  "key7": "2heYa2NRW1EzkG6QJWxcF8AoucGT9uZEGmYEdJn92twkyjJLJyA36cXuJEpjSyr8cA9kj9s4WqmKMLPYYr7PLT34",
  "key8": "4jMy3getUV85bGqA6RRSSP2kv3Um8AQyiKQwR2azxufRtYbQoep2TJyzze7tKA4qgMNf7i1txUXQo19Cv4SfU9bX",
  "key9": "5pPLLCdw5yBSw65HVT33155mQc5nm9h3SYs8Za4jQQVpURK8sFXjwuHg1vgErFYGQWaE7QXjf1gE4w6Axq8dJPsf",
  "key10": "4RVRbQ578CZfThxG8gjes9rSV17L4rFk8Rn2EYfbDaPpmkwkEQdCggst3oCxmt4i2ri1huGtxksJiFSRqP3w3zHh",
  "key11": "owfynV7BKRL3a1MmVVjPRt5Xhw8bAp8jqW17u2JE7rYyfTRrvQQTUm1BZUL8PZF2nxCXssaEed4mGTBvXZJyCuc",
  "key12": "4j7s4GsbgLWdAYU11GxrHjo6372MErr2ijZnbur8T7hh7U1xn83m1DQ6F927MQHTG6WujmbybGf6wUxyDe8XHrjS",
  "key13": "57ya26rGC1Y5T5yVGpmUjywS8b3s7WmG3BRMP6EwdhuQHuvodmP2nKfTMx2bw2Xu1BggStWCTiW9pwRscRJZHz8z",
  "key14": "XmQdN57M7N44x2AYZVUoVBSGukNJGS48CxXnTyherpW5JCxibmoZG9yTZ8AC8n4gqGcN4u9qyeEpVYiTGUGhddh",
  "key15": "VSRuZbKJhtBYiFtk4gb1wyyXqjzcnFi5Yo5AKMZUizJ3Hk2GFE4RN5ToJo9HyGM5SRQFoveRoeaFSyhEdJH2zBM",
  "key16": "4PTdyXcavyg3UcranLouWZ8VFwDSLcEjXy3MFCQ8G4xN5D9YYgmFGXMmDvtQb6UCFNM1UY7xQjbKvc99foAoNGtr",
  "key17": "3t9vMBUuzKwo3PXLeXrd3Bdum5sqiq4Jqo3Gy9oz2kVEMvXScCd9Qc7n77V7GuQy2XUGJs7N8k78BEid6FN47agu",
  "key18": "qcsjYdZkB3AMPDGwaKjTKprVnft95MbKJoJ62dynA7Rs8AvmUGE7KY8SC3uZSau66ybnuovp5jWYbTw2onFSDhA",
  "key19": "bUhsazApYLY4NpHSyJwgSPx2LucdMEddyxCbGpdSFcybCshsuFgFdDCasRFYktJMfUTh1rLSgkkRQUeu78zSg3N",
  "key20": "2mh8rMZPbcDdShkrNGGEsxsaFb3Eog3qKZc9LF7wGnnpgG5SUyC2GmxRugXPuMsY9do2eviczWc4EFfq44eetD54",
  "key21": "2NytgKmv7KxJSiCCtLE1gYwc8QPsRVNcypwMJz3TKxTsdGrcqhRt5pA8hRknPcvkmtFDHjapzj35Cf7we9itfFL8",
  "key22": "3jjVah8yBxzjNQRUiVhCc8xHVonLFCjYyik87aMhj51vf8ZgHnoiAnMVoG6wLmBr6PeEMoT4bfCzkuYwsgLR8E2b",
  "key23": "3fJ2yJvfmLG98QVdwNeTvCJcfQ9iBznKzNEiq9mmDLEpJWAxWBz3hb7LXWSq9rQ5n7hLx5axDhiGWH9nVmv9SFzm",
  "key24": "3KBkZMRBVLpX4VhyYbrkgLCUiacqwdp9rEwaprD1iyfx69VKZCAKbXRYP51xPLjoYmoyhFV32z1dw6nhDzj7XxSe",
  "key25": "aTL2L7ywgJu2UVGRxKdFRyA1pCfcndgfrXVCzpGUU1K2qSpcY5T96sQ3cooKR1KU6iAM9A5ciNE3Boy9ZGjpvrh",
  "key26": "nnurVgk9Q9kV8K6YPtqnpUCmUdLnoxqcDimJxAcpSQYhA4mvbwf2aemJX6Xd1tRHugLMneUvg56UgoXPRJVxXt6"
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

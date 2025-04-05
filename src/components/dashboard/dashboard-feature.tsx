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
    "4dmnVUGRza19kw8n7uQy216yw64FoEwp3UkMEv5n3LDoxACcBcFNNGB8dSds8kfsaxuDHmJxbU2Wptp7Ed2gWgzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oT9nM1fWtvMxiY56mzrt9aYdtMfnP7LeJgmFunjEBoHY5a2xb3evJ5AaEAFN2JNtJY4w65k7f7R6Dkfa2EL2cdK",
  "key1": "5QwVLen9LeuryzgT82pd9v8QnHUhZuHpFAhRxPRofJvgk4HnTXNCF5ufqDQkpJLX9UwmYJwutJMij6geGiMcd8Af",
  "key2": "5e5ZpBg2cEsTuYixrrDhUz2VRyz2daJjTSCKFSBGGuvQV8tvc6F14SKQQ2Q6KsUvuBnQWwRVPZtXLtHetNEcqtH5",
  "key3": "4hrCNXAXvkbhEHxHUELF7psxg6vdLqzePUjhiM366AUCMWv9iXyXL8X8ehTkkV4fqXYtTfHVL5VsdZqtrW9cvj1p",
  "key4": "3JEypFzSpYGpztLqSocLH6oJzPXiuPHzwuoKZALUB6d6W3UWuMSKBZxVbcWd475mZjpCwxj3pYcLfKa7F2uLQuwr",
  "key5": "3jJJKbH1CXd1opwQrQGo4p7QsRKRoeaN2vDjcmwZzUv7Au7Ri2YrQ74fyiUFASTw5o6aFMAuoNQyKmtkATK5tQKx",
  "key6": "5DLGT2UGRQTn2PhzkN34xbK4ftmC8QSU4rRJCnpzW3A1fyf1omvUzxd5vqdLeZZ7FNHtf3YXu7hVeAvQCwc5q1cg",
  "key7": "232fjCsYgyegBhSRmZqgnZCjbP1h6MjansUTkEppKjfszNhZUNeJn3wrAoTzLUwFNLS2A2DwbALuMmdoZcwXQs9K",
  "key8": "gpjAg1gxXNRRfDJJauwV8oqG4XZttKiRW49pV283U931uQtkd5ydUWgxdY9KzcY2X96NCJPrLCHmCd6Dvrsdasp",
  "key9": "65dXKCfFpxCciB2RhfHY5USZKTfjYNCNPc7YmESZoBNzB3uJ5XytwE3pp9RBD43QCzcPGV7kNQKAH7CDU9KiEUVE",
  "key10": "63kBme1j54Aggz6QgPF3XTd1LgEjze9NhfVzy77DLneSosEnSt2nDoqyF6T8qnNxea8Xn5ff2t8ojMsph3Q3WXEm",
  "key11": "2SoJaMJtqL5EevLLnYN2g2xpTFpooJt2W7GjFzgdChfzHchcX2QhG6WsxnrzB1ddhFTRJ6HUhSjGgZ1DwTX8fK44",
  "key12": "4cRGEEhjccNwE3kcgC9kVrdrF8LucCuJtZHjjk2jkkRdqGPsGLWP8dMLHxafKgGESh5DNnpdojdep23M8Xhsduj7",
  "key13": "4bX1vuFXcPRHx9VrSpa55eZV9REup1Shav4z8XPpsrJ7W6ozCaj3kZFywhAK3D4aok9pg6dCJcxTF9PWntiqhjqw",
  "key14": "42vjA8z1SEVpyT9VS6TZAiJXPLkP4qwJk4Q5o7gdwNC9tjRtsE3P538AecFbhJg4sUadxDkPwrqbqk8hJgvnY28r",
  "key15": "4HtmbyWvyPtmfapigEqh7qUMxpmzXCN1vgLvt2oWg6aGkfRQkjPeyAVVHjkksqLVbwgJRn4CXT3gtrNLhYr1LRoo",
  "key16": "UqQPx4bvLDyfHedTrrSKXEx23pHzEae2kiT5GNxZqgdSXZA6jXpbhcxxCysZQmKK6txDuBprsFxahPJqCoKjd42",
  "key17": "3r4Prtxm8Qn9MeHcx1YfR1EWxKZWQuJxXpNzUvGZqKocQmYJVX54vZfa3HmG31kNYBn98zJ8N4mQbgKw1W59Du6d",
  "key18": "3KjfSutx3qYA2Yh938X4LMZqGJNKxjtouv8FZW8D44xPuMCTK8X6Dohk3ACvJoAzdqNYzi676mM76gsdn9Y3oHsv",
  "key19": "2iY7bX2HF6foS4APY4C4FrdyfpyB2ppLSCsEEEMfn2McQ1gvKm8G1eX3L9WDpFwJdRmPNtswz9h3sf4oSBzTG7UP",
  "key20": "3CXLRavVG3Hh6HRrxRXKszu2pxnJfS6cKK4hXmkv1wxZ5MwhqwtHUW1bCM69vx9KKfhbT7UPzEEhnKXR8T58LaPb",
  "key21": "415v5Tc6rEhXV5aWsTv9YfbNpVxHaNGZyjFW5zn4YBzMVaNunBc6LLYhKKBzj36Q5jnkCWDnmsiPvt9t4u7P478H",
  "key22": "2vk5KVpasg17MgS3K7a9f24MrUuGoGKzyxh85ssPu5LCxeuLuzpErKF8BuavGNvsfRMD1rDpBkTkm86yYS6PQdEN",
  "key23": "491eDBQsThyCqSTXKAsMScGJrDLKX9Yg3CdJyWo6WJJFG4UqVNc3na1dsJji3XZVroRbggU3tLGuM6ZiRdSjYkcH",
  "key24": "2SsdyHsLcctvxgV7ydcJaUudSxsxiSsoQqHZjpyTqai153ZyjmcsDV8gXgmbRPmJPxUShdqFguYwu2zhfShK8q8j",
  "key25": "3Ca92FtVK2WUS1aRCGJDRu5Jjsx8sr4ffu8JpnrD8dWpQkUAcCzQsZLtgVxSmsnrpZ6Ak94B4RU8NE5PUDUHNtFZ",
  "key26": "3VmTQjxQmcZtNNTfhbdZMafoVJ4hRgBj5vj2sPVjHhhsgeak5itAHcHsEhjdj6oVAD9bpYAVbjKPH2iCWka2tJ3r",
  "key27": "3uF2ifrEMp5NQks1H8ZfN2gtavhEXgrJtH6cPz3J9NLWM2ef9M4D3J41DLjnvQrpt91TkkpohDaBgDPLEiuhJduW",
  "key28": "4mtGUsb13cv1jFpUyeQ7RLgrDtZXgETcaZNRxa84xgDpmzDELqUNBSWcKEMhp4nKjNsYdFxPTYJ8V1syM7SPHdDH",
  "key29": "C8Dn9HNsE1bgnBGixFdgi5Evphv2AfR4oyd92EuAmyrnaW88LiAY1TdT2z442RBHeGreqB84uqX1KqVNojr9JnM",
  "key30": "3WixVX53CgJzhaaJfKveFgmiYoaYbJ3SYphmBYpPiEeyrMJrzeq6Xm7AhAmaUd1QkPSSe3xLQJ8ZzkUYEVG9sGER",
  "key31": "tSqrTnrGmrNsd3DT9CpcYkVD4e8Z1yUQzipUHGet7Fxppbd4LNmm4ik3WabFsW26brESYQvgRktnJfs6CoeRNjt"
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

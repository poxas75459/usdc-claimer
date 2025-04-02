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
    "4mf4QASU6s74Kodjp5qUiJi8TLMgnRU9tJFBccbhu6kbweo3HnzGmNMuTaYLLZ68mkuU28Xb7788sjAvmywhaGVP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JjL3ooRAoAy8xiYG1EnyyRHvv3nmfvh9Biz8Pr5snVdBqxnYJhHkjJuz6b8TnWRJ1rPgZYqLPhH8qfFzdRi4ny7",
  "key1": "58vPh5AwBmsbfCGCbvcZwDr3t68S1hxeka67KckMcQRMgfrKoupyP1xgyE7G24Eao47FUHAHUFM2jpn8zsRU2Sd1",
  "key2": "5qeJudh4WrCgrP6E9e2aTU6sq5pzTpWFrbjQUQKFjP3nkMAfPRJriHUvjyau984t53k8kTvafpSf8u1mr28Xxehx",
  "key3": "3rDrv29ny17cAbVV3ZZ2ZekuJHP38q4cY7eXgqecTF2GXEDna1beqjCLUoxPTirJg4MVeR9qXQgtbSSQRWYuXT1g",
  "key4": "4i9Y8ZTJpbriCuyur3CXU3fnJwUCSgXFrGtFqD5oo5DWW81FKKUw15TG6Nz4iYp8c5SDyzLJySaaSXFp26xkZ5yf",
  "key5": "2R7bHu1VzQ3zGucfEQRgDCez7yj7CCr8D8w7QvKG8aktninCu5qTWJConDAZGmMVQUauoJULt117MQgHTGNfdZQb",
  "key6": "4tU51sJromTxeeeZxeoFZJKjeD9SU1Aw3MC556oW5ug6aKnmhmZ89oVgyJ9G9jRLtknbx3a1RLYy32RdQrQpzpQU",
  "key7": "4knbyzbzgSVu6dgioDPfPV8J4AS3nL6oo1HKvNrHk7YLAdVjDyDrz6dAVop1g6biLnQAvApn4Fyn3og2KUsnfzVB",
  "key8": "45UKjipqtsPm4ZguwpeQqJHr9vTYbpMyCsRpMkhiMd5DZnE9VuwMJqozqCWKYZG2CyjWJCCz6LLHocvb24HbbzeR",
  "key9": "aXdnY2QpKWE9wu5m51NsHkVcUQUcaiAzM8kjXDmGGNXaS3JB12nPRXCaTkdbF8uvWqe3XCqBebHHc6U2SgWiwz2",
  "key10": "3ALHwXpsMP9fW3S8G3v5dH6uwMkJQAiUWSX2N2xxNCPrwj6aM6uvoiS7TAYaJz8ys4EGgsUscPEHdN1F53H4WsZK",
  "key11": "4Znc6hKWVae6VvABAQVQxsVWSVru8eQVak3r3BuwwzY4ZDv9oYE4mhuekJYkwJGUgb8gmvfur3FiGWrmrhJFYaKY",
  "key12": "4bFL3eyGvzJGt4XS78nDvqeJEPzA8AWXGkDRApaXttLdVCkWkEc88RT5EXk1xe3cEaGdAKaBmdhCXTtPkKX8Agdt",
  "key13": "2zqwesbB6ihopFamz1tcJYeaaiAa6Jid85oxAfdxwyGnowUkKj4NDg1PZdfEFx7NboG91CP7Db3hr8pfD4bCVrUz",
  "key14": "5tvQV7PDDfrknBYQhCJTjvEcYPnLUeLZFThm7rf9LdBUTkQxvQjMZcenJYGQcqqtXY3b52aZJ7QEL2j9A2ACcL31",
  "key15": "8TwsRGJzM7XLhVpWgvkcDZyx5xSYWV81XZamnbHmJdKEp8591WCRbhxxjr6f7fgdcCnEwg4wgCmngL1ioAmQb8Z",
  "key16": "43pgc2RMt1ter7Ewc4W8VhYYiSEvdRrpnJ1bXiPhZdmvi9NX2pZLpMEpZA5GE2dXeFdi1bs6anMhTTQbL5W5gQdg",
  "key17": "2fJ3j13dad83WiSWsWumhGgPH9D4tzKQGFk1UYNCjpZw1Z4MrLW4RW8hyf5997wVnMk6vFJhT9Dpt5t266aUAmfA",
  "key18": "3T1Fo7kfTj6Enz1m8fYxBsFYVWyfhditTs1Nrhk3egbSf2kQZR53dtbzW7CQeGujMwqWt7ubV95kUKkUQtQbF9RP",
  "key19": "MRcVuAnVws6XbYiNwKWq9KFs2zwBWHeWNCD1pQmCvvLaGdxDrRWjsE2rdZmaGwRvaFS5Mnp3SxrmSgnULUtrrby",
  "key20": "Px5mFCED6ra21SrEhcwzptckYaWrEHhahqouqyYTM2VhHAvFzedvbePdmYbbgYo5Anb9oWBWSABJCiCuGUGyMan",
  "key21": "49PwP1cLJ92q3XXhZq3yeF8od2vvZsmGWfimYN5GnrTwn4N37BWjt1Ke8P9Vv5nuZFVwD6iYdnwNfQsagA6AXikq",
  "key22": "3mkxUh7xMFrXJZ7SR6gqfXZm1MHFDfxSfTHZNoYvufCbnqGB4FqtLfGwUrZfo2hcJAQQLCsDkVL8AQiQ6QM1hP6M",
  "key23": "5cHtK6k2E9wKBGngk2sgcpZvEXSnBJVU1Mae14JPLS9wMmreoANMTRA4FcS9xAf2gNNJPbT7tosYfszgVJmapTiY",
  "key24": "5CoPhRZB2omrqkiXcQGih8dS119NjpGN7TgDwzufpUiGxdpeNThkG8Wq3tAGAHxEww4TeHmMqbzYNPLFLKKnh91F",
  "key25": "7WWK6Syvfam6UEG6JBfCSze9JJwFZx7kSPoDcdMvgaQzHtx8mmXdcUMfPZEYDA3r4TkYEhwVnib6ry6wU4egPdc",
  "key26": "4Sv8H2EDtHN3NcMGoCrHiuYBkEehr8pvkKWPPCAnU56sq8mvXJLE9t4HgbfZbgEPzaJFCxN2Cfd6WoW3GAgsQeju",
  "key27": "4cE5GJttSkGiuCaMZQuuHcKEe7zLq3My7v1TvcfLL7MRWkJeP6mcWGUVoHfDvxMMCnkxkYhifj2PpMK4QoCSaP2t",
  "key28": "5FF9WUsAvcwTtY5SDcts1YZvyHw8duwfEqcuWtPMiUYWb29wtKLtR9aWCPrfxKDuitWWXFrG4f5KU9ouao95sc2k"
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

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
    "2zU6f1A8E7aUsLRbN5iJvio8sEeJa9f9P5RiHeZD2ksJ5eCZXJTStLAm8riUFraeSsk5nzKLU44QEhzhPfSfMU81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ASC3QUHUzTg5bseAuErhV1eKkbh7rjdqBPsgSrQj56cZrLP38ganQowCav3LZprDA3s87rL635pnJ7yk1tEaFDW",
  "key1": "2FNVkr62NYQxtha45iKZgnFXQpJSmxPeGgVjzHT9Q6NkLbnmWqxLQGTs5eoiHZw1F6yqxSMnVVksh81tXk2RYsiZ",
  "key2": "4Ya6J3n2NXYBPtK4VoXdAWxyJRaasLf5bY7nxoCVuJFmNNvE1NUcSoDNEoYvpWpH67bsULszXmNE5CMJ9vr46RCL",
  "key3": "5TnNP5e9ruLDLLspLGWKzxxCiLu8dU2YPzhtbD9jyiKGpr83B8xxUJmgkzn2YoeW1Ts7qrHnBhrUrGKRT1zfw1Wh",
  "key4": "2HFF3f2juJr2mrKyMK47P5WvV8BKQwnFX1Jywr949Qngx8TTqrrXKUbsUyQd7yPxp5pCL671Ww16K38VXXKR2XVE",
  "key5": "3U5KrVQa34zjbQUpca7EuFWnVdokFgkHTdrCf5TD8VBcc2jDZLKNFRpvsrtcKpSWwWC8xiNyNT5TLB3DzTR7hfaT",
  "key6": "2iHdWt96jMnhJKVG1RdFeSCkGCiyyUAFkqp8tzRR6jWSGDuQe2J7fPYXKJZnTnqN7bbisZsimw9nVwpYfofX9pT3",
  "key7": "4rdJWhUC1UxUmtMUqAVxZacDvkCb9F3e6VqC6paauhzZD43cWbHEuVftDHxmjdGVn8Zzb6BRLg9UFuRGg5vRv9HR",
  "key8": "5Jxv8TUipFpziLxzyiVNRQCJmztsBy5PcvD6MjfzBzSvP1AA2s8EDoTCF79bxCq3KHebtbQNbrZ3AjPAcw2bkaEQ",
  "key9": "f8Z5Hn1bi5EnUa8VyaczBxwFyuPzhVu5cye1Kw83XEXPbESRFJdtqKdrab7S4YwCj2ZdZkKFTTfwtF1BTUdYGGA",
  "key10": "2D2ocjwAE8iSQV9o6iyU9N8xEx83us5gfqs1e9nQ9AAhSmyPUhHNJhUZEo429wPNfJ5ZHenjr7mPpqB7ZFZqrfdD",
  "key11": "3AS417YgBqfynSi5M14BoJz8RHTe5kvPDQDimdhN4R7xrLtRty5EH4qN33xUd6tRv5dEESPR8xkqSXjbAyanW85N",
  "key12": "2mbuSxs1aagTLtoWCNx1VysfYF1WZuZ1k8PCeUfYA56vX9PS24yS42ko1X6eJKCBr6HugFYVEfSp96h2CUtn58CT",
  "key13": "3KFSUKQNoN6L1n8FzJBYWyirbedCfvWGPy6XiiWomvXDorZnrsgorMZVyF59N758y9ywRheJvVWqUd45uCXJ8v2m",
  "key14": "4epXuRypXBistXMTYb71HSUykon7Qf8DLRe5aadVPwg9SGk5Z1RVbYGfdtHPXQdMB3UxvLcKkMPpDWybx4j7HAEt",
  "key15": "2JRiNqvgtLwscDPtX5guqxU9yXkjWNSrNNrur17QRne5NB24HkLNFY2iB1XE6aPxRi56k4Qcgt27juAUNmKLKkFG",
  "key16": "24fWbyFdr1fsfe6ApAY5ombRJKaqQ6sLUQfKPY3to5aUBwLCuwn22zY6PJ97Fs9Z39tUXiARkgVcBmyjm8hrNQZk",
  "key17": "46yv9BFqRSfDX992gPV3KFjwaYRVCYaYrz83KfGmHU1MLofMHKuy7VsM3pdLEAqEwaFar3vJgiANMauwHLoHZUdB",
  "key18": "3xvRmyKdmva6HMuj2YWJUCW62oMKVYQsdBNBC41vMMFMYp4dH3h6thbkvWuTZ2uZsfMtTK2oDDr5XWLfo33iGzs8",
  "key19": "3ns2KneXh9nEvKMPNfXsPgtm9HvY5PDtjkYEjwDXoGff16NZq7wviv8RcjKKkJYKdV3AgeW3Ebnz7qbVby3LeEZr",
  "key20": "24kjghCFjNncg35ieA8T2GJPGw4dHyK4SPSsoAk8WiuLSC1fjymGAnVJQh9XkDCCTT135LvYn6yUWzmfgu3m5gW3",
  "key21": "3n82XA5F9XAd8bDZqJ79E81MasyToJWUt33eZEw22XEA3ZKphkBw71e651CStsyL4MVeEXbnRgLzevDRFh7sjgK2",
  "key22": "g57DEfsqAznxiaA7Ky5xdg7mr4wmWicuwxcHsVCucLn9Fu6t5QHTcpADtz8osKxnfMAKiUDFssDC9hnYpQnqKB6",
  "key23": "LPb6iuEBTXZ3iDwS8VnsnMWZFzUB4LqNfZymnSMFsuaUgQcxVDNqApfQN5RJtK2NrF9YTVR7s17vHQrBrFvPqvc",
  "key24": "5zxaF7KK6KhXFRKgTYH87BE1PJpMLT9VcZ9G4hXaoLPiRtdhn9SETMBuFAei14bk5TtW2CqCqx53wrRYNAih15K6",
  "key25": "5ESBQARVuNT2djBvLNGxXgj5R24uVtspAJzyH9aoXYzUUPU2fDX1PyiEzvRFuqeMjGsTvfkybA9Us26MirVXaadP",
  "key26": "37xpLwWDL5GWKXKBkuN9guhJfpuswb5cvJERApiba8zwam3hNskxiW8hWh3WgSWatjhv8CkA24vCAhmD18JFkvHU",
  "key27": "4NmbNHrQXJeKB7eAjGekRwCtquA52n6p6TjPVoxJ8tZLeK7HXMpayBZyAXAca9wNAuZgPG74ZsZcH8HgSs4vU4yz",
  "key28": "4ZarwL9mhXXBCXDpk1PmGrbgGVn1L5KFnsd4yon2nPx8pjaNxeQvtbtyMPaLHhJCNRm1pMuoZvq7ep8qMHUzpi71"
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

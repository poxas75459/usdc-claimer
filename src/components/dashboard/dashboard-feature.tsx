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
    "5BWV6PQDdBi4KCWhedHWGyqMNf9aYc3HJ245ay1N2LkvFi2mN9Ea1BerhqUqN31C2G4R6EwbdaYDdqSkfUeiV6uY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yia3YdDKj44amn1txrrGd7Zz2kZSNTKjAnEjwDGyy9pkfaGwE6JARgfWox5LbAzXNXgHSM1KLdm5yQXtiegJCDa",
  "key1": "43ZC1HijBcuQfmz8rQYnqLtU89rYCFDQXuARsmwGCR7GgAbfa9ff4HDodw92cyaaemjj8PDFT3d7WVekDXk3XP2d",
  "key2": "K3tBprjKs4NAYDXxuvh3a3bDLefWm3iFjtZtCNxCGgXkLSiGBXHnzpQUE9pbcAMYEv2i54wJmv7FDeVZrDMcDqa",
  "key3": "4922bPE9dSAepfXcptcfZnNDbuHfGwZjuBymyqEXbcaVkzbPu17p2wLoNqJ5z5SP1fD5bYkyWF3U48UBZ63MjyBR",
  "key4": "9WW4YQSZcp6kMbUsq3VCCB9khKeiQFyhMvL6ah5QjZU9aZc8uiGRrEpY7u8XQ3q2R9fqmhEvWSK5me6d7NoUhhL",
  "key5": "uZQ9rM8yfWi6uJfGgMHy8NSoSxdCNz8u9jxCP5vP5eytifmLaV6wgDPeshvzuZELeYQivCPMNBu8pznWyNcaBmu",
  "key6": "2NjSVFGyYYvDkXsZanj7jPwHgxbmxVCeXuS1ZwSdW4kGWptuBkxjY3pk48QJKBA4eWsx4h2mLd3iEX7Bteser8vn",
  "key7": "63c2x7rAGZ7WDiAGWr5kGPg4te2k2S1fXYDSvf2KDVopdZGg9hWciKnsumT3sD4kenWY3TrcPGY7bfR1ENmRdSRs",
  "key8": "2xtBnJaY61XzCThxJn6ECNturSpbqz2Tck7KCYnEQdvvYyRw5gt7xWb5kv1ewWuvZos5jvweS1cDYr2tqUnKm2pP",
  "key9": "2vn6dvp37gbeTxVbi1WCYV6xdHtKTc8LbEx1snatu4JtSRvjhqWzj9uvNyg9Xr8EjCuNJTBouSY5NFC1u9QkBzNp",
  "key10": "dPLFo6vetCoEjcagMoAZjdrNJx37shb1XesDGZZgJ2u39SbbwuSX8bDoxi4ZdQUgUAiRsKqHHT22eJqkwgcakpX",
  "key11": "5XbC357UZMpNvqE4afN3jkpgg5GmzLSD8Bmj3LbmbkZEyKG9FjzUbWFeRsJA4Ghj15aTjWeBoUhdGJhZoHdcEKhP",
  "key12": "5XajmbcZbbeEtPiqBsCYvDXv7oEbfQcMN5kBqvPACf13qmVMhwLP6nmaPLPhu4QD8iocHycXdvg2YJKo15vAVydt",
  "key13": "29Chjpmzn2JMzLfoM58AMn6VGnVU2UFWg7DuVZ98p1avbzYke6EJXYsZoXKNkdSF654cED6HXHfbnCPiYLPHsA9Q",
  "key14": "46mjrwkinpjKD2Zr5RDDLyt6UKccJjwyA3nHijhtZtfXs1yRchrBcNJa2Ncm3JTvwLTYyg4oc71Hh1Pm3wBG1Ds2",
  "key15": "4Xbky3XbiqCLBAvPUSjJsMydpoFyw7ac7Va9ujYxVfZ5nyGdqVF64C3GEsJxCB8TdTxfoRdBWTFGdUBb8iurHqSi",
  "key16": "627fmmKiK3HQtLT13zXTiM72KKZuFTsb6ntRyEuWDbo7qR1fVpHaN5CR47rVujvpiycvH8m4U4fKHqqoSDZiVGiV",
  "key17": "347DVWv38Z6TgbhUqPNtmFniK9JWqozE88iMviNXvYoC2yNcoz9ySkhtFzUnJTLidrpbdbNfPRLrVhYb7jxRQMVu",
  "key18": "29JGmjotJDST5ooEe8SHhU2Smch1jw9LLAhi7Hu6p1poZswRHaTmRG8bGvK2pmBSS3cY5SsT2nRW8Wm31kYqUoEi",
  "key19": "4KZ3Zax1zTibrbsY6UfrzBn1ZM64eLzTWV2hT24ZQynueUwHV1VDxQxQD3p13aybLxTnUZ5nNY2VVyMsXSECbu89",
  "key20": "4hSHBQgGLfFJ4Sx7tBsdajKpeAgeuVECQW2KGPjjP88NcKdqMzz5L2uZLTmcgcZrKyzyuvGDT1U4KSUbeCfsSHNJ",
  "key21": "KBiHp6q1WJDpQrLsDpSAicuCx6UVfMJNs2wtJPTz78wfAop75YMh92MFUk21YGRfuBwqPVz2pqz1xeEXVSQ9TQw",
  "key22": "5PZKEuJQshupozWLoaL8uMH2VQ1TQMkDsHAzyVoVCc7jm3oLbnN1pw95TedpmGmTQWHAWYnfki2bPcxtcai6wsjK",
  "key23": "3LWywHVcmBt2hQWL2cmVQ7Wd9sgai4demEGgNYSgCRjofgvzz588KL9jhiRfDW8nuXKhCnzka1JyM6vPnyjP8CxA",
  "key24": "39TYfHcxzMgBpSjaDev4ULwircGWnuyPRo3S2dtj7YFz9vAq9i4VVfbjkYkUNMjmZnPs3TCMwAMMAADqZ7WGuFCW",
  "key25": "29LC68rigTRAe3zA3EbjJKpKrAh2G7LfJwpUZjY32jRYBD8QGyHfe3KmgEUZn4A5piWGPkWtF7DskKfzETzeRTAj",
  "key26": "gjToCxfwgec52bEc1K38HtH6qWZxddCHndxNViW2e3a6iiztgQmMUqrZQZuX8N674KmdBpXYQitu8dGUSohjpzr"
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

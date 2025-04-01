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
    "4amktGgcWVY1ZfSsqtthsENk3fY4CyCgPtebgMLSmrJCBiwUia1cMqj3mE5drgPcEWZbboYMtCPjesvLkKoKBzXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pJmvhCYSXNYvh4MWWwpj7YcXBNR4qGqJsJa4LdxUsk4puSDxWN142do5P2rKQpmr2nSDCp3QWekK3WdYGC18Geb",
  "key1": "2Wff8p73dbZ4FYgPK6yZhh5zwjZWx74FWBY7HUoRVG1g5V73ki3qsR14Eex9dN7gZe9r3xHUWccN9jb9LvdcxbQa",
  "key2": "BSK8hLx84eZVaPGJmgeCCAohnPnauzELNASmxTyB5awqZRKBmQucBt3YZnr837AdQXZjnGQChYttthMPuXoczdr",
  "key3": "5XxUm7RS6FZwWrSZbhKQXLU6gFF5gkTCBMiyn9PRd1b1aoyrfcVXhXnqGZfhEptXXbcooA4DvS72pAVESJBkdHHt",
  "key4": "5ej7HzpUihNshZrVv2ztYKFZ5ST6CfK9ZGyB46p6t4ceZGzn4gUgNhHBvMzD6ZNdS6snfPVWWsQ5ErmKc8zFFXb4",
  "key5": "3kwpVUNTR1jJddUSoWCB84tPdas43WRQLCLh49NfujKNUXfjrAwQftCpMrGJqYb5bzdYayivcNAuqMtF58jyVjvj",
  "key6": "2bPWu9hLxNMGAzPRqBnmx7e6kJcXUYqinKk4qmoWtYKD4mHYEGL5oqFpp8J4Xfh5CoDiLiMKjsAZQpbVPRQwGZcz",
  "key7": "4TCJSZgUGdL7P7jQfTizd6pR9hGG6y3Nrj5vYdRvfvY1xjkkAikyAvHnphDQyHUN4GhSG29B19QoCQbuQobxs5N5",
  "key8": "zzJL17mwh73ncc9tNznnfxCD8ZziLh7KMAa1ozJRFFz1HoFbGUx9ypoxwcfS9QB7eNE4gtqsLAc4jkV3wUrwbaN",
  "key9": "4iT2gyNHudRvehjKkf2omAbMeBnGCHeYbgyfXHBAZQW9CJfsUqV9aNVKTCbb29D1RSYju9pYtpxpT1tGf6Jkd7Bk",
  "key10": "663KF8u6TjBvPcY9aLP4jmJQYSssmC6J6tys5oBqHdPjMEaBVhu8sU1NakhQFCBRHd4LSBwRfHZNBL1YBZ9iGXVr",
  "key11": "5a1duZhY5jcAmm2msyNpvbdyDLWtEzssZfLPycbt3GhmfeSMjXVrmgqVudHRT5ytMk9ksB1FNrcLYCqA4gaZukdz",
  "key12": "2p1xbs9bysFXAy7zzaGUEdkEByre6BNBgXCqZAkpwKoMjjQ4J1tCaK53tPMtNfu7W7MQLyk9L4Y2bbuDWuCogitF",
  "key13": "5aK9Jozvje8JY3iEuReMDnub8fPusxnQ6JyxwgnMwcuXxCc2TXcNibH2Vy5nBfFhrZJ7Vehb5DoTYBR5MmKkBWvo",
  "key14": "2AD8dtqxpctgJcL4iMxq3W1q6p8m45kNXMfEmoRRKssZ5Kp22cHCJM5764xXJ9cKb6QnMRMSxhExwB1tEQ13gYTr",
  "key15": "5bzVF2jwG6hcSjJ7CqahCVcmA1v7aKsoW3sJxMjUe7tEMs3T3eUj1cwdE6QUnD491RsfwcZDaAr1kjh9xYL2sHGi",
  "key16": "6pU4jcq61wsm4TQZVsTiRBhJE2pCWZRkBvhNgL11CsdMj4ki7mKEMdsKPLd2HDzLFSPnGyZnf4cHxTy7t3EZ76d",
  "key17": "3f6XewuGhTHVFjoGbJvTLiMGjCiLea6PL7vtkSUpS9mqqsoSLBYtPCtqQP5E28amWrwYkwevqVXm8yirSqGHHWTK",
  "key18": "3k3WSDnud1Lc8SZBgeD5cvDR2AsswwwGsSQfajN9Db6j8bkbw5s4GeTL5ZjF4iFNNkSoHP9LUBhNaj34eWYeCr3y",
  "key19": "2WvC6GUBUtWsSpohywQfHymWwUeUKXNbfFLZAjpKhipEWinQ4frCs3H4zTZqsNT6xBwV9f2ETcgRke2Yxc7aJYx2",
  "key20": "5Q2UBZk7hDBugqGcudGraK3vbhWgWMnxguXUetTmk4yA7PKvxr8ujK1zoYGTFC3hL8iGsMt6jdZptsuTXnPDibSU",
  "key21": "5ZiAhuh63yEJ79KAvfnVGPRUZuxYV25FCapAEFnJwkiiNQ7HvWcuxL1G2MPjzYPCfw3vnkynApmxKhjfRFJmAaYS",
  "key22": "4DqcWfNFJZGPpPBkzJb6cyqsD6wZYSNqjQfScw4EXr12uup47UTPbLGFSDiMjRWfZxLn9YrxN5eKCpkmbmbcvSAr",
  "key23": "33ABBYmTG9f7gCvTL4X4F3JraNPgF1npYY1hFAHYfKLoYN5RYGFCABPhd2bSzJnaP7JoT3m9LdQmLaUBetdy6bEC",
  "key24": "4kFbayA3wKZFv67AVZ6PDvWwYgw18ypnwWtZuwU6roiHMSkm2eLhK9qpZ2shtL2DXUGgziJSVNE8cKb2bsx9wEZ7"
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

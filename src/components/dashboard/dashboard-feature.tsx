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
    "4u95vfxQnPCJQhxP62RexAFN4BBZYV4P1r9fz3wAA3jkM8Z7SQkC4RsmFzcDoqPDRwpf66fZeQFTTcfN2SQpEutc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mLycLNr4ZwaCU4Uo2ciUvohMojm3xSvtPE67nGLQPMk629Eot5UFUfZFodinj4VPqV4GpegqVwcHcZEEv5c3535",
  "key1": "3CjwFus9bVvwEDsevbNY97oa9rcsKyiJyrfYJY8pFqA8vJuA3dmra7p39JqvAyNVhp6QRhmatq7UXnwaGmgGZ8Eq",
  "key2": "3H7RQyPy8kjnbtja7FkDvmQ1N1nGQARiNsr7XLiRhxoVpxtS9hUYhXhdkA5Ac6dpaS6ZdQGwizN4gBJGW8JkdT15",
  "key3": "4Li9w9fNSTjExQFLHLYHtZtDNCAg19krRUsn4Jr2Mn2NAGZp7WX3ZVUkRv2vR41JHRaVAiYCQrGd5uAwyfAEsUcR",
  "key4": "vsRbW8sF11m4pwgGzfDmFzGcoY7rHVhsMxEqMeXPL6HRu9irkNzzgZzpZrtDwMWz4XS5C3r7WToy5smebeLoFFj",
  "key5": "2PADWV82xzWKYcMD9cuoSB3683Ci28g8Kb6ed4SKC6mN3nKNduifQPHY8oAJNyWHmqQEXab9F84dMJYfGnyVWN4Z",
  "key6": "4WdDAmsWKiW7xmG1wQRoANGG8QnPouJJnvGuCfyGqm3ddkRyAU2Ji27hA8kWQ47mwfyVcCwpMWcokvH1orWvzF6Q",
  "key7": "4hvGm1wJBBuySvTLA1QTCcUaBXKix5aLTveV4VmrVm1GRYJxpamGfmkT14x89dW95A99Qe4sJe6uDzjaGNkHWhX4",
  "key8": "6216jrxHiUUyULoz4J1cYFT7gJrJ8VowXocdPtFGZF4GRPNhdgdVA5Phdk36CXbt8B8kfD97GP5gpB6VP5kNM33b",
  "key9": "5T5vrKQQia67CwzChfLtJ11Ww34NwnRSdy4hmPFvJ8Z5XGeMYq35LaPjnN7xCRV89RQaEGwcFCaBCHmhkfqhJLRx",
  "key10": "MAmqqm4oVbfT3vs8FTrWz1516NMtMJ3gJJnPfqhnjFzMYgEQLSEVj5NmHsnUFhdbC8UUQiDRJgdQLi5ZbKxtP3v",
  "key11": "3YcKKAg8nLj5hL7R3p1ZGHVvDbNonPMpT5bteuDZX4Lcv8uPbFmX4pazRbKTMFhpJBV1TtQPe9oJCfa8T8Z5EJcQ",
  "key12": "2bLfAe6jpGHF86UFb6oQriAfuAwFd5WyhpSrQCmLxhuVauzf7aCKGCX73za4ir4dmios61yRH8jAdmaQw91i32xC",
  "key13": "2cDbGCZh14zmQ9Ph5tW136QS1SKzySTWsuVyJE5LEAtyVYi3mqBTNNu4BbvDvEKX8igjLoEhoPrag12RWnvERZBq",
  "key14": "5DDr4sZAbmqiefdsfRnGTtHwGV9PeVbRs645uCzcGuNT5nBJ4Buvit2a4cgmsTGQ8Q2qJJ129LW7kVybJBGabV4E",
  "key15": "jQEsjfNA5eZedHMfWtxkkvWrtFGG9yyLxKWnjYHmCjXZKcbtwkVD4YXMfDM993spcttaNzerK6mYtZ1sR9NFSU8",
  "key16": "5S4xpLKvdCKSPYFVJmH6YT66QbHfKVVfXUn3y7eC7SbXTeHeU7XnTYtZFbEgM4VGNoCwQbLzXJxJVGKxURgFycp3",
  "key17": "3SuRUHQGxhNWNyyUYkTWCH5HR7eYSDkXKRcvoRuuvKtbwSBqJa1di2pL5EUFj87RuGqhUFE1ZzWB8WEBPD8p9yqc",
  "key18": "3Knzc1Cd2k2B9TbRKnMF6hSm9WPqTqA8GK2gzzoFB9E6rUrWxvmCWc9gm4vcWbTwV2FhTGPvMckV4vzyx8QJfb8w",
  "key19": "3fu6PU1euPsdeyyJYzCSe8oLPqitA9qjE9hYtgkSZtu7fYZpeEX5CuBXf1wQEUwZYW9EuLHedVrXBJb6D3G7CxCw",
  "key20": "3YwVdBmMyrCef9wisixdvVr2c6XcRbC3UpqhywRijzZ8zM9LcLiFsPs1AqzAVCEgxXP62fzb6CuvXobC3QRfnbxg",
  "key21": "5hdZAe5hjNQEnaHkJJGgtipkx8Ast2BMTDpwbovQjDboNDy1NtqeXZcJfUbf7PWyjEsgTfD9WEwHJp9GfrDvqFbw",
  "key22": "4nSp6f87AHj7xQExMY24jMudaFb9hfgMAi2PMcjFH1LsyuZztx1u1yzHH4zRPrCLb5XCNcnHZwsY46qfxddSucsb",
  "key23": "Psf6oofYhs6EBCgSQ3NKuiFMu1hmYGnBkA9sYWcKBnmt2aLeHPDwnUy17XdGSSriMLLxhoC48SaPFvVSrUVaZnH",
  "key24": "2yChu6cwq5SYXPUjRYn7nihHiDV2xH69nhUdjsXhKaKVc9PEb7zUyVdXkhhPMrAHLcXQ2yUMoJodor2Nc1J8rSqE",
  "key25": "2XT9qjF2YesHPRqNb2BFq9feQMcA7zTPzoSCH4SAZTyBYxiVDGWqqzxNkpJ7Vta1ELGw1e8xpGqu57aSiS5xUMHa",
  "key26": "4Hgv9NCyY8LZQkbW7NXmsKLC2daDTHZKo73LhDzcDrHMuPxMRQWekcpGwjNAiyGyYUbsJ8FFACmMypT3WUJTB1pk",
  "key27": "SD2S6cJcdsY37veXjmZEXdEfofm4b4YCQrRv45FC5dJLiig3HnojfheXKVCddTg8s5g8TwkUZJ3c8TCXYve9RE5",
  "key28": "DLr6bnjEfPuax5C5k6Tjvq2b3STC8muQcnX79zfYePUfU7JcCHtzztoRVpUnr6SJAU8HSo4faBddMfYNYHggcqw",
  "key29": "3z8ywoBxhuursys7JouRNCcG4Tzbu9sR2YYLEFfuV4tnAUbLh56GaxFbWSzFgJDJ1KaW24Xp3qLH2w5mkUPMunpU",
  "key30": "2tsqZp1b27KxHVE9c2wwc1CFzkhVGMhCVu4eMWtoJYdzUY1YPRixpykDVAgUUkLWDDkzZ2C4KXB6ZF1zEBXgHEh4",
  "key31": "5932v1DcxLbm7nqVpU5Xi1WPwW3Cp2KPc7mZE5AbugfSB6CAoxnrLSXz9MmXFC9xk33GqCYreFRZ8mwS1dhDwHVx",
  "key32": "5X9RrHJqvwD7S9ANygJTHbFn7HaWG4DUX2mWu1mo27y1cuEhzRfBjejPqr3rjiVqqG31Xmq7UagvjZVY2aZHu4i1"
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

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
    "s2aUHSPBFZQhzuV2hbGT8dYFUFwWUiWnydKG2QdQp6NQAUm7AEZyiszZesefo49BfjTEienycdwKL3NvKhpkquT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2eusyaMYdXUa8HfcQmjf1YNvMmk9ZFfLdxFzaiNr539EuNk5xp6Daj56xGxyNgrpvVV4gjWLmGfBLZ1qwkJMQP",
  "key1": "2aThwQHo1ru92DBWiTsX6YMiAhAV6CkyopRNgkFGqQoMcbesGK179v6nrJp9xKiRRMv3NqLn34xKsjBVLWfBnAqc",
  "key2": "yr5Ueac513qbii2opVtbAs3FhRPndv1XA9RM1P9BFkhxsS49YGbtgoHr8dAMhLN7GKVHTaDJLkphH9SvnnbCt61",
  "key3": "2fmELvpnCNHDUCrAXCmK7a1shixBZM6QeDSGr3PkSXh5smM7KHqyByzDTcrcWz2gfCSzGd4EDv5J4ES1crdpRmc2",
  "key4": "5SQN2FU1EzUvjUqPfHi9U4BczHSGzEjVFdpgnWv4HBrsYFTERRgC8mikcp58Go3Z98EcF1kG36HBxh9KQjiZWsPN",
  "key5": "3ESkho3LWApiyXiTTzHAYy1Rsb3L6ZPQHmk1gHzGN5adYaqr5Qm96gePDiGfp2Yx8bpYLoQ5hVeCwvmnxxVLVZ5s",
  "key6": "4DUdvEQTkHDAZCrfrsVdQmq48MPya2QbnbAqJbHTz8N6j3MW26S6MfcNzmtCgbCXfqgdZdsPpLQmWze14tnwEMmf",
  "key7": "4SVnPzAcsgxYd6nfc1tWiAGZ3ijQx8vufdxoubGBDn2PpWQK4ovGyEUEe9Soi4hvqXPNknC4DSXXfUTXrtWzvjow",
  "key8": "SN2zLs3piVt4yAASgT9d27CPmwFPtVMfhCDtDo4xVv7Zsq3CS48ZUdNFiyDxTEjBN1AuFEB2PePS4BJSkbEvAoP",
  "key9": "5XjLEPTXWMvm79gT82JWig8dDY5WKUEEWrNnngo8yy7NBr9mudzB3rbrLJQRH3YYVK2FVFuhYdtcdD3LX2C6jrkC",
  "key10": "2gyJTMFj1muKcgVf75Lq97cSwTQ8SEkHeyjCmVqEXrFm2XjjcADyQcKybRz41HouEjubCoBubMiMFuLfnUr4msSS",
  "key11": "3rWxMZs687fjmS8yk7EkQB3U5uQHE12ha1vbSdj58JRBextrXpdCc8fZpruoF4wWnR9tqrhwFch2xkYWrcLve9X8",
  "key12": "4vYroyCxDyq1UrDBU19Pd9pyCSEmjJdyYsJ4JtvQhSKJNWY1JgXz2WKX4yCX1hStwchCmRxtCLjwsmcv62t7TjNX",
  "key13": "T1XPgkXt4r7XZJYmTdfF3czZSKsNTfnZ49egHnAeyeBv8djUCUdTsbpMZv3EkkrLdKhhjAwvAKNhejdVqiVV3Br",
  "key14": "2awhYKrRCLVJrg2qJQbibZdMqrNPPu9TNr1UfPCu29f8WUJsg8LmWihrbC9ckGef2E5djmhtAJSGEE8i5eu5e96e",
  "key15": "4ydiaXkg2f83mMkLcgaw77Ssa5ca9aVLuqfaQF6P2ALcxtEi4MygYK7ojXR6KmGKz4i1QKrC33FdPxXoWEoBihhB",
  "key16": "5tVgMYz5p4CSadbSLDLyaMiRno31pZQVsufMHWFNvNnKPgLxsf8By7AwwZnXDCSsctz7VH1bfZXKiJ1GrDu44qbq",
  "key17": "31dWrVPyLHfcFo2vYMsS2tys725cUsj3H9qvo6ACyUucTgFCjjUDRY9AbgjUJ1vKQuvoQK7MLb4ae71wNJbsTvMk",
  "key18": "3u3nwV8hox4xyM64P6SDV31ctexcesfcwnna6cS2q6xWE4RnPt96eRJ2mb16Vids9rxDeffGwnBaVxBNNuf7qdUZ",
  "key19": "67NZaJaXMi4QFaDsX8knWvcoGQ4veoh8bPHZt2zWmRzxTgur55WjqjTxfMLbzF23JojQmudTJTkhijigDXqbqj2M",
  "key20": "4egvPNK2gVutMNGkjmrRuviciSsJk7wohwprzRkS18NntS6hnAuYzxHs8daxvAifU1T9vP2DqfqDxFmxWBQi4A81",
  "key21": "4wMdUiGmKxgucdMm4oY6KjenkU9gVfhmoBeZPbyhZNHrewtvVXeqNGE7LWH5gxifVxdzAFYgs24K7XhsVC2AxAKo",
  "key22": "2v5TPYjDHpguNXVvKUmqygYfgtwd8nUt2ZNa9gDymL9ybYJx7T6XWhsa3bwbCceYKnmnSg6FnXJG7kyv9XFdGgL",
  "key23": "3R7no4DtSDRiQUXyuStU8F4cTtwfWkBvXQuu3ygtBTBbcb7CaZKQm3jms3bvUyaJ8zkLw1NUEQRvdLDb6isQgToW",
  "key24": "3n1N6bUisUwRA3FoxvyvSDedGAqinrBQzmvNA9Ehz9XPQxkjxTpAfeEnE44GZomc6XnsG1ZsLNJq3wkv2jF1QhFu",
  "key25": "4mxj1PXVxJAjsPjJm7CvqHPVCPuTR6kvFjQc3RR3qac6NBev7jZT8CvnmfUXveC4e7i6KGp7SJDYHn43yw7BjVyw"
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

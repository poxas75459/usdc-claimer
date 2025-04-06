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
    "3xGYw6cVkALaZq6kJWh9u9dLNszYUbNztKT9HZTBJ9jvD5tPwQssdiDKoZra5aH3AoeUXyrvEdTCMhgwUYQQNBpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1KTB9jNFe2ifvR1Bms4DFxbzxqW5xiJSUBh8V9HqUtfvuPQFcFqKp6pD66edLYcnyxFJ1TUaHLQRvRevtBea3q",
  "key1": "39xPr5vV1kuQrNSMa93YRG5UDj5GsBunY6ZyZwq4oJmuicAV84kjBizFpYHDjmzpHYRGAbcMmu7isB6EPJBE9YvY",
  "key2": "TPv1Nd2Utw6xtp37A8r8aFcxxPLbebyshGNpwa5J3i3BcNcNPusm3LdkEqXoL5MyCGVYjJiWENQQygm6PomQE5q",
  "key3": "4XkSUJQ4eDWtQWJdsy1NfHPFdG77sU6xiBrRKi8MRxniQ6qDNKQbaeUVaCKawNN4f8Zm68vYoQ4BeK88shc4fQaM",
  "key4": "5W4xEfxQ1NDFUXSs77mUTfU358rWi2sBk8Um83MxfpD5Ji1LYx1ms9RhgBhYfkrjZ3zPUCTR267TTNRSRiFGpS6J",
  "key5": "3BKZYprJgR4VdFotbugfekHC3VQiaN2XVk51hfRVtMjnULbkdE6QuNS15Ygz2oxAZQAqE5bfdkDqLwQ2db8i3oZE",
  "key6": "4KenzPu4iHAU8BQLx76CfcEJeYDSvPDahHiAhgV2PKpc5d3Pv8nY1imEx5722ghqr9sjdArnzvNk3Vo8gjN38x84",
  "key7": "3yEd9bHfWHV4Tc9mDjg4CWcJnjGRZxj8T1BBnxyEhUNcwng6vZPRTBGW74kx2FYJcxJ13Kba1onPXoajD2YdmwJX",
  "key8": "5YGGet27XRXcu74KeqhWAGX8AmcvkuUwpghGfDRX5vuF3Y5GdihQgVtRqm1MNJPmyrRMgoWApRhbcTbSfvhgKMD",
  "key9": "2r3g1X31xTTAqYa8sYSWCa4NUFCqAgG8quuraeL4EAXTYNf7b79AdKoqPALxvh1FiouqGqzGXy7SE1n6LtcF7cq5",
  "key10": "588wu2MgFfrJs37jC2RjEufwyAJmXchARkReP3vCC6YVVWLoH5G8uCUyq289n87Ggi6oNoRLtpRpbP7yXA9GBAZR",
  "key11": "222cBg6TLDxZDBdQ6wg4y2387xXkXZT3AZByaa3MDehyhWJeFJazQiNFRiYXYRZXbC78tNvHmNvRv8Tp1k2vvjCy",
  "key12": "3jkiQseuU3XdNV8DMyoWw4q11ir3z6a22YcEWD21DTq6WuqQwU2neb4hrTaQ9jfKE4KYHMX1xfwThhxthnaiP2g5",
  "key13": "RvkVj26ALPLgSCSjDPAS3oJALFVk756J2zXwsx9zxqY1f2VqLCotoy6KmjCCGV8B5Y8e1mbo2atvPfwLhm4NpVF",
  "key14": "3wgrQMAu3a4oagmC6Pdt9QVBAb2JKi3TPW84JvbaAPcvpSLn8PAFt2CibdmKBBsXvB1VEHVJAUVqmt9Loui3k9Go",
  "key15": "28uEhFmzUaME5VSWeDwehH1JAZpXU5rnmd1FaEBZZ45cypz4bfbor2AT4g6gpZkEQrQk66WiqSHNm21SCGLugaUo",
  "key16": "PrugLSSTxJvWyExjwSdTZGe5DHShcpLeVARTXEHKmXCaYWNP6s2dQops5yJJ3BR3SnWjgisVeo6feabGVxig1sv",
  "key17": "5ZjZ3P7SGN9t8VW3KS19twnSjxJR313BrPkHfqMyuEHovSnpuBhg7Y9JkENwDQQHLoj9wgCGZNNTZS58gYP7xkAw",
  "key18": "2sTR1fXCbbZg88GRHnX3CDyhWna8FFDZkq4nUvq5kQfZenWzvRk7QvFtaJTSe2L6y4pEkPaCcz5z84SwxZafHsV8",
  "key19": "3NABXUgqYBqyyD57eeca8HHm9WXweVDKTW5juZussBnGBJrKjL3JgMQ86rRvo7L844hqH1EAJeNTwbnsCsiDfi5i",
  "key20": "5gRKwkxcpUfEuz5vAcy7cBLCERM3BDEyQrqLcY2snV7HinrLqwJ49WZzLym9S4dW8KBXRA6YH2PDhPKt51rHZ9Am",
  "key21": "5LZ5g2GLr6DsZvMUHJVeDdgNq6mrCBH8jaRdsSapwp8LSztBujj9c9pC7ygdwnwYTys667NWNnZs8so7XHNpuiyM",
  "key22": "wSuXgBy397FirvooZnKu4PSFQZYLcimf7izChAYkLEtBwF1VVKsF9AZmTDMCWJryH8vrVyVeZutY7Wmi6iYDfN2",
  "key23": "4Moef4TNq1kxHETqUvhYW816VBjQ3qXRqK4F2gMrx2wCJaPMB7FJ1zuVuwwx7qQPciPhFrDqzKrykF8trPdakUkj",
  "key24": "3G2kKGKFnE66hqW3jnJ8F9D7pJSkzg2eLSvgrspSX6RprJmV39m7Vg6g4ZstsnLxrV1XicDARJWV53h1eMHeh3DN",
  "key25": "6ETF7Ky6ky1B6pEsPumVkYS8KAj7TT9AZnspETgGiwi2eNH9ntaXkiBsWohFpYiLws7oBCXMk8gPPrpJnoH8Hgn",
  "key26": "obTWtmNcQhswnsH1NUeSnygzjb9g9xd7XfZw5WPFsoQFCS3MtFsrahJYMjjEWJYnLDa2Z2EwNJXt8K3oqPW7ZNT",
  "key27": "42a52rjGDxa5mQxUHQjT5aAjLzUQUnSfwS5XFqHqUYQbTYVQK1d9aV6rQupvUoEEpXrBapqAeBrfvxFBQiHbw3py"
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

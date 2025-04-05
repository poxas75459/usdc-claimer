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
    "2e9sAYFnxjzpwwmH1peNxP2PfBJEM5QL8wBtQ1zrLFKmZPDUcLpWKHhGektdJjDhJBL8DmCe6DdS4aQ7cCKRFp3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jo2Kb3e4mDh8k7zqPWmNsHtAEULhSvKHiNkn4Xde1C9LuNx7Qw8sP2m2LzM8og7w5kuhwCkdiBo9peqfJNhZRw4",
  "key1": "5Pi5SBKtG4q3EcYnrQeSeVD6GfYTwiKvz1SPvYsVPVup2MWii1K4cTNAAJhx6mnJHbRHhj9hVfeVx8XevqDn5WPB",
  "key2": "3eZYJv4nn3XxsWx4dmEnUTy3vP5Z6Ex5XQwFxyzr4uSh5omN4yzmULXypnC5xk7qGMFQ6cq7Xu9cAtRwSH48VGfL",
  "key3": "3F3VgnDV2JZST8NS1mxpXmgYjTNzkou4k6QCPEs9kuFG4fg4xQdkXGry8Vgwbig8yqLAkwT36Wtwa3TL2ZhNYpak",
  "key4": "5WiLTxbUyJF8nsSRc4DGqRQPppeaqcDkzcNHwrbhge1Q4ctCXeDJdi2JVpfSQf4cqCgyNwvZxrsZdfKQn56FQw8t",
  "key5": "BpZvDNL8MXqs8t2fUYgKveqx4CcYRaV3rkExh1HxFwDneqJWrj8shxwytfBqd7J13NkHXkLXryf1weEg597RZcS",
  "key6": "4cMzHmDNNmFV6J5Ty9KqyvZqTkhNRR7CJeWYXvrUteUEPKw3dwND2kCMYdEazW6hKjX2KBkxTrC7fqeQvk7CJpDc",
  "key7": "9NLCC6R7DQ3PwrgmWgkUcqtspz8GokQKNEmAppJAJLr4biusbpFjEAv2xABaoxWQYKD3WQN1eJJDB2Qpcoa7L22",
  "key8": "2HTGycuNJ51aJhF9rzPnX3CAZFYWY5y5pLC5exWi5P8y2iX3j2TtELyV8gW44ua3DTz84ap2S6V5542sM8fSwRzs",
  "key9": "2cnkM8WxhSe2envmyJtrNhFSC2n12xnYKnSvDJ1QfRjvVYAoisuUH3ikajyJNKbpoqKoWdV8Tit3p5f1q4nb56rH",
  "key10": "3DQYzW3MC4v7rMbnFa78mRPtQk6K4wnnZA39rsHfWb5j4CzdZtFVym99ZBR11w4trWby86H64i8cHgDZUD2sTfFF",
  "key11": "2AWvUM3iSr4o2XcS5fRh2bTSP8Mx2WDPQLxVvvxmu88cLiD971cs1jQT1yp2AqFjXYvZjWAwzUTeZ19hxj1Rrhzn",
  "key12": "4TPuUHP1mUG5kjtim9S2tcv2Jwdsfxwx4baRrAFm67jX4iAETC5Zx445ds2ei69NEWU5Mo3Wwi8wwAE9A7dR7r5x",
  "key13": "22sDmg1jpBNsZ7v2TpGH3TkKqoNuy3LircTg3nVRGx5PcoNWYqwGtFEPwAFDqGZVCTZ2mhgyqMeuow4AAi9i3jjX",
  "key14": "3LSGKpMScp7ZizZtQZGJrSQL1gU58xH2V3XxXQmJzKyf2X4YjRJKDdVyp59nJuNEaZAjxhGTDUi1y8Numr6DPeSj",
  "key15": "4F3BXFTLDqqFn7yBiKisM5ENxfN6QFS3CmZ4HyHUCV8XfMENLmPxGLJRedwpKaW3QhFhV7AG46yviWCmq2VULWpA",
  "key16": "3oPAn4g2HjHmUsdqf85h2SaJp2143Qpd7dqbWGXcnhK29fveqQ62nN1md7qCAnEkAAEAvJNowF6yHXGn6opvwWNx",
  "key17": "2m1ff29hpSkfV8WcQ7XEx3dX3i1z58KsoUhXy4NHkF4Mw6hoewUr27JXKRjTqZCdC8gC4Tps5hmaE7mVHM7G5Bcm",
  "key18": "61HUmH1PMv2DHQcY7Ubz3f3p29zE7ZdgpKYoHBf7WmcZx5gAc2io3sxeCvUu9A9diKmm1YTJwJgRQvNfzbCwHWhT",
  "key19": "3oRCgGsVeGawtpTQBA3cY7wWWrpc6a4CsqVxKE7nJGiUC15As6PN74XcvGve4omaU4pt6vcsVNv4XUNZ3AUgVUYz",
  "key20": "5Xvjy3NMus2b7ydpJoRuhHjsj6kKELRJiVouo2mdfkVd1PmJdfNqJ3cbsXnWEbUkFSTYKCu7Yko4KsQTuGXbV4sB",
  "key21": "4ZpQbAxG8UcbviDNFGM8Qz5wLQLodJdNRxYmq6DdQoQ3QfLMWCYme8BwL6YjzzKcwxAQzJJCf1EgUhY9sCqBe4RP",
  "key22": "42Wb2KvrCxXq6YYkd128Jg9ZbG2NAmN3UZFjiCGQEQyCaMo76EwLHwjnLMzpFSRhMtyyq6oC4v54ACyQeJQCbLJZ",
  "key23": "5Q9qXb9qfZvVAbadsfEmmbvmtHwRuH4jnzxF1Gw81gbZcBSd317HmACSpuU9ddvip2NKQzBXLr67zFZBjuqdm63W",
  "key24": "4rH926X9hRdingZdAPTrgnviqhTDkqnoNrk9H7jZeWZWGmmXzebddA9dWQcwRBLCDjMz86EPoJS7CNSfcFnHhARS",
  "key25": "4kwjxdXg4bQezJu5p5byDdTxFhAxQekUcZFEzAAKTwiTbdL3ogrowx5PmcYApDC1g6e8royxEvzW84YPy8RnbRfq",
  "key26": "3K6P1YnkoJc5Jsh1MkntSiv6gDwTsXKbk1Y7f3ZPfRWYv5V39c4vrbeRrRLDAFvQWskNofP2nP9KtG7rtoCvBnXn",
  "key27": "3qUb9b2RjjrMEfKbFgfwfkDTeqoegqG1hHzW4fc5FtG9RiDiVYNRbtcdg6hjFRnNT9j63LTSVvkERJz1Yk4cko2t",
  "key28": "2b9WdxWGdorGd35RGKVkox2FNAuCcCJ4t7tNYidZEunrPC1PHrXNu2CyQiwRypVm6vKK4ZY6sPMc4MUBisP7K7RT",
  "key29": "5Wpw8XaW3xHGLJzdzH8GPQ27sx6dkLyAaYMjxoFsD7NVpB6SQK2DoqvuVjUqehZfsiKEgzofJqZjvuCNsHmyp6ZD",
  "key30": "3Pyrcmjnr6B3ErdWKoQkmEzJEaLFqoCt18GLc2uGKZCbKHteAtyTm6riJoM4ZAXmM9vDxRYXqhfvsEA52CC9DF2u",
  "key31": "5f8FbymGdh1DCAJyxDqrXSVsQ3jKT8TnntAknxxw62jEEcnFQvvB7PjpTsKiJPobfGbTAZiYCaijP3hM8h9G32pN",
  "key32": "5hRDd3JTm7hmpmPbatTwdCCKsWH3DaBQrMq5YPCsaVXyqTqNzJrCEs3XEsT8UeCDWSrygW2dJxrzKkn6is73SjZn"
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

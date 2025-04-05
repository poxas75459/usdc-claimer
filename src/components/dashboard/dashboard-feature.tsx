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
    "3YV9JCcu9mwWf8bh39M6MTpvuoY7cvsFrPsr6TipQ2TQUdCrcTfneWN2nsczPYT8wfJ3CWYKzUDr9UjZG23nxeN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dRt75JFvQUMKaWcPAqVZcXxeHuzpYMcDn8aYHR6qqRefQjFj9ruvBjancNtMioASMNYdXrzMdKRmnEzgpGChtj",
  "key1": "4HKVZ9PZAu77Ptk31f6T6FyM63LHEtLqqLmQDayhumen4T8AoENSXB5tQHWp2iKpyTwf5NB46fKiW2egoMfsiKtM",
  "key2": "3SweQhC3XGpscfXqsYuuRKwkfJcEdbYCu7gJd5f7CkWZa3TAjYSqT6e3apxF9Ttnj5de3PYPayABWu49cFqvvFbB",
  "key3": "3juQZj5oafyCkYc2oxtuu3sPajkmhJqjJmfsKGStbVUDHt2cpHw7RHWAWVhs4Cqwskqd1QdLmR5SsUhhqVgihqoN",
  "key4": "3KRqW59QwoUko7VJyrn3EuNpLtvDQkywhs4sXd3UDKEAJgJ8fY73E6ZZ5wXCeqNcj1Vh8aegZCPkVQLukdF73dQf",
  "key5": "23SWUmvpN8CgW1P5gE6QAy4asFa9DgnVRhNUBXCrgwjiHvZQ11nMNpokueziuvV5sB51mecuxxc2aSB4Copp4sN5",
  "key6": "54EsqcZPZHervRuR13vKWcw23VZF7VWfGyByZ12qf5KX6BZA1W8zY4HE8r94dRvEfYgD6g4zncrvN7qBSgdULPNX",
  "key7": "S5wSkPXPNRU5FKyDVd66P2PY7oAzEEF2ZMfSVMqJxFYobeBmffpLKCsGSxtrKrNkPRALdktzBrHQmBgUdv6zvkV",
  "key8": "5LQoFCuMQyEEfWcQadUJV6raPUhBGo8c9m5MdGwdPQQCtFGcuqtgtjaMwxkG9XUdyJscBT1raBgiPxpjWLfD4tut",
  "key9": "3QB9pqqoBGBPGhxbqA48BRTsWDaFBHmRfEveYYg64uqT5KR5fkKD8sstvqf2MRTLtQBACh2eSn4CrsJNKA2wyt5x",
  "key10": "esMtfUdHPxBF9p9YWuvrSZS2zc4ogjtG7k7gtpVWtugoCndQAD7CWwrnzHBRSFAFqpqUYTQL7iX2sBtv6MttLni",
  "key11": "58Geb4ZG1utVMstcz8oi1mvJYzWFJM499S6gFB11tPQUgxCPoP6YpqQV3jqZXjxkgvLuETNhxjbpbbCchDtv3ZLN",
  "key12": "C48YJKhiNg97vkncUpE1ziiUGTH27qaZHXArXTVmohySA7egXH1qZBR8ZpcK7A3p5P7fdHGFaC31HswHYtxoi7M",
  "key13": "2ggquRj2c3KxmVvBurynZi4N6JAziJRNG2sZzZV4quH8dKEUAuHrWKqpruHLiFbx5TcPwVqADN2NWCsWtH9qa2sB",
  "key14": "4aLYMJKM6vXZ6WHAq4Pkjz5KWsp5WrVFrD7bTDveD3nigQKYJ8fsx89DrHevEe5yUFsHLGGasaVPUH3Qmog9PEND",
  "key15": "2ZhdEMpVdo5dfNHeuwAFgwzho7UTqP41DCWSv86TCgjeZhKaBcHkzQgYvQJ73qmcGjSQiU2RXn8pPRrx3sucXC9H",
  "key16": "5LjFGBrXd8ppEynEsFnvF2zE76FkY7DoEHJN2m6RuL3jyCCxVFCBEp7wDPx9Pf1dhFB4iFsFx7NrmkkiycZaXqn",
  "key17": "5bQA7N9PQBk84vg6xvgXUiD5rqseQiHaAZkyLUHe6eY1LSp48vzCxRzAb5AVespXMpxCXcpWNyXK4rwVArhyjMhX",
  "key18": "5MaJP3PfHVCH5bnzf7bU1pEsmJ729eVr5zQKhxVDhy3uXXjaM5ANmYdUMXrCZEKmKoDQMv5dDD7Wtg7823o9JTMw",
  "key19": "f7Zhrf68QLrinLSxdfZUgsomjSxKS4mHxiBu6qSad35LUWry31ujJukVDrzhpxrBGn4hGa6nHeTpQK6GBcXfFyg",
  "key20": "55iRiC9DU75FAsZnaeFTvDvg3hUdGLrs2t7osspgvePZskH2qH9Yh5FhbbxNEq1aVmBgVeQd2jNUaajUBHJNUGRk",
  "key21": "LrCgnPDd82QqTKDwUgbFknDocywHNuRWGw3tY9G9EsrKydPZ1yYdwtcXEnpvCveYJ9WX4YHTFa8yUA7eeDKJzG8",
  "key22": "8649vLAq5TiNxsN6uWi1n5TmSmnLyEYR3SQgVcZQUZvssTPUC6e7iXAF9BcK2axWnVChcHxuWsjq8Vwuf1wQmCN",
  "key23": "2G9n8YPmAmziWZ5SezJvoBNyvVjCJq5eazeRgoFYHbSRTQ4L39FmSTY8d8YhdrVbG9NVVbxXT7jCS9eiPPqBGrzu",
  "key24": "67dsdBvFwcWKkjHvVSMrBpGySDCAfkbg1jkewaUP1ERXB3Wn4Hgk35djmAUGK1Ex6kWXyj6P9NiAKaTsPh5VnA1H",
  "key25": "46mwirke2zjgDMCjS2WMKnugEMyWUtaGuRkbXUb9PaUCeVuczFCFCeVwde9HgnpSexshJ2FhSU1zaYycX7J4G6er"
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

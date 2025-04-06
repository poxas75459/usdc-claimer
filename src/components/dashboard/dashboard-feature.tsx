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
    "2hA98Pihg9rkQVxhPxbSDxDPmTb35k1eZq9LhJsEPGeE6VzWcZvzs8mGqMNs12JZ8EyLbCNfK53j1PPJjLCdz36z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kwhc11WCs6Emofb4Wqxgkp3Zkwj6856uMZomBt4vMa4Chs2m3t7RHxtn7imQD8QWai3dmezmYdBjt5DbqyJy2Lf",
  "key1": "4rBxceyXepFDg7TxWUWM8uxxbN2tpDSJiRMiRyV67NTmnvZpJwbnWEXj55bgWzu1eiFwnc15U9PF2YDBJyXbj3bp",
  "key2": "51vqkXdey2xTD8V4iTZzUxbmKwdGwBP7B9e9V16McSdRYz9rama8cVeKxvzCkfpGqdeEUYSHuTj6QydR4GeujkBh",
  "key3": "2kK94hvuMsjeLMzgGSAS9dufnraeWnJ2Cpk6JNbf5kDTmu1Hw4BVLcq5CpLULdjrhVxu6qQDBues4D5ZWa9k3kUY",
  "key4": "3fckzrrJBemoaDn8fRnRmB2RsVM6zCTXkWP9Aex2gf2MEmWXxYNTNcotHtZjSoFJqDDFbiEDrNWeEJuVfLJ1XAPq",
  "key5": "2pekXVSGtmhi7eSaFbZGMqAS3g3YMXFidi9kPg6wN5czqoAayTDw9tEJNnYpcNNAjUtnRprhU28miM9H9rcFeeFi",
  "key6": "2Doz66vCpB7qjUYonComAd72XsBrs58cWuDbEeEsuCLmyv4wfZuNxXuPRwyMoucT3Tq1zLp8aEboqDpMQZt8HvgL",
  "key7": "5dxA6sSpTNLxX8jrMyM4S5SaaZSCe8Bc1YmHQVKZm6yfXqQscARPz8EqVhw7yQwuRqBvQidqcpAzB7EBrerSx6hP",
  "key8": "4dEe1sAVvxMCCYn5J3kcdCLoQVyUYfxQo8Mcvc8j1xbt65rZ8kawtvmnP1ajec47Bg4sTha44kLFeY17VETmTATm",
  "key9": "2Zz8ng8X1qLQBFk9i7QZA8iHzJ63zXSDczE2HiwNLhqvAoP53z6JX4HkBtWpfP556zuhDktRMWVTkrwiQaUoDeZW",
  "key10": "45KtbiJfthTWrD2qEyavYCQUvHYDN76jFApTrGfCXEWmJ3m2R3oF1HN1ppX35yeuMRL6Rrr2sMqNusBP1gX9M4aZ",
  "key11": "4ZfdsrkkzamUCh8dSKvrodg8pcXNeS6RtPzGsUBmvjvwaa6f3EgiJBv4SagRfxVK6MeCztyRkC4HGpkB3jXk9ZBS",
  "key12": "4TFzFnMuPMC4GFJuv4d5vzX4bCowTM8K76dLgcj5z1y4VA77BwCFwYBoMyBfHRkVGGoaDKpJ9Bb3dAv49jt1rXEK",
  "key13": "3n6Z5LEpcYN7e9aDARh2A4hA3PNeE1EvChzt2h9Ci3zSjLRGgLm1hgUmDGLr8XBsT7BZ7Q8meQWpj5bn6PbbsU79",
  "key14": "bbZCimLKnzsnQHNP7V4SeZV8PnGsBvMdrjYuNyik1fJpbXWJmbKj3rSCKQma9HLNABbJ4KUfzZhbrrKjzVWmm5z",
  "key15": "3JnSi5ADg4fRmjGffiaa5a2YqKg1pBFx9smTrgLfp4Ee9TGytc6KchEPobzW8MJVCrtfoCsoW2P5PdnVyFUhvBsu",
  "key16": "252rEFwUdCWxZWVUMT6zfdrWSXZmfGTr78W5LhbCt7CfahpURpHS7WF71cfhqpFumzg2dHrYmVEur82nnvXyeuBB",
  "key17": "4q9LGoSJBKZvVNQtKXW57wip4qF7DBxMCEJnYJDaPm94AkWtTawSYpnbK8MXWWhr1XJR3g7ABPdWZrdU94JPHazJ",
  "key18": "53k5yCwCQSgSjpB3Q82f2MwM3Jn9XVN1eqYuywTrYs7a2aC4bzf93VXhHZtszndB3FH9WLJ4rAkA3tXNAx7pwz2i",
  "key19": "5P4FNbRVDUrYcupdFrfwZnFgE71SExRngQEGitx1j9wPh2xLVTJFtsBN5SjAttYvhHszCdmguyzpahi6raEYB1FP",
  "key20": "61VyjhTkmpCWsRWGg4x84VETmkZhHW8grqLoGKzSn8XbvuYTx7ZtvkmjqfXC455mF8m4C7L47EHayYiaWh9mjdg9",
  "key21": "5Y1LwdBxLkuw4ZMx1Gn1U6QsyxgwbcBjjMHdHv3qnVowyPpneuEziHaZguQdKNJkVdBpqVGeyaCGtts2nX6XDdjD",
  "key22": "28cG6RZnPvidX3c474UCPzHxfuY9wU4T4wwCN9foozXQzQbeMU2RsX5uDerQeZxUxFWRkjBALJaLkqpAT8rvgZf8",
  "key23": "5YX5nUK2hHrKu3fSvFmiZYFkygHWzXvT7HBfByCLVDVk7Nkn24RrAAmCjTUdvbtUE3y4oa8HXMQjMpkCTYgYnNeb",
  "key24": "2pkQSEyMK8CYGiPznrnZc6UHgaHdvTAWHo2PtyjE1eiFiuBtKXkPkeeC2BRkfQmY154uHPqyyUSNcKU1jjiaa93r",
  "key25": "y7dU3aPMdK1omr9XrvS8jAeQQyQJgNzgQkiMpHyEyv3ktbdUWM8E7h6t7eQ4sX4GuGYAaj3rBFRbpEdLHhyqubB",
  "key26": "5DKZjpqGLC9nHTSL3J7i4A2ocXDMaM4d9xqC6AmLSEMoYKHK8f5bwKaCuQhKVbWyZTGozyk77zkqPRYKzGzvcTYh",
  "key27": "4wMYcJJxKFnrh9os2hH8PP83ZRWxkepgbCAdKro7DcVnp86pvrXopwaAVS1WJ8aJEm91Jz7w4bV1PGwfB8MmVNxE",
  "key28": "4E24uAhcgd6UiUByYotgQbAxLwAvyXy8T2JhFQ7NPQbcrMsoWjoMyDptrDLNJ9KPaL4X1tsAq46ssy7AfcAiSyGb",
  "key29": "22i6DDQeGdeeSuJn9wRBnWY9E7KaGzUy4wjdtJXBm7R8wacitCHPaTr8hBSgXmxRnndq372yLYPqRRwdWJA1Npen",
  "key30": "5Q78qYaaQeQsTPh1thJWHdVSM3Dufmw7bhGRWC2kffktoJJjhwXQxsioThJe3Ts4cj3K3T51W8Dmg8feHENLfoJd",
  "key31": "MuHKrtMopNUhmHHcXsqHDX4yaKpCXgPnqjLVz2SWa21UT6p3vPiRkwcBSfvy7H4oK4PpFWgCwanYtT3WFeKkps1",
  "key32": "5AbWk4KtWbJhgEy2fR1SaLHvCpryma1Gbj61jJx2PSJRbJx6QM4yjoxDim1C3hQS9UdpaEEfGzkysSn8cLMsACNN",
  "key33": "4ZW68hgF2fSLs7mu6MWopva1CvuEXDVw3cjnSsdDnr4mb3ftH9jbZLCp7cTcnc4qNFEvY5Sna7EKavRWjYc3N5Kc",
  "key34": "2g6ifGRqyWbvjoPbL8SARcTaDyuj8i67osCGGyYxtKnWjNp4nVCceQzZaCQHo4dzU2W7cpmpxEL4jUR5Rq9WSLsD",
  "key35": "3vRQZ4nYTCguPiMuhqivK3fmezEM7UN85RoJG5BQaJRaYYRb3p6hZPEHrkdKALJqJ28tpjtb8eK7t5Co8Ly48Bh4"
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

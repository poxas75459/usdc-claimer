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
    "4KGcTeCG6HkK3WENnrTuMJZd9wEp81eUjwuA5u8GwabwUdTtj4wNZ2avjnSoJ4pUcSjFvQPYKm7Gc1EhK3MgEyiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44xqDqMYsJWz4JijfX623HcCb8r8XSAhpPccAMRhYLwDKWRdMTYHpdfHn6yy8UCkMZDMqobdEPt8cNDwYRhapw9x",
  "key1": "3wWfUm8ofR7yBfSzwiGm7ibm7T2ZiRqpW1EKncKCyuKJMFUa22WuMFcHULKHb6GXzaUnJjvbdQheNv2UehxMWXXh",
  "key2": "5QNqx1sTXtGSwfpCzYxVHKwU6yUf8rGfRxYtFdQRkYd7c6yg1FAhoCS4o25w8cHTDZ9yf4nSpA2SsvCNc5ERN4k3",
  "key3": "3UWLKHPPmApA8s9nZayyqYCJB4a8uvDmuqDVAykJk3jwEFCa3R6k7zJTksEt276i6j81XxTGJUGBRwuobekogE3Q",
  "key4": "G5Dn9KSjCKSScuNqa2rASGW7YcaA72Mt7JJK9i2sdU9sd7aLLq17SbFsB9jYfGFv4qoq38XYRMBZpDiVmURKq1J",
  "key5": "5ZLE9mFAidYoUN2C7YAHXb8WoFe4MMvACy9dkgS9XGiLNSwn6LfeHxJWZVTStQtiGPx8pny6bunvsqr9xCP22tWP",
  "key6": "uWAP3h3KcvoVVnmsPB5LE1G5UXM9ftYvwv9i5q2s1fa1pZnc8sr5beA84NRPjKcapL7WnTrbLWsjRxduay9QgLD",
  "key7": "5tvfqCe5iA5rsKqkJsCCxcjEDyxvZvzXkDeFAXtN1gws5xLJWAf6qdXzJwmHEJhnENQWqzN2BwqTiHc78bmTUjCS",
  "key8": "V5TNaVGWvwcPEtBjbDNngzndPoW1LAhDKx3hvDQtimuc3XguttTLrT5AD4fEMTS3cMMRLZdNPETbeqnXBXPPAVu",
  "key9": "2RVbuUxGS1MpmgY8ndNWNzcLSsQxk1yjjDnaZ1BdajAchpiN2uMPdTwGwtFDthv9TW3BSpygLKPqEACfpS5yaBmp",
  "key10": "3U9dGQ9gX7xon39icvbkq7yPDW4aypKgCasY8Y66NKyjDL6FytNhmwPfKq4p9WmJfqjLyDw7AmyUKiPczoXRwZ1Q",
  "key11": "4xrJe7y5pyher8NNMrACVFG6t4foFAbyU4DzP5ZmkzDzX7ukafwLvsWQbXDgLeviAoWEnhLp1NsLYmK1PQvY1G5N",
  "key12": "4pmfQwtkaF7sDT4M9L8RwyU4rKppj8raJD9fXqHKQ8tCcn4EwGeP2srqkkXoGUZugeV8CHijaRCR3MkrZoCSJRgW",
  "key13": "hLd9SCjeteYLgzpdi3dV2ugUgbFNu7LSXTHP7DDd4ht22nGB6siszQ2twFWKiRUSAxECudLb6RfaRfeubYe6Q4q",
  "key14": "521xQ38bXsvWXY6f11F93niCWCaN1Sr2MbtCGx9yAbvKirDkKY5xFVjD3mu1fzCeQNUhCFPVJjNpWzhT1xwxAWvq",
  "key15": "wnWkP7S1WTE4rHa9ScjFBsKaBAsxUeeWNW8VZaPd2dTrs5QXTLSGvwW1WmMQrZ4jY4e31BFRfSPPRTkKeRAyes2",
  "key16": "H1DuBwZFJCLPbVbsqE2F4qWHGNVyzrBvfYDXnSNQWChBDaytxBAqNP2Rj34WgQfpz5V5C6XHB1ZLzrtjNYwoo26",
  "key17": "2yLHoQc2HBYkbqQrXFSbNUZPYb9LayZZWDFqL4cjAZiwU2ojY4FYHqipauTCf9bTHMD23fw5n9gAdKH4dQQRsmyU",
  "key18": "2QEpYw5XWR5gUULwupjZEQKbyfkSUJvwBeWMQmgRtuVvC15fNhZUZqCpdKh9vZfBTVJffkdfsCALdyh5SeiX9WCm",
  "key19": "4QvzYYywz5WC4Yx3MaUWZMQgxFPsVLATmz48hFL1jNHJACzyjKkmiA7SJCi2v2oJtvRWDg7CnGEzKrcNBtzKVDyd",
  "key20": "3RBRxsiVvTigo9dMMq9Du64tjXPPgzVTmDuyScbya2NzibBF8YGjPz7VtRnqL7wqvp1ys1i2ndhCG8J4QUCykNhM",
  "key21": "5v7HAVZ6wm6MEDSCwry4xLtzV28qnCdeGgnVULCVF4QWb8L5gctnsRwysWUajyMnc6tqvSxEXbwaQ4drrMp1Nm9f",
  "key22": "4UYhFe3DZiFgnGM4s4DGoY3HTbcLfuZHVeSe3UvQyma3SEvWVJe8fPATra6xwnYAV7ZvCFAT2Bm8zsp5YbhS9Sh2",
  "key23": "2Dazge7xYpLAge92HHQTUkANGs79NjrQvHKrH4NskFyiP262eQuK4YVrfkpPEsp3fk2cBT5CEhqK3WDAhX8ESGVt",
  "key24": "3GAAridTpBEGkoaRqXk1TChT5i5nQk4upgaz9ooAUocYq9iLKTZajKdSCWggQ1xUEEWM2YtgJD3ey7V1WYscJVWz",
  "key25": "CRafMCcg4gDMMCKNYNE9ishsDkuijgEqaNNkDf2PZKsvWntKDSZqqAGThmUpNZktsGYtcuDHUtuPwC6y2SDen5B",
  "key26": "xpyMbjVup2rdHd38bDeReW4CESncQzyus2ipiQnPZSc5xBNcUs8TKjxUedgJd6khZSm8zLKKGAdZCHreCoM5sm1",
  "key27": "3JkTSsnpA9DRw1GFnLpxLMozW1E2CUsm5sKuaSk8nFdB97FXar2rnCzrF8dRG5hcadLca2z3Yg75tDicgm34wAsH",
  "key28": "5EzEZCm1Aq3YEKSKkv6c7K27zJqCsAmwpk5p9NtUKRSaaMsPbdwouGb3HhSDBeufLhCpMr9Ycp83Zd152Web1j6H",
  "key29": "4a3nsQqTFGPvTp3niorhtPAuQfweQ4L2pZDyoDmaikpi5rAWjGReRwXzxxP16bA2byS9RujQTFfC9AsN5JKhR21x",
  "key30": "3osw57a7pRE8PvgxA5QfCV1GPPopWw7nMEFB5JfUFSsY4CeacfCJu3BCqHFkG3yzJtvFmWp8Dha5au9NKJSaJYph"
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

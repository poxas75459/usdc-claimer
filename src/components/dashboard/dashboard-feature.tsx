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
    "3Mv1Ck7wVVvjEhmW3r6CW2tC17hDjQY3uVZthM3WH5XiWDmzsUc33h2g2dkks1cE77dcr4kfm5bEWwP1o9HD7Vo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iA8KFMatSR3SbgoQ9UJZfiJwL65wsEJivp8c3tx6Eg9BxN8fFpnehcv2AjubTQLNbZ3i7QfNGsvKSbCRGo9VkzY",
  "key1": "FsV3VaP3Sk96ujmkcwniecW5Koc4ejoyKEN21HkxiAXDrxyQFo7tTPeZTX4y2pc7jkHxgfwcWmehKXoesTM3dDC",
  "key2": "vcoWPXJthXkJDkKRHnMm9WPBSQaKz1Q4P3mwcQqqKPsBNkpQg6KuW4JDysPe6wFUrp9ZP61ZPECHJ76mzdXWdgS",
  "key3": "3H3scDe1eDq8ygicJtUZpi7ZhxD8APQjpyHdpn4zY1oLmyxvCpBjBEQhJzYZJ7vKAj4WKZGN1Hg1ivm3yiMebBZN",
  "key4": "vYTgKJPpjvM15mWrcsboaRdVyZtdQuRHQEsUQmQPtKN9qQgSQThzE4GgTJ4aMMUcGxbrD31n6khWZXKx1jinAwj",
  "key5": "4puPUgfuapkzZsPtKHoLAZNGdc9kE6CfG5fid8DrauYMh3z6T2DnUQJ5pKA9PMDeSGc3Km6mgaZgW2uHWuShoDgY",
  "key6": "2RXtPZVPHhDXdSN2byCoD3EBTLUr3wfLzv3ofLB5bGcqDrDrdYFfgpUp8D2MEbV9ZSvHmWxXd1Z2tpF7ZzhRMwmN",
  "key7": "3DJNKdS9juRPjjYm9AmPLKqmbDX2n6zSu4SgG2mnqdMX5GPAwESzydTnsuqjj68oJN3W1HHHqdRNYih2ZsqcHjKP",
  "key8": "4yEysahxRDnEZdDvXiC2qN5hAbfB5oBdueWMFjVYZkcDGuncfWYPuxkYV2U8ZJLvSaaebbuMemnr9FE1AWy5oYZi",
  "key9": "2ggahQqjm3iyiS4B9oqty9hjcaBhH8wK4CgbuAt2kqhJTsTazRrp17ZFed4DxxSaFRfyxdZYsywoeTkDCy2N5HsQ",
  "key10": "5pfq3mZ1egMLYi7gx1A5ye2b1Pz8xpriFpiQitmGLciQaa355XU1N47DxNxu9bbNnjgQBjmqr5YJfhFCxDXGDjEh",
  "key11": "2CJ4mMeUhfpkRhrthZLB2iYfqAo6kx51CQfjHAudowc6bpvMp93H2rK3GDb4XekDy7mnKwVZgQvBrkvL7hEmTR16",
  "key12": "3Q7vWEh22W1CS4j1f73xfTpxm5ruV5p4WVTw4y4qMgnHskHXac1Smat7xPCteQHoknHJgPwLoZveZGuqtY8K9DM",
  "key13": "GmVHyisewxwRjJCSgiSLxNK3WwyFUJJYsyZfNWQ8o2nKVM6AVnfjfnLynuT227uvvnBKKxeUFGm4wSq8ovkLJ4T",
  "key14": "3dhkJTGHFWgRf5hruBreJZrR5oWMxfCHQ2iwdXA9ttWqFX8kEHQVwdDB81ADnB8uhi6uNhyGi71A2uQBr9w9t2Ja",
  "key15": "3hVLWTjF1Jk3BcPLZoYLGmQmMqhAu3LfveG57rL9sWnkhFn8SLCsraXo4HjvxjZ5oUr91T59cnDvNisghnFYqJKp",
  "key16": "2x98nJ6FAQxWsrFsNwvvUHePKLbEd2pVVxDyHkPMMPr5dh5Pk179dAyCVgtUGF2LhKoNPcXBC3TPtzmpC7KT81u8",
  "key17": "2zBgDGpgQ9xoxjt5m1L9UyKx2o4GuTkc5ZFJQgTwxfF4f7vKWVCJ6kwQbDn9qkys6SPQ8iV1jHWXdz8jXwRj8fHm",
  "key18": "38TwrB7ozE1EsnyDQbsiwz9jtp9UxAJwR7eNNy6YzpXKJT79E6P1ruV2XgV7BYJj7AkgukjpxeuTK8R5svjZAaTN",
  "key19": "2hF8nzVKCgqbNQY5PxG6edEV9Wri2eFpjr3jLEmsZmm7fL3jahvFwZ4MViqpiucK9Sc9SugJfPiYX7bFm45YZUe7",
  "key20": "2UDL1JtNCw2fi7icmbE3V6qSt6R2fwYPey85niVrRxkZECqaGdbLiHgeMYvryFjj6KLFc6WHiY8sqfZC1uA74Sdg",
  "key21": "RMJxqTcPbST5g7nC7gXbUMhpKAgHUgwxmues5FfeX9GD95RmpWkwnDwMpRapYkc54nRPWwmhpK1Wts4u9n2rskG",
  "key22": "Ua1bU2wWLccxFiJG8chYFCuTq72Z4taRjH2MHcF3EP8CRyZ3KBJ6GcFvqmj1CyrGnHc53UXdfah8ewXgKRjnuEM",
  "key23": "4dwNoNrT9EJxGMejYAKaF7V9iPmcZxsvHXYEo7YP32VaEuwcRmUuTRGiv6n2HGBeuZsWeDhGEa4BGvEy48XkM2Vo",
  "key24": "5CZubbLcYdgA4XwDHyS8Fo7dCwiQ4yTV1hgSj8N9Ht4f9foNkUGK557U8aiLQb2jpHNRi5vnNNNGfM1jjyyPbEiw",
  "key25": "4HkL7w2nTDf6cT98AuN9gMG5FMtvPn4uUq5VF34XVTqngmK85hYoVjW5dyMQ9Un1mhjz4MaMKKAGjxhzduZ3b3KJ",
  "key26": "47FXotUoEgC4xzPPfnq4NPLGGZvag5a6JuQ7rLEworavL6GiX4A1gjoKT6Z9i2757UcLBgWGd8npnJjYqQxaAY4d",
  "key27": "3qW5U7prSCudi55RwFGG7RuqS4vg1RPPKuiAgxAsSqS3XcEVBg5k2C9pZVmcY2PAr6FtVra2TXrHLiJc8LsV3F8S",
  "key28": "5Hi62RTPJKRRqXujKKSdK1sxTLzPM5MeMZgz3p1oMNXasApubyo1QdmpnmghwRN9DrQ9t8QAQtvtywxZP3eLoTVc"
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

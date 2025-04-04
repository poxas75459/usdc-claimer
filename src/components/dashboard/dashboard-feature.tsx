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
    "5dWMv1qfUBjxUPCURQPsfLmUqUk6kS8yDWjMADJ8nQ6yvw3k2UmAjqskp9di7cJeBNYyLRbqnHMM3L9XvY9Q1KMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27Gpodvnndc3e4mSyz1CM6XUW8gaZnUwEV3iyfqNnPJF1UJypZ39chrKp5LXaMad2zUSgN6fNqy8wFcaErVpBEJ9",
  "key1": "4Q5pPA8bfpCTz8vj2Kzpx4xF1k659TTEcpjK9VAEDMua63Z67GHvfs2iUoBSywByVr2qBgBpQmNfMt8baDuJUq3w",
  "key2": "42B4dcQJTsopvdBQoqVbSWPLkHGpExzg46LVcdstQUW7g61VGhMk9vizDaXWYEPsuWWLaUnamitXT9JYChA2AMxc",
  "key3": "eXiHTfQf1vVfwuuGvoLyrwMQL7bAN2fJh9rFeSUz3E6rvtnKarKpu2agt8JJpjV6ca9yNSsDm6hHaNSZNReneeh",
  "key4": "5Bcge2C8gveKnsPrdhRftWcvduL843WHPXTCiWuB1BkoFEnEd6g1MDhpKTqTWUKGUQRt8qsX7obewUok3tfPDTPc",
  "key5": "2qVJr2KJLCMjyXkihG6r28g8dHcemdJuRhbzj9mLuun6QXWcyej1c7wGUZWuvRErZ7LZba46LTrE1Ygz9iYRHTTx",
  "key6": "4YmszdStr8z1tAs2AsrpK6eFWef8LJbEBDLyz47Qb7cT1o6cnNxgxkd9KNWcfzKAVSBUuCQgwokq8xL4QMWsEDeS",
  "key7": "3HYKaMwBWS7q6jrGyuKyzwH9zeUUUEFGZDa93E1iJWycjjWUzFzkZTLZPSGNrkhUhCM2NzuPMUxnzsjmDzEYdVnU",
  "key8": "inPdX22Sei13ESuAYRasUtWhQZH7LLqvU9xajhqQqFa2uhn87SZE3eutigouUpqTa53FqrbwK82VkNWSyspWGLF",
  "key9": "5JPRCSF9SmJ15DDiVhvcFGZXvnTWPpWg3fgoabKz4dvPGAKe3R97xpk2xjTpvbTZ5YWpUeMAa9Km7BNvHvZxQ9Dv",
  "key10": "2FoUra5x7J99qbfBDeJsoYGqDgrCKWJSr3zYnKjBdtdXkU75ZF9L6W3aUBDXZqY2RXWxSuBz7CLcRBcw9cWcrWsB",
  "key11": "2PRVEL38C3667QeuB4VtuvmP1mwegQKHycxbLZKacTYGfsnmCGxy9eHbiuWUfiYAXAKChsB71QwmLSFzj9YLHDaD",
  "key12": "2tb5czjGymSqwUAq417ZY8uEw9LwhkyVwGdwT6Q8aiPXjsqt1rYx38LknXZ7y3Bknn5h6jUYwy2Bw943ksCSe1eW",
  "key13": "26a78pS9JTEnircQwqMnw8bPdVe33BUhUjTJkiknEUNBpivtDcyYx9DMaovy82NL4aHxfovTNWFnQ6uyQX3LoHr5",
  "key14": "2jkMcETsQhFTcmQqzdLeCfWonpSqFfs5cUMC83WxqPVfMoJdmy7oNZTJ79YuB4ek7dVece1h692hRiD7mk2MVQpU",
  "key15": "3tRQFttJcopVJ5M36chNaH33VhdKMB24Q8gWaEFpX3fdP4p28Mj7AJE5X3HbDM6iDi8ZWATbgyTrZor6pygcVYqN",
  "key16": "1uS8VDKJFbKQ4KuSKTDK8EABvZXdQabKCkLDYra4MXosotnWMNFRFK4EMBQ6BBioBk3rtoL9NYom9oLRbPA7pAv",
  "key17": "4rHHwnB9GeJeAeyyZmfcTE9BZAEXTbTgSuktS3Z9V7v2Bj7F2yJrqdaQuUbmgteEqE95UEErTqBwhtMEuyDjHfW6",
  "key18": "5NKf6TZQMYCkELKuBobenSyEG5hwcTq6ngyB9KJzLhQotVdpSLvkpdmq57KYTZ4aGDNDsAqhBrhnuoWmr1YtKKpz",
  "key19": "ZpzD1jf1Tm4Z44VSoKyFyapbm3mQYUMGpw3erHMR21cgCcDE66Ared5xnuANDVa2K1WqeHnDJZ8LvBuzmuvCbQj",
  "key20": "2VhcbjYA7yj4C6K8upYnZN5PDoTstMrhBG4cF5J1K4U9WfqUgR3MSViTVvuUX1fGusNfXcHtF8Kosh4ncan6Uffe",
  "key21": "3j8nYxtrPQdmxwqAhKoej6r6MAm6R4kndgn1YUaK2MBEdQ2wXitKzWPCq26VrJTDLqevSEoUcjF4GRarXYzqudcG",
  "key22": "4t5ky6gaeLW9gmMUn9MPyQGZfsEmhLNdjfhSxxH3bDUv7eKyGwfm3q9MpsQJaBNZ4upE74SPt5YgRyxKUt9MGYwW",
  "key23": "285M7zSNGwC3RiVgLGadBPUmc2DJbBwoTAK8ncfBXXXeFoAJMLNQYRzybfBNXxE6sSCUcCEJEADsQJiyy96S6tvi",
  "key24": "436vkqSipVzgo7XXVseYE4oKmLuwNw26w4XD3wXRc8hAGa1bwpJ5NZFEkcPZvChATsiR2CLmw1o7pgk46oLzNzGh",
  "key25": "YrXq5vCgXaEhRKPAE3H1V7Zs6d5jJzfRiasSagvDpxZXf3yMy252QiW9gr3BAVdxWA2KeobR5XVXQt1F8rACste",
  "key26": "673RRNTHiqR2cQuAoq333CQNmrhL4hQCMB7rTsWe3AxqtZjPA5tDzcUrXrfwurAYEWfJpEPVgXnj2q5hG4NufnfA",
  "key27": "xi3wGEJuS7geqvWmSbEp1hqHib4F5jDNXEbUKEjKqBQBYZNWYuMo6HjyNo5etXeCgvEM7ph4ADwDiDTFr1peci2",
  "key28": "245USvNMCiUrG8vJhVEKANBnodPWk5nE2sYpmnNiFGcCK37L7cgGYgZp4A6WkMSVyLtFmEMK9qMyLpoYxoDu7GFy",
  "key29": "5LdizKVQubc4zHtAgTofpKvUmTxvw7Bege6chkbnMf557PLtP8EyBW7kQuwEbmJehrXerCXqMiXP8hg8rhriQM4d",
  "key30": "2FNGjTLdbSWvjVRYyVcxR8gKqZWptqhPy4MSfFZpv1fvEZHeMCnUoDorhiMFoaH9t3R8UkRqx8XFSHrPDUjHgw5Z",
  "key31": "4amSWnUKLCq4vcEV6DaxS3YQ6DUxr34f4QF4bxd8SNzpvU7aZqByoz1YjjnoAbi2NM3asFqMq4wKeZYwJhv3afS6",
  "key32": "3MF97yz8VjvkcgBfrsUQqRWNYXxTvpAyEQ4V9HRV1mC4TdeavxD81PdSehWWKyGShy2iFV6CKYe9nNTJfDEqoNYp"
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

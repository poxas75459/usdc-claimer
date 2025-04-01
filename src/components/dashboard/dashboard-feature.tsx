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
    "2zPiwcdp3vRvAgjve3oLna2A4AbXak21DP5k97Uud7KiHbaywoj6QHttPF6BXQ6MSSxYou9CszaC7EBg7GVPZZ9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AgNxG95cDuL1jhrWyk97QDAwZBopFBUN2B1qtsUNf31kjRdoAiMzZzd7U98CsCRW9MnqfXizokRecd9Dmp7LvQG",
  "key1": "3HQ7Yt8LFeEpyd5Nco5p9m2T4GP9nTajHtFXnN5etHqcPopX1CvcJm7KL1mGHJmwc4UdvQqfAN69oPmo3yQZpqBJ",
  "key2": "unisGWEZNkTJv386m21nksQYCVBsqRCf82hkwQj9wFyy25LGS91KB9WEfmso3hYNu6XcTfY621638Tn9aXThGQz",
  "key3": "5eULjM3KJgZ7GADCsTVUMFcERDPXxCowPUgNYq2e3S8xanNoXfEe4mpkEgX1n5YNFmG7aC5YtjZrEBdizjW29Bh4",
  "key4": "2d8AWUn8JkVYrcbjmriEv6DnZCub1qcrYsV5Q3nZZtzpGdHf79QQXsFSYVYxXqLVtnbZ1yZWB96KEqvLwDvjKRN7",
  "key5": "bvwnrGTcpepEtgcP8rXXwhYdKSFhrXVaWu7XsG3rwP2umaLnE1nug1FbG5RJHQgvkVAp8eXeUGFYXRfEqZ1ffju",
  "key6": "4ZnAKrXP5GoPeFo55mCqMGx6thFKJSoLHD8LHKPcNZESW9HmDMNcagWGGVHnV25EX1xi2PhV5vH49FuSqXgtPcMd",
  "key7": "uSahxJoVczUhFbexPwEMFeNSDXs5YJbhCiugdLPae8Vdi3vnSGo5kfvnHjKJCYsxt25wUfvMuHmyjxRmm2iBnrB",
  "key8": "2AmftHvsTxjEnrz3DDas5bTCehtZVy1rYqfSCvGfuvpipRD89HZSV63aKDTtezDRduQMXADLK9bm7oqZJG4vPmd4",
  "key9": "4VWJSfJB5thqN2vaBnrShnE2kgLyxH9XhqeVW2hekHGHfGiqLUmajkTV5kKiV54FVoLKepXtQPAq9HVPoGnKFXQq",
  "key10": "3snjLuJE1DzupCiwh8mPGttVCP1Yn9mrGhcphGDqMzC6cwWboW6gXuLsF8BSzwptzHvKazkZmLLqvYbEkqdnFz74",
  "key11": "45SHb2oQQTJzgtWkPJtPVkAty1fj4tGhAWamAdq8cD4YZQDUQFxbGosL1u3MMgUs6BKn2x6w9GUGTD2HKvhEyrQw",
  "key12": "3wsq3fbvAshwXFL9xYNFLK29GTEnTM2Tffmzc49dwPb2rJe9xg7RXr98nn1H9VVuAmCJgAng2wmAf9nywqAasAZh",
  "key13": "4gcwXGY9uNLKmhgUd3P1n4J3jbHGNvzd2AqpqMV8sz6cXn8judaNrymxUepVHnsQEhuuw3UVqHY8o2GFkREn6ooG",
  "key14": "mf5rLZT8G1CDej1AaqokriN9TfMPE8S8e22dTGxeskBy9Ye9G7SM8QfAP41Hju7SbgcbVnUJfzcsgdTrjkSiQCW",
  "key15": "jT8G8V7noWyRjm8viqmdqLvyoPfaUQdNpprmhKpnNFRCexzvFSvb2ppp4oe3gdtqfPMvfueXMP2aZ5X2v95vGLj",
  "key16": "4RvPYmNFeeY2iN9E9W1BDnTSQbN1J6B4nrzZjP3jh2x9q7snki9L1WUiRU4yyperqLWbMznCE9XiRGrbzoboMAiA",
  "key17": "3RNn2hHrb7bLneXWZwRgjhkobLPnJdtoqpQhCe3grpxKUPpJomZ127pbg1CPUS3HZCfLswL5phPDdhRc8ik94dLK",
  "key18": "3nyxgRJvwtBMg4eTmCjbeck8HtxqxShzongr8CULpH5MKz6a7BNyRMG94cDpGnrToyWWPRCTM1hpCyE9GtfcyUgQ",
  "key19": "2kDkfhBhHC4X35zsVWeytghAV72PK7XB4qjxgdXSpRsj722G7Wgn2LSx2Xrp1fZEwKT7d1R6SRU8H7AUkY96JuLr",
  "key20": "5EVosgdSt6LDzSegzTiqvVVQgyUpKR5MF8qYbLGXYq1ikXvCLbM1m57AdYfssG4zWobcEYcu6TwrJ97opCmDV8L",
  "key21": "596Nf8Lp4akdeKuVBx9PYcakrAiqJ9owGDXFzybeNe7C6vMEqV4LnCBLu2c3Cr93BJN4c6CJCtwySZWFEChRT6PP",
  "key22": "4fJ8hobv5LQZBsKzY5C1FfvdehuYe47GCfXSD39pdFKMFVDZL5Fhu1Ph93PnSr27vq6vsG3qqCnUksKVbtJvuzq9",
  "key23": "t4tpDkQebrP2UtXUPvkeKvComMV7KkNigWSkHgytujjGkVYA9qoDzeDvCYNUjkmDhr3bAhDhuLtdacAfsep8eBr",
  "key24": "5qxqWXzFHbAUoosUd2s4KeQ7Rd1XuKF88a2aAhedmPRiwY1R43onZ3tiyFgNuM6wrQcmGfVFpKMvAA1bmACe25Jn",
  "key25": "24v1g8UYCUDRn59NuYa7G6W7wxt9WcjitgnReiXB5R6MUWwZcEf7egLa1yqT96xJEkE8i8iCpSgKWY2vHCefJ6FZ",
  "key26": "3ZvE7AY4XxVH7f4ZgF3iLvF1Wy3WSfmpc3DExDWMXjXpdESuBQxhBi6AJaCohaUCuerqHM2fNDfJaPbcDFRUY2c7",
  "key27": "dScY8D3yJsbxRgeFmgj3kYXtfeiyoppaTMX9CpCPJ7XPCC5KCrtWhbB2iSvyWZRBHfjWRzPyL2puNPvotseGZYY",
  "key28": "3R6MkTesPahQyLXC3jwTTo431fKn5DHoBHaPbYbCFxaHM3auWYTE9Lf2q7hmbipPcfKPbN7tLqDNDG7wNHhgPQNr"
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

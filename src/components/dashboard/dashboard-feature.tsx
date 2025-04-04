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
    "ua71BVqzPRiH17YYv3tr1U4T3n3XTMjpuGbaRcrjdoL9YBpHaJ9kyxB47ezcNZyPvHKyEPLx6VoPjCaJDMoHjGQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLtKRKzjCFkh9Q2AfFRQQDs6kc27dj6RxX6YEei1vBPCjJPwMYpKgSjRRus8pXouF48PWQ7uxLF5RpLAicbyFAT",
  "key1": "4jmYThSYp2CRpnppn94URodB1xyfgs31uZVnxvJhsvm7MkWHrCZeiuQ7v2LMCYejHWY8LMwso4DPcKKEtcVog5Zw",
  "key2": "3mszkomd7EDqozzH32UgNZ8QvYRmFJDH7XoZLGnqvve1J9w8tBHtMAR3vXZGomqp8Mpy31y3b5tQR6qkJCPdX6Hj",
  "key3": "25qQp8AMxr87wdizpmEUVBae2gaot8hASW5RTv9htPVGUxrBnEd7vxd8wT3N9SMnNXpzvtg5xQoDYTCDVCyAYfgq",
  "key4": "4JnP82D2aoeNm644ePjt2LSq5rz1insSQ2PN1PV9U6nhkzomGn18BekpAaitJSsUaTyh46mMp7YHmMMJzqhUuBFr",
  "key5": "5e48GhGRqVUsZhh3cGdZ1v4UqCYhrMEHhVEkTwfcFG8ZS9aPYxwwErWNsq56gg3bVEfG3CkLHAbayVvE8KUDdkzZ",
  "key6": "3h3Mi6mGxghBigm2okEHeZab2HDruyrLcAZ1acsp5qkooffSqAPKbYdF3b8VveWU6zotqZmppv9dGCLwiFEkMYkT",
  "key7": "4vE5koRQqkRmwFWrXHPptbFGypFZRUGVUF2yA3H8ajjkqMqAcTLYKNAEAasWfCzjW64EBZDpo5nZwtiZQuaTz4RR",
  "key8": "Baw1HZDYdfSdQ1vAebUu36zndUzz8qXwThe6AAUPsjLqeBJF7ySx14wkKZhBmANoj9H5qNuRENwL2j29tVuFTQ3",
  "key9": "4QTRbPtkfenKT5N8u3Dm9BseryyVQTwd7wJHqF6qGrDihueD9zJSNNCN2GVwQX4vcNuMgfTVZWqdg5XVF4nG29xc",
  "key10": "N2fZgjR4Wwhgh4egBR4qRtrdynHHmXj437MHnQzbJzzms9e24w68unXZCeDb4HySZWQvA2YwcDL7ZVohxvTVqEv",
  "key11": "E4mwqruZdJns7UwSGEmhSQnjZjoUXjhKYsjghxrVhTjPSKjdA4uf4DXuF6GGqDiukb974Gta5d7uyVaL5GHP2Um",
  "key12": "ees8FwiKiJs9ZLkk9AFf5ddLh2FuLp34UDgYnD2Wqy33SZyxGSGMC39wmJXUU5BXSUxdGtATXAZhwLu95XoCr1z",
  "key13": "46vKvLTQFnsrN6SLFomWULKpx5gWHTqH5WoRViG35a3dUoWo9fc2k1QBYB96mDvVXoWFpVPyteaNZQKXXYFQ28Sj",
  "key14": "3rGvbJcyAzLsD3sKzhiCYNKngJ2j9VHG13pv1YAGkmZebzqfZ9BEicWSHVWA1Ss4woFjtPijv2rx83DseGCHKZ8P",
  "key15": "4ZmtPMzKrcqYM4ScrQjtrKAHevm3LYPdGNE7MQnSXZ1x6QybdjbnAAhF7LkwQccbqD5WNGurzThqtWGEtgk2TnSk",
  "key16": "3AVPkwPPFZeFB2r2Uy4SJB73qartf7C8gG651wg1CUo8HcPWPWVgccNqeLqp5XKXDwNXWHDzS3oAzZpEi8RnLLN7",
  "key17": "4teGNyXj6eWwvPotPop9aLENaFEvSpC171pXCw2dfzaMhx18hJbRzAgkaT8NHyUFA1cWg98bvRJghjhZ6nixwRdh",
  "key18": "ZwLxY2fwNLCL5GeGNB68Bns1nZu6oDndzJmvNz4wKXbe5XmukqExrKySadujfqEQ3y8tKTVsErW1SZGYFygWYm2",
  "key19": "2uaDyktsXh9XmbobRY7YGWnt8hg2ZAww9wqLW6pJZnTSuAtpuJyVqzpZhW5HPF5ijhGY5HeHBny2tFdZadyGQCAb",
  "key20": "3hdjXPBmuXKPuLJk8QZjPtVcDinupzqHhi1ZaV3YznugFRhvYx3TqR8yWBqGGWFQRjv2btrmtJNrz5Qx9oUAz3BJ",
  "key21": "5gsR4NXs7Dsrxc4YQ6F6EbvFENrMus3rnzMWzx37cDgvLMV7Db6L23PK6XVa4jwi3LzQDMNBHecnUiZEgfvwLfTx",
  "key22": "n6CdzVeXPRcTbqSniTJ6ArnDjr6HEKNWCRdxqPhJbd3ebYYN5cKdubaXpgaiLLCeKFRh9eYn8hDJTLjJmoRouUm",
  "key23": "5o2huExtzv1MR4ht4aC5py4wWFeAr5wUDwJzyxfMGyUB1wTmx3firC7fHjhUkigL45hb343Wg7MrZUeN7SedMqj9",
  "key24": "5U9aLmKidX2BMvqaEobMqitJdihJBqwKsVUUYrg7ncMpNZ2APDMrN6SZequ3jnvFQZJBw3gsHPNJweLgnjNVcsTD",
  "key25": "4N1ZfkZdeeQmEvfk9DdqLtM2tebFW5XtPKxEWMToB4HqDbruwq5P6q7jYM3EJig8JVTN6JQKNZSDLuaJMXqww5a",
  "key26": "4ynQDe2ceX3Tbk3ksHze78n8C2YLhkbbaoFTtvv9eFhAKkoi5dD4PW4wQ5ppCXBE9autSw9TDphvb9jrFYv8g24r",
  "key27": "5PJK23UoCVC98TV93hicFBCJdYGrpzHL7ebeMCCTmdTRYXzqm2f5jZjaVy7unHRErEKvR3Mp3WKXuyVcmdxbA4tR",
  "key28": "3RefoVjc85uvke8eYaetJzZz2tPG7VjYRGh9uypQLsejMWvKG1rq6rccnX8xGF1E2jnzvypHvLwHM9KDdAf8CGRq",
  "key29": "3F4UJ3JwiZo24dQictHdP6BNgaHkzLzP1zqbKpyKhuJ4iTH3CMBqEjNQi8SDHM29Dy3yufHhwhXgyvW8o5nkwivS",
  "key30": "jEtaeZTVnEzwDHxW8ivV82mMzGFxeHegTfLjt1vQJZ6B4qpQJasKP6yCAHBx7iproB3oUs8a15jyYWMvv3ywG5f",
  "key31": "3F1ncXYevriYMm5XTU6QHFbZkf6WxGAqyhQHCmxcjZGpyD34wksW8tEhQzLnfxje3xs22sgb8jkXo2k2yc2rjcHy",
  "key32": "39K8bwzyKAFxaPA5x7D7NBtvCMqN69jZZDmFNJYmr5qCa3E3YPEmMWhwfsyvnjofxfJ8vFgMkrwchaSYoM3NJFUy",
  "key33": "4E1JHXBiokzzHXisA5jm7ks7HQNFbif6FbyC4SAtcVDSdvkEQv9LdZaiXMiVGM3ZF67A8MhfKDyek1M2eQ3YJV5k",
  "key34": "eYowrh2eMeeMGqmVYMYMbvtqRVBt4vCnzrBH4TZadz8aDeKE2je9VatiskLgZkSubAE7cCuSEPPs3kDUQ6GtSQr",
  "key35": "3N3o2AJHLbrQog23WZHMuEdGoYDCGv4wKaMS4FcQEjQEYKcxR8kGDoLAYu6WtXxXFzYAZuCcJBk3xkAPRbu4ZzLd",
  "key36": "4rU91ckyRyBPUusXDcrwNPUzgyinvgRoF7sZF9u3T4qPLRyvJh53UdBSrwJALnbhsEj7p1Pi3bzw5C8k75qn8YrK",
  "key37": "5hZFPfcYtwXbvfDZqCKgPGpJXmpxyzUFYbY5ouT9kwZdDDW29aUzCiTaAMZC97m6e9z6e9H6uJsdXJmr4epjQ2w1",
  "key38": "hf7N4xj8oL7B76Fr71jUbU5CoN1CZX8d5r4HsgMuJ19g7n4mxLpNNJGL8cvtPnyUd3dDGtkVoduvjVWekcyBnAA"
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

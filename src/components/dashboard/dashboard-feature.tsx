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
    "zPmDDLQHKf3RwmBNQvpoAj2RbuCMd8rqXZQ5JG1wWM6ncdK1zHhPVm5mj8gUVtBh1o651DhGg8PRUZ1rTLFEkhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HPh1LqKwFvhGbB1NQBxFWdsTG2m7xzSJJGJno19F9Qh1LKVKkLtXGJ8R5gk41Ab1Fg4ZVQ7BmHxrHNJtuofHeUV",
  "key1": "pfKjSgsWw3chtmWfJWLLGyWCoVtwj1vmDbTmt83fhxJtWebZX8z6Je5ZZ3qbRNNQCo4jfHNG11UyxJxUB4vd13b",
  "key2": "4AYJs8DN6eNCjLXk7XSB69RLrVtk7VM7Q4B77Fmqc3cBidn2TUM1CFFFAaG8c1QUMy1q27zpZYxqpR2vZSZiPfVc",
  "key3": "5Wq1XyEykRA6Pcgj9c8jbY8y1u7Nrz4zgZ8a8MDgeLLumKmoxZm3yGZWfSrbkQueHaAzP6UyCY8nVQWBDvqEiMyd",
  "key4": "X6bax59vU5qafdcAjCMbBLAteySFLpU8FP3ze8NVdpfMr7f2zfjwZuxpLLNcrxCV9dFgNdV6pcSjcNssDcGkQ9w",
  "key5": "Fzu4KfCyV3t9aFyZ5kPbuPWeeDvNKxEEcMmQbUgFu1LLaGBNySpsiijMvxAxocGU3qafFH1RYBTW3SZHh9Z89JL",
  "key6": "CduC6NdtcwNARH5FkN8sjeqbnbm3pMG1pqgSi9VfmHk2Wvc2Y8MsBBFyTEiZmVzRqanAbvYvHNsx76r6VwuJZKr",
  "key7": "2rJX8smdAc1eJwLFqQyCPqAhMHZWyrQerd2X1XuaHrFKkSaJxi35WLpWz6WDukfCMT39HyA6UizmB6C1ppDYue72",
  "key8": "3FbxDu9Bqjm2mXi924JEfQEaXEZ9y44cuGMmRRRqHQ9eYpFeWwrQAHgkdj3aWKus5V1KXvPkVakmcY2jrxhJjFqH",
  "key9": "4gwMG8x2eqy7NLx3T8usy16FoYe2v4kvyrxL2vtz3orNJ1t645QM9weqt8GEDHNU5fRnU5o1AqhrBgutdw5JySAD",
  "key10": "vXbe3gJD7cjqzJfboinXBn78CGcLB7zWwB2f9ws4LhRmwwcB7qHzaKj7fAu3ViWGMDuitDNYmDf6WeJJDinjTF3",
  "key11": "KRmmFAbtiHM7SFQ6RNEVeE8tSjn9fQGU5mq1UNtTj3QnjW5kAPjvo4SrQyY4a5Mao5QkfZ7UfEdajcLDrNz3LaF",
  "key12": "3bC9WiTsc1Cbbf9CWXneuYHTc3VLM8pryGNd36hq2iSJ9a2sLXfDiFiTAC36gvxDBynMLSMUZdJFpHoqfEXy4xF8",
  "key13": "2PDMLdNuLbQVatGKFJ5ZmiJNBLyggZAFoHqDkXhV43tYzbt2zvRU8eL4D17YNxZTsp167oN7MtyGoFqxAE5M9hug",
  "key14": "HMv5TaW5GV5kEqocyBUCUcD1tpDZLTC414SzNPKTMQVLXp4tyy4c9hQQWqAJDcNiSP3We3D7chHXGj1CDAq7wvn",
  "key15": "heJNVaN1ET8tsLAf6sDwdXaVxEJEqUynAQT9qWVB3dubeLYA7BMaNQKwR3t3N1y4sqooZKyVWTem4B3KMNky1bs",
  "key16": "3XGfb9QeJQZ5W1GPEMDv13Fw3bHBdfinugoKXP6d44bFNy6TcpMmYFcVV7LJcKic9EdSw6bmqZucs88uXQkUm8MZ",
  "key17": "5XZWHgXwLrFfGw9kzBFczyabTzkxk2DYLzi1uXCeWQvBpf25FAovNYfgB5ytJ7N2zBSmcrBU67SB4PM5wi4D5XJR",
  "key18": "2pALKLJ8GAK4KdttzDcpR1XE5SdAA7TPctzJRACaX33YCvnEPbR9qzaktk2MA3DL5YLodt41CYpKkY95C4XNDit4",
  "key19": "33EWgoUyuDjjX1Uo7yhrJd2WeNsTgVXoqiW2nLnr75M1efhw9p6Fo75EiP6pKHRy291VN3inoLBDmwwxQXKrR3CR",
  "key20": "3ExBYqwJncRaLeMtBp6xAUyKCGxH14DeMv9fDovFu6SdDwx13G1D1SkkeRYNjerCbmL1KWg7RdhvNRbt5w15vmJN",
  "key21": "66bFPNqhm1X6GGc1GnugEkiTPas9GVH6UffxcL7pyaNHrKrezDXvxZt9endfmpTbPhJbAArDY993YwfsbAM3uxfb",
  "key22": "4hW9ucsnygtDvPM8enMKPaRQbsNRnVwoUTdcV7uRKtTvQMF9navV56W23jQsSxcDEapKBpby5T3t3cfx8GJ17bGJ",
  "key23": "2YXf31UEHv5rbszPKGAFibey419xPeu4YRqUdgJyhwDpUf4n3eEqvovL745qCyLgYn2HunHsaohURHnLugCkq4tu",
  "key24": "4WDTpJ9wGrkPCEWXWod5nmRNy5D8kWCwmTkqdQWATLJAZuPpAGr2AFdnazweq6opYhY41yCuKP9JRq5M6GA1i1bj",
  "key25": "5MtUU9ig5qRtgY3toukmjHb8jJs48c8BGFSKkueM6TnXf9Z7gJyGuD83L7MnyN8r6BvvbVVzZJqf47YqzZhPYhYu",
  "key26": "4DC33zs3QLDMkaGtryzfMzuWteNgS2SvynnXz3qX1sCMnVWX27B7eyeDABpu746sNzv54nhDWxzQjMBF2cWca2Ug",
  "key27": "5xTbmFYKaWcDdGo3pvZYTEfcJ4vbF7Gj3g2cw9a3RVkWZc7tChgA91TNg2BtxUyZbiz25DisNUcoj9QD4xJHLssw",
  "key28": "5QSWHEf48kqfAN2XaJ2h8aWijiup5cHaQADwVfv48dxGtEDxdrCsRcZxVoQ5C6ojKLvbiRDZgcahmxe3W68DAMLH",
  "key29": "yjTzmAfEQtU8ATm6eSLXFVLFAUdcARyS4kMgYTweLhjcEJyCtk33CgQ6rwfdJQ83dKoE8PtyBDK9waVa6D4YN93",
  "key30": "XdNEF9wZuPX9xvUG4kKusu4w5fBvE6fGCaEuaPdZFsvCv9UfmAbd5YkHUFUNQxEvQwSFVdiGNYpCF9i4oZVuCFB"
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

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
    "2JwwKbB8XddFm8yPxA5zJE4iPEW8yWbuAJyRv46wPA11VSQVRbqvNrUfQHxq8XQUwRw6pCjsiCbkNsJNnf1614Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GoJuYknvpGACvomBno57djtsf3UNS4jBhBEA5k4jTHjsXFfDgb9YVff4tcq1rPB43yCf95rpgSZxDbd6UdMB2sN",
  "key1": "2RzGicZxXMTqsNpG9spk9tjMYcVFv1Sx2mcfctFVjx6eyKjqdfbuPPyBsvQZUgK8xff9dVFsizQV2BsTg8XpiQHs",
  "key2": "3yUGFUVnoiirx1tbY1oiWsJRt5a2eFrCi4kR1N1ihnvzr8SykksEY9Q3hs58aVZpFPghtE5EdmGzXTWPkv6kh2z6",
  "key3": "2wRvfMdyKAN6a3euUrn81oenZdZjxPDxTBFvBMu6MxxokYER3zGDcJhWYE1qfpXNdP6JeBos9qEM5CaMh7zZ5RBa",
  "key4": "3HxEWaekn7uYN6BCGf3UjrVZDwLbkfYwXF2ffpsiU61CL4EfyE2Ym4nZT5TBjMhL5SCzBmv9LojS9171kmcgd6xm",
  "key5": "3SyMMpvkVsWQWS8Ng2LS2nKN5ZNgSNXjS9rbSENwEMBq9zRWJVFLsnHyymfBXFc9JkACpDKWQ1EJnmqfn6pNGdA8",
  "key6": "2PJBVJrXvuvkd8wMCGXVGSxfLQT6LHn588WdbZjc2gPPARx4qmdnuj4JZrMLH84tpBTHBe6Qx1KGcCMeZu3fGwg9",
  "key7": "3AKmC5ymbEvgRNuTgXxPQjZjNqqfgg9ckqMh9wGpfh2eHQLDK27tqXuyz3eNua6dv1V86HZZvvk9F8y8CPb9ZQ8K",
  "key8": "3DNpBoxfAppynyqqFGYhvhJHu3B5DbYBNai51eB3ZmfQ5AWmC97m4Kgz2597fXX27FHU1gtBkSZJMMeZpzELUTEY",
  "key9": "2T4b9kcGQUyFTiycPufy3w1WAtVG88KTgfZXFR2fmPhnVYb4zZ1qxNVX75fGUmF5TP7icYDF5hbusnLAsvdvX1Z3",
  "key10": "5Tdps521oUQ16ScdMMTJtHhZKQornoqA24J7UjrYWSDjMo4Nqh338pog7rehovA159V6NuTFpp4sAnqS6Y1ZcdFB",
  "key11": "u5qSMUC4SutXdUQofFMEhbfgfJoSeDXxGcMVniAb2dEdujhawQ9kfYnNugkRssnsfXFLAZe5dTmu56mYH27k5W1",
  "key12": "4B4jgR9uzKCwwsT1PDPd6KLGnfDYeHtetDmfSTyMuPXgXWJTjwfDVAuzbkhTN7RapejwSfkQyBmWoDt4vGcUwDne",
  "key13": "34rQaismpHsY2nczroQ3AjFLzoM5JTY8n64Qvwd2K9UshaqcvHhwxHwZURDTscPPBbrYfDd6vNC272rDQRTph2nA",
  "key14": "iAbTFpQCgd2zBophQZc44BzvLmENjubhWizc5sfEMHpMRKnfKLqhfUfLWF3eK59F267sRmELvENY4bDJ2WPUHYP",
  "key15": "2yVpn9oCQDoL799Z7regkrrWpj7ixz3mES1uKRU8i59yUdHBDerSaznMtmqHM28CaHun7yaE4baRn6FWpe7VJWzQ",
  "key16": "5TF4muLPvADF2SmpP961Paox21L2VFJbR312Yi4kLcAXQNdACU9cc7wkwt783HPVTMY7VUXZKJv3sLw6RMUWmnyH",
  "key17": "3AZTRsiyJJmVHjS6v9MEQaZ4aZ8sE9nt6Jr6h6XcheKjgbJgGqs6sTnZ2cH21cLYiQLTrvktzRbyrcG6Dgzrrbu6",
  "key18": "4TerBaZ83o44p79rfAjvicxeQqCjK8z7stEgMsm7KkXv3QaGs74m8NhnW6YaEXeVRiLbjQKU4xtv9LChZMNBrJ7q",
  "key19": "njuQ7YGQRBCwauJRUh7ReTpJiaNPYbBCN18JeqQobaPDZciAg3gCvez4maR3PbWXpMfk8aRSnbuP8yV6wCUSbpj",
  "key20": "2Zbf2215eumN1Qjt4TUdkvsNqeJ4f8VAu4JG7McyBjvbd9h3CmhdCaj6KLhw2F36i1zfryRnfUQuC5zjTsxRNRJK",
  "key21": "28AZpH7h4mjLx1sWPNFZyKkR8LhhEbmePJ768iawg7gTCPsPbNz7guPxhPyKGJixPKtYJESVx6AuqFFL4uDwrEW4",
  "key22": "3FzYajP9PCVvtT3wd6CZpKE64mBddMmaBYGZLXytZYAJpqpJe1u65xQeBgf1QG6jWDqMZh8z3jjwwLWCwPoLhdHU",
  "key23": "roVFELoAHeMkFeHxunJGQSWvqZwHKNwP2jte22wgqY6JKDmqHcxkCG8vWk2ZNh2XNZaxLVSTG4A8UrF76HsTp5n",
  "key24": "3HYNNi335bsMHVwzKsQfZjkCx185oPRk2gFRs5z9uAw7dxZGHAcxX166BcgQKrqjyZWQS14Wt4R8mbsQzVmBPnPr",
  "key25": "4EcRBhRM4dtoKayLmwysaThcSdghYEWREHB9dGUwuVJvzTCkZRzYityhX9LKxGQQQ9B2K8QY7b6CcrZw99ZKkBwR",
  "key26": "2A7rHb6cZdk5qQGj55gpxNyBunACxVEAh4wQHpzkmJ2JDrG6E7RQe36nPAR7fr2igWXkeprqbmqoGYMaF6YGbREj",
  "key27": "4Vt1sVSjdqoJFb4GaJBnx8Yie6UfyTjq2EusmAdyyuu6CBKttYa1enEaFmCieGLDacm99LNoMBZxd4a2mow5ZX34",
  "key28": "3djFgANV6nj4wK4FsRpFfuSLvoTedAStqJsgqUgPjmYdH6ucQKgieCVHiY1LL92uuLsifyDTxcDv2ZtbMG8NZ9Nu",
  "key29": "3dpAxiQyKLyR7JNw69pEyCNk7GLWJ2meFk7SpWj2Lzeu3yb4yVJTvquWADrXudbN1gVZAmgpVF5sQEUSjTAHQ43y"
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

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
    "5a5beiVe9XQ67uFrSrbHPUP2wAq52F7wZo5Z7FaorCriYpoSuGkAtPkSW7XU2HTtTuvpyqmGsjQpWyDPcz9s8nrB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3ipqt1bK451Qt58jHbcoyJGZGa4f3u9gJD2MrYtaGsVJVxXBSosUFkaq4srpgS75HZMuQm4KzpkwvEiojdXnrN",
  "key1": "4EhgmgfzRx8GN8AzBMfCTuGgBvwuxDF1mLYFkUhjEP9FdoijgBZWEG5EV6zPLhfo9fihczpcdi4PbYqrfw3SGnk3",
  "key2": "2w35F9wGwy6RL3uiVfMf5VwQJMrQwadfgQVqqvYuUA1ibyCeafyLL1VNWkmfGiAm6X8LEDYqJPANmmxubHohnB3C",
  "key3": "2rhP8fm9fHgXGdc2GchGF9jubdzieN33wmh5VBr9XshqdpbgkbhMS9hrrVPuZf29tT71uzT491oTeCxasfnpRsJs",
  "key4": "4BKqDDeFtoq8RNbN5GHVNNrMro4EjMsP4dU7m5QPN5Tg37cs9ecaZ93fiAnnGAq4gNHisagdU1LELxRkiySsz9eF",
  "key5": "3Dam8ZxgH3z9C3u4VR4nVhW7CYvKUpLR74cBhenLk3tyJXEjejmRKhn9x2MRapfLKXMZkYea8df6pV337AnjpyCG",
  "key6": "3XdyN2iUwY929ZpwW6uw1RbifhjTqkNwkrBUAV2yCWNv8FGvnBxvBPYgHhcASw9RhwGaQvcHGEHANzybRH8ePxKQ",
  "key7": "5YaWnUnpfPsA5fTHABisrGKWBFL9r2rhF6JbP8kQhUzVwmbhtz3ZqkKkchpL1gq79nJmaTXVhYRe2RMVWYM37v2w",
  "key8": "4wU7Pa6fnHb3hvdBWKvjawQwTJHTd7Px1gd6vhrdecWyRz2VhtTLVZUyp1gk99CEiSvi6MPntbN7pbu1qNsAXHwa",
  "key9": "4oVHjE6Qir59UPHFE7yyW6DekAzm7CnLHZtEqsDyUBVrvGdZurXg72diZWGTS3gTX6ipubXWDkYn5N6KRdnZVmYK",
  "key10": "3fN5FnRzPcmq9z6JKNhksmaicAKZgH1cRJZBH9ztn4i9YoYVANadNgfRQG9pS9DkPJF491BXWVK18vvFGJo6z4rN",
  "key11": "43iSbaXeWDG81iUwCURfzdEtLGgwobqNdavpz2BMrWwSHYC5c2Tao7517XcnnuXdQnmtRw7BrNsyxbR1ZDAu7PEF",
  "key12": "2DwdZonLdkTGkXg8wsfxh2ksKrdKSNStRrZdZHA8ZAHiWHG8tq2QMasmCtdqDJRHPzkGYs771yY5XNufpBMkZhKh",
  "key13": "5UfesifnUtgEpbyRbjBH3CsKByq6Ke2nMc91UjKWHyujTgEvvL9ZKtoXk8DSzoCHWsSZedSDY563wagvGVNQ4a1i",
  "key14": "4Ee5X3Eqcz6aaYArhQj6smQFMaGiYeXwgDHfrhEMugqCtwpBhpaMg33PbsUqYaS1j5TcVUKy7hJubYrZK9Z5UfCa",
  "key15": "4KfesCPAK9cpzG1PPsQ8TNFtj7xmYQVxcGScxL3S8ZZGoYJYdMisDnE4vgi5kjtzheUcKg7SB9bLCmKK3atvmvXy",
  "key16": "4VrTu291jdTadoiTCYCv2qjY7ddG4HF9RwchvhJTBYx7vAhtoU9SPijixw9GVAdCNcEayvphoSWQ8VFUHom14ewY",
  "key17": "3Ppe6MAe94FVuQj3bsh5beu32u8oVQyCbgW4Ned8hs634YKPRaPG8KReTRXxHMFueLrZgsQ4PgXFWLpKD9RrdFP5",
  "key18": "4MxHuRMv63vGwrNJG6etCeZmHYXGvpCFR5Xc2ce81XX8yW2WKSZ2CVFk1xvXqdQVnGagTCuQ4RBhMsKLPDn25Lhf",
  "key19": "4iCoCXwvzSwQ97voXpJFSJRVaJdA8ZEZGpu6pXrq1j6ky7V56GvtnvVbrXpG9sZvLKHoT9cJvRnrJ6dL1eDqa7qE",
  "key20": "5cusKbdkbcNbJniiixrTVKafuBXeMynjxWRA8SmYWmRSboSjjUYEwRxofhrsS2M6iJWmZypkFqKg1uJUDhyLGEWu",
  "key21": "3Df6DRMdZM7tg8zBn79fUstFk9c36XymnvbyFHoPbwjTfPAQssSLrb4G3Q1pUJiePw9MTgE384UX9batoAAQ8Wai",
  "key22": "39MQmqkmuNaNBmVptpyWng1WUnevqFeCa577yHcn478F9K2DYjLMj7wVBK98v6LDq4hXNXPdEWYYmoYcbfxGzgXS",
  "key23": "3JfrdLGJRycPEwT8hfCSdUkawbCepcuUpi4i3EsH4vaDMJcvEwg7U1A9dnggtTKNJ94meD3BzUwbm7b4mRRU5C2v",
  "key24": "3pPLQ8hGZRmAc2Rf2aGSK8PBGnCx6UkE2bJuvdFqC3e4PXqZMu93SojfaFY7jJwxNErv6HnCJcBzjJWJAXBLZ6Mf",
  "key25": "4PhkBuUo4MrzqTJff3xrQEHv8ThWLjvkb3SUhpzxfEMxRfZukQjnoL5yLbVnNs2XMsr2rHSk9qLhBp6DGqgNparC",
  "key26": "3PCG6tMPmTyRv5icL5p5FhErtqWWeD6C1khrfU3hS6pL3t85rZG6T65fi9XaLfvgPAN8oW6jHkZbtcStMvPo1T8P",
  "key27": "3Mdk72jq56hNxx1ThViddbyhnhXuT8yej3zh1icWm96x5N3QKjxhhKP3xSQEDu2AsNjjML9YErGBcTXLgqDx3E4f",
  "key28": "533FNW7FSiHdstk6VBuHVDYGCMDDfwQpSMnMaz1RwHXteL8DYJXus9LT51Sa4x2XHbgJ98kL4gqk53tcuMWgHJV",
  "key29": "2CwBL27EzrAkWw9jSa6WS6GC1kB4jZrFvkB7LathTFeTQSFtWxTS7Gm5LPWFmH5oPT9Dsp4B5CqiVUJMBFUJZTVB",
  "key30": "3NcxoyDrmi3xdZKWzx7VdWo2YQC7dz8aLQdCUy4HUYAsPcg8cgYocmvXQe61NsVftraHKwGKjMcDpN8GoJTn7pw5",
  "key31": "55EaZxnWTnS752PycpRfrA2fxjXPLBJNUK1crMds8qKYoi1DwqVWA2aL9QRVLweYvswT2yK6pfh7DFRDht9E8qkw"
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

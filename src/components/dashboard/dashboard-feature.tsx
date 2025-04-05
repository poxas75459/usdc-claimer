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
    "4aJ3A57iLbEge7yNprTFkvv7MV5Xif53WNuGv5EVHQCDCzgEFvdYYqAjR9XNUz6reMDEVWnVpXirdjpr8krfehHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wdp8ceJEPevCSXPWWH14KvmRjbRuzfCV2oprsZ3REySy7iuPJembfchWrrweVnMeRawPRekSi922N1Az3S1rLrA",
  "key1": "3WureVMiPrtX4sDkxDeJyazMEZbDpvZNTEsLgm75QU2VD5cFYkev8ufgSFuJHv1TCoiqX95Argn5XKeTyMZZPbA3",
  "key2": "2awU3diM6erxKxkQwbHPaBMribFfeHdHxrvXvxWpsasuxAFCojkyHyxm83vvjFn8upmVjs47EtqbhdtRQZBxPneZ",
  "key3": "5cGNXoi9E4SpuNRhvDNpNJC1u243jGZAicZACCuGYGwAQhdaY7LGwG3Ed63yZBj1wp3DKNPsBYvSwVCNgGZqd9Ub",
  "key4": "5n6thBWgrFcNKzhpfz3QwhfmqGTs8i9ezev8aQ1z48wY3D7X8YWbmN1GG8gqwybKsdTXJHgDKthwKwn52PjiUwVU",
  "key5": "3ZgAPJGXMWscaT9kzwaUzpVpuubC9sLg6wW9XtguGWJRnVXByXnaEmXtYpMj9EePVTroqnB7xqLHBnhP5HT7z2Fq",
  "key6": "5QLBtcs95rkBLK52RYJA2XbbSDSVjWE6JQdtN24aXxof1HKobpWp16tHdekRfppjXpTqvuGC89n3Jt1DPjGnXxxC",
  "key7": "2PWJYUkMhXBLW7NaqEtFKSzpBvNJJyttmmPETa5r1w2RUDGbmmSbaYafQsPi8AZJ9WhMsphN8qPxSMUYN153QAJq",
  "key8": "3rQDNY66kV5itJpNLGUc6HFNwLnzTvUAF24WYouNer7wbzNg9shYM5GGVDEu26XmeapYHB3DnUxFG8ZcwtQ1rDRA",
  "key9": "2Pv33JUbf4xDBrnZgEHNdydgJDjnuxm4p8XtbcgHB6RtSJ2y2JXMzZNAQBFXYj5cto1wuPzWxSKLvYnusdVjkZSc",
  "key10": "3ucQja83R1D5cBstd6LbbMjJ6EQHeAFc3ARVnpBJFU4dQVDWAAYsNjvU1td5BhCu8i1yvwpWfguTY4cG7sgEvC9k",
  "key11": "3axd9euSGbwjfwCFp9h9eBVQ5cEDPVGWCygPBzBM6wHxc5Rx6kCT8K5uFArjTVUeUhVkyP6tzLssLkLEvtWY4R5s",
  "key12": "2m2s2bFhzFfKzgXzDTgYKSm2MVyZZ9xD1rEYrRNQKg2Pomaqao4CgmYLVmdKCfsUF74cHf3cW9YGdpJDY3kFG8QP",
  "key13": "4TVWFcrZRkSUjzXJrrTJzfPU4vnrbfm3tWWSuLRovpS8nzzmKfkcF2JrvE37hthZ8cskQtwt4jCUnkG6LZyyK4UG",
  "key14": "4hPHoLQ5t1NunmGdfFqgamhXRmioU8LEJLHcY4npAdyPLXLanN2vqfEC5fcrgtmDJZJ1eXHG2eKgTQRH6PnBV3iR",
  "key15": "CEBg9ynzpXfAXhoBHfH1CZNXLnNHqGfHB7eM8pJtHgJmVE8ABLizXYK9admiwBTgpbNCau4UEzUcRUDBqd6spog",
  "key16": "39J3kNLX7qG6uhQuPLxhMiaGuXo3qdEz2voh5UshYovP3vF1QjJzCDxqvTUVXAS1CSwqDG7SB57sKFbXbozhg2Jx",
  "key17": "2rN2hzirCErxzDeFiq7ms5mjQjTh9LZcejsDBUU8GxAWPX6nbQzko4ef3pw8ppGAdEGQfv7kGL4mu7g4TVpokVVb",
  "key18": "2tsqf481f3AVAQAJboknRCVPUu8tSSrGusQbLtXqZH1VbXonZv4qeKMA5irptn9igncWup6tkBUmqLAdn77QU2QS",
  "key19": "4RXzMpLhWQtso5CrpUaKdMi4v5hXuyCiLZgnSNrhAspUBMeXhjCwMGPciRjTtYyHyJtjGG1H87Ws8ADAJKt7Hz1V",
  "key20": "3bvoMoQACyBv9m7pRLnM8qVyDCjC5msXY5jgXNq6Wd1zPWXPfcMywvm71hUk95YysUQDC5gNgHcXJYd8jX9MaY96",
  "key21": "3SXGct39DSwgcR19N9dJNVWzdiAQDAdrmUhtqwZ34ks6MFEG6146TsjrTjwYHJkW8M9T5rSNsdHjm7V2KegK9JHK",
  "key22": "3EhkvZxB4x7fnWkP9qgrcK4s32ff3bQY1XNUVeqxTgUCPipnJWxMqKKSqGL7sNPjYHwjmMCWnhhnZzXoAzSA9gio",
  "key23": "2kbAFaVsNkRQ7R2724ns3eMLqdhCefRk8PBpkmkfP4GigtXHgWK5wLWqBADH3seGvbRTwdyefXVVuqqqBJUxnN7y",
  "key24": "5H3xjy7NhvqAy4cGaHx9kMAPsFUpVcbU8Vr1vryTGjWH5S6AQECLwUotTDkKiupvmPCi9YAUSXQcknuxcYxGi4uW"
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

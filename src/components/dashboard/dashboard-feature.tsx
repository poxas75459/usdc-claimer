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
    "5nX8smaB6ATw9GzDwd1d87HPZ538RYcby3G3e1fdHPqY51uJdcCdw9R1ye8MJTFgbPxTwenWEp54o2kefdxzcuB9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfW2fRGWcUbPn5LSXquQBPE4qXEBvp64A2PANDN8ucjZGPuMGwQ1YnYobDFDzZeuxdpsDQNBDHcnWcsnARzFQKW",
  "key1": "2Z3MZwDwWRKiyTc3LK6NZxnVhJtYBkRmKYfQmPgd6Zvws491EpiACsKJQHaw5xRqcDdjoDJpFTfWjpRYkK3qDiXz",
  "key2": "7mtyVdJqygvbaFYfpJei3dwzs9nzfUSCL9SNAchPvx7nt9tVu1bsF679jVkQnGVNCCpebw5Fr7JseC9vyhHdhLq",
  "key3": "4rG5egY9gxLooTUy25YANPo8GqfouKEVUd6F7ZuXqurUi3UKihWp8xK9XjE6A5WsPCspuMcQHTBgc8Q6LjMgHsK5",
  "key4": "3Dorg7FJxVdtMBbyVUzhvHMNPZsResgi9WKftGY9Y9HYFxsvM5EVLFLbpGma6qTMMVYgbWSb2PJq79HnecmhZiU",
  "key5": "3NbtyrpUNHFMtjCBojp19ifRaH5r4w7puBZWcY9YkaK2pEeBN3aZFfYwyTYUyygmVBgFNkmepua7UrVTz94XRXvv",
  "key6": "3uGTf9Q2zeDcUCKXr1oxFMF3EJDxsvwWpiSYugnJ8Xz834D5mvDU8QYHVVe1nByUfKH91GRnEnfQjYKLb9Q38t8k",
  "key7": "ET8dJwZzLG8v8QCwg6yDTEtSTe1VgDCqJrYN7gNWR5bQU94PidMEekG1LysRokBpPHj4gn3ScsWh3eyLp5MfjJj",
  "key8": "KVH3EMv1ejkTLSnG2b6xrW1YCwktcjXsT5PdVrmrMievcxXcf9PrXsJfoKhvbDGY1Mw8FykF3iAinbEx6yccwt3",
  "key9": "2uGfGnR2t3TacNGFBWvS8w2mBRrwq8eoBN9gWosZpngycbgySbBymrR5s6LYuJxDq8Eqp6w852Y4Srw9jm2aC6k5",
  "key10": "2h1dfaCuHnZD7CxZBfjbmdNwTPfFwH16vqHSBDwbexyv8ZZTDfZQLX1XbJHUy2WBPJ5wzVFrbJm2pyGQxauCgucn",
  "key11": "2yph85E33naksjc4krpCG57LCcZ5wLoWqvU8xK8Rwi16NGyeLhympEtsPvQnpYoJ4J54J2ozXnsfaaNf8P6WsmgM",
  "key12": "rUE1cWYBAmwnZSgq52cU6GptLsi75VASqwwa1JhXyYEfXnSdi8rjiDMaxWudFHGadMsKe7yDQAESo2VPbdZZwYy",
  "key13": "4ZsB6Bgfnh1FnxdEQ4yf6i3LToTPXLeQkcfrV69tSNBbnQ3MD3KvjPWDLM7tSjQg3bM3uc4BCEMDPwVtpAdX99mS",
  "key14": "3xzNmdbRjxXNxFAwtoPJ5DtkeTtHquREzYfudryEhYxFJzfS9hhABKR6Wevr6JNJNh56BdiQzd7BvRQz6M2fFhCF",
  "key15": "4sMH6czui4BfggVAzFGTZGPZDZAPwstbKu5MygzFyT2yB7ZQs7mAofkXBBnGE8xbsy6QhJFAvpqmJ4EycdJ2MdA",
  "key16": "284J7fbYrJQ5BAeeoYycw8HdhsG8NGpcKRiDvq8qR2pEWgfQznXfsWat6D2NaNs79CVyAHCRzE2abs9Ri6eVyEaR",
  "key17": "5JcKz5cpzsh6kU5wq9dxrWbKnjWMTpkA6YfZCBQ842Jj76hoga9qofkUq8LFK71RXBeKvbF45QnaUWQzELcLfTRA",
  "key18": "5ba2tQcLywh9AbzNNEDdHKneMRxekXvgBdHKdnAwGMgAJ8bnjQR5vPoGen5cr6MDh2HKTbB64aXk97G3GgfTXSSg",
  "key19": "PCB2Tv8ThaxiM8vKNjT3HaM86NMsz6ZxgWCeyDFtNaZxhEWMYX63GwwpSXxymWVBXxP9cPXCKE8LrUp3eVdbHe8",
  "key20": "3zVSYLBKHQseuKfrqZYFTmFbkJgspi5LAxxBsenpbi6KLtxfS1mBKQbAg3o5S3ckBSPyUU32b9XdEtQevbWdidaa",
  "key21": "4y21pgLuEPanc8zbUrtxQZtMrDEnMVMgXCCvvqE7Z6HFc9tF6Y3wexRmbVTZPmjoENa5YyqoBxjFaSocjpDMpN2c",
  "key22": "4CArEpUUaSjx23QUdj7EcGAiBpbDthTGxpj7PLUnHo5JoABt7BZZhZzyfKvMN53RcwRaYHpHHzLT3UmGttp1xxaA",
  "key23": "2MbwgXinw9v5KqN7QCKR8T2dHSn45ueeHnSgb8bRuv7Lrv4NewgAN5usMdG4HyVau6bZpQBsANBHeeVQLNwiWdyj",
  "key24": "4odMSnBiJxPzVYBuTQ8fbYHuQWiRBuUCU3An3DkbFYGdJSrdoqRFPcuM1nMftALv5G7mShNNgt16ZJN4fZmd2RH3",
  "key25": "EmpkJL6rB4Majsodnwz7f2i7okpt7LzbwYymYz3SCqRT7cQvMr4iJh8vD1RD5rVTStX3PsLVroCc5ZZDFjVGfKE",
  "key26": "gppqsnRcxbz8bFaUSMrxiqJxTeNYee9bY53uFnaLBuV2AZv85whG9TUeg6dhbhPSdDjB9DRdjN16L8QAN2qhxAi",
  "key27": "LSPVhptj1shsto3VakDSb1ygHw7NsfASvbAHDH428VoUZQj3tr9Lqmw1i4UPm3ykrcKU4f2HbX7D2Sde4NU5jN9",
  "key28": "eYpMDnhHZMozQa9X3eZhTNcpwyngNX6XWSk3U2tN4nuXvYmBdT8yrSHemEzUXCHBKbk7zehooHVoEViNvpSdZ5g"
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

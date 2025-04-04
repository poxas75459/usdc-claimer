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
    "5tnfcydon4AL7CLRLNeuWbHe89ruXoe3x3Hy8WPYeE5gDrCPSUz6Pj8Fi5dBCgG8yUoVXtF5FEd1waabikbPfYht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qY5kvK7DK52bxzCPjPCarZHCQjDoUKm9etF3xLKg9WfzEa94tsnaNsba8F673jkepXimptZYaLNCBzbza9oeyry",
  "key1": "559isxbZyTzXdEKtTT2bYbcYEdW4HKGZsoPkTEuMUeea9JpQyvbF8hX7188swmTsJfjs2xg8QX1mt2XDAfCPFxs2",
  "key2": "5ow49PHt9dAnvBpm688ocANJt8cUTGZ5TaJk1JxB5bxm93p68uzgkYn2W3AoSgqDZZ3fwueMDDe4eszkRWeSpyyT",
  "key3": "3m7WQFziVqxPdKzARVtBbNLSRzjWwYcQaQWPuyZhgwaR9pE6SNVbigCYJZLaviLLtbZjYnD8uW37u4S2RTwqihBi",
  "key4": "f3FMKQVoLPUG5tTmSw7j7j5bATEAj4EqyBoHgzbX2RcnnLou8fMLm7hYo8fKbRvJ6zceERE9bw9FCf9PwHjTqwf",
  "key5": "2WYcoDYwZ6s2g7JrZPRJG3gf1a67mLhNMVFvWSpW5Q4HPbkV7vWS8QeKgwg3HdXZ8ygu7bhGDjKUtCydj2R1qGWc",
  "key6": "4qTYTpwYPhbG8hvfSwKtAUhBfuYNWDfansbMHgCQ2p3Ca2gY8NwLvfuSDQoqvrw1KJDijEyz6NJYHVX7b8MN7F67",
  "key7": "3sRbQ42v9jm1xY47i1iMCtzcG5heUFYYWDRanaaKuz3wgiZW5vyGJoft543kvygUAe56XK9j6p1tKb3HdtDBARch",
  "key8": "oiDj92nfTaG46mz8WMA55qqs2h5zUMbjwh74CcCKnmsA6CeqBhBwmp4MSTgWMc9wPcAQ2nU9ir7gsKZbYuHo9qk",
  "key9": "4DWtxhASngHFhWmTnhCFvLk8mTMCi2CZDcDVkjZdcuZSeuiq2Xo1kPDnjCCoRHSZDgGjC4qN86hFYVTJhJfPcQ67",
  "key10": "4af6Ebbn6KPuritqeRtMmz9kDsXHcgRNXYmkoPfBVRZ8sw2RP7k7xyiz4xxRJJAy4hBHKEAMs7mA9qdqoCVL2nDg",
  "key11": "3eDXG3j7yD3N6F234GumCaZosDeYx3vyW7QQq6XYG3oJxyxL6cv4BynsCp54UVKcy2KfKXCEoSy68VMyEutGUS5a",
  "key12": "55pbeYyPj4tHhZRK9P5BmqsB1vQ7wncz2u44AAmHzPEwbnE9zn7rVZUfuFybYRaVETu3mxmSspzdL4pkKVso4Fdx",
  "key13": "mT3Roa63byCgC8YV74BpAtaz2XFtaAaF9846MdT28KU5m6b9pWL9XnhvAvmgABM1JdWjK3A6WtuF3rT5JknSuED",
  "key14": "3JPHMcwjC72ESz3hmiuPXJ8VxZWeavxmiGZDWNSHdwkVjjLtbzcUKgD2p2haXHq74d1tysHwYrZe2ze7HMaHxCRo",
  "key15": "3oTyBZZNmY9NWcgkxXEMqCpdGhVSQ7DeprePDb7vhhrAGSDkiqZ6BGLwm9MBwptsYcmZeJqsnwWmBtuB9sVEzoGM",
  "key16": "3Kb9jNcmAgUnBMHxms9SwrRzkoDoExc6ZZhavpH1NYEzQJpyxmC3f96qcn5H3xTfgN51mfU4zCCbJQhrsWUAi3qL",
  "key17": "gstirv91g5qPFjkgd33Mx1KUgdkZButq7aATquvNM3jX1srrnpfYsv99GJy2rmpAG91G7k4yKXxNfGBP1jhthoT",
  "key18": "EUSffAEWr96fSaCBokXWKrCwMK8NEzoA2Mue8WPBH1f17qmAtbzyXkHTVqbNj3YgDiBkXNhEJobw6q2XdnfEuvo",
  "key19": "26eWVTsenKARsZTfVMfzvcKeQUQ76B4FiHoNcRs47qsxss8yZDqDNFYYCZBggEd3VJzJjyhufqFeRAU4PMNsQdms",
  "key20": "4sdFKtJHA5k4RciXshVMqLcN8w9niwkvZoTreW4GfFAUGFLmiFyWCXCujEjLuSitBWg8D6VUGhZHyxKoLxggNL4v",
  "key21": "29Jqsbv7xhC358dDQLXyCtEXXkGn4pxwyLKaLbn9QzabDskkNF9ord7WJ1NTbvQtuk7nAcBczBDKeaTK9XKoBNdm",
  "key22": "KZFZr2o8KfhKovCc5rAeoYmib2NC3NHXX6j6XeUqHyEueLgKwVrr1aeAPRJpUdbvCUqoENENoSwJ36KEgcefyNU",
  "key23": "2ifZaZbZ1c24KsfnXPRuS4RZoEWepUo6CE5Fv5KAYqVduwQmqbKSYpYyRPzLBx8HcHe1h6VGNVL22cQ4tNwn4M7z",
  "key24": "2xbjnzYkUJpLMUjZrr8yEnK1ZSoT81avLHxdwCc2haViVhWEkFTzisJwMiYqJwPF4kRGpfRXU8Qxs338dgHeYvH4",
  "key25": "3uHP4W9osv3XMiByyARsjauyuJJ572cHS7gX8y7Bkj1ht1vxVXzsM7X137rgLU2wEpxJFxfwvEXMzoEyfTKjTVum",
  "key26": "3Wdv2ymqSKnQbmAhbRYjMdzhBgcKJpbcw3fZHuP6DukZMbgRefSByMPc1MkGDVfAW8g2A5MuY8v2zfVPZh2Vf41x"
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

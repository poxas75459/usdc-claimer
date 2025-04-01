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
    "42kpsjXErV2e46f8CcdUHJhEmNTfxGRZpD9yMAQS2AhuEWmco5BWcdmjSnwFv2txKQPx9wTC6h9SYHVsHeTHdzWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AqJQ5qf79DbG1WFma7sLaYkGKKC7BQnYGPESWj6XbHiLFAqXNgwLLUE4EDNWopAakTCGwHfyvW6tm3SWgcE5Pdd",
  "key1": "51RwBmRfFNa5pFL8nwuBgTdrmqMGxd3QHiBJFcCsRFKsqnGe9bVvF5eiH3ZjsK5g7bH81931aJ8nbgqB66nNZDB5",
  "key2": "3xt4mguU3Jz9cpZhjVPUrP1ynnx2r3CBcqS6Z2BXJbBVRKGburZXbhMZ4vBoMqLJg2tRSWUevUCD7aBQf3aSe7TV",
  "key3": "5iihf64zVxfAM9XerdWgHeb4EyKoQuay1jq1uig3aPLA63ke53jfEitEVGVVzuNoY9ErhRhfx2Wxr6wHY7RsYhuj",
  "key4": "5RP8FQJUY4P2VjtEyNTdRSCj6NbA4q8SBqknhdcFWZ64mgSojUZqV9XqWShH3jsnmQjoo1L4fc2FWVR4JskvCbri",
  "key5": "2suXRJH6u4LKWUAxK7xNVvM2HSMUJmiNqb8nDZ7pAxh15X18LYNoJGB47uHacu7NfhstoML2WtQqx5rDxmCzHy4z",
  "key6": "5kU98jpf7qCR7Rh3a555GuT4kYP7Q48Nc2AjwumnB4fMJuAafmgzXwbcUMK1wWz7iCyubQmh8kmLCjXrpEvepjBX",
  "key7": "5ZK9JEdzGJV4p3LguNHPUVNcbzThbLMn1g2GEekAxHANDAoMmvd3nkezVNNnm6GQk4maNBxyyFBj3NdSvw1thDb5",
  "key8": "2tvCqKjfafYfeqTUFWwoktJdYqKBzgUaZ43UZCDRUX4axJ8iBUr1qtBxot3KxqTumA9W2SmS4dnSVGZoKaoqqKFd",
  "key9": "uUxW9Z7UiU9yVuMTnx7tWEGaRQtXfKrxAoxpFZaeNK18wpzDtM6DwEr12RaLuW7upZ3qD6LJNjTCMGTB9Y5qtac",
  "key10": "9bBwVXWATtBBz1WjkkPhfbN6wEC1DD2KUFFs49vp5Vk9uhxsbbTo1aGi7ZUg88yadcJ6UMYYzkxem2Xpv3i4iXW",
  "key11": "4sbY7gerW9He4L58h3YD3sKVFzrD8FcukLHm4DLZ124HFvU64sZmh6z1yatPmZSvqexY6hPECZJDfF8K2UntnQvN",
  "key12": "5GHjScsimmjAeCzdwgBgpXafYAMvrxZgFex3TLk2uAUaZuk1vxs4k5VrWpFRXW5zFkYoxu7fJeAuagE9e5m5joGq",
  "key13": "4FgQcMipojtT7ZvpsJtoTBbgvczz3wKpAyPjWfJtrqRvJbWemARAQQMNW1ZpCjx7Tyc28w2tFiRXMnMi2jyyjFpC",
  "key14": "PTCn5VQJz6VThvzQRUtZLnB8Bnd8tfaxiPjaZ2nsrdYLaMtj1AqmebAgh9cWa9ea9e7QPiZDSTxyMxqrrkHxsjL",
  "key15": "stXarXisJ3fisNnUUDUVTfNtiKD1nYvDygGpTyHfzRhiVYLMp5jVXDZWNu1NWRm8G4sNMzpKJ6kiWAW6DBGQAHv",
  "key16": "4x7oQewRRyhc3iLiT46sdcnpAvPEuMWqQNGAgnx56ptUQ793frajrNnZKv6WBQkrpzny98z1dRFaPVjU9xoktVXa",
  "key17": "2BFsTcWA56UcVw2ZkNzWhibgs5RzoYUKQCTttZjBh6hwKtUGvAKe5xuXgkfYLWhu94P8N9MLpkaPwt1b6uBQoXbX",
  "key18": "4CEn7ZnyR62HvZ81ZxFXBnioNbGmdoQmLzRLSjAuxJ5dBfiiMtzhbgrBBYhHJsvfL2qmwtEaXwvvRxCNKKCzQ8Y2",
  "key19": "C61LRgAYvFZfsuTFFE7gfXUQA4qLtyDhewrNqvFykR4ifaSyrmJWUDYy3bYNGpav7hUvGiUvMGE5axqxCYQbGAV",
  "key20": "5qFN5HgVRq1WGomkkx4UqpdH4Pubw9UBQEFgjgEPu3KAdq6nhezcUZJFeWR95EhAUbLT7AzXf6Grrjh1iaJuYaVY",
  "key21": "5o5UZpFo4rXHSCZBgS2DpXMXjWhrMDb9aMixGBMBm88qmEsRCsQJTipQXR4UxGD4op4ZxCsJyMXws51ktP8XNCXY",
  "key22": "3aXxZdtkaDrF9o7DxPsWi9FAfXCL9qhCfkjifPhsuFb5USVpxnZa7APR8vTXDx79j1cTzem2LNtmbuLUcmSW5W5N",
  "key23": "3ADUgUu2Wxs8gPB5ojhjcLtkUrpCi2jhwrpF6qexygDV9cy2beHGRJU6ycd5dx8r2yNEmrYrvkFmDVscqDdZfmuj",
  "key24": "CmUS5j1cR3VLMWan965dJM4oauUK51T5Jx7CnQAGWbGBebsDvcKBfaHtijL9nQhupTrn9HdKAH6bgtdv1pHS8EG",
  "key25": "WfkdU1bsn8SGvN3CcqbZaJuZbAZUJgJWmTUysGUPw8dvVPF3beir9VDgUxvnn1RujUuTuGBugeKNZZoZFiV6ubn",
  "key26": "5bPeikNREYG8W6qJVmypXNE4hCPzAqNWH49hFhpEam5UDZM7fr7zuWMDTZ2GCdkwsufHbak8XdD9hZLe52i5Vi6r",
  "key27": "3euJtoQnezQHfTNhKZkk6kYxGsKvW8CGqchWtHxQyEnjHBPkwvgqr78FG46Dczr4y6B2S7Pkwg2sEQg2xXfH2RBn",
  "key28": "63cCDddqPT2EKhmTiiyLrEak33ZbNGtqkTFqy8RnoNsyjoyPBRC6ienJ4rgcZS6VKJcghJDkfyyXLHSMM7PpM2HK"
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

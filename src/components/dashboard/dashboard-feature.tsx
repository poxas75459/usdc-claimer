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
    "287zWdteAeFzjCnoZEAafrTFZPqdEgeA3ZwXajDxfiSdQHy5mDSoRdpVCL51UArfDJ9ozhAjYKgmCKb3Lja7gAUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U4C8bWQcKmK81rJpybWiBM8ixpuFpQFstoKXb4iBvdxARcuYsshqpb8RETgBDyQKn371cPp1Xea3cAX7mE5uaiC",
  "key1": "QwjcFQeX9B3kMAMTSfvx6fXviAEZqC7DVWR6vLWaLXoijEH7jhiVHo2WbZpZr1ERhb3kusJrRUKhFo7DFQNeRfh",
  "key2": "PFkWbECiXLtQR35uPFgPJxVNSk5QtC8Zh6ZynZpwQHEeWdebLxGpJHpFWGXtDXB6FRhSzjkm5R8gfUZrM7kKEsG",
  "key3": "TR5f1VZ9FAXA3GzmLibWiVoh4UGazpoQhD9Vhe9JcjTz6E5XHXGeE2FfqVQc3B1DKD8EyvH63UDPCHNSwJz3cRY",
  "key4": "2ZJgcZMoRNPT783rXo9Ssqzr9rnLqhyhDjDxGvh9WTJ8Mh9Esje1kT4JeKR9PwV9xwrLEWjYJv24HxP71MtAkAez",
  "key5": "4rhRa3SGJeG8rdmzmBGeFo1GX1zkp8n8zpztXJb7o566DXJ1aVrcVjF3Wf6arTvtNSUQyXriVx6r5jy8dnBgZgDG",
  "key6": "4HnwhowrW5ZPgxm77VN2qV4MqGuBMuwhS3RWAAfadubR9acUjzEN4rbx2wu7PpcRAHx74dsV8mtUdCmyJfKbMLzS",
  "key7": "5KD863sVUUzgnVBkdy2cAHQf7MYqgVWTPjPKVZEwo3opAUeVxqJMGAemcbhqBdkN6box264d2DLAqCRumsV2ouEJ",
  "key8": "tUsbVkEMFMYGcR22TpJhXR58MGgGHsNnezivNvdTnKFybjhSKsmYBN5TQovMeSw7StTP9WNozGGEj9znY3U181g",
  "key9": "5Vz6nPjaai5LxRqQjwGHwMXdryw13SfsAZuod21P9QYjzNUT1CevhCBADh1jt9UjALyuP6LgS7NaqodBFdZ84Rg4",
  "key10": "2Ks9hYtkt53YT7SmLXnBpSbe717KeXbJ5AE2uZ4SyLAxfqdgKjGqXKK4uALT3QPqEuopuAiuKA9fTJzz2h3r9PG1",
  "key11": "3cZjZSwu8uwy2SXpgwQTkcPfBaNwoT3g1Bzrgf5uZmsrmreq1oqGiU3oiJfneqPuoa3xFBKPsfvQ48kYVqU51yCx",
  "key12": "3FpAWCzmnVKS4sbCrHgV849yk1JTQTXHQHMo7zSP9kWQxcrzYVzK5ey19nB6k6U7LPQwcPLm9nj8kUCQX54RjdnM",
  "key13": "5gc68TK1sckf7pd4uvr24JD9iaCofmkpTHeM4JdN9FLfgjFRqJP3oaF6Zs1Z3PpBddAxDZzY4GtQ3Zz6Ano9Q7CZ",
  "key14": "24xybHzvBJpX2VF4wUpzaBZhu2ma1ksPoWSemxujz491MJNpp5SXh2LWVfXh1vNba2xbvtYUnmKnRAZQMo73kev5",
  "key15": "jRpSBJyUqzTMJc8Q8tC1nLgMpofWVspARPnemzpfikM1wpvqPjxTPjEyfnzLxYo2fNRA3uTDaDxCuSjYU583814",
  "key16": "2oSKcqpoVZ1EWkoXWKj6pbCvnpGpkKXPoeo8NJwEDzJj3QpPXJ3GH1pro9QDvxn5g3UAf4NVjMRpoPPYjmfBvC7m",
  "key17": "5qew5akXiyRy1Fm7tpdbuE8CkwVKqbW5tqztrqqPwQ7sdievRKcGGjNxrD1JR74Q4AEi2zRU6LA2RocAwVRfvf3r",
  "key18": "4XoJENuPgJjTMfLpA75LgLh3yyzEhcnce9hmcQNfTKwjYK7Ln4UcyV4CGo63AuNFNs2cSorPbenyoDhEYWtb9Uxx",
  "key19": "22DEoh7VfPmwQJ4AWBEhLEfdMXbpWxFyangmJoGnU4m4kZdq2jU812hsinh8DC4oEDe16ftmofaJa7eCdqCAHMuN",
  "key20": "bSbZkynaMfY79Wiqq7M2BCxaBqquanbY4NN82NAAj9Z4DNyQKB3UbD7m4JN3SPoAhKPbk8eDnJpEV3s4nLTCRgk",
  "key21": "2WwA1jN8rjTfjhRaeXHnzcShScmT48etjF619GZVGtUVW1fYi7M4LRmkakUsVyceHeziWU6wsqgkCKmxVeTneBwL",
  "key22": "LfWHbVGCdxDcRJw6GjuZXscyJx6xVmoYhZEVFehAbDJwCwQL9cS5zAEk3aLzX5Xadgse3TfAX5iV53bdz3TS6t2",
  "key23": "3j1GuyFGj7vVETe4qSHMpAqn3bRTgDnLRfe5S1VHtByut5NV7tcYknD6t8pxetpJntgoDws2kvnercAMZoTQa8xD",
  "key24": "2Bgb9Z7idqQPSPZCLNq6AcnW5AfNDyko5HQGsk1aMe8SzevPdBN47jpKBHcR7FVpcoXSG2UzXjdBnDrtLHVvCRnt",
  "key25": "4PXaSZF4Wd4vcNfpVMdBW7T854ivZNLuy9za6ZbMJCejo9xEEe71CoPkg1dYEtuW7uSasKQyavCvEUzhGbkYjDdD",
  "key26": "4fodfB77uAbS6FQkTQDPUjr7RiJatV4dUFyth1EpYwhdjmkKT8qxdf2dYLH1FwCsJbNAPDnitSbubye3STBu6nWD",
  "key27": "5VCGEqP89gP7XaACLUCzokRazCfdid6qd3m15LY9Rr4ebSYizbiywtEHLyqbmEcpuBgu5Z7enPV4bf7YV8J8rjXf"
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

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
    "2c1h3NixBv2SDxVfjckndDTGn2vydYH5GUAg3iesndAt3fi85fUceBR4BfaVVhcN4vDGdHm9a42cSdVf1H2Kg5fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t4X7SFj5Bcnu3Xq3RJKYJFD5i2uKXsafAYjonZs9AbfuVHwQAkz6wAp4krp4zZvgASzL7kdxNR1w6bAf6yNiJE8",
  "key1": "4r7VP8vfQYGFxCEk3ZcndNFJcfyyDgVyjpdjB8fn2VUL5hBxan3YiN1EYEVmA7e4CoR7h7eRQHaLQaXNegRBJBM9",
  "key2": "4Mk1eTMuCEmdh5oUCzsGMwVLiwDJdBdL2LNjAQDTUmTix8sjKFGsnxkWavLVkAcd7K6wGK2znCQZxsCF3EYa7p5T",
  "key3": "21KxyPHANRCWnP8wk8isYUkC6nTH5KdLMs4NMGCPQbbEruLWU3VTocNDSfyAjFhdUy5aSdc3b96PKAeRYsLY38yh",
  "key4": "3EGVNbnhxhZSKc3nJ1onrG5CaRMk1yEw26wAVyPKSddm5o1J5k7LPXRL1R9d4Av8hpXQ7FhYwNr6XWuyvdZ5KBJH",
  "key5": "4LQp86b3nE2Q8T69gcGKocC1q1baN56Tizx2oD2A6dpR2WAUJtcy9oRsD64Z45stTMfq2P5bddGuop4J6v3yjXjt",
  "key6": "2iE3HqY7addR5WdqeZqa6VQBsM3PMHQCP6KNHdP6hwtQnkyMmxDJcb2VeyWXkgv1xcqrDAeRBpm3jKsTfSG9EWFE",
  "key7": "46CzUckAocV4qsr4BdUc8a4D1699KWzBuHUeGJqo1V3sHKPsPieR5VMTMC4z7WxMeNuTM6DL43uoiXyBQVJXohHo",
  "key8": "3cFRKjQdusNKVhKfaCk43DFe8uYTqenDTFggUZCzyS5uYZ4A5HAzoVh5JZGnBbCdK3oyc3qQ11R5bbyWjNZWewF1",
  "key9": "2DpuSm3P6YXPVAh8mvda2yR4dykftm8mNDUC1aShktUdRTTHV66gkUD7atC2mSanKzcm576nA3UVLJZWga7TXmgJ",
  "key10": "2y9RN1djs1promMd4S4hvDXnoMzozhyiNk6oDPtHNJrPWg16momBdPL3yF8KmRdoLLQo5MitYoUF3xN6VnJxMyGx",
  "key11": "3D117LaaTHkbXB53vvWE9hWUoNTUgYGA4NeW5dCuADQp7EZd47H6HMu9e52tD4dYPXMgkgYTxZCpNByXj1Zqmw6p",
  "key12": "5oxXhkc35EY5pvbLoMGNFUFniEsnexv9WoZKeawc8beirqa8DTh8FQEe5kzbmFhYRVrFRphGJkyZYrxpRhzvAhC6",
  "key13": "5DHKneSAgiwvsT3D94u4sPXqSQxrigzrQmSYp6p2jFJ41kpN9Q6zMsCzuELbN57sjEH5t2BjLfv54RQ7KejfzSGU",
  "key14": "5vH7NnTxhhcb4k9mHGaRmspjsCtucCtj4XhzCshE6rvuQHprY3aWJ4gfZ5hWXs2xpWxDgnPaxiKVQFf2LfVLfT7B",
  "key15": "3p17isPFPpZ99HUasWLauTLgAWVRGVixib52TbPyTAzGwWFU8EaLT4675wDcQ4Ab8v1NA5d8mzDa2TSEcrn7opDg",
  "key16": "2JP2snKX9V5YwM6Z8GLgTCuGcb7GWHHaUMEhdJjmFyHwvjeZr1meEbmFbBxfGUxkFFjs7eoQH6RWsKh8rFZwEnay",
  "key17": "5RFWLNay5iPfG6thDawXtQ8i3U7ot27CXdAWLtb2nKg2jGbbNP21QTzgYfZSv4MLmyvvh2Bko5UFuizYpjXyRSJL",
  "key18": "41XRKNujNe6DUNvD2huRXkCh7uWynfcJo6MDscEjM99BLTob1rKniYYyaif8hbonEWhZGYHxxCUdTQnNhVUTNW7s",
  "key19": "2NqThUfPN51HArovVJGLdH8P6mav87iEZcKFu78GmaZWv23bpTgsmTHQepwpYyS8Nc8QLuDKED2hJwdkD3FY5LH9",
  "key20": "5ZL2b94CpAoL9EEgX5wwaiCbvqs4uT45iZ4BJcs373or1yQD2zCjkJLL5QX3RhVpBrEzreTLavE4Zz54aHBHnBx1",
  "key21": "BBX81Dr8YZKUNVCwaiEZSv6mSK7UawVV5Nm1FiUCm71ESgHoDsnSG4XsYmyJXP1APXZzZ7EkTGaDcZWnVajPuKd",
  "key22": "3PQQQsVr6HyL7php6GJbbZAK2se5HxnGRec7KjpwvPEEwojVCbUG9fjvJgvD2YteqLZurcsD8vnasS5J1Yq5V3oF",
  "key23": "nvYv2ZkC3yK1zhwW8bxjHvszynCBf8G72ed72hNgpixEJwodh3SLp1GkStQgGXEz4MCm4TGYeDqwfoiNeHnZ7Ev",
  "key24": "3qunN3k5fHijeUHXfEfYZKtM7zESkZdqGhzG27taYVPoEv5EPa1xJ6pDti4W6twd4qeVj4cNnYkcjRjaVoNthQAX",
  "key25": "2VGrfLBpLE5sMFGs7e3U1g6dLhMpVZRYdmkNDPLGt47uJ9kqnxrVTFkUKUJAyzEYjdaMG5KTmg3GoyS6ksKJVmeW",
  "key26": "3JWCb73Gda4gVSL6ZnRiBzGnvgoWpyt65uYSbkETVQ5eBiqupsEChexGE2EWLN7CDrNU59khp4t2gcMkNSvyTAMJ"
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

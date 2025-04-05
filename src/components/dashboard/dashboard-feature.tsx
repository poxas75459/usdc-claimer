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
    "cFtHTBhQ4hvkXNPfsrJEjyL6GF5PYPMhhF6mAKsfMgTyAkmn4UX1b44VpZbY9yXi8JQ6KLn5bfSGjRHfK9EzXXE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JGwaU4L2immUKy9xMPa5s62KQC6EhW5bf9hTNMQCup6PJMnQbSdyJcPkuY4TUn3Efu11LxPzhTuYtuXUaueZuuP",
  "key1": "2gYnMNz8GCRFFsZCtwMu1KhgGXGMJCy5oDV4YPx5Ztms7mXUk914iDNqDyv8r1N7KfrTdRWrCLuM3HWuMHyaLL98",
  "key2": "mepk1SoUgN6QzoXCY4GW6m7kgbTxRwhRiufXuLzPwgnpTYnje2WsNP2GKseDcbhS1RQsPutpiLmQ7KGFeYvnZWw",
  "key3": "3PjVwfqUV3C88RBqjGth4ZWQ9TYULZWAY2YRmzwHrVv3zVXgCZFEUSBdRmWdk7hKwDF39tyZpLhRigLJN7dC3Fp7",
  "key4": "3cwmqU3spP1MZjPZk8Xrysbz1t3ZhEgF28X5jzqtdSLbSTgUpJviBdZQU4rjzC7cQaxWy2MtJWxwFALdhmrHovHx",
  "key5": "54CZfsjaCsmzqK5EoAu4syTLQS6sRRoPAuKZxd8wWm8i97VHeVNEdypRSUDeJSkMgnfpb8H8iyXp4LAJ4ks8cpxv",
  "key6": "5ztT1PCSTFhDwCyDrKVLawWwn3fAxaNAxKUjUHxWL5EDu1vfPv8361qGYuGepVja8pXzSNvSHXcYgyjoDqP5Rnxt",
  "key7": "2oCicXYUE1shTFWwhGSm19PhZWQ9o7RH8APEmocDshbLGTMFZxyqqTwr4Av5qm7S39qVNuSDrM4k3chgeM7eC5H3",
  "key8": "2yKdNAhVB5UrkqyvYzg9TRz1GNQqSe8kabLFrAqZJHNokxFfKFjK2CctbDCFRaoEidwATTctCZ4QagKJU7hUCpH2",
  "key9": "5Tv5GtBtTJ8t7iMFqHkfh1F7upXU5Nf7pHmh3QJDDrZibbzZuFKbcbFTCkidGeeSB5d6ha48HcBn5iN8Hm2bd64n",
  "key10": "UMBt7bxjTvT8KLdxBqFeopFTLwLaAHydavUVTc7mxgUskyZP1gTCzJzExFzNGApDYh9QwnUWaU7UeQMdLbR9Me7",
  "key11": "59iq7uYbWQJZmSZZv3qMzhrbBzzBbJgyW6EBUHZKYbAYaduvPw5ftnTce5XGhAVMifcGg5kgE65dgFUxwdMcFRuh",
  "key12": "3m9yGZ15wkiLPHGya68AhJPZVvXDAHvuS2Zbu9tDXMrf2UeKpM38rmvsfFuRzaoqr5qb9sXz6PfSM2DjX6FoTDos",
  "key13": "4tsLQ6C1fv9m5MMwkQF9h2ML59t2Szor4j5fhXrtxttNoFdfCMs4YiYq2ufDvuKGxRWAnFqot1YsEjYXP8WBkt4K",
  "key14": "4Sk4F9DwiLpUVgUrgXHV8LHRSdB5ChqAgx7uq7jJNWw3vpm7eBXAjxaF2ye5Fux5MWEEo4Gv3i9VhitgYnxD4CQy",
  "key15": "41TJCnhDLPcweKhR9b5S5qKuipRYNhQEpMbSiRvzSf8mfbuirY9JpWukcK6Q8MmjWjyzQSxrav2ngLkYrApyEcHw",
  "key16": "21rWC27PR7yFwQ9CTUrYQv8izCL5gUGCmiq1tXboPi9Kq6ympXUzQtXjNRniBRAzLpfu4hjXZGm9D1FqA71Cbzfj",
  "key17": "gVhece7f7ukuKFYo8viivzwDiy8QUNmRGwGAQEiR7SYpTCKcMgzeXX6MK5VzxNNaY6Z2vu4TM4dzXn2qQDpCaM5",
  "key18": "2Xv88kMLEqVCZhTjJG2e77iKpWa6f549N6kmbcgv327L47VhWjDBXKdwJNq3of6LtdcYsx92ZbZpFZisJD9y1jtn",
  "key19": "9QeUpBxuDFz85XiVSeSjuj24LsyDa9XJkfWM41S2VpdoFpMKrUV2eMWY2XX4hgXNQKdBHGA1RFphmv9d262ygqu",
  "key20": "2aatGro4vVf6x3ZtnjUTQYhYd8o38wn1LMugqMeghEnvr5kFT4H1krLjNuLKbg2hJNYuT4FNT3TAWReAy9N1HLu8",
  "key21": "fuHtnS3S1ceWSFAtZPs34jsXjqWn79fRpx8nyv8872XmgzLTYKGekdU9ZBXn4FgwWLh4VKZ69J3cAiiwMLjBTJG",
  "key22": "4P5JUZoMuQ2E8roF2cRvPezo6HiHVuoWndKTjLCqafRxLeoAmmXa3jyCowpwkHeFfdoiCtUfh3xPwjrbodTA57N9",
  "key23": "CvAeh1EgYHzPmB3nznmZxAdZMfr2myd2awFAH6RR2HX3Xb3qYpPKFoHJP78Y4s4MjUD3ghJz3xAK1TAAchhB8jJ",
  "key24": "5t2aDiQW8ZnTY5ZdCy6YQutra5H3XN5ULsxdBVi7VreFg2D6jP4mxS1kpQiD9G6CmqY28bHfhZoT341Tvoydc5ch",
  "key25": "3sKMRt3VaMtAzo4YRTsgkceNwLcHpMtvaq2pkGCSzekP9w7GK8US1yqfp7obQtCUYfmpq35pUQfSky7mUYeh7EN6",
  "key26": "26GCAj3Gh9yvnwer1poqExmVwsnoSxEKFNFndtD4N972VZBMshDjbAurZDfJKpKZ1Zfg5qYNXCS4FJTTiHe3eQbc",
  "key27": "35CWNdguys6SS1bFun1LJnNBAGenhPFqkw6Wp9j5KdhTvZoGPaVcgwyDJvKTro9tdpvSZ1noKX749w565rBkSQ6t",
  "key28": "4PAyV9aeS17T6WgEotfxBTTk1A8EE5bD1DYdCkwLyzZVdBVyo97VcmmskG2GqGkK145LciQKtGtLXLB7yYxv7KLd"
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

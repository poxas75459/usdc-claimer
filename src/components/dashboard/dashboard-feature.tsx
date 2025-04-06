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
    "4P1SbTegXSZexMRdpXPyMTFLk9PC71TNggoYdrwjnFMFw82oCA5fQMsmsoGi2JiRixbk4H2cUra7ifZcAGJBW7u9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vCwgdAXbA2ipJHvWuvKjQWFZErqFZLAWfDbanNxwzttLoPe3QDtNkxNuhcScyLQWSwgZopvEy5Nj55EHLM6bUWE",
  "key1": "ySJoQjHCLDyvJBwo34zYshNfy4AUnaH4moVvw2LZiorvMDm5Kiv7X6dwaA1ojrvZvCKhsY7ghkywVkaadpQ9EX9",
  "key2": "4vPZxcuof7STVt9VGD8EPf2ygLGjAKzHc5wgjwAY4snAAf4LRYW9gB6Twp8cMuhwB7sBaGE96ERcu2NkWWZoAHR4",
  "key3": "38axjDZaXKbE5nsKNVJxFYcf9bihsdxhhjXBpkKF7Pz8jS3VL3XEoue8pQPPEJmPkp1JKjRbavGvqsWgs95fS2Dc",
  "key4": "2BALHsoRpt4QfTwaBNfwE8P7fXdUm2x2m5bznK2DMNwVnNJ1aeQGEjzFodoAmkM7tnxPTKifmE5MdHvh5qBxZo6g",
  "key5": "3gwnduXgnsdPPHN23JeppYvKf63YdJJVLEQqefnqS9Zh88s7Bib5xzJDtAP7ewFVJYxoMb7Rhosn4QcMZshwGuVR",
  "key6": "26cVoo8sn8K9UPTsEigb6L6UEd6VVqzmR2qQJRaHY2mASQsJemXwJ4a31yVnoL2Cgmen7nv9GSXpGWKoCsY7feoN",
  "key7": "2ELxGje4kTPEVEJkxCeAAR4ezG99Bqb5pCh2QEb4x3jZQALqC46CfMKUsDq7uNVdr8ntotSbq2BTtyUmRK8HZovV",
  "key8": "3BppKhMG2P7XxkyqnxQmEMnjK2bt5ggGkL7Q2ZrVttCf3C4gxVt6qVw1YHDXNTfvFXkEundc4t39VPwHhAAPZcia",
  "key9": "5T2rqdkYtJu58oFeCdzAZKDTkMCDpkccLGCXYwnxWzFSQeM9wL5d4AsyrYQ9PYhwCwpZWPXQ5sVQGKw8378F5gvd",
  "key10": "2QFeiztNYw5tsWw8vA3HNavs9C3CLAkrR2RRLP6PS2kaMppBed36RSRouF5fm9VevohK3kv5rKN7tfvmy1vZGbjR",
  "key11": "3rbhYAMGZFNrp6VCSZCFxMzsH3cPxER15h4TrsfU4wi7ttj4YwMekBgXyYKRZyFADv1sQ8Hb896RbQsxk21DRvxY",
  "key12": "5STKXar6qQxyjqCfroNZ2jVvAVuX9iAmF8Urda12NCxLPFDgEweMLFHDg39WHRyRguWNtD6u5HEvAj992GXdcZXw",
  "key13": "5pLZjYRHxG7WP74efCyi7djFYZbmx75f9JDLjSMRC4RZqsi83WqkNWosuqFev2Snra3gahu4hn7YSCruEt1insng",
  "key14": "2JjxC3mkQBvSUVvuchqVKqgBsHm6c9GaJAbWMBurGQxCT5GERb7ztwfF2251krCMrZeVvNR2fwpLWYKhh1rHc48z",
  "key15": "423NcdKh52tLhoAhBPphcipi4NrM8zbu7W831PNSyL4ytMVPkfnqWgvfgn3D2UU4kekjA2hvteKrara8siSKwjJw",
  "key16": "5HspGM4EeeAHNkhXY8EAYAxuEtKHi4N7GRM8S4vv9fCgdXTUFV5tiNEzArqZ1s9agjR5jm3CRhhMFYw7KAecapWP",
  "key17": "2hbEfP91SdVpQjWMa9kfNvNzE7AKaYHXpaYeh6RCgheMjiqLLxSte9rYFRusKombvSVGVebNKJKYcfMQnHL8BbXS",
  "key18": "5VDohM99AftTaKThGwCCADYNca9w2HHCQtusdUaQ8SGgSdgkQ7ErZr2NdHyuEXDGEFWj8VpBdUVk2Vk4aCThBEsu",
  "key19": "3y9XEZu6gbWB5cdeFfD8Y5LKe9A1Xv8JiCgs3eNbsyTMNEb3TeSa9XMcuRN1ZfHLKyaJEQjWUf4UUoxtovsJRB84",
  "key20": "3opCTqDowuRUsJ4SsyNKi2E6vgd9JXXVe8WkaCQPnFmpGpvxzTcGiTjP6Ke8oWhaF3FXVueMnA8B9RrjCWWwtpv5",
  "key21": "ZcmHsKBz7PkWZk7vMqCVndFvokMH6rH6vHxp3wpMsHq39aWWKWPcbQbx55To7ZuyyFvL7b5NmsFVmXajE3KkjL9",
  "key22": "5RrPXi91PoPBWC2H2YxM5aW666pw2q8NwdCdzYQDyoLDK9wJdheAqH2ViwDAEN2hSdTyXzB22RmhJrUjFr2wiyYR",
  "key23": "46L3rHGQfAe1AckTyp9GFoox6Vth7EKrLgYTM7TZeZQzgABR3wZQrWTrxXpb4Ak1RReStZXeQ9b1dEL994eMSdnm",
  "key24": "3wmy18h26dotVSn3FbVKV2ngs1VmN3UfBHAgcxJ69AGbtVmt93GtakNum1nwggPPG4ZG19HVPBVm6bQ5jUmEtNtp",
  "key25": "txygT3C9X8Y2vfBHHJ7hL12NKhCYGXZoXxGpsCVA5xfrkR78szh7ZTAjzVy7Cfze7T1RuVYdvMLdHK4CfkpMLTw",
  "key26": "3ubL8i4AUYye2xaHqkr9fYBvdAswFqgZNYEYpUMugCyCGXx9LrRPGcSuXTPHKnJ7iRU1quWFgYTxe3wKMWrsbyaD",
  "key27": "2bpXTc8JtpSjYAbs3HEWHavHpyAG23WAezM6Lbcak5Y5ddgSWZCstc34cfq7oJRWWDphLeh7rUrRyGud7yA5ZPWS"
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

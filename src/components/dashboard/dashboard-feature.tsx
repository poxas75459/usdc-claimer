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
    "4xuoRBx5ix2KXqk7Hk9BvGZP69WfmFvBDRk8ZUpFrwZMNJ8MnVmSEqqtbw5EH39P6CEVRgVxbp223gb4XyDUJCBc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cw2LBYZNapjX7TQyL9z8VWDCZtHb4kkaqLkcYMzdZmX3dSKxP61yoBp7Hh5X4yxEJeSAijR9PQm8E8nqnRmy4MP",
  "key1": "4AWLYDrpQpJXf45dkRGfPemRAQB7GNpNWbbjV8VJF3mFA2U6KbK7a3czy46xksBvRoT2qDFjwGQN8VzrBwCicV2F",
  "key2": "2Fgof8Gby6sjiDNzxjn5Atyq6cX3CcS6avwYUN4TTsQ5rpAJsPiVLhcdzb2HWPoFRBJr32QFgsMzpf9eansR6iEb",
  "key3": "5VrWmPRmP1bWmC2XiJYG8VhNb8ityhbS13KN6jh3rcvTze6f1r9FQMR21Z8owdbLFi16GWXNz7bbo5CuNVjBC7d1",
  "key4": "4mh8QyypVnwLnwDKsnAmZdAfrmsKnAPAdNg7NrNzXbEALtbczUc9Fv6PVuL4d7ofBiE8zERZAi6cPSQ4HSPsGrDR",
  "key5": "5Tb7fZ7GisRfWM5EPhYWdtmgZeadyxjzj8GmxE3UZ1TKWttxKeoWxXsTft2v7AVZiqQ6ebs25XaQsDPvioNJshVd",
  "key6": "53DfFgFwYQZGnUVEbXKMqLN3d3ZuYfJwWqLWitdqwBgxuuyEyzLFbSsY2bY45DXFpkuHr68xvYHfDGnUQ8zaEwrT",
  "key7": "56Hjj3y5FAFPHHbXYg9N14Tiyi6GxYLs3xBp1C88atPthS6GutYVpY8s3GWDSDMpYtPHPzjaHj3GGCoVSnttWjnw",
  "key8": "62R1yMMeJ3JGk8Nap4bRuZ9iVUCxnmDEDataoNdzfUp7E61q5R3aGjex1rY73aEbPKrNXKL8jJe6fF1N6fTJEutc",
  "key9": "3T8kZvmf6JgArqjUqcrMmJCM8YFHsA7W7ErqiLrgPYfzHZ5BwWmvHpMAgcWtGSUyxHfN8LGF6wSTj18zntiZYGjy",
  "key10": "5Ng1gCck2YdofAzR2Pi25MQvZK14Lb1LRTLTaCKX56aodPyMZEbTzuaSJB2iZMrRE6Tdwm1S8JqkXXFg59gijd3Y",
  "key11": "5z4hA83xf13uyBzfWHFnaemjWsajx9TzCkwEPcbsVTbqaAipjdZarHjFxj3mxJTeALD17cSRvwC7kD6bV5r4t88U",
  "key12": "57R3PezgAYMmC8f1w465WkeoRHBNk5WcoWqyTDHSYsCwUwewUQs4SWksUw7xzryAhdtwDJRdNvJjTVN2k8w4XXif",
  "key13": "3e6wtuciFjDnEK72GZDy8Hn9fmWDuKVGZJqatAFC44uEqNzZRpGyoL9GWzGQFcTwhZuvHTvznPoqMNMDYYdUxyFd",
  "key14": "3MiDHPadqmZscVRnSb8GMitHgvUwoDLqUBwjDDpuPfoZj9JHiSZ5a9h12B7s9rNkvc7SotHFwJcMqvTfFsXE4xsn",
  "key15": "29qhTY56NEnw2AiXX5Yq9Sa8XcqyUQPXLQkBDHR3vPy7hBHLQEdB3Ni6S7RLok9RHnCTsf74TSdRkCYpJZTAyYqo",
  "key16": "24GXSZcxwhztuTPQQct4z7j5TP1QB5sRf1PWXjD67zTzJbP5kZ1BrwVRm7FnWykchTMF5MqdfLipvPmUYB5BuqmF",
  "key17": "5YmNeLVjGxeqeGc2w5Frbf7PbFWKKChTMRWvLfZhBatnxAneCQnAdZGh5XGtuZ85EovbSk8Fw9UZrjPztLYK4SsG",
  "key18": "3r4yZ8eV87ZPLDhDnkni2w4c3DUyA88TZA7yWXrqLuXnPG6MJuZPaQoG1ShhwKScBVHYx4pPpCK9MoGhBzFFrq4f",
  "key19": "3FZg4xVJUfVrEocDbf3PdA3T72dTewsVN8gAjbLJSjktdDXp9FdZRd7vxJpfQAg7RRnREkGiJWHrx5vBhZqhR5em",
  "key20": "2GvRTf882PN4Gt644C9LiEixJCbGDE1H9gWekUtoxkkYntwvdCuAMNji5H7vMfqunj5BV3PEnkUWguwcyti8yUy5",
  "key21": "35Mu6VtZcogcpaYWAoBC9bR3uvVKcswDFFUgZJNizpQ8aYmjdCUMkA56Xg3kzjXHAbLrkSF4k1u58cfRVgRx7RLM",
  "key22": "42wqULMy7ovZ3muq8gYnBLZZcsDTQnHTKHVzcmu1GESURwcr5SMJ6exMWTpm6THmLmyMTgsekHyVta4T7ZpjWUtE",
  "key23": "2FHxtmy6FaHt6pkaJiUSfrJRzSqnXwujPVpgL44gL5zm1axmbp7Pc98wQJumadcpeZeTC2jKJQjHBGUF3oxRYRFw",
  "key24": "5J7S6c16R6n6GKy2EaDjFu27M6Wc2kn8BxfyVq3yjCLA7DjcnzMHDpWD98L7uY1z5DWnWeXj9z7enPGB1zktQ65m"
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

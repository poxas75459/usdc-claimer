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
    "j3C6idftJqeAXAXvPqjSAQesBNUNaMXU2aShn6UXgiZzPCWtVKR2PH579rPJBL5j2w5mMVAurL8haBRc6WcZPGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wGMX4mf3K4Fs5fyD2U7zpyA8eEwixgvuqUGKHxrLjpCcB9M8Cs4zrMXvJ8f63ePdXrpAUTazCkksorqjBhW8x4",
  "key1": "PGQwmCZVHLrVBxzjmaKJyXsqEC55bmetn4jgyMVaptjfuJPHKThmsAFMg9zQukRUN38VcdeBJRsRemKMAaErK72",
  "key2": "6488botTHMjWJTSygQq6ZF5bA3YpUc6tFBo6JwRmfhHFqE2dvPNwfWhAXqL3QVPpgdnDZwKNatnGy7DyfoTxAmTi",
  "key3": "VHQjdNUcNgN39DAMgQAjmPMCrJQ1RQ5XAv7iYCAMZrRJEsFZfGRtiWhdm2hGCoR16CycnjcgjZaoU4su8jn558n",
  "key4": "W5gSyBvXXbf3KxQrJLpjh4JgsbdEpxLLuEgbciTJAZp7qtNNeCw2XLh6n1hHe85d1NRhooSaQZMWc8bXCGBQ8Nd",
  "key5": "ZdNCd87iVm7xQGaoDwUQDB5wp4jUhcBTCb9mPavwapr8RSHEBRC67vhmLDGaCxneUZjUKfXYbeHK7bSQG3FV2Mi",
  "key6": "35nkeoWnJGMggQGtoRKGZKPTAt4Q46CQaPXywPNx894YLr9knzZD3JURtZR4oK1oBvssbYdX3pYVCDpCF3L55Yyv",
  "key7": "tYd7t1Dh9vbpnKqt9ovKTqEaDiLLt5Wr2SiV9QWsdqvHYhSMj6WfHpq8ayDWjrUvfRKH7DoEcBqnEd3bfVHvzBC",
  "key8": "58uUAvNLB4RKSjQ1ykoKrsetLnzTMJ5PmZW8BSt5h4EMv6rBDYnHSDdbgujs9LzMkG4prTi9rcf5iXMM5T4z8Cda",
  "key9": "4DCYnSUfHSDVtctw9JfP8MHgf23Db6EyVFX1wHftEVqC8Wx1Z34A3H3Y2xZJG2Yipwm9Xj3kKNX9E3NVtkFcy2rv",
  "key10": "2VQb7MQVA7vqiAdB2LaMLfrcAMZNmLfYPbMqGS3XBL11NuY3Debn9sSWKngsxTZKJUwvRJZixENJHfULFmhoZ4jU",
  "key11": "5tycDrMLHzoBsK9GLNESp5d6GFCNUG7BJ76eTctvaXBrHBGY5fULVAWng65VGVXC4b7BLJ3gf42ZVKZyPf4k36n7",
  "key12": "JuNbCuMHZNj6vFofExsWcbW86KZcyqpBaD9s5amySvMFnDFuHnmagD2brcuRJp2wmhTqcpfVM1aTuLcy8fViYkq",
  "key13": "4uuahhjY4hdLszq67PqzcGM1DPS7QU7yJw17fSb8ftGPZQRymYbMF2KoqXKM6vWjNMnWAb81VgiHjCks6mn9zzAh",
  "key14": "3hiNSm16BFNC3EpojkXjktw3USJZf3vFP9aLuUKp79kYBrsDApKsaBD1WXYW7Qag8Avov2Ft9GJvPQzMPSNvHFmb",
  "key15": "4oBwXG2RPcq2bwpQbm3ayUHvcpYeXWHRapjt8krsykUqDKFskUVSeoMYrojQtge976Cpo5hnypZ4HLXDucjTxJHX",
  "key16": "5YWfV9UQEpa2ZndsGizDZNjTYeZPtNKpYvouL3gcjaEJXF4NTY8WFN58QgpWWBA2vhcVq5yeNtVLzsLkk7TeEy65",
  "key17": "5YqGuh9mpjHhzYwMan6VjrLzM2oZ6HCMGMdJJCzFzciCzyfqmxZUW72i5MZNMZwYYkafovMZ4eDpkfhVU9LAhaCh",
  "key18": "61jCfga6AP1a5RnpN2yEMHx5EU1UPbfbJC2D5CZSk7eKTqLBR9AYV6N83xveHqtvBiyEoaaEaAZDgWuXRQLNM71W",
  "key19": "4jqFCH1b4naqRFyd5HXXMzQUw2rh7r66trLpPisRD8QjUfW6x8CKaKWrTR9BAVvXSRgSqN2XhixPPTYboHzPMLLU",
  "key20": "4rTHR8bFQpBQNXh2ZJzT2uWDyEpjXv1ubSrCGZKi2FZCNnBUw8XTLri6HdBqTXZvYLBj5EZ1xab7FzVHZUBuv8V8",
  "key21": "4F3kHFoXg6axGDF73vWjYfQiAbw4cbj4qDNfiHTBgYNbnT8ZBkCvsnYGCYAgoGKfqhSDrUU8neJeEacz5FkwpKeY",
  "key22": "3KjBwmWoAbsUWWV2B1DHUnHVW9Y97kMCjb7V494UrvwmLcpC8WhNrWAYVf6GjaaJJACLYdMtSpF3osfagXCef2xD",
  "key23": "2brYqpfmYYqW7ojmNdu1HJRcA2t15jAfnnxyyr1E3EvW67WpZLFsyPYiyade6dig4ApBE7NBCkQthgvaAwLgAUeW",
  "key24": "28ctDdL36PyhqpWzW1gGHGFkwjtqLKioFHmTFGKmCCfNE6bQG7Q9i6eHbKf5Z45qnK3wDtngh8hVCPnfyvjufAi2",
  "key25": "YqmXz9sn7asCa9FP9t8KoQ9MGBshbBgLnDNEdKPJUjiuj7j1uiRRweAXzxtmjps1xg9xv2CmByx4ezaiBWNEZdX",
  "key26": "ZRj52yMcuuZBiHhQ34dYTs3APR5tTvZm54KNFP6ea6P2xHYfK6MygB4owu2uwF5ftAfAz6jCy6UfNskwdWVptsg"
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

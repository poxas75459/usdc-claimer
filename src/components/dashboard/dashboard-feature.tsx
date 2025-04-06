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
    "3YnfDjEEQWUjrtLbGuTn9E24td4aFb5xGecdGMdKpokmJ32Tufy1fygsiBTvoAj4ft1eraKbVJSVE8MdRM3WNpo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9gobBSEVBoTtHKpiHoiHei5zYwBqEkxYmpoX33JenZFirxJcksUpzMHg7rWujGvp49vUKSeinj9pW13asE8SKS",
  "key1": "23n3zKp9pnvoytNGACLQ2XwB62a7dFozUwfZv3xptNHnRq3WgpBMvfWPLZuDBdjKfUwJ2Q3FBAhWRpoJNqWaCGGP",
  "key2": "4cx36azH4vowriT7jzkorsNAuwSWGHjApDh37fHHftxm76tbJXTqhBtkDDfgTPxBdKwsjyBd7zRUd7Dy4891G6Ua",
  "key3": "4mmVu7Kvt1DBeC3XDNfv3YXZqvHxM8Dqjg4Wq7n3NbG5jsGDyBoFpJeyfw5Mwgh62vK8GGhZ6BkJxJtgP58q8SC2",
  "key4": "27En7WugzojBoC3d5B2Cg1S8B3dR6fQMWa3SFBpXYhcV3AQbqMeC6SvLeHZRSp38jEE24X1jUN4Rq8vyQCG8FD1a",
  "key5": "2ZnP9Dz7bKzn7pc6Zm2MQM6seSMamqpPsit38wJUTs64YLEgqKwfDGHcnpRqodZbSHswTjHJpRb4guagpqqJbPV3",
  "key6": "272ERtNE4cmw3rSrEWwxgFxJ4reRhnz95tgJ6XsmPm7XRDqPBXDxseHtSvhsZF4uidRX6kUnobHuwoqyuJMDgHZx",
  "key7": "3FeuVjGDt2Ua7EvGsN2Bv37apNksZneBsGzB7ic8An6T2qwVaqiLTJmGLScx8zw2RmvohcuB4HkN9qDjRFpNvRnP",
  "key8": "5yzaE72iUS5mPPHNAjpgnCGQrdjzEpYxfj2ZFB73XHLtJFPb8gZ8U9E627fExKo4W6qiZCycErR9MEQfPtEAJUmj",
  "key9": "4sRgGTPFRPdahfW9EW9xkG35BYPhYczAZ2wCHpbDKzxUReLFUb5PbjXzD3swjXC68PFukDB2p1mf4PZLGcNJXsLE",
  "key10": "4FnDR8x1pL9YhF1xEJsCwvEh6gP7yWPRS1k9CW8Thi43bk4pork7AhqPcrqCzbgJMJMiydE31Ayr5a2wFW3m696e",
  "key11": "zZZvP3yMVAm2h5gTGyop2xuYjvxjBdeNY5EsM64b8NMm75ucDmggTtbBhcZgp2jPhMDpEUcTd5kn4J38BED76DX",
  "key12": "28jKipnsy3SXMwbnAP4NmQgVXwMAP3dPKLgJB5YofcFxqr4ZkP7uiGiW5w1GwY2S3u28Nf9LWaGT3y25gxnaAooA",
  "key13": "54zFdo36Td1rG8anNNW3ENwUkfg4ydAYPowoBsQqcTa6nb8HnJV9K341NcmAxDdYMWfkTKU3zYPJdvjkj88f75xT",
  "key14": "5n5qTMipWebfNqUe6tNfHp3AwZo84Rw39pWJgjBMCe3q3vYL65ap6SZnCuMLWom95DEbMR6DdGqmFH4abb4gtpnG",
  "key15": "2n54U3vzgvyc4Wfbn6Na2P1aUJYFcDyhxpLuXHUmmZWquopzYezAVPVEM3yR6voYgHQoVcmpJyw3yKRS4qpfDYpP",
  "key16": "5KSJFucwJiDpPLdmLT2WU7SK12gURKQXfzoY7aHjZzzWBqikmnqaFvooBAtoZ7NgateNCSVYSAebnJtb3VhpEwGw",
  "key17": "4rsnndVoABHZP4ZYZ3EBuTPEvd387t9K7ibHVVQuzjxyMdaK8jZaccCeCAiHiYpfxKmBwayhmk8Gfy3E5sLxbC7H",
  "key18": "2W7nDkHzbbiED8xA3WY1tt6QJ7nNSc2QNXpG7jZcWHaiUbT6ZXBFLeNposXKopAcssqNjM54NRRHTmifZSoeBD2M",
  "key19": "478BFkGFAUnSoDoYWA9PvGLxKX49JgMEg39U7ZJAGfA4RKyFjbiUFNkUQvYYpc8hnGHAwvdpSnK59Nb9Pgh3oq6d",
  "key20": "5eZMXVefQ6D274wWtowg5fNdYRFaHxogimdz66FfMot3yb9kfwhdKfBbTPBcniFXb8iUgXqsq77TNLixEKKPGzpG",
  "key21": "tjD1D1vVBCpkNQFBRH12oJWYhkCprmA5Y3jc3c4sq1H3C1TShpxhSYhxoGmbTse3cSfevvpUq7AbsxuLGNX87r4",
  "key22": "H9wHHMmnBeQcT4NkrQqKN3D5vB1jTQqchEa87ryR4aRsigkbXg4XiMog8RuKsNQkCKbDwj585LkLGX8c9AGC9WU",
  "key23": "3gwqU9ub8BAfn64ZSWp2zSqarVBMuKit5huyS3MjfWB7AYgGhJyqjDrbcgyFd2zvb2ZGyrdT1dNkSJCJgKmsrHWU",
  "key24": "2VdUHQmmfFQu98ZQ7SBncL7Rv8SgHKUbq4NXoDTJcDG3ojs6SQh7gysupvDKKjP8Z5XtWN9VSsRXWxWZ5kLZtgnr",
  "key25": "5G31MKVZRyz12VmwBfvYnWaVC6hyFs315S2tCK5ZQ65k4ceaPK7Yrsp75sXnhk7KRzRkkRembsz2o8ZkNCGNLN3V",
  "key26": "3Dj38iSe9z5EqZiSrg5pmiTcHuTzLrWUsqeKtCaTyprx7ioRy5FoDmb4YA9QhmZKSefbP9vDQbDD7T3JSdUUNbkA",
  "key27": "4S88JXfp9Nz9o9ANJVZ3yjDwuj6jWa7WXL4rmGY6jzSrtqdcyHvLw1K33gtcFJ1BHmfmuc5fjG5JKS4eJd8nqvmb",
  "key28": "38MrcYUHQvWou3ySZsXiSPxwvMTMWUXdSmMyUi1y6kDKwej6cjDbH38Kccyci3s1fotGNXCMY96bw85xm8DxgTGD",
  "key29": "ipMsHmTkEWDx9f3gzo7GVHP9xydQUFGmk5WUZ1RtTNT3s34ifVmFSNmtVqbfhvX9yvCuRGGJW1g7kBh1BfSJawV",
  "key30": "FkXFqEPsRUisiQnU8fBCV5Yog7yrQnR6r2jop3PGYKjYzzQnQGkCF65rzYJMGDLJ5SyqYC2uMf2DfzGm8kGWhVn",
  "key31": "ajtf8TZRhVRceAqtZphFHQPYnA94yUqngjoDRCbH3DTwgnprAGxEt5i9eMN1LbnovV9Z3YrR2w56eFYAo9kXAEQ",
  "key32": "4u1F4HDdWM84JCUCWMj6AjQ3ZZTgsEFj3LFKP9bhFKmTP9RZ7FaCnSwyJ1Cneg2e2V8wsMCuy5qz8Qpe3VCAXYeR"
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

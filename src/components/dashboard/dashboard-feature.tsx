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
    "2mZkJjCPzPRxt5vXemBHqTtDxYrAXsTBMiiu1y86GDh1en6yr6ydtWns2ErJgoNHF2TQv4QnamwFyBmaHKNgtzAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oSM9Jf5kc2EE9Vray4SGLLGzXt2AE1ctnAmfnWWGfNrf8quu8HkHPdFXG7vyCjatVYbyA7PT2VX43zFfd6BCyY3",
  "key1": "K1EYXESvgV87jTfVDxWUUNxdXrEkcvdBq1FYXUKiz1b85jp56DSWNHF5jEa3xaZMwYrZZuUFouPX58GXwtdhdfn",
  "key2": "2oQUkmwbTNePjfBDBztQ3CPMmQskG137FHB5USpGnfnkgXF5X5XmdmBApCckV2HS6SgWKZJSRgAe7fbUw8b64pbE",
  "key3": "44VPNCz8priRmVCdXxvHaM6MjMqU69tocTdzman7xkBrzcTBgnVCZDu6EKs9WbYxRR8DCTYDaJDkzwis1FzHVJdJ",
  "key4": "48JnA3YVPEgUjadQ341u41V7rtPeFNcGmpLrCKJjQwiUvfy8FWp3xjpAPqQAZ6bSvaauzBAymp5Bces389jU7Ktj",
  "key5": "5rD3FTXb7RpYRseoptBLreXQBHNUL34TieaTVQKsaWen4X5j7o4DCmxi1hH6vU2bdXrCMb6TU89twL31PA9UsHCA",
  "key6": "tt6rD6oJRJEmQVe7QhL6f6ufW5bZUcAgwmojH47Ncr2PBjhJRu4yDqT7UCnrnYshFuK7tNbBHHBmxN5JuQ5TyaE",
  "key7": "5aph2nbZTCWkYMjtzXdax7dzTyFW3mZU6zYn1u5mRY5D7tqTCbPPMv1gJ3NpfGS4RGevBCrDSWaWTYa3rdqvFLEo",
  "key8": "3z6RwjDBwn47N5Hf8AQSuZJ6TRRszyibi1LcKZbPwE2hddCeEe3vxFJnkLKbwrjEoTp2QSEuXkPasESJZMHCqk1e",
  "key9": "nV2RrT7v9E9ovRcaKBaBEQChMRmCPw1VXQaKCtFxCZBesbfgWUJZaH8eHyVeaHPvSX8uayrTzDGysa7NeZVAUKH",
  "key10": "41uoXJbod8GNKiYFVAxTE7h284v8Jej5TQkG9jbV6ycVVfTMR36orx1DtFhRYrAX174hJbrXv7dFQEikYBTMppuP",
  "key11": "jtk8sJBRpd3N3zLQR7AAs3pE9tAWcD6S6d9gEZ9exaJU54uYNkNeYxUYbDaodbsAXRDk6fZWDkKqNotEhxHwUR5",
  "key12": "2RiysF3upFex7CbRGfa5gPczoWmpeHinFLh5XUTzjjT6FR2pExfCpcvkNCZibMtMDcqpz9JtoHUu7FvpNNAW2HyR",
  "key13": "Nh48epMt9DqAY8kjL7B898ZiAEESdmcSwbZwVAwbziwcQ3V6Pi8QerJZHDs1vNvmuZaEXWjQbTXJFvhpLSATemn",
  "key14": "46PyNi13UHfpuXez2S5WpmEphxCfwfNWSFiUwq1qHyUV1G7Q363eRAckTAZda7dt7eQnBYAZd7KFsCAafVTBur8n",
  "key15": "4RLAP62iV48scmyDBXer9GEU5U4nahmGPaYkRTS88ShZ9Xxzgv8bVkoK7fhqZ9p79Gy3rmrWswBNteWvhHZCAf3c",
  "key16": "GRPggtMhBpGPMKUecqZU4tfxyfiUbaSYoevBbiXQSnoyr8J19ty8oFaHJo3D7FVFqhP9KPtWtVc6tt1rJzcV4dB",
  "key17": "4J3fHnBZe8wh3r1yxJZXgJvNNyQkT4pqnSh2kSXP3sAcLXu6UiR38QsxLTRuDU7DVFDuzMtEjYVKxAatRbdg54Nv",
  "key18": "4uNZQ7wpGwyu1W3TWgeuuz3E7DWiEshAimoCncCD9RA539SYenjU75eGcJs9gJ9zAspKwM83Vb5cWf1csMPmaN4c",
  "key19": "3Yemp8Fn5ZzF7tR4NxEQhg7CaRuZKS6vyPSVcBqVVk3bV8nmP7M6WSU58am8mkvGKyVA5d1tchRfKmcihWXzjp64",
  "key20": "5rs8SgpBMpnLt5UGLw8N3h6KPx17CP2x6riCNuA28A81Twm2jggymjQ4653Forj6wruvHvNRosY7LVXyM9f5MhVo",
  "key21": "2gUDbTNAKTMjxqqEsqPefqgBqFcbdzEh5F2ZLEPr9iy52YJgmFDXQAC5vjspZdWMvvBW1HMq3baHHvScZHPoZPVv",
  "key22": "27QUDorga2he2tNAx1hpn5PJHuC2wUYTAHLqoagLLme5EXCe2JwXsdyV2NR3EU1ooWmUhe33XYqcpT6nEoU4oZ9a",
  "key23": "3Qdbhu5iA2r1ZPdipPzcAD74BKQwbFQbN6bjd3WfsMH2Lueh6h94uBvf8Yn5NagvPrvy7q5KjGVoxn4EH4169TzX",
  "key24": "5vkErAKKdSYD56P4KLPZypVBxPeKRyi2NY7xQ2rQWYYfyCuyKSYPqzM43iYMu9HBjYcaZ3kyb3LmseJH2oigMNYM",
  "key25": "5vouGSGdZsvrosa8RKaRxRzw3faN71ETQ7GiHf7TfarHA2gP16NS8GHi3PUgC17mDksAqpp6FKzDAigSxnANVMUG",
  "key26": "3CKh1MbJtBiPzmu6hTyw6M5pfxu8emh2iEMWqzBrdDkfT5HuZnL1dff6D7vQ3LUC98EkD1wf3ZTNii5xhgSbRP4C"
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

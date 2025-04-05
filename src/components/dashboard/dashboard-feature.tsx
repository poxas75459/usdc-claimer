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
    "52qMs5NUPAeAPAABWw6EZj3NcgeAm13KjPjP5ywJ8L2yfMaknB8iYYtgckHWnxcjBH8b4KKHRieSiLjo8pqwjMY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFGhDS3B35hegw3Puo7rXppRi3Ewh1LVARgdpFaLY3EZpfqsZjtepsMSc64qqAwnWuS2JWomLSqXQHQavVpZ7jt",
  "key1": "3uYShHRAXunnFpjtCPDJhWB6mjeiHX2dnJNd1hg83BVoR84TqszUBa36R8sYPNdb6tRXApSNxPuyMsvKqWJERM8T",
  "key2": "4pdreogTRkYGqDaYuH1MNJB8Rhcaz9z8gQs4YHNZof1JRqdHWQhd4dkRYGjHoP3e34zfHgR51eQiCp5CRCYWpysB",
  "key3": "5JjXBeTS2Kf4cyAoUcmaE2bwjrgYJdUiaP8j2bf9LPJZ6JcsrDZD95wiCV3yUV7dr8aKvJVfSZv37h7nx894mFTa",
  "key4": "54pAZqtzqzqwRUMyoAf2vg9L5rjR6c5xWstkw6XbGr9AGEzW4JNMMjDDsLx1coK3kpGUgbxdSvQjxLDCH7LJayXa",
  "key5": "p5fWtstNfL2Yn6Mx6aH7jKqMHaF389PKbpdvJfTGDAtJkVGoUGQu8MeUEG9ewHhTLhRbp2W24AX1jZxSqXEYZZ6",
  "key6": "2bxS1p8bnWvH2cwKDvBhrWbjy1JZ1NFHutNekB2ZLBynj7Ld1jqaTB6jpYVfQVrGYDu2ktp5uvdeT4LALvKstiKt",
  "key7": "5ByR6RBSPFZD33k8HVMwo1VzRb6cQuNSsMi4ZoV7MSnSZNebdffmNMjiYjNUsgADEgRMX3ZRxLf73a5feWAT7akf",
  "key8": "4Kp9JpjTZ5zYtu2crFq5RZBf74itqHUfLje2Zx3j1vuBKdKqX9MRc2TSCNmusaasCbN2mXEJ7yDf6yMK1avx4grY",
  "key9": "3FjG45h9Lo55ErC6V5n33PauncSC9TRAwBWtGhRX5YtgdvRvR8sortSkKBxu6dCHF2ge1GeS2uwPPwXi684rDTF6",
  "key10": "56tJTYF3WbRa95zN881Ys2cWEsqKX6PLZNVzhyEWcFrpzW7nV3yuYwH8hoeN8XfTTak11Kr2WX4Zk39d1bYF4oci",
  "key11": "3i7RomaVy9ccgWBRcyZVZpF2Cbvp4KT1nko13sKc9gbTyFT8EyJHveWbCbt7TLX7ePLnrjKL5C7buRMkRoTu2fWa",
  "key12": "bUyrivd3utR5whhSSGrVM3RSs9VLAN37ukvSEw5h5eqKBXuwjEGKcxXKNysBPs6rnKHCkpTfV9FjoGZLDwqHSsY",
  "key13": "2hRw1nrChcfA7BzNTc8tSA5NcYqQgwEeJCb23FeVr23pDxvTutbfFMCbAfGjSvpYUug46xpHEScdZ71qXq3CTiSS",
  "key14": "2sgsUpCVCnoK566rBaSZ6nAN81MJ6gHK1X62CyFt5cjRVmRmpfetSzrMdaPCbFpmcg33DVk8Vm8mod3Seu6qWmBU",
  "key15": "2DYeHbSqzU1cLPLRywDi4iztHo9LydKGuijK6UZTV3iZvfGCVkoH3zeXuVMtQejtSBb6sVJhBVFGYqbaqe6Gny8W",
  "key16": "3rHSVRiWApjzxYgn6x4fB3bw2EqeP4xUdcqPL3c7RPKf72QU4BkbH4Ujq6xPKWiYHkMXiCLaGqKzsioyMfTpr7H5",
  "key17": "2bDkDu4cCzoZPrqfpq7X4waqEAFvRwjRyfZmiwaPNsyEUTPWynHiHGb9rSQyXPyPcBWbyMGsxCRENX5dK3UGY4Fq",
  "key18": "3ZpWGLVQqNmjwPNJVv6oVUMkdWrLwmJbbxvTY7gnGkN4pT8fe9TYmy7voPeeeKLQriCaP12HpWS2SX3KuHWSuJon",
  "key19": "4jr8byXNHtx5sK3To2QRWHRPo57DeKoK1gyJdjGLrn6EL3ZkSjk9qJF8EKBztwBdv7Fk8XefMxA8Teckx7xAEZSa",
  "key20": "3CsdByNfkoagxhXTdT7rrTLi5Jw7G2kq7UKpTFg16vSFver9jpjqsPaxftQtkovN8Jx3c1Wvbr8D6CKKpg7rW2wc",
  "key21": "2URJ6vBm2Di44ZebZqZLxCFsWWHpBm3cXHQZXjftLbSxrTe8pTXidHuoauViagX9WA7fGba57YGVYFnbBeQ926QN",
  "key22": "45qM1T6DnZSuZUk6jgX94gt5Vcq5x37A49wSj7mq9Q5EVFZBLy8Yj7ppDayMQ9vGKNswBTvD2Yp8nCCarwnexiFh",
  "key23": "4BNh5ExcQcY7RAQ8aVvMgmD9vrzjA6VFMUmp2CJvgh4h3kgcttLM3Ctm1xntD5HyH4yE3UvM5WmtvA6G1SSa3XgY",
  "key24": "rkwWBf23sPXUBMNQMACN2PZ8cqQ5T3kxQQMAVSerxp3mkwXTCetAdhQMj957No9VgA6aqnfVGxfwQqEutnAJtVh",
  "key25": "bhMt2H4WfUE11FHscEDDFpiTXknJscmym86fzxf1Nnxt3yCmskZoFnwMfpggoUE2zisbfuPEk7aWi74oRTUd82G",
  "key26": "5CrzehTVrxZ9cWm3W3oBFzwfNsJA9D1B2YD66mTqhAng1jX17whrSM1pHDRo1b5DVNcvrh8QnrZZW1tD5nWvmfvA",
  "key27": "5wAtoj8iiWzhXA3QzkD14QL7wn6vZRooyKZNmyuvg9FKeUpH565YHv5sAbZSNPYrHspoTDqMh5ZJf55xTh5vb3ZS",
  "key28": "3r9peyCMAfCFhPXBKbRbJzjtBE2tjUAJqU7uMx2dfjJWUDdUoYjnJDsQHdZ9QzakefCai4dhcyD2aM2P8c6bbEKY",
  "key29": "5QdAbVsAMVsMCnp3bZJBB7eNCywrMCLbN1YRYSKydN78WqkQQzNmjYmM75R9U8LVKhKYRNQeKgdBnD5g7JCiPht7",
  "key30": "5ecJruYC5E7JxEK56NiT5Q45YeXzVJwfydUWAs9cWhnN2nb2CyyA1J1zigsh45inwkqggSHJzN9GEz9GoEe7Rn16"
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

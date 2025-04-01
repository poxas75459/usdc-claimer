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
    "4TfU6bAnF6J9cw7bD5BA6UxEMJdpBo63uC25w1jVtbJt6AQKgfk1C1YMYKBqvxizWpciQvknTo44WK2NRVgb9upn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAiT9ZUeWzwxUTev7rpKbnExN8dWobKZuhwPPC8fBqR3gi5NoANDH3quvVp7Y8co6BixGeqmcNiyWoogpMk8qiZ",
  "key1": "3A6fPqjBb6BabUCqpGTKb3v8rYoeuZo37ozyJVCrdxmFmaH5GGpXaVkqZkeLLUCpr2byXuFgYkvEzykLDgFogXi6",
  "key2": "MJtkZS2bPwpPComMvdrU2AkuBDytQUELvDbepKqs45r4pyyFt4RYNaFNvhTauv2nNRuhYTJ4JDc5NrwfgZQ3hEX",
  "key3": "4PfjmEJpLGshAsrXQebduCTscLw8XRprnW5qVwroehppUJ2nvuGtTW8JPQRYaELtbS3rXvKUWYEykVCs7uosy8Rp",
  "key4": "3wqCpEgoLkHVo5s5YpKUTY6d8DAimzvHXshyZAxukD5Z3gyX7MF83V6DMu5sR95x2yz6LmkSoRSSk8RA9wZnEQ6x",
  "key5": "2jS6sLv6v1dPrV89Wga54Af3J72GJHPoN3HLUz7gJF8JJAyeVuJBQ6DbcXq4ePzu6hYoNogULe8UsssRqaQAXmgT",
  "key6": "SLpq9pkiTuozpTcM8jh4i2wvTQq1r8PZmqtDkFBAFPakRMj2QDbY36dZQKX18Kcys5HMUA6zq8Afi36Lk93iNpV",
  "key7": "2J3ZB5qJszSBxHCMCKYxN1CFXi6UbAjY5VRSTDbsFubqvWKzfq2yQFL2tggukYHqs51eTmt9DE7JSBAfAdW6qyMV",
  "key8": "4e9TCbsRPHSLcAugF7Yjcirwgq5F1NexSpUXrgjTCL9uV1g2Yzw1FkB8b7eAiCY2Uszp7tjDQRASeZcnf6hSjf8W",
  "key9": "3JCt37thMGxySZ613pLekPe6RTsascip5XVPSMofuMhXyQ75ouD83yCGtFXAtgzcbxDCxkEbncyooTCyySD1i8mD",
  "key10": "4YMa6vewomZyJmS8TSZCZe1nDGDUrAvGvgJKH7VU4mYVcdc3RkLGw1GiGBeUusYKZCLC7nzKKdWkvmw3Pd9xCuvq",
  "key11": "3kaxXmb7tN6uC8xZkFNTW1uMwoAPN8788s8GbK51g5tg4kbkADBErmq2u9Z84DxYdH3TGbMTCQYW3Bvt5Wy9WfTV",
  "key12": "65k16BVhFyEFbeDreicRTvK457RSTNGcEP7J4APgX4XsUmApuh7kNPvvWm75XZjLHrNcXo6ACSmzKCS6nHtJiBHG",
  "key13": "5VBHn4WcYJ19QUZ3c736cAHbT7ppvDDKbFGjkecNskaMtN1EXCoopz2toQr2VR9aU5uPFUJWsK4ksXKUFuZeL4j9",
  "key14": "6qEyU4BRDtz9wTmgzmLCPLS36hXSzqFssLP52esL2iKb3JXpuDNZMAn57dvsfnB99ixfM4jS6CrtVFtJBbMM18Y",
  "key15": "XLTmV5tTGdV22AFo99174vBQunwJx9Lius5TYcuQrePoV27Fy5E84zxq9PsiTeQc9CQmKuvYoR98Mg2ZCnaxqcF",
  "key16": "4bjKwNht95AQZ9ehxkrbGqhw4M38wx16yVFtMn1R6nddjsz18iiQRMpYNdoh7ATZdh7QDE4rQ9U38CnMBaidhYSS",
  "key17": "2L1E3FYjdVY8hMHnyvNHMz2axrN9gaHFV8fJwBNGp1UHRmL76EQPKSd3C8yYikT2P4uRMPQv6Xav1H5YMaRFKEKz",
  "key18": "2GZKUuxe5vmvXPNF4sXuht1yDdYFx4568HtbdfYWtWeh6381y7jHm2gAVkkcFizZK56nMh9WbMVtsg6FaZhj8o8x",
  "key19": "4AbYQdYATWRmumTiw1LQgV9XY7fuNkvJrRckC1vVGtTRhdQGpdHWeC7iGD7YhxoLGBjb6s6fvX24nSDwniQLNwQo",
  "key20": "23pRkS61Sdksz6DxCXx6rEPyikvPAkvKqiVVHdqfwDgMbpn36mF5FhyuSjfHcr6johWVdbTKKSDNdxztrCD8YCnD",
  "key21": "3Xj8xiTKZggpee4P2KCyEh7oi3NP1QaW47vAU6bBXDdgjsogUcpYYqKeu86GpeSSFhazKgxsKnXmwzJfR9VkqLrF",
  "key22": "62WJLBVNkrDwb4UWaVRB6c1yRoKfwUwnzzNndiXWN9BuFUBaZVdrMkfa8Bb43JdYaggD6GHtjw3mHDgxLBU3rCnF",
  "key23": "2iGaW5KUovmVRZSkA1rZ9beP9sMC4bDSqfJtAwB9uz4Aq9zUarmzVYYrMRtiq3DKiQpVe3RxaPgWLX2nXSYMq2Bj",
  "key24": "3KNqk3MhCc5Cr9hvynoVXztn6bUjqq1nmFtTMZRzwYrEHQQqwNbgfXEaSVsgHW1GCo2hxAiPQsRPY9tuhTQYiQMX",
  "key25": "4LU9bXXtSgn983KgH7r2jnsB5sHsRxqq3zoPyhqWMJnUxuCbXsMnaD6ZbBBJnYiaau91bg9f7i3j866mmtopp1CH",
  "key26": "2LwU5EQ5Xnv8M3PmNpUVhCgYwv2ZVEhDHBfuDMAucGEFwtHG7Ufh1SWYngavTF3oB156vKU4uJo7dhbCPfx7gfWi",
  "key27": "5aLJ1z4BgqakEBwFbEfrYiynKo6G6p5uhaFQQDb3FGt7yVnm5wDMXDUg6TJXJycMUoeMhL7TgqkXvMKjKZecdTSG",
  "key28": "2nWRGQpjEMbtxUR5oUqa3sWGCXt9NCK9taHXixkxz8Ev5JX2J8zDBVafQZwUY2ZNKSEFKBPMm4ymGfYistjzUaTr",
  "key29": "yQ2hXd8yw679eDaxdvZP5caiNBUxBkMCaen6ZWR8CpQUvS9CRVx1d5uErNPP2Z6dRX1HtMTVXuicDjCpjAxuBPm",
  "key30": "fsdBs2Vj18CU73QCEoH3ap8gx9a263nfmTat89Wf51xYCQcVfsMnMAmG4xRRbK9uDpQoWTKuu4gXRusWnVNgyVs",
  "key31": "4vF83rWKZkB37YvHEZptzC9WFieAmw3DK4zYFTLYUG2zUH4o2M3ChmkUVw2gVciiSx4pwUDwFpaDuqWeW3q2hqn9",
  "key32": "Ar7izmxojWrTXK5uUQFJ58RVix7iTfDJaeiNjMLfEsbYejNnHmrwWzs8P1vses2DsZ3ttwdw3ekyRpVmbDgKc27"
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

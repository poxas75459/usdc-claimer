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
    "5vPhuDGevKQXvh3mViTNCZadxRDTFt3dgeTPp8n6uVwqLmGPEiGqBvxVXQ1rFEUthGWCaRx4p88DoQxjNKtG9aRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqJuA7Gj3VsTbtwW3eDxgY7F2QCdHrbUqNZPAQPRGnDavA3vmAAikxUMaXH7HJHZENXrtpMofHdyEyZNYtgxpwR",
  "key1": "2BwXFQ5TSCAnEtZodnabXH3p4mM3am6bCynHv1MMsrCpSWAuUmoyTok5ba6SLKjY2hdDQqUfBx2gKYwHKkjSokJY",
  "key2": "49E7Eq9xthruKXDaxoaj8D7JuCxWxMqsnm1JNnpySwCvajmMt2xALCPRkQ4F4URhB2nKXc4YhSy8J4azZFnanriK",
  "key3": "29dbx5vSZabMTP9ek5CZysWrgKhcze3GTkMmQsJCrPo93UqsnZWYZuBNBpcwhbvLpBh7LSGUMofMBSCt1J59t7TB",
  "key4": "4Uqhg9UhyHM6UUxeyFrdRoSAuCdAKZWHmAaRsD8qTLFFRVG9PHjQB323DvSFkb2CKKfMoR88kzmEN9uwHNBM8sEF",
  "key5": "4M49jYAY8BxJQxRC6ArmqwY85xXHJP5p2rRu642T9FUfYhmGPVPJCpPYU9ebmggqi4EiRrfJeW1wAkmPvyujqvEX",
  "key6": "66bbNJYZ8Dwr5ADAVPQ3oU5oUDpji4sFyQVooyYxhf2D1nWiHL3VHQAsB5VS3kGcVQQ11GGt1UMTej6uSzcLHnvs",
  "key7": "5S3r8UG5T5mgm4zx6k95KbNRcwxcDynoFn945SWr6fzmVcwq7hA3R4v1qVBGmNjp1LbPCKpBeigYv1fB6aWh46bi",
  "key8": "4sCjhoLNmSKS3isgrTLWC7A86KNQaNvE2RFF3dfcqgXGfUxoadcZdzNeE2v24WfSSme5beP4y1MjyzA9zecUuT1t",
  "key9": "35mUk1ZcxpJ5gKjgC7obxFVpeKMwZ1N1MamP83328coNKHiuU3DyWqfar6NmexRg1ZtrPKhpJCtbDGxaRbQ7d8Vc",
  "key10": "ukuLfSyJoLdHfauS7LETjHzvYRj3izLpdQDm8cyrQbdcRvpoXMDPd9Ms9qDiE3vHjmXFw7CzKVtN9eQandSPrnz",
  "key11": "yGsoggxst29xABfng11mftdU3T99e6qiH5wVrzAkfD6SXWE9oWoKTbJRYCPxiGZtETGc4wuEkBogpJFMsAzF3iQ",
  "key12": "3QSDhVdT99Lyak9c7MaGHnjqvebyGkPUEwTpDZmWaLkbNVuW8AeZQb49nGmKQoCFAnqWidGhetaaNCH24cxW7XXu",
  "key13": "hJwYRUPA5JuLz7hxJFz1Uy3rWXqueKijUxxrFCZ5pWDpzfUSHiRSwc5Z8zHGAEyMZ2MZDueFLomVBYhZeDGSX3V",
  "key14": "5YCz7GDzgLe7RYBW1q7g7KReFCS6E1zzQU4vTja1uqSdR17dEP84kRbECuBx613UWo9deHLnrNKjaXCfHkzEwHV",
  "key15": "Ud4Ut1g8h7siW5C6vj9d267xNU6YhkNS5kkJCC7WuFLt7sgGWUABVmdLgMSMRvSXRfbMyGsvRjpqSEDXKUgcQT3",
  "key16": "qGD8ewNxJ4RYzhJ7xqyy5LMZskr7udwNggz2HEo7UsQ2CTBjhk62sUH6VkdzLUpMbLNaXBQeGaq2tqN3y2yquYh",
  "key17": "2wG5nVLL8Yc6LR8jWkCQnVQ3ibY8YnhyuHkZyDLyiBXCaLdTNz13FoK7eQe89qXwoyh1WtWjgrnFnvZM2itBg4LS",
  "key18": "3tFjJzV1kt9hj6enEByiZpS8BpSAk4XcFEVo7gzphf3tpdoT8qKRQ9K2GJrAQTQ3cD5efG815Jdj7fYuVjFiJSQm",
  "key19": "46jR2N5YkmVRGSb7c44B6PAnuiKJFtwR9cZFrLCMb8zVz6zw6qhyXGY3kgCwZQay46tBRNmKy1kLXucrA9YPk9cT",
  "key20": "3pu7Kc93jwBGtLehPfSyouwrh5ZNm8UJwdJBcDsQ6gD9ZBByioAhHF2uAeJZGbz7buVLCsrQ2kwS5YiWo9DjcYmi",
  "key21": "2HcEpKkrwhyBzFvoZDMH9Ftsn56uA5thQsn41J2rUg5CeDjRaiHzn7Bv21oz9L5zLXDvy71xBucAuo58tVtXtMaH",
  "key22": "5mXY7N2NcQ7ufjZoo43qbsf5cnPJbWPyoFJSngaa4dQs15QPcxXLhdR7BjTu2ZYwhnSQrEjnuq3i5n5giPeA9HvX",
  "key23": "3xtWFL3aHW8vjXjoiHoXYn4pgxxEx4We5Yp8eGEyqg818eJ5rGmKxxBbr9pds27CcQbrUM2dKos9Z2VpcNZmLZe5",
  "key24": "39bSk4hnh94naH4TsD4pU6S4bn8VFVEfg8fGm7YDyorpP9jX7cf5NJ3Yq8wCHqYt3jCx1oMkLv3Q3WjGZZU8QmMs",
  "key25": "2Ct22etczRhVqF9uyRLW75aqSw4teVUHZ9peutU1En7CZBZ4ACvLKCDGBJcrXzSJp37M4ugjziqNcTUBKvJa7X1V",
  "key26": "47edBEyfiPr3qDejbPuV8BuSYS1Fq8Pf3YDaMnFupMMe2vnESuRLSfibfrtjsuKNFURexdghTddG89C5jAhQ1eZw",
  "key27": "3MT8sDaueLbsK8L95mYQiEpXh3dMcCwZ64xBqD4ThDyziMikGwS4NNNMrCZK1wiXAiCmAymW4Cd5a4WumzZ7ZNs",
  "key28": "iNxUgxkpM1pFM13XULxNLYBPAusaLrp2XeUyrAgbUiB7GX5LNq3LrTSKDtsJpvipN6dpLVRkmRY4a5UgAV9SEwn",
  "key29": "2WWhqx6UDZfnjscdujjt96wxNxiBEQK8D8Pkxa4SXuWBHBUjAaBo5uANyrgZT8XAvwGapafWmExcTN5CacUhqyXb",
  "key30": "5Vm35LT3av3vHuiuYkqzW4QK2hNx2UAxaJwRGGYRsSwJTNkVP1H8rXZfrxtafLFFqBFoqQjFmjdHWKGLcQK5SKA6",
  "key31": "2jX1UpRUP5HKfab5SDQcTbxeeQgaEs8kmT3UWw2Xvx51f5TnVQ6t9TyHnxguaUxYPuWZeVpLWmyhYEGPuLDPSGDn",
  "key32": "52amhhppwdnDnVdD7MERrC1WL4xGRbSDqKyVNHTYmsvMr7S71ZGUNbtgsPR3BMgycEe2Ne4JnwanoiBzmERnA6zh"
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

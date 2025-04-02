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
    "2wjEHiJwkdeq4zBoXZJSPc8ucaMMK7rWX5hvFusJyHMWywqf2J1oJaZtLHMt8BxRgsy4zLQF6wVLCXXDPeJgkYDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AZbw3FKUJGfQqYdTJAUKaEvXxsz64vZARxUXAh7eTRTwqRP1ruR5za3NEcRSjcaXKj5QKL4aFSb2aKp7hoxAnQR",
  "key1": "5tk68CtanWjidk7sbesF9VUedAZwwAe1wWUnEXexH2kR2wGvjyM18gWCTCFoXYPNMHCeDDSMQkJqk2RMxKGJbVWc",
  "key2": "3D5chcZbtbPeSWe2Wv8h5CHYPUD2tMU7Cb4atTYxCr7QWQFuHVfgBYWPM9nWnMoT1CoqXpDPT7unMpeHzgbN5iUz",
  "key3": "3S7hp3y8jFAje63X2gmSerPivqfpBHgsz4vsDHk5PusqpPKosBAJ6DDSXgCdwF9KVwGF1DxQuaKbU8tfSNGBtqSk",
  "key4": "2S7yb9LbHXYpXheeQeM79iGw1fLDdoxk4hkTg7LU4VcmjeY5uXkx3ywh6BGiDficit6Y7S9tRCpBden7AqbLvXF9",
  "key5": "4M1QEnUbAYyBHjyFZAqLsNmJ3oRoQd1GvngJcs88NWpArTcFTZwPZt7XxiA6R1t5Crffie5eCRwuyZVA4oxJu2dp",
  "key6": "5CSr625hXZYoxWtGKtUsHWHu7wkMTmmScdAvgERd3VfVAmcU7NTF7NYrzQjd5ywCXeysMSm6sEHY84faRfJCdZd8",
  "key7": "2ACNSc4TrZFCbRgcCiauL6nsfyRNWmBtm3EBA7awoL1pArmSmXkLNghjSzwkJmfsyzqY1LjYNtJ2fBssiNjH7sam",
  "key8": "5xD5FsqskzgEbiS7WwE6seMhqQp41bqUwuTFTKFEFpBZwwoJ2DvRF5nvGcBvBZGxiy8TU8vHyy47F1DTBSLoYe7h",
  "key9": "5sV8SUU83uAhWHJJKj1Tt4t3jXzYQXrHpc7FqdMccbcoYCmySyTkv1KDX1jadDEaaPC2k4524fZzztyLCZtd2Num",
  "key10": "4RCoahykkAeV4nrhjzQybGHEa87Pz2H39xdyPL6QeiZ5chhLbZVaZTfJyBc9NPbGU6yn4aDBghwMkDWP61hHk16s",
  "key11": "52Fw3Uu4Cf6pd2o9Pe9V3MJjH1oBptGa3GdkTH6wUGtRfJPYGJmAh5xnWbDVig1VRHXvwyf63VHkFqvNHMUmLvUX",
  "key12": "2Jf2yF2UMjw3iqCMyZqLBMZXHtg6zeEdaQ6afv94jPA88Gnea6KbkSaWpPcG8uyHDaJdK7wfzJoYKwM2MQTtopAS",
  "key13": "5bVXYVD57eskiKrhBYaieCrTJPi4A6EZVPMDKz88ALdfDHFJXmwzLbjqo8Vi8qPyezcrq6aygNoZbd9RNrq5avsQ",
  "key14": "5eco4ymZm3EuGSuXUXvidpihRF6gMAjrTxrtHTSuPw8JDboqcYrRkPMzXUwkuFJqt9e15u84gZ2ftSMnuSamw3FZ",
  "key15": "52kuinqmvsQEBw7M6sSG1ZsHgfRvRjdDYn4jsVRsFdvNQwsLsvKjuGm4amMv8noiFuWmBqKUksYzqCNqDpDUZaAJ",
  "key16": "2XNNVZZKgnmEGyK5xYX33fjXdKUwrbFtxnn8stNFKCU5VkSjMhhJajCyHGnsRJighURqwNvTykqx923u8R9ran3S",
  "key17": "4CuoHCwb1QnQVWtK7RL3ckmaNxYFthrEwWfa1bxnjcvNL1bCGvwxh2LDUWrvsYi7HCxvzJye7fGMjCXTkBsF9XwC",
  "key18": "2WFkS1zpAPL5UVH6s2fFbVfzdYKNeXSCwZx3ocgM2bGaBeER7GvtHLYxVuZxn7LfCAwHcyN5LXFPmwaHdekvG8Yr",
  "key19": "4wzhjUn1y5cd1RhPaE48ojPpbUGiQhxCJs6kif3wJzqgxksgKcKnD9ftDwiLpU4a17uCKJyvmAbFQKCNngevxy15",
  "key20": "2nThdERLzudZvdn9fNZpH7yAoDcjXGow6zaA8oMFcwvMiFRFLKcMbHwqqH7GC5o8RrC9UzSmsPctMFULfTCPo1bq",
  "key21": "3EbQBnAr9vEN5HibqxuFPNGVui7EcfdjPcMkdnY4eszypQU8vM1zx4Tb6rhVoAfVJyF1SoqxtAZJzQE2KtXNCdbA",
  "key22": "je6146yr8mqR5ArDP1XjUTQeJAAv9botR2eHmTFxAkjUW8NgWmsMfi2hhRZv5BuBthW34MytvXHySsZMnvgtjYi",
  "key23": "3TH3EWt4S1CHf9Hsh5A1NWt9uavc3kBq2BwhgPrhoNVdgUBYvLTZkWTTqoyhdHfA3FTNvAtfv69SQVSfS6zZujTC",
  "key24": "3urrwesVGFVirBPa6s287G79cpvUjswW2tVudoh1MHD9cJjuQcvPqs9h9PHLnJAiT1LdWUNkiv79KTVA9bVC36Wt",
  "key25": "46DNTTHctNGsWUrzGArErgGzogere7MfcsGhHZivx1A5oEKTvaoiWry9rxAreozq8HNKU9fxUAL95EmCzu3NDJoK",
  "key26": "2n75bgrRYRpfd2XH3e7AA7FQ4nMhh9WXbuqeEUtxuJaHpSHftotQf7kTuRBTn8CqBF8YK3VEGLfGBFx23CLvdey5"
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

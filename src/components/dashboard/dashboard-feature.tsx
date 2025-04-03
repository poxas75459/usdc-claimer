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
    "3DAdymUQwRLRoCN2592DLntwXB9dUdTJNvqSasm6ZqiM9Hfx69r4gni9BWD5WQ4E3cafVaiZhh7sDBj1VikMT3RD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvyoPy6THuY75DJW7Wjj6yiCUMHJCgeuCdvvbGFcExZsZFB5SxmPJ3HDDh9xDVreRL1m4ihi5qKPsux6XqZzbr7",
  "key1": "cv8aE41qrQJZ8LhqWzqHvPW8hsAsXGcYTo6WWZ7kzjBHGN3CtvbU4ZW4adWBB9KPHNtEyzCSzXne1SoZqKcYjox",
  "key2": "3WUVJk3KkWP6rrXKxhTwe2SQqrKVgZAktPh1PW1YZzhvKfx5HhA35MQVh1sKVVzYy52Mv3HedR21jvMHGDoRrpX7",
  "key3": "5JFihYtHUVKtpt2YXeqpsbnsyXMGU2KmNDNoKyGE6m9vnU47q932AgX2nspiBoxvG4SBEg5kZ38SbEXPqCrHjH9W",
  "key4": "3ivZatyiDKWRF7YvMxfBDAra6QbpeHKS3omzQhxJWJjMZYwdmqpxxw3PToxYZWtWYzqGHgfto1mn8fjY8SKzfCqn",
  "key5": "LvQHpFyPYBfPpZe9KsQxCxKwBE1wmngTgvNJ6ocSeb3BiafK4EJEk6irmfidHZAdAno2qyAkCmK4s5bKtefomGP",
  "key6": "51FteQPwD4KP4ukPCHVhp9ghZF61TtXyrMRQgaQUFHmsTYUic1TkgrMp28KkD1CnjYFor257QY3pRnzQD2TLZ5h3",
  "key7": "28e523fdnJhnwpgJAm7u7gVtmFyJr8bs25EuaXsspWRn2TZB2QYJN39rCzZeDWfR292N3cTLrwukDJWS7MdzxQoV",
  "key8": "3c8CfBRQX5ivGPvVEuehE2NEqe6o9eEfinbZYc11n3h1AifxtxKgvS7goGXz5yHV1dKhD4W1mLiw2CAqudtehMgw",
  "key9": "42fWAcdQ7wfJnCcuBEYjJeDR87jqE2m8V2y6deoUTUAupPrzfyNzpWLL2Taj9nbECkWS8Kd7Fz17NLsmapTa2AJi",
  "key10": "5QYPVb94LSm2kSAjpSBPU6b9EjsFV29nmD3jcDP1zD248keNL3M6GbL55DyFyyZf5uta9i8Jchgb6hyRRs3P4en4",
  "key11": "5EPo9K2tbTRaVwNmo2noX5n2mAArgNJXTH8zYCA1eEqYG1JtJY5NstwPYW2xwZUtFAvwt7MgYu14UvMuQqodfeC3",
  "key12": "58Ga26Q1NmxnfcvpvKp9qKKCL3Wcz3u1Vv4YyEiTcTdvKYL5mtqRKARfje3N2cUc1QFcBpGzgnKsD5sfdeHC6t9s",
  "key13": "2efcoJaWoqdURvSw6uh3yJ7izcShSkEMeTh1DAktkCAes3tsPLffmATZC3GnnWaM9aNqWMGCpDcfw2RXUVeEku5b",
  "key14": "2gWyMcyFCj9X4qhka3harkVDVWeMQs9ZEnHReT3E4DbN8j4HDbsUokyJjE2TUtYtsd6YbQbarqf3YxWRkFrWCcCi",
  "key15": "vPzZDwfL5c6jWvaX19dAfVoAeDX8UnCnEirHuWRrF9jGjRv2tD6kE3T3uBb9xetw8Y2AA1KhLMnLnTwbfmqSrXi",
  "key16": "35rvpX8JyFKyTXRR5bULdSzbTDyrQyqqKxRTtLYxhR5WLDed8PuhuMm48q8m1xmHVPpsmMcrBtwtrVBHcMfXLXbo",
  "key17": "5Det52CBWfMhB8eyKidnuzsFds4sKBkhei6MS9zfm9T2Dn6ZLc86BB65NVacpwdVJ1chT9S2vZMquza5zZjojrxg",
  "key18": "sfkLDE6acjF9VgDnfaW2Cgm9rkKwwUgicXAoWSbY5Q9E4gqq4m4f3qCsGEQR2rqdXXH4HqfCY56i8CddujYCjrW",
  "key19": "4d6e7XFajrQuhgR5gUExmQxRT93ZNkC7bxMrL8MaikndVEbeN3Pg6VGkJVJokguRGK93X7BVTjYxuWYjKyBuSXq3",
  "key20": "2vffHcb7mDWSdRJ7BSMah46FN5AMxCxVRGox9YyPrcBWJryhdhh1VuW2tg8fW3Fz2pjAGeHBS59LGCwMEuthB5DM",
  "key21": "4vkPvcBjDEN2wMWpEK8MjhTfWQyFj8cNUe4N8F71NQPZU1m4pdWQYSvR5PvrA6qXf9VUaPc7ZVigqyHfBjfjaWCQ",
  "key22": "5M1UdWVQcsVkQbWffrCzfkFWVrKEDeW1m2jhayfMZ3x8m8bhRxi8C27Kvvgs88arScCxxejh5vnoPbAVFWDKKi6y",
  "key23": "5f3mCmCPZw3bUpPUVbsH277F3tWLxaccK4ToUhMDLTHvmjfRiRWGhvrCYcFZaBd91KQmr61LiogWu9U6XPRiDNK7",
  "key24": "27wg17nG55Ljsky4vWvfq6EtLos42iLv1ntXnHooEZMSzKZA6cQ9d3T67wPX2gVdq9WbKwFwH46W1aGppA8aN1cP",
  "key25": "kbSLFsxzV9mY9WngdvJwFH41JeKwqsHoeeWBM2wKPRSfLHxo9CWtPoRQkpY3CVVc51ZHYbRxoqdQyjNZK6wchfw",
  "key26": "4ZcLSh7tx7BdgyhAhm3HD9ATGoy1uTmFXjbqBiHEHXrJ7or11PVjoZJbwB6jFmWpLxCVrGnNyqm1AwjjzTeww6Z1"
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

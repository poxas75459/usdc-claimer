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
    "55aix6TtH9oJ1H7Vn9rPm5meKoDa41a41F6QXU2CHyhzTkkc65yYtWauYneu7XbmipcC3XocYS9YeU8kcJa6Lqkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wCwJb1KYVKkyBKvKthraY5nJk3DqYr8h71NyKW8cG1S9PtXuAW6PfTS8UuGbTFS9oAoGzVrEhGYuqyxyeoboWnN",
  "key1": "5nDSzScMrchw7rafjBG5aN6e5EpGBpgAawVYv6BEaWD594wwnXLdtcMZ7nbENr5ayBw5HMy8dbDnhC4c5zUP8eJR",
  "key2": "xwJjbAJPV1h2kNEvfR8MBJYHfSy3sWPoXac6U8uzPVbnpYZYz7Erm44VcFzMiECGgNEbC3iUTPS9dEBNzkp2RZC",
  "key3": "unQRWzfyL5cZnhx7BPs4rvwNAgYH1GvVUb5tgwJHKLGqJcshaRmHhzKbAE7KMGNqzszNUkwMzftiteShndWzZE3",
  "key4": "UQDthahpTwJ74xXYEHeFvisWCRyMQQeBwopYYn1tzET32MEjaedvVF5SS7L6C5oeN2wgtLCwjSgzurVsrtUnyDA",
  "key5": "4S3A4hf2wo4VrdbApS2JmwHG9ev5JBX41W3W9nC4FJcUKkAwJ8JVQGfvPNoECecqxn97MxLrBKac9SGnvwMXzeVf",
  "key6": "5kbJjc1nqKaGbKmgqodMYK3U4rAKFEfwZCuor86V7tRb1CiPTG58n7t7vFiaJgLyZVq93nw3mPhVpUpr5jb68cSF",
  "key7": "5McmRzok8q69Gez4Biu1QBCRAhjwxQKBewEAF3c7orTDvpwVxPa2Unr2nmBZP4BHdJv7SkipHGjoD6gbA3wRJCVA",
  "key8": "51dP6J8YX3j5BDKeLZ2vgW6UbhDtP3MrwxrQdXkB14LDUq685uox4CKcxeM5WPqx1Jfwfu6FTupt8Ru8URw9yzKm",
  "key9": "55GDXWW2y9aSUXDYBB4LUYnadjciCrT7LDZjNtLwje3d2fX8qqm36M6BBcgbd5epXRicJRrngYmtx1dGqBypzyqd",
  "key10": "5aXy4fiMEqb1UwM7kBzmq7gmeMjV5Vn3fwrikuqJNUtRkBeK4RSpa51nX4gYz2Y976nv8xYs6BVKakRghBSdMfc",
  "key11": "2kfgSjDJFhcCW8SK2PNhABgQAaNKj3Q3iv7T3FyZWH4t26dccEi8ZgRoK3nmk8w1F2jxDX9M5pk2TsEXD9h7ZosD",
  "key12": "4aT2kbxK5trfcxz6Rb11e5VAeXe9NLtHRrf1DxxvaLk2mV27orA31N5vPggdBRx832M6h8kx4vAuHxkQqcTL9eWz",
  "key13": "2WcBsY71c25S6FxQJHh863VgXtWhZ37cZ5cqSg8UDTSZ9S4R2F8EG8Tht2kx57TyVemgFASF1qo81XfxNEC3VNjK",
  "key14": "3dtmDQdDu3s721Cg1puh6eE46pZ5tnPJjeZvwG9f11V2vse2fDgtxEaruoJh2QUa8nQhgf9dYPT6xtLuZUCxYZcx",
  "key15": "4YxUWrvMSVuD8Mwp7kbjudTJnEkAa7vVV21j4RU7QohXSyXe1PqrwE3SznuM4fr5e1FqdK3NVeUmi1PTTfX2etcJ",
  "key16": "3DvMmqspBhWuWobhum1Q5oRuupGTwUz2y8hyUy6fogNcJsXGG7YWS7yCfDLx5QCeG5ijQsPST6amS6MqUwZA829w",
  "key17": "54go6wKyxzJBWhft7Fp2Uu5akSQAVLgZ3ruq2JqRkDfutqiJPzf5YPUCP4g93z6ENTzNyvC9RVW5ohBBvFr3w8hF",
  "key18": "2SuuJjvTNU5ZBTapSD84gfhczLaE7GxN3wo75ikG4w9nGjkVxqoXA8fPwpCSH6v4RyYvDsHRGgXryqZhBguhkUVM",
  "key19": "4vLPPiMwE55i3xjGXgJcRqsN8eNARBde2QoPAK59mhWSuEKt1Z195zH75qy82x7HsisNTyg9fQqc6NtDFp4WYpRv",
  "key20": "weZue3J34dWEi71eYNdAEbLcvGXU7cEApsJXNJtASTTa8yd1rS4Au4CJ8NQBFnzTEw5qe3mfGjzbvEbbVxNs3ks",
  "key21": "2cAZGqNaiavCtsvwXmKi46HBzR6MMLso5mX9hGXRFuRMgj59SESqo4aT8gQ6A2r3EtWHktUUSiqrbAMY8SR66NFA",
  "key22": "3ap2y4Eh9nuVfgnBvFwS1gD7TTNmAHSNigzM67VH1CRdKFzYAyckzd5wAGtCD1QAFMVT8DFELUrqsCmPHnEQmGhP",
  "key23": "2j2XcHA7oXDWR7aV3KmhsT1yD54TnnCPJ8r93FgHbBvCF7rf1vJ4Dj347NTmFtv37sXjVA9NMsZ3BsKJU6wuHKzD",
  "key24": "4Y21vUbh5SVcCeGmacZN9VWH4SgD3smhy64RXJTK8AwtPynVeu4R54YxkEAnvjcjMBzqFug162LsZRNFesuckJNj",
  "key25": "2MVsabuEd6BsNZZ8anGqppfCtW293VvHMsZGb9A2NcNReMcaM4Z2cDrAreeTKkgTYMhST6zUhnnoYoLejnDEoUJ2"
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

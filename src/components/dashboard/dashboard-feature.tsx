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
    "5onbbsq5C7JRDDGDD4G7jK9qVv9DzTNMkmK5XxiJUmGJ8KD8q3iqNz6Ysr3ug7FzdhCb7gSwVRXwVtdjLf9yUqH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PWEt2zs4NrwUYjS1tdgxXGBgrLk9wV1LpjKbNprrraFipZfs7x9uqmGw8zjbP9pFBwfQ6cbLksK8CohCLCUJQds",
  "key1": "5Ec4QJ3VDXmhS4oKhkXDpHtq9Af9G5xWgPuQkhg16EP4BSVVh1Rjphkexx9PuX8sgztqaQYZcbaaDzroRvDqjtib",
  "key2": "4L9Q5nttwuuTVTZTkt8Ckr7JNrjCnwvbGjoxWTwm4MGYRNvT8LeB8VUhLB5R5QpaSaGPinj7KgZJTWFNdorCqdoH",
  "key3": "2Jk6L5u4fxCSxjRuuNUDoUhE8Kh7h7VDEENLQWquTS4bCZ9h5MTuu4NwWekmCcLLNMqaEbywoE1rbGSPbTb2EJVk",
  "key4": "8LHb1thWS9QMwFYYdLUvyJ3Uy9NypJQDgo3jSXubSHdviN1yUQFHW1oMLREGUKjawBBXFbvhbbLBYko4syjdVwY",
  "key5": "28nL7zmw6j9teX61DL3mykTVW9mnbeBhQhJMTu5f1BygymTaonD74TTx96uAuLGoDbhZxNwgCk31GTx6k7x1MoWD",
  "key6": "3mXaQK6pzMeBLdMAnUzWw1J4qdigBW8RMdAj6murYjvCcHZjGE1S4BE296ttmtokqo2vLFEpzeYHjHGvKKL9jnGt",
  "key7": "4qab7xpb7y17JHBTUp2enKTNbZ62hhJoYRY2eRdB4e813ARZUNKgwvC9FrL9VDJHETGGNTh2AFLNXbD3gJYEUdfy",
  "key8": "5yTiGY7gyc69dd8ZvCeWcsZU1VzZ8ChByy2gAt5PCpjDx6dMKzUJZWaqeBXmsc4BAqQmvwRWdGfZFsFATV7Gor4y",
  "key9": "d7sz8eX8u64VVtEa74gmVYnGJ1rryiTwsaXd7QCRU12stdAANg3wwpX8uQ59QFiKXBHUQxBgA9ZgAHGhLCjNhUA",
  "key10": "3TZhmjWRreLCut1wKLHrFHLYCNGvhrd5iCBo6w2e9Qi5gD1AokjZwPs4ZYeEip6Ro9uBHZ6sn2udJMCf5TgrU3a4",
  "key11": "3CMQDeB768DJTSPaTh9eqwEWexC5QQVYDxbSiBg89qRmzKHhaKtcQ1zgXdiqGiWYFdNRyUYyG8xpLwhPd3Z2DDEz",
  "key12": "36XKEsTbc2LvLMmAkMnBZpTn9R9NXqh7bCdJMFqSwwwtPoKHStCWXog2bPJbREEtwiZqbSVNY2besFd4zhFXgV1j",
  "key13": "42vEqxMmwNrZvpUhSzhTCLsumTEYenwUfnGfUnqdpN9EpFNksmvaV14gUzCpZuCVtZaQpJUG2naFPrsAG1nGZb5U",
  "key14": "7hjYzKxMhdEt2a8mbnPBiKUTgw4zobo2EHvquZ6qxFGM3uPeGHoMYdmDGrVT7CbVK8qu2oj9aWBsi9eZPGkFQdb",
  "key15": "4gXEZnvLrTPLRgygMNDVTJze9qqf549mUoBt84fff3GGhmu3BRt2qRQjAbrdv8TXm1xEyLVw1sYFE9oZwDL38jzq",
  "key16": "2tw6cY3kr6syrYafnReWBARVqe9Z4xwc9jgpEvRbsk9S2iEJYi8Z93fuhmY2J1ypVPCB8dJP96ejyAHxVCnF2fVm",
  "key17": "nKzk1CeDXekdGeqNHkBHcMhdkwoMr4wh8tuynKZC6PpTe1ToojHLkkTZhXMt5MnqEjfqmrdjV1re6LuV6dhfmda",
  "key18": "5hTBh5k8Z76gK1hyTDabYXmHrkPDyCsys3Sy19NUejE7vwYCLZFiAVR2YPgX3ARvj6UMbnPZthNN3xBwpZEBJpQF",
  "key19": "43CRs2QVkBFXDdQfWYvXJyGANrUdYAFNtkLjvHPKLLvxBuPRHWgsuGwtfvWNGZjJ2cRAWRcsbEUd6FBYeMVV7HKs",
  "key20": "2m7zVXdph3sokoQqSmabvwQZX9nWPa9GEDZT4vrP8YKZdwCQELMk3scZThWbiAQWdaD7HbbhDX37eQoY5hcC4aXk",
  "key21": "4jG6vYVPFqCMbVh2k5hfRdQPkjxjRrphxFX6cEzhbDDFQRBaXGeTJvNamJbwoGTJa9EmMZaTVXsm7HgXVTCpMtvC",
  "key22": "2ZDtksmkgBPhHThwdZDQJDH25aK7bufyj6kqxTa1M4vt2pTRNWWUqAxCaN7T5cYHM5t8cK2rDm7sWEbwzQEN8ccy",
  "key23": "5jjzr6uLvUXyxZEqhhx48Fo4MK6aioEMCHsiHeAxytQ9aoJUKeu4RZx3Ntiag9azeSwNx8Cjzqm4MvspPSrecADD",
  "key24": "5cPePqhEDMAjaYY8AjpsnzrAqVHkgRJqbmxpyToCAaacfGchwXG163WC2DF4w7dTiyquNDbVgcxLwmf1rsuqYpVo",
  "key25": "3Mrjux1UAarGmDWQmLZs2Abc3bajHyG2ETbkG8EyoDoerVWw3DhvcLpyeiNs1fTZeqqX4MVp7SVxHqtv3Hhe87hp",
  "key26": "3xg4SfzAxhpNZr86uaRnG5duL8k5XNqQPZyRa7B5hMx8TQxNKcV5QqGvhJ5DWid5ibcf9TNW7u81dhmnpV4mh1g5",
  "key27": "27kuaqykt37uFQvET3p9rmq9nd9JA2vq5uvFGs4sEGKybt7ZwSG7XkAah8mz248bTyLdVNhrnYJACqsdZ57SP8Zb",
  "key28": "2dEHBggVPuGrG2yMDXrgUZeBwTwzPX2QbUpFk2mcwBHqWTbAw48r2fWUcrMptvsdu7Soj5eXag9GgaPJ6SHp7QCC",
  "key29": "5LUEMNgpC9rXrtmJrGbkvD9dxo2uVDh1bU6EKVtSmRXyo7LC72cqZxMcQ6yLwsNiFJmQnNMrsGG5kFNTpJtjGt2n",
  "key30": "5qdEjYrTfPboxwPu7UWb5LoS1CmoADHAub4efRNkjq7aKpE9AcSRKLij53aPZgRSgZz4NwFCPGzztbPMaz1HnnaD",
  "key31": "27AVYMnagCFyEHZshFKHU1xRUwiWJJRkq9d2dr42Pcyc1vRwNX9PFLTv9dQacijuXqmF1NSoD9VFp5RiHVSwXbU8",
  "key32": "2LCZ6er37PtCWX7rHfDZ9FHpbxXxAS7zuYyr764FQfAbhCB3epVzVRrhkiuBvCbq1iR7EoTX67CZPxjJAbavrHA2",
  "key33": "35P3vAfBWLicwW2voZxXS21AKvjmLNzmMyTNHN8dcZQ7prhH7YsUZD5hv372ZWnqT67aUbznpQoTvs6Gh2B8wEJb",
  "key34": "52Q6uTRZLiVxqvBLkTcDUibFD2re3tQAarsybiLuhEEoPgroCxxEPfCfusS8vMMfmgY6DXxJXyYkBc7Z6djbAy9w",
  "key35": "2HKa3wZRUzhzf1KbKXpPh5m44SKe455MgMExEWfcGmyajSwBju1kia2N3YiB8tRU9D1DEaWxBG7YWCGExyfd5M1Z"
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

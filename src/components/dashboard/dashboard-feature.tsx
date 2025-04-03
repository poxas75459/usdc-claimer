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
    "3Fg9C6rLRM8Cnu13mw2AqqWA1YvPx7sSRpjN9cuXBnLjqRsvFHcWccZc2nJiEhqQXeFd6qYRJHBqpRWo7i4UD8ND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gC6Fqapd9QpJEgje4AS7sL9TRFpq1E6xeSpskM26jxsy89Tdq4yw6WjQhHEmZfDSoc9dqXE1ZtHgJwzNjkAw7G",
  "key1": "4DJ7ZyUwAtAQpHncnjuMSBg7buTGSgXZzKv1fT1vGQhtS4sEpXPFSubo7yUXQZgKq31Q3F428k4TpR7Z3jzR2q1e",
  "key2": "44wjizksB8pCx3UFj3U58i3479yzKuoVQ5HuAq6bZnwfuyQvSE5VPFEwNmFoFRd3bTUidqdRaCKZpNFrJbwJRGyZ",
  "key3": "46hFVS8mLmuHbKHoFsN6g4FkTN8wFFSz4kcg9D6tp3cKqxXQoTZfLaiyJS2tDHxgHtzqoccBFRnvGbrCL7FUywz7",
  "key4": "5wutrktbzhhuvKU4BcpmDWP2vaedNNYiDy22TjzUdKfvKdVcXSxtud8vpDPxH9Kti6pcbtehPssv2gcSrmq5S8ar",
  "key5": "2vTgYFgSY4g7ECxmAHQXCGqRGpJqtw3HXke6k4sgMyeDMJLwGzACADPk8XqmnZNPpeMqoQ3uwyye7QqdrAvBsvsQ",
  "key6": "FS8UQiAJXugTqbYoTP3K3d8UerucrimzXtNZbQRykcw6MDAkfqdchyxcdHjyxmGdWP1VoM5K3KRH5HXcJTjNoqw",
  "key7": "ytHKoJZRq6a2g5onH1je9myUePNZ3bbUrkhTTdHtuUuXpWeQy84R48KTkwMMSg3RV4Z3S5fftNtmSbLNnxefJNV",
  "key8": "3GuCDFH1AjpLmdKf86hCARnG2UYjAFsuZN2jPk1ET7G3hfZWxx6wJv23RTDMHzAdr5ttdPp6uU1Siy81kc97sJx7",
  "key9": "2sAdk9HqKTLkfxFcXjzQvvgSpNSJ2fEr987VXdZiZ8Fbbe6uTYnqsNTwLwYbbMsKc4JJh3aL3jAJB4yQwtC72dCE",
  "key10": "59APNSi6Qx3ymhxsR6aCPFaESSy9k6gf734qSLiPawMitxcCLEGd4bFjbcixBEbpk4entaN55WQojSK5ezcjSDuU",
  "key11": "KkwN1kjRHTAtQRA5AZhM8xChFZPJcKLesmeTsfitXumaCJy9RScjM1GMWQ6VzrpeDDyXZbapLveSgax2REXUEJ7",
  "key12": "3UxvBDs1KPSYhbgn2oyXNCUgTfR3sVWa5CfrR1Aoev5g4C2F61jshjrsfqPmbJzXnZhU9ZFt5bxzvi9Y5nqxtC4Z",
  "key13": "4Espj4EszxxYGoa8PoPNV81dPJ96BVK29dqYcsnJuc1GmFAjeHeD7DChBhmpHhjA2zAWXSTkVtXeMHTXyCtS7YCS",
  "key14": "5eJyBc5EituZ4gXBzSBnKoSeCAAKM7h9CfmrA23MrKdCYupqd5ARvE7hudsVuSZuxcT4AhBEMET7xF9QhKTqPkXJ",
  "key15": "R7rdPShoTNo8fbpS4fyJciSySAvysi4nzbbZtuJn1x4evbGK4Ce8pAfiYokMNx7YK2dGrZjTNe9FUNTtJz7YbfP",
  "key16": "3HTmhRKn19Bmqc6pV6gBUSonCa8XZwP8zAv9CMCFJHTvAYEZvmtfR1SJkQbHUf3SWqV4oXP6mt6gzr45R7YL2Pxu",
  "key17": "61Du4hxWfvFoxHBo4zhWfRMjDtJMtRtTPP5iRufHYX8sZfgsAvxiT4qzvCk16sWmYpuTQUqt5DJXksKjBd4Xz4tc",
  "key18": "3qdmerv3Ayk1sEE9TYwTDtsqxYcHXyppLQaLAUrDGpNrVJp4BbxcjvyvnNBtvZJg67U8fsm88HYWL6gv1MpseEFZ",
  "key19": "65zfChaJYVi6yDjau5CYTC7frvJ9cmPmgWFL5fsgnQMzvQfA96njPX91Xgopg1f3DzvVqR3XhiAiuSc3gEkhnSf7",
  "key20": "4Sf27TZHrTVNmSQ3Eveb13r1w8FvTNeGTHZZKPjzrcy2JXKtsB3uTmyV9zJed4EdDhoPd84TNx84qcU1ExcqwpGV",
  "key21": "364RGTrTMgACb8LcDV7xc3nRyhQwEGKV7qCDYv32Y5fASm5TZZECTa3eDMxb8dHyXgnj4QvYnJ18uVy5Y2kweW9j",
  "key22": "5QQWC9VUoY13vb56jxyS7XZWasdcFwm6rHSgF1keuqGnkDiyeBCrNHAWFTXrttykqJD9Ev3meLuV5Y1u84G8Gour",
  "key23": "2QJjXnCKyDVs1s8VjD8ZULbnJgMMnvbB8iA21uCfvgRtYjCTUidgnP1nDmmfBEYSQ1PpX8ZSs4EemZRZ2gEJKvtR",
  "key24": "3byEkuRBcV7so5kSJzM54hUWCJGq6DVGibQYKR9KJnE6WdmZsAkDkmvyunkkzYXjMSK2Tx7inJxT67vL2s3T8B6B",
  "key25": "2kveHM5rwzpo2w1ZYUMaEyhK126kHo5eoC8nsf3F6K611FZwxBd4xVsxXudceMPwzLERFV5DA4XFLXeoR5iFaPc5",
  "key26": "6jbXdZ3NzYHwZViKjfNFkt8E923TabucdYRS6pZVSBDTmdNGKz76n9X92yCJWG74fe3Jm7r2DKRhKQWzT56sX4M",
  "key27": "5NVdUtvimAxPoY8TFJKmELmSaRFY7KFM2qZuqtA6g597B5Y6m45KRa4pJ3H9MoWY1U69VfjpZVp6Hf4Q8wEtfSGq",
  "key28": "28HS7JRDLS9znd9oCVvTKYaFGeZPqv9gW56asxy9m5iyq1CQMLEpasLsTqZSwV7WSTBAgvofPjVDsJZfBu1LPhhA",
  "key29": "25kh4v7Pbn8se4qHsZP9FXvGB2omJWh5gVxBwYamEhPEThNN4dsmQ4hKL8P1kLs7W39PorDj4AiyFETts7xCNVzb",
  "key30": "Bc7eF3S1YUq5LnHP9euYmwZdWjhQyHqp2E4tg47tGC9ubRLhmWTMcAKJbvGBokyoTr6qKcmJVeX7BfB2Y8nUKfj",
  "key31": "41g9idZ3VgETRGPmkYbTqhjb6h8zSuccp26XRQusr24K4149ALF5v1vhjLDw92mAfMmZusxug6o4uNucuDE7effc",
  "key32": "5KWiGWW6akx7Yp4rMTdSSv5YGuvgPMvkLQ4C39HsHRfoDugbsXrjdbeVwNG5VUc5x81zNXYDfBpjJHVNJG8J7gUn",
  "key33": "2CV3rW1FBf1RxUDjUf97AGCGfsrdMfNdF3Nx8LYpeAJmekeDwmwfKVtnVyYnCHxaqLoQZNb1gYbKWTD5QPG3ra3c",
  "key34": "5156qULbS2epQWaQf6dpM1udeYV3BmjchbBKYgQMGKmCDq13qZWQNjYhfCfHbPyLJBPMeZq8tsEAbsLZKSh68HqK",
  "key35": "8FS8BmWy1r2RZjFfvFejabsD6bG6Kv4Y7wLRrj3LYJZ2sWK78GJSSZWmWDqwQPSQpkSZ4omY7s4wmygnALQf7zS",
  "key36": "2V61jFg6GCGLqxWX4ujDe5E8eQNK88nKqbQx4GHX7qNch8HViW421wJqf6teR2mSTAyG4LFZKek8tgUGWgNr94e6",
  "key37": "4RCbbN3UedyarEiHSu5L3Apg4RTD4BdZA9GYegyHBTHMhq8VjPHRAXQtKvQqEYLkK1jCSAe3zyY4wY4WXNvefsVQ",
  "key38": "4pnGhSpU2uxk45jZPck7dUXabcSA8jSEp1BraM8jx9YHxpocmU696KVv6ABqVfoZwFz9Jd9Wvwyi76TKaTYuLvw1",
  "key39": "4B3GiKxcDWURbtvhtU8ckwrA32qWeqGiFmA2vceHZMC7gF9njqnayx5bR1hUMUCrEx5Ho3PbdPDZeNATchCyaaST",
  "key40": "ttv2N2Nxb7V6t4kTCuWGZmPomueWhBcQjYumQPb6wR2JqdVpHWMXBxTtLz1iZH5dS7thuYBaMFJdK8xBctZs5dD",
  "key41": "4hxHfcXmpLgRnEiXNy74pfFvYYoBFko3M27vKD9VzMMdSGZbs9faBqovfw8tU87ye4FrV4hn3baBaSr8YGQ6eneG",
  "key42": "4HZm7qzuVriNECWGXvEUm4x9vri9zvMt88ZFaHo5qevh8yHrFHKnPiwk7ZhKmgSRZTp78Xa4nqvEm3qSepWyWX7Q",
  "key43": "5VQqKCqB7ehjLs4P76W1znwtCX29PerrqdtFrvhRvJX1aeeqM8uLqrmJpds1fmfQY5yRhUECDkXPvUKqE3SAXatK",
  "key44": "4LnmqtFGFUBeS8jXNQgR4vCMjDirp9ShPbYJyUpu2gXcVveYGGi6RoYTKwGpHU1JizA5cMvjPyanwERYt8ZKLcPU"
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

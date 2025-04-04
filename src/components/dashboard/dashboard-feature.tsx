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
    "2nh2f3u5vqzatutkoAEQTJhtBXo4SFCLgdFTFGaftXcTE3ZjqYBfRmTc7T7nVY16CVroRGxAf66JFiQXJW5XnLh9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47qmkqDugUHNjKD4VE75B9pkCYeaqUduwpDjjML474beUqPYADEvRA1Lcp53E6JH6q5ataxav3vfpnk9wZWMS77Z",
  "key1": "3a9QcyUv6aeXD5W5waLUk1erVeQoRXmRvqz3Sno3Mc9t67sTAQHoS2hhFk6QpNWtFszBkcuBjcL1tPYwkzHEXKe6",
  "key2": "2gypcNULpazCQm8nrSNpdDu1ZEHNFXyN34UoRsP8hN5v6z2DEMm9iKJpcMPFFUzUnh8rWMgQWAmP4ucWimn132J4",
  "key3": "ycmpHT9XaWuLB7SPqZxeyyGd4AKNqjtF8MfZxuFTxUzSdCEXVkxBAUhZZcEceEqX8KmhcwUJo8mZDKDCKDi7AkE",
  "key4": "4f1sHWaTmpxgRb3QBZeCrkzCHGTmsY4AjKbvrBb2f38dTvG1Yke7Po7rswW5mp51pzPELpwyNJvc7fpsjztxDZ2v",
  "key5": "6FkhQxbbLCtvh3xnemZi3GikvHZDLJmpH5UHbNzreNNFvLqKHZPiWW7XZs6NM9Ua9V7X7o5KTMagqc1ZYUs6NsS",
  "key6": "437nVuTqs2mqoYKzchZcY1DYL2p4kBiEy5MHiWRr5Qc4FncyprAutT58EjxJjaECZpe95fDqunRLFNakumfE411f",
  "key7": "3yptoKs1BoKBEqZZvKhUxXVncCjyanPDjXSN2MzLZpm5mfKcGuemqybisiNiytsuC6vRp86TJCtVVirYDchfFVa8",
  "key8": "FdustazfJ7QnsH9eRY9KghgrUWvErfcpNguNATHX9JEvukcgQvheo3E2qzLRuEKimVmWCXb1kMyY8sbQvCUboXy",
  "key9": "36ZYWiEYv3v3Jsg6mNUbY71kMwGoVXYPNZaGbHk3Z2psdAbWy4RfGpkedNWhtpndGT52jy8151dAeLtGri5gGxf7",
  "key10": "2nbWiuxKXVfr3WbK2gvDpwf7oJdqrrBycCqA2ZLdpF2AD6XDWM9enfNjhnT8JCjDzm2GHbpJsHNoBmDJmoeGAhF",
  "key11": "2zgYoRHu29xqV9kkjJZEAoG3bmdxbuJ1fMPRgSvkXk1CdmyjCienS2ZpXE9fnG5fRaEeuDNrxPHygY3iW3xVgQhJ",
  "key12": "2Hqkp8MEqrM9fcG72cAzA4MDv1K9UYDFdAi4SdCj8jG8W1bvHmmrcxhTG56qJoTAFKJnkjuxjE4ejS9CayLHRzRP",
  "key13": "rJciRoiCsjnmwuZrYjtiMGcZ7ckJM3HoXM3tHoSnzY7gyw5FCxC262hjog8bSCWa9hJP96rpw5bn8mBrNcJBTYo",
  "key14": "dWbpNsTfACyoECrg76VpTMnvzuDEB3hCv721Tv5KKa8NCbNah1u9VgWPHJRETUzo9MRY5Py2p6jts6ykFBoqEgm",
  "key15": "c9VgqgPH4yzvLc79xqopn5ekCKES1ihdZYCR4Yr5G7akGUryGVcQeAynj9Ewm4tWuwiMu9DuK9852MSCdugFasq",
  "key16": "d1UC4bnrBGjVPi8Mbkn4UcSRA2F8NiCxeD6bGK6s7Lh7J48MQomPPMMkPAN2UbZgTy7wdE7S3tiuzhVehFdz4vL",
  "key17": "35hLiuJCzB1utbmVHyELo3oi9YWCs35CM9Wz6AYdSWXDRepofWZLr4wa1o72C7f91Luc251is9QK4J2kfyked3Qv",
  "key18": "31T28hSDvcr2LRUQDpxKZ1inmn3Qs44vXiM5UqPzoMPxL2R1tMzbjhxoZS74LnPpKBCaamLQAnD6JZcxvYmoT5h9",
  "key19": "3z4fpopMCcyeYA21MpLjk5YqEAyHKBtsT6J566o6akqG1svn7WaHnZ2RbNY4YmK2YxxZhx3Tbfg5n5gh8sgG9dHW",
  "key20": "2dWcaT6WiLykWnCHhdMhd69aWAMWVYtaPnmtKBVa3McQ43EGN7eKxUQUuTqBsJYepuTf2rvFrz5pV1hABRkB6JsJ",
  "key21": "4xvDSY3UqJLT9JvLmWuk2hacHbD1FxrDQHPk7c3enHu7naDdSs6JM4p9N5ZbnxHADuX2ur1N8wN3YrGJZJGAuurw",
  "key22": "2BT4xD8tXDke2HoDWhHeFh85TgQNvX22TLKuf88cDvmHgSBNtpMxt9vduowRuTpcTLUqTgVh4yuGiHRSGxA5oWe4",
  "key23": "qnsVhsDf9L6bCfUswyPir8oQUVr9oXRX39yiXMH3bA4v31DNECcwtRdsYebbuZjs1GzG4tr5b35nqgM4wAddhAG",
  "key24": "3BUqa21btwBu1qoXCFGHfPnn6XA7xAB1H3dGGrqXJJqKFCsS5jtAPGL5c2gR3qq2TiJLSpxBNtELHmNBtd1npomT",
  "key25": "LNf8C3hKgguMn9wgrkfPxXtYHncAq1zusL5XFvXjgMCkVn7aQk1erwLsPpZnJgwQ7eZZH2BEm73gHzfv6cnyyZ5",
  "key26": "xDAjmwKSfW9J4C22ZA4jerCKwzST2bx5hK7pvz1cZsp6tqVDaGv3qiC8eeMThYQfKMt6xcPoSLtAfUZH6DDCfUE",
  "key27": "4Kf8VHNBJmdJKTY7yFuf617Y1i3vTa6JNwfNH8tABmHgsKkrvQBpD7Smdb6umJg35CRtQiNit6JDbRCLsvaHNLHu",
  "key28": "CdduXVVMPfCNsTYY8613Z7xdMqjfuGtHB2DtKUyS7BkHgtRKbvm2fCzYTvh1EMwWP8XXzz7YBzYbLjMXZhDXj7H",
  "key29": "CuKGNYULBBQKsVrfPmHbywby7stQzvdZusXVDMdCvnJHpnds3MNdgJLmyJGbMggEcpmcyT8tsQVAnMumGsUKx3W",
  "key30": "ZXPM6bphQXqy8a11gvEnWuUjvFRtkWgpbWUSpWtrAqyJCmPdEWMyRaAdFj1EpajyvkouexRecsewPfRQygsVT7f",
  "key31": "T4xH8jYWkYmZ6QcgFLSWjMmvqaCm65crMNue3Uh5KFwMDjxVCY6VPoJuQajXMPxLNYaexrMrQZdMj87ggbaFLCt",
  "key32": "4zbUPRnZXMETjYjuG8xwosgZrSAUdKeGLnECNh7aPuxHLrQbY8sZtshBUnpY2Nr94ScU9HicM4ciawmUgoSfqm4A"
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
